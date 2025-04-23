import * as g from "react";
import Jt, { useContext as Qt, useState as _n, useRef as Rn, useEffect as en } from "react";
import Nn from "react-dom";
var Me = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function In() {
  if (jt) return Se;
  jt = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(n, o, a) {
    var u = null;
    if (a !== void 0 && (u = "" + a), o.key !== void 0 && (u = "" + o.key), "key" in o) {
      a = {};
      for (var i in o)
        i !== "key" && (a[i] = o[i]);
    } else a = o;
    return o = a.ref, {
      $$typeof: r,
      type: n,
      key: u,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Se.Fragment = t, Se.jsx = e, Se.jsxs = e, Se;
}
var Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function jn() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    function r(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === B ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case E:
          return "Fragment";
        case m:
          return "Profiler";
        case O:
          return "StrictMode";
        case L:
          return "Suspense";
        case M:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case S:
            return "Portal";
          case b:
            return (p.displayName || "Context") + ".Provider";
          case h:
            return (p._context.displayName || "Context") + ".Consumer";
          case R:
            var P = p.render;
            return p = p.displayName, p || (p = P.displayName || P.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case H:
            return P = p.displayName || null, P !== null ? P : r(p.type) || "Memo";
          case D:
            P = p._payload, p = p._init;
            try {
              return r(p(P));
            } catch {
            }
        }
      return null;
    }
    function t(p) {
      return "" + p;
    }
    function e(p) {
      try {
        t(p);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var F = P.error, U = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return F.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), t(p);
      }
    }
    function n(p) {
      if (p === E) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === D)
        return "<...>";
      try {
        var P = r(p);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var p = Z.A;
      return p === null ? null : p.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function u(p) {
      if (re.call(p, "key")) {
        var P = Object.getOwnPropertyDescriptor(p, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function i(p, P) {
      function F() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: F,
        configurable: !0
      });
    }
    function l() {
      var p = r(this.type);
      return J[p] || (J[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function s(p, P, F, U, ae, ee, Ee, we) {
      return F = ee.ref, p = {
        $$typeof: d,
        type: p,
        key: P,
        props: ee,
        _owner: ae
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ee
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: we
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function c(p, P, F, U, ae, ee, Ee, we) {
      var Y = P.children;
      if (Y !== void 0)
        if (U)
          if (N(Y)) {
            for (U = 0; U < Y.length; U++)
              v(Y[U]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(Y);
      if (re.call(P, "key")) {
        Y = r(p);
        var de = Object.keys(P).filter(function(Ne) {
          return Ne !== "key";
        });
        U = 0 < de.length ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}", le[Y + U] || (de = 0 < de.length ? "{" + de.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          Y,
          de,
          Y
        ), le[Y + U] = !0);
      }
      if (Y = null, F !== void 0 && (e(F), Y = "" + F), u(P) && (e(P.key), Y = "" + P.key), "key" in P) {
        F = {};
        for (var ve in P)
          ve !== "key" && (F[ve] = P[ve]);
      } else F = P;
      return Y && i(
        F,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), s(
        p,
        Y,
        ee,
        ae,
        o(),
        F,
        Ee,
        we
      );
    }
    function v(p) {
      typeof p == "object" && p !== null && p.$$typeof === d && p._store && (p._store.validated = 1);
    }
    var y = Jt, d = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), b = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), Z = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, N = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(p) {
        return p();
      }
    };
    var I, J = {}, oe = y["react-stack-bottom-frame"].bind(
      y,
      a
    )(), $ = ne(n(a)), le = {};
    Oe.Fragment = E, Oe.jsx = function(p, P, F, U, ae) {
      var ee = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return c(
        p,
        P,
        F,
        !1,
        U,
        ae,
        ee ? Error("react-stack-top-frame") : oe,
        ee ? ne(n(p)) : $
      );
    }, Oe.jsxs = function(p, P, F, U, ae) {
      var ee = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return c(
        p,
        P,
        F,
        !0,
        U,
        ae,
        ee ? Error("react-stack-top-frame") : oe,
        ee ? ne(n(p)) : $
      );
    };
  }()), Oe;
}
var $t;
function Ln() {
  return $t || ($t = 1, process.env.NODE_ENV === "production" ? Me.exports = In() : Me.exports = jn()), Me.exports;
}
var $n = Ln();
function Dn(r) {
  if (Array.isArray(r)) return r;
}
function Fn(r, t) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var n, o, a, u, i = [], l = !0, s = !1;
    try {
      if (a = (e = e.call(r)).next, t !== 0) for (; !(l = (n = a.call(e)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (c) {
      s = !0, o = c;
    } finally {
      try {
        if (!l && e.return != null && (u = e.return(), Object(u) !== u)) return;
      } finally {
        if (s) throw o;
      }
    }
    return i;
  }
}
function lt(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function tn(r, t) {
  if (r) {
    if (typeof r == "string") return lt(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? lt(r, t) : void 0;
  }
}
function Mn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ue(r, t) {
  return Dn(r) || Fn(r, t) || tn(r, t) || Mn();
}
function z(r) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, z(r);
}
function G() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  if (t) {
    for (var n = [], o = 0; o < t.length; o++) {
      var a = t[o];
      if (a) {
        var u = z(a);
        if (u === "string" || u === "number")
          n.push(a);
        else if (u === "object") {
          var i = Array.isArray(a) ? a : Object.entries(a).map(function(l) {
            var s = Ue(l, 2), c = s[0], v = s[1];
            return v ? c : null;
          });
          n = i.length ? n.concat(i.filter(function(l) {
            return !!l;
          })) : n;
        }
      }
    }
    return n.join(" ").trim();
  }
}
function Wn(r) {
  if (Array.isArray(r)) return lt(r);
}
function Hn(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Bn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ve(r) {
  return Wn(r) || Hn(r) || tn(r) || Bn();
}
function mt(r, t) {
  if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Un(r, t) {
  if (z(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (z(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function nn(r) {
  var t = Un(r, "string");
  return z(t) == "symbol" ? t : t + "";
}
function Yn(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, nn(n.key), n);
  }
}
function bt(r, t, e) {
  return e && Yn(r, e), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Ge(r, t, e) {
  return (t = nn(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function it(r, t) {
  var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = Vn(r)) || t) {
      e && (r = e);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
      }, e: function(s) {
        throw s;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, u = !0, i = !1;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var s = e.next();
    return u = s.done, s;
  }, e: function(s) {
    i = !0, a = s;
  }, f: function() {
    try {
      u || e.return == null || e.return();
    } finally {
      if (i) throw a;
    }
  } };
}
function Vn(r, t) {
  if (r) {
    if (typeof r == "string") return Dt(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Dt(r, t) : void 0;
  }
}
function Dt(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
var C = /* @__PURE__ */ function() {
  function r() {
    mt(this, r);
  }
  return bt(r, null, [{
    key: "innerWidth",
    value: function(e) {
      if (e) {
        var n = e.offsetWidth, o = getComputedStyle(e);
        return n = n + (parseFloat(o.paddingLeft) + parseFloat(o.paddingRight)), n;
      }
      return 0;
    }
  }, {
    key: "width",
    value: function(e) {
      if (e) {
        var n = e.offsetWidth, o = getComputedStyle(e);
        return n = n - (parseFloat(o.paddingLeft) + parseFloat(o.paddingRight)), n;
      }
      return 0;
    }
  }, {
    key: "getBrowserLanguage",
    value: function() {
      return navigator.userLanguage || navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.language || navigator.browserLanguage || navigator.systemLanguage || "en";
    }
  }, {
    key: "getWindowScrollTop",
    value: function() {
      var e = document.documentElement;
      return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function() {
      var e = document.documentElement;
      return (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
    }
  }, {
    key: "getOuterWidth",
    value: function(e, n) {
      if (e) {
        var o = e.getBoundingClientRect().width || e.offsetWidth;
        if (n) {
          var a = getComputedStyle(e);
          o = o + (parseFloat(a.marginLeft) + parseFloat(a.marginRight));
        }
        return o;
      }
      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function(e, n) {
      if (e) {
        var o = e.getBoundingClientRect().height || e.offsetHeight;
        if (n) {
          var a = getComputedStyle(e);
          o = o + (parseFloat(a.marginTop) + parseFloat(a.marginBottom));
        }
        return o;
      }
      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function(e, n) {
      if (e) {
        var o = e.clientHeight;
        if (n) {
          var a = getComputedStyle(e);
          o = o + (parseFloat(a.marginTop) + parseFloat(a.marginBottom));
        }
        return o;
      }
      return 0;
    }
  }, {
    key: "getClientWidth",
    value: function(e, n) {
      if (e) {
        var o = e.clientWidth;
        if (n) {
          var a = getComputedStyle(e);
          o = o + (parseFloat(a.marginLeft) + parseFloat(a.marginRight));
        }
        return o;
      }
      return 0;
    }
  }, {
    key: "getViewport",
    value: function() {
      var e = window, n = document, o = n.documentElement, a = n.getElementsByTagName("body")[0], u = e.innerWidth || o.clientWidth || a.clientWidth, i = e.innerHeight || o.clientHeight || a.clientHeight;
      return {
        width: u,
        height: i
      };
    }
  }, {
    key: "getOffset",
    value: function(e) {
      if (e) {
        var n = e.getBoundingClientRect();
        return {
          top: n.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: n.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "index",
    value: function(e) {
      if (e)
        for (var n = e.parentNode.childNodes, o = 0, a = 0; a < n.length; a++) {
          if (n[a] === e)
            return o;
          n[a].nodeType === 1 && o++;
        }
      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function(e, n) {
      if (e && n)
        if (e.classList)
          for (var o = n.split(" "), a = 0; a < o.length; a++)
            e.classList.add(o[a]);
        else
          for (var u = n.split(" "), i = 0; i < u.length; i++)
            e.className = e.className + (" " + u[i]);
    }
  }, {
    key: "removeMultipleClasses",
    value: function(e, n) {
      if (e && n)
        if (e.classList)
          for (var o = n.split(" "), a = 0; a < o.length; a++)
            e.classList.remove(o[a]);
        else
          for (var u = n.split(" "), i = 0; i < u.length; i++)
            e.className = e.className.replace(new RegExp("(^|\\b)" + u[i].split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }, {
    key: "addClass",
    value: function(e, n) {
      e && n && (e.classList ? e.classList.add(n) : e.className = e.className + (" " + n));
    }
  }, {
    key: "removeClass",
    value: function(e, n) {
      e && n && (e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }
  }, {
    key: "hasClass",
    value: function(e, n) {
      return e ? e.classList ? e.classList.contains(n) : new RegExp("(^| )" + n + "( |$)", "gi").test(e.className) : !1;
    }
  }, {
    key: "addStyles",
    value: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      e && Object.entries(n).forEach(function(o) {
        var a = Ue(o, 2), u = a[0], i = a[1];
        return e.style[u] = i;
      });
    }
  }, {
    key: "find",
    value: function(e, n) {
      return e ? Array.from(e.querySelectorAll(n)) : [];
    }
  }, {
    key: "findSingle",
    value: function(e, n) {
      return e ? e.querySelector(n) : null;
    }
  }, {
    key: "setAttributes",
    value: function(e) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (e) {
        var a = function(i, l) {
          var s, c, v = e != null && (s = e.$attrs) !== null && s !== void 0 && s[i] ? [e == null || (c = e.$attrs) === null || c === void 0 ? void 0 : c[i]] : [];
          return [l].flat().reduce(function(y, d) {
            if (d != null) {
              var S = z(d);
              if (S === "string" || S === "number")
                y.push(d);
              else if (S === "object") {
                var E = Array.isArray(d) ? a(i, d) : Object.entries(d).map(function(O) {
                  var m = Ue(O, 2), h = m[0], b = m[1];
                  return i === "style" && (b || b === 0) ? "".concat(h.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(b) : b ? h : void 0;
                });
                y = E.length ? y.concat(E.filter(function(O) {
                  return !!O;
                })) : y;
              }
            }
            return y;
          }, v);
        };
        Object.entries(o).forEach(function(u) {
          var i = Ue(u, 2), l = i[0], s = i[1];
          if (s != null) {
            var c = l.match(/^on(.+)/);
            c ? e.addEventListener(c[1].toLowerCase(), s) : l === "p-bind" ? n.setAttributes(e, s) : (s = l === "class" ? Ve(new Set(a("class", s))).join(" ").trim() : l === "style" ? a("style", s).join(";").trim() : s, (e.$attrs = e.$attrs || {}) && (e.$attrs[l] = s), e.setAttribute(l, s));
          }
        });
      }
    }
  }, {
    key: "getAttribute",
    value: function(e, n) {
      if (e) {
        var o = e.getAttribute(n);
        return isNaN(o) ? o === "true" || o === "false" ? o === "true" : o : +o;
      }
    }
  }, {
    key: "isAttributeEquals",
    value: function(e, n, o) {
      return e ? this.getAttribute(e, n) === o : !1;
    }
  }, {
    key: "isAttributeNotEquals",
    value: function(e, n, o) {
      return !this.isAttributeEquals(e, n, o);
    }
  }, {
    key: "getHeight",
    value: function(e) {
      if (e) {
        var n = e.offsetHeight, o = getComputedStyle(e);
        return n = n - (parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth)), n;
      }
      return 0;
    }
  }, {
    key: "getWidth",
    value: function(e) {
      if (e) {
        var n = e.offsetWidth, o = getComputedStyle(e);
        return n = n - (parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth)), n;
      }
      return 0;
    }
  }, {
    key: "alignOverlay",
    value: function(e, n, o) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      e && n && (o === "self" ? this.relativePosition(e, n) : (a && (e.style.minWidth = r.getOuterWidth(n) + "px"), this.absolutePosition(e, n)));
    }
  }, {
    key: "absolutePosition",
    value: function(e, n) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left";
      if (e && n) {
        var a = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), u = a.height, i = a.width, l = n.offsetHeight, s = n.offsetWidth, c = n.getBoundingClientRect(), v = this.getWindowScrollTop(), y = this.getWindowScrollLeft(), d = this.getViewport(), S, E;
        c.top + l + u > d.height ? (S = c.top + v - u, S < 0 && (S = v), e.style.transformOrigin = "bottom") : (S = l + c.top + v, e.style.transformOrigin = "top");
        var O = c.left, m = o === "left" ? 0 : i - s;
        O + s + i > d.width ? E = Math.max(0, O + y + s - i) : E = O - m + y, e.style.top = S + "px", e.style.left = E + "px";
      }
    }
  }, {
    key: "relativePosition",
    value: function(e, n) {
      if (e && n) {
        var o = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), a = n.offsetHeight, u = n.getBoundingClientRect(), i = this.getViewport(), l, s;
        u.top + a + o.height > i.height ? (l = -1 * o.height, u.top + l < 0 && (l = -1 * u.top), e.style.transformOrigin = "bottom") : (l = a, e.style.transformOrigin = "top"), o.width > i.width ? s = u.left * -1 : u.left + o.width > i.width ? s = (u.left + o.width - i.width) * -1 : s = 0, e.style.top = l + "px", e.style.left = s + "px";
      }
    }
  }, {
    key: "flipfitCollision",
    value: function(e, n) {
      var o = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left top", u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "left bottom", i = arguments.length > 4 ? arguments[4] : void 0;
      if (e && n) {
        var l = n.getBoundingClientRect(), s = this.getViewport(), c = a.split(" "), v = u.split(" "), y = function(m, h) {
          return h ? +m.substring(m.search(/(\+|-)/g)) || 0 : m.substring(0, m.search(/(\+|-)/g)) || m;
        }, d = {
          my: {
            x: y(c[0]),
            y: y(c[1] || c[0]),
            offsetX: y(c[0], !0),
            offsetY: y(c[1] || c[0], !0)
          },
          at: {
            x: y(v[0]),
            y: y(v[1] || v[0]),
            offsetX: y(v[0], !0),
            offsetY: y(v[1] || v[0], !0)
          }
        }, S = {
          left: function() {
            var m = d.my.offsetX + d.at.offsetX;
            return m + l.left + (d.my.x === "left" ? 0 : -1 * (d.my.x === "center" ? o.getOuterWidth(e) / 2 : o.getOuterWidth(e)));
          },
          top: function() {
            var m = d.my.offsetY + d.at.offsetY;
            return m + l.top + (d.my.y === "top" ? 0 : -1 * (d.my.y === "center" ? o.getOuterHeight(e) / 2 : o.getOuterHeight(e)));
          }
        }, E = {
          count: {
            x: 0,
            y: 0
          },
          left: function() {
            var m = S.left(), h = r.getWindowScrollLeft();
            e.style.left = m + h + "px", this.count.x === 2 ? (e.style.left = h + "px", this.count.x = 0) : m < 0 && (this.count.x++, d.my.x = "left", d.at.x = "right", d.my.offsetX *= -1, d.at.offsetX *= -1, this.right());
          },
          right: function() {
            var m = S.left() + r.getOuterWidth(n), h = r.getWindowScrollLeft();
            e.style.left = m + h + "px", this.count.x === 2 ? (e.style.left = s.width - r.getOuterWidth(e) + h + "px", this.count.x = 0) : m + r.getOuterWidth(e) > s.width && (this.count.x++, d.my.x = "right", d.at.x = "left", d.my.offsetX *= -1, d.at.offsetX *= -1, this.left());
          },
          top: function() {
            var m = S.top(), h = r.getWindowScrollTop();
            e.style.top = m + h + "px", this.count.y === 2 ? (e.style.left = h + "px", this.count.y = 0) : m < 0 && (this.count.y++, d.my.y = "top", d.at.y = "bottom", d.my.offsetY *= -1, d.at.offsetY *= -1, this.bottom());
          },
          bottom: function() {
            var m = S.top() + r.getOuterHeight(n), h = r.getWindowScrollTop();
            e.style.top = m + h + "px", this.count.y === 2 ? (e.style.left = s.height - r.getOuterHeight(e) + h + "px", this.count.y = 0) : m + r.getOuterHeight(n) > s.height && (this.count.y++, d.my.y = "bottom", d.at.y = "top", d.my.offsetY *= -1, d.at.offsetY *= -1, this.top());
          },
          center: function(m) {
            if (m === "y") {
              var h = S.top() + r.getOuterHeight(n) / 2;
              e.style.top = h + r.getWindowScrollTop() + "px", h < 0 ? this.bottom() : h + r.getOuterHeight(n) > s.height && this.top();
            } else {
              var b = S.left() + r.getOuterWidth(n) / 2;
              e.style.left = b + r.getWindowScrollLeft() + "px", b < 0 ? this.left() : b + r.getOuterWidth(e) > s.width && this.right();
            }
          }
        };
        E[d.at.x]("x"), E[d.at.y]("y"), this.isFunction(i) && i(d);
      }
    }
  }, {
    key: "findCollisionPosition",
    value: function(e) {
      if (e) {
        var n = e === "top" || e === "bottom", o = e === "left" ? "right" : "left", a = e === "top" ? "bottom" : "top";
        return n ? {
          axis: "y",
          my: "center ".concat(a),
          at: "center ".concat(e)
        } : {
          axis: "x",
          my: "".concat(o, " center"),
          at: "".concat(e, " center")
        };
      }
    }
  }, {
    key: "getParents",
    value: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return e.parentNode === null ? n : this.getParents(e.parentNode, n.concat([e.parentNode]));
    }
    /**
     * Gets all scrollable parent elements of a given element
     * @param {HTMLElement} element - The element to find scrollable parents for
     * @param {boolean} hideOverlaysOnDocumentScrolling - Whether to include window/document level scrolling
     * @returns {Array} Array of scrollable parent elements
     */
  }, {
    key: "getScrollableParents",
    value: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = [];
      if (e) {
        var a = this.getParents(e), u = /(auto|scroll)/, i = function(R) {
          var L = R ? getComputedStyle(R) : null;
          return L && (u.test(L.getPropertyValue("overflow")) || u.test(L.getPropertyValue("overflow-x")) || u.test(L.getPropertyValue("overflow-y")));
        }, l = function(R) {
          n && o.push(R.nodeName === "BODY" || R.nodeName === "HTML" || R.nodeType === 9 ? window : R);
        }, s = it(a), c;
        try {
          for (s.s(); !(c = s.n()).done; ) {
            var v, y = c.value, d = y.nodeType === 1 && ((v = y.dataset) === null || v === void 0 ? void 0 : v.scrollselectors);
            if (d) {
              var S = d.split(","), E = it(S), O;
              try {
                for (E.s(); !(O = E.n()).done; ) {
                  var m = O.value, h = this.findSingle(y, m);
                  h && i(h) && l(h);
                }
              } catch (b) {
                E.e(b);
              } finally {
                E.f();
              }
            }
            y.nodeType === 1 && i(y) && l(y);
          }
        } catch (b) {
          s.e(b);
        } finally {
          s.f();
        }
      }
      return o.some(function(b) {
        return b === document.body || b === window;
      }) || o.push(n ? window : document.body), o;
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function(e) {
      if (e) {
        e.style.visibility = "hidden", e.style.display = "block";
        var n = e.offsetHeight;
        return e.style.display = "none", e.style.visibility = "visible", n;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function(e) {
      if (e) {
        e.style.visibility = "hidden", e.style.display = "block";
        var n = e.offsetWidth;
        return e.style.display = "none", e.style.visibility = "visible", n;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function(e) {
      var n = {};
      return e && (e.style.visibility = "hidden", e.style.display = "block", n.width = e.offsetWidth, n.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), n;
    }
  }, {
    key: "fadeIn",
    value: function(e, n) {
      if (e) {
        e.style.opacity = 0;
        var o = +/* @__PURE__ */ new Date(), a = 0, u = function() {
          a = +e.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - o) / n, e.style.opacity = a, o = +/* @__PURE__ */ new Date(), +a < 1 && (window.requestAnimationFrame && requestAnimationFrame(u) || setTimeout(u, 16));
        };
        u();
      }
    }
  }, {
    key: "fadeOut",
    value: function(e, n) {
      if (e)
        var o = 1, a = 50, u = a / n, i = setInterval(function() {
          o = o - u, o <= 0 && (o = 0, clearInterval(i)), e.style.opacity = o;
        }, a);
    }
  }, {
    key: "getUserAgent",
    value: function() {
      return navigator.userAgent;
    }
  }, {
    key: "isIOS",
    value: function() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
  }, {
    key: "isAndroid",
    value: function() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "isChrome",
    value: function() {
      return /(chrome)/i.test(navigator.userAgent);
    }
  }, {
    key: "isClient",
    value: function() {
      return !!(typeof window < "u" && window.document && window.document.createElement);
    }
  }, {
    key: "isTouchDevice",
    value: function() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
  }, {
    key: "isFunction",
    value: function(e) {
      return !!(e && e.constructor && e.call && e.apply);
    }
  }, {
    key: "appendChild",
    value: function(e, n) {
      if (this.isElement(n))
        n.appendChild(e);
      else if (n.el && n.el.nativeElement)
        n.el.nativeElement.appendChild(e);
      else
        throw new Error("Cannot append " + n + " to " + e);
    }
  }, {
    key: "removeChild",
    value: function(e, n) {
      if (this.isElement(n))
        n.removeChild(e);
      else if (n.el && n.el.nativeElement)
        n.el.nativeElement.removeChild(e);
      else
        throw new Error("Cannot remove " + e + " from " + n);
    }
  }, {
    key: "isElement",
    value: function(e) {
      return (typeof HTMLElement > "u" ? "undefined" : z(HTMLElement)) === "object" ? e instanceof HTMLElement : e && z(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
    }
  }, {
    key: "scrollInView",
    value: function(e, n) {
      var o = getComputedStyle(e).getPropertyValue("border-top-width"), a = o ? parseFloat(o) : 0, u = getComputedStyle(e).getPropertyValue("padding-top"), i = u ? parseFloat(u) : 0, l = e.getBoundingClientRect(), s = n.getBoundingClientRect(), c = s.top + document.body.scrollTop - (l.top + document.body.scrollTop) - a - i, v = e.scrollTop, y = e.clientHeight, d = this.getOuterHeight(n);
      c < 0 ? e.scrollTop = v + c : c + d > y && (e.scrollTop = v + c - y + d);
    }
  }, {
    key: "clearSelection",
    value: function() {
      if (window.getSelection)
        window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0 && window.getSelection().removeAllRanges();
      else if (document.selection && document.selection.empty)
        try {
          document.selection.empty();
        } catch {
        }
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function(e) {
      if (e) {
        var n = getComputedStyle(e);
        return e.offsetWidth - e.clientWidth - parseFloat(n.borderLeftWidth) - parseFloat(n.borderRightWidth);
      }
      if (this.calculatedScrollbarWidth != null)
        return this.calculatedScrollbarWidth;
      var o = document.createElement("div");
      o.className = "p-scrollbar-measure", document.body.appendChild(o);
      var a = o.offsetWidth - o.clientWidth;
      return document.body.removeChild(o), this.calculatedScrollbarWidth = a, a;
    }
  }, {
    key: "calculateBodyScrollbarWidth",
    value: function() {
      return window.innerWidth - document.documentElement.offsetWidth;
    }
  }, {
    key: "getBrowser",
    value: function() {
      if (!this.browser) {
        var e = this.resolveUserAgent();
        this.browser = {}, e.browser && (this.browser[e.browser] = !0, this.browser.version = e.version), this.browser.chrome ? this.browser.webkit = !0 : this.browser.webkit && (this.browser.safari = !0);
      }
      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function() {
      var e = navigator.userAgent.toLowerCase(), n = /(chrome)[ ]([\w.]+)/.exec(e) || /(webkit)[ ]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return {
        browser: n[1] || "",
        version: n[2] || "0"
      };
    }
  }, {
    key: "blockBodyScroll",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden", n = !!document.body.style.getPropertyValue("--scrollbar-width");
      !n && document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px"), this.addClass(document.body, e);
    }
  }, {
    key: "unblockBodyScroll",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
      document.body.style.removeProperty("--scrollbar-width"), this.removeClass(document.body, e);
    }
  }, {
    key: "isVisible",
    value: function(e) {
      return e && (e.clientHeight !== 0 || e.getClientRects().length !== 0 || getComputedStyle(e).display !== "none");
    }
  }, {
    key: "isExist",
    value: function(e) {
      return !!(e !== null && typeof e < "u" && e.nodeName && e.parentNode);
    }
  }, {
    key: "getFocusableElements",
    value: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = r.find(e, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n, `,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)), a = [], u = it(o), i;
      try {
        for (u.s(); !(i = u.n()).done; ) {
          var l = i.value;
          getComputedStyle(l).display !== "none" && getComputedStyle(l).visibility !== "hidden" && a.push(l);
        }
      } catch (s) {
        u.e(s);
      } finally {
        u.f();
      }
      return a;
    }
  }, {
    key: "getFirstFocusableElement",
    value: function(e, n) {
      var o = r.getFocusableElements(e, n);
      return o.length > 0 ? o[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function(e, n) {
      var o = r.getFocusableElements(e, n);
      return o.length > 0 ? o[o.length - 1] : null;
    }
    /**
     * Focus an input element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     */
  }, {
    key: "focus",
    value: function(e, n) {
      var o = n === void 0 ? !0 : !n;
      e && document.activeElement !== e && e.focus({
        preventScroll: o
      });
    }
    /**
     * Focus the first focusable element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     * @return {HTMLElement | undefined} the first focusable HTML element found
     */
  }, {
    key: "focusFirstElement",
    value: function(e, n) {
      if (e) {
        var o = r.getFirstFocusableElement(e);
        return o && r.focus(o, n), o;
      }
    }
  }, {
    key: "getCursorOffset",
    value: function(e, n, o, a) {
      if (e) {
        var u = getComputedStyle(e), i = document.createElement("div");
        i.style.position = "absolute", i.style.top = "0px", i.style.left = "0px", i.style.visibility = "hidden", i.style.pointerEvents = "none", i.style.overflow = u.overflow, i.style.width = u.width, i.style.height = u.height, i.style.padding = u.padding, i.style.border = u.border, i.style.overflowWrap = u.overflowWrap, i.style.whiteSpace = u.whiteSpace, i.style.lineHeight = u.lineHeight, i.innerHTML = n.replace(/\r\n|\r|\n/g, "<br />");
        var l = document.createElement("span");
        l.textContent = a, i.appendChild(l);
        var s = document.createTextNode(o);
        i.appendChild(s), document.body.appendChild(i);
        var c = l.offsetLeft, v = l.offsetTop, y = l.clientHeight;
        return document.body.removeChild(i), {
          left: Math.abs(c - e.scrollLeft),
          top: Math.abs(v - e.scrollTop) + y
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "invokeElementMethod",
    value: function(e, n, o) {
      e[n].apply(e, o);
    }
  }, {
    key: "isClickable",
    value: function(e) {
      var n = e.nodeName, o = e.parentElement && e.parentElement.nodeName;
      return n === "INPUT" || n === "TEXTAREA" || n === "BUTTON" || n === "A" || o === "INPUT" || o === "TEXTAREA" || o === "BUTTON" || o === "A" || this.hasClass(e, "p-button") || this.hasClass(e.parentElement, "p-button") || this.hasClass(e.parentElement, "p-checkbox") || this.hasClass(e.parentElement, "p-radiobutton");
    }
  }, {
    key: "applyStyle",
    value: function(e, n) {
      if (typeof n == "string")
        e.style.cssText = n;
      else
        for (var o in n)
          e.style[o] = n[o];
    }
  }, {
    key: "exportCSV",
    value: function(e, n) {
      var o = new Blob([e], {
        type: "application/csv;charset=utf-8;"
      });
      if (window.navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(o, n + ".csv");
      else {
        var a = r.saveAs({
          name: n + ".csv",
          src: URL.createObjectURL(o)
        });
        a || (e = "data:text/csv;charset=utf-8," + e, window.open(encodeURI(e)));
      }
    }
  }, {
    key: "saveAs",
    value: function(e) {
      if (e) {
        var n = document.createElement("a");
        if (n.download !== void 0) {
          var o = e.name, a = e.src;
          return n.setAttribute("href", a), n.setAttribute("download", o), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n), !0;
        }
      }
      return !1;
    }
  }, {
    key: "createInlineStyle",
    value: function(e, n) {
      var o = document.createElement("style");
      return r.addNonce(o, e), n || (n = document.head), n.appendChild(o), o;
    }
  }, {
    key: "removeInlineStyle",
    value: function(e) {
      if (this.isExist(e)) {
        try {
          e.parentNode.removeChild(e);
        } catch {
        }
        e = null;
      }
      return e;
    }
  }, {
    key: "addNonce",
    value: function(e, n) {
      try {
        n || (n = process.env.REACT_APP_CSS_NONCE);
      } catch {
      }
      n && e.setAttribute("nonce", n);
    }
  }, {
    key: "getTargetElement",
    value: function(e) {
      if (!e)
        return null;
      if (e === "document")
        return document;
      if (e === "window")
        return window;
      if (z(e) === "object" && e.hasOwnProperty("current"))
        return this.isExist(e.current) ? e.current : null;
      var n = function(u) {
        return !!(u && u.constructor && u.call && u.apply);
      }, o = n(e) ? e() : e;
      return o && o.nodeType === 9 || this.isExist(o) ? o : null;
    }
    /**
     * Get the attribute names for an element and sorts them alpha for comparison
     */
  }, {
    key: "getAttributeNames",
    value: function(e) {
      var n, o, a;
      for (o = [], a = e.attributes, n = 0; n < a.length; ++n)
        o.push(a[n].nodeName);
      return o.sort(), o;
    }
    /**
     * Compare two elements for equality.  Even will compare if the style element
     * is out of order for example:
     *
     * elem1 = style="color: red; font-size: 28px"
     * elem2 = style="font-size: 28px; color: red"
     */
  }, {
    key: "isEqualElement",
    value: function(e, n) {
      var o, a, u, i, l;
      if (o = r.getAttributeNames(e), a = r.getAttributeNames(n), o.join(",") !== a.join(","))
        return !1;
      for (var s = 0; s < o.length; ++s)
        if (u = o[s], u === "style")
          for (var c = e.style, v = n.style, y = /^\d+$/, d = 0, S = Object.keys(c); d < S.length; d++) {
            var E = S[d];
            if (!y.test(E) && c[E] !== v[E])
              return !1;
          }
        else if (e.getAttribute(u) !== n.getAttribute(u))
          return !1;
      for (i = e.firstChild, l = n.firstChild; i && l; i = i.nextSibling, l = l.nextSibling) {
        if (i.nodeType !== l.nodeType)
          return !1;
        if (i.nodeType === 1) {
          if (!r.isEqualElement(i, l))
            return !1;
        } else if (i.nodeValue !== l.nodeValue)
          return !1;
      }
      return !(i || l);
    }
  }, {
    key: "hasCSSAnimation",
    value: function(e) {
      if (e) {
        var n = getComputedStyle(e), o = parseFloat(n.getPropertyValue("animation-duration") || "0");
        return o > 0;
      }
      return !1;
    }
  }, {
    key: "hasCSSTransition",
    value: function(e) {
      if (e) {
        var n = getComputedStyle(e), o = parseFloat(n.getPropertyValue("transition-duration") || "0");
        return o > 0;
      }
      return !1;
    }
  }]);
}();
Ge(C, "DATA_PROPS", ["data-"]);
Ge(C, "ARIA_PROPS", ["aria", "focus-target"]);
function st() {
  return st = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) ({}).hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, st.apply(null, arguments);
}
function zn(r, t) {
  var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = Kn(r)) || t) {
      e && (r = e);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
      }, e: function(s) {
        throw s;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, u = !0, i = !1;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var s = e.next();
    return u = s.done, s;
  }, e: function(s) {
    i = !0, a = s;
  }, f: function() {
    try {
      u || e.return == null || e.return();
    } finally {
      if (i) throw a;
    }
  } };
}
function Kn(r, t) {
  if (r) {
    if (typeof r == "string") return Ft(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ft(r, t) : void 0;
  }
}
function Ft(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
var T = /* @__PURE__ */ function() {
  function r() {
    mt(this, r);
  }
  return bt(r, null, [{
    key: "equals",
    value: function(e, n, o) {
      return o && e && z(e) === "object" && n && z(n) === "object" ? this.deepEquals(this.resolveFieldData(e, o), this.resolveFieldData(n, o)) : this.deepEquals(e, n);
    }
    /**
     * Compares two JSON objects for deep equality recursively comparing both objects.
     * @param {*} a the first JSON object
     * @param {*} b the second JSON object
     * @returns true if equals, false it not
     */
  }, {
    key: "deepEquals",
    value: function(e, n) {
      if (e === n)
        return !0;
      if (e && n && z(e) === "object" && z(n) === "object") {
        var o = Array.isArray(e), a = Array.isArray(n), u, i, l;
        if (o && a) {
          if (i = e.length, i !== n.length)
            return !1;
          for (u = i; u-- !== 0; )
            if (!this.deepEquals(e[u], n[u]))
              return !1;
          return !0;
        }
        if (o !== a)
          return !1;
        var s = e instanceof Date, c = n instanceof Date;
        if (s !== c)
          return !1;
        if (s && c)
          return e.getTime() === n.getTime();
        var v = e instanceof RegExp, y = n instanceof RegExp;
        if (v !== y)
          return !1;
        if (v && y)
          return e.toString() === n.toString();
        var d = Object.keys(e);
        if (i = d.length, i !== Object.keys(n).length)
          return !1;
        for (u = i; u-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(n, d[u]))
            return !1;
        for (u = i; u-- !== 0; )
          if (l = d[u], !this.deepEquals(e[l], n[l]))
            return !1;
        return !0;
      }
      return e !== e && n !== n;
    }
  }, {
    key: "resolveFieldData",
    value: function(e, n) {
      if (!e || !n)
        return null;
      try {
        var o = e[n];
        if (this.isNotEmpty(o))
          return o;
      } catch {
      }
      if (Object.keys(e).length) {
        if (this.isFunction(n))
          return n(e);
        if (this.isNotEmpty(e[n]))
          return e[n];
        if (n.indexOf(".") === -1)
          return e[n];
        for (var a = n.split("."), u = e, i = 0, l = a.length; i < l; ++i) {
          if (u == null)
            return null;
          u = u[a[i]];
        }
        return u;
      }
      return null;
    }
  }, {
    key: "findDiffKeys",
    value: function(e, n) {
      return !e || !n ? {} : Object.keys(e).filter(function(o) {
        return !n.hasOwnProperty(o);
      }).reduce(function(o, a) {
        return o[a] = e[a], o;
      }, {});
    }
    /**
     * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
     *
     * @param {any} obj the JSON object to reduce
     * @param {string[]} startsWiths the string(s) to check if the property starts with this key
     * @returns the JSON object containing only the key/values that match the startsWith string
     */
  }, {
    key: "reduceKeys",
    value: function(e, n) {
      var o = {};
      return !e || !n || n.length === 0 || Object.keys(e).filter(function(a) {
        return n.some(function(u) {
          return a.startsWith(u);
        });
      }).forEach(function(a) {
        o[a] = e[a], delete e[a];
      }), o;
    }
  }, {
    key: "reorderArray",
    value: function(e, n, o) {
      e && n !== o && (o >= e.length && (o = o % e.length, n = n % e.length), e.splice(o, 0, e.splice(n, 1)[0]));
    }
  }, {
    key: "findIndexInList",
    value: function(e, n, o) {
      var a = this;
      return n ? o ? n.findIndex(function(u) {
        return a.equals(u, e, o);
      }) : n.findIndex(function(u) {
        return u === e;
      }) : -1;
    }
  }, {
    key: "getJSXElement",
    value: function(e) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
        o[a - 1] = arguments[a];
      return this.isFunction(e) ? e.apply(void 0, o) : e;
    }
  }, {
    key: "getItemValue",
    value: function(e) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
        o[a - 1] = arguments[a];
      return this.isFunction(e) ? e.apply(void 0, o) : e;
    }
  }, {
    key: "getProp",
    value: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e ? e[n] : void 0;
      return a === void 0 ? o[n] : a;
    }
  }, {
    key: "getPropCaseInsensitive",
    value: function(e, n) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this.toFlatCase(n);
      for (var u in e)
        if (e.hasOwnProperty(u) && this.toFlatCase(u) === a)
          return e[u];
      for (var i in o)
        if (o.hasOwnProperty(i) && this.toFlatCase(i) === a)
          return o[i];
    }
  }, {
    key: "getMergedProps",
    value: function(e, n) {
      return Object.assign({}, n, e);
    }
  }, {
    key: "getDiffProps",
    value: function(e, n) {
      return this.findDiffKeys(e, n);
    }
    /**
     * Gets the value of a property which can be a function or a direct value.
     * If the property is a function, it will be invoked with the provided parameters.
     * @param {*} obj - The object to get the value from
     * @param {...*} params - Parameters to pass to the function if obj is a function
     * @returns {*} The resolved value
     */
  }, {
    key: "getPropValue",
    value: function(e) {
      if (!this.isFunction(e))
        return e;
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
        o[a - 1] = arguments[a];
      if (o.length === 1) {
        var u = o[0];
        return e(Array.isArray(u) ? u[0] : u);
      }
      return e.apply(void 0, o);
    }
  }, {
    key: "getComponentProp",
    value: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.isNotEmpty(e) ? this.getProp(e.props, n, o) : void 0;
    }
  }, {
    key: "getComponentProps",
    value: function(e, n) {
      return this.isNotEmpty(e) ? this.getMergedProps(e.props, n) : void 0;
    }
  }, {
    key: "getComponentDiffProps",
    value: function(e, n) {
      return this.isNotEmpty(e) ? this.getDiffProps(e.props, n) : void 0;
    }
  }, {
    key: "isValidChild",
    value: function(e, n, o) {
      if (e) {
        var a, u = this.getComponentProp(e, "__TYPE") || (e.type ? e.type.displayName : void 0);
        !u && e !== null && e !== void 0 && (a = e.type) !== null && a !== void 0 && (a = a._payload) !== null && a !== void 0 && a.value && (u = e.type._payload.value.find(function(s) {
          return s === n;
        }));
        var i = u === n;
        try {
          var l;
        } catch {
        }
        return i;
      }
      return !1;
    }
  }, {
    key: "getRefElement",
    value: function(e) {
      return e ? z(e) === "object" && e.hasOwnProperty("current") ? e.current : e : null;
    }
  }, {
    key: "combinedRefs",
    value: function(e, n) {
      e && n && (typeof n == "function" ? n(e.current) : n.current = e.current);
    }
  }, {
    key: "removeAccents",
    value: function(e) {
      return e && e.search(/[\xC0-\xFF]/g) > -1 && (e = e.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y")), e;
    }
  }, {
    key: "toFlatCase",
    value: function(e) {
      return this.isNotEmpty(e) && this.isString(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
    }
  }, {
    key: "toCapitalCase",
    value: function(e) {
      return this.isNotEmpty(e) && this.isString(e) ? e[0].toUpperCase() + e.slice(1) : e;
    }
  }, {
    key: "trim",
    value: function(e) {
      return this.isNotEmpty(e) && this.isString(e) ? e.trim() : e;
    }
  }, {
    key: "isEmpty",
    value: function(e) {
      return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && z(e) === "object" && Object.keys(e).length === 0;
    }
  }, {
    key: "isNotEmpty",
    value: function(e) {
      return !this.isEmpty(e);
    }
  }, {
    key: "isFunction",
    value: function(e) {
      return !!(e && e.constructor && e.call && e.apply);
    }
  }, {
    key: "isObject",
    value: function(e) {
      return e !== null && e instanceof Object && e.constructor === Object;
    }
  }, {
    key: "isDate",
    value: function(e) {
      return e !== null && e instanceof Date && e.constructor === Date;
    }
  }, {
    key: "isArray",
    value: function(e) {
      return e !== null && Array.isArray(e);
    }
  }, {
    key: "isString",
    value: function(e) {
      return e !== null && typeof e == "string";
    }
  }, {
    key: "isPrintableCharacter",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return this.isNotEmpty(e) && e.length === 1 && e.match(/\S| /);
    }
  }, {
    key: "isLetter",
    value: function(e) {
      return /^[a-zA-Z\u00C0-\u017F]$/.test(e);
    }
  }, {
    key: "isScalar",
    value: function(e) {
      return e != null && (typeof e == "string" || typeof e == "number" || typeof e == "bigint" || typeof e == "boolean");
    }
    /**
     * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlast
     */
  }, {
    key: "findLast",
    value: function(e, n) {
      var o;
      if (this.isNotEmpty(e))
        try {
          o = e.findLast(n);
        } catch {
          o = Ve(e).reverse().find(n);
        }
      return o;
    }
    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
  }, {
    key: "findLastIndex",
    value: function(e, n) {
      var o = -1;
      if (this.isNotEmpty(e))
        try {
          o = e.findLastIndex(n);
        } catch {
          o = e.lastIndexOf(Ve(e).reverse().find(n));
        }
      return o;
    }
  }, {
    key: "sort",
    value: function(e, n) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, i = this.compare(e, n, a, o), l = o;
      return (this.isEmpty(e) || this.isEmpty(n)) && (l = u === 1 ? o : u), l * i;
    }
  }, {
    key: "compare",
    value: function(e, n, o) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, u = -1, i = this.isEmpty(e), l = this.isEmpty(n);
      return i && l ? u = 0 : i ? u = a : l ? u = -a : typeof e == "string" && typeof n == "string" ? u = o(e, n) : u = e < n ? -1 : e > n ? 1 : 0, u;
    }
  }, {
    key: "localeComparator",
    value: function(e) {
      return new Intl.Collator(e, {
        numeric: !0
      }).compare;
    }
  }, {
    key: "findChildrenByKey",
    value: function(e, n) {
      var o = zn(e), a;
      try {
        for (o.s(); !(a = o.n()).done; ) {
          var u = a.value;
          if (u.key === n)
            return u.children || [];
          if (u.children) {
            var i = this.findChildrenByKey(u.children, n);
            if (i.length > 0)
              return i;
          }
        }
      } catch (l) {
        o.e(l);
      } finally {
        o.f();
      }
      return [];
    }
    /**
     * This function takes mutates and object with a new value given
     * a specific field. This will handle deeply nested fields that
     * need to be modified or created.
     *
     * e.g:
     * data = {
     *  nested: {
     *      foo: "bar"
     *  }
     * }
     *
     * field = "nested.foo"
     * value = "baz"
     *
     * The function will mutate data to be
     * e.g:
     * data = {
     *  nested: {
     *      foo: "baz"
     *  }
     * }
     *
     * @param {object} data the object to be modified
     * @param {string} field the field in the object to replace
     * @param {any} value the value to have replaced in the field
     */
  }, {
    key: "mutateFieldData",
    value: function(e, n, o) {
      if (!(z(e) !== "object" || typeof n != "string"))
        for (var a = n.split("."), u = e, i = 0, l = a.length; i < l; ++i) {
          if (i + 1 - l === 0) {
            u[a[i]] = o;
            break;
          }
          u[a[i]] || (u[a[i]] = {}), u = u[a[i]];
        }
    }
  }]);
}(), Mt = 0;
function rn() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pr_id_";
  return Mt++, "".concat(r).concat(Mt);
}
function Wt(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function qn(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wt(Object(e), !0).forEach(function(n) {
      Ge(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Wt(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
var Xn = /* @__PURE__ */ function() {
  function r() {
    mt(this, r);
  }
  return bt(r, null, [{
    key: "getJSXIcon",
    value: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = null;
      if (e !== null) {
        var u = z(e), i = G(n.className, u === "string" && e);
        if (a = /* @__PURE__ */ g.createElement("span", st({}, n, {
          className: i,
          key: rn("icon")
        })), u !== "string") {
          var l = qn({
            iconProps: n,
            element: a
          }, o);
          return T.getJSXElement(e, l);
        }
      }
      return a;
    }
  }]);
}();
function Ht(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function Bt(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ht(Object(e), !0).forEach(function(n) {
      Ge(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Ht(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function ze(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (r) {
    var e = function(u) {
      return typeof u == "function";
    }, n = t.classNameMergeFunction, o = e(n);
    return r.reduce(function(a, u) {
      if (!u)
        return a;
      var i = function() {
        var c = u[l];
        if (l === "style")
          a.style = Bt(Bt({}, a.style), u.style);
        else if (l === "className") {
          var v = "";
          o ? v = n(a.className, u.className) : v = [a.className, u.className].join(" ").trim(), a.className = v || void 0;
        } else if (e(c)) {
          var y = a[l];
          a[l] = y ? function() {
            y.apply(void 0, arguments), c.apply(void 0, arguments);
          } : c;
        } else
          a[l] = c;
      };
      for (var l in u)
        i();
      return a;
    }, {});
  }
}
function Gn() {
  var r = [], t = function(i, l) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999, c = o(i, l, s), v = c.value + (c.key === i ? 0 : s) + 1;
    return r.push({
      key: i,
      value: v
    }), v;
  }, e = function(i) {
    r = r.filter(function(l) {
      return l.value !== i;
    });
  }, n = function(i, l) {
    return o(i, l).value;
  }, o = function(i, l) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return Ve(r).reverse().find(function(c) {
      return l ? !0 : c.key === i;
    }) || {
      key: i,
      value: s
    };
  }, a = function(i) {
    return i && parseInt(i.style.zIndex, 10) || 0;
  };
  return {
    get: a,
    set: function(i, l, s, c) {
      l && (l.style.zIndex = String(t(i, s, c)));
    },
    clear: function(i) {
      i && (e(Pe.get(i)), i.style.zIndex = "");
    },
    getCurrent: function(i, l) {
      return n(i, l);
    }
  };
}
var Pe = Gn(), X = Object.freeze({
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter",
  CUSTOM: "custom"
});
function Ce(r) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ce(r);
}
function Zn(r, t) {
  if (Ce(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (Ce(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function Jn(r) {
  var t = Zn(r, "string");
  return Ce(t) == "symbol" ? t : t + "";
}
function te(r, t, e) {
  return (t = Jn(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function Qn(r, t, e) {
  return Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function er(r, t) {
  if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var Q = /* @__PURE__ */ Qn(function r() {
  er(this, r);
});
te(Q, "ripple", !1);
te(Q, "inputStyle", "outlined");
te(Q, "locale", "en");
te(Q, "appendTo", null);
te(Q, "cssTransition", !0);
te(Q, "autoZIndex", !0);
te(Q, "hideOverlaysOnDocumentScrolling", !1);
te(Q, "nonce", null);
te(Q, "nullSortOrder", 1);
te(Q, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
te(Q, "pt", void 0);
te(Q, "filterMatchModeOptions", {
  text: [X.STARTS_WITH, X.CONTAINS, X.NOT_CONTAINS, X.ENDS_WITH, X.EQUALS, X.NOT_EQUALS],
  numeric: [X.EQUALS, X.NOT_EQUALS, X.LESS_THAN, X.LESS_THAN_OR_EQUAL_TO, X.GREATER_THAN, X.GREATER_THAN_OR_EQUAL_TO],
  date: [X.DATE_IS, X.DATE_IS_NOT, X.DATE_BEFORE, X.DATE_AFTER]
});
te(Q, "changeTheme", function(r, t, e, n) {
  var o, a = document.getElementById(e);
  if (!a)
    throw Error("Element with id ".concat(e, " not found."));
  var u = a.getAttribute("href").replace(r, t), i = document.createElement("link");
  i.setAttribute("rel", "stylesheet"), i.setAttribute("id", e), i.setAttribute("href", u), i.addEventListener("load", function() {
    n && n();
  }), (o = a.parentNode) === null || o === void 0 || o.replaceChild(i, a);
});
var pe = /* @__PURE__ */ Jt.createContext(), fe = Q;
function tr(r) {
  if (Array.isArray(r)) return r;
}
function nr(r, t) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var n, o, a, u, i = [], l = !0, s = !1;
    try {
      if (a = (e = e.call(r)).next, t === 0) {
        if (Object(e) !== e) return;
        l = !1;
      } else for (; !(l = (n = a.call(e)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (c) {
      s = !0, o = c;
    } finally {
      try {
        if (!l && e.return != null && (u = e.return(), Object(u) !== u)) return;
      } finally {
        if (s) throw o;
      }
    }
    return i;
  }
}
function ct(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function on(r, t) {
  if (r) {
    if (typeof r == "string") return ct(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ct(r, t) : void 0;
  }
}
function rr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ke(r, t) {
  return tr(r) || nr(r, t) || on(r, t) || rr();
}
var qe = function(t) {
  var e = g.useRef(null);
  return g.useEffect(function() {
    return e.current = t, function() {
      e.current = null;
    };
  }, [t]), e.current;
}, he = function(t) {
  return g.useEffect(function() {
    return t;
  }, []);
}, or = function(t) {
  var e = t.target, n = e === void 0 ? "document" : e, o = t.type, a = t.listener, u = t.options, i = t.when, l = i === void 0 ? !0 : i, s = g.useRef(null), c = g.useRef(null), v = qe(a), y = qe(u), d = function() {
    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = h.target;
    T.isNotEmpty(b) && (S(), (h.when || l) && (s.current = C.getTargetElement(b))), !c.current && s.current && (c.current = function(R) {
      return a && a(R);
    }, s.current.addEventListener(o, c.current, u));
  }, S = function() {
    c.current && (s.current.removeEventListener(o, c.current, u), c.current = null);
  }, E = function() {
    S(), v = null, y = null;
  }, O = g.useCallback(function() {
    l ? s.current = C.getTargetElement(n) : (S(), s.current = null);
  }, [n, l]);
  return g.useEffect(function() {
    O();
  }, [O]), g.useEffect(function() {
    var m = "".concat(v) !== "".concat(a), h = y !== u, b = c.current;
    b && (m || h) ? (S(), l && d()) : b || E();
  }, [a, u, l]), he(function() {
    E();
  }), [d, S];
}, ge = {}, ar = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = g.useState(function() {
    return rn();
  }), o = Ke(n, 1), a = o[0], u = g.useState(0), i = Ke(u, 2), l = i[0], s = i[1];
  return g.useEffect(function() {
    if (e) {
      ge[t] || (ge[t] = []);
      var c = ge[t].push(a);
      return s(c), function() {
        delete ge[t][c - 1];
        var v = ge[t].length - 1, y = T.findLastIndex(ge[t], function(d) {
          return d !== void 0;
        });
        y !== v && ge[t].splice(y + 1), s(void 0);
      };
    }
  }, [t, a, e]), l;
};
function ir(r) {
  if (Array.isArray(r)) return ct(r);
}
function ur(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function lr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ut(r) {
  return ir(r) || ur(r) || on(r) || lr();
}
var sr = {
  TOOLTIP: 1200
}, an = {
  /**
   * Mapping from ESC_KEY_HANDLING_PRIORITY to array of related listeners, grouped by priority
   * @example
   * Map<{
   *     [ESC_KEY_HANDLING_PRIORITIES.SIDEBAR]: Map<{
   *         1: () => {...},
   *         2: () => {...}
   *     }>,
   *     [ESC_KEY_HANDLING_PRIORITIES.DIALOG]: Map<{
   *         1: () => {...},
   *         2: () => {...}
   *     }>
   * }>;
   */
  escKeyListeners: /* @__PURE__ */ new Map(),
  /**
   * Keydown handler (attached to any keydown)
   */
  onGlobalKeyDown: function(t) {
    if (t.code === "Escape") {
      var e = an.escKeyListeners, n = Math.max.apply(Math, Ut(e.keys())), o = e.get(n), a = Math.max.apply(Math, Ut(o.keys())), u = o.get(a);
      u(t);
    }
  },
  /**
   * Attach global keydown listener if there are any "esc" key handlers assigned,
   * otherwise detach.
   */
  refreshGlobalKeyDownListener: function() {
    var t = C.getTargetElement("document");
    this.escKeyListeners.size > 0 ? t.addEventListener("keydown", this.onGlobalKeyDown) : t.removeEventListener("keydown", this.onGlobalKeyDown);
  },
  /**
   * Add "Esc" key handler
   */
  addListener: function(t, e) {
    var n = this, o = Ke(e, 2), a = o[0], u = o[1], i = this.escKeyListeners;
    i.has(a) || i.set(a, /* @__PURE__ */ new Map());
    var l = i.get(a);
    if (l.has(u))
      throw new Error("Unexpected: global esc key listener with priority [".concat(a, ", ").concat(u, "] already exists."));
    return l.set(u, t), this.refreshGlobalKeyDownListener(), function() {
      l.delete(u), l.size === 0 && i.delete(a), n.refreshGlobalKeyDownListener();
    };
  }
}, cr = function(t) {
  var e = t.callback, n = t.when, o = t.priority;
  en(function() {
    if (n)
      return an.addListener(e, o);
  }, [e, n, o]);
}, Ze = function() {
  var t = Qt(pe);
  return function() {
    for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
      n[o] = arguments[o];
    return ze(n, t == null ? void 0 : t.ptOptions);
  };
}, Je = function(t) {
  var e = g.useRef(!1);
  return g.useEffect(function() {
    if (!e.current)
      return e.current = !0, t && t();
  }, []);
}, fr = function(t) {
  var e = t.target, n = t.listener, o = t.options, a = t.when, u = a === void 0 ? !0 : a, i = g.useContext(pe), l = g.useRef(null), s = g.useRef(null), c = g.useRef([]), v = qe(n), y = qe(o), d = function() {
    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (T.isNotEmpty(h.target) && (S(), (h.when || u) && (l.current = C.getTargetElement(h.target))), !s.current && l.current) {
      var b = i ? i.hideOverlaysOnDocumentScrolling : fe.hideOverlaysOnDocumentScrolling, R = c.current = C.getScrollableParents(l.current, b);
      s.current = function(L) {
        return n && n(L);
      }, R.forEach(function(L) {
        return L.addEventListener("scroll", s.current, o);
      });
    }
  }, S = function() {
    if (s.current) {
      var h = c.current;
      h.forEach(function(b) {
        return b.removeEventListener("scroll", s.current, o);
      }), s.current = null;
    }
  }, E = function() {
    S(), c.current = null, v = null, y = null;
  }, O = g.useCallback(function() {
    u ? l.current = C.getTargetElement(e) : (S(), l.current = null);
  }, [e, u]);
  return g.useEffect(function() {
    O();
  }, [O]), g.useEffect(function() {
    var m = "".concat(v) !== "".concat(n), h = y !== o, b = s.current;
    b && (m || h) ? (S(), u && d()) : b || E();
  }, [n, o, u]), he(function() {
    E();
  }), [d, S];
}, dr = function(t) {
  var e = t.listener, n = t.when, o = n === void 0 ? !0 : n;
  return or({
    target: "window",
    type: "resize",
    listener: e,
    when: o
  });
}, pr = 0, xe = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = _n(!1), o = Ke(n, 2), a = o[0], u = o[1], i = Rn(null), l = Qt(pe), s = C.isClient() ? window.document : void 0, c = e.document, v = c === void 0 ? s : c, y = e.manual, d = y === void 0 ? !1 : y, S = e.name, E = S === void 0 ? "style_".concat(++pr) : S, O = e.id, m = O === void 0 ? void 0 : O, h = e.media, b = h === void 0 ? void 0 : h, R = function(k) {
    var B = k.querySelector('style[data-primereact-style-id="'.concat(E, '"]'));
    if (B)
      return B;
    if (m !== void 0) {
      var Z = v.getElementById(m);
      if (Z)
        return Z;
    }
    return v.createElement("style");
  }, L = function(k) {
    a && t !== k && (i.current.textContent = k);
  }, M = function() {
    if (!(!v || a)) {
      var k = (l == null ? void 0 : l.styleContainer) || v.head;
      i.current = R(k), i.current.isConnected || (i.current.type = "text/css", m && (i.current.id = m), b && (i.current.media = b), C.addNonce(i.current, l && l.nonce || fe.nonce), k.appendChild(i.current), E && i.current.setAttribute("data-primereact-style-id", E)), i.current.textContent = t, u(!0);
    }
  }, H = function() {
    !v || !i.current || (C.removeInlineStyle(i.current), u(!1));
  };
  return en(function() {
    d || M();
  }, [d]), {
    id: m,
    name: E,
    update: L,
    unload: H,
    load: M,
    isLoaded: a
  };
}, ye = function(t, e) {
  var n = g.useRef(!1);
  return g.useEffect(function() {
    if (!n.current) {
      n.current = !0;
      return;
    }
    return t && t();
  }, e);
};
function ft(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function vr(r) {
  if (Array.isArray(r)) return ft(r);
}
function gr(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function yr(r, t) {
  if (r) {
    if (typeof r == "string") return ft(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ft(r, t) : void 0;
  }
}
function mr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(r) {
  return vr(r) || gr(r) || yr(r) || mr();
}
function Ae(r) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ae(r);
}
function br(r, t) {
  if (Ae(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function hr(r) {
  var t = br(r, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function dt(r, t, e) {
  return (t = hr(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function Vt(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function V(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vt(Object(e), !0).forEach(function(n) {
      dt(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Vt(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
var Er = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`, wr = `
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-button-group-single .p-button:first-of-type {
    border-top-right-radius: var(--border-radius) !important;
    border-bottom-right-radius: var(--border-radius) !important;
}

.p-button-group-single .p-button:last-of-type {
    border-top-left-radius: var(--border-radius) !important;
    border-bottom-left-radius: var(--border-radius) !important;
}
`, Sr = `
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`, Or = `
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, Pr = `
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(wr, `
    `).concat(Sr, `
    `).concat(Or, `
}
`), W = {
  cProps: void 0,
  cParams: void 0,
  cName: void 0,
  defaultProps: {
    pt: void 0,
    ptOptions: void 0,
    unstyled: !1
  },
  context: {},
  globalCSS: void 0,
  classes: {},
  styles: "",
  extend: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.css, n = V(V({}, t.defaultProps), W.defaultProps), o = {}, a = function(c) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return W.context = v, W.cProps = c, T.getMergedProps(c, n);
    }, u = function(c) {
      return T.getDiffProps(c, n);
    }, i = function() {
      var c, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      v.hasOwnProperty("pt") && v.pt !== void 0 && (v = v.pt);
      var E = y, O = /./g.test(E) && !!d[E.split(".")[0]], m = O ? T.toFlatCase(E.split(".")[1]) : T.toFlatCase(E), h = d.hostName && T.toFlatCase(d.hostName), b = h || d.props && d.props.__TYPE && T.toFlatCase(d.props.__TYPE) || "", R = m === "transition", L = "data-pc-", M = function($) {
        return $ != null && $.props ? $.hostName ? $.props.__TYPE === $.hostName ? $.props : M($.parent) : $.parent : void 0;
      }, H = function($) {
        var le, p;
        return ((le = d.props) === null || le === void 0 ? void 0 : le[$]) || ((p = M(d)) === null || p === void 0 ? void 0 : p[$]);
      };
      W.cParams = d, W.cName = b;
      var D = H("ptOptions") || W.context.ptOptions || {}, k = D.mergeSections, B = k === void 0 ? !0 : k, Z = D.mergeProps, re = Z === void 0 ? !1 : Z, N = function() {
        var $ = ce.apply(void 0, arguments);
        return Array.isArray($) ? {
          className: G.apply(void 0, Yt($))
        } : T.isString($) ? {
          className: $
        } : $ != null && $.hasOwnProperty("className") && Array.isArray($.className) ? {
          className: G.apply(void 0, Yt($.className))
        } : $;
      }, ne = S ? O ? un(N, E, d) : ln(N, E, d) : void 0, I = O ? void 0 : et(Qe(v, b), N, E, d), J = !R && V(V({}, m === "root" && dt({}, "".concat(L, "name"), d.props && d.props.__parentMetadata ? T.toFlatCase(d.props.__TYPE) : b)), {}, dt({}, "".concat(L, "section"), m));
      return B || !B && I ? re ? ze([ne, I, Object.keys(J).length ? J : {}], {
        classNameMergeFunction: (c = W.context.ptOptions) === null || c === void 0 ? void 0 : c.classNameMergeFunction
      }) : V(V(V({}, ne), I), Object.keys(J).length ? J : {}) : V(V({}, I), Object.keys(J).length ? J : {});
    }, l = function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = c.props, y = c.state, d = function() {
        var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return i((v || {}).pt, b, V(V({}, c), R));
      }, S = function() {
        var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return i(b, R, L, !1);
      }, E = function() {
        return W.context.unstyled || fe.unstyled || v.unstyled;
      }, O = function() {
        var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return E() ? void 0 : ce(e && e.classes, b, V({
          props: v,
          state: y
        }, R));
      }, m = function() {
        var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (L) {
          var M, H = ce(e && e.inlineStyles, b, V({
            props: v,
            state: y
          }, R)), D = ce(o, b, V({
            props: v,
            state: y
          }, R));
          return ze([D, H], {
            classNameMergeFunction: (M = W.context.ptOptions) === null || M === void 0 ? void 0 : M.classNameMergeFunction
          });
        }
      };
      return {
        ptm: d,
        ptmo: S,
        sx: m,
        cx: O,
        isUnstyled: E
      };
    };
    return V(V({
      getProps: a,
      getOtherProps: u,
      setMetaData: l
    }, t), {}, {
      defaultProps: n
    });
  }
}, ce = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = String(T.toFlatCase(e)).split("."), a = o.shift(), u = T.isNotEmpty(t) ? Object.keys(t).find(function(i) {
    return T.toFlatCase(i) === a;
  }) : "";
  return a ? T.isObject(t) ? ce(T.getItemValue(t[u], n), o.join("."), n) : void 0 : T.getItemValue(t, n);
}, Qe = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, o = t == null ? void 0 : t._usept, a = function(i) {
    var l, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = n ? n(i) : i, v = T.toFlatCase(e);
    return (l = s ? v !== W.cName ? c == null ? void 0 : c[v] : void 0 : c == null ? void 0 : c[v]) !== null && l !== void 0 ? l : c;
  };
  return T.isNotEmpty(o) ? {
    _usept: o,
    originalValue: a(t.originalValue),
    value: a(t.value)
  } : a(t, !0);
}, et = function(t, e, n, o) {
  var a = function(E) {
    return e(E, n, o);
  };
  if (t != null && t.hasOwnProperty("_usept")) {
    var u = t._usept || W.context.ptOptions || {}, i = u.mergeSections, l = i === void 0 ? !0 : i, s = u.mergeProps, c = s === void 0 ? !1 : s, v = u.classNameMergeFunction, y = a(t.originalValue), d = a(t.value);
    return y === void 0 && d === void 0 ? void 0 : T.isString(d) ? d : T.isString(y) ? y : l || !l && d ? c ? ze([y, d], {
      classNameMergeFunction: v
    }) : V(V({}, y), d) : d;
  }
  return a(t);
}, xr = function() {
  return Qe(W.context.pt || fe.pt, void 0, function(t) {
    return T.getItemValue(t, W.cParams);
  });
}, Tr = function() {
  return Qe(W.context.pt || fe.pt, void 0, function(t) {
    return ce(t, W.cName, W.cParams) || T.getItemValue(t, W.cParams);
  });
}, un = function(t, e, n) {
  return et(xr(), t, e, n);
}, ln = function(t, e, n) {
  return et(Tr(), t, e, n);
}, ht = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  }, n = arguments.length > 2 ? arguments[2] : void 0, o = n.name, a = n.styled, u = a === void 0 ? !1 : a, i = n.hostName, l = i === void 0 ? "" : i, s = un(ce, "global.css", W.cParams), c = T.toFlatCase(o), v = xe(Er, {
    name: "base",
    manual: !0
  }), y = v.load, d = xe(Pr, {
    name: "common",
    manual: !0
  }), S = d.load, E = xe(s, {
    name: "global",
    manual: !0
  }), O = E.load, m = xe(t, {
    name: o,
    manual: !0
  }), h = m.load, b = function(L) {
    if (!l) {
      var M = et(Qe((W.cProps || {}).pt, c), ce, "hooks.".concat(L)), H = ln(ce, "hooks.".concat(L));
      M == null || M(), H == null || H();
    }
  };
  b("useMountEffect"), Je(function() {
    y(), O(), e() || (S(), u || h());
  }), ye(function() {
    b("useUpdateEffect");
  }), he(function() {
    b("useUnmountEffect");
  });
}, Ye = {
  defaultProps: {
    __TYPE: "IconBase",
    className: null,
    label: null,
    spin: !1
  },
  getProps: function(t) {
    return T.getMergedProps(t, Ye.defaultProps);
  },
  getOtherProps: function(t) {
    return T.getDiffProps(t, Ye.defaultProps);
  },
  getPTI: function(t) {
    var e = T.isEmpty(t.label), n = Ye.getOtherProps(t), o = {
      className: G("p-icon", {
        "p-icon-spin": t.spin
      }, t.className),
      role: e ? void 0 : "img",
      "aria-label": e ? void 0 : t.label,
      "aria-hidden": t.label ? e : void 0
    };
    return T.getMergedProps(n, o);
  }
};
function pt() {
  return pt = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) ({}).hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, pt.apply(null, arguments);
}
var sn = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(function(r, t) {
  var e = Ye.getPTI(r);
  return /* @__PURE__ */ g.createElement("svg", pt({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ g.createElement("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }));
}));
sn.displayName = "SpinnerIcon";
function vt() {
  return vt = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) ({}).hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, vt.apply(null, arguments);
}
function ke(r) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ke(r);
}
function Cr(r, t) {
  if (ke(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (ke(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function Ar(r) {
  var t = Cr(r, "string");
  return ke(t) == "symbol" ? t : t + "";
}
function kr(r, t, e) {
  return (t = Ar(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function _r(r) {
  if (Array.isArray(r)) return r;
}
function Rr(r, t) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var n, o, a, u, i = [], l = !0, s = !1;
    try {
      if (a = (e = e.call(r)).next, t !== 0) for (; !(l = (n = a.call(e)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (c) {
      s = !0, o = c;
    } finally {
      try {
        if (!l && e.return != null && (u = e.return(), Object(u) !== u)) return;
      } finally {
        if (s) throw o;
      }
    }
    return i;
  }
}
function zt(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function Nr(r, t) {
  if (r) {
    if (typeof r == "string") return zt(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? zt(r, t) : void 0;
  }
}
function Ir() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jr(r, t) {
  return _r(r) || Rr(r, t) || Nr(r, t) || Ir();
}
var Lr = `
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`, $r = {
  root: "p-ink"
}, be = W.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles: Lr,
    classes: $r
  },
  getProps: function(t) {
    return T.getMergedProps(t, be.defaultProps);
  },
  getOtherProps: function(t) {
    return T.getDiffProps(t, be.defaultProps);
  }
});
function Kt(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function Dr(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kt(Object(e), !0).forEach(function(n) {
      kr(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Kt(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
var cn = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(function(r, t) {
  var e = g.useState(!1), n = jr(e, 2), o = n[0], a = n[1], u = g.useRef(null), i = g.useRef(null), l = Ze(), s = g.useContext(pe), c = be.getProps(r, s), v = s && s.ripple || fe.ripple, y = {
    props: c
  };
  xe(be.css.styles, {
    name: "ripple",
    manual: !v
  });
  var d = be.setMetaData(Dr({}, y)), S = d.ptm, E = d.cx, O = function() {
    return u.current && u.current.parentElement;
  }, m = function() {
    i.current && i.current.addEventListener("pointerdown", b);
  }, h = function() {
    i.current && i.current.removeEventListener("pointerdown", b);
  }, b = function(k) {
    var B = C.getOffset(i.current), Z = k.pageX - B.left + document.body.scrollTop - C.getWidth(u.current) / 2, re = k.pageY - B.top + document.body.scrollLeft - C.getHeight(u.current) / 2;
    R(Z, re);
  }, R = function(k, B) {
    !u.current || getComputedStyle(u.current, null).display === "none" || (C.removeClass(u.current, "p-ink-active"), M(), u.current.style.top = B + "px", u.current.style.left = k + "px", C.addClass(u.current, "p-ink-active"));
  }, L = function(k) {
    C.removeClass(k.currentTarget, "p-ink-active");
  }, M = function() {
    if (u.current && !C.getHeight(u.current) && !C.getWidth(u.current)) {
      var k = Math.max(C.getOuterWidth(i.current), C.getOuterHeight(i.current));
      u.current.style.height = k + "px", u.current.style.width = k + "px";
    }
  };
  if (g.useImperativeHandle(t, function() {
    return {
      props: c,
      getInk: function() {
        return u.current;
      },
      getTarget: function() {
        return i.current;
      }
    };
  }), Je(function() {
    a(!0);
  }), ye(function() {
    o && u.current && (i.current = O(), M(), m());
  }, [o]), ye(function() {
    u.current && !i.current && (i.current = O(), M(), m());
  }), he(function() {
    u.current && (i.current = null, h());
  }), !v)
    return null;
  var H = l({
    "aria-hidden": !0,
    className: G(E("root"))
  }, be.getOtherProps(c), S("root"));
  return /* @__PURE__ */ g.createElement("span", vt({
    role: "presentation",
    ref: u
  }, H, {
    onAnimationEnd: L
  }));
}));
cn.displayName = "Ripple";
function Fr(r) {
  if (Array.isArray(r)) return r;
}
function Mr(r, t) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var n, o, a, u, i = [], l = !0, s = !1;
    try {
      if (a = (e = e.call(r)).next, t !== 0) for (; !(l = (n = a.call(e)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (c) {
      s = !0, o = c;
    } finally {
      try {
        if (!l && e.return != null && (u = e.return(), Object(u) !== u)) return;
      } finally {
        if (s) throw o;
      }
    }
    return i;
  }
}
function qt(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function Wr(r, t) {
  if (r) {
    if (typeof r == "string") return qt(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? qt(r, t) : void 0;
  }
}
function Hr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Br(r, t) {
  return Fr(r) || Mr(r, t) || Wr(r, t) || Hr();
}
var gt = {
  defaultProps: {
    __TYPE: "Portal",
    element: null,
    appendTo: null,
    visible: !1,
    onMounted: null,
    onUnmounted: null,
    children: void 0
  },
  getProps: function(t) {
    return T.getMergedProps(t, gt.defaultProps);
  },
  getOtherProps: function(t) {
    return T.getDiffProps(t, gt.defaultProps);
  }
}, fn = /* @__PURE__ */ g.memo(function(r) {
  var t = gt.getProps(r), e = g.useContext(pe), n = g.useState(t.visible && C.isClient()), o = Br(n, 2), a = o[0], u = o[1];
  Je(function() {
    C.isClient() && !a && (u(!0), t.onMounted && t.onMounted());
  }), ye(function() {
    t.onMounted && t.onMounted();
  }, [a]), he(function() {
    t.onUnmounted && t.onUnmounted();
  });
  var i = t.element || t.children;
  if (i && a) {
    var l = t.appendTo || e && e.appendTo || fe.appendTo;
    return T.isFunction(l) && (l = l()), l || (l = document.body), l === "self" ? i : /* @__PURE__ */ Nn.createPortal(i, l);
  }
  return null;
});
fn.displayName = "Portal";
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) ({}).hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, Xe.apply(null, arguments);
}
function _e(r) {
  "@babel/helpers - typeof";
  return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _e(r);
}
function Ur(r, t) {
  if (_e(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (_e(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function Yr(r) {
  var t = Ur(r, "string");
  return _e(t) == "symbol" ? t : t + "";
}
function dn(r, t, e) {
  return (t = Yr(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function yt(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function Vr(r) {
  if (Array.isArray(r)) return yt(r);
}
function zr(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function pn(r, t) {
  if (r) {
    if (typeof r == "string") return yt(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? yt(r, t) : void 0;
  }
}
function Kr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qr(r) {
  return Vr(r) || zr(r) || pn(r) || Kr();
}
function Xr(r) {
  if (Array.isArray(r)) return r;
}
function Gr(r, t) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var n, o, a, u, i = [], l = !0, s = !1;
    try {
      if (a = (e = e.call(r)).next, t !== 0) for (; !(l = (n = a.call(e)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (c) {
      s = !0, o = c;
    } finally {
      try {
        if (!l && e.return != null && (u = e.return(), Object(u) !== u)) return;
      } finally {
        if (s) throw o;
      }
    }
    return i;
  }
}
function Zr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function me(r, t) {
  return Xr(r) || Gr(r, t) || pn(r, t) || Zr();
}
var Jr = {
  root: function(t) {
    var e = t.positionState, n = t.classNameState;
    return G("p-tooltip p-component", dn({}, "p-tooltip-".concat(e), !0), n);
  },
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
}, Qr = {
  arrow: function(t) {
    var e = t.context;
    return {
      top: e.bottom ? "0" : e.right || e.left || !e.right && !e.left && !e.top && !e.bottom ? "50%" : null,
      bottom: e.top ? "0" : null,
      left: e.right || !e.right && !e.left && !e.top && !e.bottom ? "0" : e.top || e.bottom ? "50%" : null,
      right: e.left ? "0" : null
    };
  }
}, eo = `
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`, We = W.extend({
  defaultProps: {
    __TYPE: "Tooltip",
    appendTo: null,
    at: null,
    autoHide: !0,
    autoZIndex: !0,
    baseZIndex: 0,
    className: null,
    closeOnEscape: !1,
    content: null,
    disabled: !1,
    event: null,
    hideDelay: 0,
    hideEvent: "mouseleave",
    id: null,
    mouseTrack: !1,
    mouseTrackLeft: 5,
    mouseTrackTop: 5,
    my: null,
    onBeforeHide: null,
    onBeforeShow: null,
    onHide: null,
    onShow: null,
    position: "right",
    showDelay: 0,
    showEvent: "mouseenter",
    showOnDisabled: !1,
    style: null,
    target: null,
    updateDelay: 0,
    children: void 0
  },
  css: {
    classes: Jr,
    styles: eo,
    inlineStyles: Qr
  }
});
function Xt(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function to(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xt(Object(e), !0).forEach(function(n) {
      dn(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Xt(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
var vn = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(function(r, t) {
  var e = Ze(), n = g.useContext(pe), o = We.getProps(r, n), a = g.useState(!1), u = me(a, 2), i = u[0], l = u[1], s = g.useState(o.position || "right"), c = me(s, 2), v = c[0], y = c[1], d = g.useState(""), S = me(d, 2), E = S[0], O = S[1], m = g.useState(!1), h = me(m, 2), b = h[0], R = h[1], L = i && o.closeOnEscape, M = ar("tooltip", L), H = {
    props: o,
    state: {
      visible: i,
      position: v,
      className: E
    },
    context: {
      right: v === "right",
      left: v === "left",
      top: v === "top",
      bottom: v === "bottom"
    }
  }, D = We.setMetaData(H), k = D.ptm, B = D.cx, Z = D.sx, re = D.isUnstyled;
  ht(We.css.styles, re, {
    name: "tooltip"
  }), cr({
    callback: function() {
      ie();
    },
    when: L,
    priority: [sr.TOOLTIP, M]
  });
  var N = g.useRef(null), ne = g.useRef(null), I = g.useRef(null), J = g.useRef(null), oe = g.useRef(!0), $ = g.useRef({}), le = g.useRef(null), p = dr({
    listener: function(f) {
      !C.isTouchDevice() && ie(f);
    }
  }), P = me(p, 2), F = P[0], U = P[1], ae = fr({
    target: I.current,
    listener: function(f) {
      ie(f);
    },
    when: i
  }), ee = me(ae, 2), Ee = ee[0], we = ee[1], Y = function(f) {
    return !(o.content || K(f, "tooltip"));
  }, de = function(f) {
    return !(o.content || K(f, "tooltip") || o.children);
  }, ve = function(f) {
    return K(f, "mousetrack") || o.mouseTrack;
  }, Ne = function(f) {
    return K(f, "disabled") === "true" || wt(f, "disabled") || o.disabled;
  }, Et = function(f) {
    return K(f, "showondisabled") || o.showOnDisabled;
  }, Ie = function() {
    return K(I.current, "autohide") || o.autoHide;
  }, K = function(f, w) {
    return wt(f, "data-pr-".concat(w)) ? f.getAttribute("data-pr-".concat(w)) : null;
  }, wt = function(f, w) {
    return f && f.hasAttribute(w);
  }, St = function(f) {
    var w = [K(f, "showevent") || o.showEvent], j = [K(f, "hideevent") || o.hideEvent];
    if (ve(f))
      w = ["mousemove"], j = ["mouseleave"];
    else {
      var A = K(f, "event") || o.event;
      A === "focus" && (w = ["focus"], j = ["blur"]), A === "both" && (w = ["focus", "mouseenter"], j = b ? ["blur"] : ["mouseleave", "blur"]);
    }
    return {
      showEvents: w,
      hideEvents: j
    };
  }, Ot = function(f) {
    return K(f, "position") || v;
  }, mn = function(f) {
    var w = K(f, "mousetracktop") || o.mouseTrackTop, j = K(f, "mousetrackleft") || o.mouseTrackLeft;
    return {
      top: w,
      left: j
    };
  }, Pt = function(f, w) {
    if (ne.current) {
      var j = K(f, "tooltip") || o.content;
      j ? (ne.current.innerHTML = "", ne.current.appendChild(document.createTextNode(j)), w()) : o.children && w();
    }
  }, xt = function(f) {
    Pt(I.current, function() {
      var w = le.current, j = w.pageX, A = w.pageY;
      o.autoZIndex && !Pe.get(N.current) && Pe.set("tooltip", N.current, n && n.autoZIndex || fe.autoZIndex, o.baseZIndex || n && n.zIndex.tooltip || fe.zIndex.tooltip), N.current.style.left = "", N.current.style.top = "", Ie() && (N.current.style.pointerEvents = "none");
      var _ = ve(I.current) || f === "mouse";
      (_ && !J.current || _) && (J.current = {
        width: C.getOuterWidth(N.current),
        height: C.getOuterHeight(N.current)
      }), Tt(I.current, {
        x: j,
        y: A
      }, f);
    });
  }, je = function(f) {
    f.type && f.type === "focus" && R(!0), I.current = f.currentTarget;
    var w = Ne(I.current), j = de(Et(I.current) && w ? I.current.firstChild : I.current);
    if (!(j || w))
      if (le.current = f, i)
        Le("updateDelay", xt);
      else {
        var A = $e(o.onBeforeShow, {
          originalEvent: f,
          target: I.current
        });
        A && Le("showDelay", function() {
          l(!0), $e(o.onShow, {
            originalEvent: f,
            target: I.current
          });
        });
      }
  }, ie = function(f) {
    if (f && f.type === "blur" && R(!1), At(), i) {
      var w = $e(o.onBeforeHide, {
        originalEvent: f,
        target: I.current
      });
      w && Le("hideDelay", function() {
        !Ie() && oe.current === !1 || (Pe.clear(N.current), C.removeClass(N.current, "p-tooltip-active"), l(!1), $e(o.onHide, {
          originalEvent: f,
          target: I.current
        }));
      });
    } else !o.onBeforeHide && !Ct("hideDelay") && l(!1);
  }, Tt = function(f, w, j) {
    var A = 0, _ = 0, q = j || v;
    if ((ve(f) || q == "mouse") && w) {
      var ue = {
        width: C.getOuterWidth(N.current),
        height: C.getOuterHeight(N.current)
      };
      A = w.x, _ = w.y;
      var Rt = mn(f), De = Rt.top, Fe = Rt.left;
      switch (q) {
        case "left":
          A = A - (ue.width + Fe), _ = _ - (ue.height / 2 - De);
          break;
        case "right":
        case "mouse":
          A = A + Fe, _ = _ - (ue.height / 2 - De);
          break;
        case "top":
          A = A - (ue.width / 2 - Fe), _ = _ - (ue.height + De);
          break;
        case "bottom":
          A = A - (ue.width / 2 - Fe), _ = _ + De;
          break;
      }
      A <= 0 || J.current.width > ue.width ? (N.current.style.left = "0px", N.current.style.right = window.innerWidth - ue.width - A + "px") : (N.current.style.right = "", N.current.style.left = A + "px"), N.current.style.top = _ + "px", C.addClass(N.current, "p-tooltip-active");
    } else {
      var rt = C.findCollisionPosition(q), Tn = K(f, "my") || o.my || rt.my, Cn = K(f, "at") || o.at || rt.at;
      N.current.style.padding = "0px", C.flipfitCollision(N.current, f, Tn, Cn, function(ot) {
        var Nt = ot.at, at = Nt.x, An = Nt.y, kn = ot.my.x, It = o.at ? at !== "center" && at !== kn ? at : An : ot.at["".concat(rt.axis)];
        N.current.style.padding = "", y(It), bn(It), C.addClass(N.current, "p-tooltip-active");
      });
    }
  }, bn = function(f) {
    if (N.current) {
      var w = getComputedStyle(N.current);
      f === "left" ? N.current.style.left = parseFloat(w.left) - parseFloat(w.paddingLeft) * 2 + "px" : f === "top" && (N.current.style.top = parseFloat(w.top) - parseFloat(w.paddingTop) * 2 + "px");
    }
  }, hn = function() {
    Ie() || (oe.current = !1);
  }, En = function(f) {
    Ie() || (oe.current = !0, ie(f));
  }, wn = function(f) {
    if (f) {
      var w = St(f), j = w.showEvents, A = w.hideEvents, _ = kt(f);
      j.forEach(function(q) {
        return _ == null ? void 0 : _.addEventListener(q, je);
      }), A.forEach(function(q) {
        return _ == null ? void 0 : _.addEventListener(q, ie);
      });
    }
  }, Sn = function(f) {
    if (f) {
      var w = St(f), j = w.showEvents, A = w.hideEvents, _ = kt(f);
      j.forEach(function(q) {
        return _ == null ? void 0 : _.removeEventListener(q, je);
      }), A.forEach(function(q) {
        return _ == null ? void 0 : _.removeEventListener(q, ie);
      });
    }
  }, Ct = function(f) {
    return K(I.current, f.toLowerCase()) || o[f];
  }, Le = function(f, w) {
    At();
    var j = Ct(f);
    j ? $.current["".concat(f)] = setTimeout(function() {
      return w();
    }, j) : w();
  }, $e = function(f) {
    if (f) {
      for (var w = arguments.length, j = new Array(w > 1 ? w - 1 : 0), A = 1; A < w; A++)
        j[A - 1] = arguments[A];
      var _ = f.apply(void 0, j);
      return _ === void 0 && (_ = !0), _;
    }
    return !0;
  }, At = function() {
    Object.values($.current).forEach(function(f) {
      return clearTimeout(f);
    });
  }, kt = function(f) {
    if (f) {
      if (Et(f)) {
        if (!f.hasWrapper) {
          var w = document.createElement("div"), j = f.nodeName === "INPUT";
          return j ? C.addMultipleClasses(w, "p-tooltip-target-wrapper p-inputwrapper") : C.addClass(w, "p-tooltip-target-wrapper"), f.parentNode.insertBefore(w, f), w.appendChild(f), f.hasWrapper = !0, w;
        }
        return f.parentElement;
      } else if (f.hasWrapper) {
        var A;
        (A = f.parentElement).replaceWith.apply(A, qr(f.parentElement.childNodes)), delete f.hasWrapper;
      }
      return f;
    }
    return null;
  }, On = function(f) {
    nt(f), tt(f);
  }, tt = function(f) {
    _t(f || o.target, wn);
  }, nt = function(f) {
    _t(f || o.target, Sn);
  }, _t = function(f, w) {
    if (f = T.getRefElement(f), f)
      if (C.isElement(f))
        w(f);
      else {
        var j = function(_) {
          var q = C.find(document, _);
          q.forEach(function(ue) {
            w(ue);
          });
        };
        f instanceof Array ? f.forEach(function(A) {
          j(A);
        }) : j(f);
      }
  };
  Je(function() {
    i && I.current && Ne(I.current) && ie();
  }), ye(function() {
    return tt(), function() {
      nt();
    };
  }, [je, ie, o.target]), ye(function() {
    if (i) {
      var x = Ot(I.current), f = K(I.current, "classname");
      y(x), O(f), xt(x), F(), Ee();
    } else
      y(o.position || "right"), O(""), I.current = null, J.current = null, oe.current = !0;
    return function() {
      U(), we();
    };
  }, [i]), ye(function() {
    var x = Ot(I.current);
    i && x !== "mouse" && Le("updateDelay", function() {
      Pt(I.current, function() {
        Tt(I.current);
      });
    });
  }, [o.content]), he(function() {
    ie(), Pe.clear(N.current);
  }), g.useImperativeHandle(t, function() {
    return {
      props: o,
      updateTargetEvents: On,
      loadTargetEvents: tt,
      unloadTargetEvents: nt,
      show: je,
      hide: ie,
      getElement: function() {
        return N.current;
      },
      getTarget: function() {
        return I.current;
      }
    };
  });
  var Pn = function() {
    var f = Y(I.current), w = e({
      id: o.id,
      className: G(o.className, B("root", {
        positionState: v,
        classNameState: E
      })),
      style: o.style,
      role: "tooltip",
      "aria-hidden": i,
      onMouseEnter: function(q) {
        return hn();
      },
      onMouseLeave: function(q) {
        return En(q);
      }
    }, We.getOtherProps(o), k("root")), j = e({
      className: B("arrow"),
      style: Z("arrow", to({}, H))
    }, k("arrow")), A = e({
      className: B("text")
    }, k("text"));
    return /* @__PURE__ */ g.createElement("div", Xe({
      ref: N
    }, w), /* @__PURE__ */ g.createElement("div", j), /* @__PURE__ */ g.createElement("div", Xe({
      ref: ne
    }, A), f && o.children));
  };
  if (i) {
    var xn = Pn();
    return /* @__PURE__ */ g.createElement(fn, {
      element: xn,
      appendTo: o.appendTo,
      visible: !0
    });
  }
  return null;
}));
vn.displayName = "Tooltip";
function Te() {
  return Te = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) ({}).hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, Te.apply(null, arguments);
}
function Re(r) {
  "@babel/helpers - typeof";
  return Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Re(r);
}
function no(r, t) {
  if (Re(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (Re(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function ro(r) {
  var t = no(r, "string");
  return Re(t) == "symbol" ? t : t + "";
}
function se(r, t, e) {
  return (t = ro(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
var oo = {
  root: function(t) {
    var e = t.props;
    return G("p-badge p-component", se({
      "p-badge-no-gutter": T.isNotEmpty(e.value) && String(e.value).length === 1,
      "p-badge-dot": T.isEmpty(e.value),
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge"
    }, "p-badge-".concat(e.severity), e.severity !== null));
  }
}, ao = `
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`, He = W.extend({
  defaultProps: {
    __TYPE: "Badge",
    __parentMetadata: null,
    value: null,
    severity: null,
    size: null,
    style: null,
    className: null,
    children: void 0
  },
  css: {
    classes: oo,
    styles: ao
  }
});
function Gt(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function io(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gt(Object(e), !0).forEach(function(n) {
      se(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Gt(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
var gn = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(function(r, t) {
  var e = Ze(), n = g.useContext(pe), o = He.getProps(r, n), a = He.setMetaData(io({
    props: o
  }, o.__parentMetadata)), u = a.ptm, i = a.cx, l = a.isUnstyled;
  ht(He.css.styles, l, {
    name: "badge"
  });
  var s = g.useRef(null);
  g.useImperativeHandle(t, function() {
    return {
      props: o,
      getElement: function() {
        return s.current;
      }
    };
  });
  var c = e({
    ref: s,
    style: o.style,
    className: G(o.className, i("root"))
  }, He.getOtherProps(o), u("root"));
  return /* @__PURE__ */ g.createElement("span", c, o.value);
}));
gn.displayName = "Badge";
var uo = {
  icon: function(t) {
    var e = t.props;
    return G("p-button-icon p-c", se({}, "p-button-icon-".concat(e.iconPos), e.label));
  },
  loadingIcon: function(t) {
    var e = t.props, n = t.className;
    return G(n, {
      "p-button-loading-icon": e.loading
    });
  },
  label: "p-button-label p-c",
  root: function(t) {
    var e = t.props, n = t.size, o = t.disabled;
    return G("p-button p-component", se(se(se(se({
      "p-button-icon-only": (e.icon || e.loading) && !e.label && !e.children,
      "p-button-vertical": (e.iconPos === "top" || e.iconPos === "bottom") && e.label,
      "p-disabled": o,
      "p-button-loading": e.loading,
      "p-button-outlined": e.outlined,
      "p-button-raised": e.raised,
      "p-button-link": e.link,
      "p-button-text": e.text,
      "p-button-rounded": e.rounded,
      "p-button-loading-label-only": e.loading && !e.icon && e.label
    }, "p-button-loading-".concat(e.iconPos), e.loading && e.label), "p-button-".concat(n), n), "p-button-".concat(e.severity), e.severity), "p-button-plain", e.plain));
  }
}, Be = W.extend({
  defaultProps: {
    __TYPE: "Button",
    __parentMetadata: null,
    badge: null,
    badgeClassName: null,
    className: null,
    children: void 0,
    disabled: !1,
    icon: null,
    iconPos: "left",
    label: null,
    link: !1,
    loading: !1,
    loadingIcon: null,
    outlined: !1,
    plain: !1,
    raised: !1,
    rounded: !1,
    severity: null,
    size: null,
    text: !1,
    tooltip: null,
    tooltipOptions: null,
    visible: !0
  },
  css: {
    classes: uo
  }
});
function Zt(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function ut(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zt(Object(e), !0).forEach(function(n) {
      se(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Zt(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
var yn = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(function(r, t) {
  var e = Ze(), n = g.useContext(pe), o = Be.getProps(r, n), a = o.disabled || o.loading, u = ut(ut({
    props: o
  }, o.__parentMetadata), {}, {
    context: {
      disabled: a
    }
  }), i = Be.setMetaData(u), l = i.ptm, s = i.cx, c = i.isUnstyled;
  ht(Be.css.styles, c, {
    name: "button",
    styled: !0
  });
  var v = g.useRef(t);
  if (g.useEffect(function() {
    T.combinedRefs(v, t);
  }, [v, t]), o.visible === !1)
    return null;
  var y = function() {
    var k = G("p-button-icon p-c", se({}, "p-button-icon-".concat(o.iconPos), o.label)), B = e({
      className: s("icon")
    }, l("icon"));
    k = G(k, {
      "p-button-loading-icon": o.loading
    });
    var Z = e({
      className: s("loadingIcon", {
        className: k
      })
    }, l("loadingIcon")), re = o.loading ? o.loadingIcon || /* @__PURE__ */ g.createElement(sn, Te({}, Z, {
      spin: !0
    })) : o.icon;
    return Xn.getJSXIcon(re, ut({}, B), {
      props: o
    });
  }, d = function() {
    var k = e({
      className: s("label")
    }, l("label"));
    return o.label ? /* @__PURE__ */ g.createElement("span", k, o.label) : !o.children && !o.label && /* @__PURE__ */ g.createElement("span", Te({}, k, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  }, S = function() {
    if (o.badge) {
      var k = e({
        className: G(o.badgeClassName),
        value: o.badge,
        unstyled: o.unstyled,
        __parentMetadata: {
          parent: u
        }
      }, l("badge"));
      return /* @__PURE__ */ g.createElement(gn, k, o.badge);
    }
    return null;
  }, E = !a || o.tooltipOptions && o.tooltipOptions.showOnDisabled, O = T.isNotEmpty(o.tooltip) && E, m = {
    large: "lg",
    small: "sm"
  }, h = m[o.size], b = y(), R = d(), L = S(), M = o.label ? o.label + (o.badge ? " " + o.badge : "") : o["aria-label"], H = e({
    ref: v,
    "aria-label": M,
    "data-pc-autofocus": o.autoFocus,
    className: G(o.className, s("root", {
      size: h,
      disabled: a
    })),
    disabled: a
  }, Be.getOtherProps(o), l("root"));
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("button", H, b, R, o.children, L, /* @__PURE__ */ g.createElement(cn, null)), O && /* @__PURE__ */ g.createElement(vn, Te({
    target: v,
    content: o.tooltip,
    pt: l("tooltip")
  }, o.tooltipOptions)));
}));
yn.displayName = "Button";
const co = (r) => /* @__PURE__ */ $n.jsx(
  yn,
  {
    ...r,
    pt: {
      root: {
        className: "bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      },
      label: { className: "text-sm font-medium" },
      icon: { className: "mr-2 text-base" }
    }
  }
);
export {
  co as MyButton
};
