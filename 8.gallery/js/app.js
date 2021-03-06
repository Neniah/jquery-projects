$(document).ready(function(){
  $('nav a').on('click', function(){
    //Currrent class assignment
    $('nav li.current').removeClass('current');
    $(this).parent().addClass('current');

    // Set heading text-decoration
    $('h1#heading').text($(this).text());

    // Get & Filter link text
    var category = $(this).text().toLowerCase().replace(' ', '-');

    // Remove hidden class if 'all-projects' is selected
    if(category == 'all-projects'){
      $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('ul#gallery li').each(function(){
        if(!$(this).hasClass(category)){
          $(this).hide().addClass()
        }else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }

    // Stop link behaviour
    return false;
  });
});
