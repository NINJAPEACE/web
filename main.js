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
    effect: "slide",
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
          addClass(xy, `s${s.realIndex}`, s.swipeDirection, 1);
        }

      },
      sliderFirstMove: function() {

      }
    }
  });
}

function addClass(a, b, c, remove) {
  if (a.timer?.on.includes(b)) {
    setTimeout(() => {
      addTo();
    }, a.timer.time)
  } else addTo(remove);

  function addTo(remove) {
    if (remove) {
      document.querySelector(`.${a.el}`).className = `${a.el} ${a.add} ${b} ${c}`;
    } else {
      document.querySelector(`.${a.el}`).className += b;
    }
  }
}

window.onload = () => {
  swipeActive();

  current = { index: 4, page: document.querySelector(".main-slide") };

  document.querySelectorAll(".item").forEach(e => {
    e.classList.add("one");
  });

  objectWidth();
  elListing();
  socialListing();
  cardListing();

  setTimeout(() => {
    document.body.className = null;

    document.querySelector(".main-slide").setAttribute("status", "active");
  }, 1000);
}

function objectWidth() {
  let objList = [{ el: ".block-item", width: 69 }, { el: ".round-item", width: 69 }];

  for (item of objList) {
    document.querySelector(item.el).style.width = parseInt(item.width) / 100 * window.innerWidth + "px";
    document.querySelector(item.el).style.height = parseInt(item.width) / 100 * window.innerWidth + "px";
  }
}

function show(e) {
  if (e.children[1].style.display == "flex") {
    e.children[0].style.display = "block";
    e.children[1].style.display = "none";
  } else {
    e.children[0].style.display = "none";
    e.children[1].style.display = "flex";
  }
}

function href(e) {
  let linkList = {
    "Discord-Counting-Bot DCB": "https://github.com/NINJAPEACE/Discord-Counting-Bot",
    "Discordjs-v13 DJS13": "https://github.com/NINJAPEACE/Discordjs-v13"
  }

  for (x in linkList) {
    if (x.includes(e.children[0].innerText) || x.includes(e.id)) {
      window.location.href = linkList[x];
    }
  }

}

function socialListing() {
  let social = document.querySelectorAll(".social");

  let list = data.getSocial();

  if (social) {
    for (scEl of social) {
      let strSocial = '';
      for (sc of list) {
        strSocial += `<a href="${sc.href}"><i class="fa-brands fa-${sc.icon}"></i></a>`;
      }

      scEl.innerHTML = strSocial;
    }

  }
}

function elListing() {
  let parent = document.querySelectorAll(".hero-text");

  for (slide of parent) {
    if (slide.children[1]?.id) {
      let list = data.getList(slide.children[1].id);

      let strChild = '';

      if (list) {
        for (div of list.list) {
          strChild += `<div><h2>${div.h2}</h2><p>${div.p}</p></div>`
        }

        slide.children[1].innerHTML = strChild;
      }
    }
  }
}

function cardListing() {
  let cardEl = document.querySelector(".card-list");

  let cardList = data.getProject();

  if (cardEl && cardList) {
    let strCard = '';

    for (el of cardList) {
      strCard += `<div class="card no-select" onclick="href(this)" id="${el.id}"><div class="title">${el.title}</div><div class="description paragraph">${el.desc.length >= 30 ? el.desc.substr(0,30) + "..." : el.desc}</div><div class="complement"><span><i class="fa-brands fa-${el.icon}"></i></span></div></div>`;
    }

    cardEl.innerHTML += strCard;
  }
}

const data = {
  getList: function(id) {
    const dataList = [
      {
        id: "skills",
        list: [
          { "h2": "Programming", "p": "Algorithms is everything, it can build your minds and future." },
          { "h2": "Visual Design", "p": "Color presets would colored your life." },
          { "h2": "Language Literature", "p": "Communication with people." }]
      },
      {
        id: "interest",
        list: [
          { "h2": "Science and Math", "p": "Do you know why the gravitation is defined as 9,8 m/s²? It's because the gravity." },
          { "h2": "Psychology", "p": "No, I am not a psychopath, that's different." },
          { "h2": "You", "p": "Sorry, I'm just kidding." }]
      },
      {
        id: "activity",
        list: [
          { "h2": "Deutsch Lernen", "p": "Ist Deutsch schwer? Nein! Es ist einfach, aber sehr stressig. Und du? Welche Sprachen sprichst du? Ich brauche hilfe für Deutsch Lernen..." },
          { "h2": "Writing a Story", "p": "I like to write a short story, and currently I revise it into a novel. Can you please wait for my books get released?" }]
      }
    ];
    return dataList.find(i => i.id == id);
  },
  getSocial: function() {
    const socialList = [
      { href: "https://instagram.com/ninja_peace", icon: "instagram" },
      { href: "https://www.youtube.com/@NINJAPEACE95", icon: "youtube" },
      { href: "https://github.com/NINJAPEACE", icon: "github" },
      { href: "https://instagram.com/ninja_peace", icon: "spotify" },
      { href: "https://instagram.com/ninja_peace", icon: "discord" }
      ];

    return socialList;
  },
  getProject: function() {
    const projectList = [
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
      ]

    return projectList;
  }
}