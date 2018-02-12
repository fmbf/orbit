import { Colors } from './util';

let SpaceShip = function(){
  this.mesh = new THREE.Object3D();
  this.mesh.name = "spaceShip";

  // Cabin
  var geomCabin = new THREE.BoxGeometry(180,5,5,1,1,1);
  var matCabin = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.ship, shading:THREE.FlatShading});

  geomCabin.vertices[4].y+=10;
  geomCabin.vertices[4].z-=20;
  geomCabin.vertices[5].y+=10;
  geomCabin.vertices[5].z+=20;
  geomCabin.vertices[6].y-=10;
  geomCabin.vertices[6].z-=20;
  geomCabin.vertices[7].y-=10;
  geomCabin.vertices[7].z+=20;

  var cabin = new THREE.Mesh(geomCabin, matCabin);
  cabin.castShadow = true;
  cabin.receiveShadow = true;
  this.mesh.add(cabin);

  // Wings
  var geomSideWing = new THREE.BoxGeometry(30,3,180,1,1,1);
  var matSideWing = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.ship, shading:THREE.FlatShading});
  var sideWing1 = new THREE.Mesh(geomSideWing, matSideWing);
  var sideWing2 = new THREE.Mesh(geomSideWing, matSideWing);
  sideWing1.position.set(-75,-3, 0);
  sideWing2.position.set(-75,-3, 0);
  sideWing2.rotation.x = Math.PI*1.07;
  sideWing1.rotation.x = -Math.PI*1.07;

  geomSideWing.vertices[4].y+=5;
  geomSideWing.vertices[4].z-=2;

  sideWing1.castShadow = true;
  sideWing1.receiveShadow = true;
  sideWing2.castShadow = true;
  sideWing2.receiveShadow = true;
  this.mesh.add(sideWing1);
  this.mesh.add(sideWing2);


  // laserbeam
  // var geomLaser = new THREE.CylinderGeometry(1, 1, 1900, 10);
  // var matLaser = new THREE.MeshPhongMaterial({wireframe:true, color:Colors.pinkNeon});
  // var laserBeam = new THREE.Mesh(geomLaser, matLaser);
  // laserBeam.position.set(940,-22, 86);
  // laserBeam.rotation.z = Math.PI/2;
  // this.mesh.add(laserBeam);




  // wingspears
  var geomWingSpear = new THREE.CylinderGeometry(2.2, 2.2, 50, 10);
  var matWingSpear = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.ship, shading:THREE.FlatShading});
  var wingSpear1 = new THREE.Mesh(geomWingSpear, matWingSpear);
  var wingSpear2 = new THREE.Mesh(geomWingSpear, matWingSpear);
  var wingSpear3 = new THREE.Mesh(geomWingSpear, matWingSpear);
  var wingSpear4 = new THREE.Mesh(geomWingSpear, matWingSpear);

  // front bottom
  wingSpear1.position.set(-42,-22, 86);
  wingSpear1.rotation.z = Math.PI/2;

  // back bottom
  wingSpear4.position.set(-42,-22, -86);
  wingSpear4.rotation.z = Math.PI/2;

  // front top
  wingSpear2.position.set(-42, 16, 86);
  wingSpear2.rotation.z = Math.PI/2;

  // back top
  wingSpear3.position.set(-42, 16, -86);
  wingSpear3.rotation.z = Math.PI/2;
  //
  this.mesh.add(wingSpear1);
  this.mesh.add(wingSpear2);
  this.mesh.add(wingSpear3);
  this.mesh.add(wingSpear4);

  wingSpear1.castShadow = true;
  wingSpear2.castShadow = true;
  wingSpear3.castShadow = true;
  wingSpear4.castShadow = true;


  // mainThruster
  var geomMainThruster = new THREE.CylinderGeometry(5, 10, 20, 10);
  var matMainThruster = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.ship, shading:THREE.FlatShading});
  var mainThruster = new THREE.Mesh(geomMainThruster, matMainThruster);
  mainThruster.position.set(-100,0, 0);
  mainThruster.rotation.z = Math.PI/2;

  mainThruster.castShadow = true;
  mainThruster.receiveShadow = true;
  this.mesh.add(mainThruster);


  // cockpit
  var geomcockPit = new THREE.BoxGeometry(40,5,20,1,1,1);
  var matcockPit = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.grey,transparent:true, opacity:.8, shading:THREE.FlatShading});;
  var cockpit = new THREE.Mesh(geomcockPit, matcockPit);
  // geomcockPit.vertices[4].y+=10;
  geomcockPit.vertices[4].z-=20;
  // geomcockPit.vertices[5].y+=10;
  // geomcockPit.vertices[5].z+=20;
  geomcockPit.vertices[6].y-=10;
  geomcockPit.vertices[6].z-=20;
  geomcockPit.vertices[7].y-=10;
  // geomcockPit.vertices[7].z+=20;


  cockpit.position.set(-55,15,0);
  cockpit.castShadow = true;
  cockpit.receiveShadow = true;
  this.mesh.add(cockpit);

  var geomJetFire = new THREE.BoxGeometry(40,10,10,1,1,1);
  geomJetFire.vertices[4].y-=5;
  geomJetFire.vertices[4].z+=5;
  geomJetFire.vertices[5].y-=5;
  geomJetFire.vertices[5].z-=5;
  geomJetFire.vertices[6].y+=5;
  geomJetFire.vertices[6].z+=5;
  geomJetFire.vertices[7].y+=5;
  geomJetFire.vertices[7].z-=5;
  var matJetFire = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.mustard, shading:THREE.FlatShading});
  this.JetFire = new THREE.Mesh(geomJetFire, matJetFire);

  this.JetFire.castShadow = true;
  this.JetFire.receiveShadow = true;

  var geomBlade = new THREE.BoxGeometry(2,14,10,1,1,1);
  var matBlade = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.red, shading:THREE.FlatShading});
  var blade1 = new THREE.Mesh(geomBlade, matBlade);
  blade1.position.set(10,0,0);

  blade1.castShadow = true;
  blade1.receiveShadow = true;

  var blade2 = blade1.clone();
  blade2.rotation.x = Math.PI/2;

  blade2.castShadow = true;
  blade2.receiveShadow = true;

  this.JetFire.add(blade1);
  this.JetFire.add(blade2);
  this.JetFire.position.set(-120,0,0);
  this.JetFire.rotation.x = Math.PI/2;
  this.mesh.add(this.JetFire);

  this.mesh.castShadow = true;
  this.mesh.receiveShadow = true;
};


export default SpaceShip;
