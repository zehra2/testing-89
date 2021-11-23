(this["webpackJsonpaccounts.livechatinc.com"] = this["webpackJsonpaccounts.livechatinc.com"] || []).push([
    [2], {
        128: function(e) {
            e.exports = JSON.parse('{"api":"https://api.livechatinc.com","api_environment":"production","default_region":"dal","amplitude":"841104a62d8040f86beb1b507a0ea8ee","queue_amplitude":"queue.livechatinc.com/app_event","accounts_url":"https://accounts.livechat.com","organization_app":{"client_id":"fcd0a8d5c7223b4230dd930c45677cf0"},"dev_platform":{"api_url":"https://dev-platform.livechatinc.com"},"api_website":"https://api-website.livechatinc.com","default_client_id":"be4ac276b81af255624473a222e1155c","default_redirect_uri":"https://accounts.livechat.com/dispatcher","default_response_type":"code"}')
        },
        129: function(e, t, n) {
            "use strict";
            n.r(t);
            n(88);
            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function(e, t) {
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this),
                        i = n.length >>> 0;
                    if (0 === i) return !1;
                    var a, r, o = 0 | t,
                        c = Math.max(o >= 0 ? o : i - Math.abs(o), 0);
                    for (; c < i;) {
                        if ((a = n[c]) === (r = e) || "number" === typeof a && "number" === typeof r && isNaN(a) && isNaN(r)) return !0;
                        c++
                    }
                    return !1
                }
            }), String.prototype.includes || (String.prototype.includes = function(e, t) {
                return "number" !== typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                value: function(e) {
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var t = Object(this),
                        n = t.length >>> 0;
                    if ("function" !== typeof e) throw new TypeError("predicate must be a function");
                    for (var i = arguments[1], a = 0; a < n;) {
                        var r = t[a];
                        if (e.call(i, r, a, t)) return r;
                        a++
                    }
                },
                configurable: !0,
                writable: !0
            }), n(123);
            var i = n(7),
                a = n.n(i),
                r = n(84),
                o = n.n(r),
                c = n(135),
                u = n(5),
                s = n(60),
                l = n(58),
                d = n(4),
                h = Object(i.lazy)((function() {
                    return Promise.all([n.e(0), n.e(4), n.e(1), n.e(6)]).then(n.bind(null, 405))
                })),
                p = Object(i.lazy)((function() {
                    return Promise.all([n.e(0), n.e(1), n.e(7)]).then(n.bind(null, 404))
                })),
                f = function() {
                    return a.a.createElement(i.Suspense, {
                        fallback: a.a.createElement(i.Fragment, null)
                    }, d.a.isInLoginButtonIframe() ? a.a.createElement(p, null) : a.a.createElement(h, null))
                };
            Element.prototype.remove || (Element.prototype.remove = function() {
                this.parentElement.removeChild(this)
            }), c.a({
                dsn: "".concat("https://f6cba18f0d1c47bcb5a43ea142488277@o35289.ingest.sentry.io/139556"),
                release: "1634042920",
                debug: l.b
            }), u.b((function(e) {
                e.setTag("version", "global")
            })), o.a.render(a.a.createElement(f, null), document.getElementById("root")), window.Accounts = {
                setAgentLogin: function(e) {
                    s.a.set({
                        email: e
                    })
                }
            }
        },
        4: function(e, t, n) {
            "use strict";
            var i = n(9),
                a = n(10),
                r = n(59),
                o = function() {
                    function e() {
                        Object(i.a)(this, e)
                    }
                    return Object(a.a)(e, [{
                        key: "getWindow",
                        value: function() {
                            return window
                        }
                    }, {
                        key: "getPathName",
                        value: function() {
                            return window.location.pathname.substring(1)
                        }
                    }, {
                        key: "getReferrer",
                        value: function() {
                            return this.getWindow().document.referrer
                        }
                    }, {
                        key: "getReferrerHostname",
                        value: function() {
                            var e;
                            try {
                                e = new URL(this.getReferrer())
                            } catch (t) {
                                return ""
                            }
                            return e.hostname
                        }
                    }, {
                        key: "getUrlParam",
                        value: function(e) {
                            try {
                                return decodeURIComponent((new RegExp("[?|&]".concat(e, "=([^&;]+?)(&|#|;|$)")).exec(window.location.search) || [null, ""])[1].replace(/\+/g, "%20")) || void 0
                            } catch (t) {
                                return void(this.getWindow().console && console.error && console.error("Malformed URI param: ".concat(e)))
                            }
                        }
                    }, {
                        key: "getHashParam",
                        value: function(e) {
                            var t = window.location.hash.substring(1).split("&").find((function(t) {
                                return t.split("=")[0] === e
                            }));
                            return t ? decodeURIComponent(t.split("=")[1]) : null
                        }
                    }, {
                        key: "getNthUrlParam",
                        value: function(e) {
                            var t = window.location.pathname.substring(1).split("/");
                            if (!(e < t.length)) return "";
                            try {
                                return decodeURIComponent(t[e])
                            } catch (n) {
                                return t[e]
                            }
                        }
                    }, {
                        key: "getLastUrlParam",
                        value: function() {
                            var e = window.location.pathname.substring(1).split("/");
                            if (!(e.length > 0)) return "";
                            try {
                                return decodeURIComponent(e[e.length - 1])
                            } catch (t) {
                                return e[e.length - 1]
                            }
                        }
                    }, {
                        key: "getRedirectUri",
                        value: function() {
                            return this.getHashParam("redirect_uri") || this.getUrlParam("redirect_uri") || this.getJWTParam("redirect_uri")
                        }
                    }, {
                        key: "getJWTParam",
                        value: function(e) {
                            try {
                                return r.a.parseJwt(this.getHashParam("state"))[e]
                            } catch (t) {
                                return null
                            }
                        }
                    }, {
                        key: "isInLoginButtonFlow",
                        value: function() {
                            return /^login-button\//.test(this.getPathName()) || "button" === this.getUrlParam("flow") || "button" === this.getJWTParam("flow")
                        }
                    }, {
                        key: "currentModuleSupportsIframeHiddenFlow",
                        value: function() {
                            var e = this.getPathName();
                            return !/^billing\//.test(e)
                        }
                    }, {
                        key: "isInLoginButtonPopup",
                        value: function() {
                            return null != this.getWindow().opener && this.isInLoginButtonFlow()
                        }
                    }, {
                        key: "isInLoginButtonIframe",
                        value: function() {
                            return this.getWindow().top !== this.getWindow().self && this.isInLoginButtonFlow() && null != this.getRedirectUri() && this.currentModuleSupportsIframeHiddenFlow()
                        }
                    }, {
                        key: "isInIframe",
                        value: function() {
                            try {
                                return window.self !== window.top
                            } catch (e) {
                                return !0
                            }
                        }
                    }, {
                        key: "closePopupWindow",
                        value: function() {
                            this.getWindow().close()
                        }
                    }, {
                        key: "sendPostMessage",
                        value: function(e) {
                            var t = Object.assign({}, e),
                                n = this.getRedirectUri(),
                                i = this.getUrlParam("state") || this.getHashParam("state");
                            i && (t.state = i), this.isInLoginButtonIframe() ? this.getWindow().parent.postMessage(t, n) : this.isInLoginButtonPopup() && (this.getWindow().opener.postMessage(t, n), this.closePopupWindow())
                        }
                    }]), e
                }();
            t.a = new o
        },
        58: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            }));
            var i = n(9),
                a = n(10),
                r = (n(40), n(4)),
                o = function() {
                    function e() {
                        var t = this;
                        Object(i.a)(this, e), this.backend_address = void 0, this.api = void 0, this.api_environment = void 0, this.default_client_id = void 0, this.default_redirect_uri = void 0, this.default_response_type = void 0, this.client_id = void 0, this.redirect_uri = void 0, this.response_type = void 0, this.organization_id = void 0, this.flow = void 0, this.state = void 0, this.amplitude = void 0, this.queueAmplitude = void 0, this.region = void 0, this.dev_platform = void 0, this.api_website = void 0, this.accounts_url = void 0, this.organization_app = void 0, this.code_challenge = void 0, this.code_challenge_method = void 0, this.setup = function() {
                            var e = n(128);
                            t.backend_address = t.replaceLivechatinc(t.useCurrentOrigin("https://accounts.livechatinc.com")), t.api = e.api, t.api_environment = e.api_environment, t.default_client_id = e.default_client_id, t.default_redirect_uri = encodeURIComponent(e.default_redirect_uri), t.default_response_type = e.default_response_type, t.client_id = r.a.getUrlParam("client_id") || e.default_client_id, t.redirect_uri = r.a.getUrlParam("redirect_uri") || encodeURIComponent(e.default_redirect_uri), t.response_type = r.a.getUrlParam("response_type") || e.default_response_type, t.organization_id = r.a.getUrlParam("organization_id"), t.flow = r.a.getUrlParam("flow") || null, t.state = r.a.getUrlParam("state"), t.amplitude = e.amplitude, t.queueAmplitude = e.queue_amplitude, t.region = {
                                current: e.default_region,
                                default: e.default_region
                            }, t.readRegionFromUrl(), t.dev_platform = e.dev_platform, t.api_website = e.api_website, t.accounts_url = t.useCurrentOrigin(e.accounts_url), t.organization_app = e.organization_app, t.code_challenge = r.a.getUrlParam("code_challenge") || null, t.code_challenge_method = r.a.getUrlParam("code_challenge_method") || null
                        }, this.replaceLivechatinc = function(e) {
                            return /livechat\.com$/.test(window.location.origin) && /livechatinc\.com$/.test(e) ? e.replace("livechatinc.com", "livechat.com") : e
                        }, this.useCurrentOrigin = function(e) {
                            return e
                        }, this.getApiAddress = function() {
                            return t.api
                        }, this.readRegionFromUrl = function() {
                            var e = r.a.getUrlParam("region");
                            e && t.updateRegion(e)
                        }, this.updateRegion = function(e) {
                            t.regionIsValid(e) && (t.region.current = e, t.region.current === t.region.default ? t.api = t.api.replace(/\/api-[^.]+\./, "/api.") : t.api = t.api.replace("/api.", "/api-".concat(t.region.current, ".")))
                        }, this.regionIsValid = function(e) {
                            return /^[a-zA-Z0-9-]{2,8}$/.test(e)
                        }, this.setup()
                    }
                    return Object(a.a)(e, [{
                        key: "isProduction",
                        value: function() {
                            return !0
                        }
                    }]), e
                }();
            t.a = new o;
            var c = !1
        },
        59: function(e, t, n) {
            "use strict";
            var i = n(9),
                a = n(10),
                r = function() {
                    function e() {
                        Object(i.a)(this, e), this.submitPost = function(e, t) {
                            var n = document.createElement("form");
                            n.setAttribute("method", "POST"), n.setAttribute("action", e), Object.keys(t).forEach((function(e) {
                                var i = document.createElement("input");
                                i.setAttribute("type", "hidden"), i.setAttribute("name", e), i.setAttribute("value", t[e]), n.appendChild(i)
                            })), document.getElementById("root").appendChild(n), n.submit()
                        }, this.oauthQuery = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = [];
                            return n.push("client_id=".concat(encodeURIComponent(e.client_id))), n.push("redirect_uri=".concat(encodeURIComponent(e.redirect_uri))), n.push("response_type=".concat(encodeURIComponent(e.response_type))), e.organization_id && null == t.organization_id && n.push("organization_id=".concat(encodeURIComponent(e.organization_id))), e.flow && n.push("flow=".concat(encodeURIComponent(e.flow))), e.state && n.push("state=".concat(encodeURIComponent(e.state))), e.code_challenge && n.push("code_challenge=".concat(encodeURIComponent(e.code_challenge))), e.code_challenge_method && n.push("code_challenge_method=".concat(encodeURIComponent(e.code_challenge_method))), Object.keys(t).forEach((function(e) {
                                t[e] && n.push("".concat(e, "=").concat(encodeURIComponent(t[e])))
                            })), n.join("&")
                        }, this.jsonp = function(e, t, n) {
                            window[t] = function(e) {
                                n(e), delete window[t]
                            };
                            var i = document.createElement("script");
                            i.src = e, document.getElementsByTagName("head")[0].appendChild(i)
                        }
                    }
                    return Object(a.a)(e, [{
                        key: "isIE",
                        value: function() {
                            return "ActiveXObject" in window
                        }
                    }, {
                        key: "isOldIE",
                        value: function() {
                            return this.isIE() && !/Edge\/\d+/.test(navigator.userAgent)
                        }
                    }, {
                        key: "isUsingAndroidApp",
                        value: function() {
                            return /LiveChat_Android_App/i.test(navigator.userAgent)
                        }
                    }, {
                        key: "isUsingIOSApp",
                        value: function() {
                            return !(!window.webkit || !window.webkit.messageHandlers.ios)
                        }
                    }, {
                        key: "isUsingMobileApp",
                        value: function() {
                            return this.isUsingAndroidApp() || this.isUsingIOSApp()
                        }
                    }, {
                        key: "getRandomInt",
                        value: function(e, t) {
                            var n = Math.ceil(e),
                                i = Math.floor(t);
                            return Math.floor(Math.random() * (i - n + 1)) + n
                        }
                    }, {
                        key: "zeroPadding",
                        value: function(e, t) {
                            for (var n = "".concat(e); n.length < t;) n = "0".concat(n);
                            return n
                        }
                    }, {
                        key: "centsToDollars",
                        value: function(e) {
                            var t = parseInt(e / 100, 10);
                            return "".concat(t, ".").concat(this.zeroPadding(e % 100, 2))
                        }
                    }, {
                        key: "parseJwt",
                        value: function(e) {
                            var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
                                n = decodeURIComponent(atob(t).split("").map((function(e) {
                                    return "%".concat("00".concat(e.charCodeAt(0).toString(16)).slice(-2))
                                })).join(""));
                            return JSON.parse(n)
                        }
                    }]), e
                }();
            t.a = new r
        },
        60: function(e, t, n) {
            "use strict";
            var i = n(83);
            t.a = new i.a(null, ["email", "name", "password", "autoSubmit"])
        },
        83: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var i = n(9),
                a = n(10),
                r = n(40),
                o = n.n(r),
                c = function() {
                    function e() {
                        Object(i.a)(this, e), this.data = {}
                    }
                    return Object(a.a)(e, [{
                        key: "set",
                        value: function(e) {
                            this.data = Object.assign(this.data, e)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return this.data[e]
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            delete this.data[e]
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return 0 === Object.keys(this.data).length
                        }
                    }, {
                        key: "toObject",
                        value: function() {
                            return Object.assign({}, this.data)
                        }
                    }]), e
                }(),
                u = n(4),
                s = function() {
                    function e(t, n) {
                        Object(i.a)(this, e), this.parent = void 0, this.keys = void 0, this.data = void 0, this.data = new c, this.parent = t, this.keys = n, this.readParams()
                    }
                    return Object(a.a)(e, [{
                        key: "readParams",
                        value: function() {
                            var e = {};
                            null != this.keys && this.keys.forEach((function(t) {
                                var n = u.a.getUrlParam(t) || o.a.get(t);
                                if (n) try {
                                    e[t] = decodeURIComponent(n)
                                } catch (i) {
                                    e[t] = n
                                }
                            })), this.set(e)
                        }
                    }, {
                        key: "toObject",
                        value: function() {
                            return null != this.parent ? Object.assign({}, this.parent.toObject(), this.data.toObject()) : Object.assign({}, this.data.toObject())
                        }
                    }, {
                        key: "set",
                        value: function(e) {
                            null != this.parent && this.parent.set(e);
                            var t = e;
                            null != this.keys && (t = {}, this.keys.forEach((function(n) {
                                null != e[n] && (t[n] = e[n])
                            }))), this.data.set(t)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            if (null != this.parent) {
                                var t = this.parent.get(e);
                                if (null != t) return t
                            }
                            return this.data.get(e)
                        }
                    }, {
                        key: "multiGet",
                        value: function(e) {
                            var t = this,
                                n = {};
                            return e.forEach((function(e) {
                                var i = t.get(e);
                                null != i && (n[e] = i)
                            })), n
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            null != this.parent && this.parent.delete(e), this.data.delete(e)
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            null != this.parent && this.parent.flush(), this.data = new c
                        }
                    }]), e
                }()
        },
        87: function(e, t, n) {
            e.exports = n(129)
        }
    },
    [
        [87, 3, 5]
    ]
]);
//# sourceMappingURL=main.1bf225c3.chunk.js.map