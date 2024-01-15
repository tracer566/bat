const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const closeBtn = document.querySelector('.navigation__close');
const pagination = document.querySelector('.pagination');
// const sliderThumbs = document.querySelector('.slider-thumbs');
const closeSliderThumbs = document.querySelector('.pagination__arrow');

burger.addEventListener('click', () => {
  navigation.classList.add('navigation_active')
});

closeBtn.addEventListener('click', () => {
  navigation.classList.remove('navigation_active')
});

closeSliderThumbs.addEventListener('click', () => {
  pagination.style.display = 'none'
});


try {
  // когда один слайдер,можно .swiper передать
  const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    slidesPerView: 3,
    // расстояние между слайдерами
    spaceBetween: 20,
    centeredSlides: true,
    loopedSlides: 6,
  });

  // делает чтобы клик по нижним,открывал нужный верхний
  sliderThumbs.on('click', function (swiper) {
    swiper.slideTo(swiper.clickedIndex);
  });

  const sliderMain = new Swiper('.slider-main', {
    loop: true,
    // thumbs: {
    //   swiper: sliderThumbs
    // }
    spaceBetween: 20,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    loopedSlides: 6,
  });

  const sliderVideo = new Swiper('.slider-video', {
    loop: true,
    // thumbs: {
    //   swiper: sliderThumbs
    // }

    spaceBetween: 20,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    loopedSlides: 7
  });

  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;
} catch {
  console.log('Слайдера нет на этой странице');
}