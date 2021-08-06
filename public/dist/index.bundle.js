/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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








var _config = /*#__PURE__*/new WeakMap();

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
     * 获取全部用户列表
     * @param{Number}pageNum
     * @param{Number}pageSize
     * @param{Number}userType
     * @param{Boolean}diamond
     * @param{Boolean}pay
     * @returns {BaseResponseType}
    */

  }, {
    key: "getAllUserList",
    value: function getAllUserList() {
      var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var diamond = arguments.length > 2 ? arguments[2] : undefined;
      var pay = arguments.length > 3 ? arguments[3] : undefined;
      var param = {
        query: {},
        pageSize: pageSize,
        pageNum: pageNum
      };
      if (diamond) param.query.diamond = 1;
      if (pay) param.query.pay = 1;
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api2/user/list5', param);
    }
    /**
     * 获取未读消息列表
     * @param { Number } pageNum 
     * @param { Number } pageSize 
     * @param { Number } type 
     * @param { Boolean } diamond 
     * @param { Boolean } pay 
     * @returns { BaseResponseType }
     */

  }, {
    key: "getUnreadMessageUserList",
    value: function getUnreadMessageUserList() {
      var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
      var diamond = arguments.length > 3 ? arguments[3] : undefined;
      var pay = arguments.length > 4 ? arguments[4] : undefined;
      var param = {
        query: {
          type: type
        },
        pageSize: pageSize,
        pageNum: pageNum
      };
      if (diamond) param.query.diamond = 1;
      if (pay) param.query.pay = 1;
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
      var arr = ['Hello there, how may I help you?', "Hello there, please let me know if you have any problems while using the app. I am always here to help. :)\n\n      Best,\n      Emily", 'Thanks.', 'Please try to refresh your Wallet page. If you still cannot see the balance, please provide the purchasing record screenshot for our reference.', 'Your account would be deleted in 10 minutes. Please do not login again, your account would be reactivated.', 'All our users are verified. If you think someone is fake, you could make a report. You may click the button on the top right corner to block a specific person and he/she would not show on your profile anymore.', 'You may swipe to match with the person you like and then send them messages for free. You could even video call them privately. Hope you enjoy it!', 'Sorry it is not location based app, we provide wordwide users for matching.', "Sorry, I m here to work solving users' problems only :)", 'You may buy diamonds in the wallet.', "Hello, I am Emily, anything I can help?\n\n      :)", 'Please provide the screenshot of purchase receipt sent by Apple. You may find it in your email.'];
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
    key: "renderDiamondStar",
    value: function renderDiamondStar(diamond, star) {
      if (diamond < 1 && star < 1) return '';
      return "<p class=\"diamond-and-star\">dimond: ".concat(diamond, " / consume: ").concat(star, "</p>");
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

      ele.innerHTML = "\n    <input uid=\"".concat(user.uid, "\" type=\"radio\" name=\"list-user\" >\n    <div class=\"user\">\n      <div class=\"serial ").concat(user.diamond > 0 ? 'diamond' : '', "\">").concat(serial_number++, "</div>\n      <div class=\"avatar-wrap ").concat(user.star > 0 ? 'star' : '', "\">\n        <div class=\"rectangle-box square\">\n          <div class=\"avatar no1\">\n            <img src=\"").concat(user.avatar, "\" />\n          </div>\n          <div class=\"badge no2\">\xB7</div>\n        </div>\n      </div>\n      <div class=\"message-wrap\">\n        <h2 class=\"name\">").concat(user.nickname, "</h2>\n        <p class=\"last-message\">").concat(user.lastMessage, "</p>\n        ").concat(this.renderDiamondStar(user.diamond, user.star), "\n      </div>\n    </div>\n    ");
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
            {
              flag = this.user.diamond > 0 ? '' : 'no-diamond';
            }
            ;
            break;

          case 'star':
            {
              flag = this.user.star > 0 ? '' : 'no-star';
            }
            ;
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
    value: function show(filter, diamond_or_star) {
      if (diamond_or_star) {
        if (this.user.diamond > 0 || this.user.star > 0) {
          this.config.ele.classList.remove('no-diamond', 'no-star');
        } else {
          this.config.ele.classList.add('no-diamond', 'no-star');
        }

        return;
      }

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
   *  filter_diamond: HTMLElement, filter_star: HTMLElement,filter_all:HTMLElement,
   *  filter: {
   *    diamond: Boolean, star: Boolean,all:Boolean,
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
      filter_grid: null,
      filter_diamond: null,
      filter_star: null,
      filter_all: null,
      filter: {
        diamond: true,
        star: true,
        all: false
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
      ele.innerHTML = "\n    <div class=\"filter-grid\">\n      <label class=\"filter\">\n        <input type=\"checkbox\" ".concat(config.filter.diamond ? 'checked' : '', " name=\"filter-diamond\" />\n        <span>\u6709\u94BB\u77F3</span>\n      </label>\n      <label class=\"filter\">\n        <input type=\"checkbox\" ").concat(config.filter.star ? 'checked' : '', " name=\"filter-star\" />\n        <span>\u6709\u6D88\u8D39</span>\n      </label>\n      <label class=\"filter\">\n        <input type=\"checkbox\" ").concat(config.filter.all ? 'checked' : '', " name=\"filter-all\" />\n        <span>\u6240\u6709</span>\n      </label>\n    </div>\n    <div class=\"more-list-wrap\">\n      <button class=\"more-list\">more</button>\n    </div>\n    ");
      config.more_list_wrap = ele.querySelector('.more-list-wrap');
      config.more_list = ele.querySelector('.more-list');
      config.filter_diamond = ele.querySelector('input[name="filter-diamond"]');
      config.filter_star = ele.querySelector('input[name="filter-star"]');
      config.filter_all = ele.querySelector('input[name="filter-all"]');
      config.filter_grid = ele.querySelector('.filter-grid');
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

      this.config.filter_grid.addEventListener('click', function (e) {});
      this.config.filter_diamond.addEventListener('change', function () {
        var is_checked = _this.config.filter_diamond.checked;
        _this.config.filter.diamond = is_checked; // if(this.config.filter.diamond){
        //   this.config.filter_all.checked=false;
        // }

        _this.notifyListener('filter_diamond', {
          is_checked: is_checked
        }); // this.UserMap.forEach( user => {
        //   if (this.config.filter.diamond && this.config.filter.star) {
        //     user.user_wrap.show('', true);
        //     return;
        //   }
        //   is_checked ? user.user_wrap.hide('diamond') : user.user_wrap.show('diamond');
        // });

      });
      this.config.filter_star.addEventListener('change', function () {
        var is_checked = _this.config.filter_star.checked;
        _this.config.filter.star = is_checked; // if(this.config.filter.star){
        //   this.config.filter_all.checked=false;
        // }

        _this.notifyListener('filter_star', {
          is_checked: is_checked
        }); // this.UserMap.forEach( user => {
        //   if (this.config.filter.diamond && this.config.filter.star) {
        //     user.user_wrap.show('', true);
        //     return;
        //   }
        //   is_checked ? user.user_wrap.hide('star') : user.user_wrap.show('star');
        // });

      });
      this.config.filter_all.addEventListener('change', function () {
        var is_checked = _this.config.filter_all.checked;
        _this.config.filter.all = is_checked; // if (this.config.filter.all) {
        //   this.config.filter_diamond.checked = false;
        //   this.config.filter_star.checked = false;
        // }

        _this.notifyListener('filter_all', {
          is_checked: is_checked
        });
      });
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
     * @param { 'changed_user' | 'more_list' | 'filter_diamond' | 'filter_star' | 'filter_all' } event_name 
     * @param { Function({ is_checked: Boolean, uid: String }) } callback 
     */

  }, {
    key: "setListener",
    value: function setListener(event_name, callback) {
      this.on[event_name] = callback;
    }
    /**
     * @param { 'changed_user' | 'more_list' | 'filter_diamond' | 'filter_star' | 'filter_all' } event_name 
     * @param { Function({ is_checked: Boolean, user: UserInfo }) } param 
     */

  }, {
    key: "notifyListener",
    value: function notifyListener(event_name, param) {
      var callback = this.on[event_name];
      console.log(callback);
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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

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
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
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
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

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
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

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
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
      page_visible: true,

      /**@type { {diamond: Boolean, star: Boolean} } */
      filter: {
        diamond: true,
        star: true,
        all: false
      }
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
    this.config.filter = this.userList.config.filter;
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
      sessionStorage.setItem('filter', JSON.stringify(this.config.filter));
    }
  }, {
    key: "getMessageUserList",
    value: function () {
      var _getMessageUserList = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var _this = this;

        var pageNum,
            _yield$Server$getAllU,
            status,
            data,
            records,
            _yield$Server$getUnre,
            _status,
            _data,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageNum = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;

                if (!this.config.filter.all) {
                  _context.next = 15;
                  break;
                }

                _context.next = 4;
                return _assets_js_unit_Server__WEBPACK_IMPORTED_MODULE_7__.Server.getAllUserList(pageNum, undefined, this.config.filter.diamond, this.config.filter.star);

              case 4:
                _yield$Server$getAllU = _context.sent;
                status = _yield$Server$getAllU.status;
                data = _yield$Server$getAllU.data;

                if (!(status !== 0)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                records = data.records;
                console.log('allUserList:', records);
                records.sort(function (a, b) {
                  return b.diamond - a.diamond;
                });
                records.forEach(function (user) {
                  user.id = user.Uid;

                  _this.userList.appendUser(user);

                  _this.UserInfoMap.set(user.uid, user);
                });
                _context.next = 25;
                break;

              case 15:
                _context.next = 17;
                return _assets_js_unit_Server__WEBPACK_IMPORTED_MODULE_7__.Server.getUnreadMessageUserList(pageNum, undefined, undefined, this.config.filter.diamond, this.config.filter.star);

              case 17:
                _yield$Server$getUnre = _context.sent;
                _status = _yield$Server$getUnre.status;
                _data = _yield$Server$getUnre.data;

                if (!(_status !== 0)) {
                  _context.next = 22;
                  break;
                }

                return _context.abrupt("return");

              case 22:
                console.log('getMessageUserList: ', _data);

                _data.sort(function (a, b) {
                  return b.diamond - a.diamond;
                });

                _data.forEach(function (user) {
                  user.uid = user.relateUid;

                  _this.userList.appendUser(user);

                  _this.UserInfoMap.set(user.uid, user);
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
        var sessionFilter = sessionStorage.getItem('filter');
        var filterStr = JSON.stringify(_this3.config.filter);

        if (sessionFilter === filterStr) {
          _this3.getMessageUserList(_this3.config.pageNum.user_list++);
        } else {
          sessionStorage.setItem('filter', JSON.stringify(_this3.config.filter));
          _this3.config.pageNum.user_list = 2;

          _this3.getMessageUserList(1);
        }
      }); // 检测页面是否可见

      document.addEventListener('visibilitychange', function () {
        var visible = document.visibilityState;
        _this3.config.page_visible === (visible === "visible");
      }); // 筛选用户类型

      this.userList.setListener('filter_diamond', function (param) {
        var is_checked = param.is_checked;
      });
      this.userList.setListener('filter_star', function (param) {
        var is_checked = param.is_checked;
      });
      this.userList.setListener('filter_all', function (param) {
        var is_checked = param.is_checked;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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V0FBS3VDLFFBQUwsQ0FBYy9FLFdBQWQsQ0FBMEIsYUFBMUIsRUFBeUMsVUFBQy9FLEtBQUQsRUFBVztBQUNsRCxZQUFNdUgsVUFBTixHQUFxQnZILEtBQXJCLENBQU11SCxVQUFOO0FBQ0QsT0FGRDtBQUdBLFdBQUt1QyxRQUFMLENBQWMvRSxXQUFkLENBQTBCLFlBQTFCLEVBQXdDLFVBQUMvRSxLQUFELEVBQVc7QUFDakQsWUFBTXVILFVBQU4sR0FBcUJ2SCxLQUFyQixDQUFNdUgsVUFBTjtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsSUFBTW1FLE9BQU8sR0FBRyxJQUFJakMsT0FBSixFQUFoQjtBQUNBa0MsTUFBTSxDQUFDRCxPQUFQLEdBQWlCQSxPQUFqQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL2JlYW4vTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvYmVhbi9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2Fzc2V0cy9qcy91bml0L0RhdGVVbml0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2Fzc2V0cy9qcy91bml0L09iamVjdFVuaXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL3VuaXQvU2VydmVyLmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2Fzc2V0cy9qcy91bml0L1ZpZXdVbml0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvQ2hhdFJvb20vQ2hhdFJlY29yZExpc3QuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9DaGF0Um9vbS9TZW5kTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9jb21wb25lbnRzL0NoYXRSb29tL2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvRmFzdE1lc3NhZ2VMaXN0L2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvVXNlckxpc3QvVXNlcldyYXAuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9Vc2VyTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9jb21wb25lbnRzL1VzZXJQcm9maWxlL2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvVmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL2xpdmVpbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saXZlaW0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGl2ZWltL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saXZlaW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saXZlaW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCA/IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIDogJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3REYXRhKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5JywgJ3BhcmFtcyddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd0aW1lb3V0TWVzc2FnZScsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICdtYXhCb2R5TGVuZ3RoJywgJ21heFJlZGlyZWN0cycsICd0cmFuc3BvcnQnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJywgJ3Jlc3BvbnNlRW5jb2RpbmcnXG4gIF07XG4gIHZhciBkaXJlY3RNZXJnZUtleXMgPSBbJ3ZhbGlkYXRlU3RhdHVzJ107XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpXG4gICAgLmNvbmNhdChkaXJlY3RNZXJnZUtleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcxKVxuICAgIC5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiAodHlwZW9mIHBheWxvYWQgPT09ICdvYmplY3QnKSAmJiAocGF5bG9hZC5pc0F4aW9zRXJyb3IgPT09IHRydWUpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59O1xuIiwiaW1wb3J0IHsgRGF0ZVVuaXQgfSBmcm9tICcuLi91bml0L0RhdGVVbml0LmpzJztcclxuXHJcbmNsYXNzIE1lc3NhZ2Uge1xyXG4gIC8qKkB0eXBlIHsgTnVtYmVyIH0gKi9cclxuICBpZDtcclxuICAvKipAdHlwZSB7IE51bWJlciB9ICovXHJcbiAgdGltZXN0YW1wO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi9cclxuICBtZXNzYWdlXHJcbiAgLyoqQHR5cGUgeyBOdW1iZXIgfSAqL1xyXG4gIG1lc3NhZ2VUeXBlO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi9cclxuICBmcm9tVWlkO1xyXG4gIFxyXG4gIC8qKkB0eXBlIHsgeyBpc19zZWxmOiBCb29sZWFuLCBhdmF0YXI6IGF2YXRhciB9IH0gKi9cclxuICB1c2VyX2luZm8gPSB7XHJcbiAgICBpc19zZWxmOiBudWxsLFxyXG4gICAgYXZhdGFyOiBudWxsXHJcbiAgfVxyXG5cclxuICAjY29uZmlnID0ge1xyXG4gICAgLyoqQHR5cGUgeyBIVE1MRWxlbWVudCB9ICovXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBjbGFzc0xpc3Q6IFsnY2hhdC1yZWNvcmQnXVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gdGltZXN0YW1wIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbWVzc2FnZVR5cGUgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIG1lc3NhZ2Vfb2JqLCB1c2VyX2luZm8gPSB7fSl7XHJcbiAgICBpZiAobWVzc2FnZV9vYmogJiYgdHlwZW9mIG1lc3NhZ2Vfb2JqID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBsZXQgeyBpZCwgdGltZXN0YW1wLCBtZXNzYWdlLCBtZXNzYWdlVHlwZSB9ID0gbWVzc2FnZV9vYmo7XHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgIHRoaXMubWVzc2FnZVR5cGUgPSBtZXNzYWdlVHlwZTtcclxuICAgIH1cclxuICAgIHRoaXMudXNlcl9pbmZvID0gdXNlcl9pbmZvO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBTdHJpbmd9IG1lc3NhZ2UgXHJcbiAgICogQHBhcmFtIHsgMCB8IDEgfCAyIHwgNHwgMTN9IHR5cGUgXHJcbiAgICovXHJcbiAgcmVuZGVyTWVzc2FnZUNvbnRlbnQoIG1lc3NhZ2UsIHR5cGUgPSAwKXtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICByZXN1bHQgPSBgPHAgY2xhc3M9XCJjb250ZW50IHRleHRcIj4ke21lc3NhZ2V9PC9wPmA7XHJcbiAgICAgIH07IGJyZWFrO1xyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICByZXN1bHQgPSBgPGltZyBjbGFzcz1cImNvbnRlbnQgaW1hZ2VcIiBzcmM9XCIke21lc3NhZ2V9XCIgLz5gO1xyXG4gICAgICB9OyBicmVhaztcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHJlc3VsdCA9IGA8cCBzdHlsZT1cImNvbG9yOiByZWQ7XCIgY2xhc3M9XCJjb250ZW50IHRleHRcIj4ke21lc3NhZ2V9PC9wPmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpbml0Vmlldygpe1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuI2NvbmZpZztcclxuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgaWYodGhpcy51c2VyX2luZm8uaXNfc2VsZikgZWxlLmNsYXNzTGlzdC5hZGQoJ3NlbGYnKTtcclxuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ21lc3NhZ2UtaWQnLCB0aGlzLmlkKTtcclxuICAgIGVsZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLXdyYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ib3ggc3F1YXJlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhciBubzFcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLnVzZXJfaW5mby5hdmF0YXJ9XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXdyYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICA8cCBjbGFzcz1cIml0ZW1cIj4ke0RhdGVVbml0LmZvcm1hdCh0aGlzLnRpbWVzdGFtcCl9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaXRlbVwiPiBNZXNzYWdlVHlwZTogJHt0aGlzLm1lc3NhZ2VUeXBlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlICR7dGhpcy5tZXNzYWdlVHlwZSA9PT0gMTMgPyAndmlkZW8tY2FsbCcgOiAnJ31cIj5cclxuICAgICAgICAke3RoaXMucmVuZGVyTWVzc2FnZUNvbnRlbnQodGhpcy5tZXNzYWdlLCB0aGlzLm1lc3NhZ2VUeXBlKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbmZpZy5lbGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIE1lc3NhZ2VcclxufSIsImNsYXNzIFVzZXJJbmZvIHtcclxuICAvKipAdHlwZSB7IFN0cmluZyB9ICovIGlkO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi8gdWlkO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi8gbmlja25hbWU7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBhdmF0YXI7XHJcbiAgLyoqQHR5cGUgeyBOdW1iZXIgfSAqLyBnZW5kZXI7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBhZ2U7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBsYXN0TWVzc2FnZTtcclxuICAvKipAdHlwZSB7IE51bWJlciB9ICovIHVwZGF0ZUJhZGdlO1xyXG4gIC8qKkB0eXBlIHsgTnVtYmVyIH0gKi8gZGlhbW9uZDtcclxuICAvKipAdHlwZSB7IE51bWJlciB9ICovIHN0YXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkLCB1aWQsIG5pY2tuYW1lLCBhdmF0YXIsIGdlbmRlciwgYWdlLCBsYXN0TWVzc2FnZSwgZGlhbW9uZCwgc3Rhcil7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnVpZCA9IHVpZDtcclxuICAgIHRoaXMubmlja25hbWUgPSBuaWNrbmFtZTtcclxuICAgIHRoaXMuYXZhdGFyID0gYXZhdGFyO1xyXG4gICAgdGhpcy5nZW5kZXIgPSBnZW5kZXI7XHJcbiAgICB0aGlzLmFnZSA9IGFnZTtcclxuICAgIHRoaXMubGFzdE1lc3NhZ2UgPSBsYXN0TWVzc2FnZTtcclxuICAgIHRoaXMuZGlhbW9uZCA9IGRpYW1vbmQ7XHJcbiAgICB0aGlzLnN0YXIgPSBzdGFyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VySW5mb1xyXG59IiwibGV0IERlZmF1bHRDb25maWcgPSB7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vdC5saXZlaHViLmNsb3VkJyxcclxuICBhdmF0YXI6ICdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbGl2ZWh1Yi14eXovTGl2ZXR1YmVfdW5kZWZpbmVkXzIwMjEwMzI1MDY0MTE0X2NvdmVyLnBuZydcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBEZWZhdWx0Q29uZmlnXHJcbn0iLCJjbGFzcyBEYXRlVW5pdENsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICB9XHJcblxyXG4gIGRlZmF1bHRfZm9ybWF0X3N0ciA9ICd5eXl5LU1NLWRkIEhIOm1tOnNzOm1zJ1xyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0geyBEYXRlIHwgTnVtYmVyIH0gZGF0ZV9vYmogXHJcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0gZm9ybWF0X3N0ciBcclxuICAgKiBAcGFyYW0geyAnZGF0ZScgfCAndGltZScgfCAnZGF0ZXRpbWUnIH0gdHlwZSBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBmb3JtYXQoIGRhdGVfb2JqLCBmb3JtYXRfc3RyLCB0eXBlKXtcclxuICAgIGlmICghdHlwZSAmJiAhZm9ybWF0X3N0cikgZm9ybWF0X3N0ciA9IFwieXl5eS1NTS1kZCBISDptbTpzczptc1wiO1xyXG4gICAgZWxzZSBpZiAoXCJkYXRlXCIgPT09IHR5cGUpIGZvcm1hdF9zdHIgPSBcInl5eXktTU0tZGRcIjtcclxuICAgIGVsc2UgaWYgKFwidGltZVwiID09PSB0eXBlKSBmb3JtYXRfc3RyID0gXCJISDptbTpzc1wiO1xyXG4gICAgZWxzZSBpZiAoXCJkYXRldGltZVwiID09PSB0eXBlKSBmb3JtYXRfc3RyID0gXCJ5eXl5LU1NLWRkIEhIOm1tOnNzXCI7XHJcbiAgICBpZiAoIWRhdGVfb2JqKSBkYXRlX29iaiA9IG5ldyBEYXRlKCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0ZV9vYmogPT09ICdudW1iZXInKSBkYXRlX29iaiA9IG5ldyBEYXRlKGRhdGVfb2JqKTtcclxuICAgIGxldCBtb250aCA9IGRhdGVfb2JqLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgbGV0IGRheSA9IGRhdGVfb2JqLmdldERhdGUoKTtcclxuICAgIGxldCBob3VycyA9IGRhdGVfb2JqLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbWludXRlcyA9IGRhdGVfb2JqLmdldE1pbnV0ZXMoKTtcclxuICAgIGxldCBzZWNvbmRzID0gZGF0ZV9vYmouZ2V0U2Vjb25kcygpO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcInl5eXlcIiwgZGF0ZV9vYmouZ2V0RnVsbFllYXIoKSk7XHJcbiAgICBmb3JtYXRfc3RyID0gZm9ybWF0X3N0ci5yZXBsYWNlKFwiTU1cIiwgYCR7bW9udGggPiA5ID8gXCJcIiA6IDB9JHttb250aH1gKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJkZFwiLCBgJHtkYXkgPiA5ID8gXCJcIiA6IDB9JHtkYXl9YCk7XHJcbiAgICBmb3JtYXRfc3RyID0gZm9ybWF0X3N0ci5yZXBsYWNlKFwiSEhcIiwgYCR7aG91cnMgPiA5ID8gXCJcIiA6IDB9JHtob3Vyc31gKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJtbVwiLCBgJHttaW51dGVzID4gOSA/IFwiXCIgOiAwfSR7bWludXRlc31gKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJzc1wiLCBgJHtzZWNvbmRzID4gOSA/IFwiXCIgOiAwfSR7c2Vjb25kc31gKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJtc1wiLCBkYXRlX29iai5nZXRNaWxsaXNlY29uZHMoKSk7XHJcbiAgICByZXR1cm4gZm9ybWF0X3N0cjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IERhdGVVbml0ID0gbmV3IERhdGVVbml0Q2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgRGF0ZVVuaXRcclxufSIsImNsYXNzIE9iamVjdFVuaXRDbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICB9XHJcblxyXG4gIGlzTnVsbCggb2JqICkge1xyXG4gICAgaWYgKCAhb2JqIHx8IG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc09iamVjdCggb2JqICkge1xyXG4gICAgaWYgKCB0aGlzLmlzTnVsbChvYmopICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyApIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eU9iamVjdCggb2JqICkge1xyXG4gICAgaWYgKCAhdGhpcy5pc09iamVjdChvYmopICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKCBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA+IDApIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNOb0VtcHR5T2JqZWN0KCBvYmogKSB7XHJcbiAgICBpZiAoICF0aGlzLmlzT2JqZWN0KG9iaikgKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoIDwgMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpc051bWJlciggbnVtICkge1xyXG4gICAgaWYgKCBTdHJpbmcobnVtKSA9PT0gJ05hTicgKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gKCB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyk7XHJcbiAgfVxyXG5cclxuICBpc1N0cmluZyggc3RyICkge1xyXG4gICAgcmV0dXJuICggdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgKTtcclxuICB9XHJcbiAgaXNFbXB0eVN0cmluZyggc3RyICkge1xyXG4gICAgaWYgKCB0aGlzLmlzTnVsbChzdHIpICkgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAoICF0aGlzLmlzU3RyaW5nKHN0cikgKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmICggc3RyLnRyaW0oKS5sZW5ndGggPCAxICkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlzTm9FbXB0eVN0cmluZyggc3RyICkge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzRW1wdHlTdHJpbmcoc3RyKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IE9iamVjdFVuaXQgPSBuZXcgT2JqZWN0VW5pdENsYXNzKCk7XHJcblxyXG5leHBvcnQge1xyXG4gIE9iamVjdFVuaXRcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9iZWFuL01lc3NhZ2UuanMnO1xyXG4vLyBpbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uL2JlYW4vVXNlckluZm8uanMnO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHsgUHJvbWlzZTx7IHN0YXR1czogMCB8IDQxMyB8IDIwMDEsIGRhdGE6IHsgfX0+IH1cclxuICovXHJcbmxldCBCYXNlUmVzcG9uc2VUeXBlO1xyXG5cclxuY29uc3QgaXNfdGVzdCA9IHRydWU7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgYmFzZVVSTDogaXNfdGVzdCA/ICdodHRwczovL3QubGl2ZWh1Yi5jbG91ZCcgOiAnaHR0cHM6Ly90LmxpdmVodWIuY2xvdWQnLFxyXG4gIG5vX3NlbmRfbXNnOiBmYWxzZSxcclxufVxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gY29uZmlnLmJhc2VVUkw7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydhdXRob3JpemF0aW9uJ10gPSBcIndncmRnNzgzODZhXCI7XHJcbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgbGV0IHJlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgLy8gY29uc29sZS5sb2coXCJBeGlvc1Jlc3Bvc25lID0+IFwiLCByZXMpO1xyXG4gIC8vIGlmKHJlcy5zdGF0dXMgPT09IDQxMyl7XHJcbiAgLy8gICAgIGhhbmRsZVN0YXR1czQxMygpO1xyXG4gIC8vICAgICByZXR1cm47XHJcbiAgLy8gfVxyXG4gIC8vIGlmKHJlcy5zdGF0dXMgPT09IDApIHJlcy5zdWNjZXNzID0gdHJ1ZTtcclxuICByZXR1cm4gcmVzO1xyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuXHJcbmNsYXNzIFNlcnZlclVuaXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlua2iOaBr+WIl+ihqFxyXG4gICAqIEBwYXJhbSB7IHtcInF1ZXJ5XCI6e30sXCJwYWdlU2l6ZVwiOjIwLFwicGFnZU51bVwiOjF9IH0gcGFyYW0gXHJcbiAgICogQHJldHVybnMgeyBQcm9taXNlPHsgc3RhdHVzOiBOdW1iZXIsIGRhdGE6IFVzZXJJbmZvW119PiB9XHJcbiAgICovXHJcbiAgZ2V0TWVzc2FnZVVzZXJMaXN0KHBhcmFtID0geyBcInF1ZXJ5XCI6IHt9LCBcInBhZ2VTaXplXCI6IDIwLCBcInBhZ2VOdW1cIjogMSB9KSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaTIvbWVzc2FnZS91c2VyL2xpc3QvJywgcGFyYW0pO1xyXG4gIH1cclxuICAvKiogXHJcbiAgICog6I635Y+W5YWo6YOo55So5oi35YiX6KGoXHJcbiAgICogQHBhcmFte051bWJlcn1wYWdlTnVtXHJcbiAgICogQHBhcmFte051bWJlcn1wYWdlU2l6ZVxyXG4gICAqIEBwYXJhbXtOdW1iZXJ9dXNlclR5cGVcclxuICAgKiBAcGFyYW17Qm9vbGVhbn1kaWFtb25kXHJcbiAgICogQHBhcmFte0Jvb2xlYW59cGF5XHJcbiAgICogQHJldHVybnMge0Jhc2VSZXNwb25zZVR5cGV9XHJcbiAgKi9cclxuICBnZXRBbGxVc2VyTGlzdChwYWdlTnVtID0gMSwgcGFnZVNpemUgPSAyMCwgZGlhbW9uZCwgcGF5KSB7XHJcbiAgICBsZXQgcGFyYW0gPSB7IHF1ZXJ5OiB7fSwgcGFnZVNpemUsIHBhZ2VOdW0gfTtcclxuICAgIGlmIChkaWFtb25kKSBwYXJhbS5xdWVyeS5kaWFtb25kID0gMTtcclxuICAgIGlmIChwYXkpIHBhcmFtLnF1ZXJ5LnBheSA9IDE7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaTIvdXNlci9saXN0NScsIHBhcmFtKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5pyq6K+75raI5oGv5YiX6KGoXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gcGFnZU51bSBcclxuICAgKiBAcGFyYW0geyBOdW1iZXIgfSBwYWdlU2l6ZSBcclxuICAgKiBAcGFyYW0geyBOdW1iZXIgfSB0eXBlIFxyXG4gICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBkaWFtb25kIFxyXG4gICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBwYXkgXHJcbiAgICogQHJldHVybnMgeyBCYXNlUmVzcG9uc2VUeXBlIH1cclxuICAgKi9cclxuICBnZXRVbnJlYWRNZXNzYWdlVXNlckxpc3QocGFnZU51bSA9IDEsIHBhZ2VTaXplID0gMjAsIHR5cGUgPSAyLCBkaWFtb25kLCBwYXkpIHtcclxuICAgIGxldCBwYXJhbSA9IHsgcXVlcnk6IHsgdHlwZSB9LCBwYWdlU2l6ZSwgcGFnZU51bSB9O1xyXG4gICAgaWYgKGRpYW1vbmQpIHBhcmFtLnF1ZXJ5LmRpYW1vbmQgPSAxO1xyXG4gICAgaWYgKHBheSkgcGFyYW0ucXVlcnkucGF5ID0gMTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpMi9jdXN0b21lci9tc2cvbGlzdCcsIHBhcmFtKTtcclxuICB9XHJcbiAgZ2V0QWxyZWFkeVJlYWRNZXNzYWdlVXNlckxpc3QocGFnZU51bSA9IDEsIHBhZ2VTaXplID0gMjApIHtcclxuICAgIHJldHVybiB0aGlzLmdldFVucmVhZE1lc3NhZ2VVc2VyTGlzdChwYWdlTnVtLCBwYWdlU2l6ZSwgMyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blkoznlKjmiLflr7nor53or6bmg4XliJfooahcclxuICAgKiBAcGFyYW0geyB7XCJxdWVyeVwiOntcInJlbGF0ZVVpZFwiOjM5MDE2MDQwNTMwNzM5Njl9LFwicGFnZVNpemVcIjoyMCxcInBhZ2VOdW1cIjoxfSB9IHBhcmFtIFxyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBkYXRhOiBNZXNzYWdlW119PiB9XHJcbiAgICovXHJcbiAgZ2V0VXNlck1lc3NhZ2VEZXRhaWwocGFyYW0gPSB7IFwicXVlcnlcIjogeyBcInJlbGF0ZVVpZFwiOiAzOTAxNjA0MDUzMDczOTY5IH0sIFwicGFnZVNpemVcIjogMjAsIFwicGFnZU51bVwiOiAxIH0pIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpMi9tZXNzYWdlL3VzZXIvZGV0YWlsLycsIHBhcmFtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWPkemAgea2iOaBr+e7meeUqOaIt1xyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHJlbGF0ZVVpZCBcclxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSBjb250ZW50IFxyXG4gICAqIEBwYXJhbSB7IDAgfCAxIHwgMyB9IG1lc3NhZ2VUeXBlIFxyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBtc2c6IFN0cmluZ30+IH1cclxuICAgKi9cclxuICBzZW5kTWVzc2FnZShyZWxhdGVVaWQsIGNvbnRlbnQsIG1lc3NhZ2VUeXBlID0gMCkge1xyXG4gICAgaWYgKGNvbmZpZy5ub19zZW5kX21zZykgcmV0dXJuO1xyXG4gICAgbGV0IHBhcmFtID0geyByZWxhdGVVaWQsIGNvbnRlbnQsIG1lc3NhZ2VUeXBlIH07XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9tZXNzYWdlL3NlbmQvJywgcGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+R6YCB5aqS5L2T5raI5oGv57uZ55So5oi3XHJcbiAgICogQHBhcmFtIHsgRmlsZSB9IGZpbGVuYW1lIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHJlbGF0ZVVpZCBcclxuICAgKiBAcGFyYW0geyAxIHwgMiB8IDQgfSBtZXNzYWdlVHlwZSAtIDI6IOWbvueJh1xyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBtc2c6IFN0cmluZ30+IH1cclxuICAgKi9cclxuICBzZW5kTWVkaWFNZXNzYWdlKGZpbGVuYW1lLCByZWxhdGVVaWQsIG1lc3NhZ2VUeXBlKSB7XHJcbiAgICBpZiAoY29uZmlnLm5vX3NlbmRfbXNnKSByZXR1cm47XHJcbiAgICBsZXQgcGFyYW0gPSB7IGZpbGVuYW1lLCByZWxhdGVVaWQsIG1lc3NhZ2VUeXBlIH07XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91cGxvYWRNZWRpYS8nLCBwYXJhbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnlKjmiLfkuKrkurrotYTmlplcclxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSB1aWRcclxuICAgKiBAcmV0dXJucyB7IFByb21pc2U8eyBzdGF0dXM6IE51bWJlciwgZGF0YTogeyB1aWQ6IFN0cmluZywgY3JlYXRlZEF0OiBTdHJpbmcsIGRpYW1vbmQ6IE51bWJlcn19PiB9XHJcbiAgICovXHJcbiAgZ2V0VXNlclByb2ZpbGUodWlkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91c2VyL2luZm8vJywgeyByZWxhdGVVaWQ6IHVpZCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeZu+W9lVxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHVzZXJuYW1lIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHBhc3N3b3JkIFxyXG4gICAqIEByZXR1cm5zIHsgQmFzZVJlc3BvbnNlVHlwZSB9XHJcbiAgICovXHJcbiAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFNlcnZlciA9IG5ldyBTZXJ2ZXJVbml0KCk7XHJcblxyXG5leHBvcnQge1xyXG4gIFNlcnZlclxyXG59IiwiXHJcbmNsYXNzIFZpZXdVbml0Q2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgRWxlbWVudCB9IGVsZSBcclxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSBjbGFzc19uYW1lIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHBhcmVudEJ5Q2xhc3MoZWxlLCBjbGFzc19uYW1lKSB7XHJcbiAgICBpZiAoIWVsZSB8fCAhZWxlIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIGVsZTtcclxuICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzX25hbWUpKSByZXR1cm4gZWxlO1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50QnlDbGFzcyhlbGUucGFyZW50RWxlbWVudCwgY2xhc3NfbmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBWaWV3VW5pdCA9IG5ldyBWaWV3VW5pdENsYXNzKCk7XHJcblxyXG5leHBvcnQge1xyXG4gIFZpZXdVbml0XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2JlYW4vTWVzc2FnZS5qcyc7XHJcbmltcG9ydCB7IERlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvY29tbW9uJztcclxuXHJcbmNsYXNzIENoYXRSZWNvcmRMaXN0IHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7e1xyXG4gICAqICBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqICBjbGFzc0xpc3Q6IFN0cmluZ1tdLFxyXG4gICAqICBtZXNzYWdlX2xpc3Q6IE1lc3NhZ2VbXSxcclxuICAgKiAgc2VuZF9tZXNzYWdlX2lkOiBOdW1iZXIsXHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBjbGFzc0xpc3Q6IFsnY2hhdC1yZWNvcmQtbGlzdCddLFxyXG4gICAgbWVzc2FnZV9saXN0OiBbXSxcclxuICAgIHNlbmRfbWVzc2FnZV9pZDogMTAwMDBcclxuICB9XHJcblxyXG4gIGFscmVhZHkgPSB7XHJcbiAgICBpbml0OiB7XHJcbiAgICAgIHZpZXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIHtcclxuICAgKiAgc3RhdHVzOiAncGVuZGluZycgfCAnZmFpbGVkJywgJ3N1Y2Nlc3MnLFxyXG4gICAqICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAqICBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgTWVzc2FnZU1hcCA9IG5ldyBNYXAoKTtcclxuICAvKipAdHlwZSB7IFN0cmluZyB9ICovXHJcbiAgdWlkO1xyXG5cclxuICBjb25zdHJ1Y3RvciggdWlkICl7XHJcbiAgICB0aGlzLnVpZCA9IHVpZDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKXtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3VpZCcsIHRoaXMudWlkKTtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgY29uZmlnLmVsZSA9IGVsZTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBNZXNzYWdlIHwgTWVzc2FnZVtdIH0gbWVzc2FnZSBcclxuICAgKiBAcGFyYW0geyB7IGlzX3NlbGY6IEJvb2xlYW4sIGF2YXRhcjogYXZhdGFyIH0gfSB1c2VyX2luZm9cclxuICAgKi9cclxuICBhcHBlbmRSZWNvcmQoIG1lc3NhZ2UsIHVzZXJfaW5mbyApIHtcclxuICAgIGlmICh1c2VyX2luZm8uaXNfc2VsZikgY29uc29sZS5sb2coYHNlbmQgbWVzc2FnZSB0bzogJHt0aGlzLnVpZH06IGAsIG1lc3NhZ2UpO1xyXG4gICAgY29uc29sZS5sb2coJ2FwcGVuZFJlY29yZDogJywgeyBtZXNzYWdlLCB1c2VyX2luZm8gfSk7XHJcbiAgICBpZighQXJyYXkuaXNBcnJheShtZXNzYWdlKSkgbWVzc2FnZSA9IFttZXNzYWdlXTtcclxuICAgIG1lc3NhZ2UuZm9yRWFjaCggbXNnID0+IHtcclxuICAgICAgaWYgKCFtc2cuaWQpIG1zZy5pZCA9IHRoaXMuY29uZmlnLnNlbmRfbWVzc2FnZV9pZCsrO1xyXG4gICAgICBpZiAodGhpcy5NZXNzYWdlTWFwLmhhcyhtc2cuaWQpKSByZXR1cm47XHJcbiAgICAgIGxldCBjdXJfdXNlcl9pbmZvID0geyBpc19zZWxmOiBmYWxzZSwgYXZhdGFyOiB1c2VyX2luZm8uYXZhdGFyIH07XHJcbiAgICAgIGlmIChtc2cuZnJvbVVpZCAhPT0gdGhpcy51aWQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTm8gc2FtZSB1aWQ6ICcsIHsgZnJvbTogbWVzc2FnZS5mcm9tVWlkLCBzZWxmOiB0aGlzLnVpZH0pO1xyXG4gICAgICAgIGN1cl91c2VyX2luZm8uaXNfc2VsZiA9IHRydWU7XHJcbiAgICAgICAgY3VyX3VzZXJfaW5mby5hdmF0YXIgPSBEZWZhdWx0Q29uZmlnLmF2YXRhcjtcclxuICAgICAgfSBcclxuICAgICAgbGV0IG1lc3NhZ2VfZWxlID0gbmV3IE1lc3NhZ2UoIG1zZywgY3VyX3VzZXJfaW5mbyk7XHJcbiAgICAgIGxldCBlbGUgPSBtZXNzYWdlX2VsZS5nZXRFbGVtZW50KCk7XHJcbiAgICAgIGxldCBzdGF0dXMgPSBjdXJfdXNlcl9pbmZvLmlzX3NlbGYgPyAncGVuZGluZycgOiAnc3VjY2VzcydcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcclxuICAgICAgdGhpcy5NZXNzYWdlTWFwLnNldChtc2cuaWQsIHsgc3RhdHVzOiAncGVuZGluZycsIG1lc3NhZ2U6IG1zZywgZWxlOiBlbGUgfSk7XHJcbiAgICAgIHRoaXMuY29uZmlnLmVsZS5hcHBlbmRDaGlsZChlbGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBOdW1iZXIgfSBtZXNzYWdlX2lkIFxyXG4gICAqIEBwYXJhbSB7ICdwZW5kaW5nJyB8ICdmYWlsZWQnLCAnc3VjY2VzcycgfSBzdGF0dXMgXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgY2hhbmdlUmVjb3JkU3RhdHVzKCBtZXNzYWdlX2lkLCBzdGF0dXMgKSB7XHJcbiAgICBsZXQgb2JqID0gdGhpcy5NZXNzYWdlTWFwLmdldChtZXNzYWdlX2lkKTtcclxuICAgIGxldCBlbGUgPSBvYmogJiYgb2JqLmVsZTtcclxuICAgIGlmICghZWxlKSByZXR1cm47XHJcbiAgICBlbGUuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZWxlJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgaGlkZSAke3RoaXMudWlkfTogYCwgdGhpcy5jb25maWcpO1xyXG4gIH1cclxuICBzaG93KCl7XHJcbiAgICB0aGlzLmNvbmZpZy5lbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1lbGUnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBzaG93ICR7dGhpcy51aWR9OiBgLCB0aGlzLmNvbmZpZyk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIENoYXRSZWNvcmRMaXN0XHJcbn0iLCJjb25zdCB7IE9iamVjdFVuaXQgfSA9IHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvanMvdW5pdC9PYmplY3RVbml0XCIpO1xyXG5cclxuY2xhc3MgU2VuZE1lc3NhZ2Uge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHt7XHJcbiAgICogIGlkOiBTdHJpbmcsXHJcbiAgICogIGVsZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIGNsYXNzTGlzdDogU3RyaW5nW10sXHJcbiAgICogIHRleHRfaW5wdXQ6IEhUTUxFbGVtZW50LFxyXG4gICAqICBidXR0b246IHtcclxuICAgKiAgICBzZW5kX3RleHQ6IEhUTUxFbGVtZW50LFxyXG4gICAqICAgIHNlbmRfaW1hZ2U6IEhUTUxFbGVtZW50LFxyXG4gICAqICB9XHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBpZDogJ3NlbmRfbWVzc2FnZV93cmFwJyxcclxuICAgIGVsZTogbnVsbCxcclxuICAgIGNsYXNzTGlzdDogWydzZW5kLW1lc3NhZ2Utd3JhcCddLFxyXG4gICAgdGV4dF9pbnB1dDogbnVsbCxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBzZW5kX3RleHQ6IG51bGwsXHJcbiAgICAgIHNlbmRfaW1hZ2U6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uID0ge1xyXG4gICAgc2VuZF90ZXh0OiBudWxsLFxyXG4gICAgc2VuZF9pbWFnZTogbnVsbCxcclxuICB9XHJcblxyXG4gIGFscmVhZHkgPSB7XHJcbiAgICBpbml0OiB7XHJcbiAgICAgIHZpZXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgIHRoaXMuYmluZExpc3RlbmVyKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnU2VuZE1lc3NhZ2U6ICcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKXtcclxuICAgIGlmICh0aGlzLmFscmVhZHkuaW5pdC52aWV3KSByZXR1cm47XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gICAgZWxlLmlkID0gY29uZmlnLmlkO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBlbGUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj5cclxuICAgICAgPHRleHRhcmVhIGNsYXNzPVwidGV4dC1pbnB1dFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24td3JhcFwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmaWxlLWxhYmVsXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uIGNob29zZS1maWxlXCI+Q2hvb3NlIEltYWdlPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIHNlbmQtbWVzc2FnZVwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgY29uZmlnLnRleHRfaW5wdXQgPSBlbGUucXVlcnlTZWxlY3RvcignLnRleHQtaW5wdXQnKTtcclxuICAgIGNvbmZpZy5idXR0b24uc2VuZF90ZXh0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5zZW5kLW1lc3NhZ2UnKTtcclxuICAgIGNvbmZpZy5idXR0b24uc2VuZF9pbWFnZSA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuZmlsZS1sYWJlbCBpbnB1dCcpO1xyXG4gICAgdGhpcy5hbHJlYWR5LmluaXQudmlldyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBiaW5kTGlzdGVuZXIoKXtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIC8vXHJcbiAgICBjb25maWcudGV4dF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2tleTogJywgZXZlbnQua2V5KTtcclxuICAgICAgaWYoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdlbnRlcicpIHtcclxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbmQgdGV4dDogJywgdGV4dCk7XHJcbiAgICAgICAgdGhhdC5ub3RpZnlMaXN0ZW5lcignc2VuZF90ZXh0Jywge1xyXG4gICAgICAgICAgY3JlYXRlZF90aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgZGF0YTogdGV4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoYXQuY29uZmlnLnRleHRfaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBcclxuICAgIGNvbmZpZy5idXR0b24uc2VuZF90ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgdGV4dCA9IHRoaXMuY29uZmlnLnRleHRfaW5wdXQudmFsdWU7XHJcbiAgICAgIGlmIChPYmplY3RVbml0LmlzRW1wdHlTdHJpbmcodGV4dCkpIHJldHVybjtcclxuICAgICAgY29uc29sZS5sb2coJ3NlbmQgdGV4dDogJywgdGV4dCk7XHJcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXIoJ3NlbmRfdGV4dCcsIHtcclxuICAgICAgICBjcmVhdGVkX3RpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgZGF0YTogdGV4dFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb25maWcudGV4dF9pbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfSk7XHJcbiAgICAvLyBcclxuICAgIGNvbmZpZy5idXR0b24uc2VuZF9pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8qKkB0eXBlIHsgRmlsZSB9ICovXHJcbiAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICBpZiAoIWZpbGUpIHJldHVybjtcclxuICAgICAgaWYgKCEvaW1hZ2UvLnRlc3QoZmlsZS50eXBlKSkgcmV0dXJuO1xyXG4gICAgICBjb25zb2xlLmxvZygnc2VuZCBpbWFnZTogJywgZmlsZSk7XHJcbiAgICAgIHRoYXQubm90aWZ5TGlzdGVuZXIoJ3NlbmRfaW1hZ2UnLCB7XHJcbiAgICAgICAgY3JlYXRlZF90aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGRhdGE6IGZpbGVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmVsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdzZW5kX3RleHQnIHwgJ3NlbmRfaW1hZ2UnIH0gZXZlbnRfbmFtZSBcclxuICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGNhbGxiYWNrIFxyXG4gICAqL1xyXG4gIHNldExpc3RlbmVyKCBldmVudF9uYW1lLCBjYWxsYmFjayApe1xyXG4gICAgdGhpcy5vbltldmVudF9uYW1lXSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgJ3NlbmRfdGV4dCcgfCAnc2VuZF9pbWFnZScgfSBldmVudF9uYW1lIFxyXG4gICAqL1xyXG4gIG5vdGlmeUxpc3RlbmVyKCBldmVudF9uYW1lLCBwYXJhbSApe1xyXG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5vbltldmVudF9uYW1lXTtcclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKHBhcmFtKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgU2VuZE1lc3NhZ2VcclxufSIsImltcG9ydCB7IFNlbmRNZXNzYWdlIH0gZnJvbSAnLi9TZW5kTWVzc2FnZS5qcyc7XHJcbmltcG9ydCB7IENoYXRSZWNvcmRMaXN0IH0gZnJvbSAnLi9DaGF0UmVjb3JkTGlzdC5qcyc7XHJcbmltcG9ydCB7IEZhc3RNZXNzYWdlTGlzdCB9IGZyb20gJy4uL0Zhc3RNZXNzYWdlTGlzdC8nO1xyXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9TZXJ2ZXIuanMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2NvbW1vbic7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2JlYW4vVXNlckluZm8uanMnO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJy4uL1VzZXJQcm9maWxlJztcclxuXHJcbmNsYXNzIENoYXRSb29tIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7e1xyXG4gICAqICBpZDogU3RyaW5nLCBjbGFzc0xpc3Q6IFN0cmluZ1tdLCBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgaWQ6ICdjaGF0X3Jvb20nLFxyXG4gICAgY2xhc3NMaXN0OiBbJ2NoYXQtcm9vbSddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gIH1cclxuXHJcbiAgYWxyZWFkeSA9IHtcclxuICAgIGluaXQ6IHtcclxuICAgICAgdmlldzogZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHsgTWFwPFN0cmluZywge1xyXG4gICAqICBpc19iaW5kX2xpc3RlbmVyOiBCb29sZWFuLFxyXG4gICAqICBsaXN0OiBDaGF0UmVjb3JkTGlzdCxcclxuICAgKiB9PiB9XHJcbiAgICovXHJcbiAgUmVjb3JkTGlzdE1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgLyoqXHJcbiAgICog5L+d5a2Y5omA5pyJ55So5oi35Liq5Lq65L+h5oGv77yMXHJcbiAgICogQHR5cGUgeyBNYXA8U3RyaW5nLCB7fSB9XHJcbiAgICovXHJcbiAgVXNlclByb2ZpbGVNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG5cclxuICAvKipAdHlwZSB7IENoYXRSZWNvcmRMaXN0IH0gKi9cclxuICBjdXJDaGF0UmVjb3JkTGlzdDsgLy8g5b2T5YmN6IGK5aSp6K6w5b2V5YiX6KGoXHJcbiAgLyoqQHR5cGUgeyBTZW5kTWVzc2FnZSB9ICovXHJcbiAgc2VuZE1lc3NhZ2U7XHJcbiAgLyoqQHR5cGUgeyBGYXN0TWVzc2FnZUxpc3QgfSAqL1xyXG4gIGZhc3RNZXNzYWdlTGlzdDtcclxuICAvKipAdHlwZSB7IFVzZXJQcm9maWxlIH0gKi9cclxuICB1c2VyUHJvZmlsZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UgPSBuZXcgU2VuZE1lc3NhZ2UoKTtcclxuICAgIHRoaXMuZmFzdE1lc3NhZ2VMaXN0ID0gbmV3IEZhc3RNZXNzYWdlTGlzdCgpO1xyXG4gICAgdGhpcy51c2VyUHJvZmlsZSA9IG5ldyBVc2VyUHJvZmlsZSgpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKXtcclxuICAgIGlmICh0aGlzLmFscmVhZHkuaW5pdC52aWV3ID09PSB0cnVlKSByZXR1cm47XHJcbiAgICBsZXQgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGUuY2xhc3NMaXN0LmFkZCguLi50aGlzLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgdGhpcy5jb25maWcuZWxlID0gZWxlO1xyXG4gICAgZWxlLmFwcGVuZENoaWxkKHRoaXMudXNlclByb2ZpbGUuZ2V0RWxlbWVudCgpKTtcclxuICAgIGVsZS5hcHBlbmRDaGlsZCh0aGlzLmZhc3RNZXNzYWdlTGlzdC5nZXRFbGVtZW50KCkpO1xyXG4gICAgZWxlLmFwcGVuZENoaWxkKHRoaXMuc2VuZE1lc3NhZ2UuZ2V0RWxlbWVudCgpKTtcclxuICAgIHRoaXMuYWxyZWFkeS5pbml0LnZpZXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kUmVjb3JkVG9MaXN0KG1lc3NhZ2UsIHVzZXJfaW5mbyl7XHJcbiAgICBpZiAoIXRoaXMuY3VyQ2hhdFJlY29yZExpc3QpIHJldHVybjtcclxuICAgIHRoaXMuY3VyQ2hhdFJlY29yZExpc3QuYXBwZW5kUmVjb3JkKG1lc3NhZ2UsIHVzZXJfaW5mbyk7XHJcbiAgICB0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LmdldEVsZW1lbnQoKS5zY3JvbGxUb3AgPSB0aGlzLmN1ckNoYXRSZWNvcmRMaXN0LmdldEVsZW1lbnQoKS5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBiaW5kTGlzdGVuZXIoKXtcclxuICAgIGxldCBkZWZhdWx0X2F2YXRhciA9IERlZmF1bHRDb25maWcuYXZhdGFyO1xyXG4gICAgXHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlLnNldExpc3RlbmVyKCdzZW5kX3RleHQnLCAocGFyYW0pID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmN1ckNoYXRSZWNvcmRMaXN0Py51aWQpIHJldHVybjtcclxuICAgICAgU2VydmVyLnNlbmRNZXNzYWdlKHRoaXMuY3VyQ2hhdFJlY29yZExpc3QudWlkLCBwYXJhbS5kYXRhLCAwKTtcclxuICAgICAgdGhpcy5hcHBlbmRSZWNvcmRUb0xpc3Qoe1xyXG4gICAgICAgIHRpbWVzdGFtcDogcGFyYW0uY3JlYXRlZF90aW1lLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtLmRhdGEsXHJcbiAgICAgICAgbWVzc2FnZVR5cGU6IDAsXHJcbiAgICAgIH0sIHsgaXNfc2VsZjogdHJ1ZSwgYXZhdGFyOiBkZWZhdWx0X2F2YXRhcn0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlLnNldExpc3RlbmVyKCdzZW5kX2ltYWdlJywgKHBhcmFtKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5jdXJDaGF0UmVjb3JkTGlzdD8udWlkKSByZXR1cm47XHJcbiAgICAgIFNlcnZlci5zZW5kTWVkaWFNZXNzYWdlKHBhcmFtLmRhdGEsIHRoaXMuY3VyQ2hhdFJlY29yZExpc3QudWlkLCAyKTtcclxuICAgICAgdGhpcy5hcHBlbmRSZWNvcmRUb0xpc3Qoe1xyXG4gICAgICAgIHRpbWVzdGFtcDogcGFyYW0uY3JlYXRlZF90aW1lLFxyXG4gICAgICAgIG1lc3NhZ2U6IFVSTC5jcmVhdGVPYmplY3RVUkwocGFyYW0uZGF0YSksXHJcbiAgICAgICAgbWVzc2FnZVR5cGU6IDJcclxuICAgICAgfSwgeyBpc19zZWxmOiB0cnVlLCBhdmF0YXI6IGRlZmF1bHRfYXZhdGFyfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGZhc3QgbWVzc2FnZSBsaXN0XHJcbiAgICB0aGlzLmZhc3RNZXNzYWdlTGlzdC5zZXRMaXN0ZW5lcignc2VsZWN0X21lc3NhZ2UnLCAocGFyYW0pID0+IHtcclxuICAgICAgbGV0IHsgY3JlYXRlZF90aW1lLCBkYXRhLCB0eXBlIH0gPSBwYXJhbTtcclxuICAgICAgU2VydmVyLnNlbmRNZXNzYWdlKHRoaXMuY3VyQ2hhdFJlY29yZExpc3QudWlkLCBkYXRhLCB0eXBlKTtcclxuICAgICAgdGhpcy5hcHBlbmRSZWNvcmRUb0xpc3Qoe1xyXG4gICAgICAgIHRpbWVzdGFtcDogY3JlYXRlZF90aW1lLFxyXG4gICAgICAgIG1lc3NhZ2U6IGRhdGEsXHJcbiAgICAgICAgbWVzc2FnZVR5cGU6IHR5cGVcclxuICAgICAgfSwgeyBpc19zZWxmOiB0cnVlLCBhdmF0YXI6IGRlZmF1bHRfYXZhdGFyfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVDdXJVc2VyUHJvZmlsZSggdWlkICkge1xyXG4gICAgdGhpcy51c2VyUHJvZmlsZS5oaWRlKCk7XHJcbiAgICBsZXQgcHJvZmlsZSA9IHRoaXMuVXNlclByb2ZpbGVNYXAuZ2V0KHVpZCk7XHJcbiAgICBpZiAoIXByb2ZpbGUpIHtcclxuICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgU2VydmVyLmdldFVzZXJQcm9maWxlKHVpZCk7XHJcbiAgICAgIHByb2ZpbGUgPSBkYXRhO1xyXG4gICAgICB0aGlzLlVzZXJQcm9maWxlTWFwLnNldCh1aWQsIHByb2ZpbGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51c2VyUHJvZmlsZS51cGRhdGVQcm9maWxlKHByb2ZpbGUgfHwge30pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgVXNlckluZm8gfSB1c2VyIFxyXG4gICAqL1xyXG4gIGFzeW5jIG5vdGlmeVVzZXJDaGFuZWQoIHVzZXIgKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUN1clVzZXJQcm9maWxlKHVzZXIudWlkKTtcclxuICAgIGNvbnNvbGUubG9nKCdub3RpZnlVc2VyQ2hhbmVkOiAnLCB1c2VyKTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuO1xyXG4gICAgbGV0IHsgdWlkLCBhdmF0YXIgfSA9IHVzZXI7XHJcbiAgICB0aGlzLmN1ckNoYXRSZWNvcmRMaXN0Py5oaWRlKCk7XHJcbiAgICBsZXQgY3VyQ2hhdFJlY29yZExpc3QgPSB0aGlzLlJlY29yZExpc3RNYXAuZ2V0KHVpZCk/Lmxpc3Q7XHJcbiAgICBpZiggIWN1ckNoYXRSZWNvcmRMaXN0ICkge1xyXG4gICAgICBjdXJDaGF0UmVjb3JkTGlzdCA9IG5ldyBDaGF0UmVjb3JkTGlzdCh1aWQpO1xyXG4gICAgICB0aGlzLmNvbmZpZy5lbGUuaW5zZXJ0QmVmb3JlKGN1ckNoYXRSZWNvcmRMaXN0LmdldEVsZW1lbnQoKSwgdGhpcy5mYXN0TWVzc2FnZUxpc3QuZ2V0RWxlbWVudCgpKTtcclxuICAgICAgdGhpcy5SZWNvcmRMaXN0TWFwLnNldCh1aWQsIHtcclxuICAgICAgICBsaXN0OiBjdXJDaGF0UmVjb3JkTGlzdFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IHsgc3RhdHVzLCBkYXRhIH0gPSBhd2FpdCBTZXJ2ZXIuZ2V0VXNlck1lc3NhZ2VEZXRhaWwoe1xyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICByZWxhdGVVaWQ6IHVpZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnZVNpemU6IDIwLCBcclxuICAgICAgICBwYWdlTnVtOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoc3RhdHVzICE9PSAwIHx8ICFBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm47XHJcbiAgICAgIGRhdGEucmV2ZXJzZSgpO1xyXG4gICAgICBjdXJDaGF0UmVjb3JkTGlzdC5hcHBlbmRSZWNvcmQoZGF0YSwge1xyXG4gICAgICAgIGlzX3NlbGY6IGZhbHNlLCBhdmF0YXI6IGF2YXRhclxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UgZGV0YWlsOiAnLCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8qKiDngrnlh7vlr7nor53nm7TmjqXliLfmlrAgKi9cclxuICAgIC8vIGxldCB7IHN0YXR1cywgZGF0YSB9ID0gYXdhaXQgU2VydmVyLmdldFVzZXJNZXNzYWdlRGV0YWlsKHtcclxuICAgIC8vICAgcXVlcnk6IHtcclxuICAgIC8vICAgICByZWxhdGVVaWQ6IHVpZFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBwYWdlU2l6ZTogMjAsIFxyXG4gICAgLy8gICBwYWdlTnVtOiAxXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGlmIChzdGF0dXMgIT09IDAgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkpIHJldHVybjtcclxuICAgIC8vIGRhdGEucmV2ZXJzZSgpO1xyXG4gICAgLy8gY3VyQ2hhdFJlY29yZExpc3QuYXBwZW5kUmVjb3JkKGRhdGEsIHtcclxuICAgIC8vICAgaXNfc2VsZjogZmFsc2UsIGF2YXRhcjogYXZhdGFyXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdtZXNzYWdlIGRldGFpbDogJywgZGF0YSk7XHJcbiAgICAvKiogICovXHJcblxyXG4gICAgdGhpcy5SZWNvcmRMaXN0TWFwLmZvckVhY2goIG9iaiA9PiB7XHJcbiAgICAgIGlmIChvYmoubGlzdC51aWQgIT09IHVpZCkgb2JqLmxpc3QuaGlkZSgpO1xyXG4gICAgICBlbHNlIGNvbnNvbGUubG9nKCdTYW1lIFVJRCwgYnJlYWsuJylcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jdXJDaGF0UmVjb3JkTGlzdCA9IGN1ckNoYXRSZWNvcmRMaXN0O1xyXG4gICAgY3VyQ2hhdFJlY29yZExpc3Quc2hvdygpO1xyXG4gICAgY3VyQ2hhdFJlY29yZExpc3QuZ2V0RWxlbWVudCgpLnNjcm9sbFRvcCA9IGN1ckNoYXRSZWNvcmRMaXN0LmdldEVsZW1lbnQoKS5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIENoYXRSb29tXHJcbn0iLCJpbXBvcnQgeyBWaWV3VW5pdCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy91bml0L1ZpZXdVbml0LmpzJztcclxuXHJcbmNsYXNzIEZhc3RNZXNzYWdlTGlzdCB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgaWQ6IFN0cmluZywgY2xhc3NMaXN0OiBTdHJpbmdbXSwgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgdGV4dF9saXN0OiBIVE1MRWxlbWVudCwgaW1hZ2VfbGlzdDogSFRNTEVsZW1lbnRcclxuICAgKiB9fVxyXG4gICAqL1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIGlkOiAnZmFzdF9tZXNzYWdlX2xpc3Rfd3JhcCcsXHJcbiAgICBjbGFzc0xpc3Q6IFsnZmFzdC1tZXNzYWdlLWxpc3Qtd3JhcCddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgdGV4dF9saXN0OiBudWxsLFxyXG4gICAgaW1hZ2VfbGlzdDogbnVsbCxcclxuICB9XHJcblxyXG4gIG9uID0ge1xyXG4gICAgc2VsZWN0X21lc3NhZ2U6IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkLCBjbGFzc0xpc3Qpe1xyXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHRoaXMuY29uZmlnLmlkID0gaWQ7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpKSB0aGlzLmNvbmZpZy5jbGFzc0xpc3QucHVzaCguLi5jbGFzc0xpc3QpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLmNvbmZpZy50ZXh0X2xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIHRoYXQubm90aWZ5TGlzdGVuZXIoJ3NlbGVjdF9tZXNzYWdlJywge1xyXG4gICAgICAgIGNyZWF0ZWRfdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgIGRhdGE6IHRhcmdldC5pbm5lclRleHQsXHJcbiAgICAgICAgICB0eXBlOiAwXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbmZpZy5pbWFnZV9saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICBpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXRlbScpKSByZXR1cm47XHJcbiAgICAgIHRoYXQubm90aWZ5TGlzdGVuZXIoJ3NlbGVjdF9tZXNzYWdlJywge1xyXG4gICAgICAgIGNyZWF0ZWRfdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgIGRhdGE6IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxyXG4gICAgICAgICAgdHlwZTogMlxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmFzdFRleHRMaXN0KCl7XHJcbiAgICBsZXQgYXJyID0gW1xyXG4gICAgICAnSGVsbG8gdGhlcmUsIGhvdyBtYXkgSSBoZWxwIHlvdT8nLFxyXG4gICAgICBgSGVsbG8gdGhlcmUsIHBsZWFzZSBsZXQgbWUga25vdyBpZiB5b3UgaGF2ZSBhbnkgcHJvYmxlbXMgd2hpbGUgdXNpbmcgdGhlIGFwcC4gSSBhbSBhbHdheXMgaGVyZSB0byBoZWxwLiA6KVxyXG5cclxuICAgICAgQmVzdCxcclxuICAgICAgRW1pbHlgLFxyXG4gICAgICAnVGhhbmtzLicsXHJcbiAgICAgICdQbGVhc2UgdHJ5IHRvIHJlZnJlc2ggeW91ciBXYWxsZXQgcGFnZS4gSWYgeW91IHN0aWxsIGNhbm5vdCBzZWUgdGhlIGJhbGFuY2UsIHBsZWFzZSBwcm92aWRlIHRoZSBwdXJjaGFzaW5nIHJlY29yZCBzY3JlZW5zaG90IGZvciBvdXIgcmVmZXJlbmNlLicsXHJcbiAgICAgICdZb3VyIGFjY291bnQgd291bGQgYmUgZGVsZXRlZCBpbiAxMCBtaW51dGVzLiBQbGVhc2UgZG8gbm90IGxvZ2luIGFnYWluLCB5b3VyIGFjY291bnQgd291bGQgYmUgcmVhY3RpdmF0ZWQuJyxcclxuICAgICAgJ0FsbCBvdXIgdXNlcnMgYXJlIHZlcmlmaWVkLiBJZiB5b3UgdGhpbmsgc29tZW9uZSBpcyBmYWtlLCB5b3UgY291bGQgbWFrZSBhIHJlcG9ydC4gWW91IG1heSBjbGljayB0aGUgYnV0dG9uIG9uIHRoZSB0b3AgcmlnaHQgY29ybmVyIHRvIGJsb2NrIGEgc3BlY2lmaWMgcGVyc29uIGFuZCBoZS9zaGUgd291bGQgbm90IHNob3cgb24geW91ciBwcm9maWxlIGFueW1vcmUuJyxcclxuICAgICAgJ1lvdSBtYXkgc3dpcGUgdG8gbWF0Y2ggd2l0aCB0aGUgcGVyc29uIHlvdSBsaWtlIGFuZCB0aGVuIHNlbmQgdGhlbSBtZXNzYWdlcyBmb3IgZnJlZS4gWW91IGNvdWxkIGV2ZW4gdmlkZW8gY2FsbCB0aGVtIHByaXZhdGVseS4gSG9wZSB5b3UgZW5qb3kgaXQhJyxcclxuICAgICAgJ1NvcnJ5IGl0IGlzIG5vdCBsb2NhdGlvbiBiYXNlZCBhcHAsIHdlIHByb3ZpZGUgd29yZHdpZGUgdXNlcnMgZm9yIG1hdGNoaW5nLicsXHJcbiAgICAgIGBTb3JyeSwgSSBtIGhlcmUgdG8gd29yayBzb2x2aW5nIHVzZXJzJyBwcm9ibGVtcyBvbmx5IDopYCxcclxuICAgICAgJ1lvdSBtYXkgYnV5IGRpYW1vbmRzIGluIHRoZSB3YWxsZXQuJyxcclxuICAgICAgYEhlbGxvLCBJIGFtIEVtaWx5LCBhbnl0aGluZyBJIGNhbiBoZWxwP1xyXG5cclxuICAgICAgOilgLFxyXG4gICAgICAnUGxlYXNlIHByb3ZpZGUgdGhlIHNjcmVlbnNob3Qgb2YgcHVyY2hhc2UgcmVjZWlwdCBzZW50IGJ5IEFwcGxlLiBZb3UgbWF5IGZpbmQgaXQgaW4geW91ciBlbWFpbC4nXHJcbiAgICBdO1xyXG4gICAgbGV0IGxpc3RIVE1MID0gW107XHJcbiAgICBhcnIuZm9yRWFjaCggdGV4dCA9PiB7XHJcbiAgICAgIGxpc3RIVE1MLnB1c2goYDxwIGNsYXNzPVwiaXRlbVwiPiR7dGV4dH08L3A+YCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBsaXN0SFRNTC5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIGZhc3RJbWFnZUxpc3QoKXtcclxuICAgIGxldCBhcnIgPSBbXHJcbiAgICAgICdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbGl2ZWh1Yi14eXovTGl2ZXR1YmVfdW5kZWZpbmVkXzIwMjEwMzI1MTA0OTU1X2NvdmVyLmpwZWcnLFxyXG4gICAgICAnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2xpdmVodWIteHl6L0xpdmV0dWJlX3VuZGVmaW5lZF8yMDIxMDMyNjAyMDc0Ml9jb3Zlci5qcGVnJyxcclxuICAgICAgJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9saXZlaHViLXh5ei9MaXZldHViZV91bmRlZmluZWRfMjAyMTAzMjYwMjA4NDZfY292ZXIuanBlZycsXHJcbiAgICAgICdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbGl2ZWh1Yi14eXovTGl2ZXR1YmVfdW5kZWZpbmVkXzIwMjEwMzI2MDIwOTE3X2NvdmVyLmpwZWcnXHJcbiAgICBdO1xyXG4gICAgbGV0IGxpc3RIVE1MID0gW107XHJcbiAgICBhcnIuZm9yRWFjaCggdGV4dCA9PiB7XHJcbiAgICAgIGxpc3RIVE1MLnB1c2goYFxyXG4gICAgICA8aW1nIGNsYXNzPVwiaXRlbVwiIHNyYz1cIiR7dGV4dH1cIiAvPlxyXG4gICAgICA8aW1nIGNsYXNzPVwicHJldmlld1wiIHNyYz1cIiR7dGV4dH1cIiAvPlxyXG4gICAgICBgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3RIVE1MLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKXtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIGxldCBlbGUgPSBjb25maWcuZWxlO1xyXG4gICAgaWYgKGVsZSkgcmV0dXJuO1xyXG4gICAgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGUuaWQgPSBjb25maWcuaWQ7XHJcbiAgICBlbGUuY2xhc3NMaXN0LmFkZCguLi5jb25maWcuY2xhc3NMaXN0KTtcclxuICAgIGNvbmZpZy5lbGUgPSBlbGU7XHJcbiAgICBlbGUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IGNoZWNrZWQ9XCJ0cnVlXCIgaWQ9XCJmYXN0X21lc3NhZ2VfbGlzdF9zd2l0Y2hfaW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCIgZm9yPVwiZmFzdF9tZXNzYWdlX2xpc3Rfc3dpdGNoX2lucHV0XCI+XHJcbiAgICAgIDxwPjwvcD5cclxuICAgIDwvbGFiZWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmFzdC1tZXNzYWdlLWxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtbGlzdFwiPlxyXG4gICAgICAgICR7dGhpcy5mYXN0VGV4dExpc3QoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1saXN0XCI+XHJcbiAgICAgICAgJHt0aGlzLmZhc3RJbWFnZUxpc3QoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25maWcudGV4dF9saXN0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWxpc3QnKTtcclxuICAgIGNvbmZpZy5pbWFnZV9saXN0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1saXN0Jyk7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgJ3NlbGVjdF9tZXNzYWdlJyB9IGV2ZW50X25hbWUgXHJcbiAgICogQHBhcmFtIHsgRnVuY3Rpb24oeyBjcmVhdGVkX3RpbWU6IE51bWJlciwgZGF0YTogU3RyaW5nLCB0eXBlOiAndGV4dCcgfCAnaW1hZ2UnIH0pIH0gY2FsbGJhY2sgXHJcbiAgICovXHJcbiAgc2V0TGlzdGVuZXIoIGV2ZW50X25hbWUsIGNhbGxiYWNrICkge1xyXG4gICAgdGhpcy5vbltldmVudF9uYW1lXSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnc2VsZWN0X21lc3NhZ2UnIH0gZXZlbnRfbmFtZSBcclxuICAgKiBAcGFyYW0geyB7IGNyZWF0ZWRfdGltZTogTnVtYmVyLCBkYXRhOiBTdHJpbmcsIHR5cGU6ICd0ZXh0JyB8ICdpbWFnZScgfSB9IHBhcmFtIFxyXG4gICAqL1xyXG4gIG5vdGlmeUxpc3RlbmVyKCBldmVudF9uYW1lLCBwYXJhbSApIHtcclxuICAgIGxldCBjYWxsYmFjayA9IHRoaXMub25bZXZlbnRfbmFtZV07XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhwYXJhbSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEZhc3RNZXNzYWdlTGlzdFxyXG59IiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4uL1ZpZXcnO1xyXG5pbXBvcnQgeyBPYmplY3RVbml0IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL3VuaXQvT2JqZWN0VW5pdC5qcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzJztcclxuXHJcbnZhciBzZXJpYWxfbnVtYmVyID0gMTtcclxuXHJcbmNsYXNzIFVzZXJXcmFwIHtcclxuICAvKipAdHlwZSB7IFVzZXJJbmZvIH0gKi9cclxuICB1c2VyO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHt7XHJcbiAgICogIGNsYXNzTGlzdDogU3RyaW5nW10sXHJcbiAgICogIGVsZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIGlucHV0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgYmFkZ2U6IEhUTUxFbGVtZW50LFxyXG4gICAqICBsYXN0X21lc3NhZ2U6IEhUTUxFbGVtZW50LFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgY2xhc3NMaXN0OiBbJ3VzZXItd3JhcCddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgaW5wdXQ6IG51bGwsXHJcbiAgICBiYWRnZTogbnVsbCxcclxuICAgIGxhc3RfbWVzc2FnZTogbnVsbFxyXG4gIH1cclxuXHJcbiAgb24gPSB7XHJcbiAgICBjaGFuZ2U6IG51bGwsXHJcbiAgICBzZWxlY3RlZDogbnVsbCxcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7IFVzZXJJbmZvIH0gdXNlciBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggdXNlciApe1xyXG4gICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuICBcclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGlhbW9uZFN0YXIoZGlhbW9uZCwgc3Rhcil7XHJcbiAgICBpZiAoZGlhbW9uZDwxICYmIHN0YXIgPCAxKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gYDxwIGNsYXNzPVwiZGlhbW9uZC1hbmQtc3RhclwiPmRpbW9uZDogJHtkaWFtb25kfSAvIGNvbnN1bWU6ICR7c3Rhcn08L3A+YDtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAoT2JqZWN0VW5pdC5pc0VtcHR5T2JqZWN0KHRoaXMudXNlcikpIHJldHVybjtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdVc2VyV3JhcC5pbml0VmlldzogJywgeyB1c2VyOiB0aGlzLnVzZXIsIGNvbmZpZzogdGhpcy5jb25maWd9KTtcclxuICAgIGxldCB1c2VyID0gdGhpcy51c2VyO1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IGVsZSA9IGNvbmZpZy5lbGU7XHJcbiAgICBpZiAoIGVsZSApIHJldHVybjtcclxuICAgIGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBlbGUuY2xhc3NMaXN0LmFkZCguLi5jb25maWcuY2xhc3NMaXN0KTtcclxuICAgIGVsZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXQgdWlkPVwiJHt1c2VyLnVpZH1cIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwibGlzdC11c2VyXCIgPlxyXG4gICAgPGRpdiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlcmlhbCAke3VzZXIuZGlhbW9uZCA+IDAgPyAnZGlhbW9uZCcgOiAnJ31cIj4ke3NlcmlhbF9udW1iZXIrK308L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci13cmFwICR7dXNlci5zdGFyID4gMCA/ICdzdGFyJyA6ICcnfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0YW5nbGUtYm94IHNxdWFyZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhciBubzFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3VzZXIuYXZhdGFyfVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZSBubzJcIj7CtzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utd3JhcFwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cIm5hbWVcIj4ke3VzZXIubmlja25hbWV9PC9oMj5cclxuICAgICAgICA8cCBjbGFzcz1cImxhc3QtbWVzc2FnZVwiPiR7dXNlci5sYXN0TWVzc2FnZX08L3A+XHJcbiAgICAgICAgJHt0aGlzLnJlbmRlckRpYW1vbmRTdGFyKHVzZXIuZGlhbW9uZCwgdXNlci5zdGFyKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gICAgY29uZmlnLmJhZGdlID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZScpO1xyXG4gICAgY29uZmlnLmlucHV0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICBjb25maWcubGFzdF9tZXNzYWdlID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LW1lc3NhZ2UnKTtcclxuICB9XHJcblxyXG4gIGJpbmRMaXN0ZW5lcigpe1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhpcy5jb25maWcuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IGlzX2NoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XHJcbiAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICBpc19jaGVja2VkLFxyXG4gICAgICAgIHVpZDogdGhhdC51c2VyLnVpZFxyXG4gICAgICB9XHJcbiAgICAgIHRoYXQubm90aWZ5TGlzdGVuZXIoJ2NoYW5nZScsIHBhcmFtKTtcclxuICAgICAgdGhhdC5ub3RpZnlMaXN0ZW5lcignc2VsZWN0ZWQnLCBwYXJhbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgJ2NoYW5nZScgfCAnc2VsZWN0ZWQnIH0gZXZlbnRfbmFtZSBcclxuICAgKiBAcGFyYW0geyBGdW5jdGlvbih7IGlzX2NoZWNrZWQ6IEJvb2xlYW4sIHVpZDogU3RyaW5nIH0pIH0gY2FsbGJhY2sgXHJcbiAgICovXHJcbiAgc2V0TGlzdGVuZXIoIGV2ZW50X25hbWUsIGNhbGxiYWNrICkge1xyXG4gICAgdGhpcy5vbltldmVudF9uYW1lXSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnY2hhbmdlJyB8ICdzZWxlY3RlZCcgfSBldmVudF9uYW1lXHJcbiAgICogQHBhcmFtIHsgeyBpc19jaGVja2VkOiBCb29sZWFuLCB1aWQ6IFN0cmluZyB9IH0gcGFyYW1cclxuICAgKi9cclxuICBub3RpZnlMaXN0ZW5lciggZXZlbnRfbmFtZSwgcGFyYW0gKSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm9uW2V2ZW50X25hbWVdO1xyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2socGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tlZCgpe1xyXG4gICAgdGhpcy5jb25maWcuaW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVCYWRnZSggbnVtICkge1xyXG4gICAgbGV0IGJhZGdlID0gdGhpcy5jb25maWcuYmFkZ2U7XHJcbiAgICBpZiAoIG51bSA+IDApIHtcclxuICAgICAgYmFkZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1lbGUnKTtcclxuICAgICAgYmFkZ2UuaW5uZXJUZXh0ID0gbnVtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFkZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZS1lbGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUxhc3RNZXNzYWdlKCBtZXNzYWdlICkge1xyXG4gICAgdGhpcy5jb25maWcubGFzdF9tZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnJyB8ICdkaWFtb25kJyB8ICdzdGFyJyB9IGZpbHRlclxyXG4gICAqL1xyXG4gIGhpZGUoIGZpbHRlciwgcmVzZXJ2ZSApe1xyXG4gICAgbGV0IGZsYWcgPSBcIlwiO1xyXG4gICAgaWYgKHJlc2VydmUpIHtcclxuICAgICAgZmxhZyA9ICduby0nK2ZpbHRlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3aXRjaCggZmlsdGVyICkge1xyXG4gICAgICAgIGNhc2UgJ2RpYW1vbmQnOiB7XHJcbiAgICAgICAgICBmbGFnID0gdGhpcy51c2VyLmRpYW1vbmQgPiAwID8gJycgOiAnbm8tZGlhbW9uZCc7XHJcbiAgICAgICAgfTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAgICAnc3Rhcic6IHtcclxuICAgICAgICAgIGZsYWcgPSB0aGlzLnVzZXIuc3RhciA+IDAgPyAnJyA6ICduby1zdGFyJztcclxuICAgICAgICB9OyBicmVhaztcclxuICAgICAgICBkZWZhdWx0IDogZmxhZyA9ICdoaWRlLWVsZSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdVc2VyV3JhcC5oaWRlOiAnLCB7IGZpbHRlciwgcmVzZXJ2ZSwgZmxhZywgbGlzdDogdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdH0pO1xyXG4gICAgLy8gcmV0dXJuO1xyXG4gICAgaWYgKCFmbGFnKSByZXR1cm47XHJcbiAgICBpZiAocmVzZXJ2ZSkge1xyXG4gICAgICB0aGlzLmNvbmZpZy5lbGU/LmNsYXNzTGlzdC5yZW1vdmUoZmxhZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbmZpZy5lbGU/LmNsYXNzTGlzdC5hZGQoZmxhZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnJyB8ICdkaWFtb25kJyB8ICdzdGFyJyB9IGZpbHRlclxyXG4gICAqL1xyXG4gIHNob3coIGZpbHRlciwgZGlhbW9uZF9vcl9zdGFyICl7XHJcbiAgICBpZiAoZGlhbW9uZF9vcl9zdGFyKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZXIuZGlhbW9uZCA+IDAgfHwgdGhpcy51c2VyLnN0YXIgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpYW1vbmQnLCAnbm8tc3RhcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmVsZS5jbGFzc0xpc3QuYWRkKCduby1kaWFtb25kJywgJ25vLXN0YXInKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmhpZGUoIGZpbHRlciwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFVzZXJXcmFwXHJcbn0iLCJpbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzJztcclxuaW1wb3J0IHsgVXNlcldyYXAgfSBmcm9tICcuL1VzZXJXcmFwLmpzJztcclxuaW1wb3J0IHsgT2JqZWN0VW5pdCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy91bml0L09iamVjdFVuaXQuanMnO1xyXG5cclxuY2xhc3MgVXNlckxpc3Qge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHt7XHJcbiAgICogIGlkOiBTdHJpbmcsIGNsYXNzTGlzdDogU3RyaW5nW10sIGVsZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIG1vcmVfbGlzdF93cmFwOiBIVE1MRWxlbWVudCwgbW9yZV9saXN0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgZmlsdGVyX2RpYW1vbmQ6IEhUTUxFbGVtZW50LCBmaWx0ZXJfc3RhcjogSFRNTEVsZW1lbnQsZmlsdGVyX2FsbDpIVE1MRWxlbWVudCxcclxuICAgKiAgZmlsdGVyOiB7XHJcbiAgICogICAgZGlhbW9uZDogQm9vbGVhbiwgc3RhcjogQm9vbGVhbixhbGw6Qm9vbGVhbixcclxuICAgKiAgfVxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgaWQ6ICd1c2VyX2xpc3QnLFxyXG4gICAgY2xhc3NMaXN0OiBbJ3VzZXItbGlzdCddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgbW9yZV9saXN0X3dyYXA6IG51bGwsXHJcbiAgICBtb3JlX2xpc3Q6IG51bGwsXHJcbiAgICBmaWx0ZXJfZ3JpZDpudWxsLFxyXG4gICAgZmlsdGVyX2RpYW1vbmQ6IG51bGwsXHJcbiAgICBmaWx0ZXJfc3RhcjogbnVsbCxcclxuICAgIGZpbHRlcl9hbGw6IG51bGwsXHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgZGlhbW9uZDogdHJ1ZSxcclxuICAgICAgc3RhcjogdHJ1ZSxcclxuICAgICAgYWxsOiBmYWxzZSxcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHR5cGUgeyBNYXA8U3RyaW5nLCB7XHJcbiAgICogIGNyZWF0ZWRfdGltZTogTnVtYmVyLFxyXG4gICAqICB1cGRhdGVkX3RpbWU6IE51bWJlcixcclxuICAgKiAgdXNlcjogVXNlckluZm8sXHJcbiAgICogIHVzZXJfd3JhcDogVXNlcldyYXAsXHJcbiAgICogfT4gfVxyXG4gICAqL1xyXG4gIFVzZXJNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIG9uID0ge1xyXG4gICAgY2hhbmdlZF91c2VyOiBudWxsLFxyXG4gICAgbW9yZV9saXN0OiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NMaXN0KSB7XHJcbiAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykgdGhpcy5jb25maWcuaWQgPSBpZDtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHRoaXMuY29uZmlnLmNsYXNzTGlzdC5wdXNoKC4uLmNsYXNzTGlzdCk7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKSB7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gY29uZmlnLmVsZTtcclxuICAgIGlmIChlbGUpIHJldHVybjtcclxuICAgIGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmlkID0gY29uZmlnLmlkO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gICAgZWxlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItZ3JpZFwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmaWx0ZXJcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtjb25maWcuZmlsdGVyLmRpYW1vbmQgPyAnY2hlY2tlZCcgOiAnJ30gbmFtZT1cImZpbHRlci1kaWFtb25kXCIgLz5cclxuICAgICAgICA8c3Bhbj7mnInpkrvnn7M8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImZpbHRlclwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke2NvbmZpZy5maWx0ZXIuc3RhciA/ICdjaGVja2VkJyA6ICcnfSBuYW1lPVwiZmlsdGVyLXN0YXJcIiAvPlxyXG4gICAgICAgIDxzcGFuPuaciea2iOi0uTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7Y29uZmlnLmZpbHRlci5hbGwgPyAnY2hlY2tlZCcgOiAnJ30gbmFtZT1cImZpbHRlci1hbGxcIiAvPlxyXG4gICAgICAgIDxzcGFuPuaJgOaciTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vcmUtbGlzdC13cmFwXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb3JlLWxpc3RcIj5tb3JlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25maWcubW9yZV9saXN0X3dyYXAgPSBlbGUucXVlcnlTZWxlY3RvcignLm1vcmUtbGlzdC13cmFwJyk7XHJcbiAgICBjb25maWcubW9yZV9saXN0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLWxpc3QnKTtcclxuICAgIGNvbmZpZy5maWx0ZXJfZGlhbW9uZCA9IGVsZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZmlsdGVyLWRpYW1vbmRcIl0nKTtcclxuICAgIGNvbmZpZy5maWx0ZXJfc3RhciA9IGVsZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZmlsdGVyLXN0YXJcIl0nKTtcclxuICAgIGNvbmZpZy5maWx0ZXJfYWxsID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJmaWx0ZXItYWxsXCJdJyk7XHJcbiAgICBjb25maWcuZmlsdGVyX2dyaWQ9ZWxlLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItZ3JpZCcpO1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCkge1xyXG4gICAgLy8gbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IG1vcmVMaXN0ZW5lciA9ICgoKSA9PiB7XHJcbiAgICAgIGxldCB0aW1lcjtcclxuICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmxhZykgcmV0dXJuO1xyXG4gICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVyKCdtb3JlX2xpc3QnKTtcclxuICAgICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIHRoaXMuY29uZmlnLm1vcmVfbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbW9yZUxpc3RlbmVyKHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBmaWx0ZXJcclxuICAgIHRoaXMuY29uZmlnLmZpbHRlcl9ncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIHRoaXMuY29uZmlnLmZpbHRlcl9kaWFtb25kLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgbGV0IGlzX2NoZWNrZWQgPSB0aGlzLmNvbmZpZy5maWx0ZXJfZGlhbW9uZC5jaGVja2VkO1xyXG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXIuZGlhbW9uZCA9IGlzX2NoZWNrZWQ7XHJcbiAgICAgIC8vIGlmKHRoaXMuY29uZmlnLmZpbHRlci5kaWFtb25kKXtcclxuICAgICAgLy8gICB0aGlzLmNvbmZpZy5maWx0ZXJfYWxsLmNoZWNrZWQ9ZmFsc2U7XHJcbiAgICAgIC8vIH1cclxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcignZmlsdGVyX2RpYW1vbmQnLCB7IGlzX2NoZWNrZWQgfSk7XHJcbiAgICAgIC8vIHRoaXMuVXNlck1hcC5mb3JFYWNoKCB1c2VyID0+IHtcclxuICAgICAgLy8gICBpZiAodGhpcy5jb25maWcuZmlsdGVyLmRpYW1vbmQgJiYgdGhpcy5jb25maWcuZmlsdGVyLnN0YXIpIHtcclxuICAgICAgLy8gICAgIHVzZXIudXNlcl93cmFwLnNob3coJycsIHRydWUpO1xyXG4gICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBpc19jaGVja2VkID8gdXNlci51c2VyX3dyYXAuaGlkZSgnZGlhbW9uZCcpIDogdXNlci51c2VyX3dyYXAuc2hvdygnZGlhbW9uZCcpO1xyXG4gICAgICAvLyB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb25maWcuZmlsdGVyX3N0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBsZXQgaXNfY2hlY2tlZCA9IHRoaXMuY29uZmlnLmZpbHRlcl9zdGFyLmNoZWNrZWQ7XHJcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlci5zdGFyID0gaXNfY2hlY2tlZDtcclxuICAgICAgLy8gaWYodGhpcy5jb25maWcuZmlsdGVyLnN0YXIpe1xyXG4gICAgICAvLyAgIHRoaXMuY29uZmlnLmZpbHRlcl9hbGwuY2hlY2tlZD1mYWxzZTtcclxuICAgICAgLy8gfVxyXG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVyKCdmaWx0ZXJfc3RhcicsIHsgaXNfY2hlY2tlZCB9KTtcclxuICAgICAgLy8gdGhpcy5Vc2VyTWFwLmZvckVhY2goIHVzZXIgPT4ge1xyXG4gICAgICAvLyAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXIuZGlhbW9uZCAmJiB0aGlzLmNvbmZpZy5maWx0ZXIuc3Rhcikge1xyXG4gICAgICAvLyAgICAgdXNlci51c2VyX3dyYXAuc2hvdygnJywgdHJ1ZSk7XHJcbiAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIGlzX2NoZWNrZWQgPyB1c2VyLnVzZXJfd3JhcC5oaWRlKCdzdGFyJykgOiB1c2VyLnVzZXJfd3JhcC5zaG93KCdzdGFyJyk7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbmZpZy5maWx0ZXJfYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgbGV0IGlzX2NoZWNrZWQgPSB0aGlzLmNvbmZpZy5maWx0ZXJfYWxsLmNoZWNrZWQ7XHJcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlci5hbGwgPSBpc19jaGVja2VkO1xyXG4gICAgICAvLyBpZiAodGhpcy5jb25maWcuZmlsdGVyLmFsbCkge1xyXG4gICAgICAvLyAgIHRoaXMuY29uZmlnLmZpbHRlcl9kaWFtb25kLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgLy8gICB0aGlzLmNvbmZpZy5maWx0ZXJfc3Rhci5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIC8vIH1cclxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcignZmlsdGVyX2FsbCcsIHsgaXNfY2hlY2tlZCB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBVc2VySW5mbyB9IHVzZXIgXHJcbiAgICovXHJcbiAgYXBwZW5kVXNlcih1c2VyKSB7XHJcbiAgICBpZiAoT2JqZWN0VW5pdC5pc0VtcHR5T2JqZWN0KHVzZXIpKSByZXR1cm47XHJcbiAgICBsZXQgY3VyID0gdGhpcy5Vc2VyTWFwLmdldCh1c2VyLnVpZCk7XHJcbiAgICBpZiAoIWN1cikge1xyXG4gICAgICBjdXIgPSB7XHJcbiAgICAgICAgY3JlYXRlZF90aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgfVxyXG4gICAgICBjdXIudXNlcl93cmFwID0gbmV3IFVzZXJXcmFwKHVzZXIpO1xyXG4gICAgICBjdXIudXNlcl93cmFwLnNldExpc3RlbmVyKCdzZWxlY3RlZCcsIChwYXJhbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuVXNlck1hcC5nZXQodXNlci51aWQpLnVzZXJfd3JhcC51cGRhdGVCYWRnZSgwKTtcclxuICAgICAgICBpZiAoIXBhcmFtLmlzX2NoZWNrZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVyKCdjaGFuZ2VkX3VzZXInLCB7XHJcbiAgICAgICAgICBpc19jaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgdXNlcjogdXNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmluc2VydEJlZm9yZShjdXIudXNlcl93cmFwLmdldEVsZW1lbnQoKSwgdGhpcy5jb25maWcubW9yZV9saXN0X3dyYXApO1xyXG4gICAgICB0aGlzLlVzZXJNYXAuc2V0KHVzZXIudWlkLCBjdXIpO1xyXG4gICAgfVxyXG4gICAgY3VyLnVzZXJfd3JhcC51cGRhdGVCYWRnZSh1c2VyLnVuUmVhZENvdW50KTtcclxuICAgIGN1ci51c2VyX3dyYXAudXBkYXRlTGFzdE1lc3NhZ2UodXNlci5sYXN0TWVzc2FnZSk7XHJcbiAgICBjdXIudXBkYXRlZF90aW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGN1ci51c2VyID0gdXNlcjtcclxuICAgIGlmICh0aGlzLlVzZXJNYXAuc2l6ZSA9PT0gMSkge1xyXG4gICAgICBjdXIudXNlcl93cmFwLmNoZWNrZWQoKTtcclxuICAgICAgY3VyLnVzZXJfd3JhcC51cGRhdGVCYWRnZSgwKTtcclxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcignY2hhbmdlZF91c2VyJywgeyBpc19jaGVja2VkOiB0cnVlLCB1c2VyOiBjdXIudXNlciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdjaGFuZ2VkX3VzZXInIHwgJ21vcmVfbGlzdCcgfCAnZmlsdGVyX2RpYW1vbmQnIHwgJ2ZpbHRlcl9zdGFyJyB8ICdmaWx0ZXJfYWxsJyB9IGV2ZW50X25hbWUgXHJcbiAgICogQHBhcmFtIHsgRnVuY3Rpb24oeyBpc19jaGVja2VkOiBCb29sZWFuLCB1aWQ6IFN0cmluZyB9KSB9IGNhbGxiYWNrIFxyXG4gICAqL1xyXG4gIHNldExpc3RlbmVyKGV2ZW50X25hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLm9uW2V2ZW50X25hbWVdID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdjaGFuZ2VkX3VzZXInIHwgJ21vcmVfbGlzdCcgfCAnZmlsdGVyX2RpYW1vbmQnIHwgJ2ZpbHRlcl9zdGFyJyB8ICdmaWx0ZXJfYWxsJyB9IGV2ZW50X25hbWUgXHJcbiAgICogQHBhcmFtIHsgRnVuY3Rpb24oeyBpc19jaGVja2VkOiBCb29sZWFuLCB1c2VyOiBVc2VySW5mbyB9KSB9IHBhcmFtIFxyXG4gICAqL1xyXG4gIG5vdGlmeUxpc3RlbmVyKGV2ZW50X25hbWUsIHBhcmFtKSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm9uW2V2ZW50X25hbWVdO1xyXG4gICAgY29uc29sZS5sb2coY2FsbGJhY2spO1xyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2socGFyYW0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VyTGlzdFxyXG59IiwiaW1wb3J0IHsgVmlld1VuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9WaWV3VW5pdC5qcyc7XHJcblxyXG5jbGFzcyBVc2VyUHJvZmlsZSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge3tcclxuICAgKiAgaWQ6IFN0cmluZywgY2xhc3NMaXN0OiBTdHJpbmdbXSwgZWxlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgdGV4dF9saXN0OiBIVE1MRWxlbWVudCwgaW1hZ2VfbGlzdDogSFRNTEVsZW1lbnQsXHJcbiAgICogIGluZm86IHtcclxuICAgKiAgICB1aWQ6IEhUTUxFbGVtZW50LCBkaWFtb25kOiBIVE1MRWxlbWVudCwgY3JlYXRlZEF0OiBIVE1MRWxlbWVudFxyXG4gICAqICB9XHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBpZDogJ3VzZXJfcHJvZmlsZV93cmFwJyxcclxuICAgIGNsYXNzTGlzdDogWyd1c2VyLXByb2ZpbGUtd3JhcCcsICdoaWRlLWVsZSddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgaW5mbzoge1xyXG4gICAgICB1aWQ6IG51bGwsXHJcbiAgICAgIGRpYW1vbmQ6IG51bGwsXHJcbiAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICBjcmVhdGVkQXQ6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgY2xhc3NMaXN0KXtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB0aGlzLmNvbmZpZy5pZCA9IGlkO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkgdGhpcy5jb25maWcuY2xhc3NMaXN0LnB1c2goLi4uY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVXNlclByb2ZpbGVIVE1MKCl7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb25maWcuaW5mbykge1xyXG4gICAgICBsZXQgaW5mb19lbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIGluZm9fZWxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nLCBrZXkpO1xyXG4gICAgICB0aGlzLmNvbmZpZy5pbmZvW2tleV0gPSBpbmZvX2VsZTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmFwcGVuZENoaWxkKGluZm9fZWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gY29uZmlnLmVsZTtcclxuICAgIGlmIChlbGUpIHJldHVybjtcclxuICAgIGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmlkID0gY29uZmlnLmlkO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4uY29uZmlnLmNsYXNzTGlzdCk7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gICAgdGhpcy5yZW5kZXJVc2VyUHJvZmlsZUhUTUwoKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyB7IHVpZDogU3RyaW5nLCBjcmVhdGVkQXQ6IFN0cmluZywgZGlhbW9uZDogTnVtYmVyfSB9IHByb2ZpbGUgXHJcbiAgICovXHJcbiAgdXBkYXRlUHJvZmlsZSggcHJvZmlsZSApe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZWxlJyk7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb25maWcuaW5mbykge1xyXG4gICAgICB0aGlzLmNvbmZpZy5pbmZvW2tleV0uaW5uZXJIVE1MID0gYDxzcGFuPiR7a2V5fTwvc3Bhbj46IDxiPiR7cHJvZmlsZVtrZXldfTwvYj5gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZWxlJyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VyUHJvZmlsZVxyXG59IiwiY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqL1xyXG4gIGluaXQoKXt9XHJcblxyXG4gIC8qKkBhYnN0cmFjdCAqL1xyXG4gIGluaXRWaWV3KCl7fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBWaWV3XHJcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpZiAodHlwZW9mIFByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcclxuICBhbGVydCgnWW91ciBCcm93c2VyIE5vdCBTdXBwb3J0IFByb21pc2UuJylcclxufVxyXG5pbXBvcnQgeyBVc2VyTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlckxpc3QnO1xyXG5pbXBvcnQgeyBDaGF0Um9vbSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2hhdFJvb20nO1xyXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9TZXJ2ZXInO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvJztcclxuLy8gaW1wb3J0IHsgT2JqZWN0VW5pdCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy91bml0L09iamVjdFVuaXQnO1xyXG5cclxuY29uc3QgdXNlcl9saXN0X2FyciA9IFtcclxuICB7XHJcbiAgICBpZDogMTAwMDEsXHJcbiAgICB1aWQ6IDEyMzQ1LFxyXG4gICAgbmlja25hbWU6ICdKYWNrIE1hJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vc3cuY29vbDNjLmNvbS91c2VyLzk5NTg4LzIwMTgvN2Y4YmIyNjAtOTQzYy00YjlkLWI1OGItNGVkNzgyYzg3NjFhLmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDAwMixcclxuICAgIHVpZDogMTIzNDYsXHJcbiAgICBuaWNrbmFtZTogJ1BvbnkgTWEnLFxyXG4gICAgYXZhdGFyOiAnaHR0cHM6Ly9zdy5jb29sM2MuY29tL3VzZXIvOTk1ODgvMjAxOC83ZjhiYjI2MC05NDNjLTRiOWQtYjU4Yi00ZWQ3ODJjODc2MWEuanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwMDAzLFxyXG4gICAgdWlkOiAxMjM0NyxcclxuICAgIG5pY2tuYW1lOiAnV2FuZyBKaWFubGluJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vc3cuY29vbDNjLmNvbS91c2VyLzk5NTg4LzIwMTgvN2Y4YmIyNjAtOTQzYy00YjlkLWI1OGItNGVkNzgyYzg3NjFhLmpwZydcclxuICB9XHJcbl1cclxuXHJcbmNsYXNzIFRoZVBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIC8qKkB0eXBlIHsgSFRNTEVsZW1lbnQgfSAqL1xyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgLyoqQHR5cGUgeyBIVE1MRWxlbWVudCB9ICovXHJcbiAgICBwYXJlbnQ6IG51bGwsXHJcbiAgICAvKipAdHlwZSB7IFN0cmluZyB9ICovXHJcbiAgICBwYXJlbnRfY3NzU2VsZWN0b3I6ICcjY2hhdF9ibG9jaycsXHJcbiAgICAvLyDliqDovb3oh7PnrKzlh6DpobXmnKror7vmtojmga/nlKjmiLfliJfooahcclxuICAgIHBhZ2VOdW06IHtcclxuICAgICAgdXNlcl9saXN0OiAyXHJcbiAgICB9LFxyXG4gICAgLy8g6aG16Z2i5piv5ZCm5Y+v6KeBXHJcbiAgICBwYWdlX3Zpc2libGU6IHRydWUsXHJcbiAgICAvKipAdHlwZSB7IHtkaWFtb25kOiBCb29sZWFuLCBzdGFyOiBCb29sZWFufSB9ICovXHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgZGlhbW9uZDogdHJ1ZSxcclxuICAgICAgc3RhcjogdHJ1ZSxcclxuICAgICAgYWxsOiBmYWxzZSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFscmVhZHkgPSB7XHJcbiAgICBpbml0OiB7XHJcbiAgICAgIHZpZXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKkB0eXBlIHsgVXNlckxpc3QgfSAqL1xyXG4gIHVzZXJMaXN0O1xyXG4gIC8qKkB0eXBlIHsgQ2hhdFJvb20gfSAqL1xyXG4gIGNoYXRSb29tO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51c2VyTGlzdCA9IG5ldyBVc2VyTGlzdCgpO1xyXG4gICAgdGhpcy5jaGF0Um9vbSA9IG5ldyBDaGF0Um9vbSgpO1xyXG4gICAgdGhpcy5jb25maWcuZmlsdGVyID0gdGhpcy51c2VyTGlzdC5jb25maWcuZmlsdGVyO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIFVzZXJJbmZvPiB9XHJcbiAgICovXHJcbiAgVXNlckluZm9NYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmdldE1lc3NhZ2VVc2VyTGlzdCgpO1xyXG4gICAgdGhpcy5iaW5kTGlzdGVuZXIoKTtcclxuICAgIHRoaXMuc3RhcnRNZXNzYWdlVXNlckxpc3RUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKSB7XHJcbiAgICBpZiAodGhpcy5hbHJlYWR5LmluaXQudmlldykgcmV0dXJuO1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBhcmVudF9jc3NTZWxlY3Rvcik7XHJcbiAgICBjb25maWcucGFyZW50ID0gcGFyZW50O1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMudXNlckxpc3QuZ2V0RWxlbWVudCgpKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNoYXRSb29tLmdldEVsZW1lbnQoKSk7XHJcbiAgICB0aGlzLmFscmVhZHkuaW5pdC52aWV3ID0gdHJ1ZTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcicsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLmZpbHRlcikpXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRNZXNzYWdlVXNlckxpc3QocGFnZU51bSA9IDEpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXIuYWxsKSB7XHJcbiAgICAgIGxldCB7IHN0YXR1cywgZGF0YSB9ID0gYXdhaXQgU2VydmVyLmdldEFsbFVzZXJMaXN0KHBhZ2VOdW0sIHVuZGVmaW5lZCwgdGhpcy5jb25maWcuZmlsdGVyLmRpYW1vbmQsIHRoaXMuY29uZmlnLmZpbHRlci5zdGFyKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCkgcmV0dXJuO1xyXG4gICAgICBsZXQgcmVjb3JkcyA9IGRhdGEucmVjb3JkcztcclxuICAgICAgY29uc29sZS5sb2coJ2FsbFVzZXJMaXN0OicsIHJlY29yZHMpO1xyXG4gICAgICByZWNvcmRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYi5kaWFtb25kIC0gYS5kaWFtb25kO1xyXG4gICAgICB9KVxyXG4gICAgICByZWNvcmRzLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgdXNlci5pZCA9IHVzZXIuVWlkO1xyXG4gICAgICAgIHRoaXMudXNlckxpc3QuYXBwZW5kVXNlcih1c2VyKTtcclxuICAgICAgICB0aGlzLlVzZXJJbmZvTWFwLnNldCh1c2VyLnVpZCwgdXNlcik7XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgeyBzdGF0dXMsIGRhdGEgfSA9IGF3YWl0IFNlcnZlci5nZXRVbnJlYWRNZXNzYWdlVXNlckxpc3QocGFnZU51bSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyLmRpYW1vbmQsIHRoaXMuY29uZmlnLmZpbHRlci5zdGFyKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCkgcmV0dXJuO1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0TWVzc2FnZVVzZXJMaXN0OiAnLCBkYXRhKTtcclxuICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGIuZGlhbW9uZCAtIGEuZGlhbW9uZDtcclxuICAgICAgfSk7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICB1c2VyLnVpZCA9IHVzZXIucmVsYXRlVWlkO1xyXG4gICAgICAgIHRoaXMudXNlckxpc3QuYXBwZW5kVXNlcih1c2VyKTtcclxuICAgICAgICB0aGlzLlVzZXJJbmZvTWFwLnNldCh1c2VyLnVpZCwgdXNlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRNZXNzYWdlVXNlckxpc3RUaW1lcigpIHtcclxuICAgIGxldCB1c3AgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBpZiAodXNwLmdldCgndGltZXInKSA9PT0gJ29uJykge1xyXG4gICAgICBsZXQgc2VjID0gfn51c3AuZ2V0KCdzZWMnKTtcclxuICAgICAgbGV0IGR1cmF0aW9uID0gc2VjID4gMTUgPyBzZWMgKiAxMDAwIDogMTUwMDA7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTdGFydCBUaW1lcjogJywgeyBkdXJhdGlvbiB9KTtcclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0TWVzc2FnZVVzZXJMaXN0KCk7XHJcbiAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRMaXN0ZW5lcigpIHtcclxuICAgIC8vIOWIh+aNouiBiuWkqeeUqOaIt1xyXG4gICAgdGhpcy51c2VyTGlzdC5zZXRMaXN0ZW5lcignY2hhbmdlZF91c2VyJywgKHBhcmFtKSA9PiB7XHJcbiAgICAgIGxldCB7IGlzX2NoZWNrZWQsIHVzZXIgfSA9IHBhcmFtO1xyXG4gICAgICBpZiAoaXNfY2hlY2tlZCkgdGhpcy5jaGF0Um9vbS5ub3RpZnlVc2VyQ2hhbmVkKHVzZXIpO1xyXG4gICAgfSk7XHJcbiAgICAvLyDmm7TlpJrmnKror7vmtojmga/nlKjmiLfliJfooahcclxuICAgIHRoaXMudXNlckxpc3Quc2V0TGlzdGVuZXIoJ21vcmVfbGlzdCcsICgpID0+IHtcclxuICAgICAgbGV0IHNlc3Npb25GaWx0ZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXInKTtcclxuICAgICAgbGV0IGZpbHRlclN0ciA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLmZpbHRlcik7XHJcbiAgICAgIGlmIChzZXNzaW9uRmlsdGVyID09PSBmaWx0ZXJTdHIpIHtcclxuICAgICAgICB0aGlzLmdldE1lc3NhZ2VVc2VyTGlzdCh0aGlzLmNvbmZpZy5wYWdlTnVtLnVzZXJfbGlzdCsrKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVyJyxKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZy5maWx0ZXIpKTtcclxuICAgICAgICB0aGlzLmNvbmZpZy5wYWdlTnVtLnVzZXJfbGlzdD0yO1xyXG4gICAgICAgIHRoaXMuZ2V0TWVzc2FnZVVzZXJMaXN0KDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIOajgOa1i+mhtemdouaYr+WQpuWPr+ingVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcclxuICAgICAgbGV0IHZpc2libGUgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGU7XHJcbiAgICAgIHRoaXMuY29uZmlnLnBhZ2VfdmlzaWJsZSA9PT0gKHZpc2libGUgPT09IFwidmlzaWJsZVwiKTtcclxuICAgIH0pO1xyXG4gICAgLy8g562b6YCJ55So5oi357G75Z6LXHJcbiAgICB0aGlzLnVzZXJMaXN0LnNldExpc3RlbmVyKCdmaWx0ZXJfZGlhbW9uZCcsIChwYXJhbSkgPT4ge1xyXG4gICAgICBsZXQgeyBpc19jaGVja2VkIH0gPSBwYXJhbTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy51c2VyTGlzdC5zZXRMaXN0ZW5lcignZmlsdGVyX3N0YXInLCAocGFyYW0pID0+IHtcclxuICAgICAgbGV0IHsgaXNfY2hlY2tlZCB9ID0gcGFyYW07XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXNlckxpc3Quc2V0TGlzdGVuZXIoJ2ZpbHRlcl9hbGwnLCAocGFyYW0pID0+IHtcclxuICAgICAgbGV0IHsgaXNfY2hlY2tlZCB9ID0gcGFyYW07XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdGhlUGFnZSA9IG5ldyBUaGVQYWdlKCk7XHJcbndpbmRvdy50aGVQYWdlID0gdGhlUGFnZTsiXSwibmFtZXMiOlsiRGF0ZVVuaXQiLCJNZXNzYWdlIiwibWVzc2FnZV9vYmoiLCJ1c2VyX2luZm8iLCJpc19zZWxmIiwiYXZhdGFyIiwiZWxlIiwiY2xhc3NMaXN0IiwiaWQiLCJ0aW1lc3RhbXAiLCJtZXNzYWdlIiwibWVzc2FnZVR5cGUiLCJpbml0IiwiaW5pdFZpZXciLCJ0eXBlIiwicmVzdWx0IiwiY29uZmlnIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiZm9ybWF0IiwicmVuZGVyTWVzc2FnZUNvbnRlbnQiLCJVc2VySW5mbyIsInVpZCIsIm5pY2tuYW1lIiwiZ2VuZGVyIiwiYWdlIiwibGFzdE1lc3NhZ2UiLCJkaWFtb25kIiwic3RhciIsIkRlZmF1bHRDb25maWciLCJiYXNlVVJMIiwiRGF0ZVVuaXRDbGFzcyIsImRhdGVfb2JqIiwiZm9ybWF0X3N0ciIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwicmVwbGFjZSIsImdldEZ1bGxZZWFyIiwiZ2V0TWlsbGlzZWNvbmRzIiwiT2JqZWN0VW5pdENsYXNzIiwib2JqIiwidW5kZWZpbmVkIiwiaXNOdWxsIiwiaXNPYmplY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibnVtIiwiU3RyaW5nIiwic3RyIiwiaXNTdHJpbmciLCJ0cmltIiwiaXNFbXB0eVN0cmluZyIsIk9iamVjdFVuaXQiLCJheGlvcyIsIkJhc2VSZXNwb25zZVR5cGUiLCJpc190ZXN0Iiwibm9fc2VuZF9tc2ciLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsInJlcyIsImRhdGEiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJTZXJ2ZXJVbml0IiwicGFyYW0iLCJwb3N0IiwicGFnZU51bSIsInBhZ2VTaXplIiwicGF5IiwicXVlcnkiLCJnZXRVbnJlYWRNZXNzYWdlVXNlckxpc3QiLCJyZWxhdGVVaWQiLCJjb250ZW50IiwiZmlsZW5hbWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiU2VydmVyIiwiVmlld1VuaXRDbGFzcyIsImNsYXNzX25hbWUiLCJFbGVtZW50IiwiY29udGFpbnMiLCJwYXJlbnRCeUNsYXNzIiwicGFyZW50RWxlbWVudCIsIlZpZXdVbml0IiwiQ2hhdFJlY29yZExpc3QiLCJtZXNzYWdlX2xpc3QiLCJzZW5kX21lc3NhZ2VfaWQiLCJ2aWV3IiwiTWFwIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJtc2ciLCJNZXNzYWdlTWFwIiwiaGFzIiwiY3VyX3VzZXJfaW5mbyIsImZyb21VaWQiLCJtZXNzYWdlX2VsZSIsImdldEVsZW1lbnQiLCJzdGF0dXMiLCJzZXQiLCJhcHBlbmRDaGlsZCIsIm1lc3NhZ2VfaWQiLCJnZXQiLCJyZW1vdmUiLCJyZXF1aXJlIiwiU2VuZE1lc3NhZ2UiLCJ0ZXh0X2lucHV0IiwiYnV0dG9uIiwic2VuZF90ZXh0Iiwic2VuZF9pbWFnZSIsImJpbmRMaXN0ZW5lciIsImFscmVhZHkiLCJxdWVyeVNlbGVjdG9yIiwidGhhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInRvTG93ZXJDYXNlIiwidGV4dCIsInZhbHVlIiwibm90aWZ5TGlzdGVuZXIiLCJjcmVhdGVkX3RpbWUiLCJub3ciLCJmaWxlIiwiZmlsZXMiLCJ0ZXN0IiwiZXZlbnRfbmFtZSIsImNhbGxiYWNrIiwib24iLCJGYXN0TWVzc2FnZUxpc3QiLCJVc2VyUHJvZmlsZSIsIkNoYXRSb29tIiwic2VuZE1lc3NhZ2UiLCJmYXN0TWVzc2FnZUxpc3QiLCJ1c2VyUHJvZmlsZSIsImN1ckNoYXRSZWNvcmRMaXN0IiwiYXBwZW5kUmVjb3JkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZGVmYXVsdF9hdmF0YXIiLCJzZXRMaXN0ZW5lciIsImFwcGVuZFJlY29yZFRvTGlzdCIsInNlbmRNZWRpYU1lc3NhZ2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoaWRlIiwicHJvZmlsZSIsIlVzZXJQcm9maWxlTWFwIiwiZ2V0VXNlclByb2ZpbGUiLCJ1cGRhdGVQcm9maWxlIiwidXNlciIsInVwZGF0ZUN1clVzZXJQcm9maWxlIiwiUmVjb3JkTGlzdE1hcCIsImxpc3QiLCJpbnNlcnRCZWZvcmUiLCJnZXRVc2VyTWVzc2FnZURldGFpbCIsInJldmVyc2UiLCJzaG93IiwidGV4dF9saXN0IiwiaW1hZ2VfbGlzdCIsInNlbGVjdF9tZXNzYWdlIiwicHVzaCIsInRhcmdldCIsImlubmVyVGV4dCIsImdldEF0dHJpYnV0ZSIsImFyciIsImxpc3RIVE1MIiwiam9pbiIsImZhc3RUZXh0TGlzdCIsImZhc3RJbWFnZUxpc3QiLCJWaWV3Iiwic2VyaWFsX251bWJlciIsIlVzZXJXcmFwIiwiaW5wdXQiLCJiYWRnZSIsImxhc3RfbWVzc2FnZSIsImNoYW5nZSIsInNlbGVjdGVkIiwiaXNFbXB0eU9iamVjdCIsInJlbmRlckRpYW1vbmRTdGFyIiwiaXNfY2hlY2tlZCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJyZXNlcnZlIiwiZmxhZyIsImRpYW1vbmRfb3Jfc3RhciIsIlVzZXJMaXN0IiwibW9yZV9saXN0X3dyYXAiLCJtb3JlX2xpc3QiLCJmaWx0ZXJfZ3JpZCIsImZpbHRlcl9kaWFtb25kIiwiZmlsdGVyX3N0YXIiLCJmaWx0ZXJfYWxsIiwiYWxsIiwiY2hhbmdlZF91c2VyIiwibW9yZUxpc3RlbmVyIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImUiLCJjdXIiLCJVc2VyTWFwIiwidXNlcl93cmFwIiwidXBkYXRlQmFkZ2UiLCJ1blJlYWRDb3VudCIsInVwZGF0ZUxhc3RNZXNzYWdlIiwidXBkYXRlZF90aW1lIiwic2l6ZSIsImluZm8iLCJjcmVhdGVkQXQiLCJpbmZvX2VsZSIsInJlbmRlclVzZXJQcm9maWxlSFRNTCIsImFsZXJ0IiwidXNlcl9saXN0X2FyciIsIlRoZVBhZ2UiLCJwYXJlbnQiLCJwYXJlbnRfY3NzU2VsZWN0b3IiLCJ1c2VyX2xpc3QiLCJwYWdlX3Zpc2libGUiLCJ1c2VyTGlzdCIsImNoYXRSb29tIiwiZ2V0TWVzc2FnZVVzZXJMaXN0Iiwic3RhcnRNZXNzYWdlVXNlckxpc3RUaW1lciIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRBbGxVc2VyTGlzdCIsInJlY29yZHMiLCJzb3J0IiwiYSIsImIiLCJVaWQiLCJhcHBlbmRVc2VyIiwiVXNlckluZm9NYXAiLCJ1c3AiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNlYyIsImR1cmF0aW9uIiwibm90aWZ5VXNlckNoYW5lZCIsInNlc3Npb25GaWx0ZXIiLCJnZXRJdGVtIiwiZmlsdGVyU3RyIiwidmlzaWJsZSIsInZpc2liaWxpdHlTdGF0ZSIsInRoZVBhZ2UiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9