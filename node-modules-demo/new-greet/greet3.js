/**
 * http://usejsdoc.org/
 */

var greet = function() {
	console.log('hello-world!');
};

var bye = function() {
	console.log('bye..');
};

var o = {
	hello : greet,
	bye : bye
};

module.exports = o;
