$(document).ready(function () {
  
    loadView('login.html');
});

  function loadView(url)
    {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                $('#content').html(data);
            }
        })
    }