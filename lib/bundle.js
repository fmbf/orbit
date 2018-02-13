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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


class Game {
  constructor() {
    this.speed = 0;
    this.startSpeed = .00030;
    this.baseSpeed = .00030;
    this.baseSpeed = .00030;
    this.targetBaseSpeed = .00030;
    this.speedUpByTime = .0000025;
    this.speedUpByLevel = .000005;
    this.distanceForSpeedUpdate = 100;

    this.speedLastUpdate = 0;

    this.distance = 0;
    this.ratioSpeedDistance = 50;
    this.energy = 100;
    this.ratioSpeedEnergy = 3;

    this.level = 1;
    this.levelLastUpdate = 0;
    this.distanceForLevelUpdate = 1000;

    this.shipDefaultHeight = 100;
    this.shipAmpHeight = 80;
    this.shipAmpWidth = 75;
    this.shipMoveSensivity = 0.005;
    this.shipRotXSensivity = 0.0008;
    this.shipRotZSensivity = 0.0004;
    this.shipFallSpeed = .001;
    this.shipMinSpeed = 1.2;
    this.shipMaxSpeed = 1.6;
    this.shipSpeed = 0;
    this.shipCollisionDisplacementX = 0;
    this.shipCollisionSpeedX = 0;

    this.shipCollisionDisplacementY = 0;
    this.shipCollisionSpeedY = 0;

    this.planetRadius = 600;
    this.planetLength = 400;
    //this.planetRotationSpeed = 0.006;
    this.mountainsMinAmp  =  5;
    this.mountainsMaxAmp  =  20;
    this.mountainsMinSpeed  =  0.001;
    this.mountainsMaxSpeed  =  0.003;

    this.cameraFarPos = 500;
    this.cameraNearPos = 150;
    this.cameraSensivity = 0.002;

    this.coinDistanceTolerance = 15;
    this.coinValue = 3;
    this.coinsSpeed = .5;
    this.coinLastSpawn = 0;
    this.distanceForCoinsSpawn = 100;

    this.ennemyDistanceTolerance = 10;
    this.ennemyValue = 10;
    this.ennemiesSpeed = .6;
    this.ennemyLastSpawn = 0;
    this.distanceForEnnemiesSpawn = 50;

    this.status = "playing";

  }

  resetGame(){
    this.speed = 0;
    this.startSpeed = .00030;
    this.baseSpeed = .00030;
    this.baseSpeed = .00030;
    this.targetBaseSpeed = .00030;
    this.speedUpByTime = .0000025;
    this.speedUpByLevel = .000005;
    this.distanceForSpeedUpdate = 100;

    this.speedLastUpdate = 0;

    this.distance = 0;
    this.ratioSpeedDistance = 50;
    this.energy = 100;
    this.ratioSpeedEnergy = 3;

    this.level = 1;
    this.levelLastUpdate = 0;
    this.distanceForLevelUpdate = 1000;

    this.shipDefaultHeight = 100;
    this.shipAmpHeight = 80;
    this.shipAmpWidth = 75;
    this.shipMoveSensivity = 0.005;
    this.shipRotXSensivity = 0.0008;
    this.shipRotZSensivity = 0.0004;
    this.shipFallSpeed = .001;
    this.shipMinSpeed = 1.2;
    this.shipMaxSpeed = 1.6;
    this.shipSpeed = 0;
    this.shipCollisionDisplacementX = 0;
    this.shipCollisionSpeedX = 0;

    this.shipCollisionDisplacementY = 0;
    this.shipCollisionSpeedY = 0;

    this.planetRadius = 600;
    this.planetLength = 400;
    //this.planetRotationSpeed = 0.006;
    this.mountainsMinAmp  =  5;
    this.mountainsMaxAmp  =  20;
    this.mountainsMinSpeed  =  0.001;
    this.mountainsMaxSpeed  =  0.003;

    this.cameraFarPos = 500;
    this.cameraNearPos = 150;
    this.cameraSensivity = 0.002;

    this.coinDistanceTolerance = 15;
    this.coinValue = 3;
    this.coinsSpeed = .5;
    this.coinLastSpawn = 0;
    this.distanceForCoinsSpawn = 100;

    this.ennemyDistanceTolerance = 10;
    this.ennemyValue = 10;
    this.ennemiesSpeed = .6;
    this.ennemyLastSpawn = 0;
    this.distanceForEnnemiesSpawn = 50;

    this.status = "playing";
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__planet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ship__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sky__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__moon__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asteroid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(0);









window.addEventListener('load', init, false);

function init() {
  createScene();
  createLights();

  createShip();
  createPlanet();
  createSky();
  createMoons();
  createAsteroids();

  document.addEventListener('mousemove', handleCursorUpdate, false);
  loop();
}


/*----------------GAME INSTANCE----------------------*/
let game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]();
let newTime = new Date().getTime();
let oldTime = new Date().getTime();
let ennemiesArray = [];
let particlesArray = [];
let particlesInUse = [];
// debugger
/*--------------------------------------------------*/





/*-----------------------THREEJS STUFF--------------------------------*/
let windowHeight, windowWidth, scene, camera, fieldOfView,
aspectRatio, nearPlane, farPlane, renderer, gameContainer;
/*--------------------------------------------------------------------*/


//SCREEN STUFF

function createScene() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  scene = new THREE.Scene();

