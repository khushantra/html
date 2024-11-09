// Smooth scroll when clicking on internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle detailed information for vehicle types
document.querySelectorAll('.vehicle-type').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.querySelector('ul');
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});

// Simple fade-in effect for content on page load
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            section.style.opacity = 1;
        }, 100);
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect for content when the page loads
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.category-card, header, footer');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.8s ease-in-out';
        setTimeout(() => {
            element.style.opacity = 1;
        }, 200);
    });
});
