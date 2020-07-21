export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener('keydown', (event) => {
      // console.log(event.keyCode)
      switch (event.keyCode) {
        case 37:
          //move left
          paddle.moveLeft();
          break;
        case 39:
          //move right
          paddle.moveRight();
          break;
        case 27:
          //game pause(Esc)
          game.togglePause();
          break;
        case 32:
          //game start(Space)
          game.start();
          break;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
          //move left
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          //move right
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}