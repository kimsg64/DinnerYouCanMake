"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar size = {\n  // ~767px 모바일\n  mobile: \"800px\",\n  // 768px~1023px 태블릿\n  tablet: \"1024px\",\n  // 1024~ 데스크탑\n  desktop: \"1800px\"\n};\nvar mode = {\n  light: {\n    nav: {\n      bg: \"white\",\n      bgOnHover: \"#e66767\",\n      bgOnActive: \"#ff6b6b\",\n      font: \"#222f3e\",\n      fontOnHover: \"white\",\n      fontOnActive: \"white\",\n      border: \"#e66767\",\n      others: \"#ffb8b8\"\n    }\n  },\n  dark: {\n    nav: {\n      bg: \"#222f3e\",\n      bgOnHover: \"#e66767\",\n      bgOnActive: \"#ff6b6b\",\n      font: \"#a4b0be\",\n      fontOnHover: \"#222f3e\",\n      fontOnActive: \"#222f3e\",\n      border: \"#222f3e\",\n      others: \"#596275\"\n    }\n  }\n};\nvar theme = {\n  size: {\n    mobile: \"(max-width: \".concat(size.mobile, \")\"),\n    tablet: \"(max-width: \".concat(size.tablet, \")\"),\n    desktop: \"(max-width: \".concat(size.desktop, \")\")\n  },\n  mode: mode\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUc7QUFDWDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsT0FGRztBQUdYO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxRQUpHO0FBS1g7QUFDQUMsRUFBQUEsT0FBTyxFQUFFO0FBTkUsQ0FBYjtBQVNBLElBQU1DLElBQUksR0FBRztBQUNYQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsR0FBRyxFQUFFO0FBQ0hDLE1BQUFBLEVBQUUsRUFBRSxPQUREO0FBRUhDLE1BQUFBLFNBQVMsRUFBRSxTQUZSO0FBR0hDLE1BQUFBLFVBQVUsRUFBRSxTQUhUO0FBSUhDLE1BQUFBLElBQUksRUFBRSxTQUpIO0FBS0hDLE1BQUFBLFdBQVcsRUFBRSxPQUxWO0FBTUhDLE1BQUFBLFlBQVksRUFBRSxPQU5YO0FBT0hDLE1BQUFBLE1BQU0sRUFBRSxTQVBMO0FBUUhDLE1BQUFBLE1BQU0sRUFBRTtBQVJMO0FBREEsR0FESTtBQWFYQyxFQUFBQSxJQUFJLEVBQUU7QUFDSlQsSUFBQUEsR0FBRyxFQUFFO0FBQ0hDLE1BQUFBLEVBQUUsRUFBRSxTQUREO0FBRUhDLE1BQUFBLFNBQVMsRUFBRSxTQUZSO0FBR0hDLE1BQUFBLFVBQVUsRUFBRSxTQUhUO0FBSUhDLE1BQUFBLElBQUksRUFBRSxTQUpIO0FBS0hDLE1BQUFBLFdBQVcsRUFBRSxTQUxWO0FBTUhDLE1BQUFBLFlBQVksRUFBRSxTQU5YO0FBT0hDLE1BQUFBLE1BQU0sRUFBRSxTQVBMO0FBUUhDLE1BQUFBLE1BQU0sRUFBRTtBQVJMO0FBREQ7QUFiSyxDQUFiO0FBMkJBLElBQU1FLEtBQUssR0FBRztBQUNaaEIsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLE1BQU0sd0JBQWlCRCxJQUFJLENBQUNDLE1BQXRCLE1BREY7QUFFSkMsSUFBQUEsTUFBTSx3QkFBaUJGLElBQUksQ0FBQ0UsTUFBdEIsTUFGRjtBQUdKQyxJQUFBQSxPQUFPLHdCQUFpQkgsSUFBSSxDQUFDRyxPQUF0QjtBQUhILEdBRE07QUFNWkMsRUFBQUEsSUFBSSxFQUFKQTtBQU5ZLENBQWQ7QUFTQSwrREFBZVksS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvdGhlbWUuanM/NjE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaXplID0ge1xyXG4gIC8vIH43NjdweCDrqqjrsJTsnbxcclxuICBtb2JpbGU6IFwiODAwcHhcIixcclxuICAvLyA3NjhweH4xMDIzcHgg7YOc67iU66a/XHJcbiAgdGFibGV0OiBcIjEwMjRweFwiLFxyXG4gIC8vIDEwMjR+IOuNsOyKpO2BrO2DkVxyXG4gIGRlc2t0b3A6IFwiMTgwMHB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBtb2RlID0ge1xyXG4gIGxpZ2h0OiB7XHJcbiAgICBuYXY6IHtcclxuICAgICAgYmc6IFwid2hpdGVcIixcclxuICAgICAgYmdPbkhvdmVyOiBcIiNlNjY3NjdcIixcclxuICAgICAgYmdPbkFjdGl2ZTogXCIjZmY2YjZiXCIsXHJcbiAgICAgIGZvbnQ6IFwiIzIyMmYzZVwiLFxyXG4gICAgICBmb250T25Ib3ZlcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBmb250T25BY3RpdmU6IFwid2hpdGVcIixcclxuICAgICAgYm9yZGVyOiBcIiNlNjY3NjdcIixcclxuICAgICAgb3RoZXJzOiBcIiNmZmI4YjhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXJrOiB7XHJcbiAgICBuYXY6IHtcclxuICAgICAgYmc6IFwiIzIyMmYzZVwiLFxyXG4gICAgICBiZ09uSG92ZXI6IFwiI2U2Njc2N1wiLFxyXG4gICAgICBiZ09uQWN0aXZlOiBcIiNmZjZiNmJcIixcclxuICAgICAgZm9udDogXCIjYTRiMGJlXCIsXHJcbiAgICAgIGZvbnRPbkhvdmVyOiBcIiMyMjJmM2VcIixcclxuICAgICAgZm9udE9uQWN0aXZlOiBcIiMyMjJmM2VcIixcclxuICAgICAgYm9yZGVyOiBcIiMyMjJmM2VcIixcclxuICAgICAgb3RoZXJzOiBcIiM1OTYyNzVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIHNpemU6IHtcclxuICAgIG1vYmlsZTogYChtYXgtd2lkdGg6ICR7c2l6ZS5tb2JpbGV9KWAsXHJcbiAgICB0YWJsZXQ6IGAobWF4LXdpZHRoOiAke3NpemUudGFibGV0fSlgLFxyXG4gICAgZGVza3RvcDogYChtYXgtd2lkdGg6ICR7c2l6ZS5kZXNrdG9wfSlgLFxyXG4gIH0sXHJcbiAgbW9kZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iXSwibmFtZXMiOlsic2l6ZSIsIm1vYmlsZSIsInRhYmxldCIsImRlc2t0b3AiLCJtb2RlIiwibGlnaHQiLCJuYXYiLCJiZyIsImJnT25Ib3ZlciIsImJnT25BY3RpdmUiLCJmb250IiwiZm9udE9uSG92ZXIiLCJmb250T25BY3RpdmUiLCJib3JkZXIiLCJvdGhlcnMiLCJkYXJrIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/theme.js\n");

/***/ })

});