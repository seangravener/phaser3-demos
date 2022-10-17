import { Input, Types } from "phaser";
import { BaseSprite } from "./base.sprite";

export class PlayerSprite extends BaseSprite {
  cursorKeys: Types.Input.Keyboard.CursorKeys;
  input: any;

  constructor({ scene, x, y, texture }) {
    super({ scene, x, y, texture });
    this.cursorKeys = scene.cursorKeys;
    this.input = {};

    this.setupPhysics();
    // this.setupMovement();
    this.setupAnimations();
  }

  setupPhysics() {
    this.body.setCollideWorldBounds(true).setSize(44, 62).setOffset(12, 0);
    this.scene.physics.world.enable(this);
    this.body.setVelocity(0, 0);
  }

  setupAnimations() {
    this.anims.create({
      key: "left",
      repeat: 1,
      frameRate: 7,
      frames: this.anims
        .generateFrameNames("heroship")
        .filter((frame) =>
          frame?.frame?.toString().split("_").includes("PlayerBlue")
        ),
    });

    this.anims.create({
      key: "right",
      repeat: 1,
      frameRate: 7,
      frames: this.anims
        .generateFrameNames("heroship")
        .filter((frame) =>
          frame?.frame?.toString().split("_").includes("PlayerBlue")
        ),
    });
    this.setFlipX(true);
  }

  protected preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta);
    this.input.didPressJump = Input.Keyboard.JustDown(this.cursorKeys.up);

    if (this.cursorKeys.up.isDown) {
      this.body.setAccelerationY(-500);
      this.setFlipY(false);
    } else if (this.cursorKeys.left.isDown) {
      this.body.setAccelerationX(-500);
      this.setRotation(-1.5708);
    } else if (this.cursorKeys.right.isDown) {
      this.body.setAccelerationX(500);
      this.setRotation(1.5708);
    } else if (this.cursorKeys.down.isDown) {
      this.body.setAccelerationY(500);
      this.setFlipY(true);
    } else {
      this.body.setAccelerationX(0);
    }
  }
}
