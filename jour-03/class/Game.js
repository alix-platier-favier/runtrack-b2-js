import Player from "./class/Player.js";
import Board from "./class/Board.js";

export default class Game {
    constructor(player1, player2, board) {
      this.player1 = player1;
      this.player2 = player2;
      this.board = board;
      this.currentTurn = player1;
    }

    startNewGame()
    {
        this.player1.setIsCurrentPlayer(true);
        this.player2.setIsCurrentPlayer(false);
        this.board.initializeBoard();
        this.board.displayBoard();
    }

    makeMove(row, col)
    {
        if (this.board.getGrid()[row][col] === "-") {
            this.board.getGrid()[row][col] = this.currentTurn.getSymbol();
            this.board.displayBoard();
            this.checkWinner();
            this.switchTurn();
        }
    }

    registerMove()
    {
        const buttons = document.querySelectorAll(".case");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", (event) => {
                const id = event.target.id;
                const row = id.split("-")[1];
                const col = id.split("-")[2];

                this.makeMove(row, col);
            });
        }
    }

    switchTurn()
    {
        this.player1.setIsCurrentPlayer(!this.player1.getIsCurrentPlayer());
        this.player2.setIsCurrentPlayer(!this.player2.getIsCurrentPlayer());

        if (this.player1.getIsCurrentPlayer()) {
            this.currentTurn = this.player1;
        } else {
            this.currentTurn = this.player2;
        }
    }

    checkGameOver()
    {
        if(this.board.checkVictory() || this.board.isFUll()) {
            return true;
        }
        return false;
    }

    announceWinner()
    {
        const winnerDiv = document.getElementById("message");
        winnerDiv.textContent = `${this.currentTurn.getSymbol()} a gagné !`;

        const nullDiv = document.getElementById("message");
        nullDiv.textContent = `Match nul !`;

        if(this.board.checkGameOver)

    } 
}  