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
import Coin from './coins';
// import AllAsteroids from './asteroid_sky';

window.addEventListener('load', init, false);

function init() {
  let playerHP = document.getElementById("playerHP");
  // document.getElementById("music-player").play();

  createScene();
  createLights();

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
let singleAst;
let asteroid;
function createAsteroids(x = 5){

  for (var i = 0; i < x; i++) {
    asteroid = new Asteroid();
    asteroid.mesh.scale.set(1.90, 1.90, 1.90);
    asteroid.mesh.position.y = 20 + (Math.random()*170);
    asteroid.mesh.position.x = 500 + (i * Math.random()*300);
    scene.add(asteroid.mesh);
    asteroidsArray.push(asteroid);
  }
}
/*--------------------------Coins---------------------------------*/

let coin;
function createCoin(){
  coin = new Coin();
  coin.mesh.scale.set(0.70, 0.70, 0.70);
  // coin.mesh.position.y = 20 + (Math.random()*170);
  coin.mesh.position.x = 1800;
  // coin.mesh.position.x = 40;
  coin.mesh.position.y = 80;
  scene.add(coin.mesh);
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
  let updatedX = normalize(cursorPosition.x, -1, 1, -80, 20);
  let updatedY = normalize(cursorPosition.y, -1, 1, 25, 175);
  // let updatedY = normalize(cursorPosition.y, -1, 1, 25, 175);

  spaceship.mesh.position.y = updatedY;
  spaceship.mesh.position.x = updatedX;

  spaceship.JetFire.rotation.x += 0.3;
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

function handleNoAmmo() {
  overheadLight.intensity = 10;
  setTimeout(() => overheadLight.intensity = 0.3, 100);
  spaceship.stopLaser();
}

function handleLaserTrigger() {
  if (spaceship.ammo > 0) {
    overheadLight.intensity = 20;
    setTimeout(() => overheadLight.intensity = 0.3, 100);

    spaceship.startLaser();
    document.getElementById("ammo-bar").style.width = `${spaceship.ammo}px`;
    document.getElementById("ammo-bar").style.backgroundColor = "#ffe066";
    setTimeout(() => document.getElementById("ammo-bar").style.backgroundColor = "#68c3c0", 300);
  } else {
    handleNoAmmo();
  }
}

function handleShoot() {
  document.body.onkeypress = function(e) {
    if (e.charCode === 32) {
      handleLaserTrigger();
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
  overheadLight.intensity = 20;
  setTimeout(() => overheadLight.intensity = 0.3, 100);
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
  overheadLight.intensity = 20;
  setTimeout(() => overheadLight.intensity = 0.3, 100);
  // hitAsteroid.mesh.position.x += 20 + Math.random()*20;
  hitAsteroid.mesh.position.x = 230 + Math.random()*100;
  hitAsteroid.mesh.position.y = 20 + (Math.random()*170);


  scoreCounter += 100;
  document.getElementById("time").style.fontSize = "40px";
  // document.getElementById("playerHP").innerHTML = `${spaceship.health/2}`;
  setTimeout(() => document.getElementById("time").style.fontSize = "17px", 200)

  setTimeout(() => spaceship.stopLaser(), 400);

  // flashLights();
}


function updateCoin() {
  // coin.mesh.scale.set(.20,.20,.20);
  // setTimeout(coin.mesh.scale.set(1.70, 1.70, 1.70), 800);

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
  if (Math.floor(distanceBetweenX) < 30 && distanceBetweenY < 8) {
    coin.mesh.scale.set(6.30, 6.30, 6.30);
    setTimeout( () => coin.mesh.scale.set(0.70, 0.70, 0.70), 2600);
    setTimeout( () => {coin.mesh.position.x = 1630 + Math.random()*100; coin.mesh.position.y = 20 + (Math.random()*170);}, 150);
    // flashLights();

    // -----  BoostAmmo  -----  //
    document.getElementById("ammo-bar").style.backgroundColor = "#ffe066";
    setTimeout(() => document.getElementById("ammo-bar").style.backgroundColor = "#68c3c0", 800);
    spaceship.boostAmmo();
    // -----  ---------  -----  //

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
