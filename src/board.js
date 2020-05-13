import Object from './object';

class Board {
    constructor(canvas, gameWidth, gameHeight) {
        // this.ground = new Object(0, gameHeight - 20, gameWidth, 20);
        // this.ground.show();
        this.canvas = canvas;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.ctx = canvas.getContext('2d');

        this.draw();
    }; 

    draw() {
        // background(0);
        // this.ctx.fill(255);
        this.ctx.rect(0, 0, this.gameWidth, this.gameHeight);
        this.ctx.fillStyle = 255;
        this.ctx.fill();
    };
};

export default Board;