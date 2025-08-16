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

document.addEventListener('DOMContentLoaded', function() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';
  const currentTheme = html.getAttribute('data-theme');
  
  // Only update if the theme hasn't been set by the inline script
  if (!currentTheme || currentTheme === 'light') {
    html.setAttribute('data-theme', savedTheme);
  }
  
  updateIconVisibility(html.getAttribute('data-theme'));
});
