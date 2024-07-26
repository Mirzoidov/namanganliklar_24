'use strict';

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('#popup-close');
const cards = document.querySelectorAll('.latest-news-item');

function modal(){
    popup.style.display = 'flex';
    setTimeout(close, 10000); // Close the popup after 10 seconds
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            close();
        }
    });
};

function close() {
    popup.style.display = 'none';
};

const navAnim = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu");
    const navLinks = nav.querySelectorAll(".menu li");
  
    // Toggle nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      //Animate Items
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkMove 0.5s ease forwards
              ${index / 7 + 0.35}s`;
        }
      });
  
      // Animated Burger
      burger.classList.toggle("toggle")
    });
  };
  
  navAnim();

  cards.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      const trgt =  e.target.classList.contains('latest-news-item-content') ? e.target.parentNode.closest('h5')  : e.target ;
      if(trgt) {
            window.location.href = 'news.html';
        }
  })
  });

