let expect = require('chai').expect;
let list = require('../problem-02/problem-02.js').createList();

describe('02-add-delete-in-list tests', () => {

    it('should add one element and print it correct', function () {
        list.add(5);
        expect(list.toString()).to.equal('5', 'Add function did not print correct output after adding one number');
    });

    it('should print strings correctly', function () {
        list.add('Mercedes');
        list.add('BMW');
        expect(list.toString()).to.equal('Mercedes, BMW', 'Function "toString" did not return correct output');
    });

    it('should add one element and print it correct', function () {
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        list.shiftLeft();
        expect(list.toString()).to.equal('5, 6, 7, 4', 'Add function did not print correct output after adding one number');
    });

    it('should add one element and print it correct', function () {
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        list.shiftRight();
        expect(list.toString()).to.equal('7, 4, 5, 6', 'Add function did not print correct output after adding one number');
    });
    it('should print strings correctly', function () {
        list.add('Mercedes');
        list.add('BMW');
        expect(list.toString()).to.equal('Mercedes, BMW', 'Function "toString" did not return correct output');
    });

    it('should add one element and print it correct', function () {
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        list.shiftLeft();
        expect(list.toString()).to.equal('5, 6, 7, 4', 'Add function did not print correct output after adding one number');
    });

    it('should add one element and print it correct', function () {
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        list.shiftRight();
        expect(list.toString()).to.equal('7, 4, 5, 6', 'Add function did not print correct output after adding one number');
    });

});