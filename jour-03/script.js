import Player from "./class/Player.js";
import Board from "./Board.js";
import Game from "./class/Game.js";

const currentPlayer = document.getElementById("current-player");
const player1 = new Player("X", true, currentPlayer);
const player2 = new Player("O", false, currentPlayer);
const board = new Board();

