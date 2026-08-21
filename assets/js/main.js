/* ============================================================
   Smooth Scrolling for Anchor Links
============================================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


/* ============================================================
   Fade-In Animations on Scroll
============================================================ */
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, { threshold: 0.15 });

fadeInElements.forEach(el => fadeInObserver.observe(el));

/* ============================================================
   Lazy Loading for Diagrams
============================================================ */
const lazyImages = document.querySelectorAll('img[data-src]');

const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => lazyObserver.observe(img));

/* ============================================================
   Scroll-To-Top Button
============================================================ */
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ============================================================
   Optional: Auto-Add Fade-In to Diagrams
============================================================ */
const diagrams = document.querySelectorAll('.case-diagram img');

diagrams.forEach(img => {
    fadeInObserver.observe(img);
});
