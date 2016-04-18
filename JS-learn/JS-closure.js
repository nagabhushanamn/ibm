/**
 * http://usejsdoc.org/
 */

function tng() {

	console.log('tng >>>>>>>>');

	var i = 0;
	var notes = 'JS Notes';

	function learn() {
		console.log("learning with " + notes);
	}

	return learn;

}

var learnFunc = tng();

learnFunc();
learnFunc();