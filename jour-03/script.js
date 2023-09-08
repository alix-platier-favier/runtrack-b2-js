import {Player} from "./Player.js";
import {Board} from "./Board.js";
import {Game} from "./Game.js";

const currentPlayer = document.getElementById("current-player");
const player1 = new Player("X", true, currentPlayer);
const player2 = new Player("O", false, currentPlayer);
const board = new Board();
const game = new Game(player1, player2, board);

game.startNewGame();


