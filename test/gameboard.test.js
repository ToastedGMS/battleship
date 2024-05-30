const Gameboard = require("../src/gameboard");
const Ship = require("../src/ship");


test('correctly places ship in provided coordinates', () => {
    const gameboard = new Gameboard
    const ship1 = new Ship(2)
    gameboard.placeShip(ship1, ['a1', 'b1', 'c1', 'd1'])
    expect(gameboard.a[2]).toBe(3)
    expect(gameboard.a[1]).toBe('Battleship')
})