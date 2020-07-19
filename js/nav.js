jQuery("document").ready(function($){

var navMain = $('.main-nav');
var pageHeaderLink = $('.page-header__link');
var pageHeaderWrapper = $('.page-header__wrapper');
var siteList = $('.site-list');

navMain.removeClass("main-nav--nojs");

$(document).ready(function(){
$('.main-nav__toggle').click(function () {
  if(navMain.hasClass('main-nav--closed')) {
    navMain.removeClass('main-nav--closed');
    navMain.addClass('main-nav--opened');
  } else {
    navMain.addClass('main-nav--closed');
    navMain.removeClass('main-nav--opened');
  }
  });
});

$(document).ready(function(){
$('.page-main').click(function () {
  if(navMain.hasClass('main-nav--opened')) {
    navMain.removeClass('main-nav--opened');
    navMain.addClass('main-nav--closed');
    pageHeaderLink.removeClass('page-header__link--close');
    pageHeaderWrapper.removeClass('nav--open');
  }
  });
});

$(document).ready(function(){
$('.site-list').click(function () {
  if(navMain.hasClass('main-nav--opened')) {
    navMain.removeClass('main-nav--opened');
    navMain.addClass('main-nav--closed');
    pageHeaderLink.removeClass('page-header__link--close');
    pageHeaderWrapper.removeClass('nav--open');
  }
  });
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		pageHeaderWrapper.addClass("page-header--scroll");
	} else {
		pageHeaderWrapper.removeClass("page-header--scroll");
	}
});

$(document).ready(function(){
 $('.main-nav__toggle').click(function () {
 	$('.page-header__link').toggleClass('page-header__link--close');
  $('.page-header__wrapper').toggleClass('nav--open');
 	});
 });

});

// $(".site-list__item").click(function() {
//   var index = $(this).parent().children().index(this);
//   $('.site-list__item').removeClass('site-list__item--active');
//   $('.site-list__item:nth-child(' + (index + 1) + ')').addClass('site-list__item--active');
// });
