$(document).ready(function(){
    let btnLang = $('.lang .btn-lang'),
        langList = btnLang.next('.lang-list');
    
    btnLang.click(function(){
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on');
            langList.hide();
        }else{
            $(this).parent().addClass('on');
            langList.show();
        }
    });

    let btnSch = $('#header .top-area .col2 .btn-sch'),
        schArea = $('#header .sch-area'),
        btnClose = schArea.find('.btn-close');
    
    btnSch.click(function(){
        schArea.stop().slideDown(300);
    });

    btnClose.click(function(){
        schArea.stop().slideUp(300);
    });
    
    let gnb = $('#gnb'),
        gnbLI = gnb.children('.gnb-list').children('li');
        twoD = $('.oneD .sub-menu-wrap > ul > li.twoD  > a');

    gnbLI.mouseenter(function(){
        $(this).children('.sub-menu-wrap').show();
        $(this).addClass('on');
    });

    gnbLI.mouseleave(function(){
        $(this).children('.sub-menu-wrap').hide();
        $(this).removeClass('on');  
    });
    twoD.click(function(e){
        e.preventDefault();
        $(this).next().toggle();
    });

    let depthLInk = $('.sub-top .breadcrum-wrap .depth > a'),
        menuWr = $('.sub-top .breadcrum-wrap .depth .menu-wrap');

    depthLInk.click(function(){
        menuWr.stop().slideUp();
        $(this).next().stop().slideToggle();
    });
    let fre = $('.tab-faq-con ul li .fre'),
        ask = $('.tab-faq-con ul li .ask');
    
    fre.click(function(){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            $(this).next().slideToggle();
        }else{
            $(this).addClass('on');
            let h = $(this).next().find('.ask-txt').innerHeight();
            $(this).next().slideUp();
        }
    });
   
});