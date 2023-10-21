jQuery(document).ready(function () {
	"use strict";
	$ = jQuery.noConflict();


	var showOverlay = function () {
		$(this).find(".cthidden").addClass("cthover");
	};

	var hideOverlay = function () {
		$(this).find(".cthidden").removeClass("cthover");
	};

	var hovsettings = {
		timeout: 0,
		interval: 0,
		over: showOverlay,
		out: hideOverlay
	};

	$(".photoOverlay").hoverIntent(hovsettings);

	$(".photoOverlay").swipe({
		tap: function (event, target) {
			$(this).find(".cthidden").toggleClass("cthover");
		},
		threshold: 50
	});


	$(".shipping_calculator > h2 > a").each(function(){
		var $this = $(this);
		var $togglediv = $this.closest(".shipping_calculator").find(".shipping-calculator-form");

		if ($togglediv.is(":visible")) {
			$this.closest(".shipping_calculator").addClass("isOpen");
		} else {
			$this.closest(".shipping_calculator").removeClass("isOpen");
		}
	});

	$(".shipping_calculator > h2 > a").click(function(e){
		var $this = $(this);
		var $togglediv = $this.closest(".shipping_calculator").find(".shipping-calculator-form");

		var attr = $togglediv.attr('style');

		if (typeof attr !== 'undefined' && attr !== false) {
			$this.closest(".shipping_calculator").toggleClass("isOpen");
		}

		e.preventDefault();
	});


	/*
	$("#showCart, .barShoppingCart .inner").hover(function(){
		var $this = $(this);

		$this.closest(".barShoppingCart").find(".inner").slideToggle();
	})
	*/


	jQuery(window).load(function () {


	});


	if (($.Isotope) && ($('.images .thumbnails').length > 0)) {

		// single product thumbnails list

		var $imgContainer = $('.images .thumbnails'), // object that will keep track of options
						isotopeOptions = {}, // defaults, used if not explicitly set in hash
						defaultOptions = {
							itemSelector: 'a',
							layoutMode: 'sloppyMasonry',
							resizable: false, // disable normal resizing
							// set columnWidth to a percentage of container width
							masonry: { }
						};


		$(window).smartresize(function () {
			$imgContainer.isotope({
				// update columnWidth to a percentage of container width
				masonry: { }
			});
		});

		// set up Isotope
		$imgContainer.isotope(defaultOptions, function () {

			// fix for height dynamic content
			setTimeout(function () {
				$imgContainer.isotope('reLayout');
			}, 1000);

		});
	}


});
/* / document ready */

