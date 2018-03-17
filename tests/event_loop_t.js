let Event = require('../event_loop').Event;
let Boardstate = require('../boardstate').Boardstate;
let emptyBoardstate = require('../boardstate').emptyBoardstate;

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


exports.eventParams_can_pass_executable_functions = function (test) {
  let TurnSequence = new Event();
  TurnSequence.Loop.on("cast.p1", function (callback) {
    callback();
  });
  let boardstate = new Boardstate({p1: "foo."});
  TurnSequence.Loop.on("startTurn", function(boardstate) {
    TurnSequence.triggerEvent("cast.p1", function() {

      boardstate.p1 = "boo!!!";
    });
  });
  TurnSequence.triggerEvent("startTurn", boardstate);

  test.equal(boardstate.p1, "boo!!!", "foo. didn't get switched to 'boo!!!'");
  test.done();
};

exports.addEvents_adds_events_to_EE = function (test) {
  let TurnSequence = new Event();
  let baz = "";
  TurnSequence.addEvents([
      ["foo", 
      function(bar) {
        baz = bar;
      }],
      ["fuzz",
      function(bar) {
        baz = bar + "buzz";
      }]
  ]);
  TurnSequence.triggerEvent("foo", "bar");
  test.equal(baz, "bar", "baz not set to 'bar'");
  TurnSequence.triggerEvent("fuzz", "test");
  test.equal(baz, "testbuzz", "'baz' event param dues not have buzz added to it.");
  test.done();
};

