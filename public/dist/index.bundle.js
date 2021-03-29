/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__.default)(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__.default)(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./webpack_src/assets/js/bean/Message.js":
/*!***********************************************!*\
  !*** ./webpack_src/assets/js/bean/Message.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _unit_DateUnit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../unit/DateUnit.js */ "./webpack_src/assets/js/unit/DateUnit.js");








var _config = new WeakMap();

var Message = /*#__PURE__*/function () {
  /**@type { Number } */

  /**@type { Number } */

  /**@type { String } */

  /**@type { Number } */

  /**@type { String } */

  /**@type { { is_self: Boolean, avatar: avatar } } */

  /**
   * 
   * @param { Number } timestamp 
   * @param { String } message 
   * @param { Number } messageType 
   */
  function Message(message_obj) {
    var user_info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Message);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "id", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "timestamp", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "message", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "messageType", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "fromUid", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "user_info", {
      is_self: null,
      avatar: null
    });

    _config.set(this, {
      writable: true,
      value: {
        /**@type { HTMLElement } */
        ele: null,
        classList: ['chat-record']
      }
    });

    if (message_obj && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__.default)(message_obj) === 'object') {
      var id = message_obj.id,
          timestamp = message_obj.timestamp,
          message = message_obj.message,
          messageType = message_obj.messageType;
      this.id = id;
      this.timestamp = timestamp;
      this.message = message;
      this.messageType = messageType;
    }

    this.user_info = user_info;
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Message, [{
    key: "init",
    value: function init() {
      this.initView();
    }
    /**
     * @param { String} message 
     * @param { 0 | 1 | 2 | 4| 13} type 
     */

  }, {
    key: "renderMessageContent",
    value: function renderMessageContent(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var result = '';

      switch (type) {
        case 0:
          {
            result = "<p class=\"content text\">".concat(message, "</p>");
          }
          ;
          break;

        case 2:
          {
            result = "<img class=\"content image\" src=\"".concat(message, "\" />");
          }
          ;
          break;

        default:
          {
            result = "<p style=\"color: red;\" class=\"content text\">".concat(message, "</p>");
          }
      }

      return result;
    }
  }, {
    key: "initView",
    value: function initView() {
      var _ele$classList;

      var config = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_5__.default)(this, _config);

      var ele = document.createElement('div');

      (_ele$classList = ele.classList).add.apply(_ele$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(config.classList));

      if (this.user_info.is_self) ele.classList.add('self');
      ele.setAttribute('message-id', this.id);
      ele.innerHTML = "\n    <div class=\"avatar-wrap\">\n      <div class=\"rectangle-box square\">\n        <div class=\"avatar no1\">\n          <img src=\"".concat(this.user_info.avatar, "\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"message-wrap\">\n      <div class=\"info\">\n        <p class=\"item\">").concat(_unit_DateUnit_js__WEBPACK_IMPORTED_MODULE_6__.DateUnit.format(this.timestamp), "</p>\n        <p class=\"item\"> MessageType: ").concat(this.messageType, "</p>\n      </div>\n      <div class=\"message ").concat(this.messageType === 13 ? 'video-call' : '', "\">\n        ").concat(this.renderMessageContent(this.message, this.messageType), "\n      </div>\n    </div>\n    ");
      config.ele = ele;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_5__.default)(this, _config).ele;
    }
  }]);

  return Message;
}();



/***/ }),

/***/ "./webpack_src/assets/js/bean/UserInfo.js":
/*!************************************************!*\
  !*** ./webpack_src/assets/js/bean/UserInfo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var UserInfo =
/**@type { String } */

/**@type { String } */

/**@type { String } */

/**@type { String } */

/**@type { Number } */

/**@type { String } */

/**@type { String } */

/**@type { Number } */

/**@type { Number } */

/**@type { Number } */
function UserInfo(id, uid, nickname, avatar, gender, age, lastMessage, diamond, star) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, UserInfo);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "id", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "uid", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "nickname", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "avatar", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "gender", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "age", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "lastMessage", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "updateBadge", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "diamond", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "star", void 0);

  this.id = id;
  this.uid = uid;
  this.nickname = nickname;
  this.avatar = avatar;
  this.gender = gender;
  this.age = age;
  this.lastMessage = lastMessage;
  this.diamond = diamond;
  this.star = star;
};



/***/ }),

/***/ "./webpack_src/assets/js/common/index.js":
/*!***********************************************!*\
  !*** ./webpack_src/assets/js/common/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultConfig": () => (/* binding */ DefaultConfig)
/* harmony export */ });
var DefaultConfig = {
  baseURL: 'https://t.livehub.cloud',
  avatar: 'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210325064114_cover.png'
};


/***/ }),

/***/ "./webpack_src/assets/js/unit/DateUnit.js":
/*!************************************************!*\
  !*** ./webpack_src/assets/js/unit/DateUnit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateUnit": () => (/* binding */ DateUnit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




var DateUnitClass = /*#__PURE__*/function () {
  function DateUnitClass() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, DateUnitClass);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "default_format_str", 'yyyy-MM-dd HH:mm:ss:ms');
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(DateUnitClass, [{
    key: "format",
    value:
    /**
     * 
     * @param { Date | Number } date_obj 
     * @param { String } format_str 
     * @param { 'date' | 'time' | 'datetime' } type 
     * @returns 
     */
    function format(date_obj, format_str, type) {
      if (!type && !format_str) format_str = "yyyy-MM-dd HH:mm:ss:ms";else if ("date" === type) format_str = "yyyy-MM-dd";else if ("time" === type) format_str = "HH:mm:ss";else if ("datetime" === type) format_str = "yyyy-MM-dd HH:mm:ss";
      if (!date_obj) date_obj = new Date();else if (typeof date_obj === 'number') date_obj = new Date(date_obj);
      var month = date_obj.getMonth() + 1;
      var day = date_obj.getDate();
      var hours = date_obj.getHours();
      var minutes = date_obj.getMinutes();
      var seconds = date_obj.getSeconds();
      format_str = format_str.replace("yyyy", date_obj.getFullYear());
      format_str = format_str.replace("MM", "".concat(month > 9 ? "" : 0).concat(month));
      format_str = format_str.replace("dd", "".concat(day > 9 ? "" : 0).concat(day));
      format_str = format_str.replace("HH", "".concat(hours > 9 ? "" : 0).concat(hours));
      format_str = format_str.replace("mm", "".concat(minutes > 9 ? "" : 0).concat(minutes));
      format_str = format_str.replace("ss", "".concat(seconds > 9 ? "" : 0).concat(seconds));
      format_str = format_str.replace("ms", date_obj.getMilliseconds());
      return format_str;
    }
  }]);

  return DateUnitClass;
}();

var DateUnit = new DateUnitClass();


/***/ }),

/***/ "./webpack_src/assets/js/unit/ObjectUnit.js":
/*!**************************************************!*\
  !*** ./webpack_src/assets/js/unit/ObjectUnit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectUnit": () => (/* binding */ ObjectUnit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");




var ObjectUnitClass = /*#__PURE__*/function () {
  function ObjectUnitClass() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ObjectUnitClass);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ObjectUnitClass, [{
    key: "isNull",
    value: function isNull(obj) {
      if (!obj || obj === undefined || obj === null) return true;
      return false;
    }
  }, {
    key: "isObject",
    value: function isObject(obj) {
      if (this.isNull(obj)) return false;
      if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(obj) !== 'object') return false;
      return true;
    }
  }, {
    key: "isEmptyObject",
    value: function isEmptyObject(obj) {
      if (!this.isObject(obj)) return false;
      if (Object.keys(obj).length > 0) return false;
      return true;
    }
  }, {
    key: "isNoEmptyObject",
    value: function isNoEmptyObject(obj) {
      if (!this.isObject(obj)) return false;
      if (Object.keys(obj).length < 1) return false;
      return true;
    }
  }, {
    key: "isNumber",
    value: function isNumber(num) {
      if (String(num) === 'NaN') return false;
      return typeof num === 'number';
    }
  }, {
    key: "isString",
    value: function isString(str) {
      return typeof str === 'string';
    }
  }, {
    key: "isEmptyString",
    value: function isEmptyString(str) {
      if (this.isNull(str)) return true;
      if (!this.isString(str)) return true;
      if (str.trim().length < 1) return true;
      return false;
    }
  }, {
    key: "isNoEmptyString",
    value: function isNoEmptyString(str) {
      return !this.isEmptyString(str);
    }
  }]);

  return ObjectUnitClass;
}();

var ObjectUnit = new ObjectUnitClass();


/***/ }),

/***/ "./webpack_src/assets/js/unit/Server.js":
/*!**********************************************!*\
  !*** ./webpack_src/assets/js/unit/Server.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Server": () => (/* binding */ Server)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 // import { Message } from '../bean/Message.js';
// import { UserInfo } from '../bean/UserInfo.js';

/**
 * @typedef { Promise<{ status: 0 | 413 | 2001, data: { }}> }
 */

var BaseResponseType;
var is_test = true;
var config = {
  baseURL: is_test ? 'https://t.livehub.cloud' : 'https://t.livehub.cloud',
  no_send_msg: false
};
(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = config.baseURL;
(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.authorization) = "wgrdg78386a";
axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function (response) {
  var res = response.data; // console.log("AxiosResposne => ", res);
  // if(res.status === 413){
  //     handleStatus413();
  //     return;
  // }
  // if(res.status === 0) res.success = true;

  return res;
}, function (error) {
  return Promise.reject(error);
});

var ServerUnit = /*#__PURE__*/function () {
  function ServerUnit() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ServerUnit);
  }
  /**
   * 获取消息列表
   * @param { {"query":{},"pageSize":20,"pageNum":1} } param 
   * @returns { Promise<{ status: Number, data: UserInfo[]}> }
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ServerUnit, [{
    key: "getMessageUserList",
    value: function getMessageUserList() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        "query": {},
        "pageSize": 20,
        "pageNum": 1
      };
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api2/message/user/list/', param);
    }
    /**
     * 获取未读消息列表
     * @param { Number } pageNum 
     * @param { Number } pageSize 
     * @param { Number } type 
     * @returns { BaseResponseType }
     */

  }, {
    key: "getUnreadMessageUserList",
    value: function getUnreadMessageUserList() {
      var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
      var param = {
        query: {
          type: type
        },
        pageSize: pageSize,
        pageNum: pageNum
      };
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api2/customer/msg/list', param);
    }
  }, {
    key: "getAlreadyReadMessageUserList",
    value: function getAlreadyReadMessageUserList() {
      var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      return this.getUnreadMessageUserList(pageNum, pageSize, 3);
    }
    /**
     * 获取和用户对话详情列表
     * @param { {"query":{"relateUid":3901604053073969},"pageSize":20,"pageNum":1} } param 
     * @returns { Promise<{ status: Number, data: Message[]}> }
     */

  }, {
    key: "getUserMessageDetail",
    value: function getUserMessageDetail() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        "query": {
          "relateUid": 3901604053073969
        },
        "pageSize": 20,
        "pageNum": 1
      };
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api2/message/user/detail/', param);
    }
    /**
     * 发送消息给用户
     * @param { String } relateUid 
     * @param { String } content 
     * @param { 0 | 1 | 3 } messageType 
     * @returns { Promise<{ status: Number, msg: String}> }
     */

  }, {
    key: "sendMessage",
    value: function sendMessage(relateUid, content) {
      var messageType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (config.no_send_msg) return;
      var param = {
        relateUid: relateUid,
        content: content,
        messageType: messageType
      };
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/message/send/', param);
    }
    /**
     * 发送媒体消息给用户
     * @param { File } filename 
     * @param { String } relateUid 
     * @param { 1 | 2 | 4 } messageType - 2: 图片
     * @returns { Promise<{ status: Number, msg: String}> }
     */

  }, {
    key: "sendMediaMessage",
    value: function sendMediaMessage(filename, relateUid, messageType) {
      if (config.no_send_msg) return;
      var param = {
        filename: filename,
        relateUid: relateUid,
        messageType: messageType
      };
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/uploadMedia/', param);
    }
    /**
     * 获取用户个人资料
     * @param { String } uid
     * @returns { Promise<{ status: Number, data: { uid: String, createdAt: String, diamond: Number}}> }
     */

  }, {
    key: "getUserProfile",
    value: function getUserProfile(uid) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/user/info/', {
        relateUid: uid
      });
    }
    /**
     * 登录
     * @param { String } username 
     * @param { String } password 
     * @returns { BaseResponseType }
     */

  }, {
    key: "login",
    value: function login(username, password) {
      return 1;
    }
  }]);

  return ServerUnit;
}();

var Server = new ServerUnit();


/***/ }),

/***/ "./webpack_src/assets/js/unit/ViewUnit.js":
/*!************************************************!*\
  !*** ./webpack_src/assets/js/unit/ViewUnit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewUnit": () => (/* binding */ ViewUnit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var ViewUnitClass = /*#__PURE__*/function () {
  function ViewUnitClass() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ViewUnitClass);
  }
  /**
   * @param { Element } ele 
   * @param { String } class_name 
   * @returns 
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ViewUnitClass, [{
    key: "parentByClass",
    value: function parentByClass(ele, class_name) {
      if (!ele || !ele instanceof Element) return ele;
      if (ele.classList.contains(class_name)) return ele;
      return this.parentByClass(ele.parentElement, class_name);
    }
  }]);

  return ViewUnitClass;
}();

var ViewUnit = new ViewUnitClass();


/***/ }),

/***/ "./webpack_src/components/ChatRoom/ChatRecordList.js":
/*!***********************************************************!*\
  !*** ./webpack_src/components/ChatRoom/ChatRecordList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRecordList": () => (/* binding */ ChatRecordList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _assets_js_bean_Message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/bean/Message.js */ "./webpack_src/assets/js/bean/Message.js");
/* harmony import */ var _assets_js_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/js/common */ "./webpack_src/assets/js/common/index.js");







var ChatRecordList = /*#__PURE__*/function () {
  /**
   * @type {{
   *  ele: HTMLElement,
   *  classList: String[],
   *  message_list: Message[],
   *  send_message_id: Number,
   * }}
   */

  /**
   * @type { Map<String, {
   *  status: 'pending' | 'failed', 'success',
   *  message: Message,
   *  ele: HTMLElement,
   * }}
   */

  /**@type { String } */
  function ChatRecordList(uid) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ChatRecordList);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "config", {
      ele: null,
      classList: ['chat-record-list'],
      message_list: [],
      send_message_id: 10000
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "already", {
      init: {
        view: false
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "MessageMap", new Map());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "uid", void 0);

    this.uid = uid;
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ChatRecordList, [{
    key: "init",
    value: function init() {
      this.initView();
    }
  }, {
    key: "initView",
    value: function initView() {
      var _ele$classList;

      var config = this.config;
      var ele = document.createElement('div');
      ele.setAttribute('uid', this.uid);

      (_ele$classList = ele.classList).add.apply(_ele$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(config.classList));

      config.ele = ele;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.config.ele;
    }
    /**
     * @param { Message | Message[] } message 
     * @param { { is_self: Boolean, avatar: avatar } } user_info
     */

  }, {
    key: "appendRecord",
    value: function appendRecord(message, user_info) {
      var _this = this;

      if (user_info.is_self) console.log("send message to: ".concat(this.uid, ": "), message);
      console.log('appendRecord: ', {
        message: message,
        user_info: user_info
      });
      if (!Array.isArray(message)) message = [message];
      message.forEach(function (msg) {
        if (!msg.id) msg.id = _this.config.send_message_id++;
        if (_this.MessageMap.has(msg.id)) return;
        var cur_user_info = {
          is_self: false,
          avatar: user_info.avatar
        };

        if (msg.fromUid !== _this.uid) {
          // console.log('No same uid: ', { from: message.fromUid, self: this.uid});
          cur_user_info.is_self = true;
          cur_user_info.avatar = _assets_js_common__WEBPACK_IMPORTED_MODULE_5__.DefaultConfig.avatar;
        }

        var message_ele = new _assets_js_bean_Message_js__WEBPACK_IMPORTED_MODULE_4__.Message(msg, cur_user_info);
        var ele = message_ele.getElement();
        var status = cur_user_info.is_self ? 'pending' : 'success';
        ele.classList.add(status);

        _this.MessageMap.set(msg.id, {
          status: 'pending',
          message: msg,
          ele: ele
        });

        _this.config.ele.appendChild(ele);
      });
    }
    /**
     * @param { Number } message_id 
     * @param { 'pending' | 'failed', 'success' } status 
     * @returns 
     */

  }, {
    key: "changeRecordStatus",
    value: function changeRecordStatus(message_id, status) {
      var obj = this.MessageMap.get(message_id);
      var ele = obj && obj.ele;
      if (!ele) return;
      ele.classList.add(status);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.config.ele.classList.add('hide-ele'); // console.log(`hide ${this.uid}: `, this.config);
    }
  }, {
    key: "show",
    value: function show() {
      this.config.ele.classList.remove('hide-ele'); // console.log(`show ${this.uid}: `, this.config);
    }
  }]);

  return ChatRecordList;
}();



/***/ }),

/***/ "./webpack_src/components/ChatRoom/SendMessage.js":
/*!********************************************************!*\
  !*** ./webpack_src/components/ChatRoom/SendMessage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendMessage": () => (/* binding */ SendMessage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");





var _require = __webpack_require__(/*! ../../assets/js/unit/ObjectUnit */ "./webpack_src/assets/js/unit/ObjectUnit.js"),
    ObjectUnit = _require.ObjectUnit;

