const ah = require("./action-helpers.js");
const tap_lands = require('./tap_lands').tap_lands;
const https = require('https');

/*******************************

PLAN:
the turns: handle start of turns as one would normally: untap, upkeep draw
--TODO(eventually?): add observers for those hooks that can trigger off those.


--phenotype  will be an array of numbers that each map to a possible action.

--there will be two genotypes for this example.
 -one for cards in hand
 -a second for cards on the battlefield.
????? maybe?

*********************************/

const hand_card_actions = [
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

const boardstate = function () {
  return {
    theStack: [],
    activePlayer: "",
    "p1": {

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

    "p2": {
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

const card = {
  name: "",
  type: "",
  state: "",
  damage: 0
};

//need a pub/sub method with a call stack to manage actions?



const decklist = function () {
  return [
  { "name": "canyon wildcat", "cmc": 2, "power": 2, "toughness": 1, "abilities": ["mountainwalk"], "quantity": 4, "type": "creature" },//0
  { "name": "fireslinger", "cmc": 2, "power": 1, "toughness": 1, "abilities": [], "quantity": 4, "type": "creature" },//1
  { "name": "jackal pup", "cmc": 2, "power": 2, "toughness": 1, "abilities": [], "quantity": 4, "type": "creature" },//2
  { "name": "mogg conscripts", "cmc": 1, "power": 2, "toughness": 2, "abilities": [], "quantity": 4, "type": "creature" }, //3
  { "name": "mogg fanatic", "cmc": 1, "power": 1, "toughness": 1, "abilities": [], "quantity": 4, "type": "creature" }, //4
  { "name": "rathi dragon", "cmc": 4, "power": 5, "toughness": 5, "abilities": ["flying"], "quantity": 2, "type": "creature" }, //5
  { "name": "mogg raider", "cmc": 1, "power": 1, "toughness": 1, "abilities": [], "quantity": 4, "type": "creature" }, //6
  { "name": "Kindle", "cmc": 4, "power": 0, "toughness": 0, "abilities": [], "quantity": 4, "type": "instant" }, //7
  { "name": "Cursed Scroll", "cmc": 1, "power": 0, "toughness": 0, "abilities": [], "quantity": 4, "type": "artifact" }, //8
  { "name": "Scalding Tongs", "cmc": 2, "power": 0, "toughness": 0, "abilities": [], "quantity": 2, "type": "artifact" }, //9
  { "name": "Giant Strength", "cmc": 2, "power": 0, "toughness": 0, "abilities": [], "quantity": 4, "type": "aura-creature" }, //10
  { "name": "Mountain", "cmc": 0, "power": 0, "toughness": 0, "abilities": [], "quantity": 16, "type": "land" }, //11
  { "name": "Wasteland", "cmc": 0, "power": 0, "toughness": 0, "abilities": [], "quantity": 4, "type": "land" }, //12
  ];
}

const canyon_wildcat = [
  function(boardstate) {
    //cast Canyon wildcat
  },
  function (boardstate) {},
  function (boardstate) {},
  function (boardstate) {},
  function (boardstate) {}
];

//this needs some work....






const card_possible_functions = {
  "Canyon Wildcat": [
    //find the card in the player's hand
    //move card to battlefield
    function (boardstate, player) {
      var temp = boardstate;
      var success = tap_lands(temp[player], decklist[0]["cmc"]);
      temp[player].battlefield.push( temp[player].hand.pop("Canyon Wildcat"));
      return temp;

    }
  ]
};
    

var test = boardstate();
var cw = decklist()[0];
var mtn1 = decklist()[11];
var mtn2 = decklist()[11];

test.p2.hand.push(cw);
mtn1["state"] = "untapped";
mtn2["state"] = "untapped";
test.p2.battlefield.push(mtn1);
test.p2.battlefield.push(mtn2);
var test_card_name = "Canyon Wildcat";

console.log(card_possible_functions[test_card_name][0](test, "p2"));
console.log(tap_lands(boardstate["p2"], 1));
console.log(test["p2"].battlefield[0]);
console.log(test["p2"].battlefield[1]);


function turn_loop (boardstate, phenotype1, phenotype2) {
  //upkeep, untap, draw

  //first main phase


  //combat

  //second main

  //end of turn

  //use event loop that listens for actions, and fires all events as they are reached?
  //what events to support?

}

