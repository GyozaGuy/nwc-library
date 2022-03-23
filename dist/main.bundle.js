/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/UiBand/UiBand.js":
/*!*****************************************!*\
  !*** ./src/components/UiBand/UiBand.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _UiBand_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiBand.css */ "./src/components/UiBand/UiBand.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var UiBand = /*#__PURE__*/function (_Component) {
  _inherits(UiBand, _Component);

  var _super = _createSuper(UiBand);

  function UiBand() {
    _classCallCheck(this, UiBand);

    return _super.apply(this, arguments);
  }

  _createClass(UiBand, [{
    key: "connected",
    value: function connected() {
      this.style.setProperty('--ui-band-background-color', this.getAttribute('background-color'));
      this.style.setProperty('--ui-band-font-color', this.getAttribute('font-color'));
    }
  }, {
    key: "render",
    value: function render() {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<section><slot></slot></section>"])));
    }
  }]);

  return UiBand;
}(_helpers__WEBPACK_IMPORTED_MODULE_0__.Component);

UiBand.styles = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n  "])), _UiBand_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('ui-band', UiBand);

/***/ }),

/***/ "./src/components/UiButton/UiButton.js":
/*!*********************************************!*\
  !*** ./src/components/UiButton/UiButton.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _UiButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiButton.css */ "./src/components/UiButton/UiButton.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var UiButton = /*#__PURE__*/function (_Component) {
  _inherits(UiButton, _Component);

  var _super = _createSuper(UiButton);

  function UiButton() {
    var _this;

    _classCallCheck(this, UiButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.href = '';
    _this.target = '';
    return _this;
  }

  _createClass(UiButton, [{
    key: "connected",
    value: function connected() {
      this.href = this.getAttribute('href');
      this.target = this.getAttribute('target');
      this.update();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.href) {
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<a href=\"", "\" id=\"button\" target=\"", "\"><slot></slot></a>"])), this.href, this.target);
      }

      return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<button id=\"button\" type=\"button\"><slot></slot></button>"])));
    }
  }]);

  return UiButton;
}(_helpers__WEBPACK_IMPORTED_MODULE_0__.Component);

UiButton.styles = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n  "])), _UiButton_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('ui-button', UiButton);

/***/ }),

/***/ "./src/components/UiCard/UiCard.js":
/*!*****************************************!*\
  !*** ./src/components/UiCard/UiCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _UiCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiCard.css */ "./src/components/UiCard/UiCard.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var UiCard = /*#__PURE__*/function (_Component) {
  _inherits(UiCard, _Component);

  var _super = _createSuper(UiCard);

  function UiCard() {
    _classCallCheck(this, UiCard);

    return _super.apply(this, arguments);
  }

  _createClass(UiCard, [{
    key: "connected",
    value: function connected() {
      this.style.setProperty('--ui-card-background-color', this.getAttribute('background-color'));
      this.style.setProperty('--ui-card-font-color', this.getAttribute('font-color'));
    }
  }]);

  return UiCard;
}(_helpers__WEBPACK_IMPORTED_MODULE_0__.Component);

UiCard.styles = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n  "])), _UiCard_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('ui-card', UiCard);

/***/ }),

/***/ "./src/components/UiDialog/UiDialog.js":
/*!*********************************************!*\
  !*** ./src/components/UiDialog/UiDialog.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _UiDialog_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiDialog.css */ "./src/components/UiDialog/UiDialog.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var UiDialog = /*#__PURE__*/function (_Component) {
  _inherits(UiDialog, _Component);

  var _super = _createSuper(UiDialog);

  function UiDialog() {
    _classCallCheck(this, UiDialog);

    return _super.apply(this, arguments);
  }

  _createClass(UiDialog, [{
    key: "connected",
    value: function connected() {
      var _this = this;

      this.dialog.addEventListener('close', function () {
        _this.dialog.removeAttribute('opened');
      });
      var dialogObserver = new MutationObserver(function (mutations) {
        var _iterator = _createForOfIteratorHelper(mutations),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;

            if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
              mutation.target.setAttribute('opened', '');
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      dialogObserver.observe(this.dialog, {
        attributes: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <dialog id=\"dialog\">\n        <header>\n          <slot name=\"title\"></slot>\n          <button id=\"closeDialogButton\" onclick=\"close\" type=\"button\">\u274C</button>\n        </header>\n\n        <div id=\"content\"><slot name=\"content\"></slot></div>\n        <footer><slot name=\"footer\"></slot></footer>\n      </dialog>\n    "])));
    }
  }, {
    key: "close",
    value: function close() {
      this.dialog.close();
    }
  }, {
    key: "showModal",
    value: function showModal() {
      this.dialog.showModal();
    }
  }]);

  return UiDialog;
}(_helpers__WEBPACK_IMPORTED_MODULE_0__.Component);

UiDialog.styles = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n  "])), _UiDialog_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('ui-dialog', UiDialog);

/***/ }),

/***/ "./src/components/UiGrid/UiGrid.js":
/*!*****************************************!*\
  !*** ./src/components/UiGrid/UiGrid.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _UiGrid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiGrid.css */ "./src/components/UiGrid/UiGrid.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var UiGrid = /*#__PURE__*/function (_Component) {
  _inherits(UiGrid, _Component);

  var _super = _createSuper(UiGrid);

  function UiGrid() {
    _classCallCheck(this, UiGrid);

    return _super.apply(this, arguments);
  }

  _createClass(UiGrid, [{
    key: "connected",
    value: function connected() {
      this.style.setProperty('--ui-grid-columns', this.getAttribute('columns'));
    }
  }]);

  return UiGrid;
}(_helpers__WEBPACK_IMPORTED_MODULE_0__.Component);

UiGrid.styles = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n  "])), _UiGrid_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('ui-grid', UiGrid);

/***/ }),

/***/ "./src/components/UiRow/UiRow.js":
/*!***************************************!*\
  !*** ./src/components/UiRow/UiRow.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _UiRow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiRow.css */ "./src/components/UiRow/UiRow.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var UiRow = /*#__PURE__*/function (_Component) {
  _inherits(UiRow, _Component);

  var _super = _createSuper(UiRow);

  function UiRow() {
    _classCallCheck(this, UiRow);

    return _super.apply(this, arguments);
  }

  return _createClass(UiRow);
}(_helpers__WEBPACK_IMPORTED_MODULE_0__.Component);

UiRow.styles = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n  "])), _UiRow_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('ui-row', UiRow);

/***/ }),

/***/ "./src/components/UiSeparator/UiSeparator.js":
/*!***************************************************!*\
  !*** ./src/components/UiSeparator/UiSeparator.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _UiSeparator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiSeparator.css */ "./src/components/UiSeparator/UiSeparator.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var UiSeparator = /*#__PURE__*/function (_Component) {
  _inherits(UiSeparator, _Component);

  var _super = _createSuper(UiSeparator);

  function UiSeparator() {
    _classCallCheck(this, UiSeparator);

    return _super.apply(this, arguments);
  }

  return _createClass(UiSeparator);
}(_helpers__WEBPACK_IMPORTED_MODULE_0__.Component);

