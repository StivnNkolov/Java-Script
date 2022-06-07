let { expect } = require('chai');
let { isOddOrEven } = require('./02-Even-Or-Odd');

describe('Test isOddOrEven function', () => {
    it('test with passed string: "test" return even', () => {
        expect(isOddOrEven('test')).to.equal('even');
    })

    it('test with passed string: "tes" return odd', () => {
        expect(isOddOrEven('tes')).to.equal('odd');
    })

    it('test with passed non-string value: 4 return undefined', () => {
        expect(isOddOrEven(4)).to.be.undefined;
    })

    it('test with passed empty string to return even', () => {
        expect(isOddOrEven('')).to.equal('even');
    })
})