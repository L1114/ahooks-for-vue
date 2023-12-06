"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
(function (t, n) {
  (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) == "object" && (typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) < "u" ? n(exports, require("vue-demi")) : typeof define == "function" && define.amd ? define(["exports", "vue-demi"], n) : (t = (typeof globalThis === "undefined" ? "undefined" : (0, _typeof2["default"])(globalThis)) < "u" ? globalThis : t || self, n(t.pxhooks = {}, t.vueDemi));
})(void 0, function (t, n) {
  "use strict";

  var y = function y(b) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$dataFilter = _ref.dataFilter,
        T = _ref$dataFilter === void 0 ? function (l) {
          return l;
        } : _ref$dataFilter,
        _ref$defaultParams = _ref.defaultParams,
        j = _ref$defaultParams === void 0 ? {} : _ref$defaultParams,
        w = _ref.manual,
        d = _ref.onBefore,
        f = _ref.onSuccess,
        r = _ref.onError,
        a = _ref.onFinally,
        _ref$throttleWait = _ref.throttleWait,
        o = _ref$throttleWait === void 0 ? 0 : _ref$throttleWait,
        _ref$throttleTrailing = _ref.throttleTrailing,
        k = _ref$throttleTrailing === void 0 ? !1 : _ref$throttleTrailing;
      var l = n.ref(T(null)),
        i = n.ref([]),
        D = n.ref(null);
      var p = 0,
        q = null;
      var m = function m(s) {
          var v = Math.random();
          return new Promise(function (g, h) {
            var u = function u(e) {
              h(e), r == null || r(e);
            };
            d == null || d(), i.value.push(v), p = Date.now(), (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
              var e, c, _e;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return b(s || j)["catch"](function (M) {
                      u(M);
                    });
                  case 3:
                    e = _context.sent;
                    console.log("response", e);
                    c = T(e);
                    l.value = c, g(c), f == null || f(c);
                    _context.next = 12;
                    break;
                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](0);
                    D.value = _context.t0, u(_context.t0);
                  case 12:
                    _context.prev = 12;
                    _e = i.value.findIndex(function (c) {
                      return c === v;
                    });
                    _e >= 0 && i.value.splice(_e, 1), a == null || a();
                    return _context.finish(12);
                  case 16:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 9, 12, 16]]);
            }))();
          });
        },
        x = function x(s) {
          return !o || o <= 0 ? m(s) : Date.now() - p < o ? new Promise(function (g, h) {
            var u = function u() {
              clearTimeout(q);
              var e = Date.now() - p;
              q = setTimeout(function () {
                e > o ? m(s).then(g)["catch"](h) : u();
              }, o - e);
            };
            k && u();
          }) : m(s);
        };
      return console.log("manual", w), !w && x(), console.log("loadingIds", i), {
        data: l,
        loading: n.computed(function () {
          var s;
          return ((s = i.value) == null ? void 0 : s.length) > 0;
        }),
        error: D,
        runAsync: x
      };
    },
    I = function I() {
      return console.log("version"), process.env.npm_package_version;
    };
  t.useRequest = y, t.version = I, Object.defineProperty(t, Symbol.toStringTag, {
    value: "Module"
  });
});