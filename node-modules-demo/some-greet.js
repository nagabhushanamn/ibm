/**
 * http://usejsdoc.org/
 */

var i = 10;
var greet = function() {
	console.log('hello-world');
};

/*
 * exports require module __filename __dirname
 * 
 * 
 * exports vs module
 * 
 * exports === module.exports
 * 
 */

// exports.hello=greet; // avoid this
module.exports = greet;

console.log(exports);
console.log(module.exports);
