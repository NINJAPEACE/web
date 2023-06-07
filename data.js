export { data };

function data() {
  return {
    name: "NINJA PEACE",
    description: "Please choose the way you want to know me.",
    slides: [
      {
        classes: "five-personal",
        anim: "diagonal",
        type: "thanks",
        h1: "Vielen Dank",
        p: "For visiting my personal website. Anyway, if you would like to contact me, check out my social media below. Tschüss!"
      },
      {
        classes: "four-personal",
        anim: "up",
        type: "normal",
        heading: "are $Weird$",
        h3: "Sorry, if my designs",
        p: {
          type: "string",
          content: [
            "Yeah, my designs are weird just like me or.. maybe your relationship?"
            ]
        }
        },
      {
        classes: "three-personal",
        anim: "up",
        type: "normal",
        heading: "Science $Time$",
        h3: "Hold up! It is",
        p: {
          type: "string",
          content: [
            "Let's predict if a guy with first speed as zero want to stop Thanos by hit him with a car.",
            "If his car is actually his grandfather's, and this car has 100 kg mass which can accelerate by 5 m/s and this guy is 100 meters long from Thanos,",
            "then how much time does he need to crash Thanos, and how big is the momentum?"
            ]
        },
        component: "answer",
        href: "https://ninjapeace.vercel.app/science"
        },
      {
        classes: "two-personal",
        anim: "left",
        type: "normal",
        h3: "My current",
        heading: "$Routine$",
        p: {
          type: "object",
          content: [
            "Deutsch Lernen",
            "British English",
            "Story Writing"
            ]
        },
        },
      {
        classes: "one-personal",
        anim: "up",
        type: "normal",
        heading: "I $am$",
        h3: "Oh, hallo!",
        p: {
          type: "string",
          content: [
            "A high-schooler and just a normal human. I like science, math, and psychology."
            ]
        },
        component: "know"
        },
      { classes: "main-slide no-select", anim: "up", type: "main" },
      {
        classes: "one-professional",
        anim: "up",
        type: "normal",
        heading: "I $am$",
        h3: "Who am I?",
        p: {
          type: "string",
          content: [
            "A self-taught programmer and visual designer. I like to code and design, they coloured my life."
            ]
        },
        component: "resume"
        },
      {
        classes: "two-professional",
        anim: "up",
        type: "reverse",
        heading: "Specialist $Creative$",
        h3: " ",
        p: "I ama programmer and UI/UX designer.",
        component: "about"
        },
      {
        classes: "three-professional",
        anim: "right",
        type: "project",
        heading: "My $Works$ and $Creativity$"
        },
      {
        classes: "four-professional",
        anim: "bottom",
        type: "normal",
        heading: "My $Experience$",
        h3: "Amazing journal of",
        p: {
          type: "object",
          content: [
            "Coding Class teacher",
            "Discord Bots Developer",
            "Frontend Web Developer"
            ]
        },
        component: "hire"
        },
      {
        classes: "five-professional",
        anim: "diagonal",
        type: "thanks",
        h1: "Thank You",
        p: "For all honoured people that helped me in every particular things, and thank you for visiting this website!"
      }
      ],
    items: [
      { "class": "block-item item" },
      { "class": "round-item item" }
        ],
    social: [
      { href: "https://instagram.com/ninja_peace", icon: "fa-brands fa-instagram" },
      { href: "https://github.com/NINJAPEACE", icon: "fa-brands fa-github" },
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
      ]
  }
}