$(document).ready(function(){
    new WOW().init();
    let menu = $('.nav > ul > li');
    menu.mouseenter(function(){
        $(this).addClass('active');
    });

    menu.mouseleave(function(){
        $(this).removeClass('active');
    });

    let open = $('.header .open'),
        close = $('.drawer .close');
        
    open.click(function(){
        $('.drawer').addClass('active');
    });

    close.click(function(){
        $('.drawer').removeClass('active');
    });
    let header = $('.header');
    let nav = $(header).find('ul').children('li');
    let dotMenu = $('.container .dot-menu ul li');
    let sec = $('.sec');
    let topBtn = $('#contact .top-btn');

    topBtn.click(function(e){
        e.preventDefault();
        $('html, body').animate({'scrollTop' : '0'},600, 'easeInBack');
    });
    nav.click(function(e){
        let navIndexNum = $(this).index();
        let secPosY = sec.eq(navIndexNum).offset().top;

        e.preventDefault();
        nav.removeClass('on');
        $(this).addClass('on');
        $('html, body').animate({'scrollTop' : secPosY },800,'easeInOutBack');
    });
    
    $(window).scroll(function(){
        let wScrollT = $(window).scrollTop();
        let headerH = $('#header').height();

        if( wScrollT >= headerH ){
            header.addClass('on');
            topBtn.addClass('on');
        }else{
            header.removeClass('on');
            topBtn.removeClass('on');
        }
        
        sec.each(function(i){
            let secPosY = sec.eq(i).offset().top;
            let newSecPosY = secPosY - 200;

            if( wScrollT >= newSecPosY ){
                nav.removeClass('on');
                nav.eq(i).addClass('on');

                dotMenu.removeClass('on');
                dotMenu.eq(i).addClass('on');
            }
        })// each

    });

});