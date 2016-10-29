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

      $.each(data.items, function(i, item){
        // Get Output
        var output = getOutput(item);

        // Display Results
        $('#results').append(output),
      });

    }
  );
}


// Build Output
function getOutput(){
  var videoId = item.id.videoId;
  var title = item.snipped.title;
  var description = item.snipped.description;
  var thumb = item.snipped.thumbnails.high.url;
  var channelTitle = item.snippet.channelTitle;
  var videoDate = item.snipped.publishedAt;

  // Build OutPut String
  var output = '<li>' +
  '<div class="list-left">' +
  '<img src="'+ thumb + '">' +
  '</div>' +
  '<div class="list-right">' +
  '<h3>'+ title +'<h3/>' +
  '<small>By <span class="cTitle">'+ channelTitle +'</span></small>'+
  '<p>'+ description +'</p>'+
  '</div>'+
  '</li>'+
  '<div class="clearfix"></div>' +
  '';

  return output;




}
