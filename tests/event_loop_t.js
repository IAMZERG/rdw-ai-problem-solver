let Event = require('../event_loop').Event;
let Boardstate = require('../boardstate').Boardstate;

exports.eventLoopIsEventEmitterAndEmitsEvents = function (test) {
  let some_value = 0;
  let TurnSequence = new Event();
  TurnSequence.Loop.on("hello", function(val) {
    some_value = val;
  });
  TurnSequence.triggerEvent("hello", 42);

  test.equal(some_value, 42, "life is meaningless if != 42.");
  test.done();
};

exports.listArrayInEventWorks = function (test) {
  let val = 0;
  let TurnSequence = new Event();
  TurnSequence.Loop.on("hi", function(other_val) {
    val = other_val;
  });
  TurnSequence.triggerEvent("hi", 13);

  test.ok(TurnSequence.List);
  test.done();
};

    
exports.eventParams_and_eventName_are_as_expected = function (test) {
  let val = 0;
  let TurnSequence = new Event();
  TurnSequence.List = [];
  TurnSequence.Loop.on("hi", function(other_val) {
    val = other_val;
  });
  TurnSequence.triggerEvent("hi", 13);

  test.equal(TurnSequence.List[0].eventParams, 13, "eventParams is not 13");
  test.equal(TurnSequence.List[0].eventName, "hi", "eventName is not 'hi'");

  test.done();
};




