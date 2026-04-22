const menuBtn = document.querySelector(".menu-toggle");
const navLinksEl = document.querySelector(".nav-links");

if (menuBtn && navLinksEl) {
  menuBtn.addEventListener("click", () => {
    navLinksEl.classList.toggle("open");
  });
}

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ==========================
// MENU MÓVIL
// ==========================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navLinks.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    navToggle.setAttribute('aria-expanded', false);
    navToggle.textContent = '☰';
  });
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('show');
    navToggle.setAttribute('aria-expanded', false);
    navToggle.textContent = '☰';
  }
});

// ==========================
// FADE IN
// ==========================
const fadeObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
  });
}, { threshold: 0.12 });

function observeFadeElements() {
  document.querySelectorAll(".fade-in:not(.visible)").forEach(el => fadeObserver.observe(el));
}

// ==========================
// SECTION NAVIGATION
// ==========================
const SECTION_IDS = ['about', 'articles', 'analisis', 'worldcup', 'jerseys'];
const sectionInitialized = {};

function navigateTo(sectionId) {
  document.body.classList.add('panel-mode');
  SECTION_IDS.forEach(id => document.getElementById(id)?.classList.remove('active-section'));
  document.getElementById(sectionId)?.classList.add('active-section');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', (a.getAttribute('href') || '').replace('#', '') === sectionId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  navLinksEl?.classList.remove('show');
  if (!sectionInitialized[sectionId]) {
    sectionInitialized[sectionId] = true;
    if (sectionId === 'analisis') loadAnalysis();
    if (sectionId === 'worldcup') initWorldCup();
    if (sectionId === 'jerseys') initJerseys();
  }
  setTimeout(observeFadeElements, 50);
}

function goHome() {
  document.body.classList.remove('panel-mode');
  SECTION_IDS.forEach(id => document.getElementById(id)?.classList.remove('active-section'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  navLinksEl?.classList.remove('show');
}

document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (SECTION_IDS.includes(id)) { e.preventDefault(); navigateTo(id); }
});
document.querySelector('.logo')?.addEventListener('click', e => { e.preventDefault(); goHome(); });

// ==========================
// CAMISETAS
// ==========================
// ─────────────────────────────────────────────────────────────────────────────
// CAMISETAS
// Cómo añadir un enlace de afiliado:
//   Añade  buyUrl: "https://tu-enlace-afiliado.com/..."  a cualquier entrada.
//   Aparecerá automáticamente el botón "Dónde comprar" en esa card.
//
// Programas de afiliados recomendados:
//   · Fútbol Emotion  → https://www.futbolemotion.com/afiliados
//   · Fútbol Factory  → https://www.futbolfactory.es/afiliados
//   · Amazon Afiliados → https://afiliados.amazon.es
//   · Kitbag          → https://www.kitbag.com/en/affiliate-programme
//
// Sustituye las URLs de ejemplo por tus enlaces reales con tu ID de afiliado.
// ─────────────────────────────────────────────────────────────────────────────
const jerseys = [
  {
    team: "AC Milan", year: "2024/2025", competition: "Serie A", img: "assets/images/acmilan1.jpg", desc: "Primera equipación AC MILAN 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-ac-milan" /* ← reemplaza con tu enlace de afiliado */
  },
  {
    team: "AC Milan", year: "2024/2025", competition: "Serie A", img: "assets/images/acmilan3.jpg", desc: "Segunda equipación AC MILAN 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-ac-milan"
  },
  { team: "AC Milan", year: "2008/2009", competition: "Serie A", img: "assets/images/acmilan2.jpg", desc: "Primera equipación AC MILAN 2008/2009" },
  {
    team: "Alemania", year: "2024", competition: "Selecciones", img: "assets/images/alemania.jpg", desc: "Primera equipación Alemania Eurocopa 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-alemania"
  },
  {
    team: "Argentina", year: "2024", competition: "Selecciones", img: "assets/images/argentina1.jpg", desc: "Segunda equipación Argentina 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-argentina"
  },
  { team: "Argentina", year: "1994", competition: "Selecciones", img: "assets/images/argentina2.jpg", desc: "Segunda equipación Argentina Mundial 1994" },
  {
    team: "Argentina", year: "2024", competition: "Selecciones", img: "assets/images/argentina3.jpg", desc: "Primera equipación Argentina 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-argentina"
  },
  { team: "Argentina", year: "2022", competition: "Selecciones", img: "assets/images/argentina4.jpg", desc: "Primera equipación Argentina Mundial 2022" },
  {
    team: "Argentina", year: "2024", competition: "Selecciones", img: "assets/images/argentina5.jpg", desc: "Edición especial de estilo lifestyle 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-argentina"
  },
  { team: "Argentina", year: "2023", competition: "Selecciones", img: "assets/images/argentina6.jpg", desc: "Segunda equipación Argentina 2023" },
  { team: "Arsenal", year: "2006/2007", competition: "Premier League", img: "assets/images/arsenal.jpg", desc: "Primera equipación Arsenal 2006/2007" },
  {
    team: "AS Roma", year: "2024/2025", competition: "Serie A", img: "assets/images/asroma.jpg", desc: "Segunda equipación AS Roma 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-as-roma"
  },
  {
    team: "Atlético de Madrid", year: "2024/2025", competition: "La Liga", img: "assets/images/atletico_madrid.jpg", desc: "Primera equipación Atlético de Madrid 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-atletico-de-madrid"
  },
  { team: "Barcelona SC", year: "2015/2016", competition: "Liga Pro Ecuador", img: "assets/images/barcelona_guayaquil.jpg", desc: "Primera equipación Barcelona SC 2015/2016" },
  {
    team: "Bayer Leverkusen", year: "2024/2025", competition: "Bundesliga", img: "assets/images/bayer_leverkusen.jpg", desc: "Primera equipación Bayer Leverkusen 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-bayer-leverkusen"
  },
  { team: "Benfica", year: "1998/1999", competition: "Primeira Liga", img: "assets/images/benfica.jpg", desc: "Segunda equipación Benfica 1998/1999" },
  {
    team: "Club Atlético Boca Juniors", year: "2023/2024", competition: "Primera División Argentina", img: "assets/images/boca_juniors1.jpg", desc: "Primera equipación Boca Juniors 2023/2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-boca-juniors"
  },
  { team: "Club Atlético Boca Juniors", year: "2005", competition: "Primera División Argentina", img: "assets/images/boca_juniors2.jpg", desc: "Reedición moderna de primera equipación Boca Juniors 2005" },
  {
    team: "Borussia Dortmund", year: "2024/2025", competition: "Bundesliga", img: "assets/images/borussia_dortmund.jpg", desc: "Primera equipación Borussia Dortmund 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-borussia-dortmund"
  },
  {
    team: "Brasil", year: "2024", competition: "Selecciones", img: "assets/images/brasil.jpg", desc: "Primera equipación Brasil Copa América 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-brasil"
  },
  {
    team: "Chelsea", year: "2024/2025", competition: "Premier League", img: "assets/images/chelsea.jpg", desc: "Primera equipación Chelsea 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-chelsea"
  },
  { team: "Corinthians", year: "2024/2025", competition: "Brasileirao", img: "assets/images/corintians.jpg", desc: "Primera equipación Corinthians 2024/2025" },
  { team: "Ecuador", year: "2015", competition: "Selecciones", img: "assets/images/ecuador.jpg", desc: "Primera equipación Ecuador" },
  {
    team: "España", year: "2024", competition: "Selecciones", img: "assets/images/españa.jpg", desc: "Primera equipación España Eurocopa 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-seleccion-espanola"
  },
  { team: "FC Barcelona", year: "2022/2023", competition: "La Liga", img: "assets/images/fcb1.jpg", desc: "Tercera equipación FC Barcelona 2022/2023" },
  { team: "FC Barcelona", year: "2004/2005", competition: "La Liga", img: "assets/images/fcb2.jpg", desc: "Segunda equipación FC Barcelona 2004/2005" },
  {
    team: "FC Barcelona", year: "2024/2025", competition: "La Liga", img: "assets/images/fcb3.jpg", desc: "Tercera equipación FC Barcelona 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-fc-barcelona"
  },
  {
    team: "FC Barcelona", year: "2024/2025", competition: "La Liga", img: "assets/images/fcb4.jpg", desc: "Segunda equipación FC Barcelona 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-fc-barcelona"
  },
  { team: "FC Barcelona", year: "1998/1999", competition: "La Liga", img: "assets/images/fcb5.jpg", desc: "Primera equipación FC Barcelona 1998/1999. Edición centenario" },
  {
    team: "FC Barcelona", year: "2024/2025", competition: "La Liga", img: "assets/images/fcb6.jpg", desc: "Primera equipación FC Barcelona 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-fc-barcelona"
  },
  { team: "FC Barcelona", year: "2009/2010", competition: "La Liga", img: "assets/images/fcb7.jpg", desc: "Primera equipación FC Barcelona 2009/2010" },
  { team: "ACF Fiorentina", year: "1998/1999", competition: "Serie A", img: "assets/images/fiorentina.jpg", desc: "Primera equipación Fiorentina 1998/1999" },
  {
    team: "Francia", year: "2024", competition: "Selecciones", img: "assets/images/francia1.jpg", desc: "Segunda equipación Francia Eurocopa 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-francia"
  },
  { team: "Francia", year: "2006", competition: "Selecciones", img: "assets/images/francia2.jpg", desc: "Segunda equipación Francia Mundial 2006" },
  {
    team: "Holanda", year: "2024", competition: "Selecciones", img: "assets/images/holanda.jpg", desc: "Primera equipación Holanda Eurocopa 2024",
    // buyUrl: "https://www.futbolemotion.com/camisetas-holanda"
  },
  {
    team: "Inglaterra", year: "2024", competition: "Selecciones", img: "assets/images/inglaterra1.jpg", desc: "Primera equipación Inglaterra Eurocopa 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-inglaterra"
  },
  { team: "Inglaterra", year: "2006", competition: "Selecciones", img: "assets/images/inglaterra2.jpg", desc: "Primera equipación Inglaterra Mundial 2006" },
  {
    team: "Inter Miami", year: "2024/2025", competition: "MLS", img: "assets/images/inter_miami1.jpg", desc: "Segunda equipación Inter Miami 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-inter-miami"
  },
  {
    team: "Inter Miami", year: "2023/2024", competition: "MLS", img: "assets/images/inter_miami2.jpg", desc: "Primera equipación Inter Miami 2023/2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-inter-miami"
  },
  {
    team: "FC Inter Milan", year: "2024/2025", competition: "Serie A", img: "assets/images/inter_milan.jpg", desc: "Segunda equipación Inter Milan 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-inter-de-milan"
  },
  {
    team: "Italia", year: "2024", competition: "Selecciones", img: "assets/images/italia.jpg", desc: "Primera equipación Italia Eurocopa 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-italia"
  },
  { team: "Manchester City", year: "2023/2024", competition: "Premier League", img: "assets/images/man_city1.jpg", desc: "Primera equipación Manchester City 2023/2024" },
  {
    team: "Manchester City", year: "2024/2025", competition: "Premier League", img: "assets/images/man_city2.jpg", desc: "Segunda equipación Manchester City 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-manchester-city"
  },
  { team: "Manchester United", year: "2023/2024", competition: "Premier League", img: "assets/images/man_united2.jpg", desc: "Segunda equipación Manchester United 2023/2024" },
  {
    team: "Manchester United", year: "2024/2025", competition: "Premier League", img: "assets/images/man_united1.jpg", desc: "Primera equipación Manchester United 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-manchester-united"
  },
  {
    team: "SSC Napoli", year: "2024/2025", competition: "Serie A", img: "assets/images/napoles.jpg", desc: "Primera equipación Napoli 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-napoles"
  },
  {
    team: "Portugal", year: "2024", competition: "Selecciones", img: "assets/images/portugal.jpg", desc: "Primera equipación Portugal Eurocopa 2024",
    //buyUrl: "https://www.futbolemotion.com/camisetas-portugal"
  },
  { team: "Paris Saint Germain FC", year: "2021/2022", competition: "Ligue 1", img: "assets/images/psg1.jpg", desc: "Primera equipación PSG 2021/2022" },
  { team: "Paris Saint Germain FC", year: "2003/2004", competition: "Ligue 1", img: "assets/images/psg2.jpg", desc: "Primera equipación PSG 2003/2004" },
  {
    team: "Paris Saint Germain FC", year: "2024/2025", competition: "Ligue 1", img: "assets/images/psg3.jpg", desc: "Tercera equipación PSG 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-paris-saint-germain"
  },
  {
    team: "Real Betis Balompié", year: "2025/2026", competition: "La Liga", img: "assets/images/real_betis1.jpg", desc: "Edición especial Betis 2025/2026",
    //buyUrl: "https://www.futbolemotion.com/camisetas-real-betis"
  },
  { team: "Real Betis Balompié", year: "1987/1988", competition: "La Liga", img: "assets/images/real_betis2.jpg", desc: "Primera equipación Betis 1987/1988" },
  {
    team: "Real Madrid CF", year: "2024/2025", competition: "La Liga", img: "assets/images/real_madrid.jpg", desc: "Primera equipación Real Madrid 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-real-madrid"
  },
  {
    team: "Club Atlético River Plate", year: "2024/2025", competition: "Primera División Argentina", img: "assets/images/river_plate.jpg", desc: "Primera equipación River Plate 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-river-plate"
  },
  { team: "Santos Futebol Clube", year: "2024/2025", competition: "Brasileirao", img: "assets/images/santos1.jpg", desc: "Primera equipación Santos 2024/2025" },
  { team: "Santos Futebol Clube", year: "2011/2012", competition: "Brasileirao", img: "assets/images/santos2.jpg", desc: "Primera equipación Santos 2011/2012" },
  {
    team: "Sporting Clube de Portugal", year: "2024/2025", competition: "Primeira Liga", img: "assets/images/sporting_lisboa.jpg", desc: "Primera equipación Sporting de Lisboa 2024/2025",
    //buyUrl: "https://www.futbolemotion.com/camisetas-sporting-de-lisboa"
  },
  { team: "Venezuela", year: "2022/2023", competition: "Selecciones", img: "assets/images/venezuela.jpg", desc: "Primera equipación Venezuela 2022/2023" },
];

let jerseyCurrentIndex = 0;
const JERSEY_BATCH = 8;
let jerseyCurrentList = [];

function initJerseys() {
  generateCompetitionFilter();
  renderInitialJerseys(jerseys);
}

