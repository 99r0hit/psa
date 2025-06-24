// Loader Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2500);
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Active State
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
            // Trigger counter animation for visible counters (not used on products page)
            if (element.classList.contains('counter')) {
                element.textContent = '0'; // Reset before counting
                const target = parseInt(element.getAttribute('data-target'));
                let count = 0;
                const speed = 50;
                const increment = target / speed;
                const updateCounter = () => {
                    count += increment;
                    if (count < target) {
                        element.textContent = Math.ceil(count);
                        setTimeout(updateCounter, 20);
                    } else {
                        element.textContent = target + (element.getAttribute('data-target').includes('%') ? '%' : '');
                    }
                };
                updateCounter();
            }
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
