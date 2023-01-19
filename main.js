/*ar more = document.querySelector(".more");
var list = [
  "No, you can not",
  "Stop clicking",
  "Bro, please stop",
  "No way",
  "LMAO",
  "Who are you?",
  "Dude, get some help",
  "Get out",
  "I am tired of this",
  "Do not do that again",
  "I am warning you",
  "S.T.O.P.",
  "System Error!",
  "Server Error!",
  " Reconnecting to the server...",
  "What?"];

const listB = list;

more.addEventListener("click", function() {
  let many = this.getAttribute("many");
  let newText = list[Math.floor(Math.random() * list.length)];

  if (many <= 0) this.innerText = "I am kidding";
  else if (!newText) this.innerText = "More about me", many = -1, list = listB;
  else this.innerText = newText;

  this.setAttribute("many", parseInt(many) + 1);
  list = list.filter(e => e !== newText);
});
*/

function swipeActive() {
  var swiper = new Swiper(".swiper", {
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