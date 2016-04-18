/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	
	this.name = name;
	this.age=age;

	var i=0;
	
	var that=this;
	
	setInterval(function() {
		that.age++;
		console.log(that.name + " --> " + that.age);
		console.log(i++);
	}, 1000);

}

var p1=new Person('Ria', 0);