const offers_swiper = new Swiper(".voolt-offers .swiper-container", {
  direction: "vertical", // Change to vertical
  slidesPerView: 3, // Only show one column at a time
  spaceBetween: -10, // Adjust spacing between slides
  loop: true, // Loop the carousel,
  centeredSlides: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    567: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
