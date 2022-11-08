$(document).ready(function(){
  
  var swiper = new Swiper("#main-slide", {
      loop: true,
        autoplay: {
        delay: 2000,
        },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    });

  let con1tabMn = $('#main-con1 .tab-menu li a'),
      con1tabCon = $('#main-con1 .tab-con');

     con1tabMn.click(function(e){
      e.preventDefault();
      let con1ShowTabCon = $(this).attr('href');

      con1tabCon.hide();
      $(con1ShowTabCon).show();
      $(this).parent().addClass('on');
      $(this).parent().siblings().removeClass('on');
  });

  let con2tabMn = $('#main-con2 .tab-menu li'),
      con2tabCon = $('#main-con2 .tab-con');

   con2tabMn.click(function(e){
      e.preventDefault();
      let con2ShowTabCon = $(this).attr('data-tabCon');

      con2tabCon.hide();
      $( '#' + con2ShowTabCon ).show();
  
      $(this).addClass('on');
      $(this).siblings().removeClass('on');
    });

});
