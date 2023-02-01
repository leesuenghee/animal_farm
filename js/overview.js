let imgs = $('h3[class*="animate__"],p[class*="animate__"]');

let toggles = $("#toggle .content");
let toggleHeight = toggles.height();
let toggleOST = toggles.offset().top;
let toggleTs = toggles.find(".ts");
let toggleWidth = toggleTs.width();
let toggleLeft = toggleTs.offset().left;
imgs.css({ visiblity: "hidden" });

let toggle_am = $("#toggle .ts:last-child p:last-child");
let toggle_amf = $("#toggle .ts:last-child p:first-child");
let toggle_ams = $("#toggle .ts:last-child img");
let monitor = $("#monitor div img:first-child");
let monitorImg = $("#monitor div img:nth-child(2)");
let pearl = $("#pearl > div img");

console.log(imgs);
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
  // console.log(sct);

  if (480 < sct > toggleOST - 500) {
    toggleTs.css({
      position: "fixed",
      top: "500px",
      width: toggleWidth + "px",
    });
    toggleTs.addClass("active");
    if (480 < sct > toggleOST - 500) {
      toggleTs.css({
        position: "relative",
        top: "auto",
        width: "auto",
      });
      toggles.css({
        paddingTop: "300px",
        paddingBottom: 0,
      });
    } else {
      toggleTs.css({
        position: "relative",
        top: "auto",
        width: "auto",
      });
      toggleTs.removeClass("active");
      toggles.css({
        paddingTop: 0,
        paddingBottom: "300px",
      });
    }
  }
});

// 768px 이하 애니메이션
$(window).scroll(function () {
  if ($(window).width() <= 768 >= 480)
    if (toggle_am.offset().top || monitorImg.offset().top) {
      {
        setTimeout(function () {
          toggle_ams.stop().animate(
            {
              width: "100%",
            },
            3000
          );
          monitor.stop().animate(
            {
              width: "100%",
            },
            3000
          );
          toggle_am.addClass("fiexd");
          toggle_amf.addClass("fiexd");
        }, 6000);
      }
    }
  if (
    $(window).scrollTop() > 0 ||
    $(window).width() < 768 >= 480 ||
    pearl.offset().top - 500
  ) {
    setTimeout(function () {
      pearl.stop().animate(
        {
          width: "100%",
        },
        1000
      );
    });
  }
});
