/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/u/1/s/AKfycbzrcbK-gMCZ7dX5Xa3CAE9uN4N5jO02EC2kCdLy1BXNu0B-63o/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})