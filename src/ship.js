class Ship{
    constructor(length){
        this.length = length || 0
        this.hits = 0
        this.sunk = false
    }

    // increases the number of ‘hits’ in your ship.
    hit(){
        this.hits+=1
        return '+1 hit'
    }

    // calculates whether a ship is considered sunk based on its length and the number of hits it has received.

    isSunk(){
        if (this.hits >= this.length){
            this.sunk = true
            return 'true'
        }
        else { return 'false'}
    }

}

module.exports = Ship

