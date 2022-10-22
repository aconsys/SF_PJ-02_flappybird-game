export default class Message {
  constructor(canvas, config) {
    this.config = config.message;
    this.canvas = canvas;
    this.messageType = this.config;
  }

  draw(state) {
    let message = (currentMessage) => {
      return {
        sX: currentMessage.sX,
        sY: currentMessage.sY,
        sWidth: currentMessage.sWidth,
        sHeight:currentMessage.sHeight,
        x: this.canvas.width / 2 - currentMessage.sWidth / 2,
        y: currentMessage.y,
        width: currentMessage.sWidth,
        height: currentMessage.sHeight
      };
    } ;

    if (state.current === state.ready) {
      let readyMessage = message(this.messageType.ready);
      this.canvas.draw(readyMessage);
    } else if (state.current === state.gameOver) {
      this.canvas.draw(message(this.messageType.gameOver));
    }
  }
}