var SendMessage = /*#__PURE__*/function () {
  /**
   * @type {{
   *  id: String,
   *  ele: HTMLElement,
   *  classList: String[],
   *  text_input: HTMLElement,
   *  button: {
   *    send_text: HTMLElement,
   *    send_image: HTMLElement,
   *  }
   * }}
   */
  function SendMessage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SendMessage);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "config", {
      id: 'send_message_wrap',
      ele: null,
      classList: ['send-message-wrap'],
      text_input: null,
      button: {
        send_text: null,
        send_image: null
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "on", {
      send_text: null,
      send_image: null
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "already", {
      init: {
        view: false
      }
    });

    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SendMessage, [{
    key: "init",
    value: function init() {
      this.initView();
      this.bindListener(); // console.log('SendMessage: ', this);
    }
  }, {
    key: "initView",
    value: function initView() {
      var _ele$classList;

      if (this.already.init.view) return;
      var config = this.config;
      var ele = document.createElement('div');
      config.ele = ele;
      ele.id = config.id;

      (_ele$classList = ele.classList).add.apply(_ele$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(config.classList));

      ele.innerHTML = "\n    <div class=\"input-wrap\">\n      <textarea class=\"text-input\"></textarea>\n    </div>\n    <div class=\"button-wrap\">\n      <label class=\"file-label\">\n        <input type=\"file\" accept=\"image/*\">\n        <span class=\"button choose-file\">Choose Image</span>\n      </label>\n      <button class=\"button send-message\">Send Message</button>\n    </div>\n    ";
      config.text_input = ele.querySelector('.text-input');
      config.button.send_text = ele.querySelector('.send-message');
      config.button.send_image = ele.querySelector('.file-label input');
      this.already.init.view = true;
    }
  }, {
    key: "bindListener",
    value: function bindListener() {
      var _this = this;

      var config = this.config;
      var that = this; //

      config.text_input.addEventListener('keypress', function (event) {
        // console.log('key: ', event.key);
        if (event.key.toLowerCase() === 'enter') {
          var text = this.value; // console.log('send text: ', text);

          that.notifyListener('send_text', {
            created_time: Date.now(),
            data: text
          });
          that.config.text_input.value = '';
        }
      }); // 

      config.button.send_text.addEventListener('click', function () {
        var text = _this.config.text_input.value;
        if (ObjectUnit.isEmptyString(text)) return;
        console.log('send text: ', text);

        _this.notifyListener('send_text', {
          created_time: Date.now(),
          data: text
        });

        _this.config.text_input.value = '';
      }); // 

      config.button.send_image.addEventListener('input', function () {
        /**@type { File } */
        var file = this.files && this.files[0];
        if (!file) return;
        if (!/image/.test(file.type)) return;
        console.log('send image: ', file);
        that.notifyListener('send_image', {
          created_time: Date.now(),
          data: file
        });
        this.value = '';
      });
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.config.ele;
    }
    /**
     * @param { 'send_text' | 'send_image' } event_name 
     * @param { Function } callback 
     */

  }, {
    key: "setListener",
    value: function setListener(event_name, callback) {
      this.on[event_name] = callback;
    }
    /**
     * @param { 'send_text' | 'send_image' } event_name 
     */

  }, {
    key: "notifyListener",
    value: function notifyListener(event_name, param) {
      var callback = this.on[event_name];
      if (typeof callback === 'function') callback(param);
    }
  }]);

  return SendMessage;
}();



/***/ }),

/***/ "./webpack_src/components/ChatRoom/index.js":
/*!**************************************************!*\
  !*** ./webpack_src/components/ChatRoom/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoom": () => (/* binding */ ChatRoom)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendMessage.js */ "./webpack_src/components/ChatRoom/SendMessage.js");
/* harmony import */ var _ChatRecordList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChatRecordList.js */ "./webpack_src/components/ChatRoom/ChatRecordList.js");
/* harmony import */ var _FastMessageList___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FastMessageList/ */ "./webpack_src/components/FastMessageList/index.js");
/* harmony import */ var _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/js/unit/Server.js */ "./webpack_src/assets/js/unit/Server.js");
/* harmony import */ var _assets_js_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/js/common */ "./webpack_src/assets/js/common/index.js");
/* harmony import */ var _assets_js_bean_UserInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/js/bean/UserInfo.js */ "./webpack_src/assets/js/bean/UserInfo.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../UserProfile */ "./webpack_src/components/UserProfile/index.js");














var ChatRoom = /*#__PURE__*/function () {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   * }}
   */

  /**
   * @type { Map<String, {
   *  is_bind_listener: Boolean,
   *  list: ChatRecordList,
   * }> }
   */

  /**
   * 保存所有用户个人信息，
   * @type { Map<String, {} }
   */

  /**@type { ChatRecordList } */
  // 当前聊天记录列表

  /**@type { SendMessage } */

  /**@type { FastMessageList } */

  /**@type { UserProfile } */
  function ChatRoom() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, ChatRoom);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "config", {
      id: 'chat_room',
      classList: ['chat-room'],
      ele: null
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "already", {
      init: {
        view: false
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "RecordListMap", new Map());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "UserProfileMap", new Map());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "curChatRecordList", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "sendMessage", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "fastMessageList", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "userProfile", void 0);

    this.sendMessage = new _SendMessage_js__WEBPACK_IMPORTED_MODULE_6__.SendMessage();
    this.fastMessageList = new _FastMessageList___WEBPACK_IMPORTED_MODULE_8__.FastMessageList();
    this.userProfile = new _UserProfile__WEBPACK_IMPORTED_MODULE_12__.UserProfile();
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(ChatRoom, [{
    key: "init",
    value: function init() {
      this.initView();
      this.bindListener();
    }
  }, {
    key: "initView",
    value: function initView() {
      var _ele$classList;

      if (this.already.init.view === true) return;
      var ele = document.createElement('div');

      (_ele$classList = ele.classList).add.apply(_ele$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(this.config.classList));

      this.config.ele = ele;
      ele.appendChild(this.userProfile.getElement());
      ele.appendChild(this.fastMessageList.getElement());
      ele.appendChild(this.sendMessage.getElement());
      this.already.init.view = true;
    }
  }, {
    key: "appendRecordToList",
    value: function appendRecordToList(message, user_info) {
      if (!this.curChatRecordList) return;
      this.curChatRecordList.appendRecord(message, user_info);
      this.curChatRecordList.getElement().scrollTop = this.curChatRecordList.getElement().scrollHeight;
    }
  }, {
    key: "bindListener",
    value: function bindListener() {
      var _this = this;

      var default_avatar = _assets_js_common__WEBPACK_IMPORTED_MODULE_10__.DefaultConfig.avatar;
      this.sendMessage.setListener('send_text', function (param) {
        var _this$curChatRecordLi;

        if (!((_this$curChatRecordLi = _this.curChatRecordList) !== null && _this$curChatRecordLi !== void 0 && _this$curChatRecordLi.uid)) return;
        _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_9__.Server.sendMessage(_this.curChatRecordList.uid, param.data, 0);

        _this.appendRecordToList({
          timestamp: param.created_time,
          message: param.data,
          messageType: 0
        }, {
          is_self: true,
          avatar: default_avatar
        });
      });
      this.sendMessage.setListener('send_image', function (param) {
        var _this$curChatRecordLi2;

        if (!((_this$curChatRecordLi2 = _this.curChatRecordList) !== null && _this$curChatRecordLi2 !== void 0 && _this$curChatRecordLi2.uid)) return;
        _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_9__.Server.sendMediaMessage(param.data, _this.curChatRecordList.uid, 2);

        _this.appendRecordToList({
          timestamp: param.created_time,
          message: URL.createObjectURL(param.data),
          messageType: 2
        }, {
          is_self: true,
          avatar: default_avatar
        });
      }); // fast message list

      this.fastMessageList.setListener('select_message', function (param) {
        var created_time = param.created_time,
            data = param.data,
            type = param.type;
        _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_9__.Server.sendMessage(_this.curChatRecordList.uid, data, type);

        _this.appendRecordToList({
          timestamp: created_time,
          message: data,
          messageType: type
        }, {
          is_self: true,
          avatar: default_avatar
        });
      });
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.config.ele;
    }
  }, {
    key: "updateCurUserProfile",
    value: function () {
      var _updateCurUserProfile = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(uid) {
        var profile, _yield$Server$getUser, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.userProfile.hide();
                profile = this.UserProfileMap.get(uid);

                if (profile) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_9__.Server.getUserProfile(uid);

              case 5:
                _yield$Server$getUser = _context.sent;
                data = _yield$Server$getUser.data;
                profile = data;
                this.UserProfileMap.set(uid, profile);

              case 9:
                this.userProfile.updateProfile(profile || {});

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateCurUserProfile(_x) {
        return _updateCurUserProfile.apply(this, arguments);
      }

      return updateCurUserProfile;
    }()
    /**
     * @param { UserInfo } user 
     */

  }, {
    key: "notifyUserChaned",
    value: function () {
      var _notifyUserChaned = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2(user) {
        var _this$curChatRecordLi3, _this$RecordListMap$g;

        var uid, avatar, curChatRecordList, _yield$Server$getUser2, status, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.updateCurUserProfile(user.uid);
                console.log('notifyUserChaned: ', user);

                if (user) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                uid = user.uid, avatar = user.avatar;
                (_this$curChatRecordLi3 = this.curChatRecordList) === null || _this$curChatRecordLi3 === void 0 ? void 0 : _this$curChatRecordLi3.hide();
                curChatRecordList = (_this$RecordListMap$g = this.RecordListMap.get(uid)) === null || _this$RecordListMap$g === void 0 ? void 0 : _this$RecordListMap$g.list;

                if (curChatRecordList) {
                  _context2.next = 21;
                  break;
                }

                curChatRecordList = new _ChatRecordList_js__WEBPACK_IMPORTED_MODULE_7__.ChatRecordList(uid);
                this.config.ele.insertBefore(curChatRecordList.getElement(), this.fastMessageList.getElement());
                this.RecordListMap.set(uid, {
                  list: curChatRecordList
                });
                _context2.next = 13;
                return _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_9__.Server.getUserMessageDetail({
                  query: {
                    relateUid: uid
                  },
                  pageSize: 20,
                  pageNum: 1
                });

              case 13:
                _yield$Server$getUser2 = _context2.sent;
                status = _yield$Server$getUser2.status;
                data = _yield$Server$getUser2.data;

                if (!(status !== 0 || !Array.isArray(data))) {
                  _context2.next = 18;
                  break;
                }

                return _context2.abrupt("return");

              case 18:
                data.reverse();
                curChatRecordList.appendRecord(data, {
                  is_self: false,
                  avatar: avatar
                });
                console.log('message detail: ', data);

              case 21:
                /** 点击对话直接刷新 */
                // let { status, data } = await Server.getUserMessageDetail({
                //   query: {
                //     relateUid: uid
                //   },
                //   pageSize: 20, 
                //   pageNum: 1
                // });
                // if (status !== 0 || !Array.isArray(data)) return;
                // data.reverse();
                // curChatRecordList.appendRecord(data, {
                //   is_self: false, avatar: avatar
                // });
                // console.log('message detail: ', data);

                /**  */
                this.RecordListMap.forEach(function (obj) {
                  if (obj.list.uid !== uid) obj.list.hide();else console.log('Same UID, break.');
                });
                this.curChatRecordList = curChatRecordList;
                curChatRecordList.show();
                curChatRecordList.getElement().scrollTop = curChatRecordList.getElement().scrollHeight;

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function notifyUserChaned(_x2) {
        return _notifyUserChaned.apply(this, arguments);
      }

      return notifyUserChaned;
    }()
  }]);

  return ChatRoom;
}();



/***/ }),

/***/ "./webpack_src/components/FastMessageList/index.js":
/*!*********************************************************!*\
  !*** ./webpack_src/components/FastMessageList/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastMessageList": () => (/* binding */ FastMessageList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _assets_js_unit_ViewUnit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/unit/ViewUnit.js */ "./webpack_src/assets/js/unit/ViewUnit.js");






var FastMessageList = /*#__PURE__*/function () {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   *  text_list: HTMLElement, image_list: HTMLElement
   * }}
   */
  function FastMessageList(id, classList) {
    var _this$config$classLis;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FastMessageList);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "config", {
      id: 'fast_message_list_wrap',
      classList: ['fast-message-list-wrap'],
      ele: null,
      text_list: null,
      image_list: null
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "on", {
      select_message: null
    });

    if (typeof id === 'string') this.config.id = id;
    if (Array.isArray(classList)) (_this$config$classLis = this.config.classList).push.apply(_this$config$classLis, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(classList));
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FastMessageList, [{
    key: "init",
    value: function init() {
      this.initView();
      this.bindListener();
    }
  }, {
    key: "bindListener",
    value: function bindListener() {
      var that = this;
      this.config.text_list.addEventListener('click', function (event) {
        var target = event.target;
        that.notifyListener('select_message', {
          created_time: Date.now(),
          data: target.innerText,
          type: 0
        });
      });
      this.config.image_list.addEventListener('click', function (event) {
        var target = event.target;
        if (!target.classList.contains('item')) return;
        that.notifyListener('select_message', {
          created_time: Date.now(),
          data: target.getAttribute('src'),
          type: 2
        });
      });
    }
  }, {
    key: "fastTextList",
    value: function fastTextList() {
      var arr = ['Hello there, how may I help you?', "Hello there, please let me know if you have any problems while using the app. I am always here to help. :)\n\n      Best,\n      Emily", 'Thanks.', 'Please try to refresh your Wallet page. If you still cannot see the balance, please provide the purchasing record screenshot for our reference.', 'Your account would be deleted in 10 minutes. Please do not login again, your account would be reactivated.', 'All our users are verified. If you think someone is fake, you could make a report. You may click the button on the top right corner to block a specific person and he/she would not show on your profile anymore.', 'You may swipe to match with the person you like and then send them messages for free. You could even video call them privately. Hope you enjoy it!', 'Sorry it is not location based app, we provide wordwide users for matching.', "Sorry, I m here to work solving users' problems only :)", 'You may buy diamonds in the wallet.', "Hello, I am Emily, anything I can help?\n\n      :)"];
      var listHTML = [];
      arr.forEach(function (text) {
        listHTML.push("<p class=\"item\">".concat(text, "</p>"));
      });
      return listHTML.join('');
    }
  }, {
    key: "fastImageList",
    value: function fastImageList() {
      var arr = ['https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210325104955_cover.jpeg', 'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210326020742_cover.jpeg', 'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210326020846_cover.jpeg', 'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210326020917_cover.jpeg'];
      var listHTML = [];
      arr.forEach(function (text) {
        listHTML.push("\n      <img class=\"item\" src=\"".concat(text, "\" />\n      <img class=\"preview\" src=\"").concat(text, "\" />\n      "));
      });
      return listHTML.join('');
    }
  }, {
    key: "initView",
    value: function initView() {
      var _ele$classList;

      var config = this.config;
      var ele = config.ele;
      if (ele) return;
      ele = document.createElement('div');
      ele.id = config.id;

      (_ele$classList = ele.classList).add.apply(_ele$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(config.classList));

      config.ele = ele;
      ele.innerHTML = "\n    <input checked=\"true\" id=\"fast_message_list_switch_input\" type=\"checkbox\" />\n    <label class=\"switch\" for=\"fast_message_list_switch_input\">\n      <p></p>\n    </label>\n    <div class=\"fast-message-list\">\n      <div class=\"text-list\">\n        ".concat(this.fastTextList(), "\n      </div>\n      <div class=\"image-list\">\n        ").concat(this.fastImageList(), "\n      </div>\n    </div>\n    ");
      config.text_list = ele.querySelector('.text-list');
      config.image_list = ele.querySelector('.image-list');
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.config.ele;
    }
    /**
     * @param { 'select_message' } event_name 
     * @param { Function({ created_time: Number, data: String, type: 'text' | 'image' }) } callback 
     */

  }, {
    key: "setListener",
    value: function setListener(event_name, callback) {
      this.on[event_name] = callback;
    }
    /**
     * @param { 'select_message' } event_name 
     * @param { { created_time: Number, data: String, type: 'text' | 'image' } } param 
     */

  }, {
    key: "notifyListener",
    value: function notifyListener(event_name, param) {
      var callback = this.on[event_name];
      if (typeof callback === 'function') callback(param);
    }
  }]);

  return FastMessageList;
}();



/***/ }),

/***/ "./webpack_src/components/UserList/UserWrap.js":
/*!*****************************************************!*\
  !*** ./webpack_src/components/UserList/UserWrap.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserWrap": () => (/* binding */ UserWrap)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../View */ "./webpack_src/components/View/index.js");
/* harmony import */ var _assets_js_unit_ObjectUnit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/js/unit/ObjectUnit.js */ "./webpack_src/assets/js/unit/ObjectUnit.js");
/* harmony import */ var _assets_js_bean_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/js/bean/UserInfo.js */ "./webpack_src/assets/js/bean/UserInfo.js");







var serial_number = 1;

var UserWrap = /*#__PURE__*/function () {
  /**@type { UserInfo } */

  /**
   * @type {{
   *  classList: String[],
   *  ele: HTMLElement,
   *  input: HTMLElement,
   *  badge: HTMLElement,
   *  last_message: HTMLElement,
   * }}
   */

  /**
   * @param { UserInfo } user 
   */
  function UserWrap(user) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, UserWrap);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "user", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "config", {
      classList: ['user-wrap'],
      ele: null,
      input: null,
      badge: null,
      last_message: null
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "on", {
      change: null,
      selected: null
    });

    this.user = user;
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(UserWrap, [{
    key: "init",
    value: function init() {
      this.initView();
      this.bindListener();
    }
  }, {
    key: "initView",
    value: function initView() {
      var _ele$classList;

      if (_assets_js_unit_ObjectUnit_js__WEBPACK_IMPORTED_MODULE_5__.ObjectUnit.isEmptyObject(this.user)) return; // console.log('UserWrap.initView: ', { user: this.user, config: this.config});

      var user = this.user;
      var config = this.config;
      var ele = config.ele;
      if (ele) return;
      ele = document.createElement('label');

      (_ele$classList = ele.classList).add.apply(_ele$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(config.classList));

      ele.innerHTML = "\n    <input uid=\"".concat(user.uid, "\" type=\"radio\" name=\"list-user\" >\n    <div class=\"user\">\n      <div class=\"serial ").concat(user.diamond > 0 ? 'diamond' : '', "\">").concat(serial_number++, "</div>\n      <div class=\"avatar-wrap ").concat(user.star > 0 ? 'star' : '', "\">\n        <div class=\"rectangle-box square\">\n          <div class=\"avatar no1\">\n            <img src=\"").concat(user.avatar, "\" />\n          </div>\n          <div class=\"badge no2\">\xB7</div>\n        </div>\n      </div>\n      <div class=\"message-wrap\">\n        <h2 class=\"name\">").concat(user.nickname, "</h2>\n        <p class=\"last-message\">").concat(user.lastMessage, "</p>\n        <p class=\"diamond-and-star\">dimond: ").concat(user.diamond, " / star: ").concat(user.star, "</p>\n      </div>\n    </div>\n    ");
      config.ele = ele;
      config.badge = ele.querySelector('.badge');
      config.input = ele.querySelector('input');
      config.last_message = ele.querySelector('.last-message');
    }
  }, {
    key: "bindListener",
    value: function bindListener() {
      var that = this;
      this.config.input.addEventListener('change', function () {
        var is_checked = this.checked;
        var param = {
          is_checked: is_checked,
          uid: that.user.uid
        };
        that.notifyListener('change', param);
        that.notifyListener('selected', param);
      });
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.config.ele;
    }
    /**
     * @param { 'change' | 'selected' } event_name 
     * @param { Function({ is_checked: Boolean, uid: String }) } callback 
     */

  }, {
    key: "setListener",
    value: function setListener(event_name, callback) {
      this.on[event_name] = callback;
    }
    /**
     * @param { 'change' | 'selected' } event_name
     * @param { { is_checked: Boolean, uid: String } } param
     */

  }, {
    key: "notifyListener",
    value: function notifyListener(event_name, param) {
      var callback = this.on[event_name];
      if (typeof callback === 'function') callback(param);
    }
  }, {
    key: "checked",
    value: function checked() {
      this.config.input.checked = true;
    }
  }, {
    key: "updateBadge",
    value: function updateBadge(num) {
      var badge = this.config.badge;

      if (num > 0) {
        badge.classList.remove('hide-ele');
        badge.innerText = num;
      } else {
        badge.classList.add('hide-ele');
      }
    }
  }, {
    key: "updateLastMessage",
    value: function updateLastMessage(message) {
      this.config.last_message.innerText = message;
    }
    /**
     * @param { '' | 'diamond' | 'star' } filter
     */

  }, {
    key: "hide",
    value: function hide(filter, reserve) {
      var flag = "";

      if (reserve) {
        flag = 'no-' + filter;
      } else {
        switch (filter) {
          case 'diamond':
            flag = this.user.diamond > 0 ? '' : 'no-diamond';
            break;

          case 'star':
            flag = this.user.star > 0 ? '' : 'no-star';
            break;

          default:
            flag = 'hide-ele';
        }
      } // console.log('UserWrap.hide: ', { filter, reserve, flag, list: this.config.ele.classList});
      // return;


      if (!flag) return;

      if (reserve) {
        var _this$config$ele;

        (_this$config$ele = this.config.ele) === null || _this$config$ele === void 0 ? void 0 : _this$config$ele.classList.remove(flag);
      } else {
        var _this$config$ele2;

        (_this$config$ele2 = this.config.ele) === null || _this$config$ele2 === void 0 ? void 0 : _this$config$ele2.classList.add(flag);
      }
    }
    /**
     * @param { '' | 'diamond' | 'star' } filter
     */

  }, {
    key: "show",
    value: function show(filter) {
      this.hide(filter, true);
    }
  }]);

  return UserWrap;
}();



