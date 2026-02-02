function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIconVisibility(newTheme);
}

function updateIconVisibility(theme) {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}
// Menu toggle functionality
function toggleMenu() {
    const navContent = document.getElementById('nav-content');
    const hamburger = document.querySelector('.hamburger-menu');
    navContent.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function (event) {
    const navContent = document.getElementById('nav-content');
    const hamburger = document.querySelector('.hamburger-menu');

    if (navContent.classList.contains('active') &&
        !navContent.contains(event.target) &&
        !hamburger.contains(event.target)) {
        navContent.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


// Initialize theme functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Existing theme functionality
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const currentTheme = html.getAttribute('data-theme');

    // Only update if the theme hasn't been set by the inline script
    if (!currentTheme || currentTheme === 'light') {
        html.setAttribute('data-theme', savedTheme);
    }

    updateIconVisibility(html.getAttribute('data-theme'));
});
