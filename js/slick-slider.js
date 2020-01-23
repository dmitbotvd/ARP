$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $('.single-item').slick({
    dots: true
  });
});