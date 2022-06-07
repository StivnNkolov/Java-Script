let { lookupChar } = require('./03-Char-Lookup');
let { expect } = require('chai');

describe('Test lookupChar function', () => {
    it('with passed correct arguments (test, 1) to returns e', () => {
        expect(lookupChar('test', 1)).to.equal('e');
    })

    it('test with first argument not string to return undefined', () => {
        expect(lookupChar(4, 3)).to.be.undefined;
    })

    it('test with second argument integer to return undefined', () => {
        expect(lookupChar('test', '1')).to.be.undefined;
    })

    it('test with passed floating point number to return  undefined', () => {
        expect(lookupChar('test', 1.1)).to.be.undefined;
    })

    it('test with invalid both arguments to return undefinded', () => {
        expect(lookupChar(1, 'test')).to.be.undefined;
    })

    it('test with index our of range to return "Incorrect index"', () => {
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
    })

    it('test with negative index to return "Incorrect index"', () => {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
    })

    it('test with arguments "test", 0 to returns "t"', () => {
        expect(lookupChar('test', 0)).to.equal('t');
    })
})