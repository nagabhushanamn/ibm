/**
 * http://usejsdoc.org/
 */

var greet = function() {
	console.log('hello-world!');
};

var bye = function() {
	console.log('bye..');
};

exports.hello = greet;
exports.bye = bye;