  scene.fog = new THREE.Fog(__WEBPACK_IMPORTED_MODULE_6__util__["a" /* Colors */].light, 100, 950);

  // Create the camera
  aspectRatio = windowWidth / windowHeight;
  fieldOfView = 60; // FIXME: orig 60
  // fieldOfView = 160; // FIXME: orig 60 super zoom out
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
  camera.position.y = game.shipDefaultHeight;

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

function handleWindowResize() {
  // update height and width of the renderer and the camera
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  renderer.setSize(windowWidth, windowHeight);
  camera.aspect = windowWidth / windowHeight;
  camera.updateProjectionMatrix();
}

/*=============================LIGHTS================================*/
let ambientLight;
let hemisphereLight;
let overheadLight;

function createLights() {
  hemisphereLight = new THREE.HemisphereLight(__WEBPACK_IMPORTED_MODULE_6__util__["a" /* Colors */].light, 0x000000, .9)
  ambientLight = new THREE.AmbientLight(__WEBPACK_IMPORTED_MODULE_6__util__["a" /* Colors */].light, .5);
  //overhead is shining from above
  overheadLight = new THREE.DirectionalLight(__WEBPACK_IMPORTED_MODULE_6__util__["a" /* Colors */].light, .9); // // NOTE: flash this on impact!

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
  scene.add(hemisphereLight);                  // NOTE: try removing or reducing this for nigth time background
  scene.add(overheadLight);
  scene.add(ambientLight);

  // let cameraHelper = new THREE.CameraHelper(overheadLight.shadow.camera);
  // scene.add(cameraHelper);

}
/*-------------------------------------------------------------------*/



/*==========================Object_Creators==========================*/

/*--------------------------Planet-----------------------------------*/
const planet = new __WEBPACK_IMPORTED_MODULE_1__planet__["a" /* default */]();
const createPlanet = function createPlanet(){
  planet.mesh.position.y = -600;
  scene.add(planet.mesh);
};
/*--------------------------Sky-------------------------------------*/
const sky = new __WEBPACK_IMPORTED_MODULE_3__sky__["a" /* default */]();
function createSky(){
  sky.mesh.position.y = -700;
  sky.mesh.position.z = -600;
  scene.add(sky.mesh);
}
/*--------------------------Ship-------------------------------------*/
const spaceship = new __WEBPACK_IMPORTED_MODULE_2__ship__["a" /* default */]();
function createShip(){
  spaceship.mesh.scale.set(.20,.20,.20);
  spaceship.mesh.position.y = 100;
  scene.add(spaceship.mesh);
}
/*--------------------------Moons-------------------------------------*/
const moon1 = new __WEBPACK_IMPORTED_MODULE_4__moon__["a" /* default */]();
const moon2 = new __WEBPACK_IMPORTED_MODULE_4__moon__["a" /* default */]();
function createMoons(){
  moon1.mesh.position.y = 60; // push it a little bit at the bottom of the scene
  moon1.mesh.position.x = -560;
  moon1.mesh.position.z = -660;

  moon2.mesh.position.y = 280;
  moon2.mesh.position.x = 260;
  moon2.mesh.position.z = -360;
  scene.add(moon1.mesh);
  scene.add(moon2.mesh);
}
/*--------------------------Asteroids---------------------------------*/
const asteroid = new __WEBPACK_IMPORTED_MODULE_5__asteroid__["a" /* default */]();
function createAsteroids(){
  asteroid.mesh.scale.set(.90,.90,.90);
  asteroid.mesh.position.y = 80;
  asteroid.mesh.position.x = 80;
  scene.add(asteroid.mesh);
}
/*-------------------------------------------------------------------*/



let loop = function loop(){
  var speedup = 0.3;

  sky.mesh.rotation.z += .001*speedup;
  planet.mesh.rotation.z += .01*speedup;
  // planet.mesh.position.y += Math.sin(0.05);

  moon2.mesh.rotation.y += .001;
  moon2.mesh.rotation.x += .003;
  moon2.mesh.rotation.z += .001;

  moon1.mesh.rotation.y += .002;
  moon1.mesh.rotation.x += .002;
  moon1.mesh.rotation.z += .002;

  asteroid.mesh.rotation.y += .003;
  asteroid.mesh.rotation.z += .003;

  // moon.mesh.position.y += Math.PI;
  updateShip();
  renderer.render(scene, camera);
  // call the loop function again
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
  var tx = (-1 + (event.clientX / windowWidth)*2);
  // inverse because the 2D y-axis goes the opposite direction of the 3D y-axis
  var ty = 1 - (event.clientY / windowHeight)*2;
  // var ty = (-1 + (event.clientY / windowWidth)*4); // inverse joystick mode

  cursorPosition = {
    x: tx,
    y: ty
  };
}

function updateShip(){
  // move the spaceship between -100 and 100 on the horizontal axis,
  // and between 25 and 175 on the vertical axis,
  // depending on the mouse position which ranges between -1 and 1 on both axes;
  // to achieve that we use a normalize function (see below)

  var updatedX = normalize(cursorPosition.x, -1, 1, -100, 100);
  // var updatedY = normalize(cursorPosition.y, -1, 1, 25, 175);
  var updatedY = normalize(cursorPosition.y, -1, 1, 25, 205);

  // update the spaceship's position
  spaceship.mesh.position.y = updatedY;
  spaceship.mesh.position.x = updatedX;
  spaceship.JetFire.rotation.x += 0.3;
  // spaceship.JetFire.scale.x += 0.3;
}



function normalize(v,vmin,vmax,tmin, tmax){
  var nv = Math.max(Math.min(v,vmax), vmin);
  var dv = vmax-vmin;
  var pc = (nv-vmin)/dv;
  var dt = tmax-tmin;
  var tv = tmin + (pc*dt);
  return tv;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);



let game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]();

