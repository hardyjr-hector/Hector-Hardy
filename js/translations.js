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
  "nav.proyectos": { es: "Proyectos", en: "Projects" },
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
  "hero.btn4": { es: "Jugar Quiniela Mundialista", en: "Play World Cup Pool" },

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
  "footer.body": { es: "Buscando mi primer rol como AI & Frontend Developer.", en: "I'm looking my new rol as AI & Frontend Developer." },
  "footer.privacy": { es: "🔒 Política de Privacidad", en: "🔒 Privacy Policy" },

  // ── HOMEPAGE (index.html) — ES / CA / EN ────────────────
  "nav.reservar": { es: "Reservar llamada", ca: "Reservar trucada", en: "Book a call" },
  "nav.hablemos": { es: "Hablemos", ca: "Parlem-ne", en: "Let's talk" },

  "hero.label.main": { es: "AI Engineer · Agentes IA a Medida · Barcelona", ca: "AI Engineer · Agents IA a Mida · Barcelona", en: "AI Engineer · Custom AI Agents · Barcelona" },
  "hero.sub.pre": { es: "Diseño ", ca: "Dissenyo ", en: "I build " },
  "hero.sub.strong": { es: "agentes de IA a medida", ca: "agents d'IA a mida", en: "custom AI agents" },
  "hero.sub.post": {
    es: " para negocios de cualquier sector — integrados en tu Web, WhatsApp, Telegram o Instagram, entrenados con los datos reales de tu negocio. Nada de software enlatado: si tu negocio necesita algo que nadie más ofrece, lo construyo.",
    ca: " per a negocis de qualsevol sector — integrat a la teva web, WhatsApp, Telegram o Instagram, entrenats amb les dades reals del teu negoci. Res de software enllaunat: si el teu negoci necessita alguna cosa que ningú més ofereix, ho construeixo.",
    en: " for businesses in any sector — integrated into your website, WhatsApp, Telegram or Instagram, trained on your business's real data. No off-the-shelf software: if your business needs something no one else offers, I'll build it."
  },
  "hero.btn.hablemos": { es: "Hablemos →", ca: "Parlem-ne →", en: "Let's talk →" },
  "hero.btn.servicios": { es: "Ver servicios", ca: "Veure serveis", en: "See services" },
  "hero.btn.proyectos": { es: "Ver proyectos", ca: "Veure projectes", en: "See projects" },
  "hero.meta.projects": { es: "proyectos en producción", ca: "projectes en producció", en: "projects in production" },
  "hero.meta.systems": { es: "tus sistemas funcionando", ca: "els teus sistemes funcionant", en: "your systems running" },
  "hero.meta.consulta": { es: "consulta inicial", ca: "consulta inicial", en: "initial consultation" },

  "services.eyebrow": { es: "Servicios", ca: "Serveis", en: "Services" },
  "svc1.title": { es: "Web profesional", ca: "Web professional", en: "Professional website" },
  "svc1.desc": {
    es: "Diseño y desarrollo desde cero, pensada para convertir visitas en clientes, sea cual sea tu sector.",
    ca: "Disseny i desenvolupament des de zero, pensada per convertir visites en clients, sigui quin sigui el teu sector.",
    en: "Designed and built from scratch to turn visitors into customers, whatever your sector."
  },
  "svc2.title": { es: "Agente con IA a medida", ca: "Agent amb IA a mida", en: "Custom AI agent" },
  "svc2.desc": {
    es: "Entrenado con los datos de tu negocio. Integrado en tu web, WhatsApp, Telegram o Instagram — donde ya está tu cliente.",
    ca: "Entrenat amb les dades del teu negoci. Integrat a la teva web, WhatsApp, Telegram o Instagram — allà on ja és el teu client.",
    en: "Trained on your business's data. Integrated into your website, WhatsApp, Telegram or Instagram — wherever your customer already is."
  },
  "svc3.title": { es: "E-commerce", ca: "E-commerce", en: "E-commerce" },
  "svc3.desc": {
    es: "Tienda online, carrito de la compra y pago con Stripe. Cobras sin hacer nada.",
    ca: "Botiga online, cistella de la compra i pagament amb Stripe. Cobres sense fer res.",
    en: "Online store, shopping cart and Stripe payments. You get paid without lifting a finger."
  },
  "svc4.title": { es: "Automatización", ca: "Automatització", en: "Automation" },
  "svc4.desc": {
    es: "Elimina tareas repetitivas: formularios, avisos, notificaciones y flujos conectados entre tus herramientas.",
    ca: "Elimina tasques repetitives: formularis, avisos, notificacions i fluxos connectats entre les teves eines.",
    en: "Eliminate repetitive tasks: forms, alerts, notifications and workflows connected across your tools."
  },
  "svc5.title": { es: "Proyecto completo", ca: "Projecte complet", en: "Full project" },
  "svc5.desc": {
    es: "Web + agente IA + pagos + automatización. Todo integrado desde el primer día.",
    ca: "Web + agent IA + pagaments + automatització. Tot integrat des del primer dia.",
    en: "Website + AI agent + payments + automation. All integrated from day one."
  },
  "svc6.title": { es: "Mantenimiento", ca: "Manteniment", en: "Maintenance" },
  "svc6.desc": {
    es: "Tu web siempre actualizada, segura y funcionando. Soporte incluido.",
    ca: "La teva web sempre actualitzada, segura i funcionant. Suport inclòs.",
    en: "Your website always updated, secure and running. Support included."
  },

  "projects.eyebrow": { es: "Proyectos en producción", ca: "Projectes en producció", en: "Projects in production" },
  "status.live": { es: "En producción", ca: "En producció", en: "Live" },
  "status.dev": { es: "En desarrollo", ca: "En desenvolupament", en: "In development" },

  "proj.cajacontrol.name": { es: "Control de Caja", ca: "Control de Caixa", en: "Cash Register Control" },
  "proj.cajacontrol.desc": {
    es: "App de gestión de caja para hostelería: login por PIN, aperturas y cierres con cálculo automático, seguridad a nivel de base de datos (RLS), notificaciones push y PWA instalable. Bilingüe ES/EN.",
    ca: "App de gestió de caixa per a hostaleria: login per PIN, obertures i tancaments amb càlcul automàtic, seguretat a nivell de base de dades (RLS), notificacions push i PWA instal·lable. Bilingüe ES/EN.",
    en: "Cash register management app for hospitality: PIN login, opening/closing with automatic calculation, database-level security (RLS), push notifications and installable PWA. Bilingual ES/EN."
  },
  "proj.magma.name": { es: "Magma Bakery Lab", ca: "Magma Bakery Lab", en: "Magma Bakery Lab" },
  "proj.magma.desc": {
    es: "E-commerce para obrador artesanal: carta completa, encargos online con carrito, pago con Stripe y trilingüe ES/CA/EN con CI/CD en Vercel.",
    ca: "E-commerce per a obrador artesanal: carta completa, comandes online amb cistella, pagament amb Stripe i trilingüe ES/CA/EN amb CI/CD a Vercel.",
    en: "E-commerce for an artisan bakery: full menu, online orders with cart, Stripe payments and trilingual ES/CA/EN with CI/CD on Vercel."
  },
  "proj.nutria.name": { es: "NutrIA", ca: "NutrIA", en: "NutrIA" },
  "proj.nutria.desc": {
    es: "App web con cálculo automático de macros mediante IA, análisis de platos por visión artificial y chatbot nutricional 24/7. Construida con Next.js y Supabase.",
    ca: "App web amb càlcul automàtic de macros mitjançant IA, anàlisi de plats per visió artificial i chatbot nutricional 24/7. Construïda amb Next.js i Supabase.",
    en: "Web app with automatic macro calculation via AI, dish analysis through computer vision, and a 24/7 nutrition chatbot. Built with Next.js and Supabase."
  },
  "proj.presupuesto.name": { es: "App de Presupuesto", ca: "App de Pressupost", en: "Budget App" },
  "proj.presupuesto.desc": {
    es: "Gestor financiero personal para seguimiento de ingresos y gastos.",
    ca: "Gestor financer personal per al seguiment d'ingressos i despeses.",
    en: "Personal finance manager for tracking income and expenses."
  },
  "proj.trading.name": { es: "Trading Bot Pro", ca: "Trading Bot Pro", en: "Trading Bot Pro" },
  "proj.trading.desc": {
    es: "Bot de trading algorítmico multi-mercado (spot, futuros y forex) con detección de régimen, ensemble ML y estrategia de reversión a la media. Circuit breakers, gestión de riesgo y reentrenamiento diario corriendo 24/7.",
    ca: "Bot de trading algorítmic multi-mercat (spot, futurs i forex) amb detecció de règim, ensemble ML i estratègia de reversió a la mitjana. Circuit breakers, gestió de risc i reentrenament diari funcionant 24/7.",
    en: "Multi-market algorithmic trading bot (spot, futures and forex) with regime detection, ML ensemble and mean-reversion strategy. Circuit breakers, risk management and daily retraining running 24/7."
  },

  "booking.eyebrow": { es: "Primera llamada gratuita", ca: "Primera trucada gratuïta", en: "First call is free" },
  "cta.title.line1": { es: "Tu negocio merece", ca: "El teu negoci mereix", en: "Your business deserves" },
  "cta.title.line2": { es: "un sistema que ", ca: "un sistema que ", en: "a system that " },
  "cta.title.em": { es: "no duerme.", ca: "no dorm.", en: "never sleeps." },
  "cta.sub": { es: "Consulta gratuita · Sin compromiso · Respondo en 24h", ca: "Consulta gratuïta · Sense compromís · Responc en 24h", en: "Free consultation · No obligation · I reply within 24h" },

  "footer.privacidad": { es: "Privacidad", ca: "Privacitat", en: "Privacy" },
  "footer.contacto": { es: "Contacto", ca: "Contacte", en: "Contact" },
  "footer.blog": { es: "Blog", ca: "Blog", en: "Blog" },

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
  document.documentElement.lang = lang;

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
