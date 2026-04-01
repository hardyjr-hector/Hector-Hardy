// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ==========================
// MENU MOVIL
// ==========================

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove("show");
    }
});


// ==========================
// FADE IN ANIMATION
// ==========================

const observerOptions = {
    threshold: 0.2
};

const fadeObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, observerOptions);


// animar elementos existentes
const elementsToFade = document.querySelectorAll(".project-card, .article-card");

elementsToFade.forEach(el => {
    el.classList.add("fade-in");
    fadeObserver.observe(el);
});


// ==========================
// CAMISETAS
// ==========================

const jerseys = [

    {
        team: "AC Milan",
        year: "2024/2025",
        competition: "Serie A",
        img: "assets/images/acmilan1.jpg",
        desc: "Primera equipación AC MILAN 2024/2025"
    },

    {
        team: "AC Milan",
        year: "2024/2025",
        competition: "Serie A",
        img: "assets/images/acmilan3.jpg",
        desc: "Segunda equipación AC MILAN 2024/2025"
    },

    {
        team: "AC Milan",
        year: "2008/2009",
        competition: "Serie A",
        img: "assets/images/acmilan2.jpg",
        desc: "Primera equipación AC MILAN 2008/2009"
    },

    {
        team: "Alemania",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/alemania.jpg",
        desc: "Primera equipación Alemania Eurocopa 2024"
    },

    {
        team: "Argentina",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/argentina1.jpg",
        desc: "Segunda equipación Argentina 2024"
    },

    {
        team: "Argentina",
        year: "1994",
        competition: "Selecciones",
        img: "assets/images/argentina2.jpg",
        desc: "Segunda equipación Argentina Mundial 1994"
    },

    {
        team: "Argentina",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/argentina3.jpg",
        desc: "Primera equipación Argentina 2024"
    },

    {
        team: "Argentina",
        year: "2022",
        competition: "Selecciones",
        img: "assets/images/argentina4.jpg",
        desc: "Primera equipación Argentina Mundial 2022"
    },

    {
        team: "Argentina",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/argentina5.jpg",
        desc: "Edición especial de estilo lifestyle 2024"
    },

    {
        team: "Argentina",
        year: "2023",
        competition: "Selecciones",
        img: "assets/images/argentina6.jpg",
        desc: "Segunda equipación Argentina 2023"
    },

    {
        team: "Arsenal",
        year: "2006/2007",
        competition: "Premier League",
        img: "assets/images/arsenal.jpg",
        desc: "Primera equipación Arsenal 2006/2007"
    },

    {
        team: "AS Roma",
        year: "2024/2025",
        competition: "Serie A",
        img: "assets/images/asroma.jpg",
        desc: "Segunda equipación AS Roma 2024/2025"
    },

    {
        team: "Atlético de Madrid",
        year: "2024/2025",
        competition: "La Liga",
        img: "assets/images/atletico_madrid.jpg",
        desc: "Primera equipación Atlético de Madrid 2024/2025"
    },

    {
        team: "Barcelona SC",
        year: "2015/2016",
        competition: "Liga Pro Ecuador",
        img: "assets/images/barcelona_guayaquil.jpg",
        desc: "Primera equipación Barcelona SC 2015/2016"
    },

    {
        team: "Bayer Leverkusen",
        year: "2024/2025",
        competition: "Bundesliga",
        img: "assets/images/bayer_leverkusen.jpg",
        desc: "Primera equipación Bayer Leverkusen 2024/2025"
    },

    {
        team: "Benfica",
        year: "1998/1999",
        competition: "Primeira Liga",
        img: "assets/images/benfica.jpg",
        desc: "Segunda equipación Benfica 1998/1999"
    },

    {
        team: "Club Atlético Boca Juniors",
        year: "2023/2024",
        competition: "Primera División Argentina",
        img: "assets/images/boca_juniors1.jpg",
        desc: "Primera equipación Boca Juniors 2023/2024"
    },

    {
        team: "Club Atlético Boca Juniors",
        year: "2005",
        competition: "Primera División Argentina",
        img: "assets/images/boca_juniors2.jpg",
        desc: "Reedición moderna de primera equipación Boca Juniors 2005"
    },

    {
        team: "Borussia Dortmund",
        year: "2024/2025",
        competition: "Bundesliga",
        img: "assets/images/borussia_dortmund.jpg",
        desc: "Primera equipación Borussia Dortmund 2024/2025"
    },

    {
        team: "Brasil",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/brasil.jpg",
        desc: "Primera equipación Brasil Copa América 2024"
    },

    {
        team: "Chelsea",
        year: "2024/2025",
        competition: "Premier League",
        img: "assets/images/chelsea.jpg",
        desc: "Primera equipación Chelsea 2024/2025"
    },

    {
        team: "Corinthians",
        year: "2024/2025",
        competition: "Brasileirao",
        img: "assets/images/corintians.jpg",
        desc: "Primera equipación Corinthians 2024/2025"
    },

    {
        team: "Ecuador",
        year: "2015",
        competition: "Selecciones",
        img: "assets/images/ecuador.jpg",
        desc: "Primera equipación Ecuador"
    },

    {
        team: "España",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/españa.jpg",
        desc: "Primera equipación España Eurocopa 2024"
    },

    {
        team: "FC Barcelona",
        year: "2022/2023",
        competition: "La Liga",
        img: "assets/images/fcb1.jpg",
        desc: "Tercera equipación FC Barcelona 2022/2023"
    },

    {
        team: "FC Barcelona",
        year: "2004/2005",
        competition: "La Liga",
        img: "assets/images/fcb2.jpg",
        desc: "Segunda equipación FC Barcelona 2004/2005"
    },

    {
        team: "FC Barcelona",
        year: "2024/2025",
        competition: "La Liga",
        img: "assets/images/fcb3.jpg",
        desc: "Tercera equipación FC Barcelona 2024/2025"
    },

    {
        team: "FC Barcelona",
        year: "2024/2025",
        competition: "La Liga",
        img: "assets/images/fcb4.jpg",
        desc: "Segunda equipación FC Barcelona 2024/2025"
    },

    {
        team: "FC Barcelona",
        year: "1998/1999",
        competition: "La Liga",
        img: "assets/images/fcb5.jpg",
        desc: "Primera equipación FC Barcelona 1998/1999. Edición centenario"
    },

    {
        team: "FC Barcelona",
        year: "2024/2025",
        competition: "La Liga",
        img: "assets/images/fcb6.jpg",
        desc: "Primera equipación FC Barcelona 2024/2025"
    },

    {
        team: "FC Barcelona",
        year: "2009/2010",
        competition: "La Liga",
        img: "assets/images/fcb7.jpg",
        desc: "Primera equipación FC Barcelona 2009/2010"
    },

    {
        team: "ACF Fiorentina",
        year: "1998/1999",
        competition: "Serie A",
        img: "assets/images/fiorentina.jpg",
        desc: "Primera equipación Fiorentina 1998/1999"
    },

    {
        team: "Francia",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/francia1.jpg",
        desc: "Segunda equipación Francia Eurocopa 2024"
    },

    {
        team: "Francia",
        year: "2006",
        competition: "Selecciones",
        img: "assets/images/francia2.jpg",
        desc: "Segunda equipación Francia Mundial 2006"
    },

    {
        team: "Holanda",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/holanda.jpg",
        desc: "Primera equipación Holanda Eurocopa 2024"
    },

    {
        team: "Inglaterra",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/inglaterra1.jpg",
        desc: "Primera equipación Inglaterra Eurocopa 2024"
    },

    {
        team: "Inglaterra",
        year: "2006",
        competition: "Selecciones",
        img: "assets/images/inglaterra2.jpg",
        desc: "Primera equipación Inglaterra Mundial 2006"
    },

    {
        team: "Inter Miami",
        year: "2024/2025",
        competition: "MLS",
        img: "assets/images/inter_miami1.jpg",
        desc: "Segunda equipación Inter Miami 2024/2025"
    },

    {
        team: "Inter Miami",
        year: "2023/2024",
        competition: "MLS",
        img: "assets/images/inter_miami2.jpg",
        desc: "Primera equipación Inter Miami 2023/2024"
    },

    {
        team: "FC Inter Milan",
        year: "2024/2025",
        competition: "Serie A",
        img: "assets/images/inter_milan.jpg",
        desc: "Segunda equipación Inter Milan 2024/2025"
    },

    {
        team: "Italia",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/italia.jpg",
        desc: "Primera equipación Italia Eurocopa 2024"
    },

    {
        team: "Manchester City",
        year: "2023/2024",
        competition: "Premier League",
        img: "assets/images/man_city1.jpg",
        desc: "Primera equipación Manchester City 2023/2024"
    },

    {
        team: "Manchester City",
        year: "2024/2025",
        competition: "Premier League",
        img: "assets/images/man_city2.jpg",
        desc: "Segunda equipación Manchester City 2024/2025"
    },

    {
        team: "Manchester United",
        year: "2023/2024",
        competition: "Premier League",
        img: "assets/images/man_united2.jpg",
        desc: "Segunda equipación Manchester United 2023/2024"
    },

    {
        team: "Manchester United",
        year: "2024/2025",
        competition: "Premier League",
        img: "assets/images/man_united1.jpg",
        desc: "Primera equipación Manchester United 2024/2025"
    },

    {
        team: "SSC Napoli",
        year: "2024/2025",
        competition: "Serie A",
        img: "assets/images/napoles.jpg",
        desc: "Primera equipación Napoli 2024/2025"
    },

    {
        team: "Portugal",
        year: "2024",
        competition: "Selecciones",
        img: "assets/images/portugal.jpg",
        desc: "Primera equipación Portugal Eurocopa 2024"
    },

    {
        team: "Paris Saint Germain FC",
        year: "2021/2022",
        competition: "Ligue 1",
        img: "assets/images/psg1.jpg",
        desc: "Primera equipación PSG 2021/2022"
    },

    {
        team: "Paris Saint Germain FC",
        year: "2003/2004",
        competition: "Ligue 1",
        img: "assets/images/psg2.jpg",
        desc: "Primera equipación PSG 2003/2004"
    },

    {
        team: "Paris Saint Germain FC",
        year: "2024/2025",
        competition: "Ligue 1",
        img: "assets/images/psg3.jpg",
        desc: "Tercera equipación PSG 2024/2025"
    },

    {
        team: "Real Betis Balompié",
        year: "2025/2026",
        competition: "La Liga",
        img: "assets/images/real_betis1.jpg",
        desc: "Edición especial Betis 2025/2026"
    },

    {
        team: "Real Betis Balompié",
        year: "1987/1988",
        competition: "La Liga",
        img: "assets/images/real_betis2.jpg",
        desc: "Primera equipación Betis 1987/1988"
    },

    {
        team: "Real Madrid CF",
        year: "2024/2025",
        competition: "La Liga",
        img: "assets/images/real_madrid.jpg",
        desc: "Primera equipación Real Madrid 2024/2025"
    },

    {
        team: "Club Atlético River Plate",
        year: "2024/2025",
        competition: "Primera División Argentina",
        img: "assets/images/river_plate.jpg",
        desc: "Primera equipación River Plate 2024/2025"
    },

    {
        team: "Santos Futebol Clube",
        year: "2024/2025",
        competition: "Brasileirao",
        img: "assets/images/santos1.jpg",
        desc: "Primera equipación Santos 2024/2025"
    },

    {
        team: "Santos Futebol Clube",
        year: "2011/2012",
        competition: "Brasileirao",
        img: "assets/images/santos2.jpg",
        desc: "Primera equipación Santos 2011/2012"
    },

    {
        team: "Sporting Clube de Portugal",
        year: "2024/2025",
        competition: "Primeira Liga",
        img: "assets/images/sporting_lisboa.jpg",
        desc: "Primera equipación Sporting de Lisboa 2024/2025"
    },

    {
        team: "Venezuela",
        year: "2022/2023",
        competition: "Selecciones",
        img: "assets/images/venezuela.jpg",
        desc: "Primera equipación Venezuela 2022/2023"
    },
]

