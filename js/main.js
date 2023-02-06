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
const swiperEl = document.querySelector("swiper-container");

const params = {
  injectStyles: [
    `
      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
      }

      .swiper-pagination-bullet-active {
        color: #fff;
        background: #007aff;
      }
      `,
  ],
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
};

Object.assign(swiperEl, params);

swiperEl.initialize();
