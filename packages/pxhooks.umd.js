"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
(function (n, t) {
  (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) == "object" && (typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) < "u" ? t(exports, require("vue-demi")) : typeof define == "function" && define.amd ? define(["exports", "vue-demi"], t) : (n = (typeof globalThis === "undefined" ? "undefined" : (0, _typeof2["default"])(globalThis)) < "u" ? globalThis : n || self, t(n.pxhooks = {}, n.vueDemi));
})(void 0, function (n, t) {
  "use strict";

  var q = function q(y) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$dataFilter = _ref.dataFilter,
      T = _ref$dataFilter === void 0 ? function (f) {
        return f;
      } : _ref$dataFilter,
      _ref$defaultParams = _ref.defaultParams,
      I = _ref$defaultParams === void 0 ? {} : _ref$defaultParams,
      b = _ref.manual,
      l = _ref.onBefore,
      c = _ref.onSuccess,
      a = _ref.onError,
      m = _ref.onFinally,
      _ref$throttleWait = _ref.throttleWait,
      i = _ref$throttleWait === void 0 ? 0 : _ref$throttleWait,
      _ref$throttleTrailing = _ref.throttleTrailing,
      j = _ref$throttleTrailing === void 0 ? !1 : _ref$throttleTrailing;
    var f = t.ref(T(null)),
      u = t.ref([]),
      w = t.ref(null);
    var p = 0,
      x = null;
    var r = function r(s) {
        var h = Math.random();
        return new Promise(function (v, g) {
          var o = function o(e) {
            g(e), a == null || a(e);
          };
          l == null || l(), u.value.push(h), p = Date.now(), (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            var e, d, _e;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return y(s || I)["catch"](function (M) {
                    o(M);
                  });
                case 3:
                  e = _context.sent;
                  console.log("response", e);
                  d = T(e);
                  f.value = d, v(d), c == null || c(d);
                  _context.next = 12;
                  break;
                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](0);
                  w.value = _context.t0, o(_context.t0);
                case 12:
                  _context.prev = 12;
                  _e = u.value.findIndex(function (d) {
                    return d === h;
                  });
                  _e >= 0 && u.value.splice(_e, 1), m == null || m();
                  return _context.finish(12);
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 9, 12, 16]]);
          }))();
        });
      },
      D = function D(s) {
        return !i || i <= 0 ? r(s) : Date.now() - p < i ? new Promise(function (v, g) {
          var o = function o() {
            clearTimeout(x);
            var e = Date.now() - p;
            x = setTimeout(function () {
              e > i ? r(s).then(v)["catch"](g) : o();
            }, i - e);
          };
          j && o();
        }) : r(s);
      };
    return !b && D(), console.log("loadingIds", u), {
      data: f,
      loading: t.computed(function () {
        var s;
        return ((s = u.value) == null ? void 0 : s.length) > 0;
      }),
      error: w,
      runAsync: D
    };
  };
  n.useRequest = q, Object.defineProperty(n, Symbol.toStringTag, {
    value: "Module"
  });
});