var swiper2 = new Swiper("#swiper2", {
    breakpoints: {
        10:{
            // spaceBetween:100,
            slidesPerView:1,
        },
        321:{
            // spaceBetween:100,
            slidesPerView:1.25,
        },
        500:{
            // spaceBetween:100,
            slidesPerView:1.75
        },
        800:{
            // spaceBetween:150,
            slidesPerView:1.75,
        },
        1000:{
            // spaceBetween:50,
            slidesPerView:3.5,
        },
        1260:{
            // spaceBetween:50,
            slidesPerView:3.5,
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });




