const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with correct arguments', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        assert(calculateNumberSpy.calledWith('SUM', 100, 20));

        calculateNumberSpy.restore();
    });
});