const Planet = function Planet(){
  // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
  var geomPlanet = new THREE.CylinderGeometry(game.planetRadius, game.planetRadius, game.planetLength, 60, 10);

  // rotate the planet on the x axis
  geomPlanet.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
  geomPlanet.mergeVertices();
  var l = geomPlanet.vertices.length;

  this.mountains = [];
  for (var i=0;i<l;i++){
    var vertex = geomPlanet.vertices[i];
    //vertex.y = Math.random()*30;
    this.mountains.push(
      {
        y:      vertex.y,
        x:      vertex.x,
        z:      vertex.z,
        angle:  Math.random()*Math.PI*2,
        amp:    game.mountainsMinAmp + Math.random()*(game.mountainsMaxAmp-game.mountainsMinAmp),
        speed:  game.mountainsMinSpeed + Math.random()*(game.mountainsMaxSpeed - game.mountainsMinSpeed)
      }
    );
  }

  var material = new THREE.MeshPhongMaterial({wireframe:false,
  // var material = new THREE.MeshBasicMaterial({wireframe:false,
    color:__WEBPACK_IMPORTED_MODULE_1__util__["a" /* Colors */].light,
    transparent:true,
    opacity:.9,                             // NOTE planet opacity
    shading:THREE.FlatShading,
  });


  this.mesh = new THREE.Mesh(geomPlanet, material);
  this.mesh.receiveShadow = true;
  this.mesh.name = "mountains";
};


