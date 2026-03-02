// ===== NAVBAR BACKGROUND ON SCROLL =====

const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#000';
        } else {
            navbar.style.backgroundColor = '#0f0f0f';
        }
    });
}


// ===== FADE-IN ANIMATION ON SCROLL =====

const elementsToFade = document.querySelectorAll('.project-card, .article-card');

const observerOptions = {
    threshold: 0.2
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // stop observing after animation
        }
    });
}, observerOptions);

elementsToFade.forEach(element => {
    element.classList.add('fade-in');
    fadeObserver.observe(element);
});