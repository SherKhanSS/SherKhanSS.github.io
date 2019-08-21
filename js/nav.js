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

$(".site-list__item").click(function() {
  var index = $(this).parent().children().index(this);
  $('.site-list__item').removeClass('site-list__item--active');
  $('.site-list__item:nth-child(' + (index + 1) + ')').addClass('site-list__item--active');
});

$(".sub-nav__item").click(function() {
  var index = $(this).parent().children().index(this);
  $('.sub-nav__item').removeClass('sub-nav__item--active');
  $('.sub-nav__item:nth-child(' + (index + 1) + ')').addClass('sub-nav__item--active');
});
