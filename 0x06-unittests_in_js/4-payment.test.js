const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with correct arguments and log the correct message', function() {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        assert(stub.calledOnceWithExactly('SUM', 100, 20));
        assert(consoleSpy.calledOnceWithExactly('The total is: 10'));

        stub.restore();
        consoleSpy.restore();
    });
});

