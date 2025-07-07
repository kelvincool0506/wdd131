// DOM elements
const hamburger = document.getElementById('hamburger');
const navigation = document.querySelector('.navigation');

// Update footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamburger.textContent = navigation.classList.contains('show') ? '✕' : '☰';
});

// Close menu when clicking on a link (for mobile)
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navigation.classList.remove('show');
            hamburger.textContent = '☰';
        }
    });
});