/***/ }),

/***/ "./webpack_src/components/UserList/index.js":
/*!**************************************************!*\
  !*** ./webpack_src/components/UserList/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserList": () => (/* binding */ UserList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _assets_js_bean_UserInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/bean/UserInfo.js */ "./webpack_src/assets/js/bean/UserInfo.js");
/* harmony import */ var _UserWrap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserWrap.js */ "./webpack_src/components/UserList/UserWrap.js");
/* harmony import */ var _assets_js_unit_ObjectUnit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/js/unit/ObjectUnit.js */ "./webpack_src/assets/js/unit/ObjectUnit.js");








var UserList = /*#__PURE__*/function () {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   *  more_list_wrap: HTMLElement, more_list: HTMLElement,
   *  filter_diamond: HTMLElement, filter_star: HTMLElement,
   *  filter: {
   *    diamond: Boolean, star: Boolean
   *  }
   * }}
   */

  /**
   * @type { Map<String, {
   *  created_time: Number,
   *  updated_time: Number,
   *  user: UserInfo,
   *  user_wrap: UserWrap,
   * }> }
   */
  function UserList(id, classList) {
    var _this$config$classLis;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, UserList);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "config", {
      id: 'user_list',
      classList: ['user-list'],
      ele: null,
      more_list_wrap: null,
      more_list: null,
      filter_diamond: null,
      filter_star: null,
      filter: {
        diamond: false,
        star: false
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "UserMap", new Map());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "on", {
      changed_user: null,
      more_list: null
    });

    if (typeof id === 'string') this.config.id = id;
    if (Array.isArray(classList)) (_this$config$classLis = this.config.classList).push.apply(_this$config$classLis, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(classList));
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(UserList, [{
    key: "init",
    value: function init() {
      this.initView();
      this.bindListener();
    }
  }, {
    key: "initView",
    value: function initView() {
      var _ele$classList;

      var config = this.config;
      var ele = config.ele;
      if (ele) return;
      ele = document.createElement('div');
      ele.id = config.id;

      (_ele$classList = ele.classList).add.apply(_ele$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(config.classList));

      config.ele = ele;
      ele.innerHTML = "\n    <div class=\"filter-grid\">\n      <label class=\"filter\">\n        <input type=\"checkbox\" name=\"filter-diamond\" />\n        <span>\u6709\u94BB\u77F3</span>\n      </label>\n      <label class=\"filter\">\n        <input type=\"checkbox\" name=\"filter-star\" />\n        <span>\u6709\u6D88\u8D39</span>\n      </label>\n    </div>\n    <div class=\"more-list-wrap\">\n      <button class=\"more-list\">more</button>\n    </div>\n    ";
      config.more_list_wrap = ele.querySelector('.more-list-wrap');
      config.more_list = ele.querySelector('.more-list');
      config.filter_diamond = ele.querySelector('input[name="filter-diamond"]');
      config.filter_star = ele.querySelector('input[name="filter-star"]');
    }
  }, {
    key: "bindListener",
    value: function bindListener() {
      var _this = this;

      // let that = this;
      var moreListener = function () {
        var timer;
        var flag = true;
        return function () {
          if (!flag) return;
          flag = false;

          _this.notifyListener('more_list');

          if (timer) clearTimeout(timer);
          timer = setInterval(function () {
            flag = true;
          }, 2000);
        };
      }();

      this.config.more_list.addEventListener('click', function () {
        moreListener(this);
      }); // filter

      this.config.filter_diamond.addEventListener('change', function () {
        var is_checked = _this.config.filter_diamond.checked;
        _this.config.filter.diamond = is_checked;

        _this.UserMap.forEach(function (user) {
          is_checked ? user.user_wrap.hide('diamond') : user.user_wrap.show('diamond');
        });
      });
      this.config.filter_star.addEventListener('change', function () {
        var is_checked = _this.config.filter_star.checked;
        _this.config.filter.star = is_checked;

        _this.UserMap.forEach(function (user) {
          is_checked ? user.user_wrap.hide('star') : user.user_wrap.show('star');
        });
      }); // let scroll_timer = null;
      // let can_scroll = true;
      // this.config.ele.addEventListener('scroll', function(){
      //   if (!can_scroll) return;
      //   can_scroll = false;
      //   let clientHeight = this.clientHeight;
      //   let scrollHeight = this.scrollHeight;
      //   let scrollTop = this.scrollTop;
      //   console.log('UserList Scroll: ', { clientHeight, scrollTop, scrollHeight});
      //   if (scrollTop + clientHeight + 5 >= scrollHeight) {
      //     console.log('Already Scroll To Bottom.');
      //   } else console.log('No Scroll To Bottom.');
      //   scroll_timer = setTimeout(() => {
      //     can_scroll = true;
      //   }, 500);
      // });
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.config.ele;
    }
    /**
     * @param { UserInfo } user 
     */

  }, {
    key: "appendUser",
    value: function appendUser(user) {
      var _this2 = this;

      if (_assets_js_unit_ObjectUnit_js__WEBPACK_IMPORTED_MODULE_6__.ObjectUnit.isEmptyObject(user)) return;
      var cur = this.UserMap.get(user.uid);

      if (!cur) {
        cur = {
          created_time: Date.now(),
          user: user
        };
        cur.user_wrap = new _UserWrap_js__WEBPACK_IMPORTED_MODULE_5__.UserWrap(user);
        cur.user_wrap.setListener('selected', function (param) {
          _this2.UserMap.get(user.uid).user_wrap.updateBadge(0);

          if (!param.is_checked) return;

          _this2.notifyListener('changed_user', {
            is_checked: true,
            user: user
          });
        }); // cur.user_wrap.hide('diamond');
        // cur.user_wrap.hide('star');

        this.config.ele.insertBefore(cur.user_wrap.getElement(), this.config.more_list_wrap);
        this.UserMap.set(user.uid, cur);
      }

      cur.user_wrap.updateBadge(user.unReadCount);
      cur.user_wrap.updateLastMessage(user.lastMessage);
      cur.updated_time = Date.now();
      cur.user = user;

      if (this.UserMap.size === 1) {
        cur.user_wrap.checked();
        cur.user_wrap.updateBadge(0);
        this.notifyListener('changed_user', {
          is_checked: true,
          user: cur.user
        });
      }
    }
    /**
     * @param { 'changed_user' | 'more_list' } event_name 
     * @param { Function({ is_checked: Boolean, uid: String }) } callback 
     */

  }, {
    key: "setListener",
    value: function setListener(event_name, callback) {
      this.on[event_name] = callback;
    }
    /**
     * @param { 'changed_user' | 'more_list' } event_name 
     * @param { Function({ is_checked: Boolean, user: UserInfo }) } param 
     */

  }, {
    key: "notifyListener",
    value: function notifyListener(event_name, param) {
      var callback = this.on[event_name];
      if (typeof callback === 'function') callback(param);
    }
  }]);

  return UserList;
}();



/***/ }),

/***/ "./webpack_src/components/UserProfile/index.js":
/*!*****************************************************!*\
  !*** ./webpack_src/components/UserProfile/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfile": () => (/* binding */ UserProfile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _assets_js_unit_ViewUnit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/unit/ViewUnit.js */ "./webpack_src/assets/js/unit/ViewUnit.js");






var UserProfile = /*#__PURE__*/function () {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   *  text_list: HTMLElement, image_list: HTMLElement,
   *  info: {
   *    uid: HTMLElement, diamond: HTMLElement, createdAt: HTMLElement
   *  }
   * }}
   */
  function UserProfile(id, classList) {
    var _this$config$classLis;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, UserProfile);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "config", {
      id: 'user_profile_wrap',
      classList: ['user-profile-wrap', 'hide-ele'],
      ele: null,
      info: {
        uid: null,
        diamond: null,
        nickname: null,
        createdAt: null
      }
    });

    if (typeof id === 'string') this.config.id = id;
    if (Array.isArray(classList)) (_this$config$classLis = this.config.classList).push.apply(_this$config$classLis, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(classList));
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(UserProfile, [{
    key: "init",
    value: function init() {
      this.initView();
    }
  }, {
    key: "renderUserProfileHTML",
    value: function renderUserProfileHTML() {
      for (var key in this.config.info) {
        var info_ele = document.createElement('p');
        info_ele.classList.add('item', key);
        this.config.info[key] = info_ele;
        this.config.ele.appendChild(info_ele);
      }
    }
  }, {
    key: "initView",
    value: function initView() {
      var _ele$classList;

      var config = this.config;
      var ele = config.ele;
      if (ele) return;
      ele = document.createElement('div');
      ele.id = config.id;

      (_ele$classList = ele.classList).add.apply(_ele$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(config.classList));

      config.ele = ele;
      this.renderUserProfileHTML();
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.config.ele;
    }
    /**
     * @param { { uid: String, createdAt: String, diamond: Number} } profile 
     */

  }, {
    key: "updateProfile",
    value: function updateProfile(profile) {
      this.config.ele.classList.remove('hide-ele');

      for (var key in this.config.info) {
        this.config.info[key].innerHTML = "<span>".concat(key, "</span>: <b>").concat(profile[key], "</b>");
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.config.ele.classList.add('hide-ele');
    }
  }]);

  return UserProfile;
}();



/***/ }),

/***/ "./webpack_src/components/View/index.js":
/*!**********************************************!*\
  !*** ./webpack_src/components/View/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var View = /*#__PURE__*/function () {
  function View() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, View);

    this.init();
  }
  /**
   * @abstract
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(View, [{
    key: "init",
    value: function init() {}
    /**@abstract */

  }, {
    key: "initView",
    value: function initView() {}
  }]);

  return View;
}();



/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./webpack_src/pages/index/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UserList */ "./webpack_src/components/UserList/index.js");
/* harmony import */ var _components_ChatRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ChatRoom */ "./webpack_src/components/ChatRoom/index.js");
/* harmony import */ var _assets_js_unit_Server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/js/unit/Server */ "./webpack_src/assets/js/unit/Server.js");
/* harmony import */ var _assets_js_bean_UserInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/js/bean/UserInfo */ "./webpack_src/assets/js/bean/UserInfo.js");






if (typeof Promise !== 'function') {
  alert('Your Browser Not Support Promise.');
}




 // import { ObjectUnit } from '../../assets/js/unit/ObjectUnit';

var user_list_arr = [{
  id: 10001,
  uid: 12345,
  nickname: 'Jack Ma',
  avatar: 'https://sw.cool3c.com/user/99588/2018/7f8bb260-943c-4b9d-b58b-4ed782c8761a.jpg'
}, {
  id: 10002,
  uid: 12346,
  nickname: 'Pony Ma',
  avatar: 'https://sw.cool3c.com/user/99588/2018/7f8bb260-943c-4b9d-b58b-4ed782c8761a.jpg'
}, {
  id: 10003,
  uid: 12347,
  nickname: 'Wang Jianlin',
  avatar: 'https://sw.cool3c.com/user/99588/2018/7f8bb260-943c-4b9d-b58b-4ed782c8761a.jpg'
}];

