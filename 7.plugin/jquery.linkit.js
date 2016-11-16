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
      href: null,
      text: null,
      target: '_blank',
    }, options);

    // Validation
    if(settings.href == null){
      console.log('You need as href option for LinkIt for work.');
      return this;
    }

    return this.each(fucntion(){
      
    });
  }
}(jQuery));
