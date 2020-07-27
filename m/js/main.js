$(document).ready(function(){
    
    
    //모바일 메뉴
    var burger = $('.menu-trigger');

    burger.each(function(index){
    var $this = $(this);
    
    $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active-' + (index+1));
    });
    });
    
    //패널메뉴
    
    $(".menu>a").click(function(){
            var submenu = $(this).next("div");
 
            // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
            if( submenu.is(":hidden") ){
                submenu.slideDown();
            }else{
                submenu.slideUp();
            }
        });
    

    $(window).scroll(function () {
      if($(window).scrollTop() == 0) {
       $('.panel_bg').show();
      } else {
       $('.panel_bg').hide();
      }
     });


});