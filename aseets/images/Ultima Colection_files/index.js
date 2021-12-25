$(function () {
  // Scroll Event
  https: $(window).scroll(function () {
    let cur = $(window).scrollTop();

    if (cur > 1 && $('.menu').css('display') == 'none') {
      $('header').addClass('white');
      $('.wrapper').addClass('show');
      $('.main_vis').addClass('show');
    } else {
      $('header').removeClass('white');
      $('.wrapper').removeClass('show');
      $('.main_vis').removeClass('show');
    }
    if (cur > 4000) {
      $('footer').addClass('show');
    } else {
      $('footer').removeClass('show');
    }
  });

  $('.menu_btn').click(function () {
    $('#line-top').toggleClass('line-top');
    $('#line-mid').toggleClass('line-mid');
    $('#line-bot').toggleClass('line-bot');
    $('.menu').slideToggle();
  });

  $('.menu_list_item').hover(function () {
    let menu_list = $('.menu_list_item');
    let list = $(this).index();

    $(menu_list).eq(list).addClass('hov');

    // $('.img_wrap img').addClass('hov');
  });
  $('.menu_list_item').mouseleave(function () {
    let menu_list = $('.menu_list_item');
    let list = $(this).index();
    $(menu_list).eq(list).removeClass('hov');
  });
  $('.menu_list_item')
    .eq(2)
    .hover(function () {
      $('.txt_wrap').addClass('hov');
    });

  $('.curr_lang').click(function () {
    $('.util_wrap').addClass('active');
  });
  $('.lang_list').click(function () {
    event.preventDefault();
    $('.util_wrap').removeClass('active');
  });

  /* lineup_slide swiper*/
  var swiper = new Swiper('.lineup_slide', {
    spaceBetween: 50,
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });
  /* preview_slide swiper*/
  var swiper = new Swiper('.preview_slide', {
    spaceBetween: 50,
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });
  /*partner_slide swiper */
  var swiper = new Swiper('.partner_slide', {
    spaceBetween: 50,
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });

  // GSAP
  const main_vis = gsap.from('.main_vis .txt_wrap', {
    opacity: 0,
    duration: 2,
    delay: 1.5,
  });

  // text
  const headTxt = new SplitType('.sc_collection h2', { types: 'words, chars' });
  // headTxt.chars
  gsap.from(headTxt.chars, {
    scrollTrigger: {
      trigger: '.sc_collection',
      start: '-800', //트리거 기준잡은 엘리먼트 //윈도우기준
      end: 'top top',
      // markers: true,
    },
    yPercent: 20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.04,
  });

  const headTl = gsap.timeline({
    defaults: {},
  });

  headTl
    .from('header .bar', {
      width: 0,
    })
    .from('header .menu_btn', { opacity: 0, delay: 1 })
    .from('header .lang_box', { opacity: 0 }, 1.2) //1.2 는 나오는시간
    .from('header .logo', { opacity: 0 })
    .from('header .enquire', { opacity: 0 });

  $('.sc_collection').each(function (index, item) {
    const motionEl = $(this).find('.content');
    const triggerEl = $(this).find('.txt_box');
    const headTxtWrap = new SplitType('.sc_collection .txt_box', {
      types: 'words, chars',
    });
    gsap.from(motionEl, {
      scrollTrigger: {
        trigger: '.sc_collection',
        start: '-400', //트리거 기준잡은 엘리먼트 //윈도우기준
        end: 'top top',
        // markers: true,
      },
      yPercent: 80,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });

    gsap.from(headTxtWrap.words, {
      scrollTrigger: {
        trigger: '.sc_collection',
        start: '-800',
        end: 'top top',
      },
      yPercent: 20,
      duration: 0.5,
      opacity: 0,
      stagger: 0.04,
    });
  });

  $('.sc_lineup').each(function (index, item) {
    const lineMotionEl = $(this).find('.lineup_gsap');
    const lineSlideEl = $(this).find('.swiper-slide');
    const linebtnEl = $(this).find('.btn_wrap');
    gsap.from(lineMotionEl, {
      scrollTrigger: {
        trigger: '.sc_lineup',
        start: '-600',
        end: 'top top',
        // markers: true,
      },
      xPercent: -20,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(lineSlideEl, {
      scrollTrigger: {
        trigger: '.sc_lineup',
        start: '-300',
        end: 'top top',
        // markers: true,
      },
      yPercent: 80,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(linebtnEl, {
      scrollTrigger: {
        trigger: '.sc_lineup',
        start: 'top top',
        end: 'top top',
        // markers: true,
      },
      yPercent: 20,
      duration: 2,
      stagger: 0.1,
      opacity: 0,
    });
  });
  $('.sc_service').each(function (index, item) {
    const serviceTxtEl = $(this).find('.title_wrap');
    const serviceGroupEl = $(this).find('.content');
    const serviceBtnEl = $(this).find('.btnlink_wrap');
    gsap.from(serviceTxtEl, {
      scrollTrigger: {
        trigger: '.sc_service',
        start: '-800',
        end: 'top top',
        // markers: true,
      },
      xPercent: -20,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(serviceGroupEl, {
      scrollTrigger: {
        trigger: '.sc_service',
        start: '-700',
        end: 'top top',
        // markers: true,
      },
      yPercent: 80,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(serviceBtnEl, {
      scrollTrigger: {
        trigger: '.sc_service',
        start: 'middle',
        end: 'top top',
        // markers: true,
      },
      yPercent: -200,
      duration: 1,
      stagger: 0.1,
      markers: true,
    });
  });
  $('.sc_preview').each(function (index, item) {
    const previewTitleEl = $(this).find('.title_wrap');
    const previewSlideEl = $(this).find('.swiper-slide');
    const previewBtnEl = $(this).find('.btn_wrap');
    gsap.from(previewTitleEl, {
      scrollTrigger: {
        trigger: '.sc_preview',
        start: '-800',
        end: 'top top',
        markers: true,
      },
      xPercent: -20,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });

    gsap.from(previewSlideEl, {
      scrollTrigger: {
        trigger: '.sc_preview',
        start: '-600',
        end: 'top top',
        markers: true,
      },
      yPercent: 100,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(previewBtnEl, {
      scrollTrigger: {
        trigger: '.sc_preview',
        start: '-600',
        end: 'top top',
        markers: true,
      },
      yPercent: 200,
      duration: 2,
      stagger: 0.1,
      opacity: 0,
    });
  });
  $('.sc_contact').each(function (index, item) {
    const contactTitleEl = $(this).find('.title_wrap');

    gsap.from(contactTitleEl, {
      scrollTrigger: {
        trigger: 'sc_contact',
        start: '-500',
        end: 'top top',
        markers: true,
      },
      xPercent: -20,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
  });
});
