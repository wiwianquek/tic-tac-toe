// Defining Constants
const colors = {
    null: '#fff',
    '1': 'pink',
    '-1': 'yellow'
};

const winningCombos = [
    [0, 1, 2], //imagine this to be on the first top straight row winning combo 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //imagine this to be on the first vertical row winning combo (from the most left)
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //imagine this to be the right diagonal winning combo 
    [2, 4, 6] //imagine this to be the left diagonal winning combo 
];

// Variables
let board = Array(9).fill(null); //fill null since it will be empty first 
let turn = 1; // Player 'X' starts
let winner = null; //since the game is starting first and nobody is winning yet, this is used to keep track of the current state 

// Cached elements
const squares = document.querySelectorAll('.square'); 
const message = document.querySelector('.message');
const resetButton = document.querySelector('.reset-button');

// Functions
function renderBoard() { 
    board.forEach((value, index) => { // Loop through each square where value is defined by null, 1, or -1. Index represents the index of the current square 
        squares[index].style.backgroundColor = colors[value]; // Sets the color of the square based on the value (see above constants for what these colors are when a property/variable is triggered)
        
        // Check if the square is empty (null) or occupied by a player (1 or -1)
        if (value === null) {
            squares[index].textContent = ''; // Set the text content to an empty string for an empty square
        } else {
            squares[index].textContent = value === 1 ? 'X' : 'O'; // Set 'X' for player 1 and 'O' for player -1
        }
    });
}


function checkForWinner() { 
    for (const combo of winningCombos) { //iterates through each combi stored in winningCombos
        const [a, b, c] = combo; //represents the position on the board that should be checked for a win 

        //checks if three positions on the board (represented by a, b, and c) are filled with the same player's symbol ('X' or 'O')
        //If board[a], board[b], and board[c] all have the same symbol ('X' or 'O'), then it locks a winning position 
        //Example, if we look at the winningCombo [0, 1, 2], the code below states that:
            //if at index 0 = X AND index 1 = X AND index 2 = X, then return X
        if (board[a] && board[a] === board[b] && board[a] === board[c]) { 
            return board[a];
        }
    }
    return null;
}

function checkForTie() {
    return !board.includes(null); //if there are no empty squares left, then due to ! it becomes "true" which results in a tie. If it is "false" then the game continues. 
}

function handleClick(event) { //clicking event 
    const squareIndex = event.target.id; //let squareIndex sets on which square was clicked 
    if (board[squareIndex] || winner) return; // Square already taken or game over
    board[squareIndex] = turn; //X will start first
    turn *= -1; //toggles the turn to O 
    winner = checkForWinner() || (checkForTie() ? 'T' : null); //checks to see if winner or not, then will set to the winner variable. Otherwise, it checks for Tie.
    
    renderBoard(); //sets the visuals on the board
    if (winner) {
        if (winner === 'T') { //if it is a Tie, then winner will be set to T 
            message.textContent = "It's a tie!";
        } else {
            message.textContent = `Player ${winner === 1 ? 'X' : 'O'} wins!`; //sets the message to respective winner depending if winner === 1 or -1 
        }
    } else {
        message.textContent = `Player ${turn === 1 ? 'X' : 'O'}'s turn`; //if nobody win, then dictates whose turn next 
    }
}

function resetGame() { //sets everything to initial state
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
