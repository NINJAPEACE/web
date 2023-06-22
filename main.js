var current, swiper;
var swiperDetails = {};

const { createApp } = Vue;

const appEl = document.querySelector('#app');

import { resumeButton, aboutButton, knowButton, answerButton, navButton, heading } from "./components/mainComponent.js";
import { data } from "./data.js";

const app = createApp({
  mounted: async () => {

    swipeActive((a, b, remove = 1) => {
      if (remove) {
        document.querySelector(`.${a}`).className = `${a} item ${b}`;
      }
    });

    eva.replace();

    current = { index: 5, page: document.querySelector(".main-slide") };

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

    document.body.className = "";

    document.querySelector(".main-slide").setAttribute("status", "active");
  },
  data: data,
  components: {
    resumeButton,
    knowButton,
    navButton,
    aboutButton,
    answerButton,
    heading
  },
  methods: {
    match(a, b) {
      if (a == b) return 1;
      else return 0;
    },
    include(a, b) {
      if (a.includes(b)) return 1;
      else return 0;
    },
    setAttr(obj) {
      if (!obj) return;

      if (obj[0].getAttribute(obj[1])) obj[0].removeAttribute(obj[1]);
      else obj[0].setAttribute(obj[1], obj[2] || "");
    },
    href(URL) {
      if (!URL.includes("http")) return;
      else window.location.href = URL;
    },
    sidebar(e) {
      let sidebar = document.querySelector(".sidebar");
      let sidebarBtn = document.querySelector(".sidebar-button");

      [[sidebar, "status", "active"], [sidebarBtn, "click", "true"]].forEach(async (e) => {
        this.setAttr(e)
      });
    }
  }
});

app.mount(appEl);

app.config.errorHandler = (err) => {
  console.log(err)
}

function swipeActive(addClass) {
  if (!Swiper) return window.location.reload();

  swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    initialSlide: 5,
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

        if (!index) return;

        let page = document.querySelector(`.${index}`);

        if (current && current.index !== s.realIndex) {
          current.page.removeAttribute("status");
          page.setAttribute("status", "active")
        }

        current = { index: s.realIndex, page: page };

        let parallax = [
          "block-item",
          "round-item",
          "trapesium-item"
          ];

        setTimeout(() => {
          for (let xy of parallax) {
            addClass(xy, `s${s.realIndex}`);
          }
        }, 100)

      }
    }
  });
}