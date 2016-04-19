/**
 * http://usejsdoc.org/
 */

var nums = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];
nums.sort();

// nums.sort(function(a, b) {
// return a - b;
// });

// nums.sort((a,b)=>{return a-b});
//
// console.log(nums);

// -----------------------------------------

function Person(name, age) {
	this.name = name;
	this.age = age;

	// var that=this;
	// setInterval(function() {
	// that.age++;
	// console.log(that.age);
	// },1000);
	
	// or
	
	setInterval(()=>{
		this.age++;
		console.log(this.age);
	}, 1000)

}

var p = new Person("Person", 0);
