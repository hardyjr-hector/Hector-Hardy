// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu desplegable móvil
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Abrir / cerrar menú
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Cerrar menú cuando se hace click en un enlace
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Cerrar menú cuando se hace click fuera del menú
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('show');
    }
});

// Fade-in animation
const elementsToFade = document.querySelectorAll('.project-card, .article-card, .jersey-card');

const observerOptions = {
    threshold: 0.2
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

elementsToFade.forEach(element => {
    element.classList.add('fade-in');
    fadeObserver.observe(element);
});

// Camisetas de fútbol
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
];

const container = document.getElementById("jersey-container");

jerseys.forEach(jersey => {

    const card = document.createElement("div");
    card.classList.add("jersey-card");

    card.innerHTML = `
    <img src="${jersey.img}" alt="${jersey.team}">
    <h3>${jersey.team}</h3>
    <p>${jersey.desc}</p>
  `;

    container.appendChild(card);

});