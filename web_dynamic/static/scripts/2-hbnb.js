$(document).ready(function () {
    let ameList = {};
    $('input[type="checkbox"]').click(function() {
        if ($(this).is(':checked')) {
            ameList[$(this).attr('data-id')] = $(this).attr('data-name');
          } else {
            delete ameList[$(this).attr('data-id')];
          }
          $('.amenities h4').text(Object.values(ameList).join(', '));
    });
    
    $.get('http://127.0.0.1:5001/api/v1/status/', function (data, res) {
        if (res === "success") {
            if (data.status === "OK") {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        }
    });
});
