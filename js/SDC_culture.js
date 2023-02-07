//480이하일 때는 풀페이지 작동 안됨
$(window).resize(() => {
  if ($(window).width() >= 480) {
    new fullpage("#fullpage", {
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
    });

    $("#fullpage").fullpage({
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
    });
    //methods
    // $.fn.fullpage.setAllowScrolling(false);
  }
});

//풀페이지가 되었을 때 header fixed 고정
// if ($(window).scrollTop() >= 0) {
//   $("header").css({ position: "fixed", left: 0, right: 0, bottom: 0, top: 0 });
// }
