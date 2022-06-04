import noScroll from "../global/noScroll";
import { DOC } from "../global/constants";
const Menu = (function () {
  "use strict";
  // const burgerMenu = $(".js-burger");
  const linkToTarget = $(".js-scroll");
  // const overlay = $(".js-overlay");

  const fixedMenu = $(".js-fixed-menu");
  const menuHeight = fixedMenu.height();
  const scrollHeight = menuHeight;

  function scroll(target) {
    const top = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: top - 15,
      },
      800
    );
  }
  return {
    showFixedMenu: function () {
      DOC.scroll(function () {
        const scrollTop = DOC.scrollTop();
        let percent = 0;
        let shadow = "none";
        let bg = "none";
        if (scrollTop < scrollHeight) {
          percent = (scrollTop / scrollHeight).toFixed(2);
          fixedMenu.removeClass("fixed");
        } else {
          percent = 1;
          shadow = "0px 5px 46px rgba(100, 113, 120, 0.07)";
          bg = "rgba(255, 255, 255, 0.9)";
          fixedMenu.addClass("fixed");
        }
        fixedMenu.css({
          boxShadow: shadow,
          background: bg,
        });
      });
    },
    showMobileMenu: function () {
      burgerMenu.click(function (e) {
        e.preventDefault();
        const target = $($(this).data("target"));
        target.toggleClass("menu-mobile--active");
        burgerMenu.toggleClass("burger--active");
        overlay.toggleClass("active");
        noScroll.toggle();
      });
    },
    scrollToTarget: function () {
      linkToTarget.click(function (e) {
        e.preventDefault();
        noScroll.off();
        const _this = $(this);
        const href = _this.attr("href");
        const target = $(href);

        if (_this.data("target")) {
          const target = $(_this.data("target"));
          scroll(target);
        }
        if (target.length) {
          scroll(target);
        }

        // $(".menu-mobile").removeClass("menu-mobile--active");
        // burgerMenu.removeClass("burger--active");
        // overlay.removeClass("active");
      });
    },
    init: function () {
      // Menu.showMobileMenu();
      Menu.scrollToTarget();
      Menu.showFixedMenu();
    },
  };
})();

export default Menu;
