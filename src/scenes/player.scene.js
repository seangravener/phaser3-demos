import { Scene } from "phaser";
import * as sprites from "../assets/sprites";

export class PlayerScene extends Scene {
  constructor() {
    super();
  }

  preload() {
    const path = sprites.phaser_png;
    this.load.image(path, path);
  }

  create() {
    this.add.image(200, 200, sprites.phaser_png);
    this.add.image(300, 200, sprites.phaser_png);
  }

  update() {}
}
