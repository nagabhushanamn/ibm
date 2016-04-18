/**
 * http://usejsdoc.org/
 */

/*
 * 
 * 2 ways , to create function-objs
 * 
 * a. function declaration b. function expression
 * 
 * 
 */

// function dec

//console.log(add(12, 13));
//
//function add(n1, n2) {
//	return n1 + n2;
//}

// console.log(add(12,13));

//-----------------------------------

//console.log(add(12,13));
//
//var add=function(n1,n2){
//	return n1+n2;
//};

//console.log(add(12,13));

//-------------------------------------


// JS , functions are objects

//-------------------------------------

// functions as values

//function sayHello(){
//	console.log('Hello');
//}
//
//var sayHi=sayHello;
//sayHi();
//
//var greet=sayHello;
//greet();
//

//-------------------------------------

// function as arguments

//function greet(func){
//	func();
//}
//
//greet(function(){console.log('hello');});
//greet(function(){console.log('hi');});
//greet(function(){console.log('ola');});


//var arr=[1,3,4,6,8,2,5,7,9,10];
//arr.sort();
//arr.sort(function(a,b){
//	return a-b;
//});
//console.log(arr);


//---------------------------------------------------

//functions as return values

//function tng(){
//	console.log('tng...');
//	return function(){
//		console.log('learn..');
//	}
//}
//
//var learnFunc=tng();
//learnFunc();
//learnFunc();



//---------------------------------------------------

//
//function abc(){
//	console.log('..');
//}
//
//console.log(abc.name);
//
//

//var abc=function(){clonsole.log('...');}
//console.log(abc.name);

//---------------------------------------------------



//function reflect(inp1,inp2){
//	console.dir(arguments);
//	return arguments['3'];
//}
//
//console.log(reflect(12,13,14,15));
//
//reflect();


//e.g

//function sum(){
//	var i=0,
//	    result=0,
//	    len=arguments.length;
//	while(i<len){
//		result+=arguments[i];
//		i++;
//	}
//	return result;
//}
//
//console.log(sum(1,2,3,4,5,6,7,8,9,10));

//--------------------------------------------
//
//function greet(message) {
//	// if(message===undefined){
//	// message="Hello";
//	// }
//	// message=message||"HELLO";
//	console.log(message);
//}
//
//greet();

//---------------------------------------------




// 'this' keyword

// why we need 'this' keyword ?

//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};
////person.sayName();
//
//
////------------------------------------
//
//var p = person;
//
//person = {
//	name : 'Ria',
//	sayName : function() {
//		console.log('im ' + this.name);
//	}
//};
//
//p.sayName();
//person.sayName();

//-------------------------------------


//var p={name:'Nag'};
//var q=p;
//p={name:'Ria'};
//
//console.log(p);
//console.log(q);
//


//-------------------------------------

global.name='GLOBAL';

function sayNameForAll(){
	console.log('im '+this.name);
}

//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};

var p1={name:'Nag',sayName:sayNameForAll};
var p2={name:'Ria',sayName:sayNameForAll};

sayNameForAll(); // im GLOBAL   :- function invocation  ( this --> GLOBAL )
p1.sayName();    // im Nag      :- method invocation    ( this --> invoker-obj )
p2.sayName();    // im Ria





































