const Ship = require("../src/ship")

//test 'hit' function
test('increase hit value of ship', () => {
    let testSubject = new Ship
    testSubject.hit()
    expect(testSubject.hits).toBe(1)
    expect(testSubject.hit()).toBe('+1 hit')
})

//test 'isSunk' function
test('correctly determines if ship is sunk', () => {
    let testSubject1 = new Ship(5)
    testSubject1.hit();
    testSubject1.hit();


    let testSubject2 = new Ship
    testSubject2.hit();

    expect(testSubject1.isSunk()).toBe('true')
    expect(testSubject1.sunk).toBe(true)

    expect(testSubject2.isSunk()).toBe('false')
    expect(testSubject2.sunk).toBe(false)
})

// test shipLength function
test('correctly determines ship length', () => {
    let testSubject = new Ship(3)

    expect(testSubject.length).toBe(3)
})

// test shipClass function
test('correctly determines ship class', () => {
    let testSubject = new Ship(3)

    expect(testSubject.class).toBe('Cruiser')
})