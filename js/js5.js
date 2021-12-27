/* Modernizr 2.0.6 (Custom Build) | MIT & BSD */ ;
window.Modernizr = function(a, b, c) {
        function D(a, b) {
            var c = a.charAt(0).toUpperCase() + a.substr(1),
                d = (a + " " + o.join(c + " ") + c).split(" ");
            return C(d, b)
        }

        function C(a, b) {
            for (var d in a)
                if (k[a[d]] !== c) return b == "pfx" ? a[d] : !0;
            return !1
        }

        function B(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function A(a, b) {
            return typeof a === b
        }

        function z(a, b) {
            return y(n.join(a + ";") + (b || ""))
        }

        function y(a) {
            k.cssText = a
        }
        var d = "2.0.6",
            e = {},
            f = !0,
            g = b.documentElement,
            h = b.head || b.getElementsByTagName("head")[0],
            i = "modernizr",
            j = b.createElement(i),
            k = j.style,
            l, m = Object.prototype.toString,
            n = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
            o = "Webkit Moz O ms Khtml".split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = function(a, c, d, e) {
                var f, h, j, k = b.createElement("div");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : i + (d + 1), k.appendChild(j);
                f = ["&shy;", "<style>", a, "</style>"].join(""), k.id = i, k.innerHTML += f, g.appendChild(k), h = c(k, a), k.parentNode.removeChild(k);
                return !!h
            },
            u = function(b) {
                if (a.matchMedia) return matchMedia(b).matches;
                var c;
                t("@media " + b + " { #" + i + " { position: absolute; } }", function(b) {
                    c = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position == "absolute"
                });
                return c
            },
            v, w = {}.hasOwnProperty,
            x;
        !A(w, c) && !A(w.call, c) ? x = function(a, b) {
            return w.call(a, b)
        } : x = function(a, b) {
            return b in a && A(a.constructor.prototype[b], c)
        }, p.rgba = function() {
            y("background-color:rgba(150,255,150,.5)");
            return B(k.backgroundColor, "rgba")
        }, p.boxshadow = function() {
            return D("boxShadow")
        }, p.csstransitions = function() {
            return D("transitionProperty")
        };
        for (var E in p) x(p, E) && (v = E.toLowerCase(), e[v] = p[E](), s.push((e[v] ? "" : "no-") + v));
        e.addTest = function(a, b) {
            if (typeof a == "object")
                for (var d in a) x(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return;
                b = typeof b == "boolean" ? b : !!b(), g.className += " " + (b ? "" : "no-") + a, e[a] = b
            }
            return e
        }, y(""), j = l = null, a.attachEvent && function() {
            var a = b.createElement("div");
            a.innerHTML = "<elem></elem>";
            return a.childNodes.length !== 1
        }() && function(a, b) {
            function s(a) {
                var b = -1;
                while (++b < g) a.createElement(f[b])
            }
            a.iepp = a.iepp || {};
            var d = a.iepp,
                e = d.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                f = e.split("|"),
                g = f.length,
                h = new RegExp("(^|\\s)(" + e + ")", "gi"),
                i = new RegExp("<(/*)(" + e + ")", "gi"),
                j = /^\s*[\{\}]\s*$/,
                k = new RegExp("(^|[^\\n]*?\\s)(" + e + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
                l = b.createDocumentFragment(),
                m = b.documentElement,
                n = m.firstChild,
                o = b.createElement("body"),
                p = b.createElement("style"),
                q = /print|all/,
                r;
            d.getCSS = function(a, b) {
                if (a + "" === c) return "";
                var e = -1,
                    f = a.length,
                    g, h = [];
                while (++e < f) {
                    g = a[e];
                    if (g.disabled) continue;
                    b = g.media || b, q.test(b) && h.push(d.getCSS(g.imports, b), g.cssText), b = "all"
                }
                return h.join("")
            }, d.parseCSS = function(a) {
                var b = [],
                    c;
                while ((c = k.exec(a)) != null) b.push(((j.exec(c[1]) ? "\n" : c[1]) + c[2] + c[3]).replace(h, "$1.iepp_$2") + c[4]);
                return b.join("\n")
            }, d.writeHTML = function() {
                var a = -1;
                r = r || b.body;
                while (++a < g) {
                    var c = b.getElementsByTagName(f[a]),
                        d = c.length,
                        e = -1;
                    while (++e < d) c[e].className.indexOf("iepp_") < 0 && (c[e].className += " iepp_" + f[a])
                }
                l.appendChild(r), m.appendChild(o), o.className = r.className, o.id = r.id, o.innerHTML = r.innerHTML.replace(i, "<$1font")
            }, d._beforePrint = function() {
                p.styleSheet.cssText = d.parseCSS(d.getCSS(b.styleSheets, "all")), d.writeHTML()
            }, d.restoreHTML = function() {
                o.innerHTML = "", m.removeChild(o), m.appendChild(r)
            }, d._afterPrint = function() {
                d.restoreHTML(), p.styleSheet.cssText = ""
            }, s(b), s(l);
            d.disablePP || (n.insertBefore(p, n.firstChild), p.media = "print", p.className = "iepp-printshim", a.attachEvent("onbeforeprint", d._beforePrint), a.attachEvent("onafterprint", d._afterPrint))
        }(a, b), e._version = d, e._prefixes = n, e._domPrefixes = o, e.mq = u, e.testProp = function(a) {
            return C([a])
        }, e.testAllProps = D, e.testStyles = t, g.className = g.className.replace(/\bno-js\b/, "") + (f ? " js " + s.join(" ") : "");
        return e
    }(this, this.document),
    function(a, b) {
        function u() {
            r(!0)
        }
        a.respond = {}, respond.update = function() {}, respond.mediaQueriesSupported = b;
        if (!b) {
            var c = a.document,
                d = c.documentElement,
                e = [],
                f = [],
                g = [],
                h = {},
                i = 30,
                j = c.getElementsByTagName("head")[0] || d,
                k = j.getElementsByTagName("link"),
                l = [],
                m = function() {
                    var b = k,
                        c = b.length,
                        d = 0,
                        e, f, g, i;
                    for (; d < c; d++) e = b[d], f = e.href, g = e.media, i = e.rel && e.rel.toLowerCase() === "stylesheet", !!f && i && !h[f] && (!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f) || f.replace(RegExp.$1, "").split("/")[0] === a.location.host ? l.push({
                        href: f,
                        media: g
                    }) : h[f] = !0);
                    n()
                },
                n = function() {
                    if (l.length) {
                        var a = l.shift();
                        s(a.href, function(b) {
                            o(b, a.href, a.media), h[a.href] = !0, n()
                        })
                    }
                },
                o = function(a, b, c) {
                    var d = a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),
                        g = d && d.length || 0,
                        b = b.substring(0, b.lastIndexOf("/")),
                        h = function(a) {
                            return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
                        },
                        i = !g && c,
                        j = 0,
                        k, l, m, n, o;
                    b.length && (b += "/"), i && (g = 1);
                    for (; j < g; j++) {
                        k = 0, i ? (l = c, f.push(h(a))) : (l = d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, f.push(RegExp.$2 && h(RegExp.$2))), n = l.split(","), o = n.length;
                        for (; k < o; k++) m = n[k], e.push({
                            media: m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/) && RegExp.$2,
                            rules: f.length - 1,
                            minw: m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1),
                            maxw: m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1)
                        })
                    }
                    r()
                },
                p, q, r = function(a) {
                    var b = "clientWidth",
                        h = d[b],
                        l = c.compatMode === "CSS1Compat" && h || c.body[b] || h,
                        m = {},
                        n = c.createDocumentFragment(),
                        o = k[k.length - 1],
                        s = (new Date).getTime();
                    if (a && p && s - p < i) clearTimeout(q), q = setTimeout(r, i);
                    else {
                        p = s;
                        for (var t in e) {
                            var u = e[t];
                            if (!u.minw && !u.maxw || (!u.minw || u.minw && l >= u.minw) && (!u.maxw || u.maxw && l <= u.maxw)) m[u.media] || (m[u.media] = []), m[u.media].push(f[u.rules])
                        }
                        for (var t in g) g[t] && g[t].parentNode === j && j.removeChild(g[t]);
                        for (var t in m) {
                            var v = c.createElement("style"),
                                w = m[t].join("\n");
                            v.type = "text/css", v.media = t, v.styleSheet ? v.styleSheet.cssText = w : v.appendChild(c.createTextNode(w)), n.appendChild(v), g.push(v)
                        }
                        j.insertBefore(n, o.nextSibling)
                    }
                },
                s = function(a, b) {
                    var c = t();
                    if (!!c) {
                        c.open("GET", a, !0), c.onreadystatechange = function() {
                            c.readyState == 4 && (c.status == 200 || c.status == 304) && b(c.responseText)
                        };
                        if (c.readyState == 4) return;
                        c.send()
                    }
                },
                t = function() {
                    var a = !1,
                        b = [function() {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        }, function() {
                            return new XMLHttpRequest
                        }],
                        c = b.length;
                    while (c--) {
                        try {
                            a = b[c]()
                        } catch (d) {
                            continue
                        }
                        break
                    }
                    return function() {
                        return a
                    }
                }();
            m(), respond.update = m, a.addEventListener ? a.addEventListener("resize", u, !1) : a.attachEvent && a.attachEvent("onresize", u)
        }
    }(this, Modernizr.mq("only all")),
    function(a, b, c) {
        function k(a) {
            return !a || a == "loaded" || a == "complete"
        }

        function j() {
            var a = 1,
                b = -1;
            while (p.length - ++b)
                if (p[b].s && !(a = p[b].r)) break;
            a && g()
        }

        function i(a) {
            var c = b.createElement("script"),
                d;
            c.src = a.s, c.onreadystatechange = c.onload = function() {
                !d && k(c.readyState) && (d = 1, j(), c.onload = c.onreadystatechange = null)
            }, m(function() {
                d || (d = 1, j())
            }, H.errorTimeout), a.e ? c.onload() : n.parentNode.insertBefore(c, n)
        }

        function h(a) {
            var c = b.createElement("link"),
                d;
            c.href = a.s, c.rel = "stylesheet", c.type = "text/css";
            if (!a.e && (w || r)) {
                var e = function(a) {
                    m(function() {
                        if (!d) try {
                            a.sheet.cssRules.length ? (d = 1, j()) : e(a)
                        } catch (b) {
                            b.code == 1e3 || b.message == "security" || b.message == "denied" ? (d = 1, m(function() {
                                j()
                            }, 0)) : e(a)
                        }
                    }, 0)
                };
                e(c)
            } else c.onload = function() {
                d || (d = 1, m(function() {
                    j()
                }, 0))
            }, a.e && c.onload();
            m(function() {
                d || (d = 1, j())
            }, H.errorTimeout), !a.e && n.parentNode.insertBefore(c, n)
        }

        function g() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                a.t == "c" ? h(a) : i(a)
            }, 0) : (a(), j()) : q = 0
        }

        function f(a, c, d, e, f, h) {
            function i() {
                !o && k(l.readyState) && (r.r = o = 1, !q && j(), l.onload = l.onreadystatechange = null, m(function() {
                    u.removeChild(l)
                }, 0))
            }
            var l = b.createElement(a),
                o = 0,
                r = {
                    t: d,
                    s: c,
                    e: h
                };
            l.src = l.data = c, !s && (l.style.display = "none"), l.width = l.height = "0", a != "object" && (l.type = d), l.onload = l.onreadystatechange = i, a == "img" ? l.onerror = i : a == "script" && (l.onerror = function() {
                r.e = r.r = 1, g()
            }), p.splice(e, 0, r), u.insertBefore(l, s ? null : n), m(function() {
                o || (u.removeChild(l), r.r = r.e = o = 1, j())
            }, H.errorTimeout)
        }

        function e(a, b, c) {
            var d = b == "c" ? z : y;
            q = 0, b = b || "j", C(a) ? f(d, a, b, this.i++, l, c) : (p.splice(this.i++, 0, a), p.length == 1 && g());
            return this
        }

        function d() {
            var a = H;
            a.loader = {
                load: e,
                i: 0
            };
            return a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = r && !s,
            u = s ? l : n.parentNode,
            v = a.opera && o.call(a.opera) == "[object Opera]",
            w = "webkitAppearance" in l.style,
            x = w && "async" in b.createElement("script"),
            y = r ? "object" : v || x ? "img" : "script",
            z = w ? "img" : y,
            A = Array.isArray || function(a) {
                return o.call(a) == "[object Array]"
            },
            B = function(a) {
                return Object(a) === a
            },
            C = function(a) {
                return typeof a == "string"
            },
            D = function(a) {
                return o.call(a) == "[object Function]"
            },
            E = [],
            F = {},
            G, H;
        H = function(a) {
            function f(a) {
                var b = a.split("!"),
                    c = E.length,
                    d = b.pop(),
                    e = b.length,
                    f = {
                        url: d,
                        origUrl: d,
                        prefixes: b
                    },
                    g, h;
                for (h = 0; h < e; h++) g = F[b[h]], g && (f = g(f));
                for (h = 0; h < c; h++) f = E[h](f);
                return f
            }

            function e(a, b, e, g, h) {
                var i = f(a),
                    j = i.autoCallback;
                if (!i.bypass) {
                    b && (b = D(b) ? b : b[a] || b[g] || b[a.split("/").pop().split("?")[0]]);
                    if (i.instead) return i.instead(a, b, e, g, h);
                    e.load(i.url, i.forceCSS || !i.forceJS && /css$/.test(i.url) ? "c" : c, i.noexec), (D(b) || D(j)) && e.load(function() {
                        d(), b && b(i.origUrl, h, g), j && j(i.origUrl, h, g)
                    })
                }
            }

            function b(a, b) {
                function c(a) {
                    if (C(a)) e(a, h, b, 0, d);
                    else if (B(a))
                        for (i in a) a.hasOwnProperty(i) && e(a[i], h, b, i, d)
                }
                var d = !!a.test,
                    f = d ? a.yep : a.nope,
                    g = a.load || a.both,
                    h = a.callback,
                    i;
                c(f), c(g), a.complete && b.load(a.complete)
            }
            var g, h, i = this.yepnope.loader;
            if (C(a)) e(a, 0, i, 0);
            else if (A(a))
                for (g = 0; g < a.length; g++) h = a[g], C(h) ? e(h, 0, i, 0) : A(h) ? H(h) : B(h) && b(h, i);
            else B(a) && b(a, i)
        }, H.addPrefix = function(a, b) {
            F[a] = b
        }, H.addFilter = function(a) {
            E.push(a)
        }, H.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", G = function() {
            b.removeEventListener("DOMContentLoaded", G, 0), b.readyState = "complete"
        }, 0)), a.yepnope = d()
    }(this, this.document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };;
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/customize/?id=46b88518c4aaf33add50a5bcf39dc25d)
 * Config saved to config.json and https://gist.github.com/46b88518c4aaf33add50a5bcf39dc25d
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        o = function(e) {
            t(e).on("click", i, this.close)
        };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t("#" === s ? [] : s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function(e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function() {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var o = t(i.target).closest(".btn");
        e.call(o, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, o) {
        var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = o, this
    };
    var n = function(i) {
        var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function() {
            var o = t(this),
                n = e(o),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function o(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        a = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function(o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n),
                a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, a.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o),
                    a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, o) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var o = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var o = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var v = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = window.SVGElement && i instanceof window.SVGElement,
            a = o ? {
                top: 0,
                left: 0
            } : s ? null : e.offset(),
            r = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, r, l, a)
    }, i.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = o, this
    };
    var n = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top,
            h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = o, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0,
                            this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var n = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);;
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function() {
    'use strict';

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }

})();;
/*
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

(function($) {
    $.fn.viewportChecker = function(useroptions) {
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            classToRemove: 'invisible',
            classToAddForFullView: 'full-visible',
            removeClassAfterAnimation: false,
            offset: 100,
            repeat: false,
            invertBottomOffset: true,
            callbackFunction: function(elem, action) {},
            scrollHorizontal: false,
            scrollBox: window
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            boxSize = {
                height: $(options.scrollBox).height(),
                width: $(options.scrollBox).width()
            };

        /*
         * Main method that checks the elements and adds or removes the class(es)
         */
        this.checkElements = function() {
            var viewportStart, viewportEnd;

            // Set some vars to check with
            if (!options.scrollHorizontal) {
                viewportStart = Math.max(
                    $('html').scrollTop(),
                    $('body').scrollTop(),
                    $(window).scrollTop()
                );
                viewportEnd = (viewportStart + boxSize.height);
            } else {
                viewportStart = Math.max(
                    $('html').scrollLeft(),
                    $('body').scrollLeft(),
                    $(window).scrollLeft()
                );
                viewportEnd = (viewportStart + boxSize.width);
            }

            // Loop through all given dom elements
            $elem.each(function() {
                var $obj = $(this),
                    objOptions = {},
                    attrOptions = {};

                //  Get any individual attribution data
                if ($obj.data('vp-add-class'))
                    attrOptions.classToAdd = $obj.data('vp-add-class');
                if ($obj.data('vp-remove-class'))
                    attrOptions.classToRemove = $obj.data('vp-remove-class');
                if ($obj.data('vp-add-class-full-view'))
                    attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
                if ($obj.data('vp-keep-add-class'))
                    attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
                if ($obj.data('vp-offset'))
                    attrOptions.offset = $obj.data('vp-offset');
                if ($obj.data('vp-repeat'))
                    attrOptions.repeat = $obj.data('vp-repeat');
                if ($obj.data('vp-scrollHorizontal'))
                    attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
                if ($obj.data('vp-invertBottomOffset'))
                    attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');

                // Extend objOptions with data attributes and default options
                $.extend(objOptions, options);
                $.extend(objOptions, attrOptions);

                // If class already exists; quit
                if ($obj.data('vp-animated') && !objOptions.repeat) {
                    return;
                }

                // Check if the offset is percentage based
                if (String(objOptions.offset).indexOf("%") > 0)
                    objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;

                // Get the raw start and end positions
                var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
                    rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();

                // Add the defined offset
                var elemStart = Math.round(rawStart) + objOptions.offset,
                    elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();

                if (objOptions.invertBottomOffset)
                    elemEnd -= (objOptions.offset * 2);

                // Add class if in viewport
                if ((elemStart < viewportEnd) && (elemEnd > viewportStart)) {

                    // Remove class
                    $obj.removeClass(objOptions.classToRemove);
                    $obj.addClass(objOptions.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    objOptions.callbackFunction($obj, "add");

                    // Check if full element is in view
                    if (rawEnd <= viewportEnd && rawStart >= viewportStart)
                        $obj.addClass(objOptions.classToAddForFullView);
                    else
                        $obj.removeClass(objOptions.classToAddForFullView);

                    // Set element as already animated
                    $obj.data('vp-animated', true);

                    if (objOptions.removeClassAfterAnimation) {
                        $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $obj.removeClass(objOptions.classToAdd);
                        });
                    }

                    // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)) {
                    $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);

                    // Do the callback function.
                    objOptions.callbackFunction($obj, "remove");

                    // Remove already-animated-flag
                    $obj.data('vp-animated', false);
                }
            });

        };

        /**
         * Binding the correct event listener is still a tricky thing.
         * People have expierenced sloppy scrolling when both scroll and touch
         * events are added, but to make sure devices with both scroll and touch
         * are handles too we always have to add the window.scroll event
         *
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
         */

        // Select the correct events
        if ('ontouchstart' in window || 'onmsgesturechange' in window) {
            // Device with touchscreen
            $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
        }

        // Always load on window load
        $(options.scrollBox).bind("load scroll", this.checkElements);

        // On resize change the height var
        $(window).resize(function(e) {
            boxSize = {
                height: $(options.scrollBox).height(),
                width: $(options.scrollBox).width()
            };
            $elem.checkElements();
        });

        // trigger inital check if elements already visible
        this.checkElements();

        // Default jquery plugin behaviour
        return this;
    };
})(jQuery);;
/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */

