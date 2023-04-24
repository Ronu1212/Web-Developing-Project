$(document).ready(function(){
    console.log("document ready");


    if( $(window).width() > 991 ){
        $('header .headmenu .menuicon').click(function(){
            $(this).parents('header').find('.menutoggle').animate({'right':0, 'opacity': 1});
            return false;
        });
    }else { 

        $('header .headmenu .menuicon').click(function(){
            if ( ! $(this).hasClass('active') ){
                $(this).parents('header').find('.mobiletoggle').animate({'top':'100px', 'opacity': 1});
                $(this).addClass('active');
            }else {
                $(this).parents('header').find('.mobiletoggle').animate({'top':'-1000px', 'opacity': 0});
                $(this).removeClass('active');
            }
            return false;
        });

        $("a").click(function(){
            var pageId = $(this).attr("data-page");
            $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
          });

        
    }



    $('header .menutoggle .crossicon').click(function(){
        $(this).parents('.menutoggle ').animate({'right': '-100%', 'opacity': 0});
        return false;
    });

    

});

$(window).on('load',function() {
    console.log("Window Load");
});

$(window).resize(function(){
    console.log("document resiez");
});