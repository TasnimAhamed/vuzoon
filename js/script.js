$(document).ready(function() {


    $(window).scroll(function(){
        var navFixed = $(window).scrollTop();
        if(navFixed > 100){
            $(".main__menu").addClass("fixed-top fadeInDown");
        }else{
            $(".main__menu").removeClass("fixed-top fadeInDown");
        }
    });


    //Article Carousel Initializer
    $('.all__articles').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    

})
