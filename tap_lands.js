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
  constructor(theStack = [], p1 = {}, p2 = {}, activePlayer = "") {
    this.p1 = p1;
    this.p2 = p2;
    this.theStack = theStack;
    this.activePlayer = activePlayer;
  }
  this.getPlayer(num) {
    if(num === 1) {
      return this.p1;
    } else if (num === 2) {
      return this.p2;
    } else {
      return 0;
    }
  }
  this.find_lands(p_boardstate, mana_type) {
    
    return p_board.battlefield.map((card) => {
      if( card.tapsFor.indexOf(mana_type) !== -1 && card.state === "untapped" ) {
        return true;
      }
      return false;
    });
  }

  this.tap_lands(generic = 0, white = 0, blue = 0, black = 0, red = 0, green = 0, colorless = 0, player = 1) {
    var player_board = this.getPlayer(player);
    var generic_lands = this.find_lands(player_board, "generic");
    var white_lands = this.find_lands(player_board, "white");
    var blue_lands = this.find_lands(player_board, "blue");
    var black_lands = this.find_lands(player_board, "black");
    var red_lands = this.find_lands(player_board, "red");
    var green_lands = this.find_lands(player_board, "green");
    var colorless_lands = this.find_lands(player_board, "colorless");

    var land_arr = [generic_lands, white_lands, blue_lands, black_lands, red_lands, green_lands, colorless_lands];

    land_arr = land_arr.sort((a,b) => {
      if (a.length < b.length) {
        return -1;
      }
      if (a.length > b.length) {
        return 1;
      } else {
        return 0;
      }
    });

    // take sorted array, loop through them tapping the necessary sources
    //return 0 if an issue is encountered (i.e. not enough sources
    //nest all of this inside a try/catch loop.
  }

    


}

module.exports.Boardstate;
