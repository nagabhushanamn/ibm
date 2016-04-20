/**
 * http://usejsdoc.org/
 */

"use strict";

var NewPerson=require('./NewPerson');

class Employee extends NewPerson{
	constructor(name){
		super(name);
	}
	doWork(){
		console.log(this.name +" working..");
	}
}
// ---------------------------------

module.exports = Employee;