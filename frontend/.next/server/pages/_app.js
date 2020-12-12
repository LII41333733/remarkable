module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainContainer.js":
/*!*************************************!*\
  !*** ./components/MainContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/mfisher36/Documents/remarkable/frontend/components/MainContainer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst MainContainer = ({\n  children\n}) => {\n  return __jsx(\"div\", {\n    className: \"mainContainerTop\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5Db250YWluZXIuanM/NjZlOSJdLCJuYW1lcyI6WyJNYWluQ29udGFpbmVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDcEMsU0FDSTtBQUFLLGFBQVMsRUFBRSxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxRQURMLENBREo7QUFLSCxDQU5EOztBQVFlRCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1haW5Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFpbkNvbnRhaW5lclRvcFwifT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainContainer.js\n");

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mfisher36/Documents/remarkable/frontend/components/Meta.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }\n}, __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width, initial-scale=1\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  charSet: \"utf-8\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}), __jsx(\"link\", {\n  rel: \"stylesheet\",\n  href: \"https://unpkg.com/tachyons@4/css/tachyons.min.css\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}), __jsx(\"link\", {\n  rel: \"shortcut icon\",\n  href: \"/static/favicon.png\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }\n}), __jsx(\"link\", {\n  rel: \"stylesheet\",\n  type: \"text/css\",\n  href: \"/static/nprogress.css\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }\n}), __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }\n}, \"remarkable.\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meta);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01ldGEuanM/NGMzNSJdLCJuYW1lcyI6WyJNZXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUNYLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU0sTUFBSSxFQUFDLFVBQVg7QUFBc0IsU0FBTyxFQUFDLHFDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFNLFNBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFO0FBQ0UsS0FBRyxFQUFDLFlBRE47QUFFRSxNQUFJLEVBQUMsbURBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLEVBT0U7QUFBTSxLQUFHLEVBQUMsZUFBVjtBQUEwQixNQUFJLEVBQUMscUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQRixFQVFFO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLFVBQTVCO0FBQXVDLE1BQUksRUFBQyx1QkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVJGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixDQURGOztBQWNlQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWV0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgTWV0YSA9ICgpID0+IChcbiAgPEhlYWQ+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS90YWNoeW9uc0A0L2Nzcy90YWNoeW9ucy5taW4uY3NzXCJcbiAgICAvPlxuICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnBuZ1wiIC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL25wcm9ncmVzcy5jc3NcIiAvPlxuICAgIDx0aXRsZT5yZW1hcmthYmxlLjwvdGl0bGU+XG4gIDwvSGVhZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Meta.js\n");

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/mfisher36/Documents/remarkable/frontend/components/Navbar.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Navbar = () => {\n  return __jsx(\"header\", {\n    className: \"bg-white fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l top-0\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(\"nav\", {\n    className: \"f6 fw6 ttu tracked\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"link dim green dib mr3\",\n    href: \"#\",\n    title: \"Home\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 17\n    }\n  }, \"Home\"), __jsx(\"a\", {\n    className: \"link dim green dib mr3\",\n    href: \"#\",\n    title: \"About\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, \"About\"), __jsx(\"a\", {\n    className: \"link dim green dib mr3\",\n    href: \"#\",\n    title: \"Store\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"Store\"), __jsx(\"a\", {\n    className: \"link dim green dib\",\n    href: \"#\",\n    title: \"Contact\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }, \"Contact\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcz9jZDgyIl0sIm5hbWVzIjpbIk5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNqQixTQUNJO0FBQVEsYUFBUyxFQUFDLHVEQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLHdCQUFiO0FBQXNDLFFBQUksRUFBQyxHQUEzQztBQUErQyxTQUFLLEVBQUMsTUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBSUk7QUFBRyxhQUFTLEVBQUMsd0JBQWI7QUFBc0MsUUFBSSxFQUFDLEdBQTNDO0FBQStDLFNBQUssRUFBQyxPQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosRUFPSTtBQUFHLGFBQVMsRUFBQyx3QkFBYjtBQUFzQyxRQUFJLEVBQUMsR0FBM0M7QUFBK0MsU0FBSyxFQUFDLE9BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixFQVVJO0FBQUcsYUFBUyxFQUFDLG9CQUFiO0FBQWtDLFFBQUksRUFBQyxHQUF2QztBQUEyQyxTQUFLLEVBQUMsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKLENBREosQ0FESjtBQWtCSCxDQW5CRDs7QUFxQmVBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIGZpeGVkIHctMTAwIHBoMyBwdjMgcHY0LW5zIHBoNC1tIHBoNS1sIHRvcC0wXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImY2IGZ3NiB0dHUgdHJhY2tlZFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmsgZGltIGdyZWVuIGRpYiBtcjNcIiBocmVmPVwiI1wiIHRpdGxlPVwiSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGRpbSBncmVlbiBkaWIgbXIzXCIgaHJlZj1cIiNcIiB0aXRsZT1cIkFib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGRpbSBncmVlbiBkaWIgbXIzXCIgaHJlZj1cIiNcIiB0aXRsZT1cIlN0b3JlXCI+XG4gICAgICAgICAgICAgICAgICAgIFN0b3JlXG4gICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGRpbSBncmVlbiBkaWJcIiBocmVmPVwiI1wiIHRpdGxlPVwiQ29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Page = ({\n  children\n}) => {\n  return [children];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanM/MTc1YyJdLCJuYW1lcyI6WyJQYWdlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQzNCLFNBQU8sQ0FBQ0EsUUFBRCxDQUFQO0FBQ0gsQ0FGRDs7QUFJZUQsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQYWdlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiBbY2hpbGRyZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Page.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainContainer */ \"./components/MainContainer.js\");\nvar _jsxFileName = \"/Users/mfisher36/Documents/remarkable/frontend/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }), __jsx(_components_MainContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3JDLFNBQ0ksbUVBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQUhKLENBREo7QUFTSDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBNZXRhIGZyb20gXCIuLi9jb21wb25lbnRzL01ldGFcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5Db250YWluZXJcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8TWFpbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L01haW5Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/style.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });