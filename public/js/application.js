$(document).ready(function() {
  $('#my_button').on('click', function(event){
    event.preventDefault();

    $.ajax({
      url: '/ajax_practice',
      type: 'get',
      success: function(response){
        $('#new_form').text('').append(response)
      },
      error: function(response){
        console.log(response)
      }
    });

  })
});
