$(document).ready(function(){
  // Set Options
  var speed = 500;
  var autoswitch = true;
  var autoswitch_speed = 4000;

  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Shoe first slide
  $('.active').show();

  $('#next').on('click', function(){
    $('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
  });
});
