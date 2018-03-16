/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectRandomColor */
/* unused harmony export currentColor */
const Colors = {
  red:         0xf25346,
  white:       0xd8d0d1,
  brown:       0x000000,
  pink:        0xF5986E,
  brownDark:   0x000000,
  blue:        0x68c3c0,

  mustard:    0xffe066,
  grey:       0x50514f,
  pinkNeon:   0xff1654,


  ship:       0xffffff,
  light:      0x68c3c0, // blue: 0x68c3c0 //yellow: 0xffe066 //pinkChill: 0xF5986E  // red: 0xf25346
  // light:      0xf25346, //red
  // light:      0xF5986E, //pinkOrange
  // light:      0xffe066, //mustard
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Colors;



const lightColors = [
  0x68c3c0, // blue,
  0xf25346, //red
  // 0xF5986E, //pinkOrange,
  0xffe066, //mustard
  // 0xF5986E, // chillpink
  // 0xf78764, //melon
  // 0xf0d3f7, //lavander
  // 0xa4f9c8, //mint
];


function selectRandomColor() {


  currentColor = lightColors[Math.floor(Math.random()*lightColors.length)];
}

let currentColor = 0x68c3c0;





//----------------------------



//
//
//
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
//
//
//
// setInterval()
//
//
//
// function x(startVal, endVal, 5000) {
//   if (startVal === endVal) { return }
//
//   console.log(startVal);
//
//   setTimeOut( x(startVal--, endVal, time), 250)
//
//   // startVal --;
// }
//
// function countDown (startVal, endVal, time, fun) {
//   let stepLength = time/(startVal - endVal);
//
//   for (var i = startVal; i > endVal; i--) {
//
//     setTimeOut( () => {
//       fun(); // feed in a callback to be executed
//     }, stepLength)
//   }
// }
//
//
// setTimeOut( () => {
//
// }, stepLength)
//
//
//
// camera.position.x =
//
//
//
//
//
//
// colorHexCode = countDown()


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["selectRandomColor"] = selectRandomColor;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentColor", function() { return currentColor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__planet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ship__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sky__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__moon__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asteroid__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__coins__ = __webpack_require__(9);
// import { Colors, selectRandomColor, currentColor } from './util';




// import Game from './game';






// import AllAsteroids from './asteroid_sky';



window.addEventListener('load', init, false);

function init() {
  let playerHP = document.getElementById("playerHP");

  Object(__WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["b" /* createScene */])();
  Object(__WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["b" /* createLights */])();

  createShip();
  createPlanet();
  createSky();
  createMoons();
  createAsteroids();
  createCoin();

  document.addEventListener('mousemove', handleCursorUpdate, false);
  nextLevel();
  levelChanger = setInterval( () => nextLevel(), 10000);
  loop();
}


/*----------------GAME INSTANCE----------------------*/

let startTime = new Date().getTime();
let currentTime = new Date().getTime();

let asteroidsArray = [];
let levelChanger;
/*--------------------------------------------------*/




/*==========================Object_Creators==========================*/

/*--------------------------Planet-----------------------------------*/
const planet = new __WEBPACK_IMPORTED_MODULE_2__planet__["a" /* default */]();
const createPlanet = function createPlanet(){
  planet.mesh.position.y = -600;
  __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */].add(planet.mesh);
};
/*--------------------------Sky-------------------------------------*/
const sky = new __WEBPACK_IMPORTED_MODULE_4__sky__["a" /* default */]();
function createSky(){
  sky.mesh.position.y = -700;
  sky.mesh.position.z = -600;
  __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */].add(sky.mesh);
}
/*--------------------------Ship-------------------------------------*/
const spaceship = new __WEBPACK_IMPORTED_MODULE_3__ship__["a" /* default */]();
/* harmony export (immutable) */ __webpack_exports__["spaceship"] = spaceship;

