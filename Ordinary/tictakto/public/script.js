
// here is the empty board
const board = [
['e', 'e', 'e'],
['e', 'e', 'e'],
['e', 'e', 'e']
]; 

let currentPlayer = 'X'; 
let GameOver = true; 

const cells = document.querySelectorAll('.board td'); 
cells.forEach(cell => cell.addEventListener('click', handleCellClick))


function handleCellClick(event){
    const cell = event.target; 
    const row = cell.parentElement.rowIndex; 
    const col = cell.cellIndex;

}

function canPut(board, pos){

}

function checkOutcome(board, pos){

}

function swapPlayer(currentPlayer){
    if(currentPlayer == 'X'){
        return 'O'; 
    }else{
        return 'X'; 
    }
}