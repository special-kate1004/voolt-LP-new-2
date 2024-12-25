$(document).ready(function () {
  let t = $("#thumbnail");
  $("#thumbnail").click(function () {
    let e = $(window).width();
    $("video").css("display", "block").get(0).play(), t.hide();
  });
  (_ = jQuery)("section.faq-section").length &&
    _(".qa-item").click(function (e) {
      e.preventDefault(),
        _(this).hasClass("opened")
          ? (_(this).removeClass("opened"),
            _(this).find(".answer").slideUp(150))
          : (_(".qa-item").removeClass("opened"),
            _(".qa-item .answer").slideUp(150),
            _(this).addClass("opened"),
            _(this).find(".answer").slideDown(150));
    });
});
