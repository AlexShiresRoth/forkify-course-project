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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\r\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\r\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\r\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\r\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\r\nvar btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ \"./node_modules/axios/lib/helpers/btoa.js\");\r\n\r\nmodule.exports = function xhrAdapter(config) {\r\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\r\n    var requestData = config.data;\r\n    var requestHeaders = config.headers;\r\n\r\n    if (utils.isFormData(requestData)) {\r\n      delete requestHeaders['Content-Type']; // Let the browser set it\r\n    }\r\n\r\n    var request = new XMLHttpRequest();\r\n    var loadEvent = 'onreadystatechange';\r\n    var xDomain = false;\r\n\r\n    // For IE 8/9 CORS support\r\n    // Only supports POST and GET calls and doesn't returns the response headers.\r\n    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.\r\n    if ( true &&\r\n        typeof window !== 'undefined' &&\r\n        window.XDomainRequest && !('withCredentials' in request) &&\r\n        !isURLSameOrigin(config.url)) {\r\n      request = new window.XDomainRequest();\r\n      loadEvent = 'onload';\r\n      xDomain = true;\r\n      request.onprogress = function handleProgress() {};\r\n      request.ontimeout = function handleTimeout() {};\r\n    }\r\n\r\n    // HTTP basic authentication\r\n    if (config.auth) {\r\n      var username = config.auth.username || '';\r\n      var password = config.auth.password || '';\r\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\r\n    }\r\n\r\n    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);\r\n\r\n    // Set the request timeout in MS\r\n    request.timeout = config.timeout;\r\n\r\n    // Listen for ready state\r\n    request[loadEvent] = function handleLoad() {\r\n      if (!request || (request.readyState !== 4 && !xDomain)) {\r\n        return;\r\n      }\r\n\r\n      // The request errored out and we didn't get a response, this will be\r\n      // handled by onerror instead\r\n      // With one exception: request that using file: protocol, most browsers\r\n      // will return status as 0 even though it's a successful request\r\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\r\n        return;\r\n      }\r\n\r\n      // Prepare the response\r\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\r\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\r\n      var response = {\r\n        data: responseData,\r\n        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)\r\n        status: request.status === 1223 ? 204 : request.status,\r\n        statusText: request.status === 1223 ? 'No Content' : request.statusText,\r\n        headers: responseHeaders,\r\n        config: config,\r\n        request: request\r\n      };\r\n\r\n      settle(resolve, reject, response);\r\n\r\n      // Clean up request\r\n      request = null;\r\n    };\r\n\r\n    // Handle low level network errors\r\n    request.onerror = function handleError() {\r\n      // Real errors are hidden from us by the browser\r\n      // onerror should only fire if it's a network error\r\n      reject(createError('Network Error', config, null, request));\r\n\r\n      // Clean up request\r\n      request = null;\r\n    };\r\n\r\n    // Handle timeout\r\n    request.ontimeout = function handleTimeout() {\r\n      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',\r\n        request));\r\n\r\n      // Clean up request\r\n      request = null;\r\n    };\r\n\r\n    // Add xsrf header\r\n    // This is only done if running in a standard browser environment.\r\n    // Specifically not if we're in a web worker, or react-native.\r\n    if (utils.isStandardBrowserEnv()) {\r\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\r\n\r\n      // Add xsrf header\r\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?\r\n          cookies.read(config.xsrfCookieName) :\r\n          undefined;\r\n\r\n      if (xsrfValue) {\r\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\r\n      }\r\n    }\r\n\r\n    // Add headers to the request\r\n    if ('setRequestHeader' in request) {\r\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\r\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\r\n          // Remove Content-Type if data is undefined\r\n          delete requestHeaders[key];\r\n        } else {\r\n          // Otherwise add header to the request\r\n          request.setRequestHeader(key, val);\r\n        }\r\n      });\r\n    }\r\n\r\n    // Add withCredentials to request if needed\r\n    if (config.withCredentials) {\r\n      request.withCredentials = true;\r\n    }\r\n\r\n    // Add responseType to request if needed\r\n    if (config.responseType) {\r\n      try {\r\n        request.responseType = config.responseType;\r\n      } catch (e) {\r\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\r\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\r\n        if (config.responseType !== 'json') {\r\n          throw e;\r\n        }\r\n      }\r\n    }\r\n\r\n    // Handle progress if needed\r\n    if (typeof config.onDownloadProgress === 'function') {\r\n      request.addEventListener('progress', config.onDownloadProgress);\r\n    }\r\n\r\n    // Not all browsers support upload events\r\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\r\n      request.upload.addEventListener('progress', config.onUploadProgress);\r\n    }\r\n\r\n    if (config.cancelToken) {\r\n      // Handle cancellation\r\n      config.cancelToken.promise.then(function onCanceled(cancel) {\r\n        if (!request) {\r\n          return;\r\n        }\r\n\r\n        request.abort();\r\n        reject(cancel);\r\n        // Clean up request\r\n        request = null;\r\n      });\r\n    }\r\n\r\n    if (requestData === undefined) {\r\n      requestData = null;\r\n    }\r\n\r\n    // Send the request\r\n    request.send(requestData);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\r\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\r\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\r\n\r\n/**\r\n * Create an instance of Axios\r\n *\r\n * @param {Object} defaultConfig The default config for the instance\r\n * @return {Axios} A new instance of Axios\r\n */\r\nfunction createInstance(defaultConfig) {\r\n  var context = new Axios(defaultConfig);\r\n  var instance = bind(Axios.prototype.request, context);\r\n\r\n  // Copy axios.prototype to instance\r\n  utils.extend(instance, Axios.prototype, context);\r\n\r\n  // Copy context to instance\r\n  utils.extend(instance, context);\r\n\r\n  return instance;\r\n}\r\n\r\n// Create the default instance to be exported\r\nvar axios = createInstance(defaults);\r\n\r\n// Expose Axios class to allow class inheritance\r\naxios.Axios = Axios;\r\n\r\n// Factory for creating new instances\r\naxios.create = function create(instanceConfig) {\r\n  return createInstance(utils.merge(defaults, instanceConfig));\r\n};\r\n\r\n// Expose Cancel & CancelToken\r\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\r\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\r\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\r\n\r\n// Expose all/spread\r\naxios.all = function all(promises) {\r\n  return Promise.all(promises);\r\n};\r\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\r\n\r\nmodule.exports = axios;\r\n\r\n// Allow use of default import syntax in TypeScript\r\nmodule.exports.default = axios;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * A `Cancel` is an object that is thrown when an operation is canceled.\r\n *\r\n * @class\r\n * @param {string=} message The message.\r\n */\r\nfunction Cancel(message) {\r\n  this.message = message;\r\n}\r\n\r\nCancel.prototype.toString = function toString() {\r\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\r\n};\r\n\r\nCancel.prototype.__CANCEL__ = true;\r\n\r\nmodule.exports = Cancel;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\r\n\r\n/**\r\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\r\n *\r\n * @class\r\n * @param {Function} executor The executor function.\r\n */\r\nfunction CancelToken(executor) {\r\n  if (typeof executor !== 'function') {\r\n    throw new TypeError('executor must be a function.');\r\n  }\r\n\r\n  var resolvePromise;\r\n  this.promise = new Promise(function promiseExecutor(resolve) {\r\n    resolvePromise = resolve;\r\n  });\r\n\r\n  var token = this;\r\n  executor(function cancel(message) {\r\n    if (token.reason) {\r\n      // Cancellation has already been requested\r\n      return;\r\n    }\r\n\r\n    token.reason = new Cancel(message);\r\n    resolvePromise(token.reason);\r\n  });\r\n}\r\n\r\n/**\r\n * Throws a `Cancel` if cancellation has been requested.\r\n */\r\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\r\n  if (this.reason) {\r\n    throw this.reason;\r\n  }\r\n};\r\n\r\n/**\r\n * Returns an object that contains a new `CancelToken` and a function that, when called,\r\n * cancels the `CancelToken`.\r\n */\r\nCancelToken.source = function source() {\r\n  var cancel;\r\n  var token = new CancelToken(function executor(c) {\r\n    cancel = c;\r\n  });\r\n  return {\r\n    token: token,\r\n    cancel: cancel\r\n  };\r\n};\r\n\r\nmodule.exports = CancelToken;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = function isCancel(value) {\r\n  return !!(value && value.__CANCEL__);\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar defaults = __webpack_require__(/*! ./../defaults */ \"./node_modules/axios/lib/defaults.js\");\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\r\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\r\n\r\n/**\r\n * Create a new instance of Axios\r\n *\r\n * @param {Object} instanceConfig The default config for the instance\r\n */\r\nfunction Axios(instanceConfig) {\r\n  this.defaults = instanceConfig;\r\n  this.interceptors = {\r\n    request: new InterceptorManager(),\r\n    response: new InterceptorManager()\r\n  };\r\n}\r\n\r\n/**\r\n * Dispatch a request\r\n *\r\n * @param {Object} config The config specific for this request (merged with this.defaults)\r\n */\r\nAxios.prototype.request = function request(config) {\r\n  /*eslint no-param-reassign:0*/\r\n  // Allow for axios('example/url'[, config]) a la fetch API\r\n  if (typeof config === 'string') {\r\n    config = utils.merge({\r\n      url: arguments[0]\r\n    }, arguments[1]);\r\n  }\r\n\r\n  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);\r\n  config.method = config.method.toLowerCase();\r\n\r\n  // Hook up interceptors middleware\r\n  var chain = [dispatchRequest, undefined];\r\n  var promise = Promise.resolve(config);\r\n\r\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\r\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\r\n  });\r\n\r\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\r\n    chain.push(interceptor.fulfilled, interceptor.rejected);\r\n  });\r\n\r\n  while (chain.length) {\r\n    promise = promise.then(chain.shift(), chain.shift());\r\n  }\r\n\r\n  return promise;\r\n};\r\n\r\n// Provide aliases for supported request methods\r\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\r\n  /*eslint func-names:0*/\r\n  Axios.prototype[method] = function(url, config) {\r\n    return this.request(utils.merge(config || {}, {\r\n      method: method,\r\n      url: url\r\n    }));\r\n  };\r\n});\r\n\r\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\r\n  /*eslint func-names:0*/\r\n  Axios.prototype[method] = function(url, data, config) {\r\n    return this.request(utils.merge(config || {}, {\r\n      method: method,\r\n      url: url,\r\n      data: data\r\n    }));\r\n  };\r\n});\r\n\r\nmodule.exports = Axios;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nfunction InterceptorManager() {\r\n  this.handlers = [];\r\n}\r\n\r\n/**\r\n * Add a new interceptor to the stack\r\n *\r\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\r\n * @param {Function} rejected The function to handle `reject` for a `Promise`\r\n *\r\n * @return {Number} An ID used to remove interceptor later\r\n */\r\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\r\n  this.handlers.push({\r\n    fulfilled: fulfilled,\r\n    rejected: rejected\r\n  });\r\n  return this.handlers.length - 1;\r\n};\r\n\r\n/**\r\n * Remove an interceptor from the stack\r\n *\r\n * @param {Number} id The ID that was returned by `use`\r\n */\r\nInterceptorManager.prototype.eject = function eject(id) {\r\n  if (this.handlers[id]) {\r\n    this.handlers[id] = null;\r\n  }\r\n};\r\n\r\n/**\r\n * Iterate over all the registered interceptors\r\n *\r\n * This method is particularly useful for skipping over any\r\n * interceptors that may have become `null` calling `eject`.\r\n *\r\n * @param {Function} fn The function to call for each interceptor\r\n */\r\nInterceptorManager.prototype.forEach = function forEach(fn) {\r\n  utils.forEach(this.handlers, function forEachHandler(h) {\r\n    if (h !== null) {\r\n      fn(h);\r\n    }\r\n  });\r\n};\r\n\r\nmodule.exports = InterceptorManager;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\r\n\r\n/**\r\n * Create an Error with the specified message, config, error code, request and response.\r\n *\r\n * @param {string} message The error message.\r\n * @param {Object} config The config.\r\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\r\n * @param {Object} [request] The request.\r\n * @param {Object} [response] The response.\r\n * @returns {Error} The created error.\r\n */\r\nmodule.exports = function createError(message, config, code, request, response) {\r\n  var error = new Error(message);\r\n  return enhanceError(error, config, code, request, response);\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\r\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\r\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\r\nvar isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\r\nvar combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\r\n\r\n/**\r\n * Throws a `Cancel` if cancellation has been requested.\r\n */\r\nfunction throwIfCancellationRequested(config) {\r\n  if (config.cancelToken) {\r\n    config.cancelToken.throwIfRequested();\r\n  }\r\n}\r\n\r\n/**\r\n * Dispatch a request to the server using the configured adapter.\r\n *\r\n * @param {object} config The config that is to be used for the request\r\n * @returns {Promise} The Promise to be fulfilled\r\n */\r\nmodule.exports = function dispatchRequest(config) {\r\n  throwIfCancellationRequested(config);\r\n\r\n  // Support baseURL config\r\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\r\n    config.url = combineURLs(config.baseURL, config.url);\r\n  }\r\n\r\n  // Ensure headers exist\r\n  config.headers = config.headers || {};\r\n\r\n  // Transform request data\r\n  config.data = transformData(\r\n    config.data,\r\n    config.headers,\r\n    config.transformRequest\r\n  );\r\n\r\n  // Flatten headers\r\n  config.headers = utils.merge(\r\n    config.headers.common || {},\r\n    config.headers[config.method] || {},\r\n    config.headers || {}\r\n  );\r\n\r\n  utils.forEach(\r\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\r\n    function cleanHeaderConfig(method) {\r\n      delete config.headers[method];\r\n    }\r\n  );\r\n\r\n  var adapter = config.adapter || defaults.adapter;\r\n\r\n  return adapter(config).then(function onAdapterResolution(response) {\r\n    throwIfCancellationRequested(config);\r\n\r\n    // Transform response data\r\n    response.data = transformData(\r\n      response.data,\r\n      response.headers,\r\n      config.transformResponse\r\n    );\r\n\r\n    return response;\r\n  }, function onAdapterRejection(reason) {\r\n    if (!isCancel(reason)) {\r\n      throwIfCancellationRequested(config);\r\n\r\n      // Transform response data\r\n      if (reason && reason.response) {\r\n        reason.response.data = transformData(\r\n          reason.response.data,\r\n          reason.response.headers,\r\n          config.transformResponse\r\n        );\r\n      }\r\n    }\r\n\r\n    return Promise.reject(reason);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Update an Error with the specified config, error code, and response.\r\n *\r\n * @param {Error} error The error to update.\r\n * @param {Object} config The config.\r\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\r\n * @param {Object} [request] The request.\r\n * @param {Object} [response] The response.\r\n * @returns {Error} The error.\r\n */\r\nmodule.exports = function enhanceError(error, config, code, request, response) {\r\n  error.config = config;\r\n  if (code) {\r\n    error.code = code;\r\n  }\r\n  error.request = request;\r\n  error.response = response;\r\n  return error;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\r\n\r\n/**\r\n * Resolve or reject a Promise based on response status.\r\n *\r\n * @param {Function} resolve A function that resolves the promise.\r\n * @param {Function} reject A function that rejects the promise.\r\n * @param {object} response The response.\r\n */\r\nmodule.exports = function settle(resolve, reject, response) {\r\n  var validateStatus = response.config.validateStatus;\r\n  // Note: status is not exposed by XDomainRequest\r\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\r\n    resolve(response);\r\n  } else {\r\n    reject(createError(\r\n      'Request failed with status code ' + response.status,\r\n      response.config,\r\n      null,\r\n      response.request,\r\n      response\r\n    ));\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\n/**\r\n * Transform the data for a request or a response\r\n *\r\n * @param {Object|String} data The data to be transformed\r\n * @param {Array} headers The headers for the request or response\r\n * @param {Array|Function} fns A single function or Array of functions\r\n * @returns {*} The resulting transformed data\r\n */\r\nmodule.exports = function transformData(data, headers, fns) {\r\n  /*eslint no-param-reassign:0*/\r\n  utils.forEach(fns, function transform(fn) {\r\n    data = fn(data, headers);\r\n  });\r\n\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\r\n\r\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\r\n\r\nvar DEFAULT_CONTENT_TYPE = {\r\n  'Content-Type': 'application/x-www-form-urlencoded'\r\n};\r\n\r\nfunction setContentTypeIfUnset(headers, value) {\r\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\r\n    headers['Content-Type'] = value;\r\n  }\r\n}\r\n\r\nfunction getDefaultAdapter() {\r\n  var adapter;\r\n  if (typeof XMLHttpRequest !== 'undefined') {\r\n    // For browsers use XHR adapter\r\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\r\n  } else if (typeof process !== 'undefined') {\r\n    // For node use HTTP adapter\r\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\r\n  }\r\n  return adapter;\r\n}\r\n\r\nvar defaults = {\r\n  adapter: getDefaultAdapter(),\r\n\r\n  transformRequest: [function transformRequest(data, headers) {\r\n    normalizeHeaderName(headers, 'Content-Type');\r\n    if (utils.isFormData(data) ||\r\n      utils.isArrayBuffer(data) ||\r\n      utils.isBuffer(data) ||\r\n      utils.isStream(data) ||\r\n      utils.isFile(data) ||\r\n      utils.isBlob(data)\r\n    ) {\r\n      return data;\r\n    }\r\n    if (utils.isArrayBufferView(data)) {\r\n      return data.buffer;\r\n    }\r\n    if (utils.isURLSearchParams(data)) {\r\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\r\n      return data.toString();\r\n    }\r\n    if (utils.isObject(data)) {\r\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\r\n      return JSON.stringify(data);\r\n    }\r\n    return data;\r\n  }],\r\n\r\n  transformResponse: [function transformResponse(data) {\r\n    /*eslint no-param-reassign:0*/\r\n    if (typeof data === 'string') {\r\n      try {\r\n        data = JSON.parse(data);\r\n      } catch (e) { /* Ignore */ }\r\n    }\r\n    return data;\r\n  }],\r\n\r\n  /**\r\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\r\n   * timeout is not created.\r\n   */\r\n  timeout: 0,\r\n\r\n  xsrfCookieName: 'XSRF-TOKEN',\r\n  xsrfHeaderName: 'X-XSRF-TOKEN',\r\n\r\n  maxContentLength: -1,\r\n\r\n  validateStatus: function validateStatus(status) {\r\n    return status >= 200 && status < 300;\r\n  }\r\n};\r\n\r\ndefaults.headers = {\r\n  common: {\r\n    'Accept': 'application/json, text/plain, */*'\r\n  }\r\n};\r\n\r\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\r\n  defaults.headers[method] = {};\r\n});\r\n\r\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\r\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\r\n});\r\n\r\nmodule.exports = defaults;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = function bind(fn, thisArg) {\r\n  return function wrap() {\r\n    var args = new Array(arguments.length);\r\n    for (var i = 0; i < args.length; i++) {\r\n      args[i] = arguments[i];\r\n    }\r\n    return fn.apply(thisArg, args);\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js\r\n\r\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\r\n\r\nfunction E() {\r\n  this.message = 'String contains an invalid character';\r\n}\r\nE.prototype = new Error;\r\nE.prototype.code = 5;\r\nE.prototype.name = 'InvalidCharacterError';\r\n\r\nfunction btoa(input) {\r\n  var str = String(input);\r\n  var output = '';\r\n  for (\r\n    // initialize result and counter\r\n    var block, charCode, idx = 0, map = chars;\r\n    // if the next str index does not exist:\r\n    //   change the mapping table to \"=\"\r\n    //   check if d has no fractional digits\r\n    str.charAt(idx | 0) || (map = '=', idx % 1);\r\n    // \"8 - idx % 1 * 8\" generates the sequence 2, 4, 6, 8\r\n    output += map.charAt(63 & block >> 8 - idx % 1 * 8)\r\n  ) {\r\n    charCode = str.charCodeAt(idx += 3 / 4);\r\n    if (charCode > 0xFF) {\r\n      throw new E();\r\n    }\r\n    block = block << 8 | charCode;\r\n  }\r\n  return output;\r\n}\r\n\r\nmodule.exports = btoa;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/btoa.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nfunction encode(val) {\r\n  return encodeURIComponent(val).\r\n    replace(/%40/gi, '@').\r\n    replace(/%3A/gi, ':').\r\n    replace(/%24/g, '$').\r\n    replace(/%2C/gi, ',').\r\n    replace(/%20/g, '+').\r\n    replace(/%5B/gi, '[').\r\n    replace(/%5D/gi, ']');\r\n}\r\n\r\n/**\r\n * Build a URL by appending params to the end\r\n *\r\n * @param {string} url The base of the url (e.g., http://www.google.com)\r\n * @param {object} [params] The params to be appended\r\n * @returns {string} The formatted url\r\n */\r\nmodule.exports = function buildURL(url, params, paramsSerializer) {\r\n  /*eslint no-param-reassign:0*/\r\n  if (!params) {\r\n    return url;\r\n  }\r\n\r\n  var serializedParams;\r\n  if (paramsSerializer) {\r\n    serializedParams = paramsSerializer(params);\r\n  } else if (utils.isURLSearchParams(params)) {\r\n    serializedParams = params.toString();\r\n  } else {\r\n    var parts = [];\r\n\r\n    utils.forEach(params, function serialize(val, key) {\r\n      if (val === null || typeof val === 'undefined') {\r\n        return;\r\n      }\r\n\r\n      if (utils.isArray(val)) {\r\n        key = key + '[]';\r\n      } else {\r\n        val = [val];\r\n      }\r\n\r\n      utils.forEach(val, function parseValue(v) {\r\n        if (utils.isDate(v)) {\r\n          v = v.toISOString();\r\n        } else if (utils.isObject(v)) {\r\n          v = JSON.stringify(v);\r\n        }\r\n        parts.push(encode(key) + '=' + encode(v));\r\n      });\r\n    });\r\n\r\n    serializedParams = parts.join('&');\r\n  }\r\n\r\n  if (serializedParams) {\r\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\r\n  }\r\n\r\n  return url;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Creates a new URL by combining the specified URLs\r\n *\r\n * @param {string} baseURL The base URL\r\n * @param {string} relativeURL The relative URL\r\n * @returns {string} The combined URL\r\n */\r\nmodule.exports = function combineURLs(baseURL, relativeURL) {\r\n  return relativeURL\r\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\r\n    : baseURL;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nmodule.exports = (\r\n  utils.isStandardBrowserEnv() ?\r\n\r\n  // Standard browser envs support document.cookie\r\n  (function standardBrowserEnv() {\r\n    return {\r\n      write: function write(name, value, expires, path, domain, secure) {\r\n        var cookie = [];\r\n        cookie.push(name + '=' + encodeURIComponent(value));\r\n\r\n        if (utils.isNumber(expires)) {\r\n          cookie.push('expires=' + new Date(expires).toGMTString());\r\n        }\r\n\r\n        if (utils.isString(path)) {\r\n          cookie.push('path=' + path);\r\n        }\r\n\r\n        if (utils.isString(domain)) {\r\n          cookie.push('domain=' + domain);\r\n        }\r\n\r\n        if (secure === true) {\r\n          cookie.push('secure');\r\n        }\r\n\r\n        document.cookie = cookie.join('; ');\r\n      },\r\n\r\n      read: function read(name) {\r\n        var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\r\n        return (match ? decodeURIComponent(match[3]) : null);\r\n      },\r\n\r\n      remove: function remove(name) {\r\n        this.write(name, '', Date.now() - 86400000);\r\n      }\r\n    };\r\n  })() :\r\n\r\n  // Non standard browser env (web workers, react-native) lack needed support.\r\n  (function nonStandardBrowserEnv() {\r\n    return {\r\n      write: function write() {},\r\n      read: function read() { return null; },\r\n      remove: function remove() {}\r\n    };\r\n  })()\r\n);\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Determines whether the specified URL is absolute\r\n *\r\n * @param {string} url The URL to test\r\n * @returns {boolean} True if the specified URL is absolute, otherwise false\r\n */\r\nmodule.exports = function isAbsoluteURL(url) {\r\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\r\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\r\n  // by any combination of letters, digits, plus, period, or hyphen.\r\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nmodule.exports = (\r\n  utils.isStandardBrowserEnv() ?\r\n\r\n  // Standard browser envs have full support of the APIs needed to test\r\n  // whether the request URL is of the same origin as current location.\r\n  (function standardBrowserEnv() {\r\n    var msie = /(msie|trident)/i.test(navigator.userAgent);\r\n    var urlParsingNode = document.createElement('a');\r\n    var originURL;\r\n\r\n    /**\r\n    * Parse a URL to discover it's components\r\n    *\r\n    * @param {String} url The URL to be parsed\r\n    * @returns {Object}\r\n    */\r\n    function resolveURL(url) {\r\n      var href = url;\r\n\r\n      if (msie) {\r\n        // IE needs attribute set twice to normalize properties\r\n        urlParsingNode.setAttribute('href', href);\r\n        href = urlParsingNode.href;\r\n      }\r\n\r\n      urlParsingNode.setAttribute('href', href);\r\n\r\n      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\r\n      return {\r\n        href: urlParsingNode.href,\r\n        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\r\n        host: urlParsingNode.host,\r\n        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\r\n        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\r\n        hostname: urlParsingNode.hostname,\r\n        port: urlParsingNode.port,\r\n        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\r\n                  urlParsingNode.pathname :\r\n                  '/' + urlParsingNode.pathname\r\n      };\r\n    }\r\n\r\n    originURL = resolveURL(window.location.href);\r\n\r\n    /**\r\n    * Determine if a URL shares the same origin as the current location\r\n    *\r\n    * @param {String} requestURL The URL to test\r\n    * @returns {boolean} True if URL shares the same origin, otherwise false\r\n    */\r\n    return function isURLSameOrigin(requestURL) {\r\n      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\r\n      return (parsed.protocol === originURL.protocol &&\r\n            parsed.host === originURL.host);\r\n    };\r\n  })() :\r\n\r\n  // Non standard browser envs (web workers, react-native) lack needed support.\r\n  (function nonStandardBrowserEnv() {\r\n    return function isURLSameOrigin() {\r\n      return true;\r\n    };\r\n  })()\r\n);\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\r\n  utils.forEach(headers, function processHeader(value, name) {\r\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\r\n      headers[normalizedName] = value;\r\n      delete headers[name];\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\n// Headers whose duplicates are ignored by node\r\n// c.f. https://nodejs.org/api/http.html#http_message_headers\r\nvar ignoreDuplicateOf = [\r\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\r\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\r\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\r\n  'referer', 'retry-after', 'user-agent'\r\n];\r\n\r\n/**\r\n * Parse headers into an object\r\n *\r\n * ```\r\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\r\n * Content-Type: application/json\r\n * Connection: keep-alive\r\n * Transfer-Encoding: chunked\r\n * ```\r\n *\r\n * @param {String} headers Headers needing to be parsed\r\n * @returns {Object} Headers parsed into an object\r\n */\r\nmodule.exports = function parseHeaders(headers) {\r\n  var parsed = {};\r\n  var key;\r\n  var val;\r\n  var i;\r\n\r\n  if (!headers) { return parsed; }\r\n\r\n  utils.forEach(headers.split('\\n'), function parser(line) {\r\n    i = line.indexOf(':');\r\n    key = utils.trim(line.substr(0, i)).toLowerCase();\r\n    val = utils.trim(line.substr(i + 1));\r\n\r\n    if (key) {\r\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\r\n        return;\r\n      }\r\n      if (key === 'set-cookie') {\r\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\r\n      } else {\r\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\r\n      }\r\n    }\r\n  });\r\n\r\n  return parsed;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Syntactic sugar for invoking a function and expanding an array for arguments.\r\n *\r\n * Common use case would be to use `Function.prototype.apply`.\r\n *\r\n *  ```js\r\n *  function f(x, y, z) {}\r\n *  var args = [1, 2, 3];\r\n *  f.apply(null, args);\r\n *  ```\r\n *\r\n * With `spread` this example can be re-written.\r\n *\r\n *  ```js\r\n *  spread(function(x, y, z) {})([1, 2, 3]);\r\n *  ```\r\n *\r\n * @param {Function} callback\r\n * @returns {Function}\r\n */\r\nmodule.exports = function spread(callback) {\r\n  return function wrap(arr) {\r\n    return callback.apply(null, arr);\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\r\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\r\n\r\n/*global toString:true*/\r\n\r\n// utils is a library of generic helper functions non-specific to axios\r\n\r\nvar toString = Object.prototype.toString;\r\n\r\n/**\r\n * Determine if a value is an Array\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is an Array, otherwise false\r\n */\r\nfunction isArray(val) {\r\n  return toString.call(val) === '[object Array]';\r\n}\r\n\r\n/**\r\n * Determine if a value is an ArrayBuffer\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\r\n */\r\nfunction isArrayBuffer(val) {\r\n  return toString.call(val) === '[object ArrayBuffer]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a FormData\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is an FormData, otherwise false\r\n */\r\nfunction isFormData(val) {\r\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\r\n}\r\n\r\n/**\r\n * Determine if a value is a view on an ArrayBuffer\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\r\n */\r\nfunction isArrayBufferView(val) {\r\n  var result;\r\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\r\n    result = ArrayBuffer.isView(val);\r\n  } else {\r\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\r\n  }\r\n  return result;\r\n}\r\n\r\n/**\r\n * Determine if a value is a String\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a String, otherwise false\r\n */\r\nfunction isString(val) {\r\n  return typeof val === 'string';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Number\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Number, otherwise false\r\n */\r\nfunction isNumber(val) {\r\n  return typeof val === 'number';\r\n}\r\n\r\n/**\r\n * Determine if a value is undefined\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if the value is undefined, otherwise false\r\n */\r\nfunction isUndefined(val) {\r\n  return typeof val === 'undefined';\r\n}\r\n\r\n/**\r\n * Determine if a value is an Object\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is an Object, otherwise false\r\n */\r\nfunction isObject(val) {\r\n  return val !== null && typeof val === 'object';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Date\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Date, otherwise false\r\n */\r\nfunction isDate(val) {\r\n  return toString.call(val) === '[object Date]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a File\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a File, otherwise false\r\n */\r\nfunction isFile(val) {\r\n  return toString.call(val) === '[object File]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Blob\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Blob, otherwise false\r\n */\r\nfunction isBlob(val) {\r\n  return toString.call(val) === '[object Blob]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Function\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Function, otherwise false\r\n */\r\nfunction isFunction(val) {\r\n  return toString.call(val) === '[object Function]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Stream\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Stream, otherwise false\r\n */\r\nfunction isStream(val) {\r\n  return isObject(val) && isFunction(val.pipe);\r\n}\r\n\r\n/**\r\n * Determine if a value is a URLSearchParams object\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\r\n */\r\nfunction isURLSearchParams(val) {\r\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\r\n}\r\n\r\n/**\r\n * Trim excess whitespace off the beginning and end of a string\r\n *\r\n * @param {String} str The String to trim\r\n * @returns {String} The String freed of excess whitespace\r\n */\r\nfunction trim(str) {\r\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\r\n}\r\n\r\n/**\r\n * Determine if we're running in a standard browser environment\r\n *\r\n * This allows axios to run in a web worker, and react-native.\r\n * Both environments support XMLHttpRequest, but not fully standard globals.\r\n *\r\n * web workers:\r\n *  typeof window -> undefined\r\n *  typeof document -> undefined\r\n *\r\n * react-native:\r\n *  navigator.product -> 'ReactNative'\r\n */\r\nfunction isStandardBrowserEnv() {\r\n  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {\r\n    return false;\r\n  }\r\n  return (\r\n    typeof window !== 'undefined' &&\r\n    typeof document !== 'undefined'\r\n  );\r\n}\r\n\r\n/**\r\n * Iterate over an Array or an Object invoking a function for each item.\r\n *\r\n * If `obj` is an Array callback will be called passing\r\n * the value, index, and complete array for each item.\r\n *\r\n * If 'obj' is an Object callback will be called passing\r\n * the value, key, and complete object for each property.\r\n *\r\n * @param {Object|Array} obj The object to iterate\r\n * @param {Function} fn The callback to invoke for each item\r\n */\r\nfunction forEach(obj, fn) {\r\n  // Don't bother if no value provided\r\n  if (obj === null || typeof obj === 'undefined') {\r\n    return;\r\n  }\r\n\r\n  // Force an array if not already something iterable\r\n  if (typeof obj !== 'object') {\r\n    /*eslint no-param-reassign:0*/\r\n    obj = [obj];\r\n  }\r\n\r\n  if (isArray(obj)) {\r\n    // Iterate over array values\r\n    for (var i = 0, l = obj.length; i < l; i++) {\r\n      fn.call(null, obj[i], i, obj);\r\n    }\r\n  } else {\r\n    // Iterate over object keys\r\n    for (var key in obj) {\r\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\r\n        fn.call(null, obj[key], key, obj);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Accepts varargs expecting each argument to be an object, then\r\n * immutably merges the properties of each object and returns result.\r\n *\r\n * When multiple objects contain the same key the later object in\r\n * the arguments list will take precedence.\r\n *\r\n * Example:\r\n *\r\n * ```js\r\n * var result = merge({foo: 123}, {foo: 456});\r\n * console.log(result.foo); // outputs 456\r\n * ```\r\n *\r\n * @param {Object} obj1 Object to merge\r\n * @returns {Object} Result of all merge properties\r\n */\r\nfunction merge(/* obj1, obj2, obj3, ... */) {\r\n  var result = {};\r\n  function assignValue(val, key) {\r\n    if (typeof result[key] === 'object' && typeof val === 'object') {\r\n      result[key] = merge(result[key], val);\r\n    } else {\r\n      result[key] = val;\r\n    }\r\n  }\r\n\r\n  for (var i = 0, l = arguments.length; i < l; i++) {\r\n    forEach(arguments[i], assignValue);\r\n  }\r\n  return result;\r\n}\r\n\r\n/**\r\n * Extends object a by mutably adding to it the properties of object b.\r\n *\r\n * @param {Object} a The object to be extended\r\n * @param {Object} b The object to copy properties from\r\n * @param {Object} thisArg The object to bind function to\r\n * @return {Object} The resulting value of object a\r\n */\r\nfunction extend(a, b, thisArg) {\r\n  forEach(b, function assignValue(val, key) {\r\n    if (thisArg && typeof val === 'function') {\r\n      a[key] = bind(val, thisArg);\r\n    } else {\r\n      a[key] = val;\r\n    }\r\n  });\r\n  return a;\r\n}\r\n\r\nmodule.exports = {\r\n  isArray: isArray,\r\n  isArrayBuffer: isArrayBuffer,\r\n  isBuffer: isBuffer,\r\n  isFormData: isFormData,\r\n  isArrayBufferView: isArrayBufferView,\r\n  isString: isString,\r\n  isNumber: isNumber,\r\n  isObject: isObject,\r\n  isUndefined: isUndefined,\r\n  isDate: isDate,\r\n  isFile: isFile,\r\n  isBlob: isBlob,\r\n  isFunction: isFunction,\r\n  isStream: isStream,\r\n  isURLSearchParams: isURLSearchParams,\r\n  isStandardBrowserEnv: isStandardBrowserEnv,\r\n  forEach: forEach,\r\n  merge: merge,\r\n  extend: extend,\r\n  trim: trim\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/domain-browser/source/index.js":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/alexr/OneDrive/Desktop/course-projects/forkify-course-project-master/forkify-course-project/node_modules/domain-browser/source/index.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// This file should be ES5 compatible\r\n/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */\r\n\r\n\r\nmodule.exports = (function () {\r\n\t// Import Events\r\n\tvar events = __webpack_require__(/*! events */ \"./node_modules/events/events.js\")\r\n\r\n\t// Export Domain\r\n\tvar domain = {}\r\n\tdomain.createDomain = domain.create = function () {\r\n\t\tvar d = new events.EventEmitter()\r\n\r\n\t\tfunction emitError (e) {\r\n\t\t\td.emit('error', e)\r\n\t\t}\r\n\r\n\t\td.add = function (emitter) {\r\n\t\t\temitter.on('error', emitError)\r\n\t\t}\r\n\t\td.remove = function (emitter) {\r\n\t\t\temitter.removeListener('error', emitError)\r\n\t\t}\r\n\t\td.bind = function (fn) {\r\n\t\t\treturn function () {\r\n\t\t\t\tvar args = Array.prototype.slice.call(arguments)\r\n\t\t\t\ttry {\r\n\t\t\t\t\tfn.apply(null, args)\r\n\t\t\t\t}\r\n\t\t\t\tcatch (err) {\r\n\t\t\t\t\temitError(err)\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\td.intercept = function (fn) {\r\n\t\t\treturn function (err) {\r\n\t\t\t\tif ( err ) {\r\n\t\t\t\t\temitError(err)\r\n\t\t\t\t}\r\n\t\t\t\telse {\r\n\t\t\t\t\tvar args = Array.prototype.slice.call(arguments, 1)\r\n\t\t\t\t\ttry {\r\n\t\t\t\t\t\tfn.apply(null, args)\r\n\t\t\t\t\t}\r\n\t\t\t\t\tcatch (err) {\r\n\t\t\t\t\t\temitError(err)\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\td.run = function (fn) {\r\n\t\t\ttry {\r\n\t\t\t\tfn()\r\n\t\t\t}\r\n\t\t\tcatch (err) {\r\n\t\t\t\temitError(err)\r\n\t\t\t}\r\n\t\t\treturn this\r\n\t\t}\r\n\t\td.dispose = function () {\r\n\t\t\tthis.removeAllListeners()\r\n\t\t\treturn this\r\n\t\t}\r\n\t\td.enter = d.exit = function () {\r\n\t\t\treturn this\r\n\t\t}\r\n\t\treturn d\r\n\t}\r\n\treturn domain\r\n}).call(this)\r\n\n\n//# sourceURL=webpack:///C:/Users/alexr/OneDrive/Desktop/course-projects/forkify-course-project-master/forkify-course-project/node_modules/domain-browser/source/index.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/alexr/OneDrive/Desktop/course-projects/forkify-course-project-master/forkify-course-project/node_modules/events/events.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// \"Software\"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n\r\n\r\nvar R = typeof Reflect === 'object' ? Reflect : null\r\nvar ReflectApply = R && typeof R.apply === 'function'\r\n  ? R.apply\r\n  : function ReflectApply(target, receiver, args) {\r\n    return Function.prototype.apply.call(target, receiver, args);\r\n  }\r\n\r\nvar ReflectOwnKeys\r\nif (R && typeof R.ownKeys === 'function') {\r\n  ReflectOwnKeys = R.ownKeys\r\n} else if (Object.getOwnPropertySymbols) {\r\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\r\n    return Object.getOwnPropertyNames(target)\r\n      .concat(Object.getOwnPropertySymbols(target));\r\n  };\r\n} else {\r\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\r\n    return Object.getOwnPropertyNames(target);\r\n  };\r\n}\r\n\r\nfunction ProcessEmitWarning(warning) {\r\n  if (console && console.warn) console.warn(warning);\r\n}\r\n\r\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\r\n  return value !== value;\r\n}\r\n\r\nfunction EventEmitter() {\r\n  EventEmitter.init.call(this);\r\n}\r\nmodule.exports = EventEmitter;\r\n\r\n// Backwards-compat with node 0.10.x\r\nEventEmitter.EventEmitter = EventEmitter;\r\n\r\nEventEmitter.prototype._events = undefined;\r\nEventEmitter.prototype._eventsCount = 0;\r\nEventEmitter.prototype._maxListeners = undefined;\r\n\r\n// By default EventEmitters will print a warning if more than 10 listeners are\r\n// added to it. This is a useful default which helps finding memory leaks.\r\nvar defaultMaxListeners = 10;\r\n\r\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\r\n  enumerable: true,\r\n  get: function() {\r\n    return defaultMaxListeners;\r\n  },\r\n  set: function(arg) {\r\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\r\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\r\n    }\r\n    defaultMaxListeners = arg;\r\n  }\r\n});\r\n\r\nEventEmitter.init = function() {\r\n\r\n  if (this._events === undefined ||\r\n      this._events === Object.getPrototypeOf(this)._events) {\r\n    this._events = Object.create(null);\r\n    this._eventsCount = 0;\r\n  }\r\n\r\n  this._maxListeners = this._maxListeners || undefined;\r\n};\r\n\r\n// Obviously not all Emitters should be limited to 10. This function allows\r\n// that to be increased. Set to zero for unlimited.\r\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\r\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\r\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\r\n  }\r\n  this._maxListeners = n;\r\n  return this;\r\n};\r\n\r\nfunction $getMaxListeners(that) {\r\n  if (that._maxListeners === undefined)\r\n    return EventEmitter.defaultMaxListeners;\r\n  return that._maxListeners;\r\n}\r\n\r\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\r\n  return $getMaxListeners(this);\r\n};\r\n\r\nEventEmitter.prototype.emit = function emit(type) {\r\n  var args = [];\r\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\r\n  var doError = (type === 'error');\r\n\r\n  var events = this._events;\r\n  if (events !== undefined)\r\n    doError = (doError && events.error === undefined);\r\n  else if (!doError)\r\n    return false;\r\n\r\n  // If there is no 'error' event listener then throw.\r\n  if (doError) {\r\n    var er;\r\n    if (args.length > 0)\r\n      er = args[0];\r\n    if (er instanceof Error) {\r\n      // Note: The comments on the `throw` lines are intentional, they show\r\n      // up in Node's output if this results in an unhandled exception.\r\n      throw er; // Unhandled 'error' event\r\n    }\r\n    // At least give some kind of context to the user\r\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\r\n    err.context = er;\r\n    throw err; // Unhandled 'error' event\r\n  }\r\n\r\n  var handler = events[type];\r\n\r\n  if (handler === undefined)\r\n    return false;\r\n\r\n  if (typeof handler === 'function') {\r\n    ReflectApply(handler, this, args);\r\n  } else {\r\n    var len = handler.length;\r\n    var listeners = arrayClone(handler, len);\r\n    for (var i = 0; i < len; ++i)\r\n      ReflectApply(listeners[i], this, args);\r\n  }\r\n\r\n  return true;\r\n};\r\n\r\nfunction _addListener(target, type, listener, prepend) {\r\n  var m;\r\n  var events;\r\n  var existing;\r\n\r\n  if (typeof listener !== 'function') {\r\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\r\n  }\r\n\r\n  events = target._events;\r\n  if (events === undefined) {\r\n    events = target._events = Object.create(null);\r\n    target._eventsCount = 0;\r\n  } else {\r\n    // To avoid recursion in the case that type === \"newListener\"! Before\r\n    // adding it to the listeners, first emit \"newListener\".\r\n    if (events.newListener !== undefined) {\r\n      target.emit('newListener', type,\r\n                  listener.listener ? listener.listener : listener);\r\n\r\n      // Re-assign `events` because a newListener handler could have caused the\r\n      // this._events to be assigned to a new object\r\n      events = target._events;\r\n    }\r\n    existing = events[type];\r\n  }\r\n\r\n  if (existing === undefined) {\r\n    // Optimize the case of one listener. Don't need the extra array object.\r\n    existing = events[type] = listener;\r\n    ++target._eventsCount;\r\n  } else {\r\n    if (typeof existing === 'function') {\r\n      // Adding the second element, need to change to array.\r\n      existing = events[type] =\r\n        prepend ? [listener, existing] : [existing, listener];\r\n      // If we've already got an array, just append.\r\n    } else if (prepend) {\r\n      existing.unshift(listener);\r\n    } else {\r\n      existing.push(listener);\r\n    }\r\n\r\n    // Check for listener leak\r\n    m = $getMaxListeners(target);\r\n    if (m > 0 && existing.length > m && !existing.warned) {\r\n      existing.warned = true;\r\n      // No error code for this since it is a Warning\r\n      // eslint-disable-next-line no-restricted-syntax\r\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\r\n                          existing.length + ' ' + String(type) + ' listeners ' +\r\n                          'added. Use emitter.setMaxListeners() to ' +\r\n                          'increase limit');\r\n      w.name = 'MaxListenersExceededWarning';\r\n      w.emitter = target;\r\n      w.type = type;\r\n      w.count = existing.length;\r\n      ProcessEmitWarning(w);\r\n    }\r\n  }\r\n\r\n  return target;\r\n}\r\n\r\nEventEmitter.prototype.addListener = function addListener(type, listener) {\r\n  return _addListener(this, type, listener, false);\r\n};\r\n\r\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\r\n\r\nEventEmitter.prototype.prependListener =\r\n    function prependListener(type, listener) {\r\n      return _addListener(this, type, listener, true);\r\n    };\r\n\r\nfunction onceWrapper() {\r\n  var args = [];\r\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\r\n  if (!this.fired) {\r\n    this.target.removeListener(this.type, this.wrapFn);\r\n    this.fired = true;\r\n    ReflectApply(this.listener, this.target, args);\r\n  }\r\n}\r\n\r\nfunction _onceWrap(target, type, listener) {\r\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\r\n  var wrapped = onceWrapper.bind(state);\r\n  wrapped.listener = listener;\r\n  state.wrapFn = wrapped;\r\n  return wrapped;\r\n}\r\n\r\nEventEmitter.prototype.once = function once(type, listener) {\r\n  if (typeof listener !== 'function') {\r\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\r\n  }\r\n  this.on(type, _onceWrap(this, type, listener));\r\n  return this;\r\n};\r\n\r\nEventEmitter.prototype.prependOnceListener =\r\n    function prependOnceListener(type, listener) {\r\n      if (typeof listener !== 'function') {\r\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\r\n      }\r\n      this.prependListener(type, _onceWrap(this, type, listener));\r\n      return this;\r\n    };\r\n\r\n// Emits a 'removeListener' event if and only if the listener was removed.\r\nEventEmitter.prototype.removeListener =\r\n    function removeListener(type, listener) {\r\n      var list, events, position, i, originalListener;\r\n\r\n      if (typeof listener !== 'function') {\r\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\r\n      }\r\n\r\n      events = this._events;\r\n      if (events === undefined)\r\n        return this;\r\n\r\n      list = events[type];\r\n      if (list === undefined)\r\n        return this;\r\n\r\n      if (list === listener || list.listener === listener) {\r\n        if (--this._eventsCount === 0)\r\n          this._events = Object.create(null);\r\n        else {\r\n          delete events[type];\r\n          if (events.removeListener)\r\n            this.emit('removeListener', type, list.listener || listener);\r\n        }\r\n      } else if (typeof list !== 'function') {\r\n        position = -1;\r\n\r\n        for (i = list.length - 1; i >= 0; i--) {\r\n          if (list[i] === listener || list[i].listener === listener) {\r\n            originalListener = list[i].listener;\r\n            position = i;\r\n            break;\r\n          }\r\n        }\r\n\r\n        if (position < 0)\r\n          return this;\r\n\r\n        if (position === 0)\r\n          list.shift();\r\n        else {\r\n          spliceOne(list, position);\r\n        }\r\n\r\n        if (list.length === 1)\r\n          events[type] = list[0];\r\n\r\n        if (events.removeListener !== undefined)\r\n          this.emit('removeListener', type, originalListener || listener);\r\n      }\r\n\r\n      return this;\r\n    };\r\n\r\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\r\n\r\nEventEmitter.prototype.removeAllListeners =\r\n    function removeAllListeners(type) {\r\n      var listeners, events, i;\r\n\r\n      events = this._events;\r\n      if (events === undefined)\r\n        return this;\r\n\r\n      // not listening for removeListener, no need to emit\r\n      if (events.removeListener === undefined) {\r\n        if (arguments.length === 0) {\r\n          this._events = Object.create(null);\r\n          this._eventsCount = 0;\r\n        } else if (events[type] !== undefined) {\r\n          if (--this._eventsCount === 0)\r\n            this._events = Object.create(null);\r\n          else\r\n            delete events[type];\r\n        }\r\n        return this;\r\n      }\r\n\r\n      // emit removeListener for all listeners on all events\r\n      if (arguments.length === 0) {\r\n        var keys = Object.keys(events);\r\n        var key;\r\n        for (i = 0; i < keys.length; ++i) {\r\n          key = keys[i];\r\n          if (key === 'removeListener') continue;\r\n          this.removeAllListeners(key);\r\n        }\r\n        this.removeAllListeners('removeListener');\r\n        this._events = Object.create(null);\r\n        this._eventsCount = 0;\r\n        return this;\r\n      }\r\n\r\n      listeners = events[type];\r\n\r\n      if (typeof listeners === 'function') {\r\n        this.removeListener(type, listeners);\r\n      } else if (listeners !== undefined) {\r\n        // LIFO order\r\n        for (i = listeners.length - 1; i >= 0; i--) {\r\n          this.removeListener(type, listeners[i]);\r\n        }\r\n      }\r\n\r\n      return this;\r\n    };\r\n\r\nfunction _listeners(target, type, unwrap) {\r\n  var events = target._events;\r\n\r\n  if (events === undefined)\r\n    return [];\r\n\r\n  var evlistener = events[type];\r\n  if (evlistener === undefined)\r\n    return [];\r\n\r\n  if (typeof evlistener === 'function')\r\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\r\n\r\n  return unwrap ?\r\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\r\n}\r\n\r\nEventEmitter.prototype.listeners = function listeners(type) {\r\n  return _listeners(this, type, true);\r\n};\r\n\r\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\r\n  return _listeners(this, type, false);\r\n};\r\n\r\nEventEmitter.listenerCount = function(emitter, type) {\r\n  if (typeof emitter.listenerCount === 'function') {\r\n    return emitter.listenerCount(type);\r\n  } else {\r\n    return listenerCount.call(emitter, type);\r\n  }\r\n};\r\n\r\nEventEmitter.prototype.listenerCount = listenerCount;\r\nfunction listenerCount(type) {\r\n  var events = this._events;\r\n\r\n  if (events !== undefined) {\r\n    var evlistener = events[type];\r\n\r\n    if (typeof evlistener === 'function') {\r\n      return 1;\r\n    } else if (evlistener !== undefined) {\r\n      return evlistener.length;\r\n    }\r\n  }\r\n\r\n  return 0;\r\n}\r\n\r\nEventEmitter.prototype.eventNames = function eventNames() {\r\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\r\n};\r\n\r\nfunction arrayClone(arr, n) {\r\n  var copy = new Array(n);\r\n  for (var i = 0; i < n; ++i)\r\n    copy[i] = arr[i];\r\n  return copy;\r\n}\r\n\r\nfunction spliceOne(list, index) {\r\n  for (; index + 1 < list.length; index++)\r\n    list[index] = list[index + 1];\r\n  list.pop();\r\n}\r\n\r\nfunction unwrapListeners(arr) {\r\n  var ret = new Array(arr.length);\r\n  for (var i = 0; i < ret.length; ++i) {\r\n    ret[i] = arr[i].listener || arr[i];\r\n  }\r\n  return ret;\r\n}\r\n\n\n//# sourceURL=webpack:///C:/Users/alexr/OneDrive/Desktop/course-projects/forkify-course-project-master/forkify-course-project/node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\r\n * Determine if an object is a Buffer\r\n *\r\n * @author   Feross Aboukhadijeh <https://feross.org>\r\n * @license  MIT\r\n */\r\n\r\n// The _isBuffer check is for Safari 5-7 support, because it's missing\r\n// Object.prototype.constructor. Remove this eventually\r\nmodule.exports = function (obj) {\r\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\r\n}\r\n\r\nfunction isBuffer (obj) {\r\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\r\n}\r\n\r\n// For Node v0.10 support. Remove this eventually.\r\nfunction isSlowBuffer (obj) {\r\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\r\nvar process = module.exports = {};\r\n\r\n// cached from whatever global is present so that test runners that stub it\r\n// don't break things.  But we need to wrap it in a try catch in case it is\r\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\r\n// function because try/catches deoptimize in certain engines.\r\n\r\nvar cachedSetTimeout;\r\nvar cachedClearTimeout;\r\n\r\nfunction defaultSetTimout() {\r\n    throw new Error('setTimeout has not been defined');\r\n}\r\nfunction defaultClearTimeout () {\r\n    throw new Error('clearTimeout has not been defined');\r\n}\r\n(function () {\r\n    try {\r\n        if (typeof setTimeout === 'function') {\r\n            cachedSetTimeout = setTimeout;\r\n        } else {\r\n            cachedSetTimeout = defaultSetTimout;\r\n        }\r\n    } catch (e) {\r\n        cachedSetTimeout = defaultSetTimout;\r\n    }\r\n    try {\r\n        if (typeof clearTimeout === 'function') {\r\n            cachedClearTimeout = clearTimeout;\r\n        } else {\r\n            cachedClearTimeout = defaultClearTimeout;\r\n        }\r\n    } catch (e) {\r\n        cachedClearTimeout = defaultClearTimeout;\r\n    }\r\n} ())\r\nfunction runTimeout(fun) {\r\n    if (cachedSetTimeout === setTimeout) {\r\n        //normal enviroments in sane situations\r\n        return setTimeout(fun, 0);\r\n    }\r\n    // if setTimeout wasn't available but was latter defined\r\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\r\n        cachedSetTimeout = setTimeout;\r\n        return setTimeout(fun, 0);\r\n    }\r\n    try {\r\n        // when when somebody has screwed with setTimeout but no I.E. maddness\r\n        return cachedSetTimeout(fun, 0);\r\n    } catch(e){\r\n        try {\r\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\r\n            return cachedSetTimeout.call(null, fun, 0);\r\n        } catch(e){\r\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\r\n            return cachedSetTimeout.call(this, fun, 0);\r\n        }\r\n    }\r\n\r\n\r\n}\r\nfunction runClearTimeout(marker) {\r\n    if (cachedClearTimeout === clearTimeout) {\r\n        //normal enviroments in sane situations\r\n        return clearTimeout(marker);\r\n    }\r\n    // if clearTimeout wasn't available but was latter defined\r\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\r\n        cachedClearTimeout = clearTimeout;\r\n        return clearTimeout(marker);\r\n    }\r\n    try {\r\n        // when when somebody has screwed with setTimeout but no I.E. maddness\r\n        return cachedClearTimeout(marker);\r\n    } catch (e){\r\n        try {\r\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\r\n            return cachedClearTimeout.call(null, marker);\r\n        } catch (e){\r\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\r\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\r\n            return cachedClearTimeout.call(this, marker);\r\n        }\r\n    }\r\n\r\n\r\n\r\n}\r\nvar queue = [];\r\nvar draining = false;\r\nvar currentQueue;\r\nvar queueIndex = -1;\r\n\r\nfunction cleanUpNextTick() {\r\n    if (!draining || !currentQueue) {\r\n        return;\r\n    }\r\n    draining = false;\r\n    if (currentQueue.length) {\r\n        queue = currentQueue.concat(queue);\r\n    } else {\r\n        queueIndex = -1;\r\n    }\r\n    if (queue.length) {\r\n        drainQueue();\r\n    }\r\n}\r\n\r\nfunction drainQueue() {\r\n    if (draining) {\r\n        return;\r\n    }\r\n    var timeout = runTimeout(cleanUpNextTick);\r\n    draining = true;\r\n\r\n    var len = queue.length;\r\n    while(len) {\r\n        currentQueue = queue;\r\n        queue = [];\r\n        while (++queueIndex < len) {\r\n            if (currentQueue) {\r\n                currentQueue[queueIndex].run();\r\n            }\r\n        }\r\n        queueIndex = -1;\r\n        len = queue.length;\r\n    }\r\n    currentQueue = null;\r\n    draining = false;\r\n    runClearTimeout(timeout);\r\n}\r\n\r\nprocess.nextTick = function (fun) {\r\n    var args = new Array(arguments.length - 1);\r\n    if (arguments.length > 1) {\r\n        for (var i = 1; i < arguments.length; i++) {\r\n            args[i - 1] = arguments[i];\r\n        }\r\n    }\r\n    queue.push(new Item(fun, args));\r\n    if (queue.length === 1 && !draining) {\r\n        runTimeout(drainQueue);\r\n    }\r\n};\r\n\r\n// v8 likes predictible objects\r\nfunction Item(fun, array) {\r\n    this.fun = fun;\r\n    this.array = array;\r\n}\r\nItem.prototype.run = function () {\r\n    this.fun.apply(null, this.array);\r\n};\r\nprocess.title = 'browser';\r\nprocess.browser = true;\r\nprocess.env = {};\r\nprocess.argv = [];\r\nprocess.version = ''; // empty string to avoid regexp issues\r\nprocess.versions = {};\r\n\r\nfunction noop() {}\r\n\r\nprocess.on = noop;\r\nprocess.addListener = noop;\r\nprocess.once = noop;\r\nprocess.off = noop;\r\nprocess.removeListener = noop;\r\nprocess.removeAllListeners = noop;\r\nprocess.emit = noop;\r\nprocess.prependListener = noop;\r\nprocess.prependOnceListener = noop;\r\n\r\nprocess.listeners = function (name) { return [] }\r\n\r\nprocess.binding = function (name) {\r\n    throw new Error('process.binding is not supported');\r\n};\r\n\r\nprocess.cwd = function () { return '/' };\r\nprocess.chdir = function (dir) {\r\n    throw new Error('process.chdir is not supported');\r\n};\r\nprocess.umask = function() { return 0; };\r\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"key\", function() { return key; });\nconst key = '82643ebe3de98ca2bd26b3272d08f8f4';\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Search */ \"./src/js/models/Search.js\");\n/* harmony import */ var _views_SearchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/SearchView */ \"./src/js/views/SearchView.js\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _models_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Recipe */ \"./src/js/models/Recipe.js\");\n// Global app controller\r\n\r\n\r\n\r\n\r\n//global state obj\r\n//search object \r\n//current recipe obj\r\n//shopping list obj\r\n//liked recipes\r\n\r\nconst state = {};\r\n\r\nconst controlSearch = async () => {\r\n    //get quey from view\r\n    const query = _views_SearchView__WEBPACK_IMPORTED_MODULE_1__[\"getInput\"]();\r\n\r\n    if(query){\r\n        //new search obj and add to state\r\n        state.search = new _models_Search__WEBPACK_IMPORTED_MODULE_0__[\"default\"](query)\r\n        //prepare ui for results\r\n        _views_SearchView__WEBPACK_IMPORTED_MODULE_1__[\"clearInput\"]();\r\n        _views_SearchView__WEBPACK_IMPORTED_MODULE_1__[\"clearResults\"]();\r\n        Object(_views_base__WEBPACK_IMPORTED_MODULE_2__[\"renderLoader\"])(_views_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].searchRes);\r\n\r\n        //search for recipes\r\n        await state.search.getResults();\r\n\r\n        //render results to ui\r\n        Object(_views_base__WEBPACK_IMPORTED_MODULE_2__[\"clearLoader\"])();\r\n        _views_SearchView__WEBPACK_IMPORTED_MODULE_1__[\"renderResults\"](state.search.results);\r\n    }\r\n\r\n}\r\n\r\n_views_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].searchForm.addEventListener('submit', e => {\r\n    e.preventDefault();\r\n    controlSearch();\r\n});\r\n\r\n_views_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].searchResPages.addEventListener('click', e => {\r\n    \r\n    const btn = e.target.closest('.btn-inline');\r\n    console.log(btn);\r\n    if(btn){\r\n        const goToPage = parseInt(btn.dataset.goto, 10);\r\n        _views_SearchView__WEBPACK_IMPORTED_MODULE_1__[\"clearResults\"]();\r\n        _views_SearchView__WEBPACK_IMPORTED_MODULE_1__[\"renderResults\"](state.search.results, goToPage);\r\n        console.log(goToPage);\r\n    }\r\n})\r\n\r\n//Recipe Controller///////////////////////////////////////////////////////////////////////////////////////////////////////\r\nconst controlRecipe = async () => {\r\n    //get id from url \r\n    const id = window.location.hash.replace('#','');\r\n    console.log(id);\r\n\r\n    if(id){\r\n        //prepare ui for changes\r\n\r\n        //create a new recipe object\r\n        state.recipe = new _models_Recipe__WEBPACK_IMPORTED_MODULE_3__[\"default\"](id);\r\n        //get recipe data\r\n        state.recipe.getRecipe()\r\n        //calculate servings and time\r\n        state.recipe.calcTime();\r\n        state.recipe.calcServings();\r\n        //render recipe\r\n        console.log(state.recipe);\r\n    }\r\n}\r\n\r\n// for these two event types call addeventlistener events on them\r\n['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Recipe.js":
/*!*********************************!*\
  !*** ./src/js/models/Recipe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recipe; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\n\r\n\r\n\r\nclass Recipe {\r\n    constructor(id){\r\n        this.id = id;\r\n    }\r\n\r\n    async getRecipe() {\r\n        try {\r\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://www.food2fork.com/api/search?key=${_config__WEBPACK_IMPORTED_MODULE_1__[\"key\"]}&rId=${this.id}`);\r\n            console.log(res);\r\n            this.title = res.data.recipes.title;\r\n            this.author = res.data.recipes.publisher;\r\n            this.img = res.data.recipes.image_url;\r\n            this.url = res.data.recipes.source_url;\r\n            this.ingredients = res.data.recipes.ingredients;\r\n        }\r\n        catch(err){\r\n            alert(`${err} Something went wrong! :(`);\r\n            console.log(err)\r\n        }\r\n    }\r\n    calcTime() {\r\n        //Assuming that we need 15 min for each 3 ingredients\r\n        const numImg = this.ingredients.length;\r\n        const periods = Math.ceil(numImg / 3);\r\n        this.time = periods * 15;\r\n    }\r\n    calcServings() {\r\n        this.servings = 4;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/models/Recipe.js?");

/***/ }),

