$(document).ready(function(){

    $('#nav-toggle').click(function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('.header-collapse').toggleClass('active');
    });

    // Carousel Principal 

    $('#carousel_principal').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin: 0,
        nav: true,
        navSpeed: 1000,
        navText: ["<i class='fas fa-chevron-left'>","</i><i class='fas fa-chevron-right'></i>"],
        dots: true,
        dotsSpeed: 1000,
        // autoplay: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });
});

