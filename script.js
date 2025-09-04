document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.className = 'hacking-line-container';
    body.appendChild(container);

    const numberOfLines = 50; // Adjust this number for more or fewer lines

    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.className = 'hacking-line';

        const left = Math.random() * 100; // Random horizontal position
        const height = Math.random() * 50 + 50; // Random height between 50 and 100
        const duration = Math.random() * 5 + 3; // Random duration between 3 and 8 seconds
        const delay = Math.random() * -5; // Random delay for staggered start

        line.style.left = `${left}vw`;
        line.style.height = `${height}vh`;
        line.style.animationDuration = `${duration}s`;
        line.style.animationDelay = `${delay}s`;

        container.appendChild(line);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.setAttribute('aria-expanded', !isExpanded);
    });

    // Close the menu when a link is clicked (optional but recommended)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            mainNav.setAttribute('aria-expanded', 'false');
        });
    });
});