function createJerseyCard(j) {
  const card = document.createElement("div");
  card.classList.add("jersey-card", "fade-in");
  const buyBtn = j.buyUrl
    ? `<a href="${j.buyUrl}" target="_blank" rel="noopener sponsored" class="jersey-buy-btn">🛒 Dónde comprar</a>`
    : '';
  card.innerHTML = `
    <img loading="lazy" src="${j.img}" alt="${j.team}" onerror="this.style.display='none'">
    <h3>${j.team}</h3>
    <p>${j.desc}</p>
    ${buyBtn}
  `;
  document.getElementById("jersey-container")?.appendChild(card);
  fadeObserver.observe(card);
}

function loadMoreJerseys() {
  if (jerseyCurrentIndex >= jerseyCurrentList.length) return;
  jerseyCurrentList.slice(jerseyCurrentIndex, jerseyCurrentIndex + JERSEY_BATCH).forEach(createJerseyCard);
  jerseyCurrentIndex += JERSEY_BATCH;
}

function renderInitialJerseys(list) {
  const c = document.getElementById("jersey-container");
  if (!c) return;
  c.innerHTML = "";
  jerseyCurrentIndex = 0;
  jerseyCurrentList = list;
  loadMoreJerseys();
}

document.getElementById("jersey-container")?.addEventListener("scroll", () => {
  const c = document.getElementById("jersey-container");
  if (c.scrollLeft + c.clientWidth >= c.scrollWidth - 80) loadMoreJerseys();
});

const searchTeam = document.getElementById("searchTeam");
const searchCompetition = document.getElementById("searchCompetition");
const searchYear = document.getElementById("searchYear");

function filterJerseys() {
  const t = searchTeam?.value.toLowerCase() ?? "";
  const c = searchCompetition?.value ?? "";
  const y = searchYear?.value ?? "";
  renderInitialJerseys(jerseys.filter(j => j.team.toLowerCase().includes(t) && (!c || j.competition === c) && (!y || j.year.includes(y))));
}

searchTeam?.addEventListener("input", filterJerseys);
searchCompetition?.addEventListener("change", filterJerseys);
searchYear?.addEventListener("input", filterJerseys);

function generateCompetitionFilter() {
  if (!searchCompetition || searchCompetition.options.length > 1) return;
  [...new Set(jerseys.map(j => j.competition))].sort().forEach(comp => {
    const o = document.createElement("option");
    o.value = comp; o.textContent = comp;
    searchCompetition.appendChild(o);
  });
}

const jerseysTitle = document.querySelector(".jerseys h2");
if (jerseysTitle) jerseysTitle.textContent = `Camisetas de fútbol (${jerseys.length})`;

// ==========================
// ANÁLISIS API
// ==========================
const leagueSelect = document.getElementById("leagueSelect");
const viewSelect = document.getElementById("viewSelect");
const output = document.getElementById("dataOutput");

async function getData(league) {
  const [sRes, pRes] = await Promise.all([fetch(`/api/standings?league=${league}`), fetch(`/api/scorers?league=${league}`)]);
  if (!sRes.ok || !pRes.ok) throw new Error(`HTTP ${sRes.status}`);
  const s = await sRes.json(), p = await pRes.json();
  return { table: s.standings[0].table, scorers: p.scorers };
}

function renderAnalysis(view, data) {
  if (!output) return;
  output.innerHTML = "";
  const row = (l, r) => { const li = document.createElement("li"); li.innerHTML = `<span>${l}</span><span>${r}</span>`; output.appendChild(li); };
  if (view === "table") data.table.forEach(t => row(`${t.position}. ${t.team.name}`, `${t.points} pts`));
  if (view === "attack") [...data.table].sort((a, b) => b.goalsFor - a.goalsFor).slice(0, 10).forEach(t => row(t.team.name, `${t.goalsFor} goles`));
  if (view === "defense") [...data.table].sort((a, b) => a.goalsAgainst - b.goalsAgainst).slice(0, 10).forEach(t => row(t.team.name, `${t.goalsAgainst} encajados`));
  if (view === "scorers") data.scorers.slice(0, 10).forEach(p => row(p.player.name, `${p.goals} goles`));
  if (view === "assists") [...data.scorers].sort((a, b) => (b.assists || 0) - (a.assists || 0)).slice(0, 10).forEach(p => row(p.player.name, `${p.assists || 0} asistencias`));
}

async function loadAnalysis() {
  if (!output) return;
  output.innerHTML = '<li style="justify-content:center;opacity:0.5;padding:20px 0">Cargando...</li>';
  try { const d = await getData(leagueSelect.value); renderAnalysis(viewSelect.value, d); }
  catch { output.innerHTML = '<li style="justify-content:center;opacity:0.5;padding:20px 0">⚠️ Error cargando datos</li>'; }
}

leagueSelect?.addEventListener("change", loadAnalysis);
viewSelect?.addEventListener("change", loadAnalysis);

