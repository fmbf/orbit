import { game } from './orbit';
import { Colors, currentColor } from './util';


const Planet = function Planet(){
  // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
  var geomPlanet = new THREE.CylinderGeometry(600, 600, 400, 40, 10);

  // rotate the planet on the x axis
  geomPlanet.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
  geomPlanet.mergeVertices();
  var l = geomPlanet.vertices.length;

  var material = new THREE.MeshPhongMaterial({wireframe:false,
  // var material = new THREE.MeshBasicMaterial({wireframe:false,
    color:Colors.light,
    transparent:true,
    opacity:.9,                             // NOTE planet opacity
    shading:THREE.FlatShading,
  });


  this.mesh = new THREE.Mesh(geomPlanet, material);
  this.mesh.receiveShadow = true;
};


export default Planet;
