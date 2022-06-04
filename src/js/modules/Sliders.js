const Sliders = (function () {
  "use strict";
  const featuresSlider = $(".js-features-slider");

  return {
    initFeaturesSlider: function () {
      featuresSlider.slick({
        dots: false,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        focusOnSelect: true,
      });
    },
    init: function () {
      Sliders.initFeaturesSlider();
    },
  };
})();

export default Sliders;
