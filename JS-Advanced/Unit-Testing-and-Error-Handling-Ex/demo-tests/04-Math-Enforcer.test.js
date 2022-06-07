let { expect } = require('chai');
let { mathEnforcer } = require('./04-Math-Enforcer');

describe('Test functions in mathEnforcer', () => {
    describe('test addFiveFunction', () => {
        it('test with argument that is not number to return undefined', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        })

        it('test with argument that is valid integer (1) to return 6', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        })

        it('test with argument that is valid floating-point-number (1.1) to return 6.1', () => {
            expect(mathEnforcer.addFive(1.1)).to.equal(6.1);
        })

        it('test with argument that is valid negative integer (-1) to return 4', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        })
    })
    describe('Test subtractTen function', () => {
        it('test with argument that is not number to return undefined', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        })

        it('test with argument that is valid integer (1) to return -9', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        })

        it('test with argument that is valid floating-point-number (1.1) to return -8.9', () => {
            expect(mathEnforcer.subtractTen(1.1)).to.equal(-8.9);
        })

        it('test with argument that is valid negative integer (-1) to return -11', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        })
    })
    describe('test sum function', () => {
        it('test with non-number first argument to return undefined', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
        })

        it('test with non-number second argument to return undefined', () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        })

        it('test with non-number both argument to return undefined', () => {
            expect(mathEnforcer.sum('1', '1')).to.be.undefined;
        })

        it('test with valid both arguments to return correct sum', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(1.1, 1.1)).to.equal(2.2);
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        })
    })
})