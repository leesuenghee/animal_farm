let imgs = $('p[class*="animate__"],h1[class*="animate__"]');
console.log(imgs)

let target = $("#toggle .contents");
let targetOST = target.offset().top;
let stickyEl = target.find(".content1, .content2");
let stickyWidth = target.width();

let toggle_lam = $('#toggle .contents .content2 span p:nth-child(2) ');
console.log(toggle_lam)
let toggle_amf = $("#toggle .content2 span p:first-child");
let toggle_ams = $("#toggle .contents .content2 img");

let pearl = $("#pearl .bgs");
let monitor_bg = $('#monitor div');
let monitor = $('#monitor div img:first-child');
console.log(monitor)


let display = $('#display');
let displays = display.find('div');
let display_text = display.find('span');

$(window).scroll(() => {
  imgs.each(function () {
    if ($(this).offset().top - 500 < $(window).scrollTop()) {
      let effect = $(this).attr("data-effect");
      // console.log(effect);
      $(this).css({ visiblity: "visible" });

      $(this).addClass(effect);
    }
  });
});

//#toggle
$(window).scroll(() => {
  let sct = $(window).scrollTop();
  if($(window).width() > 480){
    stickyEl.css({
      position: "fixed",
      top: "500px",
      width: stickyWidth + "px",
    });
    stickyEl.addClass("active");
    if ( sct > targetOST - 200) {
      stickyEl.css({
        position: "relative",
        top: "auto",
        width: "auto",
      });
      stickyEl.css({
        // paddingTop: "200px",
        paddingBottom: 0,
      });
    } else {
      stickyEl.css({
        position: "relative",
        top: "auto",
        width: "auto",
      });
      stickyEl.removeClass("active");
      target.css({
        paddingTop: 0,
        // paddingBottom: "200px",
      });
    }
  }
});

//480px 이상 애니메이션
$(window).scroll(function(){
  if($(window).width() > 480){
    if(toggle_ams.offset().top ){
      setTimeout(function(){
          toggle_ams.stop().animate({
              // width : '100%',
              // borderRadius: '0',
              // height : '50%',
          }, 3000)
          toggle_lam.addClass("fiexd");
          toggle_amf.addClass("fiexd");
      },3000);

  }  
  if (
      $(window).scrollTop() > 0
    ) {
      setTimeout(function () {
          pearl.stop().animate(
          {
            width: "100%",
          },
          1000
        );
      });
  }
    if(monitor.offset().top - 500){
      setTimeout(function(){
          monitor.stop().animate({
              width : '100%',
          }, 3000)
      },3000);
  }  
  if(display.offset().top){
    display_text.addClass('opacity')
    displays.addClass('opacity')
  }  
  }
    
})