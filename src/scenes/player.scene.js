import { Scene } from "phaser";
import { LayoutManager } from "../lib/layout.manager";
import { PlayerSprite } from "../objects/player.sprite";
import * as sprites from "../assets/sprites";

export class PlayerScene extends Scene {
  keys; 
  
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
    // this.addImages();
    this.bindInputs();
    this.createPlayers();
    this.layout = new LayoutManager({ scene: this });
  }

  bindInputs() {
    this.keys = this.input.keyboard.addKeys({
      up: "W",
      left: "A",
      down: "S",
      right: "D",
    });
    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }

  createPlayers() {
    this.player1 = new PlayerSprite({
      scene: this,
      x: 100,
      y: 100,
      texture: this.textures.get("heroship"),
    });

    this.player2 = new PlayerSprite({
      scene: this,
      x: 100,
      y: 200,
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
