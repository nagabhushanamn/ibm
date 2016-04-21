/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

// Blocking IO

// var content = fs.readFileSync('data.txt', 'utf8'); // .....
// console.log(content);
//
// console.log('other task...');

// ---------------------------------

// Non-Blocking IO

fs.readFile('data.txt', function(err, data) {
	console.log(data);
});
console.log('other task...');

