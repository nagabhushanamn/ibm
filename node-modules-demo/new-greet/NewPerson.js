/**
 * http://usejsdoc.org/
 */

"use strict";

class Person {
	constructor(name){
		this.name=name
	}
	sayName(){
		console.log('im '+this.name);
	}
}
// ---------------------------------

module.exports = Person;