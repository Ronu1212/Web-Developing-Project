$(document).ready(function(){
    console.log("document ready");

    $('header .headmenu .hamburger-icon').click(function(){
        $(this).parents('.headmenu').find('.primary-nav').animate({'right':0});
        return false;
    });

    $('header .headmenu .close-icon').click(function(){
        $(this).parents('.headmenu').find('.primary-nav').animate({'right': '-100%'});
        return false;
    });

});

$(window).on('load',function() {
    console.log("Window Load");
});

$(window).resize(function(){
    console.log("document resiez");
});