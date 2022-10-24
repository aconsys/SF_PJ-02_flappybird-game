export default class Config {
  constructor() {
    this.state = {
      current: 0,
      ready: 0,
      game: 1,
      gameOver: 2,
    };

    this.bgroundImg = {
      x: 0,
      y: 0,
      width: 276,
      height: 228,
    };

    this.fgroundImg = {
      x: 275,
      y: 0,
      width: 224,
      height: 113,
    };

    this.bird = {
      frames: [
        {
          sX: 276,
          sY: 112,
        },
        {
          sX: 276,
          sY: 139,
        },
        {
          sX: 276,
          sY: 164,
        },
        {
          sX: 276,
          sY: 139
        }
      ],

      y: 150,
      width: 34,
      height: 26,
      size: 12,
      frame: 0,
      speed: 0,
      rotation: 0,
      flip: 4.3,
      gravity: 0.2,
      DEGREE: Math.PI / 180,
    };

    this.background = {
      bgWidth: 275,
      bgHeight: 226,
      fgWidth: 224,
      fgHeight: 112,
      fgDeltaX: 2,
      bgsX: 0,
      bgsY: 0,
      fgsX: 276,
      fgsY: 0,
    };

    this.pipes = {
      topsX: 553,
      topsY: 0,
      bottomsX: 502,
      bottomsY: 0,
      width: 53,
      height: 400,
      gap: 92,
      maxYPosition: -150,
      deltaX: 2,
    };

    this.message = {
      ready: {
        sX: 0,
        sY: 228,
        sWidth: 173,
        sHeight: 152,
        y: 80,
      },

      gameOver: {
        sX: 175,
        sY: 228,
        sWidth: 225,
        sHeight: 202,
        y: 90,
      },
    };

    this.startBtn = {
      x: 120,
      y: 263,
      width: 83,
      height: 29,
    };
  }
}
