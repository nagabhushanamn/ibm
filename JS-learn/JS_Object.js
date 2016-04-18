/**
 * http://usejsdoc.org/
 */

/*
 * falsy values
 * 
 * fals "" null undefined 0
 * 
 * 
 */

//var person = {
//	name : 'Nag'
//};

// if(person.name){
// console.log('name property exist..');
// }
//

//var prop = "name";
//
//if (prop in person) {
//	console.log('name property exist..');
//}


//---------------------------------

//var person = {
//	name : 'Nag',
//	age:32
//};
//
//for(var prop in person){
//	if(person.hasOwnProperty(prop)){
//		console.log(prop+":"+person[prop]);
//	}
//}
//


//-------------------------------------------------


/*
 *  JS , object  can have 2 types of properties
 *  
 *  a. data property
 *  b. accessor property
 * 
 */


//var person={
//		_name:'Nag', // data property
//		set name(newName){  // accessor property
//			if(newName){
//				this._name=newName;
//			}
//		},
//		get name(){
//			return this._name;
//		}
//};
//
//person.name='New Nag';  // write
//console.log(person.name); // read



//-------------------------------------------------

"use strict";



//var person={name:'Nag',age:32};
//Object.defineProperty(person, 'name', {configurable:false,writable:false});
//
////delete person.name;
//person.name='NNNN';
//console.log(person.name);


var person={name:'Nag',age:32};
//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);


//person.newProp='bla bla';
//delete person.name;
//person.name='';


//-----------------------------------------------

















