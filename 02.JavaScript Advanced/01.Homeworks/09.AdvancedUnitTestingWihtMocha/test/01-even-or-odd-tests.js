let expect = require('chai').expect;
let isOddOrEven = require('../01-even-or-odd.js').isOddOrEven;
describe('01-even-or-odd.js test', function () {
    it('should return odd when the input is string with 3 characters', function () {
        let expectedOutput = 'odd';
        let input = 'tri';
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return expected output');
    });
    it('should return even when the input is a string with 4 characters', function () {
        let expectedOutput = 'even';
        let input = 'edno';
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return expected output');
    });

    it('should return undefined when the input is an object', function () {
        let expectedOutput = undefined;
        let input = {};
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return expected output');
    });
});