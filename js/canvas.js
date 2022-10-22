export default class Canvas {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this._sprite = document.getElementById('sprite');
  }

  draw({ sX, sY, sWidth, sHeight, x, y, width, height }) {
    this.context.drawImage(this._sprite, sX, sY, sWidth, sHeight, x, y, width, height);
  }

  drawSky() {
    this.context.fillStyle = "#70c5ce";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
