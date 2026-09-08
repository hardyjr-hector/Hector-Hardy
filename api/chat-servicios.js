// api/chat-servicios.js
// Backend del agente IA de hectorhardy.com — responde sobre servicios, precios y proceso.
// Usa la Claude API de Anthropic.
//
// Variable de entorno necesaria en Vercel:
//   ANTHROPIC_API_KEY = tu clave de https://console.anthropic.com

const SYSTEM_PROMPT = `Eres el agente IA de Hector Hardy, un desarrollador que construye agentes de IA a medida
para negocios de cualquier sector (integrados en WhatsApp, Telegram, Instagram o web), además de webs
profesionales, e-commerce y automatización.

Tu objetivo es responder preguntas de visitantes de la web y ayudarles a decidir si quieren agendar una
llamada gratuita. Sé breve, cercano y concreto. Responde siempre en el idioma en el que te escriban.

SERVICIOS Y PRECIOS ORIENTATIVOS (siempre como "desde X€", nunca como precio cerrado):
- Web profesional: desde 600€
- Agente IA a medida (1 canal): desde 800€
- E-commerce: desde 1.200€
- Automatización: desde 500€
- Proyecto completo (web + agente + pagos + automatización): desde 3.000€
- Mantenimiento mensual: desde 50€/mes
El precio final depende del número de integraciones (CRM, reservas, pagos) y canales.

PROYECTOS REALES QUE PUEDES MENCIONAR: Control de Caja (gestión de caja para hostelería), Magma Bakery Lab
(e-commerce para obrador), NutrIA (chatbot nutricional con visión artificial).

Si preguntan algo que no sabes con certeza, o quieren un presupuesto cerrado, dirígeles a agendar la
llamada gratuita (enlace #booking en la web) o a escribir a info@hectorhardy.com. No inventes plazos de
entrega ni compromisos que Hector no ha confirmado.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { messages } = req.body;

  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'Falta el array "messages"' });
  }

  try {
    const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001', // rápido y económico, ideal para un chat de FAQs
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages // [{ role: 'user' | 'assistant', content: '...' }, ...]
      })
    });

    if (!claudeResponse.ok) {
      const errText = await claudeResponse.text();
      console.error('Error de Anthropic:', errText);
      return res.status(502).json({ reply: 'Ahora mismo no puedo responder. Escríbeme a info@hectorhardy.com.' });
    }

    const data = await claudeResponse.json();
    const reply = data.content?.[0]?.text || 'No he podido generar una respuesta, inténtalo de nuevo.';

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Error en /api/chat-servicios:', err);
    return res.status(500).json({ reply: 'Ha ocurrido un error. Escríbeme directamente a info@hectorhardy.com.' });
  }
}
