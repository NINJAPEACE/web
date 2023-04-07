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
    }, 
    on: {
      slideChange: (s) => {
        let arr = {
          "0": "one",
          "1": "two",
          "2": "three",
          "3": "four",
          "4": "five"
        }
        
        let page = document.querySelector(`.${arr[s.realIndex]}`);

        //removing the latest page
        if (current.index !== s.realIndex) {
          current.page.removeAttribute("status");
        }
        
        page.setAttribute("status", "active");
        current = { index: s.realIndex, page: page };
      }
    }
  });
}

swipeActive();

var current = { index: 0, page: document.querySelector(".one") };

document.querySelector(".one").setAttribute("status", "active")

/*
swiper.on("slideChange", function() {
  
  console.log(swiper.activeIndex)
  
  let index = swiper.activeIndex == 0 ? 6 : swiper.activeIndex == 7 ? 1 : swiper.activeIndex;

  let arr = {
    "0": "one",
    "1": "two",
    "2": "three",
    "3": "four",
    "4": "five",
    "5": "six"
  }

  let page = document.querySelector(`.${arr[index]}`);

  //removing the latest page
  if (current.index !== index) {
    current.page.removeAttribute("status");
  }

  page.setAttribute("status", "active");
  current = { index: index, page: page };

  setTimeout(() => {
    document.querySelectorAll(".item").forEach(e => e.removeAttribute("s"));
  }, 500);
});

swiper.on("sliderMove", function(swiper, event) {
  document.querySelectorAll(".item").forEach(e => e.setAttribute("s", "onchange"));
});*/

//alert("WARNING! \n\nThis Website is currently under development, all features here hasn't responsible by the developer.");