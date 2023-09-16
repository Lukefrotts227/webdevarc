// Initialize the empty board
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let currentPlayer = 'X';
  let gameOver = false;
  
  const cells = document.querySelectorAll('.board td');
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  
  // Initialize the game board on page load
  updateBoard();
  
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetGame);
  
  function handleCellClick(event) {
    if (gameOver) return; // Don't allow moves after the game is over
    const cell = event.target;
    const row = cell.parentElement.rowIndex;
    const col = cell.cellIndex;
  
    if (!canPut(board, row, col)) {
      alert("Cannot place 'X' or 'O' there!!");
    } else {
      board[row][col] = currentPlayer;
      cell.textContent = currentPlayer;
  
      const winner = checkOutcome(board, row, col);
      if (winner) {
        alert(`${winner} is the winner`);
        gameOver = true;
      } else {
        currentPlayer = swapPlayer(currentPlayer);
      }
    }
  }
  
  function canPut(board, row, col) {
    return board[row][col] === '';
  }
  
  function checkWinner(board, player) {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player && board[i][1] === player && board[i][2] === player ||
        board[0][i] === player && board[1][i] === player && board[2][i] === player
      ) {
        return true;
      }
    }
  
    if (
      board[0][0] === player && board[1][1] === player && board[2][2] === player ||
      board[0][2] === player && board[1][1] === player && board[2][0] === player
    ) {
      return true;
    }
  
    return false;
  }
  
  function checkOutcome(board, row, col) {
    if (checkWinner(board, currentPlayer)) {
      return currentPlayer;
    } else if (board.flat().every(cell => cell !== '')) {
      alert("It's a draw!");
      gameOver = true;
    }
  }
  
  function resetGame() {
    // Clear the board array and reset the visual appearance
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        board[row][col] = '';
        cells[row * 3 + col].textContent = '';
      }
    }
  
    // Reset game state variables
    currentPlayer = 'X';
    gameOver = false;
  }
  
  function swapPlayer(currentPlayer) {
    return currentPlayer === 'X' ? 'O' : 'X';
  }
  
  function updateBoard() {
    // Update the visual appearance of the board based on the board array
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        cells[row * 3 + col].textContent = board[row][col];
      }
    }
  }
  