UiSeparator.styles = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n  "])), _UiSeparator_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('ui-separator', UiSeparator);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UiBand_UiBand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UiBand/UiBand */ "./src/components/UiBand/UiBand.js");
/* harmony import */ var _UiButton_UiButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiButton/UiButton */ "./src/components/UiButton/UiButton.js");
/* harmony import */ var _UiCard_UiCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UiCard/UiCard */ "./src/components/UiCard/UiCard.js");
/* harmony import */ var _UiDialog_UiDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UiDialog/UiDialog */ "./src/components/UiDialog/UiDialog.js");
/* harmony import */ var _UiGrid_UiGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UiGrid/UiGrid */ "./src/components/UiGrid/UiGrid.js");
/* harmony import */ var _UiRow_UiRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UiRow/UiRow */ "./src/components/UiRow/UiRow.js");
/* harmony import */ var _UiSeparator_UiSeparator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UiSeparator/UiSeparator */ "./src/components/UiSeparator/UiSeparator.js");








/***/ }),

/***/ "./src/helpers/Component.js":
/*!**********************************!*\
  !*** ./src/helpers/Component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/helpers/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_HTMLElement) {
  _inherits(_default, _HTMLElement);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    _this.update();

    return _this;
  }

  _createClass(_default, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      var _iterator = _createForOfIteratorHelper(this.shadowRoot.querySelectorAll('slot')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slot = _step.value;
          slot.addEventListener('slotchange', function (_ref) {
            var target = _ref.target;
            return _this2.handleChildrenUpdated(target);
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.connected();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.disconnected();
    }
  }, {
    key: "connected",
    value: function connected() {}
  }, {
    key: "disconnected",
    value: function disconnected() {}
  }, {
    key: "handleChildrenUpdated",
    value: function handleChildrenUpdated() {}
  }, {
    key: "populateReferences",
    value: function populateReferences() {
      function checkAttrs(element) {
        if (!this) {
          return;
        }

        var _iterator2 = _createForOfIteratorHelper(element.children),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var child = _step2.value;

            if (['SLOT', 'STYLE'].includes(child.tagName)) {
              continue;
            }

            var _iterator3 = _createForOfIteratorHelper(child.attributes),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _step3$value = _step3.value,
                    name = _step3$value.name,
                    value = _step3$value.value;

                if (name === 'id') {
                  this[value] = child;
                }

                if (name.startsWith('#')) {
                  this[name.substr(1)] = child;
                  child.removeAttribute(name);
                }

                if (name.startsWith('on')) {
                  child.addEventListener(name.substr(2), this[value].bind(this));
                  child.removeAttribute(name);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            checkAttrs.call(this, child);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      checkAttrs.call(this, this.shadowRoot);
    }
  }, {
    key: "render",
    value: function render() {
      return '<slot></slot>';
    }
  }, {
    key: "update",
    value: function update() {
      var fragment = (0,___WEBPACK_IMPORTED_MODULE_0__.fhtml)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "\n      ", "\n    "])), this.constructor.styles || '', this.render());
      (0,___WEBPACK_IMPORTED_MODULE_0__.clearChildren)(this.shadowRoot);
      this.shadowRoot.appendChild(fragment);
      this.populateReferences();
    }
  }]);

  return _default;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));



/***/ }),

/***/ "./src/helpers/domHelpers.js":
/*!***********************************!*\
  !*** ./src/helpers/domHelpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearChildren": () => (/* binding */ clearChildren),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "fhtml": () => (/* binding */ fhtml),
/* harmony export */   "html": () => (/* binding */ html)
/* harmony export */ });
function clearChildren(el) {
  while (el.lastChild) {
    el.lastChild.remove();
  }
}
function css(cssStrings) {
  for (var _len = arguments.length, parts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    parts[_key - 1] = arguments[_key];
  }

  return "\n    <style>\n      ".concat(cssStrings.reduce(function (acc, cur, i) {
    return "".concat(acc).concat(cur).concat(parts[i] || '');
  }, ''), "\n    </style>\n  ");
}
function fhtml(htmlStrings) {
  var template = document.createElement('template');

  for (var _len2 = arguments.length, parts = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    parts[_key2 - 1] = arguments[_key2];
  }

  template.innerHTML = html.apply(void 0, [htmlStrings].concat(parts));
  return template.content;
}
function html(htmlStrings) {
  for (var _len3 = arguments.length, parts = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    parts[_key3 - 1] = arguments[_key3];
  }

  return htmlStrings.reduce(function (acc, cur, i) {
    return "".concat(acc).concat(cur).concat(parts[i] || '');
  }, '');
}

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "clearChildren": () => (/* reexport safe */ _domHelpers__WEBPACK_IMPORTED_MODULE_1__.clearChildren),
/* harmony export */   "css": () => (/* reexport safe */ _domHelpers__WEBPACK_IMPORTED_MODULE_1__.css),
/* harmony export */   "fhtml": () => (/* reexport safe */ _domHelpers__WEBPACK_IMPORTED_MODULE_1__.fhtml),
/* harmony export */   "html": () => (/* reexport safe */ _domHelpers__WEBPACK_IMPORTED_MODULE_1__.html)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/helpers/Component.js");
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelpers */ "./src/helpers/domHelpers.js");



/***/ }),

