(this["webpackJsonpaccounts.livechatinc.com"] = this["webpackJsonpaccounts.livechatinc.com"] || []).push([
    [1], {
        141: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n(145),
                i = n(7),
                o = n.n(i),
                r = (n(280), n(155)),
                c = n(162),
                s = function(e) {
                    var t = e.caption,
                        n = e.children;
                    return Object(a.b)(o.a.Fragment, null, Object(a.b)("div", {
                        className: "title"
                    }, Object(r.d)() === r.a.HelpDesk && Object(a.b)(c.a, {
                        product: "helpdesk",
                        size: "medium"
                    }), Object(a.b)("div", {
                        className: "font24"
                    }, t), null != n && Object(a.b)("p", {
                        className: "font15"
                    }, n)))
                }
        },
        144: function(e, t, n) {
            "use strict";
            var a = n(267),
                i = n(7),
                o = n.n(i),
                r = n(207),
                c = n.n(r),
                s = n(268),
                u = (n(279), ["disabled", "ghost", "small", "lighter", "form", "color", "onClick", "tabIndex", "children"]);
            t.a = function(e) {
                var t, n = e.disabled,
                    i = e.ghost,
                    r = e.small,
                    l = e.lighter,
                    d = e.form,
                    h = e.color,
                    p = e.onClick,
                    m = e.tabIndex,
                    f = e.children,
                    g = Object(a.a)(e, u);
                switch (Object(s.c)().theme) {
                    case s.a.integration:
                        t = "blue";
                        break;
                    default:
                        t = "red"
                }
                var v = c()("button", h || t, {
                    disabled: n,
                    ghost: i,
                    small: r,
                    lighter: l,
                    form: d
                });
                return o.a.createElement("button", Object.assign({}, g, {
                    className: v,
                    disabled: n,
                    onClick: p,
                    onTouchStart: p,
                    tabIndex: m
                }), o.a.createElement("span", null, f))
            }
        },
        155: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "c", (function() {
                return d
            }));
            var a, i = n(40),
                o = n.n(i),
                r = n(168),
                c = n(4);

            function s(e) {
                switch (e) {
                    case 1:
                        return "LiveChat";
                    case 2:
                        return "HelpDesk";
                    case 3:
                        return "ChatBot";
                    case 4:
                        return "KnowledgeBase";
                    default:
                        return "Undefined"
                }
            }

            function u() {
                var e = a.Undefined,
                    t = c.a.getReferrerHostname();
                return /livechat(inc)?\.com$/.test(t) && !1 === /^accounts/.test(t) ? e = a.LiveChat : /helpdesk\.com$/.test(t) ? e = a.HelpDesk : /chatbot\.com$/.test(t) ? e = a.ChatBot : /knowledgebase\.ai$/.test(t) && (e = a.KnowledgeBase), e === a.Undefined && (e = parseInt(o.a.get("product"), 10) || a.Undefined), (parseInt(o.a.get("product"), 10) || a.Undefined) !== e && (o.a.set("product", e, {
                    expires: 365,
                    sameSite: "strict"
                }), r.a.track("virtualPageView", {
                    productID: s(e)
                })), e
            }

            function l() {
                o.a.remove("product"), window.location = window.location.origin
            }

            function d() {
                o.a.remove("product"), window.location = "".concat(window.location.origin, "?organization_id=choose")
            }! function(e) {
                e[e.Undefined = 0] = "Undefined", e[e.LiveChat = 1] = "LiveChat", e[e.HelpDesk = 2] = "HelpDesk", e[e.ChatBot = 3] = "ChatBot", e[e.KnowledgeBase = 4] = "KnowledgeBase"
            }(a || (a = {}))
        },
        162: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(145),
                i = (n(281), {
                    accounts: {
                        small: {
                            width: "150px",
                            height: "20px"
                        },
                        default: {
                            width: "239px",
                            height: "32px"
                        }
                    },
                    livechat: {
                        default: {
                            width: "70px",
                            height: "16px"
                        },
                        medium: {
                            width: "140px",
                            height: "32px"
                        }
                    },
                    helpdesk: {
                        default: {
                            backgroundSize: "75px 14px",
                            width: "75px",
                            height: "16px"
                        },
                        medium: {
                            backgroundSize: "150px 28px",
                            width: "150px",
                            height: "32px"
                        }
                    },
                    chatbot: {
                        default: {
                            width: "67px",
                            height: "16px"
                        },
                        medium: {
                            width: "134px",
                            height: "32px"
                        }
                    },
                    knowledgebase: {
                        default: {
                            backgroundSize: "111px 14px",
                            width: "111px",
                            height: "16px"
                        },
                        medium: {
                            backgroundSize: "222px 28px",
                            width: "222px",
                            height: "32px"
                        }
                    }
                }),
                o = function(e) {
                    var t = e.size,
                        n = void 0 === t ? "default" : t,
                        o = e.product,
                        r = void 0 === o ? "livechat" : o,
                        c = i[r][n];
                    return c.backgroundSize || (c.backgroundSize = "".concat(c.width, " ").concat(c.height)), Object(a.b)("div", {
                        className: "logo-".concat(r),
                        style: c
                    })
                }
        },
        168: function(e, t, n) {
            "use strict";
            var a = n(142),
                i = n.n(a),
                o = n(143),
                r = n(205),
                c = n(9),
                s = n(10),
                u = function() {
                    function e() {
                        Object(c.a)(this, e), this.dataLayer = window.dataLayer || []
                    }
                    return Object(s.a)(e, [{
                        key: "logEvent",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            this.dataLayer.push(Object(r.a)({
                                event: t,
                                login: e
                            }, n))
                        }
                    }, {
                        key: "track",
                        value: function() {
                            var e = Object(o.a)(i.a.mark((function e(t) {
                                var n, a = this,
                                    o = arguments;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = o.length > 1 && void 0 !== o[1] ? o[1] : {}, e.abrupt("return", new Promise((function(e) {
                                                var i = Object.assign({}, n, {
                                                    event: t,
                                                    eventCallback: e
                                                });
                                                a.dataLayer.push(i)
                                            })));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), e
                }();
            t.a = new u
        },
        169: function(e, t, n) {
            "use strict";
            var a = n(9),
                i = n(10),
                o = n(59),
                r = n(4),
                c = function() {
                    function e() {
                        var t = this;
                        Object(a.a)(this, e), this.widgetLoaded = !1, this.handleContactSupport = function(e) {
                            e && e.preventDefault && e.preventDefault(), t.widgetLoaded ? t.invokeAPIMethod("maximize_chat_window") : window.open("https://www.livechat.com/contact/")
                        }
                    }
                    return Object(i.a)(e, [{
                        key: "init",
                        value: function() {
                            if (this.shouldRenderWidget()) {
                                this.widgetLoaded = !0, window.__lc = window.__lc || {}, window.__lc.license = 1520, window.__lc.hostname = "secure-lc.livechatinc.com";
                                var e = document.createElement("script");
                                e.type = "text/javascript", e.async = !0, e.src = "".concat("https:" === document.location.protocol ? "https://" : "http://", "cdn.livechatinc.com/staging/tracking.js"), document.body.appendChild(e)
                            }
                        }
                    }, {
                        key: "shouldRenderWidget",
                        value: function() {
                            return !(r.a.isInLoginButtonPopup() || r.a.isInIframe() || o.a.isUsingMobileApp() || "consent" === r.a.getPathName())
                        }
                    }, {
                        key: "invokeAPIMethod",
                        value: function(e) {
                            "maximize_chat_window" === e && window.LC_API.open_chat_window()
                        }
                    }]), e
                }();
            t.a = new c
        },
        209: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n(9),
                i = n(10),
                o = n(139),
                r = n(138),
                c = n(7),
                s = n.n(c),
                u = n(4),
                l = function(e) {
                    Object(o.a)(n, e);
                    var t = Object(r.a)(n);

                    function n() {
                        return Object(a.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(i.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.conditionsPassed() && (u.a.getUrlParam("code") ? u.a.sendPostMessage({
                                data: {
                                    code: u.a.getUrlParam("code"),
                                    state: u.a.getUrlParam("state")
                                }
                            }) : u.a.sendPostMessage({
                                data: {
                                    access_token: u.a.getHashParam("access_token"),
                                    scopes: u.a.getHashParam("scope"),
                                    expires_in: u.a.getHashParam("expires_in"),
                                    state: u.a.getHashParam("state"),
                                    token_type: u.a.getHashParam("token_type")
                                }
                            }))
                        }
                    }, {
                        key: "conditionsPassed",
                        value: function() {
                            return u.a.isInLoginButtonPopup() || u.a.isInLoginButtonIframe()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.conditionsPassed() ? null : s.a.createElement("div", null, "You cannot open this page directly.")
                        }
                    }]), n
                }(c.Component)
        },
        263: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var a = n(9),
                i = n(10),
                o = n(139),
                r = n(138),
                c = n(7),
                s = n.n(c),
                u = n(155),
                l = n(144),
                d = n(169),
                h = n(4),
                p = n(141),
                m = function(e) {
                    Object(o.a)(n, e);
                    var t = Object(r.a)(n);

                    function n() {
                        return Object(a.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(i.a)(n, [{
                        key: "loginButtonAppError",
                        value: function() {
                            var e = {};
                            return this.props.identityException && (e.identity_exception = this.props.identityException), this.props.oauthException && (e.oauth_exception = this.props.oauthException), this.props.exceptionDetails && (e.exception_details = this.props.exceptionDetails), h.a.sendPostMessage({
                                error: e
                            }), null
                        }
                    }, {
                        key: "classicAppError",
                        value: function() {
                            var e, t;
                            switch (this.props.oauthException) {
                                case "invalid_request":
                                    e = "The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.";
                                    break;
                                case "unauthorized_client":
                                    e = "The client is not authorized to request a token using this method.";
                                    break;
                                case "access_denied":
                                    e = "The resource owner or authorization server denied the request.";
                                    break;
                                case "unsupported_response_type":
                                    e = "The authorization server does not support obtaining a token using this method.";
                                    break;
                                case "invalid_scope":
                                    e = "The requested scope is invalid, insufficient, unknown or malformed.";
                                    break;
                                case "server_error":
                                    e = "The authorization server encountered an unexpected condition that prevented it from fulfilling the request.";
                                    break;
                                case "temporarily_unavailable":
                                    e = "The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server.";
                                    break;
                                case "unsupported_grant_type":
                                    e = "The authorization grant type is not supported by the authorization server.";
                                    break;
                                case "invalid_grant":
                                    e = "The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.";
                                    break;
                                case "invalid_client":
                                    e = "Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method)."
                            }
                            switch (this.props.exceptionDetails) {
                                case "client_id_not_found":
                                    t = "wrong client id, client id does not exists";
                                    break;
                                case "redirect_uri_not_set":
                                    t = "client misconfiguration, client has not set redirect uri";
                                    break;
                                case "invalid_redirect_uri":
                                    t = "redirect uri is not one of client's allowed redirects"
                            }
                            return s.a.createElement("div", {
                                className: "form"
                            }, s.a.createElement(p.a, {
                                caption: "Ooops!"
                            }, "There was a problem with signing in to your account. Clicking ", s.a.createElement("strong", null, "Sign in again"), " will clean up your session and get you to the application.", s.a.createElement("br", null)), s.a.createElement("p", null, s.a.createElement(l.a, {
                                onClick: u.b
                            }, "Sign in again")), e && s.a.createElement("div", {
                                className: "ooops-details font15"
                            }, s.a.createElement("p", null, "Technical description you can send us to help us resolve this problem:"), s.a.createElement("pre", null, s.a.createElement("p", null, e), t && s.a.createElement("p", null, "Exception details: ", s.a.createElement("span", {
                                className: "ooops-details__exception-details"
                            }, t)))), s.a.createElement("div", {
                                className: "login-with-google"
                            }, s.a.createElement("span", {
                                className: "login-with-google__or"
                            }, s.a.createElement("span", {
                                className: "font15"
                            }, "or")), s.a.createElement("p", null, " ", s.a.createElement("span", {
                                className: "fake-link",
                                onClick: d.a.handleContactSupport
                            }, "Contact us"), " ", "if the problem persists.")))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return "button" === this.props.flow ? this.loginButtonAppError() : this.classicAppError()
                        }
                    }]), n
                }(s.a.Component)
        },
        268: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "c", (function() {
                return h
            }));
            var a, i = n(265),
                o = n(7),
                r = n.n(o),
                c = n(4),
                s = function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !1
                    }
                },
                u = function(e, t) {
                    if (!s()) return !1;
                    var n = "string" !== typeof t ? JSON.stringify(t) : t;
                    try {
                        return window.sessionStorage.setItem(e, n), !0
                    } catch (a) {
                        return !1
                    }
                };
            ! function(e) {
                e.default = "default", e.integration = "integration"
            }(a || (a = {}));
            var l = Object(o.createContext)({
                    theme: a.default,
                    setTheme: function(e) {}
                }),
                d = function(e) {
                    var t = e.children,
                        n = function(e) {
                            if (!s()) return null;
                            try {
                                var t = window.sessionStorage.getItem(e);
                                try {
                                    return JSON.parse(t)
                                } catch (n) {
                                    return t
                                }
                            } catch (n) {
                                return null
                            }
                        }("accounts_theme");
                    n || u("accounts_theme", a[c.a.getUrlParam("theme")] || a.default);
                    var o = r.a.useState(a[c.a.getUrlParam("theme")] || n || a.default),
                        d = Object(i.a)(o, 2),
                        h = d[0],
                        p = d[1];
                    return r.a.createElement(l.Provider, {
                        value: {
                            theme: h,
                            setTheme: function(e) {
                                u("accounts_theme", e), p(e)
                            }
                        }
                    }, t)
                },
                h = function() {
                    return Object(o.useContext)(l)
                }
        },
        279: function(e, t, n) {},
        280: function(e, t, n) {},
        281: function(e, t, n) {}
    }
]);
//# sourceMappingURL=1.a0c1eaee.chunk.js.map