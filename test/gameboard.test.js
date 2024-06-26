const Gameboard = require("../src/gameboard");
const Ship = require("../src/ship");


test('correctly places ship in provided coordinates', () => {
    const gameboard = new Gameboard
    const ship1 = new Ship(2)
    gameboard.placeShip(ship1, ['a1', 'b1', 'c1', 'd1'])
    expect(gameboard.a[2]).toBe(3)
    expect(gameboard.a[1]).toBe(ship1)
})

test('correctly determines if given coordinates hit a ship or not', () => {
    const gameboard = new Gameboard
    const ship1 = new Ship(5)
    gameboard.placeShip(ship1, ['a1', 'b1'])
    gameboard.receiveAttack('a1')
    gameboard.receiveAttack('a2')

    expect(ship1.hits).not.toBe(0)
    expect(gameboard.a[2]).toBe('miss')
})

test('correctly alerts if all ships are sunk', () => {
    const gameboard = new Gameboard
    gameboard.gameOver = 17
    expect(gameboard.allShipsSunk()).toBe('Gameover')
})