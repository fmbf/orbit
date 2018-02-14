import { Colors } from './util';
import Asteroid from './asteroid';


const SingleAsteroid = function(){
  // An empty container that will hold the different asteroids in the cluster
  this.mesh = new THREE.Object3D();

  // this shingle shape will be duplicated to create the asteroidcluster
  var geom = new THREE.BoxGeometry(10,10,10,3,3,3);
  var mat = new THREE.MeshBasicMaterial({wireframe:true,
    color:Colors.pinkNeon,
  });

  // duplicate the geometry a random number of times
  let nBlocs = 2; // number of asteroids in cluster

  for (var i = 0; i<nBlocs; i++){
    // create the mesh by cloning the cluster
    var m = new THREE.Mesh(geom, mat);

    // set the position and the rotation of each cube randomly
    m.position.x = i*15;
    m.position.y = Math.random()*70 + 800;
    // m.position.z = Math.random()*60;
    // m.position.z = Math.random()*60;
    m.rotation.z = Math.random()*Math.PI*2;
    m.rotation.y = Math.random()*Math.PI*2;

    // set the size of the cube randomly
    var s = .1 + Math.random()*.9;
    m.scale.set(s,s,s);

    // allow each cube to cast and to receive shadows
    m.castShadow = true;        // NOTE I dont think asteroids ever receive or cast shadows
    m.receiveShadow = true;

    // add the cube to the container we first created
    this.mesh.add(m);
  }
};



const AllAsteroids = function(){
  // empty container
  this.mesh = new THREE.Object3D();

  // choose a number of asteroids to be scattered in the sky
  this.nAsteroids = 20;

  // To distribute the asteroids consistently,
  // we need to place them according to a uniform angle
  var stepAngle = Math.PI*2 / this.nAsteroids;

  // create asteroid clusters
  for(var i=0; i<this.nAsteroids; i++){
    var asteroid = new SingleAsteroid();

    // set the rotation and the position of each asteroid;
    var a = stepAngle*i; // this is the final angle of the asteroid
    var h = 750 + Math.random()*200; // this is the distance between the center of the axis and the asteroid itself

    // Trigonometry
    // convert polar coordinates (angle, distance) into Cartesian coordinates (x, y)
    asteroid.mesh.position.y = Math.sin(a)*h;
    asteroid.mesh.position.x = Math.cos(a)*h;

    // rotate the asteroid according to its position
    asteroid.mesh.rotation.z = a + Math.PI/2;

    // for depth percep, position the asteroids
    // at random depths inside of the scene
    // asteroid.mesh.position.z = -400-Math.random()*400;

    // set a random scale for each asteroid
    var s = 1.5+Math.random()*1.4; // first num = inner radius // sec = width of doughnut
    asteroid.mesh.scale.set(s,s,s);

    this.mesh.add(asteroid.mesh);
  }
};


export default AllAsteroids;
