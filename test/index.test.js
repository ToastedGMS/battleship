const Ship = require("../src");

test('increase hit value of ship', () => {
    let testSubject = new Ship
    testSubject.hit()
    expect(testSubject.hits).toBe(1)
    expect(testSubject.hit()).toBe('+1 hit')
})
