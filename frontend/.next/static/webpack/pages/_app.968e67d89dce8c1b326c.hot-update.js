webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/style.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/style.css ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  font-family: \\\"avenir next\\\";\\n  color: #19A974;\\n  background-color: #FFFFFF;\\n  box-sizing: border-box;\\n}\\n\\n.green { color: #19A974\\n}\\n\\n.bg-white { background-color: #FFFFFF\\n}\\n\\n.mainContainerTop {\\n  margin-top: 80px;\\n}\\n\\n/*********** \\n  HOMEPAGE\\n************/\\n\\n.aspect-ratio {\\n  height: 0;\\n  position: relative;\\n}\\n\\n.aspect-ratio--1x1, img {\\n  padding-bottom: 100%;\\n  border: white !important;\\n}\\n\\n.aspect-ratio--object {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 100;\\n}\\n\\n.cover {\\n  background-size: cover !important;\\n}\\n\\n.bg-center {\\n  background-repeat: no-repeat;\\n  background-position: center center;\\n}\\n\\n.cf:before, .cf:after {\\n  content: \\\" \\\";\\n  display: table;\\n}\\n\\n.cf:after {\\n  clear: both;\\n}\\n\\n.cf {\\n  zoom: 1;\\n}\\n\\n.db {\\n  display: block;\\n}\\n\\n.fl {\\n  float: left;\\n  display: inline;\\n}\\n\\n.w-50 {\\n  width: 50%;\\n}\\n\\n.w-100 {\\n  width: 100%;\\n}\\n\\n@media screen and (min-width: 30em) {\\n  .w-25-ns {\\n    width: 25%;\\n  }\\n}\\n\\n@media screen and (min-width: 30em) and (max-width: 60em) {\\n  .w-third-m {\\n    width: calc(100% / 3);\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,0BAA0B;EAC1B,cAAc;EACd,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA,SAAS;AAAe;;AACxB,YAAY;AAA0B;;AAEtC;EACE,gBAAgB;AAClB;;AAEA;;YAEY;;AAEZ;EACI,SAAS;EACT,kBAAkB;AACtB;;AAEA;EACI,oBAAoB;EACpB,wBAAwB;AAC5B;;AAEA;EACI,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,WAAW;EACX,YAAY;EACZ,YAAY;AAChB;;AAEA;EACI,iCAAiC;AACrC;;AAEA;EACI,4BAA4B;EAC5B,kCAAkC;AACtC;;AAEA;EACI,YAAY;EACZ,cAAc;AAClB;;AAEA;EACI,WAAW;AACf;;AAEA;EACI,OAAQ;AACZ;;AAEA;EACI,cAAc;AAClB;;AAEA;EACI,WAAW;EACX,eAAgB;AACpB;;AAEA;EACI,UAAU;AACd;;AAEA;EACI,WAAW;AACf;;AAEA;EACI;IACI,UAAU;EACd;AACJ;;AAEA;EACI;IACI,qBAAqB;EACzB;AACJ\",\"sourcesContent\":[\"html {\\n  font-family: \\\"avenir next\\\";\\n  color: #19A974;\\n  background-color: #FFFFFF;\\n  box-sizing: border-box;\\n}\\n\\n.green { color: #19A974 }\\n.bg-white { background-color: #FFFFFF }\\n\\n.mainContainerTop {\\n  margin-top: 80px;\\n}\\n\\n/*********** \\n  HOMEPAGE\\n************/\\n\\n.aspect-ratio {\\n    height: 0;\\n    position: relative;\\n}\\n\\n.aspect-ratio--1x1, img {\\n    padding-bottom: 100%;\\n    border: white !important;\\n}\\n\\n.aspect-ratio--object {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 100;\\n}\\n\\n.cover {\\n    background-size: cover !important;\\n}\\n\\n.bg-center {\\n    background-repeat: no-repeat;\\n    background-position: center center;\\n}\\n\\n.cf:before, .cf:after {\\n    content: \\\" \\\";\\n    display: table;\\n}\\n\\n.cf:after {\\n    clear: both;\\n}\\n\\n.cf {\\n    *zoom: 1;\\n}\\n\\n.db {\\n    display: block;\\n}\\n\\n.fl {\\n    float: left;\\n    _display: inline;\\n}\\n\\n.w-50 {\\n    width: 50%;\\n}\\n\\n.w-100 {\\n    width: 100%;\\n}\\n\\n@media screen and (min-width: 30em) {\\n    .w-25-ns {\\n        width: 25%;\\n    }\\n}\\n\\n@media screen and (min-width: 30em) and (max-width: 60em) {\\n    .w-third-m {\\n        width: calc(100% / 3);\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcz8yYmI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxTQUFTLGlDQUFpQyxtQkFBbUIsOEJBQThCLDJCQUEyQixHQUFHLFlBQVksa0JBQWtCLGVBQWUsNkJBQTZCLHVCQUF1QixxQkFBcUIsR0FBRywrREFBK0QsY0FBYyx1QkFBdUIsR0FBRyw2QkFBNkIseUJBQXlCLDZCQUE2QixHQUFHLDJCQUEyQix1QkFBdUIsV0FBVyxhQUFhLGNBQWMsWUFBWSxnQkFBZ0IsaUJBQWlCLGlCQUFpQixHQUFHLFlBQVksc0NBQXNDLEdBQUcsZ0JBQWdCLGlDQUFpQyx1Q0FBdUMsR0FBRywyQkFBMkIsbUJBQW1CLG1CQUFtQixHQUFHLGVBQWUsZ0JBQWdCLEdBQUcsU0FBUyxZQUFZLEdBQUcsU0FBUyxtQkFBbUIsR0FBRyxTQUFTLGdCQUFnQixvQkFBb0IsR0FBRyxXQUFXLGVBQWUsR0FBRyxZQUFZLGdCQUFnQixHQUFHLHlDQUF5QyxjQUFjLGlCQUFpQixLQUFLLEdBQUcsK0RBQStELGdCQUFnQiw0QkFBNEIsS0FBSyxHQUFHLE9BQU8saUZBQWlGLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxVQUFVLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSwrQkFBK0IsaUNBQWlDLG1CQUFtQiw4QkFBOEIsMkJBQTJCLEdBQUcsWUFBWSxpQkFBaUIsYUFBYSw0QkFBNEIsdUJBQXVCLHFCQUFxQixHQUFHLCtEQUErRCxnQkFBZ0IseUJBQXlCLEdBQUcsNkJBQTZCLDJCQUEyQiwrQkFBK0IsR0FBRywyQkFBMkIseUJBQXlCLGFBQWEsZUFBZSxnQkFBZ0IsY0FBYyxrQkFBa0IsbUJBQW1CLG1CQUFtQixHQUFHLFlBQVksd0NBQXdDLEdBQUcsZ0JBQWdCLG1DQUFtQyx5Q0FBeUMsR0FBRywyQkFBMkIscUJBQXFCLHFCQUFxQixHQUFHLGVBQWUsa0JBQWtCLEdBQUcsU0FBUyxlQUFlLEdBQUcsU0FBUyxxQkFBcUIsR0FBRyxTQUFTLGtCQUFrQix1QkFBdUIsR0FBRyxXQUFXLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLEdBQUcseUNBQXlDLGdCQUFnQixxQkFBcUIsT0FBTyxHQUFHLCtEQUErRCxrQkFBa0IsZ0NBQWdDLE9BQU8sR0FBRyxtQkFBbUI7QUFDcm5HO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvc3R5bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcImF2ZW5pciBuZXh0XFxcIjtcXG4gIGNvbG9yOiAjMTlBOTc0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ncmVlbiB7IGNvbG9yOiAjMTlBOTc0XFxufVxcblxcbi5iZy13aGl0ZSB7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkZcXG59XFxuXFxuLm1haW5Db250YWluZXJUb3Age1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuXFxuLyoqKioqKioqKioqIFxcbiAgSE9NRVBBR0VcXG4qKioqKioqKioqKiovXFxuXFxuLmFzcGVjdC1yYXRpbyB7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hc3BlY3QtcmF0aW8tLTF4MSwgaW1nIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgYm9yZGVyOiB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXNwZWN0LXJhdGlvLS1vYmplY3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5jb3ZlciB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1jZW50ZXIge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5jZjpiZWZvcmUsIC5jZjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLmNmOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uY2Yge1xcbiAgem9vbTogMTtcXG59XFxuXFxuLmRiIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZmwge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi53LTUwIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzBlbSkge1xcbiAgLnctMjUtbnMge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMGVtKSBhbmQgKG1heC13aWR0aDogNjBlbSkge1xcbiAgLnctdGhpcmQtbSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUEsU0FBUztBQUFlOztBQUN4QixZQUFZO0FBQTBCOztBQUV0QztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7WUFFWTs7QUFFWjtFQUNJLFNBQVM7RUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDaEI7O0FBRUE7RUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7RUFDSSw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3RDOztBQUVBO0VBQ0ksWUFBWTtFQUNaLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxPQUFRO0FBQ1o7O0FBRUE7RUFDSSxjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksV0FBVztFQUNYLGVBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksVUFBVTtBQUNkOztBQUVBO0VBQ0ksV0FBVztBQUNmOztBQUVBO0VBQ0k7SUFDSSxVQUFVO0VBQ2Q7QUFDSjs7QUFFQTtFQUNJO0lBQ0kscUJBQXFCO0VBQ3pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcImF2ZW5pciBuZXh0XFxcIjtcXG4gIGNvbG9yOiAjMTlBOTc0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ncmVlbiB7IGNvbG9yOiAjMTlBOTc0IH1cXG4uYmctd2hpdGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGIH1cXG5cXG4ubWFpbkNvbnRhaW5lclRvcCB7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4vKioqKioqKioqKiogXFxuICBIT01FUEFHRVxcbioqKioqKioqKioqKi9cXG5cXG4uYXNwZWN0LXJhdGlvIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hc3BlY3QtcmF0aW8tLTF4MSwgaW1nIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICAgIGJvcmRlcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuLmFzcGVjdC1yYXRpby0tb2JqZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctY2VudGVyIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmNmOmJlZm9yZSwgLmNmOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLmNmOmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5jZiB7XFxuICAgICp6b29tOiAxO1xcbn1cXG5cXG4uZGIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZsIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIF9kaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi53LTUwIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnctMTAwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwZW0pIHtcXG4gICAgLnctMjUtbnMge1xcbiAgICAgICAgd2lkdGg6IDI1JTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMGVtKSBhbmQgKG1heC13aWR0aDogNjBlbSkge1xcbiAgICAudy10aGlyZC1tIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/style.css\n");

/***/ })

})