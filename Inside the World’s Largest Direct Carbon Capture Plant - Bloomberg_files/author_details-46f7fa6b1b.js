!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["components/author_details/author_details.js"]=t():e["components/author_details/author_details.js"]=t()}(this,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=301)}({301:function(e,t,o){e.exports=o(302)},302:function(e,t){!function(){function e(e){for(var t=e.querySelectorAll(".author"),o=0,n=t.length;o<n;o++)t[o].addEventListener("click",(function(e){return e.stopPropagation(),e.target.querySelector(".author__modal").classList.contains("open")?r():(r(),void u(e.target))}));function r(){var t=e.querySelector(".author__modal.open");if(t){var o=e.querySelector(".author.highlight");document.body.removeEventListener("click",r),t.classList.remove("open"),o.classList.remove("highlight")}}function u(e){document.body.addEventListener("click",r),e.classList.add("highlight"),e.querySelector(".author__modal").classList.add("open")}}document.addEventListener("jvln-transport",(function(t){e(t.detail.transportElement)})),e(document)}()}})}));