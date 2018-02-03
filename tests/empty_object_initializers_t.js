const emptyObjects = require("../empty_object_initializers");

const createEmptyBoard = emptyObjects.createEmptyBoard;
const createCard = emptyObjects.createCard;
exports.testEmptyBoard = function (test) {
  test.equal(
      JSON.stringify(createEmptyBoard()), 

      JSON.stringify({
        theStack: [],
        activePlayer: "",
        p1: {

          library: [],
          hand: [],
          graveyard: [],
          exile: [],
          battlefield: [],
          life: 20,
          redMana: 0,
          greenMana: 0,
          blueMana: 0,
          blackMana: 0,
          whiteMana: 0,
        },
        p2: {
          library: [],
          hand: [],
          graveyard: [],
          exile: [],
          battlefield: [],
          life: 20,
          redMana: 0,
          greenMana: 0,
          blueMana: 0,
          blackMana: 0,
          whiteMana: 0
        }
      }), "generated empty board matches expectation");
  test.done();
}

exports.testCreateCard = function (test) {
  test.equal(
      JSON.stringify(createCard()),
      JSON.stringify(
        {
          name: "",
          type: "",
          state: "",
          damage: 0,
          equipped: [],
          counters: []
        }), "generated card matches expected");
  test.done();
}
