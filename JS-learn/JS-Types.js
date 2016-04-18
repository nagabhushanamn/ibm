/**
 * http://usejsdoc.org/
 */

/*
 * 
 *  data-types
 *  -----------
 *  
 *  1. primitives
 *  2. reference
 *  
 *  
 *  primitives
 *  ----------
 *  
 *  undefined
 *  null
 *  string
 *  number 
 *  boolean
 *  
 * 
 */


// a. undefined

//var v;
//console.log(v);


//----------------------------------------

// b. null

//var person=null;
//console.log(typeof person);  // ( confuse )

//----------------------------------------

// c. string

//var name='nag';
//console.log(typeof name);

//------------------------------------------

// d. number

//var count=10;
//var cost=12.12;
//console.log(typeof count);
//console.log(typeof cost);

//-----------------------------------------


//e. boolean
//
//var boo=true;
//boo=false

//-----------------------------------------


/*
 *  JS - object
 *  -----------
 *  
 *  collection of name:value pairs.
 * 
 * 
 *  person  ==>
 *  
 *  name :' nag'
 *  age  : 32
 *  
 *  how to create JS object ?
 *  
 *  syntax
 *  ------
 *  
 *   new ConstructorFunction();
 *        
 * 
 */


//var person=new Object();
//person.name='Nag';
//person.age=32;
//person.doWork=function(){
//	console.log('teaching JS');
//};
//
//console.log(person.name);
//delete person.age;
//console.log(person.age);
//person.doWork();

//-----------------------------------------

// How to define/access JS-obj properties ?

/*
 *  2 ways
 * 
 *  -> '.' notation
 *  -> '[]' notation
 * 
 */


//var person=new Object();
//person.name='Nag';
//person['full-name']='Nag N';
//
//console.log(person.name);
//console.log(person['name']);
//console.log(person['full-name']);
//
//var prop='age';
//console.log(person[prop]);


//-----------------------------------------


/*
 *  some built-in types
 *  -------------------
 *  
 *  Object
 *  Array
 *  RegExp
 *  Function
 *  
 * 
 */

// a. Object

//var emp=new Object();
//emp.id=101;
//emp.name='Nag';
//emp.doWork=function(){
//	console.log('emp working..');
//};

// or Literal-style

//var newEmp={
//		id:101,
//		name:'Nag',
//		doWork:function(){
//			console.log('emp working..');
//		}
//};
//
//// ES-6
//
//var newEmp2={
//		id:101,
//		name:'Nag',
//		doWork(){
//			console.log('emp working..');
//		}
//};
//
//
//console.log(newEmp.name);
//newEmp2.doWork();




//-----------------------------------------

// b. Array

var arr=new Array();
arr[0]="red";
arr.push("green");
arr.push("blue");

// or literal-style

var newArray=["red","green","blue"];

//-----------------------------------------

// c. RegExp

var re=new RegExp("\\d{10}");
console.log(re.test("1234567890"));

// or

var newRe=/\d{10}/;


//-----------------------------------------


var add=new Function("n1","n2","var result=n1+n2;return result;");
console.log(add(12,13));

// or literal style

function newAdd(n1,n2){
	var result=n1+n2;
	return result;
}


console.log(newAdd(12,13));










