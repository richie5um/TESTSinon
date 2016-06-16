'use strict';

var sinon = require('sinon');

////////////////////////////////////////////////////////////////////////////////////

exports = module.exports = {};

////////////////////////////////////////////////////////////////////////////////////

function myFunction(condition, callback) {
    if (condition) {
        callback();
    }
};

exports.myFunction = myFunction;

////////////////////////////////////////////////////////////////////////////////////

// Spies are useful to track if a function was called, and if so, what was it called with.
var testSpies = function() {
    var user = {
        setName: function(name) { this.name = name },
        getName: function() { return this.name }
    };

    var setNameSpy = sinon.spy(user, 'setName');

    user.setName('Darth Vader');
    user.setName('HanSolo');
    console.log(setNameSpy.callCount);
    console.log(setNameSpy.getCall(0).args);
    console.log(setNameSpy.getCall(1).args);
    console.log(user.getName());
    setNameSpy.restore();
    user.setName('Luke Skywalker');
    console.log(user.getName());
};

////////////////////////////////////////////////////////////////////////////////////

var testSpy2 = function() {
    var missionImpossible = {
        start: function (agent) {
            agent.apply(this);
        }
    };

    // By using a sinon.spy(), it allows us to track how the function is used
    var ethanHunt = sinon.spy();
    missionImpossible.start(ethanHunt);

    console.log(ethanHunt.called);
    console.log(ethanHunt.calledWith);
    console.log(ethanHunt.calledOnce);
    console.log(ethanHunt.callCount);
};

////////////////////////////////////////////////////////////////////////////////////

var testStubs = function() {
    var stub = sinon.stub(),
        opts = { call: function (msg) { console.log(msg); } };

    // We can control how the sinon.stub() will behave based on how it’s called!
    stub.withArgs("Hello").returns("World");
    stub.withArgs("Wuz").returns("Zup?");
    stub.withArgs("Kapow").throws();
    stub.withArgs(opts).yieldsTo("call", ["Howdy"]);

    console.log(stub("Hello")); // "World"
    console.log(stub(opts)); // "Howdy"
};
