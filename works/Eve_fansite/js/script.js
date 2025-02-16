const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

startSlideInterval();

showSlide(currentSlide);

prevButton.addEventListener('click', () => {
    prevSlide();
    clearInterval(slideInterval);
    startSlideInterval();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval);
    startSlideInterval();
});

document.body.style.overflow = 'auto'; // 初期状態でスクロールを有効に

function toggleMenu() {
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

hamburger.classList.toggle('active');
menu.classList.toggle('show');
overlay.classList.toggle('show');

// メニューが表示されているときにスクロールを無効化
if (menu.classList.contains('show')) {
    body.style.overflow = 'hidden';
} else {
    body.style.overflow = 'auto';
}


}














