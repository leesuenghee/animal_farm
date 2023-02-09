//헤더
let aside = $("header .aside"),
  button = $("header .toggleBtn");

button.click(function () {
  aside.toggleClass("open");
  $(this).toggleClass("active");
});

// 탑버튼
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".top_btn").fadeIn();
  } else {
    $(".top_btn").fadeOut();
  }
});

$(".top_btn").click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 1000, "easeOutQuint");
});

//메인 슬라이드
$(".main-page .swiper").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2500,
});

let slideMenu = $(".slick-dots li button");
slideMenu.each(function () {
  slideMenu.text("");
});

//팝업
let popup = $('dialog'),
popupClose = $('.popup_close > i'),
dayCheck = popup.find('#daycheck');


//쿠키 설정 24시간
function setCookie(name,value,day){
  let date = new Date();
  date.setDate(date.getDate()+day);
  document.cookie = `${name}=${value};expires=${date.toGMTString()}`;
}


//쿠키 가져오기
  function getCookie(name){
    let cookieArr = document.cookie.split(';');
    console.log(cookieArr);
    let visited = false;
    for(let cookie of cookieArr){
        if(cookie.search(name) > -1){
            visited = true;
            break;
        }
    }
console.log(visited);
    if(visited == false){
        popup.attr('open','');
    } else {
      popup.removeAttr('open');
    }
}

//X버튼 클릭하면 닫기
getCookie('ss');

popupClose.click(()=>{
    if(dayCheck.is(":checked")){
        setCookie('ss','home',1);
    }else{
        setCookie('ss','home',-1);
    }
    popup.removeAttr('open');console.log(document.cookie);
});