/* global jQuery */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    'use strict';

    var readmore = 'readmore',
        defaults = {
            speed: 100,
            collapsedHeight: 200,
            heightMargin: 16,
            moreLink: '<a href="#">Read More</a>',
            lessLink: '<a href="#">Close</a>',
            embedCSS: true,
            blockCSS: 'display: block; width: 100%;',
            startOpen: false,

            // callbacks
            blockProcessed: function() {},
            beforeToggle: function() {},
            afterToggle: function() {}
        },
        cssEmbedded = {},
        uniqueIdCounter = 0;

    function debounce(func, wait, immediate) {
        var timeout;

        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
                func.apply(context, args);
            }
        };
    }

    function uniqueId(prefix) {
        var id = ++uniqueIdCounter;

        return String(prefix == null ? 'rmjs-' : prefix) + id;
    }

    function setBoxHeights(element) {
        var el = element.clone().css({
                height: 'auto',
                width: element.width(),
                maxHeight: 'none',
                overflow: 'hidden'
            }).insertAfter(element),
            expandedHeight = el.outerHeight(),
            cssMaxHeight = parseInt(el.css({
                maxHeight: ''
            }).css('max-height').replace(/[^-\d\.]/g, ''), 10),
            defaultHeight = element.data('defaultHeight');

        el.remove();

        var collapsedHeight = cssMaxHeight || element.data('collapsedHeight') || defaultHeight;

        // Store our measurements.
        element.data({
                expandedHeight: expandedHeight,
                maxHeight: cssMaxHeight,
                collapsedHeight: collapsedHeight
            })
            // and disable any `max-height` property set in CSS
            .css({
                maxHeight: 'none'
            });
    }

    var resizeBoxes = debounce(function() {
        $('[data-readmore]').each(function() {
            var current = $(this),
                isExpanded = (current.attr('aria-expanded') === 'true');

            setBoxHeights(current);

            current.css({
                height: current.data((isExpanded ? 'expandedHeight' : 'collapsedHeight'))
            });
        });
    }, 100);

    function embedCSS(options) {
        if (!cssEmbedded[options.selector]) {
            var styles = ' ';

            if (options.embedCSS && options.blockCSS !== '') {
                styles += options.selector + ' + [data-readmore-toggle], ' +
                    options.selector + '[data-readmore]{' +
                    options.blockCSS +
                    '}';
            }

            // Include the transition CSS even if embedCSS is false
            styles += options.selector + '[data-readmore]{' +
                'transition: height ' + options.speed + 'ms;' +
                'overflow: hidden;' +
                '}';

            (function(d, u) {
                var css = d.createElement('style');
                css.type = 'text/css';

                if (css.styleSheet) {
                    css.styleSheet.cssText = u;
                } else {
                    css.appendChild(d.createTextNode(u));
                }

                d.getElementsByTagName('head')[0].appendChild(css);
            }(document, styles));

            cssEmbedded[options.selector] = true;
        }
    }

    function Readmore(element, options) {
        this.element = element;

        this.options = $.extend({}, defaults, options);

        embedCSS(this.options);

        this._defaults = defaults;
        this._name = readmore;

        this.init();

        // IE8 chokes on `window.addEventListener`, so need to test for support.
        if (window.addEventListener) {
            // Need to resize boxes when the page has fully loaded.
            window.addEventListener('load', resizeBoxes);
            window.addEventListener('resize', resizeBoxes);
        } else {
            window.attachEvent('load', resizeBoxes);
            window.attachEvent('resize', resizeBoxes);
        }
    }


    Readmore.prototype = {
        init: function() {
            var current = $(this.element);

            current.data({
                defaultHeight: this.options.collapsedHeight,
                heightMargin: this.options.heightMargin
            });

            setBoxHeights(current);

            var collapsedHeight = current.data('collapsedHeight'),
                heightMargin = current.data('heightMargin');

            if (current.outerHeight(true) <= collapsedHeight + heightMargin) {
                // The block is shorter than the limit, so there's no need to truncate it.
                if (this.options.blockProcessed && typeof this.options.blockProcessed === 'function') {
                    this.options.blockProcessed(current, false);
                }
                return true;
            } else {
                var id = current.attr('id') || uniqueId(),
                    useLink = this.options.startOpen ? this.options.lessLink : this.options.moreLink;

                current.attr({
                    'data-readmore': '',
                    'aria-expanded': this.options.startOpen,
                    'id': id
                });

                current.after($(useLink)
                    .on('click', (function(_this) {
                        return function(event) {
                            _this.toggle(this, current[0], event);
                        };
                    })(this))
                    .attr({
                        'data-readmore-toggle': id,
                        'aria-controls': id
                    }));

                if (!this.options.startOpen) {
                    current.css({
                        height: collapsedHeight
                    });
                }

                if (this.options.blockProcessed && typeof this.options.blockProcessed === 'function') {
                    this.options.blockProcessed(current, true);
                }
            }
        },

        toggle: function(trigger, element, event) {
            if (event) {
                event.preventDefault();
            }

            if (!trigger) {
                trigger = $('[aria-controls="' + this.element.id + '"]')[0];
            }

            if (!element) {
                element = this.element;
            }

            var $element = $(element),
                newHeight = '',
                newLink = '',
                expanded = false,
                collapsedHeight = $element.data('collapsedHeight');

            if ($element.height() <= collapsedHeight) {
                newHeight = $element.data('expandedHeight') + 'px';
                newLink = 'lessLink';
                expanded = true;
            } else {
                newHeight = collapsedHeight;
                newLink = 'moreLink';
            }

            // Fire beforeToggle callback
            // Since we determined the new "expanded" state above we're now out of sync
            // with our true current state, so we need to flip the value of `expanded`
            if (this.options.beforeToggle && typeof this.options.beforeToggle === 'function') {
                this.options.beforeToggle(trigger, $element, !expanded);
            }

            $element.css({
                'height': newHeight
            });

            // Fire afterToggle callback
            $element.on('transitionend', (function(_this) {
                return function() {
                    if (_this.options.afterToggle && typeof _this.options.afterToggle === 'function') {
                        _this.options.afterToggle(trigger, $element, expanded);
                    }

                    $(this).attr({
                        'aria-expanded': expanded
                    }).off('transitionend');
                }
            })(this));

            $(trigger).replaceWith($(this.options[newLink])
                .on('click', (function(_this) {
                    return function(event) {
                        _this.toggle(this, element, event);
                    };
                })(this))
                .attr({
                    'data-readmore-toggle': $element.attr('id'),
                    'aria-controls': $element.attr('id')
                }));
        },

        destroy: function() {
            $(this.element).each(function() {
                var current = $(this);

                current.attr({
                        'data-readmore': null,
                        'aria-expanded': null
                    })
                    .css({
                        maxHeight: '',
                        height: ''
                    })
                    .next('[data-readmore-toggle]')
                    .remove();

                current.removeData();
            });
        }
    };


    $.fn.readmore = function(options) {
        var args = arguments,
            selector = this.selector;

        options = options || {};

        if (typeof options === 'object') {
            return this.each(function() {
                if ($.data(this, 'plugin_' + readmore)) {
                    var instance = $.data(this, 'plugin_' + readmore);
                    instance.destroy.apply(instance);
                }

                options.selector = selector;

                $.data(this, 'plugin_' + readmore, new Readmore(this, options));
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function() {
                var instance = $.data(this, 'plugin_' + readmore);
                if (instance instanceof Readmore && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
            });
        }
    };

}));

