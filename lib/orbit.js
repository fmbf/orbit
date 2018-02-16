// import { Colors, selectRandomColor, currentColor } from './util';
import { scene, createScene, windowHeight, windowWidth,
         camera, fieldOfView, aspectRatio, nearPlane,
         farPlane, renderer, gameContainer
} from './three_util/scene_util';

import { ambientLight, hemisphereLight,
         overheadLight, createLights } from './three_util/lights_util';

// import Game from './game';
import Planet from './planet';
import SpaceShip from './ship';
import Sky from './sky';
import Moon from './moon';
import Asteroid from './asteroid';
// import AllAsteroids from './asteroid_sky';



window.addEventListener('load', init, false);

function init() {
  let playerHP = document.getElementById("playerHP");

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
// export let game = new Game();
// let newTime = new Date().getTime();
// let oldTime = new Date().getTime();
let startTime = new Date().getTime();
let currentTime = new Date().getTime();

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
// const asteroid = new Asteroid();
// function createAsteroids(){
//   asteroid.mesh.scale.set(.90,.90,.90);
//   asteroid.mesh.position.y = 10 + (Math.random()*180);
//   // asteroid.mesh.position.x = 80;
//   asteroid.mesh.position.x = 250;
//   scene.add(asteroid.mesh);
// }

let singleAst;
let asteroid;
function createAsteroids(){

  for (var i = 0; i < 5; i++) {
    asteroid = new Asteroid();
    asteroid.mesh.scale.set(1.90, 1.90, 1.90);
    asteroid.mesh.position.y = 20 + (Math.random()*170);
    asteroid.mesh.position.x = 500 + (i * Math.random()*200);
    scene.add(asteroid.mesh);
    asteroidsArray.push(asteroid);
  }
}


/*-------------------------------------------------------------------*/

// let playTime;
let positionComparison;
let distanceBetweenX;
let distanceBetweenY;
let speedup;
let counter = 0;
let loop = function loop(){
  // counter++;
  // document.getElementById("time").innerHTML = `${counter}`;


  overheadLight.intensity = 0.3;
  speedup = 0.3 / (spaceship.health*.01);


  sky.mesh.rotation.z += .003;
  planet.mesh.rotation.z += .001;
  // planet.mesh.position.y += Math.sin(0.05);

  moon2.mesh.rotation.y += .001;
  moon2.mesh.rotation.x += .003;
  moon2.mesh.rotation.z += .001;

  moon1.mesh.rotation.y += .002;
  moon1.mesh.rotation.x += .002;
  moon1.mesh.rotation.z += .002;

  for (var i = 0; i < asteroidsArray.length; i++) {
    singleAst = asteroidsArray[i];
    updateAsteroids(singleAst);
  }


  if (spaceship.health > 0) {

    updateShip();

  } else {

    // when you die loose game over
    spaceship.mesh.rotation.y += (-Math.PI/2)*.07;
    spaceship.mesh.position.y -= 1.05;
    spaceship.mesh.position.x -= .85;
    document.getElementById("game-over").style.display = `block`;
  }






  renderer.render(scene, camera);
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
  let updatedX = normalize(cursorPosition.x, -1, 1, -20, 20);
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
  a.mesh.rotation.y += .01;
  a.mesh.rotation.z += .01;


  positionComparison = {
    x:  (spaceship.mesh.position.x - a.mesh.position.x),
    y:  (spaceship.mesh.position.y - a.mesh.position.y)
  };

  distanceBetweenX = Math.abs(positionComparison.x);
  distanceBetweenY = Math.abs(positionComparison.y);




  if (Math.floor(distanceBetweenX) < 30 && distanceBetweenY < 15) {
    handleCrash(a);
  }

  if (a.mesh.position.x <= -200) {
    a.mesh.position.x = 230 + Math.random()*20;
    a.mesh.position.y = 20 + (Math.random()*170);
  }
}

function handleCrash(hitAsteroid) {
  overheadLight.intensity = 20;
  // hitAsteroid.mesh.scale.set(2.90, 2.90,2.90);
  // hitAsteroid.mesh.position.x = 230 + Math.random()*20;
  // hitAsteroid.mesh.position.y = 20 + (Math.random()*170);
  spaceship.mesh.rotation.x -= 20;


  spaceship.decreaseHP();
  document.getElementById("playerHP").style.fontSize = "60px";
  document.getElementById("playerHP").innerHTML = `${spaceship.health}`;
  setTimeout(() => document.getElementById("playerHP").style.fontSize = "20px", 500)
  setTimeout(() => spaceship.mesh.rotation.x = 0, 300)



  selectRandomColor();
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
export const Colors = {
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


export function selectRandomColor() {


  currentColor = lightColors[Math.floor(Math.random()*lightColors.length)];
}

export let currentColor = 0x68c3c0;




//----------------------------------------------------------//
// var audio = new Audio('audio_file.mp3');
// audio.play();
