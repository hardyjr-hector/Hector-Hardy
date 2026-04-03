// ============================================================
// cookies.js — Banner de consentimiento RGPD
// Cómo usar:
//   1. Añade <script src="js/cookies.js" defer></script> en el <head>
//   2. Sustituye CA-PUB-XXXXXXXXXXXXXXXXX por tu ID de AdSense
// ============================================================

(function () {
  'use strict';

  const CONSENT_KEY   = 'hh_cookie_consent';  // clave en localStorage
  const ADSENSE_ID    = 'ca-pub-8584043897705230';

  // ── Leer consentimiento guardado ──────────────────────────
  const savedConsent = localStorage.getItem(CONSENT_KEY);

  // Si ya aceptó, carga AdSense directamente
  if (savedConsent === 'accepted') {
    loadAdSense();
  }

  // ── Crear el banner ───────────────────────────────────────
  function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.id = 'cookieBanner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML = `
      <p>
        Utilizamos cookies propias y de terceros (Google AdSense) para mostrarte publicidad relevante
        y analizar el tráfico. Puedes aceptar todas las cookies o rechazar las no esenciales.
        Más info en nuestra <a href="/privacidad.html">Política de Privacidad</a>.
      </p>
      <div class="cookie-banner-actions">
        <button class="btn-cookie-reject" id="cookieReject">Solo esenciales</button>
        <button class="btn-cookie-accept" id="cookieAccept">Aceptar todo</button>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('cookieAccept').addEventListener('click', () => {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      hideBanner();
      loadAdSense();
    });

    document.getElementById('cookieReject').addEventListener('click', () => {
      localStorage.setItem(CONSENT_KEY, 'rejected');
      hideBanner();
    });
  }

  function hideBanner() {
    const b = document.getElementById('cookieBanner');
    if (b) b.classList.add('hidden');
  }

  // ── Cargar Google AdSense dinámicamente ───────────────────
  function loadAdSense() {
    // Evitar carga duplicada
    if (document.getElementById('adsense-script')) return;

    const s = document.createElement('script');
    s.id    = 'adsense-script';
    s.async = true;
    s.src   = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);

    // Inicializar todos los bloques de anuncio ya presentes en el DOM
    s.onload = () => {
      document.querySelectorAll('.adsbygoogle').forEach(() => {
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
        catch (e) { /* bloque ya inicializado */ }
      });
    };
  }

  // Mostrar el banner solo si no hay decisión previa
  if (!savedConsent) {
    document.addEventListener('DOMContentLoaded', createBanner);
  }

})();