// ==========================
// VARIABLES RENDER
// ==========================

const container = document.getElementById("jersey-container");

let visible = 8;
let currentIndex = 0;
let currentList = [];


// ==========================
// CREAR CARD
// ==========================

function createCard(jersey) {

    const card = document.createElement("div");

    card.classList.add("jersey-card", "fade-in");

    card.innerHTML = `
<img loading="lazy" src="${jersey.img}" alt="${jersey.team}">
<h3>${jersey.team}</h3>
<p>${jersey.desc}</p>
`;

    container.appendChild(card);

    // activar animacion
    fadeObserver.observe(card);

}


// ==========================
// CARGA PROGRESIVA
// ==========================

function loadJerseys() {

    if (currentIndex >= currentList.length) return;

    const next = currentList.slice(currentIndex, currentIndex + visible);

    next.forEach(jersey => createCard(jersey));

    currentIndex += visible;

}


// ==========================
// RENDER
// ==========================

function renderInitial(list) {

    container.innerHTML = "";

    currentIndex = 0;

    currentList = list;

    loadJerseys();

}


// ==========================
// SCROLL INFINITO
// ==========================

container.addEventListener("scroll", () => {

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) {

        loadJerseys();

    }

});


// ==========================
// FILTROS
// ==========================

const searchTeam = document.getElementById("searchTeam");
const searchCompetition = document.getElementById("searchCompetition");
const searchYear = document.getElementById("searchYear");


