// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  console.log('Theme script loaded');

  // Get the theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  console.log('Theme toggle button:', themeToggle);
  
  // Function to get the current theme
  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
  
  // Function to set the theme
  function setTheme(theme) {
    console.log('Setting theme to:', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  // Function to toggle between light and dark themes
  function toggleTheme() {
    console.log('Toggle theme clicked');
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('Switching from', currentTheme, 'to', newTheme);
    setTheme(newTheme);
  }
  
  // Add event listener to theme toggle button
  if (themeToggle) {
    console.log('Adding click event listener to theme toggle');
    themeToggle.addEventListener('click', toggleTheme);
  } else {
    console.error('Theme toggle button not found!');
  }
  
  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
});
