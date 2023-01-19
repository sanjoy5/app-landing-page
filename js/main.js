
$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
})

$(document).ready(function(){
    // navbar shrink 

    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }else{
            $(".navbar").removeClass("navbar-shrink");
        }
    })

    // video popup 

    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click",function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
              if( $("#player-1").attr("src")==""){
                $("#player-1").attr("src",videoSrc);
              }
        }
    })




    // features owl carousel 

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
              
            }
        }
    })



    // Screenshot section owl carousel 

    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
              
            }
        }
    })


    // testimonials section owl carousel 

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
              
            }
        }
    })



    // Team section owl carousel 

    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
              
            }
        }
    })


    // Page Scrolling - ScrollIt 


    $.scrollIt({
        topOffset: -50,
    });

    // Navbar Collapse 
    $(".nav-link").on("click",function(){
        $(".navbar-collapse").collapse("hide");
    })


    // Toggle Theme - light and dark mode 

    function toggleTheme(){

        if(localStorage.getItem('sanju-theme') !== null){
            if(localStorage.getItem('sanju-theme')==='dark'){
                $("body").addClass('dark');
            }else{
                $("body").removeClass('dark');
            }
        }

        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("sanju-theme","dark");
        }else{
            localStorage.setItem("sanju-theme","light");
        }
        updateIcon();
    })

    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");

        }else{
            $(".toggle-theme i").addClass("fa-moon");
            $(".toggle-theme i").removeClass("fa-sun");
        }
    }

})