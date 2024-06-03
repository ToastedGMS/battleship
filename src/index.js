const Player = require("./player");
const Ship = require("./ship");

const player1 = new Player
const plr1Ship1 = new Ship(5)
player1.gameboard.placeShip(plr1Ship1, ['c3','d3'])

const player2 = new Player
const plr2Ship1 = new Ship(5)
player2.gameboard.placeShip(plr2Ship1, ['h8','h9'])

const masterbtn = document.querySelector('#masterbtn')
const wrapper = document.querySelector('.wrapper')

function createGrid(board) {
    let counter = 1

    const container = document.createElement('div');
    container.className = 'grid-container';

    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    rows.forEach(row => {
        board[row].forEach(cell => {

            const cellElement = document.createElement('div');
            cellElement.className = 'grid-item';
            
            cellElement.setAttribute('coordinate',`${row}${counter}`)
            counter++
            if (counter > 10){ counter = 1}

            if ( !isNaN(cell) == false){
                cellElement.textContent = cell.class;
            } else {
                cellElement.textContent = cell;
            }

            container.appendChild(cellElement);
        });
    });

    wrapper.appendChild(container);
}

masterbtn.addEventListener('click', () => {createGrid(player1.gameboard), createGrid(player2.gameboard)})