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

/***/ "./components/SearchResult/styles.js":
/*!*******************************************!*\
  !*** ./components/SearchResult/styles.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ResultWrapper\": function() { return /* binding */ ResultWrapper; },\n/* harmony export */   \"ResultItem\": function() { return /* binding */ ResultItem; },\n/* harmony export */   \"ThumbnailSection\": function() { return /* binding */ ThumbnailSection; },\n/* harmony export */   \"InfoSection\": function() { return /* binding */ InfoSection; },\n/* harmony export */   \"TitleWrapper\": function() { return /* binding */ TitleWrapper; },\n/* harmony export */   \"IngredientsWrapper\": function() { return /* binding */ IngredientsWrapper; },\n/* harmony export */   \"HashTagWrapper\": function() { return /* binding */ HashTagWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar ResultWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.withConfig({\n  displayName: \"styles__ResultWrapper\",\n  componentId: \"sc-iph2wb-0\"\n})([\"width:\", \";margin-left:\", \";display:flex;flex-direction:column;align-items:center;@media \", \"{width:100%;margin-left:0;}& a{width:92%;height:20%;padding:8px 12px;margin:12px 0;border:1px solid grey;}\"], function (props) {\n  return props.isDisplayed ? \"calc(100% - 400px)\" : \"100%\";\n}, function (props) {\n  return props.isDisplayed ? \"400px\" : \"0px\";\n}, function (props) {\n  return props.theme.size.tablet;\n});\nvar ResultItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].article.withConfig({\n  displayName: \"styles__ResultItem\",\n  componentId: \"sc-iph2wb-1\"\n})([\"display:flex;\"]);\nvar ThumbnailSection = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"styles__ThumbnailSection\",\n  componentId: \"sc-iph2wb-2\"\n})([\"width:100px;height:100px;overflow:hidden;& img{width:100%;height:100%;object-fit:cover;}\"]);\nvar InfoSection = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"styles__InfoSection\",\n  componentId: \"sc-iph2wb-3\"\n})([\"width:calc(100% - 120px);height:100px;margin-left:20px;\"]);\nvar TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__TitleWrapper\",\n  componentId: \"sc-iph2wb-4\"\n})([\"font-size:18px;font-weight:bold;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;\"]);\nvar IngredientsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__IngredientsWrapper\",\n  componentId: \"sc-iph2wb-5\"\n})([\"font-size:14px;white-space:normal;word-wrap:break-word;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;\"]);\nvar HashTagWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__HashTagWrapper\",\n  componentId: \"sc-iph2wb-6\"\n})([\"font-size:12px;font-weight:bold;color:#0064e5;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxhQUFhLEdBQUdELHlFQUFIO0FBQUE7QUFBQTtBQUFBLGdOQUNmLFVBQUNHLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0Isb0JBQXBCLEdBQTJDLE1BQXZEO0FBQUEsQ0FEZSxFQUVULFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IsT0FBcEIsR0FBOEIsS0FBMUM7QUFBQSxDQUZTLEVBTWYsVUFBQ0QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxJQUFaLENBQWlCQyxNQUE1QjtBQUFBLENBTmUsQ0FBbkI7QUFtQkEsSUFBTUMsVUFBVSxHQUFHUiw0RUFBSDtBQUFBO0FBQUE7QUFBQSxxQkFBaEI7QUFJQSxJQUFNVSxnQkFBZ0IsR0FBR1YsNEVBQUg7QUFBQTtBQUFBO0FBQUEsZ0dBQXRCO0FBV0EsSUFBTVksV0FBVyxHQUFHWiw0RUFBSDtBQUFBO0FBQUE7QUFBQSwrREFBakI7QUFNQSxJQUFNYSxZQUFZLEdBQUdiLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtHQUFsQjtBQVFBLElBQU1lLGtCQUFrQixHQUFHZix3RUFBSDtBQUFBO0FBQUE7QUFBQSxvSkFBeEI7QUFVQSxJQUFNZ0IsY0FBYyxHQUFHaEIsd0VBQUg7QUFBQTtBQUFBO0FBQUEsc0RBQXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0L3N0eWxlcy5qcz8xMDdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmVzdWx0V3JhcHBlciA9IHN0eWxlZC5tYWluYFxyXG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzRGlzcGxheWVkID8gXCJjYWxjKDEwMCUgLSA0MDBweClcIiA6IFwiMTAwJVwiKX07XHJcbiAgbWFyZ2luLWxlZnQ6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNEaXNwbGF5ZWQgPyBcIjQwMHB4XCIgOiBcIjBweFwiKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zaXplLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgJiBhIHtcclxuICAgIHdpZHRoOiA5MiU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHRJdGVtID0gc3R5bGVkLmFydGljbGVgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaHVtYm5haWxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ncmVkaWVudHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIYXNoVGFnV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDA2NGU1O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVzdWx0V3JhcHBlciIsIm1haW4iLCJwcm9wcyIsImlzRGlzcGxheWVkIiwidGhlbWUiLCJzaXplIiwidGFibGV0IiwiUmVzdWx0SXRlbSIsImFydGljbGUiLCJUaHVtYm5haWxTZWN0aW9uIiwic2VjdGlvbiIsIkluZm9TZWN0aW9uIiwiVGl0bGVXcmFwcGVyIiwiZGl2IiwiSW5ncmVkaWVudHNXcmFwcGVyIiwiSGFzaFRhZ1dyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SearchResult/styles.js\n");

/***/ })

});