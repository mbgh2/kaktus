$(document).ready(function () {
   $('.btn__header').click(function() {
      $('.btn__header').removeClass('btn--green');
      $(this).addClass('btn--green');
   });
   $('.header__slider').slick({
      prevArrow:"<button type='button' class='slick-btn btn-prev'><p class='btn-subtitle'>Previous</p><p class='btn-title'>Kaktus Plant</p></button>",
      nextArrow:'<button type="button" class="slick-btn btn-next btn--green"><p class="btn-subtitle">Next</p><p class="btn-title">Rahasia Plant</p></button>'
   });
   $('.featured__content').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
      responsive: [
         {
           breakpoint: 1201,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1,
             infinite: true,
             dots: false,
             arrows: false,
             variableWidth: false,
           }
         },
         {
            breakpoint: 1101,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              variableWidth: false,
            }
          },
          {
            breakpoint: 591,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              variableWidth: false,
            }
          },
          {
            breakpoint: 451,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              variableWidth: false,
            }
          },
       ]
   });
   $('.slick-btn').click(function(){
      $('.slick-btn').removeClass('btn--green');
      $(this).addClass('btn--green');
   });




});



