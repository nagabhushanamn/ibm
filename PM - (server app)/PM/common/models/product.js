module.exports = function(Product) {

	Product.getName = function(id, cb) {

		Product.findById(id, function(err, product) {
			if (err) {
				cb(err, null);
			}
			cb(null, product.name);
		});

	};

	/*
	 * /products/name?id=123
	 * 
	 * 
	 */

	Product.remoteMethod('getName', {
		http : {
			path : '/name',
			verb : 'GET'
		},
		accepts : {
			arg : 'id',
			type : 'number'
		},
		returns : {
			arg : 'name',
			type : 'string'
		}
	});

};
