const EventEmitter = require('events');

function Event(gameID) {
  this.gameID = gameID;
  this.List =  [];
  this.Loop = new EventEmitter;
}

Event.prototype.triggerEvent =  function (eName, eValue) {
  this.List.push({eventName: eName, eventParams: eValue});
  this.Loop.emit(eName, eValue);
};
let Ev = new Event();
Ev.Loop.on("foo", function(bar) {
  console.log(bar);
});
Ev.triggerEvent("foo", "bar");

exports.Event = Event;
