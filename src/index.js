// console.log("Webpack is working!");
import Board from './board';
import Object from './object';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const GAME_WIDTH = canvas.width;
    const GAME_HEIGHT = canvas.clientHeight;

    const game = new Game(canvas);

    game.start();
});