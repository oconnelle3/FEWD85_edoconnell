//$(function() {
//  var newItem = $('form').val();

//$(function() {
 // $('#submit-btn').on('click', function(event){
 //   var newItem = function() 
//});

//    $("entry").on('click', )

  //
  $(function () {
    //Initial count
    var count = 0;
    // Event Listeners
  //   $(function() {
  //  $('#submit-btn').on('click', function(event){
  //   var newItem = function() 
    //When an item is submitted in the #new form
    //$(function() {
  //var newItem = $('form').val();
  $('new').on('click', addNewItem);
  //When the user clicks remove link, remove that item
  $('#todos').on('click', '.remove', removeItem);
  //When the edit link is clicked go into edit mode
  $('#todos').on('click', '.edit', editItem);
  //What the item eidtor is submitted, save the changes
  $('#todos').on('click', '.editor', saveItem);
    //Functions
    function updateCount() {
      //Log the current count
      console.log(count)
      // Count of the number of items
      count = $('#todo li').not('.done').length();
      console.log(count);

      //Print new count
      $('#count').html(count);

    }

    function addNewItem(event) {
      //Prevent page reload
      event.preventDefault();
      //Get the text the user entered
      var newItem = $('#newItem').val();
      //Add an <li> with that the text submitted
      $('#todos').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class=remove">Remove</a></li>')
    
      updateCount();
    }
    function removeItem(event)  {
      //Prevent page load
      event.preventDefault();
      //The parent is the item that we need to remove
      $(this).parent().remove();

      updateCount();
    }
    function editItem(event)  {
      //Prevent page load
      event.preventDefault();
      var itemText = $(this).siblings('.item').html();
      var listItem = $(this).parent();

      listItem.html('<form class="editor"><input value=" ' + itemText + '"></form>')
      listItem.find('input').focus();
    }
  function saveItem(event) {
    //Prevent page load
      event.preventDefault();
      var itemText = $(this).children('input').val();
      var listItem = $(this).parent();
      listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a>')
  }


  });