// ==========================
// WORLD CUP — PARTIDOS
// ==========================
// ⬇️  PEGA AQUÍ TU ARRAY worldCupMatches COMPLETO (id: 21 en adelante)
const worldCupMatches = [
  { id: 1, date: "2026-06-11", time: "21:00", home: "México 🇲🇽", away: "Sudáfrica 🇿🇦", stadium: "Estadio Azteca", city: "Ciudad de México", stage: "groups", group: "A" },
  { id: 2, date: "2026-06-12", time: "04:00", home: "Corea del Sur 🇰🇷", away: "República Checa 🇨🇿", stadium: "Estadio Guadalajara", city: "Guadalajara", stage: "groups", group: "A" },
  { id: 3, date: "2026-06-12", time: "21:00", home: "Canadá 🇨🇦", away: "Bosnia y Herzegovina 🇧🇦", stadium: "BMO Field", city: "Toronto", stage: "groups", group: "B" },
  { id: 4, date: "2026-06-13", time: "03:00", home: "Estados Unidos 🇺🇸", away: "Paraguay 🇵🇾", stadium: "SoFi Stadium", city: "Los Angeles", stage: "groups", group: "D" },
  { id: 5, date: "2026-06-13", time: "03:00", home: "Qatar 🇶🇦", away: "Suiza 🇨🇭", stadium: "Levi's Stadium", city: "San Francisco", stage: "groups", group: "B" },
  { id: 6, date: "2026-06-14", time: "00:00", home: "Brasil 🇧🇷", away: "Marruecos 🇲🇦", stadium: "MetLife Stadium", city: "New York", stage: "groups", group: "C" },
  { id: 7, date: "2026-06-14", time: "03:00", home: "Haití 🇭🇹", away: "Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿", stadium: "Gillette Stadium", city: "Boston", stage: "groups", group: "C" },
  { id: 8, date: "2026-06-14", time: "06:00", home: "Australia 🇦🇺", away: "Turquía 🇹🇷", stadium: "BC Place", city: "Vancouver", stage: "groups", group: "D" },
  { id: 9, date: "2026-06-14", time: "19:00", home: "Alemania 🇩🇪", away: "Curazao 🇨🇼", stadium: "NRG Stadium", city: "Houston", stage: "groups", group: "E" },
  { id: 10, date: "2026-06-14", time: "22:00", home: "Países Bajos 🇳🇱", away: "Japón 🇯🇵", stadium: "AT&T Stadium", city: "Dallas", stage: "groups", group: "F" },
  { id: 11, date: "2026-06-15", time: "01:00", home: "Costa de Marfil 🇨🇮", away: "Ecuador 🇪🇨", stadium: "Lincoln Financial Field", city: "Philadelphia", stage: "groups", group: "E" },
  { id: 12, date: "2026-06-15", time: "14:00", home: "Suecia 🇸🇪", away: "Túnez 🇹🇳", stadium: "Estadio BBVA", city: "Monterrey", stage: "groups", group: "F" },
  { id: 13, date: "2026-06-15", time: "18:00", home: "España 🇪🇸", away: "Cabo Verde 🇨🇻", stadium: "Mercedes-Benz Stadium", city: "Atlanta", stage: "groups", group: "H" },
  { id: 14, date: "2026-06-15", time: "21:00", home: "Bélgica 🇧🇪", away: "Egipto 🇪🇬", stadium: "Lumen Field", city: "Seattle", stage: "groups", group: "G" },
  { id: 15, date: "2026-06-16", time: "00:00", home: "Arabia Saudí 🇸🇦", away: "Uruguay 🇺🇾", stadium: "Hard Rock Stadium", city: "Miami", stage: "groups", group: "H" },
  { id: 16, date: "2026-06-16", time: "03:00", home: "Irán 🇮🇷", away: "Nueva Zelanda 🇳🇿", stadium: "SoFi Stadium", city: "Los Angeles", stage: "groups", group: "G" },
  { id: 17, date: "2026-06-16", time: "21:00", home: "Francia 🇫🇷", away: "Senegal 🇸🇳", stadium: "MetLife Stadium", city: "New York", stage: "groups", group: "I" },
  { id: 18, date: "2026-06-17", time: "00:00", home: "Irak 🇮🇶", away: "Noruega 🇳🇴", stadium: "Gillette Stadium", city: "Boston", stage: "groups", group: "I" },
  { id: 19, date: "2026-06-17", time: "03:00", home: "Argentina 🇦🇷", away: "Argelia 🇩🇿", stadium: "Arrowhead Stadium", city: "Kansas City", stage: "groups", group: "J" },
  { id: 20, date: "2026-06-17", time: "06:00", home: "Austria 🇦🇹", away: "Chile 🇨🇱", stadium: "Lumen Field", city: "Seattle", stage: "groups", group: "J" },
  { id: 21, date: "2026-06-17", time: "19:00", home: "Portugal 🇵🇹", away: "RD Congo 🇨🇩", stadium: "Houston Stadium", city: "Houston", stage: "groups", group: "K" },
  {
    id: 22,
    date: "2026-06-17",
    time: "22:00",
    home: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    away: "Croacia 🇭🇷",
    stadium: "Dallas Stadium",
    city: "Dallas",
    stage: "groups",
    group: "L"
  },

  {
    id: 23,
    date: "2026-06-18",
    time: "01:00",
    home: "Ghana 🇬🇭",
    away: "Panamá 🇵🇦",
    stadium: "Toronto Stadium",
    city: "Toronto",
    stage: "groups",
    group: "L"
  },

  {
    id: 24,
    date: "2026-06-18",
    time: "04:00",
    home: "Uzbekistán 🇺🇿",
    away: "Colombia 🇨🇴",
    stadium: "Estadio Ciudad de México",
    city: "Ciudad de México",
    stage: "groups",
    group: "K"
  },

  {
    id: 25,
    date: "2026-06-18",
    time: "18:00",
    home: "República Checa 🇨🇿",
    away: "Sudáfrica 🇿🇦",
    stadium: "Atlanta Stadium",
    city: "Atlanta",
    stage: "groups",
    group: "A"
  },

  {
    id: 26,
    date: "2026-06-18",
    time: "21:00",
    home: "Suiza 🇨🇭",
    away: "Bosnia y Herzegovina 🇧🇦",
    stadium: "Los Angeles Stadium",
    city: "Los Angeles",
    stage: "groups",
    group: "B"
  },

  {
    id: 27,
    date: "2026-06-19",
    time: "00:00",
    home: "Canadá 🇨🇦",
    away: "Qatar 🇶🇦",
    stadium: "BC Place Vancouver Stadium",
    city: "Vancouver",
    stage: "groups",
    group: "B"
  },

  {
    id: 28,
    date: "2026-06-19",
    time: "03:00",
    home: "México 🇲🇽",
    away: "Corea del Sur 🇰🇷",
    stadium: "Guadalajara Stadium",
    city: "Guadalajara",
    stage: "groups",
    group: "A"
  },

  {
    id: 29,
    date: "2026-06-19",
    time: "21:00",
    home: "Estados Unidos 🇺🇸",
    away: "Australia 🇦🇺",
    stadium: "Seatttle Stadium",
    city: "Seattle",
    stage: "groups",
    group: "D"
  },

  {
    id: 30,
    date: "2026-06-20",
    time: "00:00",
    home: "Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    away: "Marruecos 🇲🇦",
    stadium: "Boston Stadium",
    city: "Boston",
    stage: "groups",
    group: "C"
  },

  {
    id: 31,
    date: "2026-06-20",
    time: "03:00",
    home: "Brasil 🇧🇷",
    away: "Haití 🇭🇹",
    stadium: "Philadlephia Stadium",
    city: "Philadelphia",
    stage: "groups",
    group: "C"
  },

  {
    id: 32,
    date: "2026-06-20",
    time: "06:00",
    home: "Turquía 🇹🇷",
    away: "Paraguay 🇵🇾",
    stadium: "San Francisco Stadium",
    city: "San Francisco",
    stage: "groups",
    group: "D"
  },

  {
    id: 33,
    date: "2026-06-20",
    time: "19:00",
    home: "Países Bajos 🇳🇱",
    away: "Suecia 🇸🇪",
    stadium: "Houston Stadium",
    city: "Houston",
    stage: "groups",
    group: "F"
  },

  {
    id: 34,
    date: "2026-06-20",
    time: "22:00",
    home: "Alemania 🇩🇪",
    away: "Costa de Marfil 🇨🇮",
    stadium: "Toronto Stadium",
    city: "Toronto",
    stage: "groups",
    group: "E"
  },

  {
    id: 35,
    date: "2026-06-21",
    time: "02:00",
    home: "Ecuador 🇪🇨",
    away: "Curazao 🇨🇼",
    stadium: "Kansas City Stadium",
    city: "Kansas City",
    stage: "groups",
    group: "E"
  },

  {
    id: 36,
    date: "2026-06-21",
    time: "06:00",
    home: "Túnez 🇹🇳",
    away: "Japón 🇯🇵",
    stadium: "Estadio de Monterrey",
    city: "Monterrey",
    stage: "groups",
    group: "F"
  },

  {
    id: 37,
    date: "2026-06-21",
    time: "18:00",
    home: "España 🇪🇸",
    away: "Arabia Saudí 🇸🇦",
    stadium: "Atlanta Stadium",
    city: "Atlanta",
    stage: "groups",
    group: "H"
  },

  {
    id: 38,
    date: "2026-06-21",
    time: "21:00",
    home: "Bélgica 🇧🇪",
    away: "Irán 🇮🇷",
    stadium: "Los Angeles Stadium",
    city: "Los Angeles",
    stage: "groups",
    group: "G"
  },

  {
    id: 39,
    date: "2026-06-22",
    time: "00:00",
    home: "Uruguay 🇺🇾",
    away: "Cabo Verde 🇨🇻",
    stadium: "Miami Stadium",
    city: "Miami",
    stage: "groups",
    group: "H"
  },

  {
    id: 40,
    date: "2026-06-22",
    time: "03:00",
    home: "Nueva Zelanda 🇳🇿",
    away: "Egipto 🇪🇬",
    stadium: "BC Palace Vancouver Stadium",
    city: "Vancouver",
    stage: "groups",
    group: "G"
  },

  {
    id: 41,
    date: "2026-06-22",
    time: "19:00",
    home: "Argentina 🇦🇷",
    away: "Austria 🇦🇹",
    stadium: "Dallas Stadium",
    city: "Dallas",
    stage: "groups",
    group: "J"
  },

  {
    id: 42,
    date: "2026-06-22",
    time: "23:00",
    home: "Francia 🇫🇷",
    away: "Irak 🇮🇶",
    stadium: "Philadelphia Stadium",
    city: "Philadelphia",
    stage: "groups",
    group: "I"
  },

  {
    id: 43,
    date: "2026-06-23",
    time: "02:00",
    home: "Noruega 🇳🇴",
    away: "Senegal 🇸🇳",
    stadium: "New York Stadium",
    city: "New York",
    stage: "groups",
    group: "I"
  },

  {
    id: 44,
    date: "2026-06-23",
    time: "05:00",
    home: "Jordania 🇯🇴",
    away: "Argelia 🇩🇿",
    stadium: "San Francisco Stadium",
    city: "San Francisco",
    stage: "groups",
    group: "J"
  },

  {
    id: 45,
    date: "2026-06-23",
    time: "19:00",
    home: "Portugal 🇵🇹",
    away: "Uzbekistán 🇺🇿",
    stadium: "Houston Stadium",
    city: "Houston",
    stage: "groups",
    group: "K"
  },

  {
    id: 46,
    date: "2026-06-23",
    time: "22:00",
    home: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    away: "Ghana 🇬🇭",
    stadium: "Boston Stadium",
    city: "Boston",
    stage: "groups",
    group: "L"
  },

  {
    id: 47,
    date: "2026-06-24",
    time: "01:00",
    home: "Panamá 🇵🇦",
    away: "Croacia 🇭🇷",
    stadium: "Toronto Stadium",
    city: "Toronto",
    stage: "groups",
    group: "L"
  },

  {
    id: 48,
    date: "2026-06-24",
    time: "04:00",
    home: "Colombia 🇨🇴",
    away: "RD Congo 🇨🇩",
    stadium: "Guadalajara Stadium",
    city: "Guadalajara",
    stage: "groups",
    group: "K"
  },

  {
    id: 49,
    date: "2026-06-24",
    time: "21:00",
    home: "Suiza 🇨🇭",
    away: "Canadá 🇨🇦",
    stadium: "BC Place Vancouver Stadium",
    city: "Vancouver",
    stage: "groups",
    group: "B"
  },

  {
    id: 50,
    date: "2026-06-24",
    time: "21:00",
    home: "Bosnia y Herzegovina 🇧🇦",
    away: "Qatar 🇶🇦",
    stadium: "Seattle Stadium",
    city: "Seattle",
    stage: "groups",
    group: "B"
  },

  {
    id: 51,
    date: "2026-06-25",
    time: "00:00",
    home: "Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    away: "Brasil 🇧🇷",
    stadium: "Miami Stadium",
    city: "Miami",
    stage: "groups",
    group: "C"
  },

  {
    id: 52,
    date: "2026-06-25",
    time: "00:00",
    home: "Marruecos 🇲🇦",
    away: "Haití 🇭🇹",
    stadium: "Atlanta Stadium",
    city: "Atlanta",
    stage: "groups",
    group: "C"
  },

  {
    id: 53,
    date: "2026-06-25",
    time: "03:00",
    home: "República Checa 🇨🇿",
    away: "México 🇲🇽",
    stadium: "Estadio Ciudad de México",
    city: "Ciudad de México",
    stage: "groups",
    group: "A"
  },

  {
    id: 54,
    date: "2026-06-25",
    time: "03:00",
    home: "Sudáfrica 🇿🇦",
    away: "Corea del Sur 🇰🇷",
    stadium: "Estadio Monterrey",
    city: "Monterrey",
    stage: "groups",
    group: "A"
  },

  {
    id: 55,
    date: "2026-06-25",
    time: "22:00",
    home: "Curazao 🇨🇼",
    away: "Costa de Marfil 🇨🇮",
    stadium: "Philadelphia Stadium",
    city: "Philadelphia",
    stage: "groups",
    group: "E"
  },

  {
    id: 56,
    date: "2026-06-25",
    time: "22:00",
    home: "Ecuador 🇪🇨",
    away: "Alemania 🇩🇪",
    stadium: "New York Stadium",
    city: "New York",
    stage: "groups",
    group: "E"
  },

  {
    id: 57,
    date: "2026-06-26",
    time: "01:00",
    home: "Japón 🇯🇵",
    away: "Suecia 🇸🇪",
    stadium: "Dallas Stadium",
    city: "Dallas",
    stage: "groups",
    group: "F"
  },

  {
    id: 58,
    date: "2026-06-26",
    time: "01:00",
    home: "Túnez 🇹🇳",
    away: "Países Bajos 🇳🇱",
    stadium: "Kansas City Stadium",
    city: "Kansas City",
    stage: "groups",
    group: "F"
  },

  {
    id: 59,
    date: "2026-06-26",
    time: "04:00",
    home: "Turquía 🇹🇷",
    away: "Estados Unidos 🇺🇸",
    stadium: "Los Angeles Stadium",
    city: "Los Angeles",
    stage: "groups",
    group: "D"
  },

  {
    id: 60,
    date: "2026-06-26",
    time: "04:00",
    home: "Paraguay 🇵🇾",
    away: "Australia 🇦🇺",
    stadium: "San Francisco Stadium",
    city: "San Francisco",
    stage: "groups",
    group: "D"
  },

  {
    id: 61,
    date: "2026-06-26",
    time: "21:00",
    home: "Noruega 🇳🇴",
    away: "Francia 🇫🇷",
    stadium: "Boston Stadium",
    city: "Boston",
    stage: "groups",
    group: "I"
  },

  {
    id: 62,
    date: "2026-06-26",
    time: "21:00",
    home: "Senegal 🇸🇳",
    away: "Irak 🇮🇶",
    stadium: "Toronto Stadium",
    city: "Toronto",
    stage: "groups",
    group: "I"
  },

  {
    id: 63,
    date: "2026-06-27",
    time: "02:00",
    home: "Cabo Verde 🇨🇻",
    away: "Arabia Saudí 🇸🇦",
    stadium: "Houston Stadium",
    city: "Houston",
    stage: "groups",
    group: "H"
  },

  {
    id: 64,
    date: "2026-06-27",
    time: "02:00",
    home: "Uruguay 🇺🇾",
    away: "España 🇪🇸",
    stadium: "Estadio de Guadalajara",
    city: "Guadalajara",
    stage: "groups",
    group: "H"
  },

  {
    id: 65,
    date: "2026-06-27",
    time: "05:00",
    home: "Egipto 🇪🇬",
    away: "Irán 🇮🇷",
    stadium: "Seattle Stadium",
    city: "Seattle",
    stage: "groups",
    group: "G"
  },

  {
    id: 66,
    date: "2026-06-27",
    time: "05:00",
    home: "Nueva Zelanda 🇳🇿",
    away: "Bélgica 🇧🇪",
    stadium: "BC Place Vancouver Stadium",
    city: "Vancouver",
    stage: "groups",
    group: "G"
  },

  {
    id: 67,
    date: "2026-06-27",
    time: "23:00",
    home: "Panamá 🇵🇦",
    away: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    stadium: "New York Stadium",
    city: "New York",
    stage: "groups",
    group: "L"
  },

  {
    id: 68,
    date: "2026-06-27",
    time: "23:00",
    home: "Croacia 🇭🇷",
    away: "Ghana 🇬🇭",
    stadium: "Philadelphia Stadium",
    city: "Philadelphia",
    stage: "groups",
    group: "L"
  },

  {
    id: 69,
    date: "2026-06-28",
    time: "01:30",
    home: "Colombia 🇨🇴",
    away: "Portugal 🇵🇹",
    stadium: "Miami Stadium",
    city: "Miami",
    stage: "groups",
    group: "K"
  },

  {
    id: 70,
    date: "2026-06-28",
    time: "01:30",
    home: "RD Congo 🇨🇩",
    away: "Uzbekistán 🇺🇿",
    stadium: "Atlanta Stadium",
    city: "Atlanta",
    stage: "groups",
    group: "K"
  },

  {
    id: 71,
    date: "2026-06-28",
    time: "04:00",
    home: "Argelia 🇩🇿",
    away: "Austria 🇦🇹",
    stadium: "Kansas City Stadium",
    city: "Kansas City",
    stage: "groups",
    group: "J"
  },

  {
    id: 72,
    date: "2026-06-28",
    time: "04:00",
    home: "Jordania 🇯🇴",
    away: "Argentina 🇦🇷",
    stadium: "Dallas Stadium",
    city: "Dallas",
    stage: "groups",
    group: "J"
  },

  // ========================================
  // 🏆 KNOCKOUT STAGE
  // ========================================

  // ROUND OF 32
  {
    id: 73,
    date: "2026-06-28",
    time: "21:00",
    home: "2º Grupo A",
    away: "2º Grupo B",
    stadium: "Los Angeles Stadium",
    city: "Los Angeles",
    stage: "round32"
  },

  {
    id: 74,
    date: "2026-06-29",
    time: "19:00",
    home: "1º Grupo C",
    away: "2º Grupo F",
    stadium: "Houston Stadium",
    city: "Houston",
    stage: "round32"
  },

  {
    id: 75,
    date: "2026-06-29",
    time: "22:30",
    home: "1º Grupo E",
    away: "3º Grupo A/B/C/D/F",
    stadium: "Boston Stadium",
    city: "Boston",
    stage: "round32"
  },

  {
    id: 76,
    date: "2026-06-30",
    time: "03:00",
    home: "1º Grupo F",
    away: "2º Grupo C",
    stadium: "Estadio Monterrey",
    city: "Monterrey",
    stage: "round32"
  },

  {
    id: 77,
    date: "2026-06-30",
    time: "19:00",
    home: "2º Grupo E",
    away: "2º Grupo I",
    stadium: "Dallas Stadium",
    city: "Dallas",
    stage: "round32"
  },

  {
    id: 78,
    date: "2026-06-30",
    time: "23:00",
    home: "1º Grupo I",
    away: "3º Grupo C/D/F/G/H",
    stadium: "New York Stadium",
    city: "New York",
    stage: "round32"
  },

  {
    id: 79,
    date: "2026-07-01",
    time: "03:00",
    home: "1º Grupo A",
    away: "3º Grupo C/E/F/H/I",
    stadium: "Estadio Ciudad de México",
    city: "Ciudad de México",
    stage: "round32"
  },

  {
    id: 80,
    date: "2026-07-01",
    time: "18:00",
    home: "1º Grupo L",
    away: "3º Grupo E/H/I/J/K",
    stadium: "Atlanta Stadium",
    city: "Atlanta",
    stage: "round32"
  },

  {
    id: 81,
    date: "2026-07-01",
    time: "22:00",
    home: "1º Grupo G",
    away: "3º Grupo A/E/H/I/J",
    stadium: "Seattle Stadium",
    city: "Seattle",
    stage: "round32"
  },

  {
    id: 82,
    date: "2026-07-02",
    time: "02:00",
    home: "1º Grupo D",
    away: "3º Grupo B/E/F/I/J",
    stadium: "San Franciso Stadium",
    city: "San Francisco",
    stage: "round32"
  },

  {
    id: 83,
    date: "2026-07-02",
    time: "21:00",
    home: "1º Grupo H",
    away: "2º Grupo J",
    stadium: "Los Angeles Stadium",
    city: "Los Angeles",
    stage: "round32"
  },

  {
    id: 84,
    date: "2026-07-03",
    time: "01:00",
    home: "2º Grupo K",
    away: "2º Grupo L",
    stadium: "Toronto Stadium",
    city: "Toronto",
    stage: "round32"
  },

  {
    id: 85,
    date: "2026-07-03",
    time: "05:00",
    home: "1º Grupo B",
    away: "3º Grupo E/F/G/I/J",
    stadium: "BC Place Vancouver Stadium",
    city: "Vancouver",
    stage: "round32"
  },

  {
    id: 86,
    date: "2026-07-03",
    time: "20:00",
    home: "2º Grupo D",
    away: "2º Grupo G",
    stadium: "Dallas Stadium",
    city: "Dallas",
    stage: "round32"
  },

  {
    id: 87,
    date: "2026-07-04",
    time: "00:00",
    home: "1º Grupo J",
    away: "2º Grupo H",
    stadium: "Miami Stadium",
    city: "Miami",
    stage: "round32"
  },

  {
    id: 88,
    date: "2026-07-04",
    time: "03:30",
    home: "1º Grupo K",
    away: "3º Grupo D/E/I/J/L",
    stadium: "Kansas City Stadium",
    city: "Kansas City",
    stage: "round32"
  },

  // ROUND OF 16
  {
    id: 89,
    date: "2026-07-04",
    time: "19:00",
    home: "W73",
    away: "W75",
    stadium: "Houston Stadium",
    city: "Houston",
    stage: "round16"
  },

  {
    id: 90,
    date: "2026-07-04",
    time: "23:00",
    home: "W74",
    away: "W77",
    stadium: "Philadelphia Stadium",
    city: "Philadelphia",
    stage: "round16"
  },

  {
    id: 91,
    date: "2026-07-05",
    time: "22:00",
    home: "W76",
    away: "W78",
    stadium: "New York Stadium",
    city: "New York",
    stage: "round16"
  },

  {
    id: 92,
    date: "2026-07-06",
    time: "02:00",
    home: "W79",
    away: "W80",
    stadium: "Estadio Ciudad de México",
    city: "Ciudad de México",
    stage: "round16"
  },

  {
    id: 93,
    date: "2026-07-06",
    time: "21:00",
    home: "W83",
    away: "W84",
    stadium: "Dallas Stadium",
    city: "Dallas",
    stage: "round16"
  },

  {
    id: 94,
    date: "2026-07-07",
    time: "02:00",
    home: "W81",
    away: "W82",
    stadium: "Seattle Stadium",
    city: "Seattle",
    stage: "round16"
  },

  {
    id: 95,
    date: "2026-07-07",
    time: "18:00",
    home: "W86",
    away: "W88",
    stadium: "Atlanta Stadium",
    city: "Atlanta",
    stage: "round16"
  },

  {
    id: 96,
    date: "2026-07-07",
    time: "22:00",
    home: "W85",
    away: "W87",
    stadium: "BC Place Vancouver Stadium",
    city: "Vancouver",
    stage: "round16"
  },

  // QUARTERFINALS
  {
    id: 97,
    date: "2026-07-09",
    time: "22:00",
    home: "W89",
    away: "W90",
    stadium: "Boston Stadium",
    city: "Boston",
    stage: "quarters"
  },

  {
    id: 98,
    date: "2026-07-10",
    time: "21:00",
    home: "W93",
    away: "W94",
    stadium: "Los Angeles Stadium",
    city: "Los Angeles",
    stage: "quarters"
  },

  {
    id: 99,
    date: "2026-07-11",
    time: "23:00",
    home: "W91",
    away: "W92",
    stadium: "Miami Stadium",
    city: "Miami",
    stage: "quarters"
  },

  {
    id: 100,
    date: "2026-07-12",
    time: "03:00",
    home: "W95",
    away: "W96",
    stadium: "Kansas City Stadium",
    city: "Kansas City",
    stage: "quarters"
  },

  // SEMIFINALS
  {
    id: 101,
    date: "2026-07-14",
    time: "21:00",
    home: "W97",
    away: "W98",
    stadium: "Dallas Stadium",
    city: "Dallas",
    stage: "semis"
  },

  {
    id: 102,
    date: "2026-07-15",
    time: "21:00",
    home: "W99",
    away: "W100",
    stadium: "Atlanta Stadium",
    city: "Atlanta",
    stage: "semis"
  },

  // THIRD PLACE
  {
    id: 103,
    date: "2026-07-18",
    time: "23:00",
    home: "L101",
    away: "L102",
    stadium: "Miami Stadium",
    city: "Miami",
    stage: "third_place"
  },

  // FINAL
  {
    id: 104, date: "2026-07-19",
    time: "21:00",
    home: "W101",
    away: "W102",
    stadium: "MetLife Stadium",
    city: "New York",
    stage: "final"
  }
];

