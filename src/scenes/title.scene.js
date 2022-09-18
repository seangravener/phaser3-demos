/**
 * seamless looping background
 * fade/zoom text effect
 * transition to menu scene
 */

import { Scene } from "phaser";
import * as images from "../assets/images";
import { MainScene } from "./main.scene";

const paths = [images.bg0, images.bg1];

export class TitleScene extends Scene {
  _images = [];
  cursors;

  constructor() {
    super();
  }

  preload() {
    for (const path of paths) {
      this.load.image(path, path);
    }
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    for (const path of paths) {
      const img = this.add.image(0, 0, path).setOrigin(0.5, 0.5);
      img.setScale(2);
      this._images.push(img);
    }
  }

  update(delta) {
    const bg0 = this._images[0];
    bg0.y += 0.2;
    bg0.x += 0.1;

    if (this.cursors.space.isDown) {

      this.scene.start(MainScene);
    }
  }
}
