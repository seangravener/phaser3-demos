import { Scene } from "phaser";
import * as images from "../assets/images";

const paths = [images.bg0, images.bg1];

export class TitleScene extends Scene {
  _images = [];

  constructor() {
    super();
  }

  preload() {
    for (const path of paths) {
      this.load.image(path, path);
    }
  }

  create() {
    for (const path of paths) {
      this._images.push(this.add.image(0, 0, path).setOrigin(0, 0));
    }
  }

  update(delta) {}
}
