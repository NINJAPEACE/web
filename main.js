var swiper;
var current;
var swiperDetails = {};

const { createApp } = Vue;

const appEl = document.querySelector('#app');

import { hireCard, resumeButton, aboutButton, navButton } from "./components/mainComponent.js";
import { heading } from "./components/heading.js";
import { data } from "./data.js";

const app = createApp({
  mounted: function() {
    swipeActive();
    eva.replace();

    current = { index: 4, page: document.querySelector(".main-slide") };

    //ITEM DETAILS
    document.querySelectorAll(".item").forEach(e => {
      e.classList.add("one");
    });

    document.querySelectorAll(".slide-button").forEach(y => {

      let attr = y.getAttribute("type") ? toUpper(y.getAttribute("type")) : 0;

      function toUpper(str) {
        if (!str || typeof str !== "string") return;
        return str[0].toUpperCase() + str.substr(1, str.length - 1);
      }

      if (swiper["slide" + attr]) {
        y.addEventListener("click", () => swiper["slide" + attr]())
      }

    });

    setTimeout(() => {
      document.body.className = null;

      document.querySelector(".main-slide").setAttribute("status", "active");
    }, 1000);
  },
  data: data,
  components: {
    hireCard,
    resumeButton,
    navButton,
    aboutButton,
    heading
  },
  methods: {
    show(a) {
      let e = document.querySelector(`.${a}`);

      if (!e) return;

      e = e.children[0].children[0];

      if (e.children[1].style.display == "flex") {
        e.children[0].style.display = "block";
        e.children[1].style.display = "none";
      } else {
        e.children[0].style.display = "none";
        e.children[1].style.display = "flex";
      }
    },
    href(URL) {
      if (!URL.includes("http")) return;

      window.location.href = URL;
    },
    sidebar() {
      let sidebar = document.querySelector(".sidebar");

      if (sidebar.getAttribute("status")) {
        sidebar.removeAttribute("status");
      } else {
        sidebar.setAttribute("status", "active");
      }
    }
  }
});

app.mount(appEl);

app.config.errorHandler = (err) => {
  console.log(err)
}

function swipeActive() {
  swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    initialSlide: 4,
    effect: "slide",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    on: {
      realIndexChange: (s) => {
        if (!s) return;

        let index = document.querySelector(".swiper-wrapper").children[s.realIndex].classList[2];

        if (s == 8 || !index) return;

        let page = document.querySelector(`.${index}`);

        if (current && current.index !== s.realIndex) {
          current.page.removeAttribute("status");
          page.setAttribute("status", "active");
        }

        current = { index: s.realIndex, page: page };

        let elList = [
          { el: "block-item", add: "item" },
          { el: "round-item", add: "item" }
           ]

        for (let xy of elList) {
          addClass(xy, `s${s.realIndex}`, 1);
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
  } else addTo(c);

  function addTo(remove) {
    if (remove) {
      document.querySelector(`.${a.el}`).className = `${a.el} ${a.add} ${b} ${c}`;
    } else {
      document.querySelector(`.${a.el}`).className += b;
    }
  }
}