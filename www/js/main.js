!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){!function(t){"use strict";var n,i,o=!1;function r(e){if("undefined"!=typeof document&&!o){var t=document.documentElement;i=window.pageYOffset,document.documentElement.scrollHeight>window.innerHeight?t.style.width="calc(100% - "+function(){if(void 0!==n)return n;var e=document.documentElement,t=document.createElement("div");return t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"),e.appendChild(t),n=t.offsetWidth-t.clientWidth,e.removeChild(t),n}()+"px)":t.style.width="100%",t.style.position="fixed",t.style.top=-i+"px",t.style.overflow="hidden",o=!0}}function a(){if("undefined"!=typeof document&&o){var e=document.documentElement;e.style.width="",e.style.position="",e.style.top="",e.style.overflow="",window.scroll(0,i),o=!1}}var s={on:r,off:a,toggle:function(){o?a():r()}};void 0!==e.exports?e.exports=s:t.noScroll=s}(window)},function(e,t,n){"use strict";
/*! npm.im/object-fit-images 3.2.4 */var i="bfred-it:object-fit-images",o=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,r="undefined"==typeof Image?{style:{"object-position":1}}:new Image,a="object-fit"in r.style,s="object-position"in r.style,c="background-size"in r.style,l="string"==typeof r.currentSrc,u=r.getAttribute,f=r.setAttribute,d=!1;function g(e,t,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";u.call(e,"src")!==i&&f.call(e,"src",i)}function p(e,t){e.naturalWidth?t(e):setTimeout(p,100,e,t)}function m(e){var t=function(e){for(var t,n=getComputedStyle(e).fontFamily,i={};null!==(t=o.exec(n));)i[t[1]]=t[2];return i}(e),n=e[i];if(t["object-fit"]=t["object-fit"]||"fill",!n.img){if("fill"===t["object-fit"])return;if(!n.skipTest&&a&&!t["object-position"])return}if(!n.img){n.img=new Image(e.width,e.height),n.img.srcset=u.call(e,"data-ofi-srcset")||e.srcset,n.img.src=u.call(e,"data-ofi-src")||e.src,f.call(e,"data-ofi-src",e.src),e.srcset&&f.call(e,"data-ofi-srcset",e.srcset),g(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{!function(e){var t={get:function(t){return e[i].img[t||"src"]},set:function(t,n){return e[i].img[n||"src"]=t,f.call(e,"data-ofi-"+n,t),m(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}(e)}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!l&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(n.img),e.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?p(n.img,(function(){n.img.naturalWidth>e.width||n.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"})):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),p(n.img,(function(t){g(e,t.naturalWidth,t.naturalHeight)}))}function y(e,t){var n=!d&&!e;if(t=t||{},e=e||"img",s&&!t.skipTest||!c)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var o=0;o<e.length;o++)e[o][i]=e[o][i]||{skipTest:t.skipTest},m(e[o]);n&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&y(e.target,{skipTest:t.skipTest})}),!0),d=!0,e="img"),t.watchMQ&&window.addEventListener("resize",y.bind(null,e,{skipTest:t.skipTest}))}y.supportsObjectFit=a,y.supportsObjectPosition=s,function(){function e(e,t){return e[i]&&e[i].img&&("src"===t||"srcset"===t)?e[i].img:e}s||(HTMLImageElement.prototype.getAttribute=function(t){return u.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,n){return f.call(e(this,t),t,String(n))})}(),e.exports=y},function(e,t,n){e.exports=n(6)},,,,function(e,t,n){"use strict";n.r(t);var i,o,r,a,s=n(1),c=n.n(s),l=(i=$(".js-features-slider"),{initFeaturesSlider:function(){i.slick({dots:!1,infinite:!0,variableWidth:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,focusOnSelect:!0})},init:function(){l.initFeaturesSlider()}}),u=l,f=n(0),d=n.n(f),g=$(document),p=($(window),function(){var e=$(".js-scroll"),t=$(".js-fixed-menu"),n=t.height();function i(e){var t=e.offset().top;$("html, body").animate({scrollTop:t-15},800)}return{showFixedMenu:function(){g.scroll((function(){var e=g.scrollTop(),i="none",o="none";e<n?((e/n).toFixed(2),t.removeClass("fixed")):(1,i="0px 5px 46px rgba(100, 113, 120, 0.07)",o="rgba(255, 255, 255, 0.9)",t.addClass("fixed")),t.css({boxShadow:i,background:o})}))},showMobileMenu:function(){burgerMenu.click((function(e){e.preventDefault(),$($(this).data("target")).toggleClass("menu-mobile--active"),burgerMenu.toggleClass("burger--active"),overlay.toggleClass("active"),d.a.toggle()}))},scrollToTarget:function(){e.click((function(e){e.preventDefault(),d.a.off();var t=$(this),n=t.attr("href"),o=$(n);t.data("target")&&i($(t.data("target")));o.length&&i(o)}))},init:function(){p.scrollToTarget(),p.showFixedMenu()}}}()),m=p,y=(o=new TimelineMax,r=new TimelineMax,a=new TimelineMax,{animateFunctions:function(){var e=new ScrollMagic.Controller;o.from(".js-functions-desc-1",.7,{x:-200,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-functions-photo-1-1",.7,{x:0,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-functions-photo-1-2",1,{x:100,y:200,opacity:0,ease:Linear.easeIn},"=-1"),r.from(".js-functions-desc-2",.7,{x:100,y:200,opacity:0,ease:Linear.easeIn}).from(".js-functions-photo-2-1",.7,{x:0,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-functions-photo-2-2",1,{x:-100,y:-200,opacity:0,ease:Linear.easeIn},"=-1"),a.from(".js-functions-desc-3",.7,{x:-200,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-functions-photo-3-1",.7,{x:0,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-functions-photo-3-2",1,{x:100,y:200,opacity:0,ease:Linear.easeIn},"=-1"),new ScrollMagic.Scene({triggerElement:".functions__wrap--1"}).setTween(o).addTo(e),new ScrollMagic.Scene({triggerElement:".functions__wrap--2"}).setTween(r).addTo(e),new ScrollMagic.Scene({triggerElement:".functions__wrap--3"}).setTween(a).addTo(e)},animateGame:function(){var e=new ScrollMagic.Controller,t=new TimelineMax,n=new TimelineMax,i=new TimelineMax;t.from(".js-game-desc-1",.7,{x:200,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-game-photo-1-1",.7,{x:-200,y:200,scale:.8,opacity:0,ease:Linear.easeIn},"=-1").from(".js-game-photo-1-2",1,{x:100,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-game-photo-1-3",1,{x:-100,y:-200,opacity:0,ease:Linear.easeIn},"=-1"),n.from(".js-game-desc-2",.7,{x:-200,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-game-photo-2-1",.7,{x:0,y:200,opacity:0,ease:Linear.easeIn},"=-1").from(".js-game-photo-2-2",1,{x:-100,y:-200,opacity:0,ease:Linear.easeIn},"=-1"),i.from(".js-game-desc-3",.7,{x:100,y:-100,opacity:0,ease:Linear.easeIn},"=-1").from(".js-game-photo-3-1",.7,{x:0,y:100,scale:.95,opacity:0,ease:Linear.easeIn},"=-1"),new ScrollMagic.Scene({triggerElement:".game__wrap--1"}).setTween(t).addTo(e),new ScrollMagic.Scene({triggerElement:".game__wrap--2"}).setTween(n).addTo(e),new ScrollMagic.Scene({triggerElement:".game__wrap--3"}).setTween(i).addTo(e)},init:function(){y.animateFunctions(),y.animateGame()}}),w=y;$((function(){c()(),u.init(),w.init(),m.init()}))}]);