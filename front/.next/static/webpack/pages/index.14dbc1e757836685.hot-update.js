"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Nav/styles.js":
/*!**********************************!*\
  !*** ./components/Nav/styles.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigator\": function() { return /* binding */ Navigator; },\n/* harmony export */   \"NavItem\": function() { return /* binding */ NavItem; },\n/* harmony export */   \"Seperator\": function() { return /* binding */ Seperator; },\n/* harmony export */   \"Space\": function() { return /* binding */ Space; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Navigator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"styles__Navigator\",\n  componentId: \"sc-r17g-0\"\n})([\"width:\", \";max-height:calc(100vh - 60px);overflow:auto;transition-duration:0.3s;border-right:1px solid #e66767;position:fixed;top:60px;left:0;display:inline-block;z-index:2;\"], function (props) {\n  return props.isDisplayed ? \"360px\" : \"0px\";\n});\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__NavItem\",\n  componentId: \"sc-r17g-1\"\n})([\"width:100%;height:60px;line-height:60px;padding-left:20px;display:flex;cursor:pointer;background-color:\", \";font-size:18px;font-weight:bold;color:\", \";&:hover{background-color:\", \";color:\", \";}&:active{background-color:\", \";color:\", \";}\"], function (props) {\n  return props.theme.mode.light.nav.bg;\n}, function (props) {\n  return props.theme.mode.light.nav.font;\n}, function (props) {\n  return props.theme.mode.light.nav.bgOnHover;\n}, function (props) {\n  return props.theme.mode.light.nav.fontOnHover;\n}, function (props) {\n  return props.theme.mode.light.nav.bgOnActive;\n}, function (props) {\n  return props.theme.mode.light.nav.fontOnActive;\n});\nvar Seperator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Seperator\",\n  componentId: \"sc-r17g-2\"\n})([\"width:100%;height:40px;padding:8px 20px;font-weight:bold;background-color:\", \";\"], function (props) {\n  return props.theme.mode.light.nav.seperator;\n});\nvar Space = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Space\",\n  componentId: \"sc-r17g-3\"\n})([\"width:100%;height:calc(100vh - 680px);background-color:#ffb8b8;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNMQUNYLFVBQUNHLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IsT0FBcEIsR0FBOEIsS0FBMUM7QUFBQSxDQURXLENBQWY7QUFhQSxJQUFNQyxPQUFPLEdBQUdMLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHFQQU9FLFVBQUNHLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUJQLEdBQXZCLENBQTJCUSxFQUF0QztBQUFBLENBUEYsRUFVVCxVQUFDUCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLElBQVosQ0FBaUJDLEtBQWpCLENBQXVCUCxHQUF2QixDQUEyQlMsSUFBdEM7QUFBQSxDQVZTLEVBWUksVUFBQ1IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxJQUFaLENBQWlCQyxLQUFqQixDQUF1QlAsR0FBdkIsQ0FBMkJVLFNBQXRDO0FBQUEsQ0FaSixFQWFQLFVBQUNULEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUJQLEdBQXZCLENBQTJCVyxXQUF0QztBQUFBLENBYk8sRUFnQkksVUFBQ1YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxJQUFaLENBQWlCQyxLQUFqQixDQUF1QlAsR0FBdkIsQ0FBMkJZLFVBQXRDO0FBQUEsQ0FoQkosRUFpQlAsVUFBQ1gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxJQUFaLENBQWlCQyxLQUFqQixDQUF1QlAsR0FBdkIsQ0FBMkJhLFlBQXRDO0FBQUEsQ0FqQk8sQ0FBYjtBQXFCQSxJQUFNQyxTQUFTLEdBQUdoQix3RUFBSDtBQUFBO0FBQUE7QUFBQSx3RkFLQSxVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLElBQVosQ0FBaUJDLEtBQWpCLENBQXVCUCxHQUF2QixDQUEyQmUsU0FBdEM7QUFBQSxDQUxBLENBQWY7QUFRQSxJQUFNQyxLQUFLLEdBQUdsQix3RUFBSDtBQUFBO0FBQUE7QUFBQSx1RUFBWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9zdHlsZXMuanM/YWM4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmlnYXRvciA9IHN0eWxlZC5uYXZgXHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNEaXNwbGF5ZWQgPyBcIjM2MHB4XCIgOiBcIjBweFwiKX07XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U2Njc2NztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHotaW5kZXg6IDI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubW9kZS5saWdodC5uYXYuYmd9O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmZvbnR9O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmJnT25Ib3Zlcn07XHJcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmZvbnRPbkhvdmVyfTtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmJnT25BY3RpdmV9O1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5mb250T25BY3RpdmV9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXBlcmF0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubW9kZS5saWdodC5uYXYuc2VwZXJhdG9yfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGFjZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjgwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI4Yjg7XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJOYXZpZ2F0b3IiLCJuYXYiLCJwcm9wcyIsImlzRGlzcGxheWVkIiwiTmF2SXRlbSIsImRpdiIsInRoZW1lIiwibW9kZSIsImxpZ2h0IiwiYmciLCJmb250IiwiYmdPbkhvdmVyIiwiZm9udE9uSG92ZXIiLCJiZ09uQWN0aXZlIiwiZm9udE9uQWN0aXZlIiwiU2VwZXJhdG9yIiwic2VwZXJhdG9yIiwiU3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/styles.js\n");

/***/ })

});