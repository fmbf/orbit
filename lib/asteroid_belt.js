import { game } from './orbit';


class AsteroidBelt{
  constructor(){
    this.mesh = new THREE.Object3D();
    this.asteroidsInUse = [];
  }

  generateAsteroid(){
    var asteroidCount = game.level;

    for (var i = 0; i < asteroidCount; i++){
      var asteroid;
      if (asteroidsPool.length) {
        asteroid = asteroidsPool.pop();
      }else{
        asteroid = new Ennemy();
      }

      asteroid.angle = - (i*0.1);
      asteroid.distance = game.seaRadius + game.planeDefaultHeight + (-1 + Math.random() * 2) * (game.planeAmpHeight-20);
      asteroid.mesh.position.y = -game.seaRadius + Math.sin(asteroid.angle)*asteroid.distance;
      asteroid.mesh.position.x = Math.cos(asteroid.angle)*asteroid.distance;

      this.mesh.add(asteroid.mesh);
      this.asteroidsInUse.push(asteroid);
    }
  }

  rotateEnnemies(){
    for (var i=0; i<this.asteroidsInUse.length; i++){
      var asteroid = this.asteroidsInUse[i];
      asteroid.angle += game.speed * deltaTime * game.asteroidsSpeed;

      if (asteroid.angle > Math.PI*2) asteroid.angle -= Math.PI*2;

      asteroid.mesh.position.y = -game.seaRadius + Math.sin(asteroid.angle)*asteroid.distance;
      asteroid.mesh.position.x = Math.cos(asteroid.angle)*asteroid.distance;
      asteroid.mesh.rotation.z += Math.random()*.1;
      asteroid.mesh.rotation.y += Math.random()*.1;

      //var globalEnnemyPosition =  asteroid.mesh.localToWorld(new THREE.Vector3());
      var diffPos = airplane.mesh.position.clone().sub(asteroid.mesh.position.clone());
      var d = diffPos.length();
      if (d<game.asteroidDistanceTolerance){
        particlesHolder.spawnParticles(asteroid.mesh.position.clone(), 15, Colors.red, 3);

        asteroidsPool.unshift(this.asteroidsInUse.splice(i,1)[0]);
        this.mesh.remove(asteroid.mesh);
        game.planeCollisionSpeedX = 100 * diffPos.x / d;
        game.planeCollisionSpeedY = 100 * diffPos.y / d;
        ambientLight.intensity = 2;

        removeEnergy();
        i--;
      }else if (asteroid.angle > Math.PI){
        asteroidsPool.unshift(this.asteroidsInUse.splice(i,1)[0]);
        this.mesh.remove(asteroid.mesh);
        i--;
      }
    }
}


}

export default AsteroidBelt;
