import { Scene } from "phaser";

export class LayoutManager {
  get bounds() {
    const { x, y, width, height, rows, cols } = this.config;

    return {
      cell: { width: width / cols, height: height / rows },
      rows,
      cols,
    };
  }

  constructor({ scene, x = 0, y = 0, rows = 12, cols = 12 }) {
    this.scene = scene;
    const { width, height } = this.scene.cameras.main;
    this.config = { x, y, width, height, rows, cols };

    this.create();
  }

  create() {
    this.addGrid();
  }

  addGrid() {
    const { x, y, width, height, rows, cols } = this.config;

    this.graphics = this.scene.add.graphics({ x: 0, y: 0, z: 99 });
    this.graphics.lineStyle(1, 0xff00ff, 0.33);

    this.graphics.beginPath();
    for (let i = 0; i < width; i += this.bounds.cell.width) {
      this.graphics.moveTo(i, 0);
      this.graphics.lineTo(i, height);
    }
    for (let i = 0; i < height; i += this.bounds.cell.height) {
      this.graphics.moveTo(0, i);
      this.graphics.lineTo(width, i);
    }
    this.graphics.closePath();
    this.graphics.strokePath();
  }

  moveTo({ x, y }) {
    // this.scene.coordinates;
  }
}
