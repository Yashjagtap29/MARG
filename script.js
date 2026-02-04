// ═══════════════════════════════════════════════════════════
// MARG — Sacred Interactions
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    
    // Remove OM entry screen after animation
    setTimeout(() => {
        const omEntry = document.getElementById('omEntry');
        if (omEntry) {
            omEntry.remove();
        }
    }, 3000);
    
    // Smooth scroll for internal links
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
    
    // Track CTA clicks
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            console.log('Journey started - Form opened');
            // Add analytics here later
        });
    }
    
    // Parallax effect on scroll (subtle)
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const omSymbol = document.querySelector('.om-symbol');
        
        if (omSymbol) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            omSymbol.style.transform = `translateY(${rate}px)`;
        }
        
        lastScroll = currentScroll;
    });
    
});