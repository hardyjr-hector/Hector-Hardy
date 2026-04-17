// ============================================================
// translations.js — Sistema ES / EN para hectorhardy.com
// ============================================================
// Para añadir una traducción nueva:
//   1. Añade data-i18n="clave" al elemento HTML
//   2. Añade "clave": { es: "...", en: "..." } a este objeto
// ============================================================

const TRANSLATIONS = {

  // ── NAVBAR ─────────────────────────────────────────────
  "nav.about": { es: "Sobre mí", en: "About" },
  "nav.articles": { es: "Artículos", en: "Articles" },
  "nav.analisis": { es: "Análisis", en: "Analysis" },
  "nav.worldcup": { es: "Mundial 2026", en: "World Cup 2026" },
  "nav.jerseys": { es: "Camisetas", en: "Jerseys" },
  "nav.quiniela": { es: "Quiniela Mundialista", en: "World Cup Pool" },

  // ── HERO ───────────────────────────────────────────────
  "hero.title": { es: "El deporte más allá del resultado", en: "Sport beyond the final score" },
  "hero.subtitle": { es: "Análisis · Programación · Datos", en: "Analysis · Code · Data" },
  "hero.btn1": { es: "Ver análisis", en: "See analysis" },
  "hero.btn2": { es: "Leer artículos", en: "Read articles" },
  "hero.btn3": { es: "Mundial 2026", en: "World Cup 2026" },
  "hero.btn4": { es: "Jugar Quiniela Mundialista", en: "Guess the winner" },

  // ── SOBRE MÍ ───────────────────────────────────────────
  "about.title": { es: "Sobre mí", en: "About me" },
  "about.body": {
    es: "Soy Héctor Hardy. Analizo el deporte a través de datos, contexto y programación. Este proyecto nace con una idea clara: entender el juego más allá del resultado, combinando análisis, opinión y tecnología. Construyendo una forma diferente de entender el deporte.",
    en: "I'm Héctor Hardy. I analyse sport through data, context and code. This project has a clear goal: to understand the game beyond the result, combining analysis, opinion and technology. Building a different way to understand sport."
  },

  // ── ARTÍCULOS ──────────────────────────────────────────
  "articles.title": { es: "Artículos", en: "Articles" },
  "articles.read": { es: "Leer más →", en: "Read more →" },

  "art1.title": { es: "Un Barça que muere en la orilla tras un vendaval sin premio", en: "A Barça that dies on the shore after a storm without reward" },
  "art1.body": {
    es: "El Fútbol Club Barcelona dominó con claridad al Atlético de Madrid (70% de posesión, 17 remates y 15 córners), pero el vendaval ofensivo no fue suficiente para remontar el 4-0 de la ida.",
    en: "FC Barcelona clearly dominated Atlético de Madrid (70% possession, 17 shots and 15 corners), but the attacking storm wasn't enough to overturn the 4-0 first-leg deficit."
  },
  "art2.title": { es: "Florentino: el problema no es el entrenador", en: "Florentino: the problem isn't the manager" },
  "art2.body": {
    es: "El Albacete hizo historia eliminando al Real Madrid con fútbol, orden y convicción. El problema en el Madrid ya no es el entrenador. Y la pregunta empieza a ser incómoda para Florentino.",
    en: "Albacete made history by eliminating Real Madrid with football, discipline and conviction. The problem at Madrid is no longer the manager. And the question is becoming uncomfortable for Florentino."
  },
  "art3.title": { es: "Xabi Alonso no pudo ser Xabi Alonso", en: "Xabi Alonso couldn't be Xabi Alonso" },
  "art3.body": {
    es: "El técnico dejó el Real Madrid tras no poder imponer su idea en un vestuario lleno de estrellas. La Supercopa fue el último termómetro de un proyecto que nunca terminó de despegar.",
    en: "The coach left Real Madrid after failing to impose his philosophy on a dressing room full of stars. The Spanish Super Cup was the final test of a project that never fully took off."
  },
  "art4.title": { es: "¿Es Raphinha el mejor del mundo?", en: "Is Raphinha the best in the world?" },
  "art4.body": {
    es: "El brasileño es el alma de este Barça, el auténtico escudero de Flick. Además de clase, que le sobra, aporta dinamismo, intensidad y contagia al equipo de garra y entrega.",
    en: "The Brazilian is the soul of this Barça, Flick's true right-hand man. Beyond his class, he brings energy, intensity, and infects the team with his fighting spirit."
  },

  // ── ANÁLISIS ───────────────────────────────────────────
  "analisis.title": { es: "Datos y análisis", en: "Data & analysis" },
  "analisis.loading": { es: "Cargando...", en: "Loading..." },
  "analisis.error": { es: "⚠️ Error cargando datos", en: "⚠️ Error loading data" },

  "view.table": { es: "Clasificación", en: "Standings" },
  "view.attack": { es: "Ataque", en: "Attack" },
  "view.defense": { es: "Defensa", en: "Defence" },
  "view.scorers": { es: "Goleadores", en: "Top scorers" },
  "view.assists": { es: "Asistencias", en: "Assists" },

  "stat.pts": { es: "pts", en: "pts" },
  "stat.goals": { es: "goles", en: "goals" },
  "stat.conceded": { es: "encajados", en: "conceded" },
  "stat.assists": { es: "asistencias", en: "assists" },

  // ── MUNDIAL 2026 ────────────────────────────────────────
  "wc.title": { es: "🌍 Mundial 2026", en: "🌍 World Cup 2026" },
  "wc.subtitle": { es: "Análisis de selecciones · USA, Canadá & México · 48 equipos", en: "National team analysis · USA, Canada & Mexico · 48 teams" },
  "wc.fixture": { es: "📅 Ver fixture", en: "📅 View fixture" },
  "wc.sidebar.title": { es: "Fixture completo", en: "Full fixture" },
  "wc.tab.group": { es: "Por grupo", en: "By group" },
  "wc.tab.day": { es: "Por día", en: "By day" },
  "wc.filter.country": { es: "🔍 Buscar país...", en: "🔍 Search country..." },
  "wc.filter.allstages": { es: "Todas las fases", en: "All stages" },
  "wc.download": { es: "📥 Descargar todos los partidos", en: "📥 Download all matches" },
  "wc.noMatches": { es: "Sin partidos para estos filtros", en: "No matches for these filters" },
  "wc.cal.google": { es: "Google", en: "Google" },
  "wc.cal.apple": { es: "Apple", en: "Apple" },

  "stage.groups": { es: "Fase de Grupos", en: "Group Stage" },
  "stage.round32": { es: "Ronda de 32", en: "Round of 32" },
  "stage.round16": { es: "Octavos", en: "Round of 16" },
  "stage.quarters": { es: "Cuartos", en: "Quarter-finals" },
  "stage.semis": { es: "Semifinales", en: "Semi-finals" },
  "stage.third_place": { es: "3.er / 4.º puesto", en: "3rd place play-off" },
  "stage.final": { es: "⭐ Final", en: "⭐ Final" },

  // ── ARTÍCULO PANEL (Mundial) ────────────────────────────
  "article.back": { es: "🌍 Mundial 2026 · Análisis", en: "🌍 World Cup 2026 · Analysis" },
  "article.readmore": { es: "Leer análisis →", en: "Read analysis →" },
  "article.soon": { es: "Próximamente →", en: "Coming soon →" },
  "article.coming.p1": { es: "El análisis de esta selección está en camino.", en: "The analysis for this team is on its way." },
  "article.coming.p2": { es: "Vuelve pronto — Hector Hardy", en: "Check back soon — Hector Hardy" },
  "article.verdict": { es: "Veredicto de Hector Hardy", en: "Hector Hardy's verdict" },
  "article.by": { es: "✍️ Hector Hardy", en: "✍️ Hector Hardy" },
  "article.min": { es: "min", en: "min read" },

  // ── CAMISETAS ───────────────────────────────────────────
  "jerseys.title": { es: "Camisetas de fútbol", en: "Football jerseys" },
  "jerseys.affiliate": { es: "* Los enlaces \"Dónde comprar\" son de afiliado. Si compras a través de ellos recibo una pequeña comisión sin coste adicional para ti.", en: "* \"Where to buy\" links are affiliate links. If you purchase through them, I earn a small commission at no extra cost to you." },
  "jerseys.search.team": { es: "Equipo", en: "Team" },
  "jerseys.search.year": { es: "Año", en: "Year" },
  "jerseys.buy": { es: "🛒 Dónde comprar", en: "🛒 Where to buy" },
  "jerseys.comp.all": { es: "Competición", en: "Competition" },

  // ── KO-FI ──────────────────────────────────────────────
  "kofi.title": { es: "¿Te gusta el contenido?", en: "Enjoying the content?" },
  "kofi.body": { es: "Si disfrutas mis análisis y el contenido de esta web, puedes invitarme a un café ☕. Cada propina me ayuda a seguir creando más historias, datos y fútbol.", en: "If you enjoy my analysis and the content on this website, you can buy me a coffee ☕. Every tip helps me keep creating more stories, data, and football." },
  "kofi.btn": { es: "Invítame un café", en: "Invite me a coffee" },

  // ── FOOTER ─────────────────────────────────────────────
  "footer.title": { es: "¿Hablamos?", en: "Get in touch" },
  "footer.body": { es: "Estoy en busca de nuevas oportunidades en desarrollo web y análisis de datos.", en: "I'm looking for new opportunities in web development and data analysis." },
  "footer.privacy": { es: "🔒 Política de Privacidad", en: "🔒 Privacy Policy" },

};

