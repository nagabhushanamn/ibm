/**
 * http://usejsdoc.org/
 */

var trainer = {
	name : 'Nag',
	doTng : function() {
		
		console.log(this.name + " teaching JS"); // Nag ...

		var self = this;

		function learn() {
			console.log(this.name + ' learning JS from ' + self.name); // ....
																		// ??
		}
		
		learn();  

		var emp = {
			name : 'IBM-emp'
		};

		learn.call(emp);

	}
};

trainer.doTng();