function createShip(){
  spaceship.mesh.scale.set(.20,.20,.20);
  spaceship.mesh.position.y = 100;
  // spaceship.mesh.rotation.x = 100;
  __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */].add(spaceship.mesh);
}
/*--------------------------Moons-------------------------------------*/
const moon1 = new __WEBPACK_IMPORTED_MODULE_5__moon__["a" /* default */]();
const moon2 = new __WEBPACK_IMPORTED_MODULE_5__moon__["a" /* default */]();
function createMoons(){
  moon1.mesh.position.y = 60; // push it a little bit at the bottom of the scene
  moon1.mesh.position.x = -560;
  moon1.mesh.position.z = -660;

  moon2.mesh.position.y = 280;
  moon2.mesh.position.x = 260;
  moon2.mesh.position.z = -360;
  __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */].add(moon1.mesh);
  __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */].add(moon2.mesh);
}
/*--------------------------Asteroids---------------------------------*/
let singleAst;
let asteroid;
function createAsteroids(x = 5){

  for (var i = 0; i < x; i++) {
    asteroid = new __WEBPACK_IMPORTED_MODULE_6__asteroid__["a" /* default */]();
    asteroid.mesh.scale.set(1.90, 1.90, 1.90);
    asteroid.mesh.position.y = 20 + (Math.random()*170);
    asteroid.mesh.position.x = 500 + (i * Math.random()*300);
    __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */].add(asteroid.mesh);
    asteroidsArray.push(asteroid);
  }
}
/*--------------------------Coins---------------------------------*/

let coin;
function createCoin(){
  coin = new __WEBPACK_IMPORTED_MODULE_7__coins__["a" /* default */]();
  coin.mesh.scale.set(0.70, 0.70, 0.70);
  // coin.mesh.position.y = 20 + (Math.random()*170);
  coin.mesh.position.x = 1800;
  // coin.mesh.position.x = 40;
  coin.mesh.position.y = 80;
  __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */].add(coin.mesh);
}


/*-------------------------------------------------------------------*/

// let playTime;
let positionComparison;
let distanceBetweenX;
let distanceBetweenY;
let speedup;
let scoreCounter = 0;
let currentLevel = 0;

function nextLevel() {
  document.getElementById("currentLevel").style.opacity = `1.0`;
  currentLevel += 1;
  document.getElementById('currentLevel').innerHTML = `Level ${currentLevel}`;
  setTimeout( ()=> document.getElementById("currentLevel").style.opacity = `0.0`, 2000);
  createAsteroids(5);
}

let loop = function loop(){
  handleShoot();
  document.getElementById("ammo-bar").style.width = `${spaceship.ammo}px`;
  document.getElementById("time").innerHTML = `${scoreCounter}`; // increment score


  // overheadLight.intensity = 0.3;
  // speedup = 0.3 / (spaceship.health*.01);
  speedup = scoreCounter * 0.0001;
  // createAsteroids(1);


  sky.mesh.rotation.z += .001;
  // planet.mesh.rotation.z += .001;
  planet.mesh.rotation.z += .0005;
  // planet.mesh.position.y += Math.sin(0.05);

  moon2.mesh.rotation.y += .001;
  moon2.mesh.rotation.x += .003;
  moon2.mesh.rotation.z += .001;

  moon1.mesh.rotation.y += .002;
  moon1.mesh.rotation.x += .002;
  moon1.mesh.rotation.z += .002;

  updateCoin();

  for (var i = 0; i < asteroidsArray.length; i++) {
    singleAst = asteroidsArray[i];
    updateAsteroids(singleAst);
  }


  if (spaceship.health > 0) {
    scoreCounter++;
    updateShip();

  } else {

    // when you die loose game over
    clearInterval(levelChanger);
    document.getElementById("currentLevel").style.opacity = `1.0`;
    spaceship.mesh.rotation.y += (-Math.PI/2)*.07;
    spaceship.mesh.position.y -= 1.05;
    spaceship.mesh.position.x -= .85;
    document.getElementById("game-over").style.display = `block`;
    document.getElementById("retry").style.display = `block`;




    // document.getElementById("time").style.fontSize = "60px";
    // document.getElementById("time").innerHTML = `${spaceship.health}`;
    // setTimeout(() => document.getElementById("playerHP").style.fontSize = "20px", 500)
    // setTimeout(() => spaceship.mesh.rotation.x = 0, 300)
  }

  __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["c" /* renderer */].render(__WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */], __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["a" /* camera */]);
  requestAnimationFrame(loop);
};

