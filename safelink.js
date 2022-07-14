//safelink blogger
$(".wcSafeShow").click(function () {
    $(".safeWrap").fadeIn();
}),
    $(".wcSafeClose").click(function () {
        $(".safeWrap").fadeOut(), $("#generatelink").addClass("hidden"), $("#generateurl").val("");
    });
$(document).ready(function () {
    $("#btngenerate").on("click", function () {
        var e = $("#generateurl").val(),
            r = $("#generatelink"),
            a = $("#generateloading"),
            n = $("#resulturl");
        if ("" == e) return $("#generateurl").focus(), !1;
        $("#copytoclipboard").html(setCopyUrl),
            a.removeClass("hidden"),
            r.addClass("hidden"),
            $.ajax({
                url: "/feeds/posts/summary?alt=json-in-script",
                type: "get",
                dataType: "jsonp",
                success: function (t) {
                    var o = "",
                        l = t.feed.entry,
                        s = new Array();
                    if (void 0 !== l) {
                        for (var i = 0; i < l.length; i++) {
                            for (var d = 0; d < l[i].link.length; d++)
                                if ("alternate" == l[i].link[d].rel) {
                                    o = l[i].link[d].href;
                                    break;
                                }
                            s[i] = o;
                            var c = Math.random() * s.length;
                            c = parseInt(c);
                        }
                        (resultgenerate = s[c] + "#?o=" + aesCrypto.encrypt(convertstr(e), convertstr("root"))), a.addClass("hidden"), r.removeClass("hidden"), n.val(resultgenerate);
                    } else n.val("No result!");
                },
                error: function () {
                    n.val("Error loading feed!");
                },
            });
    }),
        new ClipboardJS(".copytoclipboard").on("success", function (e) {
            $("#copytoclipboard").html(setCopied);
        });
});
function convertstr(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "");
}
!(function (t) {
    var e = {
        init: function (e) {
            var r = { timer: null, timerSeconds: 10, callback: function () { }, timerCurrent: 0, showPercentage: !1, fill: !1, color: "#CCC" };
            return (
                (r = t.extend(r, e)),
                this.each(function () {
                    var e = t(this);
                    e.data("pietimer") || (e.addClass("pietimer"), e.css({ fontSize: e.width() }), e.data("pietimer", r), r.showPercentage && e.find(".percent").show(), r.fill && e.addClass("fill"), e.pietimer("start"));
                })
            );
        },
        stopWatch: function () {
            var e = t(this).data("pietimer");
            if (e) {
                var r = (e.timerFinish - new Date().getTime()) / 1e3;
                if (r <= 0) clearInterval(e.timer), t(this).pietimer("drawTimer", 100), e.callback();
                else {
                    var n = 100 - (r / e.timerSeconds) * 100;
                    t(this).pietimer("drawTimer", n);
                }
            }
        },
        drawTimer: function (e) {
            $this = t(this);
            var r = $this.data("pietimer");
            if (r) {
                $this.html('<div class="percent"></div><div class="slice' + (e > 50 ? ' gt50"' : '"') + '><div class="pie"></div>' + (e > 50 ? '<div class="pie fill"></div>' : "") + "</div>");
                var n = 3.6 * e;
                $this.find(".slice .pie").css({ "-moz-transform": "rotate(" + n + "deg)", "-webkit-transform": "rotate(" + n + "deg)", "-o-transform": "rotate(" + n + "deg)", transform: "rotate(" + n + "deg)" }),
                    $this.find(".percent").html(Math.round(e) + "%"),
                    r.showPercentage && $this.find(".percent").show(),
                    $this.hasClass("fill") ? $this.find(".slice .pie").css({ backgroundColor: r.color }) : $this.find(".slice .pie").css({ borderColor: r.color });
            }
        },
        start: function () {
            var e = t(this).data("pietimer");
            e && ((e.timerFinish = new Date().getTime() + 1e3 * e.timerSeconds), t(this).pietimer("drawTimer", 0), (e.timer = setInterval("$this.pietimer('stopWatch')", 50)));
        },
        reset: function () {
            var e = t(this).data("pietimer");
            e && (clearInterval(e.timer), t(this).pietimer("drawTimer", 0));
        },
    };
    t.fn.pietimer = function (r) {
        return e[r] ? e[r].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof r && r ? void t.error("Method " + r + " does not exist on jQuery.pietimer") : e.init.apply(this, arguments);
    };
})(jQuery),
    (function (t, e) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.ClipboardJS = e()) : (t.ClipboardJS = e());
    })(this, function () {
        return (function (t) {
            var e = {};
            function r(n) {
                if (e[n]) return e[n].exports;
                var i = (e[n] = { i: n, l: !1, exports: {} });
                return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
            }
            return (
                (r.m = t),
                (r.c = e),
                (r.d = function (t, e, n) {
                    r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
                }),
                (r.r = function (t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (r.t = function (t, e) {
                    if ((1 & e && (t = r(t)), 8 & e)) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var n = Object.create(null);
                    if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                        for (var i in t)
                            r.d(
                                n,
                                i,
                                function (e) {
                                    return t[e];
                                }.bind(null, i)
                            );
                    return n;
                }),
                (r.n = function (t) {
                    var e =
                        t && t.__esModule
                            ? function () {
                                return t.default;
                            }
                            : function () {
                                return t;
                            };
                    return r.d(e, "a", e), e;
                }),
                (r.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (r.p = ""),
                r((r.s = 0))
            );
        })([
            function (t, e, r) {
                "use strict";
                var n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                            return typeof t;
                        }
                        : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                        },
                    i = (function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                            }
                        }
                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e;
                        };
                    })(),
                    o = s(r(1)),
                    a = s(r(3)),
                    c = s(r(4));
                function s(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var l = (function (t) {
                    function e(t, r) {
                        !(function (t, r) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this);
                        var n = (function (t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
                        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return n.resolveOptions(r), n.listenClick(t), n;
                    }
                    return (
                        (function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                        })(e, a.default),
                        i(
                            e,
                            [
                                {
                                    key: "resolveOptions",
                                    value: function () {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                        (this.action = "function" == typeof t.action ? t.action : this.defaultAction),
                                            (this.target = "function" == typeof t.target ? t.target : this.defaultTarget),
                                            (this.text = "function" == typeof t.text ? t.text : this.defaultText),
                                            (this.container = "object" === n(t.container) ? t.container : document.body);
                                    },
                                },
                                {
                                    key: "listenClick",
                                    value: function (t) {
                                        var e = this;
                                        this.listener = (0, c.default)(t, "click", function (t) {
                                            return e.onClick(t);
                                        });
                                    },
                                },
                                {
                                    key: "onClick",
                                    value: function (t) {
                                        var e = t.delegateTarget || t.currentTarget;
                                        this.clipboardAction && (this.clipboardAction = null),
                                            (this.clipboardAction = new o.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this }));
                                    },
                                },
                                {
                                    key: "defaultAction",
                                    value: function (t) {
                                        return u("action", t);
                                    },
                                },
                                {
                                    key: "defaultTarget",
                                    value: function (t) {
                                        var e = u("target", t);
                                        if (e) return document.querySelector(e);
                                    },
                                },
                                {
                                    key: "defaultText",
                                    value: function (t) {
                                        return u("text", t);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                                    },
                                },
                            ],
                            [
                                {
                                    key: "isSupported",
                                    value: function () {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                            e = "string" == typeof t ? [t] : t,
                                            r = !!document.queryCommandSupported;
                                        return (
                                            e.forEach(function (t) {
                                                r = r && !!document.queryCommandSupported(t);
                                            }),
                                            r
                                        );
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })();
                function u(t, e) {
                    var r = "data-clipboard-" + t;
                    if (e.hasAttribute(r)) return e.getAttribute(r);
                }
                t.exports = l;
            },
            function (t, e, r) {
                "use strict";
                var n,
                    i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                return typeof t;
                            }
                            : function (t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            },
                    o = (function () {
                        function t(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                            }
                        }
                        return function (e, r, n) {
                            return r && t(e.prototype, r), n && t(e, n), e;
                        };
                    })(),
                    a = (n = r(2)) && n.__esModule ? n : { default: n },
                    c = (function () {
                        function t(e) {
                            !(function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, t),
                                this.resolveOptions(e),
                                this.initSelection();
                        }
                        return (
                            o(t, [
                                {
                                    key: "resolveOptions",
                                    value: function () {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                        (this.action = t.action), (this.container = t.container), (this.emitter = t.emitter), (this.target = t.target), (this.text = t.text), (this.trigger = t.trigger), (this.selectedText = "");
                                    },
                                },
                                {
                                    key: "initSelection",
                                    value: function () {
                                        this.text ? this.selectFake() : this.target && this.selectTarget();
                                    },
                                },
                                {
                                    key: "selectFake",
                                    value: function () {
                                        var t = this,
                                            e = "rtl" == document.documentElement.getAttribute("dir");
                                        this.removeFake(),
                                            (this.fakeHandlerCallback = function () {
                                                return t.removeFake();
                                            }),
                                            (this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0),
                                            (this.fakeElem = document.createElement("textarea")),
                                            (this.fakeElem.style.fontSize = "12pt"),
                                            (this.fakeElem.style.border = "0"),
                                            (this.fakeElem.style.padding = "0"),
                                            (this.fakeElem.style.margin = "0"),
                                            (this.fakeElem.style.position = "absolute"),
                                            (this.fakeElem.style[e ? "right" : "left"] = "-9999px");
                                        var r = window.pageYOffset || document.documentElement.scrollTop;
                                        (this.fakeElem.style.top = r + "px"),
                                            this.fakeElem.setAttribute("readonly", ""),
                                            (this.fakeElem.value = this.text),
                                            this.container.appendChild(this.fakeElem),
                                            (this.selectedText = (0, a.default)(this.fakeElem)),
                                            this.copyText();
                                    },
                                },
                                {
                                    key: "removeFake",
                                    value: function () {
                                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), (this.fakeHandler = null), (this.fakeHandlerCallback = null)),
                                            this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                                    },
                                },
                                {
                                    key: "selectTarget",
                                    value: function () {
                                        (this.selectedText = (0, a.default)(this.target)), this.copyText();
                                    },
                                },
                                {
                                    key: "copyText",
                                    value: function () {
                                        var t = void 0;
                                        try {
                                            t = document.execCommand(this.action);
                                        } catch (e) {
                                            t = !1;
                                        }
                                        this.handleResult(t);
                                    },
                                },
                                {
                                    key: "handleResult",
                                    value: function (t) {
                                        this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });
                                    },
                                },
                                {
                                    key: "clearSelection",
                                    value: function () {
                                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.removeFake();
                                    },
                                },
                                {
                                    key: "action",
                                    set: function () {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                                        if (((this._action = t), "copy" !== this._action && "cut" !== this._action)) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                    },
                                    get: function () {
                                        return this._action;
                                    },
                                },
                                {
                                    key: "target",
                                    set: function (t) {
                                        if (void 0 !== t) {
                                            if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                                throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                            this._target = t;
                                        }
                                    },
                                    get: function () {
                                        return this._target;
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                t.exports = c;
            },
            function (t, e) {
                t.exports = function (t) {
                    var e;
                    if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
                    else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                        var r = t.hasAttribute("readonly");
                        r || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), r || t.removeAttribute("readonly"), (e = t.value);
                    } else {
                        t.hasAttribute("contenteditable") && t.focus();
                        var n = window.getSelection(),
                            i = document.createRange();
                        i.selectNodeContents(t), n.removeAllRanges(), n.addRange(i), (e = n.toString());
                    }
                    return e;
                };
            },
            function (t, e) {
                function r() { }
                (r.prototype = {
                    on: function (t, e, r) {
                        var n = this.e || (this.e = {});
                        return (n[t] || (n[t] = [])).push({ fn: e, ctx: r }), this;
                    },
                    once: function (t, e, r) {
                        var n = this;
                        function i() {
                            n.off(t, i), e.apply(r, arguments);
                        }
                        return (i._ = e), this.on(t, i, r);
                    },
                    emit: function (t) {
                        for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, e);
                        return this;
                    },
                    off: function (t, e) {
                        var r = this.e || (this.e = {}),
                            n = r[t],
                            i = [];
                        if (n && e) for (var o = 0, a = n.length; o < a; o++) n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
                        return i.length ? (r[t] = i) : delete r[t], this;
                    },
                }),
                    (t.exports = r);
            },
            function (t, e, r) {
                var n = r(5),
                    i = r(6);
                t.exports = function (t, e, r) {
                    if (!t && !e && !r) throw new Error("Missing required arguments");
                    if (!n.string(e)) throw new TypeError("Second argument must be a String");
                    if (!n.fn(r)) throw new TypeError("Third argument must be a Function");
                    if (n.node(t))
                        return (
                            (h = e),
                            (d = r),
                            (f = t).addEventListener(h, d),
                            {
                                destroy: function () {
                                    f.removeEventListener(h, d);
                                },
                            }
                        );
                    if (n.nodeList(t))
                        return (
                            (s = t),
                            (l = e),
                            (u = r),
                            Array.prototype.forEach.call(s, function (t) {
                                t.addEventListener(l, u);
                            }),
                            {
                                destroy: function () {
                                    Array.prototype.forEach.call(s, function (t) {
                                        t.removeEventListener(l, u);
                                    });
                                },
                            }
                        );
                    if (n.string(t)) return (o = t), (a = e), (c = r), i(document.body, o, a, c);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                    var o, a, c, s, l, u, f, h, d;
                };
            },
            function (t, e) {
                (e.node = function (t) {
                    return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
                }),
                    (e.nodeList = function (t) {
                        var r = Object.prototype.toString.call(t);
                        return void 0 !== t && ("[object NodeList]" === r || "[object HTMLCollection]" === r) && "length" in t && (0 === t.length || e.node(t[0]));
                    }),
                    (e.string = function (t) {
                        return "string" == typeof t || t instanceof String;
                    }),
                    (e.fn = function (t) {
                        return "[object Function]" === Object.prototype.toString.call(t);
                    });
            },
            function (t, e, r) {
                var n = r(7);
                function i(t, e, r, i, o) {
                    var a = function (t, e, r, i) {
                        return function (r) {
                            (r.delegateTarget = n(r.target, e)), r.delegateTarget && i.call(t, r);
                        };
                    }.apply(this, arguments);
                    return (
                        t.addEventListener(r, a, o),
                        {
                            destroy: function () {
                                t.removeEventListener(r, a, o);
                            },
                        }
                    );
                }
                t.exports = function (t, e, r, n, o) {
                    return "function" == typeof t.addEventListener
                        ? i.apply(null, arguments)
                        : "function" == typeof r
                            ? i.bind(null, document).apply(null, arguments)
                            : ("string" == typeof t && (t = document.querySelectorAll(t)),
                                Array.prototype.map.call(t, function (t) {
                                    return i(t, e, r, n, o);
                                }));
                };
            },
            function (t, e) {
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var r = Element.prototype;
                    r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
                }
                t.exports = function (t, e) {
                    for (; t && 9 !== t.nodeType;) {
                        if ("function" == typeof t.matches && t.matches(e)) return t;
                        t = t.parentNode;
                    }
                };
            },
        ]);
    });
