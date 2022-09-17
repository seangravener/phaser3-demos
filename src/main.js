import "./style.css";
import { AUTO, Game, Loader } from "phaser";
import { DemoScene } from "./scenes/DemoScene";
import { TitleScene } from "./scenes/TitleScene";
import * as images from "./assets/images";

const config = {
  type: AUTO,
  parent: "game-canvas",
  width: 800,
  height: 600,
  scene: [TitleScene],
};
const game = new Game(config);
