$(document).ready(function(){
    ////////////////////////gnb///////////////////////////
    let gnb = $('#gnb'),
        gnbLI = gnb.children('li');
    
    gnbLI.mouseenter(function(){
        $(this).children('.openDiv').stop().fadeIn();
        $(this).addClass('on');
    })

    gnbLI.mouseleave(function(){
        $(this).children('.openDiv').stop().fadeOut();
        $(this).removeClass('on');
    })

    //////////////////swiper 슬라이드////////////////////////

    var swiper = new Swiper(".mainSlide", {
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

    ////////////////tab
    let tabLI = $('.mainCon02 .tabMenu li');

    tabLI.click(function(e){
        e.preventDefault();
        let tabCon = $(this).children('a').attr('href');
        
        $('.tabContent').hide();
        $(tabCon).show();
        tabLI.removeClass('on');
        $(this).addClass('on');
    });
    
});