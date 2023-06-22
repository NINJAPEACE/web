export { aboutButton, resumeButton, knowButton, navButton, answerButton, heading };

const resumeButton = {
  template: `<button class="resume-button no-select slide-button" type="next">
  <span>Resume</span>
  <span class='span-icon'><i data-eva="arrow-forward-outline"></i></span>
  </button>`
}

const aboutButton = {
  template: `<button class="about-button no-select slide-button" type="next">
                <span class='span-icon'><i data-eva="arrow-ios-downward-outline"></i></span>
                <span>More about me</span>
              </button>`
}

const knowButton = {
  template: `<button class="know-button no-select slide-button" type="prev"><span>Know me more</span></button>`
}

const answerButton = {
  template: `<button class="answer-button no-select slide-button" type="href"><span>Check the answer</span></button>`
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