/***/ "./src/components/UiBand/UiBand.css":
/*!******************************************!*\
  !*** ./src/components/UiBand/UiBand.css ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  background-color: var(--ui-band-background-color);\n  color: var(--ui-band-font-color);\n  display: block;\n  padding: var(--padding);\n  padding-left: 0;\n  padding-right: 0;\n  position: relative;\n  width: 100%;\n}\n\n:host > section {\n  margin: auto;\n  max-width: 60%;\n}\n\n:host([size='xs']) > section {\n  max-width: 40%;\n}\n\n:host([size='sm']) > section {\n  max-width: 50%;\n}\n\n:host([size='lg']) > section {\n  max-width: 70%;\n}\n\n:host([size='xl']) > section {\n  max-width: 80%;\n}\n\n:host([size='xxl']) > section {\n  max-width: 90%;\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiBand/UiBand.css"],"names":[],"mappings":"AAAA;EACE,iDAAiD;EACjD,gCAAgC;EAChC,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB","sourcesContent":[":host {\n  background-color: var(--ui-band-background-color);\n  color: var(--ui-band-font-color);\n  display: block;\n  padding: var(--padding);\n  padding-left: 0;\n  padding-right: 0;\n  position: relative;\n  width: 100%;\n}\n\n:host > section {\n  margin: auto;\n  max-width: 60%;\n}\n\n:host([size='xs']) > section {\n  max-width: 40%;\n}\n\n:host([size='sm']) > section {\n  max-width: 50%;\n}\n\n:host([size='lg']) > section {\n  max-width: 70%;\n}\n\n:host([size='xl']) > section {\n  max-width: 80%;\n}\n\n:host([size='xxl']) > section {\n  max-width: 90%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UiButton/UiButton.css":
/*!**********************************************!*\
  !*** ./src/components/UiButton/UiButton.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#button {\n  background-color: lightgray;\n  border: 1px solid #0007;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1em;\n  padding: var(--size-sm) var(--size-md);\n  text-decoration: none;\n}\n\n#button:active {\n  box-shadow: inset 0 2px 4px #0007;\n}\n\n:host([type='destructive']) #button {\n  background-color: #f00;\n  border: 1px solid #f007;\n  color: #400;\n}\n\n:host([type='minor']) #button {\n  background-color: transparent;\n  border: 1px solid transparent;\n  box-shadow: none;\n}\n\n:host([type='minor']) #button:active {\n  padding-bottom: calc(var(--size-sm) - 1px);\n  padding-top: calc(var(--size-sm) + 1px);\n}\n\n:host([type='primary']) #button {\n  background-color: #07f;\n  border: 1px solid #07f7;\n  color: #007;\n}\n\n:host([type='success']) #button {\n  background-color: #0a0;\n  border: 1px solid #0a07;\n  color: #030;\n}\n\n:host([type='warning']) #button {\n  background-color: #cc0;\n  border: 1px solid #7707;\n  color: #330;\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiButton/UiButton.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,mCAAmC;EACnC,2BAA2B;EAC3B,eAAe;EACf,qBAAqB;EACrB,cAAc;EACd,sCAAsC;EACtC,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,uCAAuC;AACzC;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb","sourcesContent":["#button {\n  background-color: lightgray;\n  border: 1px solid #0007;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1em;\n  padding: var(--size-sm) var(--size-md);\n  text-decoration: none;\n}\n\n#button:active {\n  box-shadow: inset 0 2px 4px #0007;\n}\n\n:host([type='destructive']) #button {\n  background-color: #f00;\n  border: 1px solid #f007;\n  color: #400;\n}\n\n:host([type='minor']) #button {\n  background-color: transparent;\n  border: 1px solid transparent;\n  box-shadow: none;\n}\n\n:host([type='minor']) #button:active {\n  padding-bottom: calc(var(--size-sm) - 1px);\n  padding-top: calc(var(--size-sm) + 1px);\n}\n\n:host([type='primary']) #button {\n  background-color: #07f;\n  border: 1px solid #07f7;\n  color: #007;\n}\n\n:host([type='success']) #button {\n  background-color: #0a0;\n  border: 1px solid #0a07;\n  color: #030;\n}\n\n:host([type='warning']) #button {\n  background-color: #cc0;\n  border: 1px solid #7707;\n  color: #330;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UiCard/UiCard.css":
/*!******************************************!*\
  !*** ./src/components/UiCard/UiCard.css ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  background-color: var(--ui-card-background-color, lightgrey);\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  color: var(--ui-card-font-color);\n  display: inline-block;\n  font-size: var(--font-size);\n  padding: var(--padding);\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiCard/UiCard.css"],"names":[],"mappings":"AAAA;EACE,4DAA4D;EAC5D,mCAAmC;EACnC,2BAA2B;EAC3B,gCAAgC;EAChC,qBAAqB;EACrB,2BAA2B;EAC3B,uBAAuB;AACzB","sourcesContent":[":host {\n  background-color: var(--ui-card-background-color, lightgrey);\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  color: var(--ui-card-font-color);\n  display: inline-block;\n  font-size: var(--font-size);\n  padding: var(--padding);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UiDialog/UiDialog.css":
/*!**********************************************!*\
  !*** ./src/components/UiDialog/UiDialog.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "dialog {\n  border: 0;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  opacity: 0;\n  padding: 0;\n  transition: opacity 0.25s;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0);\n  transition: background-color 0.25s;\n}\n\ndialog[opened] {\n  opacity: 1;\n}\n\ndialog[opened]::backdrop {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nheader {\n  align-items: center;\n  background-color: #ecebea;\n  display: flex;\n  font-size: 1.25em;\n  justify-content: space-between;\n  padding: var(--size-md);\n}\n\n#closeDialogButton {\n  background: 0;\n  border: 0;\n  cursor: pointer;\n  padding: 0;\n}\n\n#closeDialogButton:hover {\n  text-shadow: 0 1px 2px #0007;\n}\n\n#content {\n  padding: var(--size-md);\n}\n\nfooter {\n  background-color: #ecebea;\n  display: flex;\n  justify-content: flex-end;\n  padding: var(--size-md);\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiDialog/UiDialog.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,mCAAmC;EACnC,2BAA2B;EAC3B,UAAU;EACV,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,kCAAkC;EAClC,kCAAkC;AACpC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,yBAAyB;EACzB,uBAAuB;AACzB","sourcesContent":["dialog {\n  border: 0;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  opacity: 0;\n  padding: 0;\n  transition: opacity 0.25s;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0);\n  transition: background-color 0.25s;\n}\n\ndialog[opened] {\n  opacity: 1;\n}\n\ndialog[opened]::backdrop {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nheader {\n  align-items: center;\n  background-color: #ecebea;\n  display: flex;\n  font-size: 1.25em;\n  justify-content: space-between;\n  padding: var(--size-md);\n}\n\n#closeDialogButton {\n  background: 0;\n  border: 0;\n  cursor: pointer;\n  padding: 0;\n}\n\n#closeDialogButton:hover {\n  text-shadow: 0 1px 2px #0007;\n}\n\n#content {\n  padding: var(--size-md);\n}\n\nfooter {\n  background-color: #ecebea;\n  display: flex;\n  justify-content: flex-end;\n  padding: var(--size-md);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UiGrid/UiGrid.css":
/*!******************************************!*\
  !*** ./src/components/UiGrid/UiGrid.css ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  display: grid;\n  gap: var(--size-md);\n  grid-template-columns: repeat(var(--ui-grid-columns, 12), 1fr);\n  padding: var(--size-md);\n}\n\n:host([gap='none']),\n:host([no-gap]) {\n  gap: 0;\n  padding: 0;\n}\n\n:host([gap='xs']) {\n  gap: var(--size-xs);\n}\n\n:host([gap='xs']:not([no-padding]):not([padding])) {\n  padding: var(--size-xs);\n}\n\n:host([gap='sm']) {\n  gap: var(--size-sm);\n}\n\n:host([gap='sm']:not([no-padding]):not([padding])) {\n  padding: var(--size-sm);\n}\n\n:host([gap='lg']) {\n  gap: var(--size-lg);\n}\n\n:host([gap='lg']:not([no-padding]):not([padding])) {\n  padding: var(--size-lg);\n}\n\n:host([gap='xl']) {\n  gap: var(--size-xl);\n}\n\n:host([gap='xl']:not([no-padding]):not([padding])) {\n  padding: var(--size-xl);\n}\n\n:host([gap='xxl']) {\n  gap: var(--size-xxl);\n}\n\n:host([gap='xxl']:not([no-padding]):not([padding])) {\n  padding: var(--size-xxl);\n}\n\n::slotted([columns='2']) {\n  grid-column: span 2;\n}\n\n::slotted([columns='3']) {\n  grid-column: span 3;\n}\n\n::slotted([columns='4']) {\n  grid-column: span 4;\n}\n\n::slotted([columns='5']) {\n  grid-column: span 5;\n}\n\n::slotted([columns='6']) {\n  grid-column: span 6;\n}\n\n::slotted([columns='7']) {\n  grid-column: span 7;\n}\n\n::slotted([columns='8']) {\n  grid-column: span 8;\n}\n\n::slotted([columns='9']) {\n  grid-column: span 9;\n}\n\n::slotted([columns='10']) {\n  grid-column: span 10;\n}\n\n::slotted([columns='11']) {\n  grid-column: span 11;\n}\n\n::slotted([columns='12']) {\n  grid-column: span 12;\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiGrid/UiGrid.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8DAA8D;EAC9D,uBAAuB;AACzB;;AAEA;;EAEE,MAAM;EACN,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":[":host {\n  display: grid;\n  gap: var(--size-md);\n  grid-template-columns: repeat(var(--ui-grid-columns, 12), 1fr);\n  padding: var(--size-md);\n}\n\n:host([gap='none']),\n:host([no-gap]) {\n  gap: 0;\n  padding: 0;\n}\n\n:host([gap='xs']) {\n  gap: var(--size-xs);\n}\n\n:host([gap='xs']:not([no-padding]):not([padding])) {\n  padding: var(--size-xs);\n}\n\n:host([gap='sm']) {\n  gap: var(--size-sm);\n}\n\n:host([gap='sm']:not([no-padding]):not([padding])) {\n  padding: var(--size-sm);\n}\n\n:host([gap='lg']) {\n  gap: var(--size-lg);\n}\n\n:host([gap='lg']:not([no-padding]):not([padding])) {\n  padding: var(--size-lg);\n}\n\n:host([gap='xl']) {\n  gap: var(--size-xl);\n}\n\n:host([gap='xl']:not([no-padding]):not([padding])) {\n  padding: var(--size-xl);\n}\n\n:host([gap='xxl']) {\n  gap: var(--size-xxl);\n}\n\n:host([gap='xxl']:not([no-padding]):not([padding])) {\n  padding: var(--size-xxl);\n}\n\n::slotted([columns='2']) {\n  grid-column: span 2;\n}\n\n::slotted([columns='3']) {\n  grid-column: span 3;\n}\n\n::slotted([columns='4']) {\n  grid-column: span 4;\n}\n\n::slotted([columns='5']) {\n  grid-column: span 5;\n}\n\n::slotted([columns='6']) {\n  grid-column: span 6;\n}\n\n::slotted([columns='7']) {\n  grid-column: span 7;\n}\n\n::slotted([columns='8']) {\n  grid-column: span 8;\n}\n\n::slotted([columns='9']) {\n  grid-column: span 9;\n}\n\n::slotted([columns='10']) {\n  grid-column: span 10;\n}\n\n::slotted([columns='11']) {\n  grid-column: span 11;\n}\n\n::slotted([columns='12']) {\n  grid-column: span 12;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UiRow/UiRow.css":
/*!****************************************!*\
  !*** ./src/components/UiRow/UiRow.css ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  align-items: center;\n  display: flex;\n  gap: var(--size-md);\n}\n\n:host([gap='none']),\n:host([no-gap]) {\n  gap: 0;\n}\n\n:host([gap='xs']) {\n  gap: var(--size-xs);\n}\n\n:host([gap='sm']) {\n  gap: var(--size-sm);\n}\n\n:host([gap='lg']) {\n  gap: var(--size-lg);\n}\n\n:host([gap='xl']) {\n  gap: var(--size-xl);\n}\n\n:host([gap='xxl']) {\n  gap: var(--size-xxl);\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiRow/UiRow.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,MAAM;AACR;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":[":host {\n  align-items: center;\n  display: flex;\n  gap: var(--size-md);\n}\n\n:host([gap='none']),\n:host([no-gap]) {\n  gap: 0;\n}\n\n:host([gap='xs']) {\n  gap: var(--size-xs);\n}\n\n:host([gap='sm']) {\n  gap: var(--size-sm);\n}\n\n:host([gap='lg']) {\n  gap: var(--size-lg);\n}\n\n:host([gap='xl']) {\n  gap: var(--size-xl);\n}\n\n:host([gap='xxl']) {\n  gap: var(--size-xxl);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UiSeparator/UiSeparator.css":
/*!****************************************************!*\
  !*** ./src/components/UiSeparator/UiSeparator.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  display: block;\n  padding: var(--size-md);\n}\n\n:host([size=\"xs\"]) {\n  padding: var(--size-xs);\n}\n\n:host([size=\"sm\"]) {\n  padding: var(--size-sm);\n}\n\n:host([size=\"lg\"]) {\n  padding: var(--size-lg);\n}\n\n:host([size=\"xl\"]) {\n  padding: var(--size-xl);\n}\n\n:host([size=\"xxl\"]) {\n  padding: var(--size-xxl);\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiSeparator/UiSeparator.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":[":host {\n  display: block;\n  padding: var(--size-md);\n}\n\n:host([size=\"xs\"]) {\n  padding: var(--size-xs);\n}\n\n:host([size=\"sm\"]) {\n  padding: var(--size-sm);\n}\n\n:host([size=\"lg\"]) {\n  padding: var(--size-lg);\n}\n\n:host([size=\"xl\"]) {\n  padding: var(--size-xl);\n}\n\n:host([size=\"xxl\"]) {\n  padding: var(--size-xxl);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-size-xs: 12px;\n  --font-size-sm: 14px;\n  --font-size-md: 16px;\n  --font-size-lg: 18px;\n  --font-size-xl: 20px;\n  --font-size-xxl: 22px;\n\n  --size-xs: 4px;\n  --size-sm: 8px;\n  --size-md: 16px;\n  --size-lg: 32px;\n  --size-xl: 64px;\n  --size-xxl: 128px;\n\n  --border-radius: 4px;\n  --padding: var(--size-md);\n}\n\n/* UI Styles */\n\n[bleed] {\n  margin: calc(var(--padding) * -1);\n}\n\n[bleed-bottom] {\n  margin-bottom: calc(var(--padding) * -1);\n}\n\n[bleed-left] {\n  margin-left: calc(var(--padding) * -1);\n}\n\n[bleed-right] {\n  margin-right: calc(var(--padding) * -1);\n}\n\n[bleed-sides] {\n  margin-left: calc(var(--padding) * -1);\n  margin-right: calc(var(--padding) * -1);\n}\n\n[bleed-top] {\n  margin-top: calc(var(--padding) * -1);\n}\n\n[font-size=\"xs\"] {\n  --font-size: var(--font-size-xs);\n}\n\n[font-size=\"sm\"] {\n  --font-size: var(--font-size-sm);\n}\n\n[font-size=\"md\"] {\n  --font-size: var(--font-size-md);\n}\n\n[font-size=\"lg\"] {\n  --font-size: var(--font-size-lg);\n}\n\n[font-size=\"xl\"] {\n  --font-size: var(--font-size-xl);\n}\n\n[font-size=\"xxl\"] {\n  --font-size: var(--font-size-xxl);\n}\n\n[no-padding] {\n  padding: unset;\n}\n\n[padding=\"xs\"] {\n  --padding: var(--size-xs);\n  padding: var(--size-xs);\n}\n\n[padding=\"sm\"] {\n  --padding: var(--size-sm);\n  padding: var(--size-sm);\n}\n\n[padding=\"md\"] {\n  --padding: var(--size-md);\n  padding: var(--size-md);\n}\n\n[padding=\"lg\"] {\n  --padding: var(--size-lg);\n  padding: var(--size-lg);\n}\n\n[padding=\"xl\"] {\n  --padding: var(--size-xl);\n  padding: var(--size-xl);\n}\n\n[padding=\"xxl\"] {\n  --padding: var(--size-xxl);\n  padding: var(--size-xxl);\n}\n\n/* Element Styles */\n\ninput[type=\"text\"] {\n  border: 1px solid #0007;\n  border-radius: var(--border-radius);\n  box-shadow: inset 0 2px 4px #0007;\n  outline: none;\n  padding: var(--size-sm);\n}\n\ninput[type=\"text\"]:focus {\n  border: 1px solid #07f7;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;;EAErB,cAAc;EACd,cAAc;EACd,eAAe;EACf,eAAe;EACf,eAAe;EACf,iBAAiB;;EAEjB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA,cAAc;;AAEd;EACE,iCAAiC;AACnC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,sCAAsC;EACtC,uCAAuC;AACzC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA,mBAAmB;;AAEnB;EACE,uBAAuB;EACvB,mCAAmC;EACnC,iCAAiC;EACjC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[":root {\n  --font-size-xs: 12px;\n  --font-size-sm: 14px;\n  --font-size-md: 16px;\n  --font-size-lg: 18px;\n  --font-size-xl: 20px;\n  --font-size-xxl: 22px;\n\n  --size-xs: 4px;\n  --size-sm: 8px;\n  --size-md: 16px;\n  --size-lg: 32px;\n  --size-xl: 64px;\n  --size-xxl: 128px;\n\n  --border-radius: 4px;\n  --padding: var(--size-md);\n}\n\n/* UI Styles */\n\n[bleed] {\n  margin: calc(var(--padding) * -1);\n}\n\n[bleed-bottom] {\n  margin-bottom: calc(var(--padding) * -1);\n}\n\n[bleed-left] {\n  margin-left: calc(var(--padding) * -1);\n}\n\n[bleed-right] {\n  margin-right: calc(var(--padding) * -1);\n}\n\n[bleed-sides] {\n  margin-left: calc(var(--padding) * -1);\n  margin-right: calc(var(--padding) * -1);\n}\n\n[bleed-top] {\n  margin-top: calc(var(--padding) * -1);\n}\n\n[font-size=\"xs\"] {\n  --font-size: var(--font-size-xs);\n}\n\n[font-size=\"sm\"] {\n  --font-size: var(--font-size-sm);\n}\n\n[font-size=\"md\"] {\n  --font-size: var(--font-size-md);\n}\n\n[font-size=\"lg\"] {\n  --font-size: var(--font-size-lg);\n}\n\n[font-size=\"xl\"] {\n  --font-size: var(--font-size-xl);\n}\n\n[font-size=\"xxl\"] {\n  --font-size: var(--font-size-xxl);\n}\n\n[no-padding] {\n  padding: unset;\n}\n\n[padding=\"xs\"] {\n  --padding: var(--size-xs);\n  padding: var(--size-xs);\n}\n\n[padding=\"sm\"] {\n  --padding: var(--size-sm);\n  padding: var(--size-sm);\n}\n\n[padding=\"md\"] {\n  --padding: var(--size-md);\n  padding: var(--size-md);\n}\n\n[padding=\"lg\"] {\n  --padding: var(--size-lg);\n  padding: var(--size-lg);\n}\n\n[padding=\"xl\"] {\n  --padding: var(--size-xl);\n  padding: var(--size-xl);\n}\n\n[padding=\"xxl\"] {\n  --padding: var(--size-xxl);\n  padding: var(--size-xxl);\n}\n\n/* Element Styles */\n\ninput[type=\"text\"] {\n  border: 1px solid #0007;\n  border-radius: var(--border-radius);\n  box-shadow: inset 0 2px 4px #0007;\n  outline: none;\n  padding: var(--size-sm);\n}\n\ninput[type=\"text\"]:focus {\n  border: 1px solid #07f7;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

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
/******/ 			id: moduleId,
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


var globalStyles = document.head.querySelector('style[data-global-styles]');

if (!globalStyles) {
  var styleEl = document.createElement('style');
  styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_1__["default"];
  document.head.appendChild(styleEl);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvY29tcG9uZW50cy9VaUJhbmQvVWlCYW5kLmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlCdXR0b24vVWlCdXR0b24uanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUNhcmQvVWlDYXJkLmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlEaWFsb2cvVWlEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUdyaWQvVWlHcmlkLmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlSb3cvVWlSb3cuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaVNlcGFyYXRvci9VaVNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2hlbHBlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2hlbHBlcnMvZG9tSGVscGVycy5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlCYW5kL1VpQmFuZC5jc3MiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUJ1dHRvbi9VaUJ1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUNhcmQvVWlDYXJkLmNzcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL1VpRGlhbG9nL1VpRGlhbG9nLmNzcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL1VpR3JpZC9VaUdyaWQuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlSb3cvVWlSb3cuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlTZXBhcmF0b3IvVWlTZXBhcmF0b3IuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlCYW5kLmNzcyc7XG5cbmNsYXNzIFVpQmFuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG5cbiAgY29ubmVjdGVkKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdWktYmFuZC1iYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2JhY2tncm91bmQtY29sb3InKSk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11aS1iYW5kLWZvbnQtY29sb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9udC1jb2xvcicpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8c2VjdGlvbj48c2xvdD48L3Nsb3Q+PC9zZWN0aW9uPmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1aS1iYW5kJywgVWlCYW5kKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlCdXR0b24uY3NzJztcblxuY2xhc3MgVWlCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICR7c3R5bGVzfVxuICBgO1xuICBocmVmID0gJyc7XG4gIHRhcmdldCA9ICcnO1xuXG4gIGNvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgcmV0dXJuIGh0bWxgPGEgaHJlZj1cIiR7dGhpcy5ocmVmfVwiIGlkPVwiYnV0dG9uXCIgdGFyZ2V0PVwiJHt0aGlzLnRhcmdldH1cIj48c2xvdD48L3Nsb3Q+PC9hPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgPGJ1dHRvbiBpZD1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj48c2xvdD48L3Nsb3Q+PC9idXR0b24+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWJ1dHRvbicsIFVpQnV0dG9uKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY3NzIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlDYXJkLmNzcyc7XG5cbmNsYXNzIFVpQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG5cbiAgY29ubmVjdGVkKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdWktY2FyZC1iYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2JhY2tncm91bmQtY29sb3InKSk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11aS1jYXJkLWZvbnQtY29sb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9udC1jb2xvcicpKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWNhcmQnLCBVaUNhcmQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjc3MsIGh0bWwgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9VaURpYWxvZy5jc3MnO1xuXG5jbGFzcyBVaURpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG5cbiAgY29ubmVjdGVkKCkge1xuICAgIHRoaXMuZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5kaWFsb2cucmVtb3ZlQXR0cmlidXRlKCdvcGVuZWQnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpYWxvZ09ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgbXV0YXRpb24udGFyZ2V0LnNldEF0dHJpYnV0ZSgnb3BlbmVkJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dPYnNlcnZlci5vYnNlcnZlKHRoaXMuZGlhbG9nLCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGlhbG9nIGlkPVwiZGlhbG9nXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCI+PC9zbG90PlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZURpYWxvZ0J1dHRvblwiIG9uY2xpY2s9XCJjbG9zZVwiIHR5cGU9XCJidXR0b25cIj7inYw8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj48c2xvdCBuYW1lPVwiY29udGVudFwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGZvb3Rlcj48c2xvdCBuYW1lPVwiZm9vdGVyXCI+PC9zbG90PjwvZm9vdGVyPlxuICAgICAgPC9kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlhbG9nLmNsb3NlKCk7XG4gIH1cblxuICBzaG93TW9kYWwoKSB7XG4gICAgdGhpcy5kaWFsb2cuc2hvd01vZGFsKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1aS1kaWFsb2cnLCBVaURpYWxvZyk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNzcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VpR3JpZC5jc3MnO1xuXG5jbGFzcyBVaUdyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICR7c3R5bGVzfVxuICBgO1xuXG4gIGNvbm5lY3RlZCgpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLXVpLWdyaWQtY29sdW1ucycsIHRoaXMuZ2V0QXR0cmlidXRlKCdjb2x1bW5zJykpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWktZ3JpZCcsIFVpR3JpZCk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNzcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VpUm93LmNzcyc7XG5cbmNsYXNzIFVpUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAke3N0eWxlc31cbiAgYDtcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1aS1yb3cnLCBVaVJvdyk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNzcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VpU2VwYXJhdG9yLmNzcyc7XG5cbmNsYXNzIFVpU2VwYXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAke3N0eWxlc31cbiAgYDtcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1aS1zZXBhcmF0b3InLCBVaVNlcGFyYXRvcik7XG4iLCJpbXBvcnQgJy4vVWlCYW5kL1VpQmFuZCc7XG5pbXBvcnQgJy4vVWlCdXR0b24vVWlCdXR0b24nO1xuaW1wb3J0ICcuL1VpQ2FyZC9VaUNhcmQnO1xuaW1wb3J0ICcuL1VpRGlhbG9nL1VpRGlhbG9nJztcbmltcG9ydCAnLi9VaUdyaWQvVWlHcmlkJztcbmltcG9ydCAnLi9VaVJvdy9VaVJvdyc7XG5pbXBvcnQgJy4vVWlTZXBhcmF0b3IvVWlTZXBhcmF0b3InO1xuIiwiaW1wb3J0IHsgY2xlYXJDaGlsZHJlbiwgZmh0bWwgfSBmcm9tICcuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpKSB7XG4gICAgICBzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4gdGhpcy5oYW5kbGVDaGlsZHJlblVwZGF0ZWQodGFyZ2V0KSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25uZWN0ZWQoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZGlzY29ubmVjdGVkKCk7XG4gIH1cblxuICBjb25uZWN0ZWQoKSB7fVxuXG4gIGRpc2Nvbm5lY3RlZCgpIHt9XG5cbiAgaGFuZGxlQ2hpbGRyZW5VcGRhdGVkKCkge31cblxuICBwb3B1bGF0ZVJlZmVyZW5jZXMoKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tBdHRycyhlbGVtZW50KSB7XG4gICAgICBpZiAoIXRoaXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKFsnU0xPVCcsICdTVFlMRSddLmluY2x1ZGVzKGNoaWxkLnRhZ05hbWUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgdmFsdWUgfSBvZiBjaGlsZC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKG5hbWUgPT09ICdpZCcpIHtcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdID0gY2hpbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWUuc3Vic3RyKDEpXSA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcbiAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIobmFtZS5zdWJzdHIoMiksIHRoaXNbdmFsdWVdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrQXR0cnMuY2FsbCh0aGlzLCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tBdHRycy5jYWxsKHRoaXMsIHRoaXMuc2hhZG93Um9vdCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICc8c2xvdD48L3Nsb3Q+JztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGZodG1sYFxuICAgICAgJHt0aGlzLmNvbnN0cnVjdG9yLnN0eWxlcyB8fCAnJ31cbiAgICAgICR7dGhpcy5yZW5kZXIoKX1cbiAgICBgO1xuXG4gICAgY2xlYXJDaGlsZHJlbih0aGlzLnNoYWRvd1Jvb3QpO1xuICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgdGhpcy5wb3B1bGF0ZVJlZmVyZW5jZXMoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2hpbGRyZW4oZWwpIHtcbiAgd2hpbGUgKGVsLmxhc3RDaGlsZCkge1xuICAgIGVsLmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzKGNzc1N0cmluZ3MsIC4uLnBhcnRzKSB7XG4gIHJldHVybiBgXG4gICAgPHN0eWxlPlxuICAgICAgJHtjc3NTdHJpbmdzLnJlZHVjZSgoYWNjLCBjdXIsIGkpID0+IGAke2FjY30ke2N1cn0ke3BhcnRzW2ldIHx8ICcnfWAsICcnKX1cbiAgICA8L3N0eWxlPlxuICBgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmh0bWwoaHRtbFN0cmluZ3MsIC4uLnBhcnRzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbChodG1sU3RyaW5ncywgLi4ucGFydHMpO1xuICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWwoaHRtbFN0cmluZ3MsIC4uLnBhcnRzKSB7XG4gIHJldHVybiBodG1sU3RyaW5ncy5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiBgJHthY2N9JHtjdXJ9JHtwYXJ0c1tpXSB8fCAnJ31gLCAnJyk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcbmV4cG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNzcywgZmh0bWwsIGh0bWwgfSBmcm9tICcuL2RvbUhlbHBlcnMnO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aS1iYW5kLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXVpLWJhbmQtZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG46aG9zdCA+IHNlY3Rpb24ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSd4cyddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA0MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSdzbSddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSdsZyddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSd4bCddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSd4eGwnXSkgPiBzZWN0aW9uIHtcXG4gIG1heC13aWR0aDogOTAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9VaUJhbmQvVWlCYW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpob3N0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpLWJhbmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdWktYmFuZC1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbjpob3N0ID4gc2VjdGlvbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDYwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3hzJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDQwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3NtJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J2xnJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3hsJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3h4bCddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDc7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwNztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSkgdmFyKC0tc2l6ZS1tZCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAjMDAwNztcXG59XFxuXFxuOmhvc3QoW3R5cGU9J2Rlc3RydWN0aXZlJ10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDA3O1xcbiAgY29sb3I6ICM0MDA7XFxufVxcblxcbjpob3N0KFt0eXBlPSdtaW5vciddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG46aG9zdChbdHlwZT0nbWlub3InXSkgI2J1dHRvbjphY3RpdmUge1xcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tc2l6ZS1zbSkgLSAxcHgpO1xcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tc2l6ZS1zbSkgKyAxcHgpO1xcbn1cXG5cXG46aG9zdChbdHlwZT0ncHJpbWFyeSddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwN2Y7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDdmNztcXG4gIGNvbG9yOiAjMDA3O1xcbn1cXG5cXG46aG9zdChbdHlwZT0nc3VjY2VzcyddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGEwNztcXG4gIGNvbG9yOiAjMDMwO1xcbn1cXG5cXG46aG9zdChbdHlwZT0nd2FybmluZyddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzcwNztcXG4gIGNvbG9yOiAjMzMwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9VaUJ1dHRvbi9VaUJ1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDc7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwNztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSkgdmFyKC0tc2l6ZS1tZCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAjMDAwNztcXG59XFxuXFxuOmhvc3QoW3R5cGU9J2Rlc3RydWN0aXZlJ10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDA3O1xcbiAgY29sb3I6ICM0MDA7XFxufVxcblxcbjpob3N0KFt0eXBlPSdtaW5vciddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG46aG9zdChbdHlwZT0nbWlub3InXSkgI2J1dHRvbjphY3RpdmUge1xcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tc2l6ZS1zbSkgLSAxcHgpO1xcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tc2l6ZS1zbSkgKyAxcHgpO1xcbn1cXG5cXG46aG9zdChbdHlwZT0ncHJpbWFyeSddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwN2Y7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDdmNztcXG4gIGNvbG9yOiAjMDA3O1xcbn1cXG5cXG46aG9zdChbdHlwZT0nc3VjY2VzcyddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGEwNztcXG4gIGNvbG9yOiAjMDMwO1xcbn1cXG5cXG46aG9zdChbdHlwZT0nd2FybmluZyddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzcwNztcXG4gIGNvbG9yOiAjMzMwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aS1jYXJkLWJhY2tncm91bmQtY29sb3IsIGxpZ2h0Z3JleSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwNztcXG4gIGNvbG9yOiB2YXIoLS11aS1jYXJkLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1VpQ2FyZC9VaUNhcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNERBQTREO0VBQzVELG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpob3N0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgbGlnaHRncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICMwMDA3O1xcbiAgY29sb3I6IHZhcigtLXVpLWNhcmQtZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGlhbG9nIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICMwMDA3O1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xcbn1cXG5cXG5kaWFsb2dbb3BlbmVkXSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaWFsb2dbb3BlbmVkXTo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2ViZWE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuI2Nsb3NlRGlhbG9nQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY2xvc2VEaWFsb2dCdXR0b246aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCAjMDAwNztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlYmVhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVWlEaWFsb2cvVWlEaWFsb2cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICMwMDA3O1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xcbn1cXG5cXG5kaWFsb2dbb3BlbmVkXSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaWFsb2dbb3BlbmVkXTo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2ViZWE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuI2Nsb3NlRGlhbG9nQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY2xvc2VEaWFsb2dCdXR0b246aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCAjMDAwNztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlYmVhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogdmFyKC0tc2l6ZS1tZCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS11aS1ncmlkLWNvbHVtbnMsIDEyKSwgMWZyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdub25lJ10pLFxcbjpob3N0KFtuby1nYXBdKSB7XFxuICBnYXA6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZ10pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmddKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbjpob3N0KFtnYXA9J2xnJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbjpob3N0KFtnYXA9J2xnJ106bm90KFtuby1wYWRkaW5nXSk6bm90KFtwYWRkaW5nXSkpIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZ10pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHhsJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4eGwnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmddKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzInXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSczJ10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNCddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzUnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc2J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDY7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNyddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA3O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzgnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gODtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc5J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDk7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTAnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTA7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTEnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTE7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTInXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1VpR3JpZC9VaUdyaWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4REFBOEQ7RUFDOUQsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmhvc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogdmFyKC0tc2l6ZS1tZCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS11aS1ncmlkLWNvbHVtbnMsIDEyKSwgMWZyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdub25lJ10pLFxcbjpob3N0KFtuby1nYXBdKSB7XFxuICBnYXA6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZ10pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmddKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbjpob3N0KFtnYXA9J2xnJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbjpob3N0KFtnYXA9J2xnJ106bm90KFtuby1wYWRkaW5nXSk6bm90KFtwYWRkaW5nXSkpIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZ10pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHhsJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4eGwnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmddKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzInXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSczJ10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNCddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzUnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc2J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDY7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNyddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA3O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzgnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gODtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc5J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDk7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTAnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTA7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTEnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTE7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTInXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpob3N0IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbm9uZSddKSxcXG46aG9zdChbbm8tZ2FwXSkge1xcbiAgZ2FwOiAwO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdzbSddKSB7XFxuICBnYXA6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdsZyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4eGwnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1VpUm93L1VpUm93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLE1BQU07QUFDUjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6aG9zdCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbjpob3N0KFtnYXA9J25vbmUnXSksXFxuOmhvc3QoW25vLWdhcF0pIHtcXG4gIGdhcDogMDtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHMnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbGcnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neGwnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHhsJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwieHNcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14cyk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJzbVxcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcImxnXFxcIl0pIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwieGxcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14bCk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJ4eGxcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9VaVNlcGFyYXRvci9VaVNlcGFyYXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpob3N0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJ4c1xcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcInNtXFxcIl0pIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwibGdcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJ4bFxcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcInh4bFxcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZm9udC1zaXplLXhzOiAxMnB4O1xcbiAgLS1mb250LXNpemUtc206IDE0cHg7XFxuICAtLWZvbnQtc2l6ZS1tZDogMTZweDtcXG4gIC0tZm9udC1zaXplLWxnOiAxOHB4O1xcbiAgLS1mb250LXNpemUteGw6IDIwcHg7XFxuICAtLWZvbnQtc2l6ZS14eGw6IDIycHg7XFxuXFxuICAtLXNpemUteHM6IDRweDtcXG4gIC0tc2l6ZS1zbTogOHB4O1xcbiAgLS1zaXplLW1kOiAxNnB4O1xcbiAgLS1zaXplLWxnOiAzMnB4O1xcbiAgLS1zaXplLXhsOiA2NHB4O1xcbiAgLS1zaXplLXh4bDogMTI4cHg7XFxuXFxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC0tcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbi8qIFVJIFN0eWxlcyAqL1xcblxcbltibGVlZF0ge1xcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZGRpbmcpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtYm90dG9tXSB7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZGRpbmcpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtbGVmdF0ge1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZykgKiAtMSk7XFxufVxcblxcbltibGVlZC1yaWdodF0ge1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmcpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtc2lkZXNdIHtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmcpICogLTEpO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmcpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtdG9wXSB7XFxuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZGRpbmcpICogLTEpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4c1xcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJzbVxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJtZFxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJsZ1xcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4bFxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4eGxcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XFxufVxcblxcbltuby1wYWRkaW5nXSB7XFxuICBwYWRkaW5nOiB1bnNldDtcXG59XFxuXFxuW3BhZGRpbmc9XFxcInhzXFxcIl0ge1xcbiAgLS1wYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG5bcGFkZGluZz1cXFwic21cXFwiXSB7XFxuICAtLXBhZGRpbmc6IHZhcigtLXNpemUtc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbltwYWRkaW5nPVxcXCJtZFxcXCJdIHtcXG4gIC0tcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuW3BhZGRpbmc9XFxcImxnXFxcIl0ge1xcbiAgLS1wYWRkaW5nOiB2YXIoLS1zaXplLWxnKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG5bcGFkZGluZz1cXFwieGxcXFwiXSB7XFxuICAtLXBhZGRpbmc6IHZhcigtLXNpemUteGwpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14bCk7XFxufVxcblxcbltwYWRkaW5nPVxcXCJ4eGxcXFwiXSB7XFxuICAtLXBhZGRpbmc6IHZhcigtLXNpemUteHhsKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhsKTtcXG59XFxuXFxuLyogRWxlbWVudCBTdHlsZXMgKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDc7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAjMDAwNztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwN2Y3O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixxQkFBcUI7O0VBRXJCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWZvbnQtc2l6ZS14czogMTJweDtcXG4gIC0tZm9udC1zaXplLXNtOiAxNHB4O1xcbiAgLS1mb250LXNpemUtbWQ6IDE2cHg7XFxuICAtLWZvbnQtc2l6ZS1sZzogMThweDtcXG4gIC0tZm9udC1zaXplLXhsOiAyMHB4O1xcbiAgLS1mb250LXNpemUteHhsOiAyMnB4O1xcblxcbiAgLS1zaXplLXhzOiA0cHg7XFxuICAtLXNpemUtc206IDhweDtcXG4gIC0tc2l6ZS1tZDogMTZweDtcXG4gIC0tc2l6ZS1sZzogMzJweDtcXG4gIC0tc2l6ZS14bDogNjRweDtcXG4gIC0tc2l6ZS14eGw6IDEyOHB4O1xcblxcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtLXBhZGRpbmc6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG4vKiBVSSBTdHlsZXMgKi9cXG5cXG5bYmxlZWRdIHtcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWRkaW5nKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLWJvdHRvbV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWRkaW5nKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLWxlZnRdIHtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmcpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtcmlnaHRdIHtcXG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLXNpZGVzXSB7XFxuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nKSAqIC0xKTtcXG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLXRvcF0ge1xcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWRkaW5nKSAqIC0xKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwieHNcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwic21cXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwibWRcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwibGdcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwieGxcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwieHhsXFxcIl0ge1xcbiAgLS1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xcbn1cXG5cXG5bbm8tcGFkZGluZ10ge1xcbiAgcGFkZGluZzogdW5zZXQ7XFxufVxcblxcbltwYWRkaW5nPVxcXCJ4c1xcXCJdIHtcXG4gIC0tcGFkZGluZzogdmFyKC0tc2l6ZS14cyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuW3BhZGRpbmc9XFxcInNtXFxcIl0ge1xcbiAgLS1wYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG5bcGFkZGluZz1cXFwibWRcXFwiXSB7XFxuICAtLXBhZGRpbmc6IHZhcigtLXNpemUtbWQpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbltwYWRkaW5nPVxcXCJsZ1xcXCJdIHtcXG4gIC0tcGFkZGluZzogdmFyKC0tc2l6ZS1sZyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuW3BhZGRpbmc9XFxcInhsXFxcIl0ge1xcbiAgLS1wYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG5bcGFkZGluZz1cXFwieHhsXFxcIl0ge1xcbiAgLS1wYWRkaW5nOiB2YXIoLS1zaXplLXh4bCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblxcbi8qIEVsZW1lbnQgU3R5bGVzICovXFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA3O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggIzAwMDc7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDdmNztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXguY3NzJztcblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLWdsb2JhbC1zdHlsZXNdJyk7XG5cbmlmICghZ2xvYmFsU3R5bGVzKSB7XG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZUVsLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNzcyIsImh0bWwiLCJzdHlsZXMiLCJVaUJhbmQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZ2V0QXR0cmlidXRlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJVaUJ1dHRvbiIsImhyZWYiLCJ0YXJnZXQiLCJ1cGRhdGUiLCJVaUNhcmQiLCJVaURpYWxvZyIsImRpYWxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkaWFsb2dPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsInR5cGUiLCJhdHRyaWJ1dGVOYW1lIiwic2V0QXR0cmlidXRlIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJjbG9zZSIsInNob3dNb2RhbCIsIlVpR3JpZCIsIlVpUm93IiwiVWlTZXBhcmF0b3IiLCJjbGVhckNoaWxkcmVuIiwiZmh0bWwiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic2hhZG93Um9vdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzbG90IiwiaGFuZGxlQ2hpbGRyZW5VcGRhdGVkIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiY2hlY2tBdHRycyIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwiaW5jbHVkZXMiLCJ0YWdOYW1lIiwibmFtZSIsInZhbHVlIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImJpbmQiLCJjYWxsIiwiZnJhZ21lbnQiLCJjb25zdHJ1Y3RvciIsInJlbmRlciIsImFwcGVuZENoaWxkIiwicG9wdWxhdGVSZWZlcmVuY2VzIiwiSFRNTEVsZW1lbnQiLCJlbCIsImxhc3RDaGlsZCIsInJlbW92ZSIsImNzc1N0cmluZ3MiLCJwYXJ0cyIsInJlZHVjZSIsImFjYyIsImN1ciIsImkiLCJodG1sU3RyaW5ncyIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY29udGVudCIsImRlZmF1bHQiLCJnbG9iYWxTdHlsZXMiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsInN0eWxlRWwiLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=