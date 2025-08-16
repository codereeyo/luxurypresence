document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 4000 },
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
      1280: { slidesPerView: 5, spaceBetween: 20 },
    }
  });
});