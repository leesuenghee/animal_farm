let imgs = $(
  'p[class*="animate__"],h1[class*="animate__"],h2[class*="animate__"]'
);

let target = $("#toggle .contents");
let targetOST = target.offset().top;
let stickyEl = target.find(".content1, .content2");
let stickyWidth = target.width();
let expint = false;

let toggle_lam = $("#toggle .contents .content2");
let toggle_ams = $("#toggle .contents .content2 img");

let pearl = $("#pearl .bgs");
let monitor_bg = $("#monitor div");
let monitor = $("#monitor div img:first-child");

let display = $("#display");
let displays = display.find("div");
let display_text = display.find("span");

$(window).scroll(() => {
  imgs.each(function () {
    $(this).css({ visiblity: "hidden" });
    if ($(this).offset().top - 500 < $(window).scrollTop()) {
      let effect = $(this).attr("data-effect");
      $(this).css({ visiblity: "visible" });

      $(this).addClass(effect);
    }
  });
});

//#toggle
$(window).scroll(() => {
  let sct = $(window).scrollTop();
  if ($(window).width() > 480) {
    if (sct > stickyEl.offset().top - 300) {
      stickyEl.addClass("active");
    } else {
      stickyEl.removeClass("active");
    }
  }
});

//480px 이상 애니메이션
$(window).scroll(function () {
  if ($(window).width() > 480) {
    if (toggle_ams.offset().top) {
      setTimeout(function () {
        toggle_lam.addClass("fulls");
      }, 4000);
    }
    // 헤더 이미지 애니메이션 효과
    if ($(window).scrollTop() > 0) {
      pearl.addClass("full");
    }
    if (monitor.offset().top - 500) {
      monitor_bg.addClass("big");
    }
    if (display.offset().top) {
      display_text.addClass("opacity");
      displays.addClass("opacity");
    }
  }
});

//top
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".top_btn").fadeIn();
  } else {
    $(".top_btn").fadeOut();
  }
});

$(".top_btn").click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 1000, "easeOutQuint");
});
