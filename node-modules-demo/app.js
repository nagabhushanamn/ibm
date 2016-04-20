/**
 * http://usejsdoc.org/
 */

// var greet = require('./greet');
// greet('es');
// ---------------------------
// var greet1 = require('./new-greet/greet1');
// greet1();
// -----------------------------
// var greet2 = require('./new-greet/greet2');
//
// greet2.hello();
// greet2.bye();
// ---------------------------------
//var greet3 = require('./new-greet/greet3');
//
//greet3.hello();
//greet3.bye();

//-------------------------------------

//var p=require('./new-greet/greet4');
//p.name='Nag';
//p.sayName();
//
//
//var pp=require('./new-greet/greet4');
//pp.sayName();
//

//-------------------------------------

//var Person=require('./new-greet/Person');
//
//var p1=new Person('nag');
//var p2=new Person('ria');
//
//p1.sayName();
//p2.sayName();

//--------------------------------------

//var Person=require('./new-greet/NewPerson');
//
//var p1=new Person('nag');
//var p2=new Person('ria');
//
//p1.sayName();
//p2.sayName();


//-----------------------------------------


//var Employee=require('./new-greet/Employee');
//
//var e1=new Employee('Nag');
//e1.sayName();
//e1.doWork();
//

//-------------------------------------------

//var greet=require('./some-greet');
////greet.greet();
//greet.hello();
//
//

//-------------------------------------------


var util=require('util');

var name='Nag';

var message=util.format("my name is %s",name);
console.log(message);