const matchesById = {};
worldCupMatches.forEach(m => { matchesById[m.id] = m; });

// ==========================
// SELECCIONES — ARTÍCULOS
// ==========================
// Para añadir un artículo: copia una entrada y edita el HTML del "content".
// El ✍️ aparecerá automáticamente en las cards que tengan artículo.
const teamArticles = {

  "España 🇪🇸": {
    content: `
      <span class="article-flag">🇪🇸</span>
      <h1>España: la máquina que no se apaga</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Marzo 2026</span><span>⏱ 5 min</span>
      </div>
      <p class="article-lead">
        Campeona de Europa en 2024, España llega al Mundial como una de las favoritas con la generación más
        talentosa desde la época dorada — y ahora hambrienta de historia.
      </p>
      <h2>Un proyecto que trasciende generaciones</h2>
      <p>Lamine Yamal, Nico Williams, Pedri, Gavi… España tiene la plantilla más joven de entre los favoritos y, a la vez, la más experimentada en títulos. Esa paradoja es precisamente su mayor fortaleza.</p>
      <p>La Eurocopa de 2024 en Alemania fue una demostración de poder colectivo. Ganan sin que nadie brille individualmente porque todos brillan. No hay dependencia de un nombre: hay un sistema.</p>
      <div class="article-stat-grid" style="grid-template-columns:repeat(4,1fr)">
        <div class="stat-box"><span class="stat-val">#2</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">1</span><span class="stat-lbl">Mundial (2010)</span></div>
        <div class="stat-box"><span class="stat-val">Grupo H</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Estilo de juego: posesión con veneno</h2>
      <p>España no controla el balón para entretener. Lo hace para dominar, agotar al rival, crear superioridades locales y ejecutar con precisión quirúrgica. El 4-3-3 de Luis de la Fuente es flexible: se convierte en 4-2-3-1 en defensa y en un 3-2-5 en ataque cuando toca apretar.</p>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Lamine Yamal</strong> · Extremo derecho</span><span class="player-role">El mejor del mundo con 18 años</span></li>
        <li><span><strong>Pedri</strong> · Centrocampista</span><span class="player-role">El metrónomo</span></li>
        <li><span><strong>Nico Williams</strong> · Extremo izquierdo</span><span class="player-role">Velocidad e impredecibilidad</span></li>
        <li><span><strong>Aymeric Laporte</strong> · Defensa central</span><span class="player-role">Líder en la zaga</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>España no es la más talentosa individualmente —Francia o Inglaterra pueden argumentar eso—, pero si es la más equipo. Y en un torneo de 48 selecciones, eso marca la diferencia.</p>
      </div>`
  },

  "Argentina 🇦🇷": {
    content: `
      <span class="article-flag">🇦🇷</span>
      <h1>Argentina: defender la corona con Messi al límite</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Marzo 2026</span><span>⏱ 5 min</span>
      </div>
      <p class="article-lead">
        El campeón del mundo llega a 2026 con la presión de defender el título y la incógnita de hasta
        dónde puede llegar un Messi de 38 años que no tiene nada que demostrar, siendo el mejor de la historia.
      </p>
      <h2>La última danza del 10</h2>
      <p>Hay algo cinematográfico en la historia de Messi con la selección argentina. Qatar fue el cierre perfecto. Pero Scaloni ha construido algo que va más allá del número 10: un equipo con identidad propia, con un bloque sólido y una presión altísima que funciona como un mecanismo de relojería.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#3</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">3</span><span class="stat-lbl">Mundiales ganados</span></div>
        <div class="stat-box"><span class="stat-val">Grupo J</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Lionel Messi</strong> · Extremo / mediapunta</span><span class="player-role">The last dance</span></li>
        <li><span><strong>Lautaro Martínez</strong> · Delantero centro</span><span class="player-role">Goleador</span></li>
        <li><span><strong>Enzo Fernández</strong> · Centrocampista</span><span class="player-role">Controla el centro del campo</span></li>
        <li><span><strong>Julián Álvarez</strong> · Delantero</span><span class="player-role">El hombre araña. Incansable</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Defender un Mundial es históricamente imposible. Solo Brasil en 1958–62 lo logró. Argentina tiene el equipo para intentarlo, pero el nuevo formato con 48 equipos añade desgaste. Si Messi llega sano a cuartos, todo es posible.</p>
      </div>`
  },

  "Francia 🇫🇷": {
    content: `
      <span class="article-flag">🇫🇷</span>
      <h1>Francia: el gigante que siempre llega</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Finalista en 2022, campeona en 2018. Francia llega con la plantilla más profunda del torneo
        y con Mbappé convertido en capitán de un proyecto que busca su tercer título.
      </p>
      <h2>La plantilla más profunda del mundo</h2>
      <p>Incluso si el equipo titular de Francia tuviese una noche mala, Deschamps podría armar hasta 3 equipos y competir en cualquier torneo de primer nivel. Esa es la realidad de una selección que ha acumulado talento durante décadas gracias a su cantera y diversidad cultural.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#1</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">2</span><span class="stat-lbl">Mundiales ganados</span></div>
        <div class="stat-box"><span class="stat-val">Grupo I</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Kylian Mbappé</strong> · Extremo / delantero</span><span class="player-role">El jugador más determiante del mundo</span></li>
        <li><span><strong>Ousmane Dembèlè</strong> · Extremo</span><span class="player-role">Actual balón de oro</span></li>
        <li><span><strong>Aurélien Tchouaméni</strong> · Centrocampista defensivo</span><span class="player-role">Destructor de primer nivel</span></li>
        <li><span><strong>William Saliba</strong> · Defensa central</span><span class="player-role">El mejor central del mundo</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Francia sobre el papel debería llegar a semifinales. La pregunta es si tienen la energía colectiva para dar un paso más. Con Mbappé en modo final son imbatibles. El problema es que ese modo solo aparece cuando Mbappé quiere.</p>
      </div>`
  },

  "Brasil 🇧🇷": {
    content: `
      <span class="article-flag">🇧🇷</span>
      <h1>Brasil: el eterno candidato busca su regreso</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        24 años sin una Copa del Mundo. Brasil llega a 2026 con Vinícius Jr. como estandarte de
        una generación que necesita reivindicarse ante su propia historia.
      </p>
      <h2>La pesada mochila de ser Brasil</h2>
      <p>Ninguna selección carga con más expectativa que Brasil. Cinco estrellas en el escudo y la obligación de ganar siempre. En los últimos mundiales, esa presión ha podido con ellos. La eliminación en cuartos de 2022 ante Croacia sigue doliendo.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#6</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">5</span><span class="stat-lbl">Mundiales ganados</span></div>
        <div class="stat-box"><span class="stat-val">Grupo C</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Vinícius Jr.</strong> · Extremo</span><span class="player-role">El jugador más desequilibrante del mundo</span></li>
        <li><span><strong>Raphinha</strong> · Extremo</span><span class="player-role">El socio perfecto de Vini</span></li>
        <li><span><strong>Bruno Guimarães</strong> · Centrocampista</span><span class="player-role">El motor del equipo</span></li>
        <li><span><strong>Marquinhos</strong> · Defensa central</span><span class="player-role">Capitán y líder en la zaga</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Brasil tiene el talento. Le falta el bloque. Si Ancelotti logra construir un equipo cohesionado, pueden llegar lejos. Pero llevan demasiados ciclos prometiendo y llegando a cuartos. ¿Veremos un último baile de Neymar?</p>
      </div>`
  },

  "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿": {
    content: `
      <span class="article-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
      <h1>Inglaterra: ¿llegó su momento?</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Enero 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        60 años esperando. Finalistas en Euro 2021 y Euro 2024. Inglaterra tiene la camada de 
        futbolistas más completa de su historia.
      </p>
      <h2>La generación que no puede fallar</h2>
      <p>Bellingham, Kane, Foden, Saka. No hay otro combinado que tenga tanta calidad en las cuatro posiciones clave del campo. El problema de Inglaterra nunca ha sido el talento. Ha sido la gestión de la presión y la falta de un sistema claro en los momentos decisivos.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#4</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">1</span><span class="stat-lbl">Mundial ganado (1966)</span></div>
        <div class="stat-box"><span class="stat-val">Grupo G</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Jude Bellingham</strong> · Centrocampista / mediapunta</span><span class="player-role">La estrella total</span></li>
        <li><span><strong>Harry Kane</strong> · Delantero centro</span><span class="player-role">El goleador más fiable del mundo</span></li>
        <li><span><strong>Phil Foden</strong> · Extremo</span><span class="player-role">Magia en estado puro</span></li>
        <li><span><strong>Bukayo Saka</strong> · Extremo</span><span class="player-role">El más consistente de todos</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Inglaterra tiene todo para ganar. Excepto la cabeza. Todo está en si superan la presión histórica y juegan como saben.</p>
      </div>`
  },

  "Portugal 🇵🇹": {
    content: `
      <span class="article-flag">🇵🇹</span>
      <h1>Portugal: el talento infinito y el último baile de Cristiano</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Roberto Martínez dirige a una de las generaciones doradas más profundas de Europa, con el eterno debate sobre cómo encajar a un Cristiano Ronaldo de 41 años en el puzzle.
      </p>
      <h2>Una orquesta con demasiados directores</h2>
      <p>Si miras línea por línea, Portugal intimida. Tienen a los mejores cerebros de la Premier League y una defensa rocosa. El reto táctico es lograr que tantas piezas de mentalidad ofensiva y posesión no se estorben entre sí, y sobre todo, gestionar la transición de un equipo que históricamente jugaba para su capitán, a uno que debe jugar como un colectivo fluido.</p>
      <div class="article-stat-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-box"><span class="stat-val">#5</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">3º</span><span class="stat-lbl">Mundial (1966)</span></div>
        <div class="stat-box"><span class="stat-val">Grupo K</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Estilo de juego: posesión ofensiva</h2>
      <p>Portugal quiere el balón. A diferencia de la era de Fernando Santos, donde primaba el pragmatismo, este equipo busca ahogar al rival en su propia área mediante triangulaciones rápidas y la constante rotación de sus mediapuntas.</p>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Cristiano Ronaldo</strong> · Delantero</span><span class="player-role">La leyenda incombustible</span></li>
        <li><span><strong>Bruno Fernandes</strong> · Mediapunta</span><span class="player-role">El creador principal</span></li>
        <li><span><strong>Bernardo Silva</strong> · Centrocampista</span><span class="player-role">Inteligencia táctica</span></li>
        <li><span><strong>Rúben Dias</strong> · Defensa central</span><span class="player-role">El muro luso</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Tienen plantilla para ser campeones del mundo. La gran duda es si la gestión de egos y minutos en los momentos de máxima tensión sumará o restará. Si logran ser un bloque, son imparables.</p>
      </div>`
  },

  "Alemania 🇩🇪": {
    content: `
      <span class="article-flag">🇩🇪</span>
      <h1>Alemania: el gigante ha despertado</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 5 min</span>
      </div>
      <p class="article-lead">
        Tras un par de ciclos mundialistas oscuros, la "Mannschaft" llega a Norteamérica revitalizada bajo el mando de Nagelsmann y al ritmo de sus dos niños prodigio.
      </p>
      <h2>La era de "Wusiala"</h2>
      <p>El fútbol alemán se ha reinventado. Atrás quedó la crisis de identidad; hoy Alemania presiona alto, muerde y transita a una velocidad vertiginosa. El equipo gira en torno a la sinergia mágica entre Florian Wirtz y Jamal Musiala, dos jugadores capaces de destrozar cualquier esquema defensivo en una baldosa.</p>
      <div class="article-stat-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-box"><span class="stat-val">#10</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">4</span><span class="stat-lbl">Mundiales ganados</span></div>
        <div class="stat-box"><span class="stat-val">Grupo E</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Estilo de juego: presión alta y juego directo</h2>
      <p>Es un equipo vertical y agresivo. Nagelsmann ha instaurado un sistema que busca robar el balón lo más cerca posible de la portería rival, utilizando laterales profundos y mediocentros de contención que permiten a los talentos ofensivos jugar con total libertad de movimientos.</p>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Florian Wirtz</strong> · Mediapunta</span><span class="player-role">Visión y precisión letal</span></li>
        <li><span><strong>Jamal Musiala</strong> · Extremo / mediapunta</span><span class="player-role">Regate indescifrable</span></li>
        <li><span><strong>Antonio Rüdiger</strong> · Defensa central</span><span class="player-role">Jerarquía y agresividad</span></li>
        <li><span><strong>Joshua Kimmich</strong> · Lateral / Pivote</span><span class="player-role">El termómetro del equipo</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Nunca des por muerta a Alemania. Han recuperado el aura competitiva y tienen a los jóvenes más ilusionantes del torneo. Son candidatos reales a levantar su quinta Copa del Mundo.</p>
      </div>`
  },

  "Uruguay 🇺🇾": {
    content: `
      <span class="article-flag">🇺🇾</span>
      <h1>Uruguay: la garra se vuelve vértigo</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Marcelo Bielsa ha transformado a la histórica selección charrúa en una máquina de presión asfixiante que combina su tradicional dureza defensiva con un ritmo de juego infernal.
      </p>
      <h2>La revolución del "Loco"</h2>
      <p>Uruguay siempre ha sido un equipo incómodo, pero ahora también es dominante. Han dejado de ser una selección que espera el fallo del rival para convertirse en un equipo que lo provoca. El mediocampo, liderado por Fede Valverde, es posiblemente el más físico e intenso de todo el panorama internacional.</p>
      <div class="article-stat-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-box"><span class="stat-val">#17</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">2</span><span class="stat-lbl">Mundiales ganados</span></div>
        <div class="stat-box"><span class="stat-val">Grupo H</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Estilo de juego: solidez y transiciones letales</h2>
      <p>Ritmo altísimo, marcas al hombre en todo el campo y verticalidad absoluta en cuanto se recupera el balón. Exigen a los rivales un nivel de desgaste físico que pocos equipos pueden soportar durante 90 minutos completos.</p>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Federico Valverde</strong> · Centrocampista</span><span class="player-role">El motor incansable</span></li>
        <li><span><strong>Darwin Núñez</strong> · Delantero centro</span><span class="player-role">Potencia y desmarque</span></li>
        <li><span><strong>Ronald Araújo</strong> · Defensa central</span><span class="player-role">Impasable en el 1vs1</span></li>
        <li><span><strong>Manuel Ugarte</strong> · Pivote defensivo</span><span class="player-role">El recuperador</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>En un torneo corto, cruzarse con esta Uruguay es una pesadilla. Si el físico les aguanta el nivel de exigencia de Bielsa, son el "caballo negro" que nadie quiere ver en su lado del cuadro de eliminatorias.</p>
      </div>`
  },

  "Países Bajos 🇳🇱": {
    content: `
      <span class="article-flag">🇳🇱</span>
      <h1>Países Bajos: en busca del paraíso perdido</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Los eternos subcampeones llegan con una de las defensas más sólidas del mundo y un ataque joven y dinámico, buscando finalmente desterrar la maldición de las finales.
      </p>
      <h2>El equilibrio del nuevo Fútbol Total</h2>
      <p>Históricamente conocidos por su brillantez ofensiva y fragilidad atrás, la "Oranje" actual es una paradoja: construyen su equipo desde la que probablemente sea la mejor línea de centrales del campeonato. A partir de esa seguridad, confían en la magia de mediocampo hacia adelante.</p>
      <div class="article-stat-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-box"><span class="stat-val">#7</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Final (x3)</span><span class="stat-lbl">Mejor resultado</span></div>
        <div class="stat-box"><span class="stat-val">Grupo F</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Virgil van Dijk</strong> · Defensa central</span><span class="player-role">El capitán y líder absoluto</span></li>
        <li><span><strong>Xavi Simons</strong> · Mediapunta</span><span class="player-role">El talento diferencial</span></li>
        <li><span><strong>Frenkie de Jong</strong> · Centrocampista</span><span class="player-role">El director de orquesta</span></li>
        <li><span><strong>Cody Gakpo</strong> · Delantero</span><span class="player-role">Peligro constante al espacio</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Tienen la madurez necesaria para competir contra cualquiera. Su éxito dependerá de si sus atacantes logran la eficacia necesaria en los partidos cerrados. No son los principales favoritos, pero siempre compiten hasta el final.</p>
      </div>`
  },

  "Marruecos 🇲🇦": {
    content: `
      <span class="article-flag">🇲🇦</span>
      <h1>Marruecos: la potencia africana llegó para quedarse</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Hicieron historia en Qatar 2022 alcanzando las semifinales. Ahora, ya no son la cenicienta del torneo, sino un rival temido por todos y respetado por la élite.
      </p>
      <h2>El arte de defender atacando</h2>
      <p>Regragui construyó un bloque bajo inexpugnable hace cuatro años, pero el equipo ha evolucionado. Con la incorporación de perfiles más ofensivos, Marruecos ya no solo defiende de maravilla, sino que domina la posesión frente a rivales de su misma talla y penaliza al contraataque contra los gigantes.</p>
      <div class="article-stat-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-box"><span class="stat-val">#8</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">4º (2022)</span><span class="stat-lbl">Mejor resultado</span></div>
        <div class="stat-box"><span class="stat-val">Grupo C</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Achraf Hakimi</strong> · Lateral derecho</span><span class="player-role">Profundidad de élite mundial</span></li>
        <li><span><strong>Brahim Díaz</strong> · Mediapunta</span><span class="player-role">Desborde y creatividad pura</span></li>
        <li><span><strong>Sofyan Amrabat</strong> · Pivote</span><span class="player-role">El pulmón del equipo</span></li>
        <li><span><strong>Yassine Bounou</strong> · Portero</span><span class="player-role">Un seguro de vida bajo palos</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>El factor sorpresa ya no existe, y esa será su mayor prueba de fuego. Sin embargo, su solidez táctica y el talento individual los colocan legítimamente en el top 10 mundial. Llegar a cuartos debería ser su objetivo mínimo.</p>
      </div>`
  },

  "Estados Unidos 🇺🇸": {
    content: `
      <span class="article-flag">🇺🇸</span>
      <h1>Estados Unidos: la presión de trascender en casa</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        El país anfitrión llega con la generación más talentosa de su historia y la obligación absoluta de firmar un papel digno frente a su público. Es ahora o nunca.
      </p>
      <h2>Atletismo y madurez</h2>
      <p>La época en que el "Team USA" solo competía a base de esfuerzo físico quedó atrás. Hoy, la gran mayoría de su once titular juega en las ligas más competitivas de Europa. Sin embargo, su principal baza sigue siendo su envidiable condición física, capaz de ahogar a los rivales en partidos de ida y vuelta.</p>
      <div class="article-stat-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-box"><span class="stat-val">#16</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">3º (1930)</span><span class="stat-lbl">Mejor resultado</span></div>
        <div class="stat-box"><span class="stat-val">Grupo D</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Christian Pulisic</strong> · Extremo</span><span class="player-role">El Capitán América</span></li>
        <li><span><strong>Weston McKennie</strong> · Centrocampista</span><span class="player-role">Fuerza y llegada al área</span></li>
        <li><span><strong>Folarin Balogun</strong> · Delantero centro</span><span class="player-role">El finalizador</span></li>
        <li><span><strong>Antonee Robinson</strong> · Lateral izquierdo</span><span class="player-role">Incombustible por la banda</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Jugar en casa puede darte alas o paralizarte. Tienen el nivel para meterse en octavos e incluso asustar en cuartos de final, pero su falta de consistencia táctica contra las potencias europeas y sudamericanas sigue siendo su gran cuenta pendiente.</p>
      </div>`
  },

  "Bélgica 🇧🇪": {
    content: `
      <span class="article-flag">🇧🇪</span>
      <h1>Bélgica: el último servicio de los arquitectos</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Mayo 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Con Kevin De Bruyne como último gran exponente de la generación de oro, Bélgica llega a 2026 en plena transición, mezclando veteranía con jóvenes promesas de la Premier League.
      </p>
      <h2>Entre la nostalgia y el futuro</h2>
      <p>Ya no son los favoritos indiscutibles de 2018, pero subestimar a los 'Diablos Rojos' es un error. Tedesco ha inyectado una dosis de pragmatismo y potencia física que el equipo necesitaba tras el fin de la era Martínez.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#9</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">3º (2018)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo G</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Kevin De Bruyne</strong> · Centrocampista</span><span class="player-role">El último arquitecto</span></li>
        <li><span><strong>Jérémy Doku</strong> · Extremo</span><span class="player-role">Electricidad pura</span></li>
        <li><span><strong>Loïs Openda</strong> · Delantero</span><span class="player-role">Velocidad de ruptura</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Bélgica será el juez de este Mundial. Quizás no tengan profundidad para ganar siete partidos, pero pueden eliminar a cualquier gigante en una tarde inspirada de KDB.</p>
      </div>`
  },

  "Colombia 🇨🇴": {
    content: `
      <span class="article-flag">🇨🇴</span>
      <h1>Colombia: la fiebre amarilla recupera su brillo</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Mayo 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Tras la ausencia en 2022, Colombia regresa al escenario mundial con Luis Díaz como estrella global y un bloque que ha vuelto a enamorar a Sudamérica.
      </p>
      <h2>El orden dentro del talento</h2>
      <p>Néstor Lorenzo ha logrado lo que parecía imposible: que Colombia sea un equipo sólido sin perder la alegría en el juego. Su presión tras pérdida y su velocidad en las bandas los convierten en un equipo extremadamente incómodo para las potencias europeas.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#13</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Cuartos (2014)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo K</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Luis Díaz</strong> · Extremo izquierdo</span><span class="player-role">El desequilibrio total</span></li>
        <li><span><strong>James Rodríguez</strong> · Mediapunta</span><span class="player-role">El último 10 clásico</span></li>
        <li><span><strong>Richard Ríos</strong> · Centrocampista</span><span class="player-role">Despliegue y elegancia</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Colombia tiene aroma a semifinalista. Si James mantiene su nivel de Copa América y Lucho Díaz es decisivo, nadie querrá cruzarse con ellos en eliminatorias.</p>
      </div>`
  },

  "México 🇲🇽": {
    content: `
      <span class="article-flag">🇲🇽</span>
      <h1>México: la obligación de hacer historia en casa</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 5 min</span>
      </div>
      <p class="article-lead">
        México afronta su tercer mundial como anfitrión con la presión de superar finalmente la barrera de los cuartos de final y una afición que exige resultados inmediatos.
      </p>
      <h2>Un proyecto bajo la lupa</h2>
      <p>El "Tri" llega en un proceso de renovación generacional. Con Santiago Giménez como punta de lanza, México busca un estilo más directo y físico que le permita competir de tú a tú con la élite mundial bajo el calor de su gente.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#15</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Cuartos (1986)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo A</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Santiago Giménez</strong> · Delantero centro</span><span class="player-role">El goleador de la esperanza</span></li>
        <li><span><strong>Edson Álvarez</strong> · Centrocampista</span><span class="player-role">El mariscal del centro</span></li>
        <li><span><strong>César Montes</strong> · Defensa</span><span class="player-role">Liderazgo aéreo</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>México jugará con doce. El Estadio Azteca será su mayor aliado, pero el equipo debe demostrar madurez mental cuando el marcador se ponga en contra.</p>
      </div>`
  },

  "Japón 🇯🇵": {
    content: `
      <span class="article-flag">🇯🇵</span>
      <h1>Japón: la revolución de los samuráis azules</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Mayo 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Japón ya no es solo disciplina y orden; ahora es también talento puro en las mejores ligas de Europa. Cuidado con el gigante asiático.
      </p>
      <h2>Disciplina táctica y velocidad</h2>
      <p>Su capacidad para mutar sistemas durante el partido es asombrosa. Pueden defender en bloque bajo y, en tres toques, plantarse en el área rival con una precisión quirúrgica.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#18</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Octavos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo F</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Takefusa Kubo</strong> · Mediapunta</span><span class="player-role">Magia y visión</span></li>
        <li><span><strong>Kaoru Mitoma</strong> · Extremo</span><span class="player-role">El maestro del regate</span></li>
        <li><span><strong>Wataru Endo</strong> · Pivote</span><span class="player-role">El corazón del equipo</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Están listos para dar el salto. Si logran superar la barrera psicológica de los octavos de final, pueden ser la gran sorpresa del Mundial.</p>
      </div>`
  },

  "Noruega 🇳🇴": {
    content: `
      <span class="article-flag">🇳🇴</span>
      <h1>Noruega: Haaland llega al gran escenario</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Mayo 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">
        Finalmente, el mundo podrá ver a Erling Haaland en una Copa del Mundo. Noruega llega con el mejor delantero del planeta y ganas de sacudir el orden establecido.
      </p>
      <h2>Dependencia de las estrellas</h2>
      <p>Noruega es un equipo de dos velocidades: la genialidad de Ødegaard y Haaland, y un bloque trabajador pero limitado en defensa. Su éxito dependerá de cuánto puedan proteger su propia área.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#31</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Octavos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo I</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Erling Haaland</strong> · Delantero</span><span class="player-role">El cyborg del gol</span></li>
        <li><span><strong>Martin Ødegaard</strong> · Mediapunta</span><span class="player-role">El cerebro</span></li>
        <li><span><strong>Antonio Nusa</strong> · Extremo</span><span class="player-role">La joven perla</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Si Haaland tiene el día, Noruega puede ganar a cualquiera. El problema es qué pasa si lo anulan. Su camino termina donde termine la puntería de su 9.</p>
      </div>`
  },

  "Senegal 🇸🇳": {
    content: `
      <span class="article-flag">🇸🇳</span>
      <h1>Senegal: los leones de la Teranga</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">El estandarte de África. Un equipo físico, experimentado y con jugadores que son pilares en las grandes ligas europeas.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#14</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Cuartos (2002)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo I</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Físicamente son un muro. Si Sadio Mané llega con un último aliento de magia, son candidatos a repetir los cuartos de final de 2002.
      </div>`
  },

  "Ecuador 🇪🇨": {
    content: `
      <span class="article-flag">🇪🇨</span>
      <h1>Ecuador: juventud y vigor en la mitad del mundo</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">La selección con mayor crecimiento físico de CONMEBOL. Un bloque joven que ya no le teme a nadie.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#23</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Octavos (2006)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo E</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Con Moisés Caicedo al mando, Ecuador es un equipo modernísimo. No tienen techo, pero les falta experiencia en las rondas de eliminación.
      </div>`
  },

  "Canadá 🇨🇦": {
    content: `
      <span class="article-flag">🇨🇦</span>
      <h1>Canadá: el rayo del norte</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Velocidad pura. Canadá ya no es una sorpresa, es una realidad basada en transiciones que parecen de atletismo.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#30</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo B</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Alphonso Davies es el motor. Si logran controlar el caos defensivo, serán un equipo divertidísimo de ver y muy peligroso.
      </div>`
  },

  "Croacia 🇭🇷": {
    content: `
      <span class="article-flag">🇭🇷</span>
      <h1>Croacia: la resistencia eterna</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">¿Cómo lo hacen? Un país pequeño que siempre se cuela en la mesa de los grandes. Modrić busca el último milagro.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#11</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Finalista (2018)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo L</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Nunca los descartes. Si llegan a la prórroga, ya han ganado. Su gestión emocional del partido es única en el mundo.
      </div>`
  },

  "Arabia Saudita 🇸🇦": {
    content: `
      <span class="article-flag">🇸🇦</span>
      <h1>Arabia Saudita: el orgullo del desierto</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Tras vencer a Argentina en 2022, los halcones verdes quieren demostrar que aquello no fue una casualidad.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#61</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Octavos (1994)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo H</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Tienen la liga más potente de Asia, lo que ha subido el nivel de sus locales. Serán un bloque muy difícil de romper.
      </div>`
  },

  "Suiza 🇨🇭": {
    content: `
      <span class="article-flag">🇨🇭</span>
      <h1>Suiza: el reloj que nunca falla</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Mayo 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Sin grandes titulares pero con una eficiencia aterradora, Suiza llega a 2026 como el equipo que nadie quiere enfrentar en una eliminatoria directa.</p>
      <h2>Orden, control y Granit Xhaka</h2>
      <p>La selección helvética es la definición de "equipo rocoso". No te regalan un metro. Su sistema defensivo es una coreografía ensayada mil veces, y en la transición, saben castigar con la precisión de su industria relojera.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#19</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Cuartos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo B</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Granit Xhaka</strong> · Centrocampista</span><span class="player-role">El líder espiritual</span></li>
        <li><span><strong>Manuel Akanji</strong> · Defensa central</span><span class="player-role">Muro de seguridad</span></li>
        <li><span><strong>Gregor Kobel</strong> · Portero</span><span class="player-role">Uno de los mejores del mundo</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Suiza pasará de grupos. Lo hace siempre. La duda es si tienen el "punch" necesario para derribar a un top 5 en cuartos de final.</p>
      </div>`
  },

  "Corea del Sur 🇰🇷": {
    content: `
      <span class="article-flag">🇰🇷</span>
      <h1>Corea del Sur: más allá de Son Heung-min</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Mayo 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Los "Guerreros Taeguk" llegan con una disciplina táctica impecable y un despliegue físico que agota a cualquier rival.</p>
      <h2>El equilibrio asiático</h2>
      <p>Aunque Son sigue siendo el ídolo, Corea ha desarrollado un bloque medio-alto muy agresivo. Es un equipo que no te deja respirar y que utiliza la velocidad de sus extremos para matar al contragolpe.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#25</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">4º (2002)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo A</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>En el Grupo A junto a México, se jugarán la vida. Son un equipo incómodo que puede arruinarle el Mundial a cualquier favorito descuidado.</p>
      </div>`
  },

  "Turquía 🇹🇷": {
    content: `
      <span class="article-flag">🇹🇷</span>
      <h1>Turquía: el talento emergente de Arda Güler</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Mayo 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Con una nueva generación llena de descaro técnico, Turquía busca repetir las gestas de principios de siglo.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#22</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">3º (2002)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo D</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Arda Güler</strong> · Mediapunta</span><span class="player-role">La perla de Estambul</span></li>
        <li><span><strong>Kenan Yıldız</strong> · Delantero</span><span class="player-role">Potencia y regate</span></li>
        <li><span><strong>Hakan Çalhanoğlu</strong> · Mediocentro</span><span class="player-role">El guante en el pie</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Turquía es puro fuego. Si logran canalizar su intensidad emocional en fútbol, son candidatos a ser la revelación europea del torneo.</p>
      </div>`
  },

  "Austria 🇦🇹": {
    content: `
      <span class="article-flag">🇦🇹</span>
      <h1>Austria: el laboratorio de Rangnick</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Presión asfixiante y verticalidad absoluta. Austria es el equipo que mejor representa el fútbol moderno de transiciones.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#24</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">3º (1954)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo J</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>  En el grupo de Argentina, Austria será un examen físico durísimo. Tienen sistema, tienen hambre y tienen a David Alaba liderando desde el campo o el banquillo.
      </div>`
  },

  "Australia 🇦🇺": {
    content: `
      <span class="article-flag">🇦🇺</span>
      <h1>Australia: el espíritu "Socceroo"</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Fuerza, juego aéreo y un corazón que no entiende de jerarquías. Australia viene a pelear cada balón como si fuera el último.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#27</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Octavos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo D</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>No tienen las estrellas de antaño, pero son un bloque granítico. Su éxito depende de aprovechar al máximo el balón parado.</p>
      </div>`
  },

  "Egipto 🇪🇬": {
    content: `
      <span class="article-flag">🇪🇬</span>
      <h1>Egipto: la última faraónica de Salah</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Todo gira en torno a Mohamed Salah. Egipto llega con un sistema diseñado para que su estrella decida partidos en una baldosa.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#29</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo G</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> 
        <p>Dependen demasiado de un solo hombre. Si Salah está inspirado, pueden soñar con octavos; si no, sufrirán ante el físico de sus rivales de grupo.</p>
      </div>`
  },

  "Suecia 🇸🇪": {
    content: `
      <span class="article-flag">🇸🇪</span>
      <h1>Suecia: dinamita en el área con Gyökeres</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Tras un tiempo en la sombra, Suecia vuelve con una delantera que asusta a cualquier defensa europea.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#38</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Finalista (1958)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo F</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Con Gyökeres e Isak arriba, el gol está asegurado. Si la defensa acompaña, Suecia puede ser el matagigantes de esta edición.</p>
      </div>`
  },

  "Ghana 🇬🇭": {
    content: `
      <span class="article-flag">🇬🇭</span>
      <h1>Ghana: las Estrellas Negras buscan revancha</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Velocidad, desparpajo y un Antoine Semenyo que llega en el mejor momento de su carrera para liderar a África.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#74</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Cuartos (2010)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo L</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Son impredecibles. Pueden ganar a Inglaterra y perder con una selección menor. Si encuentran estabilidad, darán mucho de qué hablar.
      </div>`
  },

  "Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿": {
    content: `
      <span class="article-flag">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
      <h1>Escocia: el rugido de las Highlands<</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Abril 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead"> Más que gaita y corazón. Escocia llega a 2026 con la generación más competitiva de las últimas tres décadas, 
        dispuesta a demostrar que su fútbol ha evolucionado más allá del choque y el balón largo.</p>
      <h2>La identidad del bloque de granito</h2>
      <p>Bajo el mando de Steve Clarke, Escocia se ha convertido en un equipo extremadamente difícil de batir. No tienen el brillo individual de sus vecinos del sur, pero poseen una ética de trabajo colectiva que desespera a los rivales. Es un equipo construido desde la solidez de sus jugadores de Premier League, capaces de aguantar el asedio y morder en la única oportunidad que tengan.</p>
      <div class="article-stat-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-box"><span class="stat-val">#43</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo C</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Estilo de juego: físico y presión asfixiante</h2>
      <p>Escocia no te deja pensar. Su sistema se basa en una presión media-alta muy agresiva y un despliegue físico envidiable. Son letales a balón parado y en transiciones rápidas por banda, aprovechando la llegada de sus centrocampistas desde segunda línea.</p>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Scott McTominay</strong> · Centrocampista</span><span class="player-role">El llegador y máximo goleador</span></li>
        <li><span><strong>Andrew Robertson</strong> · Lateral izquierdo</span><span class="player-role">Capitán y alma del equipo</span></li>
        <li><span><strong>John McGinn</strong> · Centrocampista</span><span class="player-role">El motor y la pausa</span></li>
        <li><span><strong>Billy Gilmour</strong> · Mediocentro</span><span class="player-role">La brújula técnica</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Están en el grupo de Brasil y Marruecos, lo cual parece una sentencia, pero Escocia vive de romper pronósticos. Si logran puntuar ante los marroquíes, el partido contra Haití podría darles un pase histórico a la siguiente ronda. Corazón les sobra.</p>
      </div>`
  },

  "Argelia 🇩🇿": {
    content: `
      <span class="article-flag">🇩🇿</span>
      <h1>Argelia: talento y orgullo magrebí</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Bajo la sombra de Mahrez, una nueva camada de jugadores formados en Europa busca poner a Argelia en el mapa mundial.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#28</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Octavos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo J</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> En el grupo de Argentina y Austria, lo tienen difícil. Necesitarán que su calidad individual aparezca en los momentos clave.
      </div>`
  },

  "Paraguay 🇵🇾": {
    content: `
      <span class="article-flag">🇵🇾</span>
      <h1>Paraguay: el retorno de la muralla guaraní</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Garra, juego aéreo y una defensa que muerde. Paraguay vuelve a un Mundial para ser el equipo más difícil de batir de Sudamérica.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#40</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Cuartos (2010)</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo D</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Su estilo no es estético, pero es efectivo. Si logran anotar primero, son casi imposibles de remontar.
      </div>`
  },

  "Catar 🇶🇦": {
    content: `
      <span class="article-flag">🇶🇦</span>
      <h1>Catar: la madurez del campeón de Asia</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Ya sin los nervios de ser anfitrión, Catar llega como un equipo rodado, campeón continental y con ganas de borrar la imagen de 2022.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#55</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo B</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Akram Afif es un jugador de clase mundial. Si él fluye, Catar puede dar la sorpresa en el grupo de Suiza y Canadá.
      </div>`
  },

  "Panamá 🇵🇦": {
    content: `
      <span class="article-flag">🇵🇦</span>
      <h1>Panamá: el canal hacia el éxito</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Físicos, disciplinados y con la lección aprendida. Panamá llega a 2026 para demostrar que CONCACAF tiene más que dos potencias.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#33</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo L</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Tienen un grupo durísimo con Inglaterra y Croacia. Su meta es puntuar y dejar una imagen de competitividad absoluta.
      </div>`
  },

  "Nueva Zelanda 🇳🇿": {
    content: `
      <span class="article-flag">🇳🇿</span>
      <h1>Nueva Zelanda: los All Whites al abordaje</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Dominadores absolutos de Oceanía, llegan a Norteamérica con Chris Wood como faro y un espíritu de lucha inquebrantable.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#85</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo G</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Son el equipo con ranking más bajo, pero en 2010 se fueron invictos. Cuidado con despreciar su juego directo y potencia física.
      </div>`
  },

  "Irán 🇮🇷": {
    content: `
      <span class="article-flag">🇮🇷</span>
      <h1>Irán: el bloque de acero asiático</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Siempre difíciles de batir, siempre organizados. Irán llega con una delantera de nivel europeo y un sistema defensivo hermético.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#21</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo G</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Taremi es su gran baza. Si logran mantener la portería a cero, tienen opciones reales de pasar por primera vez a octavos.
      </div>`
  },

  "Costa de Marfil 🇨🇮": {
    content: `
      <span class="article-flag">🇨🇮</span>
      <h1>Costa de Marfil: el poderío de los elefantes</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Campeones de África en 2024, llegan con una mezcla explosiva de físico y técnica individual.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#34</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo E</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Tienen talento para estar en el Top 15. Si logran ser constantes durante los 90 minutos, son candidatos a octavos por encima de Alemania o Ecuador.
      </div>`
  },

  "República Checa 🇨🇿": {
    content: `
      <span class="article-flag">🇨🇿</span>
      <h1>República Checa: orden centroeuropeo</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Mayo 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Un equipo que nunca se descompone. Los checos llegan con la solidez por bandera y un Patrik Schick que vive por y para el gol en grandes citas.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#41</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Subcampeón</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo A</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <h2>Jugadores a seguir</h2>
      <ul class="player-list">
        <li><span><strong>Patrik Schick</strong> · Delantero</span><span class="player-role">Especialista en imposibles</span></li>
        <li><span><strong>Tomáš Souček</strong> · Centrocampista</span><span class="player-role">El pulmón del equipo</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>En el Grupo A junto a México y Corea del Sur, son el equipo que nadie quiere tener enfrente en un partido cerrado. Si Schick está fino, pueden romper el grupo.</p>
      </div>`
  },

  "Túnez 🇹🇳": {
    content: `
      <span class="article-flag">🇹🇳</span>
      <h1>Túnez: el muro del Magreb</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Difíciles de batir, organizados y con un orgullo competitivo envidiable. Túnez no viene a participar, viene a desesperar al rival.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#44</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo F</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Su fortaleza es el colectivo. En el grupo de Países Bajos y Japón, su capacidad para mantener la portería a cero será su única vía de escape.
      </div>`
  },

  "República Democrática del Congo 🇨🇩": {
    content: `
      <span class="article-flag">🇨🇩</span>
      <h1>RD Congo: el rugido de los Leopardos</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Regresan al gran escenario con un fútbol vertical y una potencia física que puede cortocircuitar a cualquier defensa europea.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#46</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo K</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Tienen en Théo Bongonda la chispa necesaria. Si logran controlar su anarquía táctica, pueden pelear la segunda plaza del grupo tras Portugal.</p>
      </div>`
  },

  "Uzbekistán 🇺🇿": {
    content: `
      <span class="article-flag">🇺🇿</span>
      <h1>Uzbekistán: el lobo estepario debuta</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">La gran cenicienta de Asia central. Un equipo compacto, trabajador y con una disciplina que recuerda a los bloques del este de antaño.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#50</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Debut</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo K</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Eldor Shomurodov es su única referencia de élite. Todo lo que sea puntuar en su primer Mundial será un éxito nacional absoluto.
      </div>`
  },

  "Irak 🇮🇶": {
    content: `
      <span class="article-flag">🇮🇶</span>
      <h1>Irak: pasión sobre el césped</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Un equipo que juega por algo más que fútbol. Los Leones de Mesopotamia llegan con una fe inquebrantable y un bloque defensivo muy comprometido.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#57</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo I</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Están en el grupo de Francia y Noruega. Su objetivo es evitar goleadas y pescar algo ante Senegal. Tarea titánica.
      </div>`
  },

  "Sudáfrica 🇿🇦": {
    content: `
      <span class="article-flag">🇿🇦</span>
      <h1>Sudáfrica: Bafana Bafana vuelve a bailar</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Tras años de travesía por el desierto, Sudáfrica recupera su esencia: juego dinámico, descaro individual y mucha alegría.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#60</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo A</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>No son favoritos, pero son divertidísimos. Percy Tau puede poner en aprietos a cualquiera, aunque la falta de físico les penalizará contra los europeos del grupo.</p>
      </div>`
  },

  "Jordania 🇯🇴": {
    content: `
      <span class="article-flag">🇯🇴</span>
      <h1>Jordania: la sorpresa del desierto</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Tras su histórica final en la Copa Asia, Jordania llega con la moral por las nubes y nada que perder ante los gigantes.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#63</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Debut</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo J</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Musa Al-Taamari es el "Messi jordano" y de él depende toda su ofensiva. Contra Argentina será un duelo David contra Goliat.
      </div>`
  },

  "Bosnia y Herzegovina 🇧🇦": {
    content: `
      <span class="article-flag">🇧🇦</span>
      <h1>Bosnia: el último baile de Džeko</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 4 min</span>
      </div>
      <p class="article-lead">Un equipo veterano que se aferra a su calidad técnica para compensar el paso de los años en sus figuras clave.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#65</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo B</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> Edin Džeko sigue teniendo el gol en la sangre. Si Suiza o Canadá se confían, Bosnia les bajará de la nube con un cabezazo letal.
      </div>`
  },

  "Cabo Verde 🇨🇻": {
    content: `
      <span class="article-flag">🇨🇻</span>
      <h1>Cabo Verde: los Tiburones Azules</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">La prueba de que el tamaño no importa. Un equipo pequeñito en geografía pero inmenso en organización y rigor táctico.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#69</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Debut</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo H</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> En un grupo con España y Uruguay, su Mundial es la experiencia. No obstante, son expertos en secar a delanteros de renombre.
      </div>`
  },

  "Curazao 🇨🇼": {
    content: `
      <span class="article-flag">🇨🇼</span>
      <h1>Curazao: aroma caribeño con toque neerlandés</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Un proyecto ambicioso que ha sabido captar talento de la Eredivisie para montar un equipo competitivo y con buen trato de balón.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#82</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Debut</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo E</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong> No se van a encerrar. Intentarán jugar de tú a tú, lo cual puede ser valiente o suicida en el grupo de Alemania y Ecuador.
      </div>`
  },

  "Haití 🇭🇹": {
    content: `
      <span class="article-flag">🇭🇹</span>
      <h1>Haití: la resiliencia convertida en fútbol</h1>
      <div class="article-meta">
        <span>✍️ Hector Hardy</span><span>📅 Junio 2026</span><span>⏱ 3 min</span>
      </div>
      <p class="article-lead">Regresan al Mundial tras más de medio siglo. Son pura potencia física y orgullo nacional, un equipo que juega cada minuto con el alma.</p>
      <div class="article-stat-grid">
        <div class="stat-box"><span class="stat-val">#83</span><span class="stat-lbl">Ranking FIFA</span></div>
        <div class="stat-box"><span class="stat-val">Fase Grupos</span><span class="stat-lbl">Mejor puesto</span></div>
        <div class="stat-box"><span class="stat-val">Grupo C</span><span class="stat-lbl">Fase de grupos</span></div>
      </div>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Están en el grupo de Brasil, Marruecos y Escocia. Su gran final será el partido contra los escoceses. Si logran un punto, será una fiesta nacional.</p>
      </div>`
  }
};

