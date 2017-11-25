window.onload = function(){
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
          },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}
