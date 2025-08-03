// Mobile Navigation
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });
}

// Image Gallery Slider
const gallerySlider = document.getElementById('gallerySlider');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    if (gallerySlider && dots.length > 0) {
        gallerySlider.style.transform = `translateX(-${index * 100}%)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
}

// Add click events to dots
if (dots.length > 0) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.dataset.slide);
            showSlide(slideIndex);
            resetSlideInterval();
        });
    });
}

// Auto slide every 5 seconds
function startSlideInterval() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        showSlide(currentSlide);
    }, 5000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

// Start the slider when page loads
if (gallerySlider && dots.length > 0) {
    showSlide(0);
    startSlideInterval();
}

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.classList.add('scroll-to-top');
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.zIndex = '99';
scrollToTopBtn.style.backgroundColor = 'var(--primary)';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.width = '50px';
scrollToTopBtn.style.height = '50px';
scrollToTopBtn.style.fontSize = '1.2rem';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const lazyLoad = function() {
        lazyImages.forEach(img => {
            if (img.getAttribute('data-src') && img.getBoundingClientRect().top <= window.innerHeight + 100) {
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
            }
        });
    };
    
    // Load images that are in view
    lazyLoad();
    
    // Listen to scroll events for lazy loading
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
});

// Newsletter form handling
const newsletterForms = document.querySelectorAll('#newsletterForm');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        localStorage.setItem('newsletterEmail', email);
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
    });
});