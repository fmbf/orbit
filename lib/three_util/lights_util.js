import { scene } from './scene_util';
import { Colors } from '../util';


export let ambientLight;
export let hemisphereLight;
export let overheadLight;

export function createLights() {
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
