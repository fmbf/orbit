import Game from './game';
import Planet from './planet';
import SpaceShip from './ship';
import Sky from './sky';
import Moon from './moon';
import Enemy from './enemy';
import { Colors } from './util';


window.addEventListener('load', init, false);

function init() {
  createScene();
  createLights();

  createShip();
  createPlanet();
  createSky();
  createMoons();
  createEnemies();

  document.addEventListener('mousemove', handleMouseMove, false);
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
  camera.position.y = 120;

  // Create the renderer
  renderer = new THREE.WebGLRenderer({
    // Allow transparency to show the CSS gradient background
    alpha: true,

    // anti-aliasing; this is less performant,
    // but low-poly stuff should be fine
    antialias: true
  });

  // Make size of the renderer full screen
  renderer.setSize(windowWidth, windowHeight);

  // Enable shadow rendering
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

var ambientLight, hemisphereLight, overheadLight;

function createLights() {
  hemisphereLight = new THREE.HemisphereLight(Colors.light, 0x000000, .9)
  ambientLight = new THREE.AmbientLight(Colors.light, .5);

  //shining from above
  overheadLight = new THREE.DirectionalLight(Colors.light, .9); // // NOTE: flash this on impact!

  // Set the direction of the light
  overheadLight.position.set(150, 350, 350); // first value is X pos, could move to simulate sun movement

  // Allow shadow casting
  overheadLight.castShadow = true;

  // define the visible area of the projected shadow
  overheadLight.shadow.camera.left = -400;
  overheadLight.shadow.camera.right = 400;
  overheadLight.shadow.camera.top = 400;
  overheadLight.shadow.camera.bottom = -400;
  overheadLight.shadow.camera.near = 1;
  overheadLight.shadow.camera.far = 1000;
  overheadLight.shadow.mapSize.width = 4096;
  overheadLight.shadow.mapSize.height = 4096;

  // define the resolution of the shadow; the higher the better,
  // but also the more expensive and less performant
  overheadLight.shadow.mapSize.width = 2048;
  overheadLight.shadow.mapSize.height = 2048;

  // to activate the lights, just add them to the scene
  scene.add(hemisphereLight);                  // NOTE: try removing or reducing this for nigth time background
  scene.add(overheadLight);
  scene.add(ambientLight);
}




const planet = new Planet();
const createPlanet = function createPlanet(){
  planet.mesh.position.y = -600;
  scene.add(planet.mesh);
};

const sky = new Sky();
function createSky(){
  sky.mesh.position.y = -700;
  sky.mesh.position.z = -600;
  // sky.mesh.position.y = -400;
  scene.add(sky.mesh);
}

const spaceship = new SpaceShip();
function createShip(){
  spaceship.mesh.scale.set(.20,.20,.20);
  spaceship.mesh.position.y = 100;
  scene.add(spaceship.mesh);
}

const moon = new Moon();
const moon2 = new Moon();

function createMoons(){
  // push it a little bit at the bottom of the scene
  moon.mesh.position.y = 60;
  moon.mesh.position.x = -560;
  moon.mesh.position.z = -660;

  moon2.mesh.position.y = 280;
  moon2.mesh.position.x = 260;
  // moon2.mesh.position.x = 260 +  Math.random()*300;
  // moon2.mesh.position.y = 260 +  Math.random()*300;
  moon2.mesh.position.z = -360;

  // add the mesh of the moon to the scene
  scene.add(moon.mesh);
  scene.add(moon2.mesh);
}

const enemy = new Enemy();
function createEnemies(){
  enemy.mesh.scale.set(.90,.90,.90);
  enemy.mesh.position.y = 80;
  enemy.mesh.position.x = 80;
  scene.add(enemy.mesh);
}



let loop = function loop(){
  var speedup = 0.3;

  sky.mesh.rotation.z += .001*speedup;
  planet.mesh.rotation.z += .01*speedup;
  // planet.mesh.position.y += Math.sin(0.05);

  moon2.mesh.rotation.y += .001;
  moon2.mesh.rotation.x += .003;
  moon2.mesh.rotation.z += .001;

  moon.mesh.rotation.y += .002;
  moon.mesh.rotation.x += .002;
  moon.mesh.rotation.z += .002;

  enemy.mesh.rotation.y += .02;
  enemy.mesh.rotation.z += .02;

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


function handleMouseMove(event) {

  // here we are converting the mouse position value received
  // to a normalized value varying between -1 and 1;
  // this is the formula for the horizontal axis:
  var tx = (-1 + (event.clientX / windowWidth)*2);

  // for the vertical axis, we need to inverse the formula
  // because the 2D y-axis goes the opposite direction of the 3D y-axis
  var ty = 1 - (event.clientY / windowHeight)*2;
  cursorPosition = {x:tx, y:ty};
}

function updateShip(){
  // move the spaceship between -100 and 100 on the horizontal axis,
  // and between 25 and 175 on the vertical axis,
  // depending on the mouse position which ranges between -1 and 1 on both axes;
  // to achieve that we use a normalize function (see below)

  var targetX = normalize(cursorPosition.x, -1, 1, -100, 100);
  var targetY = normalize(cursorPosition.y, -1, 1, 25, 175);

  // update the spaceship's position
  spaceship.mesh.position.y = targetY;
  spaceship.mesh.position.x = targetX;
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