var CryptoJS =
    CryptoJS ||
    (function (t, e) {
        var r = {},
            n = (r.lib = {}),
            i = (n.Base = (function () {
                function t() { }
                return {
                    extend: function (e) {
                        t.prototype = this;
                        var r = new t();
                        return (
                            e && r.mixIn(e),
                            r.hasOwnProperty("init") ||
                            (r.init = function () {
                                r.$super.init.apply(this, arguments);
                            }),
                            (r.init.prototype = r),
                            (r.$super = this),
                            r
                        );
                    },
                    create: function () {
                        var t = this.extend();
                        return t.init.apply(t, arguments), t;
                    },
                    init: function () { },
                    mixIn: function (t) {
                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                        t.hasOwnProperty("toString") && (this.toString = t.toString);
                    },
                    clone: function () {
                        return this.init.prototype.extend(this);
                    },
                };
            })()),
            o = (n.WordArray = i.extend({
                init: function (t, e) {
                    (t = this.words = t || []), (this.sigBytes = null != e ? e : 4 * t.length);
                },
                toString: function (t) {
                    return (t || c).stringify(this);
                },
                concat: function (t) {
                    var e = this.words,
                        r = t.words,
                        n = this.sigBytes,
                        i = t.sigBytes;
                    if ((this.clamp(), n % 4))
                        for (var o = 0; i > o; o++) {
                            var a = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                            e[(n + o) >>> 2] |= a << (24 - ((n + o) % 4) * 8);
                        }
                    else if (r.length > 65535) for (o = 0; i > o; o += 4) e[(n + o) >>> 2] = r[o >>> 2];
                    else e.push.apply(e, r);
                    return (this.sigBytes += i), this;
                },
                clamp: function () {
                    var e = this.words,
                        r = this.sigBytes;
                    (e[r >>> 2] &= 4294967295 << (32 - (r % 4) * 8)), (e.length = t.ceil(r / 4));
                },
                clone: function () {
                    var t = i.clone.call(this);
                    return (t.words = this.words.slice(0)), t;
                },
                random: function (e) {
                    for (var r = [], n = 0; e > n; n += 4) r.push((4294967296 * t.random()) | 0);
                    return new o.init(r, e);
                },
            })),
            a = (r.enc = {}),
            c = (a.Hex = {
                stringify: function (t) {
                    for (var e = t.words, r = t.sigBytes, n = [], i = 0; r > i; i++) {
                        var o = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                        n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
                    }
                    return n.join("");
                },
                parse: function (t) {
                    for (var e = t.length, r = [], n = 0; e > n; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << (24 - (n % 8) * 4);
                    return new o.init(r, e / 2);
                },
            }),
            s = (a.Latin1 = {
                stringify: function (t) {
                    for (var e = t.words, r = t.sigBytes, n = [], i = 0; r > i; i++) {
                        var o = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                        n.push(String.fromCharCode(o));
                    }
                    return n.join("");
                },
                parse: function (t) {
                    for (var e = t.length, r = [], n = 0; e > n; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4) * 8);
                    return new o.init(r, e);
                },
            }),
            l = (a.Utf8 = {
                stringify: function (t) {
                    try {
                        return decodeURIComponent(escape(s.stringify(t)));
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data");
                    }
                },
                parse: function (t) {
                    return s.parse(unescape(encodeURIComponent(t)));
                },
            }),
            u = (n.BufferedBlockAlgorithm = i.extend({
                reset: function () {
                    (this._data = new o.init()), (this._nDataBytes = 0);
                },
                _append: function (t) {
                    "string" == typeof t && (t = l.parse(t)), this._data.concat(t), (this._nDataBytes += t.sigBytes);
                },
                _process: function (e) {
                    var r = this._data,
                        n = r.words,
                        i = r.sigBytes,
                        a = this.blockSize,
                        c = i / (4 * a),
                        s = (c = e ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0)) * a,
                        l = t.min(4 * s, i);
                    if (s) {
                        for (var u = 0; s > u; u += a) this._doProcessBlock(n, u);
                        var f = n.splice(0, s);
                        r.sigBytes -= l;
                    }
                    return new o.init(f, l);
                },
                clone: function () {
                    var t = i.clone.call(this);
                    return (t._data = this._data.clone()), t;
                },
                _minBufferSize: 0,
            })),
            f =
                ((n.Hasher = u.extend({
                    cfg: i.extend(),
                    init: function (t) {
                        (this.cfg = this.cfg.extend(t)), this.reset();
                    },
                    reset: function () {
                        u.reset.call(this), this._doReset();
                    },
                    update: function (t) {
                        return this._append(t), this._process(), this;
                    },
                    finalize: function (t) {
                        return t && this._append(t), this._doFinalize();
                    },
                    blockSize: 16,
                    _createHelper: function (t) {
                        return function (e, r) {
                            return new t.init(r).finalize(e);
                        };
                    },
                    _createHmacHelper: function (t) {
                        return function (e, r) {
                            return new f.HMAC.init(t, r).finalize(e);
                        };
                    },
                })),
                    (r.algo = {}));
        return r;
    })(Math);
