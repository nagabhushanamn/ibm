/**
 * http://usejsdoc.org/
 */

// -----------------------
var a = 1;
function f1() {
	var a = 2;
	function f11() {
		var a = 3;
		console.log(this.a);
	}
	f11();
}

f1();

// --------------------------

var o = {
	a : 10,
	f1 : function() {
		console.log(this.a);
	}
};
o.f1();
