let createCard = function (
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
};

function Card(card) {
  this.name = card.name;
  this.type = card.type;
  this.state = card.state;
  this.damage = card.damage;
  this.power = card.power;
  this.toughness = card.toughness;
  this.isTapped = card.isTapped;
  this.tapsFor = card.tapsFor;
  this.equipped = [];
  this.counters = [];
};


exports.createCard = createCard;
exports.Card = Card;
