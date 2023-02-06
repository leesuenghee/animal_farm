let scb = $('.sc_banner'),
    scbw = $('.sc_banner_wrapper'),
    sctw = $('.sc_title_wrapper'),
    sc1 = $('.social_s1'),
    sc2 = $('.social_s2'),
    sc3 = $('.social_s3'),
    sc4 = $('.social_s4'),
    sc5 = $('.social_s5');

AOS.init();

/* Main BANNER */

$(window).scroll(()=>{
    if($(this).scrollTop() > 0){
        scb.find('img').addClass('scale');
        sctw.addClass('active');
    }else {
        scb.find('img').removeClass('scale');
        sctw.removeClass('active');
    }
});

// /* SECTION1 함께가요 미래로 */
// $(window).scroll(()=>{
//     if($(this).scrollTop() > sc1.offset().top - 100){
//         sc1.find('img').addClass()
//     }
// });



/* SECTION3 지역사회활동 */
let s3SlideWrap = $('.s3_slidewrapper'),
    s3Slides = s3SlideWrap.find('li'),
    s3CurrentIdx = 0,
    s3Pager = $('.s3_title_wrapper .pager').find('a'),
    prevBtn =  s3SlideWrap.find('a').filter(':first-of-type'),
    nextBtn =  s3SlideWrap.find('a').filter(':last-of-type');

    // s3Slides.each(function(idx){
    //     $(this).css({left:`${idx*100}%`}); 
    // });

    prevBtn.click((e)=>{
        e.preventDefault();
        --s3CurrentIdx;
        s3MoveSlide(s3CurrentIdx);
        if(s3CurrentIdx === 0){
            s3CurrentIdx = s3Slides.length;
        }
    });
    nextBtn.click((e)=>{
        e.preventDefault();
        ++s3CurrentIdx;
        s3MoveSlide(s3CurrentIdx);
        if(s3CurrentIdx === s3Slides.length){
            s3CurrentIdx = 0;
        }
    });

    s3Pager.click((e)=>{
        e.preventDefault();
        let idx = $(this).index();
        s3Slides.eq(idx).fadeIn();
    });

    function s3MoveSlide(){

        let nextIdx = (s3CurrentIdx + 1)%s3Slides.length;
        s3Slides.eq(s3CurrentIdx).fadeOut();
        s3Slides.eq(nextIdx).fadeIn();
        s3Slides.css({zIndex:5});
        s3CurrentIdx = nextIdx;

        // let currentSlide = s3Slides.eq(s3CurrentIdx);
        // let nextSlide = s3Slides.eq(i);
        
        // nextSlide.css({left:'100%'}).animate({left:'0%'},300);

        // currentSlide.animate({left:'-100%'},300);
        
        s3Pager.removeClass('active');
        s3Pager.eq(s3CurrentIdx).addClass('active');
        
    }


/* SECTION4 나눔경영 */

let sc4tWrap = sc4.find('.s4_title_wrapper'),
    sc4cWrap = sc4.find('.s4_contents_wrapper');

$(window).scroll(()=>{
    if($(this).scrollTop() >= sc4.offset().top){
        sc4tWrap.css({position:'fixed'});
    }else if($(this).scrollTop() >= sc4cWrap.offset().bottom){
        sc4.css({position:'relative'});
    }
});