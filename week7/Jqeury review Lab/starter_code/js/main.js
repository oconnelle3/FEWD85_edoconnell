
$(function() {
  $('#submit-btn').on('click', function(event){
    event.preventDefault();
    var city = $('#city-type').val().toLowerCase();
    if(city === 'New York' || city === 'nyc'){
      $('body').attr('class', 'nyc')
    } else if (city === 'san francisco' || city === 'sf' || city === 'san fran'){
      $('body').attr('class', 'sf')
    } else if (city === 'los angeles' || city === 'la' || city === 'los angeles'){
      $('body').attr('class', 'la')
    } else if (city === 'austin' || city === 'aus'){
      $('body').attr('class', 'austin')
    } else if (city === 'sydney' || city === 'syd'){
      $('body').attr('class', 'sydney')
    } 
  })
  /* var city = $('#city-type').val().toLowerCase();*/
});
/* function city(){
  $("entry").submit("newCity");
  console.log("it worked");
}
var city = (newCity);

$("a").click(function(event){
    event.preventDefault();
});

$(function() {
  $('#submit-btn').on('submit', function(event) {
    var city = $('#city-type').val();
    if (city === 'New York')}
      $("body").attr("class", city); 
}
/*
$("entry").on('click', )
var city = $('#city-type').val();
console.log(city);
function city(){
  $("body").attr("class", city)
  console.log(city);

 $(document).ready(){} 
}
*/