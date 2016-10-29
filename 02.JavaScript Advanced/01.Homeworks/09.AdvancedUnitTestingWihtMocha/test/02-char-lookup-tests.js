let expect = require('chai').expect;
let lookupChar = require('../02-char-lookup.js').lookupChar;

describe('02-char-lookup.js tests', () => {
    it('should return "d" when the input is ("abcd", 3)', () => {
        let expectedOutput = 'd';
        expect(lookupChar('abcd', 3)).to.be.equal(expectedOutput, 'Function did not return correct output when the input values are correct');
    });

    it('should return "a" when the input is ("abcd", 0)', () => {
        let expectedOutput = 'a';
        expect(lookupChar('abcd', 0)).to.be.equal(expectedOutput, 'Function did not return correct output when the input values are correct');
    });

    it('should return undefined when the first input parameter is number', () => {
        let expectedOutput = undefined;
        let firstInputParameter = 5;
        expect(lookupChar(firstInputParameter, 3)).to.be.equal(expectedOutput, 'Function did not return correct output when the first input argument is a number');
    });

    it('should return undefined when the first input parameter is an array', () => {
        let expectedOutput = undefined;
        let firstInputParameter = [5, 6];
        expect(lookupChar(firstInputParameter, 3)).to.be.equal(expectedOutput, 'Function did not return correct output when the first input argument is an array');
    });

    it('should return undefined when the first input parameter is an object', () => {
        let expectedOutput = undefined;
        let firstInputParameter = { x: 5 };
        expect(lookupChar(firstInputParameter, 3)).to.be.equal(expectedOutput, 'Function did not return correct output when the first input argument is an object');
    });

    it('should return undefined when the first input parameter is function', () => {
        let expectedOutput = undefined;
        let firstInputParameter = () => 5;
        expect(lookupChar(firstInputParameter, 3)).to.be.equal(expectedOutput, 'Function did not return correct output when the first input argument is function');
    });

    it('should return undefined when the first parameter is undefined', () => {
        let expectedOutput = undefined;
        expect(lookupChar(undefined,'abcd')).to.be.equal(expectedOutput, 'Function did not return correct output when the second parameter of the function is not passed in');
    });

    it('should return undefined when the second input parameter is string', () => {
        let expectedOutput = undefined;
        let input = 'as';
        expect(lookupChar('abcd', input)).to.be.equal(expectedOutput, 'Function did not return correct output when the second input argument is string');
    });

    it('should return undefined when the second input parameter is array', () => {
        let expectedOutput = undefined;
        let input = [5, 1, '123'];
        expect(lookupChar('abcd', input)).to.be.equal(expectedOutput, 'Function did not return correct output when the second input argument is array');
    });

    it('should return undefined when the second input parameter is object', () => {
        let expectedOutput = undefined;
        let input = { x: 5 };
        expect(lookupChar('abcd', input)).to.be.equal(expectedOutput, 'Function did not return correct output when the second input argument is array');
    });

    it('should return undefined when the second input parameter is function', () => {
        let expectedOutput = undefined;
        let input = () => 5;
        expect(lookupChar('abcd', input)).to.be.equal(expectedOutput, 'Function did not return correct output when the second input argument is function');
    });

    it('should return undefined when there is not second parameter passed to the function', () => {
        let expectedOutput = undefined;
        expect(lookupChar('abcd')).to.be.equal(expectedOutput, 'Function did not return correct output when the second parameter of the function is not passed in');
    });

    it('should return "Incorrect Index" when the index is bigger than the length of the string', () => {
        let expectedOutput = "Incorrect index";
        expect(lookupChar('a', 99)).to.be.equal(expectedOutput, 'Function did not return correct output when the index is bigger than the length of the string');
    });

    it('should return "Incorrect Index" when the index is negative number', () => {
        let expectedOutput = "Incorrect index";
        expect(lookupChar('a', -99)).to.be.equal(expectedOutput, 'Function did not return correct output when the index is negative number');
    });

    it('should return "Incorrect Index" when the index is equal to the length of the string', () => {
        let expectedOutput = "Incorrect index";
        expect(lookupChar('a', 1)).to.be.equal(expectedOutput, 'Function did not return correct output when the index is bigger than the length of the string');
    });

    it('should return undefined when the index decimal number', () => {
        let expectedOutput = undefined;
        let input = 1.1;
        expect(lookupChar('a', input)).to.be.equal(expectedOutput, 'Function did not return correct output when the index is floating point number');
    });
});