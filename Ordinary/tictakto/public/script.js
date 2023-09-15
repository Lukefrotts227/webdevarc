
// here is the empty board
const board = [
['', '', ''],
['', '', ''],
['', '', '']
]; 

let currentPlayer = 'X'; 
let GameOver = true; 

const cells = document.querySelectorAll('.board td'); 
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
        const cell = cells[row * 3 + col];
        cell.textContent = board[row][col];
    }
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);


function handleCellClick(event){
    const cell = event.target; 
    const row = cell.parentElement.rowIndex; 
    const col = cell.cellIndex;
    if(!canPut(board, row, col)){
        alert("Cannot place go there!!"); 
        console.log('path1')
    }else{
        console.log('path2')
        const winner = checkOutcome(board, row, col); 
        if(winner){
            if(winner === 'X'){
                alert("X is the winner"); 
                resetGame(); 
            }else{
                alert("O is the winner"); 
                resetGame(); 
            }
            
        }else{
            cell.textContent = currentPlayer; 
            currentPlayer = swapPlayer(currentPlayer); 
        }
    }

}

function canPut(board, row, col){
    return board[row][col] === ''; 
}

function checkWinnerPrim(player, board, row, col){

}

function checkWinner(board, row, col){
    // check X
    return null;

    // check O

    if(out1){

    }

    else if(out2){

    }else{

    }
}

function checkOutcome(board, row, col){

    return checkWinner(board, row, col); 

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

function swapPlayer(currentPlayer){
    if(currentPlayer == 'X'){
        return 'O'; 
    }else{
        return 'X'; 
    }
}