!(function () {
    var t = CryptoJS,
        e = t.lib.WordArray;
    t.enc.Base64 = {
        stringify: function (t) {
            var e = t.words,
                r = t.sigBytes,
                n = this._map;
            t.clamp();
            for (var i = [], o = 0; r > o; o += 3)
                for (
                    var a = (((e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) << 16) | (((e[(o + 1) >>> 2] >>> (24 - ((o + 1) % 4) * 8)) & 255) << 8) | ((e[(o + 2) >>> 2] >>> (24 - ((o + 2) % 4) * 8)) & 255), c = 0;
                    4 > c && r > o + 0.75 * c;
                    c++
                )
                    i.push(n.charAt((a >>> (6 * (3 - c))) & 63));
            var s = n.charAt(64);
            if (s) for (; i.length % 4;) i.push(s);
            return i.join("");
        },
        parse: function (t) {
            var r = t.length,
                n = this._map,
                i = n.charAt(64);
            if (i) {
                var o = t.indexOf(i);
                -1 != o && (r = o);
            }
            for (var a = [], c = 0, s = 0; r > s; s++)
                if (s % 4) {
                    var l = n.indexOf(t.charAt(s - 1)) << ((s % 4) * 2),
                        u = n.indexOf(t.charAt(s)) >>> (6 - (s % 4) * 2);
                    (a[c >>> 2] |= (l | u) << (24 - (c % 4) * 8)), c++;
                }
            return e.create(a, c);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    };
})(),
    (function (t) {
        function e(t, e, r, n, i, o, a) {
            var c = t + ((e & r) | (~e & n)) + i + a;
            return ((c << o) | (c >>> (32 - o))) + e;
        }
        function r(t, e, r, n, i, o, a) {
            var c = t + ((e & n) | (r & ~n)) + i + a;
            return ((c << o) | (c >>> (32 - o))) + e;
        }
        function n(t, e, r, n, i, o, a) {
            var c = t + (e ^ r ^ n) + i + a;
            return ((c << o) | (c >>> (32 - o))) + e;
        }
        function i(t, e, r, n, i, o, a) {
            var c = t + (r ^ (e | ~n)) + i + a;
            return ((c << o) | (c >>> (32 - o))) + e;
        }
        var o = CryptoJS,
            a = o.lib,
            c = a.WordArray,
            s = a.Hasher,
            l = o.algo,
            u = [];
        !(function () {
            for (var e = 0; 64 > e; e++) u[e] = (4294967296 * t.abs(t.sin(e + 1))) | 0;
        })();
        var f = (l.MD5 = s.extend({
            _doReset: function () {
                this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]);
            },
            _doProcessBlock: function (t, o) {
                for (var a = 0; 16 > a; a++) {
                    var c = o + a,
                        s = t[c];
                    t[c] = (16711935 & ((s << 8) | (s >>> 24))) | (4278255360 & ((s << 24) | (s >>> 8)));
                }
                var l = this._hash.words,
                    f = t[o + 0],
                    h = t[o + 1],
                    d = t[o + 2],
                    p = t[o + 3],
                    y = t[o + 4],
                    v = t[o + 5],
                    m = t[o + 6],
                    g = t[o + 7],
                    k = t[o + 8],
                    b = t[o + 9],
                    _ = t[o + 10],
                    S = t[o + 11],
                    x = t[o + 12],
                    w = t[o + 13],
                    E = t[o + 14],
                    C = t[o + 15],
                    B = l[0],
                    T = l[1],
                    A = l[2],
                    O = l[3];
                (B = e(B, T, A, O, f, 7, u[0])),
                    (O = e(O, B, T, A, h, 12, u[1])),
                    (A = e(A, O, B, T, d, 17, u[2])),
                    (T = e(T, A, O, B, p, 22, u[3])),
                    (B = e(B, T, A, O, y, 7, u[4])),
                    (O = e(O, B, T, A, v, 12, u[5])),
                    (A = e(A, O, B, T, m, 17, u[6])),
                    (T = e(T, A, O, B, g, 22, u[7])),
                    (B = e(B, T, A, O, k, 7, u[8])),
                    (O = e(O, B, T, A, b, 12, u[9])),
                    (A = e(A, O, B, T, _, 17, u[10])),
                    (T = e(T, A, O, B, S, 22, u[11])),
                    (B = e(B, T, A, O, x, 7, u[12])),
                    (O = e(O, B, T, A, w, 12, u[13])),
                    (A = e(A, O, B, T, E, 17, u[14])),
                    (B = r(B, (T = e(T, A, O, B, C, 22, u[15])), A, O, h, 5, u[16])),
                    (O = r(O, B, T, A, m, 9, u[17])),
                    (A = r(A, O, B, T, S, 14, u[18])),
                    (T = r(T, A, O, B, f, 20, u[19])),
                    (B = r(B, T, A, O, v, 5, u[20])),
                    (O = r(O, B, T, A, _, 9, u[21])),
                    (A = r(A, O, B, T, C, 14, u[22])),
                    (T = r(T, A, O, B, y, 20, u[23])),
                    (B = r(B, T, A, O, b, 5, u[24])),
                    (O = r(O, B, T, A, E, 9, u[25])),
                    (A = r(A, O, B, T, p, 14, u[26])),
                    (T = r(T, A, O, B, k, 20, u[27])),
                    (B = r(B, T, A, O, w, 5, u[28])),
                    (O = r(O, B, T, A, d, 9, u[29])),
                    (A = r(A, O, B, T, g, 14, u[30])),
                    (B = n(B, (T = r(T, A, O, B, x, 20, u[31])), A, O, v, 4, u[32])),
                    (O = n(O, B, T, A, k, 11, u[33])),
                    (A = n(A, O, B, T, S, 16, u[34])),
                    (T = n(T, A, O, B, E, 23, u[35])),
                    (B = n(B, T, A, O, h, 4, u[36])),
                    (O = n(O, B, T, A, y, 11, u[37])),
                    (A = n(A, O, B, T, g, 16, u[38])),
                    (T = n(T, A, O, B, _, 23, u[39])),
                    (B = n(B, T, A, O, w, 4, u[40])),
                    (O = n(O, B, T, A, f, 11, u[41])),
                    (A = n(A, O, B, T, p, 16, u[42])),
                    (T = n(T, A, O, B, m, 23, u[43])),
                    (B = n(B, T, A, O, b, 4, u[44])),
                    (O = n(O, B, T, A, x, 11, u[45])),
                    (A = n(A, O, B, T, C, 16, u[46])),
                    (B = i(B, (T = n(T, A, O, B, d, 23, u[47])), A, O, f, 6, u[48])),
                    (O = i(O, B, T, A, g, 10, u[49])),
                    (A = i(A, O, B, T, E, 15, u[50])),
                    (T = i(T, A, O, B, v, 21, u[51])),
                    (B = i(B, T, A, O, x, 6, u[52])),
                    (O = i(O, B, T, A, p, 10, u[53])),
                    (A = i(A, O, B, T, _, 15, u[54])),
                    (T = i(T, A, O, B, h, 21, u[55])),
                    (B = i(B, T, A, O, k, 6, u[56])),
                    (O = i(O, B, T, A, C, 10, u[57])),
                    (A = i(A, O, B, T, m, 15, u[58])),
                    (T = i(T, A, O, B, w, 21, u[59])),
                    (B = i(B, T, A, O, y, 6, u[60])),
                    (O = i(O, B, T, A, S, 10, u[61])),
                    (A = i(A, O, B, T, d, 15, u[62])),
                    (T = i(T, A, O, B, b, 21, u[63])),
                    (l[0] = (l[0] + B) | 0),
                    (l[1] = (l[1] + T) | 0),
                    (l[2] = (l[2] + A) | 0),
                    (l[3] = (l[3] + O) | 0);
            },
            _doFinalize: function () {
                var e = this._data,
                    r = e.words,
                    n = 8 * this._nDataBytes,
                    i = 8 * e.sigBytes;
                r[i >>> 5] |= 128 << (24 - (i % 32));
                var o = t.floor(n / 4294967296),
                    a = n;
                (r[15 + (((i + 64) >>> 9) << 4)] = (16711935 & ((o << 8) | (o >>> 24))) | (4278255360 & ((o << 24) | (o >>> 8)))),
                    (r[14 + (((i + 64) >>> 9) << 4)] = (16711935 & ((a << 8) | (a >>> 24))) | (4278255360 & ((a << 24) | (a >>> 8)))),
                    (e.sigBytes = 4 * (r.length + 1)),
                    this._process();
                for (var c = this._hash, s = c.words, l = 0; 4 > l; l++) {
                    var u = s[l];
                    s[l] = (16711935 & ((u << 8) | (u >>> 24))) | (4278255360 & ((u << 24) | (u >>> 8)));
                }
                return c;
            },
            clone: function () {
                var t = s.clone.call(this);
                return (t._hash = this._hash.clone()), t;
            },
        }));
        (o.MD5 = s._createHelper(f)), (o.HmacMD5 = s._createHmacHelper(f));
    })(Math),
    (function () {
        var t = CryptoJS,
            e = t.lib,
            r = e.Base,
            n = e.WordArray,
            i = t.algo,
            o = i.MD5,
            a = (i.EvpKDF = r.extend({
                cfg: r.extend({ keySize: 4, hasher: o, iterations: 1 }),
                init: function (t) {
                    this.cfg = this.cfg.extend(t);
                },
                compute: function (t, e) {
                    for (var r = this.cfg, i = r.hasher.create(), o = n.create(), a = o.words, c = r.keySize, s = r.iterations; a.length < c;) {
                        l && i.update(l);
                        var l = i.update(t).finalize(e);
                        i.reset();
                        for (var u = 1; s > u; u++) (l = i.finalize(l)), i.reset();
                        o.concat(l);
                    }
                    return (o.sigBytes = 4 * c), o;
                },
            }));
        t.EvpKDF = function (t, e, r) {
            return a.create(r).compute(t, e);
        };
    })(),
    CryptoJS.lib.Cipher ||
    (function (t) {
        var e = CryptoJS,
            r = e.lib,
            n = r.Base,
            i = r.WordArray,
            o = r.BufferedBlockAlgorithm,
            a = e.enc,
            c = (a.Utf8, a.Base64),
            s = e.algo.EvpKDF,
            l = (r.Cipher = o.extend({
                cfg: n.extend(),
                createEncryptor: function (t, e) {
                    return this.create(this._ENC_XFORM_MODE, t, e);
                },
                createDecryptor: function (t, e) {
                    return this.create(this._DEC_XFORM_MODE, t, e);
                },
                init: function (t, e, r) {
                    (this.cfg = this.cfg.extend(r)), (this._xformMode = t), (this._key = e), this.reset();
                },
                reset: function () {
                    o.reset.call(this), this._doReset();
                },
                process: function (t) {
                    return this._append(t), this._process();
                },
                finalize: function (t) {
                    return t && this._append(t), this._doFinalize();
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: (function () {
                    function t(t) {
                        return "string" == typeof t ? g : v;
                    }
                    return function (e) {
                        return {
                            encrypt: function (r, n, i) {
                                return t(n).encrypt(e, r, n, i);
                            },
                            decrypt: function (r, n, i) {
                                return t(n).decrypt(e, r, n, i);
                            },
                        };
                    };
                })(),
            })),
            u =
                ((r.StreamCipher = l.extend({
                    _doFinalize: function () {
                        return this._process(!0);
                    },
                    blockSize: 1,
                })),
                    (e.mode = {})),
            f = (r.BlockCipherMode = n.extend({
                createEncryptor: function (t, e) {
                    return this.Encryptor.create(t, e);
                },
                createDecryptor: function (t, e) {
                    return this.Decryptor.create(t, e);
                },
                init: function (t, e) {
                    (this._cipher = t), (this._iv = e);
                },
            })),
            h = (u.CBC = (function () {
                function e(e, r, n) {
                    var i = this._iv;
                    if (i) {
                        var o = i;
                        this._iv = t;
                    } else o = this._prevBlock;
                    for (var a = 0; n > a; a++) e[r + a] ^= o[a];
                }
                var r = f.extend();
                return (
                    (r.Encryptor = r.extend({
                        processBlock: function (t, r) {
                            var n = this._cipher,
                                i = n.blockSize;
                            e.call(this, t, r, i), n.encryptBlock(t, r), (this._prevBlock = t.slice(r, r + i));
                        },
                    })),
                    (r.Decryptor = r.extend({
                        processBlock: function (t, r) {
                            var n = this._cipher,
                                i = n.blockSize,
                                o = t.slice(r, r + i);
                            n.decryptBlock(t, r), e.call(this, t, r, i), (this._prevBlock = o);
                        },
                    })),
                    r
                );
            })()),
            d = ((e.pad = {}).Pkcs7 = {
                pad: function (t, e) {
                    for (var r = 4 * e, n = r - (t.sigBytes % r), o = (n << 24) | (n << 16) | (n << 8) | n, a = [], c = 0; n > c; c += 4) a.push(o);
                    var s = i.create(a, n);
                    t.concat(s);
                },
                unpad: function (t) {
                    var e = 255 & t.words[(t.sigBytes - 1) >>> 2];
                    t.sigBytes -= e;
                },
            }),
            p =
                ((r.BlockCipher = l.extend({
                    cfg: l.cfg.extend({ mode: h, padding: d }),
                    reset: function () {
                        l.reset.call(this);
                        var t = this.cfg,
                            e = t.iv,
                            r = t.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) var n = r.createEncryptor;
                        else {
                            n = r.createDecryptor;
                            this._minBufferSize = 1;
                        }
                        this._mode = n.call(r, this, e && e.words);
                    },
                    _doProcessBlock: function (t, e) {
                        this._mode.processBlock(t, e);
                    },
                    _doFinalize: function () {
                        var t = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            t.pad(this._data, this.blockSize);
                            var e = this._process(!0);
                        } else {
                            e = this._process(!0);
                            t.unpad(e);
                        }
                        return e;
                    },
                    blockSize: 4,
                })),
                    (r.CipherParams = n.extend({
                        init: function (t) {
                            this.mixIn(t);
                        },
                        toString: function (t) {
                            return (t || this.formatter).stringify(this);
                        },
                    }))),
            y = ((e.format = {}).OpenSSL = {
                stringify: function (t) {
                    var e = t.ciphertext,
                        r = t.salt;
                    if (r) var n = i.create([1398893684, 1701076831]).concat(r).concat(e);
                    else n = e;
                    return n.toString(c);
                },
                parse: function (t) {
                    var e = c.parse(t),
                        r = e.words;
                    if (1398893684 == r[0] && 1701076831 == r[1]) {
                        var n = i.create(r.slice(2, 4));
                        r.splice(0, 4), (e.sigBytes -= 16);
                    }
                    return p.create({ ciphertext: e, salt: n });
                },
            }),
            v = (r.SerializableCipher = n.extend({
                cfg: n.extend({ format: y }),
                encrypt: function (t, e, r, n) {
                    n = this.cfg.extend(n);
                    var i = t.createEncryptor(r, n),
                        o = i.finalize(e),
                        a = i.cfg;
                    return p.create({ ciphertext: o, key: r, iv: a.iv, algorithm: t, mode: a.mode, padding: a.padding, blockSize: t.blockSize, formatter: n.format });
                },
                decrypt: function (t, e, r, n) {
                    return (n = this.cfg.extend(n)), (e = this._parse(e, n.format)), t.createDecryptor(r, n).finalize(e.ciphertext);
                },
                _parse: function (t, e) {
                    return "string" == typeof t ? e.parse(t, this) : t;
                },
            })),
            m = ((e.kdf = {}).OpenSSL = {
                execute: function (t, e, r, n) {
                    n || (n = i.random(8));
                    var o = s.create({ keySize: e + r }).compute(t, n),
                        a = i.create(o.words.slice(e), 4 * r);
                    return (o.sigBytes = 4 * e), p.create({ key: o, iv: a, salt: n });
                },
            }),
            g = (r.PasswordBasedCipher = v.extend({
                cfg: v.cfg.extend({ kdf: m }),
                encrypt: function (t, e, r, n) {
                    var i = (n = this.cfg.extend(n)).kdf.execute(r, t.keySize, t.ivSize);
                    n.iv = i.iv;
                    var o = v.encrypt.call(this, t, e, i.key, n);
                    return o.mixIn(i), o;
                },
                decrypt: function (t, e, r, n) {
                    (n = this.cfg.extend(n)), (e = this._parse(e, n.format));
                    var i = n.kdf.execute(r, t.keySize, t.ivSize, e.salt);
                    return (n.iv = i.iv), v.decrypt.call(this, t, e, i.key, n);
                },
            }));
    })(),
    (function () {
        var t = CryptoJS,
            e = t.lib.BlockCipher,
            r = t.algo,
            n = [],
            i = [],
            o = [],
            a = [],
            c = [],
            s = [],
            l = [],
            u = [],
            f = [],
            h = [];
        !(function () {
            for (var t = [], e = 0; 256 > e; e++) t[e] = 128 > e ? e << 1 : (e << 1) ^ 283;
            var r = 0,
                d = 0;
            for (e = 0; 256 > e; e++) {
                var p = d ^ (d << 1) ^ (d << 2) ^ (d << 3) ^ (d << 4);
                (p = (p >>> 8) ^ (255 & p) ^ 99), (n[r] = p), (i[p] = r);
                var y = t[r],
                    v = t[y],
                    m = t[v],
                    g = (257 * t[p]) ^ (16843008 * p);
                (o[r] = (g << 24) | (g >>> 8)), (a[r] = (g << 16) | (g >>> 16)), (c[r] = (g << 8) | (g >>> 24)), (s[r] = g);
                g = (16843009 * m) ^ (65537 * v) ^ (257 * y) ^ (16843008 * r);
                (l[p] = (g << 24) | (g >>> 8)), (u[p] = (g << 16) | (g >>> 16)), (f[p] = (g << 8) | (g >>> 24)), (h[p] = g), r ? ((r = y ^ t[t[t[m ^ y]]]), (d ^= t[t[d]])) : (r = d = 1);
            }
        })();
        var d = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            p = (r.AES = e.extend({
                _doReset: function () {
                    for (var t = this._key, e = t.words, r = t.sigBytes / 4, i = 4 * ((this._nRounds = r + 6) + 1), o = (this._keySchedule = []), a = 0; i > a; a++)
                        if (r > a) o[a] = e[a];
                        else {
                            var c = o[a - 1];
                            a % r
                                ? r > 6 && a % r == 4 && (c = (n[c >>> 24] << 24) | (n[(c >>> 16) & 255] << 16) | (n[(c >>> 8) & 255] << 8) | n[255 & c])
                                : ((c = (n[(c = (c << 8) | (c >>> 24)) >>> 24] << 24) | (n[(c >>> 16) & 255] << 16) | (n[(c >>> 8) & 255] << 8) | n[255 & c]), (c ^= d[(a / r) | 0] << 24)),
                                (o[a] = o[a - r] ^ c);
                        }
                    for (var s = (this._invKeySchedule = []), p = 0; i > p; p++) {
                        a = i - p;
                        if (p % 4) c = o[a];
                        else c = o[a - 4];
                        s[p] = 4 > p || 4 >= a ? c : l[n[c >>> 24]] ^ u[n[(c >>> 16) & 255]] ^ f[n[(c >>> 8) & 255]] ^ h[n[255 & c]];
                    }
                },
                encryptBlock: function (t, e) {
                    this._doCryptBlock(t, e, this._keySchedule, o, a, c, s, n);
                },
                decryptBlock: function (t, e) {
                    var r = t[e + 1];
                    (t[e + 1] = t[e + 3]), (t[e + 3] = r), this._doCryptBlock(t, e, this._invKeySchedule, l, u, f, h, i);
                    r = t[e + 1];
                    (t[e + 1] = t[e + 3]), (t[e + 3] = r);
                },
                _doCryptBlock: function (t, e, r, n, i, o, a, c) {
                    for (var s = this._nRounds, l = t[e] ^ r[0], u = t[e + 1] ^ r[1], f = t[e + 2] ^ r[2], h = t[e + 3] ^ r[3], d = 4, p = 1; s > p; p++) {
                        var y = n[l >>> 24] ^ i[(u >>> 16) & 255] ^ o[(f >>> 8) & 255] ^ a[255 & h] ^ r[d++],
                            v = n[u >>> 24] ^ i[(f >>> 16) & 255] ^ o[(h >>> 8) & 255] ^ a[255 & l] ^ r[d++],
                            m = n[f >>> 24] ^ i[(h >>> 16) & 255] ^ o[(l >>> 8) & 255] ^ a[255 & u] ^ r[d++],
                            g = n[h >>> 24] ^ i[(l >>> 16) & 255] ^ o[(u >>> 8) & 255] ^ a[255 & f] ^ r[d++];
                        (l = y), (u = v), (f = m), (h = g);
                    }
                    (y = ((c[l >>> 24] << 24) | (c[(u >>> 16) & 255] << 16) | (c[(f >>> 8) & 255] << 8) | c[255 & h]) ^ r[d++]),
                        (v = ((c[u >>> 24] << 24) | (c[(f >>> 16) & 255] << 16) | (c[(h >>> 8) & 255] << 8) | c[255 & l]) ^ r[d++]),
                        (m = ((c[f >>> 24] << 24) | (c[(h >>> 16) & 255] << 16) | (c[(l >>> 8) & 255] << 8) | c[255 & u]) ^ r[d++]),
                        (g = ((c[h >>> 24] << 24) | (c[(l >>> 16) & 255] << 16) | (c[(u >>> 8) & 255] << 8) | c[255 & f]) ^ r[d++]);
                    (t[e] = y), (t[e + 1] = v), (t[e + 2] = m), (t[e + 3] = g);
                },
                keySize: 8,
            }));
        t.AES = e._createHelper(p);
    })();
