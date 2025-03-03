// スムーズにスクロールする
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// スライドショー
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 8000);

// h2に線が引く
window.addEventListener('scroll', function() {
    const h2s = document.querySelectorAll('.top-content h2, #menu h2');
    const windowHeight = window.innerHeight;

    h2s.forEach(h2 => {
        const h2Position = h2.getBoundingClientRect().top;

        if (h2Position < windowHeight * 0.8) {
            h2.classList.add('active');
        }
    });
});

// 画像のフェードイン
function revealOnScroll() {
    const images = document.querySelectorAll('.top-content-about-images img');
    const elements = document.querySelectorAll('.top-content-scene-top-box, .top-content-scene-bottom-box');
    const windowHeight = window.innerHeight;

    images.forEach(image => {
        const imagePosition = image.getBoundingClientRect().top;

        if (imagePosition < windowHeight * 0.8) {
            image.classList.add('active');
        }
    });

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < windowHeight * 0.8) {
            element.classList.add('active');
        }
    });
}

// スクロールイベントリスナー
window.addEventListener('scroll', revealOnScroll);

// ページが読み込まれたときに一度、スクロール位置を確認
document.addEventListener('DOMContentLoaded', revealOnScroll);

// スクロールイベントリスナー
window.addEventListener('scroll', revealOnScroll);

// ページが読み込まれたときに一度、スクロール位置を確認
document.addEventListener('DOMContentLoaded', revealOnScroll);

// ポップアップ表示用の変数
const images = document.querySelectorAll('.gallery-image');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closePopup = document.getElementById('close-popup');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentImageIndex = -1;

// 画像をクリックしたときにポップアップを表示
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        showPopup(images[currentImageIndex].src);
    });
});

// ポップアップ
function showPopup(src) {
    popupImg.src = src;
    popup.style.display = 'flex';
    document.body.classList.add('no-scroll');
}

closePopup.addEventListener('click', () => {
    closePopupFunction();
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopupFunction();
    }
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showPopup(images[currentImageIndex].src);
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showPopup(images[currentImageIndex].src);
});

function closePopupFunction() {
    popup.style.display = 'none';
    document.body.classList.remove('no-scroll');
}

// ロゴをクリックしたときにサイトの一番上にスクロール
document.querySelector('.header-logo').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ハンバーガーメニューのアイコンがクリックされた時
document.getElementById('hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    
    document.querySelector('.header-nav nav ul').classList.toggle('active');
});

// メニュー項目がクリックされた時にハンバーガーメニューを閉じる
document.querySelectorAll('.header-nav nav ul li a').forEach(function(menuItem) {
    menuItem.addEventListener('click', function(e) {
        document.getElementById('hamburger-menu').classList.remove('active');
        
        document.querySelector('.header-nav nav ul').classList.remove('active');
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        
        if (targetElement) {
            const offsetAdjustment = 30;
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight - offsetAdjustment,
                behavior: 'smooth'
            });
        }
    });
});

// ローディング
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingLogo = document.querySelector('.loading-logo img');

    loadingLogo.addEventListener('animationend', function(event) {
        if (event.animationName === 'logoFadeOut') {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
            }, 500);
        }
    });

    setTimeout(function() {
        loadingLogo.style.animation = 'logoFadeIn 1s ease-in-out 1s forwards, logoFadeOut 1s ease-in-out 4s forwards';
    }, 1000);
});
