
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

exports.createCard = function (
    card = { name: "", 
      type: "", 
      state: "", 
      damage: 0, 
      power: 0,
      toughness: 0,
      isTapped: false,
      tapsFor: [], 
      equipped: [], 
      counters: [] }) {
  return {
    name: card.name,
    type: card.type,
    state: card.state,
    damage: card.damage,
    power: card.power,
    toughness: card.toughness,
    isTapped: card.isTapped,
    tapsFor: card.tapsFor,
    equipped: [],
    counters: []
  };
}
