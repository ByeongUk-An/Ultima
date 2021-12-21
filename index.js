var swiper = new Swiper('.mySwiper', {
  spaceBetween: 50,
  loop: false,
  slidesPerView: 2.2,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.mySwiper1', {
  spaceBetween: 50,
  slidesPerView: 2.2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.mySwiper2', {
  spaceBetween: 50,
  slidesPerView: 4.1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function () {
  for (let i = 0; i < $('.drop-down-item').length; i++) {
    $('.drop-down-item')
      .eq(i)
      .hover(function () {
        $('.drop-down-img').eq(i).addClass('active');
      });
  }
  for (let j = 0; j < $('.drop-down-item').length; j++) {
    $('.drop-down-item')
      .eq(j)
      .mouseleave(function () {
        $('.drop-down-img').eq(j).removeClass('active');
      });
  }

  $('.hambuger').click(function () {
    // $('.drop-down').toggleClass('active');
    $('.drop-down').slideToggle();
    $(this).css('display', 'none');
    $('.close').css('display', 'block');
  });
  $('.close').click(function () {
    $('.drop-down').slideToggle();
    // $('.drop-down').toggleClass('active');
    $(this).css('display', 'none');
    $('.hambuger').css('display', 'block');
  });

  $(window).scroll(function () {
    if ($('.hambuger').css('display') === 'block') {
      // console.log(headerOffset.top);
      // console.log($(window).scrollTop(), 'window');
      if ($(window).scrollTop() > 110) {
        $('.header-wrap').addClass('active');
      } else {
        $('.header-wrap').removeClass('active');
      }
    }
  });
});

// if ($(window).scrollTop() > headerOffset.top) {
//   $('.header-wrap').css('background', '#fff');
//   $('.hambuger').css('color', '#000');
//   $('.lang').css('color', '#000');
//   $('.logo-svg').css('fill', '#000');
//   $('.enquire-btn').css('border', '1px solid #000');
//   $('.enquire-text').css('color', '#4a4a49');
//   $('.errow-path').css('stroke', '#4a4a49');
// } else {
//   $('.header-wrap').css('background', 'transparent');
//   $('.hambuger').css('color', '#fff');
//   $('.lang').css('color', '#fff');
//   $('.logo-svg').css('fill', '#fff');
//   $('.enquire-text').css('color', '#fff');
//   $('.enquire-btn').css('border', '1px solid #fff');
//   $('.errow-path').css('stroke', '#fff');
// }
