const swiper = new Swiper(".testimonial .swiper-container", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto", // Auto size based on container
  spaceBetween: 40, // Space between slides
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    // On mobile, show 1 item
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    // On tablets or larger, show 3.5 items
    992: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
