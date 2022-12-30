const alarm = require('../src/app.js')
const calc = require('../src/app.js')
const assert = require('assert')
it('checkTime function test', () => {
    assert.equal(alarm.checkTime('11'), 11)
})

it('checkTime function test 2', () => {
    assert.equal(alarm.checkTime('9'), '09')
})

it('calc test (sum of 1 and 3)', () => {
    assert.equal(calc.add(1, 3), 4)
})
it('calc test (sum of -1 and -1)', () => {
    assert.equal(calc.add(-1, -1), -2)
})
it('calc test (difference of 33 and 3)', () => {
    assert.equal(calc.subtract(33, 3), 30)
})
it('calc test (multiply product of 12 and 12)', () => {
    assert.equal(calc.multiply(12, 12), 144)
})
it('calc test (quotient of 10 and 2)', () => {
    assert.equal(calc.divide(10, 2), 5)
})