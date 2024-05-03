const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;

    beforeEach(function() {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        consoleSpy.restore();
    });

    it('should log correct message and be called once with totalAmount 100 and totalShipping 20', function() {
        sendPaymentRequestToApi(100, 20);

        assert(consoleSpy.calledOnceWithExactly('The total is: 120'));
    });

    it('should log correct message and be called once with totalAmount 10 and totalShipping 10', function() {
        sendPaymentRequestToApi(10, 10);

        assert(consoleSpy.calledOnceWithExactly('The total is: 20'));
    });
});

