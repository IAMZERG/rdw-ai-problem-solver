const CardActions = require('../card_actions').CardActions;

exports.cardActionsExist = function (test) {
  let cardAction = CardActions({name: "Jackal Pup"});
  test.ok(cardAction);
  test.done();
};

