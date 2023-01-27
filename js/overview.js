let imgs = $('h3[class*="animate__"]');
imgs.css({ visiblity: "hidden" });
console.log(imgs);
$(window).scroll(() => {
  imgs.each(function () {
    if ($(this).offset().top - 500 < $(window).scrollTop()) {
      let effect = $(this).attr("data-effect");
      console.log(effect);
      $(this).css({ visiblity: "visible" });
      $(this).addClass(effect);
    }
  });
});
