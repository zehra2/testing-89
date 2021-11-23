(this["webpackJsonpaccounts.livechatinc.com"] = this["webpackJsonpaccounts.livechatinc.com"] || []).push([
    [7], {
        404: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return h
            }));
            var a = n(9),
                o = n(10),
                i = n(139),
                u = n(138),
                c = n(7),
                r = n.n(c),
                s = n(209),
                l = n(263),
                p = n(4),
                h = function(t) {
                    Object(i.a)(n, t);
                    var e = Object(u.a)(n);

                    function n() {
                        var t;
                        Object(a.a)(this, n);
                        for (var o = arguments.length, i = new Array(o), u = 0; u < o; u++) i[u] = arguments[u];
                        return (t = e.call.apply(e, [this].concat(i))).state = {}, t.routes = ["signin", "login-button/success", "ooops"], t.calculateRoute = function() {
                            t.setState({
                                route: t.getRoute()
                            })
                        }, t
                    }
                    return Object(o.a)(n, [{
                        key: "getRouteFromUrl",
                        value: function() {
                            var t = p.a.getPathName();
                            return this.routes.find((function(e) {
                                return new RegExp("^".concat(e)).test(t)
                            }))
                        }
                    }, {
                        key: "getRoute",
                        value: function() {
                            return this.getRouteFromUrl() || this.routes[0]
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            window.onpopstate = function() {
                                t.calculateRoute()
                            }, this.calculateRoute()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = p.a.getUrlParam("identity_exception"),
                                e = p.a.getUrlParam("oauth_exception"),
                                n = p.a.getUrlParam("exception_details");
                            switch (this.state.route) {
                                case "login-button/success":
                                    return r.a.createElement(s.a, null);
                                case "ooops":
                                    return r.a.createElement(l.a, {
                                        flow: "button",
                                        identityException: t,
                                        oauthException: e,
                                        exceptionDetails: n
                                    });
                                case "signin":
                                    var a = {};
                                    a.identity_exception = t || "unauthorized", n && (a.exception_details = n), "identity_lost" === a.identity_exception ? p.a.sendPostMessage({
                                        signed_out: !0
                                    }) : p.a.sendPostMessage({
                                        error: a
                                    });
                                    break;
                                default:
                                    return null
                            }
                            return null
                        }
                    }]), n
                }(c.Component)
        }
    }
]);
//# sourceMappingURL=7.6f83b7b8.chunk.js.map