$(document).on('ready', function(){
  listHeros();
});

$('form').on('submit', function(e){
  e.preventDefault();
  var $superHeroName = $('#superhero-name').val();

  $.post('/api/superheros', {superheroName: $superHeroName}, function(data) {
    $( "#results" ).html(data.message);
    $( "#all" ).html("");
    $('#superhero-name').val("");
    listHeros();

    console.log(data);
  });
});


//helper function
function listHeros(){
  $.get('/api/superheros', function(data){
    for (var i = 0; i < data.length; i++) {
      $('#all').prepend('<li>'+data[i].name+'</li>');
    }
  });
}
