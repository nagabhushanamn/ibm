/**
 * http://usejsdoc.org/
 */

function f() {
	"use strict";

	{
		let a = 12;  // from ES-6 , block-scope
	}

	console.log(a);

}

f();