const Animate = (function () {
  "use strict";
  var tween1 = new TimelineMax();
  var tween2 = new TimelineMax();
  var tween3 = new TimelineMax();

  return {
    animateFunctions: function () {
      const controller = new ScrollMagic.Controller();

      tween1
        .from(
          ".js-functions-desc-1",
          0.7,
          { x: -200, y: 200, opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-functions-photo-1-1",
          0.7,
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
          1,
          {
            x: 100,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        );
      tween2
        .from(".js-functions-desc-2", 0.7, {
          x: 100,
          y: 200,
          opacity: 0,
          ease: Linear.easeIn,
        })
        .from(
          ".js-functions-photo-2-1",
          0.7,
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
          1,
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
          0.7,
          { x: -200, y: 200, opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-functions-photo-3-1",
          0.7,
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
          1,
          {
            x: 100,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        );

      new ScrollMagic.Scene({
        triggerElement: ".functions__wrap--1",
      })
        .setTween(tween1)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".functions__wrap--2",
      })
        .setTween(tween2)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".functions__wrap--3",
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
          0.7,
          { x: 200, y: 200, opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-game-photo-1-1",
          0.7,
          {
            x: -200,
            y: 200,
            scale: 0.8,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        )
        .from(
          ".js-game-photo-1-2",
          1,
          {
            x: 100,
            y: 200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        )
        .from(
          ".js-game-photo-1-3",
          1,
          {
            x: -100,
            y: -200,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        );
      tween2
        .from(
          ".js-game-desc-2",
          0.7,
          { x: -200, y: 200, opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-game-photo-2-1",
          0.7,
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
          1,
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
          ".js-game-desc-3",
          0.7,
          { x: 100, y: -100, opacity: 0, ease: Linear.easeIn },
          "=-1"
        )
        .from(
          ".js-game-photo-3-1",
          0.7,
          {
            x: 0,
            y: 100,
            scale: 0.95,
            opacity: 0,
            ease: Linear.easeIn,
          },
          "=-1"
        );

      new ScrollMagic.Scene({
        triggerElement: ".game__wrap--1",
      })
        .setTween(tween1)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".game__wrap--2",
      })
        .setTween(tween2)
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: ".game__wrap--3",
      })
        .setTween(tween3)
        .addTo(controller);
    },
    init: function () {
      Animate.animateFunctions();
      Animate.animateGame();
    },
  };
})();

export default Animate;