// initialize
let cursorPosition = {
  x: 0,
  y: 0
};

// MouseEvent clientY & clientX: w3schools.com/jsref/event_clienty.asp
function handleCursorUpdate(event) {
  // console.log('x', event.clientX);
  // console.log('y', event.clientY);
  event.preventDefault();
  // Reduce value to something between -1 and 1;
  let deltaX = (-1 + (event.clientX / __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["f" /* windowWidth */])*2);
  // inverse because the 2D y-axis goes the opposite direction of the 3D y-axis
  let deltaY = 1 - (event.clientY / __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["e" /* windowHeight */])*2;
  // let deltaY = (-1 + (event.clientY / windowWidth)*4); // inverse joystick mode

  cursorPosition = {
    x: deltaX,
    y: deltaY
  };
}

function updateShip(){
  let updatedX = normalize(cursorPosition.x, -1, 1, -80, 20);
  let updatedY = normalize(cursorPosition.y, -1, 1, 25, 175);
  // let updatedY = normalize(cursorPosition.y, -1, 1, 25, 175);

  spaceship.mesh.position.y = updatedY;
  spaceship.mesh.position.x = updatedX;

  spaceship.JetFire.rotation.x += 0.3;
  // spaceship.JetFire.scale.x += 0.3;
}

function updateAsteroids(a) {
  // a.mesh.position.x -= 1.5;
  a.mesh.position.x -= 2.5;
  // a.mesh.position.x += speedup;
  a.mesh.position.y += Math.sin(a.mesh.position.x * 5)*0.5;
  a.mesh.rotation.y += .04;
  a.mesh.rotation.z += .01;




  positionComparison = {
    x:  (spaceship.mesh.position.x - a.mesh.position.x),
    y:  (spaceship.mesh.position.y - a.mesh.position.y)
  };

  distanceBetweenX = Math.abs(positionComparison.x);
  distanceBetweenY = Math.abs(positionComparison.y);

  // laser HIT
  if (spaceship.laserOn && a.mesh.position.x < 200 && distanceBetweenY < 15 && spaceship.mesh.position.x < a.mesh.position.x) {
    // console.log('shoooooootboiiii');
    handleDestroyAstro(a);
  }


  // collision
  if (Math.floor(distanceBetweenX) < 30 && distanceBetweenY < 15) {
    handleCrash(a);
  }


  // re-set asteroids when they go offscreen
  if (a.mesh.position.x <= -200) {
    a.mesh.position.x = 230 + Math.random()*100;
    a.mesh.position.y = 20 + (Math.random()*170);
  }
}

function handleShoot(){
  // hitAsteroid.mesh.position.x = 230 + Math.random()*20;
  document.body.onkeypress = function(e){
    if(e.keyCode === 32 && spaceship.ammo > 0){
      __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["d" /* overheadLight */].intensity = 20;
      setTimeout(() => __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["d" /* overheadLight */].intensity = 0.3, 100);


      spaceship.startLaser();
      document.getElementById("ammo-bar").style.width = `${spaceship.ammo}px`;
      document.getElementById("ammo-bar").style.backgroundColor = "#ffe066";
      setTimeout(() => document.getElementById("ammo-bar").style.backgroundColor = "#68c3c0", 300);
    } else {
      spaceship.stopLaser();
    }

  };

  document.body.onkeyup = function(e){
    if(e.keyCode === 32){
        spaceship.stopLaser();
      }
  };
}

function handleCrash(hitAsteroid) {
  // camera.position.z = 200 + Math.random()*10;
  __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["d" /* overheadLight */].intensity = 20;
  setTimeout(() => __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["d" /* overheadLight */].intensity = 0.3, 100);
  // hitAsteroid.mesh.scale.set(2.90, 2.90,2.90);
  // hitAsteroid.mesh.position.x = 230 + Math.random()*20;
  // hitAsteroid.mesh.position.y = 20 + (Math.random()*170);
  spaceship.mesh.rotation.x -= 20;
  spaceship.decreaseHP();


  setTimeout(() => spaceship.mesh.rotation.x = 0, 300)

  document.getElementById("hp-bar").style.width = `${spaceship.health}px`;
  document.getElementById("hp-bar").style.backgroundColor = "pink";

  setTimeout(() => document.getElementById("hp-bar").style.backgroundColor = "#ff5978", 500);



  flashLights();
}



