import string from "./css.js";

const player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    stylePart: document.querySelector("#stylePart"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.stylePart.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.stylePart.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: () => {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
