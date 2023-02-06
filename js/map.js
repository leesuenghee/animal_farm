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

//circle을 클릭했을때
//circle의 data-country값
//maplistitem의 data-country값
//두개의 값이 같다면 popup에 maplistitem을 복사해서 넣어준다.

let circle = $('.mapwrap svg circle'),
  maplistitem = $('.map_list .map_list_item'),
  popup = $('.mapwrap .popup');

  circle.click(function(){
    let circleData = $(this).attr('data-country');

    maplistitem.each(function(){
      let maplistitemData = $(this).attr('data-country');
      if(circleData === maplistitemData){
        popup.html($(this).clone());
      } 
    });
  });
