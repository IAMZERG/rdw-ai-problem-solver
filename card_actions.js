const Card = require('./card').Card;
const createCard = require('./card').createCard;


exports.CardActions = function (card) {
  return {
    name: card.name,
    isTapped: card.isTapped,
    allActions: []
  };
};


