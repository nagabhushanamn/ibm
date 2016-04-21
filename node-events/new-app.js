/**
 * http://usejsdoc.org/
 */
"use strict";

var Door = require('./Door');
var Light = require('./Light');

var door = new Door();
var light = new Light(door);

setTimeout(function() {
	door.open();
}, 5000);

setTimeout(function() {
	door.close();
}, 10000);