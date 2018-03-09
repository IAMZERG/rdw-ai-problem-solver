//use import syntax for classes
const Boardstate = require("../boardstate").Boardstate;
const emptyBoardstate = require("../boardstate").emptyBoardstate;
const emptyObjects = require("../empty_object_initializers");


//Created createNewBoardstate action in Boardstate.  Here's hoping it works:
exports.testEmptyBoardstateAlignsWithBoardstate = function (test) {
  let empty_boardstate = emptyBoardstate();

  let new_boardstate = new Boardstate(empty_boardstate);
  test.deepEqual(new_boardstate.p1, empty_boardstate.p1, "Boardstate p1 are equal");

  test.done();

};
exports.sorting_lands = {
  setUp: function (callback) {
    this.empty_boardstate = emptyBoardstate();
    this.new_boardstate = new Boardstate(this.empty_boardstate);
    this.new_boardstate.p1.battlefield = 
      [emptyObjects.createCard(card = {name: "Swamp", isTapped: false, tapsFor: ["black", "generic"], type: "land" }),
    emptyObjects.createCard(card = {name: "Swamp", isTapped: false, tapsFor: ["black", "generic"], type: "land" }),
    emptyObjects.createCard(card = {name: "Island", isTapped: false, tapsFor: ["blue", "generic"], type: "land" }),
    emptyObjects.createCard(card = {name: "Mountain", isTapped: false, tapsFor: ["red", "generic"], type: "land" }),
    emptyObjects.createCard(card = {name: "Mountain", isTapped: false, tapsFor: ["red", "generic"], type: "land" }),
    emptyObjects.createCard(card = {name: "Swamp", isTapped: false, tapsFor: ["black", "generic"], type: "land" })
      ];

    callback();
  },
  /*  PASS ON THIS FOR NOW

  sortLandsByQuantityAscending: function (test) {
    console.log(this.new_boardstate.getPlayer);
    let parsedLands = this.new_boardstate.sortLandsByQuantityAscending(this.new_boardstate.p1.battlefield);
    console.log(this.new_boardstate.sortLandsByQuantityAscending);
    test.deepEqual(parsedLands, [], "mana sources are parsed into quantity and types");
    test.done();
  }

  */
  find_lands: function (test) {
    let red_lands = this.new_boardstate.findLands(this.new_boardstate.p1, "red");
    test.equal(red_lands.length, 2);
    test.done();
  }
}
