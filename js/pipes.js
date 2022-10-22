export default class Pipes {
  constructor(canvas, bird, config) {
    this.config = config.pipes;
    this.canvas = canvas;
    this.bird = bird;
    this.position = [];
    this.top = {
      sX: this.config.topsX,
      sY: this.config.topsY,
    };
    this.bottom = {
      sX: this.config.bottomsX,
      sY: this.config.bottomsY,
    };
    this.sWidth = this.config.width;
    this.width = this.bird.width * 2;
    this.height = this.config.height;
    this.gap = this.config.gap;
    this.maxYPosition = this.config.maxYPosition;
    this.deltaX = this.config.deltaX;
    this.topPipe = {
      sX: this.top.sX,
      sY: this.top.sY,
      sWidth: this.sWidth,
      sHeight: this.height,
      x: null,
      y: null,
      width: this.width,
      height: this.height,
    };
    this.bottomPipe = {
      sX: this.bottom.sX,
      sY: this.bottom.sY,
      sWidth: this.sWidth,
      sHeight: this.height,
      x: null,
      y: null,
      width: this.width,
      height: this.height,
    };
  }

  update(frames, state, score) {
    if (state.current !== state.game) return;
    if (frames % 100 === 0) {//Если фрейййм не нулевой, добавляем в массив координат труб позицию новой трубы
      this.position.push({
        x: this.canvas.width,
        y: this.maxYPosition * (Math.random() + 1),
      });
    }

    for (let i = 0; i < this.position.length; i++) {//Для каждой позиции из массива определем параметры верхней и нижней частей трубы
      let pos = this.position[i];
      let bottomPipePosition = pos.y + this.height + this.gap;
      //Определяем столкновение птички с верхней и нижней трубой
       if (this.bird.x + this.bird.size > pos.x && this.bird.x - this.bird.size < pos.x + this.width && this.bird.y + this.bird.size > pos.y && this.bird.y - this.bird.size < pos.y + this.height) {
        state.current = state.gameOver;
      }

      if (this.bird.x + this.bird.size > pos.x && this.bird.x - this.bird.size < pos.x + this.width && this.bird.y + this.bird.size > bottomPipePosition && this.bird.y - this.bird.size < bottomPipePosition + this.height) {
        state.current = state.gameOver;
      }

      pos.x -= this.deltaX;

      if (pos.x + this.width <= 0) {//Удаляем из массива трубу зашедшую за canvas
        this.position.shift();
      }

      if (pos.x + this.width / 2 === this.bird.x) {//Инкрементируем счёт
        score.currentValue += 1;
        score.bestValue = Math.max(score.currentValue, score.bestValue);
        localStorage.setItem('bestScore', score.bestValue);
      }
    }
  }

  draw() {
    for (let i = 0; i < this.position.length; i++) {
      let pos = this.position[i];
      let topPosition = pos.y;
      let bottomPosition = pos.y + (this.height) + this.gap;

      this.topPipe.x = pos.x;
      this.topPipe.y = topPosition;

      this.bottomPipe.x = pos.x;
      this.bottomPipe.y = bottomPosition;

      this.canvas.draw(this.topPipe);
      this.canvas.draw(this.bottomPipe);
    }
  }

  reset() {
    this.position = [];
  }
}
