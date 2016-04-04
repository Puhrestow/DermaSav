"use strict"


DermaApp.controller("DermaCart", [
	"$scope",
	"$cookies",
	
	function ($scope, $cookies) {
			
		
		console.log("Entered Controller");
		console.log("Cookies!",$cookies.getObject("cart"));

		// THE CONTENTS OF THE CART ARE BEING RETRIEVED AS AN ARRAY HERE.
		$scope.cartProducts = $cookies.getObject("cart");
		$scope.total = 0;

		$scope.$watch($scope.cartProducts, function (oldValue, newValue) {
			$scope.cartProducts.forEach(function (product) {
				var subTotal = product.quantity * product.salePrice;
				$scope.total = $scope.total + subTotal;
			});
		}, true);
		
		$scope.onRemove = function onRemove (product) {
			$scope.cartProducts = $scope.cartProducts.filter(function (cartProduct) {
				return product.title !== cartProduct.title;
			});

			$cookies.putObject("cart", $scope.cartProducts);
		}
	}

]);