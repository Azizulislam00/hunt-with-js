$(document).ready(function () {
//  banner slider
  $(".banner-bg").slick({
    autoplay: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    prevArrow: '<i class="fa fa-arrow-left slidPrv pre-slide-btn"></i>',
    nextArrow: '<i class="fa fa-arrow-right slidPrv next-slide-btn"></i>',
    fade: true,
    pauseOnHover: false,
  });

  // service start
  $('.service-slider-bg').slick({
    arrows: true,
    slidesToShow: 3,
    vertical: true,
    slidesToScroll: 1,
    verticalSwiping: true,
    prevArrow: '<i class="fas fa-chevron-down pre-btn"></i>',
    nextArrow: '<i class="fas fa-chevron-up next-btn"></i>',
    centerMode: true,
    centerPadding: '0px',
    speed: 1500,
  });
  // survice end
  $('.sub-section-slick-left').slick({
    arrows: true,
    slidesToShow: 3,
    vertical: true,
    slidesToScroll: 1,
    verticalSwiping: true,
    prevArrow: '<i class="fas fa-chevron-down pre-btn"></i>',
    nextArrow: '<i class="fas fa-chevron-up next-btn"></i>',
    centerMode: true,
    centerPadding: '0px',
    speed: 1500,
    asNavFor: '.sub-section-slick-right',
  });


  $('.sub-section-slick-right').slick({
    arrows: false,
    slidesToShow: 1,
    vertical: true,
    slidesToScroll: 1,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '0px',
    speed: 1,
    asNavFor: '.sub-section-slick-left',
  });

  // sub service end
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });
  // counter js end
  //back to top button start;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 50) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
    //nav fix
    if (scrolling > 50) {
      $('nav').addClass('nav-fix');
    } else {
      $('nav').removeClass('nav-fix');
    }
  });

  $('.back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 1500);
  });
  //back to top button end
  // $('nav .navber .list ul li').click(function() {
  //   $('this').addClass('active');
  // });
  //animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
html_body.animate({
scrollTop: target.offset().top - 90
}, 1500);
return false;
}
}
});
});