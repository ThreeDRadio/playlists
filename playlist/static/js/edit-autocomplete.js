var trackCount = 0;
var localCount = 0;
var ausCount = 0;
var femaleCount = 0;

var artists = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: '/api/artists/?format=json&term=%QUERY',
    wildcard: '%QUERY',
    rateLimitBy: 100,
  }
});

var tracks = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: '/api/tracks/?format=json&track=%QUERY',
    wildcard: '%QUERY',
    rateLimitBy: 100,
    transform: function(result) {
        return result.results;
    }
  }
});


$('.typeahead-artist').each(function() {
    $(this).typeahead(null, {
        name: 'artists',
        source: artists,
        limit: 10,
});
});

$('.typeahead-track').each(function() {
    if ($(this).val() == "") {

    }
    else {
        trackCount++;
    }
    console.log($(this)[0].id);
    $(this).typeahead(null, {
        name: 'tracks',
        source: tracks ,
        display: function(suggestion) {
            return suggestion.tracktitle;
        }
});
});

$('.local_check').each(function() {
    if ($(this).is(':checked'))
        localCount++;
    $(this).click(function() {
        if ($(this).is(':checked'))
            localCount++;
        else
            localCount--;
        $('#local_quota').html("" + localCount + "/" + trackCount);
    });
    $('#local_quota').html("" + localCount + "/" + trackCount);
});

$('.australian_check').each(function() {
    if ($(this).is(':checked'))
        ausCount++;
    $(this).click(function() {
        if ($(this).is(':checked'))
            ausCount++;
        else
            ausCount--;
        $('#aus_quota').html(ausCount);
    });
    $('#aus_quota').html(ausCount);
});

$('.female_check').each(function() {
    if ($(this).is(':checked'))
        femaleCount++;
    $(this).click(function() {
        if ($(this).is(':checked'))
            femaleCount++;
        else
            femaleCount--;
        $('#female_quota').html(femaleCount);
    });
    $('#female_quota').html(femaleCount);
});





// Prevent return key from submitting form
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});


$('.floathead').floatThead({
    position: 'fixed'
});
