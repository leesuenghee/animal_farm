// 스크롤 상단 하단 선 효과
var s = skrollr.init({
  edgeStrategy: "set",
  easing: {
    WTF: Math.random,
    inverted: function (p) {
      return 1 - p;
    },
  },
}); //







let sections = $("section"),
  sectionInfo = [];

sections.each(function () {
  let sectionOST = $(this).offset().top;
  sectionInfo.push(sectionOST);
});
// console.log(sectionInfo);

let hSubmenu = $(".history_submenu");
let menus = hSubmenu.find("a");

$(window).scroll(function () {
  let windowWidth = $(window).width();
  let windowOST = $(window).scrollTop();
  console.log(windowOST);

//
$(window).scroll(function(){
  let sct = $(window).scrollTop();
  if(sct == $(document).height() - $(window).height()){
    hSubmenu.fadeOut();
  } else {hSubmenu.fadeIn();}
})//스크롤 맨밑일때 서브메뉴 fade효과



  // history_submenu 보이게 안보이게
  // 모바일버젼 일때 할일 (480px)
  if (windowWidth <= 480 && windowOST > 0) {
    hSubmenu.addClass("active");
  }
  if (windowWidth <= 480 && windowOST == 0) {
    hSubmenu.removeClass("active");
  }

  //서브메뉴 색상변경
  //스크롤양이 각 섹션의 offset top값 사이에 있을때 할일
  for (i = 1; i < sections.length; i++) {
    if (sectionInfo[i] < windowOST) {
      menus.eq(i).css({ color: "var(--point)" });
    } else {
      menus.eq(i).css({ color: "var(--text)" });
    }
  }
});