/***/ "./src/js/models/Search.js":
/*!*********************************!*\
  !*** ./src/js/models/Search.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\n\r\n\r\n\r\nclass Search {\r\n    constructor(query){\r\n        this.query = query;\r\n        \r\n    }\r\n\r\n    async getResults() {\r\n        \r\n\r\n        try {\r\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://www.food2fork.com/api/search?key=${_config__WEBPACK_IMPORTED_MODULE_1__[\"key\"]}&q=${this.query}`);\r\n         this.results = response.data.recipes;\r\n        }\r\n        catch (err){\r\n            alert(err)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/models/Search.js?");

/***/ }),

/***/ "./src/js/views/SearchView.js":
/*!************************************!*\
  !*** ./src/js/views/SearchView.js ***!
  \************************************/
/*! exports provided: getInput, clearInput, clearResults, renderResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInput\", function() { return getInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearInput\", function() { return clearInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearResults\", function() { return clearResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResults\", function() { return renderResults; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domain */ \"./node_modules/domain-browser/source/index.js\");\n/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domain__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst getInput = () => _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchInput.value;\r\n\r\nconst clearInput = () => {\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchInput.value = '';\r\n}\r\n\r\nconst clearResults = () => {\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchResList.innerHTML = '';\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchResPages.innerHTML= '';\r\n}\r\n\r\nconst limitRecipeTitle = (title, limit = 17) => {\r\n    const newTitle = [];\r\n\r\n    if(title.length > limit){\r\n        title.split(' ').reduce((acc,cur) => {\r\n            if(acc + cur.length <= limit){\r\n                newTitle.push(cur);\r\n            }\r\n            return acc + cur.length;\r\n        }, 0);\r\n\r\n        //return result\r\n        return `${newTitle.join(' ')} ...`;\r\n    }\r\n    return title;\r\n}\r\n\r\nconst renderRecipe = recipe => {\r\n    //${recipe.recipe_id}\r\n    //console.log(recipe.recipe_id)\r\n    const markup = `\r\n    <li>\r\n        <a class=\"results__link\" href=\"#${recipe.recipe_id}\">\r\n            <figure class=\"results__fig\">\r\n            <img src=${recipe.image_url} alt=\"Test\">\r\n        </figure>\r\n        <div class=\"results__data\">\r\n                <h4 class=\"results__name\">${limitRecipeTitle(recipe.title)}</h4>\r\n                <p class=\"results__author\">${recipe.publisher}</p>\r\n            </div>\r\n        </a>\r\n    </li>\r\n    `;\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchResList.insertAdjacentHTML('beforeend', markup);\r\n}\r\n\r\nconst createButton = (page,type) =>  `\r\n                <button class=\"btn-inline results__btn--${type}\" data-goto=${type === 'prev' ? page -1 : page + 1 }>\r\n                <span>Page ${type === 'prev' ? page -1 : page + 1 }</span>\r\n                    <svg class=\"search__icon\">\r\n                        <use href=\"img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right' }\"></use>\r\n                    </svg>\r\n                </button>\r\n            `;\r\n\r\n\r\nconst renderButtons = (page,numResults,resPerPage) => {\r\n    const pages = Math.ceil(numResults / resPerPage);\r\n\r\n    let button;\r\n    if(page === 1 && page > 1){\r\n        //button go to next page\r\n       button = createButton(page, 'next');\r\n    }\r\n    else if(page < pages){\r\n        //both buttons\r\n        button = `\r\n            ${createButton(page, 'next')}\r\n            ${createButton(page, 'prev')}\r\n            `\r\n    }\r\n    else if(page === pages && pages > 1){\r\n        //only button to go to previous page\r\n        button = createButton(page, 'prev')\r\n    }\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchResPages.insertAdjacentHTML('afterbegin',button);\r\n}\r\n\r\nconst renderResults = (recipes, page = 1, resPerPage = 10) => {\r\n    console.log(recipes)\r\n    //render results of current page\r\n\r\n    const start = (page - 1) * resPerPage;\r\n    const end = page * resPerPage;\r\n\r\n    recipes.slice(start,end).forEach(renderRecipe);\r\n\r\n    //render pagination buttons\r\n    renderButtons(page, recipes.length, resPerPage);\r\n}\n\n//# sourceURL=webpack:///./src/js/views/SearchView.js?");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/*! exports provided: elements, elementStrings, renderLoader, clearLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementStrings\", function() { return elementStrings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLoader\", function() { return renderLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearLoader\", function() { return clearLoader; });\nconst elements = {\r\n    searchInput: document.querySelector('.search__field'),\r\n    searchForm: document.querySelector('.search'),\r\n    searchResList: document.querySelector('.results__list'),\r\n    searchRes: document.querySelector('.results'),\r\n    searchResPages: document.querySelector('.results__pages')\r\n};\r\n\r\nconst elementStrings = {\r\n    loader: 'loader'\r\n}\r\n\r\nconst renderLoader = parent => {\r\n    const loader = `\r\n        <div class=\"${elementStrings.loader}\">\r\n            <svg>\r\n                <use href=\"img/icons.svg#icon-cw\"></use>\r\n            </svg>\r\n        </div>\r\n    `;\r\n    parent.insertAdjacentHTML(\"afterbegin\", loader);\r\n}\r\n\r\nconst clearLoader = () => {\r\n    const loader = document.querySelector(`.${elementStrings.loader}`);\r\n    if(loader) {\r\n        loader.remove();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/views/base.js?");

/***/ })

/******/ });