function filterJerseys() {

    const team = searchTeam ? searchTeam.value.toLowerCase() : "";
    const competition = searchCompetition ? searchCompetition.value : "";
    const year = searchYear ? searchYear.value : "";

    const filtered = jerseys.filter(jersey => {

        return (

            jersey.team.toLowerCase().includes(team) &&
            (competition === "" || jersey.competition === competition) &&
            (year === "" || jersey.year.includes(year))

        );

    });

    renderInitial(filtered);

}


// listeners seguros

if (searchTeam) searchTeam.addEventListener("input", filterJerseys);
if (searchCompetition) searchCompetition.addEventListener("change", filterJerseys);
if (searchYear) searchYear.addEventListener("input", filterJerseys);


// ==========================
// GENERAR FILTRO LIGAS
// ==========================

function generateCompetitionFilter() {
    if (!searchCompetition) return;

    // Obtenemos las competiciones únicas
    const competitions = [...new Set(jerseys.map(j => j.competition))];
    competitions.sort();

    competitions.forEach(comp => {
        const option = document.createElement("option");
        option.value = comp;
        option.textContent = comp;
        searchCompetition.appendChild(option);
    });
}

// CONTADOR DE CAMISETAS
const jerseysTitle = document.querySelector(".jerseys h2");
jerseysTitle.textContent = `Camisetas de fútbol (${jerseys.length})`;

