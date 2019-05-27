/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/news.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/news.less":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/news.less ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../static/img/right.png */ "./static/img/right.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../static/img/left.png */ "./static/img/left.png"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../static/img/return_2.png */ "./static/img/return_2.png"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../../static/img/return_1.png */ "./static/img/return_1.png"));

// Module
exports.push([module.i, ".navbar-default {\n  background-color: #fff;\n  border-color: #fff;\n}\n.new-nav {\n  padding: 36px 0;\n}\n.news {\n  width: 96px;\n  font-family: Museo100-Regular;\n  font-size: 36px;\n  font-weight: normal;\n  font-stretch: normal;\n  letter-spacing: 0px;\n  color: #888888;\n  margin-right: 112px !important;\n}\n.news-btn {\n  cursor: pointer;\n  width: 148px;\n  height: 38px;\n  line-height: 38px;\n  font-size: 14px;\n  text-align: center;\n  color: #888888;\n  border-radius: 19px;\n  background-color: #ffffff;\n  border: solid 1px #eeeeee;\n}\n.news-btn.active {\n  border: solid 1px #eeeeee;\n  background-color: #333333;\n  color: #eeeeee;\n}\n.news-card {\n  padding: 64px 0;\n}\n.news-card .left {\n  width: 350px;\n  height: 300px;\n  background-color: #1b358a;\n  margin-right: 87px !important;\n  overflow: hidden;\n}\n.news-card .right {\n  position: relative;\n  color: #888888;\n  font-family: SourceHanSansCN-Light;\n}\n.news-card .right .text-1 {\n  height: 16px;\n  font-size: 16px;\n  margin-bottom: 35px;\n}\n.news-card .right .text-2 {\n  height: 29px;\n  font-size: 30px;\n  margin-bottom: 39px;\n}\n.news-card .right .text-3 {\n  font-size: 14px;\n  line-height: 28px;\n}\n.news-card .right .bottom-btn {\n  position: absolute;\n  left: 0;\n  bottom: 34px;\n  cursor: pointer;\n}\n.news-card .right .bottom-btn::after {\n  content: \"\";\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  zoom: 0.6;\n  margin-left: 11px;\n  margin-bottom: -2px;\n}\n.news-page {\n  padding: 80px;\n}\n.news-page .page-item {\n  cursor: pointer;\n  margin: 0 20px;\n  font-size: 24px;\n  color: #888888;\n}\n.news-page .page-item.active {\n  color: #333333;\n}\n.news-page::before {\n  content: \"\";\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n  background-position: center;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  margin-bottom: -2px;\n}\n.news-page::after {\n  content: \"\";\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n  background-position: center;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  margin-bottom: -2px;\n}\n.news-info {\n  position: relative;\n  color: #888888;\n  font-family: SourceHanSansCN-Light;\n}\n.news-info .text-1 {\n  font-size: 16px;\n  margin-bottom: 35px;\n}\n.news-info .text-2 {\n  font-size: 30px;\n  margin-bottom: 39px;\n}\n.news-info .text-3 {\n  font-size: 14px;\n  margin-bottom: 35px;\n}\n.news-info .text-right {\n  text-align: right;\n}\n.news-info .text-left {\n  text-align: left;\n}\n.news-info .dis-ib {\n  display: inline-block;\n}\n.news-info .return {\n  margin-right: 192px;\n  margin-left: 44px;\n  width: 92px;\n  height: 38px;\n  background-color: #333333;\n  border-radius: 19px;\n  border: solid 1px #eeeeee;\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\n  cursor: pointer;\n}\n.news-info .return:hover {\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\n}\n.news-info .return a {\n  display: block;\n  width: 92px;\n  height: 38px;\n}\n.news-info .placeholder {\n  margin: 53px 0;\n  height: 445px;\n  background-color: #1b358a;\n}\n@media (max-width: 768px) {\n  .navbar-default {\n    background-color: #fff;\n    border-color: #fff;\n  }\n  .new-nav {\n    padding: 36px 0;\n  }\n  .news {\n    display: none;\n  }\n  .news-btn {\n    width: 21.3vw;\n    height: 5.56vw;\n    line-height: 5.56vw;\n    border-radius: 2.78vw;\n    border: 1px solid #eeeeee;\n    font-size: 2.78vw;\n    text-align: center;\n    color: #888888;\n    background-color: #ffffff;\n  }\n  .news-btn.active {\n    border: solid 1px #eeeeee;\n    background-color: #333333;\n    color: #eeeeee;\n  }\n  .dash-line {\n    margin-left: 5.47vw;\n  }\n  .news-card {\n    padding: 5.47vw 0;\n  }\n  .news-card.row-reverse {\n    flex-direction: row-reverse;\n  }\n  .news-card .left {\n    width: 32.41vw;\n    height: 27.78vw;\n    margin-right: 10px !important;\n  }\n  .news-card .right {\n    flex-grow: 1;\n  }\n  .news-card .right .text-1 {\n    position: absolute;\n    bottom: 5.83vw;\n    margin-bottom: 0vw;\n    font-size: 2.22vw;\n  }\n  .news-card .right .text-2 {\n    position: absolute;\n    top: 0;\n    font-size: 4.44vw;\n    line-height: 6.67vw;\n    margin-bottom: 0vw;\n  }\n  .news-card .right .text-3 {\n    display: none;\n  }\n  .news-card .right .bottom-btn {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    font-size: 2.22vw;\n  }\n  .news-card .right .bottom-btn:after {\n    content: \"\";\n    background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n    display: inline-block;\n    border-radius: 0.05vw;\n    zoom: 0.4;\n    margin-left: 5.01vw;\n    margin-bottom: -0.2px;\n  }\n  .news-page {\n    padding: 7.4vw;\n  }\n  .news-page .page-item {\n    margin: 0 1.85vw;\n    font-size: 2.22vw;\n    color: #888888;\n  }\n  .news-page .page-item.active {\n    color: #333333;\n  }\n  .news-page::before {\n    content: \"\";\n    background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n    background-position: center;\n    display: inline-block;\n    width: 40px;\n    height: 22px;\n    zoom: 0.6;\n    margin-bottom: -2px;\n  }\n  .news-page::after {\n    content: \"\";\n    background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n    background-position: center;\n    display: inline-block;\n    width: 40px;\n    height: 22px;\n    zoom: 0.6;\n    margin-bottom: -2px;\n  }\n  .news-info {\n    position: relative;\n    color: #888888;\n    font-family: SourceHanSansCN-Light;\n  }\n  .news-info .col-md-5 {\n    width: 100%;\n  }\n  .news-info .text-1 {\n    color: #888888;\n    width: 27.13vw;\n    font-size: 2.78vw;\n    line-height: 5.56vw;\n    margin-bottom: 0;\n  }\n  .news-info .text-1 br {\n    display: none;\n  }\n  .news-info .text-2 {\n    display: none;\n  }\n  .news-info .text-3 {\n    font-size: 2.22vw;\n    margin-bottom: 8.06vw;\n  }\n  .news-info .text-right {\n    text-align: left;\n  }\n  .news-info .text-left {\n    text-align: left;\n  }\n  .news-info .dis-ib {\n    display: inline-block;\n  }\n  .news-info .return {\n    margin-right: 0;\n    margin-left: 0;\n    width: 12.04vw;\n    height: 5.56vw;\n    background-color: #ffffff;\n    border-radius: 2.78vw;\n    border: solid 0.09vw #eeeeee;\n    background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\n    background-size: cover;\n    right: 4.91vw;\n    position: absolute;\n  }\n  .news-info .return a {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n  }\n  .news-info .placeholder {\n    margin: 5.65vw 0 10.4vw;\n    width: 90.65vw;\n    height: 50.09vw;\n    background-color: #1b358a;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/news.less":
/*!***************************!*\
  !*** ./src/css/news.less ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./news.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/news.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/news.js":
/*!************************!*\
  !*** ./src/js/news.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var CSS_news_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! CSS/news.less */ "./src/css/news.less");
/* harmony import */ var CSS_news_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(CSS_news_less__WEBPACK_IMPORTED_MODULE_0__);


$(document).ready(function(){
  console.log("news page")
});

/***/ }),