// Datos de todas las selecciones (ranking + grupo)
const teamsData = [
  { name: "Francia 🇫🇷", flag: "🇫🇷", ranking: 1, player: "Kylian Mbappé", group: "I", style: "Transiciones verticales" },
  { name: "España 🇪🇸", flag: "🇪🇸", ranking: 2, player: "Lamine Yamal", group: "H", style: "Posesión y presión alta" },
  { name: "Argentina 🇦🇷", flag: "🇦🇷", ranking: 3, player: "Lionel Messi", group: "J", style: "Contraataque y presión" },
  { name: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", ranking: 4, player: "Jude Bellingham", group: "L", style: "Físico y balones al área" },
  { name: "Portugal 🇵🇹", flag: "🇵🇹", ranking: 5, player: "Cristiano Ronaldo", group: "K", style: "Posesión ofensiva" },
  { name: "Brasil 🇧🇷", flag: "🇧🇷", ranking: 6, player: "Raphinha", group: "C", style: "Ataque vertical y talento" },
  { name: "Países Bajos 🇳🇱", flag: "🇳🇱", ranking: 7, player: "Virgil van Dijk", group: "F", style: "Fútbol total moderno" },
  { name: "Marruecos 🇲🇦", flag: "🇲🇦", ranking: 8, player: "Achraf Hakimi", group: "C", style: "Bloque bajo + contragolpe" },
  { name: "Bélgica 🇧🇪", flag: "🇧🇪", ranking: 9, player: "Kevin De Bruyne", group: "G", style: "Potencia y calidad" },
  { name: "Alemania 🇩🇪", flag: "🇩🇪", ranking: 10, player: "Florian Wirtz", group: "E", style: "Presión alta y juego directo" },
  { name: "Croacia 🇭🇷", flag: "🇭🇷", ranking: 11, player: "Luka Modrić", group: "L", style: "Posesión y gestión del partido" },
  { name: "Colombia 🇨🇴", flag: "🇨🇴", ranking: 13, player: "Luis Díaz", group: "K", style: "Presión y velocidad" },
  { name: "Senegal 🇸🇳", flag: "🇸🇳", ranking: 14, player: "Sadio Mané", group: "I", style: "Ataque directo y presión" },
  { name: "México 🇲🇽", flag: "🇲🇽", ranking: 15, player: "Santiago Giménez", group: "A", style: "Presión y contraataque" },
  { name: "Estados Unidos 🇺🇸", flag: "🇺🇸", ranking: 16, player: "Christian Pulisic", group: "D", style: "Atletismo y transiciones" },
  { name: "Uruguay 🇺🇾", flag: "🇺🇾", ranking: 17, player: "Federico Valverde", group: "H", style: "Solidez defensiva" },
  { name: "Japón 🇯🇵", flag: "🇯🇵", ranking: 18, player: "Takefusa Kubo", group: "F", style: "Presión y disciplina táctica" },
  { name: "Suiza 🇨🇭", flag: "🇨🇭", ranking: 19, player: "Granit Xhaka", group: "B", style: "Organización y solidez" },
  { name: "Irán 🇮🇷", flag: "🇮🇷", ranking: 21, player: "Mehdi Taremi", group: "G", style: "Sólido y organizado" },
  { name: "Turquía 🇹🇷", flag: "🇹🇷", ranking: 22, player: "Arda Güler", group: "D", style: "Ataque directo" },
  { name: "Ecuador 🇪🇨", flag: "🇪🇨", ranking: 23, player: "Moisés Caicedo", group: "E", style: "Sólido y ordenado" },
  { name: "Austria 🇦🇹", flag: "🇦🇹", ranking: 24, player: "David Alaba", group: "J", style: "Presión y verticalidad" },
  { name: "Corea del Sur 🇰🇷", flag: "🇰🇷", ranking: 25, player: "Heung-min Son", group: "A", style: "Trabajo colectivo" },
  { name: "Australia 🇦🇺", flag: "🇦🇺", ranking: 27, player: "Mitchell Duke", group: "D", style: "Físico y transiciones" },
  { name: "Argelia 🇩🇿", flag: "🇩🇿", ranking: 28, player: "Riyad Mahrez", group: "J", style: "Talento individual + transiciones" },
  { name: "Egipto 🇪🇬", flag: "🇪🇬", ranking: 29, player: "Mohamed Salah", group: "G", style: "Dependiente de Salah" },
  { name: "Canadá 🇨🇦", flag: "🇨🇦", ranking: 30, player: "Alphonso Davies", group: "B", style: "Físico y presión" },
  { name: "Noruega 🇳🇴", flag: "🇳🇴", ranking: 31, player: "Erling Haaland", group: "I", style: "Directo y poderoso" },
  { name: "Panamá 🇵🇦", flag: "🇵🇦", ranking: 33, player: "Rolando Blackburn", group: "L", style: "Físico y disciplinado" },
  { name: "Costa de Marfil 🇨🇮", flag: "🇨🇮", ranking: 34, player: "Sébastien Haller", group: "E", style: "Físico y directo" },
  { name: "Suecia 🇸🇪", flag: "🇸🇪", ranking: 38, player: "Viktor Gyökeres", group: "F", style: "Físico y verticalidad" },
  { name: "Paraguay 🇵🇾", flag: "🇵🇾", ranking: 40, player: "Miguel Almirón", group: "D", style: "Físico y sólido" },
  { name: "República Checa 🇨🇿", flag: "🇨🇿", ranking: 41, player: "Patrik Schick", group: "A", style: "Sólido y eficiente" },
  { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", ranking: 43, player: "Scott McTominay", group: "C", style: "Físico y presión" },
  { name: "Túnez 🇹🇳", flag: "🇹🇳", ranking: 44, player: "Wahbi Khazri", group: "F", style: "Organizado y difícil de batir" },
  { name: "República Democrática del Congo 🇨🇩", flag: "🇨🇩", ranking: 46, player: "Théo Bongonda", group: "K", style: "Velocidad y ataque directo" },
  { name: "Uzbekistán 🇺🇿", flag: "🇺🇿", ranking: 50, player: "Eldor Shomurodov", group: "K", style: "Compacto y trabajador" },
  { name: "Catar 🇶🇦", flag: "🇶🇦", ranking: 55, player: "Akram Afif", group: "B", style: "Organizado y trabajador" },
  { name: "Irak 🇮🇶", flag: "🇮🇶", ranking: 57, player: "Aymen Hussein", group: "I", style: "Organizado y comprometido" },
  { name: "Sudáfrica 🇿🇦", flag: "🇿🇦", ranking: 60, player: "Percy Tau", group: "A", style: "Dinámico y combativo" },
  { name: "Arabia Saudita 🇸🇦", flag: "🇸🇦", ranking: 61, player: "Salem Al-Dawsari", group: "H", style: "Bloque bajo + transiciones" },
  { name: "Jordania 🇯🇴", flag: "🇯🇴", ranking: 63, player: "Musa Al-Taamari", group: "J", style: "Organizado y compacto" },
  { name: "Bosnia y Herzegovina 🇧🇦", flag: "🇧🇦", ranking: 65, player: "Edin Džeko", group: "B", style: "Contragolpe y físico" },
  { name: "Cabo Verde 🇨🇻", flag: "🇨🇻", ranking: 69, player: "Garry Rodrigues", group: "H", style: "Compacto y organizado" },
  { name: "Ghana 🇬🇭", flag: "🇬🇭", ranking: 74, player: "Antoine Semenyo", group: "L", style: "Ataque rápido y físico" },
  { name: "Curazao 🇨🇼", flag: "🇨🇼", ranking: 82, player: "Leandro Bacuna", group: "E", style: "Organizado y ambicioso" },
  { name: "Haití 🇭🇹", flag: "🇭🇹", ranking: 83, player: "Frantzdy Pierrot", group: "C", style: "Compacto y transiciones" },
  { name: "Nueva Zelanda 🇳🇿", flag: "🇳🇿", ranking: 85, player: "Chris Wood", group: "G", style: "Físico y combativo" },
];

// ==========================
// WORLD CUP — INIT
// ==========================
function initWorldCup() {
  renderTeams();
  initFixtureSidebar();
}

// ==========================
// RENDER TEAMS — FIFA-style cards
// ==========================

// Helper: ranking FIFA -> OVR (1..99)
function rankingToOVR(rank) {
  if (rank <= 1) return 99;
  if (rank <= 3) return 97;
  if (rank <= 5) return 95;
  if (rank <= 8) return 92;
  if (rank <= 12) return 89;
  if (rank <= 16) return 86;
  if (rank <= 20) return 84;
  if (rank <= 25) return 82;
  if (rank <= 30) return 80;
  if (rank <= 35) return 78;
  if (rank <= 45) return 76;
  if (rank <= 55) return 74;
  if (rank <= 65) return 72;
  if (rank <= 75) return 70;
  return 68;
}

// Posición/etiqueta táctica derivada del estilo
function styleToPos(style) {
  const s = (style || '').toLowerCase();
  if (s.includes('contra') || s.includes('transici')) return 'CA';
  if (s.includes('pose')) return 'POS';
  if (s.includes('presi')) return 'PRE';
  if (s.includes('físico') || s.includes('fisico') || s.includes('directo')) return 'FIS';
  if (s.includes('orden') || s.includes('discip') || s.includes('compact') || s.includes('sólid') || s.includes('solid') || s.includes('organiz')) return 'DEF';
  return 'EQU';
}

function tierClass(rank) {
  if (rank <= 8) return 'tier-icon';
  if (rank <= 24) return 'tier-gold';
  return 'tier-silver';
}

function stripFlag(name) {
  return name.replace(/[\u{1F1E0}-\u{1F1FF}]{2}|[\u{1F3F4}][\u{E0067}\u{E0062}][\u{E0065}-\u{E0077}]+[\u{E007F}]/gu, '').trim();
}

function renderTeams() {
  const container = document.getElementById('teamAnalysisContainer');
  if (!container) return;
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'teams-grid';

  // Ordena por ranking FIFA (mejor primero)
  const sorted = [...teamsData].sort((a, b) => a.ranking - b.ranking);

  sorted.forEach(team => {
    const hasArticle = !!teamArticles[team.name];
    const ovr = rankingToOVR(team.ranking);
    const pos = styleToPos(team.style);
    const tier = tierClass(team.ranking);
    const displayName = stripFlag(team.name);

    const card = document.createElement('div');
    card.className = `team-card ${tier}${hasArticle ? ' has-article' : ''}`;
    card.innerHTML = `
      <div class="tc-top">
        <div class="tc-ovr">${ovr}</div>
        <div class="tc-meta">
          <span class="tc-pos">${pos}</span>
          <span class="tc-group">Grupo ${team.group}</span>
        </div>
      </div>
      <div class="tc-flag">${team.flag}</div>
      <div class="tc-name">${displayName}</div>
      <div class="tc-stats">
        <span class="lbl">Ranking</span><span class="val">#${team.ranking}</span>
        <span class="lbl">Grupo</span><span class="val">${team.group}</span>
      </div>
      <div class="tc-style">${team.style}</div>
      <div class="tc-player">
        <small>Estrella</small>
        ${team.player}
      </div>
      <div class="tc-cta">${hasArticle ? 'Leer análisis →' : 'Próximamente'}</div>
    `;
    card.addEventListener('click', () => openTeamArticle(team.name));
    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// ==========================
// ARTICLE PANEL
// ==========================
function openTeamArticle(teamName) {
  const overlay = document.getElementById('articleOverlay');
  const panel = document.getElementById('articlePanel');
  const content = document.getElementById('articleContent');
  if (!overlay || !panel || !content) return;

  const article = teamArticles[teamName];
  const team = teamsData.find(t => t.name === teamName);

  content.innerHTML = article
    ? `<div class="article-panel-content">${article.content}</div>`
    : `<div class="article-panel-content">
        <span class="article-flag">${team?.flag || '🏳️'}</span>
        <h1>${team?.name.replace(/[\u{1F1E0}-\u{1F1FF}]{2}|[\u{1F3F4}][\u{E0067}\u{E0062}][\u{E0065}-\u{E0077}]+[\u{E007F}]/gu, '').trim() || teamName}</h1>
        <div class="article-coming-soon">
          <span class="coming-emoji">✍️</span>
          <p>El análisis de esta selección está en camino.</p>
          <p style="margin-top:8px;opacity:0.5">Vuelve pronto — Hector Hardy</p>
        </div>
      </div>`;

  overlay.classList.add('open');
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticlePanel() {
  document.getElementById('articleOverlay')?.classList.remove('open');
  document.getElementById('articlePanel')?.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('articleOverlay')?.addEventListener('click', closeArticlePanel);
document.getElementById('closeArticleBtn')?.addEventListener('click', closeArticlePanel);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeArticlePanel(); closeFixtureSidebar(); }
});

// ==========================
// FIXTURE SIDEBAR
// ==========================
let currentView = 'group';
let countryQuery = '';
let stageFilter = '';
let filteredMatches = [...worldCupMatches];

function initFixtureSidebar() {
  // Populate stage filter
  const stageSelect = document.getElementById('fixtureStageFilter');
  if (stageSelect && stageSelect.options.length <= 1) {
    const STAGE_LABELS = { groups: 'Fase de grupos', round32: 'Ronda de 32', round16: 'Octavos', quarters: 'Cuartos', semis: 'Semifinales', third_place: '3.er / 4.º puesto', final: 'Final' };
    [...new Set(worldCupMatches.map(m => m.stage))].forEach(s => {
      const o = document.createElement('option');
      o.value = s; o.textContent = STAGE_LABELS[s] || s;
      stageSelect.appendChild(o);
    });
  }

  renderSidebarFixture();

  document.getElementById('toggleFixtureBtn')?.addEventListener('click', openFixtureSidebar);
  document.getElementById('closeSidebarBtn')?.addEventListener('click', closeFixtureSidebar);
  document.getElementById('fixtureOverlay')?.addEventListener('click', closeFixtureSidebar);

  document.getElementById('fixtureCountryFilter')?.addEventListener('input', e => {
    countryQuery = e.target.value.toLowerCase();
    applyFilters();
  });

  document.getElementById('fixtureStageFilter')?.addEventListener('change', e => {
    stageFilter = e.target.value;
    applyFilters();
  });

  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      renderSidebarFixture();
    });
  });

  document.getElementById('downloadFilteredBtn')?.addEventListener('click', () => {
    if (!filteredMatches.length) return alert('Sin partidos con los filtros actuales.');
    triggerDownload(buildICS(filteredMatches), 'mundial-2026-seleccion.ics');
  });
}

