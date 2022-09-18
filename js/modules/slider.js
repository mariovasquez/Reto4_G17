const slider = () => {

  const swiper = new Swiper('#heroSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperNewReleasesAlbums = new Swiper('#newReleasesSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '#arrowRight1',
      prevEl: '#arrowLeft1',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    }
  });

  const swiperPopularAlbums = new Swiper('#popularSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '#arrowRight2',
      prevEl: '#arrowLeft2',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    }
  });

};

export default slider;