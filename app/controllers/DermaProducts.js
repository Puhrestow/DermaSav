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
				title: "Botox",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "One of the most requested procedures done in our practice is now on sale! Botox can treat muscle stiffness, muscle spasms, excessive sweating, overactive bladder, or loss of bladder control. It also, more famously, prevents chronic migraine headaches and improves the appearance of wrinkles on the face. We are offering a 20-unit package for discount, which should cover most facial procedures."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Dysport",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Dysport, like Botox, is a form of botulinum toxin injected into the skin to temporarily relax the muscles that cause 'frown lines'. Unlike Botox, it is more commonly used in broader areas such as the forehead and around the mouth due to its natural propensity to spread over a wider area per injection. We are offering a 20-unit package for discount, which should cover most facial procedures." 
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "SkinMedica Chemical Peel",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "We are offering the 'Illuminize' variant of SkinMedica's peel-based selections for discount, which will treat mild skin imperfections. Chemical peels are used to brighten skin, giving it an even, healthy glow. You can expect to see excellent results after a single treatment, so give it a try!"
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Microdermabrasion",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Microdermabrasion creates gentle abrasion and exfoliation which can smooth wrinkles and fine lines, reduce the appearance of scars, and brighten skin tone. The fine crystal blast from microdermabrasion allows for rapid recovery, with no downtime. You're likely to find the treatment soothing, and not painful as you would potentially experience with a laser skin resurfacing treatment. "
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Laser Hair Removal",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Laser hair removal is a treatment that uses lasers to target the roots of hair underneath the skin’s surface. Though it's not guaranteed to be permanent, a majority of clients do experience permanent hair removal after a series of treatments. We use YAG laser technology, which is perfect for ALL SKIN TYPES."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Bellafill",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Bellafill is an FDA-approved, collagen-based filler used to reduce the appearance of smile lines and pitted acne scars on the cheeks; however, it can be used on other areas of the face as a longer-term alternative to Botox/Dysport. The injection immediately adds volume below the surface of the skin for smooth results that can last well over a year (opposed to 3-6 months efficacy for Botox/Dysport)."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Spider Vein Removal",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "You don’t have to live with the embarrassment of spider veins. These common, unsightly veins can be caused by a multitude of factors, including pregnancy, heredity, or hormonal changes. Our laser therapy can effectively fade even the darkest spider veins, achieving the smooth, beautiful legs you’ve always wanted. In most cases, optimal results can be achieved between two to three treatments spaced within a 4-6 week period."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Restylane/Perlane",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Would you like to smooth out some of those lines around your eyes or mouth? The best way to alleviate these issues are with products like Restylane or Perlane, which are clear gel injections of non-animal Hyaluronic Acid formulations. Hyaluronic Acid is already an essential part of your skin’s connective tissue, and is responsible for keeping it nourished and moisturized. Replenishing this biocompatible formulation Restylane/Perlane provides ensures that side effects are minimized. Results are immediate, lasting between 12-18 months."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Clarisonic Brush Head Twin-Pack",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Engineered to work perfectly with your Clarisonic products, we are offering a two-pack set of genuine facial-cleansing brushes at a discount. Observe this offer while supplies last, as they are known to be claimed quickly!"
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Clarisonic Mia 2",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "The essential first step in your skin care regimen, Clarisonic goes beyond washcloth-cleansing by using sonic technology to gently, yet deeply cleanse pores without abrasion or harsh chemicals. Clarisonic removes six times more makeup than manual cleansing, cleansing so well that products absorb better - making skin more receptive to skincare ingredients. With regular daily use, the Clarisonic reduces dry skin patches, oily areas and blemishes and immediately leaves skin feeling and looking smoother. The Mia 2 is enhanced with 2 speeds, has a 2 year warranty and includes Clarisonic's patented 'T-Timer', which allows you to customize your facial-cleansing patterns. A MUST-HAVE for any fan of dermatology."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Water-Assisted Liposuction",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Liposuction is a procedure best used for those who have unwanted fat that no amount of diet and exercise have been able to remove. All problem areas – from the neck to the knees – can be addressed with Water-Assisted Liposuction. Each area can be treated within 60 to 90 minutes by a water jet system that forcefully (but gently) completes a permanent flushing out fat cells and tightening of the skin for a more defined look. This process does not require anesthesia, and patients can return to normal activity within a day's time."
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "One Hour Aromatherapy Massage",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Our Aromatherapy massage includes an intense fusion of techniques that will increase blood and lymphatic circulation, ridding your body of toxins and melting away your stress. The massage also includes your scalp and face. We augment our work with an aromatherapy blend personalized for you, and keep you warm with a hot steam towel for your back, hands and feet. When we’re finishing caring for you, you’ll be completely relaxed!"
			},

			{
				imgSrc: "http://placehold.it/300x300",
				title: "Makeup Service",
				originalPrice: "$50",
				salePrice: "$30",	
				description: "Our highly-trained beauty artists will personalize your makeup application to best suit your features and skin tone with colors and techniques that enhance your natural essence. We offer standard makeup applications (for everyday wear), bridal applications, prom makeovers, special effect/scar/tattoo coverage, and airbrush makeup. Claiming this offer will give you a discount on any of our aforementioned makeup services."
			},

			
		];
	}
])