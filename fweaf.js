
  main_vis
  gsap.from('.main_vis .txt_wrap', { opacity: 0, duration: 2, delay: 1.5 });

  // text
  const headTxt = new SplitType('.sc_collection h2', { types: 'words, chars' });
  // headTxt.chars
  gsap.from(headTxt.chars, {
    scrollTrigger: {
      trigger: '.sc_collection',
      start: 'top top', //트리거 기준잡은 엘리먼트 //윈도우기준
      end: 'bottom top',
      // markers: true,
    },
    yPercent: 20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.04,
  });
  // char:단어한개씩 ward: 단어로

  // collection
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

  // index
  // item

  $('.section').each(function (index, item) {
    const motionEl = $(this).find('.content');
    const triggerEl = $(this).find('.group_list');

    gsap.from(motionEl, {
      scrollTrigger: {
        trigger: '.sc_collection .group_list',
        start: 'top top', //트리거 기준잡은 엘리먼트 //윈도우기준
        end: 'bottom top',
        // markers: true,
      },
      yPercent: 20,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
  });


