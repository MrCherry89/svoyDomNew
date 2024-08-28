$(".gakku-tab-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
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
        variableWidth: true,
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

tabButtons3.forEach((button) => {
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
