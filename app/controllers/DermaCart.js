"use strict"


DermaApp.controller("DermaCart", [
	"$scope",
	"$cookies",
	"$cookieStore",
	
	function ($scope, $cookies, $cookieStore) {
			
		
		console.log("Entered Controller");
		console.log("Cookies!",$cookies.getObject("cart"));

		// THE CONTENTS OF THE CART ARE BEING RETRIEVED AS AN ARRAY HERE.
		$scope.cartProducts = $cookies.getObject("cart");
		$scope.total = 0;

		$scope.$watch('cartProducts', function (oldValue, newValue) {
			$scope.total = 0;
			
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

		  $scope.RemoveCookie = function (cart) {
                 $cookieStore.remove("cart");
                 $scope.cartProducts = $cookies.getObject('cart');
                 // remove subTotal amount
                 console.log('cookies', $cookies.getObject('cart'));
                 $('checkoutModal').modal('hide');
                 // window.location.href = '#/products';
                console.log("$cookieStore.remove worked!", $cookieStore.remove());
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                window.location.href = '/#/products';
            };
	}

]);