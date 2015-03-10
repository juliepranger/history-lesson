
'use strict';

// Instantiates global instances / events
(function($) {


  $('body').bgParallax();

  // Section animation waypoints
  var waypoints = $('.animate-section').waypoint(function() {
    $(this.element).addClass('visible');
  }, { offset: '90%' });

})(jQuery);