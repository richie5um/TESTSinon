'use strict';

var main = require('./');

var expect = require('expect.js');
var sinon = require('sinon');

describe('myFunction', function () {
    it('should call the callback function', function () {
        var callback = sinon.spy();
        main.myFunction(true, callback);
        expect(callback.calledOnce).to.equal(true);
    })
});