(this["webpackJsonp@livechat/chat-widget"] = this["webpackJsonp@livechat/chat-widget"] || []).push([
    [2], {
        144: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            }));
            var r = n(1),
                a = n(0),
                i = n(252),
                o = n.n(i),
                c = n(2),
                l = n(13),
                s = Array.prototype.map,
                u = ["A", "UL", "OL", "LI", "STRONG", "EM", "BR"],
                d = new i.Renderer;
            d.list = function(e, t, n) {
                var r = n;
                return e.replace(m, (function() {
                    return t ? r++ + ". " : "- "
                }))
            }, d.listitem = function(e) {
                return "" + m + e
            };
            var m = "%list-item%",
                b = function(e) {
                    return e.replace(/\n+$/, "")
                };

            function f(e) {
                var t = o()(e, {
                        renderer: d
                    }),
                    n = (new DOMParser).parseFromString(t, "text/html").body;
                return n ? b(n.textContent || "") : ""
            }
            t.a = function(e) {
                var t, n, i = e.template,
                    m = e.root,
                    f = e.preserveLists,
                    p = e.limit,
                    h = null != (t = null == m ? void 0 : m.props) ? t : {},
                    g = null != (n = null == m ? void 0 : m.component) ? n : a.Fragment,
                    v = a.useMemo((function() {
                        var e = new DOMParser,
                            t = b(o()(i, f ? {
                                renderer: d
                            } : {})),
                            n = e.parseFromString(t, "text/html").body;
                        return n ? function(e, t) {
                            var n = 0,
                                i = !1;
                            return function e(o) {
                                return s.call(o, (function(o, s) {
                                    if ("#text" === o.nodeName) return t ? i ? null : o.textContent && o.textContent.length + n < t ? (n += o.textContent.length, o.textContent) : (i = !0, Object(c.lb)(t - n, o.textContent)) : o.textContent;
                                    if (!Object(c.D)(o.nodeName, u)) return o.hasChildNodes() ? e(o.childNodes) : null;
                                    var d = Object(r.a)({
                                        key: s
                                    }, o.hasChildNodes() && {
                                        children: e(o.childNodes)
                                    });
                                    if ("A" === o.nodeName) {
                                        var m = o.getAttribute("href");
                                        if (!m || Object(l.k)(m)) return e(o.childNodes);
                                        /\S+@\S+\.\S+/.test(m) || Object(l.g)(m) || (m = "https://" + m);
                                        var b = Object(r.a)({}, d, {
                                            href: m,
                                            target: "_blank",
                                            rel: "nofollow noopener"
                                        });
                                        return a.createElement("a", b)
                                    }
                                    return a.createElement(o.nodeName.toLowerCase(), d)
                                }))
                            }(e)
                        }(n.childNodes, p) : ""
                    }), [i, f, p]);
                return a.createElement(g, h, v)
            }
        },
        326: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(2),
                a = n(35),
                i = function(e) {
                    var t = e.allowAutoplay,
                        n = e.allowVideoConferencing,
                        i = e.allowClipboardWrite,
                        o = [];
                    if (t && !Object(a.d)() && o.push("autoplay;"), n) {
                        var c = {
                            "display-capture *;": !Object(a.b)() || Object(a.a)() >= 94,
                            "picture-in-picture *;": "PictureInPictureEvent" in window,
                            "fullscreen *;": "function" === typeof Element.prototype.requestFullscreen
                        };
                        o = [].concat(o, ["microphone *;", "camera *;"], Object.keys(Object(r.db)(Boolean, c)))
                    }
                    return i && !Object(a.d)() && o.push("clipboard-write *;"), o.join(" ")
                }
        },
        327: function(e, t, n) {
            "use strict";
            var r = n(1),
                a = n(8),
                i = n(0),
                o = n(7),
                c = n(68),
                l = ["M181.18 103.421H238.128V89.1388H198.435V17.1462H181.18V103.421Z", "M246.429 103.421H263.195V39.3312H246.429V103.421ZM245.07 22.5837C245.178 25.0948 246.252 27.4671 248.067 29.2056C249.883 30.9442 252.299 31.9147 254.812 31.9147C257.326 31.9147 259.742 30.9442 261.557 29.2056C263.372 27.4671 264.446 25.0948 264.554 22.5837C264.611 21.269 264.401 19.9564 263.937 18.725C263.473 17.4936 262.765 16.3689 261.854 15.4185C260.944 14.4681 259.851 13.7119 258.641 13.1952C257.431 12.6785 256.128 12.4122 254.812 12.4122C253.496 12.4122 252.194 12.6785 250.984 13.1952C249.773 13.7119 248.68 14.4681 247.77 15.4185C246.86 16.3689 246.151 17.4936 245.687 18.725C245.223 19.9564 245.013 21.269 245.07 22.5837Z", "M328.862 39.3312H312.097L298.303 86.2931L284.492 39.3312H267.727L289.477 103.421H306.967L328.862 39.3312Z", "M358.805 104.907C372.979 104.907 384.452 96.4069 386.663 84.6981H372C370.387 89.1387 365.964 92.8363 358.805 92.8363C349.072 92.8363 345.247 86.2931 345.247 78.7712V77.1763H387.152V65.9569C387.152 50.5506 377.546 37.8631 358.569 37.8631C339.592 37.8631 328.989 50.1881 328.989 67.57V76.3062C328.953 94.25 340.68 104.907 358.805 104.907ZM345.211 64.7244C345.211 56.0969 348.836 49.6988 358.533 49.6988C367.596 49.6988 371.71 55.7344 371.71 63.7456V65.3406H345.211V64.7244Z", "M431.667 105.125C453.417 105.125 466.92 90.335 467.79 72.6994H451.768C450.644 82.4325 444.518 90.9512 431.667 90.9512C417.258 90.9512 411.095 81.0912 411.095 67.28V53.2694C411.095 39.4581 417.258 29.5981 431.667 29.5981C444.482 29.5981 450.644 38.0987 451.768 47.85H467.79C466.92 30.2144 453.49 15.4244 431.667 15.4244C405.658 15.4244 393.949 32.0631 393.949 54.1212V66.4462C393.949 88.5225 405.658 105.125 431.667 105.125Z", "M476.889 103.421H493.655V65.4675C493.655 56.84 498.458 52.3994 505.98 52.3994C514.118 52.3994 517.689 57.71 517.689 65.0869V103.421H534.454V62.3862C534.454 47.2337 525.7 37.8631 511.78 37.8631C503.515 37.8631 496.99 41.4881 493.655 46.9256V13.4487H476.889V103.421Z", "M566.445 104.907C573.84 104.907 581.978 101.826 584.932 97.5125V103.421H601.082V62.5131C601.082 47.5963 590.116 37.8631 574.094 37.8631C560.282 37.8631 550.295 44.515 546.598 56.9669H562.131C563.853 53.505 567.424 50.9313 573.224 50.9313C580.129 50.9313 584.316 55.3538 584.316 61.2806V70.035C579.662 66.4073 573.903 64.4878 568.004 64.5975C552.597 64.5975 542.121 71.0138 542.121 84.9338C542.157 97.3856 552.017 104.907 566.445 104.907ZM570.759 93.815C563.726 93.815 558.434 90.3712 558.434 84.4444C558.434 78.5175 563.364 75.3819 571.248 75.3819C578.77 75.3819 584.316 78.7169 584.316 84.4444C584.316 90.1719 578.117 93.815 570.759 93.815Z", "M632.492 103.421H644.074V89.8637H637.205C632.764 89.8637 631.169 88.1419 631.169 83.955V52.8887H644.853V39.3312H631.169V21.8406H614.367V39.3312H605.305V52.8887H614.367V85.1875C614.367 96.5337 620.077 103.421 632.492 103.421Z"],
                s = Object(o.z)("svg", {
                    target: "e1lie4030"
                })("height:", (function(e) {
                    var t = e.height;
                    return void 0 === t ? 13 : t
                }), "px;max-width:", (function(e) {
                    var t = e.maxWidth;
                    return void 0 === t ? 58 : t
                }), "px;position:relative;top:", (function(e) {
                    return "smooth" === e.theme.name ? "2px" : "1px"
                }), ";", (function(e) {
                    return !e.noMargin && "margin-left: 4px"
                }), ";");
            t.a = function(e) {
                var t = e.height,
                    n = e.maxWidth,
                    o = e.noMargin,
                    u = Object(a.a)(e, ["height", "maxWidth", "noMargin"]),
                    d = Object(c.g)().colors.brand,
                    m = d.orange,
                    b = d.black;
                return i.createElement(s, Object(r.a)({
                    "aria-labelledby": "livechat-logo-label",
                    viewBox: "0 0 645 145",
                    fill: "none",
                    height: t,
                    maxWidth: n,
                    noMargin: o
                }, u), i.createElement("title", {
                    id: "livechat-logo-label"
                }, "livechat"), i.createElement("path", {
                    d: "M144.096 90.1356C143.359 98.7467 139.392 106.76 132.991 112.567C126.589 118.373 118.228 121.542 109.586 121.438H90.5545L54.3045 145V121.438L90.5545 97.875H109.622C112.32 97.9725 114.954 97.0425 116.993 95.2729C119.032 93.5033 120.323 91.026 120.606 88.3413C121.714 70.2301 121.623 52.0654 120.334 33.9663C120.116 31.552 119.036 29.2968 117.292 27.6129C115.548 25.929 113.257 24.9288 110.836 24.795C98.4752 24.0338 85.4614 23.5625 72.4295 23.5625C59.3977 23.5625 46.3839 23.9975 34.0227 24.8675C31.6022 25.0013 29.3107 26.0015 27.5669 27.6854C25.8231 29.3693 24.7434 31.6245 24.5252 34.0387C23.2361 52.1379 23.1452 70.3026 24.2533 88.4137C24.5532 91.0854 25.8518 93.545 27.8887 95.2996C29.9256 97.0542 32.5504 97.9741 35.237 97.875H54.3045V121.438H35.2733C26.641 121.523 18.2952 118.343 11.9087 112.535C5.52217 106.727 1.56695 98.7192 0.835792 90.1175C-0.362946 70.7996 -0.272119 51.4233 1.10767 32.1175C1.79276 24.1116 5.31632 16.6141 11.0427 10.9774C16.7691 5.34078 24.3213 1.93607 32.337 1.3775C45.242 0.453125 58.8358 0 72.4295 0C86.0233 0 99.617 0.453125 112.522 1.3775C120.562 1.92172 128.141 5.32939 133.884 10.9825C139.626 16.6355 143.153 24.1596 143.824 32.19C145.201 51.4777 145.292 70.8358 144.096 90.1356Z",
                    fill: m
                }), l.map((function(e, t) {
                    return i.createElement("path", {
                        key: t,
                        d: e,
                        fill: b
                    })
                })))
            }
        },
        728: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return d
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "a", (function() {
                return j
            })), n.d(t, "c", (function() {
                return w
            }));
            var r = n(1),
                a = n(8),
                i = n(21),
                o = n(4),
                c = n(725);

            function l() {
                var e = Object(i.a)(["\n\t&-enter,\n\t&-appear {\n\t\topacity: 0;\n\t\ttransform: translateY(8px);\n\t}\n\n\t&-enter-active,\n\t&-appear-active {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t\ttransition: opacity 100ms ease-in, transform 200ms ease-in;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransform: translateY(8px);\n\t\ttransition: opacity 100ms ease-in, transform 200ms ease-in;\n\t}\n"]);
                return l = function() {
                    return e
                }, e
            }
            var s = function(e) {
                    return Object(o.c)("transition-delay:", e, "ms;")
                },
                u = function(e) {
                    return e(l())
                },
                d = function(e) {
                    var t = e.delay,
                        n = void 0 === t ? 0 : t,
                        i = Object(a.a)(e, ["delay"]);
                    return Object(o.d)(o.a, null, (function(e) {
                        var t = e.css;
                        return Object(o.d)(c.a, Object(r.a)({}, i, {
                            timeout: 200 + n,
                            classNames: u(t),
                            css: s(n)
                        }))
                    }))
                },
                m = n(0);

            function b() {
                var e = Object(i.a)(["\n\ttransition-delay: ", "ms;\n\n\t&-enter,\n\t&-appear {\n\t\topacity: 0;\n\t}\n\n\t&-enter-active,\n\t&-appear-active {\n\t\topacity: 1;\n\t\ttransition: opacity 200ms ease-out;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t}\n\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity 200ms ease-out;\n\t}\n"]);
                return b = function() {
                    return e
                }, e
            }
            var f = function(e, t) {
                    return void 0 === t && (t = 0), e(b(), t)
                },
                p = function(e) {
                    var t = e.delay,
                        n = void 0 === t ? 0 : t,
                        i = Object(a.a)(e, ["delay"]);
                    return m.createElement(o.a, null, (function(e) {
                        var t = e.css;
                        return m.createElement(c.a, Object(r.a)({}, i, {
                            timeout: 200 + n,
                            classNames: f(t, n)
                        }))
                    }))
                };
            n(68);

            function h() {
                var e = Object(i.a)(["\n\t&-enter,\n\t&-appear {\n\t\topacity: 0;\n\t\ttransform: translateY(30px);\n\t}\n\n\t&-enter-active,\n\t&-appear-active {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t\ttransition: opacity 300ms ", ", transform 400ms ", ";\n\t}\n"]);
                return h = function() {
                    return e
                }, e
            }
            var g = function(e) {
                    return Object(o.c)("transition-delay:", e, "ms;")
                },
                v = function(e, t) {
                    return e(h(), t.transitions.easings.smooth, t.transitions.easings.smooth)
                },
                j = function(e) {
                    var t = e.delay,
                        n = void 0 === t ? 0 : t,
                        i = Object(a.a)(e, ["delay"]);
                    return Object(o.d)(o.a, null, (function(e) {
                        var t = e.css,
                            a = e.theme;
                        return Object(o.d)(c.a, Object(r.a)({}, i, {
                            timeout: 400 + n,
                            css: g(n),
                            classNames: v(t, a)
                        }))
                    }))
                };

            function O() {
                var e = Object(i.a)(["\n\t&-enter {\n\t\ttransform: translate(-50%, 20%);\n\t\topacity: 0;\n\t}\n\n\t&-enter-active,\n\t&-enter-done {\n\t\ttransition: transform ", "ms ", ",\n\t\t\topacity ", "ms ", ";\n\t\ttransform: translate(-50%, 0%);\n\t\topacity: 1;\n\t}\n\n\t&-exit {\n\t\ttransform: translate(-50%, 0%);\n\t\topacity: 1;\n\t}\n\n\t&-exit-active,\n\t&-exit-done {\n\t\ttransform: translate(-50%, 20%);\n\t\topacity: 0;\n\t\ttransition: transform ", "ms ", ",\n\t\t\topacity ", "ms ease-out 50ms;\n\t}\n"]);
                return O = function() {
                    return e
                }, e
            }
            var y = {
                    enter: 300,
                    exit: 300
                },
                x = function(e, t) {
                    return e(O(), 300, t.transitions.easings.swift, 300, t.transitions.easings.swift, 300, t.transitions.easings.swift, 150)
                },
                w = function(e) {
                    var t = e.nodeRef,
                        n = Object(a.a)(e, ["nodeRef"]);
                    return m.createElement(o.a, null, (function(e) {
                        var a = e.css,
                            i = e.theme;
                        return m.createElement(c.a, Object(r.a)({}, n, {
                            nodeRef: t,
                            classNames: x(a, i),
                            timeout: y
                        }))
                    }))
                }
        },
        729: function(e, t, n) {
            "use strict";
            var r = n(1),
                a = n(0),
                i = n(68),
                o = n(7),
                c = n(2),
                l = n(8),
                s = n(152),
                u = function(e, t, n) {
                    return void 0 === n && (n = []), e.buttons ? Object(r.a)({}, e, {
                        buttons: e.buttons.map((function(e, a) {
                            return Object(r.a)({}, e, {
                                disabled: Object(c.D)(a, n)
                            }, t && {
                                "aria-disabled": "true"
                            })
                        }))
                    }) : e
                },
                d = function(e) {
                    var t = e.card,
                        n = e.disabledButtons,
                        i = e.eventId,
                        o = e.onActionButtonClick,
                        c = e.onShowMoreButtonClick,
                        d = Object(l.a)(e, ["card", "disabledButtons", "eventId", "onActionButtonClick", "onShowMoreButtonClick"]),
                        m = a.useState(!1),
                        b = m[0],
                        f = m[1];
                    return a.useEffect((function() {
                        if (b) {
                            var e = setTimeout((function() {
                                f(!1)
                            }), 1e3);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [b]), a.createElement(s.b, Object(r.a)({
                        card: u(t, b, n),
                        onButtonClick: function(e) {
                            b || (f(!0), o({
                                button: t.buttons[e],
                                event: i
                            }))
                        },
                        onShowMoreButtonClick: c
                    }, d))
                },
                m = n(221),
                b = function(e) {
                    var t, n, o = Object(i.g)();
                    return o && "modern" === o.name && (t = 150, n = 250), a.createElement(m.a, Object(r.a)({
                        maxWidth: t,
                        maxHeight: n
                    }, e))
                },
                f = n(45);
            var p = Object(o.z)("span", {
                    target: "e1vbunaw0"
                })({
                    name: "1nadnbu",
                    styles: "font-size:2.5em"
                }),
                h = function(e) {
                    var t = e.event,
                        n = e.radiusType;
                    return a.createElement(o.c, {
                        radiusType: n
                    }, a.createElement(o.m, null, a.createElement(p, null, a.createElement(f.a, null, t.properties.text))))
                },
                g = n(222),
                v = n(38),
                j = n(199),
                O = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Object(v.a)(t, e);
                    var n = t.prototype;
                    return n.componentDidUpdate = function(e, t, n) {
                        n && this._messageListContext.scrollToBottom()
                    }, n.getSnapshotBeforeUpdate = function(e) {
                        return !this.shouldRenderPreview(e) && this.shouldRenderPreview() && this._messageListContext.isScrollOnBottom()
                    }, n.shouldRenderPreview = function(e) {
                        return void 0 === e && (e = this.props), Boolean(e.urlPreview.properties.title)
                    }, n.render = function() {
                        var e = this;
                        return a.createElement(o.l, null, (function(t) {
                            e._messageListContext = t;
                            var n = e.props,
                                r = n.urlPreview.properties,
                                i = n.radiusType,
                                l = Object(c.cb)(["url", "link"], r.image);
                            return e.shouldRenderPreview() ? a.createElement(o.c, {
                                radiusType: i
                            }, a.createElement(b, l), a.createElement(o.n, {
                                subtitle: r.description,
                                title: r.title
                            })) : a.createElement(o.c, {
                                radiusType: i
                            }, a.createElement(j.a, {
                                text: r.text
                            }))
                        }))
                    }, t
                }(a.Component),
                y = n(206),
                x = n(28);
            var w = Object(o.z)("div", {
                target: "e1kfksj70"
            })({
                name: "yoe8zv",
                styles: "margin:0;margin-bottom:4px;font-size:1em;font-weight:400"
            });
            t.a = function(e) {
                var t = e.event,
                    n = e.mobile,
                    l = e.radiusType,
                    s = e.disabledButtons,
                    u = e.onActionButtonClick,
                    m = e.onShowMoreButtonClick,
                    f = e.onShow,
                    p = void 0 === f ? c.V : f,
                    v = e.rtl,
                    j = n && !!m;
                Object(x.n)(p);
                var k = Object(i.g)();
                switch (t.type) {
                    case "carousel":
                        return a.createElement(o.e, {
                            dir: v ? "rtl" : "ltr",
                            mobile: n,
                            scrollableElementPadding: k.spaces.space5
                        }, t.properties.cards.map((function(e, n) {
                            return a.createElement(d, {
                                key: n,
                                card: e,
                                horizontalLayout: j,
                                eventId: t.id,
                                disabledButtons: s,
                                onActionButtonClick: u,
                                TitleComponent: w,
                                onShowMoreButtonClick: m
                            })
                        })));
                    case "message":
                    case "message_draft":
                        return a.createElement(g.a, Object(r.a)({}, t.properties, {
                            own: t.own,
                            radiusType: l,
                            draft: "message_draft" === t.type && null === t.serverId,
                            eventId: t.properties.quickReplies && t.id
                        }));
                    case "emoji":
                        return a.createElement(h, {
                            event: t,
                            radiusType: l
                        });
                    case "rich_message":
                        return a.createElement(d, {
                            eventId: t.id,
                            horizontalLayout: j,
                            card: t.properties.card,
                            disabledButtons: s,
                            onActionButtonClick: u,
                            onShowMoreButtonClick: m
                        });
                    case "sticker":
                        return a.createElement(y.a, t.properties);
                    case "url_preview":
                        return a.createElement(O, {
                            radiusType: l,
                            urlPreview: t
                        });
                    case "image_preview":
                        var E = Object(c.cb)(["url", "link", "width", "height", "srcSet", "alternativeText", "name"], t.properties);
                        return a.createElement(b, E)
                }
                return null
            }
        },
        750: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                a = n(0),
                i = n(75),
                o = n(25),
                c = n(28),
                l = n(745),
                s = n(163),
                u = n(3),
                d = "overlay_portal_container",
                m = "tooltip_portal_container",
                b = n(9),
                f = n(1),
                p = n(68),
                h = n(2),
                g = n(7),
                v = n(726),
                j = n(73),
                O = n(138),
                y = n(109),
                x = n(19),
                w = n(728),
                k = n(8),
                E = n(21),
                C = n(725),
                z = function(e, t) {
                    var n = new Date(e);
                    return n.toLocaleDateString() === (new Date).toLocaleDateString() ? t.today(n) : function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() - 1), e.toLocaleDateString() === t.toLocaleDateString()
                    }(n) ? t.yesterday(n) : n.toLocaleDateString([], {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    })
                },
                S = function() {
                    return "IntersectionObserver" in window && "IntersectionObserverEntry" in window
                },
                _ = function(e, t, n) {
                    var r = Object(h.Bb)(t).sort((function(e, t) {
                            return e.timestamp - t.timestamp
                        })),
                        a = Object(h.p)((function(t) {
                            return t.node === e
                        }), r);
                    if (a > -1) return {
                        currentTimestamp: r[a].timestamp,
                        previousTimestamp: a > 0 ? r[a - 1].timestamp : n
                    }
                },
                R = function(e, t) {
                    var n = a.useRef({
                            beginingOfTime: t,
                            currentTimestamp: 0,
                            subscribers: [],
                            dividers: {}
                        }),
                        r = function(e) {
                            var t = e.rootRef,
                                n = e.rootMargin,
                                r = e.threshold,
                                i = e.intersectionHandler;
                            if (S()) {
                                var o = a.useRef(null),
                                    l = a.useRef([]),
                                    s = Object(c.l)(i);
                                return a.useEffect((function() {
                                    return o.current = new IntersectionObserver((function(e, t) {
                                            s.current && s.current(e, t)
                                        }), {
                                            root: t.current,
                                            rootMargin: n,
                                            threshold: r
                                        }), l.current.forEach((function(e) {
                                            return o.current.observe(e)
                                        })), l.current = [],
                                        function() {
                                            return o.current.disconnect()
                                        }
                                }), [n, r, t, s]), Object(c.d)((function() {
                                    return {
                                        add: function(e) {
                                            o.current ? o.current.observe(e) : l.current.push(e)
                                        },
                                        remove: function(e) {
                                            o.current ? o.current.unobserve(e) : l.current = l.current.filter((function(t) {
                                                return t !== e
                                            }))
                                        }
                                    }
                                }))
                            }
                        }({
                            rootRef: e,
                            intersectionHandler: function(e) {
                                var t = function(e, t, n) {
                                    var r = e.filter((function(e) {
                                        return e.isIntersecting
                                    })).sort((function(e, t) {
                                        return e.boundingClientRect.top - t.boundingClientRect.top
                                    }))[0];
                                    if (r) {
                                        var a = _(r.target, t, n);
                                        return a && a.previousTimestamp
                                    }
                                    var i = e.filter((function(e) {
                                        return e.boundingClientRect.top <= e.rootBounds.top
                                    })).sort((function(e, t) {
                                        return e.boundingClientRect.top - t.boundingClientRect.top
                                    })).reverse()[0];
                                    if (i) {
                                        var o = _(i.target, t, n);
                                        return o && o.currentTimestamp
                                    }
                                }(e, n.current.dividers, n.current.beginingOfTime);
                                if (t) {
                                    var r = {
                                        timestamp: t,
                                        direction: t > n.current.currentTimestamp ? "down" : "up"
                                    };
                                    n.current.currentTimestamp = t, n.current.subscribers.forEach((function(e) {
                                        return e(r)
                                    }))
                                }
                            },
                            threshold: .2
                        });
                    return a.useEffect((function() {
                        var e = Object(h.Bb)(n.current.dividers).map((function(e) {
                                return e.timestamp
                            })),
                            t = Math.max.apply(Math, e.concat([n.current.beginingOfTime]));
                        n.current.currentTimestamp = t, n.current.subscribers.forEach((function(e) {
                            return e({
                                timestamp: t,
                                direction: "up"
                            })
                        }))
                    }), []), Object(c.d)((function() {
                        return {
                            add: function(e) {
                                n.current.dividers[e.timestamp] = e, r && r.add(e.node)
                            },
                            remove: function(e) {
                                r && r.remove(e.node), delete n.current.dividers[e.timestamp]
                            },
                            subscribe: function(e) {
                                n.current.subscribers.push(e)
                            },
                            unsubscribe: function(e) {
                                n.current.subscribers = n.current.subscribers.filter((function(t) {
                                    return t !== e
                                }))
                            },
                            setBeginingOfTime: function(e) {
                                n.current.beginingOfTime = e
                            },
                            currentTimestamp: function() {
                                return n.current.currentTimestamp
                            }
                        }
                    }))
                },
                T = a.createContext(null),
                I = function() {
                    return a.useContext(T)
                },
                M = function(e) {
                    var t = e.children,
                        n = e.rootRef,
                        r = e.beginingOfTime,
                        i = R(n, r);
                    return a.useEffect((function() {
                        i.setBeginingOfTime(r)
                    })), a.createElement(T.Provider, {
                        value: i
                    }, t)
                };
            var F = Object(g.z)("span", {
                displayName: "DividerLabel",
                target: "eceo2x80"
            })({
                name: "1rpc86p",
                styles: "padding:4px 8px;font-size:12px;position:relative;padding:0 8px;&:before,&:after{content:'';width:50vw;height:0;border-top:1px solid;border-top-color:inherit;position:absolute;top:50%;}&:before{right:100%;}&:after{left:100%;}"
            });

            function P() {
                var e = Object(E.a)(["\n\t&-enter ", ", &-exit ", " {\n\t\tposition: relative;\n\t}\n\n\t&-enter ", " {\n\t\ttop: ", ";\n\t}\n\t&-enter-active ", " {\n\t\ttop: 0;\n\t\ttransition: top ", "ms ease-out;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t}\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity ", "ms ease-out;\n\t}\n\n\t&-exit ", " {\n\t\ttop: 0;\n\t\tposition: relative;\n\t}\n\t&-exit-active ", " {\n\t\ttop: ", ";\n\t\ttransition: top ", "ms ease-out;\n\t}\n"]);
                return P = function() {
                    return e
                }, e
            }
            var B = {
                    name: "sx4ymz",
                    styles: "opacity:0;pointer-events:none"
                },
                q = Object(g.z)(F, {
                    target: "e1g4em791"
                })("color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";overflow:hidden;border:1px solid ", (function(e) {
                    return e.theme.colors.divider
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";padding:2px 6px;transition:opacity 150ms linear;", (function(e) {
                    return !e.visible && B
                }), ";"),
                A = Object(g.z)("span", {
                    target: "e1g4em790"
                })(""),
                H = 200;
            var L = S() ? function(e) {
                    var t = e.isUserScrollingSource,
                        n = Object(k.a)(e, ["isUserScrollingSource"]),
                        i = Object(c.u)(t),
                        l = I(),
                        s = a.useState({
                            direction: "up",
                            timestamp: l.currentTimestamp()
                        }),
                        u = s[0],
                        d = s[1];
                    return a.useEffect((function() {
                        l.subscribe(d);
                        var e = l.currentTimestamp();
                        return e !== u.timestamp && d({
                                direction: "up",
                                timestamp: e
                            }),
                            function() {
                                return l.unsubscribe(d)
                            }
                    }), [l]), u.timestamp ? a.createElement(o.a, null, (function(e) {
                        var t = z(u.timestamp, {
                            today: function() {
                                return e("today")
                            },
                            yesterday: function() {
                                return e("yesterday")
                            }
                        });
                        return a.createElement(r.a, null, (function(e) {
                            var r = function(e, t) {
                                return e(P(), String(A), String(A), String(A), "up" === t ? "-2em" : "2em", String(A), H, H, String(A), String(A), "up" === t ? "2em" : "-2em", H)
                            }(e.css, u.direction);
                            return a.createElement(v.a, {
                                component: null,
                                childFactory: function(e) {
                                    return a.cloneElement(e, {
                                        classNames: r
                                    })
                                }
                            }, a.createElement(C.a, {
                                key: t,
                                classNames: r,
                                timeout: H
                            }, a.createElement(q, Object(f.a)({}, n, {
                                visible: i
                            }), a.createElement(A, null, t))))
                        }))
                    })) : null
                } : function() {
                    return null
                },
                D = function(e) {
                    var t = I();
                    a.useEffect((function() {
                        var n = {
                            timestamp: e.timestamp,
                            node: e.nodeRef.current
                        };
                        return t.add(n),
                            function() {
                                t.remove(n)
                            }
                    }), [])
                };
            var V = Object(g.z)("div", {
                    target: "ehmqpie0"
                })({
                    name: "1wai6wj",
                    styles: "height:20px;margin:16px -0.5em;text-align:center;overflow:hidden"
                }),
                N = function(e) {
                    var t = e.timestamp,
                        n = a.useRef(null);
                    return D({
                        timestamp: t,
                        nodeRef: n
                    }), a.createElement(o.a, null, (function(e) {
                        return a.createElement(V, {
                            ref: n
                        }, a.createElement(F, null, z(t, {
                            today: function(e) {
                                return e.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            },
                            yesterday: function() {
                                return e("yesterday")
                            }
                        })))
                    }))
                },
                U = n(53);
            var W = Object(g.z)("div", {
                    displayName: "NewMessageHorizontalDivider",
                    target: "eacid5n1"
                })({
                    name: "gbe43y",
                    styles: "height:27px;margin:16px -0.5em;text-align:center;overflow:hidden"
                }),
                Y = Object(g.z)(U.A, {
                    target: "eacid5n0"
                })({
                    name: "1c0l2b2",
                    styles: "display:inline-flex;padding:2px 12px;font-weight:normal;box-shadow:none;height:auto;&:before,&:after{border-top:0;}"
                }),
                G = function(e) {
                    var t = e.unseenCount,
                        n = e.setScrollTargetNode,
                        r = a.useRef(null);
                    return Object(c.n)((function() {
                        r.current && n(r.current)
                    })), a.createElement(o.a, null, (function(e) {
                        return a.createElement(W, {
                            ref: r
                        }, a.createElement(Y, {
                            minScale: .9,
                            maxScale: 1.05
                        }, e(1 === t ? "new_message" : "new_messages")))
                    }))
                },
                Z = n(13);
            var K = Object(g.z)("div", {
                    displayName: "Divider",
                    target: "evqzb400"
                })({
                    name: "1jbr7ra",
                    styles: "border-top:1px solid rgba(0, 0, 0, 0.05);margin:0 1em;margin-bottom:-1px;z-index:10;position:relative"
                }),
                Q = Object(g.z)("div", {
                    target: "ekfrplk0"
                })((function(e) {
                    return e.theme.typography.basic
                }), " line-height:1.2;color:inherit;display:flex;width:100%;flex-direction:", (function(e) {
                    return e.row ? "row" : "column"
                }), ";"),
                J = n(38),
                X = n(734),
                $ = n(248),
                ee = n(20),
                te = n(54),
                ne = n.n(te),
                re = function(e, t) {
                    return t.getElementById(e)
                },
                ae = function(e) {
                    var t = e.portalId,
                        n = void 0 === t ? d : t,
                        r = e.children,
                        o = Object(i.useFrame)().document,
                        l = a.useState((function() {
                            return re(n, o)
                        })),
                        s = l[0],
                        u = l[1];
                    return Object(c.n)((function() {
                        s || u(re(n, o))
                    })), s ? te.createPortal(r, s) : null
                },
                ie = n(17);

            function oe() {
                var e = Object(E.a)(["\n\t&-enter,\n\t&-appear {\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t}\n\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t\ttransition: background-color ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t}\n\n\t&-exit-active,\n\t&-exit-done {\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t\ttransition: background-color ", "ms ", ";\n\t\ttransition-delay: ", "ms;\n\t}\n"]);
                return oe = function() {
                    return e
                }, e
            }
            var ce = 300,
                le = function(e) {
                    return {
                        enter: ce,
                        exit: e + ce
                    }
                },
                se = function(e, t, n) {
                    return e(oe(), ce, n.transitions.easings.smooth, ce, n.transitions.easings.smooth, t)
                },
                ue = function(e) {
                    var t = e.zIndex;
                    return Object(r.c)("z-index:", t, ";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;")
                },
                de = function(e) {
                    var t = e.zIndex,
                        n = Object(k.a)(e, ["zIndex"]),
                        i = a.useRef(null);
                    return Object(c.g)("touchmove", i), Object(r.d)("div", Object(f.a)({
                        ref: i,
                        css: ue({
                            zIndex: t
                        })
                    }, n))
                },
                me = function(e) {
                    var t = e.shown,
                        n = e.onPress,
                        a = e.exitDelay,
                        i = void 0 === a ? 100 : a,
                        o = e.zIndex,
                        c = void 0 === o ? 999 : o,
                        l = Object(ie.m)({
                            onPress: n
                        }).pressProps;
                    return Object(r.d)(r.a, null, (function(e) {
                        var n = e.css,
                            a = e.theme;
                        return Object(r.d)(v.a, {
                            appear: !0,
                            component: null
                        }, t && Object(r.d)(C.a, {
                            classNames: se(n, i, a),
                            timeout: le(i)
                        }, Object(r.d)(de, Object(f.a)({
                            zIndex: c
                        }, l))))
                    }))
                },
                be = a.memo(me),
                fe = n(198);
            var pe = {
                    name: "jubs0u",
                    styles: "margin:0;background:transparent"
                },
                he = function(e) {
                    return Object(r.c)("position:absolute;z-index:1500;width:calc(100% - 2rem);max-width:290px;top:1em;left:50%;background:", e.colors.surface.light, ";box-shadow:", e.boxShadow.lg, ";padding:", 1 * e.spaceBase, "px;border-radius:", e.borderRadius.md, ";")
                },
                ge = Object(g.z)("div", {
                    target: "e1yhh5l71"
                })({
                    name: "4hray5",
                    styles: "display:flex;flex-direction:row-reverse"
                }),
                ve = Object(g.z)("div", {
                    target: "e1yhh5l70"
                })("padding:", (function(e) {
                    return 1 * e.theme.spaceBase
                }), "px;padding-top:0;"),
                je = a.forwardRef((function(e, t) {
                    var n = e.onClose,
                        a = void 0 === n ? h.V : n,
                        i = e.children,
                        o = e["aria-label"],
                        c = e["aria-labelledby"],
                        l = e.isPreview,
                        u = Object(k.a)(e, ["onClose", "children", "aria-label", "aria-labelledby", "isPreview"]);
                    Object($.d)({
                        isDisabled: l
                    });
                    var d = Object($.c)({
                            isOpen: !0,
                            isDismissable: !0,
                            onClose: a
                        }, t).overlayProps,
                        m = Object($.b)().modalProps,
                        b = Object(X.a)({
                            "aria-label": o,
                            "aria-labelledby": c
                        }, t).dialogProps;
                    return Object(r.d)(s.a, {
                        contain: !0,
                        autoFocus: !0,
                        restoreFocus: !0
                    }, Object(r.d)("div", Object(f.a)({}, Object(ee.h)(u, d, m, b), {
                        ref: t,
                        css: he
                    }), Object(r.d)(ge, null, Object(r.d)(U.j, {
                        css: pe,
                        onPress: a,
                        "aria-label": "Close modal"
                    }, Object(r.d)(U.e, {
                        "aria-hidden": !0
                    }))), Object(r.d)(ve, null, i)))
                })),
                Oe = function(e) {
                    var t = e.onClose,
                        n = void 0 === t ? h.V : t,
                        i = e.shown,
                        o = e.children,
                        c = Object(k.a)(e, ["onClose", "shown", "children"]),
                        l = a.useRef(null),
                        s = Object(fe.b)();
                    return Object(r.d)(ae, null, Object(r.d)(be, {
                        shown: i,
                        onPress: n,
                        exitDelay: 25
                    }), Object(r.d)(v.a, {
                        component: null
                    }, i && Object(r.d)(w.c, {
                        nodeRef: l
                    }, Object(r.d)(je, Object(f.a)({
                        onClose: n,
                        ref: l,
                        isPreview: s
                    }, c), o))))
                },
                ye = n(727),
                xe = n(735),
                we = Object(g.z)("form", {
                    displayName: "Form",
                    section: !0,
                    target: "e1nyj5rz0"
                })(""),
                ke = n(223),
                Ee = Object(g.z)(ke.a, {
                    target: "exlwksr0"
                })("margin:0;transition:height 100ms ", (function(e) {
                    return e.theme.transitions.easings.linear
                }), ";overflow:hidden;", (function(e) {
                    return e.theme.typography.errorCaption
                }), ";"),
                Ce = function(e) {
                    var t = e.id,
                        n = e.error,
                        r = a.useRef(null);
                    return a.useLayoutEffect((function() {
                        var e = r.current;
                        if (n) {
                            e.style.height = "auto";
                            var t = getComputedStyle(e).height;
                            e.style.height = "0",
                                function(e) {
                                    e.scrollTop
                                }(e), e.style.height = t
                        } else e.style.height = "0"
                    }), [n]), a.createElement(Ee, {
                        id: t,
                        ref: r,
                        role: "alert"
                    }, n)
                },
                ze = Object(g.z)("label", {
                    target: "e2zxkge0"
                })("width:100%;display:inline-block;a{color:inherit;}", (function(e) {
                    var t = e.theme,
                        n = e.isRequired,
                        a = void 0 !== n && n;
                    return [t.typography.basic, a && Object(r.c)("&::after{display:inline;content:'\\00a0*';", t.typography.errorCaption, ";}")]
                }), ";");
            ze.defaultProps = {
                textWrap: !0
            };
            var Se = ze,
                _e = Object(g.z)("legend", {
                    target: "e1kph7ea0"
                })("padding:0;display:inline-block;width:100%;a{color:inherit;}", (function(e) {
                    var t = e.theme,
                        n = e.isRequired,
                        a = void 0 !== n && n;
                    return [t.typography.basic, a && Object(r.c)("&::after{display:inline;content:'\\00a0*';", t.typography.errorCaption, ";}")]
                }), ";");
            _e.defaultProps = {
                textWrap: !0
            };
            var Re = _e;
            var Te = Object(g.z)("div", {
                    target: "e1oy1v904"
                })((function(e) {
                    return {
                        margin: .25 * e.theme.spaceBase + "px 0"
                    }
                }), ";"),
                Ie = Object(g.z)("div", {
                    target: "e1oy1v903"
                })("position:relative;display:inline-block;cursor:pointer;width:40px;height:40px;outline-style:", (function(e) {
                    return e.focused ? "auto" : "none"
                }), ";"),
                Me = Object(g.z)("input", {
                    target: "e1oy1v902"
                })({
                    name: "3gkzjw",
                    styles: "opacity:0;margin:0;padding:0;height:100%;width:100%;position:absolute;cursor:pointer"
                }),
                Fe = Object(g.z)("div", {
                    target: "e1oy1v901"
                })("width:", (function(e) {
                    return .75 * e.theme.spaceBase
                }), "px;display:inline-block;"),
                Pe = Object(g.z)(U.k, {
                    target: "e1oy1v900"
                })((function(e) {
                    var t = e.theme;
                    return e.checked ? Object(r.c)("color:", t.colors.text.white, ";background-color:", t.colors.cta, ";") : Object(r.c)("color:", t.colors.text.black, ";background-color:", t.colors.lightVariant, ";")
                }), ";"),
                Be = function(e) {
                    var t = e.rate,
                        n = e.input,
                        r = e.label,
                        i = e.required,
                        o = Object(ie.f)().isFocusVisible,
                        l = Object(c.j)(),
                        s = l[0],
                        u = l[1],
                        d = n.value === t,
                        m = function(e) {
                            e.preventDefault(), n.onChange(d ? "" : t)
                        };
                    return a.createElement(Ie, Object(f.a)({}, u, {
                        focused: o && s
                    }), a.createElement(Me, {
                        type: "radio",
                        name: n.name,
                        checked: d,
                        value: t,
                        "aria-required": i,
                        "aria-label": r,
                        onClick: m,
                        onKeyDown: function(e) {
                            o && "Enter" === e.key && m(e)
                        },
                        onChange: h.V
                    }), a.createElement(Pe, {
                        checked: d
                    }, "good" === t ? a.createElement(U.x, null) : a.createElement(U.w, null)))
                },
                qe = function(e) {
                    var t = e.input,
                        n = e.meta,
                        r = e.required,
                        i = n.error && n.touched;
                    return a.createElement(o.a, null, (function(e) {
                        return a.createElement(Te, null, a.createElement(Be, {
                            rate: "good",
                            input: t,
                            label: e("rate_me_good_tooltip"),
                            required: r
                        }), a.createElement(Fe, null), a.createElement(Be, {
                            rate: "bad",
                            input: t,
                            label: e("rate_me_bad_tooltip"),
                            required: r
                        }), a.createElement(Ce, {
                            error: i ? n.error : null
                        }))
                    }))
                },
                Ae = n(65),
                He = Object(g.z)("div", {
                    target: "ewzcz811"
                })("position:relative;border:1px solid ", (function(e) {
                    return e.theme.colors.grayscale[500]
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.sm
                }), ";width:100%;background-color:", (function(e) {
                    return e.theme.colors.grayscale[50]
                }), ";transition:border-color 100ms linear;", (function(e) {
                    var t = e.focused,
                        n = e.theme;
                    return Object(f.a)({
                        margin: .25 * n.spaceBase + "px 0"
                    }, t && {
                        borderColor: n.colors.accent,
                        backgroundColor: n.colors.surface.light
                    })
                }), ";"),
                Le = Object(g.z)("select", {
                    target: "ewzcz810"
                })("width:100%;-webkit-appearance:none;font-family:inherit;background-color:transparent;border:none;&:focus,&:active{outline:none;}&::-ms-expand{display:none;}", (function(e) {
                    var t = e.theme,
                        n = t.spaceBase,
                        r = t.typography;
                    return Object(f.a)({}, r.input, {
                        padding: n + "px",
                        paddingRight: "32px",
                        "&:-moz-focusring": {
                            color: "transparent",
                            textShadow: "0 0 0 " + r.input.color
                        }
                    })
                }), ";"),
                De = Object(r.c)("position:absolute;pointer-events:none;right:0;top:calc(50% - ", 16, "px);"),
                Ve = a.forwardRef((function(e, t) {
                    var n = e.onFocus,
                        i = e.onBlur,
                        o = Object(k.a)(e, ["onFocus", "onBlur"]),
                        c = a.useState(!1),
                        l = c[0],
                        s = c[1];
                    return Object(r.d)(He, {
                        focused: l
                    }, Object(r.d)(Le, Object(f.a)({
                        ref: t
                    }, o, {
                        onFocus: function(e) {
                            n && n(e), s(!0)
                        },
                        onBlur: function(e) {
                            i && i(e), s(!1)
                        }
                    })), Object(r.d)(Ae.e, {
                        "aria-hidden": !0,
                        focusable: "false",
                        css: De
                    }))
                })),
                Ne = function(e) {
                    var t = e.input,
                        n = e.meta,
                        r = Object(k.a)(e, ["input", "meta"]),
                        i = n.touched && !!n.error;
                    return a.createElement(a.Fragment, null, a.createElement(Ve, Object(f.a)({}, t, r, {
                        "aria-invalid": i || void 0
                    })), a.createElement(Ce, {
                        error: i ? n.error : null
                    }))
                },
                Ue = Object(g.z)("input", {
                    target: "e1xplv9i0"
                })("width:100%;border:1px solid ", (function(e) {
                    return e.theme.colors.grayscale[500]
                }), ";-webkit-appearance:none;background-color:", (function(e) {
                    return e.theme.colors.grayscale[50]
                }), ";font-family:inherit;box-shadow:none;transition:border-color 100ms linear,background-color 100ms linear;&::placeholder{opacity:1;color:", (function(e) {
                    return e.theme.colors.text.muted
                }), ";}&:focus,&:active{outline:none;border-color:", (function(e) {
                    return e.theme.colors.accent
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";}", (function(e) {
                    var t = e.theme,
                        n = t.spaceBase,
                        r = t.typography,
                        a = t.borderRadius;
                    return Object(f.a)({
                        borderRadius: a.def
                    }, r.input, {
                        padding: n + "px",
                        margin: .25 * n + "px 0"
                    })
                }), ";"),
                We = a.forwardRef((function(e, t) {
                    var n = e.value,
                        r = e.errorMessageProps,
                        i = Object(k.a)(e, ["value", "errorMessageProps"]);
                    return a.createElement(a.Fragment, null, a.createElement(Ue, Object(f.a)({}, i, {
                        ref: t,
                        value: n || ""
                    })), a.createElement(Ce, r))
                })),
                Ye = Object(g.z)("textarea", {
                    target: "e61759e0"
                })("width:100%;border:1px solid ", (function(e) {
                    return e.theme.colors.grayscale[500]
                }), ";-webkit-appearance:none;background-color:", (function(e) {
                    return e.theme.colors.grayscale[50]
                }), ";font-family:inherit;box-shadow:none;transition:border-color 100ms linear;resize:none;&:focus,&:active{outline:none;border-color:", (function(e) {
                    return e.theme.colors.accent
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";}", (function(e) {
                    var t = e.theme;
                    return Object(f.a)({
                        borderRadius: t.borderRadius.def
                    }, t.typography.input, {
                        padding: t.spaceBase + "px",
                        margin: .25 * t.spaceBase + "px 0"
                    })
                }), ";"),
                Ge = a.forwardRef((function(e, t) {
                    var n = e.value,
                        r = e.errorMessageProps,
                        i = Object(k.a)(e, ["value", "errorMessageProps"]);
                    return a.createElement(a.Fragment, null, a.createElement(Ye, Object(f.a)({}, i, {
                        ref: t,
                        value: n || ""
                    })), a.createElement(Ce, r))
                })),
                Ze = function(e) {
                    return a.createElement("path", Object(f.a)({
                        d: "M4,0.5 C2.06700338,0.5 0.5,2.06700338 0.5,4 L0.5,12 C0.5,13.9329966 2.06700338,15.5 4,15.5 L12,15.5 C13.9329966,15.5 15.5,13.9329966 15.5,12 L15.5,4 C15.5,2.06700338 13.9329966,0.5 12,0.5 L4,0.5 Z"
                    }, e))
                },
                Ke = function(e) {
                    return a.createElement("path", Object(f.a)({
                        d: "M4,0 L12,0 C14.209139,-4.4408921e-16 16,1.790861 16,4 L16,12 C16,14.209139 14.209139,16 12,16 L4,16 C1.790861,16 0,14.209139 0,12 L0,4 C-4.4408921e-16,1.790861 1.790861,0 4,0 Z"
                    }, e))
                },
                Qe = function(e) {
                    return a.createElement("polyline", Object(f.a)({
                        strokeWidth: "2",
                        strokeDasharray: "10",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        points: "5 7.90626754 7.06606709 10 12 5"
                    }, e))
                };

            function Je() {
                var e = Object(E.a)(["\n  0% {\n    stroke-dashoffset: 10;\n  }\n  33.33% {\n    stroke-dashoffset: 10;\n  }\n  77.78% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n"]);
                return Je = function() {
                    return e
                }, e
            }

            function Xe() {
                var e = Object(E.a)(["\n  0% {\n    opacity: 0;\n  }\n  33.33% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);
                return Xe = function() {
                    return e
                }, e
            }
            var $e = function(e) {
                    return Object(r.c)("animation-iteration-count:1;animation-timing-function:", e.transitions.easings.linear, ";animation-fill-mode:forwards;animation-duration:300ms;")
                },
                et = Object(r.e)(Xe()),
                tt = Object(r.e)(Je()),
                nt = function(e) {
                    var t = e.className,
                        n = e.checked,
                        i = e.focused,
                        o = Object(k.a)(e, ["className", "checked", "focused"]),
                        c = Object(p.g)();
                    return Object(r.d)("svg", Object(f.a)({
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        fillRule: "evenodd",
                        css: [Object(r.c)("border-radius:", c.borderRadius.sm, ";background-color:", c.colors.grayscale[n ? 600 : 100], ";"), i && Object(r.c)("box-shadow:", c.boxShadow.outline, ";"), t, ""]
                    }, o), Object(r.d)(Ze, {
                        stroke: c.colors.grayscale[600],
                        strokeWidth: "2"
                    }), n && Object(r.d)(a.Fragment, null, Object(r.d)(Ke, {
                        fill: c.colors.grayscale[600],
                        css: Object(r.c)($e(c), " animation-name:", et, ";")
                    }), Object(r.d)(Qe, {
                        stroke: c.colors.grayscale[100],
                        css: Object(r.c)($e(c), " animation-name:", tt, ";")
                    })))
                };
            var rt = Object(g.z)("input", {
                    target: "e81sjne0"
                })({
                    name: "3aib36",
                    styles: "opacity:0;margin:0;padding:0;height:100%;width:100%;position:absolute"
                }),
                at = {
                    name: "1u8reph",
                    styles: "display:inline-block;position:relative;height:16px;width:16px"
                },
                it = a.forwardRef((function(e, t) {
                    var n = e.className,
                        i = e.defaultChecked,
                        o = void 0 !== i && i,
                        l = e.checked,
                        s = e.id,
                        u = e.onBlur,
                        d = void 0 === u ? h.V : u,
                        m = e.onChange,
                        b = void 0 === m ? h.V : m,
                        p = e.onFocus,
                        g = void 0 === p ? h.V : p,
                        v = Object(k.a)(e, ["className", "defaultChecked", "checked", "id", "onBlur", "onChange", "onFocus"]),
                        j = a.useState(void 0 !== l ? l : o),
                        O = j[0],
                        y = j[1],
                        x = a.useState(!1),
                        w = x[0],
                        E = x[1],
                        C = Object(c.h)();
                    void 0 !== l && O !== l && y(l);
                    return Object(r.d)("div", {
                        css: [at, n, ""]
                    }, Object(r.d)(rt, Object(f.a)({
                        type: "checkbox",
                        checked: O,
                        id: s,
                        onChange: function(e) {
                            b(e), void 0 === l && y((function(e) {
                                return !e
                            }))
                        },
                        onFocus: function(e) {
                            g(e), "keyboard" === C() && E(!0)
                        },
                        onBlur: function(e) {
                            d(e), E(!1)
                        },
                        ref: t
                    }, v)), Object(r.d)(nt, {
                        "aria-hidden": !0,
                        checked: O,
                        focused: w,
                        focusable: "false"
                    }))
                })),
                ot = function(e) {
                    var t = e.color,
                        n = Object(k.a)(e, ["color"]),
                        r = Object(p.g)();
                    return a.createElement("circle", Object(f.a)({
                        fillRule: "nonzero",
                        fill: t || r.colors.border,
                        cx: "8",
                        cy: "8",
                        r: "3.5"
                    }, n))
                },
                ct = function(e) {
                    var t = e.color,
                        n = Object(k.a)(e, ["color"]),
                        r = Object(p.g)();
                    return a.createElement("circle", Object(f.a)({
                        style: {
                            backgroundColor: "black"
                        },
                        fillRule: "nonzero",
                        cx: "8",
                        cy: "8",
                        r: "7.5",
                        stroke: t || r.colors.grayscale[600],
                        strokeWidth: "2"
                    }, n))
                };

            function lt() {
                var e = Object(E.a)(["\n  0% {\n    transform: scale(0, 0);\n  }\n  50% {\n    transform: scale(1.1, 1.1);\n  }\n  66.67% {\n    transform: scale(1.1, 1.1);\n  }\n  83.33% {\n    transform: scale(0.95, 0.95);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n"]);
                return lt = function() {
                    return e
                }, e
            }
            var st = Object(r.e)(lt()),
                ut = function(e) {
                    return Object(r.c)("animation-duration:200ms;animation-iteration-count:1;animation-fill-mode:forwards;animation-timing-function:", e.transitions.easings.linear, ";")
                },
                dt = function(e) {
                    var t = e.className,
                        n = e.checked,
                        i = e.focused,
                        o = Object(k.a)(e, ["className", "checked", "focused"]),
                        c = Object(p.g)();
                    return Object(r.d)("svg", Object(f.a)({
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        fillRule: "evenodd",
                        css: [Object(r.c)("border-radius:", c.borderRadius.round, ";background-color:", c.colors.grayscale[n ? 600 : 100], ";"), i && Object(r.c)("box-shadow:", c.boxShadow.outline, ";"), t, ""]
                    }, o), Object(r.d)(ct, null), n && Object(r.d)(a.Fragment, null, Object(r.d)(ot, {
                        color: c.colors.grayscale[100],
                        css: Object(r.c)(ut(c), " animation-name:", st, ";transform-origin:50% 50%;")
                    })))
                };
            var mt = Object(g.z)("input", {
                    target: "e12lg4gr0"
                })({
                    name: "3aib36",
                    styles: "opacity:0;margin:0;padding:0;height:100%;width:100%;position:absolute"
                }),
                bt = {
                    name: "1u8reph",
                    styles: "display:inline-block;position:relative;height:16px;width:16px"
                },
                ft = function(e) {
                    var t = e.className,
                        n = e.defaultChecked,
                        i = void 0 !== n && n,
                        o = e.checked,
                        l = e.id,
                        s = e.onBlur,
                        u = void 0 === s ? h.V : s,
                        d = e.onChange,
                        m = void 0 === d ? h.V : d,
                        b = e.onFocus,
                        p = void 0 === b ? h.V : b,
                        g = Object(k.a)(e, ["className", "defaultChecked", "checked", "id", "onBlur", "onChange", "onFocus"]),
                        v = a.useState(void 0 !== o ? o : i),
                        j = v[0],
                        O = v[1],
                        y = a.useState(!1),
                        x = y[0],
                        w = y[1],
                        E = Object(c.h)();
                    void 0 !== o && j !== o && O(o);
                    return Object(r.d)("div", {
                        css: [bt, t, ""]
                    }, Object(r.d)(mt, Object(f.a)({
                        type: "radio",
                        checked: j,
                        id: l,
                        onChange: function(e) {
                            m(e), void 0 === o && O((function(e) {
                                return !e
                            }))
                        },
                        onBlur: function(e) {
                            u(e), w(!1)
                        },
                        onFocus: function(e) {
                            p(e), "keyboard" === E() && w(!0)
                        },
                        required: !0
                    }, g)), Object(r.d)(dt, {
                        "aria-hidden": !0,
                        checked: j,
                        focused: x,
                        focusable: "false"
                    }))
                };
            var pt = n(196);
            var ht = function(e) {
                    var t = e.label,
                        n = e.submitting,
                        r = e.disabled,
                        i = Object(k.a)(e, ["label", "submitting", "disabled"]);
                    return a.createElement(pt.a, Object(f.a)({
                        pending: n,
                        disabled: n || r,
                        type: "submit"
                    }, i), a.createElement("span", null, t))
                },
                gt = n(736),
                vt = {},
                jt = {
                    submitError: !0
                },
                Ot = {
                    submitting: !0
                },
                yt = {
                    values: !0
                },
                xt = Object(xe.a)(),
                wt = {
                    format: function(e) {
                        return Object(h.yb)(e || "")
                    },
                    formatOnBlur: !0
                },
                kt = function(e) {
                    var t = e.meta,
                        n = Object(ee.l)(),
                        r = null;
                    return t.submitError && !t.dirtySinceLastSubmit ? r = t.submitError : t.touched && t.error && (r = t.error), {
                        validationState: r ? "invalid" : "valid",
                        errorMessageProps: {
                            error: r,
                            id: n
                        }
                    }
                },
                Et = function(e, t) {
                    var n = t.name,
                        r = t.ariaLabel,
                        a = t.ariaLabelledBy,
                        i = t.label,
                        o = t.required,
                        c = t.type,
                        l = t.autoComplete,
                        s = t.inputElementType,
                        u = Object(ye.c)(n, wt),
                        d = kt(u),
                        m = d.validationState,
                        b = d.errorMessageProps,
                        p = Object(gt.a)(Object(f.a)({
                            id: n,
                            type: c,
                            inputElementType: s,
                            isRequired: o,
                            autoComplete: l,
                            validationState: m,
                            "aria-errormessage": b.id,
                            label: i,
                            "aria-label": r,
                            "aria-labelledby": a
                        }, u.input), e);
                    return {
                        inputProps: p.inputProps,
                        labelProps: p.labelProps,
                        errorMessageProps: b
                    }
                },
                Ct = function() {
                    return a.createElement(ye.b, {
                        subscription: jt
                    }, (function(e) {
                        var t = e.submitError;
                        return a.createElement(Ce, {
                            error: t || null
                        })
                    }))
                },
                zt = n(147);
            var St = Object(g.z)("div", {
                    target: "e1n7ru1l0"
                })({
                    name: "1azakc",
                    styles: "text-align:center"
                }),
                _t = [xt],
                Rt = function(e) {
                    var t = e.id,
                        n = e.children,
                        r = e.initialValues,
                        i = e.submitLabel,
                        o = e.validate,
                        l = e.onSubmit,
                        s = e.disabled,
                        u = "form_" + t;
                    return Object(c.n)((function() {
                        Object(zt.c)() && function(e) {
                            var t = Object(xe.b)(e)();
                            if (t.length) {
                                var n = t[0],
                                    r = n.tagName;
                                ("INPUT" === r && !Object(h.D)(n.type, ["checkbox", "radio"]) || "TEXTAREA" === r) && Object(ee.d)(n)
                            }
                        }(u)
                    })), a.createElement(ye.a, {
                        decorators: _t,
                        initialValues: r,
                        onSubmit: l,
                        subscription: vt,
                        validate: o
                    }, (function(e) {
                        var t = e.handleSubmit;
                        return a.createElement(we, {
                            name: u,
                            onSubmit: t
                        }, n, a.createElement(Ct, null), a.createElement(St, null, a.createElement(ye.b, {
                            subscription: Ot
                        }, (function(e) {
                            var t = e.submitting;
                            return a.createElement(ht, {
                                submitting: t,
                                label: i,
                                disabled: s
                            })
                        }))))
                    }))
                },
                Tt = Object(g.z)("div", {
                    target: "eptvlbh0"
                })("display:flex;flex-direction:column;width:100%;margin-bottom:", (function(e) {
                    return e.theme.spaceBase + "px"
                }), ";"),
                It = n(129),
                Mt = n.n(It),
                Ft = n(123),
                Pt = n(144),
                Bt = n(45),
                qt = function(e) {
                    var t = e.children,
                        n = e.showRequiredMark,
                        r = void 0 !== n && n,
                        i = Object(k.a)(e, ["children", "showRequiredMark"]);
                    return a.createElement(Se, Object(f.a)({
                        isRequired: r
                    }, i), "string" === typeof t ? a.createElement(Mt.a, {
                        component: Ft.a
                    }, a.createElement(Pt.a, {
                        preserveLists: !0,
                        template: t,
                        root: {
                            component: Bt.a
                        }
                    })) : t)
                },
                At = function(e) {
                    var t = a.useRef(null),
                        n = e.label,
                        r = e.required,
                        i = Et(t, Object(f.a)({}, e, {
                            inputElementType: "textarea"
                        })),
                        o = i.inputProps,
                        c = i.labelProps,
                        l = i.errorMessageProps;
                    return a.createElement(Tt, null, n && a.createElement(qt, Object(f.a)({
                        showRequiredMark: r
                    }, c), n), a.createElement(Ge, Object(f.a)({}, o, {
                        errorMessageProps: l,
                        ref: t
                    })))
                },
                Ht = n(18);
            var Lt = Object(g.z)("div", {
                    target: "e1lbo1s41"
                })({
                    name: "175oc9c",
                    styles: "display:flex;justify-content:center;flex-shrink:0"
                }),
                Dt = Object(g.z)("div", {
                    displayName: "IconLabel",
                    target: "e1lbo1s40"
                })("display:flex;justify-content:center;align-items:center;", (function(e) {
                    var t = e.size,
                        n = e.theme,
                        r = e.forceLightTheme;
                    return {
                        width: t,
                        height: t,
                        borderRadius: n.borderRadius.round,
                        backgroundColor: !r && Object(Ht.g)(n.colors.agentBarBackground) ? n.colors.grayscale[500] : n.colors.surface.lightVariant
                    }
                }), ";"),
                Vt = function(e) {
                    var t = e.size,
                        n = void 0 === t ? "64px" : t,
                        r = e.children,
                        i = Object(k.a)(e, ["size", "children"]);
                    return a.createElement(Lt, null, a.createElement(Dt, Object(f.a)({
                        size: n
                    }, i), r))
                },
                Nt = n(743),
                Ut = n(746);
            var Wt = 10,
                Yt = Object(g.z)("div", {
                    displayName: "Tooltip",
                    target: "ezqijrk2"
                })("display:inline-block;background-color:", (function(e) {
                    var t = e.theme;
                    return "dark" === e.appearance ? t.colors.surface.darkVariant : t.colors.surface.light
                }), ";color:", (function(e) {
                    var t = e.theme;
                    return "dark" === e.appearance ? t.colors.text.white : t.colors.text.black
                }), ";padding:1em;position:fixed;border-radius:", (function(e) {
                    return e.theme.borderRadius.lg
                }), ";z-index:9;font-size:0.8em;font-weight:normal;margin-top:0.5em;margin-bottom:0.5em;box-shadow:", (function(e) {
                    return e.theme.boxShadow.floating
                }), ";transition:", (function(e) {
                    var t = e.theme;
                    return "opacity 200ms " + t.transitions.easings.swift + ", transform 300ms " + t.transitions.easings.swift
                }), ";", (function(e) {
                    var t = e.position;
                    return {
                        left: t.left ? t.left - Wt + "px" : "auto",
                        right: t.right ? t.right - Wt + "px" : "auto",
                        top: t.top ? t.top + "px" : "auto",
                        bottom: t.bottom ? t.bottom : "auto",
                        marginRight: t.right ? 0 : "10px",
                        marginLeft: t.left ? 0 : "10px"
                    }
                }), ";"),
                Gt = Object(g.z)("svg", {
                    displayName: "TooltipArrow",
                    target: "ezqijrk1"
                })("position:absolute;fill:", (function(e) {
                    var t = e.theme;
                    return "dark" === e.appearance ? t.colors.surface.darkVariant : t.colors.surface.light
                }), ";margin-top:-1.5em;margin-bottom:-1.5em;", (function(e) {
                    var t = e.position,
                        n = e.horizontalFactor,
                        r = e.placement,
                        a = void 0 === r ? "top" : r,
                        i = e.theme;
                    return Object(f.a)({
                        left: t.left ? n - Wt + ("modern" === i.name ? 3 : -1) + "px" : "auto",
                        right: t.right ? n - Wt + ("modern" === i.name ? 3 : -1) + "px" : "auto"
                    }, "bottom" === a ? {
                        top: 0
                    } : {
                        bottom: 0,
                        transform: "rotate(180deg)"
                    })
                }), ";"),
                Zt = Object(g.z)("div", {
                    target: "ezqijrk0"
                })({
                    name: "bjn8wh",
                    styles: "position:relative"
                }),
                Kt = function(e, t) {
                    var n = e.getBoundingClientRect(),
                        r = n.left,
                        a = n.right,
                        i = n.bottom,
                        o = n.top,
                        c = window,
                        l = c.innerWidth,
                        s = c.innerHeight,
                        u = c.pageXOffset,
                        d = c.pageYOffset,
                        m = "top" === t ? {
                            bottom: s - (o + d)
                        } : {
                            top: i + d
                        },
                        b = r + u > l / 2 ? {
                            right: l - (a + u)
                        } : {
                            left: r + u
                        };
                    return Object(f.a)({}, m, b)
                },
                Qt = {
                    position: {
                        top: 0,
                        left: 0
                    },
                    targetWidth: 0
                };
            var Jt = function(e) {
                var t = e.children,
                    n = e.description,
                    r = e.allowTouch,
                    o = e.controlsRef,
                    l = e.animated,
                    u = void 0 !== l && l,
                    d = e.placement,
                    b = void 0 === d ? "bottom" : d,
                    p = e.appearance,
                    g = void 0 === p ? "dark" : p,
                    v = e.trigger,
                    j = void 0 === v ? "hover" : v,
                    O = e.onOpenChange,
                    y = void 0 === O ? h.V : O,
                    x = Object(k.a)(e, ["children", "description", "allowTouch", "controlsRef", "animated", "placement", "appearance", "trigger", "onOpenChange"]),
                    w = a.useRef(null);
                Object(ie.k)();
                var E = a.useRef(null),
                    C = a.useRef(!1),
                    z = a.useState(Qt),
                    S = z[0],
                    _ = z[1],
                    R = a.useState(!1),
                    T = R[0],
                    I = R[1],
                    M = Object(i.useFrame)(),
                    F = Object(Ut.a)(Object(f.a)({
                        onOpenChange: function(e) {
                            u && requestAnimationFrame((function() {
                                return I(e)
                            }));
                            var t = function() {
                                y(e, C.current), C.current = !1
                            };
                            e ? (_({
                                position: Kt(E.current, b),
                                targetWidth: E.current.offsetWidth
                            }), requestAnimationFrame(t)) : t()
                        }
                    }, x));
                (null == o ? void 0 : o.current) && (o.current = {
                    open: function() {
                        C.current = !0, F.open(!0)
                    },
                    close: function() {
                        C.current = !0, F.close(!0)
                    }
                });
                var P, B = Object(Nt.b)(x, F, E),
                    q = B.tooltipProps,
                    A = B.triggerProps,
                    H = Object(Nt.a)(q, F).tooltipProps,
                    L = Object(ie.m)({
                        onPress: function() {
                            F.open(!0)
                        }
                    }).pressProps;
                return Object(c.m)(w, (function() {
                    F.close(!0)
                }), M), x.isDisabled && F.isOpen && F.close(), a.createElement(s.b, Object(f.a)({}, "press" === j ? L : r ? Object(ee.h)(A, L) : A, {
                    ref: E
                }), t, F.isOpen && a.createElement(ae, {
                    portalId: m
                }, a.createElement(Yt, Object(f.a)({
                    ref: w,
                    appearance: g,
                    position: S.position
                }, "hover" === j && H, u && {
                    style: {
                        opacity: (P = T) ? 1 : 0,
                        transform: "translateY(" + (P ? 0 : 8) + "px)"
                    }
                }), a.createElement(Zt, null, a.createElement(Gt, {
                    appearance: g,
                    placement: b,
                    horizontalFactor: S.targetWidth / 2,
                    height: "10",
                    position: S.position,
                    width: "16"
                }, a.createElement("polygon", {
                    points: "0,10 16,10 8,0"
                })), n))))
            };
            var Xt = "add_rate_comment_label",
                $t = {
                    name: "1azakc",
                    styles: "text-align:center"
                },
                en = {
                    name: "870gjp",
                    styles: "font-size:inherit"
                },
                tn = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            open: !1,
                            selectedRate: t.props.chatRate
                        }, t.handleRate = Object(h.R)((function(e) {
                            return function() {
                                var n = t.state.selectedRate === e,
                                    r = n ? null : e;
                                t.rateChat(r), t.setState({
                                    selectedRate: r,
                                    open: !n
                                })
                            }
                        })), t.closeModal = function() {
                            t.setState({
                                open: !1
                            })
                        }, t.validate = function(e) {
                            if (!e.comment) return {
                                comment: t.props.localize("survey_fill_in_required_fields")
                            }
                        }, t.handleSubmit = function(e) {
                            t.props.rateChat({
                                comment: e.comment
                            }), t.closeModal()
                        }, t.getRateButtonProps = function(e) {
                            var n = t.props,
                                r = n.chatRate;
                            return {
                                disabled: n.disabled,
                                active: r === e,
                                onPress: t.handleRate(e),
                                "aria-label": r === e ? "Cancel " + e + " rating" : "Rate as " + e + " and open comment modal"
                            }
                        }, t
                    }
                    Object(J.a)(t, e);
                    var n = t.prototype;
                    return n.componentDidUpdate = function(e) {
                        e.chatRate !== this.props.chatRate && this.setState({
                            selectedRate: this.props.chatRate
                        })
                    }, n.rateChat = function(e) {
                        var t = this;
                        this.props.rateChat({
                            rate: e
                        }).catch((function() {
                            return t.setState({
                                selectedRate: t.props.chatRate
                            })
                        }))
                    }, n.render = function() {
                        var e = this.state,
                            t = e.open,
                            n = e.selectedRate,
                            i = this.props,
                            o = i.disabled,
                            c = i.chatRate,
                            l = i.mobile,
                            s = i.localize,
                            u = i.isPreview,
                            d = s("good" === c ? "rate_me_cancel_tooltip" : "rate_me_good_tooltip"),
                            m = s("bad" === c ? "rate_me_cancel_tooltip" : "rate_me_bad_tooltip");
                        return Object(r.d)(a.Fragment, null, Object(r.d)(Jt, {
                            isDisabled: o,
                            description: d
                        }, Object(r.d)(U.j, this.getRateButtonProps("good"), Object(r.d)(U.x, {
                            css: en,
                            "aria-hidden": !0
                        }))), Object(r.d)(Jt, {
                            isDisabled: o,
                            description: m
                        }, Object(r.d)(U.j, this.getRateButtonProps("bad"), Object(r.d)(U.w, {
                            css: en,
                            "aria-hidden": !0
                        }))), Object(r.d)(Oe, {
                            shown: t,
                            onClose: this.closeModal,
                            isPreview: u
                        }, Object(r.d)(Vt, {
                            forceLightTheme: !0
                        }, "good" === n ? Object(r.d)(U.x, {
                            label: s("rate_me_confirmation_good")
                        }) : Object(r.d)(U.w, {
                            label: s("rate_me_confirmation_bad")
                        })), Object(r.d)("p", {
                            id: Xt,
                            css: $t
                        }, s("rate_me_add_comment")), Object(r.d)(Rt, {
                            id: "rate_comment",
                            mobile: l,
                            onSubmit: this.handleSubmit,
                            submitLabel: s("button_add_feedback"),
                            validate: this.validate,
                            disabled: u
                        }, Object(r.d)(g.q, null, Object(r.d)(At, {
                            name: "comment",
                            ariaLabelledBy: Xt,
                            mobile: l,
                            required: !0
                        })))))
                    }, t
                }(a.Component),
                nn = Object(o.c)((function(e, t) {
                    var n = t.chatId,
                        r = e.getApplicationState("isPreview"),
                        a = r ? function() {
                            return Promise.resolve()
                        } : function(t) {
                            var r = t.rate,
                                a = t.comment,
                                i = {};
                            return void 0 !== r && (i.rate = r), void 0 !== a && (i.rateComment = a), e.requestUpdateChat(n, {
                                properties: i
                            })
                        };
                    return function(e) {
                        var t = e.getChat(n),
                            i = t.active,
                            o = t.properties,
                            c = o.ended;
                        return {
                            chatRate: o.rate,
                            disabled: !r && (!c && !i),
                            iconTheme: e.getApplicationState("config").theme.iconTheme,
                            mobile: e.getApplicationState("mobile"),
                            rateChat: a,
                            localize: e.localize,
                            isPreview: r
                        }
                    }
                }))(tn);
            var rn = {
                    name: "1wcfv52",
                    styles: "margin-right:0"
                },
                an = Object(g.z)("div", {
                    target: "ekqutxs1"
                })({
                    name: "ftmdit",
                    styles: "display:flex;align-items:center;position:relative;margin-right:0.5em"
                }),
                on = Object(g.z)("div", {
                    target: "ekqutxs0"
                })("position:absolute;", (function(e) {
                    var t = e.availability,
                        n = e.size,
                        r = e.theme;
                    return {
                        width: "small" === n ? r.spaces.space4 : r.spaces.space5,
                        height: "small" === n ? r.spaces.space4 : r.spaces.space5,
                        background: "online" === t ? r.colors.success : r.colors.grayscale[500],
                        border: "2px solid " + r.colors.surface.light,
                        borderRadius: r.borderRadius.round,
                        top: "-2px",
                        right: "-2px"
                    }
                }), ";"),
                cn = function(e) {
                    var t = e.avatarUrl,
                        n = e.availability,
                        a = e.size,
                        i = void 0 === a ? "normal" : a;
                    return Object(r.d)(an, null, Object(r.d)(g.b, {
                        css: rn,
                        imgUrl: t,
                        size: "small" === i ? "24px" : void 0
                    }), n && Object(r.d)(on, {
                        availability: n,
                        size: i
                    }))
                };
            var ln = {
                    name: "f7ay7b",
                    styles: "justify-content:center"
                },
                sn = Object(g.z)("div", {
                    target: "e10kp68a1"
                })({
                    name: "8xhv84",
                    styles: "width:100%;display:flex"
                }),
                un = Object(r.c)(ln, " flex:1;"),
                dn = Object(r.c)(ln, " min-width:auto;"),
                mn = Object(g.z)("img", {
                    target: "e10kp68a0"
                })({
                    name: "1lnnphj",
                    styles: "height:auto;max-height:50px"
                }),
                bn = function(e) {
                    var t = e.agent,
                        n = e.chatId,
                        a = e.showAvatar,
                        i = e.logoPath,
                        o = e.isRatingEnabled,
                        c = "modern" === Object(p.g)().name;
                    return Object(r.d)(sn, null, a && t.avatar && Object(r.d)(cn, {
                        avatarUrl: t.avatar,
                        availability: "online"
                    }), Object(r.d)(g.q, {
                        flexFill: !0
                    }, Object(r.d)(g.f, {
                        css: un,
                        flexFill: !0
                    }, Object(r.d)(g.w, {
                        ellipsis: !0
                    }, Object(r.d)(Bt.a, null, t.name)), t.properties.jobTitle && Object(r.d)(g.s, {
                        ellipsis: !0
                    }, Object(r.d)(Bt.a, null, t.properties.jobTitle)), o && c && Object(r.d)(g.q, null, Object(r.d)(nn, {
                        chatId: n
                    }))), o && !c && Object(r.d)(g.f, {
                        css: ln,
                        noShrink: !0
                    }, Object(r.d)(g.q, null, Object(r.d)(nn, {
                        chatId: n
                    }))), !!i && Object(r.d)(g.f, {
                        css: dn
                    }, Object(r.d)(mn, {
                        alt: "",
                        src: i
                    }))))
                },
                fn = function(e) {
                    return void 0 === e && (e = 3), Object(r.c)("-webkit-line-clamp:", e, ";-webkit-box-orient:vertical;-webkit-box-pack:center;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;")
                },
                pn = "top-bar";
            var hn = Object(g.z)(U.j, {
                    target: "eyohww44"
                })({
                    name: "1izl6ie",
                    styles: "width:24px;height:24px;opacity:1"
                }),
                gn = Object(g.z)(U.d, {
                    target: "eyohww43"
                })((function(e) {
                    return "up" === e.direction && {
                        transform: "rotate(180deg)"
                    }
                }), " transition:transform 0.3s ", (function(e) {
                    return e.theme.transitions.easings.smooth
                }), ";"),
                vn = Object(g.z)(Q, {
                    target: "eyohww42"
                })("display:flex;text-align:left;overflow:hidden;height:auto;width:100%;align-items:", (function(e) {
                    return e.veritcallyCenter ? "center" : "flex-start"
                }), ";transition:height 0.3s ", (function(e) {
                    return e.theme.transitions.easings.smooth
                }), ";will-change:height;line-height:1.5;a{color:inherit;}"),
                jn = Object(g.z)("div", {
                    target: "eyohww41"
                })("height:", 42, "px;display:flex;align-items:center;"),
                On = Object(g.z)(Vt, {
                    target: "eyohww40"
                })({
                    name: "22q2ak",
                    styles: "margin:4px 15px 4px 0"
                }),
                yn = function(e) {
                    var t = e.text,
                        n = e.icon,
                        i = e.isLoadingHistory,
                        c = e.forceExpanded,
                        l = a.useState(!0),
                        s = l[0],
                        u = l[1],
                        d = a.useState(!1),
                        m = d[0],
                        b = d[1],
                        f = a.useState(null),
                        p = f[0],
                        h = f[1],
                        g = a.useState(!1),
                        v = g[0],
                        j = g[1],
                        O = a.useRef(null),
                        y = Object(ee.l)(),
                        x = a.useCallback((function() {
                            if (s) {
                                var e = O.current.clientHeight;
                                e !== p && h(e), O.current.style.height = e + "px", O.current.scrollTop
                            }
                            O.current.style.height = (s ? 42 : Number(p)) + "px", u((function(e) {
                                return !e
                            }))
                        }), [s, p]),
                        w = function() {
                            s && (O.current.style.height = "auto")
                        };
                    return a.useEffect((function() {
                        if (O && !c) {
                            var e = O.current.clientHeight > 42;
                            b(e)
                        }
                        O && c && (O.current.style.height = "auto", b(!1))
                    }), [O, c]), a.useEffect((function() {
                        m && (h(O.current.clientHeight), O.current.style.height = "42px", j(!0), u(!1))
                    }), [m]), a.useEffect((function() {
                        i && s && x()
                    }), [i, s, x]), Object(r.d)(o.a, null, (function(e) {
                        return Object(r.d)(vn, {
                            ref: O,
                            row: !0,
                            veritcallyCenter: !m,
                            onTransitionEnd: w,
                            textWrap: !0
                        }, Object(r.d)(jn, {
                            "aria-hidden": !0
                        }, Object(r.d)(On, {
                            size: "24px"
                        }, n)), Object(r.d)("div", {
                            css: !s && m ? fn(2) : "",
                            id: y
                        }, Object(r.d)(Mt.a, {
                            component: Ft.a
                        }, Object(r.d)(Pt.a, {
                            template: t,
                            limit: s ? void 0 : 120,
                            root: {
                                component: Bt.a
                            }
                        }))), m && Object(r.d)(jn, null, Object(r.d)(hn, {
                            onPress: x,
                            "aria-expanded": s,
                            "aria-controls": y,
                            "aria-label": e(s ? "show_less" : "show_more")
                        }, Object(r.d)(gn, {
                            size: 24,
                            direction: v && s ? "up" : "down",
                            "aria-hidden": !0
                        }))))
                    }))
                };

            function xn() {
                var e = Object(E.a)(["\n\t&-enter,\n\t&-appear {\n\t\ttransform: translateY(-100%);\n\t}\n\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\ttransform: translateY(0);\n\t\ttransition: transform ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\ttransform: translateY(0);\n\t}\n\n\t&-exit-active {\n\t\ttransform: translateY(-100%);\n\t\ttransition: transform ", "ms ", ";\n\t}\n"]);
                return xn = function() {
                    return e
                }, e
            }
            var wn = Object(g.z)(g.a, {
                    target: "eraual4"
                })("position:relative;box-shadow:", (function(e) {
                    return e.theme.boxShadow.sm
                }), ";"),
                kn = Object(g.z)("div", {
                    displayName: "TopBar",
                    target: "eraual3"
                })({
                    name: "1u8khmb",
                    styles: "position:relative;height:auto;bottom:0;z-index:1;@media (max-height: 330px){display:none;}"
                }),
                En = Object(g.z)("div", {
                    target: "eraual2"
                })("min-height:calc(", 42, "px + 2 * ", (function(e) {
                    return e.theme.AgentBar.css.padding
                }), ");"),
                Cn = {
                    name: "1pc9iid",
                    styles: "position:relative;box-shadow:none;padding:0"
                },
                zn = Object(g.z)(g.a, {
                    target: "eraual1"
                })("position:absolute;top:0;left:0;width:100%;box-shadow:", (function(e) {
                    return e.theme.boxShadow.sm
                }), ";", (function(e) {
                    return e.collapsed && Cn
                }), ";"),
                Sn = Object(g.z)("div", {
                    target: "eraual0"
                })("position:relative;width:100%;z-index:", (function(e) {
                    return e.collapsed ? 2 : 1
                }), ";"),
                _n = "cubic-bezier(0.14, 0, 0, 1)",
                Rn = {
                    enter: 150,
                    exit: 150
                },
                Tn = function(e) {
                    return e(xn(), 150, _n, 150, _n)
                },
                In = {
                    name: "kul0w8",
                    styles: "transition:opacity 100ms ease-in-out;position:relative"
                },
                Mn = Object(o.c)((function(e, t) {
                    var n = t.chatId;
                    return function(e) {
                        var t, r = e.getView("Chat/queue"),
                            a = Object(b.fb)(e),
                            i = Object(b.ib)(e),
                            o = Object(b.jb)(e),
                            c = Object(b.g)("logo", e),
                            l = c.enabled && "modern" === Object(b.t)(e);
                        return {
                            agent: Object(b.c)(n, e),
                            chatActive: e.getChat(n).active,
                            showAvatar: Object(b.g)("agentAvatar", e).enabled,
                            isRatingEnabled: Object(b.g)("rating", e).enabled,
                            logoPath: l ? (t = c.path, "https://" + Object(Z.l)(t)) : null,
                            showAgentBar: a,
                            showOfflineInformation: i,
                            showQueueInformation: o,
                            offlineInformation: e.localize(e.getApplicationState("limitReached") || !Object(b.H)(e) ? "agents_not_available" : "agents_not_available_continuous"),
                            queueTemplate: Object(b.o)(e),
                            numberInQueue: r && r.numberInQueue,
                            waitingTime: r && r.waitingTime,
                            showTopBar: Object(b.Y)(e),
                            hasNoVisibleEvents: Object(b.C)(e)
                        }
                    }
                }))((function(e) {
                    var t = e.agent,
                        n = e.chatId,
                        i = e.showAvatar,
                        o = e.isRatingEnabled,
                        l = e.logoPath,
                        s = e.showAgentBar,
                        u = e.scrollingDeltaSource,
                        d = e.isOnBottomSource,
                        m = e.showOfflineInformation,
                        b = e.offlineInformation,
                        f = e.showQueueInformation,
                        p = e.queueTemplate,
                        j = e.numberInQueue,
                        O = e.waitingTime,
                        y = e.showTopBar,
                        x = e.isLoadingHistory,
                        w = e.children,
                        k = e.hasNoVisibleEvents,
                        E = a.useRef(),
                        z = a.useRef(),
                        S = a.useRef(0),
                        _ = a.useState(!0),
                        R = _[0],
                        T = _[1],
                        I = a.useCallback((function() {
                            T(!0), E.current && (E.current.style.bottom = 0, E.current.style.height = "auto"), z.current && (z.current.style.opacity = 1)
                        }), [E]);
                    return Object(c.a)(u, (function(e) {
                        var t = e.y;
                        s && ("auto" === E.current.style.height && (S.current = E.current.offsetHeight), 1 === t && T(!1), !R && t < 1 && T(!0), E.current && (E.current.style.bottom = t * S.current + "px", E.current.style.height = S.current - t * S.current + "px"), z.current && (z.current.style.opacity = 1 - 2 * t))
                    })), a.useEffect((function() {
                        I()
                    }), [y, I]), a.useEffect((function() {
                        if (d) return d.subscribe((function(e) {
                            e && I()
                        }))
                    }), [d, I]), a.useEffect((function() {
                        E.current && Object(h.ub)(E.current.querySelectorAll("button")).forEach((function(e) {
                            e.tabIndex = R ? 0 : -1
                        }))
                    }), [R]), Object(r.d)(a.Fragment, null, Object(r.d)(kn, {
                        id: pn,
                        ref: E
                    }, Object(r.d)(r.a, null, (function(e) {
                        var a = e.css;
                        return Object(r.d)(v.a, {
                            appear: !0,
                            component: null,
                            exit: R
                        }, s && Object(r.d)(C.a, {
                            timeout: Rn,
                            classNames: Tn(a)
                        }, Object(r.d)("div", null, Object(r.d)(K, null), Object(r.d)(wn, {
                            noShrink: !0
                        }, Object(r.d)(g.q, {
                            flexFill: !0,
                            ref: z,
                            css: In
                        }, Object(r.d)(bn, {
                            agent: t,
                            chatId: n,
                            showAvatar: i,
                            logoPath: l,
                            isRatingEnabled: o
                        }))))))
                    }))), Object(r.d)(Sn, {
                        collapsed: !(f || m)
                    }, (f || m) && Object(r.d)(a.Fragment, null, Object(r.d)(K, null), Object(r.d)(En, null)), Object(r.d)(r.a, null, (function(e) {
                        var t = e.css;
                        return Object(r.d)(v.a, {
                            appear: f || m,
                            component: null
                        }, Object(r.d)(C.a, {
                            timeout: Rn,
                            classNames: Tn(t)
                        }, Object(r.d)(zn, {
                            collapsed: !(f || m)
                        }, f && Object(r.d)(yn, {
                            text: p.replace(/%number%/g, "**" + j + "**").replace(/%minutes%/g, "**" + Math.floor(O / 60) + "**"),
                            icon: Object(r.d)(U.i, {
                                size: 24
                            }),
                            isLoadingHistory: x,
                            forceExpanded: k
                        }), m && Object(r.d)(yn, {
                            text: b,
                            icon: Object(r.d)(U.l, null),
                            isLoadingHistory: x,
                            forceExpanded: k
                        }), w)))
                    }))))
                })),
                Fn = n(729),
                Pn = n(199),
                Bn = function(e) {
                    var t = e.children;
                    return a.createElement(g.i, {
                        date: "",
                        showMetaOnClick: !1,
                        system: !0
                    }, a.createElement(g.c, null, a.createElement(Pn.a, {
                        text: t
                    })))
                },
                qn = n(207);
            var An = Object(g.z)(qn.a, {
                    displayName: "SystemCard",
                    target: "e1r9cm3y0"
                })({
                    name: "1u4gyuh",
                    styles: "padding:8px;margin:2px 0;width:100%;max-width:270px;position:relative"
                }),
                Hn = Object(g.z)("div", {
                    target: "e1q4zsg91"
                })("display:flex;flex-direction:row;position:absolute;top:-21px;left:0;right:0;color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";"),
                Ln = Object(g.z)("div", {
                    target: "e1q4zsg90"
                })("display:flex;justify-content:center;align-items:center;overflow:hidden;margin:0 auto;border-radius:", (function(e) {
                    return e.theme.borderRadius.round
                }), ";width:", 42, "px;height:", 42, "px;background-color:", (function(e) {
                    var t = e.theme;
                    return e.backgroundColor || t.colors.cta
                }), ";"),
                Dn = function(e) {
                    var t = e.children,
                        n = e.backgroundColor;
                    return a.createElement(Hn, {
                        "aria-hidden": !0
                    }, a.createElement(Ln, {
                        backgroundColor: n
                    }, t))
                },
                Vn = function(e) {
                    return Object(r.c)("margin-left:4px;margin-top:3px;fill:currentColor;transform:", "scaleY(" + ("up" === e ? -1 : 1) + ")", ";")
                },
                Nn = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? "down" : t,
                        a = Object(k.a)(e, ["direction"]);
                    return Object(r.d)("svg", Object(f.a)({
                        viewBox: "0 0 7 4",
                        width: "7px",
                        height: "4px",
                        css: Vn(n)
                    }, a), Object(r.d)("path", {
                        d: "M1.1,0.2C0.9,0,0.5,0,0.4,0.2s-0.2,0.5,0,0.7l2.8,2.8c0.2,0.2,0.5,0.2,0.7,0l2.8-2.8c0.2-0.2,0.2-0.5,0-0.7S6.2,0,6,0.2 L3.5,2.7L1.1,0.2z"
                    }))
                },
                Un = n(22),
                Wn = Object(g.z)("button", {
                    target: "eentevd0"
                })("display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;background:none;border:none;margin-top:8px;font-size:12px;text-align:center;cursor:pointer;color:", (function(e) {
                    var t = e.theme;
                    return Object(Ht.h)(t.colors.cta) ? Object(Un.f)(.6, t.colors.cta) : t.colors.cta
                }), ";");
            var Yn = Object(g.z)("div", {
                    target: "e1g195pu0"
                })({
                    name: "10d2z50",
                    styles: "position:absolute;top:50%;bottom:0;left:0;right:0;pointer-events:none;background:linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9))"
                }),
                Gn = Object(g.z)("div", {
                    target: "e9s6ynt0"
                })("position:relative;overflow:hidden;height:auto;transition:max-height 300ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";");
            var Zn = Object(g.z)("div", {
                    target: "e1cdxu9o0"
                })({
                    name: "11w4ikw",
                    styles: "height:auto;padding:8px"
                }),
                Kn = Object(o.c)((function(e, t) {
                    var n = t.icon,
                        r = e.getApplicationState("config").theme;
                    return {
                        showIcon: !!n && "modern" !== r.name,
                        rtl: e.getApplicationState("rtl"),
                        localize: e.localize
                    }
                }))((function(e) {
                    var t, n, i = e.icon,
                        o = e.showIcon,
                        l = e.children,
                        s = e.collapsible,
                        u = void 0 !== s && s,
                        d = e.defaultCollapsed,
                        m = void 0 !== d && d,
                        b = e.collapsedHeight,
                        p = void 0 === b ? 100 : b,
                        g = e.collapseThreshold,
                        v = void 0 === g ? 20 : g,
                        j = e.rtl,
                        O = e.localize,
                        x = e.dataTestId,
                        w = (void 0 === x && y.a, a.useRef(0)),
                        k = a.useRef(!1),
                        E = a.useRef(null),
                        C = a.useRef(null),
                        z = Object(ie.f)(),
                        S = Object(ie.f)(),
                        _ = a.useState(!1),
                        R = _[0],
                        T = _[1],
                        I = a.useState(u),
                        M = I[0],
                        F = I[1],
                        P = Object(c.d)(h.v),
                        B = Object(c.d)((function() {
                            return u && m ? (e = p + "px", Object(r.c)("max-height:", e, ";")) : null;
                            var e
                        })),
                        q = a.useCallback((function(e) {
                            C.current.style.maxHeight = "number" === typeof e ? e + "px" : e
                        }), []),
                        A = a.useCallback((function() {
                            T(!R)
                        }), [R]),
                        H = a.useCallback((function() {
                            R || q("none")
                        }), [R, q]);
                    return a.useEffect((function() {
                        return function() {
                            return cancelAnimationFrame(w.current)
                        }
                    }), []), a.useEffect((function() {
                        var e = E.current.offsetHeight,
                            t = e > p && e - p > v;
                        F(t && u), !k.current && u && T(t && m), k.current = u
                    }), [u, m, p, v]), a.useEffect((function() {
                        M ? (q(E.current.offsetHeight), R && (cancelAnimationFrame(w.current), w.current = requestAnimationFrame((function() {
                            return q(p)
                        })))) : q("none")
                    }), [M, R, p, q]), Object(r.d)("div", {
                        css: o && (n = "21px", Object(r.c)("padding-top:", n, ";")),
                        role: "row"
                    }, Object(r.d)(An, Object(f.a)({
                        rtl: j,
                        role: "gridcell"
                    }, z), o ? i : null, Object(r.d)(Gn, {
                        id: P,
                        "aria-hidden": R,
                        ref: C,
                        onTransitionEnd: H,
                        css: [o && (t = "12px", Object(r.c)("margin-top:", t, ";")), B, ""]
                    }, Object(r.d)(Zn, {
                        ref: E
                    }, l), R && Object(r.d)(Yn, null)), M && Object(r.d)(Wn, Object(f.a)({
                        onClick: A,
                        "aria-controls": P,
                        "aria-expanded": !R
                    }, S), Object(r.d)("span", null, O(R ? "show_more" : "show_less")), Object(r.d)(Nn, {
                        direction: R ? "down" : "up",
                        "aria-hidden": !0
                    }))))
                })),
                Qn = n(27),
                Jn = n(41),
                Xn = n(187),
                $n = [].concat(Object.values(u.a), ["https://customer-mobile-app.ngrok.io/chat-widget-moment/"]),
                er = function(e) {
                    var t = Object(Xn.a)(e);
                    return $n.some((function(e) {
                        return 0 === t.lastIndexOf(e, 0)
                    }))
                },
                tr = function(e, t) {
                    var n = e.getView("Moment");
                    return {
                        available: Object(b.y)(e),
                        disabled: n.show && !er(n.data.url),
                        showMoment: function() {
                            var n = Object(Z.a)({
                                    source: t,
                                    "moment-title": u.h
                                }),
                                r = u.a.staging + "?" + n;
                            Object(x.F)(e, {
                                url: r
                            })
                        }
                    }
                };
            var nr = Object(g.z)("label", {
                    target: "e1fikopb8"
                })("display:block;padding-bottom:", (function(e) {
                    return e.single ? "0px" : "12px"
                }), ";", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                rr = Object(g.z)(Ae.m, {
                    target: "e1fikopb7"
                })({
                    name: "haah45",
                    styles: "margin:0;padding:0;display:flex;width:40px;cursor:pointer;border:1px solid;align-items:center;justify-content:center"
                }),
                ar = Object(g.z)(rr, {
                    target: "e1fikopb6"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.none
                }), ";", (function(e) {
                    var t, n = e.rtl ? "Left" : "Right";
                    return Object(r.c)(((t = {})["borderTop" + n + "Radius"] = 6, t["borderBottom" + n + "Radius"] = 6, t), "")
                }), " color:", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.text.white : t.colors.ctaText
                }), ";border:1px solid ", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.text.muted : t.colors.cta
                }), ";background-color:", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.text.muted : t.colors.cta
                }), ";"),
                ir = Object(g.z)(rr, {
                    target: "e1fikopb5"
                })("color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";border:none;background-color:transparent;"),
                or = Object(g.z)("span", {
                    target: "e1fikopb4"
                })("width:100%;align-items:center;padding:8px;margin:1px;", (function(e) {
                    return e.theme.typography.input
                }), " ", (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t && Object(r.c)("color:", n.colors.cta, ";")
                }), ";"),
                cr = Object(g.z)("form", {
                    target: "e1fikopb3"
                })({
                    name: "nj1ofm",
                    styles: "display:flex;position:relative;flex-direction:row"
                }),
                lr = Object(g.z)("div", {
                    target: "e1fikopb2"
                })("display:flex;justify-content:center;align-items:center;height:100%;position:absolute;padding:0 6px;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";", (function(e) {
                    var t;
                    return (t = {})[e.rtl ? "right" : "left"] = 0, t
                }), ";"),
                sr = Object(g.z)("div", {
                    target: "e1fikopb1"
                })("border-top:1px solid ", (function(e) {
                    return e.theme.colors.divider
                }), ";margin:", (function(e) {
                    var t = e.theme;
                    return t.spaces.space6 + " " + t.spaces.space0
                }), ";"),
                ur = Object(g.z)("div", {
                    target: "e1fikopb0"
                })({
                    name: "192s9p1",
                    styles: "display:flex;flex-direction:row;justify-content:center;align-items:center"
                }),
                dr = function(e) {
                    var t, n = e ? "Left" : "Right",
                        a = e ? "Right" : "Left";
                    return Object(r.c)(((t = {
                        margin: 0,
                        minWidth: 0
                    })["padding" + a] = 34, t["border" + n] = "none", t["borderTop" + n + "Radius"] = 0, t["borderBottom" + n + "Radius"] = 0, t), "")
                },
                mr = Object(o.c)((function(e, t) {
                    var n = t.event,
                        r = t.chatId,
                        a = function(t) {
                            return Object(x.N)(e, {
                                email: t
                            }), new Promise((function(t) {
                                return e.once("customer_updated", t)
                            }))
                        };
                    return function(t) {
                        var i = t.getSessionUser().email,
                            o = t.getApplicationState().rtl,
                            c = t.getChat(r).properties,
                            l = tr(t, "ask-for-email");
                        if ("ask_for_email" !== n.properties.formId) return {
                            rtl: o,
                            email: i,
                            chatTransfer: l,
                            submitEmail: function(e) {
                                return Object(Qn.d)("ask_for_email_form_submitted", {
                                    reason: "agent_offline"
                                }), a(e)
                            },
                            message: t.localize("email_prompt_first_time"),
                            confirmation: t.localize("email_prompt_confirmation"),
                            active: n.thread === c.lastThread
                        };
                        var s = n.properties.fields.find((function(e) {
                                return "information" === e.type
                            })),
                            u = t.getEvents(r).find((function(e) {
                                return e.id !== n.id && e.thread === n.thread && e.properties.formId === n.properties.formId
                            }));
                        if (u) return {
                            rtl: o,
                            chatTransfer: l,
                            message: "",
                            active: !1,
                            email: u.properties.fields[0].answer,
                            confirmation: s.label
                        };
                        var d = n.properties.fields.find((function(e) {
                            return "email" === e.type
                        }));
                        return d ? {
                            rtl: o,
                            email: i,
                            chatTransfer: l,
                            active: !0,
                            alwaysShowInput: !0,
                            message: d.label,
                            submitEmail: function(t) {
                                return Object(Qn.d)("ask_for_email_form_submitted", {
                                        reason: "agent_inactivity_timeout"
                                    }),
                                    function(t) {
                                        return Promise.all([a(t), e.requestUpdateEvent(r, n.id, {
                                            properties: {
                                                answers: {
                                                    email: t
                                                }
                                            }
                                        })])
                                    }(t)
                            },
                            confirmation: s.label,
                            hidden: n.thread !== c.lastThread
                        } : {
                            rtl: o,
                            chatTransfer: l,
                            email: "",
                            active: !1,
                            confirmation: "",
                            message: s.label
                        }
                    }
                }))((function(e) {
                    var t = e.rtl,
                        n = e.email,
                        o = e.active,
                        l = e.hidden,
                        s = e.message,
                        u = e.confirmation,
                        d = e.alwaysShowInput,
                        m = e.chatTransfer,
                        b = e.submitEmail,
                        p = Object(i.useFrame)(),
                        h = a.useRef(null),
                        g = a.useRef(null),
                        v = a.useState(!n),
                        j = v[0],
                        O = v[1],
                        y = a.useState(n || ""),
                        x = y[0],
                        w = y[1],
                        k = n && !d ? u : s,
                        E = Object(gt.a)({
                            type: "email",
                            autoComplete: "email",
                            placeholder: "Email",
                            value: x,
                            onChange: w,
                            label: k
                        }, g),
                        C = E.inputProps,
                        z = E.labelProps,
                        S = a.useCallback((function() {
                            O(!0), w(n || "")
                        }), [n]),
                        _ = a.useCallback((function() {
                            n && O(!1)
                        }), [n]);
                    if (Object(c.m)(h, _, p), l) return null;
                    if (s && !u && !n) return Object(r.d)(Kn, null, Object(r.d)(nr, {
                        single: !0
                    }, Object(r.d)(Pt.a, {
                        preserveLists: !0,
                        template: s,
                        root: {
                            component: Bt.a
                        }
                    })));
                    var R = d || (!n || o && j),
                        T = !x;
                    return Object(r.d)(Kn, null, Object(r.d)(nr, R && z, Object(r.d)(Mt.a, {
                        component: Ft.a
                    }, Object(r.d)(Pt.a, {
                        preserveLists: !0,
                        template: k,
                        root: {
                            component: Bt.a
                        }
                    }))), Object(r.d)(cr, {
                        ref: h,
                        onSubmit: function(e) {
                            e.preventDefault(), b(x).then((function() {
                                return O(!1)
                            }))
                        }
                    }, R ? Object(r.d)(a.Fragment, null, Object(r.d)(Ue, Object(f.a)({}, C, {
                        css: dr(t)
                    })), Object(r.d)(lr, {
                        rtl: t
                    }, Object(r.d)(Ae.q, {
                        "aria-hidden": !0
                    })), Object(r.d)(ar, {
                        rtl: t,
                        type: "submit",
                        disabled: T,
                        "aria-label": "Submit an email"
                    }, Object(r.d)(Ae.a, {
                        "aria-hidden": !0
                    }))) : Object(r.d)(a.Fragment, null, Object(r.d)(or, {
                        ellipsis: !0,
                        active: o
                    }, n), o && Object(r.d)(ir, {
                        onPress: S,
                        "aria-label": "Edit an email"
                    }, Object(r.d)(Ae.h, {
                        "aria-hidden": !0
                    })))), m.available && Object(r.d)(a.Fragment, null, Object(r.d)(sr, null), Object(r.d)(nr, null, "Prefer mobile notifications?"), Object(r.d)(Jn.a, {
                        variant: "default",
                        "aria-label": "Download app",
                        disabled: m.disabled,
                        onPress: function() {
                            Object(Qn.d)("chat_app_button_clicked", {
                                ui_source: "ask_for_email"
                            }), m.showMoment()
                        },
                        label: Object(r.d)(ur, null, Object(r.d)(Ae.s, {
                            "aria-hidden": !0
                        }), Object(r.d)("span", null, "Get reply via mobile app"))
                    })))
                }));
            var br = Object(g.z)("div", {
                    target: "efus62t2"
                })({
                    name: "17pqesx",
                    styles: "margin-bottom:8px;a{color:inherit;}"
                }),
                fr = Object(g.z)("div", {
                    target: "efus62t1"
                })("width:100%;margin-bottom:2px;font-size:14px;color:", (function(e) {
                    return e.theme.colors.text.muted
                }), ";"),
                pr = Object(g.z)("div", {
                    target: "efus62t0"
                })("width:100%;font-size:14px;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";"),
                hr = function(e) {
                    var t = e.fields;
                    return a.createElement("div", null, t.map((function(e, t) {
                        var n = e.label,
                            r = e.answer;
                        return a.createElement(br, {
                            key: t
                        }, a.createElement(fr, {
                            textWrap: !0
                        }, a.createElement(Mt.a, {
                            component: Ft.a
                        }, a.createElement(Pt.a, {
                            preserveLists: !0,
                            template: n,
                            root: {
                                component: Bt.a
                            }
                        }))), a.createElement(pr, {
                            textWrap: !0
                        }, a.createElement(Bt.a, null, "string" === typeof r ? r : r.join(", "))))
                    })))
                },
                gr = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Object(J.a)(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        var e = this.props,
                            t = e.form,
                            n = e.name,
                            r = t.getFieldState(n);
                        r && r.value && t.change(n, void 0)
                    }, n.render = function() {
                        return this.props.children
                    }, t
                }(a.Component);
            var vr = function(e) {
                    var t = e.when,
                        n = e.children;
                    return t ? a.createElement(ye.b, {
                        subscription: yt
                    }, (function(n) {
                        var r = n.form;
                        return n.values[t] ? a.createElement(gr, Object(f.a)({}, e, {
                            form: r
                        })) : null
                    })) : a.createElement(a.Fragment, null, n)
                },
                jr = Object(g.z)("p", {
                    target: "ecj3oet0"
                })("margin:0;a{color:inherit;}", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                Or = function(e) {
                    var t = e.children;
                    return a.createElement(jr, null, "string" === typeof t ? a.createElement(Mt.a, {
                        component: Ft.a
                    }, a.createElement(Pt.a, {
                        template: t,
                        root: {
                            component: Bt.a
                        }
                    })) : t)
                },
                yr = n(730),
                xr = n(747),
                wr = n(737),
                kr = function(e) {
                    var t = e.children,
                        n = e.showRequiredMark,
                        r = void 0 !== n && n,
                        i = Object(k.a)(e, ["children", "showRequiredMark"]);
                    return a.createElement(Re, Object(f.a)({
                        isRequired: r
                    }, i), "string" === typeof t ? a.createElement(Mt.a, {
                        component: Ft.a
                    }, a.createElement(Pt.a, {
                        preserveLists: !0,
                        template: t,
                        root: {
                            component: Bt.a
                        }
                    })) : t)
                };
            var Er = Object(g.z)(g.q, {
                    target: "egdebj41"
                })((function(e) {
                    var t = e.theme,
                        n = t.spaceBase,
                        r = t.typography;
                    return Object(f.a)({}, r.basic, {
                        margin: .5 * n + "px 0"
                    })
                }), ";"),
                Cr = Object(g.z)(Se, {
                    target: "egdebj40"
                })((function(e) {
                    return {
                        paddingLeft: e.theme.spaceBase + "px"
                    }
                }), ";"),
                zr = {
                    name: "ozd7xs",
                    styles: "flex-shrink:0"
                },
                Sr = function(e) {
                    var t = e.inputId,
                        n = e.label,
                        a = e.children;
                    return Object(r.d)(Er, null, Object(r.d)("div", {
                        css: zr
                    }, a), Object(r.d)(Cr, {
                        htmlFor: t
                    }, Object(r.d)(Bt.a, null, n)))
                };
            var _r = {
                    name: "1mq73z0",
                    styles: "border:none;margin:0;padding:0;max-height:100%"
                },
                Rr = function(e) {
                    var t = e.checkboxGroupState,
                        n = e.label,
                        i = e.inputId,
                        o = e.defaultSelected,
                        c = Object(k.a)(e, ["checkboxGroupState", "label", "inputId", "defaultSelected"]),
                        l = a.useRef(null),
                        s = Object(wr.a)({
                            defaultSelected: o
                        }),
                        u = Object(xr.a)(Object(f.a)({}, c, {
                            id: i,
                            children: []
                        }), s, l).inputProps;
                    return Object(r.d)(Sr, {
                        inputId: i,
                        label: n
                    }, Object(r.d)(it, Object(f.a)({
                        ref: l
                    }, Object(ee.h)(u, {
                        onChange: function(e) {
                            t.setSelectedValue(e.target.value, e.target.checked)
                        }
                    }))))
                },
                Tr = [],
                Ir = function(e) {
                    var t = e.options,
                        n = e.label,
                        a = e.name,
                        i = e.required,
                        o = Object(ye.c)(a, {
                            defaultValue: Tr
                        }),
                        c = function(e) {
                            var t = e.value,
                                n = e.onChange;
                            return {
                                setSelectedValue: function(e, r) {
                                    var a = r ? t.concat(e) : t.filter((function(t) {
                                        return t !== e
                                    }));
                                    n(a)
                                }
                            }
                        }(o.input),
                        l = kt(o).errorMessageProps,
                        s = Object(ie.h)({
                            onBlurWithin: o.input.onBlur,
                            onFocusWithin: o.input.onFocus
                        }).focusWithinProps;
                    return Object(r.d)(Tt, null, Object(r.d)("fieldset", Object(f.a)({
                        css: _r
                    }, s), Object(r.d)(kr, {
                        showRequiredMark: i
                    }, n), t.map((function(e, t) {
                        return Object(r.d)(ie.a, {
                            preventFocusOnPress: !0,
                            key: t
                        }, Object(r.d)(Rr, {
                            key: t,
                            inputId: a + "_" + t,
                            label: e.label,
                            value: e.value,
                            checkboxGroupState: c,
                            defaultSelected: Object(h.D)(e.value, o.input.value)
                        }))
                    })), Object(r.d)(Ce, l)))
                },
                Mr = function(e) {
                    var t = a.useRef(null),
                        n = e.label,
                        r = e.required,
                        i = Et(t, Object(f.a)({}, e, {
                            autoComplete: "name" === e.name ? e.name : "off"
                        })),
                        o = i.inputProps,
                        c = i.labelProps,
                        l = i.errorMessageProps;
                    return a.createElement(Tt, null, a.createElement(qt, Object(f.a)({
                        showRequiredMark: r
                    }, c), n), a.createElement(We, Object(f.a)({}, o, {
                        errorMessageProps: l,
                        ref: t
                    })))
                },
                Fr = function(e) {
                    var t = a.useRef(null),
                        n = e.label,
                        r = e.required,
                        i = Et(t, Object(f.a)({}, e, {
                            type: "email",
                            autoComplete: "email"
                        })),
                        o = i.inputProps,
                        c = i.labelProps,
                        l = i.errorMessageProps;
                    return a.createElement(Tt, null, n && a.createElement(qt, Object(f.a)({
                        showRequiredMark: r
                    }, c), n), a.createElement(We, Object(f.a)({}, o, {
                        ref: t,
                        errorMessageProps: l
                    })))
                },
                Pr = n(738),
                Br = n(739);
            var qr = {
                    name: "1mq73z0",
                    styles: "border:none;margin:0;padding:0;max-height:100%"
                },
                Ar = function(e) {
                    var t = e.radioGroupState,
                        n = e.label,
                        a = e.inputId,
                        i = Object(k.a)(e, ["radioGroupState", "label", "inputId"]),
                        o = Object(Pr.a)(Object(f.a)({}, i, {
                            id: a,
                            children: []
                        }), t, null).inputProps;
                    return Object(r.d)(Sr, {
                        inputId: a,
                        label: n
                    }, Object(r.d)(ft, o))
                },
                Hr = function(e) {
                    var t = e.options,
                        n = e.label,
                        a = e.name,
                        i = e.required,
                        o = Object(ye.c)(a),
                        c = Object(Br.a)(o.input),
                        l = kt(o),
                        s = l.validationState,
                        u = l.errorMessageProps,
                        d = Object(Pr.b)({
                            name: a,
                            label: n,
                            isRequired: i,
                            validationState: s
                        }, c),
                        m = d.radioGroupProps,
                        b = d.labelProps;
                    return Object(r.d)(Tt, null, Object(r.d)("fieldset", Object(f.a)({
                        css: qr
                    }, Object(ee.h)(m, {
                        onBlur: o.input.onBlur,
                        onFocus: o.input.onFocus
                    })), Object(r.d)(kr, Object(f.a)({
                        showRequiredMark: i
                    }, b), n), t.map((function(e, t) {
                        return Object(r.d)(ie.a, {
                            preventFocusOnPress: !0,
                            key: t
                        }, Object(r.d)(Ar, {
                            key: t,
                            inputId: a + "_" + t,
                            label: e.label,
                            value: e.value,
                            radioGroupState: c
                        }))
                    })), Object(r.d)(Ce, u)))
                },
                Lr = Object(g.z)("option", {
                    target: "e1t56ivc0"
                })("color:", (function(e) {
                    return e.primary ? e.theme.colors.success : "inherit"
                }), ";"),
                Dr = function(e) {
                    var t = e.meta,
                        n = e.name,
                        r = e.label,
                        i = e.value,
                        o = e.localize,
                        c = void 0 !== t && void 0 !== t.online,
                        l = Boolean(t && t.online),
                        s = " (" + o(l ? "skill_status_online" : "skill_status_offline") + ")";
                    return a.createElement(Lr, {
                        name: n,
                        primary: c && l,
                        value: i
                    }, "" + r + (c ? s : ""))
                },
                Vr = function(e) {
                    var t = e.options,
                        n = e.label,
                        r = e.name,
                        i = e.localize,
                        o = e.required,
                        c = Object(ye.c)(r);
                    return a.createElement(Tt, null, a.createElement(qt, {
                        showRequiredMark: o,
                        htmlFor: r
                    }, n), a.createElement(Ne, Object(f.a)({}, c, {
                        id: r,
                        name: r
                    }), a.createElement("option", {
                        value: ""
                    }, i("forms_choose")), t.map((function(e, t) {
                        return a.createElement(Dr, {
                            key: t,
                            meta: e.meta,
                            label: e.label,
                            localize: i,
                            name: r,
                            value: e.value
                        })
                    }))))
                };
            var Nr = Object(g.z)("fieldset", {
                    target: "eptcq7c0"
                })({
                    name: "1mq73z0",
                    styles: "border:none;margin:0;padding:0;max-height:100%"
                }),
                Ur = function(e) {
                    var t = e.label,
                        n = e.name,
                        r = e.required,
                        i = void 0 !== r && r,
                        o = Object(ye.c)(n),
                        c = Object(Br.a)(o.input),
                        l = Object(Pr.b)({
                            name: n,
                            label: t,
                            isRequired: i
                        }, c),
                        s = l.radioGroupProps,
                        u = l.labelProps;
                    return a.createElement(Tt, null, a.createElement(Nr, Object(ee.h)(s, {
                        onBlur: o.input.onBlur,
                        onFocus: o.input.onFocus
                    }), a.createElement(kr, Object(f.a)({
                        showRequiredMark: i
                    }, u), t), a.createElement(qe, Object(f.a)({}, o, {
                        required: i
                    }))))
                };
            var Wr = Object(g.z)("div", {
                    target: "e12liu9t1"
                })("margin:0;a{color:inherit;}ul,ol{margin:8px 0;display:inline-block;white-space:normal;width:100%;padding-left:24px;}li{margin:4px 0;}", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                Yr = Object(g.z)("h2", {
                    target: "e12liu9t0"
                })({
                    name: "143wq1t",
                    styles: "font-size:14px;font-weight:normal;margin:0;a{text-decoration:underline;}"
                }),
                Gr = {
                    information: function(e) {
                        var t = e.value;
                        return a.createElement(Tt, null, a.createElement(Wr, {
                            preserveLines: !0,
                            textWrap: !0
                        }, a.createElement(Yr, null, a.createElement(Pt.a, {
                            template: t,
                            root: {
                                component: Bt.a
                            }
                        }))))
                    },
                    text: Mr,
                    textarea: At,
                    email: Fr,
                    rating: Ur,
                    radio: Hr,
                    checkbox: Ir,
                    select: Vr
                };
            var Zr = function(e) {
                    var t = e.type;
                    return Gr[t]
                },
                Kr = function(e, t) {
                    switch (t) {
                        case "prechat":
                            return e("prechat_submit_label");
                        case "ticket":
                            return e("offline_form_submit_label");
                        default:
                            return e("submit")
                    }
                },
                Qr = Object(o.c)((function(e, t) {
                    var n = t.chatId,
                        r = t.eventId,
                        a = t.type,
                        i = function(t) {
                            if ("prechat" === a || "ticket" === a) {
                                var i = t.name,
                                    o = t.email,
                                    c = Object(h.f)({
                                        name: i,
                                        email: o
                                    });
                                Object(h.F)(c) || e.updateUser(e.getSessionUserId(), c)
                            }
                            return e.requestUpdateEvent(n, r, {
                                properties: {
                                    answers: t
                                }
                            })
                        };
                    return function(e) {
                        return {
                            localize: e.localize,
                            mobile: e.getApplicationState("mobile"),
                            sendForm: i,
                            sessionUser: e.getSessionUser()
                        }
                    }
                }))((function(e) {
                    var t = e.id,
                        n = e.type,
                        r = e.fields,
                        i = e.mobile,
                        o = e.localize,
                        l = e.sendForm,
                        s = e.sessionUser,
                        u = Object(c.i)(t + ":" + n),
                        d = Object(c.d)((function() {
                            var e = u.get(),
                                t = function(e, t) {
                                    var n = Object(h.P)((function(e) {
                                            return "string" === typeof e ? Object(h.yb)(e) : e
                                        }), Object(h.cb)(["email", "name"], e)),
                                        r = n.name,
                                        a = n.email;
                                    return r === t("client") ? {
                                        email: a
                                    } : {
                                        email: a,
                                        name: r
                                    }
                                }(s, o);
                            return function(e, t, n) {
                                return e.map((function(e) {
                                    var r = n ? n[e.name] : null,
                                        a = t ? t[e.name] : null,
                                        i = r || a;
                                    return i ? Object(f.a)({}, e, {
                                        defaultValue: i
                                    }) : e
                                })).filter((function(e) {
                                    return "defaultValue" in e
                                })).reduce((function(e, t) {
                                    var n = t.name,
                                        r = t.defaultValue;
                                    return e[n] = r, e
                                }), {})
                            }(r, t, e)
                        })),
                        m = a.useRef({
                            counter: 0,
                            lastValues: null,
                            lastResult: null
                        }),
                        b = a.useCallback((function(e) {
                            m.current.counter++, m.current.lastValues = Object(f.a)({}, e);
                            var t = r.reduce((function(t, n) {
                                var r, a, i, c = n.required,
                                    l = n.name;
                                return !c || void 0 !== typeof(a = e[l]) && (Object(h.E)(a) ? !Object(h.F)(a) : Boolean(a)) ? "maxLength" in n && "number" === typeof n.maxLength && e[l] && e[l].length > n.maxLength ? Object(f.a)({}, t, ((i = {})[l] = "Cannot be longer than " + n.maxLength + " characters long.", i)) : t : Object(f.a)({}, t, ((r = {})[l] = o("survey_fill_in_required_fields"), r))
                            }), {});
                            return m.current.lastResult = Object(f.a)({}, t), t
                        }), [r, o]);
                    return a.createElement(Rt, {
                        id: t,
                        mobile: i,
                        initialValues: d,
                        validate: b,
                        onSubmit: function(e) {
                            var t = m.current,
                                n = t.counter,
                                r = t.lastValues,
                                a = t.lastResult,
                                i = b(e);
                            return 0 !== Object.keys(i).length && Object(Qn.c)("invalid_form_submit_4", null, Object(h.P)((function(e) {
                                return JSON.stringify(e)
                            }), {
                                validationErrors: i,
                                validationCounter: n,
                                lastValidationValues: r,
                                lastValidationResult: a,
                                values: e
                            })), l(e).then((function() {
                                u.destroy()
                            }), (function(e) {
                                var t;
                                return e || ((t = {})[yr.a] = "Please check your internet connection and then try again.", t)
                            }))
                        },
                        submitLabel: Kr(o, n)
                    }, r.map((function(e, t) {
                        var n = Zr(e);
                        return a.createElement(g.q, {
                            key: t
                        }, a.createElement(vr, {
                            name: e.name,
                            when: e.dependOn
                        }, a.createElement(n, Object(f.a)({}, e, {
                            localize: o
                        }))))
                    })), a.createElement(ye.b, {
                        onChange: function(e) {
                            var t = e.values;
                            e.dirty && u.set(t)
                        },
                        subscription: {
                            values: !0,
                            dirty: !0
                        }
                    }))
                })),
                Jr = function() {
                    var e = Object(p.g)();
                    return a.createElement(Dn, {
                        backgroundColor: e.colors.cta
                    }, a.createElement(U.s, {
                        color: e.colors.ctaText
                    }))
                },
                Xr = function() {
                    var e = Object(p.g)();
                    return a.createElement(Dn, {
                        backgroundColor: e.colors.cta
                    }, a.createElement(U.v, {
                        color: e.colors.ctaText
                    }))
                },
                $r = function(e) {
                    var t = e.answered,
                        n = Object(p.g)();
                    return a.createElement(Dn, {
                        backgroundColor: t ? n.colors.success : n.colors.cta
                    }, t ? a.createElement(U.y, {
                        color: n.colors.text.black
                    }) : a.createElement(U.m, {
                        color: n.colors.ctaText
                    }))
                },
                ea = function(e) {
                    var t = e.localize;
                    return a.createElement(Or, null, t("offline_message_sent"))
                },
                ta = function(e) {
                    var t = e.chatId,
                        n = e.id,
                        r = e.setScrollTargetNode,
                        i = e.form,
                        l = Object(k.a)(e, ["chatId", "id", "setScrollTargetNode", "form"]),
                        s = i.properties,
                        u = s.formId,
                        d = s.formType,
                        m = s.fields,
                        p = s.answered,
                        h = m.filter((function(e) {
                            return e.answer && e.label
                        })),
                        g = b.M(i),
                        v = a.useRef(null);
                    if (Object(c.n)((function() {
                            !p && v.current && r && r(v.current)
                        })), g) return null;
                    var j = function(e) {
                            switch (e) {
                                case "prechat":
                                    return Jr;
                                case "postchat":
                                    return Xr;
                                case "ticket":
                                    return $r;
                                default:
                                    return null
                            }
                        }(d),
                        O = function(e) {
                            return "ticket" === e ? ea : hr
                        }(d);
                    return a.createElement("div", Object(f.a)({
                        ref: v
                    }, l), a.createElement(o.a, null, (function(e) {
                        return a.createElement(Kn, {
                            defaultCollapsed: !0,
                            collapsible: p,
                            icon: j && a.createElement(j, {
                                answered: p
                            })
                        }, p ? a.createElement(O, {
                            fields: h,
                            localize: e
                        }) : a.createElement(Qr, {
                            key: d,
                            chatId: t,
                            eventId: n,
                            id: u,
                            type: d,
                            fields: m
                        }))
                    })))
                };
            var na = {
                    name: "w1atjl",
                    styles: "width:100%;height:100%"
                },
                ra = Object(g.z)("div", {
                    target: "eprpde50"
                })("flex-shrink:0;width:24px;height:24px;border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";overflow:hidden;"),
                aa = function() {
                    return Object(r.d)(Ae.o, null, Object(r.d)(Ae.w, null))
                },
                ia = function(e) {
                    var t = e.src;
                    return t ? Object(r.d)(ra, null, Object(r.d)(g.h, {
                        src: t,
                        css: na
                    }, (function(e) {
                        switch (e.imageStatus) {
                            case "pending":
                                return Object(r.d)(Ae.o, null);
                            case "failed":
                                return Object(r.d)(aa, null);
                            default:
                                return null
                        }
                    }))) : Object(r.d)(ra, null, Object(r.d)(aa, null))
                };
            var oa = Object(g.z)("h2", {
                    target: "e5gms8x0"
                })({
                    name: "k9orpe",
                    styles: "flex-grow:1;flex-basis:100%;font-weight:700;font-size:14px;margin:0 8px"
                }),
                ca = Object(g.z)(g.q, {
                    target: "e1txcupw0"
                })("border-bottom:1px solid ", (function(e) {
                    return e.theme.colors.divider
                }), ";padding:0 0.8em;height:48px;display:flex;align-items:center;");
            var la = Object(g.z)("form", {
                    target: "ewg5kgh2"
                })({
                    name: "4bgdod",
                    styles: "display:block;position:relative"
                }),
                sa = Object(g.z)(Ue, {
                    target: "ewg5kgh1"
                })({
                    name: "1syokg1",
                    styles: "height:50px;padding-right:calc(36px + (2 * 8px))"
                }),
                ua = Object(g.z)(U.j, {
                    target: "ewg5kgh0"
                })("width:36px;height:36px;position:absolute;right:8px;top:calc(50% - 18px);display:flex;justify-content:center;align-items:center;color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";transition:background-color 100ms ease-in-out;", (function(e) {
                    var t = e.disabled,
                        n = e.theme;
                    return t ? {
                        backgroundColor: n.colors.grayscale[400]
                    } : {
                        backgroundColor: Object(Ht.h)(n.colors.cta) ? Object(Un.f)(.6, n.colors.cta) : n.colors.cta
                    }
                }), ";"),
                da = function(e) {
                    var t = e.label,
                        n = e.titleId,
                        r = e.descriptionId,
                        i = e.onSubmit,
                        o = e.disabled,
                        c = a.useState(""),
                        l = c[0],
                        s = c[1],
                        u = "" === l || o,
                        d = function() {
                            u || i(l)
                        };
                    return a.createElement(la, {
                        onSubmit: function(e) {
                            e.preventDefault(), d()
                        }
                    }, a.createElement(sa, {
                        type: "text",
                        placeholder: t,
                        disabled: o,
                        value: l,
                        "aria-labelledby": n,
                        "aria-describedby": r,
                        onChange: function(e) {
                            return s(null == e ? void 0 : e.target.value)
                        }
                    }), a.createElement(ua, {
                        disabled: u,
                        "aria-label": t,
                        onPress: d
                    }, a.createElement(U.t, {
                        size: 32
                    })))
                };
            var ma = Object(g.z)(ca, {
                    target: "e1j7xo754"
                })({
                    name: "w8lbxe",
                    styles: "border-bottom:0"
                }),
                ba = Object(g.z)("div", {
                    displayName: "BoosterContainer",
                    target: "e1j7xo753"
                })("width:100%;display:flex;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";max-width:", (function(e) {
                    return e.single ? "270px" : "240px"
                }), ";"),
                fa = Object(g.z)("div", {
                    target: "e1j7xo752"
                })({
                    name: "gkg51",
                    styles: "padding:0 0.8em 0.8em 0.8em"
                }),
                pa = Object(g.z)(qn.a, {
                    target: "e1j7xo751"
                })({
                    name: "1j46qqh",
                    styles: "flex-grow:1;max-width:100%;flex-basis:100%"
                }),
                ha = Object(g.z)("p", {
                    target: "e1j7xo750"
                })(fn(), ";margin:0;margin-bottom:1.2em;", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                ga = function(e) {
                    var t = e.id,
                        n = e.icon,
                        r = e.title,
                        i = e.description,
                        o = e.onUserAction,
                        c = e.action,
                        l = e.disabled,
                        s = e.single,
                        u = void 0 !== s && s,
                        d = Object(ee.l)(),
                        m = Object(ee.l)();
                    return a.createElement(ba, {
                        single: u
                    }, a.createElement(pa, {
                        role: "gridcell"
                    }, a.createElement(ma, null, a.createElement(ia, {
                        src: n
                    }), a.createElement(oa, {
                        id: d,
                        ellipsis: !0,
                        flexFill: !0
                    }, r)), a.createElement(fa, null, a.createElement(ha, {
                        id: m
                    }, a.createElement(Mt.a, {
                        component: Ft.a
                    }, a.createElement(Pt.a, {
                        preserveLists: !0,
                        template: i,
                        root: {
                            component: Bt.a
                        }
                    }))), "button" === c.type && a.createElement(Jn.a, {
                        ellipsis: !0,
                        variant: "default",
                        label: c.label,
                        onPress: function() {
                            return o(t)
                        },
                        disabled: l
                    }), "search" === c.type && a.createElement(da, {
                        titleId: d,
                        label: c.label,
                        descriptionId: m,
                        onSubmit: function(e) {
                            return o(t, e)
                        },
                        disabled: l
                    }))))
                };
            var va = Object(g.z)("div", {
                    target: "e1ndqyd80"
                })({
                    name: "cmvgoq",
                    styles: "padding-top:0.8em;width:100%;display:flex;justify-content:center;flex-grow:1"
                }),
                ja = Object(o.c)((function(e) {
                    var t = function(t) {
                        return e.emit("on_chat_booster_launched", t)
                    };
                    return function(e) {
                        return {
                            emitBoosterLaunched: t,
                            currentMoment: e.getView("Moment")
                        }
                    }
                }))((function(e) {
                    var t = e.boosters,
                        n = e.setScrollTargetNode,
                        r = e.showMoment,
                        i = e.emitBoosterLaunched,
                        o = e.currentMoment,
                        l = a.useRef(null);
                    Object(c.n)((function() {
                        l.current && n && n(l.current)
                    }));
                    var s = function(e) {
                            var t, n = e.id;
                            return o.show && (null == (t = o.data) ? void 0 : t.boosterId) !== n
                        },
                        u = function(e, n) {
                            var a = t.find((function(t) {
                                return t.id === e
                            }));
                            if (a) {
                                var o = a.icon,
                                    c = a.title,
                                    l = a.action,
                                    s = l.url,
                                    u = l.type,
                                    d = l.webviewHeight,
                                    m = void 0 === d ? "full" : d;
                                i({
                                    id: e,
                                    title: c
                                }), r({
                                    icon: o,
                                    title: c,
                                    boosterId: e,
                                    height: m,
                                    source: "chat_booster",
                                    url: Object(Z.c)(s, Object(f.a)({}, c && {
                                        "moment-title": c
                                    }, "search" === u && n && {
                                        query: String(n)
                                    }))
                                })
                            }
                        };
                    return a.createElement(va, {
                        ref: l,
                        role: "row"
                    }, 1 === t.length ? a.createElement(ga, Object(f.a)({}, t[0], {
                        single: !0,
                        onUserAction: u,
                        disabled: s(t[0])
                    })) : a.createElement(g.e, null, t.map((function(e) {
                        return a.createElement(ga, Object(f.a)({}, e, {
                            key: e.id,
                            onUserAction: u,
                            disabled: s(e)
                        }))
                    }))))
                }));
            var Oa = Object(g.z)("div", {
                    target: "e1yucjc71"
                })({
                    name: "12etndg",
                    styles: "width:100%;display:flex;margin-bottom:16px;flex-direction:row;align-items:center;justify-content:center"
                }),
                ya = Object(g.z)("div", {
                    target: "e1yucjc70"
                })("padding:4px 12px;", (function(e) {
                    var t = e.theme;
                    return Object(r.c)(t.typography.basic, ";background-color:", Object(Un.g)(.7, t.colors.caution), ";border-radius:", t.borderRadius.sm, ";")
                }), ";"),
                xa = function() {
                    return a.createElement(o.a, null, (function(e) {
                        return a.createElement(Oa, null, a.createElement(ya, null, e("fill_form_to_send")))
                    }))
                },
                wa = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            shouldHandleSeen: !t.props.event.own && !t.props.event.seen
                        }, t.handleSeen = function() {
                            t.setState({
                                shouldHandleSeen: !1
                            }), t.props.listItemHandlers.markAsSeen(t.props.id)
                        }, t.getCardDisabledButtons = function() {
                            var e, n = t.props,
                                r = n.isChatActive,
                                a = n.isPartOfLastThread,
                                i = n.event,
                                o = n.currentMoment;
                            if (!(null == (e = i.properties.card) ? void 0 : e.buttons)) return [];
                            var c = r && a;
                            if (i.properties.invitation) return r ? i.properties.card.buttons.reduce((function(e, t, n) {
                                return "cancel" === t.type && e.push(n), e
                            }), []) : [];
                            return i.properties.card.buttons.reduce((function(e, t, n) {
                                return function(e) {
                                    var t;
                                    switch (e.type) {
                                        case "webview":
                                            return !c || o.show && (null == (t = o.data) ? void 0 : t.url) !== e.value;
                                        case "message":
                                            return !c;
                                        default:
                                            return !1
                                    }
                                }(t) && e.push(n), e
                            }), [])
                        }, t.handleMessageRef = function(e) {
                            var n = t.props,
                                r = n.scrollTarget,
                                a = n.setScrollTargetNode;
                            e && "draft" === r && a(e)
                        }, t
                    }
                    return Object(J.a)(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return t.shouldHandleSeen && e.event.seen ? {
                            shouldHandleSeen: !1
                        } : null
                    }, t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.mobile,
                            r = t.author,
                            i = t.event,
                            o = t.chatId,
                            c = t.localize,
                            l = t.radiusType,
                            s = t.showMoment,
                            u = t.scrollTarget,
                            d = t.deliveryStatus,
                            m = t.enforceDeliveryStatusDisplay,
                            b = t.listItemHandlers,
                            p = t.showMetaOnClick,
                            h = t.setScrollTargetNode,
                            j = t.handleGreetingDisplayed,
                            O = t.showFillFormAnnouncement,
                            y = t.rtl,
                            x = "system" === r.type,
                            k = this.state.shouldHandleSeen;
                        if ("system_message" === i.type) {
                            var E = i.properties,
                                C = E.systemMessageType,
                                z = E.textVariables,
                                S = E.defaultText;
                            return a.createElement(Bn, null, C ? c(C, z) : S)
                        }
                        return "email_prompt" === i.type || "ask_for_email" === i.properties.formId ? i.properties.answered ? null : a.createElement(mr, {
                            event: i,
                            chatId: o
                        }) : "form" === i.type ? a.createElement(a.Fragment, null, O && a.createElement(xa, null), a.createElement(v.a, {
                            appear: O,
                            component: null
                        }, a.createElement(w.b, {
                            delay: 100
                        }, a.createElement(ta, {
                            id: i.id,
                            chatId: o,
                            form: i,
                            setScrollTargetNode: "form" === u && h
                        })))) : "boosters" === i.type ? a.createElement(ja, {
                            boosters: i.properties.boosters,
                            showMoment: s,
                            setScrollTargetNode: "boosters" === u && h
                        }) : a.createElement(g.i, {
                            date: x ? "" : (e = i.timestamp, new Date(e).toTimeString().substr(0, 5)),
                            deliveryStatus: d,
                            enforceDeliveryStatusDisplay: m,
                            failed: i.failed,
                            isOwn: i.own,
                            onSeen: this.handleSeen,
                            seen: !k,
                            sending: !i.delivered && !i.failed,
                            showMetaOnClick: !x && p,
                            system: x,
                            ref: this.handleMessageRef,
                            authorName: a.createElement(Bt.a, null, i.own && !r.name ? c("client") : r.name)
                        }, a.createElement(Fn.a, Object(f.a)({
                            event: i,
                            mobile: n,
                            radiusType: l,
                            disabledButtons: this.getCardDisabledButtons(),
                            onActionButtonClick: b.handleActionButtonClick,
                            rtl: y
                        }, i.properties.invitation && {
                            onShow: function() {
                                return j(i)
                            }
                        })))
                    }, t
                }(a.Component),
                ka = Object(o.c)((function(e, t) {
                    var n = t.chatId,
                        r = t.id,
                        a = t.showMoment,
                        i = function(t) {
                            b.mb(e, t) || x.m(e)
                        };
                    return function(e, t) {
                        var n;
                        return function(r) {
                            var a = e(r);
                            if (void 0 === a) return n;
                            var i = t(r, a);
                            return n = i, i
                        }
                    }((function(e) {
                        return e.getEvent(n, r)
                    }), (function(e, t) {
                        var o = e.getChat(n),
                            c = o.properties.lastThread === t.thread,
                            l = "form" === t.type && !t.properties.answered && b.P(e, n);
                        return {
                            event: t,
                            chatId: n,
                            showMoment: a,
                            handleGreetingDisplayed: i,
                            showFillFormAnnouncement: l,
                            localize: e.localize,
                            isChatActive: o.active,
                            author: e.getUser(t.author),
                            mobile: e.getApplicationState("mobile"),
                            enforceDeliveryStatusDisplay: r === Object(h.M)(Object(h.M)(e.getTimeline(n)).events).id && t.own,
                            isPartOfLastThread: c,
                            deliveryStatus: b.e(e, n, r),
                            rtl: e.getApplicationState("rtl"),
                            currentMoment: e.getView("Moment")
                        }
                    }))
                }))(wa),
                Ea = n(113);
            var Ca = Object(g.z)("label", {
                    target: "e1e9gyrb2"
                })("color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";cursor:", (function(e) {
                    return e.disabled ? "not-allowed" : "pointer"
                }), ";display:flex;align-items:center;"),
                za = Object(g.z)("span", {
                    target: "e1e9gyrb1"
                })("display:flex;align-items:center;justify-content:center;&:focus{outline-style:", (function(e) {
                    return e.focusVisible ? "auto" : "none"
                }), ";}"),
                Sa = Object(g.z)("input", {
                    target: "e1e9gyrb0"
                })({
                    name: "eivff4",
                    styles: "display:none"
                }),
                _a = function(e) {
                    var t = e.handleFileChange,
                        n = e.disabled,
                        r = Object(fe.b)(),
                        i = Object(p.g)(),
                        o = a.useRef(null),
                        l = Object(c.k)((function() {
                            return o.current.click()
                        })),
                        s = Object(ie.f)();
                    return a.createElement(Ca, {
                        flexFit: !0,
                        htmlFor: "fileupload",
                        disabled: n
                    }, a.createElement(za, Object(f.a)({
                        role: "button",
                        "aria-label": "Send a file",
                        tabIndex: "0"
                    }, l, s), a.createElement(U.b, {
                        color: n ? i.colors.grayscale[400] : i.colors.text.black,
                        "aria-hidden": !0
                    })), !r && a.createElement(Sa, {
                        multiple: !0,
                        onChange: t,
                        type: "file",
                        value: "",
                        id: "fileupload",
                        ref: o,
                        disabled: n
                    }))
                },
                Ra = n(740),
                Ta = Object(g.z)("span", {
                    target: "e1v5q6v41"
                })("margin:", (function(e) {
                    return e.theme.spaces.space1
                }), ";padding-left:", (function(e) {
                    return e.theme.spaces.space1
                }), ";width:1.5em;height:1.5em;text-align:center;vertical-align:middle;font-size:1.5em;line-height:1.5em;"),
                Ia = Object(g.z)("div", {
                    target: "e1v5q6v40"
                })("margin:", (function(e) {
                    return e.theme.spaces.space2
                }), ";outline:none;cursor:pointer;", (function(e) {
                    var t = e.highlighted,
                        n = e.theme;
                    if (!t) return Object(r.c)(U.k, "{background-color:", n.colors.surface.light, ";}")
                }), ";"),
                Ma = function(e) {
                    var t = e.onPress,
                        n = e.emoji,
                        r = e.itemList,
                        i = a.useRef(null),
                        o = r.useItem,
                        c = r.clearHighlightedItem,
                        l = o({
                            ref: i,
                            text: n,
                            value: n
                        }),
                        s = l.id,
                        u = l.highlight,
                        d = (0, l.useHighlighted)();
                    return a.createElement(Ia, {
                        id: s,
                        ref: i,
                        highlighted: d,
                        onClick: t,
                        onMouseOver: u,
                        onMouseOut: c,
                        "aria-label": "insert " + n
                    }, a.createElement(U.k, null, a.createElement(Ta, {
                        "aria-hidden": !0
                    }, n)))
                },
                Fa = n(35);
            var Pa = Object(h.d)(["\ud83d\ude42", "\ud83d\ude01", "\ud83d\ude02", "\ud83d\ude0a", "\ud83d\ude0d", "\ud83d\ude10", "\ud83d\ude15", "\ud83d\ude12", "\ud83d\ude22", "\ud83d\ude2d", "\ud83c\udf89", "\u2764\ufe0f", "\ud83d\udc4c", "\ud83d\udc4d", "\ud83d\ude4f"], 5),
                Ba = Object(g.z)("div", {
                    target: "e1pkkif43"
                })({
                    name: "14y8lnv",
                    styles: "margin:0;padding:0;outline:none"
                }),
                qa = Object(g.z)(U.j, {
                    target: "e1pkkif42"
                })("display:flex;justify-content:center;align-items:center;opacity:1;will-change:color,background-color;transition:color 150ms ease-in-out,background-color 150ms ease-in-out;", (function(e) {
                    var t = e.theme;
                    return e.active ? {
                        backgroundColor: t.colors.cta,
                        color: t.colors.ctaText
                    } : {
                        backgroundColor: "transparent",
                        color: t.colors.text.black
                    }
                }), ";"),
                Aa = Object(g.z)("div", {
                    target: "e1pkkif41"
                })({
                    name: "frpnj0",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:flex-start"
                }),
                Ha = Object(g.z)("div", {
                    target: "e1pkkif40"
                })({
                    name: "1uuyw89",
                    styles: "display:flex;align-items:center;justify-content:center;flex-shrink:0;flex-grow:0"
                }),
                La = function(e) {
                    var t = e.onEmojiPicked,
                        n = a.useRef(null),
                        r = a.useRef(null),
                        i = a.useRef({
                            open: h.V,
                            close: h.V
                        }),
                        o = a.useState(!1),
                        c = o[0],
                        l = o[1],
                        s = function(e) {
                            t(e), i.current.close(), Math.random() < .1 && Object(Qn.d)("Emoji_inserted_from_picker", {
                                emoji: e
                            })
                        },
                        u = Object(Ra.a)({
                            onSelect: s
                        }),
                        d = u.useHighlightedItemId();
                    return 0 === Pa.length || Object(Fa.g)() ? null : a.createElement(Jt, {
                        animated: !0,
                        placement: "top",
                        appearance: "light",
                        trigger: "press",
                        controlsRef: i,
                        onOpenChange: function(e, t) {
                            var a;
                            if (Object(ie.c)() ? u.setHighlightedItem(0) : u.clearHighlightedItem(), e) null == (a = r.current) || a.focus(), Math.random() < .01 && Object(Qn.d)("emoji_picker_opened", {});
                            else if (!t) {
                                var i;
                                null == (i = n.current) || i.focus()
                            }
                            l(e)
                        },
                        description: a.createElement(Ba, {
                            tabIndex: 0,
                            role: "grid",
                            "aria-label": "emoji picker",
                            ref: r,
                            "aria-activedescendant": d,
                            onKeyDown: function(e) {
                                switch (e.key) {
                                    case "ArrowUp":
                                        u.highlightedIndex.current - 5 >= 0 && u.moveHighlightedItem(-5);
                                        break;
                                    case "ArrowDown":
                                        u.highlightedIndex.current + 5 < u.items.current.length && u.moveHighlightedItem(5);
                                        break;
                                    case "ArrowLeft":
                                        u.highlightedIndex.current - 1 >= 0 && u.moveHighlightedItem(-1);
                                        break;
                                    case "ArrowRight":
                                        u.highlightedIndex.current + 1 < u.items.current.length && u.moveHighlightedItem(1);
                                        break;
                                    case "Home":
                                        u.setHighlightedItem(0);
                                        break;
                                    case "End":
                                        u.setHighlightedItem(u.items.current.length - 1);
                                        break;
                                    case " ":
                                    case "Enter":
                                        e.preventDefault(), u.selectHighlightedItem();
                                        break;
                                    case "Tab":
                                        return void e.preventDefault();
                                    default:
                                        return void u.highlightItemByString(e)
                                }
                                e.preventDefault()
                            }
                        }, Pa.map((function(e, t) {
                            return a.createElement(Aa, {
                                key: t,
                                role: "row"
                            }, e.map((function(e, t) {
                                return a.createElement(Ha, {
                                    key: t,
                                    role: "gridcell"
                                }, a.createElement(Ma, {
                                    emoji: e,
                                    itemList: u,
                                    onPress: function() {
                                        return s(e)
                                    }
                                }))
                            })))
                        })))
                    }, a.createElement(qa, {
                        "aria-label": "open emoji picker",
                        ref: n,
                        active: c,
                        onPress: function() {
                            c && i.current.close()
                        }
                    }, a.createElement(U.g, null)))
                };
            var Da = function(e) {
                    return Object(r.c)("padding:0;opacity:1;color:", Object(Un.d)(.05, e.colors.grayscale[400]), ";svg *{transition:fill 100ms ease-in-out;}")
                },
                Va = Object(g.z)("div", {
                    target: "ex4ls1q1"
                })("position:absolute;top:0;height:100%;display:flex;align-items:center;", (function(e) {
                    return e.postion + ": " + (e.dense ? "0.75em" : "1em")
                }), ";color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";"),
                Na = Object(g.z)(g.q, {
                    target: "ex4ls1q0"
                })({
                    name: "bjn8wh",
                    styles: "position:relative"
                });
            var Ua = Object(o.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t, n) {
                            x.e(e, t, n)
                        },
                        a = function(t) {
                            x.B(e, n, t)
                        },
                        i = function(t) {
                            e.requestUpdateChat(n, {
                                properties: {
                                    messageDraft: t
                                }
                            })
                        },
                        o = function() {
                            x.F(e, Object(f.a)({
                                source: "message_box"
                            }, b.v(e)))
                        };
                    return function(e) {
                        return {
                            sendFile: r,
                            sendMessage: a,
                            setMessageDraft: i,
                            openVideoCallMoment: o,
                            reconnecting: b.kb(e),
                            allowInput: b.cb(e),
                            allowFileUpload: b.bb(e),
                            isFileUploadPossible: b.K(e),
                            mobile: e.getApplicationState("mobile"),
                            applicationFocused: e.getApplicationState("applicationFocused"),
                            videoCallButtonState: b.u(e)
                        }
                    }
                }))((function(e) {
                    var t = e.allowFileUpload,
                        n = e.isFileUploadPossible,
                        l = e.mobile,
                        s = e.onHeightChange,
                        u = e.onSendMessage,
                        d = e.allowInput,
                        m = e.reconnecting,
                        b = e.sendFile,
                        p = e.sendMessage,
                        v = e.setMessageDraft,
                        j = (e.applicationFocused, e.onFocusChange),
                        O = e.openVideoCallMoment,
                        y = e.videoCallButtonState,
                        x = Object(k.a)(e, ["allowFileUpload", "isFileUploadPossible", "mobile", "onHeightChange", "onSendMessage", "allowInput", "reconnecting", "sendFile", "sendMessage", "setMessageDraft", "applicationFocused", "onFocusChange", "openVideoCallMoment", "videoCallButtonState"]),
                        w = a.useRef(null),
                        E = a.useRef([0, 0]),
                        C = Object(c.i)("text-composer"),
                        z = C.get(),
                        S = a.useState(z || ""),
                        _ = S[0],
                        R = S[1],
                        T = a.useState(!1),
                        I = T[0],
                        M = T[1],
                        F = a.useMemo((function() {
                            return Object(h.xb)(1500, v)
                        }), [v]),
                        P = Object(c.e)(m),
                        B = Object(i.useFrame)().document,
                        q = a.useCallback((function(e, t) {
                            return e.forEach((function(e) {
                                return b(e, t)
                            }))
                        }), [b]),
                        A = a.useCallback((function() {
                            M(!0), j && j(!0)
                        }), [j]),
                        H = a.useCallback((function() {
                            M(!1), j && j(!1)
                        }), [j]),
                        L = a.useCallback((function(e) {
                            p(e), v(""), u && u()
                        }), [p, u, v]),
                        D = a.useCallback((function(e) {
                            q(Object(h.ub)(e.target.files))
                        }), [q]);
                    a.useEffect((function() {
                        var e = w.current,
                            t = function() {
                                E.current = [e.selectionStart, e.selectionEnd]
                            };
                        return e.addEventListener("blur", t),
                            function() {
                                return e.removeEventListener("blur", t)
                            }
                    }), []), a.useEffect((function() {
                        var e = function(e) {
                            var t = Object(h.ub)(e.clipboardData.items).reduce((function(e, t) {
                                var n = t.getAsFile();
                                return n && e.push(n), e
                            }), []);
                            t.length && (e.preventDefault(), q(t, "clipboard"))
                        };
                        return t && I && n && B.addEventListener("paste", e),
                            function() {
                                return B.removeEventListener("paste", e)
                            }
                    }), [t, I, n, B, b, q]);
                    var V = function(e) {
                        var t = E.current,
                            n = t[0],
                            r = t[1];
                        ne.a.flushSync((function() {
                            R((function(t) {
                                var a = t.slice(0, n) + e + t.slice(r, t.length);
                                return C.set(a), a
                            }))
                        })), ne.a.flushSync((function() {
                            w.current.focus();
                            var t = n + e.length;
                            w.current.setSelectionRange(t, t)
                        }))
                    };
                    return Object(r.d)(o.a, null, (function(e) {
                        return Object(r.d)(g.t, Object(f.a)({}, x, {
                            value: _,
                            active: d,
                            disabled: m && !P,
                            mobile: l,
                            defaultValue: z,
                            onSend: L,
                            onValueChange: function(e) {
                                R(e), C.set(e), F(e)
                            }
                        }), Object(r.d)(Na, {
                            verticalAlign: "center"
                        }, y.visible && Object(r.d)(Va, {
                            postion: "left",
                            dense: y.visible
                        }, Object(r.d)(Jt, {
                            placement: "top",
                            description: "Start a video call"
                        }, Object(r.d)(U.j, {
                            onPress: O,
                            disabled: y.disabled,
                            css: function(e) {
                                return {
                                    opacity: 1,
                                    color: y.disabled ? e.colors.grayscale[400] : e.colors.text.black
                                }
                            },
                            "aria-label": "Start a video call"
                        }, Object(r.d)(U.C, null)))), Object(r.d)(g.u, {
                            ref: w,
                            autoFocus: Object(zt.c)(),
                            css: function(e) {
                                return function(e) {
                                    var t = e.disabled,
                                        n = e.leftIcons,
                                        a = e.theme;
                                    return Object(r.c)("font-family:inherit;padding:1.25em 7.75em 1.25em ", n ? "3.75em" : "1em", ";overflow-y:auto;margin-top:0;transition:box-shadow 0.1s ease-in-out;background-color:", t ? Object(Un.g)(.95, a.colors.caution) : Object(Un.f)(.012, a.colors.surface.light), ";&:focus{background-color:", a.colors.surface.light, ";}")
                                }({
                                    theme: e,
                                    disabled: m && !P,
                                    leftIcons: y.visible
                                })
                            },
                            disabled: m && !P,
                            flexFill: !0,
                            minRows: 1,
                            onBlur: H,
                            onFocus: A,
                            onHeightChange: s,
                            placeholder: e("embedded_textarea_placeholder"),
                            "aria-label": e("embedded_textarea_placeholder"),
                            enterKeyHint: "send"
                        }), Object(r.d)(Va, {
                            postion: "right",
                            dense: y.visible
                        }, Object(r.d)(La, {
                            onEmojiPicked: V
                        }), t && Object(r.d)(_a, {
                            disabled: !n,
                            handleFileChange: D
                        }), Object(r.d)(g.r, {
                            flexFit: !0,
                            css: Da,
                            icon: Object(r.d)(U.u, null),
                            "aria-label": "Send a message"
                        }))))
                    }))
                })),
                Wa = "set_can_be_shown",
                Ya = "expand",
                Ga = "collapse",
                Za = "toggle_collapsed",
                Ka = "main_transition_start",
                Qa = "main_transition_end",
                Ja = "drawer_transition_end",
                Xa = "reset_collapsed",
                $a = "show_conifrmation_modal",
                ei = "hide_conifrmation_modal",
                ti = function() {
                    return {
                        type: Wa
                    }
                },
                ni = function() {
                    return {
                        type: Ya
                    }
                },
                ri = function() {
                    return {
                        type: Ga
                    }
                },
                ai = function() {
                    return {
                        type: Za
                    }
                },
                ii = function() {
                    return {
                        type: Ka
                    }
                },
                oi = function() {
                    return {
                        type: Qa
                    }
                },
                ci = function() {
                    return {
                        type: Ja
                    }
                },
                li = function() {
                    return {
                        type: Xa
                    }
                },
                si = function() {
                    return {
                        type: $a
                    }
                },
                ui = function() {
                    return {
                        type: ei
                    }
                },
                di = function(e, t) {
                    switch (t.type) {
                        case Wa:
                            return Object(f.a)({}, e, {
                                canBeShown: !0
                            });
                        case Ya:
                            return Object(f.a)({}, e, {
                                collapsed: !1
                            });
                        case Ga:
                            return Object(f.a)({}, e, {
                                collapsed: !0
                            });
                        case Za:
                            return Object(f.a)({}, e, {
                                collapsed: !e.collapsed
                            });
                        case Xa:
                            return Object(f.a)({}, e, {
                                animationEnded: !1,
                                collapsed: !1
                            });
                        case Ka:
                            return Object(f.a)({}, e, {
                                isAnimating: !0
                            });
                        case Qa:
                            return Object(f.a)({}, e, {
                                isAnimating: !1,
                                animationEnded: !0
                            });
                        case Ja:
                            return Object(f.a)({}, e, {
                                isExpanding: !1
                            });
                        case $a:
                            return Object(f.a)({}, e, {
                                isConfirmationModalShown: !0
                            }, e.collapsed && {
                                isExpanding: !0,
                                collapsed: !1
                            });
                        case ei:
                            return Object(f.a)({}, e, {
                                isConfirmationModalShown: !1
                            });
                        default:
                            return e
                    }
                };

            function mi() {
                var e = Object(E.a)(["\n\t&-enter,\n\t&-appear {\n\t\ttransform: translateY(100%);\n\t}\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\ttransform: translateY(0);\n\t\ttransition: transform ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\ttransform: translateY(0);\n\t}\n\n\t&-exit-active {\n\t\ttransform: translateY(100%);\n\t\ttransition: transform ", "ms\n\t\t\t", ";\n\t}\n"]);
                return mi = function() {
                    return e
                }, e
            }
            var bi = function(e) {
                    return {
                        enter: 600,
                        exit: e ? 200 : 400
                    }
                },
                fi = function(e, t, n, r) {
                    return e(mi(), (n ? 0 : 600) * t, r.transitions.easings.swift, (n ? 200 : 400) * t, r.transitions.easings.swift)
                },
                pi = function(e) {
                    var t = e.show,
                        n = e.collapsed,
                        i = e.durationFactor,
                        o = e.onTransitionStart,
                        c = e.onTransitionEnd,
                        l = e.children,
                        s = e.nodeRef;
                    return a.createElement(r.a, null, (function(e) {
                        var r = e.css,
                            u = e.theme;
                        return a.createElement(v.a, {
                            appear: !0,
                            component: null
                        }, t && a.createElement(C.a, {
                            timeout: bi(n),
                            onExited: c,
                            onEntered: c,
                            onExiting: o,
                            onEntering: o,
                            classNames: fi(r, i, n, u),
                            nodeRef: s
                        }, l))
                    }))
                },
                hi = n(744),
                gi = "transform, height, bottom, min-height, max-height, box-shadow, z-index, border-radius",
                vi = a.forwardRef((function(e, t) {
                    var n = e.heightPercentage,
                        i = e.collapsed,
                        o = e.children,
                        l = e.animationEnded,
                        s = e.onTransitionEnd,
                        u = e.isFooterHidden,
                        d = Object(k.a)(e, ["heightPercentage", "collapsed", "children", "animationEnded", "onTransitionEnd", "isFooterHidden"]),
                        m = a.useRef(null),
                        b = Object(c.c)(m, t),
                        p = Object(fe.b)();
                    return Object(c.g)("touchmove", m), Object(c.b)(p ? null : m), Object(r.d)(hi.a, {
                        autoFocus: !1,
                        disabled: i,
                        returnFocus: !0,
                        crossFrame: !1,
                        css: function(e) {
                            return function(e) {
                                var t = e.heightPercentage,
                                    n = e.collapsed,
                                    a = e.animationEnded,
                                    i = e.isFooterHidden,
                                    o = e.theme;
                                return Object(r.c)("position:absolute;z-index:", n ? 100 : 1500, ";display:flex;flex-direction:column;height:", n ? "48px" : 100 * t + "%", ";min-height:", n ? "48px" : "270px", ";max-height:", n ? "48px" : "100%", ";width:100%;bottom:", function(e, t, n) {
                                    return !t || e ? 0 : "modern" === n.name ? 32 : 24
                                }(i, n, o), "px;border-radius:", n ? 0 : "inherit", ";color:", o.colors.text.black, ";background-color:", o.colors.surface.light, ";box-shadow:", n ? o.boxShadow.floating : "none", ";", a && {
                                    transitionProperty: gi,
                                    transitionDuration: 600 * t + "ms",
                                    transitionTimingFunction: "" + o.transitions.easings.swift,
                                    willChange: gi
                                }, ";")
                            }({
                                heightPercentage: n,
                                collapsed: i,
                                animationEnded: l,
                                isFooterHidden: u,
                                theme: e
                            })
                        },
                        ref: b,
                        lockProps: Object(f.a)({
                            role: "dialog",
                            "aria-modal": !0,
                            onTransitionEnd: s
                        }, d)
                    }, o)
                })),
                ji = n(14),
                Oi = n(47),
                yi = {
                    allowtransparency: "true",
                    scrolling: "yes",
                    style: {
                        position: "absolute",
                        minWidth: "100%",
                        minHeight: "100%",
                        height: "1px",
                        width: "1px",
                        margin: "0",
                        padding: "0",
                        background: "none",
                        border: "0"
                    }
                },
                xi = function(e, t) {
                    return Object(f.a)({
                        moment_url: Object(Z.e)(e) + Object(Z.f)(e),
                        moment_origin: Object(Z.e)(e) || ""
                    }, t && {
                        ui_source: t
                    })
                },
                wi = function(e) {
                    return Object(r.c)("flex-grow:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;display:", e ? "none" : "block", ";")
                },
                ki = function(e, t, n) {
                    var r = document.createElement("iframe");
                    return r.allow = n, r.src = t, e.appendChild(r), r
                },
                Ei = function(e) {
                    var t = e.id,
                        n = e.url,
                        i = e.close,
                        o = e.hidden,
                        c = e.sendMessage,
                        l = e.sendSystemMessage,
                        s = e.setAttributes,
                        u = e.onLoadingChanged,
                        d = e.onMomentDataChanged,
                        m = e.iframeAllowedProperties,
                        b = e.getCustomerToken,
                        f = e.updateCustomerData,
                        p = e.licenseId,
                        g = e.chatId,
                        v = e.source,
                        j = a.useRef(void 0),
                        O = a.useRef(h.V),
                        y = a.useRef(h.V),
                        x = a.createRef();
                    return O.current = function() {
                        if (n && x.current) {
                            var e = {
                                close: i,
                                sendMessage: c,
                                setAttributes: s,
                                updateCustomerData: f,
                                licenseId: p,
                                chatId: g,
                                setExternalLink: function(e) {
                                    d({
                                        externalLink: e
                                    })
                                },
                                setIsFragile: function(e) {
                                    d({
                                        isFragile: e
                                    })
                                },
                                getIdentityTransferToken: function() {
                                    if (er(n)) return b().then((function(e) {
                                        return function(e) {
                                            var t = e.accessToken;
                                            return Object(Oi.a)(Object(Ht.a)("accounts") + "/customer/identity_transfer", {
                                                method: "POST",
                                                headers: {
                                                    Authorization: "Bearer " + t
                                                },
                                                body: JSON.stringify({
                                                    bearer_type: "customer",
                                                    client_id: "c5e4f61e1a6c3b1521b541bc5c5a2ac5"
                                                })
                                            }).then((function(e) {
                                                return e.json()
                                            })).then((function(e) {
                                                return Object(h.O)(h.b, e)
                                            }))
                                        }(e)
                                    })).catch((function(e) {
                                        return e
                                    }));
                                    throw new Error("Moment App not authorized")
                                }
                            };
                            l && (e.sendSystemMessage = l), j.current = Object(Xn.b)({
                                frame: ki(x.current, n, m),
                                url: n,
                                onConnected: function(e) {
                                    var t = e.data;
                                    u(!1), d(t)
                                }
                            }, e), Object(ji.a)(yi, j.current.frame), u(!0), j.current.frame.addEventListener("load", (function e() {
                                j.current && (u(!1), j.current.frame.removeEventListener("load", e))
                            })), d({
                                title: j.current.title
                            }), Object(Qn.d)("moment_opened", xi(Object(Xn.a)(n), v))
                        }
                    }, y.current = function() {
                        j.current && (j.current.destroy(), x.current && (x.current.innerHTML = ""), d(null), u(!1), j.current = void 0), n && Object(Qn.d)("moment_closed", xi(Object(Xn.a)(n)))
                    }, a.useEffect((function() {
                        return O.current(),
                            function() {
                                return y.current()
                            }
                    }), [n]), Object(r.d)("div", {
                        id: t,
                        ref: x,
                        css: wi(o),
                        onScroll: function(e) {
                            ! function(e) {
                                if (e) {
                                    var t = e.scrollTop,
                                        n = e.scrollHeight - e.offsetHeight;
                                    0 === t ? e.scrollTop = 1 : t === n && (e.scrollTop = n - 1)
                                }
                            }(e.currentTarget)
                        }
                    })
                },
                Ci = "confirmation-modal-label-id",
                zi = Object(g.z)("div", {
                    target: "ej1cp8k3"
                })("z-index:1500;position:absolute;top:42px;left:50%;width:75%;max-width:500px;display:flex;flex-direction:column;background:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.lg
                }), ";padding:", (function(e) {
                    return e.theme.spaces.space6
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";"),
                Si = Object(g.z)(pt.a, {
                    target: "ej1cp8k2"
                })("display:flex;width:auto;flex-grow:", (function(e) {
                    return e.primary ? 1 : 1.5
                }), ";padding:8px 12px;background-color:", (function(e) {
                    var t = e.theme;
                    return e.primary ? t.colors.grayscale[100] : t.colors.error
                }), ";color:", (function(e) {
                    var t = e.theme;
                    return e.primary ? t.colors.text.black : t.colors.white
                }), ";&:first-child{margin-right:", (function(e) {
                    return e.theme.spaces.space4
                }), ";}"),
                _i = Object(g.z)("p", {
                    target: "ej1cp8k1"
                })("margin:0;", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                Ri = Object(g.z)("div", {
                    target: "ej1cp8k0"
                })("width:100%;max-width:250px;display:flex;align-self:center;margin-top:", (function(e) {
                    return e.theme.spaces.space4
                }), ";"),
                Ti = function(e) {
                    var t = e.shown,
                        n = e.onResponse,
                        r = a.useRef(null),
                        i = Object($.c)({
                            isOpen: !0,
                            isDismissable: !0,
                            onClose: function() {
                                return n("canceled")
                            }
                        }, r).overlayProps,
                        o = Object($.b)().modalProps,
                        c = Object(X.a)({
                            "aria-labelledby": Ci
                        }, r).dialogProps,
                        l = Object(fe.b)();
                    return Object($.d)({
                        isDisabled: l
                    }), a.createElement(a.Fragment, null, a.createElement(be, {
                        shown: t
                    }), a.createElement(v.a, {
                        component: null
                    }, t && a.createElement(w.c, {
                        nodeRef: r
                    }, a.createElement(s.a, {
                        contain: !0,
                        restoreFocus: !0,
                        autoFocus: !0
                    }, a.createElement(zi, Object(f.a)({}, Object(ee.h)(i, c, o), {
                        ref: r
                    }), a.createElement(_i, {
                        id: Ci
                    }, "Any data or connection will be lost after you close this window"), a.createElement(Ri, null, a.createElement(Si, {
                        primary: !0,
                        onClick: function() {
                            return n("canceled")
                        }
                    }, "Cancel"), a.createElement(Si, {
                        onClick: function() {
                            return n("confirmed")
                        }
                    }, "Close anyway")))))))
                },
                Ii = n(197),
                Mi = n(326);
            var Fi = Object(g.z)(U.d, {
                    target: "e1crrbvm1"
                })((function(e) {
                    return "up" === e.direction && {
                        transform: "scaleY(-1)"
                    }
                }), ";"),
                Pi = Object(g.z)("div", {
                    target: "e1crrbvm0"
                })("min-height:", (function(e) {
                    return e.visible ? 48 : 0
                }), "px;transition:min-height 300ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";"),
                Bi = {
                    full: .8,
                    tall: .5,
                    compact: .3
                },
                qi = {
                    name: "zjik7",
                    styles: "display:flex"
                },
                Ai = Object(o.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t) {
                            return void 0 === t && (t = !1), x.f(e, t)
                        },
                        a = function(t) {
                            return x.N(e, {
                                properties: t
                            })
                        },
                        i = function(t) {
                            ["email", "name"].forEach((function(e) {
                                (t[e] && "string" !== typeof t[e] || "" === t[e]) && delete t[e]
                            })), (t.email || t.name) && x.N(e, t)
                        },
                        o = function(t) {
                            return x.B(e, n, t)
                        },
                        c = Object(Mi.a)({
                            allowVideoConferencing: Object(b.B)(e, "microphone"),
                            allowClipboardWrite: Object(b.B)(e, "clipboard_write")
                        }),
                        l = function(t) {
                            return x.A(e, n, t)
                        };
                    return function(e) {
                        var t = e.getView("Moment"),
                            n = t.show,
                            s = t.data,
                            u = s.url,
                            d = Object(k.a)(s, ["url"]),
                            m = e.getApplicationState("license");
                        return {
                            show: n,
                            closeMoment: r,
                            sendMessage: o,
                            sendSystemMessage: l,
                            updateSessionUser: a,
                            onUpdateCustomerData: i,
                            momentData: d,
                            url: u,
                            iframeAllowedProperties: c,
                            getCustomerToken: function() {
                                return new Promise((function(t, n) {
                                    e.once("customer_token_response", t), e.once("customer_token_error", n), e.emit("request_customer_token")
                                }))
                            },
                            licenseId: m,
                            isFooterHidden: Object(b.V)(e),
                            registerRequestCloseMomentListener: function(t) {
                                return e.on("request_close_moment", t),
                                    function() {
                                        return e.off("request_close_moment", t)
                                    }
                            },
                            registerRequestExpandMomentListener: function(t) {
                                return e.on("request_expand_moment", t),
                                    function() {
                                        return e.off("request_expand_moment", t)
                                    }
                            },
                            minimizeWidget: function(t) {
                                return void 0 === t && (t = !1), x.v(e, !1, t)
                            },
                            setNextMomentData: function(t) {
                                return e.updateView("Moment", {
                                    show: !0,
                                    data: t
                                })
                            },
                            chatId: Object(b.b)(e) || void 0
                        }
                    }
                }))((function(e) {
                    var t = e.iframeAllowedProperties,
                        n = e.show,
                        i = e.url,
                        o = e.updateSessionUser,
                        l = e.sendMessage,
                        s = e.sendSystemMessage,
                        u = e.onSendMessage,
                        d = e.getCustomerToken,
                        m = e.licenseId,
                        b = e.onUpdateCustomerData,
                        p = e.isFooterHidden,
                        g = e.registerRequestCloseMomentListener,
                        v = e.registerRequestExpandMomentListener,
                        j = e.minimizeWidget,
                        O = e.setNextMomentData,
                        y = e.chatId,
                        x = Object(c.i)("moment-collapsed"),
                        w = {
                            canBeShown: !1,
                            collapsed: !1,
                            isExpanding: !0,
                            isAnimating: !1,
                            animationEnded: !1,
                            isConfirmationModalShown: !1
                        },
                        k = a.useReducer(di, w, (function() {
                            var t;
                            return Object(f.a)({}, w, {
                                collapsed: !!(null == (t = x.get()) ? void 0 : t.collapsed) && !e.momentData.wasTriggeredByGreeting
                            })
                        })),
                        E = k[0],
                        C = E.canBeShown,
                        z = E.collapsed,
                        S = E.isExpanding,
                        _ = E.isAnimating,
                        R = E.animationEnded,
                        T = E.isConfirmationModalShown,
                        I = k[1],
                        M = a.useRef(null),
                        F = a.useRef(null),
                        P = a.useState(!1),
                        B = P[0],
                        q = P[1],
                        A = a.useState({}),
                        H = A[0],
                        L = A[1],
                        D = a.useState(!1),
                        V = D[0],
                        N = D[1],
                        W = a.useRef(!1),
                        Y = a.useRef(null),
                        G = Object(ie.f)(),
                        Z = Object(c.f)(C && n, (function() {
                            return e.closeMoment(V)
                        })),
                        K = Z[0],
                        Q = Z[1],
                        J = _ || B,
                        X = function(e) {
                            var t = e.height;
                            return t && t in Bi ? Bi[t] : Bi.full
                        }(H),
                        $ = X / .8,
                        te = Object(ee.l)();
                    Object(h.F)(H) && !Object(h.F)(e.momentData) && L(Object(f.a)({}, H, e.momentData)), Object(c.w)(a.useCallback((function() {
                        return I(ti())
                    }), []), 300), a.useEffect((function() {
                        e.momentData.wasTriggeredByGreeting && R && O(Object(f.a)({}, e.momentData, {
                            url: i,
                            wasTriggeredByGreeting: !1
                        }))
                    }), [R, i, e.momentData, O]), a.useEffect((function() {
                        var e = g((function() {
                            if (W.current) return N(!0), void I(si());
                            j(!0)
                        }));
                        return function() {
                            return e()
                        }
                    }), [W, j, g]), a.useEffect((function() {
                        var e = v((function(e) {
                            I(ni()), (null == e ? void 0 : e.nextMoment) && (Y.current = e.nextMoment, I(si()))
                        }));
                        return function() {
                            return e()
                        }
                    }), [v]), a.useEffect((function() {
                        return x.set({
                            collapsed: z
                        })
                    }), [x, z]), a.useEffect((function() {
                        K && Object(ee.d)(F.current)
                    }), [K]), a.useEffect((function() {
                        !K && R && I(li())
                    }), [K, R]);
                    return Object(r.d)(a.Fragment, null, Object(r.d)(be, {
                        shown: n && !z,
                        onPress: function() {
                            R && I(ri())
                        },
                        zIndex: 99
                    }), Object(r.d)(Pi, {
                        visible: n
                    }), Object(r.d)(pi, {
                        show: K || n && z,
                        collapsed: z,
                        nodeRef: M,
                        onTransitionEnd: function() {
                            I(oi())
                        },
                        onTransitionStart: function() {
                            I(ii())
                        },
                        durationFactor: $
                    }, Object(r.d)(vi, {
                        ref: M,
                        heightPercentage: X,
                        collapsed: z,
                        animationEnded: R,
                        isFooterHidden: p,
                        onTransitionEnd: function() {
                            return I(ci())
                        }
                    }, Object(r.d)(ca, {
                        noShrink: !0
                    }, Object(r.d)(ia, {
                        src: H.icon,
                        "aria-hidden": !0
                    }), Object(r.d)(oa, Object(f.a)({
                        ellipsis: !0,
                        flexFill: !0,
                        tabIndex: -1,
                        ref: F
                    }, G), H.title), H.externalLink && !z && Object(r.d)(Ft.a, {
                        href: H.externalLink,
                        rel: "nofollow noopener noreferrer",
                        css: qi,
                        "aria-label": "Open in a new tab"
                    }, Object(r.d)(U.r, {
                        "aria-hidden": !0
                    })), Object(r.d)(U.j, {
                        onPress: function() {
                            return I(ai())
                        },
                        css: qi,
                        "aria-label": "Toggle modal",
                        "aria-expanded": !z,
                        "aria-controls": te
                    }, Object(r.d)(Fi, {
                        direction: z ? "up" : "down",
                        "aria-hidden": !0
                    })), Object(r.d)(U.j, {
                        onPress: function() {
                            W.current ? I(si()) : Q()
                        },
                        css: qi,
                        "aria-label": "Close modal"
                    }, Object(r.d)(U.e, null))), Object(r.d)(Ti, {
                        shown: !z && !S && T,
                        onResponse: function(e) {
                            if (I(ui()), Y.current) return "confirmed" === e && (W.current = !1, O(Y.current)), void(Y.current = null);
                            "confirmed" === e && Q()
                        }
                    }), Object(r.d)(Ei, {
                        id: te,
                        hidden: z || J,
                        close: Q,
                        url: i,
                        licenseId: m,
                        chatId: y,
                        source: H.source,
                        sendMessage: function(e) {
                            var t = e.text;
                            l(t), u && u(t)
                        },
                        sendSystemMessage: s,
                        setAttributes: o,
                        updateCustomerData: b,
                        onMomentDataChanged: function(e) {
                            e && "isFragile" in e && (W.current = !!e.isFragile), L((function(t) {
                                return e ? Object(f.a)({}, t, e) : {}
                            }))
                        },
                        onLoadingChanged: q,
                        iframeAllowedProperties: t,
                        getCustomerToken: d
                    }), !z && J && Object(r.d)(Ii.a, {
                        size: "xlarge",
                        style: {
                            margin: "auto"
                        }
                    }))))
                })),
                Hi = n(220),
                Li = n(78),
                Di = n(76);
            var Vi = Object(g.z)("span", {
                    target: "e1oq7ugp9"
                })((function(e) {
                    var t = e.failed,
                        n = e.theme;
                    return {
                        color: t ? n.typography.errorCaption.color : n.typography.basic.color
                    }
                }), ";"),
                Ni = Object(g.z)("div", {
                    target: "e1oq7ugp8"
                })({
                    name: "ujlsi",
                    styles: "flex:1;display:flex;flex-direction:column;margin:2px;min-width:calc(50% - 4px);max-width:100%;height:140px"
                }),
                Ui = Object(g.z)("div", {
                    target: "e1oq7ugp7"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.xl
                }), ";flex:1;width:100%;height:100%;display:flex;overflow:hidden;position:relative;align-items:center;justify-content:center;"),
                Wi = Object(g.z)("div", {
                    target: "e1oq7ugp6"
                })("color:", (function(e) {
                    return e.theme.colors.text.muted
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface.lightVariant
                }), ";width:100%;height:100%;display:flex;align-items:center;justify-content:center;"),
                Yi = Object(g.z)("img", {
                    target: "e1oq7ugp5"
                })({
                    name: "q4dzvk",
                    styles: "width:100%;height:auto"
                }),
                Gi = Object(g.z)("div", {
                    target: "e1oq7ugp4"
                })({
                    name: "1uja423",
                    styles: "position:absolute;top:6px;right:6px;z-index:1"
                }),
                Zi = Object(g.z)("div", {
                    target: "e1oq7ugp3"
                })("height:24px;width:24px;display:flex;border-radius:50%;align-items:center;justify-content:center;color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";background-color:", (function(e) {
                    var t = e.theme,
                        n = e.success,
                        r = e.error;
                    return n ? t.colors.success : r ? t.colors.error : void 0
                }), ";"),
                Ki = Object(g.z)("div", {
                    target: "e1oq7ugp2"
                })("opacity:", (function(e) {
                    return e.visible ? 1 : 0
                }), ";transition:opacity 100ms ", (function(e) {
                    return e.theme.transitions.easings.smooth
                }), ";position:absolute;left:6px;right:6px;bottom:6px;display:flex;flex-direction:row-reverse;align-items:center;justify-content:space-between;z-index:1;", Ae.m, "{width:20px;height:20px;}"),
                Qi = Object(g.z)("div", {
                    target: "e1oq7ugp1"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";padding:2px;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.6);"),
                Ji = Object(g.z)("span", {
                    target: "e1oq7ugp0"
                })((function(e) {
                    return e.theme.typography.caption
                }), ";color:", (function(e) {
                    return e.theme.colors.text.white
                }), ";cursor:pointer;margin-right:4px;"),
                Xi = {
                    name: "e0dnmk",
                    styles: "cursor:pointer"
                },
                $i = function(e) {
                    var t = e.failReason,
                        n = a.useRef(null),
                        i = Object(s.e)({}, n).focusableProps;
                    return Object(r.d)(Zi, Object(f.a)({
                        "aria-label": t,
                        error: !0
                    }, i, {
                        ref: n,
                        tabIndex: 0
                    }), Object(r.d)(Ae.c, {
                        css: Xi,
                        size: 24,
                        "aria-hidden": !0
                    }))
                },
                eo = {
                    name: "1nq59d9",
                    styles: "transition:opacity 100ms linear"
                },
                to = function(e) {
                    var t = e.name,
                        n = e.failed,
                        a = e.finished,
                        i = e.url,
                        c = e.fileType,
                        l = e.mobile,
                        s = e.alternativeText,
                        u = e.onCancel,
                        d = e.onAlternativeTextEdit,
                        m = e.progress,
                        b = void 0 === m ? 0 : m,
                        f = e.failReason,
                        p = void 0 === f ? "" : f,
                        h = e.insistHover,
                        g = e.onHoverChange,
                        v = Object(ie.i)({
                            onHoverChange: g
                        }),
                        j = v.hoverProps,
                        O = v.isHovered,
                        y = Object(ie.f)().isFocusVisible;
                    return Object(r.d)(o.a, null, (function(e) {
                        return Object(r.d)(Ni, null, Object(r.d)(Ui, j, Object(r.d)(Gi, null, a && Object(r.d)(Zi, {
                            success: !0
                        }, Object(r.d)(Ae.D, {
                            size: 24,
                            "aria-hidden": !0
                        })), n && Object(r.d)(Jt, {
                            description: p,
                            allowTouch: !0
                        }, Object(r.d)($i, {
                            failReason: p
                        })), !a && !n && Object(r.d)(Ii.a, {
                            size: "medium",
                            progress: b,
                            "aria-hidden": !0
                        })), (u || d) && Object(r.d)(Ki, {
                            visible: h || O || y || l
                        }, u && Object(r.d)(Qi, null, Object(r.d)(Ae.m, {
                            onPress: u,
                            "aria-label": "remove the " + t + " file"
                        }, Object(r.d)(Ae.x, {
                            size: 20,
                            "aria-hidden": !0
                        }))), "image" === c && d && Object(r.d)(Qi, null, Object(r.d)(Ae.m, {
                            onPress: d,
                            "aria-label": "add alternative text to the " + t + " image"
                        }, Object(r.d)(Ae.h, {
                            size: 20,
                            "aria-hidden": !0
                        })), Object(r.d)(Ji, {
                            onClick: d
                        }, e("alt_text")))), "image" === c && Object(r.d)(Yi, {
                            src: i,
                            alt: s || "",
                            style: {
                                opacity: a ? 1 : .25
                            },
                            css: eo
                        }), "other" === c && Object(r.d)(Wi, null, Object(r.d)(Ae.k, {
                            size: 56
                        }))), Object(r.d)(Vi, {
                            ellipsis: !0,
                            failed: n,
                            finished: a
                        }, t))
                    }))
                };
            var no = Object(g.z)("p", {
                    target: "eprg9im5"
                })("margin-bottom:", (function(e) {
                    var t = e.theme,
                        n = e.mobile;
                    return "modern" !== t.name && n ? 0 : 4
                }), "px;", (function(e) {
                    return e.theme.typography.caption
                }), " ", fn(), ";margin:0;padding:0 12px;max-width:100%;max-height:50px;"),
                ro = Object(g.z)("div", {
                    target: "eprg9im4"
                })((function(e) {
                    var t = e.theme;
                    return !e.mobile && "modern" === t.name && "max-height: 230px; overflow-y: auto;"
                }), ";"),
                ao = Object(g.z)("div", {
                    target: "eprg9im3"
                })("height:", (function(e) {
                    var t = e.theme;
                    return e.mobile || "modern" !== t.name ? 145 : 140
                }), "px;overflow:hidden;display:flex;align-items:center;justify-content:center;width:100%;"),
                io = Object(g.z)("div", {
                    target: "eprg9im2"
                })("padding:", (function(e) {
                    var t = e.theme;
                    return t.spaces.space3 + " " + t.spaces.space5
                }), ";display:flex;flex-direction:row;justify-content:center;align-items:center;max-width:100%;"),
                oo = Object(g.z)(Ue, {
                    target: "eprg9im1"
                })({
                    name: "k8pa40",
                    styles: "height:34px;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0"
                }),
                co = Object(g.z)(U.j, {
                    target: "eprg9im0"
                })("color:", (function(e) {
                    var t = e.theme;
                    return e.highlighted ? t.colors.ctaText : t.colors.text.white
                }), ";background-color:", (function(e) {
                    var t = e.theme;
                    return e.highlighted ? t.colors.cta : t.colors.grayscale[200]
                }), ";height:34px;width:34px;justify-content:center;align-items:center;display:flex;padding:6px 8px;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:6px;transition:background 100ms linear;"),
                lo = {
                    name: "q4dzvk",
                    styles: "width:100%;height:auto"
                },
                so = function(e) {
                    var t = e.url,
                        n = e.alternativeText,
                        i = e.onAlternativeTextChanged,
                        c = e.mobile,
                        l = e.titleId,
                        s = a.useState(n || ""),
                        u = s[0],
                        d = s[1],
                        m = Object(ie.f)().isFocusVisible,
                        b = Object(ee.l)();
                    return Object(r.d)(o.a, null, (function(e) {
                        return Object(r.d)(ro, {
                            mobile: c
                        }, Object(r.d)(ao, {
                            mobile: c
                        }, Object(r.d)("img", {
                            src: t,
                            css: lo,
                            alt: n
                        })), Object(r.d)(io, null, Object(r.d)(oo, {
                            autoFocus: !0,
                            "aria-labelledby": l,
                            "aria-describedby": b,
                            maxLength: 16384,
                            value: u,
                            placeholder: e("describe_image"),
                            onChange: function(e) {
                                var t = e.target;
                                return d(t.value)
                            }
                        }), Object(r.d)(co, {
                            "aria-label": "save the image's alternative text",
                            highlighted: u !== n || m,
                            disabled: u === n,
                            onPress: function() {
                                i(u)
                            }
                        }, Object(r.d)(U.a, {
                            size: 24
                        }))), Object(r.d)(no, {
                            id: b,
                            mobile: c
                        }, e("alternative_text_description")))
                    }))
                },
                uo = n(94);
            var mo = Object(g.z)("h2", {
                    target: "e1k6tlos7"
                })((function(e) {
                    var t = e.failed,
                        n = e.theme;
                    return t && {
                        color: n.typography.errorCaption.color
                    }
                }), " padding:0 6px;font-size:14px;font-weight:normal;align-self:center;margin:0;"),
                bo = Object(g.z)("div", {
                    target: "e1k6tlos6"
                })({
                    name: "189qznn",
                    styles: "display:flex;cursor:pointer"
                }),
                fo = Object(g.z)("div", {
                    target: "e1k6tlos5"
                })("transition:max-height ", (function(e) {
                    return e.longAnimation ? 600 : 400
                }), "ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";overflow:hidden;max-height:249px;"),
                po = Object(g.z)("div", {
                    target: "e1k6tlos4"
                })("height:auto;", (function(e) {
                    return e.edit && {
                        margin: "0 -8px"
                    }
                }), ";"),
                ho = Object(g.z)("div", {
                    target: "e1k6tlos3"
                })("max-height:", (function(e) {
                    var t = e.theme;
                    return e.mobile || "modern" !== t.name ? 200 : 170
                }), "px;overflow:auto;display:flex;flex-direction:row;flex-wrap:wrap;padding:4px 0;"),
                go = Object(g.z)("hr", {
                    target: "e1k6tlos2"
                })("margin:", 8, "px -", 8, "px 0;border:0;border-bottom:1px solid rgba(0, 0, 0, 0.1);"),
                vo = Object(g.z)(Ae.e, {
                    target: "e1k6tlos1"
                })((function(e) {
                    return "up" === e.direction && {
                        transform: "scaleY(-1)"
                    }
                }), ";"),
                jo = {
                    name: "gc6sdx",
                    styles: "padding-left:4px"
                },
                Oo = Object(g.z)(U.q, {
                    target: "e1k6tlos0"
                })("padding:", (function(e) {
                    var t = e.theme,
                        n = e.isEdit,
                        r = e.expanded;
                    return !e.mobile && "modern" === t.name && n && r ? "8px 8px 0" : "8px"
                }), ";", (function(e) {
                    return e.theme.typography.basic
                }), ";overflow:hidden;"),
                yo = {
                    name: "x4j9dr",
                    styles: "margin-top:6px;max-width:100%"
                },
                xo = {
                    name: "13fmgtn",
                    styles: "transform:scaleX(-1)"
                },
                wo = Object(Di.createSelector)([h.C], (function(e) {
                    return e.map((function(e) {
                        return Object(f.a)({
                            id: e.id
                        }, e.properties)
                    }))
                })),
                ko = Object(o.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t) {
                            e.emit("cancel_upload", {
                                eventId: t
                            })
                        },
                        a = function(t, r) {
                            e.updateEvent(n, t, {
                                properties: {
                                    alternativeText: r
                                }
                            })
                        },
                        i = function() {
                            e.emit("send_file_events")
                        };
                    return function(e) {
                        var t = e.getApplicationState(),
                            n = t.isSendingFileEvents,
                            o = t.mobile,
                            c = t.config,
                            l = t.license,
                            s = t.group,
                            u = t.requestedGroup,
                            d = wo(Object(b.m)(e));
                        return {
                            mobile: o,
                            persistKey: Object(uo.a)({
                                license: l,
                                group: s,
                                requestedGroup: u
                            }),
                            isSendingFileEvents: n,
                            uploadEntries: d,
                            cancelUpload: r,
                            setAlternativeText: a,
                            sendFiles: i,
                            localize: e.localize,
                            themeName: c.theme.name
                        }
                    }
                }))((function(e) {
                    var t = e.uploadEntries,
                        n = e.uploadEnabled,
                        i = e.cancelUpload,
                        o = e.localize,
                        c = e.mobile,
                        l = e.persistKey,
                        s = e.sendFiles,
                        u = e.isSendingFileEvents,
                        d = e.setAlternativeText,
                        m = e.themeName,
                        b = Object(ee.l)(),
                        p = Object(ee.l)(),
                        g = a.useState(!0),
                        v = g[0],
                        j = g[1],
                        y = a.useState(!1),
                        x = y[0],
                        w = y[1],
                        k = a.useState(!1),
                        E = k[0],
                        C = k[1],
                        z = a.useState(null),
                        S = z[0],
                        _ = z[1],
                        R = a.useState(""),
                        T = R[0],
                        I = R[1],
                        M = a.useRef(null),
                        F = a.useRef(null),
                        P = function(e, t) {
                            var n = e.filter((function(e) {
                                    return e.failed
                                })),
                                r = e.filter((function(e) {
                                    return e.finished
                                })).length,
                                a = n.length,
                                i = e.length,
                                o = t("file_upload_status").replace("%finishedCount%", String(r)).replace("%totalCount%", String(i));
                            switch (!0) {
                                case a > 0:
                                    return {
                                        uploadStatus: "error",
                                        title: a > 1 ? t("files_failed_to_upload").replace("%files%", String(a)) : n[0].failReason
                                    };
                                case r === i:
                                    return {
                                        uploadStatus: "success",
                                        title: o
                                    };
                                default:
                                    return {
                                        uploadStatus: "pending",
                                        title: o
                                    }
                            }
                        }(t, o),
                        B = function() {
                            T && I("")
                        },
                        q = a.useCallback((function() {
                            return c || "modern" !== m ? 249 : 228
                        }), [m, c]),
                        A = a.useCallback((function(e) {
                            return (t.length > 2 || e ? q() : 201) + "px"
                        }), [t, q]),
                        H = a.useCallback((function(e) {
                            D(e) && (M.current.style.maxHeight = e)
                        }), []),
                        L = function(e) {
                            return F.current.style.height = e
                        },
                        D = function(e) {
                            return M.current.style.maxHeight !== e
                        },
                        V = a.useCallback((function() {
                            v ? (w(!0), H("0px")) : j(!0)
                        }), [v, H]),
                        N = function(e) {
                            if (v) {
                                var t = A(!!e);
                                !e && D(t) ? (_(null), C(!0), L(F.current.clientHeight + "px"), H(t)) : (H(q() + "px"), _(e))
                            } else _(e)
                        },
                        U = a.useCallback((function() {
                            x ? (j(!1), w(!1)) : E && (L("auto"), C(!1))
                        }), [x, E]);
                    return a.useEffect((function() {
                        t.length && v && !x && H(A(!!S))
                    }), [t.length, v, x, H, A, S]), a.useEffect((function() {
                        if (Object(Li.b)("session")) {
                            var e = function() {
                                Object(h.F)(t) || function(e, t) {
                                    var n = e.filter((function(e) {
                                        return e.finished
                                    })).map((function(e) {
                                        return Object(f.a)({}, e, {
                                            url: e.serverUrl
                                        })
                                    }));
                                    Object(h.F)(n) || window.sessionStorage.setItem(t, JSON.stringify(n))
                                }(t, l)
                            };
                            return window.addEventListener("beforeunload", e),
                                function() {
                                    return window.removeEventListener("beforeunload", e)
                                }
                        }
                    }), [t, l]), Object(r.d)(Oo, {
                        isEdit: S,
                        expanded: !x && v,
                        mobile: c
                    }, Object(r.d)(O.b, {
                        message: P.title,
                        clearOnUnmount: !0,
                        "aria-live": "error" === P.uploadStatus ? "assertive" : "polite"
                    }), Object(r.d)(bo, {
                        onClick: function(e) {
                            e.stopPropagation(), V()
                        }
                    }, S ? Object(r.d)(Ae.m, {
                        "aria-label": "go back to upload list",
                        onPress: function() {
                            N(null)
                        }
                    }, Object(r.d)(Ae.a, {
                        size: 24,
                        css: xo,
                        "aria-hidden": !0
                    })) : Object(r.d)(a.Fragment, null, "pending" === P.uploadStatus ? Object(r.d)(Ii.a, {
                        size: "medium",
                        "aria-hidden": !0
                    }) : "success" === P.uploadStatus ? Object(r.d)(Zi, {
                        success: !0
                    }, Object(r.d)(Ae.D, {
                        size: 24,
                        "aria-label": "Upload success"
                    })) : Object(r.d)(Zi, {
                        error: !0
                    }, Object(r.d)(Ae.c, {
                        size: 24,
                        "aria-label": "Upload error"
                    }))), Object(r.d)(mo, Object(f.a)({
                        id: p,
                        flexFill: !0,
                        ellipsis: !0
                    }, "error" === P.uploadStatus && {
                        failed: !0,
                        title: P.title
                    }), S ? o("add_alternative_text") : P.title), Object(r.d)(Ae.m, {
                        css: jo,
                        "aria-label": "Toggle upload list",
                        "aria-controls": b,
                        "aria-expanded": v,
                        onPress: V
                    }, Object(r.d)(Ae.n, {
                        size: 24,
                        "aria-hidden": !0
                    }, Object(r.d)(vo, {
                        direction: v && !x ? "down" : "up",
                        size: 24
                    })))), v && !x && Object(r.d)(go, null), Object(r.d)(fo, {
                        ref: M,
                        onTransitionEnd: U,
                        longAnimation: !v || x
                    }, v && Object(r.d)(po, {
                        id: b,
                        edit: !!S,
                        ref: F
                    }, S ? Object(r.d)(so, Object(f.a)({
                        titleId: p
                    }, t.find((function(e) {
                        return e.id === S
                    })), {
                        onAlternativeTextChanged: function(e) {
                            N(null), d(S, e)
                        },
                        mobile: c
                    })) : Object(r.d)(a.Fragment, null, Object(r.d)(ho, {
                        mobile: c
                    }, t.map((function(e) {
                        return Object(r.d)(to, Object(f.a)({}, e, {
                            key: e.id,
                            mobile: c,
                            failed: !!e.failed,
                            insistHover: T === e.id,
                            onHoverChange: B,
                            onCancel: !u || e.failed ? function() {
                                return function(e) {
                                    if (!c && t.length > 1) {
                                        var n = Object(h.p)((function(t) {
                                                return t.id === e
                                            }), t),
                                            r = n === t.length - 1;
                                        I(t[n + (r ? -1 : 1)].id)
                                    }
                                    i(e)
                                }(e.id)
                            } : null,
                            onAlternativeTextEdit: u ? null : function() {
                                return N(e.id)
                            }
                        }))
                    }))), Object(r.d)(pt.a, {
                        onClick: s,
                        disabled: !n,
                        pending: u || "pending" === P.uploadStatus,
                        css: yo
                    }, o("send_files"))))))
                }));
            var Eo = Object(g.z)("div", {
                    target: "ezpiwsd0"
                })({
                    name: "1u57r43",
                    styles: "position:absolute;bottom:0;left:0;right:0;z-index:100"
                }),
                Co = Object(o.c)((function(e, t) {
                    var n = t.markAsSeen,
                        r = function() {
                            b.r(u.d, Date.now(), e).reverse().forEach((function(e) {
                                return n(e.id)
                            }))
                        };
                    return function(e) {
                        var t = !Object(h.F)(b.m(e)),
                            n = e.getApplicationState("mobile"),
                            a = b.i(e, u.d),
                            i = e.getUnseenCount(u.d),
                            o = a && a.properties ? a.properties.text : null;
                        return {
                            isFileUploadAllowed: b.bb(e),
                            isFileUploadPossible: b.K(e),
                            isUploadingFiles: t,
                            previewText: o,
                            unseenCount: i,
                            mobile: n,
                            markAllEventsAsSeen: r,
                            localize: e.localize
                        }
                    }
                }))((function(e) {
                    var t = e.isFileUploadAllowed,
                        n = e.isFileUploadPossible,
                        r = e.isUploadingFiles,
                        i = e.previewText,
                        o = e.unseenCount,
                        l = e.chatId,
                        s = e.mobile,
                        u = e.scrollToBottom,
                        d = e.markAllEventsAsSeen,
                        m = e.isOnBottomSource,
                        b = e.isScrollable,
                        f = e.localize,
                        p = i,
                        h = Object(c.u)(m),
                        g = o > 0 && !h && b,
                        j = a.useState(g),
                        y = j[0],
                        x = j[1];
                    return p || (p = f(o > 1 ? "new_messages" : "new_message")), !g && y && x(!1), a.useEffect((function() {
                        if (g) {
                            var e = setTimeout((function() {
                                return x(!0)
                            }), 300);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [g]), a.createElement(Eo, null, a.createElement(v.a, {
                        appear: !0,
                        component: null
                    }, r && a.createElement(w.b, {
                        key: "upload"
                    }, t && a.createElement(ko, {
                        chatId: l,
                        uploadEnabled: n
                    })), y && a.createElement(w.b, {
                        key: "unseen"
                    }, a.createElement(U.B, {
                        text: p,
                        stickToEdge: s,
                        unseenCount: o,
                        onClick: u,
                        onClose: d
                    }))), y && a.createElement(O.b, {
                        message: p,
                        clearOnUnmount: !0,
                        "aria-live": "assertive"
                    }))
                })),
                zo = function(e) {
                    var t = Object(p.g)().Maximized.css.background;
                    return a.createElement(Ii.a, Object(f.a)({}, e, {
                        adjustToColor: t,
                        ariaLabel: "Loading previous messages"
                    }))
                };
            var So = Object(g.z)("div", {
                    target: "e1fh44if0"
                })({
                    name: "1f0bicm",
                    styles: "padding:1em;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:0.9em"
                }),
                _o = function(e) {
                    return a.createElement(So, null, a.createElement(pt.a, e))
                },
                Ro = Object(o.c)((function(e) {
                    var t = function() {
                            return x.J(e)
                        },
                        n = function() {
                            return x.K(e, u.d)
                        };
                    return function(e) {
                        var r = "startChatAgain" === b.h(e, u.d),
                            a = e.getChat(u.d).properties,
                            i = a.starting,
                            o = a.startChatAgainPending,
                            c = e.localize(r ? "embedded_start_chat_again" : "embedded_greeting_accept");
                        return {
                            startAction: r ? n : t,
                            buttonLabel: c,
                            isPending: i || o
                        }
                    }
                }))((function(e) {
                    var t = e.isPending,
                        n = e.buttonLabel,
                        r = e.startAction,
                        i = e.onClick,
                        o = void 0 === i ? h.V : i;
                    return a.createElement(_o, {
                        disabled: t,
                        pending: t,
                        onClick: function(e) {
                            r(), o(e)
                        }
                    }, n)
                }));
            var To = Object(g.z)("div", {
                    target: "e1onopp21"
                })("position:absolute;bottom:0;left:0;right:0;background:", (function(e) {
                    return e.theme.colors.caution
                }), ";z-index:2;color:", (function(e) {
                    return e.theme.colors.text.black
                }), ";text-align:center;font-size:0.9em;line-height:2.8em;transform:translateY(100%);"),
                Io = Object(g.z)("div", {
                    target: "e1onopp20"
                })({
                    name: "1fgmm64",
                    styles: "flex-grow:1;height:100%;position:relative;min-height:0;z-index:0;-webkit-overflow-scrolling:touch"
                }),
                Mo = {
                    name: "19z3rwr",
                    styles: "background:transparent;overscroll-behavior:contain;position:absolute;top:0;bottom:0;left:0;right:0"
                },
                Fo = {
                    name: "jddw9f",
                    styles: "position:absolute;bottom:0;left:50%;z-index:3;transform:translate(-50%, 50%)"
                },
                Po = function(e) {
                    return e.events[0].id
                },
                Bo = function(e) {
                    return 0 !== e.length ? Po(e[0]) : null
                },
                qo = function(e) {
                    var t = Object(h.M)(e);
                    if (!t) return null;
                    var n = Object(h.M)(t.events);
                    return n ? n.id : null
                };
            var Ao = Object(j.a)([function(e, t) {
                    return e.getTimeline(t)
                }, h.C], (function(e, t) {
                    var n = b.E(t);
                    return e.map((function(e, r) {
                        var a = 0 === r,
                            i = e.showDate && !a && n;
                        return Object(f.a)({}, e, {
                            isThreadBoundary: i,
                            authorData: t.getUser(e.author)
                        })
                    }))
                }))((function(e, t) {
                    return t
                })),
                Ho = Object(o.c)((function(e, t) {
                    var n = t.id,
                        r = e.getApplicationState("isPreview") ? h.V : function() {
                            x.H(e)
                        },
                        a = e.localize,
                        i = function() {
                            return e.updateChat(n, {
                                properties: {
                                    loadingHistory: !0
                                }
                            })
                        },
                        o = function(t) {
                            return e.requestUpdateEvent(n, t, {
                                seen: !0
                            }).catch(h.V)
                        },
                        c = function(t, r) {
                            x.B(e, n, t, r)
                        },
                        l = function(t) {
                            var r = t.eventId,
                                a = t.buttonId;
                            e.sendEvent(n, {
                                type: "rich_message_postback",
                                properties: {
                                    eventId: r,
                                    postback: {
                                        id: a,
                                        toggled: !0
                                    }
                                }
                            })
                        },
                        s = function(t) {
                            return b.N(e, t)
                        },
                        u = function(t) {
                            return x.F(e, t)
                        },
                        d = function(t) {
                            return x.N(e, {
                                properties: t
                            })
                        },
                        m = function(t) {
                            var n = t.event,
                                r = t.button;
                            return x.o(e, n, r)
                        };
                    return function(e) {
                        var t = e.getChat(n),
                            f = t.active,
                            p = t.properties,
                            h = p.agentIsTyping,
                            g = p.loadingHistory,
                            v = p.queued,
                            j = p.ended,
                            O = b.c(n, e),
                            y = b.x(e, n),
                            x = e.getUnseenCount(n),
                            w = b.E(e) && b.U(e);
                        return {
                            agent: O,
                            active: f,
                            ended: j,
                            loadHistory: i,
                            isThreadStickerEnabled: w,
                            hasMoreHistory: y,
                            markAsSeen: o,
                            sendMessage: c,
                            queued: v,
                            sendPostback: l,
                            showPrechat: r,
                            localize: a,
                            updateSessionUser: d,
                            showMoment: u,
                            unseenCount: x,
                            timeline: Ao(e, n, e.getState()),
                            activeQuickReply: b.p(n, e),
                            agentIsTyping: h && !!O,
                            shouldLoadHistory: y && !g,
                            isLoadingHistory: g,
                            showAvatar: b.g("agentAvatar", e).enabled,
                            pageFocused: e.getApplicationState("pageFocused"),
                            inputMode: b.h(e, n),
                            reconnecting: b.kb(e),
                            displayOfflineInformation: b.ib(e),
                            lastSeenEvent: x > 0 && e.getLastSeenAgentEvent(n),
                            isGreeting: s,
                            handleRichGreetingButtonClicked: m,
                            isFillableFormDisplayed: b.L(e)
                        }
                    }
                }))((function(e) {
                    var t = e.displayOfflineInformation,
                        n = e.active,
                        i = e.ended,
                        o = e.activeQuickReply,
                        l = e.agent,
                        s = e.isThreadStickerEnabled,
                        d = e.hasMoreHistory,
                        m = e.pageFocused,
                        b = e.id,
                        j = e.inputMode,
                        y = e.loadHistory,
                        x = e.localize,
                        k = e.queued,
                        E = e.reconnecting,
                        C = e.shouldLoadHistory,
                        z = e.showAvatar,
                        S = e.showPrechat,
                        _ = e.timeline,
                        R = e.agentIsTyping,
                        T = e.mobile,
                        I = e.unseenCount,
                        F = e.lastSeenEvent,
                        P = e.scrollingDeltaSource,
                        B = e.sendMessage,
                        q = e.showMoment,
                        A = e.handleRichGreetingButtonClicked,
                        H = e.isOnBottomSource,
                        D = e.isFillableFormDisplayed,
                        V = e.isLoadingHistory,
                        U = a.useRef(),
                        W = Object(c.v)(!1),
                        Y = a.useRef(!1),
                        Z = a.useRef(),
                        K = a.useState(I),
                        Q = K[0],
                        J = K[1],
                        X = a.useState(F)[0],
                        $ = Object(c.d)((function() {
                            return function(e, t, n, r) {
                                return e.some((function(e) {
                                    return e.type === u.g
                                })) ? "draft" : t ? "newMessageDivider" : r || n || !e.some((function(e) {
                                    return e.events.some((function(e) {
                                        return "boosters" === e.type
                                    }))
                                })) ? "form" : "boosters"
                            }(_, Q, n, i)
                        })),
                        ee = Object(c.e)(E),
                        te = "modern" !== Object(p.g)().name && z,
                        ne = a.useCallback((function(e) {
                            e && C && y()
                        }), [C, y]),
                        re = a.useCallback((function() {
                            clearTimeout(Z.current), Z.current = setTimeout((function() {
                                P.next({
                                    deltaX: 0,
                                    deltaY: 40
                                })
                            }), 4e3)
                        }), [P]),
                        ae = a.useCallback((function(e) {
                            H.next(e), e && D ? re() : clearTimeout(Z.current)
                        }), [H, D, re]);
                    Object(c.o)((function() {
                        clearTimeout(Z.current)
                    }));
                    var ie = Object(c.s)(U, {
                            firstItemKey: Bo(_),
                            lastItemKey: qo(_),
                            onIsScrolledToTopChanged: ne,
                            onIsScrolledToBottomChanged: ae,
                            onIsUserScrollingChanged: W.next,
                            onScrollDeltaChanged: P.next
                        }),
                        oe = ie.scrollToTop,
                        ce = ie.scrollToBottom,
                        le = ie.getIsOnBottom,
                        se = ie.onWheel,
                        ue = ie.onTouchStart,
                        de = ie.getIsScrollable,
                        me = ie.setScrollTargetNode,
                        be = a.useCallback((function(e) {
                            le() && ce(e)
                        }), [le, ce]);
                    a.useEffect((function() {
                        D ? re() : clearTimeout(Z.current)
                    }), [D, re]);
                    var fe = a.useCallback((function() {
                            be({
                                duration: 0
                            })
                        }), [be]),
                        pe = function(e) {
                            return void 0 === e && (e = h.V),
                                function() {
                                    ce({
                                        duration: 0
                                    }), e()
                                }
                        },
                        he = Object(c.q)((function() {
                            le() ? ce() : ce({
                                duration: 0
                            }), J(0)
                        })),
                        ge = function(e) {
                            var t = a.useRef(e);
                            return a.useEffect((function() {
                                t.current = e
                            })), a.useMemo((function() {
                                return {
                                    handleActionButtonClick: function(e) {
                                        var n = e.button,
                                            r = e.event,
                                            a = t.current,
                                            i = a.active,
                                            o = a.showMoment,
                                            c = a.sendPostback,
                                            l = a.sendMessage,
                                            s = a.handleSendMessage,
                                            u = a.isGreeting,
                                            d = a.handleRichGreetingButtonClicked;
                                        if (u(r)) return d({
                                            event: r,
                                            button: n
                                        }), void("message" === n.type && s());
                                        if (i) switch (n.type) {
                                            case "webview":
                                                return c({
                                                    eventId: r,
                                                    buttonId: n.postbackId
                                                }), void o({
                                                    url: n.value,
                                                    height: n.webviewHeight,
                                                    source: "rich_message"
                                                });
                                            case "message":
                                                return l(n.text, {
                                                    type: "action_button",
                                                    event: r,
                                                    button: n
                                                }), void s();
                                            default:
                                                return void c({
                                                    eventId: r,
                                                    buttonId: n.postbackId
                                                })
                                        }
                                    },
                                    markAsSeen: function(e) {
                                        return t.current.markAsSeen(e)
                                    }
                                }
                            }), [])
                        }(Object(f.a)({}, e, {
                            handleSendMessage: he
                        })),
                        ve = a.useCallback((function(e) {
                            Y.current = e
                        }), []),
                        je = !!(R || k || o || t);
                    return a.useEffect((function() {
                        je && be()
                    }), [je, be]), a.useEffect((function() {
                        if (T) {
                            var e = function() {
                                Y.current && ce({
                                    duration: 0
                                })
                            };
                            return window.addEventListener("resize", e),
                                function() {
                                    return window.removeEventListener("resize", e)
                                }
                        }
                    }), [T, ce]), Object(c.r)({
                        mainElementRef: U,
                        itemsCount: _.reduce((function(e, t) {
                            return e + t.events.length
                        }), 0),
                        tableEdgeReached: function(e) {
                            "previous" === e && oe({
                                duration: 0
                            })
                        }
                    }), Object(r.d)(M, {
                        beginingOfTime: _.length > 0 ? _[0].timestamp : null,
                        rootRef: U
                    }, Object(r.d)(g.f, {
                        noShrink: !0
                    }, Object(r.d)(Mn, {
                        chatId: b,
                        scrollingDeltaSource: P,
                        isOnBottomSource: H,
                        isLoadingHistory: V
                    }, s && Object(r.d)(L, {
                        css: Fo,
                        isUserScrollingSource: W
                    }), E && !ee && Object(r.d)(a.Fragment, null, Object(r.d)(O.b, {
                        message: x("reconnecting"),
                        clearOnUnmount: !0,
                        "aria-live": "assertive"
                    }), Object(r.d)(To, null, x("reconnecting") + "\u2026")))), Object(r.d)(v.a, {
                        appear: !0,
                        component: null
                    }, Object(r.d)(w.d, null, Object(r.d)(Io, null, Object(r.d)(Co, {
                        chatId: b,
                        isScrollable: de(),
                        isOnBottomSource: H,
                        scrollToBottom: ce,
                        markAsSeen: ge.markAsSeen
                    }), Object(r.d)(g.k, {
                        active: m,
                        css: Mo,
                        onWheel: se,
                        onTouchStart: ue,
                        ref: U
                    }, d && Object(r.d)(g.q, null, Object(r.d)(zo, {
                        size: "medium",
                        style: {
                            margin: "auto"
                        }
                    })), _.map((function(e) {
                        return Object(r.d)(a.Fragment, {
                            key: Po(e)
                        }, e.isThreadBoundary && Object(r.d)(N, {
                            timestamp: e.timestamp
                        }), X && Q > 0 && e.events.some((function(e) {
                            return e.id === X.id
                        })) && Object(r.d)(G, {
                            unseenCount: Q,
                            setScrollTargetNode: me
                        }), Object(r.d)(g.j, {
                            isOwn: e.own,
                            onlyFirstWithMeta: !0,
                            avatar: te && "carousel" !== e.type && e.authorData.avatar ? e.authorData.avatar : void 0
                        }, e.events.map((function(t, n) {
                            return Object(r.d)(ka, {
                                chatId: b,
                                id: t.id,
                                key: t.id,
                                showMetaOnClick: 0 !== n,
                                radiusType: e.radiusType,
                                listItemHandlers: ge,
                                scrollTarget: $,
                                setScrollTargetNode: !Q && me,
                                showMoment: q
                            })
                        }))))
                    })), o && Object(r.d)("div", {
                        role: "row"
                    }, Object(r.d)("div", {
                        role: "gridcell"
                    }, Object(r.d)(Ea.b, {
                        "aria-labelledby": o.id,
                        onSelect: function(e) {
                            var t = o.properties.quickReplies[e];
                            o.properties.invitation ? A({
                                event: o.id,
                                button: t
                            }) : B(t.text, {
                                type: "quick_reply",
                                event: o.id,
                                button: t
                            }), he()
                        },
                        replies: o.properties.quickReplies
                    }))), R && Object(r.d)(a.Fragment, null, Object(r.d)(O.b, {
                        clearOnUnmount: !0,
                        "aria-live": "polite",
                        message: x("operator_is_typing", {
                            operator: l.name
                        }).replace("...", "")
                    }), Object(r.d)(v.a, {
                        appear: !0,
                        component: null
                    }, Object(r.d)(w.b, {
                        exit: !1
                    }, Object(r.d)(Hi.b, {
                        avatar: te ? l.avatar : null
                    })))))))), "requestPrechat" === j ? Object(r.d)(_o, {
                        onClick: pe(S)
                    }, x("embedded_greeting_accept")) : "startChat" === j || "startChatAgain" === j ? Object(r.d)(Ro, {
                        onClick: pe()
                    }) : "text" === j ? Object(r.d)(Ua, {
                        chatId: b,
                        onSendMessage: he,
                        onHeightChange: fe,
                        onFocusChange: ve
                    }) : null, Object(r.d)(Ai, {
                        chatId: b,
                        onSendMessage: he
                    }))
                }));

            function Lo() {
                var e = Object(E.a)(["\n\t&-enter,\n\t&-appear {\n\t\topacity: 0;\n\t}\n\n\t&-enter&-enter-active,\n\t&-appear&-appear-active {\n\t\topacity: 1;\n\t\ttransition: opacity ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity ", "ms ", ";\n\t}\n"]);
                return Lo = function() {
                    return e
                }, e
            }
            var Do = Object(g.z)("div", {
                    displayName: "View",
                    section: !0,
                    target: "e1u2umur1"
                })({
                    name: "73jfg1",
                    styles: "flex-grow:1;display:flex;height:100%;min-height:0;padding-bottom:1em"
                }),
                Vo = Object(g.z)("div", {
                    displayType: "ViewContent",
                    target: "e1u2umur0"
                })("overflow-y:auto;height:100%;flex-grow:1;padding:", (function(e) {
                    return e.full ? "0 !important" : "1em 1em 0 1em"
                }), ";"),
                No = function(e, t) {
                    return e(Lo(), 200, t.transitions.easings.sharp, 200, t.transitions.easings.sharp)
                },
                Uo = {
                    name: "1d3w5wq",
                    styles: "width:100%"
                },
                Wo = function(e) {
                    var t = e.children,
                        n = e.full,
                        a = void 0 !== n && n;
                    return Object(r.d)(Do, null, Object(r.d)(r.a, null, (function(e) {
                        var n = e.css,
                            i = e.theme;
                        return Object(r.d)(v.a, {
                            css: Uo
                        }, Object(r.d)(C.a, {
                            appear: !0,
                            classNames: No(n, i),
                            timeout: 200
                        }, Object(r.d)(Vo, {
                            full: a
                        }, t)))
                    })))
                },
                Yo = function() {
                    return a.createElement(o.a, null, (function(e) {
                        return a.createElement(Wo, null, a.createElement(g.c, null, a.createElement(g.m, null, e("lost_connection"))))
                    }))
                };

            function Go() {
                var e = Object(E.a)(["\n\t50% {\n\t\topacity: 0.0;\n\t}\n"]);
                return Go = function() {
                    return e
                }, e
            }
            var Zo = Object(r.e)(Go()),
                Ko = Object(r.c)("background:currentColor;opacity:0.3;animation:", Zo, " 1.5s linear 0s infinite;"),
                Qo = Object(r.c)(Ko, ";"),
                Jo = Object(g.z)("div", {
                    target: "e1uut4cd4"
                })("width:", (function(e) {
                    return e.width || "10em"
                }), ";height:1em;margin:0.3em;border-radius:", (function(e) {
                    return e.theme.borderRadius.sm
                }), ";", Ko, ";"),
                Xo = Object(g.z)("div", {
                    target: "e1uut4cd3"
                })({
                    name: "1d3w5wq",
                    styles: "width:100%"
                }),
                $o = Object(g.z)("div", {
                    target: "e1uut4cd2"
                })({
                    name: "66u5jz",
                    styles: "padding:1em"
                }),
                ec = Object(g.z)("div", {
                    target: "e1uut4cd1"
                })({
                    name: "10qv9sv",
                    styles: "width:100%;margin-top:0.5em"
                }),
                tc = Object(g.z)("div", {
                    displayName: "Message",
                    section: !0,
                    target: "e1uut4cd0"
                })(""),
                nc = function() {
                    return Object(r.d)(Wo, {
                        full: !0
                    }, Object(r.d)(Xo, null, Object(r.d)(g.a, null, Object(r.d)(g.b, {
                        css: Qo,
                        letter: " "
                    })), Object(r.d)($o, null, Object(r.d)(ec, null, Object(r.d)(g.q, null, Object(r.d)(tc, null, Object(r.d)(g.c, null, Object(r.d)(g.m, null, Object(r.d)(Jo, null), Object(r.d)(Jo, {
                        width: "7em"
                    })))))), Object(r.d)(ec, null, Object(r.d)(g.q, {
                        reverse: !0
                    }, Object(r.d)(tc, null, Object(r.d)(g.c, null, Object(r.d)(g.m, null, Object(r.d)(Jo, null)))))), Object(r.d)(ec, null, Object(r.d)(g.q, null, Object(r.d)(tc, null, Object(r.d)(g.c, null, Object(r.d)(g.m, null, Object(r.d)(Jo, null)))))))))
                };
            var rc = Object(g.z)("div", {
                target: "e5cxvfk0"
            })({
                name: "iwp08z",
                styles: "display:flex;justify-content:center;font-size:0.9em"
            });
            var ac = "close_chat_confirm_label",
                ic = Object(g.z)("p", {
                    target: "errpamd0"
                })({
                    name: "1azakc",
                    styles: "text-align:center"
                }),
                oc = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            open: !1,
                            submitting: !1
                        }, t.showModal = function() {
                            t.setState({
                                open: !0
                            })
                        }, t.closeModal = function() {
                            t.setState({
                                open: !1
                            })
                        }, t.handleCloseClick = function() {
                            t.props.isPreview ? t.closeModal() : (t.setState({
                                submitting: !0
                            }), t.props.closeChat().then((function() {
                                t.setState({
                                    submitting: !1
                                }), t.closeModal()
                            })).catch((function() {
                                t.setState({
                                    submitting: !1
                                })
                            })))
                        }, t
                    }
                    return Object(J.a)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.localize,
                            n = e.isPreview,
                            r = this.state.submitting;
                        return a.createElement(a.Fragment, null, a.createElement(Jt, {
                            description: t("close_chat")
                        }, a.createElement(U.j, {
                            onPress: this.showModal,
                            "aria-label": t("close_chat")
                        }, a.createElement(U.e, {
                            "aria-hidden": !0
                        }))), a.createElement(Oe, {
                            shown: this.state.open,
                            onClose: this.closeModal,
                            isPreview: n,
                            "aria-labelledby": ac
                        }, a.createElement(Vt, {
                            forceLightTheme: !0,
                            "aria-hidden": !0
                        }, a.createElement(U.h, null)), a.createElement(ic, {
                            id: ac
                        }, t("leave_chat_confirm")), a.createElement(rc, null, a.createElement(ht, {
                            destructive: !0,
                            label: t("close_chat"),
                            submitting: r,
                            onClick: this.handleCloseClick
                        }))))
                    }, t
                }(a.Component),
                cc = a.createContext({}),
                lc = Object(g.z)("ul", {
                    target: "e1ixnb8m0"
                })("list-style-type:none;position:absolute;z-index:100;background:", (function(e) {
                    return e.theme.colors.surface.light
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.md
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.lg
                }), ";margin:0;margin-top:3.2em;margin-left:0.8em;padding:0;min-width:180px;overflow:hidden;&:focus{outline:none;}&>:last-child{border-bottom:0;}"),
                sc = function(e) {
                    var t = e.highlightedIndex,
                        n = e.items,
                        r = t.current;
                    return !(null === r || r < 0) && "true" !== n.current[r].ref.current.getAttribute("aria-disabled")
                };
            var uc = function(e) {
                var t = e.children,
                    n = e.onClose,
                    r = e.menuButtonRef,
                    o = e.onSelect,
                    l = Object(k.a)(e, ["children", "onClose", "menuButtonRef", "onSelect"]),
                    s = Object(i.useFrame)(),
                    u = a.useRef(null),
                    d = Object(Ra.a)({
                        onSelect: o
                    }),
                    m = d.useHighlightedItemId(),
                    b = Object(c.h)(s);
                return Object(c.n)((function() {
                    "click" === b() && d.clearHighlightedItem(), u.current.focus()
                })), Object(c.m)(u, (function(e) {
                    r.current.contains(e.target) || n()
                }), s), a.createElement(ae, null, a.createElement(cc.Provider, {
                    value: d
                }, a.createElement(lc, Object(f.a)({
                    onMouseOut: d.clearHighlightedItem,
                    tabIndex: -1,
                    role: "menu",
                    ref: u,
                    "aria-activedescendant": m,
                    onKeyDown: function(e) {
                        switch (e.preventDefault(), e.key) {
                            case "ArrowUp":
                                return void d.moveHighlightedItem(-1);
                            case "ArrowDown":
                                return void d.moveHighlightedItem(1);
                            case "Home":
                                return void d.setHighlightedItem(0);
                            case "End":
                                return void d.setHighlightedItem(d.items.current.length - 1);
                            case " ":
                                if (!sc(d)) return;
                                return void d.selectHighlightedItem();
                            case "Enter":
                                if (!sc(d)) return;
                                return d.selectHighlightedItem(), n(), void r.current.focus();
                            case "Tab":
                                return n(), e.shiftKey ? void r.current.focus() : void Object(ji.f)(r.current).focus();
                            case "Escape":
                                return n(), void r.current.focus();
                            default:
                                return void d.highlightItemByString(e)
                        }
                    }
                }, l), t)))
            };
            var dc = "email-transcript-sent-label",
                mc = "email-transcript-not-sent-label",
                bc = Object(g.z)("h2", {
                    target: "emwx8nd0"
                })({
                    name: "xvo3ou",
                    styles: "text-align:center;font-size:16px;font-weight:normal"
                }),
                fc = function(e) {
                    var t = e.email,
                        n = e.localize,
                        r = e.sent,
                        i = e.open,
                        o = e.onClose,
                        l = e.onSubmit,
                        s = e.mobile,
                        u = Object(c.i)("email-transcript"),
                        d = a.useState((function() {
                            return {
                                email: t
                            }
                        })),
                        m = d[0],
                        b = d[1];
                    return a.useEffect((function() {
                        if (i) {
                            var e = u.get();
                            b(e || {
                                email: t
                            })
                        }
                    }), [u, t, i]), a.createElement(Oe, {
                        shown: i,
                        onClose: o,
                        "aria-labelledby": r ? dc : mc
                    }, i && (r ? a.createElement(a.Fragment, null, a.createElement(Vt, {
                        forceLightTheme: !0,
                        "aria-hidden": !0
                    }, a.createElement(U.m, null)), a.createElement(bc, {
                        id: dc,
                        textWrap: !0
                    }, n("chat_transcript_sent").replace(/%s/g, t || "")), a.createElement(rc, null, a.createElement(pt.a, {
                        capitalize: !0,
                        onClick: o
                    }, n("hide")))) : a.createElement(a.Fragment, null, a.createElement(Vt, {
                        forceLightTheme: !0,
                        "aria-hidden": !0
                    }, a.createElement(U.m, null)), a.createElement(bc, {
                        id: mc
                    }, n("send_transcript_to_email")), a.createElement(Rt, {
                        id: "email_transcript",
                        initialValues: m,
                        mobile: s,
                        onSubmit: function(e) {
                            return Math.random() < .01 && Object(Qn.d)("chat_transcript_ordered", {}), l(e.email).then((function() {
                                return u.destroy()
                            })).catch((function() {
                                var e;
                                return (e = {})[yr.a] = n("lost_connection"), e
                            }))
                        },
                        submitLabel: n("send"),
                        validate: function(e) {
                            return e.email ? {} : {
                                email: n("survey_fill_in_required_fields")
                            }
                        }
                    }, a.createElement(g.q, null, a.createElement(ye.b, {
                        onChange: function(e) {
                            var t = e.values;
                            e.dirty && u.set(t)
                        }
                    }), a.createElement(Fr, {
                        ariaLabel: "Enter your email address",
                        name: "email",
                        required: !0,
                        serverName: "",
                        label: "",
                        type: "email",
                        localize: h.C
                    }))))))
                },
                pc = Object(g.z)("li", {
                    target: "ezmrzej0"
                })("background:transparent;font-family:inherit;font-size:14px;border:0;display:flex;align-items:center;padding:1.3em;width:100%;cursor:pointer;", (function(e) {
                    var t = e.theme,
                        n = e.highlighted;
                    return Object(f.a)({
                        borderBottom: "1px solid " + t.colors.divider
                    }, n && {
                        color: "" + t.colors.ctaText,
                        backgroundColor: "" + t.colors.cta
                    })
                }), " &[aria-disabled='true']{pointer-events:none;", (function(e) {
                    var t = e.theme,
                        n = e.highlighted;
                    return Object(f.a)({
                        color: "" + t.colors.grayscale[400]
                    }, n && {
                        color: "" + t.colors.grayscale[600],
                        backgroundColor: "" + t.colors.grayscale[100]
                    })
                }), ";}"),
                hc = function(e) {
                    var t = e.disabled,
                        n = e.text,
                        r = e.value,
                        i = Object(k.a)(e, ["disabled", "text", "value"]),
                        o = a.useRef(null),
                        c = a.useContext(cc),
                        l = c.clearHighlightedItem,
                        s = (0, c.useItem)({
                            ref: o,
                            text: n,
                            value: r
                        }),
                        u = s.id,
                        d = s.highlight,
                        m = s.select,
                        b = (0, s.useHighlighted)();
                    return a.createElement(pc, Object(f.a)({
                        role: "menuitem",
                        id: u,
                        ref: o,
                        highlighted: b,
                        onMouseOver: d,
                        onMouseOut: l,
                        onClick: function(e) {
                            1 !== e.nativeEvent.which || t || m()
                        }
                    }, t && {
                        "aria-disabled": !0
                    }, i))
                },
                gc = hc,
                vc = function(e) {
                    var t = e.checked,
                        n = Object(k.a)(e, ["checked"]);
                    return a.createElement(hc, Object(f.a)({
                        role: "menuitemcheckbox",
                        "aria-checked": t
                    }, n))
                };

            function jc() {
                var e = Object(E.a)(["\n\t&-enter {\n\t\topacity: 0;\n\n\t\t[role='menuitem'],\n\t\t[role='menuitemcheckbox'] {\n\t\t\ttransform: translate3d(0, 20%, 0);\n\t\t}\n\t}\n\n\t&-enter-active {\n\t\topacity: 1;\n\t\ttransition: opacity 100ms ease-in-out;\n\t\t[role='menuitem'],\n\t\t[role='menuitemcheckbox'] {\n\t\t\ttransform: translate3d(0, 0%, 0);\n\t\t\ttransition: transform 200ms;\n\t\t}\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t\t[role='menuitem'],\n\t\t[role='menuitemcheckbox'] {\n\t\t\ttransform: translate3d(0, 0%, 0);\n\t\t}\n\t}\n\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity 200ms ease-in-out;\n\t\t[role='menuitem'],\n\t\t[role='menuitemcheckbox'] {\n\t\t\ttransform: translate3d(0, 20%, 0);\n\t\t\ttransition: transform 200ms;\n\t\t}\n\t}\n"]);
                return jc = function() {
                    return e
                }, e
            }
            var Oc = {
                    name: "1oaeivz",
                    styles: "margin-right:8px"
                },
                yc = function(e) {
                    return e(jc())
                },
                xc = Object(o.c)((function(e) {
                    var t = u.d,
                        n = function(n) {
                            return e.requestUpdateChat(t, {
                                properties: {
                                    transcriptSentTo: n
                                }
                            })
                        },
                        r = function() {
                            e.setApplicationState({
                                muted: !e.getApplicationState("muted")
                            })
                        };
                    return function(e) {
                        var a = e.getChat(t),
                            i = a.active,
                            o = a.properties,
                            c = o.transcriptSentTo,
                            l = tr(e, "floating-menu");
                        return {
                            localize: e.localize,
                            muted: e.getApplicationState("muted"),
                            sendTranscript: n,
                            transcriptSentTo: c,
                            enableTranscript: !e.getApplicationState("isPreview") && (i || o.ended),
                            showTranscript: Object(b.g)("emailTranscript", e).enabled,
                            toggleSounds: r,
                            chatTransfer: l,
                            customerEmail: e.getSessionUser().email
                        }
                    }
                }))((function(e) {
                    var t = e.customerEmail,
                        n = e.enableTranscript,
                        o = e.localize,
                        l = e.muted,
                        s = e.sendTranscript,
                        d = e.showTranscript,
                        m = e.toggleSounds,
                        b = e.chatTransfer,
                        h = e.transcriptSentTo,
                        g = a.useState(!1),
                        j = g[0],
                        O = g[1],
                        y = a.useState(!1),
                        x = y[0],
                        w = y[1],
                        k = Object(i.useFrame)(),
                        E = Object(p.g)();
                    Object(c.h)(k);
                    var z = a.useRef(null),
                        S = !!h,
                        _ = a.useCallback((function(e) {
                            switch (e) {
                                case "mute":
                                    return void m();
                                case "transcript":
                                    return O(!1), void w(!0);
                                case "identityTransfer":
                                    return Object(Qn.d)("chat_app_button_clicked", {
                                        ui_source: "menu"
                                    }), O(!1), void b.showMoment()
                            }
                        }), [m, b]);
                    return Object(c.p)((function() {
                        j && Math.random() < .01 && Object(Qn.d)("meatballs_menu_opened", {})
                    }), [j]), Object(r.d)(a.Fragment, null, Object(r.d)(Jt, {
                        isDisabled: j,
                        description: o("theme_options")
                    }, Object(r.d)(U.j, Object(f.a)({
                        css: Object(r.c)("padding:0;height:32px;background-color:", j ? E.colors.cta : "transparent", ";"),
                        ref: z,
                        onPress: function() {
                            return O((function(e) {
                                return !e
                            }))
                        },
                        "aria-label": j ? "Close menu" : "Open menu",
                        "aria-haspopup": !0
                    }, j && {
                        "aria-expanded": j
                    }), Object(r.d)(U.f, {
                        "aria-hidden": !0,
                        color: j ? E.colors.ctaText : E.colors.titleBarText
                    }))), Object(r.d)(r.a, null, (function(e) {
                        var t = e.css;
                        return Object(r.d)(v.a, {
                            component: null
                        }, j && Object(r.d)(C.a, {
                            classNames: yc(t),
                            timeout: 200
                        }, Object(r.d)(uc, {
                            "aria-label": "Menu",
                            menuButtonRef: z,
                            onClose: function() {
                                return O(!1)
                            },
                            onSelect: _
                        }, d && Object(r.d)(gc, {
                            disabled: !n,
                            text: o("send_transcript"),
                            value: "transcript"
                        }, Object(r.d)(U.m, {
                            css: Oc,
                            "aria-hidden": !0
                        }), o("send_transcript")), b.available && Object(r.d)(gc, {
                            text: u.h,
                            value: "identityTransfer",
                            disabled: b.disabled
                        }, Object(r.d)(U.o, {
                            css: Oc,
                            "aria-hidden": !0
                        }), u.h), Object(r.d)(vc, {
                            checked: l,
                            text: o(l ? "unmute" : "mute"),
                            value: "mute"
                        }, l ? Object(r.d)(U.z, {
                            css: Oc,
                            "aria-hidden": !0
                        }) : Object(r.d)(U.p, {
                            css: Oc,
                            "aria-hidden": !0
                        }), o(l ? "unmute" : "mute")))))
                    })), Object(r.d)(fc, {
                        email: S ? h : t,
                        localize: o,
                        onClose: function() {
                            return w(!1)
                        },
                        onSubmit: s,
                        sent: S,
                        open: x
                    }))
                }));
            var wc = function(e) {
                    return "modern" === e ? 28 : 32
                },
                kc = window.matchMedia("(max-height: 330px)"),
                Ec = {
                    name: "13gu9m5",
                    styles: "overflow:hidden;flex-grow:0;text-align:left;padding:0 0.8em;font-weight:700;display:flex;align-items:center;transition:0.3s background-color"
                },
                Cc = Object(g.z)("div", {
                    displayName: "IconPlaceholder",
                    target: "e7bf83j4"
                })({
                    name: "febvbf",
                    styles: "width:25px;flex-shrink:0"
                }),
                zc = function(e) {
                    return Object(r.c)("height:30px;line-height:30px;font-size:inherit;font-weight:700;margin-top:0;margin-bottom:0;transition:opacity 100ms ", e.transitions.easings.smooth, ";")
                },
                Sc = Object(g.z)("h1", {
                    target: "e7bf83j3"
                })((function(e) {
                    var t = e.theme;
                    return zc(t)
                }), ";"),
                _c = Object(g.z)("button", {
                    target: "e7bf83j2"
                })((function(e) {
                    var t = e.theme;
                    return zc(t)
                }), " width:100%;height:", (function(e) {
                    return "modern" === e.theme.name ? "24px" : "32px"
                }), ";display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;color:inherit;background:none;border:none;cursor:pointer;appearance:none;"),
                Rc = Object(g.z)("span", {
                    target: "e7bf83j1"
                })({
                    name: "ovk77c",
                    styles: "min-width:0"
                }),
                Tc = Object(g.z)("div", {
                    target: "e7bf83j0"
                })(""),
                Ic = function(e) {
                    return Object(h.gb)(e - 1).map((function(e) {
                        return Object(r.d)(Cc, {
                            key: "placeholder_" + e
                        })
                    }))
                },
                Mc = Object(o.c)((function(e) {
                    var t = function(e, t) {
                            return e && e.name && t ? e.name : ""
                        },
                        n = function() {
                            return e.requestUpdateChat(u.d, {
                                active: !1
                            })
                        },
                        r = e.getApplicationState("embedded");
                    return function(e) {
                        var a = Object(b.c)(u.d, e),
                            i = !(Object(b.jb)(e) || Object(b.ib)(e)),
                            o = Object(b.fb)(e);
                        return {
                            embedded: r,
                            closeChat: n,
                            title: e.localize("welcome_title"),
                            alternateTitle: t(a, o),
                            agent: a,
                            showAlternateTitle: i,
                            showCloseButton: e.getChat(u.d).active,
                            localize: e.localize,
                            showAgentBar: o,
                            showAvatar: Object(b.g)("agentAvatar", e).enabled
                        }
                    }
                }))((function(e) {
                    var t = e.showCloseButton,
                        n = e.closeChat,
                        i = e.localize,
                        o = e.showMinimizedButton,
                        l = e.title,
                        s = e.alternateTitle,
                        u = e.onMinimize,
                        d = e.showAgentBar,
                        m = e.showAlternateTitle,
                        b = e.scrollingDeltaSource,
                        h = e.agent,
                        v = e.showAvatar,
                        j = e.isOnBottomSource,
                        O = Object(p.g)(),
                        y = a.useRef(),
                        x = a.useRef(),
                        w = a.useRef(),
                        k = a.useRef(kc.matches),
                        E = a.useState(!0),
                        C = E[0],
                        z = E[1],
                        S = Object(ie.f)(),
                        _ = O.name,
                        R = a.useCallback((function() {
                            y.current && (y.current.style.opacity = 1), x.current && (x.current.style.opacity = 0), w.current && (w.current.style.transform = "translateY(" + wc(_) + "px)"), z(!0)
                        }), [_]),
                        T = a.useCallback((function() {
                            if (m && (b.next({
                                    deltaX: 0,
                                    deltaY: -50
                                }), S.focusVisible)) {
                                var e = Object(ji.d)(document.getElementById(pn))[0];
                                e && e.focus()
                            }
                        }), [S.focusVisible, b, m]);
                    Object(c.n)(R), Object(c.a)(b, (function(e) {
                        var t = e.y;
                        s && !k.current && (y.current && (y.current.style.opacity = 1 - 2 * t), x.current && (x.current.style.opacity = t), w.current && (w.current.style.transform = 0 === t ? "translateY(" + wc(_) + "px)" : "translateY(" + (wc(_) - 60 * t + ("modern" === _ ? 4 : 0)) + "px)"), 1 === t && C ? z(!1) : 0 !== t || C || z(!0))
                    })), a.useEffect((function() {
                        d && s || R()
                    }), [d, R, s]), a.useEffect((function() {
                        var e = function(e) {
                            var t = e.matches;
                            return k.current = t
                        };
                        return kc.addListener(e),
                            function() {
                                return kc.removeListener(e)
                            }
                    }), []), a.useEffect((function() {
                        if (j) return j.subscribe((function(e) {
                            e && R()
                        }))
                    }), [j, R]);
                    var I = function(e, t) {
                            var n = e.filter(Boolean),
                                r = t.filter(Boolean);
                            return n.length === r.length ? {
                                leftIcons: n,
                                rightIcons: r
                            } : n.length > r.length ? {
                                leftIcons: n,
                                rightIcons: Ic(n.length - r.length).concat(r)
                            } : {
                                leftIcons: n.concat(Ic(r.length - n.length)),
                                rightIcons: r
                            }
                        }([Object(r.d)(xc, {
                            key: "menu"
                        })], [o && Object(r.d)(Jt, {
                            key: "minimize",
                            description: i("embedded_minimize_window")
                        }, Object(r.d)(U.j, {
                            onPress: u,
                            "aria-label": i("embedded_minimize_window")
                        }, Object(r.d)(U.n, {
                            "aria-hidden": !0
                        }))), t && Object(r.d)(oc, {
                            closeChat: n,
                            key: "close",
                            localize: i
                        })]),
                        M = I.leftIcons,
                        F = I.rightIcons,
                        P = "modern" === _ ? "small" : "normal";
                    return Object(r.d)(g.x, {
                        css: Ec,
                        leftIcons: M,
                        noShrink: !0,
                        rightIcons: F,
                        title: Object(r.d)(Tc, {
                            ref: w
                        }, Object(r.d)(Sc, {
                            ellipsis: !0,
                            ref: y,
                            style: {
                                marginBottom: 30
                            },
                            "aria-expanded": C
                        }, Object(r.d)(Bt.a, null, l)), Object(r.d)(_c, Object(f.a)({
                            ref: x,
                            disabled: C,
                            onClick: T,
                            "aria-expanded": C,
                            "aria-controls": pn,
                            "aria-label": s || l
                        }, S), m && Object(r.d)(a.Fragment, null, h && d && v && Object(r.d)(cn, {
                            avatarUrl: h.avatar,
                            size: P,
                            availability: "online"
                        }), h && !v && Object(r.d)(cn, {
                            size: P,
                            availability: "online"
                        }), Object(r.d)(Rc, {
                            ellipsis: !0
                        }, s))))
                    })
                })),
                Fc = n(327);
            var Pc = Object(g.z)("div", {
                    displayName: "Footer",
                    section: !0,
                    target: "e13tedl71"
                })({
                    name: "1xjcdp5",
                    styles: "z-index:101"
                }),
                Bc = Object(g.z)("a", {
                    displayName: "FooterLink",
                    target: "e13tedl70"
                })("display:flex;direction:ltr;align-items:center;justify-content:center;color:", (function(e) {
                    return e.theme.colors.grayscale[600]
                }), ";"),
                qc = Object(o.c)((function(e) {
                    var t = e.getApplicationState().license,
                        n = document.referrer ? Object(Z.l)(Object(Z.e)(document.referrer) || "") : "lc" + t,
                        r = b.R(e);
                    return {
                        url: "https://www.livechat.com/powered-by-livechat/?" + Object(Z.a)(Object(f.a)({
                            partner: n,
                            utm_campaign: n,
                            utm_source: "chat_window",
                            utm_medium: "referral"
                        }, r && {
                            utm_term: "nonprofit"
                        })),
                        hidden: b.V(e)
                    }
                }))((function(e) {
                    var t = e.url;
                    return e.hidden ? null : a.createElement(Pc, null, a.createElement(Bc, {
                        href: t,
                        rel: "noreferrer",
                        target: "_blank"
                    }, a.createElement("span", null, "Powered by "), a.createElement(Fc.a, null)))
                }));
            var Ac = {
                    name: "2gmwhl",
                    styles: "z-index:102;position:relative"
                },
                Hc = {
                    name: "l7pcb5",
                    styles: "z-index:102;border-radius:inherit"
                };

            function Lc() {
                var e = Object(i.useFrame)().document;
                return a.useEffect((function() {
                    return Object(l.a)("#overlay_portal_container", e)
                }), [e]), Object(r.d)("div", {
                    id: d,
                    css: Hc
                })
            }
            t.default = Object(o.c)((function(e) {
                return {
                    destroyed: e.getApplicationState().destroyed,
                    showLoader: Object(b.gb)(e)
                }
            }))((function(e) {
                var t = e.destroyed,
                    n = e.showLoader,
                    i = e.onMinimizeButtonPress,
                    o = e.showMinimizedButton,
                    l = Object(c.v)(!0),
                    d = Object(c.v)({
                        x: 0,
                        y: 0
                    });
                return t ? Object(r.d)(Yo, null) : n ? Object(r.d)(nc, null) : Object(r.d)(a.Fragment, null, Object(r.d)(Lc, null), Object(r.d)("div", {
                    id: m,
                    css: Ac
                }), Object(r.d)(s.a, {
                    autoFocus: Object(zt.b)()
                }, Object(r.d)(Mc, {
                    isOnBottomSource: l,
                    onMinimize: i,
                    showMinimizedButton: o,
                    scrollingDeltaSource: d
                }), Object(r.d)(Ho, {
                    id: u.d,
                    scrollingDeltaSource: d,
                    isOnBottomSource: l
                }), Object(r.d)(qc, null)))
            }))
        }
    }
]);