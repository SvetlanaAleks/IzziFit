const Animate = (function () {
  "use strict";

  return {
    animatePromo: function () {
      const controller = new ScrollMagic.Controller();
      var tween = new TimelineMax();
      tween
        .from(".js-promo-title", 0.3, { opacity: 0, ease: Linear.easeIn }, ".5")
        .from(
          ".js-promo-desc",
          0.3,
          {
            opacity: 0,
            ease: Linear.easeIn,
          },
          ".6"
        )
        .from(
          ".js-promo-photo",
          0.3,
          { x: 0, y: 40, opacity: 0, ease: Linear.easeIn },
          "1"
        );

      new ScrollMagic.Scene({
        triggerElement: "#promo",
        reverse: false,
      })
        .setTween(tween)
        .addTo(controller);
    },
    animateFunctions: function () {
      const controller = new ScrollMagic.Controller();
      var tween1 = new TimelineMax();
      var tween2 = new TimelineMax();
      var tween3 = new TimelineMax();
      tween1
        .from(".js-functions-desc-1", 0.5, { opacity: 0, ease: Linear.easeIn })
        .from(
          ".js-functions-photo-1-1",
          0.4,
          {
            x: 0,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        )
        .from(
          ".js-functions-photo-1-2",
          0.5,
          {
            x: 100,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          ".4"
        );
      tween2
        .from(".js-functions-desc-2", 0.4, {
          opacity: 0,
          ease: Linear.easeIn,
        })
        .from(
          ".js-functions-photo-2-1",
          0.4,
          {
            x: 0,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        )
        .from(
          ".js-functions-photo-2-2",
          0.5,
          {
            x: -100,
            y: -200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        );
      tween3
        .from(
          ".js-functions-desc-3",
          0.4,
          { opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-functions-photo-3-1",
          0.4,
          {
            x: 0,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        )
        .from(
          ".js-functions-photo-3-2",
          0.5,
          {
            x: 100,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          ".4"
        );

      new ScrollMagic.Scene({
        triggerElement: ".functions__wrap--1",
        reverse: false,
      })
        .setTween(tween1)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".functions__wrap--2",
        reverse: false,
      })
        .setTween(tween2)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".functions__wrap--3",
        reverse: false,
      })
        .setTween(tween3)
        .addTo(controller);
    },
    animateGame: function () {
      const controller = new ScrollMagic.Controller();
      var tween1 = new TimelineMax();
      var tween2 = new TimelineMax();
      var tween3 = new TimelineMax();

      tween1
        .from(
          ".js-game-desc-1",
          0.4,
          { opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-game-photo-1-1",
          0.4,
          {
            x: -150,
            y: 150,
            scale: 0.8,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        )
        .from(
          ".js-game-photo-1-2",
          0.4,
          {
            x: 100,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          ".4"
        )
        .from(
          ".js-game-photo-1-3",
          0.4,
          {
            x: -100,
            y: -200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          ".4"
        );
      tween2
        .from(
          ".js-game-desc-2",
          0.4,
          { opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-game-photo-2-1",
          0.4,
          {
            x: 0,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        )
        .from(
          ".js-game-photo-2-2",
          0.5,
          {
            x: -100,
            y: -200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          ".4"
        );

      tween3
        .from(".js-game-desc-3", 0.4, { opacity: 0, ease: Linear.easeIn })
        .from(
          ".js-game-photo-3-1",
          0.4,
          {
            x: 0,
            y: 100,
            scale: 0.95,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "0.1"
        );

      new ScrollMagic.Scene({
        triggerElement: ".game__wrap--1",
        reverse: false,
      })
        .setTween(tween1)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".game__wrap--2",
        reverse: false,
      })
        .setTween(tween2)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".game__wrap--3",
        reverse: false,
      })
        .setTween(tween3)
        .addTo(controller);
    },
    animateResult: function () {
      const controller = new ScrollMagic.Controller();
      var tween = new TimelineMax();
      tween
        .from(
          ".js-result-desc",
          0.3,
          { opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-result-photos",
          0.3,
          { x: 100, y: 100, opacity: 0, ease: Linear.easeIn },
          ".2"
        );

      new ScrollMagic.Scene({
        triggerElement: "#result",
        reverse: false,
      })
        .setTween(tween)
        .addTo(controller);
    },
    animateReviews: function () {
      const controller = new ScrollMagic.Controller();
      var tween = new TimelineMax();
      tween
        .from(
          ".js-review-item-1",
          0.3,
          { opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-review-item-2",
          0.3,
          { opacity: 0, ease: Linear.easeIn },
          "0.2"
        )
        .from(
          ".js-review-item-3",
          0.3,
          { opacity: 0, ease: Linear.easeIn },
          "0.4"
        );

      new ScrollMagic.Scene({
        triggerElement: "#reviews",
        reverse: false,
      })
        .setTween(tween)
        .addTo(controller);
    },
    init: function () {
      Animate.animatePromo();
      Animate.animateFunctions();
      Animate.animateGame();
      Animate.animateResult();
      Animate.animateReviews();
    },
  };
})();

export default Animate;
