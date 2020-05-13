import Board from './board';

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.board = new Board(this.canvas, this.canvas.width, this.canvas.height)
        
        // this.board.draw();
    }

    start() {
        this.board.draw();
    }
};

export default Game;