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
/* harmony import */ var _UiGrid_UiGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UiGrid/UiGrid */ "./src/components/UiGrid/UiGrid.js");
/* harmony import */ var _UiRow_UiRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UiRow/UiRow */ "./src/components/UiRow/UiRow.js");
/* harmony import */ var _UiSeparator_UiSeparator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UiSeparator/UiSeparator */ "./src/components/UiSeparator/UiSeparator.js");







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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

// const CASCADING_STYLE_ATTRS = ['font-color', 'font-size'];
// const LOCAL_STYLE_ATTRS = ['background-color', 'gap', 'padding-size'];
// const ALL_ATTRS = [...CASCADING_STYLE_ATTRS, ...LOCAL_STYLE_ATTRS];
var _default = /*#__PURE__*/function (_HTMLElement) {
  _inherits(_default, _HTMLElement);

  var _super = _createSuper(_default);

  // uuid = Math.random().toString(36).substr(2, 11);
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
      // this.style.setProperty('--uuid', this.uuid);
      //
      // for (const attr of ALL_ATTRS) {
      //   if (!this.hasAttribute(attr)) {
      //     continue;
      //   }
      //
      //   if (CASCADING_STYLE_ATTRS.includes(attr)) {
      //     this.style.setProperty(`--${attr}`, this.getAttribute(attr));
      //   } else {
      //     this.style.setProperty(`--${this.uuid}-${attr}`, this.getAttribute(attr));
      //   }
      // }
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
    key: "render",
    value: function render() {
      return '<slot></slot>';
    }
  }, {
    key: "update",
    value: function update() {
      this.shadowRoot.innerHTML = "\n      ".concat(this.constructor.styles, "\n      ").concat(this.render(), "\n    ");
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
function html(htmlStrings) {
  for (var _len2 = arguments.length, parts = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    parts[_key2 - 1] = arguments[_key2];
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
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  background-color: var(--ui-band-background-color);\n  color: var(--ui-band-font-color);\n  display: block;\n  padding: var(--padding-size);\n  padding-left: 0;\n  padding-right: 0;\n  position: relative;\n  width: 100%;\n}\n\n:host > section {\n  margin: auto;\n  max-width: 60%;\n}\n\n:host([size='xs']) > section {\n  max-width: 40%;\n}\n\n:host([size='sm']) > section {\n  max-width: 50%;\n}\n\n:host([size='lg']) > section {\n  max-width: 70%;\n}\n\n:host([size='xl']) > section {\n  max-width: 80%;\n}\n\n:host([size='xxl']) > section {\n  max-width: 90%;\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiBand/UiBand.css"],"names":[],"mappings":"AAAA;EACE,iDAAiD;EACjD,gCAAgC;EAChC,cAAc;EACd,4BAA4B;EAC5B,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB","sourcesContent":[":host {\n  background-color: var(--ui-band-background-color);\n  color: var(--ui-band-font-color);\n  display: block;\n  padding: var(--padding-size);\n  padding-left: 0;\n  padding-right: 0;\n  position: relative;\n  width: 100%;\n}\n\n:host > section {\n  margin: auto;\n  max-width: 60%;\n}\n\n:host([size='xs']) > section {\n  max-width: 40%;\n}\n\n:host([size='sm']) > section {\n  max-width: 50%;\n}\n\n:host([size='lg']) > section {\n  max-width: 70%;\n}\n\n:host([size='xl']) > section {\n  max-width: 80%;\n}\n\n:host([size='xxl']) > section {\n  max-width: 90%;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#button {\n  background-color: lightgray;\n  border: 1px solid #0007;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1em;\n  padding: var(--size-sm) var(--size-md);\n  text-decoration: none;\n}\n\n#button:active {\n  box-shadow: inset 0 2px 4px #0007;\n}\n\n:host([type='destructive']) #button {\n  background-color: #f00a;\n  border: 1px solid #f007;\n  color: #400;\n}\n\n:host([type='minor']) #button {\n  background-color: transparent;\n  border: 1px solid transparent;\n  box-shadow: none;\n}\n\n:host([type='minor']) #button:active {\n  padding-bottom: calc(var(--size-sm) - 1px);\n  padding-top: calc(var(--size-sm) + 1px);\n}\n\n:host([type='primary']) #button {\n  background-color: #07fa;\n  border: 1px solid #07f7;\n  color: #007;\n}\n\n:host([type='success']) #button {\n  background-color: #0a0a;\n  border: 1px solid #0a07;\n  color: #030;\n}\n\n:host([type='warning']) #button {\n  background-color: #aa0a;\n  border: 1px solid #7707;\n  color: #330;\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiButton/UiButton.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,mCAAmC;EACnC,2BAA2B;EAC3B,eAAe;EACf,qBAAqB;EACrB,cAAc;EACd,sCAAsC;EACtC,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,uCAAuC;AACzC;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;AACb","sourcesContent":["#button {\n  background-color: lightgray;\n  border: 1px solid #0007;\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1em;\n  padding: var(--size-sm) var(--size-md);\n  text-decoration: none;\n}\n\n#button:active {\n  box-shadow: inset 0 2px 4px #0007;\n}\n\n:host([type='destructive']) #button {\n  background-color: #f00a;\n  border: 1px solid #f007;\n  color: #400;\n}\n\n:host([type='minor']) #button {\n  background-color: transparent;\n  border: 1px solid transparent;\n  box-shadow: none;\n}\n\n:host([type='minor']) #button:active {\n  padding-bottom: calc(var(--size-sm) - 1px);\n  padding-top: calc(var(--size-sm) + 1px);\n}\n\n:host([type='primary']) #button {\n  background-color: #07fa;\n  border: 1px solid #07f7;\n  color: #007;\n}\n\n:host([type='success']) #button {\n  background-color: #0a0a;\n  border: 1px solid #0a07;\n  color: #030;\n}\n\n:host([type='warning']) #button {\n  background-color: #aa0a;\n  border: 1px solid #7707;\n  color: #330;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  background-color: var(--ui-card-background-color, lightgrey);\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  color: var(--ui-card-font-color);\n  display: inline-block;\n  font-size: var(--font-size);\n  padding: var(--padding-size);\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiCard/UiCard.css"],"names":[],"mappings":"AAAA;EACE,4DAA4D;EAC5D,mCAAmC;EACnC,2BAA2B;EAC3B,gCAAgC;EAChC,qBAAqB;EACrB,2BAA2B;EAC3B,4BAA4B;AAC9B","sourcesContent":[":host {\n  background-color: var(--ui-card-background-color, lightgrey);\n  border-radius: var(--border-radius);\n  box-shadow: 0 2px 4px #0007;\n  color: var(--ui-card-font-color);\n  display: inline-block;\n  font-size: var(--font-size);\n  padding: var(--padding-size);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  display: grid;\n  gap: var(--size-md);\n  grid-template-columns: repeat(var(--ui-grid-columns, 12), 1fr);\n  padding: var(--size-md);\n}\n\n:host([gap='none']),\n:host([no-gap]) {\n  gap: 0;\n  padding: 0;\n}\n\n:host([gap='xs']) {\n  gap: var(--size-xs);\n}\n\n:host([gap='xs']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-xs);\n}\n\n:host([gap='sm']) {\n  gap: var(--size-sm);\n}\n\n:host([gap='sm']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-sm);\n}\n\n:host([gap='lg']) {\n  gap: var(--size-lg);\n}\n\n:host([gap='lg']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-lg);\n}\n\n:host([gap='xl']) {\n  gap: var(--size-xl);\n}\n\n:host([gap='xl']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-xl);\n}\n\n:host([gap='xxl']) {\n  gap: var(--size-xxl);\n}\n\n:host([gap='xxl']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-xxl);\n}\n\n::slotted([columns='2']) {\n  grid-column: span 2;\n}\n\n::slotted([columns='3']) {\n  grid-column: span 3;\n}\n\n::slotted([columns='4']) {\n  grid-column: span 4;\n}\n\n::slotted([columns='5']) {\n  grid-column: span 5;\n}\n\n::slotted([columns='6']) {\n  grid-column: span 6;\n}\n\n::slotted([columns='7']) {\n  grid-column: span 7;\n}\n\n::slotted([columns='8']) {\n  grid-column: span 8;\n}\n\n::slotted([columns='9']) {\n  grid-column: span 9;\n}\n\n::slotted([columns='10']) {\n  grid-column: span 10;\n}\n\n::slotted([columns='11']) {\n  grid-column: span 11;\n}\n\n::slotted([columns='12']) {\n  grid-column: span 12;\n}\n", "",{"version":3,"sources":["webpack://./src/components/UiGrid/UiGrid.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8DAA8D;EAC9D,uBAAuB;AACzB;;AAEA;;EAEE,MAAM;EACN,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":[":host {\n  display: grid;\n  gap: var(--size-md);\n  grid-template-columns: repeat(var(--ui-grid-columns, 12), 1fr);\n  padding: var(--size-md);\n}\n\n:host([gap='none']),\n:host([no-gap]) {\n  gap: 0;\n  padding: 0;\n}\n\n:host([gap='xs']) {\n  gap: var(--size-xs);\n}\n\n:host([gap='xs']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-xs);\n}\n\n:host([gap='sm']) {\n  gap: var(--size-sm);\n}\n\n:host([gap='sm']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-sm);\n}\n\n:host([gap='lg']) {\n  gap: var(--size-lg);\n}\n\n:host([gap='lg']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-lg);\n}\n\n:host([gap='xl']) {\n  gap: var(--size-xl);\n}\n\n:host([gap='xl']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-xl);\n}\n\n:host([gap='xxl']) {\n  gap: var(--size-xxl);\n}\n\n:host([gap='xxl']:not([no-padding]):not([padding-size])) {\n  padding: var(--size-xxl);\n}\n\n::slotted([columns='2']) {\n  grid-column: span 2;\n}\n\n::slotted([columns='3']) {\n  grid-column: span 3;\n}\n\n::slotted([columns='4']) {\n  grid-column: span 4;\n}\n\n::slotted([columns='5']) {\n  grid-column: span 5;\n}\n\n::slotted([columns='6']) {\n  grid-column: span 6;\n}\n\n::slotted([columns='7']) {\n  grid-column: span 7;\n}\n\n::slotted([columns='8']) {\n  grid-column: span 8;\n}\n\n::slotted([columns='9']) {\n  grid-column: span 9;\n}\n\n::slotted([columns='10']) {\n  grid-column: span 10;\n}\n\n::slotted([columns='11']) {\n  grid-column: span 11;\n}\n\n::slotted([columns='12']) {\n  grid-column: span 12;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-size-xs: 12px;\n  --font-size-sm: 14px;\n  --font-size-md: 16px;\n  --font-size-lg: 18px;\n  --font-size-xl: 20px;\n  --font-size-xxl: 22px;\n\n  --size-xs: 4px;\n  --size-sm: 8px;\n  --size-md: 16px;\n  --size-lg: 32px;\n  --size-xl: 64px;\n  --size-xxl: 128px;\n\n  --border-radius: 4px;\n  --padding-size: var(--size-md);\n}\n\n/* UI Styles */\n\n[bleed] {\n  margin: calc(var(--padding-size) * -1);\n}\n\n[bleed-bottom] {\n  margin-bottom: calc(var(--padding-size) * -1);\n}\n\n[bleed-left] {\n  margin-left: calc(var(--padding-size) * -1);\n}\n\n[bleed-right] {\n  margin-right: calc(var(--padding-size) * -1);\n}\n\n[bleed-sides] {\n  margin-left: calc(var(--padding-size) * -1);\n  margin-right: calc(var(--padding-size) * -1);\n}\n\n[bleed-top] {\n  margin-top: calc(var(--padding-size) * -1);\n}\n\n[font-size=\"xs\"] {\n  --font-size: var(--font-size-xs);\n}\n\n[font-size=\"sm\"] {\n  --font-size: var(--font-size-sm);\n}\n\n[font-size=\"md\"] {\n  --font-size: var(--font-size-md);\n}\n\n[font-size=\"lg\"] {\n  --font-size: var(--font-size-lg);\n}\n\n[font-size=\"xl\"] {\n  --font-size: var(--font-size-xl);\n}\n\n[font-size=\"xxl\"] {\n  --font-size: var(--font-size-xxl);\n}\n\n[no-padding] {\n  padding: unset;\n}\n\n[padding-size=\"xs\"] {\n  --padding-size: var(--size-xs);\n  padding: var(--size-xs);\n}\n\n[padding-size=\"sm\"] {\n  --padding-size: var(--size-sm);\n  padding: var(--size-sm);\n}\n\n[padding-size=\"md\"] {\n  --padding-size: var(--size-md);\n  padding: var(--size-md);\n}\n\n[padding-size=\"lg\"] {\n  --padding-size: var(--size-lg);\n  padding: var(--size-lg);\n}\n\n[padding-size=\"xl\"] {\n  --padding-size: var(--size-xl);\n  padding: var(--size-xl);\n}\n\n[padding-size=\"xxl\"] {\n  --padding-size: var(--size-xxl);\n  padding: var(--size-xxl);\n}\n\n/* Element Styles */\n\ninput[type=\"text\"] {\n  border: 1px solid #0007;\n  border-radius: var(--border-radius);\n  box-shadow: inset 0 2px 4px #0007;\n  outline: none;\n  padding: var(--size-sm);\n}\n\ninput[type=\"text\"]:focus {\n  border: 1px solid #07f7;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;;EAErB,cAAc;EACd,cAAc;EACd,eAAe;EACf,eAAe;EACf,eAAe;EACf,iBAAiB;;EAEjB,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA,cAAc;;AAEd;EACE,sCAAsC;AACxC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,2CAA2C;EAC3C,4CAA4C;AAC9C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,+BAA+B;EAC/B,wBAAwB;AAC1B;;AAEA,mBAAmB;;AAEnB;EACE,uBAAuB;EACvB,mCAAmC;EACnC,iCAAiC;EACjC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[":root {\n  --font-size-xs: 12px;\n  --font-size-sm: 14px;\n  --font-size-md: 16px;\n  --font-size-lg: 18px;\n  --font-size-xl: 20px;\n  --font-size-xxl: 22px;\n\n  --size-xs: 4px;\n  --size-sm: 8px;\n  --size-md: 16px;\n  --size-lg: 32px;\n  --size-xl: 64px;\n  --size-xxl: 128px;\n\n  --border-radius: 4px;\n  --padding-size: var(--size-md);\n}\n\n/* UI Styles */\n\n[bleed] {\n  margin: calc(var(--padding-size) * -1);\n}\n\n[bleed-bottom] {\n  margin-bottom: calc(var(--padding-size) * -1);\n}\n\n[bleed-left] {\n  margin-left: calc(var(--padding-size) * -1);\n}\n\n[bleed-right] {\n  margin-right: calc(var(--padding-size) * -1);\n}\n\n[bleed-sides] {\n  margin-left: calc(var(--padding-size) * -1);\n  margin-right: calc(var(--padding-size) * -1);\n}\n\n[bleed-top] {\n  margin-top: calc(var(--padding-size) * -1);\n}\n\n[font-size=\"xs\"] {\n  --font-size: var(--font-size-xs);\n}\n\n[font-size=\"sm\"] {\n  --font-size: var(--font-size-sm);\n}\n\n[font-size=\"md\"] {\n  --font-size: var(--font-size-md);\n}\n\n[font-size=\"lg\"] {\n  --font-size: var(--font-size-lg);\n}\n\n[font-size=\"xl\"] {\n  --font-size: var(--font-size-xl);\n}\n\n[font-size=\"xxl\"] {\n  --font-size: var(--font-size-xxl);\n}\n\n[no-padding] {\n  padding: unset;\n}\n\n[padding-size=\"xs\"] {\n  --padding-size: var(--size-xs);\n  padding: var(--size-xs);\n}\n\n[padding-size=\"sm\"] {\n  --padding-size: var(--size-sm);\n  padding: var(--size-sm);\n}\n\n[padding-size=\"md\"] {\n  --padding-size: var(--size-md);\n  padding: var(--size-md);\n}\n\n[padding-size=\"lg\"] {\n  --padding-size: var(--size-lg);\n  padding: var(--size-lg);\n}\n\n[padding-size=\"xl\"] {\n  --padding-size: var(--size-xl);\n  padding: var(--size-xl);\n}\n\n[padding-size=\"xxl\"] {\n  --padding-size: var(--size-xxl);\n  padding: var(--size-xxl);\n}\n\n/* Element Styles */\n\ninput[type=\"text\"] {\n  border: 1px solid #0007;\n  border-radius: var(--border-radius);\n  box-shadow: inset 0 2px 4px #0007;\n  outline: none;\n  padding: var(--size-sm);\n}\n\ninput[type=\"text\"]:focus {\n  border: 1px solid #07f7;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.Component),
/* harmony export */   "css": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   "html": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.html)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");



var globalStyles = document.head.querySelector('style[data-global-styles]');

if (!globalStyles) {
  var styleEl = document.createElement('style');
  styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_1__["default"];
  document.head.appendChild(styleEl);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1HLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxJQUFULENBQWNDLGFBQWQsQ0FBNEIsMkJBQTVCLENBQXJCOztBQUVBLElBQUksQ0FBQ0gsWUFBTCxFQUFtQjtBQUNqQixNQUFNSSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixPQUF2QixDQUFoQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLFdBQVIsR0FBc0IxQyxrREFBdEI7QUFDQXFDLEVBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjSyxXQUFkLENBQTBCSCxPQUExQjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL1VpQmFuZC9VaUJhbmQuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUJ1dHRvbi9VaUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL1VpQ2FyZC9VaUNhcmQuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUdyaWQvVWlHcmlkLmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlSb3cvVWlSb3cuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaVNlcGFyYXRvci9VaVNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2hlbHBlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2hlbHBlcnMvZG9tSGVscGVycy5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlCYW5kL1VpQmFuZC5jc3MiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUJ1dHRvbi9VaUJ1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUNhcmQvVWlDYXJkLmNzcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL1VpR3JpZC9VaUdyaWQuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlSb3cvVWlSb3cuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlTZXBhcmF0b3IvVWlTZXBhcmF0b3IuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlCYW5kLmNzcyc7XG5cbmNsYXNzIFVpQmFuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG5cbiAgY29ubmVjdGVkKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdWktYmFuZC1iYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2JhY2tncm91bmQtY29sb3InKSk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11aS1iYW5kLWZvbnQtY29sb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9udC1jb2xvcicpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8c2VjdGlvbj48c2xvdD48L3Nsb3Q+PC9zZWN0aW9uPmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1aS1iYW5kJywgVWlCYW5kKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlCdXR0b24uY3NzJztcblxuY2xhc3MgVWlCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICR7c3R5bGVzfVxuICBgO1xuICBocmVmID0gJyc7XG4gIHRhcmdldCA9ICcnO1xuXG4gIGNvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgcmV0dXJuIGh0bWxgPGEgaHJlZj1cIiR7dGhpcy5ocmVmfVwiIGlkPVwiYnV0dG9uXCIgdGFyZ2V0PVwiJHt0aGlzLnRhcmdldH1cIj48c2xvdD48L3Nsb3Q+PC9hPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgPGJ1dHRvbiBpZD1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj48c2xvdD48L3Nsb3Q+PC9idXR0b24+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWJ1dHRvbicsIFVpQnV0dG9uKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY3NzIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlDYXJkLmNzcyc7XG5cbmNsYXNzIFVpQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG5cbiAgY29ubmVjdGVkKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdWktY2FyZC1iYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2JhY2tncm91bmQtY29sb3InKSk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11aS1jYXJkLWZvbnQtY29sb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9udC1jb2xvcicpKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWNhcmQnLCBVaUNhcmQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjc3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9VaUdyaWQuY3NzJztcblxuY2xhc3MgVWlHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAke3N0eWxlc31cbiAgYDtcblxuICBjb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11aS1ncmlkLWNvbHVtbnMnLCB0aGlzLmdldEF0dHJpYnV0ZSgnY29sdW1ucycpKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWdyaWQnLCBVaUdyaWQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjc3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9VaVJvdy5jc3MnO1xuXG5jbGFzcyBVaVJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWktcm93JywgVWlSb3cpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjc3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9VaVNlcGFyYXRvci5jc3MnO1xuXG5jbGFzcyBVaVNlcGFyYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWktc2VwYXJhdG9yJywgVWlTZXBhcmF0b3IpO1xuIiwiaW1wb3J0ICcuL1VpQmFuZC9VaUJhbmQnO1xuaW1wb3J0ICcuL1VpQnV0dG9uL1VpQnV0dG9uJztcbmltcG9ydCAnLi9VaUNhcmQvVWlDYXJkJztcbmltcG9ydCAnLi9VaUdyaWQvVWlHcmlkJztcbmltcG9ydCAnLi9VaVJvdy9VaVJvdyc7XG5pbXBvcnQgJy4vVWlTZXBhcmF0b3IvVWlTZXBhcmF0b3InO1xuIiwiLy8gY29uc3QgQ0FTQ0FESU5HX1NUWUxFX0FUVFJTID0gWydmb250LWNvbG9yJywgJ2ZvbnQtc2l6ZSddO1xuLy8gY29uc3QgTE9DQUxfU1RZTEVfQVRUUlMgPSBbJ2JhY2tncm91bmQtY29sb3InLCAnZ2FwJywgJ3BhZGRpbmctc2l6ZSddO1xuLy8gY29uc3QgQUxMX0FUVFJTID0gWy4uLkNBU0NBRElOR19TVFlMRV9BVFRSUywgLi4uTE9DQUxfU1RZTEVfQVRUUlNdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgLy8gdXVpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11dWlkJywgdGhpcy51dWlkKTtcbiAgICAvL1xuICAgIC8vIGZvciAoY29uc3QgYXR0ciBvZiBBTExfQVRUUlMpIHtcbiAgICAvLyAgIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAvLyAgICAgY29udGludWU7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIGlmIChDQVNDQURJTkdfU1RZTEVfQVRUUlMuaW5jbHVkZXMoYXR0cikpIHtcbiAgICAvLyAgICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke2F0dHJ9YCwgdGhpcy5nZXRBdHRyaWJ1dGUoYXR0cikpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RoaXMudXVpZH0tJHthdHRyfWAsIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHIpKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICB0aGlzLmNvbm5lY3RlZCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5kaXNjb25uZWN0ZWQoKTtcbiAgfVxuXG4gIGNvbm5lY3RlZCgpIHt9XG5cbiAgZGlzY29ubmVjdGVkKCkge31cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICc8c2xvdD48L3Nsb3Q+JztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgJHt0aGlzLmNvbnN0cnVjdG9yLnN0eWxlc31cbiAgICAgICR7dGhpcy5yZW5kZXIoKX1cbiAgICBgO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xlYXJDaGlsZHJlbihlbCkge1xuICB3aGlsZSAoZWwubGFzdENoaWxkKSB7XG4gICAgZWwubGFzdENoaWxkLnJlbW92ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjc3MoY3NzU3RyaW5ncywgLi4ucGFydHMpIHtcbiAgcmV0dXJuIGBcbiAgICA8c3R5bGU+XG4gICAgICAke2Nzc1N0cmluZ3MucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4gYCR7YWNjfSR7Y3VyfSR7cGFydHNbaV0gfHwgJyd9YCwgJycpfVxuICAgIDwvc3R5bGU+XG4gIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sKGh0bWxTdHJpbmdzLCAuLi5wYXJ0cykge1xuICByZXR1cm4gaHRtbFN0cmluZ3MucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4gYCR7YWNjfSR7Y3VyfSR7cGFydHNbaV0gfHwgJyd9YCwgJycpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5leHBvcnQgeyBjbGVhckNoaWxkcmVuLCBjc3MsIGh0bWwgfSBmcm9tICcuL2RvbUhlbHBlcnMnO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aS1iYW5kLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXVpLWJhbmQtZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctc2l6ZSk7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbjpob3N0ID4gc2VjdGlvbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDYwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3hzJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDQwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3NtJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J2xnJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3hsJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3h4bCddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1VpQmFuZC9VaUJhbmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaURBQWlEO0VBQ2pELGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmhvc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWktYmFuZC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS11aS1iYW5kLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXNpemUpO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG46aG9zdCA+IHNlY3Rpb24ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSd4cyddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA0MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSdzbSddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSdsZyddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSd4bCddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbjpob3N0KFtzaXplPSd4eGwnXSkgPiBzZWN0aW9uIHtcXG4gIG1heC13aWR0aDogOTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA3O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggIzAwMDc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pIHZhcigtLXNpemUtbWQpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggIzAwMDc7XFxufVxcblxcbjpob3N0KFt0eXBlPSdkZXN0cnVjdGl2ZSddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDBhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwMDc7XFxuICBjb2xvcjogIzQwMDtcXG59XFxuXFxuOmhvc3QoW3R5cGU9J21pbm9yJ10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjpob3N0KFt0eXBlPSdtaW5vciddKSAjYnV0dG9uOmFjdGl2ZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1zaXplLXNtKSAtIDFweCk7XFxuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1zaXplLXNtKSArIDFweCk7XFxufVxcblxcbjpob3N0KFt0eXBlPSdwcmltYXJ5J10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3ZmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDdmNztcXG4gIGNvbG9yOiAjMDA3O1xcbn1cXG5cXG46aG9zdChbdHlwZT0nc3VjY2VzcyddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhMDc7XFxuICBjb2xvcjogIzAzMDtcXG59XFxuXFxuOmhvc3QoW3R5cGU9J3dhcm5pbmcnXSkgI2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NzA3O1xcbiAgY29sb3I6ICMzMzA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1VpQnV0dG9uL1VpQnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwNztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICMwMDA3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKSB2YXIoLS1zaXplLW1kKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2J1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4ICMwMDA3O1xcbn1cXG5cXG46aG9zdChbdHlwZT0nZGVzdHJ1Y3RpdmUnXSkgI2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDA3O1xcbiAgY29sb3I6ICM0MDA7XFxufVxcblxcbjpob3N0KFt0eXBlPSdtaW5vciddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG46aG9zdChbdHlwZT0nbWlub3InXSkgI2J1dHRvbjphY3RpdmUge1xcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tc2l6ZS1zbSkgLSAxcHgpO1xcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tc2l6ZS1zbSkgKyAxcHgpO1xcbn1cXG5cXG46aG9zdChbdHlwZT0ncHJpbWFyeSddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwN2ZhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzA3Zjc7XFxuICBjb2xvcjogIzAwNztcXG59XFxuXFxuOmhvc3QoW3R5cGU9J3N1Y2Nlc3MnXSkgI2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYTA3O1xcbiAgY29sb3I6ICMwMzA7XFxufVxcblxcbjpob3N0KFt0eXBlPSd3YXJuaW5nJ10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhMGE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzcwNztcXG4gIGNvbG9yOiAjMzMwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aS1jYXJkLWJhY2tncm91bmQtY29sb3IsIGxpZ2h0Z3JleSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwNztcXG4gIGNvbG9yOiB2YXIoLS11aS1jYXJkLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1zaXplKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVWlDYXJkL1VpQ2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmhvc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWktY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBsaWdodGdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggIzAwMDc7XFxuICBjb2xvcjogdmFyKC0tdWktY2FyZC1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctc2l6ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpob3N0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLXNpemUtbWQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tdWktZ3JpZC1jb2x1bW5zLCAxMiksIDFmcik7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbm9uZSddKSxcXG46aG9zdChbbm8tZ2FwXSkge1xcbiAgZ2FwOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHMnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHMnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbGcnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbGcnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neGwnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neGwnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHhsJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4eGwnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMiddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzMnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc0J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNSddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA1O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzYnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc3J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDc7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nOCddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA4O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzknXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gOTtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPScxMCddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxMDtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPScxMSddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxMTtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPScxMiddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxMjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVWlHcmlkL1VpR3JpZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhEQUE4RDtFQUM5RCx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6aG9zdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiB2YXIoLS1zaXplLW1kKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXVpLWdyaWQtY29sdW1ucywgMTIpLCAxZnIpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbjpob3N0KFtnYXA9J25vbmUnXSksXFxuOmhvc3QoW25vLWdhcF0pIHtcXG4gIGdhcDogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpob3N0KFtnYXA9J3hzJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14cyk7XFxufVxcblxcbjpob3N0KFtnYXA9J3hzJ106bm90KFtuby1wYWRkaW5nXSk6bm90KFtwYWRkaW5nLXNpemVdKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14cyk7XFxufVxcblxcbjpob3N0KFtnYXA9J3NtJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbjpob3N0KFtnYXA9J3NtJ106bm90KFtuby1wYWRkaW5nXSk6bm90KFtwYWRkaW5nLXNpemVdKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbjpob3N0KFtnYXA9J2xnJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbjpob3N0KFtnYXA9J2xnJ106bm90KFtuby1wYWRkaW5nXSk6bm90KFtwYWRkaW5nLXNpemVdKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbjpob3N0KFtnYXA9J3hsJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14bCk7XFxufVxcblxcbjpob3N0KFtnYXA9J3hsJ106bm90KFtuby1wYWRkaW5nXSk6bm90KFtwYWRkaW5nLXNpemVdKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14bCk7XFxufVxcblxcbjpob3N0KFtnYXA9J3h4bCddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteHhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHhsJ106bm90KFtuby1wYWRkaW5nXSk6bm90KFtwYWRkaW5nLXNpemVdKSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzInXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSczJ10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNCddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzUnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc2J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDY7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNyddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA3O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzgnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gODtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc5J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDk7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTAnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTA7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTEnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTE7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMTInXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpob3N0IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbm9uZSddKSxcXG46aG9zdChbbm8tZ2FwXSkge1xcbiAgZ2FwOiAwO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdzbSddKSB7XFxuICBnYXA6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdsZyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4eGwnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1VpUm93L1VpUm93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLE1BQU07QUFDUjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6aG9zdCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbjpob3N0KFtnYXA9J25vbmUnXSksXFxuOmhvc3QoW25vLWdhcF0pIHtcXG4gIGdhcDogMDtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHMnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbGcnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neGwnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHhsJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwieHNcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14cyk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJzbVxcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcImxnXFxcIl0pIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwieGxcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14bCk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJ4eGxcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9VaVNlcGFyYXRvci9VaVNlcGFyYXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpob3N0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJ4c1xcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcInNtXFxcIl0pIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwibGdcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJ4bFxcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcInh4bFxcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZm9udC1zaXplLXhzOiAxMnB4O1xcbiAgLS1mb250LXNpemUtc206IDE0cHg7XFxuICAtLWZvbnQtc2l6ZS1tZDogMTZweDtcXG4gIC0tZm9udC1zaXplLWxnOiAxOHB4O1xcbiAgLS1mb250LXNpemUteGw6IDIwcHg7XFxuICAtLWZvbnQtc2l6ZS14eGw6IDIycHg7XFxuXFxuICAtLXNpemUteHM6IDRweDtcXG4gIC0tc2l6ZS1zbTogOHB4O1xcbiAgLS1zaXplLW1kOiAxNnB4O1xcbiAgLS1zaXplLWxnOiAzMnB4O1xcbiAgLS1zaXplLXhsOiA2NHB4O1xcbiAgLS1zaXplLXh4bDogMTI4cHg7XFxuXFxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC0tcGFkZGluZy1zaXplOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuLyogVUkgU3R5bGVzICovXFxuXFxuW2JsZWVkXSB7XFxuICBtYXJnaW46IGNhbGModmFyKC0tcGFkZGluZy1zaXplKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLWJvdHRvbV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtbGVmdF0ge1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1zaXplKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLXJpZ2h0XSB7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1zaXplKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLXNpZGVzXSB7XFxuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxufVxcblxcbltibGVlZC10b3BdIHtcXG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFkZGluZy1zaXplKSAqIC0xKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwieHNcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwic21cXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwibWRcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwibGdcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwieGxcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcXG59XFxuXFxuW2ZvbnQtc2l6ZT1cXFwieHhsXFxcIl0ge1xcbiAgLS1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xcbn1cXG5cXG5bbm8tcGFkZGluZ10ge1xcbiAgcGFkZGluZzogdW5zZXQ7XFxufVxcblxcbltwYWRkaW5nLXNpemU9XFxcInhzXFxcIl0ge1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUteHMpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14cyk7XFxufVxcblxcbltwYWRkaW5nLXNpemU9XFxcInNtXFxcIl0ge1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUtc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbltwYWRkaW5nLXNpemU9XFxcIm1kXFxcIl0ge1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUtbWQpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbltwYWRkaW5nLXNpemU9XFxcImxnXFxcIl0ge1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUtbGcpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbltwYWRkaW5nLXNpemU9XFxcInhsXFxcIl0ge1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUteGwpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14bCk7XFxufVxcblxcbltwYWRkaW5nLXNpemU9XFxcInh4bFxcXCJdIHtcXG4gIC0tcGFkZGluZy1zaXplOiB2YXIoLS1zaXplLXh4bCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblxcbi8qIEVsZW1lbnQgU3R5bGVzICovXFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA3O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggIzAwMDc7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDdmNztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJBQXFCOztFQUVyQixjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQzs7QUFFQSxjQUFjOztBQUVkO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix3QkFBd0I7QUFDMUI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1mb250LXNpemUteHM6IDEycHg7XFxuICAtLWZvbnQtc2l6ZS1zbTogMTRweDtcXG4gIC0tZm9udC1zaXplLW1kOiAxNnB4O1xcbiAgLS1mb250LXNpemUtbGc6IDE4cHg7XFxuICAtLWZvbnQtc2l6ZS14bDogMjBweDtcXG4gIC0tZm9udC1zaXplLXh4bDogMjJweDtcXG5cXG4gIC0tc2l6ZS14czogNHB4O1xcbiAgLS1zaXplLXNtOiA4cHg7XFxuICAtLXNpemUtbWQ6IDE2cHg7XFxuICAtLXNpemUtbGc6IDMycHg7XFxuICAtLXNpemUteGw6IDY0cHg7XFxuICAtLXNpemUteHhsOiAxMjhweDtcXG5cXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG4vKiBVSSBTdHlsZXMgKi9cXG5cXG5bYmxlZWRdIHtcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtYm90dG9tXSB7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxufVxcblxcbltibGVlZC1sZWZ0XSB7XFxuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtcmlnaHRdIHtcXG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtc2lkZXNdIHtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1zaXplKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLXRvcF0ge1xcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4c1xcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJzbVxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJtZFxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJsZ1xcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4bFxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4eGxcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XFxufVxcblxcbltuby1wYWRkaW5nXSB7XFxuICBwYWRkaW5nOiB1bnNldDtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwieHNcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS14cyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwic21cXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwibWRcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS1tZCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwibGdcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS1sZyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwieGxcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS14bCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwieHhsXFxcIl0ge1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUteHhsKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhsKTtcXG59XFxuXFxuLyogRWxlbWVudCBTdHlsZXMgKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDc7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAjMDAwNztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwN2Y3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9jb21wb25lbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5jc3MnO1xuXG5leHBvcnQgeyBDb21wb25lbnQsIGNzcywgaHRtbCB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS1nbG9iYWwtc3R5bGVzXScpO1xuXG5pZiAoIWdsb2JhbFN0eWxlcykge1xuICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGVFbC50ZXh0Q29udGVudCA9IHN0eWxlcztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjc3MiLCJodG1sIiwic3R5bGVzIiwiVWlCYW5kIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEF0dHJpYnV0ZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiVWlCdXR0b24iLCJocmVmIiwidGFyZ2V0IiwidXBkYXRlIiwiVWlDYXJkIiwiVWlHcmlkIiwiVWlSb3ciLCJVaVNlcGFyYXRvciIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJzaGFkb3dSb290IiwiaW5uZXJIVE1MIiwiY29uc3RydWN0b3IiLCJyZW5kZXIiLCJIVE1MRWxlbWVudCIsImNsZWFyQ2hpbGRyZW4iLCJlbCIsImxhc3RDaGlsZCIsInJlbW92ZSIsImNzc1N0cmluZ3MiLCJwYXJ0cyIsInJlZHVjZSIsImFjYyIsImN1ciIsImkiLCJodG1sU3RyaW5ncyIsImRlZmF1bHQiLCJnbG9iYWxTdHlsZXMiLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGVFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==