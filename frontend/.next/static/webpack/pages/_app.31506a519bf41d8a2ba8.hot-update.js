webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/style.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/style.css ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  font-family: \\\"avenir next\\\";\\n  color: #19A974;\\n  background-color: #FFFFFF;\\n  box-sizing: border-box;\\n}\\n\\n.green { color: #19A974\\n}\\n\\n.bg-white { background-color: #FFFFFF\\n}\\n\\n.mainContainerTop {\\n  margin-top: 80px;\\n}\\n\\n/*********** \\n  HOMEPAGE\\n************/\\n\\n.aspect-ratio {\\n  height: 0;\\n  position: relative;\\n}\\n\\n.aspect-ratio--1x1, img {\\n  padding-bottom: 100%;\\n  border: none !important;\\n}\\n\\n.aspect-ratio--object {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 100;\\n}\\n\\n.cover {\\n  background-size: cover !important;\\n}\\n\\n.bg-center {\\n  background-repeat: no-repeat;\\n  background-position: center center;\\n}\\n\\n.cf:before, .cf:after {\\n  content: \\\" \\\";\\n  display: table;\\n}\\n\\n.cf:after {\\n  clear: both;\\n}\\n\\n.cf {\\n  zoom: 1;\\n}\\n\\n.db {\\n  display: block;\\n}\\n\\n.fl {\\n  float: left;\\n  display: inline;\\n}\\n\\n.w-50 {\\n  width: 50%;\\n}\\n\\n.w-100 {\\n  width: 100%;\\n}\\n\\n@media screen and (min-width: 30em) {\\n  .w-25-ns {\\n    width: 25%;\\n  }\\n}\\n\\n@media screen and (min-width: 30em) and (max-width: 60em) {\\n  .w-third-m {\\n    width: calc(100% / 3);\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,0BAA0B;EAC1B,cAAc;EACd,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA,SAAS;AAAe;;AACxB,YAAY;AAA0B;;AAEtC;EACE,gBAAgB;AAClB;;AAEA;;YAEY;;AAEZ;EACI,SAAS;EACT,kBAAkB;AACtB;;AAEA;EACI,oBAAoB;EACpB,uBAAuB;AAC3B;;AAEA;EACI,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,WAAW;EACX,YAAY;EACZ,YAAY;AAChB;;AAEA;EACI,iCAAiC;AACrC;;AAEA;EACI,4BAA4B;EAC5B,kCAAkC;AACtC;;AAEA;EACI,YAAY;EACZ,cAAc;AAClB;;AAEA;EACI,WAAW;AACf;;AAEA;EACI,OAAQ;AACZ;;AAEA;EACI,cAAc;AAClB;;AAEA;EACI,WAAW;EACX,eAAgB;AACpB;;AAEA;EACI,UAAU;AACd;;AAEA;EACI,WAAW;AACf;;AAEA;EACI;IACI,UAAU;EACd;AACJ;;AAEA;EACI;IACI,qBAAqB;EACzB;AACJ\",\"sourcesContent\":[\"html {\\n  font-family: \\\"avenir next\\\";\\n  color: #19A974;\\n  background-color: #FFFFFF;\\n  box-sizing: border-box;\\n}\\n\\n.green { color: #19A974 }\\n.bg-white { background-color: #FFFFFF }\\n\\n.mainContainerTop {\\n  margin-top: 80px;\\n}\\n\\n/*********** \\n  HOMEPAGE\\n************/\\n\\n.aspect-ratio {\\n    height: 0;\\n    position: relative;\\n}\\n\\n.aspect-ratio--1x1, img {\\n    padding-bottom: 100%;\\n    border: none !important;\\n}\\n\\n.aspect-ratio--object {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 100;\\n}\\n\\n.cover {\\n    background-size: cover !important;\\n}\\n\\n.bg-center {\\n    background-repeat: no-repeat;\\n    background-position: center center;\\n}\\n\\n.cf:before, .cf:after {\\n    content: \\\" \\\";\\n    display: table;\\n}\\n\\n.cf:after {\\n    clear: both;\\n}\\n\\n.cf {\\n    *zoom: 1;\\n}\\n\\n.db {\\n    display: block;\\n}\\n\\n.fl {\\n    float: left;\\n    _display: inline;\\n}\\n\\n.w-50 {\\n    width: 50%;\\n}\\n\\n.w-100 {\\n    width: 100%;\\n}\\n\\n@media screen and (min-width: 30em) {\\n    .w-25-ns {\\n        width: 25%;\\n    }\\n}\\n\\n@media screen and (min-width: 30em) and (max-width: 60em) {\\n    .w-third-m {\\n        width: calc(100% / 3);\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcz8yYmI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxTQUFTLGlDQUFpQyxtQkFBbUIsOEJBQThCLDJCQUEyQixHQUFHLFlBQVksa0JBQWtCLGVBQWUsNkJBQTZCLHVCQUF1QixxQkFBcUIsR0FBRywrREFBK0QsY0FBYyx1QkFBdUIsR0FBRyw2QkFBNkIseUJBQXlCLDRCQUE0QixHQUFHLDJCQUEyQix1QkFBdUIsV0FBVyxhQUFhLGNBQWMsWUFBWSxnQkFBZ0IsaUJBQWlCLGlCQUFpQixHQUFHLFlBQVksc0NBQXNDLEdBQUcsZ0JBQWdCLGlDQUFpQyx1Q0FBdUMsR0FBRywyQkFBMkIsbUJBQW1CLG1CQUFtQixHQUFHLGVBQWUsZ0JBQWdCLEdBQUcsU0FBUyxZQUFZLEdBQUcsU0FBUyxtQkFBbUIsR0FBRyxTQUFTLGdCQUFnQixvQkFBb0IsR0FBRyxXQUFXLGVBQWUsR0FBRyxZQUFZLGdCQUFnQixHQUFHLHlDQUF5QyxjQUFjLGlCQUFpQixLQUFLLEdBQUcsK0RBQStELGdCQUFnQiw0QkFBNEIsS0FBSyxHQUFHLE9BQU8saUZBQWlGLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxVQUFVLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSwrQkFBK0IsaUNBQWlDLG1CQUFtQiw4QkFBOEIsMkJBQTJCLEdBQUcsWUFBWSxpQkFBaUIsYUFBYSw0QkFBNEIsdUJBQXVCLHFCQUFxQixHQUFHLCtEQUErRCxnQkFBZ0IseUJBQXlCLEdBQUcsNkJBQTZCLDJCQUEyQiw4QkFBOEIsR0FBRywyQkFBMkIseUJBQXlCLGFBQWEsZUFBZSxnQkFBZ0IsY0FBYyxrQkFBa0IsbUJBQW1CLG1CQUFtQixHQUFHLFlBQVksd0NBQXdDLEdBQUcsZ0JBQWdCLG1DQUFtQyx5Q0FBeUMsR0FBRywyQkFBMkIscUJBQXFCLHFCQUFxQixHQUFHLGVBQWUsa0JBQWtCLEdBQUcsU0FBUyxlQUFlLEdBQUcsU0FBUyxxQkFBcUIsR0FBRyxTQUFTLGtCQUFrQix1QkFBdUIsR0FBRyxXQUFXLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLEdBQUcseUNBQXlDLGdCQUFnQixxQkFBcUIsT0FBTyxHQUFHLCtEQUErRCxrQkFBa0IsZ0NBQWdDLE9BQU8sR0FBRyxtQkFBbUI7QUFDbm5HO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvc3R5bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcImF2ZW5pciBuZXh0XFxcIjtcXG4gIGNvbG9yOiAjMTlBOTc0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ncmVlbiB7IGNvbG9yOiAjMTlBOTc0XFxufVxcblxcbi5iZy13aGl0ZSB7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkZcXG59XFxuXFxuLm1haW5Db250YWluZXJUb3Age1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuXFxuLyoqKioqKioqKioqIFxcbiAgSE9NRVBBR0VcXG4qKioqKioqKioqKiovXFxuXFxuLmFzcGVjdC1yYXRpbyB7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hc3BlY3QtcmF0aW8tLTF4MSwgaW1nIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hc3BlY3QtcmF0aW8tLW9iamVjdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWNlbnRlciB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmNmOmJlZm9yZSwgLmNmOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uY2Y6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5jZiB7XFxuICB6b29tOiAxO1xcbn1cXG5cXG4uZGIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mbCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLnctNTAge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMGVtKSB7XFxuICAudy0yNS1ucyB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwZW0pIGFuZCAobWF4LXdpZHRoOiA2MGVtKSB7XFxuICAudy10aGlyZC1tIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQSxTQUFTO0FBQWU7O0FBQ3hCLFlBQVk7QUFBMEI7O0FBRXRDO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztZQUVZOztBQUVaO0VBQ0ksU0FBUztFQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDM0I7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNoQjs7QUFFQTtFQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtFQUNJLDRCQUE0QjtFQUM1QixrQ0FBa0M7QUFDdEM7O0FBRUE7RUFDSSxZQUFZO0VBQ1osY0FBYztBQUNsQjs7QUFFQTtFQUNJLFdBQVc7QUFDZjs7QUFFQTtFQUNJLE9BQVE7QUFDWjs7QUFFQTtFQUNJLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsZUFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxVQUFVO0FBQ2Q7O0FBRUE7RUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDSTtJQUNJLFVBQVU7RUFDZDtBQUNKOztBQUVBO0VBQ0k7SUFDSSxxQkFBcUI7RUFDekI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYXZlbmlyIG5leHRcXFwiO1xcbiAgY29sb3I6ICMxOUE5NzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmdyZWVuIHsgY29sb3I6ICMxOUE5NzQgfVxcbi5iZy13aGl0ZSB7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgfVxcblxcbi5tYWluQ29udGFpbmVyVG9wIHtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxufVxcblxcbi8qKioqKioqKioqKiBcXG4gIEhPTUVQQUdFXFxuKioqKioqKioqKioqL1xcblxcbi5hc3BlY3QtcmF0aW8ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFzcGVjdC1yYXRpby0tMXgxLCBpbWcge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hc3BlY3QtcmF0aW8tLW9iamVjdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5jb3ZlciB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWNlbnRlciB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5jZjpiZWZvcmUsIC5jZjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5jZjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uY2Yge1xcbiAgICAqem9vbTogMTtcXG59XFxuXFxuLmRiIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mbCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBfZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4udy01MCB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi53LTEwMCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMGVtKSB7XFxuICAgIC53LTI1LW5zIHtcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzBlbSkgYW5kIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgLnctdGhpcmQtbSB7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/style.css\n");

/***/ })

})