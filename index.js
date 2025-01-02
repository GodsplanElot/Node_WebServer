const logEvent = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

//initialze object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on('log', (msg) => logEvent(msg));

setTimeout(() =>{
    //Emmit Event
    myEmitter.emit('log', 'log event emitted!');
}, 2000);