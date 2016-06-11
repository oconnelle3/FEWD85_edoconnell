// $('mydiv').html("<img src" + my.image +)//
// $(function (){
//   var url = 'https://api.themoviedb.org/3/movie/550?api_key=d428f334cbb71973525f3f8901b0c7cb';
$(function (){
   // var url = 'https://api.themoviedb.org/3/find/tt0266543?external_source=imdb_id&api_key=d428f334cbb71973525f3f8901b0c7cb';
   var url = 'https://api.themoviedb.org/3/search/movie?api_key=d428f334cbb71973525f3f8901b0c7cb&query=';
   var movie1, movie2, rating1, rating2;
 
   var findMovie = function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("findMovie");
    var movieName = $('#movieName').val().toLowerCase();
    var queryUrl = url + movieName;

      $.ajax({
      type: 'GET',
      url: queryUrl,
      dataType: 'jsonp',
      success: function(json) {
        console.log(json);
        movie1 = json.results[0];
        rating1 = movie1.vote_average;
        findMovie2(e);
      },
      error: function(e){
        console.log(e.message);
      }
    })
   }
  
  var findMovie2 = function(e) {
    e.preventDefault();
    e.stopPropagation();
    var movieName = $('#movieName2').val();
    var queryUrl = url + movieName;
  
    $.ajax({
      type: 'GET',
      url: queryUrl,
      dataType: 'jsonp',
      success: function(json) {
        console.log(json);
        movie2 = json.results[0];
        rating2 = movie2.vote_average;
        compare();
      },
      error: function(e){
        console.log(e.message);
      }
    })
  }
  // }
  //  var findMovie3 = function(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   var movieName = $('#movieName3').val();
  //   var queryUrl = url + movieName;
  
  //   $.ajax({
  //     type: 'GET',
  //     url: queryUrl,
  //     dataType: 'jsonp',
  //     success: function(json) {
  //       console.log(json);
  //       movie2 = json.results[0];
  //       rating3 = movie3.vote_average;
  //       compare();
  //     },
  //     error: function(e){
  //       console.log(e.message);
  //     }
  //   })
  // }
  // }
  var compare = function() {
    if (rating1 > rating2)  {
      console.log("movie1 is higher", movie1);
      // return movie1;
      $('.movie-poster').html('<img src="https://image.tmdb.org/t/p/w185/' + movie1.poster_path + '"/>');
    
    }
    else   {
      console.log("movie2 is higher", movie2);
      // return movie2;
      $('.movie-poster').html('<img src="https://image.tmdb.org/t/p/w185/' + movie2.poster_path + '"/>');
        
    }
    // else if {
    //     console.log("movie3 is higher", movie3);
    //     $('.movie-poster').html('<img src="https://image.tmdb.org/t/p/w185/' + movie3.poster_path + '"/>');
    // }
  }
  
// $('.response').on('submit', findMovie);
//   var findMovie = function(imdb_id)
  $('#submit-btn').on('click', findMovie);
});
//}
  //var poster = $('.movie-poster')
  


  // var movie = function(imdb_id)
  // console.log(movie);
// $function() {

// }
// $(function (){
//   var url = 'https://api.themoviedb.org/3/find/tt0266543?external_source=imdb_id&api_key=d428f334cbb71973525f3f8901b0c7cb';
// }
