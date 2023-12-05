"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRequest = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _vueDemi = require("vue-demi");
var k = exports.useRequest = function k(g, _ref) {
  var _ref$dataFilter = _ref.dataFilter,
    T = _ref$dataFilter === void 0 ? function (u) {
      return u;
    } : _ref$dataFilter,
    _ref$defaultParams = _ref.defaultParams,
    q = _ref$defaultParams === void 0 ? {} : _ref$defaultParams,
    _ref$manual = _ref.manual,
    x = _ref$manual === void 0 ? !0 : _ref$manual,
    f = _ref.onBefore,
    l = _ref.onSuccess,
    i = _ref.onError,
    n = _ref.onFinally,
    _ref$throttleWait = _ref.throttleWait,
    s = _ref$throttleWait === void 0 ? 0 : _ref$throttleWait,
    _ref$throttleTrailing = _ref.throttleTrailing,
    P = _ref$throttleTrailing === void 0 ? !1 : _ref$throttleTrailing;
  var u = (0, _vueDemi.ref)(T(null)),
    m = (0, _vueDemi.ref)(!1),
    d = (0, _vueDemi.ref)(null);
  var r = 0,
    h = null;
  var w = function w(c) {
      return new Promise(function (o, D) {
        var a = function a(e) {
          D(e), i == null || i(e);
        };
        f == null || f(), m.value = !0, r = Date.now(), (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var e, t;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return g(c || q)["catch"](function (R) {
                  a(R);
                });
              case 3:
                e = _context.sent;
                t = T(e.data);
                u.value = t, o(t), l == null || l(t);
                _context.next = 11;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                d.value = _context.t0, a(_context.t0);
              case 11:
                _context.prev = 11;
                m.value = !1, n == null || n();
                return _context.finish(11);
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 8, 11, 14]]);
        }))();
      });
    },
    p = function p(c) {
      return !s || s <= 0 ? w(c) : Date.now() - r < s ? new Promise(function (D, a) {
        var e = function e() {
          clearTimeout(h);
          var t = Date.now() - r;
          h = setTimeout(function () {
            t > s ? w(c).then(D)["catch"](a) : e();
          }, s - t);
        };
        P && e();
      }) : w(c);
    };
  return !x && p(), {
    data: u,
    loading: m,
    error: d,
    runAsync: p
  };
};