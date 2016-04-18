/**
 * http://usejsdoc.org/
 */

// module - counter
//function init() {
//	var count = 0; // private
//	// public
//	return {
//		doCount : function() {
//			count++;
//		},
//		getCount : function() {
//			return count;
//		}
//	};
//}
//var counter = init();

//----------------------------

// IIFE ( Immediatly Invokable Func Exp / sefl executable func)

var counter=(function(){
	var count = 0; // private
	// public
	return {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};
})();

// ----------------------------

counter.doCount();
counter.doCount();

// count=0; // un-expected init..

console.log(counter.getCount());