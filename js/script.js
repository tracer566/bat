// когда один слайдер,можно .swiper передать
const sliderThumbs = new Swiper('.slider-thumbs', {
  loop: true,
  slidesPerView: 3,
  // расстояние между слайдерами
  spaceBetween: 20,
  centeredSlides: true,
  loopedSlides: 4,
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
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;