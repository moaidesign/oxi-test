$("#re-contact").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Grazie ti ricontatteremo il prima possibile!");
  });
});
