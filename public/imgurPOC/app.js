$(document).ready(function () {
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
    loadView('login.html');
});