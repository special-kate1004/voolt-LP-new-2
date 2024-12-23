$(document).ready(function () {
  var e, _;
  $(".service-tag-slider").slick({
    dots: !1,
    arrows: !1,
    infinite: !0,
    speed: 700,
    autoplay: !0,
    autoplaySpeed: 1500,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    centerMode: !0,
    variableWidth: !0,
  }),
    $(".how-marketing-holder").slick({
      dots: false,
      autoplay: !1,
      autoplaySpeed: 2e3,
      speed: 1e3,
      dots: !0,
      customPaging: function (e, index) {
        return `
          <div>
          <div class="custom-dot">
            <div class="dot-number">${index + 1}</div>
            <div class="dot-content">
            <div class="dot-title">Step ${index + 1}</div>
            <div class="dot-description">
              ${getDescriptionForStep(index)}
            </div>
            </div>
          </div>
          <div class="normal-dot"></div>
          </div>
        `;
      },
      arrows: !0,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      infinite: !0,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: !1,
      prevArrow:
        "<button aria-label='Slider Arrow Left' type='button' class='slick-prev pull-left'><svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 20.0002C0 8.95455 8.95431 0.000244141 20 0.000244141C31.0457 0.000244141 40 8.95455 40 20.0002C40 31.0459 31.0457 40.0002 20 40.0002C8.95431 40.0002 0 31.0459 0 20.0002Z' fill='#F4F4F5'/><path d='M23 26.0002L17 20.0002L23 14.0002' stroke='#71717A' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
      nextArrow:
        "<button aria-label='Slider Arrow Right' type='button' class='slick-next pull-right'><svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 20.0002C40 8.95455 31.0457 0.000244141 20 0.000244141C8.95431 0.000244141 0 8.95455 0 20.0002C0 31.0459 8.95431 40.0002 20 40.0002C31.0457 40.0002 40 31.0459 40 20.0002Z' fill='#F4F4F5'/><path d='M17 26.0002L23 20.0002L17 14.0002' stroke='#71717A' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
    });
  // Helper function to get descriptions for each step
  function getDescriptionForStep(index) {
    const descriptions = [
      "Pre-fund your balance starting from $175. No monthly payments or contracts.",
      "We'll set up your campaigns on Google and Facebook.",
      "Local customers actively searching for services like yours will see your ads.",
      "After clicking them, they’ll be redirected to your business page to fill out a form.",
      "You'll receive the leads in your dashboard and we'll notify you immediately.",
      "Contact your leads directly, no middleman, and convert them into new clients.",
    ];
    return descriptions[index] || "";
  }
  (e = jQuery)("section.voolt-does").length &&
    (e(".does-item:first-child .inside-box .answer").slideToggle(),
    e(".does-item:first-child .image-box").slideToggle(),
    e(".does-item").click(function (_) {
      _.preventDefault(),
        e(this).hasClass("opened-box")
          ? (e(this).removeClass("opened-box"),
            e(this).find(".image-box").removeClass("does-active-img"),
            e(this).find(".answer").slideUp(150),
            e(this).find(".image-box").slideUp(150))
          : (e(".does-item").removeClass("opened-box"),
            e(".does-item .answer").slideUp(150),
            e(".image-box").removeClass("does-active-img"),
            e(".image-box").slideUp(150),
            e(this).addClass("opened-box"),
            e(this).find(".answer").slideDown(150),
            e(this).find(".image-box").addClass("does-active-img"),
            e(this).find(".image-box").slideDown(150));
    }));
  let t = $("#thumbnail");
  $("#thumbnail").click(function () {
    let e = $(window).width();
    $("video").css("display", "block").get(0).play(), t.hide();
  });
  function i(e, _) {
    let t = $(e),
      i = t.find(".pager"),
      s = "next" === _;
    if (!i.find(".active-dot").is(s ? ":last-child" : ":first-child")) {
      let a = s ? "next" : "prev";
      t
        .find("th.active-in-slider")
        .addClass("old-active-in")
        .removeClass("active-in-slider")
        [a]()
        .addClass("active-in-slider"),
        t.find("th.old-active-in").removeClass("old-active-in"),
        t
          .find("td.active-in-slider")
          .addClass("old-active-in")
          .removeClass("active-in-slider")
          [a]()
          .addClass("active-in-slider"),
        t.find("td.old-active-in").removeClass("old-active-in"),
        i
          .find(".active-dot")
          .addClass("old-dot-active")
          .removeClass("active-dot")
          [a]()
          .addClass("active-dot"),
        i.find(".old-dot-active").removeClass("old-dot-active");
    }
  }
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
    }),
    $(".comper-tags a").click(function (e) {
      e.preventDefault(),
        $(".activetab").removeClass("activetab"),
        $(this).addClass("activetab"),
        $(".table-active").removeClass("table-active"),
        0 === $(this).index()
          ? $(".how-we-compare .table").eq(0).addClass("table-active")
          : 1 === $(this).index() &&
            $(".how-we-compare .table").eq(1).addClass("table-active");
    }),
    $(".table-w-slider .pager .arrow-next").click(function (e) {
      e.preventDefault(), i(".table-w-slider", "next");
    }),
    $(".table-w-slider .pager .arrow-prev").click(function (e) {
      e.preventDefault(), i(".table-w-slider", "prev");
    }),
    $(".table-w-slider2 .pager .arrow-next").click(function (e) {
      e.preventDefault(), i(".table-w-slider2", "next");
    }),
    $(".table-w-slider2 .pager .arrow-prev").click(function (e) {
      e.preventDefault(), i(".table-w-slider2", "prev");
    });
});
