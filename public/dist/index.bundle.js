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
function UserInfo(id, uid, nickname, avatar, gender, age, lastMessage) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, UserInfo);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "id", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "uid", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "nickname", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "avatar", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "gender", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "age", void 0);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "lastMessage", void 0);

  this.id = id;
  this.uid = uid;
  this.nickname = nickname;
  this.avatar = avatar;
  this.gender = gender;
  this.age = age;
  this.lastMessage = lastMessage;
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_Message_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/Message.js */ "./webpack_src/assets/js/bean/Message.js");
/* harmony import */ var _bean_UserInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bean/UserInfo.js */ "./webpack_src/assets/js/bean/UserInfo.js");





var is_test = true;
var config = {
  baseURL: is_test ? 'https://t.livego.live' : 'https://t.livego.live'
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
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api2/message/user/list', param);
    }
    /**
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
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api2/message/user/detail', param);
    }
    /**
     * @param { String } relateUid 
     * @param { String } content 
     * @param { 0 | 1 | 3 } messageType 
     * @returns { Promise<{ status: Number, msg: String}> }
     */

  }, {
    key: "sendMessage",
    value: function sendMessage(relateUid, content) {
      var messageType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var param = {
        relateUid: relateUid,
        content: content,
        messageType: messageType
      };
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/message/send', param);
    }
    /**
     * 
     * @param { File } filename 
     * @param { String } relateUid 
     * @param { 1 | 2 | 4 } messageType - 2: 图片
     * @returns { Promise<{ status: Number, msg: String}> }
     */

  }, {
    key: "sendMediaMessage",
    value: function sendMediaMessage(filename, relateUid, messageType) {
      var param = {
        filename: filename,
        relateUid: relateUid,
        messageType: messageType
      };
      return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/uploadMedia');
    }
  }]);

  return ServerUnit;
}();

