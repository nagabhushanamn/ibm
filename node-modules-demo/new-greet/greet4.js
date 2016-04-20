/**
 * http://usejsdoc.org/
 */

function Person(name) {
	this.name = name;
}
Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};

// ---------------------------------

var person = new Person();

module.exports = person;