/* harmony default export */ __webpack_exports__["a"] = (Planet);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


class SpaceShip {
  constructor() {
    this.mesh = new THREE.Object3D();
    this.mesh.name = "spaceShip";

    // Cabin
    var geomCabin = new THREE.BoxGeometry(180,5,5,1,1,1);
    var matCabin = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].ship, shading:THREE.FlatShading});

    geomCabin.vertices[4].y+=10;
    geomCabin.vertices[4].z-=20;
    geomCabin.vertices[5].y+=10;
    geomCabin.vertices[5].z+=20;
    geomCabin.vertices[6].y-=10;
    geomCabin.vertices[6].z-=20;
    geomCabin.vertices[7].y-=10;
    geomCabin.vertices[7].z+=20;

    var cabin = new THREE.Mesh(geomCabin, matCabin);
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    this.mesh.add(cabin);

    // Wings
    var geomSideWing = new THREE.BoxGeometry(30,3,180,1,1,1);
    var matSideWing = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].ship, shading:THREE.FlatShading});
    var sideWing1 = new THREE.Mesh(geomSideWing, matSideWing);
    var sideWing2 = new THREE.Mesh(geomSideWing, matSideWing);
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
    // var geomLaser = new THREE.CylinderGeometry(1, 1, 1900, 10);
    // var matLaser = new THREE.MeshPhongMaterial({wireframe:true, color:Colors.pinkNeon});
    // var laserBeam = new THREE.Mesh(geomLaser, matLaser);
    // laserBeam.position.set(940,-22, 86);
    // laserBeam.rotation.z = Math.PI/2;
    // this.mesh.add(laserBeam);




    // wingspears
    var geomWingSpear = new THREE.CylinderGeometry(2.2, 2.2, 50, 10);
    var matWingSpear = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].ship, shading:THREE.FlatShading});
    var wingSpear1 = new THREE.Mesh(geomWingSpear, matWingSpear);
    var wingSpear2 = new THREE.Mesh(geomWingSpear, matWingSpear);
    var wingSpear3 = new THREE.Mesh(geomWingSpear, matWingSpear);
    var wingSpear4 = new THREE.Mesh(geomWingSpear, matWingSpear);

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
    var geomMainThruster = new THREE.CylinderGeometry(5, 10, 20, 10);
    var matMainThruster = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].ship, shading:THREE.FlatShading});
    var mainThruster = new THREE.Mesh(geomMainThruster, matMainThruster);
    mainThruster.position.set(-100,0, 0);
    mainThruster.rotation.z = Math.PI/2;

    mainThruster.castShadow = true;
    mainThruster.receiveShadow = true;
    this.mesh.add(mainThruster);


    // cockpit
    var geomcockPit = new THREE.BoxGeometry(40,5,20,1,1,1);
    var matcockPit = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].grey,transparent:true, opacity:.8, shading:THREE.FlatShading});;
    var cockpit = new THREE.Mesh(geomcockPit, matcockPit);
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

    var geomJetFire = new THREE.BoxGeometry(40,10,10,1,1,1);
    geomJetFire.vertices[4].y-=5;
    geomJetFire.vertices[4].z+=5;
    geomJetFire.vertices[5].y-=5;
    geomJetFire.vertices[5].z-=5;
    geomJetFire.vertices[6].y+=5;
    geomJetFire.vertices[6].z+=5;
    geomJetFire.vertices[7].y+=5;
    geomJetFire.vertices[7].z-=5;
    var matJetFire = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].mustard, shading:THREE.FlatShading});
    this.JetFire = new THREE.Mesh(geomJetFire, matJetFire);

    this.JetFire.castShadow = true;
    this.JetFire.receiveShadow = true;

    var geomBlade = new THREE.BoxGeometry(2,14,10,1,1,1);
    var matBlade = new THREE.MeshPhongMaterial({wireframe:false, color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].red, shading:THREE.FlatShading});
    var blade1 = new THREE.Mesh(geomBlade, matBlade);
    blade1.position.set(10,0,0);

    blade1.castShadow = true;
    blade1.receiveShadow = true;

    var blade2 = blade1.clone();
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
}


