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

}

module.exports = Ship