// ==========================
// INICIAR WEB
// ==========================

generateCompetitionFilter();
renderInitial(jerseys);

// ==========================
// ANÁLISIS - FRONTEND
// ==========================
const leagueSelect = document.getElementById("leagueSelect");
const viewSelect = document.getElementById("viewSelect");
const output = document.getElementById("dataOutput");

// Obtener datos desde el backend
async function getData(league) {
    const [standingsRes, scorersRes] = await Promise.all([
        fetch(`/api/standings?league=${league}`),
        fetch(`/api/scorers?league=${league}`)
    ]);

    const standingsData = await standingsRes.json();
    const scorersData = await scorersRes.json();

    return {
        table: standingsData.standings[0].table,
        scorers: scorersData.scorers
    };
}

// Renderizar
function render(view, data) {
    output.innerHTML = "";
    if (!data) return;

    if (view === "table") data.table.forEach(t => addRow(`${t.position}. ${t.team.name}`, `${t.points} pts`));
    if (view === "attack") data.table
        .sort((a, b) => b.goalsFor - a.goalsFor).slice(0, 10)
        .forEach(t => addRow(t.team.name, `${t.goalsFor} goles`));
    if (view === "defense") data.table
        .sort((a, b) => a.goalsAgainst - b.goalsAgainst).slice(0, 10)
        .forEach(t => addRow(t.team.name, `${t.goalsAgainst} encajados`));
    if (view === "scorers") data.scorers.slice(0, 10).forEach(p => addRow(p.player.name, `${p.goals} goles`));
    if (view === "assists") data.scorers
        .sort((a, b) => (b.assists || 0) - (a.assists || 0)).slice(0, 10)
        .forEach(p => addRow(p.player.name, `${p.assists || 0} asistencias`));
}

