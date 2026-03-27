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
// ANÁLISIS
// ==========================

const BASE_URL = "/api";

// FUNCIONES API
const API_KEY = "TU_API_KEY_AQUI";
const BASE_URL = "https://api.football-data.org/v4";

const leagueSelect = document.getElementById("leagueSelect");
const viewSelect = document.getElementById("viewSelect");
const output = document.getElementById("dataOutput");

// FETCH BASE
async function fetchAPI(endpoint) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: { "X-Auth-Token": API_KEY }
    });

    if (!res.ok) throw new Error(res.status);
    return await res.json();
}

// DATOS
async function getData(league) {
    const standings = await fetch(`${BASE_URL}/standings?league=${league}`);
    const scorers = await fetch(`${BASE_URL}/scorers?league=${league}`);

    return {
        table: standings.standings[0].table,
        scorers: scorers.scorers
    };
}

// RENDER
function render(view, data) {
    output.innerHTML = "";

    if (view === "table") {
        data.table.forEach(t => {
            addRow(`${t.position}. ${t.team.name}`, `${t.points} pts`);
        });
    }

    if (view === "attack") {
        const sorted = [...data.table].sort((a, b) => b.goalsFor - a.goalsFor);
        sorted.slice(0, 10).forEach(t => {
            addRow(t.team.name, `${t.goalsFor} goles`);
        });
    }

    if (view === "defense") {
        const sorted = [...data.table].sort((a, b) => a.goalsAgainst - b.goalsAgainst);
        sorted.slice(0, 10).forEach(t => {
            addRow(t.team.name, `${t.goalsAgainst} encajados`);
        });
    }

    if (view === "form") {
        data.table.forEach(t => {
            addRow(t.team.name, t.form || "N/A");
        });
    }

    if (view === "scorers") {
        data.scorers.slice(0, 10).forEach(p => {
            addRow(p.player.name, `${p.goals} goles`);
        });
    }

    if (view === "assists") {
        const sorted = [...data.scorers].sort((a, b) => b.assists - a.assists);
        sorted.slice(0, 10).forEach(p => {
            addRow(p.player.name, `${p.assists} asistencias`);
        });
    }
}

// UTIL
function addRow(left, right) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${left}</span><span>${right}</span>`;
    output.appendChild(li);
}

// LOAD
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

export default async function handler(req, res) {
    const response = await fetch("https://api.football-data.org/v4/competitions/PD/standings", {
        headers: { "X-Auth-Token": process.env.API_KEY }
    });

    const data = await response.json();
    res.status(200).json(data);
}

fetch(`/api/data?league=${league}`)