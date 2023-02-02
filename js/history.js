// let descs = $("#section2 .history_desc"),
//   descsOST = descs.offset().top,
//   htSticky = $("#section2 .history_title"),
//   htStickyOST = htSticky.offset().top;
// console.log(descsOST);
// $(window).scroll(() => {
//   let sct = $(window).scrollTop();

//   if (sct > descsOST) {
//     htSticky.css({
//       position: "skicky",
//       top: "50%",
//       transform: "traslateY(-50%)",
//     });
//   }
// });
//max-width가 768px 일때 #progress1의 data-end="width:580px;background:hsl(210, 100%, 50%);"로 바뀌어야한다.



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

// 0 ~ 해당 섹션 스크롤양 사이에 있을때 a태그에 active가 들어온다

let sections = $("section"),
sectionInfo = [],
  currentIdx = 0;
  let sct = $(window).scrollTop();

sections.each(function () {
  let sectionOST = $(this).offset().top;
  
  sectionInfo.push(sectionOST);
  
});
console.log(sct);
console.log(sectionInfo);