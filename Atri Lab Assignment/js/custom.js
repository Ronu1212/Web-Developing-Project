$(document).ready(function(){
    console.log("document ready");

    $('.carousel').carousel({
        interval: 2000
    })

  
  

});

$(window).on('load',function() {
    console.log("Window Load");
});

$(window).resize(function(){
    console.log("document resiez");
});


