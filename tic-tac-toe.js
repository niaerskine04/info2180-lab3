document.addEventListener('DOMContentLoaded', function() {
  startBoard();
  squareEventListeners();
});


function startBoard() {
  const board = document.getElementById('board');
  squares = board.querySelectorAll('div');
  
  // Add the 'square' class to each div to style it as a game square
  squares.forEach(function(square) {
    square.classList.add('square');
  });
}

function squareEventListeners() {
  squares.forEach(function(square, index) {
    square.addEventListener('click', function() {
      handleSquareClick(square, index);
    });
  });
}

function handleSquareClick(square, index) {
  // Add the current player's mark to the square
    if (square.textContent !== '') {
        return; // Ignore clicks on already filled squares
    }
    square.textContent = currentPlayer;
    square.classList.add(currentPlayer);
    
    // Update the game state array
    gameState[index] = currentPlayer;
    
    // Switch to the other player
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let squares;