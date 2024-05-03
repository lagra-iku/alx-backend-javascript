const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should return the sum of rounded numbers', function() {
            expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
            expect(calculateNumber('SUM', 2.4, 2.6)).to.equal(5);
            expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should return the subtraction of rounded numbers', function() {
            expect(calculateNumber('SUBTRACT', 5.6, 2.4)).to.equal(4);
            expect(calculateNumber('SUBTRACT', 2.6, 2.4)).to.equal(1);
            expect(calculateNumber('SUBTRACT', -2.6, -1.4)).to.equal(-2);
        });
    });

    describe('DIVIDE operation', function() {
        it('should return the division of rounded numbers', function() {
            expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
            expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
            expect(calculateNumber('DIVIDE', 8, 0)).to.equal('Error');
        });
    });
});


