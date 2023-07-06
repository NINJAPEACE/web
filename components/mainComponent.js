export { thanks, mainPage, project, normal, reverse };

const resumeButton = {
  template: `<button class="group/resume button no-select slide-button gap-3 hover:p-5 hover:shadow-[0_0_5px_#2e8fcc] hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-700" type="next">
  <span>Resume</span>
  <span class='duration-500 group-hover/resume:rotate-[-90deg]'><i data-eva="arrow-ios-downward"></i></span>
  </button>`
}

const aboutButton = {
  template: `<button class="group/about button no-select slide-button text-[#000] py-3 px-4 rounded-3xl bg-stone-100 hover:shadow-[0_0_5px_#2e8fcc] hover:bg-transparent hover:text-[#2e8fcc]" type="next">
      More about m<span class="duration-700 origin-bottom group-hover/about:rotate-[360deg]">e</span>
  </button>`
}

const knowButton = {
  template: `<button class="know-button button no-select slide-button group/know" type="prev">
  <span class="p-4 duration-500 bg-gradient-to-r from-[#2e8fcc] to-[#48B3F6] rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md shadow-[0_0_5px_#2e8fcc] group-hover/know:from-[rgb(255,255,255,.1)] group-hover/know:to-[rgb(255,255,255,.2)] group-hover/know:shadow-[0_0_5px_#787878] group-hover/know:translate-x-[-2rem] group-hover/know:rounded-tl-md group-hover/know:rounded-tr-3xl group-hover/know:rounded-bl-3xl group-hover/know:rounded-br-md">Know me more</span>
  </button>`
}

const answerButton = {
  template: `<button class="answer-button button no-select slide-button group/answer" type="href">
  <span class="p-3 rounded-t-2xl rounded-b-sm shadow-[0_0_5px_#2e8fcc] bg-gradient-to-r from-[#2e8fcc] via-[#48B3F6] to-[#2e8fcc] duration-500 group-hover/answer:from-[rgb(255,255,255,.2)] group-hover/answer:via-[rgb(255,255,255,.1)] group-hover/answer:to-[rgb(255,255,255,.2)] group-hover/answer:shadow-[0_0_5px_#787878] group-hover/answer:rounded-t-sm group-hover/answer:rounded-b-2xl">Check the answer</span>
  </button>`
}

