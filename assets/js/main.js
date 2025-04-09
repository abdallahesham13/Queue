$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on("click", function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("active");
    $(".navbar-nav").toggleClass("active-nav");
    $("body").toggleClass("overflowNone");
  });

  $(".cart").click(function () {
    $(".cart-nav").toggleClass("active");
  });

  $(".cart-nav .close-cart").click(function () {
    $(".cart-nav").removeClass("active");
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".swiper-testimonial", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
    },
  });
  var swiper = new Swiper(".swiper-why", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
    },
  });
});
