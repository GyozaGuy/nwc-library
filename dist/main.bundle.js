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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNSSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixPQUF2QixDQUFoQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLFdBQVIsR0FBc0IxQyxrREFBdEI7QUFDQXFDLEVBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjSyxXQUFkLENBQTBCSCxPQUExQjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL1VpQmFuZC9VaUJhbmQuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUJ1dHRvbi9VaUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL1VpQ2FyZC9VaUNhcmQuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUdyaWQvVWlHcmlkLmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlSb3cvVWlSb3cuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaVNlcGFyYXRvci9VaVNlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2hlbHBlcnMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2hlbHBlcnMvZG9tSGVscGVycy5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlCYW5kL1VpQmFuZC5jc3MiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUJ1dHRvbi9VaUJ1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9VaUNhcmQvVWlDYXJkLmNzcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL3NyYy9jb21wb25lbnRzL1VpR3JpZC9VaUdyaWQuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlSb3cvVWlSb3cuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvVWlTZXBhcmF0b3IvVWlTZXBhcmF0b3IuY3NzIiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbndjLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ud2MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL253Yy1saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlCYW5kLmNzcyc7XG5cbmNsYXNzIFVpQmFuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG5cbiAgY29ubmVjdGVkKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdWktYmFuZC1iYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2JhY2tncm91bmQtY29sb3InKSk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11aS1iYW5kLWZvbnQtY29sb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9udC1jb2xvcicpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8c2VjdGlvbj48c2xvdD48L3Nsb3Q+PC9zZWN0aW9uPmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1aS1iYW5kJywgVWlCYW5kKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlCdXR0b24uY3NzJztcblxuY2xhc3MgVWlCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICR7c3R5bGVzfVxuICBgO1xuICBocmVmID0gJyc7XG4gIHRhcmdldCA9ICcnO1xuXG4gIGNvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgcmV0dXJuIGh0bWxgPGEgaHJlZj1cIiR7dGhpcy5ocmVmfVwiIGlkPVwiYnV0dG9uXCIgdGFyZ2V0PVwiJHt0aGlzLnRhcmdldH1cIj48c2xvdD48L3Nsb3Q+PC9hPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgPGJ1dHRvbiBpZD1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj48c2xvdD48L3Nsb3Q+PC9idXR0b24+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWJ1dHRvbicsIFVpQnV0dG9uKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY3NzIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVWlDYXJkLmNzcyc7XG5cbmNsYXNzIFVpQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG5cbiAgY29ubmVjdGVkKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdWktY2FyZC1iYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2JhY2tncm91bmQtY29sb3InKSk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11aS1jYXJkLWZvbnQtY29sb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9udC1jb2xvcicpKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWNhcmQnLCBVaUNhcmQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjc3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9VaUdyaWQuY3NzJztcblxuY2xhc3MgVWlHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAke3N0eWxlc31cbiAgYDtcblxuICBjb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS11aS1ncmlkLWNvbHVtbnMnLCB0aGlzLmdldEF0dHJpYnV0ZSgnY29sdW1ucycpKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWdyaWQnLCBVaUdyaWQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjc3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9VaVJvdy5jc3MnO1xuXG5jbGFzcyBVaVJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWktcm93JywgVWlSb3cpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjc3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9VaVNlcGFyYXRvci5jc3MnO1xuXG5jbGFzcyBVaVNlcGFyYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgJHtzdHlsZXN9XG4gIGA7XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWktc2VwYXJhdG9yJywgVWlTZXBhcmF0b3IpO1xuIiwiaW1wb3J0ICcuL1VpQmFuZC9VaUJhbmQnO1xuaW1wb3J0ICcuL1VpQnV0dG9uL1VpQnV0dG9uJztcbmltcG9ydCAnLi9VaUNhcmQvVWlDYXJkJztcbmltcG9ydCAnLi9VaUdyaWQvVWlHcmlkJztcbmltcG9ydCAnLi9VaVJvdy9VaVJvdyc7XG5pbXBvcnQgJy4vVWlTZXBhcmF0b3IvVWlTZXBhcmF0b3InO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuY29ubmVjdGVkKCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3RlZCgpO1xuICB9XG5cbiAgY29ubmVjdGVkKCkge31cblxuICBkaXNjb25uZWN0ZWQoKSB7fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gJzxzbG90Pjwvc2xvdD4nO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAke3RoaXMuY29uc3RydWN0b3Iuc3R5bGVzfVxuICAgICAgJHt0aGlzLnJlbmRlcigpfVxuICAgIGA7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGVhckNoaWxkcmVuKGVsKSB7XG4gIHdoaWxlIChlbC5sYXN0Q2hpbGQpIHtcbiAgICBlbC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzcyhjc3NTdHJpbmdzLCAuLi5wYXJ0cykge1xuICByZXR1cm4gYFxuICAgIDxzdHlsZT5cbiAgICAgICR7Y3NzU3RyaW5ncy5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiBgJHthY2N9JHtjdXJ9JHtwYXJ0c1tpXSB8fCAnJ31gLCAnJyl9XG4gICAgPC9zdHlsZT5cbiAgYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWwoaHRtbFN0cmluZ3MsIC4uLnBhcnRzKSB7XG4gIHJldHVybiBodG1sU3RyaW5ncy5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiBgJHthY2N9JHtjdXJ9JHtwYXJ0c1tpXSB8fCAnJ31gLCAnJyk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcbmV4cG9ydCB7IGNsZWFyQ2hpbGRyZW4sIGNzcywgaHRtbCB9IGZyb20gJy4vZG9tSGVscGVycyc7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpob3N0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpLWJhbmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdWktYmFuZC1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1zaXplKTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuOmhvc3QgPiBzZWN0aW9uIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1heC13aWR0aDogNjAlO1xcbn1cXG5cXG46aG9zdChbc2l6ZT0neHMnXSkgPiBzZWN0aW9uIHtcXG4gIG1heC13aWR0aDogNDAlO1xcbn1cXG5cXG46aG9zdChbc2l6ZT0nc20nXSkgPiBzZWN0aW9uIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG46aG9zdChbc2l6ZT0nbGcnXSkgPiBzZWN0aW9uIHtcXG4gIG1heC13aWR0aDogNzAlO1xcbn1cXG5cXG46aG9zdChbc2l6ZT0neGwnXSkgPiBzZWN0aW9uIHtcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG46aG9zdChbc2l6ZT0neHhsJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVWlCYW5kL1VpQmFuZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpREFBaUQ7RUFDakQsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6aG9zdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aS1iYW5kLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXVpLWJhbmQtZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctc2l6ZSk7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbjpob3N0ID4gc2VjdGlvbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDYwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3hzJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDQwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3NtJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J2xnJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3hsJ10pID4gc2VjdGlvbiB7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuOmhvc3QoW3NpemU9J3h4bCddKSA+IHNlY3Rpb24ge1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDc7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwNztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSkgdmFyKC0tc2l6ZS1tZCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAjMDAwNztcXG59XFxuXFxuOmhvc3QoW3R5cGU9J2Rlc3RydWN0aXZlJ10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMGE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjAwNztcXG4gIGNvbG9yOiAjNDAwO1xcbn1cXG5cXG46aG9zdChbdHlwZT0nbWlub3InXSkgI2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuOmhvc3QoW3R5cGU9J21pbm9yJ10pICNidXR0b246YWN0aXZlIHtcXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXNpemUtc20pIC0gMXB4KTtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXNpemUtc20pICsgMXB4KTtcXG59XFxuXFxuOmhvc3QoW3R5cGU9J3ByaW1hcnknXSkgI2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdmYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwN2Y3O1xcbiAgY29sb3I6ICMwMDc7XFxufVxcblxcbjpob3N0KFt0eXBlPSdzdWNjZXNzJ10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGEwNztcXG4gIGNvbG9yOiAjMDMwO1xcbn1cXG5cXG46aG9zdChbdHlwZT0nd2FybmluZyddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTBhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3MDc7XFxuICBjb2xvcjogIzMzMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVWlCdXR0b24vVWlCdXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA3O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggIzAwMDc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pIHZhcigtLXNpemUtbWQpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggIzAwMDc7XFxufVxcblxcbjpob3N0KFt0eXBlPSdkZXN0cnVjdGl2ZSddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDBhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwMDc7XFxuICBjb2xvcjogIzQwMDtcXG59XFxuXFxuOmhvc3QoW3R5cGU9J21pbm9yJ10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjpob3N0KFt0eXBlPSdtaW5vciddKSAjYnV0dG9uOmFjdGl2ZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1zaXplLXNtKSAtIDFweCk7XFxuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1zaXplLXNtKSArIDFweCk7XFxufVxcblxcbjpob3N0KFt0eXBlPSdwcmltYXJ5J10pICNidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3ZmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDdmNztcXG4gIGNvbG9yOiAjMDA3O1xcbn1cXG5cXG46aG9zdChbdHlwZT0nc3VjY2VzcyddKSAjYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhMDc7XFxuICBjb2xvcjogIzAzMDtcXG59XFxuXFxuOmhvc3QoW3R5cGU9J3dhcm5pbmcnXSkgI2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NzA3O1xcbiAgY29sb3I6ICMzMzA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpob3N0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgbGlnaHRncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4ICMwMDA3O1xcbiAgY29sb3I6IHZhcigtLXVpLWNhcmQtZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXNpemUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9VaUNhcmQvVWlDYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDREQUE0RDtFQUM1RCxtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6aG9zdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aS1jYXJkLWJhY2tncm91bmQtY29sb3IsIGxpZ2h0Z3JleSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwNztcXG4gIGNvbG9yOiB2YXIoLS11aS1jYXJkLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1zaXplKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogdmFyKC0tc2l6ZS1tZCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS11aS1ncmlkLWNvbHVtbnMsIDEyKSwgMWZyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdub25lJ10pLFxcbjpob3N0KFtuby1nYXBdKSB7XFxuICBnYXA6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZy1zaXplXSkpIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdzbSddKSB7XFxuICBnYXA6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdzbSddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZy1zaXplXSkpIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdsZyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdsZyddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZy1zaXplXSkpIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZy1zaXplXSkpIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4eGwnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblxcbjpob3N0KFtnYXA9J3h4bCddOm5vdChbbm8tcGFkZGluZ10pOm5vdChbcGFkZGluZy1zaXplXSkpIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhsKTtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPScyJ10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMyddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzQnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc1J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDU7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNiddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA2O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzcnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNztcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc4J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDg7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nOSddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA5O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzEwJ10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDEwO1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzExJ10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDExO1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzEyJ10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDEyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9VaUdyaWQvVWlHcmlkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOERBQThEO0VBQzlELHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpob3N0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLXNpemUtbWQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tdWktZ3JpZC1jb2x1bW5zLCAxMiksIDFmcik7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbm9uZSddKSxcXG46aG9zdChbbm8tZ2FwXSkge1xcbiAgZ2FwOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHMnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHMnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nc20nXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbGcnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbGcnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neGwnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neGwnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0neHhsJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4eGwnXTpub3QoW25vLXBhZGRpbmddKTpub3QoW3BhZGRpbmctc2l6ZV0pKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nMiddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzMnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc0J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nNSddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA1O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzYnXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPSc3J10pIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDc7XFxufVxcblxcbjo6c2xvdHRlZChbY29sdW1ucz0nOCddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiA4O1xcbn1cXG5cXG46OnNsb3R0ZWQoW2NvbHVtbnM9JzknXSkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gOTtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPScxMCddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxMDtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPScxMSddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxMTtcXG59XFxuXFxuOjpzbG90dGVkKFtjb2x1bW5zPScxMiddKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdub25lJ10pLFxcbjpob3N0KFtuby1nYXBdKSB7XFxuICBnYXA6IDA7XFxufVxcblxcbjpob3N0KFtnYXA9J3hzJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14cyk7XFxufVxcblxcbjpob3N0KFtnYXA9J3NtJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbjpob3N0KFtnYXA9J2xnJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbjpob3N0KFtnYXA9J3hsJ10pIHtcXG4gIGdhcDogdmFyKC0tc2l6ZS14bCk7XFxufVxcblxcbjpob3N0KFtnYXA9J3h4bCddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteHhsKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvVWlSb3cvVWlSb3cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsTUFBTTtBQUNSOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpob3N0IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuOmhvc3QoW2dhcD0nbm9uZSddKSxcXG46aG9zdChbbm8tZ2FwXSkge1xcbiAgZ2FwOiAwO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4cyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdzbSddKSB7XFxuICBnYXA6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG46aG9zdChbZ2FwPSdsZyddKSB7XFxuICBnYXA6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4bCddKSB7XFxuICBnYXA6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG46aG9zdChbZ2FwPSd4eGwnXSkge1xcbiAgZ2FwOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpob3N0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJ4c1xcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcInNtXFxcIl0pIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwibGdcXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1sZyk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJ4bFxcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcInh4bFxcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4bCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1VpU2VwYXJhdG9yL1VpU2VwYXJhdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmhvc3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcInhzXFxcIl0pIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwic21cXFwiXSkge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1zbSk7XFxufVxcblxcbjpob3N0KFtzaXplPVxcXCJsZ1xcXCJdKSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuOmhvc3QoW3NpemU9XFxcInhsXFxcIl0pIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG46aG9zdChbc2l6ZT1cXFwieHhsXFxcIl0pIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhsKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1mb250LXNpemUteHM6IDEycHg7XFxuICAtLWZvbnQtc2l6ZS1zbTogMTRweDtcXG4gIC0tZm9udC1zaXplLW1kOiAxNnB4O1xcbiAgLS1mb250LXNpemUtbGc6IDE4cHg7XFxuICAtLWZvbnQtc2l6ZS14bDogMjBweDtcXG4gIC0tZm9udC1zaXplLXh4bDogMjJweDtcXG5cXG4gIC0tc2l6ZS14czogNHB4O1xcbiAgLS1zaXplLXNtOiA4cHg7XFxuICAtLXNpemUtbWQ6IDE2cHg7XFxuICAtLXNpemUtbGc6IDMycHg7XFxuICAtLXNpemUteGw6IDY0cHg7XFxuICAtLXNpemUteHhsOiAxMjhweDtcXG5cXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG4vKiBVSSBTdHlsZXMgKi9cXG5cXG5bYmxlZWRdIHtcXG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtYm90dG9tXSB7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxufVxcblxcbltibGVlZC1sZWZ0XSB7XFxuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtcmlnaHRdIHtcXG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtc2lkZXNdIHtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1zaXplKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLXRvcF0ge1xcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4c1xcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJzbVxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJtZFxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJsZ1xcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4bFxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbn1cXG5cXG5bZm9udC1zaXplPVxcXCJ4eGxcXFwiXSB7XFxuICAtLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XFxufVxcblxcbltuby1wYWRkaW5nXSB7XFxuICBwYWRkaW5nOiB1bnNldDtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwieHNcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS14cyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwic21cXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwibWRcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS1tZCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLW1kKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwibGdcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS1sZyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLWxnKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwieGxcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS14bCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsKTtcXG59XFxuXFxuW3BhZGRpbmctc2l6ZT1cXFwieHhsXFxcIl0ge1xcbiAgLS1wYWRkaW5nLXNpemU6IHZhcigtLXNpemUteHhsKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhsKTtcXG59XFxuXFxuLyogRWxlbWVudCBTdHlsZXMgKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDc7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAjMDAwNztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwN2Y3O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixxQkFBcUI7O0VBRXJCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixvQkFBb0I7RUFDcEIsOEJBQThCO0FBQ2hDOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHdCQUF3QjtBQUMxQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWZvbnQtc2l6ZS14czogMTJweDtcXG4gIC0tZm9udC1zaXplLXNtOiAxNHB4O1xcbiAgLS1mb250LXNpemUtbWQ6IDE2cHg7XFxuICAtLWZvbnQtc2l6ZS1sZzogMThweDtcXG4gIC0tZm9udC1zaXplLXhsOiAyMHB4O1xcbiAgLS1mb250LXNpemUteHhsOiAyMnB4O1xcblxcbiAgLS1zaXplLXhzOiA0cHg7XFxuICAtLXNpemUtc206IDhweDtcXG4gIC0tc2l6ZS1tZDogMTZweDtcXG4gIC0tc2l6ZS1sZzogMzJweDtcXG4gIC0tc2l6ZS14bDogNjRweDtcXG4gIC0tc2l6ZS14eGw6IDEyOHB4O1xcblxcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS1tZCk7XFxufVxcblxcbi8qIFVJIFN0eWxlcyAqL1xcblxcbltibGVlZF0ge1xcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxufVxcblxcbltibGVlZC1ib3R0b21dIHtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFkZGluZy1zaXplKSAqIC0xKTtcXG59XFxuXFxuW2JsZWVkLWxlZnRdIHtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxufVxcblxcbltibGVlZC1yaWdodF0ge1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxufVxcblxcbltibGVlZC1zaWRlc10ge1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1zaXplKSAqIC0xKTtcXG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLXNpemUpICogLTEpO1xcbn1cXG5cXG5bYmxlZWQtdG9wXSB7XFxuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZGRpbmctc2l6ZSkgKiAtMSk7XFxufVxcblxcbltmb250LXNpemU9XFxcInhzXFxcIl0ge1xcbiAgLS1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XFxufVxcblxcbltmb250LXNpemU9XFxcInNtXFxcIl0ge1xcbiAgLS1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XFxufVxcblxcbltmb250LXNpemU9XFxcIm1kXFxcIl0ge1xcbiAgLS1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbltmb250LXNpemU9XFxcImxnXFxcIl0ge1xcbiAgLS1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XFxufVxcblxcbltmb250LXNpemU9XFxcInhsXFxcIl0ge1xcbiAgLS1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XFxufVxcblxcbltmb250LXNpemU9XFxcInh4bFxcXCJdIHtcXG4gIC0tZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcXG59XFxuXFxuW25vLXBhZGRpbmddIHtcXG4gIHBhZGRpbmc6IHVuc2V0O1xcbn1cXG5cXG5bcGFkZGluZy1zaXplPVxcXCJ4c1xcXCJdIHtcXG4gIC0tcGFkZGluZy1zaXplOiB2YXIoLS1zaXplLXhzKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHMpO1xcbn1cXG5cXG5bcGFkZGluZy1zaXplPVxcXCJzbVxcXCJdIHtcXG4gIC0tcGFkZGluZy1zaXplOiB2YXIoLS1zaXplLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG5bcGFkZGluZy1zaXplPVxcXCJtZFxcXCJdIHtcXG4gIC0tcGFkZGluZy1zaXplOiB2YXIoLS1zaXplLW1kKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbWQpO1xcbn1cXG5cXG5bcGFkZGluZy1zaXplPVxcXCJsZ1xcXCJdIHtcXG4gIC0tcGFkZGluZy1zaXplOiB2YXIoLS1zaXplLWxnKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbGcpO1xcbn1cXG5cXG5bcGFkZGluZy1zaXplPVxcXCJ4bFxcXCJdIHtcXG4gIC0tcGFkZGluZy1zaXplOiB2YXIoLS1zaXplLXhsKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteGwpO1xcbn1cXG5cXG5bcGFkZGluZy1zaXplPVxcXCJ4eGxcXFwiXSB7XFxuICAtLXBhZGRpbmctc2l6ZTogdmFyKC0tc2l6ZS14eGwpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eGwpO1xcbn1cXG5cXG4vKiBFbGVtZW50IFN0eWxlcyAqL1xcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwNztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4ICMwMDA3O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc20pO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzA3Zjc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS1nbG9iYWwtc3R5bGVzXScpO1xuXG5pZiAoIWdsb2JhbFN0eWxlcykge1xuICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGVFbC50ZXh0Q29udGVudCA9IHN0eWxlcztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjc3MiLCJodG1sIiwic3R5bGVzIiwiVWlCYW5kIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEF0dHJpYnV0ZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiVWlCdXR0b24iLCJocmVmIiwidGFyZ2V0IiwidXBkYXRlIiwiVWlDYXJkIiwiVWlHcmlkIiwiVWlSb3ciLCJVaVNlcGFyYXRvciIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJzaGFkb3dSb290IiwiaW5uZXJIVE1MIiwiY29uc3RydWN0b3IiLCJyZW5kZXIiLCJIVE1MRWxlbWVudCIsImNsZWFyQ2hpbGRyZW4iLCJlbCIsImxhc3RDaGlsZCIsInJlbW92ZSIsImNzc1N0cmluZ3MiLCJwYXJ0cyIsInJlZHVjZSIsImFjYyIsImN1ciIsImkiLCJodG1sU3RyaW5ncyIsImRlZmF1bHQiLCJnbG9iYWxTdHlsZXMiLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGVFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==