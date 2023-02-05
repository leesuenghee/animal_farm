let imgs = $('p[class*="animate__"],h1[class*="animate__"]');
console.log(imgs);

let target = $("#toggle .contents");
let targetOST = target.offset().top;
let stickyEl = target.find(".content1, .content2");
let stickyWidth = target.width();

let toggle_lam = $("#toggle .contents .content2");
console.log(toggle_lam);
// let toggle_amf = $("#toggle .content2 span p:first-child");
let toggle_ams = $("#toggle .contents .content2 img");

let pearl = $("#pearl .bgs");
let monitor_bg = $("#monitor div");
let monitor = $("#monitor div img:first-child");
console.log(monitor);

let display = $("#display");
let displays = display.find("div");
let display_text = display.find("span");

$(window).scroll(() => {
  imgs.each(function () {
    if ($(this).offset().top - 500 < $(window).scrollTop()) {
      let effect = $(this).attr("data-effect");
      // console.log(effect);
      $(this).css({ visiblity: "visible" });

      $(this).addClass(effect);
    }
  });
});

//#toggle
$(window).scroll(() => {
  let sct = $(window).scrollTop();
  if ($(window).width() > 480) {
    if (sct > stickyEl.offset().top - 500) {
      stickyEl.css({
        position: "fixed",
        top: "500px",
        width: stickyWidth + "px",
      });
      stickyEl.addClass("active");
      if (sct > targetOST - 200) {
        stickyEl.css({
          position: "relative",
          top: "auto",
          width: "100%",
          // height: " 1292px",
        });
        stickyEl.css({
          // paddingTop: "200px",
          paddingBottom: 0,
          // height: "100vh",
        });
      } else {
        stickyEl.css({
          position: "relative",
          top: "auto",
          width: "100%",
          // height: "1292px",
        });
        stickyEl.removeClass("active");
        target.css({
          paddingTop: 0,
          // paddingBottom: "200px",
        });
      }
    }
  }
});

//480px 이상 애니메이션
$(window).scroll(function () {
  if ($(window).width() > 480) {
    if (toggle_ams.offset().top) {
      setTimeout(function () {
        toggle_ams.stop().animate(
          {
            // width: "100%",
            // borderRadius: "0",
            // height: "50%",
          },
          3000
        );

        toggle_lam.addClass("fulls");
      }, 3000);
    }
    if ($(window).scrollTop() > 0) {
      pearl.addClass("full");
    }
    if (monitor.offset().top - 500) {
      // if ($(window).width()) {
      //   setTimeout(function () {
      //     monitor.stop().animate(
      //       {
      //         width: "100%",
      //       },
      //       3000
      //     );
      //   }, 3000);
      // }
      monitor_bg.addClass('big')
    }
    if (display.offset().top) {
      display_text.addClass("opacity");
      displays.addClass("opacity");
    }
  }
});
