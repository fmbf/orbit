import { game, spaceship } from './orbit';
import Asteroid from './asteroid';


class AsteroidBelt{
  constructor(){
    this.mesh = new THREE.Object3D();
    this.asteroidsInUse = [];
  }

  generateAsteroid(){
    // let asteroidCount = game.level;
    let asteroidCount = 100;

    for (var i = 0; i < asteroidCount; i++){
      let asteroid;
      if (game.asteroidsArray.length) {
        asteroid = game.asteroidsArray.pop();
      } else {
        asteroid = new Asteroid();
      }

      asteroid.angle = - (i*0.1);
      // asteroid.distance = game.planetRadius + game.shipDefaultHeight + (-1 + Math.random() * 2) * (game.shipAmpHeight-20);
      // asteroid.mesh.position.y = -game.planetRadius + Math.sin(asteroid.angle)*asteroid.distance;
      asteroid.mesh.position.y = -game.planetRadius + Math.sin(asteroid.angle);
      // asteroid.mesh.position.x = Math.cos(asteroid.angle)*asteroid.distance;
      asteroid.mesh.position.x = Math.cos(asteroid.angle);

      this.mesh.add(asteroid.mesh);
      this.asteroidsInUse.push(asteroid);
    }
  }

  rotateAsteroids(){
    for (var i = 0; i < this.asteroidsInUse.length; i++){
      var asteroid = this.asteroidsInUse[i];
      asteroid.angle += game.speed * game.deltaTime * game.asteroidsSpeed;

      if (asteroid.angle > Math.PI*2) asteroid.angle -= Math.PI*2;

      asteroid.mesh.position.y = -game.planetRadius + Math.sin(asteroid.angle)*asteroid.distance;
      asteroid.mesh.position.x = Math.cos(asteroid.angle)*asteroid.distance;
      asteroid.mesh.rotation.z += Math.random()*.1;
      asteroid.mesh.rotation.y += Math.random()*.1;

      //var globalAsteroidPosition =  asteroid.mesh.localToWorld(new THREE.Vector3());
      var diffPos = spaceship.mesh.position.clone().sub(asteroid.mesh.position.clone());
      var d = diffPos.length();
      if (d < game.asteroidDistanceTolerance){
        particlesHolder.spawnParticles(asteroid.mesh.position.clone(), 15, Colors.red, 3);

        asteroidsArray.unshift(this.asteroidsInUse.splice(i,1)[0]);
        this.mesh.remove(asteroid.mesh);
        game.shipCollisionSpeedX = 100 * diffPos.x / d;
        game.shipCollisionSpeedY = 100 * diffPos.y / d;
        ambientLight.intensity = 2;

        decreaseHP();

        i--;

      } else if (asteroid.angle > Math.PI){
        asteroidsArray.unshift(this.asteroidsInUse.splice(i,1)[0]);
        this.mesh.remove(asteroid.mesh);
        i--;
      }
    }
  }
}

export default AsteroidBelt;