// Añadir fila
function addRow(left, right) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${left}</span><span>${right}</span>`;
    output.appendChild(li);
}

// Cargar y renderizar
async function load() {
    output.innerHTML = "Cargando...";
    try {
        const data = await getData(leagueSelect.value);
        render(viewSelect.value, data);
    } catch (e) {
        output.innerHTML = "Error cargando datos";
        console.error(e);
    }
}

leagueSelect.addEventListener("change", load);
viewSelect.addEventListener("change", load);
load();

// ==========================
// WORLD CUP FIXTURE
// ==========================

const worldCupMatches = [
const worldCupMatches = [
    // ========================================
    // 🌍 GROUP STAGE (72 MATCHES)
    // ========================================

    // ===== GROUP A =====
    {
        id: 1,
        date: "2026-06-11",
        time: "21:00",
        home: "México",
        away: "Sudáfrica",
        stadium: "Estadio Azteca",
        city: "Ciudad de México",
        stage: "groups",
        group: "A"
    },
    {
        id: 2,
        date: "2026-06-12",
        time: "04:00",
        home: "Corea del Sur",
        away: "Ganador UEFA PO D",
        stadium: "Estadio Guadalajara",
        city: "Guadalajara",
        stage: "groups",
        group: "A"
    },

    // ===== GROUP B =====
    {
        id: 3,
        date: "2026-06-12",
        time: "21:00",
        home: "Canadá",
        away: "Ganador UEFA PO A",
        stadium: "Toronto Stadium",
        city: "Toronto",
        stage: "groups",
        group: "B"
    },

    // ===== GROUP C =====
    {
        id: 4,
        date: "2026-06-13",
        time: "00:00",
        home: "Brasil",
        away: "Marruecos",
        stadium: "MetLife Stadium",
        city: "New York",
        stage: "groups",
        group: "C"
    },

    // ===== GROUP D =====
    {
        id: 5,
        date: "2026-06-13",
        time: "03:00",
        home: "Estados Unidos",
        away: "Paraguay",
        stadium: "Los Angeles Stadium",
        city: "Los Angeles",
        stage: "groups",
        group: "D"
    },

    // ===== GROUP E =====
    {
        id: 6,
        date: "2026-06-14",
        time: "19:00",
        home: "Alemania",
        away: "Curazao",
        stadium: "Philadelphia Stadium",
        city: "Philadelphia",
        stage: "groups",
        group: "E"
    },

    // ===== GROUP F =====
    {
        id: 7,
        date: "2026-06-14",
        time: "22:00",
        home: "Países Bajos",
        away: "Japón",
        stadium: "Dallas Stadium",
        city: "Dallas",
        stage: "groups",
        group: "F"
    },

    // ===== GROUP G =====
    {
        id: 8,
        date: "2026-06-15",
        time: "21:00",
        home: "Bélgica",
        away: "Egipto",
        stadium: "Seattle Stadium",
        city: "Seattle",
        stage: "groups",
        group: "G"
    },

    // ===== GROUP H =====
    {
        id: 9,
        date: "2026-06-15",
        time: "18:00",
        home: "España",
        away: "Cabo Verde",
        stadium: "Atlanta Stadium",
        city: "Atlanta",
        stage: "groups",
        group: "H"
    },

    // ===== GROUP I =====
    {
        id: 10,
        date: "2026-06-16",
        time: "21:00",
        home: "Francia",
        away: "Senegal",
        stadium: "Houston Stadium",
        city: "Houston",
        stage: "groups",
        group: "I"
    },

    // ===== GROUP J =====
    {
        id: 11,
        date: "2026-06-17",
        time: "03:00",
        home: "Argentina",
        away: "Argelia",
        stadium: "Miami Stadium",
        city: "Miami",
        stage: "groups",
        group: "J"
    },

    // ===== GROUP K =====
    {
        id: 12,
        date: "",
        time: "",
        home: "",
        away: "",
        stadium: "",
        city: "",
        stage: "groups",
        group: "K"
    },

    // ===== GROUP L =====
    {
        id: 13,
        date: "",
        time: "",
        home: "",
        away: "",
        stadium: "",
        city: "",
        stage: "groups",
        group: "L"
    },

    // ========================================
    // 🏆 KNOCKOUT STAGE
    // ========================================

    // ROUND OF 32
    {
        id: 73,
        date: "2026-06-28",
        time: "",
        home: "2º Grupo A",
        away: "2º Grupo B",
        stadium: "Los Angeles Stadium",
        city: "Los Angeles",
        stage: "round32"
    },

    // ROUND OF 16
    {
        id: 89,
        date: "",
        time: "",
        home: "",
        away: "",
        stadium: "",
        city: "",
        stage: "round16"
    },

    // QUARTERFINALS
    {
        id: 97,
        date: "",
        time: "",
        home: "",
        away: "",
        stadium: "",
        city: "",
        stage: "quarterfinal"
    },

    // SEMIFINALS
    {
        id: 101,
        date: "",
        time: "",
        home: "",
        away: "",
        stadium: "Dallas Stadium",
        city: "Dallas",
        stage: "semifinal"
    },

    // THIRD PLACE
    {
        id: 103,
        date: "",
        time: "",
        home: "",
        away: "",
        stadium: "Miami Stadium",
        city: "Miami",
        stage: "thirdplace"
    },

    // FINAL
    {
        id: 104,
        date: "2026-07-19",
        time: "",
        home: "",
        away: "",
        stadium: "MetLife Stadium",
        city: "New York",
        stage: "final"
    }
]; 
];

function renderWorldCupFixture() {
    const container = document.getElementById("fixtureContainer");
    if (!container) return;

    container.innerHTML = worldCupMatches.map(match => `
    <div class="match-card">
      <div class="match-header">
        <span>${match.date}</span>
        <span>${match.time}</span>
      </div>

      <div class="match-teams">
        ${match.home} vs ${match.away}
      </div>

      <p class="match-info">
        📍 ${match.stadium} · ${match.city}
      </p>

      <div class="match-actions">
        <button class="btn" onclick="downloadMatchICS(${match.id})">
          🍎 Apple
        </button>

        <a class="btn-outline"
           href="${googleCalendarLink(match)}"
           target="_blank">
          📆 Google
        </a>
      </div>
    </div>
  `).join("");
}

function generateICS(match) {
    const start = `${match.date.replace(/-/g, "")}T${match.time.replace(":", "")}00`;
    const end = `${match.date.replace(/-/g, "")}T${String(Number(match.time.split(":")[0]) + 2).padStart(2, "0")}0000`;

    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${match.home} vs ${match.away}
DTSTART:${start}
DTEND:${end}
LOCATION:${match.stadium}
DESCRIPTION:Partido del Mundial 2026
END:VEVENT
END:VCALENDAR`;
}

