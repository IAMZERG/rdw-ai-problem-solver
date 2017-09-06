//this function should not modify the input
//instead,it will need to return a new boardstate
module.exports.tap_lands = function (player_boardstate, manacost) {
  var untapped_land;
  //copy array
  try {
  for(var i=0; i < manacost; i++) {
    untapped_land = player_boardstate.battlefield.findIndex((card) => {
      return card.type == "land" && card["state"] == "untapped";
    });
   if (untapped_land !== -1) {
    //if we find an untapped land, go ahead and continue modifying the temp boardstate
     player_boardstate.battlefield[untapped_land].state = "tapped";
   } else {
    //if we don't have enough lands to cast, exit without modifying boardstate
     throw new Error("not enough mana");
   }
  }
  } catch (e) {
    return e.message;
  }
  return 1;
}
//create boardstate to handle all of this with helper functions?

class Boardstate {
  constructor(theStack = [], activePlayer = ""p1 = {}, p2 = {}) {
    this.p1 = p1;
    this.p2 = p2;
    this.theStack = theStack;
    this.activePlayer = activePlayer;
  }
}

module.exports.Boardstate;
