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
function UserInfo(id, uid, nickname, avatar, gender, age, lastMessage) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, UserInfo);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "id", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "uid", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "nickname", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "avatar", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "gender", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "age", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "lastMessage", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "updateBadge", void 0);

  this.id = id;
  this.uid = uid;
  this.nickname = nickname;
  this.avatar = avatar;
  this.gender = gender;
  this.age = age;
  this.lastMessage = lastMessage;
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

      ele.innerHTML = "\n    <input uid=\"".concat(user.uid, "\" type=\"radio\" name=\"list-user\" >\n    <div class=\"user\">\n      <div class=\"serial\">").concat(serial_number++, "</div>\n      <div class=\"avatar-wrap\">\n        <div class=\"rectangle-box square\">\n          <div class=\"avatar no1\">\n            <img src=\"").concat(user.avatar, "\" />\n          </div>\n          <div class=\"badge no2\">\xB7</div>\n        </div>\n      </div>\n      <div class=\"message-wrap\">\n        <h2 class=\"name\">").concat(user.nickname, "</h2>\n        <p class=\"last-message\">").concat(user.lastMessage, "</p>\n      </div>\n    </div>\n    ");
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
   *  more_list_wrap: HTMLElement, more_list: HTMLElement
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
      more_list: null
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
      ele.innerHTML = "\n    <div class=\"more-list-wrap\">\n      <button class=\"more-list\">more</button>\n    </div>\n    ";
      config.more_list_wrap = ele.querySelector('.more-list-wrap');
      config.more_list = ele.querySelector('.more-list');
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
        });
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
                data.forEach(function (user) {
                  user.uid = user.relateUid;

                  _this.userList.appendUser(user);

                  _this.UserInfoMap.set(user.uid, user);
                });

              case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvYmVhbi9NZXNzYWdlLmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2Fzc2V0cy9qcy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL3VuaXQvRGF0ZVVuaXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL3VuaXQvT2JqZWN0VW5pdC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvdW5pdC9TZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL3VuaXQvVmlld1VuaXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9DaGF0Um9vbS9DaGF0UmVjb3JkTGlzdC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9jb21wb25lbnRzL0NoYXRSb29tL1NlbmRNZXNzYWdlLmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvQ2hhdFJvb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9GYXN0TWVzc2FnZUxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9Vc2VyTGlzdC9Vc2VyV3JhcC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9jb21wb25lbnRzL1VzZXJMaXN0L2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvVXNlclByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9WaWV3L2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpdmVpbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saXZlaW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpdmVpbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpdmVpbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJtZXNzYWdlX29iaiIsInVzZXJfaW5mbyIsImlzX3NlbGYiLCJhdmF0YXIiLCJlbGUiLCJjbGFzc0xpc3QiLCJpZCIsInRpbWVzdGFtcCIsIm1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsImluaXQiLCJpbml0VmlldyIsInR5cGUiLCJyZXN1bHQiLCJjb25maWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJEYXRlVW5pdCIsInJlbmRlck1lc3NhZ2VDb250ZW50IiwiVXNlckluZm8iLCJ1aWQiLCJuaWNrbmFtZSIsImdlbmRlciIsImFnZSIsImxhc3RNZXNzYWdlIiwiRGVmYXVsdENvbmZpZyIsImJhc2VVUkwiLCJEYXRlVW5pdENsYXNzIiwiZGF0ZV9vYmoiLCJmb3JtYXRfc3RyIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJyZXBsYWNlIiwiZ2V0RnVsbFllYXIiLCJnZXRNaWxsaXNlY29uZHMiLCJPYmplY3RVbml0Q2xhc3MiLCJvYmoiLCJ1bmRlZmluZWQiLCJpc051bGwiLCJpc09iamVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJudW0iLCJTdHJpbmciLCJzdHIiLCJpc1N0cmluZyIsInRyaW0iLCJpc0VtcHR5U3RyaW5nIiwiT2JqZWN0VW5pdCIsIkJhc2VSZXNwb25zZVR5cGUiLCJpc190ZXN0Iiwibm9fc2VuZF9tc2ciLCJheGlvcyIsInJlc3BvbnNlIiwicmVzIiwiZGF0YSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsIlNlcnZlclVuaXQiLCJwYXJhbSIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsInF1ZXJ5IiwiZ2V0VW5yZWFkTWVzc2FnZVVzZXJMaXN0IiwicmVsYXRlVWlkIiwiY29udGVudCIsImZpbGVuYW1lIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIlNlcnZlciIsIlZpZXdVbml0Q2xhc3MiLCJjbGFzc19uYW1lIiwiRWxlbWVudCIsImNvbnRhaW5zIiwicGFyZW50QnlDbGFzcyIsInBhcmVudEVsZW1lbnQiLCJWaWV3VW5pdCIsIkNoYXRSZWNvcmRMaXN0IiwibWVzc2FnZV9saXN0Iiwic2VuZF9tZXNzYWdlX2lkIiwidmlldyIsIk1hcCIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwibXNnIiwiTWVzc2FnZU1hcCIsImhhcyIsImN1cl91c2VyX2luZm8iLCJmcm9tVWlkIiwibWVzc2FnZV9lbGUiLCJnZXRFbGVtZW50Iiwic3RhdHVzIiwic2V0IiwiYXBwZW5kQ2hpbGQiLCJtZXNzYWdlX2lkIiwiZ2V0IiwicmVtb3ZlIiwicmVxdWlyZSIsIlNlbmRNZXNzYWdlIiwidGV4dF9pbnB1dCIsImJ1dHRvbiIsInNlbmRfdGV4dCIsInNlbmRfaW1hZ2UiLCJiaW5kTGlzdGVuZXIiLCJhbHJlYWR5IiwicXVlcnlTZWxlY3RvciIsInRoYXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsInRleHQiLCJ2YWx1ZSIsIm5vdGlmeUxpc3RlbmVyIiwiY3JlYXRlZF90aW1lIiwibm93IiwiZmlsZSIsImZpbGVzIiwidGVzdCIsImV2ZW50X25hbWUiLCJjYWxsYmFjayIsIm9uIiwiQ2hhdFJvb20iLCJzZW5kTWVzc2FnZSIsImZhc3RNZXNzYWdlTGlzdCIsIkZhc3RNZXNzYWdlTGlzdCIsInVzZXJQcm9maWxlIiwiVXNlclByb2ZpbGUiLCJjdXJDaGF0UmVjb3JkTGlzdCIsImFwcGVuZFJlY29yZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImRlZmF1bHRfYXZhdGFyIiwic2V0TGlzdGVuZXIiLCJhcHBlbmRSZWNvcmRUb0xpc3QiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoaWRlIiwicHJvZmlsZSIsIlVzZXJQcm9maWxlTWFwIiwidXBkYXRlUHJvZmlsZSIsInVzZXIiLCJ1cGRhdGVDdXJVc2VyUHJvZmlsZSIsIlJlY29yZExpc3RNYXAiLCJsaXN0IiwiaW5zZXJ0QmVmb3JlIiwicmV2ZXJzZSIsInNob3ciLCJ0ZXh0X2xpc3QiLCJpbWFnZV9saXN0Iiwic2VsZWN0X21lc3NhZ2UiLCJwdXNoIiwidGFyZ2V0IiwiaW5uZXJUZXh0IiwiZ2V0QXR0cmlidXRlIiwiYXJyIiwibGlzdEhUTUwiLCJqb2luIiwiZmFzdFRleHRMaXN0IiwiZmFzdEltYWdlTGlzdCIsInNlcmlhbF9udW1iZXIiLCJVc2VyV3JhcCIsImlucHV0IiwiYmFkZ2UiLCJsYXN0X21lc3NhZ2UiLCJjaGFuZ2UiLCJzZWxlY3RlZCIsImlzX2NoZWNrZWQiLCJjaGVja2VkIiwiVXNlckxpc3QiLCJtb3JlX2xpc3Rfd3JhcCIsIm1vcmVfbGlzdCIsImNoYW5nZWRfdXNlciIsIm1vcmVMaXN0ZW5lciIsInRpbWVyIiwiZmxhZyIsImNsZWFyVGltZW91dCIsInNldEludGVydmFsIiwiY3VyIiwiVXNlck1hcCIsInVzZXJfd3JhcCIsInVwZGF0ZUJhZGdlIiwidW5SZWFkQ291bnQiLCJ1cGRhdGVMYXN0TWVzc2FnZSIsInVwZGF0ZWRfdGltZSIsInNpemUiLCJpbmZvIiwiZGlhbW9uZCIsImNyZWF0ZWRBdCIsImluZm9fZWxlIiwicmVuZGVyVXNlclByb2ZpbGVIVE1MIiwiVmlldyIsImFsZXJ0IiwidXNlcl9saXN0X2FyciIsIlRoZVBhZ2UiLCJwYXJlbnQiLCJwYXJlbnRfY3NzU2VsZWN0b3IiLCJ1c2VyX2xpc3QiLCJwYWdlX3Zpc2libGUiLCJ1c2VyTGlzdCIsImNoYXRSb29tIiwiZ2V0TWVzc2FnZVVzZXJMaXN0Iiwic3RhcnRNZXNzYWdlVXNlckxpc3RUaW1lciIsImFwcGVuZFVzZXIiLCJVc2VySW5mb01hcCIsInVzcCIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2VjIiwiZHVyYXRpb24iLCJub3RpZnlVc2VyQ2hhbmVkIiwidmlzaWJsZSIsInZpc2liaWxpdHlTdGF0ZSIsInRoZVBhZ2UiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxRDtBQUN0QztBQUNmLGlDQUFpQyw2REFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFD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LFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUNaO0FBQ0EsV0FBS1gsUUFBTCxDQUFjbEUsV0FBZCxDQUEwQixjQUExQixFQUEwQyxVQUFDN0UsS0FBRCxFQUFXO0FBQUEsWUFDN0MrRyxVQUQ2QyxHQUN4Qi9HLEtBRHdCLENBQzdDK0csVUFENkM7QUFBQSxZQUNqQzFCLElBRGlDLEdBQ3hCckYsS0FEd0IsQ0FDakNxRixJQURpQztBQUVuRCxZQUFJMEIsVUFBSixFQUFnQixNQUFJLENBQUNpQyxRQUFMLENBQWNXLGdCQUFkLENBQWdDdEUsSUFBaEM7QUFDakIsT0FIRCxFQUZZLENBTVo7O0FBQ0EsV0FBSzBELFFBQUwsQ0FBY2xFLFdBQWQsQ0FBMEIsV0FBMUIsRUFBc0MsWUFBTTtBQUMxQyxjQUFJLENBQUNvRSxrQkFBTCxDQUF3QixNQUFJLENBQUM1TSxNQUFMLENBQVk0RCxPQUFaLENBQW9CNEksU0FBcEIsRUFBeEI7QUFDRCxPQUZELEVBUFksQ0FVWjs7QUFDQXZNLGNBQVEsQ0FBQzZHLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELFlBQUl5RyxPQUFPLEdBQUd0TixRQUFRLENBQUN1TixlQUF2QjtBQUNBLGNBQUksQ0FBQ3hOLE1BQUwsQ0FBWXlNLFlBQVosTUFBK0JjLE9BQU8sS0FBSyxTQUEzQztBQUNELE9BSEQ7QUFJRDs7Ozs7O0FBR0gsSUFBTUUsT0FBTyxHQUFHLElBQUlwQixPQUFKLEVBQWhCO0FBQ0FxQixNQUFNLENBQUNELE9BQVAsR0FBaUJBLE9BQWpCLEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBhY3Rpb24pIHtcbiAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIFwiICsgYWN0aW9uICsgXCIgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJnZXRcIik7XG4gIHJldHVybiBjbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCA/IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIDogJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3REYXRhKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5JywgJ3BhcmFtcyddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd0aW1lb3V0TWVzc2FnZScsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICdtYXhCb2R5TGVuZ3RoJywgJ21heFJlZGlyZWN0cycsICd0cmFuc3BvcnQnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJywgJ3Jlc3BvbnNlRW5jb2RpbmcnXG4gIF07XG4gIHZhciBkaXJlY3RNZXJnZUtleXMgPSBbJ3ZhbGlkYXRlU3RhdHVzJ107XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpXG4gICAgLmNvbmNhdChkaXJlY3RNZXJnZUtleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcxKVxuICAgIC5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiAodHlwZW9mIHBheWxvYWQgPT09ICdvYmplY3QnKSAmJiAocGF5bG9hZC5pc0F4aW9zRXJyb3IgPT09IHRydWUpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59O1xuIiwiaW1wb3J0IHsgRGF0ZVVuaXQgfSBmcm9tICcuLi91bml0L0RhdGVVbml0LmpzJztcclxuXHJcbmNsYXNzIE1lc3NhZ2Uge1xyXG4gIC8qKkB0eXBlIHsgTnVtYmVyIH0gKi9cclxuICBpZDtcclxuICAvKipAdHlwZSB7IE51bWJlciB9ICovXHJcbiAgdGltZXN0YW1wO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi9cclxuICBtZXNzYWdlXHJcbiAgLyoqQHR5cGUgeyBOdW1iZXIgfSAqL1xyXG4gIG1lc3NhZ2VUeXBlO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi9cclxuICBmcm9tVWlkO1xyXG4gIFxyXG4gIC8qKkB0eXBlIHsgeyBpc19zZWxmOiBCb29sZWFuLCBhdmF0YXI6IGF2YXRhciB9IH0gKi9cclxuICB1c2VyX2luZm8gPSB7XHJcbiAgICBpc19zZWxmOiBudWxsLFxyXG4gICAgYXZhdGFyOiBudWxsXHJcbiAgfVxyXG5cclxuICAjY29uZmlnID0ge1xyXG4gICAgLyoqQHR5cGUgeyBIVE1MRWxlbWVudCB9ICovXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBjbGFzc0xpc3Q6IFsnY2hhdC1yZWNvcmQnXVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gdGltZXN0YW1wIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbWVzc2FnZVR5cGUgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIG1lc3NhZ2Vfb2JqLCB1c2VyX2luZm8gPSB7fSl7XHJcbiAgICBpZiAobWVzc2FnZV9vYmogJiYgdHlwZW9mIG1lc3NhZ2Vfb2JqID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBsZXQgeyBpZCwgdGltZXN0YW1wLCBtZXNzYWdlLCBtZXNzYWdlVHlwZSB9ID0gbWVzc2FnZV9vYmo7XHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgIHRoaXMubWVzc2FnZVR5cGUgPSBtZXNzYWdlVHlwZTtcclxuICAgIH1cclxuICAgIHRoaXMudXNlcl9pbmZvID0gdXNlcl9pbmZvO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBTdHJpbmd9IG1lc3NhZ2UgXHJcbiAgICogQHBhcmFtIHsgMCB8IDEgfCAyIHwgNHwgMTN9IHR5cGUgXHJcbiAgICovXHJcbiAgcmVuZGVyTWVzc2FnZUNvbnRlbnQoIG1lc3NhZ2UsIHR5cGUgPSAwKXtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICByZXN1bHQgPSBgPHAgY2xhc3M9XCJjb250ZW50IHRleHRcIj4ke21lc3NhZ2V9PC9wPmA7XHJcbiAgICAgIH07IGJyZWFrO1xyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICByZXN1bHQgPSBgPGltZyBjbGFzcz1cImNvbnRlbnQgaW1hZ2VcIiBzcmM9XCIke21lc3NhZ2V9XCIgLz5gO1xyXG4gICAgICB9OyBicmVhaztcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHJlc3VsdCA9IGA8cCBzdHlsZT1cImNvbG9yOiByZWQ7XCIgY2xhc3M9XCJjb250ZW50IHRleHRcIj4ke21lc3NhZ2V9PC9wPmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpbml0Vmlldygpe1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuI2NvbmZpZztcclxuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgaWYodGhpcy51c2VyX2luZm8uaXNfc2VsZikgZWxlLmNsYXNzTGlzdC5hZGQoJ3NlbGYnKTtcclxuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ21lc3NhZ2UtaWQnLCB0aGlzLmlkKTtcclxuICAgIGVsZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLXdyYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ib3ggc3F1YXJlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhciBubzFcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLnVzZXJfaW5mby5hdmF0YXJ9XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXdyYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICA8cCBjbGFzcz1cIml0ZW1cIj4ke0RhdGVVbml0LmZvcm1hdCh0aGlzLnRpbWVzdGFtcCl9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaXRlbVwiPiBNZXNzYWdlVHlwZTogJHt0aGlzLm1lc3NhZ2VUeXBlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlICR7dGhpcy5tZXNzYWdlVHlwZSA9PT0gMTMgPyAndmlkZW8tY2FsbCcgOiAnJ31cIj5cclxuICAgICAgICAke3RoaXMucmVuZGVyTWVzc2FnZUNvbnRlbnQodGhpcy5tZXNzYWdlLCB0aGlzLm1lc3NhZ2VUeXBlKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbmZpZy5lbGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIE1lc3NhZ2VcclxufSIsImNsYXNzIFVzZXJJbmZvIHtcclxuICAvKipAdHlwZSB7IFN0cmluZyB9ICovIGlkO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi8gdWlkO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi8gbmlja25hbWU7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBhdmF0YXI7XHJcbiAgLyoqQHR5cGUgeyBOdW1iZXIgfSAqLyBnZW5kZXI7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBhZ2U7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBsYXN0TWVzc2FnZTtcclxuICAvKipAdHlwZSB7IE51bWJlciB9ICovIHVwZGF0ZUJhZGdlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgdWlkLCBuaWNrbmFtZSwgYXZhdGFyLCBnZW5kZXIsIGFnZSwgbGFzdE1lc3NhZ2Upe1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy51aWQgPSB1aWQ7XHJcbiAgICB0aGlzLm5pY2tuYW1lID0gbmlja25hbWU7XHJcbiAgICB0aGlzLmF2YXRhciA9IGF2YXRhcjtcclxuICAgIHRoaXMuZ2VuZGVyID0gZ2VuZGVyO1xyXG4gICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICB0aGlzLmxhc3RNZXNzYWdlID0gbGFzdE1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFVzZXJJbmZvXHJcbn0iLCJsZXQgRGVmYXVsdENvbmZpZyA9IHtcclxuICBiYXNlVVJMOiAnaHR0cHM6Ly90LmxpdmVodWIuY2xvdWQnLFxyXG4gIGF2YXRhcjogJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9saXZlaHViLXh5ei9MaXZldHViZV91bmRlZmluZWRfMjAyMTAzMjUwNjQxMTRfY292ZXIucG5nJ1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIERlZmF1bHRDb25maWdcclxufSIsImNsYXNzIERhdGVVbml0Q2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgZGVmYXVsdF9mb3JtYXRfc3RyID0gJ3l5eXktTU0tZGQgSEg6bW06c3M6bXMnXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7IERhdGUgfCBOdW1iZXIgfSBkYXRlX29iaiBcclxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSBmb3JtYXRfc3RyIFxyXG4gICAqIEBwYXJhbSB7ICdkYXRlJyB8ICd0aW1lJyB8ICdkYXRldGltZScgfSB0eXBlIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGZvcm1hdCggZGF0ZV9vYmosIGZvcm1hdF9zdHIsIHR5cGUpe1xyXG4gICAgaWYgKCF0eXBlICYmICFmb3JtYXRfc3RyKSBmb3JtYXRfc3RyID0gXCJ5eXl5LU1NLWRkIEhIOm1tOnNzOm1zXCI7XHJcbiAgICBlbHNlIGlmIChcImRhdGVcIiA9PT0gdHlwZSkgZm9ybWF0X3N0ciA9IFwieXl5eS1NTS1kZFwiO1xyXG4gICAgZWxzZSBpZiAoXCJ0aW1lXCIgPT09IHR5cGUpIGZvcm1hdF9zdHIgPSBcIkhIOm1tOnNzXCI7XHJcbiAgICBlbHNlIGlmIChcImRhdGV0aW1lXCIgPT09IHR5cGUpIGZvcm1hdF9zdHIgPSBcInl5eXktTU0tZGQgSEg6bW06c3NcIjtcclxuICAgIGlmICghZGF0ZV9vYmopIGRhdGVfb2JqID0gbmV3IERhdGUoKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlX29iaiA9PT0gJ251bWJlcicpIGRhdGVfb2JqID0gbmV3IERhdGUoZGF0ZV9vYmopO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZV9vYmouZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgZGF5ID0gZGF0ZV9vYmouZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IGhvdXJzID0gZGF0ZV9vYmouZ2V0SG91cnMoKTtcclxuICAgIGxldCBtaW51dGVzID0gZGF0ZV9vYmouZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBkYXRlX29iai5nZXRTZWNvbmRzKCk7XHJcbiAgICBmb3JtYXRfc3RyID0gZm9ybWF0X3N0ci5yZXBsYWNlKFwieXl5eVwiLCBkYXRlX29iai5nZXRGdWxsWWVhcigpKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJNTVwiLCBgJHttb250aCA+IDkgPyBcIlwiIDogMH0ke21vbnRofWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcImRkXCIsIGAke2RheSA+IDkgPyBcIlwiIDogMH0ke2RheX1gKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJISFwiLCBgJHtob3VycyA+IDkgPyBcIlwiIDogMH0ke2hvdXJzfWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcIm1tXCIsIGAke21pbnV0ZXMgPiA5ID8gXCJcIiA6IDB9JHttaW51dGVzfWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcInNzXCIsIGAke3NlY29uZHMgPiA5ID8gXCJcIiA6IDB9JHtzZWNvbmRzfWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcIm1zXCIsIGRhdGVfb2JqLmdldE1pbGxpc2Vjb25kcygpKTtcclxuICAgIHJldHVybiBmb3JtYXRfc3RyO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRGF0ZVVuaXQgPSBuZXcgRGF0ZVVuaXRDbGFzcygpO1xyXG5cclxuZXhwb3J0IHtcclxuICBEYXRlVW5pdFxyXG59IiwiY2xhc3MgT2JqZWN0VW5pdENsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gIH1cclxuXHJcbiAgaXNOdWxsKCBvYmogKSB7XHJcbiAgICBpZiAoICFvYmogfHwgb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzT2JqZWN0KCBvYmogKSB7XHJcbiAgICBpZiAoIHRoaXMuaXNOdWxsKG9iaikgKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIHR5cGVvZiBvYmogIT09ICdvYmplY3QnICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5T2JqZWN0KCBvYmogKSB7XHJcbiAgICBpZiAoICF0aGlzLmlzT2JqZWN0KG9iaikgKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID4gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpc05vRW1wdHlPYmplY3QoIG9iaiApIHtcclxuICAgIGlmICggIXRoaXMuaXNPYmplY3Qob2JqKSApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICggT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPCAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyKCBudW0gKSB7XHJcbiAgICBpZiAoIFN0cmluZyhudW0pID09PSAnTmFOJyApIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiAoIHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcclxuICB9XHJcblxyXG4gIGlzU3RyaW5nKCBzdHIgKSB7XHJcbiAgICByZXR1cm4gKCB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyApO1xyXG4gIH1cclxuICBpc0VtcHR5U3RyaW5nKCBzdHIgKSB7XHJcbiAgICBpZiAoIHRoaXMuaXNOdWxsKHN0cikgKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmICggIXRoaXMuaXNTdHJpbmcoc3RyKSApIHJldHVybiB0cnVlO1xyXG4gICAgaWYgKCBzdHIudHJpbSgpLmxlbmd0aCA8IDEgKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaXNOb0VtcHR5U3RyaW5nKCBzdHIgKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNFbXB0eVN0cmluZyhzdHIpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgT2JqZWN0VW5pdCA9IG5ldyBPYmplY3RVbml0Q2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgT2JqZWN0VW5pdFxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2JlYW4vTWVzc2FnZS5qcyc7XHJcbi8vIGltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vYmVhbi9Vc2VySW5mby5qcyc7XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgeyBQcm9taXNlPHsgc3RhdHVzOiAwIHwgNDEzIHwgMjAwMSwgZGF0YTogeyB9fT4gfVxyXG4gKi9cclxubGV0IEJhc2VSZXNwb25zZVR5cGU7XHJcblxyXG5jb25zdCBpc190ZXN0ID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBiYXNlVVJMOiBpc190ZXN0ID8gJ2h0dHBzOi8vdC5saXZlaHViLmNsb3VkJyA6ICdodHRwczovL3QubGl2ZWh1Yi5jbG91ZCcsXHJcbiAgbm9fc2VuZF9tc2c6IGZhbHNlLFxyXG59XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gY29uZmlnLmJhc2VVUkw7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydhdXRob3JpemF0aW9uJ10gPSBcIndncmRnNzgzODZhXCI7XHJcbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBsZXQgcmVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQXhpb3NSZXNwb3NuZSA9PiBcIiwgcmVzKTtcclxuICAgIC8vIGlmKHJlcy5zdGF0dXMgPT09IDQxMyl7XHJcbiAgICAvLyAgICAgaGFuZGxlU3RhdHVzNDEzKCk7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYocmVzLnN0YXR1cyA9PT0gMCkgcmVzLnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHJlcztcclxufSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuXHJcbmNsYXNzIFNlcnZlclVuaXQge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5raI5oGv5YiX6KGoXHJcbiAgICogQHBhcmFtIHsge1wicXVlcnlcIjp7fSxcInBhZ2VTaXplXCI6MjAsXCJwYWdlTnVtXCI6MX0gfSBwYXJhbSBcclxuICAgKiBAcmV0dXJucyB7IFByb21pc2U8eyBzdGF0dXM6IE51bWJlciwgZGF0YTogVXNlckluZm9bXX0+IH1cclxuICAgKi9cclxuICBnZXRNZXNzYWdlVXNlckxpc3QoIHBhcmFtID0ge1wicXVlcnlcIjp7fSxcInBhZ2VTaXplXCI6MjAsXCJwYWdlTnVtXCI6MX0gKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpMi9tZXNzYWdlL3VzZXIvbGlzdC8nLCBwYXJhbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bmnKror7vmtojmga/liJfooahcclxuICAgKiBAcGFyYW0geyBOdW1iZXIgfSBwYWdlTnVtIFxyXG4gICAqIEBwYXJhbSB7IE51bWJlciB9IHBhZ2VTaXplIFxyXG4gICAqIEBwYXJhbSB7IE51bWJlciB9IHR5cGUgXHJcbiAgICogQHJldHVybnMgeyBCYXNlUmVzcG9uc2VUeXBlIH1cclxuICAgKi9cclxuICBnZXRVbnJlYWRNZXNzYWdlVXNlckxpc3QoIHBhZ2VOdW0gPSAxLCBwYWdlU2l6ZSA9IDIwLCB0eXBlID0gMiApIHtcclxuICAgIGxldCBwYXJhbSA9IHtxdWVyeToge3R5cGV9LCBwYWdlU2l6ZSwgcGFnZU51bSB9O1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkyL2N1c3RvbWVyL21zZy9saXN0JywgcGFyYW0pO1xyXG4gIH1cclxuICBnZXRBbHJlYWR5UmVhZE1lc3NhZ2VVc2VyTGlzdCggcGFnZU51bSA9IDEsIHBhZ2VTaXplID0gMjAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRVbnJlYWRNZXNzYWdlVXNlckxpc3QoIHBhZ2VOdW0sIHBhZ2VTaXplLCAzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluWSjOeUqOaIt+WvueivneivpuaDheWIl+ihqFxyXG4gICAqIEBwYXJhbSB7IHtcInF1ZXJ5XCI6e1wicmVsYXRlVWlkXCI6MzkwMTYwNDA1MzA3Mzk2OX0sXCJwYWdlU2l6ZVwiOjIwLFwicGFnZU51bVwiOjF9IH0gcGFyYW0gXHJcbiAgICogQHJldHVybnMgeyBQcm9taXNlPHsgc3RhdHVzOiBOdW1iZXIsIGRhdGE6IE1lc3NhZ2VbXX0+IH1cclxuICAgKi9cclxuICBnZXRVc2VyTWVzc2FnZURldGFpbCggcGFyYW0gPSB7XCJxdWVyeVwiOntcInJlbGF0ZVVpZFwiOjM5MDE2MDQwNTMwNzM5Njl9LFwicGFnZVNpemVcIjoyMCxcInBhZ2VOdW1cIjoxfSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaTIvbWVzc2FnZS91c2VyL2RldGFpbC8nLCBwYXJhbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlj5HpgIHmtojmga/nu5nnlKjmiLdcclxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSByZWxhdGVVaWQgXHJcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0gY29udGVudCBcclxuICAgKiBAcGFyYW0geyAwIHwgMSB8IDMgfSBtZXNzYWdlVHlwZSBcclxuICAgKiBAcmV0dXJucyB7IFByb21pc2U8eyBzdGF0dXM6IE51bWJlciwgbXNnOiBTdHJpbmd9PiB9XHJcbiAgICovXHJcbiAgc2VuZE1lc3NhZ2UocmVsYXRlVWlkLCBjb250ZW50LCBtZXNzYWdlVHlwZSA9IDApIHtcclxuICAgIGlmIChjb25maWcubm9fc2VuZF9tc2cpIHJldHVybjtcclxuICAgIGxldCBwYXJhbSA9IHsgcmVsYXRlVWlkLCBjb250ZW50LCBtZXNzYWdlVHlwZX07XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9tZXNzYWdlL3NlbmQvJywgcGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+R6YCB5aqS5L2T5raI5oGv57uZ55So5oi3XHJcbiAgICogQHBhcmFtIHsgRmlsZSB9IGZpbGVuYW1lIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHJlbGF0ZVVpZCBcclxuICAgKiBAcGFyYW0geyAxIHwgMiB8IDQgfSBtZXNzYWdlVHlwZSAtIDI6IOWbvueJh1xyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBtc2c6IFN0cmluZ30+IH1cclxuICAgKi9cclxuICBzZW5kTWVkaWFNZXNzYWdlKGZpbGVuYW1lLCByZWxhdGVVaWQsIG1lc3NhZ2VUeXBlKSB7XHJcbiAgICBpZiAoY29uZmlnLm5vX3NlbmRfbXNnKSByZXR1cm47XHJcbiAgICBsZXQgcGFyYW0gPSB7IGZpbGVuYW1lLCByZWxhdGVVaWQsIG1lc3NhZ2VUeXBlfTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VwbG9hZE1lZGlhLycsIHBhcmFtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlueUqOaIt+S4quS6uui1hOaWmVxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHVpZFxyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBkYXRhOiB7IHVpZDogU3RyaW5nLCBjcmVhdGVkQXQ6IFN0cmluZywgZGlhbW9uZDogTnVtYmVyfX0+IH1cclxuICAgKi9cclxuICBnZXRVc2VyUHJvZmlsZSggdWlkICl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91c2VyL2luZm8vJywgeyByZWxhdGVVaWQ6IHVpZCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeZu+W9lVxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHVzZXJuYW1lIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHBhc3N3b3JkIFxyXG4gICAqIEByZXR1cm5zIHsgQmFzZVJlc3BvbnNlVHlwZSB9XHJcbiAgICovXHJcbiAgbG9naW4oIHVzZXJuYW1lLCBwYXNzd29yZCApe1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTZXJ2ZXIgPSBuZXcgU2VydmVyVW5pdCgpO1xyXG5cclxuZXhwb3J0IHtcclxuICBTZXJ2ZXJcclxufSIsIlxyXG5jbGFzcyBWaWV3VW5pdENsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7IEVsZW1lbnQgfSBlbGUgXHJcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0gY2xhc3NfbmFtZSBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwYXJlbnRCeUNsYXNzKGVsZSwgY2xhc3NfbmFtZSkge1xyXG4gICAgaWYgKCFlbGUgfHwgIWVsZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBlbGU7XHJcbiAgICBpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc19uYW1lKSkgcmV0dXJuIGVsZTtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEJ5Q2xhc3MoZWxlLnBhcmVudEVsZW1lbnQsIGNsYXNzX25hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVmlld1VuaXQgPSBuZXcgVmlld1VuaXRDbGFzcygpO1xyXG5cclxuZXhwb3J0IHtcclxuICBWaWV3VW5pdFxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL01lc3NhZ2UuanMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2NvbW1vbic7XHJcblxyXG5jbGFzcyBDaGF0UmVjb3JkTGlzdCB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgY2xhc3NMaXN0OiBTdHJpbmdbXSxcclxuICAgKiAgbWVzc2FnZV9saXN0OiBNZXNzYWdlW10sXHJcbiAgICogIHNlbmRfbWVzc2FnZV9pZDogTnVtYmVyLFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgY2xhc3NMaXN0OiBbJ2NoYXQtcmVjb3JkLWxpc3QnXSxcclxuICAgIG1lc3NhZ2VfbGlzdDogW10sXHJcbiAgICBzZW5kX21lc3NhZ2VfaWQ6IDEwMDAwXHJcbiAgfVxyXG5cclxuICBhbHJlYWR5ID0ge1xyXG4gICAgaW5pdDoge1xyXG4gICAgICB2aWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGUgeyBNYXA8U3RyaW5nLCB7XHJcbiAgICogIHN0YXR1czogJ3BlbmRpbmcnIHwgJ2ZhaWxlZCcsICdzdWNjZXNzJyxcclxuICAgKiAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgKiAgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiB9fVxyXG4gICAqL1xyXG4gIE1lc3NhZ2VNYXAgPSBuZXcgTWFwKCk7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqL1xyXG4gIHVpZDtcclxuXHJcbiAgY29uc3RydWN0b3IoIHVpZCApe1xyXG4gICAgdGhpcy51aWQgPSB1aWQ7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGUuc2V0QXR0cmlidXRlKCd1aWQnLCB0aGlzLnVpZCk7XHJcbiAgICBlbGUuY2xhc3NMaXN0LmFkZCguLi5jb25maWcuY2xhc3NMaXN0KTtcclxuICAgIGNvbmZpZy5lbGUgPSBlbGU7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgTWVzc2FnZSB8IE1lc3NhZ2VbXSB9IG1lc3NhZ2UgXHJcbiAgICogQHBhcmFtIHsgeyBpc19zZWxmOiBCb29sZWFuLCBhdmF0YXI6IGF2YXRhciB9IH0gdXNlcl9pbmZvXHJcbiAgICovXHJcbiAgYXBwZW5kUmVjb3JkKCBtZXNzYWdlLCB1c2VyX2luZm8gKSB7XHJcbiAgICBpZiAodXNlcl9pbmZvLmlzX3NlbGYpIGNvbnNvbGUubG9nKGBzZW5kIG1lc3NhZ2UgdG86ICR7dGhpcy51aWR9OiBgLCBtZXNzYWdlKTtcclxuICAgIGNvbnNvbGUubG9nKCdhcHBlbmRSZWNvcmQ6ICcsIHsgbWVzc2FnZSwgdXNlcl9pbmZvIH0pO1xyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpIG1lc3NhZ2UgPSBbbWVzc2FnZV07XHJcbiAgICBtZXNzYWdlLmZvckVhY2goIG1zZyA9PiB7XHJcbiAgICAgIGlmICghbXNnLmlkKSBtc2cuaWQgPSB0aGlzLmNvbmZpZy5zZW5kX21lc3NhZ2VfaWQrKztcclxuICAgICAgaWYgKHRoaXMuTWVzc2FnZU1hcC5oYXMobXNnLmlkKSkgcmV0dXJuO1xyXG4gICAgICBsZXQgY3VyX3VzZXJfaW5mbyA9IHsgaXNfc2VsZjogZmFsc2UsIGF2YXRhcjogdXNlcl9pbmZvLmF2YXRhciB9O1xyXG4gICAgICBpZiAobXNnLmZyb21VaWQgIT09IHRoaXMudWlkKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ05vIHNhbWUgdWlkOiAnLCB7IGZyb206IG1lc3NhZ2UuZnJvbVVpZCwgc2VsZjogdGhpcy51aWR9KTtcclxuICAgICAgICBjdXJfdXNlcl9pbmZvLmlzX3NlbGYgPSB0cnVlO1xyXG4gICAgICAgIGN1cl91c2VyX2luZm8uYXZhdGFyID0gRGVmYXVsdENvbmZpZy5hdmF0YXI7XHJcbiAgICAgIH0gXHJcbiAgICAgIGxldCBtZXNzYWdlX2VsZSA9IG5ldyBNZXNzYWdlKCBtc2csIGN1cl91c2VyX2luZm8pO1xyXG4gICAgICBsZXQgZWxlID0gbWVzc2FnZV9lbGUuZ2V0RWxlbWVudCgpO1xyXG4gICAgICBsZXQgc3RhdHVzID0gY3VyX3VzZXJfaW5mby5pc19zZWxmID8gJ3BlbmRpbmcnIDogJ3N1Y2Nlc3MnXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKHN0YXR1cyk7XHJcbiAgICAgIHRoaXMuTWVzc2FnZU1hcC5zZXQobXNnLmlkLCB7IHN0YXR1czogJ3BlbmRpbmcnLCBtZXNzYWdlOiBtc2csIGVsZTogZWxlIH0pO1xyXG4gICAgICB0aGlzLmNvbmZpZy5lbGUuYXBwZW5kQ2hpbGQoZWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbWVzc2FnZV9pZCBcclxuICAgKiBAcGFyYW0geyAncGVuZGluZycgfCAnZmFpbGVkJywgJ3N1Y2Nlc3MnIH0gc3RhdHVzIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGNoYW5nZVJlY29yZFN0YXR1cyggbWVzc2FnZV9pZCwgc3RhdHVzICkge1xyXG4gICAgbGV0IG9iaiA9IHRoaXMuTWVzc2FnZU1hcC5nZXQobWVzc2FnZV9pZCk7XHJcbiAgICBsZXQgZWxlID0gb2JqICYmIG9iai5lbGU7XHJcbiAgICBpZiAoIWVsZSkgcmV0dXJuO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKXtcclxuICAgIHRoaXMuY29uZmlnLmVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlLWVsZScpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGhpZGUgJHt0aGlzLnVpZH06IGAsIHRoaXMuY29uZmlnKTtcclxuICB9XHJcbiAgc2hvdygpe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZWxlJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgc2hvdyAke3RoaXMudWlkfTogYCwgdGhpcy5jb25maWcpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBDaGF0UmVjb3JkTGlzdFxyXG59IiwiY29uc3QgeyBPYmplY3RVbml0IH0gPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2pzL3VuaXQvT2JqZWN0VW5pdFwiKTtcclxuXHJcbmNsYXNzIFNlbmRNZXNzYWdlIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7e1xyXG4gICAqICBpZDogU3RyaW5nLFxyXG4gICAqICBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqICBjbGFzc0xpc3Q6IFN0cmluZ1tdLFxyXG4gICAqICB0ZXh0X2lucHV0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgYnV0dG9uOiB7XHJcbiAgICogICAgc2VuZF90ZXh0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgICBzZW5kX2ltYWdlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgfVxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgaWQ6ICdzZW5kX21lc3NhZ2Vfd3JhcCcsXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBjbGFzc0xpc3Q6IFsnc2VuZC1tZXNzYWdlLXdyYXAnXSxcclxuICAgIHRleHRfaW5wdXQ6IG51bGwsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgc2VuZF90ZXh0OiBudWxsLFxyXG4gICAgICBzZW5kX2ltYWdlOiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbiA9IHtcclxuICAgIHNlbmRfdGV4dDogbnVsbCxcclxuICAgIHNlbmRfaW1hZ2U6IG51bGwsXHJcbiAgfVxyXG5cclxuICBhbHJlYWR5ID0ge1xyXG4gICAgaW5pdDoge1xyXG4gICAgICB2aWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1NlbmRNZXNzYWdlOiAnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAodGhpcy5hbHJlYWR5LmluaXQudmlldykgcmV0dXJuO1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uZmlnLmVsZSA9IGVsZTtcclxuICAgIGVsZS5pZCA9IGNvbmZpZy5pZDtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgZWxlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+XHJcbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRleHQtaW5wdXRcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXdyYXBcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZmlsZS1sYWJlbFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbiBjaG9vc2UtZmlsZVwiPkNob29zZSBJbWFnZTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBzZW5kLW1lc3NhZ2VcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy50ZXh0X2lucHV0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWlucHV0Jyk7XHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfdGV4dCA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuc2VuZC1tZXNzYWdlJyk7XHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfaW1hZ2UgPSBlbGUucXVlcnlTZWxlY3RvcignLmZpbGUtbGFiZWwgaW5wdXQnKTtcclxuICAgIHRoaXMuYWxyZWFkeS5pbml0LnZpZXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAvL1xyXG4gICAgY29uZmlnLnRleHRfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdrZXk6ICcsIGV2ZW50LmtleSk7XHJcbiAgICAgIGlmKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnZW50ZXInKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZW5kIHRleHQ6ICcsIHRleHQpO1xyXG4gICAgICAgIHRoYXQubm90aWZ5TGlzdGVuZXIoJ3NlbmRfdGV4dCcsIHtcclxuICAgICAgICAgIGNyZWF0ZWRfdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgIGRhdGE6IHRleHRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGF0LmNvbmZpZy50ZXh0X2lucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gXHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfdGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHRleHQgPSB0aGlzLmNvbmZpZy50ZXh0X2lucHV0LnZhbHVlO1xyXG4gICAgICBpZiAoT2JqZWN0VW5pdC5pc0VtcHR5U3RyaW5nKHRleHQpKSByZXR1cm47XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzZW5kIHRleHQ6ICcsIHRleHQpO1xyXG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVyKCdzZW5kX3RleHQnLCB7XHJcbiAgICAgICAgY3JlYXRlZF90aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGRhdGE6IHRleHRcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29uZmlnLnRleHRfaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gICAgLy8gXHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAvKipAdHlwZSB7IEZpbGUgfSAqL1xyXG4gICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlc1swXTtcclxuICAgICAgaWYgKCFmaWxlKSByZXR1cm47XHJcbiAgICAgIGlmICghL2ltYWdlLy50ZXN0KGZpbGUudHlwZSkpIHJldHVybjtcclxuICAgICAgY29uc29sZS5sb2coJ3NlbmQgaW1hZ2U6ICcsIGZpbGUpO1xyXG4gICAgICB0aGF0Lm5vdGlmeUxpc3RlbmVyKCdzZW5kX2ltYWdlJywge1xyXG4gICAgICAgIGNyZWF0ZWRfdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICBkYXRhOiBmaWxlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnc2VuZF90ZXh0JyB8ICdzZW5kX2ltYWdlJyB9IGV2ZW50X25hbWUgXHJcbiAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBjYWxsYmFjayBcclxuICAgKi9cclxuICBzZXRMaXN0ZW5lciggZXZlbnRfbmFtZSwgY2FsbGJhY2sgKXtcclxuICAgIHRoaXMub25bZXZlbnRfbmFtZV0gPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdzZW5kX3RleHQnIHwgJ3NlbmRfaW1hZ2UnIH0gZXZlbnRfbmFtZSBcclxuICAgKi9cclxuICBub3RpZnlMaXN0ZW5lciggZXZlbnRfbmFtZSwgcGFyYW0gKXtcclxuICAgIGxldCBjYWxsYmFjayA9IHRoaXMub25bZXZlbnRfbmFtZV07XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhwYXJhbSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFNlbmRNZXNzYWdlXHJcbn0iLCJpbXBvcnQgeyBTZW5kTWVzc2FnZSB9IGZyb20gJy4vU2VuZE1lc3NhZ2UuanMnO1xyXG5pbXBvcnQgeyBDaGF0UmVjb3JkTGlzdCB9IGZyb20gJy4vQ2hhdFJlY29yZExpc3QuanMnO1xyXG5pbXBvcnQgeyBGYXN0TWVzc2FnZUxpc3QgfSBmcm9tICcuLi9GYXN0TWVzc2FnZUxpc3QvJztcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL3VuaXQvU2VydmVyLmpzJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9jb21tb24nO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzJztcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tICcuLi9Vc2VyUHJvZmlsZSc7XHJcblxyXG5jbGFzcyBDaGF0Um9vbSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgaWQ6IFN0cmluZywgY2xhc3NMaXN0OiBTdHJpbmdbXSwgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiB9fVxyXG4gICAqL1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIGlkOiAnY2hhdF9yb29tJyxcclxuICAgIGNsYXNzTGlzdDogWydjaGF0LXJvb20nXSxcclxuICAgIGVsZTogbnVsbCxcclxuICB9XHJcblxyXG4gIGFscmVhZHkgPSB7XHJcbiAgICBpbml0OiB7XHJcbiAgICAgIHZpZXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIHtcclxuICAgKiAgaXNfYmluZF9saXN0ZW5lcjogQm9vbGVhbixcclxuICAgKiAgbGlzdDogQ2hhdFJlY29yZExpc3QsXHJcbiAgICogfT4gfVxyXG4gICAqL1xyXG4gIFJlY29yZExpc3RNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIOS/neWtmOaJgOacieeUqOaIt+S4quS6uuS/oeaBr++8jFxyXG4gICAqIEB0eXBlIHsgTWFwPFN0cmluZywge30gfVxyXG4gICAqL1xyXG4gIFVzZXJQcm9maWxlTWFwID0gbmV3IE1hcCgpO1xyXG5cclxuXHJcbiAgLyoqQHR5cGUgeyBDaGF0UmVjb3JkTGlzdCB9ICovXHJcbiAgY3VyQ2hhdFJlY29yZExpc3Q7IC8vIOW9k+WJjeiBiuWkqeiusOW9leWIl+ihqFxyXG4gIC8qKkB0eXBlIHsgU2VuZE1lc3NhZ2UgfSAqL1xyXG4gIHNlbmRNZXNzYWdlO1xyXG4gIC8qKkB0eXBlIHsgRmFzdE1lc3NhZ2VMaXN0IH0gKi9cclxuICBmYXN0TWVzc2FnZUxpc3Q7XHJcbiAgLyoqQHR5cGUgeyBVc2VyUHJvZmlsZSB9ICovXHJcbiAgdXNlclByb2ZpbGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlID0gbmV3IFNlbmRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLmZhc3RNZXNzYWdlTGlzdCA9IG5ldyBGYXN0TWVzc2FnZUxpc3QoKTtcclxuICAgIHRoaXMudXNlclByb2ZpbGUgPSBuZXcgVXNlclByb2ZpbGUoKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgdGhpcy5iaW5kTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAodGhpcy5hbHJlYWR5LmluaXQudmlldyA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5jb25maWcuY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuY29uZmlnLmVsZSA9IGVsZTtcclxuICAgIGVsZS5hcHBlbmRDaGlsZCh0aGlzLnVzZXJQcm9maWxlLmdldEVsZW1lbnQoKSk7XHJcbiAgICBlbGUuYXBwZW5kQ2hpbGQodGhpcy5mYXN0TWVzc2FnZUxpc3QuZ2V0RWxlbWVudCgpKTtcclxuICAgIGVsZS5hcHBlbmRDaGlsZCh0aGlzLnNlbmRNZXNzYWdlLmdldEVsZW1lbnQoKSk7XHJcbiAgICB0aGlzLmFscmVhZHkuaW5pdC52aWV3ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFwcGVuZFJlY29yZFRvTGlzdChtZXNzYWdlLCB1c2VyX2luZm8pe1xyXG4gICAgaWYgKCF0aGlzLmN1ckNoYXRSZWNvcmRMaXN0KSByZXR1cm47XHJcbiAgICB0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LmFwcGVuZFJlY29yZChtZXNzYWdlLCB1c2VyX2luZm8pO1xyXG4gICAgdGhpcy5jdXJDaGF0UmVjb3JkTGlzdC5nZXRFbGVtZW50KCkuc2Nyb2xsVG9wID0gdGhpcy5jdXJDaGF0UmVjb3JkTGlzdC5nZXRFbGVtZW50KCkuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICBsZXQgZGVmYXVsdF9hdmF0YXIgPSBEZWZhdWx0Q29uZmlnLmF2YXRhcjtcclxuICAgIFxyXG4gICAgdGhpcy5zZW5kTWVzc2FnZS5zZXRMaXN0ZW5lcignc2VuZF90ZXh0JywgKHBhcmFtKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5jdXJDaGF0UmVjb3JkTGlzdD8udWlkKSByZXR1cm47XHJcbiAgICAgIFNlcnZlci5zZW5kTWVzc2FnZSh0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LnVpZCwgcGFyYW0uZGF0YSwgMCk7XHJcbiAgICAgIHRoaXMuYXBwZW5kUmVjb3JkVG9MaXN0KHtcclxuICAgICAgICB0aW1lc3RhbXA6IHBhcmFtLmNyZWF0ZWRfdGltZSxcclxuICAgICAgICBtZXNzYWdlOiBwYXJhbS5kYXRhLFxyXG4gICAgICAgIG1lc3NhZ2VUeXBlOiAwLFxyXG4gICAgICB9LCB7IGlzX3NlbGY6IHRydWUsIGF2YXRhcjogZGVmYXVsdF9hdmF0YXJ9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZW5kTWVzc2FnZS5zZXRMaXN0ZW5lcignc2VuZF9pbWFnZScsIChwYXJhbSkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuY3VyQ2hhdFJlY29yZExpc3Q/LnVpZCkgcmV0dXJuO1xyXG4gICAgICBTZXJ2ZXIuc2VuZE1lZGlhTWVzc2FnZShwYXJhbS5kYXRhLCB0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LnVpZCwgMik7XHJcbiAgICAgIHRoaXMuYXBwZW5kUmVjb3JkVG9MaXN0KHtcclxuICAgICAgICB0aW1lc3RhbXA6IHBhcmFtLmNyZWF0ZWRfdGltZSxcclxuICAgICAgICBtZXNzYWdlOiBVUkwuY3JlYXRlT2JqZWN0VVJMKHBhcmFtLmRhdGEpLFxyXG4gICAgICAgIG1lc3NhZ2VUeXBlOiAyXHJcbiAgICAgIH0sIHsgaXNfc2VsZjogdHJ1ZSwgYXZhdGFyOiBkZWZhdWx0X2F2YXRhcn0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBmYXN0IG1lc3NhZ2UgbGlzdFxyXG4gICAgdGhpcy5mYXN0TWVzc2FnZUxpc3Quc2V0TGlzdGVuZXIoJ3NlbGVjdF9tZXNzYWdlJywgKHBhcmFtKSA9PiB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZWRfdGltZSwgZGF0YSwgdHlwZSB9ID0gcGFyYW07XHJcbiAgICAgIFNlcnZlci5zZW5kTWVzc2FnZSh0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LnVpZCwgZGF0YSwgdHlwZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kUmVjb3JkVG9MaXN0KHtcclxuICAgICAgICB0aW1lc3RhbXA6IGNyZWF0ZWRfdGltZSxcclxuICAgICAgICBtZXNzYWdlOiBkYXRhLFxyXG4gICAgICAgIG1lc3NhZ2VUeXBlOiB0eXBlXHJcbiAgICAgIH0sIHsgaXNfc2VsZjogdHJ1ZSwgYXZhdGFyOiBkZWZhdWx0X2F2YXRhcn0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWxlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlQ3VyVXNlclByb2ZpbGUoIHVpZCApIHtcclxuICAgIHRoaXMudXNlclByb2ZpbGUuaGlkZSgpO1xyXG4gICAgbGV0IHByb2ZpbGUgPSB0aGlzLlVzZXJQcm9maWxlTWFwLmdldCh1aWQpO1xyXG4gICAgaWYgKCFwcm9maWxlKSB7XHJcbiAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IFNlcnZlci5nZXRVc2VyUHJvZmlsZSh1aWQpO1xyXG4gICAgICBwcm9maWxlID0gZGF0YTtcclxuICAgICAgdGhpcy5Vc2VyUHJvZmlsZU1hcC5zZXQodWlkLCBwcm9maWxlKTtcclxuICAgIH1cclxuICAgIHRoaXMudXNlclByb2ZpbGUudXBkYXRlUHJvZmlsZShwcm9maWxlIHx8IHt9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7IFVzZXJJbmZvIH0gdXNlciBcclxuICAgKi9cclxuICBhc3luYyBub3RpZnlVc2VyQ2hhbmVkKCB1c2VyICkge1xyXG4gICAgdGhpcy51cGRhdGVDdXJVc2VyUHJvZmlsZSh1c2VyLnVpZCk7XHJcbiAgICBjb25zb2xlLmxvZygnbm90aWZ5VXNlckNoYW5lZDogJywgdXNlcik7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybjtcclxuICAgIGxldCB7IHVpZCwgYXZhdGFyIH0gPSB1c2VyO1xyXG4gICAgdGhpcy5jdXJDaGF0UmVjb3JkTGlzdD8uaGlkZSgpO1xyXG4gICAgbGV0IGN1ckNoYXRSZWNvcmRMaXN0ID0gdGhpcy5SZWNvcmRMaXN0TWFwLmdldCh1aWQpPy5saXN0O1xyXG4gICAgaWYoICFjdXJDaGF0UmVjb3JkTGlzdCApIHtcclxuICAgICAgY3VyQ2hhdFJlY29yZExpc3QgPSBuZXcgQ2hhdFJlY29yZExpc3QodWlkKTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmluc2VydEJlZm9yZShjdXJDaGF0UmVjb3JkTGlzdC5nZXRFbGVtZW50KCksIHRoaXMuZmFzdE1lc3NhZ2VMaXN0LmdldEVsZW1lbnQoKSk7XHJcbiAgICAgIHRoaXMuUmVjb3JkTGlzdE1hcC5zZXQodWlkLCB7XHJcbiAgICAgICAgbGlzdDogY3VyQ2hhdFJlY29yZExpc3RcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCB7IHN0YXR1cywgZGF0YSB9ID0gYXdhaXQgU2VydmVyLmdldFVzZXJNZXNzYWdlRGV0YWlsKHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgcmVsYXRlVWlkOiB1aWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2VTaXplOiAyMCwgXHJcbiAgICAgICAgcGFnZU51bTogMVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCB8fCAhQXJyYXkuaXNBcnJheShkYXRhKSkgcmV0dXJuO1xyXG4gICAgICBkYXRhLnJldmVyc2UoKTtcclxuICAgICAgY3VyQ2hhdFJlY29yZExpc3QuYXBwZW5kUmVjb3JkKGRhdGEsIHtcclxuICAgICAgICBpc19zZWxmOiBmYWxzZSwgYXZhdGFyOiBhdmF0YXJcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlIGRldGFpbDogJywgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKiog54K55Ye75a+56K+d55u05o6l5Yi35pawICovXHJcbiAgICAvLyBsZXQgeyBzdGF0dXMsIGRhdGEgfSA9IGF3YWl0IFNlcnZlci5nZXRVc2VyTWVzc2FnZURldGFpbCh7XHJcbiAgICAvLyAgIHF1ZXJ5OiB7XHJcbiAgICAvLyAgICAgcmVsYXRlVWlkOiB1aWRcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgcGFnZVNpemU6IDIwLCBcclxuICAgIC8vICAgcGFnZU51bTogMVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBpZiAoc3RhdHVzICE9PSAwIHx8ICFBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm47XHJcbiAgICAvLyBkYXRhLnJldmVyc2UoKTtcclxuICAgIC8vIGN1ckNoYXRSZWNvcmRMaXN0LmFwcGVuZFJlY29yZChkYXRhLCB7XHJcbiAgICAvLyAgIGlzX3NlbGY6IGZhbHNlLCBhdmF0YXI6IGF2YXRhclxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnbWVzc2FnZSBkZXRhaWw6ICcsIGRhdGEpO1xyXG4gICAgLyoqICAqL1xyXG5cclxuICAgIHRoaXMuUmVjb3JkTGlzdE1hcC5mb3JFYWNoKCBvYmogPT4ge1xyXG4gICAgICBpZiAob2JqLmxpc3QudWlkICE9PSB1aWQpIG9iai5saXN0LmhpZGUoKTtcclxuICAgICAgZWxzZSBjb25zb2xlLmxvZygnU2FtZSBVSUQsIGJyZWFrLicpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY3VyQ2hhdFJlY29yZExpc3QgPSBjdXJDaGF0UmVjb3JkTGlzdDtcclxuICAgIGN1ckNoYXRSZWNvcmRMaXN0LnNob3coKTtcclxuICAgIGN1ckNoYXRSZWNvcmRMaXN0LmdldEVsZW1lbnQoKS5zY3JvbGxUb3AgPSBjdXJDaGF0UmVjb3JkTGlzdC5nZXRFbGVtZW50KCkuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBDaGF0Um9vbVxyXG59IiwiaW1wb3J0IHsgVmlld1VuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9WaWV3VW5pdC5qcyc7XHJcblxyXG5jbGFzcyBGYXN0TWVzc2FnZUxpc3Qge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHt7XHJcbiAgICogIGlkOiBTdHJpbmcsIGNsYXNzTGlzdDogU3RyaW5nW10sIGVsZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIHRleHRfbGlzdDogSFRNTEVsZW1lbnQsIGltYWdlX2xpc3Q6IEhUTUxFbGVtZW50XHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBpZDogJ2Zhc3RfbWVzc2FnZV9saXN0X3dyYXAnLFxyXG4gICAgY2xhc3NMaXN0OiBbJ2Zhc3QtbWVzc2FnZS1saXN0LXdyYXAnXSxcclxuICAgIGVsZTogbnVsbCxcclxuICAgIHRleHRfbGlzdDogbnVsbCxcclxuICAgIGltYWdlX2xpc3Q6IG51bGwsXHJcbiAgfVxyXG5cclxuICBvbiA9IHtcclxuICAgIHNlbGVjdF9tZXNzYWdlOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NMaXN0KXtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB0aGlzLmNvbmZpZy5pZCA9IGlkO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkgdGhpcy5jb25maWcuY2xhc3NMaXN0LnB1c2goLi4uY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgdGhpcy5iaW5kTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIGJpbmRMaXN0ZW5lcigpe1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhpcy5jb25maWcudGV4dF9saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICB0aGF0Lm5vdGlmeUxpc3RlbmVyKCdzZWxlY3RfbWVzc2FnZScsIHtcclxuICAgICAgICBjcmVhdGVkX3RpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICBkYXRhOiB0YXJnZXQuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgdHlwZTogMFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb25maWcuaW1hZ2VfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgaWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0nKSkgcmV0dXJuO1xyXG4gICAgICB0aGF0Lm5vdGlmeUxpc3RlbmVyKCdzZWxlY3RfbWVzc2FnZScsIHtcclxuICAgICAgICBjcmVhdGVkX3RpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICBkYXRhOiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdzcmMnKSxcclxuICAgICAgICAgIHR5cGU6IDJcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZhc3RUZXh0TGlzdCgpe1xyXG4gICAgbGV0IGFyciA9IFtcclxuICAgICAgJ0hlbGxvIHRoZXJlLCBob3cgbWF5IEkgaGVscCB5b3U/JyxcclxuICAgICAgYEhlbGxvIHRoZXJlLCBwbGVhc2UgbGV0IG1lIGtub3cgaWYgeW91IGhhdmUgYW55IHByb2JsZW1zIHdoaWxlIHVzaW5nIHRoZSBhcHAuIEkgYW0gYWx3YXlzIGhlcmUgdG8gaGVscC4gOilcclxuXHJcbiAgICAgIEJlc3QsXHJcbiAgICAgIEVtaWx5YCxcclxuICAgICAgJ1RoYW5rcy4nLFxyXG4gICAgICAnUGxlYXNlIHRyeSB0byByZWZyZXNoIHlvdXIgV2FsbGV0IHBhZ2UuIElmIHlvdSBzdGlsbCBjYW5ub3Qgc2VlIHRoZSBiYWxhbmNlLCBwbGVhc2UgcHJvdmlkZSB0aGUgcHVyY2hhc2luZyByZWNvcmQgc2NyZWVuc2hvdCBmb3Igb3VyIHJlZmVyZW5jZS4nLFxyXG4gICAgICAnWW91ciBhY2NvdW50IHdvdWxkIGJlIGRlbGV0ZWQgaW4gMTAgbWludXRlcy4gUGxlYXNlIGRvIG5vdCBsb2dpbiBhZ2FpbiwgeW91ciBhY2NvdW50IHdvdWxkIGJlIHJlYWN0aXZhdGVkLicsXHJcbiAgICAgICdBbGwgb3VyIHVzZXJzIGFyZSB2ZXJpZmllZC4gSWYgeW91IHRoaW5rIHNvbWVvbmUgaXMgZmFrZSwgeW91IGNvdWxkIG1ha2UgYSByZXBvcnQuIFlvdSBtYXkgY2xpY2sgdGhlIGJ1dHRvbiBvbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciB0byBibG9jayBhIHNwZWNpZmljIHBlcnNvbiBhbmQgaGUvc2hlIHdvdWxkIG5vdCBzaG93IG9uIHlvdXIgcHJvZmlsZSBhbnltb3JlLicsXHJcbiAgICAgICdZb3UgbWF5IHN3aXBlIHRvIG1hdGNoIHdpdGggdGhlIHBlcnNvbiB5b3UgbGlrZSBhbmQgdGhlbiBzZW5kIHRoZW0gbWVzc2FnZXMgZm9yIGZyZWUuIFlvdSBjb3VsZCBldmVuIHZpZGVvIGNhbGwgdGhlbSBwcml2YXRlbHkuIEhvcGUgeW91IGVuam95IGl0IScsXHJcbiAgICAgICdTb3JyeSBpdCBpcyBub3QgbG9jYXRpb24gYmFzZWQgYXBwLCB3ZSBwcm92aWRlIHdvcmR3aWRlIHVzZXJzIGZvciBtYXRjaGluZy4nLFxyXG4gICAgICBgU29ycnksIEkgbSBoZXJlIHRvIHdvcmsgc29sdmluZyB1c2VycycgcHJvYmxlbXMgb25seSA6KWAsXHJcbiAgICAgICdZb3UgbWF5IGJ1eSBkaWFtb25kcyBpbiB0aGUgd2FsbGV0LicsXHJcbiAgICAgIGBIZWxsbywgSSBhbSBFbWlseSwgYW55dGhpbmcgSSBjYW4gaGVscD9cclxuXHJcbiAgICAgIDopYCxcclxuICAgIF07XHJcbiAgICBsZXQgbGlzdEhUTUwgPSBbXTtcclxuICAgIGFyci5mb3JFYWNoKCB0ZXh0ID0+IHtcclxuICAgICAgbGlzdEhUTUwucHVzaChgPHAgY2xhc3M9XCJpdGVtXCI+JHt0ZXh0fTwvcD5gKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3RIVE1MLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgZmFzdEltYWdlTGlzdCgpe1xyXG4gICAgbGV0IGFyciA9IFtcclxuICAgICAgJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9saXZlaHViLXh5ei9MaXZldHViZV91bmRlZmluZWRfMjAyMTAzMjUxMDQ5NTVfY292ZXIuanBlZycsXHJcbiAgICAgICdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbGl2ZWh1Yi14eXovTGl2ZXR1YmVfdW5kZWZpbmVkXzIwMjEwMzI2MDIwNzQyX2NvdmVyLmpwZWcnLFxyXG4gICAgICAnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2xpdmVodWIteHl6L0xpdmV0dWJlX3VuZGVmaW5lZF8yMDIxMDMyNjAyMDg0Nl9jb3Zlci5qcGVnJyxcclxuICAgICAgJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9saXZlaHViLXh5ei9MaXZldHViZV91bmRlZmluZWRfMjAyMTAzMjYwMjA5MTdfY292ZXIuanBlZydcclxuICAgIF07XHJcbiAgICBsZXQgbGlzdEhUTUwgPSBbXTtcclxuICAgIGFyci5mb3JFYWNoKCB0ZXh0ID0+IHtcclxuICAgICAgbGlzdEhUTUwucHVzaChgXHJcbiAgICAgIDxpbWcgY2xhc3M9XCJpdGVtXCIgc3JjPVwiJHt0ZXh0fVwiIC8+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJwcmV2aWV3XCIgc3JjPVwiJHt0ZXh0fVwiIC8+XHJcbiAgICAgIGApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGlzdEhUTUwuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBpbml0Vmlldygpe1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IGVsZSA9IGNvbmZpZy5lbGU7XHJcbiAgICBpZiAoZWxlKSByZXR1cm47XHJcbiAgICBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5pZCA9IGNvbmZpZy5pZDtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgY29uZmlnLmVsZSA9IGVsZTtcclxuICAgIGVsZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXQgY2hlY2tlZD1cInRydWVcIiBpZD1cImZhc3RfbWVzc2FnZV9saXN0X3N3aXRjaF9pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIiBmb3I9XCJmYXN0X21lc3NhZ2VfbGlzdF9zd2l0Y2hfaW5wdXRcIj5cclxuICAgICAgPHA+PC9wPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJmYXN0LW1lc3NhZ2UtbGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1saXN0XCI+XHJcbiAgICAgICAgJHt0aGlzLmZhc3RUZXh0TGlzdCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWxpc3RcIj5cclxuICAgICAgICAke3RoaXMuZmFzdEltYWdlTGlzdCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy50ZXh0X2xpc3QgPSBlbGUucXVlcnlTZWxlY3RvcignLnRleHQtbGlzdCcpO1xyXG4gICAgY29uZmlnLmltYWdlX2xpc3QgPSBlbGUucXVlcnlTZWxlY3RvcignLmltYWdlLWxpc3QnKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnc2VsZWN0X21lc3NhZ2UnIH0gZXZlbnRfbmFtZSBcclxuICAgKiBAcGFyYW0geyBGdW5jdGlvbih7IGNyZWF0ZWRfdGltZTogTnVtYmVyLCBkYXRhOiBTdHJpbmcsIHR5cGU6ICd0ZXh0JyB8ICdpbWFnZScgfSkgfSBjYWxsYmFjayBcclxuICAgKi9cclxuICBzZXRMaXN0ZW5lciggZXZlbnRfbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICB0aGlzLm9uW2V2ZW50X25hbWVdID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdzZWxlY3RfbWVzc2FnZScgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IHsgY3JlYXRlZF90aW1lOiBOdW1iZXIsIGRhdGE6IFN0cmluZywgdHlwZTogJ3RleHQnIHwgJ2ltYWdlJyB9IH0gcGFyYW0gXHJcbiAgICovXHJcbiAgbm90aWZ5TGlzdGVuZXIoIGV2ZW50X25hbWUsIHBhcmFtICkge1xyXG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5vbltldmVudF9uYW1lXTtcclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKHBhcmFtKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgRmFzdE1lc3NhZ2VMaXN0XHJcbn0iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi4vVmlldyc7XHJcbmltcG9ydCB7IE9iamVjdFVuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9PYmplY3RVbml0LmpzJztcclxuXHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2JlYW4vVXNlckluZm8uanMnO1xyXG5cclxudmFyIHNlcmlhbF9udW1iZXIgPSAxO1xyXG5cclxuY2xhc3MgVXNlcldyYXAge1xyXG4gIC8qKkB0eXBlIHsgVXNlckluZm8gfSAqL1xyXG4gIHVzZXI7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgY2xhc3NMaXN0OiBTdHJpbmdbXSxcclxuICAgKiAgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgaW5wdXQ6IEhUTUxFbGVtZW50LFxyXG4gICAqICBiYWRnZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIGxhc3RfbWVzc2FnZTogSFRNTEVsZW1lbnQsXHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBjbGFzc0xpc3Q6IFsndXNlci13cmFwJ10sXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBpbnB1dDogbnVsbCxcclxuICAgIGJhZGdlOiBudWxsLFxyXG4gICAgbGFzdF9tZXNzYWdlOiBudWxsXHJcbiAgfVxyXG5cclxuICBvbiA9IHtcclxuICAgIGNoYW5nZTogbnVsbCxcclxuICAgIHNlbGVjdGVkOiBudWxsLFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgVXNlckluZm8gfSB1c2VyIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCB1c2VyICl7XHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgIHRoaXMuYmluZExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpbml0Vmlldygpe1xyXG4gICAgaWYgKE9iamVjdFVuaXQuaXNFbXB0eU9iamVjdCh0aGlzLnVzZXIpKSByZXR1cm47XHJcbiAgICAvLyBjb25zb2xlLmxvZygnVXNlcldyYXAuaW5pdFZpZXc6ICcsIHsgdXNlcjogdGhpcy51c2VyLCBjb25maWc6IHRoaXMuY29uZmlnfSk7XHJcbiAgICBsZXQgdXNlciA9IHRoaXMudXNlcjtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIGxldCBlbGUgPSBjb25maWcuZWxlO1xyXG4gICAgaWYgKCBlbGUgKSByZXR1cm47XHJcbiAgICBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBlbGUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IHVpZD1cIiR7dXNlci51aWR9XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxpc3QtdXNlclwiID5cclxuICAgIDxkaXYgY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXJpYWxcIj4ke3NlcmlhbF9udW1iZXIrK308L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ib3ggc3F1YXJlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyIG5vMVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7dXNlci5hdmF0YXJ9XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhZGdlIG5vMlwiPsK3PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS13cmFwXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwibmFtZVwiPiR7dXNlci5uaWNrbmFtZX08L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGFzdC1tZXNzYWdlXCI+JHt1c2VyLmxhc3RNZXNzYWdlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gICAgY29uZmlnLmJhZGdlID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZScpO1xyXG4gICAgY29uZmlnLmlucHV0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICBjb25maWcubGFzdF9tZXNzYWdlID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LW1lc3NhZ2UnKTtcclxuICB9XHJcblxyXG4gIGJpbmRMaXN0ZW5lcigpe1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhpcy5jb25maWcuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IGlzX2NoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XHJcbiAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICBpc19jaGVja2VkLFxyXG4gICAgICAgIHVpZDogdGhhdC51c2VyLnVpZFxyXG4gICAgICB9XHJcbiAgICAgIHRoYXQubm90aWZ5TGlzdGVuZXIoJ2NoYW5nZScsIHBhcmFtKTtcclxuICAgICAgdGhhdC5ub3RpZnlMaXN0ZW5lcignc2VsZWN0ZWQnLCBwYXJhbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgJ2NoYW5nZScgfCAnc2VsZWN0ZWQnIH0gZXZlbnRfbmFtZSBcclxuICAgKiBAcGFyYW0geyBGdW5jdGlvbih7IGlzX2NoZWNrZWQ6IEJvb2xlYW4sIHVpZDogU3RyaW5nIH0pIH0gY2FsbGJhY2sgXHJcbiAgICovXHJcbiAgc2V0TGlzdGVuZXIoIGV2ZW50X25hbWUsIGNhbGxiYWNrICkge1xyXG4gICAgdGhpcy5vbltldmVudF9uYW1lXSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnY2hhbmdlJyB8ICdzZWxlY3RlZCcgfSBldmVudF9uYW1lXHJcbiAgICogQHBhcmFtIHsgeyBpc19jaGVja2VkOiBCb29sZWFuLCB1aWQ6IFN0cmluZyB9IH0gcGFyYW1cclxuICAgKi9cclxuICBub3RpZnlMaXN0ZW5lciggZXZlbnRfbmFtZSwgcGFyYW0gKSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm9uW2V2ZW50X25hbWVdO1xyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2socGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tlZCgpe1xyXG4gICAgdGhpcy5jb25maWcuaW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVCYWRnZSggbnVtICkge1xyXG4gICAgbGV0IGJhZGdlID0gdGhpcy5jb25maWcuYmFkZ2U7XHJcbiAgICBpZiAoIG51bSA+IDApIHtcclxuICAgICAgYmFkZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1lbGUnKTtcclxuICAgICAgYmFkZ2UuaW5uZXJUZXh0ID0gbnVtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFkZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZS1lbGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUxhc3RNZXNzYWdlKCBtZXNzYWdlICkge1xyXG4gICAgdGhpcy5jb25maWcubGFzdF9tZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFVzZXJXcmFwXHJcbn0iLCJpbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzJztcclxuaW1wb3J0IHsgVXNlcldyYXAgfSBmcm9tICcuL1VzZXJXcmFwLmpzJztcclxuaW1wb3J0IHsgT2JqZWN0VW5pdCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy91bml0L09iamVjdFVuaXQuanMnO1xyXG5cclxuY2xhc3MgVXNlckxpc3Qge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHt7XHJcbiAgICogIGlkOiBTdHJpbmcsIGNsYXNzTGlzdDogU3RyaW5nW10sIGVsZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIG1vcmVfbGlzdF93cmFwOiBIVE1MRWxlbWVudCwgbW9yZV9saXN0OiBIVE1MRWxlbWVudFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgaWQ6ICd1c2VyX2xpc3QnLFxyXG4gICAgY2xhc3NMaXN0OiBbJ3VzZXItbGlzdCddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgbW9yZV9saXN0X3dyYXA6IG51bGwsXHJcbiAgICBtb3JlX2xpc3Q6IG51bGxcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHR5cGUgeyBNYXA8U3RyaW5nLCB7XHJcbiAgICogIGNyZWF0ZWRfdGltZTogTnVtYmVyLFxyXG4gICAqICB1cGRhdGVkX3RpbWU6IE51bWJlcixcclxuICAgKiAgdXNlcjogVXNlckluZm8sXHJcbiAgICogIHVzZXJfd3JhcDogVXNlcldyYXAsXHJcbiAgICogfT4gfVxyXG4gICAqL1xyXG4gIFVzZXJNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIG9uID0ge1xyXG4gICAgY2hhbmdlZF91c2VyOiBudWxsLFxyXG4gICAgbW9yZV9saXN0OiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NMaXN0KXtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB0aGlzLmNvbmZpZy5pZCA9IGlkO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkgdGhpcy5jb25maWcuY2xhc3NMaXN0LnB1c2goLi4uY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgdGhpcy5iaW5kTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gY29uZmlnLmVsZTtcclxuICAgIGlmIChlbGUpIHJldHVybjtcclxuICAgIGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmlkID0gY29uZmlnLmlkO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gICAgZWxlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWxpc3Qtd3JhcFwiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9yZS1saXN0XCI+bW9yZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgY29uZmlnLm1vcmVfbGlzdF93cmFwID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLWxpc3Qtd3JhcCcpO1xyXG4gICAgY29uZmlnLm1vcmVfbGlzdCA9IGVsZS5xdWVyeVNlbGVjdG9yKCcubW9yZS1saXN0Jyk7XHJcbiAgfVxyXG5cclxuICBiaW5kTGlzdGVuZXIoKXtcclxuICAgIC8vIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBtb3JlTGlzdGVuZXIgPSAoKCkgPT4ge1xyXG4gICAgICBsZXQgdGltZXI7XHJcbiAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBpZiAoIWZsYWcpIHJldHVybjtcclxuICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcignbW9yZV9saXN0Jyk7XHJcbiAgICAgICAgaWYodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIHRoaXMuY29uZmlnLm1vcmVfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIG1vcmVMaXN0ZW5lcih0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgLy8gbGV0IHNjcm9sbF90aW1lciA9IG51bGw7XHJcbiAgICAvLyBsZXQgY2FuX3Njcm9sbCA9IHRydWU7XHJcbiAgICAvLyB0aGlzLmNvbmZpZy5lbGUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgaWYgKCFjYW5fc2Nyb2xsKSByZXR1cm47XHJcbiAgICAvLyAgIGNhbl9zY3JvbGwgPSBmYWxzZTtcclxuICAgIC8vICAgbGV0IGNsaWVudEhlaWdodCA9IHRoaXMuY2xpZW50SGVpZ2h0O1xyXG4gICAgLy8gICBsZXQgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5zY3JvbGxIZWlnaHQ7XHJcbiAgICAvLyAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ1VzZXJMaXN0IFNjcm9sbDogJywgeyBjbGllbnRIZWlnaHQsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0fSk7XHJcbiAgICAvLyAgIGlmIChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgKyA1ID49IHNjcm9sbEhlaWdodCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IFNjcm9sbCBUbyBCb3R0b20uJyk7XHJcbiAgICAvLyAgIH0gZWxzZSBjb25zb2xlLmxvZygnTm8gU2Nyb2xsIFRvIEJvdHRvbS4nKTtcclxuICAgIC8vICAgc2Nyb2xsX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgY2FuX3Njcm9sbCA9IHRydWU7XHJcbiAgICAvLyAgIH0sIDUwMCk7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBVc2VySW5mbyB9IHVzZXIgXHJcbiAgICovXHJcbiAgYXBwZW5kVXNlciggdXNlciApIHtcclxuICAgIGlmIChPYmplY3RVbml0LmlzRW1wdHlPYmplY3QodXNlcikpIHJldHVybjtcclxuICAgIGxldCBjdXIgPSB0aGlzLlVzZXJNYXAuZ2V0KHVzZXIudWlkKTtcclxuICAgIGlmICghY3VyKSB7XHJcbiAgICAgIGN1ciA9IHtcclxuICAgICAgICBjcmVhdGVkX3RpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgdXNlcjogdXNlclxyXG4gICAgICB9XHJcbiAgICAgIGN1ci51c2VyX3dyYXAgPSAgbmV3IFVzZXJXcmFwKHVzZXIpO1xyXG4gICAgICBjdXIudXNlcl93cmFwLnNldExpc3RlbmVyKCdzZWxlY3RlZCcsIChwYXJhbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuVXNlck1hcC5nZXQodXNlci51aWQpLnVzZXJfd3JhcC51cGRhdGVCYWRnZSgwKTtcclxuICAgICAgICBpZiAoIXBhcmFtLmlzX2NoZWNrZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVyKCdjaGFuZ2VkX3VzZXInLCB7XHJcbiAgICAgICAgICBpc19jaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgdXNlcjogdXNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmluc2VydEJlZm9yZShjdXIudXNlcl93cmFwLmdldEVsZW1lbnQoKSwgdGhpcy5jb25maWcubW9yZV9saXN0X3dyYXApO1xyXG4gICAgICB0aGlzLlVzZXJNYXAuc2V0KHVzZXIudWlkLCBjdXIpO1xyXG4gICAgfVxyXG4gICAgY3VyLnVzZXJfd3JhcC51cGRhdGVCYWRnZSh1c2VyLnVuUmVhZENvdW50KTtcclxuICAgIGN1ci51c2VyX3dyYXAudXBkYXRlTGFzdE1lc3NhZ2UodXNlci5sYXN0TWVzc2FnZSk7XHJcbiAgICBjdXIudXBkYXRlZF90aW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGN1ci51c2VyID0gdXNlcjtcclxuICAgIGlmICh0aGlzLlVzZXJNYXAuc2l6ZSA9PT0gMSkge1xyXG4gICAgICBjdXIudXNlcl93cmFwLmNoZWNrZWQoKTtcclxuICAgICAgY3VyLnVzZXJfd3JhcC51cGRhdGVCYWRnZSgwKTtcclxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcignY2hhbmdlZF91c2VyJywgeyBpc19jaGVja2VkOiB0cnVlLCB1c2VyOiBjdXIudXNlciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdjaGFuZ2VkX3VzZXInIHwgJ21vcmVfbGlzdCcgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IEZ1bmN0aW9uKHsgaXNfY2hlY2tlZDogQm9vbGVhbiwgdWlkOiBTdHJpbmcgfSkgfSBjYWxsYmFjayBcclxuICAgKi9cclxuICBzZXRMaXN0ZW5lciggZXZlbnRfbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICB0aGlzLm9uW2V2ZW50X25hbWVdID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdjaGFuZ2VkX3VzZXInIHwgJ21vcmVfbGlzdCcgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IEZ1bmN0aW9uKHsgaXNfY2hlY2tlZDogQm9vbGVhbiwgdXNlcjogVXNlckluZm8gfSkgfSBwYXJhbSBcclxuICAgKi9cclxuICBub3RpZnlMaXN0ZW5lciggZXZlbnRfbmFtZSwgcGFyYW0gKSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm9uW2V2ZW50X25hbWVdO1xyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2socGFyYW0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VyTGlzdFxyXG59IiwiaW1wb3J0IHsgVmlld1VuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9WaWV3VW5pdC5qcyc7XHJcblxyXG5jbGFzcyBVc2VyUHJvZmlsZSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgaWQ6IFN0cmluZywgY2xhc3NMaXN0OiBTdHJpbmdbXSwgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgdGV4dF9saXN0OiBIVE1MRWxlbWVudCwgaW1hZ2VfbGlzdDogSFRNTEVsZW1lbnQsXHJcbiAgICogIGluZm86IHtcclxuICAgKiAgICB1aWQ6IEhUTUxFbGVtZW50LCBkaWFtb25kOiBIVE1MRWxlbWVudCwgY3JlYXRlZEF0OiBIVE1MRWxlbWVudFxyXG4gICAqICB9XHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBpZDogJ3VzZXJfcHJvZmlsZV93cmFwJyxcclxuICAgIGNsYXNzTGlzdDogWyd1c2VyLXByb2ZpbGUtd3JhcCcsICdoaWRlLWVsZSddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgaW5mbzoge1xyXG4gICAgICB1aWQ6IG51bGwsXHJcbiAgICAgIGRpYW1vbmQ6IG51bGwsXHJcbiAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICBjcmVhdGVkQXQ6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NMaXN0KXtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB0aGlzLmNvbmZpZy5pZCA9IGlkO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkgdGhpcy5jb25maWcuY2xhc3NMaXN0LnB1c2goLi4uY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVXNlclByb2ZpbGVIVE1MKCl7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb25maWcuaW5mbykge1xyXG4gICAgICBsZXQgaW5mb19lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIGluZm9fZWxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nLCBrZXkpO1xyXG4gICAgICB0aGlzLmNvbmZpZy5pbmZvW2tleV0gPSBpbmZvX2VsZTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmFwcGVuZENoaWxkKGluZm9fZWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gY29uZmlnLmVsZTtcclxuICAgIGlmIChlbGUpIHJldHVybjtcclxuICAgIGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmlkID0gY29uZmlnLmlkO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gICAgdGhpcy5yZW5kZXJVc2VyUHJvZmlsZUhUTUwoKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyB7IHVpZDogU3RyaW5nLCBjcmVhdGVkQXQ6IFN0cmluZywgZGlhbW9uZDogTnVtYmVyfSB9IHByb2ZpbGUgXHJcbiAgICovXHJcbiAgdXBkYXRlUHJvZmlsZSggcHJvZmlsZSApe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZWxlJyk7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb25maWcuaW5mbykge1xyXG4gICAgICB0aGlzLmNvbmZpZy5pbmZvW2tleV0uaW5uZXJIVE1MID0gYDxzcGFuPiR7a2V5fTwvc3Bhbj46IDxiPiR7cHJvZmlsZVtrZXldfTwvYj5gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZWxlJyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VyUHJvZmlsZVxyXG59IiwiY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqL1xyXG4gIGluaXQoKXt9XHJcblxyXG4gIC8qKkBhYnN0cmFjdCAqL1xyXG4gIGluaXRWaWV3KCl7fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBWaWV3XHJcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpZiAodHlwZW9mIFByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcclxuICBhbGVydCgnWW91ciBCcm93c2VyIE5vdCBTdXBwb3J0IFByb21pc2UuJylcclxufVxyXG5cclxuaW1wb3J0IHsgVXNlckxpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXJMaXN0JztcclxuaW1wb3J0IHsgQ2hhdFJvb20gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXRSb29tJztcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL3VuaXQvU2VydmVyJztcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tICcuLi8uLi9hc3NldHMvanMvYmVhbi9Vc2VySW5mbyc7XHJcbi8vIGltcG9ydCB7IE9iamVjdFVuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9PYmplY3RVbml0JztcclxuXHJcbmNvbnN0IHVzZXJfbGlzdF9hcnIgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEwMDAxLFxyXG4gICAgdWlkOiAxMjM0NSxcclxuICAgIG5pY2tuYW1lOiAnSmFjayBNYScsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL3N3LmNvb2wzYy5jb20vdXNlci85OTU4OC8yMDE4LzdmOGJiMjYwLTk0M2MtNGI5ZC1iNThiLTRlZDc4MmM4NzYxYS5qcGcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTAwMDIsXHJcbiAgICB1aWQ6IDEyMzQ2LFxyXG4gICAgbmlja25hbWU6ICdQb255IE1hJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vc3cuY29vbDNjLmNvbS91c2VyLzk5NTg4LzIwMTgvN2Y4YmIyNjAtOTQzYy00YjlkLWI1OGItNGVkNzgyYzg3NjFhLmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDAwMyxcclxuICAgIHVpZDogMTIzNDcsXHJcbiAgICBuaWNrbmFtZTogJ1dhbmcgSmlhbmxpbicsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL3N3LmNvb2wzYy5jb20vdXNlci85OTU4OC8yMDE4LzdmOGJiMjYwLTk0M2MtNGI5ZC1iNThiLTRlZDc4MmM4NzYxYS5qcGcnXHJcbiAgfVxyXG5dXHJcblxyXG5jbGFzcyBUaGVQYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICAvKipAdHlwZSB7IEhUTUxFbGVtZW50IH0gKi9cclxuICAgIGVsZTogbnVsbCxcclxuICAgIC8qKkB0eXBlIHsgSFRNTEVsZW1lbnQgfSAqL1xyXG4gICAgcGFyZW50OiBudWxsLFxyXG4gICAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqL1xyXG4gICAgcGFyZW50X2Nzc1NlbGVjdG9yOiAnI2NoYXRfYmxvY2snLFxyXG4gICAgLy8g5Yqg6L296Iez56ys5Yeg6aG15pyq6K+75raI5oGv55So5oi35YiX6KGoXHJcbiAgICBwYWdlTnVtOiB7XHJcbiAgICAgIHVzZXJfbGlzdDogMlxyXG4gICAgfSxcclxuICAgIC8vIOmhtemdouaYr+WQpuWPr+ingVxyXG4gICAgcGFnZV92aXNpYmxlOiB0cnVlXHJcbiAgfVxyXG5cclxuICBhbHJlYWR5ID0ge1xyXG4gICAgaW5pdDoge1xyXG4gICAgICB2aWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipAdHlwZSB7IFVzZXJMaXN0IH0gKi9cclxuICB1c2VyTGlzdDtcclxuICAvKipAdHlwZSB7IENoYXRSb29tIH0gKi9cclxuICBjaGF0Um9vbTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy51c2VyTGlzdCA9IG5ldyBVc2VyTGlzdCgpO1xyXG4gICAgdGhpcy5jaGF0Um9vbSA9IG5ldyBDaGF0Um9vbSgpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIFVzZXJJbmZvPiB9XHJcbiAgICovXHJcbiAgVXNlckluZm9NYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgIHRoaXMuZ2V0TWVzc2FnZVVzZXJMaXN0KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5zdGFydE1lc3NhZ2VVc2VyTGlzdFRpbWVyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAoIHRoaXMuYWxyZWFkeS5pbml0LnZpZXcgKSByZXR1cm47XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucGFyZW50X2Nzc1NlbGVjdG9yKTtcclxuICAgIGNvbmZpZy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy51c2VyTGlzdC5nZXRFbGVtZW50KCkpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY2hhdFJvb20uZ2V0RWxlbWVudCgpKTtcclxuICAgIHRoaXMuYWxyZWFkeS5pbml0LnZpZXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0TWVzc2FnZVVzZXJMaXN0KCBwYWdlTnVtID0gMSApe1xyXG4gICAgbGV0IHsgc3RhdHVzLCBkYXRhIH0gPSBhd2FpdCBTZXJ2ZXIuZ2V0VW5yZWFkTWVzc2FnZVVzZXJMaXN0KHBhZ2VOdW0pO1xyXG4gICAgaWYgKHN0YXR1cyAhPT0gMCkgcmV0dXJuO1xyXG4gICAgY29uc29sZS5sb2coJ2dldE1lc3NhZ2VVc2VyTGlzdDogJywgZGF0YSk7XHJcbiAgICBkYXRhLmZvckVhY2goIHVzZXIgPT4ge1xyXG4gICAgICB1c2VyLnVpZCA9IHVzZXIucmVsYXRlVWlkO1xyXG4gICAgICB0aGlzLnVzZXJMaXN0LmFwcGVuZFVzZXIodXNlcik7XHJcbiAgICAgIHRoaXMuVXNlckluZm9NYXAuc2V0KHVzZXIudWlkLCB1c2VyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRNZXNzYWdlVXNlckxpc3RUaW1lcigpe1xyXG4gICAgbGV0IHVzcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcclxuICAgIGlmICh1c3AuZ2V0KCd0aW1lcicpID09PSAnb24nKSB7XHJcbiAgICAgIGxldCBzZWMgPSB+fnVzcC5nZXQoJ3NlYycpO1xyXG4gICAgICBsZXQgZHVyYXRpb24gPSBzZWMgPiAxNSA/IHNlYyAqIDEwMDAgOiAxNTAwMDtcclxuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0IFRpbWVyOiAnLCB7IGR1cmF0aW9uIH0pO1xyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRNZXNzYWdlVXNlckxpc3QoKTtcclxuICAgICAgfSwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICAvLyDliIfmjaLogYrlpKnnlKjmiLdcclxuICAgIHRoaXMudXNlckxpc3Quc2V0TGlzdGVuZXIoJ2NoYW5nZWRfdXNlcicsIChwYXJhbSkgPT4ge1xyXG4gICAgICBsZXQgeyBpc19jaGVja2VkLCB1c2VyIH0gPSBwYXJhbTtcclxuICAgICAgaWYgKGlzX2NoZWNrZWQpIHRoaXMuY2hhdFJvb20ubm90aWZ5VXNlckNoYW5lZCggdXNlciApO1xyXG4gICAgfSk7XHJcbiAgICAvLyDmm7TlpJrmnKror7vmtojmga/nlKjmiLfliJfooahcclxuICAgIHRoaXMudXNlckxpc3Quc2V0TGlzdGVuZXIoJ21vcmVfbGlzdCcsKCkgPT4ge1xyXG4gICAgICB0aGlzLmdldE1lc3NhZ2VVc2VyTGlzdCh0aGlzLmNvbmZpZy5wYWdlTnVtLnVzZXJfbGlzdCsrKTtcclxuICAgIH0pO1xyXG4gICAgLy8g5qOA5rWL6aG16Z2i5piv5ZCm5Y+v6KeBXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBsZXQgdmlzaWJsZSA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZTtcclxuICAgICAgdGhpcy5jb25maWcucGFnZV92aXNpYmxlID09PSAoIHZpc2libGUgPT09IFwidmlzaWJsZVwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdGhlUGFnZSA9IG5ldyBUaGVQYWdlKCk7XHJcbndpbmRvdy50aGVQYWdlID0gdGhlUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9