const Sliders = (function () {
  "use strict";
  const featuresSlider = $(".js-features-slider");

  return {
    initFeaturesSlider: function () {
      featuresSlider.slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        easing: "linear",
        cssEase: "linear",
        waitForAnimate: false,
        speed: 3000,
        edgeFriction: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        autoSlidesToShow: true,
        variableWidth: true,
      });
    },
    init: function () {
      Sliders.initFeaturesSlider();
    },
  };
})();

export default Sliders;
