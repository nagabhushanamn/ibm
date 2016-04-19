/**
 * http://usejsdoc.org/
 */

// hotel
var hotel = {
	getFood : function() {

		var promise = new Promise(function(resolve, reject) {

			setTimeout(function() {
				// resolve('BIRYANI...');
				reject("SORRY>>>>>>");
			}, 5000);

		});

		return promise;
	}

};

// customer
var tnr = {
	doTng : function() {

		console.log('teaching JS....');
		console.log('hugry .. ordering food');
		var promise = hotel.getFood();
		promise.then(function(food) {
			console.log('yummy...' + food);
		}, function(reason) {
			console.log('ooops , need to outside..');
		});
		console.log('teaching JS again.. and finished..');

	}
};

tnr.doTng();
