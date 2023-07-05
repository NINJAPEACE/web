var current, swiper;
var swiperDetails = {};

const { createApp } = Vue;

const appEl = document.querySelector('#app');

import { thanks, mainPage, project, normal, reverse } from "./components/mainComponent.js";
import { data } from "./data.js";

tailwind.config = {
  content: [
    './index.html',
  ],
}

const app = createApp({
  mounted: async () => {

    let arr = [];

    for (let x of data().slides) {
      arr.push(x.nav);
    }

    swipeActive(arr);

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

    document.getElementById("overflow").setAttribute("data-status", "loaded");

    document.querySelector(".main-slide").setAttribute("status", "active");
  },
  data: data,
  components: {
    thanks,
    mainPage,
    project,
    normal,
    reverse
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

      [[sidebar, "status", "active"], [sidebarBtn, "data-click", "true"]].forEach(async (e) => {
        this.setAttr(e)
      });
    }
  }
});

app.mount(appEl);

app.config.errorHandler = (err) => {
  console.log(err)
}

function swipeActive(navArray) {
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
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: {
      invert: true,
    },
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

        let y = document.querySelector(".navigation").children;

        y[0].setAttribute("data-status", navArray[s.realIndex] == "left" || navArray[s.realIndex] == "both" ? "active" : "");
        y[1].setAttribute("data-status", navArray[s.realIndex] == "right" || navArray[s.realIndex] == "both" ? "active" : "");

        current = { index: s.realIndex, page: page };

        let parallax = [
          "block-item",
          "round-item",
          "trapesium-item"
          ];

        setTimeout(() => {
          for (let xy of parallax) {
            document.getElementsByClassName(xy)[0].setAttribute("page", `s${s.realIndex}`)
          }
        }, 100)

      }
    }
  });
}