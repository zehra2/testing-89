(this["webpackJsonp@livechat/chat-widget"] = this["webpackJsonp@livechat/chat-widget"] || []).push([
    [5], {
        752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "connect", (function() {
                return v
            })), n.d(t, "AmplitudeProvider", (function() {
                return h
            })), n.d(t, "getInstance", (function() {
                return b
            }));
            var i = n(731),
                r = n.n(i),
                o = n(5),
                a = n(251),
                c = n(49),
                u = n(9),
                d = r.a.getInstance(),
                s = function() {
                    return !Math.floor(100 * Math.random())
                },
                v = function(e) {
                    d.init(a.a),
                        function(e) {
                            var t = e.getApplicationState(),
                                n = t.embedded,
                                i = t.mobile;
                            d.setUserProperties({
                                mobile: i,
                                embedded: n,
                                testGroup: u.s(e),
                                shouldPerformTest: u.eb(e)
                            })
                        }(e), s() && d.logEvent("init"), e.on("add_event", (function(e) {
                            var t = e.event;
                            if (s()) {
                                var n = t.properties;
                                n.invitation && n.receivedFirstTime && d.logEvent("invitation", {
                                    uiVersion: "mobile-auto-hide"
                                })
                            }
                        })), Object(o.y)(Object(c.a)(e), Object(o.i)(s), Object(o.j)((function() {
                            return d.logEvent("chatStarted")
                        })))
                },
                l = n(0),
                f = l.createContext(null),
                h = function(e) {
                    var t = e.children;
                    return l.createElement(f.Provider, {
                        value: r.a.getInstance()
                    }, t)
                },
                b = r.a.getInstance
        }
    }
]);