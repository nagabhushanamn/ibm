/**
 * http://usejsdoc.org/
 */

function tng() {

	var tnrName = 'Nag';

	setTimeout(function() {
		
		try {
			console.log('after timeout..');
			console.log(tnrName);
			throw new Error("oops");
		} catch (e) {
			console.log('i caught error - ' + e.message);
		}

	}, 5000);

}

tng();