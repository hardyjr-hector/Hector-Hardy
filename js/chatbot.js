(function () {
  const API_URL = 'https://mi-chatbot-khaki.vercel.app/api/chat';

  const messages = [];

  // Crear el HTML del chatbot
  document.body.insertAdjacentHTML('beforeend', `
    <button id="hh-chat-btn" onclick="hhToggleChat()">⚽</button>

    <div id="hh-chat-window">
      <div class="hh-header">
        <div class="hh-header-left">
          <div class="hh-avatar">⚽</div>
          <div class="hh-header-info">
            <h4>Asistente HectorHardy</h4>
            <p class="hh-status">Online · La Liga, Premier, Champions...</p>
          </div>
        </div>
        <button class="hh-close" onclick="hhToggleChat()">✕</button>
      </div>

      <div class="hh-messages" id="hh-messages">
        <div class="hh-msg bot">
          <div class="hh-msg-icon">⚽</div>
          <div class="hh-bubble">¡Hola! Puedo responder preguntas sobre La Liga, Premier League, Serie A, Bundesliga, Ligue 1 y Champions. ¿En qué puedo ayudarte?</div>
        </div>
      </div>

      <div class="hh-suggestions" id="hh-suggestions">
        <button class="hh-sugg" onclick="hhSuggestion(this)">¿Cómo va La Liga?</button>
        <button class="hh-sugg" onclick="hhSuggestion(this)">Goleadores Premier League</button>
        <button class="hh-sugg" onclick="hhSuggestion(this)">Próximos partidos Champions</button>
        <button class="hh-sugg" onclick="hhSuggestion(this)">Clasificación Serie A</button>
      </div>

      <div class="hh-input-area">
        <textarea
          class="hh-input"
          id="hh-input"
          placeholder="Pregunta sobre fútbol..."
          rows="1"
          onkeydown="hhHandleKey(event)"
          oninput="hhResize(this)"
        ></textarea>
        <button class="hh-send" id="hh-send" onclick="hhEnviar()">➤</button>
      </div>
      <div class="hh-footer">Desarrollado con IA · hectorhardy.com</div>
    </div>
  `);

  // Abrir y cerrar
  window.hhToggleChat = function () {
    const win = document.getElementById('hh-chat-window');
    win.classList.toggle('open');
    if (win.classList.contains('open')) {
      document.getElementById('hh-input').focus();
    }
  };

  // Sugerencias
  window.hhSuggestion = function (btn) {
    document.getElementById('hh-input').value = btn.textContent;
    document.getElementById('hh-suggestions').style.display = 'none';
    hhEnviar();
  };

  // Enter para enviar
  window.hhHandleKey = function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      hhEnviar();
    }
  };

  // Resize textarea
  window.hhResize = function (el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 90) + 'px';
  };

  // Añadir mensaje al chat
  function hhAddMsg(role, text) {
    const container = document.getElementById('hh-messages');
    const div = document.createElement('div');
    div.className = `hh-msg ${role}`;
    div.innerHTML = `
      <div class="hh-msg-icon">${role === 'bot' ? '⚽' : '👤'}</div>
      <div class="hh-bubble">${text}</div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  // Typing indicator
  function hhShowTyping() {
    const container = document.getElementById('hh-messages');
    const div = document.createElement('div');
    div.className = 'hh-msg bot';
    div.id = 'hh-typing';
    div.innerHTML = `
      <div class="hh-msg-icon">⚽</div>
      <div class="hh-typing"><span></span><span></span><span></span></div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function hhRemoveTyping() {
    const t = document.getElementById('hh-typing');
    if (t) t.remove();
  }

  // Enviar mensaje
  window.hhEnviar = async function () {
    const input = document.getElementById('hh-input');
    const sendBtn = document.getElementById('hh-send');
    const text = input.value.trim();
    if (!text || sendBtn.disabled) return;

    document.getElementById('hh-suggestions').style.display = 'none';
    hhAddMsg('user', text);
    messages.push({ role: 'user', content: text });
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;
    hhShowTyping();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
      });

      const data = await response.json();
      hhRemoveTyping();
      hhAddMsg('bot', data.reply);
      messages.push({ role: 'assistant', content: data.reply });
    } catch (e) {
      hhRemoveTyping();
      hhAddMsg('bot', 'Error de conexión. Inténtalo de nuevo.');
    }

    sendBtn.disabled = false;
    input.focus();
  };
})();
