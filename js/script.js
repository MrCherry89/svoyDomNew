$(document).ready(function () {
  $(".info-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          dots: true,
          arrows: false,
          infinite: false,
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 501,
        settings: {
          dots: true,
          arrows: false,
          infinite: false,
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".images-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".images-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".images-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
    },
    callbacks: {
      open: function () {
        $("html").css("overflow", "hidden");
      },
      close: function () {
        $("html").css("overflow", "auto");
      },
    },
  });

  $(".popup-gallery2").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
    },
    callbacks: {
      open: function () {
        $("html").css("overflow", "hidden");
      },
      close: function () {
        $("html").css("overflow", "auto");
      },
    },
  });

  $(window).scroll(function () {
    var sticky = $(".top-scroll"),
      scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass("show");
    else sticky.removeClass("show");
  });

  $(".top-scroll").smoothScroll({
    speed: 1000,
  });

  $(".white-btn-olen").smoothScroll({
    speed: 1000,
  });

  $(".images-slider2").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".images-slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".images-slider-wrap2 .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".select-text").select2({
    placeholder: "Выберите",
    minimumResultsForSearch: -1,
  });

  $(".main-menu li button").on("click", function () {
    $(this).closest("li").find(".sub-menu").toggleClass("open");
  });

  $(".search-options button").click(function () {
    $(".info-wrap2 .left-info .hide").toggleClass("show");
    if ($(".info-wrap2 .left-info .hide").hasClass("show")) {
      $(this).text("Свернуть параметры поиска");
    } else {
      $(this).text("Параметры поиска");
    }
    return false;
  });

  $(".banner-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: $(".banner-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".banner-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 3,
          infinite: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
          infinite: true,
          variableWidth: true,
        },
      },
    ],
  });

  $newsIn = false;
  function slider2() {
    if ($(window).width() < 1025) {
      if (!$newsIn) {
        $(".news-in-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 501,
              settings: {
                dots: true,
                arrows: false,
                infinite: false,
                variableWidth: false,
                slidesToShow: 1,
              },
            },
          ],
        });
        $newsIn = true;
      }
    } else if ($(window).width() > 1025) {
      if ($newsIn) {
        $(".news-in-slider").slick("unslick");
        $newsIn = false;
      }
    }
  }

  slider2();

  $(window).on("resize", function () {
    slider2();
  });

  $news = false;
  function slider3() {
    if ($(window).width() < 1025) {
      if (!$news) {
        $(".news-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 501,
              settings: {
                dots: true,
                arrows: false,
                infinite: false,
                variableWidth: false,
                slidesToShow: 1,
              },
            },
          ],
        });
        $news = true;
      }
    } else if ($(window).width() > 1025) {
      if ($news) {
        $(".news-slider").slick("unslick");
        $news = false;
      }
    }
  }

  slider3();

  $(window).on("resize", function () {
    slider3();
  });

  $(".drop-menu").on("click", function () {
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".okey").on("click", function () {
    $(".fixed-block").addClass("hide");
    $("body, html").css({ overflow: "visible" });
  });

  $(".tab-menu li button").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  $(".favorite-icon").on("click", function () {
    $(this).addClass("remove");
  });

  $(".favorite-icon2").on("click", function () {
    $(this).addClass("add");
  });

  $(".favorite-icon3").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("add");
  });

  $(".load-more").on("click", function () {
    $(".news-items .news-item").removeClass("hide");
  });

  $(".accordion-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find("span").hasClass("minus")) {
      $(this).find("span").removeClass("minus");
    } else {
      $(".accordion-list-item span").removeClass("minus");
      $(this).find("span").addClass("minus");
    }
    $(".accordion-list-item").removeClass("opened");
    $(".item-body").removeClass("active");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .addClass("active");
    $(this).closest(".accordion-list-item").addClass("opened");
    $(".item-body:not(.active)").slideUp();
    $(".accordion-list-item:not(.opened)").removeClass("active");
    $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
    $(this).closest(".accordion-list-item").toggleClass("active");
  });

  $(".tabs-menu > li a").on("click", function (e) {
    e.preventDefault();
    $(".tabs-menu > li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-wrap .tab-content").removeClass("active");
    $(".tab-content-wrap .tab-content").eq(index).addClass("active");

    var selectedTab = $(this).closest("li").data("index");

    $("#tab-select").val(selectedTab);
    $("#tab-select").trigger("change");
  });

  $("#tab-select").on("change", function (e) {
    var selectedTab = $(this).val();
    var index = parseInt($(this).val()) - 1;

    $(".tabs-menu > li").removeClass("active");
    $(".tabs-menu > li").eq(index).addClass("active");
    $(".tab-content-wrap .tab-content").removeClass("active");
    $(".tab-content-wrap .tab-content").eq(index).addClass("active");
  });

  $(".section-container .sections").on("click", function () {
    $(".section-container .sections").removeClass("active");
    $(this).addClass("active");
  });

  $(".links button").hover(function () {
    $(".links button").removeClass("active");
    $(this).addClass("active");
    var value = $(this).attr("data-src");
    $(".hover-img-wrap img").attr("src", value);
  });

  gsap.to(".text-animate svg", {
    scale: 72,
    duration: 4,
    x: "27%",
    scrollTrigger: {
      scrub: -1,
      start: "top top",
      end: "bottom",
      pin: ".text-animate",
    },
    onComplete: function () {
      $(".gsap-wrapper").addClass("hidden");
      $(".animate-wrap").addClass("visible");
    },
    onUpdate: function () {
      if ($(".gsap-wrapper").hasClass("hidden")) {
        $(".gsap-wrapper").removeClass("hidden");
        $(".animate-wrap").removeClass("visible");
      }
    },
  });

  $(window).scroll(function () {
    var sticky = $(".fixed-header"),
      scroll = $(window).scrollTop();

    if (scroll >= 10) sticky.removeClass("fix");
    else sticky.addClass("fix");
  });

  gsap.to(".our-winners .wrapper", {
    opacity: 0.4,
    scale: 0.4,
    duration: 1,
    scrollTrigger: {
      trigger: ".animate-wrap",
      scrub: -1,
      start: "top top",
    },
  });

  $(window)
    .scroll(function () {
      var $window = $(window),
        $body = $(".infos-wrap"),
        $panel = $(".info");

      var scroll = $window.scrollTop() + $window.height() / 3;

      $panel.each(function () {
        var $this = $(this);

        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });
          $body.addClass("color-" + $(this).data("color"));
        }
      });
    })
    .scroll();

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".radio-wrapper .top").on("click", function (e) {
    e.stopPropagation();
    $(this).closest(".radio-wrapper").find(".bottom").toggleClass("open");
  });

  $(".bottom").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".bottom").removeClass("open");
  });

  // новый скрипт

  $(".banner-slider2").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".banner-slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".banner-slider-wrap2 .slider-navigation .slick-next"),
  });

  $(".gallery-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".gallery-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".gallery-slider-wrap .slider-navigation .slick-next"),
    centerMode: true,
    speed: 700,
    cssEase: "ease-in-out",
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".main-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".main-slider-wrap  .olen-slider-navigation .slick-prev"),
    nextArrow: $(".main-slider-wrap  .olen-slider-navigation .slick-next"),
    speed: 700,
    cssEase: "ease-in-out",
  });

  $(".main-slider2").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".main-slider-wrap2  .olen-slider-navigation .slick-prev"),
    nextArrow: $(".main-slider-wrap2  .olen-slider-navigation .slick-next"),
    speed: 700,
    cssEase: "ease-in-out",
  });

  $(".gallery-slider2").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".gallery-slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".gallery-slider-wrap2 .slider-navigation .slick-next"),
    centerMode: true,
    speed: 700,
    cssEase: "ease-in-out",
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".gakku-planing-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".gakku-planing-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".gakku-planing-slider-wrap .slider-navigation .slick-next"),
    speed: 700,
    cssEase: "ease-in-out",
  });

  var swiper = new Swiper(".swiper-container", {
    // spaceBetween: 30,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 1000,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slideToClickedSlide: true,
  });

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    centeredSlidesBounds: false,
    slideToClickedSlide: false,
    breakpoints: {
      // when window width is <= 767px
      767: {
        slidesPerView: "auto",
        centeredSlides: true,
        centeredSlidesBounds: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  });

  $(".gallery-slider3").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".gallery-slider-wrap3 .slider-navigation .slick-prev"),
    nextArrow: $(".gallery-slider-wrap3 .slider-navigation .slick-next"),
    centerMode: true,
    speed: 700,
    cssEase: "ease-in-out",
    variableWidth: true,
  });

  $(".qaiyndy-banner-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
    ],
  });

  $(".slider-for2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav2",
    focusOnSelect: true,
    prevArrow: $(
      ".planning-solutions-wrap .olen-slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".planning-solutions-wrap .olen-slider-navigation .slick-next"
    ),
  });
  $(".slider-nav2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for2",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
    ],
  });

  $(".olen-info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 700,
    fade: true,
    cssEase: "ease-in-out",
    prevArrow: $(".olen-info-slider-wrap .olen-slider-navigation .slick-prev"),
    nextArrow: $(".olen-info-slider-wrap .olen-slider-navigation .slick-next"),
  });

  $(".tab").on("click", function () {
    var tabId = $(this).data("tab");

    $(".tab").removeClass("active");
    $(this).addClass("active");

    $(".tab-content").removeClass("active");
    $('.tab-content[data-content="' + tabId + '"]').addClass("active");
  });

  // Устанавливаем активную первую вкладку по умолчанию
  $(".tab:first").addClass("active");
  $(".tab-content:first").addClass("active");

  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => {
        pane.classList.remove("active");
        pane.classList.remove("fade-in");
      });

      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active", "fade-in");
    });
  });

  $(".tab2").on("click", function () {
    var tabId = $(this).data("tab");

    $(".tab2").removeClass("active");
    $(this).addClass("active");

    $(".tab-content2").removeClass("active");
    $('.tab-content2[data-content="' + tabId + '"]').addClass("active");
  });

  // Устанавливаем активную первую вкладку по умолчанию
  $(".tab2:first").addClass("active");
  $(".tab-content2:first").addClass("active");

  const tabButtons2 = document.querySelectorAll(".tab-button");
  const tabPanes2 = document.querySelectorAll(".tab-pane");

  tabButtons2.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      tabButtons2.forEach((btn) => btn.classList.remove("active"));
      tabPanes2.forEach((pane) => {
        pane.classList.remove("active");
        pane.classList.remove("fade-in");
      });

      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active", "fade-in");
    });
  });

  $(".tab3").on("click", function () {
    var tabId = $(this).data("tab");

    $(".tab3").removeClass("active");
    $(this).addClass("active");

    $(".tab-content3").removeClass("active");
    $('.tab-content3[data-content="' + tabId + '"]').addClass("active");
  });

  // Устанавливаем активную первую вкладку по умолчанию
  $(".tab3:first").addClass("active");
  $(".tab-content3:first").addClass("active");

  const tabButtons3 = document.querySelectorAll(".tab-button");
  const tabPanes3 = document.querySelectorAll(".tab-pane");

  tabButtons2.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      tabButtons3.forEach((btn) => btn.classList.remove("active"));
      tabPanes3.forEach((pane) => {
        pane.classList.remove("active");
        pane.classList.remove("fade-in");
      });

      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active", "fade-in");
    });
  });

  $(".gakku-drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".gakku-mobile-menu").toggleClass("open");
    $(".gakku-header").toggleClass("bg");
    $("body, html").toggleClass("overflow");
  });

  $(".layouts-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    speed: 1000,
    focusOnSelect: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".gakku-banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".images-slider3").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".images-slider-wrap3 .slider-navigation .slick-prev"),
    nextArrow: $(".images-slider-wrap3 .slider-navigation .slick-next"),
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  $(".popup-gallery2").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  $(".popup-layouts").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  AOS.init();
});
