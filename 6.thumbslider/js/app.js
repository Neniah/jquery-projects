$(document).ready(function(){
  var totalWidth = 0;
  var positions = new Array();

  $('#slide slide').each(function(i){
    positions[i] = totalWidth;
    totalWidth += $(this).width();

    if(!$(this).width()){
      alert('Please add a width to your images');
      return false;
    }
  });

  $('#slides').width(totalWidth);

  $('#menu ul li a').click(function(e, keepScroll){
    $('li.products').removeClass('active').addClass('inactive');
    // Add active class to parent
    $(this).parent().addClass('active');

    var pos = $(this).parent().prevAll('.product').length;

    $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);

    e.preventDefault();

    // Stopping the autoScroll
    if(!autoScroll) clearInterval(itvl);
  });

  // Make first image active
  $('#menu ul li.product:fist').addClass('active').siblings().addClass('inactive');

  // Auto Scroll
  var current=1;
  function autoScroll(){
    if(current == 1) return false;

    $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);

    current++;
  }

  // Duration for autoScroll
});
