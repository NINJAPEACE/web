var swiper;
var current;

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
    },
    on: {
      realIndexChange: (s) => {
        let arr = {
          "0": "one",
          "1": "two",
          "2": "three",
          "3": "four",
          "4": "five"
        }

        let index = arr[s.realIndex];

        let page = document.querySelector(`.swiper-slide.${index}`);

        if (current.index !== s.realIndex) current.page.removeAttribute("status");
        page.setAttribute("status", "active");

        current = { index: s.realIndex, page: page };

        let elList = [
          { el: "block-item", add: "item", on: ["one", "two"] },
          { el: "round-item", add: "item", on: ["one", "two"] },
          { el: "logos", add: "item", on: ["one", "two"], timer: { on: "two", time: 200 } }
          ]

        for (xy of elList) {
          if (xy.on.includes(index)) {
            addClass(xy, index);
          }
        }

      }
    }
  });
}

function addClass(a, b) {
  if (a.timer?.on == b) {
    setTimeout(() => {
      addTo();
    }, a.timer.time)
  } else addTo();

  function addTo() {
    document.querySelector(`.${a.el}`).className = `${a.el} ${a.add} ${b}`;
  }
}

window.onload = () => {
  swipeActive();

  current = { index: 0, page: document.querySelector(".one") };

  document.querySelector(".one").setAttribute("status", "active");

  document.querySelectorAll(".item").forEach(e => {
    e.classList.add("one");
  });
  
  setTimeout(() => {
    document.body.className = null;
  }, 1000);
}