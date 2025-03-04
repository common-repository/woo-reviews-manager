/**
 * math.js
 * https://github.com/josdejong/mathjs
 *
 * Math.js is an extensive math library for JavaScript and Node.js,
 * It features real and complex numbers, units, matrices, a large set of
 * mathematical functions, and a flexible expression parser.
 *
 * @version 5.2.3
 * @date    2018-10-30
 *
 * @license
 * Copyright (C) 2013-2018 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.math = t() : e.math = t() }(this, function() {
    return function(r) { var n = {};

        function i(e) { if (n[e]) return n[e].exports; var t = n[e] = { i: e, l: !1, exports: {} }; return r[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports } return i.m = r, i.c = n, i.d = function(e, t, r) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, i.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (i.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var n in t) i.d(r, n, function(e) { return t[e] }.bind(null, n)); return r }, i.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "", i(i.s = 154) }([function(e, t, r) { "use strict";
        e.exports = function t(e, r, n) { return e && "function" == typeof e.map ? e.map(function(e) { return t(e, r, n) }) : r(e) } }, function(e, t, r) { "use strict";
        t.name = "matrix", t.factory = function(n, e, t, r) { var i = r("matrix", { "": function() { return o([]) }, string: function(e) { return o([], e) }, "string, string": function(e, t) { return o([], e, t) }, Array: function(e) { return o(e) }, Matrix: function(e) { return o(e, e.storage()) }, "Array | Matrix, string": o, "Array | Matrix, string, string": o }); return i.toTex = { 0: "\\begin{bmatrix}\\end{bmatrix}", 1: "\\left(${args[0]}\\right)", 2: "\\left(${args[0]}\\right)" }, i;

            function o(e, t, r) { return new(n.Matrix.storage(t || "default"))(e, r) } } }, function(e, t, r) { "use strict";
        r.r(t), r.d(t, "size", function() { return l }), r.d(t, "validate", function() { return p }), r.d(t, "validateIndex", function() { return m }), r.d(t, "resize", function() { return h }), r.d(t, "reshape", function() { return d }), r.d(t, "squeeze", function() { return y }), r.d(t, "unsqueeze", function() { return g }), r.d(t, "flatten", function() { return v }), r.d(t, "map", function() { return x }), r.d(t, "forEach", function() { return b }), r.d(t, "filter", function() { return w }), r.d(t, "filterRegExp", function() { return N }), r.d(t, "join", function() { return M }), r.d(t, "identify", function() { return E }), r.d(t, "generalize", function() { return A }); var n = r(3),
            i = r.n(n),
            o = r(9),
            a = r.n(o),
            s = r(8),
            u = r.n(s),
            c = r(54),
            f = r.n(c);

        function l(e) { for (var t = []; Array.isArray(e);) t.push(e.length), e = e[0]; return t }

        function p(e, t) { if (0 === t.length) { if (Array.isArray(e)) throw new u.a(e.length, 0) } else ! function e(t, r, n) { var i, o = t.length; if (o !== r[n]) throw new u.a(o, r[n]); if (n < r.length - 1) { var a = n + 1; for (i = 0; i < o; i++) { var s = t[i]; if (!Array.isArray(s)) throw new u.a(r.length - 1, r.length, "<");
                        e(t[i], r, a) } } else
                    for (i = 0; i < o; i++)
                        if (Array.isArray(t[i])) throw new u.a(r.length + 1, r.length, ">") }(e, t, 0) }

        function m(e, t) { if (!i.a.isNumber(e) || !i.a.isInteger(e)) throw new TypeError("Index must be an integer (value: " + e + ")"); if (e < 0 || "number" == typeof t && t <= e) throw new f.a(e, t) }

        function h(e, t, r) { if (!Array.isArray(e) || !Array.isArray(t)) throw new TypeError("Array expected"); if (0 === t.length) throw new Error("Resizing to scalar is not supported"); return t.forEach(function(e) { if (!i.a.isNumber(e) || !i.a.isInteger(e) || e < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + a.a.format(t) + ")") }),
                function e(t, r, n, i) { var o; var a; var s = t.length; var u = r[n]; var c = Math.min(s, u);
                    t.length = u; if (n < r.length - 1) { var f = n + 1; for (o = 0; o < c; o++) a = t[o], Array.isArray(a) || (a = [a], t[o] = a), e(a, r, f, i); for (o = c; o < u; o++) a = [], t[o] = a, e(a, r, f, i) } else { for (o = 0; o < c; o++)
                            for (; Array.isArray(t[o]);) t[o] = t[o][0]; for (o = c; o < u; o++) t[o] = i } }(e, t, 0, void 0 !== r ? r : 0), e }

        function d(t, r) { var e, n = v(t);

            function i(e) { return e.reduce(function(e, t) { return e * t }) } if (!Array.isArray(t) || !Array.isArray(r)) throw new TypeError("Array expected"); if (0 === r.length) throw new u.a(0, i(l(t)), "!="); for (var o = 1, a = 0; a < r.length; a++) o *= r[a]; if (n.length !== o) throw new u.a(i(r), i(l(t)), "!="); try { e = function(e, t) { for (var r, n = e, i = t.length - 1; 0 < i; i--) { var o = t[i];
                        r = []; for (var a = n.length / o, s = 0; s < a; s++) r.push(n.slice(s * o, (s + 1) * o));
                        n = r } return n }(n, r) } catch (e) { if (e instanceof u.a) throw new u.a(i(r), i(l(t)), "!="); throw e } return e }

        function y(e, t) { for (var r = t || l(e); Array.isArray(e) && 1 === e.length;) e = e[0], r.shift(); for (var n = r.length; 1 === r[n - 1];) n--; return n < r.length && (e = function e(t, r, n) { var i, o; if (n < r) { var a = n + 1; for (i = 0, o = t.length; i < o; i++) t[i] = e(t[i], r, a) } else
                    for (; Array.isArray(t);) t = t[0]; return t }(e, n, 0), r.length = n), e }

        function g(e, t, r, n) { var i = n || l(e); if (r)
                for (var o = 0; o < r; o++) e = [e], i.unshift(1); for (e = function e(t, r, n) { var i, o; if (Array.isArray(t)) { var a = n + 1; for (i = 0, o = t.length; i < o; i++) t[i] = e(t[i], r, a) } else
                        for (var s = n; s < r; s++) t = [t]; return t }(e, t, 0); i.length < t;) i.push(1); return e }

        function v(e) { if (!Array.isArray(e)) return e; var r = []; return e.forEach(function e(t) { Array.isArray(t) ? t.forEach(e) : r.push(t) }), r }

        function x(e, t) { return Array.prototype.map.call(e, t) }

        function b(e, t) { Array.prototype.forEach.call(e, t) }

        function w(e, t) { if (1 !== l(e).length) throw new Error("Only one dimensional matrices supported"); return Array.prototype.filter.call(e, t) }

        function N(e, t) { if (1 !== l(e).length) throw new Error("Only one dimensional matrices supported"); return Array.prototype.filter.call(e, function(e) { return t.test(e) }) }

        function M(e, t) { return Array.prototype.join.call(e, t) }

        function E(e) { if (!Array.isArray(e)) throw new TypeError("Array input expected"); if (0 === e.length) return e; var t = [],
                r = 0;
            t[0] = { value: e[0], identifier: 0 }; for (var n = 1; n < e.length; n++) e[n] === e[n - 1] ? r++ : r = 0, t.push({ value: e[n], identifier: r }); return t }

        function A(e) { if (!Array.isArray(e)) throw new TypeError("Array input expected"); if (0 === e.length) return e; for (var t = [], r = 0; r < e.length; r++) t.push(e[r].value); return t } }, function(e, p, t) { "use strict"; var o = t(5);

        function m(e) { for (var t = [], r = 0; r < e; r++) t.push(0); return t }
        p.isNumber = function(e) { return "number" == typeof e }, p.isInteger = function(e) { return "boolean" == typeof e || !!isFinite(e) && e === Math.round(e) }, p.sign = Math.sign || function(e) { return 0 < e ? 1 : e < 0 ? -1 : 0 }, p.format = function(e, t) { if ("function" == typeof t) return t(e); if (e === 1 / 0) return "Infinity"; if (e === -1 / 0) return "-Infinity"; if (isNaN(e)) return "NaN"; var r, n = "auto"; switch (t && (t.notation && (n = t.notation), p.isNumber(t) ? r = t : t.precision && (r = t.precision)), n) {
                case "fixed":
                    return p.toFixed(e, r);
                case "exponential":
                    return p.toExponential(e, r);
                case "engineering":
                    return p.toEngineering(e, r);
                case "auto":
                    if (!t || !t.exponential || void 0 === t.exponential.lower && void 0 === t.exponential.upper) return p.toPrecision(e, r, t && t).replace(/((\.\d*?)(0+))($|e)/, function() { var e = arguments[2],
                            t = arguments[4]; return "." !== e ? e + t : t }); var i = o.map(t, function(e) { return e }); return (i.exponential = void 0) !== t.exponential.lower && (i.lowerExp = Math.round(Math.log(t.exponential.lower) / Math.LN10)), void 0 !== t.exponential.upper && (i.upperExp = Math.round(Math.log(t.exponential.upper) / Math.LN10)), console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace " + JSON.stringify(t) + " with " + JSON.stringify(i)), p.toPrecision(e, r, i);
                default:
                    throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", or "fixed".') } }, p.splitNumber = function(e) { var t = String(e).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/); if (!t) throw new SyntaxError("Invalid number " + e); var r = t[1],
                n = t[2],
                i = parseFloat(t[4] || "0"),
                o = n.indexOf(".");
            i += -1 !== o ? o - 1 : n.length - 1; var a = n.replace(".", "").replace(/^0*/, function(e) { return i -= e.length, "" }).replace(/0*$/, "").split("").map(function(e) { return parseInt(e) }); return 0 === a.length && (a.push(0), i++), { sign: r, coefficients: a, exponent: i } }, p.toEngineering = function(e, t) { if (isNaN(e) || !isFinite(e)) return String(e); var r = p.roundDigits(p.splitNumber(e), t),
                n = r.exponent,
                i = r.coefficients,
                o = n % 3 == 0 ? n : n < 0 ? n - 3 - n % 3 : n - n % 3; if (p.isNumber(t)) t > i.length && (i = i.concat(m(t - i.length)));
            else { var a = 0 <= n ? n : Math.abs(o);
                i.length - 1 < a && (i = i.concat(m(a - (i.length - 1)))) } for (var s = Math.abs(n - o), u = 1; 0 <= --s;) u++; var c = i.slice(u).join(""),
                f = p.isNumber(t) && c.length || c.match(/[1-9]/) ? "." + c : "",
                l = i.slice(0, u).join("") + f + "e" + (0 <= n ? "+" : "") + o.toString(); return r.sign + l }, p.toFixed = function(e, t) { if (isNaN(e) || !isFinite(e)) return String(e); var r = p.splitNumber(e),
                n = "number" == typeof t ? p.roundDigits(r, r.exponent + 1 + t) : r,
                i = n.coefficients,
                o = n.exponent + 1,
                a = o + (t || 0); return i.length < a && (i = i.concat(m(a - i.length))), o < 0 && (i = m(1 - o).concat(i), o = 1), o < i.length && i.splice(o, 0, 0 === o ? "0." : "."), n.sign + i.join("") }, p.toExponential = function(e, t) { if (isNaN(e) || !isFinite(e)) return String(e); var r = p.splitNumber(e),
                n = t ? p.roundDigits(r, t) : r,
                i = n.coefficients,
                o = n.exponent;
            i.length < t && (i = i.concat(m(t - i.length))); var a = i.shift(); return n.sign + a + (0 < i.length ? "." + i.join("") : "") + "e" + (0 <= o ? "+" : "") + o }, p.toPrecision = function(e, t, r) { if (isNaN(e) || !isFinite(e)) return String(e); var n = r && void 0 !== r.lowerExp ? r.lowerExp : -3,
                i = r && void 0 !== r.upperExp ? r.upperExp : 5,
                o = p.splitNumber(e); if (o.exponent < n || o.exponent >= i) return p.toExponential(e, t); var a = t ? p.roundDigits(o, t) : o,
                s = a.coefficients,
                u = a.exponent;
            s.length < t && (s = s.concat(m(t - s.length))), s = s.concat(m(u - s.length + 1 + (s.length < t ? t - s.length : 0))); var c = 0 < u ? u : 0; return c < (s = m(-u).concat(s)).length - 1 && s.splice(c + 1, 0, "."), a.sign + s.join("") }, p.roundDigits = function(e, t) { for (var r = { sign: e.sign, coefficients: e.coefficients, exponent: e.exponent }, n = r.coefficients; t <= 0;) n.unshift(0), r.exponent++, t++; if (n.length > t && 5 <= n.splice(t, n.length - t)[0]) { var i = t - 1; for (n[i]++; 10 === n[i];) n.pop(), 0 === i && (n.unshift(0), r.exponent++, i++), n[--i]++ } return r }, p.digits = function(e) { return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length }, p.DBL_EPSILON = Number.EPSILON || 2220446049250313e-31, p.nearlyEqual = function(e, t, r) { if (null == r) return e === t; if (e === t) return !0; if (isNaN(e) || isNaN(t)) return !1; if (isFinite(e) && isFinite(t)) { var n = Math.abs(e - t); return n < p.DBL_EPSILON || n <= Math.max(Math.abs(e), Math.abs(t)) * r } return !1 } }, function(e, r, t) { "use strict"; var n = t(173);
        r.symbols = { Alpha: "A", alpha: "\\alpha", Beta: "B", beta: "\\beta", Gamma: "\\Gamma", gamma: "\\gamma", Delta: "\\Delta", delta: "\\delta", Epsilon: "E", epsilon: "\\epsilon", varepsilon: "\\varepsilon", Zeta: "Z", zeta: "\\zeta", Eta: "H", eta: "\\eta", Theta: "\\Theta", theta: "\\theta", vartheta: "\\vartheta", Iota: "I", iota: "\\iota", Kappa: "K", kappa: "\\kappa", varkappa: "\\varkappa", Lambda: "\\Lambda", lambda: "\\lambda", Mu: "M", mu: "\\mu", Nu: "N", nu: "\\nu", Xi: "\\Xi", xi: "\\xi", Omicron: "O", omicron: "o", Pi: "\\Pi", pi: "\\pi", varpi: "\\varpi", Rho: "P", rho: "\\rho", varrho: "\\varrho", Sigma: "\\Sigma", sigma: "\\sigma", varsigma: "\\varsigma", Tau: "T", tau: "\\tau", Upsilon: "\\Upsilon", upsilon: "\\upsilon", Phi: "\\Phi", phi: "\\phi", varphi: "\\varphi", Chi: "X", chi: "\\chi", Psi: "\\Psi", psi: "\\psi", Omega: "\\Omega", omega: "\\omega", true: "\\mathrm{True}", false: "\\mathrm{False}", i: "i", inf: "\\infty", Inf: "\\infty", infinity: "\\infty", Infinity: "\\infty", oo: "\\infty", lim: "\\lim", undefined: "\\mathbf{?}" }, r.operators = { transpose: "^\\top", ctranspose: "^H", factorial: "!", pow: "^", dotPow: ".^\\wedge", unaryPlus: "+", unaryMinus: "-", bitNot: "\\~", not: "\\neg", multiply: "\\cdot", divide: "\\frac", dotMultiply: ".\\cdot", dotDivide: ".:", mod: "\\mod", add: "+", subtract: "-", to: "\\rightarrow", leftShift: "<<", rightArithShift: ">>", rightLogShift: ">>>", equal: "=", unequal: "\\neq", smaller: "<", larger: ">", smallerEq: "\\leq", largerEq: "\\geq", bitAnd: "\\&", bitXor: "\\underline{|}", bitOr: "|", and: "\\wedge", xor: "\\veebar", or: "\\vee" }, r.defaultTemplate = "\\mathrm{${name}}\\left(${args}\\right)"; var i = { deg: "^\\circ" };
        r.escape = function(e) { return n(e, { preserveFormatting: !0 }) }, r.toSymbol = function(e, t) { return (t = void 0 !== t && t) ? i.hasOwnProperty(e) ? i[e] : "\\mathrm{" + r.escape(e) + "}" : r.symbols.hasOwnProperty(e) ? r.symbols[e] : r.escape(e) } }, function(e, o, t) { "use strict";

        function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var i = t(78);
        o.clone = function t(e) { var r = n(e); if ("number" === r || "string" === r || "boolean" === r || null == e) return e; if ("function" == typeof e.clone) return e.clone(); if (Array.isArray(e)) return e.map(function(e) { return t(e) }); if (e instanceof Date) return new Date(e.valueOf()); if (i(e)) return e; if (e instanceof RegExp) throw new TypeError("Cannot clone " + e); return o.map(e, t) }, o.map = function(e, t) { var r = {}; for (var n in e) o.hasOwnProperty(e, n) && (r[n] = t(e[n])); return r }, o.extend = function(e, t) { for (var r in t) o.hasOwnProperty(t, r) && (e[r] = t[r]); return e }, o.deepExtend = function e(t, r) { if (Array.isArray(r)) throw new TypeError("Arrays are not supported by deepExtend"); for (var n in r)
                if (o.hasOwnProperty(r, n))
                    if (r[n] && r[n].constructor === Object) void 0 === t[n] && (t[n] = {}), t[n].constructor === Object ? e(t[n], r[n]) : t[n] = r[n];
                    else { if (Array.isArray(r[n])) throw new TypeError("Arrays are not supported by deepExtend");
                        t[n] = r[n] }
            return t }, o.deepEqual = function(e, t) { var r, n, i; if (Array.isArray(e)) { if (!Array.isArray(t)) return !1; if (e.length !== t.length) return !1; for (n = 0, i = e.length; n < i; n++)
                    if (!o.deepEqual(e[n], t[n])) return !1;
                return !0 } if (e instanceof Object) { if (Array.isArray(t) || !(t instanceof Object)) return !1; for (r in e)
                    if (!o.deepEqual(e[r], t[r])) return !1;
                for (r in t)
                    if (!o.deepEqual(e[r], t[r])) return !1;
                return !0 } return e === t }, o.canDefineProperty = function() { try { if (Object.defineProperty) return Object.defineProperty({}, "x", { get: function() {} }), !0 } catch (e) {} return !1 }, o.lazy = function(e, t, r) { if (o.canDefineProperty()) { var n, i = !0;
                Object.defineProperty(e, t, { get: function() { return i && (n = r(), i = !1), n }, set: function(e) { n = e, i = !1 }, configurable: !0, enumerable: !0 }) } else e[t] = r() }, o.traverse = function(e, t) { var r = e; if (t)
                for (var n = t.split("."), i = 0; i < n.length; i++) { var o = n[i];
                    o in r || (r[o] = {}), r = r[o] }
            return r }, o.hasOwnProperty = function(e, t) { return e && Object.hasOwnProperty.call(e, t) }, o.isFactory = function(e) { return e && "function" == typeof e.factory } }, function(e, t, r) { "use strict"; var p = r(5).clone;
        t.name = "algorithm14", t.factory = function(e, t, r, f) { var l = e.DenseMatrix; return function(e, t, r, n) { var i, o = e._data,
                    a = e._size,
                    s = e._datatype,
                    u = r; "string" == typeof s && (i = s, t = f.convert(t, i), u = f.find(r, [i, i])); var c = 0 < a.length ? function e(t, r, n, i, o, a, s) { var u = []; if (r === n.length - 1)
                        for (var c = 0; c < i; c++) u[c] = s ? t(a, o[c]) : t(o[c], a);
                    else
                        for (var f = 0; f < i; f++) u[f] = e(t, r + 1, n, n[r + 1], o[f], a, s); return u }(u, 0, a, a[0], o, t, n) : []; return new l({ data: c, size: p(a), datatype: i }) } } }, function(e, t, r) { "use strict"; var y = r(8);
        t.name = "algorithm13", t.factory = function(e, t, r, h) { var d = e.DenseMatrix; return function(e, t, r) { var n, i = e._data,
                    o = e._size,
                    a = e._datatype,
                    s = t._data,
                    u = t._size,
                    c = t._datatype,
                    f = []; if (o.length !== u.length) throw new y(o.length, u.length); for (var l = 0; l < o.length; l++) { if (o[l] !== u[l]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + u + ")");
                    f[l] = o[l] } var p = r; "string" == typeof a && a === c && (n = a, p = h.find(r, [n, n])); var m = 0 < f.length ? function e(t, r, n, i, o, a) { var s = []; if (r === n.length - 1)
                        for (var u = 0; u < i; u++) s[u] = t(o[u], a[u]);
                    else
                        for (var c = 0; c < i; c++) s[c] = e(t, r + 1, n, n[r + 1], o[c], a[c]); return s }(p, 0, f, f[0], i, s) : []; return new d({ data: m, size: f, datatype: n }) } } }, function(e, t, r) { "use strict";

        function n(e, t, r) { if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.actual = e, this.expected = t, this.relation = r, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + ")", this.stack = (new Error).stack }(n.prototype = new RangeError).constructor = RangeError, n.prototype.name = "DimensionError", n.prototype.isDimensionError = !0, e.exports = n }, function(e, a, t) { "use strict";

        function o(e) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var s = t(3).format,
            u = t(168).format,
            c = t(78);
        a.isString = function(e) { return "string" == typeof e }, a.endsWith = function(e, t) { var r = e.length - t.length,
                n = e.length; return e.substring(r, n) === t }, a.format = function(e, t) { if ("number" == typeof e) return s(e, t); if (c(e)) return u(e, t); if ((r = e) && "object" === o(r) && "number" == typeof r.s && "number" == typeof r.n && "number" == typeof r.d) return t && "decimal" === t.fraction ? e.toString() : e.s * e.n + "/" + e.d; var r; if (Array.isArray(e)) return function e(t, r) {
                { if (Array.isArray(t)) { for (var n = "[", i = t.length, o = 0; o < i; o++) 0 !== o && (n += ", "), n += e(t[o], r); return n += "]" } return a.format(t, r) } }(e, t); if (a.isString(e)) return '"' + e + '"'; if ("function" == typeof e) return e.syntax ? String(e.syntax) : "function"; if (e && "object" === o(e)) { if ("function" == typeof e.format) return e.format(t); if (e && e.toString() !== {}.toString()) return e.toString(); var n = []; for (var i in e) e.hasOwnProperty(i) && n.push('"' + i + '": ' + a.format(e[i], t)); return "{" + n.join(", ") + "}" } return String(e) }, a.stringify = function(e) { for (var t = String(e), r = "", n = 0; n < t.length;) { var i = t.charAt(n); "\\" === i ? (r += i, n++, "" !== (i = t.charAt(n)) && -1 !== '"\\/bfnrtu'.indexOf(i) || (r += "\\"), r += i) : r += '"' === i ? '\\"' : i, n++ } return '"' + r + '"' }, a.escape = function(e) { var t = String(e); return t = t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") } }, function(e, t, l) { "use strict"; var p = l(5).extend,
            m = l(2);
        t.name = "multiply", t.factory = function(n, e, t, R) { var r = l(4),
                i = t(l(1)),
                U = t(l(17)),
                q = t(l(21)),
                I = t(l(11)),
                o = t(l(20)),
                a = t(l(6)),
                b = n.DenseMatrix,
                D = n.SparseMatrix,
                s = R("multiply", p({ "Array, Array": function(e, t) { u(m.size(e), m.size(t)); var r = s(i(e), i(t)); return n.isMatrix(r) ? r.valueOf() : r }, "Matrix, Matrix": function(e, t) { var r = e.size(),
                            n = t.size(); return u(r, n), 1 === r.length ? 1 === n.length ? function(e, t, r) { if (0 === r) throw new Error("Cannot multiply two empty vectors"); var n, i = e._data,
                                o = e._datatype,
                                a = t._data,
                                s = t._datatype,
                                u = U,
                                c = q;
                            o && s && o === s && "string" == typeof o && (n = o, u = R.find(U, [n, n]), c = R.find(q, [n, n])); for (var f = c(i[0], a[0]), l = 1; l < r; l++) f = u(f, c(i[l], a[l])); return f }(e, t, r[0]) : function(e, t) { if ("dense" === t.storage()) return function(e, t) { var r, n = e._data,
                                    i = e._size,
                                    o = e._datatype,
                                    a = t._data,
                                    s = t._size,
                                    u = t._datatype,
                                    c = i[0],
                                    f = s[1],
                                    l = U,
                                    p = q;
                                o && u && o === u && "string" == typeof o && (r = o, l = R.find(U, [r, r]), p = R.find(q, [r, r])); for (var m = [], h = 0; h < f; h++) { for (var d = p(n[0], a[0][h]), y = 1; y < c; y++) d = l(d, p(n[y], a[y][h]));
                                    m[h] = d } return new b({ data: m, size: [f], datatype: r }) }(e, t); throw new Error("Support for SparseMatrix not implemented") }(e, t) : 1 === n.length ? c(e, t) : f(e, t) }, "Matrix, Array": function(e, t) { return s(e, i(t)) }, "Array, Matrix": function(e, t) { return s(i(e, t.storage()), t) }, "SparseMatrix, any": function(e, t) { return o(e, t, q, !1) }, "DenseMatrix, any": function(e, t) { return a(e, t, q, !1) }, "any, SparseMatrix": function(e, t) { return o(t, e, q, !0) }, "any, DenseMatrix": function(e, t) { return a(t, e, q, !0) }, "Array, any": function(e, t) { return a(i(e), t, q, !1).valueOf() }, "any, Array": function(e, t) { return a(i(t), e, q, !0).valueOf() }, "any, any": q, "any, any, ...any": function(e, t, r) { for (var n = s(e, t), i = 0; i < r.length; i++) n = s(n, r[i]); return n } }, q.signatures));

            function u(e, t) { switch (e.length) {
                    case 1:
                        switch (t.length) {
                            case 1:
                                if (e[0] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length"); break;
                            case 2:
                                if (e[0] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Vector length (" + e[0] + ") must match Matrix rows (" + t[0] + ")"); break;
                            default:
                                throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)") } break;
                    case 2:
                        switch (t.length) {
                            case 1:
                                if (e[1] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + e[1] + ") must match Vector length (" + t[0] + ")"); break;
                            case 2:
                                if (e[1] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + e[1] + ") must match Matrix B rows (" + t[0] + ")"); break;
                            default:
                                throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)") } break;
                    default:
                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + e.length + " dimensions)") } } var c = R("_multiplyMatrixVector", { "DenseMatrix, any": function(e, t) { var r, n = e._data,
                            i = e._size,
                            o = e._datatype,
                            a = t._data,
                            s = t._datatype,
                            u = i[0],
                            c = i[1],
                            f = U,
                            l = q;
                        o && s && o === s && "string" == typeof o && (r = o, f = R.find(U, [r, r]), l = R.find(q, [r, r])); for (var p = [], m = 0; m < u; m++) { for (var h = n[m], d = l(h[0], a[0]), y = 1; y < c; y++) d = f(d, l(h[y], a[y]));
                            p[m] = d } return new b({ data: p, size: [u], datatype: r }) }, "SparseMatrix, any": function(e, t) { var r = e._values,
                            n = e._index,
                            i = e._ptr,
                            o = e._datatype; if (!r) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix"); var a, s = t._data,
                            u = t._datatype,
                            c = e._size[0],
                            f = t._size[0],
                            l = [],
                            p = [],
                            m = [],
                            h = U,
                            d = q,
                            y = I,
                            g = 0;
                        o && u && o === u && "string" == typeof o && (a = o, h = R.find(U, [a, a]), d = R.find(q, [a, a]), y = R.find(I, [a, a]), g = R.convert(0, a)); for (var v = [], x = [], b = m[0] = 0; b < f; b++) { var w = s[b]; if (!y(w, g))
                                for (var N = i[b], M = i[b + 1], E = N; E < M; E++) { var A = n[E];
                                    x[A] ? v[A] = h(v[A], d(w, r[E])) : (x[A] = !0, p.push(A), v[A] = d(w, r[E])) } } for (var S = p.length, O = 0; O < S; O++) { var T = p[O];
                            l[O] = v[T] } return m[1] = p.length, new D({ values: l, index: p, ptr: m, size: [c, 1], datatype: a }) } }),
                f = R("_multiplyMatrixMatrix", { "DenseMatrix, DenseMatrix": function(e, t) { var r, n = e._data,
                            i = e._size,
                            o = e._datatype,
                            a = t._data,
                            s = t._size,
                            u = t._datatype,
                            c = i[0],
                            f = i[1],
                            l = s[1],
                            p = U,
                            m = q;
                        o && u && o === u && "string" == typeof o && (r = o, p = R.find(U, [r, r]), m = R.find(q, [r, r])); for (var h = [], d = 0; d < c; d++) { var y = n[d];
                            h[d] = []; for (var g = 0; g < l; g++) { for (var v = m(y[0], a[0][g]), x = 1; x < f; x++) v = p(v, m(y[x], a[x][g]));
                                h[d][g] = v } } return new b({ data: h, size: [c, l], datatype: r }) }, "DenseMatrix, SparseMatrix": function(e, t) { var r = e._data,
                            n = e._size,
                            i = e._datatype,
                            o = t._values,
                            a = t._index,
                            s = t._ptr,
                            u = t._size,
                            c = t._datatype; if (!o) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix"); var f, l = n[0],
                            p = u[1],
                            m = U,
                            h = q,
                            d = I,
                            y = 0;
                        i && c && i === c && "string" == typeof i && (f = i, m = R.find(U, [f, f]), h = R.find(q, [f, f]), d = R.find(I, [f, f]), y = R.convert(0, f)); for (var g = [], v = [], x = [], b = new D({ values: g, index: v, ptr: x, size: [l, p], datatype: f }), w = 0; w < p; w++) { x[w] = v.length; var N = s[w],
                                M = s[w + 1]; if (N < M)
                                for (var E = 0, A = 0; A < l; A++) { for (var S = A + 1, O = void 0, T = N; T < M; T++) { var _ = a[T];
                                        E !== S ? (O = h(r[A][_], o[T]), E = S) : O = m(O, h(r[A][_], o[T])) }
                                    E !== S || d(O, y) || (v.push(A), g.push(O)) } } return x[p] = v.length, b }, "SparseMatrix, DenseMatrix": function(e, t) { var r = e._values,
                            n = e._index,
                            i = e._ptr,
                            o = e._datatype; if (!r) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix"); var a, s = t._data,
                            u = t._datatype,
                            c = e._size[0],
                            f = t._size[0],
                            l = t._size[1],
                            p = U,
                            m = q,
                            h = I,
                            d = 0;
                        o && u && o === u && "string" == typeof o && (a = o, p = R.find(U, [a, a]), m = R.find(q, [a, a]), h = R.find(I, [a, a]), d = R.convert(0, a)); for (var y = [], g = [], v = [], x = new D({ values: y, index: g, ptr: v, size: [c, l], datatype: a }), b = [], w = [], N = 0; N < l; N++) { v[N] = g.length; for (var M = N + 1, E = 0; E < f; E++) { var A = s[E][N]; if (!h(A, d))
                                    for (var S = i[E], O = i[E + 1], T = S; T < O; T++) { var _ = n[T];
                                        w[_] !== M ? (w[_] = M, g.push(_), b[_] = m(A, r[T])) : b[_] = p(b[_], m(A, r[T])) } } for (var C = v[N], z = g.length, B = C; B < z; B++) { var k = g[B];
                                y[B] = b[k] } } return v[l] = g.length, x }, "SparseMatrix, SparseMatrix": function(e, t) { var r, n = e._values,
                            i = e._index,
                            o = e._ptr,
                            a = e._datatype,
                            s = t._values,
                            u = t._index,
                            c = t._ptr,
                            f = t._datatype,
                            l = e._size[0],
                            p = t._size[1],
                            m = n && s,
                            h = U,
                            d = q;
                        a && f && a === f && "string" == typeof a && (r = a, h = R.find(U, [r, r]), d = R.find(q, [r, r])); for (var y, g, v, x, b, w, N, M, E = m ? [] : void 0, A = [], S = [], O = new D({ values: E, index: A, ptr: S, size: [l, p], datatype: r }), T = m ? [] : void 0, _ = [], C = 0; C < p; C++) { S[C] = A.length; var z = C + 1; for (b = c[C], w = c[C + 1], x = b; x < w; x++)
                                if (M = u[x], m)
                                    for (g = o[M], v = o[M + 1], y = g; y < v; y++) N = i[y], _[N] !== z ? (_[N] = z, A.push(N), T[N] = d(s[x], n[y])) : T[N] = h(T[N], d(s[x], n[y]));
                                else
                                    for (g = o[M], v = o[M + 1], y = g; y < v; y++) N = i[y], _[N] !== z && (_[N] = z, A.push(N));
                            if (m)
                                for (var B = S[C], k = A.length, I = B; I < k; I++) { var P = A[I];
                                    E[I] = T[P] } } return S[p] = A.length, O } }); return s.toTex = { 2: "\\left(${args[0]}".concat(r.operators.multiply, "${args[1]}\\right)") }, s } }, function(e, t, r) { "use strict"; var o = r(3).nearlyEqual,
            a = r(37);
        t.factory = function(e, r, t, n) { var i = n("equalScalar", { "boolean, boolean": function(e, t) { return e === t }, "number, number": function(e, t) { return e === t || o(e, t, r.epsilon) }, "BigNumber, BigNumber": function(e, t) { return e.eq(t) || a(e, t, r.epsilon) }, "Fraction, Fraction": function(e, t) { return e.equals(t) }, "Complex, Complex": function(e, t) { return e.equals(t) }, "Unit, Unit": function(e, t) { if (!e.equalBase(t)) throw new Error("Cannot compare units with different base"); return i(e.value, t.value) } }); return i } }, function(e, t, s) { "use strict";
        t.factory = function(e, t, r, n) { var i = r(s(64)),
                o = r(s(24)),
                a = n("divide", { "number, number": function(e, t) { return e / t }, "Complex, Complex": function(e, t) { return e.div(t) }, "BigNumber, BigNumber": function(e, t) { return e.div(t) }, "Fraction, Fraction": function(e, t) { return e.div(t) }, "Unit, number | Fraction | BigNumber": function(e, t) { var r = e.clone(),
                            n = i(1, o(t)); return r.value = a(null === r.value ? r._normalize(n) : r.value, t), r }, "number | Fraction | BigNumber, Unit": function(e, t) { var r = t.clone();
                        r = r.pow(-1); var n = i(1, o(e)); return r.value = a(e, null === t.value ? t._normalize(n) : t.value), r }, "Unit, Unit": function(e, t) { return e.divide(t) } }); return a } }, function(e, t, r) { "use strict";

        function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var i = r(5).hasOwnProperty;

        function o(e, t) { return !(!e || "object" !== n(e)) && (!!i(u, t) || !(t in Object.prototype) && !(t in Function.prototype)) }

        function a(e, t) { return !(!e || "function" != typeof e[t]) && (!(i(e, t) && Object.getPrototypeOf && t in Object.getPrototypeOf(e)) && (!!i(c, t) || !(t in Object.prototype) && !(t in Function.prototype))) }

        function s(e) { return "object" === n(e) && e && e.constructor === Object } var u = { length: !0, name: !0 },
            c = { toString: !0, valueOf: !0, toLocaleString: !0 };
        t.getSafeProperty = function(e, t) { if (s(e) && o(e, t)) return e[t]; if ("function" == typeof e[t] && a(e, t)) throw new Error('Cannot access method "' + t + '" as a property'); throw new Error('No access to property "' + t + '"') }, t.setSafeProperty = function(e, t, r) { if (s(e) && o(e, t)) return e[t] = r; throw new Error('No access to property "' + t + '"') }, t.isSafeProperty = o, t.validateSafeMethod = function(e, t) { if (!a(e, t)) throw new Error('No access to method "' + t + '"') }, t.isSafeMethod = a, t.isPlainObject = s }, function(e, t, m) { "use strict"; var h = m(5).extend;
        t.name = "add", t.factory = function(e, t, r, n) { var i = r(m(1)),
                o = r(m(17)),
                a = m(4),
                s = r(m(32)),
                u = r(m(82)),
                c = r(m(38)),
                f = r(m(7)),
                l = r(m(6)),
                p = n("add", h({ "DenseMatrix, DenseMatrix": function(e, t) { return f(e, t, o) }, "DenseMatrix, SparseMatrix": function(e, t) { return s(e, t, o, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return s(t, e, o, !0) }, "SparseMatrix, SparseMatrix": function(e, t) { return u(e, t, o) }, "Array, Array": function(e, t) { return p(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return p(i(e), t) }, "Matrix, Array": function(e, t) { return p(e, i(t)) }, "DenseMatrix, any": function(e, t) { return l(e, t, o, !1) }, "SparseMatrix, any": function(e, t) { return c(e, t, o, !1) }, "any, DenseMatrix": function(e, t) { return l(t, e, o, !0) }, "any, SparseMatrix": function(e, t) { return c(t, e, o, !0) }, "Array, any": function(e, t) { return l(i(e), t, o, !1).valueOf() }, "any, Array": function(e, t) { return l(i(t), e, o, !0).valueOf() }, "any, any": o, "any, any, ...any": function(e, t, r) { for (var n = p(e, t), i = 0; i < r.length; i++) n = p(n, r[i]); return n } }, o.signatures)); return p.toTex = { 2: "\\left(${args[0]}".concat(a.operators.add, "${args[1]}\\right)") }, p } }, function(e, t, d) { "use strict"; var i = d(8);

        function y(e, t) { var r = e.size(),
                n = t.size(); if (r.length !== n.length) throw new i(r.length, n.length) }
        t.name = "subtract", t.factory = function(e, t, r, n) { var i = d(4),
                o = r(d(1)),
                a = r(d(17)),
                s = r(d(34)),
                u = r(d(32)),
                c = r(d(18)),
                f = r(d(65)),
                l = r(d(38)),
                p = r(d(7)),
                m = r(d(6)),
                h = n("subtract", { "number, number": function(e, t) { return e - t }, "Complex, Complex": function(e, t) { return e.sub(t) }, "BigNumber, BigNumber": function(e, t) { return e.minus(t) }, "Fraction, Fraction": function(e, t) { return e.sub(t) }, "Unit, Unit": function(e, t) { if (null === e.value) throw new Error("Parameter x contains a unit with undefined value"); if (null === t.value) throw new Error("Parameter y contains a unit with undefined value"); if (!e.equalBase(t)) throw new Error("Units do not match"); var r = e.clone(); return r.value = h(r.value, t.value), r.fixPrefix = !1, r }, "SparseMatrix, SparseMatrix": function(e, t) { return y(e, t), f(e, t, h) }, "SparseMatrix, DenseMatrix": function(e, t) { return y(e, t), c(t, e, h, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return y(e, t), u(e, t, h, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return y(e, t), p(e, t, h) }, "Array, Array": function(e, t) { return h(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return h(o(e), t) }, "Matrix, Array": function(e, t) { return h(e, o(t)) }, "SparseMatrix, any": function(e, t) { return l(e, s(t), a) }, "DenseMatrix, any": function(e, t) { return m(e, t, h) }, "any, SparseMatrix": function(e, t) { return l(t, e, h, !0) }, "any, DenseMatrix": function(e, t) { return m(t, e, h, !0) }, "Array, any": function(e, t) { return m(o(e), t, h, !1).valueOf() }, "any, Array": function(e, t) { return m(o(t), e, h, !0).valueOf() } }); return h.toTex = { 2: "\\left(${args[0]}".concat(i.operators.subtract, "${args[1]}\\right)") }, h } }, function(e, t, r) { "use strict";

        function a(e) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var s = r(107),
            u = r(5).deepEqual,
            c = r(5).hasOwnProperty;
        t.name = "Node", t.path = "expression.node", t.math = !0, t.factory = function(t, e, r, n, i) {
            function o() { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator") } return o.prototype.eval = function(e) { return this.compile().eval(e) }, o.prototype.type = "Node", o.prototype.isNode = !0, o.prototype.comment = "", o.prototype.compile = function() { var r = this._compile(i.expression.mathWithTransform, {}),
                    n = {}; return { eval: function(e) { var t = e || {}; return function(e) { for (var t in e)
                                if (c(e, t) && t in s) throw new Error('Scope contains an illegal symbol, "' + t + '" is a reserved keyword') }(t), r(t, n, null) } } }, o.prototype._compile = function(e, t) { throw new Error("Method _compile should be implemented by type " + this.type) }, o.prototype.forEach = function(e) { throw new Error("Cannot run forEach on a Node interface") }, o.prototype.map = function(e) { throw new Error("Cannot run map on a Node interface") }, o.prototype._ifNode = function(e) { if (!t.isNode(e)) throw new TypeError("Callback function must return a Node"); return e }, o.prototype.traverse = function(e) { e(this, null, null),
                    function n(e, i) { e.forEach(function(e, t, r) { i(e, t, r), n(e, i) }) }(this, e) }, o.prototype.transform = function(e) { return function n(e, i) { return e.map(function(e, t, r) { return n(i(e, t, r), i) }) }(e(this, null, null), e) }, o.prototype.filter = function(n) { var i = []; return this.traverse(function(e, t, r) { n(e, t, r) && i.push(e) }), i }, o.prototype.find = function() { throw new Error("Function Node.find is deprecated. Use Node.filter instead.") }, o.prototype.match = function() { throw new Error("Function Node.match is deprecated. See functions Node.filter, Node.transform, Node.traverse.") }, o.prototype.clone = function() { throw new Error("Cannot clone a Node interface") }, o.prototype.cloneDeep = function() { return this.map(function(e) { return e.cloneDeep() }) }, o.prototype.equals = function(e) { return !!e && u(this, e) }, o.prototype.toString = function(e) { var t; if (e && "object" === a(e)) switch (a(e.handler)) {
                    case "object":
                    case "undefined":
                        break;
                    case "function":
                        t = e.handler(this, e); break;
                    default:
                        throw new TypeError("Object or function expected as callback") }
                return void 0 !== t ? t : this._toString(e) }, o.prototype.toJSON = function() { throw new Error("Cannot serialize object: toJSON not implemented by " + this.type) }, o.prototype.toHTML = function(e) { var t; if (e && "object" === a(e)) switch (a(e.handler)) {
                    case "object":
                    case "undefined":
                        break;
                    case "function":
                        t = e.handler(this, e); break;
                    default:
                        throw new TypeError("Object or function expected as callback") }
                return void 0 !== t ? t : this.toHTML(e) }, o.prototype._toString = function() { throw new Error("_toString not implemented for " + this.type) }, o.prototype.toTex = function(e) { var t; if (e && "object" === a(e)) switch (a(e.handler)) {
                    case "object":
                    case "undefined":
                        break;
                    case "function":
                        t = e.handler(this, e); break;
                    default:
                        throw new TypeError("Object or function expected as callback") }
                return void 0 !== t ? t : this._toTex(e) }, o.prototype._toTex = function(e) { throw new Error("_toTex not implemented for " + this.type) }, o.prototype.getIdentifier = function() { return this.type }, o.prototype.getContent = function() { return this }, o } }, function(e, t, r) { "use strict";
        t.factory = function(e, t, r, n) { var i = n("add", { "number, number": function(e, t) { return e + t }, "Complex, Complex": function(e, t) { return e.add(t) }, "BigNumber, BigNumber": function(e, t) { return e.plus(t) }, "Fraction, Fraction": function(e, t) { return e.add(t) }, "Unit, Unit": function(e, t) { if (null === e.value || void 0 === e.value) throw new Error("Parameter x contains a unit with undefined value"); if (null === t.value || void 0 === t.value) throw new Error("Parameter y contains a unit with undefined value"); if (!e.equalBase(t)) throw new Error("Units do not match"); var r = e.clone(); return r.value = i(r.value, t.value), r.fixPrefix = !1, r } }); return i } }, function(e, t, r) { "use strict"; var C = r(8);
        t.name = "algorithm03", t.factory = function(e, t, r, T) { var _ = e.DenseMatrix; return function(e, t, r, n) { var i = e._data,
                    o = e._size,
                    a = e._datatype,
                    s = t._values,
                    u = t._index,
                    c = t._ptr,
                    f = t._size,
                    l = t._datatype; if (o.length !== f.length) throw new C(o.length, f.length); if (o[0] !== f[0] || o[1] !== f[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + f + ")"); if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"); var p, m = o[0],
                    h = o[1],
                    d = 0,
                    y = r; "string" == typeof a && a === l && (p = a, d = T.convert(0, p), y = T.find(r, [p, p])); for (var g = [], v = 0; v < m; v++) g[v] = []; for (var x = [], b = [], w = 0; w < h; w++) { for (var N = w + 1, M = c[w], E = c[w + 1], A = M; A < E; A++) { var S = u[A];
                        x[S] = n ? y(s[A], i[S][w]) : y(i[S][w], s[A]), b[S] = N } for (var O = 0; O < m; O++) b[O] === N ? g[O][w] = x[O] : g[O][w] = n ? y(d, i[O][w]) : y(i[O][w], d) } return new _({ data: g, size: [m, h], datatype: p }) } } }, function(e, t, r) { "use strict";
        t.name = "algorithm12", t.factory = function(e, t, r, E) { var A = e.DenseMatrix; return function(e, t, r, n) { var i = e._values,
                    o = e._index,
                    a = e._ptr,
                    s = e._size,
                    u = e._datatype; if (!i) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value"); var c, f = s[0],
                    l = s[1],
                    p = r; "string" == typeof u && (c = u, t = E.convert(t, c), p = E.find(r, [c, c])); for (var m = [], h = new A({ data: m, size: [f, l], datatype: c }), d = [], y = [], g = 0; g < l; g++) { for (var v = g + 1, x = a[g], b = a[g + 1], w = x; w < b; w++) { var N = o[w];
                        d[N] = i[w], y[N] = v } for (var M = 0; M < f; M++) 0 === g && (m[M] = []), y[M] === v ? m[M][g] = n ? p(t, d[M]) : p(d[M], t) : m[M][g] = n ? p(t, 0) : p(0, t) } return h } } }, function(e, t, n) { "use strict";
        t.name = "algorithm11", t.factory = function(e, t, r, A) { var S = r(n(11)),
                O = e.SparseMatrix; return function(e, t, r, n) { var i = e._values,
                    o = e._index,
                    a = e._ptr,
                    s = e._size,
                    u = e._datatype; if (!i) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value"); var c, f = s[0],
                    l = s[1],
                    p = S,
                    m = 0,
                    h = r; "string" == typeof u && (c = u, p = A.find(S, [c, c]), m = A.convert(0, c), t = A.convert(t, c), h = A.find(r, [c, c])); for (var d = [], y = [], g = [], v = new O({ values: d, index: y, ptr: g, size: [f, l], datatype: c }), x = 0; x < l; x++) { g[x] = y.length; for (var b = a[x], w = a[x + 1], N = b; N < w; N++) { var M = o[N],
                            E = n ? h(t, i[N]) : h(i[N], t);
                        p(E, m) || (y.push(M), d.push(E)) } } return g[l] = y.length, v } } }, function(e, t, r) { "use strict";
        t.factory = function(e, t, r, n) { var i = n("multiplyScalar", { "number, number": function(e, t) { return e * t }, "Complex, Complex": function(e, t) { return e.mul(t) }, "BigNumber, BigNumber": function(e, t) { return e.times(t) }, "Fraction, Fraction": function(e, t) { return e.mul(t) }, "number | Fraction | BigNumber | Complex, Unit": function(e, t) { var r = t.clone(); return r.value = null === r.value ? r._normalize(e) : i(r.value, e), r }, "Unit, number | Fraction | BigNumber | Complex": function(e, t) { var r = e.clone(); return r.value = null === r.value ? r._normalize(t) : i(r.value, t), r }, "Unit, Unit": function(e, t) { return e.multiply(t) } }); return i } }, function(e, t, s) { "use strict"; var u = s(5).clone,
            f = s(2).validateIndex,
            n = s(13).getSafeProperty,
            o = s(13).setSafeProperty,
            l = s(8);

        function c(e, t) { if (1 !== t.size().length) throw new l(t.size(), 1); var r = t.dimension(0); if ("string" != typeof r) throw new TypeError("String expected as index to retrieve an object property"); return n(e, r) }

        function p(e, t, r) { if (1 !== t.size().length) throw new l(t.size(), 1); var n = t.dimension(0); if ("string" != typeof n) throw new TypeError("String expected as index to retrieve an object property"); var i = u(e); return o(i, n, r), i }
        t.name = "subset", t.factory = function(o, e, t, r) { var i = t(s(1)),
                n = r("subset", { "Array, Index": function(e, t) { var r = i(e).subset(t); return t.isScalar() ? r : r.valueOf() }, "Matrix, Index": function(e, t) { return e.subset(t) }, "Object, Index": c, "string, Index": function(t, e) { if (!o.isIndex(e)) throw new TypeError("Index expected"); if (1 !== e.size().length) throw new l(e.size().length, 1); var r = t.length;
                        f(e.min()[0], r), f(e.max()[0], r); var n = e.dimension(0),
                            i = ""; return n.forEach(function(e) { i += t.charAt(e) }), i }, "Array, Index, any": function(e, t, r) { return i(u(e)).subset(t, r, void 0).valueOf() }, "Array, Index, any, any": function(e, t, r, n) { return i(u(e)).subset(t, r, n).valueOf() }, "Matrix, Index, any": function(e, t, r) { return e.clone().subset(t, r) }, "Matrix, Index, any, any": function(e, t, r, n) { return e.clone().subset(t, r, n) }, "string, Index, string": a, "string, Index, string, string": a, "Object, Index, any": p }); return n.toTex = void 0, n;

            function a(e, t, r, n) { if (!t || !0 !== t.isIndex) throw new TypeError("Index expected"); if (1 !== t.size().length) throw new l(t.size().length, 1); if (void 0 !== n) { if ("string" != typeof n || 1 !== n.length) throw new TypeError("Single character expected as defaultValue") } else n = " "; var i = t.dimension(0); if (i.size()[0] !== r.length) throw new l(i.size()[0], r.length); var o = e.length;
                f(t.min()[0]), f(t.max()[0]); for (var a = [], s = 0; s < o; s++) a[s] = e.charAt(s); if (i.forEach(function(e, t) { a[e] = r.charAt(t[0]) }), a.length > o)
                    for (var u = o - 1, c = a.length; u < c; u++) a[u] || (a[u] = n); return a.join("") } } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "abs", t.factory = function(e, t, r, n) { var i = n("abs", { number: Math.abs, Complex: function(e) { return e.abs() }, BigNumber: function(e) { return e.abs() }, Fraction: function(e) { return e.abs() }, "Array | Matrix": function(e) { return o(e, i, !0) }, Unit: function(e) { return e.abs() } }); return i.toTex = { 1: "\\left|${args[0]}\\right|" }, i } }, function(e, t, r) { "use strict";

        function o(e) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
        t.name = "typeof", t.factory = function(r, e, t, n) { var i = n("_typeof", { any: function(e) { var t = o(e); return "object" === t ? null === e ? "null" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : e instanceof RegExp ? "RegExp" : r.isBigNumber(e) ? "BigNumber" : r.isComplex(e) ? "Complex" : r.isFraction(e) ? "Fraction" : r.isMatrix(e) ? "Matrix" : r.isUnit(e) ? "Unit" : r.isIndex(e) ? "Index" : r.isRange(e) ? "Range" : r.isResultSet(e) ? "ResultSet" : r.isNode(e) ? e.type : r.isChain(e) ? "Chain" : r.isHelp(e) ? "Help" : "Object" : "function" === t ? "Function" : t } }); return i.toTex = void 0, i } }, function(e, t, n) { "use strict"; var C = n(8);
        t.name = "algorithm02", t.factory = function(e, t, r, O) { var T = r(n(11)),
                _ = e.SparseMatrix; return function(e, t, r, n) { var i = e._data,
                    o = e._size,
                    a = e._datatype,
                    s = t._values,
                    u = t._index,
                    c = t._ptr,
                    f = t._size,
                    l = t._datatype; if (o.length !== f.length) throw new C(o.length, f.length); if (o[0] !== f[0] || o[1] !== f[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + f + ")"); if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"); var p, m = o[0],
                    h = o[1],
                    d = T,
                    y = 0,
                    g = r; "string" == typeof a && a === l && (p = a, d = O.find(T, [p, p]), y = O.convert(0, p), g = O.find(r, [p, p])); for (var v = [], x = [], b = [], w = 0; w < h; w++) { b[w] = x.length; for (var N = c[w], M = c[w + 1], E = N; E < M; E++) { var A = u[E],
                            S = n ? g(s[E], i[A][w]) : g(i[A][w], s[E]);
                        d(S, y) || (x.push(A), v.push(S)) } } return b[h] = x.length, new _({ values: v, index: x, ptr: b, size: [m, h], datatype: p }) } } }, function(e, t, a) { "use strict"; var s = a(2);
        t.name = "size", t.factory = function(e, t, r, n) { var i = r(a(1)),
                o = n("size", { Matrix: function(e) { return i(e.size()) }, Array: s.size, string: function(e) { return "Array" === t.matrix ? [e.length] : i([e.length]) }, "number | Complex | BigNumber | Unit | boolean | null": function(e) { return "Array" === t.matrix ? [] : i([]) } }); return o.toTex = void 0, o } }, function(e, t, r) { "use strict"; var S = r(8);
        t.name = "algorithm07", t.factory = function(e, t, r, M) { var E = e.DenseMatrix;

            function A(e, t, r, n, i) { for (var o = e._values, a = e._index, s = e._ptr, u = s[t], c = s[t + 1]; u < c; u++) { var f = a[u];
                    r[f] = i, n[f] = o[u] } } return function(e, t, r) { var n = e._size,
                    i = e._datatype,
                    o = t._size,
                    a = t._datatype; if (n.length !== o.length) throw new S(n.length, o.length); if (n[0] !== o[0] || n[1] !== o[1]) throw new RangeError("Dimension mismatch. Matrix A (" + n + ") must match Matrix B (" + o + ")"); var s, u, c, f = n[0],
                    l = n[1],
                    p = 0,
                    m = r; "string" == typeof i && i === a && (s = i, p = M.convert(0, s), m = M.find(r, [s, s])); var h = []; for (u = 0; u < f; u++) h[u] = []; var d = new E({ data: h, size: [f, l], datatype: s }),
                    y = [],
                    g = [],
                    v = [],
                    x = []; for (c = 0; c < l; c++) { var b = c + 1; for (A(e, c, v, y, b), A(t, c, x, g, b), u = 0; u < f; u++) { var w = v[u] === b ? y[u] : p,
                            N = x[u] === b ? g[u] : p;
                        h[u][c] = m(w, N) } } return d } } }, function(e, t, r) { "use strict"; var n = r(5).clone,
            i = r(3).isInteger;
        t.name = "Index", t.path = "type", t.factory = function(a) {
            function s(e) { if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator");
                this._dimensions = [], this._isScalar = !0; for (var t = 0, r = arguments.length; t < r; t++) { var n = arguments[t]; if (a.isRange(n)) this._dimensions.push(n), this._isScalar = !1;
                    else if (Array.isArray(n) || a.isMatrix(n)) { var i = u(n.valueOf());
                        this._dimensions.push(i); var o = i.size();
                        1 === o.length && 1 === o[0] || (this._isScalar = !1) } else if ("number" == typeof n) this._dimensions.push(u([n]));
                    else { if ("string" != typeof n) throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
                        this._dimensions.push(n) } } }

            function u(e) { for (var t = 0, r = e.length; t < r; t++)
                    if ("number" != typeof e[t] || !i(e[t])) throw new TypeError("Index parameters must be positive integer numbers");
                return new a.ImmutableDenseMatrix(e) } return s.prototype.type = "Index", s.prototype.isIndex = !0, s.prototype.clone = function() { var e = new s; return e._dimensions = n(this._dimensions), e._isScalar = this._isScalar, e }, s.create = function(e) { var t = new s; return s.apply(t, e), t }, s.prototype.size = function() { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) { var n = this._dimensions[t];
                    e[t] = "string" == typeof n ? 1 : n.size()[0] } return e }, s.prototype.max = function() { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) { var n = this._dimensions[t];
                    e[t] = "string" == typeof n ? n : n.max() } return e }, s.prototype.min = function() { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) { var n = this._dimensions[t];
                    e[t] = "string" == typeof n ? n : n.min() } return e }, s.prototype.forEach = function(e) { for (var t = 0, r = this._dimensions.length; t < r; t++) e(this._dimensions[t], t, this) }, s.prototype.dimension = function(e) { return this._dimensions[e] || null }, s.prototype.isObjectProperty = function() { return 1 === this._dimensions.length && "string" == typeof this._dimensions[0] }, s.prototype.getObjectProperty = function() { return this.isObjectProperty() ? this._dimensions[0] : null }, s.prototype.isScalar = function() { return this._isScalar }, s.prototype.valueOf = s.prototype.toArray = function() { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) { var n = this._dimensions[t];
                    e.push("string" == typeof n ? n : n.toArray()) } return e }, s.prototype.toString = function() { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) { var n = this._dimensions[t]; "string" == typeof n ? e.push(JSON.stringify(n)) : e.push(n.toString()) } return "[" + e.join(", ") + "]" }, s.prototype.toJSON = function() { return { mathjs: "Index", dimensions: this._dimensions } }, s.fromJSON = function(e) { return s.create(e.dimensions) }, s } }, function(e, t, n) { "use strict"; var m = n(283);
        t.name = "compareNatural", t.factory = function(s, e, t, r) { var u = t(n(24)),
                c = t(n(52)),
                f = c.signatures["boolean,boolean"],
                l = r("compareNatural", { "any, any": function(e, t) { var r, n, i, o = u(e),
                            a = u(t); if (!("number" !== o && "BigNumber" !== o && "Fraction" !== o || "number" !== a && "BigNumber" !== a && "Fraction" !== a)) return "0" !== (r = c(e, t)).toString() ? 0 < r ? 1 : -1 : m(o, a); if ("Array" === o || "Matrix" === o || "Array" === a || "Matrix" === a) return 0 !== (r = function e(t, r) { return s.isSparseMatrix(t) && s.isSparseMatrix(r) ? p(t.toJSON().values, r.toJSON().values) : s.isSparseMatrix(t) ? e(t.toArray(), r) : s.isSparseMatrix(r) ? e(t, r.toArray()) : s.isDenseMatrix(t) ? e(t.toJSON().data, r) : s.isDenseMatrix(r) ? e(t, r.toJSON().data) : Array.isArray(t) ? Array.isArray(r) ? p(t, r) : e(t, [r]) : e([t], r) }(e, t)) ? r : m(o, a); if (o !== a) return m(o, a); if ("Complex" === o) return i = t, (n = e).re > i.re ? 1 : n.re < i.re ? -1 : n.im > i.im ? 1 : n.im < i.im ? -1 : 0; if ("Unit" === o) return e.equalBase(t) ? l(e.value, t.value) : p(e.formatUnits(), t.formatUnits()); if ("boolean" === o) return f(e, t); if ("string" === o) return m(e, t); if ("Object" === o) return function(e, t) { var r = Object.keys(e),
                                n = Object.keys(t);
                            r.sort(m), n.sort(m); var i = p(r, n); if (0 !== i) return i; for (var o = 0; o < r.length; o++) { var a = l(e[r[o]], t[n[o]]); if (0 !== a) return a } return 0 }(e, t); if ("null" === o) return 0; if ("undefined" === o) return 0; throw new TypeError('Unsupported type of value "' + o + '"') } });

            function p(e, t) { for (var r = 0, n = Math.min(e.length, t.length); r < n; r++) { var i = l(e[r], t[r]); if (0 !== i) return i } return e.length > t.length ? 1 : e.length < t.length ? -1 : 0 } return l.toTex = void 0, l } }, function(e, t, r) { "use strict";
        t.array = r(2), t.boolean = r(178), t.function = r(31), t.number = r(3), t.object = r(5), t.string = r(9), t.emitter = r(98) }, function(e, t, r) { "use strict";

        function a(e) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
        t.memoize = function(i, o) { return function e() { "object" !== a(e.cache) && (e.cache = {}); for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]; var n = o ? o(t) : JSON.stringify(t); return n in e.cache || (e.cache[n] = i.apply(i, t)), e.cache[n] } }, t.maxArgumentCount = function(e) { return Object.keys(e.signatures || {}).reduce(function(e, t) { var r = (t.match(/,/g) || []).length + 1; return Math.max(e, r) }, -1) }, t.callWithRightArgumentCount = function(e, t, r) { return Object.keys(e.signatures || {}).reduce(function(e, t) { var r = (t.match(/,/g) || []).length + 1; return Math.max(e, r) }, -1) } }, function(e, t, r) { "use strict"; var O = r(8);
        t.name = "algorithm01", t.factory = function(e, t, r, A) { var S = e.DenseMatrix; return function(e, t, r, n) { var i = e._data,
                    o = e._size,
                    a = e._datatype,
                    s = t._values,
                    u = t._index,
                    c = t._ptr,
                    f = t._size,
                    l = t._datatype; if (o.length !== f.length) throw new O(o.length, f.length); if (o[0] !== f[0] || o[1] !== f[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + f + ")"); if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"); var p, m, h = o[0],
                    d = o[1],
                    y = "string" == typeof a && a === l ? a : void 0,
                    g = y ? A.find(r, [y, y]) : r,
                    v = []; for (p = 0; p < h; p++) v[p] = []; var x = [],
                    b = []; for (m = 0; m < d; m++) { for (var w = m + 1, N = c[m], M = c[m + 1], E = N; E < M; E++) x[p = u[E]] = n ? g(s[E], i[p][m]) : g(i[p][m], s[E]), b[p] = w; for (p = 0; p < h; p++) b[p] === w ? v[p][m] = x[p] : v[p][m] = i[p][m] } return new S({ data: v, size: [h, d], datatype: y }) } } }, function(e, t, p) { "use strict"; var m = p(3).nearlyEqual,
            h = p(37);
        t.name = "larger", t.factory = function(e, r, t, n) { var i = t(p(1)),
                o = t(p(18)),
                a = t(p(27)),
                s = t(p(19)),
                u = t(p(7)),
                c = t(p(6)),
                f = p(4),
                l = n("larger", { "boolean, boolean": function(e, t) { return t < e }, "number, number": function(e, t) { return t < e && !m(e, t, r.epsilon) }, "BigNumber, BigNumber": function(e, t) { return e.gt(t) && !h(e, t, r.epsilon) }, "Fraction, Fraction": function(e, t) { return 1 === e.compare(t) }, "Complex, Complex": function() { throw new TypeError("No ordering relation is defined for complex numbers") }, "Unit, Unit": function(e, t) { if (!e.equalBase(t)) throw new Error("Cannot compare units with different base"); return l(e.value, t.value) }, "SparseMatrix, SparseMatrix": function(e, t) { return a(e, t, l) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return o(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return u(e, t, l) }, "Array, Array": function(e, t) { return l(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(i(e), t) }, "Matrix, Array": function(e, t) { return l(e, i(t)) }, "SparseMatrix, any": function(e, t) { return s(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return c(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return s(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return c(t, e, l, !0) }, "Array, any": function(e, t) { return c(i(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return c(i(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(f.operators.larger, "${args[1]}\\right)") }, l } }, function(e, t, a) { "use strict"; var s = a(0);
        t.name = "unaryMinus", t.factory = function(e, t, r, n) { var i = a(4),
                o = n("unaryMinus", { number: function(e) { return -e }, Complex: function(e) { return e.neg() }, BigNumber: function(e) { return e.neg() }, Fraction: function(e) { return e.neg() }, Unit: function(e) { var t = e.clone(); return t.value = o(e.value), t }, "Array | Matrix": function(e) { return s(e, o, !0) } }); return o.toTex = { 1: "".concat(i.operators.unaryMinus, "\\left(${args[0]}\\right)") }, o } }, function(e, t, r) { "use strict"; var o = r(0),
            a = r(3);
        t.name = "isInteger", t.factory = function(e, t, r, n) { var i = n("isInteger", { number: a.isInteger, BigNumber: function(e) { return e.isInt() }, Fraction: function(e) { return 1 === e.d && isFinite(e.n) }, "Array | Matrix": function(e) { return o(e, i) } }); return i } }, function(e, t, o) { "use strict";
        t.factory = function(e, t, r, n) { var i = r(o(24)); return function(e, t, r) { var n; return -1 !== String(e).indexOf("Unexpected type") ? (n = 2 < arguments.length ? " (type: " + i(r) + ", value: " + JSON.stringify(r) + ")" : " (type: " + e.data.actual + ")", new TypeError("Cannot calculate " + t + ", unexpected type of argument" + n)) : -1 !== String(e).indexOf("complex numbers") ? (n = 2 < arguments.length ? " (type: " + i(r) + ", value: " + JSON.stringify(r) + ")" : "", new TypeError("Cannot calculate " + t + ", no ordering relation is defined for complex numbers" + n)) : e } } }, function(e, t, r) { "use strict";
        e.exports = function(e, t, r) { if (null == r) return e.eq(t); if (e.eq(t)) return !0; if (e.isNaN() || t.isNaN()) return !1; if (e.isFinite() && t.isFinite()) { var n = e.minus(t).abs(); if (n.isZero()) return !0; var i = e.constructor.max(e.abs(), t.abs()); return n.lte(i.times(r)) } return !1 } }, function(e, t, r) { "use strict";
        t.name = "algorithm10", t.factory = function(e, t, r, E) { var A = e.DenseMatrix; return function(e, t, r, n) { var i = e._values,
                    o = e._index,
                    a = e._ptr,
                    s = e._size,
                    u = e._datatype; if (!i) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value"); var c, f = s[0],
                    l = s[1],
                    p = r; "string" == typeof u && (c = u, t = E.convert(t, c), p = E.find(r, [c, c])); for (var m = [], h = new A({ data: m, size: [f, l], datatype: c }), d = [], y = [], g = 0; g < l; g++) { for (var v = g + 1, x = a[g], b = a[g + 1], w = x; w < b; w++) { var N = o[w];
                        d[N] = i[w], y[N] = v } for (var M = 0; M < f; M++) 0 === g && (m[M] = []), y[M] === v ? m[M][g] = n ? p(t, d[M]) : p(d[M], t) : m[M][g] = t } return h } } }, function(e, t, p) { "use strict"; var m = p(3).nearlyEqual,
            h = p(37);
        t.name = "smaller", t.factory = function(e, r, t, n) { var i = t(p(1)),
                o = t(p(18)),
                a = t(p(27)),
                s = t(p(19)),
                u = t(p(7)),
                c = t(p(6)),
                f = p(4),
                l = n("smaller", { "boolean, boolean": function(e, t) { return e < t }, "number, number": function(e, t) { return e < t && !m(e, t, r.epsilon) }, "BigNumber, BigNumber": function(e, t) { return e.lt(t) && !h(e, t, r.epsilon) }, "Fraction, Fraction": function(e, t) { return -1 === e.compare(t) }, "Complex, Complex": function(e, t) { throw new TypeError("No ordering relation is defined for complex numbers") }, "Unit, Unit": function(e, t) { if (!e.equalBase(t)) throw new Error("Cannot compare units with different base"); return l(e.value, t.value) }, "SparseMatrix, SparseMatrix": function(e, t) { return a(e, t, l) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return o(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return u(e, t, l) }, "Array, Array": function(e, t) { return l(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(i(e), t) }, "Matrix, Array": function(e, t) { return l(e, i(t)) }, "SparseMatrix, any": function(e, t) { return s(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return c(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return s(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return c(t, e, l, !0) }, "Array, any": function(e, t) { return c(i(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return c(i(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(f.operators.smaller, "${args[1]}\\right)") }, l } }, function(e, t, h) { "use strict"; var d = h(3).isInteger,
            y = h(2).size;
        t.name = "pow", t.factory = function(i, o, e, t) { var r = h(4),
                a = e(h(48)),
                s = e(h(10)),
                n = e(h(1)),
                u = e(h(80)),
                c = e(h(63)),
                f = t("pow", { "number, number": l, "Complex, Complex": function(e, t) { return e.pow(t) }, "BigNumber, BigNumber": function(e, t) { return t.isInteger() || 0 <= e || o.predictable ? e.pow(t) : new i.Complex(e.toNumber(), 0).pow(t.toNumber(), 0) }, "Fraction, Fraction": function(e, t) { if (1 === t.d) return e.pow(t); if (o.predictable) throw new Error("Function pow does not support non-integer exponents for fractions."); return l(e.valueOf(), t.valueOf()) }, "Array, number": p, "Array, BigNumber": function(e, t) { return p(e, t.toNumber()) }, "Matrix, number": m, "Matrix, BigNumber": function(e, t) { return m(e, t.toNumber()) }, "Unit, number | BigNumber": function(e, t) { return e.pow(t) } });

            function l(e, t) { if (o.predictable && !d(t) && e < 0) try { var r = u(t),
                        n = c(r); if ((t === n || Math.abs((t - n) / t) < 1e-14) && r.d % 2 == 1) return (r.n % 2 == 0 ? 1 : -1) * Math.pow(-e, t) } catch (e) {}
                return e * e < 1 && t === 1 / 0 || 1 < e * e && t === -1 / 0 ? 0 : o.predictable && (e < -1 && t === 1 / 0 || -1 < e && e < 0 && t === -1 / 0) ? NaN : d(t) || 0 <= e || o.predictable ? Math.pow(e, t) : new i.Complex(e, 0).pow(t, 0) }

            function p(e, t) { if (!d(t) || t < 0) throw new TypeError("For A^b, b must be a positive integer (value is " + t + ")"); var r = y(e); if (2 !== r.length) throw new Error("For A^b, A must be 2 dimensional (A has " + r.length + " dimensions)"); if (r[0] !== r[1]) throw new Error("For A^b, A must be square (size is " + r[0] + "x" + r[1] + ")"); for (var n = a(r[0]).valueOf(), i = e; 1 <= t;) 1 == (1 & t) && (n = s(i, n)), t >>= 1, i = s(i, i); return n }

            function m(e, t) { return n(p(e.valueOf(), t)) } return f.toTex = { 2: "\\left(${args[0]}\\right)".concat(r.operators.pow, "{${args[1]}}") }, f } }, function(e, t, o) { "use strict"; var u = o(3).isInteger,
            c = o(2).resize;
        t.name = "zeros", t.factory = function(a, t, e, r) { var s = e(o(1)),
                n = r("zeros", { "": function() { return "Array" === t.matrix ? i([]) : i([], "default") }, "...number | BigNumber | string": function(e) { return "string" != typeof e[e.length - 1] ? "Array" === t.matrix ? i(e) : i(e, "default") : i(e, e.pop()) }, Array: i, Matrix: function(e) { var t = e.storage(); return i(e.valueOf(), t) }, "Array | Matrix, string": function(e, t) { return i(e.valueOf(), t) } }); return n.toTex = void 0, n;

            function i(e, t) { var n, r = (n = !1, e.forEach(function(e, t, r) { a.isBigNumber(e) && (n = !0, r[t] = e.toNumber()) }), n ? new a.BigNumber(0) : 0); if (e.forEach(function(e) { if ("number" != typeof e || !u(e) || e < 0) throw new Error("Parameters in function zeros must be positive integers") }), t) { var i = s(t); return 0 < e.length ? i.resize(e, r) : i } var o = []; return 0 < e.length ? c(o, e, r) : o } } }, function(e, t, ie) { "use strict";

        function oe() { return (oe = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }).apply(this, arguments) } var ae = ie(55),
            se = ie(0);
        t.name = "parse", t.path = "expression", t.factory = function(a, p, e, t) { var m = e(ie(64)),
                i = e(ie(106)),
                h = e(ie(109)),
                s = e(ie(110)),
                o = e(ie(111)),
                u = e(ie(112)),
                d = e(ie(57)),
                c = e(ie(113)),
                f = e(ie(114)),
                y = e(ie(115)),
                l = e(ie(58)),
                g = e(ie(66)),
                v = e(ie(67)),
                n = e(ie(116)),
                x = e(ie(117)),
                b = e(ie(51));

            function w(e, t) { if (1 !== arguments.length && 2 !== arguments.length) throw new ae("parse", arguments.length, 1, 2); var r = t && t.nodes ? t.nodes : {}; if ("string" == typeof e) return R(e, r); if (Array.isArray(e) || e instanceof a.Matrix) return se(e, function(e) { if ("string" != typeof e) throw new TypeError("String expected"); return R(e, r) }); throw new TypeError("String or matrix expected") } var N = { NULL: 0, DELIMITER: 1, NUMBER: 2, SYMBOL: 3, UNKNOWN: 4 },
                M = { ",": !0, "(": !0, ")": !0, "[": !0, "]": !0, "{": !0, "}": !0, '"': !0, "'": !0, ";": !0, "+": !0, "-": !0, "*": !0, ".*": !0, "/": !0, "./": !0, "%": !0, "^": !0, ".^": !0, "~": !0, "!": !0, "&": !0, "|": !0, "^|": !0, "=": !0, ":": !0, "?": !0, "==": !0, "!=": !0, "<": !0, ">": !0, "<=": !0, ">=": !0, "<<": !0, ">>": !0, ">>>": !0 },
                E = { mod: !0, to: !0, in: !0, and: !0, xor: !0, or: !0, not: !0 },
                A = { true: !0, false: !1, null: null, undefined: void 0 },
                S = ["NaN", "Infinity"];

            function O(e, t) { return e.expression.substr(e.index, t) }

            function T(e) { return O(e, 1) }

            function _(e) { e.index++ }

            function C(e) { return e.expression.charAt(e.index - 1) }

            function z(e) { return e.expression.charAt(e.index + 1) }

            function B(e) { for (e.tokenType = N.NULL, e.token = "", e.comment = ""; w.isWhitespace(T(e), e.nestingLevel);) _(e); if ("#" === T(e))
                    for (;
                        "\n" !== T(e) && "" !== T(e);) e.comment += T(e), _(e); if ("" !== T(e)) { if ("\n" === T(e) && !e.nestingLevel) return e.tokenType = N.DELIMITER, e.token = T(e), void _(e); var t = T(e),
                        r = O(e, 2),
                        n = O(e, 3); if (3 === n.length && M[n]) return e.tokenType = N.DELIMITER, e.token = n, _(e), _(e), void _(e); if (2 === r.length && M[r]) return e.tokenType = N.DELIMITER, e.token = r, _(e), void _(e); if (M[t]) return e.tokenType = N.DELIMITER, e.token = t, void _(e); if (w.isDigitDot(t)) { if (e.tokenType = N.NUMBER, "." === T(e)) e.token += T(e), _(e), w.isDigit(T(e)) || (e.tokenType = N.DELIMITER);
                        else { for (; w.isDigit(T(e));) e.token += T(e), _(e);
                            w.isDecimalMark(T(e), z(e)) && (e.token += T(e), _(e)) } for (; w.isDigit(T(e));) e.token += T(e), _(e); if ("E" === T(e) || "e" === T(e))
                            if (w.isDigit(z(e)) || "-" === z(e) || "+" === z(e)) { if (e.token += T(e), _(e), "+" !== T(e) && "-" !== T(e) || (e.token += T(e), _(e)), !w.isDigit(T(e))) throw re(e, 'Digit expected, got "' + T(e) + '"'); for (; w.isDigit(T(e));) e.token += T(e), _(e); if (w.isDecimalMark(T(e), z(e))) throw re(e, 'Digit expected, got "' + T(e) + '"') } else if ("." === z(e)) throw _(e), re(e, 'Digit expected, got "' + T(e) + '"') } else { if (!w.isAlpha(T(e), C(e), z(e))) { for (e.tokenType = N.UNKNOWN;
                                "" !== T(e);) e.token += T(e), _(e); throw re(e, 'Syntax error in part "' + e.token + '"') } for (; w.isAlpha(T(e), C(e), z(e)) || w.isDigit(T(e));) e.token += T(e), _(e);
                        E.hasOwnProperty(e.token) ? e.tokenType = N.DELIMITER : e.tokenType = N.SYMBOL } } else e.tokenType = N.DELIMITER }

            function k(e) { for (; B(e), "\n" === e.token;); }

            function I(e) { e.nestingLevel++ }

            function P(e) { e.nestingLevel-- }

            function R(e, t) { var r = { extraNodes: {}, expression: "", comment: "", index: 0, token: "", tokenType: N.NULL, nestingLevel: 0, conditionalLevel: null };
                oe(r, { expression: e, extraNodes: t }), B(r); var n = function(e) { var t, r, n = []; for ("" !== e.token && "\n" !== e.token && ";" !== e.token && ((t = U(e)).comment = e.comment);
                        "\n" === e.token || ";" === e.token;) 0 === n.length && t && (r = ";" !== e.token, n.push({ node: t, visible: r })), B(e), "\n" !== e.token && ";" !== e.token && "" !== e.token && ((t = U(e)).comment = e.comment, r = ";" !== e.token, n.push({ node: t, visible: r })); return 0 < n.length ? new o(n) : (t || ((t = new d(void 0)).comment = e.comment), t) }(r); if ("" !== r.token) throw r.tokenType === N.DELIMITER ? ne(r, "Unexpected operator " + r.token) : re(r, 'Unexpected part "' + r.token + '"'); return n }

            function U(e) { var t, r, n, i, o = function(e) { for (var t = function(e) { for (var t = q(e);
                                "or" === e.token;) k(e), t = new l("or", "or", [t, q(e)]); return t }(e);
                        "?" === e.token;) { var r = e.conditionalLevel;
                        e.conditionalLevel = e.nestingLevel, k(e); var n = t,
                            i = U(e); if (":" !== e.token) throw re(e, "False part of conditional expression expected");
                        e.conditionalLevel = null, k(e); var o = U(e);
                        t = new u(n, i, o), e.conditionalLevel = r } return t }(e); if ("=" !== e.token) return o; if (a.isSymbolNode(o)) return t = o.name, k(e), n = U(e), new s(new b(t), n); if (a.isAccessorNode(o)) return k(e), n = U(e), new s(o.object, o.index, n); if (a.isFunctionNode(o) && a.isSymbolNode(o.fn) && (i = !0, r = [], t = o.name, o.args.forEach(function(e, t) { a.isSymbolNode(e) ? r[t] = e.name : i = !1 }), i)) return k(e), n = U(e), new c(t, r, n); throw re(e, "Invalid left hand side of assignment operator =") }

            function q(e) { for (var t = r(e);
                    "xor" === e.token;) k(e), t = new l("xor", "xor", [t, r(e)]); return t }

            function r(e) { for (var t = D(e);
                    "and" === e.token;) k(e), t = new l("and", "and", [t, D(e)]); return t }

            function D(e) { for (var t = L(e);
                    "|" === e.token;) k(e), t = new l("|", "bitOr", [t, L(e)]); return t }

            function L(e) { for (var t = j(e);
                    "^|" === e.token;) k(e), t = new l("^|", "bitXor", [t, j(e)]); return t }

            function j(e) { for (var t = F(e);
                    "&" === e.token;) k(e), t = new l("&", "bitAnd", [t, F(e)]); return t }

            function F(e) { for (var t = [H(e)], r = [], n = { "==": "equal", "!=": "unequal", "<": "smaller", ">": "larger", "<=": "smallerEq", ">=": "largerEq" }; n.hasOwnProperty(e.token);) { var i = { name: e.token, fn: n[e.token] };
                    r.push(i), k(e), t.push(H(e)) } return 1 === t.length ? t[0] : 2 === t.length ? new l(r[0].name, r[0].fn, t) : new x(r.map(function(e) { return e.fn }), t) }

            function H(e) { var t, r, n, i, o; for (t = $(e), r = { "<<": "leftShift", ">>": "rightArithShift", ">>>": "rightLogShift" }; r.hasOwnProperty(e.token);) i = r[n = e.token], k(e), o = [t, $(e)], t = new l(n, i, o); return t }

            function $(e) { var t, r, n, i, o; for (t = G(e), r = { to: "to", in: "to" }; r.hasOwnProperty(e.token);) i = r[n = e.token], k(e), t = "in" === n && "" === e.token ? new l("*", "multiply", [t, new b("in")], !0) : (o = [t, G(e)], new l(n, i, o)); return t }

            function G(e) { var t, r = []; if (t = ":" === e.token ? new d(1) : Z(e), ":" === e.token && e.conditionalLevel !== e.nestingLevel) { for (r.push(t);
                        ":" === e.token && r.length < 3;) k(e), ")" === e.token || "]" === e.token || "," === e.token || "" === e.token ? r.push(new b("end")) : r.push(Z(e));
                    t = 3 === r.length ? new n(r[0], r[2], r[1]) : new n(r[0], r[1]) } return t }

            function Z(e) { var t, r, n, i, o; for (t = V(e), r = { "+": "add", "-": "subtract" }; r.hasOwnProperty(e.token);) i = r[n = e.token], k(e), o = [t, V(e)], t = new l(n, i, o); return t }

            function V(e) { var t, r, n, i, o; for (r = t = W(e), n = { "*": "multiply", ".*": "dotMultiply", "/": "divide", "./": "dotDivide", "%": "mod", mod: "mod" }; n.hasOwnProperty(e.token);) o = n[i = e.token], k(e), r = W(e), t = new l(i, o, [t, r]); return t }

            function W(e) { var t, r; for (r = t = J(e); e.tokenType === N.SYMBOL || "in" === e.token && a.isConstantNode(t) || !(e.tokenType !== N.NUMBER || a.isConstantNode(r) || a.isOperatorNode(r) && "!" !== r.op) || "(" === e.token;) r = J(e), t = new l("*", "multiply", [t, r], !0); return t }

            function J(e) { for (var t = Y(e), r = t, n = [];
                    "/" === e.token && a.isConstantNode(r);) { if (n.push(oe({}, e)), k(e), e.tokenType !== N.NUMBER) { oe(e, n.pop()); break } if (n.push(oe({}, e)), k(e), e.tokenType !== N.SYMBOL && "(" !== e.token) { n.pop(), oe(e, n.pop()); break }
                    oe(e, n.pop()), n.pop(), r = Y(e), t = new l("/", "divide", [t, r]) } return t }

            function Y(e) { var t, r, n, i, o, a, s, u, c = { "-": "unaryMinus", "+": "unaryPlus", "~": "bitNot", not: "not" }; return c.hasOwnProperty(e.token) ? (n = c[e.token], t = e.token, k(e), r = [Y(e)], new l(t, n, r)) : (o = function(e) { var t, r, n, i; for (t = function(e) { var t, r, n, i, o, a, s, u, c, f = []; if (e.tokenType === N.SYMBOL && e.extraNodes.hasOwnProperty(e.token)) { var l = e.extraNodes[e.token]; if (B(e), "(" === e.token) { if (f = [], I(e), B(e), ")" !== e.token)
                                        for (f.push(U(e));
                                            "," === e.token;) B(e), f.push(U(e)); if (")" !== e.token) throw re(e, "Parenthesis ) expected");
                                    P(e), B(e) } return new l(f) } return (t = e).tokenType === N.SYMBOL || t.tokenType === N.DELIMITER && t.token in E ? (n = t.token, B(t), r = A.hasOwnProperty(n) ? new d(A[n]) : -1 !== S.indexOf(n) ? new d(m(n, "number")) : new b(n), r = X(t, r)) : '"' !== (i = t).token ? "'" !== (s = i).token ? function(e) { var t, r, n, i; if ("[" !== e.token) return function(e) { if ("{" !== e.token) return (t = e).tokenType !== N.NUMBER ? function(e) { var t; if ("(" !== e.token) return function(e) { throw "" === e.token ? re(e, "Unexpected end of expression") : re(e, "Value expected") }(e); if (I(e), B(e), t = U(e), ")" === e.token) return P(e), B(e), t = new g(t), t = X(e, t); throw re(e, "Parenthesis ) expected") }(t) : (r = t.token, B(t), new d(m(r, p.number))); var t, r, n, i = {};
                                    do { if (B(e), "}" !== e.token) { if ('"' === e.token) n = Q(e);
                                            else if ("'" === e.token) n = K(e);
                                            else { if (e.tokenType !== N.SYMBOL) throw re(e, "Symbol or string expected as object key");
                                                n = e.token, B(e) } if (":" !== e.token) throw re(e, "Colon : expected after object key");
                                            B(e), i[n] = U(e) } } while ("," === e.token); if ("}" !== e.token) throw re(e, "Comma , or bracket } expected after object value");
                                    B(e); var o = new y(i); return o = X(e, o) }(e); if (I(e), B(e), "]" !== e.token) { var o = ee(e); if (";" === e.token) { for (n = 1, r = [o];
                                            ";" === e.token;) B(e), r[n] = ee(e), n++; if ("]" !== e.token) throw re(e, "End of matrix ] expected");
                                        P(e), B(e), i = r[0].items.length; for (var a = 1; a < n; a++)
                                            if (r[a].items.length !== i) throw ne(e, "Column dimensions mismatch (" + r[a].items.length + " !== " + i + ")");
                                        t = new h(r) } else { if ("]" !== e.token) throw re(e, "End of matrix ] expected");
                                        P(e), B(e), t = o } } else P(e), B(e), t = new h([]); return X(e, t) }(s) : (c = K(s), u = new d(c), u = X(s, u)) : (a = Q(i), o = new d(a), o = X(i, o)) }(e), r = { "!": "factorial", "'": "ctranspose" }; r.hasOwnProperty(e.token);) n = e.token, i = r[n], B(e), t = new l(n, i, [t]), t = X(e, t); return t }(i = e), ("^" === i.token || ".^" === i.token) && (a = i.token, s = "^" === a ? "pow" : "dotPow", k(i), u = [o, Y(i)], o = new l(a, s, u)), o) }

            function X(e, t, r) { for (var n; !("(" !== e.token && "[" !== e.token && "." !== e.token || r && -1 === r.indexOf(e.token));)
                    if (n = [], "(" === e.token) { if (!a.isSymbolNode(t) && !a.isAccessorNode(t)) return t; if (I(e), B(e), ")" !== e.token)
                            for (n.push(U(e));
                                "," === e.token;) B(e), n.push(U(e)); if (")" !== e.token) throw re(e, "Parenthesis ) expected");
                        P(e), B(e), t = new v(t, n) } else if ("[" === e.token) { if (I(e), B(e), "]" !== e.token)
                        for (n.push(U(e));
                            "," === e.token;) B(e), n.push(U(e)); if ("]" !== e.token) throw re(e, "Parenthesis ] expected");
                    P(e), B(e), t = new i(t, new f(n)) } else { if (B(e), e.tokenType !== N.SYMBOL) throw re(e, "Property name expected after dot");
                    n.push(new d(e.token)), B(e), t = new i(t, new f(n, !0)) } return t }

            function Q(e) { for (var t = "";
                    "" !== T(e) && '"' !== T(e);) "\\" === T(e) && (t += T(e), _(e)), t += T(e), _(e); if (B(e), '"' !== e.token) throw re(e, 'End of string " expected'); return B(e), JSON.parse('"' + t + '"') }

            function K(e) { for (var t = "";
                    "" !== T(e) && "'" !== T(e);) "\\" === T(e) && (t += T(e), _(e)), t += T(e), _(e); if (B(e), "'" !== e.token) throw re(e, "End of string ' expected"); return B(e), JSON.parse('"' + t + '"') }

            function ee(e) { for (var t = [U(e)], r = 1;
                    "," === e.token;) B(e), t[r] = U(e), r++; return new h(t) }

            function te(e) { return e.index - e.token.length + 1 }

            function re(e, t) { var r = te(e),
                    n = new SyntaxError(t + " (char " + r + ")"); return n.char = r, n }

            function ne(e, t) { var r = te(e),
                    n = new SyntaxError(t + " (char " + r + ")"); return n.char = r, n } return w.isAlpha = function(e, t, r) { return w.isValidLatinOrGreek(e) || w.isValidMathSymbol(e, r) || w.isValidMathSymbol(t, e) }, w.isValidLatinOrGreek = function(e) { return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(e) }, w.isValidMathSymbol = function(e, t) { return /^[\uD835]$/.test(e) && /^[\uDC00-\uDFFF]$/.test(t) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(t) }, w.isWhitespace = function(e, t) { return " " === e || "\t" === e || "\n" === e && 0 < t }, w.isDecimalMark = function(e, t) { return "." === e && "/" !== t && "*" !== t && "^" !== t }, w.isDigitDot = function(e) { return "0" <= e && e <= "9" || "." === e }, w.isDigit = function(e) { return "0" <= e && e <= "9" }, w } }, function(e, t, r) { "use strict"; var n = r(54);
        t.transform = function(e) { return e && e.isIndexError ? new n(e.index + 1, e.min + 1, void 0 !== e.max ? e.max + 1 : void 0) : e } }, function(e, t, l) { "use strict"; var p = l(5).extend;
        t.name = "divide", t.factory = function(e, t, r, n) { var i = r(l(12)),
                o = r(l(10)),
                a = r(l(68)),
                s = r(l(1)),
                u = r(l(20)),
                c = r(l(6)),
                f = n("divide", p({ "Array | Matrix, Array | Matrix": function(e, t) { return o(e, a(t)) }, "DenseMatrix, any": function(e, t) { return c(e, t, i, !1) }, "SparseMatrix, any": function(e, t) { return u(e, t, i, !1) }, "Array, any": function(e, t) { return c(s(e), t, i, !1).valueOf() }, "any, Array | Matrix": function(e, t) { return o(e, a(t)) } }, i.signatures)); return f.toTex = { 2: "\\frac{${args[0]}}{${args[1]}}" }, f } }, function(e, t, r) { "use strict"; var a = r(0);
        t.name = "sqrt", t.factory = function(t, r, e, n) { var i = n("sqrt", { number: o, Complex: function(e) { return e.sqrt() }, BigNumber: function(e) { return !e.isNegative() || r.predictable ? e.sqrt() : o(e.toNumber()) }, "Array | Matrix": function(e) { return a(e, i, !0) }, Unit: function(e) { return e.pow(.5) } });

            function o(e) { return isNaN(e) ? NaN : 0 <= e || r.predictable ? Math.sqrt(e) : new t.Complex(e, 0).sqrt() } return i.toTex = { 1: "\\sqrt{${args[0]}}" }, i } }, function(e, t, r) { "use strict"; var a = r(61);
        e.exports = function e(t, r) { a(t) && (t = t.valueOf()); for (var n = 0, i = t.length; n < i; n++) { var o = t[n];
                Array.isArray(o) ? e(o, r) : r(o) } } }, function(e, t, i) { "use strict"; var o = i(30),
            p = i(8),
            a = o.string,
            g = o.array,
            m = o.object,
            r = o.number,
            v = Array.isArray,
            x = r.isNumber,
            b = r.isInteger,
            w = a.isString,
            N = g.validateIndex;
        t.name = "DenseMatrix", t.path = "type", t.factory = function(h, e, t, d) { var r = t(i(62)),
                n = t(i(81));

            function y(e, t) { if (!(this instanceof y)) throw new SyntaxError("Constructor must be called with the new operator"); if (t && !w(t)) throw new Error("Invalid datatype: " + t); if (h.isMatrix(e)) "DenseMatrix" === e.type ? (this._data = m.clone(e._data), this._size = m.clone(e._size)) : (this._data = e.toArray(), this._size = e.size()), this._datatype = t || e._datatype;
                else if (e && v(e.data) && v(e.size)) this._data = e.data, this._size = e.size, this._datatype = t || e.datatype;
                else if (v(e)) this._data = function e(t) { for (var r = 0, n = t.length; r < n; r++) { var i = t[r];
                        v(i) ? t[r] = e(i) : i && !0 === i.isMatrix && (t[r] = e(i.valueOf())) } return t }(e), this._size = g.size(this._data), g.validate(this._data, this._size), this._datatype = t;
                else { if (e) throw new TypeError("Unsupported type of data (" + o.types.type(e) + ")");
                    this._data = [], this._size = [0], this._datatype = t } }

            function s(e, t, r) { if (0 !== t.length) return e._size = t.slice(0), e._data = g.resize(e._data, e._size, r), e; for (var n = e._data; v(n);) n = n[0]; return n }

            function l(e, t, r) { for (var n = e._size.slice(0), i = !1; n.length < t.length;) n.push(0), i = !0; for (var o = 0, a = t.length; o < a; o++) t[o] > n[o] && (n[o] = t[o], i = !0);
                i && s(e, n, r) } return (y.prototype = new n).type = "DenseMatrix", y.prototype.isDenseMatrix = !0, y.prototype.getDataType = function() { return r(this._data) }, y.prototype.storage = function() { return "dense" }, y.prototype.datatype = function() { return this._datatype }, y.prototype.create = function(e, t) { return new y(e, t) }, y.prototype.subset = function(e, t, r) { switch (arguments.length) {
                    case 1:
                        return function(e, t) { if (!h.isIndex(t)) throw new TypeError("Invalid index"); if (t.isScalar()) return e.get(t.min()); var r = t.size(); if (r.length !== e._size.length) throw new p(r.length, e._size.length); for (var n = t.min(), i = t.max(), o = 0, a = e._size.length; o < a; o++) N(n[o], e._size[o]), N(i[o], e._size[o]); return new y(function r(n, i, o, a) { var e = a === o - 1,
                                    t = i.dimension(a); return e ? t.map(function(e) { return N(e, n.length), n[e] }).valueOf() : t.map(function(e) { N(e, n.length); var t = n[e]; return r(t, i, o, a + 1) }).valueOf() }(e._data, t, r.length, 0), e._datatype) }(this, e);
                    case 2:
                    case 3:
                        return function(e, t, r, n) { if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index"); var i, o = t.size(),
                                a = t.isScalar(); if (h.isMatrix(r) ? (i = r.size(), r = r.valueOf()) : i = g.size(r), a) { if (0 !== i.length) throw new TypeError("Scalar expected");
                                e.set(t.min(), r, n) } else { if (o.length < e._size.length) throw new p(o.length, e._size.length, "<"); if (i.length < o.length) { for (var s = 0, u = 0; 1 === o[s] && 1 === i[s];) s++; for (; 1 === o[s];) u++, s++;
                                    r = g.unsqueeze(r, o.length, u, i) } if (!m.deepEqual(o, i)) throw new p(o, i, ">"); var c = t.max().map(function(e) { return e + 1 });
                                l(e, c, n); var f = o.length;! function r(n, i, o, a, s) { var e = s === a - 1,
                                        t = i.dimension(s);
                                    e ? t.forEach(function(e, t) { N(e), n[e] = o[t[0]] }) : t.forEach(function(e, t) { N(e), r(n[e], i, o[t[0]], a, s + 1) }) }(e._data, t, r, f, 0) } return e }(this, e, t, r);
                    default:
                        throw new SyntaxError("Wrong number of arguments") } }, y.prototype.get = function(e) { if (!v(e)) throw new TypeError("Array expected"); if (e.length !== this._size.length) throw new p(e.length, this._size.length); for (var t = 0; t < e.length; t++) N(e[t], this._size[t]); for (var r = this._data, n = 0, i = e.length; n < i; n++) { var o = e[n];
                    N(o, r.length), r = r[o] } return r }, y.prototype.set = function(e, t, r) { if (!v(e)) throw new TypeError("Array expected"); if (e.length < this._size.length) throw new p(e.length, this._size.length, "<"); var n, i, o;
                l(this, e.map(function(e) { return e + 1 }), r); var a = this._data; for (n = 0, i = e.length - 1; n < i; n++) o = e[n], N(o, a.length), a = a[o]; return o = e[e.length - 1], N(o, a.length), a[o] = t, this }, y.prototype.resize = function(e, t, r) { if (!v(e)) throw new TypeError("Array expected"); return s(r ? this.clone() : this, e, t) }, y.prototype.reshape = function(e, t) { var r = t ? this.clone() : this; return r._data = g.reshape(r._data, e), r._size = e.slice(0), r }, y.prototype.clone = function() { return new y({ data: m.clone(this._data), size: m.clone(this._size), datatype: this._datatype }) }, y.prototype.size = function() { return this._size.slice(0) }, y.prototype.map = function(t) { var i = this; return new y({ data: function r(e, n) { return v(e) ? e.map(function(e, t) { return r(e, n.concat(t)) }) : t(e, n, i) }(this._data, []), size: m.clone(this._size), datatype: this._datatype }) }, y.prototype.forEach = function(t) { var i = this;! function r(e, n) { v(e) ? e.forEach(function(e, t) { r(e, n.concat(t)) }) : t(e, n, i) }(this._data, []) }, y.prototype.toArray = function() { return m.clone(this._data) }, y.prototype.valueOf = function() { return this._data }, y.prototype.format = function(e) { return a.format(this._data, e) }, y.prototype.toString = function() { return a.format(this._data) }, y.prototype.toJSON = function() { return { mathjs: "DenseMatrix", data: this._data, size: this._size, datatype: this._datatype } }, y.prototype.diagonal = function(e) { if (e) { if (h.isBigNumber(e) && (e = e.toNumber()), !x(e) || !b(e)) throw new TypeError("The parameter k must be an integer number") } else e = 0; for (var t = 0 < e ? e : 0, r = e < 0 ? -e : 0, n = this._size[0], i = this._size[1], o = Math.min(n - r, i - t), a = [], s = 0; s < o; s++) a[s] = this._data[s + r][s + t]; return new y({ data: a, size: [o], datatype: this._datatype }) }, y.diagonal = function(e, t, r, n, i) { if (!v(e)) throw new TypeError("Array expected, size parameter"); if (2 !== e.length) throw new Error("Only two dimensions matrix are supported"); if (e = e.map(function(e) { if (h.isBigNumber(e) && (e = e.toNumber()), !x(e) || !b(e) || e < 1) throw new Error("Size values must be positive integers"); return e }), r) { if (h.isBigNumber(r) && (r = r.toNumber()), !x(r) || !b(r)) throw new TypeError("The parameter k must be an integer number") } else r = 0;
                n && w(i) && (n = d.convert(n, i)); var o, a = 0 < r ? r : 0,
                    s = r < 0 ? -r : 0,
                    u = e[0],
                    c = e[1],
                    f = Math.min(u - s, c - a); if (v(t)) { if (t.length !== f) throw new Error("Invalid value array length");
                    o = function(e) { return t[e] } } else if (h.isMatrix(t)) { var l = t.size(); if (1 !== l.length || l[0] !== f) throw new Error("Invalid matrix length");
                    o = function(e) { return t.get([e]) } } else o = function() { return t };
                n || (n = h.isBigNumber(o(0)) ? new h.BigNumber(0) : 0); var p = []; if (0 < e.length) { p = g.resize(p, e, n); for (var m = 0; m < f; m++) p[m + s][m + a] = o(m) } return new y({ data: p, size: [u, c] }) }, y.fromJSON = function(e) { return new y(e) }, y.prototype.swapRows = function(e, t) { if (!(x(e) && b(e) && x(t) && b(t))) throw new Error("Row index must be positive integers"); if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported"); return N(e, this._size[0]), N(t, this._size[0]), y._swapRows(e, t, this._data), this }, y._swapRows = function(e, t, r) { var n = r[e];
                r[e] = r[t], r[t] = n }, h.Matrix._storage.dense = y, h.Matrix._storage.default = y }, t.lazy = !1 }, function(e, t, s) { "use strict"; var l = s(2),
            p = s(3).isInteger;
        t.name = "identity", t.factory = function(f, r, e, t) { var n = e(s(1)),
                i = t("identity", { "": function() { return "Matrix" === r.matrix ? n([]) : [] }, string: function(e) { return n(e) }, "number | BigNumber": function(e) { return a(e, e, "Matrix" === r.matrix ? "default" : void 0) }, "number | BigNumber, string": function(e, t) { return a(e, e, t) }, "number | BigNumber, number | BigNumber": function(e, t) { return a(e, t, "Matrix" === r.matrix ? "default" : void 0) }, "number | BigNumber, number | BigNumber, string": function(e, t, r) { return a(e, t, r) }, Array: function(e) { return o(e) }, "Array, string": function(e, t) { return o(e, t) }, Matrix: function(e) { return o(e.valueOf(), e.storage()) }, "Matrix, string": function(e, t) { return o(e.valueOf(), t) } }); return i.toTex = void 0, i;

            function o(e, t) { switch (e.length) {
                    case 0:
                        return t ? n(t) : [];
                    case 1:
                        return a(e[0], e[0], t);
                    case 2:
                        return a(e[0], e[1], t);
                    default:
                        throw new Error("Vector containing two values expected") } }

            function a(e, t, r) { var n = f.isBigNumber(e) || f.isBigNumber(t) ? f.BigNumber : null; if (f.isBigNumber(e) && (e = e.toNumber()), f.isBigNumber(t) && (t = t.toNumber()), !p(e) || e < 1) throw new Error("Parameters in function identity must be positive integers"); if (!p(t) || t < 1) throw new Error("Parameters in function identity must be positive integers"); var i = n ? new f.BigNumber(1) : 1,
                    o = n ? new n(0) : 0,
                    a = [e, t]; if (r) return f.Matrix.storage(r).diagonal(a, i, 0, o); for (var s = l.resize([], a, o), u = e < t ? e : t, c = 0; c < u; c++) s[c][c] = i; return s } } }, function(e, t, m) { "use strict";
        t.name = "equal", t.factory = function(e, t, r, n) { var i = r(m(1)),
                o = r(m(11)),
                a = r(m(18)),
                s = r(m(27)),
                u = r(m(19)),
                c = r(m(7)),
                f = r(m(6)),
                l = m(4),
                p = n("equal", { "any, any": function(e, t) { return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : o(e, t) }, "SparseMatrix, SparseMatrix": function(e, t) { return s(e, t, o) }, "SparseMatrix, DenseMatrix": function(e, t) { return a(t, e, o, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return a(e, t, o, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return c(e, t, o) }, "Array, Array": function(e, t) { return p(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return p(i(e), t) }, "Matrix, Array": function(e, t) { return p(e, i(t)) }, "SparseMatrix, any": function(e, t) { return u(e, t, o, !1) }, "DenseMatrix, any": function(e, t) { return f(e, t, o, !1) }, "any, SparseMatrix": function(e, t) { return u(t, e, o, !0) }, "any, DenseMatrix": function(e, t) { return f(t, e, o, !0) }, "Array, any": function(e, t) { return f(i(e), t, o, !1).valueOf() }, "any, Array": function(e, t) { return f(i(t), e, o, !0).valueOf() } }); return p.toTex = { 2: "\\left(${args[0]}".concat(l.operators.equal, "${args[1]}\\right)") }, p } }, function(e, t, r) { "use strict"; var f = [{ AssignmentNode: {}, FunctionAssignmentNode: {} }, { ConditionalNode: { latexLeftParens: !1, latexRightParens: !1, latexParens: !1 } }, { "OperatorNode:or": { associativity: "left", associativeWith: [] } }, { "OperatorNode:xor": { associativity: "left", associativeWith: [] } }, { "OperatorNode:and": { associativity: "left", associativeWith: [] } }, { "OperatorNode:bitOr": { associativity: "left", associativeWith: [] } }, { "OperatorNode:bitXor": { associativity: "left", associativeWith: [] } }, { "OperatorNode:bitAnd": { associativity: "left", associativeWith: [] } }, { "OperatorNode:equal": { associativity: "left", associativeWith: [] }, "OperatorNode:unequal": { associativity: "left", associativeWith: [] }, "OperatorNode:smaller": { associativity: "left", associativeWith: [] }, "OperatorNode:larger": { associativity: "left", associativeWith: [] }, "OperatorNode:smallerEq": { associativity: "left", associativeWith: [] }, "OperatorNode:largerEq": { associativity: "left", associativeWith: [] }, RelationalNode: { associativity: "left", associativeWith: [] } }, { "OperatorNode:leftShift": { associativity: "left", associativeWith: [] }, "OperatorNode:rightArithShift": { associativity: "left", associativeWith: [] }, "OperatorNode:rightLogShift": { associativity: "left", associativeWith: [] } }, { "OperatorNode:to": { associativity: "left", associativeWith: [] } }, { RangeNode: {} }, { "OperatorNode:add": { associativity: "left", associativeWith: ["OperatorNode:add", "OperatorNode:subtract"] }, "OperatorNode:subtract": { associativity: "left", associativeWith: [] } }, { "OperatorNode:multiply": { associativity: "left", associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"] }, "OperatorNode:divide": { associativity: "left", associativeWith: [], latexLeftParens: !1, latexRightParens: !1, latexParens: !1 }, "OperatorNode:dotMultiply": { associativity: "left", associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"] }, "OperatorNode:dotDivide": { associativity: "left", associativeWith: [] }, "OperatorNode:mod": { associativity: "left", associativeWith: [] } }, { "OperatorNode:unaryPlus": { associativity: "right" }, "OperatorNode:unaryMinus": { associativity: "right" }, "OperatorNode:bitNot": { associativity: "right" }, "OperatorNode:not": { associativity: "right" } }, { "OperatorNode:pow": { associativity: "right", associativeWith: [], latexRightParens: !1 }, "OperatorNode:dotPow": { associativity: "right", associativeWith: [] } }, { "OperatorNode:factorial": { associativity: "left" } }, { "OperatorNode:transpose": { associativity: "left" } }];

        function l(e, t) { var r = e; "keep" !== t && (r = e.getContent()); for (var n = r.getIdentifier(), i = 0; i < f.length; i++)
                if (n in f[i]) return i;
            return null }
        e.exports.properties = f, e.exports.getPrecedence = l, e.exports.getAssociativity = function(e, t) { var r = e; "keep" !== t && (r = e.getContent()); var n = r.getIdentifier(),
                i = l(r, t); if (null === i) return null; var o = f[i][n]; if (o.hasOwnProperty("associativity")) { if ("left" === o.associativity) return "left"; if ("right" === o.associativity) return "right"; throw Error("'" + n + "' has the invalid associativity '" + o.associativity + "'.") } return null }, e.exports.isAssociativeWith = function(e, t, r) { var n = "keep" !== r ? e.getContent() : e,
                i = "keep" !== r ? e.getContent() : t,
                o = n.getIdentifier(),
                a = i.getIdentifier(),
                s = l(n, r); if (null === s) return null; var u = f[s][o]; if (u.hasOwnProperty("associativeWith") && u.associativeWith instanceof Array) { for (var c = 0; c < u.associativeWith.length; c++)
                    if (u.associativeWith[c] === a) return !0;
                return !1 } return null } }, function(e, t, u) { "use strict"; var c = u(4),
            f = u(9).escape,
            l = u(5).hasOwnProperty,
            p = u(13).getSafeProperty;
        t.name = "SymbolNode", t.path = "expression.node", t.math = !0, t.factory = function(a, e, t, r, n) { var i = t(u(16));

            function s(e) { return !!a.Unit && a.Unit.isValuelessUnit(e) }

            function o(e) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
                this.name = e } return (o.prototype = new i).type = "SymbolNode", o.prototype.isSymbolNode = !0, o.prototype._compile = function(n, e) { var i = this.name; if (l(e, i)) return function(e, t, r) { return t[i] }; if (i in n) return function(e, t, r) { return p(i in e ? e : n, i) }; var o = s(i); return function(e, t, r) { return i in e ? p(e, i) : o ? new a.Unit(null, i) : function(e) { throw new Error("Undefined symbol " + e) }(i) } }, o.prototype.forEach = function(e) {}, o.prototype.map = function(e) { return this.clone() }, o.prototype.clone = function() { return new o(this.name) }, o.prototype._toString = function(e) { return this.name }, o.prototype.toHTML = function(e) { var t = f(this.name); return "true" === t || "false" === t ? '<span class="math-symbol math-boolean">' + t + "</span>" : "i" === t ? '<span class="math-symbol math-imaginary-symbol">' + t + "</span>" : "Infinity" === t ? '<span class="math-symbol math-infinity-symbol">' + t + "</span>" : "NaN" === t ? '<span class="math-symbol math-nan-symbol">' + t + "</span>" : "null" === t ? '<span class="math-symbol math-null-symbol">' + t + "</span>" : "undefined" === t ? '<span class="math-symbol math-undefined-symbol">' + t + "</span>" : '<span class="math-symbol">' + t + "</span>" }, o.prototype.toJSON = function() { return { mathjs: "SymbolNode", name: this.name } }, o.fromJSON = function(e) { return new o(e.name) }, o.prototype._toTex = function(e) { var t = !1;
                void 0 === n[this.name] && s(this.name) && (t = !0); var r = c.toSymbol(this.name, t); return "\\" === r[0] ? r : " " + r }, o } }, function(e, t, l) { "use strict"; var p = l(3).nearlyEqual,
            m = l(37);
        t.name = "compare", t.factory = function(r, n, e, t) { var i = e(l(1)),
                o = e(l(18)),
                a = e(l(65)),
                s = e(l(19)),
                u = e(l(7)),
                c = e(l(6)),
                f = t("compare", { "boolean, boolean": function(e, t) { return e === t ? 0 : t < e ? 1 : -1 }, "number, number": function(e, t) { return e === t || p(e, t, n.epsilon) ? 0 : t < e ? 1 : -1 }, "BigNumber, BigNumber": function(e, t) { return e.eq(t) || m(e, t, n.epsilon) ? new r.BigNumber(0) : new r.BigNumber(e.cmp(t)) }, "Fraction, Fraction": function(e, t) { return new r.Fraction(e.compare(t)) }, "Complex, Complex": function() { throw new TypeError("No ordering relation is defined for complex numbers") }, "Unit, Unit": function(e, t) { if (!e.equalBase(t)) throw new Error("Cannot compare units with different base"); return f(e.value, t.value) }, "SparseMatrix, SparseMatrix": function(e, t) { return a(e, t, f) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, f, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return o(e, t, f, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return u(e, t, f) }, "Array, Array": function(e, t) { return f(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return f(i(e), t) }, "Matrix, Array": function(e, t) { return f(e, i(t)) }, "SparseMatrix, any": function(e, t) { return s(e, t, f, !1) }, "DenseMatrix, any": function(e, t) { return c(e, t, f, !1) }, "any, SparseMatrix": function(e, t) { return s(t, e, f, !0) }, "any, DenseMatrix": function(e, t) { return c(t, e, f, !0) }, "Array, any": function(e, t) { return c(i(e), t, f, !1).valueOf() }, "any, Array": function(e, t) { return c(i(t), e, f, !0).valueOf() } }); return f.toTex = void 0, f } }, function(e, t, r) { "use strict"; var n = r(61);
        e.exports = function(e) { return Array.isArray(e) || n(e) } }, function(e, t, r) { "use strict";

        function n(e, t, r) { if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.index = e, arguments.length < 3 ? (this.min = 0, this.max = t) : (this.min = t, this.max = r), void 0 !== this.min && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = (new Error).stack }(n.prototype = new RangeError).constructor = RangeError, n.prototype.name = "IndexError", n.prototype.isIndexError = !0, e.exports = n }, function(e, t, r) { "use strict";

        function i(e, t, r, n) { if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
            this.fn = e, this.count = t, this.min = r, this.max = n, this.message = "Wrong number of arguments in function " + e + " (" + t + " provided, " + r + (null != n ? "-" + n : "") + " expected)", this.stack = (new Error).stack }(i.prototype = new Error).constructor = Error, i.prototype.name = "ArgumentsError", i.prototype.isArgumentsError = !0, e.exports = i }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "isNumeric", t.factory = function(e, t, r, n) { var i = n("isNumeric", { "number | BigNumber | Fraction | boolean": function() { return !0 }, "Complex | Unit | string | null | undefined | Node": function() { return !1 }, "Array | Matrix": function(e) { return o(e, i) } }); return i } }, function(e, t, s) { "use strict"; var u = s(9).format,
            c = s(4).escape;
        t.name = "ConstantNode", t.path = "expression.node", t.factory = function(e, t, r, n) { var i = r(s(16)),
                o = r(s(24));

            function a(e) { if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator"); if (2 === arguments.length) throw new SyntaxError("new ConstantNode(valueStr, valueType) is not supported anymore since math v4.0.0. Use new ConstantNode(value) instead, where value is a non-stringified value.");
                this.value = e } return (a.prototype = new i).type = "ConstantNode", a.prototype.isConstantNode = !0, a.prototype._compile = function(e, t) { var r = this.value; return function() { return r } }, a.prototype.forEach = function(e) {}, a.prototype.map = function(e) { return this.clone() }, a.prototype.clone = function() { return new a(this.value) }, a.prototype._toString = function(e) { return u(this.value, e) }, a.prototype.toHTML = function(e) { var t = this._toString(e); switch (o(this.value)) {
                    case "number":
                    case "BigNumber":
                    case "Fraction":
                        return '<span class="math-number">' + t + "</span>";
                    case "string":
                        return '<span class="math-string">' + t + "</span>";
                    case "boolean":
                        return '<span class="math-boolean">' + t + "</span>";
                    case "null":
                        return '<span class="math-null-symbol">' + t + "</span>";
                    case "undefined":
                        return '<span class="math-undefined">' + t + "</span>";
                    default:
                        return '<span class="math-symbol">' + t + "</span>" } }, a.prototype.toJSON = function() { return { mathjs: "ConstantNode", value: this.value } }, a.fromJSON = function(e) { return new a(e.value) }, a.prototype._toTex = function(e) { var t = this._toString(e); switch (o(this.value)) {
                    case "string":
                        return "\\mathtt{" + c(t) + "}";
                    case "number":
                    case "BigNumber":
                        var r = t.toLowerCase().indexOf("e"); return -1 !== r ? t.substring(0, r) + "\\cdot10^{" + t.substring(r + 1) + "}" : t;
                    case "Fraction":
                        return this.value.toLatex();
                    default:
                        return t } }, a } }, function(e, t, a) { "use strict"; var h = a(4),
            s = a(2).map,
            f = a(9).escape,
            u = a(13).isSafeMethod,
            c = a(13).getSafeProperty,
            b = a(50);
        t.name = "OperatorNode", t.path = "expression.node", t.factory = function(i, e, t, r) { var n = t(a(16));

            function o(e, t, r, n) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if ("string" != typeof e) throw new TypeError('string expected for parameter "op"'); if ("string" != typeof t) throw new TypeError('string expected for parameter "fn"'); if (!Array.isArray(r) || !r.every(i.isNode)) throw new TypeError('Array containing Nodes expected for parameter "args"');
                this.implicit = !0 === n, this.op = e, this.fn = t, this.args = r || [] }

            function m(i, o, e, t, r) { var n, a = b.getPrecedence(i, o),
                    s = b.getAssociativity(i, o); if ("all" === o || 2 < t.length && "OperatorNode:add" !== i.getIdentifier() && "OperatorNode:multiply" !== i.getIdentifier()) return t.map(function(e) { switch (e.getContent().type) {
                        case "ArrayNode":
                        case "ConstantNode":
                        case "SymbolNode":
                        case "ParenthesisNode":
                            return !1;
                        default:
                            return !0 } }); switch (t.length) {
                    case 0:
                        n = []; break;
                    case 1:
                        var u = b.getPrecedence(t[0], o); if (r && null !== u) { var c, f; if (f = "keep" === o ? (c = t[0].getIdentifier(), i.getIdentifier()) : (c = t[0].getContent().getIdentifier(), i.getContent().getIdentifier()), !1 === b.properties[a][f].latexLeftParens) { n = [!1]; break } if (!1 === b.properties[u][c].latexParens) { n = [!1]; break } } if (null === u) { n = [!1]; break } if (u <= a) { n = [!0]; break }
                        n = [!1]; break;
                    case 2:
                        var l, p, m = b.getPrecedence(t[0], o),
                            h = b.isAssociativeWith(i, t[0], o);
                        l = null !== m && (m === a && "right" === s && !h || m < a); var d, y, g, v = b.getPrecedence(t[1], o),
                            x = b.isAssociativeWith(i, t[1], o);
                        p = null !== v && (v === a && "left" === s && !x || v < a), r && (g = "keep" === o ? (d = i.getIdentifier(), y = i.args[0].getIdentifier(), i.args[1].getIdentifier()) : (d = i.getContent().getIdentifier(), y = i.args[0].getContent().getIdentifier(), i.args[1].getContent().getIdentifier()), null !== m && (!1 === b.properties[a][d].latexLeftParens && (l = !1), !1 === b.properties[m][y].latexParens && (l = !1)), null !== v && (!1 === b.properties[a][d].latexRightParens && (p = !1), !1 === b.properties[v][g].latexParens && (p = !1))), n = [l, p]; break;
                    default:
                        "OperatorNode:add" !== i.getIdentifier() && "OperatorNode:multiply" !== i.getIdentifier() || (n = t.map(function(e) { var t = b.getPrecedence(e, o),
                                r = b.isAssociativeWith(i, e, o),
                                n = b.getAssociativity(e, o); return null !== t && (a === t && s === n && !r || t < a) })) } return 2 <= t.length && "OperatorNode:multiply" === i.getIdentifier() && i.implicit && "auto" === o && "hide" === e && (n = t.map(function(e, t) { var r = "ParenthesisNode" === e.getIdentifier(); return !(!n[t] && !r) })), n } return (o.prototype = new n).type = "OperatorNode", o.prototype.isOperatorNode = !0, o.prototype._compile = function(t, r) { if ("string" != typeof this.fn || !u(t, this.fn)) throw t[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"'); var i = c(t, this.fn),
                    e = s(this.args, function(e) { return e._compile(t, r) }); if (1 === e.length) { var n = e[0]; return function(e, t, r) { return i(n(e, t, r)) } } if (2 !== e.length) return function(t, r, n) { return i.apply(null, s(e, function(e) { return e(t, r, n) })) }; var o = e[0],
                    a = e[1]; return function(e, t, r) { return i(o(e, t, r), a(e, t, r)) } }, o.prototype.forEach = function(e) { for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this) }, o.prototype.map = function(e) { for (var t = [], r = 0; r < this.args.length; r++) t[r] = this._ifNode(e(this.args[r], "args[" + r + "]", this)); return new o(this.op, this.fn, t, this.implicit) }, o.prototype.clone = function() { return new o(this.op, this.fn, this.args.slice(0), this.implicit) }, o.prototype.isUnary = function() { return 1 === this.args.length }, o.prototype.isBinary = function() { return 2 === this.args.length }, o.prototype._toString = function(r) { var e = r && r.parenthesis ? r.parenthesis : "keep",
                    t = r && r.implicit ? r.implicit : "hide",
                    n = this.args,
                    i = m(this, e, t, n, !1); if (1 === n.length) { var o = b.getAssociativity(this, e),
                        a = n[0].toString(r); return i[0] && (a = "(" + a + ")"), "right" === o ? this.op + a : a + this.op } if (2 === n.length) { var s = n[0].toString(r),
                        u = n[1].toString(r); return i[0] && (s = "(" + s + ")"), i[1] && (u = "(" + u + ")"), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === t ? s + " " + u : s + " " + this.op + " " + u } if (2 < n.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) { var c = n.map(function(e, t) { return e = e.toString(r), i[t] && (e = "(" + e + ")"), e }); return this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === t ? c.join(" ") : c.join(" " + this.op + " ") } return this.fn + "(" + this.args.join(", ") + ")" }, o.prototype.toJSON = function() { return { mathjs: "OperatorNode", op: this.op, fn: this.fn, args: this.args, implicit: this.implicit } }, o.fromJSON = function(e) { return new o(e.op, e.fn, e.args, e.implicit) }, o.prototype.toHTML = function(r) { var e = r && r.parenthesis ? r.parenthesis : "keep",
                    t = r && r.implicit ? r.implicit : "hide",
                    n = this.args,
                    i = m(this, e, t, n, !1); if (1 === n.length) { var o = b.getAssociativity(this, e),
                        a = n[0].toHTML(r); return i[0] && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>'), "right" === o ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + f(this.op) + "</span>" + a : '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + f(this.op) + "</span>" + a } if (2 === n.length) { var s = n[0].toHTML(r),
                        u = n[1].toHTML(r); return i[0] && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), i[1] && (u = '<span class="math-parenthesis math-round-parenthesis">(</span>' + u + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === t ? s + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + u : s + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + f(this.op) + "</span>" + u } var c = n.map(function(e, t) { return e = e.toHTML(r), i[t] && (e = '<span class="math-parenthesis math-round-parenthesis">(</span>' + e + '<span class="math-parenthesis math-round-parenthesis">)</span>'), e }); return 2 < n.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier()) ? this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === t ? c.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : c.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + f(this.op) + "</span>") : '<span class="math-function">' + f(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + c.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>' }, o.prototype._toTex = function(r) { var e = r && r.parenthesis ? r.parenthesis : "keep",
                    t = r && r.implicit ? r.implicit : "hide",
                    n = this.args,
                    i = m(this, e, t, n, !0),
                    o = h.operators[this.fn]; if (o = void 0 === o ? this.op : o, 1 === n.length) { var a = b.getAssociativity(this, e),
                        s = n[0].toTex(r); return i[0] && (s = "\\left(".concat(s, "\\right)")), "right" === a ? o + s : s + o } if (2 === n.length) { var u = n[0],
                        c = u.toTex(r);
                    i[0] && (c = "\\left(".concat(c, "\\right)")); var f, l = n[1].toTex(r); switch (i[1] && (l = "\\left(".concat(l, "\\right)")), f = "keep" === e ? u.getIdentifier() : u.getContent().getIdentifier(), this.getIdentifier()) {
                        case "OperatorNode:divide":
                            return o + "{" + c + "}{" + l + "}";
                        case "OperatorNode:pow":
                            switch (c = "{" + c + "}", l = "{" + l + "}", f) {
                                case "ConditionalNode":
                                case "OperatorNode:divide":
                                    c = "\\left(".concat(c, "\\right)") } break;
                        case "OperatorNode:multiply":
                            if (this.implicit && "hide" === t) return c + "~" + l } return c + o + l } if (2 < n.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) { var p = n.map(function(e, t) { return e = e.toTex(r), i[t] && (e = "\\left(".concat(e, "\\right)")), e }); return "OperatorNode:multiply" === this.getIdentifier() && this.implicit ? p.join("~") : p.join(o) } return "\\mathrm{" + this.fn + "}\\left(" + n.map(function(e) { return e.toTex(r) }).join(",") + "\\right)" }, o.prototype.getIdentifier = function() { return this.type + ":" + this.fn }, o } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "isZero", t.factory = function(e, t, r, n) { var i = n("isZero", { number: function(e) { return 0 === e }, BigNumber: function(e) { return e.isZero() }, Complex: function(e) { return 0 === e.re && 0 === e.im }, Fraction: function(e) { return 1 === e.d && 0 === e.n }, Unit: function(e) { return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "isNegative", t.factory = function(e, t, r, n) { var i = n("isNegative", { number: function(e) { return e < 0 }, BigNumber: function(e) { return e.isNeg() && !e.isZero() && !e.isNaN() }, Fraction: function(e) { return e.s < 0 }, Unit: function(e) { return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i } }, function(e, t, r) { "use strict";
        e.exports = function(e) { return e && e.constructor.prototype.isMatrix || !1 } }, function(e, t, i) { "use strict";
        t.factory = function(e, t, r, n) { var u = r(i(24)); return function e(t) { for (var r, n = 0, i = 0; i < t.length; i++) { var o = t[i],
                        a = Array.isArray(o); if (0 === i && a && (n = o.length), a && o.length !== n) return; var s = a ? e(o) : u(o); if (void 0 === r) r = s;
                    else if (r !== s) return "mixed" } return r } } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "number", t.factory = function(e, t, r, n) { var i = n("number", { "": function() { return 0 }, number: function(e) { return e }, string: function(e) { if ("NaN" === e) return NaN; var t = Number(e); if (isNaN(t)) throw new SyntaxError('String "' + e + '" is no valid number'); return t }, BigNumber: function(e) { return e.toNumber() }, Fraction: function(e) { return e.valueOf() }, Unit: function(e) { throw new Error("Second argument with valueless unit expected") }, null: function(e) { return 0 }, "Unit, string | Unit": function(e, t) { return e.toNumber(t) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 0: "0", 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)" }, i } }, function(e, t, u) { "use strict";
        t.path = "type", t.name = "_numeric", t.factory = function(e, t, r, n) { var i = r(u(24)),
                o = { string: !0, number: !0, BigNumber: !0, Fraction: !0 },
                a = { number: r(u(63)), BigNumber: r(u(99)), Fraction: r(u(80)) },
                s = function(e, t) { var r = i(e); if (!(r in o)) throw new TypeError("Cannot convert " + e + ' of type "' + r + '"; valid input types are ' + Object.keys(o).join(", ")); if (!(t in a)) throw new TypeError("Cannot convert " + e + ' to type "' + t + '"; valid output types are ' + Object.keys(a).join(", ")); return t === r ? e : a[t](e) }; return s.toTex = function(e, t) { return e.args[0].toTex() }, s } }, function(e, t, n) { "use strict"; var q = n(8);
        t.name = "algorithm05", t.factory = function(e, t, r, P) { var R = r(n(11)),
                U = e.SparseMatrix; return function(e, t, r) { var n = e._values,
                    i = e._index,
                    o = e._ptr,
                    a = e._size,
                    s = e._datatype,
                    u = t._values,
                    c = t._index,
                    f = t._ptr,
                    l = t._size,
                    p = t._datatype; if (a.length !== l.length) throw new q(a.length, l.length); if (a[0] !== l[0] || a[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + l + ")"); var m, h = a[0],
                    d = a[1],
                    y = R,
                    g = 0,
                    v = r; "string" == typeof s && s === p && (m = s, y = P.find(R, [m, m]), g = P.convert(0, m), v = P.find(r, [m, m])); var x, b, w, N, M = n && u ? [] : void 0,
                    E = [],
                    A = [],
                    S = new U({ values: M, index: E, ptr: A, size: [h, d], datatype: m }),
                    O = M ? [] : void 0,
                    T = M ? [] : void 0,
                    _ = [],
                    C = []; for (b = 0; b < d; b++) { A[b] = E.length; var z = b + 1; for (w = o[b], N = o[b + 1]; w < N; w++) x = i[w], E.push(x), _[x] = z, O && (O[x] = n[w]); for (w = f[b], N = f[b + 1]; w < N; w++) _[x = c[w]] !== z && E.push(x), C[x] = z, T && (T[x] = u[w]); if (M)
                        for (w = A[b]; w < E.length;) { var B = _[x = E[w]],
                                k = C[x]; if (B === z || k === z) { var I = v(B === z ? O[x] : g, k === z ? T[x] : g);
                                y(I, g) ? E.splice(w, 1) : (M.push(I), w++) } } } return A[d] = E.length, S } } }, function(e, t, a) { "use strict";
        t.name = "ParenthesisNode", t.path = "expression.node", t.factory = function(t, e, r, n) { var i = r(a(16));

            function o(e) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if (!t.isNode(e)) throw new TypeError('Node expected for parameter "content"');
                this.content = e } return (o.prototype = new i).type = "ParenthesisNode", o.prototype.isParenthesisNode = !0, o.prototype._compile = function(e, t) { return this.content._compile(e, t) }, o.prototype.getContent = function() { return this.content.getContent() }, o.prototype.forEach = function(e) { e(this.content, "content", this) }, o.prototype.map = function(e) { return new o(e(this.content, "content", this)) }, o.prototype.clone = function() { return new o(this.content) }, o.prototype._toString = function(e) { return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "(" + this.content.toString(e) + ")" : this.content.toString(e) }, o.prototype.toJSON = function() { return { mathjs: "ParenthesisNode", content: this.content } }, o.fromJSON = function(e) { return new o(e.content) }, o.prototype.toHTML = function(e) { return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(e) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(e) }, o.prototype._toTex = function(e) { return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "\\left(".concat(this.content.toTex(e), "\\right)") : this.content.toTex(e) }, o } }, function(e, t, c) { "use strict";

        function f(e) { return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function v() { return (v = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }).apply(this, arguments) } var l = c(4),
            p = c(9).escape,
            m = c(5).hasOwnProperty,
            x = c(2).map,
            b = c(13).validateSafeMethod,
            w = c(13).getSafeProperty;
        t.name = "FunctionNode", t.path = "expression.node", t.math = !0, t.factory = function(y, e, t, r, i) { var n = t(c(16)),
                o = t(c(51));

            function g(e, t) { if (!(this instanceof g)) throw new SyntaxError("Constructor must be called with the new operator"); if ("string" == typeof e && (e = new o(e)), !y.isNode(e)) throw new TypeError('Node expected as parameter "fn"'); if (!Array.isArray(t) || !t.every(y.isNode)) throw new TypeError('Array containing Nodes expected for parameter "args"');
                this.fn = e, this.args = t || [], Object.defineProperty(this, "name", { get: function() { return this.fn.name || "" }.bind(this), set: function() { throw new Error("Cannot assign a new name, name is read-only") } }); var r = function() { throw new Error("Property `FunctionNode.object` is deprecated, use `FunctionNode.fn` instead") };
                Object.defineProperty(this, "object", { get: r, set: r }) }(g.prototype = new n).type = "FunctionNode", g.prototype.isFunctionNode = !0, g.prototype._compile = function(i, t) { if (!(this instanceof g)) throw new TypeError("No valid FunctionNode"); var o = x(this.args, function(e) { return e._compile(i, t) }); if (y.isSymbolNode(this.fn)) { var a = this.fn.name,
                        s = a in i ? w(i, a) : void 0; if ("function" == typeof s && !0 === s.rawArgs) { var n = this.args; return function(e, t, r) { return (a in e ? w(e, a) : s)(n, i, v({}, e, t)) } } if (1 === o.length) { var u = o[0]; return function(e, t, r) { return (a in e ? w(e, a) : s)(u(e, t, r)) } } if (2 !== o.length) return function(t, r, n) { return (a in t ? w(t, a) : s).apply(null, x(o, function(e) { return e(t, r, n) })) }; var c = o[0],
                        f = o[1]; return function(e, t, r) { return (a in e ? w(e, a) : s)(c(e, t, r), f(e, t, r)) } } if (y.isAccessorNode(this.fn) && y.isIndexNode(this.fn.index) && this.fn.index.isObjectProperty()) { var l = this.fn.object._compile(i, t),
                        p = this.fn.index.getObjectProperty(),
                        m = this.args; return function(t, r, n) { var e = l(t, r, n); return b(e, p), e[p] && e[p].rawArgs ? e[p](m, i, v({}, t, r)) : e[p].apply(e, x(o, function(e) { return e(t, r, n) })) } } var h = this.fn._compile(i, t),
                    d = this.args; return function(t, r, n) { var e = h(t, r, n); return e && e.rawArgs ? e(d, i, v({}, t, r)) : e.apply(e, x(o, function(e) { return e(t, r, n) })) } }, g.prototype.forEach = function(e) { for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this) }, g.prototype.map = function(e) { for (var t = this.fn.map(e), r = [], n = 0; n < this.args.length; n++) r[n] = this._ifNode(e(this.args[n], "args[" + n + "]", this)); return new g(t, r) }, g.prototype.clone = function() { return new g(this.fn, this.args.slice(0)) }; var a = g.prototype.toString;

            function s(e, t, r) { for (var n, i = "", o = new RegExp("\\$(?:\\{([a-z_][a-z_0-9]*)(?:\\[([0-9]+)\\])?\\}|\\$)", "ig"), a = 0; null !== (n = o.exec(e));)
                    if (i += e.substring(a, n.index), a = n.index, "$$" === n[0]) i += "$", a++;
                    else { a += n[0].length; var s = t[n[1]]; if (!s) throw new ReferenceError("Template: Property " + n[1] + " does not exist."); if (void 0 === n[2]) switch (f(s)) {
                            case "string":
                                i += s; break;
                            case "object":
                                if (y.isNode(s)) i += s.toTex(r);
                                else { if (!Array.isArray(s)) throw new TypeError("Template: " + n[1] + " has to be a Node, String or array of Nodes");
                                    i += s.map(function(e, t) { if (y.isNode(e)) return e.toTex(r); throw new TypeError("Template: " + n[1] + "[" + t + "] is not a Node.") }).join(",") } break;
                            default:
                                throw new TypeError("Template: " + n[1] + " has to be a Node, String or array of Nodes") } else { if (!y.isNode(s[n[2]] && s[n[2]])) throw new TypeError("Template: " + n[1] + "[" + n[2] + "] is not a Node.");
                            i += s[n[2]].toTex(r) } }
                return i += e.slice(a) }
            g.prototype.toString = function(e) { var t, r = this.fn.toString(e); return e && "object" === f(e.handler) && m(e.handler, r) && (t = e.handler[r](this, e)), void 0 !== t ? t : a.call(this, e) }, g.prototype._toString = function(t) { var e = this.args.map(function(e) { return e.toString(t) }); return (y.isFunctionAssignmentNode(this.fn) ? "(" + this.fn.toString(t) + ")" : this.fn.toString(t)) + "(" + e.join(", ") + ")" }, g.prototype.toJSON = function() { return { mathjs: "FunctionNode", fn: this.fn, args: this.args } }, g.fromJSON = function(e) { return new g(e.fn, e.args) }, g.prototype.toHTML = function(t) { var e = this.args.map(function(e) { return e.toHTML(t) }); return '<span class="math-function">' + p(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + e.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>' }; var u = g.prototype.toTex; return g.prototype.toTex = function(e) { var t; return e && "object" === f(e.handler) && m(e.handler, this.name) && (t = e.handler[this.name](this, e)), void 0 !== t ? t : u.call(this, e) }, g.prototype._toTex = function(t) { var e, r, n = this.args.map(function(e) { return e.toTex(t) }); switch (!i[this.name] || "function" != typeof i[this.name].toTex && "object" !== f(i[this.name].toTex) && "string" != typeof i[this.name].toTex || (e = i[this.name].toTex), f(e)) {
                    case "function":
                        r = e(this, t); break;
                    case "string":
                        r = s(e, this, t); break;
                    case "object":
                        switch (f(e[n.length])) {
                            case "function":
                                r = e[n.length](this, t); break;
                            case "string":
                                r = s(e[n.length], this, t) } } return void 0 !== r ? r : s(l.defaultTemplate, this, t) }, g.prototype.getIdentifier = function() { return this.type + ":" + this.name }, g } }, function(e, t, s) { "use strict"; var u = s(30);
        t.name = "inv", t.factory = function(i, e, t, r) { var o = t(s(1)),
                v = t(s(12)),
                x = t(s(17)),
                b = t(s(10)),
                w = t(s(34)),
                N = t(s(121)),
                M = t(s(48)),
                E = t(s(23)),
                n = r("inv", { "Array | Matrix": function(e) { var t = i.isMatrix(e) ? e.size() : u.array.size(e); switch (t.length) {
                            case 1:
                                if (1 === t[0]) return i.isMatrix(e) ? o([v(1, e.valueOf()[0])]) : [v(1, e[0])]; throw new RangeError("Matrix must be square (size: " + u.string.format(t) + ")");
                            case 2:
                                var r = t[0],
                                    n = t[1]; if (r === n) return i.isMatrix(e) ? o(a(e.valueOf(), r, n), e.storage()) : a(e, r, n); throw new RangeError("Matrix must be square (size: " + u.string.format(t) + ")");
                            default:
                                throw new RangeError("Matrix must be two dimensional (size: " + u.string.format(t) + ")") } }, any: function(e) { return v(1, e) } });

            function a(e, t, r) { var n, i, o, a, s; if (1 === t) { if (0 === (a = e[0][0])) throw Error("Cannot calculate inverse, determinant is zero"); return [
                        [v(1, a)]
                    ] } if (2 === t) { var u = N(e); if (0 === u) throw Error("Cannot calculate inverse, determinant is zero"); return [
                        [v(e[1][1], u), v(w(e[0][1]), u)],
                        [v(w(e[1][0]), u), v(e[0][0], u)]
                    ] } var c = e.concat(); for (n = 0; n < t; n++) c[n] = c[n].concat(); for (var f = M(t).valueOf(), l = 0; l < r; l++) { var p = E(c[l][l]),
                        m = l; for (n = l + 1; n < t;) E(c[n][l]) > p && (p = E(c[n][l]), m = n), n++; if (0 === p) throw Error("Cannot calculate inverse, determinant is zero");
                    (n = m) !== l && (s = c[l], c[l] = c[n], c[n] = s, s = f[l], f[l] = f[n], f[n] = s); var h = c[l],
                        d = f[l]; for (n = 0; n < t; n++) { var y = c[n],
                            g = f[n]; if (n !== l) { if (0 !== y[l]) { for (o = v(w(y[l]), h[l]), i = l; i < r; i++) y[i] = x(y[i], b(o, h[i])); for (i = 0; i < r; i++) g[i] = x(g[i], b(o, d[i])) } } else { for (o = h[l], i = l; i < r; i++) y[i] = v(y[i], o); for (i = 0; i < r; i++) g[i] = v(g[i], o) } } } return f } return n.toTex = { 1: "\\left(${args[0]}\\right)^{-1}" }, n } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "conj", t.factory = function(e, t, r, n) { var i = n("conj", { number: function(e) { return e }, BigNumber: function(e) { return e }, Complex: function(e) { return e.conjugate() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\left(${args[0]}\\right)^*" }, i } }, function(e, t, s) { "use strict"; var w = s(5).clone,
            c = s(9).format;
        t.name = "transpose", t.factory = function(e, t, r, n) { var i = s(4),
                o = r(s(1)),
                u = e.DenseMatrix,
                b = e.SparseMatrix,
                a = n("transpose", { Array: function(e) { return a(o(e)).valueOf() }, Matrix: function(e) { var t, r = e.size(); switch (r.length) {
                            case 1:
                                t = e.clone(); break;
                            case 2:
                                var n = r[0],
                                    i = r[1]; if (0 === i) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + c(r) + ")"); switch (e.storage()) {
                                    case "dense":
                                        t = function(e, t, r) { for (var n, i = e._data, o = [], a = 0; a < r; a++) { n = o[a] = []; for (var s = 0; s < t; s++) n[s] = w(i[s][a]) } return new u({ data: o, size: [r, t], datatype: e._datatype }) }(e, n, i); break;
                                    case "sparse":
                                        t = function(e, t, r) { for (var n, i, o, a = e._values, s = e._index, u = e._ptr, c = a ? [] : void 0, f = [], l = [], p = [], m = 0; m < t; m++) p[m] = 0; for (n = 0, i = s.length; n < i; n++) p[s[n]]++; for (var h = 0, d = 0; d < t; d++) l.push(h), h += p[d], p[d] = l[d]; for (l.push(h), o = 0; o < r; o++)
                                                for (var y = u[o], g = u[o + 1], v = y; v < g; v++) { var x = p[s[v]]++;
                                                    f[x] = o, a && (c[x] = w(a[v])) }
                                            return new b({ values: c, index: f, ptr: l, size: [r, t], datatype: e._datatype }) }(e, n, i) } break;
                            default:
                                throw new RangeError("Matrix must be a vector or two dimensional (size: " + c(this._size) + ")") } return t }, any: function(e) { return w(e) } }); return a.toTex = { 1: "\\left(${args[0]}\\right)".concat(i.operators.transpose) }, a } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "isPositive", t.factory = function(e, t, r, n) { var i = n("isPositive", { number: function(e) { return 0 < e }, BigNumber: function(e) { return !e.isNeg() && !e.isZero() && !e.isNaN() }, Fraction: function(e) { return 0 < e.s && 0 < e.n }, Unit: function(e) { return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i } }, function(e, t, n) { "use strict"; var z = n(229),
            B = n(8);
        t.name = "algorithm06", t.factory = function(e, t, r, T) { var _ = r(n(11)),
                C = e.SparseMatrix; return function(e, t, r) { var n = e._values,
                    i = e._size,
                    o = e._datatype,
                    a = t._values,
                    s = t._size,
                    u = t._datatype; if (i.length !== s.length) throw new B(i.length, s.length); if (i[0] !== s[0] || i[1] !== s[1]) throw new RangeError("Dimension mismatch. Matrix A (" + i + ") must match Matrix B (" + s + ")"); var c, f = i[0],
                    l = i[1],
                    p = _,
                    m = 0,
                    h = r; "string" == typeof o && o === u && (c = o, p = T.find(_, [c, c]), m = T.convert(0, c), h = T.find(r, [c, c])); for (var d = n && a ? [] : void 0, y = [], g = [], v = new C({ values: d, index: y, ptr: g, size: [f, l], datatype: c }), x = d ? [] : void 0, b = [], w = [], N = 0; N < l; N++) { g[N] = y.length; var M = N + 1; if (z(e, N, b, x, w, M, v, h), z(t, N, b, x, w, M, v, h), x)
                        for (var E = g[N]; E < y.length;) { var A = y[E]; if (w[A] === M) { var S = x[A];
                                p(S, m) ? y.splice(E, 1) : (d.push(S), E++) } else y.splice(E, 1) } else
                            for (var O = g[N]; O < y.length;) w[y[O]] !== M ? y.splice(O, 1) : O++ } return g[l] = y.length, v } } }, function(e, t, s) { "use strict"; var u = s(0);
        t.name = "factorial", t.factory = function(e, t, r, n) { var i = r(s(135)),
                o = s(4),
                a = n("factorial", { number: function(e) { if (e < 0) throw new Error("Value must be non-negative"); return i(e + 1) }, BigNumber: function(e) { if (e.isNegative()) throw new Error("Value must be non-negative"); return i(e.plus(1)) }, "Array | Matrix": function(e) { return u(e, a) } }); return a.toTex = { 1: "\\left(${args[0]}\\right)".concat(o.operators.factorial) }, a } }, function(e, t, r) { "use strict"; var i = r(3).isInteger,
            o = r(91);

        function u(e) { return e.isInteger() && e.gte(0) }
        t.name = "combinations", t.factory = function(s, e, t, r) { var n = r("combinations", { "number, number": function(e, t) { var r; if (!i(e) || e < 0) throw new TypeError("Positive integer value expected in function combinations"); if (!i(t) || t < 0) throw new TypeError("Positive integer value expected in function combinations"); if (e < t) throw new TypeError("k must be less than or equal to n"); return t < (r = e - t) ? o(r + 1, e) / o(1, t) : o(t + 1, e) / o(1, r) }, "BigNumber, BigNumber": function(e, t) { var r, n, i, o, a = new s.BigNumber(1); if (!u(e) || !u(t)) throw new TypeError("Positive integer value expected in function combinations"); if (t.gt(e)) throw new TypeError("k must be less than n in function combinations"); for (r = e.minus(t), t.lt(r) && (r = t), i = n = a, o = e.minus(r); i.lte(o); i = i.plus(1)) n = n.times(r.plus(i)).dividedBy(i); return n } }); return n.toTex = { 2: "\\binom{${args[0]}}{${args[1]}}" }, n } }, function(e, t, i) { "use strict"; var h = i(5).clone,
            d = i(2),
            y = i(54),
            g = i(8);

        function v(e, t, r, n) { if (n < r) { if (e.length !== t.length) throw new g(e.length, t.length); for (var i = [], o = 0; o < e.length; o++) i[o] = v(e[o], t[o], r, n + 1); return i } return e.concat(t) }
        t.name = "concat", t.factory = function(l, e, t, r) { var p = t(i(1)),
                m = t(i(35)),
                n = r("concat", { "...Array | Matrix | number | BigNumber": function(e) { var t, r, n = e.length,
                            i = -1,
                            o = !1,
                            a = []; for (t = 0; t < n; t++) { var s = e[t]; if (l.isMatrix(s) && (o = !0), l.isNumber(s) || l.isBigNumber(s)) { if (t !== n - 1) throw new Error("Dimension must be specified as last argument"); if (r = i, i = s.valueOf(), !m(i)) throw new TypeError("Integer number expected for dimension"); if (i < 0 || 0 < t && r < i) throw new y(i, r + 1) } else { var u = h(s).valueOf(),
                                    c = d.size(u); if (a[t] = u, r = i, i = c.length - 1, 0 < t && i !== r) throw new g(r + 1, i + 1) } } if (0 === a.length) throw new SyntaxError("At least one matrix expected"); for (var f = a.shift(); a.length;) f = v(f, a.shift(), i, 0); return o ? p(f) : f }, "...string": function(e) { return e.join("") } }); return n.toTex = void 0, n } }, function(e, t, r) { "use strict"; var i = r(0);
        t.name = "isNaN", t.factory = function(e, t, r, n) { return n("isNaN", { number: function(e) { return Number.isNaN(e) }, BigNumber: function(e) { return e.isNaN() }, Fraction: function(e) { return !1 }, Complex: function(e) { return e.isNaN() }, Unit: function(e) { return Number.isNaN(e.value) }, "Array | Matrix": function(e) { return i(e, Number.isNaN) } }) } }, function(e, t, r) { "use strict"; var n = r(53);
        e.exports = function(e) { for (var t = 0; t < e.length; t++)
                if (n(e[t])) return !0;
            return !1 } }, function(e, t, r) { "use strict";
        e.exports = function(e) { return e && e.constructor.prototype.isBigNumber || !1 } }, function(e, t, r) { "use strict";

        function o(e) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var a = r(171),
            s = r(3).format,
            u = r(3).isNumber;
        t.name = "Complex", t.path = "type", t.factory = function(i, e, t, r, n) { return a.prototype.type = "Complex", a.prototype.isComplex = !0, a.prototype.toJSON = function() { return { mathjs: "Complex", re: this.re, im: this.im } }, a.prototype.toPolar = function() { return { r: this.abs(), phi: this.arg() } }, a.prototype.format = function(e) { var t = this.im,
                    r = this.re,
                    n = s(this.re, e),
                    i = s(this.im, e),
                    o = u(e) ? e : e ? e.precision : null; if (null !== o) { var a = Math.pow(10, -o);
                    Math.abs(r / t) < a && (r = 0), Math.abs(t / r) < a && (t = 0) } return 0 === t ? n : 0 === r ? 1 === t ? "i" : -1 === t ? "-i" : i + "i" : t < 0 ? -1 === t ? n + " - i" : n + " - " + i.substring(1) + "i" : 1 === t ? n + " + i" : n + " + " + i + "i" }, a.fromPolar = function(e) { switch (arguments.length) {
                    case 1:
                        var t = e; if ("object" === o(t)) return a(t); throw new TypeError("Input has to be an object with r and phi keys.");
                    case 2:
                        var r = e,
                            n = arguments[1]; if (u(r)) { if (i.isUnit(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")), u(n)) return new a({ r: r, phi: n }); throw new TypeError("Phi is not a number nor an angle unit.") } throw new TypeError("Radius r is not a number.");
                    default:
                        throw new SyntaxError("Wrong number of arguments in function fromPolar") } }, a.prototype.valueOf = a.prototype.toString, a.fromJSON = function(e) { return new a(e) }, a.EPSILON = e.epsilon, n.on("config", function(e, t) { e.epsilon !== t.epsilon && (a.EPSILON = e.epsilon) }), a.compare = function(e, t) { return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0 }, a }, t.math = !0 }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "fraction", t.factory = function(r, e, t, n) { var i = n("fraction", { number: function(e) { if (!isFinite(e) || isNaN(e)) throw new Error(e + " cannot be represented as a fraction"); return new r.Fraction(e) }, string: function(e) { return new r.Fraction(e) }, "number, number": function(e, t) { return new r.Fraction(e, t) }, null: function(e) { return new r.Fraction(0) }, BigNumber: function(e) { return new r.Fraction(e.toString()) }, Fraction: function(e) { return e }, Object: function(e) { return new r.Fraction(e) }, "Array | Matrix": function(e) { return o(e, i) } }); return i } }, function(e, t, r) { "use strict"; var o = r(30).string.isString;
        t.name = "Matrix", t.path = "type", t.factory = function(e, t, r, n) {
            function i() { if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator") } return i.prototype.type = "Matrix", i.prototype.isMatrix = !0, i.storage = function(e) { if (!o(e)) throw new TypeError("format must be a string value"); var t = i._storage[e]; if (!t) throw new SyntaxError("Unsupported matrix storage format: " + e); return t }, i._storage = {}, i.prototype.storage = function() { throw new Error("Cannot invoke storage on a Matrix interface") }, i.prototype.datatype = function() { throw new Error("Cannot invoke datatype on a Matrix interface") }, i.prototype.create = function(e, t) { throw new Error("Cannot invoke create on a Matrix interface") }, i.prototype.subset = function(e, t, r) { throw new Error("Cannot invoke subset on a Matrix interface") }, i.prototype.get = function(e) { throw new Error("Cannot invoke get on a Matrix interface") }, i.prototype.set = function(e, t, r) { throw new Error("Cannot invoke set on a Matrix interface") }, i.prototype.resize = function(e, t) { throw new Error("Cannot invoke resize on a Matrix interface") }, i.prototype.reshape = function(e, t) { throw new Error("Cannot invoke reshape on a Matrix interface") }, i.prototype.clone = function() { throw new Error("Cannot invoke clone on a Matrix interface") }, i.prototype.size = function() { throw new Error("Cannot invoke size on a Matrix interface") }, i.prototype.map = function(e, t) { throw new Error("Cannot invoke map on a Matrix interface") }, i.prototype.forEach = function(e) { throw new Error("Cannot invoke forEach on a Matrix interface") }, i.prototype.toArray = function() { throw new Error("Cannot invoke toArray on a Matrix interface") }, i.prototype.valueOf = function() { throw new Error("Cannot invoke valueOf on a Matrix interface") }, i.prototype.format = function(e) { throw new Error("Cannot invoke format on a Matrix interface") }, i.prototype.toString = function() { throw new Error("Cannot invoke toString on a Matrix interface") }, i } }, function(e, t, n) { "use strict"; var U = n(8);
        t.name = "algorithm04", t.factory = function(e, t, r, I) { var P = r(n(11)),
                R = e.SparseMatrix; return function(e, t, r) { var n = e._values,
                    i = e._index,
                    o = e._ptr,
                    a = e._size,
                    s = e._datatype,
                    u = t._values,
                    c = t._index,
                    f = t._ptr,
                    l = t._size,
                    p = t._datatype; if (a.length !== l.length) throw new U(a.length, l.length); if (a[0] !== l[0] || a[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + l + ")"); var m, h = a[0],
                    d = a[1],
                    y = P,
                    g = 0,
                    v = r; "string" == typeof s && s === p && (m = s, y = I.find(P, [m, m]), g = I.convert(0, m), v = I.find(r, [m, m])); var x, b, w, N, M, E = n && u ? [] : void 0,
                    A = [],
                    S = [],
                    O = new R({ values: E, index: A, ptr: S, size: [h, d], datatype: m }),
                    T = n && u ? [] : void 0,
                    _ = n && u ? [] : void 0,
                    C = [],
                    z = []; for (b = 0; b < d; b++) { S[b] = A.length; var B = b + 1; for (N = o[b], M = o[b + 1], w = N; w < M; w++) x = i[w], A.push(x), C[x] = B, T && (T[x] = n[w]); for (N = f[b], M = f[b + 1], w = N; w < M; w++)
                        if (C[x = c[w]] === B) { if (T) { var k = v(T[x], u[w]);
                                y(k, g) ? C[x] = null : T[x] = k } } else A.push(x), z[x] = B, _ && (_[x] = u[w]);
                    if (T && _)
                        for (w = S[b]; w < A.length;) C[x = A[w]] === B ? (E[w] = T[x], w++) : z[x] === B ? (E[w] = _[x], w++) : A.splice(w, 1) } return S[d] = A.length, O } } }, function(e, t, z) { "use strict";

        function B(e) { return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
        t.math = !0, t.name = "simplify", t.factory = function(l, e, t, r, p) { var c = t(z(42)),
                m = t(z(49)),
                h = t(z(57)),
                d = t(z(67)),
                y = t(z(58)),
                s = t(z(66)),
                g = t(z(51)),
                n = t(z(118)),
                i = t(z(120)),
                u = t(z(199)),
                o = t(z(119)),
                v = o.isCommutative,
                x = o.isAssociative,
                f = o.flatten,
                b = o.unflattenr,
                w = o.unflattenl,
                N = o.createMakeNodeFunction,
                a = r("simplify", { string: function(e) { return a(c(e), a.rules, {}, {}) }, "string, Object": function(e, t) { return a(c(e), a.rules, t, {}) }, "string, Object, Object": function(e, t, r) { return a(c(e), a.rules, t, r) }, "string, Array": function(e, t) { return a(c(e), t, {}, {}) }, "string, Array, Object": function(e, t, r) { return a(c(e), t, r, {}) }, "string, Array, Object, Object": function(e, t, r, n) { return a(c(e), t, r, n) }, "Node, Object": function(e, t) { return a(e, a.rules, t, {}) }, "Node, Object, Object": function(e, t, r) { return a(e, a.rules, t, r) }, Node: function(e) { return a(e, a.rules, {}, {}) }, "Node, Array": function(e, t) { return a(e, t, {}, {}) }, "Node, Array, Object": function(e, t, r) { return a(e, t, r, {}) }, "Node, Array, Object, Object": function(e, t, r, n) { t = function(e) { for (var t = [], r = 0; r < e.length; r++) { var n = e[r],
                                    i = void 0,
                                    o = B(n); switch (o) {
                                    case "string":
                                        var a = n.split("->"); if (2 !== a.length) throw SyntaxError("Could not parse rule: " + n);
                                        n = { l: a[0], r: a[1] };
                                    case "object":
                                        if (i = { l: M(c(n.l)), r: M(c(n.r)) }, n.context && (i.evaluate = n.context), n.evaluate && (i.evaluate = c(n.evaluate)), x(i.l)) { var s = N(i.l),
                                                u = new g("_p" + A++);
                                            i.expanded = {}, i.expanded.l = s([i.l.clone(), u]), f(i.expanded.l), b(i.expanded.l), i.expanded.r = s([i.r, u]) } break;
                                    case "function":
                                        i = n; break;
                                    default:
                                        throw TypeError("Unsupported type of rule: " + o) }
                                t.push(i) } return t }(t); for (var i = u(e, r), o = {}, a = (i = M(i)).toString({ parenthesis: "all" }); !o[a];) { o[a] = !0; for (var s = A = 0; s < t.length; s++) i = "function" == typeof t[s] ? t[s](i, n) : (f(i), S(i, t[s])), w(i);
                            a = i.toString({ parenthesis: "all" }) } return i } });

            function M(e) { return e.transform(function(e, t, r) { return l.isParenthesisNode(e) ? e.content : e }) }
            a.simplifyCore = i, a.resolve = u; var E = { true: !0, false: !0, e: !0, i: !0, Infinity: !0, LN2: !0, LN10: !0, LOG2E: !0, LOG10E: !0, NaN: !0, phi: !0, pi: !0, SQRT1_2: !0, SQRT2: !0, tau: !0 };
            a.rules = [i, { l: "log(e)", r: "1" }, { l: "n-n1", r: "n+-n1" }, { l: "-(c*v)", r: "(-c) * v" }, { l: "-v", r: "(-1) * v" }, { l: "n/n1^n2", r: "n*n1^-n2" }, { l: "n/n1", r: "n*n1^-1" }, { l: "(n ^ n1) ^ n2", r: "n ^ (n1 * n2)" }, { l: "n*n", r: "n^2" }, { l: "n * n^n1", r: "n^(n1+1)" }, { l: "n^n1 * n^n2", r: "n^(n1+n2)" }, { l: "n+n", r: "2*n" }, { l: "n+-n", r: "0" }, { l: "n1*n2 + n2", r: "(n1+1)*n2" }, { l: "n1*n3 + n2*n3", r: "(n1+n2)*n3" }, { l: "n1 + -1 * (n2 + n3)", r: "n1 + -1 * n2 + -1 * n3" }, n, { l: "(-n)*n1", r: "-(n*n1)" }, { l: "c+v", r: "v+c", context: { add: { commutative: !1 } } }, { l: "v*c", r: "c*v", context: { multiply: { commutative: !1 } } }, { l: "n+-n1", r: "n-n1" }, { l: "n*(n1^-1)", r: "n/n1" }, { l: "n*n1^-n2", r: "n/n1^n2" }, { l: "n1^-1", r: "1/n1" }, { l: "n*(n1/n2)", r: "(n*n1)/n2" }, { l: "n-(n1+n2)", r: "n-n1-n2" }, { l: "1*n", r: "n" }]; var A = 0,
                S = r("applyRule", { "Node, Object": function(e, t) { var r = e; if (r instanceof y || r instanceof d) { if (r.args)
                                for (var n = 0; n < r.args.length; n++) r.args[n] = S(r.args[n], t) } else r instanceof s && r.content && (r.content = S(r.content, t)); var i = t.r,
                            o = _(t.l, r)[0]; if (!o && t.expanded && (i = t.expanded.r, o = _(t.expanded.l, r)[0]), o) { var a = r.implicit;
                            r = i.clone(), a && "implicit" in i && (r.implicit = !0), r = function e(t) { return t.isSymbolNode && o.placeholders.hasOwnProperty(t.name) ? o.placeholders[t.name].clone() : t.map(e) }(r) } return r } });

            function O(e, t) { var r = { placeholders: {} }; if (!e.placeholders && !t.placeholders) return r; if (!e.placeholders) return t; if (!t.placeholders) return e; for (var n in e.placeholders)
                    if (r.placeholders[n] = e.placeholders[n], t.placeholders.hasOwnProperty(n) && !C(e.placeholders[n], t.placeholders[n])) return null;
                for (var i in t.placeholders) r.placeholders[i] = t.placeholders[i]; return r }

            function T(e, t) { var r, n = []; if (0 === e.length || 0 === t.length) return n; for (var i = 0; i < e.length; i++)
                    for (var o = 0; o < t.length; o++)(r = O(e[i], t[o])) && n.push(r); return n }

            function _(e, t, r) { var n = [{ placeholders: {} }]; if (e instanceof y && t instanceof y || e instanceof d && t instanceof d) { if (e instanceof y) { if (e.op !== t.op || e.fn !== t.fn) return [] } else if (e instanceof d && e.name !== t.name) return []; if ((1 !== t.args.length || 1 !== e.args.length) && x(t) && !r) { if (2 <= t.args.length && 2 === e.args.length) { for (var i = function(e, t) { var r, n, i = [],
                                        o = N(e); if (v(e, t))
                                        for (var a = 0; a < e.args.length; a++)(n = e.args.slice(0)).splice(a, 1), r = 1 === n.length ? n[0] : o(n), i.push(o([e.args[a], r]));
                                    else r = 1 === (n = e.args.slice(1)).length ? n[0] : o(n), i.push(o([e.args[0], r])); return i }(t, e.context), o = [], a = 0; a < i.length; a++) { var s = _(e, i[a], !0);
                                o = o.concat(s) } return o } if (2 < e.args.length) throw Error("Unexpected non-binary associative function: " + e.toString()); return [] } for (var u = [], c = 0; c < e.args.length; c++) { var f = _(e.args[c], t.args[c]); if (0 === f.length) return [];
                        u.push(f) }
                    n = function(e) { if (0 === e.length) return e; for (var t = e.reduce(T), r = [], n = {}, i = 0; i < t.length; i++) { var o = JSON.stringify(t[i]);
                            n[o] || (n[o] = !0, r.push(t[i])) } return r }(u) } else if (e instanceof g) { if (0 === e.name.length) throw new Error("Symbol in rule has 0 length...!?"); if (p.hasOwnProperty(e.name)) { if (!E[e.name]) throw new Error("Built in constant: " + e.name + " is not supported by simplify."); if (e.name !== t.name) return [] } else if ("n" === e.name[0] || "_p" === e.name.substring(0, 2)) n[0].placeholders[e.name] = t;
                    else if ("v" === e.name[0]) { if (l.isConstantNode(t)) return [];
                        n[0].placeholders[e.name] = t } else { if ("c" !== e.name[0]) throw new Error("Invalid symbol in rule: " + e.name); if (!(t instanceof h)) return [];
                        n[0].placeholders[e.name] = t } } else { if (!(e instanceof h)) return []; if (!m(e.value, t.value)) return [] } return n }

            function C(e, t) { if (e instanceof h && t instanceof h) { if (!m(e.value, t.value)) return !1 } else if (e instanceof g && t instanceof g) { if (e.name !== t.name) return !1 } else { if (!(e instanceof y && t instanceof y || e instanceof d && t instanceof d)) return !1; if (e instanceof y) { if (e.op !== t.op || e.fn !== t.fn) return !1 } else if (e instanceof d && e.name !== t.name) return !1; if (e.args.length !== t.args.length) return !1; for (var r = 0; r < e.args.length; r++)
                        if (!C(e.args[r], t.args[r])) return !1 } return !0 } return a } }, function(e, t, a) { "use strict"; var P = a(30).object;
        t.name = "lup", t.factory = function(e, t, r, n) { var i = r(a(1)),
                O = r(a(23)),
                E = r(a(17)),
                T = r(a(12)),
                _ = r(a(21)),
                A = r(a(15)),
                C = r(a(33)),
                z = r(a(11)),
                B = r(a(34)),
                k = e.SparseMatrix,
                S = e.DenseMatrix,
                I = e.Spa;

            function o(e) { var t, r, n, i = e._size[0],
                    o = e._size[1],
                    a = Math.min(i, o),
                    s = P.clone(e._data),
                    u = [],
                    c = [i, a],
                    f = [],
                    l = [a, o],
                    p = []; for (t = 0; t < i; t++) p[t] = t; for (r = 0; r < o; r++) { if (0 < r)
                        for (t = 0; t < i; t++) { var m = Math.min(t, r),
                                h = 0; for (n = 0; n < m; n++) h = E(h, _(s[t][n], s[n][r]));
                            s[t][r] = A(s[t][r], h) }
                    var d = r,
                        y = 0,
                        g = 0; for (t = r; t < i; t++) { var v = s[t][r],
                            x = O(v);
                        C(x, y) && (d = t, y = x, g = v) } if (r !== d && (p[r] = [p[d], p[d] = p[r]][0], S._swapRows(r, d, s)), r < i)
                        for (t = r + 1; t < i; t++) { var b = s[t][r];
                            z(b, 0) || (s[t][r] = T(s[t][r], g)) } } for (r = 0; r < o; r++)
                    for (t = 0; t < i; t++) 0 === r && (t < o && (f[t] = []), u[t] = []), t < r ? (t < o && (f[t][r] = s[t][r]), r < i && (u[t][r] = 0)) : t !== r ? (t < o && (f[t][r] = 0), r < i && (u[t][r] = s[t][r])) : (t < o && (f[t][r] = s[t][r]), r < i && (u[t][r] = 1)); var w = new S({ data: u, size: c }),
                    N = new S({ data: f, size: l }),
                    M = []; for (t = 0, a = p.length; t < a; t++) M[p[t]] = t; return { L: w, U: N, p: M, toString: function() { return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p } } } return n("lup", { DenseMatrix: function(e) { return o(e) }, SparseMatrix: function(e) { return function(e) { var f, l, p, m = e._size[0],
                            t = e._size[1],
                            r = Math.min(m, t),
                            h = e._values,
                            d = e._index,
                            y = e._ptr,
                            g = [],
                            v = [],
                            x = [],
                            b = [m, r],
                            w = [],
                            N = [],
                            M = [],
                            E = [r, t],
                            A = [],
                            S = []; for (f = 0; f < m; f++) A[f] = f, S[f] = f; var n = function() { var i = new I;
                            l < m && (x.push(g.length), g.push(1), v.push(l)), M.push(w.length); var e = y[l],
                                t = y[l + 1]; for (p = e; p < t; p++) f = d[p], i.set(A[f], h[p]);
                            0 < l && i.forEach(0, l - 1, function(r, n) { k._forEachRow(r, g, v, x, function(e, t) { r < e && i.accumulate(e, B(_(t, n))) }) }); var r, n, o, a, s = l,
                                u = i.get(l),
                                c = O(u);
                            i.forEach(l + 1, m - 1, function(e, t) { var r = O(t);
                                C(r, c) && (s = e, c = r, u = t) }), l !== s && (k._swapRows(l, s, b[1], g, v, x), k._swapRows(l, s, E[1], w, N, M), i.swap(l, s), n = s, o = S[r = l], a = S[n], A[o] = n, A[a] = r, S[r] = a, S[n] = o), i.forEach(0, m - 1, function(e, t) { e <= l ? (w.push(t), N.push(e)) : (t = T(t, u), z(t, 0) || (g.push(t), v.push(e))) }) }; for (l = 0; l < t; l++) n(); return M.push(w.length), x.push(g.length), { L: new k({ values: g, index: v, ptr: x, size: b }), U: new k({ values: w, index: N, ptr: M, size: E }), p: A, toString: function() { return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p } } }(e) }, Array: function(e) { var t = o(i(e)); return { L: t.L.valueOf(), U: t.U.valueOf(), p: t.p } } }) } }, function(e, t, r) { "use strict";
        t.name = "csFlip", t.path = "algebra.sparse", t.factory = function() { return function(e) { return -e - 2 } } }, function(e, t, r) { "use strict"; var n = r(30),
            g = n.string,
            v = n.array,
            x = Array.isArray;
        t.factory = function(d) { var y = d.DenseMatrix; return function(e, t, r) { var n = e.size(); if (2 !== n.length) throw new RangeError("Matrix must be two dimensional (size: " + g.format(n) + ")"); var i, o, a, s = n[0]; if (s !== n[1]) throw new RangeError("Matrix must be square (size: " + g.format(n) + ")"); if (d.isMatrix(t)) { var u = t.size(); if (1 === u.length) { if (u[0] !== s) throw new RangeError("Dimension mismatch. Matrix columns must match vector length."); for (i = [], a = t._data, o = 0; o < s; o++) i[o] = [a[o]]; return new y({ data: i, size: [s, 1], datatype: t._datatype }) } if (2 !== u.length) throw new RangeError("Dimension mismatch. Matrix columns must match vector length."); if (u[0] !== s || 1 !== u[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length."); if (d.isDenseMatrix(t)) { if (r) { for (i = [], a = t._data, o = 0; o < s; o++) i[o] = [a[o][0]]; return new y({ data: i, size: [s, 1], datatype: t._datatype }) } return t } for (i = [], o = 0; o < s; o++) i[o] = [0]; for (var c = t._values, f = t._index, l = t._ptr, p = l[1], m = l[0]; m < p; m++) i[o = f[m]][0] = c[m]; return new y({ data: i, size: [s, 1], datatype: t._datatype }) } if (x(t)) { var h = v.size(t); if (1 === h.length) { if (h[0] !== s) throw new RangeError("Dimension mismatch. Matrix columns must match vector length."); for (i = [], o = 0; o < s; o++) i[o] = [t[o]]; return new y({ data: i, size: [s, 1] }) } if (2 !== h.length) throw new RangeError("Dimension mismatch. Matrix columns must match vector length."); if (h[0] !== s || 1 !== h[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length."); for (i = [], o = 0; o < s; o++) i[o] = [t[o][0]]; return new y({ data: i, size: [s, 1] }) } } } }, function(e, t, a) { "use strict"; var s = a(0);
        t.name = "log", t.factory = function(t, r, e, n) { var i = e(a(12)),
                o = n("log", { number: function(e) { return 0 <= e || r.predictable ? Math.log(e) : new t.Complex(e, 0).log() }, Complex: function(e) { return e.log() }, BigNumber: function(e) { return !e.isNegative() || r.predictable ? e.ln() : new t.Complex(e.toNumber(), 0).log() }, "Array | Matrix": function(e) { return s(e, o) }, "any, any": function(e, t) { return i(o(e), o(t)) } }); return o.toTex = { 1: "\\ln\\left(${args[0]}\\right)", 2: "\\log_{${args[1]}}\\left(${args[0]}\\right)" }, o } }, function(e, t, r) { "use strict"; var b = r(89);

        function w(e) { for (var t = e.d, r = t[0] + "", n = 1; n < t.length; ++n) { for (var i = t[n] + "", o = 7 - i.length; o--;) i = "0" + i;
                r += i } for (var a = r.length;
                "0" === r.charAt(a);) a--; var s = e.e,
                u = r.slice(0, a + 1 || 1),
                c = u.length; if (0 < s)
                if (++s > c)
                    for (s -= c; s--;) u += "0";
                else s < c && (u = u.slice(0, s) + "." + u.slice(s));
            for (var f = [0], l = 0; l < u.length;) { for (var p = f.length; p--;) f[p] *= 10;
                f[0] += parseInt(u.charAt(l++)); for (var m = 0; m < f.length; ++m) 1 < f[m] && (null !== f[m + 1] && void 0 !== f[m + 1] || (f[m + 1] = 0), f[m + 1] += f[m] >> 1, f[m] &= 1) } return f.reverse() }
        e.exports = function(e, t, r) { var n, i, o, a, s, u = e.constructor,
                c = +(e.s < 0),
                f = +(t.s < 0); if (c) { n = w(b(e)); for (var l = 0; l < n.length; ++l) n[l] ^= 1 } else n = w(e); if (f) { i = w(b(t)); for (var p = 0; p < i.length; ++p) i[p] ^= 1 } else i = w(t);
            s = n.length <= i.length ? (o = n, a = i, c) : (o = i, a = n, f); var m = o.length,
                h = a.length,
                d = 1 ^ r(c, f),
                y = new u(1 ^ d),
                g = new u(1),
                v = new u(2),
                x = u.precision; for (u.config({ precision: 1e9 }); 0 < m;) r(o[--m], a[--h]) === d && (y = y.plus(g)), g = g.times(v); for (; 0 < h;) r(s, a[--h]) === d && (y = y.plus(g)), g = g.times(v); return u.config({ precision: x }), 0 === d && (y.s = -y.s), y } }, function(e, t, r) { "use strict";
        e.exports = function(e) { if (e.isFinite() && !e.isInteger()) throw new Error("Integer expected in function bitNot"); var t = e.constructor,
                r = t.precision;
            t.config({ precision: 1e9 }); var n = e.plus(new t(1)); return n.s = -n.s || null, t.config({ precision: r }), n } }, function(e, t, n) { "use strict"; var P = n(8);
        t.name = "algorithm08", t.factory = function(e, t, r, B) { var k = r(n(11)),
                I = e.SparseMatrix; return function(e, t, r) { var n = e._values,
                    i = e._index,
                    o = e._ptr,
                    a = e._size,
                    s = e._datatype,
                    u = t._values,
                    c = t._index,
                    f = t._ptr,
                    l = t._size,
                    p = t._datatype; if (a.length !== l.length) throw new P(a.length, l.length); if (a[0] !== l[0] || a[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + l + ")"); if (!n || !u) throw new Error("Cannot perform operation on Pattern Sparse Matrices"); var m, h = a[0],
                    d = a[1],
                    y = k,
                    g = 0,
                    v = r; "string" == typeof s && s === p && (m = s, y = B.find(k, [m, m]), g = B.convert(0, m), v = B.find(r, [m, m])); for (var x, b, w, N, M = [], E = [], A = [], S = new I({ values: M, index: E, ptr: A, size: [h, d], datatype: m }), O = [], T = [], _ = 0; _ < d; _++) { A[_] = E.length; var C = _ + 1; for (b = o[_], w = o[_ + 1], x = b; x < w; x++) T[N = i[x]] = C, O[N] = n[x], E.push(N); for (b = f[_], w = f[_ + 1], x = b; x < w; x++) T[N = c[x]] === C && (O[N] = v(O[N], u[x])); for (x = A[_]; x < E.length;) { var z = O[N = E[x]];
                        y(z, g) ? E.splice(x, 1) : (M.push(z), x++) } } return A[d] = E.length, S } } }, function(e, t) { e.exports = function e(t, r) { var n; return r < t ? 1 : r === t ? r : e(t, n = r + t >> 1) * e(n + 1, r) } }, function(e, t, u) { "use strict"; var c = u(3).isInteger;
        t.name = "partitionSelect", t.factory = function(n, e, t, r) { var f = t(u(56)),
                l = t(u(76)),
                i = t(u(52));

            function o(e, t) { return -i(e, t) } return r("partitionSelect", { "Array | Matrix, number": function(e, t) { return a(e, t, i) }, "Array | Matrix, number, string": function(e, t, r) { if ("asc" === r) return a(e, t, i); if ("desc" === r) return a(e, t, o); throw new Error('Compare string must be "asc" or "desc"') }, "Array | Matrix, number, function": a });

            function a(e, t, r) { if (!c(t) || t < 0) throw new Error("k must be a non-negative integer"); if (n.isMatrix(e)) { if (1 < e.size().length) throw new Error("Only one dimensional matrices supported"); return s(e.valueOf(), t, r) } if (Array.isArray(e)) return s(e, t, r) }

            function s(e, t, r) { if (t >= e.length) throw new Error("k out of bounds"); for (var n = 0; n < e.length; n++)
                    if (f(e[n]) && l(e[n])) return e[n];
                for (var i = 0, o = e.length - 1; i < o;) { for (var a = i, s = o, u = e[Math.floor(Math.random() * (o - i + 1)) + i]; a < s;)
                        if (0 <= r(e[a], u)) { var c = e[s];
                            e[s] = e[a], e[a] = c, --s } else ++a;
                    0 < r(e[a], u) && --a, t <= a ? o = a : i = a + 1 } return e[t] } } }, function(e, t, c) { "use strict"; var f = c(46),
            l = c(94),
            p = c(77);
        t.name = "max", t.factory = function(e, t, r, n) { var i = r(c(33)),
                o = r(c(36)),
                a = n("max", { "Array | Matrix": u, "Array | Matrix, number | BigNumber": function(e, t) { return l(e, t.valueOf(), s) }, "...": function(e) { if (p(e)) throw new TypeError("Scalar values expected in function max"); return u(e) } }); return a.toTex = "\\max\\left(${args}\\right)", a;

            function s(e, t) { try { return i(e, t) ? e : t } catch (e) { throw o(e, "max", t) } }

            function u(e) { var r; if (f(e, function(t) { try { isNaN(t) && "number" == typeof t ? r = NaN : (void 0 === r || i(t, r)) && (r = t) } catch (e) { throw o(e, "max", t) } }), void 0 === r) throw new Error("Cannot calculate max of an empty array"); return r } } }, function(e, t, r) { "use strict"; var i = r(2).size,
            o = r(61),
            a = r(54);

        function s(e, t, r) { var n, i, o, a; if (t <= 0) { if (Array.isArray(e[0])) { for (a = function(e) { var t, r, n = e.length,
                                i = e[0].length,
                                o = []; for (r = 0; r < i; r++) { var a = []; for (t = 0; t < n; t++) a.push(e[t][r]);
                                o.push(a) } return o }(e), i = [], n = 0; n < a.length; n++) i[n] = s(a[n], t - 1, r); return i } for (o = e[0], n = 1; n < e.length; n++) o = r(o, e[n]); return o } for (i = [], n = 0; n < e.length; n++) i[n] = s(e[n], t - 1, r); return i }
        e.exports = function(e, t, r) { var n = Array.isArray(e) ? i(e) : e.size(); if (t < 0 || t >= n.length) throw new a(t, n.length); return o(e) ? e.create(s(e.valueOf(), t, r)) : s(e, t, r) } }, function(e, t, a) { "use strict"; var f = a(55),
            l = a(53),
            y = a(3).isNumber;
        t.name = "distribution", t.factory = function(m, e, t, n, r) { var u = t(a(1)),
                h = a(2),
                d = t(a(293));

            function i(e) { if (!o.hasOwnProperty(e)) throw new Error("Unknown distribution " + e); var t = Array.prototype.slice.call(arguments, 1); return function(r) {
                    function o(e, t, r) { var n = void 0 === t; if (n && (t = 1), m.isMatrix(e)) e = e.valueOf();
                        else if (!Array.isArray(e)) throw new TypeError("Unsupported type of value in function pickRandom"); if (1 < h.size(e).length) throw new Error("Only one dimensional vectors supported"); var i = 0; if (void 0 !== r) { if (r.length !== e.length) throw new Error("Weights must have the same length as possibles"); for (var o = 0, a = r.length; o < a; o++) { if (!y(r[o]) || r[o] < 0) throw new Error("Weights must be an array of positive numbers");
                                i += r[o] } } var s = e.length; if (0 === s) return []; if (s <= t) return 1 < t ? e : e[0]; for (var u, c = []; c.length < t;) { if (void 0 === r) u = e[Math.floor(d() * s)];
                            else
                                for (var f = d() * i, l = 0, p = e.length; l < p; l++)
                                    if ((f -= r[l]) < 0) { u = e[l]; break } - 1 === c.indexOf(u) && c.push(u) } return n ? c[0] : c }

                    function s(e, t) { return e + r() * (t - e) }

                    function a(e, t) { return Math.floor(e + r() * (t - e)) }

                    function c(e, t, r, n) { var i = []; if (1 < (e = e.slice(0)).length)
                            for (var o = 0, a = e.shift(); o < a; o++) i.push(c(e, t, r, n));
                        else
                            for (var s = 0, u = e.shift(); s < u; s++) i.push(n(t, r)); return i } return { random: function(e, t, r) { var n, i, o; if (3 < arguments.length) throw new f("random", arguments.length, 0, 3); if (1 === arguments.length ? l(e) ? n = e : o = e : o = 2 === arguments.length ? (l(e) ? n = e : i = e, t) : (n = e, i = t, r), void 0 !== i && !y(i) || void 0 !== o && !y(o)) throw new TypeError("Invalid argument in function random"); if (void 0 === o && (o = 1), void 0 === i && (i = 0), void 0 === n) return s(i, o); var a = c(n.valueOf(), i, o, s); return m.isMatrix(n) ? u(a) : a }, randomInt: n({ "number | Array": function(e) { if (l(e)) { var t = e,
                                        r = c(t.valueOf(), 0, 1, a); return m.isMatrix(t) ? u(r) : r } return a(0, e) }, "number | Array, number": function(e, t) { if (l(e)) { var r = e,
                                        n = t,
                                        i = c(r.valueOf(), 0, n, a); return m.isMatrix(r) ? u(i) : i } return a(e, t) }, "Array, number, number": function(e, t, r) { var n = c(e.valueOf(), t, r, a); return e && !0 === e.isMatrix ? u(n) : n } }), pickRandom: n({ Array: function(e) { return o(e) }, "Array, number | Array": function(e, t) { var r, n; if (Array.isArray(t)) n = t;
                                else { if (!y(t)) throw new TypeError("Invalid argument in function pickRandom");
                                    r = t } return o(e, r, n) }, "Array, number | Array, Array | number": function(e, t, r) { var n, i; if (n = Array.isArray(t) ? (i = t, r) : (i = r, t), !Array.isArray(i) || !y(n)) throw new TypeError("Invalid argument in function pickRandom"); return o(e, n, i) } }) } }(o[e].apply(this, t)) } var o = { uniform: function() { return d }, normal: function() { return function() { for (var e, t, r = -1; r < 0 || 1 < r;) e = d(), t = d(), r = 1 / 6 * Math.pow(-2 * Math.log(e), .5) * Math.cos(2 * Math.PI * t) + .5; return r } } }; return i.toTex = void 0, i } }, function(e, t, r) { "use strict";
        t.factory = function(s, e, t, r) { return function(e, t, r) { var n = e.filter(function(e) { return s.isSymbolNode(e) && !(e.name in t) && !(e.name in r) })[0]; if (!n) throw new Error('No undefined variable found in inline expression "' + e + '"'); var i = n.name,
                    o = Object.create(r),
                    a = e.compile(); return function(e) { return o[i] = e, a.eval(o) } } } }, function(e, t, r) { "use strict";

        function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var i = r(157),
            o = r(3).digits,
            a = r(78),
            s = r(61),
            u = function() { return u = i.create, i };
        t.create = function(r) { r.isNumber = function(e) { return "number" == typeof e }, r.isComplex = function(e) { return r.Complex && e instanceof r.Complex || !1 }, r.isBigNumber = a, r.isFraction = function(e) { return r.Fraction && e instanceof r.Fraction || !1 }, r.isUnit = function(e) { return e && e.constructor.prototype.isUnit || !1 }, r.isString = function(e) { return "string" == typeof e }, r.isArray = Array.isArray, r.isMatrix = s, r.isDenseMatrix = function(e) { return e && e.isDenseMatrix && e.constructor.prototype.isMatrix || !1 }, r.isSparseMatrix = function(e) { return e && e.isSparseMatrix && e.constructor.prototype.isMatrix || !1 }, r.isRange = function(e) { return e && e.constructor.prototype.isRange || !1 }, r.isIndex = function(e) { return e && e.constructor.prototype.isIndex || !1 }, r.isBoolean = function(e) { return "boolean" == typeof e }, r.isResultSet = function(e) { return e && e.constructor.prototype.isResultSet || !1 }, r.isHelp = function(e) { return e && e.constructor.prototype.isHelp || !1 }, r.isFunction = function(e) { return "function" == typeof e }, r.isDate = function(e) { return e instanceof Date }, r.isRegExp = function(e) { return e instanceof RegExp }, r.isObject = function(e) { return "object" === n(e) && e.constructor === Object && !r.isComplex(e) && !r.isFraction(e) }, r.isNull = function(e) { return null === e }, r.isUndefined = function(e) { return void 0 === e }, r.isAccessorNode = function(e) { return e && e.isAccessorNode && e.constructor.prototype.isNode || !1 }, r.isArrayNode = function(e) { return e && e.isArrayNode && e.constructor.prototype.isNode || !1 }, r.isAssignmentNode = function(e) { return e && e.isAssignmentNode && e.constructor.prototype.isNode || !1 }, r.isBlockNode = function(e) { return e && e.isBlockNode && e.constructor.prototype.isNode || !1 }, r.isConditionalNode = function(e) { return e && e.isConditionalNode && e.constructor.prototype.isNode || !1 }, r.isConstantNode = function(e) { return e && e.isConstantNode && e.constructor.prototype.isNode || !1 }, r.isFunctionAssignmentNode = function(e) { return e && e.isFunctionAssignmentNode && e.constructor.prototype.isNode || !1 }, r.isFunctionNode = function(e) { return e && e.isFunctionNode && e.constructor.prototype.isNode || !1 }, r.isIndexNode = function(e) { return e && e.isIndexNode && e.constructor.prototype.isNode || !1 }, r.isNode = function(e) { return e && e.isNode && e.constructor.prototype.isNode || !1 }, r.isObjectNode = function(e) { return e && e.isObjectNode && e.constructor.prototype.isNode || !1 }, r.isOperatorNode = function(e) { return e && e.isOperatorNode && e.constructor.prototype.isNode || !1 }, r.isParenthesisNode = function(e) { return e && e.isParenthesisNode && e.constructor.prototype.isNode || !1 }, r.isRangeNode = function(e) { return e && e.isRangeNode && e.constructor.prototype.isNode || !1 }, r.isSymbolNode = function(e) { return e && e.isSymbolNode && e.constructor.prototype.isNode || !1 }, r.isChain = function(e) { return e && e.constructor.prototype.isChain || !1 }; var e = u(); return e.types = [{ name: "number", test: r.isNumber }, { name: "Complex", test: r.isComplex }, { name: "BigNumber", test: r.isBigNumber }, { name: "Fraction", test: r.isFraction }, { name: "Unit", test: r.isUnit }, { name: "string", test: r.isString }, { name: "Array", test: r.isArray }, { name: "Matrix", test: r.isMatrix }, { name: "DenseMatrix", test: r.isDenseMatrix }, { name: "SparseMatrix", test: r.isSparseMatrix }, { name: "Range", test: r.isRange }, { name: "Index", test: r.isIndex }, { name: "boolean", test: r.isBoolean }, { name: "ResultSet", test: r.isResultSet }, { name: "Help", test: r.isHelp }, { name: "function", test: r.isFunction }, { name: "Date", test: r.isDate }, { name: "RegExp", test: r.isRegExp }, { name: "null", test: r.isNull }, { name: "undefined", test: r.isUndefined }, { name: "OperatorNode", test: r.isOperatorNode }, { name: "ConstantNode", test: r.isConstantNode }, { name: "SymbolNode", test: r.isSymbolNode }, { name: "ParenthesisNode", test: r.isParenthesisNode }, { name: "FunctionNode", test: r.isFunctionNode }, { name: "FunctionAssignmentNode", test: r.isFunctionAssignmentNode }, { name: "ArrayNode", test: r.isArrayNode }, { name: "AssignmentNode", test: r.isAssignmentNode }, { name: "BlockNode", test: r.isBlockNode }, { name: "ConditionalNode", test: r.isConditionalNode }, { name: "IndexNode", test: r.isIndexNode }, { name: "RangeNode", test: r.isRangeNode }, { name: "Node", test: r.isNode }, { name: "Object", test: r.isObject }], e.conversions = [{ from: "number", to: "BigNumber", convert: function(e) { if (15 < o(e)) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + e + "). Use function bignumber(x) to convert to BigNumber."); return new r.BigNumber(e) } }, { from: "number", to: "Complex", convert: function(e) { return new r.Complex(e, 0) } }, { from: "number", to: "string", convert: function(e) { return e + "" } }, { from: "BigNumber", to: "Complex", convert: function(e) { return new r.Complex(e.toNumber(), 0) } }, { from: "Fraction", to: "BigNumber", convert: function(e) { throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.") } }, { from: "Fraction", to: "Complex", convert: function(e) { return new r.Complex(e.valueOf(), 0) } }, { from: "number", to: "Fraction", convert: function(e) { if (new r.Fraction(e).valueOf() !== e) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + e + "). Use function fraction(x) to convert to Fraction."); return new r.Fraction(e) } }, { from: "string", to: "number", convert: function(e) { var t = Number(e); if (isNaN(t)) throw new Error('Cannot convert "' + e + '" to a number'); return t } }, { from: "string", to: "BigNumber", convert: function(t) { try { return new r.BigNumber(t) } catch (e) { throw new Error('Cannot convert "' + t + '" to BigNumber') } } }, { from: "string", to: "Fraction", convert: function(t) { try { return new r.Fraction(t) } catch (e) { throw new Error('Cannot convert "' + t + '" to Fraction') } } }, { from: "string", to: "Complex", convert: function(t) { try { return new r.Complex(t) } catch (e) { throw new Error('Cannot convert "' + t + '" to Complex') } } }, { from: "boolean", to: "number", convert: function(e) { return +e } }, { from: "boolean", to: "BigNumber", convert: function(e) { return new r.BigNumber(+e) } }, { from: "boolean", to: "Fraction", convert: function(e) { return new r.Fraction(+e) } }, { from: "boolean", to: "string", convert: function(e) { return +e } }, { from: "Array", to: "Matrix", convert: function(e) { return new r.DenseMatrix(e) } }, { from: "Matrix", to: "Array", convert: function(e) { return e.valueOf() } }], e } }, function(e, t, r) { "use strict"; var n = r(158);
        t.mixin = function(e) { var t = new n; return e.on = t.on.bind(t), e.off = t.off.bind(t), e.once = t.once.bind(t), e.emit = t.emit.bind(t), e } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "bignumber", t.factory = function(t, e, r, n) { var i = n("bignumber", { "": function() { return new t.BigNumber(0) }, number: function(e) { return new t.BigNumber(e + "") }, string: function(e) { return new t.BigNumber(e) }, BigNumber: function(e) { return e }, Fraction: function(e) { return new t.BigNumber(e.n).div(e.d).times(e.s) }, null: function(e) { return new t.BigNumber(0) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 0: "0", 1: "\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var i = r(3);
        t.name = "Range", t.path = "type", t.factory = function(a, e, t, r) {
            function s(e, t, r) { if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator"); var n = null != e,
                    i = null != t,
                    o = null != r; if (n)
                    if (a.isBigNumber(e)) e = e.toNumber();
                    else if ("number" != typeof e) throw new TypeError("Parameter start must be a number"); if (i)
                    if (a.isBigNumber(t)) t = t.toNumber();
                    else if ("number" != typeof t) throw new TypeError("Parameter end must be a number"); if (o)
                    if (a.isBigNumber(r)) r = r.toNumber();
                    else if ("number" != typeof r) throw new TypeError("Parameter step must be a number");
                this.start = n ? parseFloat(e) : 0, this.end = i ? parseFloat(t) : 0, this.step = o ? parseFloat(r) : 1 } return s.prototype.type = "Range", s.prototype.isRange = !0, s.parse = function(e) { if ("string" != typeof e) return null; var t = e.split(":").map(function(e) { return parseFloat(e) }); if (t.some(function(e) { return isNaN(e) })) return null; switch (t.length) {
                    case 2:
                        return new s(t[0], t[1]);
                    case 3:
                        return new s(t[0], t[2], t[1]);
                    default:
                        return null } }, s.prototype.clone = function() { return new s(this.start, this.end, this.step) }, s.prototype.size = function() { var e = 0,
                    t = this.start,
                    r = this.step,
                    n = this.end - t; return i.sign(r) === i.sign(n) ? e = Math.ceil(n / r) : 0 === n && (e = 0), isNaN(e) && (e = 0), [e] }, s.prototype.min = function() { var e = this.size()[0]; return 0 < e ? 0 < this.step ? this.start : this.start + (e - 1) * this.step : void 0 }, s.prototype.max = function() { var e = this.size()[0]; return 0 < e ? 0 < this.step ? this.start + (e - 1) * this.step : this.start : void 0 }, s.prototype.forEach = function(e) { var t = this.start,
                    r = this.step,
                    n = this.end,
                    i = 0; if (0 < r)
                    for (; t < n;) e(t, [i], this), t += r, i++;
                else if (r < 0)
                    for (; n < t;) e(t, [i], this), t += r, i++ }, s.prototype.map = function(n) { var i = []; return this.forEach(function(e, t, r) { i[t[0]] = n(e, t, r) }), i }, s.prototype.toArray = function() { var r = []; return this.forEach(function(e, t) { r[t[0]] = e }), r }, s.prototype.valueOf = function() { return this.toArray() }, s.prototype.format = function(e) { var t = i.format(this.start, e); return 1 !== this.step && (t += ":" + i.format(this.step, e)), t += ":" + i.format(this.end, e) }, s.prototype.toString = function() { return this.format() }, s.prototype.toJSON = function() { return { mathjs: "Range", start: this.start, end: this.end, step: this.step } }, s.fromJSON = function(e) { return new s(e.start, e.end, e.step) }, s } }, function(e, t, r) { "use strict";
        t.name = "ResultSet", t.path = "type", t.factory = function(e, t, r, n) {
            function i(e) { if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
                this.entries = e || [] } return i.prototype.type = "ResultSet", i.prototype.isResultSet = !0, i.prototype.valueOf = function() { return this.entries }, i.prototype.toString = function() { return "[" + this.entries.join(", ") + "]" }, i.prototype.toJSON = function() { return { mathjs: "ResultSet", entries: this.entries } }, i.fromJSON = function(e) { return new i(e.entries) }, i } }, function(e, t, r) { "use strict"; var n = r(31).memoize;

        function i(e) { return e[0].precision }
        t.e = n(function(e) { return new e(1).exp() }, i), t.phi = n(function(e) { return new e(1).plus(new e(5).sqrt()).div(2) }, i), t.pi = n(function(e) { return e.acos(-1) }, i), t.tau = n(function(e) { return t.pi(e).times(2) }, i) }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "fix", t.factory = function(t, e, r, n) { var i = n("fix", { number: function(e) { return 0 < e ? Math.floor(e) : Math.ceil(e) }, Complex: function(e) { return new t.Complex(0 < e.re ? Math.floor(e.re) : Math.ceil(e.re), 0 < e.im ? Math.floor(e.im) : Math.ceil(e.im)) }, BigNumber: function(e) { return e.isNegative() ? e.ceil() : e.floor() }, Fraction: function(e) { return e.s < 0 ? e.ceil() : e.floor() }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\mathrm{${name}}\\left(${args[0]}\\right)" }, i } }, function(e, t, l) { "use strict"; var p = l(3).isInteger,
            m = l(3).toFixed,
            h = l(0),
            d = "Number of decimals in function round must be an integer";
        t.name = "round", t.factory = function(r, e, t, n) { var i = t(l(1)),
                o = t(l(11)),
                a = t(l(41)),
                s = t(l(20)),
                u = t(l(19)),
                c = t(l(6)),
                f = n("round", { number: Math.round, "number, number": function(e, t) { if (!p(t)) throw new TypeError(d); if (t < 0 || 15 < t) throw new Error("Number of decimals in function round must be in te range of 0-15"); return parseFloat(m(e, t)) }, Complex: function(e) { return e.round() }, "Complex, number": function(e, t) { if (t % 1) throw new TypeError(d); return e.round(t) }, "Complex, BigNumber": function(e, t) { if (!t.isInteger()) throw new TypeError(d); var r = t.toNumber(); return e.round(r) }, "number, BigNumber": function(e, t) { if (!t.isInteger()) throw new TypeError(d); return new r.BigNumber(e).toDecimalPlaces(t.toNumber()) }, BigNumber: function(e) { return e.toDecimalPlaces(0) }, "BigNumber, BigNumber": function(e, t) { if (!t.isInteger()) throw new TypeError(d); return e.toDecimalPlaces(t.toNumber()) }, Fraction: function(e) { return e.round() }, "Fraction, number": function(e, t) { if (t % 1) throw new TypeError(d); return e.round(t) }, "Array | Matrix": function(e) { return h(e, f, !0) }, "SparseMatrix, number | BigNumber": function(e, t) { return s(e, t, f, !1) }, "DenseMatrix, number | BigNumber": function(e, t) { return c(e, t, f, !1) }, "number | Complex | BigNumber, SparseMatrix": function(e, t) { return o(e, 0) ? a(t.size(), t.storage()) : u(t, e, f, !0) }, "number | Complex | BigNumber, DenseMatrix": function(e, t) { return o(e, 0) ? a(t.size(), t.storage()) : c(t, e, f, !0) }, "Array, number | BigNumber": function(e, t) { return c(i(e), t, f, !1).valueOf() }, "number | Complex | BigNumber, Array": function(e, t) { return c(i(t), e, f, !0).valueOf() } }); return f.toTex = { 1: "\\left\\lfloor${args[0]}\\right\\rceil", 2: void 0 }, f } }, function(e, t, r) { "use strict"; var o = r(9);
        t.name = "format", t.factory = function(e, t, r, n) { var i = n("format", { any: o.format, "any, Object | function | number": o.format }); return i.toTex = void 0, i } }, function(e, t, u) { "use strict"; var c = u(13).getSafeProperty;
        t.name = "AccessorNode", t.path = "expression.node", t.factory = function(r, e, t, n) { var i = t(u(16)),
                s = t(u(108));

            function o(e, t) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if (!r.isNode(e)) throw new TypeError('Node expected for parameter "object"'); if (!r.isIndexNode(t)) throw new TypeError('IndexNode expected for parameter "index"');
                this.object = e || null, this.index = t, Object.defineProperty(this, "name", { get: function() { return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "" }.bind(this), set: function() { throw new Error("Cannot assign a new name, name is read-only") } }) }

            function a(e) { return !(r.isAccessorNode(e) || r.isArrayNode(e) || r.isConstantNode(e) || r.isFunctionNode(e) || r.isObjectNode(e) || r.isParenthesisNode(e) || r.isSymbolNode(e)) } return (o.prototype = new i).type = "AccessorNode", o.prototype.isAccessorNode = !0, o.prototype._compile = function(e, t) { var o = this.object._compile(e, t),
                    a = this.index._compile(e, t); if (this.index.isObjectProperty()) { var n = this.index.getObjectProperty(); return function(e, t, r) { return c(o(e, t, r), n) } } return function(e, t, r) { var n = o(e, t, r),
                        i = a(e, t, n); return s(n, i) } }, o.prototype.forEach = function(e) { e(this.object, "object", this), e(this.index, "index", this) }, o.prototype.map = function(e) { return new o(this._ifNode(e(this.object, "object", this)), this._ifNode(e(this.index, "index", this))) }, o.prototype.clone = function() { return new o(this.object, this.index) }, o.prototype._toString = function(e) { var t = this.object.toString(e); return a(this.object) && (t = "(" + t + ")"), t + this.index.toString(e) }, o.prototype.toHTML = function(e) { var t = this.object.toHTML(e); return a(this.object) && (t = '<span class="math-parenthesis math-round-parenthesis">(</span>' + t + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t + this.index.toHTML(e) }, o.prototype._toTex = function(e) { var t = this.object.toTex(e); return a(this.object) && (t = "\\left(' + object + '\\right)"), t + this.index.toTex(e) }, o.prototype.toJSON = function() { return { mathjs: "AccessorNode", object: this.object, index: this.index } }, o.fromJSON = function(e) { return new o(e.object, e.index) }, o } }, function(e, t, r) { "use strict";
        e.exports = { end: !0 } }, function(e, t, o) { "use strict";

        function a(e) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var s = o(43).transform,
            u = o(13).getSafeProperty;
        t.factory = function(e, t, r, n) { var i = r(o(22)); return function(e, t) { try { if (Array.isArray(e)) return i(e, t); if (e && "function" == typeof e.subset) return e.subset(t); if ("string" == typeof e) return i(e, t); if ("object" !== a(e)) throw new TypeError("Cannot apply index: unsupported type of object"); if (!t.isObjectProperty()) throw new TypeError("Cannot apply a numeric index as object property"); return u(e, t.getObjectProperty()) } catch (e) { throw s(e) } } } }, function(e, t, a) { "use strict"; var s = a(2).map;
        t.name = "ArrayNode", t.path = "expression.node", t.factory = function(r, e, t, n) { var i = t(a(16));

            function o(e) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if (this.items = e || [], !Array.isArray(this.items) || !this.items.every(r.isNode)) throw new TypeError("Array containing Nodes expected"); var t = function() { throw new Error("Property `ArrayNode.nodes` is deprecated, use `ArrayNode.items` instead") };
                Object.defineProperty(this, "nodes", { get: t, set: t }) } return (o.prototype = new i).type = "ArrayNode", o.prototype.isArrayNode = !0, o.prototype._compile = function(t, r) { var e = s(this.items, function(e) { return e._compile(t, r) }); if ("Array" === t.config().matrix) return function(t, r, n) { return s(e, function(e) { return e(t, r, n) }) }; var i = t.matrix; return function(t, r, n) { return i(s(e, function(e) { return e(t, r, n) })) } }, o.prototype.forEach = function(e) { for (var t = 0; t < this.items.length; t++) e(this.items[t], "items[" + t + "]", this) }, o.prototype.map = function(e) { for (var t = [], r = 0; r < this.items.length; r++) t[r] = this._ifNode(e(this.items[r], "items[" + r + "]", this)); return new o(t) }, o.prototype.clone = function() { return new o(this.items.slice(0)) }, o.prototype._toString = function(t) { return "[" + this.items.map(function(e) { return e.toString(t) }).join(", ") + "]" }, o.prototype.toJSON = function() { return { mathjs: "ArrayNode", items: this.items } }, o.fromJSON = function(e) { return new o(e.items) }, o.prototype.toHTML = function(t) { return '<span class="math-parenthesis math-square-parenthesis">[</span>' + this.items.map(function(e) { return e.toHTML(t) }).join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>' }, o.prototype._toTex = function(t) { var r = "\\begin{bmatrix}"; return this.items.forEach(function(e) { e.items ? r += e.items.map(function(e) { return e.toTex(t) }).join("&") : r += e.toTex(t), r += "\\\\" }), r += "\\end{bmatrix}" }, o } }, function(e, t, u) { "use strict"; var d = u(13).getSafeProperty,
            y = u(13).setSafeProperty;
        t.name = "AssignmentNode", t.path = "expression.node", t.factory = function(n, e, t, r) { var i = t(u(16)),
                m = t(u(198)),
                h = t(u(108)),
                o = u(50);

            function a(e, t, r) { if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator"); if (this.object = e, this.index = r ? t : null, this.value = r || t, !n.isSymbolNode(e) && !n.isAccessorNode(e)) throw new TypeError('SymbolNode or AccessorNode expected as "object"'); if (n.isSymbolNode(e) && "end" === e.name) throw new Error('Cannot assign to symbol "end"'); if (this.index && !n.isIndexNode(this.index)) throw new TypeError('IndexNode expected as "index"'); if (!n.isNode(this.value)) throw new TypeError('Node expected as "value"');
                Object.defineProperty(this, "name", { get: function() { return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "" }.bind(this), set: function() { throw new Error("Cannot assign a new name, name is read-only") } }) }

            function s(e, t) { t || (t = "keep"); var r = o.getPrecedence(e, t),
                    n = o.getPrecedence(e.value, t); return "all" === t || null !== n && n <= r } return (a.prototype = new i).type = "AssignmentNode", a.prototype.isAssignmentNode = !0, a.prototype._compile = function(e, t) { var a = this.object._compile(e, t),
                    u = this.index ? this.index._compile(e, t) : null,
                    c = this.value._compile(e, t),
                    s = this.object.name; if (this.index) { if (this.index.isObjectProperty()) { var o = this.index.getObjectProperty(); return function(e, t, r) { var n = a(e, t, r),
                                i = c(e, t, r); return y(n, o, i) } } if (n.isSymbolNode(this.object)) return function(e, t, r) { var n = a(e, t, r),
                            i = c(e, t, r),
                            o = u(e, t, n); return y(e, s, m(n, o, i)), i }; var f = this.object.object._compile(e, t); if (this.object.index.isObjectProperty()) { var l = this.object.index.getObjectProperty(); return function(e, t, r) { var n = f(e, t, r),
                                i = d(n, l),
                                o = u(e, t, i),
                                a = c(e, t, r); return y(n, l, m(i, o, a)), a } } var p = this.object.index._compile(e, t); return function(e, t, r) { var n = f(e, t, r),
                            i = p(e, t, n),
                            o = h(n, i),
                            a = u(e, t, o),
                            s = c(e, t, r); return m(n, i, m(o, a, s)), s } } if (!n.isSymbolNode(this.object)) throw new TypeError("SymbolNode expected as object"); return function(e, t, r) { return y(e, s, c(e, t, r)) } }, a.prototype.forEach = function(e) { e(this.object, "object", this), this.index && e(this.index, "index", this), e(this.value, "value", this) }, a.prototype.map = function(e) { return new a(this._ifNode(e(this.object, "object", this)), this.index ? this._ifNode(e(this.index, "index", this)) : null, this._ifNode(e(this.value, "value", this))) }, a.prototype.clone = function() { return new a(this.object, this.index, this.value) }, a.prototype._toString = function(e) { var t = this.object.toString(e),
                    r = this.index ? this.index.toString(e) : "",
                    n = this.value.toString(e); return s(this, e && e.parenthesis) && (n = "(" + n + ")"), t + r + " = " + n }, a.prototype.toJSON = function() { return { mathjs: "AssignmentNode", object: this.object, index: this.index, value: this.value } }, a.fromJSON = function(e) { return new a(e.object, e.index, e.value) }, a.prototype.toHTML = function(e) { var t = this.object.toHTML(e),
                    r = this.index ? this.index.toHTML(e) : "",
                    n = this.value.toHTML(e); return s(this, e && e.parenthesis) && (n = '<span class="math-paranthesis math-round-parenthesis">(</span>' + n + '<span class="math-paranthesis math-round-parenthesis">)</span>'), t + r + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + n }, a.prototype._toTex = function(e) { var t = this.object.toTex(e),
                    r = this.index ? this.index.toTex(e) : "",
                    n = this.value.toTex(e); return s(this, e && e.parenthesis) && (n = "\\left(".concat(n, "\\right)")), t + r + ":=" + n }, a } }, function(e, t, s) { "use strict"; var u = s(2).forEach,
            c = s(2).map;
        t.name = "BlockNode", t.path = "expression.node", t.factory = function(n, e, t, r) { var i = t(s(16)),
                a = t(s(101));

            function o(e) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if (!Array.isArray(e)) throw new Error("Array expected");
                this.blocks = e.map(function(e) { var t = e && e.node,
                        r = !e || void 0 === e.visible || e.visible; if (!n.isNode(t)) throw new TypeError('Property "node" must be a Node'); if ("boolean" != typeof r) throw new TypeError('Property "visible" must be a boolean'); return { node: t, visible: r } }) } return (o.prototype = new i).type = "BlockNode", o.prototype.isBlockNode = !0, o.prototype._compile = function(t, r) { var e = c(this.blocks, function(e) { return { eval: e.node._compile(t, r), visible: e.visible } }); return function(r, n, i) { var o = []; return u(e, function(e) { var t = e.eval(r, n, i);
                        e.visible && o.push(t) }), new a(o) } }, o.prototype.forEach = function(e) { for (var t = 0; t < this.blocks.length; t++) e(this.blocks[t].node, "blocks[" + t + "].node", this) }, o.prototype.map = function(e) { for (var t = [], r = 0; r < this.blocks.length; r++) { var n = this.blocks[r],
                        i = this._ifNode(e(n.node, "blocks[" + r + "].node", this));
                    t[r] = { node: i, visible: n.visible } } return new o(t) }, o.prototype.clone = function() { return new o(this.blocks.map(function(e) { return { node: e.node, visible: e.visible } })) }, o.prototype._toString = function(t) { return this.blocks.map(function(e) { return e.node.toString(t) + (e.visible ? "" : ";") }).join("\n") }, o.prototype.toJSON = function() { return { mathjs: "BlockNode", blocks: this.blocks } }, o.fromJSON = function(e) { return new o(e.blocks) }, o.prototype.toHTML = function(t) { return this.blocks.map(function(e) { return e.node.toHTML(t) + (e.visible ? "" : '<span class="math-separator">;</span>') }).join('<span class="math-separator"><br /></span>') }, o.prototype._toTex = function(t) { return this.blocks.map(function(e) { return e.node.toTex(t) + (e.visible ? "" : ";") }).join("\\;\\;\n") }, o } }, function(e, t, o) { "use strict"; var c = o(50);
        t.name = "ConditionalNode", t.path = "expression.node", t.factory = function(a, e, t, r) { var n = t(o(16)),
                s = t(o(24));

            function i(e, t, r) { if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator"); if (!a.isNode(e)) throw new TypeError("Parameter condition must be a Node"); if (!a.isNode(t)) throw new TypeError("Parameter trueExpr must be a Node"); if (!a.isNode(r)) throw new TypeError("Parameter falseExpr must be a Node");
                this.condition = e, this.trueExpr = t, this.falseExpr = r } return (i.prototype = new n).type = "ConditionalNode", i.prototype.isConditionalNode = !0, i.prototype._compile = function(e, t) { var n = this.condition._compile(e, t),
                    i = this.trueExpr._compile(e, t),
                    o = this.falseExpr._compile(e, t); return function(e, t, r) { return function(e) { if ("number" == typeof e || "boolean" == typeof e || "string" == typeof e) return !!e; if (e) { if (a.isBigNumber(e)) return !e.isZero(); if (a.isComplex(e)) return !(!e.re && !e.im); if (a.isUnit(e)) return !!e.value } if (null != e) throw new TypeError('Unsupported type of condition "' + s(e) + '"'); return !1 }(n(e, t, r)) ? i(e, t, r) : o(e, t, r) } }, i.prototype.forEach = function(e) { e(this.condition, "condition", this), e(this.trueExpr, "trueExpr", this), e(this.falseExpr, "falseExpr", this) }, i.prototype.map = function(e) { return new i(this._ifNode(e(this.condition, "condition", this)), this._ifNode(e(this.trueExpr, "trueExpr", this)), this._ifNode(e(this.falseExpr, "falseExpr", this))) }, i.prototype.clone = function() { return new i(this.condition, this.trueExpr, this.falseExpr) }, i.prototype._toString = function(e) { var t = e && e.parenthesis ? e.parenthesis : "keep",
                    r = c.getPrecedence(this, t),
                    n = this.condition.toString(e),
                    i = c.getPrecedence(this.condition, t);
                ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= r) && (n = "(" + n + ")"); var o = this.trueExpr.toString(e),
                    a = c.getPrecedence(this.trueExpr, t);
                ("all" === t || "OperatorNode" === this.trueExpr.type || null !== a && a <= r) && (o = "(" + o + ")"); var s = this.falseExpr.toString(e),
                    u = c.getPrecedence(this.falseExpr, t); return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== u && u <= r) && (s = "(" + s + ")"), n + " ? " + o + " : " + s }, i.prototype.toJSON = function() { return { mathjs: "ConditionalNode", condition: this.condition, trueExpr: this.trueExpr, falseExpr: this.falseExpr } }, i.fromJSON = function(e) { return new i(e.condition, e.trueExpr, e.falseExpr) }, i.prototype.toHTML = function(e) { var t = e && e.parenthesis ? e.parenthesis : "keep",
                    r = c.getPrecedence(this, t),
                    n = this.condition.toHTML(e),
                    i = c.getPrecedence(this.condition, t);
                ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= r) && (n = '<span class="math-parenthesis math-round-parenthesis">(</span>' + n + '<span class="math-parenthesis math-round-parenthesis">)</span>'); var o = this.trueExpr.toHTML(e),
                    a = c.getPrecedence(this.trueExpr, t);
                ("all" === t || "OperatorNode" === this.trueExpr.type || null !== a && a <= r) && (o = '<span class="math-parenthesis math-round-parenthesis">(</span>' + o + '<span class="math-parenthesis math-round-parenthesis">)</span>'); var s = this.falseExpr.toHTML(e),
                    u = c.getPrecedence(this.falseExpr, t); return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== u && u <= r) && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), n + '<span class="math-operator math-conditional-operator">?</span>' + o + '<span class="math-operator math-conditional-operator">:</span>' + s }, i.prototype._toTex = function(e) { return "\\begin{cases} {" + this.trueExpr.toTex(e) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(e) + "}\\\\{" + this.falseExpr.toTex(e) + "}, &\\quad{\\text{otherwise}}\\end{cases}" }, i } }, function(e, t, a) { "use strict"; var s = a(107),
            u = a(9).escape,
            l = a(2).forEach,
            p = a(2).join,
            c = a(4),
            m = a(50),
            h = a(13).setSafeProperty;
        t.name = "FunctionAssignmentNode", t.path = "expression.node", t.factory = function(n, e, t, f) { var r = t(a(16));

            function i(e, t, r) { if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator"); if ("string" != typeof e) throw new TypeError('String expected for parameter "name"'); if (!Array.isArray(t)) throw new TypeError('Array containing strings or objects expected for parameter "params"'); if (!n.isNode(r)) throw new TypeError('Node expected for parameter "expr"'); if (e in s) throw new Error('Illegal function name, "' + e + '" is a reserved keyword');
                this.name = e, this.params = t.map(function(e) { return e && e.name || e }), this.types = t.map(function(e) { return e && e.type || "any" }), this.expr = r }

            function o(e, t) { var r = m.getPrecedence(e, t),
                    n = m.getPrecedence(e.expr, t); return "all" === t || null !== n && n <= r } return (i.prototype = new r).type = "FunctionAssignmentNode", i.prototype.isFunctionAssignmentNode = !0, i.prototype._compile = function(e, t) { var r = Object.create(t);
                l(this.params, function(e) { r[e] = !0 }); var o = this.expr._compile(e, r),
                    a = this.name,
                    s = this.params,
                    u = p(this.types, ","),
                    c = a + "(" + p(this.params, ", ") + ")"; return function(r, n, i) { var e = {};
                    e[u] = function() { for (var e = Object.create(n), t = 0; t < s.length; t++) e[s[t]] = arguments[t]; return o(r, e, i) }; var t = f(a, e); return t.syntax = c, h(r, a, t), t } }, i.prototype.forEach = function(e) { e(this.expr, "expr", this) }, i.prototype.map = function(e) { var t = this._ifNode(e(this.expr, "expr", this)); return new i(this.name, this.params.slice(0), t) }, i.prototype.clone = function() { return new i(this.name, this.params.slice(0), this.expr) }, i.prototype._toString = function(e) { var t = e && e.parenthesis ? e.parenthesis : "keep",
                    r = this.expr.toString(e); return o(this, t) && (r = "(" + r + ")"), this.name + "(" + this.params.join(", ") + ") = " + r }, i.prototype.toJSON = function() { var r = this.types; return { mathjs: "FunctionAssignmentNode", name: this.name, params: this.params.map(function(e, t) { return { name: e, type: r[t] } }), expr: this.expr } }, i.fromJSON = function(e) { return new i(e.name, e.params, e.expr) }, i.prototype.toHTML = function(e) { for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = [], n = 0; n < this.params.length; n++) r.push('<span class="math-symbol math-parameter">' + u(this.params[n]) + "</span>"); var i = this.expr.toHTML(e); return o(this, t) && (i = '<span class="math-parenthesis math-round-parenthesis">(</span>' + i + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + u(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + r.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + i }, i.prototype._toTex = function(e) { var t = e && e.parenthesis ? e.parenthesis : "keep",
                    r = this.expr.toTex(e); return o(this, t) && (r = "\\left(".concat(r, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(c.toSymbol).join(",") + "\\right):=" + r }, i } }, function(e, t, s) { "use strict"; var u = s(2).map,
            c = s(9).escape;
        t.name = "IndexNode", t.path = "expression.node", t.factory = function(h, e, t, r) { var n = t(s(16)),
                i = t(s(100)),
                o = Array.isArray;

            function a(e, t) { if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator"); if (this.dimensions = e, this.dotNotation = t || !1, !o(e) || !e.every(h.isNode)) throw new TypeError('Array containing Nodes expected for parameter "dimensions"'); if (this.dotNotation && !this.isObjectProperty()) throw new Error("dotNotation only applicable for object properties"); var r = function() { throw new Error("Property `IndexNode.object` is deprecated, use `IndexNode.fn` instead") };
                Object.defineProperty(this, "object", { get: r, set: r }) }

            function d(e, t, r) { return new i(h.isBigNumber(e) ? e.toNumber() : e, h.isBigNumber(t) ? t.toNumber() : t, h.isBigNumber(r) ? r.toNumber() : r) } return (a.prototype = new n).type = "IndexNode", a.prototype.isIndexNode = !0, a.prototype._compile = function(p, m) { var i = u(this.dimensions, function(e, o) { if (h.isRangeNode(e)) { if (e.needsEnd()) { var t = Object.create(m);
                            t.end = !0; var a = e.start._compile(p, t),
                                s = e.end._compile(p, t),
                                u = e.step ? e.step._compile(p, t) : function() { return 1 }; return function(e, t, r) { var n = p.size(r).valueOf(),
                                    i = Object.create(t); return i.end = n[o], d(a(e, i, r), s(e, i, r), u(e, i, r)) } } var n = e.start._compile(p, m),
                            i = e.end._compile(p, m),
                            c = e.step ? e.step._compile(p, m) : function() { return 1 }; return function(e, t, r) { return d(n(e, t, r), i(e, t, r), c(e, t, r)) } } if (h.isSymbolNode(e) && "end" === e.name) { var r = Object.create(m);
                        r.end = !0; var f = e._compile(p, r); return function(e, t, r) { var n = p.size(r).valueOf(),
                                i = Object.create(t); return i.end = n[o], f(e, i, r) } } var l = e._compile(p, m); return function(e, t, r) { return l(e, t, r) } }); return function(t, r, n) { var e = u(i, function(e) { return e(t, r, n) }); return p.index.apply(p, e) } }, a.prototype.forEach = function(e) { for (var t = 0; t < this.dimensions.length; t++) e(this.dimensions[t], "dimensions[" + t + "]", this) }, a.prototype.map = function(e) { for (var t = [], r = 0; r < this.dimensions.length; r++) t[r] = this._ifNode(e(this.dimensions[r], "dimensions[" + r + "]", this)); return new a(t) }, a.prototype.clone = function() { return new a(this.dimensions.slice(0)) }, a.prototype.isObjectProperty = function() { return 1 === this.dimensions.length && h.isConstantNode(this.dimensions[0]) && "string" == typeof this.dimensions[0].value }, a.prototype.getObjectProperty = function() { return this.isObjectProperty() ? this.dimensions[0].value : null }, a.prototype._toString = function(e) { return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]" }, a.prototype.toJSON = function() { return { mathjs: "IndexNode", dimensions: this.dimensions, dotNotation: this.dotNotation } }, a.fromJSON = function(e) { return new a(e.dimensions, e.dotNotation) }, a.prototype.toHTML = function(e) { for (var t = [], r = 0; r < this.dimensions.length; r++) t[r] = this.dimensions[r].toHTML(); return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + c(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>' }, a.prototype._toTex = function(t) { var e = this.dimensions.map(function(e) { return e.toTex(t) }); return this.dotNotation ? "." + this.getObjectProperty() : "_{" + e.join(",") + "}" }, a } }, function(e, t, a) { "use strict";

        function s(e) { return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var u = a(9).stringify,
            c = a(9).escape,
            f = a(13).isSafeProperty,
            l = a(5).hasOwnProperty;
        t.name = "ObjectNode", t.path = "expression.node", t.factory = function(r, e, t, n) { var i = t(a(16));

            function o(t) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if (this.properties = t || {}, t && ("object" !== s(t) || !Object.keys(t).every(function(e) { return r.isNode(t[e]) }))) throw new TypeError("Object containing Nodes expected") } return (o.prototype = new i).type = "ObjectNode", o.prototype.isObjectNode = !0, o.prototype._compile = function(e, t) { var o = {}; for (var r in this.properties)
                    if (l(this.properties, r)) { var n = u(r),
                            i = JSON.parse(n); if (!f(this.properties, i)) throw new Error('No access to property "' + i + '"');
                        o[i] = this.properties[r]._compile(e, t) }
                return function(e, t, r) { var n = {}; for (var i in o) l(o, i) && (n[i] = o[i](e, t, r)); return n } }, o.prototype.forEach = function(e) { for (var t in this.properties) this.properties.hasOwnProperty(t) && e(this.properties[t], "properties[" + u(t) + "]", this) }, o.prototype.map = function(e) { var t = {}; for (var r in this.properties) this.properties.hasOwnProperty(r) && (t[r] = this._ifNode(e(this.properties[r], "properties[" + u(r) + "]", this))); return new o(t) }, o.prototype.clone = function() { var e = {}; for (var t in this.properties) this.properties.hasOwnProperty(t) && (e[t] = this.properties[t]); return new o(e) }, o.prototype._toString = function(e) { var t = []; for (var r in this.properties) this.properties.hasOwnProperty(r) && t.push(u(r) + ": " + this.properties[r].toString(e)); return "{" + t.join(", ") + "}" }, o.prototype.toJSON = function() { return { mathjs: "ObjectNode", properties: this.properties } }, o.fromJSON = function(e) { return new o(e.properties) }, o.prototype.toHTML = function(e) { var t = []; for (var r in this.properties) this.properties.hasOwnProperty(r) && t.push('<span class="math-symbol math-property">' + c(r) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[r].toHTML(e)); return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>' }, o.prototype._toTex = function(e) { var t = []; for (var r in this.properties) this.properties.hasOwnProperty(r) && t.push("\\mathbf{" + r + ":} & " + this.properties[r].toTex(e) + "\\\\"); return "\\left\\{\\begin{array}{ll}".concat(t.join("\n"), "\\end{array}\\right\\}") }, o } }, function(e, t, s) { "use strict"; var u = s(50);
        t.name = "RangeNode", t.path = "expression.node", t.factory = function(n, e, t, r) { var i = t(s(16));

            function o(e, t, r) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if (!n.isNode(e)) throw new TypeError("Node expected"); if (!n.isNode(t)) throw new TypeError("Node expected"); if (r && !n.isNode(r)) throw new TypeError("Node expected"); if (3 < arguments.length) throw new Error("Too many arguments");
                this.start = e, this.end = t, this.step = r || null }

            function a(e, t) { var r = u.getPrecedence(e, t),
                    n = {},
                    i = u.getPrecedence(e.start, t); if (n.start = null !== i && i <= r || "all" === t, e.step) { var o = u.getPrecedence(e.step, t);
                    n.step = null !== o && o <= r || "all" === t } var a = u.getPrecedence(e.end, t); return n.end = null !== a && a <= r || "all" === t, n } return (o.prototype = new i).type = "RangeNode", o.prototype.isRangeNode = !0, o.prototype.needsEnd = function() { return 0 < this.filter(function(e) { return n.isSymbolNode(e) && "end" === e.name }).length }, o.prototype._compile = function(e, t) { var n = e.range,
                    i = this.start._compile(e, t),
                    o = this.end._compile(e, t); if (this.step) { var a = this.step._compile(e, t); return function(e, t, r) { return n(i(e, t, r), o(e, t, r), a(e, t, r)) } } return function(e, t, r) { return n(i(e, t, r), o(e, t, r)) } }, o.prototype.forEach = function(e) { e(this.start, "start", this), e(this.end, "end", this), this.step && e(this.step, "step", this) }, o.prototype.map = function(e) { return new o(this._ifNode(e(this.start, "start", this)), this._ifNode(e(this.end, "end", this)), this.step && this._ifNode(e(this.step, "step", this))) }, o.prototype.clone = function() { return new o(this.start, this.end, this.step && this.step) }, o.prototype._toString = function(e) { var t, r = a(this, e && e.parenthesis ? e.parenthesis : "keep"),
                    n = this.start.toString(e); if (r.start && (n = "(" + n + ")"), t = n, this.step) { var i = this.step.toString(e);
                    r.step && (i = "(" + i + ")"), t += ":" + i } var o = this.end.toString(e); return r.end && (o = "(" + o + ")"), t += ":" + o }, o.prototype.toJSON = function() { return { mathjs: "RangeNode", start: this.start, end: this.end, step: this.step } }, o.fromJSON = function(e) { return new o(e.start, e.end, e.step) }, o.prototype.toHTML = function(e) { var t, r = a(this, e && e.parenthesis ? e.parenthesis : "keep"),
                    n = this.start.toHTML(e); if (r.start && (n = '<span class="math-parenthesis math-round-parenthesis">(</span>' + n + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t = n, this.step) { var i = this.step.toHTML(e);
                    r.step && (i = '<span class="math-parenthesis math-round-parenthesis">(</span>' + i + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t += '<span class="math-operator math-range-operator">:</span>' + i } var o = this.end.toHTML(e); return r.end && (o = '<span class="math-parenthesis math-round-parenthesis">(</span>' + o + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t += '<span class="math-operator math-range-operator">:</span>' + o }, o.prototype._toTex = function(e) { var t = a(this, e && e.parenthesis ? e.parenthesis : "keep"),
                    r = this.start.toTex(e); if (t.start && (r = "\\left(".concat(r, "\\right)")), this.step) { var n = this.step.toTex(e);
                    t.step && (n = "\\left(".concat(n, "\\right)")), r += ":" + n } var i = this.end.toTex(e); return t.end && (i = "\\left(".concat(i, "\\right)")), r += ":" + i }, o } }, function(e, t, a) { "use strict"; var s = a(50),
            u = a(4),
            f = a(9).escape;
        t.name = "RelationalNode", t.path = "expression.node", t.factory = function(e, t, r, n) { var i = r(a(16)),
                c = a(13).getSafeProperty;

            function o(e, t) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if (!Array.isArray(e)) throw new TypeError("Parameter conditionals must be an array"); if (!Array.isArray(t)) throw new TypeError("Parameter params must be an array"); if (e.length !== t.length - 1) throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
                this.conditionals = e, this.params = t } return (o.prototype = new i).type = "RelationalNode", o.prototype.isRelationalNode = !0, o.prototype._compile = function(a, t) { var s = this,
                    u = this.params.map(function(e) { return e._compile(a, t) }); return function(e, t, r) { for (var n, i = u[0](e, t, r), o = 0; o < s.conditionals.length; o++)
                        if (n = i, i = u[o + 1](e, t, r), !c(a, s.conditionals[o])(n, i)) return !1;
                    return !0 } }, o.prototype.forEach = function(r) { var n = this;
                this.params.forEach(function(e, t) { return r(e, "params[" + t + "]", n) }, this) }, o.prototype.map = function(r) { var n = this; return new o(this.conditionals.slice(), this.params.map(function(e, t) { return n._ifNode(r(e, "params[" + t + "]", n)) }, this)) }, o.prototype.clone = function() { return new o(this.conditionals, this.params) }, o.prototype._toString = function(n) { for (var i = n && n.parenthesis ? n.parenthesis : "keep", o = s.getPrecedence(this, i), e = this.params.map(function(e, t) { var r = s.getPrecedence(e, i); return "all" === i || null !== r && r <= o ? "(" + e.toString(n) + ")" : e.toString(n) }), t = { equal: "==", unequal: "!=", smaller: "<", larger: ">", smallerEq: "<=", largerEq: ">=" }, r = e[0], a = 0; a < this.conditionals.length; a++) r += " " + t[this.conditionals[a]] + " " + e[a + 1]; return r }, o.prototype.toJSON = function() { return { mathjs: "RelationalNode", conditionals: this.conditionals, params: this.params } }, o.fromJSON = function(e) { return new o(e.conditionals, e.params) }, o.prototype.toHTML = function(n) { for (var i = n && n.parenthesis ? n.parenthesis : "keep", o = s.getPrecedence(this, i), e = this.params.map(function(e, t) { var r = s.getPrecedence(e, i); return "all" === i || null !== r && r <= o ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + e.toHTML(n) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : e.toHTML(n) }), t = { equal: "==", unequal: "!=", smaller: "<", larger: ">", smallerEq: "<=", largerEq: ">=" }, r = e[0], a = 0; a < this.conditionals.length; a++) r += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + f(t[this.conditionals[a]]) + "</span>" + e[a + 1]; return r }, o.prototype._toTex = function(n) { for (var i = n && n.parenthesis ? n.parenthesis : "keep", o = s.getPrecedence(this, i), e = this.params.map(function(e, t) { var r = s.getPrecedence(e, i); return "all" === i || null !== r && r <= o ? "\\left(" + e.toString(n) + "\right)" : e.toString(n) }), t = e[0], r = 0; r < this.conditionals.length; r++) t += u.operators[this.conditionals[r]] + e[r + 1]; return t }, o } }, function(e, t, u) { "use strict";
        t.math = !0, t.name = "simplifyConstant", t.path = "algebra.simplify", t.factory = function(p, r, e, t, m) { var n = e(u(119)),
                h = n.isCommutative,
                d = n.isAssociative,
                y = n.allChildren,
                g = n.createMakeNodeFunction,
                i = m.expression.node.ConstantNode,
                o = m.expression.node.OperatorNode,
                v = m.expression.node.FunctionNode;

            function x(t, r, n) { try { return w(m[t].apply(null, r), n) } catch (e) { return r = r.map(function(e) { return p.isFraction(e) ? e.valueOf() : e }), w(m[t].apply(null, r), n) } } var b = t({ Fraction: function(e) { var t, r = e.s * e.n; return t = r < 0 ? new o("-", "unaryMinus", [new i(-r)]) : new i(r), 1 !== e.d ? new o("/", "divide", [t, new i(e.d)]) : t }, number: function(e) { return e < 0 ? s(new i(-e)) : new i(e) }, BigNumber: function(e) { return e < 0 ? s(new i(-e)) : new i(e) }, Complex: function(e) { throw new Error("Cannot convert Complex number to Node") } });

            function a(e, t) { if (t && !1 !== t.exactFractions && isFinite(e)) { var r = m.fraction(e); if (r.valueOf() === e) return r } return e } var w = t({ "string, Object": function(e, t) { return "BigNumber" === r.number ? m.bignumber(e) : "Fraction" === r.number ? m.fraction(e) : a(parseFloat(e), t) }, "Fraction, Object": function(e, t) { return e }, "BigNumber, Object": function(e, t) { return e }, "number, Object": function(e, t) { return a(e, t) }, "Complex, Object": function(e, t) { return 0 !== e.im ? e : a(e.re, t) } });

            function s(e) { return new o("-", "unaryMinus", [e]) }

            function N(r, e, n, i) { return e.reduce(function(e, t) { if (p.isNode(e) || p.isNode(t)) p.isNode(e) ? p.isNode(t) || (t = b(t)) : e = b(e);
                    else { try { return x(r, [e, t], i) } catch (e) {}
                        e = b(e), t = b(t) } return n([e, t]) }) } return function(e, t) { var r = function t(e, r) { switch (e.type) {
                        case "SymbolNode":
                            return e;
                        case "ConstantNode":
                            return "number" != typeof e.value && isNaN(e.value) ? e : w(e.value, r);
                        case "FunctionNode":
                            if (m[e.name] && m[e.name].rawArgs) return e; var n = ["add", "multiply"]; if (-1 === n.indexOf(e.name)) { var i = e.args.map(function(e) { return t(e, r) }); if (!i.some(p.isNode)) try { return x(e.name, i, r) } catch (e) {}
                                return i = i.map(function(e) { return p.isNode(e) ? e : b(e) }), new v(e.name, i) }
                        case "OperatorNode":
                            var o, a, s = e.fn.toString(),
                                u = g(e); if (e.isUnary()) o = [t(e.args[0], r)], a = p.isNode(o[0]) ? u(o) : x(s, o, r);
                            else if (d(e))
                                if (o = (o = y(e)).map(function(e) { return t(e, r) }), h(s)) { for (var c = [], f = [], l = 0; l < o.length; l++) p.isNode(o[l]) ? f.push(o[l]) : c.push(o[l]);
                                    a = 1 < c.length ? (a = N(s, c, u, r), f.unshift(a), N(s, f, u, r)) : N(s, o, u, r) } else a = N(s, o, u, r);
                            else o = e.args.map(function(e) { return t(e, r) }), a = N(s, o, u, r); return a;
                        case "ParenthesisNode":
                            return t(e.content, r);
                        case "AccessorNode":
                        case "ArrayNode":
                        case "AssignmentNode":
                        case "BlockNode":
                        case "FunctionAssignmentNode":
                        case "IndexNode":
                        case "ObjectNode":
                        case "RangeNode":
                        case "UpdateNode":
                        case "ConditionalNode":
                        default:
                            throw new Error("Unimplemented node type in simplifyConstant: ".concat(e.type)) } }(e, t); return p.isNode(r) ? r : b(r) } } }, function(e, t, r) { "use strict";
        t.factory = function(a, e, t, r, n) { var i = n.expression.node.FunctionNode,
                o = n.expression.node.OperatorNode,
                s = n.expression.node.SymbolNode,
                u = { add: !0, multiply: !0 },
                c = { add: !0, multiply: !0 };

            function f(e, t) { if (!a.isOperatorNode(e)) return !1; var r = e.fn.toString(); return t && t.hasOwnProperty(r) && t[r].hasOwnProperty("associative") ? t[r].associative : c[r] || !1 }

            function l(e) { var i, o = []; return f(e) ? (i = e.op, function e(t) { for (var r = 0; r < t.args.length; r++) { var n = t.args[r];
                        a.isOperatorNode(n) && i === n.op ? e(n) : o.push(n) } }(e), o) : e.args }

            function p(t) { return a.isOperatorNode(t) ? function(e) { try { return new o(t.op, t.fn, e, t.implicit) } catch (e) { return console.error(e), [] } } : function(e) { return new i(new s(t.name), e) } } return { createMakeNodeFunction: p, isCommutative: function(e, t) { if (!a.isOperatorNode(e)) return !0; var r = e.fn.toString(); return t && t.hasOwnProperty(r) && t[r].hasOwnProperty("commutative") ? t[r].commutative : u[r] || !1 }, isAssociative: f, flatten: function e(t) { if (!t.args || 0 === t.args.length) return t;
                    t.args = l(t); for (var r = 0; r < t.args.length; r++) e(t.args[r]) }, allChildren: l, unflattenr: function e(t) { if (t.args && 0 !== t.args.length) { for (var r = p(t), n = t.args.length, i = 0; i < n; i++) e(t.args[i]); if (2 < n && f(t)) { for (var o = t.args.pop(); 0 < t.args.length;) o = r([t.args.pop(), o]);
                            t.args = o.args } } }, unflattenl: function e(t) { if (t.args && 0 !== t.args.length) { for (var r = p(t), n = t.args.length, i = 0; i < n; i++) e(t.args[i]); if (2 < n && f(t)) { for (var o = t.args.shift(); 0 < t.args.length;) o = r([o, t.args.shift()]);
                            t.args = o.args } } } } }, t.math = !0 }, function(e, t, i) { "use strict";
        t.math = !0, t.name = "simplifyCore", t.path = "algebra.simplify", t.factory = function(f, e, t, r, n) { var l = t(i(49)),
                p = t(i(59)),
                m = t(i(14)),
                h = t(i(15)),
                d = t(i(10)),
                y = t(i(44)),
                g = t(i(40)),
                v = n.expression.node.ConstantNode,
                x = n.expression.node.OperatorNode,
                b = n.expression.node.FunctionNode,
                w = n.expression.node.ParenthesisNode,
                N = new v(0),
                M = new v(1); return function e(t) { if (f.isOperatorNode(t) && t.isUnary()) { var r = e(t.args[0]); if ("+" === t.op) return r; if ("-" === t.op) { if (f.isOperatorNode(r)) { if (r.isUnary() && "-" === r.op) return r.args[0]; if (r.isBinary() && "subtract" === r.fn) return new x("-", "subtract", [r.args[1], r.args[0]]) } return new x(t.op, t.fn, [r]) } } else if (f.isOperatorNode(t) && t.isBinary()) { var n = e(t.args[0]),
                        i = e(t.args[1]); if ("+" === t.op) { if (f.isConstantNode(n)) { if (p(n.value)) return i; if (f.isConstantNode(i)) return new v(m(n.value, i.value)) } return f.isConstantNode(i) && p(i.value) ? n : f.isOperatorNode(i) && i.isUnary() && "-" === i.op ? new x("-", "subtract", [n, i.args[0]]) : new x(t.op, t.fn, i ? [n, i] : [n]) } if ("-" === t.op) { if (f.isConstantNode(n) && i) { if (f.isConstantNode(i)) return new v(h(n.value, i.value)); if (p(n.value)) return new x("-", "unaryMinus", [i]) } if ("subtract" === t.fn) return f.isConstantNode(i) && p(i.value) ? n : f.isOperatorNode(i) && i.isUnary() && "-" === i.op ? e(new x("+", "add", [n, i.args[0]])) : new x(t.op, t.fn, [n, i]) } else { if ("*" === t.op) { if (f.isConstantNode(n)) { if (p(n.value)) return N; if (l(n.value, 1)) return i; if (f.isConstantNode(i)) return new v(d(n.value, i.value)) } if (f.isConstantNode(i)) { if (p(i.value)) return N; if (l(i.value, 1)) return n; if (f.isOperatorNode(n) && n.isBinary() && n.op === t.op) { var o = n.args[0]; if (f.isConstantNode(o)) { var a = new v(d(o.value, i.value)); return new x(t.op, t.fn, [a, n.args[1]], t.implicit) } } return new x(t.op, t.fn, [i, n], t.implicit) } return new x(t.op, t.fn, [n, i], t.implicit) } if ("/" === t.op) { if (f.isConstantNode(n)) { if (p(n.value)) return N; if (f.isConstantNode(i) && (l(i.value, 1) || l(i.value, 2) || l(i.value, 4))) return new v(y(n.value, i.value)) } return new x(t.op, t.fn, [n, i]) } if ("^" === t.op) { if (f.isConstantNode(i)) { if (p(i.value)) return M; if (l(i.value, 1)) return n; if (f.isConstantNode(n)) return new v(g(n.value, i.value)); if (f.isOperatorNode(n) && n.isBinary() && "^" === n.op) { var s = n.args[1]; if (f.isConstantNode(s)) return new x(t.op, t.fn, [n.args[0], new v(d(s.value, i.value))]) } } return new x(t.op, t.fn, [n, i]) } } } else { if (f.isParenthesisNode(t)) { var u = e(t.content); return f.isParenthesisNode(u) || f.isSymbolNode(u) || f.isConstantNode(u) ? u : new w(u) } if (f.isFunctionNode(t)) { var c = t.args.map(e).map(function(e) { return f.isParenthesisNode(e) ? e.content : e }); return new b(e(t.fn), c) } } return t } } }, function(e, t, a) { "use strict"; var r = a(30),
            d = r.object,
            s = r.string;
        t.name = "det", t.factory = function(i, e, t, r) { var o = t(a(1)),
                l = t(a(15)),
                p = t(a(10)),
                m = t(a(34)),
                h = t(a(84)),
                n = r("det", { any: function(e) { return d.clone(e) }, "Array | Matrix": function(e) { var t; switch ((t = i.isMatrix(e) ? e.size() : Array.isArray(e) ? (e = o(e)).size() : []).length) {
                            case 0:
                                return d.clone(e);
                            case 1:
                                if (1 === t[0]) return d.clone(e.valueOf()[0]); throw new RangeError("Matrix must be square (size: " + s.format(t) + ")");
                            case 2:
                                var r = t[0],
                                    n = t[1]; if (r === n) return function(e, t, r) { if (1 === t) return d.clone(e[0][0]); if (2 === t) return l(p(e[0][0], e[1][1]), p(e[1][0], e[0][1])); for (var n = h(e), i = n.U[0][0], o = 1; o < t; o++) i = p(i, n.U[o][o]); for (var a = 0, s = 0, u = [];;) { for (; u[s];) s++; if (t <= s) break; for (var c = s, f = 0; !u[n.p[c]];) u[n.p[c]] = !0, c = n.p[c], f++;
                                        f % 2 == 0 && a++ } return a % 2 == 0 ? i : m(i) }(e.clone().valueOf(), r); throw new RangeError("Matrix must be square (size: " + s.format(t) + ")");
                            default:
                                throw new RangeError("Matrix must be two dimensional (size: " + s.format(t) + ")") } } }); return n.toTex = { 1: "\\det\\left(${args[0]}\\right)" }, n } }, function(e, t, o) { "use strict";
        t.name = "parse", t.factory = function(e, t, r, n) { var i = r(o(42)); return n("parse", { "string | Array | Matrix": i, "string | Array | Matrix, Object": i }) } }, function(e, t, m) { "use strict"; var h = m(3).nearlyEqual,
            d = m(37);
        t.name = "unequal", t.factory = function(e, r, t, n) { var i = t(m(1)),
                o = t(m(18)),
                a = t(m(27)),
                s = t(m(19)),
                u = t(m(7)),
                c = t(m(6)),
                f = m(4),
                l = n("unequal", { "any, any": function(e, t) { return null === e ? null !== t : null === t ? null !== e : void 0 === e ? void 0 !== t : void 0 === t ? void 0 !== e : p(e, t) }, "SparseMatrix, SparseMatrix": function(e, t) { return a(e, t, p) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, p, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return o(e, t, p, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return u(e, t, p) }, "Array, Array": function(e, t) { return l(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(i(e), t) }, "Matrix, Array": function(e, t) { return l(e, i(t)) }, "SparseMatrix, any": function(e, t) { return s(e, t, p, !1) }, "DenseMatrix, any": function(e, t) { return c(e, t, p, !1) }, "any, SparseMatrix": function(e, t) { return s(t, e, p, !0) }, "any, DenseMatrix": function(e, t) { return c(t, e, p, !0) }, "Array, any": function(e, t) { return c(i(e), t, p, !1).valueOf() }, "any, Array": function(e, t) { return c(i(t), e, p, !0).valueOf() } }),
                p = n("_unequal", { "boolean, boolean": function(e, t) { return e !== t }, "number, number": function(e, t) { return !h(e, t, r.epsilon) }, "BigNumber, BigNumber": function(e, t) { return !d(e, t, r.epsilon) }, "Fraction, Fraction": function(e, t) { return !e.equals(t) }, "Complex, Complex": function(e, t) { return !e.equals(t) }, "Unit, Unit": function(e, t) { if (!e.equalBase(t)) throw new Error("Cannot compare units with different base"); return l(e.value, t.value) } }); return l.toTex = { 2: "\\left(${args[0]}".concat(f.operators.unequal, "${args[1]}\\right)") }, l } }, function(e, t, r) { "use strict"; var o = r(3),
            a = r(0);
        t.name = "sign", t.factory = function(t, e, r, n) { var i = n("sign", { number: o.sign, Complex: function(e) { return e.sign() }, BigNumber: function(e) { return new t.BigNumber(e.cmp(0)) }, Fraction: function(e) { return new t.Fraction(e.s, 1) }, "Array | Matrix": function(e) { return a(e, i, !0) }, Unit: function(e) { return i(e.value) } }); return i.toTex = { 1: "\\mathrm{${name}}\\left(${args[0]}\\right)" }, i } }, function(e, t, i) { "use strict"; var s = i(30).number.isInteger;
        t.name = "slu", t.factory = function(e, t, r, n) { var o = r(i(202)),
                a = r(i(210)); return n("slu", { "SparseMatrix, number, number": function(e, t, r) { if (!s(t) || t < 0 || 3 < t) throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]"); if (r < 0 || 1 < r) throw new Error("Partial pivoting threshold must be a number from 0 to 1"); var n = o(t, e, !1),
                        i = a(e, n, r); return { L: i.L, U: i.U, p: i.pinv, q: n.q, toString: function() { return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\np: " + this.p.toString() + (this.q ? "\nq: " + this.q.toString() : "") + "\n" } } } }) } }, function(e, t, r) { "use strict";
        t.name = "csTdfs", t.path = "algebra.sparse", t.factory = function() { return function(e, t, r, n, i, o, a) { var s = 0; for (r[a] = e; 0 <= s;) { var u = r[a + s],
                        c = r[n + u]; - 1 === c ? (s--, o[t++] = u) : (r[n + u] = r[i + c], r[a + ++s] = c) } return t } } }, function(e, t, p) { "use strict"; var m = p(3).nearlyEqual,
            h = p(37);
        t.name = "largerEq", t.factory = function(e, r, t, n) { var i = t(p(1)),
                o = t(p(18)),
                a = t(p(27)),
                s = t(p(19)),
                u = t(p(7)),
                c = t(p(6)),
                f = p(4),
                l = n("largerEq", { "boolean, boolean": function(e, t) { return t <= e }, "number, number": function(e, t) { return t <= e || m(e, t, r.epsilon) }, "BigNumber, BigNumber": function(e, t) { return e.gte(t) || h(e, t, r.epsilon) }, "Fraction, Fraction": function(e, t) { return -1 !== e.compare(t) }, "Complex, Complex": function() { throw new TypeError("No ordering relation is defined for complex numbers") }, "Unit, Unit": function(e, t) { if (!e.equalBase(t)) throw new Error("Cannot compare units with different base"); return l(e.value, t.value) }, "SparseMatrix, SparseMatrix": function(e, t) { return a(e, t, l) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return o(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return u(e, t, l) }, "Array, Array": function(e, t) { return l(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(i(e), t) }, "Matrix, Array": function(e, t) { return l(e, i(t)) }, "SparseMatrix, any": function(e, t) { return s(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return c(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return s(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return c(t, e, l, !0) }, "Array, any": function(e, t) { return c(i(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return c(i(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(f.operators.largerEq, "${args[1]}\\right)") }, l } }, function(e, t, r) { "use strict";
        t.name = "csMarked", t.path = "algebra.sparse", t.factory = function() { return function(e, t) { return e[t] < 0 } } }, function(e, t, i) { "use strict";
        t.name = "csMark", t.path = "algebra.sparse", t.factory = function(e, t, r) { var n = r(i(85)); return function(e, t) { e[t] = n(e[t]) } } }, function(e, t, a) { "use strict";
        t.name = "lsolve", t.factory = function(e, t, r, n) { var i = r(a(1)),
                v = r(a(12)),
                x = r(a(21)),
                b = r(a(15)),
                w = r(a(11)),
                N = r(a(86)),
                M = e.DenseMatrix;

            function o(e, t) { for (var r = (t = N(e, t, !0))._data, n = e._size[0], i = e._size[1], o = [], a = e._data, s = 0; s < i; s++) { var u = r[s][0] || 0,
                        c = void 0; if (w(u, 0)) c = 0;
                    else { var f = a[s][s]; if (w(f, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
                        c = v(u, f); for (var l = s + 1; l < n; l++) r[l] = [b(r[l][0] || 0, x(c, a[l][s]))] }
                    o[s] = [c] } return new M({ data: o, size: [n, 1] }) } return n("lsolve", { "SparseMatrix, Array | Matrix": function(e, t) { return function(e, t) { for (var r, n, i = (t = N(e, t, !0))._data, o = e._size[0], a = e._size[1], s = e._values, u = e._index, c = e._ptr, f = [], l = 0; l < a; l++) { var p = i[l][0] || 0; if (w(p, 0)) f[l] = [0];
                            else { var m = 0,
                                    h = [],
                                    d = [],
                                    y = c[l + 1]; for (n = c[l]; n < y; n++)(r = u[n]) === l ? m = s[n] : l < r && (h.push(s[n]), d.push(r)); if (w(m, 0)) throw new Error("Linear system cannot be solved since matrix is singular"); var g = v(p, m); for (n = 0, y = d.length; n < y; n++) r = d[n], i[r] = [b(i[r][0] || 0, x(g, h[n]))];
                                f[l] = [g] } } return new M({ data: f, size: [o, 1] }) }(e, t) }, "DenseMatrix, Array | Matrix": function(e, t) { return o(e, t) }, "Array, Array | Matrix": function(e, t) { return o(i(e), t).valueOf() } }) } }, function(e, t, a) { "use strict";
        t.name = "usolve", t.factory = function(e, t, r, n) { var i = r(a(1)),
                x = r(a(12)),
                b = r(a(21)),
                w = r(a(15)),
                N = r(a(11)),
                M = r(a(86)),
                E = e.DenseMatrix;

            function o(e, t) { for (var r = (t = M(e, t, !0))._data, n = e._size[0], i = e._size[1], o = [], a = e._data, s = i - 1; 0 <= s; s--) { var u = r[s][0] || 0,
                        c = void 0; if (N(u, 0)) c = 0;
                    else { var f = a[s][s]; if (N(f, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
                        c = x(u, f); for (var l = s - 1; 0 <= l; l--) r[l] = [w(r[l][0] || 0, b(c, a[l][s]))] }
                    o[s] = [c] } return new E({ data: o, size: [n, 1] }) } return n("usolve", { "SparseMatrix, Array | Matrix": function(e, t) { return function(e, t) { for (var r, n, i = (t = M(e, t, !0))._data, o = e._size[0], a = e._size[1], s = e._values, u = e._index, c = e._ptr, f = [], l = a - 1; 0 <= l; l--) { var p = i[l][0] || 0; if (N(p, 0)) f[l] = [0];
                            else { var m = 0,
                                    h = [],
                                    d = [],
                                    y = c[l],
                                    g = c[l + 1]; for (n = g - 1; y <= n; n--)(r = u[n]) === l ? m = s[n] : r < l && (h.push(s[n]), d.push(r)); if (N(m, 0)) throw new Error("Linear system cannot be solved since matrix is singular"); var v = x(p, m); for (n = 0, g = d.length; n < g; n++) r = d[n], i[r] = [w(i[r][0], b(v, h[n]))];
                                f[l] = [v] } } return new E({ data: f, size: [o, 1] }) }(e, t) }, "DenseMatrix, Array | Matrix": function(e, t) { return o(e, t) }, "Array, Array | Matrix": function(e, t) { return o(i(e), t).valueOf() } }) } }, function(e, t, d) { "use strict";
        t.name = "dotDivide", t.factory = function(e, t, r, n) { var i = r(d(1)),
                o = r(d(12)),
                a = d(4),
                s = r(d(25)),
                u = r(d(18)),
                c = r(d(27)),
                f = r(d(20)),
                l = r(d(19)),
                p = r(d(7)),
                m = r(d(6)),
                h = n("dotDivide", { "any, any": o, "SparseMatrix, SparseMatrix": function(e, t) { return c(e, t, o, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return s(t, e, o, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return u(e, t, o, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return p(e, t, o) }, "Array, Array": function(e, t) { return h(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return h(i(e), t) }, "Matrix, Array": function(e, t) { return h(e, i(t)) }, "SparseMatrix, any": function(e, t) { return f(e, t, o, !1) }, "DenseMatrix, any": function(e, t) { return m(e, t, o, !1) }, "any, SparseMatrix": function(e, t) { return l(t, e, o, !0) }, "any, DenseMatrix": function(e, t) { return m(t, e, o, !0) }, "Array, any": function(e, t) { return m(i(e), t, o, !1).valueOf() }, "any, Array": function(e, t) { return m(i(t), e, o, !0).valueOf() } }); return h.toTex = { 2: "\\left(${args[0]}".concat(a.operators.dotDivide, "${args[1]}\\right)") }, h } }, function(e, t, n) { "use strict"; var R = n(8);
        t.name = "algorithm09", t.factory = function(e, t, r, k) { var I = r(n(11)),
                P = e.SparseMatrix; return function(e, t, r) { var n = e._values,
                    i = e._index,
                    o = e._ptr,
                    a = e._size,
                    s = e._datatype,
                    u = t._values,
                    c = t._index,
                    f = t._ptr,
                    l = t._size,
                    p = t._datatype; if (a.length !== l.length) throw new R(a.length, l.length); if (a[0] !== l[0] || a[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + l + ")"); var m, h = a[0],
                    d = a[1],
                    y = I,
                    g = 0,
                    v = r; "string" == typeof s && s === p && (m = s, y = k.find(I, [m, m]), g = k.convert(0, m), v = k.find(r, [m, m])); var x, b, w, N, M, E = n && u ? [] : void 0,
                    A = [],
                    S = [],
                    O = new P({ values: E, index: A, ptr: S, size: [h, d], datatype: m }),
                    T = E ? [] : void 0,
                    _ = []; for (b = 0; b < d; b++) { S[b] = A.length; var C = b + 1; if (T)
                        for (N = f[b], M = f[b + 1], w = N; w < M; w++) _[x = c[w]] = C, T[x] = u[w]; for (N = o[b], M = o[b + 1], w = N; w < M; w++)
                        if (x = i[w], T) { var z = _[x] === C ? T[x] : g,
                                B = v(n[w], z);
                            y(B, g) || (A.push(x), E.push(B)) } else A.push(x) } return S[d] = A.length, O } } }, function(e, t, o) { "use strict";
        t.name = "stirlingS2", t.factory = function(e, t, r, n) { var u = r(o(14)),
                c = r(o(15)),
                f = r(o(10)),
                l = r(o(44)),
                p = r(o(40)),
                m = r(o(73)),
                h = r(o(74)),
                d = r(o(60)),
                y = r(o(35)),
                g = r(o(33)),
                i = n("stirlingS2", { "number | BigNumber, number | BigNumber": function(e, t) { if (!y(e) || d(e) || !y(t) || d(t)) throw new TypeError("Non-negative integer value expected in function stirlingS2"); if (g(t, e)) throw new TypeError("k must be less than or equal to n in function stirlingS2"); for (var r = m(t), n = 0, i = 0; i <= t; i++) { var o = p(-1, c(t, i)),
                                a = h(t, i),
                                s = p(i, e);
                            n = u(n, f(f(a, s), o)) } return l(n, r) } }); return i.toTex = { 2: "\\mathrm{S}\\left(${args}\\right)" }, i } }, function(e, t, r) { "use strict"; var n = r(0),
            m = r(3).isInteger; var h = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22];
        t.name = "gamma", t.factory = function(c, i, e, t) { var f = e(r(10)),
                l = e(r(40)),
                u = r(91),
                p = t("gamma", { number: function(e) { var t, r; if (m(e)) return e <= 0 ? isFinite(e) ? 1 / 0 : NaN : 171 < e ? 1 / 0 : u(1, e - 1); if (e < .5) return Math.PI / (Math.sin(Math.PI * e) * p(1 - e)); if (171.35 <= e) return 1 / 0; if (85 < e) { var n = e * e,
                                i = n * e,
                                o = i * e,
                                a = o * e; return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * n) - 139 / (51840 * i) - 571 / (2488320 * o) + 163879 / (209018880 * a) + 5246819 / (75246796800 * a * e)) }--e, r = h[0]; for (var s = 1; s < h.length; ++s) r += h[s] / (e + s); return t = e + 4.7421875 + .5, Math.sqrt(2 * Math.PI) * Math.pow(t, e + .5) * Math.exp(-t) * r }, Complex: function(e) { var t, r; if (0 === e.im) return p(e.re);
                        e = new c.Complex(e.re - 1, e.im), r = new c.Complex(h[0], 0); for (var n = 1; n < h.length; ++n) { var i = e.re + n,
                                o = i * i + e.im * e.im;
                            0 !== o ? (r.re += h[n] * i / o, r.im += -h[n] * e.im / o) : r.re = h[n] < 0 ? -1 / 0 : 1 / 0 }
                        t = new c.Complex(e.re + 4.7421875 + .5, e.im); var a = Math.sqrt(2 * Math.PI);
                        e.re += .5; var s = l(t, e);
                        0 === s.im ? s.re *= a : (0 === s.re || (s.re *= a), s.im *= a); var u = Math.exp(-t.re); return t.re = u * Math.cos(-t.im), t.im = u * Math.sin(-t.im), f(f(s, t), r) }, BigNumber: function(e) { if (e.isInteger()) return e.isNegative() || e.isZero() ? new c.BigNumber(1 / 0) : function(e) { if (e.isZero()) return new c.BigNumber(1); for (var t = i.precision + (0 | Math.log(e.toNumber())), r = new(c.BigNumber.clone({ precision: t }))(e), n = e.toNumber() - 1; 1 < n;) r = r.times(n), n--; return new c.BigNumber(r.toPrecision(c.BigNumber.precision)) }(e.minus(1)); if (!e.isFinite()) return new c.BigNumber(e.isNegative() ? NaN : 1 / 0); throw new Error("Integer BigNumber expected") }, "Array | Matrix": function(e) { return n(e, p) } }); return p.toTex = { 1: "\\Gamma\\left(${args[0]}\\right)" }, p } }, function(e, t, a) { "use strict"; var s = a(0);
        t.name = "not", t.factory = function(e, t, r, n) { var i = a(4),
                o = n("not", { number: function(e) { return !e }, Complex: function(e) { return 0 === e.re && 0 === e.im }, BigNumber: function(e) { return e.isZero() || e.isNaN() }, Unit: function(e) { return null === e.value || o(e.value) }, "Array | Matrix": function(e) { return s(e, o) } }); return o.toTex = { 1: i.operators.not + "\\left(${args[0]}\\right)" }, o } }, function(e, t, r) { "use strict"; var n = r(31).maxArgumentCount;

        function o(t, i) { var o = n(i); return function r(e, n) { return Array.isArray(e) ? e.map(function(e, t) { return r(e, n.concat(t)) }) : 1 === o ? i(e) : 2 === o ? i(e, n) : i(e, n, t) }(t, []) }
        t.name = "map", t.factory = function(e, t, r, n) { var i = n("map", { "Array, function": o, "Matrix, function": function(e, t) { return e.map(t) } }); return i.toTex = void 0, i } }, function(e, t, h) { "use strict";
        t.name = "range", t.factory = function(n, i, e, t) { var r = e(h(1)),
                o = new n.BigNumber(0),
                a = new n.BigNumber(1),
                s = t("range", { string: c, "string, boolean": c, "number, number": function(e, t) { return u(f(e, t, 1)) }, "number, number, number": function(e, t, r) { return u(f(e, t, r)) }, "number, number, boolean": function(e, t, r) { return u(r ? l(e, t, 1) : f(e, t, 1)) }, "number, number, number, boolean": function(e, t, r, n) { return u(n ? l(e, t, r) : f(e, t, r)) }, "BigNumber, BigNumber": function(e, t) { return u(p(e, t, a)) }, "BigNumber, BigNumber, BigNumber": function(e, t, r) { return u(p(e, t, r)) }, "BigNumber, BigNumber, boolean": function(e, t, r) { return u(r ? m(e, t, a) : p(e, t, a)) }, "BigNumber, BigNumber, BigNumber, boolean": function(e, t, r, n) { return u(n ? m(e, t, r) : p(e, t, r)) } }); return s.toTex = void 0, s;

            function u(e) { return "Array" === i.matrix ? e : r(e) }

            function c(e, t) { var r = function(e) { var t = e.split(":").map(function(e) { return Number(e) }); if (t.some(function(e) { return isNaN(e) })) return null; switch (t.length) {
                        case 2:
                            return { start: t[0], end: t[1], step: 1 };
                        case 3:
                            return { start: t[0], end: t[2], step: t[1] };
                        default:
                            return null } }(e); if (!r) throw new SyntaxError('String "' + e + '" is no valid range'); return "BigNumber" === i.number ? u((t ? m : p)(new n.BigNumber(r.start), new n.BigNumber(r.end), new n.BigNumber(r.step))) : u((t ? l : f)(r.start, r.end, r.step)) }

            function f(e, t, r) { var n = [],
                    i = e; if (0 < r)
                    for (; i < t;) n.push(i), i += r;
                else if (r < 0)
                    for (; t < i;) n.push(i), i += r; return n }

            function l(e, t, r) { var n = [],
                    i = e; if (0 < r)
                    for (; i <= t;) n.push(i), i += r;
                else if (r < 0)
                    for (; t <= i;) n.push(i), i += r; return n }

            function p(e, t, r) { var n = [],
                    i = e; if (r.gt(o))
                    for (; i.lt(t);) n.push(i), i = i.plus(r);
                else if (r.lt(o))
                    for (; i.gt(t);) n.push(i), i = i.plus(r); return n }

            function m(e, t, r) { var n = [],
                    i = e; if (r.gt(o))
                    for (; i.lte(t);) n.push(i), i = i.plus(r);
                else if (r.lt(o))
                    for (; i.gte(t);) n.push(i), i = i.plus(r); return n } } }, function(e, t, u) { "use strict"; var c = u(46);
        t.name = "sum", t.factory = function(t, n, e, r) { var i = e(u(17)),
                o = e(u(36)),
                a = r("sum", { "Array | Matrix": function(e) { return s(e) }, "Array | Matrix, number | BigNumber": function() { throw new Error("sum(A, dim) is not yet supported") }, "...": function(e) { return s(e) } }); return a.toTex = void 0, a;

            function s(e) { var r; if (c(e, function(t) { try { r = void 0 === r ? t : i(r, t) } catch (e) { throw o(e, "sum", t) } }), void 0 === r) switch (n.number) {
                    case "number":
                        return 0;
                    case "BigNumber":
                        return new t.BigNumber(0);
                    case "Fraction":
                        return new t.Fraction(0);
                    default:
                        return 0 }
                return r } } }, function(e, t, f) { "use strict";
        t.name = "compareText", t.factory = function(r, e, t, n) { var i = t(f(1)),
                o = t(f(24)),
                a = t(f(7)),
                s = t(f(6)),
                u = n("compareText", { "any, any": c, "DenseMatrix, DenseMatrix": function(e, t) { return a(e, t, c) }, "Array, Array": function(e, t) { return u(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return u(i(e), t) }, "Matrix, Array": function(e, t) { return u(e, i(t)) }, "DenseMatrix, any": function(e, t) { return s(e, t, c, !1) }, "any, DenseMatrix": function(e, t) { return s(t, e, c, !0) }, "Array, any": function(e, t) { return s(i(e), t, c, !1).valueOf() }, "any, Array": function(e, t) { return s(i(t), e, c, !0).valueOf() } });

            function c(e, t) { if (!r.isString(e)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + o(e) + ", index: 0)"); if (!r.isString(t)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + o(t) + ", index: 1)"); return e === t ? 0 : t < e ? 1 : -1 } return u.toTex = void 0, u } }, function(e, t, i) { "use strict"; var m = i(2).flatten,
            h = i(2).identify,
            d = i(2).generalize;
        t.name = "setDifference", t.factory = function(e, t, r, n) { var u = r(i(28)),
                c = r(i(47)),
                f = r(i(26)),
                l = r(i(22)),
                p = r(i(29)); return n("setDifference", { "Array | Matrix, Array | Matrix": function(e, t) { var r; if (0 === l(f(e), new u(0))) r = [];
                    else { if (0 === l(f(t), new u(0))) return m(e.toArray()); var n, i = h(m(Array.isArray(e) ? e : e.toArray()).sort(p)),
                            o = h(m(Array.isArray(t) ? t : t.toArray()).sort(p));
                        r = []; for (var a = 0; a < i.length; a++) { n = !1; for (var s = 0; s < o.length; s++)
                                if (0 === p(i[a].value, o[s].value) && i[a].identifier === o[s].identifier) { n = !0; break }
                            n || r.push(i[a]) } } return Array.isArray(e) && Array.isArray(t) ? d(r) : new c(d(r)) } }) } }, function(e, t, i) { "use strict"; var p = i(2).flatten,
            m = i(2).identify,
            h = i(2).generalize;
        t.name = "setIntersect", t.factory = function(e, t, r, n) { var s = r(i(28)),
                u = r(i(47)),
                c = r(i(26)),
                f = r(i(22)),
                l = r(i(29)); return n("setIntersect", { "Array | Matrix, Array | Matrix": function(e, t) { var r; if (0 === f(c(e), new s(0)) || 0 === f(c(t), new s(0))) r = [];
                    else { var n = m(p(Array.isArray(e) ? e : e.toArray()).sort(l)),
                            i = m(p(Array.isArray(t) ? t : t.toArray()).sort(l));
                        r = []; for (var o = 0; o < n.length; o++)
                            for (var a = 0; a < i.length; a++)
                                if (0 === l(n[o].value, i[a].value) && n[o].identifier === i[a].identifier) { r.push(n[o]); break } } return Array.isArray(e) && Array.isArray(t) ? h(r) : new u(h(r)) } }) } }, function(e, t, c) { "use strict"; var f = c(2).flatten;
        t.name = "setSymDifference", t.factory = function(e, t, r, n) { var i = r(c(28)),
                o = r(c(75)),
                a = r(c(26)),
                s = r(c(22)),
                u = r(c(141)); return n("setSymDifference", { "Array | Matrix, Array | Matrix": function(e, t) { if (0 === s(a(e), new i(0))) return f(t); if (0 === s(a(t), new i(0))) return f(e); var r = f(e),
                        n = f(t); return o(u(r, n), u(n, r)) } }) } }, function(e, t, m) { "use strict"; var h = m(2).flatten,
            d = m(77);
        t.name = "median", t.factory = function(e, t, r, n) { var i = r(m(17)),
                o = r(m(12)),
                s = r(m(52)),
                u = r(m(92)),
                c = r(m(36)),
                a = n("median", { "Array | Matrix": f, "Array | Matrix, number | BigNumber": function(e, t) { throw new Error("median(A, dim) is not yet supported") }, "...": function(e) { if (d(e)) throw new TypeError("Scalar values expected in function median"); return f(e) } });

            function f(e) { try { var t = (e = h(e.valueOf())).length; if (0 === t) throw new Error("Cannot calculate median of an empty array"); if (t % 2 == 0) { for (var r = t / 2 - 1, n = u(e, r + 1), i = e[r], o = 0; o < r; ++o) 0 < s(e[o], i) && (i = e[o]); return p(i, n) } var a = u(e, (t - 1) / 2); return l(a) } catch (e) { throw c(e, "median") } } var l = n({ "number | BigNumber | Complex | Unit": function(e) { return e } }),
                p = n({ "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function(e, t) { return o(i(e, t), 2) } }); return a.toTex = void 0, a } }, function(e, t, c) { "use strict"; var f = c(2).size,
            l = c(46),
            p = c(94),
            m = c(77);
        t.name = "mean", t.factory = function(e, t, r, n) { var i = r(c(14)),
                o = r(c(44)),
                a = r(c(36)),
                s = n("mean", { "Array | Matrix": u, "Array | Matrix, number | BigNumber": function(e, t) { try { var r = p(e, t, i),
                                n = Array.isArray(e) ? f(e) : e.size(); return o(r, n[t]) } catch (e) { throw a(e, "mean") } }, "...": function(e) { if (m(e)) throw new TypeError("Scalar values expected in function mean"); return u(e) } }); return s.toTex = void 0, s;

            function u(e) { var r = 0,
                    n = 0; if (l(e, function(t) { try { r = i(r, t), n++ } catch (e) { throw a(e, "mean", t) } }), 0 === n) throw new Error("Cannot calculate mean of an empty array"); return o(r, n) } } }, function(e, t, c) { "use strict"; var f = c(46),
            l = c(94),
            p = c(77);
        t.name = "min", t.factory = function(e, t, r, n) { var i = r(c(39)),
                o = r(c(36)),
                a = n("min", { "Array | Matrix": u, "Array | Matrix, number | BigNumber": function(e, t) { return l(e, t.valueOf(), s) }, "...": function(e) { if (p(e)) throw new TypeError("Scalar values expected in function min"); return u(e) } }); return a.toTex = "\\min\\left(${args}\\right)", a;

            function s(e, t) { try { return i(e, t) ? e : t } catch (e) { throw o(e, "min", t) } }

            function u(e) { var r; if (f(e, function(t) { try { isNaN(t) && "number" == typeof t ? r = NaN : (void 0 === r || i(t, r)) && (r = t) } catch (e) { throw o(e, "min", t) } }), void 0 === r) throw new Error("Cannot calculate min of an empty array"); return r } } }, function(e, t, o) { "use strict"; var m = o(46);
        t.name = "var", t.factory = function(a, e, t, r) { var s = t(o(17)),
                u = t(o(15)),
                c = t(o(21)),
                f = t(o(12)),
                l = t(o(76)),
                p = t(o(36)),
                n = r("variance", { "Array | Matrix": function(e) { return i(e, "unbiased") }, "Array | Matrix, string": i, "...": function(e) { return i(e, "unbiased") } }); return n.toTex = "\\mathrm{Var}\\left(${args}\\right)", n;

            function i(e, t) { var r = 0,
                    n = 0; if (0 === e.length) throw new SyntaxError("Function var requires one or more parameters (0 provided)"); if (m(e, function(t) { try { r = s(r, t), n++ } catch (e) { throw p(e, "var", t) } }), 0 === n) throw new Error("Cannot calculate var of an empty array"); var i = f(r, n); if (r = 0, m(e, function(e) { var t = u(e, i);
                        r = s(r, c(t, t)) }), l(r)) return r; switch (t) {
                    case "uncorrected":
                        return f(r, n);
                    case "biased":
                        return f(r, n + 1);
                    case "unbiased":
                        var o = a.isBigNumber(r) ? new a.BigNumber(0) : 0; return 1 === n ? o : f(r, n - 1);
                    default:
                        throw new Error('Unknown normalization "' + t + '". Choose "unbiased" (default), "uncorrected", or "biased".') } } } }, function(e, t, o) { t.name = "docs", t.path = "expression", t.factory = function(e, t, r, n) { var i = {}; return i.bignumber = o(352), i.boolean = o(353), i.complex = o(354), i.createUnit = o(355), i.fraction = o(356), i.index = o(357), i.matrix = o(358), i.number = o(359), i.sparse = o(360), i.splitUnit = o(361), i.string = o(362), i.unit = o(363), i.e = o(149), i.E = o(149), i.false = o(364), i.i = o(365), i[1 / 0] = o(366), i.LN2 = o(367), i.LN10 = o(368), i.LOG2E = o(369), i.LOG10E = o(370), i.NaN = o(371), i.null = o(372), i.pi = o(150), i.PI = o(150), i.phi = o(373), i.SQRT1_2 = o(374), i.SQRT2 = o(375), i.tau = o(376), i.true = o(377), i.version = o(378), i.speedOfLight = { description: "Speed of light in vacuum", examples: ["speedOfLight"] }, i.gravitationConstant = { description: "Newtonian constant of gravitation", examples: ["gravitationConstant"] }, i.planckConstant = { description: "Planck constant", examples: ["planckConstant"] }, i.reducedPlanckConstant = { description: "Reduced Planck constant", examples: ["reducedPlanckConstant"] }, i.magneticConstant = { description: "Magnetic constant (vacuum permeability)", examples: ["magneticConstant"] }, i.electricConstant = { description: "Electric constant (vacuum permeability)", examples: ["electricConstant"] }, i.vacuumImpedance = { description: "Characteristic impedance of vacuum", examples: ["vacuumImpedance"] }, i.coulomb = { description: "Coulomb's constant", examples: ["coulomb"] }, i.elementaryCharge = { description: "Elementary charge", examples: ["elementaryCharge"] }, i.bohrMagneton = { description: "Borh magneton", examples: ["bohrMagneton"] }, i.conductanceQuantum = { description: "Conductance quantum", examples: ["conductanceQuantum"] }, i.inverseConductanceQuantum = { description: "Inverse conductance quantum", examples: ["inverseConductanceQuantum"] }, i.magneticFluxQuantum = { description: "Magnetic flux quantum", examples: ["magneticFluxQuantum"] }, i.nuclearMagneton = { description: "Nuclear magneton", examples: ["nuclearMagneton"] }, i.klitzing = { description: "Von Klitzing constant", examples: ["klitzing"] }, i.bohrRadius = { description: "Borh radius", examples: ["bohrRadius"] }, i.classicalElectronRadius = { description: "Classical electron radius", examples: ["classicalElectronRadius"] }, i.electronMass = { description: "Electron mass", examples: ["electronMass"] }, i.fermiCoupling = { description: "Fermi coupling constant", examples: ["fermiCoupling"] }, i.fineStructure = { description: "Fine-structure constant", examples: ["fineStructure"] }, i.hartreeEnergy = { description: "Hartree energy", examples: ["hartreeEnergy"] }, i.protonMass = { description: "Proton mass", examples: ["protonMass"] }, i.deuteronMass = { description: "Deuteron Mass", examples: ["deuteronMass"] }, i.neutronMass = { description: "Neutron mass", examples: ["neutronMass"] }, i.quantumOfCirculation = { description: "Quantum of circulation", examples: ["quantumOfCirculation"] }, i.rydberg = { description: "Rydberg constant", examples: ["rydberg"] }, i.thomsonCrossSection = { description: "Thomson cross section", examples: ["thomsonCrossSection"] }, i.weakMixingAngle = { description: "Weak mixing angle", examples: ["weakMixingAngle"] }, i.efimovFactor = { description: "Efimov factor", examples: ["efimovFactor"] }, i.atomicMass = { description: "Atomic mass constant", examples: ["atomicMass"] }, i.avogadro = { description: "Avogadro's number", examples: ["avogadro"] }, i.boltzmann = { description: "Boltzmann constant", examples: ["boltzmann"] }, i.faraday = { description: "Faraday constant", examples: ["faraday"] }, i.firstRadiation = { description: "First radiation constant", examples: ["firstRadiation"] }, i.loschmidt = { description: "Loschmidt constant at T=273.15 K and p=101.325 kPa", examples: ["loschmidt"] }, i.gasConstant = { description: "Gas constant", examples: ["gasConstant"] }, i.molarPlanckConstant = { description: "Molar Planck constant", examples: ["molarPlanckConstant"] }, i.molarVolume = { description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa", examples: ["molarVolume"] }, i.sackurTetrode = { description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa", examples: ["sackurTetrode"] }, i.secondRadiation = { description: "Second radiation constant", examples: ["secondRadiation"] }, i.stefanBoltzmann = { description: "Stefan-Boltzmann constant", examples: ["stefanBoltzmann"] }, i.wienDisplacement = { description: "Wien displacement law constant", examples: ["wienDisplacement"] }, i.molarMass = { description: "Molar mass constant", examples: ["molarMass"] }, i.molarMassC12 = { description: "Molar mass constant of carbon-12", examples: ["molarMassC12"] }, i.gravity = { description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)", examples: ["gravity"] }, i.planckLength = { description: "Planck length", examples: ["planckLength"] }, i.planckMass = { description: "Planck mass", examples: ["planckMass"] }, i.planckTime = { description: "Planck time", examples: ["planckTime"] }, i.planckCharge = { description: "Planck charge", examples: ["planckCharge"] }, i.planckTemperature = { description: "Planck temperature", examples: ["planckTemperature"] }, i.derivative = o(379), i.lsolve = o(380), i.lup = o(381), i.lusolve = o(382), i.simplify = o(383), i.rationalize = o(384), i.slu = o(385), i.usolve = o(386), i.qr = o(387), i.abs = o(388), i.add = o(389), i.cbrt = o(390), i.ceil = o(391), i.cube = o(392), i.divide = o(393), i.dotDivide = o(394), i.dotMultiply = o(395), i.dotPow = o(396), i.exp = o(397), i.expm = o(398), i.expm1 = o(399), i.fix = o(400), i.floor = o(401), i.gcd = o(402), i.hypot = o(403), i.lcm = o(404), i.log = o(405), i.log2 = o(406), i.log1p = o(407), i.log10 = o(408), i.mod = o(409), i.multiply = o(410), i.norm = o(411), i.nthRoot = o(412), i.nthRoots = o(413), i.pow = o(414), i.round = o(415), i.sign = o(416), i.sqrt = o(417), i.sqrtm = o(418), i.square = o(419), i.subtract = o(420), i.unaryMinus = o(421), i.unaryPlus = o(422), i.xgcd = o(423), i.bitAnd = o(424), i.bitNot = o(425), i.bitOr = o(426), i.bitXor = o(427), i.leftShift = o(428), i.rightArithShift = o(429), i.rightLogShift = o(430), i.bellNumbers = o(431), i.catalan = o(432), i.composition = o(433), i.stirlingS2 = o(434), i.config = o(435), i.import = o(436), i.typed = o(437), i.arg = o(438), i.conj = o(439), i.re = o(440), i.im = o(441), i.eval = o(442), i.help = o(443), i.distance = o(444), i.intersect = o(445), i.and = o(446), i.not = o(447), i.or = o(448), i.xor = o(449), i.concat = o(450), i.cross = o(451), i.ctranspose = o(452), i.det = o(453), i.diag = o(454), i.dot = o(455), i.getMatrixDataType = o(456), i.identity = o(457), i.filter = o(458), i.flatten = o(459), i.forEach = o(460), i.inv = o(461), i.kron = o(462), i.map = o(463), i.ones = o(464), i.partitionSelect = o(465), i.range = o(466), i.resize = o(467), i.reshape = o(468), i.size = o(469), i.sort = o(470), i.squeeze = o(471), i.subset = o(472), i.trace = o(473), i.transpose = o(474), i.zeros = o(475), i.combinations = o(476), i.factorial = o(477), i.gamma = o(478), i.kldivergence = o(479), i.multinomial = o(480), i.permutations = o(481), i.pickRandom = o(482), i.random = o(483), i.randomInt = o(484), i.compare = o(485), i.compareNatural = o(486), i.compareText = o(487), i.deepEqual = o(488), i.equal = o(489), i.equalText = o(490), i.larger = o(491), i.largerEq = o(492), i.smaller = o(493), i.smallerEq = o(494), i.unequal = o(495), i.setCartesian = o(496), i.setDifference = o(497), i.setDistinct = o(498), i.setIntersect = o(499), i.setIsSubset = o(500), i.setMultiplicity = o(501), i.setPowerset = o(502), i.setSize = o(503), i.setSymDifference = o(504), i.setUnion = o(505), i.erf = o(506), i.mad = o(507), i.max = o(508), i.mean = o(509), i.median = o(510), i.min = o(511), i.mode = o(512), i.prod = o(513), i.quantileSeq = o(514), i.std = o(515), i.sum = o(516), i.var = o(517), i.acos = o(518), i.acosh = o(519), i.acot = o(520), i.acoth = o(521), i.acsc = o(522), i.acsch = o(523), i.asec = o(524), i.asech = o(525), i.asin = o(526), i.asinh = o(527), i.atan = o(528), i.atanh = o(529), i.atan2 = o(530), i.cos = o(531), i.cosh = o(532), i.cot = o(533), i.coth = o(534), i.csc = o(535), i.csch = o(536), i.sec = o(537), i.sech = o(538), i.sin = o(539), i.sinh = o(540), i.tan = o(541), i.tanh = o(542), i.to = o(543), i.clone = o(544), i.format = o(545), i.isNaN = o(546), i.isInteger = o(547), i.isNegative = o(548), i.isNumeric = o(549), i.isPositive = o(550), i.isPrime = o(551), i.isZero = o(552), i.typeof = o(553), i } }, function(e, t) { e.exports = { name: "e", category: "Constants", syntax: ["e"], description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828", examples: ["e", "e ^ 2", "exp(2)", "log(e)"], seealso: ["exp"] } }, function(e, t) { e.exports = { name: "pi", category: "Constants", syntax: ["pi"], description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159", examples: ["pi", "sin(pi/2)"], seealso: ["tau"] } }, function(e, t, a) { "use strict";
        t.name = "parser", t.factory = function(e, t, r, n, i) { var o = r(a(152)); return n("parser", { "": function() { return new o(i) } }) }, t.math = !0 }, function(e, t, s) { "use strict"; var u = s(5).extend,
            c = s(13);
        t.name = "Parser", t.path = "expression", t.factory = function(e, t, r, n, i) { var o = r(s(42));

            function a() { if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
                this.scope = {} } return a.prototype.type = "Parser", a.prototype.isParser = !0, a.prototype.parse = function(e) { throw new Error("Parser.parse is deprecated. Use math.parse instead.") }, a.prototype.compile = function(e) { throw new Error("Parser.compile is deprecated. Use math.compile instead.") }, a.prototype.eval = function(e) { return o(e).compile().eval(this.scope) }, a.prototype.get = function(e) { return e in this.scope ? c.getSafeProperty(this.scope, e) : void 0 }, a.prototype.getAll = function() { return u({}, this.scope) }, a.prototype.set = function(e, t) { return c.setSafeProperty(this.scope, e, t) }, a.prototype.remove = function(e) { delete this.scope[e] }, a.prototype.clear = function() { for (var e in this.scope) this.scope.hasOwnProperty(e) && delete this.scope[e] }, a }, t.math = !0 }, function(ke, Ie, Pe) { var Re;! function(e) { "use strict"; var l, k, a, s = 9e15,
                d = 1e9,
                y = "0123456789abcdef",
                n = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                i = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                u = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -s, maxE: s, crypto: !1 },
                x = !0,
                c = "[DecimalError] ",
                g = c + "Invalid argument: ",
                o = c + "Precision limit exceeded",
                f = c + "crypto unavailable",
                I = Math.floor,
                v = Math.pow,
                p = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                m = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                h = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                b = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                P = 1e7,
                R = 7,
                w = n.length - 1,
                N = i.length - 1,
                M = { name: "[object Decimal]" };

            function E(e) { var t, r, n, i = e.length - 1,
                    o = "",
                    a = e[0]; if (0 < i) { for (o += a, t = 1; t < i; t++) n = e[t] + "", (r = R - n.length) && (o += D(r)), o += n;
                    a = e[t], (r = R - (n = a + "").length) && (o += D(r)) } else if (0 === a) return "0"; for (; a % 10 == 0;) a /= 10; return o + a }

            function A(e, t, r) { if (e !== ~~e || e < t || r < e) throw Error(g + e) }

            function S(e, t, r, n) { var i, o, a; for (o = e[0]; 10 <= o; o /= 10) --t; return --t < 0 ? (t += R, i = 0) : (i = Math.ceil((t + 1) / R), t %= R), o = v(10, R - t), a = e[i] % o | 0, null == n ? t < 3 ? (0 == t ? a = a / 100 | 0 : 1 == t && (a = a / 10 | 0), r < 4 && 99999 == a || 3 < r && 49999 == a || 5e4 == a || 0 == a) : (r < 4 && a + 1 == o || 3 < r && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == v(10, t - 2) - 1 || (a == o / 2 || 0 == a) && 0 == (e[i + 1] / o / 100 | 0) : t < 4 ? (0 == t ? a = a / 1e3 | 0 : 1 == t ? a = a / 100 | 0 : 2 == t && (a = a / 10 | 0), (n || r < 4) && 9999 == a || !n && 3 < r && 4999 == a) : ((n || r < 4) && a + 1 == o || !n && 3 < r && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == v(10, t - 3) - 1 }

            function O(e, t, r) { for (var n, i, o = [0], a = 0, s = e.length; a < s;) { for (i = o.length; i--;) o[i] *= t; for (o[0] += y.indexOf(e.charAt(a++)), n = 0; n < o.length; n++) o[n] > r - 1 && (void 0 === o[n + 1] && (o[n + 1] = 0), o[n + 1] += o[n] / r | 0, o[n] %= r) } return o.reverse() }
            M.absoluteValue = M.abs = function() { var e = new this.constructor(this); return e.s < 0 && (e.s = 1), U(e) }, M.ceil = function() { return U(new this.constructor(this), this.e + 1, 2) }, M.comparedTo = M.cmp = function(e) { var t, r, n, i, o = this.d,
                    a = (e = new this.constructor(e)).d,
                    s = this.s,
                    u = e.s; if (!o || !a) return s && u ? s !== u ? s : o === a ? 0 : !o ^ s < 0 ? 1 : -1 : NaN; if (!o[0] || !a[0]) return o[0] ? s : a[0] ? -u : 0; if (s !== u) return s; if (this.e !== e.e) return this.e > e.e ^ s < 0 ? 1 : -1; for (t = 0, r = (n = o.length) < (i = a.length) ? n : i; t < r; ++t)
                    if (o[t] !== a[t]) return o[t] > a[t] ^ s < 0 ? 1 : -1;
                return n === i ? 0 : i < n ^ s < 0 ? 1 : -1 }, M.cosine = M.cos = function() { var e, t, r = this,
                    n = r.constructor; return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + R, n.rounding = 1, r = function(e, t) { var r, n, i = t.d.length;
                    n = i < 32 ? (r = Math.ceil(i / 3), Math.pow(4, -r).toString()) : (r = 16, "2.3283064365386962890625e-10");
                    e.precision += r, t = Z(e, 1, t.times(n), new e(1)); for (var o = r; o--;) { var a = t.times(t);
                        t = a.times(a).minus(a).times(8).plus(1) } return e.precision -= r, t }(n, V(n, r)), n.precision = e, n.rounding = t, U(2 == a || 3 == a ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN) }, M.cubeRoot = M.cbrt = function() { var e, t, r, n, i, o, a, s, u, c, f = this,
                    l = f.constructor; if (!f.isFinite() || f.isZero()) return new l(f); for (x = !1, (o = f.s * Math.pow(f.s * f, 1 / 3)) && Math.abs(o) != 1 / 0 ? n = new l(o.toString()) : (r = E(f.d), (o = ((e = f.e) - r.length + 1) % 3) && (r += 1 == o || -2 == o ? "0" : "00"), o = Math.pow(r, 1 / 3), e = I((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (n = new l(r = o == 1 / 0 ? "5e" + e : (r = o.toExponential()).slice(0, r.indexOf("e") + 1) + e)).s = f.s), a = (e = l.precision) + 3;;)
                    if (c = (u = (s = n).times(s).times(s)).plus(f), n = T(c.plus(f).times(s), c.plus(u), a + 2, 1), E(s.d).slice(0, a) === (r = E(n.d)).slice(0, a)) { if ("9999" != (r = r.slice(a - 3, a + 1)) && (i || "4999" != r)) {+r && (+r.slice(1) || "5" != r.charAt(0)) || (U(n, e + 1, 1), t = !n.times(n).times(n).eq(f)); break } if (!i && (U(s, e + 1, 0), s.times(s).times(s).eq(f))) { n = s; break }
                        a += 4, i = 1 }
                return x = !0, U(n, e, l.rounding, t) }, M.decimalPlaces = M.dp = function() { var e, t = this.d,
                    r = NaN; if (t) { if (r = ((e = t.length - 1) - I(this.e / R)) * R, e = t[e])
                        for (; e % 10 == 0; e /= 10) r--;
                    r < 0 && (r = 0) } return r }, M.dividedBy = M.div = function(e) { return T(this, new this.constructor(e)) }, M.dividedToIntegerBy = M.divToInt = function(e) { var t = this.constructor; return U(T(this, new t(e), 0, 1, 1), t.precision, t.rounding) }, M.equals = M.eq = function(e) { return 0 === this.cmp(e) }, M.floor = function() { return U(new this.constructor(this), this.e + 1, 3) }, M.greaterThan = M.gt = function(e) { return 0 < this.cmp(e) }, M.greaterThanOrEqualTo = M.gte = function(e) { var t = this.cmp(e); return 1 == t || 0 === t }, M.hyperbolicCosine = M.cosh = function() { var e, t, r, n, i, o = this,
                    a = o.constructor,
                    s = new a(1); if (!o.isFinite()) return new a(o.s ? 1 / 0 : NaN); if (o.isZero()) return s;
                r = a.precision, n = a.rounding, a.precision = r + Math.max(o.e, o.sd()) + 4, a.rounding = 1, t = (i = o.d.length) < 32 ? (e = Math.ceil(i / 3), Math.pow(4, -e).toString()) : (e = 16, "2.3283064365386962890625e-10"), o = Z(a, 1, o.times(t), new a(1), !0); for (var u, c = e, f = new a(8); c--;) u = o.times(o), o = s.minus(u.times(f.minus(u.times(f)))); return U(o, a.precision = r, a.rounding = n, !0) }, M.hyperbolicSine = M.sinh = function() { var e, t, r, n, i = this,
                    o = i.constructor; if (!i.isFinite() || i.isZero()) return new o(i); if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, (n = i.d.length) < 3) i = Z(o, 2, i, i, !0);
                else { e = 16 < (e = 1.4 * Math.sqrt(n)) ? 16 : 0 | e, i = Z(o, 2, i = i.times(Math.pow(5, -e)), i, !0); for (var a, s = new o(5), u = new o(16), c = new o(20); e--;) a = i.times(i), i = i.times(s.plus(a.times(u.times(a).plus(c)))) } return U(i, o.precision = t, o.rounding = r, !0) }, M.hyperbolicTangent = M.tanh = function() { var e, t, r = this.constructor; return this.isFinite() ? this.isZero() ? new r(this) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, T(this.sinh(), this.cosh(), r.precision = e, r.rounding = t)) : new r(this.s) }, M.inverseCosine = M.acos = function() { var e, t = this,
                    r = t.constructor,
                    n = t.abs().cmp(1),
                    i = r.precision,
                    o = r.rounding; return -1 !== n ? 0 === n ? t.isNeg() ? B(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? B(r, i + 4, o).times(.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = B(r, i + 4, o).times(.5), r.precision = i, r.rounding = o, e.minus(t)) }, M.inverseHyperbolicCosine = M.acosh = function() { var e, t, r = this,
                    n = r.constructor; return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, x = !1, r = r.times(r).minus(1).sqrt().plus(r), x = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r) }, M.inverseHyperbolicSine = M.asinh = function() { var e, t, r = this,
                    n = r.constructor; return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, x = !1, r = r.times(r).plus(1).sqrt().plus(r), x = !0, n.precision = e, n.rounding = t, r.ln()) }, M.inverseHyperbolicTangent = M.atanh = function() { var e, t, r, n, i = this,
                    o = i.constructor; return i.isFinite() ? 0 <= i.e ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? U(new o(i), e, t, !0) : (o.precision = r = n - i.e, i = T(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(.5))) : new o(NaN) }, M.inverseSine = M.asin = function() { var e, t, r, n, i = this,
                    o = i.constructor; return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, -1 !== t ? 0 === t ? ((e = B(o, r + 4, n).times(.5)).s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2))) }, M.inverseTangent = M.atan = function() { var e, t, r, n, i, o, a, s, u, c = this,
                    f = c.constructor,
                    l = f.precision,
                    p = f.rounding; if (c.isFinite()) { if (c.isZero()) return new f(c); if (c.abs().eq(1) && l + 4 <= N) return (a = B(f, l + 4, p).times(.25)).s = c.s, a } else { if (!c.s) return new f(NaN); if (l + 4 <= N) return (a = B(f, l + 4, p).times(.5)).s = c.s, a } for (f.precision = s = l + 10, f.rounding = 1, e = r = Math.min(28, s / R + 2 | 0); e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1)); for (x = !1, t = Math.ceil(s / R), n = 1, u = c.times(c), a = new f(c), i = c; - 1 !== e;)
                    if (i = i.times(u), o = a.minus(i.div(n += 2)), i = i.times(u), void 0 !== (a = o.plus(i.div(n += 2))).d[t])
                        for (e = t; a.d[e] === o.d[e] && e--;);
                return r && (a = a.times(2 << r - 1)), x = !0, U(a, f.precision = l, f.rounding = p, !0) }, M.isFinite = function() { return !!this.d }, M.isInteger = M.isInt = function() { return !!this.d && I(this.e / R) > this.d.length - 2 }, M.isNaN = function() { return !this.s }, M.isNegative = M.isNeg = function() { return this.s < 0 }, M.isPositive = M.isPos = function() { return 0 < this.s }, M.isZero = function() { return !!this.d && 0 === this.d[0] }, M.lessThan = M.lt = function(e) { return this.cmp(e) < 0 }, M.lessThanOrEqualTo = M.lte = function(e) { return this.cmp(e) < 1 }, M.logarithm = M.log = function(e) { var t, r, n, i, o, a, s, u, c = this.constructor,
                    f = c.precision,
                    l = c.rounding; if (null == e) e = new c(10), t = !0;
                else { if (r = (e = new c(e)).d, e.s < 0 || !r || !r[0] || e.eq(1)) return new c(NaN);
                    t = e.eq(10) } if (r = this.d, this.s < 0 || !r || !r[0] || this.eq(1)) return new c(r && !r[0] ? -1 / 0 : 1 != this.s ? NaN : r ? 0 : 1 / 0); if (t)
                    if (1 < r.length) o = !0;
                    else { for (i = r[0]; i % 10 == 0;) i /= 10;
                        o = 1 !== i }
                if (x = !1, a = H(this, s = f + 5), n = t ? z(c, s + 10) : H(e, s), S((u = T(a, n, s, 1)).d, i = f, l))
                    do { if (a = H(this, s += 10), n = t ? z(c, s + 10) : H(e, s), u = T(a, n, s, 1), !o) {+E(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = U(u, f + 1, 0)); break } } while (S(u.d, i += 10, l)); return x = !0, U(u, f, l) }, M.minus = M.sub = function(e) { var t, r, n, i, o, a, s, u, c, f, l, p, m = this,
                    h = m.constructor; if (e = new h(e), !m.d || !e.d) return m.s && e.s ? m.d ? e.s = -e.s : e = new h(e.d || m.s !== e.s ? m : NaN) : e = new h(NaN), e; if (m.s != e.s) return e.s = -e.s, m.plus(e); if (c = m.d, p = e.d, s = h.precision, u = h.rounding, !c[0] || !p[0]) { if (p[0]) e.s = -e.s;
                    else { if (!c[0]) return new h(3 === u ? -0 : 0);
                        e = new h(m) } return x ? U(e, s, u) : e } if (r = I(e.e / R), f = I(m.e / R), c = c.slice(), o = f - r) { for (a = (l = o < 0) ? (t = c, o = -o, p.length) : (t = p, r = f, c.length), (n = Math.max(Math.ceil(s / R), a) + 2) < o && (o = n, t.length = 1), t.reverse(), n = o; n--;) t.push(0);
                    t.reverse() } else { for ((l = (n = c.length) < (a = p.length)) && (a = n), n = 0; n < a; n++)
                        if (c[n] != p[n]) { l = c[n] < p[n]; break }
                    o = 0 } for (l && (t = c, c = p, p = t, e.s = -e.s), a = c.length, n = p.length - a; 0 < n; --n) c[a++] = 0; for (n = p.length; o < n;) { if (c[--n] < p[n]) { for (i = n; i && 0 === c[--i];) c[i] = P - 1;--c[i], c[n] += P }
                    c[n] -= p[n] } for (; 0 === c[--a];) c.pop(); for (; 0 === c[0]; c.shift()) --r; return c[0] ? (e.d = c, e.e = C(c, r), x ? U(e, s, u) : e) : new h(3 === u ? -0 : 0) }, M.modulo = M.mod = function(e) { var t, r = this.constructor; return e = new r(e), !this.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || this.d && !this.d[0] ? U(new r(this), r.precision, r.rounding) : (x = !1, 9 == r.modulo ? (t = T(this, e.abs(), 0, 3, 1)).s *= e.s : t = T(this, e, 0, r.modulo, 1), t = t.times(e), x = !0, this.minus(t)) }, M.naturalExponential = M.exp = function() { return F(this) }, M.naturalLogarithm = M.ln = function() { return H(this) }, M.negated = M.neg = function() { var e = new this.constructor(this); return e.s = -e.s, U(e) }, M.plus = M.add = function(e) { var t, r, n, i, o, a, s, u, c, f, l = this,
                    p = l.constructor; if (e = new p(e), !l.d || !e.d) return l.s && e.s ? l.d || (e = new p(e.d || l.s === e.s ? l : NaN)) : e = new p(NaN), e; if (l.s != e.s) return e.s = -e.s, l.minus(e); if (c = l.d, f = e.d, s = p.precision, u = p.rounding, !c[0] || !f[0]) return f[0] || (e = new p(l)), x ? U(e, s, u) : e; if (o = I(l.e / R), n = I(e.e / R), c = c.slice(), i = o - n) { for ((a = (a = i < 0 ? (r = c, i = -i, f.length) : (r = f, n = o, c.length)) < (o = Math.ceil(s / R)) ? o + 1 : a + 1) < i && (i = a, r.length = 1), r.reverse(); i--;) r.push(0);
                    r.reverse() } for ((a = c.length) - (i = f.length) < 0 && (i = a, r = f, f = c, c = r), t = 0; i;) t = (c[--i] = c[i] + f[i] + t) / P | 0, c[i] %= P; for (t && (c.unshift(t), ++n), a = c.length; 0 == c[--a];) c.pop(); return e.d = c, e.e = C(c, n), x ? U(e, s, u) : e }, M.precision = M.sd = function(e) { var t; if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(g + e); return this.d ? (t = q(this.d), e && this.e + 1 > t && (t = this.e + 1)) : t = NaN, t }, M.round = function() { var e = this.constructor; return U(new e(this), this.e + 1, e.rounding) }, M.sine = M.sin = function() { var e, t, r = this,
                    n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + R, n.rounding = 1, r = function(e, t) { var r, n = t.d.length; if (n < 3) return Z(e, 2, t, t);
                    r = 16 < (r = 1.4 * Math.sqrt(n)) ? 16 : 0 | r, t = t.times(Math.pow(5, -r)), t = Z(e, 2, t, t); for (var i, o = new e(5), a = new e(16), s = new e(20); r--;) i = t.times(t), t = t.times(o.plus(i.times(a.times(i).minus(s)))); return t }(n, V(n, r)), n.precision = e, n.rounding = t, U(2 < a ? r.neg() : r, e, t, !0)) : new n(NaN) }, M.squareRoot = M.sqrt = function() { var e, t, r, n, i, o, a = this.d,
                    s = this.e,
                    u = this.s,
                    c = this.constructor; if (1 !== u || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? this : 1 / 0); for (x = !1, n = 0 == (u = Math.sqrt(+this)) || u == 1 / 0 ? (((t = E(a)).length + s) % 2 == 0 && (t += "0"), u = Math.sqrt(t), s = I((s + 1) / 2) - (s < 0 || s % 2), new c(t = u == 1 / 0 ? "1e" + s : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + s)) : new c(u.toString()), r = (s = c.precision) + 3;;)
                    if (n = (o = n).plus(T(this, o, r + 2, 1)).times(.5), E(o.d).slice(0, r) === (t = E(n.d)).slice(0, r)) { if ("9999" != (t = t.slice(r - 3, r + 1)) && (i || "4999" != t)) {+t && (+t.slice(1) || "5" != t.charAt(0)) || (U(n, s + 1, 1), e = !n.times(n).eq(this)); break } if (!i && (U(o, s + 1, 0), o.times(o).eq(this))) { n = o; break }
                        r += 4, i = 1 }
                return x = !0, U(n, s, c.rounding, e) }, M.tangent = M.tan = function() { var e, t, r = this,
                    n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, (r = r.sin()).s = 1, r = T(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, U(2 == a || 4 == a ? r.neg() : r, e, t, !0)) : new n(NaN) }, M.times = M.mul = function(e) { var t, r, n, i, o, a, s, u, c, f = this.constructor,
                    l = this.d,
                    p = (e = new f(e)).d; if (e.s *= this.s, !(l && l[0] && p && p[0])) return new f(!e.s || l && !l[0] && !p || p && !p[0] && !l ? NaN : l && p ? 0 * e.s : e.s / 0); for (r = I(this.e / R) + I(e.e / R), (u = l.length) < (c = p.length) && (o = l, l = p, p = o, a = u, u = c, c = a), o = [], n = a = u + c; n--;) o.push(0); for (n = c; 0 <= --n;) { for (t = 0, i = u + n; n < i;) s = o[i] + p[n] * l[i - n - 1] + t, o[i--] = s % P | 0, t = s / P | 0;
                    o[i] = (o[i] + t) % P | 0 } for (; !o[--a];) o.pop(); return t ? ++r : o.shift(), e.d = o, e.e = C(o, r), x ? U(e, f.precision, f.rounding) : e }, M.toBinary = function(e, t) { return r(this, 2, e, t) }, M.toDecimalPlaces = M.toDP = function(e, t) { var r = this,
                    n = r.constructor; return r = new n(r), void 0 === e ? r : (A(e, 0, d), void 0 === t ? t = n.rounding : A(t, 0, 8), U(r, e + r.e + 1, t)) }, M.toExponential = function(e, t) { var r, n = this,
                    i = n.constructor; return r = void 0 === e ? _(n, !0) : (A(e, 0, d), void 0 === t ? t = i.rounding : A(t, 0, 8), _(n = U(new i(n), e + 1, t), !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r }, M.toFixed = function(e, t) { var r, n, i = this.constructor; return r = void 0 === e ? _(this) : (A(e, 0, d), void 0 === t ? t = i.rounding : A(t, 0, 8), _(n = U(new i(this), e + this.e + 1, t), !1, e + n.e + 1)), this.isNeg() && !this.isZero() ? "-" + r : r }, M.toFraction = function(e) { var t, r, n, i, o, a, s, u, c, f, l, p, m = this.d,
                    h = this.constructor; if (!m) return new h(this); if (c = r = new h(1), a = (o = (t = new h(n = u = new h(0))).e = q(m) - this.e - 1) % R, t.d[0] = v(10, a < 0 ? R + a : a), null == e) e = 0 < o ? t : c;
                else { if (!(s = new h(e)).isInt() || s.lt(c)) throw Error(g + s);
                    e = s.gt(t) ? 0 < o ? t : c : s } for (x = !1, s = new h(E(m)), f = h.precision, h.precision = o = m.length * R * 2; l = T(s, t, 0, 1, 1), 1 != (i = r.plus(l.times(n))).cmp(e);) r = n, n = i, i = c, c = u.plus(l.times(i)), u = i, i = t, t = s.minus(l.times(i)), s = i; return i = T(e.minus(r), n, 0, 1, 1), u = u.plus(i.times(c)), r = r.plus(i.times(n)), u.s = c.s = this.s, p = T(c, n, o, 1).minus(this).abs().cmp(T(u, r, o, 1).minus(this).abs()) < 1 ? [c, n] : [u, r], h.precision = f, x = !0, p }, M.toHexadecimal = M.toHex = function(e, t) { return r(this, 16, e, t) }, M.toNearest = function(e, t) { var r = this,
                    n = r.constructor; if (r = new n(r), null == e) { if (!r.d) return r;
                    e = new n(1), t = n.rounding } else { if (e = new n(e), void 0 === t ? t = n.rounding : A(t, 0, 8), !r.d) return e.s ? r : e; if (!e.d) return e.s && (e.s = r.s), e } return e.d[0] ? (x = !1, r = T(r, e, 0, t, 1).times(e), x = !0, U(r)) : (e.s = r.s, r = e), r }, M.toNumber = function() { return +this }, M.toOctal = function(e, t) { return r(this, 8, e, t) }, M.toPower = M.pow = function(e) { var t, r, n, i, o, a, s = this,
                    u = s.constructor,
                    c = +(e = new u(e)); if (!(s.d && e.d && s.d[0] && e.d[0])) return new u(v(+s, c)); if ((s = new u(s)).eq(1)) return s; if (n = u.precision, o = u.rounding, e.eq(1)) return U(s, n, o); if ((t = I(e.e / R)) >= e.d.length - 1 && (r = c < 0 ? -c : c) <= 9007199254740991) return i = L(u, s, r, n), e.s < 0 ? new u(1).div(i) : U(i, n, o); if ((a = s.s) < 0) { if (t < e.d.length - 1) return new u(NaN); if (0 == (1 & e.d[t]) && (a = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d.length) return s.s = a, s } return (t = 0 != (r = v(+s, c)) && isFinite(r) ? new u(r + "").e : I(c * (Math.log("0." + E(s.d)) / Math.LN10 + s.e + 1))) > u.maxE + 1 || t < u.minE - 1 ? new u(0 < t ? a / 0 : 0) : (x = !1, u.rounding = s.s = 1, r = Math.min(12, (t + "").length), (i = F(e.times(H(s, n + r)), n)).d && S((i = U(i, n + 5, 1)).d, n, o) && (t = n + 10, +E((i = U(F(e.times(H(s, t + r)), t), t + 5, 1)).d).slice(n + 1, n + 15) + 1 == 1e14 && (i = U(i, n + 1, 0))), i.s = a, x = !0, U(i, n, u.rounding = o)) }, M.toPrecision = function(e, t) { var r, n = this,
                    i = n.constructor; return r = void 0 === e ? _(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (A(e, 1, d), void 0 === t ? t = i.rounding : A(t, 0, 8), _(n = U(new i(n), e, t), e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r }, M.toSignificantDigits = M.toSD = function(e, t) { var r = this.constructor; return void 0 === e ? (e = r.precision, t = r.rounding) : (A(e, 1, d), void 0 === t ? t = r.rounding : A(t, 0, 8)), U(new r(this), e, t) }, M.toString = function() { var e = this.constructor,
                    t = _(this, this.e <= e.toExpNeg || this.e >= e.toExpPos); return this.isNeg() && !this.isZero() ? "-" + t : t }, M.truncated = M.trunc = function() { return U(new this.constructor(this), this.e + 1, 1) }, M.valueOf = M.toJSON = function() { var e = this.constructor,
                    t = _(this, this.e <= e.toExpNeg || this.e >= e.toExpPos); return this.isNeg() ? "-" + t : t }; var T = function() {
                function C(e, t, r) { var n, i = 0,
                        o = e.length; for (e = e.slice(); o--;) n = e[o] * t + i, e[o] = n % r | 0, i = n / r | 0; return i && e.unshift(i), e }

                function z(e, t, r, n) { var i, o; if (r != n) o = n < r ? 1 : -1;
                    else
                        for (i = o = 0; i < r; i++)
                            if (e[i] != t[i]) { o = e[i] > t[i] ? 1 : -1; break } return o }

                function B(e, t, r, n) { for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r]; for (; !e[0] && 1 < e.length;) e.shift() } return function(e, t, r, n, i, o) { var a, s, u, c, f, l, p, m, h, d, y, g, v, x, b, w, N, M, E, A, S = e.constructor,
                        O = e.s == t.s ? 1 : -1,
                        T = e.d,
                        _ = t.d; if (!(T && T[0] && _ && _[0])) return new S(e.s && t.s && (T ? !_ || T[0] != _[0] : _) ? T && 0 == T[0] || !_ ? 0 * O : O / 0 : NaN); for (s = o ? (f = 1, e.e - t.e) : (o = P, f = R, I(e.e / f) - I(t.e / f)), E = _.length, N = T.length, d = (h = new S(O)).d = [], u = 0; _[u] == (T[u] || 0); u++); if (_[u] > (T[u] || 0) && s--, null == r ? (x = r = S.precision, n = S.rounding) : x = i ? r + (e.e - t.e) + 1 : r, x < 0) d.push(1), l = !0;
                    else { if (x = x / f + 2 | 0, u = 0, 1 == E) { for (_ = _[c = 0], x++;
                                (u < N || c) && x--; u++) b = c * o + (T[u] || 0), d[u] = b / _ | 0, c = b % _ | 0;
                            l = c || u < N } else { for (1 < (c = o / (_[0] + 1) | 0) && (_ = C(_, c, o), T = C(T, c, o), E = _.length, N = T.length), w = E, g = (y = T.slice(0, E)).length; g < E;) y[g++] = 0; for ((A = _.slice()).unshift(0), M = _[0], _[1] >= o / 2 && ++M; c = 0, (a = z(_, y, E, g)) < 0 ? (v = y[0], E != g && (v = v * o + (y[1] || 0)), 1 < (c = v / M | 0) ? (o <= c && (c = o - 1), 1 == (a = z(p = C(_, c, o), y, m = p.length, g = y.length)) && (c--, B(p, E < m ? A : _, m, o))) : (0 == c && (a = c = 1), p = _.slice()), (m = p.length) < g && p.unshift(0), B(y, p, g, o), -1 == a && (a = z(_, y, E, g = y.length)) < 1 && (c++, B(y, E < g ? A : _, g, o)), g = y.length) : 0 === a && (c++, y = [0]), d[u++] = c, a && y[0] ? y[g++] = T[w] || 0 : (y = [T[w]], g = 1), (w++ < N || void 0 !== y[0]) && x--;);
                            l = void 0 !== y[0] }
                        d[0] || d.shift() } if (1 == f) h.e = s, k = l;
                    else { for (u = 1, c = d[0]; 10 <= c; c /= 10) u++;
                        h.e = u + s * f - 1, U(h, i ? r + h.e + 1 : r, n, l) } return h } }();

            function U(e, t, r, n) { var i, o, a, s, u, c, f, l, p, m = e.constructor;
                e: if (null != t) { if (!(l = e.d)) return e; for (i = 1, s = l[0]; 10 <= s; s /= 10) i++; if ((o = t - i) < 0) o += R, a = t, u = (f = l[p = 0]) / v(10, i - a - 1) % 10 | 0;
                    else if (p = Math.ceil((o + 1) / R), (s = l.length) <= p) { if (!n) break e; for (; s++ <= p;) l.push(0);
                        f = u = 0, a = (o %= R) - R + (i = 1) } else { for (f = s = l[p], i = 1; 10 <= s; s /= 10) i++;
                        u = (a = (o %= R) - R + i) < 0 ? 0 : f / v(10, i - a - 1) % 10 | 0 } if (n = n || t < 0 || void 0 !== l[p + 1] || (a < 0 ? f : f % v(10, i - a - 1)), c = r < 4 ? (u || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : 5 < u || 5 == u && (4 == r || n || 6 == r && (0 < o ? 0 < a ? f / v(10, i - a) : 0 : l[p - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !l[0]) return l.length = 0, c ? (t -= e.e + 1, l[0] = v(10, (R - t % R) % R), e.e = -t || 0) : l[0] = e.e = 0, e; if (0 == o ? (l.length = p, s = 1, p--) : (l.length = p + 1, s = v(10, R - o), l[p] = 0 < a ? (f / v(10, i - a) % v(10, a) | 0) * s : 0), c)
                        for (;;) { if (0 == p) { for (o = 1, a = l[0]; 10 <= a; a /= 10) o++; for (a = l[0] += s, s = 1; 10 <= a; a /= 10) s++;
                                o != s && (e.e++, l[0] == P && (l[0] = 1)); break } if (l[p] += s, l[p] != P) break;
                            l[p--] = 0, s = 1 }
                    for (o = l.length; 0 === l[--o];) l.pop() } return x && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e }

            function _(e, t, r) { if (!e.isFinite()) return $(e); var n, i = e.e,
                    o = E(e.d),
                    a = o.length; return t ? (r && 0 < (n = r - a) ? o = o.charAt(0) + "." + o.slice(1) + D(n) : 1 < a && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + D(-i - 1) + o, r && 0 < (n = r - a) && (o += D(n))) : a <= i ? (o += D(i + 1 - a), r && 0 < (n = r - i - 1) && (o = o + "." + D(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), r && 0 < (n = r - a) && (i + 1 === a && (o += "."), o += D(n))), o }

            function C(e, t) { var r = e[0]; for (t *= R; 10 <= r; r /= 10) t++; return t }

            function z(e, t, r) { if (w < t) throw x = !0, r && (e.precision = r), Error(o); return U(new e(n), t, 1, !0) }

            function B(e, t, r) { if (N < t) throw Error(o); return U(new e(i), t, r, !0) }

            function q(e) { var t = e.length - 1,
                    r = t * R + 1; if (t = e[t]) { for (; t % 10 == 0; t /= 10) r--; for (t = e[0]; 10 <= t; t /= 10) r++ } return r }

            function D(e) { for (var t = ""; e--;) t += "0"; return t }

            function L(e, t, r, n) { var i, o = new e(1),
                    a = Math.ceil(n / R + 4); for (x = !1;;) { if (r % 2 && W((o = o.times(t)).d, a) && (i = !0), 0 === (r = I(r / 2))) { r = o.d.length - 1, i && 0 === o.d[r] && ++o.d[r]; break }
                    W((t = t.times(t)).d, a) } return x = !0, o }

            function j(e) { return 1 & e.d[e.d.length - 1] }

            function t(e, t, r) { for (var n, i = new e(t[0]), o = 0; ++o < t.length;) { if (!(n = new e(t[o])).s) { i = n; break }
                    i[r](n) && (i = n) } return i }

            function F(e, t) { var r, n, i, o, a, s, u, c = 0,
                    f = 0,
                    l = 0,
                    p = e.constructor,
                    m = p.rounding,
                    h = p.precision; if (!e.d || !e.d[0] || 17 < e.e) return new p(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN); for (u = null == t ? (x = !1, h) : t, s = new p(.03125); - 2 < e.e;) e = e.times(s), l += 5; for (u += n = Math.log(v(2, l)) / Math.LN10 * 2 + 5 | 0, r = o = a = new p(1), p.precision = u;;) { if (o = U(o.times(e), u, 1), r = r.times(++f), E((s = a.plus(T(o, r, u, 1))).d).slice(0, u) === E(a.d).slice(0, u)) { for (i = l; i--;) a = U(a.times(a), u, 1); if (null != t) return p.precision = h, a; if (!(c < 3 && S(a.d, u - n, m, c))) return U(a, p.precision = h, m, x = !0);
                        p.precision = u += 10, r = o = s = new p(1), f = 0, c++ }
                    a = s } }

            function H(e, t) { var r, n, i, o, a, s, u, c, f, l, p, m = 1,
                    h = e,
                    d = h.d,
                    y = h.constructor,
                    g = y.rounding,
                    v = y.precision; if (h.s < 0 || !d || !d[0] || !h.e && 1 == d[0] && 1 == d.length) return new y(d && !d[0] ? -1 / 0 : 1 != h.s ? NaN : d ? 0 : h); if (f = null == t ? (x = !1, v) : t, y.precision = f += 10, n = (r = E(d)).charAt(0), !(Math.abs(o = h.e) < 15e14)) return c = z(y, f + 2, v).times(o + ""), h = H(new y(n + "." + r.slice(1)), f - 10).plus(c), y.precision = v, null == t ? U(h, v, g, x = !0) : h; for (; n < 7 && 1 != n || 1 == n && 3 < r.charAt(1);) n = (r = E((h = h.times(e)).d)).charAt(0), m++; for (o = h.e, 1 < n ? (h = new y("0." + r), o++) : h = new y(n + "." + r.slice(1)), u = a = h = T((l = h).minus(1), h.plus(1), f, 1), p = U(h.times(h), f, 1), i = 3;;) { if (a = U(a.times(p), f, 1), E((c = u.plus(T(a, new y(i), f, 1))).d).slice(0, f) === E(u.d).slice(0, f)) { if (u = u.times(2), 0 !== o && (u = u.plus(z(y, f + 2, v).times(o + ""))), u = T(u, new y(m), f, 1), null != t) return y.precision = v, u; if (!S(u.d, f - 10, g, s)) return U(u, y.precision = v, g, x = !0);
                        y.precision = f += 10, c = a = h = T(l.minus(1), l.plus(1), f, 1), p = U(h.times(h), f, 1), i = s = 1 }
                    u = c, i += 2 } }

            function $(e) { return String(e.s * e.s / 0) }

            function G(e, t) { var r, n, i; for (-1 < (r = t.indexOf(".")) && (t = t.replace(".", "")), 0 < (n = t.search(/e/i)) ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; 48 === t.charCodeAt(n); n++); for (i = t.length; 48 === t.charCodeAt(i - 1); --i); if (t = t.slice(n, i)) { if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % R, r < 0 && (n += R), n < i) { for (n && e.d.push(+t.slice(0, n)), i -= R; n < i;) e.d.push(+t.slice(n, n += R));
                        t = t.slice(n), n = R - t.length } else n -= i; for (; n--;) t += "0";
                    e.d.push(+t), x && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0])) } else e.e = 0, e.d = [0]; return e }

            function Z(e, t, r, n, i) { var o, a, s, u, c = e.precision,
                    f = Math.ceil(c / R); for (x = !1, u = r.times(r), s = new e(n);;) { if (a = T(s.times(u), new e(t++ * t++), c, 1), s = i ? n.plus(a) : n.minus(a), n = T(a.times(u), new e(t++ * t++), c, 1), void 0 !== (a = s.plus(n)).d[f]) { for (o = f; a.d[o] === s.d[o] && o--;); if (-1 == o) break }
                    o = s, s = n, n = a, a = o, 0 } return x = !0, a.d.length = f + 1, a }

            function V(e, t) { var r, n = t.s < 0,
                    i = B(e, e.precision, 1),
                    o = i.times(.5); if ((t = t.abs()).lte(o)) return a = n ? 4 : 1, t; if ((r = t.divToInt(i)).isZero()) a = n ? 3 : 2;
                else { if ((t = t.minus(r.times(i))).lte(o)) return a = j(r) ? n ? 2 : 3 : n ? 4 : 1, t;
                    a = j(r) ? n ? 1 : 4 : n ? 3 : 2 } return t.minus(i).abs() }

            function r(e, t, r, n) { var i, o, a, s, u, c, f, l, p, m = e.constructor,
                    h = void 0 !== r; if (h ? (A(r, 1, d), void 0 === n ? n = m.rounding : A(n, 0, 8)) : (r = m.precision, n = m.rounding), e.isFinite()) { for (h ? (i = 2, 16 == t ? r = 4 * r - 3 : 8 == t && (r = 3 * r - 2)) : i = t, 0 <= (a = (f = _(e)).indexOf(".")) && (f = f.replace(".", ""), (p = new m(1)).e = f.length - a, p.d = O(_(p), 10, i), p.e = p.d.length), o = u = (l = O(f, 10, i)).length; 0 == l[--u];) l.pop(); if (l[0]) { if (a < 0 ? o-- : ((e = new m(e)).d = l, e.e = o, l = (e = T(e, p, r, n, 0, i)).d, o = e.e, c = k), a = l[r], s = i / 2, c = c || void 0 !== l[r + 1], c = n < 4 ? (void 0 !== a || c) && (0 === n || n === (e.s < 0 ? 3 : 2)) : s < a || a === s && (4 === n || c || 6 === n && 1 & l[r - 1] || n === (e.s < 0 ? 8 : 7)), l.length = r, c)
                            for (; ++l[--r] > i - 1;) l[r] = 0, r || (++o, l.unshift(1)); for (u = l.length; !l[u - 1]; --u); for (a = 0, f = ""; a < u; a++) f += y.charAt(l[a]); if (h) { if (1 < u)
                                if (16 == t || 8 == t) { for (a = 16 == t ? 4 : 3, --u; u % a; u++) f += "0"; for (u = (l = O(f, i, t)).length; !l[u - 1]; --u); for (a = 1, f = "1."; a < u; a++) f += y.charAt(l[a]) } else f = f.charAt(0) + "." + f.slice(1);
                            f = f + (o < 0 ? "p" : "p+") + o } else if (o < 0) { for (; ++o;) f = "0" + f;
                            f = "0." + f } else if (++o > u)
                            for (o -= u; o--;) f += "0";
                        else o < u && (f = f.slice(0, o) + "." + f.slice(o)) } else f = h ? "0p+0" : "0";
                    f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f } else f = $(e); return e.s < 0 ? "-" + f : f }

            function W(e, t) { if (e.length > t) return e.length = t, !0 }

            function J(e) { return new this(e).abs() }

            function Y(e) { return new this(e).acos() }

            function X(e) { return new this(e).acosh() }

            function Q(e, t) { return new this(e).plus(t) }

            function K(e) { return new this(e).asin() }

            function ee(e) { return new this(e).asinh() }

            function te(e) { return new this(e).atan() }

            function re(e) { return new this(e).atanh() }

            function ne(e, t) { e = new this(e), t = new this(t); var r, n = this.precision,
                    i = this.rounding,
                    o = n + 4; return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (r = t.s < 0 ? B(this, n, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (r = B(this, o, 1).times(.5)).s = e.s : r = t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(T(e, t, o, 1)), t = B(this, o, 1), this.precision = n, this.rounding = i, e.s < 0 ? r.minus(t) : r.plus(t)) : this.atan(T(e, t, o, 1)) : (r = B(this, o, 1).times(0 < t.s ? .25 : .75)).s = e.s : r = new this(NaN), r }

            function ie(e) { return new this(e).cbrt() }

            function oe(e) { return U(e = new this(e), e.e + 1, 2) }

            function ae(e) { if (!e || "object" != typeof e) throw Error(c + "Object expected"); var t, r, n, i = !0 === e.defaults,
                    o = ["precision", 1, d, "rounding", 0, 8, "toExpNeg", -s, 0, "toExpPos", 0, s, "maxE", 0, s, "minE", -s, 0, "modulo", 0, 9]; for (t = 0; t < o.length; t += 3)
                    if (r = o[t], i && (this[r] = u[r]), void 0 !== (n = e[r])) { if (!(I(n) === n && o[t + 1] <= n && n <= o[t + 2])) throw Error(g + r + ": " + n);
                        this[r] = n }
                if (r = "crypto", i && (this[r] = u[r]), void 0 !== (n = e[r])) { if (!0 !== n && !1 !== n && 0 !== n && 1 !== n) throw Error(g + r + ": " + n); if (n) { if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(f);
                        this[r] = !0 } else this[r] = !1 } return this }

            function se(e) { return new this(e).cos() }

            function ue(e) { return new this(e).cosh() }

            function ce(e, t) { return new this(e).div(t) }

            function fe(e) { return new this(e).exp() }

            function le(e) { return U(e = new this(e), e.e + 1, 3) }

            function pe() { var e, t, r = new this(0); for (x = !1, e = 0; e < arguments.length;)
                    if ((t = new this(arguments[e++])).d) r.d && (r = r.plus(t.times(t)));
                    else { if (t.s) return x = !0, new this(1 / 0);
                        r = t }
                return x = !0, r.sqrt() }

            function me(e) { return e instanceof l || e && "[object Decimal]" === e.name || !1 }

            function he(e) { return new this(e).ln() }

            function de(e, t) { return new this(e).log(t) }

            function ye(e) { return new this(e).log(2) }

            function ge(e) { return new this(e).log(10) }

            function ve() { return t(this, arguments, "lt") }

            function xe() { return t(this, arguments, "gt") }

            function be(e, t) { return new this(e).mod(t) }

            function we(e, t) { return new this(e).mul(t) }

            function Ne(e, t) { return new this(e).pow(t) }

            function Me(e) { var t, r, n, i, o = 0,
                    a = new this(1),
                    s = []; if (void 0 === e ? e = this.precision : A(e, 1, d), n = Math.ceil(e / R), this.crypto)
                    if (crypto.getRandomValues)
                        for (t = crypto.getRandomValues(new Uint32Array(n)); o < n;) 429e7 <= (i = t[o]) ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : s[o++] = i % 1e7;
                    else { if (!crypto.randomBytes) throw Error(f); for (t = crypto.randomBytes(n *= 4); o < n;) 214e7 <= (i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((127 & t[o + 3]) << 24)) ? crypto.randomBytes(4).copy(t, o) : (s.push(i % 1e7), o += 4);
                        o = n / 4 }
                else
                    for (; o < n;) s[o++] = 1e7 * Math.random() | 0; for (n = s[--o], e %= R, n && e && (i = v(10, R - e), s[o] = (n / i | 0) * i); 0 === s[o]; o--) s.pop(); if (o < 0) s = [r = 0];
                else { for (r = -1; 0 === s[0]; r -= R) s.shift(); for (n = 1, i = s[0]; 10 <= i; i /= 10) n++;
                    n < R && (r -= R - n) } return a.e = r, a.d = s, a }

            function Ee(e) { return U(e = new this(e), e.e + 1, this.rounding) }

            function Ae(e) { return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN }

            function Se(e) { return new this(e).sin() }

            function Oe(e) { return new this(e).sinh() }

            function Te(e) { return new this(e).sqrt() }

            function _e(e, t) { return new this(e).sub(t) }

            function Ce(e) { return new this(e).tan() }

            function ze(e) { return new this(e).tanh() }

            function Be(e) { return U(e = new this(e), e.e + 1, 1) }(l = function e(t) { var r, n, i;

                function o(e) { var t, r, n, i = this; if (!(i instanceof o)) return new o(e); if (e instanceof(i.constructor = o)) return i.s = e.s, i.e = e.e, void(i.d = (e = e.d) ? e.slice() : e); if ("number" == (n = typeof e)) { if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]); if (i.s = e < 0 ? (e = -e, -1) : 1, e === ~~e && e < 1e7) { for (t = 0, r = e; 10 <= r; r /= 10) t++; return i.e = t, void(i.d = [e]) } return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : G(i, e.toString()) } if ("string" !== n) throw Error(g + e); return 45 === e.charCodeAt(0) ? (e = e.slice(1), i.s = -1) : i.s = 1, b.test(e) ? G(i, e) : function(e, t) { var r, n, i, o, a, s, u, c, f; if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e; if (m.test(t)) r = 16, t = t.toLowerCase();
                        else if (p.test(t)) r = 2;
                        else { if (!h.test(t)) throw Error(g + t);
                            r = 8 } for (a = 0 <= (o = (t = 0 < (o = t.search(/p/i)) ? (u = +t.slice(o + 1), t.substring(2, o)) : t.slice(2)).indexOf(".")), n = e.constructor, a && (o = (s = (t = t.replace(".", "")).length) - o, i = L(n, new n(r), o, 2 * o)), o = f = (c = O(t, r, P)).length - 1; 0 === c[o]; --o) c.pop(); return o < 0 ? new n(0 * e.s) : (e.e = C(c, f), e.d = c, x = !1, a && (e = T(e, i, 4 * s)), u && (e = e.times(Math.abs(u) < 54 ? Math.pow(2, u) : l.pow(2, u))), x = !0, e) }(i, e) } if (o.prototype = M, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = o.set = ae, o.clone = e, o.isDecimal = me, o.abs = J, o.acos = Y, o.acosh = X, o.add = Q, o.asin = K, o.asinh = ee, o.atan = te, o.atanh = re, o.atan2 = ne, o.cbrt = ie, o.ceil = oe, o.cos = se, o.cosh = ue, o.div = ce, o.exp = fe, o.floor = le, o.hypot = pe, o.ln = he, o.log = de, o.log10 = ge, o.log2 = ye, o.max = ve, o.min = xe, o.mod = be, o.mul = we, o.pow = Ne, o.random = Me, o.round = Ee, o.sign = Ae, o.sin = Se, o.sinh = Oe, o.sqrt = Te, o.sub = _e, o.tan = Ce, o.tanh = ze, o.trunc = Be, void 0 === t && (t = {}), t && !0 !== t.defaults)
                    for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < i.length;) t.hasOwnProperty(n = i[r++]) || (t[n] = this[n]); return o.config(t), o }(u)).default = l.Decimal = l, n = new l(n), i = new l(i), void 0 === (Re = function() { return l }.call(Ie, Pe, Ie, ke)) || (ke.exports = Re) }() }, function(e, t, n) { "use strict"; var i = n(155);
        e.exports = function e(t) { var r = i.create(t); return r.create = e, r.import(n(161)), r }() }, function(e, t, r) { "use strict";
        r(156); var u = r(5).isFactory,
            c = r(97),
            f = r(98),
            l = r(159),
            p = r(160);
        t.create = function(e) { if ("function" != typeof Object.create) throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility."); var n = [],
                i = [],
                o = f.mixin({});
            o.type = {}, o.expression = { transform: {}, mathWithTransform: {} }, o.typed = c.create(o.type); var a = { epsilon: 1e-12, matrix: "Matrix", number: "number", precision: 64, predictable: !1, randomSeed: null };

            function s(e) { if (!u(e)) throw new Error("Factory object with properties `type`, `name`, and `factory` expected"); var t, r = n.indexOf(e); return -1 === r ? (t = !0 === e.math ? e.factory(o.type, a, s, o.typed, o) : e.factory(o.type, a, s, o.typed), n.push(e), i.push(t)) : t = i[r], t } return o.import = s(l), o.config = s(p), o.expression.mathWithTransform.config = o.config, e && o.config(e), o } }, function(e, t) { Number.isFinite = Number.isFinite || function(e) { return "number" == typeof e && isFinite(e) }, Number.isNaN = Number.isNaN || function(e) { return e != e } }, function(e, t, r) { "use strict"; var n, i, o;
        i = [], void 0 === (o = "function" == typeof(n = function() {
            function z() { return !0 }

            function ne() { return !1 }

            function ie() {} return function e() { var t = [{ name: "number", test: function(e) { return "number" == typeof e } }, { name: "string", test: function(e) { return "string" == typeof e } }, { name: "boolean", test: function(e) { return "boolean" == typeof e } }, { name: "Function", test: function(e) { return "function" == typeof e } }, { name: "Array", test: Array.isArray }, { name: "Date", test: function(e) { return e instanceof Date } }, { name: "RegExp", test: function(e) { return e instanceof RegExp } }, { name: "Object", test: function(e) { return "object" == typeof e && e.constructor === Object } }, { name: "null", test: function(e) { return null === e } }, { name: "undefined", test: function(e) { return void 0 === e } }],
                    n = { name: "any", test: z },
                    r = [],
                    i = [],
                    F = { types: t, conversions: i, ignore: r };

                function f(t) { var e = te(F.types, function(e) { return e.name === t }); if (e) return e; if ("any" === t) return n; var r = te(F.types, function(e) { return e.name.toLowerCase() === t.toLowerCase() }); throw new TypeError('Unknown type "' + t + '"' + (r ? '. Did you mean "' + r.name + '"?' : "")) }

                function l(e) { return e === n ? 999 : F.types.indexOf(e) }

                function p(t) { var e = te(F.types, function(e) { return e.test(t) }); if (e) return e.name; throw new TypeError("Value has unknown type. Value: " + t) }

                function o(e, t) { if (!e.signatures) throw new TypeError("Function is no typed-function"); var r; if ("string" == typeof t) { r = t.split(","); for (var n = 0; n < r.length; n++) r[n] = r[n].trim() } else { if (!Array.isArray(t)) throw new TypeError("String array or a comma separated string expected");
                        r = t } var i = r.join(","),
                        o = e.signatures[i]; if (o) return o; throw new TypeError("Signature not found (signature: " + (e.name || "unnamed") + "(" + r.join(", ") + "))") }

                function a(e, t) { var r = p(e); if (t === r) return e; for (var n = 0; n < F.conversions.length; n++) { var i = F.conversions[n]; if (i.from === r && i.to === t) return i.convert(e) } throw new Error("Cannot convert from " + r + " to " + t) }

                function H(e) { return e.map(function(e) { var t = e.types.map(u); return (e.restParam ? "..." : "") + t.join("|") }).join(",") }

                function s(e, r) { var t, n, i = 0 === e.indexOf("..."),
                        o = i ? 3 < e.length ? e.slice(3) : "any" : e,
                        a = o.split("|").map(N).filter(M).filter(w),
                        s = (t = a, n = {}, r.forEach(function(e) {-1 !== t.indexOf(e.from) || -1 === t.indexOf(e.to) || n[e.from] || (n[e.from] = e) }), Object.keys(n).map(function(e) { return n[e] })),
                        u = a.map(function(e) { var t = f(e); return { name: e, typeIndex: l(t), test: t.test, conversion: null, conversionIndex: -1 } }),
                        c = s.map(function(e) { var t = f(e.from); return { name: e.from, typeIndex: l(t), test: t.test, conversion: e, conversionIndex: r.indexOf(e) } }); return { types: u.concat(c), restParam: i } }

                function $(e, t, i) { var r = []; return "" !== e.trim() && (r = e.split(",").map(N).map(function(e, t, r) { var n = s(e, i); if (n.restParam && t !== r.length - 1) throw new SyntaxError('Unexpected rest parameter "' + e + '": only allowed for the last parameter'); return n })), r.some(E) ? null : { params: r, fn: t } }

                function G(e) { var t = A(e); return !!t && t.restParam }

                function Z(e) { return e.types.some(function(e) { return null != e.conversion }) }

                function V(e) { if (e && 0 !== e.types.length) { if (1 === e.types.length) return f(e.types[0].name).test; if (2 === e.types.length) { var t = f(e.types[0].name).test,
                                r = f(e.types[1].name).test; return function(e) { return t(e) || r(e) } } var n = e.types.map(function(e) { return f(e.name).test }); return function(e) { for (var t = 0; t < n.length; t++)
                                if (n[t](e)) return !0;
                            return !1 } } return z }

                function W(e) { var r, t, n, i; if (G(e)) { var o = (r = (i = e, i.slice(0, i.length - 1)).map(V)).length,
                            a = V(A(e)),
                            s = function(e) { for (var t = o; t < e.length; t++)
                                    if (!a(e[t])) return !1;
                                return !0 }; return function(e) { for (var t = 0; t < r.length; t++)
                                if (!r[t](e[t])) return !1;
                            return s(e) && e.length >= o + 1 } } return 0 === e.length ? function(e) { return 0 === e.length } : 1 === e.length ? (t = V(e[0]), function(e) { return t(e[0]) && 1 === e.length }) : 2 === e.length ? (t = V(e[0]), n = V(e[1]), function(e) { return t(e[0]) && n(e[1]) && 2 === e.length }) : (r = e.map(V), function(e) { for (var t = 0; t < r.length; t++)
                            if (!r[t](e[t])) return !1;
                        return e.length === r.length }) }

                function m(e, t) { return t < e.params.length ? e.params[t] : G(e.params) ? A(e.params) : null }

                function h(e, t, r) { var n = m(e, t),
                        i = n ? r ? n.types.filter(d) : n.types : []; return i.map(u) }

                function u(e) { return e.name }

                function d(e) { return null === e.conversion || void 0 === e.conversion }

                function y(e, t) { var r = T(re(e, function(e) { return h(e, t, !1) })); return -1 !== r.indexOf("any") ? ["any"] : r }

                function J(e, r, t) { var n, i, o, a = e || "unnamed",
                        s = t; for (o = 0; o < r.length; o++) { var u = s.filter(function(e) { var t = V(m(e, o)); return (o < e.params.length || G(e.params)) && t(r[o]) }); if (0 === u.length) { if (0 < (i = y(s, o)).length) { var c = p(r[o]); return (n = new TypeError("Unexpected type of argument in function " + a + " (expected: " + i.join(" or ") + ", actual: " + c + ", index: " + o + ")")).data = { category: "wrongType", fn: a, index: o, actual: c, expected: i }, n } } else s = u } var f = s.map(function(e) { return G(e.params) ? 1 / 0 : e.params.length }); if (r.length < Math.min.apply(null, f)) return i = y(s, o), (n = new TypeError("Too few arguments in function " + a + " (expected: " + i.join(" or ") + ", index: " + r.length + ")")).data = { category: "tooFewArgs", fn: a, index: r.length, expected: i }, n; var l = Math.max.apply(null, f); return r.length > l ? (n = new TypeError("Too many arguments in function " + a + " (expected: " + l + ", actual: " + r.length + ")")).data = { category: "tooManyArgs", fn: a, index: r.length, expectedLength: l } : (n = new TypeError('Arguments of type "' + r.join(", ") + '" do not match any of the defined signatures of function ' + a + ".")).data = { category: "mismatch", actual: r.map(p) }, n }

                function c(e) { for (var t = 999, r = 0; r < e.types.length; r++) d(e.types[r]) && (t = Math.min(t, e.types[r].typeIndex)); return t }

                function g(e) { for (var t = 999, r = 0; r < e.types.length; r++) d(e.types[r]) || (t = Math.min(t, e.types[r].conversionIndex)); return t }

                function v(e, t) { var r; return 0 != (r = e.restParam - t.restParam) ? r : 0 != (r = Z(e) - Z(t)) ? r : 0 != (r = c(e) - c(t)) ? r : g(e) - g(t) }

                function Y(e, t) { var r, n, i = Math.min(e.params.length, t.params.length); if (0 != (n = e.params.some(Z) - t.params.some(Z))) return n; for (r = 0; r < i; r++)
                        if (0 != (n = Z(e.params[r]) - Z(t.params[r]))) return n;
                    for (r = 0; r < i; r++)
                        if (0 !== (n = v(e.params[r], t.params[r]))) return n;
                    return e.params.length - t.params.length }

                function X(e, n) { var t = n; if (e.some(Z)) { var i = G(e),
                            o = e.map(x);
                        t = function() { for (var e = [], t = i ? arguments.length - 1 : arguments.length, r = 0; r < t; r++) e[r] = o[r](arguments[r]); return i && (e[t] = arguments[t].map(o[t])), n.apply(null, e) } } var r = t; if (G(e)) { var a = e.length - 1;
                        r = function() { return t.apply(null, S(arguments, 0, a).concat([S(arguments, a)])) } } return r }

                function x(e) { var t, r, n, i, o = [],
                        a = []; switch (e.types.forEach(function(e) { e.conversion && (o.push(f(e.conversion.from).test), a.push(e.conversion.convert)) }), a.length) {
                        case 0:
                            return function(e) { return e };
                        case 1:
                            return t = o[0], n = a[0],
                                function(e) { return t(e) ? n(e) : e };
                        case 2:
                            return t = o[0], r = o[1], n = a[0], i = a[1],
                                function(e) { return t(e) ? n(e) : r(e) ? i(e) : e };
                        default:
                            return function(e) { for (var t = 0; t < a.length; t++)
                                    if (o[t](e)) return a[t](e);
                                return e } } }

                function Q(e, u) {
                    function c(r, t, n) { if (t < r.length) { var e, i = r[t],
                                o = u ? i.types.filter(d) : i.types; if (i.restParam) { var a = o.filter(d);
                                e = a.length < o.length ? [a, o] : [o] } else e = o.map(function(e) { return [e] }); return re(e, function(e) { return c(r, t + 1, n.concat([e])) }) } var s = n.map(function(e, t) { return { types: e, restParam: t === r.length - 1 && G(r) } }); return [s] } return c(e, 0, []) }

                function K(e, t) { for (var r = Math.max(e.params.length, t.params.length), n = 0; n < r; n++) { var i = h(e, n, !0),
                            o = h(t, n, !0); if (!O(i, o)) return !1 } var a = e.params.length,
                        s = t.params.length,
                        u = G(e.params),
                        c = G(t.params); return u ? c ? a === s : a <= s : c ? s <= a : a === s }

                function b(t, r) { if (0 === Object.keys(r).length) throw new SyntaxError("No signatures provided"); var n = [];
                    Object.keys(r).map(function(e) { return $(e, r[e], F.conversions) }).filter(ee).forEach(function(t) { var e = te(n, function(e) { return K(e, t) }); if (e) throw new TypeError('Conflicting signatures "' + H(e.params) + '" and "' + H(t.params) + '".');
                        n.push(t) }); var i = re(n, function(t) { var e = t ? Q(t.params, !1) : []; return e.map(function(e) { return { params: e, fn: t.fn } }) }).filter(ee);
                    i.sort(Y); var o, e = i[0] && i[0].params.length <= 2 && !G(i[0].params),
                        a = i[1] && i[1].params.length <= 2 && !G(i[1].params),
                        s = i[2] && i[2].params.length <= 2 && !G(i[2].params),
                        u = i[3] && i[3].params.length <= 2 && !G(i[3].params),
                        c = i[4] && i[4].params.length <= 2 && !G(i[4].params),
                        f = i[5] && i[5].params.length <= 2 && !G(i[5].params),
                        l = e && a && s && u && c && f,
                        p = i.map(function(e) { return W(e.params) }),
                        m = e ? V(i[0].params[0]) : ne,
                        h = a ? V(i[1].params[0]) : ne,
                        d = s ? V(i[2].params[0]) : ne,
                        y = u ? V(i[3].params[0]) : ne,
                        g = c ? V(i[4].params[0]) : ne,
                        v = f ? V(i[5].params[0]) : ne,
                        x = e ? V(i[0].params[1]) : ne,
                        b = a ? V(i[1].params[1]) : ne,
                        w = s ? V(i[2].params[1]) : ne,
                        N = u ? V(i[3].params[1]) : ne,
                        M = c ? V(i[4].params[1]) : ne,
                        E = f ? V(i[5].params[1]) : ne,
                        A = i.map(function(e) { return X(e.params, e.fn) }),
                        S = e ? A[0] : ie,
                        O = a ? A[1] : ie,
                        T = s ? A[2] : ie,
                        _ = u ? A[3] : ie,
                        C = c ? A[4] : ie,
                        z = f ? A[5] : ie,
                        B = e ? i[0].params.length : -1,
                        k = a ? i[1].params.length : -1,
                        I = s ? i[2].params.length : -1,
                        P = u ? i[3].params.length : -1,
                        R = c ? i[4].params.length : -1,
                        U = f ? i[5].params.length : -1,
                        q = l ? 6 : 0,
                        D = i.length,
                        L = function() { for (var e = q; e < D; e++)
                                if (p[e](arguments)) return A[e].apply(null, arguments);
                            throw J(t, arguments, i) },
                        j = function(e, t) { return arguments.length === B && m(e) && x(t) ? S.apply(null, arguments) : arguments.length === k && h(e) && b(t) ? O.apply(null, arguments) : arguments.length === I && d(e) && w(t) ? T.apply(null, arguments) : arguments.length === P && y(e) && N(t) ? _.apply(null, arguments) : arguments.length === R && g(e) && M(t) ? C.apply(null, arguments) : arguments.length === U && v(e) && E(t) ? z.apply(null, arguments) : L.apply(null, arguments) }; try { Object.defineProperty(j, "name", { value: t }) } catch (e) {} return j.signatures = (o = {}, i.forEach(function(t) { t.params.some(Z) || Q(t.params, !0).forEach(function(e) { o[H(e)] = t.fn }) }), o), j }

                function w(e) { return -1 === F.ignore.indexOf(e) }

                function N(e) { return e.trim() }

                function M(e) { return !!e }

                function ee(e) { return null !== e }

                function E(e) { return 0 === e.types.length }

                function A(e) { return e[e.length - 1] }

                function S(e, t, r) { return Array.prototype.slice.call(e, t, r) }

                function O(e, t) { for (var r = 0; r < e.length; r++)
                        if (n = t, i = e[r], -1 !== n.indexOf(i)) return !0;
                    var n, i; return !1 }

                function te(e, t) { for (var r = 0; r < e.length; r++)
                        if (t(e[r])) return e[r] }

                function T(e) { for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0; return Object.keys(t) }

                function re(e, t) { return Array.prototype.concat.apply([], e.map(t)) }

                function _(e) { for (var t = "", r = 0; r < e.length; r++) { var n = e[r]; if (("object" == typeof n.signatures || "string" == typeof n.signature) && "" !== n.name)
                            if ("" === t) t = n.name;
                            else if (t !== n.name) { var i = new Error("Function names do not match (expected: " + t + ", actual: " + n.name + ")"); throw i.data = { actual: n.name, expected: t }, i } } return t }

                function C(e) { var r, n = {};

                    function t(e, t) { if (n.hasOwnProperty(e) && t !== n[e]) throw (r = new Error('Signature "' + e + '" is defined twice')).data = { signature: e }, r } for (var i = 0; i < e.length; i++) { var o = e[i]; if ("object" == typeof o.signatures)
                            for (var a in o.signatures) o.signatures.hasOwnProperty(a) && (t(a, o.signatures[a]), n[a] = o.signatures[a]);
                        else { if ("string" != typeof o.signature) throw (r = new TypeError("Function is no typed-function (index: " + i + ")")).data = { index: i }, r;
                            t(o.signature, o), n[o.signature] = o } } return n } return (F = b("typed", { "string, Object": b, Object: function(e) { var t = []; for (var r in e) e.hasOwnProperty(r) && t.push(e[r]); var n = _(t); return b(n, e) }, "...Function": function(e) { return b(_(e), C(e)) }, "string, ...Function": function(e, t) { return b(e, C(t)) } })).create = e, F.types = t, F.conversions = i, F.ignore = r, F.convert = a, F.find = o, F.addType = function(e, t) { if (!e || "string" != typeof e.name || "function" != typeof e.test) throw new TypeError("Object with properties {name: string, test: function} expected"); if (!1 !== t)
                        for (var r = 0; r < F.types.length; r++)
                            if ("Object" === F.types[r].name) return void F.types.splice(r, 0, e);
                    F.types.push(e) }, F.addConversion = function(e) { if (!e || "string" != typeof e.from || "string" != typeof e.to || "function" != typeof e.convert) throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
                    F.conversions.push(e) }, F }() }) ? n.apply(t, i) : n) || (e.exports = o) }, function(e, t) {
        function r() {}
        r.prototype = { on: function(e, t, r) { var n = this.e || (this.e = {}); return (n[e] || (n[e] = [])).push({ fn: t, ctx: r }), this }, once: function(e, t, r) { var n = this;

                function i() { n.off(e, i), t.apply(r, arguments) } return i._ = t, this.on(e, i, r) }, emit: function(e) { for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, t); return this }, off: function(e, t) { var r = this.e || (this.e = {}),
                    n = r[e],
                    i = []; if (n && t)
                    for (var o = 0, a = n.length; o < a; o++) n[o].fn !== t && n[o].fn._ !== t && i.push(n[o]); return i.length ? r[e] = i : delete r[e], this } }, e.exports = r }, function(e, t, r) { "use strict";

        function y(e) { return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var g = r(5).lazy,
            v = r(5).isFactory,
            x = r(5).traverse,
            b = r(55);
        t.math = !0, t.name = "import", t.factory = function(s, e, u, c, f) {
            function l(e, t, r) { if (r.wrap && "function" == typeof t && (n = function() { for (var e = [], t = 0, r = arguments.length; t < r; t++) { var n = arguments[t];
                            e[t] = n && n.valueOf() } return i.apply(f, e) }, (i = t).transform && (n.transform = i.transform), t = n), h(f[e]) && h(t)) return t = r.override ? c(e, t.signatures) : c(f[e], t), o(e, f[e] = t), void f.emit("import", e, function() { return t }); var i, n; if (void 0 === f[e] || r.override) return o(e, f[e] = t), void f.emit("import", e, function() { return t }); if (!r.silent) throw new Error('Cannot import "' + e + '": already exists') }

            function o(e, t) { t && "function" == typeof t.transform ? (f.expression.transform[e] = t.transform, r(e) && (f.expression.mathWithTransform[e] = t.transform)) : (delete f.expression.transform[e], r(e) && (f.expression.mathWithTransform[e] = t)) }

            function p(e) { delete f.expression.transform[e], r(e) ? f.expression.mathWithTransform[e] = f[e] : delete f.expression.mathWithTransform[e] }

            function m(t, r) { if ("string" == typeof t.name) { var n = t.name,
                        e = n in f.expression.transform,
                        i = t.path ? x(f, t.path) : f,
                        o = i.hasOwnProperty(n) ? i[n] : void 0,
                        a = function() { var e = u(t); if (e && "function" == typeof e.transform) throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"'); if (h(o) && h(e)) return r.override || (e = c(o, e)), e; if (void 0 === o || r.override) return e; if (!r.silent) throw new Error('Cannot import "' + n + '": already exists') };!1 !== t.lazy ? (g(i, n, a), e ? p(n) : ("expression.transform" === t.path || d(t)) && g(f.expression.mathWithTransform, n, a)) : (i[n] = a(), e ? p(n) : ("expression.transform" === t.path || d(t)) && (f.expression.mathWithTransform[n] = a())), f.emit("import", n, a, t.path) } else u(t) }

            function h(e) { return "function" == typeof e && "object" === y(e.signatures) }

            function r(e) { return !t.hasOwnProperty(e) }

            function d(e) { return void 0 === e.path && !t.hasOwnProperty(e.name) } var t = { expression: !0, type: !0, docs: !0, error: !0, json: !0, chain: !0 }; return function t(e, r) { var n, i = arguments.length; if (1 !== i && 2 !== i) throw new b("import", i, 1, 2); if (r || (r = {}), v(e)) m(e, r);
                else if (Array.isArray(e)) e.forEach(function(e) { t(e, r) });
                else if ("object" === y(e)) { for (var o in e)
                        if (e.hasOwnProperty(o)) { var a = e[o]; "function" == typeof(n = a) || "number" == typeof n || "string" == typeof n || "boolean" == typeof n || null === n || n && s.isUnit(n) || n && s.isComplex(n) || n && s.isBigNumber(n) || n && s.isFraction(n) || n && s.isMatrix(n) || n && Array.isArray(n) ? l(o, a, r) : v(e) ? m(e, r) : t(a, r) } } else if (!r.silent) throw new TypeError("Factory, Object, or Array expected") } }, t.lazy = !0 }, function(e, t, r) { "use strict"; var u = r(5);

        function c(e, t, r) { if (void 0 !== e[t] && (a = r, s = e[t], -1 === a.indexOf(s))) { var n = (i = r, o = e[t], i.map(function(e) { return e.toLowerCase() }).indexOf(o.toLowerCase())); - 1 !== n ? (console.warn('Warning: Wrong casing for configuration option "' + t + '", should be "' + r[n] + '" instead of "' + e[t] + '".'), e[t] = r[n]) : console.warn('Warning: Unknown value "' + e[t] + '" for configuration option "' + t + '". Available options: ' + r.map(JSON.stringify).join(", ") + ".") } var i, o, a, s }
        t.name = "config", t.math = !0, t.factory = function(e, i, t, r, o) { var a = ["Matrix", "Array"],
                s = ["number", "BigNumber", "Fraction"];

            function n(e) { if (e) { var t = u.map(i, u.clone);
                    c(e, "matrix", a), c(e, "number", s), u.deepExtend(i, e); var r = u.map(i, u.clone),
                        n = u.map(e, u.clone); return o.emit("config", r, t, n), r } return u.map(i, u.clone) } return n.MATRIX = a, n.NUMBER = s, n } }, function(e, t, r) { e.exports = [r(162), r(193), r(195), r(351), r(572), r(574)] }, function(e, t, r) { "use strict";
        e.exports = [r(163), r(165), r(166), r(170), r(174), r(177), r(63), r(64), r(185), r(186), r(187)] }, function(e, t, r) { "use strict";
        e.exports = [r(164), r(99)] }, function(e, t, r) { "use strict";
        r.r(t), r.d(t, "factory", function() { return i }), r.d(t, "name", function() { return o }), r.d(t, "path", function() { return s }), r.d(t, "math", function() { return u }); var n = r(153),
            a = r.n(n);

        function i(e, t, r, n, i) { var o = a.a.clone({ precision: t.precision }); return o.prototype.type = "BigNumber", o.prototype.isBigNumber = !0, o.prototype.toJSON = function() { return { mathjs: "BigNumber", value: this.toString() } }, o.fromJSON = function(e) { return new o(e.value) }, i.on("config", function(e, t) { e.precision !== t.precision && o.config({ precision: e.precision }) }), o } var o = "BigNumber",
            s = "type",
            u = !0 }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "boolean", t.factory = function(e, t, r, n) { var i = n("bool", { "": function() { return !1 }, boolean: function(e) { return e }, number: function(e) { return !!e }, null: function(e) { return !1 }, BigNumber: function(e) { return !e.isZero() }, string: function(e) { var t = e.toLowerCase(); if ("true" === t) return !0; if ("false" === t) return !1; var r = Number(e); if ("" !== e && !isNaN(r)) return !!r; throw new Error('Cannot convert "' + e + '" to a boolean') }, "Array | Matrix": function(e) { return o(e, i) } }); return i } }, function(e, t, r) { "use strict";
        e.exports = [r(167), r(169)] }, function(e, t, r) { "use strict"; var u = r(9).format,
            c = r(5).lazy;
        t.name = "Chain", t.path = "type", t.factory = function(t, e, r, n, i) {
            function o(e) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
                t.isChain(e) ? this.value = e.value : this.value = e }

            function a(e, t) { "function" == typeof t && (o.prototype[e] = s(t)) }

            function s(r) { return function() { for (var e = [this.value], t = 0; t < arguments.length; t++) e[t + 1] = arguments[t]; return new o(r.apply(r, e)) } } return o.prototype.type = "Chain", o.prototype.isChain = !0, o.prototype.done = function() { return this.value }, o.prototype.valueOf = function() { return this.value }, o.prototype.toString = function() { return u(this.value) }, o.prototype.toJSON = function() { return { mathjs: "Chain", value: this.value } }, o.fromJSON = function(e) { return new o(e.value) }, o.createProxy = function(e, t) { if ("string" == typeof e) a(e, t);
                else
                    for (var r in e) e.hasOwnProperty(r) && a(r, e[r]) }, o.createProxy(i), i.on("import", function(e, t, r) { var n;
                void 0 === r && (n = t, c(o.prototype, e, function() { var e = n(); if ("function" == typeof e) return s(e) })) }), o }, t.math = !0, t.lazy = !1 }, function(e, u, t) { "use strict"; var c = t(5);
        u.format = function(e, t) { if ("function" == typeof t) return t(e); if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity"; var r, n = "auto"; switch (void 0 !== t && (t.notation && (n = t.notation), "number" == typeof t ? r = t : t.precision && (r = t.precision)), n) {
                case "fixed":
                    return u.toFixed(e, r);
                case "exponential":
                    return u.toExponential(e, r);
                case "auto":
                    if (t && t.exponential && (void 0 !== t.exponential.lower || void 0 !== t.exponential.upper)) { var i = c.map(t, function(e) { return e }); return (i.exponential = void 0) !== t.exponential.lower && (i.lowerExp = Math.round(Math.log(t.exponential.lower) / Math.LN10)), void 0 !== t.exponential.upper && (i.upperExp = Math.round(Math.log(t.exponential.upper) / Math.LN10)), console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace " + JSON.stringify(t) + " with " + JSON.stringify(i)), u.format(e, i) } var o = t && void 0 !== t.lowerExp ? t.lowerExp : -3,
                        a = t && void 0 !== t.upperExp ? t.upperExp : 5; if (e.isZero()) return "0"; var s = e.logarithm(); return (s.gte(o) && s.lt(a) ? e.toSignificantDigits(r).toFixed() : u.toExponential(e, r)).replace(/((\.\d*?)(0+))($|e)/, function() { var e = arguments[2],
                            t = arguments[4]; return "." !== e ? e + t : t });
                default:
                    throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", or "fixed".') } }, u.toExponential = function(e, t) { return void 0 !== t ? e.toExponential(t - 1) : e.toExponential() }, u.toFixed = function(e, t) { return e.toFixed(t) } }, function(e, t, r) { "use strict";
        t.name = "chain", t.factory = function(t, e, r, n) { return n("chain", { "": function() { return new t.Chain }, any: function(e) { return new t.Chain(e) } }) } }, function(e, t, r) { "use strict";
        e.exports = [r(79), r(172)] }, function(t, r, e) {
        var a;
        /**
         * @license Complex.js v2.0.11 11/02/2016
         *
         * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
         * Dual licensed under the MIT or GPL Version 2 licenses.
         **/
        /**
         * @license Complex.js v2.0.11 11/02/2016
         *
         * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
         * Dual licensed under the MIT or GPL Version 2 licenses.
         **/
        ! function(e) { "use strict"; var n = function(e) { return .5 * (Math.exp(e) + Math.exp(-e)) },
                i = function(e) { return .5 * (Math.exp(e) - Math.exp(-e)) },
                u = function() { throw SyntaxError("Invalid Param") };

            function c(e, t) { var r = Math.abs(e),
                    n = Math.abs(t); return 0 === e ? Math.log(n) : 0 === t ? Math.log(r) : r < 3e3 && n < 3e3 ? .5 * Math.log(e * e + t * t) : Math.log(e / Math.cos(Math.atan2(t, e))) } var o = function(e, t) { var r = { re: 0, im: 0 }; if (null == e) r.re = r.im = 0;
                else if (void 0 !== t) r.re = e, r.im = t;
                else switch (typeof e) {
                    case "object":
                        if ("im" in e && "re" in e) r.re = e.re, r.im = e.im;
                        else if ("abs" in e && "arg" in e) { if (!Number.isFinite(e.abs) && Number.isFinite(e.arg)) return f.INFINITY;
                            r.re = e.abs * Math.cos(e.arg), r.im = e.abs * Math.sin(e.arg) } else if ("r" in e && "phi" in e) { if (!Number.isFinite(e.r) && Number.isFinite(e.phi)) return f.INFINITY;
                            r.re = e.r * Math.cos(e.phi), r.im = e.r * Math.sin(e.phi) } else 2 === e.length ? (r.re = e[0], r.im = e[1]) : u(); break;
                    case "string":
                        r.im = r.re = 0; var n = e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),
                            i = 1,
                            o = 0;
                        null === n && u(); for (var a = 0; a < n.length; a++) { var s = n[a]; " " === s || "\t" === s || "\n" === s || ("+" === s ? i++ : "-" === s ? o++ : i = o = ("i" === s || "I" === s ? (i + o === 0 && u(), " " === n[a + 1] || isNaN(n[a + 1]) ? r.im += parseFloat((o % 2 ? "-" : "") + "1") : (r.im += parseFloat((o % 2 ? "-" : "") + n[a + 1]), a++)) : ((i + o === 0 || isNaN(s)) && u(), "i" === n[a + 1] || "I" === n[a + 1] ? (r.im += parseFloat((o % 2 ? "-" : "") + s), a++) : r.re += parseFloat((o % 2 ? "-" : "") + s)), 0)) }
                        0 < i + o && u(); break;
                    case "number":
                        r.im = 0, r.re = e; break;
                    default:
                        u() }
                return isNaN(r.re) || isNaN(r.im), r };

            function f(e, t) { if (!(this instanceof f)) return new f(e, t); var r = o(e, t);
                this.re = r.re, this.im = r.im }
            f.prototype = { re: 0, im: 0, sign: function() { var e = this.abs(); return new f(this.re / e, this.im / e) }, add: function(e, t) { var r = new f(e, t); return this.isInfinite() && r.isInfinite() ? f.NAN : this.isInfinite() || r.isInfinite() ? f.INFINITY : new f(this.re + r.re, this.im + r.im) }, sub: function(e, t) { var r = new f(e, t); return this.isInfinite() && r.isInfinite() ? f.NAN : this.isInfinite() || r.isInfinite() ? f.INFINITY : new f(this.re - r.re, this.im - r.im) }, mul: function(e, t) { var r = new f(e, t); return this.isInfinite() && r.isZero() || this.isZero() && r.isInfinite() ? f.NAN : this.isInfinite() || r.isInfinite() ? f.INFINITY : 0 === r.im && 0 === this.im ? new f(this.re * r.re, 0) : new f(this.re * r.re - this.im * r.im, this.re * r.im + this.im * r.re) }, div: function(e, t) { var r = new f(e, t); if (this.isZero() && r.isZero() || this.isInfinite() && r.isInfinite()) return f.NAN; if (this.isInfinite() || r.isZero()) return f.INFINITY; if (this.isZero() || r.isInfinite()) return f.ZERO;
                    e = this.re, t = this.im; var n, i, o = r.re,
                        a = r.im; return 0 === a ? new f(e / o, t / o) : Math.abs(o) < Math.abs(a) ? new f((e * (i = o / a) + t) / (n = o * i + a), (t * i - e) / n) : new f((e + t * (i = a / o)) / (n = a * i + o), (t - e * i) / n) }, pow: function(e, t) { var r = new f(e, t); if (e = this.re, t = this.im, r.isZero()) return f.ONE; if (0 === r.im) { if (0 === t && 0 <= e) return new f(Math.pow(e, r.re), 0); if (0 === e) switch ((r.re % 4 + 4) % 4) {
                            case 0:
                                return new f(Math.pow(t, r.re), 0);
                            case 1:
                                return new f(0, Math.pow(t, r.re));
                            case 2:
                                return new f(-Math.pow(t, r.re), 0);
                            case 3:
                                return new f(0, -Math.pow(t, r.re)) } } if (0 === e && 0 === t && 0 < r.re && 0 <= r.im) return f.ZERO; var n = Math.atan2(t, e),
                        i = c(e, t); return e = Math.exp(r.re * i - r.im * n), t = r.im * i + r.re * n, new f(e * Math.cos(t), e * Math.sin(t)) }, sqrt: function() { var e, t, r = this.re,
                        n = this.im,
                        i = this.abs(); if (0 <= r) { if (0 === n) return new f(Math.sqrt(r), 0);
                        e = .5 * Math.sqrt(2 * (i + r)) } else e = Math.abs(n) / Math.sqrt(2 * (i - r)); return t = r <= 0 ? .5 * Math.sqrt(2 * (i - r)) : Math.abs(n) / Math.sqrt(2 * (i + r)), new f(e, n < 0 ? -t : t) }, exp: function() { var e = Math.exp(this.re); return this.im, new f(e * Math.cos(this.im), e * Math.sin(this.im)) }, expm1: function() { var e = this.re,
                        t = this.im; return new f(Math.expm1(e) * Math.cos(t) + function(e) { var t = Math.PI / 4; if (e < -t || t < e) return Math.cos(e) - 1; var r = e * e; return r * (r * (1 / 24 + r * (-1 / 720 + r * (1 / 40320 + r * (-1 / 3628800 + r * (1 / 4790014600 + r * (-1 / 87178291200 + r * (1 / 20922789888e3))))))) - .5) }(t), Math.exp(e) * Math.sin(t)) }, log: function() { var e = this.re,
                        t = this.im; return new f(c(e, t), Math.atan2(t, e)) }, abs: function() { return e = this.re, t = this.im, r = Math.abs(e), n = Math.abs(t), r < 3e3 && n < 3e3 ? Math.sqrt(r * r + n * n) : (n = r < n ? (r = n, e / t) : t / e, r * Math.sqrt(1 + n * n)); var e, t, r, n }, arg: function() { return Math.atan2(this.im, this.re) }, sin: function() { var e = this.re,
                        t = this.im; return new f(Math.sin(e) * n(t), Math.cos(e) * i(t)) }, cos: function() { var e = this.re,
                        t = this.im; return new f(Math.cos(e) * n(t), -Math.sin(e) * i(t)) }, tan: function() { var e = 2 * this.re,
                        t = 2 * this.im,
                        r = Math.cos(e) + n(t); return new f(Math.sin(e) / r, i(t) / r) }, cot: function() { var e = 2 * this.re,
                        t = 2 * this.im,
                        r = Math.cos(e) - n(t); return new f(-Math.sin(e) / r, i(t) / r) }, sec: function() { var e = this.re,
                        t = this.im,
                        r = .5 * n(2 * t) + .5 * Math.cos(2 * e); return new f(Math.cos(e) * n(t) / r, Math.sin(e) * i(t) / r) }, csc: function() { var e = this.re,
                        t = this.im,
                        r = .5 * n(2 * t) - .5 * Math.cos(2 * e); return new f(Math.sin(e) * n(t) / r, -Math.cos(e) * i(t) / r) }, asin: function() { var e = this.re,
                        t = this.im,
                        r = new f(t * t - e * e + 1, -2 * e * t).sqrt(),
                        n = new f(r.re - t, r.im + e).log(); return new f(n.im, -n.re) }, acos: function() { var e = this.re,
                        t = this.im,
                        r = new f(t * t - e * e + 1, -2 * e * t).sqrt(),
                        n = new f(r.re - t, r.im + e).log(); return new f(Math.PI / 2 - n.im, n.re) }, atan: function() { var e = this.re,
                        t = this.im; if (0 === e) { if (1 === t) return new f(0, 1 / 0); if (-1 === t) return new f(0, -1 / 0) } var r = e * e + (1 - t) * (1 - t),
                        n = new f((1 - t * t - e * e) / r, -2 * e / r).log(); return new f(-.5 * n.im, .5 * n.re) }, acot: function() { var e = this.re,
                        t = this.im; if (0 === t) return new f(Math.atan2(1, e), 0); var r = e * e + t * t; return 0 !== r ? new f(e / r, -t / r).atan() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).atan() }, asec: function() { var e = this.re,
                        t = this.im; if (0 === e && 0 === t) return new f(0, 1 / 0); var r = e * e + t * t; return 0 !== r ? new f(e / r, -t / r).acos() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).acos() }, acsc: function() { var e = this.re,
                        t = this.im; if (0 === e && 0 === t) return new f(Math.PI / 2, 1 / 0); var r = e * e + t * t; return 0 !== r ? new f(e / r, -t / r).asin() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).asin() }, sinh: function() { var e = this.re,
                        t = this.im; return new f(i(e) * Math.cos(t), n(e) * Math.sin(t)) }, cosh: function() { var e = this.re,
                        t = this.im; return new f(n(e) * Math.cos(t), i(e) * Math.sin(t)) }, tanh: function() { var e = 2 * this.re,
                        t = 2 * this.im,
                        r = n(e) + Math.cos(t); return new f(i(e) / r, Math.sin(t) / r) }, coth: function() { var e = 2 * this.re,
                        t = 2 * this.im,
                        r = n(e) - Math.cos(t); return new f(i(e) / r, -Math.sin(t) / r) }, csch: function() { var e = this.re,
                        t = this.im,
                        r = Math.cos(2 * t) - n(2 * e); return new f(-2 * i(e) * Math.cos(t) / r, 2 * n(e) * Math.sin(t) / r) }, sech: function() { var e = this.re,
                        t = this.im,
                        r = Math.cos(2 * t) + n(2 * e); return new f(2 * n(e) * Math.cos(t) / r, -2 * i(e) * Math.sin(t) / r) }, asinh: function() { var e = this.im;
                    this.im = -this.re, this.re = e; var t = this.asin(); return this.re = -this.im, this.im = e, e = t.re, t.re = -t.im, t.im = e, t }, acosh: function() { var e = this.acos(); if (e.im <= 0) { var t = e.re;
                        e.re = -e.im, e.im = t } else { t = e.im;
                        e.im = -e.re, e.re = t } return e }, atanh: function() { var e = this.re,
                        t = this.im,
                        r = 1 < e && 0 === t,
                        n = 1 - e,
                        i = 1 + e,
                        o = n * n + t * t,
                        a = 0 !== o ? new f((i * n - t * t) / o, (t * n + i * t) / o) : new f(-1 !== e ? e / 0 : 0, 0 !== t ? t / 0 : 0),
                        s = a.re; return a.re = c(a.re, a.im) / 2, a.im = Math.atan2(a.im, s) / 2, r && (a.im = -a.im), a }, acoth: function() { var e = this.re,
                        t = this.im; if (0 === e && 0 === t) return new f(0, Math.PI / 2); var r = e * e + t * t; return 0 !== r ? new f(e / r, -t / r).atanh() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).atanh() }, acsch: function() { var e = this.re,
                        t = this.im; if (0 === t) return new f(0 !== e ? Math.log(e + Math.sqrt(e * e + 1)) : 1 / 0, 0); var r = e * e + t * t; return 0 !== r ? new f(e / r, -t / r).asinh() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).asinh() }, asech: function() { var e = this.re,
                        t = this.im; if (this.isZero()) return f.INFINITY; var r = e * e + t * t; return 0 !== r ? new f(e / r, -t / r).acosh() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).acosh() }, inverse: function() { if (this.isZero()) return f.INFINITY; if (this.isInfinite()) return f.ZERO; var e = this.re,
                        t = this.im,
                        r = e * e + t * t; return new f(e / r, -t / r) }, conjugate: function() { return new f(this.re, -this.im) }, neg: function() { return new f(-this.re, -this.im) }, ceil: function(e) { return e = Math.pow(10, e || 0), new f(Math.ceil(this.re * e) / e, Math.ceil(this.im * e) / e) }, floor: function(e) { return e = Math.pow(10, e || 0), new f(Math.floor(this.re * e) / e, Math.floor(this.im * e) / e) }, round: function(e) { return e = Math.pow(10, e || 0), new f(Math.round(this.re * e) / e, Math.round(this.im * e) / e) }, equals: function(e, t) { var r = new f(e, t); return Math.abs(r.re - this.re) <= f.EPSILON && Math.abs(r.im - this.im) <= f.EPSILON }, clone: function() { return new f(this.re, this.im) }, toString: function() { var e = this.re,
                        t = this.im,
                        r = ""; return this.isNaN() ? "NaN" : this.isZero() ? "0" : this.isInfinite() ? "Infinity" : (0 !== e && (r += e), 0 !== t && (0 !== e ? r += t < 0 ? " - " : " + " : t < 0 && (r += "-"), 1 !== (t = Math.abs(t)) && (r += t), r += "i"), r || "0") }, toVector: function() { return [this.re, this.im] }, valueOf: function() { return 0 === this.im ? this.re : null }, isNaN: function() { return isNaN(this.re) || isNaN(this.im) }, isZero: function() { return !(0 !== this.re && -0 !== this.re || 0 !== this.im && -0 !== this.im) }, isFinite: function() { return isFinite(this.re) && isFinite(this.im) }, isInfinite: function() { return !(this.isNaN() || this.isFinite()) } }, f.ZERO = new f(0, 0), f.ONE = new f(1, 0), f.I = new f(0, 1), f.PI = new f(Math.PI, 0), f.E = new f(Math.E, 0), f.INFINITY = new f(1 / 0, 1 / 0), f.NAN = new f(NaN, NaN), f.EPSILON = 1e-16, void 0 === (a = function() { return f }.apply(r, [])) || (t.exports = a) }()
    }, function(e, t, a) { "use strict"; var s = a(0);
        t.name = "complex", t.factory = function(r, e, t, n) { var i = a(4),
                o = n("complex", { "": function() { return r.Complex.ZERO }, number: function(e) { return new r.Complex(e, 0) }, "number, number": function(e, t) { return new r.Complex(e, t) }, "BigNumber, BigNumber": function(e, t) { return new r.Complex(e.toNumber(), t.toNumber()) }, Complex: function(e) { return e.clone() }, string: function(e) { return r.Complex(e) }, null: function(e) { return r.Complex(0) }, Object: function(e) { if ("re" in e && "im" in e) return new r.Complex(e.re, e.im); if ("r" in e && "phi" in e || "abs" in e && "arg" in e) return new r.Complex(e); throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)") }, "Array | Matrix": function(e) { return s(e, o) } }); return o.toTex = { 0: "0", 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)+".concat(i.symbols.i, "\\cdot\\left(${args[1]}\\right)\\right)") }, o } }, function(e, t, r) { "use strict"; var l = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
            p = { "{": "\\{", "}": "\\}", "\\": "\\textbackslash{}", "#": "\\#", $: "\\$", "%": "\\%", "&": "\\&", "^": "\\textasciicircum{}", _: "\\_", "~": "\\textasciitilde{}" },
            m = { "–": "\\--", "—": "\\---", " ": "~", "\t": "\\qquad{}", "\r\n": "\\newline{}", "\n": "\\newline{}" },
            h = function(e, t) { return l({}, e, t) };
        e.exports = function(e) { for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.preserveFormatting, n = void 0 !== r && r, i = t.escapeMapFn, o = void 0 === i ? h : i, a = String(e), s = "", u = o(l({}, p), n ? l({}, m) : {}), c = Object.keys(u), f = function() { var r = !1;
                    c.forEach(function(e, t) { r || a.length >= e.length && a.slice(0, e.length) === e && (s += u[c[t]], a = a.slice(e.length, a.length), r = !0) }), r || (s += a.slice(0, 1), a = a.slice(1, a.length)) }; a;) f(); return s } }, function(e, t, r) { "use strict";
        e.exports = [r(175), r(80)] }, function(e, t, r) { "use strict"; var i = r(176);
        i.prototype.type = "Fraction", i.prototype.isFraction = !0, i.prototype.toJSON = function() { return { mathjs: "Fraction", n: this.s * this.n, d: this.d } }, i.fromJSON = function(e) { return new i(e) }, t.name = "Fraction", t.path = "type", t.factory = function(e, t, r, n) { return i } }, function(i, o, e) {
        var a;
        /**
         * @license Fraction.js v4.0.10 09/09/2015
         * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
         *
         * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
         * Dual licensed under the MIT or GPL Version 2 licenses.
         **/
        /**
         * @license Fraction.js v4.0.10 09/09/2015
         * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
         *
         * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
         * Dual licensed under the MIT or GPL Version 2 licenses.
         **/
        ! function(e) { "use strict"; var d = { s: 1, n: 0, d: 1 };

            function t(t) {
                function e() { var e = Error.apply(this, arguments);
                    e.name = this.name = t, this.stack = e.stack, this.message = e.message }

                function r() {} return r.prototype = Error.prototype, e.prototype = new r, e } var y = c.DivisionByZero = t("DivisionByZero"),
                r = c.InvalidParameter = t("InvalidParameter");

            function g(e, t) { return isNaN(e = parseInt(e, 10)) && v(), e * t }

            function v() { throw new r } var n = function(e, t) { var r, n = 0,
                    i = 1,
                    o = 1,
                    a = 0,
                    s = 0,
                    u = 0,
                    c = 1,
                    f = 1,
                    l = 0,
                    p = 1,
                    m = 1,
                    h = 1; if (null == e);
                else if (void 0 !== t) o = (n = e) * (i = t);
                else switch (typeof e) {
                    case "object":
                        "d" in e && "n" in e ? (n = e.n, i = e.d, "s" in e && (n *= e.s)) : 0 in e ? (n = e[0], 1 in e && (i = e[1])) : v(), o = n * i; break;
                    case "number":
                        if (e < 0 && (e = -(o = e)), e % 1 == 0) n = e;
                        else if (0 < e) { for (1 <= e && (e /= f = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10))); p <= 1e7 && h <= 1e7;) { if (e === (r = (l + m) / (p + h))) { i = p + h <= 1e7 ? (n = l + m, p + h) : p < h ? (n = m, h) : (n = l, p); break }
                                r < e ? (l += m, p += h) : (m += l, h += p), i = 1e7 < p ? (n = m, h) : (n = l, p) }
                            n *= f } else(isNaN(e) || isNaN(t)) && (i = n = NaN); break;
                    case "string":
                        if (null === (p = e.match(/\d+|./g)) && v(), "-" === p[l] ? (o = -1, l++) : "+" === p[l] && l++, p.length === l + 1 ? s = g(p[l++], o) : "." === p[l + 1] || "." === p[l] ? ("." !== p[l] && (a = g(p[l++], o)), (++l + 1 === p.length || "(" === p[l + 1] && ")" === p[l + 3] || "'" === p[l + 1] && "'" === p[l + 3]) && (s = g(p[l], o), c = Math.pow(10, p[l].length), l++), ("(" === p[l] && ")" === p[l + 2] || "'" === p[l] && "'" === p[l + 2]) && (u = g(p[l + 1], o), f = Math.pow(10, p[l + 1].length) - 1, l += 3)) : "/" === p[l + 1] || ":" === p[l + 1] ? (s = g(p[l], o), c = g(p[l + 2], 1), l += 3) : "/" === p[l + 3] && " " === p[l + 1] && (a = g(p[l], o), s = g(p[l + 2], o), c = g(p[l + 4], 1), l += 5), p.length <= l) { o = n = u + (i = c * f) * a + f * s; break }
                    default:
                        v() }
                if (0 === i) throw new y;
                d.s = o < 0 ? -1 : 1, d.n = Math.abs(n), d.d = Math.abs(i) };

            function u(e, t) { if (!e) return t; if (!t) return e; for (;;) { if (!(e %= t)) return t; if (!(t %= e)) return e } }

            function c(e, t) { if (!(this instanceof c)) return new c(e, t);
                n(e, t), e = c.REDUCE ? u(d.d, d.n) : 1, this.s = d.s, this.n = d.n / e, this.d = d.d / e }
            c.REDUCE = 1, c.prototype = { s: 1, n: 0, d: 1, abs: function() { return new c(this.n, this.d) }, neg: function() { return new c(-this.s * this.n, this.d) }, add: function(e, t) { return n(e, t), new c(this.s * this.n * d.d + d.s * this.d * d.n, this.d * d.d) }, sub: function(e, t) { return n(e, t), new c(this.s * this.n * d.d - d.s * this.d * d.n, this.d * d.d) }, mul: function(e, t) { return n(e, t), new c(this.s * d.s * this.n * d.n, this.d * d.d) }, div: function(e, t) { return n(e, t), new c(this.s * d.s * this.n * d.d, this.d * d.n) }, clone: function() { return new c(this) }, mod: function(e, t) { return isNaN(this.n) || isNaN(this.d) ? new c(NaN) : void 0 === e ? new c(this.s * this.n % this.d, 1) : (n(e, t), 0 === d.n && 0 === this.d && c(0, 0), new c(this.s * (d.d * this.n) % (d.n * this.d), d.d * this.d)) }, gcd: function(e, t) { return n(e, t), new c(u(d.n, this.n) * u(d.d, this.d), d.d * this.d) }, lcm: function(e, t) { return n(e, t), 0 === d.n && 0 === this.n ? new c : new c(d.n * this.n, u(d.n, this.n) * u(d.d, this.d)) }, ceil: function(e) { return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new c(NaN) : new c(Math.ceil(e * this.s * this.n / this.d), e) }, floor: function(e) { return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new c(NaN) : new c(Math.floor(e * this.s * this.n / this.d), e) }, round: function(e) { return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new c(NaN) : new c(Math.round(e * this.s * this.n / this.d), e) }, inverse: function() { return new c(this.s * this.d, this.n) }, pow: function(e) { return e < 0 ? new c(Math.pow(this.s * this.d, -e), Math.pow(this.n, -e)) : new c(Math.pow(this.s * this.n, e), Math.pow(this.d, e)) }, equals: function(e, t) { return n(e, t), this.s * this.n * d.d == d.s * d.n * this.d }, compare: function(e, t) { n(e, t); var r = this.s * this.n * d.d - d.s * d.n * this.d; return (0 < r) - (r < 0) }, simplify: function(e) { if (isNaN(this.n) || isNaN(this.d)) return this; var t = this.abs().toContinued();

                    function r(e) { return 1 === e.length ? new c(e[0]) : r(e.slice(1)).inverse().add(e[0]) }
                    e = e || .001; for (var n = 0; n < t.length; n++) { var i = r(t.slice(0, n + 1)); if (i.sub(this.abs()).abs().valueOf() < e) return i.mul(this.s) } return this }, divisible: function(e, t) { return n(e, t), !(!(d.n * this.d) || this.n * d.d % (d.n * this.d)) }, valueOf: function() { return this.s * this.n / this.d }, toFraction: function(e) { var t, r = "",
                        n = this.n,
                        i = this.d; return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && 0 < (t = Math.floor(n / i)) && (r += t, r += " ", n %= i), r += n, r += "/", r += i), r }, toLatex: function(e) { var t, r = "",
                        n = this.n,
                        i = this.d; return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && 0 < (t = Math.floor(n / i)) && (r += t, n %= i), r += "\\frac{", r += n, r += "}{", r += i, r += "}"), r }, toContinued: function() { var e, t = this.n,
                        r = this.d,
                        n = []; if (isNaN(this.n) || isNaN(this.d)) return n; for (; n.push(Math.floor(t / r)), e = t % r, t = r, r = e, 1 !== t;); return n }, toString: function(e) { var t, r = this.n,
                        n = this.d; if (isNaN(r) || isNaN(n)) return "NaN";
                    c.REDUCE || (r /= t = u(r, n), n /= t), e = e || 15; var i = function(e, t) { for (; t % 2 == 0; t /= 2); for (; t % 5 == 0; t /= 5); if (1 === t) return 0; for (var r = 10 % t, n = 1; 1 !== r; n++)
                                if (r = 10 * r % t, 2e3 < n) return 0;
                            return n }(0, n),
                        o = function(e, t, r) { for (var n = 1, i = function(e, t, r) { for (var n = 1; 0 < t; e = e * e % r, t >>= 1) 1 & t && (n = n * e % r); return n }(10, r, t), o = 0; o < 300; o++) { if (n === i) return o;
                                n = 10 * n % t, i = 10 * i % t } return 0 }(0, n, i),
                        a = -1 === this.s ? "-" : ""; if (a += r / n | 0, r %= n, (r *= 10) && (a += "."), i) { for (var s = o; s--;) a += r / n | 0, r %= n, r *= 10;
                        a += "("; for (s = i; s--;) a += r / n | 0, r %= n, r *= 10;
                        a += ")" } else
                        for (s = e; r && s--;) a += r / n | 0, r %= n, r *= 10; return a } }, void 0 === (a = function() { return c }.apply(o, [])) || (i.exports = a) }()
    }, function(e, t, r) { "use strict";
        e.exports = [r(81), r(47), r(179), r(180), r(181), r(182), r(28), r(100), r(183), r(1), r(184), r(62)] }, function(e, t, r) { "use strict";
        t.isBoolean = function(e) { return "boolean" == typeof e } }, function(e, t, a) { "use strict"; var s = a(30),
            x = a(8),
            y = s.array,
            E = s.object,
            A = s.string,
            S = s.number,
            O = Array.isArray,
            T = S.isNumber,
            _ = S.isInteger,
            C = A.isString,
            z = y.validateIndex;
        t.name = "SparseMatrix", t.path = "type", t.factory = function(b, e, t, w) { var r = t(a(81)),
                N = t(a(11)),
                n = t(a(62));

            function M(e, t) { if (!(this instanceof M)) throw new SyntaxError("Constructor must be called with the new operator"); if (t && !C(t)) throw new Error("Invalid datatype: " + t); if (b.isMatrix(e)) r = this, i = t, "SparseMatrix" === (n = e).type ? (r._values = n._values ? E.clone(n._values) : void 0, r._index = E.clone(n._index), r._ptr = E.clone(n._ptr), r._size = E.clone(n._size), r._datatype = i || n._datatype) : o(r, n.valueOf(), i || n._datatype);
                else if (e && O(e.index) && O(e.ptr) && O(e.size)) this._values = e.values, this._index = e.index, this._ptr = e.ptr, this._size = e.size, this._datatype = t || e.datatype;
                else if (O(e)) o(this, e, t);
                else { if (e) throw new TypeError("Unsupported type of data (" + s.types.type(e) + ")");
                    this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = t } var r, n, i }

            function o(e, t, r) { e._values = [], e._index = [], e._ptr = [], e._datatype = r; var n = t.length,
                    i = 0,
                    o = N,
                    a = 0; if (C(r) && (o = w.find(N, [r, r]) || N, a = w.convert(0, r)), 0 < n) { var s = 0;
                    do { e._ptr.push(e._index.length); for (var u = 0; u < n; u++) { var c = t[u]; if (O(c)) { if (0 === s && i < c.length && (i = c.length), s < c.length) { var f = c[s];
                                    o(f, a) || (e._values.push(f), e._index.push(u)) } } else 0 === s && i < 1 && (i = 1), o(c, a) || (e._values.push(c), e._index.push(u)) }
                        s++ } while (s < i) }
                e._ptr.push(e._index.length), e._size = [n, i] }

            function g(e, t, r, n) { if (r - t == 0) return r; for (var i = t; i < r; i++)
                    if (n[i] === e) return i;
                return t }

            function v(e, t, r, n, i, o, a) { i.splice(e, 0, n), o.splice(e, 0, t); for (var s = r + 1; s < a.length; s++) a[s]++ }

            function f(e, t, r, n) { var i = n || 0,
                    o = N,
                    a = 0;
                C(e._datatype) && (o = w.find(N, [e._datatype, e._datatype]) || N, a = w.convert(0, e._datatype), i = w.convert(i, e._datatype)); var s, u, c, f = !o(i, a),
                    l = e._size[0],
                    p = e._size[1]; if (p < r) { for (u = p; u < r; u++)
                        if (e._ptr[u] = e._values.length, f)
                            for (s = 0; s < l; s++) e._values.push(i), e._index.push(s);
                    e._ptr[r] = e._values.length } else r < p && (e._ptr.splice(r + 1, p - r), e._values.splice(e._ptr[r], e._values.length), e._index.splice(e._ptr[r], e._index.length)); if (p = r, l < t) { if (f) { var m = 0; for (u = 0; u < p; u++) { e._ptr[u] = e._ptr[u] + m, c = e._ptr[u + 1] + m; var h = 0; for (s = l; s < t; s++, h++) e._values.splice(c + h, 0, i), e._index.splice(c + h, 0, s), m++ }
                        e._ptr[p] = e._values.length } } else if (t < l) { var d = 0; for (u = 0; u < p; u++) { e._ptr[u] = e._ptr[u] - d; var y = e._ptr[u],
                            g = e._ptr[u + 1] - d; for (c = y; c < g; c++) t - 1 < (s = e._index[c]) && (e._values.splice(c, 1), e._index.splice(c, 1), d++) }
                    e._ptr[u] = e._values.length } return e._size[0] = t, e._size[1] = r, e }

            function i(e, t, r, n, i) { var o, a, s = n[0],
                    u = n[1],
                    c = []; for (o = 0; o < s; o++)
                    for (c[o] = [], a = 0; a < u; a++) c[o][a] = 0; for (a = 0; a < u; a++)
                    for (var f = r[a], l = r[a + 1], p = f; p < l; p++) c[o = t[p]][a] = e ? i ? E.clone(e[p]) : e[p] : 1; return c } return (M.prototype = new r).type = "SparseMatrix", M.prototype.isSparseMatrix = !0, M.prototype.getDataType = function() { return n(this._values) }, M.prototype.storage = function() { return "sparse" }, M.prototype.datatype = function() { return this._datatype }, M.prototype.create = function(e, t) { return new M(e, t) }, M.prototype.density = function() { var e = this._size[0],
                    t = this._size[1]; return 0 !== e && 0 !== t ? this._index.length / (e * t) : 0 }, M.prototype.subset = function(e, t, r) { if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix"); switch (arguments.length) {
                    case 1:
                        return function(e, t) { if (!b.isIndex(t)) throw new TypeError("Invalid index"); if (t.isScalar()) return e.get(t.min()); var r, n, i, o, a = t.size(); if (a.length !== e._size.length) throw new x(a.length, e._size.length); var s = t.min(),
                                u = t.max(); for (r = 0, n = e._size.length; r < n; r++) z(s[r], e._size[r]), z(u[r], e._size[r]); var c = e._values,
                                f = e._index,
                                l = e._ptr,
                                p = t.dimension(0),
                                m = t.dimension(1),
                                h = [],
                                d = [];
                            p.forEach(function(e, t) { d[e] = t[0], h[e] = !0 }); var y = c ? [] : void 0,
                                g = [],
                                v = []; return m.forEach(function(e) { for (v.push(g.length), i = l[e], o = l[e + 1]; i < o; i++) r = f[i], !0 === h[r] && (g.push(d[r]), y && y.push(c[i])) }), v.push(g.length), new M({ values: y, index: g, ptr: v, size: a, datatype: e._datatype }) }(this, e);
                    case 2:
                    case 3:
                        return function(e, t, r, n) { if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index"); var i, o = t.size(),
                                a = t.isScalar(); if (b.isMatrix(r) ? (i = r.size(), r = r.toArray()) : i = y.size(r), a) { if (0 !== i.length) throw new TypeError("Scalar expected");
                                e.set(t.min(), r, n) } else { if (1 !== o.length && 2 !== o.length) throw new x(o.length, e._size.length, "<"); if (i.length < o.length) { for (var s = 0, u = 0; 1 === o[s] && 1 === i[s];) s++; for (; 1 === o[s];) u++, s++;
                                    r = y.unsqueeze(r, o.length, u, i) } if (!E.deepEqual(o, i)) throw new x(o, i, ">"); for (var c = t.min()[0], f = t.min()[1], l = i[0], p = i[1], m = 0; m < l; m++)
                                    for (var h = 0; h < p; h++) { var d = r[m][h];
                                        e.set([m + c, h + f], d, n) } } return e }(this, e, t, r);
                    default:
                        throw new SyntaxError("Wrong number of arguments") } }, M.prototype.get = function(e) { if (!O(e)) throw new TypeError("Array expected"); if (e.length !== this._size.length) throw new x(e.length, this._size.length); if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix"); var t = e[0],
                    r = e[1];
                z(t, this._size[0]), z(r, this._size[1]); var n = g(t, this._ptr[r], this._ptr[r + 1], this._index); return n < this._ptr[r + 1] && this._index[n] === t ? this._values[n] : 0 }, M.prototype.set = function(e, t, r) { if (!O(e)) throw new TypeError("Array expected"); if (e.length !== this._size.length) throw new x(e.length, this._size.length); if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix"); var n = e[0],
                    i = e[1],
                    o = this._size[0],
                    a = this._size[1],
                    s = N,
                    u = 0;
                C(this._datatype) && (s = w.find(N, [this._datatype, this._datatype]) || N, u = w.convert(0, this._datatype)), (o - 1 < n || a - 1 < i) && (f(this, Math.max(n + 1, o), Math.max(i + 1, a), r), o = this._size[0], a = this._size[1]), z(n, o), z(i, a); var c = g(n, this._ptr[i], this._ptr[i + 1], this._index); return c < this._ptr[i + 1] && this._index[c] === n ? s(t, u) ? function(e, t, r, n, i) { r.splice(e, 1), n.splice(e, 1); for (var o = t + 1; o < i.length; o++) i[o]-- }(c, i, this._values, this._index, this._ptr) : this._values[c] = t : v(c, n, i, t, this._values, this._index, this._ptr), this }, M.prototype.resize = function(t, e, r) { if (!O(t)) throw new TypeError("Array expected"); if (2 !== t.length) throw new Error("Only two dimensions matrix are supported"); return t.forEach(function(e) { if (!S.isNumber(e) || !S.isInteger(e) || e < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + A.format(t) + ")") }), f(r ? this.clone() : this, t[0], t[1], e) }, M.prototype.reshape = function(t, e) { if (!O(t)) throw new TypeError("Array expected"); if (2 !== t.length) throw new Error("Sparse matrices can only be reshaped in two dimensions"); if (t.forEach(function(e) { if (!S.isNumber(e) || !S.isInteger(e) || e < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + A.format(t) + ")") }), this._size[0] * this._size[1] != t[0] * t[1]) throw new Error("Reshaping sparse matrix will result in the wrong number of elements"); var r = e ? this.clone() : this; if (this._size[0] === t[0] && this._size[1] === t[1]) return r; for (var n = [], i = 0; i < r._ptr.length; i++)
                    for (var o = 0; o < r._ptr[i + 1] - r._ptr[i]; o++) n.push(i); for (var a = r._values.slice(), s = r._index.slice(), u = 0; u < r._index.length; u++) { var c = s[u],
                        f = n[u],
                        l = c * r._size[1] + f;
                    n[u] = l % t[1], s[u] = Math.floor(l / t[1]) }
                r._values.length = 0, r._index.length = 0, r._ptr.length = t[1] + 1, r._size = t.slice(); for (var p = 0; p < r._ptr.length; p++) r._ptr[p] = 0; for (var m = 0; m < a.length; m++) { var h = s[m],
                        d = n[m],
                        y = a[m];
                    v(g(h, r._ptr[d], r._ptr[d + 1], r._index), h, d, y, r._values, r._index, r._ptr) } return r }, M.prototype.clone = function() { return new M({ values: this._values ? E.clone(this._values) : void 0, index: E.clone(this._index), ptr: E.clone(this._ptr), size: E.clone(this._size), datatype: this._datatype }) }, M.prototype.size = function() { return this._size.slice(0) }, M.prototype.map = function(n, e) { if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix"); var i = this; return function(e, t, r, n, i, o, a) { var s = [],
                        u = [],
                        c = [],
                        f = N,
                        l = 0;
                    C(e._datatype) && (f = w.find(N, [e._datatype, e._datatype]) || N, l = w.convert(0, e._datatype)); for (var p = function(e, t, r) { e = o(e, t, r), f(e, l) || (s.push(e), u.push(t)) }, m = n; m <= i; m++) { c.push(s.length); for (var h = e._ptr[m], d = e._ptr[m + 1], y = t, g = h; g < d; g++) { var v = e._index[g]; if (t <= v && v <= r) { if (!a)
                                    for (var x = y; x < v; x++) p(0, x - t, m - n);
                                p(e._values[g], v - t, m - n) }
                            y = v + 1 } if (!a)
                            for (var b = y; b <= r; b++) p(0, b - t, m - n) } return c.push(s.length), new M({ values: s, index: u, ptr: c, size: [r - t + 1, i - n + 1] }) }(this, 0, this._size[0] - 1, 0, this._size[1] - 1, function(e, t, r) { return n(e, [t, r], i) }, e) }, M.prototype.forEach = function(e, t) { if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix"); for (var r = this._size[0], n = this._size[1], i = 0; i < n; i++) { for (var o = this._ptr[i], a = this._ptr[i + 1], s = 0, u = o; u < a; u++) { var c = this._index[u]; if (!t)
                            for (var f = s; f < c; f++) e(0, [f, i], this);
                        e(this._values[u], [c, i], this), s = c + 1 } if (!t)
                        for (var l = s; l < r; l++) e(0, [l, i], this) } }, M.prototype.toArray = function() { return i(this._values, this._index, this._ptr, this._size, !0) }, M.prototype.valueOf = function() { return i(this._values, this._index, this._ptr, this._size, !1) }, M.prototype.format = function(e) { for (var t = this._size[0], r = this._size[1], n = this.density(), i = "Sparse Matrix [" + A.format(t, e) + " x " + A.format(r, e) + "] density: " + A.format(n, e) + "\n", o = 0; o < r; o++)
                    for (var a = this._ptr[o], s = this._ptr[o + 1], u = a; u < s; u++) { var c = this._index[u];
                        i += "\n    (" + A.format(c, e) + ", " + A.format(o, e) + ") ==> " + (this._values ? A.format(this._values[u], e) : "X") }
                return i }, M.prototype.toString = function() { return A.format(this.toArray()) }, M.prototype.toJSON = function() { return { mathjs: "SparseMatrix", values: this._values, index: this._index, ptr: this._ptr, size: this._size, datatype: this._datatype } }, M.prototype.diagonal = function(e) { if (e) { if (b.isBigNumber(e) && (e = e.toNumber()), !T(e) || !_(e)) throw new TypeError("The parameter k must be an integer number") } else e = 0; var t = 0 < e ? e : 0,
                    r = e < 0 ? -e : 0,
                    n = this._size[0],
                    i = this._size[1],
                    o = Math.min(n - r, i - t),
                    a = [],
                    s = [],
                    u = [];
                u[0] = 0; for (var c = t; c < i && a.length < o; c++)
                    for (var f = this._ptr[c], l = this._ptr[c + 1], p = f; p < l; p++) { var m = this._index[p]; if (m === c - t + r) { a.push(this._values[p]), s[a.length - 1] = m - r; break } }
                return u.push(a.length), new M({ values: a, index: s, ptr: u, size: [o, 1] }) }, M.fromJSON = function(e) { return new M(e) }, M.diagonal = function(e, t, r, n, i) { if (!O(e)) throw new TypeError("Array expected, size parameter"); if (2 !== e.length) throw new Error("Only two dimensions matrix are supported"); if (e = e.map(function(e) { if (b.isBigNumber(e) && (e = e.toNumber()), !T(e) || !_(e) || e < 1) throw new Error("Size values must be positive integers"); return e }), r) { if (b.isBigNumber(r) && (r = r.toNumber()), !T(r) || !_(r)) throw new TypeError("The parameter k must be an integer number") } else r = 0; var o = N,
                    a = 0;
                C(i) && (o = w.find(N, [i, i]) || N, a = w.convert(0, i)); var s, u = 0 < r ? r : 0,
                    c = r < 0 ? -r : 0,
                    f = e[0],
                    l = e[1],
                    p = Math.min(f - c, l - u); if (O(t)) { if (t.length !== p) throw new Error("Invalid value array length");
                    s = function(e) { return t[e] } } else if (b.isMatrix(t)) { var m = t.size(); if (1 !== m.length || m[0] !== p) throw new Error("Invalid matrix length");
                    s = function(e) { return t.get([e]) } } else s = function() { return t }; for (var h = [], d = [], y = [], g = 0; g < l; g++) { y.push(h.length); var v = g - u; if (0 <= v && v < p) { var x = s(v);
                        o(x, a) || (d.push(v + c), h.push(x)) } } return y.push(h.length), new M({ values: h, index: d, ptr: y, size: [f, l] }) }, M.prototype.swapRows = function(e, t) { if (!(T(e) && _(e) && T(t) && _(t))) throw new Error("Row index must be positive integers"); if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported"); return z(e, this._size[0]), z(t, this._size[0]), M._swapRows(e, t, this._size[1], this._values, this._index, this._ptr), this }, M._forEachRow = function(e, t, r, n, i) { for (var o = n[e], a = n[e + 1], s = o; s < a; s++) i(r[s], t[s]) }, M._swapRows = function(e, t, r, n, i, o) { for (var a = 0; a < r; a++) { var s = o[a],
                        u = o[a + 1],
                        c = g(e, s, u, i),
                        f = g(t, s, u, i); if (c < u && f < u && i[c] === e && i[f] === t) { if (n) { var l = n[c];
                            n[c] = n[f], n[f] = l } } else if (c < u && i[c] === e && (u <= f || i[f] !== t)) { var p = n ? n[c] : void 0;
                        i.splice(f, 0, t), n && n.splice(f, 0, p), i.splice(f <= c ? c + 1 : c, 1), n && n.splice(f <= c ? c + 1 : c, 1) } else if (f < u && i[f] === t && (u <= c || i[c] !== e)) { var m = n ? n[f] : void 0;
                        i.splice(c, 0, e), n && n.splice(c, 0, m), i.splice(c <= f ? f + 1 : f, 1), n && n.splice(c <= f ? f + 1 : f, 1) } } }, b.Matrix._storage.sparse = M }, t.lazy = !1 }, function(e, t, o) { "use strict";
        t.name = "Spa", t.path = "type", t.factory = function(e, t, r) { var n = r(o(14)),
                c = r(o(11));

            function i() { if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
                this._values = [], this._heap = new e.FibonacciHeap } return i.prototype.type = "Spa", i.prototype.isSpa = !0, i.prototype.set = function(e, t) { if (this._values[e]) this._values[e].value = t;
                else { var r = this._heap.insert(e, t);
                    this._values[e] = r } }, i.prototype.get = function(e) { var t = this._values[e]; return t ? t.value : 0 }, i.prototype.accumulate = function(e, t) { var r = this._values[e];
                r ? r.value = n(r.value, t) : (r = this._heap.insert(e, t), this._values[e] = r) }, i.prototype.forEach = function(e, t, r) { var n = this._heap,
                    i = this._values,
                    o = [],
                    a = n.extractMinimum(); for (a && o.push(a); a && a.key <= t;) a.key >= e && (c(a.value, 0) || r(a.key, a.value, this)), (a = n.extractMinimum()) && o.push(a); for (var s = 0; s < o.length; s++) { var u = o[s];
                    i[(a = n.insert(u.key, u.value)).key] = a } }, i.prototype.swap = function(e, t) { var r = this._values[e],
                    n = this._values[t]; if (!r && n) r = this._heap.insert(e, n.value), this._heap.remove(n), this._values[e] = r, this._values[t] = void 0;
                else if (r && !n) n = this._heap.insert(t, r.value), this._heap.remove(r), this._values[t] = n, this._values[e] = void 0;
                else if (r && n) { var i = r.value;
                    r.value = n.value, n.value = i } }, i } }, function(e, t, a) { "use strict";
        t.name = "FibonacciHeap", t.path = "type", t.factory = function(e, t, r, n) { var l = r(a(39)),
                p = r(a(33)),
                m = 1 / Math.log((1 + Math.sqrt(5)) / 2);

            function i() { if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
                this._minimum = null, this._size = 0 }

            function o(e, t, r) { t.left.right = t.right, t.right.left = t.left, r.degree--, r.child === t && (r.child = t.right), 0 === r.degree && (r.child = null), t.left = e, t.right = e.right, ((e.right = t).right.left = t).parent = null, t.mark = !1 }
            i.prototype.type = "FibonacciHeap", i.prototype.isFibonacciHeap = !0, i.prototype.insert = function(e, t) { var r = { key: e, value: t, degree: 0 }; if (this._minimum) { var n = this._minimum;
                    r.left = n, r.right = n.right, (n.right = r).right.left = r, l(e, n.key) && (this._minimum = r) } else(r.left = r).right = r, this._minimum = r; return this._size++, r }, i.prototype.size = function() { return this._size }, i.prototype.clear = function() { this._minimum = null, this._size = 0 }, i.prototype.isEmpty = function() { return 0 === this._size }, i.prototype.extractMinimum = function() { var e = this._minimum; if (null === e) return e; for (var t = this._minimum, r = e.degree, n = e.child; 0 < r;) { var i = n.right;
                    n.left.right = n.right, n.right.left = n.left, n.left = t, n.right = t.right, ((t.right = n).right.left = n).parent = null, n = i, r-- } return e.left.right = e.right, e.right.left = e.left, t = e === e.right ? null : function(e, t) { var r, n = Math.floor(Math.log(t) * m) + 1,
                        i = new Array(n),
                        o = 0,
                        a = e; if (a)
                        for (o++, a = a.right; a !== e;) o++, a = a.right; for (; 0 < o;) { for (var s = a.degree, u = a.right; r = i[s];) { if (p(a.key, r.key)) { var c = r;
                                r = a, a = c }
                            h(r, a), i[s] = null, s++ }
                        i[s] = a, a = u, o-- }
                    e = null; for (var f = 0; f < n; f++)(r = i[f]) && (e ? (r.left.right = r.right, r.right.left = r.left, r.left = e, r.right = e.right, (e.right = r).right.left = r, l(r.key, e.key) && (e = r)) : e = r); return e }(t = e.right, this._size), this._size--, this._minimum = t, e }, i.prototype.remove = function(e) { this._minimum = function(e, t, r) { t.key = r; var n = t.parent; return n && l(t.key, n.key) && (o(e, t, n), function e(t, r) { var n = r.parent;
                        n && (r.mark ? (o(t, r, n), e(n)) : r.mark = !0) }(e, n)), l(t.key, e.key) && (e = t), e }(this._minimum, e, -1), this.extractMinimum() }; var h = function(e, t) { e.left.right = e.right, e.right.left = e.left, (e.parent = t).child ? (e.left = t.child, e.right = t.child.right, (t.child.right = e).right.left = e) : ((t.child = e).right = e).left = e, t.degree++, e.mark = !1 }; return i } }, function(e, t, a) { "use strict"; var s = a(30),
            r = s.string,
            u = s.object,
            c = Array.isArray,
            f = r.isString;
        t.name = "ImmutableDenseMatrix", t.path = "type", t.factory = function(n, e, t) { var i = t(a(47)),
                r = t(a(39));

            function o(e, t) { if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator"); if (t && !f(t)) throw new Error("Invalid datatype: " + t); if (n.isMatrix(e) || c(e)) { var r = new i(e, t);
                    this._data = r._data, this._size = r._size, this._datatype = r._datatype, this._min = null, this._max = null } else if (e && c(e.data) && c(e.size)) this._data = e.data, this._size = e.size, this._datatype = e.datatype, this._min = void 0 !== e.min ? e.min : null, this._max = void 0 !== e.max ? e.max : null;
                else { if (e) throw new TypeError("Unsupported type of data (" + s.types.type(e) + ")");
                    this._data = [], this._size = [0], this._datatype = t, this._min = null, this._max = null } } return (o.prototype = new i).type = "ImmutableDenseMatrix", o.prototype.isImmutableDenseMatrix = !0, o.prototype.subset = function(e) { switch (arguments.length) {
                    case 1:
                        var t = i.prototype.subset.call(this, e); return n.isMatrix(t) ? new o({ data: t._data, size: t._size, datatype: t._datatype }) : t;
                    case 2:
                    case 3:
                        throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
                    default:
                        throw new SyntaxError("Wrong number of arguments") } }, o.prototype.set = function() { throw new Error("Cannot invoke set on an Immutable Matrix instance") }, o.prototype.resize = function() { throw new Error("Cannot invoke resize on an Immutable Matrix instance") }, o.prototype.reshape = function() { throw new Error("Cannot invoke reshape on an Immutable Matrix instance") }, o.prototype.clone = function() { return new o({ data: u.clone(this._data), size: u.clone(this._size), datatype: this._datatype }) }, o.prototype.toJSON = function() { return { mathjs: "ImmutableDenseMatrix", data: this._data, size: this._size, datatype: this._datatype } }, o.fromJSON = function(e) { return new o(e) }, o.prototype.swapRows = function() { throw new Error("Cannot invoke swapRows on an Immutable Matrix instance") }, o.prototype.min = function() { if (null === this._min) { var t = null;
                    this.forEach(function(e) {
                        (null === t || r(e, t)) && (t = e) }), this._min = null !== t ? t : void 0 } return this._min }, o.prototype.max = function() { if (null === this._max) { var t = null;
                    this.forEach(function(e) {
                        (null === t || r(t, e)) && (t = e) }), this._max = null !== t ? t : void 0 } return this._max }, o } }, function(e, t, r) { "use strict";
        t.name = "index", t.factory = function(n, e, t, r) { return r("index", { "...number | string | BigNumber | Range | Array | Matrix": function(e) { var t = e.map(function(e) { return n.isBigNumber(e) ? e.toNumber() : Array.isArray(e) || n.isMatrix(e) ? e.map(function(e) { return n.isBigNumber(e) ? e.toNumber() : e }) : e }),
                        r = new n.Index; return n.Index.apply(r, t), r } }) } }, function(e, t, r) { "use strict";
        t.name = "sparse", t.factory = function(e, t, r, n) { var i = e.SparseMatrix,
                o = n("sparse", { "": function() { return new i([]) }, string: function(e) { return new i([], e) }, "Array | Matrix": function(e) { return new i(e) }, "Array | Matrix, string": function(e, t) { return new i(e, t) } }); return o.toTex = { 0: "\\begin{bsparse}\\end{bsparse}", 1: "\\left(${args[0]}\\right)" }, o } }, function(e, t, r) { "use strict";
        e.exports = [r(101)] }, function(e, t, r) { "use strict"; var o = r(0),
            a = r(3);
        t.name = "string", t.factory = function(e, t, r, n) { var i = n("string", { "": function() { return "" }, number: a.format, null: function(e) { return "null" }, boolean: function(e) { return e + "" }, string: function(e) { return e }, "Array | Matrix": function(e) { return o(e, i) }, any: function(e) { return String(e) } }); return i.toTex = { 0: '\\mathtt{""}', 1: "\\mathrm{string}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict";
        e.exports = [r(188), r(189), r(190), r(191), r(192)] }, function(e, t, Y) { "use strict";

        function X(e) { return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var Q = Y(9).endsWith,
            K = Y(5).clone,
            ee = Y(102);
        t.name = "Unit", t.path = "type", t.factory = function(y, g, e, t, r) { var v, x, b, c = e(Y(17)),
                f = e(Y(15)),
                l = e(Y(21)),
                p = e(Y(12)),
                m = e(Y(40)),
                h = e(Y(23)),
                d = e(Y(103)),
                w = e(Y(104)),
                N = e(Y(49)),
                i = e(Y(56)),
                a = e(Y(105)),
                M = e(Y(24)),
                n = e(Y(63)),
                o = e(Y(79));

            function E(e, t) { if (!(this instanceof E)) throw new Error("Constructor must be called with the new operator"); if (null != e && !i(e) && !y.isComplex(e)) throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined"); if (void 0 !== t && ("string" != typeof t || "" === t)) throw new TypeError("Second parameter in Unit constructor must be a string"); if (void 0 !== t) { var r = E.parse(t);
                    this.units = r.units, this.dimensions = r.dimensions } else { this.units = [{ unit: q, prefix: B.NONE, power: 0 }], this.dimensions = []; for (var n = 0; n < P.length; n++) this.dimensions[n] = 0 }
                this.value = null != e ? this._normalize(e) : null, this.fixPrefix = !1, this.isUnitListSimplified = !0 }

            function A() { for (;
                    " " === b || "\t" === b;) S() }

            function s(e) { return "0" <= e && e <= "9" }

            function S() { x++, b = v.charAt(x) }

            function u(e) { x = e, b = v.charAt(x) }

            function O() { var e, t, r = ""; if (e = x, "+" === b ? S() : "-" === b && (r += b, S()), !("0" <= (t = b) && t <= "9" || "." === t)) return u(e), null; if ("." === b) { if (r += b, S(), !s(b)) return u(e), null } else { for (; s(b);) r += b, S(); "." === b && (r += b, S()) } for (; s(b);) r += b, S(); if ("E" === b || "e" === b) { var n = "",
                        i = x; if (n += b, S(), "+" !== b && "-" !== b || (n += b, S()), !s(b)) return u(i), r; for (r += n; s(b);) r += b, S() } return r }

            function T() { for (var e = "", t = v.charCodeAt(x); 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122;) e += b, S(), t = v.charCodeAt(x); return (65 <= (t = e.charCodeAt(0)) && t <= 90 || 97 <= t && t <= 122) && e || null }

            function _(e) { return b === e ? (S(), e) : null }

            function C(e) { if (D.hasOwnProperty(e)) { var t = D[e]; return { unit: t, prefix: t.prefixes[""] } } for (var r in D)
                    if (D.hasOwnProperty(r) && Q(e, r)) { var n = D[r],
                            i = e.length - r.length,
                            o = e.substring(0, i),
                            a = n.prefixes.hasOwnProperty(o) ? n.prefixes[o] : void 0; if (void 0 !== a) return { unit: n, prefix: a } }
                return null }

            function z(e) { return e.equalBase(R.NONE) && null !== e.value && !g.predictable ? e.value : e }
            E.prototype.type = "Unit", E.prototype.isUnit = !0, E.parse = function(e, t) { if (t = t || {}, x = -1, b = "", "string" != typeof(v = e)) throw new TypeError("Invalid argument in Unit.parse, string expected"); var r = new E,
                    n = 1,
                    i = !(r.units = []);
                S(), A(); var o = O(),
                    a = null;
                o && (a = "BigNumber" === g.number ? new y.BigNumber(o) : "Fraction" === g.number ? new y.Fraction(o) : parseFloat(o), A(), _("*") ? (n = 1, i = !0) : _("/") && (n = -1, i = !0)); for (var s = [], u = 1;;) { for (A();
                        "(" === b;) s.push(n), u *= n, n = 1, S(), A(); var c = void 0; if (!b) break; var f = b; if (null === (c = T())) throw new SyntaxError('Unexpected "' + f + '" in "' + v + '" at index ' + x.toString()); var l = C(c); if (null === l) throw new SyntaxError('Unit "' + c + '" not found.'); var p = n * u; if (A(), _("^")) { A(); var m = O(); if (null === m) throw new SyntaxError('In "' + e + '", "^" must be followed by a floating-point number');
                        p *= m }
                    r.units.push({ unit: l.unit, prefix: l.prefix, power: p }); for (var h = 0; h < P.length; h++) r.dimensions[h] += (l.unit.dimensions[h] || 0) * p; for (A();
                        ")" === b;) { if (0 === s.length) throw new SyntaxError('Unmatched ")" in "' + v + '" at index ' + x.toString());
                        u /= s.pop(), S(), A() } if (i = !1, _("*") ? (n = 1, i = !0) : _("/") ? (n = -1, i = !0) : n = 1, l.unit.base) { var d = l.unit.base.key;
                        F.auto[d] = { unit: l.unit, prefix: l.prefix } } } if (A(), b) throw new SyntaxError('Could not parse: "' + e + '"'); if (i) throw new SyntaxError('Trailing characters: "' + e + '"'); if (0 !== s.length) throw new SyntaxError('Unmatched "(" in "' + v + '"'); if (0 === r.units.length && !t.allowNoUnits) throw new SyntaxError('"' + e + '" contains no units'); return r.value = void 0 !== a ? r._normalize(a) : null, r }, E.prototype.clone = function() { var e = new E;
                e.fixPrefix = this.fixPrefix, e.isUnitListSimplified = this.isUnitListSimplified, e.value = K(this.value), e.dimensions = this.dimensions.slice(0), e.units = []; for (var t = 0; t < this.units.length; t++)
                    for (var r in e.units[t] = {}, this.units[t]) this.units[t].hasOwnProperty(r) && (e.units[t][r] = this.units[t][r]); return e }, E.prototype._isDerived = function() { return 0 !== this.units.length && (1 < this.units.length || 1e-15 < Math.abs(this.units[0].power - 1)) }, E.prototype._normalize = function(e) { var t, r, n, i, o; if (null == e || 0 === this.units.length) return e; if (this._isDerived()) { var a = e;
                    o = E._getNumberConverter(M(e)); for (var s = 0; s < this.units.length; s++) t = o(this.units[s].unit.value), i = o(this.units[s].prefix.value), n = o(this.units[s].power), a = l(a, m(l(t, i), n)); return a } return t = (o = E._getNumberConverter(M(e)))(this.units[0].unit.value), r = o(this.units[0].unit.offset), i = o(this.units[0].prefix.value), l(c(e, r), l(t, i)) }, E.prototype._denormalize = function(e, t) { var r, n, i, o, a; if (null == e || 0 === this.units.length) return e; if (this._isDerived()) { var s = e;
                    a = E._getNumberConverter(M(e)); for (var u = 0; u < this.units.length; u++) r = a(this.units[u].unit.value), o = a(this.units[u].prefix.value), i = a(this.units[u].power), s = p(s, m(l(r, o), i)); return s } return r = (a = E._getNumberConverter(M(e)))(this.units[0].unit.value), o = a(this.units[0].prefix.value), n = a(this.units[0].unit.offset), f(p(p(e, r), null == t ? o : t), n) }, E.isValuelessUnit = function(e) { return null !== C(e) }, E.prototype.hasBase = function(e) { if ("string" == typeof e && (e = R[e]), !e) return !1; for (var t = 0; t < P.length; t++)
                    if (1e-12 < Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0))) return !1;
                return !0 }, E.prototype.equalBase = function(e) { for (var t = 0; t < P.length; t++)
                    if (1e-12 < Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0))) return !1;
                return !0 }, E.prototype.equals = function(e) { return this.equalBase(e) && N(this.value, e.value) }, E.prototype.multiply = function(e) { for (var t = this.clone(), r = 0; r < P.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) + (e.dimensions[r] || 0); for (var n = 0; n < e.units.length; n++) { var i = {}; for (var o in e.units[n]) i[o] = e.units[n][o];
                    t.units.push(i) } if (null !== this.value || null !== e.value) { var a = null === this.value ? this._normalize(1) : this.value,
                        s = null === e.value ? e._normalize(1) : e.value;
                    t.value = l(a, s) } else t.value = null; return t.isUnitListSimplified = !1, z(t) }, E.prototype.divide = function(e) { for (var t = this.clone(), r = 0; r < P.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) - (e.dimensions[r] || 0); for (var n = 0; n < e.units.length; n++) { var i = {}; for (var o in e.units[n]) i[o] = e.units[n][o];
                    i.power = -i.power, t.units.push(i) } if (null !== this.value || null !== e.value) { var a = null === this.value ? this._normalize(1) : this.value,
                        s = null === e.value ? e._normalize(1) : e.value;
                    t.value = p(a, s) } else t.value = null; return t.isUnitListSimplified = !1, z(t) }, E.prototype.pow = function(e) { for (var t = this.clone(), r = 0; r < P.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) * e; for (var n = 0; n < t.units.length; n++) t.units[n].power *= e; return null !== t.value ? t.value = m(t.value, e) : t.value = null, t.isUnitListSimplified = !1, z(t) }, E.prototype.abs = function() { var e = this.clone(); for (var t in e.value = null !== e.value ? h(e.value) : null, e.units) "VA" !== e.units[t].unit.name && "VAR" !== e.units[t].unit.name || (e.units[t].unit = D.W); return e }, E.prototype.to = function(e) { var t, r = null === this.value ? this._normalize(1) : this.value; if ("string" == typeof e) { if (t = E.parse(e), !this.equalBase(t)) throw new Error("Units do not match ('".concat(t.toString(), "' != '").concat(this.toString(), "')")); if (null !== t.value) throw new Error("Cannot convert to a unit with a value"); return t.value = K(r), t.fixPrefix = !0, t.isUnitListSimplified = !0, t } if (y.isUnit(e)) { if (!this.equalBase(e)) throw new Error("Units do not match ('".concat(e.toString(), "' != '").concat(this.toString(), "')")); if (null !== e.value) throw new Error("Cannot convert to a unit with a value"); return (t = e.clone()).value = K(r), t.fixPrefix = !0, t.isUnitListSimplified = !0, t } throw new Error("String or Unit expected as parameter") }, E.prototype.toNumber = function(e) { return n(this.toNumeric(e)) }, E.prototype.toNumeric = function(e) { var t = this; return e && (t = this.to(e)), t.simplifyUnitListLazy(), t._isDerived() ? t._denormalize(t.value) : t._denormalize(t.value, t.units[0].prefix.value) }, E.prototype.toString = function() { return this.format() }, E.prototype.toJSON = function() { return { mathjs: "Unit", value: this._denormalize(this.value), unit: this.formatUnits(), fixPrefix: this.fixPrefix } }, E.fromJSON = function(e) { var t = new E(e.value, e.unit); return t.fixPrefix = e.fixPrefix || !1, t }, E.prototype.valueOf = E.prototype.toString, E.prototype.simplifyUnitListLazy = function() { if (!this.isUnitListSimplified && null !== this.value) { var e, t, r = []; for (var n in H)
                        if (this.hasBase(R[n])) { e = n; break }
                    if ("NONE" === e) this.units = [];
                    else if (e && H.hasOwnProperty(e) && (t = H[e]), t) this.units = [{ unit: t.unit, prefix: t.prefix, power: 1 }];
                    else { for (var i = !1, o = 0; o < P.length; o++) { var a = P[o];
                            1e-12 < Math.abs(this.dimensions[o] || 0) && (H.hasOwnProperty(a) ? r.push({ unit: H[a].unit, prefix: H[a].prefix, power: this.dimensions[o] || 0 }) : i = !0) }
                        r.length < this.units.length && !i && (this.units = r) }
                    this.isUnitListSimplified = !0 } }, E.prototype.toSI = function() { for (var e = this.clone(), t = [], r = 0; r < P.length; r++) { var n = P[r]; if (1e-12 < Math.abs(e.dimensions[r] || 0)) { if (!F.si.hasOwnProperty(n)) throw new Error("Cannot express custom unit " + n + " in SI units");
                        t.push({ unit: F.si[n].unit, prefix: F.si[n].prefix, power: e.dimensions[r] || 0 }) } } return e.units = t, e.isUnitListSimplified = !0, e }, E.prototype.formatUnits = function() { this.simplifyUnitListLazy(); for (var e = "", t = "", r = 0, n = 0, i = 0; i < this.units.length; i++) 0 < this.units[i].power ? (r++, e += " " + this.units[i].prefix.name + this.units[i].unit.name, 1e-15 < Math.abs(this.units[i].power - 1) && (e += "^" + this.units[i].power)) : this.units[i].power < 0 && n++; if (0 < n)
                    for (var o = 0; o < this.units.length; o++) this.units[o].power < 0 && (0 < r ? (t += " " + this.units[o].prefix.name + this.units[o].unit.name, 1e-15 < Math.abs(this.units[o].power + 1) && (t += "^" + -this.units[o].power)) : (t += " " + this.units[o].prefix.name + this.units[o].unit.name, t += "^" + this.units[o].power));
                e = e.substr(1), t = t.substr(1), 1 < r && 0 < n && (e = "(" + e + ")"), 1 < n && 0 < r && (t = "(" + t + ")"); var a = e; return 0 < r && 0 < n && (a += " / "), a += t }, E.prototype.format = function(e) { this.simplifyUnitListLazy(); var t = !1; for (var r in void 0 !== this.value && null !== this.value && y.isComplex(this.value) && (t = Math.abs(this.value.re) < 1e-14), this.units) this.units[r].unit && ("VA" === this.units[r].unit.name && t ? this.units[r].unit = D.VAR : "VAR" !== this.units[r].unit.name || t || (this.units[r].unit = D.VA));
                1 !== this.units.length || this.fixPrefix || Math.abs(this.units[0].power - Math.round(this.units[0].power)) < 1e-14 && (this.units[0].prefix = this._bestPrefix()); var n = this._denormalize(this.value),
                    i = null !== this.value ? a(n, e || {}) : "",
                    o = this.formatUnits(); return this.value && y.isComplex(this.value) && (i = "(" + i + ")"), 0 < o.length && 0 < i.length && (i += " "), i += o }, E.prototype._bestPrefix = function() { if (1 !== this.units.length) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!"); if (1e-14 <= Math.abs(this.units[0].power - Math.round(this.units[0].power))) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!"); var e = null !== this.value ? h(this.value) : 0,
                    t = h(this.units[0].unit.value),
                    r = this.units[0].prefix; if (0 === e) return r; var n = this.units[0].power,
                    i = Math.log(e / Math.pow(r.value * t, n)) / Math.LN10 - 1.2; if (-2.200001 < i && i < 1.800001) return r;
                i = Math.abs(i); var o = this.units[0].unit.prefixes; for (var a in o)
                    if (o.hasOwnProperty(a)) { var s = o[a]; if (s.scientific) { var u = Math.abs(Math.log(e / Math.pow(s.value * t, n)) / Math.LN10 - 1.2);
                            (u < i || u === i && s.name.length < r.name.length) && (r = s, i = u) } }
                return r }; var B = { NONE: { "": { name: "", value: 1, scientific: !0 } }, SHORT: { "": { name: "", value: 1, scientific: !0 }, da: { name: "da", value: 10, scientific: (E.prototype.splitUnit = function(e) { for (var t = this.clone(), r = [], n = 0; n < e.length && (t = t.to(e[n]), n !== e.length - 1); n++) { var i = t.toNumeric(),
                                    o = w(i),
                                    a = new E(N(o, i) ? o : d(t.toNumeric()), e[n].toString());
                                r.push(a), t = f(t, a) } for (var s = 0, u = 0; u < r.length; u++) s = c(s, r[u].value); return N(s, this.value) && (t.value = 0), r.push(t), r }, !1) }, h: { name: "h", value: 100, scientific: !1 }, k: { name: "k", value: 1e3, scientific: !0 }, M: { name: "M", value: 1e6, scientific: !0 }, G: { name: "G", value: 1e9, scientific: !0 }, T: { name: "T", value: 1e12, scientific: !0 }, P: { name: "P", value: 1e15, scientific: !0 }, E: { name: "E", value: 1e18, scientific: !0 }, Z: { name: "Z", value: 1e21, scientific: !0 }, Y: { name: "Y", value: 1e24, scientific: !0 }, d: { name: "d", value: .1, scientific: !1 }, c: { name: "c", value: .01, scientific: !1 }, m: { name: "m", value: .001, scientific: !0 }, u: { name: "u", value: 1e-6, scientific: !0 }, n: { name: "n", value: 1e-9, scientific: !0 }, p: { name: "p", value: 1e-12, scientific: !0 }, f: { name: "f", value: 1e-15, scientific: !0 }, a: { name: "a", value: 1e-18, scientific: !0 }, z: { name: "z", value: 1e-21, scientific: !0 }, y: { name: "y", value: 1e-24, scientific: !0 } }, LONG: { "": { name: "", value: 1, scientific: !0 }, deca: { name: "deca", value: 10, scientific: !1 }, hecto: { name: "hecto", value: 100, scientific: !1 }, kilo: { name: "kilo", value: 1e3, scientific: !0 }, mega: { name: "mega", value: 1e6, scientific: !0 }, giga: { name: "giga", value: 1e9, scientific: !0 }, tera: { name: "tera", value: 1e12, scientific: !0 }, peta: { name: "peta", value: 1e15, scientific: !0 }, exa: { name: "exa", value: 1e18, scientific: !0 }, zetta: { name: "zetta", value: 1e21, scientific: !0 }, yotta: { name: "yotta", value: 1e24, scientific: !0 }, deci: { name: "deci", value: .1, scientific: !1 }, centi: { name: "centi", value: .01, scientific: !1 }, milli: { name: "milli", value: .001, scientific: !0 }, micro: { name: "micro", value: 1e-6, scientific: !0 }, nano: { name: "nano", value: 1e-9, scientific: !0 }, pico: { name: "pico", value: 1e-12, scientific: !0 }, femto: { name: "femto", value: 1e-15, scientific: !0 }, atto: { name: "atto", value: 1e-18, scientific: !0 }, zepto: { name: "zepto", value: 1e-21, scientific: !0 }, yocto: { name: "yocto", value: 1e-24, scientific: !0 } }, SQUARED: { "": { name: "", value: 1, scientific: !0 }, da: { name: "da", value: 100, scientific: !1 }, h: { name: "h", value: 1e4, scientific: !1 }, k: { name: "k", value: 1e6, scientific: !0 }, M: { name: "M", value: 1e12, scientific: !0 }, G: { name: "G", value: 1e18, scientific: !0 }, T: { name: "T", value: 1e24, scientific: !0 }, P: { name: "P", value: 1e30, scientific: !0 }, E: { name: "E", value: 1e36, scientific: !0 }, Z: { name: "Z", value: 1e42, scientific: !0 }, Y: { name: "Y", value: 1e48, scientific: !0 }, d: { name: "d", value: .01, scientific: !1 }, c: { name: "c", value: 1e-4, scientific: !1 }, m: { name: "m", value: 1e-6, scientific: !0 }, u: { name: "u", value: 1e-12, scientific: !0 }, n: { name: "n", value: 1e-18, scientific: !0 }, p: { name: "p", value: 1e-24, scientific: !0 }, f: { name: "f", value: 1e-30, scientific: !0 }, a: { name: "a", value: 1e-36, scientific: !0 }, z: { name: "z", value: 1e-42, scientific: !0 }, y: { name: "y", value: 1e-48, scientific: !0 } }, CUBIC: { "": { name: "", value: 1, scientific: !0 }, da: { name: "da", value: 1e3, scientific: !1 }, h: { name: "h", value: 1e6, scientific: !1 }, k: { name: "k", value: 1e9, scientific: !0 }, M: { name: "M", value: 1e18, scientific: !0 }, G: { name: "G", value: 1e27, scientific: !0 }, T: { name: "T", value: 1e36, scientific: !0 }, P: { name: "P", value: 1e45, scientific: !0 }, E: { name: "E", value: 1e54, scientific: !0 }, Z: { name: "Z", value: 1e63, scientific: !0 }, Y: { name: "Y", value: 1e72, scientific: !0 }, d: { name: "d", value: .001, scientific: !1 }, c: { name: "c", value: 1e-6, scientific: !1 }, m: { name: "m", value: 1e-9, scientific: !0 }, u: { name: "u", value: 1e-18, scientific: !0 }, n: { name: "n", value: 1e-27, scientific: !0 }, p: { name: "p", value: 1e-36, scientific: !0 }, f: { name: "f", value: 1e-45, scientific: !0 }, a: { name: "a", value: 1e-54, scientific: !0 }, z: { name: "z", value: 1e-63, scientific: !0 }, y: { name: "y", value: 1e-72, scientific: !0 } }, BINARY_SHORT: { "": { name: "", value: 1, scientific: !0 }, k: { name: "k", value: 1e3, scientific: !0 }, M: { name: "M", value: 1e6, scientific: !0 }, G: { name: "G", value: 1e9, scientific: !0 }, T: { name: "T", value: 1e12, scientific: !0 }, P: { name: "P", value: 1e15, scientific: !0 }, E: { name: "E", value: 1e18, scientific: !0 }, Z: { name: "Z", value: 1e21, scientific: !0 }, Y: { name: "Y", value: 1e24, scientific: !0 }, Ki: { name: "Ki", value: 1024, scientific: !0 }, Mi: { name: "Mi", value: Math.pow(1024, 2), scientific: !0 }, Gi: { name: "Gi", value: Math.pow(1024, 3), scientific: !0 }, Ti: { name: "Ti", value: Math.pow(1024, 4), scientific: !0 }, Pi: { name: "Pi", value: Math.pow(1024, 5), scientific: !0 }, Ei: { name: "Ei", value: Math.pow(1024, 6), scientific: !0 }, Zi: { name: "Zi", value: Math.pow(1024, 7), scientific: !0 }, Yi: { name: "Yi", value: Math.pow(1024, 8), scientific: !0 } }, BINARY_LONG: { "": { name: "", value: 1, scientific: !0 }, kilo: { name: "kilo", value: 1e3, scientific: !0 }, mega: { name: "mega", value: 1e6, scientific: !0 }, giga: { name: "giga", value: 1e9, scientific: !0 }, tera: { name: "tera", value: 1e12, scientific: !0 }, peta: { name: "peta", value: 1e15, scientific: !0 }, exa: { name: "exa", value: 1e18, scientific: !0 }, zetta: { name: "zetta", value: 1e21, scientific: !0 }, yotta: { name: "yotta", value: 1e24, scientific: !0 }, kibi: { name: "kibi", value: 1024, scientific: !0 }, mebi: { name: "mebi", value: Math.pow(1024, 2), scientific: !0 }, gibi: { name: "gibi", value: Math.pow(1024, 3), scientific: !0 }, tebi: { name: "tebi", value: Math.pow(1024, 4), scientific: !0 }, pebi: { name: "pebi", value: Math.pow(1024, 5), scientific: !0 }, exi: { name: "exi", value: Math.pow(1024, 6), scientific: !0 }, zebi: { name: "zebi", value: Math.pow(1024, 7), scientific: !0 }, yobi: { name: "yobi", value: Math.pow(1024, 8), scientific: !0 } }, BTU: { "": { name: "", value: 1, scientific: !0 }, MM: { name: "MM", value: 1e6, scientific: !0 } }, SHORTLONG: {} }; for (var k in B.SHORT) B.SHORT.hasOwnProperty(k) && (B.SHORTLONG[k] = B.SHORT[k]); for (var I in B.LONG) B.LONG.hasOwnProperty(I) && (B.SHORTLONG[I] = B.LONG[I]); var P = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"],
                R = { NONE: { dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0] }, MASS: { dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0] }, LENGTH: { dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0] }, TIME: { dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0] }, CURRENT: { dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0] }, TEMPERATURE: { dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0] }, LUMINOUS_INTENSITY: { dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0] }, AMOUNT_OF_SUBSTANCE: { dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0] }, FORCE: { dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0] }, SURFACE: { dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0] }, VOLUME: { dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0] }, ENERGY: { dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0] }, POWER: { dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0] }, PRESSURE: { dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0] }, ELECTRIC_CHARGE: { dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0] }, ELECTRIC_CAPACITANCE: { dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0] }, ELECTRIC_POTENTIAL: { dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0] }, ELECTRIC_RESISTANCE: { dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0] }, ELECTRIC_INDUCTANCE: { dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0] }, ELECTRIC_CONDUCTANCE: { dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0] }, MAGNETIC_FLUX: { dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0] }, MAGNETIC_FLUX_DENSITY: { dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0] }, FREQUENCY: { dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0] }, ANGLE: { dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0] }, BIT: { dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1] } }; for (var U in R) R[U].key = U; var q = { name: "", base: {}, value: 1, offset: 0, dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0] },
                D = { meter: { name: "meter", base: R.LENGTH, prefixes: B.LONG, value: 1, offset: 0 }, inch: { name: "inch", base: R.LENGTH, prefixes: B.NONE, value: .0254, offset: 0 }, foot: { name: "foot", base: R.LENGTH, prefixes: B.NONE, value: .3048, offset: 0 }, yard: { name: "yard", base: R.LENGTH, prefixes: B.NONE, value: .9144, offset: 0 }, mile: { name: "mile", base: R.LENGTH, prefixes: B.NONE, value: 1609.344, offset: 0 }, link: { name: "link", base: R.LENGTH, prefixes: B.NONE, value: .201168, offset: 0 }, rod: { name: "rod", base: R.LENGTH, prefixes: B.NONE, value: 5.0292, offset: 0 }, chain: { name: "chain", base: R.LENGTH, prefixes: B.NONE, value: 20.1168, offset: 0 }, angstrom: { name: "angstrom", base: R.LENGTH, prefixes: B.NONE, value: 1e-10, offset: 0 }, m: { name: "m", base: R.LENGTH, prefixes: B.SHORT, value: 1, offset: 0 }, in: { name: "in", base: R.LENGTH, prefixes: B.NONE, value: .0254, offset: 0 }, ft: { name: "ft", base: R.LENGTH, prefixes: B.NONE, value: .3048, offset: 0 }, yd: { name: "yd", base: R.LENGTH, prefixes: B.NONE, value: .9144, offset: 0 }, mi: { name: "mi", base: R.LENGTH, prefixes: B.NONE, value: 1609.344, offset: 0 }, li: { name: "li", base: R.LENGTH, prefixes: B.NONE, value: .201168, offset: 0 }, rd: { name: "rd", base: R.LENGTH, prefixes: B.NONE, value: 5.02921, offset: 0 }, ch: { name: "ch", base: R.LENGTH, prefixes: B.NONE, value: 20.1168, offset: 0 }, mil: { name: "mil", base: R.LENGTH, prefixes: B.NONE, value: 254e-7, offset: 0 }, m2: { name: "m2", base: R.SURFACE, prefixes: B.SQUARED, value: 1, offset: 0 }, sqin: { name: "sqin", base: R.SURFACE, prefixes: B.NONE, value: 64516e-8, offset: 0 }, sqft: { name: "sqft", base: R.SURFACE, prefixes: B.NONE, value: .09290304, offset: 0 }, sqyd: { name: "sqyd", base: R.SURFACE, prefixes: B.NONE, value: .83612736, offset: 0 }, sqmi: { name: "sqmi", base: R.SURFACE, prefixes: B.NONE, value: 2589988.110336, offset: 0 }, sqrd: { name: "sqrd", base: R.SURFACE, prefixes: B.NONE, value: 25.29295, offset: 0 }, sqch: { name: "sqch", base: R.SURFACE, prefixes: B.NONE, value: 404.6873, offset: 0 }, sqmil: { name: "sqmil", base: R.SURFACE, prefixes: B.NONE, value: 6.4516e-10, offset: 0 }, acre: { name: "acre", base: R.SURFACE, prefixes: B.NONE, value: 4046.86, offset: 0 }, hectare: { name: "hectare", base: R.SURFACE, prefixes: B.NONE, value: 1e4, offset: 0 }, m3: { name: "m3", base: R.VOLUME, prefixes: B.CUBIC, value: 1, offset: 0 }, L: { name: "L", base: R.VOLUME, prefixes: B.SHORT, value: .001, offset: 0 }, l: { name: "l", base: R.VOLUME, prefixes: B.SHORT, value: .001, offset: 0 }, litre: { name: "litre", base: R.VOLUME, prefixes: B.LONG, value: .001, offset: 0 }, cuin: { name: "cuin", base: R.VOLUME, prefixes: B.NONE, value: 16387064e-12, offset: 0 }, cuft: { name: "cuft", base: R.VOLUME, prefixes: B.NONE, value: .028316846592, offset: 0 }, cuyd: { name: "cuyd", base: R.VOLUME, prefixes: B.NONE, value: .764554857984, offset: 0 }, teaspoon: { name: "teaspoon", base: R.VOLUME, prefixes: B.NONE, value: 5e-6, offset: 0 }, tablespoon: { name: "tablespoon", base: R.VOLUME, prefixes: B.NONE, value: 15e-6, offset: 0 }, drop: { name: "drop", base: R.VOLUME, prefixes: B.NONE, value: 5e-8, offset: 0 }, gtt: { name: "gtt", base: R.VOLUME, prefixes: B.NONE, value: 5e-8, offset: 0 }, minim: { name: "minim", base: R.VOLUME, prefixes: B.NONE, value: 6.161152e-8, offset: 0 }, fluiddram: { name: "fluiddram", base: R.VOLUME, prefixes: B.NONE, value: 36966911e-13, offset: 0 }, fluidounce: { name: "fluidounce", base: R.VOLUME, prefixes: B.NONE, value: 2957353e-11, offset: 0 }, gill: { name: "gill", base: R.VOLUME, prefixes: B.NONE, value: .0001182941, offset: 0 }, cc: { name: "cc", base: R.VOLUME, prefixes: B.NONE, value: 1e-6, offset: 0 }, cup: { name: "cup", base: R.VOLUME, prefixes: B.NONE, value: .0002365882, offset: 0 }, pint: { name: "pint", base: R.VOLUME, prefixes: B.NONE, value: .0004731765, offset: 0 }, quart: { name: "quart", base: R.VOLUME, prefixes: B.NONE, value: .0009463529, offset: 0 }, gallon: { name: "gallon", base: R.VOLUME, prefixes: B.NONE, value: .003785412, offset: 0 }, beerbarrel: { name: "beerbarrel", base: R.VOLUME, prefixes: B.NONE, value: .1173478, offset: 0 }, oilbarrel: { name: "oilbarrel", base: R.VOLUME, prefixes: B.NONE, value: .1589873, offset: 0 }, hogshead: { name: "hogshead", base: R.VOLUME, prefixes: B.NONE, value: .238481, offset: 0 }, fldr: { name: "fldr", base: R.VOLUME, prefixes: B.NONE, value: 36966911e-13, offset: 0 }, floz: { name: "floz", base: R.VOLUME, prefixes: B.NONE, value: 2957353e-11, offset: 0 }, gi: { name: "gi", base: R.VOLUME, prefixes: B.NONE, value: .0001182941, offset: 0 }, cp: { name: "cp", base: R.VOLUME, prefixes: B.NONE, value: .0002365882, offset: 0 }, pt: { name: "pt", base: R.VOLUME, prefixes: B.NONE, value: .0004731765, offset: 0 }, qt: { name: "qt", base: R.VOLUME, prefixes: B.NONE, value: .0009463529, offset: 0 }, gal: { name: "gal", base: R.VOLUME, prefixes: B.NONE, value: .003785412, offset: 0 }, bbl: { name: "bbl", base: R.VOLUME, prefixes: B.NONE, value: .1173478, offset: 0 }, obl: { name: "obl", base: R.VOLUME, prefixes: B.NONE, value: .1589873, offset: 0 }, g: { name: "g", base: R.MASS, prefixes: B.SHORT, value: .001, offset: 0 }, gram: { name: "gram", base: R.MASS, prefixes: B.LONG, value: .001, offset: 0 }, ton: { name: "ton", base: R.MASS, prefixes: B.SHORT, value: 907.18474, offset: 0 }, tonne: { name: "tonne", base: R.MASS, prefixes: B.SHORT, value: 1e3, offset: 0 }, grain: { name: "grain", base: R.MASS, prefixes: B.NONE, value: 6479891e-11, offset: 0 }, dram: { name: "dram", base: R.MASS, prefixes: B.NONE, value: .0017718451953125, offset: 0 }, ounce: { name: "ounce", base: R.MASS, prefixes: B.NONE, value: .028349523125, offset: 0 }, poundmass: { name: "poundmass", base: R.MASS, prefixes: B.NONE, value: .45359237, offset: 0 }, hundredweight: { name: "hundredweight", base: R.MASS, prefixes: B.NONE, value: 45.359237, offset: 0 }, stick: { name: "stick", base: R.MASS, prefixes: B.NONE, value: .115, offset: 0 }, stone: { name: "stone", base: R.MASS, prefixes: B.NONE, value: 6.35029318, offset: 0 }, gr: { name: "gr", base: R.MASS, prefixes: B.NONE, value: 6479891e-11, offset: 0 }, dr: { name: "dr", base: R.MASS, prefixes: B.NONE, value: .0017718451953125, offset: 0 }, oz: { name: "oz", base: R.MASS, prefixes: B.NONE, value: .028349523125, offset: 0 }, lbm: { name: "lbm", base: R.MASS, prefixes: B.NONE, value: .45359237, offset: 0 }, cwt: { name: "cwt", base: R.MASS, prefixes: B.NONE, value: 45.359237, offset: 0 }, s: { name: "s", base: R.TIME, prefixes: B.SHORT, value: 1, offset: 0 }, min: { name: "min", base: R.TIME, prefixes: B.NONE, value: 60, offset: 0 }, h: { name: "h", base: R.TIME, prefixes: B.NONE, value: 3600, offset: 0 }, second: { name: "second", base: R.TIME, prefixes: B.LONG, value: 1, offset: 0 }, sec: { name: "sec", base: R.TIME, prefixes: B.LONG, value: 1, offset: 0 }, minute: { name: "minute", base: R.TIME, prefixes: B.NONE, value: 60, offset: 0 }, hour: { name: "hour", base: R.TIME, prefixes: B.NONE, value: 3600, offset: 0 }, day: { name: "day", base: R.TIME, prefixes: B.NONE, value: 86400, offset: 0 }, week: { name: "week", base: R.TIME, prefixes: B.NONE, value: 604800, offset: 0 }, month: { name: "month", base: R.TIME, prefixes: B.NONE, value: 2629800, offset: 0 }, year: { name: "year", base: R.TIME, prefixes: B.NONE, value: 31557600, offset: 0 }, decade: { name: "decade", base: R.TIME, prefixes: B.NONE, value: 315576e3, offset: 0 }, century: { name: "century", base: R.TIME, prefixes: B.NONE, value: 315576e4, offset: 0 }, millennium: { name: "millennium", base: R.TIME, prefixes: B.NONE, value: 315576e5, offset: 0 }, hertz: { name: "Hertz", base: R.FREQUENCY, prefixes: B.LONG, value: 1, offset: 0, reciprocal: !0 }, Hz: { name: "Hz", base: R.FREQUENCY, prefixes: B.SHORT, value: 1, offset: 0, reciprocal: !0 }, rad: { name: "rad", base: R.ANGLE, prefixes: B.SHORT, value: 1, offset: 0 }, radian: { name: "radian", base: R.ANGLE, prefixes: B.LONG, value: 1, offset: 0 }, deg: { name: "deg", base: R.ANGLE, prefixes: B.SHORT, value: null, offset: 0 }, degree: { name: "degree", base: R.ANGLE, prefixes: B.LONG, value: null, offset: 0 }, grad: { name: "grad", base: R.ANGLE, prefixes: B.SHORT, value: null, offset: 0 }, gradian: { name: "gradian", base: R.ANGLE, prefixes: B.LONG, value: null, offset: 0 }, cycle: { name: "cycle", base: R.ANGLE, prefixes: B.NONE, value: null, offset: 0 }, arcsec: { name: "arcsec", base: R.ANGLE, prefixes: B.NONE, value: null, offset: 0 }, arcmin: { name: "arcmin", base: R.ANGLE, prefixes: B.NONE, value: null, offset: 0 }, A: { name: "A", base: R.CURRENT, prefixes: B.SHORT, value: 1, offset: 0 }, ampere: { name: "ampere", base: R.CURRENT, prefixes: B.LONG, value: 1, offset: 0 }, K: { name: "K", base: R.TEMPERATURE, prefixes: B.NONE, value: 1, offset: 0 }, degC: { name: "degC", base: R.TEMPERATURE, prefixes: B.NONE, value: 1, offset: 273.15 }, degF: { name: "degF", base: R.TEMPERATURE, prefixes: B.NONE, value: 1 / 1.8, offset: 459.67 }, degR: { name: "degR", base: R.TEMPERATURE, prefixes: B.NONE, value: 1 / 1.8, offset: 0 }, kelvin: { name: "kelvin", base: R.TEMPERATURE, prefixes: B.NONE, value: 1, offset: 0 }, celsius: { name: "celsius", base: R.TEMPERATURE, prefixes: B.NONE, value: 1, offset: 273.15 }, fahrenheit: { name: "fahrenheit", base: R.TEMPERATURE, prefixes: B.NONE, value: 1 / 1.8, offset: 459.67 }, rankine: { name: "rankine", base: R.TEMPERATURE, prefixes: B.NONE, value: 1 / 1.8, offset: 0 }, mol: { name: "mol", base: R.AMOUNT_OF_SUBSTANCE, prefixes: B.SHORT, value: 1, offset: 0 }, mole: { name: "mole", base: R.AMOUNT_OF_SUBSTANCE, prefixes: B.LONG, value: 1, offset: 0 }, cd: { name: "cd", base: R.LUMINOUS_INTENSITY, prefixes: B.NONE, value: 1, offset: 0 }, candela: { name: "candela", base: R.LUMINOUS_INTENSITY, prefixes: B.NONE, value: 1, offset: 0 }, N: { name: "N", base: R.FORCE, prefixes: B.SHORT, value: 1, offset: 0 }, newton: { name: "newton", base: R.FORCE, prefixes: B.LONG, value: 1, offset: 0 }, dyn: { name: "dyn", base: R.FORCE, prefixes: B.SHORT, value: 1e-5, offset: 0 }, dyne: { name: "dyne", base: R.FORCE, prefixes: B.LONG, value: 1e-5, offset: 0 }, lbf: { name: "lbf", base: R.FORCE, prefixes: B.NONE, value: 4.4482216152605, offset: 0 }, poundforce: { name: "poundforce", base: R.FORCE, prefixes: B.NONE, value: 4.4482216152605, offset: 0 }, kip: { name: "kip", base: R.FORCE, prefixes: B.LONG, value: 4448.2216, offset: 0 }, J: { name: "J", base: R.ENERGY, prefixes: B.SHORT, value: 1, offset: 0 }, joule: { name: "joule", base: R.ENERGY, prefixes: B.SHORT, value: 1, offset: 0 }, erg: { name: "erg", base: R.ENERGY, prefixes: B.NONE, value: 1e-7, offset: 0 }, Wh: { name: "Wh", base: R.ENERGY, prefixes: B.SHORT, value: 3600, offset: 0 }, BTU: { name: "BTU", base: R.ENERGY, prefixes: B.BTU, value: 1055.05585262, offset: 0 }, eV: { name: "eV", base: R.ENERGY, prefixes: B.SHORT, value: 1602176565e-28, offset: 0 }, electronvolt: { name: "electronvolt", base: R.ENERGY, prefixes: B.LONG, value: 1602176565e-28, offset: 0 }, W: { name: "W", base: R.POWER, prefixes: B.SHORT, value: 1, offset: 0 }, watt: { name: "watt", base: R.POWER, prefixes: B.LONG, value: 1, offset: 0 }, hp: { name: "hp", base: R.POWER, prefixes: B.NONE, value: 745.6998715386, offset: 0 }, VAR: { name: "VAR", base: R.POWER, prefixes: B.SHORT, value: o.I, offset: 0 }, VA: { name: "VA", base: R.POWER, prefixes: B.SHORT, value: 1, offset: 0 }, Pa: { name: "Pa", base: R.PRESSURE, prefixes: B.SHORT, value: 1, offset: 0 }, psi: { name: "psi", base: R.PRESSURE, prefixes: B.NONE, value: 6894.75729276459, offset: 0 }, atm: { name: "atm", base: R.PRESSURE, prefixes: B.NONE, value: 101325, offset: 0 }, bar: { name: "bar", base: R.PRESSURE, prefixes: B.SHORTLONG, value: 1e5, offset: 0 }, torr: { name: "torr", base: R.PRESSURE, prefixes: B.NONE, value: 133.322, offset: 0 }, mmHg: { name: "mmHg", base: R.PRESSURE, prefixes: B.NONE, value: 133.322, offset: 0 }, mmH2O: { name: "mmH2O", base: R.PRESSURE, prefixes: B.NONE, value: 9.80665, offset: 0 }, cmH2O: { name: "cmH2O", base: R.PRESSURE, prefixes: B.NONE, value: 98.0665, offset: 0 }, coulomb: { name: "coulomb", base: R.ELECTRIC_CHARGE, prefixes: B.LONG, value: 1, offset: 0 }, C: { name: "C", base: R.ELECTRIC_CHARGE, prefixes: B.SHORT, value: 1, offset: 0 }, farad: { name: "farad", base: R.ELECTRIC_CAPACITANCE, prefixes: B.LONG, value: 1, offset: 0 }, F: { name: "F", base: R.ELECTRIC_CAPACITANCE, prefixes: B.SHORT, value: 1, offset: 0 }, volt: { name: "volt", base: R.ELECTRIC_POTENTIAL, prefixes: B.LONG, value: 1, offset: 0 }, V: { name: "V", base: R.ELECTRIC_POTENTIAL, prefixes: B.SHORT, value: 1, offset: 0 }, ohm: { name: "ohm", base: R.ELECTRIC_RESISTANCE, prefixes: B.SHORTLONG, value: 1, offset: 0 }, henry: { name: "henry", base: R.ELECTRIC_INDUCTANCE, prefixes: B.LONG, value: 1, offset: 0 }, H: { name: "H", base: R.ELECTRIC_INDUCTANCE, prefixes: B.SHORT, value: 1, offset: 0 }, siemens: { name: "siemens", base: R.ELECTRIC_CONDUCTANCE, prefixes: B.LONG, value: 1, offset: 0 }, S: { name: "S", base: R.ELECTRIC_CONDUCTANCE, prefixes: B.SHORT, value: 1, offset: 0 }, weber: { name: "weber", base: R.MAGNETIC_FLUX, prefixes: B.LONG, value: 1, offset: 0 }, Wb: { name: "Wb", base: R.MAGNETIC_FLUX, prefixes: B.SHORT, value: 1, offset: 0 }, tesla: { name: "tesla", base: R.MAGNETIC_FLUX_DENSITY, prefixes: B.LONG, value: 1, offset: 0 }, T: { name: "T", base: R.MAGNETIC_FLUX_DENSITY, prefixes: B.SHORT, value: 1, offset: 0 }, b: { name: "b", base: R.BIT, prefixes: B.BINARY_SHORT, value: 1, offset: 0 }, bits: { name: "bits", base: R.BIT, prefixes: B.BINARY_LONG, value: 1, offset: 0 }, B: { name: "B", base: R.BIT, prefixes: B.BINARY_SHORT, value: 8, offset: 0 }, bytes: { name: "bytes", base: R.BIT, prefixes: B.BINARY_LONG, value: 8, offset: 0 } },
                L = { meters: "meter", inches: "inch", feet: "foot", yards: "yard", miles: "mile", links: "link", rods: "rod", chains: "chain", angstroms: "angstrom", lt: "l", litres: "litre", liter: "litre", liters: "litre", teaspoons: "teaspoon", tablespoons: "tablespoon", minims: "minim", fluiddrams: "fluiddram", fluidounces: "fluidounce", gills: "gill", cups: "cup", pints: "pint", quarts: "quart", gallons: "gallon", beerbarrels: "beerbarrel", oilbarrels: "oilbarrel", hogsheads: "hogshead", gtts: "gtt", grams: "gram", tons: "ton", tonnes: "tonne", grains: "grain", drams: "dram", ounces: "ounce", poundmasses: "poundmass", hundredweights: "hundredweight", sticks: "stick", lb: "lbm", lbs: "lbm", kips: "kip", acres: "acre", hectares: "hectare", sqfeet: "sqft", sqyard: "sqyd", sqmile: "sqmi", sqmiles: "sqmi", mmhg: "mmHg", mmh2o: "mmH2O", cmh2o: "cmH2O", seconds: "second", secs: "second", minutes: "minute", mins: "minute", hours: "hour", hr: "hour", hrs: "hour", days: "day", weeks: "week", months: "month", years: "year", decades: "decade", centuries: "century", millennia: "millennium", hertz: "hertz", radians: "radian", degrees: "degree", gradians: "gradian", cycles: "cycle", arcsecond: "arcsec", arcseconds: "arcsec", arcminute: "arcmin", arcminutes: "arcmin", BTUs: "BTU", watts: "watt", joules: "joule", amperes: "ampere", coulombs: "coulomb", volts: "volt", ohms: "ohm", farads: "farad", webers: "weber", teslas: "tesla", electronvolts: "electronvolt", moles: "mole" };

            function j(e) { if ("BigNumber" === e.number) { var t = ee.pi(y.BigNumber);
                    D.rad.value = new y.BigNumber(1), D.deg.value = t.div(180), D.grad.value = t.div(200), D.cycle.value = t.times(2), D.arcsec.value = t.div(648e3), D.arcmin.value = t.div(10800) } else D.rad.value = 1, D.deg.value = Math.PI / 180, D.grad.value = Math.PI / 200, D.cycle.value = 2 * Math.PI, D.arcsec.value = Math.PI / 648e3, D.arcmin.value = Math.PI / 10800;
                D.radian.value = D.rad.value, D.degree.value = D.deg.value, D.gradian.value = D.grad.value }
            j(g), r.on("config", function(e, t) { e.number !== t.number && j(e) }); var F = { si: { NONE: { unit: q, prefix: B.NONE[""] }, LENGTH: { unit: D.m, prefix: B.SHORT[""] }, MASS: { unit: D.g, prefix: B.SHORT.k }, TIME: { unit: D.s, prefix: B.SHORT[""] }, CURRENT: { unit: D.A, prefix: B.SHORT[""] }, TEMPERATURE: { unit: D.K, prefix: B.SHORT[""] }, LUMINOUS_INTENSITY: { unit: D.cd, prefix: B.SHORT[""] }, AMOUNT_OF_SUBSTANCE: { unit: D.mol, prefix: B.SHORT[""] }, ANGLE: { unit: D.rad, prefix: B.SHORT[""] }, BIT: { unit: D.bit, prefix: B.SHORT[""] }, FORCE: { unit: D.N, prefix: B.SHORT[""] }, ENERGY: { unit: D.J, prefix: B.SHORT[""] }, POWER: { unit: D.W, prefix: B.SHORT[""] }, PRESSURE: { unit: D.Pa, prefix: B.SHORT[""] }, ELECTRIC_CHARGE: { unit: D.C, prefix: B.SHORT[""] }, ELECTRIC_CAPACITANCE: { unit: D.F, prefix: B.SHORT[""] }, ELECTRIC_POTENTIAL: { unit: D.V, prefix: B.SHORT[""] }, ELECTRIC_RESISTANCE: { unit: D.ohm, prefix: B.SHORT[""] }, ELECTRIC_INDUCTANCE: { unit: D.H, prefix: B.SHORT[""] }, ELECTRIC_CONDUCTANCE: { unit: D.S, prefix: B.SHORT[""] }, MAGNETIC_FLUX: { unit: D.Wb, prefix: B.SHORT[""] }, MAGNETIC_FLUX_DENSITY: { unit: D.T, prefix: B.SHORT[""] }, FREQUENCY: { unit: D.Hz, prefix: B.SHORT[""] } } };
            F.cgs = JSON.parse(JSON.stringify(F.si)), F.cgs.LENGTH = { unit: D.m, prefix: B.SHORT.c }, F.cgs.MASS = { unit: D.g, prefix: B.SHORT[""] }, F.cgs.FORCE = { unit: D.dyn, prefix: B.SHORT[""] }, F.cgs.ENERGY = { unit: D.erg, prefix: B.NONE[""] }, F.us = JSON.parse(JSON.stringify(F.si)), F.us.LENGTH = { unit: D.ft, prefix: B.NONE[""] }, F.us.MASS = { unit: D.lbm, prefix: B.NONE[""] }, F.us.TEMPERATURE = { unit: D.degF, prefix: B.NONE[""] }, F.us.FORCE = { unit: D.lbf, prefix: B.NONE[""] }, F.us.ENERGY = { unit: D.BTU, prefix: B.BTU[""] }, F.us.POWER = { unit: D.hp, prefix: B.NONE[""] }, F.us.PRESSURE = { unit: D.psi, prefix: B.NONE[""] }, F.auto = JSON.parse(JSON.stringify(F.si)); var H = F.auto; for (var $ in E.setUnitSystem = function(e) { if (!F.hasOwnProperty(e)) throw new Error("Unit system " + e + " does not exist. Choices are: " + Object.keys(F).join(", "));
                    H = F[e] }, E.getUnitSystem = function() { for (var e in F)
                        if (F[e] === H) return e }, E.typeConverters = { BigNumber: function(e) { return new y.BigNumber(e + "") }, Fraction: function(e) { return new y.Fraction(e) }, Complex: function(e) { return e }, number: function(e) { return e } }, E._getNumberConverter = function(e) { if (!E.typeConverters[e]) throw new TypeError('Unsupported type "' + e + '"'); return E.typeConverters[e] }, D) { var G = D[$];
                G.dimensions = G.base.dimensions } for (var Z in L)
                if (L.hasOwnProperty(Z)) { var V = D[L[Z]],
                        W = {}; for (var J in V) V.hasOwnProperty(J) && (W[J] = V[J]);
                    W.name = Z, D[Z] = W }
            return E.createUnit = function(e, t) { if ("object" !== X(e)) throw new TypeError("createUnit expects first parameter to be of type 'Object'"); if (t && t.override)
                    for (var r in e)
                        if (e.hasOwnProperty(r) && E.deleteUnit(r), e[r].aliases)
                            for (var n = 0; n < e[r].aliases.length; n++) E.deleteUnit(e[r].aliases[n]);
                var i; for (var o in e) e.hasOwnProperty(o) && (i = E.createUnitSingle(o, e[o])); return i }, E.createUnitSingle = function(t, e, r) { if (null == e && (e = {}), "string" != typeof t) throw new TypeError("createUnitSingle expects first parameter to be of type 'string'"); if (D.hasOwnProperty(t)) throw new Error('Cannot create unit "' + t + '": a unit with that name already exists');! function(e) { for (var t = 0; t < e.length; t++) { var r = e.charAt(t),
                            n = function(e) { return /^[a-zA-Z]$/.test(e) }; if (0 === t && !n(r)) throw new Error('Invalid unit name (must begin with alpha character): "' + e + '"'); if (0 < t && !(n(r) || "0" <= (i = r) && i <= "9")) throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + e + '"') } var i }(t); var n, i, o = null,
                    a = [],
                    s = 0; if (e && "Unit" === e.type) o = e.clone();
                else if ("string" == typeof e) "" !== e && (n = e);
                else { if ("object" !== X(e)) throw new TypeError('Cannot create unit "' + t + '" from "' + e.toString() + '": expecting "string" or "Unit" or "Object"');
                    n = e.definition, i = e.prefixes, s = e.offset, e.aliases && (a = e.aliases.valueOf()) } if (a)
                    for (var u = 0; u < a.length; u++)
                        if (D.hasOwnProperty(a[u])) throw new Error('Cannot create alias "' + a[u] + '": a unit with that name already exists');
                if (n && "string" == typeof n && !o) try { o = E.parse(n, { allowNoUnits: !0 }) } catch (e) { throw e.message = 'Could not create unit "' + t + '" from "' + n + '": ' + e.message, e } else n && "Unit" === n.type && (o = n.clone());
                a = a || [], s = s || 0, i = i && i.toUpperCase && B[i.toUpperCase()] || B.NONE; var c = {}; if (o) { var f = !(c = { name: t, value: o.value, dimensions: o.dimensions.slice(0), prefixes: i, offset: s }); for (var l in R)
                        if (R.hasOwnProperty(l)) { for (var p = !0, m = 0; m < P.length; m++)
                                if (1e-12 < Math.abs((c.dimensions[m] || 0) - (R[l].dimensions[m] || 0))) { p = !1; break }
                            if (p) { f = !0, c.base = R[l]; break } }
                    if (!f) { var h = t + "_STUFF",
                            d = { dimensions: o.dimensions.slice(0) };
                        d.key = h, R[h] = d, H[h] = { unit: c, prefix: B.NONE[""] }, c.base = R[h] } } else { var y = t + "_STUFF"; if (0 <= P.indexOf(y)) throw new Error('Cannot create new base unit "' + t + '": a base unit with that name already exists (and cannot be overridden)'); for (var g in P.push(y), R) R.hasOwnProperty(g) && (R[g].dimensions[P.length - 1] = 0); for (var v = { dimensions: [] }, x = 0; x < P.length; x++) v.dimensions[x] = 0;
                    v.dimensions[P.length - 1] = 1, v.key = y, R[y] = v, c = { name: t, value: 1, dimensions: R[y].dimensions.slice(0), prefixes: i, offset: s, base: R[y] }, H[y] = { unit: c, prefix: B.NONE[""] } }
                E.UNITS[t] = c; for (var b = 0; b < a.length; b++) { var w = a[b],
                        N = {}; for (var M in c) c.hasOwnProperty(M) && (N[M] = c[M]);
                    N.name = w, E.UNITS[w] = N } return new E(null, t) }, E.deleteUnit = function(e) { delete E.UNITS[e] }, E.PREFIXES = B, E.BASE_DIMENSIONS = P, E.BASE_UNITS = R, E.UNIT_SYSTEMS = F, E.UNITS = D, E }, t.math = !0 }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "unit", t.factory = function(r, e, t, n) { var i = n("unit", { Unit: function(e) { return e.clone() }, string: function(e) { return r.Unit.isValuelessUnit(e) ? new r.Unit(null, e) : r.Unit.parse(e, { allowNoUnits: !0 }) }, "number | BigNumber | Fraction | Complex, string": function(e, t) { return new r.Unit(e, t) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)" }, i } }, function(e, t, r) { "use strict";
        t.name = "createUnit", t.factory = function(i, e, t, r) { return r("createUnit", { "Object, Object": function(e, t) { return i.Unit.createUnit(e, t) }, Object: function(e) { return i.Unit.createUnit(e, {}) }, "string, Unit | string | Object, Object": function(e, t, r) { var n = {}; return n[e] = t, i.Unit.createUnit(n, r) }, "string, Unit | string | Object": function(e, t) { var r = {}; return r[e] = t, i.Unit.createUnit(r, {}) }, string: function(e) { var t = {}; return t[e] = {}, i.Unit.createUnit(t, {}) } }) } }, function(e, t, r) { "use strict";
        t.name = "splitUnit", t.factory = function(e, t, r, n) { return n("splitUnit", { "Unit, Array": function(e, t) { return e.splitUnit(t) } }) } }, function(e, t, r) { "use strict"; var n = r(5).lazy;

        function a(e, t, r) { n(e, t, r), n(e.expression.mathWithTransform, t, r) }
        t.factory = function(r, e, t, n, i) {
            function o(e) { var t = r.Unit.parse(e); return t.fixPrefix = !0, t }
            a(i, "speedOfLight", function() { return o("299792458 m s^-1") }), a(i, "gravitationConstant", function() { return o("6.6738480e-11 m^3 kg^-1 s^-2") }), a(i, "planckConstant", function() { return o("6.626069311e-34 J s") }), a(i, "reducedPlanckConstant", function() { return o("1.05457172647e-34 J s") }), a(i, "magneticConstant", function() { return o("1.2566370614e-6 N A^-2") }), a(i, "electricConstant", function() { return o("8.854187817e-12 F m^-1") }), a(i, "vacuumImpedance", function() { return o("376.730313461 ohm") }), a(i, "coulomb", function() { return o("8.9875517873681764e9 N m^2 C^-2") }), a(i, "elementaryCharge", function() { return o("1.60217656535e-19 C") }), a(i, "bohrMagneton", function() { return o("9.2740096820e-24 J T^-1") }), a(i, "conductanceQuantum", function() { return o("7.748091734625e-5 S") }), a(i, "inverseConductanceQuantum", function() { return o("12906.403721742 ohm") }), a(i, "magneticFluxQuantum", function() { return o("2.06783375846e-15 Wb") }), a(i, "nuclearMagneton", function() { return o("5.0507835311e-27 J T^-1") }), a(i, "klitzing", function() { return o("25812.807443484 ohm") }), a(i, "bohrRadius", function() { return o("5.291772109217e-11 m") }), a(i, "classicalElectronRadius", function() { return o("2.817940326727e-15 m") }), a(i, "electronMass", function() { return o("9.1093829140e-31 kg") }), a(i, "fermiCoupling", function() { return o("1.1663645e-5 GeV^-2") }), a(i, "fineStructure", function() { return .007297352569824 }), a(i, "hartreeEnergy", function() { return o("4.3597443419e-18 J") }), a(i, "protonMass", function() { return o("1.67262177774e-27 kg") }), a(i, "deuteronMass", function() { return o("3.3435830926e-27 kg") }), a(i, "neutronMass", function() { return o("1.6749271613e-27 kg") }), a(i, "quantumOfCirculation", function() { return o("3.636947552024e-4 m^2 s^-1") }), a(i, "rydberg", function() { return o("10973731.56853955 m^-1") }), a(i, "thomsonCrossSection", function() { return o("6.65245873413e-29 m^2") }), a(i, "weakMixingAngle", function() { return .222321 }), a(i, "efimovFactor", function() { return 22.7 }), a(i, "atomicMass", function() { return o("1.66053892173e-27 kg") }), a(i, "avogadro", function() { return o("6.0221412927e23 mol^-1") }), a(i, "boltzmann", function() { return o("1.380648813e-23 J K^-1") }), a(i, "faraday", function() { return o("96485.336521 C mol^-1") }), a(i, "firstRadiation", function() { return o("3.7417715317e-16 W m^2") }), a(i, "loschmidt", function() { return o("2.686780524e25 m^-3") }), a(i, "gasConstant", function() { return o("8.314462175 J K^-1 mol^-1") }), a(i, "molarPlanckConstant", function() { return o("3.990312717628e-10 J s mol^-1") }), a(i, "molarVolume", function() { return o("2.241396820e-10 m^3 mol^-1") }), a(i, "sackurTetrode", function() { return -1.164870823 }), a(i, "secondRadiation", function() { return o("1.438777013e-2 m K") }), a(i, "stefanBoltzmann", function() { return o("5.67037321e-8 W m^-2 K^-4") }), a(i, "wienDisplacement", function() { return o("2.897772126e-3 m K") }), a(i, "molarMass", function() { return o("1e-3 kg mol^-1") }), a(i, "molarMassC12", function() { return o("1.2e-2 kg mol^-1") }), a(i, "gravity", function() { return o("9.80665 m s^-2") }), a(i, "planckLength", function() { return o("1.61619997e-35 m") }), a(i, "planckMass", function() { return o("2.1765113e-8 kg") }), a(i, "planckTime", function() { return o("5.3910632e-44 s") }), a(i, "planckCharge", function() { return o("1.87554595641e-18 C") }), a(i, "planckTemperature", function() { return o("1.41683385e+32 K") }) }, t.lazy = !1, t.math = !0 }, function(e, t, u) { "use strict"; var n = u(5),
            c = u(102);

        function f(e, t, r) { e[t] = r, e.expression.mathWithTransform[t] = r }

        function l(e, t, r) { n.lazy(e, t, r), n.lazy(e.expression.mathWithTransform, t, r) }
        t.factory = function r(n, i, o, a, s) { s.on("config", function(e, t) { e.number !== t.number && r(n, i, o, a, s) }), f(s, "true", !0), f(s, "false", !1), f(s, "null", null), f(s, "uninitialized", "Error: Constant uninitialized is removed since v4.0.0. Use null instead"), "BigNumber" === i.number ? (f(s, "Infinity", new n.BigNumber(1 / 0)), f(s, "NaN", new n.BigNumber(NaN)), l(s, "pi", function() { return c.pi(n.BigNumber) }), l(s, "tau", function() { return c.tau(n.BigNumber) }), l(s, "e", function() { return c.e(n.BigNumber) }), l(s, "phi", function() { return c.phi(n.BigNumber) }), l(s, "E", function() { return s.e }), l(s, "LN2", function() { return new n.BigNumber(2).ln() }), l(s, "LN10", function() { return new n.BigNumber(10).ln() }), l(s, "LOG2E", function() { return new n.BigNumber(1).div(new n.BigNumber(2).ln()) }), l(s, "LOG10E", function() { return new n.BigNumber(1).div(new n.BigNumber(10).ln()) }), l(s, "PI", function() { return s.pi }), l(s, "SQRT1_2", function() { return new n.BigNumber("0.5").sqrt() }), l(s, "SQRT2", function() { return new n.BigNumber(2).sqrt() })) : (f(s, "Infinity", 1 / 0), f(s, "NaN", NaN), f(s, "pi", Math.PI), f(s, "tau", 2 * Math.PI), f(s, "e", Math.E), f(s, "phi", 1.618033988749895), f(s, "E", s.e), f(s, "LN2", Math.LN2), f(s, "LN10", Math.LN10), f(s, "LOG2E", Math.LOG2E), f(s, "LOG10E", Math.LOG10E), f(s, "PI", s.pi), f(s, "SQRT1_2", Math.SQRT1_2), f(s, "SQRT2", Math.SQRT2)), n.Complex && f(s, "i", n.Complex.I), f(s, "version", u(194)) }, t.lazy = !1, t.math = !0 }, function(e, t) { e.exports = "5.2.3" }, function(e, t, r) { "use strict";
        e.exports = [r(196), r(217), r(240), r(253), r(257), r(261), r(264), r(268), r(288), r(298), r(302), r(310), r(312), r(318), r(320), r(346), r(348)] }, function(e, t, r) { "use strict";
        e.exports = [r(197), r(83), r(200), r(201), r(84), r(125), r(130), r(215), r(131)] }, function(e, t, b) { "use strict";
        t.name = "derivative", t.factory = function(l, r, e, t) { var n = e(b(42)),
                o = e(b(83)),
                p = e(b(49)),
                m = e(b(59)),
                i = e(b(24)),
                a = e(b(64)),
                s = e(b(57)),
                h = e(b(67)),
                d = e(b(58)),
                u = e(b(66)),
                f = e(b(51)),
                c = t("derivative", { "Node, SymbolNode, Object": function(e, t, r) { var n = {};
                        g(n, e, t.name); var i = v(e, n); return r.simplify ? o(i) : i }, "Node, SymbolNode": function(e, t) { return c(e, t, { simplify: !0 }) }, "string, SymbolNode": function(e, t) { return c(n(e), t) }, "string, SymbolNode, Object": function(e, t, r) { return c(n(e), t, r) }, "string, string": function(e, t) { return c(n(e), n(t)) }, "string, string, Object": function(e, t, r) { return c(n(e), n(t), r) }, "Node, string": function(e, t) { return c(e, n(t)) }, "Node, string, Object": function(e, t, r) { return c(e, n(t), r) } });
            c._simplify = !0, c.toTex = function(e) { return y.apply(null, e.args) }; var y = t("_derivTex", { "Node, SymbolNode": function(e, t) { return l.isConstantNode(e) && "string" === i(e.value) ? y(n(e.value).toString(), t.toString(), 1) : y(e.toString(), t.toString(), 1) }, "Node, ConstantNode": function(e, t) { if ("string" === i(t.value)) return y(e, n(t.value)); throw new Error("The second parameter to 'derivative' is a non-string constant") }, "Node, SymbolNode, ConstantNode": function(e, t, r) { return y(e.toString(), t.name, r.value) }, "string, string, number": function(e, t, r) { return (1 === r ? "{d\\over d" + t + "}" : "{d^{" + r + "}\\over d" + t + "^{" + r + "}}") + "\\left[".concat(e, "\\right]") } }),
                g = t("constTag", { "Object, ConstantNode, string": function(e, t) { return e[t] = !0 }, "Object, SymbolNode, string": function(e, t, r) { return t.name !== r && (e[t] = !0) }, "Object, ParenthesisNode, string": function(e, t, r) { return g(e, t.content, r) }, "Object, FunctionAssignmentNode, string": function(e, t, r) { return -1 === t.params.indexOf(r) ? e[t] = !0 : g(e, t.expr, r) }, "Object, FunctionNode | OperatorNode, string": function(e, t, r) { if (0 < t.args.length) { for (var n = g(e, t.args[0], r), i = 1; i < t.args.length; ++i) n = g(e, t.args[i], r) && n; if (n) return e[t] = !0 } return !1 } }),
                v = t("_derivative", { "ConstantNode, Object": function(e) { return x(0) }, "SymbolNode, Object": function(e, t) { return void 0 !== t[e] ? x(0) : x(1) }, "ParenthesisNode, Object": function(e, t) { return new u(v(e.content, t)) }, "FunctionAssignmentNode, Object": function(e, t) { return void 0 !== t[e] ? x(0) : v(e.expr, t) }, "FunctionNode, Object": function(e, t) { if (1 !== e.args.length && function(e) { if ("log" !== e.name && "nthRoot" !== e.name || 2 !== e.args.length) { for (var t = 0; t < e.args.length; ++t) e.args[t] = x(0); throw e.compile().eval(), new Error("Expected TypeError, but none found") } }(e), void 0 !== t[e]) return x(0); var r, n, i, o, a = e.args[0],
                            s = !1,
                            u = !1; switch (e.name) {
                            case "cbrt":
                                s = !0, n = new d("*", "multiply", [x(3), new d("^", "pow", [a, new d("/", "divide", [x(2), x(3)])])]); break;
                            case "sqrt":
                            case "nthRoot":
                                if (1 === e.args.length) s = !0, n = new d("*", "multiply", [x(2), new h("sqrt", [a])]);
                                else if (2 === e.args.length) return t[r = new d("/", "divide", [x(1), e.args[1]])] = t[e.args[1]], v(new d("^", "pow", [a, r]), t); break;
                            case "log10":
                                r = x(10);
                            case "log":
                                if (r || 1 !== e.args.length) { if (1 === e.args.length && r || 2 === e.args.length && void 0 !== t[e.args[1]]) n = new d("*", "multiply", [a.clone(), new h("log", [r || e.args[1]])]), s = !0;
                                    else if (2 === e.args.length) return v(new d("/", "divide", [new h("log", [a]), new h("log", [e.args[1]])]), t) } else n = a.clone(), s = !0; break;
                            case "exp":
                                n = new h("exp", [a.clone()]); break;
                            case "sin":
                                n = new h("cos", [a.clone()]); break;
                            case "cos":
                                n = new d("-", "unaryMinus", [new h("sin", [a.clone()])]); break;
                            case "tan":
                                n = new d("^", "pow", [new h("sec", [a.clone()]), x(2)]); break;
                            case "sec":
                                n = new d("*", "multiply", [e, new h("tan", [a.clone()])]); break;
                            case "csc":
                                u = !0, n = new d("*", "multiply", [e, new h("cot", [a.clone()])]); break;
                            case "cot":
                                u = !0, n = new d("^", "pow", [new h("csc", [a.clone()]), x(2)]); break;
                            case "asin":
                                s = !0, n = new h("sqrt", [new d("-", "subtract", [x(1), new d("^", "pow", [a.clone(), x(2)])])]); break;
                            case "acos":
                                u = s = !0, n = new h("sqrt", [new d("-", "subtract", [x(1), new d("^", "pow", [a.clone(), x(2)])])]); break;
                            case "atan":
                                s = !0, n = new d("+", "add", [new d("^", "pow", [a.clone(), x(2)]), x(1)]); break;
                            case "asec":
                                s = !0, n = new d("*", "multiply", [new h("abs", [a.clone()]), new h("sqrt", [new d("-", "subtract", [new d("^", "pow", [a.clone(), x(2)]), x(1)])])]); break;
                            case "acsc":
                                u = s = !0, n = new d("*", "multiply", [new h("abs", [a.clone()]), new h("sqrt", [new d("-", "subtract", [new d("^", "pow", [a.clone(), x(2)]), x(1)])])]); break;
                            case "acot":
                                u = s = !0, n = new d("+", "add", [new d("^", "pow", [a.clone(), x(2)]), x(1)]); break;
                            case "sinh":
                                n = new h("cosh", [a.clone()]); break;
                            case "cosh":
                                n = new h("sinh", [a.clone()]); break;
                            case "tanh":
                                n = new d("^", "pow", [new h("sech", [a.clone()]), x(2)]); break;
                            case "sech":
                                u = !0, n = new d("*", "multiply", [e, new h("tanh", [a.clone()])]); break;
                            case "csch":
                                u = !0, n = new d("*", "multiply", [e, new h("coth", [a.clone()])]); break;
                            case "coth":
                                u = !0, n = new d("^", "pow", [new h("csch", [a.clone()]), x(2)]); break;
                            case "asinh":
                                s = !0, n = new h("sqrt", [new d("+", "add", [new d("^", "pow", [a.clone(), x(2)]), x(1)])]); break;
                            case "acosh":
                                s = !0, n = new h("sqrt", [new d("-", "subtract", [new d("^", "pow", [a.clone(), x(2)]), x(1)])]); break;
                            case "atanh":
                                s = !0, n = new d("-", "subtract", [x(1), new d("^", "pow", [a.clone(), x(2)])]); break;
                            case "asech":
                                u = s = !0, n = new d("*", "multiply", [a.clone(), new h("sqrt", [new d("-", "subtract", [x(1), new d("^", "pow", [a.clone(), x(2)])])])]); break;
                            case "acsch":
                                u = s = !0, n = new d("*", "multiply", [new h("abs", [a.clone()]), new h("sqrt", [new d("+", "add", [new d("^", "pow", [a.clone(), x(2)]), x(1)])])]); break;
                            case "acoth":
                                u = s = !0, n = new d("-", "subtract", [x(1), new d("^", "pow", [a.clone(), x(2)])]); break;
                            case "abs":
                                n = new d("/", "divide", [new h(new f("abs"), [a.clone()]), a.clone()]); break;
                            case "gamma":
                            default:
                                throw new Error('Function "' + e.name + '" is not supported by derivative, or a wrong number of arguments is passed') }
                        o = s ? (i = "/", "divide") : (i = "*", "multiply"); var c = v(a, t); return u && (c = new d("-", "unaryMinus", [c])), new d(i, o, [c, n]) }, "OperatorNode, Object": function(e, r) { if (void 0 !== r[e]) return x(0); if ("+" === e.op) return new d(e.op, e.fn, e.args.map(function(e) { return v(e, r) })); if ("-" === e.op) { if (e.isUnary()) return new d(e.op, e.fn, [v(e.args[0], r)]); if (e.isBinary()) return new d(e.op, e.fn, [v(e.args[0], r), v(e.args[1], r)]) } if ("*" === e.op) { var t = e.args.filter(function(e) { return void 0 !== r[e] }); if (0 < t.length) { var n = e.args.filter(function(e) { return void 0 === r[e] }),
                                    i = 1 === n.length ? n[0] : new d("*", "multiply", n),
                                    o = t.concat(v(i, r)); return new d("*", "multiply", o) } return new d("+", "add", e.args.map(function(t) { return new d("*", "multiply", e.args.map(function(e) { return e === t ? v(e, r) : e.clone() })) })) } if ("/" === e.op && e.isBinary()) { var a = e.args[0],
                                s = e.args[1]; return void 0 !== r[s] ? new d("/", "divide", [v(a, r), s]) : void 0 !== r[a] ? new d("*", "multiply", [new d("-", "unaryMinus", [a]), new d("/", "divide", [v(s, r), new d("^", "pow", [s.clone(), x(2)])])]) : new d("/", "divide", [new d("-", "subtract", [new d("*", "multiply", [v(a, r), s.clone()]), new d("*", "multiply", [a.clone(), v(s, r)])]), new d("^", "pow", [s.clone(), x(2)])]) } if ("^" === e.op && e.isBinary()) { var u = e.args[0],
                                c = e.args[1]; if (void 0 !== r[u]) return l.isConstantNode(u) && (m(u.value) || p(u.value, 1)) ? x(0) : new d("*", "multiply", [e, new d("*", "multiply", [new h("log", [u.clone()]), v(c.clone(), r)])]); if (void 0 === r[c]) return new d("*", "multiply", [new d("^", "pow", [u.clone(), c.clone()]), new d("+", "add", [new d("*", "multiply", [v(u, r), new d("/", "divide", [c.clone(), u.clone()])]), new d("*", "multiply", [v(c, r), new h("log", [u.clone()])])])]); if (l.isConstantNode(c)) { if (m(c.value)) return x(0); if (p(c.value, 1)) return v(u, r) } var f = new d("^", "pow", [u.clone(), new d("-", "subtract", [c, x(1)])]); return new d("*", "multiply", [c.clone(), new d("*", "multiply", [v(u, r), f])]) } throw new Error('Operator "' + e.op + '" is not supported by derivative, or a wrong number of arguments is passed') } });

            function x(e, t) { return new s(a(e, t || r.number)) } return c } }, function(e, t, a) { "use strict";

        function s(e) { return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } var u = a(43).transform,
            c = a(13).setSafeProperty;
        t.factory = function(e, t, r, n) { var i = r(a(22)),
                o = r(a(1)); return function(e, t, r) { try { if (Array.isArray(e)) return o(e).subset(t, r).valueOf(); if (e && "function" == typeof e.subset) return e.subset(t, r); if ("string" == typeof e) return i(e, t, r); if ("object" !== s(e)) throw new TypeError("Cannot apply index: unsupported type of object"); if (!t.isObjectProperty()) throw TypeError("Cannot apply a numeric index as object property"); return c(e, t.getObjectProperty(), r), e } catch (e) { throw u(e) } } } }, function(e, t, r) { "use strict";
        t.math = !0, t.name = "resolve", t.path = "algebra.simplify", t.factory = function(a, e, t, r, s) { var u = s.expression.node.Node,
                c = s.expression.node.OperatorNode,
                f = s.expression.node.FunctionNode,
                l = s.expression.node.ParenthesisNode; return function t(e, r) { if (!r) return e; if (a.isSymbolNode(e)) { var n = r[e.name]; if (n instanceof u) return t(n, r); if ("number" == typeof n) return s.parse(String(n)) } else { if (a.isOperatorNode(e)) { var i = e.args.map(function(e) { return t(e, r) }); return new c(e.op, e.fn, i, e.implicit) } if (a.isParenthesisNode(e)) return new l(t(e.content, r)); if (a.isFunctionNode(e)) { var o = e.args.map(function(e) { return t(e, r) }); return new f(e.name, o) } } return e } } }, function(e, t, a) { "use strict";
        t.name = "rationalize", t.factory = function(e, t, r, n) { var g = r(a(83)),
                v = r(a(120)),
                x = r(a(118)),
                i = r(a(122)),
                b = a(3),
                w = r(a(57)),
                N = r(a(58)),
                p = r(a(51)),
                o = n("rationalize", { string: function(e) { return o(i(e), {}, !1) }, "string, boolean": function(e, t) { return o(i(e), {}, t) }, "string, Object": function(e, t) { return o(i(e), t, !1) }, "string, Object, boolean": function(e, t, r) { return o(i(e), t, r) }, Node: function(e) { return o(e, {}, !1) }, "Node, boolean": function(e, t) { return o(e, {}, t) }, "Node, Object": function(e, t) { return o(e, t, !1) }, "Node, Object, boolean": function(e, t, r) { var n, i, o, a, s = ((a = {}).firstRules = (n = [v, { l: "n+n", r: "2*n" }, { l: "n+-n", r: "0" }, x, { l: "n*(n1^-1)", r: "n/n1" }, { l: "n*n1^-n2", r: "n/n1^n2" }, { l: "n1^-1", r: "1/n1" }, { l: "n*(n1/n2)", r: "(n*n1)/n2" }, { l: "1*n", r: "n" }]).concat(i = [{ l: "(-n1)/(-n2)", r: "n1/n2" }, { l: "(-n1)*(-n2)", r: "n1*n2" }, { l: "n1--n2", r: "n1+n2" }, { l: "n1-n2", r: "n1+(-n2)" }, { l: "(n1+n2)*n3", r: "(n1*n3 + n2*n3)" }, { l: "n1*(n2+n3)", r: "(n1*n2+n1*n3)" }, { l: "c1*n + c2*n", r: "(c1+c2)*n" }, { l: "c1*n + n", r: "(c1+1)*n" }, { l: "c1*n - c2*n", r: "(c1-c2)*n" }, { l: "c1*n - n", r: "(c1-1)*n" }, { l: "v/c", r: "(1/c)*v" }, { l: "v/-c", r: "-(1/c)*v" }, { l: "-v*-c", r: "c*v" }, { l: "-v*c", r: "-c*v" }, { l: "v*-c", r: "-c*v" }, { l: "v*c", r: "c*v" }, { l: "-(-n1*n2)", r: "(n1*n2)" }, { l: "-(n1*n2)", r: "(-n1*n2)" }, { l: "-(-n1+n2)", r: "(n1-n2)" }, { l: "-(n1+n2)", r: "(-n1-n2)" }, { l: "(n1^n2)^n3", r: "(n1^(n2*n3))" }, { l: "-(-n1/n2)", r: "(n1/n2)" }, { l: "-(n1/n2)", r: "(-n1/n2)" }], o = [{ l: "(n1/(n2/n3))", r: "((n1*n3)/n2)" }, { l: "(n1/n2/n3)", r: "(n1/(n2*n3))" }]), a.distrDivRules = [{ l: "(n1/n2 + n3/n4)", r: "((n1*n4 + n3*n2)/(n2*n4))" }, { l: "(n1/n2 + n3)", r: "((n1 + n3*n2)/n2)" }, { l: "(n1 + n2/n3)", r: "((n1*n3 + n2)/n3)" }], a.sucDivRules = o, a.firstRulesAgain = n.concat(i), a.finalRules = [v, { l: "n*-n", r: "-n^2" }, { l: "n*n", r: "n^2" }, x, { l: "n*-n^n1", r: "-n^(n1+1)" }, { l: "n*n^n1", r: "n^(n1+1)" }, { l: "n^n1*-n^n2", r: "-n^(n1+n2)" }, { l: "n^n1*n^n2", r: "n^(n1+n2)" }, { l: "n^n1*-n", r: "-n^(n1+1)" }, { l: "n^n1*n", r: "n^(n1+1)" }, { l: "n^n1/-n", r: "-n^(n1-1)" }, { l: "n^n1/n", r: "n^(n1-1)" }, { l: "n/-n^n1", r: "-n^(1-n1)" }, { l: "n/n^n1", r: "n^(1-n1)" }, { l: "n^n1/-n^n2", r: "n^(n1-n2)" }, { l: "n^n1/n^n2", r: "n^(n1-n2)" }, { l: "n1+(-n2*n3)", r: "n1-n2*n3" }, { l: "v*(-c)", r: "-c*v" }, { l: "n1+-n2", r: "n1-n2" }, { l: "v*c", r: "c*v" }, { l: "(n1^n2)^n3", r: "(n1^(n2*n3))" }], a),
                            u = function(e, t, r, n) { var a = [],
                                    i = g(e, n, t, { exactFractions: !1 }),
                                    s = "+-*" + ((r = !!r) ? "/" : "");! function e(t) { var r = t.type; if ("FunctionNode" === r) throw new Error("There is an unsolved function call"); if ("OperatorNode" === r)
                                        if ("^" === t.op) { if ("unaryMinus" === t.args[1].fn && (t = t.args[0]), "ConstantNode" !== t.args[1].type || !b.isInteger(parseFloat(t.args[1].value))) throw new Error("There is a non-integer exponent");
                                            e(t.args[0]) } else { if (-1 === s.indexOf(t.op)) throw new Error("Operator " + t.op + " invalid in polynomial expression"); for (var n = 0; n < t.args.length; n++) e(t.args[n]) }
                                    else if ("SymbolNode" === r) { var i = t.name,
                                            o = a.indexOf(i); - 1 === o && a.push(i) } else if ("ParenthesisNode" === r) e(t.content);
                                    else if ("ConstantNode" !== r) throw new Error("type " + r + " is not allowed in polynomial expression") }(i); var o = {}; return o.expression = i, o.variables = a, o }(e, t, !0, s.firstRules),
                            c = u.variables.length; if (e = u.expression, 1 <= c) { var f, l;
                            e = function e(t, r, n) { var i = t.type,
                                    o = 1 < arguments.length; if ("OperatorNode" === i && t.isBinary()) { var a, s = !1; if ("^" === t.op && ("ParenthesisNode" !== t.args[0].type && "OperatorNode" !== t.args[0].type || "ConstantNode" !== t.args[1].type || (a = parseFloat(t.args[1].value), s = 2 <= a && b.isInteger(a))), s) { if (2 < a) { var u = t.args[0],
                                                c = new N("^", "pow", [t.args[0].cloneDeep(), new w(a - 1)]);
                                            t = new N("*", "multiply", [u, c]) } else t = new N("*", "multiply", [t.args[0], t.args[0].cloneDeep()]);
                                        o && ("content" === n ? r.content = t : r.args[n] = t) } } if ("ParenthesisNode" === i) e(t.content, t, "content");
                                else if ("ConstantNode" !== i && "SymbolNode" !== i)
                                    for (var f = 0; f < t.args.length; f++) e(t.args[f], t, f); if (!o) return t }(e); var p, m = !0,
                                h = !1; for (e = g(e, s.firstRules, {}, { exactFractions: !1 }); l = m ? s.distrDivRules : s.sucDivRules, m = !m, (p = (e = g(e, l)).toString()) !== f;) h = !0, f = p;
                            h && (e = g(e, s.firstRulesAgain, {}, { exactFractions: !1 })), e = g(e, s.finalRules, {}, { exactFractions: !1 }) } var d = [],
                            y = {}; return "OperatorNode" === e.type && e.isBinary() && "/" === e.op ? (1 === c && (e.args[0] = M(e.args[0], d), e.args[1] = M(e.args[1])), r && (y.numerator = e.args[0], y.denominator = e.args[1])) : (1 === c && (e = M(e, d)), r && (y.numerator = e, y.denominator = null)), r ? (y.coefficients = d, y.variables = u.variables, y.expression = e, y) : e } });

            function M(e, u) { void 0 === u && (u = []); var t = { cte: 1, oper: "+", fire: "" },
                    c = u[0] = 0,
                    f = "";! function e(t, r, n) { var i = t.type; if ("FunctionNode" === i) throw new Error("There is an unsolved function call"); if ("OperatorNode" === i) { if (-1 === "+-*^".indexOf(t.op)) throw new Error("Operator " + t.op + " invalid"); if (null !== r) { if (("unaryMinus" === t.fn || "pow" === t.fn) && "add" !== r.fn && "subtract" !== r.fn && "multiply" !== r.fn) throw new Error("Invalid " + t.op + " placing"); if (("subtract" === t.fn || "add" === t.fn || "multiply" === t.fn) && "add" !== r.fn && "subtract" !== r.fn) throw new Error("Invalid " + t.op + " placing"); if (("subtract" === t.fn || "add" === t.fn || "unaryMinus" === t.fn) && 0 !== n.noFil) throw new Error("Invalid " + t.op + " placing") } "^" !== t.op && "*" !== t.op || (n.fire = t.op); for (var o = 0; o < t.args.length; o++) "unaryMinus" === t.fn && (n.oper = "-"), "+" !== t.op && "subtract" !== t.fn || (n.fire = "", n.cte = 1, n.oper = 0 === o ? "+" : t.op), n.noFil = o, e(t.args[o], t, n) } else if ("SymbolNode" === i) { if (t.name !== f && "" !== f) throw new Error("There is more than one variable"); if (f = t.name, null === r) return void(u[1] = 1); if ("^" === r.op && 0 !== n.noFil) throw new Error("In power the variable should be the first parameter"); if ("*" === r.op && 1 !== n.noFil) throw new Error("In multiply the variable should be the second parameter"); "" !== n.fire && "*" !== n.fire || (c < 1 && (u[1] = 0), u[1] += n.cte * ("+" === n.oper ? 1 : -1), c = Math.max(1, c)) } else { if ("ConstantNode" !== i) throw new Error("Type " + i + " is not allowed"); var a = parseFloat(t.value); if (null === r) return void(u[0] = a); if ("^" === r.op) { if (1 !== n.noFil) throw new Error("Constant cannot be powered"); if (!b.isInteger(a) || a <= 0) throw new Error("Non-integer exponent is not allowed"); for (var s = c + 1; s < a; s++) u[s] = 0; return c < a && (u[a] = 0), u[a] += n.cte * ("+" === n.oper ? 1 : -1), void(c = Math.max(a, c)) }
                        n.cte = a, "" === n.fire && (u[0] += n.cte * ("+" === n.oper ? 1 : -1)) } }(e, null, t); for (var r, n = !0, i = c = u.length - 1; 0 <= i; i--)
                    if (0 !== u[i]) { var o = new w(n ? u[i] : Math.abs(u[i])),
                            a = u[i] < 0 ? "-" : "+"; if (0 < i) { var s = new p(f); if (1 < i) { var l = new w(i);
                                s = new N("^", "pow", [s, l]) }
                            o = -1 === u[i] && n ? new N("-", "unaryMinus", [s]) : 1 === Math.abs(u[i]) ? s : new N("*", "multiply", [o, s]) }
                        r = n ? o : "+" === a ? new N("+", "add", [r, o]) : new N("-", "subtract", [r, o]), n = !1 }
                return n ? new w(0) : r } return o } }, function(e, t, a) { "use strict";
        t.name = "qr", t.factory = function(e, t, r, n) { var i = r(a(1)),
                x = r(a(41)),
                b = r(a(48)),
                w = r(a(59)),
                N = r(a(123)),
                M = r(a(124)),
                E = r(a(45)),
                A = r(a(69)),
                S = r(a(34)),
                O = r(a(17)),
                T = r(a(12)),
                _ = r(a(21)),
                C = r(a(15));

            function o(e) { var t, r, n, i = e._size[0],
                    o = e._size[1],
                    a = b([i], "dense"),
                    s = a._data,
                    u = e.clone(),
                    c = u._data,
                    f = x([i], ""); for (n = 0; n < Math.min(o, i); ++n) { var l = c[n][n],
                        p = S(M(l)),
                        m = A(p),
                        h = 0; for (t = n; t < i; t++) h = O(h, _(c[t][n], A(c[t][n]))); var d = _(p, E(h)); if (!w(d)) { var y = C(l, d); for (t = n + (f[n] = 1); t < i; t++) f[t] = T(c[t][n], y); var g = S(A(T(y, d))),
                            v = void 0; for (r = n; r < o; r++) { for (v = 0, t = n; t < i; t++) v = O(v, _(A(f[t]), c[t][r])); for (v = _(v, g), t = n; t < i; t++) c[t][r] = _(C(c[t][r], _(f[t], v)), m) } for (t = 0; t < i; t++) { for (v = 0, r = n; r < i; r++) v = O(v, _(s[t][r], f[r])); for (v = _(v, g), r = n; r < i; ++r) s[t][r] = T(C(s[t][r], _(v, A(f[r]))), m) } } } for (t = 0; t < i; ++t)
                    for (r = 0; r < t && r < o; ++r) { if (N(0, T(c[t][r], 1e5))) throw new Error("math.qr(): unknown error - R is not lower triangular (element (" + t + ", " + r + ")  = " + c[t][r] + ")");
                        c[t][r] = _(c[t][r], 0) }
                return { Q: a, R: u, toString: function() { return "Q: " + this.Q.toString() + "\nR: " + this.R.toString() } } } return n("qr", { DenseMatrix: function(e) { return o(e) }, SparseMatrix: function(e) { return function(e) { throw new Error("qr not implemented for sparse matrices yet") }() }, Array: function(e) { var t = o(i(e)); return { Q: t.Q.valueOf(), R: t.R.valueOf() } } }) } }, function(e, t, n) { "use strict";
        t.name = "csSqr", t.path = "algebra.sparse", t.factory = function(e, t, r) { var c = r(n(203)),
                f = r(n(205)),
                l = r(n(206)),
                p = r(n(207)),
                m = r(n(208)); return function(e, t, r) { var n, i = t._ptr,
                    o = t._size[1],
                    a = {}; if (a.q = c(e, t), e && !a.q) return null; if (r) { var s = e ? f(t, null, a.q, 0) : t;
                    a.parent = l(s, 1); var u = p(a.parent, o); if (a.cp = m(s, a.parent, u, 1), s && a.parent && a.cp && function(e, t) { var r = e._ptr,
                                n = e._index,
                                i = e._size,
                                o = i[0],
                                a = i[1];
                            t.pinv = [], t.leftmost = []; var s, u, c, f, l, p = t.parent,
                                m = t.pinv,
                                h = t.leftmost,
                                d = [],
                                y = o,
                                g = o + a,
                                v = o + 2 * a; for (u = 0; u < a; u++) d[y + u] = -1, d[g + u] = -1, d[v + u] = 0; for (s = 0; s < o; s++) h[s] = -1; for (u = a - 1; 0 <= u; u--)
                                for (f = r[u], l = r[u + 1], c = f; c < l; c++) h[n[c]] = u; for (s = o - 1; 0 <= s; s--)(m[s] = -1) !== (u = h[s]) && (0 == d[v + u]++ && (d[g + u] = s), d[0 + s] = d[y + u], d[y + u] = s); for (t.lnz = 0, t.m2 = o, u = 0; u < a; u++)
                                if (s = d[y + u], t.lnz++, s < 0 && (s = t.m2++), m[s] = u, !(--v[u] <= 0)) { t.lnz += d[v + u]; var x = p[u]; - 1 !== x && (0 === d[v + x] && (d[g + x] = d[g + u]), d[0 + d[g + u]] = d[y + x], d[y + x] = d[0 + s], d[v + x] += d[v + u]) }
                            for (s = 0; s < o; s++) m[s] < 0 && (m[s] = u++); return !0 }(s, a))
                        for (n = a.unz = 0; n < o; n++) a.unz += a.cp[n] } else a.unz = 4 * i[o] + o, a.lnz = a.unz; return a } } }, function(e, t, n) { "use strict";
        t.name = "csAmd", t.path = "algebra.sparse", t.factory = function(e, t, r) { var K = r(n(85)),
                ee = r(n(204)),
                te = r(n(126)),
                re = r(n(14)),
                ne = r(n(10)),
                ie = r(n(70));

            function oe(e, t, r, n, i) { if (e < 2 || e + t < 0) { for (var o = 0; o < i; o++) 0 !== r[n + o] && (r[n + o] = 1);
                    e = 2 } return e }

            function ae(e, t) { return e !== t } return function(e, t) { if (!t || e <= 0 || 3 < e) return null; var r = t._size,
                    n = r[0],
                    i = r[1],
                    o = 0,
                    a = Math.max(16, 10 * Math.sqrt(i)),
                    s = function(e, t, r, n, i) { var o = ie(t); if (1 === e && n === r) return re(t, o); if (2 !== e) return ne(o, t); for (var a = o._index, s = o._ptr, u = 0, c = 0; c < r; c++) { var f = s[c]; if (s[c] = u, !(s[c + 1] - f > i))
                                for (var l = s[c + 1]; f < l; f++) a[u++] = a[f] } return s[r] = u, t = ie(o), ne(o, t) }(e, t, n, i, a = Math.min(i - 2, a));
                ee(s, ae, null); for (var u, c, f, l, p, m, h, d, y, g, v, x, b, w, N, M, E = s._index, A = s._ptr, S = A[i], O = [], T = [], _ = i + 1, C = 2 * (i + 1), z = 3 * (i + 1), B = 4 * (i + 1), k = 5 * (i + 1), I = 6 * (i + 1), P = 7 * (i + 1), R = O, U = function(e, t, r, n, i, o, a, s, u, c, f, l) { for (var p = 0; p < e; p++) r[n + p] = t[p + 1] - t[p]; for (var m = r[n + e] = 0; m <= e; m++) r[i + m] = -1, o[m] = -1, r[a + m] = -1, r[s + m] = -1, r[u + m] = 1, r[c + m] = 1, r[f + m] = 0, r[l + m] = r[n + m]; var h = oe(0, 0, r, c, e); return r[f + e] = -2, t[e] = -1, r[c + e] = 0, h }(i, A, T, 0, z, R, C, P, _, I, B, k), q = function(e, t, r, n, i, o, a, s, u, c, f) { for (var l = 0, p = 0; p < e; p++) { var m = r[n + p]; if (0 === m) r[i + p] = -2, l++, t[p] = -1, r[o + p] = 0;
                            else if (a < m) r[s + p] = 0, r[i + p] = -1, l++, t[p] = K(e), r[s + e]++;
                            else { var h = r[u + m]; - 1 !== h && (c[h] = p), r[f + p] = r[u + m], r[u + m] = p } } return l }(i, A, T, k, B, I, a, _, z, R, C), D = 0; q < i;) { for (f = -1; D < i && -1 === (f = T[z + D]); D++); - 1 !== T[C + f] && (R[T[C + f]] = -1), T[z + D] = T[C + f]; var L = T[B + f],
                        j = T[_ + f];
                    q += j; var F = 0;
                    T[_ + f] = -j; var H = A[f],
                        $ = 0 === L ? H : S,
                        G = $; for (l = 1; l <= L + 1; l++) { for (d = L < l ? (h = H, T[0 + (m = f)] - L) : (h = A[m = E[H++]], T[0 + m]), p = 1; p <= d; p++)(y = T[_ + (u = E[h++])]) <= 0 || (F += y, T[_ + u] = -y, -1 !== T[C + (E[G++] = u)] && (R[T[C + u]] = R[u]), -1 !== R[u] ? T[C + R[u]] = T[C + u] : T[z + T[k + u]] = T[C + u]);
                        m !== f && (A[m] = K(f), T[I + m] = 0) } for (0 !== L && (S = G), T[k + f] = F, A[f] = $, T[0 + f] = G - $, T[B + f] = -2, U = oe(U, o, T, I, i), g = $; g < G; g++)
                        if (!((v = T[B + (u = E[g])]) <= 0)) { var Z = U - (y = -T[_ + u]); for (H = A[u], x = A[u] + v - 1; H <= x; H++) T[I + (m = E[H])] >= U ? T[I + m] -= y : 0 !== T[I + m] && (T[I + m] = T[k + m] + Z) }
                    for (g = $; g < G; g++) { for (b = (x = A[u = E[g]]) + T[B + u] - 1, M = N = 0, H = w = x; H <= b; H++)
                            if (0 !== T[I + (m = E[H])]) { var V = T[I + m] - U;
                                0 < V ? (M += V, N += E[w++] = m) : (A[m] = K(f), T[I + m] = 0) }
                        T[B + u] = w - x + 1; var W = w,
                            J = x + T[0 + u]; for (H = b + 1; H < J; H++) { var Y = T[_ + (c = E[H])];
                            Y <= 0 || (M += Y, N += E[w++] = c) }
                        0 === M ? (A[u] = K(f), F -= y = -T[_ + u], j += y, q += y, T[_ + u] = 0, T[B + u] = -1) : (T[k + u] = Math.min(T[k + u], M), E[w] = E[W], E[W] = E[x], E[x] = f, T[0 + u] = w - x + 1, N = (N < 0 ? -N : N) % i, T[C + u] = T[P + N], R[T[P + N] = u] = N) } for (T[k + f] = F, U = oe(U + (o = Math.max(o, F)), o, T, I, i), g = $; g < G; g++)
                        if (!(0 <= T[_ + (u = E[g])]))
                            for (u = T[P + (N = R[u])], T[P + N] = -1; - 1 !== u && -1 !== T[C + u]; u = T[C + u], U++) { for (d = T[0 + u], v = T[B + u], H = A[u] + 1; H <= A[u] + d - 1; H++) T[I + E[H]] = U; var X = u; for (c = T[C + u]; - 1 !== c;) { var Q = T[0 + c] === d && T[B + c] === v; for (H = A[c] + 1; Q && H <= A[c] + d - 1; H++) T[I + E[H]] !== U && (Q = 0);
                                    Q ? (A[c] = K(u), T[_ + u] += T[_ + c], T[_ + c] = 0, T[B + c] = -1, c = T[C + c], T[C + X] = c) : c = T[C + (X = c)] } }
                        for (g = H = $; g < G; g++)(y = -T[_ + (u = E[g])]) <= 0 || (T[_ + u] = y, M = T[k + u] + F - y, -1 !== T[z + (M = Math.min(M, i - q - y))] && (R[T[z + M]] = u), T[C + u] = T[z + M], R[u] = -1, T[z + M] = u, D = Math.min(D, M), T[k + u] = M, E[H++] = u);
                    T[_ + f] = j, 0 == (T[0 + f] = H - $) && (A[f] = -1, T[I + f] = 0), 0 !== L && (S = H) } for (u = 0; u < i; u++) A[u] = K(A[u]); for (c = 0; c <= i; c++) T[z + c] = -1; for (c = i; 0 <= c; c--) 0 < T[_ + c] || (T[C + c] = T[z + A[c]], T[z + A[c]] = c); for (m = i; 0 <= m; m--) T[_ + m] <= 0 || -1 !== A[m] && (T[C + m] = T[z + A[m]], T[z + A[m]] = m); for (u = f = 0; u <= i; u++) - 1 === A[u] && (f = te(u, f, T, z, C, O, I)); return O.splice(O.length - 1, 1), O } } }, function(e, t, r) { "use strict";
        t.name = "csFkeep", t.path = "algebra.sparse", t.factory = function() { return function(e, t, r) { for (var n = e._values, i = e._index, o = e._ptr, a = e._size[1], s = 0, u = 0; u < a; u++) { var c = o[u]; for (o[u] = s; c < o[u + 1]; c++) t(i[c], u, n ? n[c] : 1, r) && (i[s] = i[c], n && (n[s] = n[c]), s++) } return o[a] = s, i.splice(s, i.length - s), n && n.splice(s, n.length - s), s } } }, function(e, t, r) { "use strict";
        t.name = "csPermute", t.path = "algebra.sparse", t.factory = function(e) { var w = e.SparseMatrix; return function(e, t, r, n) { for (var i = e._values, o = e._index, a = e._ptr, s = e._size, u = e._datatype, c = s[0], f = s[1], l = n && e._values ? [] : null, p = [], m = [], h = 0, d = 0; d < f; d++) { m[d] = h; for (var y = r ? r[d] : d, g = a[y], v = a[y + 1], x = g; x < v; x++) { var b = t ? t[o[x]] : o[x];
                        p[h] = b, l && (l[h] = i[x]), h++ } } return m[f] = h, new w({ values: l, index: p, ptr: m, size: [c, f], datatype: u }) } } }, function(e, t, r) { "use strict";
        t.name = "csEtree", t.path = "algebra.sparse", t.factory = function() { return function(e, t) { if (!e) return null; var r, n, i = e._index,
                    o = e._ptr,
                    a = e._size,
                    s = a[0],
                    u = a[1],
                    c = [],
                    f = [],
                    l = u; if (t)
                    for (r = 0; r < s; r++) f[l + r] = -1; for (var p = 0; p < u; p++) { c[p] = -1, f[0 + p] = -1; for (var m = o[p], h = o[p + 1], d = m; d < h; d++) { var y = i[d]; for (r = t ? f[l + y] : y; - 1 !== r && r < p; r = n) n = f[0 + r], f[0 + r] = p, -1 === n && (c[r] = p);
                        t && (f[l + y] = p) } } return c } } }, function(e, t, n) { "use strict";
        t.name = "csPost", t.path = "algebra.sparse", t.factory = function(e, t, r) { var u = r(n(126)); return function(e, t) { if (!e) return null; var r, n = 0,
                    i = [],
                    o = [],
                    a = t,
                    s = 2 * t; for (r = 0; r < t; r++) o[0 + r] = -1; for (r = t - 1; 0 <= r; r--) - 1 !== e[r] && (o[a + r] = o[0 + e[r]], o[0 + e[r]] = r); for (r = 0; r < t; r++) - 1 === e[r] && (n = u(r, n, o, 0, a, i, s)); return i } } }, function(e, t, n) { "use strict";
        t.name = "csCounts", t.path = "algebra.sparse", t.factory = function(e, t, r) { var S = r(n(70)),
                O = r(n(209)); return function(e, t, r, n) { if (!e || !t || !r) return null; var i, o, a, s, u, c, f, l = e._size,
                    p = l[0],
                    m = l[1],
                    h = 4 * m + (n ? m + p + 1 : 0),
                    d = [],
                    y = m,
                    g = 2 * m,
                    v = 3 * m,
                    x = 4 * m,
                    b = 5 * m + 1; for (a = 0; a < h; a++) d[a] = -1; var w = [],
                    N = S(e),
                    M = N._index,
                    E = N._ptr; for (a = 0; a < m; a++)
                    for (w[o = r[a]] = -1 === d[v + o] ? 1 : 0; - 1 !== o && -1 === d[v + o]; o = t[o]) d[v + o] = a; if (n) { for (a = 0; a < m; a++) d[r[a]] = a; for (i = 0; i < p; i++) { for (a = m, c = E[i], f = E[i + 1], u = c; u < f; u++) a = Math.min(a, d[M[u]]);
                        d[b + i] = d[x + a], d[x + a] = i } } for (i = 0; i < m; i++) d[0 + i] = i; for (a = 0; a < m; a++) { for (-1 !== t[o = r[a]] && w[t[o]]--, s = n ? d[x + a] : o; - 1 !== s; s = n ? d[b + s] : -1)
                        for (u = E[s]; u < E[s + 1]; u++) { i = M[u]; var A = O(i, o, d, v, y, g, 0);
                            1 <= A.jleaf && w[o]++, 2 === A.jleaf && w[A.q]-- } - 1 !== t[o] && (d[0 + o] = t[o]) } for (o = 0; o < m; o++) - 1 !== t[o] && (w[t[o]] += w[o]); return w } } }, function(e, t, r) { "use strict";
        t.name = "csLeaf", t.path = "algebra.sparse", t.factory = function() { return function(e, t, r, n, i, o, a) { var s, u, c, f, l = 0; if (e <= t || r[n + t] <= r[i + e]) return -1; if (r[i + e] = r[n + t], c = r[o + e], r[o + e] = t, -1 === c) l = 1, f = e;
                else { for (l = 2, f = c; f !== r[a + f]; f = r[a + f]); for (s = c; s !== f; s = u) u = r[a + s], r[a + s] = f } return { jleaf: l, q: f } } } }, function(e, t, n) { "use strict";
        t.name = "csLu", t.path = "algebra.sparse", t.factory = function(e, t, r) { var O = r(n(23)),
                T = r(n(12)),
                _ = r(n(10)),
                C = r(n(33)),
                z = r(n(127)),
                B = r(n(211)),
                k = e.SparseMatrix; return function(e, t, r) { if (!e) return null; var n, i = e._size[1],
                    o = 100,
                    a = 100;
                t && (n = t.q, o = t.lnz || o, a = t.unz || a); var s, u, c = [],
                    f = [],
                    l = [],
                    p = new k({ values: c, index: f, ptr: l, size: [i, i] }),
                    m = [],
                    h = [],
                    d = [],
                    y = new k({ values: m, index: h, ptr: d, size: [i, i] }),
                    g = [],
                    v = [],
                    x = []; for (s = 0; s < i; s++) v[s] = 0, g[s] = -1, l[s + 1] = 0; for (var b = a = o = 0; b < i; b++) { l[b] = o, d[b] = a; var w = n ? n[b] : b,
                        N = B(p, e, w, x, v, g, 1),
                        M = -1,
                        E = -1; for (u = N; u < i; u++)
                        if (g[s = x[u]] < 0) { var A = O(v[s]);
                            C(A, E) && (E = A, M = s) } else h[a] = g[s], m[a++] = v[s];
                    if (-1 === M || E <= 0) return null;
                    g[w] < 0 && z(O(v[w]), _(E, r)) && (M = w); var S = v[M]; for (h[a] = b, m[a++] = S, g[M] = b, f[o] = M, c[o++] = 1, u = N; u < i; u++) g[s = x[u]] < 0 && (f[o] = s, c[o++] = T(v[s], S)), v[s] = 0 } for (l[i] = o, d[i] = a, u = 0; u < o; u++) f[u] = g[f[u]]; return c.splice(o, c.length - o), f.splice(o, f.length - o), m.splice(a, m.length - a), h.splice(a, h.length - a), { L: p, U: y, pinv: g } } } }, function(e, t, n) { "use strict";
        t.name = "csSpsolve", t.path = "algebra.sparse", t.factory = function(e, t, r) { var M = r(n(12)),
                E = r(n(10)),
                A = r(n(15)),
                S = r(n(212)); return function(e, t, r, n, i, o, a) { var s, u, c, f, l = e._values,
                    p = e._index,
                    m = e._ptr,
                    h = e._size[1],
                    d = t._values,
                    y = t._index,
                    g = t._ptr,
                    v = S(e, t, r, n, o); for (s = v; s < h; s++) i[n[s]] = 0; for (u = g[r], c = g[r + 1], s = u; s < c; s++) i[y[s]] = d[s]; for (var x = v; x < h; x++) { var b = n[x],
                        w = o ? o[b] : b; if (!(w < 0))
                        for (u = m[w], c = m[w + 1], i[b] = M(i[b], l[a ? u : c - 1]), s = a ? u + 1 : u, f = a ? c : c - 1; s < f; s++) { var N = p[s];
                            i[N] = A(i[N], E(l[s], i[b])) } } return v } } }, function(e, t, n) { "use strict";
        t.name = "csReach", t.path = "algebra.sparse", t.factory = function(e, t, r) { var d = r(n(213)),
                y = r(n(128)),
                g = r(n(129)); return function(e, t, r, n, i) { var o, a, s, u = e._ptr,
                    c = e._size,
                    f = t._index,
                    l = t._ptr,
                    p = c[1],
                    m = p; for (a = l[r], s = l[r + 1], o = a; o < s; o++) { var h = f[o];
                    y(u, h) || (m = d(h, e, m, n, i)) } for (o = m; o < p; o++) g(u, n[o]); return m } } }, function(e, t, n) { "use strict";
        t.name = "csDfs", t.path = "algebra.sparse", t.factory = function(e, t, r) { var h = r(n(128)),
                d = r(n(129)),
                y = r(n(214)); return function(e, t, r, n, i) { var o, a, s, u = t._index,
                    c = t._ptr,
                    f = t._size[1],
                    l = 0; for (n[0] = e; 0 <= l;) { e = n[l]; var p = i ? i[e] : e;
                    h(c, e) || (d(c, e), n[f + l] = p < 0 ? 0 : y(c[p])); var m = 1; for (a = n[f + l], s = p < 0 ? 0 : y(c[p + 1]); a < s; a++)
                        if (o = u[a], !h(c, o)) { n[f + l] = a, n[++l] = o, m = 0; break }
                    m && (l--, n[--r] = e) } return r } } }, function(e, t, i) { "use strict";
        t.name = "csUnflip", t.path = "algebra.sparse", t.factory = function(e, t, r) { var n = r(i(85)); return function(e) { return e < 0 ? n(e) : e } } }, function(e, t, h) { "use strict"; var d = Array.isArray;
        t.name = "lusolve", t.factory = function(t, e, r, n) { var i = r(h(1)),
                o = r(h(84)),
                a = r(h(125)),
                s = r(h(216)),
                u = r(h(86)),
                c = r(h(131)),
                f = r(h(130)),
                l = n("lusolve", { "Array, Array | Matrix": function(e, t) { e = i(e); var r = o(e); return m(r.L, r.U, r.p, null, t).valueOf() }, "DenseMatrix, Array | Matrix": function(e, t) { var r = o(e); return m(r.L, r.U, r.p, null, t) }, "SparseMatrix, Array | Matrix": function(e, t) { var r = o(e); return m(r.L, r.U, r.p, null, t) }, "SparseMatrix, Array | Matrix, number, number": function(e, t, r, n) { var i = a(e, r, n); return m(i.L, i.U, i.p, i.q, t) }, "Object, Array | Matrix": function(e, t) { return m(e.L, e.U, e.p, e.q, t) } }),
                p = function(e) { if (t.isMatrix(e)) return e; if (d(e)) return i(e); throw new TypeError("Invalid Matrix LU decomposition") };

            function m(e, t, r, n, i) { e = p(e), t = p(t), i = u(e, i, !1), r && (i._data = s(r, i._data)); var o = f(e, i),
                    a = c(t, o); return n && (a._data = s(n, a._data)), a } return l } }, function(e, t, r) { "use strict";
        t.name = "csIpvec", t.path = "algebra.sparse", t.factory = function() { return function(e, t) { var r, n = t.length,
                    i = []; if (e)
                    for (r = 0; r < n; r++) i[e[r]] = t[r];
                else
                    for (r = 0; r < n; r++) i[r] = t[r]; return i } } }, function(e, t, r) { "use strict";
        e.exports = [r(23), r(14), r(17), r(218), r(219), r(220), r(44), r(132), r(221), r(222), r(223), r(224), r(103), r(225), r(226), r(227), r(228), r(87), r(230), r(231), r(232), r(233), r(10), r(234), r(235), r(236), r(40), r(104), r(124), r(45), r(237), r(15), r(34), r(238), r(239)] }, function(e, t, n) { "use strict"; var i = n(0); var l = Math.cbrt || function(e) { if (0 === e) return e; var t, r = e < 0; return r && (e = -e), t = isFinite(e) ? (e / ((t = Math.exp(Math.log(e) / 3)) * t) + 2 * t) / 3 : e, r ? -t : t };
        t.name = "cbrt", t.factory = function(a, s, e, t) { var o = e(n(34)),
                u = e(n(60)),
                c = e(n(1)),
                r = t("cbrt", { number: l, Complex: f, "Complex, boolean": f, BigNumber: function(e) { return e.cbrt() }, Unit: function(e) { if (e.value && a.isComplex(e.value)) { var t = e.clone(); return t.value = 1, (t = t.pow(1 / 3)).value = f(e.value), t } var r, n = u(e.value);
                        n && (e.value = o(e.value)), r = a.isBigNumber(e.value) ? new a.BigNumber(1).div(3) : a.isFraction(e.value) ? new a.Fraction(1, 3) : 1 / 3; var i = e.pow(r); return n && (i.value = o(i.value)), i }, "Array | Matrix": function(e) { return i(e, r, !0) } });

            function f(e, t) { var r = e.arg() / 3,
                    n = e.abs(),
                    i = new a.Complex(l(n), 0).mul(new a.Complex(0, r).exp()); if (t) { var o = [i, new a.Complex(l(n), 0).mul(new a.Complex(0, r + 2 * Math.PI / 3).exp()), new a.Complex(l(n), 0).mul(new a.Complex(0, r - 2 * Math.PI / 3).exp())]; return "Array" === s.matrix ? o : c(o) } return i } return r.toTex = { 1: "\\sqrt[3]{${args[0]}}" }, r } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "ceil", t.factory = function(e, t, r, n) { var i = n("ceil", { number: Math.ceil, Complex: function(e) { return e.ceil() }, BigNumber: function(e) { return e.ceil() }, Fraction: function(e) { return e.ceil() }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\left\\lceil${args[0]}\\right\\rceil" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "cube", t.factory = function(e, t, r, n) { var i = n("cube", { number: function(e) { return e * e * e }, Complex: function(e) { return e.mul(e).mul(e) }, BigNumber: function(e) { return e.times(e).times(e) }, Fraction: function(e) { return e.pow(3) }, "Array | Matrix": function(e) { return o(e, i, !0) }, Unit: function(e) { return e.pow(3) } }); return i.toTex = { 1: "\\left(${args[0]}\\right)^3" }, i } }, function(e, t, m) { "use strict";
        t.name = "dotMultiply", t.factory = function(e, t, r, n) { var i = r(m(1)),
                o = r(m(21)),
                a = m(4),
                s = r(m(25)),
                u = r(m(133)),
                c = r(m(20)),
                f = r(m(7)),
                l = r(m(6)),
                p = n("dotMultiply", { "any, any": o, "SparseMatrix, SparseMatrix": function(e, t) { return u(e, t, o, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return s(t, e, o, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return s(e, t, o, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return f(e, t, o) }, "Array, Array": function(e, t) { return p(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return p(i(e), t) }, "Matrix, Array": function(e, t) { return p(e, i(t)) }, "SparseMatrix, any": function(e, t) { return c(e, t, o, !1) }, "DenseMatrix, any": function(e, t) { return l(e, t, o, !1) }, "any, SparseMatrix": function(e, t) { return c(t, e, o, !0) }, "any, DenseMatrix": function(e, t) { return l(t, e, o, !0) }, "Array, any": function(e, t) { return l(i(e), t, o, !1).valueOf() }, "any, Array": function(e, t) { return l(i(t), e, o, !0).valueOf() } }); return p.toTex = { 2: "\\left(${args[0]}".concat(a.operators.dotMultiply, "${args[1]}\\right)") }, p } }, function(e, t, h) { "use strict";
        t.name = "dotPow", t.factory = function(e, t, r, n) { var i = r(h(1)),
                o = r(h(40)),
                a = h(4),
                s = r(h(18)),
                u = r(h(27)),
                c = r(h(20)),
                f = r(h(19)),
                l = r(h(7)),
                p = r(h(6)),
                m = n("dotPow", { "any, any": o, "SparseMatrix, SparseMatrix": function(e, t) { return u(e, t, o, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return s(t, e, o, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return s(e, t, o, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return l(e, t, o) }, "Array, Array": function(e, t) { return m(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return m(i(e), t) }, "Matrix, Array": function(e, t) { return m(e, i(t)) }, "SparseMatrix, any": function(e, t) { return c(e, t, m, !1) }, "DenseMatrix, any": function(e, t) { return p(e, t, m, !1) }, "any, SparseMatrix": function(e, t) { return f(t, e, m, !0) }, "any, DenseMatrix": function(e, t) { return p(t, e, m, !0) }, "Array, any": function(e, t) { return p(i(e), t, m, !1).valueOf() }, "any, Array": function(e, t) { return p(i(t), e, m, !0).valueOf() } }); return m.toTex = { 2: "\\left(${args[0]}".concat(a.operators.dotPow, "${args[1]}\\right)") }, m } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "exp", t.factory = function(e, t, r, n) { var i = n("exp", { number: Math.exp, Complex: function(e) { return e.exp() }, BigNumber: function(e) { return e.exp() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\exp\\left(${args[0]}\\right)" }, i } }, function(e, t, a) { "use strict"; var s = a(0);
        t.name = "expm1", t.factory = function(r, e, t, n) { var i = a(4),
                o = n("expm1", { number: Math.expm1 || function(e) { return 2e-4 <= e || e <= -2e-4 ? Math.exp(e) - 1 : e + e * e / 2 + e * e * e / 6 }, Complex: function(e) { var t = Math.exp(e.re); return new r.Complex(t * Math.cos(e.im) - 1, t * Math.sin(e.im)) }, BigNumber: function(e) { return e.exp().minus(1) }, "Array | Matrix": function(e) { return s(e, o) } }); return o.toTex = "\\left(e".concat(i.operators.pow, "{${args[0]}}-1\\right)"), o } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "floor", t.factory = function(e, t, r, n) { var i = n("floor", { number: Math.floor, Complex: function(e) { return e.floor() }, BigNumber: function(e) { return e.floor() }, Fraction: function(e) { return e.floor() }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\left\\lfloor${args[0]}\\right\\rfloor" }, i } }, function(e, t, l) { "use strict"; var n = l(3).isInteger;

        function p(e, t) { if (!n(e) || !n(t)) throw new Error("Parameters in function gcd must be integer numbers"); for (var r; 0 !== t;) r = e % t, e = t, t = r; return e < 0 ? -e : e }
        t.name = "gcd", t.factory = function(i, e, t, r) { var n = t(l(1)),
                o = t(l(32)),
                a = t(l(82)),
                s = t(l(38)),
                u = t(l(7)),
                c = t(l(6)),
                f = r("gcd", { "number, number": p, "BigNumber, BigNumber": function(e, t) { if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function gcd must be integer numbers"); for (var r = new i.BigNumber(0); !t.isZero();) { var n = e.mod(t);
                            e = t, t = n } return e.lt(r) ? e.neg() : e }, "Fraction, Fraction": function(e, t) { return e.gcd(t) }, "SparseMatrix, SparseMatrix": function(e, t) { return a(e, t, f) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, f, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return o(e, t, f, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return u(e, t, f) }, "Array, Array": function(e, t) { return f(n(e), n(t)).valueOf() }, "Array, Matrix": function(e, t) { return f(n(e), t) }, "Matrix, Array": function(e, t) { return f(e, n(t)) }, "SparseMatrix, number | BigNumber": function(e, t) { return s(e, t, f, !1) }, "DenseMatrix, number | BigNumber": function(e, t) { return c(e, t, f, !1) }, "number | BigNumber, SparseMatrix": function(e, t) { return s(t, e, f, !0) }, "number | BigNumber, DenseMatrix": function(e, t) { return c(t, e, f, !0) }, "Array, number | BigNumber": function(e, t) { return c(n(e), t, f, !1).valueOf() }, "number | BigNumber, Array": function(e, t) { return c(n(t), e, f, !0).valueOf() }, "Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function(e, t, r) { for (var n = f(e, t), i = 0; i < r.length; i++) n = f(n, r[i]); return n } }); return f.toTex = "\\gcd\\left(${args}\\right)", f } }, function(e, t, p) { "use strict"; var m = p(2).flatten;
        t.name = "hypot", t.factory = function(e, t, r, n) { var o = r(p(23)),
                a = r(p(17)),
                s = r(p(12)),
                u = r(p(21)),
                c = r(p(45)),
                f = r(p(39)),
                l = r(p(71)),
                i = n("hypot", { "... number | BigNumber": function(e) { for (var t = 0, r = 0, n = 0; n < e.length; n++) { var i = o(e[n]);
                            f(r, i) ? (t = u(t, u(s(r, i), s(r, i))), t = a(t, 1), r = i) : t = a(t, l(i) ? u(s(i, r), s(i, r)) : i) } return u(r, c(t)) }, Array: function(e) { return i.apply(i, m(e)) }, Matrix: function(e) { return i.apply(i, m(e.toArray())) } }); return i.toTex = "\\hypot\\left(${args}\\right)", i } }, function(e, t, l) { "use strict"; var i = l(3).isInteger;

        function p(e, t) { if (!i(e) || !i(t)) throw new Error("Parameters in function lcm must be integer numbers"); if (0 === e || 0 === t) return 0; for (var r, n = e * t; 0 !== t;) t = e % (r = t), e = r; return Math.abs(n / e) }
        t.name = "lcm", t.factory = function(i, e, t, r) { var n = t(l(1)),
                o = t(l(25)),
                a = t(l(72)),
                s = t(l(20)),
                u = t(l(7)),
                c = t(l(6)),
                f = r("lcm", { "number, number": p, "BigNumber, BigNumber": function(e, t) { if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function lcm must be integer numbers"); if (e.isZero() || t.isZero()) return new i.BigNumber(0); for (var r = e.times(t); !t.isZero();) { var n = t;
                            t = e.mod(n), e = n } return r.div(e).abs() }, "Fraction, Fraction": function(e, t) { return e.lcm(t) }, "SparseMatrix, SparseMatrix": function(e, t) { return a(e, t, f) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, f, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return o(e, t, f, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return u(e, t, f) }, "Array, Array": function(e, t) { return f(n(e), n(t)).valueOf() }, "Array, Matrix": function(e, t) { return f(n(e), t) }, "Matrix, Array": function(e, t) { return f(e, n(t)) }, "SparseMatrix, number | BigNumber": function(e, t) { return s(e, t, f, !1) }, "DenseMatrix, number | BigNumber": function(e, t) { return c(e, t, f, !1) }, "number | BigNumber, SparseMatrix": function(e, t) { return s(t, e, f, !0) }, "number | BigNumber, DenseMatrix": function(e, t) { return c(t, e, f, !0) }, "Array, number | BigNumber": function(e, t) { return c(n(e), t, f, !1).valueOf() }, "number | BigNumber, Array": function(e, t) { return c(n(t), e, f, !0).valueOf() }, "Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function(e, t, r) { for (var n = f(e, t), i = 0; i < r.length; i++) n = f(n, r[i]); return n } }); return f.toTex = void 0, f } }, function(e, t, r) { "use strict";
        e.exports = function(e, t, r, n, i, o, a, s, u, c, f) { var l, p, m, h, d = e._values,
                y = e._index,
                g = e._ptr,
                v = a._index; if (n)
                for (p = g[t], m = g[t + 1], l = p; l < m; l++) r[h = y[l]] !== o ? (r[h] = o, v.push(h), c ? (n[h] = u ? s(d[l], f) : s(f, d[l]), i[h] = o) : n[h] = d[l]) : (n[h] = u ? s(d[l], n[h]) : s(n[h], d[l]), i[h] = o);
            else
                for (p = g[t], m = g[t + 1], l = p; l < m; l++) r[h = y[l]] !== o ? (r[h] = o, v.push(h)) : i[h] = o } }, function(e, t, r) { "use strict"; var o = r(0); var a = Math.log10 || function(e) { return Math.log(e) / Math.LN10 };
        t.name = "log10", t.factory = function(t, r, e, n) { var i = n("log10", { number: function(e) { return 0 <= e || r.predictable ? a(e) : new t.Complex(e, 0).log().div(Math.LN10) }, Complex: function(e) { return new t.Complex(e).log().div(Math.LN10) }, BigNumber: function(e) { return !e.isNegative() || r.predictable ? e.log() : new t.Complex(e.toNumber(), 0).log().div(Math.LN10) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\log_{10}\\left(${args[0]}\\right)" }, i } }, function(e, t, u) { "use strict"; var c = u(0);
        t.name = "log1p", t.factory = function(r, n, e, t) { var i = e(u(12)),
                o = e(u(87)),
                a = t("log1p", { number: function(e) { return -1 <= e || n.predictable ? Math.log1p ? Math.log1p(e) : Math.log(e + 1) : s(new r.Complex(e, 0)) }, Complex: s, BigNumber: function(e) { var t = e.plus(1); return !t.isNegative() || n.predictable ? t.ln() : s(new r.Complex(e.toNumber(), 0)) }, "Array | Matrix": function(e) { return c(e, a) }, "any, any": function(e, t) { return i(a(e), o(t)) } });

            function s(e) { var t = e.re + 1; return new r.Complex(Math.log(Math.sqrt(t * t + e.im * e.im)), Math.atan2(e.im, t)) } return a.toTex = { 1: "\\ln\\left(${args[0]}+1\\right)", 2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)" }, a } }, function(e, t, r) { "use strict"; var a = r(0);
        t.name = "log2", t.factory = function(r, t, e, n) { var i = n("log2", { number: function(e) { return 0 <= e || t.predictable ? Math.log2 ? Math.log2(e) : Math.log(e) / Math.LN2 : o(new r.Complex(e, 0)) }, Complex: o, BigNumber: function(e) { return !e.isNegative() || t.predictable ? e.log(2) : o(new r.Complex(e.toNumber(), 0)) }, "Array | Matrix": function(e) { return a(e, i) } });

            function o(e) { var t = Math.sqrt(e.re * e.re + e.im * e.im); return new r.Complex(Math.log2 ? Math.log2(t) : Math.log(t) / Math.LN2, Math.atan2(e.im, e.re) / Math.LN2) } return i.toTex = "\\log_{2}\\left(${args[0]}\\right)", i } }, function(e, t, h) { "use strict";
        t.name = "mod", t.factory = function(e, t, r, n) { var i = r(h(1)),
                o = h(4),
                a = r(h(25)),
                s = r(h(18)),
                u = r(h(65)),
                c = r(h(20)),
                f = r(h(19)),
                l = r(h(7)),
                p = r(h(6)),
                m = n("mod", { "number, number": function(e, t) { if (0 < t) return e - t * Math.floor(e / t); if (0 === t) return e; throw new Error("Cannot calculate mod for a negative divisor") }, "BigNumber, BigNumber": function(e, t) { return t.isZero() ? e : e.mod(t) }, "Fraction, Fraction": function(e, t) { return e.mod(t) }, "SparseMatrix, SparseMatrix": function(e, t) { return u(e, t, m, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return a(t, e, m, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return s(e, t, m, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return l(e, t, m) }, "Array, Array": function(e, t) { return m(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return m(i(e), t) }, "Matrix, Array": function(e, t) { return m(e, i(t)) }, "SparseMatrix, any": function(e, t) { return c(e, t, m, !1) }, "DenseMatrix, any": function(e, t) { return p(e, t, m, !1) }, "any, SparseMatrix": function(e, t) { return f(t, e, m, !0) }, "any, DenseMatrix": function(e, t) { return p(t, e, m, !0) }, "Array, any": function(e, t) { return p(i(e), t, m, !1).valueOf() }, "any, Array": function(e, t) { return p(i(t), e, m, !0).valueOf() } }); return m.toTex = { 2: "\\left(${args[0]}".concat(o.operators.mod, "${args[1]}\\right)") }, m } }, function(e, t, a) { "use strict";
        t.name = "norm", t.factory = function(e, t, r, n) { var l = r(a(23)),
                p = r(a(14)),
                m = r(a(40)),
                h = r(a(69)),
                d = r(a(45)),
                y = r(a(10)),
                g = r(a(11)),
                v = r(a(33)),
                x = r(a(39)),
                i = r(a(1)),
                o = n("norm", { number: Math.abs, Complex: function(e) { return e.abs() }, BigNumber: function(e) { return e.abs() }, boolean: function(e) { return Math.abs(e) }, Array: function(e) { return b(i(e), 2) }, Matrix: function(e) { return b(e, 2) }, "number | Complex | BigNumber | boolean, number | BigNumber | string": function(e) { return o(e) }, "Array, number | BigNumber | string": function(e, t) { return b(i(e), t) }, "Matrix, number | BigNumber | string": function(e, t) { return b(e, t) } });

            function b(e, t) { var r = e.size(); if (1 === r.length) { if (t === Number.POSITIVE_INFINITY || "inf" === t) { var n = 0; return e.forEach(function(e) { var t = l(e);
                            v(t, n) && (n = t) }, !0), n } var i; if (t === Number.NEGATIVE_INFINITY || "-inf" === t) return e.forEach(function(e) { var t = l(e);
                        i && !x(t, i) || (i = t) }, !0), i || 0; if ("fro" === t) return b(e, 2); if ("number" != typeof t || isNaN(t)) throw new Error("Unsupported parameter value"); if (g(t, 0)) return Number.POSITIVE_INFINITY; var o = 0; return e.forEach(function(e) { o = p(m(l(e), t), o) }, !0), m(o, 1 / t) } if (2 === r.length) { if (1 === t) { var a = [],
                            s = 0; return e.forEach(function(e, t) { var r = t[1],
                                n = p(a[r] || 0, l(e));
                            v(n, s) && (s = n), a[r] = n }, !0), s } if (t === Number.POSITIVE_INFINITY || "inf" === t) { var u = [],
                            c = 0; return e.forEach(function(e, t) { var r = t[0],
                                n = p(u[r] || 0, l(e));
                            v(n, c) && (c = n), u[r] = n }, !0), c } if ("fro" === t) { var f = 0; return e.forEach(function(e, t) { f = p(f, y(e, h(e))) }), l(d(f)) } if (2 === t) throw new Error("Unsupported parameter value, missing implementation of matrix singular value decomposition"); throw new Error("Unsupported parameter value") } } return o.toTex = { 1: "\\left\\|${args[0]}\\right\\|", 2: void 0 }, o } }, function(e, t, h) { "use strict";

        function d(e, t) { var r = t < 0; if (r && (t = -t), 0 === t) throw new Error("Root must be non-zero"); if (e < 0 && Math.abs(t) % 2 != 1) throw new Error("Root must be odd when a is negative."); if (0 === e) return r ? 1 / 0 : 0; if (!isFinite(e)) return r ? 0 : e; var n = Math.pow(Math.abs(e), 1 / t); return n = e < 0 ? -n : n, r ? 1 / n : n }
        t.name = "nthRoot", t.factory = function(u, e, t, r) { var n = t(h(1)),
                i = t(h(32)),
                o = t(h(25)),
                a = t(h(72)),
                s = t(h(20)),
                c = t(h(7)),
                f = t(h(6)),
                l = "Complex number not supported in function nthRoot. Use nthRoots instead.",
                p = r("nthRoot", { number: function(e) { return d(e, 2) }, "number, number": d, BigNumber: function(e) { return m(e, new u.BigNumber(2)) }, Complex: function(e) { throw new Error(l) }, "Complex, number": function(e, t) { throw new Error(l) }, "BigNumber, BigNumber": m, "Array | Matrix": function(e) { return p(e, 2) }, "SparseMatrix, SparseMatrix": function(e, t) { if (1 === t.density()) return a(e, t, p); throw new Error("Root must be non-zero") }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, p, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { if (1 === t.density()) return i(e, t, p, !1); throw new Error("Root must be non-zero") }, "DenseMatrix, DenseMatrix": function(e, t) { return c(e, t, p) }, "Array, Array": function(e, t) { return p(n(e), n(t)).valueOf() }, "Array, Matrix": function(e, t) { return p(n(e), t) }, "Matrix, Array": function(e, t) { return p(e, n(t)) }, "SparseMatrix, number | BigNumber": function(e, t) { return s(e, t, p, !1) }, "DenseMatrix, number | BigNumber": function(e, t) { return f(e, t, p, !1) }, "number | BigNumber, SparseMatrix": function(e, t) { if (1 === t.density()) return s(t, e, p, !0); throw new Error("Root must be non-zero") }, "number | BigNumber, DenseMatrix": function(e, t) { return f(t, e, p, !0) }, "Array, number | BigNumber": function(e, t) { return p(n(e), t).valueOf() }, "number | BigNumber, Array": function(e, t) { return p(e, n(t)).valueOf() } }); return p.toTex = { 2: "\\sqrt[${args[1]}]{${args[0]}}" }, p;

            function m(e, t) { var r = u.BigNumber.precision,
                    n = u.BigNumber.clone({ precision: r + 2 }),
                    i = new u.BigNumber(0),
                    o = new n(1),
                    a = t.isNegative(); if (a && (t = t.neg()), t.isZero()) throw new Error("Root must be non-zero"); if (e.isNegative() && !t.abs().mod(2).equals(1)) throw new Error("Root must be odd when a is negative."); if (e.isZero()) return a ? new n(1 / 0) : 0; if (!e.isFinite()) return a ? i : e; var s = e.abs().pow(o.div(t)); return s = e.isNeg() ? s.neg() : s, new u.BigNumber((a ? o.div(s) : s).toPrecision(r)) } } }, function(e, t, r) { "use strict"; var n = r(79),
            i = r(97),
            f = n.factory("Complex", {}, "", i, { on: function(e, t) {} }); var l = [function(e) { return f(e) }, function(e) { return f(0, e) }, function(e) { return f(-e) }, function(e) { return f(0, -e) }];

        function o(e, t) { if (t < 0) throw new Error("Root must be greater than zero"); if (0 === t) throw new Error("Root must be non-zero"); if (t % 1 != 0) throw new Error("Root must be an integer"); if (0 === e || 0 === e.abs()) return [f(0)]; var r, n = "number" == typeof e;
            (n || 0 === e.re || 0 === e.im) && (r = n ? 2 * +(e < 0) : 0 === e.im ? 2 * +(e.re < 0) : 2 * +(e.im < 0) + 1); for (var i = e.arg(), o = e.abs(), a = [], s = Math.pow(o, 1 / t), u = 0; u < t; u++) { var c = (r + 4 * u) / t;
                c !== Math.round(c) ? a.push(f({ r: s, phi: (i + 2 * Math.PI * u) / t })) : a.push(l[c % 4](s)) } return a }
        t.name = "nthRoots", t.factory = function(e, t, r, n) { var i = n("nthRoots", { Complex: function(e) { return o(e, 2) }, "Complex, number": o }); return i.toTex = { 2: "\\{y : $y^{args[1]} = {${args[0]}}\\}" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "square", t.factory = function(e, t, r, n) { var i = n("square", { number: function(e) { return e * e }, Complex: function(e) { return e.mul(e) }, BigNumber: function(e) { return e.times(e) }, Fraction: function(e) { return e.mul(e) }, "Array | Matrix": function(e) { return o(e, i, !0) }, Unit: function(e) { return e.pow(2) } }); return i.toTex = { 1: "\\left(${args[0]}\\right)^2" }, i } }, function(e, t, a) { "use strict"; var s = a(0);
        t.name = "unaryPlus", t.factory = function(t, r, e, n) { var i = a(4),
                o = n("unaryPlus", { number: function(e) { return e }, Complex: function(e) { return e }, BigNumber: function(e) { return e }, Fraction: function(e) { return e }, Unit: function(e) { return e.clone() }, "Array | Matrix": function(e) { return s(e, o, !0) }, "boolean | string": function(e) { return "BigNumber" === r.number ? new t.BigNumber(+e) : +e } }); return o.toTex = { 1: "".concat(i.operators.unaryPlus, "\\left(${args[0]}\\right)") }, o } }, function(e, t, n) { "use strict"; var f = n(3).isInteger;
        t.name = "xgcd", t.factory = function(p, m, e, t) { var h = e(n(1)),
                r = t("xgcd", { "number, number": function(e, t) { var r, n, i, o, a = 0,
                            s = 1,
                            u = 1,
                            c = 0; if (!f(e) || !f(t)) throw new Error("Parameters in function xgcd must be integer numbers"); for (; t;) n = Math.floor(e / t), i = e - n * t, a = s - n * (r = a), s = r, u = c - n * (r = u), c = r, e = t, t = i; return o = e < 0 ? [-e, -s, -c] : [e, e ? s : 0, c], "Array" === m.matrix ? o : h(o) }, "BigNumber, BigNumber": function(e, t) { var r, n, i, o, a = new p.BigNumber(0),
                            s = new p.BigNumber(1),
                            u = a,
                            c = s,
                            f = s,
                            l = a; if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function xgcd must be integer numbers"); for (; !t.isZero();) n = e.div(t).floor(), i = e.mod(t), r = u, u = c.minus(n.times(u)), c = r, r = f, f = l.minus(n.times(f)), l = r, e = t, t = i; return o = e.lt(a) ? [e.neg(), c.neg(), l.neg()] : [e, e.isZero() ? 0 : c, l], "Array" === m.matrix ? o : h(o) } }); return r.toTex = void 0, r } }, function(e, t, r) { "use strict";
        e.exports = [r(241), r(243), r(244), r(246), r(248), r(250), r(252)] }, function(e, t, p) { "use strict"; var m = p(3).isInteger,
            h = p(242);
        t.name = "bitAnd", t.factory = function(e, t, r, n) { var i = p(4),
                o = r(p(1)),
                a = r(p(25)),
                s = r(p(72)),
                u = r(p(20)),
                c = r(p(7)),
                f = r(p(6)),
                l = n("bitAnd", { "number, number": function(e, t) { if (!m(e) || !m(t)) throw new Error("Integers expected in function bitAnd"); return e & t }, "BigNumber, BigNumber": h, "SparseMatrix, SparseMatrix": function(e, t) { return s(e, t, l, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return a(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return a(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return c(e, t, l) }, "Array, Array": function(e, t) { return l(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(o(e), t) }, "Matrix, Array": function(e, t) { return l(e, o(t)) }, "SparseMatrix, any": function(e, t) { return u(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return f(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return u(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return f(t, e, l, !0) }, "Array, any": function(e, t) { return f(o(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return f(o(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(i.operators.bitAnd, "${args[1]}\\right)") }, l } }, function(e, t, r) { "use strict"; var n = r(88);
        e.exports = function(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitAnd"); var r = e.constructor; if (e.isNaN() || t.isNaN()) return new r(NaN); if (e.isZero() || t.eq(-1) || e.eq(t)) return e; if (t.isZero() || e.eq(-1)) return t; if (!e.isFinite() || !t.isFinite()) { if (!e.isFinite() && !t.isFinite()) return e.isNegative() === t.isNegative() ? e : new r(0); if (!e.isFinite()) return t.isNegative() ? e : e.isNegative() ? new r(0) : t; if (!t.isFinite()) return e.isNegative() ? t : t.isNegative() ? new r(0) : e } return n(e, t, function(e, t) { return e & t }) } }, function(e, t, a) { "use strict"; var s = a(0),
            u = a(89),
            c = a(3).isInteger;
        t.name = "bitNot", t.factory = function(e, t, r, n) { var i = a(4),
                o = n("bitNot", { number: function(e) { if (!c(e)) throw new Error("Integer expected in function bitNot"); return ~e }, BigNumber: u, "Array | Matrix": function(e) { return s(e, o) } }); return o.toTex = { 1: i.operators.bitNot + "\\left(${args[0]}\\right)" }, o } }, function(e, t, p) { "use strict"; var m = p(3).isInteger,
            h = p(245);
        t.name = "bitOr", t.factory = function(e, t, r, n) { var i = p(4),
                o = r(p(1)),
                a = r(p(32)),
                s = r(p(82)),
                u = r(p(38)),
                c = r(p(7)),
                f = r(p(6)),
                l = n("bitOr", { "number, number": function(e, t) { if (!m(e) || !m(t)) throw new Error("Integers expected in function bitOr"); return e | t }, "BigNumber, BigNumber": h, "SparseMatrix, SparseMatrix": function(e, t) { return s(e, t, l) }, "SparseMatrix, DenseMatrix": function(e, t) { return a(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return a(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return c(e, t, l) }, "Array, Array": function(e, t) { return l(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(o(e), t) }, "Matrix, Array": function(e, t) { return l(e, o(t)) }, "SparseMatrix, any": function(e, t) { return u(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return f(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return u(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return f(t, e, l, !0) }, "Array, any": function(e, t) { return f(o(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return f(o(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(i.operators.bitOr, "${args[1]}\\right)") }, l } }, function(e, t, r) { "use strict"; var i = r(88);
        e.exports = function(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitOr"); var r = e.constructor; if (e.isNaN() || t.isNaN()) return new r(NaN); var n = new r(-1); return e.isZero() || t.eq(n) || e.eq(t) ? t : t.isZero() || e.eq(n) ? e : e.isFinite() && t.isFinite() ? i(e, t, function(e, t) { return e | t }) : !e.isFinite() && !e.isNegative() && t.isNegative() || e.isNegative() && !t.isNegative() && !t.isFinite() ? n : e.isNegative() && t.isNegative() ? e.isFinite() ? e : t : e.isFinite() ? t : e } }, function(e, t, p) { "use strict"; var m = p(3).isInteger,
            h = p(247);
        t.name = "bitXor", t.factory = function(e, t, r, n) { var i = p(4),
                o = r(p(1)),
                a = r(p(18)),
                s = r(p(27)),
                u = r(p(19)),
                c = r(p(7)),
                f = r(p(6)),
                l = n("bitXor", { "number, number": function(e, t) { if (!m(e) || !m(t)) throw new Error("Integers expected in function bitXor"); return e ^ t }, "BigNumber, BigNumber": h, "SparseMatrix, SparseMatrix": function(e, t) { return s(e, t, l) }, "SparseMatrix, DenseMatrix": function(e, t) { return a(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return a(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return c(e, t, l) }, "Array, Array": function(e, t) { return l(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(o(e), t) }, "Matrix, Array": function(e, t) { return l(e, o(t)) }, "SparseMatrix, any": function(e, t) { return u(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return f(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return u(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return f(t, e, l, !0) }, "Array, any": function(e, t) { return f(o(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return f(o(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(i.operators.bitXor, "${args[1]}\\right)") }, l } }, function(e, t, r) { "use strict"; var i = r(88),
            o = r(89);
        e.exports = function(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitXor"); var r = e.constructor; if (e.isNaN() || t.isNaN()) return new r(NaN); if (e.isZero()) return t; if (t.isZero()) return e; if (e.eq(t)) return new r(0); var n = new r(-1); return e.eq(n) ? o(t) : t.eq(n) ? o(e) : e.isFinite() && t.isFinite() ? i(e, t, function(e, t) { return e ^ t }) : e.isFinite() || t.isFinite() ? new r(e.isNegative() === t.isNegative() ? 1 / 0 : -1 / 0) : n } }, function(e, t, y) { "use strict"; var g = y(3).isInteger,
            v = y(249);
        t.name = "leftShift", t.factory = function(e, t, r, n) { var i = y(4),
                o = r(y(1)),
                a = r(y(11)),
                s = r(y(41)),
                u = r(y(32)),
                c = r(y(25)),
                f = r(y(90)),
                l = r(y(38)),
                p = r(y(20)),
                m = r(y(7)),
                h = r(y(6)),
                d = n("leftShift", { "number, number": function(e, t) { if (!g(e) || !g(t)) throw new Error("Integers expected in function leftShift"); return e << t }, "BigNumber, BigNumber": v, "SparseMatrix, SparseMatrix": function(e, t) { return f(e, t, d, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return c(t, e, d, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return u(e, t, d, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return m(e, t, d) }, "Array, Array": function(e, t) { return d(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return d(o(e), t) }, "Matrix, Array": function(e, t) { return d(e, o(t)) }, "SparseMatrix, number | BigNumber": function(e, t) { return a(t, 0) ? e.clone() : p(e, t, d, !1) }, "DenseMatrix, number | BigNumber": function(e, t) { return a(t, 0) ? e.clone() : h(e, t, d, !1) }, "number | BigNumber, SparseMatrix": function(e, t) { return a(e, 0) ? s(t.size(), t.storage()) : l(t, e, d, !0) }, "number | BigNumber, DenseMatrix": function(e, t) { return a(e, 0) ? s(t.size(), t.storage()) : h(t, e, d, !0) }, "Array, number | BigNumber": function(e, t) { return d(o(e), t).valueOf() }, "number | BigNumber, Array": function(e, t) { return d(e, o(t)).valueOf() } }); return d.toTex = { 2: "\\left(${args[0]}".concat(i.operators.leftShift, "${args[1]}\\right)") }, d } }, function(e, t, r) { "use strict";
        e.exports = function(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function leftShift"); var r = e.constructor; return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : e.isFinite() || t.isFinite() ? t.lt(55) ? e.times(Math.pow(2, t.toNumber()) + "") : e.times(new r(2).pow(t)) : new r(NaN) } }, function(e, t, y) { "use strict"; var g = y(3).isInteger,
            v = y(251);
        t.name = "rightArithShift", t.factory = function(e, t, r, n) { var i = y(4),
                o = r(y(1)),
                a = r(y(11)),
                s = r(y(41)),
                u = r(y(32)),
                c = r(y(25)),
                f = r(y(90)),
                l = r(y(38)),
                p = r(y(20)),
                m = r(y(7)),
                h = r(y(6)),
                d = n("rightArithShift", { "number, number": function(e, t) { if (!g(e) || !g(t)) throw new Error("Integers expected in function rightArithShift"); return e >> t }, "BigNumber, BigNumber": v, "SparseMatrix, SparseMatrix": function(e, t) { return f(e, t, d, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return c(t, e, d, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return u(e, t, d, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return m(e, t, d) }, "Array, Array": function(e, t) { return d(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return d(o(e), t) }, "Matrix, Array": function(e, t) { return d(e, o(t)) }, "SparseMatrix, number | BigNumber": function(e, t) { return a(t, 0) ? e.clone() : p(e, t, d, !1) }, "DenseMatrix, number | BigNumber": function(e, t) { return a(t, 0) ? e.clone() : h(e, t, d, !1) }, "number | BigNumber, SparseMatrix": function(e, t) { return a(e, 0) ? s(t.size(), t.storage()) : l(t, e, d, !0) }, "number | BigNumber, DenseMatrix": function(e, t) { return a(e, 0) ? s(t.size(), t.storage()) : h(t, e, d, !0) }, "Array, number | BigNumber": function(e, t) { return d(o(e), t).valueOf() }, "number | BigNumber, Array": function(e, t) { return d(e, o(t)).valueOf() } }); return d.toTex = { 2: "\\left(${args[0]}".concat(i.operators.rightArithShift, "${args[1]}\\right)") }, d } }, function(e, t, r) { "use strict";
        e.exports = function(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function rightArithShift"); var r = e.constructor; return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : t.isFinite() ? t.lt(55) ? e.div(Math.pow(2, t.toNumber()) + "").floor() : e.div(new r(2).pow(t)).floor() : e.isNegative() ? new r(-1) : e.isFinite() ? new r(0) : new r(NaN) } }, function(e, t, y) { "use strict"; var g = y(3).isInteger;
        t.name = "rightLogShift", t.factory = function(e, t, r, n) { var i = y(4),
                o = r(y(1)),
                a = r(y(11)),
                s = r(y(41)),
                u = r(y(32)),
                c = r(y(25)),
                f = r(y(90)),
                l = r(y(38)),
                p = r(y(20)),
                m = r(y(7)),
                h = r(y(6)),
                d = n("rightLogShift", { "number, number": function(e, t) { if (!g(e) || !g(t)) throw new Error("Integers expected in function rightLogShift"); return e >>> t }, "SparseMatrix, SparseMatrix": function(e, t) { return f(e, t, d, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return c(t, e, d, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return u(e, t, d, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return m(e, t, d) }, "Array, Array": function(e, t) { return d(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return d(o(e), t) }, "Matrix, Array": function(e, t) { return d(e, o(t)) }, "SparseMatrix, number | BigNumber": function(e, t) { return a(t, 0) ? e.clone() : p(e, t, d, !1) }, "DenseMatrix, number | BigNumber": function(e, t) { return a(t, 0) ? e.clone() : h(e, t, d, !1) }, "number | BigNumber, SparseMatrix": function(e, t) { return a(e, 0) ? s(t.size(), t.storage()) : l(t, e, d, !0) }, "number | BigNumber, DenseMatrix": function(e, t) { return a(e, 0) ? s(t.size(), t.storage()) : h(t, e, d, !0) }, "Array, number | BigNumber": function(e, t) { return d(o(e), t).valueOf() }, "number | BigNumber, Array": function(e, t) { return d(e, o(t)).valueOf() } }); return d.toTex = { 2: "\\left(${args[0]}".concat(i.operators.rightLogShift, "${args[1]}\\right)") }, d } }, function(e, t, r) { "use strict";
        e.exports = [r(254), r(255), r(134), r(256)] }, function(e, t, c) { "use strict";
        t.name = "bellNumbers", t.factory = function(e, t, r, n) { var i = r(c(14)),
                o = r(c(134)),
                a = r(c(60)),
                s = r(c(35)),
                u = n("bellNumbers", { "number | BigNumber": function(e) { if (!s(e) || a(e)) throw new TypeError("Non-negative integer value expected in function bellNumbers"); for (var t = 0, r = 0; r <= e; r++) t = i(t, o(e, r)); return t } }); return u.toTex = { 1: "\\mathrm{B}_{${args[0]}}" }, u } }, function(e, t, f) { "use strict";
        t.name = "composition", t.factory = function(e, t, r, n) { var i = r(f(74)),
                o = r(f(17)),
                a = r(f(71)),
                s = r(f(35)),
                u = r(f(33)),
                c = n("composition", { "number | BigNumber, number | BigNumber": function(e, t) { if (!(s(e) && a(e) && s(t) && a(t))) throw new TypeError("Positive integer value expected in function composition"); if (u(t, e)) throw new TypeError("k must be less than or equal to n in function composition"); return i(o(e, -1), o(t, -1)) } }); return c.toTex = void 0, c } }, function(e, t, l) { "use strict";
        t.name = "catalan", t.factory = function(e, t, r, n) { var i = r(l(14)),
                o = r(l(44)),
                a = r(l(10)),
                s = r(l(74)),
                u = r(l(60)),
                c = r(l(35)),
                f = n("catalan", { "number | BigNumber": function(e) { if (!c(e) || u(e)) throw new TypeError("Non-negative integer value expected in function catalan"); return o(s(a(e, 2), e), i(e, 1)) } }); return f.toTex = { 1: "\\mathrm{C}_{${args[0]}}" }, f } }, function(e, t, r) { "use strict";
        e.exports = [r(258), r(69), r(259), r(260)] }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "arg", t.factory = function(t, e, r, n) { var i = n("arg", { number: function(e) { return Math.atan2(0, e) }, BigNumber: function(e) { return t.BigNumber.atan2(0, e) }, Complex: function(e) { return e.arg() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\arg\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "im", t.factory = function(t, e, r, n) { var i = n("im", { number: function(e) { return 0 }, BigNumber: function(e) { return new t.BigNumber(0) }, Complex: function(e) { return e.im }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "re", t.factory = function(e, t, r, n) { var i = n("re", { number: function(e) { return e }, BigNumber: function(e) { return e }, Complex: function(e) { return e.re }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace" }, i } }, function(e, t, r) { "use strict";
        e.exports = [r(262), r(263)] }, function(e, t, n) { "use strict";
        t.name = "intersect", t.factory = function(t, _, e, r) { var C = e(n(23)),
                z = e(n(14)),
                B = e(n(17)),
                i = e(n(1)),
                k = e(n(10)),
                I = e(n(21)),
                P = e(n(12)),
                R = e(n(15)),
                U = e(n(39)),
                q = e(n(11)),
                o = r("intersect", { "Array, Array, Array": function(e, t, r) { if (!L(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument"); if (!L(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument"); if (!(4 === (n = r).length && E(n[0]) && E(n[1]) && E(n[2]) && E(n[3]))) throw new TypeError("Array with 4 numbers expected as third argument"); var n, i, o, a, s, u, c, f, l, p, m, h, d, y, g, v, x, b, w, N, M; return i = e[0], o = e[1], a = e[2], s = t[0], u = t[1], c = t[2], f = r[0], l = r[1], p = r[2], m = r[3], h = I(i, f), d = I(s, f), y = I(o, l), g = I(u, l), v = I(a, p), x = I(c, p), b = P(R(R(R(m, h), y), v), R(R(R(B(B(d, g), x), h), y), v)), w = B(i, I(b, R(s, i))), N = B(o, I(b, R(u, o))), M = B(a, I(b, R(c, a))), [w, N, M] }, "Array, Array, Array, Array": function(e, t, r, n) { if (2 === e.length) { if (!D(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument"); if (!D(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument"); if (!D(r)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument"); if (!D(n)) throw new TypeError("Array with 2 numbers or BigNumbers expected for fourth argument"); return function(e, t, r, n) { var i = e,
                                    o = r,
                                    a = R(i, t),
                                    s = R(o, n),
                                    u = R(I(a[0], s[1]), I(s[0], a[1])); if (U(C(u), _.epsilon)) return null; var c = I(s[0], i[1]),
                                    f = I(s[1], i[0]),
                                    l = I(s[0], o[1]),
                                    p = I(s[1], o[0]),
                                    m = P(B(R(R(c, f), l), p), u); return z(k(a, m), i) }(e, t, r, n) } if (3 !== e.length) throw new TypeError("Arrays with two or thee dimensional points expected"); if (!L(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument"); if (!L(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument"); if (!L(r)) throw new TypeError("Array with 3 numbers or BigNumbers expected for third argument"); if (!L(n)) throw new TypeError("Array with 3 numbers or BigNumbers expected for fourth argument"); return i = e[0], o = e[1], a = e[2], s = t[0], u = t[1], c = t[2], f = r[0], l = r[1], p = r[2], m = n[0], h = n[1], d = n[2], y = j(i, f, m, f, o, l, h, l, a, p, d, p), g = j(m, f, s, i, h, l, u, o, d, p, c, a), v = j(i, f, s, i, o, l, u, o, a, p, c, a), x = j(m, f, m, f, h, l, h, l, d, p, d, p), b = j(s, i, s, i, u, o, u, o, c, a, c, a), w = P(R(I(y, g), I(v, x)), R(I(b, x), I(g, g))), N = P(B(y, I(w, g)), x), M = B(i, I(w, R(s, i))), E = B(o, I(w, R(u, o))), A = B(a, I(w, R(c, a))), S = B(f, I(N, R(m, f))), O = B(l, I(N, R(h, l))), T = B(p, I(N, R(d, p))), q(M, S) && q(E, O) && q(A, T) ? [M, E, A] : null; var i, o, a, s, u, c, f, l, p, m, h, d, y, g, v, x, b, w, N, M, E, A, S, O, T }, "Matrix, Matrix, Matrix": function(e, t, r) { return i(o(e.valueOf(), t.valueOf(), r.valueOf())) }, "Matrix, Matrix, Matrix, Matrix": function(e, t, r, n) { return i(o(e.valueOf(), t.valueOf(), r.valueOf(), n.valueOf())) } });

            function E(e) { return "number" == typeof e || t.isBigNumber(e) }

            function D(e) { return 2 === e.length && E(e[0]) && E(e[1]) }

            function L(e) { return 3 === e.length && E(e[0]) && E(e[1]) && E(e[2]) }

            function j(e, t, r, n, i, o, a, s, u, c, f, l) { var p = I(R(e, t), R(r, n)),
                    m = I(R(i, o), R(a, s)),
                    h = I(R(u, c), R(f, l)); return B(B(p, m), h) } return o } }, function(e, t, b) { "use strict";
        t.name = "distance", t.factory = function(t, e, r, n) { var l = r(b(17)),
                p = r(b(15)),
                m = r(b(21)),
                h = r(b(12)),
                s = r(b(34)),
                d = r(b(45)),
                u = r(b(23));

            function i(e) { return "number" == typeof e || t.isBigNumber(e) }

            function c(e) { return e.constructor !== Array && (e = f(e)), i(e[0]) && i(e[1]) }

            function o(e) { return e.constructor !== Array && (e = f(e)), i(e[0]) && i(e[1]) && i(e[2]) }

            function a(e) { return e.constructor !== Array && (e = f(e)), i(e[0]) && i(e[1]) && i(e[2]) && i(e[3]) && i(e[4]) && i(e[5]) }

            function f(e) { for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++) r.push(e[t[n]]); return r }

            function y(e, t, r, n, i) { var o = u(l(l(m(r, e), m(n, t)), i)),
                    a = d(l(m(r, r), m(n, n))); return h(o, a) }

            function g(e, t, r, n, i, o, a, s, u) { var c = [p(m(p(i, t), u), m(p(o, r), s)), p(m(p(o, r), a), m(p(n, e), u)), p(m(p(n, e), s), m(p(i, t), a))];
                c = d(l(l(m(c[0], c[0]), m(c[1], c[1])), m(c[2], c[2]))); var f = d(l(l(m(a, a), m(s, s)), m(u, u))); return h(c, f) }

            function v(e, t, r, n) { var i = p(n, t),
                    o = p(r, e),
                    a = l(m(i, i), m(o, o)); return d(a) }

            function x(e, t, r, n, i, o) { var a = p(o, r),
                    s = p(i, t),
                    u = p(n, e),
                    c = l(l(m(a, a), m(s, s)), m(u, u)); return d(c) } return n("distance", { "Array, Array, Array": function(e, t, r) { if (2 !== e.length || 2 !== t.length || 2 !== r.length) throw new TypeError("Invalid Arguments: Try again"); if (!c(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument"); if (!c(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument"); if (!c(r)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument"); var n = h(p(r[1], r[0]), p(t[1], t[0])),
                        i = m(m(n, n), t[0]),
                        o = s(m(n, t[0])),
                        a = e[1]; return y(e[0], e[1], i, o, a) }, "Object, Object, Object": function(e, t, r) { if (2 !== Object.keys(e).length || 2 !== Object.keys(t).length || 2 !== Object.keys(r).length) throw new TypeError("Invalid Arguments: Try again"); if (!c(e)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers"); if (!c(t)) throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers"); if (!c(r)) throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers"); if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("lineOnePtX") && t.hasOwnProperty("lineOnePtY") && r.hasOwnProperty("lineTwoPtX") && r.hasOwnProperty("lineTwoPtY")) { var n = h(p(r.lineTwoPtY, r.lineTwoPtX), p(t.lineOnePtY, t.lineOnePtX)),
                            i = m(m(n, n), t.lineOnePtX),
                            o = s(m(n, t.lineOnePtX)),
                            a = e.pointX; return y(e.pointX, e.pointY, i, o, a) } throw new TypeError("Key names do not match") }, "Array, Array": function(e, t) { if (2 === e.length && 3 === t.length) { if (!c(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument"); if (!o(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument"); return y(e[0], e[1], t[0], t[1], t[2]) } if (3 === e.length && 6 === t.length) { if (!o(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument"); if (!a(t)) throw new TypeError("Array with 6 numbers or BigNumbers expected for second argument"); return g(e[0], e[1], e[2], t[0], t[1], t[2], t[3], t[4], t[5]) } if (2 === e.length && 2 === t.length) { if (!c(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument"); if (!c(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument"); return v(e[0], e[1], t[0], t[1]) } if (3 !== e.length || 3 !== t.length) throw new TypeError("Invalid Arguments: Try again"); if (!o(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument"); if (!o(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument"); return x(e[0], e[1], e[2], t[0], t[1], t[2]) }, "Object, Object": function(e, t) { if (2 === Object.keys(e).length && 3 === Object.keys(t).length) { if (!c(e)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers"); if (!o(t)) throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers"); if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("xCoeffLine") && t.hasOwnProperty("yCoeffLine") && t.hasOwnProperty("constant")) return y(e.pointX, e.pointY, t.xCoeffLine, t.yCoeffLine, t.constant); throw new TypeError("Key names do not match") } if (3 === Object.keys(e).length && 6 === Object.keys(t).length) { if (!o(e)) throw new TypeError("Values of pointX, pointY and pointZ should be numbers or BigNumbers"); if (!a(t)) throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers or BigNumbers"); if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("x0") && t.hasOwnProperty("y0") && t.hasOwnProperty("z0") && t.hasOwnProperty("a") && t.hasOwnProperty("b") && t.hasOwnProperty("c")) return g(e.pointX, e.pointY, e.pointZ, t.x0, t.y0, t.z0, t.a, t.b, t.c); throw new TypeError("Key names do not match") } if (2 === Object.keys(e).length && 2 === Object.keys(t).length) { if (!c(e)) throw new TypeError("Values of pointOneX and pointOneY should be numbers or BigNumbers"); if (!c(t)) throw new TypeError("Values of pointTwoX and pointTwoY should be numbers or BigNumbers"); if (e.hasOwnProperty("pointOneX") && e.hasOwnProperty("pointOneY") && t.hasOwnProperty("pointTwoX") && t.hasOwnProperty("pointTwoY")) return v(e.pointOneX, e.pointOneY, t.pointTwoX, t.pointTwoY); throw new TypeError("Key names do not match") } if (3 !== Object.keys(e).length || 3 !== Object.keys(t).length) throw new TypeError("Invalid Arguments: Try again"); if (!o(e)) throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers"); if (!o(t)) throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers"); if (e.hasOwnProperty("pointOneX") && e.hasOwnProperty("pointOneY") && e.hasOwnProperty("pointOneZ") && t.hasOwnProperty("pointTwoX") && t.hasOwnProperty("pointTwoY") && t.hasOwnProperty("pointTwoZ")) return x(e.pointOneX, e.pointOneY, e.pointOneZ, t.pointTwoX, t.pointTwoY, t.pointTwoZ); throw new TypeError("Key names do not match") }, Array: function(e) { if (! function(e) { if (2 === e[0].length && i(e[0][0]) && i(e[0][1])) { for (var t in e)
                                    if (2 !== e[t].length || !i(e[t][0]) || !i(e[t][1])) return !1 } else { if (!(3 === e[0].length && i(e[0][0]) && i(e[0][1]) && i(e[0][2]))) return !1; for (var r in e)
                                    if (3 !== e[r].length || !i(e[r][0]) || !i(e[r][1]) || !i(e[r][2])) return !1 } return !0 }(e)) throw new TypeError("Incorrect array format entered for pairwise distance calculation"); return function(e) { for (var t = [], r = 0; r < e.length - 1; r++)
                            for (var n = r + 1; n < e.length; n++) 2 === e[0].length ? t.push(v(e[r][0], e[r][1], e[n][0], e[n][1])) : 3 === e[0].length && t.push(x(e[r][0], e[r][1], e[r][2], e[n][0], e[n][1], e[n][2])); return t }(e) } }) } }, function(e, t, r) { "use strict";
        e.exports = [r(265), r(136), r(266), r(267)] }, function(e, t, h) { "use strict";
        t.name = "and", t.factory = function(e, t, r, n) { var i = h(4),
                o = r(h(1)),
                a = r(h(41)),
                s = r(h(136)),
                u = r(h(25)),
                c = r(h(72)),
                f = r(h(20)),
                l = r(h(7)),
                p = r(h(6)),
                m = n("and", { "number, number": function(e, t) { return !(!e || !t) }, "Complex, Complex": function(e, t) { return !(0 === e.re && 0 === e.im || 0 === t.re && 0 === t.im) }, "BigNumber, BigNumber": function(e, t) { return !(e.isZero() || t.isZero() || e.isNaN() || t.isNaN()) }, "Unit, Unit": function(e, t) { return m(e.value || 0, t.value || 0) }, "SparseMatrix, SparseMatrix": function(e, t) { return c(e, t, m, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return u(t, e, m, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return u(e, t, m, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return l(e, t, m) }, "Array, Array": function(e, t) { return m(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return m(o(e), t) }, "Matrix, Array": function(e, t) { return m(e, o(t)) }, "SparseMatrix, any": function(e, t) { return s(t) ? a(e.size(), e.storage()) : f(e, t, m, !1) }, "DenseMatrix, any": function(e, t) { return s(t) ? a(e.size(), e.storage()) : p(e, t, m, !1) }, "any, SparseMatrix": function(e, t) { return s(e) ? a(e.size(), e.storage()) : f(t, e, m, !0) }, "any, DenseMatrix": function(e, t) { return s(e) ? a(e.size(), e.storage()) : p(t, e, m, !0) }, "Array, any": function(e, t) { return m(o(e), t).valueOf() }, "any, Array": function(e, t) { return m(e, o(t)).valueOf() } }); return m.toTex = { 2: "\\left(${args[0]}".concat(i.operators.and, "${args[1]}\\right)") }, m } }, function(e, t, p) { "use strict";
        t.name = "or", t.factory = function(e, t, r, n) { var i = p(4),
                o = r(p(1)),
                a = r(p(18)),
                s = r(p(65)),
                u = r(p(19)),
                c = r(p(7)),
                f = r(p(6)),
                l = n("or", { "number, number": function(e, t) { return !(!e && !t) }, "Complex, Complex": function(e, t) { return 0 !== e.re || 0 !== e.im || 0 !== t.re || 0 !== t.im }, "BigNumber, BigNumber": function(e, t) { return !e.isZero() && !e.isNaN() || !t.isZero() && !t.isNaN() }, "Unit, Unit": function(e, t) { return l(e.value || 0, t.value || 0) }, "SparseMatrix, SparseMatrix": function(e, t) { return s(e, t, l) }, "SparseMatrix, DenseMatrix": function(e, t) { return a(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return a(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return c(e, t, l) }, "Array, Array": function(e, t) { return l(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(o(e), t) }, "Matrix, Array": function(e, t) { return l(e, o(t)) }, "SparseMatrix, any": function(e, t) { return u(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return f(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return u(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return f(t, e, l, !0) }, "Array, any": function(e, t) { return f(o(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return f(o(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(i.operators.or, "${args[1]}\\right)") }, l } }, function(e, t, p) { "use strict";
        t.name = "xor", t.factory = function(e, t, r, n) { var i = p(4),
                o = r(p(1)),
                a = r(p(18)),
                s = r(p(27)),
                u = r(p(19)),
                c = r(p(7)),
                f = r(p(6)),
                l = n("xor", { "number, number": function(e, t) { return !!e != !!t }, "Complex, Complex": function(e, t) { return (0 !== e.re || 0 !== e.im) != (0 !== t.re || 0 !== t.im) }, "BigNumber, BigNumber": function(e, t) { return (!e.isZero() && !e.isNaN()) != (!t.isZero() && !t.isNaN()) }, "Unit, Unit": function(e, t) { return l(e.value || 0, t.value || 0) }, "SparseMatrix, SparseMatrix": function(e, t) { return s(e, t, l) }, "SparseMatrix, DenseMatrix": function(e, t) { return a(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return a(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return c(e, t, l) }, "Array, Array": function(e, t) { return l(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(o(e), t) }, "Matrix, Array": function(e, t) { return l(e, o(t)) }, "SparseMatrix, any": function(e, t) { return u(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return f(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return u(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return f(t, e, l, !0) }, "Array, any": function(e, t) { return f(o(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return f(o(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(i.operators.xor, "${args[1]}\\right)") }, l } }, function(e, t, r) { "use strict";
        e.exports = [r(75), r(269), r(270), r(121), r(271), r(272), r(273), r(274), r(275), r(276), r(277), r(48), r(68), r(278), r(137), r(279), r(92), r(138), r(280), r(281), r(26), r(282), r(284), r(285), r(22), r(286), r(70), r(41), r(287)] }, function(e, t, c) { "use strict"; var f = c(2);
        t.name = "cross", t.factory = function(e, t, r, n) { var i = r(c(1)),
                a = r(c(15)),
                s = r(c(10)),
                o = n("cross", { "Matrix, Matrix": function(e, t) { return i(u(e.toArray(), t.toArray())) }, "Matrix, Array": function(e, t) { return i(u(e.toArray(), t)) }, "Array, Matrix": function(e, t) { return i(u(e, t.toArray())) }, "Array, Array": u }); return o.toTex = { 2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)" }, o;

            function u(e, t) { var r = Math.max(f.size(e).length, f.size(t).length);
                e = f.squeeze(e), t = f.squeeze(t); var n = f.size(e),
                    i = f.size(t); if (1 !== n.length || 1 !== i.length || 3 !== n[0] || 3 !== i[0]) throw new RangeError("Vectors with length 3 expected (Size A = [" + n.join(", ") + "], B = [" + i.join(", ") + "])"); var o = [a(s(e[1], t[2]), s(e[2], t[1])), a(s(e[2], t[0]), s(e[0], t[2])), a(s(e[0], t[1]), s(e[1], t[0]))]; return 1 < r ? [o] : o } } }, function(e, t, u) { "use strict";
        t.name = "ctranspose", t.factory = function(e, t, r, n) { var i = r(u(70)),
                o = r(u(69)),
                a = u(4),
                s = n("ctranspose", { any: function(e) { return o(i(e)) } }); return s.toTex = { 1: "\\left(${args[0]}\\right)".concat(a.operators.ctranspose) }, s } }, function(e, t, o) { "use strict"; var a = o(2),
            h = o(3).isInteger;
        t.name = "diag", t.factory = function(p, e, t, r) { var m = t(o(1)),
                n = r("diag", { Array: function(e) { return i(e, 0, a.size(e), null) }, "Array, number": function(e, t) { return i(e, t, a.size(e), null) }, "Array, BigNumber": function(e, t) { return i(e, t.toNumber(), a.size(e), null) }, "Array, string": function(e, t) { return i(e, 0, a.size(e), t) }, "Array, number, string": function(e, t, r) { return i(e, t, a.size(e), r) }, "Array, BigNumber, string": function(e, t, r) { return i(e, t.toNumber(), a.size(e), r) }, Matrix: function(e) { return i(e, 0, e.size(), e.storage()) }, "Matrix, number": function(e, t) { return i(e, t, e.size(), e.storage()) }, "Matrix, BigNumber": function(e, t) { return i(e, t.toNumber(), e.size(), e.storage()) }, "Matrix, string": function(e, t) { return i(e, 0, e.size(), t) }, "Matrix, number, string": function(e, t, r) { return i(e, t, e.size(), r) }, "Matrix, BigNumber, string": function(e, t, r) { return i(e, t.toNumber(), e.size(), r) } }); return n.toTex = void 0, n;

            function i(e, t, r, n) { if (!h(t)) throw new TypeError("Second parameter in function diag must be an integer"); var i, o, a, s, u, c, f = 0 < t ? t : 0,
                    l = t < 0 ? -t : 0; switch (r.length) {
                    case 1:
                        return i = e, o = t, a = n, s = r[0], u = [s + l, s + f], c = p.Matrix.storage(a || "dense").diagonal(u, i, o), null !== a ? c : c.valueOf();
                    case 2:
                        return function(e, t, r, n, i, o) { if (p.isMatrix(e)) { var a = e.diagonal(t); return null !== r ? r !== a.storage() ? m(a, r) : a : a.valueOf() } for (var s = Math.min(n[0] - i, n[1] - o), u = [], c = 0; c < s; c++) u[c] = e[c + i][c + o]; return null !== r ? m(u) : u }(e, t, n, r, l, f) } throw new RangeError("Matrix for function diag must be 2 dimensional") } } }, function(e, t, a) { "use strict"; var c = a(2).size;
        t.name = "dot", t.factory = function(e, t, r, n) { var s = r(a(14)),
                u = r(a(10)),
                i = n("dot", { "Matrix, Matrix": function(e, t) { return o(e.toArray(), t.toArray()) }, "Matrix, Array": function(e, t) { return o(e.toArray(), t) }, "Array, Matrix": function(e, t) { return o(e, t.toArray()) }, "Array, Array": o }); return i.toTex = { 2: "\\left(${args[0]}\\cdot${args[1]}\\right)" }, i;

            function o(e, t) { var r = c(e),
                    n = c(t),
                    i = r[0]; if (1 !== r.length || 1 !== n.length) throw new RangeError("Vector expected"); if (r[0] !== n[0]) throw new RangeError("Vectors must have equal length (" + r[0] + " != " + n[0] + ")"); if (0 === i) throw new RangeError("Cannot calculate the dot product of empty vectors"); for (var o = 0, a = 0; a < i; a++) o = s(o, u(e[a], t[a])); return o } } }, function(e, t, r) { "use strict";
        t.name = "eye", t.factory = function(e, t, r, n) { return function() { throw new Error('Function "eye" is renamed to "identity" since mathjs version 5.0.0. To keep eye working, create an alias for it using "math.import({eye: math.identity}, {override: true})"') } } }, function(e, t, i) { "use strict"; var M = i(9).format;
        t.name = "expm", t.factory = function(d, e, t, r) { var y = t(i(23)),
                g = t(i(14)),
                v = t(i(48)),
                x = t(i(68)),
                b = t(i(10)),
                w = d.SparseMatrix,
                n = r("expm", { Matrix: function(e) { var t = e.size(); if (2 !== t.length || t[0] !== t[1]) throw new RangeError("Matrix must be square (size: " + M(t) + ")"); for (var r = t[0], n = function(e, t) { for (var r = 0; r < 30; r++)
                                    for (var n = 0; n <= r; n++) { var i = r - n; if (N(e, n, i) < t) return { q: n, j: i } }
                                throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)") }(function(e) { for (var t = e.size()[0], r = 0, n = 0; n < t; n++) { for (var i = 0, o = 0; o < t; o++) i += y(e.get([n, o]));
                                    r = Math.max(i, r) } return r }(e), 1e-15), i = n.q, o = n.j, a = b(e, Math.pow(2, -o)), s = v(r), u = v(r), c = 1, f = a, l = -1, p = 1; p <= i; p++) 1 < p && (f = b(f, a), l = -l), s = g(s, b(c = c * (i - p + 1) / ((2 * i - p + 1) * p), f)), u = g(u, b(c * l, f)); for (var m = b(x(u), s), h = 0; h < o; h++) m = b(m, m); return d.isSparseMatrix(e) ? new w(m) : m } });

            function N(e, t, r) { for (var n = 1, i = 2; i <= t; i++) n *= i; for (var o = n, a = t + 1; a <= 2 * t; a++) o *= a; var s = o * (2 * t + 1); return 8 * Math.pow(e / Math.pow(2, r), 2 * t) * n * n / (o * s) } return n.toTex = { 1: "\\exp\\left(${args[0]}\\right)" }, n } }, function(e, t, a) { "use strict"; var r = a(2).filter,
            s = a(2).filterRegExp,
            o = a(31).maxArgumentCount;

        function u(e, n) { var i = o(n); return r(e, function(e, t, r) { return 1 === i ? n(e) : 2 === i ? n(e, [t]) : n(e, [t], r) }) }
        t.name = "filter", t.factory = function(e, t, r, n) { var i = r(a(1)),
                o = n("filter", { "Array, function": u, "Matrix, function": function(e, t) { return i(u(e.toArray(), t)) }, "Array, RegExp": s, "Matrix, RegExp": function(e, t) { return i(s(e.toArray(), t)) } }); return o.toTex = void 0, o } }, function(e, t, a) { "use strict"; var s = a(5).clone,
            u = a(2).flatten;
        t.name = "flatten", t.factory = function(e, t, r, n) { var i = r(a(1)),
                o = n("flatten", { Array: function(e) { return u(s(e)) }, Matrix: function(e) { var t = u(s(e.toArray())); return i(t) } }); return o.toTex = void 0, o } }, function(e, t, r) { "use strict"; var n = r(31).maxArgumentCount,
            a = r(2).forEach;

        function o(t, i) { var o = n(i);! function r(e, n) { Array.isArray(e) ? a(e, function(e, t) { r(e, n.concat(t)) }) : 1 === o ? i(e) : 2 === o ? i(e, n) : i(e, n, t) }(t, []) }
        t.name = "forEach", t.factory = function(e, t, r, n) { var i = n("forEach", { "Array, function": o, "Matrix, function": function(e, t) { return e.forEach(t) } }); return i.toTex = void 0, i } }, function(e, t, s) { "use strict"; var u = s(2).size;
        t.name = "kron", t.factory = function(e, t, r, n) { var i = r(s(1)),
                o = r(s(21)); return n("kron", { "Matrix, Matrix": function(e, t) { return i(a(e.toArray(), t.toArray())) }, "Matrix, Array": function(e, t) { return i(a(e.toArray(), t)) }, "Array, Matrix": function(e, t) { return i(a(e, t.toArray())) }, "Array, Array": a });

            function a(e, r) { if (1 === u(e).length && (e = [e]), 1 === u(r).length && (r = [r]), 2 < u(e).length || 2 < u(r).length) throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(e.length) + ", y = " + JSON.stringify(r.length) + ")"); var n = [],
                    i = []; return e.map(function(t) { return r.map(function(e) { return i = [], n.push(i), t.map(function(t) { return e.map(function(e) { return i.push(o(t, e)) }) }) }) }) && n } } }, function(e, t, o) { "use strict"; var u = o(3).isInteger,
            c = o(2).resize;
        t.name = "ones", t.factory = function(a, t, e, r) { var s = e(o(1)),
                n = r("ones", { "": function() { return "Array" === t.matrix ? i([]) : i([], "default") }, "...number | BigNumber | string": function(e) { return "string" != typeof e[e.length - 1] ? "Array" === t.matrix ? i(e) : i(e, "default") : i(e, e.pop()) }, Array: i, Matrix: function(e) { var t = e.storage(); return i(e.valueOf(), t) }, "Array | Matrix, string": function(e, t) { return i(e.valueOf(), t) } }); return n.toTex = void 0, n;

            function i(e, t) { var n, r = (n = !1, e.forEach(function(e, t, r) { a.isBigNumber(e) && (n = !0, r[t] = e.toNumber()) }), n ? new a.BigNumber(1) : 1); if (e.forEach(function(e) { if ("number" != typeof e || !u(e) || e < 0) throw new Error("Parameters in function ones must be positive integers") }), t) { var i = s(t); return 0 < e.length ? i.resize(e, r) : i } var o = []; return 0 < e.length ? c(o, e, r) : o } } }, function(e, t, s) { "use strict"; var u = s(2);
        t.name = "reshape", t.factory = function(e, t, r, n) { var i = r(s(1)),
                o = r(s(35)),
                a = n("reshape", { "Matrix, Array": function(e, t) { return e.reshape ? e.reshape(t) : i(u.reshape(e.valueOf(), t)) }, "Array, Array": function(e, t) { return t.forEach(function(e) { if (!o(e)) throw new TypeError("Invalid size for dimension: " + e) }), u.reshape(e, t) } }); return a.toTex = void 0, a } }, function(e, t, n) { "use strict"; var u = n(8),
            c = n(55),
            f = n(3).isInteger,
            l = n(9).format,
            p = n(5).clone,
            m = n(2);
        t.name = "resize", t.factory = function(o, a, e, t) { var s = e(n(1)),
                r = function(e, t, r) { if (2 !== arguments.length && 3 !== arguments.length) throw new c("resize", arguments.length, 2, 3); if (o.isMatrix(t) && (t = t.valueOf()), o.isBigNumber(t[0]) && (t = t.map(function(e) { return o.isBigNumber(e) ? e.toNumber() : e })), o.isMatrix(e)) return e.resize(t, r, !0); if ("string" == typeof e) return function(e, t, r) { if (void 0 !== r) { if ("string" != typeof r || 1 !== r.length) throw new TypeError("Single character expected as defaultValue") } else r = " "; if (1 !== t.length) throw new u(t.length, 1); var n = t[0]; if ("number" != typeof n || !f(n)) throw new TypeError("Invalid size, must contain positive integers (size: " + l(t) + ")"); if (e.length > n) return e.substring(0, n); if (e.length < n) { for (var i = e, o = 0, a = n - e.length; o < a; o++) i += r; return i } return e }(e, t, r); var n = !Array.isArray(e) && "Array" !== a.matrix; if (0 === t.length) { for (; Array.isArray(e);) e = e[0]; return p(e) }
                    Array.isArray(e) || (e = [e]), e = p(e); var i = m.resize(e, t, r); return n ? s(i) : i }; return r.toTex = void 0, r } }, function(e, t, p) { "use strict"; var m = p(2).size;
        t.name = "sort", t.factory = function(e, t, r, n) { var i = r(p(1)),
                o = r(p(52)),
                a = function(e, t) { return -o(e, t) },
                s = r(p(29)),
                u = n("sort", { Array: function(e) { return f(e), e.sort(o) }, Matrix: function(e) { return l(e), i(e.toArray().sort(o), e.storage()) }, "Array, function": function(e, t) { return f(e), e.sort(t) }, "Matrix, function": function(e, t) { return l(e), i(e.toArray().sort(t), e.storage()) }, "Array, string": function(e, t) { return f(e), e.sort(c(t)) }, "Matrix, string": function(e, t) { return l(e), i(e.toArray().sort(c(t)), e.storage()) } });

            function c(e) { if ("asc" === e) return o; if ("desc" === e) return a; if ("natural" === e) return s; throw new Error('String "asc", "desc", or "natural" expected') }

            function f(e) { if (1 !== m(e).length) throw new Error("One dimensional array expected") }

            function l(e) { if (1 !== e.size().length) throw new Error("One dimensional matrix expected") } return u.toTex = void 0, u } }, function(e, t) { e.exports = function t(e, r) { "use strict"; var n, i, o = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                a = /(^[ ]*|[ ]*$)/g,
                s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                u = /^0x[0-9a-f]+$/i,
                c = /^0/,
                f = function(e) { return t.insensitive && ("" + e).toLowerCase() || "" + e },
                l = f(e).replace(a, "") || "",
                p = f(r).replace(a, "") || "",
                m = l.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                h = p.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                d = parseInt(l.match(u), 16) || 1 !== m.length && l.match(s) && Date.parse(l),
                y = parseInt(p.match(u), 16) || d && p.match(s) && Date.parse(p) || null; if (y) { if (d < y) return -1; if (y < d) return 1 } for (var g = 0, v = Math.max(m.length, h.length); g < v; g++) { if (n = !(m[g] || "").match(c) && parseFloat(m[g]) || m[g] || 0, i = !(h[g] || "").match(c) && parseFloat(h[g]) || h[g] || 0, isNaN(n) !== isNaN(i)) return isNaN(n) ? 1 : -1; if (typeof n != typeof i && (n += "", i += ""), n < i) return -1; if (i < n) return 1 } return 0 } }, function(e, t, y) { "use strict"; var g = y(2),
            v = y(4),
            x = y(9);
        t.name = "sqrtm", t.factory = function(r, e, t, n) { var a = t(y(23)),
                s = t(y(14)),
                u = t(y(10)),
                i = t(y(45)),
                c = t(y(15)),
                f = t(y(68)),
                l = t(y(26)),
                p = t(y(93)),
                m = t(y(48)),
                o = n("sqrtm", { "Array | Matrix": function(e) { var t = r.isMatrix(e) ? e.size() : g.size(e); switch (t.length) {
                            case 1:
                                if (1 === t[0]) return i(e); throw new RangeError("Matrix must be square (size: " + x.format(t) + ")");
                            case 2:
                                if (t[0] === t[1]) return function(e) { var t, r = 0,
                                        n = e,
                                        i = m(l(e));
                                    do { var o = n; if (n = u(.5, s(o, f(i))), i = u(.5, s(i, f(o))), t = p(a(c(n, o))), d < t && ++r > h) throw new Error("computing square root of matrix: iterative method could not converge") } while (d < t); return n }(e); throw new RangeError("Matrix must be square (size: " + x.format(t) + ")") } } }),
                h = 1e3,
                d = 1e-6; return o.toTex = { 1: "{${args[0]}}".concat(v.operators.pow, "{\\frac{1}{2}}") }, o } }, function(e, t, a) { "use strict"; var s = a(5),
            u = a(2);
        t.name = "squeeze", t.factory = function(e, t, r, n) { var i = r(a(1)),
                o = n("squeeze", { Array: function(e) { return u.squeeze(s.clone(e)) }, Matrix: function(e) { var t = u.squeeze(e.toArray()); return Array.isArray(t) ? i(t) : t }, any: function(e) { return s.clone(e) } }); return o.toTex = void 0, o } }, function(e, t, s) { "use strict"; var u = s(5).clone,
            h = s(9).format;
        t.name = "trace", t.factory = function(e, t, r, n) { var i = r(s(1)),
                m = r(s(14)),
                o = n("trace", { Array: function(e) { return a(i(e)) }, SparseMatrix: function(e) { var t = e._values,
                            r = e._index,
                            n = e._ptr,
                            i = e._size,
                            o = i[0],
                            a = i[1]; if (o !== a) throw new RangeError("Matrix must be square (size: " + h(i) + ")"); var s = 0; if (0 < t.length)
                            for (var u = 0; u < a; u++)
                                for (var c = n[u], f = n[u + 1], l = c; l < f; l++) { var p = r[l]; if (p === u) { s = m(s, t[l]); break } if (u < p) break }
                        return s }, DenseMatrix: a, any: u });

            function a(e) { var t = e._size,
                    r = e._data; switch (t.length) {
                    case 1:
                        if (1 === t[0]) return u(r[0]); throw new RangeError("Matrix must be square (size: " + h(t) + ")");
                    case 2:
                        var n = t[0]; if (n !== t[1]) throw new RangeError("Matrix must be square (size: " + h(t) + ")"); for (var i = 0, o = 0; o < n; o++) i = m(i, r[o][o]); return i;
                    default:
                        throw new RangeError("Matrix must be two dimensional (size: " + h(t) + ")") } } return o.toTex = { 1: "\\mathrm{tr}\\left(${args[0]}\\right)" }, o } }, function(e, t, o) { "use strict";
        t.name = "getMatrixDataType", t.factory = function(e, t, r, n) { var i = r(o(62)); return n("getMatrixDataType", { Array: function(e) { return i(e) }, Matrix: function(e) { return e.getDataType() } }) } }, function(e, t, r) { "use strict";
        e.exports = [r(74), r(73), r(135), r(289), r(290), r(291), r(292), r(296), r(297)] }, function(e, t, a) { "use strict";
        t.name = "kldivergence", t.factory = function(e, t, r, n) { var i = r(a(1)),
                s = r(a(44)),
                u = r(a(139)),
                c = r(a(10)),
                f = r(a(132)),
                l = r(a(87)),
                p = r(a(56));

            function o(e, t) { var r = t.size().length,
                    n = e.size().length; if (1 < r) throw new Error("first object must be one dimensional"); if (1 < n) throw new Error("second object must be one dimensional"); if (r !== n) throw new Error("Length of two vectors must be equal"); if (0 === u(e)) throw new Error("Sum of elements in first object must be non zero"); if (0 === u(t)) throw new Error("Sum of elements in second object must be non zero"); var i = s(e, u(e)),
                    o = s(t, u(t)),
                    a = u(c(i, l(f(i, o)))); return p(a) ? a : Number.NaN } return n("kldivergence", { "Array, Array": function(e, t) { return o(i(e), i(t)) }, "Matrix, Array": function(e, t) { return o(e, i(t)) }, "Array, Matrix": function(e, t) { return o(i(e), t) }, "Matrix, Matrix": function(e, t) { return o(e, t) } }) } }, function(e, t, f) { "use strict"; var l = f(46);
        t.name = "multinomial", t.factory = function(e, t, r, n) { var i = r(f(14)),
                o = r(f(10)),
                a = r(f(44)),
                s = r(f(73)),
                u = r(f(35)),
                c = r(f(71)); return n("multinomial", { "Array | Matrix": function(e) { var t = 0,
                        r = 1; return l(e, function(e) { if (!u(e) || !c(e)) throw new TypeError("Positive integer value expected in function multinomial");
                        t = i(t, e), r = o(r, s(e)) }), a(s(t), r) } }) } }, function(e, t, s) { "use strict"; var u = s(3).isInteger;

        function c(e) { return e.isInteger() && e.gte(0) }
        t.name = "permutations", t.factory = function(i, e, t, r) { var n = t(s(73)),
                o = s(91),
                a = r("permutations", { "number | BigNumber": n, "number, number": function(e, t) { if (!u(e) || e < 0) throw new TypeError("Positive integer value expected in function permutations"); if (!u(t) || t < 0) throw new TypeError("Positive integer value expected in function permutations"); if (e < t) throw new TypeError("second argument k must be less than or equal to first argument n"); return o(e - t + 1, e) }, "BigNumber, BigNumber": function(e, t) { var r, n; if (!c(e) || !c(t)) throw new TypeError("Positive integer value expected in function permutations"); if (t.gt(e)) throw new TypeError("second argument k must be less than or equal to first argument n"); for (r = new i.BigNumber(1), n = e.minus(t).plus(1); n.lte(e); n = n.plus(1)) r = r.times(n); return r } }); return a.toTex = void 0, a } }, function(e, t, o) { "use strict";
        t.name = "pickRandom", t.factory = function(e, t, r, n) { var i = r(o(95))("uniform").pickRandom; return i.toTex = void 0, i } }, function(e, t, r) { "use strict"; var s = r(294),
            u = s();
        t.factory = function(e, t, r, n, i) { var o;

            function a(e) { o = null === e ? u : s(String(e)) } return a(t.randomSeed), i.on("config", function(e, t, r) { void 0 !== r.randomSeed && a(e.randomSeed) }),
                function() { return o() } }, t.math = !0 }, function(p, e, t) { "use strict";
        (function(e) { var i = [],
                o = void 0 === e ? window : e,
                a = Math.pow(256, 6),
                s = Math.pow(2, 52),
                u = 2 * s,
                t = Math.random;

            function c(e) { var t, r = e.length,
                    a = this,
                    n = 0,
                    i = a.i = a.j = 0,
                    o = a.S = []; for (r || (e = [r++]); n < 256;) o[n] = n++; for (n = 0; n < 256; n++) o[n] = o[i = 255 & i + e[n % r] + (t = o[n])], o[i] = t;
                (a.g = function(e) { for (var t, r = 0, n = a.i, i = a.j, o = a.S; e--;) t = o[n = 255 & n + 1], r = 256 * r + o[255 & (o[n] = o[i = 255 & i + t]) + (o[i] = t)]; return a.i = n, a.j = i, r })(256) }

            function f(e, t) { for (var r, n = e + "", i = 0; i < n.length;) t[255 & i] = 255 & (r ^= 19 * t[255 & i]) + n.charCodeAt(i++); return l(t) }

            function l(e) { return String.fromCharCode.apply(0, e) }
            p.exports = function(e, t) { if (t && !0 === t.global) return t.global = !1, Math.random = p.exports(e, t), t.global = !0, Math.random; var r = [],
                    n = (f(function e(t, r) { var n, i = [],
                            o = (typeof t)[0]; if (r && "o" == o)
                            for (n in t) try { i.push(e(t[n], r - 1)) } catch (e) {}
                        return i.length ? i : "s" == o ? t : t + "\0" }(t && t.entropy || !1 ? [e, l(i)] : 0 in arguments ? e : function(e) { try { return o.crypto.getRandomValues(e = new Uint8Array(256)), l(e) } catch (e) { return [+new Date, o, o.navigator && o.navigator.plugins, o.screen, l(i)] } }(), 3), r), new c(r)); return f(l(n.S), i),
                    function() { for (var e = n.g(6), t = a, r = 0; e < s;) e = 256 * (e + r), t *= 256, r = n.g(1); for (; u <= e;) e /= 2, t /= 2, r >>>= 1; return (e + r) / t } }, p.exports.resetGlobal = function() { Math.random = t }, f(Math.random(), i) }).call(this, t(295)) }, function(UEc, VEc) { var WEc;
        WEc = function() { return this }(); try { WEc = WEc || Function("return this")() || eval("this") } catch (e) { "object" == typeof window && (WEc = window) }
        UEc.exports = WEc }, function(e, t, o) { "use strict";
        t.name = "random", t.factory = function(e, t, r, n) { var i = r(o(95))("uniform").random; return i.toTex = void 0, i } }, function(e, t, o) { "use strict";
        t.name = "randomInt", t.factory = function(e, t, r, n) { var i = r(o(95))("uniform").randomInt; return i.toTex = void 0, i } }, function(e, t, r) { "use strict";
        e.exports = [r(52), r(29), r(140), r(299), r(49), r(300), r(33), r(127), r(39), r(301), r(123)] }, function(e, t, a) { "use strict";
        t.name = "deepEqual", t.factory = function(e, t, r, n) { var o = r(a(49)),
                i = n("deepEqual", { "any, any": function(e, t) { return function e(t, r) { if (Array.isArray(t)) { if (Array.isArray(r)) { var n = t.length; if (n !== r.length) return !1; for (var i = 0; i < n; i++)
                                        if (!e(t[i], r[i])) return !1;
                                    return !0 } return !1 } return !Array.isArray(r) && o(t, r) }(e.valueOf(), t.valueOf()) } }); return i.toTex = void 0, i } }, function(e, t, s) { "use strict";
        t.name = "equalText", t.factory = function(e, t, r, n) { var i = r(s(140)),
                o = r(s(59)),
                a = n("equalText", { "any, any": function(e, t) { return o(i(e, t)) } }); return a.toTex = void 0, a } }, function(e, t, p) { "use strict"; var m = p(3).nearlyEqual,
            h = p(37);
        t.name = "smallerEq", t.factory = function(e, r, t, n) { var i = t(p(1)),
                o = t(p(18)),
                a = t(p(27)),
                s = t(p(19)),
                u = t(p(7)),
                c = t(p(6)),
                f = p(4),
                l = n("smallerEq", { "boolean, boolean": function(e, t) { return e <= t }, "number, number": function(e, t) { return e <= t || m(e, t, r.epsilon) }, "BigNumber, BigNumber": function(e, t) { return e.lte(t) || h(e, t, r.epsilon) }, "Fraction, Fraction": function(e, t) { return 1 !== e.compare(t) }, "Complex, Complex": function() { throw new TypeError("No ordering relation is defined for complex numbers") }, "Unit, Unit": function(e, t) { if (!e.equalBase(t)) throw new Error("Cannot compare units with different base"); return l(e.value, t.value) }, "SparseMatrix, SparseMatrix": function(e, t) { return a(e, t, l) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, l, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return o(e, t, l, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return u(e, t, l) }, "Array, Array": function(e, t) { return l(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return l(i(e), t) }, "Matrix, Array": function(e, t) { return l(e, i(t)) }, "SparseMatrix, any": function(e, t) { return s(e, t, l, !1) }, "DenseMatrix, any": function(e, t) { return c(e, t, l, !1) }, "any, SparseMatrix": function(e, t) { return s(t, e, l, !0) }, "any, DenseMatrix": function(e, t) { return c(t, e, l, !0) }, "Array, any": function(e, t) { return c(i(e), t, l, !1).valueOf() }, "any, Array": function(e, t) { return c(i(t), e, l, !0).valueOf() } }); return l.toTex = { 2: "\\left(${args[0]}".concat(f.operators.smallerEq, "${args[1]}\\right)") }, l } }, function(e, t, r) { "use strict";
        e.exports = [r(303), r(141), r(304), r(142), r(305), r(306), r(307), r(308), r(143), r(309)] }, function(e, t, i) { "use strict"; var p = i(2).flatten;
        t.name = "setCartesian", t.factory = function(e, t, r, n) { var s = r(i(28)),
                u = r(i(47)),
                c = r(i(26)),
                f = r(i(22)),
                l = r(i(29)); return n("setCartesian", { "Array | Matrix, Array | Matrix": function(e, t) { var r = []; if (0 !== f(c(e), new s(0)) && 0 !== f(c(t), new s(0))) { var n = p(Array.isArray(e) ? e : e.toArray()).sort(l),
                            i = p(Array.isArray(t) ? t : t.toArray()).sort(l);
                        r = []; for (var o = 0; o < n.length; o++)
                            for (var a = 0; a < i.length; a++) r.push([n[o], i[a]]) } return Array.isArray(e) && Array.isArray(t) ? r : new u(r) } }) } }, function(e, t, c) { "use strict"; var f = c(2).flatten;
        t.name = "setDistinct", t.factory = function(e, t, r, n) { var i = r(c(28)),
                o = r(c(47)),
                a = r(c(26)),
                s = r(c(22)),
                u = r(c(29)); return n("setDistinct", { "Array | Matrix": function(e) { var t; if (0 === s(a(e), new i(0))) t = [];
                    else { var r = f(Array.isArray(e) ? e : e.toArray()).sort(u);
                        (t = []).push(r[0]); for (var n = 1; n < r.length; n++) 0 !== u(r[n], r[n - 1]) && t.push(r[n]) } return Array.isArray(e) ? t : new o(t) } }) } }, function(e, t, i) { "use strict"; var l = i(2).flatten,
            p = i(2).identify;
        t.name = "setIsSubset", t.factory = function(e, t, r, n) { var s = r(i(28)),
                u = r(i(26)),
                c = r(i(22)),
                f = r(i(29)); return n("setIsSubset", { "Array | Matrix, Array | Matrix": function(e, t) { if (0 === c(u(e), new s(0))) return !0; if (0 === c(u(t), new s(0))) return !1; for (var r, n = p(l(Array.isArray(e) ? e : e.toArray()).sort(f)), i = p(l(Array.isArray(t) ? t : t.toArray()).sort(f)), o = 0; o < n.length; o++) { r = !1; for (var a = 0; a < i.length; a++)
                            if (0 === f(n[o].value, i[a].value) && n[o].identifier === i[a].identifier) { r = !0; break }
                        if (!1 === r) return !1 } return !0 } }) } }, function(e, t, i) { "use strict"; var c = i(2).flatten;
        t.name = "setMultiplicity", t.factory = function(e, t, r, n) { var o = r(i(29)),
                a = r(i(28)),
                s = r(i(26)),
                u = r(i(22)); return n("setMultiplicity", { "number | BigNumber | Fraction | Complex, Array | Matrix": function(e, t) { if (0 === u(s(t), new a(0))) return 0; for (var r = c(Array.isArray(t) ? t : t.toArray()), n = 0, i = 0; i < r.length; i++) 0 === o(r[i], e) && n++; return n } }) } }, function(e, t, c) { "use strict"; var f = c(2).flatten;
        t.name = "setPowerset", t.factory = function(e, t, r, n) { var i = r(c(28)),
                o = r(c(26)),
                a = r(c(22)),
                s = r(c(29)); return n("setPowerset", { "Array | Matrix": function(e) { if (0 === a(o(e), new i(0))) return []; for (var t = f(Array.isArray(e) ? e : e.toArray()).sort(s), r = [], n = 0; n.toString(2).length <= t.length;) r.push(u(t, n.toString(2).split("").reverse())), n++; return function(e) { for (var t = [], r = e.length - 1; 0 < r; r--)
                            for (var n = 0; n < r; n++) e[n].length > e[n + 1].length && (t = e[n], e[n] = e[n + 1], e[n + 1] = t); return e }(r) } });

            function u(e, t) { for (var r = [], n = 0; n < t.length; n++) "1" === t[n] && r.push(e[n]); return r } } }, function(e, t, i) { "use strict"; var a = i(2).flatten;
        t.name = "setSize", t.factory = function(e, t, r, n) { var o = r(i(29)); return n("setSize", { "Array | Matrix": function(e) { return Array.isArray(e) ? a(e).length : a(e.toArray()).length }, "Array | Matrix, boolean": function(e, t) { if (!1 === t || 0 === e.length) return Array.isArray(e) ? a(e).length : a(e.toArray()).length; for (var r = a(Array.isArray(e) ? e : e.toArray()).sort(o), n = 1, i = 1; i < r.length; i++) 0 !== o(r[i], r[i - 1]) && n++; return n } }) } }, function(e, t, f) { "use strict"; var l = f(2).flatten;
        t.name = "setUnion", t.factory = function(e, t, r, n) { var i = r(f(28)),
                o = r(f(75)),
                a = r(f(26)),
                s = r(f(22)),
                u = r(f(142)),
                c = r(f(143)); return n("setUnion", { "Array | Matrix, Array | Matrix": function(e, t) { if (0 === s(a(e), new i(0))) return l(t); if (0 === s(a(t), new i(0))) return l(e); var r = l(e),
                        n = l(t); return o(c(r, n), u(r, n)) } }) } }, function(e, t, r) { "use strict";
        e.exports = [r(311)] }, function(e, t, r) { "use strict"; var o = r(0),
            a = r(3).sign; var s = [
                [3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, .18577770618460315],
                [.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 2.1531153547440383e-8],
                [.30532663496123236, .36034489994980445, .12578172611122926, .016083785148742275, .0006587491615298378, .016315387137302097]
            ],
            u = [
                [23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171],
                [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495],
                [2.568520192289822, 1.8729528499234604, .5279051029514285, .06051834131244132, .0023352049762686918]
            ],
            c = Math.pow(2, 53);
        t.name = "erf", t.factory = function(t, e, r, n) { var i = n("erf", { number: function(e) { var t = Math.abs(e); return c <= t ? a(e) : t <= .46875 ? a(e) * function(e) { var t, r = e * e,
                            n = s[0][4] * r,
                            i = r; for (t = 0; t < 3; t += 1) n = (n + s[0][t]) * r, i = (i + u[0][t]) * r; return e * (n + s[0][3]) / (i + u[0][3]) }(t) : t <= 4 ? a(e) * (1 - function(e) { var t, r = s[1][8] * e,
                            n = e; for (t = 0; t < 7; t += 1) r = (r + s[1][t]) * e, n = (n + u[1][t]) * e; var i = (r + s[1][7]) / (n + u[1][7]),
                            o = parseInt(16 * e) / 16,
                            a = (e - o) * (e + o); return Math.exp(-o * o) * Math.exp(-a) * i }(t)) : a(e) * (1 - function(e) { var t, r = 1 / (e * e),
                            n = s[2][5] * r,
                            i = r; for (t = 0; t < 4; t += 1) n = (n + s[2][t]) * r, i = (i + u[2][t]) * r; var o = r * (n + s[2][4]) / (i + u[2][4]);
                        o = (.5641895835477563 - o) / e, r = parseInt(16 * e) / 16; var a = (e - r) * (e + r); return Math.exp(-r * r) * Math.exp(-a) * o }(t)) }, BigNumber: function(e) { return new t.BigNumber(i(e.toNumber())) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "erf\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict";
        e.exports = [r(313), r(93), r(145), r(144), r(146), r(314), r(315), r(316), r(317), r(139), r(147)] }, function(e, t, l) { "use strict"; var p = l(2).flatten;
        t.name = "mad", t.factory = function(e, t, r, n) { var i = r(l(23)),
                o = r(l(137)),
                a = r(l(144)),
                s = r(l(15)),
                u = r(l(36)),
                c = n("mad", { "Array | Matrix": f, "...": function(e) { return f(e) } }); return c.toTex = void 0, c;

            function f(e) { if (0 === (e = p(e.valueOf())).length) throw new Error("Cannot calculate median absolute deviation (mad) of an empty array"); try { var t = a(e); return a(o(e, function(e) { return i(s(e, t)) })) } catch (e) { throw e instanceof TypeError && -1 !== e.message.indexOf("median") ? new TypeError(e.message.replace("median", "mad")) : u(e, "mad") } } } }, function(e, t, o) { "use strict"; var u = o(2).flatten;
        t.name = "mode", t.factory = function(e, t, r, n) { var a = r(o(76)),
                s = r(o(56)); return n("mode", { "Array | Matrix": i, "...": function(e) { return i(e) } });

            function i(e) { if (0 === (e = u(e.valueOf())).length) throw new Error("Cannot calculate mode of an empty array"); for (var t = {}, r = [], n = 0, i = 0; i < e.length; i++) { var o = e[i]; if (s(o) && a(o)) throw new Error("Cannot calculate mode of an array containing NaN values");
                    o in t || (t[o] = 0), t[o]++, t[o] === n ? r.push(o) : t[o] > n && (n = t[o], r = [o]) } return r } } }, function(e, t, u) { "use strict"; var c = u(46);
        t.name = "prod", t.factory = function(e, t, r, n) { var i = r(u(21)),
                o = r(u(36)),
                a = n("prod", { "Array | Matrix": s, "Array | Matrix, number | BigNumber": function(e, t) { throw new Error("prod(A, dim) is not yet supported") }, "...": function(e) { return s(e) } }); return a.toTex = void 0, a;

            function s(e) { var r; if (c(e, function(t) { try { r = void 0 === r ? t : i(r, t) } catch (e) { throw o(e, "prod", t) } }), void 0 === r) throw new Error("Cannot calculate prod of an empty array"); return r } } }, function(e, t, n) { "use strict"; var d = n(3).isInteger,
            S = n(3).isNumber,
            O = n(2).flatten,
            y = n(53);
        t.name = "quantileSeq", t.factory = function(m, e, t, r) { var w = t(n(14)),
                N = t(n(10)),
                M = t(n(92)),
                E = t(n(52));

            function h(e, t, r) { var n = O(e),
                    i = n.length; if (0 === i) throw new Error("Cannot calculate quantile of an empty sequence"); if (S(t)) { var o = t * (i - 1),
                        a = o % 1; if (0 === a) { var s = r ? n[o] : M(n, o); return A(s), s } var u, c, f = Math.floor(o); if (r) u = n[f], c = n[f + 1];
                    else { c = M(n, f + 1), u = n[f]; for (var l = 0; l < f; ++l) 0 < E(n[l], u) && (u = n[l]) } return A(u), A(c), w(N(u, 1 - a), N(c, a)) } var p = t.times(i - 1); if (p.isInteger()) { p = p.toNumber(); var m = r ? n[p] : M(n, p); return A(m), m } var h, d, y = p.floor(),
                    g = p.minus(y),
                    v = y.toNumber(); if (r) h = n[v], d = n[v + 1];
                else { d = M(n, v + 1), h = n[v]; for (var x = 0; x < v; ++x) 0 < E(n[x], h) && (h = n[x]) }
                A(h), A(d); var b = new g.constructor(1); return w(N(h, b.minus(g)), N(d, g)) } var A = r({ "number | BigNumber | Unit": function(e) { return e } }); return function(e, t, r) { var n, i, o; if (arguments.length < 2 || 3 < arguments.length) throw new SyntaxError("Function quantileSeq requires two or three parameters"); if (y(e)) { if ("boolean" != typeof(r = r || !1)) throw new TypeError("Unexpected type of argument in function quantileSeq"); if (i = e.valueOf(), S(t)) { if (t < 0) throw new Error("N/prob must be non-negative"); if (t <= 1) return h(i, t, r); if (1 < t) { if (!d(t)) throw new Error("N must be a positive integer"); var a = t + 1;
                            n = new Array(t); for (var s = 0; s < t;) n[s] = h(i, ++s / a, r); return n } } if (m.isBigNumber(t)) { if (t.isNegative()) throw new Error("N/prob must be non-negative"); if (o = new t.constructor(1), t.lte(o)) return new m.BigNumber(h(i, t, r)); if (t.gt(o)) { if (!t.isInteger()) throw new Error("N must be a positive integer"); var u = t.toNumber(); if (4294967295 < u) throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array"); var c = new m.BigNumber(u + 1);
                            n = new Array(u); for (var f = 0; f < u;) n[f] = new m.BigNumber(h(i, new m.BigNumber(++f).div(c), r)); return n } } if (Array.isArray(t)) { n = new Array(t.length); for (var l = 0; l < n.length; ++l) { var p = t[l]; if (S(p)) { if (p < 0 || 1 < p) throw new Error("Probability must be between 0 and 1, inclusive") } else { if (!m.isBigNumber(p)) throw new TypeError("Unexpected type of argument in function quantileSeq"); if (o = new p.constructor(1), p.isNegative() || p.gt(o)) throw new Error("Probability must be between 0 and 1, inclusive") }
                            n[l] = h(i, p, r) } return n } throw new TypeError("Unexpected type of argument in function quantileSeq") } throw new TypeError("Unexpected type of argument in function quantileSeq") } } }, function(e, t, u) { "use strict";
        t.name = "std", t.factory = function(e, t, r, n) { var i = r(u(45)),
                o = r(u(147)),
                a = n("std", { "Array | Matrix": s, "Array | Matrix, string": s, "...": function(e) { return s(e) } }); return a.toTex = void 0, a;

            function s(e, t) { if (0 === e.length) throw new SyntaxError("Function std requires one or more parameters (0 provided)"); try { return i(o.apply(null, arguments)) } catch (e) { throw e instanceof TypeError && -1 !== e.message.indexOf(" var") ? new TypeError(e.message.replace(" var", " std")) : e } } } }, function(e, t, r) { "use strict";
        e.exports = [r(105), r(319)] }, function(e, t, r) { "use strict"; var s = r(9).isString,
            u = r(9).format;

        function o(e, o, a) { return e.replace(/\$([\w.]+)/g, function(e, t) { for (var r = t.split("."), n = o[r.shift()]; r.length && void 0 !== n;) { var i = r.shift();
                    n = i ? n[i] : n + "." } return void 0 !== n ? s(n) ? n : u(n, a) : e }) }
        t.name = "print", t.factory = function(e, t, r, n) { var i = n("print", { "string, Object | Array": o, "string, Object | Array, number | Object": o }); return i.toTex = void 0, i } }, function(e, t, r) { "use strict";
        e.exports = [r(321), r(322), r(323), r(324), r(325), r(326), r(327), r(328), r(329), r(330), r(331), r(332), r(333), r(334), r(335), r(336), r(337), r(338), r(339), r(340), r(341), r(342), r(343), r(344), r(345)] }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "acos", t.factory = function(t, r, e, n) { var i = n("acos", { number: function(e) { return -1 <= e && e <= 1 || r.predictable ? Math.acos(e) : new t.Complex(e, 0).acos() }, Complex: function(e) { return e.acos() }, BigNumber: function(e) { return e.acos() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\cos^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0); var a = Math.acosh || function(e) { return Math.log(Math.sqrt(e * e - 1) + e) };
        t.name = "acosh", t.factory = function(t, r, e, n) { var i = n("acosh", { number: function(e) { return 1 <= e || r.predictable ? a(e) : e <= -1 ? new t.Complex(Math.log(Math.sqrt(e * e - 1) - e), Math.PI) : new t.Complex(e, 0).acosh() }, Complex: function(e) { return e.acosh() }, BigNumber: function(e) { return e.acosh() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\cosh^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "acot", t.factory = function(t, e, r, n) { var i = n("acot", { number: function(e) { return Math.atan(1 / e) }, Complex: function(e) { return e.acot() }, BigNumber: function(e) { return new t.BigNumber(1).div(e).atan() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\cot^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "acoth", t.factory = function(t, r, e, n) { var i = n("acoth", { number: function(e) { return 1 <= e || e <= -1 || r.predictable ? isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0 : new t.Complex(e, 0).acoth() }, Complex: function(e) { return e.acoth() }, BigNumber: function(e) { return new t.BigNumber(1).div(e).atanh() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\coth^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "acsc", t.factory = function(t, r, e, n) { var i = n("acsc", { number: function(e) { return e <= -1 || 1 <= e || r.predictable ? Math.asin(1 / e) : new t.Complex(e, 0).acsc() }, Complex: function(e) { return e.acsc() }, BigNumber: function(e) { return new t.BigNumber(1).div(e).asin() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\csc^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "acsch", t.factory = function(t, e, r, n) { var i = n("acsch", { number: function(e) { return e = 1 / e, Math.log(e + Math.sqrt(e * e + 1)) }, Complex: function(e) { return e.acsch() }, BigNumber: function(e) { return new t.BigNumber(1).div(e).asinh() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "asec", t.factory = function(t, r, e, n) { var i = n("asec", { number: function(e) { return e <= -1 || 1 <= e || r.predictable ? Math.acos(1 / e) : new t.Complex(e, 0).asec() }, Complex: function(e) { return e.asec() }, BigNumber: function(e) { return new t.BigNumber(1).div(e).acos() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\sec^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "asech", t.factory = function(r, n, e, t) { var i = t("asech", { number: function(e) { if (e <= 1 && -1 <= e || n.predictable) { e = 1 / e; var t = Math.sqrt(e * e - 1); return 0 < e || n.predictable ? Math.log(t + e) : new r.Complex(Math.log(t - e), Math.PI) } return new r.Complex(e, 0).asech() }, Complex: function(e) { return e.asech() }, BigNumber: function(e) { return new r.BigNumber(1).div(e).acosh() }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "asin", t.factory = function(t, r, e, n) { var i = n("asin", { number: function(e) { return -1 <= e && e <= 1 || r.predictable ? Math.asin(e) : new t.Complex(e, 0).asin() }, Complex: function(e) { return e.asin() }, BigNumber: function(e) { return e.asin() }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\sin^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "asinh", t.factory = function(e, t, r, n) { var i = n("asinh", { number: Math.asinh || function(e) { return Math.log(Math.sqrt(e * e + 1) + e) }, Complex: function(e) { return e.asinh() }, BigNumber: function(e) { return e.asinh() }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\sinh^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "atan", t.factory = function(e, t, r, n) { var i = n("atan", { number: function(e) { return Math.atan(e) }, Complex: function(e) { return e.atan() }, BigNumber: function(e) { return e.atan() }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\tan^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, m) { "use strict";
        t.name = "atan2", t.factory = function(r, e, t, n) { var i = t(m(1)),
                o = t(m(25)),
                a = t(m(18)),
                s = t(m(133)),
                u = t(m(20)),
                c = t(m(19)),
                f = t(m(7)),
                l = t(m(6)),
                p = n("atan2", { "number, number": Math.atan2, "BigNumber, BigNumber": function(e, t) { return r.BigNumber.atan2(e, t) }, "SparseMatrix, SparseMatrix": function(e, t) { return s(e, t, p, !1) }, "SparseMatrix, DenseMatrix": function(e, t) { return o(t, e, p, !0) }, "DenseMatrix, SparseMatrix": function(e, t) { return a(e, t, p, !1) }, "DenseMatrix, DenseMatrix": function(e, t) { return f(e, t, p) }, "Array, Array": function(e, t) { return p(i(e), i(t)).valueOf() }, "Array, Matrix": function(e, t) { return p(i(e), t) }, "Matrix, Array": function(e, t) { return p(e, i(t)) }, "SparseMatrix, number | BigNumber": function(e, t) { return u(e, t, p, !1) }, "DenseMatrix, number | BigNumber": function(e, t) { return l(e, t, p, !1) }, "number | BigNumber, SparseMatrix": function(e, t) { return c(t, e, p, !0) }, "number | BigNumber, DenseMatrix": function(e, t) { return l(t, e, p, !0) }, "Array, number | BigNumber": function(e, t) { return l(i(e), t, p, !1).valueOf() }, "number | BigNumber, Array": function(e, t) { return l(i(t), e, p, !0).valueOf() } }); return p.toTex = { 2: "\\mathrm{atan2}\\left(${args}\\right)" }, p } }, function(e, t, r) { "use strict"; var o = r(0); var a = Math.atanh || function(e) { return Math.log((1 + e) / (1 - e)) / 2 };
        t.name = "atanh", t.factory = function(t, r, e, n) { var i = n("atanh", { number: function(e) { return e <= 1 && -1 <= e || r.predictable ? a(e) : new t.Complex(e, 0).atanh() }, Complex: function(e) { return e.atanh() }, BigNumber: function(e) { return e.atanh() }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\tanh^{-1}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "cos", t.factory = function(t, e, r, n) { var i = n("cos", { number: Math.cos, Complex: function(e) { return e.cos() }, BigNumber: function(e) { return e.cos() }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cos is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\cos\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0); var a = Math.cosh || function(e) { return (Math.exp(e) + Math.exp(-e)) / 2 };
        t.name = "cosh", t.factory = function(t, e, r, n) { var i = n("cosh", { number: a, Complex: function(e) { return e.cosh() }, BigNumber: function(e) { return e.cosh() }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cosh is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\cosh\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "cot", t.factory = function(t, e, r, n) { var i = n("cot", { number: function(e) { return 1 / Math.tan(e) }, Complex: function(e) { return e.cot() }, BigNumber: function(e) { return new t.BigNumber(1).div(e.tan()) }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\cot\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);

        function a(e) { var t = Math.exp(2 * e); return (t + 1) / (t - 1) }
        t.name = "coth", t.factory = function(t, e, r, n) { var i = n("coth", { number: a, Complex: function(e) { return e.coth() }, BigNumber: function(e) { return new t.BigNumber(1).div(e.tanh()) }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function coth is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\coth\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "csc", t.factory = function(t, e, r, n) { var i = n("csc", { number: function(e) { return 1 / Math.sin(e) }, Complex: function(e) { return e.csc() }, BigNumber: function(e) { return new t.BigNumber(1).div(e.sin()) }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csc is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\csc\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0),
            n = r(3).sign;

        function a(e) { return 0 === e ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * n(e) }
        t.name = "csch", t.factory = function(t, e, r, n) { var i = n("csch", { number: a, Complex: function(e) { return e.csch() }, BigNumber: function(e) { return new t.BigNumber(1).div(e.sinh()) }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csch is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\mathrm{csch}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "sec", t.factory = function(t, e, r, n) { var i = n("sec", { number: function(e) { return 1 / Math.cos(e) }, Complex: function(e) { return e.sec() }, BigNumber: function(e) { return new t.BigNumber(1).div(e.cos()) }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sec is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\sec\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);

        function a(e) { return 2 / (Math.exp(e) + Math.exp(-e)) }
        t.name = "sech", t.factory = function(t, e, r, n) { var i = n("sech", { number: a, Complex: function(e) { return e.sech() }, BigNumber: function(e) { return new t.BigNumber(1).div(e.cosh()) }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sech is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i) } }); return i.toTex = { 1: "\\mathrm{sech}\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "sin", t.factory = function(t, e, r, n) { var i = n("sin", { number: Math.sin, Complex: function(e) { return e.sin() }, BigNumber: function(e) { return e.sin() }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sin is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\sin\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0); var a = Math.sinh || function(e) { return (Math.exp(e) - Math.exp(-e)) / 2 };
        t.name = "sinh", t.factory = function(t, e, r, n) { var i = n("sinh", { number: a, Complex: function(e) { return e.sinh() }, BigNumber: function(e) { return e.sinh() }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sinh is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\sinh\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "tan", t.factory = function(t, e, r, n) { var i = n("tan", { number: Math.tan, Complex: function(e) { return e.tan() }, BigNumber: function(e) { return e.tan() }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tan is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\tan\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict"; var o = r(0); var a = Math.tanh || function(e) { var t = Math.exp(2 * e); return (t - 1) / (t + 1) };
        t.name = "tanh", t.factory = function(t, e, r, n) { var i = n("tanh", { number: a, Complex: function(e) { return e.tanh() }, BigNumber: function(e) { return e.tanh() }, Unit: function(e) { if (!e.hasBase(t.Unit.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tanh is no angle"); return i(e.value) }, "Array | Matrix": function(e) { return o(e, i, !0) } }); return i.toTex = { 1: "\\tanh\\left(${args[0]}\\right)" }, i } }, function(e, t, r) { "use strict";
        e.exports = [r(347)] }, function(e, t, c) { "use strict";
        t.name = "to", t.factory = function(e, t, r, n) { var i = c(4),
                o = r(c(1)),
                a = r(c(7)),
                s = r(c(6)),
                u = n("to", { "Unit, Unit | string": function(e, t) { return e.to(t) }, "Matrix, Matrix": function(e, t) { return a(e, t, u) }, "Array, Array": function(e, t) { return u(o(e), o(t)).valueOf() }, "Array, Matrix": function(e, t) { return u(o(e), t) }, "Matrix, Array": function(e, t) { return u(e, o(t)) }, "Matrix, any": function(e, t) { return s(e, t, u, !1) }, "any, Matrix": function(e, t) { return s(t, e, u, !0) }, "Array, any": function(e, t) { return s(o(e), t, u, !1).valueOf() }, "any, Array": function(e, t) { return s(o(t), e, u, !0).valueOf() } }); return u.toTex = { 2: "\\left(${args[0]}".concat(i.operators.to, "${args[1]}\\right)") }, u } }, function(e, t, r) { "use strict";
        e.exports = [r(349), r(35), r(60), r(56), r(71), r(350), r(59), r(76), r(24)] }, function(e, t, r) { "use strict"; var o = r(5);
        t.name = "clone", t.factory = function(e, t, r, n) { var i = n("clone", { any: o.clone }); return i.toTex = void 0, i } }, function(e, t, r) { "use strict"; var o = r(0);
        t.name = "isPrime", t.factory = function(r, e, t, n) { var i = n("isPrime", { number: function(e) { if (e < 2) return !1; if (2 === e) return !0; if (e % 2 == 0) return !1; for (var t = 3; t * t <= e; t += 2)
                        if (e % t == 0) return !1;
                    return !0 }, BigNumber: function(e) { if (e.lt(2)) return !1; if (e.equals(2)) return !0; if (e.mod(2).isZero()) return !1; for (var t = r.BigNumber(3); t.times(t).lte(e); t = t.plus(1))
                        if (e.mod(t).isZero()) return !1;
                    return !0 }, "Array | Matrix": function(e) { return o(e, i) } }); return i } }, function(e, t, r) { "use strict";
        e.exports = [r(148), r(554), r(558), r(560), r(571), r(42), r(152)] }, function(e, t) { e.exports = { name: "bignumber", category: "Construction", syntax: ["bignumber(x)"], description: "Create a big number from a number or string.", examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"], seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"] } }, function(e, t) { e.exports = { name: "boolean", category: "Construction", syntax: ["x", "boolean(x)"], description: "Convert a string or number into a boolean.", examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"], seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"] } }, function(e, t) { e.exports = { name: "complex", category: "Construction", syntax: ["complex()", "complex(re, im)", "complex(string)"], description: "Create a complex number.", examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'], seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"] } }, function(e, t) { e.exports = { name: "createUnit", category: "Construction", syntax: ["createUnit(definitions)", "createUnit(name, definition)"], description: "Create a user-defined unit and register it with the Unit type.", examples: ['createUnit("foo")', 'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})', 'createUnit("mph", "1 mile/hour")'], seealso: ["unit", "splitUnit"] } }, function(e, t) { e.exports = { name: "fraction", category: "Construction", syntax: ["fraction(num)", "fraction(num,den)"], description: "Create a fraction from a number or from a numerator and denominator.", examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)"], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"] } }, function(e, t) { e.exports = { name: "index", category: "Construction", syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"], description: "Create an index to get or replace a subset of a matrix", examples: ["[]", "[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[0:2, 0:2] = ones(2, 2)"], seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"] } }, function(e, t) { e.exports = { name: "matrix", category: "Construction", syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"], description: "Create a matrix.", examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'], seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"] } }, function(e, t) { e.exports = { name: "number", category: "Construction", syntax: ["x", "number(x)", "number(unit, valuelessUnit)"], description: "Create a number or convert a string or boolean into a number.", examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number(unit("52cm"), "m")'], seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"] } }, function(e, t) { e.exports = { name: "sparse", category: "Construction", syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'], description: "Create a sparse matrix.", examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'], seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"] } }, function(e, t) { e.exports = { name: "splitUnit", category: "Construction", syntax: ["splitUnit(unit: Unit, parts: Unit[])"], description: "Split a unit in an array of units whose sum is equal to the original unit.", examples: ['splitUnit(1 m, ["feet", "inch"])'], seealso: ["unit", "createUnit"] } }, function(e, t) { e.exports = { name: "string", category: "Construction", syntax: ['"text"', "string(x)"], description: "Create a string or convert a value to a string", examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"] } }, function(e, t) { e.exports = { name: "unit", category: "Construction", syntax: ["value unit", "unit(value, unit)", "unit(string)"], description: "Create a unit.", examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"] } }, function(e, t) { e.exports = { name: "false", category: "Constants", syntax: ["false"], description: "Boolean value false", examples: ["false"], seealso: ["true"] } }, function(e, t) { e.exports = { name: "i", category: "Constants", syntax: ["i"], description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.", examples: ["i", "i * i", "sqrt(-1)"], seealso: [] } }, function(e, t) { e.exports = { name: "Infinity", category: "Constants", syntax: ["Infinity"], description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.", examples: ["Infinity", "1 / 0"], seealso: [] } }, function(e, t) { e.exports = { name: "LN2", category: "Constants", syntax: ["LN2"], description: "Returns the natural logarithm of 2, approximately equal to 0.693", examples: ["LN2", "log(2)"], seealso: [] } }, function(e, t) { e.exports = { name: "LN10", category: "Constants", syntax: ["LN10"], description: "Returns the natural logarithm of 10, approximately equal to 2.302", examples: ["LN10", "log(10)"], seealso: [] } }, function(e, t) { e.exports = { name: "LOG2E", category: "Constants", syntax: ["LOG2E"], description: "Returns the base-2 logarithm of E, approximately equal to 1.442", examples: ["LOG2E", "log(e, 2)"], seealso: [] } }, function(e, t) { e.exports = { name: "LOG10E", category: "Constants", syntax: ["LOG10E"], description: "Returns the base-10 logarithm of E, approximately equal to 0.434", examples: ["LOG10E", "log(e, 10)"], seealso: [] } }, function(e, t) { e.exports = { name: "NaN", category: "Constants", syntax: ["NaN"], description: "Not a number", examples: ["NaN", "0 / 0"], seealso: [] } }, function(e, t) { e.exports = { name: "null", category: "Constants", syntax: ["null"], description: "Value null", examples: ["null"], seealso: ["true", "false"] } }, function(e, t) { e.exports = { name: "phi", category: "Constants", syntax: ["phi"], description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...", examples: ["phi"], seealso: [] } }, function(e, t) { e.exports = { name: "SQRT1_2", category: "Constants", syntax: ["SQRT1_2"], description: "Returns the square root of 1/2, approximately equal to 0.707", examples: ["SQRT1_2", "sqrt(1/2)"], seealso: [] } }, function(e, t) { e.exports = { name: "SQRT2", category: "Constants", syntax: ["SQRT2"], description: "Returns the square root of 2, approximately equal to 1.414", examples: ["SQRT2", "sqrt(2)"], seealso: [] } }, function(e, t) { e.exports = { name: "tau", category: "Constants", syntax: ["tau"], description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.", examples: ["tau", "2 * pi"], seealso: ["pi"] } }, function(e, t) { e.exports = { name: "true", category: "Constants", syntax: ["true"], description: "Boolean value true", examples: ["true"], seealso: ["false"] } }, function(e, t) { e.exports = { name: "version", category: "Constants", syntax: ["version"], description: "A string with the version number of math.js", examples: ["version"], seealso: [] } }, function(e, t) { e.exports = { name: "derivative", category: "Algebra", syntax: ["derivative(expr, variable)", "derivative(expr, variable, {simplify: boolean})"], description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.", examples: ['derivative("2x^3", "x")', 'derivative("2x^3", "x", {simplify: false})', 'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")', 'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)", "df.eval({x: 3})"], seealso: ["simplify", "parse", "eval"] } }, function(e, t) { e.exports = { name: "lsolve", category: "Algebra", syntax: ["x=lsolve(L, b)"], description: "Solves the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.", examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"], seealso: ["lup", "lusolve", "usolve", "matrix", "sparse"] } }, function(e, t) { e.exports = { name: "lup", category: "Algebra", syntax: ["lup(m)"], description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U", examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"], seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"] } }, function(e, t) { e.exports = { name: "lusolve", category: "Algebra", syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"], description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.", examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"], seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"] } }, function(e, t) { e.exports = { name: "simplify", category: "Algebra", syntax: ["simplify(expr)", "simplify(expr, rules)"], description: "Simplify an expression tree.", examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)", "simplified.eval({x: 2})"], seealso: ["derivative", "parse", "eval"] } }, function(e, t) { e.exports = { name: "rationalize", category: "Algebra", syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"], description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.", examples: ['rationalize("2x/y - y/(x+1)")', 'rationalize("2x/y - y/(x+1)", true)'], seealso: ["simplify"] } }, function(e, t) { e.exports = { name: "slu", category: "Algebra", syntax: ["slu(A, order, threshold)"], description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U", examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"], seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"] } }, function(e, t) { e.exports = { name: "usolve", category: "Algebra", syntax: ["x=usolve(U, b)"], description: "Solves the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.", examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"], seealso: ["lup", "lusolve", "lsolve", "matrix", "sparse"] } }, function(e, t) { e.exports = { name: "qr", category: "Algebra", syntax: ["qr(A)"], description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.", examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"], seealso: ["lup", "slu", "matrix"] } }, function(e, t) { e.exports = { name: "abs", category: "Arithmetic", syntax: ["abs(x)"], description: "Compute the absolute value.", examples: ["abs(3.5)", "abs(-4.2)"], seealso: ["sign"] } }, function(e, t) { e.exports = { name: "add", category: "Operators", syntax: ["x + y", "add(x, y)"], description: "Add two values.", examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'], seealso: ["subtract"] } }, function(e, t) { e.exports = { name: "cbrt", category: "Arithmetic", syntax: ["cbrt(x)", "cbrt(x, allRoots)"], description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned", examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"], seealso: ["square", "sqrt", "cube", "multiply"] } }, function(e, t) { e.exports = { name: "ceil", category: "Arithmetic", syntax: ["ceil(x)"], description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.", examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"], seealso: ["floor", "fix", "round"] } }, function(e, t) { e.exports = { name: "cube", category: "Arithmetic", syntax: ["cube(x)"], description: "Compute the cube of a value. The cube of x is x * x * x.", examples: ["cube(2)", "2^3", "2 * 2 * 2"], seealso: ["multiply", "square", "pow"] } }, function(e, t) { e.exports = { name: "divide", category: "Operators", syntax: ["x / y", "divide(x, y)"], description: "Divide two values.", examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"], seealso: ["multiply"] } }, function(e, t) { e.exports = { name: "dotDivide", category: "Operators", syntax: ["x ./ y", "dotDivide(x, y)"], description: "Divide two values element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"], seealso: ["multiply", "dotMultiply", "divide"] } }, function(e, t) { e.exports = { name: "dotMultiply", category: "Operators", syntax: ["x .* y", "dotMultiply(x, y)"], description: "Multiply two values element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"], seealso: ["multiply", "divide", "dotDivide"] } }, function(e, t) { e.exports = { name: "dotpow", category: "Operators", syntax: ["x .^ y", "dotpow(x, y)"], description: "Calculates the power of x to y element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"], seealso: ["pow"] } }, function(e, t) { e.exports = { name: "exp", category: "Arithmetic", syntax: ["exp(x)"], description: "Calculate the exponent of a value.", examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"], seealso: ["expm", "expm1", "pow", "log"] } }, function(e, t) { e.exports = { name: "expm", category: "Arithmetic", syntax: ["exp(x)"], description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.", examples: ["expm([[0,2],[0,0]])"], seealso: ["exp"] } }, function(e, t) { e.exports = { name: "expm1", category: "Arithmetic", syntax: ["expm1(x)"], description: "Calculate the value of subtracting 1 from the exponential value.", examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"], seealso: ["exp", "pow", "log"] } }, function(e, t) { e.exports = { name: "fix", category: "Arithmetic", syntax: ["fix(x)"], description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.", examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"], seealso: ["ceil", "floor", "round"] } }, function(e, t) { e.exports = { name: "floor", category: "Arithmetic", syntax: ["floor(x)"], description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.", examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"], seealso: ["ceil", "fix", "round"] } }, function(e, t) { e.exports = { name: "gcd", category: "Arithmetic", syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"], description: "Compute the greatest common divisor.", examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"], seealso: ["lcm", "xgcd"] } }, function(e, t) { e.exports = { name: "hypot", category: "Arithmetic", syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"], description: "Calculate the hypotenusa of a list with values. ", examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"], seealso: ["abs", "norm"] } }, function(e, t) { e.exports = { name: "lcm", category: "Arithmetic", syntax: ["lcm(x, y)"], description: "Compute the least common multiple.", examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"], seealso: ["gcd"] } }, function(e, t) { e.exports = { name: "log", category: "Arithmetic", syntax: ["log(x)", "log(x, base)"], description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).", examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"], seealso: ["exp", "log1p", "log2", "log10"] } }, function(e, t) { e.exports = { name: "log2", category: "Arithmetic", syntax: ["log2(x)"], description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.", examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"], seealso: ["exp", "log1p", "log", "log10"] } }, function(e, t) { e.exports = { name: "log1p", category: "Arithmetic", syntax: ["log1p(x)", "log1p(x, base)"], description: "Calculate the logarithm of a `value+1`", examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)", "log1p(9999) / log(10)"], seealso: ["exp", "log", "log2", "log10"] } }, function(e, t) { e.exports = { name: "log10", category: "Arithmetic", syntax: ["log10(x)"], description: "Compute the 10-base logarithm of a value.", examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"], seealso: ["exp", "log"] } }, function(e, t) { e.exports = { name: "mod", category: "Operators", syntax: ["x % y", "x mod y", "mod(x, y)"], description: "Calculates the modulus, the remainder of an integer division.", examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"], seealso: ["divide"] } }, function(e, t) { e.exports = { name: "multiply", category: "Operators", syntax: ["x * y", "multiply(x, y)"], description: "multiply two values.", examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"], seealso: ["divide"] } }, function(e, t) { e.exports = { name: "norm", category: "Arithmetic", syntax: ["norm(x)", "norm(x, p)"], description: "Calculate the norm of a number, vector or matrix.", examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")'] } }, function(e, t) { e.exports = { name: "nthRoot", category: "Arithmetic", syntax: ["nthRoot(a)", "nthRoot(a, root)"], description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".', examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"], seealso: ["nthRoots", "pow", "sqrt"] } }, function(e, t) { e.exports = { name: "nthRoots", category: "Arithmetic", syntax: ["nthRoots(A)", "nthRoots(A, root)"], description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.', examples: ["nthRoots(1)", "nthRoots(1, 3)"], seealso: ["sqrt", "pow", "nthRoot"] } }, function(e, t) { e.exports = { name: "pow", category: "Operators", syntax: ["x ^ y", "pow(x, y)"], description: "Calculates the power of x to y, x^y.", examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)"], seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"] } }, function(e, t) { e.exports = { name: "round", category: "Arithmetic", syntax: ["round(x)", "round(x, n)"], description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.", examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"], seealso: ["ceil", "floor", "fix"] } }, function(e, t) { e.exports = { name: "sign", category: "Arithmetic", syntax: ["sign(x)"], description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.", examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"], seealso: ["abs"] } }, function(e, t) { e.exports = { name: "sqrt", category: "Arithmetic", syntax: ["sqrt(x)"], description: "Compute the square root value. If x = y * y, then y is the square root of x.", examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"], seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"] } }, function(e, t) { e.exports = { name: "sqrtm", category: "Arithmetic", syntax: ["sqrtm(x)"], description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.", examples: ["sqrtm([[1, 2], [3, 4]])"], seealso: ["sqrt", "abs", "square", "multiply"] } }, function(e, t) { e.exports = { name: "square", category: "Arithmetic", syntax: ["square(x)"], description: "Compute the square of a value. The square of x is x * x.", examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"], seealso: ["multiply", "pow", "sqrt", "cube"] } }, function(e, t) { e.exports = { name: "subtract", category: "Operators", syntax: ["x - y", "subtract(x, y)"], description: "subtract two values.", examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"], seealso: ["add"] } }, function(e, t) { e.exports = { name: "unaryMinus", category: "Operators", syntax: ["-x", "unaryMinus(x)"], description: "Inverse the sign of a value. Converts booleans and strings to numbers.", examples: ["-4.5", "-(-5.6)", '-"22"'], seealso: ["add", "subtract", "unaryPlus"] } }, function(e, t) { e.exports = { name: "unaryPlus", category: "Operators", syntax: ["+x", "unaryPlus(x)"], description: "Converts booleans and strings to numbers.", examples: ["+true", '+"2"'], seealso: ["add", "subtract", "unaryMinus"] } }, function(e, t) { e.exports = { name: "xgcd", category: "Arithmetic", syntax: ["xgcd(a, b)"], description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.", examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"], seealso: ["gcd", "lcm"] } }, function(e, t) { e.exports = { name: "bitAnd", category: "Bitwise", syntax: ["x & y", "bitAnd(x, y)"], description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0", examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"], seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] } }, function(e, t) { e.exports = { name: "bitNot", category: "Bitwise", syntax: ["~x", "bitNot(x)"], description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.", examples: ["~1", "~2", "bitNot([2, -3, 4])"], seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] } }, function(e, t) { e.exports = { name: "bitOr", category: "Bitwise", syntax: ["x | y", "bitOr(x, y)"], description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.", examples: ["5 | 3", "bitOr([1, 2, 3], 4)"], seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] } }, function(e, t) { e.exports = { name: "bitXor", category: "Bitwise", syntax: ["bitXor(x, y)"], description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.", examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"], seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"] } }, function(e, t) { e.exports = { name: "leftShift", category: "Bitwise", syntax: ["x << y", "leftShift(x, y)"], description: "Bitwise left logical shift of a value x by y number of bits.", examples: ["4 << 1", "8 >> 1"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"] } }, function(e, t) { e.exports = { name: "rightArithShift", category: "Bitwise", syntax: ["x >> y", "rightArithShift(x, y)"], description: "Bitwise right arithmetic shift of a value x by y number of bits.", examples: ["8 >> 1", "4 << 1", "-12 >> 2"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"] } }, function(e, t) { e.exports = { name: "rightLogShift", category: "Bitwise", syntax: ["x >>> y", "rightLogShift(x, y)"], description: "Bitwise right logical shift of a value x by y number of bits.", examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"] } }, function(e, t) { e.exports = { name: "bellNumbers", category: "Combinatorics", syntax: ["bellNumbers(n)"], description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.", examples: ["bellNumbers(3)", "bellNumbers(8)"], seealso: ["stirlingS2"] } }, function(e, t) { e.exports = { name: "catalan", category: "Combinatorics", syntax: ["catalan(n)"], description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.", examples: ["catalan(3)", "catalan(8)"], seealso: ["bellNumbers"] } }, function(e, t) { e.exports = { name: "composition", category: "Combinatorics", syntax: ["composition(n, k)"], description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.", examples: ["composition(5, 3)"], seealso: ["combinations"] } }, function(e, t) { e.exports = { name: "stirlingS2", category: "Combinatorics", syntax: ["stirlingS2(n, k)"], description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.", examples: ["stirlingS2(5, 3)"], seealso: ["bellNumbers"] } }, function(e, t) { e.exports = { name: "config", category: "Core", syntax: ["config()", "config(options)"], description: "Get configuration or change configuration.", examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})', "1/3 + 1/4"], seealso: [] } }, function(e, t) { e.exports = { name: "import", category: "Core", syntax: ["import(functions)", "import(functions, options)"], description: "Import functions or constants from an object.", examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)", "myConstant"], seealso: [] } }, function(e, t) { e.exports = { name: "typed", category: "Core", syntax: ["typed(signatures)", "typed(name, signatures)"], description: "Create a typed function.", examples: ['double = typed({ "number, number": f(x)=x+x })', "double(2)", 'double("hello")'], seealso: [] } }, function(e, t) { e.exports = { name: "arg", category: "Complex", syntax: ["arg(x)"], description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).", examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"], seealso: ["re", "im", "conj", "abs"] } }, function(e, t) { e.exports = { name: "conj", category: "Complex", syntax: ["conj(x)"], description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.", examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"], seealso: ["re", "im", "abs", "arg"] } }, function(e, t) { e.exports = { name: "re", category: "Complex", syntax: ["re(x)"], description: "Get the real part of a complex number.", examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"], seealso: ["im", "conj", "abs", "arg"] } }, function(e, t) { e.exports = { name: "im", category: "Complex", syntax: ["im(x)"], description: "Get the imaginary part of a complex number.", examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"], seealso: ["re", "conj", "abs", "arg"] } }, function(e, t) { e.exports = { name: "eval", category: "Expression", syntax: ["eval(expression)", "eval([expr1, expr2, expr3, ...])"], description: "Evaluate an expression or an array with expressions.", examples: ['eval("2 + 3")', 'eval("sqrt(" + 4 + ")")'], seealso: [] } }, function(e, t) { e.exports = { name: "help", category: "Expression", syntax: ["help(object)", "help(string)"], description: "Display documentation on a function or data type.", examples: ["help(sqrt)", 'help("complex")'], seealso: [] } }, function(e, t) { e.exports = { name: "distance", category: "Geometry", syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2])"], description: "Calculates the Euclidean distance between two points.", examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"], seealso: [] } }, function(e, t) { e.exports = { name: "intersect", category: "Geometry", syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"], description: "Computes the intersection point of lines and/or planes.", examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"], seealso: [] } }, function(e, t) { e.exports = { name: "and", category: "Logical", syntax: ["x and y", "and(x, y)"], description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.", examples: ["true and false", "true and true", "2 and 4"], seealso: ["not", "or", "xor"] } }, function(e, t) { e.exports = { name: "not", category: "Logical", syntax: ["not x", "not(x)"], description: "Logical not. Flips the boolean value of given argument.", examples: ["not true", "not false", "not 2", "not 0"], seealso: ["and", "or", "xor"] } }, function(e, t) { e.exports = { name: "or", category: "Logical", syntax: ["x or y", "or(x, y)"], description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.", examples: ["true or false", "false or false", "0 or 4"], seealso: ["not", "and", "xor"] } }, function(e, t) { e.exports = { name: "xor", category: "Logical", syntax: ["x xor y", "xor(x, y)"], description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.", examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"], seealso: ["not", "and", "or"] } }, function(e, t) { e.exports = { name: "concat", category: "Matrix", syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"], description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.", examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"], seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "cross", category: "Matrix", syntax: ["cross(A, B)"], description: "Calculate the cross product for two vectors in three dimensional space.", examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"], seealso: ["multiply", "dot"] } }, function(e, t) { e.exports = { name: "transpose", category: "Matrix", syntax: ["x'", "ctranspose(x)"], description: "Complex Conjugate and Transpose a matrix", examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"] } }, function(e, t) { e.exports = { name: "det", category: "Matrix", syntax: ["det(x)"], description: "Calculate the determinant of a matrix", examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"], seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "diag", category: "Matrix", syntax: ["diag(x)", "diag(x, k)"], description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.", examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"], seealso: ["concat", "det", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "dot", category: "Matrix", syntax: ["dot(A, B)", "A * B"], description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn", examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"], seealso: ["multiply", "cross"] } }, function(e, t) { e.exports = { name: "getMatrixDataType", category: "Matrix", syntax: ["getMatrixDataType(x)"], description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".', examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", 'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"], seealso: ["matrix", "sparse", "typeof"] } }, function(e, t) { e.exports = { name: "identity", category: "Matrix", syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"], description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.", examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "identity(size(a))"], seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "filter", category: "Matrix", syntax: ["filter(x, test)"], description: "Filter items in a matrix.", examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"], seealso: ["sort", "map", "forEach"] } }, function(e, t) { e.exports = { name: "flatten", category: "Matrix", syntax: ["flatten(x)"], description: "Flatten a multi dimensional matrix into a single dimensional matrix.", examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"], seealso: ["concat", "resize", "size", "squeeze"] } }, function(e, t) { e.exports = { name: "forEach", category: "Matrix", syntax: ["forEach(x, callback)"], description: "Iterates over all elements of a matrix/array, and executes the given callback function.", examples: ["forEach([1, 2, 3], function(val) { console.log(val) })"], seealso: ["map", "sort", "filter"] } }, function(e, t) { e.exports = { name: "inv", category: "Matrix", syntax: ["inv(x)"], description: "Calculate the inverse of a matrix", examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"], seealso: ["concat", "det", "diag", "identity", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "kron", category: "Matrix", syntax: ["kron(x, y)"], description: "Calculates the kronecker product of 2 matrices or vectors.", examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"], seealso: ["multiply", "dot", "cross"] } }, function(e, t) { e.exports = { name: "map", category: "Matrix", syntax: ["map(x, callback)"], description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.", examples: ["map([1, 2, 3], square)"], seealso: ["filter", "forEach"] } }, function(e, t) { e.exports = { name: "ones", category: "Matrix", syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])"], description: "Create a matrix containing ones.", examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"], seealso: ["concat", "det", "diag", "identity", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "partitionSelect", category: "Matrix", syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"], description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.", examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1)'], seealso: ["sort"] } }, function(e, t) { e.exports = { name: "range", category: "Type", syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"], description: "Create a range. Lower bound of the range is included, upper bound is excluded.", examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "resize", category: "Matrix", syntax: ["resize(x, size)", "resize(x, size, defaultValue)"], description: "Resize a matrix.", examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'], seealso: ["size", "subset", "squeeze", "reshape"] } }, function(e, t) { e.exports = { name: "reshape", category: "Matrix", syntax: ["reshape(x, sizes)"], description: "Reshape a multi dimensional array to fit the specified dimensions.", examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])", "reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])"], seealso: ["size", "squeeze", "resize"] } }, function(e, t) { e.exports = { name: "size", category: "Matrix", syntax: ["size(x)"], description: "Calculate the size of a matrix.", examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "sort", category: "Matrix", syntax: ["sort(x)", "sort(x, compare)"], description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.', examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"])', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'], seealso: ["map", "filter", "forEach"] } }, function(e, t) { e.exports = { name: "squeeze", category: "Matrix", syntax: ["squeeze(x)"], description: "Remove inner and outer singleton dimensions from a matrix.", examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "subset", category: "Matrix", syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"], description: "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.", examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "trace", category: "Matrix", syntax: ["trace(A)"], description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.", examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"] } }, function(e, t) { e.exports = { name: "transpose", category: "Matrix", syntax: ["x'", "transpose(x)"], description: "Transpose a matrix", examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"] } }, function(e, t) { e.exports = { name: "zeros", category: "Matrix", syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])"], description: "Create a matrix containing zeros.", examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"] } }, function(e, t) { e.exports = { name: "combinations", category: "Probability", syntax: ["combinations(n, k)"], description: "Compute the number of combinations of n items taken k at a time", examples: ["combinations(7, 5)"], seealso: ["permutations", "factorial"] } }, function(e, t) { e.exports = { name: "factorial", category: "Probability", syntax: ["n!", "factorial(n)"], description: "Compute the factorial of a value", examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"], seealso: ["combinations", "permutations", "gamma"] } }, function(e, t) { e.exports = { name: "gamma", category: "Probability", syntax: ["gamma(n)"], description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.", examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"], seealso: ["factorial"] } }, function(e, t) { e.exports = { name: "kldivergence", category: "Probability", syntax: ["kldivergence(x, y)"], description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.", examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"], seealso: [] } }, function(e, t) { e.exports = { name: "multinomial", category: "Probability", syntax: ["multinomial(A)"], description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.", examples: ["multinomial([1, 2, 1])"], seealso: ["combinations", "factorial"] } }, function(e, t) { e.exports = { name: "permutations", category: "Probability", syntax: ["permutations(n)", "permutations(n, k)"], description: "Compute the number of permutations of n items taken k at a time", examples: ["permutations(5)", "permutations(5, 3)"], seealso: ["combinations", "factorial"] } }, function(e, t) { e.exports = { name: "pickRandom", category: "Probability", syntax: ["pickRandom(array)", "pickRandom(array, number)", "pickRandom(array, weights)", "pickRandom(array, number, weights)", "pickRandom(array, weights, number)"], description: "Pick a random entry from a given array.", examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])", "pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"], seealso: ["random", "randomInt"] } }, function(e, t) { e.exports = { name: "random", category: "Probability", syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"], description: "Return a random number.", examples: ["random()", "random(10, 20)", "random([2, 3])"], seealso: ["pickRandom", "randomInt"] } }, function(e, t) { e.exports = { name: "randomInt", category: "Probability", syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)", "randomInt(size, max)", "randomInt(size, min, max)"], description: "Return a random integer number", examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"], seealso: ["pickRandom", "random"] } }, function(e, t) { e.exports = { name: "compare", category: "Relational", syntax: ["compare(x, y)"], description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compareNatural", "compareText"] } }, function(e, t) { e.exports = { name: "compareNatural", category: "Relational", syntax: ["compareNatural(x, y)"], description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", 'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"] } }, function(e, t) { e.exports = { name: "compareText", category: "Relational", syntax: ["compareText(x, y)"], description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ['compareText("B", "A")', 'compareText("A", "B")', 'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")', "compare(2, 10)", 'compareNatural("2", "10")', 'compareText("B", ["A", "B", "C"])'], seealso: ["compare", "compareNatural"] } }, function(e, t) { e.exports = { name: "deepEqual", category: "Relational", syntax: ["deepEqual(x, y)"], description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.", examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"], seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"] } }, function(e, t) { e.exports = { name: "equal", category: "Relational", syntax: ["x == y", "equal(x, y)"], description: "Check equality of two values. Returns true if the values are equal, and false if not.", examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"], seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual", "equalText"] } }, function(e, t) { e.exports = { name: "equalText", category: "Relational", syntax: ["equalText(x, y)"], description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.", examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")', 'equal("2e3", "2000")', 'equalText("2e3", "2000")', 'equalText("B", ["A", "B", "C"])'], seealso: ["compare", "compareNatural", "compareText", "equal"] } }, function(e, t) { e.exports = { name: "larger", category: "Relational", syntax: ["x > y", "larger(x, y)"], description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.", examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"] } }, function(e, t) { e.exports = { name: "largerEq", category: "Relational", syntax: ["x >= y", "largerEq(x, y)"], description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.", examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"], seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"] } }, function(e, t) { e.exports = { name: "smaller", category: "Relational", syntax: ["x < y", "smaller(x, y)"], description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.", examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"], seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"] } }, function(e, t) { e.exports = { name: "smallerEq", category: "Relational", syntax: ["x <= y", "smallerEq(x, y)"], description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.", examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"], seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"] } }, function(e, t) { e.exports = { name: "unequal", category: "Relational", syntax: ["x != y", "unequal(x, y)"], description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.", examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"], seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"] } }, function(e, t) { e.exports = { name: "setCartesian", category: "Set", syntax: ["setCartesian(set1, set2)"], description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setCartesian([1, 2], [3, 4])"], seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"] } }, function(e, t) { e.exports = { name: "setDifference", category: "Set", syntax: ["setDifference(set1, set2)"], description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setIntersect", "setSymDifference"] } }, function(e, t) { e.exports = { name: "setDistinct", category: "Set", syntax: ["setDistinct(set)"], description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setDistinct([1, 1, 1, 2, 2, 3])"], seealso: ["setMultiplicity"] } }, function(e, t) { e.exports = { name: "setIntersect", category: "Set", syntax: ["setIntersect(set1, set2)"], description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])", "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setDifference"] } }, function(e, t) { e.exports = { name: "setIsSubset", category: "Set", syntax: ["setIsSubset(set1, set2)"], description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setIsSubset([1, 2], [3, 4, 5, 6])", "setIsSubset([3, 4], [3, 4, 5, 6])"], seealso: ["setUnion", "setIntersect", "setDifference"] } }, function(e, t) { e.exports = { name: "setMultiplicity", category: "Set", syntax: ["setMultiplicity(element, set)"], description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setMultiplicity(1, [1, 2, 2, 4])", "setMultiplicity(2, [1, 2, 2, 4])"], seealso: ["setDistinct", "setSize"] } }, function(e, t) { e.exports = { name: "setPowerset", category: "Set", syntax: ["setPowerset(set)"], description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setPowerset([1, 2, 3])"], seealso: ["setCartesian"] } }, function(e, t) { e.exports = { name: "setSize", category: "Set", syntax: ["setSize(set)", "setSize(set, unique)"], description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.', examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"], seealso: ["setUnion", "setIntersect", "setDifference"] } }, function(e, t) { e.exports = { name: "setSymDifference", category: "Set", syntax: ["setSymDifference(set1, set2)"], description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setIntersect", "setDifference"] } }, function(e, t) { e.exports = { name: "setUnion", category: "Set", syntax: ["setUnion(set1, set2)"], description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])", "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setIntersect", "setDifference"] } }, function(e, t) { e.exports = { name: "erf", category: "Special", syntax: ["erf(x)"], description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x", examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"], seealso: [] } }, function(e, t) { e.exports = { name: "mad", category: "Statistics", syntax: ["mad(a, b, c, ...)", "mad(A)"], description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.", examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"], seealso: ["mean", "median", "std", "abs"] } }, function(e, t) { e.exports = { name: "max", category: "Statistics", syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"], description: "Compute the maximum value of a list of values.", examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"], seealso: ["mean", "median", "min", "prod", "std", "sum", "var"] } }, function(e, t) { e.exports = { name: "mean", category: "Statistics", syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"], description: "Compute the arithmetic mean of a list of values.", examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"], seealso: ["max", "median", "min", "prod", "std", "sum", "var"] } }, function(e, t) { e.exports = { name: "median", category: "Statistics", syntax: ["median(a, b, c, ...)", "median(A)"], description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.", examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"], seealso: ["max", "mean", "min", "prod", "std", "sum", "var", "quantileSeq"] } }, function(e, t) { e.exports = { name: "min", category: "Statistics", syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"], description: "Compute the minimum value of a list of values.", examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"], seealso: ["max", "mean", "median", "prod", "std", "sum", "var"] } }, function(e, t) { e.exports = { name: "mode", category: "Statistics", syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"], description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.", examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])", "mode(1, 4, 6, 1, 6)"], seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "var"] } }, function(e, t) { e.exports = { name: "prod", category: "Statistics", syntax: ["prod(a, b, c, ...)", "prod(A)"], description: "Compute the product of all values.", examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"], seealso: ["max", "mean", "min", "median", "min", "std", "sum", "var"] } }, function(e, t) { e.exports = { name: "quantileSeq", category: "Statistics", syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"], description: "Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.", examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"], seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "var"] } }, function(e, t) { e.exports = { name: "std", category: "Statistics", syntax: ["std(a, b, c, ...)", "std(A)", "std(A, normalization)"], description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(var(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".', examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"], seealso: ["max", "mean", "min", "median", "min", "prod", "sum", "var"] } }, function(e, t) { e.exports = { name: "sum", category: "Statistics", syntax: ["sum(a, b, c, ...)", "sum(A)"], description: "Compute the sum of all values.", examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"], seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "var"] } }, function(e, t) { e.exports = { name: "var", category: "Statistics", syntax: ["var(a, b, c, ...)", "var(A)", "var(A, normalization)"], description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".', examples: ["var(2, 4, 6)", "var([2, 4, 6, 8])", 'var([2, 4, 6, 8], "uncorrected")', 'var([2, 4, 6, 8], "biased")', "var([1, 2, 3; 4, 5, 6])"], seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"] } }, function(e, t) { e.exports = { name: "acos", category: "Trigonometry", syntax: ["acos(x)"], description: "Compute the inverse cosine of a value in radians.", examples: ["acos(0.5)", "acos(cos(2.3))"], seealso: ["cos", "atan", "asin"] } }, function(e, t) { e.exports = { name: "acosh", category: "Trigonometry", syntax: ["acosh(x)"], description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.", examples: ["acosh(1.5)"], seealso: ["cosh", "asinh", "atanh"] } }, function(e, t) { e.exports = { name: "acot", category: "Trigonometry", syntax: ["acot(x)"], description: "Calculate the inverse cotangent of a value.", examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"], seealso: ["cot", "atan"] } }, function(e, t) { e.exports = { name: "acoth", category: "Trigonometry", syntax: ["acoth(x)"], description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.", examples: ["acoth(2)", "acoth(0.5)"], seealso: ["acsch", "asech"] } }, function(e, t) { e.exports = { name: "acsc", category: "Trigonometry", syntax: ["acsc(x)"], description: "Calculate the inverse cotangent of a value.", examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"], seealso: ["csc", "asin", "asec"] } }, function(e, t) { e.exports = { name: "acsch", category: "Trigonometry", syntax: ["acsch(x)"], description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.", examples: ["acsch(0.5)"], seealso: ["asech", "acoth"] } }, function(e, t) { e.exports = { name: "asec", category: "Trigonometry", syntax: ["asec(x)"], description: "Calculate the inverse secant of a value.", examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"], seealso: ["acos", "acot", "acsc"] } }, function(e, t) { e.exports = { name: "asech", category: "Trigonometry", syntax: ["asech(x)"], description: "Calculate the inverse secant of a value.", examples: ["asech(0.5)"], seealso: ["acsch", "acoth"] } }, function(e, t) { e.exports = { name: "asin", category: "Trigonometry", syntax: ["asin(x)"], description: "Compute the inverse sine of a value in radians.", examples: ["asin(0.5)", "asin(sin(0.5))"], seealso: ["sin", "acos", "atan"] } }, function(e, t) { e.exports = { name: "asinh", category: "Trigonometry", syntax: ["asinh(x)"], description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.", examples: ["asinh(0.5)"], seealso: ["acosh", "atanh"] } }, function(e, t) { e.exports = { name: "atan", category: "Trigonometry", syntax: ["atan(x)"], description: "Compute the inverse tangent of a value in radians.", examples: ["atan(0.5)", "atan(tan(0.5))"], seealso: ["tan", "acos", "asin"] } }, function(e, t) { e.exports = { name: "atanh", category: "Trigonometry", syntax: ["atanh(x)"], description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.", examples: ["atanh(0.5)"], seealso: ["acosh", "asinh"] } }, function(e, t) { e.exports = { name: "atan2", category: "Trigonometry", syntax: ["atan2(y, x)"], description: "Computes the principal value of the arc tangent of y/x in radians.", examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"], seealso: ["sin", "cos", "tan"] } }, function(e, t) { e.exports = { name: "cos", category: "Trigonometry", syntax: ["cos(x)"], description: "Compute the cosine of x in radians.", examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"], seealso: ["acos", "sin", "tan"] } }, function(e, t) { e.exports = { name: "cosh", category: "Trigonometry", syntax: ["cosh(x)"], description: "Compute the hyperbolic cosine of x in radians.", examples: ["cosh(0.5)"], seealso: ["sinh", "tanh", "coth"] } }, function(e, t) { e.exports = { name: "cot", category: "Trigonometry", syntax: ["cot(x)"], description: "Compute the cotangent of x in radians. Defined as 1/tan(x)", examples: ["cot(2)", "1 / tan(2)"], seealso: ["sec", "csc", "tan"] } }, function(e, t) { e.exports = { name: "coth", category: "Trigonometry", syntax: ["coth(x)"], description: "Compute the hyperbolic cotangent of x in radians.", examples: ["coth(2)", "1 / tanh(2)"], seealso: ["sech", "csch", "tanh"] } }, function(e, t) { e.exports = { name: "csc", category: "Trigonometry", syntax: ["csc(x)"], description: "Compute the cosecant of x in radians. Defined as 1/sin(x)", examples: ["csc(2)", "1 / sin(2)"], seealso: ["sec", "cot", "sin"] } }, function(e, t) { e.exports = { name: "csch", category: "Trigonometry", syntax: ["csch(x)"], description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)", examples: ["csch(2)", "1 / sinh(2)"], seealso: ["sech", "coth", "sinh"] } }, function(e, t) { e.exports = { name: "sec", category: "Trigonometry", syntax: ["sec(x)"], description: "Compute the secant of x in radians. Defined as 1/cos(x)", examples: ["sec(2)", "1 / cos(2)"], seealso: ["cot", "csc", "cos"] } }, function(e, t) { e.exports = { name: "sech", category: "Trigonometry", syntax: ["sech(x)"], description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)", examples: ["sech(2)", "1 / cosh(2)"], seealso: ["coth", "csch", "cosh"] } }, function(e, t) { e.exports = { name: "sin", category: "Trigonometry", syntax: ["sin(x)"], description: "Compute the sine of x in radians.", examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"], seealso: ["asin", "cos", "tan"] } }, function(e, t) { e.exports = { name: "sinh", category: "Trigonometry", syntax: ["sinh(x)"], description: "Compute the hyperbolic sine of x in radians.", examples: ["sinh(0.5)"], seealso: ["cosh", "tanh"] } }, function(e, t) { e.exports = { name: "tan", category: "Trigonometry", syntax: ["tan(x)"], description: "Compute the tangent of x in radians.", examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"], seealso: ["atan", "sin", "cos"] } }, function(e, t) { e.exports = { name: "tanh", category: "Trigonometry", syntax: ["tanh(x)"], description: "Compute the hyperbolic tangent of x in radians.", examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"], seealso: ["sinh", "cosh"] } }, function(e, t) { e.exports = { name: "to", category: "Units", syntax: ["x to unit", "to(x, unit)"], description: "Change the unit of a value.", examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"], seealso: [] } }, function(e, t) { e.exports = { name: "clone", category: "Utils", syntax: ["clone(x)"], description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices", examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'], seealso: [] } }, function(e, t) { e.exports = { name: "format", category: "Utils", syntax: ["format(value)", "format(value, precision)"], description: "Format a value of any type as string.", examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"], seealso: ["print"] } }, function(e, t) { e.exports = { name: "isNaN", category: "Utils", syntax: ["isNaN(x)"], description: "Test whether a value is NaN (not a number)", examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"], seealso: ["isNegative", "isNumeric", "isPositive", "isZero"] } }, function(e, t) { e.exports = { name: "isInteger", category: "Utils", syntax: ["isInteger(x)"], description: "Test whether a value is an integer number.", examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"], seealso: ["isNegative", "isNumeric", "isPositive", "isZero"] } }, function(e, t) { e.exports = { name: "isNegative", category: "Utils", syntax: ["isNegative(x)"], description: "Test whether a value is negative: smaller than zero.", examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"], seealso: ["isInteger", "isNumeric", "isPositive", "isZero"] } }, function(e, t) { e.exports = { name: "isNumeric", category: "Utils", syntax: ["isNumeric(x)"], description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.", examples: ["isNumeric(2)", "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", 'isNumeric("3")', "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'], seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN"] } }, function(e, t) { e.exports = { name: "isPositive", category: "Utils", syntax: ["isPositive(x)"], description: "Test whether a value is positive: larger than zero.", examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"], seealso: ["isInteger", "isNumeric", "isNegative", "isZero"] } }, function(e, t) { e.exports = { name: "isPrime", category: "Utils", syntax: ["isPrime(x)"], description: "Test whether a value is prime: has no divisors other than itself and one.", examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"], seealso: ["isInteger", "isNumeric", "isNegative", "isZero"] } }, function(e, t) { e.exports = { name: "isZero", category: "Utils", syntax: ["isZero(x)"], description: "Test whether a value is zero.", examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"], seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"] } }, function(e, t) { e.exports = { name: "typeof", category: "Utils", syntax: ["typeof(x)"], description: "Get the type of a variable.", examples: ["typeof(3.5)", "typeof(2 - 4i)", "typeof(45 deg)", 'typeof("hello world")'], seealso: ["getMatrixDataType"] } }, function(e, t, r) { "use strict";
        e.exports = [r(555), r(556), r(557), r(122), r(151)] }, function(e, t, o) { "use strict"; var a = o(0);
        t.name = "compile", t.factory = function(e, t, r, n) { var i = r(o(42)); return n("compile", { string: function(e) { return i(e).compile() }, "Array | Matrix": function(e) { return a(e, function(e) { return i(e).compile() }) } }) } }, function(e, t, o) { "use strict"; var a = o(0);
        t.name = "eval", t.factory = function(e, t, r, n) { var i = r(o(42)); return n("compile", { string: function(e) { return i(e).compile().eval({}) }, "string, Object": function(e, t) { return i(e).compile().eval(t) }, "Array | Matrix": function(e) { var t = {}; return a(e, function(e) { return i(e).compile().eval(t) }) }, "Array | Matrix, Object": function(e, t) { return a(e, function(e) { return i(e).compile().eval(t) }) } }) } }, function(e, t, n) { "use strict"; var s = n(13).getSafeProperty;
        t.math = !0, t.name = "help", t.factory = function(i, e, t, r, o) { var a = t(n(148)); return r("help", { any: function(e) { var t, r = e; if ("string" != typeof e)
                        for (t in o)
                            if (o.hasOwnProperty(t) && e === o[t]) { r = t; break }
                    var n = s(a, r); if (!n) throw new Error('No documentation found on "' + r + '"'); return new i.Help(n) } }) } }, function(e, t, r) { "use strict";
        e.exports = [r(106), r(109), r(110), r(111), r(112), r(57), r(114), r(113), r(67), r(16), r(115), r(58), r(66), r(116), r(117), r(51), r(559)] }, function(e, t, r) { "use strict";
        t.name = "UpdateNode", t.path = "expression.node", t.factory = function(e, t, r, n) { return function() { throw new Error("UpdateNode is deprecated. Use AssignmentNode instead.") } } }, function(e, t, r) { "use strict";
        e.exports = [r(561), r(562), r(563), r(564), r(565), r(566), r(567), r(568), r(569), r(570)] }, function(e, t, o) { "use strict"; var a = o(43).transform;
        t.name = "concat", t.path = "expression.transform", t.factory = function(n, e, t, r) { var i = t(o(75)); return r("concat", { "...any": function(e) { var t = e.length - 1,
                        r = e[t];
                    n.isNumber(r) ? e[t] = r - 1 : n.isBigNumber(r) && (e[t] = r.minus(1)); try { return i.apply(null, e) } catch (e) { throw a(e) } } }) } }, function(e, t, u) { "use strict"; var r = u(2).filter,
            c = u(2).filterRegExp,
            o = u(31).maxArgumentCount;

        function f(e, n) { var i = o(n); return r(e, function(e, t, r) { return 1 === i ? n(e) : 2 === i ? n(e, [t + 1]) : n(e, [t + 1], r) }) }
        t.name = "filter", t.path = "expression.transform", t.factory = function(o, e, t, r) { var a = t(u(96)),
                n = t(u(1));

            function i(e, t, r) { var n, i; return e[0] && (n = e[0].compile().eval(r)), e[1] && (i = o.isSymbolNode(e[1]) || o.isFunctionAssignmentNode(e[1]) ? e[1].compile().eval(r) : a(e[1], t, r)), s(n, i) }
            i.rawArgs = !0; var s = r("filter", { "Array, function": f, "Matrix, function": function(e, t) { return n(f(e.toArray(), t)) }, "Array, RegExp": c, "Matrix, RegExp": function(e, t) { return n(c(e.toArray(), t)) } }); return s.toTex = void 0, i } }, function(e, t, i) { "use strict"; var u = i(31).maxArgumentCount,
            c = i(2).forEach;
        t.name = "forEach", t.path = "expression.transform", t.factory = function(o, e, t, r) { var a = t(i(96));

            function n(e, t, r) { var n, i; return e[0] && (n = e[0].compile().eval(r)), e[1] && (i = o.isSymbolNode(e[1]) || o.isFunctionAssignmentNode(e[1]) ? e[1].compile().eval(r) : a(e[1], t, r)), s(n, i) }
            n.rawArgs = !0; var s = r("forEach", { "Array | Matrix, function": function(t, i) { var o = u(i);! function r(e, n) { Array.isArray(e) ? c(e, function(e, t) { r(e, n.concat(t + 1)) }) : 1 === o ? i(e) : 2 === o ? i(e, n) : i(e, n, t) }(t.valueOf(), []) } }); return n } }, function(e, t, r) { "use strict";
        t.name = "index", t.path = "expression.transform", t.factory = function(o, e, t) { return function() { for (var e = [], t = 0, r = arguments.length; t < r; t++) { var n = arguments[t]; if (o.isRange(n)) n.start--, n.end -= 0 < n.step ? 0 : 2;
                    else if (n && !0 === n.isSet) n = n.map(function(e) { return e - 1 });
                    else if (o.isArray(n) || o.isMatrix(n)) n = n.map(function(e) { return e - 1 });
                    else if (o.isNumber(n)) n--;
                    else if (o.isBigNumber(n)) n = n.toNumber() - 1;
                    else if ("string" != typeof n) throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
                    e[t] = n } var i = new o.Index; return o.Index.apply(i, e), i } } }, function(e, t, u) { "use strict"; var r = u(31).maxArgumentCount,
            a = u(2).map;

        function c(e, t, i) { var o = r(t); return function r(e, n) { return Array.isArray(e) ? a(e, function(e, t) { return r(e, n.concat(t + 1)) }) : 1 === o ? t(e) : 2 === o ? t(e, n) : t(e, n, i) }(e, []) }
        t.name = "map", t.path = "expression.transform", t.factory = function(o, e, t, r) { var a = t(u(96)),
                n = t(u(1));

            function i(e, t, r) { var n, i; return e[0] && (n = e[0].compile().eval(r)), e[1] && (i = o.isSymbolNode(e[1]) || o.isFunctionAssignmentNode(e[1]) ? e[1].compile().eval(r) : a(e[1], t, r)), s(n, i) }
            i.rawArgs = !0; var s = r("map", { "Array, function": function(e, t) { return c(e, t, e) }, "Matrix, function": function(e, t) { return n(c(e.valueOf(), t, e)) } }); return i } }, function(e, t, o) { "use strict"; var a = o(43).transform,
            s = o(53);
        t.name = "max", t.path = "expression.transform", t.factory = function(r, e, t, n) { var i = t(o(93)); return n("max", { "...any": function(e) { if (2 === e.length && s(e[0])) { var t = e[1];
                        r.isNumber(t) ? e[1] = t - 1 : r.isBigNumber(t) && (e[1] = t.minus(1)) } try { return i.apply(null, e) } catch (e) { throw a(e) } } }) } }, function(e, t, o) { "use strict"; var a = o(43).transform,
            s = o(53);
        t.name = "mean", t.path = "expression.transform", t.factory = function(r, e, t, n) { var i = t(o(145)); return n("mean", { "...any": function(e) { if (2 === e.length && s(e[0])) { var t = e[1];
                        r.isNumber(t) ? e[1] = t - 1 : r.isBigNumber(t) && (e[1] = t.minus(1)) } try { return i.apply(null, e) } catch (e) { throw a(e) } } }) } }, function(e, t, o) { "use strict"; var a = o(43).transform,
            s = o(53);
        t.name = "min", t.path = "expression.transform", t.factory = function(r, e, t, n) { var i = t(o(146)); return n("min", { "...any": function(e) { if (2 === e.length && s(e[0])) { var t = e[1];
                        r.isNumber(t) ? e[1] = t - 1 : r.isBigNumber(t) && (e[1] = t.minus(1)) } try { return i.apply(null, e) } catch (e) { throw a(e) } } }) } }, function(e, t, o) { "use strict";
        t.name = "range", t.path = "expression.transform", t.factory = function(e, t, r, n) { var i = r(o(138)); return n("range", { "...any": function(e) { return "boolean" != typeof e[e.length - 1] && e.push(!0), i.apply(null, e) } }) } }, function(e, t, o) { "use strict"; var a = o(43).transform;
        t.name = "subset", t.path = "expression.transform", t.factory = function(e, t, r, n) { var i = r(o(22)); return n("subset", { "...any": function(e) { try { return i.apply(null, e) } catch (e) { throw a(e) } } }) } }, function(e, t, i) { "use strict"; var s = i(5),
            u = i(9);
        t.name = "Help", t.path = "type", t.factory = function(o, e, t, r) { var a = t(i(151))();

            function n(e) { if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator"); if (!e) throw new Error('Argument "doc" missing');
                this.doc = e } return n.prototype.type = "Help", n.prototype.isHelp = !0, n.prototype.toString = function() { var e = this.doc || {},
                    t = "\n"; if (e.name && (t += "Name: " + e.name + "\n\n"), e.category && (t += "Category: " + e.category + "\n\n"), e.description && (t += "Description:\n    " + e.description + "\n\n"), e.syntax && (t += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e.examples) { t += "Examples:\n"; for (var r = 0; r < e.examples.length; r++) { var n = e.examples[r];
                        t += "    " + n + "\n"; var i = void 0; try { i = a.eval(n) } catch (e) { i = e }
                        void 0 === i || o.isHelp(i) || (t += "        " + u.format(i, { precision: 14 }) + "\n") }
                    t += "\n" } return e.seealso && e.seealso.length && (t += "See also: " + e.seealso.join(", ") + "\n"), t }, n.prototype.toJSON = function() { var e = s.clone(this.doc); return e.mathjs = "Help", e }, n.fromJSON = function(e) { var t = {}; for (var r in e) "mathjs" !== r && (t[r] = e[r]); return new n(t) }, n.prototype.valueOf = n.prototype.toString, n } }, function(e, t, r) { "use strict";
        e.exports = [r(573)] }, function(e, t, r) { "use strict";
        t.name = "reviver", t.path = "json", t.factory = function(n, e, t, r, i) { return function(e, t) { var r = n[t && t.mathjs] || i.expression && i.expression.node[t && t.mathjs]; return r && "function" == typeof r.fromJSON ? r.fromJSON(t) : t } }, t.math = !0 }, function(e, t, r) { "use strict"; var n = r(55),
            i = r(8),
            o = r(54);
        e.exports = [{ name: "ArgumentsError", path: "error", factory: function() { return n } }, { name: "DimensionError", path: "error", factory: function() { return i } }, { name: "IndexError", path: "error", factory: function() { return o } }] }])
});
//# sourceMappingURL=math.min.map