function handleDestroyAstro(hitAsteroid) {
  // hitAsteroid.mesh.scale.set(0.70, 0.70,0.70);
  // createAsteroids(1);
  __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["d" /* overheadLight */].intensity = 20;
  setTimeout(() => __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["d" /* overheadLight */].intensity = 0.3, 100);
  // hitAsteroid.mesh.position.x += 20 + Math.random()*20;
  hitAsteroid.mesh.position.x = 500 + Math.random()*20;


  scoreCounter += 100;
  document.getElementById("time").style.fontSize = "40px";
  // document.getElementById("playerHP").innerHTML = `${spaceship.health/2}`;
  setTimeout(() => document.getElementById("time").style.fontSize = "17px", 200)

  setTimeout(() => spaceship.stopLaser(), 400);

  // flashLights();
}


function updateCoin() {

  coin.mesh.position.x -= 2.5;
  coin.mesh.position.y += Math.sin(coin.mesh.position.x * 5)*0.5;

  coin.mesh.rotation.y += .2;
  coin.mesh.rotation.z += .08;




  positionComparison = {
    x:  (spaceship.mesh.position.x - coin.mesh.position.x),
    y:  (spaceship.mesh.position.y - coin.mesh.position.y)
  };

  distanceBetweenX = Math.abs(positionComparison.x);
  distanceBetweenY = Math.abs(positionComparison.y);


  // collision
  if (Math.floor(distanceBetweenX) < 11 && distanceBetweenY < 6) {
    spaceship.boostAmmo();
    coin.mesh.position.x = 1630 + Math.random()*100;
    scoreCounter += 10000;


    document.getElementById("time").style.fontSize = "80px";
    setTimeout(() => document.getElementById("time").style.fontSize = "17px", 400)
  }


  // re-set asteroids when they go offscreen
  if (coin.mesh.position.x <= -200) {
    coin.mesh.position.x = 1630 + Math.random()*100;
    coin.mesh.position.y = 20 + (Math.random()*170);
  }
}






function flashLights(){
  selectRandomColor();
  __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["a" /* ambientLight */].color.setHex( currentColor );
  __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["c" /* hemisphereLight */].color.setHex( currentColor );
  __WEBPACK_IMPORTED_MODULE_1__three_util_lights_util__["d" /* overheadLight */].color.setHex( currentColor );
  __WEBPACK_IMPORTED_MODULE_0__three_util_scene_util__["d" /* scene */].fog.color.setHex( currentColor );
}



function normalize(v,vmin,vmax,tmin, tmax){
  let nv = Math.max(Math.min(v,vmax), vmin);
  let dv = vmax-vmin;
  let pc = (nv-vmin)/dv;
  let dt = tmax-tmin;
  let tv = tmin + (pc*dt);
  return tv;
}






//--------------------------------
const Colors = {
  red:         0xf25346,
  white:       0xd8d0d1,
  brown:       0x000000,
  pink:        0xF5986E,
  brownDark:   0x000000,
  blue:        0x68c3c0,

  mustard:    0xffe066,
  grey:       0x50514f,
  pinkNeon:   0xff1654,


  ship:       0xffffff,
  light:      0x68c3c0, // blue: 0x68c3c0 //yellow: 0xffe066 //pinkChill: 0xF5986E  // red: 0xf25346
  // light:      0xf25346, //red
  // light:      0xF5986E, //pinkOrange
  // light:      0xffe066, //mustard
};
/* harmony export (immutable) */ __webpack_exports__["Colors"] = Colors;



const lightColors = [
  0x68c3c0, // blue,
  0xf25346, //red
  // 0xF5986E, //pinkOrange,
  0xffe066, //mustard
  // 0xF5986E, // chillpink
  // 0xf78764, //melon
  // 0xf0d3f7, //lavander
  // 0xa4f9c8, //mint
  0xf4e8c1, //lightbeige
];


function selectRandomColor() {
  currentColor = lightColors[Math.floor(Math.random()*lightColors.length)];
}

