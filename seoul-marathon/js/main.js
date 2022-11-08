$(document).ready(function(){

    /* gnb */
    let header = $('#header');
    let gnb = $('.gnb-area #gnb');
    let oneD = gnb.children('li');
    let anchor = oneD.children('a');
    let twoD = oneD.children('.two-depth');
    
    oneD.mouseenter(function(){
        header.addClass('on');
        $(this).addClass('on');
        twoD.show();
    });

    oneD.mouseleave(function(){
        header.removeClass('on');
        $(this).removeClass('on');
        twoD.hide();
    });


    /* 모바일 메뉴 */
    let btnOpen = $('#m-header .menu-open');
    let mMenu = $('#m-menu');
    let btnClose = mMenu.find('.menu-close');
    let m_oneD = mMenu.find('.one-depth');
    let m_twoD = mMenu.find('.two-depth');

    btnOpen.click(function(){
        mMenu.animate({'left': '0'},600);
    });

    btnClose.click(function(){
        mMenu.animate({'left': '-100%'},300);
    });

    m_oneD.click(function(){
        m_twoD.slideUp();
        m_oneD.removeClass('on');

        if( !$(this).next().is(':visible') ){
            $(this).next().slideDown();
            $(this).addClass('on');
        }
    });





    /* 배경이미지 교체 */
    let mCon1LI =$('.main-con-01-list li');
    let bgDiv = $('.main-con-01-bg > div');

    mCon1LI.each(function(indexNum){
        $(this).hover(function(){
            bgDiv.eq(indexNum).stop().animate( { 'opacity': '1' } , 600 );
        }, function(){
            bgDiv.eq(indexNum).stop().animate( {'opacity' : '0'} , 300 );
        });
        
    });

});