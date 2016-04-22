/**
 * http://usejsdoc.org/
 */

(function() {

	var pmModule = angular.module('pm', [ 'ngRoute', "lbServices" ]);

	pmModule.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : "templates/pm-home.html"
		}).when('/view-all', {
			templateUrl : "templates/pm-grid.html",
			controller : "ViewAllController"
		}).when('/add-new', {
			templateUrl : "templates/pm-product-form.html",
			controller : "SaveController"
		}).when('/edit/:prodId', {
			templateUrl : "templates/pm-product-form.html",
			controller : "ViewOrEditController"
		}).when('/view/:prodId', {
			templateUrl : "templates/pm-product-view.html"
		});
	});

	pmModule.controller('ViewAllController', function($scope, $route, Product) {
		$scope.products = Product.find();
		$scope.remove = function(id) {
			Product.remove({
				id : id
			});
			$route.reload();
		};
	});

	pmModule.controller('SaveController', function($scope, $location, Product) {
		$scope.product = {};
		$scope.save = function() {
			$scope.product.make = "2016-02-08";
			Product.create($scope.product);
			$scope.$parent.message = "New Product saved";
			$scope.product = {};
			$location.path('view-all');
		};
	});

	pmModule.controller('ViewOrEditController', function($scope, Product,
			$location, $routeParams) {

		$scope.product = Product.findById({
			id : $routeParams.prodId
		});

		$scope.save = function() {
			//
		};
	});

})();