let currentColor = 0x68c3c0;




//----------------------------------------------------------//
// var audio = new Audio('audio_file.mp3');
// audio.play();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camera; });
/* unused harmony export fieldOfView */
/* unused harmony export aspectRatio */
/* unused harmony export nearPlane */
/* unused harmony export farPlane */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderer; });
/* unused harmony export gameContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return scene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return windowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return windowWidth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);




// import { game, deltaTime, newTime, oldTime, ennemiesPool,
//          particlesPool, particlesInUse, resetGame
// } from './game';


let camera, fieldOfView,
aspectRatio, nearPlane, farPlane, renderer, gameContainer;

let scene = new THREE.Scene();
let windowHeight, windowWidth;


const createScene = function createScene() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  scene.fog = new THREE.Fog(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* Colors */].light, 100, 950);

  // Create the camera
  aspectRatio = windowWidth / windowHeight;
  fieldOfView = 60; // FIXME: orig 60
  // fieldOfView = 160; // /FIXME: orig 60 super zoom out
  nearPlane = 1;
  farPlane = 10000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
    );

  // Set the position of the camera
  camera.position.x = 10; // originally 10
  camera.position.z = 200; // originally 200
  camera.position.y = 120; // orig 120

  // Create the renderer
  renderer = new THREE.WebGLRenderer({
    alpha: true, // Allow transparency to show the CSS gradient background
    antialias: true // less efficient, check back on this FIXME:
  });

  renderer.setSize(windowWidth, windowHeight);
  renderer.shadowMap.enabled = true;

  // Append renderer to the HTML container
  gameContainer = document.getElementById('world');
  gameContainer.appendChild(renderer.domElement);

  // update camera and renderer on window resize
  window.addEventListener('resize', handleWindowResize, false);
}
/* harmony export (immutable) */ __webpack_exports__["b"] = createScene;


function handleWindowResize() {
  // update height and width of the renderer and the camera
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  renderer.setSize(windowWidth, windowHeight);
  camera.aspect = windowWidth / windowHeight;
  camera.updateProjectionMatrix();
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ambientLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hemisphereLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return overheadLight; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createLights;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);




let ambientLight;
let hemisphereLight;
let overheadLight;

function createLights() {
  hemisphereLight = new THREE.HemisphereLight(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* Colors */].light, 0x000000, .9)
  ambientLight = new THREE.AmbientLight(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* Colors */].light, .5);
  //overhead is shining from above
  overheadLight = new THREE.DirectionalLight(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* Colors */].light, 0.9); // // NOTE: flash this on impact!

  // Set the direction of the light
  overheadLight.position.set(150, 350, 350); // first value is X pos, could move to simulate sun movement

  // Allow shadow casting
  overheadLight.castShadow = true;

  // define visible area of the projected shadow
  overheadLight.shadow.camera.left = -400;
  overheadLight.shadow.camera.right = 400;
  overheadLight.shadow.camera.top = 400;
  overheadLight.shadow.camera.bottom = -400;
  overheadLight.shadow.camera.near = 1;
  overheadLight.shadow.camera.far = 1000;
  overheadLight.shadow.mapSize.width = 4096;
  overheadLight.shadow.mapSize.height = 4096;

  // shadow resolution; orig 2048 on both, try to optimize by reducing:
  overheadLight.shadow.mapSize.width = 2048;
  overheadLight.shadow.mapSize.height = 2048;

  // to activate the lights, just add them to the scene
  __WEBPACK_IMPORTED_MODULE_0__scene_util__["d" /* scene */].add(hemisphereLight);                  // NOTE: try removing or reducing this for nigth time background
  __WEBPACK_IMPORTED_MODULE_0__scene_util__["d" /* scene */].add(overheadLight);
  __WEBPACK_IMPORTED_MODULE_0__scene_util__["d" /* scene */].add(ambientLight);

  // let cameraHelper = new THREE.CameraHelper(overheadLight.shadow.camera);
  // scene.add(cameraHelper);

}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);




