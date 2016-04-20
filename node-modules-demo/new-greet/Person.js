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

module.exports = Person;