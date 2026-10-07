function go(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}


// ---------------------------------
// RUNAWAY "NO" BUTTON 😈
// ---------------------------------

const no = document.getElementById("noBtn");
const noText = document.getElementById("noText");

let escapes = 0;

const excuses = [
  "HEY 😭",
  "wrong button kuchu puchu",
  "nice try 😤",
  "button said NO to no",
  "Aniket bribed this button 🍪"
];

function runAway() {

  escapes++;

  const x = (Math.random() * 220) - 110;
  const y = (Math.random() * 100) - 50;

  no.style.transform =
    `translate(${x}px, ${y}px) rotate(${(Math.random() * 18) - 9}deg)`;

  noText.textContent =
    excuses[Math.min(escapes - 1, excuses.length - 1)];
}


// Desktop
no.addEventListener("mouseenter", runAway);


// iPhone / mobile
no.addEventListener("touchstart", (e) => {

  e.preventDefault();

  runAway();

});


no.addEventListener("click", runAway);


// ---------------------------------
// YES BUTTON 💗
// ---------------------------------

function forgiven() {

  go("finale");

  setTimeout(celebrate, 550);

}


// ---------------------------------
// ANIKET BONK CENTRE 🪄
// ---------------------------------

let hits = 0;

let anger = 100;

const doll = document.getElementById("doll");

const ouch = document.getElementById("ouch");


const cries = [

  "OUCH 😭",

  "SORRYYY 🥺",

  "MERCY 💀",

  "I DESERVED THAT",

  "KUCHU PUCHU PLS 😭",

  "MY LAST BRAIN CELL!"

];


document
  .getElementById("stick")
  .addEventListener("click", () => {

    hits++;

    anger = Math.max(
      0,
      100 - hits * 10
    );


    document
      .getElementById("hits")
      .textContent = hits;


    document
      .getElementById("anger")
      .textContent = anger + "%";


    document
      .getElementById("meterFill")
      .style.width = anger + "%";


    ouch.textContent =
      cries[(hits - 1) % cries.length];


    doll.classList.remove("hit");

    ouch.classList.remove("showouch");


    void doll.offsetWidth;


    doll.classList.add("hit");

    ouch.classList.add("showouch");


    // After 10 bonks 😂

    if (hits >= 10) {

      document
        .getElementById("finalBtn")
        .classList.remove("hidden");

    }

  });


// ---------------------------------
// FINAL LOVE EXPLOSION 💗🌸✨
// ---------------------------------

function celebrate() {

  document
    .getElementById("loveMsg")
    .textContent =
      "YAYYY! 💗 apology accepted (hopefully)";


  const bits = [

    "💗",

    "🌸",

    "✨",

    "🌷",

    "💖"

  ];


  for (let i = 0; i < 55; i++) {

    const e =
      document.createElement("span");


    e.className = "confetti";


    e.textContent =
      bits[i % bits.length];


    e.style.left = "50vw";

    e.style.top = "50vh";


    e.style.setProperty(
      "--x",
      `${(Math.random() - .5) * 900}px`
    );


    e.style.setProperty(
      "--y",
      `${(Math.random() - .5) * 700}px`
    );


    document.body.appendChild(e);


    setTimeout(() => {

      e.remove();

    }, 1900);

  }

}


// ---------------------------------
// FALLING FLOWERS 🌸
// ---------------------------------

function petal() {

  const e =
    document.createElement("span");


  e.className = "petal";


  const petals = [

    "🌸",

    "🌷",

    "💗",

    "✨"

  ];


  e.textContent =
    petals[
      Math.floor(
        Math.random() * petals.length
      )
    ];


  e.style.left =
    Math.random() * 100 + "vw";


  e.style.fontSize =
    (12 + Math.random() * 16) + "px";


  e.style.animationDuration =
    (5 + Math.random() * 5) + "s";


  document.body.appendChild(e);


  setTimeout(() => {

    e.remove();

  }, 10000);

}


setInterval(petal, 650);
