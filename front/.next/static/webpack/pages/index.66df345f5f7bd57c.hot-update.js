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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigator\": function() { return /* binding */ Navigator; },\n/* harmony export */   \"NavItem\": function() { return /* binding */ NavItem; },\n/* harmony export */   \"Seperator\": function() { return /* binding */ Seperator; },\n/* harmony export */   \"Space\": function() { return /* binding */ Space; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Navigator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"styles__Navigator\",\n  componentId: \"sc-r17g-0\"\n})([\"width:\", \";max-height:calc(100vh - 60px);overflow:auto;transition-duration:0.3s;border-right:1px solid \", \";position:fixed;top:60px;left:0;display:inline-block;z-index:2;\"], function (props) {\n  return props.isDisplayed ? \"360px\" : \"0px\";\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.border : props.theme.mode.light.nav.border;\n});\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__NavItem\",\n  componentId: \"sc-r17g-1\"\n})([\"width:100%;height:60px;line-height:60px;padding-left:20px;display:flex;cursor:pointer;background-color:\", \";font-size:18px;font-weight:bold;color:\", \";&:hover{background-color:\", \";color:\", \";}&:active{background-color:\", \";color:\", \";}\"], function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.bg : props.theme.mode.light.nav.bg;\n}, function (props) {\n  return props.theme.mode.light.nav.font;\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.bgOnHover : props.theme.mode.light.nav.bgOnHover;\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.bgOnHover : props.theme.mode.light.nav.fontOnHover;\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.nav.bgOnHover : props.theme.mode.light.nav.bgOnActive;\n}, function (props) {\n  return props.theme.mode.light.nav.fontOnActive;\n});\nvar Seperator = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Seperator\",\n  componentId: \"sc-r17g-2\"\n})([\"width:100%;height:40px;padding:8px 20px;font-weight:bold;background-color:\", \";\"], function (props) {\n  return props.theme.mode.light.nav.others;\n});\nvar Space = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Space\",\n  componentId: \"sc-r17g-3\"\n})([\"width:100%;height:calc(100vh - 680px);background-color:\", \";\"], function (props) {\n  return props.theme.mode.light.nav.others;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL05hdi9zdHlsZXMuanM/YWM4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmlnYXRvciA9IHN0eWxlZC5uYXZgXHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNEaXNwbGF5ZWQgPyBcIjM2MHB4XCIgOiBcIjBweFwiKX07XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWRcclxuICAgICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5pc0RhcmtcclxuICAgICAgICA/IHByb3BzLnRoZW1lLm1vZGUuZGFyay5uYXYuYm9yZGVyXHJcbiAgICAgICAgOiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5ib3JkZXJ9O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDYwcHg7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgei1pbmRleDogMjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMuaXNEYXJrXHJcbiAgICAgID8gcHJvcHMudGhlbWUubW9kZS5kYXJrLm5hdi5iZ1xyXG4gICAgICA6IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2LmJnfTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5mb250fTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5pc0RhcmtcclxuICAgICAgICA/IHByb3BzLnRoZW1lLm1vZGUuZGFyay5uYXYuYmdPbkhvdmVyXHJcbiAgICAgICAgOiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5iZ09uSG92ZXJ9O1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5pc0RhcmtcclxuICAgICAgICA/IHByb3BzLnRoZW1lLm1vZGUuZGFyay5uYXYuYmdPbkhvdmVyXHJcbiAgICAgICAgOiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5mb250T25Ib3Zlcn07XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5pc0RhcmtcclxuICAgICAgICA/IHByb3BzLnRoZW1lLm1vZGUuZGFyay5uYXYuYmdPbkhvdmVyXHJcbiAgICAgICAgOiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0Lm5hdi5iZ09uQWN0aXZlfTtcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubW9kZS5saWdodC5uYXYuZm9udE9uQWN0aXZlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VwZXJhdG9yID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1vZGUubGlnaHQubmF2Lm90aGVyc307XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3BhY2UgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY4MHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubW9kZS5saWdodC5uYXYub3RoZXJzfTtcclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIk5hdmlnYXRvciIsIm5hdiIsInByb3BzIiwiaXNEaXNwbGF5ZWQiLCJpc0RhcmsiLCJ0aGVtZSIsIm1vZGUiLCJkYXJrIiwiYm9yZGVyIiwibGlnaHQiLCJOYXZJdGVtIiwiZGl2IiwiYmciLCJmb250IiwiYmdPbkhvdmVyIiwiZm9udE9uSG92ZXIiLCJiZ09uQWN0aXZlIiwiZm9udE9uQWN0aXZlIiwiU2VwZXJhdG9yIiwib3RoZXJzIiwiU3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/styles.js\n");

/***/ })

});