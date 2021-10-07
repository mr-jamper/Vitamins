$('.sl').slick({
   
    autoplaySpeed:2000,
    speed:2000,
    slidesToShow: 4,
    slidesToScroll:1 ,
    asNavFor: '.sl2',
    // arrows:true,
    centerMode:true,
    focusOnSelect: true,
    infinite:false,
     // dots:true
});
  
  $('.sl2').slick({
    // autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    slidesToShow: 1,
    // centerMode:true,
    arrows:true,

    // centerPadding:'40px',
    // lazyLoad: 'ondemand',
    // rows:2,
    // slidesPerRow:2,
    // cssEase:'ease-in',
    // centerMode:true,
    // dots:true,
    // dotsClass: 'my-dots',
    // asNavFor: '.sl',
    focusOnSelect: true,
     infinite:false,
    //  prevArrow: "<img src='https://svgshare.com/i/aoj.svg' class='prev' alt='1'>",
    // nextArrow: "<img src='https://svgshare.com/i/amG.svg' class='next' alt='2'>",
    
  });

  