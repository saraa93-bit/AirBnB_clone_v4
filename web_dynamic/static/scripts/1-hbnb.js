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
});
