// Responsive Navigation Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Image Slider
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Form Submissions (if you want to handle form submissions with JavaScript)
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Perform form submission (e.g., send to server or email)
    // This is a placeholder; you would need a backend service to handle this
    alert(`Thank you, ${name}! Your booking request has been received.`);
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    // Perform form submission (e.g., send to server or email)
    // This is a placeholder; you would need a backend service to handle this
    alert(`Thank you for subscribing with ${email}!`);
});
