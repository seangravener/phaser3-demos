import { Scene } from "phaser";
import { BaseSprite } from "../objects/base.sprite";
import * as sprites from "../assets/sprites";

// [x] Add multiple sprites using atlas
// [x] Add as sprites
// [x] Add as sprites with physics bodies
// [ ] Add keyboard controlled movement

export class PlayerScene extends Scene {
  constructor() {
    super();
  }

  preload() {
    const heroship_png = sprites.heroship_png;
    const heroship_json = sprites.heroship_json;
    // this.load.image(heroship_png, heroship_png);

    this.load.atlas("heroship", heroship_png, heroship_json);
  }

  create() {
    this.addImages();
    this.createAnimations();
  }

  initPhysics() {
    this.h1.scene.physics.world.enable(this);
    this.h1.body.setVelocity(50, 0);
    this.h1.body.setCollideWorldBounds(true);

    this.h2.scene.physics.world.enable(this);
    this.h2.body.setVelocity(76, 0);
    this.h2.body.setCollideWorldBounds(true);
  }

  createAnimations() {
    this.h1 = new BaseSprite({ scene: this, x: 100, y: 100 });
    this.h2 = new BaseSprite({ scene: this, x: 100, y: 200 });

    this.initPhysics();
    this.h1.anims.create({
      key: "left",
      repeat: -1,
      frameRate: 7,
      frames: this.anims
        .generateFrameNames("heroship")
        .filter((frame) => frame.frame.split("_").includes("PlayerBlue")),
    });
    this.h1.play("left");

    this.h2.anims.create({
      key: "right",
      repeat: -1,
      frameRate: 7,
      frames: this.anims
        .generateFrameNames("heroship")
        .filter((frame) => frame.frame.split("_").includes("PlayerRed")),
    });
    this.h2.setFlipX(true).play("right");
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