const Planet = function Planet(){
  // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
  var geomPlanet = new THREE.CylinderGeometry(590, 590, 400, 200, 40);

  // rotate the planet on the x axis
  geomPlanet.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
  geomPlanet.mergeVertices();
  var l = geomPlanet.vertices.length;

  // var material = new THREE.MeshPhongMaterial({wireframe:false,
  var material = new THREE.MeshPhongMaterial({wireframe:true,
  // var material = new THREE.MeshBasicMaterial({wireframe:false,
    color:__WEBPACK_IMPORTED_MODULE_1__util__["a" /* Colors */].light,
    transparent:true,
    opacity:.9,                             // NOTE planet opacity
    shading:THREE.FlatShading,
  });


  this.mesh = new THREE.Mesh(geomPlanet, material);
  this.mesh.receiveShadow = true;
};


/* harmony default export */ __webpack_exports__["a"] = (Planet);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


class SpaceShip {
  constructor() {

    this.health = 200;
    this.ammo = 200;
    this.laserOn = false;



    this.mesh = new THREE.Object3D();
    this.mesh.name = "spaceShip";

    // Cabin
    let geomCabin = new THREE.BoxGeometry(180,5,5,1,1,1);
    let matCabin = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].ship, shading:THREE.FlatShading});

    geomCabin.vertices[4].y+=10;
    geomCabin.vertices[4].z-=20;
    geomCabin.vertices[5].y+=10;
    geomCabin.vertices[5].z+=20;
    geomCabin.vertices[6].y-=10;
    geomCabin.vertices[6].z-=20;
    geomCabin.vertices[7].y-=10;
    geomCabin.vertices[7].z+=20;

    let cabin = new THREE.Mesh(geomCabin, matCabin);
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    this.mesh.add(cabin);

    // Wings
    let geomSideWing = new THREE.BoxGeometry(30,3,180,1,1,1);
    let matSideWing = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].ship, shading:THREE.FlatShading});
    let sideWing1 = new THREE.Mesh(geomSideWing, matSideWing);
    let sideWing2 = new THREE.Mesh(geomSideWing, matSideWing);
    sideWing1.position.set(-75,-3, 0);
    sideWing2.position.set(-75,-3, 0);
    sideWing2.rotation.x = Math.PI*1.07;
    sideWing1.rotation.x = -Math.PI*1.07;

    geomSideWing.vertices[4].y+=5;
    geomSideWing.vertices[4].z-=2;

    sideWing1.castShadow = true;
    sideWing1.receiveShadow = true;
    sideWing2.castShadow = true;
    sideWing2.receiveShadow = true;
    this.mesh.add(sideWing1);
    this.mesh.add(sideWing2);


    // laserbeam
    let geomLaser = new THREE.CylinderGeometry(1, 1, 1900, 10);
    let matLaser = new THREE.MeshPhongMaterial({wireframe:true, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].pinkNeon});
    this.laserBeam = new THREE.Mesh(geomLaser, matLaser);
    // laserBeam.position.set(930,-22, 86);
    this.laserBeam.position.set(930, 0, 0);
    this.laserBeam.rotation.z = Math.PI/2;





    // wingspears
    let geomWingSpear = new THREE.CylinderGeometry(2.2, 2.2, 50, 10);
    let matWingSpear = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].ship, shading:THREE.FlatShading});
    let wingSpear1 = new THREE.Mesh(geomWingSpear, matWingSpear);
    let wingSpear2 = new THREE.Mesh(geomWingSpear, matWingSpear);
    let wingSpear3 = new THREE.Mesh(geomWingSpear, matWingSpear);
    let wingSpear4 = new THREE.Mesh(geomWingSpear, matWingSpear);

    // front bottom
    wingSpear1.position.set(-42,-22, 86);
    wingSpear1.rotation.z = Math.PI/2;

    // back bottom
    wingSpear4.position.set(-42,-22, -86);
    wingSpear4.rotation.z = Math.PI/2;

    // front top
    wingSpear2.position.set(-42, 16, 86);
    wingSpear2.rotation.z = Math.PI/2;

    // back top
    wingSpear3.position.set(-42, 16, -86);
    wingSpear3.rotation.z = Math.PI/2;
    //
    this.mesh.add(wingSpear1);
    this.mesh.add(wingSpear2);
    this.mesh.add(wingSpear3);
    this.mesh.add(wingSpear4);

    wingSpear1.castShadow = true;
    wingSpear2.castShadow = true;
    wingSpear3.castShadow = true;
    wingSpear4.castShadow = true;


    // mainThruster
    let geomMainThruster = new THREE.CylinderGeometry(5, 10, 20, 10);
    let matMainThruster = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].ship, shading:THREE.FlatShading});
    let mainThruster = new THREE.Mesh(geomMainThruster, matMainThruster);
    mainThruster.position.set(-100,0, 0);
    mainThruster.rotation.z = Math.PI/2;

    mainThruster.castShadow = true;
    mainThruster.receiveShadow = true;
    this.mesh.add(mainThruster);


    // cockpit
    let geomcockPit = new THREE.BoxGeometry(40,5,20,1,1,1);
    let matcockPit = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].grey,transparent:true, opacity:.8, shading:THREE.FlatShading});;
    let cockpit = new THREE.Mesh(geomcockPit, matcockPit);
    // geomcockPit.vertices[4].y+=10;
    geomcockPit.vertices[4].z-=20;
    // geomcockPit.vertices[5].y+=10;
    // geomcockPit.vertices[5].z+=20;
    geomcockPit.vertices[6].y-=10;
    geomcockPit.vertices[6].z-=20;
    geomcockPit.vertices[7].y-=10;
    // geomcockPit.vertices[7].z+=20;


    cockpit.position.set(-55,15,0);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    this.mesh.add(cockpit);

    let geomJetFire = new THREE.BoxGeometry(60,10,10,1,1,1);
    geomJetFire.vertices[4].y-=5;
    geomJetFire.vertices[4].z+=5;
    geomJetFire.vertices[5].y-=5;
    geomJetFire.vertices[5].z-=5;
    geomJetFire.vertices[6].y+=5;
    geomJetFire.vertices[6].z+=5;
    geomJetFire.vertices[7].y+=5;
    geomJetFire.vertices[7].z-=5;
    let matJetFire = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].mustard, shading:THREE.FlatShading});
    this.JetFire = new THREE.Mesh(geomJetFire, matJetFire);

    this.JetFire.castShadow = true;
    this.JetFire.receiveShadow = true;

    let geomBlade = new THREE.BoxGeometry(2,14,10,1,1,1);
    let matBlade = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].red, shading:THREE.FlatShading});
    let blade1 = new THREE.Mesh(geomBlade, matBlade);
    blade1.position.set(10,0,0);

    blade1.castShadow = true;
    blade1.receiveShadow = true;

    let blade2 = blade1.clone();
    blade2.rotation.x = Math.PI/2;

    blade2.castShadow = true;
    blade2.receiveShadow = true;

    this.JetFire.add(blade1);
    this.JetFire.add(blade2);
    this.JetFire.position.set(-120,0,0);
    this.JetFire.rotation.x = Math.PI/2;
    this.mesh.add(this.JetFire);

    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }

  decreaseHP(){
    this.health -= 4;
    this.health = Math.max(0, this.health);
  }

  decreaseAmmo(){
    this.ammo -= 10;
    this.ammo = Math.max(0, this.ammo);
  }

  refillAmmo(){
    this.ammo = 200;
  }

  boostAmmo(){
    this.ammo += 80;
    this.ammo = Math.min(200, this.ammo);
  }

  startLaser(){
    if (this.ammo > 0) {
      this.laserOn = true;
      this.mesh.add(this.laserBeam);
      this.decreaseAmmo();
    }
  }

  stopLaser(){
    this.laserOn = false;
    this.mesh.remove(this.laserBeam);
  }


}


