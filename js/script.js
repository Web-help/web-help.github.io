$(function() {
    function a() {
        $(".header__burger").removeClass("header__burger--active"), $("body,html").removeClass("hidden"),$(window).width()
    }

    jQuery(document).ready(function() {
        jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
        return false;
        });
    });
    
if ($(window).width() <=1024) {
        $(".header__burger , .scrollto").click( function (){
        $(".header__burger").toggleClass("header__burger--active"), $(".header__burger").hasClass("header__burger--active") ? ($(".header__menu").css("display", "flex"), $("body,html").toggleClass("hidden")) : ($(".header__menu").css("display", "none"), $("body,html").toggleClass("hidden"))
    });
}


     $("body").keydown(a => {
        39 == a.keyCode && (d = (d + 1) % 3, c(d)), 37 == a.keyCode && (d = (d + 2) % 3, c(d)), 27 == a.keyCode && $(".popup").hasClass("popup_active") && ($(".popup__mail").css("display", "none"), $(".popup").toggleClass("popup_active"))
    });
    let g = 0;
    $(".examples__items").on("touchstart", function(a) {
        g = a.originalEvent.touches[0].clientX
    }), $(".examples__items").on("touchend", function(a) {
        g <= a.originalEvent.changedTouches[0].clientX ? (d = (d + 2) % 3, c(d)) : (d = (d + 1) % 3, c(d))
    }), $(".dot-1").click(() => {
        d = 0, c(d)
    }), $(".dot-2").click(() => {
        d = 1, c(d)
    }), $(".dot-3").click(() => {
        d = 2, c(d)
    }), $(".button_click").click(() => {
        $('html, body').css({    overflow: 'auto',    height: 'auto' });
        $(".popup__mail").css("display", "block"), $(".popup").toggleClass("popup_active")
    }), $(".fa-times-circle").click(() => {
        $(".popup").toggleClass("popup_active")
        $('html, body').css({    overflow: 'auto',    height: 'auto' });
    }), $(".input__click").click(() => {
        $('html, body').css({    overflow: 'hidden',    height: '100%' });
        $(".popup__mail").css("display", "none"), $(".popup").toggleClass("popup_active")
    })
});

new WOW().init();

$(document).ready(function() {

    $('.main__button').on('click', function() {
  
      //this scroll withour animations in chrome
      $('.offer').get(0).scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    });
});