let imgs = $('h3[class*="animate__"],p[class*="animate__"]');

let toggles = $("#toggle .content");
let toggleHeight = toggles.height();
let toggleOST = toggles.offset().top;
let toggleTs = toggles.find(".ts");
let toggleWidth = toggleTs.width();
let toggleLeft = toggleTs.offset().left;
imgs.css({ visiblity: "hidden" });

console.log(imgs);
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
  // console.log(sct);

  if (sct > toggleOST - 500) {
    toggleTs.css({
      position: "fixed",
      top: "500px",
      width: toggleWidth + "px",
    });
    toggleTs.addClass("active");
    if (sct > toggleOST - 500) {
      toggleTs.css({
        position: "relative",
        top: "auto",
        width: "auto",
      });
      toggles.css({
        paddingTop: "300px",
        paddingBottom: 0,
      });
    } else {
      toggleTs.css({
        position: "relative",
        top: "auto",
        width: "auto",
      });
      toggleTs.removeClass("active");
      toggles.css({
        paddingTop: 0,
        paddingBottom: "300px",
      });
    }
  }
});

// display
