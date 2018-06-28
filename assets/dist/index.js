/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "assets/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/src/javascript/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/javascript/index.js":
/*!****************************************!*\
  !*** ./assets/src/javascript/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../scss/global/global.scss */ \"./assets/src/scss/global/global.scss\");\n\n__webpack_require__(/*! ../scss/index.scss */ \"./assets/src/scss/index.scss\");\n\n__webpack_require__(/*! vmodel.js */ \"./node_modules/vmodel.js/dist/jquery.vmodel.min.js\");\n\n__webpack_require__(/*! jquery-touchswipe */ \"./node_modules/jquery-touchswipe/jquery.touchSwipe.min.js\");\n\n__webpack_require__(/*! webpack-jquery-ui */ \"./node_modules/webpack-jquery-ui/index.js\");\n\n__webpack_require__(/*! webpack-jquery-ui/css */ \"./node_modules/webpack-jquery-ui/css.js\");\n\n__webpack_require__(/*! jquery.transit */ \"./node_modules/jquery.transit/jquery.transit.js\");\n\n__webpack_require__(/*! melanke-watchjs */ \"./node_modules/melanke-watchjs/src/watch.js\");\n\n__webpack_require__(/*! ./md/global/susy-screen.js */ \"./assets/src/javascript/md/global/susy-screen.js\");\n\n__webpack_require__(/*! ./md/button.js */ \"./assets/src/javascript/md/button.js\");\n\n// 若要全域使用加入這塊\n\n\n// 載入會使用到的 JS 程式碼\n\n\n// 載入 jQuery Plugin\n// 載入 SCSS\nwindow.$ = $;\nwindow.jQuery = $;\n\n$(function () {\n\n    //demo\n    $(\".widget button\").eq(0).button().end().eq(1).button({\n        icon: \"ui-icon-gear\",\n        showLabel: false\n    }).end().eq(2).button({\n        icon: \"ui-icon-gear\"\n    }).end().eq(3).button({\n        icon: \"ui-icon-gear\",\n        iconPosition: \"end\"\n    }).end().eq(4).button({\n        icon: \"ui-icon-gear\",\n        iconPosition: \"top\"\n    }).end().eq(5).button({\n        icon: \"ui-icon-gear\",\n        iconPosition: \"bottom\"\n    });\n\n    // 取得目前的版面\n    var r = $.vmodel.get(\"global/susyScreen\").current();\n    console.log(\"目前版面是：\" + r);\n\n    // 監聽不同視窗\n    $.vmodel.get(\"global/susyScreen\").listen({\n        mobile: function mobile() {\n            console.log('目前是 mobile');\n        },\n        pad: function pad() {\n            console.log('目前是 pad');\n        },\n        desktop: function desktop() {\n            console.log('目前是 desktop');\n        }\n    });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/src/javascript/index.js?");

/***/ }),

/***/ "./assets/src/javascript/md/button.js":
/*!********************************************!*\
  !*** ./assets/src/javascript/md/button.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('button.js');\n\n//# sourceURL=webpack:///./assets/src/javascript/md/button.js?");

/***/ }),

