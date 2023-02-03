let tabMenus = $('#tabs .map_submenu a');

tabMenus.click(function(e){
  e.preventDefault();
  tabMenus.removeClass('active');
  $(this).addClass('active');
  //탭메뉴 컬러 변경
  $('html, body').animate({
    scrollTop : 0
    }, 400);
    return false;
    //탭 상단으로 천천히 이동
});
