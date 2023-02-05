let tabMenus = $("#tabs .map_submenu a");

tabMenus.click(function (e) {
  e.preventDefault();
  tabMenus.removeClass("active");
  $(this).addClass("active");
  //탭메뉴 컬러 변경
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    400
  );
  return false;
  //탭 상단으로 천천히 이동
});

//maplist의 각 data-1 내용을 배열로 묶어준다.

let circles = $("svg #spot circle"),
  mapListItem = $(".map_list_item");

let mapH3 = mapListItem.find("h3"),
  mapSpan1 = mapListItem.find("span:first-of-type"),
  mapSpan2 = mapListItem.find("span:last-of-type");
let mapH3Data = [],
  mapSpan1Data = [],
  mapSpan2Data = [];

mapH3.each(function () {
  let mapH3attr = $(this).attr("data-1");
  mapH3Data.push(mapH3attr);
});
mapSpan1.each(function () {
  let mapSpan1attr = $(this).attr("data-1");
  mapSpan1Data.push(mapSpan1attr);
});
mapSpan2.each(function () {
  let mapSpan2attr = $(this).attr("data-1");
  mapSpan2Data.push(mapSpan2attr);
});
console.log(mapH3Data);
console.log(mapSpan1Data);
console.log(mapSpan2Data);

console.log(mapListItem.length); //21개
console.log(circles.length); //21개
//circle을 클릭했을때 할일
//각 circle의 index번호
circles.click(function () {
  if ($(this).eq(0) == mapListItem.length) {
    makeHTML();
  }
});

function makeHTML() {
  `<div class="map-modal">
    <h3 class="ft32"></h3>
    <span></span>
    <span></span>
  </div>`;
}
