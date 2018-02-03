
module.exports.createEmptyBoard = function () {
  return {
    theStack: [],
    activePlayer: "",
    "p1": {

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

    "p2": {
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
  };
}

module.exports.createCard = function () {
  return {
    name: "",
    type: "",
    state: "",
    damage: 0,
    equipped: [],
    counters: []
  };
}
