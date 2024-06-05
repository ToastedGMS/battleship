const Ship = require("./ship");

class Gameboard{
    constructor(){ 
        //arrays representing the 2d gameboard
        //I understand this is not the most efficient way of doing this
        //but it is what it is.
        this.a = [1,2,3,4,5,6,7,8,9,10];
        this.b = [1,2,3,4,5,6,7,8,9,10];
        this.c = [1,2,3,4,5,6,7,8,9,10];
        this.d = [1,2,3,4,5,6,7,8,9,10];
        this.e = [1,2,3,4,5,6,7,8,9,10];
        this.f = [1,2,3,4,5,6,7,8,9,10];
        this.g = [1,2,3,4,5,6,7,8,9,10];
        this.h = [1,2,3,4,5,6,7,8,9,10];
        this.i = [1,2,3,4,5,6,7,8,9,10];
        this.j = [1,2,3,4,5,6,7,8,9,10];
        this.gameOver = 0
    }

    placeShip(ship, coordinates = []){
        //takes a ship object and places a reference to it in given coordinates
        //it's expected that the number of coordinates matches the total length of the given ship
        coordinates.forEach((element) => {
            let char1 = element.charAt(0)
            let char2 = element.charAt(1)

            this[char1][char2] = ship
        })
    }

    //if given coordinates match a ship, call it's 'hit' function.
    //if not place 'miss' in those coordinates 
    receiveAttack(coordinates){
        let char1 = coordinates.charAt(0)
        let char2 = coordinates.charAt(1)

        if ( isNaN(this[char1][char2]) ){
            this[char1][char2].hit()
            this.gameOver+= 1
            this.allShipsSunk()
        } 
        else { 
            this[char1][char2] = 'miss'
        }
    }

    allShipsSunk(){
        if (this.gameOver === 17){
            alert('Gameover')
            return 'Gameover'
        }
    }
}

module.exports = Gameboard