/***/ "./assets/src/scss/index.scss":
/*!************************************!*\
  !*** ./assets/src/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!./index.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./assets/src/scss/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./assets/src/scss/index.scss?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./assets/src/scss/index.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--5-2!./assets/src/scss/index.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font: inherit;\\n  font-size: 100%;\\n  vertical-align: baseline; }\\n\\nhtml {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\ncaption, th, td {\\n  text-align: left;\\n  font-weight: normal;\\n  vertical-align: middle; }\\n\\nq, blockquote {\\n  quotes: none; }\\n  q:before, q:after, blockquote:before, blockquote:after {\\n    content: \\\"\\\";\\n    content: none; }\\n\\na img {\\n  border: none; }\\n\\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\\n  display: block; }\\n\\n@media (min-width: 0px) {\\n  .container {\\n    background: url('data:image/svg+xml,%3Csvg xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"url(%23susy-svg-gradient)\\\" width=\\\"100%\\\" %3E%3Cdefs%3E%3ClinearGradient spreadMethod=\\\"pad\\\" id=\\\"susy-svg-gradient\\\" x1=\\\"0%\\\" y1=\\\"0%\\\" x2=\\\"100%\\\" y2=\\\"0%\\\"%3E%3Cstop offset=\\\"0%\\\" style=\\\"stop-color:rgba(64, 191, 64, 0.5);\\\" /%3E%3Cstop offset=\\\"100%\\\" style=\\\"stop-color:rgba(159, 223, 159, 0.5);\\\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x=\\\"0\\\" width=\\\"21.05263%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"26.31579%\\\" width=\\\"21.05263%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"52.63158%\\\" width=\\\"21.05263%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"78.94737%\\\" width=\\\"21.05263%\\\" height=\\\"100%\\\"/%3E%3C/svg%3E') no-repeat scroll;\\n    height: 100%;\\n    margin: 0 5.26316%; } }\\n\\n@media (min-width: 720px) {\\n  .container {\\n    background: url('data:image/svg+xml,%3Csvg xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"url(%23susy-svg-gradient)\\\" width=\\\"100%\\\" %3E%3Cdefs%3E%3ClinearGradient spreadMethod=\\\"pad\\\" id=\\\"susy-svg-gradient\\\" x1=\\\"0%\\\" y1=\\\"0%\\\" x2=\\\"100%\\\" y2=\\\"0%\\\"%3E%3Cstop offset=\\\"0%\\\" style=\\\"stop-color:rgba(64, 191, 64, 0.5);\\\" /%3E%3Cstop offset=\\\"100%\\\" style=\\\"stop-color:rgba(159, 223, 159, 0.5);\\\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x=\\\"0\\\" width=\\\"10.25641%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"12.82051%\\\" width=\\\"10.25641%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"25.64103%\\\" width=\\\"10.25641%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"38.46154%\\\" width=\\\"10.25641%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"51.28205%\\\" width=\\\"10.25641%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"64.10256%\\\" width=\\\"10.25641%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"76.92308%\\\" width=\\\"10.25641%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"89.74359%\\\" width=\\\"10.25641%\\\" height=\\\"100%\\\"/%3E%3C/svg%3E') no-repeat scroll;\\n    margin: 0 2.5641%; } }\\n\\n@media (min-width: 1280px) {\\n  .container {\\n    background: url('data:image/svg+xml,%3Csvg xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"url(%23susy-svg-gradient)\\\" width=\\\"100%\\\" %3E%3Cdefs%3E%3ClinearGradient spreadMethod=\\\"pad\\\" id=\\\"susy-svg-gradient\\\" x1=\\\"0%\\\" y1=\\\"0%\\\" x2=\\\"100%\\\" y2=\\\"0%\\\"%3E%3Cstop offset=\\\"0%\\\" style=\\\"stop-color:rgba(64, 191, 64, 0.5);\\\" /%3E%3Cstop offset=\\\"100%\\\" style=\\\"stop-color:rgba(159, 223, 159, 0.5);\\\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x=\\\"0\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"8.47458%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"16.94915%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"25.42373%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"33.89831%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"42.37288%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"50.84746%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"59.32203%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"67.79661%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"76.27119%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"84.74576%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3Crect x=\\\"93.22034%\\\" width=\\\"6.77966%\\\" height=\\\"100%\\\"/%3E%3C/svg%3E') no-repeat scroll;\\n    margin: 0 1.69492%; } }\\n\\n@media (min-width: 0px) {\\n  .span {\\n    width: 100%;\\n    background: #d85555;\\n    color: white;\\n    font-size: 26px;\\n    height: 120px;\\n    text-align: center; } }\\n\\n@media (min-width: 720px) {\\n  .span {\\n    width: 74.35897%;\\n    background: #22af92; } }\\n\\n@media (min-width: 1280px) {\\n  .span {\\n    width: 83.05085%;\\n    background: #5f7bca; } }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./assets/src/scss/index.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--5-2");

/***/ })

/******/ });