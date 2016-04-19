/**
 * http://usejsdoc.org/
 */

// var o = {
// doWork : function() {
// console.log('A work..');
// }
// };


//(function() {
//
//	var o = {
//		doWork : function() {
//			console.log('B work..');
//		}
//	};
//	
//	app.b = o;
//
//})();



define('js/b', [], function() {

	var o = {
		doWork : function() {
			console.log('B work..');
		}
	};

	return o;

});