function downloadMatchICS(id) {
    const match = worldCupMatches.find(m => m.id === id);
    if (!match) return;

    const ics = generateICS(match);
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${match.home}-vs-${match.away}.ics`;
    a.click();
}

function googleCalendarLink(match) {
    const start = `${match.date.replace(/-/g, "")}T${match.time.replace(":", "")}00`;
    const end = `${match.date.replace(/-/g, "")}T${String(Number(match.time.split(":")[0]) + 2).padStart(2, "0")}0000`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(match.home + " vs " + match.away)}&dates=${start}/${end}&details=${encodeURIComponent("Mundial 2026")}&location=${encodeURIComponent(match.stadium)}`;
}

renderWorldCupFixture();

const worldCupTeams = [
    {
        name: "Alemania",
        group: "E",
        coach: "Julian Nagelsmann",
        fifaRanking: 8,
        strengths: [
            "presión alta",
            "transiciones rápidas",
            "profundidad de plantilla"
        ],
        weaknesses: [
            "espacios a la espalda",
            "irregularidad defensiva"
        ],
        keyPlayers: ["Musiala", "Wirtz", "Rüdiger"],
        prediction: "Cuartos de final",
        analysis: "Alemania llega con una generación muy talentosa y una idea ofensiva clara. Si mantiene estabilidad atrás, puede competir por semifinales."
    },

    {
        name: "España",
        group: "H",
        coach: "Luis de la Fuente",
        fifaRanking: 3,
        strengths: [
            "posesión",
            "presión tras pérdida",
            "talento joven"
        ],
        weaknesses: [
            "dependencia del control",
            "fragilidad en centros laterales"
        ],
        keyPlayers: ["Pedri", "Lamine Yamal", "Rodri"],
        prediction: "Semifinales",
        analysis: "España tiene una identidad muy marcada, domina desde la posesión y tiene desequilibrio exterior. Su techo dependerá de la contundencia en ambas áreas."
    }
];

function renderTeamAnalysis() {
    const container = document.getElementById("teamAnalysisContainer");
    if (!container) return;

    container.innerHTML = worldCupTeams.map(team => `
    <div class="match-card">
      <div class="match-header">
        <span>Grupo ${team.group}</span>
        <span>#${team.fifaRanking}</span>
      </div>

      <div class="match-teams">${team.name}</div>

      <p class="match-info">
        👨‍🏫 ${team.coach}<br>
        ⭐ ${team.keyPlayers.join(", ")}<br>
        🎯 Pronóstico: ${team.prediction}
      </p>

      <p>${team.analysis}</p>
    </div>
  `).join("");
}

renderTeamAnalysis();

const todayIndex = new Date().getDate() % worldCupTeams.length;
const teamOfTheDay = worldCupTeams
    .sort((a, b) => a.name.localeCompare(b.name))[todayIndex];