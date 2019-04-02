webpackHotUpdate(2,{

/***/ "./components/Sidebar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _ActiveLink = _interopRequireDefault(__webpack_require__("./components/ActiveLink/index.js"));

var _Sidebar = _interopRequireDefault(__webpack_require__("./components/Sidebar/Sidebar.scss"));

var _jsxFileName = "/Users/robinsonlam/Projects/westside-volleyball/components/Sidebar/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
    _this.state = {
      sidebarOpen: false
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "sidebarContainer___MNkvp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react.default.createElement("div", {
        className: "logo___G6f2V",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react.default.createElement("img", {
        src: "/static/images/transparent-logo.png",
        alt: "Westside Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react.default.createElement("nav", {
        className: "sidebar___3fA8_",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("p", {
        className: "navLink___22thF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement(_ActiveLink.default, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Home")), _react.default.createElement("p", {
        className: "navLink___22thF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react.default.createElement(_ActiveLink.default, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Who Are We")), _react.default.createElement("p", {
        className: "navLink___22thF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement(_ActiveLink.default, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Join Us"))));
    }
  }]);

  return Sidebar;
}(_react.default.Component);

var _default = Sidebar;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=2.ec4401392b488d759edd.hot-update.js.map