;
// Highlight Nav
jQuery(document).ready(function() {
    setTimeout("highlightNav()", 100);
    jQuery(".ga-code").click(function() {
        ga_attr = jQuery(this).attr("ga");
        ga_arr = ga_attr.split("|");
        ga(ga_arr[0], ga_arr[1], ga_arr[2], ga_arr[3]);
        return true;
    });
    jQuery('#status').fadeOut(); // will first fade out the loading animation
    jQuery('#preloader').delay(300).fadeOut('slow');
    jQuery('#searchSubmit').click(function() {
        key = jQuery('input[name="q"]').val();
        key = key.replace(/ /gi, "+");
        location.href = Drupal.settings.basePath + "search?title=" + key + "&body_value=" + key + "&field_short_description_value=" + key;
    })

    //Read More
    /*jQuery('article').readmore({
    	moreLink: '<span class="text-right"><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></span>',
    	lessLink: '<span class="text-right"><a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a></span>',
    	speed: 700,
    	collapsedHeight: 480,
    	afterToggle: function(trigger, element, expanded) {
    	if(! expanded) { // The "Close" link was clicked
    	  jQuery('html, body').animate({scrollTop: element.offset().top}, {duration: 250});
    	}
      }
    });*/

    var inputs = jQuery('input, textarea');
    jQuery(inputs).each(function(index, input) {
        if (jQuery(input).hasClass('error')) {
            jQuery(input).parent().siblings('p').addClass('error');
        }
    });

});

