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

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_My_crafts_MainProject_03_RecommendDinner_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var _Nav___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav/ */ \"./components/Nav/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"D:\\\\__My_crafts\\\\__MainProject\\\\03__RecommendDinner\\\\front\\\\components\\\\AppLayout.js\",\n    _templateObject,\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// react\n\n // styles\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject || (_templateObject = (0,D_My_crafts_MainProject_03_RecommendDinner_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  min-height: 100vh;\\n  background-color: \", \";\\n  color: \", \";\\n\"])), function (props) {\n  return props.isDark ? props.theme.mode.dark.content.bg : props.theme.mode.light.content.bg;\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.content.font : props.theme.mode.light.content.font;\n});\n_c = Wrapper;\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.detail;\n  }),\n      isShowingDetail = _useSelector.isShowingDetail;\n\n  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.mode;\n  }),\n      isDark = _useSelector2.isDark;\n\n  var onScrollLayout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {\n    e.stopPropagation();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {\n    isDark: isDark,\n    onScroll: onScrollLayout,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Nav___WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), isShowingDetail || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 27\n    }, _this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AppLayout, \"aq692fRrn9K+d3rMamLUUxK7ato=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c2 = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLE9BQU8sR0FBR0osNkRBQUgsNFFBRVMsVUFBQ00sS0FBRDtBQUFBLFNBQ2xCQSxLQUFLLENBQUNDLE1BQU4sR0FDSUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLElBQVosQ0FBaUJDLElBQWpCLENBQXNCQyxPQUF0QixDQUE4QkMsRUFEbEMsR0FFSU4sS0FBSyxDQUFDRSxLQUFOLENBQVlDLElBQVosQ0FBaUJJLEtBQWpCLENBQXVCRixPQUF2QixDQUErQkMsRUFIakI7QUFBQSxDQUZULEVBTUYsVUFBQ04sS0FBRDtBQUFBLFNBQ1BBLEtBQUssQ0FBQ0MsTUFBTixHQUNJRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsSUFBakIsQ0FBc0JDLE9BQXRCLENBQThCRyxJQURsQyxHQUVJUixLQUFLLENBQUNFLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkksS0FBakIsQ0FBdUJGLE9BQXZCLENBQStCRyxJQUg1QjtBQUFBLENBTkUsQ0FBYjtLQUFNVjs7QUFZTixJQUFNVyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDbEMscUJBQTRCakIsd0RBQVcsQ0FBQyxVQUFDa0IsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsTUFBakI7QUFBQSxHQUFELENBQXZDO0FBQUEsTUFBUUMsZUFBUixnQkFBUUEsZUFBUjs7QUFDQSxzQkFBbUJwQix3REFBVyxDQUFDLFVBQUNrQixLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDUixJQUFqQjtBQUFBLEdBQUQsQ0FBOUI7QUFBQSxNQUFRRixNQUFSLGlCQUFRQSxNQUFSOztBQUNBLE1BQU1hLGNBQWMsR0FBR3RCLGtEQUFXLENBQUMsVUFBQ3VCLENBQUQsRUFBTztBQUN4Q0EsSUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0QsR0FGaUMsRUFFL0IsRUFGK0IsQ0FBbEM7QUFHQSxzQkFDRSw4REFBQyxPQUFEO0FBQVMsVUFBTSxFQUFFZixNQUFqQjtBQUF5QixZQUFRLEVBQUVhLGNBQW5DO0FBQUEsNEJBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBR0dELGVBQWUsaUJBQUksOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUh0QixFQUlHSCxRQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FkRDs7R0FBTUQ7VUFDd0JoQixzREFDVEE7OztNQUZmZ0I7QUFnQk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanM/Y2Q2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWFjdFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi9TZWFyY2hGb3JtXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2L1wiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5pc0RhcmtcclxuICAgICAgPyBwcm9wcy50aGVtZS5tb2RlLmRhcmsuY29udGVudC5iZ1xyXG4gICAgICA6IHByb3BzLnRoZW1lLm1vZGUubGlnaHQuY29udGVudC5iZ307XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMuaXNEYXJrXHJcbiAgICAgID8gcHJvcHMudGhlbWUubW9kZS5kYXJrLmNvbnRlbnQuZm9udFxyXG4gICAgICA6IHByb3BzLnRoZW1lLm1vZGUubGlnaHQuY29udGVudC5mb250fTtcclxuYDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGlzU2hvd2luZ0RldGFpbCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kZXRhaWwpO1xyXG4gIGNvbnN0IHsgaXNEYXJrIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1vZGUpO1xyXG4gIGNvbnN0IG9uU2Nyb2xsTGF5b3V0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBpc0Rhcms9e2lzRGFya30gb25TY3JvbGw9e29uU2Nyb2xsTGF5b3V0fT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIHtpc1Nob3dpbmdEZXRhaWwgfHwgPFNlYXJjaEZvcm0gLz59XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVNlbGVjdG9yIiwic3R5bGVkIiwiSGVhZGVyIiwiU2VhcmNoRm9ybSIsIk5hdiIsIldyYXBwZXIiLCJkaXYiLCJwcm9wcyIsImlzRGFyayIsInRoZW1lIiwibW9kZSIsImRhcmsiLCJjb250ZW50IiwiYmciLCJsaWdodCIsImZvbnQiLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGV0YWlsIiwiaXNTaG93aW5nRGV0YWlsIiwib25TY3JvbGxMYXlvdXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ })

});