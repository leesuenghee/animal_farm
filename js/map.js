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

// svg spot circle의 index
// map_list_item의 index
// 두개의 index 번호가 같다면 map_list_item의 각 내용을 makeHTML에 넣는다.

let circles = $("svg #spot circle"),
  mapListItem = $(".map_list_item");
let mapH3 = mapListItem.find("h3"),
  mapSpan1 = mapListItem.find("span:first-child"),
  mapSpan2 = mapListItem.find("span:last-child");

//circle을 클릭했을때 할일
//각 circle의 index번호
circles.click(function () {
  $(this).each(function (index) {
    if (index == mapListItem.eq(index)) {
    }
    let makeHTML = `<div>
      <h3 class="ft32">${$(this).mapH3}</h3>
      <span>${mapSpan1}</span>
      <span>${mapSpan2}</span>
      <img src="" alt="">
    </div>`;
    console.log(makeHTML);
  });
});
