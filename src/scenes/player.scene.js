import { Scene } from "phaser";
import * as sprites from "../assets/sprites";

export class PlayerScene extends Scene {
  constructor() {
    super();
  }

  preload() {
    const png = sprites.heroship_png;
    const json = sprites.heroship_json;
    // this.load.image(png, png);

    this.load.atlas("heroship", png, json);
  }

  create() {
    this.addImages();
    this.createAnimations();
  }

  createAnimations() {
    const h = this.add.sprite(400, 300, "heroship");
    h.anims.create({
      key: "h1",
      repeat: -1,
      frameRate: 7,
      frames: this.anims
        .generateFrameNames("heroship")
        .filter((frame) => frame.frame.split("_").includes("PlayerBlue")),
    });

    h.play("h1");
  }

  addImages() {
    var atlasTexture = this.textures.get("heroship");
    var frames = atlasTexture.getFrameNames();

    for (var i = 0; i < frames.length; i++) {
      var x = Phaser.Math.Between(0, 800);
      var y = Phaser.Math.Between(0, 600);

      // this.add.sprite(x, y, "heroship", frames[i]);
    }
  }

  update() {}
}
