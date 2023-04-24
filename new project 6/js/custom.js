$(document).ready(function(){
    console.log("document ready");


    $(".hamburger").on("click",function(){
      $(this).toggleClass("active");
      $(".mobile").toggleClass("active")
    });

  
    $(".your-class").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
     
  

});

$(window).on('load',function() {
    console.log("Window Load");
});

$(window).resize(function(){
    console.log("document resiez");
});


