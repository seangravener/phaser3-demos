import { Input, Types } from "phaser";
import { BaseSprite } from "./base.sprite";

export class PlayerSprite extends BaseSprite {
  cursorKeys: Types.Input.Keyboard.CursorKeys;
  keys: any;
  input: any;

  constructor({ scene, x, y, texture }) {
    super({ scene, x, y, texture });
    this.cursorKeys = scene.cursorKeys;
    this.keys = scene.keys;
    this.input = {};

    this.setupPhysics();
    this.setupAnimations();
  }

  setupPhysics() {
    this.body.setCollideWorldBounds(true).setSize(44, 62).setOffset(12, 0);
    this.scene.physics.world.enable(this);
    this.body.setVelocity(0, 0);
  }

  setupAnimations() {
    const playerFrames = this.anims
      .generateFrameNames("heroship")
      .filter((frame) =>
        frame?.frame?.toString().split("_").includes("PlayerBlue")
      );

    this.anims.create({
      key: "left",
      repeat: 0,
      frameRate: 7,
      frames: playerFrames,
    });

    this.anims.create({
      key: "right",
      repeat: 0,
      frameRate: 30,
      frames: playerFrames,
    });
  }

  protected preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta);
    this.input.didPressJump = Input.Keyboard.JustDown(this.cursorKeys.up);

    if (this.cursorKeys.up.isDown) {
      this.body.setAccelerationY(-500);
      this.setFlipY(false);
    } else if (this.cursorKeys.left.isDown) {
      this.setFlipX(false);
      this.play("left", true);
      this.body.setAccelerationX(-500);
      // this.setRotation(1.5708);
    } else if (this.cursorKeys.right.isDown) {
      this.setFlipX(true);
      this.play("right");
      this.body.setAccelerationX(500);
      // this.setRotation(-1.5708);
    } else if (this.cursorKeys.down.isDown) {
      this.body.setAccelerationY(500);
      this.setFlipY(true);
    } else {
      this.body.setAccelerationX(0);
    }
  }
}
