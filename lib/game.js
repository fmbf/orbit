import { Colors } from './util';

class Game {
  constructor() {


    this.planetRadius = 600;
    this.planetLength = 400;
    //this.planetRotationSpeed = 0.006;
    this.cameraFarPos = 500;
    this.cameraNearPos = 150;
    this.cameraSensivity = 0.002;


    this.status = "playing";

  }

}

export default Game;
