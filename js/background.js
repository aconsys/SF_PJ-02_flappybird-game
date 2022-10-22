export default class Background {
  constructor(canvas, config) {
    this.config = config.background;
    this.canvas = canvas;
    this.bgWidth = this.config.bgWidth;
    this.bgHeight = this.config.bgHeight;
    this.fgWidth = this.config.fgWidth;
    this.fgHeight = this.config.fgHeight;
    this.fgDeltaX = this.config.fgDeltaX;
    this.layer = {//Поскольку ширина canvas в 2 раза больше ширины фоновых изображений
      bg: {
        sX: this.config.bgsX,
        sY: this.config.bgsY,
        sWidth: this.bgWidth,
        sHeight: this.bgHeight,
        x: 0,
        y: this.canvas.height / 1.1 - this.bgHeight,
        width: this.bgWidth,
        height: this.bgHeight,
      },
      fg: {
        sX: this.config.fgsX,
        sY: this.config.fgsY,
        sWidth: this.fgWidth,
        sHeight: this.fgHeight,
        x: 0,
        y: this.canvas.height - this.fgHeight,
        width: this.fgWidth,
        height: this.fgHeight,
      },
    };
  }

  update(state) {
    if (state.current === state.game) {
      this.layer.fg.x = (this.layer.fg.x - this.fgDeltaX) % (this.layer.fg.width / 2);
    }
  }

  draw(layerType) {//Поскольку ширина canvas в 2 раза больше ширины фоновых изображений, отрисовываем фон из правой и левой частей
    const rightPart = {};
    for (let key in this.layer[layerType]) {
      rightPart[key] = this.layer[layerType][key];
    }
    rightPart.x = this.layer[layerType].x + this.layer[layerType].width;

    if (layerType === 'bg') {
      this.canvas.drawSky();
    }

    this.canvas.draw(this.layer[layerType]);
    this.canvas.draw(rightPart);
  }
}