/* harmony default export */ __webpack_exports__["a"] = (SpaceShip);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);



const Star = function(){
  // An empty container that will hold the different stars in the cluster
  this.mesh = new THREE.Object3D();

  // this shingle shape will be duplicated to create the starcluster
  let geom = new THREE.BoxGeometry(1,1,1);  /// original starboxes
  let mat = new THREE.MeshBasicMaterial({wireframe:true,
    color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].white,
  });

  // duplicate the geometry a random number of times
  let nBlocs = 6; // number of stars in cluster

  for (let i = 0; i<nBlocs; i++){
    // create the mesh by cloning the cluster
    let m = new THREE.Mesh(geom, mat);

    // set the position and the rotation of each cube randomly
    m.position.x = i*15;
    m.position.y = Math.random()*70 + 800;
    m.position.z = Math.random()*60;
    m.rotation.z = Math.random()*Math.PI*2;
    m.rotation.y = Math.random()*Math.PI*2;

    // set the size of the cube randomly
    let s = .1 + Math.random()*.9;
    m.scale.set(s,s,s);

    // allow each cube to cast and to receive shadows
    m.castShadow = true;        // NOTE I dont think stars ever receive or cast shadows
    m.receiveShadow = true;

    // add the cube to the container we first created
    this.mesh.add(m);
  }
};


