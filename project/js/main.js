$(function() {
  $('#submit-btn').on('click', function(event){
    event.preventDefault();
    var team = $('#team-type').val().toLowerCase();
    if(team.match(/oklahoma|okc|thunder/i))
    /* if(team === 'oklahoma' || team === 'thunder' || team === 'okc') */
  {
      $('body').attr('class', 'okc') 
    } else if (team === 'golden state' || team === 'warriors' || team === 'gsw'){
      // $('body').attr('class', 'sf')
      $('body').attr('class', 'gsw')
    }
  });
});