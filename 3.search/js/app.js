// Searchbar Handler
$(function(){
  var searchField = $('#query');
  var icon = $('#search-btn');

  //Focus Handler
  $(searchField).on('focus', function(){
    $(this).animate({
      width: '100%'
    }, 400);
    $(icon).animate({
      right: '10px'
    }, 400);
  });

  // Blur Ever Handler
  $(searchField).on('blur', function(){
    if(searchField.val() == ''){
      $(searchField).animate({
        width:'45%'
      },400, function(){});
      $(icon).animate({
        right:'360px'
      },400, function(){});
    }
  });

  $('#search-form').submit(function(e){
    e.preventDefault();
  });

})


function search(){
  // clear results
  $('#results').html('');
  $('#buttons').html('');

  // Get Form Input
  q = $('#query').val(),

  // Run GET Request on API
  $.get(
    "https://www.googleapis.com/youtube/v3/search", {
        part: 'snippet, id',
        q: q,
        type: 'video',
        key: '6091ff2dab113c6256971ecaba24302485001db8'
    }, function(data){
      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;

      console.log(data);

      

    }
  );
}
