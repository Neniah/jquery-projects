/*
* name: LinkIt
* author: Maria Lobillo Santos
* version: 0.1.0
* license: MIT
*/

(function($){
  $.fn.linkIt = function(options){
    // Default Settings
    var settings = $.extend({
      whatever : null
    }, options);

    alert(settings.whatever);
  }
}(jQuery));
