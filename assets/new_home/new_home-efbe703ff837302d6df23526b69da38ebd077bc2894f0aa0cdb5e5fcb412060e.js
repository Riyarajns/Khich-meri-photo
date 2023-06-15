function _extends() {
    return (_extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    }).apply(this, arguments)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function i(e, t, i) {
        var n, s, a = (i = i || J).createElement("script");
        if (a.text = e, t)
            for (n in ue)(s = t[n] || t.getAttribute && t.getAttribute(n)) && a.setAttribute(n, s);
        i.head.appendChild(a).parentNode.removeChild(a)
    }

    function n(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ae.call(e)] || "object" : typeof e
    }

    function s(e) {
        var t = !!e && "length" in e && e.length,
            i = n(e);
        return !ce(e) && !de(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function a(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function r(e, t, i) {
        return ce(t) ? fe.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? fe.grep(e, function(e) {
            return e === t !== i
        }) : "string" != typeof t ? fe.grep(e, function(e) {
            return -1 < ne.call(t, e) !== i
        }) : fe.filter(t, e, i)
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function l(e) {
        return e
    }

    function h(e) {
        throw e
    }

    function c(e, t, i, n) {
        var s;
        try {
            e && ce(s = e.promise) ? s.call(e).done(t).fail(i) : e && ce(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }

    function d() {
        J.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), fe.ready()
    }

    function u(e, t) {
        return t.toUpperCase()
    }

    function p(e) {
        return e.replace(Me, "ms-").replace(Ie, u)
    }

    function f() {
        this.expando = fe.expando + f.uid++
    }

    function m(e, t, i) {
        var n, s;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Ne, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Oe.test(s) ? JSON.parse(s) : s)
                } catch (e) {}
                Ae.set(e, t, i)
            } else i = void 0;
        return i
    }

    function g(e, t, i, n) {
        var s, a, r = 20,
            o = n ? function() {
                return n.cur()
            } : function() {
                return fe.css(e, t, "")
            },
            l = o(),
            h = i && i[3] || (fe.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (fe.cssNumber[t] || "px" !== h && +l) && Le.exec(fe.css(e, t));
        if (c && c[3] !== h) {
            for (l /= 2, h = h || c[3], c = +l || 1; r--;) fe.style(e, t, c + h), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (r = 0), c /= a;
            c *= 2, fe.style(e, t, c + h), i = i || []
        }
        return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = s)), s
    }

    function v(e, t) {
        for (var i, n, s, a, r, o, l, h = [], c = 0, d = e.length; c < d; c++)(n = e[c]).style && (i = n.style.display, t ? ("none" === i && (h[c] = Pe.get(n, "display") || null, h[c] || (n.style.display = "")), "" === n.style.display && je(n) && (h[c] = (l = r = a = void 0, r = (s = n).ownerDocument, o = s.nodeName, (l = Ye[o]) || (a = r.body.appendChild(r.createElement(o)), l = fe.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), Ye[o] = l)))) : "none" !== i && (h[c] = "none", Pe.set(n, "display", i)));
        for (c = 0; c < d; c++) null != h[c] && (e[c].style.display = h[c]);
        return e
    }

    function b(e, t) {
        var i;
        return i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && a(e, t) ? fe.merge([e], i) : i
    }

    function y(e, t) {
        for (var i = 0, n = e.length; i < n; i++) Pe.set(e[i], "globalEval", !t || Pe.get(t[i], "globalEval"))
    }

    function _(e, t, i, s, a) {
        for (var r, o, l, h, c, d, u = t.createDocumentFragment(), p = [], f = 0, m = e.length; f < m; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === n(r)) fe.merge(p, r.nodeType ? [r] : r);
                else if (Qe.test(r)) {
            for (o = o || u.appendChild(t.createElement("div")), l = (Ve.exec(r) || ["", ""])[1].toLowerCase(), h = Ge[l] || Ge._default, o.innerHTML = h[1] + fe.htmlPrefilter(r) + h[2], d = h[0]; d--;) o = o.lastChild;
            fe.merge(p, o.childNodes), (o = u.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
        for (u.textContent = "", f = 0; r = p[f++];)
            if (s && -1 < fe.inArray(r, s)) a && a.push(r);
            else if (c = Re(r), o = b(u.appendChild(r), "script"), c && y(o), i)
            for (d = 0; r = o[d++];) Ue.test(r.type || "") && i.push(r);
        return u
    }

    function w() {
        return !0
    }

    function x() {
        return !1
    }

    function C(e, t) {
        return e === function() {
            try {
                return J.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function k(e, t, i, n, s, a) {
        var r, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), t) k(e, o, i, n, t[o], a);
            return e
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = x;
        else if (!s) return e;
        return 1 === a && (r = s, (s = function(e) {
            return fe().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = fe.guid++)), e.each(function() {
            fe.event.add(this, t, s, n, i)
        })
    }

    function T(e, t, i) {
        i ? (Pe.set(e, t, !1), fe.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var n, s, a = Pe.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(fe.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = ee.call(arguments), Pe.set(this, t, a), n = i(this, t), this[t](), a !== (s = Pe.get(this, t)) || n ? Pe.set(this, t, !1) : s = {}, a !== s) return e.stopImmediatePropagation(), e.preventDefault(), s.value
                } else a.length && (Pe.set(this, t, {
                    value: fe.event.trigger(fe.extend(a[0], fe.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Pe.get(e, t) && fe.event.add(e, t, w)
    }

    function S(e, t) {
        return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") && fe(e).children("tbody")[0] || e
    }

    function D(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function E(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function M(e, t) {
        var i, n, s, a, r, o, l, h;
        if (1 === t.nodeType) {
            if (Pe.hasData(e) && (a = Pe.access(e), r = Pe.set(t, a), h = a.events))
                for (s in delete r.handle, r.events = {}, h)
                    for (i = 0, n = h[s].length; i < n; i++) fe.event.add(t, s, h[s][i]);
            Ae.hasData(e) && (o = Ae.access(e), l = fe.extend({}, o), Ae.set(t, l))
        }
    }

    function I(e, t, n, s) {
        t = te.apply([], t);
        var a, r, o, l, h, c, d = 0,
            u = e.length,
            p = u - 1,
            f = t[0],
            m = ce(f);
        if (m || 1 < u && "string" == typeof f && !he.checkClone && nt.test(f)) return e.each(function(i) {
            var a = e.eq(i);
            m && (t[0] = f.call(this, i, a.html())), I(a, t, n, s)
        });
        if (u && (r = (a = _(t, e[0].ownerDocument, !1, e, s)).firstChild, 1 === a.childNodes.length && (a = r), r || s)) {
            for (l = (o = fe.map(b(a, "script"), D)).length; d < u; d++) h = a, d !== p && (h = fe.clone(h, !0, !0), l && fe.merge(o, b(h, "script"))), n.call(e[d], h, d);
            if (l)
                for (c = o[o.length - 1].ownerDocument, fe.map(o, E), d = 0; d < l; d++) h = o[d], Ue.test(h.type || "") && !Pe.access(h, "globalEval") && fe.contains(c, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? fe._evalUrl && !h.noModule && fe._evalUrl(h.src, {
                    nonce: h.nonce || h.getAttribute("nonce")
                }) : i(h.textContent.replace(st, ""), h, c))
        }
        return e
    }

    function $(e, t, i) {
        for (var n, s = t ? fe.filter(t, e) : e, a = 0; null != (n = s[a]); a++) i || 1 !== n.nodeType || fe.cleanData(b(n)), n.parentNode && (i && Re(n) && y(b(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    function P(e, t, i) {
        var n, s, a, r, o = e.style;
        return (i = i || rt(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || Re(e) || (r = fe.style(e, t)), !he.pixelBoxStyles() && at.test(r) && ot.test(t) && (n = o.width, s = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = i.width, o.width = n, o.minWidth = s, o.maxWidth = a)), void 0 !== r ? r + "" : r
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function O(e) {
        var t = fe.cssProps[e] || ct[e];
        return t || (e in ht ? e : ct[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), i = lt.length; i--;)
                if ((e = lt[i] + t) in ht) return e
        }(e) || e)
    }

    function N(e, t, i) {
        var n = Le.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function z(e, t, i, n, s, a) {
        var r = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === i && (l += fe.css(e, i + He[r], !0, s)), n ? ("content" === i && (l -= fe.css(e, "padding" + He[r], !0, s)), "margin" !== i && (l -= fe.css(e, "border" + He[r] + "Width", !0, s))) : (l += fe.css(e, "padding" + He[r], !0, s), "padding" !== i ? l += fe.css(e, "border" + He[r] + "Width", !0, s) : o += fe.css(e, "border" + He[r] + "Width", !0, s));
        return !n && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5)) || 0), l
    }

    function L(e, t, i) {
        var n = rt(e),
            s = (!he.boxSizingReliable() || i) && "border-box" === fe.css(e, "boxSizing", !1, n),
            a = s,
            r = P(e, t, n),
            o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (at.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return (!he.boxSizingReliable() && s || "auto" === r || !parseFloat(r) && "inline" === fe.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === fe.css(e, "boxSizing", !1, n), (a = o in e) && (r = e[o])), (r = parseFloat(r) || 0) + z(e, t, i || (s ? "border" : "content"), a, n, r) + "px"
    }

    function H(e, t, i, n, s) {
        return new H.prototype.init(e, t, i, n, s)
    }

    function F() {
        gt && (!1 === J.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setTimeout(F, fe.fx.interval), fe.fx.tick())
    }

    function R() {
        return e.setTimeout(function() {
            mt = void 0
        }), mt = Date.now()
    }

    function W(e, t) {
        var i, n = 0,
            s = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = He[n])] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e), s
    }

    function j(e, t, i) {
        for (var n, s = (q.tweeners[t] || []).concat(q.tweeners["*"]), a = 0, r = s.length; a < r; a++)
            if (n = s[a].call(i, t, e)) return n
    }

    function q(e, t, i) {
        var n, s, a = 0,
            r = q.prefilters.length,
            o = fe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var t = mt || R(), i = Math.max(0, h.startTime + h.duration - t), n = 1 - (i / h.duration || 0), a = 0, r = h.tweens.length; a < r; a++) h.tweens[a].run(n);
                return o.notifyWith(e, [h, n, i]), n < 1 && r ? i : (r || o.notifyWith(e, [h, 1, 0]), o.resolveWith(e, [h]), !1)
            },
            h = o.promise({
                elem: e,
                props: fe.extend({}, t),
                opts: fe.extend(!0, {
                    specialEasing: {},
                    easing: fe.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: mt || R(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = fe.Tween(e, h.opts, t, i, h.opts.specialEasing[t] || h.opts.easing);
                    return h.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) h.tweens[i].run(1);
                    return t ? (o.notifyWith(e, [h, 1, 0]), o.resolveWith(e, [h, t])) : o.rejectWith(e, [h, t]), this
                }
            }),
            c = h.props;
        for ((! function(e, t) {
                var i, n, s, a, r;
                for (i in e)
                    if (s = t[n = p(i)], a = e[i], Array.isArray(a) && (s = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (r = fe.cssHooks[n]) && "expand" in r)
                        for (i in a = r.expand(a), delete e[n], a) i in e || (e[i] = a[i], t[i] = s);
                    else t[n] = s
            }(c, h.opts.specialEasing)); a < r; a++)
            if (n = q.prefilters[a].call(h, e, c, h.opts)) return ce(n.stop) && (fe._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return fe.map(c, j, h), ce(h.opts.start) && h.opts.start.call(e, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: h,
            queue: h.opts.queue
        })), h
    }

    function Y(e) {
        return (e.match(Te) || []).join(" ")
    }

    function B(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function V(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Te) || []
    }

    function U(e, t, i, s) {
        var a;
        if (Array.isArray(t)) fe.each(t, function(t, n) {
            i || $t.test(e) ? s(e, n) : U(e + "[" + ("object" == typeof n && null != n ? t : "") + "]", n, i, s)
        });
        else if (i || "object" !== n(t)) s(e, t);
        else
            for (a in t) U(e + "[" + a + "]", t[a], i, s)
    }

    function G(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, s = 0,
                a = t.toLowerCase().match(Te) || [];
            if (ce(i))
                for (; n = a[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function X(e, t, i, n) {
        function s(o) {
            var l;
            return a[o] = !0, fe.each(e[o] || [], function(e, o) {
                var h = o(t, i, n);
                return "string" != typeof h || r || a[h] ? r ? !(l = h) : void 0 : (t.dataTypes.unshift(h), s(h), !1)
            }), l
        }
        var a = {},
            r = e === jt;
        return s(t.dataTypes[0]) || !a["*"] && s("*")
    }

    function K(e, t) {
        var i, n, s = fe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
        return n && fe.extend(!0, e, n), e
    }
    var Q = [],
        J = e.document,
        Z = Object.getPrototypeOf,
        ee = Q.slice,
        te = Q.concat,
        ie = Q.push,
        ne = Q.indexOf,
        se = {},
        ae = se.toString,
        re = se.hasOwnProperty,
        oe = re.toString,
        le = oe.call(Object),
        he = {},
        ce = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        de = function(e) {
            return null != e && e === e.window
        },
        ue = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        pe = "3.4.1",
        fe = function(e, t) {
            return new fe.fn.init(e, t)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    fe.fn = fe.prototype = {
        jquery: pe,
        constructor: fe,
        length: 0,
        toArray: function() {
            return ee.call(this)
        },
        get: function(e) {
            return null == e ? ee.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(ee.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ie,
        sort: Q.sort,
        splice: Q.splice
    }, fe.extend = fe.fn.extend = function() {
        var e, t, i, n, s, a, r = arguments[0] || {},
            o = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[o] || {}, o++), "object" == typeof r || ce(r) || (r = {}), o === l && (r = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) n = e[t], "__proto__" !== t && r !== n && (h && n && (fe.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[t], a = s && !Array.isArray(i) ? [] : s || fe.isPlainObject(i) ? i : {}, s = !1, r[t] = fe.extend(h, a, n)) : void 0 !== n && (r[t] = n));
        return r
    }, fe.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== ae.call(e) || (t = Z(e)) && ("function" != typeof(i = re.call(t, "constructor") && t.constructor) || oe.call(i) !== le))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            i(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var i, n = 0;
            if (s(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (s(Object(e)) ? fe.merge(i, "string" == typeof e ? [e] : e) : ie.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : ne.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
            return e.length = s, e
        },
        grep: function(e, t, i) {
            for (var n = [], s = 0, a = e.length, r = !i; s < a; s++) !t(e[s], s) !== r && n.push(e[s]);
            return n
        },
        map: function(e, t, i) {
            var n, a, r = 0,
                o = [];
            if (s(e))
                for (n = e.length; r < n; r++) null != (a = t(e[r], r, i)) && o.push(a);
            else
                for (r in e) null != (a = t(e[r], r, i)) && o.push(a);
            return te.apply([], o)
        },
        guid: 1,
        support: he
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = Q[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var ge = function(e) {
        function t(e, t, i, n) {
            var s, a, r, o, l, h, c, u = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((t ? t.ownerDocument || t : F) !== $ && I(t), t = t || $, A)) {
                if (11 !== f && (l = ve.exec(e)))
                    if (s = l[1]) {
                        if (9 === f) {
                            if (!(r = t.getElementById(s))) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (u && (r = u.getElementById(s)) && L(t, r) && r.id === s) return i.push(r), i
                    } else {
                        if (l[2]) return Q.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return Q.apply(i, t.getElementsByClassName(s)), i
                    }
                if (_.qsa && !B[e + " "] && (!O || !O.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e, u = t, 1 === f && he.test(e)) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(we, xe) : t.setAttribute("id", o = H), a = (h = k(e)).length; a--;) h[a] = "#" + o + " " + p(h[a]);
                        c = h.join(","), u = be.test(e) && d(t.parentNode) || t
                    }
                    try {
                        return Q.apply(i, u.querySelectorAll(c)), i
                    } catch (t) {
                        B(e, !0)
                    } finally {
                        o === H && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(re, "$1"), t, i, n)
        }

        function i() {
            var e = [];
            return function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
        }

        function n(e) {
            return e[H] = !0, e
        }

        function s(e) {
            var t = $.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function r(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function o(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function h(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var s, a = e([], i.length, t), r = a.length; r--;) i[s = a[r]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function p(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function f(e, t, i) {
            var n = t.dir,
                s = t.next,
                a = s || n,
                r = i && "parentNode" === a,
                o = W++;
            return t.first ? function(t, i, s) {
                for (; t = t[n];)
                    if (1 === t.nodeType || r) return e(t, i, s);
                return !1
            } : function(t, i, l) {
                var h, c, d, u = [R, o];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || r) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || r)
                            if (c = (d = t[H] || (t[H] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((h = c[a]) && h[0] === R && h[1] === o) return u[2] = h[2];
                                if ((c[a] = u)[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function m(e) {
            return 1 < e.length ? function(t, i, n) {
                for (var s = e.length; s--;)
                    if (!e[s](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function g(e, t, i, n, s) {
            for (var a, r = [], o = 0, l = e.length, h = null != t; o < l; o++)(a = e[o]) && (i && !i(a, n, s) || (r.push(a), h && t.push(o)));
            return r
        }

        function v(e, i, s, a, r, o) {
            return a && !a[H] && (a = v(a)), r && !r[H] && (r = v(r, o)), n(function(n, o, l, h) {
                var c, d, u, p = [],
                    f = [],
                    m = o.length,
                    v = n || function(e, i, n) {
                        for (var s = 0, a = i.length; s < a; s++) t(e, i[s], n);
                        return n
                    }(i || "*", l.nodeType ? [l] : l, []),
                    b = !e || !n && i ? v : g(v, p, e, l, h),
                    y = s ? r || (n ? e : m || a) ? [] : o : b;
                if (s && s(b, y, l, h), a)
                    for (c = g(y, f), a(c, [], l, h), d = c.length; d--;)(u = c[d]) && (y[f[d]] = !(b[f[d]] = u));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (c = [], d = y.length; d--;)(u = y[d]) && c.push(b[d] = u);
                            r(null, y = [], c, h)
                        }
                        for (d = y.length; d--;)(u = y[d]) && -1 < (c = r ? Z(n, u) : p[d]) && (n[c] = !(o[c] = u))
                    }
                } else y = g(y === o ? y.splice(m, y.length) : y), r ? r(null, o, y, h) : Q.apply(o, y)
            })
        }

        function b(e) {
            for (var t, i, n, s = e.length, a = w.relative[e[0].type], r = a || w.relative[" "], o = a ? 1 : 0, l = f(function(e) {
                    return e === t
                }, r, !0), h = f(function(e) {
                    return -1 < Z(t, e)
                }, r, !0), c = [function(e, i, n) {
                    var s = !a && (n || i !== D) || ((t = i).nodeType ? l(e, i, n) : h(e, i, n));
                    return t = null, s
                }]; o < s; o++)
                if (i = w.relative[e[o].type]) c = [f(m(c), i)];
                else {
                    if ((i = w.filter[e[o].type].apply(null, e[o].matches))[H]) {
                        for (n = ++o; n < s && !w.relative[e[n].type]; n++);
                        return v(1 < o && m(c), 1 < o && p(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(re, "$1"), i, o < n && b(e.slice(o, n)), n < s && b(e = e.slice(n)), n < s && p(e))
                    }
                    c.push(i)
                }
            return m(c)
        }
        var y, _, w, x, C, k, T, S, D, E, M, I, $, P, A, O, N, z, L, H = "sizzle" + 1 * new Date,
            F = e.document,
            R = 0,
            W = 0,
            j = i(),
            q = i(),
            Y = i(),
            B = i(),
            V = function(e, t) {
                return e === t && (M = !0), 0
            },
            U = {}.hasOwnProperty,
            G = [],
            X = G.pop,
            K = G.push,
            Q = G.push,
            J = G.slice,
            Z = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            te = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + te + "*(" + ie + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + te + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ae = new RegExp(te + "+", "g"),
            re = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
            oe = new RegExp("^" + te + "*," + te + "*"),
            le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
            he = new RegExp(te + "|>"),
            ce = new RegExp(se),
            de = new RegExp("^" + ie + "$"),
            ue = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /HTML$/i,
            fe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
            _e = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xe = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function() {
                I()
            },
            ke = f(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Q.apply(G = J.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: G.length ? function(e, t) {
                    K.apply(e, J.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        for (y in _ = t.support = {}, C = t.isXML = function(e) {
                var t = e.namespaceURI,
                    i = (e.ownerDocument || e).documentElement;
                return !pe.test(t || i && i.nodeName || "HTML")
            }, I = t.setDocument = function(e) {
                var t, i, n = e ? e.ownerDocument || e : F;
                return n !== $ && 9 === n.nodeType && n.documentElement && (P = ($ = n).documentElement, A = !C($), F !== $ && (i = $.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Ce, !1) : i.attachEvent && i.attachEvent("onunload", Ce)), _.attributes = s(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), _.getElementsByTagName = s(function(e) {
                    return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length
                }), _.getElementsByClassName = ge.test($.getElementsByClassName), _.getById = s(function(e) {
                    return P.appendChild(e).id = H, !$.getElementsByName || !$.getElementsByName(H).length
                }), _.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(ye, _e);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && A) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var t = e.replace(ye, _e);
                    return function(e) {
                        var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, w.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && A) {
                        var i, n, s, a = t.getElementById(e);
                        if (a) {
                            if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                            for (s = t.getElementsByName(e), n = 0; a = s[n++];)
                                if ((i = a.getAttributeNode("id")) && i.value === e) return [a]
                        }
                        return []
                    }
                }), w.find.TAG = _.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        s = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = a[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return a
                }, w.find.CLASS = _.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && A) return t.getElementsByClassName(e)
                }, N = [], O = [], (_.qsa = ge.test($.querySelectorAll)) && (s(function(e) {
                    P.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll("[id~=" + H + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || O.push(".#.+[+~]")
                }), s(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = $.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + te + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                })), (_.matchesSelector = ge.test(z = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && s(function(e) {
                    _.disconnectedMatch = z.call(e, "*"), z.call(e, "[s!='']:x"), N.push("!=", se)
                }), O = O.length && new RegExp(O.join("|")), N = N.length && new RegExp(N.join("|")), t = ge.test(P.compareDocumentPosition), L = t || ge.test(P.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, V = t ? function(e, t) {
                    if (e === t) return M = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !_.sortDetached && t.compareDocumentPosition(e) === i ? e === $ || e.ownerDocument === F && L(F, e) ? -1 : t === $ || t.ownerDocument === F && L(F, t) ? 1 : E ? Z(E, e) - Z(E, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return M = !0, 0;
                    var i, n = 0,
                        s = e.parentNode,
                        a = t.parentNode,
                        o = [e],
                        l = [t];
                    if (!s || !a) return e === $ ? -1 : t === $ ? 1 : s ? -1 : a ? 1 : E ? Z(E, e) - Z(E, t) : 0;
                    if (s === a) return r(e, t);
                    for (i = e; i = i.parentNode;) o.unshift(i);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (; o[n] === l[n];) n++;
                    return n ? r(o[n], l[n]) : o[n] === F ? -1 : l[n] === F ? 1 : 0
                }), $
            }, t.matches = function(e, i) {
                return t(e, null, null, i)
            }, t.matchesSelector = function(e, i) {
                if ((e.ownerDocument || e) !== $ && I(e), _.matchesSelector && A && !B[i + " "] && (!N || !N.test(i)) && (!O || !O.test(i))) try {
                    var n = z.call(e, i);
                    if (n || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    B(i, !0)
                }
                return 0 < t(i, $, null, [e]).length
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== $ && I(e), L(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== $ && I(e);
                var i = w.attrHandle[t.toLowerCase()],
                    n = i && U.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !A) : void 0;
                return void 0 !== n ? n : _.attributes || !A ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, t.escape = function(e) {
                return (e + "").replace(we, xe)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, i = [],
                    n = 0,
                    s = 0;
                if (M = !_.detectDuplicates, E = !_.sortStable && e.slice(0), e.sort(V), M) {
                    for (; t = e[s++];) t === e[s] && (n = i.push(s));
                    for (; n--;) e.splice(i[n], 1)
                }
                return E = null, e
            }, x = t.getText = function(e) {
                var t, i = "",
                    n = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += x(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[n++];) i += x(t);
                return i
            }, (w = t.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ue,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ye, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ce.test(i) && (t = k(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ye, _e).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = j[e + " "];
                        return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && j(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, i, n) {
                        return function(s) {
                            var a = t.attr(s, e);
                            return null == a ? "!=" === i : !i || (a += "", "=" === i ? a === n : "!=" === i ? a !== n : "^=" === i ? n && 0 === a.indexOf(n) : "*=" === i ? n && -1 < a.indexOf(n) : "$=" === i ? n && a.slice(-n.length) === n : "~=" === i ? -1 < (" " + a.replace(ae, " ") + " ").indexOf(n) : "|=" === i && (a === n || a.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, s) {
                        var a = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === n && 0 === s ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var h, c, d, u, p, f, m = a !== r ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = o && t.nodeName.toLowerCase(),
                                b = !l && !o,
                                y = !1;
                            if (g) {
                                if (a) {
                                    for (; m;) {
                                        for (u = t; u = u[m];)
                                            if (o ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && b) {
                                    for (y = (p = (h = (c = (d = (u = g)[H] || (u[H] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[e] || [])[0] === R && h[1]) && h[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (y = p = 0) || f.pop();)
                                        if (1 === u.nodeType && ++y && u === t) {
                                            c[e] = [R, p, y];
                                            break
                                        }
                                } else if (b && (y = p = (h = (c = (d = (u = t)[H] || (u[H] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[e] || [])[0] === R && h[1]), !1 === y)
                                    for (;
                                        (u = ++p && u && u[m] || (y = p = 0) || f.pop()) && ((o ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++y || (b && ((c = (d = u[H] || (u[H] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[e] = [R, y]), u !== t)););
                                return (y -= s) === n || y % n == 0 && 0 <= y / n
                            }
                        }
                    },
                    PSEUDO: function(e, i) {
                        var s, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[H] ? a(i) : 1 < a.length ? (s = [e, e, "", i], w.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                            for (var n, s = a(e, i), r = s.length; r--;) e[n = Z(e, s[r])] = !(t[n] = s[r])
                        }) : function(e) {
                            return a(e, 0, s)
                        }) : a
                    }
                },
                pseudos: {
                    not: n(function(e) {
                        var t = [],
                            i = [],
                            s = T(e.replace(re, "$1"));
                        return s[H] ? n(function(e, t, i, n) {
                            for (var a, r = s(e, null, n, []), o = e.length; o--;)(a = r[o]) && (e[o] = !(t[o] = a))
                        }) : function(e, n, a) {
                            return t[0] = e, s(t, null, a, i), t[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(e) {
                        return function(i) {
                            return 0 < t(e, i).length
                        }
                    }),
                    contains: n(function(e) {
                        return e = e.replace(ye, _e),
                            function(t) {
                                return -1 < (t.textContent || x(t)).indexOf(e)
                            }
                    }),
                    lang: n(function(e) {
                        return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, _e).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === P
                    },
                    focus: function(e) {
                        return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: h(!1),
                    disabled: h(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: c(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: c(function(e, t, i) {
                        for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n;) e.push(n);
                        return e
                    }),
                    gt: c(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[y] = o(y);
        for (y in {
                submit: !0,
                reset: !0
            }) w.pseudos[y] = l(y);
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u, k = t.tokenize = function(e, i) {
            var n, s, a, r, o, l, h, c = q[e + " "];
            if (c) return i ? 0 : c.slice(0);
            for (o = e, l = [], h = w.preFilter; o;) {
                for (r in n && !(s = oe.exec(o)) || (s && (o = o.slice(s[0].length) || o), l.push(a = [])), n = !1, (s = le.exec(o)) && (n = s.shift(), a.push({
                        value: n,
                        type: s[0].replace(re, " ")
                    }), o = o.slice(n.length)), w.filter) !(s = ue[r].exec(o)) || h[r] && !(s = h[r](s)) || (n = s.shift(), a.push({
                    value: n,
                    type: r,
                    matches: s
                }), o = o.slice(n.length));
                if (!n) break
            }
            return i ? o.length : o ? t.error(e) : q(e, l).slice(0)
        }, T = t.compile = function(e, i) {
            var s, a, r, o, l, h, c = [],
                d = [],
                u = Y[e + " "];
            if (!u) {
                for (i || (i = k(e)), s = i.length; s--;)(u = b(i[s]))[H] ? c.push(u) : d.push(u);
                (u = Y(e, (a = d, o = 0 < (r = c).length, l = 0 < a.length, h = function(e, i, n, s, h) {
                    var c, d, u, p = 0,
                        f = "0",
                        m = e && [],
                        v = [],
                        b = D,
                        y = e || l && w.find.TAG("*", h),
                        _ = R += null == b ? 1 : Math.random() || .1,
                        x = y.length;
                    for (h && (D = i === $ || i || h); f !== x && null != (c = y[f]); f++) {
                        if (l && c) {
                            for (d = 0, i || c.ownerDocument === $ || (I(c), n = !A); u = a[d++];)
                                if (u(c, i || $, n)) {
                                    s.push(c);
                                    break
                                }
                            h && (R = _)
                        }
                        o && ((c = !u && c) && p--, e && m.push(c))
                    }
                    if (p += f, o && f !== p) {
                        for (d = 0; u = r[d++];) u(m, v, i, n);
                        if (e) {
                            if (0 < p)
                                for (; f--;) m[f] || v[f] || (v[f] = X.call(s));
                            v = g(v)
                        }
                        Q.apply(s, v), h && !e && 0 < v.length && 1 < p + r.length && t.uniqueSort(s)
                    }
                    return h && (R = _, D = b), m
                }, o ? n(h) : h))).selector = e
            }
            return u
        }, S = t.select = function(e, t, i, n) {
            var s, a, r, o, l, h = "function" == typeof e && e,
                c = !n && k(e = h.selector || e);
            if (i = i || [], 1 === c.length) {
                if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (r = a[0]).type && 9 === t.nodeType && A && w.relative[a[1].type]) {
                    if (!(t = (w.find.ID(r.matches[0].replace(ye, _e), t) || [])[0])) return i;
                    h && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (s = ue.needsContext.test(e) ? 0 : a.length; s-- && (r = a[s], !w.relative[o = r.type]);)
                    if ((l = w.find[o]) && (n = l(r.matches[0].replace(ye, _e), be.test(a[0].type) && d(t.parentNode) || t))) {
                        if (a.splice(s, 1), !(e = n.length && p(a))) return Q.apply(i, n), i;
                        break
                    }
            }
            return (h || T(e, c))(n, t, !A, i, !t || be.test(e) && d(t.parentNode) || t), i
        }, _.sortStable = H.split("").sort(V).join("") === H, _.detectDuplicates = !!M, I(), _.sortDetached = s(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("fieldset"))
        }), s(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && s(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), s(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(ee, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    fe.find = ge, fe.expr = ge.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ge.uniqueSort, fe.text = ge.getText, fe.isXMLDoc = ge.isXML, fe.contains = ge.contains, fe.escapeSelector = ge.escape;
    var ve = function(e, t, i) {
            for (var n = [], s = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (s && fe(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        be = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        ye = fe.expr.match.needsContext,
        _e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    fe.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? fe.find.matchesSelector(n, e) ? [n] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                s = this;
            if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (fe.contains(s[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) fe.find(e, s[t], i);
            return 1 < n ? fe.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ye.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var we, xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (fe.fn.init = function(e, t, i) {
        var n, s;
        if (!e) return this;
        if (i = i || we, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : xe.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), _e.test(n[1]) && fe.isPlainObject(t))
                    for (n in t) ce(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (s = J.getElementById(n[2])) && (this[0] = s, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ce(e) ? void 0 !== i.ready ? i.ready(e) : e(fe) : fe.makeArray(e, this)
    }).prototype = fe.fn, we = fe(J);
    var Ce = /^(?:parents|prev(?:Until|All))/,
        ke = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        has: function(e) {
            var t = fe(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (fe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                s = this.length,
                a = [],
                r = "string" != typeof e && fe(e);
            if (!ye.test(e))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && fe.find.matchesSelector(i, e))) {
                            a.push(i);
                            break
                        }
            return this.pushStack(1 < a.length ? fe.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ne.call(fe(e), this[0]) : ne.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ve(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ve(e, "parentNode", i)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ve(e, "nextSibling")
        },
        prevAll: function(e) {
            return ve(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ve(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ve(e, "previousSibling", i)
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return be(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (a(e, "template") && (e = e.content || e), fe.merge([], e.childNodes))
        }
    }, function(e, t) {
        fe.fn[e] = function(i, n) {
            var s = fe.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = fe.filter(n, s)), 1 < this.length && (ke[e] || fe.uniqueSort(s), Ce.test(e) && s.reverse()), this.pushStack(s)
        }
    });
    var Te = /[^\x20\t\r\n\f]+/g;
    fe.Callbacks = function(e) {
        var t, i;
        e = "string" == typeof e ? (t = e, i = {}, fe.each(t.match(Te) || [], function(e, t) {
            i[t] = !0
        }), i) : fe.extend({}, e);
        var s, a, r, o, l = [],
            h = [],
            c = -1,
            d = function() {
                for (o = o || e.once, r = s = !0; h.length; c = -1)
                    for (a = h.shift(); ++c < l.length;) !1 === l[c].apply(a[0], a[1]) && e.stopOnFalse && (c = l.length, a = !1);
                e.memory || (a = !1), s = !1, o && (l = a ? [] : "")
            },
            u = {
                add: function() {
                    return l && (a && !s && (c = l.length - 1, h.push(a)), function t(i) {
                        fe.each(i, function(i, s) {
                            ce(s) ? e.unique && u.has(s) || l.push(s) : s && s.length && "string" !== n(s) && t(s)
                        })
                    }(arguments), a && !s && d()), this
                },
                remove: function() {
                    return fe.each(arguments, function(e, t) {
                        for (var i; - 1 < (i = fe.inArray(t, l, i));) l.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < fe.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l && (l = []), this
                },
                disable: function() {
                    return o = h = [], l = a = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return o = h = [], a || s || (l = a = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], h.push(t), s || d()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return u
    }, fe.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2],
                    ["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                s = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return fe.Deferred(function(t) {
                            fe.each(i, function(i, n) {
                                var s = ce(e[n[4]]) && e[n[4]];
                                a[n[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ce(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, n, s) {
                        function a(t, i, n, s) {
                            return function() {
                                var o = this,
                                    c = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < r)) {
                                            if ((e = n.apply(o, c)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, ce(d) ? s ? d.call(e, a(r, i, l, s), a(r, i, h, s)) : (r++, d.call(e, a(r, i, l, s), a(r, i, h, s), a(r, i, l, i.notifyWith))) : (n !== l && (o = void 0, c = [e]), (s || i.resolveWith)(o, c))
                                        }
                                    },
                                    u = s ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, u.stackTrace), r <= t + 1 && (n !== h && (o = void 0, c = [e]), i.rejectWith(o, c))
                                        }
                                    };
                                t ? u() : (fe.Deferred.getStackHook && (u.stackTrace = fe.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        var r = 0;
                        return fe.Deferred(function(e) {
                            i[0][3].add(a(0, e, ce(s) ? s : l, e.notifyWith)), i[1][3].add(a(0, e, ce(t) ? t : l)), i[2][3].add(a(0, e, ce(n) ? n : h))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? fe.extend(e, s) : s
                    }
                },
                a = {};
            return fe.each(i, function(e, t) {
                var r = t[2],
                    o = t[5];
                s[t[1]] = r.add, o && r.add(function() {
                    n = o
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), r.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = r.fireWith
            }), s.promise(a), t && t.call(a, a), a
        },
        when: function(e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                s = ee.call(arguments),
                a = fe.Deferred(),
                r = function(e) {
                    return function(i) {
                        n[e] = this, s[e] = 1 < arguments.length ? ee.call(arguments) : i, --t || a.resolveWith(n, s)
                    }
                };
            if (t <= 1 && (c(e, a.done(r(i)).resolve, a.reject, !t), "pending" === a.state() || ce(s[i] && s[i].then))) return a.then();
            for (; i--;) c(s[i], r(i), a.reject);
            return a.promise()
        }
    });
    var Se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    fe.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && Se.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, fe.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var De = fe.Deferred();
    fe.fn.ready = function(e) {
        return De.then(e)["catch"](function(e) {
            fe.readyException(e)
        }), this
    }, fe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0) !== e && 0 < --fe.readyWait || De.resolveWith(J, [fe])
        }
    }), fe.ready.then = De.then, "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? e.setTimeout(fe.ready) : (J.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Ee = function(e, t, i, s, a, r, o) {
            var l = 0,
                h = e.length,
                c = null == i;
            if ("object" === n(i))
                for (l in a = !0, i) Ee(e, t, l, i[l], !0, r, o);
            else if (void 0 !== s && (a = !0, ce(s) || (o = !0), c && (o ? (t.call(e, s), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(fe(e), i)
                })), t))
                for (; l < h; l++) t(e[l], i, o ? s : s.call(e[l], l, t(e[l], i)));
            return a ? e : c ? t.call(e) : h ? t(e[0], i) : r
        },
        Me = /^-ms-/,
        Ie = /-([a-z])/g,
        $e = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    f.uid = 1, f.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, $e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, s = this.cache(e);
            if ("string" == typeof t) s[p(t)] = i;
            else
                for (n in t) s[p(n)] = t[n];
            return s
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(p) : (t = p(t)) in n ? [t] : t.match(Te) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || fe.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !fe.isEmptyObject(t)
        }
    };
    var Pe = new f,
        Ae = new f,
        Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /[A-Z]/g;
    fe.extend({
        hasData: function(e) {
            return Ae.hasData(e) || Pe.hasData(e)
        },
        data: function(e, t, i) {
            return Ae.access(e, t, i)
        },
        removeData: function(e, t) {
            Ae.remove(e, t)
        },
        _data: function(e, t, i) {
            return Pe.access(e, t, i)
        },
        _removeData: function(e, t) {
            Pe.remove(e, t)
        }
    }), fe.fn.extend({
        data: function(e, t) {
            var i, n, s, a = this[0],
                r = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (s = Ae.get(a), 1 === a.nodeType && !Pe.get(a, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = p(n.slice(5)), m(a, n, s[n]));
                    Pe.set(a, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                Ae.set(this, e)
            }) : Ee(this, function(t) {
                var i;
                return a && void 0 === t ? void 0 !== (i = Ae.get(a, e)) ? i : void 0 !== (i = m(a, e)) ? i : void 0 : void this.each(function() {
                    Ae.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ae.remove(this, e)
            })
        }
    }), fe.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = Pe.get(e, t), i && (!n || Array.isArray(i) ? n = Pe.access(e, t, fe.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = fe.queue(e, t),
                n = i.length,
                s = i.shift(),
                a = fe._queueHooks(e, t);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete a.stop, s.call(e, function() {
                fe.dequeue(e, t)
            }, a)), !n && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return Pe.get(e, i) || Pe.access(e, i, {
                empty: fe.Callbacks("once memory").add(function() {
                    Pe.remove(e, [t + "queue", i])
                })
            })
        }
    }), fe.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = fe.queue(this, e, t);
                fe._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && fe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                s = fe.Deferred(),
                a = this,
                r = this.length,
                o = function() {
                    --n || s.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = Pe.get(a[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
            return o(), s.promise(t)
        }
    });
    var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Le = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
        He = ["Top", "Right", "Bottom", "Left"],
        Fe = J.documentElement,
        Re = function(e) {
            return fe.contains(e.ownerDocument, e)
        },
        We = {
            composed: !0
        };
    Fe.getRootNode && (Re = function(e) {
        return fe.contains(e.ownerDocument, e) || e.getRootNode(We) === e.ownerDocument
    });
    var je = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && Re(e) && "none" === fe.css(e, "display")
        },
        qe = function(e, t, i, n) {
            var s, a, r = {};
            for (a in t) r[a] = e.style[a], e.style[a] = t[a];
            for (a in s = i.apply(e, n || []), t) e.style[a] = r[a];
            return s
        },
        Ye = {};
    fe.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                je(this) ? fe(this).show() : fe(this).hide()
            })
        }
    });
    var Be = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ue = /^$|^module$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Xe, Ke, Qe = /<|&#?\w+;/;
    Xe = J.createDocumentFragment().appendChild(J.createElement("div")), (Ke = J.createElement("input")).setAttribute("type", "radio"), Ke.setAttribute("checked", "checked"), Ke.setAttribute("name", "t"), Xe.appendChild(Ke), he.checkClone = Xe.cloneNode(!0).cloneNode(!0).lastChild.checked, Xe.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!Xe.cloneNode(!0).lastChild.defaultValue;
    var Je = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, i, n, s) {
            var a, r, o, l, h, c, d, u, p, f, m, g = Pe.get(e);
            if (g)
                for (i.handler && (i = (a = i).handler, s = a.selector), s && fe.find.matchesSelector(Fe, s), i.guid || (i.guid = fe.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
                        return "undefined" != typeof fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0
                    }), h = (t = (t || "").match(Te) || [""]).length; h--;) p = m = (o = et.exec(t[h]) || [])[1], f = (o[2] || "").split(".").sort(), p && (d = fe.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, d = fe.event.special[p] || {}, c = fe.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && fe.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, a), (u = l[p]) || ((u = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), s ? u.splice(u.delegateCount++, 0, c) : u.push(c), fe.event.global[p] = !0)
        },
        remove: function(e, t, i, n, s) {
            var a, r, o, l, h, c, d, u, p, f, m, g = Pe.hasData(e) && Pe.get(e);
            if (g && (l = g.events)) {
                for (h = (t = (t || "").match(Te) || [""]).length; h--;)
                    if (p = m = (o = et.exec(t[h]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                        for (d = fe.event.special[p] || {}, u = l[p = (n ? d.delegateType : d.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = u.length; a--;) c = u[a], !s && m !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (u.splice(a, 1), c.selector && u.delegateCount--, d.remove && d.remove.call(e, c));
                        r && !u.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || fe.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) fe.event.remove(e, p + t[h], i, n, !0);
                fe.isEmptyObject(l) && Pe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, s, a, r, o = fe.event.fix(e),
                l = new Array(arguments.length),
                h = (Pe.get(this, "events") || {})[o.type] || [],
                c = fe.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
                for (r = fe.event.handlers.call(this, o, h), t = 0;
                    (s = r[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = s.elem, i = 0;
                        (a = s.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== a.namespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (n = ((fe.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var i, n, s, a, r, o = [],
                l = t.delegateCount,
                h = e.target;
            if (l && h.nodeType && !("click" === e.type && 1 <= e.button))
                for (; h !== this; h = h.parentNode || this)
                    if (1 === h.nodeType && ("click" !== e.type || !0 !== h.disabled)) {
                        for (a = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = t[i]).selector + " "] && (r[s] = n.needsContext ? -1 < fe(s, this).index(h) : fe.find(s, this, null, [h]).length), r[s] && a.push(n);
                        a.length && o.push({
                            elem: h,
                            handlers: a
                        })
                    }
            return h = this, l < t.length && o.push({
                elem: h,
                handlers: t.slice(l)
            }), o
        },
        addProp: function(e, t) {
            Object.defineProperty(fe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ce(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[fe.expando] ? e : new fe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return Be.test(t.type) && t.click && a(t, "input") && T(t, "click", w), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return Be.test(t.type) && t.click && a(t, "input") && T(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return Be.test(t.type) && t.click && a(t, "input") && Pe.get(t, "click") || a(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, fe.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, fe.Event = function(e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[fe.expando] = !0, void 0) : new fe.Event(e, t)
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, fe.event.addProp), fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        fe.event.special[e] = {
            setup: function() {
                return T(this, e, C), !1
            },
            trigger: function() {
                return T(this, e), !0
            },
            delegateType: t
        }
    }), fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = e.relatedTarget,
                    s = e.handleObj;
                return n && (n === this || fe.contains(this, n)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), fe.fn.extend({
        on: function(e, t, i, n) {
            return k(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return k(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, s;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, fe(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, t, e[s]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = x), this.each(function() {
                fe.event.remove(this, e, i, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        it = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, s, a, r, o, l, h, c = e.cloneNode(!0),
                d = Re(e);
            if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (r = b(c), n = 0, s = (a = b(e)).length; n < s; n++) o = a[n], l = r[n], "input" === (h = l.nodeName.toLowerCase()) && Be.test(o.type) ? l.checked = o.checked : "input" !== h && "textarea" !== h || (l.defaultValue = o.defaultValue);
            if (t)
                if (i)
                    for (a = a || b(e), r = r || b(c), n = 0, s = a.length; n < s; n++) M(a[n], r[n]);
                else M(e, c);
            return 0 < (r = b(c, "script")).length && y(r, !d && b(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, i, n, s = fe.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if ($e(i)) {
                    if (t = i[Pe.expando]) {
                        if (t.events)
                            for (n in t.events) s[n] ? fe.event.remove(i, n) : fe.removeEvent(i, n, t.handle);
                        i[Pe.expando] = void 0
                    }
                    i[Ae.expando] && (i[Ae.expando] = void 0)
                }
        }
    }), fe.fn.extend({
        detach: function(e) {
            return $(this, e, !0)
        },
        remove: function(e) {
            return $(this, e)
        },
        text: function(e) {
            return Ee(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return I(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return I(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(b(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return fe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ee(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !it.test(e) && !Ge[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (fe.cleanData(b(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return I(this, arguments, function(t) {
                var i = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(b(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var i, n = [], s = fe(e), a = s.length - 1, r = 0; r <= a; r++) i = r === a ? this : this.clone(!0), fe(s[r])[t](i), ie.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var at = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
        rt = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        ot = new RegExp(He.join("|"), "i");
    ! function() {
        function t() {
            if (h) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Fe.appendChild(l).appendChild(h);
                var t = e.getComputedStyle(h);
                n = "1%" !== t.top, o = 12 === i(t.marginLeft), h.style.right = "60%", r = 36 === i(t.right), s = 36 === i(t.width), h.style.position = "absolute", a = 12 === i(h.offsetWidth / 3), Fe.removeChild(l), h = null
            }
        }

        function i(e) {
            return Math.round(parseFloat(e))
        }
        var n, s, a, r, o, l = J.createElement("div"),
            h = J.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === h.style.backgroundClip, fe.extend(he, {
            boxSizingReliable: function() {
                return t(), s
            },
            pixelBoxStyles: function() {
                return t(), r
            },
            pixelPosition: function() {
                return t(), n
            },
            reliableMarginLeft: function() {
                return t(), o
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var lt = ["Webkit", "Moz", "ms"],
        ht = J.createElement("div").style,
        ct = {},
        dt = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        pt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ft = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = P(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, a, r, o = p(t),
                    l = ut.test(t),
                    h = e.style;
                if (l || (t = O(o)), r = fe.cssHooks[t] || fe.cssHooks[o], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(e, !1, n)) ? s : h[t];
                "string" == (a = typeof i) && (s = Le.exec(i)) && s[1] && (i = g(e, t, s), a = "number"), null != i && i == i && ("number" !== a || l || (i += s && s[3] || (fe.cssNumber[o] ? "" : "px")), he.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (h[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? h.setProperty(t, i) : h[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var s, a, r, o = p(t);
            return ut.test(t) || (t = O(o)), (r = fe.cssHooks[t] || fe.cssHooks[o]) && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = P(e, t, n)), "normal" === s && t in ft && (s = ft[t]), "" === i || i ? (a = parseFloat(s), !0 === i || isFinite(a) ? a || 0 : s) : s
        }
    }), fe.each(["height", "width"], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, i, n) {
                if (i) return !dt.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? L(e, t, n) : qe(e, pt, function() {
                    return L(e, t, n)
                })
            },
            set: function(e, i, n) {
                var s, a = rt(e),
                    r = !he.scrollboxSize() && "absolute" === a.position,
                    o = (r || n) && "border-box" === fe.css(e, "boxSizing", !1, a),
                    l = n ? z(e, t, n, o, a) : 0;
                return o && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - z(e, t, "border", !1, a) - .5)), l && (s = Le.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i, i = fe.css(e, t)), N(0, i, l)
            }
        }
    }), fe.cssHooks.marginLeft = A(he.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[e + He[n] + t] = a[n] || a[n - 2] || a[0];
                return s
            }
        }, "margin" !== e && (fe.cssHooks[e + t].set = N)
    }), fe.fn.extend({
        css: function(e, t) {
            return Ee(this, function(e, t, i) {
                var n, s, a = {},
                    r = 0;
                if (Array.isArray(t)) {
                    for (n = rt(e), s = t.length; r < s; r++) a[t[r]] = fe.css(e, t[r], !1, n);
                    return a
                }
                return void 0 !== i ? fe.style(e, t, i) : fe.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((fe.Tween = H).prototype = {
        constructor: H,
        init: function(e, t, i, n, s, a) {
            this.elem = e, this.prop = i, this.easing = s || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (fe.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : H.propHooks._default.set(this), this
        }
    }).init.prototype = H.prototype, (H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !fe.cssHooks[e.prop] && null == e.elem.style[O(e.prop)] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, fe.fx = H.prototype.init, fe.fx.step = {};
    var mt, gt, vt, bt, yt = /^(?:toggle|show|hide)$/,
        _t = /queueHooks$/;
    fe.Animation = fe.extend(q, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return g(i.elem, e, Le.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            ce(e) ? (t = e, e = ["*"]) : e = e.match(Te);
            for (var i, n = 0, s = e.length; n < s; n++) i = e[n], q.tweeners[i] = q.tweeners[i] || [], q.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, s, a, r, o, l, h, c, d = "width" in t || "height" in t,
                u = this,
                p = {},
                f = e.style,
                m = e.nodeType && je(e),
                g = Pe.get(e, "fxshow");
            for (n in i.queue || (null == (r = fe._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, o = r.empty.fire, r.empty.fire = function() {
                    r.unqueued || o()
                }), r.unqueued++, u.always(function() {
                    u.always(function() {
                        r.unqueued--, fe.queue(e, "fx").length || r.empty.fire()
                    })
                })), t)
                if (s = t[n], yt.test(s)) {
                    if (delete t[n], a = a || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    p[n] = g && g[n] || fe.style(e, n)
                }
            if ((l = !fe.isEmptyObject(t)) || !fe.isEmptyObject(p))
                for (n in d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = g && g.display) && (h = Pe.get(e, "display")), "none" === (c = fe.css(e, "display")) && (h ? c = h : (v([e], !0), h = e.style.display || h, c = fe.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != h) && "none" === fe.css(e, "float") && (l || (u.done(function() {
                        f.display = h
                    }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function() {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Pe.access(e, "fxshow", {
                    display: h
                }), a && (g.hidden = !m), m && v([e], !0), u.done(function() {
                    for (n in m || v([e]), Pe.remove(e, "fxshow"), p) fe.style(e, n, p[n])
                })), l = j(m ? g[n] : 0, n, u), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? q.prefilters.unshift(e) : q.prefilters.push(e)
        }
    }), fe.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: i || !i && t || ce(e) && e,
            duration: e,
            easing: i && t || t && !ce(t) && t
        };
        return fe.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in fe.fx.speeds ? n.duration = fe.fx.speeds[n.duration] : n.duration = fe.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ce(n.old) && n.old.call(this), n.queue && fe.dequeue(this, n.queue)
        }, n
    }, fe.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(je).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var s = fe.isEmptyObject(e),
                a = fe.speed(t, i, n),
                r = function() {
                    var t = q(this, fe.extend({}, e), a);
                    (s || Pe.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, s || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    s = null != e && e + "queueHooks",
                    a = fe.timers,
                    r = Pe.get(this);
                if (s) r[s] && r[s].stop && n(r[s]);
                else
                    for (s in r) r[s] && r[s].stop && _t.test(s) && n(r[s]);
                for (s = a.length; s--;) a[s].elem !== this || null != e && a[s].queue !== e || (a[s].anim.stop(i), t = !1, a.splice(s, 1));
                !t && i || fe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, i = Pe.get(this),
                    n = i[e + "queue"],
                    s = i[e + "queueHooks"],
                    a = fe.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, fe.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), fe.each(["toggle", "show", "hide"], function(e, t) {
        var i = fe.fn[t];
        fe.fn[t] = function(e, n, s) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(W(t, !0), e, n, s)
        }
    }), fe.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        fe.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), fe.timers = [], fe.fx.tick = function() {
        var e, t = 0,
            i = fe.timers;
        for (mt = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || fe.fx.stop(), mt = void 0
    }, fe.fx.timer = function(e) {
        fe.timers.push(e),
            fe.fx.start()
    }, fe.fx.interval = 13, fe.fx.start = function() {
        gt || (gt = !0, F())
    }, fe.fx.stop = function() {
        gt = null
    }, fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fe.fn.delay = function(t, i) {
        return t = fe.fx && fe.fx.speeds[t] || t, i = i || "fx", this.queue(i, function(i, n) {
            var s = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(s)
            }
        })
    }, vt = J.createElement("input"), bt = J.createElement("select").appendChild(J.createElement("option")), vt.type = "checkbox", he.checkOn = "" !== vt.value, he.optSelected = bt.selected, (vt = J.createElement("input")).value = "t", vt.type = "radio", he.radioValue = "t" === vt.value;
    var wt, xt = fe.expr.attrHandle;
    fe.fn.extend({
        attr: function(e, t) {
            return Ee(this, fe.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function(e, t, i) {
            var n, s, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, i) : (1 === a && fe.isXMLDoc(e) || (s = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? wt : void 0)), void 0 !== i ? null === i ? void fe.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = fe.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && a(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                s = t && t.match(Te);
            if (s && 1 === e.nodeType)
                for (; i = s[n++];) e.removeAttribute(i)
        }
    }), wt = {
        set: function(e, t, i) {
            return !1 === t ? fe.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = xt[t] || fe.find.attr;
        xt[t] = function(e, t, n) {
            var s, a, r = t.toLowerCase();
            return n || (a = xt[r], xt[r] = s, s = null != i(e, t, n) ? r : null, xt[r] = a), s
        }
    });
    var Ct = /^(?:input|select|textarea|button)$/i,
        kt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return Ee(this, fe.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[fe.propFix[e] || e]
            })
        }
    }), fe.extend({
        prop: function(e, t, i) {
            var n, s, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, s = fe.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ct.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), he.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }), fe.fn.extend({
        addClass: function(e) {
            var t, i, n, s, a, r, o, l = 0;
            if (ce(e)) return this.each(function(t) {
                fe(this).addClass(e.call(this, t, B(this)))
            });
            if ((t = V(e)).length)
                for (; i = this[l++];)
                    if (s = B(i), n = 1 === i.nodeType && " " + Y(s) + " ") {
                        for (r = 0; a = t[r++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                        s !== (o = Y(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, s, a, r, o, l = 0;
            if (ce(e)) return this.each(function(t) {
                fe(this).removeClass(e.call(this, t, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = V(e)).length)
                for (; i = this[l++];)
                    if (s = B(i), n = 1 === i.nodeType && " " + Y(s) + " ") {
                        for (r = 0; a = t[r++];)
                            for (; - 1 < n.indexOf(" " + a + " ");) n = n.replace(" " + a + " ", " ");
                        s !== (o = Y(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e,
                n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : ce(e) ? this.each(function(i) {
                fe(this).toggleClass(e.call(this, i, B(this), t), t)
            }) : this.each(function() {
                var t, s, a, r;
                if (n)
                    for (s = 0, a = fe(this), r = V(e); t = r[s++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = B(this)) && Pe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Pe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + Y(B(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    fe.fn.extend({
        val: function(e) {
            var t, i, n, s = this[0];
            return arguments.length ? (n = ce(e), this.each(function(i) {
                var s;
                1 === this.nodeType && (null == (s = n ? e.call(this, i, fe(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = fe.map(s, function(e) {
                    return null == e ? "" : e + ""
                })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            })) : s ? (t = fe.valHooks[s.type] || fe.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(Tt, "") : null == i ? "" : i : void 0
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : Y(fe.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, s = e.options,
                        r = e.selectedIndex,
                        o = "select-one" === e.type,
                        l = o ? null : [],
                        h = o ? r + 1 : s.length;
                    for (n = r < 0 ? h : o ? r : 0; n < h; n++)
                        if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !a(i.parentNode, "optgroup"))) {
                            if (t = fe(i).val(), o) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var i, n, s = e.options, a = fe.makeArray(t), r = s.length; r--;)((n = s[r]).selected = -1 < fe.inArray(fe.valHooks.option.get(n), a)) && (i = !0);
                    return i || (e.selectedIndex = -1), a
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < fe.inArray(fe(e).val(), t)
            }
        }, he.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), he.focusin = "onfocusin" in e;
    var St = /^(?:focusinfocus|focusoutblur)$/,
        Dt = function(e) {
            e.stopPropagation()
        };
    fe.extend(fe.event, {
        trigger: function(t, i, n, s) {
            var a, r, o, l, h, c, d, u, p = [n || J],
                f = re.call(t, "type") ? t.type : t,
                m = re.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = u = o = n = n || J, 3 !== n.nodeType && 8 !== n.nodeType && !St.test(f + fe.event.triggered) && (-1 < f.indexOf(".") && (f = (m = f.split(".")).shift(), m.sort()), h = f.indexOf(":") < 0 && "on" + f, (t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : fe.makeArray(i, [t]), d = fe.event.special[f] || {}, s || !d.trigger || !1 !== d.trigger.apply(n, i))) {
                if (!s && !d.noBubble && !de(n)) {
                    for (l = d.delegateType || f, St.test(l + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), o = r;
                    o === (n.ownerDocument || J) && p.push(o.defaultView || o.parentWindow || e)
                }
                for (a = 0;
                    (r = p[a++]) && !t.isPropagationStopped();) u = r, t.type = 1 < a ? l : d.bindType || f, (c = (Pe.get(r, "events") || {})[t.type] && Pe.get(r, "handle")) && c.apply(r, i), (c = h && r[h]) && c.apply && $e(r) && (t.result = c.apply(r, i), !1 === t.result && t.preventDefault());
                return t.type = f, s || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), i) || !$e(n) || h && ce(n[f]) && !de(n) && ((o = n[h]) && (n[h] = null), fe.event.triggered = f, t.isPropagationStopped() && u.addEventListener(f, Dt), n[f](), t.isPropagationStopped() && u.removeEventListener(f, Dt), fe.event.triggered = void 0, o && (n[h] = o)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = fe.extend(new fe.Event, i, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(n, null, t)
        }
    }), fe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return fe.event.trigger(e, t, i, !0)
        }
    }), he.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = Pe.access(n, t);
                s || n.addEventListener(e, i, !0), Pe.access(n, t, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = Pe.access(n, t) - 1;
                s ? Pe.access(n, t, s) : (n.removeEventListener(e, i, !0), Pe.remove(n, t))
            }
        }
    });
    var Et = e.location,
        Mt = Date.now(),
        It = /\?/;
    fe.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), i
    };
    var $t = /\[\]$/,
        Pt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var i, n = [],
            s = function(e, t) {
                var i = ce(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (i in e) U(i, e[i], t, s);
        return n.join("&")
    }, fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && Ot.test(this.nodeName) && !At.test(e) && (this.checked || !Be.test(e))
            }).map(function(e, t) {
                var i = fe(this).val();
                return null == i ? null : Array.isArray(i) ? fe.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Pt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Pt, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        zt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Wt = {},
        jt = {},
        qt = "*/".concat("*"),
        Yt = J.createElement("a");
    Yt.href = Et.href, fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, fe.ajaxSettings), t) : K(fe.ajaxSettings, e)
        },
        ajaxPrefilter: G(Wt),
        ajaxTransport: G(jt),
        ajax: function(t, i) {
            function n(t, i, n, o) {
                var h, u, p, _, w, x = i;
                c || (c = !0, l && e.clearTimeout(l), s = void 0, r = o || "", C.readyState = 0 < t ? 4 : 0, h = 200 <= t && t < 300 || 304 === t, n && (_ = function(e, t, i) {
                    for (var n, s, a, r, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in o)
                            if (o[s] && o[s].test(n)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in i) a = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                a = s;
                                break
                            }
                            r || (r = s)
                        }
                        a = a || r
                    }
                    if (a) return a !== l[0] && l.unshift(a), i[a]
                }(f, C, n)), _ = function(e, t, i, n) {
                    var s, a, r, o, l, h = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (r in e.converters) h[r.toLowerCase()] = e.converters[r];
                    for (a = c.shift(); a;)
                        if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(r = h[l + " " + a] || h["* " + a]))
                            for (s in h)
                                if ((o = s.split(" "))[1] === a && (r = h[l + " " + o[0]] || h["* " + o[0]])) {
                                    !0 === r ? r = h[s] : !0 !== h[s] && (a = o[0], c.unshift(o[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && e["throws"]) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, _, C, h), h ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (fe.lastModified[a] = w), (w = C.getResponseHeader("etag")) && (fe.etag[a] = w)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, u = _.data, h = !(p = _.error))) : (p = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (i || x) + "", h ? v.resolveWith(m, [u, x, C]) : v.rejectWith(m, [C, x, p]), C.statusCode(y), y = void 0, d && g.trigger(h ? "ajaxSuccess" : "ajaxError", [C, f, h ? u : p]), b.fireWith(m, [C, x]), d && (g.trigger("ajaxComplete", [C, f]), --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var s, a, r, o, l, h, c, d, u, p, f = fe.ajaxSetup({}, i),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? fe(m) : fe.event,
                v = fe.Deferred(),
                b = fe.Callbacks("once memory"),
                y = f.statusCode || {},
                _ = {},
                w = {},
                x = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!o)
                                for (o = {}; t = Ht.exec(r);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = o[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return s && s.abort(t), n(0, t), this
                    }
                };
            if (v.promise(C), f.url = ((t || f.url || Et.href) + "").replace(Rt, Et.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Te) || [""], null == f.crossDomain) {
                h = J.createElement("a");
                try {
                    h.href = f.url, h.href = h.href, f.crossDomain = Yt.protocol + "//" + Yt.host != h.protocol + "//" + h.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = fe.param(f.data, f.traditional)), X(Wt, f, i, C), c) return C;
            for (u in (d = fe.event && f.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ft.test(f.type), a = f.url.replace(zt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Nt, "+")) : (p = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (It.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(Lt, "$1"), p = (It.test(a) ? "&" : "?") + "_=" + Mt++ + p), f.url = a + p), f.ifModified && (fe.lastModified[a] && C.setRequestHeader("If-Modified-Since", fe.lastModified[a]), fe.etag[a] && C.setRequestHeader("If-None-Match", fe.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || c)) return C.abort();
            if (x = "abort", b.add(f.complete), C.done(f.success), C.fail(f.error), s = X(jt, f, i, C)) {
                if (C.readyState = 1, d && g.trigger("ajaxSend", [C, f]), c) return C;
                f.async && 0 < f.timeout && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, s.send(_, n)
                } catch (e) {
                    if (c) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, i) {
            return fe.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }), fe.each(["get", "post"], function(e, t) {
        fe[t] = function(e, i, n, s) {
            return ce(i) && (s = s || n, n = i, i = void 0), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: s,
                data: i,
                success: n
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function(e, t) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                fe.globalEval(e, t)
            }
        })
    }, fe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ce(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ce(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = fe(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ce(e);
            return this.each(function(i) {
                fe(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                fe(this).replaceWith(this.childNodes)
            }), this
        }
    }), fe.expr.pseudos.hidden = function(e) {
        return !fe.expr.pseudos.visible(e)
    }, fe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, fe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        Vt = fe.ajaxSettings.xhr();
    he.cors = !!Vt && "withCredentials" in Vt, he.ajax = Vt = !!Vt, fe.ajaxTransport(function(t) {
        var i, n;
        if (he.cors || Vt && !t.crossDomain) return {
            send: function(s, a) {
                var r, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) o[r] = t.xhrFields[r];
                for (r in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) o.setRequestHeader(r, s[r]);
                i = function(e) {
                    return function() {
                        i && (i = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Bt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = i(), n = o.onerror = o.ontimeout = i("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                    4 === o.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), fe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), fe.ajaxTransport("script", function(e) {
        var t, i;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(n, s) {
                t = fe("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function(e) {
                    t.remove(), i = null, e && s("error" === e.type ? 404 : 200, e.type)
                }), J.head.appendChild(t[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Gt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || fe.expando + "_" + Mt++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function(t, i, n) {
        var s, a, r, o = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = ce(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Xt, "$1" + s) : !1 !== t.jsonp && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
            return r || fe.error(s + " was not called"), r[0]
        }, t.dataTypes[0] = "json", a = e[s], e[s] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === a ? fe(e).removeProp(s) : e[s] = a, t[s] && (t.jsonpCallback = i.jsonpCallback, Gt.push(s)), r && ce(a) && a(r[0]), r = a = void 0
        }), "script"
    }), he.createHTMLDocument = ((Ut = J.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), fe.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (he.createHTMLDocument ? ((n = (t = J.implementation.createHTMLDocument("")).createElement("base")).href = J.location.href, t.head.appendChild(n)) : t = J), a = !i && [], (s = _e.exec(e)) ? [t.createElement(s[1])] : (s = _([e], t, a), a && a.length && fe(a).remove(), fe.merge([], s.childNodes)));
        var n, s, a
    }, fe.fn.load = function(e, t, i) {
        var n, s, a, r = this,
            o = e.indexOf(" ");
        return -1 < o && (n = Y(e.slice(o)), e = e.slice(0, o)), ce(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < r.length && fe.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, r.html(n ? fe("<div>").append(fe.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            r.each(function() {
                i.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), fe.expr.pseudos.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem
        }).length
    }, fe.offset = {
        setOffset: function(e, t, i) {
            var n, s, a, r, o, l, h = fe.css(e, "position"),
                c = fe(e),
                d = {};
            "static" === h && (e.style.position = "relative"), o = c.offset(), a = fe.css(e, "top"), l = fe.css(e, "left"), ("absolute" === h || "fixed" === h) && -1 < (a + l).indexOf("auto") ? (r = (n = c.position()).top, s = n.left) : (r = parseFloat(a) || 0, s = parseFloat(l) || 0), ce(t) && (t = t.call(e, i, fe.extend({}, o))), null != t.top && (d.top = t.top - o.top + r), null != t.left && (d.left = t.left - o.left + s), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, fe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                fe.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === fe.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === fe.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((s = fe(e).offset()).top += fe.css(e, "borderTopWidth", !0), s.left += fe.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - s.top - fe.css(n, "marginTop", !0),
                    left: t.left - s.left - fe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === fe.css(e, "position");) e = e.offsetParent;
                return e || Fe
            })
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        fe.fn[e] = function(n) {
            return Ee(this, function(e, n, s) {
                var a;
                return de(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === s ? a ? a[t] : e[n] : void(a ? a.scrollTo(i ? a.pageXOffset : s, i ? s : a.pageYOffset) : e[n] = s)
            }, e, n, arguments.length)
        }
    }), fe.each(["top", "left"], function(e, t) {
        fe.cssHooks[t] = A(he.pixelPosition, function(e, i) {
            if (i) return i = P(e, t), at.test(i) ? fe(e).position()[t] + "px" : i
        })
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            fe.fn[n] = function(s, a) {
                var r = arguments.length && (i || "boolean" != typeof s),
                    o = i || (!0 === s || !0 === a ? "margin" : "border");
                return Ee(this, function(t, i, s) {
                    var a;
                    return de(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === s ? fe.css(t, i, o) : fe.style(t, i, s, o)
                }, t, r ? s : void 0, r)
            }
        })
    }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, i) {
            return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), fe.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), fe.proxy = function(e, t) {
        var i, n, s;
        if ("string" == typeof t && (i = e[t], t = e, e = i), ce(e)) return n = ee.call(arguments, 2), (s = function() {
            return e.apply(t || this, n.concat(ee.call(arguments)))
        }).guid = e.guid = e.guid || fe.guid++, s
    }, fe.holdReady = function(e) {
        e ? fe.readyWait++ : fe.ready(!0)
    }, fe.isArray = Array.isArray, fe.parseJSON = JSON.parse, fe.nodeName = a, fe.isFunction = ce, fe.isWindow = de, fe.camelCase = p, fe.type = n, fe.now = Date.now, fe.isNumeric = function(e) {
        var t = fe.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var Kt = e.jQuery,
        Qt = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = Qt), t && e.jQuery === fe && (e.jQuery = Kt), fe
    }, t || (e.jQuery = e.$ = fe), fe
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(e) {
        for (var t = e.css("visibility");
            "inherit" === t;) e = e.parent(), t = e.css("visibility");
        return "hidden" !== t
    }

    function i(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function n() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", i, function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, a)
    }

    function a() {
        e.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function r(t, i) {
        e.extend(t, i);
        for (var n in i) null == i[n] && (t[n] = i[n]);
        return t
    }

    function o(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.ui = e.ui || {}, e.ui.version = "1.12.1";
    var l = 0,
        h = Array.prototype.slice;
    e.cleanData = function(t) {
            return function(i) {
                var n, s, a;
                for (a = 0; null != (s = i[a]); a++) try {
                    n = e._data(s, "events"), n && n.remove && e(s).triggerHandler("remove")
                } catch (e) {}
                t(i)
            }
        }(e.cleanData), e.widget = function(t, i, n) {
            var s, a, r, o = {},
                l = t.split(".")[0];
            t = t.split(".")[1];
            var h = l + "-" + t;
            return n || (n = i, i = e.Widget), e.isArray(n) && (n = e.extend.apply(null, [{}].concat(n))), e.expr[":"][h.toLowerCase()] = function(t) {
                return !!e.data(t, h)
            }, e[l] = e[l] || {}, s = e[l][t], a = e[l][t] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
            }, e.extend(a, s, {
                version: n.version,
                _proto: e.extend({}, n),
                _childConstructors: []
            }), r = new i, r.options = e.widget.extend({}, r.options), e.each(n, function(t, n) {
                return e.isFunction(n) ? void(o[t] = function() {
                    function e() {
                        return i.prototype[t].apply(this, arguments)
                    }

                    function s(e) {
                        return i.prototype[t].apply(this, e)
                    }
                    return function() {
                        var t, i = this._super,
                            a = this._superApply;
                        return this._super = e, this._superApply = s, t = n.apply(this, arguments), this._super = i, this._superApply = a, t
                    }
                }()) : void(o[t] = n)
            }), a.prototype = e.widget.extend(r, {
                widgetEventPrefix: s ? r.widgetEventPrefix || t : t
            }, o, {
                constructor: a,
                namespace: l,
                widgetName: t,
                widgetFullName: h
            }), s ? (e.each(s._childConstructors, function(t, i) {
                var n = i.prototype;
                e.widget(n.namespace + "." + n.widgetName, a, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(a), e.widget.bridge(t, a), a
        }, e.widget.extend = function(t) {
            for (var i, n, s = h.call(arguments, 1), a = 0, r = s.length; r > a; a++)
                for (i in s[a]) n = s[a][i], s[a].hasOwnProperty(i) && void 0 !== n && (t[i] = e.isPlainObject(n) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : n);
            return t
        }, e.widget.bridge = function(t, i) {
            var n = i.prototype.widgetFullName || t;
            e.fn[t] = function(s) {
                var a = "string" == typeof s,
                    r = h.call(arguments, 1),
                    o = this;
                return a ? this.length || "instance" !== s ? this.each(function() {
                    var i, a = e.data(this, n);
                    return "instance" === s ? (o = a, !1) : a ? e.isFunction(a[s]) && "_" !== s.charAt(0) ? (i = a[s].apply(a, r), i !== a && void 0 !== i ? (o = i && i.jquery ? o.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + s + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'")
                }) : o = void 0 : (r.length && (s = e.widget.extend.apply(null, [s].concat(r))), this.each(function() {
                    var t = e.data(this, n);
                    t ? (t.option(s || {}), t._init && t._init()) : e.data(this, n, new i(s, this))
                })), o
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(t, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                var t = this;
                this._destroy(), e.each(this.classesElementLookup, function(e, i) {
                    t._removeClass(i, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, i) {
                var n, s, a, r = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (r = {}, n = t.split("."), t = n.shift(), n.length) {
                        for (s = r[t] = e.widget.extend({}, this.options[t]), a = 0; n.length - 1 > a; a++) s[n[a]] = s[n[a]] || {}, s = s[n[a]];
                        if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                        s[t] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        r[t] = i
                    }
                return this._setOptions(r), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function(t) {
                var i, n, s;
                for (i in t) s = this.classesElementLookup[i], t[i] !== this.options.classes[i] && s && s.length && (n = e(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function(e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(t) {
                function i(i, a) {
                    var r, o;
                    for (o = 0; i.length > o; o++) r = s.classesElementLookup[i[o]] || e(), r = e(t.add ? e.unique(r.get().concat(t.element.get())) : r.not(t.element).get()), s.classesElementLookup[i[o]] = r, n.push(i[o]), a && t.classes[i[o]] && n.push(t.classes[i[o]])
                }
                var n = [],
                    s = this;
                return t = e.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {
                    remove: "_untrackClassesElement"
                }), t.keys && i(t.keys.match(/\S+/g) || [], !0), t.extra && i(t.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function(t) {
                var i = this;
                e.each(i.classesElementLookup, function(n, s) {
                    -1 !== e.inArray(t.target, s) && (i.classesElementLookup[n] = e(s.not(t.target).get()))
                })
            },
            _removeClass: function(e, t, i) {
                return this._toggleClass(e, t, i, !1)
            },
            _addClass: function(e, t, i) {
                return this._toggleClass(e, t, i, !0)
            },
            _toggleClass: function(e, t, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof e || null === e,
                    a = {
                        extra: s ? t : i,
                        keys: s ? e : t,
                        element: s ? this.element : e,
                        add: n
                    };
                return a.element.toggleClass(this._classes(a), n), this
            },
            _on: function(t, i, n) {
                var s, a = this;
                "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), e.each(n, function(n, r) {
                    function o() {
                        return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : void 0
                    }
                    "string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + a.eventNamespace,
                        c = l[2];
                    c ? s.on(h, c, o) : i.on(h, o)
                })
            },
            _off: function(t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(i).off(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                function i() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, n) {
                var s, a, r = this.options[t];
                if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                    for (s in a) s in i || (i[s] = a[s]);
                return this.element.trigger(i, n), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            e.Widget.prototype["_" + t] = function(n, s, a) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var r, o = s ? s === !0 || "number" == typeof s ? i : s.effect || i : t;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), r = !e.isEmptyObject(s), s.complete = a, s.delay && n.delay(s.delay), r && e.effects && e.effects.effect[o] ? n[t](s) : o !== t && n[o] ? n[o](s.duration, s.easing, a) : n.queue(function(i) {
                    e(this)[t](), a && a.call(n[0]), i()
                })
            }
        }), e.widget,
        function() {
            function t(e, t, i) {
                return [parseFloat(e[0]) * (d.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (d.test(e[1]) ? i / 100 : 1)]
            }

            function i(t, i) {
                return parseInt(e.css(t, i), 10) || 0
            }

            function n(t) {
                var i = t[0];
                return 9 === i.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            var s, a = Math.max,
                r = Math.abs,
                o = /left|center|right/,
                l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                d = /%$/,
                u = e.fn.position;
            e.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var t, i, n = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        a = n.children()[0];
                    return e("body").append(n), t = a.offsetWidth, n.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = n[0].clientWidth), n.remove(), s = t - i
                },
                getScrollInfo: function(t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                        a = "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight;
                    return {
                        width: a ? e.position.scrollbarWidth() : 0,
                        height: s ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var i = e(t || window),
                        n = e.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType,
                        a = !n && !s;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: a ? e(t).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            }, e.fn.position = function(s) {
                if (!s || !s.of) return u.apply(this, arguments);
                s = e.extend({}, s);
                var d, p, f, m, g, v, b = e(s.of),
                    y = e.position.getWithinInfo(s.within),
                    _ = e.position.getScrollInfo(y),
                    w = (s.collision || "flip").split(" "),
                    x = {};
                return v = n(b), b[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, m = v.offset, g = e.extend({}, m), e.each(["my", "at"], function() {
                    var e, t, i = (s[this] || "").split(" ");
                    1 === i.length && (i = o.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = o.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", e = h.exec(i[0]), t = h.exec(i[1]), x[this] = [e ? e[0] : 0, t ? t[0] : 0], s[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? g.left += p : "center" === s.at[0] && (g.left += p / 2), "bottom" === s.at[1] ? g.top += f : "center" === s.at[1] && (g.top += f / 2), d = t(x.at, p, f), g.left += d[0], g.top += d[1], this.each(function() {
                    var n, o, l = e(this),
                        h = l.outerWidth(),
                        c = l.outerHeight(),
                        u = i(this, "marginLeft"),
                        v = i(this, "marginTop"),
                        C = h + u + i(this, "marginRight") + _.width,
                        k = c + v + i(this, "marginBottom") + _.height,
                        T = e.extend({}, g),
                        S = t(x.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? T.left -= h : "center" === s.my[0] && (T.left -= h / 2), "bottom" === s.my[1] ? T.top -= c : "center" === s.my[1] && (T.top -= c / 2), T.left += S[0], T.top += S[1], n = {
                        marginLeft: u,
                        marginTop: v
                    }, e.each(["left", "top"], function(t, i) {
                        e.ui.position[w[t]] && e.ui.position[w[t]][i](T, {
                            targetWidth: p,
                            targetHeight: f,
                            elemWidth: h,
                            elemHeight: c,
                            collisionPosition: n,
                            collisionWidth: C,
                            collisionHeight: k,
                            offset: [d[0] + S[0], d[1] + S[1]],
                            my: s.my,
                            at: s.at,
                            within: y,
                            elem: l
                        })
                    }), s.using && (o = function(e) {
                        var t = m.left - T.left,
                            i = t + p - h,
                            n = m.top - T.top,
                            o = n + f - c,
                            d = {
                                target: {
                                    element: b,
                                    left: m.left,
                                    top: m.top,
                                    width: p,
                                    height: f
                                },
                                element: {
                                    element: l,
                                    left: T.left,
                                    top: T.top,
                                    width: h,
                                    height: c
                                },
                                horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                                vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle"
                            };
                        h > p && p > r(t + i) && (d.horizontal = "center"), c > f && f > r(n + o) && (d.vertical = "middle"), d.important = a(r(t), r(i)) > a(r(n), r(o)) ? "horizontal" : "vertical", s.using.call(this, e, d)
                    }), l.offset(e.extend(T, {
                        using: o
                    }))
                })
            }, e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var i, n = t.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            r = n.width,
                            o = e.left - t.collisionPosition.marginLeft,
                            l = s - o,
                            h = o + t.collisionWidth - r - s;
                        t.collisionWidth > r ? l > 0 && 0 >= h ? (i = e.left + l + t.collisionWidth - r - s, e.left += l - i) : e.left = h > 0 && 0 >= l ? s : l > h ? s + r - t.collisionWidth : s : l > 0 ? e.left += l : h > 0 ? e.left -= h : e.left = a(e.left - o, e.left)
                    },
                    top: function(e, t) {
                        var i, n = t.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            r = t.within.height,
                            o = e.top - t.collisionPosition.marginTop,
                            l = s - o,
                            h = o + t.collisionHeight - r - s;
                        t.collisionHeight > r ? l > 0 && 0 >= h ? (i = e.top + l + t.collisionHeight - r - s, e.top += l - i) : e.top = h > 0 && 0 >= l ? s : l > h ? s + r - t.collisionHeight : s : l > 0 ? e.top += l : h > 0 ? e.top -= h : e.top = a(e.top - o, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var i, n, s = t.within,
                            a = s.offset.left + s.scrollLeft,
                            o = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            h = e.left - t.collisionPosition.marginLeft,
                            c = h - l,
                            d = h + t.collisionWidth - o - l,
                            u = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            f = -2 * t.offset[0];
                        0 > c ? (i = e.left + u + p + f + t.collisionWidth - o - a, (0 > i || r(c) > i) && (e.left += u + p + f)) : d > 0 && (n = e.left - t.collisionPosition.marginLeft + u + p + f - l, (n > 0 || d > r(n)) && (e.left += u + p + f))
                    },
                    top: function(e, t) {
                        var i, n, s = t.within,
                            a = s.offset.top + s.scrollTop,
                            o = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            h = e.top - t.collisionPosition.marginTop,
                            c = h - l,
                            d = h + t.collisionHeight - o - l,
                            u = "top" === t.my[1],
                            p = u ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            m = -2 * t.offset[1];
                        0 > c ? (n = e.top + p + f + m + t.collisionHeight - o - a, (0 > n || r(c) > n) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - l, (i > 0 || d > r(i)) && (e.top += p + f + m))
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(), e.ui.position, e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(i) {
                    return !!e.data(i, t)
                }
            }) : function(t, i, n) {
                return !!e.data(t, n[3])
            }
        }), e.fn.extend({
            disableSelection: function() {
                var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.on(e + ".ui-disableSelection", function(e) {
                        e.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        });
    var c = "ui-effects-",
        d = "ui-effects-style",
        u = "ui-effects-animated",
        p = e;
    e.effects = {
            effect: {}
        },
        function(e, t) {
            function i(e, t, i) {
                var n = d[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : e > n.max ? n.max : e)
            }

            function n(i) {
                var n = h(),
                    s = n._rgba = [];
                return i = i.toLowerCase(), f(l, function(e, a) {
                    var r, o = a.re.exec(i),
                        l = o && a.parse(o),
                        h = a.space || "rgba";
                    return l ? (r = n[h](l), n[c[h].cache] = r[c[h].cache], s = n._rgba = r._rgba, !1) : t
                }), s.length ? ("0,0,0,0" === s.join() && e.extend(s, a.transparent), n) : a[i]
            }

            function s(e, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            var a, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                o = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                h = e.Color = function(t, i, n, s) {
                    return new e.Color.fn.parse(t, i, n, s)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                u = h.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), h.fn = e.extend(h.prototype, {
                parse: function(s, r, o, l) {
                    if (s === t) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = e(s).css(r), r = t);
                    var d = this,
                        u = e.type(s),
                        p = this._rgba = [];
                    return r !== t && (s = [s, r, o, l], u = "array"), "string" === u ? this.parse(n(s) || a._default) : "array" === u ? (f(c.rgba.props, function(e, t) {
                        p[t.idx] = i(s[t.idx], t)
                    }), this) : "object" === u ? (s instanceof h ? f(c, function(e, t) {
                        s[t.cache] && (d[t.cache] = s[t.cache].slice())
                    }) : f(c, function(t, n) {
                        var a = n.cache;
                        f(n.props, function(e, t) {
                            if (!d[a] && n.to) {
                                if ("alpha" === e || null == s[e]) return;
                                d[a] = n.to(d._rgba)
                            }
                            d[a][t.idx] = i(s[e], t, !0)
                        }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, n.from && (d._rgba = n.from(d[a])))
                    }), this) : t
                },
                is: function(e) {
                    var i = h(e),
                        n = !0,
                        s = this;
                    return f(c, function(e, a) {
                        var r, o = i[a.cache];
                        return o && (r = s[a.cache] || a.to && a.to(s._rgba) || [], f(a.props, function(e, i) {
                            return null != o[i.idx] ? n = o[i.idx] === r[i.idx] : t
                        })), n
                    }), n
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return f(c, function(i, n) {
                        t[n.cache] && e.push(i)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var n = h(e),
                        s = n._space(),
                        a = c[s],
                        r = 0 === this.alpha() ? h("transparent") : this,
                        o = r[a.cache] || a.to(r._rgba),
                        l = o.slice();
                    return n = n[a.cache], f(a.props, function(e, s) {
                        var a = s.idx,
                            r = o[a],
                            h = n[a],
                            c = d[s.type] || {};
                        null !== h && (null === r ? l[a] = h : (c.mod && (h - r > c.mod / 2 ? r += c.mod : r - h > c.mod / 2 && (r -= c.mod)), l[a] = i((h - r) * t + r, s)))
                    }), this[s](l)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = h(t)._rgba;
                    return h(e.map(i, function(e, t) {
                        return (1 - n) * s[t] + n * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return t && i.push(~~(255 * n)), "#" + e.map(i, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, c.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, n = e[0] / 255,
                    s = e[1] / 255,
                    a = e[2] / 255,
                    r = e[3],
                    o = Math.max(n, s, a),
                    l = Math.min(n, s, a),
                    h = o - l,
                    c = o + l,
                    d = .5 * c;
                return t = l === o ? 0 : n === o ? 60 * (s - a) / h + 360 : s === o ? 60 * (a - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= d ? h / c : h / (2 - c), [Math.round(t) % 360, i, d, null == r ? 1 : r]
            }, c.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    n = e[2],
                    a = e[3],
                    r = .5 >= n ? n * (1 + i) : n + i - n * i,
                    o = 2 * n - r;
                return [Math.round(255 * s(o, r, t + 1 / 3)), Math.round(255 * s(o, r, t)), Math.round(255 * s(o, r, t - 1 / 3)), a]
            }, f(c, function(n, s) {
                var a = s.props,
                    r = s.cache,
                    l = s.to,
                    c = s.from;
                h.fn[n] = function(n) {
                    if (l && !this[r] && (this[r] = l(this._rgba)), n === t) return this[r].slice();
                    var s, o = e.type(n),
                        d = "array" === o || "object" === o ? n : arguments,
                        u = this[r].slice();
                    return f(a, function(e, t) {
                        var n = d["object" === o ? e : t.idx];
                        null == n && (n = u[t.idx]), u[t.idx] = i(n, t)
                    }), c ? (s = h(c(u)), s[r] = u, s) : h(u)
                }, f(a, function(t, i) {
                    h.fn[t] || (h.fn[t] = function(s) {
                        var a, r = e.type(s),
                            l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : n,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === r ? c : ("function" === r && (s = s.call(this, c), r = e.type(s)), null == s && i.empty ? this : ("string" === r && (a = o.exec(s), a && (s = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                    })
                })
            }), h.hook = function(t) {
                var i = t.split(" ");
                f(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, s) {
                            var a, r, o = "";
                            if ("transparent" !== s && ("string" !== e.type(s) || (a = n(s)))) {
                                if (s = h(a || s), !u.rgba && 1 !== s._rgba[3]) {
                                    for (r = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === o || "transparent" === o) && r && r.style;) try {
                                        o = e.css(r, "backgroundColor"), r = r.parentNode
                                    } catch (e) {}
                                    s = s.blend(o && "transparent" !== o ? o : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try {
                                t.style[i] = s
                            } catch (e) {}
                        }
                    }, e.fx.step[i] = function(t) {
                        t.colorInit || (t.start = h(t.elem, i), t.end = h(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, h.hook(r), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                        t["border" + n + "Color"] = e
                    }), t
                }
            }, a = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(p),
        function() {
            function t(t) {
                var i, n, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    a = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (a[e.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (a[i] = s[i]);
                return a
            }

            function i(t, i) {
                var n, a, r = {};
                for (n in i) a = i[n], t[n] !== a && (s[n] || (e.fx.step[n] || !isNaN(parseFloat(a))) && (r[n] = a));
                return r
            }
            var n = ["add", "remove", "toggle"],
                s = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (p.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(s, a, r, o) {
                var l = e.speed(a, r, o);
                return this.queue(function() {
                    var a, r = e(this),
                        o = r.attr("class") || "",
                        h = l.children ? r.find("*").addBack() : r;
                    h = h.map(function() {
                        var i = e(this);
                        return {
                            el: i,
                            start: t(this)
                        }
                    }), a = function() {
                        e.each(n, function(e, t) {
                            s[t] && r[t + "Class"](s[t])
                        })
                    }, a(), h = h.map(function() {
                        return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                    }), r.attr("class", o), h = h.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            n = e.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, n), i.promise()
                    }), e.when.apply(e, h.get()).done(function() {
                        a(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), l.complete.call(r[0])
                    })
                })
            }, e.fn.extend({
                addClass: function(t) {
                    return function(i, n, s, a) {
                        return n ? e.effects.animateClass.call(this, {
                            add: i
                        }, n, s, a) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function(t) {
                    return function(i, n, s, a) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: i
                        }, n, s, a) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(t) {
                    return function(i, n, s, a, r) {
                        return "boolean" == typeof n || void 0 === n ? s ? e.effects.animateClass.call(this, n ? {
                            add: i
                        } : {
                            remove: i
                        }, s, a, r) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: i
                        }, n, s, a)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, i, n, s, a) {
                    return e.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, n, s, a)
                }
            })
        }(),
        function() {
            function t(t, i, n, s) {
                return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, null == i && (i = {}), e.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = n, n = i, i = {}), e.isFunction(n) && (s = n, n = null), i && e.extend(t, i), n = n || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, t.complete = s || i.complete, t
            }

            function i(t) {
                return !(t && "number" != typeof t && !e.fx.speeds[t]) || ("string" == typeof t && !e.effects.effect[t] || (!!e.isFunction(t) || "object" == typeof t && !t.effect))
            }

            function n(e, t) {
                var i = t.outerWidth(),
                    n = t.outerHeight(),
                    s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    a = s.exec(e) || ["", 0, i, n, 0];
                return {
                    top: parseFloat(a[1]) || 0,
                    right: "auto" === a[2] ? i : parseFloat(a[2]),
                    bottom: "auto" === a[3] ? n : parseFloat(a[3]),
                    left: parseFloat(a[4]) || 0
                }
            }
            e.expr && e.expr.filters && e.expr.filters.animated && (e.expr.filters.animated = function(t) {
                return function(i) {
                    return !!e(i).data(u) || t(i)
                }
            }(e.expr.filters.animated)), e.uiBackCompat !== !1 && e.extend(e.effects, {
                save: function(e, t) {
                    for (var i = 0, n = t.length; n > i; i++) null !== t[i] && e.data(c + t[i], e[0].style[t[i]])
                },
                restore: function(e, t) {
                    for (var i, n = 0, s = t.length; s > n; n++) null !== t[n] && (i = e.data(c + t[n]), e.css(t[n], i))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        n = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: t.width(),
                            height: t.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (e) {
                        a = document.body
                    }
                    return t.wrap(n), (t[0] === a || e.contains(t[0], a)) && e(a).trigger("focus"), n = t.parent(), "static" === t.css("position") ? (n.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, n) {
                        i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(s), n.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).trigger("focus")), t
                }
            }), e.extend(e.effects, {
                version: "1.12.1",
                define: function(t, i, n) {
                    return n || (n = i, i = "effect"), e.effects.effect[t] = n, e.effects.effect[t].mode = i, n
                },
                scaledDimensions: function(e, t, i) {
                    if (0 === t) return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                    var n = "horizontal" !== i ? (t || 100) / 100 : 1,
                        s = "vertical" !== i ? (t || 100) / 100 : 1;
                    return {
                        height: e.height() * s,
                        width: e.width() * n,
                        outerHeight: e.outerHeight() * s,
                        outerWidth: e.outerWidth() * n
                    }
                },
                clipToBox: function(e) {
                    return {
                        width: e.clip.right - e.clip.left,
                        height: e.clip.bottom - e.clip.top,
                        left: e.clip.left,
                        top: e.clip.top
                    }
                },
                unshift: function(e, t, i) {
                    var n = e.queue();
                    t > 1 && n.splice.apply(n, [1, 0].concat(n.splice(t, i))), e.dequeue()
                },
                saveStyle: function(e) {
                    e.data(d, e[0].style.cssText)
                },
                restoreStyle: function(e) {
                    e[0].style.cssText = e.data(d) || "", e.removeData(d)
                },
                mode: function(e, t) {
                    var i = e.is(":hidden");
                    return "toggle" === t && (t = i ? "show" : "hide"), (i ? "hide" === t : "show" === t) && (t = "none"), t
                },
                getBaseline: function(e, t) {
                    var i, n;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = e[1] / t.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createPlaceholder: function(t) {
                    var i, n = t.css("position"),
                        s = t.position();
                    return t.css({
                        marginTop: t.css("marginTop"),
                        marginBottom: t.css("marginBottom"),
                        marginLeft: t.css("marginLeft"),
                        marginRight: t.css("marginRight")
                    }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = e("<" + t[0].nodeName + ">").insertAfter(t).css({
                        display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: t.css("marginTop"),
                        marginBottom: t.css("marginBottom"),
                        marginLeft: t.css("marginLeft"),
                        marginRight: t.css("marginRight"),
                        "float": t.css("float")
                    }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(c + "placeholder", i)), t.css({
                        position: n,
                        left: s.left,
                        top: s.top
                    }), i
                },
                removePlaceholder: function(e) {
                    var t = c + "placeholder",
                        i = e.data(t);
                    i && (i.remove(), e.removeData(t))
                },
                cleanUp: function(t) {
                    e.effects.restoreStyle(t), e.effects.removePlaceholder(t)
                },
                setTransition: function(t, i, n, s) {
                    return s = s || {}, e.each(i, function(e, i) {
                        var a = t.cssUnit(i);
                        a[0] > 0 && (s[i] = a[0] * n + a[1])
                    }), s
                }
            }), e.fn.extend({
                effect: function() {
                    function i(t) {
                        function i() {
                            o.removeData(u), e.effects.cleanUp(o), "hide" === n.mode && o.hide(), r()
                        }

                        function r() {
                            e.isFunction(l) && l.call(o[0]), e.isFunction(t) && t()
                        }
                        var o = e(this);
                        n.mode = c.shift(), e.uiBackCompat === !1 || a ? "none" === n.mode ? (o[h](), r()) : s.call(o[0], n, i) : (o.is(":hidden") ? "hide" === h : "show" === h) ? (o[h](), r()) : s.call(o[0], n, r)
                    }
                    var n = t.apply(this, arguments),
                        s = e.effects.effect[n.effect],
                        a = s.mode,
                        r = n.queue,
                        o = r || "fx",
                        l = n.complete,
                        h = n.mode,
                        c = [],
                        d = function(t) {
                            var i = e(this),
                                n = e.effects.mode(i, h) || a;
                            i.data(u, !0), c.push(n), a && ("show" === n || n === a && "hide" === n) && i.show(), a && "none" === n || e.effects.saveStyle(i), e.isFunction(t) && t()
                        };
                    return e.fx.off || !s ? h ? this[h](n.duration, l) : this.each(function() {
                        l && l.call(this)
                    }) : r === !1 ? this.each(d).each(i) : this.queue(o, d).queue(o, i)
                },
                show: function(e) {
                    return function(n) {
                        if (i(n)) return e.apply(this, arguments);
                        var s = t.apply(this, arguments);
                        return s.mode = "show", this.effect.call(this, s)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(n) {
                        if (i(n)) return e.apply(this, arguments);
                        var s = t.apply(this, arguments);
                        return s.mode = "hide", this.effect.call(this, s)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(n) {
                        if (i(n) || "boolean" == typeof n) return e.apply(this, arguments);
                        var s = t.apply(this, arguments);
                        return s.mode = "toggle", this.effect.call(this, s)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        n = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        i.indexOf(t) > 0 && (n = [parseFloat(i), t])
                    }), n
                },
                cssClip: function(e) {
                    return e ? this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)") : n(this.css("clip"), this)
                },
                transfer: function(t, i) {
                    var n = e(this),
                        s = e(t.to),
                        a = "fixed" === s.css("position"),
                        r = e("body"),
                        o = a ? r.scrollTop() : 0,
                        l = a ? r.scrollLeft() : 0,
                        h = s.offset(),
                        c = {
                            top: h.top - o,
                            left: h.left - l,
                            height: s.innerHeight(),
                            width: s.innerWidth()
                        },
                        d = n.offset(),
                        u = e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                            top: d.top - o,
                            left: d.left - l,
                            height: n.innerHeight(),
                            width: n.innerWidth(),
                            position: a ? "fixed" : "absolute"
                        }).animate(c, t.duration, t.easing, function() {
                            u.remove(), e.isFunction(i) && i()
                        })
                }
            }), e.fx.step.clip = function(t) {
                t.clipInit || (t.start = e(t.elem).cssClip(), "string" == typeof t.end && (t.end = n(t.end, t.elem)), t.clipInit = !0), e(t.elem).cssClip({
                    top: t.pos * (t.end.top - t.start.top) + t.start.top,
                    right: t.pos * (t.end.right - t.start.right) + t.start.right,
                    bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                    left: t.pos * (t.end.left - t.start.left) + t.start.left
                })
            }
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                t[i] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, i) {
                e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) {
                    return 1 - i(1 - e)
                }, e.easing["easeInOut" + t] = function(e) {
                    return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                }
            })
        }();
    var f = e.effects;
    e.effects.define("blind", "hide", function(t, i) {
        var n = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            },
            s = e(this),
            a = t.direction || "up",
            r = s.cssClip(),
            o = {
                clip: e.extend({}, r)
            },
            l = e.effects.createPlaceholder(s);
        o.clip[n[a][0]] = o.clip[n[a][1]], "show" === t.mode && (s.cssClip(o.clip), l && l.css(e.effects.clipToBox(o)), o.clip = r), l && l.animate(e.effects.clipToBox(o), t.duration, t.easing), s.animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }), e.effects.define("bounce", function(t, i) {
        var n, s, a, r = e(this),
            o = t.mode,
            l = "hide" === o,
            h = "show" === o,
            c = t.direction || "up",
            d = t.distance,
            u = t.times || 5,
            p = 2 * u + (h || l ? 1 : 0),
            f = t.duration / p,
            m = t.easing,
            g = "up" === c || "down" === c ? "top" : "left",
            v = "up" === c || "left" === c,
            b = 0,
            y = r.queue().length;
        for (e.effects.createPlaceholder(r), a = r.css(g), d || (d = r["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && (s = {
                opacity: 1
            }, s[g] = a, r.css("opacity", 0).css(g, v ? 2 * -d : 2 * d).animate(s, f, m)), l && (d /= Math.pow(2, u - 1)), s = {}, s[g] = a; u > b; b++) n = {}, n[g] = (v ? "-=" : "+=") + d, r.animate(n, f, m).animate(s, f, m), d = l ? 2 * d : d / 2;
        l && (n = {
            opacity: 0
        }, n[g] = (v ? "-=" : "+=") + d, r.animate(n, f, m)), r.queue(i), e.effects.unshift(r, y, p + 1)
    }), e.effects.define("clip", "hide", function(t, i) {
        var n, s = {},
            a = e(this),
            r = t.direction || "vertical",
            o = "both" === r,
            l = o || "horizontal" === r,
            h = o || "vertical" === r;
        n = a.cssClip(), s.clip = {
            top: h ? (n.bottom - n.top) / 2 : n.top,
            right: l ? (n.right - n.left) / 2 : n.right,
            bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
            left: l ? (n.right - n.left) / 2 : n.left
        }, e.effects.createPlaceholder(a), "show" === t.mode && (a.cssClip(s.clip), s.clip = n), a.animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }), e.effects.define("drop", "hide", function(t, i) {
        var n, s = e(this),
            a = t.mode,
            r = "show" === a,
            o = t.direction || "left",
            l = "up" === o || "down" === o ? "top" : "left",
            h = "up" === o || "left" === o ? "-=" : "+=",
            c = "+=" === h ? "-=" : "+=",
            d = {
                opacity: 0
            };
        e.effects.createPlaceholder(s), n = t.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, d[l] = h + n, r && (s.css(d), d[l] = c + n, d.opacity = 1), s.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }), e.effects.define("explode", "hide", function(t, i) {
        function n() {
            y.push(this), y.length === d * u && s()
        }

        function s() {
            p.css({
                visibility: "visible"
            }), e(y).remove(), i()
        }
        var a, r, o, l, h, c, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            u = d,
            p = e(this),
            f = t.mode,
            m = "show" === f,
            g = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / u),
            b = Math.ceil(p.outerHeight() / d),
            y = [];
        for (a = 0; d > a; a++)
            for (l = g.top + a * b, c = a - (d - 1) / 2, r = 0; u > r; r++) o = g.left + r * v, h = r - (u - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -r * v,
                top: -a * b
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: b,
                left: o + (m ? h * v : 0),
                top: l + (m ? c * b : 0),
                opacity: m ? 0 : 1
            }).animate({
                left: o + (m ? 0 : h * v),
                top: l + (m ? 0 : c * b),
                opacity: m ? 1 : 0
            }, t.duration || 500, t.easing, n)
    }), e.effects.define("fade", "toggle", function(t, i) {
        var n = "show" === t.mode;
        e(this).css("opacity", n ? 0 : 1).animate({
            opacity: n ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }), e.effects.define("fold", "hide", function(t, i) {
        var n = e(this),
            s = t.mode,
            a = "show" === s,
            r = "hide" === s,
            o = t.size || 15,
            l = /([0-9]+)%/.exec(o),
            h = !!t.horizFirst,
            c = h ? ["right", "bottom"] : ["bottom", "right"],
            d = t.duration / 2,
            u = e.effects.createPlaceholder(n),
            p = n.cssClip(),
            f = {
                clip: e.extend({}, p)
            },
            m = {
                clip: e.extend({}, p)
            },
            g = [p[c[0]], p[c[1]]],
            v = n.queue().length;
        l && (o = parseInt(l[1], 10) / 100 * g[r ? 0 : 1]), f.clip[c[0]] = o, m.clip[c[0]] = o, m.clip[c[1]] = 0, a && (n.cssClip(m.clip), u && u.css(e.effects.clipToBox(m)), m.clip = p), n.queue(function(i) {
            u && u.animate(e.effects.clipToBox(f), d, t.easing).animate(e.effects.clipToBox(m), d, t.easing), i()
        }).animate(f, d, t.easing).animate(m, d, t.easing).queue(i), e.effects.unshift(n, v, 4)
    }), e.effects.define("highlight", "show", function(t, i) {
        var n = e(this),
            s = {
                backgroundColor: n.css("backgroundColor")
            };
        "hide" === t.mode && (s.opacity = 0), e.effects.saveStyle(n), n.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }), e.effects.define("size", function(t, i) {
        var n, s, a, r = e(this),
            o = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            c = t.mode,
            d = "effect" !== c,
            u = t.scale || "both",
            p = t.origin || ["middle", "center"],
            f = r.css("position"),
            m = r.position(),
            g = e.effects.scaledDimensions(r),
            v = t.from || g,
            b = t.to || e.effects.scaledDimensions(r, 0);
        e.effects.createPlaceholder(r), "show" === c && (a = v, v = b, b = a), s = {
            from: {
                y: v.height / g.height,
                x: v.width / g.width
            },
            to: {
                y: b.height / g.height,
                x: b.width / g.width
            }
        }, ("box" === u || "both" === u) && (s.from.y !== s.to.y && (v = e.effects.setTransition(r, l, s.from.y, v), b = e.effects.setTransition(r, l, s.to.y, b)), s.from.x !== s.to.x && (v = e.effects.setTransition(r, h, s.from.x, v), b = e.effects.setTransition(r, h, s.to.x, b))), ("content" === u || "both" === u) && s.from.y !== s.to.y && (v = e.effects.setTransition(r, o, s.from.y, v), b = e.effects.setTransition(r, o, s.to.y, b)), p && (n = e.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, b.top = (g.outerHeight - b.outerHeight) * n.y + m.top, b.left = (g.outerWidth - b.outerWidth) * n.x + m.left), r.css(v), ("content" === u || "both" === u) && (l = l.concat(["marginTop", "marginBottom"]).concat(o), h = h.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function() {
            var i = e(this),
                n = e.effects.scaledDimensions(i),
                a = {
                    height: n.height * s.from.y,
                    width: n.width * s.from.x,
                    outerHeight: n.outerHeight * s.from.y,
                    outerWidth: n.outerWidth * s.from.x
                },
                r = {
                    height: n.height * s.to.y,
                    width: n.width * s.to.x,
                    outerHeight: n.height * s.to.y,
                    outerWidth: n.width * s.to.x
                };
            s.from.y !== s.to.y && (a = e.effects.setTransition(i, l, s.from.y, a), r = e.effects.setTransition(i, l, s.to.y, r)), s.from.x !== s.to.x && (a = e.effects.setTransition(i, h, s.from.x, a), r = e.effects.setTransition(i, h, s.to.x, r)), d && e.effects.saveStyle(i), i.css(a), i.animate(r, t.duration, t.easing, function() {
                d && e.effects.restoreStyle(i)
            })
        })), r.animate(b, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                var t = r.offset();
                0 === b.opacity && r.css("opacity", v.opacity), d || (r.css("position", "static" === f ? "relative" : f).offset(t), e.effects.saveStyle(r)), i()
            }
        })
    }), e.effects.define("scale", function(t, i) {
        var n = e(this),
            s = t.mode,
            a = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
            r = e.extend(!0, {
                from: e.effects.scaledDimensions(n),
                to: e.effects.scaledDimensions(n, a, t.direction || "both"),
                origin: t.origin || ["middle", "center"]
            }, t);
        t.fade && (r.from.opacity = 1, r.to.opacity = 0), e.effects.effect.size.call(this, r, i)
    }), e.effects.define("puff", "hide", function(t, i) {
        var n = e.extend(!0, {}, t, {
            fade: !0,
            percent: parseInt(t.percent, 10) || 150
        });
        e.effects.effect.scale.call(this, n, i)
    }), e.effects.define("pulsate", "show", function(t, i) {
        var n = e(this),
            s = t.mode,
            a = "show" === s,
            r = "hide" === s,
            o = a || r,
            l = 2 * (t.times || 5) + (o ? 1 : 0),
            h = t.duration / l,
            c = 0,
            d = 1,
            u = n.queue().length;
        for ((a || !n.is(":visible")) && (n.css("opacity", 0).show(), c = 1); l > d; d++) n.animate({
            opacity: c
        }, h, t.easing), c = 1 - c;
        n.animate({
            opacity: c
        }, h, t.easing), n.queue(i), e.effects.unshift(n, u, l + 1)
    }), e.effects.define("shake", function(t, i) {
        var n = 1,
            s = e(this),
            a = t.direction || "left",
            r = t.distance || 20,
            o = t.times || 3,
            l = 2 * o + 1,
            h = Math.round(t.duration / l),
            c = "up" === a || "down" === a ? "top" : "left",
            d = "up" === a || "left" === a,
            u = {},
            p = {},
            f = {},
            m = s.queue().length;
        for (e.effects.createPlaceholder(s), u[c] = (d ? "-=" : "+=") + r, p[c] = (d ? "+=" : "-=") + 2 * r, f[c] = (d ? "-=" : "+=") + 2 * r, s.animate(u, h, t.easing); o > n; n++) s.animate(p, h, t.easing).animate(f, h, t.easing);
        s.animate(p, h, t.easing).animate(u, h / 2, t.easing).queue(i), e.effects.unshift(s, m, l + 1)
    }), e.effects.define("slide", "show", function(t, i) {
        var n, s, a = e(this),
            r = {
                up: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                right: ["left", "right"]
            },
            o = t.mode,
            l = t.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            d = t.distance || a["top" === h ? "outerHeight" : "outerWidth"](!0),
            u = {};
        e.effects.createPlaceholder(a), n = a.cssClip(), s = a.position()[h], u[h] = (c ? -1 : 1) * d + s, u.clip = a.cssClip(), u.clip[r[l][1]] = u.clip[r[l][0]], "show" === o && (a.cssClip(u.clip),
            a.css(h, u[h]), u.clip = n, u[h] = s), a.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    var f;
    e.uiBackCompat !== !1 && (f = e.effects.define("transfer", function(t, i) {
        e(this).transfer(t, i)
    })), e.ui.focusable = function(i, n) {
        var s, a, r, o, l, h = i.nodeName.toLowerCase();
        return "area" === h ? (s = i.parentNode, a = s.name, !(!i.href || !a || "map" !== s.nodeName.toLowerCase()) && (r = e("img[usemap='#" + a + "']"), r.length > 0 && r.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(h) ? (o = !i.disabled, o && (l = e(i).closest("fieldset")[0], l && (o = !l.disabled))) : o = "a" === h ? i.href || n : n, o && e(i).is(":visible") && t(e(i)))
    }, e.extend(e.expr[":"], {
        focusable: function(t) {
            return e.ui.focusable(t, null != e.attr(t, "tabindex"))
        }
    }), e.ui.focusable, e.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : e(this[0].form)
    }, e.ui.formResetMixin = {
        _formResetHandler: function() {
            var t = e(this);
            setTimeout(function() {
                var i = t.data("ui-form-reset-instances");
                e.each(i, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var e = this.form.data("ui-form-reset-instances") || [];
                e.length || this.form.on("reset.ui-form-reset", this._formResetHandler), e.push(this), this.form.data("ui-form-reset-instances", e)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var t = this.form.data("ui-form-reset-instances");
                t.splice(e.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, "1.7" === e.fn.jquery.substring(0, 3) && (e.each(["Width", "Height"], function(t, i) {
        function n(t, i, n, a) {
            return e.each(s, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? r["inner" + i].call(this) : this.each(function() {
                e(this).css(a, n(this, t) + "px")
            })
        }, e.fn["outer" + i] = function(t, s) {
            return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function() {
                e(this).css(a, n(this, t, !0, s) + "px")
            })
        }
    }), e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, e.ui.escapeSelector = function() {
        var e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(t) {
            return t.replace(e, "\\$1")
        }
    }(), e.fn.labels = function() {
        var t, i, n, s, a;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (t = this.eq(0).parents().last(), a = t.add(t.length ? t.siblings() : this.siblings()), i = "label[for='" + e.ui.escapeSelector(n) + "']", s = s.add(a.find(i).addBack(i))), this.pushStack(s))
    }, e.fn.scrollParent = function(t) {
        var i = this.css("position"),
            n = "absolute" === i,
            s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            a = this.parents().filter(function() {
                var t = e(this);
                return (!n || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
        return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
    }, e.extend(e.expr[":"], {
        tabbable: function(t) {
            var i = e.attr(t, "tabindex"),
                n = null != i;
            return (!n || i >= 0) && e.ui.focusable(t, n)
        }
    }), e.fn.extend({
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = e(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function() {
            var t, i, n = this.options.icons;
            n && (t = e("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + n.header), t.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var e;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function(e, t) {
            return "active" === e ? void this._activate(t) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), void("icons" === e && (this._destroyIcons(), t && this._createIcons())))
        },
        _setOptionDisabled: function(e) {
            this._super(e), this.element.attr("aria-disabled", e), this._toggleClass(null, "ui-state-disabled", !!e), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!e)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode,
                    n = this.headers.length,
                    s = this.headers.index(t.target),
                    a = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        a = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        a = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        a = this.headers[0];
                        break;
                    case i.END:
                        a = this.headers[n - 1]
                }
                a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), e(a).trigger("focus"), t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var t = this.options;
            this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var e = this.headers,
                t = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
        },
        _refresh: function() {
            var t, i = this.options,
                n = i.heightStyle,
                s = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var t = e(this),
                    i = t.uniqueId().attr("id"),
                    n = t.next(),
                    s = n.uniqueId().attr("id");
                t.attr("aria-controls", s), n.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (t = s.height(), this.element.siblings(":visible").each(function() {
                var i = e(this),
                    n = i.css("position");
                "absolute" !== n && "fixed" !== n && (t -= i.outerHeight(!0))
            }), this.headers.each(function() {
                t -= e(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (t = 0, this.headers.next().each(function() {
                var i = e(this).is(":visible");
                i || e(this).show(), t = Math.max(t, e(this).css("height", "").height()), i || e(this).hide()
            }).height(t))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && e.each(t.split(" "), function(e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var i, n, s = this.options,
                a = this.active,
                r = e(t.currentTarget),
                o = r[0] === a[0],
                l = o && s.collapsible,
                h = l ? e() : r.next(),
                c = a.next(),
                d = {
                    oldHeader: a,
                    oldPanel: c,
                    newHeader: l ? e() : r,
                    newPanel: h
                };
            t.preventDefault(), o && !s.collapsible || this._trigger("beforeActivate", t, d) === !1 || (s.active = !l && this.headers.index(r), this.active = o ? e() : r, this._toggle(d), this._removeClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = a.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), o || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var i = t.newPanel,
                n = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, t) : (n.hide(), i.show(), this._toggleComplete(t)), n.attr({
                "aria-hidden": "true"
            }), n.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && n.length ? n.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === parseInt(e(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(e, t, i) {
            var n, s, a, r = this,
                o = 0,
                l = e.css("box-sizing"),
                h = e.length && (!t.length || e.index() < t.index()),
                c = this.options.animate || {},
                d = h && c.down || c,
                u = function() {
                    r._toggleComplete(i)
                };
            return "number" == typeof d && (a = d), "string" == typeof d && (s = d), s = s || d.easing || c.easing, a = a || d.duration || c.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(this.hideProps, {
                duration: a,
                easing: s,
                step: function(e, t) {
                    t.now = Math.round(e)
                }
            }), void e.hide().animate(this.showProps, {
                duration: a,
                easing: s,
                complete: u,
                step: function(e, i) {
                    i.now = Math.round(e), "height" !== i.prop ? "content-box" === l && (o += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - o), o = 0)
                }
            })) : t.animate(this.hideProps, a, s, u) : e.animate(this.showProps, a, s, u)
        },
        _toggleComplete: function(e) {
            var t = e.oldPanel,
                i = t.prev();
            this._removeClass(t, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    }), e.ui.safeActiveElement = function(e) {
        var t;
        try {
            t = e.activeElement
        } catch (i) {
            t = e.body
        }
        return t || (t = e.body), t.nodeName || (t = e.body), t
    }, e.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item": function(t) {
                    var i = e(t.target),
                        n = e(e.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    if (!this.previousFilter) {
                        var i = e(t.target).closest(".ui-menu-item"),
                            n = e(t.currentTarget);
                        i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, n))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        var i = !e.contains(this.element[0], e.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                i = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            })
        },
        _keydown: function(t) {
            var i, n, s, a, r = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    r = !1, n = this.previousFilter || "", a = !1, s = t.keyCode >= 96 && 105 >= t.keyCode ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), s === n ? a = !0 : s = n + s, i = this._filterMenuItems(s), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(t.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(t, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            r && t.preventDefault()
        },
        _activate: function(e) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, i, n, s, a, r = this,
                o = this.options.icons.submenu,
                l = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this),
                    i = t.prev(),
                    n = e("<span>").data("ui-menu-submenu-caret", !0);
                r._addClass(n, "ui-menu-icon", "ui-icon " + o), i.attr("aria-haspopup", "true").prepend(n), t.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), t = l.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function() {
                var t = e(this);
                r._isDivider(t) && r._addClass(t, "ui-menu-divider", "ui-widget-content")
            }), s = i.not(".ui-menu-item, .ui-menu-divider"), a = s.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(s, "ui-menu-item")._addClass(a, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            if ("icons" === e) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
            }
            this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e), this.element.attr("aria-disabled", e + ""), this._toggleClass(null, "ui-state-disabled", !!e)
        },
        focus: function(e, t) {
            var i, n, s;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var i, n, s, a, r, o;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - i - n, a = this.activeMenu.scrollTop(), r = this.activeMenu.height(), o = t.outerHeight(), 0 > s ? this.activeMenu.scrollTop(a + s) : s + o > r && this.activeMenu.scrollTop(a + s - r + o))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                item: this.active
            }), this.active = null)
        },
        _startOpening: function(e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function(t) {
            var i = e.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(t), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(t) {
            return !e(t.target).closest(".ui-menu").length
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, i) {
            var n;
            this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[t]()), this.focus(i, n)
        },
        nextPage: function(t) {
            var i, n, s;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = e(this), 0 > i.offset().top - n - s
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
        },
        previousPage: function(t) {
            var i, n, s;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = e(this), i.offset().top - n + s > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                n = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return n.test(e.trim(e(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }), e.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, n, s = this.element[0].nodeName.toLowerCase(),
                a = "textarea" === s,
                r = "input" === s;
            this.isMultiLine = a || !r && this._isContentEditable(this.element), this.valueMethod = this.element[a || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return t = !0, n = !0, void(i = !0);
                    t = !1, n = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (s.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", s);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", s);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", s);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", s);
                            break;
                        case a.ENTER:
                            this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                    }
                },
                keypress: function(n) {
                    if (t) return t = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                    if (!i) {
                        var s = e.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                        }
                    }
                },
                input: function(e) {
                    return n ? (n = !1, void e.preventDefault()) : void this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), void this._change(e))
                }
            }), this._initSource(), this.menu = e("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== e.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(t, i) {
                    var n, s;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                        e(t.target).trigger(t.originalEvent)
                    })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                        item: s
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && e.trim(n).length && (this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion))))
                },
                menuselect: function(t, i) {
                    var n = i.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== e.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = n
                    })), !1 !== this._trigger("select", t, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(t), this.selectedItem = n
                }
            }), this.liveRegion = e("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(t) {
            var i = this.menu.element[0];
            return t.target === this.element[0] || t.target === i || e.contains(i, t.target)
        },
        _closeOnClickOutside: function(e) {
            this._isEventTargetInWidget(e) || this.close()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, i, n = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, n) {
                n(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, s) {
                n.xhr && n.xhr.abort(), n.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        s(e)
                    },
                    error: function() {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var t = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    n = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                (!t || t && !i && !n) && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var n = this;
            e.each(i, function(e, i) {
                n._renderItemData(t, i)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").append(e("<div>").text(i.label)).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        },
        _isContentEditable: function(e) {
            if (!e.length) return !1;
            var t = e.prop("contentEditable");
            return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var n = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return n.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
        }
    }), e.ui.autocomplete;
    var m = /ui-corner-([a-z]){2,6}/g;
    e.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var t = this,
                i = [];
            e.each(this.options.items, function(n, s) {
                var a, r = {};
                return s ? "controlgroupLabel" === n ? (a = t.element.find(s), a.each(function() {
                    var t = e(this);
                    t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), t._addClass(a, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(a.get()))) : void(e.fn[n] && (r = t["_" + n + "Options"] ? t["_" + n + "Options"]("middle") : {
                    classes: {}
                }, t.element.find(s).each(function() {
                    var s = e(this),
                        a = s[n]("instance"),
                        o = e.widget.extend({}, r);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                        a || (a = s[n]()[n]("instance")), a && (o.classes = t._resolveClassesValues(o.classes, a)), s[n](o);
                        var l = s[n]("widget");
                        e.data(l[0], "ui-controlgroup-data", a ? a : s[n]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = e(e.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(t) {
            this.childWidgets.each(function() {
                var i = e(this),
                    n = i.data("ui-controlgroup-data");
                n && n[t] && n[t]()
            })
        },
        _updateCornerClass: function(e, t) {
            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                n = this._buildSimpleOptions(t, "label").classes.label;
            this._removeClass(e, null, i), this._addClass(e, null, n)
        },
        _buildSimpleOptions: function(e, t) {
            var i = "vertical" === this.options.direction,
                n = {
                    classes: {}
                };
            return n.classes[t] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[e], n
        },
        _spinnerOptions: function(e) {
            var t = this._buildSimpleOptions(e, "ui-spinner");
            return t.classes["ui-spinner-up"] = "", t.classes["ui-spinner-down"] = "", t
        },
        _buttonOptions: function(e) {
            return this._buildSimpleOptions(e, "ui-button")
        },
        _checkboxradioOptions: function(e) {
            return this._buildSimpleOptions(e, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(e) {
            var t = "vertical" === this.options.direction;
            return {
                width: !!t && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[e]
            }
        },
        _resolveClassesValues: function(t, i) {
            var n = {};
            return e.each(t, function(s) {
                var a = i.options.classes[s] || "";
                a = e.trim(a.replace(m, "")), n[s] = (a + " " + t[s]).replace(/\s+/g, " ")
            }), n
        },
        _setOption: function(e, t) {
            return "direction" === e && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(e, t), "disabled" === e ? void this._callChildMethod(t ? "disable" : "enable") : void this.refresh()
        },
        refresh: function() {
            var t, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), t = this.childWidgets, this.options.onlyVisible && (t = t.filter(":visible")), t.length && (e.each(["first", "last"], function(e, n) {
                var s = t[n]().data("ui-controlgroup-data");
                if (s && i["_" + s.widgetName + "Options"]) {
                    var a = i["_" + s.widgetName + "Options"](1 === t.length ? "only" : n);
                    a.classes = i._resolveClassesValues(a.classes, s), s.element[s.widgetName](a)
                } else i._updateCornerClass(t[n](), n)
            }), this._callChildMethod("refresh"))
        }
    }), e.widget("ui.checkboxradio", [e.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var t, i, n = this,
                s = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = e(i[i.length - 1]), this.label.length || e.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
                n.originalLabel += 3 === this.nodeType ? e(this).text() : this.outerHTML
            }), this.originalLabel && (s.label = this.originalLabel), t = this.element[0].disabled, null != t && (s.disabled = t), s
        },
        _create: function() {
            var e = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), e && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || e.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var t, i = this.element[0].name,
                n = "input[name='" + e.ui.escapeSelector(i) + "']";
            return i ? (t = this.form.length ? e(this.form[0].elements).filter(n) : e(n).filter(function() {
                return 0 === e(this).form().length
            }), t.not(this.element)) : e([])
        },
        _toggleClasses: function() {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function() {
                var t = e(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function(e, t) {
            return "label" !== e || t ? (this._super(e, t), "disabled" === e ? (this._toggleClass(this.label, null, "ui-state-disabled", t), void(this.element[0].disabled = t)) : void this.refresh()) : void 0
        },
        _updateIcon: function(t) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = e("<span>"), this.iconSpace = e("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var e = this.label.contents().not(this.element[0]);
            this.icon && (e = e.not(this.icon[0])), this.iconSpace && (e = e.not(this.iconSpace[0])), e.remove(), this.label.append(this.options.label)
        },
        refresh: function() {
            var e = this.element[0].checked,
                t = this.element[0].disabled;
            this._updateIcon(e), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), null !== this.options.label && this._updateLabel(), t !== this.options.disabled && this._setOptions({
                disabled: t
            })
        }
    }]), e.ui.checkboxradio, e.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var e, t = this._super() || {};
            return this.isInput = this.element.is("input"), e = this.element[0].disabled, null != e && (t.disabled = e), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (t.label = this.originalLabel), t
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function(t) {
                    t.keyCode === e.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(t, i) {
            var n = "iconPosition" !== t,
                s = n ? this.options.iconPosition : i,
                a = "top" === s || "bottom" === s;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = e("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), a ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = e("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(e) {
            this.icon[/^(?:end|bottom)/.test(e) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(e) {
            this.element[/^(?:end|bottom)/.test(e) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(e) {
            var t = void 0 === e.showLabel ? this.options.showLabel : e.showLabel,
                i = void 0 === e.icon ? this.options.icon : e.icon;
            t || i || (e.showLabel = !0), this._super(e)
        },
        _setOption: function(e, t) {
            "icon" === e && (t ? this._updateIcon(e, t) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === e && this._updateIcon(e, t), "showLabel" === e && (this._toggleClass("ui-button-icon-only", null, !t), this._updateTooltip()), "label" === e && (this.isInput ? this.element.val(t) : (this.element.html(t), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(e, t), "disabled" === e && (this._toggleClass(null, "ui-state-disabled", t), this.element[0].disabled = t, t && this.element.blur())
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOptions({
                disabled: e
            }), this._updateTooltip()
        }
    }), e.uiBackCompat !== !1 && (e.widget("ui.button", e.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        },
        _setOption: function(e, t) {
            return "text" === e ? void this._super("showLabel", t) : ("showLabel" === e && (this.options.text = t), "icon" === e && (this.options.icons.primary = t), "icons" === e && (t.primary ? (this._super("icon", t.primary), this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
        }
    }), e.fn.button = function(t) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (e.ui.checkboxradio || e.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(e.fn.button), e.fn.buttonset = function() {
        return e.ui.controlgroup || e.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments))
    }), e.ui.button, e.extend(e.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var g;
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return r(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, i) {
            var n, s, a;
            n = t.nodeName.toLowerCase(), s = "div" === n || "span" === n, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), s), a.settings = e.extend({}, i || {}), "input" === n ? this._connectDatepicker(t, a) : s && this._inlineDatepicker(t, a)
        },
        _newInst: function(t, i) {
            var n = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var n = e(t);
            i.append = e([]), i.trigger = e([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var n, s, a, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && t.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: s,
                title: s
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                src: a,
                alt: s,
                title: s
            }) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, n, s, a = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) {
                    for (i = 0, n = 0, s = 0; e.length > s; s++) e[s].length > i && (i = e[s].length, n = s);
                    return n
                }, a.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var n = e(t);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, n, s, a) {
            var o, l, h, c, d, u = this._dialogInst;
            return u || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), e("body").append(this._dialogInput), u = this._dialogInst = this._newInst(this._dialogInput, !1), u.settings = {}, e.data(this._dialogInput[0], "datepicker", u)), r(u.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(u, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", u), this
        },
        _destroyDatepicker: function(t) {
            var i, n = e(t),
                s = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), g === s && (g = null))
        },
        _enableDatepicker: function(t) {
            var i, n, s = e(t),
                a = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, n, s = e(t),
                a = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (e) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, i, n) {
            var s, a, o, l, h = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : h ? "all" === i ? e.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), r(h.settings, s), null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, o)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, n, s, a = e.datepicker._getInst(t.target),
                r = !0,
                o = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), s[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, s[0]), i = e.datepicker._get(a, "onSelect"), i ? (n = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [n, a])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, n, s = e.datepicker._getInst(t.target);
            return e.datepicker._get(s, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var i, n = e.datepicker._getInst(t.target);
            if (n.input.val() !== n.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, e.datepicker._getFormatConfig(n)), i && (e.datepicker._setDateFromField(n), e.datepicker._updateAlternate(n), e.datepicker._updateDatepicker(n))
            } catch (e) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var n, s, a, o, l, h, c;
                n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), s = e.datepicker._get(n, "beforeShow"), a = s ? s.apply(t, [t, n]) : {}, a !== !1 && (r(n.settings, a), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function() {
                    return o |= "fixed" === e(this).css("position"), !o
                }), l = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(n), l = e.datepicker._checkOffset(n, l, o), n.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), n.inline || (h = e.datepicker._get(n, "showAnim"), c = e.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[h] ? n.dpDiv.show(h, e.datepicker._get(n, "showOptions"), c) : n.dpDiv[h || "show"](h ? c : null), e.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), e.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, g = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, n = this._getNumberOfMonths(t),
                s = n[1],
                r = 17,
                o = t.dpDiv.find("." + this._dayOverClass + " a");
            o.length > 0 && a.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, n) {
            var s = t.dpDiv.outerWidth(),
                a = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : e(document).scrollLeft()),
                h = document.documentElement.clientHeight + (n ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= n && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= n && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + a > h && h > a ? Math.abs(a + o) : 0), i
        },
        _findPos: function(t) {
            for (var i, n = this._getInst(t), s = this._get(n, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, n, s, a, r = this._curInst;
            !r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function() {
                e.datepicker._tidyDialog(r)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, a = this._get(r, "onClose"), a && a.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    n = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== n) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, n) {
            var s = e(t),
                a = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(a, i + ("M" === n ? this._get(a, "showCurrentAtPos") : 0), n), this._updateDatepicker(a))
        },
        _gotoToday: function(t) {
            var i, n = e(t),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(t, i, n) {
            var s = e(t),
                a = this._getInst(s[0]);
            a["selected" + ("M" === n ? "Month" : "Year")] = a["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(s)
        },
        _selectDay: function(t, i, n, s) {
            var a, r = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = e("a", s).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = n, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var n, s = e(t),
                a = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), n = this._get(a, "onSelect"), n ? n.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, n, s, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), s = this.formatDate(i, n, this._getFormatConfig(t)), e(a).val(s))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, n) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var s, a, r, o, l = 0,
                h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                u = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                b = -1,
                y = !1,
                _ = function(e) {
                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
                    return i && s++, i
                },
                w = function(e) {
                    var t = _(e),
                        n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        s = "y" === e ? n : 1,
                        a = RegExp("^\\d{" + s + "," + n + "}"),
                        r = i.substring(l).match(a);
                    if (!r) throw "Missing number at position " + l;
                    return l += r[0].length, parseInt(r[0], 10)
                },
                x = function(t, n, s) {
                    var a = -1,
                        r = e.map(_(t) ? s : n, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(r, function(e, t) {
                            var n = t[1];
                            return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (a = t[0], l += n.length, !1) : void 0
                        }), -1 !== a) return a + 1;
                    throw "Unknown name at position " + l
                },
                C = function() {
                    if (i.charAt(l) !== t.charAt(s)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (s = 0; t.length > s; s++)
                if (y) "'" !== t.charAt(s) || _("'") ? C() : y = !1;
                else switch (t.charAt(s)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        x("D", d, u);
                        break;
                    case "o":
                        b = w("o");
                        break;
                    case "m":
                        g = w("m");
                        break;
                    case "M":
                        g = x("M", p, f);
                        break;
                    case "y":
                        m = w("y");
                        break;
                    case "@":
                        o = new Date(w("@")), m = o.getFullYear(), g = o.getMonth() + 1, v = o.getDate();
                        break;
                    case "!":
                        o = new Date((w("!") - this._ticksTo1970) / 1e4), m = o.getFullYear(), g = o.getMonth() + 1, v = o.getDate();
                        break;
                    case "'":
                        _("'") ? C() : y = !0;
                        break;
                    default:
                        C()
                }
            if (i.length > l && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), b > -1)
                for (g = 1, v = b; a = this._getDaysInMonth(m, g - 1), !(a >= v);) g++, v -= a;
            if (o = this._daylightSavingAdjust(new Date(m, g - 1, v)), o.getFullYear() !== m || o.getMonth() + 1 !== g || o.getDate() !== v) throw "Invalid date";
            return o
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(t) {
                    var i = e.length > n + 1 && e.charAt(n + 1) === t;
                    return i && n++, i
                },
                h = function(e, t, i) {
                    var n = "" + t;
                    if (l(e))
                        for (; i > n.length;) n = "0" + n;
                    return n
                },
                c = function(e, t, i, n) {
                    return l(e) ? n[t] : i[t]
                },
                d = "",
                u = !1;
            if (t)
                for (n = 0; e.length > n; n++)
                    if (u) "'" !== e.charAt(n) || l("'") ? d += e.charAt(n) : u = !1;
                    else switch (e.charAt(n)) {
                        case "d":
                            d += h("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += c("D", t.getDay(), s, a);
                            break;
                        case "o":
                            d += h("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += h("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += c("M", t.getMonth(), r, o);
                            break;
                        case "y":
                            d += l("y") ? t.getFullYear() : (10 > t.getFullYear() % 100 ? "0" : "") + t.getFullYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? d += "'" : u = !0;
                            break;
                        default:
                            d += e.charAt(n)
                    }
            return d
        },
        _possibleChars: function(e) {
            var t, i = "",
                n = !1,
                s = function(i) {
                    var n = e.length > t + 1 && e.charAt(t + 1) === i;
                    return n && t++, n
                };
            for (t = 0; e.length > t; t++)
                if (n) "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : n = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    n = e.lastVal = e.input ? e.input.val() : null,
                    s = this._getDefaultDate(e),
                    a = s,
                    r = this._getFormatConfig(e);
                try {
                    a = this.parseDate(i, n, r) || s
                } catch (e) {
                    n = t ? "" : n
                }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = n ? a.getDate() : 0, e.currentMonth = n ? a.getMonth() : 0, e.currentYear = n ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, n) {
            var s = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                a = function(i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (e) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = n.getFullYear(), a = n.getMonth(), r = n.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = o.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(s, a));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(s, a))
                        }
                        l = o.exec(i)
                    }
                    return new Date(s, a, r)
                },
                r = null == i || "" === i ? n : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, i) {
            var n = !t,
                s = e.selectedMonth,
                a = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                n = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, n, s, a, r, o, l, h, c, d, u, p, f, m, g, v, b, y, _, w, x, C, k, T, S, D, E, M, I, $, P, A, O, N, z, L, H, F, R = new Date,
                W = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                j = this._get(e, "isRTL"),
                q = this._get(e, "showButtonPanel"),
                Y = this._get(e, "hideIfNoPrevNext"),
                B = this._get(e, "navigationAsDateFormat"),
                V = this._getNumberOfMonths(e),
                U = this._get(e, "showCurrentAtPos"),
                G = this._get(e, "stepMonths"),
                X = 1 !== V[0] || 1 !== V[1],
                K = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(e, "min"),
                J = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - U,
                ee = e.drawYear;
            if (0 > Z && (Z += 12, ee--), J)
                for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - V[0] * V[1] + 1, J.getDate())), t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, ee--);
            for (e.drawMonth = Z, e.drawYear = ee, i = this._get(e, "prevText"), i = B ? this.formatDate(i, this._daylightSavingAdjust(new Date(ee, Z - G, 1)), this._getFormatConfig(e)) : i, n = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = B ? this.formatDate(s, this._daylightSavingAdjust(new Date(ee, Z + G, 1)), this._getFormatConfig(e)) : s, a = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? K : W, r = B ? this.formatDate(r, o, this._getFormatConfig(e)) : r, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (j ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(e, "showWeek"), u = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), b = this._get(e, "selectOtherMonths"), y = this._getDefaultDate(e), _ = "", x = 0; V[0] > x; x++) {
                for (C = "", this.maxRows = 4, k = 0; V[1] > k; k++) {
                    if (T = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), S = " ui-corner-all", D = "", X) {
                        if (D += "<div class='ui-datepicker-group", V[1] > 1) switch (k) {
                            case 0:
                                D += " ui-datepicker-group-first", S = " ui-corner-" + (j ? "right" : "left");
                                break;
                            case V[1] - 1:
                                D += " ui-datepicker-group-last", S = " ui-corner-" + (j ? "left" : "right");
                                break;
                            default:
                                D += " ui-datepicker-group-middle", S = ""
                        }
                        D += "'>"
                    }
                    for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? j ? a : n : "") + (/all|right/.test(S) && 0 === x ? j ? n : a : "") + this._generateMonthYearHeader(e, Z, ee, Q, J, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, E += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[M] + "'>" + p[M] + "</span></th>";
                    for (D += E + "</tr></thead><tbody>", I = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, I)), $ = (this._getFirstDayOfMonth(ee, Z) - c + 7) % 7, P = Math.ceil(($ + I) / 7), A = X && this.maxRows > P ? this.maxRows : P, this.maxRows = A, O = this._daylightSavingAdjust(new Date(ee, Z, 1 - $)), N = 0; A > N; N++) {
                        for (D += "<tr>", z = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(O) + "</td>" : "", w = 0; 7 > w; w++) L = g ? g.apply(e.input ? e.input[0] : null, [O]) : [!0, ""], H = O.getMonth() !== Z, F = H && !b || !L[0] || Q && Q > O || J && O > J, z += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (O.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || y.getTime() === O.getTime() && y.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !v ? "" : " " + L[1] + (O.getTime() === K.getTime() ? " " + this._currentClass : "") + (O.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (H && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === W.getTime() ? " ui-state-highlight" : "") + (O.getTime() === K.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                        D += z + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, ee++), D += "</tbody></table>" + (X ? "</div>" + (V[0] > 0 && k === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), C += D
                }
                _ += C
            }
            return _ += h, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(e, t, i, n, s, a, r, o) {
            var l, h, c, d, u, p, f, m, g = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                b = this._get(e, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                _ = "";
            if (a || !g) _ += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || s.getMonth() >= c) && (_ += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + o[c] + "</option>");
                _ += "</select>"
            }
            if (b || (y += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", a || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), u = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? u + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? u : t
                        }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", y += e.yearshtml, e.yearshtml = null
                }
            return y += this._get(e, "yearSuffix"), b && (y += (!a && g && v ? "" : "&#xa0;") + _), y += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var n = e.selectedYear + ("Y" === i ? t : 0),
                s = e.selectedMonth + ("M" === i ? t : 0),
                a = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, a)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                s = i && i > t ? i : t;
            return n && s > n ? n : s
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, i, n) {
            var s = this._getNumberOfMonths(e),
                a = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
        },
        _isInRange: function(e, t) {
            var i, n, s = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                r = null,
                o = null,
                l = this._get(e, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (o += n)), (!s || t.getTime() >= s.getTime()) && (!a || t.getTime() <= a.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, n) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.12.1", e.datepicker, e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var v = !1;
    e(document).on("mouseup", function() {
        v = !1
    }), e.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).on("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!v) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this,
                    n = 1 === t.which,
                    s = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), v = !0, !0))
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, v = !1, t.preventDefault()
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), e.ui.plugin = {
        add: function(t, i, n) {
            var s, a = e.ui[t].prototype;
            for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
        },
        call: function(e, t, i, n) {
            var s, a = e.plugins[t];
            if (a && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
        }
    }, e.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && e(t).trigger("blur")
    }, e.widget("ui.draggable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(e, t) {
            this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return !(this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0))
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = e(this);
                return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var i = e.ui.safeActiveElement(this.document[0]),
                n = e(t.target);
            n.closest(i).length || e.ui.safeBlur(i)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === e(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function(e) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", t, n) === !1) return this._mouseUp(new e.Event("mouseup", t)), !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var i = this,
                n = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new e.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this
        },
        _getHandle: function(t) {
            return !this.options.handle || !!e(t.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var i = this.options,
                n = e.isFunction(i.helper),
                s = n ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(e) {
            return /(html|body)/i.test(e.tagName) || e === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var e = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, n, s = this.options,
                a = this.document[0];
            return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = e(s.containment), n = i[0], void(n && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(e, t) {
            t || (t = this.position);
            var i = "absolute" === e ? 1 : -1,
                n = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(e, t) {
            var i, n, s, a, r = this.options,
                o = this._isRootNode(this.scrollParent[0]),
                l = e.pageX,
                h = e.pageY;
            return o && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, a = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - r.grid[0] : a + r.grid[0] : a), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : o ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : o ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, i, n) {
            return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, n)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, n) {
            var s = e.extend({}, i, {
                item: n.element
            });
            n.sortables = [], e(n.options.connectToSortable).each(function() {
                var i = e(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, s))
            })
        },
        stop: function(t, i, n) {
            var s = e.extend({}, i, {
                item: n.element
            });
            n.cancelHelperRemoval = !1, e.each(n.sortables, function() {
                var e = this;
                e.isOver ? (e.isOver = 0, n.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                    position: e.placeholder.css("position"),
                    top: e.placeholder.css("top"),
                    left: e.placeholder.css("left")
                }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, s))
            })
        },
        drag: function(t, i, n) {
            e.each(n.sortables, function() {
                var s = !1,
                    a = this;
                a.positionAbs = n.positionAbs, a.helperProportions = n.helperProportions, a.offset.click = n.offset.click, a._intersectsWith(a.containerCache) && (s = !0, e.each(n.sortables, function() {
                    return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (s = !1), s
                })), s ? (a.isOver || (a.isOver = 1, n._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function() {
                    return i.helper[0]
                }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = n.offset.click.top, a.offset.click.left = n.offset.click.left, a.offset.parent.left -= n.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= n.offset.parent.top - a.offset.parent.top, n._trigger("toSortable", t), n.dropped = a.element, e.each(n.sortables, function() {
                    this.refreshPositions()
                }), n.currentItem = n.element, a.fromOutside = n), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(t), i.position = n._generatePosition(t, !0), n._trigger("fromSortable", t), n.dropped = !1, e.each(n.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, n) {
            var s = e("body"),
                a = n.options;
            s.css("cursor") && (a._cursor = s.css("cursor")), s.css("cursor", a.cursor)
        },
        stop: function(t, i, n) {
            var s = n.options;
            s._cursor && e("body").css("cursor", s._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, n) {
            var s = e(i.helper),
                a = n.options;
            s.css("opacity") && (a._opacity = s.css("opacity")), s.css("opacity", a.opacity)
        },
        stop: function(t, i, n) {
            var s = n.options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function(e, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, i, n) {
            var s = n.options,
                a = !1,
                r = n.scrollParentNotHidden[0],
                o = n.document[0];
            r !== o && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - t.pageY < s.scrollSensitivity ? r.scrollTop = a = r.scrollTop + s.scrollSpeed : t.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = a = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - t.pageX < s.scrollSensitivity ? r.scrollLeft = a = r.scrollLeft + s.scrollSpeed : t.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = a = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(o).scrollTop() < s.scrollSensitivity ? a = e(o).scrollTop(e(o).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(o).scrollTop()) < s.scrollSensitivity && (a = e(o).scrollTop(e(o).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(o).scrollLeft() < s.scrollSensitivity ? a = e(o).scrollLeft(e(o).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(o).scrollLeft()) < s.scrollSensitivity && (a = e(o).scrollLeft(e(o).scrollLeft() + s.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function(t, i, n) {
            var s = n.options;
            n.snapElements = [], e(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                var t = e(this),
                    i = t.offset();
                this !== n.element[0] && n.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, i, n) {
            var s, a, r, o, l, h, c, d, u, p, f = n.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + n.helperProportions.width,
                b = i.offset.top,
                y = b + n.helperProportions.height;
            for (u = n.snapElements.length - 1; u >= 0; u--) l = n.snapElements[u].left - n.margins.left, h = l + n.snapElements[u].width, c = n.snapElements[u].top - n.margins.top, d = c + n.snapElements[u].height, l - m > v || g > h + m || c - m > y || b > d + m || !e.contains(n.snapElements[u].item.ownerDocument, n.snapElements[u].item) ? (n.snapElements[u].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                snapItem: n.snapElements[u].item
            })), n.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(c - y), a = m >= Math.abs(d - b), r = m >= Math.abs(l - v), o = m >= Math.abs(h - g), s && (i.position.top = n._convertPositionTo("relative", {
                top: c - n.helperProportions.height,
                left: 0
            }).top), a && (i.position.top = n._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l - n.helperProportions.width
            }).left), o && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left)), p = s || a || r || o, "outer" !== f.snapMode && (s = m >= Math.abs(c - b), a = m >= Math.abs(d - y), r = m >= Math.abs(l - g), o = m >= Math.abs(h - v), s && (i.position.top = n._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), a && (i.position.top = n._convertPositionTo("relative", {
                top: d - n.helperProportions.height,
                left: 0
            }).top), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), o && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h - n.helperProportions.width
            }).left)), !n.snapElements[u].snapping && (s || a || r || o || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                snapItem: n.snapElements[u].item
            })), n.snapElements[u].snapping = s || a || r || o || p)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function(t, i, n) {
            var s, a = n.options,
                r = e.makeArray(e(a.stack)).sort(function(t, i) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                });
            r.length && (s = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(t) {
                e(this).css("zIndex", s + t)
            }), this.css("zIndex", s + r.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, n) {
            var s = e(i.helper),
                a = n.options;
            s.css("zIndex") && (a._zIndex = s.css("zIndex")), s.css("zIndex", a.zIndex)
        },
        stop: function(t, i, n) {
            var s = n.options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(e) {
            return parseFloat(e) || 0
        },
        _isNumber: function(e) {
            return !isNaN(parseFloat(e));
        },
        _hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return t[n] > 0 || (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        },
        _create: function() {
            var t, i = this.options,
                n = this;
            this._addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), i.autoHide && e(this.element).on("mouseenter", function() {
                i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
            }).on("mouseleave", function() {
                i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _setOption: function(e, t) {
            switch (this._super(e, t), e) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var t, i, n, s, a, r = this.options,
                o = this;
            if (this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) t = e.trim(n[i]), s = "ui-resizable-" + t, a = e("<div>"), this._addClass(a, "ui-resizable-handle " + s), a.css({
                    zIndex: r.zIndex
                }), this.handles[t] = ".ui-resizable-" + t, this.element.append(a);
            this._renderAxis = function(t) {
                var i, n, s, a;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
                    mousedown: o._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(s, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                o.resizing || (this.className && (a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = a && a[1] ? a[1] : "se")
            }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(t) {
            var i, n, s = !1;
            for (i in this.handles) n = e(this.handles[i])[0], (n === t.target || e.contains(n, t.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(t) {
            var i, n, s, a = this.options,
                r = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, n += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: n
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: r.width(),
                height: r.height()
            }, this.originalSize = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {
                width: r.width(),
                height: r.height()
            }, this.sizeDiff = {
                width: r.outerWidth() - r.width(),
                height: r.outerHeight() - r.height()
            }, this.originalPosition = {
                left: i,
                top: n
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var i, n, s = this.originalMousePosition,
                a = this.axis,
                r = t.pageX - s.left || 0,
                o = t.pageY - s.top || 0,
                l = this._change[a];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [t, r, o]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var i, n, s, a, r, o, l, h = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = n ? 0 : c.sizeDiff.width, r = {
                width: c.helper.width() - a,
                height: c.helper.height() - s
            }, o = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(e.extend(r, {
                top: l,
                left: o
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var e = {};
            return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
        },
        _updateVirtualBoundaries: function(e) {
            var t, i, n, s, a, r = this.options;
            a = {
                minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, n = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, s = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), n > a.minHeight && (a.minHeight = n), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > s && (a.maxHeight = s)), this._vBoundaries = a
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position,
                i = this.size,
                n = this.axis;
            return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries,
                i = this.axis,
                n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                s = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                r = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                o = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return a && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), s && (e.height = t.maxHeight), a && h && (e.left = o - t.minWidth), n && h && (e.left = o - t.maxWidth), r && c && (e.top = l - t.minHeight), s && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _getPaddingPlusBorderDimensions: function(e) {
            for (var t = 0, i = [], n = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], s = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseFloat(n[t]) || 0, i[t] += parseFloat(s[t]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var i = this.originalSize,
                    n = this.originalPosition;
                return {
                    left: n.left + t,
                    width: i.width - t
                }
            },
            n: function(e, t, i) {
                var n = this.originalSize,
                    s = this.originalPosition;
                return {
                    top: s.top + i,
                    height: n.height - i
                }
            },
            s: function(e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, n) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
            },
            sw: function(t, i, n) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
            },
            ne: function(t, i, n) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
            },
            nw: function(t, i, n) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
            }
        },
        _propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = e(this).resizable("instance"),
                n = i.options,
                s = i._proportionallyResizeElements,
                a = s.length && /textarea/i.test(s[0].nodeName),
                r = a && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                o = a ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - o,
                    height: i.size.height - r
                },
                h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(l, c && h ? {
                top: c,
                left: h
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    s && s.length && e(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, i, n, s, a, r, o, l = e(this).resizable("instance"),
                h = l.options,
                c = l.element,
                d = h.containment,
                u = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            u && (l.containerElement = e(u), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(u), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                i[e] = l._num(t.css("padding" + n))
            }), l.containerOffset = t.offset(), l.containerPosition = t.position(), l.containerSize = {
                height: t.innerHeight() - i[3],
                width: t.innerWidth() - i[1]
            }, n = l.containerOffset, s = l.containerSize.height, a = l.containerSize.width, r = l._hasScroll(u, "left") ? u.scrollWidth : a, o = l._hasScroll(u) ? u.scrollHeight : s, l.parentData = {
                element: u,
                left: n.left,
                top: n.top,
                width: r,
                height: o
            }))
        },
        resize: function(t) {
            var i, n, s, a, r = e(this).resizable("instance"),
                o = r.options,
                l = r.containerOffset,
                h = r.position,
                c = r._aspectRatio || t.shiftKey,
                d = {
                    top: 0,
                    left: 0
                },
                u = r.containerElement,
                p = !0;
            u[0] !== document && /static/.test(u.css("position")) && (d = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - d.left), c && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = o.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), s = r.containerElement.get(0) === r.element.parent().get(0), a = /relative|absolute/.test(r.containerElement.css("position")), s && a ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - d.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - d.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio, p = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, c && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
        },
        stop: function() {
            var t = e(this).resizable("instance"),
                i = t.options,
                n = t.containerOffset,
                s = t.containerPosition,
                a = t.containerElement,
                r = e(t.helper),
                o = r.offset(),
                l = r.outerWidth() - t.sizeDiff.width,
                h = r.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: o.left - s.left - n.left,
                width: l,
                height: h
            }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: o.left - s.left - n.left,
                width: l,
                height: h
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).resizable("instance"),
                i = t.options;
            e(i.alsoResize).each(function() {
                var t = e(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        },
        resize: function(t, i) {
            var n = e(this).resizable("instance"),
                s = n.options,
                a = n.originalSize,
                r = n.originalPosition,
                o = {
                    height: n.size.height - a.height || 0,
                    width: n.size.width - a.width || 0,
                    top: n.position.top - r.top || 0,
                    left: n.position.left - r.left || 0
                };
            e(s.alsoResize).each(function() {
                var t = e(this),
                    n = e(this).data("ui-resizable-alsoresize"),
                    s = {},
                    a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                e.each(a, function(e, t) {
                    var i = (n[t] || 0) + (o[t] || 0);
                    i && i >= 0 && (s[t] = i || null)
                }), t.css(s)
            })
        },
        stop: function() {
            e(this).removeData("ui-resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).resizable("instance"),
                i = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), t._addClass(t.ghost, "ui-resizable-ghost"), e.uiBackCompat !== !1 && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, i = e(this).resizable("instance"),
                n = i.options,
                s = i.size,
                a = i.originalSize,
                r = i.originalPosition,
                o = i.axis,
                l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                h = l[0] || 1,
                c = l[1] || 1,
                d = Math.round((s.width - a.width) / h) * h,
                u = Math.round((s.height - a.height) / c) * c,
                p = a.width + d,
                f = a.height + u,
                m = n.maxWidth && p > n.maxWidth,
                g = n.maxHeight && f > n.maxHeight,
                v = n.minWidth && n.minWidth > p,
                b = n.minHeight && n.minHeight > f;
            n.grid = l, v && (p += h), b && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(o) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(o) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - u) : /^(sw)$/.test(o) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - d) : ((0 >= f - c || 0 >= p - h) && (t = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = r.top - u) : (f = c - t.height, i.size.height = f, i.position.top = r.top + a.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - d) : (p = h - t.width, i.size.width = p, i.position.left = r.left + a.width - p))
        }
    }), e.ui.resizable, e.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || e.ui.safeBlur(e.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, i) {
            var n = !1,
                s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +e(this).css("z-index")
                }).get(),
                a = Math.max.apply(null, s);
            return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), n = !0), n && !i && this._trigger("focus", t), n
        },
        open: function() {
            var t = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = e(e.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).trigger("focus")
        },
        _keepFocus: function(t) {
            function i() {
                var t = e.ui.safeActiveElement(this.document[0]),
                    i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== n[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                            s.trigger("focus")
                        }), t.preventDefault()) : (this._delay(function() {
                            n.trigger("focus")
                        }), t.preventDefault())
                    }
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: e("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title ? e.text(this.options.title) : e.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function() {
            var t = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (e.each(i, function(i, n) {
                var s, a;
                n = e.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = e.extend({
                    type: "button"
                }, n), s = n.click, a = {
                    icon: n.icon,
                    iconPosition: n.iconPosition,
                    showLabel: n.showLabel,
                    icons: n.icons,
                    text: n.text
                }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, e("<button></button>", n).button(a).appendTo(t.uiButtonSet).on("click", function() {
                    s.apply(t.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) {
                    i._addClass(e(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, t(s))
                },
                drag: function(e, n) {
                    i._trigger("drag", e, t(n))
                },
                stop: function(s, a) {
                    var r = a.offset.left - i.document.scrollLeft(),
                        o = a.offset.top - i.document.scrollTop();
                    n.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (o >= 0 ? "+" : "") + o,
                        of: i.window
                    }, i._removeClass(e(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, t(a))
                }
            })
        },
        _makeResizable: function() {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var i = this,
                n = this.options,
                s = n.resizable,
                a = this.uiDialog.css("position"),
                r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(n, s) {
                    i._addClass(e(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, t(s))
                },
                resize: function(e, n) {
                    i._trigger("resize", e, t(n))
                },
                stop: function(s, a) {
                    var r = i.uiDialog.offset(),
                        o = r.left - i.document.scrollLeft(),
                        l = r.top - i.document.scrollTop();
                    n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, i._removeClass(e(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, t(a))
                }
            }).css("position", a)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget(), this._focusedElement = e(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                i = e.inArray(this, t); - 1 !== i && t.splice(i, 1)
        },
        _trackingInstances: function() {
            var e = this.document.data("ui-dialog-instances");
            return e || (e = [], this.document.data("ui-dialog-instances", e)), e
        },
        _minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                n = !1,
                s = {};
            e.each(t, function(e, t) {
                i._setOption(e, t), e in i.sizeRelatedOptions && (n = !0), e in i.resizableRelatedOptions && (s[e] = t)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(t, i) {
            var n, s, a = this.uiDialog;
            "disabled" !== t && (this._super(t, i), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: e("<a>").text("" + this.options.closeText).html()
            }), "draggable" === t && (n = a.is(":data(ui-draggable)"), n && !i && a.draggable("destroy"), !n && i && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = a.is(":data(ui-resizable)"), s && !i && a.resizable("destroy"), s && "string" == typeof i && a.resizable("option", "handles", i), s || i === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var e, t, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), t = Math.max(0, n.minHeight - e), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - e) : "none", "auto" === n.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return !!e(t.target).closest(".ui-dialog").length || !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(e) {
                        t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = e("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(e, t) {
            "dialogClass" === e && this.uiDialog.removeClass(this.options.dialogClass).addClass(t), this._superApply(arguments)
        }
    }), e.ui.dialog, e.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, i = this.options,
                n = i.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }, this.proportions = function() {
                return arguments.length ? void(t = arguments[0]) : t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(t) {
            e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(e) {
            for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1)
        },
        _destroy: function() {
            var t = e.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function(t, i) {
            if ("accept" === t) this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            };
            else if ("scope" === t) {
                var n = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(n), this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var n = i || e.ui.ddmanager.current,
                s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = e(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && b(n, e.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, t) ? (s = !0, !1) : void 0
            }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", t, this.ui(n)), this.element)))
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var b = e.ui.intersect = function() {
        function e(e, t, i) {
            return e >= t && t + i > e
        }
        return function(t, i, n, s) {
            if (!i.offset) return !1;
            var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
                r = (t.positionAbs || t.position.absolute).top + t.margins.top,
                o = a + t.helperProportions.width,
                l = r + t.helperProportions.height,
                h = i.offset.left,
                c = i.offset.top,
                d = h + i.proportions().width,
                u = c + i.proportions().height;
            switch (n) {
                case "fit":
                    return a >= h && d >= o && r >= c && u >= l;
                case "intersect":
                    return a + t.helperProportions.width / 2 > h && d > o - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > c && u > l - t.helperProportions.height / 2;
                case "pointer":
                    return e(s.pageY, c, i.proportions().height) && e(s.pageX, h, i.proportions().width);
                case "touch":
                    return (r >= c && u >= r || l >= c && u >= l || c > r && l > u) && (a >= h && d >= a || o >= h && d >= o || h > a && o > d);
                default:
                    return !1
            }
        }
    }();
    e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var n, s, a = e.ui.ddmanager.droppables[t.options.scope] || [],
                r = i ? i.type : null,
                o = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (n = 0; a.length > n; n++)
                if (!(a[n].options.disabled || t && !a[n].accept.call(a[n].element[0], t.currentItem || t.element))) {
                    for (s = 0; o.length > s; s++)
                        if (o[s] === a[n].element[0]) {
                            a[n].proportions().height = 0;
                            continue e
                        }
                    a[n].visible = "none" !== a[n].element.css("display"), a[n].visible && ("mousedown" === r && a[n]._activate.call(a[n], i), a[n].offset = a[n].element.offset(), a[n].proportions({
                        width: a[n].element[0].offsetWidth,
                        height: a[n].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, i) {
            var n = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && b(t, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), n
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").on("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, a, r = b(t, this, this.options.tolerance, i),
                        o = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    o && (this.options.greedy && (s = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function() {
                        return e(this).droppable("instance").options.scope === s
                    }), a.length && (n = e(a[0]).droppable("instance"), n.greedyChild = "isover" === o)), n && "isover" === o && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[o] = !0, this["isout" === o ? "isover" : "isout"] = !1, this["isover" === o ? "_over" : "_out"].call(this, i), n && "isout" === o && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }, e.uiBackCompat !== !1 && e.widget("ui.droppable", e.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }), e.ui.droppable, e.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = e("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function(e) {
            return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), void this._refreshValue())
        },
        _constrainedValue: function(e) {
            return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function(e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _setOption: function(e, t) {
            "max" === e && (t = Math.max(this.min, t)), this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e), this.element.attr("aria-disabled", e), this._toggleClass(null, "ui-state-disabled", !!e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    }), e.widget("ui.selectable", e.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                t.elementPos = e(t.element[0]).offset(), t.selectees = e(t.options.filter, t.element[0]), t._addClass(t.selectees, "ui-selectee"), t.selectees.each(function() {
                    var i = e(this),
                        n = i.offset(),
                        s = {
                            left: n.left - t.elementPos.left,
                            top: n.top - t.elementPos.top
                        };
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: s.left,
                        top: s.top,
                        right: s.left + i.outerWidth(),
                        bottom: s.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this._mouseInit(), this.helper = e("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this,
                n = this.options;
            this.opos = [t.pageX, t.pageY], this.elementPos = e(this.element[0]).offset(), this.options.disabled || (this.selectees = e(n.filter, this.element[0]), this._trigger("start", t), e(n.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var n = e.data(this, "selectable-item");
                n.startselected = !0, t.metaKey || t.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", t, {
                    unselecting: n.element
                }))
            }), e(t.target).parents().addBack().each(function() {
                var n, s = e.data(this, "selectable-item");
                return s ? (n = !t.metaKey && !t.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", t, {
                    selecting: s.element
                }) : i._trigger("unselecting", t, {
                    unselecting: s.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this,
                    s = this.options,
                    a = this.opos[0],
                    r = this.opos[1],
                    o = t.pageX,
                    l = t.pageY;
                return a > o && (i = o, o = a, a = i), r > l && (i = l, l = r, r = i), this.helper.css({
                    left: a,
                    top: r,
                    width: o - a,
                    height: l - r
                }), this.selectees.each(function() {
                    var i = e.data(this, "selectable-item"),
                        h = !1,
                        c = {};
                    i && i.element !== n.element[0] && (c.left = i.left + n.elementPos.left, c.right = i.right + n.elementPos.left, c.top = i.top + n.elementPos.top, c.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(c.left > o || a > c.right || c.top > l || r > c.bottom) : "fit" === s.tolerance && (h = c.left > a && o > c.right && c.top > r && l > c.bottom), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", t, {
                        selecting: i.element
                    }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", t, {
                        unselecting: i.element
                    }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", t, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                var n = e.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", t, {
                    unselected: n.element
                })
            }), e(".ui-selecting", this.element[0]).each(function() {
                var n = e.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", t, {
                    selected: n.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    }), e.widget("ui.selectmenu", [e.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var t = this.element.uniqueId().attr("id");
            this.ids = {
                element: t,
                button: t + "-button",
                menu: t + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = e()
        },
        _drawButton: function() {
            var t, i = this,
                n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(e) {
                    this.button.focus(), e.preventDefault()
                }
            }), this.element.hide(), this.button = e("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = e("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function() {
            var t = this;
            this.menu = e("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = e("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(e, i) {
                    e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e)
                },
                focus: function(e, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != t.focusIndex && n.index !== t.focusIndex && (t._trigger("focus", e, {
                        item: n
                    }), t.isOpen || t._select(n, e)), t.focusIndex = n.index, t.button.attr("aria-activedescendant", t.menuItems.eq(n.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }, this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var e, t = this.element.find("option");
            this.menu.empty(), this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, t.length && (e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(e) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e)))
        },
        _position: function() {
            this.menuWrap.position(e.extend({ of: this.button
            }, this.options.position))
        },
        close: function(e) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(t) {
            var i = e("<span>");
            return this._setText(i, t.label), this._addClass(i, "ui-selectmenu-text"), i
        },
        _renderMenu: function(t, i) {
            var n = this,
                s = "";
            e.each(i, function(i, a) {
                var r;
                a.optgroup !== s && (r = e("<li>", {
                    text: a.optgroup
                }), n._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(t), s = a.optgroup), n._renderItemData(t, a)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function(t, i) {
            var n = e("<li>"),
                s = e("<div>", {
                    title: i.element.attr("title")
                });
            return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(t)
        },
        _setText: function(e, t) {
            t ? e.text(t) : e.html("&#160;")
        },
        _move: function(e, t) {
            var i, n, s = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](s).eq(-1) : i[e + "All"](s).eq(0), n.length && this.menuInstance.focus(t, n)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(e) {
            this[this.isOpen ? "close" : "open"](e)
        },
        _setSelection: function() {
            var e;
            this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + e.ui.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var e;
                window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(e) {
                this._setSelection(), this._toggle(e)
            },
            keydown: function(t) {
                var i = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.TAB:
                    case e.ui.keyCode.ESCAPE:
                        this.close(t), i = !1;
                        break;
                    case e.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case e.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case e.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case e.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t), i = !1
                }
                i && t.preventDefault()
            }
        },
        _selectFocusedItem: function(e) {
            var t = this.menuItems.eq(this.focusIndex).parent("li");
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
        },
        _select: function(e, t) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = e.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(e)), this._setAria(e), this._trigger("select", t, {
                item: e
            }), e.index !== i && this._trigger("change", t, {
                item: e
            }), this.close(t)
        },
        _setAria: function(e) {
            var t = this.menuItems.eq(e.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            }), this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(e, t) {
            if ("icons" === e) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button)
            }
            this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "width" === e && this._resizeButton()
        },
        _setOptionDisabled: function(e) {
            this._super(e), this.menuInstance.option("disabled", e), this.button.attr("aria-disabled", e), this._toggleClass(this.button, null, "ui-state-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var e = this.options.width;
            return e === !1 ? void this.button.css("width", "") : (null === e && (e = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(e))
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var e = this._super();
            return e.disabled = this.element.prop("disabled"), e
        },
        _parseOptions: function(t) {
            var i = this,
                n = [];
            t.each(function(t, s) {
                n.push(i._parseOption(e(s), t))
            }), this.items = n
        },
        _parseOption: function(e, t) {
            var i = e.parent("optgroup");
            return {
                element: e,
                index: t,
                value: e.val(),
                label: e.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || e.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), e.widget("ui.slider", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, i, n = this.options,
                s = this.element.find(".ui-slider-handle"),
                a = "<span tabindex='0'></span>",
                r = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), t = s.length; i > t; t++) r.push(a);
            this.handles = s.add(e(r.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var t = this.options;
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = e("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, n, s, a, r, o, l, h, c = this,
                d = this.options;
            return !d.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(n - c.values(t));
                (s > i || s === i && (t === c._lastChangedValue || c.values(t) === d.min)) && (s = i, a = e(this), r = t)
            }), o = this._start(t, r), o !== !1 && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(a, null, "ui-state-active"), a.trigger("focus"), l = a.offset(), h = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - l.left - a.width() / 2,
                top: t.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, r, n), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function(e) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, i, n, s, a;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / t, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), a = this._valueMin() + n * s, this._trimAlignValue(a)
        },
        _uiHash: function(e, t, i) {
            var n = {
                handle: this.handles[e],
                handleIndex: e,
                value: void 0 !== t ? t : this.value()
            };
            return this._hasMultipleValues() && (n.value = void 0 !== t ? t : this.values(e), n.values = i || this.values()), n
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(e, t) {
            return this._trigger("start", e, this._uiHash(t))
        },
        _slide: function(e, t, i) {
            var n, s, a = this.value(),
                r = this.values();
            this._hasMultipleValues() && (s = this.values(t ? 0 : 1), a = this.values(t), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === t ? Math.min(s, i) : Math.max(s, i)), r[t] = i), i !== a && (n = this._trigger("slide", e, this._uiHash(t, i, r)), n !== !1 && (this._hasMultipleValues() ? this.values(t, i) : this.value(i)))
        },
        _stop: function(e, t) {
            this._trigger("stop", e, this._uiHash(t))
        },
        _change: function(e, t) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", e, this._uiHash(t)))
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(t, i) {
            var n, s, a;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
            for (n = this.options.values, s = arguments[0], a = 0; n.length > a; a += 1) n[a] = this._trimAlignValue(s[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var n, s = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (s = this.options.values.length), this._super(t, i), t) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(e) {
            this._super(e), this._toggleClass(null, "ui-state-disabled", !!e)
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, n;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                n = e - i;
            return 2 * Math.abs(i) >= t && (n += i > 0 ? t : -t), parseFloat(n.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max,
                t = this._valueMin(),
                i = this.options.step,
                n = Math.round((e - t) / i) * i;
            e = n + t, e > this.options.max && (e -= i), this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(e) {
            "vertical" === e && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === e && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var t, i, n, s, a, r = this.options.range,
                o = this.options,
                l = this,
                h = !this._animateOff && o.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(n) {
                i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[h ? "animate" : "css"](c, o.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, o.animate), 1 === n && l.range[h ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, o.animate), 1 === n && l.range[h ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))), t = i
            }) : (n = this.value(), s = this._valueMin(), a = this._valueMax(), i = a !== s ? 100 * ((n - s) / (a - s)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, o.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, o.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, o.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, o.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, o.animate))
        },
        _handleEvents: {
            keydown: function(t) {
                var i, n, s, a, r = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(e(t.target), null, "ui-state-active"), i = this._start(t, r), i === !1)) return
                }
                switch (a = this.options.step, n = s = this._hasMultipleValues() ? this.values(r) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (n === this._valueMax()) return;
                        s = this._trimAlignValue(n + a);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (n === this._valueMin()) return;
                        s = this._trimAlignValue(n - a)
                }
                this._slide(t, r, s)
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), this._removeClass(e(t.target), null, "ui-state-active"))
            }
        }
    }), e.widget("ui.sortable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(e, t, i) {
            return e >= t && t + i > e
        },
        _isFloating: function(e) {
            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function(e, t) {
            this._super(e, t), "handle" === e && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), e.each(this.items, function() {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, i) {
            var n = null,
                s = !1,
                a = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), e(t.target).parents().each(function() {
                return e.data(this, a.widgetName + "-item") === a ? (n = e(this), !1) : void 0
            }), e.data(t.target, a.widgetName + "-item") === a && (n = e(t.target)), !!n && (!(this.options.handle && !i && (e(this.options.handle, n).find("*").addBack().each(function() {
                this === t.target && (s = !0)
            }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(t, i, n) {
            var s, a, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", r.cursor), this.storedStylesheet = e("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(a)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                    this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var i, n, s, a, r = this.options,
                o = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (t.pageY - this.document.scrollTop() < r.scrollSensitivity ? o = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < r.scrollSensitivity && (o = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), t.pageX - this.document.scrollLeft() < r.scrollSensitivity ? o = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (o = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), o !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], s = n.item[0], a = this._intersectsWithPointer(n), a && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== s && !e.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !e.contains(this.element[0], s))) {
                    if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(t, n), this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        a = this.options.axis,
                        r = {};
                    a && "x" !== a || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new e.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
                n = [];
            return t = t || {}, e(i).each(function() {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }), !n.length && t.key && n.push(t.key + "="), n.join("&")
        },
        toArray: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
                n = [];
            return t = t || {}, i.each(function() {
                n.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                i = t + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                a = e.left,
                r = a + e.width,
                o = e.top,
                l = o + e.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                d = "x" === this.options.axis || n + h > o && l > n + h,
                u = "y" === this.options.axis || t + c > a && r > t + c,
                p = d && u;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > o && l > s - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(e) {
            var t, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                a = n && s;
            return !!a && (t = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1))
        },
        _intersectsWithSides: function(e) {
            var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                n = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && t || "up" === n && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function i() {
                o.push(this)
            }
            var n, s, a, r, o = [],
                l = [],
                h = this._connectWith();
            if (h && t)
                for (n = h.length - 1; n >= 0; n--)
                    for (a = e(h[n], this.document[0]), s = a.length - 1; s >= 0; s--) r = e.data(a[s], this.widgetFullName), r && r !== this && !r.options.disabled && l.push([e.isFunction(r.options.items) ? r.options.items.call(r.element) : e(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (l.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return e(o)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var i = 0; t.length > i; i++)
                    if (t[i] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var i, n, s, a, r, o, l, h, c = this.items,
                d = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                u = this._connectWith();
            if (u && this.ready)
                for (i = u.length - 1; i >= 0; i--)
                    for (s = e(u[i], this.document[0]), n = s.length - 1; n >= 0; n--) a = e.data(s[n], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                        item: this.currentItem
                    }) : e(a.options.items, a.element), a]), this.containers.push(a));
            for (i = d.length - 1; i >= 0; i--)
                for (r = d[i][1], o = d[i][0], n = 0, h = o.length; h > n; n++) l = e(o[n]), l.data(this.widgetName + "-item", r), c.push({
                    item: l,
                    instance: r,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(t) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, a;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item, t || (n.width = s.outerWidth(), n.height = s.outerHeight()), a = s.offset(), n.left = a.left, n.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var i, n = t.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = t.currentItem[0].nodeName.toLowerCase(),
                        s = e("<" + n + ">", t.document[0]);
                    return t._addClass(s, "ui-sortable-placeholder", i || t.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(s)) : "tr" === n ? t._createTrPlaceholder(t.currentItem, s) : "img" === n && s.attr("src", t.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function(e, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }), t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function(t, i) {
            var n = this;
            t.children().each(function() {
                e("<td>&#160;</td>", n.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(t) {
            var i, n, s, a, r, o, l, h, c, d, u = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (u && e.contains(this.containers[i].element[0], u.element[0])) continue;
                        u = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (u)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (s = 1e4, a = null, c = u.floating || this._isFloating(this.currentItem), r = c ? "left" : "top", o = c ? "width" : "height", d = c ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) e.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r], h = !1, t[d] - l > this.items[n][o] / 2 && (h = !0), s > Math.abs(t[d] - l) && (s = Math.abs(t[d] - l), a = this.items[n], this.direction = h ? "up" : "down"));
                    if (!a && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var i = this.options,
                n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (t = e(s.containment)[0], i = e(s.containment).offset(), n = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var n = "absolute" === t ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function(t) {
            var i, n, s = this.options,
                a = t.pageX,
                r = t.pageY,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(o[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((a - this.originalPageX) / s.grid[0]) * s.grid[0], a = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : o.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(e, t, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function(e, t) {
            function i(e, t, i) {
                return function(n) {
                    i._trigger(e, n, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && s.push(function(e) {
                    this._trigger("receive", e, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || s.push(function(e) {
                    this._trigger("update", e, this._uiHash())
                }), this !== this.currentContainer && (t || (s.push(function(e) {
                    this._trigger("remove", e, this._uiHash())
                }), s.push(function(e) {
                    return function(t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function(e) {
                    return function(t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) t || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                for (n = 0; s.length > n; n++) s[n].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    }), e.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = this._super(),
                i = this.element;
            return e.each(["min", "max", "step"], function(e, n) {
                var s = i.attr(n);
                null != s && s.length && (t[n] = s)
            }), t
        },
        _events: {
            keydown: function(e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(e) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", e)))
            },
            mousewheel: function(e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(e)
                    }, 100), e.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function i() {
                    var t = this.element[0] === e.ui.safeActiveElement(this.document[0]);
                    t || (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                        this.previous = n
                    }))
                }
                var n;
                n = this.element[0] === e.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) !== !1 && void this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(t) {
            var i = this.options,
                n = e.ui.keyCode;
            switch (t.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, t), !0;
                case n.DOWN:
                    return this._repeat(null, -1, t), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, t), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, t), !0
            }
            return !1
        },
        _start: function(e) {
            return !(!this.spinning && this._trigger("start", e) === !1) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function(e, t, i) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, t, i)
            }, e), this._spin(t * this.options.step, i)
        },
        _spin: function(e, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(t) {
            var i = this.options.incremental;
            return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _adjustValue: function(e) {
            var t, i, n = this.options;
            return t = null !== n.min ? n.min : 0, i = e - t, i = Math.round(i / n.step) * n.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== n.max && e > n.max ? n.max : null !== n.min && n.min > e ? n.min : e
        },
        _stop: function(e) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
        },
        _setOption: function(e, t) {
            var i, n, s;
            return "culture" === e || "numberFormat" === e ? (i = this._parse(this.element.val()), this.options[e] = t, void this.element.val(this._format(i))) : (("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, t.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, t.down)), void this._super(e, t))
        },
        _setOptionDisabled: function(e) {
            this._super(e), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable")
        },
        _setOptions: o(function(e) {
            this._super(e)
        }),
        _parse: function(e) {
            return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
        },
        _format: function(e) {
            return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var e = this.value();
            return null !== e && e === this._adjustValue(e)
        },
        _value: function(e, t) {
            var i;
            "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: o(function(e) {
            this._stepUp(e)
        }),
        _stepUp: function(e) {
            this._start() && (this._spin((e || 1) * this.options.step), this._stop())
        },
        stepDown: o(function(e) {
            this._stepDown(e)
        }),
        _stepDown: function(e) {
            this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
        },
        pageUp: o(function(e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: o(function(e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function(e) {
            return arguments.length ? void o(this._value).call(this, e) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    }), e.uiBackCompat !== !1 && e.widget("ui.spinner", e.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a></a><a></a>"
        }
    }), e.ui.spinner, e.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var e = /#.*$/;
            return function(t) {
                var i, n;
                i = t.href.replace(e, ""), n = location.href.replace(e, "");
                try {
                    i = decodeURIComponent(i)
                } catch (e) {}
                try {
                    n = decodeURIComponent(n)
                } catch (e) {}
                return t.hash.length > 1 && i === n
            }
        }(),
        _create: function() {
            var t = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return t.tabs.index(e)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                i = this.options.collapsible,
                n = location.hash.substring(1);
            return null === t && (n && this.tabs.each(function(i, s) {
                return e(s).attr("aria-controls") === n ? (t = i, !1) : void 0
            }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = !!this.tabs.length && 0)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = !i && 0)), !i && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function(t) {
            var i = e(e.ui.safeActiveElement(this.document[0])).closest("li"),
                n = this.tabs.index(i),
                s = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        n++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        s = !1, n--;
                        break;
                    case e.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case e.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, i) {
            function n() {
                return t > s && (t = 0), 0 > t && (t = s), t
            }
            for (var s = this.tabs.length - 1; - 1 !== e.inArray(n(), this.options.disabled);) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).trigger("focus"), e
        },
        _setOption: function(e, t) {
            return "active" === e ? void this._activate(t) : (this._super(e, t), "collapsible" === e && (this._toggleClass("ui-tabs-collapsible", null, t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), void("heightStyle" === e && this._setupHeightStyle(t)))
        },
        _sanitizeSelector: function(e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                i = this.tablist.children(":has(a[href])");
            t.disabled = e.map(i.filter(".ui-state-disabled"), function(e) {
                return i.index(e)
            }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this,
                i = this.tabs,
                n = this.anchors,
                s = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return e("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = e(), this.anchors.each(function(i, n) {
                var s, a, r, o = e(n).uniqueId().attr("id"),
                    l = e(n).closest("li"),
                    h = l.attr("aria-controls");
                t._isLocal(n) ? (s = n.hash, r = s.substring(1), a = t.element.find(t._sanitizeSelector(s))) : (r = l.attr("aria-controls") || e({}).uniqueId()[0].id, s = "#" + r, a = t.element.find(s), a.length || (a = t._createPanel(r), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                    "aria-controls": r,
                    "aria-labelledby": o
                }), a.attr("aria-labelledby", o)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return e("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var i, n, s;
            for (e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), s = 0; n = this.tabs[s]; s++) i = e(n), t === !0 || -1 !== e.inArray(s, t) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, t === !0)
        },
        _setupEvents: function(t) {
            var i = {};
            t && e.each(t.split(" "), function(e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(e) {
                    e.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, n = this.element.parent();
            "fill" === t ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    n = t.css("position");
                "absolute" !== n && "fixed" !== n && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= e(this).outerHeight(!0)
            }), this.panels.each(function() {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                i = Math.max(i, e(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var i = this.options,
                n = this.active,
                s = e(t.currentTarget),
                a = s.closest("li"),
                r = a[0] === n[0],
                o = r && i.collapsible,
                l = o ? e() : this._getPanelForTab(a),
                h = n.length ? this._getPanelForTab(n) : e(),
                c = {
                    oldTab: n,
                    oldPanel: h,
                    newTab: o ? e() : a,
                    newPanel: l
                };
            t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", t, c) === !1 || (i.active = !o && this.tabs.index(a), this.active = r ? e() : a, this.xhr && this.xhr.abort(), h.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(a), t), this._toggle(t, c))
        },
        _toggle: function(t, i) {
            function n() {
                a.running = !1, a._trigger("activate", t, i)
            }

            function s() {
                a._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && a.options.show ? a._show(r, a.options.show, n) : (r.show(), n())
            }
            var a = this,
                r = i.newPanel,
                o = i.oldPanel;
            this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function() {
                a._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.hide(), s()), o.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), r.length && o.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var i, n = this._findActive(t);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + e.ui.escapeSelector(t) + "']"))), t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function() {
                var t = e(this),
                    i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(t) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function(e) {
                return e !== t ? e : null
            }) : e.map(this.tabs, function(e, i) {
                return i !== t ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function(t) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === t) i = !0;
                else {
                    if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                    i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var n = this,
                s = this.tabs.eq(t),
                a = s.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(s),
                o = {
                    tab: s,
                    panel: r
                },
                l = function(e, t) {
                    "abort" === t && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), r.removeAttr("aria-busy"), e === n.xhr && delete n.xhr
                };
            this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, o)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function(e, t, s) {
                setTimeout(function() {
                    r.html(e), n._trigger("load", i, o), l(s, t)
                }, 1)
            }).fail(function(e, t) {
                setTimeout(function() {
                    l(e, t)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, n) {
            var s = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, a) {
                    return s._trigger("beforeLoad", i, e.extend({
                        jqXHR: t,
                        ajaxSettings: a
                    }, n))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), e.uiBackCompat !== !1 && e.widget("ui.tabs", e.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), e.ui.tabs, e.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, i) {
            var n = (t.attr("aria-describedby") || "").split(/\s+/);
            n.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(n.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var i = t.data("ui-tooltip-id"),
                n = (t.attr("aria-describedby") || "").split(/\s+/),
                s = e.inArray(i, n); - 1 !== s && n.splice(s, 1), t.removeData("ui-tooltip-id"), n = e.trim(n.join(" ")), n ? t.attr("aria-describedby", n) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = e("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = e([])
        },
        _setOption: function(t, i) {
            var n = this;
            this._super(t, i), "content" === t && e.each(this.tooltips, function(e, t) {
                n._updateContent(t.element)
            })
        },
        _setOptionDisabled: function(e) {
            this[e ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var t = this;
            e.each(this.tooltips, function(i, n) {
                var s = e.Event("blur");
                s.target = s.currentTarget = n.element[0], t.close(s, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var t = e(this);
                return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            }), this.disabledTitles = e([])
        },
        open: function(t) {
            var i = this,
                n = e(t ? t.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), t && "mouseover" === t.type && n.parents().each(function() {
                var t, n = e(this);
                n.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: n.attr("title")
                }, n.attr("title", ""))
            }), this._registerCloseHandlers(t, n), this._updateContent(n, t))
        },
        _updateContent: function(e, t) {
            var i, n = this.options.content,
                s = this,
                a = t ? t.type : null;
            return "string" == typeof n || n.nodeType || n.jquery ? this._open(t, e, n) : (i = n.call(e[0], function(i) {
                s._delay(function() {
                    e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i))
                })
            }), void(i && this._open(t, e, i)))
        },
        _open: function(t, i, n) {
            function s(e) {
                h.of = e, r.is(":hidden") || r.position(h)
            }
            var a, r, o, l, h = e.extend({}, this.options.position);
            if (n) {
                if (a = this._find(i)) return void a.tooltip.find(".ui-tooltip-content").html(n);
                i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), r = a.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = e("<div>").html(r.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: s
                }), s(t)) : r.position(e.extend({ of: i
                }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (o = this.delayedShow = setInterval(function() {
                    r.is(":visible") && (s(h.of), clearInterval(o))
                }, e.fx.interval)), this._trigger("open", t, {
                    tooltip: r
                })
            }
        },
        _registerCloseHandlers: function(t, i) {
            var n = {
                keyup: function(t) {
                    if (t.keyCode === e.ui.keyCode.ESCAPE) {
                        var n = e.Event(t);
                        n.currentTarget = i[0], this.close(n, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (n.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            }), t && "mouseover" !== t.type || (n.mouseleave = "close"), t && "focusin" !== t.type || (n.focusout = "close"), this._on(!0, i, n)
        },
        close: function(t) {
            var i, n = this,
                s = e(t ? t.currentTarget : this.element),
                a = this._find(s);
            return a ? (i = a.tooltip, void(a.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                n._removeTooltip(e(this))
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, i) {
                e(i.element).attr("title", i.title), delete n.parents[t]
            }), a.closing = !0, this._trigger("close", t, {
                tooltip: i
            }), a.hiding || (a.closing = !1)))) : void s.removeData("ui-tooltip-open")
        },
        _tooltip: function(t) {
            var i = e("<div>").attr("role", "tooltip"),
                n = e("<div>").appendTo(i),
                s = i.uniqueId().attr("id");
            return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(t)), this.tooltips[s] = {
                element: t,
                tooltip: i
            }
        },
        _find: function(e) {
            var t = e.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        },
        _removeTooltip: function(e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        },
        _appendTo: function(e) {
            var t = e.closest(".ui-front, dialog");
            return t.length || (t = this.document[0].body), t
        },
        _destroy: function() {
            var t = this;
            e.each(this.tooltips, function(i, n) {
                var s = e.Event("blur"),
                    a = n.element;
                s.target = s.currentTarget = a[0], t.close(s, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), e.uiBackCompat !== !1 && e.widget("ui.tooltip", e.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var e = this._superApply(arguments);
            return this.options.tooltipClass && e.tooltip.addClass(this.options.tooltipClass), e
        }
    }), e.ui.tooltip
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = e.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                i.submitButton = t.currentTarget, e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.on("submit.validate", function(t) {
                function n() {
                    var n, s;
                    return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (s = i.settings.submitHandler.call(i, i.currentForm, t), n && n.remove(), void 0 !== s && s)
                }
                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            var t, i, n;
            return e(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, i = e(this[0].form).validate(), this.each(function() {
                t = i.element(this) && t, t || (n = n.concat(i.errorList))
            }), i.errorList = n), t
        },
        rules: function(t, i) {
            var n, s, a, r, o, l, h = this[0],
                c = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != h && (!h.form && c && (h.form = this.closest("form")[0], h.name = this.attr("name")), null != h.form)) {
                if (t) switch (n = e.data(h.form, "validator").settings, s = n.rules, a = e.validator.staticRules(h), t) {
                    case "add":
                        e.extend(a, e.validator.normalizeRule(i)), delete a.messages, s[h.name] = a, i.messages && (n.messages[h.name] = e.extend(n.messages[h.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, e.each(i.split(/\s/), function(e, t) {
                            l[t] = a[t], delete a[t]
                        }), l) : (delete s[h.name], a)
                }
                return r = e.validator.normalizeRules(e.extend({}, e.validator.classRules(h), e.validator.attributeRules(h), e.validator.dataRules(h), e.validator.staticRules(h)), h), r.required && (o = r.required, delete r.required, r = e.extend({
                    required: o
                }, r)), r.remote && (o = r.remote, delete r.remote, r = e.extend(r, {
                    remote: o
                })), r
            }
        }
    }), e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            var i = e(t).val();
            return null !== i && !!e.trim("" + i)
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function(t, i) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
    }, e.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = e.makeArray(arguments);
            return i.unshift(t), e.validator.format.apply(this, i)
        } : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function(e, i) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return i
            })
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, i) {
                var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === i.which && "" === this.elementValue(t) || e.inArray(i.keyCode, n) !== -1 || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, i, n) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
            },
            unhighlight: function(t, i, n) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var i = "undefined" != typeof e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                    if (!this.form && i && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name")), n === this.form) {
                        var s = e.data(this.form, "validator"),
                            a = "on" + t.type.replace(/^validate/, ""),
                            r = s.settings;
                        r[a] && !e(this).is(r.ignore) && r[a].call(s, this, t)
                    }
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.currentForm,
                    s = this.groups = {};
                e.each(this.settings.groups, function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/)), e.each(i, function(e, i) {
                        s[i] = t
                    })
                }), i = this.settings.rules, e.each(i, function(t, n) {
                    i[t] = e.validator.normalizeRule(n)
                }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var i, n, s = this.clean(t),
                    a = this.validationTargetFor(s),
                    r = this,
                    o = !0;
                return void 0 === a ? delete this.invalid[s.name] : (this.prepareElement(a), this.currentElements = e(a), n = this.groups[a.name], n && e.each(this.groups, function(e, t) {
                    t === n && e !== a.name && (s = r.validationTargetFor(r.clean(r.findByName(e))), s && s.name in r.invalid && (r.currentElements.push(s), o = r.check(s) && o))
                }), i = this.check(a) !== !1, o = o && i, i ? this.invalid[a.name] = !1 : this.invalid[a.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !i)), o
            },
            showErrors: function(t) {
                if (t) {
                    var i = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: i.findByName(t)[0]
                        }
                    }), this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, i = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && e[t] !== !1 && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var n = this.name || e(this).attr("name"),
                        s = "undefined" != typeof e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                    return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this), s && (this.form = e(this).closest("form")[0], this.name = n), !(this.form !== t.currentForm || n in i || !t.objectLength(e(this).rules()) || (i[n] = !0, 0))
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var i, n, s = e(t),
                    a = t.type,
                    r = "undefined" != typeof s.attr("contenteditable") && "false" !== s.attr("contenteditable");
                return "radio" === a || "checkbox" === a ? this.findByName(t.name).filter(":checked").val() : "number" === a && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : s.val() : (i = r ? s.text() : s.val(), "file" === a ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/"), n >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\"), n >= 0 ? i.substr(n + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var i, n, s, a, r = e(t).rules(),
                    o = e.map(r, function(e, t) {
                        return t
                    }).length,
                    l = !1,
                    h = this.elementValue(t);
                "function" == typeof r.normalizer ? a = r.normalizer : "function" == typeof this.settings.normalizer && (a = this.settings.normalizer), a && (h = a.call(t, h), delete r.normalizer);
                for (n in r) {
                    s = {
                        method: n,
                        parameters: r[n]
                    };
                    try {
                        if (i = e.validator.methods[n].call(this, h, t, s.parameters), "dependency-mismatch" === i && 1 === o) {
                            l = !0;
                            continue
                        }
                        if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!i) return this.formatAndAdd(t, s), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method."), e
                    }
                }
                if (!l) return this.objectLength(r) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(t, i) {
                "string" == typeof i && (i = {
                    method: i
                });
                var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    s = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, i.parameters, t) : s.test(n) && (n = e.validator.format(n.replace(s, "{$1}"), i.parameters)), n
            },
            formatAndAdd: function(e, t) {
                var i = this.defaultMessage(e, t);
                this.errorList.push({
                    message: i,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = i, this.submitted[e.name] = i
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var n, s, a, r, o = this.errorsFor(t),
                    l = this.idOrName(t),
                    h = e(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (o = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), n = o, this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, e(t)) : n.insertAfter(t), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (a = o.attr("id"), h ? h.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (h += " " + a) : h = a, e(t).attr("aria-describedby", h), s = this.groups[t.name], s && (r = this, e.each(r.groups, function(t, i) {
                    i === s && e("[name='" + r.escapeCssMeta(t) + "']", r.currentForm).attr("aria-describedby", o.attr("id"))
                })))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function(t) {
                var i = this.escapeCssMeta(this.idOrName(t)),
                    n = e(t).attr("aria-describedby"),
                    s = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (s = s + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(s)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(t, i) {
                    return !!e(t, i.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t, i) {
                return i = "string" == typeof i && i || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: i
                    })
                })
            },
            destroy: function() {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
                n = e(t).attr("class");
            return n && e.each(n.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function(e, t, i, n) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
        },
        attributeRules: function(t) {
            var i, n, s = {},
                a = e(t),
                r = t.getAttribute("type");
            for (i in e.validator.methods) "required" === i ? (n = t.getAttribute(i), "" === n && (n = !0), n = !!n) : n = a.attr(i), this.normalizeAttributeRule(s, r, i, n);
            return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s
        },
        dataRules: function(t) {
            var i, n, s = {},
                a = e(t),
                r = t.getAttribute("type");
            for (i in e.validator.methods) n = a.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), "" === n && (n = !0), this.normalizeAttributeRule(s, r, i, n);
            return s
        },
        staticRules: function(t) {
            var i = {},
                n = e.data(t.form, "validator");
            return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return e.each(t, function(n, s) {
                if (s === !1) return void delete t[n];
                if (s.param || s.depends) {
                    var a = !0;
                    switch (typeof s.depends) {
                        case "string":
                            a = !!e(s.depends, i.form).length;
                            break;
                        case "function":
                            a = s.depends.call(i, i)
                    }
                    a ? t[n] = void 0 === s.param || s.param : (e.data(i.form, "validator").resetElements(e(i)), delete t[n])
                }
            }), e.each(t, function(n, s) {
                t[n] = e.isFunction(s) && "normalizer" !== n ? s(i) : s
            }), e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function() {
                var i;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                    t[this] = [Number(i[0]), Number(i[1])]))
            }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                e.each(t.split(/\s/), function() {
                    i[this] = !0
                }), t = i
            }
            return t
        },
        addMethod: function(t, i, n) {
            e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, n) {
                if (!this.depend(n, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var s = e(i).val();
                    return s && s.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : void 0 !== t && null !== t && t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function() {
                var e = !1;
                return function(t, i) {
                    return e || (e = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(i) || !/Invalid|NaN/.test(new Date(t).toString())
                }
            }(),
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(t, i, n) {
                var s = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || s >= n
            },
            maxlength: function(t, i, n) {
                var s = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || s <= n
            },
            rangelength: function(t, i, n) {
                var s = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || s >= n[0] && s <= n[1]
            },
            min: function(e, t, i) {
                return this.optional(t) || e >= i
            },
            max: function(e, t, i) {
                return this.optional(t) || e <= i
            },
            range: function(e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1]
            },
            step: function(t, i, n) {
                var s, a = e(i).attr("type"),
                    r = "Step attribute on input type " + a + " is not supported.",
                    o = ["text", "number", "range"],
                    l = new RegExp("\\b" + a + "\\b"),
                    h = a && !l.test(o.join()),
                    c = function(e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        return t && t[1] ? t[1].length : 0
                    },
                    d = function(e) {
                        return Math.round(e * Math.pow(10, s))
                    },
                    u = !0;
                if (h) throw new Error(r);
                return s = c(n), (c(t) > s || d(t) % d(n) !== 0) && (u = !1), this.optional(i) || u
            },
            equalTo: function(t, i, n) {
                var s = e(n);
                return this.settings.onfocusout && s.not(".validate-equalTo-blur").length && s.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    e(i).valid()
                }), t === s.val()
            },
            remote: function(t, i, n, s) {
                if (this.optional(i)) return "dependency-mismatch";
                s = "string" == typeof s && s || "remote";
                var a, r, o, l = this.previousValue(i, s);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][s], this.settings.messages[i.name][s] = l.message, n = "string" == typeof n && {
                    url: n
                } || n, o = e.param(e.extend({
                    data: t
                }, n.data)), l.old === o ? l.valid : (l.old = o, a = this, this.startRequest(i), r = {}, r[i.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: r,
                    context: a.currentForm,
                    success: function(e) {
                        var n, r, o, h = e === !0 || "true" === e;
                        a.settings.messages[i.name][s] = l.originalMessage, h ? (o = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(i), a.formSubmitted = o, a.successList.push(i), a.invalid[i.name] = !1, a.showErrors()) : (n = {}, r = e || a.defaultMessage(i, {
                            method: s,
                            parameters: t
                        }), n[i.name] = l.message = r, a.invalid[i.name] = !0, a.showErrors(n)), l.valid = h, a.stopRequest(i, h)
                    }
                }, n)), "pending")
            }
        }
    });
    var t, i = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, n) {
        var s = e.port;
        "abort" === e.mode && (i[s] && i[s].abort(), i[s] = n)
    }) : (t = e.ajax, e.ajax = function(n) {
        var s = ("mode" in n ? n : e.ajaxSettings).mode,
            a = ("port" in n ? n : e.ajaxSettings).port;
        return "abort" === s ? (i[a] && i[a].abort(), i[a] = t.apply(this, arguments), i[a]) : t.apply(this, arguments)
    }), e
}),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var i, n = e(document);
    e.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = i.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken())
        },
        fire: function(t, i, n) {
            var s = e.Event(i);
            return t.trigger(s, n), s.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function(n) {
            var s, a, r, o, l, h;
            if (i.fire(n, "ajax:before")) {
                if (o = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    s = n.data("ujs:submit-button-formmethod") || n.attr("method"), a = n.data("ujs:submit-button-formaction") || n.attr("action"), r = e(n[0]).serializeArray();
                    var c = n.data("ujs:submit-button");
                    c && (r.push(c), n.data("ujs:submit-button", null)), n.data("ujs:submit-button-formmethod", null), n.data("ujs:submit-button-formaction", null)
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), a = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", a = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : (s = n.data("method"), a = i.href(n), r = n.data("params") || null);
                return h = {
                    type: s || "GET",
                    data: r,
                    dataType: l,
                    beforeSend: function(e, s) {
                        return s.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), !!i.fire(n, "ajax:beforeSend", [e, s]) && void n.trigger("ajax:send", e)
                    },
                    success: function(e, t, i) {
                        n.trigger("ajax:success", [e, t, i])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, i) {
                        n.trigger("ajax:error", [e, t, i])
                    },
                    crossDomain: i.isCrossDomain(a)
                }, o && (h.xhrFields = {
                    withCredentials: o
                }), a && (h.url = a), i.ajax(h)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var i = document.createElement("a");
            try {
                return i.href = e, i.href = i.href, !((!i.protocol || ":" === i.protocol) && !i.host || t.protocol + "//" + t.host == i.protocol + "//" + i.host)
            } catch (e) {
                return !0
            }
        },
        handleMethod: function(n) {
            var s = i.href(n),
                a = n.data("method"),
                r = n.attr("target"),
                o = i.csrfToken(),
                l = i.csrfParam(),
                h = e('<form method="post" action="' + s + '"></form>'),
                c = '<input name="_method" value="' + a + '" type="hidden" />';
            l === t || o === t || i.isCrossDomain(s) || (c += '<input name="' + l + '" value="' + o + '" type="hidden" />'), r && h.attr("target", r), h.hide().append(c).appendTo("body"), h.submit()
        },
        formElements: function(t, i) {
            return t.is("form") ? e(t[0].elements).filter(i) : t.find(i)
        },
        disableFormElements: function(t) {
            i.formElements(t, i.disableSelector).each(function() {
                i.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var i, n;
            i = e.is("button") ? "html" : "val", n = e.data("disable-with"), n !== t && (e.data("ujs:enable-with", e[i]()), e[i](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            i.formElements(t, i.enableSelector).each(function() {
                i.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var i = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[i](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, n = e.data("confirm"),
                s = !1;
            if (!n) return !0;
            if (i.fire(e, "confirm")) {
                try {
                    s = i.confirm(n)
                } catch (e) {
                    (console.error || console.log).call(console, e.stack || e)
                }
                t = i.fire(e, "confirm:complete", [s])
            }
            return s && t
        },
        blankInputs: function(t, i, n) {
            var s, a, r, o, l = e(),
                h = i || "input,textarea",
                c = t.find(h),
                d = {};
            return c.each(function() {
                s = e(this), s.is("input[type=radio]") ? (o = s.attr("name"), d[o] || (0 === t.find('input[type=radio]:checked[name="' + o + '"]').length && (r = t.find('input[type=radio][name="' + o + '"]'), l = l.add(r)), d[o] = o)) : (a = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : !!s.val(), a === n && (l = l.add(s)))
            }), !!l.length && l
        },
        nonBlankInputs: function(e, t) {
            return i.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var n = e.data("disable-with");
            n !== t && (e.data("ujs:enable-with", e.html()), e.html(n)), e.bind("click.railsDisable", function(e) {
                return i.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, i.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || i.CSRFProtection(n)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), n.on("ajax:complete", i.linkDisableSelector, function() {
        i.enableElement(e(this))
    }), n.on("ajax:complete", i.buttonDisableSelector, function() {
        i.enableFormElement(e(this))
    }), n.on("click.rails", i.linkClickSelector, function(t) {
        var n = e(this),
            s = n.data("method"),
            a = n.data("params"),
            r = t.metaKey || t.ctrlKey;
        if (!i.allowAction(n)) return i.stopEverything(t);
        if (!r && n.is(i.linkDisableSelector) && i.disableElement(n), i.isRemote(n)) {
            if (r && (!s || "GET" === s) && !a) return !0;
            var o = i.handleRemote(n);
            return o === !1 ? i.enableElement(n) : o.fail(function() {
                i.enableElement(n)
            }), !1
        }
        return s ? (i.handleMethod(n), !1) : void 0
    }), n.on("click.rails", i.buttonClickSelector, function(t) {
        var n = e(this);
        if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(t);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var s = i.handleRemote(n);
        return s === !1 ? i.enableFormElement(n) : s.fail(function() {
            i.enableFormElement(n)
        }), !1
    }), n.on("change.rails", i.inputChangeSelector, function(t) {
        var n = e(this);
        return i.allowAction(n) && i.isRemote(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), n.on("submit.rails", i.formSubmitSelector, function(n) {
        var s, a, r = e(this),
            o = i.isRemote(r);
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (r.attr("novalidate") === t)
            if (r.data("ujs:formnovalidate-button") === t) {
                if (s = i.blankInputs(r, i.requiredInputSelector, !1), s && i.fire(r, "ajax:aborted:required", [s])) return i.stopEverything(n)
            } else r.data("ujs:formnovalidate-button", t);
        if (o) {
            if (a = i.nonBlankInputs(r, i.fileInputSelector)) {
                setTimeout(function() {
                    i.disableFormElements(r)
                }, 13);
                var l = i.fire(r, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    i.enableFormElements(r)
                }, 13), l
            }
            return i.handleRemote(r), !1
        }
        setTimeout(function() {
            i.disableFormElements(r)
        }, 13)
    }), n.on("click.rails", i.formInputClickSelector, function(t) {
        var n = e(this);
        if (!i.allowAction(n)) return i.stopEverything(t);
        var s = n.attr("name"),
            a = s ? {
                name: s,
                value: n.val()
            } : null,
            r = n.closest("form");
        0 === r.length && (r = e("#" + n.attr("form"))), r.data("ujs:submit-button", a), r.data("ujs:formnovalidate-button", n.attr("formnovalidate")), r.data("ujs:submit-button-formaction", n.attr("formaction")), r.data("ujs:submit-button-formmethod", n.attr("formmethod"))
    }), n.on("ajax:send.rails", i.formSubmitSelector, function(t) {
        this === t.target && i.disableFormElements(e(this))
    }), n.on("ajax:complete.rails", i.formSubmitSelector, function(t) {
        this === t.target && i.enableFormElements(e(this))
    }), e(function() {
        i.refreshCSRFTokens()
    }))
}(jQuery), ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        var i = [],
            r = 0;
        if (e && !t && e instanceof a) return e;
        if (e)
            if ("string" == typeof e) {
                var o, l, h = e.trim();
                if (0 <= h.indexOf("<") && 0 <= h.indexOf(">")) {
                    var c = "div";
                    for (0 === h.indexOf("<li") && (c = "ul"), 0 === h.indexOf("<tr") && (c = "tbody"), 0 !== h.indexOf("<td") && 0 !== h.indexOf("<th") || (c = "tr"), 0 === h.indexOf("<tbody") && (c = "table"), 0 === h.indexOf("<option") && (c = "select"), (l = n.createElement(c)).innerHTML = h, r = 0; r < l.childNodes.length; r += 1) i.push(l.childNodes[r])
                } else
                    for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || n).querySelectorAll(e.trim()) : [n.getElementById(e.trim().split("#")[1])], r = 0; r < o.length; r += 1) o[r] && i.push(o[r])
            } else if (e.nodeType || e === s || e === n) i.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (r = 0; r < e.length; r += 1) i.push(e[r]);
        return new a(i)
    }

    function t(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    function i() {
        var e = this,
            t = e.params,
            i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var n = e.allowSlideNext,
                s = e.allowSlidePrev,
                a = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }
    }
    var n = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        s = "undefined" == typeof window ? {
            document: n,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        a = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };
    e.fn = a.prototype, e.Class = a, e.Dom7 = a;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === i.length) this[n].setAttribute(e, t);
                else
                    for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var s = i.getAttribute("data-" + e);
                return s || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            function t(t) {
                var i = t.target;
                if (i) {
                    var n = t.target.dom7EventData || [];
                    if (n.indexOf(t) < 0 && n.unshift(t), e(i).is(o)) l.apply(i, n);
                    else
                        for (var s = e(i).parents(), a = 0; a < s.length; a += 1) e(s[a]).is(o) && l.apply(s[a], n)
                }
            }

            function i(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), l.apply(this, t)
            }
            for (var n, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            var r = s[0],
                o = s[1],
                l = s[2],
                h = s[3];
            "function" == typeof s[1] && (r = (n = s)[0], l = n[1], h = n[2], o = void 0), h || (h = !1);
            for (var c, d = r.split(" "), u = 0; u < this.length; u += 1) {
                var p = this[u];
                if (o)
                    for (c = 0; c < d.length; c += 1) {
                        var f = d[c];
                        p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                            listener: l,
                            proxyListener: t
                        }), p.addEventListener(f, t, h)
                    } else
                        for (c = 0; c < d.length; c += 1) {
                            var m = d[c];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({
                                listener: l,
                                proxyListener: i
                            }), p.addEventListener(m, i, h)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var n = t[0],
                s = t[1],
                a = t[2],
                r = t[3];
            "function" == typeof t[1] && (n = (e = t)[0], a = e[1], r = e[2], s = void 0), r || (r = !1);
            for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                for (var h = o[l], c = 0; c < this.length; c += 1) {
                    var d = this[c],
                        u = void 0;
                    if (!s && d.dom7Listeners ? u = d.dom7Listeners[h] : s && d.dom7LiveListeners && (u = d.dom7LiveListeners[h]), u && u.length)
                        for (var p = u.length - 1; 0 <= p; p -= 1) {
                            var f = u[p];
                            a && f.listener === a ? (d.removeEventListener(h, f.proxyListener, r), u.splice(p, 1)) : a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a ? (d.removeEventListener(h, f.proxyListener, r), u.splice(p, 1)) : a || (d.removeEventListener(h, f.proxyListener, r), u.splice(p, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = e[0].split(" "), a = e[1], r = 0; r < i.length; r += 1)
                for (var o = i[r], l = 0; l < this.length; l += 1) {
                    var h = this[l],
                        c = void 0;
                    try {
                        c = new s.CustomEvent(o, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (c = n.createEvent("Event")).initEvent(o, !0, !0), c.detail = a
                    }
                    h.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }), h.dispatchEvent(c), h.dom7EventData = [], delete h.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            function t(a) {
                if (a.target === this)
                    for (e.call(this, a), i = 0; i < n.length; i += 1) s.off(n[i], t)
            }
            var i, n = ["webkitTransitionEnd", "transitionend"],
                s = this;
            if (e)
                for (i = 0; i < n.length; i += 1) s.on(n[i], t);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    i = n.body,
                    a = e.clientTop || i.clientTop || 0,
                    r = e.clientLeft || i.clientLeft || 0,
                    o = e === s ? s.scrollY : e.scrollTop,
                    l = e === s ? s.scrollX : e.scrollLeft;
                return {
                    top: t.top + o - a,
                    left: t.left + l - r
                }
            }
            return null
        },
        css: function(e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var n in e) this[i].style[n] = e[n];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(t) {
            var i, r, o = this[0];
            if (!o || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (o.matches) return o.matches(t);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(t);
                if (o.msMatchesSelector) return o.msMatchesSelector(t);
                for (i = e(t), r = 0; r < i.length; r += 1)
                    if (i[r] === o) return !0;
                return !1
            }
            if (t === n) return o === n;
            if (t === s) return o === s;
            if (t.nodeType || t instanceof a) {
                for (i = t.nodeType ? [t] : t, r = 0; r < i.length; r += 1)
                    if (i[r] === o) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, i = this.length;
            return new a(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            for (var s = 0; s < t.length; s += 1) {
                e = t[s];
                for (var r = 0; r < this.length; r += 1)
                    if ("string" == typeof e) {
                        var o = n.createElement("div");
                        for (o.innerHTML = e; o.firstChild;) this[r].appendChild(o.firstChild)
                    } else if (e instanceof a)
                    for (var l = 0; l < e.length; l += 1) this[r].appendChild(e[l]);
                else this[r].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, i;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = n.createElement("div");
                    for (s.innerHTML = e, i = s.childNodes.length - 1; 0 <= i; i -= 1) this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof a)
                for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(t) {
            return new a(0 < this.length ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        },
        nextAll: function(t) {
            var i = [],
                n = this[0];
            if (!n) return new a([]);
            for (; n.nextElementSibling;) {
                var s = n.nextElementSibling;
                t ? e(s).is(t) && i.push(s) : i.push(s), n = s
            }
            return new a(i)
        },
        prev: function(t) {
            if (0 < this.length) {
                var i = this[0];
                return new a(t ? i.previousElementSibling && e(i.previousElementSibling).is(t) ? [i.previousElementSibling] : [] : i.previousElementSibling ? [i.previousElementSibling] : [])
            }
            return new a([])
        },
        prevAll: function(t) {
            var i = [],
                n = this[0];
            if (!n) return new a([]);
            for (; n.previousElementSibling;) {
                var s = n.previousElementSibling;
                t ? e(s).is(t) && i.push(s) : i.push(s), n = s
            }
            return new a(i)
        },
        parent: function(i) {
            for (var n = [], s = 0; s < this.length; s += 1) null !== this[s].parentNode && (i ? e(this[s].parentNode).is(i) && n.push(this[s].parentNode) : n.push(this[s].parentNode));
            return e(t(n))
        },
        parents: function(i) {
            for (var n = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].parentNode; a;) i ? e(a).is(i) && n.push(a) : n.push(a), a = a.parentNode;
            return e(t(n))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new a([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].querySelectorAll(e), s = 0; s < n.length; s += 1) t.push(n[s]);
            return new a(t)
        },
        children: function(i) {
            for (var n = [], s = 0; s < this.length; s += 1)
                for (var r = this[s].childNodes, o = 0; o < r.length; o += 1) i ? 1 === r[o].nodeType && e(r[o]).is(i) && n.push(r[o]) : 1 === r[o].nodeType && n.push(r[o]);
            return new a(t(n))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var n, s;
            for (n = 0; n < t.length; n += 1) {
                var a = e(t[n]);
                for (s = 0; s < a.length; s += 1) this[this.length] = a[s], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? s.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach(function(t) {
        e.fn[t] = r[t]
    });
    var o, l, h, c, d = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                var i, n, a;
                void 0 === t && (t = "x");
                var r = s.getComputedStyle(e, null);
                return s.WebKitCSSMatrix ? (6 < (n = r.transform || r.webkitTransform).split(",").length && (n = n.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
            },
            parseUrlQuery: function(e) {
                var t, i, n, a, r = {},
                    o = e || s.location.href;
                if ("string" == typeof o && o.length)
                    for (a = (i = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < a; t += 1) n = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                return r
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                    var s = e[n];
                    if (null != s)
                        for (var a = Object.keys(Object(s)), r = 0, o = a.length; r < o; r += 1) {
                            var l = a[r],
                                h = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(s[l]) ? d.extend(i[l], s[l]) : !d.isObject(i[l]) && d.isObject(s[l]) ? (i[l] = {}, d.extend(i[l], s[l])) : i[l] = s[l])
                        }
                }
                return i
            }
        },
        u = (h = n.createElement("div"), {
            touch: s.Modernizr && !0 === s.Modernizr.touch || !!(0 < s.navigator.maxTouchPoints || "ontouchstart" in s || s.DocumentTouch && n instanceof s.DocumentTouch),
            pointerEvents: !!(s.navigator.pointerEnabled || s.PointerEvent || "maxTouchPoints" in s.navigator && 0 < s.navigator.maxTouchPoints),
            prefixedPointerEvents: !!s.navigator.msPointerEnabled,
            transition: (l = h.style, "transition" in l || "webkitTransition" in l || "MozTransition" in l),
            transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || (o = h.style, "webkitPerspective" in o || "MozPerspective" in o || "OPerspective" in o || "MsPerspective" in o || "perspective" in o),
            flexbox: function() {
                for (var e = h.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                    if (t[i] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    s.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in s
        }),
        p = {
            isIE: !!s.navigator.userAgent.match(/Trident/g) || !!s.navigator.userAgent.match(/MSIE/g),
            isEdge: !!s.navigator.userAgent.match(/Edge/g),
            isSafari: (c = s.navigator.userAgent.toLowerCase(), 0 <= c.indexOf("safari") && c.indexOf("chrome") < 0 && c.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
        },
        f = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        m = {
            components: {
                configurable: !0
            }
        };
    f.prototype.on = function(e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;
        var s = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
        }), n
    }, f.prototype.once = function(e, t, i) {
        function n() {
            for (var i = [], a = arguments.length; a--;) i[a] = arguments[a];
            t.apply(s, i), s.off(e, n), n.f7proxy && delete n.f7proxy
        }
        var s = this;
        return "function" != typeof t ? s : (n.f7proxy = t, s.on(e, n, i))
    }, f.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners && e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function(n, s) {
                (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(s, 1)
            })
        }), i
    }, f.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, n, s, a = this;
        return a.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), s = a) : (i = e[0].events, n = e[0].data, s = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (a.eventsListeners && a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(s, n)
                })
            }
        })), a
    }, f.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var n = t.modules[i];
            n.params && d.extend(e, n.params)
        })
    }, f.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var n = t.modules[i],
                s = e[i] || {};
            n.instance && Object.keys(n.instance).forEach(function(e) {
                var i = n.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), n.on && t.on && Object.keys(n.on).forEach(function(e) {
                t.on(e, n.on[e])
            }), n.create && n.create.bind(t)(s)
        })
    }, m.components.set = function(e) {
        this.use && this.use(e)
    }, f.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var s = e.name || Object.keys(n.prototype.modules).length + "_" + d.now();
        return (n.prototype.modules[s] = e).proto && Object.keys(e.proto).forEach(function(t) {
            n.prototype[t] = e.proto[t]
        }), e["static"] && Object.keys(e["static"]).forEach(function(t) {
            n[t] = e["static"][t]
        }), e.install && e.install.apply(n, t), n
    }, f.use = function(e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return n.installModule(e)
        }), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(f, m);
    var g = {
            updateSize: function() {
                var e, t, i = this,
                    n = i.$el;
                e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth, t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), d.extend(i, {
                    width: e,
                    height: t,
                    size: i.isHorizontal() ? e : t
                }))
            },
            updateSlides: function() {
                var e = this,
                    t = e.params,
                    i = e.$wrapperEl,
                    n = e.size,
                    a = e.rtlTranslate,
                    r = e.wrongRTL,
                    o = e.virtual && t.virtual.enabled,
                    l = o ? e.virtual.slides.length : e.slides.length,
                    h = i.children("." + e.params.slideClass),
                    c = o ? e.virtual.slides.length : h.length,
                    p = [],
                    f = [],
                    m = [],
                    g = t.slidesOffsetBefore;
                "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
                var v = t.slidesOffsetAfter;
                "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
                var b = e.snapGrid.length,
                    y = e.snapGrid.length,
                    _ = t.spaceBetween,
                    w = -g,
                    x = 0,
                    C = 0;
                if (void 0 !== n) {
                    var k, T;
                    "string" == typeof _ && 0 <= _.indexOf("%") && (_ = parseFloat(_.replace("%", "")) / 100 * n), e.virtualSize = -_, a ? h.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : h.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < t.slidesPerColumn && (k = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (k = Math.max(k, t.slidesPerView * t.slidesPerColumn)));
                    for (var S, D = t.slidesPerColumn, E = k / D, M = Math.floor(c / t.slidesPerColumn), I = 0; I < c; I += 1) {
                        T = 0;
                        var $ = h.eq(I);
                        if (1 < t.slidesPerColumn) {
                            var P = void 0,
                                A = void 0,
                                O = void 0;
                            "column" === t.slidesPerColumnFill ? (O = I - (A = Math.floor(I / D)) * D, (M < A || A === M && O === D - 1) && D <= (O += 1) && (O = 0, A += 1), P = A + O * k / D, $.css({
                                "-webkit-box-ordinal-group": P,
                                "-moz-box-ordinal-group": P,
                                "-ms-flex-order": P,
                                "-webkit-order": P,
                                order: P
                            })) : A = I - (O = Math.floor(I / E)) * E, $.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== O && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", O);
                        }
                        if ("none" !== $.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                var N = s.getComputedStyle($[0], null),
                                    z = $[0].style.transform,
                                    L = $[0].style.webkitTransform;
                                if (z && ($[0].style.transform = "none"), L && ($[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                                else if (e.isHorizontal()) {
                                    var H = parseFloat(N.getPropertyValue("width")),
                                        F = parseFloat(N.getPropertyValue("padding-left")),
                                        R = parseFloat(N.getPropertyValue("padding-right")),
                                        W = parseFloat(N.getPropertyValue("margin-left")),
                                        j = parseFloat(N.getPropertyValue("margin-right")),
                                        q = N.getPropertyValue("box-sizing");
                                    T = q && "border-box" === q ? H + W + j : H + F + R + W + j
                                } else {
                                    var Y = parseFloat(N.getPropertyValue("height")),
                                        B = parseFloat(N.getPropertyValue("padding-top")),
                                        V = parseFloat(N.getPropertyValue("padding-bottom")),
                                        U = parseFloat(N.getPropertyValue("margin-top")),
                                        G = parseFloat(N.getPropertyValue("margin-bottom")),
                                        X = N.getPropertyValue("box-sizing");
                                    T = X && "border-box" === X ? Y + U + G : Y + B + V + U + G
                                }
                                z && ($[0].style.transform = z), L && ($[0].style.webkitTransform = L), t.roundLengths && (T = Math.floor(T))
                            } else T = (n - (t.slidesPerView - 1) * _) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), h[I] && (e.isHorizontal() ? h[I].style.width = T + "px" : h[I].style.height = T + "px");
                            h[I] && (h[I].swiperSlideSize = T), m.push(T), t.centeredSlides ? (w = w + T / 2 + x / 2 + _, 0 === x && 0 !== I && (w = w - n / 2 - _), 0 === I && (w = w - n / 2 - _), Math.abs(w) < .001 && (w = 0), t.roundLengths && (w = Math.floor(w)), C % t.slidesPerGroup == 0 && p.push(w), f.push(w)) : (t.roundLengths && (w = Math.floor(w)), C % t.slidesPerGroup == 0 && p.push(w), f.push(w), w = w + T + _), e.virtualSize += T + _, x = T, C += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, n) + v, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }), u.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : i.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * k, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : i.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        }), t.centeredSlides)) {
                        S = [];
                        for (var K = 0; K < p.length; K += 1) {
                            var Q = p[K];
                            t.roundLengths && (Q = Math.floor(Q)), p[K] < e.virtualSize + p[0] && S.push(Q)
                        }
                        p = S
                    }
                    if (!t.centeredSlides) {
                        S = [];
                        for (var J = 0; J < p.length; J += 1) {
                            var Z = p[J];
                            t.roundLengths && (Z = Math.floor(Z)), p[J] <= e.virtualSize - n && S.push(Z)
                        }
                        p = S, 1 < Math.floor(e.virtualSize - n) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - n)
                    }
                    if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? a ? h.css({
                            marginLeft: _ + "px"
                        }) : h.css({
                            marginRight: _ + "px"
                        }) : h.css({
                            marginBottom: _ + "px"
                        })), t.centerInsufficientSlides) {
                        var ee = 0;
                        if (m.forEach(function(e) {
                                ee += e + (t.spaceBetween ? t.spaceBetween : 0)
                            }), (ee -= t.spaceBetween) < n) {
                            var te = (n - ee) / 2;
                            p.forEach(function(e, t) {
                                p[t] = e - te
                            }), f.forEach(function(e, t) {
                                f[t] = e + te
                            })
                        }
                    }
                    d.extend(e, {
                        slides: h,
                        snapGrid: p,
                        slidesGrid: f,
                        slidesSizesGrid: m
                    }), c !== l && e.emit("slidesLengthChange"), p.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                var t, i = this,
                    n = [],
                    s = 0;
                if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                        var a = i.activeIndex + t;
                        if (a > i.slides.length) break;
                        n.push(i.slides.eq(a)[0])
                    } else n.push(i.slides.eq(i.activeIndex)[0]);
                for (t = 0; t < n.length; t += 1)
                    if (void 0 !== n[t]) {
                        var r = n[t].offsetHeight;
                        s = s < r ? r : s
                    }
                s && i.$wrapperEl.css("height", s + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function(t) {
                void 0 === t && (t = this && this.translate || 0);
                var i = this,
                    n = i.params,
                    s = i.slides,
                    a = i.rtlTranslate;
                if (0 !== s.length) {
                    void 0 === s[0].swiperSlideOffset && i.updateSlidesOffset();
                    var r = -t;
                    a && (r = t), s.removeClass(n.slideVisibleClass), i.visibleSlidesIndexes = [], i.visibleSlides = [];
                    for (var o = 0; o < s.length; o += 1) {
                        var l = s[o],
                            h = (r + (n.centeredSlides ? i.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + n.spaceBetween);
                        if (n.watchSlidesVisibility) {
                            var c = -(r - l.swiperSlideOffset),
                                d = c + i.slidesSizesGrid[o];
                            (0 <= c && c < i.size || 0 < d && d <= i.size || c <= 0 && d >= i.size) && (i.visibleSlides.push(l), i.visibleSlidesIndexes.push(o), s.eq(o).addClass(n.slideVisibleClass))
                        }
                        l.progress = a ? -h : h
                    }
                    i.visibleSlides = e(i.visibleSlides)
                }
            },
            updateProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this,
                    i = t.params,
                    n = t.maxTranslate() - t.minTranslate(),
                    s = t.progress,
                    a = t.isBeginning,
                    r = t.isEnd,
                    o = a,
                    l = r;
                0 === n ? r = a = !(s = 0) : (a = (s = (e - t.minTranslate()) / n) <= 0, r = 1 <= s), d.extend(t, {
                    progress: s,
                    isBeginning: a,
                    isEnd: r
                }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !a || l && !r) && t.emit("fromEdge"), t.emit("progress", s)
            },
            updateSlidesClasses: function() {
                var e, t = this,
                    i = t.slides,
                    n = t.params,
                    s = t.$wrapperEl,
                    a = t.activeIndex,
                    r = t.realIndex,
                    o = t.virtual && n.virtual.enabled;
                i.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + a + '"]') : i.eq(a)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(n.slideDuplicateActiveClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(n.slideDuplicateActiveClass));
                var l = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
                var h = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === h.length && (h = i.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), h.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + h.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + h.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                var t, i = this,
                    n = i.rtlTranslate ? i.translate : -i.translate,
                    s = i.slidesGrid,
                    a = i.snapGrid,
                    r = i.params,
                    o = i.activeIndex,
                    l = i.realIndex,
                    h = i.snapIndex,
                    c = e;
                if (void 0 === c) {
                    for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? n >= s[u] && n < s[u + 1] - (s[u + 1] - s[u]) / 2 ? c = u : n >= s[u] && n < s[u + 1] && (c = u + 1) : n >= s[u] && (c = u);
                    r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if ((t = 0 <= a.indexOf(n) ? a.indexOf(n) : Math.floor(c / r.slidesPerGroup)) >= a.length && (t = a.length - 1), c !== o) {
                    var p = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    d.extend(i, {
                        snapIndex: t,
                        realIndex: p,
                        previousIndex: o,
                        activeIndex: c
                    }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== p && i.emit("realIndexChange"), i.emit("slideChange")
                } else t !== h && (i.snapIndex = t, i.emit("snapIndexChange"))
            },
            updateClickedSlide: function(t) {
                var i = this,
                    n = i.params,
                    s = e(t.target).closest("." + n.slideClass)[0],
                    a = !1;
                if (s)
                    for (var r = 0; r < i.slides.length; r += 1) i.slides[r] === s && (a = !0);
                return s && a ? (i.clickedSlide = s, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : i.clickedIndex = e(s).index(), n.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide(), void 0) : (i.clickedSlide = void 0, void(i.clickedIndex = void 0))
            }
        },
        v = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    i = this.rtlTranslate,
                    n = this.translate,
                    s = this.$wrapperEl;
                if (t.virtualTranslate) return i ? -n : n;
                var a = d.getTranslate(s[0], e);
                return i && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
                var i = this,
                    n = i.rtlTranslate,
                    s = i.params,
                    a = i.$wrapperEl,
                    r = i.progress,
                    o = 0,
                    l = 0;
                i.isHorizontal() ? o = n ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (u.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : l;
                var h = i.maxTranslate() - i.minTranslate();
                (0 === h ? 0 : (e - i.minTranslate()) / h) !== r && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        b = {
            setTransition: function(e, t) {
                this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                var i = this,
                    n = i.activeIndex,
                    s = i.params,
                    a = i.previousIndex;
                s.autoHeight && i.updateAutoHeight();
                var r = t;
                if (r || (r = a < n ? "next" : n < a ? "prev" : "reset"), i.emit("transitionStart"), e && n !== a) {
                    if ("reset" === r) return void i.emit("slideResetTransitionStart");
                    i.emit("slideChangeTransitionStart"), "next" === r ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                }
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                var i = this,
                    n = i.activeIndex,
                    s = i.previousIndex;
                i.animating = !1, i.setTransition(0);
                var a = t;
                if (a || (a = s < n ? "next" : n < s ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== s) {
                    if ("reset" === a) return void i.emit("slideResetTransitionEnd");
                    i.emit("slideChangeTransitionEnd"), "next" === a ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                }
            }
        },
        y = {
            slideTo: function(e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var s = this,
                    a = e;
                a < 0 && (a = 0);
                var r = s.params,
                    o = s.snapGrid,
                    l = s.slidesGrid,
                    h = s.previousIndex,
                    c = s.activeIndex,
                    d = s.rtlTranslate;
                if (s.animating && r.preventInteractionOnTransition) return !1;
                var p = Math.floor(a / r.slidesPerGroup);
                p >= o.length && (p = o.length - 1), (c || r.initialSlide || 0) === (h || 0) && i && s.emit("beforeSlideChangeStart");
                var f, m = -o[p];
                if (s.updateProgress(m), r.normalizeSlideIndex)
                    for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (a = g);
                if (s.initialized && a !== c) {
                    if (!s.allowSlideNext && m < s.translate && m < s.minTranslate()) return !1;
                    if (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (c || 0) !== a) return !1
                }
                return f = c < a ? "next" : a < c ? "prev" : "reset", d && -m === s.translate || !d && m === s.translate ? (s.updateActiveIndex(a), r.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== r.effect && s.setTranslate(m), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== t && u.transition ? (s.setTransition(t), s.setTranslate(m), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, f))
                }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(m), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0)
            },
            slideToLoop: function(e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var s = e;
                return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, i, n)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    s = n.params,
                    a = n.animating;
                return s.loop ? !a && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)
            },
            slidePrev: function(e, t, i) {
                function n(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var s = this,
                    a = s.params,
                    r = s.animating,
                    o = s.snapGrid,
                    l = s.slidesGrid,
                    h = s.rtlTranslate;
                if (a.loop) {
                    if (r) return !1;
                    s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                }
                var c, d = n(h ? s.translate : -s.translate),
                    u = o.map(function(e) {
                        return n(e)
                    }),
                    p = (l.map(function(e) {
                        return n(e)
                    }), o[u.indexOf(d)], o[u.indexOf(d) - 1]);
                return void 0 !== p && (c = l.indexOf(p)) < 0 && (c = s.activeIndex - 1), s.slideTo(c, e, t, i)
            },
            slideReset: function(e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    s = n.activeIndex,
                    a = Math.floor(s / n.params.slidesPerGroup);
                if (a < n.snapGrid.length - 1) {
                    var r = n.rtlTranslate ? n.translate : -n.translate,
                        o = n.snapGrid[a];
                    (n.snapGrid[a + 1] - o) / 2 < r - o && (s = n.params.slidesPerGroup)
                }
                return n.slideTo(s, e, t, i)
            },
            slideToClickedSlide: function() {
                var t, i = this,
                    n = i.params,
                    s = i.$wrapperEl,
                    a = "auto" === n.slidesPerView ? i.slidesPerViewDynamic() : n.slidesPerView,
                    r = i.clickedIndex;
                if (n.loop) {
                    if (i.animating) return;
                    t = parseInt(e(i.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? r < i.loopedSlides - a / 2 || r > i.slides.length - i.loopedSlides + a / 2 ? (i.loopFix(), r = s.children("." + n.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                        i.slideTo(r)
                    })) : i.slideTo(r) : r > i.slides.length - a ? (i.loopFix(), r = s.children("." + n.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                        i.slideTo(r)
                    })) : i.slideTo(r)
                } else i.slideTo(r)
            }
        },
        _ = {
            loopCreate: function() {
                var t = this,
                    i = t.params,
                    s = t.$wrapperEl;
                s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var a = s.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var r = i.slidesPerGroup - a.length % i.slidesPerGroup;
                    if (r !== i.slidesPerGroup) {
                        for (var o = 0; o < r; o += 1) {
                            var l = e(n.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            s.append(l)
                        }
                        a = s.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
                var h = [],
                    c = [];
                a.each(function(i, n) {
                    var s = e(n);
                    i < t.loopedSlides && c.push(n), i < a.length && i >= a.length - t.loopedSlides && h.push(n), s.attr("data-swiper-slide-index", i)
                });
                for (var d = 0; d < c.length; d += 1) s.append(e(c[d].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var u = h.length - 1; 0 <= u; u -= 1) s.prepend(e(h[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
                var e, t = this,
                    i = t.params,
                    n = t.activeIndex,
                    s = t.slides,
                    a = t.loopedSlides,
                    r = t.allowSlidePrev,
                    o = t.allowSlideNext,
                    l = t.snapGrid,
                    h = t.rtlTranslate;
                t.allowSlidePrev = !0, t.allowSlideNext = !0;
                var c = -l[n] - t.getTranslate();
                n < a ? (e = s.length - 3 * a + n, e += a, t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((h ? -t.translate : t.translate) - c)) : ("auto" === i.slidesPerView && 2 * a <= n || n >= s.length - a) && (e = -s.length + n + a, e += a, t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((h ? -t.translate : t.translate) - c)), t.allowSlidePrev = r, t.allowSlideNext = o
            },
            loopDestroy: function() {
                var e = this.$wrapperEl,
                    t = this.params,
                    i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        w = {
            setGrabCursor: function(e) {
                if (!(u.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                u.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
            }
        },
        x = {
            appendSlide: function(e) {
                var t = this,
                    i = t.$wrapperEl,
                    n = t.params;
                if (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && i.append(e[s]);
                else i.append(e);
                n.loop && t.loopCreate(), n.observer && u.observer || t.update()
            },
            prependSlide: function(e) {
                var t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    s = t.activeIndex;
                i.loop && t.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && n.prepend(e[r]);
                    a = s + e.length
                } else n.prepend(e);
                i.loop && t.loopCreate(), i.observer && u.observer || t.update(), t.slideTo(a, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this,
                    n = i.$wrapperEl,
                    s = i.params,
                    a = i.activeIndex;
                s.loop && (a -= i.loopedSlides, i.loopDestroy(), i.slides = n.children("." + s.slideClass));
                var r = i.slides.length;
                if (e <= 0) i.prependSlide(t);
                else if (r <= e) i.appendSlide(t);
                else {
                    for (var o = e < a ? a + 1 : a, l = [], h = r - 1; e <= h; h -= 1) {
                        var c = i.slides.eq(h);
                        c.remove(), l.unshift(c)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var d = 0; d < t.length; d += 1) t[d] && n.append(t[d]);
                        o = e < a ? a + t.length : a
                    } else n.append(t);
                    for (var p = 0; p < l.length; p += 1) n.append(l[p]);
                    s.loop && i.loopCreate(), s.observer && u.observer || i.update(), s.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    s = t.activeIndex;
                i.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = n.children("." + i.slideClass));
                var a, r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < r && (r -= 1);
                    r = Math.max(r, 0)
                } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                i.loop && t.loopCreate(), i.observer && u.observer || t.update(), i.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        C = function() {
            var e = s.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: s.cordova || s.phonegap,
                    phonegap: s.cordova || s.phonegap
                },
                i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/),
                o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), a && !i && (t.os = "android", t.osVersion = a[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (r || l || o) && (t.os = "ios", t.ios = !0), l && !o && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var h = t.osVersion.split("."),
                    c = n.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (o || l) && (1 * h[0] == 7 ? 1 <= 1 * h[1] : 7 < 1 * h[0]) && c && 0 <= c.getAttribute("content").indexOf("minimal-ui")
            }
            return t.pixelRatio = s.devicePixelRatio || 1, t
        }(),
        k = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        T = {
            update: g,
            translate: v,
            transition: b,
            slide: y,
            loop: _,
            grabCursor: w,
            manipulation: x,
            events: {
                attachEvents: function() {
                    var t = this,
                        a = t.params,
                        r = t.touchEvents,
                        o = t.el,
                        l = t.wrapperEl;
                    t.onTouchStart = function(t) {
                        var i = this,
                            a = i.touchEventsData,
                            r = i.params,
                            o = i.touches;
                        if (!i.animating || !r.preventInteractionOnTransition) {
                            var l = t;
                            if (l.originalEvent && (l = l.originalEvent), a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && 0 < l.button || a.isTouched && a.isMoved))
                                if (r.noSwiping && e(l.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) i.allowClick = !0;
                                else if (!r.swipeHandler || e(l).closest(r.swipeHandler)[0]) {
                                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                var h = o.currentX,
                                    c = o.currentY,
                                    u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                                    p = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                                if (!u || !(h <= p || h >= s.screen.width - p)) {
                                    if (d.extend(a, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: void 0,
                                            startMoving: void 0
                                        }), o.startX = h, o.startY = c, a.touchStartTime = d.now(), i.allowClick = !0, i.updateSize(), i.swipeDirection = void 0, 0 < r.threshold && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                                        var f = !0;
                                        e(l.target).is(a.formElements) && (f = !1), n.activeElement && e(n.activeElement).is(a.formElements) && n.activeElement !== l.target && n.activeElement.blur();
                                        var m = f && i.allowTouchMove && r.touchStartPreventDefault;
                                        (r.touchStartForcePreventDefault || m) && l.preventDefault()
                                    }
                                    i.emit("touchStart", l)
                                }
                            }
                        }
                    }.bind(t), t.onTouchMove = function(t) {
                        var i = this,
                            s = i.touchEventsData,
                            a = i.params,
                            r = i.touches,
                            o = i.rtlTranslate,
                            l = t;
                        if (l.originalEvent && (l = l.originalEvent), s.isTouched) {
                            if (!s.isTouchEvent || "mousemove" !== l.type) {
                                var h = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                                    c = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                if (l.preventedByNestedSwiper) return r.startX = h, void(r.startY = c);
                                if (!i.allowTouchMove) return i.allowClick = !1, void(s.isTouched && (d.extend(r, {
                                    startX: h,
                                    startY: c,
                                    currentX: h,
                                    currentY: c
                                }), s.touchStartTime = d.now()));
                                if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                    if (i.isVertical()) {
                                        if (c < r.startY && i.translate <= i.maxTranslate() || c > r.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
                                    } else if (h < r.startX && i.translate <= i.maxTranslate() || h > r.startX && i.translate >= i.minTranslate()) return;
                                if (s.isTouchEvent && n.activeElement && l.target === n.activeElement && e(l.target).is(s.formElements)) return s.isMoved = !0, void(i.allowClick = !1);
                                if (s.allowTouchCallbacks && i.emit("touchMove", l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                                    r.currentX = h, r.currentY = c;
                                    var u, p = r.currentX - r.startX,
                                        f = r.currentY - r.startY;
                                    if (!(i.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < i.params.threshold))
                                        if (void 0 === s.isScrolling && (i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : 25 <= p * p + f * f && (u = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, s.isScrolling = i.isHorizontal() ? u > a.touchAngle : 90 - u > a.touchAngle)), s.isScrolling && i.emit("touchMoveOpposite", l), void 0 === s.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (s.startMoving = !0)), s.isScrolling) s.isTouched = !1;
                                        else if (s.startMoving) {
                                        i.allowClick = !1, l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), s.isMoved || (a.loop && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !a.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), s.isMoved = !0;
                                        var m = i.isHorizontal() ? p : f;
                                        r.diff = m, m *= a.touchRatio, o && (m = -m), i.swipeDirection = 0 < m ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
                                        var g = !0,
                                            v = a.resistanceRatio;
                                        if (a.touchReleaseOnEdges && (v = 0), 0 < m && s.currentTranslate > i.minTranslate() ? (g = !1, a.resistance && (s.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + s.startTranslate + m, v))) : m < 0 && s.currentTranslate < i.maxTranslate() && (g = !1, a.resistance && (s.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - s.startTranslate - m, v))), g && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), 0 < a.threshold) {
                                            if (!(Math.abs(m) > a.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
                                            if (!s.allowThresholdMove) return s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, void(r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                        }
                                        a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), a.freeMode && (0 === s.velocities.length && s.velocities.push({
                                            position: r[i.isHorizontal() ? "startX" : "startY"],
                                            time: s.touchStartTime
                                        }), s.velocities.push({
                                            position: r[i.isHorizontal() ? "currentX" : "currentY"],
                                            time: d.now()
                                        })), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
                                    }
                                }
                            }
                        } else s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l)
                    }.bind(t), t.onTouchEnd = function(e) {
                        var t = this,
                            i = t.touchEventsData,
                            n = t.params,
                            s = t.touches,
                            a = t.rtlTranslate,
                            r = t.$wrapperEl,
                            o = t.slidesGrid,
                            l = t.snapGrid,
                            h = e;
                        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                        n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var c, u = d.now(),
                            p = u - i.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), p < 300 && 300 < u - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function() {
                                t && !t.destroyed && t.emit("click", h)
                            }, 300)), p < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function() {
                                t.destroyed || (t.allowClick = !0)
                            }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                            if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (n.freeModeMomentum) {
                                if (1 < i.velocities.length) {
                                    var f = i.velocities.pop(),
                                        m = i.velocities.pop(),
                                        g = f.position - m.position,
                                        v = f.time - m.time;
                                    t.velocity = g / v, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < v || 300 < d.now() - f.time) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                var b = 1e3 * n.freeModeMomentumRatio,
                                    y = t.velocity * b,
                                    _ = t.translate + y;
                                a && (_ = -_);
                                var w, x, C = !1,
                                    k = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                                if (_ < t.maxTranslate()) n.freeModeMomentumBounce ? (_ + t.maxTranslate() < -k && (_ = t.maxTranslate() - k), w = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : _ = t.maxTranslate(), n.loop && n.centeredSlides && (x = !0);
                                else if (_ > t.minTranslate()) n.freeModeMomentumBounce ? (_ - t.minTranslate() > k && (_ = t.minTranslate() + k), w = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : _ = t.minTranslate(), n.loop && n.centeredSlides && (x = !0);
                                else if (n.freeModeSticky) {
                                    for (var T, S = 0; S < l.length; S += 1)
                                        if (l[S] > -_) {
                                            T = S;
                                            break
                                        }
                                    _ = -(_ = Math.abs(l[T] - _) < Math.abs(l[T - 1] - _) || "next" === t.swipeDirection ? l[T] : l[T - 1])
                                }
                                if (x && t.once("transitionEnd", function() {
                                        t.loopFix()
                                    }), 0 !== t.velocity) b = a ? Math.abs((-_ - t.translate) / t.velocity) : Math.abs((_ - t.translate) / t.velocity);
                                else if (n.freeModeSticky) return void t.slideToClosest();
                                n.freeModeMomentumBounce && C ? (t.updateProgress(w), t.setTransition(b), t.setTranslate(_), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function() {
                                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(w), r.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                })) : t.velocity ? (t.updateProgress(_), t.setTransition(b), t.setTranslate(_), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(_), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (n.freeModeSticky) return void t.slideToClosest();
                            (!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else {
                            for (var D = 0, E = t.slidesSizesGrid[0], M = 0; M < o.length; M += n.slidesPerGroup) void 0 !== o[M + n.slidesPerGroup] ? c >= o[M] && c < o[M + n.slidesPerGroup] && (E = o[(D = M) + n.slidesPerGroup] - o[M]) : c >= o[M] && (D = M, E = o[o.length - 1] - o[o.length - 2]);
                            var I = (c - o[D]) / E;
                            if (p > n.longSwipesMs) {
                                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (I >= n.longSwipesRatio ? t.slideTo(D + n.slidesPerGroup) : t.slideTo(D)), "prev" === t.swipeDirection && (I > 1 - n.longSwipesRatio ? t.slideTo(D + n.slidesPerGroup) : t.slideTo(D))
                            } else {
                                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && t.slideTo(D + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(D)
                            }
                        }
                    }.bind(t), t.onClick = function(e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(t);
                    var h = "container" === a.touchEventsTarget ? o : l,
                        c = !!a.nested;
                    if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                        if (u.touch) {
                            var p = !("touchstart" !== r.start || !u.passiveListener || !a.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            h.addEventListener(r.start, t.onTouchStart, p), h.addEventListener(r.move, t.onTouchMove, u.passiveListener ? {
                                passive: !1,
                                capture: c
                            } : c), h.addEventListener(r.end, t.onTouchEnd, p)
                        }(a.simulateTouch && !C.ios && !C.android || a.simulateTouch && !u.touch && C.ios) && (h.addEventListener("mousedown", t.onTouchStart, !1), n.addEventListener("mousemove", t.onTouchMove, c), n.addEventListener("mouseup", t.onTouchEnd, !1))
                    } else h.addEventListener(r.start, t.onTouchStart, !1), n.addEventListener(r.move, t.onTouchMove, c), n.addEventListener(r.end, t.onTouchEnd, !1);
                    (a.preventClicks || a.preventClicksPropagation) && h.addEventListener("click", t.onClick, !0), t.on(C.ios || C.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", i, !0)
                },
                detachEvents: function() {
                    var e = this,
                        t = e.params,
                        s = e.touchEvents,
                        a = e.el,
                        r = e.wrapperEl,
                        o = "container" === t.touchEventsTarget ? a : r,
                        l = !!t.nested;
                    if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                        if (u.touch) {
                            var h = !("onTouchStart" !== s.start || !u.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            o.removeEventListener(s.start, e.onTouchStart, h), o.removeEventListener(s.move, e.onTouchMove, l), o.removeEventListener(s.end, e.onTouchEnd, h)
                        }(t.simulateTouch && !C.ios && !C.android || t.simulateTouch && !u.touch && C.ios) && (o.removeEventListener("mousedown", e.onTouchStart, !1), n.removeEventListener("mousemove", e.onTouchMove, l), n.removeEventListener("mouseup", e.onTouchEnd, !1))
                    } else o.removeEventListener(s.start, e.onTouchStart, !1), n.removeEventListener(s.move, e.onTouchMove, l), n.removeEventListener(s.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && o.removeEventListener("click", e.onClick, !0), e.off(C.ios || C.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", i)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        i = e.initialized,
                        n = e.loopedSlides;
                    void 0 === n && (n = 0);
                    var s = e.params,
                        a = s.breakpoints;
                    if (a && (!a || 0 !== Object.keys(a).length)) {
                        var r = e.getBreakpoint(a);
                        if (r && e.currentBreakpoint !== r) {
                            var o = r in a ? a[r] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var l = o || e.originalParams,
                                h = l.direction && l.direction !== s.direction,
                                c = s.loop && (l.slidesPerView !== s.slidesPerView || h);
                            h && i && e.changeDirection(), d.extend(e.params, l),
                                d.extend(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }), e.currentBreakpoint = r, c && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1,
                            i = [];
                        Object.keys(e).forEach(function(e) {
                            i.push(e)
                        }), i.sort(function(e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var n = 0; n < i.length; n += 1) {
                            var a = i[n];
                            this.params.breakpointsInverse ? a <= s.innerWidth && (t = a) : a >= s.innerWidth && !t && (t = a)
                        }
                        return t || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        n = this.$el,
                        s = [];
                    s.push("initialized"), s.push(t.direction), t.freeMode && s.push("free-mode"), u.flexbox || s.push("no-flexbox"), t.autoHeight && s.push("autoheight"), i && s.push("rtl"), 1 < t.slidesPerColumn && s.push("multirow"), C.android && s.push("android"), C.ios && s.push("ios"), (p.isIE || p.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && s.push("wp8-" + t.direction), s.forEach(function(i) {
                        e.push(t.containerModifierClass + i)
                    }), n.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, i, n, a, r) {
                    function o() {
                        r && r()
                    }
                    var l;
                    e.complete && a ? o() : t ? ((l = new s.Image).onload = o, l.onerror = o, n && (l.sizes = n), i && (l.srcset = i), t && (l.src = t)) : o()
                },
                preloadImages: function() {
                    function e() {
                        null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                    }
                    var t = this;
                    t.imagesToLoad = t.$el.find("img");
                    for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                        var n = t.imagesToLoad[i];
                        t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
                    }
                }
            }
        },
        S = {},
        D = function(t) {
            function i() {
                for (var n, s, a, r = [], o = arguments.length; o--;) r[o] = arguments[o];
                1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (s = (n = r)[0], a = n[1]), a || (a = {}), a = d.extend({}, a), s && !a.el && (a.el = s), t.call(this, a), Object.keys(T).forEach(function(e) {
                    Object.keys(T[e]).forEach(function(t) {
                        i.prototype[t] || (i.prototype[t] = T[e][t])
                    })
                });
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            n = t.params[i];
                        if ("object" != typeof n || null === n) return;
                        if (!(i in a && "enabled" in n)) return;
                        !0 === a[i] && (a[i] = {
                            enabled: !0
                        }), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
                            enabled: !1
                        })
                    }
                });
                var h = d.extend({}, k);
                l.useModulesParams(h), l.params = d.extend({}, h, S, a), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, a);
                var c = (l.$ = e)(l.params.el);
                if (s = c[0]) {
                    if (1 < c.length) {
                        var p = [];
                        return c.each(function(e, t) {
                            var n = d.extend({}, a, {
                                el: t
                            });
                            p.push(new i(n))
                        }), p
                    }
                    s.swiper = l, c.data("swiper", l);
                    var f, m, g = c.children("." + l.params.wrapperClass);
                    return d.extend(l, {
                        $el: c,
                        el: s,
                        $wrapperEl: g,
                        wrapperEl: g[0],
                        classNames: [],
                        slides: e(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === l.params.direction
                        },
                        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === g.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], u.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : u.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2]
                        }, l.touchEventsDesktop = {
                            start: m[0],
                            move: m[1],
                            end: m[2]
                        }, u.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: d.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }
            t && (i.__proto__ = t);
            var n = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((i.prototype = Object.create(t && t.prototype)).constructor = i).prototype.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    i = e.slides,
                    n = e.slidesGrid,
                    s = e.size,
                    a = e.activeIndex,
                    r = 1;
                if (t.centeredSlides) {
                    for (var o, l = i[a].swiperSlideSize, h = a + 1; h < i.length; h += 1) i[h] && !o && (r += 1, s < (l += i[h].swiperSlideSize) && (o = !0));
                    for (var c = a - 1; 0 <= c; c -= 1) i[c] && !o && (r += 1, s < (l += i[c].swiperSlideSize) && (o = !0))
                } else
                    for (var d = a + 1; d < i.length; d += 1) n[d] - n[a] < s && (r += 1);
                return r
            }, i.prototype.update = function() {
                function e() {
                    var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                        i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                }
                var t = this;
                if (t && !t.destroyed) {
                    var i = t.snapGrid,
                        n = t.params;
                    n.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), n.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
            }, i.prototype.changeDirection = function(e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    n = i.params.direction;
                return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || ("vertical" === n && (i.$el.removeClass(i.params.containerModifierClass + "vertical wp8-vertical").addClass("" + i.params.containerModifierClass + e), (p.isIE || p.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)), "horizontal" === n && (i.$el.removeClass(i.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + i.params.containerModifierClass + e), (p.isIE || p.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)), i.params.direction = e, i.slides.each(function(t, i) {
                    "vertical" === e ? i.style.width = "" : i.style.height = ""
                }), i.emit("changeDirection"), t && i.update()), i
            }, i.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, i.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    n = i.params,
                    s = i.$el,
                    a = i.$wrapperEl,
                    r = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0), null
            }, i.extendDefaults = function(e) {
                d.extend(S, e)
            }, n.extendedDefaults.get = function() {
                return S
            }, n.defaults.get = function() {
                return k
            }, n.Class.get = function() {
                return t
            }, n.$.get = function() {
                return e
            }, Object.defineProperties(i, n), i
        }(f),
        E = {
            name: "device",
            proto: {
                device: C
            },
            "static": {
                device: C
            }
        },
        M = {
            name: "support",
            proto: {
                support: u
            },
            "static": {
                support: u
            }
        },
        I = {
            name: "browser",
            proto: {
                browser: p
            },
            "static": {
                browser: p
            }
        },
        $ = {
            name: "resize",
            create: function() {
                var e = this;
                d.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    s.addEventListener("resize", this.resize.resizeHandler), s.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    s.removeEventListener("resize", this.resize.resizeHandler), s.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        P = {
            func: s.MutationObserver || s.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var i = this,
                    n = new P.func(function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                i.emit("observerUpdate", e[0])
                            };
                            s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
                        } else i.emit("observerUpdate", e[0])
                    });
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(n)
            },
            init: function() {
                var e = this;
                if (u.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        A = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                d.extend(this, {
                    observer: {
                        init: P.init.bind(this),
                        attach: P.attach.bind(this),
                        destroy: P.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        O = {
            update: function(e) {
                function t() {
                    i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load()
                }
                var i = this,
                    n = i.params,
                    s = n.slidesPerView,
                    a = n.slidesPerGroup,
                    r = n.centeredSlides,
                    o = i.params.virtual,
                    l = o.addSlidesBefore,
                    h = o.addSlidesAfter,
                    c = i.virtual,
                    u = c.from,
                    p = c.to,
                    f = c.slides,
                    m = c.slidesGrid,
                    g = c.renderSlide,
                    v = c.offset;
                i.updateActiveIndex();
                var b, y, _, w = i.activeIndex || 0;
                b = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", r ? (y = Math.floor(s / 2) + a + l, _ = Math.floor(s / 2) + a + h) : (y = s + (a - 1) + l, _ = a + h);
                var x = Math.max((w || 0) - _, 0),
                    C = Math.min((w || 0) + y, f.length - 1),
                    k = (i.slidesGrid[x] || 0) - (i.slidesGrid[0] || 0);
                if (d.extend(i.virtual, {
                        from: x,
                        to: C,
                        offset: k,
                        slidesGrid: i.slidesGrid
                    }), u === x && p === C && !e) return i.slidesGrid !== m && k !== v && i.slides.css(b, k + "px"), void i.updateProgress();
                if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                    offset: k,
                    from: x,
                    to: C,
                    slides: function() {
                        for (var e = [], t = x; t <= C; t += 1) e.push(f[t]);
                        return e
                    }()
                }), void t();
                var T = [],
                    S = [];
                if (e) i.$wrapperEl.find("." + i.params.slideClass).remove();
                else
                    for (var D = u; D <= p; D += 1)(D < x || C < D) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + D + '"]').remove();
                for (var E = 0; E < f.length; E += 1) x <= E && E <= C && (void 0 === p || e ? S.push(E) : (p < E && S.push(E), E < u && T.push(E)));
                S.forEach(function(e) {
                    i.$wrapperEl.append(g(f[e], e))
                }), T.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    i.$wrapperEl.prepend(g(f[e], e))
                }), i.$wrapperEl.children(".swiper-slide").css(b, k + "px"), t()
            },
            renderSlide: function(t, i) {
                var n = this,
                    s = n.params.virtual;
                if (s.cache && n.virtual.cache[i]) return n.virtual.cache[i];
                var a = e(s.renderSlide ? s.renderSlide.call(n, t, i) : '<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + i + '">' + t + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", i), s.cache && (n.virtual.cache[i] = a), a
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this,
                    i = t.activeIndex,
                    n = i + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.unshift(e[a]);
                    n = i + e.length, s = e.length
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var r = t.virtual.cache,
                        o = {};
                    Object.keys(r).forEach(function(e) {
                        o[parseInt(e, 10) + s] = r[e]
                    }), t.virtual.cache = o
                }
                t.virtual.update(!0), t.slideTo(n, 0)
            },
            removeSlide: function(e) {
                var t = this;
                if (null != e) {
                    var i = t.activeIndex;
                    if (Array.isArray(e))
                        for (var n = e.length - 1; 0 <= n; n -= 1) t.virtual.slides.splice(e[n], 1), t.params.virtual.cache && delete t.virtual.cache[e[n]], e[n] < i && (i -= 1), i = Math.max(i, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
                    t.virtual.update(!0), t.slideTo(i, 0)
                }
            },
            removeAllSlides: function() {
                var e = this;
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
        },
        N = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    virtual: {
                        update: O.update.bind(e),
                        appendSlide: O.appendSlide.bind(e),
                        prependSlide: O.prependSlide.bind(e),
                        removeSlide: O.removeSlide.bind(e),
                        removeAllSlides: O.removeAllSlides.bind(e),
                        renderSlide: O.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        d.extend(e.params, t), d.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        z = {
            handle: function(e) {
                var t = this,
                    i = t.rtlTranslate,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        var o = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var l = s.innerWidth,
                            h = s.innerHeight,
                            c = t.$el.offset();
                        i && (c.left -= t.$el[0].scrollLeft);
                        for (var d = [
                                [c.left, c.top],
                                [c.left + t.width, c.top],
                                [c.left, c.top + t.height],
                                [c.left + t.width, c.top + t.height]
                            ], u = 0; u < d.length; u += 1) {
                            var p = d[u];
                            0 <= p[0] && p[0] <= l && 0 <= p[1] && p[1] <= h && (o = !0)
                        }
                        if (!o) return
                    }
                    t.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !i || 37 === r && i) && t.slideNext(), (37 === r && !i || 39 === r && i) && t.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r)
                }
            },
            enable: function() {
                this.keyboard.enabled || (e(n).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (e(n).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        L = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                d.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: z.enable.bind(this),
                        disable: z.disable.bind(this),
                        handle: z.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        H = {
            lastScrollTime: d.now(),
            event: -1 < s.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var e = "onwheel",
                    t = e in n;
                if (!t) {
                    var i = n.createElement("div");
                    i.setAttribute(e, "return;"), t = "function" == typeof i[e]
                }
                return !t && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature("", "") && (t = n.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    n = 0,
                    s = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: n,
                    pixelY: s
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    i = this,
                    n = i.params.mousewheel;
                if (!i.mouseEntered && !n.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var a = 0,
                    r = i.rtlTranslate ? -1 : 1,
                    o = H.normalize(t);
                if (n.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        a = o.pixelX * r
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        a = o.pixelY
                    }
                else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                if (0 === a) return !0;
                if (n.invert && (a = -a), i.params.freeMode) {
                    i.params.loop && i.loopFix();
                    var l = i.getTranslate() + a * n.sensitivity,
                        h = i.isBeginning,
                        c = i.isEnd;
                    if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), i.setTransition(0), i.setTranslate(l), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!h && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = d.nextTick(function() {
                            i.slideToClosest()
                        }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), l === i.minTranslate() || l === i.maxTranslate()) return !0
                } else {
                    if (60 < d.now() - i.mousewheel.lastScrollTime)
                        if (a < 0)
                            if (i.isEnd && !i.params.loop || i.animating) {
                                if (n.releaseOnEdges) return !0
                            } else i.slideNext(), i.emit("scroll", t);
                    else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (n.releaseOnEdges) return !0
                    } else i.slidePrev(), i.emit("scroll", t);
                    i.mousewheel.lastScrollTime = (new s.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                var t = this;
                if (!H.event) return !1;
                if (t.mousewheel.enabled) return !1;
                var i = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (i = e(t.params.mousewheel.eventsTarged)), i.on("mouseenter", t.mousewheel.handleMouseEnter), i.on("mouseleave", t.mousewheel.handleMouseLeave), i.on(H.event, t.mousewheel.handle), t.mousewheel.enabled = !0
            },
            disable: function() {
                var t = this;
                if (!H.event) return !1;
                if (!t.mousewheel.enabled) return !1;
                var i = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (i = e(t.params.mousewheel.eventsTarged)), i.off(H.event, t.mousewheel.handle), !(t.mousewheel.enabled = !1)
            }
        },
        F = {
            update: function() {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var i = e.navigation,
                        n = i.$nextEl,
                        s = i.$prevEl;
                    s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && 0 < n.length && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var t, i, n = this,
                    s = n.params.navigation;
                (s.nextEl || s.prevEl) && (s.nextEl && (t = e(s.nextEl), n.params.uniqueNavElements && "string" == typeof s.nextEl && 1 < t.length && 1 === n.$el.find(s.nextEl).length && (t = n.$el.find(s.nextEl))), s.prevEl && (i = e(s.prevEl), n.params.uniqueNavElements && "string" == typeof s.prevEl && 1 < i.length && 1 === n.$el.find(s.prevEl).length && (i = n.$el.find(s.prevEl))), t && 0 < t.length && t.on("click", n.navigation.onNextClick), i && 0 < i.length && i.on("click", n.navigation.onPrevClick), d.extend(n.navigation, {
                    $nextEl: t,
                    nextEl: t && t[0],
                    $prevEl: i,
                    prevEl: i && i[0]
                }))
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    i = t.$nextEl,
                    n = t.$prevEl;
                i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
            }
        },
        R = {
            update: function() {
                var t = this,
                    i = t.rtl,
                    n = t.params.pagination;
                if (n.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var s, a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        r = t.pagination.$el,
                        o = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > a - 1 - 2 * t.loopedSlides && (s -= a - 2 * t.loopedSlides), o - 1 < s && (s -= o), s < 0 && "bullets" !== t.params.paginationType && (s = o + s)) : s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === n.type && t.pagination.bullets && 0 < t.pagination.bullets.length) {
                        var l, h, c, d = t.pagination.bullets;
                        if (n.dynamicBullets && (t.pagination.bulletSize = d.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), 1 < n.dynamicMainBullets && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += s - t.previousIndex, t.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), l = s - t.pagination.dynamicBulletIndex, c = ((h = l + (Math.min(d.length, n.dynamicMainBullets) - 1)) + l) / 2), d.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), 1 < r.length) d.each(function(t, i) {
                            var a = e(i),
                                r = a.index();
                            r === s && a.addClass(n.bulletActiveClass), n.dynamicBullets && (l <= r && r <= h && a.addClass(n.bulletActiveClass + "-main"), r === l && a.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), r === h && a.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                        });
                        else if (d.eq(s).addClass(n.bulletActiveClass), n.dynamicBullets) {
                            for (var u = d.eq(l), p = d.eq(h), f = l; f <= h; f += 1) d.eq(f).addClass(n.bulletActiveClass + "-main");
                            u.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), p.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                        }
                        if (n.dynamicBullets) {
                            var m = Math.min(d.length, n.dynamicMainBullets + 4),
                                g = (t.pagination.bulletSize * m - t.pagination.bulletSize) / 2 - c * t.pagination.bulletSize,
                                v = i ? "right" : "left";
                            d.css(t.isHorizontal() ? v : "top", g + "px")
                        }
                    }
                    if ("fraction" === n.type && (r.find("." + n.currentClass).text(n.formatFractionCurrent(s + 1)), r.find("." + n.totalClass).text(n.formatFractionTotal(o))), "progressbar" === n.type) {
                        var b;
                        b = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        var y = (s + 1) / o,
                            _ = 1,
                            w = 1;
                        "horizontal" === b ? _ = y : w = y, r.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + _ + ") scaleY(" + w + ")").transition(t.params.speed)
                    }
                    "custom" === n.type && n.renderCustom ? (r.html(n.renderCustom(t, s + 1, o)), t.emit("paginationRender", t, r[0])) : t.emit("paginationUpdate", t, r[0]), r[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](n.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        n = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, r = 0; r < a; r += 1) s += t.renderBullet ? t.renderBullet.call(e, r, t.bulletClass) : "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        n.html(s), e.pagination.bullets = n.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', n.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', n.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var t = this,
                    i = t.params.pagination;
                if (i.el) {
                    var n = e(i.el);
                    0 !== n.length && (t.params.uniqueNavElements && "string" == typeof i.el && 1 < n.length && 1 === t.$el.find(i.el).length && (n = t.$el.find(i.el)), "bullets" === i.type && i.clickable && n.addClass(i.clickableClass), n.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (n.addClass("" + i.modifierClass + i.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && n.addClass(i.progressbarOppositeClass), i.clickable && n.on("click", "." + i.bulletClass, function(i) {
                        i.preventDefault();
                        var n = e(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (n += t.loopedSlides), t.slideTo(n)
                    }), d.extend(t.pagination, {
                        $el: n,
                        el: n[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass)
                }
            }
        },
        W = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        i = e.rtlTranslate,
                        n = e.progress,
                        s = t.dragSize,
                        a = t.trackSize,
                        r = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        h = s,
                        c = (a - s) * n;
                    i ? 0 < (c = -c) ? (h = s - c, c = 0) : a < -c + s && (h = a + c) : c < 0 ? (h = s + c, c = 0) : a < c + s && (h = a - c), e.isHorizontal() ? (u.transforms3d ? r.transform("translate3d(" + c + "px, 0, 0)") : r.transform("translateX(" + c + "px)"), r[0].style.width = h + "px") : (u.transforms3d ? r.transform("translate3d(0px, " + c + "px, 0)") : r.transform("translateY(" + c + "px)"), r[0].style.height = h + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        i = t.$dragEl,
                        n = t.$el;
                    i[0].style.width = "", i[0].style.height = "";
                    var s, a = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                        r = e.size / e.virtualSize,
                        o = r * (a / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? a * r : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = s + "px" : i[0].style.height = s + "px", n[0].style.display = 1 <= r ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), d.extend(t, {
                        trackSize: a,
                        divider: r,
                        moveDivider: o,
                        dragSize: s
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, i = this,
                    n = i.scrollbar,
                    s = i.rtlTranslate,
                    a = n.$el,
                    r = n.dragSize,
                    o = n.trackSize;
                t = ((i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[i.isHorizontal() ? "left" : "top"] - r / 2) / (o - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
                i.updateProgress(l), i.setTranslate(l), i.updateActiveIndex(), i.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    i = t.params.scrollbar,
                    n = t.scrollbar,
                    s = t.$wrapperEl,
                    a = n.$el,
                    r = n.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), n.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), i.hide && a.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    n = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    i = t.params.scrollbar,
                    n = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = d.nextTick(function() {
                    n.css("opacity", 0), n.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        i = e.touchEventsTouch,
                        s = e.touchEventsDesktop,
                        a = e.params,
                        r = t.$el[0],
                        o = !(!u.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!u.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    u.touch ? (r.addEventListener(i.start, e.scrollbar.onDragStart, o), r.addEventListener(i.move, e.scrollbar.onDragMove, o), r.addEventListener(i.end, e.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, e.scrollbar.onDragStart, o), n.addEventListener(s.move, e.scrollbar.onDragMove, o), n.addEventListener(s.end, e.scrollbar.onDragEnd, l))
                }
            },
            disableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        i = e.touchEventsTouch,
                        s = e.touchEventsDesktop,
                        a = e.params,
                        r = t.$el[0],
                        o = !(!u.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!u.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    u.touch ? (r.removeEventListener(i.start, e.scrollbar.onDragStart, o), r.removeEventListener(i.move, e.scrollbar.onDragMove, o), r.removeEventListener(i.end, e.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, e.scrollbar.onDragStart, o), n.removeEventListener(s.move, e.scrollbar.onDragMove, o), n.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
                }
            },
            init: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var i = t.scrollbar,
                        n = t.$el,
                        s = t.params.scrollbar,
                        a = e(s.el);
                    t.params.uniqueNavElements && "string" == typeof s.el && 1 < a.length && 1 === n.find(s.el).length && (a = n.find(s.el));
                    var r = a.find("." + t.params.scrollbar.dragClass);
                    0 === r.length && (r = e('<div class="' + t.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(i, {
                        $el: a,
                        el: a[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), s.draggable && i.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        j = {
            setTransform: function(t, i) {
                var n = this.rtl,
                    s = e(t),
                    a = n ? -1 : 1,
                    r = s.attr("data-swiper-parallax") || "0",
                    o = s.attr("data-swiper-parallax-x"),
                    l = s.attr("data-swiper-parallax-y"),
                    h = s.attr("data-swiper-parallax-scale"),
                    c = s.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * i * a + "%" : o * i * a + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * i + "%" : l * i + "px", null != c) {
                    var d = c - (c - 1) * (1 - Math.abs(i));
                    s[0].style.opacity = d
                }
                if (null == h) s.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var u = h - (h - 1) * (1 - Math.abs(i));
                    s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + u + ")")
                }
            },
            setTranslate: function() {
                var t = this,
                    i = t.$el,
                    n = t.slides,
                    s = t.progress,
                    a = t.snapGrid;
                i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
                    t.parallax.setTransform(i, s)
                }), n.each(function(i, n) {
                    var r = n.progress;
                    1 < t.params.slidesPerGroup && "auto" !== t.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), e(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
                        t.parallax.setTransform(i, r)
                    })
                })
            },
            setTransition: function(t) {
                void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(i, n) {
                    var s = e(n),
                        a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (a = 0), s.transition(a)
                })
            }
        },
        q = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    n = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
            },
            onGestureStart: function(t) {
                var i = this,
                    n = i.params.zoom,
                    s = i.zoom,
                    a = s.gesture;
                if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !u.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    s.fakeGestureTouched = !0, a.scaleStart = q.getDistanceBetweenTouches(t)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = e(t.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = i.slides.eq(i.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + n.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), i.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!u.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = q.getDistanceBetweenTouches(e)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = u.gestures ? e.scale * i.currentScale : n.scaleMove / n.scaleStart * i.currentScale,
                    i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!u.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !C.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    n = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (C.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    i = t.zoom,
                    n = i.gesture,
                    s = i.image,
                    a = i.velocity;
                if (n.$imageEl && 0 !== n.$imageEl.length && (t.allowClick = !1, s.isTouched && n.$slideEl)) {
                    s.isMoved || (s.width = n.$imageEl[0].offsetWidth, s.height = n.$imageEl[0].offsetHeight, s.startX = d.getTranslate(n.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var r = s.width * i.scale,
                        o = s.height * i.scale;
                    if (!(r < n.slideWidth && o < n.slideHeight)) {
                        if (s.minX = Math.min(n.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(n.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !i.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    n = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var s = 300,
                        a = 300,
                        r = n.x * s,
                        o = i.currentX + r,
                        l = n.y * a,
                        h = i.currentY + l;
                    0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((h - i.currentY) / n.y));
                    var c = Math.max(s, a);
                    i.currentX = o, i.currentY = h;
                    var d = i.width * e.scale,
                        u = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - d / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t["in"](e)
            },
            "in": function(t) {
                var i, n, s, a, r, o, l, h, c, d, u, p, f, m, g, v, b = this,
                    y = b.zoom,
                    _ = b.params.zoom,
                    w = y.gesture,
                    x = y.image;
                w.$slideEl || (w.$slideEl = b.clickedSlide ? e(b.clickedSlide) : b.slides.eq(b.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + _.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + _.zoomedSlideClass), void 0 === x.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = x.touchesStart.x, n = x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || _.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || _.maxRatio, t ? (g = w.$slideEl[0].offsetWidth, v = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + g / 2 - i, a = w.$slideEl.offset().top + v / 2 - n, l = w.$imageEl[0].offsetWidth, h = w.$imageEl[0].offsetHeight, c = l * y.scale, d = h * y.scale, f = -(u = Math.min(g / 2 - c / 2, 0)), m = -(p = Math.min(v / 2 - d / 2, 0)), (r = s * y.scale) < u && (r = u), f < r && (r = f), (o = a * y.scale) < p && (o = p), m < o && (o = m)) : o = r = 0, w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + o + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
            },
            out: function() {
                var t = this,
                    i = t.zoom,
                    n = t.params.zoom,
                    s = i.gesture;
                s.$slideEl || (s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + n.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (i.scale = 1, i.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + n.zoomedSlideClass), s.$slideEl = void 0)
            },
            enable: function() {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var i = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    u.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            },
            disable: function() {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var i = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    u.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        },
        Y = {
            loadInSlide: function(t, i) {
                void 0 === i && (i = !0);
                var n = this,
                    s = n.params.lazy;
                if (void 0 !== t && 0 !== n.slides.length) {
                    var a = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : n.slides.eq(t),
                        r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (r = r.add(a[0])), 0 !== r.length && r.each(function(t, r) {
                        var o = e(r);
                        o.addClass(s.loadingClass);
                        var l = o.attr("data-background"),
                            h = o.attr("data-src"),
                            c = o.attr("data-srcset"),
                            d = o.attr("data-sizes");
                        n.loadImage(o[0], h || l, c, d, !1, function() {
                            if (null != n && n && (!n || n.params) && !n.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), d && (o.attr("sizes", d), o.removeAttr("data-sizes")), h && (o.attr("src", h), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), n.params.loop && i) {
                                    var e = a.attr("data-swiper-slide-index");
                                    if (a.hasClass(n.params.slideDuplicateClass)) {
                                        var t = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                        n.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var r = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        n.lazy.loadInSlide(r.index(), !1)
                                    }
                                }
                                n.emit("lazyImageReady", a[0], o[0])
                            }
                        }), n.emit("lazyImageLoad", a[0], o[0])
                    })
                }
            },
            load: function() {
                function t(e) {
                    if (l) {
                        if (s.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (r[e]) return !0;
                    return !1
                }

                function i(t) {
                    return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                }
                var n = this,
                    s = n.$wrapperEl,
                    a = n.params,
                    r = n.slides,
                    o = n.activeIndex,
                    l = n.virtual && a.virtual.enabled,
                    h = a.lazy,
                    c = a.slidesPerView;
                if ("auto" === c && (c = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) s.children("." + a.slideVisibleClass).each(function(t, i) {
                    var s = l ? e(i).attr("data-swiper-slide-index") : e(i).index();
                    n.lazy.loadInSlide(s)
                });
                else if (1 < c)
                    for (var d = o; d < o + c; d += 1) t(d) && n.lazy.loadInSlide(d);
                else n.lazy.loadInSlide(o);
                if (h.loadPrevNext)
                    if (1 < c || h.loadPrevNextAmount && 1 < h.loadPrevNextAmount) {
                        for (var u = h.loadPrevNextAmount, p = c, f = Math.min(o + p + Math.max(u, p), r.length), m = Math.max(o - Math.max(p, u), 0), g = o + c; g < f; g += 1) t(g) && n.lazy.loadInSlide(g);
                        for (var v = m; v < o; v += 1) t(v) && n.lazy.loadInSlide(v)
                    } else {
                        var b = s.children("." + a.slideNextClass);
                        0 < b.length && n.lazy.loadInSlide(i(b));
                        var y = s.children("." + a.slidePrevClass);
                        0 < y.length && n.lazy.loadInSlide(i(y))
                    }
            }
        },
        B = {
            LinearSpline: function(e, t) {
                var i, n, s, a, r, o = function(e, t) {
                    for (n = -1, i = e.length; 1 < i - n;) e[s = i + n >> 1] <= t ? n = s : i = s;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (r = o(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new B.LinearSpline(t.slidesGrid, e.slidesGrid) : new B.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                function i(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * n + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                var n, s, a = this,
                    r = a.controller.control;
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof D && i(r[o]);
                else r instanceof D && t !== r && i(r)
            },
            setTransition: function(e, t) {
                function i(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && d.nextTick(function() {
                        t.updateAutoHeight()
                    }), t.$wrapperEl.transitionEnd(function() {
                        a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                var n, s = this,
                    a = s.controller.control;
                if (Array.isArray(a))
                    for (n = 0; n < a.length; n += 1) a[n] !== t && a[n] instanceof D && i(a[n]);
                else a instanceof D && t !== a && i(a)
            }
        },
        V = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(t) {
                var i = this,
                    n = i.params.a11y;
                if (13 === t.keyCode) {
                    var s = e(t.target);
                    i.navigation && i.navigation.$nextEl && s.is(i.navigation.$nextEl) && (i.isEnd && !i.params.loop || i.slideNext(), i.isEnd ? i.a11y.notify(n.lastSlideMessage) : i.a11y.notify(n.nextSlideMessage)), i.navigation && i.navigation.$prevEl && s.is(i.navigation.$prevEl) && (i.isBeginning && !i.params.loop || i.slidePrev(), i.isBeginning ? i.a11y.notify(n.firstSlideMessage) : i.a11y.notify(n.prevSlideMessage)), i.pagination && s.is("." + i.params.pagination.bulletClass) && s[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        i = t.$nextEl,
                        n = t.$prevEl;
                    n && 0 < n.length && (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)), i && 0 < i.length && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i))
                }
            },
            updatePagination: function() {
                var t = this,
                    i = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(n, s) {
                    var a = e(s);
                    t.a11y.makeElFocusable(a), t.a11y.addElRole(a, "button"), t.a11y.addElLabel(a, i.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, i, n = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t, i = this;
                i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
            }
        },
        U = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!s.history || !s.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = U.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || s.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = U.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = s.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var i = this.slides.eq(t),
                        n = U.slugify(i.attr("data-history"));
                    s.location.pathname.includes(e) || (n = e + "/" + n);
                    var a = s.history.state;
                    a && a.value === n || (this.params.history.replaceState ? s.history.replaceState({
                        value: n
                    }, null, n) : s.history.pushState({
                        value: n
                    }, null, n))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                var n = this;
                if (t)
                    for (var s = 0, a = n.slides.length; s < a; s += 1) {
                        var r = n.slides.eq(s);
                        if (U.slugify(r.attr("data-history")) === t && !r.hasClass(n.params.slideDuplicateClass)) {
                            var o = r.index();
                            n.slideTo(o, e, i)
                        }
                    } else n.slideTo(0, e, i)
            }
        },
        G = {
            onHashCange: function() {
                var e = this,
                    t = n.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === i) return;
                    e.slideTo(i)
                }
            },
            setHash: function() {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            i = t.attr("data-hash") || t.attr("data-history");
                        n.location.hash = i || ""
                    }
            },
            init: function() {
                var t = this;
                if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                    t.hashNavigation.initialized = !0;
                    var i = n.location.hash.replace("#", "");
                    if (i)
                        for (var a = 0, r = t.slides.length; a < r; a += 1) {
                            var o = t.slides.eq(a);
                            if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(t.params.slideDuplicateClass)) {
                                var l = o.index();
                                t.slideTo(l, 0, t.params.runCallbacksOnInit, !0)
                            }
                        }
                    t.params.hashNavigation.watchState && e(s).on("hashchange", t.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && e(s).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        X = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, i)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        K = {
            setTranslate: function() {
                for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                    var n = e.slides.eq(i),
                        s = -n[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var a = 0;
                    e.isHorizontal() || (a = s, s = 0);
                    var r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                    n.css({
                        opacity: r
                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    n = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    i.transitionEnd(function() {
                        if (!s && t && !t.destroyed) {
                            s = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                        }
                    })
                }
            }
        },
        Q = {
            setTranslate: function() {
                var t, i = this,
                    n = i.$el,
                    s = i.$wrapperEl,
                    a = i.slides,
                    r = i.width,
                    o = i.height,
                    l = i.rtlTranslate,
                    h = i.size,
                    c = i.params.cubeEffect,
                    d = i.isHorizontal(),
                    u = i.virtual && i.params.virtual.enabled,
                    f = 0;
                c.shadow && (d ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), s.append(t)), t.css({
                    height: r + "px"
                })) : 0 === (t = n.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), n.append(t)));
                for (var m = 0; m < a.length; m += 1) {
                    var g = a.eq(m),
                        v = m;
                    u && (v = parseInt(g.attr("data-swiper-slide-index"), 10));
                    var b = 90 * v,
                        y = Math.floor(b / 360);
                    l && (b = -b, y = Math.floor(-b / 360));
                    var _ = Math.max(Math.min(g[0].progress, 1), -1),
                        w = 0,
                        x = 0,
                        C = 0;
                    v % 4 == 0 ? (w = 4 * -y * h, C = 0) : (v - 1) % 4 == 0 ? (w = 0, C = 4 * -y * h) : (v - 2) % 4 == 0 ? (w = h + 4 * y * h, C = h) : (v - 3) % 4 == 0 && (w = -h, C = 3 * h + 4 * h * y), l && (w = -w), d || (x = w, w = 0);
                    var k = "rotateX(" + (d ? 0 : -b) + "deg) rotateY(" + (d ? b : 0) + "deg) translate3d(" + w + "px, " + x + "px, " + C + "px)";
                    if (_ <= 1 && -1 < _ && (f = 90 * v + 90 * _, l && (f = 90 * -v - 90 * _)), g.transform(k), c.slideShadows) {
                        var T = d ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"),
                            S = d ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = e('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), g.append(T)), 0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), g.append(S)), T.length && (T[0].style.opacity = Math.max(-_, 0)), S.length && (S[0].style.opacity = Math.max(_, 0))
                    }
                }
                if (s.css({
                        "-webkit-transform-origin": "50% 50% -" + h / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + h / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + h / 2 + "px",
                        "transform-origin": "50% 50% -" + h / 2 + "px"
                    }), c.shadow)
                    if (d) t.transform("translate3d(0px, " + (r / 2 + c.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")");
                    else {
                        var D = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            E = 1.5 - (Math.sin(2 * D * Math.PI / 360) / 2 + Math.cos(2 * D * Math.PI / 360) / 2),
                            M = c.shadowScale,
                            I = c.shadowScale / E,
                            $ = c.shadowOffset;
                        t.transform("scale3d(" + M + ", 1, " + I + ") translate3d(0px, " + (o / 2 + $) + "px, " + -o / 2 / I + "px) rotateX(-90deg)")
                    }
                var P = p.isSafari || p.isUiWebView ? -h / 2 : 0;
                s.transform("translate3d(0px,0," + P + "px) rotateX(" + (i.isHorizontal() ? 0 : f) + "deg) rotateY(" + (i.isHorizontal() ? -f : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        J = {
            setTranslate: function() {
                for (var t = this, i = t.slides, n = t.rtlTranslate, s = 0; s < i.length; s += 1) {
                    var a = i.eq(s),
                        r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var o = -180 * r,
                        l = 0,
                        h = -a[0].swiperSlideOffset,
                        c = 0;
                    if (t.isHorizontal() ? n && (o = -o) : (c = h, l = -o, o = h = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + i.length, t.params.flipEffect.slideShadows) {
                        var d = t.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            u = t.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), a.append(d)), 0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(u)), d.length && (d[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
                    }
                    a.transform("translate3d(" + h + "px, " + c + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    n = t.activeIndex,
                    s = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.eq(n).transitionEnd(function() {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    })
                }
            }
        },
        Z = {
            setTranslate: function() {
                for (var t = this, i = t.width, n = t.height, s = t.slides, a = t.$wrapperEl, r = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), h = t.translate, c = l ? i / 2 - h : n / 2 - h, d = l ? o.rotate : -o.rotate, p = o.depth, f = 0, m = s.length; f < m; f += 1) {
                    var g = s.eq(f),
                        v = r[f],
                        b = (c - g[0].swiperSlideOffset - v / 2) / v * o.modifier,
                        y = l ? d * b : 0,
                        _ = l ? 0 : d * b,
                        w = -p * Math.abs(b),
                        x = l ? 0 : o.stretch * b,
                        C = l ? o.stretch * b : 0;
                    Math.abs(C) < .001 && (C = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(_) < .001 && (_ = 0);
                    var k = "translate3d(" + C + "px," + x + "px," + w + "px)  rotateX(" + _ + "deg) rotateY(" + y + "deg)";
                    if (g.transform(k), g[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
                        var T = l ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"),
                            S = l ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), g.append(T)), 0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), g.append(S)), T.length && (T[0].style.opacity = 0 < b ? b : 0), S.length && (S[0].style.opacity = 0 < -b ? -b : 0)
                    }
                }(u.pointerEvents || u.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = c + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ee = {
            init: function() {
                var e = this,
                    t = e.params.thumbs,
                    i = e.constructor;
                t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, d.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), d.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : d.isObject(t.swiper) && (e.thumbs.swiper = new i(d.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var t = this,
                    i = t.thumbs.swiper;
                if (i) {
                    var n = i.clickedIndex,
                        s = i.clickedSlide;
                    if (!(s && e(s).hasClass(t.params.thumbs.slideThumbActiveClass) || null == n)) {
                        var a;
                        if (a = i.params.loop ? parseInt(e(i.clickedSlide).attr("data-swiper-slide-index"), 10) : n, t.params.loop) {
                            var r = t.activeIndex;
                            t.slides.eq(r).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, r = t.activeIndex);
                            var o = t.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                l = t.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                            a = void 0 === o ? l : void 0 === l ? o : l - r < r - o ? l : o
                        }
                        t.slideTo(a)
                    }
                }
            },
            update: function(e) {
                var t = this,
                    i = t.thumbs.swiper;
                if (i) {
                    var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                    if (t.realIndex !== i.realIndex) {
                        var s, a = i.activeIndex;
                        if (i.params.loop) {
                            i.slides.eq(a).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, a = i.activeIndex);
                            var r = i.slides.eq(a).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                o = i.slides.eq(a).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            s = void 0 === r ? o : void 0 === o ? r : o - a == a - r ? a : o - a < a - r ? o : r
                        } else s = t.realIndex;
                        i.visibleSlidesIndexes.indexOf(s) < 0 && (i.params.centeredSlides ? s = a < s ? s - Math.floor(n / 2) + 1 : s + Math.floor(n / 2) - 1 : a < s && (s = s - n + 1), i.slideTo(s, e ? 0 : void 0))
                    }
                    var l = 1,
                        h = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), i.slides.removeClass(h), i.params.loop)
                        for (var c = 0; c < l; c += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(h);
                    else
                        for (var d = 0; d < l; d += 1) i.slides.eq(t.realIndex + d).addClass(h)
                }
            }
        },
        te = [E, M, I, $, A, N, L, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: H.enable.bind(e),
                        disable: H.disable.bind(e),
                        handle: H.handle.bind(e),
                        handleMouseEnter: H.handleMouseEnter.bind(e),
                        handleMouseLeave: H.handleMouseLeave.bind(e),
                        lastScrollTime: d.now()
                    }
                })
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    navigation: {
                        init: F.init.bind(e),
                        update: F.update.bind(e),
                        destroy: F.destroy.bind(e),
                        onNextClick: F.onNextClick.bind(e),
                        onPrevClick: F.onPrevClick.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(t) {
                    var i, n = this,
                        s = n.navigation,
                        a = s.$nextEl,
                        r = s.$prevEl;
                    !n.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(a) || (a ? i = a.hasClass(n.params.navigation.hiddenClass) : r && (i = r.hasClass(n.params.navigation.hiddenClass)), !0 === i ? n.emit("navigationShow", n) : n.emit("navigationHide", n), a && a.toggleClass(n.params.navigation.hiddenClass), r && r.toggleClass(n.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    pagination: {
                        init: R.init.bind(e),
                        render: R.render.bind(e),
                        update: R.update.bind(e),
                        destroy: R.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(t) {
                    var i = this;
                    i.params.pagination.el && i.params.pagination.hideOnClick && 0 < i.pagination.$el.length && !e(t.target).hasClass(i.params.pagination.bulletClass) && (!0 === i.pagination.$el.hasClass(i.params.pagination.hiddenClass) ? i.emit("paginationShow", i) : i.emit("paginationHide", i), i.pagination.$el.toggleClass(i.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    scrollbar: {
                        init: W.init.bind(e),
                        destroy: W.destroy.bind(e),
                        updateSize: W.updateSize.bind(e),
                        setTranslate: W.setTranslate.bind(e),
                        setTransition: W.setTransition.bind(e),
                        enableDraggable: W.enableDraggable.bind(e),
                        disableDraggable: W.disableDraggable.bind(e),
                        setDragPosition: W.setDragPosition.bind(e),
                        onDragStart: W.onDragStart.bind(e),
                        onDragMove: W.onDragMove.bind(e),
                        onDragEnd: W.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                d.extend(this, {
                    parallax: {
                        setTransform: j.setTransform.bind(this),
                        setTranslate: j.setTranslate.bind(this),
                        setTransition: j.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                    t[i] = q[i].bind(e)
                }), d.extend(e, {
                    zoom: t
                });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        if (i !== t) {
                            var n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, n, s)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                d.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: Y.load.bind(this),
                        loadInSlide: Y.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: B.getInterpolateFunction.bind(e),
                        setTranslate: B.setTranslate.bind(e),
                        setTransition: B.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                d.extend(t, {
                    a11y: {
                        liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(V).forEach(function(e) {
                    t.a11y[e] = V[e].bind(t)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    history: {
                        init: U.init.bind(e),
                        setHistory: U.setHistory.bind(e),
                        setHistoryPopState: U.setHistoryPopState.bind(e),
                        scrollToSlide: U.scrollToSlide.bind(e),
                        destroy: U.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: G.init.bind(e),
                        destroy: G.destroy.bind(e),
                        setHash: G.setHash.bind(e),
                        onHashCange: G.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: X.run.bind(e),
                        start: X.start.bind(e),
                        stop: X.stop.bind(e),
                        pause: X.pause.bind(e),
                        onTransitionEnd: function(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                d.extend(this, {
                    fadeEffect: {
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(e.params, t), d.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                d.extend(this, {
                    cubeEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        d.extend(e.params, t), d.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                d.extend(this, {
                    flipEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(e.params, t), d.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                d.extend(this, {
                    coverflowEffect: {
                        setTranslate: Z.setTranslate.bind(this),
                        setTransition: Z.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                d.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: ee.init.bind(this),
                        update: ee.update.bind(this),
                        onThumbClick: ee.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === D.use && (D.use = D.Class.use, D.installModule = D.Class.installModule), D.use(te), D
}), ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, i) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function s(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable
            }))), n.forEach(function(t) {
                var n, s, a;
                n = e, a = i[s = t], s in n ? Object.defineProperty(n, s, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[s] = a
            })
        }
        return e
    }

    function r(e) {
        var i = this,
            n = !1;
        return t(this).one(h.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || h.triggerTransitionEnd(i)
        }, e), this
    }

    function o(e, t, i) {
        if (0 === e.length) return e;
        if (i && "function" == typeof i) return i(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(t), a = [].slice.call(n.body.querySelectorAll("*")), r = function(e) {
                var i = a[e],
                    n = i.nodeName.toLowerCase();
                if (-1 === s.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var r = [].slice.call(i.attributes),
                    o = [].concat(t["*"] || [], t[n] || []);
                r.forEach(function(e) {
                    (function(e, t) {
                        var i = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(i)) return -1 === _t.indexOf(i) || Boolean(e.nodeValue.match(xt) || e.nodeValue.match(Ct));
                        for (var n = t.filter(function(e) {
                                return e instanceof RegExp
                            }), s = 0, a = n.length; s < a; s++)
                            if (i.match(n[s])) return !0;
                        return !1
                    })(e, o) || i.removeAttribute(e.nodeName)
                })
            }, o = 0, l = a.length; o < l; o++) r(o);
        return n.body.innerHTML
    }
    t = t && t.hasOwnProperty("default") ? t["default"] : t, i = i && i.hasOwnProperty("default") ? i["default"] : i;
    var l = "transitionend",
        h = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var i = e.getAttribute("href");
                    t = i && "#" !== i ? i.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e) return 0;
                var i = t(e).css("transition-duration"),
                    n = t(e).css("transition-delay"),
                    s = parseFloat(i),
                    a = parseFloat(n);
                return s || a ? (i = i.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(n))) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                t(e).trigger(l)
            },
            supportsTransitionEnd: function() {
                return Boolean(l)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, i) {
                for (var n in i)
                    if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var s = i[n],
                            a = t[n],
                            r = a && h.isElement(a) ? "element" : (o = a, {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(s).test(r)) throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + r + '" but expected type "' + s + '".')
                    }
                var o
            },
            findShadowRoot: function(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? h.findShadowRoot(e.parentNode) : null;
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
        };
    t.fn.emulateTransitionEnd = r, t.event.special[h.TRANSITION_END] = {
        bindType: l,
        delegateType: l,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var c = "alert",
        d = "bs.alert",
        u = "." + d,
        p = t.fn[c],
        f = {
            CLOSE: "close" + u,
            CLOSED: "closed" + u,
            CLICK_DATA_API: "click" + u + ".data-api"
        },
        m = "alert",
        g = "fade",
        v = "show",
        b = function() {
            function e(e) {
                this._element = e
            }
            var i = e.prototype;
            return i.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, i.dispose = function() {
                t.removeData(this._element, d), this._element = null
            }, i._getRootElement = function(e) {
                var i = h.getSelectorFromElement(e),
                    n = !1;
                return i && (n = document.querySelector(i)), n || (n = t(e).closest("." + m)[0]), n
            }, i._triggerCloseEvent = function(e) {
                var i = t.Event(f.CLOSE);
                return t(e).trigger(i), i
            }, i._removeElement = function(e) {
                var i = this;
                if (t(e).removeClass(v), t(e).hasClass(g)) {
                    var n = h.getTransitionDurationFromElement(e);
                    t(e).one(h.TRANSITION_END, function(t) {
                        return i._destroyElement(e, t)
                    }).emulateTransitionEnd(n)
                } else this._destroyElement(e)
            }, i._destroyElement = function(e) {
                t(e).detach().trigger(f.CLOSED).remove()
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this),
                        s = n.data(d);
                    s || (s = new e(this), n.data(d, s)), "close" === i && s[i](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', b._handleDismiss(new b)), t.fn[c] = b._jQueryInterface, t.fn[c].Constructor = b, t.fn[c].noConflict = function() {
        return t.fn[c] = p, b._jQueryInterface
    };
    var y = "button",
        _ = "bs.button",
        w = "." + _,
        x = ".data-api",
        C = t.fn[y],
        k = "active",
        T = "btn",
        S = "focus",
        D = '[data-toggle^="button"]',
        E = '[data-toggle="buttons"]',
        M = 'input:not([type="hidden"])',
        I = ".active",
        $ = ".btn",
        P = {
            CLICK_DATA_API: "click" + w + x,
            FOCUS_BLUR_DATA_API: "focus" + w + x + " blur" + w + x
        },
        A = function() {
            function e(e) {
                this._element = e
            }
            var i = e.prototype;
            return i.toggle = function() {
                var e = !0,
                    i = !0,
                    n = t(this._element).closest(E)[0];
                if (n) {
                    var s = this._element.querySelector(M);
                    if (s) {
                        if ("radio" === s.type)
                            if (s.checked && this._element.classList.contains(k)) e = !1;
                            else {
                                var a = n.querySelector(I);
                                a && t(a).removeClass(k)
                            }
                        if (e) {
                            if (s.hasAttribute("disabled") || n.hasAttribute("disabled") || s.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            s.checked = !this._element.classList.contains(k), t(s).trigger("change")
                        }
                        s.focus(), i = !1
                    }
                }
                i && this._element.setAttribute("aria-pressed", !this._element.classList.contains(k)), e && t(this._element).toggleClass(k)
            }, i.dispose = function() {
                t.removeData(this._element, _), this._element = null
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(_);
                    n || (n = new e(this), t(this).data(_, n)), "toggle" === i && n[i]()
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(P.CLICK_DATA_API, D, function(e) {
        e.preventDefault();
        var i = e.target;
        t(i).hasClass(T) || (i = t(i).closest($)), A._jQueryInterface.call(t(i), "toggle")
    }).on(P.FOCUS_BLUR_DATA_API, D, function(e) {
        var i = t(e.target).closest($)[0];
        t(i).toggleClass(S, /^focus(in)?$/.test(e.type))
    }), t.fn[y] = A._jQueryInterface, t.fn[y].Constructor = A, t.fn[y].noConflict = function() {
        return t.fn[y] = C, A._jQueryInterface
    };
    var O = "carousel",
        N = "bs.carousel",
        z = "." + N,
        L = ".data-api",
        H = t.fn[O],
        F = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        R = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        W = "next",
        j = "prev",
        q = "left",
        Y = "right",
        B = {
            SLIDE: "slide" + z,
            SLID: "slid" + z,
            KEYDOWN: "keydown" + z,
            MOUSEENTER: "mouseenter" + z,
            MOUSELEAVE: "mouseleave" + z,
            TOUCHSTART: "touchstart" + z,
            TOUCHMOVE: "touchmove" + z,
            TOUCHEND: "touchend" + z,
            POINTERDOWN: "pointerdown" + z,
            POINTERUP: "pointerup" + z,
            DRAG_START: "dragstart" + z,
            LOAD_DATA_API: "load" + z + L,
            CLICK_DATA_API: "click" + z + L
        },
        V = "carousel",
        U = "active",
        G = "slide",
        X = "carousel-item-right",
        K = "carousel-item-left",
        Q = "carousel-item-next",
        J = "carousel-item-prev",
        Z = "pointer-event",
        ee = ".active",
        te = ".active.carousel-item",
        ie = ".carousel-item",
        ne = ".carousel-item img",
        se = ".carousel-item-next, .carousel-item-prev",
        ae = ".carousel-indicators",
        re = "[data-slide], [data-slide-to]",
        oe = '[data-ride="carousel"]',
        le = {
            TOUCH: "touch",
            PEN: "pen"
        },
        he = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(ae), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var i = e.prototype;
            return i.next = function() {
                this._isSliding || this._slide(W)
            }, i.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, i.prev = function() {
                this._isSliding || this._slide(j)
            }, i.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(se) && (h.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, i.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, i.to = function(e) {
                var i = this;
                this._activeElement = this._element.querySelector(te);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(B.SLID, function() {
                        return i.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var s = n < e ? W : j;
                        this._slide(s, this._items[e])
                    }
            }, i.dispose = function() {
                t(this._element).off(z), t.removeData(this._element, N), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, i._getConfig = function(e) {
                return e = a({}, F, e), h.typeCheckConfig(O, e, R), e
            }, i._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, i._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(B.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(B.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(B.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, i._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var i = function(t) {
                            e._pointerEvent && le[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        n = function(t) {
                            e._pointerEvent && le[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(ne)).on(B.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(B.POINTERDOWN, function(e) {
                        return i(e)
                    }), t(this._element).on(B.POINTERUP, function(e) {
                        return n(e)
                    }), this._element.classList.add(Z)) : (t(this._element).on(B.TOUCHSTART, function(e) {
                        return i(e)
                    }), t(this._element).on(B.TOUCHMOVE, function(t) {
                        var i;
                        (i = t).originalEvent.touches && 1 < i.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = i.originalEvent.touches[0].clientX - e.touchStartX
                    }), t(this._element).on(B.TOUCHEND, function(e) {
                        return n(e)
                    }))
                }
            }, i._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, i._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ie)) : [], this._items.indexOf(e)
            }, i._getItemByDirection = function(e, t) {
                var i = e === W,
                    n = e === j,
                    s = this._getItemIndex(t),
                    a = this._items.length - 1;
                if ((n && 0 === s || i && s === a) && !this._config.wrap) return t;
                var r = (s + (e === j ? -1 : 1)) % this._items.length;
                return -1 === r ? this._items[this._items.length - 1] : this._items[r]
            }, i._triggerSlideEvent = function(e, i) {
                var n = this._getItemIndex(e),
                    s = this._getItemIndex(this._element.querySelector(te)),
                    a = t.Event(B.SLIDE, {
                        relatedTarget: e,
                        direction: i,
                        from: s,
                        to: n
                    });
                return t(this._element).trigger(a), a
            }, i._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var i = [].slice.call(this._indicatorsElement.querySelectorAll(ee));
                    t(i).removeClass(U);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(U)
                }
            }, i._slide = function(e, i) {
                var n, s, a, r = this,
                    o = this._element.querySelector(te),
                    l = this._getItemIndex(o),
                    c = i || o && this._getItemByDirection(e, o),
                    d = this._getItemIndex(c),
                    u = Boolean(this._interval);
                if (a = e === W ? (n = K, s = Q, q) : (n = X, s = J, Y), c && t(c).hasClass(U)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(c, a).isDefaultPrevented() && o && c) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(c);
                    var p = t.Event(B.SLID, {
                        relatedTarget: c,
                        direction: a,
                        from: l,
                        to: d
                    });
                    if (t(this._element).hasClass(G)) {
                        t(c).addClass(s), h.reflow(c), t(o).addClass(n), t(c).addClass(n);
                        var f = parseInt(c.getAttribute("data-interval"), 10);
                        this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                        var m = h.getTransitionDurationFromElement(o);
                        t(o).one(h.TRANSITION_END, function() {
                            t(c).removeClass(n + " " + s).addClass(U), t(o).removeClass(U + " " + s + " " + n), r._isSliding = !1, setTimeout(function() {
                                return t(r._element).trigger(p)
                            }, 0)
                        }).emulateTransitionEnd(m)
                    } else t(o).removeClass(U), t(c).addClass(U), this._isSliding = !1, t(this._element).trigger(p);
                    u && this.cycle()
                }
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(N),
                        s = a({}, F, t(this).data());
                    "object" == typeof i && (s = a({}, s, i));
                    var r = "string" == typeof i ? i : s.slide;
                    if (n || (n = new e(this, s), t(this).data(N, n)), "number" == typeof i) n.to(i);
                    else if ("string" == typeof r) {
                        if ("undefined" == typeof n[r]) throw new TypeError('No method named "' + r + '"');
                        n[r]()
                    } else s.interval && s.ride && (n.pause(), n.cycle())
                })
            }, e._dataApiClickHandler = function(i) {
                var n = h.getSelectorFromElement(this);
                if (n) {
                    var s = t(n)[0];
                    if (s && t(s).hasClass(V)) {
                        var r = a({}, t(s).data(), t(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (r.interval = !1), e._jQueryInterface.call(t(s), r), o && t(s).data(N).to(o), i.preventDefault()
                    }
                }
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return F
                }
            }]), e
        }();
    t(document).on(B.CLICK_DATA_API, re, he._dataApiClickHandler), t(window).on(B.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(oe)), i = 0, n = e.length; i < n; i++) {
            var s = t(e[i]);
            he._jQueryInterface.call(s, s.data())
        }
    }), t.fn[O] = he._jQueryInterface, t.fn[O].Constructor = he, t.fn[O].noConflict = function() {
        return t.fn[O] = H, he._jQueryInterface
    };
    var ce = "collapse",
        de = "bs.collapse",
        ue = "." + de,
        pe = t.fn[ce],
        fe = {
            toggle: !0,
            parent: ""
        },
        me = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        ge = {
            SHOW: "show" + ue,
            SHOWN: "shown" + ue,
            HIDE: "hide" + ue,
            HIDDEN: "hidden" + ue,
            CLICK_DATA_API: "click" + ue + ".data-api"
        },
        ve = "show",
        be = "collapse",
        ye = "collapsing",
        _e = "collapsed",
        we = "width",
        xe = "height",
        Ce = ".show, .collapsing",
        ke = '[data-toggle="collapse"]',
        Te = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = [].slice.call(document.querySelectorAll(ke)), n = 0, s = i.length; n < s; n++) {
                    var a = i[n],
                        r = h.getSelectorFromElement(a),
                        o = [].slice.call(document.querySelectorAll(r)).filter(function(t) {
                            return t === e
                        });
                    null !== r && 0 < o.length && (this._selector = r, this._triggerArray.push(a))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var i = e.prototype;
            return i.toggle = function() {
                t(this._element).hasClass(ve) ? this.hide() : this.show()
            }, i.show = function() {
                var i, n, s = this;
                if (!(this._isTransitioning || t(this._element).hasClass(ve) || (this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(Ce)).filter(function(e) {
                        return "string" == typeof s._config.parent ? e.getAttribute("data-parent") === s._config.parent : e.classList.contains(be)
                    })).length && (i = null), i && (n = t(i).not(this._selector).data(de)) && n._isTransitioning))) {
                    var a = t.Event(ge.SHOW);
                    if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
                        i && (e._jQueryInterface.call(t(i).not(this._selector), "hide"), n || t(i).data(de, null));
                        var r = this._getDimension();
                        t(this._element).removeClass(be).addClass(ye), this._element.style[r] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(_e).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            l = h.getTransitionDurationFromElement(this._element);
                        t(this._element).one(h.TRANSITION_END, function() {
                            t(s._element).removeClass(ye).addClass(be).addClass(ve), s._element.style[r] = "", s.setTransitioning(!1), t(s._element).trigger(ge.SHOWN)
                        }).emulateTransitionEnd(l), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, i.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(ve)) {
                    var i = t.Event(ge.HIDE);
                    if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", h.reflow(this._element), t(this._element).addClass(ye).removeClass(be).removeClass(ve);
                        var s = this._triggerArray.length;
                        if (0 < s)
                            for (var a = 0; a < s; a++) {
                                var r = this._triggerArray[a],
                                    o = h.getSelectorFromElement(r);
                                null !== o && (t([].slice.call(document.querySelectorAll(o))).hasClass(ve) || t(r).addClass(_e).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var l = h.getTransitionDurationFromElement(this._element);
                        t(this._element).one(h.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass(ye).addClass(be).trigger(ge.HIDDEN)
                        }).emulateTransitionEnd(l)
                    }
                }
            }, i.setTransitioning = function(e) {
                this._isTransitioning = e
            }, i.dispose = function() {
                t.removeData(this._element, de), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, i._getConfig = function(e) {
                return (e = a({}, fe, e)).toggle = Boolean(e.toggle), h.typeCheckConfig(ce, e, me), e
            }, i._getDimension = function() {
                return t(this._element).hasClass(we) ? we : xe
            }, i._getParent = function() {
                var i, n = this;
                h.isElement(this._config.parent) ? (i = this._config.parent, "undefined" != typeof this._config.parent.jquery && (i = this._config.parent[0])) : i = document.querySelector(this._config.parent);
                var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    a = [].slice.call(i.querySelectorAll(s));
                return t(a).each(function(t, i) {
                    n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                }), i
            }, i._addAriaAndCollapsedClass = function(e, i) {
                var n = t(e).hasClass(ve);
                i.length && t(i).toggleClass(_e, !n).attr("aria-expanded", n)
            }, e._getTargetFromElement = function(e) {
                var t = h.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this),
                        s = n.data(de),
                        r = a({}, fe, n.data(), "object" == typeof i && i ? i : {});
                    if (!s && r.toggle && /show|hide/.test(i) && (r.toggle = !1), s || (s = new e(this, r), n.data(de, s)), "string" == typeof i) {
                        if ("undefined" == typeof s[i]) throw new TypeError('No method named "' + i + '"');
                        s[i]()
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return fe
                }
            }]), e
        }();
    t(document).on(ge.CLICK_DATA_API, ke, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var i = t(this),
            n = h.getSelectorFromElement(this),
            s = [].slice.call(document.querySelectorAll(n));
        t(s).each(function() {
            var e = t(this),
                n = e.data(de) ? "toggle" : i.data();
            Te._jQueryInterface.call(e, n)
        })
    }), t.fn[ce] = Te._jQueryInterface, t.fn[ce].Constructor = Te, t.fn[ce].noConflict = function() {
        return t.fn[ce] = pe, Te._jQueryInterface
    };
    var Se = "dropdown",
        De = "bs.dropdown",
        Ee = "." + De,
        Me = ".data-api",
        Ie = t.fn[Se],
        $e = new RegExp("38|40|27"),
        Pe = {
            HIDE: "hide" + Ee,
            HIDDEN: "hidden" + Ee,
            SHOW: "show" + Ee,
            SHOWN: "shown" + Ee,
            CLICK: "click" + Ee,
            CLICK_DATA_API: "click" + Ee + Me,
            KEYDOWN_DATA_API: "keydown" + Ee + Me,
            KEYUP_DATA_API: "keyup" + Ee + Me
        },
        Ae = "disabled",
        Oe = "show",
        Ne = "dropup",
        ze = "dropright",
        Le = "dropleft",
        He = "dropdown-menu-right",
        Fe = "position-static",
        Re = '[data-toggle="dropdown"]',
        We = ".dropdown form",
        je = ".dropdown-menu",
        qe = ".navbar-nav",
        Ye = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Be = "top-start",
        Ve = "top-end",
        Ue = "bottom-start",
        Ge = "bottom-end",
        Xe = "right-start",
        Ke = "left-start",
        Qe = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        Je = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        Ze = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var n = e.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(Ae)) {
                    var n = e._getParentFromElement(this._element),
                        s = t(this._menu).hasClass(Oe);
                    if (e._clearMenus(), !s) {
                        var a = {
                                relatedTarget: this._element
                            },
                            r = t.Event(Pe.SHOW, a);
                        if (t(n).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof i) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = n : h.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(n).addClass(Fe), this._popper = new i(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(n).closest(qe).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(Oe), t(n).toggleClass(Oe).trigger(t.Event(Pe.SHOWN, a))
                        }
                    }
                }
            }, n.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(Ae) || t(this._menu).hasClass(Oe))) {
                    var i = {
                            relatedTarget: this._element
                        },
                        n = t.Event(Pe.SHOW, i),
                        s = e._getParentFromElement(this._element);
                    t(s).trigger(n), n.isDefaultPrevented() || (t(this._menu).toggleClass(Oe), t(s).toggleClass(Oe).trigger(t.Event(Pe.SHOWN, i)))
                }
            }, n.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(Ae) && t(this._menu).hasClass(Oe)) {
                    var i = {
                            relatedTarget: this._element
                        },
                        n = t.Event(Pe.HIDE, i),
                        s = e._getParentFromElement(this._element);
                    t(s).trigger(n), n.isDefaultPrevented() || (t(this._menu).toggleClass(Oe), t(s).toggleClass(Oe).trigger(t.Event(Pe.HIDDEN, i)))
                }
            }, n.dispose = function() {
                t.removeData(this._element, De), t(this._element).off(Ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, n.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, n._addEventListeners = function() {
                var e = this;
                t(this._element).on(Pe.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, n._getConfig = function(e) {
                return e = a({}, this.constructor.Default, t(this._element).data(), e), h.typeCheckConfig(Se, e, this.constructor.DefaultType), e
            }, n._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(je))
                }
                return this._menu
            }, n._getPlacement = function() {
                var e = t(this._element.parentNode),
                    i = Ue;
                return e.hasClass(Ne) ? (i = Be, t(this._menu).hasClass(He) && (i = Ve)) : e.hasClass(ze) ? i = Xe : e.hasClass(Le) ? i = Ke : t(this._menu).hasClass(He) && (i = Ge), i
            }, n._detectNavbar = function() {
                return 0 < t(this._element).closest(".navbar").length
            }, n._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, n._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(De);
                    if (n || (n = new e(this, "object" == typeof i ? i : null), t(this).data(De, n)), "string" == typeof i) {
                        if ("undefined" == typeof n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, e._clearMenus = function(i) {
                if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                    for (var n = [].slice.call(document.querySelectorAll(Re)), s = 0, a = n.length; s < a; s++) {
                        var r = e._getParentFromElement(n[s]),
                            o = t(n[s]).data(De),
                            l = {
                                relatedTarget: n[s]
                            };
                        if (i && "click" === i.type && (l.clickEvent = i), o) {
                            var h = o._menu;
                            if (t(r).hasClass(Oe) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(r, i.target))) {
                                var c = t.Event(Pe.HIDE, l);
                                t(r).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(Oe), t(r).removeClass(Oe).trigger(t.Event(Pe.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, i = h.getSelectorFromElement(e);
                return i && (t = document.querySelector(i)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(i) {
                if ((/input|textarea/i.test(i.target.tagName) ? !(32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(je).length)) : $e.test(i.which)) && (i.preventDefault(), i.stopPropagation(), !this.disabled && !t(this).hasClass(Ae))) {
                    var n = e._getParentFromElement(this),
                        s = t(n).hasClass(Oe);
                    if (s && (!s || 27 !== i.which && 32 !== i.which)) {
                        var a = [].slice.call(n.querySelectorAll(Ye));
                        if (0 !== a.length) {
                            var r = a.indexOf(i.target);
                            38 === i.which && 0 < r && r--, 40 === i.which && r < a.length - 1 && r++, r < 0 && (r = 0), a[r].focus()
                        }
                    } else {
                        if (27 === i.which) {
                            var o = n.querySelector(Re);
                            t(o).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Qe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Je
                }
            }]), e
        }();
    t(document).on(Pe.KEYDOWN_DATA_API, Re, Ze._dataApiKeydownHandler).on(Pe.KEYDOWN_DATA_API, je, Ze._dataApiKeydownHandler).on(Pe.CLICK_DATA_API + " " + Pe.KEYUP_DATA_API, Ze._clearMenus).on(Pe.CLICK_DATA_API, Re, function(e) {
        e.preventDefault(), e.stopPropagation(), Ze._jQueryInterface.call(t(this), "toggle")
    }).on(Pe.CLICK_DATA_API, We, function(e) {
        e.stopPropagation()
    }), t.fn[Se] = Ze._jQueryInterface, t.fn[Se].Constructor = Ze, t.fn[Se].noConflict = function() {
        return t.fn[Se] = Ie, Ze._jQueryInterface
    };
    var et = "modal",
        tt = "bs.modal",
        it = "." + tt,
        nt = t.fn[et],
        st = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        at = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        rt = {
            HIDE: "hide" + it,
            HIDDEN: "hidden" + it,
            SHOW: "show" + it,
            SHOWN: "shown" + it,
            FOCUSIN: "focusin" + it,
            RESIZE: "resize" + it,
            CLICK_DISMISS: "click.dismiss" + it,
            KEYDOWN_DISMISS: "keydown.dismiss" + it,
            MOUSEUP_DISMISS: "mouseup.dismiss" + it,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + it,
            CLICK_DATA_API: "click" + it + ".data-api"
        },
        ot = "modal-dialog-scrollable",
        lt = "modal-scrollbar-measure",
        ht = "modal-backdrop",
        ct = "modal-open",
        dt = "fade",
        ut = "show",
        pt = ".modal-dialog",
        ft = ".modal-body",
        mt = '[data-toggle="modal"]',
        gt = '[data-dismiss="modal"]',
        vt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        bt = ".sticky-top",
        yt = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(pt), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var i = e.prototype;
            return i.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, i.show = function(e) {
                var i = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(dt) && (this._isTransitioning = !0);
                    var n = t.Event(rt.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(rt.CLICK_DISMISS, gt, function(e) {
                        return i.hide(e)
                    }), t(this._dialog).on(rt.MOUSEDOWN_DISMISS, function() {
                        t(i._element).one(rt.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return i._showElement(e)
                    }))
                }
            }, i.hide = function(e) {
                var i = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = t.Event(rt.HIDE);
                    if (t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var s = t(this._element).hasClass(dt);
                        if (s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(rt.FOCUSIN), t(this._element).removeClass(ut), t(this._element).off(rt.CLICK_DISMISS), t(this._dialog).off(rt.MOUSEDOWN_DISMISS), s) {
                            var a = h.getTransitionDurationFromElement(this._element);
                            t(this._element).one(h.TRANSITION_END, function(e) {
                                return i._hideModal(e)
                            }).emulateTransitionEnd(a)
                        } else this._hideModal()
                    }
                }
            }, i.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(it)
                }), t(document).off(rt.FOCUSIN), t.removeData(this._element, tt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, i.handleUpdate = function() {
                this._adjustDialog()
            }, i._getConfig = function(e) {
                return e = a({}, st, e), h.typeCheckConfig(et, e, at), e
            }, i._showElement = function(e) {
                var i = this,
                    n = t(this._element).hasClass(dt);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(ot) ? this._dialog.querySelector(ft).scrollTop = 0 : this._element.scrollTop = 0, n && h.reflow(this._element), t(this._element).addClass(ut), this._config.focus && this._enforceFocus();
                var s = t.Event(rt.SHOWN, {
                        relatedTarget: e
                    }),
                    a = function() {
                        i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(s)
                    };
                if (n) {
                    var r = h.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(h.TRANSITION_END, a).emulateTransitionEnd(r)
                } else a()
            }, i._enforceFocus = function() {
                var e = this;
                t(document).off(rt.FOCUSIN).on(rt.FOCUSIN, function(i) {
                    document !== i.target && e._element !== i.target && 0 === t(e._element).has(i.target).length && e._element.focus()
                })
            }, i._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(rt.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(rt.KEYDOWN_DISMISS)
            }, i._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(rt.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(rt.RESIZE)
            }, i._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(ct), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(rt.HIDDEN)
                })
            }, i._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, i._showBackdrop = function(e) {
                var i = this,
                    n = t(this._element).hasClass(dt) ? dt : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = ht, n && this._backdrop.classList.add(n), t(this._backdrop).appendTo(document.body), t(this._element).on(rt.CLICK_DISMISS, function(e) {
                            i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
                        }), n && h.reflow(this._backdrop), t(this._backdrop).addClass(ut), !e) return;
                    if (!n) return void e();
                    var s = h.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(h.TRANSITION_END, e).emulateTransitionEnd(s)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(ut);
                    var a = function() {
                        i._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(dt)) {
                        var r = h.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(h.TRANSITION_END, a).emulateTransitionEnd(r)
                    } else a()
                } else e && e()
            }, i._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, i._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, i._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, i._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var i = [].slice.call(document.querySelectorAll(vt)),
                        n = [].slice.call(document.querySelectorAll(bt));
                    t(i).each(function(i, n) {
                        var s = n.style.paddingRight,
                            a = t(n).css("padding-right");
                        t(n).data("padding-right", s).css("padding-right", parseFloat(a) + e._scrollbarWidth + "px")
                    }), t(n).each(function(i, n) {
                        var s = n.style.marginRight,
                            a = t(n).css("margin-right");
                        t(n).data("margin-right", s).css("margin-right", parseFloat(a) - e._scrollbarWidth + "px")
                    });
                    var s = document.body.style.paddingRight,
                        a = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", s).css("padding-right", parseFloat(a) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(ct)
            }, i._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(vt));
                t(e).each(function(e, i) {
                    var n = t(i).data("padding-right");
                    t(i).removeData("padding-right"), i.style.paddingRight = n || ""
                });
                var i = [].slice.call(document.querySelectorAll("" + bt));
                t(i).each(function(e, i) {
                    var n = t(i).data("margin-right");
                    "undefined" != typeof n && t(i).css("margin-right", n).removeData("margin-right")
                });
                var n = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, i._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = lt, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(i, n) {
                return this.each(function() {
                    var s = t(this).data(tt),
                        r = a({}, st, t(this).data(), "object" == typeof i && i ? i : {});
                    if (s || (s = new e(this, r), t(this).data(tt, s)), "string" == typeof i) {
                        if ("undefined" == typeof s[i]) throw new TypeError('No method named "' + i + '"');
                        s[i](n)
                    } else r.show && s.show(n)
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return st
                }
            }]), e
        }();
    t(document).on(rt.CLICK_DATA_API, mt, function(e) {
        var i, n = this,
            s = h.getSelectorFromElement(this);
        s && (i = document.querySelector(s));
        var r = t(i).data(tt) ? "toggle" : a({}, t(i).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = t(i).one(rt.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(rt.HIDDEN, function() {
                t(n).is(":visible") && n.focus()
            })
        });
        yt._jQueryInterface.call(t(i), r, this)
    }), t.fn[et] = yt._jQueryInterface, t.fn[et].Constructor = yt, t.fn[et].noConflict = function() {
        return t.fn[et] = nt, yt._jQueryInterface
    };
    var _t = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        wt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        xt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ct = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
        kt = "tooltip",
        Tt = "bs.tooltip",
        St = "." + Tt,
        Dt = t.fn[kt],
        Et = "bs-tooltip",
        Mt = new RegExp("(^|\\s)" + Et + "\\S+", "g"),
        It = ["sanitize", "whiteList", "sanitizeFn"],
        $t = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Pt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        At = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: wt
        },
        Ot = "show",
        Nt = "out",
        zt = {
            HIDE: "hide" + St,
            HIDDEN: "hidden" + St,
            SHOW: "show" + St,
            SHOWN: "shown" + St,
            INSERTED: "inserted" + St,
            CLICK: "click" + St,
            FOCUSIN: "focusin" + St,
            FOCUSOUT: "focusout" + St,
            MOUSEENTER: "mouseenter" + St,
            MOUSELEAVE: "mouseleave" + St
        },
        Lt = "fade",
        Ht = "show",
        Ft = ".tooltip-inner",
        Rt = ".arrow",
        Wt = "hover",
        jt = "focus",
        qt = "click",
        Yt = "manual",
        Bt = function() {
            function e(e, t) {
                if ("undefined" == typeof i) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var n = e.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var i = this.constructor.DATA_KEY,
                            n = t(e.currentTarget).data(i);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (t(this.getTipElement()).hasClass(Ht)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(n);
                    var s = h.findShadowRoot(this.element),
                        a = t.contains(null !== s ? s : this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !a) return;
                    var r = this.getTipElement(),
                        o = h.getUID(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(Lt);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        c = this._getAttachment(l);
                    this.addAttachmentClass(c);
                    var d = this._getContainer();
                    t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, r, {
                        placement: c,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Rt
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(r).addClass(Ht), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var u = function() {
                        e.config.animation && e._fixTransition();
                        var i = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), i === Nt && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(Lt)) {
                        var p = h.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(h.TRANSITION_END, u).emulateTransitionEnd(p)
                    } else u()
                }
            }, n.hide = function(e) {
                var i = this,
                    n = this.getTipElement(),
                    s = t.Event(this.constructor.Event.HIDE),
                    a = function() {
                        i._hoverState !== Ot && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), e && e()
                    };
                if (t(this.element).trigger(s), !s.isDefaultPrevented()) {
                    if (t(n).removeClass(Ht), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[qt] = !1, this._activeTrigger[jt] = !1, this._activeTrigger[Wt] = !1, t(this.tip).hasClass(Lt)) {
                        var r = h.getTransitionDurationFromElement(n);
                        t(n).one(h.TRANSITION_END, a).emulateTransitionEnd(r)
                    } else a();
                    this._hoverState = ""
                }
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(Et + "-" + e)
            }, n.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, n.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(Ft)), this.getTitle()), t(e).removeClass(Lt + " " + Ht)
            }, n.setElementContent = function(e, i) {
                "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = o(i, this.config.whiteList, this.config.sanitizeFn)), e.html(i)) : e.text(i) : this.config.html ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text())
            }, n.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, n._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : h.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, n._getAttachment = function(e) {
                return Pt[e.toUpperCase()]
            }, n._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(i) {
                    if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if (i !== Yt) {
                        var n = i === Wt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            s = i === Wt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(n, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(s, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function() {
                    e.element && e.hide()
                }), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(e, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? jt : Wt] = !0), t(i.getTipElement()).hasClass(Ht) || i._hoverState === Ot ? i._hoverState = Ot : (clearTimeout(i._timeout), i._hoverState = Ot, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
                    i._hoverState === Ot && i.show()
                }, i.config.delay.show) : i.show())
            }, n._leave = function(e, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? jt : Wt] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = Nt, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
                    i._hoverState === Nt && i.hide()
                }, i.config.delay.hide) : i.hide())
            }, n._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, n._getConfig = function(e) {
                var i = t(this.element).data();
                return Object.keys(i).forEach(function(e) {
                    -1 !== It.indexOf(e) && delete i[e]
                }), "number" == typeof(e = a({}, this.constructor.Default, i, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), h.typeCheckConfig(kt, e, this.constructor.DefaultType), e.sanitize && (e.template = o(e.template, e.whiteList, e.sanitizeFn)), e
            }, n._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, n._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    i = e.attr("class").match(Mt);
                null !== i && i.length && e.removeClass(i.join(""))
            }, n._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, n._fixTransition = function() {
                var e = this.getTipElement(),
                    i = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(Lt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(Tt),
                        s = "object" == typeof i && i;
                    if ((n || !/dispose|hide/.test(i)) && (n || (n = new e(this, s), t(this).data(Tt, n)), "string" == typeof i)) {
                        if ("undefined" == typeof n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return At
                }
            }, {
                key: "NAME",
                get: function() {
                    return kt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Tt
                }
            }, {
                key: "Event",
                get: function() {
                    return zt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return St
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return $t
                }
            }]), e
        }();
    t.fn[kt] = Bt._jQueryInterface, t.fn[kt].Constructor = Bt, t.fn[kt].noConflict = function() {
        return t.fn[kt] = Dt, Bt._jQueryInterface
    };
    var Vt = "popover",
        Ut = "bs.popover",
        Gt = "." + Ut,
        Xt = t.fn[Vt],
        Kt = "bs-popover",
        Qt = new RegExp("(^|\\s)" + Kt + "\\S+", "g"),
        Jt = a({}, Bt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Zt = a({}, Bt.DefaultType, {
            content: "(string|element|function)"
        }),
        ei = "fade",
        ti = "show",
        ii = ".popover-header",
        ni = ".popover-body",
        si = {
            HIDE: "hide" + Gt,
            HIDDEN: "hidden" + Gt,
            SHOW: "show" + Gt,
            SHOWN: "shown" + Gt,
            INSERTED: "inserted" + Gt,
            CLICK: "click" + Gt,
            FOCUSIN: "focusin" + Gt,
            FOCUSOUT: "focusout" + Gt,
            MOUSEENTER: "mouseenter" + Gt,
            MOUSELEAVE: "mouseleave" + Gt
        },
        ai = function(e) {
            function i() {
                return e.apply(this, arguments) || this
            }
            var n, a;
            a = e, (n = i).prototype = Object.create(a.prototype), (n.prototype.constructor = n).__proto__ = a;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(Kt + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(ii), this.getTitle());
                var i = this._getContent();
                "function" == typeof i && (i = i.call(this.element)), this.setElementContent(e.find(ni), i), e.removeClass(ei + " " + ti)
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    i = e.attr("class").match(Qt);
                null !== i && 0 < i.length && e.removeClass(i.join(""))
            }, i._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(Ut),
                        s = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new i(this, s), t(this).data(Ut, n)), "string" == typeof e)) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Jt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Vt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ut
                }
            }, {
                key: "Event",
                get: function() {
                    return si
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Gt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Zt
                }
            }]), i
        }(Bt);
    t.fn[Vt] = ai._jQueryInterface, t.fn[Vt].Constructor = ai, t.fn[Vt].noConflict = function() {
        return t.fn[Vt] = Xt, ai._jQueryInterface
    };
    var ri = "scrollspy",
        oi = "bs.scrollspy",
        li = "." + oi,
        hi = t.fn[ri],
        ci = {
            offset: 10,
            method: "auto",
            target: ""
        },
        di = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        ui = {
            ACTIVATE: "activate" + li,
            SCROLL: "scroll" + li,
            LOAD_DATA_API: "load" + li + ".data-api"
        },
        pi = "dropdown-item",
        fi = "active",
        mi = '[data-spy="scroll"]',
        gi = ".nav, .list-group",
        vi = ".nav-link",
        bi = ".nav-item",
        yi = ".list-group-item",
        _i = ".dropdown",
        wi = ".dropdown-item",
        xi = ".dropdown-toggle",
        Ci = "offset",
        ki = "position",
        Ti = function() {
            function e(e, i) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + vi + "," + this._config.target + " " + yi + "," + this._config.target + " " + wi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(ui.SCROLL, function(e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var i = e.prototype;
            return i.refresh = function() {
                var e = this,
                    i = this._scrollElement === this._scrollElement.window ? Ci : ki,
                    n = "auto" === this._config.method ? i : this._config.method,
                    s = n === ki ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var i, a = h.getSelectorFromElement(e);
                    if (a && (i = document.querySelector(a)), i) {
                        var r = i.getBoundingClientRect();
                        if (r.width || r.height) return [t(i)[n]().top + s, a]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, i.dispose = function() {
                t.removeData(this._element, oi), t(this._scrollElement).off(li), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, i._getConfig = function(e) {
                if ("string" != typeof(e = a({}, ci, "object" == typeof e && e ? e : {})).target) {
                    var i = t(e.target).attr("id");
                    i || (i = h.getUID(ri), t(e.target).attr("id", i)), e.target = "#" + i
                }
                return h.typeCheckConfig(ri, e, di), e
            }, i._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, i._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, i._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, i._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    i = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), i <= e) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var s = this._offsets.length; s--;) this._activeTarget !== this._targets[s] && e >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || e < this._offsets[s + 1]) && this._activate(this._targets[s])
                }
            }, i._activate = function(e) {
                this._activeTarget = e, this._clear();
                var i = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    n = t([].slice.call(document.querySelectorAll(i.join(","))));
                n.hasClass(pi) ? (n.closest(_i).find(xi).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(gi).prev(vi + ", " + yi).addClass(fi), n.parents(gi).prev(bi).children(vi).addClass(fi)), t(this._scrollElement).trigger(ui.ACTIVATE, {
                    relatedTarget: e
                })
            }, i._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(fi)
                }).forEach(function(e) {
                    return e.classList.remove(fi)
                })
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this).data(oi);
                    if (n || (n = new e(this, "object" == typeof i && i), t(this).data(oi, n)), "string" == typeof i) {
                        if ("undefined" == typeof n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ci
                }
            }]), e
        }();
    t(window).on(ui.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(mi)), i = e.length; i--;) {
            var n = t(e[i]);
            Ti._jQueryInterface.call(n, n.data())
        }
    }), t.fn[ri] = Ti._jQueryInterface, t.fn[ri].Constructor = Ti, t.fn[ri].noConflict = function() {
        return t.fn[ri] = hi, Ti._jQueryInterface
    };
    var Si = "bs.tab",
        Di = "." + Si,
        Ei = t.fn.tab,
        Mi = {
            HIDE: "hide" + Di,
            HIDDEN: "hidden" + Di,
            SHOW: "show" + Di,
            SHOWN: "shown" + Di,
            CLICK_DATA_API: "click" + Di + ".data-api"
        },
        Ii = "dropdown-menu",
        $i = "active",
        Pi = "disabled",
        Ai = "fade",
        Oi = "show",
        Ni = ".dropdown",
        zi = ".nav, .list-group",
        Li = ".active",
        Hi = "> li > .active",
        Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Ri = ".dropdown-toggle",
        Wi = "> .dropdown-menu .active",
        ji = function() {
            function e(e) {
                this._element = e
            }
            var i = e.prototype;
            return i.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass($i) || t(this._element).hasClass(Pi))) {
                    var i, n, s = t(this._element).closest(zi)[0],
                        a = h.getSelectorFromElement(this._element);
                    if (s) {
                        var r = "UL" === s.nodeName || "OL" === s.nodeName ? Hi : Li;
                        n = (n = t.makeArray(t(s).find(r)))[n.length - 1]
                    }
                    var o = t.Event(Mi.HIDE, {
                            relatedTarget: this._element
                        }),
                        l = t.Event(Mi.SHOW, {
                            relatedTarget: n
                        });
                    if (n && t(n).trigger(o), t(this._element).trigger(l), !l.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        a && (i = document.querySelector(a)), this._activate(this._element, s);
                        var c = function() {
                            var i = t.Event(Mi.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                s = t.Event(Mi.SHOWN, {
                                    relatedTarget: n
                                });
                            t(n).trigger(i), t(e._element).trigger(s)
                        };
                        i ? this._activate(i, i.parentNode, c) : c()
                    }
                }
            }, i.dispose = function() {
                t.removeData(this._element, Si), this._element = null
            }, i._activate = function(e, i, n) {
                var s = this,
                    a = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t(i).children(Li) : t(i).find(Hi))[0],
                    r = n && a && t(a).hasClass(Ai),
                    o = function() {
                        return s._transitionComplete(e, a, n)
                    };
                if (a && r) {
                    var l = h.getTransitionDurationFromElement(a);
                    t(a).removeClass(Oi).one(h.TRANSITION_END, o).emulateTransitionEnd(l)
                } else o()
            }, i._transitionComplete = function(e, i, n) {
                if (i) {
                    t(i).removeClass($i);
                    var s = t(i.parentNode).find(Wi)[0];
                    s && t(s).removeClass($i), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass($i), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), h.reflow(e), e.classList.contains(Ai) && e.classList.add(Oi), e.parentNode && t(e.parentNode).hasClass(Ii)) {
                    var a = t(e).closest(Ni)[0];
                    if (a) {
                        var r = [].slice.call(a.querySelectorAll(Ri));
                        t(r).addClass($i)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this),
                        s = n.data(Si);
                    if (s || (s = new e(this), n.data(Si, s)), "string" == typeof i) {
                        if ("undefined" == typeof s[i]) throw new TypeError('No method named "' + i + '"');
                        s[i]()
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(Mi.CLICK_DATA_API, Fi, function(e) {
        e.preventDefault(), ji._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = ji._jQueryInterface, t.fn.tab.Constructor = ji, t.fn.tab.noConflict = function() {
        return t.fn.tab = Ei, ji._jQueryInterface
    };
    var qi = "toast",
        Yi = "bs.toast",
        Bi = "." + Yi,
        Vi = t.fn[qi],
        Ui = {
            CLICK_DISMISS: "click.dismiss" + Bi,
            HIDE: "hide" + Bi,
            HIDDEN: "hidden" + Bi,
            SHOW: "show" + Bi,
            SHOWN: "shown" + Bi
        },
        Gi = "fade",
        Xi = "hide",
        Ki = "show",
        Qi = "showing",
        Ji = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Zi = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        en = '[data-dismiss="toast"]',
        tn = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var i = e.prototype;
            return i.show = function() {
                var e = this;
                t(this._element).trigger(Ui.SHOW), this._config.animation && this._element.classList.add(Gi);
                var i = function() {
                    e._element.classList.remove(Qi), e._element.classList.add(Ki), t(e._element).trigger(Ui.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove(Xi), this._element.classList.add(Qi), this._config.animation) {
                    var n = h.getTransitionDurationFromElement(this._element);
                    t(this._element).one(h.TRANSITION_END, i).emulateTransitionEnd(n)
                } else i()
            }, i.hide = function(e) {
                var i = this;
                this._element.classList.contains(Ki) && (t(this._element).trigger(Ui.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    i._close()
                }, this._config.delay))
            }, i.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Ki) && this._element.classList.remove(Ki),
                    t(this._element).off(Ui.CLICK_DISMISS), t.removeData(this._element, Yi), this._element = null, this._config = null
            }, i._getConfig = function(e) {
                return e = a({}, Zi, t(this._element).data(), "object" == typeof e && e ? e : {}), h.typeCheckConfig(qi, e, this.constructor.DefaultType), e
            }, i._setListeners = function() {
                var e = this;
                t(this._element).on(Ui.CLICK_DISMISS, en, function() {
                    return e.hide(!0)
                })
            }, i._close = function() {
                var e = this,
                    i = function() {
                        e._element.classList.add(Xi), t(e._element).trigger(Ui.HIDDEN)
                    };
                if (this._element.classList.remove(Ki), this._config.animation) {
                    var n = h.getTransitionDurationFromElement(this._element);
                    t(this._element).one(h.TRANSITION_END, i).emulateTransitionEnd(n)
                } else i()
            }, e._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = t(this),
                        s = n.data(Yi);
                    if (s || (s = new e(this, "object" == typeof i && i), n.data(Yi, s)), "string" == typeof i) {
                        if ("undefined" == typeof s[i]) throw new TypeError('No method named "' + i + '"');
                        s[i](this)
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ji
                }
            }, {
                key: "Default",
                get: function() {
                    return Zi
                }
            }]), e
        }();
    t.fn[qi] = tn._jQueryInterface, t.fn[qi].Constructor = tn, t.fn[qi].noConflict = function() {
            return t.fn[qi] = Vi, tn._jQueryInterface
        },
        function() {
            if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = h, e.Alert = b, e.Button = A, e.Carousel = he, e.Collapse = Te, e.Dropdown = Ze, e.Modal = yt, e.Popover = ai, e.Scrollspy = Ti, e.Tab = ji, e.Toast = tn, e.Tooltip = Bt, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}), ! function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t()
}(this, function() {
    "use strict";
    var e = "undefined" != typeof window,
        t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        i = e && "IntersectionObserver" in window,
        n = e && "classList" in document.createElement("p"),
        s = {
            elements_selector: "img",
            container: t || e ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            auto_unobserve: !0,
            callback_enter: null,
            callback_exit: null,
            callback_reveal: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            use_native: !1
        },
        a = function(e, t) {
            var i, n = new e(t);
            try {
                i = new CustomEvent("LazyLoad::Initialized", {
                    detail: {
                        instance: n
                    }
                })
            } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                    instance: n
                })
            }
            window.dispatchEvent(i)
        },
        r = function(e, t) {
            return e.getAttribute("data-" + t)
        },
        o = function(e, t, i) {
            var n = "data-" + t;
            null !== i ? e.setAttribute(n, i) : e.removeAttribute(n)
        },
        l = function(e) {
            return "true" === r(e, "was-processed")
        },
        h = function(e, t) {
            return o(e, "ll-timeout", t)
        },
        c = function(e) {
            return r(e, "ll-timeout")
        },
        d = function(e, t) {
            e && e(t)
        },
        u = function(e, t) {
            e._loadingCount += t, 0 === e._elements.length && 0 === e._loadingCount && d(e._settings.callback_finish)
        },
        p = function(e) {
            for (var t, i = [], n = 0; t = e.children[n]; n += 1) "SOURCE" === t.tagName && i.push(t);
            return i
        },
        f = function(e, t, i) {
            i && e.setAttribute(t, i)
        },
        m = function(e, t) {
            f(e, "sizes", r(e, t.data_sizes)), f(e, "srcset", r(e, t.data_srcset)), f(e, "src", r(e, t.data_src))
        },
        g = {
            IMG: function(e, t) {
                var i = e.parentNode;
                i && "PICTURE" === i.tagName && p(i).forEach(function(e) {
                    m(e, t)
                }), m(e, t)
            },
            IFRAME: function(e, t) {
                f(e, "src", r(e, t.data_src))
            },
            VIDEO: function(e, t) {
                p(e).forEach(function(e) {
                    f(e, "src", r(e, t.data_src))
                }), f(e, "src", r(e, t.data_src)), e.load()
            }
        },
        v = function(e, t) {
            var i, n, s = t._settings,
                a = e.tagName,
                o = g[a];
            return o ? (o(e, s), u(t, 1), void(t._elements = (i = t._elements, n = e, i.filter(function(e) {
                return e !== n
            })))) : void! function(e, t) {
                var i = r(e, t.data_src),
                    n = r(e, t.data_bg);
                i && (e.style.backgroundImage = 'url("'.concat(i, '")')), n && (e.style.backgroundImage = n)
            }(e, s)
        },
        b = function(e, t) {
            n ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
        },
        y = function(e, t, i) {
            e.addEventListener(t, i)
        },
        _ = function(e, t, i) {
            e.removeEventListener(t, i)
        },
        w = function(e, t, i) {
            _(e, "load", t), _(e, "loadeddata", t), _(e, "error", i)
        },
        x = function(e, t, i) {
            var s = i._settings,
                a = t ? s.class_loaded : s.class_error,
                r = t ? s.callback_loaded : s.callback_error,
                o = e.target;
            ! function(e, t) {
                n ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            }(o, s.class_loading), b(o, a), d(r, o), u(i, -1)
        },
        C = function(e, t) {
            var i = function i(s) {
                    x(s, !0, t), w(e, i, n)
                },
                n = function n(s) {
                    x(s, !1, t), w(e, i, n)
                };
            ! function(e, t, i) {
                y(e, "load", t), y(e, "loadeddata", t), y(e, "error", i)
            }(e, i, n)
        },
        k = ["IMG", "IFRAME", "VIDEO"],
        T = function(e, t) {
            var i = t._observer;
            E(e, t), i && t._settings.auto_unobserve && i.unobserve(e)
        },
        S = function(e) {
            var t = c(e);
            t && (clearTimeout(t), h(e, null))
        },
        D = function(e, t) {
            var i = t._settings.load_delay,
                n = c(e);
            n || (n = setTimeout(function() {
                T(e, t), S(e)
            }, i), h(e, n))
        },
        E = function(e, t, i) {
            var n = t._settings;
            !i && l(e) || (k.indexOf(e.tagName) > -1 && (C(e, t), b(e, n.class_loading)), v(e, t), function(e) {
                o(e, "was-processed", "true")
            }(e), d(n.callback_reveal, e), d(n.callback_set, e))
        },
        M = function(e) {
            return !!i && (e._observer = new IntersectionObserver(function(t) {
                t.forEach(function(t) {
                    return function(e) {
                        return e.isIntersecting || e.intersectionRatio > 0
                    }(t) ? function(e, t) {
                        var i = t._settings;
                        d(i.callback_enter, e), i.load_delay ? D(e, t) : T(e, t)
                    }(t.target, e) : function(e, t) {
                        var i = t._settings;
                        d(i.callback_exit, e), i.load_delay && S(e)
                    }(t.target, e)
                })
            }, {
                root: (t = e._settings).container === document ? null : t.container,
                rootMargin: t.thresholds || t.threshold + "px"
            }), !0);
            var t
        },
        I = ["IMG", "IFRAME"],
        $ = function(e, t) {
            return function(e) {
                return e.filter(function(e) {
                    return !l(e)
                })
            }((i = e || function(e) {
                return e.container.querySelectorAll(e.elements_selector)
            }(t), Array.prototype.slice.call(i)));
            var i
        },
        P = function(e, t) {
            this._settings = function(e) {
                return _extends({}, s, e)
            }(e), this._loadingCount = 0, M(this), this.update(t)
        };
    return P.prototype = {
        update: function(e) {
            var i, n = this,
                s = this._settings;
            this._elements = $(e, s), !t && this._observer ? (function(e) {
                return e.use_native && "loading" in HTMLImageElement.prototype
            }(s) && ((i = this)._elements.forEach(function(e) {
                -1 !== I.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), E(e, i))
            }), this._elements = $(e, s)), this._elements.forEach(function(e) {
                n._observer.observe(e)
            })) : this.loadAll()
        },
        destroy: function() {
            var e = this;
            this._observer && (this._elements.forEach(function(t) {
                e._observer.unobserve(t)
            }), this._observer = null), this._elements = null, this._settings = null
        },
        load: function(e, t) {
            E(e, this, t)
        },
        loadAll: function() {
            var e = this;
            this._elements.forEach(function(t) {
                T(t, e)
            })
        }
    }, e && function(e, t) {
        if (t)
            if (t.length)
                for (var i, n = 0; i = t[n]; n += 1) a(e, i);
            else a(e, t)
    }(P, window.lazyLoadOptions), P
}), $(document).ready(function() {
    function e() {
        $("#custom-advance-search").val(""), $("#custom-advance-search").data("chunks", 0), $("#show-more-vendors").addClass("d-none"), $(".mS-listing, .mS-vendors, .mS-tags, .mS-blog, .suggested-search, .recent-search").empty(), $(".mS-result-found, .skelton, .recent-search-tab, .menuSearch, .vendor-category-carousel").removeClass("active"), $("body").removeClass("mSactive"), window.location.hash = window.location.hash.replace(/#adsrch/g, "")
    }

    function t() {
        $(".menuSearch").addClass("active"), $("body").addClass("mSactive"), document.getElementById("custom-advance-search").focus(), n(), null == localStorage.getItem("suggested") ? ($(".skelton").addClass("active"), $.ajax({
            url: "/advance_search",
            type: "GET",
            data: {
                search: ""
            },
            dataType: "script",
            success: function() {
                $(".skelton").removeClass("active"), $(".recent-search-tab, .vendor-category-carousel").addClass("active")
            }
        })) : (s(), $(".recent-search-tab, .vendor-category-carousel").addClass("active")), setTimeout(function() {
            $("#custom-advance-search").trigger(), $("#custom-advance-search").focus()
        }, 100)
    }

    function n() {
        var e = localStorage.getItem(a);
        null != e && ($(".recent-search").append('<p class="mS-head">Recent Searches</p>'), e = JSON.parse(e), $.each(e, function(e, t) {
            t = t.replace("srch-hm-rcnt", ""), t = t.replace("srch-hm-sggstd", ""), $(".recent-search").append(t)
        }), $("a.click-tracking").addClass("srch-hm-rcnt"))
    }

    function s() {
        $(".suggested-search").append('<p class="mS-head">Suggestions for You</p>'), $.each(JSON.parse(localStorage.getItem(r)), function(e, t) {
            $(".suggested-search").append(t)
        })
    }
    const a = "recent_search",
        r = "suggested";
    $(".mS-tabs button").click(function() {
        var e = $(this).data("tab"),
            t = $(this);
        "mS-all" === e ? ($(".mS-listing, .mS-vendors, .mS-tags, .mS-blog").addClass("active"), t.addClass("active").siblings().removeClass("active")) : (t.addClass("active").siblings().removeClass("active"), $("." + e).addClass("active").siblings().removeClass("active"))
    }), $(".mS-close").click(function() {
        e()
    }), $(".advance-search-web").click(function() {
        t()
    }), $("#custom-advance-search").autocomplete({
        source: function(e) {
            $(".skelton").addClass("active"), $(".mS-all").removeClass("active"), $(".mS-result-found, .recent-search-tab, .vendor-category-carousel").removeClass("active"), $.ajax({
                url: "/advance_search",
                type: "GET",
                data: {
                    search: e.term
                },
                dataType: "script",
                success: function() {
                    $(".skelton").removeClass("active"), $(".mS-all").addClass("active"), $(".mS-vendors, .mS-tags, .mS-blog").hasClass("active") || $(".mS-vendors, .mS-tags, .mS-blog").addClass("active")
                }
            })
        },
        minLength: 3,
        delay: 500
    }).keyup(function() {
        $(this).val().length < 1 && ($(".mS-listing, .mS-vendors, .mS-tags, .mS-blog").empty(), $(".recent-search-tab, .vendor-category-carousel").addClass("active"), $(".mS-result-found").removeClass("active"), $("#show-more-vendors").addClass("d-none"))
    }), $(document).keyup(function(t) {
        27 == t.keyCode && e()
    }), $(".mS-scroller").on("scroll", function() {
        $("input#custom-advance-search").blur()
    }), window.addEventListener("hashchange", function() {
        window.location.hash.match(/adsrch/) ? t() : e()
    }), $(".advance-search-mob").click(function() {
        window.location.hash += "#adsrch"
    }), $(document).on("click", "a.click-tracking", function() {
        var e = this.outerHTML,
            t = this.getAttribute("href"),
            n = localStorage.getItem(a);
        for (null == n ? (localStorage.setItem(a, []), n = []) : n = JSON.parse(n), i = 0; i < n.length; i++) n[i].includes(t) && n.splice(i, 1);
        var s = localStorage.getItem(r);
        if (null != s) {
            for (s = JSON.parse(s), i = 0; i < s.length; i++) s[i].includes(t) && s.splice(i, 1);
            localStorage.setItem(r, JSON.stringify(s))
        }
        n.length > 10 && n.pop(), n.unshift(e), localStorage.setItem(a, JSON.stringify(n)), navigator.userAgent.match(/(iPod|iPhone|iPad)/) && window.history.replaceState(null, null, window.location.href.replaceAll("#adsrch", "")), $.ajax({
            url: "/track_advance_search",
            type: "POST",
            data: {
                event_action: this.dataset.actionName,
                event_label: $("#custom-advance-search").val(),
                event_category: "search",
                client_id: document.cookie.match(/_ga=(.+?);/)[1].split(".").slice(-2).join(".")
            }
        })
    }), $(document).on("click", "#show-more-vendors", function() {
        $.ajax({
            url: "/advance_search",
            type: "GET",
            data: {
                search: $("#custom-advance-search").val(),
                offset: $("#custom-advance-search").data("chunks") + 10
            },
            dataType: "script",
            success: function() {}
        })
    })
}), $(document).ready(function() {
    $(".annc-close").click(function() {
        $(".announcer").hide()
    }), $(".ss-nv-search, .t-bar-search").click(function(e) {
        e.stopPropagation()
    }), $(document).click(function() {
        $(".t-bar-search").removeClass("active")
    }), $(".rc-close").click(function() {
        $(".response-container").remove()
    })
}), $(document).ready(function() {
    function e() {
        $(".mobile-navigation").addClass("active"), $("body").addClass("active")
    }

    function t() {
        $(".mobile-navigation").removeClass("active"), $("body").removeClass("active")
    }
    $(window).width() <= 1e3 && ($(".mb-menu-btn").click(function() {
        window.location.hash += "#mopn"
    }), $(".mn-close").click(function() {
        window.location.hash = window.location.hash.replace(/#mopn/g, "")
    }), window.addEventListener("hashchange", function() {
        window.location.hash.match(/mopn/) ? e() : t()
    }), $(function() {
        $(".for-customer-list").on("click", function(e) {
            $(".accnt-drpdwn").toggleClass("active"), e.stopPropagation()
        }), $(document).on("click", function(e) {
            $(e.target).is(".accnt-drpdwn") === !1 && $(".accnt-drpdwn").removeClass("active")
        })
    }), $('button[name="show-more-vndr"]').click(function() {
        var e = $(".mn-sm-container");
        $(e).hasClass("expand") ? ($(e).removeClass("expand"), $(this).text("+ Show more vendors")) : ($(e).addClass("expand"), $(this).text("- Show less vendors"))
    }), $(".mn-tab.action").click(function() {
        $(this).hasClass("active") ? ($(this).removeClass("active"), $(this).next().removeClass("active")) : ($(".mn-tab.action").removeClass("active"), $(".mn-tab.action").next().removeClass("active"), $(this).addClass("active"), $(this).next().addClass("active"))
    }))
}), $(document).ready(function() {
    new LazyLoad({
        elements_selector: ".lazy"
    });
    if ($(document).on("click", ".vendor-cat,.srch-hm-vndr-ct", function(e) {
            e.preventDefault();
            var t = $(this).data("url"),
                i = $("#selected_city").val();
            "" != i ? window.location.href = t + "-in-" + i : window.location.href = t
        }), $(document).on("click", ".trusted-slide", function(e) {
            e.preventDefault();
            var t = $(this).attr("href"),
                i = $("#selected_city").val();
            "" != i ? window.location.href = t + "-in-" + i : window.location.href = t
        }), $(document).on("input", "#search-input-cat-desktop,#search-input-cat-mobile", function() {
            $(".vendor-cat-select .hs-selected").css("color", "#565656"), "" == $("#selected_category").val() && $(".vendor-cat-select .hs-selected").html("Select Vendor Category"), "" != $(this).val() && ($("#search-input-cat-desktop,#search-input-cat-mobile").removeClass("error"), $("#search-input-cat-desktop,#search-input-cat-mobile").attr("placeholder", "Search Vendor Category"));
            var e = $(this).val().toLowerCase();
            $(".category-option").css("display", "none"), $(".category-option").each(function(t, i) {
                $(i).text().toLowerCase().includes(e) && $(i).css("display", "block")
            }), 0 == $(".category-option:visible").length ? $(".no-category-results").css("display", "block") : $(".no-category-results").css("display", "none")
        }), $(document).on("focus", "#search-input-cat-desktop,#search-input-cat-mobile", function() {
            $(this).trigger("input")
        }), $(document).on("click", ".find_vendors_btn", function() {
            var e = $("#selected_category").val(),
                t = $("#selected_city").val();
            "" != e && "" != t ? window.location.href = e + "-in-" + t : "" != e ? window.location.href = e : ($(".vendor-cat-select .open-dropdown").click(), $(".vendor-cat-select .hs-selected").css("color", "#FF325E"), $(".vendor-cat-select .hs-selected").html("Please select vendor category"), $("#search-input-cat-desktop,#search-input-cat-mobile").addClass("error"), $("#search-input-cat-desktop,#search-input-cat-mobile").attr("placeholder", "Please select vendor category"))
        }), $(document).on("input", "#search-input-city-desktop,#search-input-city-mobile", function() {
            var e = $(this).val().toLowerCase();
            $(".city-option").css("display", "none"), $(".city-option").each(function(t, i) {
                $(i).text().toLowerCase().includes(e) && $(i).css("display", "block")
            }), $(".main-city-label,.other-city-label").css("display", "block"), 0 == $(".main-city:visible").length && $(".main-city-label").css("display", "none"), 0 == $(".other-city:visible").length && $(".other-city-label").css("display", "none"), 0 == $(".main-city:visible").length && 0 == $(".other-city:visible").length ? $(".no-city-results").css("display", "block") : $(".no-city-results").css("display", "none")
        }), $(document).on("focus", "#search-input-city-desktop,#search-input-city-mobile", function() {
            $(this).trigger("input")
        }), $(".view-more").on("click", function() {
            $(".view-less").css("display", "inline-flex"), $(".view-more").css("display", "none"), $(".more-categories").parent().addClass("active")
        }), $(".view-less").on("click", function() {
            $(".view-less").css("display", "none"), $(".view-more").css("display", "inline-flex"), $(".more-categories").parent().removeClass("active"), $("html, body").animate({
                scrollTop: $("#vendorCat").offset().top
            }, 500)
        }), $(window).width() > 900) {
        new Swiper(".vc-categories", {
            slidesPerView: "auto",
            spaceBetween: 30,
            freeMode: !0,
            slidesPerGroup: 3,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }
        }), new Swiper(".vc-inspirations", {
            slidesPerView: "auto",
            spaceBetween: 30,
            slidesPerGroup: 3,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }
        }), new Swiper(".blog-carousel", {
            slidesPerView: "auto",
            spaceBetween: 32,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }
        }), new Swiper(".trusted-carousel", {
            slidesPerView: "auto",
            spaceBetween: 32,
            slidesPerGroup: 3,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }
        })
    }
    if ($(window).width() < 900) {
        new Swiper(".vc-inspirations", {
            slidesPerView: "auto",
            spaceBetween: 16,
            slidesPerGroup: 3,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }
        }), new Swiper(".blog-carousel", {
            slidesPerView: "auto",
            spaceBetween: 18,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }
        }), new Swiper(".trusted-carousel", {
            slidesPerView: "auto",
            spaceBetween: 18,
            slidesPerGroup: 3,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }
        })
    }
    $(document).mouseup(function(e) {
        if ($(window).width() >= 900) {
            var t = $(".drp-dwn");
            t.is(e.target) || 0 !== t.has(e.target).length || $(".hs-select").removeClass("active")
        }
    }), $(".open-dropdown").click(function() {
        $(window).width() >= 900 ? ($(this).parent().addClass("active"), $(this).parent().find("input").focus()) : ($(".find-vendors-popup").addClass("active"), $(".universal-overlay").addClass("active fvp-close"), $("body").addClass("active"), $(".vendor-cat-select .expand-drpdwn").click())
    }), $(".expand-drpdwn").click(function() {
        $(this).parent().addClass("active"), $(this).parent().find("input").focus()
    }), $(".search-select").click(function() {
        var e = $(this).text(),
            t = $(this).parent().parent();
        $(t).find(".hs-selected").html(e), $(t).hasClass("active") && ($(t).removeClass("active"), "" == $("#selected_city").val() && ($(t).next().hasClass(".active") || ($(t).next().addClass("active"), $(t).next().find("input").focus())))
    }), $(".search-select.category-option").click(function() {
        $("#selected_category").val($(this).data("url")), $("#search-input-cat-desktop,#search-input-cat-mobile").val(""), $("#search-input-cat-desktop,#search-input-cat-mobile").trigger("input"), $(".vendor-cat-select .hs-selected").html($(this).text()), $("#search-input-cat-desktop,#search-input-cat-mobile").removeClass("error"), $("#search-input-cat-desktop,#search-input-cat-mobile").attr("placeholder", "Search Vendor Category")
    }), $(".search-select.city-option").click(function() {
        $("#selected_city").val($(this).data("city")), $("#search-input-city-desktop,#search-input-city-mobile").val(""), $("#search-input-city-desktop,#search-input-city-mobile").trigger("input"), $(".city-select .hs-selected").html($(this).text()), "" == $("#selected_category").val() && $(".vendor-cat-select .open-dropdown").click()
    }), $(document).on("click", ".fvp-close", function() {
        $(".find-vendors-popup, .universal-overlay").removeClass("active"), $("body").removeClass("active")
    }), $(".view-all-blg").click(function() {
        window.location.href = $(this).attr("href")
    })
}), $(document).ready(function() {
    function e() {
        $(".otp-timer").css("display", "block");
        var e = !0,
            t = (new Date).getTime();
        n && clearTimeout(n);
        var i = parseInt("180000"),
            n = setInterval(function() {
                if (e) {
                    var s = (new Date).getTime(),
                        a = s - t;
                    if (a < i) {
                        var r = Math.floor((i - a) / 6e4),
                            o = Math.floor((i - a) / 1e3 % 60);
                        $("p.otp-timer").html((r < 10 ? "0" : "") + r + ":" + (o < 10 ? "0" : "") + o)
                    } else $("p.otp-timer").html(""), $("p.otp-timer").css("display", "none"), e = !1, $(".otp-resend").css("display", "block"), $(".otp-resend").html('<a href="javascript:void(0)" class="resend_otp">Resend OTP</a>').fadeIn("slow"), clearTimeout(n), $(".otp-resend").on("click", function() {
                        $(".universal-loader").show(), $(".otp-resend").css("display", "none"), $(this).html("")
                    })
                }
            }, 1e3)
    }
    $(document).on("click", ".open-side-drawer", function() {
        $(".side-drawer, .universal-overlay").addClass("active")
    }), $(document).on("click", ".side-drawer-close", function() {
        $(".side-drawer, .universal-overlay").removeClass("active")
    }), $(".otp-container input").keyup(function(e) {
        const t = e.key;
        "Backspace" === t || "Delete" === t ? $(this).prev().click().focus() : $(this).next().click().focus()
    }), $(".otp-slide-back").click(function() {
        $(".slide-2s").removeClass("active"), $(".slide-1s").addClass("active")
    }), jQuery.validator.addMethod("format_name", function(e) {
        return !!/^[a-zA-Z ]{1,32}$/.test(e)
    }, "Please enter valid name"), $("#contact_expert_form").validate({
        onfocusout: function(e) {
            jQuery(e).valid()
        },
        errorPlacement: function(e, t) {
            e.insertAfter(t.parent())
        },
        rules: {
            name: {
                required: !0,
                format_name: !0
            },
            mobile: {
                required: !0,
                number: !0,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            mobile: {
                required: "Mobile number is required",
                number: "Enter numbers only",
                minlength: "Enter only 10 digit mobile no. without spaces",
                maxlength: "Enter only 10 digit mobile no. without spaces"
            },
            name: {
                required: "Name is required"
            }
        }
    }), $(".contact-expert").click(function() {
        var t = $(".talk-to-agent #name").val(),
            i = $("#mobile").val(),
            n = $("#tte_category").val(),
            s = $("#tte_city").val();
        $("#unique_code").val(""), $("#contact_expert_form").valid() && ($(".universal-loader").css("display", "block"), $(".tte_mobile").html(i), $(".tte-error,.os-whatsapp,.otp-error").css("display", "none"), $.ajax({
            url: "/save-talk-to-expert",
            method: "POST",
            data: {
                name: t,
                mobile: i,
                category: n,
                city: s
            },
            dataType: "json",
            success: function(t) {
                "Success" == t.status ? "thank_you" == t.next_page ? ($(".slide-1s").removeClass("active"), $(".slide-3s").addClass("active")) : ($("#unique_code").val(t.unique_code), $(".slide-1s").removeClass("active"), $(".slide-2s").addClass("active"), e(), 1 != t.wa && ($(".os-whatsapp").css("display", "block"), $("#wa_consent").prop("checked", !0))) : ($(".tte-error").html(t.msg), $(".tte-error").css("display", "block"))
            },
            complete: function() {
                $(".universal-loader").css("display", "none")
            }
        }))
    }), $(".tte_submit_otp").click(function() {
        otp = $("#profile_otp_first").val() + $("#profile_otp_second").val() + $("#profile_otp_third").val() + $("#profile_otp_fourth").val(), $(".otp-error").css("display", "none");
        var e = $(".talk-to-agent #name").val(),
            t = $("#tte_category").val(),
            i = $("#tte_city").val(),
            n = $("#mobile").val();
        $(".universal-loader").css("display", "block"), $.ajax({
            url: "/ttexpert-otp-verfiy",
            method: "POST",
            data: {
                unique_code: $("#unique_code").val(),
                otp: otp,
                name: e,
                wa_consent: $("#wa_consent").prop("checked"),
                phone: n,
                category: t,
                city: i
            },
            dataType: "json",
            success: function(e) {
                "Success" == e.status ? ($("#unique_code").val(""), $(".slide-2s").removeClass("active"), $(".slide-3s").addClass("active")) : ($(".otp_input").val(""), $(".otp-error").html(e.msg), $(".otp-error").css("display", "block"))
            },
            complete: function() {
                $(".universal-loader").css("display", "none")
            }
        })
    }), $(document).on("click", ".resend_otp", function() {
        $.ajax({
            url: "/ttexpert-resend-otp",
            method: "POST",
            data: {
                unique_code: $("#unique_code").val(),
                phone: $("#mobile").val()
            },
            dataType: "json",
            success: function(t) {
                "Success" == t.status ? e() : ($(".otp-error").html(t.msg), $(".otp-error").css("display", "block"))
            },
            complete: function() {
                $(".universal-loader").css("display", "none")
            }
        })
    }), $(".otp_input").on("keydown", function(e) {
        if (1 == $(this).val().length && 8 != e.which) return !1
    }), $("#name,#mobile").on("input", function() {
        $(".tte-error").css("display", "none")
    })
});