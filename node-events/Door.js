/**
 * http://usejsdoc.org/
 */

"use strict";

var EventEmitter=require('events');

class Door extends EventEmitter{
	open(){
		console.log('door open..');
		this.emit('door-open',null,{no:5,floor:2});
	}
	close(){
		console.log('door closed');
		this.emit('door-close',null,{no:5,floor:2});
	}
}

module.exports=Door;