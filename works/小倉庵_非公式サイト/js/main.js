document.addEventListener("DOMContentLoaded", function() {
    // スライドショーを8秒ごとに切り替える
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    setInterval(function() {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
    }, 8000); // 8秒ごとに切り替え
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const verticalNav = document.querySelector(".vertical-nav");

    // メニュー切り替え機能
    menuToggle.addEventListener("click", function () {
        verticalNav.classList.toggle("active");
        if (verticalNav.classList.contains("active")) {
            menuToggle.textContent = '×'; // メニューが開いたら「×」
        } else {
            menuToggle.textContent = '☰'; // メニューが閉じたら「☰」
        }
    });

    // スムーズスクロール機能
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // デフォルトの動作（ページ遷移）をキャンセル
            const targetId = link.getAttribute('href').substring(1); // IDを取得
            const targetElement = document.getElementById(targetId); // 対象の要素を取得

            // スムーズにスクロール
            if (targetId === 'first') {
                // 'first'セクションの場合、少し上にスクロール
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // 'first' セクションをさらに50px分調整
                window.scrollBy(0, -50);
            } else {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // 980px以下の場合、メニューが閉じるようにする
            if (window.innerWidth <= 980) {
                verticalNav.classList.remove("active");
                menuToggle.textContent = '☰'; // メニューアイコンを元に戻す
            }
        });
    });
});
