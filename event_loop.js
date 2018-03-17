const EventEmitter = require('events');

function Event(gameID) {
  this.gameID = gameID;
  this.List =  [];
  this.Loop = new EventEmitter;
}
//syntax for one event: Ev.addEvents([["foo", function(bar) {console.log("baz");}]]);
Event.prototype.addEvents = function(eventArray) {
  let ee = this;
  eventArray.forEach(function(e) {
    ee.Loop.on(e[0], e[1]);
  });
};

Event.prototype.triggerEvent =  function (eName, eValue) {
  this.List.push({eventName: eName, eventParams: eValue});
  this.Loop.emit(eName, eValue);
};

exports.Event = Event;
