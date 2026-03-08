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
        team: "AC MILAN",
        year: "2024/2025",
        competition: "Serie A",
        img: "assets/images/acmilan1.jpg",
        desc: "Primera equipación AC MILAN 2024/2025"
    },

    {
        team: "AC MILAN",
        year: "2024/2025",
        competition: "Serie A",
        img: "assets/images/acmilan3.jpg",
        desc: "Segunda equipación AC MILAN 2024/2025"
    },

    {
        team: "AC MILAN",
        year: "2008/2009",
        competition: "Serie A",
        img: "assets/images/acmilan2.jpg",
        desc: "Primera equipación AC MILAN 2008/2009"
    }
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