/*function highlightNav() {
    var str = location.href.toLowerCase();
    jQuery(".sf-menu li a, .navbar-nav > li > a").each(function () {
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            jQuery(".sf-menu li.current, .navbar-nav > li.current").removeClass("current");
            jQuery(this).parent().addClass("current");
        }
    });
    jQuery("li.current").parents().each(function () {
        if (jQuery(this).is("li")) {
            jQuery(this).addClass("current");
        }
    });
}*/

function highlightNav() {
    var str = location.href.toLowerCase();
    jQuery(".navbar-nav > li a").each(function() {
        if (str.indexOf(this.href.toLowerCase()) > -1 && jQuery(this).attr("href") != "#" && jQuery.trim(jQuery(this).attr("href")) != "") {
            jQuery('.current').removeClass('current');
            jQuery(".navbar-nav > li a.current").removeClass("current");
            jQuery(this).parent().addClass("current");

            if (jQuery(this).parent().parent().parent().hasClass('dropdown')) {
                jQuery(this).parent().parent().parent().addClass('current');
            }
            if (jQuery(this).parent().parent().parent().parent().parent().hasClass('dropdown')) {
                jQuery(this).parent().parent().parent().parent().parent().addClass('current');
            }
        }
    });
    jQuery("li a.current").parents().each(function() {
        if (jQuery(this).is("li a")) {
            jQuery(this).addClass("current");
        }
    });
}

