"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRequest = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _vueDemi = require("vue-demi");
var k = exports.useRequest = function k(I) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$dataFilter = _ref.dataFilter,
    h = _ref$dataFilter === void 0 ? function (i) {
      return i;
    } : _ref$dataFilter,
    _ref$defaultParams = _ref.defaultParams,
    x = _ref$defaultParams === void 0 ? {} : _ref$defaultParams,
    q = _ref.manual,
    u = _ref.onBefore,
    a = _ref.onSuccess,
    o = _ref.onError,
    m = _ref.onFinally,
    _ref$throttleWait = _ref.throttleWait,
    s = _ref$throttleWait === void 0 ? 0 : _ref$throttleWait,
    _ref$throttleTrailing = _ref.throttleTrailing,
    M = _ref$throttleTrailing === void 0 ? !1 : _ref$throttleTrailing;
  var i = (0, _vueDemi.ref)(h(null)),
    l = (0, _vueDemi.ref)([]),
    w = (0, _vueDemi.ref)(null);
  var d = 0,
    D = null;
  var f = function f(t) {
      var r = Math.random();
      return new Promise(function (p, v) {
        var n = function n(e) {
          v(e), o == null || o(e);
        };
        u == null || u(), l.value.push(r), d = Date.now(), (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var e, c, _e;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return I(t || x)["catch"](function (P) {
                  n(P);
                });
              case 3:
                e = _context.sent;
                console.log("response", e);
                c = h(e);
                i.value = c, p(c), a == null || a(c);
                _context.next = 12;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                w.value = _context.t0, n(_context.t0);
              case 12:
                _context.prev = 12;
                _e = l.value.findIndex(function (c) {
                  return c === r;
                });
                _e >= 0 && l.value.splice(_e, 1), m == null || m();
                return _context.finish(12);
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 9, 12, 16]]);
        }))();
      });
    },
    T = function T(t) {
      return !s || s <= 0 ? f(t) : Date.now() - d < s ? new Promise(function (p, v) {
        var n = function n() {
          clearTimeout(D);
          var e = Date.now() - d;
          D = setTimeout(function () {
            e > s ? f(t).then(p)["catch"](v) : n();
          }, s - e);
        };
        M && n();
      }) : f(t);
    };
  return !q && T(), console.log("loadingIds", l), {
    data: i,
    loading: (0, _vueDemi.computed)(function () {
      var t;
      return ((t = l.value) == null ? void 0 : t.length) > 0;
    }),
    error: w,
    runAsync: T
  };
};