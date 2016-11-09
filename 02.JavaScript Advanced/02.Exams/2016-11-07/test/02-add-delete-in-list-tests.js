let expect = require('chai').expect;
let list = require('../problem-02/02-add-delete-in-list').list;

describe('02-add-delete-in-list tests', () => {

    it('should have "add, delete and toString", functions', function () {
        expect(typeof(list.add)).to.equal('function', 'List object did not have "add" function');
        expect(typeof(list.delete)).to.equal('function', 'List object did not have "delete" function');
        expect(typeof(list.toString)).to.equal('function', 'List object did not have "toString" function');
    });

    it('should return empty string when calling "toString" function on empty list', function () {
        expect(list.toString()).to.equal('', 'List is not initialized');
    });

    describe('"Add" function', () => {
        it('should add one element and print it correct', function () {
            list.add(5);
            expect(list.toString()).to.equal('5', 'Add function did not print correct output after adding one number');
        });


        it('should return correct string after using "toString" on single number', function () {
            list.add(5);
            expect(list.toString()).to.equal('5', '"Add" function did not add correct number');
        });


        it('should print strings correctly', function () {
            list.add('Mercedes');
            list.add('BMW');
            expect(list.toString()).to.equal('Mercedes, BMW', 'Function "toString" did not return correct output');
        });

        it('should be able to add objects to the list', function () {
            list.add({ x: 5, y: 6 });
            list.add(true);
            expect(list.toString()).to.equal('[object Object], true', 'Function "add" did not return correct output');
        });
    });


    describe('"Delete" function', function () {

        it('should return undefined if the input index is a string', function () {
            list.add(5);
            list.add(6);
            expect(list.delete('Mercedes')).to.equal(undefined, 'Function "delete" did not return undefined when input index is a string');
        });

        it('should return undefined if the input index is less than zero', function () {
            list.add(5);
            list.add(10);
            expect(list.delete(-1)).to.equal(undefined, 'Did not return undefined with invalid index');
        });

        it('should return undefined if the list is empty', function () {
            expect(list.delete(0)).to.equal(undefined, 'Did not return undefined with invalid index');
        });

        it('should return undefined if the input index is less than zero', function () {
            list.add(5);
            list.add(10);
            expect(list.delete(2)).to.equal(undefined, 'Did not return undefined with invalid index');
        });

        it('should return "5" if the list contains only number "5"', function () {
            list.add(5);
            expect(list.delete(0)).to.equal(5, 'Did not return correct value when the inpust index is correct');
        });

        it('should return correct value if the list is containing more than 2 items', function () {
            list.add(5);
            list.add(7);
            list.add(6);
            list.add(7);
            list.delete(2);
            expect(list.toString()).to.equal('5, 7, 7', 'Did not return correct value when the inpust index is correct');
        });

        it('should return correct value if the list is containing more than 2 items', function () {
            list.add(5);
            list.add(7);
            list.add(7);
            list.delete(0);
            expect(list.toString()).to.equal('7, 7', 'Did not return correct value when the inpust index is correct');
        });

        it('should return correct value if the list is containing more than 2 items', function () {
            list.add(5);
            list.add(7);
            list.add(7);
            list.delete(2);
            expect(list.toString()).to.equal('5, 7', 'Did not return correct value when the inpust index is correct');
        });
    });
});