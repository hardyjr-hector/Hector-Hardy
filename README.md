# Backend del agente IA de servicios (hectorhardy.com)

Este es el backend que necesita `js/chatbot-services.js` para funcionar. No puede alojarse
dentro del `index.html` — es una función serverless que se ejecuta en tu servidor, no en el navegador.
Usa la Claude API de Anthropic.

## Pasos para desplegarlo

1. Crea una carpeta de proyecto con `api/chat-servicios.js` dentro (o añádela a un proyecto Vercel
   que ya tengas, junto al de tu chatbot de fútbol).
2. Consigue tu clave de API en [console.anthropic.com](https://console.anthropic.com) → **API Keys**.
3. Despliega en Vercel:
   - Si usas la CLI: `npm i -g vercel` y luego `vercel` dentro de la carpeta.
   - Si prefieres GitHub: sube la carpeta a un repo y conéctalo desde el dashboard de Vercel.
4. En el dashboard de Vercel, ve a **Settings → Environment Variables** y añade:
   - `ANTHROPIC_API_KEY` = tu clave del paso 2
5. Redeploy. Copia la URL que te da Vercel (algo como `https://tu-proyecto.vercel.app`).
6. Abre `js/chatbot-services.js` en tu web y sustituye la constante `API_URL` por:
   `https://tu-proyecto.vercel.app/api/chat-servicios`

## Notas

- El modelo usado es `claude-haiku-4-5-20251001` — el más rápido y económico de la familia Claude,
  ideal para un chat de preguntas frecuentes como este. Si más adelante quieres respuestas más
  elaboradas (a costa de algo más de latencia y coste), puedes cambiar el `model` en
  `chat-servicios.js` a `claude-sonnet-5`.
- El prompt del sistema ya incluye tus precios orientativos y servicios — si cambias precios en la
  web, actualízalos también aquí para que el bot no dé información desactualizada.
- No he podido desplegar esto por ti: no tengo acceso a tu cuenta de Vercel ni a tus claves de API.
  El proceso es equivalente al que ya seguiste para el chatbot de fútbol, solo cambia el proveedor.
