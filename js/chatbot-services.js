document.addEventListener('DOMContentLoaded', function () {
  // El backend vive en este mismo proyecto de Vercel (api/chat-servicios.js),
  // así que se llama con ruta relativa: funciona en producción, en previews y en local con `vercel dev`.
  const API_URL = '/api/chat-servicios';

  // Textos del widget por idioma. El idioma sale del selector de la home (localStorage 'hh_lang').
  const TEXTS = {
    es: {
      open: 'Abrir chat',
      close: 'Cerrar chat',
      send: 'Enviar',
      status: 'Online · Responde al instante',
      greeting: '¡Hola! Soy Alexito, el agente IA de Hector 🤖. Puedo contarte qué servicios ofrece, precios orientativos, o ayudarte a dar el primer paso. ¿En qué puedo ayudarte?',
      suggestions: ['¿Qué puede hacer un agente IA por mi negocio?', '¿Cuánto cuesta un proyecto?', '¿Cómo empezamos?'],
      placeholder: 'Escribe tu pregunta...',
      error: 'Ahora mismo no puedo responder — escríbeme directamente a info@hectorhardy.com.',
      notice: 'Tus mensajes se envían a un servicio de IA para responderte.',
      privacy: 'Privacidad'
    },
    ca: {
      open: 'Obrir el xat',
      close: 'Tancar el xat',
      send: 'Enviar',
      status: 'En línia · Respon a l\'instant',
      greeting: 'Hola! Soc l\'Alexito, l\'agent d\'IA de l\'Hector 🤖. Et puc explicar quins serveis ofereix, preus orientatius, o ajudar-te a fer el primer pas. En què et puc ajudar?',
      suggestions: ['Què pot fer un agent d\'IA pel meu negoci?', 'Quant costa un projecte?', 'Com comencem?'],
      placeholder: 'Escriu la teva pregunta...',
      error: 'Ara mateix no puc respondre — escriu-me directament a info@hectorhardy.com.',
      notice: 'Els teus missatges s\'envien a un servei d\'IA per respondre\'t.',
      privacy: 'Privacitat'
    },
    en: {
      open: 'Open chat',
      close: 'Close chat',
      send: 'Send',
      status: 'Online · Replies instantly',
      greeting: 'Hi! I\'m Alexito, Hector\'s AI agent 🤖. I can tell you about his services, ballpark prices, or help you take the first step. How can I help?',
      suggestions: ['What can an AI agent do for my business?', 'How much does a project cost?', 'How do we get started?'],
      placeholder: 'Type your question...',
      error: 'I can\'t reply right now — please email info@hectorhardy.com directly.',
      notice: 'Your messages are sent to an AI service to generate the reply.',
      privacy: 'Privacy'
    }
  };

  function getLang() {
    let lang = 'es';
    try { lang = localStorage.getItem('hh_lang') || 'es'; } catch (e) { /* almacenamiento no disponible */ }
    return TEXTS[lang] ? lang : 'es';
  }

  let T = TEXTS[getLang()];
  const messages = [];

  document.body.insertAdjacentHTML('beforeend', `
    <button id="hs-chat-btn" type="button" aria-label="${T.open}" aria-expanded="false" aria-controls="hs-chat-window">💬</button>

    <div id="hs-chat-window" role="dialog" aria-label="Alexito">
      <div class="hs-header">
        <div class="hs-header-left">
          <div class="hs-avatar" aria-hidden="true">🤖</div>
          <div class="hs-header-info">
            <p class="hs-name">Alexito 🤖</p>
            <p class="hs-status" id="hs-status">${T.status}</p>
          </div>
        </div>
        <button class="hs-close" id="hs-close-btn" type="button" aria-label="${T.close}">✕</button>
      </div>

      <div class="hs-messages" id="hs-messages" aria-live="polite">
        <div class="hs-msg bot">
          <div class="hs-msg-icon" aria-hidden="true">🤖</div>
          <div class="hs-bubble" id="hs-greeting">${T.greeting}</div>
        </div>
      </div>

      <div class="hs-suggestions" id="hs-suggestions">
        ${T.suggestions.map(s => `<button class="hs-sugg" type="button">${s}</button>`).join('')}
      </div>

      <div class="hs-input-area">
        <textarea class="hs-input" id="hs-input" placeholder="${T.placeholder}" aria-label="${T.placeholder}" rows="1" maxlength="1000"></textarea>
        <button class="hs-send" id="hs-send" type="button" aria-label="${T.send}">➤</button>
      </div>
      <div class="hs-footer"><span id="hs-notice">${T.notice}</span> <a href="/privacidad.html" id="hs-privacy">${T.privacy}</a></div>
    </div>
  `);

  const btn = document.getElementById('hs-chat-btn');
  const win = document.getElementById('hs-chat-window');
  const closeBtn = document.getElementById('hs-close-btn');
  const input = document.getElementById('hs-input');
  const sendBtn = document.getElementById('hs-send');
  const suggestionsBox = document.getElementById('hs-suggestions');
  const messagesBox = document.getElementById('hs-messages');

  function toggleChat() {
    const open = win.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) input.focus();
  }
  btn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && win.classList.contains('open')) {
      toggleChat();
      btn.focus();
    }
  });

  function bindSuggestions() {
    suggestionsBox.querySelectorAll('.hs-sugg').forEach(s => {
      s.addEventListener('click', () => {
        input.value = s.textContent;
        suggestionsBox.style.display = 'none';
        enviar();
      });
    });
  }
  bindSuggestions();

  // Si el visitante cambia de idioma en la home, el widget cambia con él
  // (el saludo y las sugerencias solo mientras no haya empezado la conversación).
  document.addEventListener('hh:lang', () => {
    T = TEXTS[getLang()];
    btn.setAttribute('aria-label', T.open);
    closeBtn.setAttribute('aria-label', T.close);
    sendBtn.setAttribute('aria-label', T.send);
    input.placeholder = T.placeholder;
    input.setAttribute('aria-label', T.placeholder);
    document.getElementById('hs-status').textContent = T.status;
    document.getElementById('hs-notice').textContent = T.notice;
    document.getElementById('hs-privacy').textContent = T.privacy;
    if (messages.length === 0) {
      document.getElementById('hs-greeting').textContent = T.greeting;
      suggestionsBox.innerHTML = T.suggestions.map(s => `<button class="hs-sugg" type="button">${s}</button>`).join('');
      bindSuggestions();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviar();
    }
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 90) + 'px';
  });

  // Convierte el markdown básico que devuelve el bot (negrita y enlaces) a HTML seguro.
  // Escapa el texto primero para que nada de lo que devuelva el modelo pueda inyectar HTML.
  function renderBotText(text) {
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    return escaped
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
        // Solo se enlazan anclas de la web, rutas internas, http(s) y mailto; cualquier otro esquema se deja como texto.
        if (!/^(#|\/|https?:\/\/|mailto:)/i.test(url)) return label;
        // Un ancla como #booking solo existe en la home: desde otras páginas se enlaza a /#booking.
        if (url.startsWith('#') && !document.getElementById(url.slice(1))) url = '/' + url;
        const external = /^https?:\/\//i.test(url);
        const attrs = external ? ' target="_blank" rel="noopener"' : '';
        return `<a href="${url}"${attrs}>${label}</a>`;
      })
      .replace(/\n/g, '<br>');
  }

  function addMsg(role, text) {
    const div = document.createElement('div');
    div.className = `hs-msg ${role}`;
    div.innerHTML = `
      <div class="hs-msg-icon" aria-hidden="true">${role === 'bot' ? '🤖' : '🙂'}</div>
      <div class="hs-bubble"></div>
    `;
    const bubble = div.querySelector('.hs-bubble');
    if (role === 'bot') {
      bubble.innerHTML = renderBotText(text);
      // Si el enlace es un ancla de la propia página (ej. #booking), cierra el chat
      // al hacer clic para que se vea la sección hacia la que acaba de saltar.
      bubble.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', () => {
          win.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    } else {
      bubble.textContent = text;
    }
    messagesBox.appendChild(div);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'hs-msg bot';
    div.id = 'hs-typing';
    div.innerHTML = `<div class="hs-msg-icon" aria-hidden="true">🤖</div><div class="hs-typing"><span></span><span></span><span></span></div>`;
    messagesBox.appendChild(div);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('hs-typing');
    if (t) t.remove();
  }

  async function enviar() {
    const text = input.value.trim();
    if (!text || sendBtn.disabled) return;

    suggestionsBox.style.display = 'none';
    addMsg('user', text);
    messages.push({ role: 'user', content: text });
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;
    showTyping();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
      });
      const data = await response.json();
      if (!data || typeof data.reply !== 'string' || !data.reply) throw new Error('Respuesta sin texto');
      removeTyping();
      addMsg('bot', data.reply);
      if (response.ok) {
        messages.push({ role: 'assistant', content: data.reply });
      } else {
        // El backend ha devuelto un aviso de error: no se guarda en el historial.
        messages.pop();
      }
    } catch (e) {
      // Queda registrado en la consola para poder diagnosticarlo (antes fallaba en silencio).
      console.error('Chat: no se pudo obtener respuesta de ' + API_URL, e);
      removeTyping();
      messages.pop();
      addMsg('bot', T.error);
    }

    sendBtn.disabled = false;
    input.focus();
  }

  sendBtn.addEventListener('click', enviar);
});
