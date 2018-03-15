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

exports.Event = Event;
