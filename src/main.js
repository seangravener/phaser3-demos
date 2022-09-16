import "./style.css";
import { AUTO, Game, Scene } from "phaser";
import * as images from "./assets/images";
import * as sprites from "./assets/sprites";

class DemoScene extends Scene {
  constructor() {
    super();
  }

  preload() {
    const path = sprites.phaser_png;
    this.load.image(path, path);
  }

  create() {
    this.setData();

    const { apples, pears } = this.data.get("food");
    this.addText([`Pears: ${pears}`, `Apples: ${apples}`]);

    this.add.image(200, 200, sprites.phaser_png);
    this.add.image(300, 200, sprites.phaser_png);
  }

  setData() {
    this.data.set("food", { apples: 1, pears: 2 });
    this.data.set("health", { hunger: 0, energy: 10 });
    this.data.set("score", 100);
  }

  addText(text) {
    return this.add.text(100, 100, text, {
      fill: "#00ff00",
      font: "24px Serif",
    });
  }

  update() {}
}

const config = {
  type: AUTO,
  parent: "game-canvas",
  width: 800,
  height: 600,
  scene: [DemoScene],
};
const game = new Game(config);
