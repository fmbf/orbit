import { Colors, currentColor } from './util';

class Coin {
  constructor() {
    this.geom = new THREE.BoxGeometry(10,10,10,3,3,3);
    // this.geom = new THREE.SphereGeometry(5, 5, 4);
    // this.geom.vertices[4].y+=5;
    // this.geom.vertices[4].x+=5;
    // this.geom.vertices[4].z+=5;
    //
    //
    // this.geom.vertices[6].y-=7;
    // this.geom.vertices[6].x-=7;
    // this.geom.vertices[6].z-=7;


    this.mat = new THREE.MeshBasicMaterial({wireframe:true,
      color: 0xffe066,
      // shading: THREE.FlatShading,
      // transparent:true,
      // opacity:.9,
    });

    this.mesh = new THREE.Mesh(this.geom, this.mat);
    this.mesh.castShadow = true;
    // this.mesh.receiveShadow = true;
  }
}



export default Coin;