function openFixtureSidebar() {
  document.getElementById('fixtureSidebar')?.classList.add('mobile-open');
  document.getElementById('fixtureOverlay')?.classList.add('visible');
}
function closeFixtureSidebar() {
  document.getElementById('fixtureSidebar')?.classList.remove('mobile-open');
  document.getElementById('fixtureOverlay')?.classList.remove('visible');
}

function applyFilters() {
  filteredMatches = worldCupMatches.filter(m => {
    const teams = `${m.home} ${m.away}`.toLowerCase();
    return (!countryQuery || teams.includes(countryQuery)) && (!stageFilter || m.stage === stageFilter);
  });
  const btn = document.getElementById('downloadFilteredBtn');
  if (btn) btn.textContent = filteredMatches.length
    ? `📥 Descargar ${filteredMatches.length} partido${filteredMatches.length !== 1 ? 's' : ''}`
    : '📥 Sin resultados';
  renderSidebarFixture();
}

function renderSidebarFixture() {
  const scroll = document.getElementById('fixtureScroll');
  if (!scroll) return;
  scroll.innerHTML = '';
  if (!filteredMatches.length) {
    scroll.innerHTML = '<div class="fixture-empty">Sin partidos para estos filtros</div>';
    return;
  }
  currentView === 'day' ? renderByDay(scroll) : renderByGroup(scroll);
}

