jQuery(document).ready(function ($) {
  if ($(".port-closing-quote").length) {
    (function loop() {
      $(".port-closing-quote")
        .each(function () {
          var $self = $(this);
          $self.parent().queue(function (n) {
            $self.fadeIn(1000).delay(7500).fadeOut(1000, n);
          });
        })
        .parent()
        .promise()
        .done(loop);
    })();
  }
});
