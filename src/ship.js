class Ship{
    constructor(type){
        this.length = this.shipLength(type)
        this.class = this.shipClass(type)
        this.hits = 0
        this.sunk = false
    }

    // determine length of ship based on it's type
    shipLength(type){
        if (type === 1){
            return this.length = 5
        } else if (type === 2){
            return this.length = 4   
        } else if (type === 3){
            return this.length = 3
        } else if (type === 4){
            return this.length = 3
        } else if (type === 5){
            return this.length = 2
        }
    }

    // determine class of ship based on it's type
    shipClass(type){
        if (type === 1){
            return this.class = 'Carrier';
        } else if (type === 2){   
            return this.class = 'Battleship';
        } else if (type === 3){
            return this.class = 'Cruiser';
        } else if (type === 4){
            return this.class = 'Submarine';
        } else if (type === 5){
            return this.class = 'Destroyer';
        }
    }

    // increases the number of ‘hits’ in your ship.
    hit(){
        this.hits+=1
        this.isSunk()
    }

    // calculates whether a ship is considered sunk based on its length and the number of hits it has received.

    isSunk(){
        if (this.hits >= this.length){
            this.sunk = true
        }
    }

}

module.exports = Ship

