import { Colors } from './util';

class SpaceShip {
  constructor() {

    this.energy = 100;



    this.mesh = new THREE.Object3D();
    this.mesh.name = "spaceShip";

    // Cabin
    let geomCabin = new THREE.BoxGeometry(180,5,5,1,1,1);
    let matCabin = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.ship, shading:THREE.FlatShading});

    geomCabin.vertices[4].y+=10;
    geomCabin.vertices[4].z-=20;
    geomCabin.vertices[5].y+=10;
    geomCabin.vertices[5].z+=20;
    geomCabin.vertices[6].y-=10;
    geomCabin.vertices[6].z-=20;
    geomCabin.vertices[7].y-=10;
    geomCabin.vertices[7].z+=20;

    let cabin = new THREE.Mesh(geomCabin, matCabin);
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    this.mesh.add(cabin);

    // Wings
    let geomSideWing = new THREE.BoxGeometry(30,3,180,1,1,1);
    let matSideWing = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.ship, shading:THREE.FlatShading});
    let sideWing1 = new THREE.Mesh(geomSideWing, matSideWing);
    let sideWing2 = new THREE.Mesh(geomSideWing, matSideWing);
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
    // let geomLaser = new THREE.CylinderGeometry(1, 1, 1900, 10);
    // let matLaser = new THREE.MeshPhongMaterial({wireframe:true, color:Colors.pinkNeon});
    // let laserBeam = new THREE.Mesh(geomLaser, matLaser);
    // laserBeam.position.set(940,-22, 86);
    // laserBeam.rotation.z = Math.PI/2;
    // this.mesh.add(laserBeam);




    // wingspears
    let geomWingSpear = new THREE.CylinderGeometry(2.2, 2.2, 50, 10);
    let matWingSpear = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.ship, shading:THREE.FlatShading});
    let wingSpear1 = new THREE.Mesh(geomWingSpear, matWingSpear);
    let wingSpear2 = new THREE.Mesh(geomWingSpear, matWingSpear);
    let wingSpear3 = new THREE.Mesh(geomWingSpear, matWingSpear);
    let wingSpear4 = new THREE.Mesh(geomWingSpear, matWingSpear);

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
    let geomMainThruster = new THREE.CylinderGeometry(5, 10, 20, 10);
    let matMainThruster = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.ship, shading:THREE.FlatShading});
    let mainThruster = new THREE.Mesh(geomMainThruster, matMainThruster);
    mainThruster.position.set(-100,0, 0);
    mainThruster.rotation.z = Math.PI/2;

    mainThruster.castShadow = true;
    mainThruster.receiveShadow = true;
    this.mesh.add(mainThruster);


    // cockpit
    let geomcockPit = new THREE.BoxGeometry(40,5,20,1,1,1);
    let matcockPit = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.grey,transparent:true, opacity:.8, shading:THREE.FlatShading});;
    let cockpit = new THREE.Mesh(geomcockPit, matcockPit);
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

    let geomJetFire = new THREE.BoxGeometry(40,10,10,1,1,1);
    geomJetFire.vertices[4].y-=5;
    geomJetFire.vertices[4].z+=5;
    geomJetFire.vertices[5].y-=5;
    geomJetFire.vertices[5].z-=5;
    geomJetFire.vertices[6].y+=5;
    geomJetFire.vertices[6].z+=5;
    geomJetFire.vertices[7].y+=5;
    geomJetFire.vertices[7].z-=5;
    let matJetFire = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.mustard, shading:THREE.FlatShading});
    this.JetFire = new THREE.Mesh(geomJetFire, matJetFire);

    this.JetFire.castShadow = true;
    this.JetFire.receiveShadow = true;

    let geomBlade = new THREE.BoxGeometry(2,14,10,1,1,1);
    let matBlade = new THREE.MeshPhongMaterial({wireframe:false, color:Colors.red, shading:THREE.FlatShading});
    let blade1 = new THREE.Mesh(geomBlade, matBlade);
    blade1.position.set(10,0,0);

    blade1.castShadow = true;
    blade1.receiveShadow = true;

    let blade2 = blade1.clone();
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
  }


  decreaseHP(){
    this.energy -= 10;
    this.energy = Math.max(0, this.energy);
  }


}


export default SpaceShip;
