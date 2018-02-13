import { game } from './orbit';
import { Colors } from './util';


const Planet = function Planet(){
  // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
  var geomPlanet = new THREE.CylinderGeometry(game.planetRadius, game.planetRadius, game.planetLength, 60, 10);

  // rotate the planet on the x axis
  geomPlanet.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
  geomPlanet.mergeVertices();
  var l = geomPlanet.vertices.length;

  this.mountains = [];
  for (var i=0;i<l;i++){
    var vertex = geomPlanet.vertices[i];
    //vertex.y = Math.random()*30;
    this.mountains.push(
      {
        y:      vertex.y,
        x:      vertex.x,
        z:      vertex.z,
        angle:  Math.random()*Math.PI*2,
        amp:    game.mountainsMinAmp + Math.random()*(game.mountainsMaxAmp-game.mountainsMinAmp),
        speed:  game.mountainsMinSpeed + Math.random()*(game.mountainsMaxSpeed - game.mountainsMinSpeed)
      }
    );
  }

  var material = new THREE.MeshPhongMaterial({wireframe:false,
  // var material = new THREE.MeshBasicMaterial({wireframe:false,
    color:Colors.light,
    transparent:true,
    opacity:.9,                             // NOTE planet opacity
    shading:THREE.FlatShading,
  });


  this.mesh = new THREE.Mesh(geomPlanet, material);
  this.mesh.receiveShadow = true;
  this.mesh.name = "mountains";
};


export default Planet;
