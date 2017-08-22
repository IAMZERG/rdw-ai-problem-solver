var ah = require("./action-helpers.js");

const hand_card_actions = {
  "nothing": 0,
  "play": 1
};

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
  p1Library: [],
  p1Hand: [],
  p1Graveyard: [],
  p1Exile: [],
  p1Battlefield: [],
  p1Life: 20,
  p1RedMana: 0,
  p1GreenMana: 0,
  p1BlueMana: 0,
  p1BlackMana: 0,
  p1WhiteMana: 0,

  p2Library: [],
  p2Hand: [],
  p2Graveyard: [],
  p2Exile: [],
  p2Battlefield: [],
  p2Life: 20,
  p1RedMana: 0,
  p1GreenMana: 0,
  p1BlueMana: 0,
  p1BlackMana: 0,
  p1WhiteMana: 0
};

const decklist = [
   { "name": "Canyon Wildcat", "cmc": 2, "power": 2, "toughness": 1, "abilities": ["mountainwalk"], "quantity": 4 },
   { "name": "Fireslinger", "cmc": 2, "power": 1, "toughness": 1, "abilities": [], "quantity": 4 },
   { "name": "Jackal Pup", "cmc": 2, "power": 2, "toughness": 1, "abilities": [], "quantity": 4 },
   "Jackal Pup",
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
