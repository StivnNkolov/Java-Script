let { expect } = require('chai');
let { isSymmetric } = require('./05-Check-for-Symmetry')

describe('isSymmetric unit tests', () => {
    it('with passed symmetric array of numbers return true', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })

    it('with passed symmetric array of stings return true', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    })

    it('with passed non-symmetric array return false', () => {
        expect(isSymmetric([1, 2, 1, 1])).to.be.false;
    })

    it('with passed non-array return false', () => {
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric('text')).to.be.false;
        expect(isSymmetric({})).to.be.false;
    })

    it('with passed mixed array return false', () => {
        expect(isSymmetric([1, 2, '2', 1])).to.be.false;
    })
})