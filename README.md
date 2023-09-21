# Tic Tac Toe

A simple tic tac toe game as I code my first "game" project :)

This ReadMe document provides a comprehensive guide to understanding (and my understanding) of the Tic-Tac-Toe game, including its rules, required constants, variables, and the sequence of actions involved in playing and restarting the game. 

## 1. Required Constants 

### 1.1 Colours 
The colors object defines the colors used for empty squares, player 1 ('X'), and player -1 ('O') on the game board. Each key in the object corresponds to a specific player value.
- Pink for player 1 ('X')
- Yellow for player -1 ('O')

### 1.2 Winning Combinations 
There are 8 possible winning combinations, each represented as an array containing three indexes of the game board. A player wins if they occupy all three positions in any of these combinations.

> *Note: We define these constants in javascript.* 

## 2. Required Variables

### 2.1 Board Array 
The board array is used to represent the state of the game board, with each element corresponding to a square. The elements are initially set to 'null' to represent empty squares.

### 2.2 Turn Variable
The turn variable keeps track of whose turn it is in the game. Player 'X' is represented by 1, and player 'O' is represented by -1.

### 2.3 Winner Variable
The winner variable has three possible values: the player that won (1 or -1), 'T' to indicate a tie game, or null to represent a game in progress.

## 3. Storing Elements in Variables

### 3.1 Cached Squares
The 9 elements that represent the squares on the game board are stored in variables to improve code conciseness, readability, and performance.

## 4. Initialization and Rendering

### 4.1 Initializing State Variables
Upon loading the app, the following state variables are initialized:
- **board**: An array with 9 nulls representing empty squares.
- **turn**: Initialized to 1 (player 'X').
- **winner**: Initialized to null to indicate no winner or tie.

### 4.2 Rendering State Variables
After initialization, the state variables are rendered to the page:
- **Board Rendering**
  - The board is rendered by looping over each square element on the page and setting its background color based on the corresponding value in the colors object.

- **Message Rendering**
  - If there is a winner, the message displays the winning player's name in uppercase.
  - If the game is a tie, a tie message is displayed.
  - If the game is still in progress, the message shows whose turn it is, using the color name for the player in uppercase.

### 4.3 User Interaction
The app waits for the user to click on a square to make their move.

## 5. Handling Player Clicks

### 5.1 Obtaining Clicked Square Index
The index of the square clicked by the player is obtained by either extracting it from the HTML element's ID or by looping through the cached square elements and matching the event target.

### 5.2 Check for Square Availability
If the square is already occupied (has a value in the board array), the function returns immediately, as that square cannot be selected.

### 5.3 Check for Game Over
If a winner has been determined (not null), or if the game is already a tie, the function returns immediately to indicate that the game is over.

### 5.4 Update the Board
The selected square on the board is updated with the value of the current player's turn.

### 5.5 Switch Turns
Turns are alternated by multiplying the turn variable by -1, switching between players 'X' and 'O'.

### 5.6 Check for a Winner
The game checks if there is a winner by iterating through the defined winning combinations.
- For each combination, it calculates the sum of the board positions using the indexes specified in the combination.
- The total is converted to an absolute value to handle both player 1 and player -1.
- If the total equals 3, a winner is found, and the winner variable is set to the player value.

### 5.7 Check for a Tie
If no more 'null' values are found in the board array, the game is declared a tie, and the winner variable is set to 'T'.

### 5.8 Render the Updated State
After all state updates, the game re-renders the state variables (step 4.2) to display the current state of the game.

## 6. Handling the Replay Button (Or restarting the game!)

The index of the square clicked by the player is obtained by either extracting it from the HTML element's ID or by looping through the cached square elements and matching the event target.