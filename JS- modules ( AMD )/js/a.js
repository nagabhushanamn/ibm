/**
 * http://usejsdoc.org/
 */

// var o = {
// doWork : function() {
// console.log('A work..');
// }
// };
// ------------------------------------
//
// (function() {
//
// app.b.doWork();
//
// var o = {
// doWork : function() {
// console.log('A work..');
// }
// };
//
// app.a = o;
//
// })();
// ------------------------------------
define('js/a', [ 'js/b' ], function(bmod) {

	var count = 0;

	var o = {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};

	return o;

});
