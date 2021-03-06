import { Colors } from './util';


const Star = function(){
  // An empty container that will hold the different stars in the cluster
  this.mesh = new THREE.Object3D();

  // this shingle shape will be duplicated to create the starcluster
  let geom = new THREE.BoxGeometry(1,1,1);  /// original starboxes
  let mat = new THREE.MeshBasicMaterial({wireframe:true,
    color:Colors.white,
  });

  // duplicate the geometry a random number of times
  let nBlocs = 6; // number of stars in cluster

  for (let i = 0; i<nBlocs; i++){
    // create the mesh by cloning the cluster
    let m = new THREE.Mesh(geom, mat);

    // set the position and the rotation of each cube randomly
    m.position.x = i*15;
    m.position.y = Math.random()*70 + 800;
    m.position.z = Math.random()*60;
    m.rotation.z = Math.random()*Math.PI*2;
    m.rotation.y = Math.random()*Math.PI*2;

    // set the size of the cube randomly
    let s = .1 + Math.random()*.9;
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
  this.nStars = 50;

  // To distribute the stars consistently,
  // we need to place them according to a uniform angle
  let stepAngle = Math.PI*2 / this.nStars;

  // create star clusters
  for(let i=0; i<this.nStars; i++){
    let star = new Star();

    // set the rotation and the position of each star;
    let a = stepAngle*i; // this is the final angle of the star
    let h = 750 + Math.random()*200; // this is the distance between the center of the axis and the star itself

    // Trigonometry
    // convert polar coordinates (angle, distance) into Cartesian coordinates (x, y)
    star.mesh.position.y = Math.sin(a)*h;
    star.mesh.position.x = Math.cos(a)*h;

    // rotate the star according to its position
    star.mesh.rotation.z = a + Math.PI/2;

    // for depth percep, position the stars
    // at random depths inside of the scene
    star.mesh.position.z = -400-Math.random()*400;

    // set a random scale for each star
    let s = 1.5+Math.random()*1.4; // first num = inner radius // sec = width of doughnut
    star.mesh.scale.set(s,s,s);

    this.mesh.add(star.mesh);
  }
};


export default Sky;
