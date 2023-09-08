
export default class Board
{
    constructor(grid, hasWinner)
    {
        this.grid = grid;
        this.hasWinner = hasWinner;
    }

    getGrid()
    {
        return this.grid;
    }

    setGrid(grid)
    {
        this.grid = grid;
    }

    getHasWinner()
    {
        return this.hasWinner;
    }

    setHasWinner(hasWinner)
    {
        this.hasWinner = hasWinner;
    }

    initializeBoard()
    {
        this.grid = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ];

        this.hasWinner = false;
    }

    displayBoard() {
        const boardDiv = document.getElementById("board");
    
        boardDiv.innerHTML = "";
    
        for (let row = 0; row < 3; row++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
    
            for (let col = 0; col < 3; col++) {
                const button = document.createElement("button");
                button.classList.add("case");
                button.id = `btn-${row}-${col}`;
                button.textContent = this.grid[row][col];
    
                rowDiv.appendChild(button);
            }
    
            boardDiv.appendChild(rowDiv);
        }
    }
    
    placeMove(row, col, symbol) {
        if (this.grid[row][col] === 'X' || this.grid[row][col] === 'O') {
            return false; 
        } else {
            this.grid[row][col] = symbol; 
            this.displayBoard();
            return true; 
        }
    }
    
    checkVictory()
    {
        // Check rows
        for (let row = 0; row < 3; row++) {
            if (this.grid[row][0] !== "-" && this.grid[row][0] === this.grid[row][1] && this.grid[row][0] === this.grid[row][2]) {
                this.hasWinner = true;
                return true;
            }
        }
    
        // Check columns
        for (let col = 0; col < 3; col++) {
            if (this.grid[0][col] !== "-" && this.grid[0][col] === this.grid[1][col] && this.grid[0][col] === this.grid[2][col]) {
                this.hasWinner = true;
                return true;
            }
        }
    
        // diagonals
        if (this.grid[0][0] !== "-" && this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2]) {
            this.hasWinner = true;
            return true;
        }
    
        if (this.grid[0][2] !== "-" && this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]) {
            this.hasWinner = true;
            return true;
        }
    
        return false;
    }

    isFull()
    {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++)
            {
                if (this.grid[row][col] === "-") {
                    return false;
                }
            }
        }

        return true;
    }

    resetBoard()
    {
        this.initializeBoard();
        this.displayBoard();
    }
}