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
    let testSubject1 = new Ship
    testSubject1.hit();

    let testSubject2 = new Ship
    testSubject2.length = 2
    testSubject2.hit();

    expect(testSubject1.isSunk()).toBe('true')
    expect(testSubject1.sunk).toBe(true)

    expect(testSubject2.isSunk()).toBe('false')
    expect(testSubject2.sunk).toBe(false)
})
