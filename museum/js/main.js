$(document).ready(function(){
    // swiper 메인슬라이드
    var swiper = new Swiper("#mainSlide", {
        loop : true ,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // gnb
    let oneDepth = $('#header .gnbArea .gnb > li'),
        twoDepth = $(oneDepth).children('.twoD'),
        thrBtn = $(twoDepth).find('.thrBt'),
        gnbBg = $('#header .gnbBg');

    oneDepth.mouseenter(function(){
        twoDepth.show();
        gnbBg.show();
        $(this).addClass('on');
    });

    oneDepth.mouseleave(function(){
        twoDepth.hide();
        gnbBg.hide();
        $(this).removeClass('on');
    });

    $(thrBtn).click(function(){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            $(this).next('.thrD').hide();
        }else{
            $(this).addClass('on');
            $(this).next('.thrD').show();

        }
    })

    // 모바일 메뉴
    let openBt = $('.mHeader .menuBtn'),
        mMArea = $('.mMenuArea'), 
        closeBt = $(mMArea).find('.closeBt'), 
        gnbArea = $(mMArea).children('.gnbArea'),
        oneD = $(gnbArea).children('.oneD'),
        twoD = $(gnbArea).children('.twoD'),
        thrBt = $(twoD).children('.thrBt'),
        thrD = $(twoD).children('.thrD'); 

    openBt.click(function(){
        mMArea.animate({  'left' : '0' }, 600 );
    });

    closeBt.click(function(){
        mMArea.animate({  'left' : '-100%' }, 600 );
    });

    // oneD
    oneD.click(function(){
        twoD.slideUp();
        oneD.removeClass('on');

        if( !$(this).next('.twoD').is(':visible') ){
            $(this).next().slideDown();
            $(this).addClass('on');
        }
    });

    // thrBt
    thrBt.click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('on');
    });

    // 전시영역 배경이미지 교체
    let mCon1LI = $('.mainCon1List > li'),
        mCon1Bg = $('.mainCon1Bg > div');

    mCon1LI.each(function(idx){  
        $(this).hover(function(){ 
            mCon1Bg.eq(idx).fadeIn(600);
        },function(){ 
            mCon1Bg.eq(idx).fadeOut(300);
        }); 
    });

    // top버튼
    let topBtn = $('#wrapper .topBtn');
    topBtn.click(function(e){
        // a태그에 기본링크 실행 안되도록
        e.preventDefault();
        $('html , body').animate({'scrollTop' :  '0' } , 800 , 'easeOutBack');
    });

    // 윈도우가 스크롤되면 시작부분
    $(window).scroll(function(){
        let winScrollT = $(window).scrollTop(),
            mCon1T = $('.mainCon1').offset().top,
            mCon2T = $('.mainCon2').offset().top,
            mCon3T = $('.mainCon3').offset().top,
            footT = $('#footer').offset().top;

        // 스크롤한 값이 mCon1T의 위치값보다 크거나 같다
        // 그리고 && 또는 ||
        // 스크롤한 값이 mCon2T의 위치값보다 작거나 같다

        if(winScrollT >= mCon1T && winScrollT <= mCon2T){
            // mainCon1 애니메이션
            $('.mainCon1 .mainTit').animate({'opacity':'1' , 'top' : '0'},600,'swing');
            $('.mainCon1 .mainTxt').delay(200).animate({'opacity':'1', 'top' : '0'},600,'swing');
            $('.mainCon1 .mainCon1List').delay(400).animate({'opacity':'1', 'top' : '0'},600,'swing');
        }else if(winScrollT >= mCon2T && winScrollT <= mCon3T){
            // mainCon2 애니메이션
            $('.mainCon2 .mainTit').animate({'opacity':'1' , 'top' : '0'},600,'swing');
            $('.mainCon2 .mainTxt').delay(200).animate({'opacity':'1', 'top' : '0'},600,'swing');
            $('.mainCon2 .mainCon2List').delay(400).animate({'opacity':'1', 'top' : '0'},600,'swing');
        }else if(winScrollT >= mCon3T && winScrollT <= footT){
            // mainCon3 애니메이션
            $('.mainCon3 .mainTit').animate({'opacity':'1' , 'top' : '0'},600,'swing');
            $('.mainCon3 .mainTxt').delay(200).animate({'opacity':'1', 'top' : '0'},600,'swing');
            $('.mainCon3 .mainNews').delay(400).animate({'opacity':'1', 'top' : '0'},600,'swing');
        }

        if(winScrollT > 100){
            $('#header').css('position' , 'fixed'); 
            $('#header').addClass('on');   
        }else{
            $('#header').css('position' , 'relative');
            $('#header').removeClass('on'); 
        }
    }); // 윈도우 스크롤되면 의 종료부분

});