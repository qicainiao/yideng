$(function(argument) {
  $('#btnsubmit').click(function(event) {
    event.preventDefault();
    $.ajax({
      url: '/receive',
      type: 'get',
      dataType: 'json',
      data: {
        username: $('#username').val()
      },
      success: function(data) {
        console.log(data)

      },
      error: function(err) {
        console.log(err);
      }
    });
  });
})
