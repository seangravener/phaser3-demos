import { Scene } from "phaser";

export class LayoutManager {
  get bounds() {
    const { x, y, width, height, rows, cols } = this;
    return {
      cell: { width: width / cols, height: height / rows },
      rows,
      cols,
    };
  }

  constructor({
    key,
    scene,
    x = 0,
    y = 0,
    width,
    height,
    rows = 12,
    cols = 12,
  }) {
    this.scene = scene.scene;
    // console.log(this);

    width = this.scene.cameras.main.width;
    height = this.scene.cameras.main.height;

    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.rows = rows;
    this.cols = cols;

    this.create();
  }

  create() {
    console.log("layout");
    this.showGrid();
  }

  showGrid() {
    console.log("showgrid bounds:", this.bounds);
    this.scene.graphics = this.scene.add.graphics();
    this.scene.graphics.lineStyle(4, 0xff0000, 1.0);
    //
    //
    this.scene.graphics.beginPath();
    for (var i = 0; i < this.width; i += this.bounds.cell.width) {
      // console.log(i);
      this.scene.graphics.moveTo(i, 0);
      this.scene.graphics.lineTo(i, this.height);
    }
    for (var i = 0; i < this.height; i += this.bounds.cell.height) {
      this.scene.graphics.moveTo(0, i);
      this.scene.graphics.lineTo(this.width, i);
    }
    this.scene.graphics.closePath();
    this.scene.graphics.strokePath();

    console.log(this.graphics);
  }

  moveTo({ x, y }) {
    // this.scene.coordinates;
  }
}
