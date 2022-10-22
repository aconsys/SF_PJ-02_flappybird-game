export default class Bird {
  constructor(canvas, background, config) {
    this.config = config.bird;
    this.canvas = canvas;
    this.fgHeight = background.fgHeight;
    this.animateFrames = this.config.frames;
    this.x = this.canvas.width / 2;
    this.y = this.config.y;
    this.width = this.config.width;
    this.height = this.config.height;
    this.size = this.config.size;
    this.frame = this.config.frame;
    this.speed = this.config.speed;
    this.rotation = this.config.rotation;
    this.flip = this.config.flip;
    this.gravity = this.config.gravity;
    this._DEGREE = this.config.DEGREE;
  }

  update(frames, state) {
    let time = state.current === state.ready ? 10 : 5;//Задаём скорость махания крылями в завистмости от состояния игры
    this.frame += frames % time === 0 ? 1 : 0;//Инкрементируем фрейм прички
    this.frame = this.frame % this.animateFrames.length;//Фреймы идут по кругу от 1 до 4

    if (state.current === state.ready) {
      this.y = 150;
      this.rotation = 0 * this._DEGREE;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;

      if (this.y + (this.height / 2) >= this.canvas.height - this.fgHeight) {
        this.y = this.canvas.height - this.fgHeight - this.height / 2;//Фиксируем положение прички при достижении земли
        if (state.current === state.game) {
          state.current = state.gameOver;
        }
      }

      if (this.speed >= this.flip) {//Если скорость больше чем сторость прыжка - птичка падает
        this.rotation = 75 * this._DEGREE;
        this.frame = 1;
      } else {
        this.rotation = -10 * this._DEGREE;
      }
    }
  }

  flipMove() {//Выполнить прыжок
    this.speed = - this.flip;
  }

  reset() {
    this.speed = 0;
  }

  draw() {
    let birdFrame = this.animateFrames[this.frame];
    let bird = {
      sX: birdFrame.sX,
      sY: birdFrame.sY,
      sWidth: this.width,
      sHeight: this.height,
      x: - (this.width / 2),
      y: - (this.height / 2),
      width: this.width,
      height: this.height,
    };

    this.canvas.context.save();
    this.canvas.context.translate(this.x, this.y);
    this.canvas.context.rotate(this.rotation);
    this.canvas.draw(bird);
    this.canvas.context.restore();
  }
}
