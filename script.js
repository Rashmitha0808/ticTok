let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];


function handleMove(event) {
    const index = event.target.id - 1;

    if (gameBoard[index] !== "" || checkWin(gameBoard)) {
        return;
    }

    gameBoard[index] = currentPlayer;

    event.target.innerText = currentPlayer;

    const winner = checkWin(gameBoard);

    let message = document.querySelector(".messages");
    if (winner) {
        if (winner === "X") {
            message.innerText = "Congratulations! Player 1 wins 🥳";
        } else {
            message.innerText = "Congratulations! Player 2 wins 🥳";
        }
    } else if (!gameBoard.includes("")) {
        message.innerText = "Draw!";
    }


    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin(board) {
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let combo of winningCombination) {
        const [a, b, c] = combo;

        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return board[a];
        }
    }

    return null;
}


const gridButtons = document.querySelectorAll(".grid");

gridButtons.forEach((button) => button.addEventListener("click", handleMove));