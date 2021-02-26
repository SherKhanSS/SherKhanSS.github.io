"use strict";

const CLIENT_WIDTH = 1279;
const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


const siteListImgs = navMain.querySelectorAll('.site-list__img');
const siteListSubLists = navMain.querySelectorAll('.sub-menu');

const addImgClickListener = (img, list) => {
  img.addEventListener('click', () => {
      img.classList.toggle('site-list__img--activ');
      list.classList.toggle('sub-menu--open');
    });
};

const addListMouseoverListener = (img, list) => {
  img.parentElement.addEventListener('mouseover', () => {
    if (img.classList.contains('main-nav--closed') && list.classList.contains('sub-menu--open')) {
      return;
    }
    img.classList.add('site-list__img--activ');
    list.classList.add('sub-menu--open');
  });
};

const addListMouseoutListener = (img, list) => {
  img.parentElement.addEventListener('mouseout', () => {
    img.classList.remove('site-list__img--activ');
    list.classList.remove('sub-menu--open');
  });
};

for (let i = 0; i < siteListImgs.length; i++) {
  addImgClickListener(siteListImgs[i], siteListSubLists[i]);
  if (document.documentElement.clientWidth > CLIENT_WIDTH) {
    addListMouseoutListener(siteListImgs[i], siteListSubLists[i]);
    addListMouseoverListener(siteListImgs[i], siteListSubLists[i]);
  }
}


const videoItems = document.querySelectorAll('.video__item');

const addVideoMouseoverListener = (item) => {
  item.addEventListener('mouseover', () => {
    item.style.filter = 'grayscale(0)';
  });
};

const addVideoMouseoutListener = (item) => {
  item.addEventListener('mouseout', () => {
    item.style.filter = 'grayscale(1)';
  });
}

for (const item of videoItems) {
  addVideoMouseoverListener(item);
  addVideoMouseoutListener(item);
}
