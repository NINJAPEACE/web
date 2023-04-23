var swiper;
var current;

var swiperDetails = {};

function swipeActive() {
  swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    initialSlide: 4,
    effect: "coverflow",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    on: {
      realIndexChange: (s) => {
        let arr = {
          "0": "four-personal",
          "1": "three-personal",
          "2": "two-personal",
          "3": "one-personal",
          "4": "main-slide",
          "5": "one-professional",
          "6": "two-professional",
          "7": "three-professional",
          "8": "four-professional",
        }

        let index = arr[s.realIndex];

        let page = document.querySelector(`.swiper-slide.${index}`);

        if (current && current.index !== s.realIndex) {
          current.page.removeAttribute("status");
          page.setAttribute("status", "active");
        }

        current = { index: s.realIndex, page: page };



        /* let elList = [
           { el: "block-item", add: "item", on: ["one", "two", "three", "five"] },
           { el: "round-item", add: "item", on: ["one", "two", "five"] },
           { el: "triangle-item", add: "item", on: ["one", "two", "three", "four", "five"] },
           { el: "logos", add: "item", on: ["one", "two", "three"], timer: { on: ["two"], time: 200 } }
           ]

         for (xy of elList) {
           if (xy.on.includes(index)) {
             addClass(xy, index, s.swipeDirection);
           }
         }*/

      }
    }
  });

  for (swipePage of ["skills", "work", "motto"]) {
    swiperDetails[swipePage] = new Swiper(`.swiper-container-${swipePage}`, {
      slidesPerView: 1,
      spaceBetween: 25,
      direction: "vertical",
      loop: false,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      effect:"flip",
      pagination: {
        el: `.swiper-container-${swipePage} .swiper-pagination-vertical`,
        clickable: true,
        dynamicBullets: true,
      }
    });
  }
}

function addClass(a, b, c) {
  if (a.timer?.on.includes(b)) {
    setTimeout(() => {
      addTo();
    }, a.timer.time)
  } else addTo();

  function addTo() {
    document.querySelector(`.${a.el}`).className = `${a.el} ${a.add} ${b} ${c}`;
  }
}

window.onload = () => {
  swipeActive();

  current = { index: 4, page: document.querySelector(".main-slide") };

  document.querySelectorAll(".item").forEach(e => {
    e.classList.add("one");
  });

  setTimeout(() => {
    document.body.className = null;

    document.querySelector(".main-slide").setAttribute("status", "active");
  }, 1000);
}