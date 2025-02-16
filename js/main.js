


document.addEventListener("DOMContentLoaded", () => {
    const h2Elements = document.querySelectorAll("h2");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    h2Elements.forEach((h2) => observer.observe(h2));
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const worksItems = document.querySelectorAll(".main_contents_works_item");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 } // 30%見えたら発火
    );
  
    worksItems.forEach((item) => observer.observe(item));
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   const hamburger = document.querySelector('.hamburger');
  //   const nav = document.querySelector('nav ul');
  
  //   hamburger.addEventListener('click', function() {
  //     nav.classList.toggle('open');
  //     hamburger.classList.toggle('open');
  //   });
  // });
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('open');  // メニューを開閉
      hamburger.classList.toggle('open');  // ハンバーガーアイコンをアニメーション
    });
  
    // メニュー項目がクリックされたときにメニューを閉じる
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  });
  
  
  const backToTopButton = document.getElementById('backToTop');

// スクロール時にボタンを表示/非表示
window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    backToTopButton.style.display = "block"; // スクロール位置が100px以上なら表示
  } else {
    backToTopButton.style.display = "none"; // それ以下なら非表示
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const smoothScrollLinks = document.querySelectorAll('nav a[href^="#"]');

  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        console.log(`Scrolling to: ${targetId}`);

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start" // 要素の上端が表示されるようにスクロール
        });
      }
    });
  });
});
