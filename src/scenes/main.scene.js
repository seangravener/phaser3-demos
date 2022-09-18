import { SceneController } from "../lib/scene.controller";
import { TitleScene } from "./title.scene";
import { ShapesScene } from "./shapes.scene";

export class MainScene extends SceneController {
  constructor() {
    super();
  }

  preload() {}

  create() {
    this.scene.add("TitleScene", TitleScene);
    // this.scene.add("MenuScene", MenuScene);
    // this.scene.add("ShapesScene", ShapesScene);

    this.scene.launch("TitleScene");
  }
}
