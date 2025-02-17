document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cards__content-information');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeUp 0.6s forwards';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});
