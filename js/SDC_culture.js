//480이하일 때는 풀페이지 작동 안됨
$(window).resize(() => {
  if ($(window).width() <= 480) {
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
