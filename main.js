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
        
        //console.log(s.swipeDirection)

        let page = document.querySelector(`.swiper-slide.${index}`);

        if (current.index !== s.realIndex) current.page.removeAttribute("status");
        page.setAttribute("status", "active");

        current = { index: s.realIndex, page: page };

        let elList = [
          { el: "block-item", add: "item", on: ["one", "two", "three", "five"] },
          { el: "round-item", add: "item", on: ["one", "two", "five"] },
          { el: "triangle-item", add: "item", on: ["one", "two", "three", "four", "five"] },
          { el: "logos", add: "item", on: ["one", "two", "three"], timer: { on: ["two"], time: 200 } },
          { el: "spotify", add: " contact item", on: ["three", "four", "five"] },
          { el: "instagram", add: "contact item", on: ["three", "four", "five"], timer: { on: ["three", "four", "five"], time: 100 } },
          { el: "github", add: "contact item", on: ["three", "four", "five"], timer: { on: ["three", "four", "five"], time: 200 } },
          { el: "youtube", add: "contact item", on: ["three", "four", "five"], timer: { on: ["three", "four", "five"], time: 300 } },
          { el: "discord", add: "contact item", on: ["three", "four", "five"], timer: { on: ["three", "four", "five"], time: 400 } },
          ]

        for (xy of elList) {
          if (xy.on.includes(index)) {
            addClass(xy, index, s.swipeDirection);
          }
        }

      }
    }
  });
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

  current = { index: 0, page: document.querySelector(".one") };

  document.querySelector(".one").setAttribute("status", "active");

  document.querySelectorAll(".item").forEach(e => {
    e.classList.add("one");
  });
  
  setTimeout(() => {
    document.body.className = null;
  }, 1000);
}