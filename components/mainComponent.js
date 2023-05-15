export { hireCard, aboutButton, resumeButton, navButton };

const hireCard = {
  template: `<div class="card hire-card no-select">
                <div class="hire-child">
                  <img src="assets/avatar.jpg" />
                </div>
                <div class="title hire-child">
                  <div>Available for Projects</div>
                  <button class="hire-me">
                    Hire Me
                  </button>
                </div>
                <div class="hire-child">
                  <div class="rounded-status">&nbsp;</div>
                </div>
              </div>`
}

const resumeButton = {
  template: `<button class="resume-button no-select slide-button" type="next"><span>Resume</span><span class='span-icon'><i data-eva="arrow-forward-outline"></i></span></button>`
};

const aboutButton = {
  template: `<button class="about-button no-select slide-button" type="next">
                <span class='span-icon'><i data-eva="arrow-ios-downward-outline"></i></span>
                <span>More about me</span>
              </button>`
}

const navButton = {
  template: `<div class="navigate-button">
                <div class="personal-button slide-button" type="prev">
                  <i class="fa-solid fa-chevron-left"></i>
                  <span>Personal</span>
                </div>
                <div class="professional-button slide-button" type="next">
                  <span>Professional</span>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>`,
  methods: {
    slide() {
      swiper.slidePrev()
    }
  }
}