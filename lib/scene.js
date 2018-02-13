// // keep on orbit.js
// // too confusing to abstract
//
//
// let windowHeight;
// let windowWidth;
// let mousePos = { x: 0, y: 0 };
// let scene;
//
// let camera, fieldOfView,
// aspectRatio, nearPlane, farPlane, renderer, gameContainer;
//
// let gameScene = function createScene() {
//   windowWidth = window.innerWidth;
//   windowHeight = window.innerHeight;
//
//   scene = new THREE.Scene();
//   scene.fog = new THREE.Fog(Colors.light, 100, 950);
//
//   // camera vars
//   aspectRatio = windowWidth / windowHeight;
//   fieldOfView = 60; // FIXME: orig 60
//   // fieldOfView = 160; // FIXME: orig 60 super zoom out
//   nearPlane = 1;
//   farPlane = 10000;
//
//   // create camera
//   camera = new THREE.PerspectiveCamera(
//     fieldOfView,
//     aspectRatio,
//     nearPlane,
//     farPlane
//     );
//
//   // Set the position of the camera
//   camera.position.x = 10; // originally 10
//   camera.position.z = 200; // originally 200
//   camera.position.y = 120;
//
//   // Create the renderer
//   renderer = new THREE.WebGLRenderer({
//     // Allow transparency to show the CSS gradient background
//     alpha: true,
//
//     // anti-aliasing; this is less performant,
//     // but low-poly stuff should be fine
//     antialias: true
//   });
//
//   // Make size of the renderer full screen
//   renderer.setSize(windowWidth, windowHeight);
//
//   // Enable shadow rendering
//   renderer.shadowMap.enabled = true;
//
//   // Append renderer to the HTML container
//   gameContainer = document.getElementById('world');
//   gameContainer.appendChild(renderer.domElement);
//
//   // update camera and renderer on window resize
//   window.addEventListener('resize', handleWindowResize, false);
// }
//
// function handleWindowResize() {
//   // update height and width of the renderer and the camera
//   windowHeight = window.innerHeight;
//   windowWidth = window.innerWidth;
//   renderer.setSize(windowWidth, windowHeight);
//   camera.aspect = windowWidth / windowHeight;
//   camera.updateProjectionMatrix();
// }
//
// var ambientLight, hemisphereLight, overheadLight;
//
// function createLights() {
//   hemisphereLight = new THREE.HemisphereLight(Colors.light, 0x000000, .9)
//   ambientLight = new THREE.AmbientLight(Colors.light, .5);
//
//   //shining from above
//   overheadLight = new THREE.DirectionalLight(Colors.light, .9); // // NOTE: flash this on impact!
//
//   // Set the direction of the light
//   overheadLight.position.set(150, 350, 350); // first value is X pos, could move to simulate sun movement
//
//   // Allow shadow casting
//   overheadLight.castShadow = true;
//
//   // define the visible area of the projected shadow
//   overheadLight.shadow.camera.left = -400;
//   overheadLight.shadow.camera.right = 400;
//   overheadLight.shadow.camera.top = 400;
//   overheadLight.shadow.camera.bottom = -400;
//   overheadLight.shadow.camera.near = 1;
//   overheadLight.shadow.camera.far = 1000;
//   overheadLight.shadow.mapSize.width = 4096;
//   overheadLight.shadow.mapSize.height = 4096;
//
//   // define the resolution of the shadow; the higher the better,
//   // but also the more expensive and less performant
//   overheadLight.shadow.mapSize.width = 2048;
//   overheadLight.shadow.mapSize.height = 2048;
//
//   // to activate the lights, just add them to the scene
//   scene.add(hemisphereLight); // NOTE: try removing or reducing this for nigth time background
//   scene.add(overheadLight);
//   scene.add(ambientLight);
// }
//
// export default gameScene;