const Sky = function(){
  // empty container
  this.mesh = new THREE.Object3D();

  // choose a number of stars to be scattered in the sky
  this.nStars = 50;

  // To distribute the stars consistently,
  // we need to place them according to a uniform angle
  let stepAngle = Math.PI*2 / this.nStars;

  // create star clusters
  for(let i=0; i<this.nStars; i++){
    let star = new Star();

    // set the rotation and the position of each star;
    let a = stepAngle*i; // this is the final angle of the star
    let h = 750 + Math.random()*200; // this is the distance between the center of the axis and the star itself

    // Trigonometry
    // convert polar coordinates (angle, distance) into Cartesian coordinates (x, y)
    star.mesh.position.y = Math.sin(a)*h;
    star.mesh.position.x = Math.cos(a)*h;

    // rotate the star according to its position
    star.mesh.rotation.z = a + Math.PI/2;

    // for depth percep, position the stars
    // at random depths inside of the scene
    star.mesh.position.z = -400-Math.random()*400;

    // set a random scale for each star
    let s = 1.5+Math.random()*1.4; // first num = inner radius // sec = width of doughnut
    star.mesh.scale.set(s,s,s);

    this.mesh.add(star.mesh);
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Sky);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


class Moon {
  constructor() {
    this.geom = new THREE.SphereGeometry(20, 20, 5);
    // rotate the geometry on the x axis
    // this.geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

    this.mat = new THREE.MeshBasicMaterial({wireframe:true,
      color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].blue,
      transparent:true,
      opacity:.6,
      shading:THREE.FlatShading,
    });

    this.mesh = new THREE.Mesh(this.geom, this.mat);
    this.mesh.receiveShadow = true;
  }
}


/* harmony default export */ __webpack_exports__["a"] = (Moon);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);



class Asteroid {
  constructor() {
    // this.geom = new THREE.BoxGeometry(10,10,10,3,3,3);
    // this.geom = new THREE.SphereGeometry(5, 5, 4);
    this.geom = new THREE.SphereGeometry(5, 4, 5);

    this.mat = new THREE.MeshBasicMaterial({wireframe:true,
      color: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].pinkNeon,
      // shading: THREE.FlatShading,
      // transparent:true,
      // opacity:.9,
    });

    this.mesh = new THREE.Mesh(this.geom, this.mat);
    this.mesh.castShadow = true;
    // this.mesh.receiveShadow = true;
  }
}



/* harmony default export */ __webpack_exports__["a"] = (Asteroid);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);



class Coin {
  constructor() {
    this.geom = new THREE.BoxGeometry(10,10,10,3,3,3);
    // this.geom = new THREE.SphereGeometry(5, 5, 4);
    // this.geom.vertices[4].y+=5;
    // this.geom.vertices[4].x+=5;
    // this.geom.vertices[4].z+=5;
    //
    //
    // this.geom.vertices[6].y-=7;
    // this.geom.vertices[6].x-=7;
    // this.geom.vertices[6].z-=7;


    this.mat = new THREE.MeshBasicMaterial({wireframe:true,
      color: 0xffe066,
      // shading: THREE.FlatShading,
      // transparent:true,
      // opacity:.9,
    });

    this.mesh = new THREE.Mesh(this.geom, this.mat);
    this.mesh.castShadow = true;
    // this.mesh.receiveShadow = true;
  }
}



/* harmony default export */ __webpack_exports__["a"] = (Coin);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map