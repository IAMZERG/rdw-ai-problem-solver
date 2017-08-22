const ah = require("./action-helpers.js");
const https = require('https');

/*******************************

PLAN:
the turns: handle start of turns as one would normally: untap, upkeep draw
--TODO(eventually?): add observers for those hooks that can trigger off those.


--phenotype  will be an array of numbers that each map to a possible action.

--there will be two genotypes for this example.
 -one for cards in hand
 -a second for cards on the battlefield.


*********************************/

const hand_card_actions = [
  "nothing",
  "play",
  "tap",
  "attack",
  "destroy"

];

const active_card_actions = [
  "nothing", //0
  "play", //1
  "tap", //2
  "attack", //3
  "graveyard", //4
  "hand", //5
  "exile" //6
];

const boardstate = {
  theStack: [],
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
  }

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
};

const decklist = [
   { "name": "Canyon Wildcat", "cmc": 2, "power": 2, "toughness": 1, "abilities": ["mountainwalk"], "quantity": 4 },
   { "name": "Fireslinger", "cmc": 2, "power": 1, "toughness": 1, "abilities": [], "quantity": 4 },
   { "name": "Jackal Pup", "cmc": 2, "power": 2, "toughness": 1, "abilities": [], "quantity": 4 },
   {"Jackal Pup",
   "Mogg Conscripts", //
   "Mogg Fanatic", //4
   "Mogg Raider", //4
   "Rathi Drago", //2
   "Kindle",  //4
   "Cursed Scroll", //4
   "Scalding Tongs", //2
   "Giant Strength", //4
   "Mountain", //16
   "Wasteland" //4
];

const canyon_wildcat = [
  function(boardstate) {
    //cast Canyon wildcat
    return boardstate.map;
  },
  function (boardstate) {},
  function (boardstate) {},
  function (boardstate) {},
  function (boardstate) {}
];





function turn_loop(boardstate) {


}
