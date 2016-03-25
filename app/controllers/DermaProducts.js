"use strict" //NECESSARY TO USE ES6


DermaApp.controller("DermaProducts", [
	"$scope",
	function ($scope) {
		$scope.onClick = function (product) {
			console.log("onClick argument: ", product);
			$scope.modalProduct = product;
			//DermaApp.productModal.show({$scope: product})
		}


		$scope.modalProduct = null;


		$scope.products = [
			{
				imgSrc: "http://placehold.it/300x300",
				title: "Bee Venom Injections",
				price: "$45",
				description: "It's crap form a  bee that freezes your old ass face"
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Dysport"
			}
		];
	}
])