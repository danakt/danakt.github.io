webpackHotUpdate("static/development/pages/danakt.js",{

/***/ "./components/Metrika.tsx":
/*!********************************!*\
  !*** ./components/Metrika.tsx ***!
  \********************************/
/*! exports provided: Metrika */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metrika", function() { return Metrika; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Metrika = function Metrika() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _n$parentNode;

    (window['yandex_metrika_callbacks'] = window['yandex_metrika_callbacks'] || []).push(function () {
      try {
        window.yaCounter38138395 = new window.Ya.Metrika({
          id: 38138395,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        });
      } catch (e) {}
    });
    var n = document.getElementsByTagName('script')[0];
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://mc.yandex.ru/metrika/watch.js';
    n === null || n === void 0 ? void 0 : (_n$parentNode = n.parentNode) === null || _n$parentNode === void 0 ? void 0 : _n$parentNode.insertBefore(s, n);
    return function () {
      s.remove();
    };
  }, []);
  return null;
};

/***/ })

})
//# sourceMappingURL=danakt.js.bbd469c5015859e618a3.hot-update.js.map