/**
 * http://usejsdoc.org/
 */

var person = {
	name : 'Nag',
	age : 32
};

var str = " Hello " + person.name + " , your age is " + person.age;
console.log(str);


// es-6  ( String interpolation )
var newStr=`Hello ${person.name} , you age is ${person.age + 10}`;
console.log(newStr);