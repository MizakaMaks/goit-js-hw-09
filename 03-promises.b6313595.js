!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=r);var u=r("6JpON"),i=document.querySelector("[name=delay]"),c=document.querySelector("[name=step]"),a=document.querySelector("[name=amount]"),l=(document.querySelector(".submit_button"),document.querySelector(".form"));function d(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector(".form");l.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(a.value),t=Number(i.value),r=Number(c.value),l=0;l<o;l++){d(l+1,t+l*r).then((function(n){var o=n.position,t=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.b6313595.js.map