var Server = new ServerUnit();


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

      if (user_info.is_self) console.log("send message to: ".concat(this.uid, ": "), message); // console.log('appendRecord: ', { message, user_info });

      if (!Array.isArray(message)) message = [message];
      message.forEach(function (msg) {
        if (!msg.id) msg.id = _this.config.send_message_id++;
        var message_ele = new _assets_js_bean_Message_js__WEBPACK_IMPORTED_MODULE_4__.Message(msg, user_info);
        var ele = message_ele.getElement();
        var status = user_info.is_self ? 'pending' : 'success';
        ele.classList.add(status);

        _this.MessageMap.set(message.id, {
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
/* harmony import */ var _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/js/unit/Server.js */ "./webpack_src/assets/js/unit/Server.js");
/* harmony import */ var _assets_js_bean_UserInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/js/bean/UserInfo.js */ "./webpack_src/assets/js/bean/UserInfo.js");











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

  /**@type { ChatRecordList } */

  /**@type { SendMessage } */
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

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "curChatRecordList", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, "sendMessage", void 0);

    this.sendMessage = new _SendMessage_js__WEBPACK_IMPORTED_MODULE_6__.SendMessage();
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
      ele.appendChild(this.sendMessage.getElement());
      this.already.init.view = true;
    }
  }, {
    key: "bindListener",
    value: function bindListener() {
      var _this = this;

      var default_avatar = 'https://sw.cool3c.com//99588/2018/7f8bb260-943c-4b9d-b58b-4ed782c8761a.jpg?fit=max&w=800&q=80';
      this.sendMessage.setListener('send_text', function (param) {
        var _this$curChatRecordLi;

        if (!((_this$curChatRecordLi = _this.curChatRecordList) !== null && _this$curChatRecordLi !== void 0 && _this$curChatRecordLi.uid)) return;
        _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_8__.Server.sendMessage(_this.curChatRecordList.uid, param.data, 0);

        _this.curChatRecordList.appendRecord({
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
        _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_8__.Server.sendMediaMessage(param.data, _this.curChatRecordList.uid, 2);

        _this.curChatRecordList.appendRecord({
          timestamp: param.created_time,
          message: URL.createObjectURL(param.data),
          messageType: 2
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
    /**
     * @param { UserInfo } user 
     */

  }, {
    key: "notifyUserChaned",
    value: function () {
      var _notifyUserChaned = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(user) {
        var _this$curChatRecordLi3, _this$RecordListMap$g;

        var uid, avatar, curChatRecordList, _yield$Server$getUser, status, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('notifyUserChaned: ', user);

                if (user) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                uid = user.uid, avatar = user.avatar;
                (_this$curChatRecordLi3 = this.curChatRecordList) === null || _this$curChatRecordLi3 === void 0 ? void 0 : _this$curChatRecordLi3.hide();
                curChatRecordList = (_this$RecordListMap$g = this.RecordListMap.get(uid)) === null || _this$RecordListMap$g === void 0 ? void 0 : _this$RecordListMap$g.list;

                if (curChatRecordList) {
                  _context.next = 20;
                  break;
                }

                curChatRecordList = new _ChatRecordList_js__WEBPACK_IMPORTED_MODULE_7__.ChatRecordList(uid);
                this.config.ele.insertBefore(curChatRecordList.getElement(), this.sendMessage.getElement());
                this.RecordListMap.set(uid, {
                  list: curChatRecordList
                });
                _context.next = 12;
                return _assets_js_unit_Server_js__WEBPACK_IMPORTED_MODULE_8__.Server.getUserMessageDetail({
                  query: {
                    relateUid: uid
                  },
                  pageSize: 20,
                  pageNum: 1
                });

              case 12:
                _yield$Server$getUser = _context.sent;
                status = _yield$Server$getUser.status;
                data = _yield$Server$getUser.data;

                if (!(status !== 0 || !Array.isArray(data))) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return");

              case 17:
                data.reverse();
                curChatRecordList.appendRecord(data, {
                  is_self: false,
                  avatar: avatar
                });
                console.log('message detail: ', data);

              case 20:
                this.curChatRecordList = curChatRecordList;
                curChatRecordList.show();

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function notifyUserChaned(_x) {
        return _notifyUserChaned.apply(this, arguments);
      }

      return notifyUserChaned;
    }()
  }]);

  return ChatRoom;
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








var UserWrap = /*#__PURE__*/function () {
  /**@type { UserInfo } */

  /**
   * @type {{
   *  classList: String[],
   *  ele: HTMLElement,
   *  input: HTMLElement,
   *  badge: HTMLElement,
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
      badge: null
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "on", {
      change: null,
      selected: null
    });

    // super();
    this.user = user;
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(UserWrap, [{
    key: "init",
    value: function init() {
      // console.log('UserWrap: init.');
      this.initView();
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

      ele.innerHTML = "\n    <input uid=\"".concat(user.uid, "\" type=\"radio\" name=\"list-user\" >\n    <div class=\"user\">\n      <div class=\"avatar-wrap\">\n        <div class=\"rectangle-box square\">\n          <div class=\"avatar no1\">\n            <img src=\"").concat(user.avatar, "\" />\n          </div>\n          <div class=\"badge no2\">\xB7</div>\n        </div>\n      </div>\n      <div class=\"message-wrap\">\n        <h2 class=\"name\">").concat(user.nickname, "</h2>\n        <p class=\"last-message\">").concat(user.lastMessage, "</p>\n      </div>\n    </div>\n    ");
      config.ele = ele;
      config.badge = ele.querySelector('.badge');
      config.input = ele.querySelector('input');
      var that = this;
      config.input.addEventListener('change', function () {
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
      ele: null
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "UserMap", new Map());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "on", {
      changed_user: null
    });

    if (typeof id === 'string') this.config.id = id;
    if (Array.isArray(classList)) (_this$config$classLis = this.config.classList).push.apply(_this$config$classLis, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(classList));
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(UserList, [{
    key: "init",
    value: function init() {
      this.initView();
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
      var _this = this;

      if (_assets_js_unit_ObjectUnit_js__WEBPACK_IMPORTED_MODULE_6__.ObjectUnit.isEmptyObject(user)) return;
      var cur = this.UserMap.get(user.uid);

      if (!cur) {
        cur = {
          created_time: Date.now(),
          user: user
        };
        cur.user_wrap = new _UserWrap_js__WEBPACK_IMPORTED_MODULE_5__.UserWrap(user);
        cur.user_wrap.setListener('selected', function (param) {
          _this.UserMap.get(user.uid).user_wrap.updateBadge(0);

          if (!param.is_checked) return;

          _this.notifyListener('changed_user', {
            is_checked: true,
            user: user
          });
        });
        cur.user_wrap.updateBadge(1);
        this.config.ele.appendChild(cur.user_wrap.getElement());
        this.UserMap.set(user.uid, cur);
      }

      cur.updated_time = Date.now();
      if (cur.user.lastMessage !== user.lastMessage) cur.user_wrap.updateBadge(1);
      cur.user = user;

      if (this.UserMap.size === 1) {
        cur.user_wrap.checked();
        this.notifyListener('changed_user', {
          is_checked: true,
          user: cur.user
        });
      }
    }
    /**
     * @param { 'changed_user' } event_name 
     * @param { Function({ is_checked: Boolean, uid: String }) } callback 
     */

  }, {
    key: "setListener",
    value: function setListener(event_name, callback) {
      this.on[event_name] = callback;
    }
    /**
     * @param { 'changed_user' } event_name 
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


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = axios;

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
      parent_cssSelector: '#chat_block'
      /**@type { HTMLElement } */

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
    this.bindListener();
  }
  /**
   * @type { Map<String, UserInfo> }
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ThePage, [{
    key: "init",
    value: function init() {
      this.initView(); // user_list_arr.forEach(user => this.userList.appendUser(user));
      // console.log('ThePage: ', this);

      this.getMessageUserList();
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

        var _yield$Server$getMess, status, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _assets_js_unit_Server__WEBPACK_IMPORTED_MODULE_7__.Server.getMessageUserList();

              case 2:
                _yield$Server$getMess = _context.sent;
                status = _yield$Server$getMess.status;
                data = _yield$Server$getMess.data;

                if (!(status !== 0)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                console.log('getMessageUserList: ', data);
                data.forEach(function (user) {
                  user.uid = user.relateUid;

                  _this.userList.appendUser(user);

                  _this.UserInfoMap.set(user.uid, user);
                });

              case 9:
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
    key: "bindListener",
    value: function bindListener() {
      var _this2 = this;

      this.userList.setListener('changed_user', function (param) {
        // console.log('ThePage changed user: ', param);
        var is_checked = param.is_checked,
            user = param.user;
        if (is_checked) _this2.chatRoom.notifyUserChaned(user);
      });
    }
  }]);

  return ThePage;
}();

var thePage = new ThePage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvYXNzZXRzL2pzL2JlYW4vTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvYmVhbi9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvdW5pdC9EYXRlVW5pdC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9hc3NldHMvanMvdW5pdC9PYmplY3RVbml0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2Fzc2V0cy9qcy91bml0L1NlcnZlci5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9jb21wb25lbnRzL0NoYXRSb29tL0NoYXRSZWNvcmRMaXN0LmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvQ2hhdFJvb20vU2VuZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9DaGF0Um9vbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9saXZlaW0vLi93ZWJwYWNrX3NyYy9jb21wb25lbnRzL1VzZXJMaXN0L1VzZXJXcmFwLmpzIiwid2VicGFjazovL2xpdmVpbS8uL3dlYnBhY2tfc3JjL2NvbXBvbmVudHMvVXNlckxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvY29tcG9uZW50cy9WaWV3L2luZGV4LmpzIiwid2VicGFjazovL2xpdmVpbS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWltL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9saXZlaW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZWltL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmVpbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZWltL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZWltL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZWltLy4vd2VicGFja19zcmMvcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsIm1lc3NhZ2Vfb2JqIiwidXNlcl9pbmZvIiwiaXNfc2VsZiIsImF2YXRhciIsImVsZSIsImNsYXNzTGlzdCIsImlkIiwidGltZXN0YW1wIiwibWVzc2FnZSIsIm1lc3NhZ2VUeXBlIiwiaW5pdCIsImluaXRWaWV3IiwidHlwZSIsInJlc3VsdCIsImNvbmZpZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkRhdGVVbml0IiwicmVuZGVyTWVzc2FnZUNvbnRlbnQiLCJVc2VySW5mbyIsInVpZCIsIm5pY2tuYW1lIiwiZ2VuZGVyIiwiYWdlIiwibGFzdE1lc3NhZ2UiLCJEYXRlVW5pdENsYXNzIiwiZGF0ZV9vYmoiLCJmb3JtYXRfc3RyIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJyZXBsYWNlIiwiZ2V0RnVsbFllYXIiLCJnZXRNaWxsaXNlY29uZHMiLCJPYmplY3RVbml0Q2xhc3MiLCJvYmoiLCJ1bmRlZmluZWQiLCJpc051bGwiLCJpc09iamVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJudW0iLCJTdHJpbmciLCJzdHIiLCJpc1N0cmluZyIsInRyaW0iLCJpc0VtcHR5U3RyaW5nIiwiT2JqZWN0VW5pdCIsImlzX3Rlc3QiLCJiYXNlVVJMIiwiYXhpb3MiLCJyZXNwb25zZSIsInJlcyIsImRhdGEiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJTZXJ2ZXJVbml0IiwicGFyYW0iLCJyZWxhdGVVaWQiLCJjb250ZW50IiwiZmlsZW5hbWUiLCJTZXJ2ZXIiLCJDaGF0UmVjb3JkTGlzdCIsIm1lc3NhZ2VfbGlzdCIsInNlbmRfbWVzc2FnZV9pZCIsInZpZXciLCJNYXAiLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm1zZyIsIm1lc3NhZ2VfZWxlIiwiZ2V0RWxlbWVudCIsInN0YXR1cyIsIk1lc3NhZ2VNYXAiLCJzZXQiLCJhcHBlbmRDaGlsZCIsIm1lc3NhZ2VfaWQiLCJnZXQiLCJyZW1vdmUiLCJyZXF1aXJlIiwiU2VuZE1lc3NhZ2UiLCJ0ZXh0X2lucHV0IiwiYnV0dG9uIiwic2VuZF90ZXh0Iiwic2VuZF9pbWFnZSIsImJpbmRMaXN0ZW5lciIsImFscmVhZHkiLCJxdWVyeVNlbGVjdG9yIiwidGhhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0IiwidmFsdWUiLCJub3RpZnlMaXN0ZW5lciIsImNyZWF0ZWRfdGltZSIsIm5vdyIsImZpbGUiLCJmaWxlcyIsInRlc3QiLCJldmVudF9uYW1lIiwiY2FsbGJhY2siLCJvbiIsIkNoYXRSb29tIiwic2VuZE1lc3NhZ2UiLCJkZWZhdWx0X2F2YXRhciIsInNldExpc3RlbmVyIiwiY3VyQ2hhdFJlY29yZExpc3QiLCJhcHBlbmRSZWNvcmQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VyIiwiaGlkZSIsIlJlY29yZExpc3RNYXAiLCJsaXN0IiwiaW5zZXJ0QmVmb3JlIiwicXVlcnkiLCJwYWdlU2l6ZSIsInBhZ2VOdW0iLCJyZXZlcnNlIiwic2hvdyIsIlVzZXJXcmFwIiwiaW5wdXQiLCJiYWRnZSIsImNoYW5nZSIsInNlbGVjdGVkIiwiaXNfY2hlY2tlZCIsImNoZWNrZWQiLCJpbm5lclRleHQiLCJVc2VyTGlzdCIsImNoYW5nZWRfdXNlciIsInB1c2giLCJjdXIiLCJVc2VyTWFwIiwidXNlcl93cmFwIiwidXBkYXRlQmFkZ2UiLCJ1cGRhdGVkX3RpbWUiLCJzaXplIiwiVmlldyIsInVzZXJfbGlzdF9hcnIiLCJUaGVQYWdlIiwicGFyZW50IiwicGFyZW50X2Nzc1NlbGVjdG9yIiwidXNlckxpc3QiLCJjaGF0Um9vbSIsImdldE1lc3NhZ2VVc2VyTGlzdCIsImFwcGVuZFVzZXIiLCJVc2VySW5mb01hcCIsIm5vdGlmeVVzZXJDaGFuZWQiLCJ0aGVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFDdEM7QUFDZixpQ0FBaUMsNkRBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xD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Q0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7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RDs7Ozs7O0FBR0gsSUFBTXNDLE9BQU8sR0FBRyxJQUFJVCxPQUFKLEVBQWhCLEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBhY3Rpb24pIHtcbiAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIFwiICsgYWN0aW9uICsgXCIgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJnZXRcIik7XG4gIHJldHVybiBjbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0IHsgRGF0ZVVuaXQgfSBmcm9tICcuLi91bml0L0RhdGVVbml0LmpzJztcclxuXHJcbmNsYXNzIE1lc3NhZ2Uge1xyXG4gIC8qKkB0eXBlIHsgTnVtYmVyIH0gKi9cclxuICBpZDtcclxuICAvKipAdHlwZSB7IE51bWJlciB9ICovXHJcbiAgdGltZXN0YW1wO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi9cclxuICBtZXNzYWdlXHJcbiAgLyoqQHR5cGUgeyBOdW1iZXIgfSAqL1xyXG4gIG1lc3NhZ2VUeXBlO1xyXG4gIC8qKkB0eXBlIHsgeyBpc19zZWxmOiBCb29sZWFuLCBhdmF0YXI6IGF2YXRhciB9IH0gKi9cclxuICB1c2VyX2luZm8gPSB7XHJcbiAgICBpc19zZWxmOiBudWxsLFxyXG4gICAgYXZhdGFyOiBudWxsXHJcbiAgfVxyXG5cclxuICAjY29uZmlnID0ge1xyXG4gICAgLyoqQHR5cGUgeyBIVE1MRWxlbWVudCB9ICovXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBjbGFzc0xpc3Q6IFsnY2hhdC1yZWNvcmQnXVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gdGltZXN0YW1wIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbWVzc2FnZVR5cGUgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIG1lc3NhZ2Vfb2JqLCB1c2VyX2luZm8gPSB7fSl7XHJcbiAgICBpZiAobWVzc2FnZV9vYmogJiYgdHlwZW9mIG1lc3NhZ2Vfb2JqID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBsZXQgeyBpZCwgdGltZXN0YW1wLCBtZXNzYWdlLCBtZXNzYWdlVHlwZSB9ID0gbWVzc2FnZV9vYmo7XHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgIHRoaXMubWVzc2FnZVR5cGUgPSBtZXNzYWdlVHlwZTtcclxuICAgIH1cclxuICAgIHRoaXMudXNlcl9pbmZvID0gdXNlcl9pbmZvO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBTdHJpbmd9IG1lc3NhZ2UgXHJcbiAgICogQHBhcmFtIHsgMCB8IDEgfCAyIHwgNHwgMTN9IHR5cGUgXHJcbiAgICovXHJcbiAgcmVuZGVyTWVzc2FnZUNvbnRlbnQoIG1lc3NhZ2UsIHR5cGUgPSAwKXtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICByZXN1bHQgPSBgPHAgY2xhc3M9XCJjb250ZW50IHRleHRcIj4ke21lc3NhZ2V9PC9wPmA7XHJcbiAgICAgIH07IGJyZWFrO1xyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICByZXN1bHQgPSBgPGltZyBjbGFzcz1cImNvbnRlbnQgaW1hZ2VcIiBzcmM9XCIke21lc3NhZ2V9XCIgLz5gO1xyXG4gICAgICB9OyBicmVhaztcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHJlc3VsdCA9IGA8cCBzdHlsZT1cImNvbG9yOiByZWQ7XCIgY2xhc3M9XCJjb250ZW50IHRleHRcIj4ke21lc3NhZ2V9PC9wPmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpbml0Vmlldygpe1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuI2NvbmZpZztcclxuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgaWYodGhpcy51c2VyX2luZm8uaXNfc2VsZikgZWxlLmNsYXNzTGlzdC5hZGQoJ3NlbGYnKTtcclxuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ21lc3NhZ2UtaWQnLCB0aGlzLmlkKTtcclxuICAgIGVsZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLXdyYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ib3ggc3F1YXJlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhciBubzFcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLnVzZXJfaW5mby5hdmF0YXJ9XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXdyYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICA8cCBjbGFzcz1cIml0ZW1cIj4ke0RhdGVVbml0LmZvcm1hdCh0aGlzLnRpbWVzdGFtcCl9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaXRlbVwiPiBNZXNzYWdlVHlwZTogJHt0aGlzLm1lc3NhZ2VUeXBlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlICR7dGhpcy5tZXNzYWdlVHlwZSA9PT0gMTMgPyAndmlkZW8tY2FsbCcgOiAnJ31cIj5cclxuICAgICAgICAke3RoaXMucmVuZGVyTWVzc2FnZUNvbnRlbnQodGhpcy5tZXNzYWdlLCB0aGlzLm1lc3NhZ2VUeXBlKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25maWcuZWxlID0gZWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbmZpZy5lbGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIE1lc3NhZ2VcclxufSIsImNsYXNzIFVzZXJJbmZvIHtcclxuICAvKipAdHlwZSB7IFN0cmluZyB9ICovIGlkO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi8gdWlkO1xyXG4gIC8qKkB0eXBlIHsgU3RyaW5nIH0gKi8gbmlja25hbWU7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBhdmF0YXI7XHJcbiAgLyoqQHR5cGUgeyBOdW1iZXIgfSAqLyBnZW5kZXI7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBhZ2U7XHJcbiAgLyoqQHR5cGUgeyBTdHJpbmcgfSAqLyBsYXN0TWVzc2FnZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaWQsIHVpZCwgbmlja25hbWUsIGF2YXRhciwgZ2VuZGVyLCBhZ2UsIGxhc3RNZXNzYWdlKXtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudWlkID0gdWlkO1xyXG4gICAgdGhpcy5uaWNrbmFtZSA9IG5pY2tuYW1lO1xyXG4gICAgdGhpcy5hdmF0YXIgPSBhdmF0YXI7XHJcbiAgICB0aGlzLmdlbmRlciA9IGdlbmRlcjtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gICAgdGhpcy5sYXN0TWVzc2FnZSA9IGxhc3RNZXNzYWdlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VySW5mb1xyXG59IiwiY2xhc3MgRGF0ZVVuaXRDbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgfVxyXG5cclxuICBkZWZhdWx0X2Zvcm1hdF9zdHIgPSAneXl5eS1NTS1kZCBISDptbTpzczptcydcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsgRGF0ZSB8IE51bWJlciB9IGRhdGVfb2JqIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IGZvcm1hdF9zdHIgXHJcbiAgICogQHBhcmFtIHsgJ2RhdGUnIHwgJ3RpbWUnIHwgJ2RhdGV0aW1lJyB9IHR5cGUgXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgZm9ybWF0KCBkYXRlX29iaiwgZm9ybWF0X3N0ciwgdHlwZSl7XHJcbiAgICBpZiAoIXR5cGUgJiYgIWZvcm1hdF9zdHIpIGZvcm1hdF9zdHIgPSBcInl5eXktTU0tZGQgSEg6bW06c3M6bXNcIjtcclxuICAgIGVsc2UgaWYgKFwiZGF0ZVwiID09PSB0eXBlKSBmb3JtYXRfc3RyID0gXCJ5eXl5LU1NLWRkXCI7XHJcbiAgICBlbHNlIGlmIChcInRpbWVcIiA9PT0gdHlwZSkgZm9ybWF0X3N0ciA9IFwiSEg6bW06c3NcIjtcclxuICAgIGVsc2UgaWYgKFwiZGF0ZXRpbWVcIiA9PT0gdHlwZSkgZm9ybWF0X3N0ciA9IFwieXl5eS1NTS1kZCBISDptbTpzc1wiO1xyXG4gICAgaWYgKCFkYXRlX29iaikgZGF0ZV9vYmogPSBuZXcgRGF0ZSgpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGVfb2JqID09PSAnbnVtYmVyJykgZGF0ZV9vYmogPSBuZXcgRGF0ZShkYXRlX29iaik7XHJcbiAgICBsZXQgbW9udGggPSBkYXRlX29iai5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCBkYXkgPSBkYXRlX29iai5nZXREYXRlKCk7XHJcbiAgICBsZXQgaG91cnMgPSBkYXRlX29iai5nZXRIb3VycygpO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlX29iai5nZXRNaW51dGVzKCk7XHJcbiAgICBsZXQgc2Vjb25kcyA9IGRhdGVfb2JqLmdldFNlY29uZHMoKTtcclxuICAgIGZvcm1hdF9zdHIgPSBmb3JtYXRfc3RyLnJlcGxhY2UoXCJ5eXl5XCIsIGRhdGVfb2JqLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcIk1NXCIsIGAke21vbnRoID4gOSA/IFwiXCIgOiAwfSR7bW9udGh9YCk7XHJcbiAgICBmb3JtYXRfc3RyID0gZm9ybWF0X3N0ci5yZXBsYWNlKFwiZGRcIiwgYCR7ZGF5ID4gOSA/IFwiXCIgOiAwfSR7ZGF5fWApO1xyXG4gICAgZm9ybWF0X3N0ciA9IGZvcm1hdF9zdHIucmVwbGFjZShcIkhIXCIsIGAke2hvdXJzID4gOSA/IFwiXCIgOiAwfSR7aG91cnN9YCk7XHJcbiAgICBmb3JtYXRfc3RyID0gZm9ybWF0X3N0ci5yZXBsYWNlKFwibW1cIiwgYCR7bWludXRlcyA+IDkgPyBcIlwiIDogMH0ke21pbnV0ZXN9YCk7XHJcbiAgICBmb3JtYXRfc3RyID0gZm9ybWF0X3N0ci5yZXBsYWNlKFwic3NcIiwgYCR7c2Vjb25kcyA+IDkgPyBcIlwiIDogMH0ke3NlY29uZHN9YCk7XHJcbiAgICBmb3JtYXRfc3RyID0gZm9ybWF0X3N0ci5yZXBsYWNlKFwibXNcIiwgZGF0ZV9vYmouZ2V0TWlsbGlzZWNvbmRzKCkpO1xyXG4gICAgcmV0dXJuIGZvcm1hdF9zdHI7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBEYXRlVW5pdCA9IG5ldyBEYXRlVW5pdENsYXNzKCk7XHJcblxyXG5leHBvcnQge1xyXG4gIERhdGVVbml0XHJcbn0iLCJjbGFzcyBPYmplY3RVbml0Q2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgfVxyXG5cclxuICBpc051bGwoIG9iaiApIHtcclxuICAgIGlmICggIW9iaiB8fCBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNPYmplY3QoIG9iaiApIHtcclxuICAgIGlmICggdGhpcy5pc051bGwob2JqKSApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICggdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlzRW1wdHlPYmplY3QoIG9iaiApIHtcclxuICAgIGlmICggIXRoaXMuaXNPYmplY3Qob2JqKSApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICggT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPiAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlzTm9FbXB0eU9iamVjdCggb2JqICkge1xyXG4gICAgaWYgKCAhdGhpcy5pc09iamVjdChvYmopICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKCBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA8IDEpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNOdW1iZXIoIG51bSApIHtcclxuICAgIGlmICggU3RyaW5nKG51bSkgPT09ICdOYU4nICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuICggdHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xyXG4gIH1cclxuXHJcbiAgaXNTdHJpbmcoIHN0ciApIHtcclxuICAgIHJldHVybiAoIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnICk7XHJcbiAgfVxyXG4gIGlzRW1wdHlTdHJpbmcoIHN0ciApIHtcclxuICAgIGlmICggdGhpcy5pc051bGwoc3RyKSApIHJldHVybiB0cnVlO1xyXG4gICAgaWYgKCAhdGhpcy5pc1N0cmluZyhzdHIpICkgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAoIHN0ci50cmltKCkubGVuZ3RoIDwgMSApIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpc05vRW1wdHlTdHJpbmcoIHN0ciApIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0VtcHR5U3RyaW5nKHN0cik7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBPYmplY3RVbml0ID0gbmV3IE9iamVjdFVuaXRDbGFzcygpO1xyXG5cclxuZXhwb3J0IHtcclxuICBPYmplY3RVbml0XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vYmVhbi9NZXNzYWdlLmpzJztcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tICcuLi9iZWFuL1VzZXJJbmZvLmpzJztcclxuXHJcbmNvbnN0IGlzX3Rlc3QgPSB0cnVlO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGJhc2VVUkw6IGlzX3Rlc3QgPyAnaHR0cHM6Ly90LmxpdmVnby5saXZlJyA6ICdodHRwczovL3QubGl2ZWdvLmxpdmUnXHJcbn1cclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBjb25maWcuYmFzZVVSTDtcclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ2F1dGhvcml6YXRpb24nXSA9IFwid2dyZGc3ODM4NmFcIjtcclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIGxldCByZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBeGlvc1Jlc3Bvc25lID0+IFwiLCByZXMpO1xyXG4gICAgLy8gaWYocmVzLnN0YXR1cyA9PT0gNDEzKXtcclxuICAgIC8vICAgICBoYW5kbGVTdGF0dXM0MTMoKTtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZihyZXMuc3RhdHVzID09PSAwKSByZXMuc3VjY2VzcyA9IHRydWU7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG5cclxuY2xhc3MgU2VydmVyVW5pdCB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyB7XCJxdWVyeVwiOnt9LFwicGFnZVNpemVcIjoyMCxcInBhZ2VOdW1cIjoxfSB9IHBhcmFtIFxyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBkYXRhOiBVc2VySW5mb1tdfT4gfVxyXG4gICAqL1xyXG4gIGdldE1lc3NhZ2VVc2VyTGlzdCggcGFyYW0gPSB7XCJxdWVyeVwiOnt9LFwicGFnZVNpemVcIjoyMCxcInBhZ2VOdW1cIjoxfSApe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkyL21lc3NhZ2UvdXNlci9saXN0JywgcGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsge1wicXVlcnlcIjp7XCJyZWxhdGVVaWRcIjozOTAxNjA0MDUzMDczOTY5fSxcInBhZ2VTaXplXCI6MjAsXCJwYWdlTnVtXCI6MX0gfSBwYXJhbSBcclxuICAgKiBAcmV0dXJucyB7IFByb21pc2U8eyBzdGF0dXM6IE51bWJlciwgZGF0YTogTWVzc2FnZVtdfT4gfVxyXG4gICAqL1xyXG4gIGdldFVzZXJNZXNzYWdlRGV0YWlsKCBwYXJhbSA9IHtcInF1ZXJ5XCI6e1wicmVsYXRlVWlkXCI6MzkwMTYwNDA1MzA3Mzk2OX0sXCJwYWdlU2l6ZVwiOjIwLFwicGFnZU51bVwiOjF9KXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpMi9tZXNzYWdlL3VzZXIvZGV0YWlsJywgcGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0gcmVsYXRlVWlkIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IGNvbnRlbnQgXHJcbiAgICogQHBhcmFtIHsgMCB8IDEgfCAzIH0gbWVzc2FnZVR5cGUgXHJcbiAgICogQHJldHVybnMgeyBQcm9taXNlPHsgc3RhdHVzOiBOdW1iZXIsIG1zZzogU3RyaW5nfT4gfVxyXG4gICAqL1xyXG4gIHNlbmRNZXNzYWdlKHJlbGF0ZVVpZCwgY29udGVudCwgbWVzc2FnZVR5cGUgPSAwKSB7XHJcbiAgICBsZXQgcGFyYW0gPSB7IHJlbGF0ZVVpZCwgY29udGVudCwgbWVzc2FnZVR5cGV9O1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbWVzc2FnZS9zZW5kJywgcGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsgRmlsZSB9IGZpbGVuYW1lIFxyXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHJlbGF0ZVVpZCBcclxuICAgKiBAcGFyYW0geyAxIHwgMiB8IDQgfSBtZXNzYWdlVHlwZSAtIDI6IOWbvueJh1xyXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZTx7IHN0YXR1czogTnVtYmVyLCBtc2c6IFN0cmluZ30+IH1cclxuICAgKi9cclxuICBzZW5kTWVkaWFNZXNzYWdlKGZpbGVuYW1lLCByZWxhdGVVaWQsIG1lc3NhZ2VUeXBlKSB7XHJcbiAgICBsZXQgcGFyYW0gPSB7IGZpbGVuYW1lLCByZWxhdGVVaWQsIG1lc3NhZ2VUeXBlfTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VwbG9hZE1lZGlhJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTZXJ2ZXIgPSBuZXcgU2VydmVyVW5pdCgpO1xyXG5cclxuZXhwb3J0IHtcclxuICBTZXJ2ZXJcclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvYmVhbi9NZXNzYWdlLmpzJztcclxuXHJcbmNsYXNzIENoYXRSZWNvcmRMaXN0IHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7e1xyXG4gICAqICBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqICBjbGFzc0xpc3Q6IFN0cmluZ1tdLFxyXG4gICAqICBtZXNzYWdlX2xpc3Q6IE1lc3NhZ2VbXSxcclxuICAgKiAgc2VuZF9tZXNzYWdlX2lkOiBOdW1iZXIsXHJcbiAgICogfX1cclxuICAgKi9cclxuICBjb25maWcgPSB7XHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBjbGFzc0xpc3Q6IFsnY2hhdC1yZWNvcmQtbGlzdCddLFxyXG4gICAgbWVzc2FnZV9saXN0OiBbXSxcclxuICAgIHNlbmRfbWVzc2FnZV9pZDogMTAwMDBcclxuICB9XHJcblxyXG4gIGFscmVhZHkgPSB7XHJcbiAgICBpbml0OiB7XHJcbiAgICAgIHZpZXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIHtcclxuICAgKiAgc3RhdHVzOiAncGVuZGluZycgfCAnZmFpbGVkJywgJ3N1Y2Nlc3MnLFxyXG4gICAqICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAqICBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgTWVzc2FnZU1hcCA9IG5ldyBNYXAoKTtcclxuICAvKipAdHlwZSB7IFN0cmluZyB9ICovXHJcbiAgdWlkO1xyXG5cclxuICBjb25zdHJ1Y3RvciggdWlkICl7XHJcbiAgICB0aGlzLnVpZCA9IHVpZDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKXtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcclxuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3VpZCcsIHRoaXMudWlkKTtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgY29uZmlnLmVsZSA9IGVsZTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBNZXNzYWdlIHwgTWVzc2FnZVtdIH0gbWVzc2FnZSBcclxuICAgKiBAcGFyYW0geyB7IGlzX3NlbGY6IEJvb2xlYW4sIGF2YXRhcjogYXZhdGFyIH0gfSB1c2VyX2luZm9cclxuICAgKi9cclxuICBhcHBlbmRSZWNvcmQoIG1lc3NhZ2UsIHVzZXJfaW5mbyApIHtcclxuICAgIGlmICh1c2VyX2luZm8uaXNfc2VsZikgY29uc29sZS5sb2coYHNlbmQgbWVzc2FnZSB0bzogJHt0aGlzLnVpZH06IGAsIG1lc3NhZ2UpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2FwcGVuZFJlY29yZDogJywgeyBtZXNzYWdlLCB1c2VyX2luZm8gfSk7XHJcbiAgICBpZighQXJyYXkuaXNBcnJheShtZXNzYWdlKSkgbWVzc2FnZSA9IFttZXNzYWdlXTtcclxuICAgIG1lc3NhZ2UuZm9yRWFjaCggbXNnID0+IHtcclxuICAgICAgaWYgKCFtc2cuaWQpIG1zZy5pZCA9IHRoaXMuY29uZmlnLnNlbmRfbWVzc2FnZV9pZCsrO1xyXG4gICAgICBsZXQgbWVzc2FnZV9lbGUgPSBuZXcgTWVzc2FnZSggbXNnLCB1c2VyX2luZm8pO1xyXG4gICAgICBsZXQgZWxlID0gbWVzc2FnZV9lbGUuZ2V0RWxlbWVudCgpO1xyXG4gICAgICBsZXQgc3RhdHVzID0gdXNlcl9pbmZvLmlzX3NlbGYgPyAncGVuZGluZycgOiAnc3VjY2VzcydcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcclxuICAgICAgdGhpcy5NZXNzYWdlTWFwLnNldChtZXNzYWdlLmlkLCB7IHN0YXR1czogJ3BlbmRpbmcnLCBtZXNzYWdlOiBtc2csIGVsZTogZWxlIH0pO1xyXG4gICAgICB0aGlzLmNvbmZpZy5lbGUuYXBwZW5kQ2hpbGQoZWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbWVzc2FnZV9pZCBcclxuICAgKiBAcGFyYW0geyAncGVuZGluZycgfCAnZmFpbGVkJywgJ3N1Y2Nlc3MnIH0gc3RhdHVzIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGNoYW5nZVJlY29yZFN0YXR1cyggbWVzc2FnZV9pZCwgc3RhdHVzICkge1xyXG4gICAgbGV0IG9iaiA9IHRoaXMuTWVzc2FnZU1hcC5nZXQobWVzc2FnZV9pZCk7XHJcbiAgICBsZXQgZWxlID0gb2JqICYmIG9iai5lbGU7XHJcbiAgICBpZiAoIWVsZSkgcmV0dXJuO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKXtcclxuICAgIHRoaXMuY29uZmlnLmVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlLWVsZScpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGhpZGUgJHt0aGlzLnVpZH06IGAsIHRoaXMuY29uZmlnKTtcclxuICB9XHJcbiAgc2hvdygpe1xyXG4gICAgdGhpcy5jb25maWcuZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZWxlJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgc2hvdyAke3RoaXMudWlkfTogYCwgdGhpcy5jb25maWcpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBDaGF0UmVjb3JkTGlzdFxyXG59IiwiY29uc3QgeyBPYmplY3RVbml0IH0gPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2pzL3VuaXQvT2JqZWN0VW5pdFwiKTtcclxuXHJcbmNsYXNzIFNlbmRNZXNzYWdlIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7e1xyXG4gICAqICBpZDogU3RyaW5nLFxyXG4gICAqICBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqICBjbGFzc0xpc3Q6IFN0cmluZ1tdLFxyXG4gICAqICB0ZXh0X2lucHV0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgYnV0dG9uOiB7XHJcbiAgICogICAgc2VuZF90ZXh0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgICBzZW5kX2ltYWdlOiBIVE1MRWxlbWVudCxcclxuICAgKiAgfVxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgaWQ6ICdzZW5kX21lc3NhZ2Vfd3JhcCcsXHJcbiAgICBlbGU6IG51bGwsXHJcbiAgICBjbGFzc0xpc3Q6IFsnc2VuZC1tZXNzYWdlLXdyYXAnXSxcclxuICAgIHRleHRfaW5wdXQ6IG51bGwsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgc2VuZF90ZXh0OiBudWxsLFxyXG4gICAgICBzZW5kX2ltYWdlOiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbiA9IHtcclxuICAgIHNlbmRfdGV4dDogbnVsbCxcclxuICAgIHNlbmRfaW1hZ2U6IG51bGwsXHJcbiAgfVxyXG5cclxuICBhbHJlYWR5ID0ge1xyXG4gICAgaW5pdDoge1xyXG4gICAgICB2aWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1NlbmRNZXNzYWdlOiAnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAodGhpcy5hbHJlYWR5LmluaXQudmlldykgcmV0dXJuO1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uZmlnLmVsZSA9IGVsZTtcclxuICAgIGVsZS5pZCA9IGNvbmZpZy5pZDtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgZWxlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+XHJcbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRleHQtaW5wdXRcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXdyYXBcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZmlsZS1sYWJlbFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbiBjaG9vc2UtZmlsZVwiPkNob29zZSBJbWFnZTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBzZW5kLW1lc3NhZ2VcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy50ZXh0X2lucHV0ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWlucHV0Jyk7XHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfdGV4dCA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuc2VuZC1tZXNzYWdlJyk7XHJcbiAgICBjb25maWcuYnV0dG9uLnNlbmRfaW1hZ2UgPSBlbGUucXVlcnlTZWxlY3RvcignLmZpbGUtbGFiZWwgaW5wdXQnKTtcclxuICAgIHRoaXMuYWxyZWFkeS5pbml0LnZpZXcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYmluZExpc3RlbmVyKCl7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAvLyBcclxuICAgIGNvbmZpZy5idXR0b24uc2VuZF90ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgdGV4dCA9IHRoaXMuY29uZmlnLnRleHRfaW5wdXQudmFsdWU7XHJcbiAgICAgIGlmIChPYmplY3RVbml0LmlzRW1wdHlTdHJpbmcodGV4dCkpIHJldHVybjtcclxuICAgICAgY29uc29sZS5sb2coJ3NlbmQgdGV4dDogJywgdGV4dCk7XHJcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXIoJ3NlbmRfdGV4dCcsIHtcclxuICAgICAgICBjcmVhdGVkX3RpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgZGF0YTogdGV4dFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb25maWcudGV4dF9pbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfSk7XHJcbiAgICAvLyBcclxuICAgIGNvbmZpZy5idXR0b24uc2VuZF9pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8qKkB0eXBlIHsgRmlsZSB9ICovXHJcbiAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICBpZiAoIWZpbGUpIHJldHVybjtcclxuICAgICAgaWYgKCEvaW1hZ2UvLnRlc3QoZmlsZS50eXBlKSkgcmV0dXJuO1xyXG4gICAgICBjb25zb2xlLmxvZygnc2VuZCBpbWFnZTogJywgZmlsZSk7XHJcbiAgICAgIHRoYXQubm90aWZ5TGlzdGVuZXIoJ3NlbmRfaW1hZ2UnLCB7XHJcbiAgICAgICAgY3JlYXRlZF90aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGRhdGE6IGZpbGVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmVsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdzZW5kX3RleHQnIHwgJ3NlbmRfaW1hZ2UnIH0gZXZlbnRfbmFtZSBcclxuICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGNhbGxiYWNrIFxyXG4gICAqL1xyXG4gIHNldExpc3RlbmVyKCBldmVudF9uYW1lLCBjYWxsYmFjayApe1xyXG4gICAgdGhpcy5vbltldmVudF9uYW1lXSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgJ3NlbmRfdGV4dCcgfCAnc2VuZF9pbWFnZScgfSBldmVudF9uYW1lIFxyXG4gICAqL1xyXG4gIG5vdGlmeUxpc3RlbmVyKCBldmVudF9uYW1lLCBwYXJhbSApe1xyXG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5vbltldmVudF9uYW1lXTtcclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKHBhcmFtKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgU2VuZE1lc3NhZ2VcclxufSIsImltcG9ydCB7IFNlbmRNZXNzYWdlIH0gZnJvbSAnLi9TZW5kTWVzc2FnZS5qcyc7XHJcbmltcG9ydCB7IENoYXRSZWNvcmRMaXN0IH0gZnJvbSAnLi9DaGF0UmVjb3JkTGlzdC5qcyc7XHJcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy91bml0L1NlcnZlci5qcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzJztcclxuXHJcbmNsYXNzIENoYXRSb29tIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7e1xyXG4gICAqICBpZDogU3RyaW5nLCBjbGFzc0xpc3Q6IFN0cmluZ1tdLCBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgaWQ6ICdjaGF0X3Jvb20nLFxyXG4gICAgY2xhc3NMaXN0OiBbJ2NoYXQtcm9vbSddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gIH1cclxuXHJcbiAgYWxyZWFkeSA9IHtcclxuICAgIGluaXQ6IHtcclxuICAgICAgdmlldzogZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHsgTWFwPFN0cmluZywge1xyXG4gICAqICBpc19iaW5kX2xpc3RlbmVyOiBCb29sZWFuLFxyXG4gICAqICBsaXN0OiBDaGF0UmVjb3JkTGlzdCxcclxuICAgKiB9PiB9XHJcbiAgICovXHJcbiAgUmVjb3JkTGlzdE1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgLyoqQHR5cGUgeyBDaGF0UmVjb3JkTGlzdCB9ICovXHJcbiAgY3VyQ2hhdFJlY29yZExpc3RcclxuICAvKipAdHlwZSB7IFNlbmRNZXNzYWdlIH0gKi9cclxuICBzZW5kTWVzc2FnZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UgPSBuZXcgU2VuZE1lc3NhZ2UoKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gICAgdGhpcy5iaW5kTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCl7XHJcbiAgICBpZiAodGhpcy5hbHJlYWR5LmluaXQudmlldyA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5jb25maWcuY2xhc3NMaXN0KTtcclxuICAgIHRoaXMuY29uZmlnLmVsZSA9IGVsZTtcclxuICAgIGVsZS5hcHBlbmRDaGlsZCh0aGlzLnNlbmRNZXNzYWdlLmdldEVsZW1lbnQoKSk7XHJcbiAgICB0aGlzLmFscmVhZHkuaW5pdC52aWV3ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGJpbmRMaXN0ZW5lcigpe1xyXG4gICAgbGV0IGRlZmF1bHRfYXZhdGFyID0gJ2h0dHBzOi8vc3cuY29vbDNjLmNvbS8vOTk1ODgvMjAxOC83ZjhiYjI2MC05NDNjLTRiOWQtYjU4Yi00ZWQ3ODJjODc2MWEuanBnP2ZpdD1tYXgmdz04MDAmcT04MCc7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlLnNldExpc3RlbmVyKCdzZW5kX3RleHQnLCAocGFyYW0pID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmN1ckNoYXRSZWNvcmRMaXN0Py51aWQpIHJldHVybjtcclxuICAgICAgU2VydmVyLnNlbmRNZXNzYWdlKHRoaXMuY3VyQ2hhdFJlY29yZExpc3QudWlkLCBwYXJhbS5kYXRhLCAwKTtcclxuICAgICAgdGhpcy5jdXJDaGF0UmVjb3JkTGlzdC5hcHBlbmRSZWNvcmQoe1xyXG4gICAgICAgIHRpbWVzdGFtcDogcGFyYW0uY3JlYXRlZF90aW1lLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtLmRhdGEsXHJcbiAgICAgICAgbWVzc2FnZVR5cGU6IDAsXHJcbiAgICAgIH0sIHsgaXNfc2VsZjogdHJ1ZSwgYXZhdGFyOiBkZWZhdWx0X2F2YXRhcn0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlLnNldExpc3RlbmVyKCdzZW5kX2ltYWdlJywgKHBhcmFtKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5jdXJDaGF0UmVjb3JkTGlzdD8udWlkKSByZXR1cm47XHJcbiAgICAgIFNlcnZlci5zZW5kTWVkaWFNZXNzYWdlKHBhcmFtLmRhdGEsIHRoaXMuY3VyQ2hhdFJlY29yZExpc3QudWlkLCAyKTtcclxuICAgICAgdGhpcy5jdXJDaGF0UmVjb3JkTGlzdC5hcHBlbmRSZWNvcmQoe1xyXG4gICAgICAgIHRpbWVzdGFtcDogcGFyYW0uY3JlYXRlZF90aW1lLFxyXG4gICAgICAgIG1lc3NhZ2U6IFVSTC5jcmVhdGVPYmplY3RVUkwocGFyYW0uZGF0YSksXHJcbiAgICAgICAgbWVzc2FnZVR5cGU6IDJcclxuICAgICAgfSwgeyBpc19zZWxmOiB0cnVlLCBhdmF0YXI6IGRlZmF1bHRfYXZhdGFyfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBVc2VySW5mbyB9IHVzZXIgXHJcbiAgICovXHJcbiAgYXN5bmMgbm90aWZ5VXNlckNoYW5lZCggdXNlciApIHtcclxuICAgIGNvbnNvbGUubG9nKCdub3RpZnlVc2VyQ2hhbmVkOiAnLCB1c2VyKTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuO1xyXG4gICAgbGV0IHsgdWlkLCBhdmF0YXIgfSA9IHVzZXI7XHJcbiAgICB0aGlzLmN1ckNoYXRSZWNvcmRMaXN0Py5oaWRlKCk7XHJcbiAgICBsZXQgY3VyQ2hhdFJlY29yZExpc3QgPSB0aGlzLlJlY29yZExpc3RNYXAuZ2V0KHVpZCk/Lmxpc3Q7XHJcbiAgICBpZiggIWN1ckNoYXRSZWNvcmRMaXN0ICkge1xyXG4gICAgICBjdXJDaGF0UmVjb3JkTGlzdCA9IG5ldyBDaGF0UmVjb3JkTGlzdCh1aWQpO1xyXG4gICAgICB0aGlzLmNvbmZpZy5lbGUuaW5zZXJ0QmVmb3JlKGN1ckNoYXRSZWNvcmRMaXN0LmdldEVsZW1lbnQoKSwgdGhpcy5zZW5kTWVzc2FnZS5nZXRFbGVtZW50KCkpO1xyXG4gICAgICB0aGlzLlJlY29yZExpc3RNYXAuc2V0KHVpZCwge1xyXG4gICAgICAgIGxpc3Q6IGN1ckNoYXRSZWNvcmRMaXN0XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgeyBzdGF0dXMsIGRhdGEgfSA9IGF3YWl0IFNlcnZlci5nZXRVc2VyTWVzc2FnZURldGFpbCh7XHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIHJlbGF0ZVVpZDogdWlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdlU2l6ZTogMjAsIFxyXG4gICAgICAgIHBhZ2VOdW06IDFcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChzdGF0dXMgIT09IDAgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkpIHJldHVybjtcclxuICAgICAgZGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgIGN1ckNoYXRSZWNvcmRMaXN0LmFwcGVuZFJlY29yZChkYXRhLCB7XHJcbiAgICAgICAgaXNfc2VsZjogZmFsc2UsIGF2YXRhcjogYXZhdGFyXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnbWVzc2FnZSBkZXRhaWw6ICcsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJDaGF0UmVjb3JkTGlzdCA9IGN1ckNoYXRSZWNvcmRMaXN0O1xyXG4gICAgY3VyQ2hhdFJlY29yZExpc3Quc2hvdygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBDaGF0Um9vbVxyXG59IiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4uL1ZpZXcnO1xyXG5pbXBvcnQgeyBPYmplY3RVbml0IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL3VuaXQvT2JqZWN0VW5pdC5qcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9iZWFuL1VzZXJJbmZvLmpzJztcclxuXHJcbmNsYXNzIFVzZXJXcmFwIHtcclxuICAvKipAdHlwZSB7IFVzZXJJbmZvIH0gKi9cclxuICB1c2VyO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHt7XHJcbiAgICogIGNsYXNzTGlzdDogU3RyaW5nW10sXHJcbiAgICogIGVsZTogSFRNTEVsZW1lbnQsXHJcbiAgICogIGlucHV0OiBIVE1MRWxlbWVudCxcclxuICAgKiAgYmFkZ2U6IEhUTUxFbGVtZW50LFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgY2xhc3NMaXN0OiBbJ3VzZXItd3JhcCddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgaW5wdXQ6IG51bGwsXHJcbiAgICBiYWRnZTogbnVsbFxyXG4gIH1cclxuXHJcbiAgb24gPSB7XHJcbiAgICBjaGFuZ2U6IG51bGwsXHJcbiAgICBzZWxlY3RlZDogbnVsbCxcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7IFVzZXJJbmZvIH0gdXNlciBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggdXNlciApe1xyXG4gICAgLy8gc3VwZXIoKTtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgXHJcbiAgaW5pdCgpe1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1VzZXJXcmFwOiBpbml0LicpO1xyXG4gICAgdGhpcy5pbml0VmlldygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFZpZXcoKXtcclxuICAgIGlmIChPYmplY3RVbml0LmlzRW1wdHlPYmplY3QodGhpcy51c2VyKSkgcmV0dXJuO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1VzZXJXcmFwLmluaXRWaWV3OiAnLCB7IHVzZXI6IHRoaXMudXNlciwgY29uZmlnOiB0aGlzLmNvbmZpZ30pO1xyXG4gICAgbGV0IHVzZXIgPSB0aGlzLnVzZXI7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBsZXQgZWxlID0gY29uZmlnLmVsZTtcclxuICAgIGlmICggZWxlICkgcmV0dXJuO1xyXG4gICAgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgZWxlLmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dCB1aWQ9XCIke3VzZXIudWlkfVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsaXN0LXVzZXJcIiA+XHJcbiAgICA8ZGl2IGNsYXNzPVwidXNlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdGFuZ2xlLWJveCBzcXVhcmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXIgbm8xXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt1c2VyLmF2YXRhcn1cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2Ugbm8yXCI+wrc8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXdyYXBcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJuYW1lXCI+JHt1c2VyLm5pY2tuYW1lfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsYXN0LW1lc3NhZ2VcIj4ke3VzZXIubGFzdE1lc3NhZ2V9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbmZpZy5lbGUgPSBlbGU7XHJcbiAgICBjb25maWcuYmFkZ2UgPSBlbGUucXVlcnlTZWxlY3RvcignLmJhZGdlJyk7XHJcbiAgICBjb25maWcuaW5wdXQgPSBlbGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGNvbmZpZy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgaXNfY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcclxuICAgICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAgIGlzX2NoZWNrZWQsXHJcbiAgICAgICAgdWlkOiB0aGF0LnVzZXIudWlkXHJcbiAgICAgIH1cclxuICAgICAgdGhhdC5ub3RpZnlMaXN0ZW5lcignY2hhbmdlJywgcGFyYW0pO1xyXG4gICAgICB0aGF0Lm5vdGlmeUxpc3RlbmVyKCdzZWxlY3RlZCcsIHBhcmFtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnY2hhbmdlJyB8ICdzZWxlY3RlZCcgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IEZ1bmN0aW9uKHsgaXNfY2hlY2tlZDogQm9vbGVhbiwgdWlkOiBTdHJpbmcgfSkgfSBjYWxsYmFjayBcclxuICAgKi9cclxuICBzZXRMaXN0ZW5lciggZXZlbnRfbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICB0aGlzLm9uW2V2ZW50X25hbWVdID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7ICdjaGFuZ2UnIHwgJ3NlbGVjdGVkJyB9IGV2ZW50X25hbWVcclxuICAgKiBAcGFyYW0geyB7IGlzX2NoZWNrZWQ6IEJvb2xlYW4sIHVpZDogU3RyaW5nIH0gfSBwYXJhbVxyXG4gICAqL1xyXG4gIG5vdGlmeUxpc3RlbmVyKCBldmVudF9uYW1lLCBwYXJhbSApIHtcclxuICAgIGxldCBjYWxsYmFjayA9IHRoaXMub25bZXZlbnRfbmFtZV07XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhwYXJhbSk7XHJcbiAgfVxyXG5cclxuICBjaGVja2VkKCl7XHJcbiAgICB0aGlzLmNvbmZpZy5pbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJhZGdlKCBudW0gKSB7XHJcbiAgICBsZXQgYmFkZ2UgPSB0aGlzLmNvbmZpZy5iYWRnZTtcclxuICAgIGlmICggbnVtID4gMCkge1xyXG4gICAgICBiYWRnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWVsZScpO1xyXG4gICAgICBiYWRnZS5pbm5lclRleHQgPSBudW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYWRnZS5jbGFzc0xpc3QuYWRkKCdoaWRlLWVsZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VyV3JhcFxyXG59IiwiaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tICcuLi8uLi9hc3NldHMvanMvYmVhbi9Vc2VySW5mby5qcyc7XHJcbmltcG9ydCB7IFVzZXJXcmFwIH0gZnJvbSAnLi9Vc2VyV3JhcC5qcyc7XHJcbmltcG9ydCB7IE9iamVjdFVuaXQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvdW5pdC9PYmplY3RVbml0LmpzJztcclxuXHJcbmNsYXNzIFVzZXJMaXN0IHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7e1xyXG4gICAqICBpZDogU3RyaW5nLCBjbGFzc0xpc3Q6IFN0cmluZ1tdLCBlbGU6IEhUTUxFbGVtZW50LFxyXG4gICAqIH19XHJcbiAgICovXHJcbiAgY29uZmlnID0ge1xyXG4gICAgaWQ6ICd1c2VyX2xpc3QnLFxyXG4gICAgY2xhc3NMaXN0OiBbJ3VzZXItbGlzdCddLFxyXG4gICAgZWxlOiBudWxsLFxyXG4gIH1cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIHtcclxuICAgKiAgY3JlYXRlZF90aW1lOiBOdW1iZXIsXHJcbiAgICogIHVwZGF0ZWRfdGltZTogTnVtYmVyLFxyXG4gICAqICB1c2VyOiBVc2VySW5mbyxcclxuICAgKiAgdXNlcl93cmFwOiBVc2VyV3JhcCxcclxuICAgKiB9PiB9XHJcbiAgICovXHJcbiAgVXNlck1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgb24gPSB7XHJcbiAgICBjaGFuZ2VkX3VzZXI6IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkLCBjbGFzc0xpc3Qpe1xyXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHRoaXMuY29uZmlnLmlkID0gaWQ7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpKSB0aGlzLmNvbmZpZy5jbGFzc0xpc3QucHVzaCguLi5jbGFzc0xpc3QpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmluaXRWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBpbml0Vmlldygpe1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IGVsZSA9IGNvbmZpZy5lbGU7XHJcbiAgICBpZiAoZWxlKSByZXR1cm47XHJcbiAgICBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZS5pZCA9IGNvbmZpZy5pZDtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKC4uLmNvbmZpZy5jbGFzc0xpc3QpO1xyXG4gICAgY29uZmlnLmVsZSA9IGVsZTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyBVc2VySW5mbyB9IHVzZXIgXHJcbiAgICovXHJcbiAgYXBwZW5kVXNlciggdXNlciApIHtcclxuICAgIGlmIChPYmplY3RVbml0LmlzRW1wdHlPYmplY3QodXNlcikpIHJldHVybjtcclxuICAgIGxldCBjdXIgPSB0aGlzLlVzZXJNYXAuZ2V0KHVzZXIudWlkKTtcclxuICAgIGlmICghY3VyKSB7XHJcbiAgICAgIGN1ciA9IHtcclxuICAgICAgICBjcmVhdGVkX3RpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgdXNlcjogdXNlclxyXG4gICAgICB9XHJcbiAgICAgIGN1ci51c2VyX3dyYXAgPSAgbmV3IFVzZXJXcmFwKHVzZXIpO1xyXG4gICAgICBjdXIudXNlcl93cmFwLnNldExpc3RlbmVyKCdzZWxlY3RlZCcsIChwYXJhbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuVXNlck1hcC5nZXQodXNlci51aWQpLnVzZXJfd3JhcC51cGRhdGVCYWRnZSgwKTtcclxuICAgICAgICBpZiAoIXBhcmFtLmlzX2NoZWNrZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVyKCdjaGFuZ2VkX3VzZXInLCB7XHJcbiAgICAgICAgICBpc19jaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgdXNlcjogdXNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgY3VyLnVzZXJfd3JhcC51cGRhdGVCYWRnZSgxKTtcclxuICAgICAgdGhpcy5jb25maWcuZWxlLmFwcGVuZENoaWxkKGN1ci51c2VyX3dyYXAuZ2V0RWxlbWVudCgpKTtcclxuICAgICAgdGhpcy5Vc2VyTWFwLnNldCh1c2VyLnVpZCwgY3VyKTtcclxuICAgIH1cclxuICAgIGN1ci51cGRhdGVkX3RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYoY3VyLnVzZXIubGFzdE1lc3NhZ2UgIT09IHVzZXIubGFzdE1lc3NhZ2UpIGN1ci51c2VyX3dyYXAudXBkYXRlQmFkZ2UoMSk7XHJcbiAgICBjdXIudXNlciA9IHVzZXI7XHJcbiAgICBpZiAodGhpcy5Vc2VyTWFwLnNpemUgPT09IDEpIHtcclxuICAgICAgY3VyLnVzZXJfd3JhcC5jaGVja2VkKCk7XHJcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXIoJ2NoYW5nZWRfdXNlcicsIHsgaXNfY2hlY2tlZDogdHJ1ZSwgdXNlcjogY3VyLnVzZXIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyAnY2hhbmdlZF91c2VyJyB9IGV2ZW50X25hbWUgXHJcbiAgICogQHBhcmFtIHsgRnVuY3Rpb24oeyBpc19jaGVja2VkOiBCb29sZWFuLCB1aWQ6IFN0cmluZyB9KSB9IGNhbGxiYWNrIFxyXG4gICAqL1xyXG4gIHNldExpc3RlbmVyKCBldmVudF9uYW1lLCBjYWxsYmFjayApIHtcclxuICAgIHRoaXMub25bZXZlbnRfbmFtZV0gPSBjYWxsYmFjaztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsgJ2NoYW5nZWRfdXNlcicgfSBldmVudF9uYW1lIFxyXG4gICAqIEBwYXJhbSB7IEZ1bmN0aW9uKHsgaXNfY2hlY2tlZDogQm9vbGVhbiwgdXNlcjogVXNlckluZm8gfSkgfSBwYXJhbSBcclxuICAgKi9cclxuICBub3RpZnlMaXN0ZW5lciggZXZlbnRfbmFtZSwgcGFyYW0gKSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm9uW2V2ZW50X25hbWVdO1xyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2socGFyYW0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBVc2VyTGlzdFxyXG59IiwiY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqL1xyXG4gIGluaXQoKXt9XHJcblxyXG4gIC8qKkBhYnN0cmFjdCAqL1xyXG4gIGluaXRWaWV3KCl7fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBWaWV3XHJcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gYXhpb3M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFVzZXJMaXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyTGlzdCc7XHJcbmltcG9ydCB7IENoYXRSb29tIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DaGF0Um9vbSc7XHJcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy91bml0L1NlcnZlcic7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2JlYW4vVXNlckluZm8nO1xyXG5cclxuY29uc3QgdXNlcl9saXN0X2FyciA9IFtcclxuICB7XHJcbiAgICBpZDogMTAwMDEsXHJcbiAgICB1aWQ6IDEyMzQ1LFxyXG4gICAgbmlja25hbWU6ICdKYWNrIE1hJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vc3cuY29vbDNjLmNvbS91c2VyLzk5NTg4LzIwMTgvN2Y4YmIyNjAtOTQzYy00YjlkLWI1OGItNGVkNzgyYzg3NjFhLmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDAwMixcclxuICAgIHVpZDogMTIzNDYsXHJcbiAgICBuaWNrbmFtZTogJ1BvbnkgTWEnLFxyXG4gICAgYXZhdGFyOiAnaHR0cHM6Ly9zdy5jb29sM2MuY29tL3VzZXIvOTk1ODgvMjAxOC83ZjhiYjI2MC05NDNjLTRiOWQtYjU4Yi00ZWQ3ODJjODc2MWEuanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwMDAzLFxyXG4gICAgdWlkOiAxMjM0NyxcclxuICAgIG5pY2tuYW1lOiAnV2FuZyBKaWFubGluJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vc3cuY29vbDNjLmNvbS91c2VyLzk5NTg4LzIwMTgvN2Y4YmIyNjAtOTQzYy00YjlkLWI1OGItNGVkNzgyYzg3NjFhLmpwZydcclxuICB9XHJcbl1cclxuXHJcbmNsYXNzIFRoZVBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIC8qKkB0eXBlIHsgSFRNTEVsZW1lbnQgfSAqL1xyXG4gICAgZWxlOiBudWxsLFxyXG4gICAgLyoqQHR5cGUgeyBIVE1MRWxlbWVudCB9ICovXHJcbiAgICBwYXJlbnQ6IG51bGwsXHJcbiAgICAvKipAdHlwZSB7IFN0cmluZyB9ICovXHJcbiAgICBwYXJlbnRfY3NzU2VsZWN0b3I6ICcjY2hhdF9ibG9jaycsXHJcbiAgICAvKipAdHlwZSB7IEhUTUxFbGVtZW50IH0gKi9cclxuICB9XHJcblxyXG4gIGFscmVhZHkgPSB7XHJcbiAgICBpbml0OiB7XHJcbiAgICAgIHZpZXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKkB0eXBlIHsgVXNlckxpc3QgfSAqL1xyXG4gIHVzZXJMaXN0O1xyXG4gIC8qKkB0eXBlIHsgQ2hhdFJvb20gfSAqL1xyXG4gIGNoYXRSb29tO1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnVzZXJMaXN0ID0gbmV3IFVzZXJMaXN0KCk7XHJcbiAgICB0aGlzLmNoYXRSb29tID0gbmV3IENoYXRSb29tKCk7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMuYmluZExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7IE1hcDxTdHJpbmcsIFVzZXJJbmZvPiB9XHJcbiAgICovXHJcbiAgVXNlckluZm9NYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuaW5pdFZpZXcoKTtcclxuICAgIC8vIHVzZXJfbGlzdF9hcnIuZm9yRWFjaCh1c2VyID0+IHRoaXMudXNlckxpc3QuYXBwZW5kVXNlcih1c2VyKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnVGhlUGFnZTogJywgdGhpcyk7XHJcbiAgICB0aGlzLmdldE1lc3NhZ2VVc2VyTGlzdCgpO1xyXG4gIH1cclxuICBcclxuICBpbml0Vmlldygpe1xyXG4gICAgaWYgKCB0aGlzLmFscmVhZHkuaW5pdC52aWV3ICkgcmV0dXJuO1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBhcmVudF9jc3NTZWxlY3Rvcik7XHJcbiAgICBjb25maWcucGFyZW50ID0gcGFyZW50O1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMudXNlckxpc3QuZ2V0RWxlbWVudCgpKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNoYXRSb29tLmdldEVsZW1lbnQoKSk7XHJcbiAgICB0aGlzLmFscmVhZHkuaW5pdC52aWV3ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldE1lc3NhZ2VVc2VyTGlzdCgpe1xyXG4gICAgbGV0IHsgc3RhdHVzLCBkYXRhIH0gPSBhd2FpdCBTZXJ2ZXIuZ2V0TWVzc2FnZVVzZXJMaXN0KCk7XHJcbiAgICBpZiAoc3RhdHVzICE9PSAwKSByZXR1cm47XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0TWVzc2FnZVVzZXJMaXN0OiAnLCBkYXRhKTtcclxuICAgIGRhdGEuZm9yRWFjaCggdXNlciA9PiB7XHJcbiAgICAgIHVzZXIudWlkID0gdXNlci5yZWxhdGVVaWQ7XHJcbiAgICAgIHRoaXMudXNlckxpc3QuYXBwZW5kVXNlcih1c2VyKTtcclxuICAgICAgdGhpcy5Vc2VySW5mb01hcC5zZXQodXNlci51aWQsIHVzZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBiaW5kTGlzdGVuZXIoKXtcclxuICAgIHRoaXMudXNlckxpc3Quc2V0TGlzdGVuZXIoJ2NoYW5nZWRfdXNlcicsIChwYXJhbSkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnVGhlUGFnZSBjaGFuZ2VkIHVzZXI6ICcsIHBhcmFtKTtcclxuICAgICAgbGV0IHsgaXNfY2hlY2tlZCwgdXNlciB9ID0gcGFyYW07XHJcbiAgICAgIGlmIChpc19jaGVja2VkKSB0aGlzLmNoYXRSb29tLm5vdGlmeVVzZXJDaGFuZWQoIHVzZXIgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdGhlUGFnZSA9IG5ldyBUaGVQYWdlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==