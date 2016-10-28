(function() {
  'use strict';

  var movies = [];

  var renderMovies = function() {
    $('#listings').empty();

    for (var movie of movies) {
      var $col = $('<div class="col s6">');
      var $card = $('<div class="card hoverable">');
      var $content = $('<div class="card-content center">');
      var $title = $('<h6 class="card-title truncate">');

      $title.attr({
        'data-position': 'top',
        'data-tooltip': movie.title
      });

      $title.tooltip({ delay: 50, });
      $title.text(movie.title);

      var $poster = $('<img class="poster">');

      $poster.attr({
        src: movie.poster,
        alt: `${movie.poster} Poster`
      });

      $content.append($title, $poster);
      $card.append($content);

      var $action = $('<div class="card-action center">');
      var $plot = $('<a class="waves-effect waves-light btn modal-trigger">');

      $plot.attr('href', `#${movie.id}`);
      $plot.text('Plot Synopsis');

      $action.append($plot);
      $card.append($action);

      var $modal = $(`<div id="${movie.id}" class="modal">`);
      var $modalContent = $('<div class="modal-content">');
      var $modalHeader = $('<h4>').text(movie.title);
      var $movieYear = $('<h6>').text(`Released in ${movie.year}`);
      var $modalText = $('<p>').text(movie.plot);

      $modalContent.append($modalHeader, $movieYear, $modalText);
      $modal.append($modalContent);

      $col.append($card, $modal);

      $('#listings').append($col);

      $('.modal-trigger').leanModal();
    }
  };

  //- Listen for submissions on the search form. Remember to prevent the default action.
//- Validate the user input is not blank.
//- Clear the previous search results.
//- Send an HTTP request to the [OMDB API](http://omdbapi.com/) search endpoint.
//- Handle the HTTP response by pushing a new, well-formed `movie` object into the global `movies` array.
//Render the `movies` array to the page by calling the `renderMovies()` function with no arguments.

  // ADD YOUR CODE HERE

// ================ Declare Values ==================//

//var searchInput = $("#search").val();
var submitButton = $("#enterButton");

// ================ Listen for Submissions on Search ==================//



function submitSearch(event){
  event.preventDefault();

if($("#search").val() === ""){
  Materialize.toast('Please enter a movie to search', 4000);
  console.log("test")
} else {
  console.log("I got to the else");
var $xhr = $.getJSON('http://www.omdbapi.com/?t=' + $("#search").val() + '&y=&plot=short&r=json');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }

    console.log(data);
});

$xhr.fail(function(err) {
    console.log(err);
});
}

}

$(submitButton).on('click', submitSearch);












})();
