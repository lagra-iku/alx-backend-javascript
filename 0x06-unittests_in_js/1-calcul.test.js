const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should return the sum of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
            assert.strictEqual(calculateNumber('SUM', 2.4, 2.6), 5);
            assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should return the subtraction of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 2.4), 4);
            assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 2.4), 1);
        });
    });

    describe('DIVIDE operation', function() {
        it('should return the division of rounded numbers', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
            assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
            assert.strictEqual(calculateNumber('DIVIDE', 8, 0), 'Error');
        });
    });
});

