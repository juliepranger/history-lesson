
'use strict';

// Instantiates global instances / events
(function($) {
	$('.parallax-layer').bgParallax();
	$('.header-section').bgParallax();
	$('.house-image').bgParallax();


  // Section animation waypoints
  var waypoints = $('.animate-section').waypoint(function() {
    $(this.element).addClass('visible');
  }, { offset: '90%' });

  new navController();
  new readMoreController();

})(jQuery);