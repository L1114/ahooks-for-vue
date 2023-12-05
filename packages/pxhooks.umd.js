"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
(function (t, s) {
  (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) == "object" && (typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) < "u" ? s(exports, require("vue-demi")) : typeof define == "function" && define.amd ? define(["exports", "vue-demi"], s) : (t = (typeof globalThis === "undefined" ? "undefined" : (0, _typeof2["default"])(globalThis)) < "u" ? globalThis : t || self, s(t.pxhooks = {}, t.vueDemi));
})(void 0, function (t, s) {
  "use strict";

  var x = function x(y, _ref) {
    var _ref$dataFilter = _ref.dataFilter,
      v = _ref$dataFilter === void 0 ? function (f) {
        return f;
      } : _ref$dataFilter,
      _ref$defaultParams = _ref.defaultParams,
      b = _ref$defaultParams === void 0 ? {} : _ref$defaultParams,
      _ref$manual = _ref.manual,
      g = _ref$manual === void 0 ? !0 : _ref$manual,
      d = _ref.onBefore,
      l = _ref.onSuccess,
      o = _ref.onError,
      r = _ref.onFinally,
      _ref$throttleWait = _ref.throttleWait,
      i = _ref$throttleWait === void 0 ? 0 : _ref$throttleWait,
      _ref$throttleTrailing = _ref.throttleTrailing,
      j = _ref$throttleTrailing === void 0 ? !1 : _ref$throttleTrailing;
    var f = s.ref(v(null)),
      a = s.ref(!1),
      T = s.ref(null);
    var m = 0,
      w = null;
    var p = function p(n) {
        return new Promise(function (q, h) {
          var c = function c(e) {
            h(e), o == null || o(e);
          };
          d == null || d(), a.value = !0, m = Date.now(), (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            var e, u;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return y(n || b)["catch"](function (P) {
                    c(P);
                  });
                case 3:
                  e = _context.sent;
                  u = v(e.data);
                  f.value = u, q(u), l == null || l(u);
                  _context.next = 11;
                  break;
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  T.value = _context.t0, c(_context.t0);
                case 11:
                  _context.prev = 11;
                  a.value = !1, r == null || r();
                  return _context.finish(11);
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 8, 11, 14]]);
          }))();
        });
      },
      D = function D(n) {
        return !i || i <= 0 ? p(n) : Date.now() - m < i ? new Promise(function (h, c) {
          var e = function e() {
            clearTimeout(w);
            var u = Date.now() - m;
            w = setTimeout(function () {
              u > i ? p(n).then(h)["catch"](c) : e();
            }, i - u);
          };
          j && e();
        }) : p(n);
      };
    return !g && D(), {
      data: f,
      loading: a,
      error: T,
      runAsync: D
    };
  };
  t.useRequest = x, Object.defineProperty(t, Symbol.toStringTag, {
    value: "Module"
  });
});