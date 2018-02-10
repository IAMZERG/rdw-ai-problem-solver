//create boardstate to handle all of this with helper functions?


exports.emptyBoardstate = function () {
  return {
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
  };
}
function Boardstate(boardstate) {
    this.p1 = boardstate.p1;
    this.p2 = boardstate.p2;
    this.theStack = boardstate.theStack;
    this.activePlayer = boardstate.activePlayer;
}
Boardstate.getPlayer = function(num) {
    if(num === 1) {
      return this.p1;
    } else if (num === 2) {
      return this.p2;
    } else {
      return 0;
    }
};

Boardstate.newBoardstate = function() {
  return {
    theStack: [],
    activePlaye: "",
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
  };
};
Boardstate.find_lands = function(p_boardstate, mana_type) {

    return p_board.battlefield.map((card) => {
      if( card.tapsFor.indexOf(mana_type) !== -1 && card.state === "untapped" ) {
        return true;
      }
    });
};

Boardstate.sortLandsByQuantiyAscending = function(land_arr) {
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
    return land_arr
};
  //input types of lands to be tapped
Boardstate.tapLands = function (generic = 0, white = 0, blue = 0, black = 0, red = 0, green = 0, colorless = 0, player = 1) {
    var player_board = this.getPlayer(player);
    var generic_lands = this.find_lands(player_board, "generic");
    var white_lands = this.find_lands(player_board, "white");
    var blue_lands = this.find_lands(player_board, "blue");
    var black_lands = this.find_lands(player_board, "black");
    var red_lands = this.find_lands(player_board, "red");
    var green_lands = this.find_lands(player_board, "green");
    var colorless_lands = this.find_lands(player_board, "colorless");

    var land_arr = [generic_lands, white_lands, blue_lands, black_lands, red_lands, green_lands, colorless_lands];

Boardstate.sortLandsByQuantityAscending = function (land_aarr) {
    var mana_needed = [generic, white, blue, black, red, green, colorless];

    try {
      for(var i=0; i < land_arr.length; i++ ) {
        //loop through each set of colors starting w/ scarcest


        for(var j=0; j < land_arr[i]; j++) {
          //tap a land for the things needed; throw error if needed.
          if (mana_needed > 0) {
            land_arr[i][j]["state"] = "tapped";
            mana_needed[i]--;
          } 
        }
      }
      //loop through mana_needed and throw error if mana still needed
      for(var z=0; z < mana_needed.length; z++) {
        if(mana_needed[z] > 0) {
          throw new Error("Not enough mana");
        }
      }

      // take sorted array, loop through them tapping the necessary sources
      //return 0 if an issue is encountered (i.e. not enough sources
      //nest all of this inside a try/catch loop.
    } catch(err) {
      console.log("Error: " + err.name + " "+ err.message);
    }
  }
};
exports.Boardstate = Boardstate;
