!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){$((function(){var e=$("#header"),t=$("#intro").innerHeight(),n=$(window).scrollTop();function o(n){n>=t?e.addClass("fixed"):e.removeClass("fixed")}o(n),$(window).on("scroll",(function(){o(n=$(this).scrollTop())})),$("[data-scroll]").on("click",(function(e){e.preventDefault();var t=$(this),n=t.data("scroll"),o=$(n).offset().top;$("#nav a").removeClass("active"),t.addClass("active"),$("html, body").animate({scrollTop:o},500)})),$("#nav_toggle").on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$("#nav").toggleClass("active")})),$("[data-collapse]").on("click",(function(e){e.preventDefault();var t=$(this);t.data("collapse");t.toggleClass("active")})),$("[data-slider]").slick({infinite:!0,fade:!1,slidesToShow:1,slidesToScroll:1})}))}]);