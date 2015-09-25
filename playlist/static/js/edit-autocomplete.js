var artists = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: '/api/artists/?format=json&term=%QUERY',
    wildcard: '%QUERY'
  }
});

var tracks = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: '/api/tracks/?format=json&term=%QUERY',
    wildcard: '%QUERY'
  }
});


$('.typeahead-artist').each(function() {
    $(this).typeahead(null, {
        name: 'artists',
        source: artists 
});
});


$('.typeahead-track').each(function() {
    $(this).typeahead(null, {
        name: 'tracks',
        source: tracks 
});
});


$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

