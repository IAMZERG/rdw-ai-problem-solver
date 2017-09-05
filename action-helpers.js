module.exports.tap_lands = function (player_boardstate, manacost) {
  var untapped_land;
  var temp_player_boardstate = player_boardstate;
  for(var i=0; i < manacost; i++) {
    untapped_land = temp_player_boardstate.battlefield.findIndex((card) => {
      return card.type == "land" && state == "untapped";
    });
   if (untapped_land !== -1) {
    //if we find an untapped land, go ahead and continue modifying the temp boardstate
     temp_player_boardstate.battlefield[untapped_land].state = "tapped";
   } else {
    //if we don't have enough lands to cast, exit without modifying boardstate
     return -1;
   }
  }
  return temp_player_boardstate;
}
