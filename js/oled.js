
let sections = $('.main_wrapper_scroll');
// 전역변수

/* let target6 = $(".sticky_target");
let targetHeight6 = target6.height();
let stickyEl6 = target6.find(".content_6_bg");
let stickyElWidth = stickyEl6.width();
let stickyElLeft = stickyEl6.offset().left; */
//어플리케이션 정보 전역변수


$(window).scroll(function() {
    let sct = $(window).scrollTop();
    console.log(sct)
    let content2 = $('.animate__animated');
    let ost_2 = content2.offset().top - 800;
    if(ost_2 < sct) {
        //let className = $('.main_content_container_2').addClass('animate__fadeIn');
        content2.css({visibility:"visible"})
        content2.addClass('animate__fadeIn');
    }

    
    //컨텐츠3번
    let content3 = $('.windowOST_3');
    let ost_3 = content3.offset().top - 200;
    if(ost_3 < sct){
        let lcd_layers = $('.lcd_layer_list li');
        lcd_layers.each(function(idx){
            $(this).css({transform: `translateX(${idx*20 - 20}%`});
        });
        let oled_layers = $('.oled_layer_list li');
        oled_layers.each(function(idx){
            $(this).css({transform: `translateX(${idx*20 - 20}%`});
        })
        }


    //컨텐츠4번
    let content4 = $('.windowOST_4')
    let ost_4 = content4.offset().top + 200;
    if(ost_4 < sct){
        let firstImg = $('.content_4_img_1');
        let secondImg = $('.content_4_img_2');
        firstImg.addClass('active');
        secondImg.removeClass('active');
    }
    
    //컨텐츠5번
   /*  let content5 = $('.windowOST_5')
    let ost_5_1 = content5.offset().top - 250;
    let ost_5_2 = content5.offset().top - 600;
    let ost_5_3 = content5.offset().top - 100;
    if(ost_5_1 < sct){
        let qdImg_1 = $('.qd-oled_container li:first-child');
        qdImg_1.removeClass('active');
    }if(ost_5_2 < sct){
        let qdImg_2 = $('.qd-oled_container li:nth-child(2)');
        qdImg_2.removeClass('active');
    }if(ost_5_3 < sct){
        let qdImg_3 = $('.qd-oled_container li:last-child')
        qdImg_3.removeClass('active');
    } */
    //active 추가 트랜지션 물어보기 .

    //컨텐츠6번









    AOS.init();
    /* let content6 = $('.windowOST_6')//5721 1100     
    let ost6 = content6.offset().top ;
    console.log(ost6)
    console.log(sct)
    if(ost6 + 350 < sct){
        let stikcyTG = $('.sticky_target')
        let bg6 = $('.content_6_bg')
        stikcyTG.addClass('active');
        if(ost6 + 937 < sct){
            bg6.css({transform : `translateY(${-1180}px`})

        }if(ost6 + 1874 < sct){
            bg6.css({transform : `translateY(${-2260}px`})
            
        }if(ost6 + 2811 < sct){
            bg6.css({transform : `translateY(${-3340}px`})
            
        }
        

    } */


});