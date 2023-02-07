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
$(".swiper").slick({
  arrows: false,
  dots: true,
  autoplay:true,
});

let slideMenu = $('.slick-dots li button');
slideMenu.each(function(){
  slideMenu.text('');
})
