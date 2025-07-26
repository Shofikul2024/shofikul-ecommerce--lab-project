// Select DOM elements
const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header .navbar");
const slides = document.querySelectorAll(".home .slides-container .slide");

let currentSlideIndex = 0;

// Toggle mobile navigation menu
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

// Hide menu on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
};

// Function to show a specific slide
function showSlide(index) {
    // Hide the current slide
    slides[currentSlideIndex].classList.remove('active');

    // Calculate the next slide index, looping back to the start if necessary
    currentSlideIndex = (index + slides.length) % slides.length;

    // Show the new slide
    slides[currentSlideIndex].classList.add('active');
}

// Function to show the next slide
function next() {
    showSlide(currentSlideIndex + 1);
}

// Function to show the previous slide
function prev() {
    showSlide(currentSlideIndex - 1);
}

// Optional: Auto-play the slider every 5 seconds
setInterval(next, 5000);