// ── Idioma activo ──────────────────────────────────────────
let currentLang = localStorage.getItem('hh_lang') || 'es';

// ── Traducir toda la página ────────────────────────────────
function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('hh_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = TRANSLATIONS[key];
    if (!t) return;

    // placeholder en inputs
    if (el.tagName === 'INPUT' && el.type !== 'button') {
      el.placeholder = t[lang] || t.es;
    } else if (el.tagName === 'OPTION') {
      el.textContent = t[lang] || t.es;
    } else {
      el.textContent = t[lang] || t.es;
    }
  });

  // Actualizar atributo lang en <html>
  document.documentElement.lang = lang === 'en' ? 'en' : 'es';

  // Actualizar el botón del toggle
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';

  // Re-traducir las opciones dinámicas de los selects de análisis
  updateSelectOptions(lang);

  // Re-traducir el sidebar del fixture si ya está renderizado
  const sidebarTitle = document.getElementById('fixtureStageFilter');
  if (sidebarTitle) {
    const firstOpt = sidebarTitle.options[0];
    if (firstOpt) firstOpt.textContent = t('wc.filter.allstages', lang);
  }
}

// Helper para traducir con fallback
function t(key, lang) {
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[lang || currentLang] || entry.es;
}

// ── Actualizar opciones del select de análisis ─────────────
function updateSelectOptions(lang) {
  const viewSelect = document.getElementById('viewSelect');
  if (!viewSelect) return;
  const viewMap = {
    'table': 'view.table',
    'attack': 'view.attack',
    'defense': 'view.defense',
    'scorers': 'view.scorers',
    'assists': 'view.assists',
  };
  Array.from(viewSelect.options).forEach(opt => {
    const key = viewMap[opt.value];
    if (key && TRANSLATIONS[key]) {
      opt.textContent = TRANSLATIONS[key][lang] || TRANSLATIONS[key].es;
    }
  });
}

// ── Botón toggle ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = currentLang === 'es' ? 'en' : 'es';
      applyTranslations(next);
    });
  }

  // Aplicar idioma guardado al cargar
  applyTranslations(currentLang);
});

// Exportar para uso en script.js
window.t = t;
window.currentLang = () => currentLang;
window.applyTranslations = applyTranslations;
