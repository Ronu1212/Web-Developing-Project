$(document).ready(function(){
    console.log("document ready");


    $('.slick-slider').slick({
        dots: true,
        infinite: false,
        initialSlide: 1,
        centerMode: true,
        variableWidth:  true,
        adaptiveHeight: false,
        speed: 1000,
        prevArrow: $(".prev-arrow"),
        nextArrow: $(".next-arrow"),
        appendDots: $('.slick-slider-dots'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth:  false,
                    initialSlide: 0,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $(".hamburger").on("click",function(){
        $(this).toggleClass("active");
        $(".mobile-menu").toggleClass("active")
      });
  
  

});

$(window).on('load',function() {
    console.log("Window Load");
});

$(window).resize(function(){
    console.log("document resiez");
});


