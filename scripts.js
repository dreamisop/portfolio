// scripts.js

// Function to toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark');
    document.getElementById('sun-icon').classList.toggle('hidden');
    document.getElementById('moon-icon').classList.toggle('hidden');
}

// Event listener for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
