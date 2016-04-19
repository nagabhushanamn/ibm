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
//			console.log('C work..');
//		}
//	};
//
//	app.c = o;
//
//})();


define('js/c', [], function() {

	var o = {
		doWork : function() {
			console.log('C work..');
		}
	};

	return o;

});
