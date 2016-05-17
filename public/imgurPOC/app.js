$(document).ready(function () {
    loadView('https://roshanjoshi.in/imgurPOC/login.html');
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
});