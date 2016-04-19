/**
 * http://usejsdoc.org/
 */

"use strict";

class Shape{
	toString(){
		return `Shape(${this.id})`;
	}
}

class Rec extends Shape{
	constructor(id,x,y,w,h){
		super(id,x,y);
	}
	toString(){
		return "Rec"+super.toString()
	}
}


var rec=new Rec(12,100,200,200,400);
console.log(rec.toString());


