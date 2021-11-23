/**
 * All rights reserved to Piwik PRO, Poland, since 2015
 */

! function() {
    "use strict";

    function u(t, e) {
        if (t !== e) throw new TypeError("Cannot instantiate an arrow function")
    }
    var s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r, e = function(t) {
            return t && t.Math == Math && t
        },
        f = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof s && s) || function() {
            return this
        }() || Function("return this")(),
        n = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        },
        h = !n(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
        i = {}.propertyIsEnumerable,
        p = {
            f: (r = Object.getOwnPropertyDescriptor) && !i.call({
                1: 2
            }, 1) ? function(t) {
                t = r(this, t);
                return !!t && t.enumerable
            } : i
        },
        o = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        a = {}.toString,
        c = function(t) {
            return a.call(t).slice(8, -1)
        },
        l = "".split,
        S = n(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" == c(t) ? l.call(t, "") : Object(t)
        } : Object,
        d = function(t) {
            if (t == undefined) throw TypeError("Can't call method on " + t);
            return t
        },
        g = function(t) {
            return S(d(t))
        },
        y = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        v = function(t, e) {
            if (!y(t)) return t;
            var n, r;
            if (e && "function" == typeof(n = t.toString) && !y(r = n.call(t))) return r;
            if ("function" == typeof(n = t.valueOf) && !y(r = n.call(t))) return r;
            if (!e && "function" == typeof(n = t.toString) && !y(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        w = function(t) {
            return Object(d(t))
        },
        m = {}.hasOwnProperty,
        b = function(t, e) {
            return m.call(w(t), e)
        },
        O = f.document,
        x = y(O) && y(O.createElement),
        C = !h && !n(function() {
            return 7 != Object.defineProperty(x ? O.createElement("div") : {}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        T = Object.getOwnPropertyDescriptor,
        E = {
            f: h ? T : function r(t, e) {
                if (t = g(t), e = v(e, !0), C) try {
                    return T(t, e)
                } catch (n) {}
                if (b(t, e)) return o(!p.f.call(t, e), t[e])
            }
        },
        j = function(t) {
            if (!y(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        L = Object.defineProperty,
        A = {
            f: h ? L : function At(t, e, n) {
                if (j(t), e = v(e, !0), j(n), C) try {
                    return L(t, e, n)
                } catch (r) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        },
        D = h ? function(t, e, n) {
            return A.f(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        },
        k = function(t, e) {
            try {
                D(f, t, e)
            } catch (n) {
                f[t] = e
            }
            return e
        },
        I = "__core-js_shared__",
        M = f[I] || k(I, {}),
        P = Function.toString;
    "function" != typeof M.inspectSource && (M.inspectSource = function(t) {
        return P.call(t)
    });
    var R, F, N, _, W, z, G, U, V, B = M.inspectSource,
        H = f.WeakMap,
        e = "function" == typeof H && /native code/.test(B(H)),
        i = t(function(t) {
            (t.exports = function(t, e) {
                return M[t] || (M[t] = e !== undefined ? e : {})
            })("versions", []).push({
                version: "3.12.1",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }),
        q = 0,
        J = Math.random(),
        K = function(t) {
            return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++q + J).toString(36)
        },
        Y = i("keys"),
        Q = {},
        X = "Object already initialized",
        I = f.WeakMap;
    G = e || M.state ? (R = M.state || (M.state = new I), F = R.get, N = R.has, _ = R.set, W = function(t, e) {
        if (N.call(R, t)) throw new TypeError(X);
        return e.facade = t, _.call(R, t, e), e
    }, z = function(t) {
        return F.call(R, t) || {}
    }, function(t) {
        return N.call(R, t)
    }) : (U = Y[V = "state"] || (Y[V] = K(V)), Q[U] = !0, W = function(t, e) {
        if (b(t, U)) throw new TypeError(X);
        return e.facade = t, D(t, U, e), e
    }, z = function(t) {
        return b(t, U) ? t[U] : {}
    }, function(t) {
        return b(t, U)
    });
    var Z = {
            set: W,
            get: z,
            has: G,
            enforce: function(t) {
                return G(t) ? z(t) : W(t, {})
            },
            getterFor: function(n) {
                return function(t) {
                    var e;
                    if (!y(t) || (e = z(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                    return e
                }
            }
        },
        $ = t(function(t) {
            var e = Z.get,
                c = Z.enforce,
                u = String(String).split("String");
            (t.exports = function(t, e, n, r) {
                var i = !!r && !!r.unsafe,
                    o = !!r && !!r.enumerable,
                    a = !!r && !!r.noTargetGet;
                "function" == typeof n && ("string" != typeof e || b(n, "name") || D(n, "name", e), (r = c(n)).source || (r.source = u.join("string" == typeof e ? e : ""))), t !== f ? (i ? !a && t[e] && (o = !0) : delete t[e], o ? t[e] = n : D(t, e, n)) : o ? t[e] = n : k(e, n)
            })(Function.prototype, "toString", function a() {
                return "function" == typeof this && e(this).source || B(this)
            })
        }),
        tt = f,
        et = function(t) {
            return "function" == typeof t ? t : undefined
        },
        H = function(t, e) {
            return arguments.length < 2 ? et(tt[t]) || et(f[t]) : tt[t] && tt[t][e] || f[t] && f[t][e]
        },
        nt = Math.ceil,
        rt = Math.floor,
        it = function(t) {
            return isNaN(t = +t) ? 0 : (0 < t ? rt : nt)(t)
        },
        ot = Math.min,
        at = function(t) {
            return 0 < t ? ot(it(t), 9007199254740991) : 0
        },
        ct = Math.max,
        ut = Math.min,
        st = function(t, e) {
            t = it(t);
            return t < 0 ? ct(t + e, 0) : ut(t, e)
        },
        e = function(c) {
            return function(t, e, n) {
                var r, i = g(t),
                    o = at(i.length),
                    a = st(n, o);
                if (c && e != e) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === e) return c || a || 0;
                return !c && -1
            }
        },
        ft = {
            includes: e(!0),
            indexOf: e(!1)
        }.indexOf,
        lt = function(t, e) {
            var n, r = g(t),
                i = 0,
                o = [];
            for (n in r) !b(Q, n) && b(r, n) && o.push(n);
            for (; e.length > i;) b(r, n = e[i++]) && (~ft(o, n) || o.push(n));
            return o
        },
        ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        pt = ht.concat("length", "prototype"),
        dt = {
            f: Object.getOwnPropertyNames || function(t) {
                return lt(t, pt)
            }
        },
        gt = {
            f: Object.getOwnPropertySymbols
        },
        yt = H("Reflect", "ownKeys") || function yt(t) {
            var e = dt.f(j(t)),
                n = gt.f;
            return n ? e.concat(n(t)) : e
        },
        vt = /#|\.prototype\./,
        I = function(t, e) {
            t = bt[mt(t)];
            return t == wt || t != St && ("function" == typeof e ? n(e) : !!e)
        },
        mt = I.normalize = function(t) {
            return String(t).replace(vt, ".").toLowerCase()
        },
        bt = I.data = {},
        St = I.NATIVE = "N",
        wt = I.POLYFILL = "P",
        Ot = I,
        xt = E.f,
        e = function(t, e) {
            var n, r, i, o = t.target,
                a = t.global,
                c = t.stat,
                u = a ? f : c ? f[o] || k(o, {}) : (f[o] || {}).prototype;
            if (u)
                for (n in e) {
                    if (r = e[n], i = t.noTargetGet ? (i = xt(u, n)) && i.value : u[n], !Ot(a ? n : o + (c ? "." : "#") + n, t.forced) && i !== undefined) {
                        if (typeof r == typeof i) continue;
                        ! function(t, e) {
                            for (var n = yt(e), r = A.f, i = E.f, o = 0; o < n.length; o++) {
                                var a = n[o];
                                b(t, a) || r(t, a, i(e, a))
                            }
                        }(r, i)
                    }(t.sham || i && i.sham) && D(r, "sham", !0), $(u, n, r, t)
                }
        },
        Ct = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        Tt = [].slice,
        Et = {};
    e({
        target: "Function",
        proto: !0
    }, {
        bind: Function.bind || function(e) {
            var n = Ct(this),
                r = Tt.call(arguments, 1),
                i = function() {
                    var t = r.concat(Tt.call(arguments));
                    return this instanceof i ? function(t, e, n) {
                        if (!(e in Et)) {
                            for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                            Et[e] = Function("C,a", "return new C(" + r.join(",") + ")")
                        }
                        return Et[e](t, n)
                    }(n, t.length, t) : n.apply(e, t)
                };
            return y(n.prototype) && (i.prototype = n.prototype), i
        }
    });
    var jt = Object.keys || function Y(t) {
            return lt(t, ht)
        },
        Lt = Object.assign,
        At = Object.defineProperty,
        I = !Lt || n(function() {
            if (h && 1 !== Lt({
                    b: 1
                }, Lt(At({}, "a", {
                    enumerable: !0,
                    get: function() {
                        At(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return 1;
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function(t) {
                e[t] = t
            }), 7 != Lt({}, t)[n] || jt(Lt({}, e)).join("") != r
        }) ? function(t, e) {
            for (var n = w(t), r = arguments.length, i = 1, o = gt.f, a = p.f; i < r;)
                for (var c, u = S(arguments[i++]), s = o ? jt(u).concat(o(u)) : jt(u), f = s.length, l = 0; l < f;) c = s[l++], h && !a.call(u, c) || (n[c] = u[c]);
            return n
        } : Lt;
    e({
        target: "Object",
        stat: !0,
        forced: Object.assign !== I
    }, {
        assign: I
    });
    var Dt = "ppms_webstorage",
        kt = {
            enableLocalStorage: !0
        },
        It = Array.isArray || function It(t) {
            return "Array" == c(t)
        },
        Mt = function(t, e, n) {
            e = v(e);
            e in t ? A.f(t, e, o(0, n)) : t[e] = n
        },
        I = H("navigator", "userAgent") || "",
        H = f.process,
        H = H && H.versions,
        H = H && H.v8;
    H ? Gt = (Wt = H.split("."))[0] < 4 ? 1 : Wt[0] + Wt[1] : I && (!(Wt = I.match(/Edge\/(\d+)/)) || 74 <= Wt[1]) && (Wt = I.match(/Chrome\/(\d+)/)) && (Gt = Wt[1]);
    var Pt = Gt && +Gt,
        Rt = !!Object.getOwnPropertySymbols && !n(function() {
            return !String(Symbol()) || !Symbol.sham && Pt && Pt < 41
        }),
        I = Rt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ft = i("wks"),
        Nt = f.Symbol,
        _t = I ? Nt : Nt && Nt.withoutSetter || K,
        Wt = function(t) {
            return b(Ft, t) && (Rt || "string" == typeof Ft[t]) || (Rt && b(Nt, t) ? Ft[t] = Nt[t] : Ft[t] = _t("Symbol." + t)), Ft[t]
        },
        zt = Wt("species"),
        Gt = function(e) {
            return 51 <= Pt || !n(function() {
                var t = [];
                return (t.constructor = {})[zt] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            })
        },
        i = Gt("slice"),
        Ut = Wt("species"),
        Vt = [].slice,
        Bt = Math.max;
    e({
        target: "Array",
        proto: !0,
        forced: !i
    }, {
        slice: function Tt(t, e) {
            var n, r, i, o = g(this),
                a = at(o.length),
                c = st(t, a),
                u = st(e === undefined ? a : e, a);
            if (It(o) && ((n = "function" == typeof(n = o.constructor) && (n === Array || It(n.prototype)) || y(n) && null === (n = n[Ut]) ? undefined : n) === Array || n === undefined)) return Vt.call(o, c, u);
            for (r = new(n === undefined ? Array : n)(Bt(u - c, 0)), i = 0; c < u; c++, i++) c in o && Mt(r, i, o[c]);
            return r.length = i, r
        }
    });
    var I = Date.prototype,
        Ht = "Invalid Date",
        i = "toString",
        qt = I[i],
        Jt = I.getTime;
    new Date(NaN) + "" != Ht && $(I, i, function a() {
        var t = Jt.call(this);
        return t == t ? qt.call(this) : Ht
    });
    var Kt = Wt("species"),
        Yt = function(t, e) {
            var n;
            return new((n = It(t) && ("function" == typeof(n = t.constructor) && (n === Array || It(n.prototype)) || y(n) && null === (n = n[Kt])) ? undefined : n) === undefined ? Array : n)(0 === e ? 0 : e)
        },
        Qt = Wt("isConcatSpreadable"),
        Xt = 9007199254740991,
        Zt = "Maximum allowed index exceeded",
        i = 51 <= Pt || !n(function() {
            var t = [];
            return t[Qt] = !1, t.concat()[0] !== t
        }),
        Wt = Gt("concat");
    e({
        target: "Array",
        proto: !0,
        forced: !i || !Wt
    }, {
        concat: function(t) {
            for (var e, n, r, i = w(this), o = Yt(i, 0), a = 0, c = -1, u = arguments.length; c < u; c++)
                if (function(t) {
                        if (!y(t)) return !1;
                        var e = t[Qt];
                        return e !== undefined ? !!e : It(t)
                    }(r = -1 === c ? i : arguments[c])) {
                    if (n = at(r.length), Xt < a + n) throw TypeError(Zt);
                    for (e = 0; e < n; e++, a++) e in r && Mt(o, a, r[e])
                } else {
                    if (Xt <= a) throw TypeError(Zt);
                    Mt(o, a++, r)
                }
            return o.length = a, o
        }
    });
    var $t = [].push,
        Wt = function(h) {
            var p = 1 == h,
                d = 2 == h,
                g = 3 == h,
                y = 4 == h,
                v = 6 == h,
                m = 7 == h,
                b = 5 == h || v;
            return function(t, e, n, r) {
                for (var i, o, a = w(t), c = S(a), u = function(r, i, t) {
                        if (Ct(r), i === undefined) return r;
                        switch (t) {
                            case 0:
                                return function() {
                                    return r.call(i)
                                };
                            case 1:
                                return function(t) {
                                    return r.call(i, t)
                                };
                            case 2:
                                return function(t, e) {
                                    return r.call(i, t, e)
                                };
                            case 3:
                                return function(t, e, n) {
                                    return r.call(i, t, e, n)
                                }
                        }
                        return function() {
                            return r.apply(i, arguments)
                        }
                    }(e, n, 3), s = at(c.length), f = 0, r = r || Yt, l = p ? r(t, s) : d || m ? r(t, 0) : undefined; f < s; f++)
                    if ((b || f in c) && (o = u(i = c[f], f, a), h))
                        if (p) l[f] = o;
                        else if (o) switch (h) {
                    case 3:
                        return !0;
                    case 5:
                        return i;
                    case 6:
                        return f;
                    case 2:
                        $t.call(l, i)
                } else switch (h) {
                    case 4:
                        return !1;
                    case 7:
                        $t.call(l, i)
                }
                return v ? -1 : g || y ? y : l
            }
        },
        Wt = {
            forEach: Wt(0),
            map: Wt(1),
            filter: Wt(2),
            some: Wt(3),
            every: Wt(4),
            find: Wt(5),
            findIndex: Wt(6),
            filterOut: Wt(7)
        },
        te = Wt.filter;
    e({
        target: "Array",
        proto: !0,
        forced: !Gt("filter")
    }, {
        filter: function(t) {
            return te(this, t, 1 < arguments.length ? arguments[1] : undefined)
        }
    });
    var ee, ne = function ne(t) {
            var c = this;
            this.getAll = function() {
                return u(this, c), this.getInternalStorage()
            }.bind(this), this.set = function(t, e, n) {
                var r = this;
                u(this, c), this.remove(t, n);
                var i = function i(t) {
                    var e = this;
                    u(this, r);
                    var n = function(t) {
                        return u(this, e), 1 < t.length && "/" === t[t.length - 1] ? n(t.slice(0, -1)) : t
                    }.bind(this);
                    return t === undefined ? "/" : "" === t ? n(this.window.location.pathname) : t
                }.bind(this);
                n.expires && n.expires.getTime() < (new Date).getTime() || (n = [].concat(this.getInternalStorage(), [{
                    key: t,
                    value: e,
                    options: {
                        expires: n.expires.toUTCString(),
                        path: i(n.path),
                        domain: n.domain,
                        secure: n.secure,
                        sameSite: n.sameSite
                    }
                }]), this.setInternalStorage(n))
            }.bind(this), this.remove = function(r, t) {
                var i = this;
                u(this, c);
                var e = this.getInternalStorage(),
                    o = t ? t.domain : undefined,
                    a = t && "undefined" != typeof t.path ? t.path : "/",
                    e = e.filter(function(t) {
                        u(this, i);
                        var e = t.key === r,
                            n = t.options.domain === o,
                            t = t.options.path === a;
                        return !(e && n && t)
                    }.bind(this));
                this.setInternalStorage(e)
            }.bind(this), this.getInternalStorage = function() {
                var t;
                u(this, c);
                try {
                    t = JSON.parse(localStorage.getItem(Dt) || "[]")
                } catch (e) {
                    return localStorage.removeItem(Dt), []
                }
                return t
            }.bind(this), this.setInternalStorage = function(t) {
                u(this, c), localStorage.setItem(Dt, JSON.stringify(t))
            }.bind(this), this.removeExpired = function() {
                var e = this;
                u(this, c);
                var t = this.getInternalStorage().filter(function(t) {
                    return u(this, e), new Date(t.options.expires) >= new Date
                }.bind(this));
                this.setInternalStorage(t)
            }.bind(this), this.window = t, this.removeExpired()
        },
        re = t(function(t, e) {
            var r = s && s.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function i(t, e) {
                if (!e) return "";
                t = "; " + t;
                return !0 === e ? t : t + "=" + e
            }

            function o(t, e, n) {
                return encodeURIComponent(t).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(e).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + ("number" == typeof(e = n).expires && ((n = new Date).setMilliseconds(n.getMilliseconds() + 864e5 * e.expires), e.expires = n), i("Expires", e.expires ? e.expires.toUTCString() : "") + i("Domain", e.domain) + i("Path", e.path) + i("Secure", e.secure) + i("SameSite", e.sameSite))
            }

            function n(t) {
                for (var e = {}, n = t ? t.split("; ") : [], r = /(%[\dA-F]{2})+/gi, i = 0; i < n.length; i++) {
                    var o = n[i].split("="),
                        a = o.slice(1).join("=");
                    '"' === a.charAt(0) && (a = a.slice(1, -1));
                    try {
                        e[o[0].replace(r, decodeURIComponent)] = a.replace(r, decodeURIComponent)
                    } catch (c) {}
                }
                return e
            }

            function a() {
                return n(document.cookie)
            }

            function c(t, e, n) {
                document.cookie = o(t, e, r({
                    path: "/"
                }, n))
            }
            e.__esModule = !0, e.encode = o, e.parse = n, e.getAll = a, e.get = function(t) {
                return a()[t]
            }, e.set = c, e.remove = function(t, e) {
                c(t, "", r(r({}, e), {
                    expires: -1
                }))
            }
        });
    (ee = re) && ee.__esModule && Object.prototype.hasOwnProperty.call(ee, "default") && ee["default"];
    re.encode, re.parse;
    var ie = re.getAll,
        oe = re.get,
        ae = re.set,
        ce = re.remove,
        ue = function ue() {
            var e = this;
            this.get = function(t) {
                u(this, e);
                t = oe(t);
                return t !== undefined ? t : null
            }.bind(this), this.getAll = function() {
                return u(this, e), ie()
            }.bind(this)
        },
        se = function se() {
            var i = this;
            this.set = function(t, e, n) {
                u(this, i);
                var r = n && n.path || "/";
                ae(t, e, Object.assign({}, n, {
                    path: r
                }))
            }.bind(this), this.remove = function(t, e) {
                u(this, i), ce(t, e || {})
            }.bind(this)
        },
        fe = function fe(t) {
            var e = this;
            this.getCookieReader = function() {
                return u(this, e), this.cookieReader
            }.bind(this), this.getDocumentCookieWriter = function() {
                return u(this, e), this.documentCookieWriter
            }.bind(this), this.getLocalStorage = function() {
                return u(this, e), this.localStorage
            }.bind(this), this.cookieReader = new ue, this.documentCookieWriter = new se, this.localStorage = t.enableLocalStorage ? new ne(window) : null
        };
    e({
        target: "Date",
        stat: !0
    }, {
        now: function() {
            return (new Date).getTime()
        }
    });
    var le, he, pe = function pe() {
            var n = this;
            this.getExpirationDate = function(t) {
                u(this, n);
                var e = t.maxAge,
                    t = t.expires;
                return void 0 !== e && void 0 !== t ? this.maxAgeToDate(e) < t ? this.maxAgeToDate(e) : t : void 0 !== e && void 0 === t ? this.maxAgeToDate(e) : void 0 === e && void 0 !== t ? t : null
            }.bind(this), this.maxAgeToDate = function(t) {
                return u(this, n), new Date(Date.now() + 1e3 * t)
            }.bind(this)
        },
        de = Wt.forEach,
        ge = !!(he = []["forEach"]) && n(function() {
            he.call(null, le || function() {
                throw 1
            }, 1)
        }) ? [].forEach : function(t) {
            return de(this, t, 1 < arguments.length ? arguments[1] : undefined)
        };
    e({
        target: "Array",
        proto: !0,
        forced: [].forEach != ge
    }, {
        forEach: ge
    });
    for (var ye in {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }) {
        var ve = f[ye],
            ve = ve && ve.prototype;
        if (ve && ve.forEach !== ge) try {
            D(ve, "forEach", ge)
        } catch (be) {
            ve.forEach = ge
        }
    }
    var me = function me(t, e) {
        var n = this;
        this.initialize = function() {
            var e = this;
            u(this, n), this.localStorage && this.localStorage.getAll().forEach(function(t) {
                u(this, e), this.cookieWriter.set(t.key, t.value, Object.assign({}, t.options, {
                    expires: new Date(t.options.expires)
                }))
            }.bind(this))
        }.bind(this), this.localStorage = t, this.cookieWriter = e
    };
    window.ppmsWebStorage = function(t) {
        var o = this;
        this.get = function(t) {
            return u(this, o), this.serviceContainer.getCookieReader().get(t)
        }.bind(this), this.getAll = function() {
            return u(this, o), this.serviceContainer.getCookieReader().getAll()
        }.bind(this), this.set = function(t, e, n) {
            u(this, o);
            var r = this.serviceContainer.getLocalStorage(),
                i = (new pe).getExpirationDate({
                    maxAge: n && n.maxAge,
                    expires: n && n.expires
                });
            this.serviceContainer.getDocumentCookieWriter().set(t, e, Object.assign({}, n, {
                expires: i || undefined
            })), r && i && r.set(t, e, Object.assign({}, n, {
                expires: i
            }))
        }.bind(this), this.remove = function(t, e) {
            u(this, o);
            var n = this.serviceContainer.getLocalStorage();
            this.serviceContainer.getDocumentCookieWriter().remove(t, e), n && n.remove(t, e)
        }.bind(this), this.configuration = t || kt, this.serviceContainer = new fe(this.configuration), this.initializer = new me(this.serviceContainer.getLocalStorage(), this.serviceContainer.getDocumentCookieWriter()), this.initializer.initialize()
    }
}();
(function(stg, initial) {
    stg = window.sevenTag = stg || {};
    stg.tagTree = initial.tagTree;
    stg.debugOptions = initial.debugOptions;
    stg.variables = initial.variables;
    stg.configuration = initial.configuration;
    stg.privacy = initial.privacy;
}(window.sevenTag, {
    "debugOptions": {
        "containerName": "",
        "containerDate": "2021-11-19T15:35:09+00:00",
        "version": "0d8401a3-cb0a-4235-89fd-70e56aa15da8",
        "storeDate": "2021-11-22T02:41:23+00:00",
        "enabled": false
    },
    "variables": [{
        "name": "Cookie - GA experiment ID",
        "type": {
            "collector_name": "cookie"
        },
        "value": "_gaexp",
        "options": [],
        "id": "aaaec1ec-ef13-4603-ad59-fefbbddf8e50"
    }, {
        "name": "GA UA-123919957-1 - helpdesk.com",
        "type": {
            "collector_name": "constant"
        },
        "value": "UA-123919957-1",
        "options": [],
        "id": "4bd23d8c-34af-454f-88ed-39c8b2a21a70"
    }, {
        "name": "Cookie utm_source",
        "type": {
            "collector_name": "cookie"
        },
        "value": "utm_source",
        "options": [],
        "id": "b288ae84-3164-44d9-be22-3d4d148498fc"
    }, {
        "name": "DL helpcenterDate",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "helpcenterDate",
        "options": [],
        "id": "647f3ba3-3500-43b9-a870-c930fca0e96c"
    }, {
        "name": "DL forwardingDetected",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "forwardingDetected",
        "options": [],
        "id": "dfecb23f-f54f-47c3-9ea3-0f5e4aac19c9"
    }, {
        "name": "DL eventValue",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "eventValue",
        "options": [],
        "id": "8c453a6e-d464-4095-b671-b3c1cdf361d2"
    }, {
        "name": "DL contentCategory",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "contentCategory",
        "options": [],
        "id": "6cba1846-eace-4140-aa54-ebd80fa14483"
    }, {
        "name": "DL helpcenterAuthor",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "helpcenterAuthor",
        "options": [],
        "id": "0ac46373-73fb-43a7-b1b3-b82bbc8199fb"
    }, {
        "name": "DL helpcenterSubcategory",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "helpcenterSubcategory",
        "options": [],
        "id": "6a37c88e-4da3-452a-b015-3920f1d3979c"
    }, {
        "name": "DL contentSubcategory",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "contentSubcategory",
        "options": [],
        "id": "c7feded9-d375-4ec1-b784-3a9da42ebc5e"
    }, {
        "name": "DL eventAction",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "eventAction",
        "options": [],
        "id": "20c805b6-4867-4a27-b904-a227dea0d8eb"
    }, {
        "name": "DL plan",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "plan",
        "options": [],
        "id": "e246ff03-7492-402a-b5ad-47cfe0808963"
    }, {
        "name": "DL helpcenterVoteMsg",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "helpcenterVoteMsg",
        "options": [],
        "id": "452f6354-3a7a-4605-8ab0-6c5dbf8cdb77"
    }, {
        "name": "DL virtualPageURL",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "virtualPageURL",
        "options": [],
        "id": "7c86b41f-8c0f-44f9-90dd-08ec4ebb3cd5"
    }, {
        "name": "DL UserID",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "userID",
        "options": [],
        "id": "c9a5a09e-87d8-4447-b8e4-3e4e22c8971e"
    }, {
        "name": "DL helpcenterTTR",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "helpcenterTTR",
        "options": [],
        "id": "8beeeddd-a1b3-49e1-8068-86d02feadc71"
    }, {
        "name": "DL eventCategory",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "eventCategory",
        "options": [],
        "id": "52b4a0ff-f07f-4a19-82c3-2923e943bb4d"
    }, {
        "name": "DL contentDate",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "contentDate",
        "options": [],
        "id": "c4c72f7f-52c3-4187-ac1a-ea6250e67530"
    }, {
        "name": "DL licenseType",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "licenseType",
        "options": [],
        "id": "a5c249b4-3b7c-4e59-8748-c2af84104875"
    }, {
        "name": "DL eventLabel",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "eventLabel",
        "options": [],
        "id": "b957e786-1190-4ec0-83fe-a21a587d14d3"
    }, {
        "name": "DL productID",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "productID",
        "options": [],
        "id": "fd52b0fd-b206-4532-b838-c8043ff3b20f"
    }, {
        "name": "DL helpcenterCategory",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "helpcenterCategory",
        "options": [],
        "id": "f711da45-0590-4257-9767-9ad1fe37c895"
    }, {
        "name": "DL daysLeft",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "daysLeft",
        "options": [],
        "id": "3921fe60-6f8e-4537-baf8-47841ea1da29"
    }, {
        "name": "DL cartId",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "cartId",
        "options": [],
        "id": "74132a26-8c41-4ff9-be0f-0665448e4f7f"
    }, {
        "name": "DL contentTTR",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "contentTTR",
        "options": [],
        "id": "55605fb6-63b4-4593-981a-ac7537febcc0"
    }, {
        "name": "DL appId",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "appId",
        "options": [],
        "id": "2fba7455-3c24-4cb1-8fea-62ec4c23d9a2"
    }, {
        "name": "DL contentAuthor",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "contentAuthor",
        "options": [],
        "id": "7ac06c78-f90e-4cd7-b15d-7a82f9bc3a5b"
    }, {
        "name": "DL license",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "license",
        "options": [],
        "id": "84542571-078f-40a0-97f1-f010a387ce65"
    }, {
        "name": "DL role",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "role",
        "options": [],
        "id": "6578eff2-6520-4577-a2a0-0072667e8643"
    }, {
        "name": "View within session",
        "type": {
            "collector_name": "cookie"
        },
        "value": "firstVisit",
        "options": []
    }, {
        "name": "External referrer",
        "type": {
            "collector_name": "url"
        },
        "value": "externalReferrer",
        "options": []
    }, {
        "name": "Form Name",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementName",
        "options": []
    }, {
        "name": "History state",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "newHistoryState",
        "options": []
    }, {
        "name": "Page Hostname",
        "type": {
            "collector_name": "url"
        },
        "value": "hostname",
        "options": []
    }, {
        "name": "Traffic source",
        "type": {
            "collector_name": "url"
        },
        "value": "trafficSource",
        "options": []
    }, {
        "name": "Old history fragment",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "oldHistoryFragment",
        "options": []
    }, {
        "name": "Form ID",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementId",
        "options": []
    }, {
        "name": "Page Url",
        "type": {
            "collector_name": "url"
        },
        "value": "href",
        "options": []
    }, {
        "name": "Form Classes",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementClasses",
        "options": []
    }, {
        "name": "History source",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "historySource",
        "options": []
    }, {
        "name": "Page Path",
        "type": {
            "collector_name": "url"
        },
        "value": "pathname",
        "options": []
    }, {
        "name": "Consents",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "consents",
        "options": []
    }, {
        "name": "Click Classes",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementClasses",
        "options": []
    }, {
        "name": "Click Element",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementSelector",
        "options": []
    }, {
        "name": "Old history state",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "oldHistoryState",
        "options": []
    }, {
        "name": "Leave content",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "edge",
        "options": []
    }, {
        "name": "Audience manager audience",
        "type": {
            "collector_name": "cookie"
        },
        "value": "audienceManager",
        "options": []
    }, {
        "name": "Click ID",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementId",
        "options": []
    }, {
        "name": "Page Scroll",
        "type": {
            "collector_name": "document"
        },
        "value": "pageScroll",
        "options": []
    }, {
        "name": "Referrer",
        "type": {
            "collector_name": "document"
        },
        "value": "referrer",
        "options": []
    }, {
        "name": "Click Url",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementUrl",
        "options": []
    }, {
        "name": "Returning Visitor",
        "type": {
            "collector_name": "cookie"
        },
        "value": "returningVisitor",
        "options": []
    }, {
        "name": "History fragment",
        "type": {
            "collector_name": "url"
        },
        "value": "hash",
        "options": []
    }, {
        "name": "Campaign",
        "type": {
            "collector_name": "url"
        },
        "value": "campaign",
        "options": []
    }, {
        "name": "Event",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "event",
        "options": []
    }, {
        "name": "Form Url",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "elementUrl",
        "options": []
    }, {
        "name": "Time on website",
        "type": {
            "collector_name": "data_layer"
        },
        "value": "timeOnWebsite",
        "options": []
    }],
    "tagTree": [{
        "id": "8a3bd660-634d-4c45-821e-20579b8e1473",
        "name": "Piwik PRO - Registration (only HelpDesk)",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'Account', 'Registration HelpDesk']);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "3eeaf43c-fc41-4356-b78f-c8bb9783d150",
            "relation": "8a3bd660-634d-4c45-821e-20579b8e1473_3eeaf43c-fc41-4356-b78f-c8bb9783d150",
            "name": "Custom Event - Sign up (productID = HelpDesk) ",
            "conditions": [{
                "id": "32ad6fea-da53-4918-9c3f-8ea9b34fd40f",
                "relation": "8a3bd660-634d-4c45-821e-20579b8e1473_3eeaf43c-fc41-4356-b78f-c8bb9783d150_32ad6fea-da53-4918-9c3f-8ea9b34fd40f",
                "variable": "fd52b0fd-b206-4532-b838-c8043ff3b20f",
                "action": "contains",
                "value": "HelpDesk",
                "options": []
            }, {
                "id": "4fe309d7-dddb-4da4-8c3b-88952effc007",
                "relation": "8a3bd660-634d-4c45-821e-20579b8e1473_3eeaf43c-fc41-4356-b78f-c8bb9783d150_4fe309d7-dddb-4da4-8c3b-88952effc007",
                "variable": "Event",
                "action": "equals",
                "value": "Sign up",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "b5891fb3-165f-471b-bce8-256ff3f0f02e",
        "name": "GA Event - Subscription",
        "code": "<script>\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', 'UA-123919957-1', 'auto');\nga('send','event','Account','Subscription');\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "94f649a6-8559-4b89-b935-a3bb30af4df5",
            "relation": "b5891fb3-165f-471b-bce8-256ff3f0f02e_94f649a6-8559-4b89-b935-a3bb30af4df5",
            "name": "Custom Event - subscribeAccount - hostname app.helpdesk.com",
            "conditions": [{
                "id": "803b25ec-0249-4709-b365-462fc43aad3d",
                "relation": "b5891fb3-165f-471b-bce8-256ff3f0f02e_94f649a6-8559-4b89-b935-a3bb30af4df5_803b25ec-0249-4709-b365-462fc43aad3d",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "app.helpdesk.com",
                "options": []
            }, {
                "id": "3d8f8451-6167-483f-a580-26f99476134c",
                "relation": "b5891fb3-165f-471b-bce8-256ff3f0f02e_94f649a6-8559-4b89-b935-a3bb30af4df5_3d8f8451-6167-483f-a580-26f99476134c",
                "variable": "Event",
                "action": "equals",
                "value": "subscribeAccount",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "f133ad8c-ab09-4ba3-b192-18e9bab386c6",
        "name": "Piwik PRO - Marketplace - subscribeFromMarketplace",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'Marketplace', 'Subscribe {{ DL cartId }}', {{ DL appId }}]);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "808bbe2d-97f2-4ee3-9223-b43eb021d9cf",
            "relation": "f133ad8c-ab09-4ba3-b192-18e9bab386c6_808bbe2d-97f2-4ee3-9223-b43eb021d9cf",
            "name": "Custom Event - subscribeFromMarketplace",
            "conditions": [{
                "id": "c946c9cb-5cef-48ad-aafa-0d813f53d6ca",
                "relation": "f133ad8c-ab09-4ba3-b192-18e9bab386c6_808bbe2d-97f2-4ee3-9223-b43eb021d9cf_c946c9cb-5cef-48ad-aafa-0d813f53d6ca",
                "variable": "Event",
                "action": "contains",
                "value": "subscribeFromMarketplace",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "3ad0d0b4-0426-45c2-aa20-fd57a1e7c7c3",
        "name": "Facebook Pixel - Careers - Apply Now",
        "code": "<script>\n    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\n        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\n        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\n        document,'script','//connect.facebook.net/en_US/fbevents.js');\n\n    fbq('init', 943345085849630);\n    fbq('track', 'Lead');\n    </script>\n<noscript>\n    <img height=\"1\" width=\"1\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=943345085849630&ev=PageView&noscript=1&cd[referrer]=##pageUrl##\" />\n</noscript>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "fbb67414-25bc-4f50-b47b-fa9fc6099ffc",
            "relation": "3ad0d0b4-0426-45c2-aa20-fd57a1e7c7c3_fbb67414-25bc-4f50-b47b-fa9fc6099ffc",
            "name": "Custom Event - Apply Now Click - /careers/",
            "conditions": [{
                "id": "b0437ce7-9c74-4dbb-b27d-f94c18593f77",
                "relation": "3ad0d0b4-0426-45c2-aa20-fd57a1e7c7c3_fbb67414-25bc-4f50-b47b-fa9fc6099ffc_b0437ce7-9c74-4dbb-b27d-f94c18593f77",
                "variable": "52b4a0ff-f07f-4a19-82c3-2923e943bb4d",
                "action": "equals",
                "value": "Job Offer",
                "options": []
            }, {
                "id": "66a46889-70ac-4d3a-87fd-1646b9fe3fa0",
                "relation": "3ad0d0b4-0426-45c2-aa20-fd57a1e7c7c3_fbb67414-25bc-4f50-b47b-fa9fc6099ffc_66a46889-70ac-4d3a-87fd-1646b9fe3fa0",
                "variable": "20c805b6-4867-4a27-b904-a227dea0d8eb",
                "action": "equals",
                "value": "Click",
                "options": []
            }, {
                "id": "1f8450b6-ef95-4f2c-8d2b-5fb7c2a02087",
                "relation": "3ad0d0b4-0426-45c2-aa20-fd57a1e7c7c3_fbb67414-25bc-4f50-b47b-fa9fc6099ffc_1f8450b6-ef95-4f2c-8d2b-5fb7c2a02087",
                "variable": "Event",
                "action": "equals",
                "value": "generic",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "remarketing"
    }, {
        "id": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32",
        "name": "AdW Remarketing - hostname www.helpdesk.com",
        "code": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-709401490\"></script>\n<script>\n    window.dataLayer = window.dataLayer || [];\n    if (typeof gtag === 'undefined') {\n        function gtag(){dataLayer.push(arguments);}\n    }\n    gtag('js', new Date());\n        gtag('config', 'AW-709401490');\n    </script>\n<noscript>\n    <div style=\"display:inline;\">\n                    <img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/709401490/?value=0&amp;guid=ON&amp;script=0&url=##pageUrl##\"/>\n            </div>\n</noscript>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "d3089423-1ff1-4705-b0c5-0a3126fdc754",
            "relation": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32_d3089423-1ff1-4705-b0c5-0a3126fdc754",
            "name": "Custom Event - virtualPageView - hostname accounts.livechat.com, productID HelpDesk",
            "conditions": [{
                "id": "3c1256c9-53b1-4120-8b4a-178078d76adf",
                "relation": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32_d3089423-1ff1-4705-b0c5-0a3126fdc754_3c1256c9-53b1-4120-8b4a-178078d76adf",
                "variable": "fd52b0fd-b206-4532-b838-c8043ff3b20f",
                "action": "equals",
                "value": "HelpDesk",
                "options": []
            }, {
                "id": "6b134c45-91ea-4336-b7a5-954fd8afd3fc",
                "relation": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32_d3089423-1ff1-4705-b0c5-0a3126fdc754_6b134c45-91ea-4336-b7a5-954fd8afd3fc",
                "variable": "Event",
                "action": "equals",
                "value": "virtualPageView",
                "options": []
            }, {
                "id": "60cab47d-2c34-4765-b316-c1bd54daf969",
                "relation": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32_d3089423-1ff1-4705-b0c5-0a3126fdc754_60cab47d-2c34-4765-b316-c1bd54daf969",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "accounts.livechat.com",
                "options": []
            }]
        }, {
            "id": "1ba8de13-f0d5-416b-9e93-83d6775fd09a",
            "relation": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32_1ba8de13-f0d5-416b-9e93-83d6775fd09a",
            "name": "Page View - only helpdesk.com domain",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "e2b4ff8d-b1ce-48dd-ac19-3383eb325998",
                "relation": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32_1ba8de13-f0d5-416b-9e93-83d6775fd09a_e2b4ff8d-b1ce-48dd-ac19-3383eb325998",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "972aac33-781d-4123-bc4c-1775762bc590",
            "relation": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32_972aac33-781d-4123-bc4c-1775762bc590",
            "name": "History Change - only helpdesk.com domain",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.history"
            }, {
                "id": "5fa83e2a-429e-4108-b3a0-4093da0350bd",
                "relation": "2d48622e-460a-4a2f-ba4b-338c7b7f9e32_972aac33-781d-4123-bc4c-1775762bc590_5fa83e2a-429e-4108-b3a0-4093da0350bd",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "remarketing"
    }, {
        "id": "82ada93a-c060-457b-b22c-f15d616b1317",
        "name": "Autopilot PV",
        "code": "<script type=\"text/javascript\">(function(o){var b=\"https://rapidpanda.io/anywhere/\",t=\"a85b503385be4f23ae239042811d1e6489487dbe226543af885cbc06c475b3af\",a=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments);}},c=encodeURIComponent,s=\"SCRIPT\",d=document,l=d.getElementsByTagName(s)[0],p=\"t=\"+c(d.title||\"\")+\"&u=\"+c(d.location.href||\"\")+\"&r=\"+c(d.referrer||\"\"),j=\"text/javascript\",z,y;if(!window.Autopilot) window.Autopilot=a;if(o.app) p=\"devmode=true&\"+p;z=function(src,asy){var e=d.createElement(s);e.src=src;e.type=j;e.async=asy;l.parentNode.insertBefore(e,l);};y=function(){z(b+t+'?'+p,true);};if(window.attachEvent){window.attachEvent(\"onload\",y);}else{window.addEventListener(\"load\",y,false);}})({});</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "1ba8de13-f0d5-416b-9e93-83d6775fd09a",
            "relation": "82ada93a-c060-457b-b22c-f15d616b1317_1ba8de13-f0d5-416b-9e93-83d6775fd09a",
            "name": "Page View - only helpdesk.com domain",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "e2b4ff8d-b1ce-48dd-ac19-3383eb325998",
                "relation": "82ada93a-c060-457b-b22c-f15d616b1317_1ba8de13-f0d5-416b-9e93-83d6775fd09a_e2b4ff8d-b1ce-48dd-ac19-3383eb325998",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "marketing_automation"
    }, {
        "id": "545249e9-ee01-4217-ade0-2c53c31a7da9",
        "name": "Piwik Heatmap Tracking - Site Inspector",
        "code": "<script>(function () {\nvar collectHeatmapClicks;collectHeatmapClicks=function(){\"use strict\";var e={460:function(e,t){t.default=function(){return{injectConfigForSiteInspector:function(){if(window.sevenTag){var e=window.sevenTag.configuration,t=document.createElement(\"script\");t.id=\"ppas_container_configuration\",t.setAttribute(\"data-appId\",e.id),t.setAttribute(\"data-host\",e.main_domain),document.head.appendChild(t)}},getElementPath:function(e,t){var n=(void 0===t?{}:t).blacklistedClasses,r=void 0===n?[]:n,a=function(e){var t=e;return r.forEach((function(e){t=t.replace(new RegExp(e,\"g\"),\" \").trim()})),t},o=function(e){for(var t,n=[],o=0,i=e[o];i&&i!==document&&i!==window&&\"html\"!==(t=i.tagName.toLowerCase());i=i.parentNode,o++){if(i.id){t=\"#\"+i.id,n.push(t);break}if(Array.prototype.slice.call(i.parentNode.children).filter((function(e){return e.tagName.toLowerCase()===t})).length>1){var c=Array.prototype.slice.call(i.parentNode.children).indexOf(i)+1;c>0&&(t+=\":nth-child(\"+c+\")\")}if(\"string\"==typeof i.className&&i.className){var s=i.className;r.length&&(s=a(s)),s=s.replace(/\\s+/g,\".\"),t+=\".\"+s}n.push(t)}return n.reverse().join(\">\")},i=[],c=\"\";if(e.composedPath)c=o(e.composedPath());else{for(var s=e.target;null!==s.parentNode;)i.push(s),s=s.parentNode;i.push(window.document),c=o(i)}return c}}}}},t={};return function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(460)}().default;\n  var heatmapCollector = collectHeatmapClicks();\n\n  heatmapCollector.injectConfigForSiteInspector();\n\n  document.addEventListener('click', function(e) {\n    window._paq.push([\n      'trackEvent',\n      'Heatmap events',\n      'Click',\n      heatmapCollector.getElementPath(\n        e,\n        { blacklistedClasses: [] },\n      ),\n    ]);\n  });\n      })();\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "25a45f2d-b284-45f3-be81-1925167a7f38",
            "relation": "545249e9-ee01-4217-ade0-2c53c31a7da9_25a45f2d-b284-45f3-be81-1925167a7f38",
            "name": "Page View - Only main page HD",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "606a4df3-81c2-401e-ad89-ac748e1bf15a",
                "relation": "545249e9-ee01-4217-ade0-2c53c31a7da9_25a45f2d-b284-45f3-be81-1925167a7f38_606a4df3-81c2-401e-ad89-ac748e1bf15a",
                "variable": "Page Path",
                "action": "equals",
                "value": "/",
                "options": []
            }, {
                "id": "1dd6e810-b190-43dc-a251-8c31e4fd566f",
                "relation": "545249e9-ee01-4217-ade0-2c53c31a7da9_25a45f2d-b284-45f3-be81-1925167a7f38_1dd6e810-b190-43dc-a251-8c31e4fd566f",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "bd8e28cc-3353-4b1c-97d4-f086dd2ce1bc",
            "relation": "545249e9-ee01-4217-ade0-2c53c31a7da9_bd8e28cc-3353-4b1c-97d4-f086dd2ce1bc",
            "name": "LC Page View - Main Page",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "ea5402bf-4afb-45b9-88c1-67a053536696",
                "relation": "545249e9-ee01-4217-ade0-2c53c31a7da9_bd8e28cc-3353-4b1c-97d4-f086dd2ce1bc_ea5402bf-4afb-45b9-88c1-67a053536696",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "www.livechat.com",
                "options": []
            }, {
                "id": "53d32e06-01a6-4723-847c-9c8ee8af69b0",
                "relation": "545249e9-ee01-4217-ade0-2c53c31a7da9_bd8e28cc-3353-4b1c-97d4-f086dd2ce1bc_53d32e06-01a6-4723-847c-9c8ee8af69b0",
                "variable": "Page Path",
                "action": "equals",
                "value": "/",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "not_require_consent"
    }, {
        "id": "28a0a095-db17-4f24-8d11-19c9de6721cc",
        "name": "Piwik PRO",
        "code": "<script type=\"text/javascript\">\n    var _paq = _paq || [];\n    _paq.push(['setDomains', ['helpdesk.com/', 'www.helpdesk.com/', 'app.helpdesk.com/', 'accounts.livechat.com/', 'accounts.helpdesk.com/', 'accounts.helpdesk.com/', 'app.helpdesk.com/', 'app.labs.helpdesk.com/', 'portal.labs.helpdesk.com/', 'portal.helpdesk.com/', 'tickets.helpdesk.com/', 'tickets.labs.helpdesk.com/']]);\n    _paq.push(['setCustomDimension', 1, {{ DL daysLeft }}]);\n    _paq.push(['setCustomDimension', 2, {{ DL forwardingDetected }}]);\n    _paq.push(['setCustomDimension', 3, {{ DL license }}]);\n    _paq.push(['setCustomDimension', 4, {{ DL plan }}]);\n    _paq.push(['setCustomDimension', 5, {{ DL role }}]);\n    _paq.push(['setCustomDimension', 6, {{ DL licenseType }}]);\n    _paq.push(['setCustomDimension', 7, {{ DL contentAuthor }}]);\n    _paq.push(['setCustomDimension', 8, {{ DL contentTTR }}]);\n    _paq.push(['setCustomDimension', 9, {{ DL contentCategory }}]);\n    _paq.push(['setCustomDimension', 10, {{ DL contentSubcategory }}]);\n    _paq.push(['setCustomDimension', 11, {{ DL contentDate }}]);\n    _paq.push(['setCustomDimension', 13, {{ Cookie - GA experiment ID }}]);\n    var userId = {{ DL UserID }} ? {{ DL UserID }} : false;\n    if (userId) {\n        _paq.push(['setUserId', userId]);\n    }\n    _paq.push(['trackPageView']);\n    _paq.push(['enableCrossDomainLinking']);\n    (function(p,i,w,ik) {\n        var g=ik.createElement('script'),s=ik.getElementsByTagName('script')[0];\n        _paq.push(['setTrackerUrl', p]);\n        _paq.push(['setSiteId', w]);\n        g.type='text/javascript';g.async=true;g.defer=true;g.src=i;s.parentNode.insertBefore(g,s);\n    })('//livechat.piwik.pro/ppms.php','//livechat.piwik.pro/ppms.js','28a0a095\\u002Ddb17\\u002D4f24\\u002D8d11\\u002D19c9de6721cc',document)\n</script>\n<noscript><p><img referrerpolicy=\"no-referrer-when-downgrade\" src=\"//livechat.piwik.pro/ppms.php?idsite=28a0a095-db17-4f24-8d11-19c9de6721cc&rec=1&url=##pageUrl##\" style=\"border:0\" alt=\"\" /></p></noscript>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": false,
        "triggers": [{
            "id": "6363172d-8cdf-4d19-9bce-8871451228da",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_6363172d-8cdf-4d19-9bce-8871451228da",
            "name": "Custom Event - VirtualPageview (case sensitive LC)",
            "conditions": [{
                "id": "2bcab899-3587-4716-9c6c-9269399a8163",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_6363172d-8cdf-4d19-9bce-8871451228da_2bcab899-3587-4716-9c6c-9269399a8163",
                "variable": "Event",
                "action": "contains",
                "value": "VirtualPageview",
                "options": []
            }]
        }, {
            "id": "59414453-626a-4fe8-8295-4f9154717eed",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_59414453-626a-4fe8-8295-4f9154717eed",
            "name": "Page View - startups.livechatinc.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "d6e803fc-dda1-4d5c-959e-5e92b170c6f2",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_59414453-626a-4fe8-8295-4f9154717eed_d6e803fc-dda1-4d5c-959e-5e92b170c6f2",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "startups.livechatinc.com",
                "options": []
            }]
        }, {
            "id": "db566b9c-62f6-4576-a51f-6226b5dbb112",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_db566b9c-62f6-4576-a51f-6226b5dbb112",
            "name": "History Change - domain contains portal",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory"
            }, {
                "id": "8f983f63-c4c9-477e-a840-60742503dc14",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_db566b9c-62f6-4576-a51f-6226b5dbb112_8f983f63-c4c9-477e-a840-60742503dc14",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "portal",
                "options": []
            }]
        }, {
            "id": "1ba8de13-f0d5-416b-9e93-83d6775fd09a",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_1ba8de13-f0d5-416b-9e93-83d6775fd09a",
            "name": "Page View - only helpdesk.com domain",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "e2b4ff8d-b1ce-48dd-ac19-3383eb325998",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_1ba8de13-f0d5-416b-9e93-83d6775fd09a_e2b4ff8d-b1ce-48dd-ac19-3383eb325998",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "314daa41-b955-4baf-9803-d91c33c58abd",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_314daa41-b955-4baf-9803-d91c33c58abd",
            "name": "Page View - www.livechat.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "83630ab5-0c1d-4e7f-8df7-b145851bd6d1",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_314daa41-b955-4baf-9803-d91c33c58abd_83630ab5-0c1d-4e7f-8df7-b145851bd6d1",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.livechat.com",
                "options": []
            }]
        }, {
            "id": "3fe69d01-7caf-4a0d-a6e2-41ff58041ed7",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_3fe69d01-7caf-4a0d-a6e2-41ff58041ed7",
            "name": "History Change - accounts.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory"
            }, {
                "id": "39828615-f3b2-49ca-88ff-92d073d15c52",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_3fe69d01-7caf-4a0d-a6e2-41ff58041ed7_39828615-f3b2-49ca-88ff-92d073d15c52",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "accounts.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "b12b499e-ffb6-4474-bb65-d2a6dc8f95b5",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_b12b499e-ffb6-4474-bb65-d2a6dc8f95b5",
            "name": "Page View -  app.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "fcf2ec45-e553-4c5c-8042-3b4efccf3af6",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_b12b499e-ffb6-4474-bb65-d2a6dc8f95b5_fcf2ec45-e553-4c5c-8042-3b4efccf3af6",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "app.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "bc7f2935-08e7-400f-9c5d-f7faecfb018e",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_bc7f2935-08e7-400f-9c5d-f7faecfb018e",
            "name": "History Change - tickets.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory"
            }, {
                "id": "ad38ffbf-1cfd-4605-847f-0efba7f20dd0",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_bc7f2935-08e7-400f-9c5d-f7faecfb018e_ad38ffbf-1cfd-4605-847f-0efba7f20dd0",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "tickets.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "46d41720-5713-4db4-a5ae-d47ec1d5ee0b",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_46d41720-5713-4db4-a5ae-d47ec1d5ee0b",
            "name": "Page View - domain contains portal",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "5f6d0de7-95fb-42a8-bb93-fef7d78b1110",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_46d41720-5713-4db4-a5ae-d47ec1d5ee0b_5f6d0de7-95fb-42a8-bb93-fef7d78b1110",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "portal",
                "options": []
            }]
        }, {
            "id": "ef080c7f-f251-4623-b812-271110be51c2",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_ef080c7f-f251-4623-b812-271110be51c2",
            "name": "Page View - investor.livechatinc.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "1685e2fc-c91f-4153-bd6f-75e65b3b6965",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_ef080c7f-f251-4623-b812-271110be51c2_1685e2fc-c91f-4153-bd6f-75e65b3b6965",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "investor.livechatinc.com",
                "options": []
            }]
        }, {
            "id": "58bc77a5-8e2c-4837-ae72-a36500ae8eeb",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_58bc77a5-8e2c-4837-ae72-a36500ae8eeb",
            "name": "Page View - partners.livechat.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "6d609078-f012-4dc9-bf07-6e1ffd981c00",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_58bc77a5-8e2c-4837-ae72-a36500ae8eeb_6d609078-f012-4dc9-bf07-6e1ffd981c00",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "partners.livechat.com",
                "options": []
            }]
        }, {
            "id": "86c1cc24-2367-484b-8277-c3458ab417ac",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_86c1cc24-2367-484b-8277-c3458ab417ac",
            "name": "History Change - app.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.history"
            }, {
                "id": "f834eec1-4608-4977-80b5-c8fc54ad773e",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_86c1cc24-2367-484b-8277-c3458ab417ac_f834eec1-4608-4977-80b5-c8fc54ad773e",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "app.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "acfc210d-f268-4775-a6bc-4bffe0dd8c2f",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_acfc210d-f268-4775-a6bc-4bffe0dd8c2f",
            "name": "Custom Event - virtualPageView - hostname accounts.livechat.com",
            "conditions": [{
                "id": "657dde0e-3b62-4588-9e66-32a466ac92e9",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_acfc210d-f268-4775-a6bc-4bffe0dd8c2f_657dde0e-3b62-4588-9e66-32a466ac92e9",
                "variable": "Event",
                "action": "contains",
                "value": "virtualPageView",
                "options": []
            }, {
                "id": "e6924ae0-9ba6-4d6d-b118-8f416ca6e5ea",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_acfc210d-f268-4775-a6bc-4bffe0dd8c2f_e6924ae0-9ba6-4d6d-b118-8f416ca6e5ea",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "accounts.livechat.com",
                "options": []
            }]
        }, {
            "id": "3cb8b388-350b-49d2-8951-2a7d13ab3ec6",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_3cb8b388-350b-49d2-8951-2a7d13ab3ec6",
            "name": "Page View - accounts.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "be0f4146-210b-4201-a00e-e340452148d2",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_3cb8b388-350b-49d2-8951-2a7d13ab3ec6_be0f4146-210b-4201-a00e-e340452148d2",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "accounts.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "17d9ebba-cc14-4dc6-87fd-e4e24c1e3759",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_17d9ebba-cc14-4dc6-87fd-e4e24c1e3759",
            "name": "Page View - tickets.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "9b58e081-271d-40bc-869d-50ae36d4dd7b",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_17d9ebba-cc14-4dc6-87fd-e4e24c1e3759_9b58e081-271d-40bc-869d-50ae36d4dd7b",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "tickets.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "972aac33-781d-4123-bc4c-1775762bc590",
            "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_972aac33-781d-4123-bc4c-1775762bc590",
            "name": "History Change - only helpdesk.com domain",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.history"
            }, {
                "id": "5fa83e2a-429e-4108-b3a0-4093da0350bd",
                "relation": "28a0a095-db17-4f24-8d11-19c9de6721cc_972aac33-781d-4123-bc4c-1775762bc590_5fa83e2a-429e-4108-b3a0-4093da0350bd",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "8d25adca-622b-4448-8b1c-bf7fc24b9268",
        "name": "Piwik PRO - CP App Events",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'CP App', {{ Event }}]);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "dfe70d71-1665-4278-815c-2d0ece9e7549",
            "relation": "8d25adca-622b-4448-8b1c-bf7fc24b9268_dfe70d71-1665-4278-815c-2d0ece9e7549",
            "name": "CP App - Landing page: Send link call-to-action clicked",
            "conditions": [{
                "id": "1b4be465-7b3e-4eb9-9e50-6900b9fa058e",
                "relation": "8d25adca-622b-4448-8b1c-bf7fc24b9268_dfe70d71-1665-4278-815c-2d0ece9e7549_1b4be465-7b3e-4eb9-9e50-6900b9fa058e",
                "variable": "Event",
                "action": "equals",
                "value": "Landing page: Send link call-to-action clicked",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "5f964bbe-f311-43a5-90e6-63fda1b397d4",
        "name": "Linkedin Insight Tag - hostname www.livechat.com",
        "code": "<script type=\"text/javascript\">\n    var _linkedin_data_partner_id = 550609;\n    (function(){var s = document.getElementsByTagName(\"script\")[0];\n        var b = document.createElement(\"script\");\n        b.type = \"text/javascript\";b.async = true;\n        b.src = \"https://snap.licdn.com/li.lms-analytics/insight.min.js\";\n        s.parentNode.insertBefore(b, s);})();\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "314daa41-b955-4baf-9803-d91c33c58abd",
            "relation": "5f964bbe-f311-43a5-90e6-63fda1b397d4_314daa41-b955-4baf-9803-d91c33c58abd",
            "name": "Page View - www.livechat.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "83630ab5-0c1d-4e7f-8df7-b145851bd6d1",
                "relation": "5f964bbe-f311-43a5-90e6-63fda1b397d4_314daa41-b955-4baf-9803-d91c33c58abd_83630ab5-0c1d-4e7f-8df7-b145851bd6d1",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.livechat.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "remarketing"
    }, {
        "id": "a832b218-77ad-44ff-894a-3b494834ca3c",
        "name": "Piwik PRO - Registration (only LiveChat)",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'Account', 'Registration LiveChat']);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "3e1a87e7-cf75-4778-9675-34c56d89e8c1",
            "relation": "a832b218-77ad-44ff-894a-3b494834ca3c_3e1a87e7-cf75-4778-9675-34c56d89e8c1",
            "name": "Custom Event - Sign up (productID = LiveChat) ",
            "conditions": [{
                "id": "25eb0c42-8882-4e1a-a3d1-109762db7d4e",
                "relation": "a832b218-77ad-44ff-894a-3b494834ca3c_3e1a87e7-cf75-4778-9675-34c56d89e8c1_25eb0c42-8882-4e1a-a3d1-109762db7d4e",
                "variable": "Event",
                "action": "contains",
                "value": "Sign up",
                "options": []
            }, {
                "id": "dc65b944-aa57-459c-8669-f49dfa18822b",
                "relation": "a832b218-77ad-44ff-894a-3b494834ca3c_3e1a87e7-cf75-4778-9675-34c56d89e8c1_dc65b944-aa57-459c-8669-f49dfa18822b",
                "variable": "fd52b0fd-b206-4532-b838-c8043ff3b20f",
                "action": "equals",
                "value": "LiveChat",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "d5c4ed71-d3d9-4c9e-aac8-6bbd912851e5",
        "name": "GA Event - Registration",
        "code": "<script>\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', 'UA-123919957-1', 'auto');\nga('send','event','Account','Registration');\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "b236b0c1-6abf-4f3c-a4e6-a8dd679512e7",
            "relation": "d5c4ed71-d3d9-4c9e-aac8-6bbd912851e5_b236b0c1-6abf-4f3c-a4e6-a8dd679512e7",
            "name": "Custom Event - registerAccount",
            "conditions": [{
                "id": "aea2c9d4-bc59-4d6f-bd22-a5b2352a20f9",
                "relation": "d5c4ed71-d3d9-4c9e-aac8-6bbd912851e5_b236b0c1-6abf-4f3c-a4e6-a8dd679512e7_aea2c9d4-bc59-4d6f-bd22-a5b2352a20f9",
                "variable": "Event",
                "action": "equals",
                "value": "registerAccount",
                "options": []
            }]
        }, {
            "id": "3eeaf43c-fc41-4356-b78f-c8bb9783d150",
            "relation": "d5c4ed71-d3d9-4c9e-aac8-6bbd912851e5_3eeaf43c-fc41-4356-b78f-c8bb9783d150",
            "name": "Custom Event - Sign up (productID = HelpDesk) ",
            "conditions": [{
                "id": "32ad6fea-da53-4918-9c3f-8ea9b34fd40f",
                "relation": "d5c4ed71-d3d9-4c9e-aac8-6bbd912851e5_3eeaf43c-fc41-4356-b78f-c8bb9783d150_32ad6fea-da53-4918-9c3f-8ea9b34fd40f",
                "variable": "fd52b0fd-b206-4532-b838-c8043ff3b20f",
                "action": "contains",
                "value": "HelpDesk",
                "options": []
            }, {
                "id": "4fe309d7-dddb-4da4-8c3b-88952effc007",
                "relation": "d5c4ed71-d3d9-4c9e-aac8-6bbd912851e5_3eeaf43c-fc41-4356-b78f-c8bb9783d150_4fe309d7-dddb-4da4-8c3b-88952effc007",
                "variable": "Event",
                "action": "equals",
                "value": "Sign up",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "872dd19e-627b-4bcc-b4a3-8de052dde52b",
        "name": "GA Event - Interaction - Button - Dynamic",
        "code": "<script>\n  var clickText = {{ Click Element }}.textContent;\n  ga('send','event','Interaction','Button',clickText);\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "2ca41908-46cf-4b21-b1d5-d755f978051b",
            "relation": "872dd19e-627b-4bcc-b4a3-8de052dde52b_2ca41908-46cf-4b21-b1d5-d755f978051b",
            "name": "Click URL - links tracking - www.helpdesk.com domain",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.click"
            }, {
                "id": "c37ea693-3b2f-4fa6-a2ab-1b43b18e1488",
                "relation": "872dd19e-627b-4bcc-b4a3-8de052dde52b_2ca41908-46cf-4b21-b1d5-d755f978051b_c37ea693-3b2f-4fa6-a2ab-1b43b18e1488",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "cec8fd49-17ab-4189-8ff3-dc4cc2460335",
        "name": "Piwik PRO - Interaction - Outbound - Link - for /success/, Outbound Link Tracking",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'Interaction', 'Outbound', {{ Click Url }}]);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "bb89a4ab-aeea-40a9-83a2-78ca4514a529",
            "relation": "cec8fd49-17ab-4189-8ff3-dc4cc2460335_bb89a4ab-aeea-40a9-83a2-78ca4514a529",
            "name": "/success/ - Link Clicks",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.click"
            }, {
                "id": "3906fa36-5644-4cbd-81f6-f6e9dde512b6",
                "relation": "cec8fd49-17ab-4189-8ff3-dc4cc2460335_bb89a4ab-aeea-40a9-83a2-78ca4514a529_3906fa36-5644-4cbd-81f6-f6e9dde512b6",
                "variable": "Page Path",
                "action": "starts_with",
                "value": "/success/",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "85b9d103-80a9-4715-8652-cb466d95b23b",
        "name": "Piwik PRO - Generic event tag",
        "code": "<script>\n  var _paq = _paq || [];\n  _paq.push(['trackEvent',{{ DL eventCategory }},{{ DL eventAction }},{{ DL eventLabel }},{{ DL eventValue }}]);\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "0fc1de3d-191c-4fc2-95eb-9531683a9dff",
            "relation": "85b9d103-80a9-4715-8652-cb466d95b23b_0fc1de3d-191c-4fc2-95eb-9531683a9dff",
            "name": "Custom Event - generic",
            "conditions": [{
                "id": "2392b8e0-4b2b-489c-8727-b125ffbf251e",
                "relation": "85b9d103-80a9-4715-8652-cb466d95b23b_0fc1de3d-191c-4fc2-95eb-9531683a9dff_2392b8e0-4b2b-489c-8727-b125ffbf251e",
                "variable": "Event",
                "action": "equals",
                "value": "generic",
                "options": []
            }]
        }, {
            "id": "b0aef821-0945-4209-87de-c3deb6584d17",
            "relation": "85b9d103-80a9-4715-8652-cb466d95b23b_b0aef821-0945-4209-87de-c3deb6584d17",
            "name": "Custom Event - LiveChat",
            "conditions": [{
                "id": "59e83499-3ed1-4c17-94d5-bdfe35b71bf9",
                "relation": "85b9d103-80a9-4715-8652-cb466d95b23b_b0aef821-0945-4209-87de-c3deb6584d17_59e83499-3ed1-4c17-94d5-bdfe35b71bf9",
                "variable": "Event",
                "action": "equals",
                "value": "LiveChat",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "not_require_consent"
    }, {
        "id": "fa4231c0-65ef-48ef-a7df-e2555b197227",
        "name": "Piwik PRO - Subscription",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'Account', 'Subscription']);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "94f649a6-8559-4b89-b935-a3bb30af4df5",
            "relation": "fa4231c0-65ef-48ef-a7df-e2555b197227_94f649a6-8559-4b89-b935-a3bb30af4df5",
            "name": "Custom Event - subscribeAccount - hostname app.helpdesk.com",
            "conditions": [{
                "id": "803b25ec-0249-4709-b365-462fc43aad3d",
                "relation": "fa4231c0-65ef-48ef-a7df-e2555b197227_94f649a6-8559-4b89-b935-a3bb30af4df5_803b25ec-0249-4709-b365-462fc43aad3d",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "app.helpdesk.com",
                "options": []
            }, {
                "id": "3d8f8451-6167-483f-a580-26f99476134c",
                "relation": "fa4231c0-65ef-48ef-a7df-e2555b197227_94f649a6-8559-4b89-b935-a3bb30af4df5_3d8f8451-6167-483f-a580-26f99476134c",
                "variable": "Event",
                "action": "equals",
                "value": "subscribeAccount",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "14eeba57-5a29-48f2-bd56-d7938b75e5ce",
        "name": "AdW Conversion - Registration",
        "code": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-709401490\"></script>\n<script>\n    window.dataLayer = window.dataLayer || [];\n    if (typeof gtag === 'undefined') {\n        function gtag(){dataLayer.push(arguments);}\n    }\n    gtag('js', new Date());\n    </script>\n    <script>\n        var label = 'OUYRCKfk9rMBEJK3otIC';\n        gtag('event', 'conversion', {\n            'send_to': 'AW-709401490/'+label,\n                    });\n    </script>\n<noscript>\n    <div style=\"display:inline;\">\n                    <img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//www.googleadservices.com/pagead/conversion/709401490/?guid=ON&amp;script=0&amp;label=OUYRCKfk9rMBEJK3otIC\"/>\n            </div>\n</noscript>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "b236b0c1-6abf-4f3c-a4e6-a8dd679512e7",
            "relation": "14eeba57-5a29-48f2-bd56-d7938b75e5ce_b236b0c1-6abf-4f3c-a4e6-a8dd679512e7",
            "name": "Custom Event - registerAccount",
            "conditions": [{
                "id": "aea2c9d4-bc59-4d6f-bd22-a5b2352a20f9",
                "relation": "14eeba57-5a29-48f2-bd56-d7938b75e5ce_b236b0c1-6abf-4f3c-a4e6-a8dd679512e7_aea2c9d4-bc59-4d6f-bd22-a5b2352a20f9",
                "variable": "Event",
                "action": "equals",
                "value": "registerAccount",
                "options": []
            }]
        }, {
            "id": "3eeaf43c-fc41-4356-b78f-c8bb9783d150",
            "relation": "14eeba57-5a29-48f2-bd56-d7938b75e5ce_3eeaf43c-fc41-4356-b78f-c8bb9783d150",
            "name": "Custom Event - Sign up (productID = HelpDesk) ",
            "conditions": [{
                "id": "32ad6fea-da53-4918-9c3f-8ea9b34fd40f",
                "relation": "14eeba57-5a29-48f2-bd56-d7938b75e5ce_3eeaf43c-fc41-4356-b78f-c8bb9783d150_32ad6fea-da53-4918-9c3f-8ea9b34fd40f",
                "variable": "fd52b0fd-b206-4532-b838-c8043ff3b20f",
                "action": "contains",
                "value": "HelpDesk",
                "options": []
            }, {
                "id": "4fe309d7-dddb-4da4-8c3b-88952effc007",
                "relation": "14eeba57-5a29-48f2-bd56-d7938b75e5ce_3eeaf43c-fc41-4356-b78f-c8bb9783d150_4fe309d7-dddb-4da4-8c3b-88952effc007",
                "variable": "Event",
                "action": "equals",
                "value": "Sign up",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "conversion_tracking"
    }, {
        "id": "c25263fe-5586-4eb2-9d6d-5ac8283dceb7",
        "name": "HotJar - Careers",
        "code": "<script>\n    (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:2181229,hjsv:5};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "50b87d08-812b-4f89-a690-e604a18e43e2",
            "relation": "c25263fe-5586-4eb2-9d6d-5ac8283dceb7_50b87d08-812b-4f89-a690-e604a18e43e2",
            "name": "PV - /careers/",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "54eac52e-766f-41b5-a0f7-b96f7d195b4b",
                "relation": "c25263fe-5586-4eb2-9d6d-5ac8283dceb7_50b87d08-812b-4f89-a690-e604a18e43e2_54eac52e-766f-41b5-a0f7-b96f7d195b4b",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "www.livechat.com",
                "options": []
            }, {
                "id": "69e00f23-322f-4e83-acf7-1b7903cfe1b4",
                "relation": "c25263fe-5586-4eb2-9d6d-5ac8283dceb7_50b87d08-812b-4f89-a690-e604a18e43e2_69e00f23-322f-4e83-acf7-1b7903cfe1b4",
                "variable": "Page Path",
                "action": "starts_with",
                "value": "/careers/",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "01cae91c-5236-43fa-a8c1-149726601418",
        "name": "GA Page View - www.helpdesk.com",
        "code": "<!-- Google Analytics -->\n<script>\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', 'UA-123919957-1', 'auto');\n\nga('send', 'pageview');\n</script>\n<!-- End Google Analytics -->",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "d3089423-1ff1-4705-b0c5-0a3126fdc754",
            "relation": "01cae91c-5236-43fa-a8c1-149726601418_d3089423-1ff1-4705-b0c5-0a3126fdc754",
            "name": "Custom Event - virtualPageView - hostname accounts.livechat.com, productID HelpDesk",
            "conditions": [{
                "id": "3c1256c9-53b1-4120-8b4a-178078d76adf",
                "relation": "01cae91c-5236-43fa-a8c1-149726601418_d3089423-1ff1-4705-b0c5-0a3126fdc754_3c1256c9-53b1-4120-8b4a-178078d76adf",
                "variable": "fd52b0fd-b206-4532-b838-c8043ff3b20f",
                "action": "equals",
                "value": "HelpDesk",
                "options": []
            }, {
                "id": "6b134c45-91ea-4336-b7a5-954fd8afd3fc",
                "relation": "01cae91c-5236-43fa-a8c1-149726601418_d3089423-1ff1-4705-b0c5-0a3126fdc754_6b134c45-91ea-4336-b7a5-954fd8afd3fc",
                "variable": "Event",
                "action": "equals",
                "value": "virtualPageView",
                "options": []
            }, {
                "id": "60cab47d-2c34-4765-b316-c1bd54daf969",
                "relation": "01cae91c-5236-43fa-a8c1-149726601418_d3089423-1ff1-4705-b0c5-0a3126fdc754_60cab47d-2c34-4765-b316-c1bd54daf969",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "accounts.livechat.com",
                "options": []
            }]
        }, {
            "id": "3fe69d01-7caf-4a0d-a6e2-41ff58041ed7",
            "relation": "01cae91c-5236-43fa-a8c1-149726601418_3fe69d01-7caf-4a0d-a6e2-41ff58041ed7",
            "name": "History Change - accounts.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory"
            }, {
                "id": "39828615-f3b2-49ca-88ff-92d073d15c52",
                "relation": "01cae91c-5236-43fa-a8c1-149726601418_3fe69d01-7caf-4a0d-a6e2-41ff58041ed7_39828615-f3b2-49ca-88ff-92d073d15c52",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "accounts.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "3cb8b388-350b-49d2-8951-2a7d13ab3ec6",
            "relation": "01cae91c-5236-43fa-a8c1-149726601418_3cb8b388-350b-49d2-8951-2a7d13ab3ec6",
            "name": "Page View - accounts.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "be0f4146-210b-4201-a00e-e340452148d2",
                "relation": "01cae91c-5236-43fa-a8c1-149726601418_3cb8b388-350b-49d2-8951-2a7d13ab3ec6_be0f4146-210b-4201-a00e-e340452148d2",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "accounts.helpdesk.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "f5c19053-9877-4b1b-97b7-ceeb4d4ab1c8",
        "name": "Piwik PRO - Marketplace - Add to Cart",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'Marketplace', 'addToCart {{ DL cartId }}', {{ DL appId }}]);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "d555b91b-60fa-40f7-b923-30adc1b7a413",
            "relation": "f5c19053-9877-4b1b-97b7-ceeb4d4ab1c8_d555b91b-60fa-40f7-b923-30adc1b7a413",
            "name": "Custom Event - addToCartMarketplace",
            "conditions": [{
                "id": "9395714c-e785-4033-9533-74959f2b33f3",
                "relation": "f5c19053-9877-4b1b-97b7-ceeb4d4ab1c8_d555b91b-60fa-40f7-b923-30adc1b7a413_9395714c-e785-4033-9533-74959f2b33f3",
                "variable": "Event",
                "action": "equals",
                "value": "addToCartMarketplace",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "54085b71-07ff-4bc8-afd8-736cad375b5c",
        "name": "AdW Remarketing - hostname www.livechat.com",
        "code": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-804139102\"></script>\n<script>\n    window.dataLayer = window.dataLayer || [];\n    if (typeof gtag === 'undefined') {\n        function gtag(){dataLayer.push(arguments);}\n    }\n    gtag('js', new Date());\n        gtag('config', 'AW-804139102');\n    </script>\n<noscript>\n    <div style=\"display:inline;\">\n                    <img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/804139102/?value=0&amp;guid=ON&amp;script=0&url=##pageUrl##\"/>\n            </div>\n</noscript>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "314daa41-b955-4baf-9803-d91c33c58abd",
            "relation": "54085b71-07ff-4bc8-afd8-736cad375b5c_314daa41-b955-4baf-9803-d91c33c58abd",
            "name": "Page View - www.livechat.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "83630ab5-0c1d-4e7f-8df7-b145851bd6d1",
                "relation": "54085b71-07ff-4bc8-afd8-736cad375b5c_314daa41-b955-4baf-9803-d91c33c58abd_83630ab5-0c1d-4e7f-8df7-b145851bd6d1",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.livechat.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "remarketing"
    }, {
        "id": "9ddc79c7-9bce-437a-be61-5a4bede54a60",
        "name": "Piwik PRO - Personalized Web",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n            _paq.push([\"setCustomDimension\", 12, true]);\n            _paq.push(['trackEvent', 'Personalization', 'Was Logged In Detected']);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "66954f6c-7908-4b95-85ae-a285950fcecf",
            "relation": "9ddc79c7-9bce-437a-be61-5a4bede54a60_66954f6c-7908-4b95-85ae-a285950fcecf",
            "name": "Custom Event - wasLoggedInDetected",
            "conditions": [{
                "id": "9a382aea-e9af-4307-ab22-5508a8852089",
                "relation": "9ddc79c7-9bce-437a-be61-5a4bede54a60_66954f6c-7908-4b95-85ae-a285950fcecf_9a382aea-e9af-4307-ab22-5508a8852089",
                "variable": "Event",
                "action": "contains",
                "value": "wasLoggedInDetected",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "ad0fdbc7-cdb2-4858-b1fe-a44fa55514a6",
        "name": "GA Page View - app.helpdesk.com",
        "code": "<!-- Google Analytics -->\n<script>\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', 'UA-123919957-1', 'auto');\nga('send', 'pageview', \n    {'dimension1': '{{ DL daysLeft }}',\n    'dimension2': '{{ DL forwardingDetected }}',\n    'dimension3': '{{ DL license }}',\n    'dimension4': '{{ DL plan }}',\n    'dimension5': '{{ DL role }}',\n    'dimension6': '{{ DL licenseType }}'\n\t});\n</script>\n<!-- End Google Analytics -->\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "b12b499e-ffb6-4474-bb65-d2a6dc8f95b5",
            "relation": "ad0fdbc7-cdb2-4858-b1fe-a44fa55514a6_b12b499e-ffb6-4474-bb65-d2a6dc8f95b5",
            "name": "Page View -  app.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "fcf2ec45-e553-4c5c-8042-3b4efccf3af6",
                "relation": "ad0fdbc7-cdb2-4858-b1fe-a44fa55514a6_b12b499e-ffb6-4474-bb65-d2a6dc8f95b5_fcf2ec45-e553-4c5c-8042-3b4efccf3af6",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "app.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "86c1cc24-2367-484b-8277-c3458ab417ac",
            "relation": "ad0fdbc7-cdb2-4858-b1fe-a44fa55514a6_86c1cc24-2367-484b-8277-c3458ab417ac",
            "name": "History Change - app.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.history"
            }, {
                "id": "f834eec1-4608-4977-80b5-c8fc54ad773e",
                "relation": "ad0fdbc7-cdb2-4858-b1fe-a44fa55514a6_86c1cc24-2367-484b-8277-c3458ab417ac_f834eec1-4608-4977-80b5-c8fc54ad773e",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "app.helpdesk.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "fa89e9f7-cd44-49f5-85c3-4050d39f1848",
        "name": "Linkedin Insight Tag - only /success/",
        "code": "<script type=\"text/javascript\">\n    var _linkedin_data_partner_id = 2330676;\n    (function(){var s = document.getElementsByTagName(\"script\")[0];\n        var b = document.createElement(\"script\");\n        b.type = \"text/javascript\";b.async = true;\n        b.src = \"https://snap.licdn.com/li.lms-analytics/insight.min.js\";\n        s.parentNode.insertBefore(b, s);})();\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "368b6036-27a7-4bee-8b45-95e88cd875d3",
            "relation": "fa89e9f7-cd44-49f5-85c3-4050d39f1848_368b6036-27a7-4bee-8b45-95e88cd875d3",
            "name": "Page View - just /success/",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "a113107e-49f9-4ebd-99df-bd2f77fd84e9",
                "relation": "fa89e9f7-cd44-49f5-85c3-4050d39f1848_368b6036-27a7-4bee-8b45-95e88cd875d3_a113107e-49f9-4ebd-99df-bd2f77fd84e9",
                "variable": "Page Path",
                "action": "starts_with",
                "value": "/success/",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "remarketing"
    }, {
        "id": "495aef67-60a7-40f7-959e-5a81f061a576",
        "name": "Facebook Pixel - Careers only",
        "code": "<script>\n    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\n        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\n        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\n        document,'script','//connect.facebook.net/en_US/fbevents.js');\n\n    fbq('init', 943345085849630);\n    fbq('track', 'ViewContent');\n    </script>\n<noscript>\n    <img height=\"1\" width=\"1\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=943345085849630&ev=PageView&noscript=1&cd[referrer]=##pageUrl##\" />\n</noscript>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "50b87d08-812b-4f89-a690-e604a18e43e2",
            "relation": "495aef67-60a7-40f7-959e-5a81f061a576_50b87d08-812b-4f89-a690-e604a18e43e2",
            "name": "PV - /careers/",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "54eac52e-766f-41b5-a0f7-b96f7d195b4b",
                "relation": "495aef67-60a7-40f7-959e-5a81f061a576_50b87d08-812b-4f89-a690-e604a18e43e2_54eac52e-766f-41b5-a0f7-b96f7d195b4b",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "www.livechat.com",
                "options": []
            }, {
                "id": "69e00f23-322f-4e83-acf7-1b7903cfe1b4",
                "relation": "495aef67-60a7-40f7-959e-5a81f061a576_50b87d08-812b-4f89-a690-e604a18e43e2_69e00f23-322f-4e83-acf7-1b7903cfe1b4",
                "variable": "Page Path",
                "action": "starts_with",
                "value": "/careers/",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "remarketing"
    }, {
        "id": "134ec84d-9ff9-4d05-9150-b427abac6852",
        "name": "GA Page View - www.helpdesk.com/help",
        "code": "<script>\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', 'UA-123919957-1', 'auto');\nga('send', 'pageview',\n        \t{\n\t\t\t'dimension1': '{{ DL contentAuthor }}',\n         \t'dimension2': '{{ DL contentTTR }}',\n         \t'dimension3': '{{ DL contentCategory }},\n         \t'dimension4': '{{ DL contentSubcategory }}',\n         \t'dimension5': '{{ DL contentDate }}'\n            });\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "4bc8e236-4e1a-4b90-b256-fbc1015875e6",
            "relation": "134ec84d-9ff9-4d05-9150-b427abac6852_4bc8e236-4e1a-4b90-b256-fbc1015875e6",
            "name": "History Change - HD /help/",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory"
            }, {
                "id": "d685b139-bfa3-4a83-85cd-3cba2d53c83b",
                "relation": "134ec84d-9ff9-4d05-9150-b427abac6852_4bc8e236-4e1a-4b90-b256-fbc1015875e6_d685b139-bfa3-4a83-85cd-3cba2d53c83b",
                "variable": "Page Path",
                "action": "starts_with",
                "value": "/help/",
                "options": []
            }, {
                "id": "77a8d1f0-5009-4b29-8bc9-bd572cbc5bbc",
                "relation": "134ec84d-9ff9-4d05-9150-b427abac6852_4bc8e236-4e1a-4b90-b256-fbc1015875e6_77a8d1f0-5009-4b29-8bc9-bd572cbc5bbc",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "27125bfe-7101-400c-86b8-ead74d321d22",
            "relation": "134ec84d-9ff9-4d05-9150-b427abac6852_27125bfe-7101-400c-86b8-ead74d321d22",
            "name": "Page View - HD /help/",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "c19715d6-d48e-4a00-a7b8-e0cab5d928df",
                "relation": "134ec84d-9ff9-4d05-9150-b427abac6852_27125bfe-7101-400c-86b8-ead74d321d22_c19715d6-d48e-4a00-a7b8-e0cab5d928df",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.helpdesk.com",
                "options": []
            }, {
                "id": "e360a4ca-5017-4509-9d19-e87ca733ed2e",
                "relation": "134ec84d-9ff9-4d05-9150-b427abac6852_27125bfe-7101-400c-86b8-ead74d321d22_e360a4ca-5017-4509-9d19-e87ca733ed2e",
                "variable": "Page Path",
                "action": "starts_with",
                "value": "/help/",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "ae5fea38-37d0-4569-bdb1-d99ea345a630",
        "name": "GA Event - Generic Events Tracking",
        "code": "<script>\n  ga('send','event','{{ DL eventCategory }}','{{ DL eventAction }}','{{ DL eventLabel }}','{{ DL eventValue }}');\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "280fbebf-1908-4d6a-8fad-29d50104bd5f",
            "relation": "ae5fea38-37d0-4569-bdb1-d99ea345a630_280fbebf-1908-4d6a-8fad-29d50104bd5f",
            "name": "Custom Event - LiveChat - only helpdesk.com",
            "conditions": [{
                "id": "d615281f-5e63-4917-8bee-8f63b4551235",
                "relation": "ae5fea38-37d0-4569-bdb1-d99ea345a630_280fbebf-1908-4d6a-8fad-29d50104bd5f_d615281f-5e63-4917-8bee-8f63b4551235",
                "variable": "Event",
                "action": "contains",
                "value": "LiveChat",
                "options": []
            }, {
                "id": "2748f7ac-cb14-4709-a95c-bfb739e4cb17",
                "relation": "ae5fea38-37d0-4569-bdb1-d99ea345a630_280fbebf-1908-4d6a-8fad-29d50104bd5f_2748f7ac-cb14-4709-a95c-bfb739e4cb17",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "5018e641-4bba-419b-b2b7-de478277ccc8",
            "relation": "ae5fea38-37d0-4569-bdb1-d99ea345a630_5018e641-4bba-419b-b2b7-de478277ccc8",
            "name": "Custom Event - generic - hostname www.helpdesk.com - only for GA",
            "conditions": [{
                "id": "6bdc1496-dc2b-4c54-ab4e-9417728c967e",
                "relation": "ae5fea38-37d0-4569-bdb1-d99ea345a630_5018e641-4bba-419b-b2b7-de478277ccc8_6bdc1496-dc2b-4c54-ab4e-9417728c967e",
                "variable": "Event",
                "action": "equals",
                "value": "generic",
                "options": []
            }, {
                "id": "c2b8d909-dcb7-4abb-99da-50460918c3bc",
                "relation": "ae5fea38-37d0-4569-bdb1-d99ea345a630_5018e641-4bba-419b-b2b7-de478277ccc8_c2b8d909-dcb7-4abb-99da-50460918c3bc",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "a9e43212-2e2a-4b05-bdd6-7c9aa28a9b83",
        "name": "AdW Event - Subscription - www.helpdesk.com",
        "code": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-709401490\"></script>\n<script>\n    window.dataLayer = window.dataLayer || [];\n    if (typeof gtag === 'undefined') {\n        function gtag(){dataLayer.push(arguments);}\n    }\n    gtag('js', new Date());\n    </script>\n    <script>\n        var label = 'Q2dNCJTv9rMBEJK3otIC';\n        gtag('event', 'conversion', {\n            'send_to': 'AW-709401490/'+label,\n                    });\n    </script>\n<noscript>\n    <div style=\"display:inline;\">\n                    <img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//www.googleadservices.com/pagead/conversion/709401490/?guid=ON&amp;script=0&amp;label=Q2dNCJTv9rMBEJK3otIC\"/>\n            </div>\n</noscript>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "94f649a6-8559-4b89-b935-a3bb30af4df5",
            "relation": "a9e43212-2e2a-4b05-bdd6-7c9aa28a9b83_94f649a6-8559-4b89-b935-a3bb30af4df5",
            "name": "Custom Event - subscribeAccount - hostname app.helpdesk.com",
            "conditions": [{
                "id": "803b25ec-0249-4709-b365-462fc43aad3d",
                "relation": "a9e43212-2e2a-4b05-bdd6-7c9aa28a9b83_94f649a6-8559-4b89-b935-a3bb30af4df5_803b25ec-0249-4709-b365-462fc43aad3d",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "app.helpdesk.com",
                "options": []
            }, {
                "id": "3d8f8451-6167-483f-a580-26f99476134c",
                "relation": "a9e43212-2e2a-4b05-bdd6-7c9aa28a9b83_94f649a6-8559-4b89-b935-a3bb30af4df5_3d8f8451-6167-483f-a580-26f99476134c",
                "variable": "Event",
                "action": "equals",
                "value": "subscribeAccount",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "conversion_tracking"
    }, {
        "id": "d10b070a-326b-4377-a6df-ef4bcfbd6206",
        "name": "Piwik PRO - Help Center - Voting under article",
        "code": "<script>\n  var _paq = _paq || [];\n  _paq.push(['trackEvent','Voting under article','{{Event}}',{{DL helpcenterVoteMsg}}]);\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "5f672c87-7e7e-42e6-be42-99ff71a0dd17",
            "relation": "d10b070a-326b-4377-a6df-ef4bcfbd6206_5f672c87-7e7e-42e6-be42-99ff71a0dd17",
            "name": "Custom Event - voteLike",
            "conditions": [{
                "id": "707e0a3b-d625-4a6d-9dae-06088ab6af8f",
                "relation": "d10b070a-326b-4377-a6df-ef4bcfbd6206_5f672c87-7e7e-42e6-be42-99ff71a0dd17_707e0a3b-d625-4a6d-9dae-06088ab6af8f",
                "variable": "Event",
                "action": "contains",
                "value": "voteLike",
                "options": []
            }]
        }, {
            "id": "6af460ed-db11-44a6-a898-7852792ef540",
            "relation": "d10b070a-326b-4377-a6df-ef4bcfbd6206_6af460ed-db11-44a6-a898-7852792ef540",
            "name": "Custom Event - voteDislike",
            "conditions": [{
                "id": "08e21a82-6048-4178-b6a5-ff830e69d154",
                "relation": "d10b070a-326b-4377-a6df-ef4bcfbd6206_6af460ed-db11-44a6-a898-7852792ef540_08e21a82-6048-4178-b6a5-ff830e69d154",
                "variable": "Event",
                "action": "contains",
                "value": "voteDislike",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "not_require_consent"
    }, {
        "id": "e044b879-d583-40c2-89cf-6031ea02c59a",
        "name": "Piwik PRO - HD App Events",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'HD App', {{ Event }}]);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "3302fa6f-405c-43fb-a8c1-d136af5aa98c",
            "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_3302fa6f-405c-43fb-a8c1-d136af5aa98c",
            "name": "HD App - Workflows: Pre-made workflow created",
            "conditions": [{
                "id": "69950651-a61b-4534-bbbf-9bbc7ccd3468",
                "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_3302fa6f-405c-43fb-a8c1-d136af5aa98c_69950651-a61b-4534-bbbf-9bbc7ccd3468",
                "variable": "Event",
                "action": "equals",
                "value": "Workflows: Pre-made workflow created",
                "options": []
            }]
        }, {
            "id": "df9a027f-d8e2-4d1e-8e5c-6a708ab6b7db",
            "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_df9a027f-d8e2-4d1e-8e5c-6a708ab6b7db",
            "name": "HD App - Reply addresses: Reply address created",
            "conditions": [{
                "id": "8b2448fe-c188-40ca-a42b-73251cb57af3",
                "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_df9a027f-d8e2-4d1e-8e5c-6a708ab6b7db_8b2448fe-c188-40ca-a42b-73251cb57af3",
                "variable": "Event",
                "action": "equals",
                "value": "Reply addresses: Reply address created",
                "options": []
            }]
        }, {
            "id": "615c44e9-a113-4e87-8d54-0221064ae842",
            "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_615c44e9-a113-4e87-8d54-0221064ae842",
            "name": "HD App - Settings: Mailbox created",
            "conditions": [{
                "id": "7990a27c-958d-4347-b828-f27f7175ddf9",
                "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_615c44e9-a113-4e87-8d54-0221064ae842_7990a27c-958d-4347-b828-f27f7175ddf9",
                "variable": "Event",
                "action": "equals",
                "value": "Settings: Mailbox created",
                "options": []
            }]
        }, {
            "id": "31d2b36a-7671-4333-9376-f1ec380dca9d",
            "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_31d2b36a-7671-4333-9376-f1ec380dca9d",
            "name": "HD App - Settings: Contact form created",
            "conditions": [{
                "id": "85ba987a-16d4-4454-9017-793357fbf6b1",
                "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_31d2b36a-7671-4333-9376-f1ec380dca9d_85ba987a-16d4-4454-9017-793357fbf6b1",
                "variable": "Event",
                "action": "equals",
                "value": "Settings: Contact form created",
                "options": []
            }]
        }, {
            "id": "aca27b83-13b4-40d3-ab06-29c16dcb93ff",
            "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_aca27b83-13b4-40d3-ab06-29c16dcb93ff",
            "name": "HD App - Canned responses: Add canned response clicked",
            "conditions": [{
                "id": "3bb283f6-b420-4931-8af4-e6071187be30",
                "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_aca27b83-13b4-40d3-ab06-29c16dcb93ff_3bb283f6-b420-4931-8af4-e6071187be30",
                "variable": "Event",
                "action": "equals",
                "value": "Canned responses: Add canned response clicked",
                "options": []
            }]
        }, {
            "id": "a5587c04-a01b-4caf-adf5-158c890ceccc",
            "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_a5587c04-a01b-4caf-adf5-158c890ceccc",
            "name": "HD App - Settings: Domain created",
            "conditions": [{
                "id": "01fe3886-609f-4aa4-bf22-772bfbfad58e",
                "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_a5587c04-a01b-4caf-adf5-158c890ceccc_01fe3886-609f-4aa4-bf22-772bfbfad58e",
                "variable": "Event",
                "action": "equals",
                "value": "Settings: Domain created",
                "options": []
            }]
        }, {
            "id": "a3dd1c35-cb06-4703-97b7-1b921b2f8dfa",
            "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_a3dd1c35-cb06-4703-97b7-1b921b2f8dfa",
            "name": "HD App - Workflows: Workflow duplicated",
            "conditions": [{
                "id": "e358c5b4-cf8b-41f6-96c8-c6a875fb682a",
                "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_a3dd1c35-cb06-4703-97b7-1b921b2f8dfa_e358c5b4-cf8b-41f6-96c8-c6a875fb682a",
                "variable": "Event",
                "action": "equals",
                "value": "Workflows: Workflow duplicated",
                "options": []
            }]
        }, {
            "id": "ac70c15a-34cc-4902-9603-1895d1a55764",
            "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_ac70c15a-34cc-4902-9603-1895d1a55764",
            "name": "HD App - Workflows: Custom workflow created",
            "conditions": [{
                "id": "58e2d4db-c77a-4148-8c78-f7b4cb0a7f5e",
                "relation": "e044b879-d583-40c2-89cf-6031ea02c59a_ac70c15a-34cc-4902-9603-1895d1a55764_58e2d4db-c77a-4148-8c78-f7b4cb0a7f5e",
                "variable": "Event",
                "action": "equals",
                "value": "Workflows: Custom workflow created",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "a872b84b-2c64-4454-ba8f-59875315ca3d",
        "name": "Full Story - App",
        "code": "<script>\nwindow['_fs_debug'] = false;\nwindow['_fs_host'] = 'fullstory.com';\nwindow['_fs_script'] = 'edge.fullstory.com/s/fs.js';\nwindow['_fs_org'] = '8EA74';\nwindow['_fs_namespace'] = 'FS';\n(function(m,n,e,t,l,o,g,y){\n    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].');} return;}\n    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];\n    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;\n    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);\n    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};\n    g.shutdown=function(){g(\"rec\",!1)};g.restart=function(){g(\"rec\",!0)};\n    g.log = function(a,b) { g(\"log\", [a,b]) };\n    g.consent=function(a){g(\"consent\",!arguments.length||a)};\n    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};\n    g.clearUserCookie=function(){};\n})(window,document,window['_fs_namespace'],'script','user');\n</script>",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "b5c1b87e-92d9-4949-bc61-40ec4bbec69d",
            "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_b5c1b87e-92d9-4949-bc61-40ec4bbec69d",
            "name": "PV - /settings/rules (no utm ticket-footer-lc)",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "4f0b2657-3370-4068-84fb-d474a381aa5a",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_b5c1b87e-92d9-4949-bc61-40ec4bbec69d_4f0b2657-3370-4068-84fb-d474a381aa5a",
                "variable": "b288ae84-3164-44d9-be22-3d4d148498fc",
                "action": "does_not_contain",
                "value": "ticket-footer-lc",
                "options": []
            }, {
                "id": "b56cd04d-ec00-414a-93b6-726e616126e1",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_b5c1b87e-92d9-4949-bc61-40ec4bbec69d_b56cd04d-ec00-414a-93b6-726e616126e1",
                "variable": "Page Url",
                "action": "contains",
                "value": "/settings/rules",
                "options": []
            }]
        }, {
            "id": "6e9ef612-c1d2-4dbd-992f-cb85e57b13f7",
            "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_6e9ef612-c1d2-4dbd-992f-cb85e57b13f7",
            "name": "History Change - HD - /settings/email-addresses",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory"
            }, {
                "id": "93dad565-73bb-4ba5-abee-1caf53170b0c",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_6e9ef612-c1d2-4dbd-992f-cb85e57b13f7_93dad565-73bb-4ba5-abee-1caf53170b0c",
                "variable": "Page Path",
                "action": "contains",
                "value": "/settings/email-addresses",
                "options": []
            }, {
                "id": "52f11a55-6ce0-420f-8a53-b2fdabece0a4",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_6e9ef612-c1d2-4dbd-992f-cb85e57b13f7_52f11a55-6ce0-420f-8a53-b2fdabece0a4",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "app.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "5e5418d9-5769-4d0c-9d06-dd659fd4b193",
            "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_5e5418d9-5769-4d0c-9d06-dd659fd4b193",
            "name": "PV - /welcome/mailbox (no utm ticket-footer-lc)",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "e48c7d88-3e0b-4114-a72a-c4a945021939",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_5e5418d9-5769-4d0c-9d06-dd659fd4b193_e48c7d88-3e0b-4114-a72a-c4a945021939",
                "variable": "b288ae84-3164-44d9-be22-3d4d148498fc",
                "action": "does_not_contain",
                "value": "ticket-footer-lc",
                "options": []
            }, {
                "id": "feffda5f-a44e-4c92-b267-050db043907e",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_5e5418d9-5769-4d0c-9d06-dd659fd4b193_feffda5f-a44e-4c92-b267-050db043907e",
                "variable": "Page Url",
                "action": "contains",
                "value": "/welcome/mailbox",
                "options": []
            }]
        }, {
            "id": "3ac65b90-f466-4269-9d0a-dacca623fe7f",
            "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_3ac65b90-f466-4269-9d0a-dacca623fe7f",
            "name": "History Change - /settings/rules",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.history"
            }, {
                "id": "7c24cd2d-3b3b-42cb-8e1f-9113c5eb3eb8",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_3ac65b90-f466-4269-9d0a-dacca623fe7f_7c24cd2d-3b3b-42cb-8e1f-9113c5eb3eb8",
                "variable": "b288ae84-3164-44d9-be22-3d4d148498fc",
                "action": "does_not_contain",
                "value": "ticket-footer-lc",
                "options": []
            }, {
                "id": "932bdc2e-7373-4406-b0bf-66aa8e5e5c2e",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_3ac65b90-f466-4269-9d0a-dacca623fe7f_932bdc2e-7373-4406-b0bf-66aa8e5e5c2e",
                "variable": "Page Url",
                "action": "contains",
                "value": "/settings/rules",
                "options": []
            }]
        }, {
            "id": "bea4859c-c6b0-4b25-943b-c73b52d26e67",
            "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_bea4859c-c6b0-4b25-943b-c73b52d26e67",
            "name": "History Change - /welcome/mailbox",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.history"
            }, {
                "id": "00f8d436-acef-47bf-a5f7-9276d65a6077",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_bea4859c-c6b0-4b25-943b-c73b52d26e67_00f8d436-acef-47bf-a5f7-9276d65a6077",
                "variable": "b288ae84-3164-44d9-be22-3d4d148498fc",
                "action": "does_not_contain",
                "value": "ticket-footer-lc",
                "options": []
            }, {
                "id": "a643546e-7c44-4d81-9124-6d692ae413d8",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_bea4859c-c6b0-4b25-943b-c73b52d26e67_a643546e-7c44-4d81-9124-6d692ae413d8",
                "variable": "Page Url",
                "action": "contains",
                "value": "/welcome/mailbox",
                "options": []
            }]
        }, {
            "id": "623407ab-cd24-46a1-8f8b-1d5ed75a4194",
            "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_623407ab-cd24-46a1-8f8b-1d5ed75a4194",
            "name": "HD App - Welcome tutorial: Forwarding instructions section opened",
            "conditions": [{
                "id": "bbc587b9-681b-4f37-ba54-8c758f9693c5",
                "relation": "a872b84b-2c64-4454-ba8f-59875315ca3d_623407ab-cd24-46a1-8f8b-1d5ed75a4194_bbc587b9-681b-4f37-ba54-8c758f9693c5",
                "variable": "Event",
                "action": "contains",
                "value": "Welcome tutorial: Forwarding instructions section opened",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "user_feedback"
    }, {
        "id": "6ff23115-3da2-478a-a95c-b91acbc876fd",
        "name": "Piwik PRO - Marketplace - Checkout",
        "code": "        <script type=\"text/javascript\">\n    var _paq = _paq || [];\n\n        _paq.push(['trackEvent', 'Marketplace', 'checkout {{ DL cartId }}', {{ DL appId }}]);\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "f479e96d-dd4f-4fed-bdff-8b8343d11466",
            "relation": "6ff23115-3da2-478a-a95c-b91acbc876fd_f479e96d-dd4f-4fed-bdff-8b8343d11466",
            "name": "Custom Event - checkoutMarketplace",
            "conditions": [{
                "id": "efe0dbc1-6e3a-4457-8d0c-92132e8d64f6",
                "relation": "6ff23115-3da2-478a-a95c-b91acbc876fd_f479e96d-dd4f-4fed-bdff-8b8343d11466_efe0dbc1-6e3a-4457-8d0c-92132e8d64f6",
                "variable": "Event",
                "action": "contains",
                "value": "checkoutMarketplace",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "analytics"
    }, {
        "id": "0c9c0261-9b03-4119-8098-2546f7c1012a",
        "name": "HotJar - hostname www.helpdesk.com",
        "code": "<script>\n    (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:1894405,hjsv:5};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "1ba8de13-f0d5-416b-9e93-83d6775fd09a",
            "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_1ba8de13-f0d5-416b-9e93-83d6775fd09a",
            "name": "Page View - only helpdesk.com domain",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "e2b4ff8d-b1ce-48dd-ac19-3383eb325998",
                "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_1ba8de13-f0d5-416b-9e93-83d6775fd09a_e2b4ff8d-b1ce-48dd-ac19-3383eb325998",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "3fe69d01-7caf-4a0d-a6e2-41ff58041ed7",
            "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_3fe69d01-7caf-4a0d-a6e2-41ff58041ed7",
            "name": "History Change - accounts.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory"
            }, {
                "id": "39828615-f3b2-49ca-88ff-92d073d15c52",
                "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_3fe69d01-7caf-4a0d-a6e2-41ff58041ed7_39828615-f3b2-49ca-88ff-92d073d15c52",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "accounts.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "c56bfaaf-d27f-4c9b-beb6-bd75fb80359c",
            "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_c56bfaaf-d27f-4c9b-beb6-bd75fb80359c",
            "name": "Page View - accounts.livechat.com productID HelpDesk",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "a79de682-2a71-45b2-937e-fdab0d4cd088",
                "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_c56bfaaf-d27f-4c9b-beb6-bd75fb80359c_a79de682-2a71-45b2-937e-fdab0d4cd088",
                "variable": "fd52b0fd-b206-4532-b838-c8043ff3b20f",
                "action": "equals",
                "value": "HelpDesk",
                "options": []
            }, {
                "id": "f6c3d8ea-7e28-4bc4-9d9e-4d370a9621fc",
                "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_c56bfaaf-d27f-4c9b-beb6-bd75fb80359c_f6c3d8ea-7e28-4bc4-9d9e-4d370a9621fc",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "accounts.livechat.com",
                "options": []
            }]
        }, {
            "id": "04ab2a80-045c-4a09-a124-2154dd777ff5",
            "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_04ab2a80-045c-4a09-a124-2154dd777ff5",
            "name": "History Change - accounts.livechat.com productID helpdesk",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.debouncedHistory"
            }, {
                "id": "cafff74b-cb74-42e6-b40e-fb2af319de89",
                "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_04ab2a80-045c-4a09-a124-2154dd777ff5_cafff74b-cb74-42e6-b40e-fb2af319de89",
                "variable": "fd52b0fd-b206-4532-b838-c8043ff3b20f",
                "action": "equals",
                "value": "HelpDesk",
                "options": []
            }, {
                "id": "4acc9ec0-e2c6-4533-8813-904f7a958a01",
                "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_04ab2a80-045c-4a09-a124-2154dd777ff5_4acc9ec0-e2c6-4533-8813-904f7a958a01",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "accounts.livechat.com",
                "options": []
            }]
        }, {
            "id": "3cb8b388-350b-49d2-8951-2a7d13ab3ec6",
            "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_3cb8b388-350b-49d2-8951-2a7d13ab3ec6",
            "name": "Page View - accounts.helpdesk.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "be0f4146-210b-4201-a00e-e340452148d2",
                "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_3cb8b388-350b-49d2-8951-2a7d13ab3ec6_be0f4146-210b-4201-a00e-e340452148d2",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "accounts.helpdesk.com",
                "options": []
            }]
        }, {
            "id": "972aac33-781d-4123-bc4c-1775762bc590",
            "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_972aac33-781d-4123-bc4c-1775762bc590",
            "name": "History Change - only helpdesk.com domain",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.history"
            }, {
                "id": "5fa83e2a-429e-4108-b3a0-4093da0350bd",
                "relation": "0c9c0261-9b03-4119-8098-2546f7c1012a_972aac33-781d-4123-bc4c-1775762bc590_5fa83e2a-429e-4108-b3a0-4093da0350bd",
                "variable": "Page Hostname",
                "action": "equals",
                "value": "www.helpdesk.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "ab_testing_and_personalization"
    }, {
        "id": "bb2ff6f7-aca2-4e95-9d51-23401edc8c47",
        "name": "HotJar - hostname www.livechat.com",
        "code": "<script>\n    (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:354332,hjsv:5};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');\n</script>\n",
        "documentWrite": false,
        "disableInDebugMode": false,
        "respectVisitorsPrivacy": true,
        "triggers": [{
            "id": "314daa41-b955-4baf-9803-d91c33c58abd",
            "relation": "bb2ff6f7-aca2-4e95-9d51-23401edc8c47_314daa41-b955-4baf-9803-d91c33c58abd",
            "name": "Page View - www.livechat.com",
            "conditions": [{
                "variable": "Event",
                "action": "equals",
                "value": "stg.pageView"
            }, {
                "id": "83630ab5-0c1d-4e7f-8df7-b145851bd6d1",
                "relation": "bb2ff6f7-aca2-4e95-9d51-23401edc8c47_314daa41-b955-4baf-9803-d91c33c58abd_83630ab5-0c1d-4e7f-8df7-b145851bd6d1",
                "variable": "Page Hostname",
                "action": "contains",
                "value": "www.livechat.com",
                "options": []
            }]
        }],
        "scheduler": {
            "date_ranges": [],
            "times_of_day": [],
            "enabled": false,
            "resolved": false
        },
        "templateOptions": [],
        "consentType": "remarketing"
    }],
    "configuration": {
        "audience_manager_enabled": true,
        "cookies_enabled": true,
        "app_cookies_enabled": true,
        "main_domain": "livechat.piwik.pro",
        "id": "28a0a095-db17-4f24-8d11-19c9de6721cc",
        "host": "livechat.containers.piwik.pro",
        "delay": 300,
        "data_layer_name": "dataLayer",
        "use_secure_cookies": false,
        "consent_manager_privacy_templates_url": "//livechat.containers.piwik.pro/28a0a095-db17-4f24-8d11-19c9de6721cc/privacy-templates.json",
        "consent_manager_privacy_widgets_url": "//livechat.containers.piwik.pro/28a0a095-db17-4f24-8d11-19c9de6721cc/privacy-widgets.json"
    },
    "privacy": {
        "enabled": false
    }
}));
! function(e, t) {
    e.matchMedia || (e.matchMedia = function() {
        "use strict";
        var n = e.styleMedia || e.media;
        if (!n) {
            var i = t.createElement("style"),
                r = t.getElementsByTagName("script")[0],
                o = null;
            i.type = "text/css", i.id = "matchmediajs-test", r ? r.parentNode.insertBefore(i, r) : t.head.appendChild(i), o = "getComputedStyle" in e && e.getComputedStyle(i, null) || i.currentStyle, n = {
                matchMedium: function(e) {
                    var t = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                    return i.styleSheet ? i.styleSheet.cssText = t : i.textContent = t, "1px" === o.width
                }
            }
        }
        return function(e) {
            return {
                matches: n.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }())
}(window, document),
function(e) {
    "use strict";
    if (!e.matchMedia || !e.matchMedia("all").addListener) {
        var t = e.matchMedia,
            n = t("only all").matches,
            i = !1,
            r = 0,
            o = [],
            a = function() {
                clearTimeout(r), r = setTimeout(function() {
                    for (var n = 0, i = o.length; n < i; n++) {
                        var r = o[n].mql,
                            a = o[n].listeners || [],
                            s = t(r.media).matches;
                        if (s !== r.matches) {
                            r.matches = s;
                            for (var c = 0, u = a.length; c < u; c++) a[c].call(e, r)
                        }
                    }
                }, 30)
            };
        e.matchMedia = function(r) {
            var s = t(r),
                c = [],
                u = 0;
            return s.addListener = function(t) {
                n && (i || (i = !0, e.addEventListener("resize", a, !0)), 0 === u && (u = o.push({
                    mql: s,
                    listeners: c
                })), c.push(t))
            }, s.removeListener = function(e) {
                for (var t = 0, n = c.length; t < n; t++) c[t] === e && c.splice(t, 1)
            }, s
        }
    }
}(window), Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1),
            n = this,
            i = function() {},
            r = function() {
                return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
            };
        return this.prototype && (i.prototype = this.prototype), r.prototype = new i, r
    }), (2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1) && ! function() {
        var e = String.prototype,
            t = Function.prototype,
            n = Array.prototype,
            i = t.call,
            r = n.slice,
            o = n.push,
            a = i.bind(r),
            s = i.bind(e.slice),
            c = i.bind(e.split),
            u = i.bind(o),
            l = "undefined" == typeof /()??/.exec("")[1],
            f = Math.pow(2, 32) - 1;
        e.split = function(e, t) {
            var n = String(this);
            if ("undefined" == typeof e && 0 === t) return [];
            if (e.constructor !== RegExp) return c(this, e, t);
            var i, r, d, p, v = [],
                h = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                g = 0,
                m = new RegExp(e.source, h + "g");
            l || (i = new RegExp("^" + m.source + "$(?!\\s)", h));
            var y = "undefined" == typeof t ? f : t >>> 0;
            for (r = m.exec(n); r && (d = r.index + r[0].length, !(d > g && (u(v, s(n, g, r.index)), !l && r.length > 1 && r[0].replace(i, function() {
                    for (var e = 1; e < arguments.length - 2; e++) "undefined" == typeof arguments[e] && (r[e] = void 0)
                }), r.length > 1 && r.index < n.length && o.apply(v, a(r, 1)), p = r[0].length, g = d, v.length >= y)));) m.lastIndex === r.index && m.lastIndex++, r = m.exec(n);
            return g === n.length ? !p && m.test("") || u(v, "") : u(v, s(n, g)), v.length > y ? a(v, 0, y) : v
        }
    }(),
    function(e, t) {
        e[t] = e[t] || {}
    }(window, "sevenTag"),
    function(e, t) {
        var n = {
            dependencies: {},
            register: function(e, t) {
                n.dependencies[e] = t
            },
            get: function(e) {
                return n.dependencies[e]
            },
            has: function(e) {
                return void 0 !== n.dependencies[e]
            },
            resolve: function(e) {
                for (var t = [], i = void 0 !== e.$inject ? e.$inject : [], r = 0; r < i.length; r++) {
                    var o = i[r];
                    if ("undefined" == typeof n.dependencies[o]) {
                        var a = "" === e.name ? "" : " Called from " + e.name + " function";
                        throw "Cannot resolve " + o + " dependency." + a
                    }
                    t.push(n.dependencies[o])
                }
                return e.apply({}, t)
            }
        };
        e[t] = n
    }(window.sevenTag, "$injector"),
    function(e, t) {
        e.service = function(e, n) {
            var i = t.resolve;
            t.register(e, new i(n))
        }, e.provider = function(e, n) {
            t.register(e, t.resolve(n))
        }, e.value = function(e, n) {
            t.register(e, n)
        }, e.config = function(e) {
            t.resolve(e)
        }
    }(window.sevenTag, window.sevenTag.$injector),
    function(e, t) {
        window.sevenTag = e || {}, window.sevenTag.postscribe = t()
    }(window.sevenTag, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            var r = n(1),
                o = i(r);
            e.exports = o["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o() {}

            function a() {
                var e = g.shift();
                if (e) {
                    var t = p.last(e);
                    t.afterDequeue(), e.stream = s.apply(void 0, e), t.afterStreamStart()
                }
            }

            function s(e, t, n) {
                function i(e) {
                    e = n.beforeWrite(e), m.write(e), n.afterWrite(e)
                }
                m = new f["default"](e, n), m.id = h++, m.name = n.name || m.id, c.streams[m.name] = m;
                var r = e.ownerDocument,
                    s = {
                        close: r.close,
                        open: r.open,
                        write: r.write,
                        writeln: r.writeln
                    };
                u(r, {
                    close: o,
                    open: o,
                    write: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return i(t.join(""))
                    },
                    writeln: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return i(t.join("") + "\n")
                    }
                });
                var l = m.win.onerror || o;
                return m.win.onerror = function(e, t, i) {
                    n.error({
                        msg: e + " - " + t + ": " + i
                    }), l.apply(m.win, [e, t, i])
                }, m.write(t, function() {
                    u(r, s), m.win.onerror = l, n.done(), m = null, a()
                }), m
            }

            function c(e, t, n) {
                if (p.isFunction(n)) n = {
                    done: n
                };
                else if ("clear" === n) return g = [], m = null, void(h = 0);
                n = p.defaults(n, v), e = /^#/.test(e) ? window.document.getElementById(e.substr(1)) : e.jquery ? e[0] : e;
                var i = [e, t, n];
                return e.postscribe = {
                    cancel: function() {
                        i.stream ? i.stream.abort() : i[1] = o
                    }
                }, n.beforeEnqueue(i), g.push(i), m || a(), e.postscribe
            }
            t.__esModule = !0;
            var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            };
            t["default"] = c;
            var l = n(2),
                f = r(l),
                d = n(4),
                p = i(d),
                v = {
                    afterAsync: o,
                    afterDequeue: o,
                    afterStreamStart: o,
                    afterWrite: o,
                    autoFix: !0,
                    beforeEnqueue: o,
                    beforeWriteToken: function(e) {
                        return e
                    },
                    beforeWrite: function(e) {
                        return e
                    },
                    done: o,
                    error: function(e) {
                        throw new Error(e.msg)
                    },
                    releaseAsync: !1
                },
                h = 0,
                g = [],
                m = null;
            u(c, {
                streams: {},
                queue: g,
                WriteStream: f["default"]
            })
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                var n = v + t,
                    i = e.getAttribute(n);
                return d.existy(i) ? String(i) : i
            }

            function s(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = v + t;
                d.existy(n) && "" !== n ? e.setAttribute(i, n) : e.removeAttribute(i)
            }
            t.__esModule = !0;
            var c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                u = n(3),
                l = r(u),
                f = n(4),
                d = i(f),
                p = !1,
                v = "data-ps-",
                h = "ps-style",
                g = "ps-script",
                m = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        o(this, e), this.root = t, this.options = n, this.doc = t.ownerDocument, this.win = this.doc.defaultView || this.doc.parentWindow, this.parser = new l["default"]("", {
                            autoFix: n.autoFix
                        }), this.actuals = [t], this.proxyHistory = "", this.proxyRoot = this.doc.createElement(t.nodeName), this.scriptStack = [], this.writeQueue = [], s(this.proxyRoot, "proxyof", 0)
                    }
                    return e.prototype.write = function() {
                        var e;
                        for ((e = this.writeQueue).push.apply(e, arguments); !this.deferredRemote && this.writeQueue.length;) {
                            var t = this.writeQueue.shift();
                            d.isFunction(t) ? this._callFunction(t) : this._writeImpl(t)
                        }
                    }, e.prototype._callFunction = function(e) {
                        var t = {
                            type: "function",
                            value: e.name || e.toString()
                        };
                        this._onScriptStart(t), e.call(this.win, this.doc), this._onScriptDone(t)
                    }, e.prototype._writeImpl = function(e) {
                        this.parser.append(e);
                        for (var t = void 0, n = void 0, i = void 0, r = [];
                            (t = this.parser.readToken()) && !(n = d.isScript(t)) && !(i = d.isStyle(t));) t = this.options.beforeWriteToken(t), t && r.push(t);
                        r.length > 0 && this._writeStaticTokens(r), n && this._handleScriptToken(t), i && this._handleStyleToken(t)
                    }, e.prototype._writeStaticTokens = function(e) {
                        var t = this._buildChunk(e);
                        return t.actual ? (t.html = this.proxyHistory + t.actual, this.proxyHistory += t.proxy, this.proxyRoot.innerHTML = t.html, p && (t.proxyInnerHTML = this.proxyRoot.innerHTML), this._walkChunk(), p && (t.actualInnerHTML = this.root.innerHTML), t) : null
                    }, e.prototype._buildChunk = function(e) {
                        for (var t = this.actuals.length, n = [], i = [], r = [], o = e.length, a = 0; a < o; a++) {
                            var s = e[a],
                                c = s.toString();
                            if (n.push(c), s.attrs) {
                                if (!/^noscript$/i.test(s.tagName)) {
                                    var u = t++;
                                    i.push(c.replace(/(\/?>)/, " " + v + "id=" + u + " $1")), s.attrs.id !== g && s.attrs.id !== h && r.push("atomicTag" === s.type ? "" : "<" + s.tagName + " " + v + "proxyof=" + u + (s.unary ? " />" : ">"))
                                }
                            } else i.push(c), r.push("endTag" === s.type ? c : "")
                        }
                        return {
                            tokens: e,
                            raw: n.join(""),
                            actual: i.join(""),
                            proxy: r.join("")
                        }
                    }, e.prototype._walkChunk = function() {
                        for (var e = void 0, t = [this.proxyRoot]; d.existy(e = t.shift());) {
                            var n = 1 === e.nodeType,
                                i = n && a(e, "proxyof");
                            if (!i) {
                                n && (this.actuals[a(e, "id")] = e, s(e, "id"));
                                var r = e.parentNode && a(e.parentNode, "proxyof");
                                r && this.actuals[r].appendChild(e)
                            }
                            t.unshift.apply(t, d.toArray(e.childNodes))
                        }
                    }, e.prototype._handleScriptToken = function(e) {
                        var t = this,
                            n = this.parser.clear();
                        n && this.writeQueue.unshift(n), e.src = e.attrs.src || e.attrs.SRC, e = this.options.beforeWriteToken(e), e && (e.src && this.scriptStack.length ? this.deferredRemote = e : this._onScriptStart(e), this._writeScriptToken(e, function() {
                            t._onScriptDone(e)
                        }))
                    }, e.prototype._handleStyleToken = function(e) {
                        var t = this.parser.clear();
                        t && this.writeQueue.unshift(t), e.type = e.attrs.type || e.attrs.TYPE || "text/css", e = this.options.beforeWriteToken(e), e && this._writeStyleToken(e), t && this.write()
                    }, e.prototype._writeStyleToken = function(e) {
                        var t = this._buildStyle(e);
                        this._insertCursor(t, h), e.content && (t.styleSheet && !t.sheet ? t.styleSheet.cssText = e.content : t.appendChild(this.doc.createTextNode(e.content)))
                    }, e.prototype._buildStyle = function(e) {
                        var t = this.doc.createElement(e.tagName);
                        return t.setAttribute("type", e.type), d.eachKey(e.attrs, function(e, n) {
                            t.setAttribute(e, n)
                        }), t
                    }, e.prototype._insertCursor = function(e, t) {
                        this._writeImpl('<span id="' + t + '"/>');
                        var n = this.doc.getElementById(t);
                        n && n.parentNode.replaceChild(e, n)
                    }, e.prototype._onScriptStart = function(e) {
                        e.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(e)
                    }, e.prototype._onScriptDone = function(e) {
                        return e !== this.scriptStack[0] ? void this.options.error({
                            msg: "Bad script nesting or script finished twice"
                        }) : (this.scriptStack.shift(), this.write.apply(this, e.outerWrites), void(!this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), this.deferredRemote = null)))
                    }, e.prototype._writeScriptToken = function(e, t) {
                        var n = this._buildScript(e),
                            i = this._shouldRelease(n),
                            r = this.options.afterAsync;
                        e.src && (n.src = e.src, this._scriptLoadHandler(n, i ? r : function() {
                            t(), r()
                        }));
                        try {
                            this._insertCursor(n, g), n.src && !i || t()
                        } catch (o) {
                            this.options.error(o), t()
                        }
                    }, e.prototype._buildScript = function(e) {
                        var t = this.doc.createElement(e.tagName);
                        return d.eachKey(e.attrs, function(e, n) {
                            t.setAttribute(e, n)
                        }), e.content && (t.text = e.content), t
                    }, e.prototype._scriptLoadHandler = function(e, t) {
                        function n() {
                            e = e.onload = e.onreadystatechange = e.onerror = null
                        }

                        function i() {
                            n(), null != t && t(), t = null
                        }

                        function r(e) {
                            n(), a(e), null != t && t(), t = null
                        }

                        function o(e, t) {
                            var n = e["on" + t];
                            null != n && (e["_on" + t] = n)
                        }
                        var a = this.options.error;
                        o(e, "load"), o(e, "error"), c(e, {
                            onload: function() {
                                if (e._onload) try {
                                    e._onload.apply(this, Array.prototype.slice.call(arguments, 0))
                                } catch (t) {
                                    r({
                                        msg: "onload handler failed " + t + " @ " + e.src
                                    })
                                }
                                i()
                            },
                            onerror: function() {
                                if (e._onerror) try {
                                    e._onerror.apply(this, Array.prototype.slice.call(arguments, 0))
                                } catch (t) {
                                    return void r({
                                        msg: "onerror handler failed " + t + " @ " + e.src
                                    })
                                }
                                r({
                                    msg: "remote script failed " + e.src
                                })
                            },
                            onreadystatechange: function() {
                                /^(loaded|complete)$/.test(e.readyState) && i()
                            }
                        })
                    }, e.prototype._shouldRelease = function(e) {
                        var t = /^script$/i.test(e.nodeName);
                        return !t || !!(this.options.releaseAsync && e.src && e.hasAttribute("async"))
                    }, e
                }();
            t["default"] = m
        }, function(e, t, n) {
            ! function(t, n) {
                e.exports = n()
            }(this, function() {
                return function(e) {
                    function t(i) {
                        if (n[i]) return n[i].exports;
                        var r = n[i] = {
                            exports: {},
                            id: i,
                            loaded: !1
                        };
                        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.p = "", t(0)
                }([function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return e && e.__esModule ? e : {
                            "default": e
                        }
                    }
                    var r = n(1),
                        o = i(r);
                    e.exports = o["default"]
                }, function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return e && e.__esModule ? e : {
                            "default": e
                        }
                    }

                    function r(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t["default"] = e, t
                    }

                    function o(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.__esModule = !0;
                    var a = n(2),
                        s = r(a),
                        c = n(3),
                        u = r(c),
                        l = n(6),
                        f = i(l),
                        d = n(5),
                        p = {
                            comment: /^<!--/,
                            endTag: /^<\//,
                            atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                            startTag: /^</,
                            chars: /^[^<]/
                        },
                        v = function() {
                            function e() {
                                var t = this,
                                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                o(this, e), this.stream = n;
                                var r = !1,
                                    a = {};
                                for (var c in s) s.hasOwnProperty(c) && (i.autoFix && (a[c + "Fix"] = !0), r = r || a[c + "Fix"]);
                                r ? (this._readToken = (0, f["default"])(this, a, function() {
                                    return t._readTokenImpl()
                                }), this._peekToken = (0, f["default"])(this, a, function() {
                                    return t._peekTokenImpl()
                                })) : (this._readToken = this._readTokenImpl, this._peekToken = this._peekTokenImpl)
                            }
                            return e.prototype.append = function(e) {
                                this.stream += e
                            }, e.prototype.prepend = function(e) {
                                this.stream = e + this.stream
                            }, e.prototype._readTokenImpl = function() {
                                var e = this._peekTokenImpl();
                                if (e) return this.stream = this.stream.slice(e.length), e
                            }, e.prototype._peekTokenImpl = function() {
                                for (var e in p)
                                    if (p.hasOwnProperty(e) && p[e].test(this.stream)) {
                                        var t = u[e](this.stream);
                                        if (t) return "startTag" === t.type && /script|style/i.test(t.tagName) ? null : (t.text = this.stream.substr(0, t.length), t)
                                    }
                            }, e.prototype.peekToken = function() {
                                return this._peekToken()
                            }, e.prototype.readToken = function() {
                                return this._readToken()
                            }, e.prototype.readTokens = function(e) {
                                for (var t = void 0; t = this.readToken();)
                                    if (e[t.type] && e[t.type](t) === !1) return
                            }, e.prototype.clear = function() {
                                var e = this.stream;
                                return this.stream = "", e
                            }, e.prototype.rest = function() {
                                return this.stream
                            }, e
                        }();
                    t["default"] = v, v.tokenToString = function(e) {
                        return e.toString()
                    }, v.escapeAttributes = function(e) {
                        var t = {};
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = (0, d.escapeQuotes)(e[n], null));
                        return t
                    }, v.supports = s;
                    for (var h in s) s.hasOwnProperty(h) && (v.browserHasFlaw = v.browserHasFlaw || !s[h] && h)
                }, function(e, t) {
                    "use strict";
                    t.__esModule = !0;
                    var n = !1,
                        i = !1,
                        r = window.document.createElement("div");
                    try {
                        var o = "<P><I></P></I>";
                        r.innerHTML = o, t.tagSoup = n = r.innerHTML !== o
                    } catch (a) {
                        t.tagSoup = n = !1
                    }
                    try {
                        r.innerHTML = "<P><i><P></P></i></P>", t.selfClose = i = 2 === r.childNodes.length
                    } catch (a) {
                        t.selfClose = i = !1
                    }
                    r = null, t.tagSoup = n, t.selfClose = i
                }, function(e, t, n) {
                    "use strict";

                    function i(e) {
                        var t = e.indexOf("-->");
                        if (t >= 0) return new u.CommentToken(e.substr(4, t - 1), t + 3)
                    }

                    function r(e) {
                        var t = e.indexOf("<");
                        return new u.CharsToken(t >= 0 ? t : e.length)
                    }

                    function o(e) {
                        var t = e.indexOf(">");
                        if (t !== -1) {
                            var n = e.match(l.startTag);
                            if (n) {
                                var i = function() {
                                    var e = {},
                                        t = {},
                                        i = n[2];
                                    return n[2].replace(l.attr, function(n, r) {
                                        arguments[2] || arguments[3] || arguments[4] || arguments[5] ? arguments[5] ? (e[arguments[5]] = "", t[arguments[5]] = !0) : e[r] = arguments[2] || arguments[3] || arguments[4] || l.fillAttr.test(r) && r || "" : e[r] = "", i = i.replace(n, "")
                                    }), {
                                        v: new u.StartTagToken(n[1], n[0].length, e, t, (!!n[3]), i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
                                    }
                                }();
                                if ("object" === ("undefined" == typeof i ? "undefined" : c(i))) return i.v
                            }
                        }
                    }

                    function a(e) {
                        var t = o(e);
                        if (t) {
                            var n = e.slice(t.length);
                            if (n.match(new RegExp("</\\s*" + t.tagName + "\\s*>", "i"))) {
                                var i = n.match(new RegExp("([\\s\\S]*?)</\\s*" + t.tagName + "\\s*>", "i"));
                                if (i) return new u.AtomicTagToken(t.tagName, i[0].length + t.length, t.attrs, t.booleanAttrs, i[1])
                            }
                        }
                    }

                    function s(e) {
                        var t = e.match(l.endTag);
                        if (t) return new u.EndTagToken(t[1], t[0].length)
                    }
                    t.__esModule = !0;
                    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    t.comment = i, t.chars = r, t.startTag = o, t.atomicTag = a, t.endTag = s;
                    var u = n(4),
                        l = {
                            startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                            endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                            attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                            fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
                        }
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.__esModule = !0, t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = void 0;
                    var r = n(5),
                        o = (t.Token = function a(e, t) {
                            i(this, a), this.type = e, this.length = t, this.text = ""
                        }, t.CommentToken = function() {
                            function e(t, n) {
                                i(this, e), this.type = "comment", this.length = n || (t ? t.length : 0), this.text = "", this.content = t
                            }
                            return e.prototype.toString = function() {
                                return "<!--" + this.content
                            }, e
                        }(), t.CharsToken = function() {
                            function e(t) {
                                i(this, e), this.type = "chars", this.length = t, this.text = ""
                            }
                            return e.prototype.toString = function() {
                                return this.text
                            }, e
                        }(), t.TagToken = function() {
                            function e(t, n, r, o, a) {
                                i(this, e), this.type = t, this.length = r, this.text = "", this.tagName = n, this.attrs = o, this.booleanAttrs = a, this.unary = !1, this.html5Unary = !1
                            }
                            return e.formatTag = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    n = "<" + e.tagName;
                                for (var i in e.attrs)
                                    if (e.attrs.hasOwnProperty(i)) {
                                        n += " " + i;
                                        var o = e.attrs[i];
                                        "undefined" != typeof e.booleanAttrs && "undefined" != typeof e.booleanAttrs[i] || (n += '="' + (0, r.escapeQuotes)(o) + '"')
                                    }
                                return e.rest && (n += " " + e.rest), n += e.unary && !e.html5Unary ? "/>" : ">", void 0 !== t && null !== t && (n += t + "</" + e.tagName + ">"), n
                            }, e
                        }());
                    t.StartTagToken = function() {
                        function e(t, n, r, o, a, s) {
                            i(this, e), this.type = "startTag", this.length = n, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = o, this.html5Unary = !1, this.unary = a, this.rest = s
                        }
                        return e.prototype.toString = function() {
                            return o.formatTag(this)
                        }, e
                    }(), t.AtomicTagToken = function() {
                        function e(t, n, r, o, a) {
                            i(this, e), this.type = "atomicTag", this.length = n, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = o, this.unary = !1, this.html5Unary = !1, this.content = a
                        }
                        return e.prototype.toString = function() {
                            return o.formatTag(this, this.content)
                        }, e
                    }(), t.EndTagToken = function() {
                        function e(t, n) {
                            i(this, e), this.type = "endTag", this.length = n, this.text = "", this.tagName = t
                        }
                        return e.prototype.toString = function() {
                            return "</" + this.tagName + ">"
                        }, e
                    }()
                }, function(e, t) {
                    "use strict";

                    function n(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return e ? e.replace(/([^"]*)"/g, function(e, t) {
                            return /\\/.test(t) ? t + '"' : t + '\\"'
                        }) : t
                    }
                    t.__esModule = !0, t.escapeQuotes = n
                }, function(e, t) {
                    "use strict";

                    function n(e) {
                        return e && "startTag" === e.type && (e.unary = s.test(e.tagName) || e.unary, e.html5Unary = !/\/>$/.test(e.text)), e
                    }

                    function i(e, t) {
                        var i = e.stream,
                            r = n(t());
                        return e.stream = i, r
                    }

                    function r(e, t) {
                        var n = t.pop();
                        e.prepend("</" + n.tagName + ">")
                    }

                    function o() {
                        var e = [];
                        return e.last = function() {
                            return this[this.length - 1]
                        }, e.lastTagNameEq = function(e) {
                            var t = this.last();
                            return t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
                        }, e.containsTagName = function(e) {
                            for (var t, n = 0; t = this[n]; n++)
                                if (t.tagName === e) return !0;
                            return !1
                        }, e
                    }

                    function a(e, t, a) {
                        function s() {
                            var t = i(e, a);
                            t && l[t.type] && l[t.type](t)
                        }
                        var u = o(),
                            l = {
                                startTag: function(n) {
                                    var i = n.tagName;
                                    "TR" === i.toUpperCase() && u.lastTagNameEq("TABLE") ? (e.prepend("<TBODY>"), s()) : t.selfCloseFix && c.test(i) && u.containsTagName(i) ? u.lastTagNameEq(i) ? r(e, u) : (e.prepend("</" + n.tagName + ">"), s()) : n.unary || u.push(n)
                                },
                                endTag: function(n) {
                                    var i = u.last();
                                    i ? t.tagSoupFix && !u.lastTagNameEq(n.tagName) ? r(e, u) : u.pop() : t.tagSoupFix && (a(), s())
                                }
                            };
                        return function() {
                            return s(), n(a())
                        }
                    }
                    t.__esModule = !0, t["default"] = a;
                    var s = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                        c = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i
                }])
            })
        }, function(e, t) {
            "use strict";

            function n(e) {
                return void 0 !== e && null !== e
            }

            function i(e) {
                return "function" == typeof e
            }

            function r(e, t, n) {
                var i = void 0,
                    r = e && e.length || 0;
                for (i = 0; i < r; i++) t.call(n, e[i], i)
            }

            function o(e, t, n) {
                for (var i in e) e.hasOwnProperty(i) && t.call(n, i, e[i])
            }

            function a(e, t) {
                return e = e || {}, o(t, function(t, i) {
                    n(e[t]) || (e[t] = i)
                }), e
            }

            function s(e) {
                try {
                    return Array.prototype.slice.call(e)
                } catch (t) {
                    var n = function() {
                        var t = [];
                        return r(e, function(e) {
                            t.push(e)
                        }), {
                            v: t
                        }
                    }();
                    if ("object" === ("undefined" == typeof n ? "undefined" : d(n))) return n.v
                }
            }

            function c(e) {
                return e[e.length - 1]
            }

            function u(e, t) {
                return !(!e || "startTag" !== e.type && "atomicTag" !== e.type || !("tagName" in e)) && !!~e.tagName.toLowerCase().indexOf(t)
            }

            function l(e) {
                return u(e, "script")
            }

            function f(e) {
                return u(e, "style")
            }
            t.__esModule = !0;
            var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.existy = n, t.isFunction = i, t.each = r, t.eachKey = o, t.defaults = a, t.toArray = s, t.last = c, t.isTag = u, t.isScript = l, t.isStyle = f
        }])
    }),
    function() {
        "use strict";

        function e(e) {
            var t = typeof e;
            if ("object" == t) {
                if (!e) return "null";
                if (e instanceof Array) return "array";
                if (e instanceof Object) return t;
                var n = Object.prototype.toString.call(e);
                if ("[object Window]" == n) return "object";
                if ("[object Array]" == n || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == n || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
            } else if ("function" == t && "undefined" == typeof e.call) return "object";
            return t
        }

        function t(e) {
            return "string" == typeof e
        }

        function n(e, t, n) {
            return e.call.apply(e.bind, arguments)
        }

        function i(e, t, n) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var i = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(n, i), e.apply(t, n)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }

        function r(e, t, o) {
            return r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : i, r.apply(null, arguments)
        }

        function o(e, t) {
            var n = Array.prototype.slice.call(arguments, 1);
            return function() {
                var t = n.slice();
                return t.push.apply(t, arguments), e.apply(this, t)
            }
        }

        function a(e) {
            function t() {}
            var n = M;
            t.prototype = n.prototype, e.G = n.prototype, e.prototype = new t, e.prototype.constructor = e, e.F = function(e, t, i) {
                for (var r = Array(arguments.length - 2), o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
                return n.prototype[t].apply(e, r)
            }
        }

        function s(e, t) {
            return -1 != e.indexOf(t)
        }

        function c(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }

        function u(e, n) {
            e: {
                for (var i = e.length, r = t(e) ? e.split("") : e, o = 0; o < i; o++)
                    if (o in r && n.call(void 0, r[o], o, e)) {
                        n = o;
                        break e
                    }
                n = -1
            }
            return 0 > n ? null : t(e) ? e.charAt(n) : e[n]
        }

        function l(e) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        }

        function f(e, t, n) {
            return 2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, n)
        }

        function d() {
            var e = Me.document;
            return e ? e.documentMode : void 0
        }

        function p(e) {
            if (!it[e]) {
                for (var t = 0, n = Fe(String(ze)).split("."), i = Fe(String(e)).split("."), r = Math.max(n.length, i.length), o = 0; 0 == t && o < r; o++) {
                    var a = n[o] || "",
                        s = i[o] || "",
                        u = /(\d*)(\D*)/g,
                        l = /(\d*)(\D*)/g;
                    do {
                        var f = u.exec(a) || ["", "", ""],
                            d = l.exec(s) || ["", "", ""];
                        if (0 == f[0].length && 0 == d[0].length) break;
                        t = c(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || c(0 == f[2].length, 0 == d[2].length) || c(f[2], d[2])
                    } while (0 == t)
                }
                it[e] = 0 <= t
            }
        }

        function v(e, t) {
            if (!e || !t) return !1;
            if (e.contains && 1 == t.nodeType) return e == t || e.contains(t);
            if ("undefined" != typeof e.compareDocumentPosition) return e == t || !!(16 & e.compareDocumentPosition(t));
            for (; t && e != t;) t = t.parentNode;
            return t == e
        }

        function h(e, t) {
            if (e == t) return 0;
            if (e.compareDocumentPosition) return 2 & e.compareDocumentPosition(t) ? 1 : -1;
            if (Je && !(9 <= Number(ot))) {
                if (9 == e.nodeType) return -1;
                if (9 == t.nodeType) return 1
            }
            if ("sourceIndex" in e || e.parentNode && "sourceIndex" in e.parentNode) {
                var n = 1 == e.nodeType,
                    i = 1 == t.nodeType;
                if (n && i) return e.sourceIndex - t.sourceIndex;
                var r = e.parentNode,
                    o = t.parentNode;
                return r == o ? m(e, t) : !n && v(r, t) ? -1 * g(e, t) : !i && v(o, e) ? g(t, e) : (n ? e.sourceIndex : r.sourceIndex) - (i ? t.sourceIndex : o.sourceIndex)
            }
            return i = 9 == e.nodeType ? e : e.ownerDocument || e.document, n = i.createRange(), n.selectNode(e), n.collapse(!0), e = i.createRange(), e.selectNode(t), e.collapse(!0), n.compareBoundaryPoints(Me.Range.START_TO_END, e)
        }

        function g(e, t) {
            var n = e.parentNode;
            if (n == t) return -1;
            for (; t.parentNode != n;) t = t.parentNode;
            return m(t, e)
        }

        function m(e, t) {
            for (; t = t.previousSibling;)
                if (t == e) return -1;
            return 1
        }

        function y(e, t, n, i) {
            this.a = e, this.nodeName = n, this.nodeValue = i, this.nodeType = 2, this.parentNode = this.ownerElement = t
        }

        function w(e, t) {
            var n = st && "href" == t.nodeName ? e.getAttribute(t.nodeName, 2) : t.nodeValue;
            return new y(t, e, t.nodeName, n)
        }

        function E(e) {
            var t = null,
                n = e.nodeType;
            if (1 == n && (t = e.textContent, t = void 0 == t || null == t ? e.innerText : t, t = void 0 == t || null == t ? "" : t), "string" != typeof t)
                if (at && "title" == e.nodeName.toLowerCase() && 1 == n) t = e.text;
                else if (9 == n || 1 == n) {
                e = 9 == n ? e.documentElement : e.firstChild;
                for (var n = 0, i = [], t = ""; e;) {
                    do 1 != e.nodeType && (t += e.nodeValue), at && "title" == e.nodeName.toLowerCase() && (t += e.text), i[n++] = e; while (e = e.firstChild);
                    for (; n && !(e = i[--n].nextSibling););
                }
            } else t = e.nodeValue;
            return "" + t
        }

        function _(e, t, n) {
            if (null === t) return !0;
            try {
                if (!e.getAttribute) return !1
            } catch (i) {
                return !1
            }
            return st && "class" == t && (t = "className"), null == n ? !!e.getAttribute(t) : e.getAttribute(t, 2) == n
        }

        function C(e, n, i, r, o) {
            return (at ? $ : T).call(null, e, n, t(i) ? i : null, t(r) ? r : null, o || new O)
        }

        function $(e, t, n, i, r) {
            if (e instanceof ue || 8 == e.b || n && null === e.b) {
                var o = t.all;
                if (!o) return r;
                if (e = A(e), "*" != e && (o = t.getElementsByTagName(e), !o)) return r;
                if (n) {
                    for (var a = [], s = 0; t = o[s++];) _(t, n, i) && a.push(t);
                    o = a
                }
                for (s = 0; t = o[s++];) "*" == e && "!" == t.tagName || L(r, t);
                return r
            }
            return N(e, t, n, i, r), r
        }

        function T(e, t, n, i, r) {
            return t.getElementsByName && i && "name" == n && !Je ? (t = t.getElementsByName(i), Ue(t, function(t) {
                e.a(t) && L(r, t)
            })) : t.getElementsByClassName && i && "class" == n ? (t = t.getElementsByClassName(i), Ue(t, function(t) {
                t.className == i && e.a(t) && L(r, t)
            })) : e instanceof te ? N(e, t, n, i, r) : t.getElementsByTagName && (t = t.getElementsByTagName(e.f()), Ue(t, function(e) {
                _(e, n, i) && L(r, e)
            })), r
        }

        function b(e, t, n, i, r) {
            var o;
            if ((e instanceof ue || 8 == e.b || n && null === e.b) && (o = t.childNodes)) {
                var a = A(e);
                return "*" == a || (o = Be(o, function(e) {
                    return e.tagName && e.tagName.toLowerCase() == a
                })) ? (n && (o = Be(o, function(e) {
                    return _(e, n, i)
                })), Ue(o, function(e) {
                    "*" == a && ("!" == e.tagName || "*" == a && 1 != e.nodeType) || L(r, e)
                }), r) : r
            }
            return S(e, t, n, i, r)
        }

        function S(e, t, n, i, r) {
            for (t = t.firstChild; t; t = t.nextSibling) _(t, n, i) && e.a(t) && L(r, t);
            return r
        }

        function N(e, t, n, i, r) {
            for (t = t.firstChild; t; t = t.nextSibling) _(t, n, i) && e.a(t) && L(r, t), N(e, t, n, i, r)
        }

        function A(e) {
            if (e instanceof te) {
                if (8 == e.b) return "!";
                if (null === e.b) return "*"
            }
            return e.f()
        }

        function O() {
            this.b = this.a = null, this.l = 0
        }

        function I(e) {
            this.node = e, this.a = this.b = null
        }

        function k(e, t) {
            if (!e.a) return t;
            if (!t.a) return e;
            var n = e.a;
            t = t.a;
            for (var i, r = null, o = 0; n && t;) {
                i = n.node;
                var a = t.node;
                i == a || i instanceof y && a instanceof y && i.a == a.a ? (i = n, n = n.a, t = t.a) : 0 < h(n.node, t.node) ? (i = t, t = t.a) : (i = n, n = n.a), (i.b = r) ? r.a = i : e.a = i, r = i, o++
            }
            for (i = n || t; i;) i.b = r, r = r.a = i, o++, i = i.a;
            return e.b = r, e.l = o, e
        }

        function x(e, t) {
            t = new I(t), t.a = e.a, e.b ? e.a.b = t : e.a = e.b = t, e.a = t, e.l++
        }

        function L(e, t) {
            t = new I(t), t.b = e.b, e.a ? e.b.a = t : e.a = e.b = t, e.b = t, e.l++
        }

        function P(e) {
            return (e = e.a) ? e.node : null
        }

        function D(e) {
            return (e = P(e)) ? E(e) : ""
        }

        function R(e, t) {
            return new j(e, (!!t))
        }

        function j(e, t) {
            this.f = e, this.b = (this.c = t) ? e.b : e.a, this.a = null
        }

        function V(e) {
            var t = e.b;
            if (null == t) return null;
            var n = e.a = t;
            return e.b = e.c ? t.b : t.a, n.node
        }

        function M(e) {
            this.i = e, this.b = this.g = !1, this.f = null
        }

        function F(e) {
            return "\n  " + e.toString().split("\n").join("\n  ")
        }

        function H(e, t) {
            e.g = t
        }

        function U(e, t) {
            e.b = t
        }

        function B(e, t) {
            return e = e.a(t), e instanceof O ? +D(e) : +e
        }

        function W(e, t) {
            return e = e.a(t), e instanceof O ? D(e) : "" + e
        }

        function q(e, t) {
            return e = e.a(t), e instanceof O ? !!e.l : !!e
        }

        function G(e, t, n) {
            M.call(this, e.i), this.c = e, this.h = t, this.o = n, this.g = t.g || n.g, this.b = t.b || n.b, this.c == ut && (n.b || n.g || 4 == n.i || 0 == n.i || !t.f ? t.b || t.g || 4 == t.i || 0 == t.i || !n.f || (this.f = {
                name: n.f.name,
                s: t
            }) : this.f = {
                name: t.f.name,
                s: n
            })
        }

        function K(e, t, n, i, r) {
            t = t.a(i), n = n.a(i);
            var o;
            if (t instanceof O && n instanceof O) {
                for (t = R(t), i = V(t); i; i = V(t))
                    for (r = R(n), o = V(r); o; o = V(r))
                        if (e(E(i), E(o))) return !0;
                return !1
            }
            if (t instanceof O || n instanceof O) {
                t instanceof O ? (r = t, i = n) : (r = n, i = t), o = R(r);
                for (var a = typeof i, s = V(o); s; s = V(o)) {
                    switch (a) {
                        case "number":
                            s = +E(s);
                            break;
                        case "boolean":
                            s = !!E(s);
                            break;
                        case "string":
                            s = E(s);
                            break;
                        default:
                            throw Error("Illegal primitive type for comparison.")
                    }
                    if (r == t && e(s, i) || r == n && e(i, s)) return !0
                }
                return !1
            }
            return r ? "boolean" == typeof t || "boolean" == typeof n ? e(!!t, !!n) : "number" == typeof t || "number" == typeof n ? e(+t, +n) : e(t, n) : e(+t, +n)
        }

        function z(e, t, n, i) {
            this.a = e, this.w = t, this.i = n, this.m = i
        }

        function Y(e, t, n, i) {
            if (ct.hasOwnProperty(e)) throw Error("Binary operator already created: " + e);
            return e = new z(e, t, n, i), ct[e.toString()] = e
        }

        function J(e, t, n) {
            this.a = e, this.b = t || 1, this.f = n || 1
        }

        function X(e, t) {
            if (t.a.length && 4 != e.i) throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");
            M.call(this, e.i), this.c = e, this.h = t, this.g = e.g, this.b = e.b
        }

        function Q(e, t) {
            if (t.length < e.A) throw Error("Function " + e.j + " expects at least" + e.A + " arguments, " + t.length + " given");
            if (null !== e.v && t.length > e.v) throw Error("Function " + e.j + " expects at most " + e.v + " arguments, " + t.length + " given");
            e.B && Ue(t, function(t, n) {
                if (4 != t.i) throw Error("Argument " + n + " to function " + e.j + " is not of type Nodeset: " + t)
            }), M.call(this, e.i), this.h = e, this.c = t, H(this, e.g || qe(t, function(e) {
                return e.g
            })), U(this, e.D && !t.length || e.C && !!t.length || qe(t, function(e) {
                return e.b
            }))
        }

        function Z(e, t, n, i, r, o, a, s, c) {
            this.j = e, this.i = t, this.g = n, this.D = i, this.C = r, this.m = o, this.A = a, this.v = void 0 !== s ? s : a, this.B = !!c
        }

        function ee(e, t, n, i, r, o, a, s) {
            if (lt.hasOwnProperty(e)) throw Error("Function already created: " + e + ".");
            lt[e] = new Z(e, t, n, i, (!1), r, o, a, s)
        }

        function te(e, t) {
            switch (this.h = e, this.c = void 0 !== t ? t : null, this.b = null, e) {
                case "comment":
                    this.b = 8;
                    break;
                case "text":
                    this.b = 3;
                    break;
                case "processing-instruction":
                    this.b = 7;
                    break;
                case "node":
                    break;
                default:
                    throw Error("Unexpected argument")
            }
        }

        function ne(e) {
            return "comment" == e || "text" == e || "processing-instruction" == e || "node" == e
        }

        function ie(e) {
            this.b = e, this.a = 0
        }

        function re(e) {
            e = e.match(ft);
            for (var t = 0; t < e.length; t++) dt.test(e[t]) && e.splice(t, 1);
            return new ie(e)
        }

        function oe(e, t) {
            return e.b[e.a + (t || 0)]
        }

        function ae(e) {
            return e.b[e.a++]
        }

        function se(e) {
            return e.b.length <= e.a
        }

        function ce(e) {
            M.call(this, 3), this.c = e.substring(1, e.length - 1)
        }

        function ue(e, t) {
            this.j = e.toLowerCase(), e = "*" == this.j ? "*" : "http://www.w3.org/1999/xhtml", this.c = t ? t.toLowerCase() : e
        }

        function le(e) {
            M.call(this, 1), this.c = e
        }

        function fe(e, t) {
            M.call(this, e.i), this.h = e, this.c = t, this.g = e.g, this.b = e.b, 1 == this.c.length && (e = this.c[0], e.u || e.c != vt || (e = e.o, "*" != e.f() && (this.f = {
                name: e.f(),
                s: null
            })))
        }

        function de() {
            M.call(this, 4)
        }

        function pe() {
            M.call(this, 4)
        }

        function ve(e) {
            return "/" == e || "//" == e
        }

        function he(e, t) {
            this.a = e, this.b = !!t
        }

        function ge(e, t, n) {
            for (n = n || 0; n < e.a.length; n++)
                for (var i, r = e.a[n], o = R(t), a = t.l, s = 0; i = V(o); s++) {
                    var c = e.b ? a - s : s + 1;
                    if (i = r.a(new J(i, c, a)), "number" == typeof i) c = c == i;
                    else if ("string" == typeof i || "boolean" == typeof i) c = !!i;
                    else {
                        if (!(i instanceof O)) throw Error("Predicate.evaluate returned an unexpected type.");
                        c = 0 < i.l
                    }
                    if (!c) {
                        c = o, i = c.f;
                        var u = c.a;
                        if (!u) throw Error("Next must be called at least once before remove.");
                        var l = u.b,
                            u = u.a;
                        l ? l.a = u : i.a = u, u ? u.b = l : i.b = l, i.l--, c.a = null
                    }
                }
            return t
        }

        function me(e, t, n, i) {
            M.call(this, 4), this.c = e, this.o = t, this.h = n || new he([]), this.u = !!i, t = this.h, t = 0 < t.a.length ? t.a[0].f : null, e.b && t && (e = t.name, e = at ? e.toLowerCase() : e, this.f = {
                name: e,
                s: t.s
            });
            e: {
                for (e = this.h, t = 0; t < e.a.length; t++)
                    if (n = e.a[t], n.g || 1 == n.i || 0 == n.i) {
                        e = !0;
                        break e
                    }
                e = !1
            }
            this.g = e
        }

        function ye(e, t, n, i) {
            this.j = e, this.f = t, this.a = n, this.b = i
        }

        function we(e, t, n, i) {
            if (pt.hasOwnProperty(e)) throw Error("Axis already created: " + e);
            return t = new ye(e, t, n, (!!i)), pt[e] = t
        }

        function Ee(e) {
            M.call(this, 1), this.c = e, this.g = e.g, this.b = e.b
        }

        function _e(e) {
            M.call(this, 4), this.c = e, H(this, qe(this.c, function(e) {
                return e.g
            })), U(this, qe(this.c, function(e) {
                return e.b
            }))
        }

        function Ce(e, t) {
            this.a = e, this.b = t
        }

        function $e(e) {
            for (var t, n = [];;) {
                Te(e, "Missing right hand side of binary expression."), t = ke(e);
                var i = ae(e.a);
                if (!i) break;
                var r = (i = ct[i] || null) && i.w;
                if (!r) {
                    e.a.a--;
                    break
                }
                for (; n.length && r <= n[n.length - 1].w;) t = new G(n.pop(), n.pop(), t);
                n.push(t, i)
            }
            for (; n.length;) t = new G(n.pop(), n.pop(), t);
            return t
        }

        function Te(e, t) {
            if (se(e.a)) throw Error(t)
        }

        function be(e, t) {
            if (e = ae(e.a), e != t) throw Error("Bad token, expected: " + t + " got: " + e)
        }

        function Se(e) {
            if (e = ae(e.a), ")" != e) throw Error("Bad token: " + e)
        }

        function Ne(e) {
            if (e = ae(e.a), 2 > e.length) throw Error("Unclosed literal string");
            return new ce(e)
        }

        function Ae(e) {
            var t, n, i = [];
            if (ve(oe(e.a))) {
                if (t = ae(e.a), n = oe(e.a), "/" == t && (se(e.a) || "." != n && ".." != n && "@" != n && "*" != n && !/(?![0-9])[\w]/.test(n))) return new de;
                n = new de, Te(e, "Missing next location step."), t = Oe(e, t), i.push(t)
            } else {
                e: {
                    switch (t = oe(e.a), n = t.charAt(0)) {
                        case "$":
                            throw Error("Variable reference not allowed in HTML XPath");
                        case "(":
                            ae(e.a), t = $e(e), Te(e, 'unclosed "("'), be(e, ")");
                            break;
                        case '"':
                        case "'":
                            t = Ne(e);
                            break;
                        default:
                            if (isNaN(+t)) {
                                if (ne(t) || !/(?![0-9])[\w]/.test(n) || "(" != oe(e.a, 1)) {
                                    t = null;
                                    break e
                                }
                                for (t = ae(e.a), t = lt[t] || null, ae(e.a), n = [];
                                    ")" != oe(e.a) && (Te(e, "Missing function argument list."), n.push($e(e)), "," == oe(e.a));) ae(e.a);
                                Te(e, "Unclosed function argument list."), Se(e), t = new Q(t, n)
                            } else t = new le((+ae(e.a)))
                    }
                    "[" == oe(e.a) && (n = new he(Ie(e)), t = new X(t, n))
                }
                if (t) {
                    if (!ve(oe(e.a))) return t;
                    n = t
                } else t = Oe(e, "/"),
                n = new pe,
                i.push(t)
            }
            for (; ve(oe(e.a));) t = ae(e.a), Te(e, "Missing next location step."), t = Oe(e, t), i.push(t);
            return new fe(n, i)
        }

        function Oe(e, t) {
            var n, i;
            if ("/" != t && "//" != t) throw Error('Step op should be "/" or "//"');
            if ("." == oe(e.a)) return i = new me(Et, new te("node")), ae(e.a), i;
            if (".." == oe(e.a)) return i = new me(yt, new te("node")), ae(e.a), i;
            var r;
            if ("@" == oe(e.a)) r = vt, ae(e.a), Te(e, "Missing attribute name");
            else if ("::" == oe(e.a, 1)) {
                if (!/(?![0-9])[\w]/.test(oe(e.a).charAt(0))) throw Error("Bad token: " + ae(e.a));
                if (n = ae(e.a), r = pt[n] || null, !r) throw Error("No axis with name: " + n);
                ae(e.a), Te(e, "Missing node name")
            } else r = ht;
            if (n = oe(e.a), !/(?![0-9])[\w\*]/.test(n.charAt(0))) throw Error("Bad token: " + ae(e.a));
            if ("(" == oe(e.a, 1)) {
                if (!ne(n)) throw Error("Invalid node type: " + n);
                if (n = ae(e.a), !ne(n)) throw Error("Invalid type name: " + n);
                be(e, "("), Te(e, "Bad nodetype");
                var o = oe(e.a).charAt(0),
                    a = null;
                '"' != o && "'" != o || (a = Ne(e)), Te(e, "Bad nodetype"), Se(e), n = new te(n, a)
            } else if (n = ae(e.a), o = n.indexOf(":"), -1 == o) n = new ue(n);
            else {
                var s, a = n.substring(0, o);
                if ("*" == a) s = "*";
                else if (s = e.b(a), !s) throw Error("Namespace prefix not declared: " + a);
                n = n.substr(o + 1), n = new ue(n, s)
            }
            return e = new he(Ie(e), r.a), i || new me(r, n, e, "//" == t)
        }

        function Ie(e) {
            for (var t = [];
                "[" == oe(e.a);) {
                ae(e.a), Te(e, "Missing predicate expression.");
                var n = $e(e);
                t.push(n), Te(e, "Unclosed predicate expression."), be(e, "]")
            }
            return t
        }

        function ke(e) {
            if ("-" == oe(e.a)) return ae(e.a), new Ee(ke(e));
            var t = Ae(e);
            if ("|" != oe(e.a)) e = t;
            else {
                for (t = [t];
                    "|" == ae(e.a);) Te(e, "Missing next union location path."), t.push(Ae(e));
                e.a.a--, e = new _e(t)
            }
            return e
        }

        function xe(e) {
            switch (e.nodeType) {
                case 1:
                    return o(Pe, e);
                case 9:
                    return xe(e.documentElement);
                case 11:
                case 10:
                case 6:
                case 12:
                    return Le;
                default:
                    return e.parentNode ? xe(e.parentNode) : Le
            }
        }

        function Le() {
            return null
        }

        function Pe(e, t) {
            if (e.prefix == t) return e.namespaceURI || "http://www.w3.org/1999/xhtml";
            var n = e.getAttributeNode("xmlns:" + t);
            return n && n.specified ? n.value || null : e.parentNode && 9 != e.parentNode.nodeType ? Pe(e.parentNode, t) : null
        }

        function De(t, n) {
            if (!t.length) throw Error("Empty XPath expression.");
            if (t = re(t), se(t)) throw Error("Invalid XPath expression.");
            n ? "function" == e(n) || (n = r(n.lookupNamespaceURI, n)) : n = function() {
                return null
            };
            var i = $e(new Ce(t, n));
            if (!se(t)) throw Error("Bad token: " + ae(t));
            this.evaluate = function(e, t) {
                return e = i.a(new J(e)), new Re(e, t)
            }
        }

        function Re(e, t) {
            if (0 == t)
                if (e instanceof O) t = 4;
                else if ("string" == typeof e) t = 2;
            else if ("number" == typeof e) t = 1;
            else {
                if ("boolean" != typeof e) throw Error("Unexpected evaluation result.");
                t = 3
            }
            if (2 != t && 1 != t && 3 != t && !(e instanceof O)) throw Error("value could not be converted to the specified type");
            this.resultType = t;
            var n;
            switch (t) {
                case 2:
                    this.stringValue = e instanceof O ? D(e) : "" + e;
                    break;
                case 1:
                    this.numberValue = e instanceof O ? +D(e) : +e;
                    break;
                case 3:
                    this.booleanValue = e instanceof O ? 0 < e.l : !!e;
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    var i = R(e);
                    n = [];
                    for (var r = V(i); r; r = V(i)) n.push(r instanceof y ? r.a : r);
                    this.snapshotLength = e.l, this.invalidIteratorState = !1;
                    break;
                case 8:
                case 9:
                    e = P(e), this.singleNodeValue = e instanceof y ? e.a : e;
                    break;
                default:
                    throw Error("Unknown XPathResult type.")
            }
            var o = 0;
            this.iterateNext = function() {
                if (4 != t && 5 != t) throw Error("iterateNext called with wrong result type");
                return o >= n.length ? null : n[o++]
            }, this.snapshotItem = function(e) {
                if (6 != t && 7 != t) throw Error("snapshotItem called with wrong result type");
                return e >= n.length || 0 > e ? null : n[e]
            }
        }

        function je(e) {
            this.lookupNamespaceURI = xe(e)
        }
        var Ve, Me = window,
            Fe = String.prototype.trim ? function(e) {
                return e.trim()
            } : function(e) {
                return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
            },
            He = Array.prototype.indexOf ? function(e, t, n) {
                return Array.prototype.indexOf.call(e, t, n)
            } : function(e, n, i) {
                if (i = null == i ? 0 : 0 > i ? Math.max(0, e.length + i) : i, t(e)) return t(n) && 1 == n.length ? e.indexOf(n, i) : -1;
                for (; i < e.length; i++)
                    if (i in e && e[i] === n) return i;
                return -1
            },
            Ue = Array.prototype.forEach ? function(e, t, n) {
                Array.prototype.forEach.call(e, t, n)
            } : function(e, n, i) {
                for (var r = e.length, o = t(e) ? e.split("") : e, a = 0; a < r; a++) a in o && n.call(i, o[a], a, e)
            },
            Be = Array.prototype.filter ? function(e, t, n) {
                return Array.prototype.filter.call(e, t, n)
            } : function(e, n, i) {
                for (var r = e.length, o = [], a = 0, s = t(e) ? e.split("") : e, c = 0; c < r; c++)
                    if (c in s) {
                        var u = s[c];
                        n.call(i, u, c, e) && (o[a++] = u)
                    }
                return o
            },
            We = Array.prototype.reduce ? function(e, t, n, i) {
                return i && (t = r(t, i)), Array.prototype.reduce.call(e, t, n)
            } : function(e, t, n, i) {
                var r = n;
                return Ue(e, function(n, o) {
                    r = t.call(i, r, n, o, e)
                }), r
            },
            qe = Array.prototype.some ? function(e, t, n) {
                return Array.prototype.some.call(e, t, n)
            } : function(e, n, i) {
                for (var r = e.length, o = t(e) ? e.split("") : e, a = 0; a < r; a++)
                    if (a in o && n.call(i, o[a], a, e)) return !0;
                return !1
            };
        e: {
            var Ge = Me.navigator;
            if (Ge) {
                var Ke = Ge.userAgent;
                if (Ke) {
                    Ve = Ke;
                    break e
                }
            }
            Ve = ""
        }
        var ze, Ye = s(Ve, "Opera"),
            Je = s(Ve, "Trident") || s(Ve, "MSIE"),
            Xe = s(Ve, "Edge"),
            Qe = s(Ve, "Gecko") && !(s(Ve.toLowerCase(), "webkit") && !s(Ve, "Edge")) && !(s(Ve, "Trident") || s(Ve, "MSIE")) && !s(Ve, "Edge"),
            Ze = s(Ve.toLowerCase(), "webkit") && !s(Ve, "Edge");
        e: {
            var et = "",
                tt = function() {
                    var e = Ve;
                    return Qe ? /rv\:([^\);]+)(\)|;)/.exec(e) : Xe ? /Edge\/([\d\.]+)/.exec(e) : Je ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : Ze ? /WebKit\/(\S+)/.exec(e) : Ye ? /(?:Version)[ \/]?(\S+)/.exec(e) : void 0
                }();
            if (tt && (et = tt ? tt[1] : ""), Je) {
                var nt = d();
                if (null != nt && nt > parseFloat(et)) {
                    ze = String(nt);
                    break e
                }
            }
            ze = et
        }
        var it = {},
            rt = Me.document,
            ot = rt && Je ? d() || ("CSS1Compat" == rt.compatMode ? parseInt(ze, 10) : 5) : void 0;
        !Qe && !Je || Je && 9 <= Number(ot) || Qe && p("1.9.1"), Je && p("9");
        var at = Je && !(9 <= Number(ot)),
            st = Je && !(8 <= Number(ot));
        a(G), G.prototype.a = function(e) {
            return this.c.m(this.h, this.o, e)
        }, G.prototype.toString = function() {
            var e = "Binary Expression: " + this.c,
                e = e + F(this.h);
            return e += F(this.o)
        }, z.prototype.toString = function() {
            return this.a
        };
        var ct = {};
        Y("div", 6, 1, function(e, t, n) {
            return B(e, n) / B(t, n)
        }), Y("mod", 6, 1, function(e, t, n) {
            return B(e, n) % B(t, n)
        }), Y("*", 6, 1, function(e, t, n) {
            return B(e, n) * B(t, n)
        }), Y("+", 5, 1, function(e, t, n) {
            return B(e, n) + B(t, n)
        }), Y("-", 5, 1, function(e, t, n) {
            return B(e, n) - B(t, n)
        }), Y("<", 4, 2, function(e, t, n) {
            return K(function(e, t) {
                return e < t
            }, e, t, n)
        }), Y(">", 4, 2, function(e, t, n) {
            return K(function(e, t) {
                return e > t
            }, e, t, n)
        }), Y("<=", 4, 2, function(e, t, n) {
            return K(function(e, t) {
                return e <= t
            }, e, t, n)
        }), Y(">=", 4, 2, function(e, t, n) {
            return K(function(e, t) {
                return e >= t
            }, e, t, n)
        });
        var ut = Y("=", 3, 2, function(e, t, n) {
            return K(function(e, t) {
                return e == t
            }, e, t, n, !0)
        });
        Y("!=", 3, 2, function(e, t, n) {
            return K(function(e, t) {
                return e != t
            }, e, t, n, !0)
        }), Y("and", 2, 2, function(e, t, n) {
            return q(e, n) && q(t, n)
        }), Y("or", 1, 2, function(e, t, n) {
            return q(e, n) || q(t, n)
        }), a(X), X.prototype.a = function(e) {
            return e = this.c.a(e), ge(this.h, e)
        }, X.prototype.toString = function() {
            var e;
            return e = "Filter:" + F(this.c), e += F(this.h)
        }, a(Q), Q.prototype.a = function(e) {
            return this.h.m.apply(null, l(e, this.c))
        }, Q.prototype.toString = function() {
            var e = "Function: " + this.h;
            if (this.c.length) var t = We(this.c, function(e, t) {
                    return e + F(t)
                }, "Arguments:"),
                e = e + F(t);
            return e
        }, Z.prototype.toString = function() {
            return this.j
        };
        var lt = {};
        ee("boolean", 2, !1, !1, function(e, t) {
            return q(t, e)
        }, 1), ee("ceiling", 1, !1, !1, function(e, t) {
            return Math.ceil(B(t, e))
        }, 1), ee("concat", 3, !1, !1, function(e, t) {
            return We(f(arguments, 1), function(t, n) {
                return t + W(n, e)
            }, "")
        }, 2, null), ee("contains", 2, !1, !1, function(e, t, n) {
            return s(W(t, e), W(n, e))
        }, 2), ee("count", 1, !1, !1, function(e, t) {
            return t.a(e).l
        }, 1, 1, !0), ee("false", 2, !1, !1, function() {
            return !1
        }, 0), ee("floor", 1, !1, !1, function(e, t) {
            return Math.floor(B(t, e))
        }, 1), ee("id", 4, !1, !1, function(e, t) {
            function n(e) {
                if (at) {
                    var t = r.all[e];
                    if (t) {
                        if (t.nodeType && e == t.id) return t;
                        if (t.length) return u(t, function(t) {
                            return e == t.id
                        })
                    }
                    return null
                }
                return r.getElementById(e)
            }
            var i = e.a,
                r = 9 == i.nodeType ? i : i.ownerDocument;
            e = W(t, e).split(/\s+/);
            var o = [];
            Ue(e, function(e) {
                e = n(e), !e || 0 <= He(o, e) || o.push(e)
            }), o.sort(h);
            var a = new O;
            return Ue(o, function(e) {
                L(a, e)
            }), a
        }, 1), ee("lang", 2, !1, !1, function() {
            return !1
        }, 1), ee("last", 1, !0, !1, function(e) {
            if (1 != arguments.length) throw Error("Function last expects ()");
            return e.f
        }, 0), ee("local-name", 3, !1, !0, function(e, t) {
            return (e = t ? P(t.a(e)) : e.a) ? e.localName || e.nodeName.toLowerCase() : ""
        }, 0, 1, !0), ee("name", 3, !1, !0, function(e, t) {
            return (e = t ? P(t.a(e)) : e.a) ? e.nodeName.toLowerCase() : ""
        }, 0, 1, !0), ee("namespace-uri", 3, !0, !1, function() {
            return ""
        }, 0, 1, !0), ee("normalize-space", 3, !1, !0, function(e, t) {
            return (t ? W(t, e) : E(e.a)).replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
        }, 0, 1), ee("not", 2, !1, !1, function(e, t) {
            return !q(t, e)
        }, 1), ee("number", 1, !1, !0, function(e, t) {
            return t ? B(t, e) : +E(e.a)
        }, 0, 1), ee("position", 1, !0, !1, function(e) {
            return e.b
        }, 0), ee("round", 1, !1, !1, function(e, t) {
            return Math.round(B(t, e))
        }, 1), ee("starts-with", 2, !1, !1, function(e, t, n) {
            return t = W(t, e), e = W(n, e), 0 == t.lastIndexOf(e, 0)
        }, 2), ee("string", 3, !1, !0, function(e, t) {
            return t ? W(t, e) : E(e.a)
        }, 0, 1), ee("string-length", 1, !1, !0, function(e, t) {
            return (t ? W(t, e) : E(e.a)).length
        }, 0, 1), ee("substring", 3, !1, !1, function(e, t, n, i) {
            if (n = B(n, e), isNaN(n) || 1 / 0 == n || -(1 / 0) == n) return "";
            if (i = i ? B(i, e) : 1 / 0, isNaN(i) || -(1 / 0) === i) return "";
            n = Math.round(n) - 1;
            var r = Math.max(n, 0);
            return e = W(t, e), 1 / 0 == i ? e.substring(r) : e.substring(r, n + Math.round(i))
        }, 2, 3), ee("substring-after", 3, !1, !1, function(e, t, n) {
            return t = W(t, e), e = W(n, e), n = t.indexOf(e), -1 == n ? "" : t.substring(n + e.length)
        }, 2), ee("substring-before", 3, !1, !1, function(e, t, n) {
            return t = W(t, e), e = W(n, e), e = t.indexOf(e), -1 == e ? "" : t.substring(0, e)
        }, 2), ee("sum", 1, !1, !1, function(e, t) {
            e = R(t.a(e)), t = 0;
            for (var n = V(e); n; n = V(e)) t += +E(n);
            return t
        }, 1, 1, !0), ee("translate", 3, !1, !1, function(e, t, n, i) {
            t = W(t, e), n = W(n, e);
            var r = W(i, e);
            for (e = {}, i = 0; i < n.length; i++) {
                var o = n.charAt(i);
                o in e || (e[o] = r.charAt(i))
            }
            for (n = "", i = 0; i < t.length; i++) o = t.charAt(i), n += o in e ? e[o] : o;
            return n
        }, 3), ee("true", 2, !1, !1, function() {
            return !0
        }, 0), te.prototype.a = function(e) {
            return null === this.b || this.b == e.nodeType
        }, te.prototype.f = function() {
            return this.h
        }, te.prototype.toString = function() {
            var e = "Kind Test: " + this.h;
            return null === this.c || (e += F(this.c)), e
        };
        var ft = /\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,
            dt = /^\s/;
        a(ce), ce.prototype.a = function() {
            return this.c
        }, ce.prototype.toString = function() {
            return "Literal: " + this.c
        }, ue.prototype.a = function(e) {
            var t = e.nodeType;
            return (1 == t || 2 == t) && (t = void 0 !== e.localName ? e.localName : e.nodeName, ("*" == this.j || this.j == t.toLowerCase()) && ("*" == this.c || this.c == (e.namespaceURI ? e.namespaceURI.toLowerCase() : "http://www.w3.org/1999/xhtml")))
        }, ue.prototype.f = function() {
            return this.j
        }, ue.prototype.toString = function() {
            return "Name Test: " + ("http://www.w3.org/1999/xhtml" == this.c ? "" : this.c + ":") + this.j
        }, a(le), le.prototype.a = function() {
            return this.c
        }, le.prototype.toString = function() {
            return "Number: " + this.c
        }, a(fe), a(de), de.prototype.a = function(e) {
            var t = new O;
            return e = e.a, 9 == e.nodeType ? L(t, e) : L(t, e.ownerDocument), t
        }, de.prototype.toString = function() {
            return "Root Helper Expression"
        }, a(pe), pe.prototype.a = function(e) {
            var t = new O;
            return L(t, e.a), t
        }, pe.prototype.toString = function() {
            return "Context Helper Expression"
        }, fe.prototype.a = function(e) {
            var t = this.h.a(e);
            if (!(t instanceof O)) throw Error("Filter expression must evaluate to nodeset.");
            e = this.c;
            for (var n = 0, i = e.length; n < i && t.l; n++) {
                var r, o = e[n],
                    a = R(t, o.c.a);
                if (o.g || o.c != mt)
                    if (o.g || o.c != wt)
                        for (r = V(a), t = o.a(new J(r)); null != (r = V(a));) r = o.a(new J(r)), t = k(t, r);
                    else r = V(a), t = o.a(new J(r));
                else {
                    for (r = V(a);
                        (t = V(a)) && (!r.contains || r.contains(t)) && 8 & t.compareDocumentPosition(r); r = t);
                    t = o.a(new J(r))
                }
            }
            return t
        }, fe.prototype.toString = function() {
            var e;
            if (e = "Path Expression:" + F(this.h), this.c.length) {
                var t = We(this.c, function(e, t) {
                    return e + F(t)
                }, "Steps:");
                e += F(t)
            }
            return e
        }, he.prototype.toString = function() {
            return We(this.a, function(e, t) {
                return e + F(t)
            }, "Predicates:")
        }, a(me), me.prototype.a = function(e) {
            var t = e.a,
                n = this.f,
                i = null,
                r = null,
                o = 0;
            if (n && (i = n.name, r = n.s ? W(n.s, e) : null, o = 1), this.u)
                if (this.g || this.c != ht)
                    if (t = R(new me(gt, new te("node")).a(e)), n = V(t))
                        for (e = this.m(n, i, r, o); null != (n = V(t));) e = k(e, this.m(n, i, r, o));
                    else e = new O;
            else e = C(this.o, t, i, r), e = ge(this.h, e, o);
            else e = this.m(e.a, i, r, o);
            return e
        }, me.prototype.m = function(e, t, n, i) {
            return e = this.c.f(this.o, e, t, n), e = ge(this.h, e, i)
        }, me.prototype.toString = function() {
            var e;
            if (e = "Step:" + F("Operator: " + (this.u ? "//" : "/")), this.c.j && (e += F("Axis: " + this.c)), e += F(this.o), this.h.a.length) {
                var t = We(this.h.a, function(e, t) {
                    return e + F(t)
                }, "Predicates:");
                e += F(t)
            }
            return e
        }, ye.prototype.toString = function() {
            return this.j
        };
        var pt = {};
        we("ancestor", function(e, t) {
            for (var n = new O; t = t.parentNode;) e.a(t) && x(n, t);
            return n
        }, !0), we("ancestor-or-self", function(e, t) {
            var n = new O;
            do e.a(t) && x(n, t); while (t = t.parentNode);
            return n
        }, !0);
        var vt = we("attribute", function(e, t) {
                var n = new O,
                    i = e.f();
                if ("style" == i && at && t.style) return L(n, new y(t.style, t, "style", t.style.cssText)), n;
                var r = t.attributes;
                if (r)
                    if (e instanceof te && null === e.b || "*" == i)
                        for (e = 0; i = r[e]; e++) at ? i.nodeValue && L(n, w(t, i)) : L(n, i);
                    else(i = r.getNamedItem(i)) && (at ? i.nodeValue && L(n, w(t, i)) : L(n, i));
                return n
            }, !1),
            ht = we("child", function(e, n, i, r, o) {
                return (at ? b : S).call(null, e, n, t(i) ? i : null, t(r) ? r : null, o || new O)
            }, !1, !0);
        we("descendant", C, !1, !0);
        var gt = we("descendant-or-self", function(e, t, n, i) {
                var r = new O;
                return _(t, n, i) && e.a(t) && L(r, t), C(e, t, n, i, r)
            }, !1, !0),
            mt = we("following", function(e, t, n, i) {
                var r = new O;
                do
                    for (var o = t; o = o.nextSibling;) _(o, n, i) && e.a(o) && L(r, o), r = C(e, o, n, i, r); while (t = t.parentNode);
                return r
            }, !1, !0);
        we("following-sibling", function(e, t) {
            for (var n = new O; t = t.nextSibling;) e.a(t) && L(n, t);
            return n
        }, !1), we("namespace", function() {
            return new O
        }, !1);
        var yt = we("parent", function(e, t) {
                var n = new O;
                return 9 == t.nodeType ? n : 2 == t.nodeType ? (L(n, t.ownerElement), n) : (t = t.parentNode, e.a(t) && L(n, t), n)
            }, !1),
            wt = we("preceding", function(e, t, n, i) {
                var r = new O,
                    o = [];
                do o.unshift(t); while (t = t.parentNode);
                for (var a = 1, s = o.length; a < s; a++) {
                    var c = [];
                    for (t = o[a]; t = t.previousSibling;) c.unshift(t);
                    for (var u = 0, l = c.length; u < l; u++) t = c[u], _(t, n, i) && e.a(t) && L(r, t), r = C(e, t, n, i, r)
                }
                return r
            }, !0, !0);
        we("preceding-sibling", function(e, t) {
            for (var n = new O; t = t.previousSibling;) e.a(t) && x(n, t);
            return n
        }, !0);
        var Et = we("self", function(e, t) {
            var n = new O;
            return e.a(t) && L(n, t), n
        }, !1);
        a(Ee), Ee.prototype.a = function(e) {
            return -B(this.c, e)
        }, Ee.prototype.toString = function() {
            return "Unary Expression: -" + F(this.c)
        }, a(_e), _e.prototype.a = function(e) {
            var t = new O;
            return Ue(this.c, function(n) {
                if (n = n.a(e), !(n instanceof O)) throw Error("Path expression must evaluate to NodeSet.");
                t = k(t, n)
            }), t
        }, _e.prototype.toString = function() {
            return We(this.c, function(e, t) {
                return e + F(t)
            }, "Union Expression:")
        }, Re.ANY_TYPE = 0, Re.NUMBER_TYPE = 1, Re.STRING_TYPE = 2, Re.BOOLEAN_TYPE = 3, Re.UNORDERED_NODE_ITERATOR_TYPE = 4, Re.ORDERED_NODE_ITERATOR_TYPE = 5, Re.UNORDERED_NODE_SNAPSHOT_TYPE = 6, Re.ORDERED_NODE_SNAPSHOT_TYPE = 7, Re.ANY_UNORDERED_NODE_TYPE = 8, Re.FIRST_ORDERED_NODE_TYPE = 9;
        var _t = window.document;
        _t && _t.evaluate || (_t = {
            evaluate: function(e, t, n, i) {
                return new De(e, n).evaluate(t, i)
            },
            createExpression: function(e, t) {
                return new De(e, t)
            },
            createNSResolver: function(e) {
                return new je(e)
            }
        }), window.sevenTag.xpathProvider = _t
    }.call(this),
    function(e, t) {
        var n = function(e) {
            var t = function(t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
                },
                n = function(t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
                },
                i = function(t) {
                    var n = t || e.event;
                    n.cancelBubble = !0, n.stopPropagation && n.stopPropagation()
                },
                r = function(t) {
                    return e.appendChild(t)
                };
            return {
                bind: t,
                unbind: n,
                stop: i,
                appendChild: r
            }
        };
        n.$inject = [], e.provider(t, function() {
            return n
        })
    }(window.sevenTag, "Element"),
    function(e) {
        function t(e, t) {
            var n = e.split("."),
                i = window.sevenTag;
            for (e = n.shift(); n.length && "undefined" != typeof i[e];) i = i[e], e = n.shift();
            return 0 === n.length && "undefined" != typeof i[e] ? i[e] : t
        }

        function n(e) {
            function t(t) {
                return new t(e)
            }
            return t.$inject = ["Element"], t
        }
        var i = [],
            r = 31556926,
            o = function() {
                var e;
                return e = "undefined" != typeof localStorage ? localStorage : "undefined" != typeof window.localStorageFallback ? window.localStorageFallback : {
                    storage: {},
                    setItem: function(e, t) {
                        this.storage[e] = t
                    },
                    removeItem: function(e) {
                        delete this.storage[e]
                    },
                    getItem: function(e) {
                        return this.storage[e]
                    }
                }
            }(),
            a = function() {
                var e = null,
                    t = null;
                return {
                    set: function(n, i) {
                        e = n.pageX - i.offsetLeft, t = n.pageY - i.offsetTop
                    },
                    get: function() {
                        return {
                            x: e,
                            y: t
                        }
                    }
                }
            }();
        e.value("$window", window), e.value("$history", window.history), e.value("$localStorage", o), e.service("$lastClickedCursorPositionInsideElement", function() {
            return a
        }), e.value("$dataLayerName", t("configuration.data_layer_name", "dataLayer")), e.value("$useSecureCookies", t("configuration.use_secure_cookies", !1)), e.value("$document", document), e.emit = function(e, t) {
            for (var n = 0; n < i.length; n++) {
                var r = i[n];
                r(e, t)
            }
        }, e.on = function(e, t) {
            i.push(function(n, i) {
                n === e && t(i)
            })
        }, e.service("$postscribe", function() {
            return {
                postscribe: e.postscribe
            }
        }), e.service("$json", function() {
            return window.JSON
        }), e.service("$documentElement", n(window.document)), e.service("$bodyElement", n(window.document.body)), e.service("$windowElement", n(window)), e.service("$injector", function() {
            return e.$injector
        }), e.provider("DELAY", function() {
            return window.sevenTag.configuration && window.sevenTag.configuration.delay ? window.sevenTag.configuration.delay : 1e3
        }), e.value("SUPPORTED_CAMPAIGNS", ["utm_campaign", "pk_campaign"]), e.value("$variables", function() {
            return window.sevenTag.variables
        }), e.value("$configuration", t("configuration", {})), e.value("$consentCollectUrl", "//" + t("configuration.main_domain") + "/consent/collect"), e.value("$audienceManagerEnabled", t("configuration.audience_manager_enabled", !1)), e.value("$audienceManagerMembershipUrl", "//" + t("configuration.main_domain") + "/audiences/public/api/profiles/@visitor_id@/audiences?website_id=" + t("configuration.id", null)), e.value("$audienceManagerRequest", {
            timeout: 1e3,
            delay: 6e4
        }), e.value("$websiteId", t("configuration.id", null)), e.value("$privacyComplianceEnabled", t("privacy.enabled", !1)), e.value("$privacyComplianceDefaultLanguage", t("privacy.configuration.settings.default_language", null)), e.value("$privacyComplianceLanguages", t("privacy.configuration.settings.languages", {})), e.value("$privacyComplianceUserModeEnabled", t("privacy.configuration.settings.user_mode_enabled", !1)), e.value("$privacyComplianceDomains", t("privacy.configuration.settings.domains", [])), e.value("$privacyComplianceCookieExpirationPeriod", parseInt(t("privacy.configuration.settings.cookie_expiration_period", r), 10)), e.value("$privacyComplianceCookieStalePeriod", parseInt(t("privacy.configuration.settings.cookie_stale_period", -1), 10)), e.value("$hostname", window.location.hostname), e.provider("NONCE_TOKEN", function() {
            for (var e, t = document.getElementsByTagName("script"), n = 0; !e && n < t.length; n++) e = t[n].nonce;
            return e ? e : null
        }), e.value("DEBUG_PARAM_NAME", "_stg_debug"), e.value("$location", window.location), e.value("STG_EVENTS_PREFIX", "stg."), e.value("SESSION_LENGTH", 1800), e.value("IS_SYNCHRONOUS", !1), e.value("$timerIntervals", [1, 3, 5, 15, 30, 60, 120]), e.value("$privacyComplianceCookieNamePattern", "ppms_privacy_%websiteId%"), e.value("$privacyBarCookieNamePattern", "ppms_privacy_bar_%websiteId%"), e.value("$externalApiProductsNamespaces", ["tm", "cm"]), e.value("$externalApiStackNamespace", "ppms"), e.value("$dataLayerPushEventName", "pptm.dataLayer:push"), e.value("$ppmsEventNames", {
            GET_COMPLIANCE_TYPES: "ppms.cm:getComplianceTypes",
            GET_NEW_COMPLIANCE_TYPES: "ppms.cm:getNewComplianceTypes",
            SET_INITIAL_COMPLIANCE_SETTINGS: "ppms.cm:setInitialComplianceSettings",
            SET_COMPLIANCE_SETTINGS: "ppms.cm:setComplianceSettings",
            GET_COMPLIANCE_SETTINGS: "ppms.cm:getComplianceSettings",
            SEND_DATA_REQUEST: "ppms.cm:sendDataRequest",
            OPEN_CONSENT_FORM: "ppms.cm:openConsentForm",
            TRACK_AGREE_TO_ALL_CLICK: "ppms.cm:trackAgreeToAllClick",
            TRACK_CLOSE_BUTTON_CLICK: "ppms.cm:trackCloseButtonClick",
            TRACK_REJECT_ALL_CLICK: "ppms.cm:trackRejectAllClick",
            TRACK_SAVE_CHOICES_CLICK: "ppms.cm:trackSaveChoicesClick",
            TRACK_MAIN_FORM_VIEW: "ppms.cm:trackMainFormView",
            TRACK_REMINDER_WIDGET_VIEW: "ppms.cm:trackReminderWidgetView",
            TRACK_PRIVACY_POLICY_LINK_VIEW: "ppms.cm:trackPrivacyPolicyLinkView",
            CONSENTS_WERE_SENT: "_ppms.cm.consents_were_sent",
            CONSENT_FORM_VIEW_MAIN: "_ppms.cm.consent_form_view_main",
            CONSENT_FORM_VIEW_REMINDER: "_ppms.cm.consent_form_view_reminder",
            CONSENT_FORM_VIEW_PRIVACY_POLICY: "_ppms.cm.consent_form_view_privacy_policy",
            AGREE_TO_ALL_CLICKED: "_ppms.cm.agree_to_all_clicked",
            REJECT_ALL_CLICKED: "_ppms.cm.reject_all_clicked",
            SAVE_CHOICES_CLICKED: "_ppms.cm.save_choices_clicked",
            CLOSE_BUTTON_CLICKED: "_ppms.cm.close_button_clicked",
            CONSENT_DECISION_MADE: "_ppms.cm.consent_decision_made",
            DATA_REQUEST_WERE_SENT: "_ppms.cm.data_request_were_sent"
        })
    }(window.sevenTag),
    function(e, t) {
        function n(e) {
            var t = 1;
            return "object" == typeof HTMLElement && e instanceof HTMLElement || !(!e || "object" != typeof e) && (e.nodeType === t && "string" == typeof e.nodeName)
        }
        var i = /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i,
            r = function(t) {
                var r = {},
                    o = r.hasOwnProperty,
                    a = {},
                    s = [],
                    c = this;
                this.timeout = function(e) {
                    var n = [].slice.call(arguments, 0)[1] || 0;
                    t.setTimeout(e, n)
                }, this.extend = function() {
                    var e, t, n, i, r, o, a = arguments[0] || {},
                        s = 1,
                        u = arguments.length,
                        l = !1;
                    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || c.isFunction(a) || (a = {}), s === u && (a = c, s--); s < u; s++)
                        if (null != (r = arguments[s]))
                            for (i in r) e = a[i], n = r[i], a !== n && (l && n && (c.isPlainObject(n) || (t = c.isArray(n))) ? (t ? (t = !1, o = e && c.isArray(e) ? e : []) : o = e && c.isPlainObject(e) ? e : {}, a[i] = c.extend(l, o, n)) : void 0 !== n && (a[i] = n));
                    return a
                }, this.isArray = Array.isArray || function(e) {
                    return e instanceof Array
                }, this.isFunction = function(e) {
                    return e && e.apply && e.call
                }, this.isString = function(e) {
                    return e && "string" === this.type(e)
                }, this.isObject = function(e) {
                    return e && "object" === this.type(e)
                }, this.isWindow = function(e) {
                    return void 0 !== e.document
                }, this.isPlainObject = function(e) {
                    var t;
                    if (!e || "object" !== c.type(e) || e.nodeType || c.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    if (a.ownLast)
                        for (t in e) return o.call(e, t);
                    for (t in e);
                    return void 0 === t || o.call(e, t)
                }, this.isEmptyObject = function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, this.type = function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[e.toString()] || "object" : typeof e
                }, this.getElementsByClassName = function(e) {
                    var t, n, i, r = document,
                        o = [];
                    if (r.querySelectorAll) return r.querySelectorAll("." + e);
                    if (r.evaluate)
                        for (n = ".//*[contains(concat(' ', @class, ' '), '" + e + " ')]", t = r.evaluate(n, r, null, 0, null); i = t.iterateNext();) o.push(i);
                    else
                        for (t = r.getElementsByTagName("*"), n = new RegExp("(^|\\s)" + e + "(\\s|$)"), i = 0; i < t.length; i++) n.test(t[i].className) && o.push(t[i]);
                    return o
                }, this.indexOf = function(e, t, n) {
                    if (!e) return -1;
                    if (s.indexOf) return s.indexOf.call(e, t, n);
                    for (n = void 0 === n ? 0 : Math.max(0, n); n < e.length;) {
                        if (n in e && e[n] === t) return n;
                        ++n
                    }
                    return -1
                }, this.contains = function(e, t) {
                    return c.indexOf(e, t) !== -1
                }, this.isArrayLike = function(e) {
                    return c.exists(e) && c.exists(e.length) && e.length >= 0
                }, this.keyExists = function(e, t) {
                    var n = t.split("."),
                        i = e;
                    if ("undefined" == typeof e || null === e) return !1;
                    for (t = n.shift(); n.length && null !== i && "undefined" != typeof i[t];) i = i[t], t = n.shift();
                    return 0 === n.length && null !== i && "undefined" != typeof i[t]
                }, this.getKeyValue = function(e, t, n) {
                    var i = t.split("."),
                        r = e;
                    if ("undefined" == typeof e || null === e) return n;
                    for (t = i.shift(); i.length && null !== r && "undefined" != typeof r[t];) r = r[t], t = i.shift();
                    return 0 === i.length && null !== r && "undefined" != typeof r[t] ? r[t] : n
                }, this.filter = function(e, t) {
                    var n = [];
                    return c.forEach(e, function(e, i) {
                        t(e, i) && n.push(e)
                    }), n
                }, this.map = function(e, t) {
                    var n = [];
                    return c.forEach(e, function(e, i) {
                        n.push(t(e, i))
                    }), n
                }, this.forEach = function(e, t) {
                    e = this.isArrayLike(e) ? e : [];
                    for (var n = 0; n < e.length; n++) t(e[n], n)
                }, this.unique = function(e) {
                    return c.filter(e, function(t, n) {
                        return c.indexOf(e, t) === n
                    })
                }, this.forOwn = function(e, t) {
                    for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
                }, this.equalArrays = function(e, t) {
                    var n;
                    if (e.length !== t.length) return !1;
                    for (n = 0; n < e.length; ++n)
                        if (!c.contains(t, e[n])) return !1;
                    for (n = 0; n < t.length; ++n)
                        if (!c.contains(e, t[n])) return !1;
                    return !0
                }, this.exists = function(e) {
                    return void 0 !== e && null !== e
                }, this.reportError = function(e) {
                    c.exists(window.console) && c.exists(console.error) && c.exists(e) && console.error("ERROR: ", c.exists(e.message) ? e.message : e)
                }, this.getElementsByCssSelector = function(e) {
                    var t = [];
                    try {
                        t = document.querySelectorAll(e)
                    } catch (n) {
                        c.reportError(n)
                    }
                    return t
                };
                var u = 7;
                this.getElementsByXPath = function(e) {
                    var n, i = t.sevenTag.xpathProvider || t.document;
                    try {
                        i && i.evaluate && (n = i.evaluate(e, document, null, u, null))
                    } catch (r) {
                        c.reportError(r)
                    }
                    for (var o = [], a = 0; n && a < n.snapshotLength; a++) o.push(n.snapshotItem(a));
                    return o
                }, this.endsWith = function(e, t, n) {
                    (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                    var i = c.inString(e, t, n);
                    return i !== -1 && i === n
                }, this.inString = function(e, t, n) {
                    return e.indexOf(t, n ? n : 0)
                };
                var l = 500;
                return this.clone = function(t, i, r) {
                    function o(t) {
                        var i = e.$injector.has("Promise") && e.$injector.get("Promise").isPromise(t),
                            r = 9;
                        return !(!t || n(t) || i || t.nodeType === r || c.isFunction(t))
                    }
                    if (r = r || 0, i = void 0 !== i ? i : l, !t || "object" != typeof t || !o(t)) return t;
                    var a = {};
                    try {
                        a = t.constructor()
                    } catch (s) {}
                    if (r < i && r < l)
                        for (var u in t) a[u] = c.clone(t[u], i, r + 1);
                    return a
                }, this.getObjectByPath = function(e, t) {
                    if (null !== e && void 0 !== e) {
                        this.isString(t) && (t = t.replace(/\["(.*?)"\]/g, ".$1"), t.length > 0 && "." === t.charAt(0) && (t = t.substring(1)), t = t.split("."));
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (void 0 === e || void 0 === e[i]) return;
                            e = e[i]
                        }
                        return e
                    }
                }, this.trim = function(e) {
                    var t, n = /\s$/;
                    for (e = e.replace(/^\s\s*/, ""), t = e.length; n.test(e.charAt(--t)););
                    return e.slice(0, t + 1)
                }, this.guid = function() {
                    function e(e) {
                        var t = (Math.random().toString(16) + "000000000").substr(2, 8);
                        return e ? "-" + t.substr(0, 4) + "-" + t.substr(4, 4) : t
                    }
                    return e() + e(!0) + e(!0) + e()
                }, this.isIE = function(e) {
                    if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0) {
                        var t = 11;
                        return document.all && !window.XMLHttpRequest ? t = 6 : document.all && !document.querySelector ? t = 7 : document.all && !document.addEventListener ? t = 8 : document.all && !window.atob ? t = 9 : document.all && (t = 10), void 0 === e || e === t
                    }
                    return !1
                }, this.detectStyleSupport = function(e, t) {
                    var n = document.createElement("div");
                    try {
                        return n.style[e] = t, n.style[e] === t
                    } catch (i) {
                        return !1
                    }
                }, this.svgAsImg = function() {
                    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
                }, this.inlineSvg = function() {
                    var e = document.createElement("div");
                    return e.innerHTML = "<svg/>", "undefined" != typeof SVGRect && e.firstChild && "http://www.w3.org/2000/svg" === e.firstChild.namespaceURI
                }, this.filterParent = function(e, t) {
                    for (var n = 100, i = 0; e && i < n; i++) {
                        if (t(e)) return e;
                        e = e.parentElement
                    }
                }, this.filterParentByTagName = function(e, t) {
                    function n(e) {
                        if (!e || !e.tagName) return !1;
                        var n = e.tagName.toLowerCase();
                        return c.indexOf(t, n) !== -1
                    }
                    return t = c.isArray(t) ? t : [t], c.filterParent(e, n)
                }, this.setAttribute = function(e, t, n) {
                    c.exists(e) && c.exists(n) && (c.exists(e[t]) && "" !== e[t] || (e[t] = n, e.hasAttribute && !e.hasAttribute(t) && e.setAttribute && e.setAttribute(t, n)))
                }, this.getEvent = function(e) {
                    return e || t.event
                }, this.getEventTarget = function(e) {
                    return e.target || e.srcElement
                }, this.previousElementSibling = function(e) {
                    var t;
                    if ("previousElementSibling" in e) return e.previousElementSibling;
                    for (; t = e.previousSibling;)
                        if (1 === t.nodeType) return t;
                    return null
                }, this.nextElementSibling = function(e) {
                    var t;
                    if ("nextElementSibling" in e) return e.nextElementSibling;
                    for (; t = e.nextSibling;)
                        if (1 === t.nodeType) return t;
                    return null
                }, this.firstElementChild = function(e) {
                    var t, n = 0;
                    if ("firstElementChild" in e) return e.firstElementChild;
                    for (; t = e.childNodes[n++];)
                        if (1 === t.nodeType) return t;
                    return null
                }, this.lastElementChild = function(e) {
                    var t, n = 0;
                    if ("lastElementChild" in e) return e.lastElementChild;
                    for (; t = e.childNodes[e.childNodes.length - ++n];)
                        if (1 === t.nodeType) return t;
                    return null
                }, this.isDefaultPrevented = function(e) {
                    return e.defaultPrevented || e.returnValue === !1
                }, this.preventDefault = function(e) {
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                }, this.stopPropagation = function(e) {
                    e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
                }, this.addEventListener = function(e, t, n) {
                    e && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n)
                }, this.matchMultipleRegexPatterns = function(e, t) {
                    for (var n = e.length, i = 0; i < n; i++) {
                        var r = new RegExp(e[i]);
                        if (r.test(t)) return !0
                    }
                    return !1
                }, this.currentDate = function() {
                    return new Date
                }, this.addClass = function(e, t) {
                    var n = e.className.split(" ");
                    c.contains(n, t) || (n.push(t), e.className = c.trim(n.join(" ")))
                }, this.removeClass = function(e, t) {
                    var n = e.className.split(" "),
                        i = c.indexOf(n, t);
                    i !== -1 && (n.splice(i, 1), e.className = c.trim(n.join(" ")))
                }, this.toggleClass = function(e, t) {
                    var n = e.className.split(" "),
                        i = c.indexOf(n, t);
                    i !== -1 ? n.splice(i, 1) : n.push(t), e.className = c.trim(n.join(" "))
                }, this.hasClass = function(e, t) {
                    var n = e.className.split(" ");
                    return c.indexOf(n, t) !== -1
                }, this.startsWith = function(e, t, n) {
                    return e.substr(!n || n < 0 ? 0 : +n, t.length) === t
                }, this.getObjectKeys = function(e) {
                    var t = [];
                    return this.forOwn(e, function(e, n) {
                        t.push(n)
                    }), t
                }, this.getObjectValues = function(e) {
                    var t = [];
                    return this.forOwn(e, function(e) {
                        t.push(e)
                    }), t
                }, this.isUUID = function(e) {
                    return i.test(e)
                }, this.throttle = function(e, t, n) {
                    var i, r, o, a = null,
                        s = 0;
                    n || (n = {});
                    var c = function() {
                        s = n.leading === !1 ? 0 : (new Date).getTime(), a = null, o = e.apply(i, r), a || (i = r = null)
                    };
                    return function() {
                        var u = (new Date).getTime();
                        s || n.leading !== !1 || (s = u);
                        var l = t - (u - s);
                        return i = this, r = arguments, l <= 0 || l > t ? (a && (clearTimeout(a), a = null), s = u, o = e.apply(i, r), a || (i = r = null)) : a || n.trailing === !1 || (a = setTimeout(c, l)), o
                    }
                }, this
            };
        r.$inject = ["$window"], e.service(t, r)
    }(window.sevenTag, "$utils"),
    function(e, t, n) {
        function i(e) {
            var t = {};
            return this.on = function(n, i) {
                e.isArrayLike(t[n]) || (t[n] = []), t[n].push(i)
            }, this.removeListener = function(n, i) {
                var r;
                e.isArrayLike(t[n]) && (r = e.indexOf(t[n], i), r > -1 && t[n].splice(r, 1))
            }, this.emit = function(n) {
                var i, r, o, a = [].slice.call(arguments, 1);
                if (e.isArrayLike(t[n]))
                    for (r = t[n].slice(), o = r.length, i = 0; i < o; i++) r[i].apply(this, a)
            }, this
        }
        i.$inject = ["$utils"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "Emitter", "$emitter"),
    function(e, t, n) {
        function i(e, t, n, i) {
            return this.expose = function(r) {
                e[t] = e[t] || {}, i.forEach(n, function(n) {
                    e[t][n] = e[t][n] || {}, e[t][n].api = e[t][n].api || function() {
                        var e = [].slice.call(arguments, 0),
                            i = e;
                        "string" == typeof e[0] && (i = {
                            event: t + "." + n + ":" + e[0],
                            parameters: [].slice.call(arguments, 1)
                        }), r.push(i)
                    }
                })
            }, this
        }
        e.provider(t, function() {
            return i
        });
        var r = function(e, t, n, i, r) {
            return new e(t, n, i, r)
        };
        r.$inject = ["ExternalApiExposer", "$window", "$externalApiStackNamespace", "$externalApiProductsNamespaces", "$utils"], e.service(n, r)
    }(window.sevenTag, "ExternalApiExposer", "$externalApiExposer"),
    function(e, t, n) {
        function i(e, t, n) {
            return this.append = function(i, r) {
                var o = e.getElementsByTagName("head")[0],
                    a = e.querySelector("style#" + i);
                a || (a = e.createElement("style"), t.setAttribute(a, "id", i), t.setAttribute(a, "nonce", n)), r = r.replace(/<style[^>]*>/gim, "").replace(/<\/style\s*>/gim, ""), o.appendChild(a), t.exists(a.styleSheet) && t.exists(a.styleSheet.cssText) ? a.styleSheet.cssText += "\n" + r : a.appendChild(e.createTextNode(r))
            }, this
        }
        i.$inject = ["$document", "$utils", "NONCE_TOKEN"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "StyleAppender", "$styleAppender"),
    function(e, t, n) {
        function i(e, t) {
            var n = "ppms_spinner_styles",
                i = ".ppms-spinner {align-content: initial;align-items: initial;align-self: initial;animation: initial;appearance: initial;backface-visibility: initial;background-blend-mode: initial;background: initial;binding: initial;block-size: initial;border-block-end: initial;border-block-start: initial;border-collapse: initial;border-inline-end: initial;border-inline-start: initial;border-radius: initial;border-spacing: initial;border: initial;bottom: initial;box-align: initial;box-decoration-break: initial;box-direction: initial;box-flex: initial;box-ordinal-group: initial;box-orient: initial;box-pack: initial;box-shadow: initial;box-sizing: initial;caption-side: initial;clear: initial;color-adjust: initial;color-interpolation-filters: initial;color-interpolation: initial;color: initial;column-fill: initial;column-gap: initial;column-rule: initial;columns: initial;content: initial;control-character-visibility: initial;counter-increment: initial;counter-reset: initial;cursor: default;display: block;dominant-baseline: initial;empty-cells: initial;fill-opacity: initial;fill-rule: initial;fill: initial;filter: initial;flex-flow: initial;flex: initial;float-edge: initial;float: initial;flood-color: initial;flood-opacity: initial;font-family: initial;font-feature-settings: initial;font-kerning: initial;font-language-override: initial;font-size-adjust: initial;font-size: initial;font-stretch: initial;font-style: initial;font-synthesis: initial;font-variant: initial;font-weight: initial;force-broken-image-icon: initial;height: initial;hyphens: initial;image-orientation: initial;image-region: initial;image-rendering: initial;ime-mode: initial;inline-size: initial;isolation: initial;justify-content: initial;justify-items: initial;justify-self: initial;left: initial;letter-spacing: initial;lighting-color: initial;line-height: initial;list-style: outside;margin-block-end: initial;margin-block-start: initial;margin-inline-end: initial;margin-inline-start: initial;margin: initial;marker-offset: initial;marker: initial;mask-type: initial;mask: initial;max-block-size: initial;max-height: initial;max-inline-size: initial;max-width: initial;min-block-size: initial;min-height: initial;min-inline-size: initial;min-width: initial;mix-blend-mode: initial;object-fit: initial;object-position: initial;offset-block-end: initial;offset-block-start: initial;offset-inline-end: initial;offset-inline-start: initial;opacity: initial;order: initial;orient: initial;outline-offset: initial;outline-radius: initial;outline: initial;overflow: initial;padding-block-end: initial;padding-block-start: initial;padding-inline-end: initial;padding-inline-start: initial;padding: initial;page-break-after: initial;page-break-before: initial;page-break-inside: initial;paint-order: initial;perspective-origin: initial;perspective: initial;pointer-events: initial;position: initial;quotes: initial;resize: initial;right: initial;ruby-align: initial;ruby-position: initial;scroll-behavior: initial;scroll-snap-coordinate: initial;scroll-snap-destination: initial;scroll-snap-points-x: initial;scroll-snap-points-y: initial;scroll-snap-type: initial;shape-rendering: initial;stack-sizing: initial;stop-color: initial;stop-opacity: initial;stroke-dasharray: initial;stroke-dashoffset: initial;stroke-linecap: initial;stroke-linejoin: initial;stroke-miterlimit: initial;stroke-opacity: initial;stroke-width: initial;stroke: initial;tab-size: initial;table-layout: initial;text-align-last: initial;text-align: initial;text-anchor: initial;text-combine-upright: initial;text-decoration: initial;text-emphasis-position: initial;text-emphasis: initial;text-indent: initial;text-orientation: initial;text-overflow: initial;text-rendering: initial;text-shadow: initial;text-size-adjust: initial;text-transform: initial;top: initial;transform-origin: initial;transform-style: initial;transform: initial;transition: initial;user-focus: initial;user-input: initial;user-modify: initial;user-select: initial;vector-effect: initial;vertical-align: initial;visibility: initial;white-space: initial;width: initial;will-change: initial;window-dragging: initial;word-break: initial;word-spacing: initial;word-wrap: initial;writing-mode: initial;z-index: initial;position: fixed;top: 50%;left: 50%;animation: ppms-spinner-rotate 0.8s infinite linear;border: 2px solid #107ef1;border-right-color: transparent;border-radius: 50%;z-index: 10100;}.ie8.ppms-spinner {border-right-color: #107ef1;text-align: center;font-weight: bold;background: white;}.ppms-spinner--small {height: 16px;width: 16px;margin-left: -8px}.ppms-spinner--medium {height: 32px;width: 32px;border-width: 3px;margin-left: -16px}.ppms-spinner--large {height: 64px;width: 64px;border-width: 4px;margin-left: 32px}@keyframes ppms-spinner-rotate {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}";
            return this.size = function() {
                return {
                    SMALL: "ppms-spinner--small",
                    MEDIUM: "ppms-spinner--medium",
                    LARGE: "ppms-spinner--large"
                }
            }, this.append = function() {
                t.append(n, i)
            }, this.remove = function() {
                var t = e.getElementById(n);
                t && t.parentNode.removeChild(t)
            }, this
        }
        i.$inject = ["$document", "$styleAppender"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "SpinnerStyles", "$spinnerStyles"),
    function(e, t, n) {
        function i(e, t, n) {
            function i(n) {
                var i;
                t.isIE(8) && (i = e.createTextNode(c.text[c.textIndex]), n.setAttribute("class", n.getAttribute("class") + " ie8"), n.appendChild(i), c.timer = setInterval(function() {
                    c.textIndex = ++c.textIndex % 3, i.data = c.text[c.textIndex]
                }, 300))
            }

            function r() {
                c.timer && clearInterval(c.timer)
            }

            function o(e) {
                var t = "ppms-spinner";
                return e = e || n.size().MEDIUM, t + " " + e
            }
            var a = "ppms_spinner",
                s = 0,
                c = {
                    timer: null,
                    text: [".", "..", "..."],
                    textIndex: 2
                };
            return this.size = function() {
                return n.size()
            }, this.show = function(t) {
                var r = document.getElementById(a);
                ++s, r || (n.append(), r = document.createElement("div"), r.setAttribute("id", a), r.setAttribute("class", o(t)), i(r), e.body.appendChild(r))
            }, this.hide = function() {
                var e = document.getElementById(a);
                e && 0 === --s && (r(), e.parentNode.removeChild(e), n.remove())
            }, this
        }
        i.$inject = ["$document", "$utils", "$spinnerStyles"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "Spinner", "$spinner"),
    function(e, t) {
        var n = function(e) {
            return this.find = function(t) {
                return 0 === t.indexOf("#") && (t = t.substring(1)), e.getElementById(t)
            }, this
        };
        n.$inject = ["$document"], e.service(t, n)
    }(window.sevenTag, "$elementFinder"),
    function(e, t, n) {
        var i = function(e, t) {
            function n(e) {
                return "function" == typeof e || "object" == typeof e && null !== e
            }

            function i(e) {
                return "function" == typeof e
            }

            function r(e) {
                K = e
            }

            function o(e) {
                z = e
            }

            function a() {
                return function() {
                    return process.nextTick(f)
                }
            }

            function s() {
                return "undefined" != typeof G ? function() {
                    G(f)
                } : l()
            }

            function c() {
                var e = 0,
                    n = new X(f),
                    i = t.createTextNode("");
                return n.observe(i, {
                        characterData: !0
                    }),
                    function() {
                        i.data = e = ++e % 2
                    }
            }

            function u() {
                var e = new MessageChannel;
                return e.port1.onmessage = f,
                    function() {
                        return e.port2.postMessage(0)
                    }
            }

            function l() {
                var e = setTimeout;
                return function() {
                    return e(f, 1)
                }
            }

            function f() {
                for (var e = 0; e < q; e += 2) {
                    var t = ee[e],
                        n = ee[e + 1];
                    t(n), ee[e] = void 0, ee[e + 1] = void 0
                }
                q = 0
            }

            function d() {
                try {
                    var e = require,
                        t = e("vertx");
                    return G = t.runOnLoop || t.runOnContext, s()
                } catch (n) {
                    return l()
                }
            }

            function p(e, t) {
                var n = arguments,
                    i = this,
                    r = new this.constructor(h);
                void 0 === r[ne] && P(r);
                var o = i._state;
                return o ? ! function() {
                    var e = n[o - 1];
                    z(function() {
                        return k(o, r, e, i._result)
                    })
                }() : N(i, r, e, t), r
            }

            function v(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(h);
                return $(n, e), n
            }

            function h() {}

            function g() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function m() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function y(e) {
                try {
                    return e.then
                } catch (t) {
                    return ae.error = t, ae
                }
            }

            function w(e, t, n, i) {
                try {
                    e.call(t, n, i)
                } catch (r) {
                    return r
                }
            }

            function E(e, t, n) {
                z(function(e) {
                    var i = !1,
                        r = w(n, t, function(n) {
                            i || (i = !0, t !== n ? $(e, n) : b(e, n))
                        }, function(t) {
                            i || (i = !0, S(e, t))
                        }, "Settle: " + (e._label || " unknown promise"));
                    !i && r && (i = !0, S(e, r))
                }, e)
            }

            function _(e, t) {
                t._state === re ? b(e, t._result) : t._state === oe ? S(e, t._result) : N(t, void 0, function(t) {
                    return $(e, t)
                }, function(t) {
                    return S(e, t)
                })
            }

            function C(e, t, n) {
                t.constructor === e.constructor && n === p && t.constructor.resolve === v ? _(e, t) : n === ae ? S(e, ae.error) : void 0 === n ? b(e, t) : i(n) ? E(e, t, n) : b(e, t)
            }

            function $(e, t) {
                e === t ? S(e, g()) : n(t) ? C(e, t, y(t)) : b(e, t)
            }

            function T(e) {
                e._onerror && e._onerror(e._result), A(e)
            }

            function b(e, t) {
                e._state === ie && (e._result = t, e._state = re, 0 !== e._subscribers.length && z(A, e))
            }

            function S(e, t) {
                e._state === ie && (e._state = oe, e._result = t, z(T, e))
            }

            function N(e, t, n, i) {
                var r = e._subscribers,
                    o = r.length;
                e._onerror = null, r[o] = t, r[o + re] = n, r[o + oe] = i, 0 === o && e._state && z(A, e)
            }

            function A(e) {
                var t = e._subscribers,
                    n = e._state;
                if (0 !== t.length) {
                    for (var i = void 0, r = void 0, o = e._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + n], i ? k(n, i, r, o) : r(o);
                    e._subscribers.length = 0
                }
            }

            function O() {
                this.error = null
            }

            function I(e, t) {
                try {
                    return e(t)
                } catch (n) {
                    return se.error = n, se
                }
            }

            function k(e, t, n, r) {
                var o = i(n),
                    a = void 0,
                    s = void 0,
                    c = void 0,
                    u = void 0;
                if (o) {
                    if (a = I(n, r), a === se ? (u = !0, s = a.error, a = null) : c = !0, t === a) return void S(t, m())
                } else a = r, c = !0;
                t._state !== ie || (o && c ? $(t, a) : u ? S(t, s) : e === re ? b(t, a) : e === oe && S(t, a))
            }

            function x(e, t) {
                try {
                    t(function(t) {
                        $(e, t)
                    }, function(t) {
                        S(e, t)
                    })
                } catch (n) {
                    S(e, n)
                }
            }

            function L() {
                return ce++
            }

            function P(e) {
                e[ne] = ce++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function D(e, t) {
                this._instanceConstructor = e, this.promise = new e(h), this.promise[ne] || P(this.promise), W(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? b(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && b(this.promise, this._result))) : S(this.promise, R())
            }

            function R() {
                return new Error("Array Methods must be provided an Array")
            }

            function j(e) {
                return new D(this, e).promise
            }

            function V(e) {
                var t = this;
                return new t(W(e) ? function(n, i) {
                    for (var r = e.length, o = 0; o < r; o++) t.resolve(e[o]).then(n, i)
                } : function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }

            function M(e) {
                var t = this,
                    n = new t(h);
                return S(n, e), n
            }

            function F() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function H() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function U(e) {
                this[ne] = L(), this._result = this._state = void 0, this._subscribers = [], h !== e && ("function" != typeof e && F(), this instanceof U ? x(this, e) : H())
            }
            var B = void 0;
            B = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var W = B,
                q = 0,
                G = void 0,
                K = void 0,
                z = function(e, t) {
                    ee[q] = e, ee[q + 1] = t, q += 2, 2 === q && (K ? K(f) : te())
                },
                Y = "undefined" != typeof e ? e : void 0,
                J = Y || {},
                X = J.MutationObserver || J.WebKitMutationObserver,
                Q = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                ee = new Array(1e3),
                te = void 0;
            te = Q ? a() : X ? c() : Z ? u() : void 0 === Y && "function" == typeof require ? d() : l();
            var ne = Math.random().toString(36).substring(16),
                ie = void 0,
                re = 1,
                oe = 2,
                ae = new O,
                se = new O,
                ce = 0;
            return D.prototype._enumerate = function() {
                for (var e = this.length, t = this._input, n = 0; this._state === ie && n < e; n++) this._eachEntry(t[n], n)
            }, D.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor,
                    i = n.resolve;
                if (i === v) {
                    var r = y(e);
                    if (r === p && e._state !== ie) this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof r) this._remaining--, this._result[t] = e;
                    else if (n === U) {
                        var o = new n(h);
                        C(o, e, r), this._willSettleAt(o, t)
                    } else this._willSettleAt(new n(function(t) {
                        return t(e)
                    }), t)
                } else this._willSettleAt(i(e), t)
            }, D.prototype._settledAt = function(e, t, n) {
                var i = this.promise;
                i._state === ie && (this._remaining--, e === oe ? S(i, n) : this._result[t] = n), 0 === this._remaining && b(i, this._result)
            }, D.prototype._willSettleAt = function(e, t) {
                var n = this;
                N(e, void 0, function(e) {
                    return n._settledAt(re, t, e)
                }, function(e) {
                    return n._settledAt(oe, t, e)
                })
            }, U.all = j, U.race = V, U.resolve = v, U.reject = M, U._setScheduler = r, U._setAsap = o, U._asap = z, U.prototype = {
                constructor: U,
                then: p,
                "catch": function(e) {
                    return this.then(null, e)
                }
            }, U.Promise = U, U.isPromise = function(e) {
                return !!e && "object" == typeof e && (e instanceof U || "function" == typeof e.then)
            }, U
        };
        i.$inject = ["$window", "$document"], e.provider(t, i), e.provider(n, function() {
            return i
        })
    }(window.sevenTag, "Promise", "PromiseProvider"),
    function(e, t) {
        var n = function() {
            function e(e) {
                return e.substr(e.indexOf("?") + 1)
            }

            function t(e) {
                return e.split("&")
            }
            return this.getDomain = function(e) {
                e = e.replace(/(https?:\/\/)?(\/\/)?/i, "");
                var t = e.indexOf(":");
                return e = e.substring(0, t !== -1 ? t : e.length), e.indexOf("/") !== -1 ? e.split("/")[0] : e
            }, this.getParam = function(n, i) {
                var r, o = e(n);
                if (!o) return "";
                for (var a = t(o), s = 0; s < a.length; s++)
                    if (r = a[s].split("="), r[0] === i) return r[1];
                return ""
            }, this
        };
        e.service(t, n)
    }(window.sevenTag, "$urlDecoder"),
    function(e, t) {
        function n(n) {
            var i = n.ppmsWebStorage,
                r = n.ppmsWebStorageConfiguration || void 0;
            return e[t] = e[t] || new i(r), e[t]
        }
        n.$inject = ["$window"], e.service(t, n)
    }(window.sevenTag, "$webStorage"),
    function(e, t, n) {
        var i = function(e, t, n, i) {
            function r() {
                for (var e = n.cookie ? n.cookie.split("; ") : [], t = [], i = 0; i < e.length; i++) {
                    var r = e[i].split(/\=(.*)/, 2);
                    if (2 === r.length) {
                        var s = o(r),
                            c = a(r);
                        t.push({
                            key: s,
                            value: c
                        })
                    }
                }
                return t
            }

            function o(e) {
                return e[0].replace(/^\s+|\s+$/gm, "")
            }

            function a(e) {
                var t = e[1];
                return t && '"' === t.charAt(0) && (t = t.slice(1, -1)), decodeURIComponent(t)
            }
            return this.add = function(n, r, o, a, s) {
                t.set(n, e.isFunction(r) ? r() : r, {
                    path: a,
                    maxAge: o,
                    domain: s,
                    sameSite: "lax",
                    secure: i
                })
            }, this.get = function(e) {
                return t.get(e) || void 0
            }, this.getAllByRegex = function(t) {
                var n = r(),
                    i = [];
                return e.forEach(n, function(e) {
                    t.test(e.key) && i.push(e.value)
                }), i
            }, this.getOneByRegex = function(e) {
                var t = this.getAllByRegex(e);
                return t.length > 0 ? t[0] : void 0
            }, this.getCookieString = function() {
                var t = r(),
                    n = [];
                return e.forEach(t, function(e) {
                    n.push(e.key + "=" + e.value)
                }), n.join("; ")
            }, this.remove = function(e) {
                t.remove(e)
            }, this
        };
        i.$inject = ["$utils", "$webStorage", "$document", "$useSecureCookies"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "Cookie", "$cookie"),
    function(e, t, n) {
        function i(e, t, n) {
            var i = [];
            return this.addListener = function(e) {
                i.push(e)
            }, this.setRenewableCookie = function(n, i, r) {
                r = r || t, e.add(n, i, r), this.addListener(function() {
                    e.add.call(e, n, i, r)
                })
            }, this.extend = function() {
                n.timeout(function() {
                    for (var e = i.length, t = 0; t < e; t++) {
                        var n = i[t];
                        n()
                    }
                })
            }, this
        }
        e.provider(t, function() {
            return i
        });
        var r = function(e, t, n, i) {
            return new e(t, n, i)
        };
        r.$inject = ["Session", "$cookie", "SESSION_LENGTH", "$utils"], e.service(n, r)
    }(window.sevenTag, "Session", "$session"),
    function(e, t) {
        function n() {
            return this.POST = "POST", this.GET = "GET", this
        }
        n.$inject = [], e.service(t, n)
    }(window.sevenTag, "$httpMethod"),
    function(e, t) {
        function n(e, t) {
            return this.createRequest = function(e, n, i, r) {
                if (void 0 === n.url) throw new Error("Url not pass to $http config");
                return e.open(n.method, n.url), void 0 !== n.timeout && (e.timeout = n.timeout), e.onload = function() {
                    try {
                        return i(t.parse(this.responseText))
                    } catch (e) {
                        return r(e)
                    }
                }, e.onerror = function() {
                    r("unknown error")
                }, e.ontimeout = function() {
                    r("timeout")
                }, e
            }, this
        }
        n.$inject = ["$httpMethod", "$json"], e.service(t, n)
    }(window.sevenTag, "$httpXDomainRequestStrategy"),
    function(e, t) {
        function n(e, t) {
            return this.createRequest = function(e, n, i, r) {
                if (void 0 === n.url) throw new Error("Url not pass to $http config");
                if (e.open(n.method, n.url, !0), void 0 !== n.timeout && (e.timeout = n.timeout), e.onreadystatechange = function() {
                        try {
                            if (4 !== this.readyState) return;
                            200 === this.status ? i(t.parse(this.response)) : 204 === this.status ? i() : (this.status < 200 || this.status >= 400) && r(this.status + " " + this.statusText)
                        } catch (e) {
                            r(e)
                        }
                    }, n.withCredentials === !0 && "withCredentials" in e && (e.withCredentials = !0), n.headers && n.headers.length)
                    for (var o = 0; o < n.headers.length; ++o) e.setRequestHeader(n.headers[o][0], n.headers[o][1]);
                return e.onerror = function() {
                    r(this.status + " " + this.statusText)
                }, e.ontimeout = function() {
                    r(this.status + " " + this.statusText)
                }, e
            }, this
        }
        n.$inject = ["$httpMethod", "$json"], e.service(t, n)
    }(window.sevenTag, "$httpXMLHttpRequestStrategy"),
    function(e, t) {
        function n(e, t, n) {
            return this.createHttpRequest = function(i, r, o) {
                if ("undefined" != typeof e.XMLHttpRequest && "withCredentials" in new e.XMLHttpRequest) return n.createRequest(new e.XMLHttpRequest, i, r, o);
                if ("undefined" != typeof e.XDomainRequest) return t.createRequest(new e.XDomainRequest, i, r, o);
                throw new Error("Could not create XMLHttpRequest object")
            }, this
        }
        n.$inject = ["$window", "$httpXDomainRequestStrategy", "$httpXMLHttpRequestStrategy"], e.service(t, n)
    }(window.sevenTag, "$httpRequestFactory"),
    function(e, t) {
        var n = function(e, t, n, i) {
            return this.sendRequest = function(r, o, a) {
                var s = r.method,
                    c = i.stringify(r.data || {});
                e.setTimeout(function() {
                    t.createHttpRequest(r, o, a).send(s === n.POST ? c : void 0)
                }, 0)
            }, this.method = function() {
                return n
            }, this
        };
        n.$inject = ["$window", "$httpRequestFactory", "$httpMethod", "$json"], e.service(t, n)
    }(window.sevenTag, "$http"),
    function(e, t, n) {
        function i(e) {
            return this.match = function(t, n) {
                var i = {
                    normalized: t,
                    isWildcard: !1,
                    pattern: t
                };
                return e.forEach(n, function(n) {
                    var r = e.startsWith(n, "*."),
                        o = r ? n.substring(2, n.length) : n;
                    r && e.endsWith(t, o) && i.normalized.length > o.length ? i = {
                        normalized: o,
                        isWildcard: r,
                        pattern: n
                    } : i.isWildcard || t !== o || (i = {
                        normalized: o,
                        isWildcard: r,
                        pattern: n
                    })
                }), i
            }, this
        }
        i.$inject = ["$utils"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "PrivacyComplianceDomainMatcher", "$privacyComplianceDomainMatcher"),
    function(e, t, n) {
        function i(e, t, n) {
            return this.resolve = function() {
                return n.match(e, t)
            }, this
        }
        i.$inject = ["$hostname", "$privacyComplianceDomains", "$privacyComplianceDomainMatcher"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "PrivacyComplianceDomainResolver", "$privacyComplianceDomainResolver"),
    function(e, t, n, i) {
        function r(e, t) {
            return e.replace("%websiteId%", t)
        }
        e.provider(t, function() {
            return r
        });
        var o = function(e, t, n) {
            return n(e, t)
        };
        o.$inject = ["$privacyComplianceCookieNamePattern", "$websiteId", "byPatternCookieName"];
        var a = function(e, t, n) {
            return n(e, t)
        };
        a.$inject = ["$privacyBarCookieNamePattern", "$websiteId", "byPatternCookieName"], e.provider(n, o), e.provider(i, a)
    }(window.sevenTag, "byPatternCookieName", "$privacyComplianceCookieName", "$privacyBarCookieName"),
    function(e, t) {
        function n(e, t, i, r) {
            var o = e,
                a = t,
                s = i,
                c = r;
            return this.isAllowed = function() {
                return a === n.status().ALLOWED
            }, this.isDenied = function() {
                return a === n.status().DENIED
            }, this.isUnknown = function() {
                return a === n.status().UNKNOWN
            }, this.id = function() {
                return o
            }, this.status = function() {
                return a
            }, this.updatedAt = function() {
                return s
            }, this.historyId = function() {
                return c
            }, this.asJson = function() {
                return {
                    status: a,
                    historyId: c,
                    updatedAt: s.toJSON()
                }
            }, this
        }
        n.status = function() {
            return {
                ALLOWED: 1,
                DENIED: 0,
                UNKNOWN: -1
            }
        }, n.fromJson = function(e, t) {
            return new n(e, t.status, new Date(t.updatedAt), t.historyId)
        }, e.provider(t, function() {
            return n
        })
    }(window.sevenTag, "PrivacyComplianceConsent"),
    function(e, t, n) {
        function i(e) {
            var t = "intro";
            return this.getConsentsWithoutIntro = function(n) {
                return e.filter(n, function(e) {
                    return e.id() !== t
                })
            }, this
        }
        i.$inject = ["$utils"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "PrivacyComplianceConsentFilter", "$privacyComplianceConsentFilter"),
    function(e, t, n) {
        function i(e, t, n, i, r, o, a, s) {
            var c = "/",
                u = "consents",
                l = "visitorId",
                f = "domain",
                d = "staleCheckpoint",
                p = "language",
                v = function(t) {
                    var n, r, a = e.getAllByRegex(new RegExp(t)),
                        s = o.resolve();
                    for (r = 0; r < a.length; r++) try {
                        if (n = i.parse(a[r]), "undefined" != typeof n.domain && n.domain.pattern === s.pattern) return n
                    } catch (c) {}
                    return {}
                },
                h = function() {
                    return v(t)
                };
            return this.getConsents = function() {
                var e = h();
                return "undefined" == typeof e[u] && (e[u] = {}), e[u]
            }, this.getVisitorId = function() {
                var e = h();
                return e[l]
            }, this.getOrGenerateVisitorId = function() {
                var e = this.getVisitorId();
                return "undefined" == typeof e && (e = r.guid(), this.set(this.getConsents(), e)), e
            }, this.set = function(n, r) {
                var s = h(),
                    d = o.resolve(),
                    p = d.isWildcard ? d.normalized : void 0;
                s[u] = n, s[l] = r, s[f] = d;
                try {
                    e.add(t, i.stringify(s), a, c, p)
                } catch (v) {}
            }, this.renew = function() {
                var n = h(),
                    r = o.resolve(),
                    s = r.isWildcard ? r.normalized : void 0;
                n[f] = r;
                try {
                    e.add(t, i.stringify(n), a, c, s)
                } catch (u) {}
            }, this.get = function() {
                var e = h();
                return "undefined" == typeof e[u] && (e[u] = {}), e
            }, this.isBarCookie = function() {
                var e = v(n);
                return "undefined" != typeof e.status && e.status === !0
            }, this.setBarCookie = function() {
                var t = o.resolve(),
                    r = t.isWildcard ? t.normalized : void 0,
                    a = {
                        status: !0
                    };
                a[f] = t;
                try {
                    e.add(n, i.stringify(a), void 0, c, r)
                } catch (s) {}
            }, this.isStale = function() {
                var e, t;
                return s !== -1 && (e = h(), t = e[d] || (new Date).toJSON(), new Date(t).getTime() + 1e3 * s < (new Date).getTime())
            }, this.updateStaleCheckpoint = function() {
                var n = h(),
                    r = o.resolve(),
                    s = r.isWildcard ? r.normalized : void 0;
                n[f] = r, n[d] = (new Date).toJSON();
                try {
                    e.add(t, i.stringify(n), a, c, s)
                } catch (u) {}
            }, this.getLanguage = function() {
                var e;
                return e = h(), e[p]
            }, this.setLanguage = function(n) {
                var r = h(),
                    s = o.resolve(),
                    u = s.isWildcard ? s.normalized : void 0;
                r[f] = s, r[p] = n;
                try {
                    e.add(t, i.stringify(r), a, c, u)
                } catch (l) {}
            }, this
        }
        e.provider(t, function() {
            return i
        });
        var r = function(e, t, n, i, r, o, a, s, c) {
            return new c(e, t, n, i, r, o, a, s)
        };
        r.$inject = ["$cookie", "$privacyComplianceCookieName", "$privacyBarCookieName", "$json", "$utils", "$privacyComplianceDomainResolver", "$privacyComplianceCookieExpirationPeriod", "$privacyComplianceCookieStalePeriod", "ComplianceConsentCookieStorage"], e.service(n, r)
    }(window.sevenTag, "ComplianceConsentCookieStorage", "$privacyComplianceConsentCookieStorage"),
    function(e, t, n, i) {
        function r(e, t, n) {
            function i(n) {
                var i, r = [],
                    o = e.getConsents();
                for (i in o) n(i, o[i].status) && r.push(t.fromJson(i, o[i]));
                return r
            }
            var r = "consents",
                o = "visitorId",
                a = {};
            return this.set = function(t) {
                var i, s, c = e.get(),
                    u = c[o],
                    l = c[r] || {};
                for (a = n.clone(l), i = 0; i < t.length; ++i) s = t[i], l[s.id()] = s.asJson();
                e.set(l, u)
            }, this.setNewConsents = function(n, i) {
                var a, s, c, u = e.get(),
                    l = u[o],
                    f = u[r] || {},
                    d = new Date;
                for (a = 0; a < n.length; ++a) c = n[a], s = new t(c, t.status().UNKNOWN, d, i[c]), f[c] = s.asJson();
                e.set(f, l)
            }, this.getVisitorId = function() {
                return e.getVisitorId()
            }, this.getOrGenerateVisitorId = function() {
                return e.getOrGenerateVisitorId()
            }, this.all = function() {
                var n = [],
                    i = e.getConsents();
                for (var r in i) n.push(t.fromJson(r, i[r]));
                return n
            }, this.allPrevious = function() {
                var e = [],
                    n = a;
                for (var i in n) e.push(t.fromJson(i, n[i]));
                return e
            }, this.findById = function(n) {
                var i = e.getConsents();
                return !(!i || !i.hasOwnProperty(n)) && t.fromJson(n, i[n])
            }, this.renewCookie = function() {
                e.renew()
            }, this.hasNotDecided = function() {
                var n, i = e.getConsents();
                for (n in i)
                    if (i[n].status === t.status().UNKNOWN) return !0;
                return !1
            }, this.getNotDecided = function() {
                return i(function(e, n) {
                    return n === t.status().UNKNOWN
                })
            }, this.getNotAgreed = function() {
                return i(function(e, n) {
                    return n !== t.status().ALLOWED
                })
            }, this.isBarCookie = function() {
                return e.isBarCookie()
            }, this.setBarCookie = function() {
                e.setBarCookie()
            }, this.isStale = function() {
                return e.isStale()
            }, this.updateStaleCheckpoint = function() {
                e.updateStaleCheckpoint()
            }, this.getLanguage = function() {
                return e.getLanguage()
            }, this.setLanguage = function(t) {
                e.setLanguage(t)
            }, this
        }
        e.provider(n, function() {
            return r
        });
        var o = function(e, t, n, i) {
            return new n(e, t, i)
        };
        o.$inject = ["$privacyComplianceConsentCookieStorage", "PrivacyComplianceConsent", "ComplianceConsentRegistry", "$utils"], e.service(t, o), e[t] = e.$injector.get(t), e[i] = e.$injector.get(i)
    }(window.sevenTag, "$privacyComplianceConsentRegistry", "ComplianceConsentRegistry", "$privacyComplianceEnabled"),
    function(e, t, n) {
        function i(e, t, n, i, r) {
            function o() {
                var e, t, n;
                if (0 === d.length) return null;
                for (e = a(), n = 0; n < e.length; ++n) {
                    if (t = e[n], t in i) return t;
                    for (var r in i)
                        if (0 === r.indexOf(t)) return r
                }
                return d[0]
            }

            function a() {
                var e = s();
                return "undefined" == typeof f && (f = t.filter(t.unique(e), function(e) {
                    return e && e.length
                })), f
            }

            function s() {
                var e, n = u(),
                    i = [];
                return t.forEach(n, function(t) {
                    if (i.push(t.replace("-", "_")), e = l(t)) {
                        var r = c(n, e),
                            o = r[r.length - 1];
                        t === o && i.push(e)
                    }
                }), i.push(r), i
            }

            function c(e, n) {
                var i = [];
                return t.forEach(e, function(e) {
                    0 === e.indexOf(n) && i.push(e)
                }), i
            }

            function u() {
                return e.navigator.languages ? e.navigator.languages : e.navigator.userLanguage ? [e.navigator.userLanguage] : [e.navigator.language]
            }

            function l(e) {
                var t;
                return e && e !== (t = e.substring(0, 2)) ? t : null
            }
            var f, d = t.getObjectKeys(i);
            return this.getLanguage = function() {
                var e = n.getLanguage();
                return e && t.contains(d, e) ? e : o()
            }, this.setLanguage = function(e) {
                return n.setLanguage(e)
            }, this
        }
        i.$inject = ["$window", "$utils", "$privacyComplianceConsentRegistry", "$privacyComplianceLanguages", "$privacyComplianceDefaultLanguage"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "PrivacyComplianceLanguage", "$privacyComplianceLanguage"),
    function(e, t, n) {
        function i(e, t, n, i) {
            function r() {
                return e.sevenTag && e.sevenTag.privacy ? i.clone(e.sevenTag.privacy) : e.sevenTagSync && e.sevenTagSync.privacy ? i.clone(e.sevenTagSync.privacy) : {}
            }
            return function() {
                var e = r(),
                    t = n.getLanguage();
                return e.enabled ? e.configuration && e.configuration.templates && e.configuration.templates[t] && (e.configuration.templates = e.configuration.templates[t]) : delete e.configuration, e
            }
        }
        i.$inject = ["$window", "$json", "$privacyComplianceLanguage", "$utils"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "PrivacyComplianceConfiguration", "$privacyComplianceConfiguration"),
    function(e, t, n) {
        var i = function(e) {
            function t(e, t) {
                var i, r, o = [];
                for (i = 0; i < e.length; ++i) r = e[i].triggers, o = o.concat(n(r, t));
                return o
            }

            function n(e, t) {
                var n, r, o = [];
                for (n = 0; n < e.length; ++n) r = e[n].conditions, o = o.concat(i(r, t));
                return o
            }

            function i(e, t) {
                var n, i, o, a = [];
                for (n = 0; n < e.length; ++n) i = e[n], o = r(i.variable, i.action, t), null !== o && a.push(o);
                return a
            }

            function r(t, n, i) {
                var r = null;
                return e.forEach(i, function(e) {
                    e.name === t && (e.action && e.action !== n || (r = e.key))
                }), r
            }
            return this.getListOfUsedVariables = function(n, i) {
                var r = [];
                return void 0 !== n && (r = t(n, i)), e.unique(r)
            }, this
        };
        i.$inject = ["$utils"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "TagTreeVariableScanner", "$tagTreeVariableScanner"),
    function(e, t, n) {
        var i = function(e, t, n, i, r) {
            function o() {
                var o = e.sevenTagSync ? e.sevenTagSync.tagTree : void 0,
                    s = e.sevenTag ? e.sevenTag.tagTree : void 0,
                    c = "undefined" == typeof i.app_cookies_enabled || i.app_cookies_enabled;
                if (!n().enabled && i.cookies_enabled && c) t.forEach(d, function(e) {
                    a.push(e.key)
                });
                else {
                    var u = r.getListOfUsedVariables(o, d),
                        l = r.getListOfUsedVariables(s, d);
                    a = t.unique(u.concat(l))
                }
            }
            var a = [],
                s = "first_view",
                c = "returning_visitor",
                u = "traffic_source",
                l = "multiplicity",
                f = "external_referrer",
                d = [{
                    key: s,
                    name: "Returning Visitor",
                    action: "is_false"
                }, {
                    key: c,
                    name: "Returning Visitor",
                    action: "is_true"
                }, {
                    key: u,
                    name: "Traffic source"
                }, {
                    key: f,
                    name: "External referrer"
                }, {
                    key: l,
                    name: "View within session"
                }];
            return o(), this.isVariableUsedInContainer = function(e) {
                return t.contains(a, e)
            }, this
        };
        e.provider(t, function() {
            return i
        });
        var r = function(e, t, n, r, o) {
            return new i(e, t, n, r, o)
        };
        r.$inject = ["$window", "$utils", "$privacyComplianceConfiguration", "$configuration", "$tagTreeVariableScanner"], e.service(n, r), e[n] = e.$injector.get(n)
    }(window.sevenTag, "VariableHandler", "$variableHandler"),
    function(e, t) {
        var n = function() {
            var e = {};
            return this.push = function(t, n) {
                e[t] = n
            }, this.get = function(t, n) {
                var i, r;
                if ("undefined" != typeof e[t])
                    for (i in e[t])
                        if (e[t].hasOwnProperty(i) && (r = e[t][i], r.name === n)) return r.value
            }, this
        };
        n.$inject = [], e.service(t, n)
    }(window.sevenTag, "$variablesHistory"),
    function(e, t, n) {
        var i = function() {
            return this.collectors = {}, this.add = function(e, t) {
                return void 0 === this.collectors[e] && (this.collectors[e] = t), this
            }, this.get = function(e) {
                return this.collectors[e]
            }, this
        };
        e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "CollectorProvider", "$collectorProvider"),
    function(e, t, n) {
        var i = function(e, t, n, i) {
            function r(t) {
                var i = e();
                n.forEach(i, function(e) {
                    var n, i = e.id ? e.id : e.name;
                    n = o(e, t), n && n.resolved && a(i, e.name, n.value, !1)
                })
            }

            function o(e, n) {
                var i = "Consents" === e.name ? "consents" : e.type.collector_name,
                    r = t.get(i);
                return r ? r(e, n) : void 0
            }

            function a(e, t, i, r) {
                var o, a;
                n.forOwn(c, function(e, n) {
                    e.name === t && (o = e, a = n)
                }), n.exists(o) ? r || !o.wasPushed ? (o.value = i, o.wasPushed = r) : (delete c[a], c[e] = {
                    id: e,
                    name: t,
                    value: o.value,
                    wasPushed: o.wasPushed
                }) : c[e] = {
                    id: e,
                    name: t,
                    value: i,
                    wasPushed: r
                }
            }

            function s(e) {
                return e && e.substr(0, i.length) !== i
            }
            var c = {},
                u = this;
            return this.handle = function(e) {
                return s(e.event) && u.set(e, ["event"]), r(e), c
            }, this.getAll = function() {
                return c
            }, this.getValue = function(e) {
                var t;
                return n.forOwn(c, function(n) {
                    n.name === e && (t = n.value)
                }), t
            }, this.set = function(e, t) {
                n.exists(e) && (t = n.isArray(t) ? t : [], n.forOwn(e, function(e, i) {
                    n.contains(t, i) || a(i, i, e, !0)
                }))
            }, this.reset = function() {
                c = {}
            }, this
        };
        i.$inject = ["$variables", "$collectorProvider", "$utils", "STG_EVENTS_PREFIX"], e.provider(t, function() {
            return i
        }), e.service(n, i)
    }(window.sevenTag, "VariablesManager", "$variablesManager"),
    function(e, t) {
        var n = function(e) {
            return this.filterFromHash = function(t) {
                return t.replace("#" + e, "")
            }, this.filterFromQuery = function(t) {
                if (!t) return "";
                var n = t.split("?");
                if (n.length < 2) return "";
                for (var i = n.shift(), r = n.join("?"), o = encodeURIComponent(e), a = r.split(/[&;]/g), s = a.length; s-- > 0;) a[s].lastIndexOf(o, 0) !== -1 && a.splice(s, 1);
                return t = i + (a.length > 0 ? "?" + a.join("&") : "")
            }, this
        };
        n.$inject = ["DEBUG_PARAM_NAME"], e.service(t, n)
    }(window.sevenTag, "$debugParamFilter"),
    function(e, t) {
        var n = function(e, t) {
            return this.location = e, this.hasParam = function() {
                return this.hasParamInHash() || this.hasParamInQuery()
            }, this.hasParamInHash = function() {
                return this.location.hash.indexOf(t) !== -1
            }, this.hasParamInQuery = function() {
                return this.location.search.indexOf(t) !== -1
            }, this
        };
        n.$inject = ["$location", "DEBUG_PARAM_NAME"], e.service(t, n)
    }(window.sevenTag, "$debugParamDetector"),
    function(e, t, n) {
        var i = function() {
            return this.enabled = !1, this.callback = void 0, this.isEnabled = function() {
                return this.enabled
            }, this.setCallback = function(e) {
                this.callback = e
            }, this.hasCallback = function() {
                return void 0 !== this.callback
            }, this
        };
        i.$inject = [], e.service(t, i), e[n] = e.$injector.get(t)
    }(window.sevenTag, "$breakpointManager", "breakpointManager");
var SYNC_EVENT = "_stg_sync_event";
! function(e, t, n) {
    var i = function(e, t, n, i, r, o) {
        var a = !1,
            s = [];
        return this.stack = [], this.tagTree = [], this.tagTreeSync = [], this.breakpoints = e, this.sync = !1, this.isEnabled = function() {
            return a
        }, this.start = function(e, t) {
            return a = !0, this.tagTree = e, this.tagTreeSync = t, this.sync && this.setSync(), !0
        }, this.stop = function() {
            return a = !1, !0
        }, this.push = function(e) {
            return !!a && (this.stack.push(e), !0)
        }, this.close = function() {
            var e = i.filterFromHash(i.filterFromQuery(t.href)),
                n = e.split("#");
            n[0] = n[0] + (n[0].indexOf("?") !== -1 ? "&" : "?") + "_stg_disable_debug", t.href = n.join("#")
        }, this.addListener = function(e) {
            return s.push(e), !0
        }, this.hasListener = function(e) {
            for (var t = !1, n = 0; n < s.length; n++) s[n] === e && (t = !0);
            return t
        }, this.removeListener = function(e) {
            for (var t = !1, n = 0; n < s.length; n++) s[n] === e && (s.splice(n, 1), t = !0);
            return t
        }, this.removeListeners = function() {
            return s = [], !0
        }, this.debug = function() {
            if (a)
                for (var e = 0; e < s.length; e++) {
                    var t = s[e];
                    t(this.stack)
                }
        }, this.isSync = function(e) {
            this.sync = e
        }, this.setSync = function() {
            var e = r.getItem(SYNC_EVENT);
            if (e) {
                try {
                    this.stack.push(o.parse(e))
                } catch (t) {}
                r.removeItem(SYNC_EVENT)
            }
        }, this
    };
    i.$inject = ["$breakpointManager", "$location", "DEBUG_PARAM_NAME", "$debugParamFilter", "$localStorage", "$json"], e.service(t, i), e[n] = e.$injector.get("$debugger")
}(window.sevenTag, "$debugger", "debugger"),
function(e, t, n) {
    function i(e) {
        return this.mergeConjunction = function(t) {
            return new e(function(e) {
                for (var n = 0, i = !0, r = 0; r < t.length; r++) t[r].then(function(r) {
                    i = i && r, n++, n === t.length && e(i === !0 ? !0 : !1)
                })
            })
        }, this.mergeDisjunction = function(t) {
            return new e(function(e) {
                for (var n = 0, i = 0; i < t.length; i++) t[i].then(function(i) {
                    n++, i === !0 && e(!0), n === t.length && e(!1)
                })
            })
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t) {
        return new e(t)
    };
    r.$inject = ["PromiseMerger", "Promise"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "PromiseMerger", "$promiseMerger"),
function(e, t, n) {
    function i(e, t) {
        function n() {
            return e.getOneByRegex(new RegExp("^" + r + "." + t))
        }

        function i(e) {
            return e.split(".")[0]
        }

        function o() {
            var e = n();
            return a(e) ? i(e) : null
        }

        function a(e) {
            return void 0 !== e && e.indexOf(".") !== -1
        }
        return this.hasVisitorId = function() {
            return null !== o()
        }, this.getVisitorId = function() {
            return o()
        }, this
    }
    var r = "_pk_id";
    e.provider(t, function() {
        return i
    });
    var o = function(e, t, n) {
        return new e(t, n)
    };
    o.$inject = ["VisitorIdProvider", "$cookie", "$websiteId"], e.service(n, o), e[n] = e.$injector.get(n)
}(window.sevenTag, "VisitorIdProvider", "$piwikVisitorIdProvider"),
function(e, t, n) {
    function i(e, t) {
        function n() {
            return e === !0 && null !== t
        }
        return this.validateCondition = function(e) {
            return n() && (e.action === r || e.action === o || e.action === a)
        }, this
    }
    var r = "visitor_belongs_to",
        o = "visitor_not_belongs_to",
        a = "cannot_identify_audience";
    e.provider(t, function() {
        return i
    });
    var s = function(e, t, n) {
        return new e(t, n)
    };
    s.$inject = ["ConditionValidator", "$audienceManagerEnabled", "$websiteId"], e.service(n, s), e[n] = e.$injector.get(n)
}(window.sevenTag, "ConditionValidator", "$audienceManagerConditionValidator"),
function(e, t, n) {
    function i(e, t, n, i, u, l, f) {
        function d() {
            return t.replace("@visitor_id@", i.getVisitorId())
        }

        function p() {
            return new f(function(e) {
                try {
                    u.sendRequest({
                        url: d(),
                        method: c,
                        timeout: parseInt(n.timeout, 10)
                    }, function(t) {
                        g = t, h(g), e(!0)
                    }, function() {
                        e(!1)
                    })
                } catch (t) {
                    e()
                }
            })
        }

        function v(e, t) {
            var n = l.contains(g, e.value);
            return e.action === r && n || e.action === o && !n || e.action === a && !t
        }

        function h(t) {
            var n = {};
            n[s] = t, e.set(n)
        }
        var g = [],
            m = null,
            y = null;
        return this.resolveCondition = function(e) {
            return i.hasVisitorId() ? ((null === y || Date.now() - y > n.delay) && (y = Date.now(), m = p()), m.then(function(t) {
                return v(e, t)
            })) : e.action === a
        }, this
    }
    var r = "visitor_belongs_to",
        o = "visitor_not_belongs_to",
        a = "cannot_identify_audience",
        s = "Audience manager audience",
        c = "GET";
    e.provider(t, function() {
        return i
    });
    var u = function(e, t, n, i, r, o, a, s) {
        return new e(t, n, i, r, o, a, s)
    };
    u.$inject = ["MembershipResolver", "$variablesManager", "$audienceManagerMembershipUrl", "$audienceManagerRequest", "$piwikVisitorIdProvider", "$http", "$utils", "Promise"], e.service(n, u), e[n] = e.$injector.get(n)
}(window.sevenTag, "MembershipResolver", "$audienceManagerMembershipResolver"),
function(e, t, n) {
    function i(e, t) {
        return this.get = function() {
            var n = e.all(),
                i = [];
            return t.forEach(n, function(e) {
                e.isAllowed() && i.push(e.id())
            }), i
        }, this
    }
    i.$inject = ["$privacyComplianceConsentRegistry", "$utils"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "CheckedConsents", "$checkedConsents"),
function(e, t, n) {
    function i() {
        var e = this;
        return e.recognize = function(e) {
            return e.hasOwnProperty(o) ? e[o] : e[r]
        }, e.isTracking = function(t) {
            var n = e.recognize(t);
            return "undefined" != typeof n && n !== a
        }, this
    }
    var r = "consentType",
        o = "complianceType",
        a = "not_require_consent";
    e.provider(n, function() {
        return i
    }), e.service(t, i), e[t] = e.$injector.get(t)
}(window.sevenTag, "$privacyComplianceTypeRecognizer", "PrivacyComplianceTypeRecognizer"),
function(e, t, n) {
    function i(e, t, n) {
        return this.accept = function(t) {
            return e.isTracking(t)
        }, this.visit = function(i) {
            if (!n) return !0;
            var r = t.findById(e.recognize(i));
            return r !== !1 && r.isAllowed()
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, i, r) {
        return new e(t, n, i, r)
    };
    r.$inject = ["ComplianceVisitor", "$privacyComplianceTypeRecognizer", "$privacyComplianceConsentRegistry", "$privacyComplianceEnabled"], e.service(n, r)
}(window.sevenTag, "ComplianceVisitor", "$complianceVisitor"),
function(e, t, n) {
    var i = function(e, t, n, i, r, o) {
        function a() {
            return n.currentDate().toUTCString()
        }

        function s() {
            return r.isVariableUsedInContainer(d) || r.isVariableUsedInContainer(p)
        }
        var c = -1,
            u = "stg_last_interaction",
            l = 31536e3,
            f = void 0 === e.sevenTag.lastInteractionTime,
            d = "first_view",
            p = "multiplicity";
        if (f) {
            var v = t.get(u);
            void 0 === v ? e.sevenTag.lastInteractionTime = c : e.sevenTag.lastInteractionTime = new Date(v)
        }
        return i.addListener(function() {
            s() && (t.add(u, a, l), o || (e.sevenTag.lastInteractionTime = n.currentDate()))
        }), this.secondsSinceLastInteraction = function() {
            var t = n.currentDate(),
                i = e.sevenTag.lastInteractionTime;
            return i && i !== c ? (t.getTime() - i.getTime()) / 1e3 : void 0
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, r, o, a) {
        return new i(e, t, n, r, o, a)
    };
    r.$inject = ["$window", "$cookie", "$utils", "$session", "$variableHandler", "IS_SYNCHRONOUS"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "LastInteractionDetector", "$lastInteractionDetector"),
function(e, t, n) {
    var i = function(e, t, n, i, r) {
        function o() {
            function i() {
                a() && r()
            }

            function r() {
                c() && e.add(u, t.currentDate().toUTCString(), l)
            }
            return !!a() && (r(), n.addListener(i), !0)
        }

        function a() {
            var t = e.get(u);
            return f = f && (!t || s(t))
        }

        function s(e) {
            var n = t.currentDate(),
                i = new Date(e),
                o = n.getTime() - i.getTime();
            return o / 1e3 < r
        }

        function c() {
            return i.isVariableUsedInContainer(d)
        }
        var u = "stg_returning_visitor",
            l = 31536e3,
            f = !0,
            d = "returning_visitor";
        return o(), this.hasVisitedBefore = function() {
            return !a()
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, r, o) {
        return new i(e, t, n, r, o)
    };
    r.$inject = ["$cookie", "$utils", "$session", "$variableHandler", "SESSION_LENGTH"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "ReturningVisitorDetector", "$returningVisitorDetector"),
function(e, t, n) {
    var i = "stg_fired_",
        r = function(e, t) {
            function n(e) {
                return i + e.relation
            }

            function r(e) {
                for (var t = !1, n = 0; n < e.conditions.length; n++) {
                    var i = e.conditions[n];
                    "once_per_session" === i.action && (t = !0)
                }
                return t
            }
            return this.wasAlreadyFired = function(t) {
                return void 0 !== e.get(n(t))
            }, this.canFire = function(e) {
                return !r(e) || !this.wasAlreadyFired(e)
            }, this.markAsFired = function(i) {
                function o() {
                    return t.currentDate().toUTCString()
                }
                r(i) && e.add(n(i), o)
            }, this
        };
    e.provider(t, function() {
        return r
    });
    var o = function(e, t) {
        return new r(e, t)
    };
    o.$inject = ["$cookie", "$utils"], e.service(n, o), e[n] = e.$injector.get(n)
}(window.sevenTag, "TriggerFiredInSessionDetector", "$triggerFiredInSessionDetector"),
function(e, t) {
    function n() {
        return this.visit = function(e, t, n) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                if (r.accept(t, n)) return r.visit(t, n)
            }
            return !1
        }, this
    }
    e.provider(t, function() {
        return new n
    })
}(window.sevenTag, "ConditionVisitorStrategy"),
function(e, t) {
    function n() {
        return this.visit = function(e, t, n) {
            for (var r = 0; r < e.length; r++)
                if (i(e[r], t, n)) return !1;
            return !0
        }, this
    }

    function i(e, t, n) {
        return e.accept(t, n) && !e.visit(t, n)
    }
    e.provider(t, function() {
        return new n
    })
}(window.sevenTag, "TagVisitorStrategy"),
function(e, t) {
    var n = function() {
        function e(e, t) {
            return "undefined" != typeof e[t] ? e[t].value : void 0
        }
        this.accept = function(e) {
            return "starts_with" === e.action || "does_not_start_with" === e.action
        }, this.visit = function(n, i) {
            var r = e(i, n.variable);
            if ("undefined" == typeof r) return !1;
            var o = t(n, r);
            return "starts_with" === n.action ? o : !o
        };
        var t = function(e, t) {
            var n = e.value + "";
            return n === t.substr(0, n.length)
        };
        return this
    };
    n.$inject = [], e.service(t, n)
}(window.sevenTag, "$startWithVisitor"),
function(e, t) {
    var n = function(e) {
        function t(t, n) {
            return e.inString(n + "", t.value + "") !== -1
        }

        function n(e, t) {
            return "undefined" != typeof e[t] ? e[t].value : void 0
        }
        return this.accept = function(e) {
            return "contains" === e.action || "does_not_contain" === e.action
        }, this.visit = function(e, i) {
            if ("undefined" == typeof n(i, e.variable)) return !1;
            var r = t(e, n(i, e.variable));
            return "contains" === e.action ? r : !r
        }, this
    };
    n.$inject = ["$utils"], e.service(t, n)
}(window.sevenTag, "$containsVisitor"),
function(e, t) {
    var n = function(e) {
        function t(t, n) {
            return e.endsWith(n + "", t.value + "")
        }

        function n(e, t) {
            return "undefined" != typeof e[t] ? e[t].value : void 0
        }
        return this.accept = function(e) {
            return "ends_with" === e.action || "does_not_end_with" === e.action
        }, this.visit = function(e, i) {
            if ("undefined" == typeof n(i, e.variable)) return !1;
            var r = t(e, n(i, e.variable));
            return "ends_with" === e.action ? r : !r
        }, this
    };
    n.$inject = ["$utils"], e.service(t, n)
}(window.sevenTag, "$endsWithVisitor"),
function(e, t) {
    var n = function() {
        this.accept = function(e) {
            return "is_true" === e.action || "is_false" === e.action
        }, this.visit = function(n, i) {
            var r = "undefined" != typeof i[n.variable] ? i[n.variable].value : void 0;
            return "is_true" === n.action ? e(r) : t(r)
        };
        var e = function(e) {
                return e === !0
            },
            t = function(e) {
                return e === !1
            };
        return this
    };
    n.$inject = [], e.service(t, n)
}(window.sevenTag, "$isTrueVisitor"),
function(e, t) {
    var n = function() {
        function e(e, t) {
            return e.value + "" == t + ""
        }

        function t(e, t) {
            return "undefined" != typeof e[t] ? e[t].value : void 0
        }
        return this.accept = function(e) {
            return "equals" === e.action || "does_not_equal" === e.action
        }, this.visit = function(n, i) {
            if ("undefined" == typeof t(i, n.variable)) return !1;
            var r = e(n, t(i, n.variable));
            return "equals" === n.action ? r : !r
        }, this
    };
    n.$inject = [], e.service(t, n)
}(window.sevenTag, "$equalsVisitor"),
function(e, t) {
    var n = function() {
        function e(e, t) {
            return "undefined" != typeof e[t] ? e[t].value : void 0
        }
        this.accept = function(e) {
            return "regexp" === e.action || "does_not_regexp" === e.action
        }, this.visit = function(n, i) {
            var r = e(i, n.variable);
            if ("undefined" == typeof r) return !1;
            var o = t(n, r) === !0;
            return "regexp" === n.action ? o : !o
        };
        var t = function(e, t) {
            var n = !1;
            try {
                n = new RegExp(e.value + "").test(t + "")
            } catch (i) {
                n = !1
            }
            return n
        };
        return this
    };
    n.$inject = [], e.service(t, n)
}(window.sevenTag, "$regexpVisitor"),
function(e, t) {
    var n = function() {
        function e(e) {
            return null !== e && void 0 !== e
        }

        function t(t) {
            return !e(t)
        }
        return this.accept = function(e) {
            return "is_set" === e.action || "is_not_set" === e.action
        }, this.visit = function(n, i) {
            var r = "undefined" != typeof i[n.variable] ? i[n.variable].value : void 0;
            return "is_set" === n.action ? e(r) : t(r)
        }, this
    };
    n.$inject = [], e.service(t, n)
}(window.sevenTag, "$isSetVisitor"),
function(e, t) {
    var n = function() {
        function e(e) {
            return 0 === e || ("" === e || (void 0 === e || (null === e || (e === !1 || (!!i(e) || !!n(e))))))
        }

        function t(t) {
            return !e(t)
        }

        function n(e) {
            if ("object" == typeof e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }
            return !1
        }

        function i(e) {
            return "object" == typeof e && e.constructor === Array && 0 === e.length
        }
        return this.accept = function(e) {
            return "is_empty" === e.action || "is_not_empty" === e.action
        }, this.visit = function(n, i) {
            var r = "undefined" != typeof i[n.variable] ? i[n.variable].value : void 0;
            return "is_empty" === n.action ? e(r) : t(r)
        }, this
    };
    n.$inject = [], e.service(t, n)
}(window.sevenTag, "$isEmptyVisitor"),
function(e, t) {
    var n = function(e) {
        function t(t) {
            var n = "stg_session_" + t.value,
                i = e.get(n);
            return e.remove(n), "-1" === i
        }
        this.accept = function(e) {
            return "is_first_visit" === e.action || "is_not_first_visit" === e.action
        }, this.visit = function(e, t) {
            var i = t[e.variable] ? t[e.variable].value : void 0,
                r = n(e, i);
            return "is_first_visit" === e.action ? r : !r
        };
        var n = function(e, n) {
            var i = 60 * e.value,
                r = !n || n > i;
            return r || t(e)
        };
        return this
    };
    n.$inject = ["$cookie"], e.service(t, n)
}(window.sevenTag, "$visitRecognizerVisitor"),
function(e, t) {
    var n = "Page Scroll",
        i = "pixels",
        r = "once_per_session",
        o = "once_per_page_view",
        a = "each_time",
        s = function() {
            function e(e, t) {
                return e.options && e.options.unit === i ? t.px > parseInt(e.value, 10) : t["%"] > parseInt(e.value, 10)
            }

            function t(e, t) {
                return t
            }

            function s(e, t) {
                return !(l[e.relation] || !t) && (l[e.relation] = !0, !0)
            }

            function c(e, t) {
                return !l[e.relation] && t ? (l[e.relation] = !0, !0) : (l[e.relation] && !t && (l[e.relation] = !1), !1)
            }
            var u = {};
            u[r] = t, u[o] = s, u[a] = c;
            var l = {};
            return this.accept = function(e) {
                return e.variable === n
            }, this.visit = function(t, n) {
                var i = n[t.variable] ? n[t.variable].value : void 0;
                if ("undefined" == typeof i) return !1;
                var r = e(t, i),
                    o = u[t.action];
                return !(!n.Event || "stg.scroll" !== n.Event.value || !o) && o(t, r)
            }, this
        };
    s.$inject = [], e.service(t, s)
}(window.sevenTag, "$scrollVisitor"),
function(e, t, n) {
    var i = "Leave content",
        r = function() {
            var e = {};
            this.accept = function(e) {
                return e.variable === i
            }, this.visit = function(n, r) {
                var o = t(n, r, i);
                return "once_per_page_view" === n.action && o ? !e[n.relation] && (e[n.relation] = !0, !0) : o
            };
            var t = function(e, t, n) {
                var i = "undefined" != typeof t[n] ? t[n].value : void 0;
                return e.value === i || "any" === e.value && !!i
            };
            return this
        };
    e.provider(t, function() {
        return r
    });
    var o = function() {
        return new r
    };
    e.service(n, o), e[n] = e.$injector.get(n)
}(window.sevenTag, "LeaveContentVisitor", "$leaveContentVisitor");
var ONCE_PER_PAGE_VIEW_ACTION = "once_per_page_view",
    ONCE_PER_SESSION_ACTION = "once_per_session",
    VARIABLE_NAME = "Time on website";
! function(e, t, n) {
    var i = function() {
        function e(e) {
            if (e) {
                var t = parseInt(e, 10);
                return e.indexOf("min") > -1 ? 60 * t : t
            }
        }
        return this.accept = function(e) {
            return (e.action === ONCE_PER_PAGE_VIEW_ACTION || e.action === ONCE_PER_SESSION_ACTION) && e.variable === VARIABLE_NAME
        }, this.visit = function(t, n) {
            var i = "undefined" != typeof n[t.variable] ? n[t.variable].value : void 0;
            return +t.value === e(i)
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function() {
        return new i
    };
    e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "TimeOnWebsiteVisitor", "$timeOnWebsiteVisitor"),
function(e, t, n) {
    function i(e, t) {
        return this.accept = function(e) {
            return t.validateCondition(e)
        }, this.visit = function(t) {
            return e.resolveCondition(t)
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n) {
        return new e(t, n)
    };
    r.$inject = ["AudienceManagerMembershipVisitor", "$audienceManagerMembershipResolver", "$audienceManagerConditionValidator"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "AudienceManagerMembershipVisitor", "$audienceManagerMembershipVisitor"),
function(e, t, n) {
    var i = "Click Element",
        r = "matches",
        o = "does_not_match",
        a = "is_a_child_of",
        s = "is_not_a_child_of",
        c = "xpath",
        u = function(e) {
            function t(t, n) {
                return n === c ? e.getElementsByXPath(t, !0) : e.getElementsByCssSelector(t)
            }

            function n(t, n) {
                return !!t && e.contains(n, t)
            }

            function u(t, i) {
                var r = e.filterParent(t, function(e) {
                    return n(e, i)
                });
                return void 0 !== r
            }
            return this.accept = function(e) {
                return e.variable === i
            }, this.visit = function(c, l) {
                var f, d = l[i] ? l[i].value : void 0,
                    p = c.options ? c.options.selector_type || c.options.selectorType : void 0,
                    v = t(c.value, p);
                return e.contains([r, o], c.action) ? (f = n(d, v), c.action === r ? f : !f) : !!e.contains([a, s], c.action) && (f = u(d, v), c.action === a ? f : !f)
            }, this
        };
    e.provider(t, function() {
        return u
    });
    var l = function(e) {
        return new u(e)
    };
    l.$inject = ["$utils"], e.service(n, l), e[n] = e.$injector.get(n)
}(window.sevenTag, "ElementSelector", "$elementSelectorVisitor"),
function(e, t, n) {
    function i(e, t) {
        var n = ["1", "yes", "true"],
            i = r(e),
            o = function() {
                return t.indexOf(n, "" + i) > -1
            };
        return this.detect = function() {
            return o()
        }, this
    }
    var r = function(e) {
        return e.navigator ? e.navigator.doNotTrack || e.navigator.msDoNotTrack : e.doNotTrack
    };
    e.provider(t, function() {
        return i
    });
    var o = function(e, t, n) {
        return new n(e, t)
    };
    o.$inject = ["$window", "$utils", "DoNotTrackDetector"], e.service(n, o)
}(window.sevenTag, "DoNotTrackDetector", "$doNotTrackDetector"),
function(e, t, n) {
    function i(e) {
        var t = e.detect();
        return this.isEnabled = function() {
            return t
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t) {
        return new t(e)
    };
    r.$inject = ["$doNotTrackDetector", "DoNotTrack"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "DoNotTrack", "$doNotTrack"),
function(e, t, n) {
    function i(e) {
        var t = function(t) {
            return e.isEnabled() && t.respectVisitorsPrivacy
        };
        return this.accept = function() {
            return !0
        }, this.visit = function(e) {
            return !t(e)
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t) {
        return new e(t)
    };
    r.$inject = ["DoNotTrackVisitor", "$doNotTrack"], e.service(n, r)
}(window.sevenTag, "DoNotTrackVisitor", "$doNotTrackVisitor");
var COOKIE_PREFIX = "_stg_optout",
    GLOBAL_CONFIG_NAME = "stg_global_opt_out";
! function(e, t, n) {
    function i(e, t) {
        var n = !1;
        return this.isEnabled = function() {
            return this.hasGlobalOptOut() || this.hasDomainOptOut() || this.hasDebuggerOptOut()
        }, this.hasGlobalOptOut = function() {
            return t[GLOBAL_CONFIG_NAME]
        }, this.hasDomainOptOut = function() {
            return "true" === e.get(COOKIE_PREFIX)
        }, this.hasDebuggerOptOut = function() {
            return n
        }, this.setDebuggerSimulateOptOut = function(e) {
            n = e
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n) {
        return new e(t, n)
    };
    r.$inject = ["OptOut", "$cookie", "$configuration"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "OptOut", "$optOut"),
function(e, t, n) {
    function i(e) {
        var t = function(t) {
            return e.isEnabled() && t.respectVisitorsPrivacy
        };
        return this.accept = function() {
            return !0
        }, this.visit = function(e) {
            return !t(e)
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t) {
        return new e(t)
    };
    r.$inject = ["OptOutVisitor", "$optOut"], e.service(n, r)
}(window.sevenTag, "OptOutVisitor", "$optOutVisitor"),
function(e, t, n) {
    function i() {
        return this.accept = function() {
            return !0
        }, this.visit = function(e) {
            return !e || !e.scheduler || (void 0 === e.scheduler.enabled || null === e.scheduler.enabled || (void 0 === e.scheduler.resolved || null === e.scheduler.resolved || (!1 === e.scheduler.enabled || !0 === e.scheduler.enabled && !0 === e.scheduler.resolved)))
        }, this
    }
    e.service(n, i)
}(window.sevenTag, "SchedulerVisitor", "$schedulerVisitor"),
function(e, t) {
    function n(e) {
        var t = [];
        return this.add = function(e, n) {
            return "undefined" == typeof n && (n = 0), t.push({
                priority: +n,
                visitor: e
            }), !0
        }, this.has = function(e) {
            for (var n = 0; n < t.length; n++)
                if (e === t[n].visitor) return !0;
            return !1
        }, this.remove = function(e) {
            for (var n = 0; n < t.length; n++)
                if (e === t[n].visitor) return t.splice(n, 1), !0;
            return !1
        }, this.removeAll = function() {
            return t = [], !0
        }, this.getVisitors = function() {
            var e = [];
            t.sort(function(e, t) {
                return t.priority - e.priority
            });
            for (var n = 0; n < t.length; n++) e.push(t[n].visitor);
            return e
        }, this.visit = function(t, n) {
            return e.visit(this.getVisitors(), t, n)
        }, this
    }
    e.provider(t, function() {
        return n
    })
}(window.sevenTag, "VisitorManager"),
function(e, t) {
    var n = function() {
        return Array.prototype.slice.call(arguments)
    };
    n.$inject = ["$containsVisitor", "$endsWithVisitor", "$equalsVisitor", "$regexpVisitor", "$startWithVisitor", "$isTrueVisitor", "$visitRecognizerVisitor", "$scrollVisitor", "$leaveContentVisitor", "$timeOnWebsiteVisitor", "$audienceManagerMembershipVisitor", "$elementSelectorVisitor", "$isEmptyVisitor", "$isSetVisitor"];
    var i = function(e, t, n) {
        for (var i = new e(n), r = 0; r < t.length; r++) i.add(t[r]);
        return i
    };
    i.$inject = ["VisitorManager", "$conditionVisitorManagerVisitorsCollection", "ConditionVisitorStrategy"], e.service(t + "VisitorsCollection", n), e.service(t, i)
}(window.sevenTag, "$conditionVisitorManager"),
function(e, t) {
    var n = function(e, t) {
        return this.create = function(n) {
            return e.sevenTag && e.sevenTag.debugOptions && e.sevenTag.debugOptions.enabled && (n += "Debug"), t.get(n)
        }, this
    };
    n.$inject = ["$window", "$injector"], e.service(t, n)
}(window.sevenTag, "$decisionStrategyFactory"),
function(e, t) {
    function n(e, t, n) {
        function i(e) {
            for (var i = !0, r = [], o = 0; o < e.length; o++) n.isPromise(e[o]) ? r.push(e[o]) : i = i && e[o];
            return r.length > 0 ? t.mergeConjunction(r) : i
        }
        return this.decision = function(t, n) {
            for (var r = [], o = 0; o < t.length; o++) {
                var a = t[o],
                    s = e.visit(a, n);
                if (s === !1) return !1;
                r.push(s)
            }
            return i(r)
        }, this
    }
    e.provider(t, function() {
        return n
    })
}(window.sevenTag, "ConjunctionDecisionStrategy"),
function(e, t) {
    function n(e, t, n) {
        function i(e) {
            for (var i = [], r = 0; r < e.length; r++) n.isPromise(e[r]) && i.push(e[r]);
            return i.length > 0 && t.mergeDisjunction(i)
        }
        return this.decision = function(t, n) {
            var r = [];
            for (var o in t) {
                var a = e.visit(t[o], n);
                if (a === !0) return !0;
                r.push(a)
            }
            return i(r)
        }, this
    }
    e.provider(t, function() {
        return n
    })
}(window.sevenTag, "DisjunctionDecisionStrategy"),
function(e, t) {
    function n(e, t, n) {
        function i(e) {
            for (var i = [], r = 0; r < e.length; r++)
                if (n.isPromise(e[r])) i.push(e[r]);
                else if (e[r] === !1) return !1;
            return !(i.length > 0) || t.mergeConjunction(i)
        }
        return this.decision = function(t, n) {
            for (var r = [], o = 0; o < t.length; o++) {
                var a = t[o];
                a.resolved = e.visit(a, n), r.push(a.resolved)
            }
            return i(r)
        }, this
    }
    e.provider(t, function() {
        return n
    })
}(window.sevenTag, "ConjunctionDecisionStrategyDebug"),
function(e, t) {
    function n(e, t, n) {
        function i(e) {
            for (var i = [], r = 0; r < e.length; r++)
                if (n.isPromise(e[r])) i.push(e[r]);
                else if (e[r] === !0) return !0;
            return i.length > 0 && t.mergeDisjunction(i)
        }
        return this.decision = function(t, n) {
            for (var r = [], o = 0; o < t.length; o++) {
                var a = t[o];
                a.resolved = e.visit(a, n), r.push(a.resolved)
            }
            return i(r)
        }, this
    }
    e.provider(t, function() {
        return n
    })
}(window.sevenTag, "DisjunctionDecisionStrategyDebug"),
function(e, t) {
    var n = function(e, t, n, i) {
        var r = e.create("ConjunctionDecisionStrategy");
        return new r(t, n, i)
    };
    n.$inject = ["$decisionStrategyFactory", "$conditionVisitorManager", "$promiseMerger", "Promise"], e.service(t, n)
}(window.sevenTag, "$conditionDecisionStrategy"),
function(e, t, n) {
    function i(e, t, n) {
        var i = e;
        return this.accept = function(e) {
            return "undefined" != typeof e.conditions
        }, this.visit = function(e, r) {
            if (t.canFire(e)) {
                var o = i.decision(e.conditions, r);
                return o === !0 ? t.markAsFired(e) : n.isPromise(o) && o.then(function(n) {
                    n && t.markAsFired(e)
                }), o
            }
            return !1
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, i) {
        return new e(t, n, i)
    };
    r.$inject = ["TriggerVisitor", "$conditionDecisionStrategy", "$triggerFiredInSessionDetector", "Promise"], e.service(n, r)
}(window.sevenTag, "TriggerVisitor", "$triggerVisitor"),
function(e, t) {
    var n = function() {
        return Array.prototype.slice.call(arguments)
    };
    n.$inject = ["$complianceVisitor", "$doNotTrackVisitor", "$optOutVisitor", "$schedulerVisitor"];
    var i = function(e, t, n) {
        for (var i = new e(n), r = 0; r < t.length; r++) i.add(t[r]);
        return i
    };
    i.$inject = ["VisitorManager", "$tagVisitorManagerVisitorsCollection", "TagVisitorStrategy"], e.service(t + "VisitorsCollection", n), e.service(t, i)
}(window.sevenTag, "$tagVisitorManager"),
function(e, t) {
    var n = function() {
        return Array.prototype.slice.call(arguments)
    };
    n.$inject = ["$triggerVisitor"];
    var i = function(e, t, n) {
        for (var i = new e(n), r = 0; r < t.length; r++) i.add(t[r]);
        return i
    };
    i.$inject = ["VisitorManager", "$triggerVisitorManagerVisitorsCollection", "ConditionVisitorStrategy"], e.service(t + "VisitorsCollection", n), e.service(t, i)
}(window.sevenTag, "$triggerVisitorManager"),
function(e, t) {
    var n = function(e) {
        return this.decision = function(t) {
            return e.visit(t)
        }, this
    };
    n.$inject = ["$tagVisitorManager"], e.service(t, n)
}(window.sevenTag, "$tagDecisionStrategy"),
function(e, t) {
    var n = function(e, t, n, i) {
        var r = e.create("DisjunctionDecisionStrategy");
        return new r(t, n, i)
    };
    n.$inject = ["$decisionStrategyFactory", "$triggerVisitorManager", "$promiseMerger", "Promise"], e.service(t, n)
}(window.sevenTag, "$triggerDecisionStrategy"),
function(e, t) {
    function n(e) {
        this.resolve = function(t, n) {
            for (var i = 0; i < e.length; i++) t = e[i].resolve.call(e[i], t, n);
            return t
        }
    }
    e.provider(t, function() {
        return n
    })
}(window.sevenTag, "Wrapper"),
function(e, t, n) {
    function i(e, t) {
        this.resolve = function(n, i) {
            for (var r = [], o = 0; o < n.length; o++) {
                var a = n[o];
                t.decision(a) && (a.resolved = e.decision(a.triggers, i), r.push(a))
            }
            return r
        }
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n) {
        return new n(e, t)
    };
    r.$inject = ["$triggerDecisionStrategy", "$tagDecisionStrategy", "EntryPointResolver"], e.service(n, r)
}(window.sevenTag, "EntryPointResolver", "$entryPointResolver"),
function(e, t) {
    var n = function() {
        return Array.prototype.slice.call(arguments)
    };
    n.$inject = ["$entryPointResolver"], e.service("$resolversCollection", n);
    var i = function(e, t) {
        return new e(t)
    };
    i.$inject = ["Wrapper", "$resolversCollection"], e.service(t, i)
}(window.sevenTag, "$resolver"),
function(e, t, n) {
    var i = function() {
        var e = {
                '"': "&#34;",
                "'": "&#39;",
                "<": "&#60;",
                ">": "&#62;",
                "&": "&#38;"
            },
            t = /["'<>&]/g,
            n = {
                '"': "\\x22",
                "'": "\\x27",
                "\n": "\\n",
                "\r": "\\r"
            },
            i = /["'\n\r]/g;
        return this.htmlUrl = function(e) {
            return encodeURI(e).replace("'", "%27")
        }, this.htmlString = function(n) {
            return n.replace(t, function(t) {
                return e[t]
            })
        }, this.jsString = function(e) {
            return e.replace(i, function(e) {
                return n[e]
            })
        }, this
    };
    i.$inject = [], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ParserEscape", "$parserEscape"),
function(e, t, n) {
    var i = function() {
        function e(e) {
            return e.nodeType && e.nodeType === d
        }

        function t(e) {
            var t = e.tagName.toUpperCase().charAt(0),
                n = e.tagName.toLowerCase().slice(1);
            return "HTML" + t + n + "Element"
        }
        var n = "function",
            i = "object",
            r = "array",
            o = "string",
            a = "number",
            s = "boolean",
            c = "null",
            u = "undefined",
            l = "Window",
            f = "HTMLDocument",
            d = 1,
            p = {
                OBJECT: /\[object (\w+)]/,
                HTML_NODE: /^(HTML|SVG)/
            };
        return this.getType = function(n) {
            var o, a, s, c = "Object";
            if (null == n) return n + "";
            switch (o = typeof n) {
                case i:
                    if (n === window) return l;
                    if (n === document) return f;
                    if (n instanceof Array) return r;
                    if (n.toString) {
                        if (a = n.toString(), s = a.match(p.OBJECT), null !== s && s[1] !== c) return s[1];
                        if (null === s && e(n)) return t(n)
                    }
                    return i;
                default:
                    return o
            }
        }, this.isDomType = function(e) {
            return p.HTML_NODE.test(e) || e === l
        }, this.types = function() {
            return {
                FUNCTION: n,
                OBJECT: i,
                ARRAY: r,
                STRING: o,
                NUMBER: a,
                BOOL: s,
                NULL: c,
                UNDEFINED: u,
                WINDOW: l,
                DOCUMENT: f
            }
        }, this
    };
    i.$inject = [], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ParserVariableTypeResolver", "$parserVariableTypeResolver"),
function(e, t, n) {
    var i = function(e, t) {
        function n(e, n) {
            return n ? "'" + t.jsString(e) + "'" : t.jsString(e)
        }

        function i(e) {
            var n = {
                CONTEXT_ID: e.contextId,
                VAR_NAME: t.jsString(e.name)
            };
            return r.replace(o, function(e, t) {
                return n[t]
            })
        }
        var r = "(function(){return window.sevenTag.$injector.get('$variablesHistory').get('{{CONTEXT_ID}}', '{{VAR_NAME}}');})()",
            o = /{{(CONTEXT_ID|VAR_NAME)}}/g;
        return this.getValue = function(t, r) {
            switch (t.type) {
                case e.types().STRING:
                    return n(t.value, r);
                case e.types().OBJECT:
                case e.types().ARRAY:
                case e.types().FUNCTION:
                    return i(t);
                default:
                    return e.isDomType(t.type) ? i(t) : t.value
            }
        }, this
    };
    i.$inject = ["$parserVariableTypeResolver", "$parserEscape"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ParserVariableResolverJs", "$parserVariableResolverJs"),
function(e, t, n) {
    var i = function(e, t, n) {
        function i(e) {
            return s[1 * e]
        }

        function r(e) {
            return o(e.value) ? a(e) : "[" + e.type + "]"
        }

        function o(e) {
            return e.tagName
        }

        function a(e) {
            var t = e.value.attributes,
                n = e.value.tagName.toLowerCase();
            return "[" + e.type + "] " + n + (t.id ? "#" + t.id.value : "") + (t["class"] ? "." + t["class"].value.split(" ").join(".") : "")
        }
        var s = ["false", "true"];
        return this.getValue = function(o, a) {
            switch (o.type) {
                case e.types().STRING:
                    return a ? t.htmlUrl(o.value) : t.htmlString(o.value);
                case e.types().OBJECT:
                case e.types().ARRAY:
                    return a ? t.htmlUrl(n.stringify(o.value)) : t.htmlString(n.stringify(o.value));
                case e.types().FUNCTION:
                    return a ? t.htmlUrl(o.value.toString()) : t.htmlString(o.value.toString());
                case e.types().BOOL:
                    return i(o.value);
                default:
                    return e.isDomType(o.type) ? a ? t.htmlUrl(r(o)) : t.htmlString(r(o)) : o.value
            }
        }, this
    };
    i.$inject = ["$parserVariableTypeResolver", "$parserEscape", "$json"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ParserVariableResolverHtml", "$parserVariableResolverHtml"),
function(e, t, n) {
    var i = function(e, t, n, i) {
        function r(n, i, r) {
            var o, a = e.trim(r),
                s = {
                    name: a,
                    value: void 0,
                    type: t.types().UNDEFINED,
                    contextId: i
                };
            for (o in n)
                if (n.hasOwnProperty(o) && n[o].name === a) return s.type = t.getType(n[o].value), s.value = n[o].value, s;
            return s
        }
        var o = "{{",
            a = "}}";
        return this.getValue = function(e, t, o, a, s) {
            var c = r(e, t, o);
            return a ? n.getValue(c, s) : i.getValue(c, s)
        }, this.getVariableTags = function() {
            return {
                OPEN_TAG: o,
                CLOSE_TAG: a
            }
        }, this
    };
    i.$inject = ["$utils", "$parserVariableTypeResolver", "$parserVariableResolverJs", "$parserVariableResolverHtml"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ParserVariableResolver", "$parserVariableResolver"),
function(e, t, n) {
    var i = function(e) {
        function t(t, n, i) {
            return function(r, o) {
                return e.getValue(t, n, o, i, i)
            }
        }

        function n(e) {
            return e.indexOf('"') !== -1 || e.indexOf("'") !== -1
        }
        var i = e.getVariableTags().OPEN_TAG,
            r = e.getVariableTags().CLOSE_TAG,
            o = new RegExp(i + "((?:.(?!" + r + "))+.)" + r, "g");
        return this.parse = function(e, n, i, r) {
            return e.replace(o, t(n, i, r))
        }, this.mayHaveVariable = function(e) {
            return e.indexOf(i) !== -1 && e.indexOf(r) !== -1
        }, this.canParse = function(e) {
            return !n(e)
        }, this
    };
    i.$inject = ["$parserVariableResolver"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ParserSimple", "$parserSimple"),
function(e, t, n) {
    var i = function(e, t) {
        function n(t, n, l) {
            var f, p = {
                    quot: 0,
                    apos: 0,
                    isVar: !1,
                    pos: 0
                },
                v = "",
                h = "",
                g = function(t, i) {
                    return e.getValue(n, l, t, !0, i)
                };
            for (p.pos = 0; p.pos < t.length; ++p.pos) switch (f = t[p.pos]) {
                case d.APOS:
                    p.isVar ? v += f : i(p, t) && !r(p) ? (++p.apos, h += f) : h += f;
                    break;
                case d.QUOT:
                    p.isVar ? v += f : i(p, t) && !o(p) ? (++p.quot, h += f) : h += f;
                    break;
                case d.OPEN_TAG1:
                    !p.isVar && a(p, t) ? (p.isVar = !0, ++p.pos) : p.isVar && a(p, t) ? (p.isVar = !1, ++p.pos, h += u + v + u, v = "") : p.isVar ? v += f : h += f;
                    break;
                case d.CLOSE_TAG1:
                    p.isVar && s(p, t) ? (p.isVar = !1, ++p.pos, h += g(v, c(p)), v = "") : p.isVar ? v += f : h += f;
                    break;
                default:
                    p.isVar ? v += f : h += f
            }
            return p.isVar && (h += u + v), h
        }

        function i(e, t) {
            return e.pos > 0 && t[e.pos - 1] !== d.ESCAPE
        }

        function r(e) {
            return e.quot % 2 !== 0
        }

        function o(e) {
            return e.apos % 2 !== 0
        }

        function a(e, t) {
            return t[e.pos + 1] === d.OPEN_TAG2
        }

        function s(e, t) {
            return t[e.pos + 1] === d.CLOSE_TAG2
        }

        function c(e) {
            return e.apos % 2 === 0 && e.quot % 2 === 0
        }
        var u = e.getVariableTags().OPEN_TAG,
            l = e.getVariableTags().CLOSE_TAG,
            f = /(\n)/,
            d = {
                APOS: "'",
                QUOT: '"',
                ESCAPE: "\\",
                OPEN_TAG1: u[0],
                OPEN_TAG2: u[1],
                CLOSE_TAG1: l[0],
                CLOSE_TAG2: l[1]
            };
        return this.parse = function(e, i, r) {
            var o, a = e.split(f);
            for (o = 0; o < a.length; ++o) t.mayHaveVariable(a[o]) && (a[o] = t.canParse(a[o]) ? t.parse(a[o], i, r, !0) : n(a[o], i, r));
            return a.join("")
        }, this
    };
    i.$inject = ["$parserVariableResolver", "$parserSimple"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ParserJs", "$parserJs"),
function(e, t, n) {
    var i = function(e, t) {
        function n(e, t) {
            return function(n, r, o) {
                return n.replace(a.TAG, i(e, t))
            }
        }

        function i(t, n) {
            return function(i, r) {
                return e.getValue(n, t, r, !1, !0)
            }
        }
        var r = e.getVariableTags().OPEN_TAG,
            o = e.getVariableTags().CLOSE_TAG,
            a = {
                NEW_LINE_REPLACE: /\n/g,
                HTML_TAG_QUOT: /<\s*([^ ]+) .*(?:src|href)\s*=\s*"[^"]+"[^>]*>/gi,
                HTML_TAG_APOS: /<\s*([^ ]+) .*(?:src|href)\s*=\s*'[^']+'[^>]*>/gi,
                TAG: new RegExp(r + "((?:.(?!" + o + "))+.)" + o, "g"),
                LINK_QUOT: /(src|href)\s*=\s*"([^"]+)"/gi,
                LINK_APOS: /(src|href)\s*=\s*'([^']+)'/gi
            };
        return this.parse = function(e, i, r) {
            return t.mayHaveVariable(e) && (t.canParse(e) || (e = e.replace(a.NEW_LINE_REPLACE, " ").replace(a.HTML_TAG_QUOT, function(e, t) {
                return e.replace(a.LINK_QUOT, n(r, i))
            }).replace(a.HTML_TAG_APOS, function(e, t) {
                return e.replace(a.LINK_APOS, n(r, i))
            })), e = t.parse(e, i, r, !1)), e
        }, this
    };
    i.$inject = ["$parserVariableResolver", "$parserSimple"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ParserHtml", "$parserHtml"),
function(e, t, n) {
    var i = function(e, t, n) {
        var i = {
            LINE_SPLIT: /(<[^<>]+>|<\s*\/[^<>]+>)/i,
            SCRIPT_OPEN: /<\s*script[^>]*>/i,
            SCRIPT_CLOSE: /<\s*\/\s*script[^>]*>/i
        };
        return this.parse = function(r, o, a) {
            var s, c, u, l = !1,
                f = !1;
            for (n.push(a, o), s = r ? r.split(i.LINE_SPLIT) : [], c = 0; c < s.length; ++c) u = i.SCRIPT_CLOSE.test(s[c]), f = f && !u || l, l = i.SCRIPT_OPEN.test(s[c]), s[c] = f ? e.parse(s[c], o, a) : t.parse(s[c], o, a);
            return s.join("")
        }, this
    };
    i.$inject = ["$parserJs", "$parserHtml", "$variablesHistory"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "Parser", "$parser"),
function(e, t) {
    function n(e) {
        this.render = function(t, n, i, r) {
            for (var o = 0; o < e.length; o++)
                if (e[o].support.call(e[o], t, n, i, r)) {
                    e[o].render.call(e[o], t, n, i, r);
                    break
                }
        }
    }
    e.provider(t, function() {
        return n
    })
}(window.sevenTag, "RendererChain"),
function(e, t, n) {
    var i = function(e, t, n, i, r) {
        function o(e) {
            return e && e.nodeType && e.tagName
        }

        function a(e, t) {
            var n = e.createElement("div");
            return n.style.display = "none", n.style.visibility = "hidden", t.appendChild(n), n
        }

        function s(t) {
            var n = e.createElement("SCRIPT");
            for (var o in t.attributes)
                if (Object.prototype.hasOwnProperty.call(t.attributes, o)) {
                    var a = t.attributes[o];
                    isNaN(parseInt(o, 10)) || (n[a.name] = a.value)
                }
            return n.type = "text/javascript", n.defer = !1, n.text = t.text, i.setAttribute(n, "nonce", r), n
        }

        function c(e, n) {
            t.postscribe(n, e.innerHTML)
        }

        function u(e, t) {
            for (var n = [], r = 0; r < e.childNodes.length; r++) n.push(e.childNodes.item(r));
            i.forEach(n, function(e) {
                o(e) && t.appendChild(e)
            })
        }
        var l = "A",
            f = 0;
        return this.support = function() {
            return !0
        }, this.render = function(t, d, p, v) {
            d.code = n.parse(d.code, p, v);
            var h, g, m, y, w = d.documentWrite ? a(e, t) : t,
                E = e.createElement("div");
            for (E.innerHTML = l + d.code, m = f + 1; m < E.childNodes.length; m++)
                if (h = E.childNodes.item(m), g = 1 === h.nodeType ? h.getElementsByTagName("script") : [], o(h)) {
                    for ("SCRIPT" === h.tagName.toUpperCase() && E.replaceChild(s(h), h), y = 0; y < g.length; y++) g[y].parentElement.replaceChild(s(g[y]), g[y]);
                    "STYLE" === h.tagName.toUpperCase() && i.setAttribute(h, "nonce", r)
                }
            E.removeChild(E.firstChild), d.documentWrite ? c(E, w) : u(E, w)
        }, this
    };
    i.$inject = ["$document", "$postscribe", "$parser", "$utils", "NONCE_TOKEN"], e.value(t, i), e.service(n, i)
}(window.sevenTag, "RendererAsync", "$rendererAsync"),
function(e, t) {
    var n = function() {
        return Array.prototype.slice.call(arguments)
    };
    n.$inject = ["$rendererAsync"], e.service("$renderersCollection", n);
    var i = function(e, t) {
        return new e(t)
    };
    i.$inject = ["RendererChain", "$renderersCollection"],
        e.service(t, i)
}(window.sevenTag, "$renderer"),
function(e, t) {
    var n = function(e, t, n, i, r, o, a) {
        function s(e, t, n, i) {
            e.resolved.then(function(a) {
                a === !0 && (o.render(t, e, n, i), r.debug())
            })
        }
        var c = 5,
            u = function(e, t) {
                return n.handle(e, t)
            };
        return this.handle = function(n, l) {
            var f = new e(document.body),
                d = t.guid(),
                p = i.resolve(n, u(l, d)),
                v = !1;
            r.push({
                dataLayerElement: t.clone(l, c),
                variableCollection: t.clone(u(l, d), c),
                tags: t.clone(p)
            }), r.debug();
            for (var h = 0; h < p.length; h++) {
                var g = p[h];
                r.isEnabled() && g.disableInDebugMode || (a.isPromise(g.resolved) ? (v = !0, s(g, f, u(l, d), d)) : g.resolved === !0 && (v = !0, o.render(f, g, u(l, d), d)))
            }
            return l.eventCallback && l.eventCallback(l, v, r.breakpoints.isEnabled()), !l.skipExtendSession
        }, this
    };
    n.$inject = ["Element", "$utils", "$variablesManager", "$resolver", "$debugger", "$renderer", "Promise"], e.service(t, n)
}(window.sevenTag, "$pushEventHandler"),
function(e, t) {
    var n = function(e, t, n) {
        function i(n, i, s) {
            var c = !0;
            if (void 0 === i || null === i) return c;
            if (e.isFunction(i)) try {
                var u = o(t.getAll());
                i.call(u)
            } catch (l) {} else if (e.isArray(i)) {
                if (e.isString(i[0])) {
                    var f = i[0].split("."),
                        d = i.slice(1);
                    r(f, d)
                }
            } else if (e.isObject(i)) {
                var p = a(i);
                p ? c = s.handle(n, i) : t.set(i)
            }
            return c
        }

        function r(n, i) {
            var r, o, a = {},
                s = t.getAll();
            if (0 !== n.length) {
                if (1 === n.length) r = n[0], r && s.hasOwnProperty(r) && (o = s[r].value);
                else {
                    var c = n.shift();
                    r = n.pop(), c && s.hasOwnProperty(c) && (a = e.getObjectByPath(s[c].value, n), a && (o = a[r]))
                }
                try {
                    a && o && o.apply(a, i)
                } catch (u) {}
            }
        }

        function o(e) {
            var t = {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var i = e[n];
                    t[i.name] = i.value
                }
            return t
        }

        function a(e) {
            return e && e.event && "string" == typeof e.event ? e.event : void 0
        }
        return this.handle = function(e, t, r) {
            for (var o = !1; t.length > 0;) {
                var a = t.shift();
                o = i(e, a, r) || o
            }
            o && n.extend()
        }, this
    };
    n.$inject = ["$utils", "$variablesManager", "$session"], e.service(t, n)
}(window.sevenTag, "$pushHandler"),
function(e, t, n) {
    function i(e, t, n, i, r, o, a) {
        function s() {
            var e = [].slice.call(arguments, 0);
            for (f.apply(u, e); u.length > c;) u.shift();
            var t = e.slice(0);
            t.unshift(o), r.emit.apply(r, t), n.handle(a.clone(l), e, i)
        }
        var c = 300;
        e[t] = e[t] || [];
        var u = e[t] || [],
            l = e.sevenTag.tagTree || {},
            f = u.push;
        return u.push = s, u
    }
    i.$inject = ["$window", "$dataLayerName", "$pushHandler", "$pushEventHandler", "$emitter", "$dataLayerPushEventName", "$utils"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "DataLayer", "$dataLayer"),
function(e, t, n) {
    function i(t, n, i, r) {
        function o() {
            return [{
                event: "stg.domReady",
                start: (new Date).getTime()
            }, {
                event: "stg.pageView",
                start: (new Date).getTime()
            }, {
                event: "stg.pageLoad",
                start: (new Date).getTime()
            }]
        }

        function a(e) {
            var n = t.filter(e, function(e) {
                return e.isAllowed() && !t.contains(f, e.id())
            });
            return t.map(n, function(e) {
                return e.id()
            })
        }

        function s(n) {
            var i;
            return !n || !n.length || n.length < 1 ? [] : (i = a(n), f = f.concat(i), t.filter(e.tagTree, function(e) {
                return t.contains(i, r.recognize(e))
            }))
        }

        function c(e) {
            return t.filter(e, function(e) {
                var t, n, i, r;
                if (!e.triggers) return !0;
                for (i = 0; i < e.triggers.length; i++)
                    for (t = e.triggers[i], r = 0; r < t.conditions.length; r++)
                        if (n = t.conditions[r], n.action === l && n.variable === u) return !1;
                return !0
            })
        }
        var u = "View within session",
            l = "is_not_first_visit",
            f = [];
        return this.force = function(e, t) {
            var r;
            f = f.concat(t), r = s(e), r = c(r), r.length < 1 || n.handle(r, o(), i)
        }, this
    }
    i.$inject = ["$utils", "$pushHandler", "$pushEventHandler", "$privacyComplianceTypeRecognizer"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceForcedPageView", "$privacyComplianceForcedPageView"),
function(e, t, n) {
    var i = function(e, t) {
        function n(n) {
            var i = e.getElementById(n);
            t.exists(i) && t.exists(i.parentElement) && i.parentElement.removeChild(i)
        }
        return this.close = function(e, i) {
            i = t.getEvent(i), t.preventDefault(i), n(e), n(e + "_styles")
        }, this
    };
    i.$inject = ["$document", "$utils"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceCloseHandler", "$privacyComplianceCloseHandler"),
function(e, t, n) {
    function i(e, t, n, i, r) {
        return this.get = function(o) {
            function a(e) {
                s.consents[e.id()] = {
                    status: e.status(),
                    historyId: e.historyId()
                }
            }
            var s = {
                visitorId: i.getOrGenerateVisitorId(),
                websiteId: n,
                hostname: t.hostname,
                event: "consent_change",
                consents: {},
                cookies: r.getCookieString()
            };
            return e.forEach(i.all(), a), e.forEach(o, a), s
        }, this
    }
    i.$inject = ["$utils", "$location", "$websiteId", "$privacyComplianceConsentRegistry", "$cookie"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceDataProvider", "$privacyComplianceDataProvider"),
function(e, t, n) {
    function i(e, t, n, i) {
        var r = "ppms_cm",
            o = {
                SECTION: "." + r + "_card_section",
                CHOICE: "." + r + "_consent_switcher"
            },
            a = "checked",
            s = "data-consent-type";
        return this.collect = function(r) {
            var c = e.querySelectorAll("#" + r + " " + o.SECTION),
                u = new Date,
                l = i().configuration,
                f = t.getKeyValue(l, "templates.extended_consent_form.templateHistory", {}),
                d = [new n("intro", (void 0), u, f.intro)];
            return t.forEach(c, function(e) {
                var i = e.querySelector(o.CHOICE),
                    r = e.getAttribute(s),
                    c = new n(r, 1 * t.contains(i.className.split(" "), a), u, f[r]);
                d.push(c)
            }), d
        }, this
    }
    i.$inject = ["$document", "$utils", "PrivacyComplianceConsent", "$privacyComplianceConfiguration"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceConsentCollectorExtended", "$privacyComplianceConsentCollectorExtended"),
function(e, t, n) {
    function i(e, t, n) {
        return this.collect = function(i) {
            var r = n().configuration,
                o = t.getKeyValue(r, "templates.simple_consent_form.configuration.consentType"),
                a = t.getKeyValue(r, "templates.simple_consent_form.templateHistory." + o);
            return [new e(o, 1 * i.getAttribute("value"), new Date, a)]
        }, this
    }
    i.$inject = ["PrivacyComplianceConsent", "$utils", "$privacyComplianceConfiguration"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceConsentCollectorSimple", "$privacyComplianceConsentCollectorSimple"),
function(e, t, n) {
    function i(e, t, n, i) {
        return this.send = function(r, o) {
            var a = o.collect(r),
                s = i.get(a);
            return new t(function(t, i) {
                e.sendRequest({
                    url: n,
                    method: e.method().POST,
                    data: s,
                    headers: [
                        ["Content-Type", "application/json"]
                    ]
                }, function() {
                    t(a)
                }, function(e) {
                    i({
                        errorMessage: e,
                        consents: a
                    })
                })
            })
        }, this
    }
    i.$inject = ["$http", "Promise", "$consentCollectUrl", "$privacyComplianceDataProvider"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceTracker", "$privacyComplianceTracker"),
function(e, t, n) {
    function i(e, t, n, i, r) {
        function o() {
            switch (!0) {
                case e.matchMedia("only screen and (max-width: 320px)").matches:
                    return "mobile-sm";
                case e.matchMedia("only screen and (max-width: 480px)").matches:
                    return "mobile-lg";
                default:
                    return ""
            }
        }
        return this.appendStyles = function(e, t) {
            i.append(e, t)
        }, this.createWrapper = function(e, i, o) {
            var a, s, c = t.createElement("div");
            for (o = o || [], n.forEach(o, function(e) {
                    n.addClass(c, e)
                }), n.detectStyleSupport("display", "flex") || n.addClass(c, "no-flex"), n.inlineSvg() || n.addClass(c, "no-inline-svg"), a = 8; a <= 11; a++)
                if (n.isIE(a)) {
                    n.addClass(c, "ie" + a);
                    break
                }
            return c.setAttribute("id", e), c.insertAdjacentHTML("beforeend", i), n.getKeyValue(r(), "configuration.settings.powered_by_enabled", !0) === !1 && (s = c.querySelector(".ppms_cm_footer"), null !== s && s.parentNode.removeChild(s)), c
        }, this.addMobileClass = function(e) {
            var t = o();
            t && n.addClass(e, t)
        }, this.addOnClickListener = function(e, t, i) {
            var r = t.querySelector(e);
            n.addEventListener(r, "click", i)
        }, this
    }
    i.$inject = ["$window", "$document", "$utils", "$styleAppender", "$privacyComplianceConfiguration"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceConsentCommon", "$privacyComplianceConsentCommon"),
function(e, t, n) {
    function i(t, n, i, r) {
        function o() {
            return n.map(r.all(), function(e) {
                return e.id()
            })
        }
        return this.all = function() {
            var r = [];
            return n.exists(t.sevenTagSync) && n.exists(t.sevenTagSync.tagTree) && (r = t.sevenTagSync.tagTree), n.unique(n.map(n.filter(e.tagTree.concat(r), i.isTracking), i.recognize))
        }, this.getNew = function() {
            var e = this.all(),
                t = o();
            return n.filter(e, function(e) {
                return !n.contains(t, e)
            })
        }, this
    }
    i.$inject = ["$window", "$utils", "$privacyComplianceTypeRecognizer", "$privacyComplianceConsentRegistry"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceTypes", "$privacyComplianceTypes", "$privacyComplianceConsentRegistry"),
function(e, t, n) {
    function i(e, t, n, i, r, o) {
        function a() {
            return n.keyExists(d, "templates.extended_consent_form_success_note.html") && n.keyExists(d, "templates.extended_consent_form_success_note.styles") && n.keyExists(d, "templates.extended_consent_form_success_note.configuration.enabled")
        }

        function s(e) {
            i.close(u, e)
        }
        var c = "ppms_cm",
            u = c + "_consent_popup_" + r,
            l = u + "_styles",
            f = {
                OVERLAY: "." + c + "_popup_overlay",
                CLOSE_POPUP: "#" + c + "_close-popup",
                OK_BUTTON: "#ppms_consent_form_success_note_button"
            },
            d = {};
        return this.renderSuccessNote = function() {
            var n, i;
            d = t().configuration, a() && (i = d.templates.extended_consent_form_success_note, i.configuration.enabled && (n = o.createWrapper(u, i.html), o.addOnClickListener(f.CLOSE_POPUP, n, s), o.addOnClickListener(f.OK_BUTTON, n, s), o.appendStyles(l, i.styles), o.addMobileClass(n.querySelector(f.OVERLAY)), e.body.appendChild(n)))
        }, this
    }
    i.$inject = ["$document", "$privacyComplianceConfiguration", "$utils", "$privacyComplianceCloseHandler", "$websiteId", "$privacyComplianceConsentCommon"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceConsentPopupNotifications", "$privacyComplianceConsentPopupNotifications"),
function(e, t, n) {
    function i(e) {
        function t(e) {
            g.DROP_DOWN = "." + e.DROP_DOWN, g.LABEL = "." + e.LABEL, g.LIST = "." + e.LIST, g.ITEM = "." + e.ITEM, g.NATIVE_SELECT = "select", m.LIST_EXPANDED = e.LIST_EXPANDED, m.ITEM_ACTIVE = e.ITEM_ACTIVE, h = new RegExp("\\b" + e.ITEM + "|" + e.DROP_DOWN + "\\b")
        }

        function n(e, t) {
            var n, i, r = e.querySelector(g.LIST);
            for (n = 0; n < r.children.length; ++n)
                if (i = r.children[n], i.getAttribute("data-value") === t) return i;
            return null
        }

        function i(t, n) {
            n = e.getEvent(n), n.relatedTarget && n.relatedTarget.className.toString().match(h) || (y = setTimeout(function() {
                p(t)
            }, 5))
        }

        function r() {
            y && (clearTimeout(y), y = null)
        }

        function o(e, t) {
            var n, i, r = e.querySelector(g.LIST);
            for (n = 0; n < r.children.length; ++n) i = r.children[n], 8 !== i.nodeType && a(e, i, t)
        }

        function a(t, n, o) {
            c(t, n), e.addEventListener(n, "mousedown", function(i) {
                i = e.getEvent(i), (0 === i.button || e.isIE(8) && 1 === i.button) && u(t, n, o)
            }), e.addEventListener(n, "keydown", function(i) {
                var r;
                switch (i = e.getEvent(i), i.code || i.key || i.keyCode) {
                    case "Enter":
                    case 13:
                    case "Space":
                    case "Spacebar":
                    case " ":
                    case 32:
                        e.preventDefault(i), u(t, n, o);
                        break;
                    case "ArrowUp":
                    case "Up":
                    case 38:
                        e.preventDefault(i), r = e.previousElementSibling(n), r ? r.focus() : e.lastElementChild(n.parentNode).focus();
                        break;
                    case "ArrowDown":
                    case "Down":
                    case 40:
                        e.preventDefault(i), r = e.nextElementSibling(n), r ? r.focus() : e.firstElementChild(n.parentNode).focus()
                }
            }), e.addEventListener(n, "blur", function(e) {
                i(t, e)
            }), e.addEventListener(n, "focusout", function(e) {
                i(t, e)
            }), e.addEventListener(n, "focus", r), e.addEventListener(n, "focusin", r)
        }

        function s(e) {
            var t = document.createElement("select"),
                n = e.querySelector(g.DROP_DOWN);
            return t.setAttribute("aria-hidden", "true"), n.parentElement.appendChild(t), t
        }

        function c(e, t) {
            var n = e.querySelector(g.NATIVE_SELECT),
                i = document.createElement("option");
            i.setAttribute("value", t.getAttribute("data-value")), i.setAttribute("label", t.innerHTML), i.innerHTML = t.innerHTML, n.appendChild(i)
        }

        function u(t, n, i) {
            var r, o, a;
            n && (a = t.querySelector(g.NATIVE_SELECT), a.value = n.getAttribute("data-value"), l(t, n), r = t.querySelector(g.LABEL), null === r ? (r = t.querySelector(g.DROP_DOWN).childNodes[0], o = e.trim(n.innerHTML), "undefined" != typeof r.textContent ? r.textContent = o : "undefined" != typeof r.data ? r.data = o : "undefined" != typeof r.nodeValue && (r.nodeValue = o)) : r.innerHTML = n.innerHTML, p(t), i(n.getAttribute("data-value")))
        }

        function l(t, n) {
            var i, r, o = t.querySelector(g.LIST);
            for (i = 0; i < o.children.length; ++i) r = o.children[i], 8 !== r.nodeType && e.removeClass(r, m.ITEM_ACTIVE);
            e.addClass(n, m.ITEM_ACTIVE)
        }

        function f(t) {
            var n = t.querySelector(g.DROP_DOWN);
            return e.hasClass(n, m.LIST_EXPANDED)
        }

        function d(t) {
            var n = t.querySelector(g.DROP_DOWN);
            e.addClass(n, m.LIST_EXPANDED)
        }

        function p(t) {
            var n = t.querySelector(g.DROP_DOWN);
            e.removeClass(n, m.LIST_EXPANDED)
        }

        function v(t) {
            var n = t.querySelector(g.DROP_DOWN);
            e.toggleClass(n, m.LIST_EXPANDED)
        }
        var h, g = {},
            m = {},
            y = null;
        return this.init = function(a, c, l, h) {
            var m, y;
            t(c), y = s(a), m = a.querySelector(g.DROP_DOWN), o(a, h), u(a, n(a, l), function() {}), e.addEventListener(y, "change", function(t) {
                var i;
                t = e.getEvent(t), i = e.getEventTarget(t), u(a, n(a, i.value), h)
            }), e.addEventListener(m, "mousedown", function(t) {
                t = e.getEvent(t), (0 === t.button || e.isIE(8) && 1 === t.button) && v(a)
            }), e.addEventListener(m, "focus", function() {
                r(), d(a)
            }), e.addEventListener(m, "focusin", function() {
                r(), d(a)
            }), e.addEventListener(m, "blur", function(e) {
                i(a, e)
            }), e.addEventListener(m, "focusout", function(e) {
                i(a, e)
            }), e.addEventListener(m, "keydown", function(t) {
                switch (t = e.getEvent(t), t.code || t.key || t.keyCode) {
                    case "ArrowDown":
                    case "Down":
                    case 40:
                        e.preventDefault(t), d(a), a.querySelector(g.ITEM).focus();
                        break;
                    case "Tab":
                    case 9:
                        t.shiftKey ? p(a) : f(a) && (e.preventDefault(t), a.querySelector(g.ITEM).focus());
                        break;
                    case "Enter":
                    case 13:
                    case "Space":
                    case "Spacebar":
                    case " ":
                    case 32:
                        e.preventDefault(t), v(a)
                }
            })
        }, this
    }
    i.$inject = ["$utils"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceDropDown", "$privacyComplianceDropDown"),
function(e, t, n) {
    function i(e, t, n, i) {
        function o(t, n) {
            var i, o = t.querySelector("." + s.LIST),
                a = 1;
            for (r = r || o.children[0].cloneNode(!0); o.children.length;) o.removeChild(o.children[o.children.length - 1]);
            e.forOwn(n, function(e, t) {
                i = r.cloneNode(!0), i.setAttribute("data-value", t), i.setAttribute("id", i.getAttribute("id").replace(/_\d+$/, "_" + a++)), "undefined" != typeof i.textContent ? i.textContent = n[t][t] : "undefined" != typeof i.innerText ? i.innerText = n[t][t] : i.innerHTML = n[t][t], o.appendChild(i)
            })
        }
        return this.init = function(r, c) {
            var u = n.getLanguage(),
                l = r.querySelector(a);
            if (l) {
                if (e.getObjectKeys(i).length < 2) return void l.parentNode.removeChild(l);
                o(l, i, u), t.init(l, s, u, function(e) {
                    n.setLanguage(e), c()
                })
            }
        }, this
    }
    var r, o = "ppms_cm_language_select",
        a = "." + o + "_wrapper",
        s = {
            DROP_DOWN: o + "_btn",
            LABEL: o + "_btn span",
            LIST: o + "_extendable",
            LIST_EXPANDED: "expanded",
            ITEM: o + "_extendable_item",
            ITEM_ACTIVE: o + "_extendable_item-active"
        };
    i.$inject = ["$utils", "$privacyComplianceDropDown", "$privacyComplianceLanguage", "$privacyComplianceLanguages"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceLanguagePicker", "$privacyComplianceLanguagePicker"),
function(e, t, n) {
    function i(e) {
        return this.init = function(t) {
            function n(t) {
                t = e.getEvent(t), (0 === t.button || e.isIE(8) && 1 === t.button) && (e.forEach(i, function(t) {
                    e.toggleClass(t, a)
                }), e.toggleClass(s, a))
            }
            var i = t.querySelectorAll(o),
                s = t.querySelector(r);
            0 !== i.length && e.forEach(i, function(t) {
                e.addEventListener(t, "mousedown", n)
            })
        }, this
    }
    var r = "#ppms_cm_popup_wrapper",
        o = "[data-content-expander]",
        a = "expanded";
    i.$inject = ["$utils"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceExpander", "$privacyComplianceExpander"),
function(e, t, n) {
    function i(e) {
        return this.init = function(t) {
            var n = t.querySelector(r);
            n && e.addEventListener(n, "scroll", function() {
                0 === n.scrollTop ? e.addClass(n, "top") : e.removeClass(n, "top"), n.scrollHeight - n.scrollTop <= n.clientHeight ? e.addClass(n, "bottom") : e.removeClass(n, "bottom")
            })
        }, this
    }
    var r = "#ppms_cm_popup_wrapper";
    i.$inject = ["$utils"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceScrollPositionDetector", "$privacyComplianceScrollPositionDetector"),
function(e, t, n) {
    function i(e, t, n, i, r, o, a, s, c, u, l, f, d, p) {
        function v(e) {
            return n.exists(e) && n.exists(e.length) && e.length > 0
        }

        function h() {
            return n.keyExists(A, "templates.simple_consent_form.html") && n.keyExists(A, "templates.simple_consent_form.styles") && n.keyExists(A, "templates.simple_consent_form.configuration.enabled") && n.keyExists(A, "templates.simple_consent_form.configuration.consentType") && n.keyExists(A, "templates.simple_consent_form.templateHistory")
        }

        function g(e, t) {
            return function(r) {
                var o;
                w() || (r = n.getEvent(r), n.preventDefault(r), E(), c.show(c.size().MEDIUM), f.emit(t), o = m(r).collect(), f.emit(d.CONSENTS_WERE_SENT, o, e, u.all()), i.send(T, m(r)).then(function() {
                    c.hide(), y(), l.renderSuccessNote()
                })["catch"](function(e) {
                    c.hide(), n.reportError(e.errorMessage), y()
                }))
            }
        }

        function m(e) {
            var t = n.getEventTarget(e);
            return {
                collect: function(e) {
                    return s.collect(t)
                }
            }
        }

        function y(e) {
            r.close(T, e)
        }

        function w() {
            var t = e.querySelectorAll("#" + T + " .ppms_cm_centered_buttons button.disabled");
            return t.length > 0
        }

        function E() {
            var t = e.querySelectorAll("#" + T + " .ppms_cm_centered_buttons button");
            t.length && n.forEach(t, function(e) {
                n.addClass(e, N)
            })
        }

        function _() {
            f.emit(d.CLOSE_BUTTON_CLICKED)
        }
        var C = this,
            $ = "ppms_cm",
            T = $ + "_consent_popup_" + o,
            b = T + "_styles",
            S = {
                SECTION: "." + $ + "_card_section",
                CHOICE: "." + $ + "_consent_switcher",
                OVERLAY: "." + $ + "_popup_overlay",
                CLOSE_POPUP: "#" + $ + "_close-popup",
                AGREE_BUTTON: "#" + $ + "_agree-to-all",
                DISAGREE_BUTTON: "#" + $ + "_disagree"
            },
            N = "disabled",
            A = {};
        return this.render = function(n, i, r) {
            var o;
            v(n) && (A = t().configuration, o = a.createWrapper(T, A.templates.simple_consent_form.html), p.init(o, function() {
                y(), C.render(n, i)
            }), r = r || i, a.addOnClickListener(S.AGREE_BUTTON, o, g(r, d.AGREE_TO_ALL_CLICKED)), a.addOnClickListener(S.DISAGREE_BUTTON, o, g(r, d.REJECT_ALL_CLICKED)), a.addOnClickListener(S.CLOSE_POPUP, o, y), a.addOnClickListener(S.CLOSE_POPUP, o, _), a.appendStyles(b, A.templates.simple_consent_form.styles), a.addMobileClass(o.querySelector(S.OVERLAY)), e.body.appendChild(o), u.updateStaleCheckpoint())
        }, this.isEnabled = function(e) {
            return A = t().configuration, h() && A.templates.simple_consent_form.configuration.enabled && 1 === e.length && e[0] === A.templates.simple_consent_form.configuration.consentType
        }, this.setNewConsents = function(e) {
            A = t().configuration, u.setNewConsents(e, A.templates.simple_consent_form.templateHistory)
        }, this
    }
    i.$inject = ["$document", "$privacyComplianceConfiguration", "$utils", "$privacyComplianceTracker", "$privacyComplianceCloseHandler", "$websiteId", "$privacyComplianceConsentCommon", "$privacyComplianceConsentCollectorSimple", "$spinner", "$privacyComplianceConsentRegistry", "$privacyComplianceConsentPopupNotifications", "$emitter", "$ppmsEventNames", "$privacyComplianceLanguagePicker"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceConsentPopupSimple", "$privacyComplianceConsentPopupSimple"),
function(e, t, n) {
    function i(e, t, n, i, r, o, a, s, c, u, l, f, d, p, v, h) {
        function g(e) {
            return n.exists(e) && n.exists(e.length) && e.length > 0
        }

        function m(e, t) {
            var i = e.querySelectorAll(x.CONSENT_ITEM);
            return n.forEach(i, function(e) {
                var i = e.getAttribute(D);
                n.contains(t, i) || e.parentNode.removeChild(e)
            }), i.length
        }

        function y(e, t, i) {
            var r = e.querySelectorAll(x.SECTION);
            return i = i || [], n.forEach(r, function(e) {
                var r = e.getAttribute(D);
                n.contains(t, r) ? (a.addOnClickListener(x.CHOICE, e, b(e.querySelector(x.CHOICE))), n.contains(i, r) && e.querySelector(x.CHOICE).click()) : e.parentNode.removeChild(e)
            }), r = e.querySelectorAll(x.SECTION), r.length
        }

        function w(e, t) {
            return function(r) {
                var o;
                $() || (r = n.getEvent(r), n.preventDefault(r), T(), c.show(c.size().MEDIUM), f.emit(t), o = s.collect(I), f.emit(d.CONSENTS_WERE_SENT, o, e, u.all()), i.send(I, s).then(function() {
                    c.hide(), C(), l.renderSuccessNote()
                })["catch"](function(e) {
                    c.hide(), n.reportError(e.errorMessage), C()
                }))
            }
        }

        function E(t) {
            return function(i) {
                var r;
                i = n.getEvent(i), n.preventDefault(i), r = e.querySelectorAll("#" + I + " " + x.CHOICE), r.length && (n.forEach(r, function(e) {
                    n.addClass(e, L)
                }), w(t, d.AGREE_TO_ALL_CLICKED)(i))
            }
        }

        function _(t) {
            return function(i) {
                var r;
                i = n.getEvent(i), n.preventDefault(i), r = e.querySelectorAll("#" + I + " " + x.CHOICE), r.length && (n.forEach(r, function(e) {
                    n.removeClass(e, L)
                }), w(t, d.REJECT_ALL_CLICKED)(i))
            }
        }

        function C(e) {
            r.close(I, e)
        }

        function $() {
            var t = e.querySelectorAll("#" + I + " button.disabled");
            return t.length > 0
        }

        function T() {
            var t = e.querySelectorAll("#" + I + " button");
            t.length && n.forEach(t, function(e) {
                n.addClass(e, P)
            })
        }

        function b(e) {
            return function(t) {
                t = n.getEvent(t), n.preventDefault(t), n.toggleClass(e, L)
            }
        }

        function S(e) {
            var t = {
                all: [],
                checked: []
            };
            return n.forEach(e, function(e) {
                t.all.push(e.id()), e.isAllowed() && t.checked.push(e.id())
            }), t
        }

        function N() {
            f.emit(d.CLOSE_BUTTON_CLICKED)
        }
        var A = this,
            O = "ppms_cm",
            I = O + "_consent_popup_" + o,
            k = I + "_styles",
            x = {
                SECTION: "." + O + "_card_section",
                CHOICE: "." + O + "_consent_switcher",
                OVERLAY: "." + O + "_popup_overlay",
                CONSENT_ITEM: "." + O + "_consent_item",
                CLOSE_POPUP: "#" + O + "_close-popup",
                AGREE_TO_ALL_BUTTON: "#" + O + "_agree-to-all",
                REJECT_ALL_BUTTON: "#" + O + "_reject-all",
                SAVE_BUTTON: "#" + O + "_save-choices"
            },
            L = "checked",
            P = "disabled",
            D = "data-consent-type",
            R = {};
        return this.render = function(n, i, r) {
            var o, c;
            g(n) && (R = t().configuration, o = a.createWrapper(I, R.templates.extended_consent_form.html), p.init(o, function() {
                var e = S(s.collect(I));
                C(), A.render(n, e.checked, i)
            }), v.init(o), h.init(o), c = y(o, n, i), c && (m(o, n), r = r || i, a.addOnClickListener(x.AGREE_TO_ALL_BUTTON, o, E(r)), a.addOnClickListener(x.REJECT_ALL_BUTTON, o, _(r)), a.addOnClickListener(x.SAVE_BUTTON, o, w(r, d.SAVE_CHOICES_CLICKED)), a.addOnClickListener(x.CLOSE_POPUP, o, C), a.addOnClickListener(x.CLOSE_POPUP, o, N), a.appendStyles(k, R.templates.extended_consent_form.styles), a.addMobileClass(o.querySelector(x.OVERLAY)), e.body.appendChild(o), u.updateStaleCheckpoint()))
        }, this.isEnabled = function(e) {
            return R = t().configuration, n.keyExists(R, "templates.extended_consent_form.html") && n.exists(R, "templates.extended_consent_form.styles") && n.exists(R, "templates.extended_consent_form.templateHistory")
        }, this.setNewConsents = function(e) {
            R = t().configuration, u.setNewConsents(e, R.templates.extended_consent_form.templateHistory)
        }, this
    }
    i.$inject = ["$document", "$privacyComplianceConfiguration", "$utils", "$privacyComplianceTracker", "$privacyComplianceCloseHandler", "$websiteId", "$privacyComplianceConsentCommon", "$privacyComplianceConsentCollectorExtended", "$spinner", "$privacyComplianceConsentRegistry", "$privacyComplianceConsentPopupNotifications", "$emitter", "$ppmsEventNames", "$privacyComplianceLanguagePicker", "$privacyComplianceExpander", "$privacyComplianceScrollPositionDetector"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceConsentPopupExtended", "$privacyComplianceConsentPopupExtended"),
function(e, t, n) {
    function i(e, t, n, i, r, o) {
        function a(t) {
            return e.exists(t) && e.exists(t.length) && t.length > 0
        }
        return this.render = function(e, i, r) {
            a(e) && (t.isEnabled(e) ? t.render(e, i) : n.isEnabled(e) && n.render(e, i), o.emit(r))
        }, this.setNewConsents = function(e) {
            a(e) && (t.isEnabled(e) ? t.setNewConsents(e) : n.isEnabled(e) && n.setNewConsents(e))
        }, this
    }
    i.$inject = ["$utils", "$privacyComplianceConsentPopupSimple", "$privacyComplianceConsentPopupExtended", "$privacyComplianceConsentRegistry", "$ppmsEventNames", "$emitter"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceConsentPopup", "$privacyComplianceConsentPopup"),
function(e, t, n) {
    function i(e, t, n, i, r, o, a, s, c) {
        function u() {
            return n.exists(m) && n.exists(m.templates) && n.exists(m.templates.reminder_widget) && n.exists(m.templates.reminder_widget.configuration) && n.exists(m.templates.reminder_widget.configuration.enabled) && n.exists(m.templates.reminder_widget.html) && n.exists(m.templates.reminder_widget.styles)
        }

        function l() {
            return m.templates.reminder_widget.configuration.enabled
        }

        function f() {
            return function(t) {
                var o = e.getElementById(g);
                t = n.getEvent(t), n.preventDefault(t), o || i.render(p(), void 0, c.CONSENT_FORM_VIEW_REMINDER), r.close(h)
            }
        }

        function d(e) {
            return function(t) {
                s.setBarCookie(), r.close(e, t)
            }
        }

        function p() {
            return n.map(s.getNotDecided(), function(e) {
                return e.id()
            })
        }
        var v = "ppms_cm",
            h = v + "_consent_bar_" + o,
            g = v + "_consent_popup_" + o,
            m = {},
            y = h + "_styles",
            w = {
                BAR: ".ppms_cm_consent_bar"
            };
        return this.render = function() {
            if (m = t().configuration, u() && !s.isBarCookie() && l()) {
                var n = a.createWrapper(h, m.templates.reminder_widget.html);
                a.appendStyles(y, m.templates.reminder_widget.styles), a.addOnClickListener("#" + v + "_open-popup", n, f()), a.addOnClickListener("#" + v + "_bar-close-icon", n, d(h)), a.addMobileClass(n.querySelector(w.BAR)), e.body.appendChild(n)
            }
        }, this
    }
    i.$inject = ["$document", "$privacyComplianceConfiguration", "$utils", "$privacyComplianceConsentPopup", "$privacyComplianceCloseHandler", "$websiteId", "$privacyComplianceConsentCommon", "$privacyComplianceConsentRegistry", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceConsentBar", "$privacyComplianceConsentBar"),
function(e, t, n) {
    function i(e, t, n, i) {
        return this.migrate = function() {
            var r = e.all(),
                o = n().configuration,
                a = i.getKeyValue(o, "templates.simple_consent_form.configuration.enabled", !1) ? i.getKeyValue(o, "templates.simple_consent_form.templateHistory", {}) : {},
                s = i.getKeyValue(o, "templates.extended_consent_form.templateHistory", {}),
                c = !1;
            r = i.map(r, function(e) {
                return "undefined" != typeof e.historyId() ? e : (c = !0, new t(e.id(), e.status(), e.updatedAt(), "undefined" != typeof a[e.id()] ? a[e.id()] : s[e.id()]))
            }), c && e.set(r)
        }, this
    }
    i.$inject = ["$privacyComplianceConsentRegistry", "PrivacyComplianceConsent", "$privacyComplianceConfiguration", "$utils"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyComplianceCookieMigration", "$privacyComplianceCookieMigration"),
function(e, t, n) {
    function i(e, t, n) {
        function i(e) {
            var t, n = {};
            for (t = 0; t < e.length; t++) n[e[t].id()] = e[t].status();
            return n
        }

        function r(e) {
            var t, n;
            for (n = 0; n < e.length; n++)(void 0 === t || e[n].updatedAt() > t) && (t = e[n].updatedAt());
            return t
        }
        return this.resolve = function() {
            var o = t.getConsentsWithoutIntro(e.all()),
                a = t.getConsentsWithoutIntro(e.allPrevious()),
                s = r(o);
            return {
                current_state: i(o),
                previous_state: i(a),
                consent_form_language: n.getLanguage(),
                timestamp: void 0 !== s ? s.toString() : void 0
            }
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, i) {
        return new e(t, n, i)
    };
    r.$inject = ["ConsentsResolver", "$privacyComplianceConsentRegistry", "$privacyComplianceConsentFilter", "$privacyComplianceLanguage"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "ConsentsResolver", "$consentsResolver"),
function(e, t, n) {
    function i(e, t, n, i) {
        var r = function(e, t, n, i, r, o, a) {
            return {
                visitorId: e,
                websiteId: t,
                hostname: n,
                event: i,
                email: r,
                userRequestedInfo: o,
                cookies: a
            }
        };
        return this.getFromForm = function(o) {
            return r(n.getOrGenerateVisitorId(), t, e.hostname, o.event.value, o.email.value, o.message.value, i.getCookieString())
        }, this.getFromApi = function(o) {
            return r(n.getOrGenerateVisitorId(), t, e.hostname, o.type, o.email, o.content, o.cookies || i.getCookieString())
        }, this
    }
    i.$inject = ["$location", "$websiteId", "$privacyComplianceConsentRegistry", "$cookie"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyDataSubjectDataProvider", "$privacyDataSubjectDataProvider"),
function(e, t, n) {
    function i(e, t, n) {
        return this.send = function(i) {
            return new t(function(t, r) {
                e.sendRequest({
                    url: n,
                    method: e.method().POST,
                    data: i,
                    headers: [
                        ["Content-Type", "application/json"]
                    ]
                }, t, r)
            })
        }, this
    }
    i.$inject = ["$http", "Promise", "$consentCollectUrl"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyDataSubjectTracker", "$privacyDataSubjectTracker"),
function(e, t, n) {
    function i(e, t, n, i) {
        function r(e, t, n) {
            var i = t.querySelector(e);
            i && (i.onclick = n)
        }

        function o() {
            return n.keyExists(d, "templates.data_subject_request.styles") && n.exists(d, "templates.data_subject_request_confirmation_note.html") && n.exists(d, "templates.data_subject_request_confirmation_note.styles") && n.exists(d, "templates.data_subject_request_failure_note.html") && n.exists(d, "templates.data_subject_request_failure_note.styles")
        }
        var a = "ppms_cm",
            s = {
                WRAPPER: a + "_data_subject_widget__wrapper",
                HIDDEN: a + "_data_subject_widget__hidden",
                SUCCESS: a + "_data_subject_success",
                FAILED: a + "_data_subject_failed"
            },
            c = a + "_data_subject",
            u = c + "_data_subject_note",
            l = c + "_styles",
            f = c + "_form",
            d = {};
        return this.render = function() {
            var r;
            return d = t().configuration, !!o() && (r = e.getElementById(c), n.isIE(8) && n.addClass(r, "ie8"), i.appendStyles(l, d.templates.data_subject_request.styles), i.appendStyles(l, d.templates.data_subject_request_confirmation_note.styles), i.appendStyles(l, d.templates.data_subject_request_failure_note.styles), !0)
        }, this.renderSuccess = function() {
            var t = e.getElementById(c),
                i = e.createElement("div");
            n.addClass(t, s.HIDDEN), n.removeClass(t, s.WRAPPER), i.setAttribute("id", u), i.innerHTML = d.templates.data_subject_request_confirmation_note.html, n.addClass(i, s.FAILED), t.parentNode.insertBefore(i, t), r(".show-data-subject", i, function() {
                i.parentNode.removeChild(i), n.addClass(t, s.WRAPPER), n.removeClass(t, s.HIDDEN), e.getElementById(f).reset()
            })
        }, this.renderFailed = function() {
            var t = e.getElementById(c),
                i = e.createElement("div");
            n.addClass(t, s.HIDDEN), n.removeClass(t, s.WRAPPER), i.setAttribute("id", u), i.innerHTML = d.templates.data_subject_request_failure_note.html, n.addClass(i, s.SUCCESS), t.parentNode.insertBefore(i, t), r(".try-again-data-subject", i, function() {
                i.parentNode.removeChild(i), n.addClass(t, s.WRAPPER), n.removeClass(t, s.HIDDEN)
            })
        }, this
    }
    i.$inject = ["$document", "$privacyComplianceConfiguration", "$utils", "$privacyComplianceConsentCommon"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyDataSubjectRenderer", "$privacyDataSubjectRenderer"),
function(e, t, n) {
    function i(e) {
        var t = "ppms_cm_data_subject_form_input_required",
            n = "ppms_cm_data_subject_form_select_btn",
            i = "ppms_select_component_btn_required",
            r = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
            o = new RegExp(r);
        return this.validate = function(r) {
            var a = !0;
            return "" !== r.email.value && o.test(r.email.value) ? e.removeClass(r.email, t) : (e.addClass(r.email, t), a = !1), "" === r.event.value ? (e.addClass(document.getElementById(n), i), a = !1) : e.removeClass(document.getElementById(n), i), a
        }, this
    }
    i.$inject = ["$utils"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyDataSubjectValidator", "$privacyDataSubjectValidator"),
function(e, t, n) {
    function i(e, t, n, i, r, o) {
        var a = "ppms_cm",
            s = a + "_data_subject";
        return this.render = function() {
            var a = t.getElementById(s);
            return a && i.render() ? void(e.sendUserDataSubjectRequest = function(e) {
                return !!o.validate(e) && (n.send(r.getFromForm(e)).then(i.renderSuccess)["catch"](i.renderFailed), !1)
            }) : void(e.sendUserDataSubjectRequest = function() {})
        }, this
    }
    i.$inject = ["$window", "$document", "$privacyDataSubjectTracker", "$privacyDataSubjectRenderer", "$privacyDataSubjectDataProvider", "$privacyDataSubjectValidator"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyDataSubject", "$privacyDataSubject"),
function(e, t, n) {
    function i(e, t, n, i) {
        function r() {
            return n.keyExists(c, "templates.consent_form_link.styles")
        }
        var o = "ppms_cm",
            a = o + "_privacy_settings",
            s = a + "_styles",
            c = {};
        return this.render = function() {
            var o;
            return c = t().configuration, !!r() && (o = e.getElementById(a), n.isIE(8) && n.addClass(o, "ie8"), i.appendStyles(s, c.templates.consent_form_link.styles), o.style.display = "", !0)
        }, this
    }
    i.$inject = ["$document", "$privacyComplianceConfiguration", "$utils", "$privacyComplianceConsentCommon"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyPrivacySettingsRenderer", "$privacyPrivacySettingsRenderer"),
function(e, t, n) {
    function i(e, t, n, i, r, o, a, s) {
        function c() {
            var e = r.all(),
                n = {
                    all: [],
                    checked: []
                };
            return t.forEach(e, function(e) {
                n.all.push(e.id()), e.isAllowed() && n.checked.push(e.id())
            }), n
        }

        function u(e, t, n) {
            var i = t.querySelector(e);
            i && !i.onclick && (i.onclick = n)
        }
        var l = "ppms_cm",
            f = {
                BUTTON: "#" + l + "_privacy_settings_button"
            },
            d = l + "_privacy_settings",
            p = l + "_consent_popup_" + o;
        return this.render = function() {
            var r = e.getElementById(d);
            r && n.render() && u(f.BUTTON, r, function(n) {
                var r = c(),
                    o = e.getElementById(p);
                n = t.getEvent(n), t.preventDefault(n), o || i.render(r.all, r.checked, a.CONSENT_FORM_VIEW_PRIVACY_POLICY)
            })
        }, this
    }
    i.$inject = ["$document", "$utils", "$privacyPrivacySettingsRenderer", "$privacyComplianceConsentPopup", "$privacyComplianceConsentRegistry", "$websiteId", "$ppmsEventNames", "$emitter"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyPrivacySettings", "$privacyPrivacySettings"),
function(e, t, n) {
    function i(t, n, i, r, o, a, s, c, u, l, f, d, p, v) {
        function h() {
            return o.map(n.getNotAgreed(), function(e) {
                return e.id()
            })
        }

        function g(t) {
            "undefined" == typeof e.privacy && (e.privacy = {}), "undefined" == typeof e.privacy.configuration && (e.privacy.configuration = {}), e.privacy.configuration.templates = t
        }
        return this.handle = function() {
            var e, m;
            if (t)
                if (d) {
                    if (!o.exists(s.consent_manager_privacy_widgets_url)) return;
                    c.sendRequest({
                        url: s.consent_manager_privacy_widgets_url,
                        method: c.method().GET,
                        headers: [
                            ["Content-Type", "application/json"]
                        ]
                    }, function(e) {
                        g(e), u.render(), l.render()
                    }, function(e) {
                        o.reportError("Could not fetch privacy widgets. " + e)
                    })
                } else {
                    if (!o.exists(s.consent_manager_privacy_templates_url)) return;
                    c.sendRequest({
                        url: s.consent_manager_privacy_templates_url,
                        method: c.method().GET,
                        headers: [
                            ["Content-Type", "application/json"]
                        ]
                    }, function(t) {
                        g(t), f.migrate(), u.render(), l.render(), n.getOrGenerateVisitorId(), e = a.getNew(), m = p.get(), e.length > 0 ? (i.render(e, m, v.CONSENT_FORM_VIEW_MAIN), i.setNewConsents(e)) : (n.renewCookie(), n.isStale() ? i.render(h(), void 0, v.CONSENT_FORM_VIEW_MAIN) : n.hasNotDecided() && r.render())
                    }, function(e) {
                        o.reportError("Could not fetch privacy template. " + e)
                    })
                }
        }, this
    }
    i.$inject = ["$privacyComplianceEnabled", "$privacyComplianceConsentRegistry", "$privacyComplianceConsentPopup", "$privacyComplianceConsentBar", "$utils", "$privacyComplianceTypes", "$configuration", "$http", "$privacyPrivacySettings", "$privacyDataSubject", "$privacyComplianceCookieMigration", "$privacyComplianceUserModeEnabled", "$checkedConsents", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "PrivacyCompliance", "$privacyCompliance"),
function(e, t) {
    function n() {
        var e = [],
            t = function(t, n, i) {
                e.push(function() {
                    n.bind(t, i)
                })
            },
            n = function() {
                for (var t = 0; t < e.length; t++) "function" == typeof e[t] && e[t]()
            };
        return {
            addListener: t,
            run: n
        }
    }
    n.$inject = [], e.service(t, n)
}(window.sevenTag, "$eventHandler"),
function(e, t, n) {
    function i(e, t, n) {
        var i = ["google.", "yahoo.", "bing."];
        return this.detect = function() {
            return t.matchMultipleRegexPatterns(i, n.getDomain(e.referrer))
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, i) {
        return new e(t, n, i)
    };
    r.$inject = ["OrganicSearchDetector", "$document", "$utils", "$urlDecoder"], e.service(n, r)
}(window.sevenTag, "OrganicSearchDetector", "$organicSearchDetector"),
function(e, t, n) {
    function i(e, t, n, i) {
        var r = "stg_@campaign_name@",
            o = function() {
                for (var t = 0; t < i.length; t++) {
                    var n = e.get(r.replace("@campaign_name@", i[t]));
                    if (n) return n
                }
                return null
            },
            a = function() {
                for (var o, a = 0; a < i.length; a++) {
                    var s = r.replace("@campaign_name@", i[a]),
                        c = n.getParam(t.search, i[a]);
                    c && (o = c, e.add(s, c))
                }
                return o
            };
        return this.detect = function() {
            return !!this.getCampaignParameterValue()
        }, this.getCampaignParameterValue = function() {
            var e = o();
            return e ? e : a()
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, i, r) {
        return new e(t, n, i, r)
    };
    r.$inject = ["CampaignDetector", "$cookie", "$location", "$urlDecoder", "SUPPORTED_CAMPAIGNS"], e.service(n, r)
}(window.sevenTag, "CampaignDetector", "$campaignDetector"),
function(e, t, n) {
    function i(e) {
        return this.detect = function() {
            return !e.referrer
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t) {
        return new e(t)
    };
    r.$inject = ["DirectDetector", "$document"], e.service(n, r)
}(window.sevenTag, "DirectDetector", "$directDetector"),
function(e, t, n) {
    function i(e, t, n) {
        var i = ["facebook", "twitter", "linkedin", "plus.google", "youtube"];
        return this.detect = function() {
            return t.matchMultipleRegexPatterns(i, n.getDomain(e.referrer))
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, i) {
        return new e(t, n, i)
    };
    r.$inject = ["SocialDetector", "$document", "$utils", "$urlDecoder"], e.service(n, r)
}(window.sevenTag, "SocialDetector", "$socialDetector"),
function(e, t, n) {
    function i(e, t) {
        function n(e, n) {
            return !!e && t.getDomain(e) !== t.getDomain(n)
        }
        return this.detect = function() {
            return n(e.document.referrer, e.location.href)
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n) {
        return new e(t, n)
    };
    r.$inject = ["WebsiteDetector", "$window", "$urlDecoder"], e.service(n, r)
}(window.sevenTag, "WebsiteDetector", "$websiteDetector"),
function(e, t, n) {
    function i(e, t, n, i, a, s, c, u, l) {
        function f() {
            for (var e = h.length, t = {}, n = 0; n < e; n++) h[n].detected && d(h[n], t) && (t = h[n]);
            return t
        }

        function d(e, t) {
            return n.isEmptyObject(t) || t.priority < e.priority
        }

        function p(e) {
            for (var t = h.length, n = 0; n < t; n++)
                if (h[n].priority === e) return h[n];
            return {}
        }

        function v() {
            return l.isVariableUsedInContainer(o)
        }
        var h = [{
                value: "campaign",
                priority: 5,
                detected: i.detect()
            }, {
                value: "organic_search",
                priority: 4,
                detected: a.detect()
            }, {
                value: "social",
                priority: 3,
                detected: s.detect()
            }, {
                value: "website",
                priority: 2,
                detected: c.detect()
            }, {
                value: "direct",
                priority: 1,
                detected: u.detect()
            }],
            g = p(parseInt(t.get(r), 10)),
            m = f();
        return d(m, g) && (g = m), v() && e.setRenewableCookie(r, g.priority), this.detect = function() {
            return g.value
        }, this
    }
    var r = "stg_traffic_source_priority",
        o = "traffic_source";
    e.provider(t, function() {
        return i
    });
    var a = function(e, t, n, i, r, o, a, s, c, u) {
        return new e(t, n, i, r, o, a, s, c, u)
    };
    a.$inject = ["TrafficSource", "$session", "$cookie", "$utils", "$campaignDetector", "$organicSearchDetector", "$socialDetector", "$websiteDetector", "$directDetector", "$variableHandler"], e.service(n, a)
}(window.sevenTag, "TrafficSource", "$trafficSource"),
function(e, t, n) {
    var i = function(e, t, n, i, r) {
        function o() {
            return i.getDomain(t.referrer) !== n.hostname
        }

        function a() {
            return !t.referrer
        }

        function s() {
            return r.isVariableUsedInContainer(l)
        }
        var c = "externalReferrer",
            u = "stg_" + c,
            l = "external_referrer";
        return this.getExternalReferrerValue = function() {
            return a() && e.get(u) ? void e.remove(u) : (o() && s() && e.add(u, t.referrer), e.get(u))
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, i, r, o) {
        return new e(t, n, i, r, o)
    };
    r.$inject = ["ExternalReferrer", "$cookie", "$document", "$location", "$urlDecoder", "$variableHandler"], e.service(n, r)
}(window.sevenTag, "ExternalReferrer", "$externalReferrer"),
function(e, t, n) {
    var i = function(e, t, n, i, r, o) {
        function a(e) {
            return e.split("#")[1]
        }
        var s = "href",
            c = "hostname",
            u = "pathname",
            l = [s, c, u],
            f = "trafficSource",
            d = "externalReferrer",
            p = "protocol",
            v = "parameter",
            h = "query",
            g = "campaign",
            m = "hash";
        return this.get = function(s) {
            return e.contains(l, s.value) ? t[s.value] : s.value === m ? a(t[s.value]) : s.value === g ? o.getCampaignParameterValue() : s.value === d ? r.getExternalReferrerValue() : s.value === p ? t.protocol.substr(0, t.protocol.length - 1) : s.value === v && s.options && s.options.parameter_name ? i.getParam(t.search, s.options.parameter_name) : s.value === v && s.options && s.options.parameterName ? i.getParam(t.search, s.options.parameterName) : s.value === h ? t.search.substr(1) : s.value === f ? n.detect() : s.value
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, r, o, a) {
        return new i(e, t, n, r, o, a)
    };
    r.$inject = ["$utils", "$location", "$trafficSource", "$urlDecoder", "$externalReferrer", "$campaignDetector"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "UrlVariableHandler", "$urlVariableHandler"),
function(e, t, n) {
    var i = "firstVisit",
        r = "returningVisitor",
        o = function(e, t, n) {
            return this.get = function(o) {
                return o.value === i ? n.secondsSinceLastInteraction() : o.value === r ? t.hasVisitedBefore() : e.get(o.value)
            }, this
        };
    e.provider(t, function() {
        return o
    });
    var a = function(e, t, n) {
        return new o(e, t, n)
    };
    a.$inject = ["$cookie", "$returningVisitorDetector", "$lastInteractionDetector"], e.service(n, a), e[n] = e.$injector.get(n)
}(window.sevenTag, "CookieVariableHandler", "$cookieVariableHandler"),
function(e, t, n) {
    var i = 3,
        r = " ",
        o = "css",
        a = "xpath",
        s = function(e, t) {
            function n(n) {
                var i = n.value,
                    r = n.options ? n.options.selector_type || n.options.selectorType : void 0;
                return r === o ? t.getElementsByCssSelector(i) : r === a ? t.getElementsByXPath(i) : [e.getElementById(i)]
            }

            function s(e, n) {
                if (n)
                    if (n.nodeType === i) {
                        var r = t.trim(n.nodeValue);
                        r.length > 0 && e.push(r)
                    } else n.childNodes && t.forEach(n.childNodes, function(t) {
                        s(e, t)
                    })
            }

            function c(e) {
                return t.filter(e || [], t.exists).length > 0
            }
            return this.get = function(e) {
                if (e) {
                    var i = n(e) || [];
                    if (e.options && (e.options.extract_text_content || e.options.extractTextContent)) {
                        var o = [];
                        return t.forEach(i, function(e) {
                            s(o, e)
                        }), o.length > 0 ? o.join(r) : ""
                    }
                    return c(i)
                }
            }, this
        };
    e.provider(t, function() {
        return s
    });
    var c = function(e, t) {
        return new s(e, t)
    };
    c.$inject = ["$document", "$utils"], e.service(n, c), e[n] = e.$injector.get(n)
}(window.sevenTag, "DomElementExtractor", "$domElementExtractor"),
function(e, t) {
    var n = function(e) {
        return this.get = function(t) {
            return e.getObjectByPath(document, t.value || "")
        }, this
    };
    n.$inject = ["$utils"], e.service(t, n), e[t] = e.$injector.get(t)
}(window.sevenTag, "$documentPropertyExtractor"),
function(e, t, n) {
    var i = function(e, t, n, i) {
        function r() {
            function e() {
                n.push({
                    event: "stg.scroll"
                })
            }
            o() > 0 && i.timeout(e, 0)
        }

        function o() {
            return void 0 !== e.pageYOffset ? e.pageYOffset : t.documentElement && t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body && t.body.scrollTop ? t.body.scrollTop : void 0
        }

        function a(e) {
            var n = t.documentElement && t.documentElement.clientHeight || 0,
                i = s(),
                r = Math.max(i - n, 1),
                o = e / r * 100;
            return Math.round(o)
        }

        function s() {
            var e = 1;
            return t.body && (e = Math.max(e, t.body.scrollHeight || 0, t.body.offsetHeight || 0)), t.documentElement && (e = Math.max(e, t.documentElement.clientHeight || 0, t.documentElement.scrollHeight || 0, t.documentElement.offsetHeight || 0)), e
        }
        return e.sevenTag.on("bootstrap", r), this.get = function() {
            var e = o();
            return e = void 0 !== e ? e : 0, {
                px: e,
                "%": a(e)
            }
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, r) {
        return new i(e, t, n, r)
    };
    r.$inject = ["$window", "$document", "$dataLayer", "$utils"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "ScrollVariableHandler", "$scrollVariableHandler"),
function(e, t, n) {
    var i = function(e, t, n) {
        function i(e, t, n) {
            return {
                resolved: e,
                value: n[t.value]
            }
        }

        function r(e, n) {
            return {
                resolved: e,
                value: t.getValue(n.value)
            }
        }

        function o(e, t) {
            return e.event === t
        }
        var a = n + "click",
            s = "Click Element",
            c = ["Click ID", "Click Url", "Click Classes", s],
            u = n + "formSubmit",
            l = ["Form ID", "Form Url", "Form Classes", "Form Name"],
            f = n + "history",
            d = n + "debouncedHistory",
            p = ["History source", "Old history fragment", "History state", "Old history state"],
            v = ["event", "timeOnWebsite", "edge"];
        return this.get = function(t, n) {
            var h;
            return e.contains(c, t.name) ? (t.name === s && (t = {
                name: s,
                value: "element"
            }), i(o(n, a), t, n)) : e.contains(l, t.name) ? i(o(n, u), t, n) : e.contains(p, t.name) ? (h = o(n, f) || o(n, d), i(h, t, n)) : e.contains(v, t.value) ? i(!0, t, n) : r(!0, t)
        }, this
    };
    i.$inject = ["$utils", "$variablesManager", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "DataLayerVariableHandler", "$dataLayerVariableHandler"),
function(e, t, n) {
    var i = Math.pow(2, 53) - 1,
        r = -i,
        o = {
            FLOAT_STRING: /^[+-]?(\d*\.\d+|\d+\.\d*|\d+e\d+|\d+\.\d*e\d+|\d*\.\d+e\d+)$/i,
            NUMERIC_STRING: /^[+-]?(\d+|\d*\.\d+|\d+\.\d*|\d+e\d+|\d+\.\d*e\d+|\d*\.\d+e\d+)$/i,
            BOOL_STRING: /^(true|false)$/i
        },
        a = function() {
            function e(e) {
                return "string" == typeof e && o.FLOAT_STRING.test(e)
            }

            function t(e) {
                return "string" == typeof e && o.NUMERIC_STRING.test(e) && i >= e && r <= e
            }

            function n(e) {
                return "string" == typeof e && o.BOOL_STRING.test(e)
            }
            return this.collect = function(i) {
                var r, o = i.value;
                return r = e(o) ? parseFloat(o) : t(o) ? parseInt(o, 10) : n(o) ? "true" === o.toLowerCase() : o, {
                    resolved: !0,
                    value: r
                }
            }, this
        };
    a.$inject = [], e.provider(t, function() {
        return a
    }), e.service(n, a)
}(window.sevenTag, "ConstantVariableCollector", "$constantVariableCollector"),
function(sevenTag, MODULE_NAME, SERVICE_NAME) {
    var TRUSTED_JS_VARIABLES_FN = "trustedJsVariables",
        TRUSTED_JS_VARIABLES_LAST_RESULT = "trustedJsVariablesLastResult",
        JsVariableEval = function($document, $variables, $utils, NONCE_TOKEN) {
            function insertTrustedEvalScripts(e) {
                function t(e) {
                    return "custom_javascript" === e.type.collector_name || "customJavascript" === e.type.collector_name
                }

                function n(e) {
                    var t = "window.sevenTag";
                    return [t + "." + TRUSTED_JS_VARIABLES_FN + '["' + e.id + '"] = function () {', t + "." + TRUSTED_JS_VARIABLES_LAST_RESULT + " = (" + e.value + ")()", "}"].join("")
                }
                var i = $utils.filter(e, t);
                sevenTag[TRUSTED_JS_VARIABLES_FN] = sevenTag[TRUSTED_JS_VARIABLES_FN] || {}, $utils.forEach(i, function(e) {
                    try {
                        var t = $document.createElement("SCRIPT");
                        $utils.setAttribute(t, "nonce", NONCE_TOKEN), t.type = "text/javascript", t.defer = !1, t.text = n(e), $document.head.appendChild(t)
                    } catch (i) {
                        $utils.reportError(i)
                    }
                })
            }

            function evalAsTrustedScript(e) {
                var t = sevenTag[TRUSTED_JS_VARIABLES_FN];
                if ($utils.exists(t[e.id])) return t[e.id](), sevenTag.trustedJsVariablesLastResult
            }

            function useEval(scriptText) {
                function prepareValidEvalValue(e) {
                    return ";" === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), e
                }
                var evaluatedFunction = eval("0, (" + prepareValidEvalValue(scriptText) + ")");
                return "function" == typeof evaluatedFunction ? evaluatedFunction.call() : evaluatedFunction
            }

            function isEvalAllowed() {
                return !NONCE_TOKEN
            }
            return isEvalAllowed() || insertTrustedEvalScripts($variables()), this.get = function(e) {
                var t;
                try {
                    t = isEvalAllowed() ? useEval(e.value) : evalAsTrustedScript(e)
                } catch (n) {
                    $utils.reportError(n)
                }
                return t
            }, this
        };
    JsVariableEval.$inject = ["$document", "$variables", "$utils", "NONCE_TOKEN"], sevenTag.value(MODULE_NAME, JsVariableEval), sevenTag.service(SERVICE_NAME, JsVariableEval), sevenTag[SERVICE_NAME] = sevenTag.$injector.get(SERVICE_NAME)
}(window.sevenTag, "JsVariableEval", "$jsVariableEval"),
function(e, t, n) {
    function i(e, t) {
        return this.resolve = function() {
            function n(e) {
                var n = t.findById(e);
                return !1 !== n && n.isAllowed()
            }
            return function(t) {
                return e && !n(t) ? 1 : 0
            }
        }, this
    }
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n) {
        return new e(t, n)
    };
    r.$inject = ["AnonymizationResolver", "$privacyComplianceEnabled", "$privacyComplianceConsentRegistry"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "AnonymizationResolver", "$piwikAnonymizationResolver"),
function(e, t, n) {
    var i = function(e, t, n) {
        function i(e) {
            t.timeout(function() {
                r(e)
            }, 1e3 * e)
        }

        function r(t) {
            e.push({
                event: "stg.timer",
                timeOnWebsite: t + " sec",
                skipExtendSession: !0
            })
        }
        return this.listen = function() {
            for (var e = 0; e < n.length; e++) i(n[e])
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n) {
        return new i(e, t, n)
    };
    r.$inject = ["$dataLayer", "$utils", "$timerIntervals"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "TimerListener", "$timerListener"),
function(e, t, n) {
    var i = function(e, t, n, i) {
        function r(e) {
            return e.split("#")[1]
        }

        function o() {
            var t;
            try {
                t = e.state
            } catch (n) {
                t = null
            }
            return t
        }
        var a = i + "history";
        return this.getEvent = function(e) {
            var t = this.getInitialEvent();
            return n.extend(t, e), t.oldHistoryFragment = r(t.oldUrl), t.newHistoryFragment = r(t.newUrl), t
        }, this.getInitialEvent = function() {
            var e = o(),
                n = t.href;
            return {
                event: a,
                historySource: null,
                oldHistoryState: e,
                newHistoryState: e,
                oldUrl: n,
                newUrl: n,
                oldHistoryFragment: r(n),
                newHistoryFragment: r(n)
            }
        }, this
    };
    i.$inject = ["$history", "$location", "$utils", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "HistoryEventFactory", "$historyEventFactory"),
function(e, t, n) {
    var i = function(e, t, n) {
        function i() {
            var t;
            try {
                t = e.state
            } catch (n) {
                t = null
            }
            return t
        }

        function r() {
            var e = t.hash;
            if ("" !== e) return e
        }
        var o = n + "debouncedHistory";
        return this.getEvent = function(e, n) {
            return {
                event: o,
                historySource: n,
                oldUrl: e.newUrl,
                newUrl: t.href,
                oldHistoryFragment: e.newHistoryFragment,
                newHistoryFragment: r(),
                oldHistoryState: e.newHistoryState,
                newHistoryState: i()
            }
        }, this
    };
    i.$inject = ["$history", "$location", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "DebouncedHistoryEventFactory", "$debouncedHistoryEventFactory"),
function(e, t, n) {
    var i = function(e, t, n, i, r, o) {
        function a(t) {
            u = t, e.push(t)
        }

        function s(e) {
            return e.split("#")[0]
        }

        function c() {
            var e;
            try {
                e = t.state
            } catch (n) {
                e = null
            }
            return e
        }
        var u, l = "pushState",
            f = "replaceState",
            d = "popstate",
            p = "hashchange";
        return this.listen = function() {
            var e = t.pushState,
                v = t.replaceState;
            u = n.getInitialEvent(), t.pushState = function() {
                var o = r.clone(c()),
                    s = i.href,
                    u = e.apply(t, arguments);
                return a(n.getEvent({
                    historySource: l,
                    oldHistoryState: o,
                    oldUrl: s
                })), u
            }, t.replaceState = function() {
                var e = r.clone(c()),
                    o = i.href,
                    s = v.apply(t, arguments);
                return a(n.getEvent({
                    historySource: f,
                    oldHistoryState: e,
                    oldUrl: o
                })), s
            }, r.addEventListener(o, d, function(e) {
                a(n.getEvent({
                    historySource: d,
                    oldHistoryState: u.newHistoryState,
                    newHistoryState: e.state,
                    oldUrl: u.newUrl,
                    newUrl: e.target.location.href
                }))
            }), r.addEventListener(o, p, function(e) {
                var t = u.historySource === d && s(u.oldUrl) === s(u.newUrl);
                t || a(n.getEvent({
                    historySource: p,
                    oldHistoryState: u.newHistoryState,
                    oldUrl: u.newUrl,
                    newUrl: e.newURL
                }))
            })
        }, this
    };
    i.$inject = ["$dataLayer", "$history", "$historyEventFactory", "$location", "$utils", "$window"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "HistoryListener", "$historyListener"),
function(e, t, n) {
    var i = function(e, t, n, i, r) {
        function o(t) {
            clearTimeout(c), s = n.getEvent(a, t), c = setTimeout(function() {
                s.oldUrl !== s.newUrl && e.push(s), a = s, s = void 0
            }, p)
        }
        var a, s, c, u = "pushState",
            l = "replaceState",
            f = "popstate",
            d = "hashchange",
            p = 1e3;
        return this.listen = function() {
            var e = t.pushState,
                s = t.replaceState;
            a = n.getEvent({}, null), t.pushState = function() {
                var n = e.apply(t, arguments);
                return o(u), n
            }, t.replaceState = function() {
                var e = s.apply(t, arguments);
                return o(l), e
            }, i.addEventListener(r, f, function() {
                o(f)
            }), i.addEventListener(r, d, function() {
                o(d)
            })
        }, this
    };
    i.$inject = ["$dataLayer", "$history", "$debouncedHistoryEventFactory", "$utils", "$window"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "DebouncedHistoryListener", "$debouncedHistoryListener"),
function(e, t, n) {
    var i = 2,
        r = "data-disable-delay",
        o = ["_blank"],
        a = ["_self", "_parent", "_top", ""],
        s = function(e, t) {
            function n(e, t, n, i) {
                var o = !i,
                    a = t && t.href,
                    c = t.getAttribute("rel") || "",
                    u = t.getAttribute(r);
                return !(!o || !a || s(e) || !n || "ar" === c.toLowerCase() || null !== u)
            }

            function s(e) {
                var t = void 0 !== e.stgWhich ? e.stgWhich : e.which,
                    n = t === i;
                return n || e.shiftKey || e.ctrlKey || e.metaKey
            }

            function c(n, i) {
                var r = e.contains(a, i),
                    s = e.contains(o, i);
                if (!s) {
                    if (r) {
                        var c = i.substring(1);
                        return t.frames ? t.frames[c] : t[c]
                    }
                    return t.frames ? t.frames[i] : void 0
                }
            }

            function u(t, n) {
                var i, r = t.tagName ? t.tagName.toLowerCase() : "";
                return n ? i = o[0] : t.target ? i = t.target : e.contains(["a", "area", "form"], r) && (i = a[0]), i || (i = a[0]), i
            }
            return this.get = function(t, i) {
                return function(r, o, a) {
                    if (r.simulateDefault = r.simulateDefault && n(t, i, o, a), a) return void e.preventDefault(t);
                    if (r.simulateDefault) {
                        var l = s(t),
                            f = u(i, l),
                            d = c(i.href, f);
                        d && d.hasOwnProperty("location") && (e.preventDefault(t), e.timeout(function() {
                            d.location.href = i.href
                        }, r.eventCallbackTimeout))
                    }
                }
            }, this
        };
    e.provider(t, function() {
        return s
    });
    var c = function(e, t) {
        return new s(e, t)
    };
    c.$inject = ["$utils", "$window"], e.service(n, c), e[n] = e.$injector.get(n)
}(window.sevenTag, "LinkClickCallbackFactory", "$linkClickCallbackFactory"),
function(e, t, n) {
    var i = "stgOld",
        r = "stg_sub_",
        o = "submit",
        a = "image",
        s = [],
        c = function(e, t, n) {
            function c(e) {
                return !!e
            }

            function u(t) {
                var n = e.createElement("form");
                n.gtmOldFormSubmit ? n.gtmOldFormSubmit.call(t) : n.submit.call(t)
            }

            function l(e) {
                p(e) && (e = t.filterParent(e, d) || e), e && (e.type === o && v(e), e.type === a && h(e))
            }

            function f(e) {
                var t, n = s.length;
                for (t = 0; t < n; ++t) s[t] && e.appendChild(s[t]);
                return e
            }

            function d(e) {
                return e.type === o
            }

            function p(e) {
                return e && (e.type !== o || e.type !== a)
            }

            function v(t) {
                function n(e) {
                    return e && e.attributes && e.attributes.value ? e.attributes.value.value : "Submit"
                }
                if (t.name) try {
                    var i = e.createElement("input");
                    i.type = "hidden", i.value = n(t), m(t, i, "id"), m(t, i, "name"), s.push(i)
                } catch (r) {}
            }

            function h(t) {
                function i(e) {
                    return void 0 !== e && null !== e
                }

                function r(e) {
                    return e && e.name ? e.name : null
                }
                try {
                    var o = n.get();
                    if (!o || !i(o.x) || !i(o.y)) return;
                    var a = r(t),
                        c = e.createElement("input");
                    c.type = "hidden", c.name = a ? a + ".x" : "x", c.value = o.x;
                    var u = e.createElement("input");
                    u.type = "hidden", u.name = a ? a + ".y" : "y", u.value = o.y, s.push(c), s.push(u)
                } catch (l) {}
            }

            function g(e, t) {
                var n, i = s.length;
                for (n = 0; n < i; ++n) s[n] && e.removeChild(s[n]);
                t && (y(t, "id"), y(t, "name"))
            }

            function m(e, t, n) {
                e[n] && (t[n] = e[n], e[i + n] = e[n], e[n] = r + e[n])
            }

            function y(e, t) {
                e[i + t] && (e[t] = e[i + t]), e[i + t] = void 0
            }
            return this.get = function(e, n, i) {
                return function(r, o, a) {
                    r.simulateDefault = r.simulateDefault && !a && c(o), a ? t.preventDefault(e) : r.simulateDefault && (t.preventDefault(e), t.timeout(function() {
                        l(i), u(f(n)), g(n, i)
                    }, r.eventCallbackTimeout))
                }
            }, this
        };
    e.provider(t, function() {
        return c
    });
    var u = function(e, t, n) {
        return new c(e, t, n)
    };
    u.$inject = ["$document", "$utils", "$lastClickedCursorPositionInsideElement"], e.service(n, u), e[n] = e.$injector.get(n)
}(window.sevenTag, "FormSubmitCallbackFactory", "$formSubmitCallbackFactory"),
function(e, t, n) {
    var i = function(e, t, n, i, r, o) {
        function a() {
            return parseInt(i, 10)
        }
        var s;
        return this.createClickEvent = function(i, o) {
            function c(t) {
                var n = e.SVGAnimatedString;
                return "undefined" != typeof n && t.className instanceof n ? t.className.baseVal : t.className
            }

            function u(e) {
                var i = t.filterParentByTagName(e, ["button", "input"]);
                if (i && ("submit" === i.type || "image" === i.type)) {
                    var r = t.filterParentByTagName(i, ["form"]),
                        o = i.form && i.form.tagName && "form" === i.form.tagName.toLowerCase(),
                        a = i.attributes && i.attributes.form && n.getElementById(i.attributes.form.value);
                    return r || o || a ? i : void 0
                }
            }
            var l = t.filterParentByTagName(o, ["a", "area"]);
            return {
                event: "stg.click",
                simulateDefault: !t.isDefaultPrevented(i),
                element: o,
                elementId: o.id,
                elementClasses: c(o),
                elementUrl: o.href,
                eventCallbackTimeout: a(),
                eventCallback: function() {
                    var e = u(o);
                    e && (s = e);
                    var t = Array.prototype.slice.call(arguments);
                    if (l) {
                        var n = r.get(i, l);
                        return n.apply(void 0, t)
                    }
                }
            }
        }, this.createFormSubmitEvent = function(e, n) {
            var i = n.action;
            return {
                event: "stg.formSubmit",
                simulateDefault: !t.isDefaultPrevented(e),
                element: n,
                elementId: n.id,
                elementClasses: n.className,
                elementUrl: i && i.tagName && n.cloneNode ? n.cloneNode(!1).action : i,
                elementName: n.name,
                eventCallbackTimeout: a(),
                eventCallback: function() {
                    var t = Array.prototype.slice.call(arguments),
                        i = o.get(e, n, s),
                        r = i.apply(void 0, t);
                    return s = void 0, r
                }
            }
        }, this.createScrollEvent = function() {
            return {
                event: "stg.scroll"
            }
        }, this.createLeaveContentListener = function(e) {
            return {
                event: "stg.leaveContent",
                edge: e ? "top" : "any"
            }
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function(e, t, n, r, o, a) {
        return new i(e, t, n, r, o, a)
    };
    r.$inject = ["$window", "$utils", "$document", "DELAY", "$linkClickCallbackFactory", "$formSubmitCallbackFactory"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "DataLayerEventFactory", "$dataLayerEventFactory"),
function(e, t) {
    var n = 1,
        i = 4,
        r = 2,
        o = 1,
        a = 2,
        s = 3,
        c = 20,
        u = function(e, t, u, l, f, d, p, v, h, g) {
            function m(n) {
                if (u.isIE(7) || u.isIE(8))
                    for (var i = document.getElementsByTagName("form"), r = 0; r < i.length; r++) {
                        var o = new e(i[r]);
                        t.addListener("submit", o, n)
                    } else t.addListener("submit", f, n)
            }

            function y(e) {
                for (var t = e, n = 0; n < c; n++)
                    if (t) {
                        if ("a" === String(t.tagName).toLowerCase()) return t;
                        t = t.parentElement
                    }
                return e
            }
            var w;
            return this.handle = function(e) {
                function c(t) {
                    function n(e) {
                        return e.stgWhich === o || e.stgWhich === a
                    }
                    t = "undefined" != typeof t ? t : window.event;
                    var i = "undefined" != typeof t.target ? t.target : t.srcElement,
                        r = y(i);
                    t.stgWhich = C(t), v.set(t, r), r && n(t) && e.push(d.createClickEvent(t, r))
                }

                function E(e) {
                    return "undefined" != typeof e.target ? e.target : e.srcElement
                }

                function _(e) {
                    w = e.button;
                    var t = C(e) === a,
                        n = u.isIE(9) || u.isIE(10) || u.isIE(11);
                    t && n && c(e)
                }

                function C(e) {
                    var t = e.which,
                        c = e.button ? e.button : w;
                    return void 0 === t && ((c & n) > 0 ? t = o : (c & i) > 0 ? t = a : (c & r) > 0 && (t = s)), t
                }

                function $(t) {
                    var n = E(t);
                    n && e.push(d.createFormSubmitEvent(t, n))
                }

                function T() {
                    e.push(d.createScrollEvent())
                }

                function b(t) {
                    t = t ? t : window.event;
                    var n = t.relatedTarget || t.toElement;
                    if (!n) {
                        var i = "undefined" != typeof t.y ? t.y : t.layerY;
                        e.push(d.createLeaveContentListener(i < 10))
                    }
                }
                t.addListener("mousedown", f, _), t.addListener("click", f, c), m($), t.addListener("scroll", l, u.throttle(T, 200)), t.addListener("mouseout", f, b), p.listen(), h.listen(), g.listen(), t.run()
            }, this
        };
    u.$inject = ["Element", "$eventHandler", "$utils", "$windowElement", "$documentElement", "$dataLayerEventFactory", "$timerListener", "$lastClickedCursorPositionInsideElement", "$historyListener", "$debouncedHistoryListener"], e.service(t, u)
}(window.sevenTag, "$listenersHandler"),
function(e, t, n) {
    function i(e, t, n, i, a) {
        function s(t) {
            var r = n.readyState,
                o = "interactive" === r || "complete" === r;
            o ? t() : (e.addListener("readystatechange", i, t), e.addListener("DOMContentLoaded", i, t))
        }

        function c(e) {
            return function() {
                p || (p = !0, e.push({
                    event: "stg.domReady",
                    start: (new Date).getTime()
                }))
            }
        }

        function u(t) {
            var i = "complete" === n.readyState;
            i ? t() : e.addListener("load", a, t)
        }

        function l(e) {
            return function() {
                v || (v = !0, e.push({
                    event: "stg.pageLoad",
                    start: (new Date).getTime()
                }))
            }
        }

        function f(e) {
            if (!(p || d >= r)) {
                ++d;
                try {
                    n.documentElement.doScroll("left"), e()
                } catch (i) {
                    var a = function() {
                        f(e)
                    };
                    t.timeout(a, o)
                }
            }
        }
        var d = 0,
            p = !1,
            v = !1;
        return this.handle = function(e) {
            var n = c(e);
            t.isIE(6) ? f(n) : s(n), e.push({
                event: "stg.pageView",
                start: (new Date).getTime()
            }), u(l(e))
        }, this
    }
    var r = 140,
        o = 50;
    e.provider(t, function() {
        return i
    });
    var a = function(e, t, n, i, r, o) {
        return new e(t, n, i, r, o)
    };
    a.$inject = ["PageViewHandler", "$eventHandler", "$utils", "$document", "$documentElement", "$windowElement"], e.service(n, a)
}(window.sevenTag, "PageViewHandler", "$pageViewHandler"),
function(e, t) {
    function n(e, t, n, i) {
        e.on(n, function() {
            var n = [].slice.call(arguments, 0);
            i.forEach(n, function(n) {
                if ("string" == typeof n.event && 0 === n.event.indexOf(t)) {
                    var r = i.isArray(n.parameters) ? n.parameters : [];
                    r.unshift(n.event), e.emit.apply(e, r)
                }
            })
        })
    }
    n.$inject = ["$emitter", "$externalApiStackNamespace", "$dataLayerPushEventName", "$utils", "$privacyComplianceTypes"], e.service(t, n), e.$injector.get(t)
}(window.sevenTag, "$dataLayerEvents"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function(n, i) {
                try {
                    if (!e.isFunction(n)) throw "You have to specify onSuccess callback: ppms.cm.api('getComplianceTypes', onSuccess, onFailure).";
                    n(t.all())
                } catch (r) {
                    if (!e.isFunction(i)) return void e.reportError(r);
                    i(r)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$privacyComplianceTypes"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "GetComplianceTypes", "$getComplianceTypes"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function(n, i) {
                try {
                    if (!e.isFunction(n)) throw "You have to specify onSuccess callback: ppms.cm.api('getNewComplianceTypes', onSuccess, onFailure).";
                    n(t.getNew())
                } catch (r) {
                    if (!e.isFunction(i)) return void e.reportError(r);
                    i(r)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$privacyComplianceTypes"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "GetNewComplianceTypes", "$getNewComplianceTypes"),
function(e, t, n) {
    function i(e, t, n, i, r) {
        var o = function(t) {
            return e.exists(t) && e.exists(t.content) && e.exists(t.email) && e.exists(t.type)
        };
        return this.factory = function() {
            return function(a, s, c) {
                try {
                    if (!o(a)) throw "Invalid data subject request.";
                    t.send(n.getFromApi(a)).then(function(e) {
                        i.emit(r.DATA_REQUEST_WERE_SENT, e), s(a)
                    })["catch"](function(t) {
                        return e.isFunction(c) ? void c(t) : void e.reportError(t)
                    })
                } catch (u) {
                    if (!e.isFunction(c)) return void e.reportError(u);
                    c(u)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$privacyDataSubjectTracker", "$privacyDataSubjectDataProvider", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "SendDataRequest", "$sendDataRequest"),
function(e, t) {
    function n(e, t, n, i, r) {
        function o(t, n) {
            if (e.indexOf(t, n) === -1) throw "Unknown " + n + " consent type."
        }

        function a(n, i) {
            var r;
            if (!e.exists(n) || !e.isArray(n) || !n.length) throw "No consents provided.";
            r = t.all(), e.forEach(n, function(t) {
                var n;
                if (o(r, t), n = i[t] || null, e.exists(n) && !e.isUUID(n)) throw "History identifier should be valid UUID."
            })
        }
        return this.factory = function() {
            return function(t, i, r) {
                var o = t.history || {},
                    s = t.consents || t;
                try {
                    if (!e.isFunction(i)) throw "You have to specify onSuccess callback: ppms.cm.api('setInitialComplianceSettings', settings, onSuccess, onFailure).";
                    a(s, o), n.setNewConsents(s, o), i(s, o)
                } catch (c) {
                    if (!e.isFunction(r)) return void e.reportError(c);
                    r(c)
                }
            }
        }, this
    }
    n.$inject = ["$utils", "$privacyComplianceTypes", "$privacyComplianceConsentRegistry", "$ppmsEventNames", "$emitter"], e.service(t, n), e.$injector.get(t)
}(window.sevenTag, "$setInitialComplianceSettings"),
function(e, t, n) {
    function i(e, t, n, i, r, o, a, s, c) {
        function u() {
            var n = e.status();
            return delete n.UNKNOWN, t.getObjectValues(n)
        }
        var l = function(e) {
                if (!t.exists(e) || !t.exists(e.consents)) throw "Cannot retrieve consent settings property.";
                if (t.isEmptyObject(e.consents)) throw "Consent settings is empty."
            },
            f = function(e, n, i) {
                if (!t.exists(i.status)) throw "Consent status should be specified.";
                if (t.indexOf(n, i.status) === -1) throw "Unknown " + i + " consent value."
            },
            d = function(n) {
                l(n);
                var i = o.all(),
                    r = u(),
                    a = [],
                    s = new Date;
                return t.forOwn(n.consents, function(n, o) {
                    f(i, r, n);
                    var c = n.historyId || null;
                    if (t.exists(n.historyId) && !t.isUUID(n.historyId)) throw "HistoryId should be valid UUID.";
                    a.push(new e(o, n.status, s, c))
                }), a
            },
            p = function(e) {
                return {
                    collect: function() {
                        return e
                    }
                }
            };
        return this.factory = function() {
            return function(e, o, u) {
                var l, f;
                try {
                    l = n.get(), f = d(e), i.getOrGenerateVisitorId(), s.emit(c.CONSENTS_WERE_SENT, f, l, i.all()), r.send(a, p(f)).then(function(e) {
                        o(e)
                    })["catch"](function(e) {
                        return t.isFunction(u) ? void u(e) : void t.reportError(e)
                    })
                } catch (v) {
                    if (!t.isFunction(u)) return void t.reportError(v);
                    u(v)
                }
            }
        }, this
    }
    i.$inject = ["PrivacyComplianceConsent", "$utils", "$checkedConsents", "$privacyComplianceConsentRegistry", "$privacyComplianceTracker", "$privacyComplianceTypes", "$websiteId", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "SetComplianceSettings", "$setComplianceSettings"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function(n, i) {
                try {
                    if (!e.isFunction(n)) throw "You have to specify onSuccess callback: ppms.cm.api('getComplianceSettings', onSuccess, onFailure).";
                    var r = {};
                    e.forEach(t.all(), function(e) {
                        r[e.id()] = e.asJson()
                    }), n({
                        consents: r
                    })
                } catch (o) {
                    if (!e.isFunction(i)) return void e.reportError(o);
                    i(o)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$privacyComplianceConsentRegistry"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "GetComplianceSettings", "$getComplianceSettings"),
function(e, t) {
    function n(e, t, n, i, r, o) {
        function a() {
            var e = i.all(),
                n = {
                    all: [],
                    checked: []
                };
            return t.forEach(e, function(e) {
                n.all.push(e.id()), e.isAllowed() && n.checked.push(e.id())
            }), n
        }
        var s = "ppms_cm",
            c = s + "_consent_popup_" + n;
        return this.factory = function() {
            return function(n, i) {
                try {
                    var s = a(),
                        u = e.getElementById(c);
                    u || r.render(s.all, s.checked, o.CONSENT_FORM_VIEW_PRIVACY_POLICY), t.isFunction(n) && n(c, s.all, s.checked)
                } catch (l) {
                    if (!t.isFunction(i)) return void t.reportError(l);
                    i(l)
                }
            }
        }, this
    }
    n.$inject = ["$document", "$utils", "$websiteId", "$privacyComplianceConsentRegistry", "$privacyComplianceConsentPopup", "$ppmsEventNames"], e.service(t, n), e.$injector.get(t)
}(window.sevenTag, "$openConsentForm"),
function(e, t, n) {
    function i(e, t, n) {
        return this.factory = function() {
            return function(i, r) {
                try {
                    t.emit(n.AGREE_TO_ALL_CLICKED), e.isFunction(i) && i()
                } catch (o) {
                    if (!e.isFunction(r)) return void e.reportError(o);
                    r(o)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "TrackAgreeToAllClick", "$trackAgreeToAllClick"),
function(e, t, n) {
    function i(e, t, n) {
        return this.factory = function() {
            return function(i, r) {
                try {
                    t.emit(n.CLOSE_BUTTON_CLICKED), e.isFunction(i) && i()
                } catch (o) {
                    if (!e.isFunction(r)) return void e.reportError(o);
                    r(o)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "TrackCloseButtonClick", "$trackCloseButtonClick"),
function(e, t, n) {
    function i(e, t, n) {
        return this.factory = function() {
            return function(i, r) {
                try {
                    t.emit(n.REJECT_ALL_CLICKED), e.isFunction(i) && i()
                } catch (o) {
                    if (!e.isFunction(r)) return void e.reportError(o);
                    r(o)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "TrackRejectAllClick", "$trackRejectAllClick"),
function(e, t, n) {
    function i(e, t, n) {
        return this.factory = function() {
            return function(i, r) {
                try {
                    t.emit(n.SAVE_CHOICES_CLICKED), e.isFunction(i) && i()
                } catch (o) {
                    if (!e.isFunction(r)) return void e.reportError(o);
                    r(o)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "TrackSaveChoicesClick", "$trackSaveChoicesClick"),
function(e, t, n) {
    function i(e, t, n) {
        return this.factory = function() {
            return function(i, r) {
                try {
                    t.emit(n.CONSENT_FORM_VIEW_MAIN), e.isFunction(i) && i()
                } catch (o) {
                    if (!e.isFunction(r)) return void e.reportError(o);
                    r(o)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "TrackMainFormView", "$trackMainFormView"),
function(e, t, n) {
    function i(e, t, n) {
        return this.factory = function() {
            return function(i, r) {
                try {
                    t.emit(n.CONSENT_FORM_VIEW_REMINDER), e.isFunction(i) && i()
                } catch (o) {
                    if (!e.isFunction(r)) return void e.reportError(o);
                    r(o)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "TrackReminderWidgetView", "$trackReminderWidgetView"),
function(e, t, n) {
    function i(e, t, n) {
        return this.factory = function() {
            return function(i, r) {
                try {
                    t.emit(n.CONSENT_FORM_VIEW_PRIVACY_POLICY), e.isFunction(i) && i()
                } catch (o) {
                    if (!e.isFunction(r)) return void e.reportError(o);
                    r(o)
                }
            }
        }, this
    }
    i.$inject = ["$utils", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "TrackPrivacyPolicyLinkView", "$trackPrivacyPolicyLinkView"),
function(e, t, n) {
    function i(e, t, n, i) {
        return this.factory = function() {
            return function(r, o) {
                e.set(r), t.force(r, o), n.emit(i.CONSENT_DECISION_MADE)
            }
        }, this
    }
    i.$inject = ["$privacyComplianceConsentRegistry", "$privacyComplianceForcedPageView", "$emitter", "$ppmsEventNames"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "ConsentsWereSent", "$consentsWereSent"),
function(e, t, n) {
    function i(e, t, n, i) {
        return this.factory = function() {
            return function(r, o, a) {
                var s, c = t.getConsentsWithoutIntro(r),
                    u = t.getConsentsWithoutIntro(a),
                    l = {};
                for (s = 0; s < u.length; s++) l[u[s].id()] = u[s].status();
                var f = {};
                for (s = 0; s < c.length; s++) f[c[s].id()] = c[s].status();
                e.push({
                    event: i + "consentsWereSent",
                    consents: {
                        timestamp: new Date,
                        previous_state: l,
                        current_state: f,
                        consent_form_language: n.getLanguage()
                    }
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "$privacyComplianceConsentFilter", "$privacyComplianceLanguage", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddConsentsWereSentDataLayerEvent", "$addConsentsWereSentDataLayerEvent"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function() {
                e.push({
                    event: t + "consentFormViewMain"
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddConsentFormViewMainDataLayerEvent", "$addConsentFormViewMainDataLayerEvent"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function() {
                e.push({
                    event: t + "consentFormViewReminder"
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddConsentFormViewReminderDataLayerEvent", "$addConsentFormViewReminderDataLayerEvent"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function() {
                e.push({
                    event: t + "consentFormViewPrivacyPolicy"
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddConsentFormViewPrivacyPolicyDataLayerEvent", "$addConsentFormViewPrivacyPolicyDataLayerEvent"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function() {
                e.push({
                    event: t + "agreeToAllClicked"
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddAgreeToAllClickedDataLayerEvent", "$addAgreeToAllClickedDataLayerEvent"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function() {
                e.push({
                    event: t + "rejectAllClicked"
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddRejectAllClickedDataLayerEvent", "$addRejectAllClickedDataLayerEvent"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function() {
                e.push({
                    event: t + "saveChoicesClicked"
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddSaveChoicesClickedDataLayerEvent", "$addSaveChoicesClickedDataLayerEvent"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function() {
                e.push({
                    event: t + "closeButtonClicked"
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddCloseButtonClickedDataLayerEvent", "$addCloseButtonClickedDataLayerEvent"),
function(e, t, n) {
    function i(e, t) {
        return this.factory = function() {
            return function() {
                e.push({
                    event: t + "consentDecisionMade"
                })
            }
        }, this
    }
    i.$inject = ["$dataLayer", "STG_EVENTS_PREFIX"], e.provider(t, function() {
        return i
    }), e.service(n, i)
}(window.sevenTag, "AddConsentDecisionMadeDataLayerEvent", "$addConsentDecisionMadeDataLayerEvent"),
function(e, t) {
    function n(e, t, n, i, r, o, a, s, c, u, l, f, d, p, v, h, g, m, y, w, E, _, C, $, T, b) {
        e.on(t.GET_COMPLIANCE_SETTINGS, a.factory()), e.on(t.CONSENTS_WERE_SENT, n.factory()), e.on(t.CONSENTS_WERE_SENT, u.factory()), e.on(t.GET_COMPLIANCE_TYPES, i.factory()), e.on(t.GET_NEW_COMPLIANCE_TYPES, r.factory()), e.on(t.SET_INITIAL_COMPLIANCE_SETTINGS, c.factory()), e.on(t.SET_COMPLIANCE_SETTINGS, o.factory()), e.on(t.SEND_DATA_REQUEST, s.factory()), e.on(t.OPEN_CONSENT_FORM, l.factory()), e.on(t.CONSENT_FORM_VIEW_MAIN, f.factory()), e.on(t.CONSENT_FORM_VIEW_REMINDER, d.factory()), e.on(t.CONSENT_FORM_VIEW_PRIVACY_POLICY, p.factory()), e.on(t.AGREE_TO_ALL_CLICKED, v.factory()), e.on(t.REJECT_ALL_CLICKED, h.factory()), e.on(t.SAVE_CHOICES_CLICKED, g.factory()), e.on(t.CLOSE_BUTTON_CLICKED, m.factory()), e.on(t.CONSENT_DECISION_MADE, y.factory()), e.on(t.TRACK_AGREE_TO_ALL_CLICK, w.factory()), e.on(t.TRACK_CLOSE_BUTTON_CLICK, E.factory()), e.on(t.TRACK_REJECT_ALL_CLICK, _.factory()), e.on(t.TRACK_SAVE_CHOICES_CLICK, C.factory()), e.on(t.TRACK_MAIN_FORM_VIEW, $.factory()), e.on(t.TRACK_REMINDER_WIDGET_VIEW, T.factory()), e.on(t.TRACK_PRIVACY_POLICY_LINK_VIEW, b.factory())
    }
    n.$inject = ["$emitter", "$ppmsEventNames", "$consentsWereSent", "$getComplianceTypes", "$getNewComplianceTypes", "$setComplianceSettings", "$getComplianceSettings", "$sendDataRequest", "$setInitialComplianceSettings", "$addConsentsWereSentDataLayerEvent", "$openConsentForm", "$addConsentFormViewMainDataLayerEvent", "$addConsentFormViewReminderDataLayerEvent", "$addConsentFormViewPrivacyPolicyDataLayerEvent", "$addAgreeToAllClickedDataLayerEvent", "$addRejectAllClickedDataLayerEvent", "$addSaveChoicesClickedDataLayerEvent", "$addCloseButtonClickedDataLayerEvent", "$addConsentDecisionMadeDataLayerEvent", "$trackAgreeToAllClick", "$trackCloseButtonClick", "$trackRejectAllClick", "$trackSaveChoicesClick", "$trackMainFormView", "$trackReminderWidgetView", "$trackPrivacyPolicyLinkView"], e.service(t, n), e.$injector.get(t)
}(window.sevenTag, "$ppcmEvents"),
function(e, t, n) {
    var i = function(e, t, n, i, r, o, a, s, c, u, l, f, d) {
        function p() {
            var t = e.sevenTag.debugOptions && e.sevenTag.debugOptions.enabled;
            return s.hasParam() || t
        }

        function v(n, i) {
            t.timeout(function() {
                var t = "undefined" != typeof e.sevenTagSync,
                    r = t ? e.sevenTagSync.tagTree : {};
                a.isSync(t), a.start(i, r), n()
            })
        }
        return this.bootstrap = function() {
            function a() {
                var a = t.filter(d.slice(0), function(e) {
                        return "stg.pageView.sync" !== e.event
                    }),
                    c = a.slice(0);
                c.unshift(f), l.emit.apply(l, c), r.handle(t.clone(s), a, o), n.handle(d), i.handle(d), u.expose(d), e.sevenTag.emit("bootstrap")
            }
            var s = e.sevenTag.tagTree || {};
            c.handle(), p() ? v(a, s) : a()
        }, this
    };
    e.provider(t, function() {
        return i
    });
    var r = function(e, t) {
        return new i(e, t)
    };
    i.$inject = ["$window", "$utils", "$pageViewHandler", "$listenersHandler", "$pushHandler", "$pushEventHandler", "$debugger", "$debugParamDetector", "$privacyCompliance", "$externalApiExposer", "$emitter", "$dataLayerPushEventName", "$dataLayer"], e.service(n, r), e[n] = e.$injector.get(n)
}(window.sevenTag, "SevenTag", "$sevenTag"),
function(e) {
    var t = function(e, t, n, i, r, o, a, s, c, u, l, f) {
        e.add("data_layer", function(e, t) {
            return s.get(e, t)
        }).add("dataLayer", function(e, t) {
            return s.get(e, t)
        }).add("constant", l.collect).add("cookie", function(e) {
            return {
                resolved: !0,
                value: i.get(e)
            }
        }).add("url", function(e) {
            return {
                resolved: !0,
                value: n.get(e)
            }
        }).add("document", function(e) {
            return {
                resolved: !0,
                value: "Page Scroll" === e.name ? a.get(e) : o.get(e)
            }
        }).add("custom_javascript", function(e) {
            return {
                resolved: !0,
                value: c.get(e)
            }
        }).add("customJavascript", function(e) {
            return {
                resolved: !0,
                value: c.get(e)
            }
        }).add("dom_element", function(e) {
            return {
                resolved: !0,
                value: r.get(e)
            }
        }).add("domElement", function(e) {
            return {
                resolved: !0,
                value: r.get(e)
            }
        }).add("piwik_anonymization", function() {
            return {
                resolved: !0,
                value: u.resolve()
            }
        }).add("piwikAnonymization", function() {
            return {
                resolved: !0,
                value: u.resolve()
            }
        }).add("random", function() {
            return {
                resolved: !0,
                value: Math.random()
            }
        }).add("consents", function() {
            return {
                resolved: !0,
                value: f.resolve()
            }
        })
    };
    t.$inject = ["$collectorProvider", "$utils", "$urlVariableHandler", "$cookieVariableHandler", "$domElementExtractor", "$documentPropertyExtractor", "$scrollVariableHandler", "$dataLayerVariableHandler", "$jsVariableEval", "$piwikAnonymizationResolver", "$constantVariableCollector", "$consentsResolver"], e.config(t)
}(window.sevenTag);
! function(e) {
    var n = window.sevenTag.$injector.resolve(e);
    n.bootstrap()
}(window.sevenTag.$injector.get("SevenTag"));