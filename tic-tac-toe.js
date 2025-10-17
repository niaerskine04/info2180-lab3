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
    square.addEventListener('mouseover', function() {
      square.classList.add('hover');
    });
    square.addEventListener('mouseout', function() {
      square.classList.remove('hover');
    });
  });
}

function handleSquareClick(square, index) {
  // Add the current player's mark to the square
    if (square.textContent !== '' || !playing) {
        return; // Ignore clicks on already filled squares
    }
    square.textContent = currentPlayer;
    square.classList.add(currentPlayer);
    
    // Update the game state array
    gameState[index] = currentPlayer;
    
    winPlayCheck();
    // Switch to the other player
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

function winPlayCheck() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],  
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const statusDiv= document.getElementById('status');
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
      statusDiv.classList.add('you-won');
      playing = false;
      return;
    } 
  }
}

let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let squares;
let playing = true;