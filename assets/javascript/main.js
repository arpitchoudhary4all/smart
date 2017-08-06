$(document).ready(function(){
   setTimeout(function(){
        $("#preloader").fadeOut(2000);
    },4000);
   var owl = $('.owl-carousel'); 
   owl.owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
    });
    new WOW().init();
    $("#srch").click(function(){
        $("#header .srchbar").slideToggle(1000);
    });
});