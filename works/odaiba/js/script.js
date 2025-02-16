/* カレンダー */
function getCurrentDate() {
    const today = new Date();
    
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const month = months[today.getMonth()];
    const dayOfMonth = today.getDate();
    const dayOfWeek = days[today.getDay()];

    document.querySelector('.month-day').innerHTML = `${month} ${dayOfMonth}`;
    document.querySelector('.day-of-week').innerHTML = dayOfWeek;
}

getCurrentDate();

/* ロゴ */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');
    const menuSvg = document.getElementById('menuSvg');

    menuIcon.addEventListener('click', function () {
        const currentLeftValue = parseInt(getComputedStyle(sideMenu).left);
        const currentTopValue = parseInt(getComputedStyle(sideMenu).top);

        if (currentLeftValue < 0 || currentTopValue < 0) {
            if (window.innerWidth <= 960) {
                sideMenu.style.top = '0';
                sideMenu.style.left = '0';
            } else {
                sideMenu.style.left = '0';
                sideMenu.style.top = '0';
            }
            menuIcon.innerHTML = '&#10006;';
            menuIcon.classList.add('close');

            menuSvg.querySelectorAll('path, rect').forEach(element => {
                element.setAttribute('fill', '#fff');
            });
        } else {
            if (window.innerWidth <= 960) {
                sideMenu.style.top = '-100%';
            } else {
                sideMenu.style.left = '-100%';
            }
            menuIcon.innerHTML = '&#9776;';
            menuIcon.classList.remove('close');

            menuSvg.querySelectorAll('path, rect').forEach(element => {
                element.setAttribute('fill', '#000');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuSvg = document.getElementById('menuSvg');
    const newSvg = document.getElementById('newSvg');
    const menuIcon = document.getElementById('menuIcon');
    const changePosition = 50;
    let menuOpen = false;

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > changePosition) {
            menuSvg.classList.add('hide');
            newSvg.classList.remove('hide');
        } else {
            menuSvg.classList.remove('hide');
            newSvg.classList.add('hide');
        }
    });

    menuIcon.addEventListener('click', function () {
        menuOpen = !menuOpen;

        if (menuOpen) {
            menuIcon.innerHTML = '&#10006;';
            changeSvgColor(newSvg, '#fff');
            changeSvgColor(menuSvg, '#fff');
        } else {
            menuIcon.innerHTML = '&#9776;';
            changeSvgColor(newSvg, '#000');
            changeSvgColor(menuSvg, '#000');
        }
    });

    function changeSvgColor(svgElement, color) {
        svgElement.querySelectorAll('path, rect, circle').forEach(element => {
            element.setAttribute('fill', color);
        });
    }

    menuSvg.addEventListener('click', function () {
        menuOpen = !menuOpen;

        if (menuOpen) {
            menuIcon.innerHTML = '&#10006;';
            changeSvgColor(newSvg, '#fff');
            changeSvgColor(menuSvg, '#fff');
        } else {
            menuIcon.innerHTML = '&#9776;';
            changeSvgColor(newSvg, '#000');
            changeSvgColor(menuSvg, '#000');
        }
    });
});

/* スライドショー */
document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slideshow img');
    let currentSlide = 0;
    const slideInterval = 5000;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');

    setInterval(showNextSlide, slideInterval);
});

/* navから選択時の自動スクロール */
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* 背景飛び出し */
window.addEventListener('scroll', function() {
    const mainWhereBox = document.querySelector('.main-where-box');
    const overlay = document.querySelector('.background-overlay');
    const rect = mainWhereBox.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        overlay.classList.add('show-overlay');
    } else {
        overlay.classList.remove('show-overlay');
    }
});

window.addEventListener('scroll', function() {
    const mainWhereBox = document.querySelector('.main-where-box-re');
    const overlay = document.querySelector('.background-overlay-re');
    const rect = mainWhereBox.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        overlay.classList.add('show-overlay-re');
    } else {
        overlay.classList.remove('show-overlay-re');
    }
});

window.addEventListener('scroll', function() {
    const mainWhereBox = document.querySelector('.main-where-box-re-re');
    const overlay = document.querySelector('.background-overlay-re-re');
    const rect = mainWhereBox.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        overlay.classList.add('show-overlay-re-re');
    } else {
        overlay.classList.remove('show-overlay-re-re');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".main_about_title");

    function handleScroll() {
        const rect = title.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8) {
            title.classList.add("active");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ページ読み込み時に判定
});
