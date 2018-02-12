import { Colors } from './util';

const Planet = function Planet(){
  // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
  var geomPlanet = new THREE.CylinderGeometry(600, 600, 400, 60, 10);

  // rotate the geometry on the x axis
  geomPlanet.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
  // geomPlanet.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2.1));
  geomPlanet.mergeVertices();
  var l = geomPlanet.vertices.length;

  // create the material
  var material = new THREE.MeshPhongMaterial({wireframe:false,
  // var mat = new THREE.MeshBasicMaterial({wireframe:false,
    // color:Colors.light,
    color:Colors.light,
    transparent:true,
    opacity:.9,                             // NOTE planet opacity
    shading:THREE.FlatShading,
  });

  // To create an object we have to create a mesh
  // which is a combination of a geometry and material
  this.mesh = new THREE.Mesh(geomPlanet, material);

  // Allow the planet to receive shadows
  this.mesh.receiveShadow = true;
};


export default Planet;
