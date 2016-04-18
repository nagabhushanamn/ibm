/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
	// this.sayName = function() {
	// console.log('im ' + this.name);
	// };
}

// console.dir(Person.prototype);
Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};
Person.prototype.sayAge = function() {
	console.log('im ' + this.age);
};

var p1 = new Person("Nag", 32);
var p2 = new Person("Ria", 1);



//var p11=Object.create(p1);
//p11.age=10;
//console.log(p11.name);
//console.log(p11.age);
//
//console.log(p1.age);


// es-6
//
//var p11={
//		__proto__:p1,
//		address:'BLR'
//};






