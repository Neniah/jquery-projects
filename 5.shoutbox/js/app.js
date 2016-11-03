$(document).ready(function(){
  $('submit').on('click', function(){
    var name = $('#name').val();
    var shout = $('#shout').val();
    var date = getDate();
    var dataString = 'name' + name + '&shout=' + '&date=' + date;

    // Validation
    if (name == '' || shout == ''){
      alert('Please fill in your name and shout');
    }

    return false;
  });
});