/***/ "./static/img/left.png":
/*!*****************************!*\
  !*** ./static/img/left.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAD0OH0aAAAAzklEQVQ4jY2TOw7CMAxAHxVMcAM68Vk4RzkAt+qRYClsLKBWYuACjC2ChRlFslGw0qSWIkXKe0psx6OyLBkQOXAAHtlA+ARsgElKUHgJXIBdTLBwAbz7BAcfPXjrYHcQEhReefBLD63gw1cLW8HChYV9wcFVClZB4XUKdjEG7sAMuIXeHLrhI/uprGhk0vIaWEjSeUro5Cm1JB2VtEoqNSJVfZLfh04q1EjFgpLtdEiax4SQ5HL6SX2/1c/pT4rNQxuSUhNnpf2QmVbpDDy/Iwo8V3Z6OKEAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/img/return_1.png":
/*!*********************************!*\
  !*** ./static/img/return_1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAmCAYAAABJVvz/AAAFUElEQVRoge2bQUxcVRSG/zfMDDPNzLQ3TWsasLGhQmkCJEwlaEhIwLApEeNOxxibmm7qQleNi8YYt0Zd6EKjxgSNSVMwaVywkK0tCFKVYIVFBULTUuQWZmD6Hm96zf98U6fUduZBKXfI+xcwJLybe7935txzzj3XUErBq6SUDQA6ATwHoBbAkwBiAMKeBysPWQAyAGYBTAL4CcCgEOJ3r7MvGbiUkkBPATgZCASOhkIhBINBVFRUIBAIwDCMHUk6L3K6c+cOcrkcbNvG2toa/54A8CWAz4UQmVLGKQpcShkEcBrA2XA4vLeystIB7QsOeNM0YVnW3wDeB/CpEMLeMHAp5dMAvgsGg8ldu3Y51uzrftHqV1dX+QJGAbwshJjyDFxK2W0YxrfRaDRBq/ZVXLT2bDabVkq9IoT4oWTgUsqUYRhfx2KxoO8+vIluJpPJ2EqpE0KIb9Y/fB9wKeULhmH0x+PxCt+FbEx0Mel0OqeUekkIcaFwkHuASynrDMP4ORaLxX3L3pxcS6d7eUYI8Wd+sED+gxuN0GdrA3tlZQXnzp3D0NCQBrPxJjIkSzJ12ToKFIxyOhQKJXXZILnrE/bVq1ed+Lcc5YbQSQBv5qfvuBQ3qfkrkUjs1cFvp9Np9PX14caNG2hvb0dra+u2z2mjoj9fXl5mnP4Uk6O8hZ9iUqML7PPnzzuw29rayho2RaZk62bpyPuWkzq4EsKmG1lYWEBzczNaWlpw+/btkp7lwlhu0FFka1nWSQAfGouLi42BQODX3bt3b/tUe3t7ce3aNeczJ8mdvtRaD/9/3759aGpqQn19vXa1naWlJe5FTbTwDl0s4+DBg3eBEx7LCfSBDxPB8qVwk52dncXMzAzGxsbQ1dXljKGLyNg0zU4Cb9UlDOQGyYhkeHjYsdienh6nElmqbt265YSQly9fdlxTKpXCnj17tntZjsjYNM3WijNnzpyNRqNPeFnYVurQoUP0dxgfH8f09DSOHDlSctEsEong8OHDSCQSmJiYwNzcHBoaGjy9tK2UaZo5zqRKlwnl1dHR4UQnBNbf38+MzdPzjY2NSCaTuH79OqamHli4e6xyGVfxZ1zHwwO6l2PHjjlWfvHiRc/PEzg1OTm5BbPzLpdxXOuCSWdnJ+LxOA4cOOD5Wfpuupb5+fktmdtGReAssOzV9YiMsfhGxPUwyvHqjrZKbnibpkuZK9daxcPEBWazWWZ5WszHZTxH4FeKxbrlKIaITDb279+vxexdxlcI/BIzup2m0dFRZ0UMK3WQy/gSgQ/yyH8niZkmgVdXV6OmpkaLlbmMB4NCiN+klBO2bR8t51Met8zswB4ZGUEsFkN3d7cWLR20bvawkHV+Nl+ZpvmBbsCZcQ4MDDhVxIcpX0shcKqqqgrHjx+HDgU5uKf5ZIyC8uxnlmW9E4lEtKiJ58WN5ubNm0VDO4aATOvr6upQW1vr/NZlHVyDZVmLZIzCQ2Qp5VuhUOgjfhV9PTrx22nb9ttCiI+x7kzzk7W1tVHX/H09ApGlbdtjZJsf7S5wtycuxc6hnRgmPm6RYTabzbitb3eB3lMmZP+EUurVTCaT24nJ0OMS2ZGhUipV2JOC9cDxL/QLSqnX2TnkW7p3kZnbdXVifdcVijRzvmgYRm80Go35zZylyW3mzCilXhNCfP9/DxVrV65125Wb/XblB6ugXfkX12c/sAjvpSH/3XA4LPyG/P9U0JDPjOu9TTfkF0pKybTtDffKSb1/5cS5cvKHe+XkCyHEUinjbOZS1fMAni24VMXGRT07cTYvVp5YX8hfquKZ34+eL1UB+Ae/hpx1sLEbLwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/img/return_2.png":
/*!*********************************!*\
  !*** ./static/img/return_2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAmCAYAAABJVvz/AAAGP0lEQVRoge2bW0xUVxSG/wEqHMSZbDFKIGirUi5K63RMHOolE+w8aAbwgTZpqBekMYo8lCdpUtM09clUSyIQbVofbNVGY73FFLIxjhrBRAcoKIiNVq0NaARknCi3YZp/ciCDojCgzuHyJzAJcE7W+thnnbXWXltnMpngr6SUyQBWAvgYwPsAYgFEAJji983GhroAuAD8C+AmgAoAZ61Wa93Vq1f9cmDYwKWUBLoJQE5TU1OSw+HAtWvXcO/ePTx48ABPnz5FT0/PuKQdEhKC8PBwzJo1C7Nnz8bChQuxePFiREVF1QP4BcBPQgjXcO41JHApZQiArR6PZ/v58+cjjx8/jvr6+tfly5iVTqfDggULkJ6eDovF0qLT6b4HUCyEeOWqeyVwKWUcgMM1NTWmoqIi3L17d6JzHlRz5sxBXl4eFi1a5ADwuRDi75f9bXB0dPSgv5BS2rq6uspKSkreI+z29va36cOYEtlIKfkZbTQaN3R3d9cpinJzMB8GBS6lzHI6nb9v27ZNuXTp0kTnOWw1NjaiqqoqdNmyZZ95PJ5/FEWpff7aF4BLKdPb29t/z8/PD7l9+7bWfNK8Hj16hMrKyiCLxZLh8XhqFEVp9LV5AHApZXxnZ2dpQUFB2CTskcvpdKK2tjYoNTXV1tPT84eiKC19N+sHrmYjfxYVFb1bWVmpCcMjIiKwdu1a6PX6MffC5kp3Op2hZrM5paOjY7+iKL38eZDP32x1OBymM2fOBM5KHxH2xo0bERcXh+DgYE3Y5K/IkhkegLy+S73AWdS43e7tJSUlmjDUYDB4YfPpKysrw7lz5zRg1ci0Z88euN3ub9ra2lg49q/wTXa7PZJVY6DF8LF+/Xov7PLyci9sj8czlhgPEJmSrVql9wPPOX36dMCN48rOycnxwuZ75MKFC1AUxVtWD/U1ZYp22zhqmM7hN11ra+sHzc3Nf61bty7gKyk3N9fbq6A6Ozu9PYzhqqOjA83Nzbhy5QozBPT29gbUF1+xDXDgwAH2Xj6kR6nseGnhsb1161Y/cMJzuVwICgoa8jo6NHXqVMydOxfz5s2D2WzGyZMn0dTU9BasHlpkS8Y2m20lgZvZ9dOC+ILkql6+fDmePXuGgwcP+rVSIyMjsWLFCixZsgTZ2dnYu3cvWltbNeEbGdtsNjOXT6KWclzGu4sXLyIhIQGbN2/2Kza3tLSA3cxjx455X75ZWVl+haU3KZVxAoHHPHz4UBNG9YnQ7Xa7N7zw3UJ4/ohxvKKiAjExMUhMTNSAR4DKOIbAp3HzQGsqLS0FG2fz589nv9lv6wicsTM5OVkTnqmMp2njeXuJmKo+fvwY9+/f9/taxm62TaOiot6StcMTgT8JDw+PZMNFi2I8H4n4smWW4284elNiPUHWDCn/zZw5U5OwRyOmk0wVmc9rQdwPJWsCv8EtovGm6dOnQwihmVxcZXyDwC9zF3q8KSUlxetRXV2dJjxTGV8m8LPc8me1Nl7ESnPp0qW4c+cOGhoaAu4V2ZIxWQdZrdZazlckJSWNadyM2TNmzEBaWhrWrFnj3XU5cuSIJmZlyJaMhRC1fWnh/rS0tB+uX78eYNMGilVmZmamt4s4lLhhwdIealV39OhRzZT1GRkZ/NgPNS2k9lkslq8PHTqkiZ54n1iW8+3O1G6o5hoLC8Zr9iy4cLQyBcZq2WKx8D+/D76DQFLKrxwOx48FBQWBtnFcaefOnTAajflCiEI8t6dZZDKZHKtXr57ojF6byNJoNFaTbd89+4FbrVY+g1lbtmx5wk7dpEYnMszNzXWpo289LwBXoTeGhYV9sWPHDndsbOwk8hGK7MgwNDQ0SwgxYBDohe0Uq9V6ymAwbCgsLHTHx8dr3DXticzIzmAwZAshTj1v4KD7V1ar9Te9Xp+5e/du16pVqyYetRGKrHbt2uXS6/WfCiF+HewuQ40r83TD4erq6o+Ki4snx5VfIqZ+HFc2Go1VaswedHIWfg7kf2u328WJEycmB/LVcp0VJIsai8XSptPpvhv1QL6vpJQs975Uj5wk8sgJCw0WStw+mghHTtjG5mrmLpJ65KRBPXLysxBiWAP0ozlU9Qmbcj6HqqYBeGckDo0BdXPzwOdQFaddy/0+VAXgfz5DddE879QXAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/img/right.png":
/*!******************************!*\
  !*** ./static/img/right.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAD0OH0aAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAS1JREFUOBGVkzFrwkAYhnNJurhYpFs7iR06FAS7dKtFoVN/TSCQOUMCgfwUf4DF4i+wUxfr1qm0o0NISHxf0XCJl4v94IMvl+e5ey+oCIJgKYS4sCzr1XGcX6OlTMC9oigesyybR1F01cIbZpqmL4DW6OE5kuCOvu9f27b9jvEW/YF52hRvL6ikPM8nnuf98Z1cpcDF+kkqqSJQCsPwBh9hgXEfry6dCG2SUpAkfogBeoWTprxTo9AkaQVJWmLuo39MLuoKUbZ4z2Z1tEIcx5f46cwB3qPXmO8aIxFOkuQN4OgAP7uu+60UavAXdh4ThmicCDqYQuUOB5iZGaOyM2FWeYIEP2BdCZcC/nVdPPCChDfI/HTMTEgu8R+YIu8wQ7fuTJhFIUV/6mIQPNYOumCt5mdYALoAAAAASUVORK5CYII="

/***/ })

/******/ });
//# sourceMappingURL=news.1e1d2c9e.js.map