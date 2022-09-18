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
    this.scene.add("DemoScene", ShapesScene);

    this.scene.launch("TitleScene");

    setTimeout(() => {
      this.scene.launch("DemoScene");
    }, 1000);

    setTimeout(() => {
      this.scene.remove("TitleScene");
    }, 3000);
  }
}
