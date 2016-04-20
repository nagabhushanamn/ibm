/**
 * http://usejsdoc.org/
 */
"use strict";

// var hello = function() {
// console.log('hello..');
// }

var greet = function(lang) {
	// console.log('greet:hello-world');
	if (lang === 'en') {
		var enGreet = require('./en-greet');
		enGreet();
	}
	if (lang === 'es') {
		var esGreet = require('./es-greet');
		esGreet();
	}
};
// greet();

module.exports = greet;