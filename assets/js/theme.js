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


<<<<<<< Updated upstream
// Initialize theme functionality when DOM is loaded
=======
// Sitemap functionality
function expandAll() {
    const toggles = document.querySelectorAll('.sitemap-toggle');
    toggles.forEach(toggle => {
        const children = toggle.closest('.sitemap-item').querySelector('.sitemap-children');
        if (children && children.classList.contains('collapsed')) {
            children.classList.remove('collapsed');
            toggle.textContent = '▼';
        }
    });
}

function collapseAll() {
    const toggles = document.querySelectorAll('.sitemap-toggle');
    toggles.forEach(toggle => {
        const children = toggle.closest('.sitemap-item').querySelector('.sitemap-children');
        if (children && !children.classList.contains('collapsed')) {
            children.classList.add('collapsed');
            toggle.textContent = '▶';
        }
    });
}

// Initialize sitemap functionality when DOM is loaded
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

    // Sitemap toggle functionality
    const toggles = document.querySelectorAll('.sitemap-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const children = this.closest('.sitemap-item').querySelector('.sitemap-children');
            if (children) {
                children.classList.toggle('collapsed');
                this.textContent = children.classList.contains('collapsed') ? '▶' : '▼';
            }
        });
    });
>>>>>>> Stashed changes
});
