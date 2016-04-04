"use strict" //NECESSARY TO USE ES6


DermaApp.controller("DermaProducts", [
	"$scope",
	"$cookies",
	
	function ($scope, $cookies) {
		console.log("Entered Controller");
		// GETOBJECT RETURNS AN ARRAY
		console.log("Cookies!",$cookies.getObject("cart"));

		Array.isArray($cookies.getObject("cart"));
		if (!Array.isArray($cookies.getObject("cart"))) {
			$cookies.putObject("cart", []);
		}

		$scope.onClick = function (product) {
			console.log("onClick argument: ", product);
			$scope.modalProduct = product;
			//DermaApp.productModal.show({$scope: product})
		}
		
		$scope.cartProducts = null;

		$scope.addToCart = function (productUserClickedOn) {

			// "PRODUCTUSERCLICKEDON" IS BEING PUSHED INTO THE "CART" ARRAY, WHICH IS THEN STORED INTO A COOKIE.
			$scope.cartProducts = $cookies.getObject("cart");

			if ($scope.cartProducts.length === 0) {
				$scope.cartProducts.push ({
					title: productUserClickedOn.title, 
					price: productUserClickedOn.price,
					salePrice: productUserClickedOn.salePrice,
					quantity: 1
				});	
			
			} else {
				var found = false;
				var index = null;

				$scope.cartProducts.forEach(function (p, i) {
					if (productUserClickedOn.title === $scope.cartProducts[i].title) {
						found = true;
						index = i;
					}
				});

				if (found) {
					var aProductInCart = $scope.cartProducts[index];
					aProductInCart.quantity++;
					
				} else {
				
					$scope.cartProducts.push ({
						title: productUserClickedOn.title, 
						price: productUserClickedOn.price,
						salePrice: productUserClickedOn.salePrice,
						quantity: 1
					});	
							
				}
						
			}
		
			
			// THIS ALLOWS THE "ADD TO CART" SELECTION TO BE PLACED INTO A COOKIE.
			$cookies.putObject("cart", $scope.cartProducts);
			console.log("addToCart argument: ", productUserClickedOn);
			console.log("cartProducts argument: ", $scope.cartProducts);
			//DermaApp.productModal.show({$scope: product})
		}	




		$scope.modalProduct = null;



		$scope.products = [
			{
				imgSrc: "http://placehold.it/300x300",
				title: "Botox",
				originalPrice: "$250",
				salePrice: 180.00,	
				description: "One of the most requested procedures done in our practice is now on sale! Botox can treat muscle stiffness, muscle spasms, excessive sweating, overactive bladder, or loss of bladder control. It also, more famously, prevents chronic migraine headaches and improves the appearance of wrinkles on the face. We are offering a 20-unit package for discount, which should cover most facial procedures."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Dysport",
				originalPrice: "$200",
				salePrice: 150.00,	
				description: "Dysport, like Botox, is a form of botulinum toxin injected into the skin to temporarily relax the muscles that cause 'frown lines'. Unlike Botox, it is more commonly used in broader areas such as the forehead and around the mouth due to its natural propensity to spread over a wider area per injection. We are offering a 20-unit package for discount, which should cover most facial procedures." 
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "SkinMedica Chemical Peel",
				originalPrice: "$100",
				salePrice: 80.00,	
				description: "We are offering the 'Illuminize' variant of SkinMedica's peel-based selections for discount, which will treat mild skin imperfections. Chemical peels are used to brighten skin, giving it an even, healthy glow. You can expect to see excellent results after a single treatment, so give it a try!"
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Microdermabrasion",
				originalPrice: "$90",
				salePrice: 60.00,	
				description: "Microdermabrasion creates gentle abrasion and exfoliation which can smooth wrinkles and fine lines, reduce the appearance of scars, and brighten skin tone. The fine crystal blast from microdermabrasion allows for rapid recovery, with no downtime. You're likely to find the treatment soothing, and not as painful as you would potentially experience with a laser skin resurfacing treatment. "
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Laser Hair Removal",
				originalPrice: "$100",
				salePrice: 80.00,	
				description: "Laser hair removal is a treatment that uses lasers to target the roots of hair underneath the skin’s surface. Though it's not guaranteed to be permanent, a majority of clients do experience permanent hair removal after a series of treatments. We use YAG laser technology, which is perfect for ALL SKIN TYPES."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Bellafill",
				originalPrice: "$1000",
				salePrice: 850.00,	
				description: "Bellafill is an FDA-approved, collagen-based filler used to reduce the appearance of smile lines and pitted acne scars on the cheeks; however, it can be used on other areas of the face as a longer-term alternative to Botox/Dysport. The injection immediately adds volume below the surface of the skin for smooth results that can last well over a year (opposed to 3-6 months efficacy for Botox/Dysport). This offer includes enough product for a single session of rejuvenation."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Spider Vein Removal",
				originalPrice: "$400",
				salePrice: 300.00,	
				description: "You don’t have to live with the embarrassment of spider veins. These common, unsightly veins can be caused by a multitude of factors, including pregnancy, heredity, or hormonal changes. Our laser therapy can effectively fade even the darkest spider veins, achieving the smooth, beautiful legs you’ve always wanted. In most cases, optimal results can be achieved between two to three treatments spaced within a 4-6 week period. This offer includes two treatments."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Restylane/Perlane",
				originalPrice: "$600",
				salePrice: 500.00,	
				description: "Would you like to smooth out some of those lines around your eyes or mouth? The best way to alleviate these issues are with products like Restylane or Perlane, which are clear gel injections of non-animal Hyaluronic Acid formulations. Hyaluronic Acid is already an essential part of your skin’s connective tissue, and is responsible for keeping it nourished and moisturized. Replenishing this biocompatible formulation Restylane/Perlane provides ensures that side effects are minimized. Results are immediate, lasting between 12-18 months."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Clarisonic Brush Head Twin-Pack",
				originalPrice: "$45",
				salePrice: 30.00,	
				description: "Engineered to work perfectly with your Clarisonic products, we are offering a two-pack set of genuine facial-cleansing brushes at a discount. Observe this offer while supplies last, as they are known to be claimed quickly!"
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Clarisonic Mia 2",
				originalPrice: "$150",
				salePrice: 120.00,	
				description: "The essential first step in your skin care regimen, Clarisonic goes beyond washcloth-cleansing by using sonic technology to gently, yet deeply cleanse pores without abrasion or harsh chemicals. Clarisonic removes six times more makeup than manual cleansing, cleansing so well that products absorb better - making skin more receptive to skincare ingredients. With regular daily use, the Clarisonic reduces dry skin patches, oily areas and blemishes and immediately leaves skin feeling and looking smoother. The Mia 2 is enhanced with 2 speeds, has a 2 year warranty and includes Clarisonic's patented 'T-Timer', which allows you to customize your facial-cleansing patterns. A MUST-HAVE for any fan of dermatology."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Water-Assisted Liposuction",
				originalPrice: ".01",
				salePrice: .01,	
				description: "Liposuction is a procedure best used for those who have unwanted fat that no amount of diet and exercise have been able to remove. All problem areas – from the neck to the knees – can be addressed with Water-Assisted Liposuction. Each area can be treated within 60 to 90 minutes by a water jet system that forcefully (but gently) completes a permanent flushing out fat cells and tightening of the skin for a more defined look. This process does not require anesthesia, and patients can return to normal activity within a day's time. We are offering 20% Off your total with this offer!"
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "One Hour Aromatherapy Massage",
				originalPrice: "$90",
				salePrice: 75.00,	
				description: "Our Aromatherapy massage includes an intense fusion of techniques that will increase blood and lymphatic circulation, ridding your body of toxins and melting away your stress. The massage also includes your scalp and face. We augment our work with an aromatherapy blend personalized for you, and keep you warm with a hot steam towel for your back, hands and feet. When we’re finishing caring for you, you’ll be completely relaxed!"
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Makeup Service",
				originalPrice: "$70",
				salePrice: 55.00,	
				description: "Our highly-trained beauty artists will personalize your makeup application to best suit your features and skin tone with colors and techniques that enhance your natural essence. We offer standard makeup applications (for everyday wear), bridal applications, prom makeovers, special effect/scar/tattoo coverage, and airbrush makeup. Claiming this offer will give you a discount on any of our aforementioned makeup services. This offer is for one individual facial application session."
			},

			
		];
	}
])