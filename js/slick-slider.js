$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $('.single-item').slick({
    dots: true,
    arrows: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 1,
    infinite: false
  });
});