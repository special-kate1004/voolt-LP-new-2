$(document).ready(function () {
  let isPlaying = false;
  $("#thumbnail").click(function () {
    isPlaying = !isPlaying;
    $("#thumbnail img").css("display", isPlaying ? "none" : "block");
    if (isPlaying) $("video").css("display", "block").get(0).play();
    else $("video").css("display", "block").get(0).pause();
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
