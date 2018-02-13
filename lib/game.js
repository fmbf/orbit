import { Colors } from './util';

class Game {
  constructor() {
    this.speed = 0;
    this.startSpeed = .00030;
    this.baseSpeed = .00030;
    this.baseSpeed = .00030;
    this.targetBaseSpeed = .00030;
    this.speedUpByTime = .0000025;
    this.speedUpByLevel = .000005;
    this.distanceForSpeedUpdate = 100;

    this.speedLastUpdate = 0;

    this.distance = 0;
    this.ratioSpeedDistance = 50;
    this.energy = 100;
    this.ratioSpeedEnergy = 3;

    this.level = 1;
    this.levelLastUpdate = 0;
    this.distanceForLevelUpdate = 1000;

    this.shipDefaultHeight = 100;
    this.shipAmpHeight = 80;
    this.shipAmpWidth = 75;
    this.shipMoveSensivity = 0.005;
    this.shipRotXSensivity = 0.0008;
    this.shipRotZSensivity = 0.0004;
    this.shipFallSpeed = .001;
    this.shipMinSpeed = 1.2;
    this.shipMaxSpeed = 1.6;
    this.shipSpeed = 0;
    this.shipCollisionDisplacementX = 0;
    this.shipCollisionSpeedX = 0;

    this.shipCollisionDisplacementY = 0;
    this.shipCollisionSpeedY = 0;

    this.planetRadius = 600;
    this.planetLength = 400;
    //this.planetRotationSpeed = 0.006;
    this.mountainsMinAmp  =  5;
    this.mountainsMaxAmp  =  20;
    this.mountainsMinSpeed  =  0.001;
    this.mountainsMaxSpeed  =  0.003;

    this.cameraFarPos = 500;
    this.cameraNearPos = 150;
    this.cameraSensivity = 0.002;

    this.coinDistanceTolerance = 15;
    this.coinValue = 3;
    this.coinsSpeed = .5;
    this.coinLastSpawn = 0;
    this.distanceForCoinsSpawn = 100;

    this.ennemyDistanceTolerance = 10;
    this.ennemyValue = 10;
    this.ennemiesSpeed = .6;
    this.ennemyLastSpawn = 0;
    this.distanceForEnnemiesSpawn = 50;

    this.status = "playing";

  }

  resetGame(){
    this.speed = 0;
    this.startSpeed = .00030;
    this.baseSpeed = .00030;
    this.baseSpeed = .00030;
    this.targetBaseSpeed = .00030;
    this.speedUpByTime = .0000025;
    this.speedUpByLevel = .000005;
    this.distanceForSpeedUpdate = 100;

    this.speedLastUpdate = 0;

    this.distance = 0;
    this.ratioSpeedDistance = 50;
    this.energy = 100;
    this.ratioSpeedEnergy = 3;

    this.level = 1;
    this.levelLastUpdate = 0;
    this.distanceForLevelUpdate = 1000;

    this.shipDefaultHeight = 100;
    this.shipAmpHeight = 80;
    this.shipAmpWidth = 75;
    this.shipMoveSensivity = 0.005;
    this.shipRotXSensivity = 0.0008;
    this.shipRotZSensivity = 0.0004;
    this.shipFallSpeed = .001;
    this.shipMinSpeed = 1.2;
    this.shipMaxSpeed = 1.6;
    this.shipSpeed = 0;
    this.shipCollisionDisplacementX = 0;
    this.shipCollisionSpeedX = 0;

    this.shipCollisionDisplacementY = 0;
    this.shipCollisionSpeedY = 0;

    this.planetRadius = 600;
    this.planetLength = 400;
    //this.planetRotationSpeed = 0.006;
    this.mountainsMinAmp  =  5;
    this.mountainsMaxAmp  =  20;
    this.mountainsMinSpeed  =  0.001;
    this.mountainsMaxSpeed  =  0.003;

    this.cameraFarPos = 500;
    this.cameraNearPos = 150;
    this.cameraSensivity = 0.002;

    this.coinDistanceTolerance = 15;
    this.coinValue = 3;
    this.coinsSpeed = .5;
    this.coinLastSpawn = 0;
    this.distanceForCoinsSpawn = 100;

    this.ennemyDistanceTolerance = 10;
    this.ennemyValue = 10;
    this.ennemiesSpeed = .6;
    this.ennemyLastSpawn = 0;
    this.distanceForEnnemiesSpawn = 50;

    this.status = "playing";
  }
}

export default Game;
