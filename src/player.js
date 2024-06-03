const Gameboard = require("./gameboard");
const Ship = require("./ship");

class Player{
    constructor(name){
        this.gameboard = new Gameboard
        this.name = name || 'Player 1'
    }
}

module.exports = Player