const Card = require('../card').Card;
const createCard = require('../card').createCard;

exports.emptyCard = function (test) {
  let new_card = new Card(createCard());
  let card_with_argument = new Card(createCard({ 
    name: "", 
    type: "", 
    state: "", 
    damage: 0, 
    power: 0,
    toughness: 0,
    isTapped: false,
    tapsFor: [], 
    equipped: [], 
    counters: [] }));

  test.deepEqual(new_card, card_with_argument, "createCard() with no arguments failed to create an empty card object");

  test.done();
};


exports.createActionsHasNameAttribute = function (test) {
  let new_card = createCard({name: "Bob"});
  test.deepEqual(new_card.actions.name, "Bob", "card action does not have name attribute matching card name");
  test.done();
};
