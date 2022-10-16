import "./style.css";
import { AUTO, Game, Loader } from "phaser";
import { MainScene } from "./scenes/main.scene";
import { TitleScene } from "./scenes/title.scene";
import * as images from "./assets/images";

const config = {
  type: AUTO,
  parent: "game-canvas",
  width: 960,
  height: 540,
  physics: {
    default: "arcade",
    arcade: {},
  },
  pixelArt: true,
  scene: [MainScene],
};

(function () {
  new Game(config);
})();
