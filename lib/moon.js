import { Colors } from './util';

class Moon {
  constructor() {
    this.geom = new THREE.SphereGeometry(20, 20, 5);
    // rotate the geometry on the x axis
    // this.geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

    this.mat = new THREE.MeshBasicMaterial({wireframe:true,
      color:Colors.blue,
      transparent:true,
      opacity:.6,
      shading:THREE.FlatShading,
    });

    this.mesh = new THREE.Mesh(this.geom, this.mat);
    this.mesh.receiveShadow = true;
  }
}


export default Moon;
