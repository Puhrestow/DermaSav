"use strict"


DermaApp.controller("DermaCart", [
	"$scope",
	"$cookies",
	
	function ($scope, $cookies) {
			
		
		console.log("Entered Controller");
		console.log("Cookies!",$cookies.getObject("cart"));

		// THE CONTENTS OF THE CART ARE BEING RETRIEVED AS AN ARRAY HERE.
		$scope.cartProducts = $cookies.getObject("cart");
	}

]);