/*jQuery('.navbar-collapse').find('.dropdown').each(function() { 
jQuery(this).children('a').each(function() {                            
    var url = jQuery(this).attr('href');
    if(url != '#') {
        jQuery(this).attr('data-url',url);
        jQuery(this).attr('href','#');
    }
});
jQuery(this).children('a').click(function(e) {                        
    e.preventDefault();                            
});

if(jQuery(this).closest('.navbar-toggle').css('display') !== 'none') { // only on collapsed nav
    jQuery(this).on({                             
        "click" : function(e) {                                  
            if(e.target == jQuery(this).children('a').first().get(0)) {                 
                if(jQuery(this).hasClass('open')) {  
                   document.location.href = jQuery(this).children('a').first().attr("data-url");
                } else {
                    jQuery(this).addClass('open'); 
                }       
                e.stopImmediatePropagation();
                e.preventDefault();
                return false;                                
            }
        },
        "hide.bs.dropdown" : function(e) {
            e.preventDefault();
            return false;
        }
    });
}
});*/

//Header Bg
jQuery(function() {
    jQuery(window).on("scroll", function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery(".navbar-fixed-top").addClass("header-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            jQuery(".navbar-fixed-top").removeClass("header-active");
        }
    });
});

//Timer for Carousel
jQuery(document).ready(function() {
    //Events that reset and restart the timer animation when the slides change
    jQuery("#myCarousel").on("slide.bs.carousel", function(event) {
        //The animate class gets removed so that it jumps straight back to 0%
        jQuery(".transition-timer-carousel-progress-bar", this)
            .removeClass("animate").css("width", "0%");
    }).on("slid.bs.carousel", function(event) {
        //The slide transition finished, so re-add the animate class so that
        //the timer bar takes time to fill up
        jQuery(".transition-timer-carousel-progress-bar", this)
            .addClass("animate").css("width", "100%");
    });

    //Kick off the initial slide animation when the document is ready
    jQuery(".transition-timer-carousel-progress-bar", "#myCarousel")
        .css("width", "100%");


});

