export { data };

function data() {
  return {
    name: "NINJA PEACE",
    description: "Please choose the way you want to know me.",
    slides: [
      { classes: "four-personal", anim: "diagonal", type: "normal", subtype: "thanks" },
      {
        classes: "three-personal",
        anim: "bottom",
        type: "normal",
        subtype: "qm",
        heading: "Quotes",
        list: [
                "No one will love you, but you must love everyone.",
                "Learn by yourself, grow with the others, and help all the people.",
                "The biggest enemy is ourselves, not the other people."
                ]
        },
      {
        classes: "two-personal",
        anim: "left",
        type: "click",
        heading: "My $current$ routine",
        p: "Click to see it.",
        list: [
          { "h2": "Deutsch Lernen", "p": "Ist Deutsch schwer? Nein! Es ist einfach, aber sehr stressig. Und du? Welche Sprachen sprichst du? Ich brauche hilfe für Deutsch Lernen..." },
          { "h2": "Writing a Story", "p": "I like to write a short story, and currently I revise it into a novel. Can you please wait for my books get released?" }]
        },
      {
        classes: "one-personal",
        anim: "up",
        type: "click",
        heading: "$Things$ that I like",
        p: "Click here to view.",
        list: [
          { "h2": "Science and Math", "p": "Do you know why the gravitation is defined as 9,8 m/s²? It's because the gravity." },
          { "h2": "Psychology", "p": "No, I am not a psychopath, that's different." },
          { "h2": "You", "p": "Sorry, I'm just kidding." }]
        },
      { classes: "main-slide no-select", anim: "up", type: "normal", subtype: "main" },
      {
        classes: "one-professional",
        anim: "up",
        type: "normal",
        subtype: "pro",
        heading: "I $am$",
        h3: "Who am I?",
        p: {
          type: "string",
          content: "A self-taught programmer and visual designer. I like to code and design, they coloured my life."
        },
        component: "resume"
        },
      {
        classes: "two-professional",
        anim: "up",
        type: "normal",
        subtype: "pro-rev",
        heading: "Specialist $Creative$",
        h3: "My things",
        p: "I am a freelance Programmer and UI/UX designer with a background of functional and web programming.",
        component: "about"
        },
      {
        classes: "three-professional",
        anim: "right",
        type: "normal",
        subtype: "project",
        heading: "My $Works$ and $Creativity$"
        },
      {
        classes: "four-professional",
        anim: "bottom",
        type: "normal",
        subtype: "pro",
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
      { classes: "five-professional", anim: "diagonal", type: "normal", subtype: "thanks" }
      ],
    items: [
      { "class": "block-item item", width: 69 },
      { "class": "round-item item", width: 69 }
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