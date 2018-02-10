//use import syntax for classes
const Boardstate = require("../boardstate").Boardstate;
const emptyBoardstate = require("../boardstate").emptyBoardstate;
const emptyObjects = require("../empty_object_initializers");

exports.testBoardstateClass = function (test) {
  test.done();
};

//Created createNewBoardstate action in Boardstate.  Here's hoping it works:
exports.testEmptyBoardstateAlignsWithBoardstate = function (test) {
  let empty_boardstate = emptyBoardstate();

  let new_boardstate = new Boardstate(empty_boardstate);
  test.deepEqual(new_boardstate.p1, empty_boardstate.p1, "Boardstate p1 are equal");

  test.done();

};
exports.sortLandsByQuantity = function (test) {
  test.done();
};
