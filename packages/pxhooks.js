"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.useRequest = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _vueDemi = require("vue-demi");
var b = exports.useRequest = function b(x) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$dataFilter = _ref.dataFilter,
      h = _ref$dataFilter === void 0 ? function (c) {
        return c;
      } : _ref$dataFilter,
      _ref$defaultParams = _ref.defaultParams,
      _ = _ref$defaultParams === void 0 ? {} : _ref$defaultParams,
      w = _ref.manual,
      i = _ref.onBefore,
      u = _ref.onSuccess,
      a = _ref.onError,
      r = _ref.onFinally,
      _ref$throttleWait = _ref.throttleWait,
      t = _ref$throttleWait === void 0 ? 0 : _ref$throttleWait,
      _ref$throttleTrailing = _ref.throttleTrailing,
      k = _ref$throttleTrailing === void 0 ? !1 : _ref$throttleTrailing;
    var c = (0, _vueDemi.ref)(h(null)),
      n = (0, _vueDemi.ref)([]),
      D = (0, _vueDemi.ref)(null);
    var m = 0,
      T = null;
    var d = function d(s) {
        var f = Math.random();
        return new Promise(function (v, p) {
          var l = function l(e) {
            p(e), a == null || a(e);
          };
          i == null || i(), n.value.push(f), m = Date.now(), (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            var e, o, _e;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return x(s || _)["catch"](function (q) {
                    l(q);
                  });
                case 3:
                  e = _context.sent;
                  console.log("response", e);
                  o = h(e);
                  c.value = o, v(o), u == null || u(o);
                  _context.next = 12;
                  break;
                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](0);
                  D.value = _context.t0, l(_context.t0);
                case 12:
                  _context.prev = 12;
                  _e = n.value.findIndex(function (o) {
                    return o === f;
                  });
                  _e >= 0 && n.value.splice(_e, 1), r == null || r();
                  return _context.finish(12);
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 9, 12, 16]]);
          }))();
        });
      },
      I = function I(s) {
        return !t || t <= 0 ? d(s) : Date.now() - m < t ? new Promise(function (v, p) {
          var l = function l() {
            clearTimeout(T);
            var e = Date.now() - m;
            T = setTimeout(function () {
              e > t ? d(s).then(v)["catch"](p) : l();
            }, t - e);
          };
          k && l();
        }) : d(s);
      };
    return console.log("manual", w), !w && I(), console.log("loadingIds", n), {
      data: c,
      loading: (0, _vueDemi.computed)(function () {
        var s;
        return ((s = n.value) == null ? void 0 : s.length) > 0;
      }),
      error: D,
      runAsync: I
    };
  },
  j = exports.version = function j() {
    return console.log("version"), process.env.npm_package_version;
  };