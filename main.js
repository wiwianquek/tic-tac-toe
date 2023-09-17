// Constants
const colors = {
    null: '#fff',
    '1': 'red',
    '-1': 'blue'
};

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Variables
let board = Array(9).fill(null);
let turn = 1; // Player 'X' starts
let winner = null;

// Cached elements
const squares = document.querySelectorAll('.square');
const message = document.querySelector('.message');
const resetButton = document.querySelector('.reset-button');

// Functions
function renderBoard() {
    board.forEach((value, index) => {
        squares[index].style.backgroundColor = colors[value];
        squares[index].textContent = value === null ? '' : (value === 1 ? 'X' : 'O');
    });
}

function checkForWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function checkForTie() {
    return !board.includes(null);
}

function handleClick(event) {
    const squareIndex = event.target.id;
    if (board[squareIndex] || winner) return; // Square already taken or game over
    board[squareIndex] = turn;
    turn *= -1;
    winner = checkForWinner() || (checkForTie() ? 'T' : null);
    renderBoard();
    if (winner) {
        if (winner === 'T') {
            message.textContent = "It's a tie!";
        } else {
            message.textContent = `Player ${winner === 1 ? 'X' : 'O'} wins!`;
        }
    } else {
        message.textContent = `Player ${turn === 1 ? 'X' : 'O'}'s turn`;
    }
}

function resetGame() {
    board = Array(9).fill(null);
    turn = 1;
    winner = null;
    message.textContent = '';
    renderBoard();
}

// Event listeners
squares.forEach(square => square.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);

// Initial rendering
renderBoard();