const STAGE_ORDER = ['groups', 'round32', 'round16', 'quarters', 'semis', 'third_place', 'final'];
const STAGE_LABELS = { groups: 'Fase de Grupos', round32: 'Ronda de 32', round16: 'Octavos', quarters: 'Cuartos', semis: 'Semifinales', third_place: '3.er / 4.º puesto', final: '⭐ Final' };

function renderByGroup(container) {
  const byStage = {};
  filteredMatches.forEach(m => { const s = m.stage || 'groups'; if (!byStage[s]) byStage[s] = []; byStage[s].push(m); });
  STAGE_ORDER.forEach(stage => {
    if (!byStage[stage]) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = `<div class="fixture-divider">${STAGE_LABELS[stage] || stage}</div>`;
    if (stage === 'groups') {
      const byGroup = {};
      byStage[stage].forEach(m => { const g = m.group || '?'; if (!byGroup[g]) byGroup[g] = []; byGroup[g].push(m); });
      Object.keys(byGroup).sort().forEach(g => {
        wrap.innerHTML += `<div class="fixture-divider" style="font-size:.65rem;background:transparent;color:#444;border-bottom-color:transparent">Grupo ${g}</div>`;
        byGroup[g].forEach(m => wrap.appendChild(createSidebarCard(m)));
      });
    } else {
      byStage[stage].forEach(m => wrap.appendChild(createSidebarCard(m)));
    }
    container.appendChild(wrap);
  });
}

