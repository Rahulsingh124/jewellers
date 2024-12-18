const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

let currentSlide = 0;

function updateSlider() {
  const slideWidth = document.querySelector('.slider-item').clientWidth;
  sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  const totalSlides = document.querySelectorAll('.slider-item').length;
  currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : totalSlides - 1;
  updateSlider();
});

// Toggle menu for mobile view
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
