document.addEventListener('DOMContentLoaded', function() {
  // Get the game board element
  const board = document.getElementById('board');
  
  // Get all div elements inside the board
  const squares = board.querySelectorAll('div');
  
  // Add the 'square' class to each div to style it as a game square
  squares.forEach(function(square) {
    square.classList.add('square');
  });
});