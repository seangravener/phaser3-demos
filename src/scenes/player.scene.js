import { Scene } from "phaser";
import * as sprites from "../assets/sprites";
import { BaseSprite } from "../objects/base.sprite";

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

  initPhysics() {
    this.h1.scene.physics.world.enable(this);
    this.h1.body.setVelocity(100, 200);
    this.h1.body.setCollideWorldBounds(true);
  }

  createAnimations() {
    this.h1 = new BaseSprite({ scene: this, x: 100, y: 100 });

    // const h = this.add.sprite(this.h1);
    // this.initPhysics()
    this.h1.anims.create({
      key: "left",
      repeat: -1,
      frameRate: 7,
      frames: this.anims
        .generateFrameNames("heroship")
        .filter((frame) => frame.frame.split("_").includes("PlayerBlue")),
    });
    this.h1.play("left");

    const right = this.add.sprite(200, 100, "heroship");
    right.anims.create({
      key: "right",
      repeat: -1,
      frameRate: 7,
      frames: this.anims
        .generateFrameNames("heroship")
        .filter((frame) => frame.frame.split("_").includes("PlayerRed")),
    });
    right.setFlipX(true).play("right");

    // this.add.existing(this);
    // this.physics.add.existing(this);
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
