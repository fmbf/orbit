import Game from './game';
import Planet from './planet';
import SpaceShip from './ship';
import Sky from './sky';
import Moon from './moon';
import Asteroid from './asteroid';
import { Colors } from './util';


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
let game = new Game();
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

  scene.fog = new THREE.Fog(Colors.light, 100, 950);

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
  hemisphereLight = new THREE.HemisphereLight(Colors.light, 0x000000, .9)
  ambientLight = new THREE.AmbientLight(Colors.light, .5);
  //overhead is shining from above
  overheadLight = new THREE.DirectionalLight(Colors.light, .9); // // NOTE: flash this on impact!

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
const planet = new Planet();
const createPlanet = function createPlanet(){
  planet.mesh.position.y = -600;
  scene.add(planet.mesh);
};
/*--------------------------Sky-------------------------------------*/
const sky = new Sky();
function createSky(){
  sky.mesh.position.y = -700;
  sky.mesh.position.z = -600;
  scene.add(sky.mesh);
}
/*--------------------------Ship-------------------------------------*/
const spaceship = new SpaceShip();
function createShip(){
  spaceship.mesh.scale.set(.20,.20,.20);
  spaceship.mesh.position.y = 100;
  scene.add(spaceship.mesh);
}
/*--------------------------Moons-------------------------------------*/
const moon1 = new Moon();
const moon2 = new Moon();
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
const asteroid = new Asteroid();
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
