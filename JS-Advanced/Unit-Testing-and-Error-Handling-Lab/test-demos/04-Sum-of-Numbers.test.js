let { expect } = require('chai');
let { sum } = require('./04-Sum-of-Numbers');

describe('Test sum function', () => {
    it('test with valid array [1, 2, 3] returns 6', () => {
        expect(sum([1, 1, 1])).to.equal(3);
    })

    it('test with passed string to retrun NaN', () => {
        expect(sum('string')).to.be.NaN;
    })

    it('test with passed single number to throw TypeError', () => {
        expect(() => sum(1)).to.throw(TypeError);
    })

    it('test with array that include string to return NaN', ()=> {
        expect(sum([1, 'test', 1])).to.be.NaN
    })

})