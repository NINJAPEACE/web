var swiper;
var current;
var swiperDetails = {};

const { createApp } = Vue;

const appEl = document.querySelector('#app');

const app = createApp({
  mounted: function() {
    swipeActive();

    current = { index: 4, page: document.querySelector(".main-slide") };

    document.querySelectorAll(".item").forEach(e => {
      e.classList.add("one");
    });

    setTimeout(() => {
      document.body.className = null;

      document.querySelector(".main-slide").setAttribute("status", "active");
    }, 1000);
  },
  data: function() {
    return {
      name: "NINJA PEACE",
      description: "A normal human but also a self-taught programmer, high school student, and newbie visual designer.",
      items: [
        { "class": "block-item item", width: 69 },
        { "class": "round-item item", width: 69 }
        ],
      social: [
        { href: "https://instagram.com/ninja_peace", icon: "fa-brands fa-instagram" },
        { href: "https://www.youtube.com/@NINJAPEACE95", icon: "fa-brands fa-youtube" },
        { href: "https://github.com/NINJAPEACE", icon: "fa-brands fa-github" },
        { href: "https://open.spotify.com/user/31ci7q5wxxn7kg3b7pdkkndeghjy?si=LGvv_merR8qKZ0Q9PlhiIA", icon: "fa-brands fa-spotify" },
        { href: "https://instagram.com/ninja_peace", icon: "fa-brands fa-discord" }
      ],
      project: [
        {
          id: "DCB",
          title: "Discord-Counting-Bot",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: "github",
          href: "https://github.com/NINJAPEACE/Discord-Counting-Bot"
      },
        {
          id: "DJS-13",
          title: "DiscordJS-v13",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: "github",
          href: "https://github.com/NINJAPEACE/Discordjs-v13"
      }
      ],
      skills: [
        { "h2": "Programming", "p": "Algorithms is everything, it can build your minds and future." },
        { "h2": "Visual Design", "p": "Color presets would colored your life." },
        { "h2": "Language Literature", "p": "Communication with people." }],
      interest: [
        { "h2": "Science and Math", "p": "Do you know why the gravitation is defined as 9,8 m/s²? It's because the gravity." },
        { "h2": "Psychology", "p": "No, I am not a psychopath, that's different." },
        { "h2": "You", "p": "Sorry, I'm just kidding." }],
      activity: [
        { "h2": "Deutsch Lernen", "p": "Ist Deutsch schwer? Nein! Es ist einfach, aber sehr stressig. Und du? Welche Sprachen sprichst du? Ich brauche hilfe für Deutsch Lernen..." },
        { "h2": "Writing a Story", "p": "I like to write a short story, and currently I revise it into a novel. Can you please wait for my books get released?" }],
      quotes: [
        "No one will love you, but you must love everyone.",
        "Learn by yourself, grow with the others, and help all the people.",
        "The biggest enemy is ourselves, not the other people."
        ],
      motto: [
        "Keep it simple.",
        "Learn, Grow, Helps.",
        "Bring the Culture to the Future."
        ]
    }
  },
  methods: {
    show(a) {
      let e = document.querySelector(`.${a}`).children[0].children[0];

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
  console.err(err)
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

        for (xy of elList) {
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