/**
 * http://usejsdoc.org/
 */

"use strict";

class Light{
	
	constructor(door){
		
		door.on('door-open', function(err,e) {
			console.log('LIGHT ON..'+e.no +" - "+e.floor);
		});
		
		door.on('door-close', function(e) {
			console.log('LIGHT OFF..');
		});
		
	}
}

module.exports=Light;