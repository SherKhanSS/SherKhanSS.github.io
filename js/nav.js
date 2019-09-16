var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var pageMain = document.querySelector('.page-main');
var pageHeaderLink = document.querySelector('.page-header__link');
var pageHeaderWrapper = document.querySelector('.page-header__wrapper');

pageMain.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    pageHeaderLink.classList.remove('page-header__link--close');
    pageHeaderWrapper.classList.remove('nav--open');
  }
  // else {
  //   navMain.classList.add('main-nav--closed');
  //   navMain.classList.remove('main-nav--opened');
  // }
});

var siteList = navMain.querySelector('.site-list');

siteList.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    pageHeaderLink.classList.remove('page-header__link--close');
    pageHeaderWrapper.classList.remove('nav--open');
  }
  // else {
  //   navMain.classList.add('main-nav--closed');
  //   navMain.classList.remove('main-nav--opened');
  // }
});

jQuery("document").ready(function($){

	var nav = $('.page-header__wrapper');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			nav.addClass("page-header--scroll");
		} else {
			nav.removeClass("page-header--scroll");
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
//
// $(".sub-nav__item").click(function() {
//   var index = $(this).parent().children().index(this);
//   $('.sub-nav__item').removeClass('sub-nav__item--active');
//   $('.sub-nav__item:nth-child(' + (index + 1) + ')').addClass('sub-nav__item--active');
// });
