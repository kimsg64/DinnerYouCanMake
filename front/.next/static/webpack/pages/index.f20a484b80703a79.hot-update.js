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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/search */ \"./reducers/search.js\");\n/* harmony import */ var _reducers_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/nav */ \"./reducers/nav.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useIntersectionObserver */ \"./hooks/useIntersectionObserver.js\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"D:\\\\__My_crafts\\\\__MainProject\\\\03__RecommendDinner\\\\front\\\\components\\\\Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// react import\n\n\n\n\n // style import\n\n\n\n\n\n\n\nvar Observer = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Header__Observer\",\n  componentId: \"sc-1ysv04p-0\"\n})([\"position:relative;\"]);\n_c = Observer;\nvar Criteria = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Header__Criteria\",\n  componentId: \"sc-1ysv04p-1\"\n})([\"widht:100%;height:1px;position:absolute;top:1px;\"]);\n_c2 = Criteria;\nvar AppHeader = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].header.withConfig({\n  displayName: \"Header__AppHeader\",\n  componentId: \"sc-1ysv04p-2\"\n})([\"width:100%;height:60px;background-color:\", \";display:flex;justify-content:space-between;align-items:center;color:\", \";font-size:24px;font-weight:800;position:fixed;z-index:3;&:hover,&:active{color:\", \";}\"], function (props) {\n  return props.color;\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.header.font : props.theme.mode.light.header.font;\n}, function (props) {\n  return props.isDark ? props.theme.mode.dark.header.fontOnHover : props.theme.mode.light.header.fontOnHover;\n});\n_c3 = AppHeader;\nvar EmptyIcon = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Header__EmptyIcon\",\n  componentId: \"sc-1ysv04p-3\"\n})([\"width:60px;height:60px;\"]);\n_c4 = EmptyIcon;\n\nvar Header = function Header() {\n  _s();\n\n  // redux\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.nav;\n  }),\n      isDisplayed = _useSelector.isDisplayed;\n\n  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.detail;\n  }),\n      isShowingDetail = _useSelector2.isShowingDetail;\n\n  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.mode;\n  }),\n      isDark = _useSelector3.isDark;\n\n  var onClickNav = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    dispatch({\n      type: _reducers_nav__WEBPACK_IMPORTED_MODULE_4__.TOGGLE_NAV,\n      data: isDisplayed\n    });\n  }, [isDisplayed]);\n  var onClickHome = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    dispatch({\n      type: _reducers_search__WEBPACK_IMPORTED_MODULE_3__.RESET_KEYWORD\n    });\n    dispatch({\n      type: _reducers_nav__WEBPACK_IMPORTED_MODULE_4__.CLOSE_NAV\n    });\n  }, []);\n  var onClickBack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    dispatch({\n      type: _reducers_search__WEBPACK_IMPORTED_MODULE_3__.REQUEST_BACK\n    });\n  }, []); // Intersection Observer\n\n  var headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useIntersectionObser = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(headerRef),\n      color = _useIntersectionObser.color,\n      darkColor = _useIntersectionObser.darkColor;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Observer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Criteria, {\n      ref: headerRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(AppHeader, {\n      color: isDark ? darkColor : color,\n      isDark: isDark,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faBars,\n          onClick: onClickNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n          onClick: onClickHome,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            children: \"\\uC800\\uB141 \\uBB50 \\uBA39\\uC9C0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), isShowingDetail ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n          onClick: onClickBack,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faArrowLeft\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(EmptyIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"XFx1RN3xJi0vwp4JPdj+IgvrC+o=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n});\n\n_c5 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Observer\");\n$RefreshReg$(_c2, \"Criteria\");\n$RefreshReg$(_c3, \"AppHeader\");\n$RefreshReg$(_c4, \"EmptyIcon\");\n$RefreshReg$(_c5, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0FqREQ7O0dBQU1rQjtVQUVhM0Isc0RBQ09DLHNEQUNJQSxzREFDVEEsc0RBZ0JVUzs7O01BckJ6QmlCO0FBbUROLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVhY3QgaW1wb3J0XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJFUVVFU1RfQkFDSywgUkVTRVRfS0VZV09SRCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9zZWFyY2hcIjtcclxuaW1wb3J0IHsgQ0xPU0VfTkFWLCBUT0dHTEVfTkFWIH0gZnJvbSBcIi4uL3JlZHVjZXJzL25hdlwiO1xyXG5cclxuLy8gc3R5bGUgaW1wb3J0XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFCYXJzLCBmYUFycm93TGVmdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIGZyb20gXCIuLi9ob29rcy91c2VJbnRlcnNlY3Rpb25PYnNlcnZlclwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9JY29uXCI7XHJcblxyXG5jb25zdCBPYnNlcnZlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgQ3JpdGVyaWEgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZGh0OiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFweDtcclxuYDtcclxuXHJcbmNvbnN0IEFwcEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5pc0RhcmtcclxuICAgICAgPyBwcm9wcy50aGVtZS5tb2RlLmRhcmsuaGVhZGVyLmZvbnRcclxuICAgICAgOiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0LmhlYWRlci5mb250fTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMztcclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMuaXNEYXJrXHJcbiAgICAgICAgPyBwcm9wcy50aGVtZS5tb2RlLmRhcmsuaGVhZGVyLmZvbnRPbkhvdmVyXHJcbiAgICAgICAgOiBwcm9wcy50aGVtZS5tb2RlLmxpZ2h0LmhlYWRlci5mb250T25Ib3Zlcn07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRW1wdHlJY29uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgLy8gcmVkdXhcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBpc0Rpc3BsYXllZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uYXYpO1xyXG4gIGNvbnN0IHsgaXNTaG93aW5nRGV0YWlsIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRldGFpbCk7XHJcbiAgY29uc3QgeyBpc0RhcmsgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubW9kZSk7XHJcbiAgY29uc3Qgb25DbGlja05hdiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogVE9HR0xFX05BViwgZGF0YTogaXNEaXNwbGF5ZWQgfSk7XHJcbiAgfSwgW2lzRGlzcGxheWVkXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tIb21lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9LRVlXT1JEIH0pO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBDTE9TRV9OQVYgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogUkVRVUVTVF9CQUNLIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gSW50ZXJzZWN0aW9uIE9ic2VydmVyXHJcbiAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHsgY29sb3IsIGRhcmtDb2xvciB9ID0gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGVhZGVyUmVmKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxPYnNlcnZlcj5cclxuICAgICAgPENyaXRlcmlhIHJlZj17aGVhZGVyUmVmfSAvPlxyXG4gICAgICA8QXBwSGVhZGVyIGNvbG9yPXtpc0RhcmsgPyBkYXJrQ29sb3IgOiBjb2xvcn0gaXNEYXJrPXtpc0Rhcmt9PlxyXG4gICAgICAgIDxJY29uPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IG9uQ2xpY2s9e29uQ2xpY2tOYXZ9IC8+XHJcbiAgICAgICAgPC9JY29uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrSG9tZX0+XHJcbiAgICAgICAgICAgIDxkaXY+7KCA64WBIOutkCDrqLnsp4A8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAge2lzU2hvd2luZ0RldGFpbCA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tCYWNrfT5cclxuICAgICAgICAgICAgICA8SWNvbj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxFbXB0eUljb24gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0FwcEhlYWRlcj5cclxuICAgIDwvT2JzZXJ2ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJMaW5rIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlJFUVVFU1RfQkFDSyIsIlJFU0VUX0tFWVdPUkQiLCJDTE9TRV9OQVYiLCJUT0dHTEVfTkFWIiwic3R5bGVkIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFCYXJzIiwiZmFBcnJvd0xlZnQiLCJ1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkljb24iLCJPYnNlcnZlciIsImRpdiIsIkNyaXRlcmlhIiwiQXBwSGVhZGVyIiwiaGVhZGVyIiwicHJvcHMiLCJjb2xvciIsImlzRGFyayIsInRoZW1lIiwibW9kZSIsImRhcmsiLCJmb250IiwibGlnaHQiLCJmb250T25Ib3ZlciIsIkVtcHR5SWNvbiIsIkhlYWRlciIsImRpc3BhdGNoIiwic3RhdGUiLCJuYXYiLCJpc0Rpc3BsYXllZCIsImRldGFpbCIsImlzU2hvd2luZ0RldGFpbCIsIm9uQ2xpY2tOYXYiLCJ0eXBlIiwiZGF0YSIsIm9uQ2xpY2tIb21lIiwib25DbGlja0JhY2siLCJoZWFkZXJSZWYiLCJkYXJrQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});