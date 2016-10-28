// Searchbar Handler
$(function(){
  var searchField = $('#query');
  var icon = $('#search-btn');

  //Focus Handler
  $('searchField').on('focus', function(){
    $(this).animate({
      width: '100%'
    }, 400);
    $(icon).animate({
      right: '10px'
    }, 400);
  });

  // Blur Ever Handler
  $('searchField').on('blur', function(){
    if(searchField.val() == ''){
      $(searchField).animate({
        width:'45%'
      },400, function(){});
    }
  });

})
