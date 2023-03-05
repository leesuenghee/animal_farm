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
        scb.find('figure').addClass('scale');
        sctw.addClass('active');
    }else {
        scb.find('figure').removeClass('scale');
        sctw.removeClass('active');
    }
});


/* SECTION2 지역사회활동 */
let s2p = $('.social_s2 p');

$(window).scroll(()=>{
    if($(window).scrollTop() > s2p.eq(0).offset().top - 400){
        s2p.eq(0).addClass('active');
    }else {
        s2p.eq(0).removeClass('active');
    }
    if($(window).scrollTop() > s2p.eq(1).offset().top - 300){
        s2p.eq(1).addClass('active');
    }else{
        s2p.eq(1).removeClass('active');
    }
});


/* SECTION3 지역사회활동 */
let s3SlideWrap = $('.s3_slidewrapper'),
    s3Slides = s3SlideWrap.find('.s3_slides'),
    s3Slide = s3Slides.find('li'),
    s3CurrentIdx = 0,
    s3Pager = $('.s3_title_wrapper .pager').find('a'),
    prevBtn =  s3SlideWrap.find('> a').filter(':first-of-type'),
    nextBtn =  s3SlideWrap.find('> a').filter(':last-of-type');


    s3Slide.each(function(i){
        $(this).css({left:`${i*100}%`});
    });

    prevBtn.click((e)=>{
        e.preventDefault();
        if(s3CurrentIdx === 0){
            s3Slides.css({left:-s3Slide.length*100+'%'});
            s3CurrentIdx = s3Slide.length;
        }
        s3GotoSlide(s3CurrentIdx-1);
    });
    nextBtn.click((e)=>{
        e.preventDefault();
        if(s3CurrentIdx === s3Slide.length - 1){
            s3Slides.css({left:'0%'});
            s3GotoSlide(0);
            s3CurrentIdx = 0;
        }
        s3GotoSlide(s3CurrentIdx+1);
    });

    s3Pager.click((e)=>{
        e.preventDefault();
        let idx = $(e.target).index();
        console.log(idx);
        s3GotoSlide(idx);
    });


    function s3GotoSlide(i){                     
        s3Slides.stop().animate({left:`${-i*100}%`},500);
        s3CurrentIdx = i;
    }

    /* SECTION4 나눔경영 */

    let sc4tWrap = sc4.find('.s4_title_wrapper'),
        sc4cWrap = sc4.find('.s4_contents_wrapper');

    // $(window).scroll(()=>{
    //     if($(this).scrollTop() >= sc4.offset().top){
    //         sc4tWrap.css({position:'sticky'});
    //     }else if($(this).scrollTop() >= sc4cWrap.offset().bottom){
    //         sc4.css({position:'relative'});
    //     }
    // });

    var swiper = new Swiper(".s4_slidewrapper .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
        480: {
        slidesPerView: 3,
        spaceBetween: 20
        }
    }
    });
