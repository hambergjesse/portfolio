$(document).ready(function () {
  $("html, body").scrollTop(0);

  $(window).on("load", function () {
    setTimeout(function () {
      $("html, body").scrollTop(0);
    }, 0);
  });
});

$(window).on("load", function () {
  $(".loader-wrapper").delay(750).fadeOut("slow");
});
