$(document).ready(function(){
    
    //모바일 단말기 확인하여 홈페이지 이동
    var ua = window.navigator.userAgent.toLowerCase();
    if ( /iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {
    document.location.replace('m/index.html');  //홈페이지 경로
    };
    
    //탑버튼
    $(".t_btn").hide(); // 탑 버튼 숨김
    $(function () {
                 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) { // 스크롤 내릴 표시
                $('.t_btn').fadeIn();
            } else {
                $('.t_btn').fadeOut();
            }
        });
                
        $('.t_btn').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);  // 탑 이동 스크롤 속도
            return false;
        });
    });
    
    //모바일 메뉴
    var burger = $('.menu-trigger');

    burger.each(function(index){
    var $this = $(this);
    
    $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active-' + (index+1));
    })
});
});