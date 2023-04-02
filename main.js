var swiper;

function swipeActive() {
  swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
}

swipeActive();

var current = { index: 1, page: document.querySelector(".one") };

document.querySelector(".one").setAttribute("status", "active")

swiper.on("slideChange", function() {

  let arr = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six"
  }

  let page = document.querySelector(`.${arr[swiper.activeIndex]}`);

  //removing the latest page
  if (current.index !== swiper.activeIndex) {
    current.page.removeAttribute("status");
  }

  page.setAttribute("status", "active");
  current = { index: swiper.activeIndex, page: page };
  
  document.querySelectorAll(".item").forEach(e => e.removeAttribute("s"));
});

swiper.on("sliderMove", function(swiper, event) {
  document.querySelectorAll(".item").forEach(e => e.setAttribute("s", "onchange"));
});