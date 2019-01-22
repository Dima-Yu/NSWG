$(document).ready(function(){
  $('.js-members-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="slick-prev"></a>',
    nextArrow: '<a href="#" class="slick-next"></a>',
    responsive: [
      {
        breakpoint: 984,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
  });
});
