/**
 * http://usejsdoc.org/
 */

"use strict"

//function f(){
//	var v=100;
//}
//f();

//console.log(v);

var person={name:"Nag"};
Object.defineProperty(person, 'name', {configurable:false});


delete person.name;

