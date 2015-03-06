// Background-Parallax

'use strict';

(function($) {

  $.fn.bgParallax = function() {

    var prevScrollTop = 0;
    var scrollCount = 0;
    var $window = $(window);
    var $body = $('body');

    $window.scroll(function() {
      var currentScrollTop = $window.scrollTop();
      var bgPosition;

      // check scroll direction
      if (currentScrollTop > prevScrollTop) {
        scrollCount -= 1;
      } else {
        scrollCount += 1;
      }

      $body.css({
        backgroundPosition: '0 ' + scrollCount + 'px'
      });

      if (scrollCount > 0) {
        $body.css({backgroundPosition: '0 0 px'});
      }

      prevScrollTop = currentScrollTop;
    });

  };
})(jQuery);
