let descs = $("#section2 .history_desc"),
  descsOST = descs.offset().top,
  htSticky = $("#section2 .history_title"),
  htStickyOST = htSticky.offset().top;
console.log(descsOST);
$(window).scroll(() => {
  let sct = $(window).scrollTop();

  if (sct > descsOST) {
    htSticky.css({
      position: "skicky",
      top: "50%",
      transform: "traslateY(-50%)",
    });
  }
});

// 스크롤 상단 하단 선 효과
var s = skrollr.init({
  edgeStrategy: "set",
  easing: {
    WTF: Math.random,
    inverted: function (p) {
      return 1 - p;
    },
  },
});