/* harmony default export */ __webpack_exports__["a"] = (SpaceShip);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);



const Star = function(){
  // An empty container that will hold the different stars in the cluster
  this.mesh = new THREE.Object3D();

  // create a cube geometry;
  // this shape will be duplicated to create the starcluster
  var geom = new THREE.BoxGeometry(1,1,1);  /// original starboxes
  // var geom = new THREE.SphereGeometry( 20, 5, 100 );

  // simple white material will do the trick
  var mat = new THREE.MeshBasicMaterial({wireframe:true,
    color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].white,
  });

  // duplicate the geometry a random number of times
  // var nBlocs = 3+Math.floor(Math.random()*3);
  var nBlocs = 6;

  for (var i = 0; i<nBlocs; i++){

    // create the mesh by cloning the geometry
    var m = new THREE.Mesh(geom, mat);

    // set the position and the rotation of each cube randomly
    m.position.x = i*15;
    m.position.y = Math.random()*70 + 800;
    m.position.z = Math.random()*60;
    m.rotation.z = Math.random()*Math.PI*2;
    m.rotation.y = Math.random()*Math.PI*2;

    // set the size of the cube randomly
    var s = .1 + Math.random()*.9;
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
  this.nStars = 200;

  // To distribute the stars consistently,
  // we need to place them according to a uniform angle
  var stepAngle = Math.PI*2 / this.nStars;

  // create star clusters
  for(var i=0; i<this.nStars; i++){
    var star = new Star();

    // set the rotation and the position of each star;
    // for that we use a bit of trigonometry
    var a = stepAngle*i; // this is the final angle of the star
    var h = 750 + Math.random()*200; // this is the distance between the center of the axis and the star itself

    // Trigonometry!!! I hope you remember what you've learned in Math :)
    // in case you don't:
    // we are simply converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
    star.mesh.position.y = Math.sin(a)*h;
    star.mesh.position.x = Math.cos(a)*h;

    // rotate the star according to its position
    star.mesh.rotation.z = a + Math.PI/2;

    // for depth percep, position the stars
    // at random depths inside of the scene
    star.mesh.position.z = -400-Math.random()*400;

    // set a random scale for each star
    var s = 1.5+Math.random()*1.4; // first num = inner radius // sec = width of doughnut
    star.mesh.scale.set(s,s,s);

    this.mesh.add(star.mesh);
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Sky);


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);



class Asteroid {
  constructor() {
    this.geom = new THREE.BoxGeometry(10,10,10,3,3,3);

    this.mat = new THREE.MeshBasicMaterial({wireframe:true,
      color:__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Colors */].pinkNeon,
      // transparent:true,
      // opacity:.9,
      shading:THREE.FlatShading,
    });

    this.mesh = new THREE.Mesh(this.geom, this.mat);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }
}


// ES5
// const Asteroid = function Asteroid() {
//   this.geom = new THREE.BoxGeometry(10,10,10,3,3,3);
//
//   this.mat = new THREE.MeshBasicMaterial({wireframe:true,
//     color:Colors.pinkNeon,
//     // transparent:true,
//     // opacity:.9,
//     shading:THREE.FlatShading,
//   });
//
//   // this.geom.vertices[4].y+=10;
//   // this.geom.vertices[4].z-=20;
//   // this.geom.vertices[4].x-=20;
//
//
//   this.mesh = new THREE.Mesh(this.geom, this.mat);
//   this.mesh.castShadow = true;
//   this.mesh.receiveShadow = true;
//
// };


/* harmony default export */ __webpack_exports__["a"] = (Asteroid);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map