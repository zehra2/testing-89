/*!
 * JavaScript tracking client
 *
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license https://opensource.org/licenses/BSD-3-Clause BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */

/*!! pluginTrackerHook */

/*! @license-end */
! function(n) {
    var i = {};

    function r(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }
    r.m = n, r.c = i, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 2)
}([function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var expireDateTime, plugins = {},
        eventHandlers = {},
        documentAlias = document,
        navigatorAlias = navigator,
        screenAlias = screen,
        windowAlias = window,
        performanceAlias = windowAlias.performance || windowAlias.mozPerformance || windowAlias.msPerformance || windowAlias.webkitPerformance,
        encodeWrapper = windowAlias.encodeURIComponent,
        decodeWrapper = windowAlias.decodeURIComponent,
        urldecode = unescape,
        asyncTrackers = [],
        syncTrackers = [],
        iterator, Piwik, missedPluginTrackerCalls = [];

    function safeDecodeWrapper(t) {
        try {
            return windowAlias.decodeURI(t)
        } catch (e) {
            return unescape(t)
        }
    }

    function isDefined(e) {
        return "undefined" != typeof e
    }

    function isFunction(e) {
        return "function" == typeof e
    }

    function isObject(e) {
        return "object" == typeof e
    }

    function isString(e) {
        return "string" == typeof e || e instanceof String
    }

    function isObjectEmpty(e) {
        if (!e) return 1;
        var t, n = !0;
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (n = !1);
        return n
    }

    function logConsoleError(e) {
        "undefined" != typeof console && console && console.error && console.error(e)
    }

    function logConsoleWarn(e) {
        "undefined" != typeof console && console && console.warn && console.warn(e)
    }

    function apply() {
        for (var e, t, n, i = 0; i < arguments.length; i += 1) {
            var r, o, a = null;
            if (arguments[i] && arguments[i].slice && (a = arguments[i].slice()), isString(t = (n = arguments[i]).shift()) && 0 < t.indexOf("::")) o = (r = t.split("::"))[0], t = r[1], "object" == typeof Piwik[o] && "function" == typeof Piwik[o][t] ? Piwik[o][t].apply(Piwik[o], n) : a && missedPluginTrackerCalls.push(a);
            else
                for (e = 0; e < asyncTrackers.length; e++)
                    if (isString(t)) {
                        o = asyncTrackers[e];
                        var s = 0 < t.indexOf(".");
                        if (s)
                            if (r = t.split("."), o && "object" == typeof o[r[0]]) o = o[r[0]], t = r[1];
                            else if (a) {
                            missedPluginTrackerCalls.push(a);
                            break
                        }
                        if (o[t]) o[t].apply(o, n);
                        else {
                            var c = "The method '" + t + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation';
                            if (logConsoleError(c), !s) throw new TypeError(c)
                        }
                        if ("addTracker" === t) break;
                        if ("setTrackerUrl" === t || "setSiteId" === t) break
                    } else t.apply(asyncTrackers[e], n)
        }
    }

    function addEventListener(e, t, n, i) {
        return e.addEventListener ? (e.addEventListener(t, n, i), 1) : e.attachEvent ? e.attachEvent("on" + t, n) : void(e["on" + t] = n)
    }

    function trackCallbackOnLoad(e) {
        "complete" === documentAlias.readyState ? e() : windowAlias.addEventListener ? windowAlias.addEventListener("load", e) : windowAlias.attachEvent && windowAlias.attachEvent("onload", e)
    }

    function trackCallbackOnReady(n) {
        var i = !1;
        (i = documentAlias.attachEvent ? "complete" === documentAlias.readyState : "loading" !== documentAlias.readyState) ? n(): (documentAlias.addEventListener ? addEventListener(documentAlias, "DOMContentLoaded", function e() {
            documentAlias.removeEventListener("DOMContentLoaded", e, !1), i || (i = !0, n())
        }) : documentAlias.attachEvent && (documentAlias.attachEvent("onreadystatechange", function e() {
            "complete" === documentAlias.readyState && (documentAlias.detachEvent("onreadystatechange", e), i || (i = !0, n()))
        }), documentAlias.documentElement.doScroll && windowAlias === windowAlias.top && function t() {
            if (!i) {
                try {
                    documentAlias.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(t, 0)
                }
                i = !0, n()
            }
        }()), addEventListener(windowAlias, "load", function() {
            i || (i = !0, n())
        }, !1))
    }

    function executePluginMethod(e, t, n) {
        if (!e) return "";
        var i, r, o = "";
        for (i in plugins) Object.prototype.hasOwnProperty.call(plugins, i) && (plugins[i] && "function" == typeof plugins[i][e]) && (r = (0, plugins[i][e])(t || {}, n)) && (o += r);
        return o
    }

    function beforeUnloadHandler() {
        for (var e = 0; e < asyncTrackers.length; e += 1) asyncTrackers[e].trackHeartBeat({
            lastHeartbeat: !0
        });
        for (e = 0; e < syncTrackers.length; e += 1) syncTrackers[e].trackHeartBeat({
            lastHeartbeat: !0
        });
        if (executePluginMethod("unload"), expireDateTime)
            for (;
                (new Date).getTimeAlias() < expireDateTime;);
    }

    function loadScript(e, t) {
        var n = documentAlias.createElement("script");
        n.type = "text/javascript", n.src = e, n.readyState ? n.onreadystatechange = function() {
            var e = this.readyState;
            "loaded" !== e && "complete" !== e || (n.onreadystatechange = null, t())
        } : n.onload = t, documentAlias.getElementsByTagName("head")[0].appendChild(n)
    }

    function getReferrer() {
        var t = "";
        try {
            t = windowAlias.top.document.referrer
        } catch (e) {
            if (windowAlias.parent) try {
                t = windowAlias.parent.document.referrer
            } catch (e) {
                t = ""
            }
        }
        return "" === t && (t = documentAlias.referrer), t
    }

    function getProtocolScheme(e) {
        var t = new RegExp("^([a-z]+):").exec(e);
        return t ? t[1] : null
    }

    function getHostName(e) {
        var t = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@?]+@)?([^:/#]+)").exec(e);
        return t ? t[1] : e
    }

    function stringStartsWith(e, t) {
        return 0 === (e = String(e)).lastIndexOf(t, 0)
    }

    function stringEndsWith(e, t) {
        return -1 !== (e = String(e)).indexOf(t, e.length - t.length)
    }

    function stringContains(e, t) {
        return -1 !== (e = String(e)).indexOf(t)
    }

    function removeCharactersFromEndOfString(e, t) {
        return (e = String(e)).substr(0, e.length - t)
    }

    function addUrlParameter(e, t, n) {
        n = n || "";
        var i = (e = String(e)).indexOf("#"),
            r = e.length; - 1 === i && (i = r);
        var o = e.substr(0, i),
            a = e.substr(i, r - i);
        return -1 === o.indexOf("?") ? o += "?" : stringEndsWith(o, "?") || (o += "&"), o + encodeWrapper(t) + "=" + encodeWrapper(n) + a
    }

    function removeUrlParameter(e, t) {
        if (-1 === (e = String(e)).indexOf("?" + t + "=") && -1 === e.indexOf("&" + t + "=")) return e;
        var n = e.indexOf("?");
        if (-1 === n) return e;
        var i = e.substr(n + 1),
            r = e.substr(0, n);
        if (i) {
            var o = "",
                a = i.indexOf("#"); - 1 !== a && (o = i.substr(a + 1), i = i.substr(0, a));
            for (var s = i.split("&"), c = s.length - 1; 0 <= c; c--) s[c].split("=")[0] === t && s.splice(c, 1);
            var u = s.join("&");
            u && (r = r + "?" + u), o && (r += "#" + o)
        }
        return r
    }

    function getUrlParameter(e, t) {
        var n = new RegExp("[\\?&#]" + t + "=([^&#]*)").exec(e);
        return n ? decodeWrapper(n[1]) : ""
    }

    function trim(e) {
        return e && String(e) === e ? e.replace(/^\s+|\s+$/g, "") : e
    }

    function utf8_encode(e) {
        return unescape(encodeWrapper(e))
    }

    function sha1(e) {
        for (var t, n, i, r, o, a, s, c, u = function(e, t) {
                return e << t | e >>> 32 - t
            }, l = function(e) {
                for (var t = "", n = 7; 0 <= n; n--) t += (e >>> 4 * n & 15).toString(16);
                return t
            }, d = [], f = 1732584193, g = 4023233417, m = 2562383102, h = 271733878, p = 3285377520, k = [], T = (e = utf8_encode(e)).length, C = 0; C < T - 3; C += 4) n = e.charCodeAt(C) << 24 | e.charCodeAt(C + 1) << 16 | e.charCodeAt(C + 2) << 8 | e.charCodeAt(C + 3), k.push(n);
        switch (3 & T) {
            case 0:
                C = 2147483648;
                break;
            case 1:
                C = e.charCodeAt(T - 1) << 24 | 8388608;
                break;
            case 2:
                C = e.charCodeAt(T - 2) << 24 | e.charCodeAt(T - 1) << 16 | 32768;
                break;
            case 3:
                C = e.charCodeAt(T - 3) << 24 | e.charCodeAt(T - 2) << 16 | e.charCodeAt(T - 1) << 8 | 128
        }
        for (k.push(C); 14 != (15 & k.length);) k.push(0);
        for (k.push(T >>> 29), k.push(T << 3 & 4294967295), t = 0; t < k.length; t += 16) {
            for (C = 0; C < 16; C++) d[C] = k[t + C];
            for (C = 16; C <= 79; C++) d[C] = u(d[C - 3] ^ d[C - 8] ^ d[C - 14] ^ d[C - 16], 1);
            for (i = f, r = g, o = m, a = h, s = p, C = 0; C <= 19; C++) c = u(i, 5) + (r & o | ~r & a) + s + d[C] + 1518500249 & 4294967295, s = a, a = o, o = u(r, 30), r = i, i = c;
            for (C = 20; C <= 39; C++) c = u(i, 5) + (r ^ o ^ a) + s + d[C] + 1859775393 & 4294967295, s = a, a = o, o = u(r, 30), r = i, i = c;
            for (C = 40; C <= 59; C++) c = u(i, 5) + (r & o | r & a | o & a) + s + d[C] + 2400959708 & 4294967295, s = a, a = o, o = u(r, 30), r = i, i = c;
            for (C = 60; C <= 79; C++) c = u(i, 5) + (r ^ o ^ a) + s + d[C] + 3395469782 & 4294967295, s = a, a = o, o = u(r, 30), r = i, i = c;
            f = f + i & 4294967295, g = g + r & 4294967295, m = m + o & 4294967295, h = h + a & 4294967295, p = p + s & 4294967295
        }
        return (c = l(f) + l(g) + l(m) + l(h) + l(p)).toLowerCase()
    }

    function urlFixup(e, t, n) {
        return t = t || "", "translate.googleusercontent.com" === (e = e || "") ? ("" === n && (n = t), e = getHostName(t = getUrlParameter(t, "u"))) : "cc.bingj.com" !== e && "webcache.googleusercontent.com" !== e && "74.6." !== e.slice(0, 5) || (e = getHostName(t = documentAlias.links[0].href)), [e, t, n]
    }

    function domainFixup(e) {
        var t = e.length;
        return "." === e.charAt(--t) && (e = e.slice(0, t)), "*." === e.slice(0, 2) && (e = e.slice(1)), -1 !== e.indexOf("/") && (e = e.substr(0, e.indexOf("/"))), e
    }

    function titleFixup(e) {
        var t;
        return isString(e = e && e.text ? e.text : e) || (t = documentAlias.getElementsByTagName("title")) && isDefined(t[0]) && (e = t[0].text), e
    }

    function getChildrenFromNode(e) {
        return e && (!isDefined(e.children) && isDefined(e.childNodes) || isDefined(e.children)) ? e.children : []
    }

    function containsNodeElement(e, t) {
        return e && t && (e.contains ? e.contains(t) : e === t || e.compareDocumentPosition && 16 & e.compareDocumentPosition(t))
    }

    function indexOfArray(e, t) {
        if (e && e.indexOf) return e.indexOf(t);
        if (!isDefined(e) || null === e) return -1;
        if (!e.length) return -1;
        var n = e.length;
        if (0 === n) return -1;
        for (var i = 0; i < n;) {
            if (e[i] === t) return i;
            i++
        }
        return -1
    }

    function isVisible(u) {
        if (!u) return !1;

        function l(e, t) {
            return windowAlias.getComputedStyle ? documentAlias.defaultView.getComputedStyle(e, null)[t] : e.currentStyle ? e.currentStyle[t] : void 0
        }
        return function e(t, n, i, r, o, a, s) {
            var c = t.parentNode;
            return !! function(e) {
                for (e = e.parentNode; e;) {
                    if (e === documentAlias) return 1;
                    e = e.parentNode
                }
            }(t) && (9 === c.nodeType || "0" !== l(t, "opacity") && "none" !== l(t, "display") && "hidden" !== l(t, "visibility") && (isDefined(n) && isDefined(i) && isDefined(r) && isDefined(o) && isDefined(a) && isDefined(s) || (n = t.offsetTop, o = t.offsetLeft, r = n + t.offsetHeight, i = o + t.offsetWidth, a = t.offsetWidth, s = t.offsetHeight), (u !== t || 0 !== s && 0 !== a || "hidden" !== l(t, "overflow")) && (!c || ("hidden" !== l(c, "overflow") && "scroll" !== l(c, "overflow") || !(o + 1 > c.offsetWidth + c.scrollLeft || o + a - 1 < c.scrollLeft || n + 1 > c.offsetHeight + c.scrollTop || n + s - 1 < c.scrollTop)) && (t.offsetParent === c && (o += c.offsetLeft, n += c.offsetTop), e(c, n, i, r, o, a, s)))))
        }(u)
    }
    var query = {
            htmlCollectionToArray: function(e) {
                var t, n = [];
                if (!e || !e.length) return n;
                for (t = 0; t < e.length; t++) n.push(e[t]);
                return n
            },
            find: function(e) {
                if (!document.querySelectorAll || !e) return [];
                var t = document.querySelectorAll(e);
                return this.htmlCollectionToArray(t)
            },
            findMultiple: function(e) {
                if (!e || !e.length) return [];
                for (var t, n = [], i = 0; i < e.length; i++) t = this.find(e[i]), n = n.concat(t);
                return n = this.makeNodesUnique(n)
            },
            findNodesByTagName: function(e, t) {
                if (!e || !t || !e.getElementsByTagName) return [];
                var n = e.getElementsByTagName(t);
                return this.htmlCollectionToArray(n)
            },
            makeNodesUnique: function(e) {
                var r = [].concat(e);
                if (e.sort(function(e, t) {
                        if (e === t) return 0;
                        var n = indexOfArray(r, e),
                            i = indexOfArray(r, t);
                        return n === i ? 0 : i < n ? -1 : 1
                    }), e.length <= 1) return e;
                for (var t = 0, n = 0, i = [], o = e[t++]; o;) o === e[t] && (n = i.push(t)), o = e[t++] || null;
                for (; n--;) e.splice(i[n], 1);
                return e
            },
            getAttributeValueFromNode: function(e, t) {
                if (this.hasNodeAttribute(e, t)) {
                    if (e && e.getAttribute) return e.getAttribute(t);
                    if (e && e.attributes)
                        if ("undefined" != typeof e.attributes[t]) {
                            if (e.attributes[t].value) return e.attributes[t].value;
                            if (e.attributes[t].nodeValue) return e.attributes[t].nodeValue;
                            var n, i = e.attributes;
                            if (i) {
                                for (n = 0; n < i.length; n++)
                                    if (i[n].nodeName === t) return i[n].nodeValue;
                                return null
                            }
                        }
                }
            },
            hasNodeAttributeWithValue: function(e, t) {
                return !!this.getAttributeValueFromNode(e, t)
            },
            hasNodeAttribute: function(e, t) {
                return e && e.hasAttribute ? e.hasAttribute(t) : !(!e || !e.attributes) && "undefined" != typeof e.attributes[t]
            },
            hasNodeCssClass: function(e, t) {
                if (e && t && e.className && -1 !== indexOfArray("string" == typeof e.className ? e.className.split(" ") : [], t)) return !0;
                return !1
            },
            findNodesHavingAttribute: function(e, t, n) {
                if (n = n || [], !e || !t) return n;
                var i, r, o = getChildrenFromNode(e);
                if (!o || !o.length) return n;
                for (i = 0; i < o.length; i++) r = o[i], this.hasNodeAttribute(r, t) && n.push(r), n = this.findNodesHavingAttribute(r, t, n);
                return n
            },
            findFirstNodeHavingAttribute: function(e, t) {
                if (e && t) {
                    if (this.hasNodeAttribute(e, t)) return e;
                    var n = this.findNodesHavingAttribute(e, t);
                    return n && n.length ? n[0] : void 0
                }
            },
            findFirstNodeHavingAttributeWithValue: function(e, t) {
                if (e && t) {
                    if (this.hasNodeAttributeWithValue(e, t)) return e;
                    var n = this.findNodesHavingAttribute(e, t);
                    if (n && n.length)
                        for (var i = 0; i < n.length; i++)
                            if (this.getAttributeValueFromNode(n[i], t)) return n[i]
                }
            },
            findNodesHavingCssClass: function(e, t, n) {
                if (n = n || [], !e || !t) return n;
                if (e.getElementsByClassName) {
                    var i = e.getElementsByClassName(t);
                    return this.htmlCollectionToArray(i)
                }
                var r, o, a = getChildrenFromNode(e);
                if (!a || !a.length) return [];
                for (r = 0; r < a.length; r++) o = a[r], this.hasNodeCssClass(o, t) && n.push(o), n = this.findNodesHavingCssClass(o, t, n);
                return n
            },
            findFirstNodeHavingClass: function(e, t) {
                if (e && t) {
                    if (this.hasNodeCssClass(e, t)) return e;
                    var n = this.findNodesHavingCssClass(e, t);
                    return n && n.length ? n[0] : void 0
                }
            },
            isLinkElement: function(e) {
                if (!e) return !1;
                return -1 !== indexOfArray(["a", "area"], String(e.nodeName).toLowerCase())
            },
            setAnyAttribute: function(e, t, n) {
                e && t && (e.setAttribute ? e.setAttribute(t, n) : e[t] = n)
            }
        },
        content = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: void 0,
            findContentNodes: function() {
                var e = "." + this.CONTENT_CLASS,
                    t = "[" + this.CONTENT_ATTR + "]";
                return query.findMultiple([e, t])
            },
            findContentNodesWithinNode: function(e) {
                if (!e) return [];
                var t = query.findNodesHavingCssClass(e, this.CONTENT_CLASS),
                    n = query.findNodesHavingAttribute(e, this.CONTENT_ATTR);
                if (n && n.length)
                    for (var i = 0; i < n.length; i++) t.push(n[i]);
                return (query.hasNodeAttribute(e, this.CONTENT_ATTR) || query.hasNodeCssClass(e, this.CONTENT_CLASS)) && t.push(e), t = query.makeNodesUnique(t)
            },
            findParentContentNode: function(e) {
                if (e)
                    for (var t = e, n = 0; t && t !== documentAlias && t.parentNode;) {
                        if (query.hasNodeAttribute(t, this.CONTENT_ATTR)) return t;
                        if (query.hasNodeCssClass(t, this.CONTENT_CLASS)) return t;
                        if (t = t.parentNode, 1e3 < n) break;
                        n++
                    }
            },
            findPieceNode: function(e) {
                var t = query.findFirstNodeHavingAttribute(e, this.CONTENT_PIECE_ATTR);
                return (t = t || query.findFirstNodeHavingClass(e, this.CONTENT_PIECE_CLASS)) || e
            },
            findTargetNodeNoDefault: function(e) {
                if (e) {
                    var t = query.findFirstNodeHavingAttributeWithValue(e, this.CONTENT_TARGET_ATTR);
                    return t ? t : (t = query.findFirstNodeHavingAttribute(e, this.CONTENT_TARGET_ATTR)) ? t : (t = query.findFirstNodeHavingClass(e, this.CONTENT_TARGET_CLASS)) || void 0
                }
            },
            findTargetNode: function(e) {
                var t = this.findTargetNodeNoDefault(e);
                return t || e
            },
            findContentName: function(e) {
                if (e) {
                    var t = query.findFirstNodeHavingAttributeWithValue(e, this.CONTENT_NAME_ATTR);
                    if (t) return query.getAttributeValueFromNode(t, this.CONTENT_NAME_ATTR);
                    var n = this.findContentPiece(e);
                    if (n) return this.removeDomainIfIsInLink(n);
                    if (query.hasNodeAttributeWithValue(e, "title")) return query.getAttributeValueFromNode(e, "title");
                    var i = this.findPieceNode(e);
                    if (query.hasNodeAttributeWithValue(i, "title")) return query.getAttributeValueFromNode(i, "title");
                    var r = this.findTargetNode(e);
                    return query.hasNodeAttributeWithValue(r, "title") ? query.getAttributeValueFromNode(r, "title") : void 0
                }
            },
            findContentPiece: function(e) {
                if (e) {
                    var t = query.findFirstNodeHavingAttributeWithValue(e, this.CONTENT_PIECE_ATTR);
                    if (t) return query.getAttributeValueFromNode(t, this.CONTENT_PIECE_ATTR);
                    var n = this.findPieceNode(e),
                        i = this.findMediaUrlInNode(n);
                    return i ? this.toAbsoluteUrl(i) : void 0
                }
            },
            findContentTarget: function(e) {
                if (e) {
                    var t, n = this.findTargetNode(e);
                    if (query.hasNodeAttributeWithValue(n, this.CONTENT_TARGET_ATTR)) return query.getAttributeValueFromNode(n, this.CONTENT_TARGET_ATTR);
                    if (query.hasNodeAttributeWithValue(n, "href")) return t = query.getAttributeValueFromNode(n, "href"), this.toAbsoluteUrl(t);
                    var i = this.findPieceNode(e);
                    return query.hasNodeAttributeWithValue(i, "href") ? (t = query.getAttributeValueFromNode(i, "href"), this.toAbsoluteUrl(t)) : void 0
                }
            },
            isSameDomain: function(e) {
                if (!e || !e.indexOf) return !1;
                if (0 === e.indexOf(this.getLocation().origin)) return !0;
                var t = e.indexOf(this.getLocation().host);
                return t <= 8 && 0 <= t
            },
            removeDomainIfIsInLink: function(e) {
                return e && e.search && -1 !== e.search(new RegExp("^https?://[^/]+")) && this.isSameDomain(e) && (e = (e = e.replace(new RegExp("^.*//[^/]+"), "")) || "/"), e
            },
            findMediaUrlInNode: function(e) {
                if (e) {
                    var t = e.nodeName.toLowerCase();
                    if (-1 !== indexOfArray(["img", "embed", "video", "audio"], t) && query.findFirstNodeHavingAttributeWithValue(e, "src")) {
                        var n = query.findFirstNodeHavingAttributeWithValue(e, "src");
                        return query.getAttributeValueFromNode(n, "src")
                    }
                    if ("object" === t && query.hasNodeAttributeWithValue(e, "data")) return query.getAttributeValueFromNode(e, "data");
                    if ("object" === t) {
                        var i = query.findNodesByTagName(e, "param");
                        if (i && i.length)
                            for (var r = 0; r < i.length; r++)
                                if ("movie" === query.getAttributeValueFromNode(i[r], "name") && query.hasNodeAttributeWithValue(i[r], "value")) return query.getAttributeValueFromNode(i[r], "value");
                        var o = query.findNodesByTagName(e, "embed");
                        if (o && o.length) return this.findMediaUrlInNode(o[0])
                    }
                }
            },
            trim: function(e) {
                return trim(e)
            },
            isOrWasNodeInViewport: function(e) {
                if (!e || !e.getBoundingClientRect || 1 !== e.nodeType) return !0;
                var t = e.getBoundingClientRect(),
                    n = documentAlias.documentElement || {},
                    i = t.top < 0;
                i && e.offsetTop && (i = 0 < e.offsetTop + t.height);
                var r = n.clientWidth;
                windowAlias.innerWidth && r > windowAlias.innerWidth && (r = windowAlias.innerWidth);
                var o = n.clientHeight;
                return windowAlias.innerHeight && o > windowAlias.innerHeight && (o = windowAlias.innerHeight), (0 < t.bottom || i) && 0 < t.right && t.left < r && (t.top < o || i)
            },
            isNodeVisible: function(e) {
                var t = isVisible(e),
                    n = this.isOrWasNodeInViewport(e);
                return t && n
            },
            buildInteractionRequestParams: function(e, t, n, i) {
                var r = "";
                return e && (r += "c_i=" + encodeWrapper(e)), t && (r && (r += "&"), r += "c_n=" + encodeWrapper(t)), n && (r && (r += "&"), r += "c_p=" + encodeWrapper(n)), i && (r && (r += "&"), r += "c_t=" + encodeWrapper(i)), r
            },
            buildImpressionRequestParams: function(e, t, n) {
                var i = "c_n=" + encodeWrapper(e) + "&c_p=" + encodeWrapper(t);
                return n && (i += "&c_t=" + encodeWrapper(n)), i
            },
            buildContentBlock: function(e) {
                if (e) {
                    var t = this.findContentName(e),
                        n = this.findContentPiece(e),
                        i = this.findContentTarget(e);
                    return {
                        name: (t = this.trim(t)) || "Unknown",
                        piece: (n = this.trim(n)) || "Unknown",
                        target: (i = this.trim(i)) || ""
                    }
                }
            },
            collectContent: function(e) {
                if (!e || !e.length) return [];
                for (var t, n = [], i = 0; i < e.length; i++) isDefined(t = this.buildContentBlock(e[i])) && n.push(t);
                return n
            },
            setLocation: function(e) {
                this.location = e
            },
            getLocation: function() {
                var e = this.location || windowAlias.location;
                return e.origin || (e.origin = e.protocol + "//" + e.hostname + (e.port ? ":" + e.port : "")), e
            },
            toAbsoluteUrl: function(e) {
                if ((!e || String(e) !== e) && "" !== e) return e;
                if ("" === e) return this.getLocation().href;
                if (-1 !== e.search(/^\/\//)) return this.getLocation().protocol + e;
                if (-1 !== e.search(/:\/\//)) return e;
                if (0 === e.indexOf("#")) return this.getLocation().origin + this.getLocation().pathname + e;
                if (0 === e.indexOf("?")) return this.getLocation().origin + this.getLocation().pathname + e;
                if (0 === e.search("^[a-zA-Z]{2,11}:")) return e;
                if (-1 !== e.search(/^\//)) return this.getLocation().origin + e;
                return this.getLocation().origin + this.getLocation().pathname.match(new RegExp("(.*/)"))[0] + e
            },
            isUrlToCurrentDomain: function(e) {
                var t = this.toAbsoluteUrl(e);
                if (!t) return !1;
                var n = this.getLocation().origin;
                return n === t || 0 === String(t).indexOf(n) && ":" !== String(t).substr(n.length, 1)
            },
            setHrefAttribute: function(e, t) {
                e && t && query.setAnyAttribute(e, "href", t)
            },
            shouldIgnoreInteraction: function(e) {
                var t = query.hasNodeAttribute(e, this.CONTENT_IGNOREINTERACTION_ATTR),
                    n = query.hasNodeCssClass(e, this.CONTENT_IGNOREINTERACTION_CLASS);
                return t || n
            }
        };

    function getPiwikUrlForOverlay(e, t) {
        return t || (stringContains(e = content.toAbsoluteUrl(e), "?") && (n = e.indexOf("?"), e = e.slice(0, n)), stringEndsWith(e, "ppms.php") ? e = removeCharactersFromEndOfString(e, "ppms.php".length) : stringEndsWith(e, ".php") && (i = e.lastIndexOf("/"), e = e.slice(0, i + 1)), stringEndsWith(e, "/js/") && (e = removeCharactersFromEndOfString(e, "js/".length)), e);
        var n, i
    }

    function isOverlaySession(e) {
        var t, n, i, r = "Piwik_Overlay",
            o = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$").exec(documentAlias.referrer);
        o && (t = o[2], n = o[3], (i = o[4]) ? 0 === i.indexOf("&segment=") && (i = i.substr("&segment=".length)) : i = "", windowAlias.name = r + "###" + t + "###" + n + "###" + i);
        var a = windowAlias.name.split("###");
        return 4 === a.length && a[0] === r
    }

    function injectOverlayScripts(e, t, n) {
        var i = windowAlias.name.split("###"),
            r = i[1],
            o = i[2],
            a = i[3],
            s = getPiwikUrlForOverlay(e, t);
        loadScript(s + "plugins/Overlay/client/client.js?v=1", function() {
            Piwik_Overlay_Client.initialize(s, n, r, o, a)
        })
    }

    function Tracker(trackerUrl, siteId) {
        var registeredHooks = {},
            trackerInstance = this,
            locationArray = urlFixup(documentAlias.domain, windowAlias.location.href, getReferrer()),
            domainAlias = domainFixup(locationArray[0]),
            locationHrefAlias = safeDecodeWrapper(locationArray[1]),
            configReferrerUrl = safeDecodeWrapper(locationArray[2]),
            enableJSErrorTracking = !1,
            defaultRequestMethod = "GET",
            configRequestMethod = defaultRequestMethod,
            defaultRequestContentType = "application/x-www-form-urlencoded; charset=UTF-8",
            configRequestContentType = defaultRequestContentType,
            configTrackerUrl = trackerUrl || "",
            configApiUrl = "",
            configAppendToTrackingUrl = "",
            configTrackerSiteId = siteId || "",
            configUserIsAnonymous = !1,
            lastPageViewWasAnonymous = null,
            lastPageViewHadCookie = null,
            configUserId = "",
            visitorUUID = "",
            configUpdateTimingDataOnPageLoadSampling = 5,
            configCustomUrl, configTitle = "",
            configDownloadExtensions = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
            configHostsAlias = [domainAlias],
            configIgnoreClasses = [],
            configDownloadClasses = [],
            configLinkClasses = [],
            configTrackerPause = 500,
            maxHeartBeatDelay = 3e5,
            maxHeartBeatInactivity = 18e5,
            lastPageViewActivityTime = null,
            defaultHeartBeatDelay = 15e3,
            configHeartBeatDelay, heartBeatPingIfActivityAlias, configDiscardHashTag, configCustomData, configCampaignNameParameters = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
            configCampaignKeywordParameters = ["pk_kwd", "piwik_kwd", "utm_term"],
            configCookieNamePrefix = "_pk_",
            configVisitorIdUrlParameter = "pk_vid",
            configVisitorIdUrlParameterTimeoutInSeconds = 180,
            configCookieDomain, configCookiePath, configCookieIsSecure = !1,
            configCookiesDisabled = !1,
            configDoNotTrack, configCountPreRendered, configVisitorCookieTimeout = 339552e5,
            configSessionCookieTimeout = 18e5,
            configReferralCookieTimeout = 15768e6,
            configPerformanceTrackingEnabled = !0,
            configPerformanceGenerationTime = 0,
            configStoreCustomVariablesInCookie = !1,
            customVariables = !1,
            configCustomRequestContentProcessing, customVariablesPage = {},
            customVariablesEvent = {},
            customDimensions = {},
            customDimensionsEncoded = {},
            customVariableMaximumLength = 200,
            ecommerceItems = {},
            browserFeatures = {},
            trackedContentImpressions = [],
            isTrackOnlyVisibleContentEnabled = !1,
            timeNextTrackingRequestCanBeExecutedImmediately = !1,
            linkTrackingInstalled = !1,
            linkTrackingEnabled = !1,
            crossDomainTrackingEnabled = !1,
            crossDomainTrackingLinkDecorator = function(e, t, n) {
                var i = removeUrlParameter(e, n);
                return 0 < i.indexOf("?") ? i += "&" : i += "?", addUrlParameter(i, n, t)
            },
            crossDomainTrackingLinkVisitorIdGetter = getUrlParameter,
            heartBeatSetUp = !1,
            isWindowInFocus = !0,
            lastTrackerRequestTime = null,
            heartBeatTimeout, lastButton, lastTarget, hash = sha1,
            domainHash, configIdPageView, numTrackedPageviews = 0,
            javaScriptErrors = [],
            configCookiesToDelete = ["id", "ses", "cvar"];
        try {
            configTitle = documentAlias.title
        } catch (e) {
            configTitle = ""
        }

        function isPpmsWebStorageEnabled() {
            return windowAlias && windowAlias.sevenTag && windowAlias.sevenTag.$webStorage
        }

        function setCookie(e, t, n, i, r, o) {
            var a, s;
            configCookiesDisabled || (n && (a = new Date).setTime(a.getTime() + n), isPpmsWebStorageEnabled() ? (s = {
                path: i || "/",
                secure: !!o,
                expires: n ? a : "",
                domain: r || "",
                sameSite: "lax"
            }, "number" == typeof n && n <= 0 ? windowAlias.sevenTag.$webStorage.remove(e) : windowAlias.sevenTag.$webStorage.set(e, t, s)) : documentAlias.cookie = e + "=" + encodeWrapper(t) + (n ? ";expires=" + a.toGMTString() : "") + ";path=" + (i || "/") + (r ? ";domain=" + r : "") + (o ? ";secure" : "") + ";SameSite=Lax")
        }

        function getCookie(e) {
            return !configCookiesDisabled && (isPpmsWebStorageEnabled() ? windowAlias.sevenTag.$webStorage.get(e) : (t = new RegExp("(^|;)[ ]*" + e + "=([^;]*)").exec(documentAlias.cookie)) ? decodeWrapper(t[2]) : 0) || 0;
            var t
        }

        function purify(e) {
            var t;
            return e = removeUrlParameter(e, configVisitorIdUrlParameter), configDiscardHashTag ? (t = new RegExp("#.*"), e.replace(t, "")) : e
        }

        function resolveRelativeReference(e, t) {
            var n;
            return getProtocolScheme(t) ? t : "/" === t.slice(0, 1) ? getProtocolScheme(e) + "://" + getHostName(e) + t : (0 <= (n = (e = purify(e)).indexOf("?")) && (e = e.slice(0, n)), (n = e.lastIndexOf("/")) !== e.length - 1 && (e = e.slice(0, n + 1)), e + t)
        }

        function isSameHost(e, t) {
            var n;
            if ((e = String(e).toLowerCase()) === (t = String(t).toLowerCase())) return 1;
            if ("." === t.slice(0, 1)) {
                if (e === t.slice(1)) return 1;
                if (0 < (n = e.length - t.length) && e.slice(n) === t) return 1
            }
        }

        function getPathName(e) {
            var t = document.createElement("a");
            return 0 !== e.indexOf("//") && 0 !== e.indexOf("http") && (0 === e.indexOf("*") && (e = e.substr(1)), 0 === e.indexOf(".") && (e = e.substr(1)), e = "http://" + e), t.href = content.toAbsoluteUrl(e), t.pathname ? t.pathname : ""
        }

        function isSitePath(e, t) {
            stringStartsWith(t, "/") || (t = "/" + t), stringStartsWith(e, "/") || (e = "/" + e);
            var n = "/" === t || "/*" === t;
            return n || (e === t || (t = String(t).toLowerCase(), e = String(e).toLowerCase(), stringEndsWith(t, "*") ? !(t = t.slice(0, -1)) || "/" === t ? 1 : e === t || 0 === e.indexOf(t) : (stringEndsWith(e, "/") || (e += "/"), stringEndsWith(t, "/") || (t += "/"), 0 === e.indexOf(t))))
        }

        function isSiteHostPath(e, t) {
            for (var n, i, r = 0; r < configHostsAlias.length; r++)
                if (n = domainFixup(configHostsAlias[r]), i = getPathName(configHostsAlias[r]), isSameHost(e, n) && isSitePath(t, i)) return !0;
            return !1
        }

        function isSiteHostName(e) {
            for (var t, n, i = 0; i < configHostsAlias.length; i++) {
                if (e === (t = domainFixup(configHostsAlias[i].toLowerCase()))) return 1;
                if ("." === t.slice(0, 1)) {
                    if (e === t.slice(1)) return 1;
                    if (0 < (n = e.length - t.length) && e.slice(n) === t) return 1
                }
            }
        }

        function getImage(e, t) {
            var n = new Image(1, 1);
            n.onload = function() {
                iterator = 0, "function" == typeof t && t()
            }, e = e.replace("send_image=0", "send_image=1"), n.src = configTrackerUrl + (configTrackerUrl.indexOf("?") < 0 ? "?" : "&") + e
        }

        function sendXmlHttpRequest(t, n, i) {
            isDefined(i) && null !== i || (i = !0);
            try {
                var e = windowAlias.XMLHttpRequest ? new windowAlias.XMLHttpRequest : windowAlias.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                e.open("POST", configTrackerUrl, !0), e.onreadystatechange = function() {
                    4 !== this.readyState || 200 <= this.status && this.status < 300 || !i ? 4 === this.readyState && "function" == typeof n && n() : getImage(t, n)
                }, e.setRequestHeader("Content-Type", configRequestContentType), e.send(t)
            } catch (e) {
                i && getImage(t, n)
            }
        }

        function setExpireDateTime(e) {
            var t = (new Date).getTime() + e;
            (!expireDateTime || expireDateTime < t) && (expireDateTime = t)
        }

        function shouldSendHeartBeat() {
            return !1 === lastPageViewWasAnonymous || !0 === lastPageViewHadCookie
        }

        function heartBeatUp(e) {
            !heartBeatTimeout && configHeartBeatDelay && shouldSendHeartBeat() && (heartBeatTimeout = setTimeout(function() {
                configHeartBeatDelay = Math.min(2 * configHeartBeatDelay, maxHeartBeatDelay), heartBeatTimeout = null, isWindowInFocus ? heartBeatPingIfActivityAlias() : heartBeatUp(configHeartBeatDelay)
            }, e || configHeartBeatDelay))
        }

        function heartBeatDown() {
            heartBeatTimeout && (clearTimeout(heartBeatTimeout), heartBeatTimeout = null)
        }

        function heartBeatOnFocus() {
            var e = !isWindowInFocus;
            isWindowInFocus = !0, e && shouldSendHeartBeat() && heartBeatPingIfActivityAlias()
        }

        function heartBeatOnBlur() {
            isWindowInFocus = !1, shouldSendHeartBeat() && heartBeatPingIfActivityAlias({
                blurHeartbeat: !0
            }), heartBeatDown()
        }

        function setUpHeartBeat() {
            !heartBeatSetUp && configHeartBeatDelay && (heartBeatSetUp = !0, addEventListener(windowAlias, "focus", heartBeatOnFocus), addEventListener(windowAlias, "blur", heartBeatOnBlur), heartBeatUp())
        }

        function makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(e, t) {
            var n = (new Date).getTime();
            if (lastTrackerRequestTime = n, timeNextTrackingRequestCanBeExecutedImmediately && n < timeNextTrackingRequestCanBeExecutedImmediately) {
                var i = timeNextTrackingRequestCanBeExecutedImmediately - n;
                return setTimeout(e, i), t && setExpireDateTime(50 + i), void(timeNextTrackingRequestCanBeExecutedImmediately += 50)
            }!1 === timeNextTrackingRequestCanBeExecutedImmediately && (timeNextTrackingRequestCanBeExecutedImmediately = n + 800), e()
        }

        function sendRequest(t, n, i, e, r, o) {
            var a, s, c, u;
            o = !isDefined(o) || o, !configDoNotTrack && t && (a = r || configRequestMethod, s = !i && navigatorAlias.sendBeacon && windowAlias.Blob && t.length <= 65536, c = !0, u = function() {
                var e;
                "beacon" === a && s ? (e = new windowAlias.Blob([String(t)], {
                    type: configRequestContentType
                }), navigatorAlias.sendBeacon(configTrackerUrl + "?" + t, e) ? c = !1 : sendXmlHttpRequest(t, i)) : ("POST" === a || 2e3 < String(t).length ? sendXmlHttpRequest : getImage)(t, i), c && setExpireDateTime(n)
            }, e ? u() : makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(u, c)), o && (heartBeatSetUp ? heartBeatUp : setUpHeartBeat)()
        }

        function canSendBulkRequest(e) {
            return !configDoNotTrack && (e && e.length)
        }

        function sendBulkRequest(e, t) {
            var n;
            canSendBulkRequest(e) && (n = '{"requests":["?' + e.join('","?') + '"]}', makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(function() {
                sendXmlHttpRequest(n, null, !1), "beacon" !== configRequestMethod && setExpireDateTime(t)
            }, !1))
        }

        function getCookieName(e) {
            return configCookieNamePrefix + e + "." + configTrackerSiteId + "." + domainHash
        }

        function hasCookies() {
            if (configCookiesDisabled) return "0";
            if (isDefined(navigatorAlias.cookieEnabled)) return navigatorAlias.cookieEnabled ? "1" : "0";
            var e = getCookieName("testcookie");
            return setCookie(e, "1"), "1" === getCookie(e) ? "1" : "0"
        }

        function updateDomainHash() {
            domainHash = hash((configCookieDomain || domainAlias) + (configCookiePath || "/")).slice(0, 4)
        }

        function getCustomVariablesFromCookie() {
            var e = getCookie(getCookieName("cvar"));
            return e.length && isObject(e = JSON.parse(e)) ? e : {}
        }

        function loadCustomVariables() {
            !1 === customVariables && (customVariables = getCustomVariablesFromCookie())
        }

        function generateRandomUuid() {
            return hash((navigatorAlias.userAgent || "") + (navigatorAlias.platform || "") + JSON.stringify(browserFeatures) + (new Date).getTime() + Math.random()).slice(0, 16)
        }

        function generateBrowserSpecificId() {
            return hash((navigatorAlias.userAgent || "") + (navigatorAlias.platform || "") + JSON.stringify(browserFeatures)).slice(0, 6)
        }

        function getCurrentTimestampInSeconds() {
            return Math.floor((new Date).getTime() / 1e3)
        }

        function makeCrossDomainDeviceId() {
            var e = getCurrentTimestampInSeconds(),
                t = generateBrowserSpecificId();
            return String(e) + t
        }

        function isSameCrossDomainDevice(e) {
            e = String(e);
            var t = generateBrowserSpecificId(),
                n = t.length,
                i = e.substr(-1 * n, n),
                r = parseInt(e.substr(0, e.length - n), 10);
            if (r && i && i === t) {
                var o = getCurrentTimestampInSeconds();
                if (configVisitorIdUrlParameterTimeoutInSeconds <= 0) return 1;
                if (r <= o && o <= r + configVisitorIdUrlParameterTimeoutInSeconds) return 1
            }
        }

        function getVisitorIdFromUrl(e) {
            if (!crossDomainTrackingEnabled) return "";
            var t = crossDomainTrackingLinkVisitorIdGetter(e, configVisitorIdUrlParameter);
            if (!t) return "";
            t = String(t);
            var n = new RegExp("^[a-zA-Z0-9]+$");
            if (16 === t.length && n.test(t)) return t;
            if (32 === t.length && n.test(t) && isSameCrossDomainDevice(t.substr(16, 32))) return t.substr(0, 16);
            return ""
        }

        function loadVisitorIdCookie() {
            visitorUUID = visitorUUID || getVisitorIdFromUrl(locationHrefAlias);
            var e, t = new Date,
                n = Math.round(t.getTime() / 1e3),
                i = getCookie(getCookieName("id"));
            return i ? ((e = i.split(".")).length < 6 && (e[1] = n, e[2] = 0, e[3] = n, e[4] = "", e[5] = ""), e.unshift("0"), visitorUUID.length && (e[1] = visitorUUID), e) : e = ["1", visitorUUID.length ? visitorUUID : "0" === hasCookies() ? "" : generateRandomUuid(), n, 0, n, "", ""]
        }

        function getValuesFromVisitorIdCookie() {
            var e = loadVisitorIdCookie(),
                t = e[0],
                n = e[1],
                i = e[2],
                r = e[3],
                o = e[4],
                a = e[5];
            return isDefined(e[6]) || (e[6] = ""), {
                newVisitor: t,
                uuid: n,
                createTs: i,
                visitCount: r,
                currentVisitTs: o,
                lastVisitTs: a,
                lastEcommerceOrderTs: e[6]
            }
        }

        function setVisitorIdCookie(e) {
            var t, n, i;
            configTrackerSiteId && (t = new Date, n = Math.round(t.getTime() / 1e3), isDefined(e) || (e = getValuesFromVisitorIdCookie()), i = e.uuid + "." + e.createTs + "." + e.visitCount + "." + n + "." + e.lastVisitTs + "." + e.lastEcommerceOrderTs, setCookie(getCookieName("id"), i, configVisitorCookieTimeout, configCookiePath, configCookieDomain, configCookieIsSecure))
        }

        function deleteCookie(e, t, n) {
            setCookie(e, "", -86400, t, n)
        }

        function isPossibleToSetCookieOnDomain(e) {
            var t = "testvalue";
            return setCookie("test", t, 1e4, null, e), getCookie("test") === t ? (deleteCookie("test", null, e), 1) : void 0
        }

        function deleteCookies() {
            var e, t, n = configCookiesDisabled;
            for (configCookiesDisabled = !1, e = 0; e < configCookiesToDelete.length; e++) 0 !== getCookie(t = getCookieName(configCookiesToDelete[e])) && deleteCookie(t, configCookiePath, configCookieDomain);
            configCookiesDisabled = n
        }

        function setSiteId(e) {
            configTrackerSiteId = e, setVisitorIdCookie()
        }

        function sortObjectByKeys(e) {
            if (e && isObject(e)) {
                var t, n = [];
                for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                var i = {};
                n.sort();
                for (var r = n.length, o = 0; o < r; o++) i[n[o]] = e[n[o]];
                return i
            }
        }

        function setSessionCookie() {
            setCookie(getCookieName("ses"), "*", configSessionCookieTimeout, configCookiePath, configCookieDomain, configCookieIsSecure)
        }

        function generateUniqueId() {
            for (var e = "", t = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = t.length, i = 0; i < 6; i++) e += t.charAt(Math.floor(Math.random() * n));
            return e
        }

        function getRequest(e, t, n, i) {
            var r, o = new Date,
                a = Math.round(o.getTime() / 1e3),
                s = customVariables,
                c = getCookieName("ses"),
                u = getCookieName("cvar"),
                l = getCookie(c),
                d = configCustomUrl || locationHrefAlias;
            if (configCookiesDisabled && deleteCookies(), configDoNotTrack) return "";
            var f = getValuesFromVisitorIdCookie();
            isDefined(i) || (i = "");
            var g, m = documentAlias.characterSet || documentAlias.charset;
            for (r in m && "utf-8" !== m.toLowerCase() || (m = null), l || (g = configSessionCookieTimeout / 1e3, (!f.lastVisitTs || a - f.lastVisitTs > g) && (f.visitCount++, f.lastVisitTs = f.currentVisitTs)), stringContains(e, "action_name=") && (lastPageViewWasAnonymous = configUserIsAnonymous, lastPageViewHadCookie = Boolean(f.uuid), lastPageViewActivityTime = new Date), e += "&idsite=" + configTrackerSiteId + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + o.getHours() + "&m=" + o.getMinutes() + "&s=" + o.getSeconds() + "&url=" + encodeWrapper(purify(d)) + (configReferrerUrl.length ? "&urlref=" + encodeWrapper(purify(configReferrerUrl)) : "") + (configUserId && configUserId.length ? "&uid=" + encodeWrapper(configUserId) : "") + (configUserIsAnonymous ? "&uia=1" : "") + (f.uuid ? "&_id=" + f.uuid : "") + "&_idts=" + f.createTs + "&_idvc=" + f.visitCount + "&_idn=" + f.newVisitor + "&_viewts=" + f.lastVisitTs + (String(f.lastEcommerceOrderTs).length ? "&_ects=" + f.lastEcommerceOrderTs : "") + (m ? "&cs=" + encodeWrapper(m) : "") + "&send_image=0", browserFeatures) Object.prototype.hasOwnProperty.call(browserFeatures, r) && (e += "&" + r + "=" + browserFeatures[r]);
            var h, p, k = [];
            if (t)
                for (r in t) {
                    Object.prototype.hasOwnProperty.call(t, r) && /^dimension\d+$/.test(r) && (h = r.replace("dimension", ""), k.push(parseInt(h, 10)), k.push(String(h)), e += "&" + r + "=" + t[r], delete t[r])
                }
            for (r in t && isObjectEmpty(t) && (t = null), customDimensions) {
                Object.prototype.hasOwnProperty.call(customDimensions, r) && -1 === indexOfArray(k, r) && (p = new RegExp("[^\0-]"), (-1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/")) && null !== customDimensions[r].match(p) ? e += "&dimension" + r + "=" + encodeURIComponent(customDimensions[r]) : e += "&dimension" + r + "=" + customDimensions[r])
            }
            for (r in customDimensionsEncoded) Object.prototype.hasOwnProperty.call(customDimensionsEncoded, r) && -1 === indexOfArray(k, r) && (e += "&dimension" + encodeURIComponent(r) + "=" + encodeURIComponent(customDimensionsEncoded[r]));

            function T(e, t) {
                var n = JSON.stringify(e);
                return 2 < n.length ? "&" + t + "=" + encodeWrapper(n) : ""
            }
            t ? e += "&data=" + encodeWrapper(JSON.stringify(t)) : configCustomData && (e += "&data=" + encodeWrapper(JSON.stringify(configCustomData)));
            var C, v, b, w, y, A = sortObjectByKeys(customVariablesPage),
                I = sortObjectByKeys(customVariablesEvent);
            if (e += T(A, "cvar"), e += T(I, "e_cvar"), customVariables) {
                for (r in e += T(customVariables, "_cvar"), s) Object.prototype.hasOwnProperty.call(s, r) && ("" !== customVariables[r][0] && "" !== customVariables[r][1] || delete customVariables[r]);
                configStoreCustomVariablesInCookie && setCookie(u, JSON.stringify(customVariables), configSessionCookieTimeout, configCookiePath, configCookieDomain, configCookieIsSecure)
            }

            function S(e, t, n) {
                return "&" + e + "=" + (r = 0, (o = n) < (i = t) ? o : i < r ? r : i);
                var i, r, o
            }
            return configPerformanceTrackingEnabled && (configPerformanceGenerationTime ? e += "&gt_ms=" + configPerformanceGenerationTime : performanceAlias && performanceAlias.timing && performanceAlias.timing.requestStart && performanceAlias.timing.responseEnd && (e += "&gt_ms=" + (performanceAlias.timing.responseEnd - performanceAlias.timing.requestStart))), ("log" === (y = n) || "ping" === y) && performanceAlias.timing && performanceAlias.timing.navigationStart && 0 !== performanceAlias.timing.navigationStart && (e += (C = performanceAlias.timing, v = 65535, b = 16777215, w = "", C.loadEventEnd && 0 !== C.loadEventEnd ? (C.unloadEventStart && 0 !== C.unloadEventStart && (w += S("t_us", C.unloadEventStart - C.navigationStart, v)), C.unloadEventEnd && 0 !== C.unloadEventEnd && (w += S("t_ue", C.unloadEventEnd - C.navigationStart, v)), C.redirectStart && 0 !== C.redirectStart && (w += S("t_rs", C.redirectStart - C.navigationStart, v)), C.redirectEnd && 0 !== C.redirectEnd && (w += S("t_re", C.redirectEnd - C.navigationStart, v)), C.secureConnectionStart && 0 !== C.secureConnectionStart && (w += S("t_ss", C.secureConnectionStart - C.navigationStart, v)), C.fetchStart && 0 !== C.fetchStart && (w += S("t_fs", C.fetchStart - C.navigationStart, v)), C.domainLookupStart && 0 !== C.domainLookupStart && (w += S("t_ds", C.domainLookupStart - C.navigationStart, v)), C.connectStart && 0 !== C.connectStart && (w += S("t_cs", C.connectStart - C.navigationStart, v)), C.connectEnd && 0 !== C.connectEnd && (w += S("t_ce", C.connectEnd - C.navigationStart, v)), C.requestStart && 0 !== C.requestStart && (w += S("t_qs", C.requestStart - C.navigationStart, v)), C.responseStart && 0 !== C.responseStart && (w += S("t_as", C.responseStart - C.navigationStart, v)), C.responseEnd && 0 !== C.responseEnd && (w += S("t_ae", C.responseEnd - C.navigationStart, v)), C.domLoading && 0 !== C.domLoading && (w += S("t_dl", C.domLoading - C.navigationStart, v)), C.domInteractive && 0 !== C.domInteractive && (w += S("t_di", C.domInteractive - C.navigationStart, b)), C.domContentLoadedEventStart && 0 !== C.domContentLoadedEventStart && (w += S("t_ls", C.domContentLoadedEventStart - C.navigationStart, b)), C.domContentLoadedEventEnd && 0 !== C.domContentLoadedEventEnd && (w += S("t_le", C.domContentLoadedEventEnd - C.navigationStart, b)), C.domComplete && 0 !== C.domComplete && (w += S("t_dc", C.domComplete - C.navigationStart, b)), C.loadEventEnd && 0 !== C.loadEventEnd && (w += S("t_ee", C.loadEventEnd - C.navigationStart, b)), w) : "")), configIdPageView && (e += "&pv_id=" + configIdPageView), f.lastEcommerceOrderTs = isDefined(i) && String(i).length ? i : f.lastEcommerceOrderTs, setVisitorIdCookie(f), setSessionCookie(), e += executePluginMethod(n, {
                tracker: trackerInstance,
                request: e
            }), configAppendToTrackingUrl.length && (e += "&" + configAppendToTrackingUrl), isFunction(configCustomRequestContentProcessing) && (e = configCustomRequestContentProcessing(e)), e
        }

        function logEcommerce(e, t, n, i, r, o) {
            var a, s, c = "idgoal=0",
                u = new Date,
                l = [],
                d = String(e).length;
            if (d && (c += "&ec_id=" + encodeWrapper(e), a = Math.round(u.getTime() / 1e3)), c += "&revenue=" + t, String(n).length && (c += "&ec_st=" + n), String(i).length && (c += "&ec_tx=" + i), String(r).length && (c += "&ec_sh=" + r), String(o).length && (c += "&ec_dt=" + o), ecommerceItems) {
                for (s in ecommerceItems) Object.prototype.hasOwnProperty.call(ecommerceItems, s) && (isDefined(ecommerceItems[s][1]) || (ecommerceItems[s][1] = ""), isDefined(ecommerceItems[s][2]) || (ecommerceItems[s][2] = ""), isDefined(ecommerceItems[s][3]) && 0 !== String(ecommerceItems[s][3]).length || (ecommerceItems[s][3] = 0), isDefined(ecommerceItems[s][4]) && 0 !== String(ecommerceItems[s][4]).length || (ecommerceItems[s][4] = 1), l.push(ecommerceItems[s]));
                c += "&ec_items=" + encodeWrapper(JSON.stringify(l))
            }
            sendRequest(c = getRequest(c, configCustomData, "ecommerce", a), configTrackerPause), d && (ecommerceItems = {})
        }

        function logEcommerceOrder(e, t, n, i, r, o) {
            String(e).length && isDefined(t) && logEcommerce(e, t, n, i, r, o)
        }

        function logEcommerceCartUpdate(e) {
            isDefined(e) && logEcommerce("", e, "", "", "", "")
        }

        function logPageView(e, t, n) {
            configIdPageView = generateUniqueId(), sendRequest(getRequest("action_name=" + encodeWrapper(titleFixup(e || configTitle)), t, "log"), configTrackerPause, n)
        }

        function getClassesRegExp(e, t) {
            var n, i = "(^| )(piwik[_-]" + t;
            if (e)
                for (n = 0; n < e.length; n++) i += "|" + e[n];
            return i += ")( |$)", new RegExp(i)
        }

        function startsUrlWithTrackerUrl(e) {
            return configTrackerUrl && e && 0 === String(e).indexOf(configTrackerUrl)
        }

        function getLinkType(e, t, n, i) {
            if (startsUrlWithTrackerUrl(t)) return 0;
            var r = getClassesRegExp(configDownloadClasses, "download"),
                o = getClassesRegExp(configLinkClasses, "link"),
                a = new RegExp("\\.(" + configDownloadExtensions.join("|") + ")([?&#]|$)", "i");
            return o.test(e) ? "link" : i || r.test(e) || a.test(t) ? "download" : n ? 0 : "link"
        }

        function getSourceElement(e) {
            for (var t = e.parentNode; null !== t && isDefined(t) && !query.isLinkElement(e);) t = (e = t).parentNode;
            return e
        }

        function getLinkIfShouldBeProcessed(e) {
            if ((e = getSourceElement(e), query.hasNodeAttribute(e, "href")) && (isDefined(e.href) && !startsUrlWithTrackerUrl(query.getAttributeValueFromNode(e, "href")))) {
                var t = e.pathname || getPathName(e.href),
                    n = e.hostname || getHostName(e.href),
                    i = n.toLowerCase(),
                    r = e.href.replace(n, i);
                if (!new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i").test(r)) {
                    var o = getLinkType(e.className, r, isSiteHostPath(i, t), query.hasNodeAttribute(e, "download"));
                    if (o) return {
                        type: o,
                        href: r
                    }
                }
            }
        }

        function buildContentInteractionRequest(e, t, n, i) {
            var r = content.buildInteractionRequestParams(e, t, n, i);
            if (r) return getRequest(r, null, "contentInteraction")
        }

        function buildContentInteractionTrackingRedirectUrl(e, t, n, i, r) {
            if (isDefined(e)) {
                if (startsUrlWithTrackerUrl(e)) return e;
                var o = content.toAbsoluteUrl(e),
                    a = "redirecturl=" + encodeWrapper(o) + "&";
                a += buildContentInteractionRequest(t, n, i, r || e);
                var s = "&";
                return configTrackerUrl.indexOf("?") < 0 && (s = "?"), configTrackerUrl + s + a
            }
        }

        function isNodeAuthorizedToTriggerInteraction(e, t) {
            if (!e || !t) return !1;
            var n = content.findTargetNode(e);
            return !content.shouldIgnoreInteraction(n) && !((n = content.findTargetNodeNoDefault(e)) && !containsNodeElement(n, t))
        }

        function getContentInteractionToRequestIfPossible(e, t, n) {
            if (e) {
                var i = content.findParentContentNode(e);
                if (i && isNodeAuthorizedToTriggerInteraction(i, e)) {
                    var r = content.buildContentBlock(i);
                    if (r) return !r.target && n && (r.target = n), content.buildInteractionRequestParams(t, r.name, r.piece, r.target)
                }
            }
        }

        function wasContentImpressionAlreadyTracked(e) {
            if (!trackedContentImpressions || !trackedContentImpressions.length) return !1;
            for (var t, n = 0; n < trackedContentImpressions.length; n++)
                if ((t = trackedContentImpressions[n]) && t.name === e.name && t.piece === e.piece && t.target === e.target) return !0;
            return !1
        }

        function replaceHrefIfInternalLink(e) {
            if (!e) return !1;
            var t = content.findTargetNode(e);
            if (!t || content.shouldIgnoreInteraction(t)) return !1;
            var n = getLinkIfShouldBeProcessed(t);
            if (linkTrackingEnabled && n && n.type) return !1;
            if (query.isLinkElement(t) && query.hasNodeAttributeWithValue(t, "href")) {
                var i = String(query.getAttributeValueFromNode(t, "href"));
                if (0 === i.indexOf("#")) return !1;
                if (startsUrlWithTrackerUrl(i)) return !0;
                if (!content.isUrlToCurrentDomain(i)) return !1;
                var r = content.buildContentBlock(e);
                if (!r) return;
                var o = r.name,
                    a = r.piece,
                    s = r.target;
                query.hasNodeAttributeWithValue(t, content.CONTENT_TARGET_ATTR) && !t.wasContentTargetAttrReplaced || (t.wasContentTargetAttrReplaced = !0, s = content.toAbsoluteUrl(i), query.setAnyAttribute(t, content.CONTENT_TARGET_ATTR, s));
                var c = buildContentInteractionTrackingRedirectUrl(i, "click", o, a, s);
                return content.setHrefAttribute(t, c), !0
            }
            return !1
        }

        function replaceHrefsIfInternalLink(e) {
            if (e && e.length)
                for (var t = 0; t < e.length; t++) replaceHrefIfInternalLink(e[t])
        }

        function trackContentImpressionClickInteraction(a) {
            return function(e) {
                if (a) {
                    var t, n = content.findParentContentNode(a);
                    if (e && (t = e.target || e.srcElement), isNodeAuthorizedToTriggerInteraction(n, t = t || a)) {
                        "beacon" !== configRequestMethod && setExpireDateTime(configTrackerPause), query.isLinkElement(a) && query.hasNodeAttributeWithValue(a, "href") && query.hasNodeAttributeWithValue(a, content.CONTENT_TARGET_ATTR) && !startsUrlWithTrackerUrl(query.getAttributeValueFromNode(a, "href")) && a.wasContentTargetAttrReplaced && query.setAnyAttribute(a, content.CONTENT_TARGET_ATTR, "");
                        var i = getLinkIfShouldBeProcessed(a);
                        if (linkTrackingInstalled && i && i.type) return i.type;
                        if (replaceHrefIfInternalLink(n)) return "href";
                        var r = content.buildContentBlock(n);
                        if (r) {
                            var o = buildContentInteractionRequest("click", r.name, r.piece, r.target);
                            return sendRequest(o, configTrackerPause), o
                        }
                    }
                }
            }
        }

        function setupInteractionsTracking(e) {
            if (e && e.length)
                for (var t, n = 0; n < e.length; n++)(t = content.findTargetNode(e[n])) && !t.contentInteractionTrackingSetupDone && (t.contentInteractionTrackingSetupDone = !0, addEventListener(t, "click", trackContentImpressionClickInteraction(t)))
        }

        function buildContentImpressionsRequests(e, t) {
            if (!e || !e.length) return [];
            for (var n, i = 0; i < e.length; i++) wasContentImpressionAlreadyTracked(e[i]) ? (e.splice(i, 1), i--) : trackedContentImpressions.push(e[i]);
            if (!e || !e.length) return [];
            replaceHrefsIfInternalLink(t), setupInteractionsTracking(t);
            var r = [];
            for (i = 0; i < e.length; i++)(n = getRequest(content.buildImpressionRequestParams(e[i].name, e[i].piece, e[i].target), void 0, "contentImpressions")) && r.push(n);
            return r
        }

        function getContentImpressionsRequestsFromNodes(e) {
            return buildContentImpressionsRequests(content.collectContent(e), e)
        }

        function getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(e) {
            if (!e || !e.length) return [];
            for (var t = 0; t < e.length; t++) content.isNodeVisible(e[t]) || (e.splice(t, 1), t--);
            return e && e.length ? getContentImpressionsRequestsFromNodes(e) : []
        }

        function buildContentImpressionRequest(e, t, n) {
            return getRequest(content.buildImpressionRequestParams(e, t, n), null, "contentImpression")
        }

        function buildContentInteractionRequestNode(e, t) {
            if (e) {
                var n = content.findParentContentNode(e),
                    i = content.buildContentBlock(n);
                if (i) return buildContentInteractionRequest(t = t || "Unknown", i.name, i.piece, i.target)
            }
        }

        function buildEventRequest(e, t, n, i) {
            return "e_c=" + encodeWrapper(e) + "&e_a=" + encodeWrapper(t) + (isDefined(n) ? "&e_n=" + encodeWrapper(n) : "") + (isDefined(i) ? "&e_v=" + encodeWrapper(i) : "")
        }

        function logEvent(e, t, n, i, r, o) {
            0 !== trim(String(e)).length && 0 !== trim(String(t)).length ? sendRequest(getRequest(buildEventRequest(e, t, n, i), r, "event"), configTrackerPause, o) : logConsoleError("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces")
        }

        function logSiteSearch(e, t, n, i) {
            sendRequest(getRequest("search=" + encodeWrapper(e) + (t ? "&search_cat=" + encodeWrapper(t) : "") + (isDefined(n) ? "&search_count=" + n : ""), i, "sitesearch"), configTrackerPause)
        }

        function logGoal(e, t, n) {
            sendRequest(getRequest("idgoal=" + e + (t ? "&revenue=" + t : ""), n, "goal"), configTrackerPause)
        }

        function logLink(e, t, n, i, r) {
            var o = t + "=" + encodeWrapper(purify(e)),
                a = getContentInteractionToRequestIfPossible(r, "click", e);
            a && (o += "&" + a), sendRequest(getRequest(o, n, "link"), configTrackerPause, i, !0, "beacon")
        }

        function prefixPropertyName(e, t) {
            return "" !== e ? e + t.charAt(0).toUpperCase() + t.slice(1) : t
        }

        function trackCallback(t) {
            var e, n, i, r = ["", "webkit", "ms", "moz"];
            if (!configCountPreRendered)
                for (n = 0; n < r.length; n++)
                    if (i = r[n], Object.prototype.hasOwnProperty.call(documentAlias, prefixPropertyName(i, "hidden"))) {
                        "prerender" === documentAlias[prefixPropertyName(i, "visibilityState")] && (e = !0);
                        break
                    }
            e ? addEventListener(documentAlias, i + "visibilitychange", function e() {
                documentAlias.removeEventListener(i + "visibilitychange", e, !1), t()
            }) : t()
        }

        function getCrossDomainVisitorId() {
            return getValuesFromVisitorIdCookie().uuid + makeCrossDomainDeviceId()
        }

        function replaceHrefForCrossDomainLink(e) {
            var t;
            e && (!query.hasNodeAttribute(e, "href") || (t = query.getAttributeValueFromNode(e, "href")) && !startsUrlWithTrackerUrl(t) && null !== (t = crossDomainTrackingLinkDecorator(t, getCrossDomainVisitorId(), configVisitorIdUrlParameter)) && query.setAnyAttribute(e, "href", t))
        }

        function isLinkToDifferentDomainButSamePiwikWebsite(e) {
            var t = query.getAttributeValueFromNode(e, "href");
            if (t && (0 === (t = String(t)).indexOf("//") || 0 === t.indexOf("http://") || 0 === t.indexOf("https://"))) {
                var n = e.pathname || getPathName(e.href),
                    i = (e.hostname || getHostName(e.href)).toLowerCase();
                return isSiteHostPath(i, n) && !isSameHost(domainAlias, domainFixup(i))
            }
        }

        function processClick(e) {
            var t = getLinkIfShouldBeProcessed(e);
            if (t && t.type) return t.href = safeDecodeWrapper(t.href), void logLink(t.href, t.type, void 0, null, e);
            crossDomainTrackingEnabled && isLinkToDifferentDomainButSamePiwikWebsite(e = getSourceElement(e)) && replaceHrefForCrossDomainLink(e)
        }

        function isIE8orOlder() {
            return documentAlias.all && !documentAlias.addEventListener
        }

        function getKeyCodeFromEvent(e) {
            var t = e.which,
                n = typeof e.button;
            return t || "undefined" == n || (isIE8orOlder() ? 1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2) : 0 === e.button || "0" === e.button ? t = 1 : 1 & e.button ? t = 2 : 2 & e.button && (t = 3)), t
        }

        function getNameOfClickedButton(e) {
            switch (getKeyCodeFromEvent(e)) {
                case 1:
                    return "left";
                case 2:
                    return "middle";
                case 3:
                    return "right"
            }
        }

        function getTargetElementFromEvent(e) {
            return e.target || e.srcElement
        }

        function clickHandler(i) {
            return function(e) {
                var t = getNameOfClickedButton(e = e || windowAlias.event),
                    n = getTargetElementFromEvent(e);
                "click" === e.type ? n && !(i && "middle" === t ? !0 : !1) && processClick(n) : "mousedown" === e.type ? "middle" === t && n ? (lastButton = t, lastTarget = n) : lastButton = lastTarget = null : "mouseup" === e.type ? (t === lastButton && n === lastTarget && processClick(n), lastButton = lastTarget = null) : "contextmenu" === e.type && processClick(n)
            }
        }

        function addClickListener(e, t) {
            "undefined" == typeof t && (t = !0), addEventListener(e, "click", clickHandler(t), !1), t && (addEventListener(e, "mouseup", clickHandler(t), !1), addEventListener(e, "mousedown", clickHandler(t), !1), addEventListener(e, "contextmenu", clickHandler(t), !1))
        }

        function addClickListeners(e, t) {
            linkTrackingInstalled = !0;
            var n, i = getClassesRegExp(configIgnoreClasses, "ignore"),
                r = documentAlias.links,
                o = null;
            if (r)
                for (n = 0; n < r.length; n++) o = r[n], i.test(o.className) || ("undefined" == typeof o.piwikTrackers && (o.piwikTrackers = []), -1 === indexOfArray(o.piwikTrackers, t) && (o.piwikTrackers.push(t), addClickListener(o, e)))
        }

        function enableTrackOnlyVisibleContent(e, t, n) {
            if (isTrackOnlyVisibleContentEnabled) return !0;
            var i, r, o = !(isTrackOnlyVisibleContentEnabled = !0);

            function a() {
                o = !0
            }
            trackCallbackOnLoad(function() {
                if (e) {
                    for (i = ["scroll", "resize"], r = 0; r < i.length; r++) documentAlias.addEventListener ? documentAlias.addEventListener(i[r], a) : windowAlias.attachEvent("on" + i[r], a);
                    ! function e(t) {
                        setTimeout(function() {
                            isTrackOnlyVisibleContentEnabled && (o && (o = !1, n.trackVisibleContentImpressions()), e(t))
                        }, t)
                    }(100)
                }
                t && 0 < t && function e(t) {
                    setTimeout(function() {
                        isTrackOnlyVisibleContentEnabled && (o = !1, n.trackVisibleContentImpressions(), e(t))
                    }, t)
                }(t = parseInt(t, 10))
            })
        }

        function detectBrowserFeatures() {
            var e, t, n = {
                pdf: "application/pdf",
                qt: "video/quicktime",
                realp: "audio/x-pn-realaudio-plugin",
                wma: "application/x-mplayer2",
                dir: "application/x-director",
                fla: "application/x-shockwave-flash",
                java: "application/x-java-vm",
                gears: "application/x-googlegears",
                ag: "application/x-silverlight"
            };
            if (!new RegExp("MSIE").test(navigatorAlias.userAgent)) {
                if (navigatorAlias.mimeTypes && navigatorAlias.mimeTypes.length)
                    for (e in n) Object.prototype.hasOwnProperty.call(n, e) && (t = navigatorAlias.mimeTypes[n[e]], browserFeatures[e] = t && t.enabledPlugin ? "1" : "0");
                "unknown" != typeof navigator.javaEnabled && isDefined(navigatorAlias.javaEnabled) && navigatorAlias.javaEnabled() && (browserFeatures.java = "1"), isFunction(windowAlias.GearsFactory) && (browserFeatures.gears = "1"), browserFeatures.cookie = hasCookies()
            }
            var i = parseInt(screenAlias.width, 10),
                r = parseInt(screenAlias.height, 10);
            browserFeatures.res = parseInt(i, 10) + "x" + parseInt(r, 10)
        }

        function registerHook(hookName, userHook) {
            var hookObj = null;
            if (isString(hookName) && !isDefined(registeredHooks[hookName]) && userHook) {
                if (isObject(userHook)) hookObj = userHook;
                else if (isString(userHook)) try {
                    eval("hookObj =" + userHook)
                } catch (e) {}
                registeredHooks[hookName] = hookObj
            }
            return hookObj
        }
        heartBeatPingIfActivityAlias = function(e) {
            var t = e || {},
                n = !1,
                i = new Date;
            null !== lastPageViewActivityTime && maxHeartBeatInactivity < i - lastPageViewActivityTime || (t.lastHeartbeat ? n = "2" : t.blurHeartbeat && (n = "3"), sendRequest(getRequest("ping=" + (n || "1"), null, "ping"), configTrackerPause, null, n, n ? "beacon" : null, !n))
        }, detectBrowserFeatures(), updateDomainHash(), executePluginMethod("run", null, registerHook), this.hook = registeredHooks, this.getHook = function(e) {
            return registeredHooks[e]
        }, this.getQuery = function() {
            return query
        }, this.getContent = function() {
            return content
        }, this.buildContentImpressionRequest = buildContentImpressionRequest, this.buildContentInteractionRequest = buildContentInteractionRequest, this.buildContentInteractionRequestNode = buildContentInteractionRequestNode, this.buildContentInteractionTrackingRedirectUrl = buildContentInteractionTrackingRedirectUrl, this.getContentImpressionsRequestsFromNodes = getContentImpressionsRequestsFromNodes, this.getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet = getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet, this.trackCallbackOnLoad = trackCallbackOnLoad, this.trackCallbackOnReady = trackCallbackOnReady, this.buildContentImpressionsRequests = buildContentImpressionsRequests, this.wasContentImpressionAlreadyTracked = wasContentImpressionAlreadyTracked, this.appendContentInteractionToRequestIfPossible = getContentInteractionToRequestIfPossible, this.setupInteractionsTracking = setupInteractionsTracking, this.trackContentImpressionClickInteraction = trackContentImpressionClickInteraction, this.internalIsNodeVisible = isVisible, this.isNodeAuthorizedToTriggerInteraction = isNodeAuthorizedToTriggerInteraction, this.replaceHrefIfInternalLink = replaceHrefIfInternalLink, this.getDomains = function() {
            return configHostsAlias
        }, this.getConfigIdPageView = function() {
            return configIdPageView
        }, this.getConfigDownloadExtensions = function() {
            return configDownloadExtensions
        }, this.enableTrackOnlyVisibleContent = function(e, t) {
            return enableTrackOnlyVisibleContent(e, t, this)
        }, this.clearTrackedContentImpressions = function() {
            trackedContentImpressions = []
        }, this.getTrackedContentImpressions = function() {
            return trackedContentImpressions
        }, this.clearEnableTrackOnlyVisibleContent = function() {
            isTrackOnlyVisibleContentEnabled = !1
        }, this.disableLinkTracking = function() {
            linkTrackingEnabled = linkTrackingInstalled = !1
        }, this.getConfigVisitorCookieTimeout = function() {
            return configVisitorCookieTimeout
        }, this.removeAllAsyncTrackersButFirst = function() {
            var e = asyncTrackers[0];
            asyncTrackers = [e]
        }, this.ping = function() {
            sendRequest(getRequest("ping=6", null, "ping"), configTrackerPause)
        }, this.setOptions = function(e) {
            var t = e || {};
            t.hasOwnProperty("defaultHeartBeatDelay") && (defaultHeartBeatDelay = t.defaultHeartBeatDelay)
        }, this.getVisitorId = function() {
            return getValuesFromVisitorIdCookie().uuid
        }, this.getVisitorInfo = function() {
            return loadVisitorIdCookie()
        }, this.setTrackerUrl = function(e) {
            configTrackerUrl = e
        }, this.getTrackerUrl = function() {
            return configTrackerUrl
        }, this.getPiwikUrl = function() {
            return getPiwikUrlForOverlay(this.getTrackerUrl(), configApiUrl)
        }, this.addTracker = function(e, t) {
            if (!t) throw new Error("A siteId must be given to add a new tracker");
            isDefined(e) && null !== e || (e = this.getTrackerUrl());
            var n = new Tracker(e, t);
            return asyncTrackers.push(n), n
        }, this.getSiteId = function() {
            return configTrackerSiteId
        }, this.setSiteId = function(e) {
            setSiteId(e)
        }, this.setVisitorIdCookie = function() {
            setVisitorIdCookie()
        }, this.resetUserId = function() {
            configUserId = ""
        }, this.setUserIsAnonymous = function(e) {
            configUserIsAnonymous = e
        }, this.setTimingDataSamplingOnPageLoad = function(e) {
            !0 === e && (e = 1), !1 === e && (e = 0), (e = parseInt(e, 10)) < 0 ? e = 0 : 100 < e && (e = 100), configUpdateTimingDataOnPageLoadSampling = e
        }, this.getTimingDataSamplingOnPageLoad = function() {
            return configUpdateTimingDataOnPageLoadSampling
        }, this.setUserId = function(e) {
            isDefined(e) && e.length && (configUserId = e)
        }, this.getUserId = function() {
            return configUserId
        }, this.setCustomData = function(e, t) {
            isObject(e) ? configCustomData = e : (configCustomData = configCustomData || {})[e] = t
        }, this.getCustomData = function() {
            return configCustomData
        }, this.setCustomRequestProcessing = function(e) {
            configCustomRequestContentProcessing = e
        }, this.appendToTrackingUrl = function(e) {
            configAppendToTrackingUrl = e
        }, this.getRequest = function(e) {
            return getRequest(e)
        }, this.addPlugin = function(e, t) {
            plugins[e] = t
        }, this.setCustomDimension = function(e, t) {
            if (0 < (e = parseInt(e, 10))) {
                if (customDimensionsEncoded.hasOwnProperty(e)) return void logConsoleWarn("Custom dimension " + e + ' was already set by "setCustomDimensionValue" method. Value set by "setCustomDimension" will be ignored.');
                isDefined(t) || (t = ""), isString(t) || (t = String(t)), customDimensions[e] = t
            }
        }, this.getCustomDimension = function(e) {
            if (0 < (e = parseInt(e, 10)) && Object.prototype.hasOwnProperty.call(customDimensions, e)) return customDimensions[e]
        }, this.deleteCustomDimension = function(e) {
            0 < (e = parseInt(e, 10)) && (delete customDimensions[e], delete customDimensionsEncoded[e])
        }, this.setCustomDimensionValue = function(e, t) {
            0 < (e = parseInt(e, 10)) && (isDefined(t) || (t = ""), isString(t) || (t = String(t)), customDimensionsEncoded[e] = t, delete customDimensions[e])
        }, this.getCustomDimensionValue = function(e) {
            if (0 < (e = parseInt(e, 10)) && Object.prototype.hasOwnProperty.call(customDimensionsEncoded, e)) return customDimensionsEncoded[e]
        }, this.setCustomVariable = function(e, t, n, i) {
            var r;
            isDefined(i) || (i = "visit"), isDefined(t) && (isDefined(n) || (n = ""), 0 < e && (t = isString(t) ? t : String(t), n = isString(n) ? n : String(n), r = [t.slice(0, customVariableMaximumLength), n.slice(0, customVariableMaximumLength)], "visit" === i || 2 === i ? (loadCustomVariables(), customVariables[e] = r) : "page" === i || 3 === i ? customVariablesPage[e] = r : "event" === i && (customVariablesEvent[e] = r)))
        }, this.getCustomVariable = function(e, t) {
            var n;
            return isDefined(t) || (t = "visit"), "page" === t || 3 === t ? n = customVariablesPage[e] : "event" === t ? n = customVariablesEvent[e] : "visit" !== t && 2 !== t || (loadCustomVariables(), n = customVariables[e]), !(!isDefined(n) || n && "" === n[0]) && n
        }, this.deleteCustomVariable = function(e, t) {
            this.getCustomVariable(e, t) && this.setCustomVariable(e, "", "", t)
        }, this.deleteCustomVariables = function(e) {
            "page" === e || 3 === e ? customVariablesPage = {} : "event" === e ? customVariablesEvent = {} : "visit" !== e && 2 !== e || (customVariables = {})
        }, this.storeCustomVariablesInCookie = function() {
            configStoreCustomVariablesInCookie = !0
        }, this.setLinkTrackingTimer = function(e) {
            configTrackerPause = e
        }, this.getLinkTrackingTimer = function() {
            return configTrackerPause
        }, this.setDownloadExtensions = function(e) {
            isString(e) && (e = e.split("|")), configDownloadExtensions = e
        }, this.addDownloadExtensions = function(e) {
            var t;
            for (isString(e) && (e = e.split("|")), t = 0; t < e.length; t++) configDownloadExtensions.push(e[t])
        }, this.removeDownloadExtensions = function(e) {
            var t, n = [];
            for (isString(e) && (e = e.split("|")), t = 0; t < configDownloadExtensions.length; t++) - 1 === indexOfArray(e, configDownloadExtensions[t]) && n.push(configDownloadExtensions[t]);
            configDownloadExtensions = n
        }, this.setDomains = function(e) {
            configHostsAlias = isString(e) ? [e] : e;
            for (var t, n = !1, i = 0; i < configHostsAlias.length; i++) {
                if (t = String(configHostsAlias[i]), isSameHost(domainAlias, domainFixup(t))) {
                    n = !0;
                    break
                }
                var r = getPathName(t);
                if (r && "/" !== r && "/*" !== r) {
                    n = !0;
                    break
                }
            }
            n || configHostsAlias.push(domainAlias)
        }, this.enableCrossDomainLinking = function() {
            crossDomainTrackingEnabled = !0
        }, this.disableCrossDomainLinking = function() {
            crossDomainTrackingEnabled = !1
        }, this.isCrossDomainLinkingEnabled = function() {
            return crossDomainTrackingEnabled
        }, this.customCrossDomainLinkDecorator = function(e) {
            crossDomainTrackingLinkDecorator = e
        }, this.customCrossDomainLinkVisitorIdGetter = function(e) {
            crossDomainTrackingLinkVisitorIdGetter = e
        }, this.setCrossDomainLinkingTimeout = function(e) {
            configVisitorIdUrlParameterTimeoutInSeconds = e
        }, this.getCrossDomainLinkingUrlParameter = function() {
            return encodeWrapper(configVisitorIdUrlParameter) + "=" + encodeWrapper(getCrossDomainVisitorId())
        }, this.setIgnoreClasses = function(e) {
            configIgnoreClasses = isString(e) ? [e] : e
        }, this.setRequestMethod = function(e) {
            configRequestMethod = e || defaultRequestMethod
        }, this.setRequestContentType = function(e) {
            configRequestContentType = e || defaultRequestContentType
        }, this.setReferrerUrl = function(e) {
            configReferrerUrl = e
        }, this.setCustomUrl = function(e) {
            configCustomUrl = resolveRelativeReference(locationHrefAlias, e)
        }, this.getCurrentUrl = function() {
            return configCustomUrl || locationHrefAlias
        }, this.setDocumentTitle = function(e) {
            configTitle = e
        }, this.setAPIUrl = function(e) {
            configApiUrl = e
        }, this.setDownloadClasses = function(e) {
            configDownloadClasses = isString(e) ? [e] : e
        }, this.setLinkClasses = function(e) {
            configLinkClasses = isString(e) ? [e] : e
        }, this.setCampaignNameKey = function(e) {
            configCampaignNameParameters = isString(e) ? [e] : e
        }, this.setCampaignKeywordKey = function(e) {
            configCampaignKeywordParameters = isString(e) ? [e] : e
        }, this.discardHashTag = function(e) {
            configDiscardHashTag = e
        }, this.setCookieNamePrefix = function(e) {
            configCookieNamePrefix = e, customVariables = getCustomVariablesFromCookie()
        }, this.setCookieDomain = function(e) {
            var t = domainFixup(e);
            isPossibleToSetCookieOnDomain(t) && (configCookieDomain = t, updateDomainHash())
        }, this.getCookieDomain = function() {
            return configCookieDomain
        }, this.hasCookies = function() {
            return "1" === hasCookies()
        }, this.setSessionCookie = function(e, t, n) {
            if (!e) throw new Error("Missing cookie name");
            isDefined(n) || (n = configSessionCookieTimeout), configCookiesToDelete.push(e), setCookie(getCookieName(e), t, n, configCookiePath, configCookieDomain, configCookieIsSecure)
        }, this.getCookie = function(e) {
            var t = getCookie(getCookieName(e));
            return 0 === t ? null : t
        }, this.setCookiePath = function(e) {
            configCookiePath = e, updateDomainHash()
        }, this.getCookiePath = function(e) {
            return configCookiePath
        }, this.setVisitorCookieTimeout = function(e) {
            configVisitorCookieTimeout = 1e3 * e
        }, this.setSessionCookieTimeout = function(e) {
            configSessionCookieTimeout = 1e3 * e
        }, this.getSessionCookieTimeout = function() {
            return configSessionCookieTimeout
        }, this.setReferralCookieTimeout = function(e) {
            configReferralCookieTimeout = 1e3 * e
        }, this.setSecureCookie = function(e) {
            configCookieIsSecure = e
        }, this.disableCookies = function() {
            configCookiesDisabled = !0, configTrackerSiteId && deleteCookies()
        }, this.enableCookies = function() {
            configCookiesDisabled = !1, shouldSendHeartBeat() && heartBeatUp()
        }, this.deleteCookies = function() {
            deleteCookies()
        }, this.setDoNotTrack = function(e) {
            var t = navigatorAlias.doNotTrack || navigatorAlias.msDoNotTrack;
            (configDoNotTrack = e && ("yes" === t || "1" === t)) && this.disableCookies()
        }, this.addListener = function(e, t) {
            addClickListener(e, t)
        }, this.enableLinkTracking = function(e) {
            linkTrackingEnabled = !0;
            var t = this;
            trackCallback(function() {
                trackCallbackOnReady(function() {
                    addClickListeners(e, t)
                })
            })
        }, this.enableJSErrorTracking = function(a) {
            isDefined(a) || (a = !0), enableJSErrorTracking = !0;
            var t = windowAlias.onerror;
            windowAlias.onerror = function(n, i, r, o, e) {
                return trackCallback(function() {
                    var e = "JavaScript Errors",
                        t = i + ":" + r;
                    o && (t += ":" + o), a && -1 !== indexOfArray(javaScriptErrors, e + t + n) || (javaScriptErrors.push(e + t + n), logEvent(e, t, n))
                }), !!t && t(n, i, r, o, e)
            }
        }, this.disablePerformanceTracking = function() {
            configPerformanceTrackingEnabled = !1
        }, this.setGenerationTimeMs = function(e) {
            configPerformanceGenerationTime = parseInt(e, 10)
        }, this.enableHeartBeatTimer = function() {
            configHeartBeatDelay = defaultHeartBeatDelay, null !== lastTrackerRequestTime && setUpHeartBeat()
        }, this.disableHeartBeatTimer = function() {
            heartBeatDown(), (configHeartBeatDelay || heartBeatSetUp) && (windowAlias.removeEventListener ? (windowAlias.removeEventListener("focus", heartBeatOnFocus, !0), windowAlias.removeEventListener("blur", heartBeatOnBlur, !0)) : windowAlias.detachEvent && (windowAlias.detachEvent("onfocus", heartBeatOnFocus), windowAlias.detachEvent("onblur", heartBeatOnBlur))), configHeartBeatDelay = null, heartBeatSetUp = !1
        }, this.killFrame = function() {
            windowAlias.location !== windowAlias.top.location && (windowAlias.top.location = windowAlias.location)
        }, this.redirectFile = function(e) {
            "file:" === windowAlias.location.protocol && (windowAlias.location = e)
        }, this.setCountPreRendered = function(e) {
            configCountPreRendered = e
        }, this.trackGoal = function(e, t, n) {
            trackCallback(function() {
                logGoal(e, t, n)
            })
        }, this.trackLink = function(e, t, n, i) {
            trackCallback(function() {
                logLink(e, t, n, i)
            })
        }, this.getNumTrackedPageViews = function() {
            return numTrackedPageviews
        }, this.trackHeartBeat = function(e) {
            var t = !documentAlias.hasFocus || documentAlias.hasFocus();
            configHeartBeatDelay && t && shouldSendHeartBeat() && heartBeatPingIfActivityAlias(e)
        }, this.trackPageView = function(e, t, n) {
            trackedContentImpressions = [], javaScriptErrors = [], isOverlaySession(configTrackerSiteId) ? trackCallback(function() {
                injectOverlayScripts(configTrackerUrl, configApiUrl, configTrackerSiteId)
            }) : (trackCallback(function() {
                numTrackedPageviews++, logPageView(e, t, n)
            }), configUpdateTimingDataOnPageLoadSampling >= Math.floor(100 * Math.random() + 1) && trackCallbackOnLoad(function() {
                setTimeout(function() {
                    sendRequest(getRequest("ping=5", null, "ping"), configTrackerPause)
                }, 0)
            }))
        }, this.trackAllContentImpressions = function() {
            isOverlaySession(configTrackerSiteId) || trackCallback(function() {
                trackCallbackOnReady(function() {
                    sendBulkRequest(getContentImpressionsRequestsFromNodes(content.findContentNodes()), configTrackerPause)
                })
            })
        }, this.trackVisibleContentImpressions = function(e, t) {
            isOverlaySession(configTrackerSiteId) || (isDefined(e) || (e = !0), isDefined(t) || (t = 750), enableTrackOnlyVisibleContent(e, t, this), trackCallback(function() {
                trackCallbackOnLoad(function() {
                    sendBulkRequest(getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(content.findContentNodes()), configTrackerPause)
                })
            }))
        }, this.trackContentImpression = function(e, t, n) {
            isOverlaySession(configTrackerSiteId) || (e = trim(e), t = trim(t), n = trim(n), e && (t = t || "Unknown", trackCallback(function() {
                sendRequest(buildContentImpressionRequest(e, t, n), configTrackerPause)
            })))
        }, this.trackContentImpressionsWithinNode = function(e) {
            !isOverlaySession(configTrackerSiteId) && e && trackCallback(function() {
                isTrackOnlyVisibleContentEnabled ? trackCallbackOnLoad(function() {
                    sendBulkRequest(getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(content.findContentNodesWithinNode(e)), configTrackerPause)
                }) : trackCallbackOnReady(function() {
                    sendBulkRequest(getContentImpressionsRequestsFromNodes(content.findContentNodesWithinNode(e)), configTrackerPause)
                })
            })
        }, this.trackContentInteraction = function(e, t, n, i) {
            isOverlaySession(configTrackerSiteId) || (e = trim(e), t = trim(t), n = trim(n), i = trim(i), e && t && (n = n || "Unknown", trackCallback(function() {
                sendRequest(buildContentInteractionRequest(e, t, n, i), configTrackerPause)
            })))
        }, this.trackContentInteractionNode = function(e, t) {
            !isOverlaySession(configTrackerSiteId) && e && trackCallback(function() {
                sendRequest(buildContentInteractionRequestNode(e, t), configTrackerPause)
            })
        }, this.logAllContentBlocksOnPage = function() {
            var e = content.findContentNodes(),
                t = content.collectContent(e);
            "undefined" != typeof console && console && console.log && console.log(t)
        }, this.trackEvent = function(e, t, n, i, r, o) {
            trackCallback(function() {
                logEvent(e, t, n, i, r, o)
            })
        }, this.trackSiteSearch = function(e, t, n, i) {
            trackCallback(function() {
                logSiteSearch(e, t, n, i)
            })
        }, this.setEcommerceView = function(e, t, n, i) {
            isDefined(n) && n.length ? n instanceof Array && (n = JSON.stringify(n)) : n = "", customVariablesPage[5] = ["_pkc", n], isDefined(i) && String(i).length && (customVariablesPage[2] = ["_pkp", i]), (isDefined(e) && e.length || isDefined(t) && t.length) && (isDefined(e) && e.length && (customVariablesPage[3] = ["_pks", e]), isDefined(t) && t.length || (t = ""), customVariablesPage[4] = ["_pkn", t])
        }, this.getEcommerceItems = function() {
            return JSON.parse(JSON.stringify(ecommerceItems))
        }, this.addEcommerceItem = function(e, t, n, i, r) {
            e.length && (ecommerceItems[e] = [e, t, n, i, r])
        }, this.removeEcommerceItem = function(e) {
            e.length && delete ecommerceItems[e]
        }, this.clearEcommerceCart = function() {
            ecommerceItems = {}
        }, this.trackEcommerceOrder = function(e, t, n, i, r, o) {
            logEcommerceOrder(e, t, n, i, r, o)
        }, this.trackEcommerceCartUpdate = function(e) {
            logEcommerceCartUpdate(e)
        }, this.trackRequest = function(e, t, n, i) {
            trackCallback(function() {
                sendRequest(getRequest(e, t, i), configTrackerPause, n)
            })
        }, this.deanonymizeUser = function() {
            this.setUserIsAnonymous(0), sendRequest(getRequest("ping=4", null, "ping"), configTrackerPause)
        }, Piwik.trigger("TrackerSetup", [this])
    }

    function TrackerProxy() {
        return {
            push: apply
        }
    }

    function applyMethodsInOrder(e, t) {
        for (var n, i = {}, r = 0; r < t.length; r++) {
            var o, a = t[r];
            for (i[a] = 1, n = 0; n < e.length; n++) {
                e[n] && e[n][0] && (a === (o = e[n][0]) && (apply(e[n]), delete e[n], 1 < i[o] && "addTracker" !== o && "enableLinkTracking" !== o && logConsoleError("The method " + o + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation'), i[o]++))
            }
        }
        return apply(["setVisitorIdCookie"]), e
    }
    var applyFirst = ["addTracker", "disableCookies", "enableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "customCrossDomainLinkDecorator", "customCrossDomainLinkVisitorIdGetter", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setSiteId", "enableLinkTracking"];

    function createFirstTracker(e, t) {
        var n = new Tracker(e, t);
        for (asyncTrackers.push(n), window._paq = applyMethodsInOrder(window._paq, applyFirst), iterator = 0; iterator < window._paq.length; iterator++) window._paq[iterator] && apply(window._paq[iterator]);
        return window._paq = new TrackerProxy, n
    }
    addEventListener(windowAlias, "beforeunload", beforeUnloadHandler, !1), Date.prototype.getTimeAlias = Date.prototype.getTime, Piwik = {
        initialized: !1,
        JSON: JSON,
        DOM: {
            addEventListener: function(e, t, n, i) {
                "undefined" == typeof i && (i = !1), addEventListener(e, t, n, i)
            },
            onLoad: trackCallbackOnLoad,
            onReady: trackCallbackOnReady,
            isNodeVisible: isVisible,
            isOrWasNodeVisible: content.isNodeVisible
        },
        on: function(e, t) {
            eventHandlers[e] || (eventHandlers[e] = []), eventHandlers[e].push(t)
        },
        off: function(e, t) {
            if (eventHandlers[e])
                for (var n = 0; n < eventHandlers[e].length; n++) eventHandlers[e][n] === t && eventHandlers[e].splice(n, 1)
        },
        trigger: function(e, t, n) {
            if (eventHandlers[e])
                for (var i = 0; i < eventHandlers[e].length; i++) eventHandlers[e][i].apply(n || windowAlias, t)
        },
        addPlugin: function(e, t) {
            plugins[e] = t
        },
        getTracker: function(e, t) {
            isDefined(t) || (t = this.getAsyncTracker().getSiteId()), isDefined(e) || (e = this.getAsyncTracker().getTrackerUrl());
            var n = new Tracker(e, t);
            return syncTrackers.push(n), n
        },
        getAsyncTrackers: function() {
            return asyncTrackers
        },
        addTracker: function(e, t) {
            asyncTrackers.length ? asyncTrackers[0].addTracker(e, t) : createFirstTracker(e, t)
        },
        getAsyncTracker: function(e, t) {
            var n;
            if (!(asyncTrackers && asyncTrackers.length && asyncTrackers[0])) return createFirstTracker(e, t);
            if (n = asyncTrackers[0], !t && !e) return n;
            isDefined(t) && null !== t || !n || (t = n.getSiteId()), isDefined(e) && null !== e || !n || (e = n.getTrackerUrl());
            for (var i, r = 0; r < asyncTrackers.length; r++)
                if ((i = asyncTrackers[r]) && String(i.getSiteId()) === String(t) && i.getTrackerUrl() === e) return i
        },
        retryMissedPluginCalls: function() {
            var e = missedPluginTrackerCalls;
            missedPluginTrackerCalls = [];
            for (var t = 0; t < e.length; t++) apply(e[t])
        }
    }, "function" == typeof define && __webpack_require__(1) && define("piwik", [], function() {
        return Piwik
    }), __webpack_exports__.a = Piwik
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(this, {})
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0);

    function r(e, t, n, i) {
        function r(e) {
            try {
                if (window["piwik_" + e]) return window["piwik_" + e]
            } catch (e) {}
        }
        var o, a = window.Piwik.getTracker(n, t);
        a.setDocumentTitle(e), a.setCustomData(i), (o = r("tracker_pause")) && a.setLinkTrackingTimer(o), (o = r("download_extensions")) && a.setDownloadExtensions(o), (o = r("hosts_alias")) && a.setDomains(o), (o = r("ignore_classes")) && a.setIgnoreClasses(o), a.trackPageView(), r("install_tracker") && (window.piwik_track = function(e, t, n, i) {
            a.setSiteId(t), a.setTrackerUrl(n), a.trackLink(e, i)
        }, a.enableLinkTracking())
    }
    "object" != typeof window._paq && (window._paq = []), "object" != typeof window.Piwik && (window.Piwik = i.a),
        function() {
            if (window && "object" == typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length)
                for (var e = 0; e < window.piwikPluginAsyncInit.length; e++) "function" == typeof window.piwikPluginAsyncInit[e] && window.piwikPluginAsyncInit[e]();
            window && window.piwikAsyncInit && window.piwikAsyncInit(), window.Piwik.getAsyncTrackers().length || (! function() {
                if ("object" == typeof window._paq && "undefined" != typeof window._paq.length) return window._paq.length
            }() ? window._paq = {
                push: function(e) {
                    "undefined" != typeof console && console && console.error && console.error("_paq.push() was used but Piwik tracker was not initialized before the ppms.js file was loaded. Make sure to configure the tracker via _paq.push before loading ppms.js. Alternatively, you can create a tracker via Piwik.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", e)
                }
            } : window.Piwik.addTracker()), window.Piwik.trigger("PiwikInitialized", []), window.Piwik.initialized = !0
        }(), "undefined" == typeof window.AnalyticsTracker && (window.AnalyticsTracker = window.Piwik), "function" != typeof window.piwik_log && (window.piwik_log = r)
}]);