//Animated
jQuery(document).ready(function() {
    jQuery('.mydata').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 200
    });
});

//Scroll Up
jQuery(document).ready(function() {
    if (jQuery(window).scrollTop() <= 100) {
        jQuery('#scrollUp').hide();
    }
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#scrollUp').fadeIn();
        } else {
            jQuery('#scrollUp').fadeOut();
        }
    });
    jQuery('#scrollUp').click(function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    var globalFormBtn = document.querySelector("#scrollUp .global-form-btn");
    jQuery(globalFormBtn).click(function(event) {
        event.stopPropagation();
        jQuery("#initEnq").trigger("click");
    });
    //Read More
    jQuery('article').readmore({
        moreLink: '<span class="text-right"><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></span>',
        lessLink: '<span class="text-right"><a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a></span>',
        speed: 700,
        collapsedHeight: 480,
        afterToggle: function(trigger, element, expanded) {
            if (!expanded) { // The "Close" link was clicked
                jQuery('html, body').animate({
                    scrollTop: element.offset().top
                }, {
                    duration: 250
                });
            }
        }
    });
});

jQuery(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        if (typeof module !== "undefined" && module.exports) {
            a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(f) {
    var y = "1.6.15",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !a,
        d = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !a,
        C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function(H) {
        var G = f(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (F && typeof H === "object") {
                F.option.apply(this, arguments)
            } else {
                if (!F && (typeof H === "object" || !H)) {
                    return w.apply(this, arguments)
                }
            }
        }
        return G
    };
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: i
    };

    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipe.defaults, F);
        return this.each(function() {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a5, au) {
        var au = f.extend({}, au);
        var az = (a || d || !au.fallbackToMouseEvents),
            K = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            ax = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = az ? (d ? "mouseleave" : null) : "mouseleave",
            aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ag = 0,
            aP = null,
            a2 = null,
            ac = 0,
            a1 = 0,
            aZ = 0,
            H = 1,
            ap = 0,
            aJ = 0,
            N = null;
        var aR = f(a5);
        var aa = "start";
        var X = 0;
        var aQ = {};
        var U = 0,
            a3 = 0,
            a6 = 0,
            ay = 0,
            O = 0;
        var aW = null,
            af = null;
        try {
            aR.bind(K, aN);
            aR.bind(aD, ba)
        } catch (aj) {
            f.error("events not supported " + K + "," + aD + " on jQuery.swipe")
        }
        this.enable = function() {
            aR.bind(K, aN);
            aR.bind(aD, ba);
            return aR
        };
        this.disable = function() {
            aK();
            return aR
        };
        this.destroy = function() {
            aK();
            aR.data(C, null);
            aR = null
        };
        this.option = function(bd, bc) {
            if (typeof bd === "object") {
                au = f.extend(au, bd)
            } else {
                if (au[bd] !== undefined) {
                    if (bc === undefined) {
                        return au[bd]
                    } else {
                        au[bd] = bc
                    }
                } else {
                    if (!bd) {
                        return au
                    } else {
                        f.error("Option " + bd + " does not exist on jQuery.swipe.options")
                    }
                }
            }
            return null
        };

        function aN(be) {
            if (aB()) {
                return
            }
            if (f(be.target).closest(au.excludedElements, aR).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bg = bf.touches,
                bc = bg ? bg[0] : bf;
            aa = g;
            if (bg) {
                X = bg.length
            } else {
                if (au.preventDefaultEvents !== false) {
                    be.preventDefault()
                }
            }
            ag = 0;
            aP = null;
            a2 = null;
            aJ = null;
            ac = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            ap = 0;
            N = ab();
            S();
            ai(0, bc);
            if (!bg || (X === au.fingers || au.fingers === i) || aX()) {
                U = ar();
                if (X == 2) {
                    ai(1, bg[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start)
                }
                if (au.swipeStatus || au.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = q;
                P(bf, aa);
                return bd
            } else {
                if (au.hold) {
                    af = setTimeout(f.proxy(function() {
                        aR.trigger("hold", [bf.target]);
                        if (au.hold) {
                            bd = au.hold.call(aR, bf, bf.target)
                        }
                    }, this), au.longTapThreshold)
                }
                an(true)
            }
            return null
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === h || aa === q || al()) {
                return
            }
            var be, bj = bi.touches,
                bd = bj ? bj[0] : bi;
            var bg = aH(bd);
            a3 = ar();
            if (bj) {
                X = bj.length
            }
            if (au.hold) {
                clearTimeout(af)
            }
            aa = k;
            if (X == 2) {
                if (a1 == 0) {
                    ai(1, bj[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start)
                } else {
                    aH(bj[1]);
                    aZ = at(aQ[0].end, aQ[1].end);
                    aJ = aq(aQ[0].end, aQ[1].end)
                }
                H = a8(a1, aZ);
                ap = Math.abs(a1 - aZ)
            }
            if ((X === au.fingers || au.fingers === i) || !bj || aX()) {
                aP = aL(bg.start, bg.end);
                a2 = aL(bg.last, bg.end);
                ak(bf, a2);
                ag = aS(bg.start, bg.end);
                ac = aM();
                aI(aP, ag);
                be = P(bi, aa);
                if (!au.triggerOnTouchEnd || au.triggerOnTouchLeave) {
                    var bc = true;
                    if (au.triggerOnTouchLeave) {
                        var bh = aY(this);
                        bc = F(bg.end, bh)
                    }
                    if (!au.triggerOnTouchEnd && bc) {
                        aa = aC(k)
                    } else {
                        if (au.triggerOnTouchLeave && !bc) {
                            aa = aC(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = q;
                P(bi, aa)
            }
            if (be === false) {
                aa = q;
                P(bi, aa)
            }
        }

        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches;
            if (be) {
                if (be.length && !al()) {
                    G(bd);
                    return true
                } else {
                    if (be.length && al()) {
                        return true
                    }
                }
            }
            if (al()) {
                X = ay
            }
            a3 = ar();
            ac = aM();
            if (bb() || !am()) {
                aa = q;
                P(bd, aa)
            } else {
                if (au.triggerOnTouchEnd || (au.triggerOnTouchEnd == false && aa === k)) {
                    if (au.preventDefaultEvents !== false) {
                        bc.preventDefault()
                    }
                    aa = h;
                    P(bd, aa)
                } else {
                    if (!au.triggerOnTouchEnd && a7()) {
                        aa = h;
                        aF(bd, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bd, aa)
                        }
                    }
                }
            }
            an(false);
            return null
        }

        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            S();
            an(false)
        }

        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            if (au.triggerOnTouchLeave) {
                aa = aC(h);
                P(bd, aa)
            }
        }

        function aK() {
            aR.unbind(K, aN);
            aR.unbind(aD, ba);
            aR.unbind(ax, a4);
            aR.unbind(V, M);
            if (T) {
                aR.unbind(T, L)
            }
            an(false)
        }

        function aC(bg) {
            var bf = bg;
            var be = aA();
            var bd = am();
            var bc = bb();
            if (!be || bc) {
                bf = q
            } else {
                if (bd && bg == k && (!au.triggerOnTouchEnd || au.triggerOnTouchLeave)) {
                    bf = h
                } else {
                    if (!bd && bg == h && au.triggerOnTouchLeave) {
                        bf = q
                    }
                }
            }
            return bf
        }

        function P(be, bc) {
            var bd, bf = be.touches;
            if (J() || W()) {
                bd = aF(be, bc, l)
            }
            if ((Q() || aX()) && bd !== false) {
                bd = aF(be, bc, t)
            }
            if (aG() && bd !== false) {
                bd = aF(be, bc, j)
            } else {
                if (ao() && bd !== false) {
                    bd = aF(be, bc, b)
                } else {
                    if (ah() && bd !== false) {
                        bd = aF(be, bc, B)
                    }
                }
            }
            if (bc === q) {
                if (W()) {
                    bd = aF(be, bc, l)
                }
                if (aX()) {
                    bd = aF(be, bc, t)
                }
                ba(be)
            }
            if (bc === h) {
                if (bf) {
                    if (!bf.length) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }

        function aF(bf, bc, be) {
            var bd;
            if (be == l) {
                aR.trigger("swipeStatus", [bc, aP || null, ag || 0, ac || 0, X, aQ, a2]);
                if (au.swipeStatus) {
                    bd = au.swipeStatus.call(aR, bf, bc, aP || null, ag || 0, ac || 0, X, aQ, a2);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && aV()) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    aR.trigger("swipe", [aP, ag, ac, X, aQ, a2]);
                    if (au.swipe) {
                        bd = au.swipe.call(aR, bf, aP, ag, ac, X, aQ, a2);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ac, X, aQ, a2]);
                            if (au.swipeLeft) {
                                bd = au.swipeLeft.call(aR, bf, aP, ag, ac, X, aQ, a2)
                            }
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ac, X, aQ, a2]);
                            if (au.swipeRight) {
                                bd = au.swipeRight.call(aR, bf, aP, ag, ac, X, aQ, a2)
                            }
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ac, X, aQ, a2]);
                            if (au.swipeUp) {
                                bd = au.swipeUp.call(aR, bf, aP, ag, ac, X, aQ, a2)
                            }
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ac, X, aQ, a2]);
                            if (au.swipeDown) {
                                bd = au.swipeDown.call(aR, bf, aP, ag, ac, X, aQ, a2)
                            }
                            break
                    }
                }
            }
            if (be == t) {
                aR.trigger("pinchStatus", [bc, aJ || null, ap || 0, ac || 0, X, H, aQ]);
                if (au.pinchStatus) {
                    bd = au.pinchStatus.call(aR, bf, bc, aJ || null, ap || 0, ac || 0, X, H, aQ);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && a9()) {
                    switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, ap || 0, ac || 0, X, H, aQ]);
                            if (au.pinchIn) {
                                bd = au.pinchIn.call(aR, bf, aJ || null, ap || 0, ac || 0, X, H, aQ)
                            }
                            break;
                        case A:
                            aR.trigger("pinchOut", [aJ || null, ap || 0, ac || 0, X, H, aQ]);
                            if (au.pinchOut) {
                                bd = au.pinchOut.call(aR, bf, aJ || null, ap || 0, ac || 0, X, H, aQ)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === q || bc === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Z() && !I()) {
                        O = ar();
                        aW = setTimeout(f.proxy(function() {
                            O = null;
                            aR.trigger("tap", [bf.target]);
                            if (au.tap) {
                                bd = au.tap.call(aR, bf, bf.target)
                            }
                        }, this), au.doubleTapThreshold)
                    } else {
                        O = null;
                        aR.trigger("tap", [bf.target]);
                        if (au.tap) {
                            bd = au.tap.call(aR, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == j) {
                    if (bc === q || bc === h) {
                        clearTimeout(aW);
                        clearTimeout(af);
                        O = null;
                        aR.trigger("doubletap", [bf.target]);
                        if (au.doubleTap) {
                            bd = au.doubleTap.call(aR, bf, bf.target)
                        }
                    }
                } else {
                    if (be == b) {
                        if (bc === q || bc === h) {
                            clearTimeout(aW);
                            O = null;
                            aR.trigger("longtap", [bf.target]);
                            if (au.longTap) {
                                bd = au.longTap.call(aR, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }

        function am() {
            var bc = true;
            if (au.threshold !== null) {
                bc = ag >= au.threshold
            }
            return bc
        }

        function bb() {
            var bc = false;
            if (au.cancelThreshold !== null && aP !== null) {
                bc = (aT(aP) - ag) >= au.cancelThreshold
            }
            return bc
        }

        function ae() {
            if (au.pinchThreshold !== null) {
                return ap >= au.pinchThreshold
            }
            return true
        }

        function aA() {
            var bc;
            if (au.maxTimeThreshold) {
                if (ac >= au.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }

        function ak(bc, bd) {
            if (au.preventDefaultEvents === false) {
                return
            }
            if (au.allowPageScroll === m) {
                bc.preventDefault()
            } else {
                var be = au.allowPageScroll === s;
                switch (bd) {
                    case p:
                        if ((au.swipeLeft && be) || (!be && au.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case o:
                        if ((au.swipeRight && be) || (!be && au.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case e:
                        if ((au.swipeUp && be) || (!be && au.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break;
                    case x:
                        if ((au.swipeDown && be) || (!be && au.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }

        function a9() {
            var bd = aO();
            var bc = Y();
            var be = ae();
            return bd && bc && be
        }

        function aX() {
            return !!(au.pinchStatus || au.pinchIn || au.pinchOut)
        }

        function Q() {
            return !!(a9() && aX())
        }

        function aV() {
            var bf = aA();
            var bh = am();
            var be = aO();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(au.swipe || au.swipeStatus || au.swipeLeft || au.swipeRight || au.swipeUp || au.swipeDown)
        }

        function J() {
            return !!(aV() && W())
        }

        function aO() {
            return ((X === au.fingers || au.fingers === i) || !a)
        }

        function Y() {
            return aQ[0].end.x !== 0
        }

        function a7() {
            return !!(au.tap)
        }

        function Z() {
            return !!(au.doubleTap)
        }

        function aU() {
            return !!(au.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bc = ar();
            return (Z() && ((bc - O) <= au.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function aw() {
            return ((X === 1 || !a) && (isNaN(ag) || ag < au.threshold))
        }

        function a0() {
            return ((ac > au.longTapThreshold) && (ag < r))
        }

        function ah() {
            return !!(aw() && a7())
        }

        function aG() {
            return !!(R() && Z())
        }

        function ao() {
            return !!(a0() && aU())
        }

        function G(bc) {
            a6 = ar();
            ay = bc.touches.length + 1
        }

        function S() {
            a6 = 0;
            ay = 0
        }

        function al() {
            var bc = false;
            if (a6) {
                var bd = ar() - a6;
                if (bd <= au.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }

        function aB() {
            return !!(aR.data(C + "_intouch") === true)
        }

        function an(bc) {
            if (!aR) {
                return
            }
            if (bc === true) {
                aR.bind(ax, a4);
                aR.bind(V, M);
                if (T) {
                    aR.bind(T, L)
                }
            } else {
                aR.unbind(ax, a4, false);
                aR.unbind(V, M, false);
                if (T) {
                    aR.unbind(T, L, false)
                }
            }
            aR.data(C + "_intouch", bc === true)
        }

        function ai(be, bc) {
            var bd = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            bd.start.x = bd.last.x = bd.end.x = bc.pageX || bc.clientX;
            bd.start.y = bd.last.y = bd.end.y = bc.pageY || bc.clientY;
            aQ[be] = bd;
            return bd
        }

        function aH(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            if (bd === null) {
                bd = ai(be, bc)
            }
            bd.last.x = bd.end.x;
            bd.last.y = bd.end.y;
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }

        function ad(bc) {
            return aQ[bc] || null
        }

        function aI(bc, bd) {
            bd = Math.max(bd, aT(bc));
            N[bc].distance = bd
        }

        function aT(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }

        function ab() {
            var bc = {};
            bc[p] = av(p);
            bc[o] = av(o);
            bc[e] = av(e);
            bc[x] = av(x);
            return bc
        }

        function av(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aM() {
            return a3 - U
        }

        function at(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }

        function aq() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aS(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aE(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }

        function aL(bd, bc) {
            var be = aE(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return p
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return p
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return o
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function ar() {
            var bc = new Date();
            return bc.getTime()
        }

        function aY(bc) {
            bc = f(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }

        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));
! function(n) {
    "use strict";
    n.fn.bsTouchSlider = function(i) {
        var a = n(".carousel");
        return this.each(function() {
            function i(i) {
                var a = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
                i.each(function() {
                    var i = n(this),
                        t = i.data("animation");
                    i.addClass(t).one(a, function() {
                        i.removeClass(t)
                    })
                })
            }
            var t = a.find(".item:first").find("[data-animation ^= 'animated']");
            a.carousel(), i(t), a.on("slide.bs.carousel", function(a) {
                var t = n(a.relatedTarget).find("[data-animation ^= 'animated']");
                i(t)
            }), n(".carousel .carousel-inner").swipe({
                swipeLeft: function(n, i, a, t, e) {
                    this.parent().carousel("next")
                },
                swipeRight: function() {
                    this.parent().carousel("prev")
                },
                threshold: 0
            })
        })
    }
}(jQuery);

//Initialise Bootstrap Carousel Touch Slider
// Curently there are no option available.

jQuery('#myCarousel').bsTouchSlider();

//Smooth Scroll Up
jQuery(function() {
    jQuery('a[href*=#]:not([href=#],[href=#myCarousel],[href=#myCarousel2],[href=#myCarousel3])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
});

//Placeholder for IE
jQuery(function() {
    var input = document.createElement("input");
    if (('placeholder' in input) == false) {
        jQuery('[placeholder]').focus(function() {
            var i = jQuery(this);
            if (i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if (i.hasClass('password')) {
                    i.removeClass('password');
                    this.type = 'password';
                }
            }
        }).blur(function() {
            var i = jQuery(this);
            if (i.val() == '' || i.val() == i.attr('placeholder')) {
                if (this.type == 'password') {
                    i.addClass('password');
                    this.type = 'text';
                }
                i.addClass('placeholder').val(i.attr('placeholder'));
            }
        }).blur().parents('form').submit(function() {
            jQuery(this).find('[placeholder]').each(function() {
                var i = jQuery(this);
                if (i.val() == i.attr('placeholder'))
                    i.val('');
            })
        });
    }
});

//Modal
jQuery('.modal').on('hidden.bs.modal', function(e) {
    jQuery(this).find('iframe').attr("src", jQuery(this).find('iframe').attr("src"));
});

//View more
/*jQuery('.mydata:gt(7)').hide().last().after(
    jQuery('<div />').attr('class','clearfix aCenter mTop20').html('<span class="btn btn-primary btn-lg hvr-float-shadow"><a href="javascript:;">VIEW MORE</a></span>').click(function(){
        var a = this;
        jQuery('.mydata:not(:visible):lt(8)').fadeIn(function(){
         if (jQuery('.mydata:not(:visible)').length == 0) jQuery(a).remove();   
        }); return false;
    })
);*/

/*jQuery('.mydata:gt(7)').hide().last().after(
	jQuery('<a />').attr('href','more').text('View More').click(function(){
		var a = this;
		jQuery('.mydata:not(:visible):lt(8)').fadeIn(function(){
		 if (jQuery('.mydata:not(:visible)').length == 0) jQuery(a).remove();   
		}); return false;
	})
);*/

/*jQuery('.mydata:gt(7)').hide().last().after(
    jQuery('<button />').attr('type','button').attr('class','btn btn-primary btn-lg hvr-float-shadow').html('<span><span>Show more</span></span>').click(function(){
        var a = this;
        jQuery('.mydata:not(:visible):lt(8)').fadeIn(function(){
         if (jQuery('.mydata:not(:visible)').length == 0) jQuery(a).remove();   
        }); return false;
    })
);*/

// For Demo purposes only (show hover effect on mobile devices)
/*[].slice.call(document.querySelectorAll('a[href="#"')).forEach(function (el) {
    el.addEventListener('click', function (ev) {
        ev.preventDefault();
    });
});*/

;