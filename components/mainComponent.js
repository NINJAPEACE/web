export { hireCard, aboutButton, resumeButton, navButton, heading };

const hireCard = {
  template: `<div class="card hire-card no-select">
                <div class="hire-child">
                  <img src="assets/avatar.jpg" />
                </div>
                <div class="hire-child">
                  <div class="title">Available for Projects</div>
                  <button class="hire-me">
                    <a href="mailto:ninjapeace95@gmail.com?subject=Hire&body=Can I hire you?">Hire Me</a>
                  </button>
                </div>
                <div class="hire-child">
                  <div class="rounded-status">&nbsp;</div>
                </div>
                <div class="hire-child hire-close">
                 <i data-eva="close-outline" data-eva-fill="#eee"></i>
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
              </div>`
}

const heading = {
  props: ['header'],
  template: `<h1>
  <span v-for="h in header.split('$')"  :class="header.split('$').indexOf(h) % 2 === 1 ? 'blue' : ''">
    {{ h }}
  </span>
  </h1>`
}