function renderByDay(container) {
  const byDay = {};
  filteredMatches.forEach(m => { if (!byDay[m.date]) byDay[m.date] = []; byDay[m.date].push(m); });
  Object.keys(byDay).sort().forEach(date => {
    const wrap = document.createElement('div');
    const d = new Date(date + 'T12:00:00');
    const label = d.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'long' });
    wrap.innerHTML = `<div class="fixture-divider">${label}</div>`;
    byDay[date].forEach(m => wrap.appendChild(createSidebarCard(m)));
    container.appendChild(wrap);
  });
}

function createSidebarCard(match) {
  const card = document.createElement('div');
  card.className = 'match-card';
  card.innerHTML = `
    <div class="match-header">
      <span class="match-teams">${match.home} vs ${match.away}</span>
      <span class="match-date">${match.time}h</span>
    </div>
    <div class="match-info">📍 ${match.city}</div>
    <div class="match-actions">
      <a href="${generateGoogleCalUrl(match)}" target="_blank" rel="noopener" class="btn-cal btn-google">Google</a>
      <button onclick="downloadMatchICS(${match.id})" class="btn-cal btn-apple">Apple</button>
    </div>`;
  return card;
}

// ==========================
// CALENDAR
// ==========================
function pad(n) { return String(n).padStart(2, '0'); }

function generateGoogleCalUrl(m) {
  const ds = m.date.replace(/-/g, '');
  const [h, min] = m.time.split(':').map(Number);

  const st = `${ds}T${pad(h)}${pad(min)}00`;
  const et = `${ds}T${pad((h + 2) % 24)}${pad(min)}00`;

  const stage =
    m.stage === 'groups'
      ? `Grupo ${m.group} · Mundial 2026`
      : (STAGE_LABELS[m.stage] || 'Mundial 2026');

  return `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: 'TEMPLATE',
    text: `${m.home} vs ${m.away}`,
    dates: `${st}/${et}`,
    details: stage,
    location: `${m.stadium}, ${m.city}`
  })}`;
}

window.downloadMatchICS = function (id) {
  const m = matchesById[id]; if (m) triggerDownload(buildICS([m]), `wc2026-partido-${id}.ics`);
};

function buildICS(matches) {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Hector Hardy//Mundial 2026//ES', 'X-WR-CALNAME:Mundial 2026', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH'];
  matches.forEach(m => {
    const ds = m.date.replace(/-/g, '');
    const [h, min] = m.time.split(':').map(Number);
    const stage = m.stage === 'groups' ? `Fase de Grupos · Grupo ${m.group}` : (STAGE_LABELS[m.stage] || m.stage);
    lines.push('BEGIN:VEVENT', `UID:wc2026-${m.id}@hectorhardy.com`, `DTSTART:${ds}T${pad(h)}${pad(min)}00`, `DTEND:${ds}T${pad((h + 2) % 24)}${pad(min)}00`, `SUMMARY:${m.home} vs ${m.away}`, `LOCATION:${m.stadium}\\, ${m.city}`, `DESCRIPTION:${stage} · hectorhardy.com`, 'END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

function triggerDownload(content, filename) {
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([content], { type: 'text/calendar;charset=utf-8' })), download: filename });
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

// ==========================
// INIT
// ==========================
document.addEventListener('DOMContentLoaded', () => {
  observeFadeElements();
  const hash = window.location.hash.slice(1);
  if (hash && SECTION_IDS.includes(hash)) navigateTo(hash);
});

// ==========
// QUINIELA
// ==========

// Configuración de conexión
const url_base = 'NEXT_PUBLIC_SB_URL';
const key_base = 'NEXT_PUBLIC_SB_KEY';

const supabaseClient = supabase.createClient(url_base, key_base);

let user = null;
let isAdmin = false;

// Manejo de autenticación
document.getElementById('btn-auth').onclick = async (e) => {
  const email = document.getElementById('auth-email').value;
  const pass = document.getElementById('auth-pass').value;
  const username = document.getElementById('auth-user').value;

  if (!email || !pass) return alert("Llena los datos");

  const { data, error } = await supabaseClient.auth.signUp({
    email, password: pass, options: { data: { username } }
  });

  if (error) {
    const { data: logData, error: logErr } = await supabaseClient.auth.signInWithPassword({ email, password: pass });
    if (logErr) return alert("Error: " + logErr.message);
    initSession(logData.user);
  } else {
    alert("¡Cuenta creada!");
    initSession(data.user);
  }
};

async function initSession(sessionData) {
  user = sessionData;
  const { data: profile } = await supabaseClient.from('profiles').select('*').eq('id', user.id).single();
  if (profile && profile.is_admin) {
    isAdmin = true;
    document.getElementById('admin-nav').style.display = 'block';
  }
  document.getElementById('auth-view').style.display = 'none';
  document.getElementById('sidebar').style.display = 'block';
  showView('quiniela');
}

async function loadMatches(isAdminView = false) {
  const { data: matches } = await supabaseClient.from('matches').select('*').order('id');
  const { data: preds } = await supabaseClient.from('predictions').select('*').eq('user_id', user.id);
  const container = document.getElementById(isAdminView ? 'admin-matches-container' : 'matches-container');

  container.innerHTML = matches.map(m => {
    const p = preds.find(pr => pr.match_id === m.id) || { pred_s1: '', pred_s2: '' };
    return `
        <div class="match-card">
            <span class="group-label">${m.group_name}</span>
            <div class="teams-row">
                <div class="team-name" style="text-align:right">${m.team1}</div>
                <div style="display:flex; gap:8px;">
                    <input type="number" value="${isAdminView ? (m.real_score1 || 0) : p.pred_s1}" 
                           onchange="${isAdminView ? `updateReal('${m.id}', this.value, 1)` : `savePred('${m.id}', this.value, 1)`}" 
                           ${!isAdminView && m.is_finished ? 'disabled' : ''}>
                    <input type="number" value="${isAdminView ? (m.real_score2 || 0) : p.pred_s2}" 
                           onchange="${isAdminView ? `updateReal('${m.id}', this.value, 2)` : `savePred('${m.id}', this.value, 2)`}"
                           ${!isAdminView && m.is_finished ? 'disabled' : ''}>
                </div>
                <div class="team-name">${m.team2}</div>
            </div>
            ${isAdminView ? `<button class="btn-primary admin-btn" onclick="finalizeMatch('${m.id}')">FINALIZAR PARTIDO</button>` :
        (m.is_finished ? `<p style="color:var(--gold); margin-top:10px;">Final: ${m.real_score1}-${m.real_score2}</p>` : '')}
        </div>`;
  }).join('');
}

async function savePred(mid, val, slot) {
  const field = slot === 1 ? 'pred_s1' : 'pred_s2';
  await supabaseClient.from('predictions').upsert({ user_id: user.id, match_id: mid, [field]: parseInt(val) }, { onConflict: 'user_id, match_id' });
}

async function updateReal(mid, val, slot) {
  const field = slot === 1 ? 'real_score1' : 'real_score2';
  await supabaseClient.from('matches').update({ [field]: parseInt(val) }).eq('id', mid);
}

async function finalizeMatch(mid) {
  await supabaseClient.from('matches').update({ is_finished: true }).eq('id', mid);
  alert("Partido finalizado. Los puntos se actualizan en el ranking.");
  loadMatches(true);
}

function showView(v) {
  document.querySelectorAll('.view').forEach(el => el.style.display = 'none');
  const target = document.getElementById(v + '-view');
  if (target) target.style.display = 'block';
  if (v === 'ranking') loadRanking();
  else loadMatches(v === 'admin');
}

async function loadRanking() {
  const { data } = await supabaseClient.from('profiles').select('username, points').order('points', { ascending: false });
  document.getElementById('ranking-body').innerHTML = data.map(r => `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
            <td style="padding: 15px;">${r.username}</td>
            <td style="padding: 15px; text-align: right; font-weight: 800;">${r.points} PTS</td>
        </tr>`).join('');
}

function takeScreenshot() {
  html2canvas(document.querySelector("#quiniela-view"), { backgroundColor: '#080c18', scale: 2 }).then(canvas => {
    const link = document.createElement('a'); link.download = 'mi-quiniela.png'; link.href = canvas.toDataURL(); link.click();
  });
}

function logout() { supabaseClient.auth.signOut(); location.reload(); }

