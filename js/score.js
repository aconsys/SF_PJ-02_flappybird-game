 export default class Score {
  constructor(canvas) {
    this.canvas = canvas;
    this.bestValue = Number(localStorage.getItem('bestScore')) || 0;
    this.currentValue = 0;
  }

  draw(state) {
    this.canvas.context.fillStyle = '#000';

    if (state.current === state.game) {
      this.canvas.context.lineWidth = 2;
      this.canvas.context.font = '30px Roboto';
      this.canvas.context.fillText(this.currentValue, this.canvas.width / 2, 50);
      this.canvas.context.strokeText(this.currentValue, this.canvas.width / 2, 50);
    } else if (state.current === state.gameOver) {
      this.canvas.context.font = '20px Roboto';
      this.canvas.context.fillText(this.currentValue, 154, 193);
      this.canvas.context.fillText(this.bestValue, 154, 234);
    }
  }

  reset() {
    this.currentValue = 0;
  }
}
