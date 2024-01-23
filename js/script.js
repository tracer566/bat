
// бургер
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const closeBtn = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
  navigation.classList.add('navigation_active')
});

closeBtn.addEventListener('click', () => {
  navigation.classList.remove('navigation_active')
});

// closeSliderThumbs.addEventListener('click', () => {
//   pagination.style.display = 'none'
// });

// звук
try {
  const mute = document.querySelector('.mute__checkbox');
  // console.log('mute55: ', mute);

  // const params = new URLSearchParams(window.location.search).get('id');

  let audio
  if (window.location.search.substring(1) == 'id=1') {
    audio = new Audio('audio/nick-arundel-inner-demon.mp3');
  } else {
    audio = new Audio('audio/waterTower.mp3');
  }

  const checkMute = () => {
    if (mute.checked) {
      audio.play().catch(() => {
        mute.checked = false;
      });
    } else {
      audio.pause();
    }
  };

  // checkMute();

  if (mute) {
    setTimeout(checkMute, 4000)
  }

  mute.addEventListener('change', checkMute);
} catch {
  console.log('Музыки нет');
}

try {
  // когда один слайдер,можно .swiper передать
  const sliderThumbs = new Swiper('.slider-thumbs', {
    // loop: true,
    slidesPerView: 3,
    // расстояние между слайдерами
    spaceBetween: 20,
    centeredSlides: true,
    loopedSlides: 7,
  });

  // делает чтобы клик по нижним,открывал нужный верхний
  sliderThumbs.on('click', function (swiper) {
    swiper.slideTo(swiper.clickedIndex);
    // console.log(swiper.clickedIndex)
  });

  const sliderMain = new Swiper('.slider-main', {
    // loop: true,
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
    loopedSlides: 7,
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
    // loopedSlides: 7
  });

  // синхронизация слайдеров
  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;

  // ставит видео н паузу при переключении слайдера
  const videos = document.querySelectorAll('video');

  sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i += 1) {
      videos[i].pause();
    }
  });

  const pagination = document.querySelector('.pagination');
  const paginationArrow = document.querySelector('.pagination__arrow');

  paginationArrow.addEventListener('click', () => {
    pagination.classList.toggle('pagination_active')
  });

} catch {
  console.log('Слайдера нет на этой странице');
}