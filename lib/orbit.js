import { Colors, selectRandomColor, currentColor } from './util';
import { scene, createScene, windowHeight, windowWidth,
         camera, fieldOfView, aspectRatio, nearPlane,
         farPlane, renderer, gameContainer
} from './three_util/scene_util';

import { ambientLight, hemisphereLight,
         overheadLight, createLights } from './three_util/lights_util';

import Game from './game';
import Planet from './planet';
import SpaceShip from './ship';
import Sky from './sky';
import Moon from './moon';
import Asteroid from './asteroid';
// import AllAsteroids from './asteroid_sky';



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
export let game = new Game();
// let newTime = new Date().getTime();
// let oldTime = new Date().getTime();
let asteroidsArray = [];
/*--------------------------------------------------*/




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
/*--------------------------AsteroidSky-------------------------------------*/
// const asteroidSky = new AllAsteroids();
// function createAsteroids(){
//   asteroidSky.mesh.position.y = -700;
//   // asteroidSky.mesh.position.z = -300;
//   scene.add(asteroidSky.mesh);
// }
/*--------------------------Ship-------------------------------------*/
export const spaceship = new SpaceShip();
function createShip(){
  spaceship.mesh.scale.set(.20,.20,.20);
  spaceship.mesh.position.y = 100;
  // spaceship.mesh.rotation.x = 100;
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
  asteroid.mesh.position.y = 10 + (Math.random()*180);
  // asteroid.mesh.position.x = 80;
  asteroid.mesh.position.x = 250;
  scene.add(asteroid.mesh);
}

/*-------------------------------------------------------------------*/


let loop = function loop(){
  let gameTicks = 0;
  gameTicks++;

  overheadLight.intensity = 0.9;


  let speedup = 0.3;
  // console.log('spaceship', spaceship.mesh.position.x);
  // console.log('asteroid', asteroid.mesh.position.y);

  let positionComparison = spaceship.mesh.position.sub(asteroid.mesh.position);
  let distanceBetweenX = Math.abs(positionComparison.x);
  let distanceBetweenY = Math.abs(positionComparison.y);
  // console.log('distanceBetweenX:', distanceBetweenX);
  // console.log('distanceBetweenY:', distanceBetweenY);

  let crashrangeX = 23;
  let crashrangeY = 10;


  if (Math.floor(distanceBetweenX) < 23 && distanceBetweenY < 10) {
    // console.log('COLLISION!!!!COLLISION!!!!COLLISION!!!!');
    handleCrash();
  }

  sky.mesh.rotation.z += .001*speedup;
  planet.mesh.rotation.z += .01*speedup;
  // planet.mesh.position.y += Math.sin(0.05);

  moon2.mesh.rotation.y += .001;
  moon2.mesh.rotation.x += .003;
  moon2.mesh.rotation.z += .001;

  moon1.mesh.rotation.y += .002;
  moon1.mesh.rotation.x += .002;
  moon1.mesh.rotation.z += .002;

  asteroid.mesh.rotation.y += .01;
  asteroid.mesh.rotation.z += .01;

  // asteroid movement
  asteroid.mesh.position.x -= 0.9;

  // asteroid.mesh.position.x = 0;
  // asteroid.mesh.position.y += Math.sin(gameTicks);
  asteroid.mesh.position.y += 0.5*Math.sin(asteroid.mesh.position.x/10);



  // asteroid.mesh.position.y = 110;

  if (asteroidsArray.length) {
    setInterval(asteroidsArray.push(new Asteroid()), 5000);
  } else {
    asteroidsArray.push(new Asteroid());
  }

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
  let deltaX = (-1 + (event.clientX / windowWidth)*2);
  // inverse because the 2D y-axis goes the opposite direction of the 3D y-axis
  let deltaY = 1 - (event.clientY / windowHeight)*2;
  // let deltaY = (-1 + (event.clientY / windowWidth)*4); // inverse joystick mode

  cursorPosition = {
    x: deltaX,
    y: deltaY
  };
}

function updateShip(){
  let updatedX = normalize(cursorPosition.x, -1, 1, -100, 100);
  // let updatedY = normalize(cursorPosition.y, -1, 1, 25, 175);
  let updatedY = normalize(cursorPosition.y, -1, 1, 25, 205);

  spaceship.mesh.position.y = updatedY;
  spaceship.mesh.position.x = updatedX;
  spaceship.JetFire.rotation.x += 0.3;
  // spaceship.JetFire.scale.x += 0.3;
}

function handleCrash() {
  overheadLight.intensity = 20;
  selectRandomColor();
  // console.log(currentColor);
  ambientLight.color.setHex( currentColor );
  hemisphereLight.color.setHex( currentColor );
  overheadLight.color.setHex( currentColor );
  scene.fog.color.setHex( currentColor );
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
