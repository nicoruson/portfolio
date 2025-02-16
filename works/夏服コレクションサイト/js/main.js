/* ハンバーガーメニュー */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');
    const menuLinks = sideMenu.querySelectorAll('a');

    menuIcon.addEventListener('click', function () {
        const currentTopValue = parseInt(getComputedStyle(sideMenu).top);

        if (currentTopValue < 0) {
            sideMenu.style.top = '0';
            menuIcon.innerHTML = '&#10006;';
            menuIcon.classList.add('close');
        } else {
            sideMenu.style.top = '-100%';
            menuIcon.innerHTML = '&#9776;';
            menuIcon.classList.remove('close');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            sideMenu.style.top = '-100%';
            menuIcon.innerHTML = '&#9776;';
            menuIcon.classList.remove('close');
        });
    });
});


// main_slideshow
const slideInterval = 5000;
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.main_slideshow_slides');
    const totalSlides = document.querySelectorAll('.main_slideshow_slides img').length;
    const buttons = document.querySelectorAll('.main_slideshow_buttons button');

    if (index >= 0 && index < totalSlides) {
        currentSlide = index;
        const slideWidth = slides.offsetWidth;
        const offset = -index * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;

        buttons.forEach((button, i) => {
            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.main_slideshow_slides img').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

showSlide(0);


// custom_slideshow
const customSlideInterval = 5000;
let currentCustomSlide = 0;

function showCustomSlide(index) {
    const slides = document.querySelector('.custom_slideshow_slides');
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides img').length;
    const buttons = document.querySelectorAll('.custom_slideshow_buttons button');

    if (index >= 0 && index < totalSlides) {
        currentCustomSlide = index;
        const slideWidth = slides.offsetWidth;
        const offset = -index * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;

        buttons.forEach((button, i) => {
            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

function nextCustomSlide() {
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides img').length;
    currentCustomSlide = (currentCustomSlide + 1) % totalSlides;
    showCustomSlide(currentCustomSlide);
}

setInterval(nextCustomSlide, customSlideInterval);

showCustomSlide(0);


// custom_slideshow_another
const customSlideIntervalAnother = 5000;
let currentCustomSlideAnother = 0;

function showCustomSlideAnother(index) {
    const slides = document.querySelector('.custom_slideshow_slides_another');
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_another img').length;
    const buttons = document.querySelectorAll('.custom_slideshow_buttons_another button');

    if (index >= 0 && index < totalSlides) {
        currentCustomSlideAnother = index;
        const slideWidth = slides.offsetWidth;
        const offset = -index * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;

        buttons.forEach((button, i) => {
            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

function nextCustomSlideAnother() {
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_another img').length;
    currentCustomSlideAnother = (currentCustomSlideAnother + 1) % totalSlides;
    showCustomSlideAnother(currentCustomSlideAnother);
}

setInterval(nextCustomSlideAnother, customSlideIntervalAnother);

showCustomSlideAnother(0);



// custom_slideshow_more
const customSlideIntervalMore = 5000;
let currentCustomMore = 0;

function showCustomSlideMore(index) {
    const slides = document.querySelector('.custom_slideshow_slides_more');
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_more img').length;
    const buttons = document.querySelectorAll('.custom_slideshow_buttons_more button');

    if (index >= 0 && index < totalSlides) {
        currentCustomSlideMore = index;
        const slideWidth = slides.offsetWidth;
        const offset = -index * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;

        buttons.forEach((button, i) => {
            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

function nextCustomSlideMore() {
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_more img').length;
    currentCustomSlideMore = (currentCustomSlideMore + 1) % totalSlides;
    showCustomSlideMore(currentCustomSlideMore);
}

setInterval(nextCustomSlideMore, customSlideIntervalMore);

showCustomSlideMore(0);






// main_slideshow_left
const slideIntervalTrioLeft = 5000;
let currentSlideTrioLeft = 0;

function showCustomSlideLeft(index) {
    const slides = document.querySelector('.custom_slideshow_slides_trio_left');
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_trio_left img').length;
    const buttons = document.querySelectorAll('.custom_slideshow_buttons_trio_left button');

    if (index >= 0 && index < totalSlides) {
        currentSlideTrioLeft = index;
        const slideWidth = slides.offsetWidth;
        const offset = -index * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;

        buttons.forEach((button, i) => {
            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

function nextSlideTrioLeft() {
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_trio_left img').length; // 修正点
    currentSlideTrioLeft = (currentSlideTrioLeft + 1) % totalSlides;
    showCustomSlideLeft(currentSlideTrioLeft);
}

showCustomSlideLeft(0);


// main_slideshow_center
const slideIntervalTrioCenter = 5000;
let currentSlideTrioCenter = 0;

function showCustomSlideCenter(index) {
    const slides = document.querySelector('.custom_slideshow_slides_trio_center');
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_trio_center img').length;
    const buttons = document.querySelectorAll('.custom_slideshow_buttons_trio_center button');

    if (index >= 0 && index < totalSlides) {
        currentSlideTrioCenter = index;
        const slideWidth = slides.offsetWidth;
        const offset = -index * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;

        buttons.forEach((button, i) => {
            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

function nextSlideTrioCenter() {
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_trio_center img').length; // 修正点
    currentSlideTrioCenter = (currentSlideTrioCenter + 1) % totalSlides;
    showCustomSlideCenter(currentSlideTrioCenter);
}

showCustomSlideCenter(0);



// main_slideshow_right
const slideIntervalTrioRight = 5000;
let currentSlideTrioRight = 0;

function showCustomSlideRight(index) {
    const slides = document.querySelector('.custom_slideshow_slides_trio_right');
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_trio_right img').length;
    const buttons = document.querySelectorAll('.custom_slideshow_buttons_trio_right button');

    if (index >= 0 && index < totalSlides) {
        currentSlideTrioRight = index;
        const slideWidth = slides.offsetWidth;
        const offset = -index * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;

        buttons.forEach((button, i) => {
            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

function nextSlideTrioRight() {
    const totalSlides = document.querySelectorAll('.custom_slideshow_slides_trio_right img').length; // 修正点
    currentSlideTrioRight = (currentSlideTrioRight + 1) % totalSlides;
    showCustomSlideRight(currentSlideTrioRight);
}

showCustomSlideRight(0);
