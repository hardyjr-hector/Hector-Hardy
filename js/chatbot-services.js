document.addEventListener('DOMContentLoaded', function () {
  // ⚠️ Sustituye esta URL por la de tu backend desplegado (ver server-agente-ia/README.md)
  const API_URL = 'https://TU-BACKEND.vercel.app/api/chat-servicios';

  const messages = [];

  document.body.insertAdjacentHTML('beforeend', `
    <button id="hs-chat-btn" aria-label="Abrir chat">💬</button>

    <div id="hs-chat-window">
      <div class="hs-header">
        <div class="hs-header-left">
          <div class="hs-avatar">🤖</div>
          <div class="hs-header-info">
            <h4>Alexito 🤖</h4>
            <p class="hs-status">Online · Responde al instante</p>
          </div>
        </div>
        <button class="hs-close" id="hs-close-btn" aria-label="Cerrar chat">✕</button>
      </div>

      <div class="hs-messages" id="hs-messages">
        <div class="hs-msg bot">
          <div class="hs-msg-icon">🤖</div>
          <div class="hs-bubble">¡Hola! Soy Alexito, el agente IA de Hector 🤖. Puedo contarte qué servicios ofrece, precios orientativos, o ayudarte a dar el primer paso. ¿En qué puedo ayudarte?</div>
        </div>
      </div>

      <div class="hs-suggestions" id="hs-suggestions">
        <button class="hs-sugg">¿Qué puede hacer un agente IA por mi negocio?</button>
        <button class="hs-sugg">¿Cuánto cuesta un proyecto?</button>
        <button class="hs-sugg">¿Cómo empezamos?</button>
      </div>

      <div class="hs-input-area">
        <textarea class="hs-input" id="hs-input" placeholder="Escribe tu pregunta..." rows="1"></textarea>
        <button class="hs-send" id="hs-send" aria-label="Enviar">➤</button>
      </div>
      <div class="hs-footer">Alexito · hectorhardy.com</div>
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
    win.classList.toggle('open');
    if (win.classList.contains('open')) input.focus();
  }
  btn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  suggestionsBox.querySelectorAll('.hs-sugg').forEach(s => {
    s.addEventListener('click', () => {
      input.value = s.textContent;
      suggestionsBox.style.display = 'none';
      enviar();
    });
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
        const external = !url.startsWith('#');
        const attrs = external ? ' target="_blank" rel="noopener"' : '';
        return `<a href="${url}"${attrs}>${label}</a>`;
      })
      .replace(/\n/g, '<br>');
  }

  function addMsg(role, text) {
    const div = document.createElement('div');
    div.className = `hs-msg ${role}`;
    div.innerHTML = `
      <div class="hs-msg-icon">${role === 'bot' ? '🤖' : '🙂'}</div>
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
    div.innerHTML = `<div class="hs-msg-icon">🤖</div><div class="hs-typing"><span></span><span></span><span></span></div>`;
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
      removeTyping();
      addMsg('bot', data.reply);
      messages.push({ role: 'assistant', content: data.reply });
    } catch (e) {
      removeTyping();
      addMsg('bot', 'Ahora mismo no puedo responder — escríbeme directamente a info@hectorhardy.com.');
    }

    sendBtn.disabled = false;
    input.focus();
  }

  sendBtn.addEventListener('click', enviar);
});
