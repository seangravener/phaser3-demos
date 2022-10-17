import { Scene } from "phaser";
import { BaseSprite } from "../objects/base.sprite";
import * as sprites from "../assets/sprites";
import { LayoutManager } from "../lib/layout.manager";
import { PlayerSprite } from "../objects/player.sprite";

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
    this.bindInputs();
    this.createPlayers();
    this.layout = new LayoutManager({
      scene: this,
    });
  }

  bindInputs() {
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    // this.input.keyboard.addListener()
  }

  createPlayers() {
    this.player1 = new PlayerSprite({
      scene: this,
      x: 100,
      y: 100,
      texture: this.textures.get("heroship"),
    });
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
