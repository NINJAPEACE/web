export { heading };

const heading = {
  props: ['header'],
  template: `<h1>
  <span v-for="h in header.split('$')"  :class="header.split('$').indexOf(h) % 2 === 1 ? 'blue' : ''">
    {{ h }}
  </span>
  </h1>`
}