let { expect } = require('chai');
let { rgbToHexColor } = require('./06-RGB-to-Hex');

describe('test rgbToHexColor func', () => {
    describe('happy cases', () => {
        it('with passed 255, 255, 255 return #FFFFFF', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        })

        it('with passed 0, 0, 0 return #000000', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        })

        it('with passed 255, 64, 64 return #FF4040', () => {
            expect(rgbToHexColor(255, 64, 64)).to.equal('#FF4040');
        })
    })

    describe('corner cases and test overload', () => {
        it('one argiment is not integer return undefined', () => {
            expect(rgbToHexColor('0', 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, '0', 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, '0')).to.be.undefined;

        })
        it('less than expected arguments passed return undefined', () => {
            expect(rgbToHexColor(0, 0)).to.be.undefined;
        })

        it('passed arguments below the range of RGB return undefined', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;

        })

        it('passed arguments above the range of RGB return undefined', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
            expect(rgbToHexColor(256, 255, 255)).to.be.undefined;
            expect(rgbToHexColor(255, 256, 255)).to.be.undefined;
            expect(rgbToHexColor(255, 255, 256)).to.be.undefined;

        })
    })
})