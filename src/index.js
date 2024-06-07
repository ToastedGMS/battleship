const Player = require("./player");
const Ship = require("./ship");
const createGrid = require("./renderBoard");
const { newRound } = require("./manageDom");

// temporary hardcoded ship coordinates
const player1 = new Player('Player 1')
player1.gameboard.placeShip(new Ship(1),['a0', 'b0', 'c0', 'd0', 'e0'])
player1.gameboard.placeShip(new Ship(2),['f8', 'g8', 'h8', 'i8'])
player1.gameboard.placeShip(new Ship(3),['g3', 'g4', 'g5'])
player1.gameboard.placeShip(new Ship(4),['a7', 'a8', 'a9'])
player1.gameboard.placeShip(new Ship(5),['j1', 'j2'])

const player2 = new Player('Player 2')
player2.gameboard.placeShip(new Ship(1),['a1', 'b1', 'c1', 'd1', 'e1'])
player2.gameboard.placeShip(new Ship(2),['f8', 'g8', 'h8', 'i8'])
player2.gameboard.placeShip(new Ship(3),['g3', 'g4', 'g5'])
player2.gameboard.placeShip(new Ship(4),['a7', 'a8', 'a9'])
player2.gameboard.placeShip(new Ship(5),['j1', 'j2'])

// select and add event listener to button that creates gameboards
const masterbtn = document.querySelector('#masterbtn')

masterbtn.addEventListener('click', masterbtn.fn = function fn(){
    createGrid(player1.gameboard), createGrid(player2.gameboard) //render the boards
    masterbtn.removeEventListener('click', masterbtn.fn)
    newRound() // start game
})

export {player1, player2}