var ThePage = /*#__PURE__*/function () {
  /**@type { UserList } */

  /**@type { ChatRoom } */
  function ThePage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ThePage);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "config", {
      /**@type { HTMLElement } */
      ele: null,

      /**@type { HTMLElement } */
      parent: null,

      /**@type { String } */
      parent_cssSelector: '#chat_block',
      // 加载至第几页未读消息用户列表
      pageNum: {
        user_list: 2
      },
      // 页面是否可见
      page_visible: true
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "already", {
      init: {
        view: false
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "userList", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "chatRoom", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "UserInfoMap", new Map());

    this.userList = new _components_UserList__WEBPACK_IMPORTED_MODULE_5__.UserList();
    this.chatRoom = new _components_ChatRoom__WEBPACK_IMPORTED_MODULE_6__.ChatRoom();
    this.init();
  }
  /**
   * @type { Map<String, UserInfo> }
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ThePage, [{
    key: "init",
    value: function init() {
      this.initView();
      this.getMessageUserList();
      this.bindListener();
      this.startMessageUserListTimer();
    }
  }, {
    key: "initView",
    value: function initView() {
      if (this.already.init.view) return;
      var config = this.config;
      var parent = document.querySelector(config.parent_cssSelector);
      config.parent = parent;
      parent.appendChild(this.userList.getElement());
      parent.appendChild(this.chatRoom.getElement());
      this.already.init.view = true;
    }
  }, {
    key: "getMessageUserList",
    value: function () {
      var _getMessageUserList = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var _this = this;

        var pageNum,
            _yield$Server$getUnre,
            status,
            data,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageNum = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
                _context.next = 3;
                return _assets_js_unit_Server__WEBPACK_IMPORTED_MODULE_7__.Server.getUnreadMessageUserList(pageNum);

              case 3:
                _yield$Server$getUnre = _context.sent;
                status = _yield$Server$getUnre.status;
                data = _yield$Server$getUnre.data;

                if (!(status !== 0)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                console.log('getMessageUserList: ', data);
                data.sort(function (a, b) {
                  return b.diamond - a.diamond;
                });
                data.forEach(function (user) {
                  user.uid = user.relateUid;

                  _this.userList.appendUser(user);

                  _this.UserInfoMap.set(user.uid, user);
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getMessageUserList() {
        return _getMessageUserList.apply(this, arguments);
      }

      return getMessageUserList;
    }()
  }, {
    key: "startMessageUserListTimer",
    value: function startMessageUserListTimer() {
      var _this2 = this;

      var usp = new URLSearchParams(location.search);

      if (usp.get('timer') === 'on') {
        var sec = ~~usp.get('sec');
        var duration = sec > 15 ? sec * 1000 : 15000;
        console.log('Start Timer: ', {
          duration: duration
        });
        setInterval(function () {
          _this2.getMessageUserList();
        }, duration);
      }
    }
  }, {
    key: "bindListener",
    value: function bindListener() {
      var _this3 = this;

      // 切换聊天用户
      this.userList.setListener('changed_user', function (param) {
        var is_checked = param.is_checked,
            user = param.user;
        if (is_checked) _this3.chatRoom.notifyUserChaned(user);
      }); // 更多未读消息用户列表

      this.userList.setListener('more_list', function () {
        _this3.getMessageUserList(_this3.config.pageNum.user_list++);
      }); // 检测页面是否可见

      document.addEventListener('visibilitychange', function () {
        var visible = document.visibilityState;
        _this3.config.page_visible === (visible === "visible");
      });
    }
  }]);

  return ThePage;
}();

var thePage = new ThePage();
window.thePage = thePage;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvYmVhbi9NZXNzYWdlLmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2Fzc2V0cy9qcy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL3VuaXQvRGF0ZVVuaXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL3VuaXQvT2JqZWN0VW5pdC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvdW5pdC9TZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL3VuaXQvVmlld1VuaXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9DaGF0Um9vbS9DaGF0UmVjb3JkTGlzdC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9jb21wb25lbnRzL0NoYXRSb29tL1NlbmRNZXNzYWdlLmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvQ2hhdFJvb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9GYXN0TWVzc2FnZUxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9Vc2VyTGlzdC9Vc2VyV3JhcC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9jb21wb25lbnRzL1VzZXJMaXN0L2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvVXNlclByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9WaWV3L2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpdmVpbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saXZlaW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpdmVpbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpdmVpbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJtZXNzYWdlX29iaiIsInVzZXJfaW5mbyIsImlzX3NlbGYiLCJhdmF0YXIiLCJlbGUiLCJjbGFzc0xpc3QiLCJpZCIsInRpbWVzdGFtcCIsIm1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsImluaXQiLCJpbml0VmlldyIsInR5cGUiLCJyZXN1bHQiLCJjb25maWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJEYXRlVW5pdCIsInJlbmRlck1lc3NhZ2VDb250ZW50IiwiVXNlckluZm8iLCJ1aWQiLCJuaWNrbmFtZSIsImdlbmRlciIsImFnZSIsImxhc3RNZXNzYWdlIiwiZGlhbW9uZCIsInN0YXIiLCJEZWZhdWx0Q29uZmlnIiwiYmFzZVVSTCIsIkRhdGVVbml0Q2xhc3MiLCJkYXRlX29iaiIsImZvcm1hdF9zdHIiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInJlcGxhY2UiLCJnZXRGdWxsWWVhciIsImdldE1pbGxpc2Vjb25kcyIsIk9iamVjdFVuaXRDbGFzcyIsIm9iaiIsInVuZGVmaW5lZCIsImlzTnVsbCIsImlzT2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm51bSIsIlN0cmluZyIsInN0ciIsImlzU3RyaW5nIiwidHJpbSIsImlzRW1wdHlTdHJpbmciLCJPYmplY3RVbml0IiwiQmFzZVJlc3BvbnNlVHlwZSIsImlzX3Rlc3QiLCJub19zZW5kX21zZyIsImF4aW9zIiwicmVzcG9uc2UiLCJyZXMiLCJkYXRhIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiU2VydmVyVW5pdCIsInBhcmFtIiwicGFnZU51bSIsInBhZ2VTaXplIiwicXVlcnkiLCJnZXRVbnJlYWRNZXNzYWdlVXNlckxpc3QiLCJyZWxhdGVVaWQiLCJjb250ZW50IiwiZmlsZW5hbWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiU2VydmVyIiwiVmlld1VuaXRDbGFzcyIsImNsYXNzX25hbWUiLCJFbGVtZW50IiwiY29udGFpbnMiLCJwYXJlbnRCeUNsYXNzIiwicGFyZW50RWxlbWVudCIsIlZpZXdVbml0IiwiQ2hhdFJlY29yZExpc3QiLCJtZXNzYWdlX2xpc3QiLCJzZW5kX21lc3NhZ2VfaWQiLCJ2aWV3IiwiTWFwIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJtc2ciLCJNZXNzYWdlTWFwIiwiaGFzIiwiY3VyX3VzZXJfaW5mbyIsImZyb21VaWQiLCJtZXNzYWdlX2VsZSIsImdldEVsZW1lbnQiLCJzdGF0dXMiLCJzZXQiLCJhcHBlbmRDaGlsZCIsIm1lc3NhZ2VfaWQiLCJnZXQiLCJyZW1vdmUiLCJyZXF1aXJlIiwiU2VuZE1lc3NhZ2UiLCJ0ZXh0X2lucHV0IiwiYnV0dG9uIiwic2VuZF90ZXh0Iiwic2VuZF9pbWFnZSIsImJpbmRMaXN0ZW5lciIsImFscmVhZHkiLCJxdWVyeVNlbGVjdG9yIiwidGhhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInRvTG93ZXJDYXNlIiwidGV4dCIsInZhbHVlIiwibm90aWZ5TGlzdGVuZXIiLCJjcmVhdGVkX3RpbWUiLCJub3ciLCJmaWxlIiwiZmlsZXMiLCJ0ZXN0IiwiZXZlbnRfbmFtZSIsImNhbGxiYWNrIiwib24iLCJDaGF0Um9vbSIsInNlbmRNZXNzYWdlIiwiZmFzdE1lc3NhZ2VMaXN0IiwiRmFzdE1lc3NhZ2VMaXN0IiwidXNlclByb2ZpbGUiLCJVc2VyUHJvZmlsZSIsImN1ckNoYXRSZWNvcmRMaXN0IiwiYXBwZW5kUmVjb3JkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZGVmYXVsdF9hdmF0YXIiLCJzZXRMaXN0ZW5lciIsImFwcGVuZFJlY29yZFRvTGlzdCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhpZGUiLCJwcm9maWxlIiwiVXNlclByb2ZpbGVNYXAiLCJ1cGRhdGVQcm9maWxlIiwidXNlciIsInVwZGF0ZUN1clVzZXJQcm9maWxlIiwiUmVjb3JkTGlzdE1hcCIsImxpc3QiLCJpbnNlcnRCZWZvcmUiLCJyZXZlcnNlIiwic2hvdyIsInRleHRfbGlzdCIsImltYWdlX2xpc3QiLCJzZWxlY3RfbWVzc2FnZSIsInB1c2giLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJnZXRBdHRyaWJ1dGUiLCJhcnIiLCJsaXN0SFRNTCIsImpvaW4iLCJmYXN0VGV4dExpc3QiLCJmYXN0SW1hZ2VMaXN0Iiwic2VyaWFsX251bWJlciIsIlVzZXJXcmFwIiwiaW5wdXQiLCJiYWRnZSIsImxhc3RfbWVzc2FnZSIsImNoYW5nZSIsInNlbGVjdGVkIiwiaXNfY2hlY2tlZCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJyZXNlcnZlIiwiZmxhZyIsIlVzZXJMaXN0IiwibW9yZV9saXN0X3dyYXAiLCJtb3JlX2xpc3QiLCJmaWx0ZXJfZGlhbW9uZCIsImZpbHRlcl9zdGFyIiwiY2hhbmdlZF91c2VyIiwibW9yZUxpc3RlbmVyIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlVzZXJNYXAiLCJ1c2VyX3dyYXAiLCJjdXIiLCJ1cGRhdGVCYWRnZSIsInVuUmVhZENvdW50IiwidXBkYXRlTGFzdE1lc3NhZ2UiLCJ1cGRhdGVkX3RpbWUiLCJzaXplIiwiaW5mbyIsImNyZWF0ZWRBdCIsImluZm9fZWxlIiwicmVuZGVyVXNlclByb2ZpbGVIVE1MIiwiVmlldyIsImFsZXJ0IiwidXNlcl9saXN0X2FyciIsIlRoZVBhZ2UiLCJwYXJlbnQiLCJwYXJlbnRfY3NzU2VsZWN0b3IiLCJ1c2VyX2xpc3QiLCJwYWdlX3Zpc2libGUiLCJ1c2VyTGlzdCIsImNoYXRSb29tIiwiZ2V0TWVzc2FnZVVzZXJMaXN0Iiwic3RhcnRNZXNzYWdlVXNlckxpc3RUaW1lciIsInNvcnQiLCJhIiwiYiIsImFwcGVuZFVzZXIiLCJVc2VySW5mb01hcCIsInVzcCIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2VjIiwiZHVyYXRpb24iLCJub3RpZnlVc2VyQ2hhbmVkIiwidmlzaWJsZSIsInZpc2liaWxpdHlTdGF0ZSIsInRoZVBhZ2UiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxRDtBQUN0QztBQUNmLGlD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QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9B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S0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxZQUFJK0csT0FBTyxHQUFHOU4sUUFBUSxDQUFDK04sZUFBdkI7QUFDQSxjQUFJLENBQUNoTyxNQUFMLENBQVk4TSxZQUFaLE1BQStCaUIsT0FBTyxLQUFLLFNBQTNDO0FBQ0QsT0FIRDtBQUlEOzs7Ozs7QUFHSCxJQUFNRSxPQUFPLEdBQUcsSUFBSXZCLE9BQUosRUFBaEI7QUFDQXdCLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkEsT0FBakIsQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0F4aW9zRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknLCAncGFyYW1zJ107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3RpbWVvdXRNZXNzYWdlJywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ2RlY29tcHJlc3MnLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ21heEJvZHlMZW5ndGgnLCAnbWF4UmVkaXJlY3RzJywgJ3RyYW5zcG9ydCcsICdodHRwQWdlbnQnLFxuICAgICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnLCAncmVzcG9uc2VFbmNvZGluZydcbiAgXTtcbiAgdmFyIGRpcmVjdE1lcmdlS2V5cyA9IFsndmFsaWRhdGVTdGF0dXMnXTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UodGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkaXJlY3RNZXJnZUtleXMsIGZ1bmN0aW9uIG1lcmdlKHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cylcbiAgICAuY29uY2F0KGRpcmVjdE1lcmdlS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzEpXG4gICAgLmNvbmNhdChPYmplY3Qua2V5cyhjb25maWcyKSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuICh0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgaWYgKHRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFtrZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICogQHJldHVybiB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltLFxuICBzdHJpcEJPTTogc3RyaXBCT01cbn07XG4iLCJpbXBvcnQgeyBEYXRlVW5pdCB9IGZyb20gJy4uL3VuaXQvRGF0ZVVuaXQuanMnO1xyXG5cclxuY2xhc3MgTWVzc2FnZSB7XHJcbiAgLyoqQHR5cGUgeyBOdW1iZXIgfSAqL1xyXG4gIGlkO1xyXG4gIC8qKkB0eXBlIHsgTnVtYmVyIH0gKi9cclxuICB0aW1lc3RhbXA7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqL1xyXG4gIG1lc3NhZ2VcclxuICAvKipAdHlwZSB7IE51bWJlciB9ICovXHJcbiAgbWVzc2FnZVR5cGU7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqL1xyXG4gIGZyb21VaWQ7XHJcbiAgXHJcbiAgLyoqQHR5cGUgeyB7IGlzX3NlbGY6IEJvb2xlYW4sIGF2YXRhcjogYXZhdGFyIH0gfSAqL1xyXG4gIHVzZXJfaW5mbyA9IHtcclxuICAgIGlzX3NlbGY6IG51bGwsXHJcbiAgICBhdmF0YXI6IG51bGxcclxuICB9XHJcblxyXG4gICNjb25maWcgPSB7XHJcbiAgICAvKipAdHlwZSB7IEhUTUxFbGVtZW50IH0gKi9cclxuICAgIGVsZTogbnVsbCxcclxuICAgIGNsYXNzTGlzdDogWydjaGF0LXJlY29yZCddXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0geyBOdW1iZXIgfSB0aW1lc3RhbXAgXHJcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBcclxuICAgKiBAcGFyYW0geyBOdW1iZXIgfSBtZXNzYWdlVHlwZSBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggbWVzc2FnZV9vYmosIHVzZXJfaW5mbyA9IHt9KXtcclxuICAgIGlmIChtZXNzYWdlX29iaiAmJiB0eXBlb2YgbWVzc2FnZV9vYmogPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGxldCB7IGlkLCB0aW1lc3RhbXAsIG1lc3NhZ2UsIG1lc3NhZ2VUeXBlIH0gPSBtZXNzYWdlX29iajtcclxuICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICB0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgdGhpcy5tZXNzYWdlVHlwZSA9IG1lc3NhZ2VUeXBlO1xyXG4gICAgfVxyXG4gICAgdGhpcy51c2VyX2luZm8gPSB1c2VyX2luZm87XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7IFN0cmluZ30gbWVzc2FnZSBcclxuICAgKiBAcGFyYW0geyAwIHwgMSB8IDIgfCA0fCAxM30gdHlwZSBcclxuICAgKi9cclxuICByZW5kZXJNZXNzYWdlQ29udGVudCggbWVzc2FnZSwgdHlwZSA9IDApe1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgMDoge1xyXG4gICAgICAgIHJlc3VsdCA9IGA8cCBjbGFzcz1cImNvbnRlbnQgdGV4dFwiPiR7bWVzc2FnZX08L3A+YDtcclxuICAgICAgfTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgIHJlc3VsdCA9IGA8aW1nIGNsYXNzPVwiY29udGVudCBpbWFnZVwiIHNyYz1cIiR7bWVzc2FnZX1cIiAvPmA7XHJcbiAgICAgIH07IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgcmVzdWx0ID0gYDxwIHN0eWxlPVwiY29sb3I6IHJlZDtcIiBjbGFzcz1cImNvbnRlbnQgdGV4dFwiPiR7bWVzc2FnZX08L3A+YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy4jY29uZmlnO1xyXG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBpZih0aGlzLnVzZXJfaW5mby5pc19zZWxmKSBlbGUuY2xhc3NMaXN0LmFkZCgnc2VsZicpO1xyXG4gICAgZWxlLnNldEF0dHJpYnV0ZSgnbWVzc2FnZS1pZCcsIHRoaXMuaWQpO1xyXG4gICAgZWxlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItd3JhcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVjdGFuZ2xlLWJveCBzcXVhcmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyIG5vMVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke3RoaXMudXNlcl9pbmZvLmF2YXRhcn1cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utd3JhcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaXRlbVwiPiR7RGF0ZVVuaXQuZm9ybWF0KHRoaXMudGltZXN0YW1wKX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJpdGVtXCI+IE1lc3NhZ2VUeXBlOiAke3RoaXMubWVzc2FnZVR5cGV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UgJHt0aGlzLm1lc3NhZ2VUeXBlID09PSAxMyA/ICd2aWRlby1jYWxsJyA6ICcnfVwiPlxyXG4gICAgICAgICR7dGhpcy5yZW5kZXJNZXNzYWdlQ29udGVudCh0aGlzLm1lc3NhZ2UsIHRoaXMubWVzc2FnZVR5cGUpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy5lbGUgPSBlbGU7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCl7XHJcbiAgICByZXR1cm4gdGhpcy4jY29uZmlnLmVsZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgTWVzc2FnZVxyXG59IiwiY2xhc3MgVXNlckluZm8ge1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi8gaWQ7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyB1aWQ7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBuaWNrbmFtZTtcclxuICAvKipAdHlwZSB7IFN0cmluZyB9ICovIGF2YXRhcjtcclxuICAvKipAdHlwZSB7IE51bWJlciB9ICovIGdlbmRlcjtcclxuICAvKipAdHlwZSB7IFN0cmluZyB9ICovIGFnZTtcclxuICAvKipAdHlwZSB7IFN0cmluZyB9ICovIGxhc3RNZXNzYWdlO1xyXG4gIC8qKkB0eXBlIHsgTnVtYmVyIH0gKi8gdXBkYXRlQmFkZ2U7XHJcbiAgLyoqQHR5cGUgeyBOdW1iZXIgfSAqLyBkaWFtb25kO1xyXG4gIC8qKkB0eXBlIHsgTnVtYmVyIH0gKi8gc3RhcjtcclxuXHJcbiAgY29uc3RydWN0b3IoaWQsIHVpZCwgbmlja25hbWUsIGF2YXRhciwgZ2VuZGVyLCBhZ2UsIGxhc3RNZXNzYWdlLCBkaWFtb25kLCBzdGFyKXtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudWlkID0gdWlkO1xyXG4gICAgdGhpcy5uaWNrbmFtZSA9IG5pY2tuYW1lO1xyXG4gICAgdGhpcy5hdmF0YXIgPSBhdmF0YXI7XHJcbiAgICB0aGlzLmdlbmRlciA9IGdlbmRlcjtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gICAgdGhpcy5sYXN0TWVzc2FnZSA9IGxhc3RNZXNzYWdlO1xyXG4gICAgdGhpcy5kaWFtb25kID0gZGlhbW9uZDtcclxuICAgIHRoaXMuc3RhciA9IHN0YXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFVzZXJJbmZvXHJcbn0iLCJsZXQgRGVmYXVsdENvbmZpZyA9IHtcclxuICBiYXNlVVJMOiAnaHR0cHM6Ly90LmxpdmVodWIuY2xvdWQnLFxyXG4gIGF2YXRhcjogJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9saXZlaHViLXh5ei9MaXZldHViZV91bmRlZmluZWRfMjAyMTAzMjUwNjQxMTRfY292ZXIucG5nJ1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIERlZmF1bHRDb25maWdcclxufSIsImNsYXNzIERhdGVVbml0Q2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgZGVmYXVsdF9mb3JtYXRfc3RyID0gJ3l5eXktTU0tZGQgSEg6bW06c3M6bXMnXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7IERhdGUgfCBOdW1iZXIgfSBkYXRlX29iaiBcclxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSBmb3JtYXRfc3RyIFxyXG4gICAqIEBwYXJhbSB7ICdkYXRlJyB8ICd0aW1lJyB8ICdkYXRldGltZScgfSB0eXBlIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGZvcm1hdCggZGF0ZV9vYmosIGZvcm1hdF9zdHIsIHR5cGUpe1xyXG4gICAgaWYgKCF0eXBlICYmICFmb3JtYXRfc3RyKSBmb3JtYXRfc3RyID0gXCJ5eXl5LU1NLWRkIEhIOm1tOnNzOm1zXCI7XHJcbiAgICBlbHNlIGlmIChcImRhdGVcIiA9PT0gdHlwZSkgZm9ybWF0X3N0ciA9IFwieXl5eS1NTS1kZFwiO1xyXG4gICAgZWxzZSBpZiAoXCJ0aW1lXCIgPT09IHR5cGUpIGZvcm1hdF9zdHIgPSBcIkhIOm1tOnNzXCI7XHJcbiAgICBlbHNlIGlmIChcImRhdGV0aW1lXCIgPT09IHR5cGUpIGZvcm1hdF9zdHIgPSBcInl5eXktTU0tZGQgSEg6bW06c3NcIjtcclxuICAgIGlmICghZGF0ZV9vYmopIGRhdGVfb2JqID0gbmV3IERhdGUoKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlX29iaiA9PT0gJ251bWJlcicpIGRhdGVfb2JqID0gbmV3IERhdGUoZGF0ZV9vYmopO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZV9vYmouZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgZGF5ID0gZGF0ZV9vYmouZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IGhvdXJzID0gZGF0ZV9vYmouZ2V0SG91cnMoKTtcclxuICAgIGxldCBtaW51dGVzID0gZGF0ZV9vYmouZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBkYXRlX29iai5nZXRTZWNvbmRzKCk7XHJcbiAgICBmb3JtYXRfc3RyID0gZm9ybWF0X3N0ci5yZXBsYWNlKFwieXl5eVwiLCBkYXRlX29iai5nZXRGdWxsWWVhcigpKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJNTVwiLCBgJHttb250aCA+IDkgPyBcIlwiIDogMH0ke21vbnRofWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcImRkXCIsIGAke2RheSA+IDkgPyBcIlwiIDogMH0ke2RheX1gKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJISFwiLCBgJHtob3VycyA+IDkgPyBcIlwiIDogMH0ke2hvdXJzfWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcIm1tXCIsIGAke21pbnV0ZXMgPiA5ID8gXCJcIiA6IDB9JHttaW51dGVzfWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcInNzXCIsIGAke3NlY29uZHMgPiA5ID8gXCJcIiA6IDB9JHtzZWNvbmRzfWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcIm1zXCIsIGRhdGVfb2JqLmdldE1pbGxpc2Vjb25kcygpKTtcclxuICAgIHJldHVybiBmb3JtYXRfc3RyO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRGF0ZVVuaXQgPSBuZXcgRGF0ZVVuaXRDbGFzcygpO1xyXG5cclxuZXhwb3J0IHtcclxuICBEYXRlVW5pdFxyXG59IiwiY2xhc3MgT2JqZWN0VW5pdENsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gIH1cclxuXHJcbiAgaXNOdWxsKCBvYmogKSB7XHJcbiAgICBpZiAoICFvYmogfHwgb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzT2JqZWN0KCBvYmogKSB7XHJcbiAgICBpZiAoIHRoaXMuaXNOdWxsKG9iaikgKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIHR5cGVvZiBvYmogIT09ICdvYmplY3QnICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5T2JqZWN0KCBvYmogKSB7XHJcbiAgICBpZiAoICF0aGlzLmlzT2JqZWN0KG9iaikgKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID4gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpc05vRW1wdHlPYmplY3QoIG9iaiApIHtcclxuICAgIGlmICggIXRoaXMuaXNPYmplY3Qob2JqKSApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICggT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPCAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKCBudW0gKSB7XHJcbiAgICBpZiAoIFN0cmluZyhudW0pID09PSAnTmFOJyApIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiAoIHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcclxuICB9XHJcblxyXG4gIGlzU3RyaW5nKCBzdHIgKSB7XHJcbiAgICByZXR1cm4gKCB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyApO1xyXG4gIH1cclxuICBpc0VtcHR5U3RyaW5nKCBzdHIgKSB7XHJcbiAgICBpZiAoIHRoaXMuaXNOdWxsKHN0cikgKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmICggIXRoaXMuaXNTdHJpbmcoc3RyKSApIHJldHVybiB0cnVlO1xyXG4gICAgaWYgKCBzdHIudHJpbSgpLmxlbmd0aCA8IDEgKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaXNOb0VtcHR5U3RyaW5nKCBzdHIgKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNFbXB0eVN0cmluZyhzdHIpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgT2JqZWN0VW5pdCA9IG5ldyBPYmplY3RVbml0Q2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgT2JqZWN0VW5pdFxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2JlYW4vTWVzc2FnZS5qcyc7XHJcbi8vIGltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vYmVhbi9Vc2VySW5mby5qcyc7XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgeyBQcm9taXNlPHsgc3RhdHVzOiAwIHwgNDEzIHwgMjAwMSwgZGF0YTogeyB9fT4gfVxyXG4gKi9cclxubGV0IEJhc2VSZXNwb25zZVR5cGU7XHJcblxyXG5jb25zdCBpc190ZXN0ID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBiYXNlVVJMOiBpc190ZXN0ID8gJ2h0dHBzOi8vdC5saXZlaHViLmNsb3VkJyA6ICdodHRwczovL3QubGl2ZWh1Yi5jbG91ZCcsXHJcbiAgbm9fc2VuZF9tc2c6IGZhbHNlLFxyXG59XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gY29uZmlnLmJhc2VVUkw7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydhdXRob3JpemF0aW9uJ10gPSBcIndncmRnNzgzODZhXCI7XHJcbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBsZXQgcmVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQXhpb3NSZXNwb3NuZSA9PiBcIiwgcmVzKTtcclxuICAgIC8vIGlmKHJlcy5zdGF0dXMgPT09IDQxMyl7XHJcbiAgICAvLyAgICAgaGFuZGxlU3RhdHVzNDEzKCk7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYocmVzLnN0YXR1cyA9PT0gMCkgcmVzLnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHJlcztcclxufSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuXHJcbmNsYXNzIFNlcnZlclVuaXQge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5raI5oGv5YiX6KGoXHJcbiAgICogQHBhcmFtIHsge1wicXVlcnlcIjp7fSxcInBhZ2VTaXplXCI6MjAsXCJwYWdlTnVtXCI6MX0gfSBwYXJhbSBcclxuICAgKiBAcmV0dXJucyB7IFByb21pc2U8eyBzdGF0dXM6IE51bWJlciwgZGF0YTogVXNlckluZm9bXX0+IH1cclxuICAgKi9cclxuICBnZXRNZXNzYWdlVXNlckxpc3QoIHBhcmFtID0ge1wicXVlcnlcIjp7fSxcInBhZ2VTaXplXCI6MjAsXCJwYWdlTnVtXCI6MX0gKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpMi9tZXNzYWdlL3VzZXIvbGlzdC8nLCBwYXJhbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bmnKror7vmtojmga/liJfooahcclxuICAgKiBAcGFyYW0geyBOdW1iZXIgfSBwYWdlTnVtIFxyXG4gICAqIEBwYXJhbSB7IE51bWJlciB9IHBhZ2VTaXplIFxyXG4gICAqIEBwYXJhbSB7IE51bWJlciB9IHR5cGUgXHJcbiAgICogQHJldHVybnMgeyBCYXNlUmVzcG9uc2VUeXBlIH1cclxuICAgKi9cclxuICBnZXRVbnJlYWRNZXNzYWdlVXNlckxpc3QoIHBhZ2VOdW0gPSAxLCBwYWdlU2l6ZSA9IDIwLCB0eXBlID0gMiApIHtcclxuICAgIGxldCBwYXJhbSA9IHtxdWVyeToge3R5cGV9LCBwYWdlU2l6ZSwgcGFnZU51bSB9O1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkyL2N1c3RvbWVyL21zZy9saXN0JywgcGFyYW0pO1xyXG4gIH1cclxuICBnZXRBbHJlYWR5UmVhZE1lc3NhZ2VVc2VyTGlzdCggcGFnZU51bSA9IDEsIHBhZ2VTaXplID0gMjAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRVbnJlYWRNZXNzYWdlVXNlckxpc3QoIHBhZ2VOdW0sIHBhZ2VTaXplLCAzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluWSjOeUqOaIt+WvueivneivpuaDheWIl+ihqFxyXG4gICAqIEBwYXJhbSB7IHtcInF1ZXJ5XCI6e1wicmVsYXRlVWlkXCI6MzkwMTYwNDA1MzA3Mzk2OX0sXCJwYWdlU2l6ZVwiOjIwLFwicGFnZU51bVwiOjF9IH0gcGFyYW0gXHJcbiAgICogQHJldHVybnMgeyBQcm9taXNlPHsgc3RhdHVzOiBOdW1iZXIsIGRhdGE6IE1lc3NhZ2VbXX0+IH1cclxuICAgKi9cclxuICBnZXRVc2VyTWVzc2FnZURldGFpbCggcGFyYW0gPSB7XCJxdWVyeVwiOntcInJlbGF0ZVVpZFwiOjM5MDE2MDQwNTMwNzM5Njl9LFwicGFnZVNpemVcIjoyMCxcInBhZ2VOdW1cIjoxfSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaTIvbWVzc2FnZS91c2VyL2RldGFpbC8nLCBwYXJhbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlj5HpgIHmtojmga/nu5nnlKjmiLdcclxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSByZWxhdGVVaWQgXHJcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0gY29udGVudCBcclxuICAgKiBAcGFyYW0geyAwIHwgMSB8IDMgfSBtZXNzYWdlVHlwZSBcclxuICAgKiBAcmV0dXJucyB7IFByb21pc2U8eyBzdGF0dXM6IE51bWJlciwgbXNnOiBTdHJpbmd9PiB9XHJcbiAgICovXHJcbiAgc2VuZE1lc3NhZ2UocmVsYXRlVWlkLCBjb250ZW50LCBtZXNzYWdlVHlwZSA9IDApIHtcclxuICAgIGlmIChjb25maWcubm9fc2VuZF9tc2cpIHJldHVybjtcclxuICAgIGxldCBwYXJhbSA9IHsgcmVsYXRlVWlkLCBjb250ZW50LCBtZXNzYWdlVHlwZX07XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9tZXNzYWdlL3NlbmQvJywgcGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+R6YCB5aqS5L2T5raI5oGv57uZ55So5oi3XHJcbiAgICogQHBhcmFtIHsgRmlsZSB9IGZpbGVuYW1lIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHJlbGF0ZVVpZCBcclxuICAgKiBAcGFyYW0geyAxIHwgMiB8IDQgfSBtZXNzYWdlVHlwZSAtIDI6IOWbvueJh1xyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBtc2c6IFN0cmluZ30+IH1cclxuICAgKi9cclxuICBzZW5kTWVkaWFNZXNzYWdlKGZpbGVuYW1lLCByZWxhdGVVaWQsIG1lc3NhZ2VUeXBlKSB7XHJcbiAgICBpZiAoY29uZmlnLm5vX3NlbmRfbXNnKSByZXR1cm47XHJcbiAgICBsZXQgcGFyYW0gPSB7IGZpbGVuYW1lLCByZWxhdGVVaWQsIG1lc3NhZ2VUeXBlfTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VwbG9hZE1lZGlhLycsIHBhcmFtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlueUqOaIt+S4quS6uui1hOaWmVxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHVpZFxyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBkYXRhOiB7IHVpZDogU3RyaW5nLCBjcmVhdGVkQXQ6IFN0cmluZywgZGlhbW9uZDogTnVtYmVyfX0+IH1cclxuICAgKi9cclxuICBnZXRVc2VyUHJvZmlsZSggdWlkICl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91c2VyL2luZm8vJywgeyByZWxhdGVVaWQ6IHVpZCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeZu+W9lVxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHVzZXJuYW1lIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHBhc3N3b3JkIFxyXG4gICAqIEByZXR1cm5zIHsgQmFzZVJlc3BvbnNlVHlwZSB9XHJcbiAgICovXHJcbiAgbG9naW4oIHVzZXJuYW1lLCBwYXNzd29yZCApe1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTZXJ2ZXIgPSBuZXcgU2VydmVyVW5pdCgpO1xyXG5cclxuZXhwb3J0IHtcclxuICBTZXJ2ZXJcclxufSIsIlxyXG5jbGFzcyBWaWV3VW5pdENsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7IEVsZW1lbnQgfSBlbGUgXHJcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0gY2xhc3NfbmFtZSBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwYXJlbnRCeUNsYXNzKGVsZSwgY2xhc3NfbmFtZSkge1xyXG4gICAgaWYgKCFlbGUgfHwgIWVsZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBlbGU7XHJcbiAgICBpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc19uYW1lKSkgcmV0dXJuIGVsZTtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEJ5Q2xhc3MoZWxlLnBhcmVudEVsZW1lbnQsIGNsYXNzX25hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVmlld1VuaXQgPSBuZXcgVmlld1VuaXRDbGFzcygpO1xyXG5cclxuZXhwb3J0IHtcclxuICBWaWV3VW5pdFxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL01lc3NhZ2UuanMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2NvbW1vbic7XHJcblxyXG5jbGFzcyBDaGF0UmVjb3JkTGlzdCB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgY2xhc3NMaXN0OiBTdHJpbmdbXSxcclxuICAgKiAgbWVzc2FnZV9saXN0OiBNZXNzYWdlW10sXHJcbiAgICogIHNlbmRfbWVzc2FnZV9pZDogTnVtYmVyLFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgY2xhc3NMaXN0OiBbJ2NoYXQtcmVjb3JkLWxpc3QnXSxcclxuICAgIG1lc3NhZ2VfbGlzdDogW10sXHJcbiAgICBzZW5kX21lc3NhZ2VfaWQ6IDEwMDAwXHJcbiAgfVxyXG5cclxuICBhbHJlYWR5ID0ge1xyXG4gICAgaW5pdDoge1xyXG4gICAgICB2aWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGUgeyBNYXA8U3RyaW5nLCB7XHJcbiAgICogIHN0YXR1czogJ3BlbmRpbmcnIHwgJ2ZhaWxlZCcsICdzdWNjZXNzJyxcclxuICAgKiAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgKiAgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiB9fVxyXG4gICAqL1xyXG4gIE1lc3NhZ2VNYXAgPSBuZXcgTWFwKCk7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqL1xyXG4gIHVpZDtcclxuXHJcbiAgY29uc3RydWN0b3IoIHVpZCApe1xyXG4gICAgdGhpcy51aWQgPSB1aWQ7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGUuc2V0QXR0cmlidXRlKCd1aWQnLCB0aGlzLnVpZCk7XHJcbiAgICBlbGUuY2xhc3NMaXN0LmFkZCguLi5jb25maWcuY2xhc3NMaXN0KTtcclxuICAgIGNvbmZpZy5lbGUgPSBlbGU7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgTWVzc2FnZSB8IE1lc3NhZ2VbXSB9IG1lc3NhZ2UgXHJcbiAgICogQHBhcmFtIHsgeyBpc19zZWxmOiBCb29sZWFuLCBhdmF0YXI6IGF2YXRhciB9IH0gdXNlcl9pbmZvXHJcbiAgICovXHJcbiAgYXBwZW5kUmVjb3JkKCBtZXNzYWdlLCB1c2VyX2luZm8gKSB7XHJcbiAgICBpZiAodXNlcl9pbmZvLmlzX3NlbGYpIGNvbnNvbGUubG9nKGBzZW5kIG1lc3NhZ2UgdG86ICR7dGhpcy51aWR9OiBgLCBtZXNzYWdlKTtcclxuICAgIGNvbnNvbGUubG9nKCdhcHBlbmRSZWNvcmQ6ICcsIHsgbWVzc2FnZSwgdXNlcl9pbmZvIH0pO1xyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpIG1lc3NhZ2UgPSBbbWVzc2FnZV07XHJcbiAgICBtZXNzYWdlLmZvckVhY2goIG1zZyA9PiB7XHJcbiAgICAgIGlmICghbXNnLmlkKSBtc2cuaWQgPSB0aGlzLmNvbmZpZy5zZW5kX21lc3NhZ2VfaWQrKztcclxuICAgICAgaWYgKHRoaXMuTWVzc2FnZU1hcC5oYXMobXNnLmlkKSkgcmV0dXJuO1xyXG4gICAgICBsZXQgY3VyX3VzZXJfaW5mbyA9IHsgaXNfc2VsZjogZmFsc2UsIGF2YXRhcjogdXNlcl9pbmZvLmF2YXRhciB9O1xyXG4gICAgICBpZiAobXNnLmZyb21VaWQgIT09IHRoaXMudWlkKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ05vIHNhbWUgdWlkOiAnLCB7IGZyb206IG1lc3NhZ2UuZnJvbVVpZCwgc2VsZjogdGhpcy51aWR9KTtcclxuICAgICAgICBjdXJfdXNlcl9pbmZvLmlzX3NlbGYgPSB0cnVlO1xyXG4gICAgICAgIGN1cl91c2VyX2luZm8uYXZhdGFyID0gRGVmYXVsdENvbmZpZy5hdmF0YXI7XHJcbiAgICAgIH0gXHJcbiAgICAgIGxldCBtZXNzYWdlX2VsZSA9IG5ldyBNZXNzYWdlKCBtc2csIGN1cl91c2VyX2luZm8pO1xyXG4gICAgICBsZXQgZWxlID0gbWVzc2FnZV9lbGUuZ2V0RWxlbWVudCgpO1xyXG4gICAgICBsZXQgc3RhdHVzID0gY3VyX3VzZXJfaW5mby5pc19zZWxmID8gJ3BlbmRpbmcnIDogJ3N1Y2Nlc3MnXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKHN0YXR1cyk7XHJcbiAgICAgIHRoaXMuTWVzc2FnZU1hcC5zZXQobXNnLmlkLCB7IHN0YXR1czogJ3BlbmRpbmcnLCBtZXNzYWdlOiBtc2csIGVsZTogZWxlIH0pO1xyXG4gICAgICB0aGlzLmNvbmZpZy5lbGUuYXBwZW5kQ2hpbGQoZWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbWVzc2FnZV9pZCBcclxuICAgKiBAcGFyYW0geyAncGVuZGluZycgfCAnZmFpbGVkJywgJ3N1Y2Nlc3MnIH0gc3RhdHVzIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGNoYW5nZVJlY29yZFN0YXR1cyggbWVzc2FnZV9pZCwgc3RhdHVzICkge1xyXG4gICAgbGV0IG9iaiA9IHRoaXMuTWVzc2FnZU1hcC5nZXQobWVzc2FnZV9pZCk7XHJcbiAgICBsZXQgZWxlID0gb2JqICYmIG9iai5lbGU7XHJcbiAgICBpZiAoIWVsZSkgcmV0dXJuO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKXtcclxuICAgIHRoaXMuY29uZmlnLmVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlLWVsZScpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGhpZGUgJHt0aGlzLnVpZH06IGAsIHRoaXMuY29uZmlnKTtcclxuICB9XHJcbiAgc2hvdygpe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZWxlJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgc2hvdyAke3RoaXMudWlkfTogYCwgdGhpcy5jb25maWcpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBDaGF0UmVjb3JkTGlzdFxyXG59IiwiY29uc3QgeyBPYmplY3RVbml0IH0gPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2pzL3VuaXQvT2JqZWN0VW5pdFwiKTtcclxuXHJcbmNsYXNzIFNlbmRNZXNzYWdlIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7e1xyXG4gICAqICBpZDogU3RyaW5nLFxyXG4gICAqICBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqICBjbGFzc0xpc3Q6IFN0cmluZ1tdLFxyXG4gICAqICB0ZXh0X2lucHV0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgYnV0dG9uOiB7XHJcbiAgICogICAgc2VuZF90ZXh0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgICBzZW5kX2ltYWdlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgfVxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgaWQ6ICdzZW5kX21lc3NhZ2Vfd3JhcCcsXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBjbGFzc0xpc3Q6IFsnc2VuZC1tZXNzYWdlLXdyYXAnXSxcclxuICAgIHRleHRfaW5wdXQ6IG51bGwsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgc2VuZF90ZXh0OiBudWxsLFxyXG4gICAgICBzZW5kX2ltYWdlOiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbiA9IHtcclxuICAgIHNlbmRfdGV4dDogbnVsbCxcclxuICAgIHNlbmRfaW1hZ2U6IG51bGwsXHJcbiAgfVxyXG5cclxuICBhbHJlYWR5ID0ge1xyXG4gICAgaW5pdDoge1xyXG4gICAgICB2aWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1NlbmRNZXNzYWdlOiAnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAodGhpcy5hbHJlYWR5LmluaXQudmlldykgcmV0dXJuO1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uZmlnLmVsZSA9IGVsZTtcclxuICAgIGVsZS5pZCA9IGNvbmZpZy5pZDtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgZWxlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+XHJcbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRleHQtaW5wdXRcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXdyYXBcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZmlsZS1sYWJlbFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbiBjaG9vc2UtZmlsZVwiPkNob29zZSBJbWFnZTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBzZW5kLW1lc3NhZ2VcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy50ZXh0X2lucHV0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWlucHV0Jyk7XHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfdGV4dCA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuc2VuZC1tZXNzYWdlJyk7XHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfaW1hZ2UgPSBlbGUucXVlcnlTZWxlY3RvcignLmZpbGUtbGFiZWwgaW5wdXQnKTtcclxuICAgIHRoaXMuYWxyZWFkeS5pbml0LnZpZXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAvL1xyXG4gICAgY29uZmlnLnRleHRfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdrZXk6ICcsIGV2ZW50LmtleSk7XHJcbiAgICAgIGlmKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnZW50ZXInKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZW5kIHRleHQ6ICcsIHRleHQpO1xyXG4gICAgICAgIHRoYXQubm90aWZ5TGlzdGVuZXIoJ3NlbmRfdGV4dCcsIHtcclxuICAgICAgICAgIGNyZWF0ZWRfdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgIGRhdGE6IHRleHRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGF0LmNvbmZpZy50ZXh0X2lucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gXHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfdGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHRleHQgPSB0aGlzLmNvbmZpZy50ZXh0X2lucHV0LnZhbHVlO1xyXG4gICAgICBpZiAoT2JqZWN0VW5pdC5pc0VtcHR5U3RyaW5nKHRleHQpKSByZXR1cm47XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzZW5kIHRleHQ6ICcsIHRleHQpO1xyXG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVyKCdzZW5kX3RleHQnLCB7XHJcbiAgICAgICAgY3JlYXRlZF90aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGRhdGE6IHRleHRcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29uZmlnLnRleHRfaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gICAgLy8gXHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAvKipAdHlwZSB7IEZpbGUgfSAqL1xyXG4gICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlc1swXTtcclxuICAgICAgaWYgKCFmaWxlKSByZXR1cm47XHJcbiAgICAgIGlmICghL2ltYWdlLy50ZXN0KGZpbGUudHlwZSkpIHJldHVybjtcclxuICAgICAgY29uc29sZS5sb2coJ3NlbmQgaW1hZ2U6ICcsIGZpbGUpO1xyXG4gICAgICB0aGF0Lm5vdGlmeUxpc3RlbmVyKCdzZW5kX2ltYWdlJywge1xyXG4gICAgICAgIGNyZWF0ZWRfdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICBkYXRhOiBmaWxlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnc2VuZF90ZXh0JyB8ICdzZW5kX2ltYWdlJyB9IGV2ZW50X25hbWUgXHJcbiAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBjYWxsYmFjayBcclxuICAgKi9cclxuICBzZXRMaXN0ZW5lciggZXZlbnRfbmFtZSwgY2FsbGJhY2sgKXtcclxuICAgIHRoaXMub25bZXZlbnRfbmFtZV0gPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdzZW5kX3RleHQnIHwgJ3NlbmRfaW1hZ2UnIH0gZXZlbnRfbmFtZSBcclxuICAgKi9cclxuICBub3RpZnlMaXN0ZW5lciggZXZlbnRfbmFtZSwgcGFyYW0gKXtcclxuICAgIGxldCBjYWxsYmFjayA9IHRoaXMub25bZXZlbnRfbmFtZV07XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhwYXJhbSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFNlbmRNZXNzYWdlXHJcbn0iLCJpbXBvcnQgeyBTZW5kTWVzc2FnZSB9IGZyb20gJy4vU2VuZE1lc3NhZ2UuanMnO1xyXG5pbXBvcnQgeyBDaGF0UmVjb3JkTGlzdCB9IGZyb20gJy4vQ2hhdFJlY29yZExpc3QuanMnO1xyXG5pbXBvcnQgeyBGYXN0TWVzc2FnZUxpc3QgfSBmcm9tICcuLi9GYXN0TWVzc2FnZUxpc3QvJztcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL3VuaXQvU2VydmVyLmpzJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9jb21tb24nO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzJztcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tICcuLi9Vc2VyUHJvZmlsZSc7XHJcblxyXG5jbGFzcyBDaGF0Um9vbSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgaWQ6IFN0cmluZywgY2xhc3NMaXN0OiBTdHJpbmdbXSwgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiB9fVxyXG4gICAqL1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIGlkOiAnY2hhdF9yb29tJyxcclxuICAgIGNsYXNzTGlzdDogWydjaGF0LXJvb20nXSxcclxuICAgIGVsZTogbnVsbCxcclxuICB9XHJcblxyXG4gIGFscmVhZHkgPSB7XHJcbiAgICBpbml0OiB7XHJcbiAgICAgIHZpZXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIHtcclxuICAgKiAgaXNfYmluZF9saXN0ZW5lcjogQm9vbGVhbixcclxuICAgKiAgbGlzdDogQ2hhdFJlY29yZExpc3QsXHJcbiAgICogfT4gfVxyXG4gICAqL1xyXG4gIFJlY29yZExpc3RNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIOS/neWtmOaJgOacieeUqOaIt+S4quS6uuS/oeaBr++8jFxyXG4gICAqIEB0eXBlIHsgTWFwPFN0cmluZywge30gfVxyXG4gICAqL1xyXG4gIFVzZXJQcm9maWxlTWFwID0gbmV3IE1hcCgpO1xyXG5cclxuXHJcbiAgLyoqQHR5cGUgeyBDaGF0UmVjb3JkTGlzdCB9ICovXHJcbiAgY3VyQ2hhdFJlY29yZExpc3Q7IC8vIOW9k+WJjeiBiuWkqeiusOW9leWIl+ihqFxyXG4gIC8qKkB0eXBlIHsgU2VuZE1lc3NhZ2UgfSAqL1xyXG4gIHNlbmRNZXNzYWdlO1xyXG4gIC8qKkB0eXBlIHsgRmFzdE1lc3NhZ2VMaXN0IH0gKi9cclxuICBmYXN0TWVzc2FnZUxpc3Q7XHJcbiAgLyoqQHR5cGUgeyBVc2VyUHJvZmlsZSB9ICovXHJcbiAgdXNlclByb2ZpbGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlID0gbmV3IFNlbmRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLmZhc3RNZXNzYWdlTGlzdCA9IG5ldyBGYXN0TWVzc2FnZUxpc3QoKTtcclxuICAgIHRoaXMudXNlclByb2ZpbGUgPSBuZXcgVXNlclByb2ZpbGUoKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgdGhpcy5iaW5kTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAodGhpcy5hbHJlYWR5LmluaXQudmlldyA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5jb25maWcuY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuY29uZmlnLmVsZSA9IGVsZTtcclxuICAgIGVsZS5hcHBlbmRDaGlsZCh0aGlzLnVzZXJQcm9maWxlLmdldEVsZW1lbnQoKSk7XHJcbiAgICBlbGUuYXBwZW5kQ2hpbGQodGhpcy5mYXN0TWVzc2FnZUxpc3QuZ2V0RWxlbWVudCgpKTtcclxuICAgIGVsZS5hcHBlbmRDaGlsZCh0aGlzLnNlbmRNZXNzYWdlLmdldEVsZW1lbnQoKSk7XHJcbiAgICB0aGlzLmFscmVhZHkuaW5pdC52aWV3ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFwcGVuZFJlY29yZFRvTGlzdChtZXNzYWdlLCB1c2VyX2luZm8pe1xyXG4gICAgaWYgKCF0aGlzLmN1ckNoYXRSZWNvcmRMaXN0KSByZXR1cm47XHJcbiAgICB0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LmFwcGVuZFJlY29yZChtZXNzYWdlLCB1c2VyX2luZm8pO1xyXG4gICAgdGhpcy5jdXJDaGF0UmVjb3JkTGlzdC5nZXRFbGVtZW50KCkuc2Nyb2xsVG9wID0gdGhpcy5jdXJDaGF0UmVjb3JkTGlzdC5nZXRFbGVtZW50KCkuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICBsZXQgZGVmYXVsdF9hdmF0YXIgPSBEZWZhdWx0Q29uZmlnLmF2YXRhcjtcclxuICAgIFxyXG4gICAgdGhpcy5zZW5kTWVzc2FnZS5zZXRMaXN0ZW5lcignc2VuZF90ZXh0JywgKHBhcmFtKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5jdXJDaGF0UmVjb3JkTGlzdD8udWlkKSByZXR1cm47XHJcbiAgICAgIFNlcnZlci5zZW5kTWVzc2FnZSh0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LnVpZCwgcGFyYW0uZGF0YSwgMCk7XHJcbiAgICAgIHRoaXMuYXBwZW5kUmVjb3JkVG9MaXN0KHtcclxuICAgICAgICB0aW1lc3RhbXA6IHBhcmFtLmNyZWF0ZWRfdGltZSxcclxuICAgICAgICBtZXNzYWdlOiBwYXJhbS5kYXRhLFxyXG4gICAgICAgIG1lc3NhZ2VUeXBlOiAwLFxyXG4gICAgICB9LCB7IGlzX3NlbGY6IHRydWUsIGF2YXRhcjogZGVmYXVsdF9hdmF0YXJ9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZW5kTWVzc2FnZS5zZXRMaXN0ZW5lcignc2VuZF9pbWFnZScsIChwYXJhbSkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuY3VyQ2hhdFJlY29yZExpc3Q/LnVpZCkgcmV0dXJuO1xyXG4gICAgICBTZXJ2ZXIuc2VuZE1lZGlhTWVzc2FnZShwYXJhbS5kYXRhLCB0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LnVpZCwgMik7XHJcbiAgICAgIHRoaXMuYXBwZW5kUmVjb3JkVG9MaXN0KHtcclxuICAgICAgICB0aW1lc3RhbXA6IHBhcmFtLmNyZWF0ZWRfdGltZSxcclxuICAgICAgICBtZXNzYWdlOiBVUkwuY3JlYXRlT2JqZWN0VVJMKHBhcmFtLmRhdGEpLFxyXG4gICAgICAgIG1lc3NhZ2VUeXBlOiAyXHJcbiAgICAgIH0sIHsgaXNfc2VsZjogdHJ1ZSwgYXZhdGFyOiBkZWZhdWx0X2F2YXRhcn0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBmYXN0IG1lc3NhZ2UgbGlzdFxyXG4gICAgdGhpcy5mYXN0TWVzc2FnZUxpc3Quc2V0TGlzdGVuZXIoJ3NlbGVjdF9tZXNzYWdlJywgKHBhcmFtKSA9PiB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZWRfdGltZSwgZGF0YSwgdHlwZSB9ID0gcGFyYW07XHJcbiAgICAgIFNlcnZlci5zZW5kTWVzc2FnZSh0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LnVpZCwgZGF0YSwgdHlwZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kUmVjb3JkVG9MaXN0KHtcclxuICAgICAgICB0aW1lc3RhbXA6IGNyZWF0ZWRfdGltZSxcclxuICAgICAgICBtZXNzYWdlOiBkYXRhLFxyXG4gICAgICAgIG1lc3NhZ2VUeXBlOiB0eXBlXHJcbiAgICAgIH0sIHsgaXNfc2VsZjogdHJ1ZSwgYXZhdGFyOiBkZWZhdWx0X2F2YXRhcn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWxlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlQ3VyVXNlclByb2ZpbGUoIHVpZCApIHtcclxuICAgIHRoaXMudXNlclByb2ZpbGUuaGlkZSgpO1xyXG4gICAgbGV0IHByb2ZpbGUgPSB0aGlzLlVzZXJQcm9maWxlTWFwLmdldCh1aWQpO1xyXG4gICAgaWYgKCFwcm9maWxlKSB7XHJcbiAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFNlcnZlci5nZXRVc2VyUHJvZmlsZSh1aWQpO1xyXG4gICAgICBwcm9maWxlID0gZGF0YTtcclxuICAgICAgdGhpcy5Vc2VyUHJvZmlsZU1hcC5zZXQodWlkLCBwcm9maWxlKTtcclxuICAgIH1cclxuICAgIHRoaXMudXNlclByb2ZpbGUudXBkYXRlUHJvZmlsZShwcm9maWxlIHx8IHt9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7IFVzZXJJbmZvIH0gdXNlciBcclxuICAgKi9cclxuICBhc3luYyBub3RpZnlVc2VyQ2hhbmVkKCB1c2VyICkge1xyXG4gICAgdGhpcy51cGRhdGVDdXJVc2VyUHJvZmlsZSh1c2VyLnVpZCk7XHJcbiAgICBjb25zb2xlLmxvZygnbm90aWZ5VXNlckNoYW5lZDogJywgdXNlcik7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybjtcclxuICAgIGxldCB7IHVpZCwgYXZhdGFyIH0gPSB1c2VyO1xyXG4gICAgdGhpcy5jdXJDaGF0UmVjb3JkTGlzdD8uaGlkZSgpO1xyXG4gICAgbGV0IGN1ckNoYXRSZWNvcmRMaXN0ID0gdGhpcy5SZWNvcmRMaXN0TWFwLmdldCh1aWQpPy5saXN0O1xyXG4gICAgaWYoICFjdXJDaGF0UmVjb3JkTGlzdCApIHtcclxuICAgICAgY3VyQ2hhdFJlY29yZExpc3QgPSBuZXcgQ2hhdFJlY29yZExpc3QodWlkKTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmluc2VydEJlZm9yZShjdXJDaGF0UmVjb3JkTGlzdC5nZXRFbGVtZW50KCksIHRoaXMuZmFzdE1lc3NhZ2VMaXN0LmdldEVsZW1lbnQoKSk7XHJcbiAgICAgIHRoaXMuUmVjb3JkTGlzdE1hcC5zZXQodWlkLCB7XHJcbiAgICAgICAgbGlzdDogY3VyQ2hhdFJlY29yZExpc3RcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCB7IHN0YXR1cywgZGF0YSB9ID0gYXdhaXQgU2VydmVyLmdldFVzZXJNZXNzYWdlRGV0YWlsKHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgcmVsYXRlVWlkOiB1aWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2VTaXplOiAyMCwgXHJcbiAgICAgICAgcGFnZU51bTogMVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCB8fCAhQXJyYXkuaXNBcnJheShkYXRhKSkgcmV0dXJuO1xyXG4gICAgICBkYXRhLnJldmVyc2UoKTtcclxuICAgICAgY3VyQ2hhdFJlY29yZExpc3QuYXBwZW5kUmVjb3JkKGRhdGEsIHtcclxuICAgICAgICBpc19zZWxmOiBmYWxzZSwgYXZhdGFyOiBhdmF0YXJcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlIGRldGFpbDogJywgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKiog54K55Ye75a+56K+d55u05o6l5Yi35pawICovXHJcbiAgICAvLyBsZXQgeyBzdGF0dXMsIGRhdGEgfSA9IGF3YWl0IFNlcnZlci5nZXRVc2VyTWVzc2FnZURldGFpbCh7XHJcbiAgICAvLyAgIHF1ZXJ5OiB7XHJcbiAgICAvLyAgICAgcmVsYXRlVWlkOiB1aWRcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgcGFnZVNpemU6IDIwLCBcclxuICAgIC8vICAgcGFnZU51bTogMVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBpZiAoc3RhdHVzICE9PSAwIHx8ICFBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm47XHJcbiAgICAvLyBkYXRhLnJldmVyc2UoKTtcclxuICAgIC8vIGN1ckNoYXRSZWNvcmRMaXN0LmFwcGVuZFJlY29yZChkYXRhLCB7XHJcbiAgICAvLyAgIGlzX3NlbGY6IGZhbHNlLCBhdmF0YXI6IGF2YXRhclxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnbWVzc2FnZSBkZXRhaWw6ICcsIGRhdGEpO1xyXG4gICAgLyoqICAqL1xyXG5cclxuICAgIHRoaXMuUmVjb3JkTGlzdE1hcC5mb3JFYWNoKCBvYmogPT4ge1xyXG4gICAgICBpZiAob2JqLmxpc3QudWlkICE9PSB1aWQpIG9iai5saXN0LmhpZGUoKTtcclxuICAgICAgZWxzZSBjb25zb2xlLmxvZygnU2FtZSBVSUQsIGJyZWFrLicpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY3VyQ2hhdFJlY29yZExpc3QgPSBjdXJDaGF0UmVjb3JkTGlzdDtcclxuICAgIGN1ckNoYXRSZWNvcmRMaXN0LnNob3coKTtcclxuICAgIGN1ckNoYXRSZWNvcmRMaXN0LmdldEVsZW1lbnQoKS5zY3JvbGxUb3AgPSBjdXJDaGF0UmVjb3JkTGlzdC5nZXRFbGVtZW50KCkuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBDaGF0Um9vbVxyXG59IiwiaW1wb3J0IHsgVmlld1VuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9WaWV3VW5pdC5qcyc7XHJcblxyXG5jbGFzcyBGYXN0TWVzc2FnZUxpc3Qge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHt7XHJcbiAgICogIGlkOiBTdHJpbmcsIGNsYXNzTGlzdDogU3RyaW5nW10sIGVsZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIHRleHRfbGlzdDogSFRNTEVsZW1lbnQsIGltYWdlX2xpc3Q6IEhUTUxFbGVtZW50XHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBpZDogJ2Zhc3RfbWVzc2FnZV9saXN0X3dyYXAnLFxyXG4gICAgY2xhc3NMaXN0OiBbJ2Zhc3QtbWVzc2FnZS1saXN0LXdyYXAnXSxcclxuICAgIGVsZTogbnVsbCxcclxuICAgIHRleHRfbGlzdDogbnVsbCxcclxuICAgIGltYWdlX2xpc3Q6IG51bGwsXHJcbiAgfVxyXG5cclxuICBvbiA9IHtcclxuICAgIHNlbGVjdF9tZXNzYWdlOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NMaXN0KXtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB0aGlzLmNvbmZpZy5pZCA9IGlkO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkgdGhpcy5jb25maWcuY2xhc3NMaXN0LnB1c2goLi4uY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgdGhpcy5iaW5kTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIGJpbmRMaXN0ZW5lcigpe1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhpcy5jb25maWcudGV4dF9saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICB0aGF0Lm5vdGlmeUxpc3RlbmVyKCdzZWxlY3RfbWVzc2FnZScsIHtcclxuICAgICAgICBjcmVhdGVkX3RpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICBkYXRhOiB0YXJnZXQuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgdHlwZTogMFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb25maWcuaW1hZ2VfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgaWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0nKSkgcmV0dXJuO1xyXG4gICAgICB0aGF0Lm5vdGlmeUxpc3RlbmVyKCdzZWxlY3RfbWVzc2FnZScsIHtcclxuICAgICAgICBjcmVhdGVkX3RpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICBkYXRhOiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdzcmMnKSxcclxuICAgICAgICAgIHR5cGU6IDJcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZhc3RUZXh0TGlzdCgpe1xyXG4gICAgbGV0IGFyciA9IFtcclxuICAgICAgJ0hlbGxvIHRoZXJlLCBob3cgbWF5IEkgaGVscCB5b3U/JyxcclxuICAgICAgYEhlbGxvIHRoZXJlLCBwbGVhc2UgbGV0IG1lIGtub3cgaWYgeW91IGhhdmUgYW55IHByb2JsZW1zIHdoaWxlIHVzaW5nIHRoZSBhcHAuIEkgYW0gYWx3YXlzIGhlcmUgdG8gaGVscC4gOilcclxuXHJcbiAgICAgIEJlc3QsXHJcbiAgICAgIEVtaWx5YCxcclxuICAgICAgJ1RoYW5rcy4nLFxyXG4gICAgICAnUGxlYXNlIHRyeSB0byByZWZyZXNoIHlvdXIgV2FsbGV0IHBhZ2UuIElmIHlvdSBzdGlsbCBjYW5ub3Qgc2VlIHRoZSBiYWxhbmNlLCBwbGVhc2UgcHJvdmlkZSB0aGUgcHVyY2hhc2luZyByZWNvcmQgc2NyZWVuc2hvdCBmb3Igb3VyIHJlZmVyZW5jZS4nLFxyXG4gICAgICAnWW91ciBhY2NvdW50IHdvdWxkIGJlIGRlbGV0ZWQgaW4gMTAgbWludXRlcy4gUGxlYXNlIGRvIG5vdCBsb2dpbiBhZ2FpbiwgeW91ciBhY2NvdW50IHdvdWxkIGJlIHJlYWN0aXZhdGVkLicsXHJcbiAgICAgICdBbGwgb3VyIHVzZXJzIGFyZSB2ZXJpZmllZC4gSWYgeW91IHRoaW5rIHNvbWVvbmUgaXMgZmFrZSwgeW91IGNvdWxkIG1ha2UgYSByZXBvcnQuIFlvdSBtYXkgY2xpY2sgdGhlIGJ1dHRvbiBvbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciB0byBibG9jayBhIHNwZWNpZmljIHBlcnNvbiBhbmQgaGUvc2hlIHdvdWxkIG5vdCBzaG93IG9uIHlvdXIgcHJvZmlsZSBhbnltb3JlLicsXHJcbiAgICAgICdZb3UgbWF5IHN3aXBlIHRvIG1hdGNoIHdpdGggdGhlIHBlcnNvbiB5b3UgbGlrZSBhbmQgdGhlbiBzZW5kIHRoZW0gbWVzc2FnZXMgZm9yIGZyZWUuIFlvdSBjb3VsZCBldmVuIHZpZGVvIGNhbGwgdGhlbSBwcml2YXRlbHkuIEhvcGUgeW91IGVuam95IGl0IScsXHJcbiAgICAgICdTb3JyeSBpdCBpcyBub3QgbG9jYXRpb24gYmFzZWQgYXBwLCB3ZSBwcm92aWRlIHdvcmR3aWRlIHVzZXJzIGZvciBtYXRjaGluZy4nLFxyXG4gICAgICBgU29ycnksIEkgbSBoZXJlIHRvIHdvcmsgc29sdmluZyB1c2VycycgcHJvYmxlbXMgb25seSA6KWAsXHJcbiAgICAgICdZb3UgbWF5IGJ1eSBkaWFtb25kcyBpbiB0aGUgd2FsbGV0LicsXHJcbiAgICAgIGBIZWxsbywgSSBhbSBFbWlseSwgYW55dGhpbmcgSSBjYW4gaGVscD9cclxuXHJcbiAgICAgIDopYCxcclxuICAgIF07XHJcbiAgICBsZXQgbGlzdEhUTUwgPSBbXTtcclxuICAgIGFyci5mb3JFYWNoKCB0ZXh0ID0+IHtcclxuICAgICAgbGlzdEhUTUwucHVzaChgPHAgY2xhc3M9XCJpdGVtXCI+JHt0ZXh0fTwvcD5gKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3RIVE1MLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgZmFzdEltYWdlTGlzdCgpe1xyXG4gICAgbGV0IGFyciA9IFtcclxuICAgICAgJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9saXZlaHViLXh5ei9MaXZldHViZV91bmRlZmluZWRfMjAyMTAzMjUxMDQ5NTVfY292ZXIuanBlZycsXHJcbiAgICAgICdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbGl2ZWh1Yi14eXovTGl2ZXR1YmVfdW5kZWZpbmVkXzIwMjEwMzI2MDIwNzQyX2NvdmVyLmpwZWcnLFxyXG4gICAgICAnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2xpdmVodWIteHl6L0xpdmV0dWJlX3VuZGVmaW5lZF8yMDIxMDMyNjAyMDg0Nl9jb3Zlci5qcGVnJyxcclxuICAgICAgJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9saXZlaHViLXh5ei9MaXZldHViZV91bmRlZmluZWRfMjAyMTAzMjYwMjA5MTdfY292ZXIuanBlZydcclxuICAgIF07XHJcbiAgICBsZXQgbGlzdEhUTUwgPSBbXTtcclxuICAgIGFyci5mb3JFYWNoKCB0ZXh0ID0+IHtcclxuICAgICAgbGlzdEhUTUwucHVzaChgXHJcbiAgICAgIDxpbWcgY2xhc3M9XCJpdGVtXCIgc3JjPVwiJHt0ZXh0fVwiIC8+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJwcmV2aWV3XCIgc3JjPVwiJHt0ZXh0fVwiIC8+XHJcbiAgICAgIGApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGlzdEhUTUwuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBpbml0Vmlldygpe1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IGVsZSA9IGNvbmZpZy5lbGU7XHJcbiAgICBpZiAoZWxlKSByZXR1cm47XHJcbiAgICBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5pZCA9IGNvbmZpZy5pZDtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgY29uZmlnLmVsZSA9IGVsZTtcclxuICAgIGVsZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXQgY2hlY2tlZD1cInRydWVcIiBpZD1cImZhc3RfbWVzc2FnZV9saXN0X3N3aXRjaF9pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIiBmb3I9XCJmYXN0X21lc3NhZ2VfbGlzdF9zd2l0Y2hfaW5wdXRcIj5cclxuICAgICAgPHA+PC9wPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJmYXN0LW1lc3NhZ2UtbGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1saXN0XCI+XHJcbiAgICAgICAgJHt0aGlzLmZhc3RUZXh0TGlzdCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWxpc3RcIj5cclxuICAgICAgICAke3RoaXMuZmFzdEltYWdlTGlzdCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy50ZXh0X2xpc3QgPSBlbGUucXVlcnlTZWxlY3RvcignLnRleHQtbGlzdCcpO1xyXG4gICAgY29uZmlnLmltYWdlX2xpc3QgPSBlbGUucXVlcnlTZWxlY3RvcignLmltYWdlLWxpc3QnKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnc2VsZWN0X21lc3NhZ2UnIH0gZXZlbnRfbmFtZSBcclxuICAgKiBAcGFyYW0geyBGdW5jdGlvbih7IGNyZWF0ZWRfdGltZTogTnVtYmVyLCBkYXRhOiBTdHJpbmcsIHR5cGU6ICd0ZXh0JyB8ICdpbWFnZScgfSkgfSBjYWxsYmFjayBcclxuICAgKi9cclxuICBzZXRMaXN0ZW5lciggZXZlbnRfbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICB0aGlzLm9uW2V2ZW50X25hbWVdID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdzZWxlY3RfbWVzc2FnZScgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IHsgY3JlYXRlZF90aW1lOiBOdW1iZXIsIGRhdGE6IFN0cmluZywgdHlwZTogJ3RleHQnIHwgJ2ltYWdlJyB9IH0gcGFyYW0gXHJcbiAgICovXHJcbiAgbm90aWZ5TGlzdGVuZXIoIGV2ZW50X25hbWUsIHBhcmFtICkge1xyXG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5vbltldmVudF9uYW1lXTtcclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKHBhcmFtKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgRmFzdE1lc3NhZ2VMaXN0XHJcbn0iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi4vVmlldyc7XHJcbmltcG9ydCB7IE9iamVjdFVuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9PYmplY3RVbml0LmpzJztcclxuXHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2JlYW4vVXNlckluZm8uanMnO1xyXG5cclxudmFyIHNlcmlhbF9udW1iZXIgPSAxO1xyXG5cclxuY2xhc3MgVXNlcldyYXAge1xyXG4gIC8qKkB0eXBlIHsgVXNlckluZm8gfSAqL1xyXG4gIHVzZXI7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgY2xhc3NMaXN0OiBTdHJpbmdbXSxcclxuICAgKiAgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgaW5wdXQ6IEhUTUxFbGVtZW50LFxyXG4gICAqICBiYWRnZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIGxhc3RfbWVzc2FnZTogSFRNTEVsZW1lbnQsXHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBjbGFzc0xpc3Q6IFsndXNlci13cmFwJ10sXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBpbnB1dDogbnVsbCxcclxuICAgIGJhZGdlOiBudWxsLFxyXG4gICAgbGFzdF9tZXNzYWdlOiBudWxsXHJcbiAgfVxyXG5cclxuICBvbiA9IHtcclxuICAgIGNoYW5nZTogbnVsbCxcclxuICAgIHNlbGVjdGVkOiBudWxsLFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgVXNlckluZm8gfSB1c2VyIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCB1c2VyICl7XHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgIHRoaXMuYmluZExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpbml0Vmlldygpe1xyXG4gICAgaWYgKE9iamVjdFVuaXQuaXNFbXB0eU9iamVjdCh0aGlzLnVzZXIpKSByZXR1cm47XHJcbiAgICAvLyBjb25zb2xlLmxvZygnVXNlcldyYXAuaW5pdFZpZXc6ICcsIHsgdXNlcjogdGhpcy51c2VyLCBjb25maWc6IHRoaXMuY29uZmlnfSk7XHJcbiAgICBsZXQgdXNlciA9IHRoaXMudXNlcjtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIGxldCBlbGUgPSBjb25maWcuZWxlO1xyXG4gICAgaWYgKCBlbGUgKSByZXR1cm47XHJcbiAgICBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBlbGUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IHVpZD1cIiR7dXNlci51aWR9XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxpc3QtdXNlclwiID5cclxuICAgIDxkaXYgY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXJpYWwgJHt1c2VyLmRpYW1vbmQgPiAwID8gJ2RpYW1vbmQnIDogJyd9XCI+JHtzZXJpYWxfbnVtYmVyKyt9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItd3JhcCAke3VzZXIuc3RhciA+IDAgPyAnc3RhcicgOiAnJ31cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdGFuZ2xlLWJveCBzcXVhcmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXIgbm8xXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt1c2VyLmF2YXRhcn1cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2Ugbm8yXCI+wrc8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXdyYXBcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJuYW1lXCI+JHt1c2VyLm5pY2tuYW1lfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsYXN0LW1lc3NhZ2VcIj4ke3VzZXIubGFzdE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGlhbW9uZC1hbmQtc3RhclwiPmRpbW9uZDogJHt1c2VyLmRpYW1vbmR9IC8gc3RhcjogJHt1c2VyLnN0YXJ9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy5lbGUgPSBlbGU7XHJcbiAgICBjb25maWcuYmFkZ2UgPSBlbGUucXVlcnlTZWxlY3RvcignLmJhZGdlJyk7XHJcbiAgICBjb25maWcuaW5wdXQgPSBlbGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgIGNvbmZpZy5sYXN0X21lc3NhZ2UgPSBlbGUucXVlcnlTZWxlY3RvcignLmxhc3QtbWVzc2FnZScpO1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLmNvbmZpZy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgaXNfY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcclxuICAgICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAgIGlzX2NoZWNrZWQsXHJcbiAgICAgICAgdWlkOiB0aGF0LnVzZXIudWlkXHJcbiAgICAgIH1cclxuICAgICAgdGhhdC5ub3RpZnlMaXN0ZW5lcignY2hhbmdlJywgcGFyYW0pO1xyXG4gICAgICB0aGF0Lm5vdGlmeUxpc3RlbmVyKCdzZWxlY3RlZCcsIHBhcmFtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnY2hhbmdlJyB8ICdzZWxlY3RlZCcgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IEZ1bmN0aW9uKHsgaXNfY2hlY2tlZDogQm9vbGVhbiwgdWlkOiBTdHJpbmcgfSkgfSBjYWxsYmFjayBcclxuICAgKi9cclxuICBzZXRMaXN0ZW5lciggZXZlbnRfbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICB0aGlzLm9uW2V2ZW50X25hbWVdID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdjaGFuZ2UnIHwgJ3NlbGVjdGVkJyB9IGV2ZW50X25hbWVcclxuICAgKiBAcGFyYW0geyB7IGlzX2NoZWNrZWQ6IEJvb2xlYW4sIHVpZDogU3RyaW5nIH0gfSBwYXJhbVxyXG4gICAqL1xyXG4gIG5vdGlmeUxpc3RlbmVyKCBldmVudF9uYW1lLCBwYXJhbSApIHtcclxuICAgIGxldCBjYWxsYmFjayA9IHRoaXMub25bZXZlbnRfbmFtZV07XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhwYXJhbSk7XHJcbiAgfVxyXG5cclxuICBjaGVja2VkKCl7XHJcbiAgICB0aGlzLmNvbmZpZy5pbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJhZGdlKCBudW0gKSB7XHJcbiAgICBsZXQgYmFkZ2UgPSB0aGlzLmNvbmZpZy5iYWRnZTtcclxuICAgIGlmICggbnVtID4gMCkge1xyXG4gICAgICBiYWRnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWVsZScpO1xyXG4gICAgICBiYWRnZS5pbm5lclRleHQgPSBudW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYWRnZS5jbGFzc0xpc3QuYWRkKCdoaWRlLWVsZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGFzdE1lc3NhZ2UoIG1lc3NhZ2UgKSB7XHJcbiAgICB0aGlzLmNvbmZpZy5sYXN0X21lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICcnIHwgJ2RpYW1vbmQnIHwgJ3N0YXInIH0gZmlsdGVyXHJcbiAgICovXHJcbiAgaGlkZSggZmlsdGVyLCByZXNlcnZlICl7XHJcbiAgICBsZXQgZmxhZyA9IFwiXCI7XHJcbiAgICBpZiAocmVzZXJ2ZSkge1xyXG4gICAgICBmbGFnID0gJ25vLScrZmlsdGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dpdGNoKCBmaWx0ZXIgKSB7XHJcbiAgICAgICAgY2FzZSAnZGlhbW9uZCc6IGZsYWcgPSB0aGlzLnVzZXIuZGlhbW9uZCA+IDAgPyAnJyA6ICduby1kaWFtb25kJzsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAgICAnc3Rhcic6IGZsYWcgPSB0aGlzLnVzZXIuc3RhciA+IDAgPyAnJyA6ICduby1zdGFyJzsgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdCA6IGZsYWcgPSAnaGlkZS1lbGUnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnVXNlcldyYXAuaGlkZTogJywgeyBmaWx0ZXIsIHJlc2VydmUsIGZsYWcsIGxpc3Q6IHRoaXMuY29uZmlnLmVsZS5jbGFzc0xpc3R9KTtcclxuICAgIC8vIHJldHVybjtcclxuICAgIGlmICghZmxhZykgcmV0dXJuO1xyXG4gICAgaWYgKHJlc2VydmUpIHtcclxuICAgICAgdGhpcy5jb25maWcuZWxlPy5jbGFzc0xpc3QucmVtb3ZlKGZsYWcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb25maWcuZWxlPy5jbGFzc0xpc3QuYWRkKGZsYWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgJycgfCAnZGlhbW9uZCcgfCAnc3RhcicgfSBmaWx0ZXJcclxuICAgKi9cclxuICBzaG93KCBmaWx0ZXIgKXtcclxuICAgIHRoaXMuaGlkZSggZmlsdGVyLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgVXNlcldyYXBcclxufSIsImltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2JlYW4vVXNlckluZm8uanMnO1xyXG5pbXBvcnQgeyBVc2VyV3JhcCB9IGZyb20gJy4vVXNlcldyYXAuanMnO1xyXG5pbXBvcnQgeyBPYmplY3RVbml0IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL3VuaXQvT2JqZWN0VW5pdC5qcyc7XHJcblxyXG5jbGFzcyBVc2VyTGlzdCB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgaWQ6IFN0cmluZywgY2xhc3NMaXN0OiBTdHJpbmdbXSwgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgbW9yZV9saXN0X3dyYXA6IEhUTUxFbGVtZW50LCBtb3JlX2xpc3Q6IEhUTUxFbGVtZW50LFxyXG4gICAqICBmaWx0ZXJfZGlhbW9uZDogSFRNTEVsZW1lbnQsIGZpbHRlcl9zdGFyOiBIVE1MRWxlbWVudCxcclxuICAgKiAgZmlsdGVyOiB7XHJcbiAgICogICAgZGlhbW9uZDogQm9vbGVhbiwgc3RhcjogQm9vbGVhblxyXG4gICAqICB9XHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBpZDogJ3VzZXJfbGlzdCcsXHJcbiAgICBjbGFzc0xpc3Q6IFsndXNlci1saXN0J10sXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBtb3JlX2xpc3Rfd3JhcDogbnVsbCxcclxuICAgIG1vcmVfbGlzdDogbnVsbCxcclxuICAgIGZpbHRlcl9kaWFtb25kOiBudWxsLFxyXG4gICAgZmlsdGVyX3N0YXI6IG51bGwsXHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgZGlhbW9uZDogZmFsc2UsXHJcbiAgICAgIHN0YXI6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIHtcclxuICAgKiAgY3JlYXRlZF90aW1lOiBOdW1iZXIsXHJcbiAgICogIHVwZGF0ZWRfdGltZTogTnVtYmVyLFxyXG4gICAqICB1c2VyOiBVc2VySW5mbyxcclxuICAgKiAgdXNlcl93cmFwOiBVc2VyV3JhcCxcclxuICAgKiB9PiB9XHJcbiAgICovXHJcbiAgVXNlck1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgb24gPSB7XHJcbiAgICBjaGFuZ2VkX3VzZXI6IG51bGwsXHJcbiAgICBtb3JlX2xpc3Q6IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkLCBjbGFzc0xpc3Qpe1xyXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHRoaXMuY29uZmlnLmlkID0gaWQ7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpKSB0aGlzLmNvbmZpZy5jbGFzc0xpc3QucHVzaCguLi5jbGFzc0xpc3QpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKXtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIGxldCBlbGUgPSBjb25maWcuZWxlO1xyXG4gICAgaWYgKGVsZSkgcmV0dXJuO1xyXG4gICAgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGUuaWQgPSBjb25maWcuaWQ7XHJcbiAgICBlbGUuY2xhc3NMaXN0LmFkZCguLi5jb25maWcuY2xhc3NMaXN0KTtcclxuICAgIGNvbmZpZy5lbGUgPSBlbGU7XHJcbiAgICBlbGUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImZpbHRlci1ncmlkXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImZpbHRlclwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlsdGVyLWRpYW1vbmRcIiAvPlxyXG4gICAgICAgIDxzcGFuPuaciemSu+efszwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWx0ZXItc3RhclwiIC8+XHJcbiAgICAgICAgPHNwYW4+5pyJ5raI6LS5PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9yZS1saXN0LXdyYXBcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vcmUtbGlzdFwiPm1vcmU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy5tb3JlX2xpc3Rfd3JhcCA9IGVsZS5xdWVyeVNlbGVjdG9yKCcubW9yZS1saXN0LXdyYXAnKTtcclxuICAgIGNvbmZpZy5tb3JlX2xpc3QgPSBlbGUucXVlcnlTZWxlY3RvcignLm1vcmUtbGlzdCcpO1xyXG4gICAgY29uZmlnLmZpbHRlcl9kaWFtb25kID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJmaWx0ZXItZGlhbW9uZFwiXScpO1xyXG4gICAgY29uZmlnLmZpbHRlcl9zdGFyID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJmaWx0ZXItc3RhclwiXScpO1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICAvLyBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgbW9yZUxpc3RlbmVyID0gKCgpID0+IHtcclxuICAgICAgbGV0IHRpbWVyO1xyXG4gICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmbGFnKSByZXR1cm47XHJcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXIoJ21vcmVfbGlzdCcpO1xyXG4gICAgICAgIGlmKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgICB0aGlzLmNvbmZpZy5tb3JlX2xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBtb3JlTGlzdGVuZXIodGhpcyk7XHJcbiAgICB9KTtcclxuICAgIC8vIGZpbHRlclxyXG4gICAgdGhpcy5jb25maWcuZmlsdGVyX2RpYW1vbmQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBsZXQgaXNfY2hlY2tlZCA9IHRoaXMuY29uZmlnLmZpbHRlcl9kaWFtb25kLmNoZWNrZWQ7XHJcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlci5kaWFtb25kID0gaXNfY2hlY2tlZDtcclxuICAgICAgdGhpcy5Vc2VyTWFwLmZvckVhY2goIHVzZXIgPT4ge1xyXG4gICAgICAgIGlzX2NoZWNrZWQgPyB1c2VyLnVzZXJfd3JhcC5oaWRlKCdkaWFtb25kJykgOiB1c2VyLnVzZXJfd3JhcC5zaG93KCdkaWFtb25kJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbmZpZy5maWx0ZXJfc3Rhci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGxldCBpc19jaGVja2VkID0gdGhpcy5jb25maWcuZmlsdGVyX3N0YXIuY2hlY2tlZDtcclxuICAgICAgdGhpcy5jb25maWcuZmlsdGVyLnN0YXIgPSBpc19jaGVja2VkO1xyXG4gICAgICB0aGlzLlVzZXJNYXAuZm9yRWFjaCggdXNlciA9PiB7XHJcbiAgICAgICAgaXNfY2hlY2tlZCA/IHVzZXIudXNlcl93cmFwLmhpZGUoJ3N0YXInKSA6IHVzZXIudXNlcl93cmFwLnNob3coJ3N0YXInKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGxldCBzY3JvbGxfdGltZXIgPSBudWxsO1xyXG4gICAgLy8gbGV0IGNhbl9zY3JvbGwgPSB0cnVlO1xyXG4gICAgLy8gdGhpcy5jb25maWcuZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgIGlmICghY2FuX3Njcm9sbCkgcmV0dXJuO1xyXG4gICAgLy8gICBjYW5fc2Nyb2xsID0gZmFsc2U7XHJcbiAgICAvLyAgIGxldCBjbGllbnRIZWlnaHQgPSB0aGlzLmNsaWVudEhlaWdodDtcclxuICAgIC8vICAgbGV0IHNjcm9sbEhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgLy8gICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdVc2VyTGlzdCBTY3JvbGw6ICcsIHsgY2xpZW50SGVpZ2h0LCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodH0pO1xyXG4gICAgLy8gICBpZiAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ICsgNSA+PSBzY3JvbGxIZWlnaHQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBTY3JvbGwgVG8gQm90dG9tLicpO1xyXG4gICAgLy8gICB9IGVsc2UgY29uc29sZS5sb2coJ05vIFNjcm9sbCBUbyBCb3R0b20uJyk7XHJcbiAgICAvLyAgIHNjcm9sbF90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNhbl9zY3JvbGwgPSB0cnVlO1xyXG4gICAgLy8gICB9LCA1MDApO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgVXNlckluZm8gfSB1c2VyIFxyXG4gICAqL1xyXG4gIGFwcGVuZFVzZXIoIHVzZXIgKSB7XHJcbiAgICBpZiAoT2JqZWN0VW5pdC5pc0VtcHR5T2JqZWN0KHVzZXIpKSByZXR1cm47XHJcbiAgICBsZXQgY3VyID0gdGhpcy5Vc2VyTWFwLmdldCh1c2VyLnVpZCk7XHJcbiAgICBpZiAoIWN1cikge1xyXG4gICAgICBjdXIgPSB7XHJcbiAgICAgICAgY3JlYXRlZF90aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgfVxyXG4gICAgICBjdXIudXNlcl93cmFwID0gIG5ldyBVc2VyV3JhcCh1c2VyKTtcclxuICAgICAgY3VyLnVzZXJfd3JhcC5zZXRMaXN0ZW5lcignc2VsZWN0ZWQnLCAocGFyYW0pID0+IHtcclxuICAgICAgICB0aGlzLlVzZXJNYXAuZ2V0KHVzZXIudWlkKS51c2VyX3dyYXAudXBkYXRlQmFkZ2UoMCk7XHJcbiAgICAgICAgaWYgKCFwYXJhbS5pc19jaGVja2VkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcignY2hhbmdlZF91c2VyJywge1xyXG4gICAgICAgICAgaXNfY2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGN1ci51c2VyX3dyYXAuaGlkZSgnZGlhbW9uZCcpO1xyXG4gICAgICAvLyBjdXIudXNlcl93cmFwLmhpZGUoJ3N0YXInKTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmluc2VydEJlZm9yZShjdXIudXNlcl93cmFwLmdldEVsZW1lbnQoKSwgdGhpcy5jb25maWcubW9yZV9saXN0X3dyYXApO1xyXG4gICAgICB0aGlzLlVzZXJNYXAuc2V0KHVzZXIudWlkLCBjdXIpO1xyXG4gICAgfVxyXG4gICAgY3VyLnVzZXJfd3JhcC51cGRhdGVCYWRnZSh1c2VyLnVuUmVhZENvdW50KTtcclxuICAgIGN1ci51c2VyX3dyYXAudXBkYXRlTGFzdE1lc3NhZ2UodXNlci5sYXN0TWVzc2FnZSk7XHJcbiAgICBjdXIudXBkYXRlZF90aW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGN1ci51c2VyID0gdXNlcjtcclxuICAgIGlmICh0aGlzLlVzZXJNYXAuc2l6ZSA9PT0gMSkge1xyXG4gICAgICBjdXIudXNlcl93cmFwLmNoZWNrZWQoKTtcclxuICAgICAgY3VyLnVzZXJfd3JhcC51cGRhdGVCYWRnZSgwKTtcclxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcignY2hhbmdlZF91c2VyJywgeyBpc19jaGVja2VkOiB0cnVlLCB1c2VyOiBjdXIudXNlciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdjaGFuZ2VkX3VzZXInIHwgJ21vcmVfbGlzdCcgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IEZ1bmN0aW9uKHsgaXNfY2hlY2tlZDogQm9vbGVhbiwgdWlkOiBTdHJpbmcgfSkgfSBjYWxsYmFjayBcclxuICAgKi9cclxuICBzZXRMaXN0ZW5lciggZXZlbnRfbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICB0aGlzLm9uW2V2ZW50X25hbWVdID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdjaGFuZ2VkX3VzZXInIHwgJ21vcmVfbGlzdCcgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IEZ1bmN0aW9uKHsgaXNfY2hlY2tlZDogQm9vbGVhbiwgdXNlcjogVXNlckluZm8gfSkgfSBwYXJhbSBcclxuICAgKi9cclxuICBub3RpZnlMaXN0ZW5lciggZXZlbnRfbmFtZSwgcGFyYW0gKSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm9uW2V2ZW50X25hbWVdO1xyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2socGFyYW0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VyTGlzdFxyXG59IiwiaW1wb3J0IHsgVmlld1VuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9WaWV3VW5pdC5qcyc7XHJcblxyXG5jbGFzcyBVc2VyUHJvZmlsZSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgaWQ6IFN0cmluZywgY2xhc3NMaXN0OiBTdHJpbmdbXSwgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgdGV4dF9saXN0OiBIVE1MRWxlbWVudCwgaW1hZ2VfbGlzdDogSFRNTEVsZW1lbnQsXHJcbiAgICogIGluZm86IHtcclxuICAgKiAgICB1aWQ6IEhUTUxFbGVtZW50LCBkaWFtb25kOiBIVE1MRWxlbWVudCwgY3JlYXRlZEF0OiBIVE1MRWxlbWVudFxyXG4gICAqICB9XHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBpZDogJ3VzZXJfcHJvZmlsZV93cmFwJyxcclxuICAgIGNsYXNzTGlzdDogWyd1c2VyLXByb2ZpbGUtd3JhcCcsICdoaWRlLWVsZSddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgaW5mbzoge1xyXG4gICAgICB1aWQ6IG51bGwsXHJcbiAgICAgIGRpYW1vbmQ6IG51bGwsXHJcbiAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICBjcmVhdGVkQXQ6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NMaXN0KXtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB0aGlzLmNvbmZpZy5pZCA9IGlkO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkgdGhpcy5jb25maWcuY2xhc3NMaXN0LnB1c2goLi4uY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVXNlclByb2ZpbGVIVE1MKCl7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb25maWcuaW5mbykge1xyXG4gICAgICBsZXQgaW5mb19lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIGluZm9fZWxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nLCBrZXkpO1xyXG4gICAgICB0aGlzLmNvbmZpZy5pbmZvW2tleV0gPSBpbmZvX2VsZTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmFwcGVuZENoaWxkKGluZm9fZWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gY29uZmlnLmVsZTtcclxuICAgIGlmIChlbGUpIHJldHVybjtcclxuICAgIGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmlkID0gY29uZmlnLmlkO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gICAgdGhpcy5yZW5kZXJVc2VyUHJvZmlsZUhUTUwoKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyB7IHVpZDogU3RyaW5nLCBjcmVhdGVkQXQ6IFN0cmluZywgZGlhbW9uZDogTnVtYmVyfSB9IHByb2ZpbGUgXHJcbiAgICovXHJcbiAgdXBkYXRlUHJvZmlsZSggcHJvZmlsZSApe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZWxlJyk7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb25maWcuaW5mbykge1xyXG4gICAgICB0aGlzLmNvbmZpZy5pbmZvW2tleV0uaW5uZXJIVE1MID0gYDxzcGFuPiR7a2V5fTwvc3Bhbj46IDxiPiR7cHJvZmlsZVtrZXldfTwvYj5gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZWxlJyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VyUHJvZmlsZVxyXG59IiwiY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqL1xyXG4gIGluaXQoKXt9XHJcblxyXG4gIC8qKkBhYnN0cmFjdCAqL1xyXG4gIGluaXRWaWV3KCl7fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBWaWV3XHJcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpZiAodHlwZW9mIFByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcclxuICBhbGVydCgnWW91ciBCcm93c2VyIE5vdCBTdXBwb3J0IFByb21pc2UuJylcclxufVxyXG5cclxuaW1wb3J0IHsgVXNlckxpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXJMaXN0JztcclxuaW1wb3J0IHsgQ2hhdFJvb20gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXRSb29tJztcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL3VuaXQvU2VydmVyJztcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tICcuLi8uLi9hc3NldHMvanMvYmVhbi9Vc2VySW5mbyc7XHJcbi8vIGltcG9ydCB7IE9iamVjdFVuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9PYmplY3RVbml0JztcclxuXHJcbmNvbnN0IHVzZXJfbGlzdF9hcnIgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEwMDAxLFxyXG4gICAgdWlkOiAxMjM0NSxcclxuICAgIG5pY2tuYW1lOiAnSmFjayBNYScsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL3N3LmNvb2wzYy5jb20vdXNlci85OTU4OC8yMDE4LzdmOGJiMjYwLTk0M2MtNGI5ZC1iNThiLTRlZDc4MmM4NzYxYS5qcGcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTAwMDIsXHJcbiAgICB1aWQ6IDEyMzQ2LFxyXG4gICAgbmlja25hbWU6ICdQb255IE1hJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vc3cuY29vbDNjLmNvbS91c2VyLzk5NTg4LzIwMTgvN2Y4YmIyNjAtOTQzYy00YjlkLWI1OGItNGVkNzgyYzg3NjFhLmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDAwMyxcclxuICAgIHVpZDogMTIzNDcsXHJcbiAgICBuaWNrbmFtZTogJ1dhbmcgSmlhbmxpbicsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL3N3LmNvb2wzYy5jb20vdXNlci85OTU4OC8yMDE4LzdmOGJiMjYwLTk0M2MtNGI5ZC1iNThiLTRlZDc4MmM4NzYxYS5qcGcnXHJcbiAgfVxyXG5dXHJcblxyXG5jbGFzcyBUaGVQYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICAvKipAdHlwZSB7IEhUTUxFbGVtZW50IH0gKi9cclxuICAgIGVsZTogbnVsbCxcclxuICAgIC8qKkB0eXBlIHsgSFRNTEVsZW1lbnQgfSAqL1xyXG4gICAgcGFyZW50OiBudWxsLFxyXG4gICAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqL1xyXG4gICAgcGFyZW50X2Nzc1NlbGVjdG9yOiAnI2NoYXRfYmxvY2snLFxyXG4gICAgLy8g5Yqg6L296Iez56ys5Yeg6aG15pyq6K+75raI5oGv55So5oi35YiX6KGoXHJcbiAgICBwYWdlTnVtOiB7XHJcbiAgICAgIHVzZXJfbGlzdDogMlxyXG4gICAgfSxcclxuICAgIC8vIOmhtemdouaYr+WQpuWPr+ingVxyXG4gICAgcGFnZV92aXNpYmxlOiB0cnVlXHJcbiAgfVxyXG5cclxuICBhbHJlYWR5ID0ge1xyXG4gICAgaW5pdDoge1xyXG4gICAgICB2aWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipAdHlwZSB7IFVzZXJMaXN0IH0gKi9cclxuICB1c2VyTGlzdDtcclxuICAvKipAdHlwZSB7IENoYXRSb29tIH0gKi9cclxuICBjaGF0Um9vbTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy51c2VyTGlzdCA9IG5ldyBVc2VyTGlzdCgpO1xyXG4gICAgdGhpcy5jaGF0Um9vbSA9IG5ldyBDaGF0Um9vbSgpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIFVzZXJJbmZvPiB9XHJcbiAgICovXHJcbiAgVXNlckluZm9NYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgIHRoaXMuZ2V0TWVzc2FnZVVzZXJMaXN0KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5zdGFydE1lc3NhZ2VVc2VyTGlzdFRpbWVyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAoIHRoaXMuYWxyZWFkeS5pbml0LnZpZXcgKSByZXR1cm47XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucGFyZW50X2Nzc1NlbGVjdG9yKTtcclxuICAgIGNvbmZpZy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy51c2VyTGlzdC5nZXRFbGVtZW50KCkpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY2hhdFJvb20uZ2V0RWxlbWVudCgpKTtcclxuICAgIHRoaXMuYWxyZWFkeS5pbml0LnZpZXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0TWVzc2FnZVVzZXJMaXN0KCBwYWdlTnVtID0gMSApe1xyXG4gICAgbGV0IHsgc3RhdHVzLCBkYXRhIH0gPSBhd2FpdCBTZXJ2ZXIuZ2V0VW5yZWFkTWVzc2FnZVVzZXJMaXN0KHBhZ2VOdW0pO1xyXG4gICAgaWYgKHN0YXR1cyAhPT0gMCkgcmV0dXJuO1xyXG4gICAgY29uc29sZS5sb2coJ2dldE1lc3NhZ2VVc2VyTGlzdDogJywgZGF0YSk7XHJcbiAgICBkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGIuZGlhbW9uZCAtIGEuZGlhbW9uZDtcclxuICAgIH0pO1xyXG4gICAgZGF0YS5mb3JFYWNoKCB1c2VyID0+IHtcclxuICAgICAgdXNlci51aWQgPSB1c2VyLnJlbGF0ZVVpZDtcclxuICAgICAgdGhpcy51c2VyTGlzdC5hcHBlbmRVc2VyKHVzZXIpO1xyXG4gICAgICB0aGlzLlVzZXJJbmZvTWFwLnNldCh1c2VyLnVpZCwgdXNlcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0TWVzc2FnZVVzZXJMaXN0VGltZXIoKXtcclxuICAgIGxldCB1c3AgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBpZiAodXNwLmdldCgndGltZXInKSA9PT0gJ29uJykge1xyXG4gICAgICBsZXQgc2VjID0gfn51c3AuZ2V0KCdzZWMnKTtcclxuICAgICAgbGV0IGR1cmF0aW9uID0gc2VjID4gMTUgPyBzZWMgKiAxMDAwIDogMTUwMDA7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTdGFydCBUaW1lcjogJywgeyBkdXJhdGlvbiB9KTtcclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0TWVzc2FnZVVzZXJMaXN0KCk7XHJcbiAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRMaXN0ZW5lcigpe1xyXG4gICAgLy8g5YiH5o2i6IGK5aSp55So5oi3XHJcbiAgICB0aGlzLnVzZXJMaXN0LnNldExpc3RlbmVyKCdjaGFuZ2VkX3VzZXInLCAocGFyYW0pID0+IHtcclxuICAgICAgbGV0IHsgaXNfY2hlY2tlZCwgdXNlciB9ID0gcGFyYW07XHJcbiAgICAgIGlmIChpc19jaGVja2VkKSB0aGlzLmNoYXRSb29tLm5vdGlmeVVzZXJDaGFuZWQoIHVzZXIgKTtcclxuICAgIH0pO1xyXG4gICAgLy8g5pu05aSa5pyq6K+75raI5oGv55So5oi35YiX6KGoXHJcbiAgICB0aGlzLnVzZXJMaXN0LnNldExpc3RlbmVyKCdtb3JlX2xpc3QnLCgpID0+IHtcclxuICAgICAgdGhpcy5nZXRNZXNzYWdlVXNlckxpc3QodGhpcy5jb25maWcucGFnZU51bS51c2VyX2xpc3QrKyk7XHJcbiAgICB9KTtcclxuICAgIC8vIOajgOa1i+mhtemdouaYr+WQpuWPr+ingVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcclxuICAgICAgbGV0IHZpc2libGUgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGU7XHJcbiAgICAgIHRoaXMuY29uZmlnLnBhZ2VfdmlzaWJsZSA9PT0gKCB2aXNpYmxlID09PSBcInZpc2libGVcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHRoZVBhZ2UgPSBuZXcgVGhlUGFnZSgpO1xyXG53aW5kb3cudGhlUGFnZSA9IHRoZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==