import { Colors, currentColor } from './util';


class Asteroid {
  constructor() {
    this.geom = new THREE.BoxGeometry(10,10,10,3,3,3);
    // this.geom = new THREE.SphereGeometry(8, 8, 4);

    this.mat = new THREE.MeshBasicMaterial({wireframe:true,
      color: Colors.pinkNeon,
      // shading: THREE.FlatShading,
      // transparent:true,
      // opacity:.9,
    });

    this.mesh = new THREE.Mesh(this.geom, this.mat);
    this.mesh.castShadow = true;
    // this.mesh.receiveShadow = true;
  }
}




//
//
// class Asteroid {
//   constructor() {
//     this.geom = new THREE.DodecahedronGeometry(4);
//
//     this.mat = new THREE.MeshPhongMaterial({wireframe:false,
//       color: Colors.pinkNeon,
//       shading: THREE.FlatShading,
//       // transparent:true,
//       // opacity:.9,
//     });
//
//     this.mesh = new THREE.Mesh(this.geom, this.mat);
//     this.mesh.castShadow = true;
//     // this.mesh.receiveShadow = true;
//   }
// }

export default Asteroid;
