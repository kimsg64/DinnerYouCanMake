"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail",{

/***/ "./components/Nav/styles.js":
/*!**********************************!*\
  !*** ./components/Nav/styles.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigator\": function() { return /* binding */ Navigator; },\n/* harmony export */   \"NavItem\": function() { return /* binding */ NavItem; },\n/* harmony export */   \"Seperator\": function() { return /* binding */ Seperator; },\n/* harmony export */   \"Space\": function() { return /* binding */ Space; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Navigator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"styles__Navigator\",\n  componentId: \"sc-r17g-0\"\n})([\"width:\", \";max-height:calc(100vh - 60px);overflow:auto;transition-duration:0.3s;border-right:1px solid #e66767;position:fixed;top:60px;left:0;display:inline-block;z-index:2;\"], function (props) {\n  return props.isDisplayed ? \"360px\" : \"0px\";\n});\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__NavItem\",\n  componentId: \"sc-r17g-1\"\n})([\"width:100%;height:60px;line-height:60px;padding-left:20px;display:flex;cursor:pointer;background-color:\", \";font-size:18px;font-weight:bold;color:#222f3e;&:hover{background-color:\", \";color:\", \";}&:active{background-color:\", \";color:\", \";}\"], function (props) {\n  console.log(props);\n  return props.theme.mode.light.white;\n}, function (props) {\n  return props.theme.mode.light.nav.bgOnHover;\n}, function (props) {\n  return props.theme.mode.light.nav.fontOnHover;\n}, function (props) {\n  return props.theme.mode.light.nav.bgOnActive;\n}, function (props) {\n  return props.theme.mode.light.nav.fontOnActive;\n});\nvar Seperator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Seperator\",\n  componentId: \"sc-r17g-2\"\n})([\"width:100%;height:40px;padding:8px 20px;font-weight:bold;background-color:#ffb8b8;\"]);\nvar Space = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Space\",\n  componentId: \"sc-r17g-3\"\n})([\"width:100%;height:calc(100vh - 680px);background-color:#ffb8b8;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNMQUNYLFVBQUNHLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IsT0FBcEIsR0FBOEIsS0FBMUM7QUFBQSxDQURXLENBQWY7QUFhQSxJQUFNQyxPQUFPLEdBQUdMLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHdQQU9FLFVBQUNHLEtBQUQsRUFBVztBQUM3QkksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFDQSxTQUFPQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUJDLEtBQTlCO0FBQ0QsQ0FWaUIsRUFlSSxVQUFDVCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTSxLQUFOLENBQVlDLElBQVosQ0FBaUJDLEtBQWpCLENBQXVCVCxHQUF2QixDQUEyQlcsU0FBdEM7QUFBQSxDQWZKLEVBZ0JQLFVBQUNWLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUJULEdBQXZCLENBQTJCWSxXQUF0QztBQUFBLENBaEJPLEVBbUJJLFVBQUNYLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUJULEdBQXZCLENBQTJCYSxVQUF0QztBQUFBLENBbkJKLEVBb0JQLFVBQUNaLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUJULEdBQXZCLENBQTJCYyxZQUF0QztBQUFBLENBcEJPLENBQWI7QUF3QkEsSUFBTUMsU0FBUyxHQUFHakIsd0VBQUg7QUFBQTtBQUFBO0FBQUEsMEZBQWY7QUFRQSxJQUFNa0IsS0FBSyxHQUFHbEIsd0VBQUg7QUFBQTtBQUFBO0FBQUEsdUVBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvc3R5bGVzLmpzP2FjOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZpZ2F0b3IgPSBzdHlsZWQubmF2YFxyXG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzRGlzcGxheWVkID8gXCIzNjBweFwiIDogXCIwcHhcIil9O1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNjY3Njc7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNjBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB6LWluZGV4OiAyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIHJldHVybiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0LndoaXRlO1xyXG4gIH19O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzIyMmYzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5iZ09uSG92ZXJ9O1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5mb250T25Ib3Zlcn07XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5iZ09uQWN0aXZlfTtcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubW9kZS5saWdodC5uYXYuZm9udE9uQWN0aXZlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VwZXJhdG9yID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjhiODtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGFjZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjgwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI4Yjg7XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJOYXZpZ2F0b3IiLCJuYXYiLCJwcm9wcyIsImlzRGlzcGxheWVkIiwiTmF2SXRlbSIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJ0aGVtZSIsIm1vZGUiLCJsaWdodCIsIndoaXRlIiwiYmdPbkhvdmVyIiwiZm9udE9uSG92ZXIiLCJiZ09uQWN0aXZlIiwiZm9udE9uQWN0aXZlIiwiU2VwZXJhdG9yIiwiU3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/styles.js\n");

/***/ })

});