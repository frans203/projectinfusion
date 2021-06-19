(function () {
  var _$body = document.querySelector("body");
  _$body.classList.remove("no-js");
  _$body.classList.add("js");

  var menu = new Menu({
    container: ".header__nav",
    toggleBtn: ".header__btnMenu",
    widthEnabled: 1030,
  });

  var CarouselImgs = new Carousel({
    container: ".laptop-slider .slide-show",
    itens: "figure",
    btnPrev: ".prev",
    btnNext: ".next",
  });
  var CarouselQuotes = new Carousel({
    container: ".quote-container .quote-slideshow",
    itens: "figure",
    btnPrev: ".prev",
    btnNext: ".next",
  });
})();
