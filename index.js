var swiper = new Swiper('.mySwiper', {
  spaceBetween: 50,
  loopFillGroupWithBlank: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  observeParents: true,
});

var swiper = new Swiper('.mySwiper1', {
  spaceBetween: 50,
  loopFillGroupWithBlank: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.mySwiper2', {
  spaceBetween: 50,
  // loop: true,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
