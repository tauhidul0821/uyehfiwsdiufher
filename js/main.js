/**
 *
 * ---------------------------------------------------------------------------
 *
 * Template Name: bitpro - HTML5 business template
 * Author : Bitspack
 * Version : 1.0
 *
 * --------------------------------------------------------------------------- 
 *
 */


(function ($) {
    'use strict';
    var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var totop = $('.totop');
    var preloaderID = $('#main-preloader');
    
    
     //    mix itup

     var containerEl = $('#project_mix');
        var mixer = mixitup(containerEl);
    
    /*  =========================
            Scroll Menu
        =========================*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.header-menu').addClass('fixed-menu');
        } else {
            $('.header-menu').removeClass('fixed-menu');
        }
    });


    // testimonial slick - slider 
    $('.client_feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client_main_img',
        dots: false,
        autoplay: true,
    });

    // client slick js activation
    $('.client_main_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.client_feedback',
        fade: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
    });
    $('.team-slick').slick({

        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1100,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    /*  =========================
            Smooth scroll
        ========================= */
    $('.nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    /*  =========================
            Owl Carousel
        ========================= */
    /*---- main slider ----*/
    var slider_pulse = $('.slider-wraper, .testmonial-content');
    slider_pulse.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Owl Carousel Animation
    slider_pulse.on('translate.owl.carousel', function () {
        $('.slider-info h2').removeClass('animated fadeInDown').css('opacity', '0');
        $(".slider-info h3").removeClass("animated slideInRight").css("opacity", "0");
        $('.slider-info p').removeClass('animated fadeInUp').css('opacity', '0');
        $('.slider-info .button').removeClass('animated fadeIn').css('opacity', '0');
    });
    slider_pulse.on('translated.owl.carousel', function () {
        $('.slider-info h2').addClass('animated fadeInDown').css('opacity', '1');
        $(".slider-info h3").addClass("animated slideInRight").css("opacity", "1");
        $('.slider-info p').addClass('animated fadeInUp').css('opacity', '1');
        $('.slider-info .button').addClass('animated fadeIn').css('opacity', '1');
    });


    /*  ======================================
             Skill Progress
        ====================================== */
    $('.progress .progress-bar').css("width",
        function () {
            return $(this).attr("aria-valuenow") + "%";
        }
    )

    $(window).on('load', function () {

        // preloader 

        preloaderID.addClass('ani_1');
        setTimeout(function () {

            $('.main-navbar-top').addClass('main-navbar-top-active');
            preloaderID.fadeOut(800);

        }, 1000);
    });

    //scrollspy
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 10
    });

    // Add smooth scrolling on all links inside the navbar
    $("#bs-example-navbar-collapse-1 a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    // for back to top button



    $('.totop').on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });

    //scrolling function
    $window.on('scroll', function () {

        var $scrolling = $(this).scrollTop();

        if ($scrolling > $sOfset) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    // for video-version
    $(".player").mb_YTPlayer();

   
   

}(jQuery));
