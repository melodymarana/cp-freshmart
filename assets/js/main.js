$(document).ready(function(){
  navbarToggle();
  bannerSlide();
  backToTop();
});

function bannerSlide() {
  $('.banner-slide').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    infinite: true
  });
  $(window).on('resize', function () {
    $('.banner-slide').slick('resize');
  });
}

function navbarToggle() {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })

  $('#navbar-toggler').on('click', function () {
    $('.navbar-account').removeClass('open');
  });

  $('#view-details').on('click', function () {
    $('#navbar-menu').removeClass('.open');
  });
}

function backToTop() {
  var backToTop = $('#back-to-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      backToTop.addClass('show');
    } else {
      backToTop.removeClass('show');
    }
  });
  backToTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
}
