//480이하일 때는 풀페이지 작동 안됨
$(window).resize(() => {
  if ($(window).width() <= 480) {
    $.fn.fullpage.destroy("all");
  } else {
    initFullpage();
  }
  // if ($(window).width() <= 480) {
  //   new fullpage("#fullpage", {
  //     //options here
  //     autoScrolling: true,
  //     scrollHorizontally: true,
  //   });
  // }
});
$(window).trigger("resize");
ㅛㅅ;
function initFullpage() {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
  });
}

