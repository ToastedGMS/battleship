const Gameboard = require("./gameboard");

class Player{
    constructor(name){
        this.gameboard = new Gameboard
        this.name = name || 'Player 1'
        this.gameboard.setPlayer(this);
    }
}

module.exports = Player