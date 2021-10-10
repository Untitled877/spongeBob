(function () {
  const $5d831966b3de65ac36f8abdb1225de87$export$default = `* {
    margin:0; padding:0;
    box-sizing: border-box;
}
*::before,*::after {
    box-sizing: border-box;
}
body {
    background: #FFFF00;
}
.skin {
    position: relative;
}
.spot {
    background: #B9A300;
    position: absolute;
}

.spot.spot1 {
    width:120px;
    height:210px;
    border-radius: 120px/210px;
    top: 15px;
    left: 20px;
    transform: rotate(-15deg);
}

.spot.spot2 {
    width:60px;
    height:110px;
    border-radius: 60px/110px;
    top: 230px;
    left: 30px;
    transform: rotate(-15deg);

}
.spot.spot3 {
    width:60px;
    height:110px;
    border-radius: 60px/110px;
    top:500px;
    left: 40px;
}
.spot.spot4 {
    width:120px;
    height:180px;
    border-radius: 120px/180px;
    top:530px;
    left: 230px;
}
.spot.spot5 {
    width:40px;
    height:80px;
    border-radius: 40px/80px;
    top: 30px;
    right: 20px;
    transform: rotate(-15deg);
}
.spot.spot6 {
    width:130px;
    height:160px;
    border-radius: 130px/160px;
    top: 400px;
    right: 70px;
    transform: rotate(15deg);
}
.spot.spot7 {
    width:80px;
    height:100px;
    border-radius: 80px/100px;
    top: 580px;
    right: 200px;
    transform: rotate(15deg);
}

.lash {
    height: 100px;
    width: 14px;
    background: black;
    border: none;
    position: absolute;
    left: 50%;

}
#leftlash1 {
    margin-top:100px;
    margin-left: -150px;
}
#leftlash2 {
    margin-top:110px;
    margin-left: -195px;
    transform: rotate(-30deg);
}
#leftlash3 {
    margin-top:110px;
    margin-left: -105px;
    transform: rotate(30deg);
}
#rightlash1 {
    margin-top:100px;
    margin-left: 140px;
}
#rightlash2 {
    margin-top:110px;
    margin-left: 90px;
    transform: rotate(-30deg);
}
#rightlash3 {
    margin-top:110px;
    margin-left: 190px;
    transform: rotate(30deg);
}
.leftEye, .rightEye {
    border: 10px solid black;
    width: 270px;
    height: 270px;
    border-radius: 50%;
    background: #FFFFFF;
    position: absolute;
    top: 150px;
    left: 50%;
}
.leftEye {
    margin-left: -270px;
}

.eyeball {
    width: 120px;
    height: 120px;
    border: 10px solid black;
    border-radius: 50%;
    background: #48CAFE;
}
.eyeball::before {
    content: '';
    display: block;
    width: 70px;
    height: 70px;
    border: 10px solid black;
    border-radius: 50%;
    background: black;
    margin: 15px;
}
#eyeballLeft {
    margin-top: 65px;
    transform: translateX(100px);
}
#eyeballRight {
    margin-top: 65px;
    transform: translateX(30px);
}
#eyeballLeft:hover {
    transform: translateX(130px);
}

#eyeballRight:hover {
    transform: translateX(0px);
}
.nose {
    border:solid black;
    border-width: 10px 10px 0 10px;
    background: #FFFF00;
    width: 120px;
    height: 160px;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    margin-top:300px;
    border-radius: 50% 50% 60% 60%;
}
.cheek {
    border: solid #E72D16;
    border-width: 10px 10px 0 10px;
    width: 110px;
    height:100px;
    border-radius: 50%;
    position: absolute;
    background: #FFFF00;
    position: absolute;
    left:50%;
}
.cheek > .dot {
    border: 1px solid #E72D16;
    width: 12px;
    height: 12px;
    background: #E72D16;
    border-radius: 50%;
}
.cheek > .dot.dot1 {
    margin-left: 15px;
    margin-top: 20px;
}
.cheek > .dot.dot2 {
    margin-left: 53px;
    margin-top: -18px;
}

.cheek > .dot.dot3 {
    margin-left: 40px;
    margin-top: 12px;
}
#leftCheek {
    margin-left: -250px;
    margin-top: 360px;
    transform: rotate(-15deg);
}

#rightCheek {
    margin-left: 140px;
    margin-top: 360px;
    transform: rotate(15deg);
}
.mouth {
    width: 450px;
    height: 200px;
    border: 10px solid black;
    border-radius: 0 0 100% 100%;
    position: absolute;
    left: 50%;
    margin-left: -225px;
    margin-top: 453px;
    background: rgb(77, 0, 10);
    transition: all 0.2s ease-in-out;
    overflow: hidden;
}
.mouth:hover {
    height: 0;
}
.tooth {
    width: 90px;
    height: 100px;
    border: 10px solid black;
    background: #FFFFFF;
    position: absolute;
    top: -10px;
}
.tooth.leftTooth {
    left: 120px;
    transform: rotate(2deg);
}
.tooth.rightTooth {
    left: 220px;
    transform: rotate(-2deg);
}
.tongue {
    border: none;
    width:100px;
    height: 100px;
    border-radius: 100%;
    background: #F89EA7;
    position: absolute;
    left: 50%;
    border:7px solid black;
}
.tongue.yuan1 {
    margin-left: -80px;
    top: 130px;
}
.tongue.yuan2 {
    margin-left: -20px;
    top: 130px;
}
.hidden {
    width: 80px;
    height: 68px;
    position: absolute;
    left: 180px;
    top: 145px;
    background: #F89EA7;
}
`;
  const $5bc044ba9da697600edd15cbf14e2cab$var$player = {
    id: undefined,
    n: 1,
    time: 100,
    ui: {
      demo: document.querySelector("#demo"),
      stylePart: document.querySelector("#stylePart")
    },
    events: {
      "#btnPause": "pause",
      "#btnPlay": "play",
      "#btnSlow": "slow",
      "#btnNormal": "normal",
      "#btnFast": "fast"
    },
    bindEvents: () => {
      for (let key in $5bc044ba9da697600edd15cbf14e2cab$var$player.events) {
        if ($5bc044ba9da697600edd15cbf14e2cab$var$player.events.hasOwnProperty(key)) {
          const value = $5bc044ba9da697600edd15cbf14e2cab$var$player.events[key];
          document.querySelector(key).onclick = $5bc044ba9da697600edd15cbf14e2cab$var$player[value];
        }
      }
    },
    init: () => {
      $5bc044ba9da697600edd15cbf14e2cab$var$player.ui.demo.innerText = $5d831966b3de65ac36f8abdb1225de87$export$default.substr(0, $5bc044ba9da697600edd15cbf14e2cab$var$player.n);
      $5bc044ba9da697600edd15cbf14e2cab$var$player.ui.stylePart.innerHTML = $5d831966b3de65ac36f8abdb1225de87$export$default.substr(0, $5bc044ba9da697600edd15cbf14e2cab$var$player.n);
      $5bc044ba9da697600edd15cbf14e2cab$var$player.bindEvents();
      $5bc044ba9da697600edd15cbf14e2cab$var$player.play();
    },
    run: () => {
      $5bc044ba9da697600edd15cbf14e2cab$var$player.n += 1;
      if ($5bc044ba9da697600edd15cbf14e2cab$var$player.n > $5d831966b3de65ac36f8abdb1225de87$export$default.length) {
        window.clearInterval($5bc044ba9da697600edd15cbf14e2cab$var$player.id);
        return;
      }
      $5bc044ba9da697600edd15cbf14e2cab$var$player.ui.demo.innerText = $5d831966b3de65ac36f8abdb1225de87$export$default.substr(0, $5bc044ba9da697600edd15cbf14e2cab$var$player.n);
      $5bc044ba9da697600edd15cbf14e2cab$var$player.ui.stylePart.innerHTML = $5d831966b3de65ac36f8abdb1225de87$export$default.substr(0, $5bc044ba9da697600edd15cbf14e2cab$var$player.n);
      $5bc044ba9da697600edd15cbf14e2cab$var$player.ui.demo.scrollTop = $5bc044ba9da697600edd15cbf14e2cab$var$player.ui.demo.scrollHeight;
    },
    play: () => {
      window.clearInterval($5bc044ba9da697600edd15cbf14e2cab$var$player.id);
      $5bc044ba9da697600edd15cbf14e2cab$var$player.id = setInterval($5bc044ba9da697600edd15cbf14e2cab$var$player.run, $5bc044ba9da697600edd15cbf14e2cab$var$player.time);
    },
    pause: () => {
      window.clearInterval($5bc044ba9da697600edd15cbf14e2cab$var$player.id);
    },
    slow: () => {
      $5bc044ba9da697600edd15cbf14e2cab$var$player.pause();
      $5bc044ba9da697600edd15cbf14e2cab$var$player.time = 300;
      $5bc044ba9da697600edd15cbf14e2cab$var$player.play();
    },
    normal: () => {
      $5bc044ba9da697600edd15cbf14e2cab$var$player.pause();
      $5bc044ba9da697600edd15cbf14e2cab$var$player.time = 100;
      $5bc044ba9da697600edd15cbf14e2cab$var$player.play();
    },
    fast: () => {
      $5bc044ba9da697600edd15cbf14e2cab$var$player.pause();
      $5bc044ba9da697600edd15cbf14e2cab$var$player.time = 0;
      $5bc044ba9da697600edd15cbf14e2cab$var$player.play();
    }
  };
  $5bc044ba9da697600edd15cbf14e2cab$var$player.init();
})();

//# sourceMappingURL=test.3843896b.js.map
