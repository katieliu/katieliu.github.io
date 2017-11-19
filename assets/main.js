window.onload = function() {
var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 4000,
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  window.sr = ScrollReveal();
  sr.reveal('.images', 120);
  sr.reveal('.images-2', 120);
  sr.reveal('.images-3', 120);
  $(window).scroll(function () {
    
        if ($(window).scrollTop() > 280) {
            $('.nav').addClass('fixed');
        }
        if ($(window).scrollTop() < 281 ) {
            $('.nav').removeClass('fixed');
        }
    });
}