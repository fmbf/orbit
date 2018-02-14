import { game } from '../orbit';
import { Colors } from '../util';


// import { game, deltaTime, newTime, oldTime, ennemiesPool,
//          particlesPool, particlesInUse, resetGame
// } from './game';


export let camera, fieldOfView,
aspectRatio, nearPlane, farPlane, renderer, gameContainer;

export let scene = new THREE.Scene();
export let windowHeight, windowWidth;


export const createScene = function createScene() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  scene.fog = new THREE.Fog(Colors.light, 100, 950);

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
  // camera.position.y = game.shipDefaultHeight;

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
