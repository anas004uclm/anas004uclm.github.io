// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(
        '.skill-card, .project-item, .experience-card, .intro, .section-title'
    );
    
    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Add CSS for fade-in effect
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Stagger animation for grid items */
    .skill-card:nth-child(1) { transition-delay: 0.1s; }
    .skill-card:nth-child(2) { transition-delay: 0.2s; }
    .skill-card:nth-child(3) { transition-delay: 0.3s; }
    
    .project-item:nth-child(1) { transition-delay: 0.1s; }
    .project-item:nth-child(2) { transition-delay: 0.2s; }
    .project-item:nth-child(3) { transition-delay: 0.3s; }
    .project-item:nth-child(4) { transition-delay: 0.1s; }
    .project-item:nth-child(5) { transition-delay: 0.2s; }
    .project-item:nth-child(6) { transition-delay: 0.3s; }
    
    .experience-card:nth-child(1) { transition-delay: 0.1s; }
    .experience-card:nth-child(2) { transition-delay: 0.2s; }
    .experience-card:nth-child(3) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);

// Parallax effect for hero illustration
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const illustration = document.querySelector('.hero-illustration');
    if (illustration && scrolled < window.innerHeight) {
        illustration.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Logo animation on hover
const logos = document.querySelectorAll('.logos-grid img');
logos.forEach(logo => {
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotate(5deg)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Skill cards hover effect
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Project cards flip on mobile (click/tap)
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    // En móvil, hacer flip con click
    if (window.innerWidth <= 768) {
        projectCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('flipped');
            });
        });
    }

    // Contact form toggle
    const formToggle = document.getElementById('formToggle');
    const contactForm = document.getElementById('contactForm');
    const formClose = document.getElementById('formClose');

    if (formToggle) {
        formToggle.addEventListener('click', () => {
            contactForm.classList.toggle('hidden');
        });
    }

    if (formClose) {
        formClose.addEventListener('click', () => {
            contactForm.classList.add('hidden');
        });
    }
});

// Console message
console.log('%c¡Hola! 👋', 'font-size: 24px; font-weight: bold; color: #6C63FF;');
console.log('%c¿Interesado en el código? Échale un vistazo en GitHub: https://github.com/anas004uclm', 'font-size: 14px; color: #718096;');

