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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigator\": function() { return /* binding */ Navigator; },\n/* harmony export */   \"NavItem\": function() { return /* binding */ NavItem; },\n/* harmony export */   \"Seperator\": function() { return /* binding */ Seperator; },\n/* harmony export */   \"Space\": function() { return /* binding */ Space; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Navigator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"styles__Navigator\",\n  componentId: \"sc-r17g-0\"\n})([\"width:\", \";max-height:calc(100vh - 60px);overflow:auto;transition-duration:0.3s;border-right:1px solid \", \";position:fixed;top:60px;left:0;display:inline-block;z-index:2;\"], function (props) {\n  return props.isDisplayed ? \"360px\" : \"0px\";\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.border : props.theme.mode.light.nav.border;\n});\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__NavItem\",\n  componentId: \"sc-r17g-1\"\n})([\"width:100%;height:60px;line-height:60px;padding-left:20px;display:flex;cursor:pointer;background-color:\", \";font-size:18px;font-weight:bold;color:\", \";&:hover{background-color:\", \";color:\", \";}&:active{background-color:\", \";color:\", \";}\"], function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.bg : props.theme.mode.light.nav.bg;\n}, function (props) {\n  return props.theme.mode.light.nav.font;\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.bgOnHover : props.theme.mode.light.nav.bgOnHover;\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.bgOnHover : props.theme.mode.light.nav.fontOnHover;\n}, function (props) {\n  return props.theme.mode.light.nav.bgOnActive;\n}, function (props) {\n  return props.theme.mode.light.nav.fontOnActive;\n});\nvar Seperator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Seperator\",\n  componentId: \"sc-r17g-2\"\n})([\"width:100%;height:40px;padding:8px 20px;font-weight:bold;background-color:\", \";\"], function (props) {\n  return props.theme.mode.light.nav.others;\n});\nvar Space = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Space\",\n  componentId: \"sc-r17g-3\"\n})([\"width:100%;height:calc(100vh - 680px);background-color:\", \";\"], function (props) {\n  return props.theme.mode.light.nav.others;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1MQUNYLFVBQUNHLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IsT0FBcEIsR0FBOEIsS0FBMUM7QUFBQSxDQURXLEVBTWhCLFVBQUNELEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNFLE1BQU4sR0FDSUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJDLElBQWpCLENBQXNCTixHQUF0QixDQUEwQk8sTUFEOUIsR0FFSU4sS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJHLEtBQWpCLENBQXVCUixHQUF2QixDQUEyQk8sTUFIL0I7QUFBQSxDQU5nQixDQUFmO0FBaUJBLElBQU1FLE9BQU8sR0FBR1gsd0VBQUg7QUFBQTtBQUFBO0FBQUEscVBBT0UsVUFBQ0csS0FBRDtBQUFBLFNBQ2xCQSxLQUFLLENBQUNFLE1BQU4sR0FDSUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJDLElBQWpCLENBQXNCTixHQUF0QixDQUEwQlcsRUFEOUIsR0FFSVYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJHLEtBQWpCLENBQXVCUixHQUF2QixDQUEyQlcsRUFIYjtBQUFBLENBUEYsRUFhVCxVQUFDVixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJHLEtBQWpCLENBQXVCUixHQUF2QixDQUEyQlksSUFBdEM7QUFBQSxDQWJTLEVBZUksVUFBQ1gsS0FBRDtBQUFBLFNBQ2xCQSxLQUFLLENBQUNFLE1BQU4sR0FDSUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJDLElBQWpCLENBQXNCTixHQUF0QixDQUEwQmEsU0FEOUIsR0FFSVosS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJHLEtBQWpCLENBQXVCUixHQUF2QixDQUEyQmEsU0FIYjtBQUFBLENBZkosRUFtQlAsVUFBQ1osS0FBRDtBQUFBLFNBQ1BBLEtBQUssQ0FBQ0UsTUFBTixHQUNJRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsSUFBakIsQ0FBc0JOLEdBQXRCLENBQTBCYSxTQUQ5QixHQUVJWixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkcsS0FBakIsQ0FBdUJSLEdBQXZCLENBQTJCYyxXQUh4QjtBQUFBLENBbkJPLEVBeUJJLFVBQUNiLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkcsS0FBakIsQ0FBdUJSLEdBQXZCLENBQTJCZSxVQUF0QztBQUFBLENBekJKLEVBMEJQLFVBQUNkLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkcsS0FBakIsQ0FBdUJSLEdBQXZCLENBQTJCZ0IsWUFBdEM7QUFBQSxDQTFCTyxDQUFiO0FBOEJBLElBQU1DLFNBQVMsR0FBR25CLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHdGQUtBLFVBQUNHLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkcsS0FBakIsQ0FBdUJSLEdBQXZCLENBQTJCa0IsTUFBdEM7QUFBQSxDQUxBLENBQWY7QUFRQSxJQUFNQyxLQUFLLEdBQUdyQix3RUFBSDtBQUFBO0FBQUE7QUFBQSxxRUFHSSxVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJHLEtBQWpCLENBQXVCUixHQUF2QixDQUEyQmtCLE1BQXRDO0FBQUEsQ0FISixDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2L3N0eWxlcy5qcz9hYzhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2aWdhdG9yID0gc3R5bGVkLm5hdmBcclxuICB3aWR0aDogJHsocHJvcHMpID0+IChwcm9wcy5pc0Rpc3BsYXllZCA/IFwiMzYwcHhcIiA6IFwiMHB4XCIpfTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZFxyXG4gICAgJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmlzRGFya1xyXG4gICAgICAgID8gcHJvcHMudGhlbWUubW9kZS5kYXJrLm5hdi5ib3JkZXJcclxuICAgICAgICA6IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmJvcmRlcn07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNjBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB6LWluZGV4OiAyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5pc0RhcmtcclxuICAgICAgPyBwcm9wcy50aGVtZS5tb2RlLmRhcmsubmF2LmJnXHJcbiAgICAgIDogcHJvcHMudGhlbWUubW9kZS5saWdodC5uYXYuYmd9O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmZvbnR9O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmlzRGFya1xyXG4gICAgICAgID8gcHJvcHMudGhlbWUubW9kZS5kYXJrLm5hdi5iZ09uSG92ZXJcclxuICAgICAgICA6IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmJnT25Ib3Zlcn07XHJcbiAgICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmlzRGFya1xyXG4gICAgICAgID8gcHJvcHMudGhlbWUubW9kZS5kYXJrLm5hdi5iZ09uSG92ZXJcclxuICAgICAgICA6IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmZvbnRPbkhvdmVyfTtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmJnT25BY3RpdmV9O1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5mb250T25BY3RpdmV9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXBlcmF0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubW9kZS5saWdodC5uYXYub3RoZXJzfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGFjZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjgwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5vdGhlcnN9O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiTmF2aWdhdG9yIiwibmF2IiwicHJvcHMiLCJpc0Rpc3BsYXllZCIsImlzRGFyayIsInRoZW1lIiwibW9kZSIsImRhcmsiLCJib3JkZXIiLCJsaWdodCIsIk5hdkl0ZW0iLCJkaXYiLCJiZyIsImZvbnQiLCJiZ09uSG92ZXIiLCJmb250T25Ib3ZlciIsImJnT25BY3RpdmUiLCJmb250T25BY3RpdmUiLCJTZXBlcmF0b3IiLCJvdGhlcnMiLCJTcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav/styles.js\n");

/***/ })

});