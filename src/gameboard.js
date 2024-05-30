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
    }

    placeShip(ship, coordinates = []){
        //takes a ship object and places it in given coordinates
        const shipClass = ship.class
        coordinates.forEach((element) => {
            let char1 = element.charAt(0)
            let char2 = element.charAt(1)

            this[char1][char2] = shipClass
        })
    }
}

module.exports = Gameboard