const navButton = {
  template: `<div class="flex w-full justify-between gap-4 text-[#eee] mt-4 z-10">
  <div v-for="button in [{name: 'Personal', type: 'prev', direction: 'left', classes: 'personal-button hover:translate-x-[-2rem]'}, {name: 'Professional', type: 'next', direction: 'right', classes: 'professional-button hover:translate-x-8'}]" :class="['slide-button flex flex-col gap-4 duration-700 text-center justify-center items-center ' + button.classes]" :type="button.type">
      <i data-eva="arrow-ios-back" data-eva-fill="#eee" v-if="button.type == 'prev'"></i>
      <span>{{ button.name }}</span>
      <i data-eva="arrow-ios-forward" data-eva-fill="#eee" v-if="button.type == 'next'"></i>
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

const thanks = {
  props: ["slide", "social"],
  template: `<h1>
                  {{ slide.h1 }}
                </h1>
                <p>
                  {{ slide.p }}
                </p>
                <div class="text-[#eee] mt-20">
                  Follow Me
                </div>
                <div class="flex flex-col">
                  <div class="social mt-8">
                    <a v-for="element in social" :href="element.href" class="w-12 h-12 rounded-[50%] inline-flex items-center justify-center text-base text-[#eee] cursor-pointer mt-2 mr-3 mb-9 ml-3 bg-[rgb(255, 255, 255, 0.1)] shadow-lg duration-500 hover:scale-110 hover:z-10 hover:shadow-[0_0_5px_#fff]">
                      <i :class="element.icon"></i>
                    </a>
                  </div>
                  <div class="social">
                    <a class="email" href="mailto:ninjapeace95@gmail.com?subject=My Subject&body=What's up?">
                      <span class="p-4 text-[#fff] bg-[rgb(255, 255, 255, .1)] rounded-2xl shadow-2xl duration-500 hover:scale-110 hover:z-10 hover:shadow-[0_0_5px_#fff]">ninjapeace95@gmail.com
                      </span>
                    </a>
                  </div>
                </div>`
}

const mainPage = {
  props: ["sidebar", "name", "description"],
  components: {
    navButton
  },
  template: `<button class="sidebar-button w-4 h-12 inline-block bg-transparent rounded-[30px] border-2 border-solid border-[#2e8fcc] leading-snug absolute top-0 right-[5%] z-10 duration-700 data-[click=true]:rotate-180 data-[click=true]:bg-[#2e8fcc]" @click="sidebar">
                  &nbsp;
                </button>
                <div class="hi-there">
                  <h3>Hi, there!</h3>
                  <h1>
                    I am&nbsp;
                    <span class="blue">{{ name }}</span>
                  </h1>
                  <p class="h3">
                    {{ description }}
                  </p>
                </div>
                <nav-button></nav-button>`
}

const project = {
  props: ["slide", "href", "project"],
  components: {
    heading
  },
  template: `<heading :header="slide.heading"></heading>
                <div v-for="el in project" class="card no-select flex flex-col p-4 rounded-2xl shadow-2xl bg-[rgb(255, 255, 255, .1)] backdrop-blur my-3.5 duration-500 hover:scale-110 hover:z-10 hover:shadow-[0_0_5px_#fff]" @click="href(el.href)">
                  <div class="text-[#eee] font-bold">
                    {{ el.title }}
                  </div>
                  <div class="text-[#D6D6D6] paragraph">
                    {{ el.desc.length >= 30 ? el.desc.substr(0,30) + "..." : el.desc }}
                  </div>
                  <div class="text-[#A6A6A6]">
                    <span>
                      <i :class="['fa-brands fa-' + el.icon]">
                      </i>
                    </span>
                  </div>
                </div>`
}

const normal = {
  props: ["slide", "match", "href"],
  components: {
    resumeButton,
    knowButton,
    answerButton,
    heading
  },
  template: `<h3>{{ slide.h3 }}</h3>
<heading :header="slide.heading"></heading>

<div v-if="match(slide.p.type, 'string')">
  <p v-for="p in slide.p.content">
    {{ slide.p.content.indexOf(p) == 1 ? '...' : slide.p.content.indexOf(p) == 0 ? slide.p.content.find(e => e == p) : "" }}
  </p>
</div>

<div v-if="match(slide.p.type, 'object')" class="content-parent flex flex-col justify-evenly duration-500">

  <div v-for="s in slide.p.content" class="content-list">
    <div v-if="slide.p.content.indexOf(s) % 2 == 1"></div>

    <div v-if="slide.p.content.indexOf(s) % 2 == 1">
      <div class="rounders"></div>
      <div class="line"></div>
    </div>

    <div :style="slide.p.content.indexOf(s) % 2 == 0 ? ['text-align:right;'] : ['text-align:left;']">
      <div class="text-[#eee] text-base">{{ s }}</div>
    </div>

    <div v-if="slide.p.content.indexOf(s) % 2 == 0">
      <div class="rounders"></div>
      <div class="line" v-if="slide.p.content.indexOf(s) !== (slide.p.content.length-1)"></div>
    </div>

  </div>

</div>


<resume-button v-if="match(slide.component, 'resume')"></resume-button>
<know-button v-if="match(slide.component, 'know')"></know-button>
<answer-button v-if="match(slide.component, 'answer')" @click="href('h')"></answer-button>`
}

const reverse = {
  props: ["slide", "match"],
  components: {
    heading,
    aboutButton
  },
  template: `<div class="hi-there">
                  <p>{{ slide.p }}</p>
                  <heading :header="slide.heading"></heading>
                  <h3>{{ slide.h3 }}</h3>

                  <about-button v-if="match(slide.component, 'about')"></about-button>
                </div>`
}