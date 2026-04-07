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
const navToggle = document.querySelector(".nav-toggle");
const navLinksEl = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => navLinksEl.classList.toggle("show"));
document.addEventListener("click", (e) => {
  if (!navLinksEl?.contains(e.target) && !navToggle?.contains(e.target))
    navLinksEl?.classList.remove("show");
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
        <li><span><strong>Kylian Mbappé</strong> · Extremo / delantero</span><span class="player-role">El mejor del mundo</span></li>
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
        <li><span><strong>Vinícius Jr.</strong> · Extremo izquierdo</span><span class="player-role"Jugador más desequilibrante del mundo</span></li>
        <li><span><strong>Raphinha</strong> · Extremo</span><span class="player-role">El socio perfecto de Vini</span></li>
        <li><span><strong>Bruno Guimarães</strong> · Centrocampista</span><span class="player-role">El motor del equipo</span></li>
        <li><span><strong>Marquinhos</strong> · Defensa central</span><span class="player-role">Capitán y líder en la zaga</span></li>
      </ul>
      <div class="article-verdict">
        <strong>Veredicto de Hector Hardy</strong>
        <p>Brasil tiene el talento. Le falta el bloque. Si Ancelotti logra construir un equipo cohesionado, pueden llegar lejos. Pero llevan demasiados ciclos prometiendo y llegando a cuartos. La pregunta que me queda es ¿Podremos ver el último baile de Neymar?</p>
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

  // ─────────────────────────────────────────────────────────────────────
  // PLANTILLA para nuevos artículos — descomenta y rellena:
  // ─────────────────────────────────────────────────────────────────────
  // "Nombre del Equipo 🏳️": {
  //   content: `
  //     <span class="article-flag">🏳️</span>
  //     <h1>Título del artículo</h1>
  //     <div class="article-meta">
  //       <span>✍️ Hector Hardy</span><span>📅 Mes 2026</span>
  //     </div>
  //     <p class="article-lead">Introducción...</p>
  //     <h2>Sección 1</h2>
  //     <p>Contenido...</p>
  //     <div class="article-verdict">
  //       <strong>Veredicto de Hector Hardy</strong>
  //       <p>Tu conclusión...</p>
  //     </div>`
  // },
};

// Datos de todas las selecciones (ranking + grupo)
const teamsData = [
  { name: "Francia 🇫🇷", flag: "🇫🇷", ranking: 1, player: "Kylian Mbappé", group: "I", style: "Transiciones verticales" },
  { name: "España 🇪🇸", flag: "🇪🇸", ranking: 2, player: "Lamine Yamal", group: "H", style: "Posesión y presión alta" },
  { name: "Argentina 🇦🇷", flag: "🇦🇷", ranking: 3, player: "Lionel Messi", group: "J", style: "Contraataque y presión" },
  { name: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", ranking: 4, player: "Jude Bellingham", group: "L", style: "Físico y balones al área" },
  { name: "Portugal 🇵🇹", flag: "🇵🇹", ranking: 5, player: "Cristiano Ronaldo", group: "K", style: "Posesión ofensiva" },
  { name: "Brasil 🇧🇷", flag: "🇧🇷", ranking: 6, player: "Vinícius Jr.", group: "C", style: "Ataque vertical y talento" },
  { name: "Países Bajos 🇳🇱", flag: "🇳🇱", ranking: 7, player: "Virgil van Dijk", group: "F", style: "Fútbol total moderno" },
  { name: "Marruecos 🇲🇦", flag: "🇲🇦", ranking: 8, player: "Achraf Hakimi", group: "C", style: "Bloque bajo + contragolpe" },
  { name: "Bélgica 🇧🇪", flag: "🇧🇪", ranking: 9, player: "Kevin De Bruyne", group: "G", style: "Potencia y calidad" },
  { name: "Alemania 🇩🇪", flag: "🇩🇪", ranking: 10, player: "Florian Wirtz", group: "E", style: "Presión alta y juego directo" },
  { name: "Croacia 🇭🇷", flag: "🇭🇷", ranking: 11, player: "Luka Modrić", group: "L", style: "Posesión y gestión del partido" },
  { name: "Colombia 🇨🇴", flag: "🇨🇴", ranking: 13, player: "Luis Díaz", group: "K", style: "Presión y velocidad" },
  { name: "Senegal 🇸🇳", flag: "🇸🇳", ranking: 14, player: "Sadio Mané", group: "I", style: "Ataque directo y presión" },
  { name: "México 🇲🇽", flag: "🇲🇽", ranking: 15, player: "Santiago Giménez", group: "A", style: "Presión y contraataque" },
  { name: "Estados Unidos 🇺🇸", flag: "🇺🇸", ranking: 16, player: "Christian Pulisic", group: "D", style: "Atletismo y transiciones" },
  { name: "Uruguay 🇺🇾", flag: "🇺🇾", ranking: 17, player: "Darwin Núñez", group: "H", style: "Solidez defensiva" },
  { name: "Japón 🇯🇵", flag: "🇯🇵", ranking: 18, player: "Takefusa Kubo", group: "F", style: "Presión y disciplina táctica" },
  { name: "Suiza 🇨🇭", flag: "🇨🇭", ranking: 19, player: "Granit Xhaka", group: "B", style: "Organización y solidez" }, { name: "Irán 🇮🇷", flag: "🇮🇷", ranking: 21, player: "Mehdi Taremi", group: "G", style: "Sólido y organizado" },
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
  { name: "Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", ranking: 43, player: "Scott McTominay", group: "C", style: "Físico y presión" },
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
  { name: "Ghana 🇬🇭", flag: "🇬🇭", ranking: 74, player: "Mohammed Kudus", group: "L", style: "Ataque rápido y físico" },
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
// RENDER TEAMS
// ==========================
function renderTeams() {
  const container = document.getElementById('teamAnalysisContainer');
  if (!container) return;
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'teams-grid';

  teamsData.forEach(team => {
    const hasArticle = !!teamArticles[team.name];
    const card = document.createElement('div');
    card.className = `team-card${hasArticle ? ' has-article' : ''}`;
    // Strip flag emoji from display name for cleanliness
    const displayName = team.name.replace(/[\u{1F1E0}-\u{1F1FF}]{2}|[\u{1F3F4}][\u{E0067}\u{E0062}][\u{E0065}-\u{E0077}]+[\u{E007F}]/gu, '').trim();
    card.innerHTML = `
      <span class="team-card-flag">${team.flag}</span>
      <div class="team-card-name">${displayName}</div>
      <div class="team-card-ranking">Ranking #${team.ranking} · Grupo ${team.group}</div>
      <div class="team-card-player">${team.player}</div>
      <span class="team-read-more">${hasArticle ? 'Leer análisis →' : 'Próximamente →'}</span>
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