var aesCrypto = {};
!(function (t) {
    "use strict";
    (t.formatter = {
        prefix: "",
        stringify: function (t) {
            var e = this.prefix;
            return (e += t.salt.toString()) + t.ciphertext.toString();
        },
        parse: function (t) {
            var e = CryptoJS.lib.CipherParams.create({}),
                r = this.prefix.length;
            return 0 !== t.indexOf(this.prefix) ? e : ((e.ciphertext = CryptoJS.enc.Hex.parse(t.substring(16 + r))), (e.salt = CryptoJS.enc.Hex.parse(t.substring(r, 16 + r))), e);
        },
    }),
        (t.encrypt = function (e, r) {
            try {
                return CryptoJS.AES.encrypt(e, r, { format: t.formatter }).toString();
            } catch (t) {
                return "";
            }
        }),
        (t.decrypt = function (e, r) {
            try {
                return CryptoJS.AES.decrypt(e, r, { format: t.formatter }).toString(CryptoJS.enc.Utf8);
            } catch (t) {
                return "";
            }
        });
})(aesCrypto);
var setGotolink = $(gotolink).text();
$(document).ready(function () {
    $.urlParam = function (t) {
        var e = new RegExp("[?&]" + t + "=([^&#]*)").exec(window.location.href);
        return null == e ? null : decodeURI(e[1]) || 0;
    };
    var wcGetLink = $("#wcGetLink"),
        gotolink = $("#gotolink"),
        timer = $("#timer");
    function gotolinkcountdown() {
        var t = 30;
        gotolink.removeClass("hidden");
        var e = setInterval(function () {
            var r = (t -= 1);
            gotolink.html(setText), r < 0 && (clearInterval(e), gotolink.prop("disabled", !1), gotolink.html(setGotolink));
        }, 1e3);
    }
    null != $.urlParam("o") &&
        timer.pietimer({
            timerSeconds: setTimer,
            color: setColor,
            fill: !1,
            showPercentage: !0,
            callback: function () {
                wcGetLink.prop("disabled", !1), wcGetLink.removeClass("hidden"), timer.addClass("hidden");
            },
        });
    var request = !1;
    $(document).ready(function () {
        $("#wcGetLink").load(function () {
            0 == request && (gotolinkcountdown(), (request = !0));
        });
    });
    gotolink.on("click", function () {
        var t = aesCrypto.decrypt(convertstr($.urlParam("o")), convertstr("root"));
        window.location.href = t;
    }),
        on(!1, function () { });
});
