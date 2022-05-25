let { expect } = require('chai');
let { createCalculator } = require('./07-Add-Subtract');


describe('test createCaluclator func', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('function return object with all properties', () => {
        expect(instance).to.have.ownProperty('add');
        expect(instance).to.have.ownProperty('subtract');
        expect(instance).to.have.ownProperty('get');
    })

    it('functions return object with initial value 0', () => {
        expect(instance.get()).to.equal(0);
    })

    it('expect when add is called with 1 and 2 to return 3', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    })

    it('expect when subtract is called with 1 and 2 to return 3', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    })

    it('expect when add negative number (-1) to return -1', () => {
        instance.add(-1);
        expect(instance.get()).to.equal(-1);
    })

    it('expect when subtract negative number (-1) to return -1', () => {
        instance.subtract(-1);
        expect(instance.get()).to.equal(1);
    })

    it('expect when passed invalid argument to add return NaN', ()=> {
        instance.add('test');
        expect(instance.get()).to.be.NaN;
    })

    it('expect when passed invalid argument to subtract return NaN', () => {
        instance.subtract('test');
        expect(instance.get()).to.be.NaN;
    })

    it('when passed "1" to add (string) expect to return 1', ()=> {
        instance.add('1');
        expect(instance.get()).to.equal(1);
    })

    it('when passed "1" to subtract (string) expect to return -1', () => {
        instance.subtract('1');
        expect(instance.get()).to.equal(-1);
    })
})