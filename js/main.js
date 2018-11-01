// Init Html
service.initHtml();

$('#submitBtn').on('click', service.calc);

// dropDown Menu
$('.dropdown-menu li a').click(function() {
  let selText = $(this).text();
  $(this)
    .parents('.btn-group')
    .find('.dropdown-toggle')
    .html(selText + ' <span class="caret"></span>');
});

$(function() {
  $('[data-toggle="popover"]').popover();
});
