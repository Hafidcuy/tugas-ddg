document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const mangaCovers = document.querySelectorAll('.manga-cover');
    mangaCovers.forEach(cover => {
        cover.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });
        
        cover.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });
});