import { Colors } from './util';


class Enemy {
  constructor() {
    this.geom = new THREE.BoxGeometry(10,10,10,3,3,3);

    this.mat = new THREE.MeshBasicMaterial({wireframe:true,
      color:Colors.pinkNeon,
      // transparent:true,
      // opacity:.9,
      shading:THREE.FlatShading,
    });

    this.mesh = new THREE.Mesh(this.geom, this.mat);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }
}


// ES5
// const Enemy = function Enemy() {
//   this.geom = new THREE.BoxGeometry(10,10,10,3,3,3);
//
//   this.mat = new THREE.MeshBasicMaterial({wireframe:true,
//     color:Colors.pinkNeon,
//     // transparent:true,
//     // opacity:.9,
//     shading:THREE.FlatShading,
//   });
//
//   // this.geom.vertices[4].y+=10;
//   // this.geom.vertices[4].z-=20;
//   // this.geom.vertices[4].x-=20;
//
//
//   this.mesh = new THREE.Mesh(this.geom, this.mat);
//   this.mesh.castShadow = true;
//   this.mesh.receiveShadow = true;
//
// };


export default Enemy;
