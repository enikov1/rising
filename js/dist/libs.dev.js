"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lazysizes - v5.3.0 */
!function (e) {
  var t = function (u, D, f) {
    "use strict";

    var k, H;

    if (function () {
      var e;
      var t = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        fastLoadedClass: "ls-is-cached",
        iframeLoadMode: 0,
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: true,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: true,
        ricTimeout: 0,
        throttleDelay: 125
      };
      H = u.lazySizesConfig || u.lazysizesConfig || {};

      for (e in t) {
        if (!(e in H)) {
          H[e] = t[e];
        }
      }
    }(), !D || !D.getElementsByClassName) {
      return {
        init: function init() {},
        cfg: H,
        noSupport: true
      };
    }

    var O = D.documentElement,
        i = u.HTMLPictureElement,
        P = "addEventListener",
        $ = "getAttribute",
        q = u[P].bind(u),
        I = u.setTimeout,
        U = u.requestAnimationFrame || I,
        o = u.requestIdleCallback,
        j = /^picture$/i,
        r = ["load", "error", "lazyincluded", "_lazyloaded"],
        a = {},
        G = Array.prototype.forEach,
        J = function J(e, t) {
      if (!a[t]) {
        a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
      }

      return a[t].test(e[$]("class") || "") && a[t];
    },
        K = function K(e, t) {
      if (!J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
      }
    },
        Q = function Q(e, t) {
      var a;

      if (a = J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").replace(a, " "));
      }
    },
        V = function V(t, a, e) {
      var i = e ? P : "removeEventListener";

      if (e) {
        V(t, a);
      }

      r.forEach(function (e) {
        t[i](e, a);
      });
    },
        X = function X(e, t, a, i, r) {
      var n = D.createEvent("Event");

      if (!a) {
        a = {};
      }

      a.instance = k;
      n.initEvent(t, !i, !r);
      n.detail = a;
      e.dispatchEvent(n);
      return n;
    },
        Y = function Y(e, t) {
      var a;

      if (!i && (a = u.picturefill || H.pf)) {
        if (t && t.src && !e[$]("srcset")) {
          e.setAttribute("srcset", t.src);
        }

        a({
          reevaluate: true,
          elements: [e]
        });
      } else if (t && t.src) {
        e.src = t.src;
      }
    },
        Z = function Z(e, t) {
      return (getComputedStyle(e, null) || {})[t];
    },
        s = function s(e, t, a) {
      a = a || e.offsetWidth;

      while (a < H.minSize && t && !e._lazysizesWidth) {
        a = t.offsetWidth;
        t = t.parentNode;
      }

      return a;
    },
        ee = function () {
      var a, i;
      var t = [];
      var r = [];
      var n = t;

      var s = function s() {
        var e = n;
        n = t.length ? r : t;
        a = true;
        i = false;

        while (e.length) {
          e.shift()();
        }

        a = false;
      };

      var e = function e(_e2, t) {
        if (a && !t) {
          _e2.apply(this, arguments);
        } else {
          n.push(_e2);

          if (!i) {
            i = true;
            (D.hidden ? I : U)(s);
          }
        }
      };

      e._lsFlush = s;
      return e;
    }(),
        te = function te(a, e) {
      return e ? function () {
        ee(a);
      } : function () {
        var e = this;
        var t = arguments;
        ee(function () {
          a.apply(e, t);
        });
      };
    },
        ae = function ae(e) {
      var a;
      var i = 0;
      var r = H.throttleDelay;
      var n = H.ricTimeout;

      var t = function t() {
        a = false;
        i = f.now();
        e();
      };

      var s = o && n > 49 ? function () {
        o(t, {
          timeout: n
        });

        if (n !== H.ricTimeout) {
          n = H.ricTimeout;
        }
      } : te(function () {
        I(t);
      }, true);
      return function (e) {
        var t;

        if (e = e === true) {
          n = 33;
        }

        if (a) {
          return;
        }

        a = true;
        t = r - (f.now() - i);

        if (t < 0) {
          t = 0;
        }

        if (e || t < 9) {
          s();
        } else {
          I(s, t);
        }
      };
    },
        ie = function ie(e) {
      var t, a;
      var i = 99;

      var r = function r() {
        t = null;
        e();
      };

      var n = function n() {
        var e = f.now() - a;

        if (e < i) {
          I(n, i - e);
        } else {
          (o || r)(r);
        }
      };

      return function () {
        a = f.now();

        if (!t) {
          t = I(n, i);
        }
      };
    },
        e = function () {
      var v, m, c, h, e;
      var y, z, g, p, C, b, A;
      var n = /^img$/i;
      var d = /^iframe$/i;
      var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
      var _ = 0;
      var w = 0;
      var M = 0;
      var N = -1;

      var L = function L(e) {
        M--;

        if (!e || M < 0 || !e.target) {
          M = 0;
        }
      };

      var x = function x(e) {
        if (A == null) {
          A = Z(D.body, "visibility") == "hidden";
        }

        return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden");
      };

      var W = function W(e, t) {
        var a;
        var i = e;
        var r = x(e);
        g -= t;
        b += t;
        p -= t;
        C += t;

        while (r && (i = i.offsetParent) && i != D.body && i != O) {
          r = (Z(i, "opacity") || 1) > 0;

          if (r && Z(i, "overflow") != "visible") {
            a = i.getBoundingClientRect();
            r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1;
          }
        }

        return r;
      };

      var t = function t() {
        var e, t, a, i, r, n, s, o, l, u, f, c;
        var d = k.elements;

        if ((h = H.loadMode) && M < 8 && (e = d.length)) {
          t = 0;
          N++;

          for (; t < e; t++) {
            if (!d[t] || d[t]._lazyRace) {
              continue;
            }

            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
              R(d[t]);
              continue;
            }

            if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
              n = w;
            }

            if (!u) {
              u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
              k._defEx = u;
              f = u * H.expFactor;
              c = H.hFac;
              A = null;

              if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) {
                w = f;
                N = 0;
              } else if (h > 1 && N > 1 && M < 6) {
                w = u;
              } else {
                w = _;
              }
            }

            if (l !== n) {
              y = innerWidth + n * c;
              z = innerHeight + n;
              s = n * -1;
              l = n;
            }

            a = d[t].getBoundingClientRect();

            if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) {
              R(d[t]);
              r = true;

              if (M > 9) {
                break;
              }
            } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
              i = v[0] || d[t];
            }
          }

          if (i && !r) {
            R(i);
          }
        }
      };

      var a = ae(t);

      var S = function S(e) {
        var t = e.target;

        if (t._lazyCache) {
          delete t._lazyCache;
          return;
        }

        L(e);
        K(t, H.loadedClass);
        Q(t, H.loadingClass);
        V(t, B);
        X(t, "lazyloaded");
      };

      var i = te(S);

      var B = function B(e) {
        i({
          target: e.target
        });
      };

      var T = function T(e, t) {
        var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;

        if (a == 0) {
          e.contentWindow.location.replace(t);
        } else if (a == 1) {
          e.src = t;
        }
      };

      var F = function F(e) {
        var t;
        var a = e[$](H.srcsetAttr);

        if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
          e.setAttribute("media", t);
        }

        if (a) {
          e.setAttribute("srcset", a);
        }
      };

      var s = te(function (t, e, a, i, r) {
        var n, s, o, l, u, f;

        if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
          if (i) {
            if (a) {
              K(t, H.autosizesClass);
            } else {
              t.setAttribute("sizes", i);
            }
          }

          s = t[$](H.srcsetAttr);
          n = t[$](H.srcAttr);

          if (r) {
            o = t.parentNode;
            l = o && j.test(o.nodeName || "");
          }

          f = e.firesLoad || "src" in t && (s || n || l);
          u = {
            target: t
          };
          K(t, H.loadingClass);

          if (f) {
            clearTimeout(c);
            c = I(L, 2500);
            V(t, B, true);
          }

          if (l) {
            G.call(o.getElementsByTagName("source"), F);
          }

          if (s) {
            t.setAttribute("srcset", s);
          } else if (n && !l) {
            if (d.test(t.nodeName)) {
              T(t, n);
            } else {
              t.src = n;
            }
          }

          if (r && (s || l)) {
            Y(t, {
              src: n
            });
          }
        }

        if (t._lazyRace) {
          delete t._lazyRace;
        }

        Q(t, H.lazyClass);
        ee(function () {
          var e = t.complete && t.naturalWidth > 1;

          if (!f || e) {
            if (e) {
              K(t, H.fastLoadedClass);
            }

            S(u);
            t._lazyCache = true;
            I(function () {
              if ("_lazyCache" in t) {
                delete t._lazyCache;
              }
            }, 9);
          }

          if (t.loading == "lazy") {
            M--;
          }
        }, true);
      });

      var R = function R(e) {
        if (e._lazyRace) {
          return;
        }

        var t;
        var a = n.test(e.nodeName);
        var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
        var r = i == "auto";

        if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
          return;
        }

        t = X(e, "lazyunveilread").detail;

        if (r) {
          re.updateElem(e, true, e.offsetWidth);
        }

        e._lazyRace = true;
        M++;
        s(e, t, r, i, a);
      };

      var r = ie(function () {
        H.loadMode = 3;
        a();
      });

      var o = function o() {
        if (H.loadMode == 3) {
          H.loadMode = 2;
        }

        r();
      };

      var l = function l() {
        if (m) {
          return;
        }

        if (f.now() - e < 999) {
          I(l, 999);
          return;
        }

        m = true;
        H.loadMode = 3;
        a();
        q("scroll", o, true);
      };

      return {
        _: function _() {
          e = f.now();
          k.elements = D.getElementsByClassName(H.lazyClass);
          v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
          q("scroll", a, true);
          q("resize", a, true);
          q("pageshow", function (e) {
            if (e.persisted) {
              var t = D.querySelectorAll("." + H.loadingClass);

              if (t.length && t.forEach) {
                U(function () {
                  t.forEach(function (e) {
                    if (e.complete) {
                      R(e);
                    }
                  });
                });
              }
            }
          });

          if (u.MutationObserver) {
            new MutationObserver(a).observe(O, {
              childList: true,
              subtree: true,
              attributes: true
            });
          } else {
            O[P]("DOMNodeInserted", a, true);
            O[P]("DOMAttrModified", a, true);
            setInterval(a, 999);
          }

          q("hashchange", a, true);
          ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
            D[P](e, a, true);
          });

          if (/d$|^c/.test(D.readyState)) {
            l();
          } else {
            q("load", l);
            D[P]("DOMContentLoaded", a);
            I(l, 2e4);
          }

          if (k.elements.length) {
            t();

            ee._lsFlush();
          } else {
            a();
          }
        },
        checkElems: a,
        unveil: R,
        _aLSL: o
      };
    }(),
        re = function () {
      var a;
      var n = te(function (e, t, a, i) {
        var r, n, s;
        e._lazysizesWidth = i;
        i += "px";
        e.setAttribute("sizes", i);

        if (j.test(t.nodeName || "")) {
          r = t.getElementsByTagName("source");

          for (n = 0, s = r.length; n < s; n++) {
            r[n].setAttribute("sizes", i);
          }
        }

        if (!a.detail.dataAttr) {
          Y(e, a.detail);
        }
      });

      var i = function i(e, t, a) {
        var i;
        var r = e.parentNode;

        if (r) {
          a = s(e, r, a);
          i = X(e, "lazybeforesizes", {
            width: a,
            dataAttr: !!t
          });

          if (!i.defaultPrevented) {
            a = i.detail.width;

            if (a && a !== e._lazysizesWidth) {
              n(e, r, i, a);
            }
          }
        }
      };

      var e = function e() {
        var e;
        var t = a.length;

        if (t) {
          e = 0;

          for (; e < t; e++) {
            i(a[e]);
          }
        }
      };

      var t = ie(e);
      return {
        _: function _() {
          a = D.getElementsByClassName(H.autosizesClass);
          q("resize", t);
        },
        checkElems: t,
        updateElem: i
      };
    }(),
        t = function t() {
      if (!t.i && D.getElementsByClassName) {
        t.i = true;

        re._();

        e._();
      }
    };

    return I(function () {
      H.init && t();
    }), k = {
      cfg: H,
      autoSizer: re,
      loader: e,
      init: t,
      uP: Y,
      aC: K,
      rC: Q,
      hC: J,
      fire: X,
      gW: s,
      rAF: ee
    };
  }(e, e.document, Date);

  e.lazySizes = t, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t);
}("undefined" != typeof window ? window : {});

window.Sticksy = function () {
  "use strict";

  var s = "static",
      i = "fixed",
      n = "stuck";

  function e(t, i) {
    if (!t) throw new Error("You have to specify the target element");
    if ("string" != typeof t && !(t instanceof Element)) throw new Error("Expected a string or element, but got: " + Object.prototype.toString.call(t));
    var n = r.findElement(t);
    if (!n) throw new Error("Cannot find target element: " + t);
    var s = n.parentNode;
    if (!s) throw new Error("Cannot find container of target element: " + t);
    i = i || {}, this.t = {
      containerEl: s,
      targetEl: n,
      topSpacing: i.topSpacing || 0,
      enabled: i.enabled || !0,
      listen: i.listen || !1
    }, this.onStateChanged = null, this.nodeRef = n, this.i();
  }

  e.instances = [], e.enabledInstances = [], e.prototype.i = function () {
    var t = this;
    this.state = s, this.o = [], this.h = [];

    for (var i = this.t.targetEl; i;) {
      var n = i.cloneNode(!0);
      n.style.visibility = "hidden", n.style.pointerEvents = "none", n.className += " sticksy-dummy-node", n.removeAttribute("id"), this.t.targetEl.parentNode.insertBefore(n, this.t.targetEl), this.o.push(i), this.h.push(n), i = i.nextElementSibling;
    }

    this.u = 0, this.l = {
      top: 0,
      bottom: 0
    }, this.v = !1, this.t.containerEl.style.position = "relative", this.m = -1 === getComputedStyle(this.t.containerEl).display.indexOf("flex"), this.t.listen && (this.p = new MutationObserver(function () {
      t.hardRefresh();
    }), this.g()), e.instances.push(this), this.t.enabled && e.enabledInstances.push(this), this.hardRefresh();
  }, e.prototype.g = function () {
    this.t.listen && !this.v && (this.p.observe(this.t.containerEl, {
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0
    }), this.v = !0);
  }, e.prototype.C = function () {
    this.t.listen && this.v && (this.p.disconnect(), this.v = !1);
  }, e.prototype.M = function (t) {
    return t < this.l.top ? s : t >= this.l.bottom ? n : i;
  }, e.prototype.S = function () {
    this.u = r.getComputedBox(this.o[this.o.length - 1]).bottomWithMargin - r.getComputedBox(this.o[0]).topWithMargin;
  }, e.prototype.j = function () {
    var t = this.t.containerEl,
        i = this.o,
        t = r.getComputedBox(t),
        i = r.getComputedBox(i[0]);
    this.l = {
      top: i.topWithMargin - this.t.topSpacing,
      bottom: t.bottom - t.paddingBottom - this.t.topSpacing - this.u
    };
  }, e.prototype.B = function (t) {
    t === s ? (this.P(this.o), this.T(this.h)) : (this.k(this.o), t === i ? this.O(this.o) : this.W(this.o), this.D(this.h));
  }, e.prototype.refresh = function () {
    var t = this.M(window.pageYOffset, this.l);
    t !== this.state && (this.state = t, this.C(), this.B(t), this.g(), "function" == typeof this.onStateChanged && this.onStateChanged(t));
  }, e.prototype.hardRefresh = function () {
    this.C();
    var t = this.state;
    this.state = s, this.B(this.state), this.k(this.o), this.S(), this.j(), this.state = this.M(window.pageYOffset, this.l), this.B(this.state), this.g(), "function" == typeof this.onStateChanged && t !== this.state && this.onStateChanged(this.state);
  }, e.prototype.enable = function () {
    this.t.enabled = !0, e.enabledInstances.push(this), this.hardRefresh();
  }, e.prototype.disable = function () {
    this.t.enabled = !1, this.state = s, this.B(this.state), e.enabledInstances.splice(e.enabledInstances.indexOf(this), 1);
  }, e.prototype.O = function (t) {
    for (var i = 0, n = this.t.topSpacing, s = 0; s < t.length; s++) {
      var o = t[s],
          h = r.getComputedBox(o),
          e = this.m ? Math.max(0, i - h.marginTop) : i;
      o.style.position = "fixed", o.style.top = n + e + "px", o.style.bottom = "", n += h.height + h.marginTop + e, i = h.marginBottom;
    }
  }, e.prototype.W = function (t) {
    for (var i = 0, n = r.getComputedBox(this.t.containerEl).paddingBottom, s = t.length - 1; 0 <= s; s--) {
      var o = t[s],
          h = r.getComputedBox(o),
          e = this.m ? Math.max(0, i - h.marginBottom) : i;
      o.style.position = "absolute", o.style.top = "auto", o.style.bottom = n + e + "px", n += h.height + h.marginBottom + e, i = h.marginTop;
    }
  }, e.prototype.P = function (t) {
    t.forEach(function (t) {
      t.style.position = "", t.style.top = "", t.style.bottom = "", t.style.height = "", t.style.width = "";
    });
  }, e.prototype.T = function (t) {
    t.forEach(function (t) {
      t.style.display = "none";
    });
  }, e.prototype.D = function (t) {
    for (var i = 0; i < t.length; i++) {
      t[i].style.display = getComputedStyle(this.o[i]).display;
    }
  }, e.prototype.k = function () {
    for (var t = 0; t < this.o.length; t++) {
      var i = this.o[t],
          n = getComputedStyle(i);
      i.style.width = n.width, i.style.height = n.height;
    }
  }, e.refreshAll = function () {
    for (var t = 0; t < e.enabledInstances.length; t++) {
      e.enabledInstances[t].refresh();
    }
  }, e.hardRefreshAll = function () {
    for (var t = 0; t < e.enabledInstances.length; t++) {
      e.enabledInstances[t].hardRefresh();
    }
  }, e.enableAll = function () {
    e.enabledInstances = e.instances.slice(), this.hardRefreshAll();
  }, e.disableAll = function () {
    for (var t = e.enabledInstances.slice(), i = 0; i < t.length; i++) {
      e.enabledInstances[i].disable();
    }

    e.enabledInstances = [];
  }, e.initializeAll = function (t, i, n) {
    if (void 0 === t) throw new Error("'target' parameter is undefined");
    var s = [];
    t instanceof Element ? s = [t] : void 0 !== t.length && 0 < t.length && t[0] instanceof Element ? s = "function" == typeof t.get ? t.get() : t : "string" == typeof t && (s = document.querySelectorAll(t) || []);
    var o = [],
        h = [];
    if (s.forEach(function (t) {
      -1 === o.indexOf(t.parentNode) && (o.push(t.parentNode), h.push(t));
    }), !n && !h.length) throw new Error("There are no elements to initialize");
    return h.map(function (t) {
      return new e(t, i);
    });
  }, window.addEventListener("scroll", e.refreshAll), window.addEventListener("resize", e.hardRefreshAll);
  var r = {
    parseNumber: function parseNumber(t) {
      return parseFloat(t) || 0;
    },
    findElement: function findElement(t, i) {
      return i = i || document, "string" == typeof t ? i.querySelector(t) : t instanceof Element ? t : void 0;
    },
    getComputedBox: function getComputedBox(t) {
      var i = t.getBoundingClientRect(),
          t = getComputedStyle(t);
      return {
        height: i.height,
        width: i.width,
        top: window.pageYOffset + i.top,
        bottom: window.pageYOffset + i.bottom,
        marginTop: r.parseNumber(t.marginTop),
        marginBottom: r.parseNumber(t.marginBottom),
        paddingTop: r.parseNumber(t.paddingTop),
        paddingBottom: r.parseNumber(t.paddingBottom),
        topWithMargin: window.pageYOffset + i.top - r.parseNumber(t.marginTop),
        bottomWithMargin: window.pageYOffset + i.bottom + r.parseNumber(t.marginBottom)
      };
    }
  };
  return e;
}();

var jQueryPlugin = window.$ || window.jQuery || window.Zepto;
jQueryPlugin && (jQueryPlugin.fn.sticksy = function (t) {
  return window.Sticksy.initializeAll(this, t);
});
/*!
 * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos, 
 * @date: 20-08-2020 14:0:14, 
 * @version: 5.6.2,
 * @link: https://simpleparallax.com/
 */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define("simpleParallax", [], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.simpleParallax = e() : t.simpleParallax = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(i) {
      if (e[i]) return e[i].exports;
      var r = e[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var r in t) {
        n.d(i, r, function (e) {
          return t[e];
        }.bind(null, r));
      }
      return i;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
  }([function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "default", function () {
      return x;
    });

    var i = function i() {
      return Element.prototype.closest && "IntersectionObserver" in window;
    };

    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var s = new (function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.positions = {
          top: 0,
          bottom: 0,
          height: 0
        };
      }

      var e, n, i;
      return e = t, (n = [{
        key: "setViewportTop",
        value: function value(t) {
          return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions;
        }
      }, {
        key: "setViewportBottom",
        value: function value() {
          return this.positions.bottom = this.positions.top + this.positions.height, this.positions;
        }
      }, {
        key: "setViewportAll",
        value: function value(t) {
          return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions;
        }
      }]) && r(e.prototype, n), i && r(e, i), t;
    }())(),
        o = function o(t) {
      return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : "string" == typeof t || t instanceof String ? document.querySelectorAll(t) : [t];
    },
        a = function () {
      for (var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === t;) {
        t = void 0 !== document.createElement("div").style[e[n]] ? e[n] : void 0, n += 1;
      }

      return t;
    }(),
        l = function l(t) {
      return "img" !== t.tagName.toLowerCase() && "picture" !== t.tagName.toLowerCase() || !!t && !!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth);
    };

    function u(t) {
      return function (t) {
        if (Array.isArray(t)) return c(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return c(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function c(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, i = new Array(e); n < e; n++) {
        i[n] = t[n];
      }

      return i;
    }

    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var f = function () {
      function t(e, n) {
        var i = this;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.element = e, this.elementContainer = e, this.settings = n, this.isVisible = !0, this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null, l(e) ? this.init() : this.element.addEventListener("load", function () {
          setTimeout(function () {
            i.init(!0);
          }, 50);
        });
      }

      var e, n, i;
      return e = t, (n = [{
        key: "init",
        value: function value(t) {
          var e = this;
          this.isInit || (t && (this.rangeMax = null), this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 ? setTimeout(function () {
            e.setTransitionCSS(), e.elementContainer.classList.add("simple-parallax-initialized");
          }, 10) : this.elementContainer.classList.add("simple-parallax-initialized"), this.isInit = !0));
        }
      }, {
        key: "wrapElement",
        value: function value() {
          var t = this.element.closest("picture") || this.element,
              e = this.customWrapper || document.createElement("div");
          e.classList.add("simpleParallax"), e.style.overflow = "hidden", this.customWrapper || (t.parentNode.insertBefore(e, t), e.appendChild(t)), this.elementContainer = e;
        }
      }, {
        key: "unWrapElement",
        value: function value() {
          var t = this.elementContainer;
          this.customWrapper ? (t.classList.remove("simpleParallax"), t.style.overflow = "") : t.replaceWith.apply(t, u(t.childNodes));
        }
      }, {
        key: "setTransformCSS",
        value: function value() {
          !1 === this.settings.overflow && (this.element.style[a] = "scale(".concat(this.settings.scale, ")")), this.element.style.willChange = "transform";
        }
      }, {
        key: "setTransitionCSS",
        value: function value() {
          this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
        }
      }, {
        key: "unSetStyle",
        value: function value() {
          this.element.style.willChange = "", this.element.style[a] = "", this.element.style.transition = "";
        }
      }, {
        key: "getElementOffset",
        value: function value() {
          var t = this.elementContainer.getBoundingClientRect();

          if (this.elementHeight = t.height, this.elementTop = t.top + s.positions.top, this.settings.customContainer) {
            var e = this.settings.customContainer.getBoundingClientRect();
            this.elementTop = t.top - e.top + s.positions.top;
          }

          this.elementBottom = this.elementHeight + this.elementTop;
        }
      }, {
        key: "buildThresholdList",
        value: function value() {
          for (var t = [], e = 1; e <= this.elementHeight; e++) {
            var n = e / this.elementHeight;
            t.push(n);
          }

          return t;
        }
      }, {
        key: "intersectionObserver",
        value: function value() {
          var t = {
            root: null,
            threshold: this.buildThresholdList()
          };
          this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t), this.observer.observe(this.element);
        }
      }, {
        key: "intersectionObserverCallback",
        value: function value(t) {
          var e = this;
          t.forEach(function (t) {
            t.isIntersecting ? e.isVisible = !0 : e.isVisible = !1;
          });
        }
      }, {
        key: "checkIfVisible",
        value: function value() {
          return this.elementBottom > s.positions.top && this.elementTop < s.positions.bottom;
        }
      }, {
        key: "getRangeMax",
        value: function value() {
          var t = this.element.clientHeight;
          this.rangeMax = t * this.settings.scale - t;
        }
      }, {
        key: "getTranslateValue",
        value: function value() {
          var t = ((s.positions.bottom - this.elementTop) / ((s.positions.height + this.elementHeight) / 100)).toFixed(1);
          return t = Math.min(100, Math.max(0, t)), 0 !== this.settings.maxTransition && t > this.settings.maxTransition && (t = this.settings.maxTransition), this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(), this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t, this.oldTranslateValue = this.translateValue, !0));
        }
      }, {
        key: "animate",
        value: function value() {
          var t,
              e = 0,
              n = 0;
          (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), t = !1 === this.settings.overflow ? "translate3d(".concat(n, ", ").concat(e, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n, ", ").concat(e, ", 0)"), this.element.style[a] = t;
        }
      }]) && h(e.prototype, n), i && h(e, i), t;
    }();

    function m(t) {
      return function (t) {
        if (Array.isArray(t)) return y(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || d(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function p(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
            i = !0,
            r = !1,
            s = void 0;

        try {
          for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0) {
            ;
          }
        } catch (t) {
          r = !0, s = t;
        } finally {
          try {
            i || null == a["return"] || a["return"]();
          } finally {
            if (r) throw s;
          }
        }

        return n;
      }(t, e) || d(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function d(t, e) {
      if (t) {
        if ("string" == typeof t) return y(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
      }
    }

    function y(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, i = new Array(e); n < e; n++) {
        i[n] = t[n];
      }

      return i;
    }

    function v(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    var g,
        b,
        w = !1,
        T = [],
        x = function () {
      function t(e, n) {
        if (function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e && i()) {
          if (this.elements = o(e), this.defaults = {
            delay: 0,
            orientation: "up",
            scale: 1.3,
            overflow: !1,
            transition: "cubic-bezier(0,0,0,1)",
            customContainer: "",
            customWrapper: "",
            maxTransition: 0
          }, this.settings = Object.assign(this.defaults, n), this.settings.customContainer) {
            var r = p(o(this.settings.customContainer), 1);
            this.customContainer = r[0];
          }

          this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.refresh = this.refresh.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init();
        }
      }

      var e, n, r;
      return e = t, (n = [{
        key: "init",
        value: function value() {
          var t = this;
          s.setViewportAll(this.customContainer), T = [].concat(m(this.elements.map(function (e) {
            return new f(e, t.settings);
          })), m(T)), w || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), w = !0);
        }
      }, {
        key: "resizeIsDone",
        value: function value() {
          clearTimeout(b), b = setTimeout(this.refresh, 200);
        }
      }, {
        key: "proceedRequestAnimationFrame",
        value: function value() {
          var t = this;
          s.setViewportTop(this.customContainer), this.lastPosition !== s.positions.top ? (s.setViewportBottom(), T.forEach(function (e) {
            t.proceedElement(e);
          }), g = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = s.positions.top) : g = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
        }
      }, {
        key: "proceedElement",
        value: function value(t) {
          (this.customContainer ? t.checkIfVisible() : t.isVisible) && t.getTranslateValue() && t.animate();
        }
      }, {
        key: "refresh",
        value: function value() {
          s.setViewportAll(this.customContainer), T.forEach(function (t) {
            t.getElementOffset(), t.getRangeMax();
          }), this.lastPosition = -1;
        }
      }, {
        key: "destroy",
        value: function value() {
          var t = this,
              e = [];
          T = T.filter(function (n) {
            return t.elements.includes(n.element) ? (e.push(n), !1) : n;
          }), e.forEach(function (e) {
            e.unSetStyle(), !1 === t.settings.overflow && e.unWrapElement();
          }), T.length || (window.cancelAnimationFrame(g), window.removeEventListener("resize", this.refresh), w = !1);
        }
      }]) && v(e.prototype, n), r && v(e, r), t;
    }();
  }])["default"];
});
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */

!function (n, t) {
  "function" == typeof define && define.amd ? define(function () {
    return t(n, n.document, undefined);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t(n, n.document, undefined) : t(n, n.document, undefined);
}("undefined" != typeof window ? window : void 0, function (vi, hi, di) {
  "use strict";

  var o,
      l,
      a,
      u,
      pi = "object",
      bi = "function",
      mi = "array",
      gi = "string",
      wi = "boolean",
      yi = "number",
      f = "undefined",
      n = "null",
      xi = {
    c: "class",
    s: "style",
    i: "id",
    l: "length",
    p: "prototype",
    ti: "tabindex",
    oH: "offsetHeight",
    cH: "clientHeight",
    sH: "scrollHeight",
    oW: "offsetWidth",
    cW: "clientWidth",
    sW: "scrollWidth",
    hOP: "hasOwnProperty",
    bCR: "getBoundingClientRect"
  },
      _i = (o = {}, l = {}, {
    e: a = ["-webkit-", "-moz-", "-o-", "-ms-"],
    u: u = ["WebKit", "Moz", "O", "MS"],
    v: function v(n) {
      var t = l[n];
      if (l[xi.hOP](n)) return t;

      for (var r, e, i, o = c(n), u = hi.createElement("div")[xi.s], f = 0; f < a.length; f++) {
        for (i = a[f].replace(/-/g, ""), r = [n, a[f] + n, i + o, c(i) + o], e = 0; e < r[xi.l]; e++) {
          if (u[r[e]] !== di) {
            t = r[e];
            break;
          }
        }
      }

      return l[n] = t;
    },
    d: function d(n, t, r) {
      var e = n + " " + t,
          i = l[e];
      if (l[xi.hOP](e)) return i;

      for (var o, u = hi.createElement("div")[xi.s], f = t.split(" "), a = r || "", c = 0, s = -1; c < f[xi.l]; c++) {
        for (; s < _i.e[xi.l]; s++) {
          if (o = s < 0 ? f[c] : _i.e[s] + f[c], u.cssText = n + ":" + o + a, u[xi.l]) {
            i = o;
            break;
          }
        }
      }

      return l[e] = i;
    },
    m: function m(n, t, r) {
      var e = 0,
          i = o[n];

      if (!o[xi.hOP](n)) {
        for (i = vi[n]; e < u[xi.l]; e++) {
          i = i || vi[(t ? u[e] : u[e].toLowerCase()) + c(n)];
        }

        o[n] = i;
      }

      return i || r;
    }
  });

  function c(n) {
    return n.charAt(0).toUpperCase() + n.slice(1);
  }

  var Oi = {
    wW: r(t, 0, !0),
    wH: r(t, 0),
    mO: r(_i.m, 0, "MutationObserver", !0),
    rO: r(_i.m, 0, "ResizeObserver", !0),
    rAF: r(_i.m, 0, "requestAnimationFrame", !1, function (n) {
      return vi.setTimeout(n, 1e3 / 60);
    }),
    cAF: r(_i.m, 0, "cancelAnimationFrame", !1, function (n) {
      return vi.clearTimeout(n);
    }),
    now: function now() {
      return Date.now && Date.now() || new Date().getTime();
    },
    stpP: function stpP(n) {
      n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0;
    },
    prvD: function prvD(n) {
      n.preventDefault && n.cancelable ? n.preventDefault() : n.returnValue = !1;
    },
    page: function page(n) {
      var t = ((n = n.originalEvent || n).target || n.srcElement || hi).ownerDocument || hi,
          r = t.documentElement,
          e = t.body;
      if (n.touches === di) return !n.pageX && n.clientX && null != n.clientX ? {
        x: n.clientX + (r && r.scrollLeft || e && e.scrollLeft || 0) - (r && r.clientLeft || e && e.clientLeft || 0),
        y: n.clientY + (r && r.scrollTop || e && e.scrollTop || 0) - (r && r.clientTop || e && e.clientTop || 0)
      } : {
        x: n.pageX,
        y: n.pageY
      };
      var i = n.touches[0];
      return {
        x: i.pageX,
        y: i.pageY
      };
    },
    mBtn: function mBtn(n) {
      var t = n.button;
      return n.which || t === di ? n.which : 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0;
    },
    inA: function inA(n, t) {
      for (var r = 0; r < t[xi.l]; r++) {
        try {
          if (t[r] === n) return r;
        } catch (e) {}
      }

      return -1;
    },
    isA: function isA(n) {
      var t = Array.isArray;
      return t ? t(n) : this.type(n) == mi;
    },
    type: function type(n) {
      return n === di || null === n ? n + "" : Object[xi.p].toString.call(n).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    },
    bind: r
  };

  function t(n) {
    return n ? vi.innerWidth || hi.documentElement[xi.cW] || hi.body[xi.cW] : vi.innerHeight || hi.documentElement[xi.cH] || hi.body[xi.cH];
  }

  function r(n, t) {
    if (_typeof(n) != bi) throw "Can't bind function!";

    var r = xi.p,
        e = Array[r].slice.call(arguments, 2),
        i = function i() {},
        o = function o() {
      return n.apply(this instanceof i ? this : t, e.concat(Array[r].slice.call(arguments)));
    };

    return n[r] && (i[r] = n[r]), o[r] = new i(), o;
  }

  var s,
      v,
      h,
      k,
      I,
      T,
      d,
      p,
      Si = Math,
      zi = vi.jQuery,
      A = (s = {
    p: Si.PI,
    c: Si.cos,
    s: Si.sin,
    w: Si.pow,
    t: Si.sqrt,
    n: Si.asin,
    a: Si.abs,
    o: 1.70158
  }, {
    swing: function swing(n, t, r, e, i) {
      return .5 - s.c(n * s.p) / 2;
    },
    linear: function linear(n, t, r, e, i) {
      return n;
    },
    easeInQuad: function easeInQuad(n, t, r, e, i) {
      return e * (t /= i) * t + r;
    },
    easeOutQuad: function easeOutQuad(n, t, r, e, i) {
      return -e * (t /= i) * (t - 2) + r;
    },
    easeInOutQuad: function easeInOutQuad(n, t, r, e, i) {
      return (t /= i / 2) < 1 ? e / 2 * t * t + r : -e / 2 * (--t * (t - 2) - 1) + r;
    },
    easeInCubic: function easeInCubic(n, t, r, e, i) {
      return e * (t /= i) * t * t + r;
    },
    easeOutCubic: function easeOutCubic(n, t, r, e, i) {
      return e * ((t = t / i - 1) * t * t + 1) + r;
    },
    easeInOutCubic: function easeInOutCubic(n, t, r, e, i) {
      return (t /= i / 2) < 1 ? e / 2 * t * t * t + r : e / 2 * ((t -= 2) * t * t + 2) + r;
    },
    easeInQuart: function easeInQuart(n, t, r, e, i) {
      return e * (t /= i) * t * t * t + r;
    },
    easeOutQuart: function easeOutQuart(n, t, r, e, i) {
      return -e * ((t = t / i - 1) * t * t * t - 1) + r;
    },
    easeInOutQuart: function easeInOutQuart(n, t, r, e, i) {
      return (t /= i / 2) < 1 ? e / 2 * t * t * t * t + r : -e / 2 * ((t -= 2) * t * t * t - 2) + r;
    },
    easeInQuint: function easeInQuint(n, t, r, e, i) {
      return e * (t /= i) * t * t * t * t + r;
    },
    easeOutQuint: function easeOutQuint(n, t, r, e, i) {
      return e * ((t = t / i - 1) * t * t * t * t + 1) + r;
    },
    easeInOutQuint: function easeInOutQuint(n, t, r, e, i) {
      return (t /= i / 2) < 1 ? e / 2 * t * t * t * t * t + r : e / 2 * ((t -= 2) * t * t * t * t + 2) + r;
    },
    easeInSine: function easeInSine(n, t, r, e, i) {
      return -e * s.c(t / i * (s.p / 2)) + e + r;
    },
    easeOutSine: function easeOutSine(n, t, r, e, i) {
      return e * s.s(t / i * (s.p / 2)) + r;
    },
    easeInOutSine: function easeInOutSine(n, t, r, e, i) {
      return -e / 2 * (s.c(s.p * t / i) - 1) + r;
    },
    easeInExpo: function easeInExpo(n, t, r, e, i) {
      return 0 == t ? r : e * s.w(2, 10 * (t / i - 1)) + r;
    },
    easeOutExpo: function easeOutExpo(n, t, r, e, i) {
      return t == i ? r + e : e * (1 - s.w(2, -10 * t / i)) + r;
    },
    easeInOutExpo: function easeInOutExpo(n, t, r, e, i) {
      return 0 == t ? r : t == i ? r + e : (t /= i / 2) < 1 ? e / 2 * s.w(2, 10 * (t - 1)) + r : e / 2 * (2 - s.w(2, -10 * --t)) + r;
    },
    easeInCirc: function easeInCirc(n, t, r, e, i) {
      return -e * (s.t(1 - (t /= i) * t) - 1) + r;
    },
    easeOutCirc: function easeOutCirc(n, t, r, e, i) {
      return e * s.t(1 - (t = t / i - 1) * t) + r;
    },
    easeInOutCirc: function easeInOutCirc(n, t, r, e, i) {
      return (t /= i / 2) < 1 ? -e / 2 * (s.t(1 - t * t) - 1) + r : e / 2 * (s.t(1 - (t -= 2) * t) + 1) + r;
    },
    easeInElastic: function easeInElastic(n, t, r, e, i) {
      var o = s.o,
          u = 0,
          f = e;
      return 0 == t ? r : 1 == (t /= i) ? r + e : (u = u || .3 * i, o = f < s.a(e) ? (f = e, u / 4) : u / (2 * s.p) * s.n(e / f), -(f * s.w(2, 10 * --t) * s.s((t * i - o) * (2 * s.p) / u)) + r);
    },
    easeOutElastic: function easeOutElastic(n, t, r, e, i) {
      var o = s.o,
          u = 0,
          f = e;
      return 0 == t ? r : 1 == (t /= i) ? r + e : (u = u || .3 * i, o = f < s.a(e) ? (f = e, u / 4) : u / (2 * s.p) * s.n(e / f), f * s.w(2, -10 * t) * s.s((t * i - o) * (2 * s.p) / u) + e + r);
    },
    easeInOutElastic: function easeInOutElastic(n, t, r, e, i) {
      var o = s.o,
          u = 0,
          f = e;
      return 0 == t ? r : 2 == (t /= i / 2) ? r + e : (u = u || i * (.3 * 1.5), o = f < s.a(e) ? (f = e, u / 4) : u / (2 * s.p) * s.n(e / f), t < 1 ? f * s.w(2, 10 * --t) * s.s((t * i - o) * (2 * s.p) / u) * -.5 + r : f * s.w(2, -10 * --t) * s.s((t * i - o) * (2 * s.p) / u) * .5 + e + r);
    },
    easeInBack: function easeInBack(n, t, r, e, i, o) {
      return e * (t /= i) * t * (((o = o || s.o) + 1) * t - o) + r;
    },
    easeOutBack: function easeOutBack(n, t, r, e, i, o) {
      return e * ((t = t / i - 1) * t * (((o = o || s.o) + 1) * t + o) + 1) + r;
    },
    easeInOutBack: function easeInOutBack(n, t, r, e, i, o) {
      return o = o || s.o, (t /= i / 2) < 1 ? e / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + r : e / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + r;
    },
    easeInBounce: function easeInBounce(n, t, r, e, i) {
      return e - this.easeOutBounce(n, i - t, 0, e, i) + r;
    },
    easeOutBounce: function easeOutBounce(n, t, r, e, i) {
      var o = 7.5625;
      return (t /= i) < 1 / 2.75 ? e * (o * t * t) + r : t < 2 / 2.75 ? e * (o * (t -= 1.5 / 2.75) * t + .75) + r : t < 2.5 / 2.75 ? e * (o * (t -= 2.25 / 2.75) * t + .9375) + r : e * (o * (t -= 2.625 / 2.75) * t + .984375) + r;
    },
    easeInOutBounce: function easeInOutBounce(n, t, r, e, i) {
      return t < i / 2 ? .5 * this.easeInBounce(n, 2 * t, 0, e, i) + r : .5 * this.easeOutBounce(n, 2 * t - i, 0, e, i) + .5 * e + r;
    }
  }),
      Ci = (v = /[^\x20\t\r\n\f]+/g, h = " ", k = "scrollLeft", I = "scrollTop", T = [], d = Oi.type, p = {
    animationIterationCount: !0,
    columnCount: !0,
    fillOpacity: !0,
    flexGrow: !0,
    flexShrink: !0,
    fontWeight: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0
  }, M[xi.p] = {
    on: function on(t, r) {
      var e,
          i = (t = (t || "").match(v) || [""])[xi.l],
          o = 0;
      return this.each(function () {
        e = this;

        try {
          if (e.addEventListener) for (; o < i; o++) {
            e.addEventListener(t[o], r);
          } else if (e.detachEvent) for (; o < i; o++) {
            e.attachEvent("on" + t[o], r);
          }
        } catch (n) {}
      });
    },
    off: function off(t, r) {
      var e,
          i = (t = (t || "").match(v) || [""])[xi.l],
          o = 0;
      return this.each(function () {
        e = this;

        try {
          if (e.removeEventListener) for (; o < i; o++) {
            e.removeEventListener(t[o], r);
          } else if (e.detachEvent) for (; o < i; o++) {
            e.detachEvent("on" + t[o], r);
          }
        } catch (n) {}
      });
    },
    one: function one(n, i) {
      return n = (n || "").match(v) || [""], this.each(function () {
        var e = M(this);
        M.each(n, function (n, t) {
          var r = function r(n) {
            i.call(this, n), e.off(t, r);
          };

          e.on(t, r);
        });
      });
    },
    trigger: function trigger(n) {
      var t, r;
      return this.each(function () {
        t = this, hi.createEvent ? ((r = hi.createEvent("HTMLEvents")).initEvent(n, !0, !1), t.dispatchEvent(r)) : t.fireEvent("on" + n);
      });
    },
    append: function append(n) {
      return this.each(function () {
        i(this, "beforeend", n);
      });
    },
    prepend: function prepend(n) {
      return this.each(function () {
        i(this, "afterbegin", n);
      });
    },
    before: function before(n) {
      return this.each(function () {
        i(this, "beforebegin", n);
      });
    },
    after: function after(n) {
      return this.each(function () {
        i(this, "afterend", n);
      });
    },
    remove: function remove() {
      return this.each(function () {
        var n = this.parentNode;
        null != n && n.removeChild(this);
      });
    },
    unwrap: function unwrap() {
      var n,
          t,
          r,
          e = [];

      for (this.each(function () {
        -1 === H(r = this.parentNode, e) && e.push(r);
      }), n = 0; n < e[xi.l]; n++) {
        for (t = e[n], r = t.parentNode; t.firstChild;) {
          r.insertBefore(t.firstChild, t);
        }

        r.removeChild(t);
      }

      return this;
    },
    wrapAll: function wrapAll(n) {
      for (var t, r = this, e = M(n)[0], i = e, o = r[0].parentNode, u = r[0].previousSibling; 0 < i.childNodes[xi.l];) {
        i = i.childNodes[0];
      }

      for (t = 0; r[xi.l] - t; i.firstChild === r[0] && t++) {
        i.appendChild(r[t]);
      }

      var f = u ? u.nextSibling : o.firstChild;
      return o.insertBefore(e, f), this;
    },
    wrapInner: function wrapInner(r) {
      return this.each(function () {
        var n = M(this),
            t = n.contents();
        t[xi.l] ? t.wrapAll(r) : n.append(r);
      });
    },
    wrap: function wrap(n) {
      return this.each(function () {
        M(this).wrapAll(n);
      });
    },
    css: function css(n, t) {
      var r,
          e,
          i,
          o = vi.getComputedStyle;
      return d(n) == gi ? t === di ? (r = this[0], i = o ? o(r, null) : r.currentStyle[n], o ? null != i ? i.getPropertyValue(n) : r[xi.s][n] : i) : this.each(function () {
        y(this, n, t);
      }) : this.each(function () {
        for (e in n) {
          y(this, e, n[e]);
        }
      });
    },
    hasClass: function hasClass(n) {
      for (var t, r, e = 0, i = h + n + h; t = this[e++];) {
        if ((r = t.classList) && r.contains(n)) return !0;
        if (1 === t.nodeType && -1 < (h + g(t.className + "") + h).indexOf(i)) return !0;
      }

      return !1;
    },
    addClass: function addClass(n) {
      var t,
          r,
          e,
          i,
          o,
          u,
          f,
          a,
          c = 0,
          s = 0;
      if (n) for (t = n.match(v) || []; r = this[c++];) {
        if (a = r.classList, f === di && (f = a !== di), f) for (; o = t[s++];) {
          a.add(o);
        } else if (i = r.className + "", e = 1 === r.nodeType && h + g(i) + h) {
          for (; o = t[s++];) {
            e.indexOf(h + o + h) < 0 && (e += o + h);
          }

          i !== (u = g(e)) && (r.className = u);
        }
      }
      return this;
    },
    removeClass: function removeClass(n) {
      var t,
          r,
          e,
          i,
          o,
          u,
          f,
          a,
          c = 0,
          s = 0;
      if (n) for (t = n.match(v) || []; r = this[c++];) {
        if (a = r.classList, f === di && (f = a !== di), f) for (; o = t[s++];) {
          a.remove(o);
        } else if (i = r.className + "", e = 1 === r.nodeType && h + g(i) + h) {
          for (; o = t[s++];) {
            for (; -1 < e.indexOf(h + o + h);) {
              e = e.replace(h + o + h, h);
            }
          }

          i !== (u = g(e)) && (r.className = u);
        }
      }
      return this;
    },
    hide: function hide() {
      return this.each(function () {
        this[xi.s].display = "none";
      });
    },
    show: function show() {
      return this.each(function () {
        this[xi.s].display = "block";
      });
    },
    attr: function attr(n, t) {
      for (var r, e = 0; r = this[e++];) {
        if (t === di) return r.getAttribute(n);
        r.setAttribute(n, t);
      }

      return this;
    },
    removeAttr: function removeAttr(n) {
      return this.each(function () {
        this.removeAttribute(n);
      });
    },
    offset: function offset() {
      var n = this[0][xi.bCR](),
          t = vi.pageXOffset || hi.documentElement[k],
          r = vi.pageYOffset || hi.documentElement[I];
      return {
        top: n.top + r,
        left: n.left + t
      };
    },
    position: function position() {
      var n = this[0];
      return {
        top: n.offsetTop,
        left: n.offsetLeft
      };
    },
    scrollLeft: function scrollLeft(n) {
      for (var t, r = 0; t = this[r++];) {
        if (n === di) return t[k];
        t[k] = n;
      }

      return this;
    },
    scrollTop: function scrollTop(n) {
      for (var t, r = 0; t = this[r++];) {
        if (n === di) return t[I];
        t[I] = n;
      }

      return this;
    },
    val: function val(n) {
      var t = this[0];
      return n ? (t.value = n, this) : t.value;
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(n) {
      return M(this[0 <= n ? n : this[xi.l] + n]);
    },
    find: function find(t) {
      var r,
          e = [];
      return this.each(function () {
        var n = this.querySelectorAll(t);

        for (r = 0; r < n[xi.l]; r++) {
          e.push(n[r]);
        }
      }), M(e);
    },
    children: function children(n) {
      var t,
          r,
          e,
          i = [];
      return this.each(function () {
        for (r = this.children, e = 0; e < r[xi.l]; e++) {
          t = r[e], (!n || t.matches && t.matches(n) || w(t, n)) && i.push(t);
        }
      }), M(i);
    },
    parent: function parent(n) {
      var t,
          r = [];
      return this.each(function () {
        t = this.parentNode, n && !M(t).is(n) || r.push(t);
      }), M(r);
    },
    is: function is(n) {
      var t, r;

      for (r = 0; r < this[xi.l]; r++) {
        if (t = this[r], ":visible" === n) return _(t);
        if (":hidden" === n) return !_(t);
        if (t.matches && t.matches(n) || w(t, n)) return !0;
      }

      return !1;
    },
    contents: function contents() {
      var n,
          t,
          r = [];
      return this.each(function () {
        for (n = this.childNodes, t = 0; t < n[xi.l]; t++) {
          r.push(n[t]);
        }
      }), M(r);
    },
    each: function each(n) {
      return e(this, n);
    },
    animate: function animate(n, t, r, e) {
      return this.each(function () {
        x(this, n, t, r, e);
      });
    },
    stop: function stop(n, t) {
      return this.each(function () {
        !function f(n, t, r) {
          for (var e, i, o, u = 0; u < T[xi.l]; u++) {
            if ((e = T[u]).el === n) {
              if (0 < e.q[xi.l]) {
                if ((i = e.q[0]).stop = !0, Oi.cAF()(i.frame), e.q.splice(0, 1), r) for (o in i.props) {
                  W(n, o, i.props[o]);
                }
                t ? e.q = [] : N(e, !1);
              }

              break;
            }
          }
        }(this, n, t);
      });
    }
  }, b(M, {
    extend: b,
    inArray: H,
    isEmptyObject: L,
    isPlainObject: R,
    each: e
  }), M);

  function b() {
    var n,
        t,
        r,
        e,
        i,
        o,
        u = arguments[0] || {},
        f = 1,
        a = arguments[xi.l],
        c = !1;

    for (d(u) == wi && (c = u, u = arguments[1] || {}, f = 2), d(u) != pi && !d(u) == bi && (u = {}), a === f && (u = M, --f); f < a; f++) {
      if (null != (i = arguments[f])) for (e in i) {
        n = u[e], u !== (r = i[e]) && (c && r && (R(r) || (t = Oi.isA(r))) ? (o = t ? (t = !1, n && Oi.isA(n) ? n : []) : n && R(n) ? n : {}, u[e] = b(c, o, r)) : r !== di && (u[e] = r));
      }
    }

    return u;
  }

  function H(n, t, r) {
    for (var e = r || 0; e < t[xi.l]; e++) {
      if (t[e] === n) return e;
    }

    return -1;
  }

  function E(n) {
    return d(n) == bi;
  }

  function L(n) {
    for (var t in n) {
      return !1;
    }

    return !0;
  }

  function R(n) {
    if (!n || d(n) != pi) return !1;
    var t,
        r = xi.p,
        e = Object[r].hasOwnProperty,
        i = e.call(n, "constructor"),
        o = n.constructor && n.constructor[r] && e.call(n.constructor[r], "isPrototypeOf");
    if (n.constructor && !i && !o) return !1;

    for (t in n) {
      ;
    }

    return d(t) == f || e.call(n, t);
  }

  function e(n, t) {
    var r = 0;
    if (m(n)) for (; r < n[xi.l] && !1 !== t.call(n[r], r, n[r]); r++) {
      ;
    } else for (r in n) {
      if (!1 === t.call(n[r], r, n[r])) break;
    }
    return n;
  }

  function m(n) {
    var t = !!n && [xi.l] in n && n[xi.l],
        r = d(n);
    return !E(r) && (r == mi || 0 === t || d(t) == yi && 0 < t && t - 1 in n);
  }

  function g(n) {
    return (n.match(v) || []).join(h);
  }

  function w(n, t) {
    for (var r = (n.parentNode || hi).querySelectorAll(t) || [], e = r[xi.l]; e--;) {
      if (r[e] == n) return 1;
    }
  }

  function i(n, t, r) {
    if (Oi.isA(r)) for (var e = 0; e < r[xi.l]; e++) {
      i(n, t, r[e]);
    } else d(r) == gi ? n.insertAdjacentHTML(t, r) : n.insertAdjacentElement(t, r.nodeType ? r : r[0]);
  }

  function y(n, t, r) {
    try {
      n[xi.s][t] !== di && (n[xi.s][t] = function e(n, t) {
        p[n.toLowerCase()] || d(t) != yi || (t += "px");
        return t;
      }(t, r));
    } catch (i) {}
  }

  function N(n, t) {
    var r, e;
    !1 !== t && n.q.splice(0, 1), 0 < n.q[xi.l] ? (e = n.q[0], x(n.el, e.props, e.duration, e.easing, e.complete, !0)) : -1 < (r = H(n, T)) && T.splice(r, 1);
  }

  function W(n, t, r) {
    t === k || t === I ? n[t] = r : y(n, t, r);
  }

  function x(n, t, r, e, i, o) {
    var u,
        f,
        a,
        c,
        s,
        l,
        v = R(r),
        h = {},
        d = {},
        p = 0;

    for (l = v ? (e = r.easing, r.start, a = r.progress, c = r.step, s = r.specialEasing, i = r.complete, r.duration) : r, s = s || {}, l = l || 400, e = e || "swing", o = o || !1; p < T[xi.l]; p++) {
      if (T[p].el === n) {
        f = T[p];
        break;
      }
    }

    for (u in f || (f = {
      el: n,
      q: []
    }, T.push(f)), t) {
      h[u] = u === k || u === I ? n[u] : M(n).css(u);
    }

    for (u in h) {
      h[u] !== t[u] && t[u] !== di && (d[u] = t[u]);
    }

    if (L(d)) o && N(f);else {
      var b,
          m,
          g,
          w,
          y,
          x,
          _,
          _O,
          S,
          z = o ? 0 : H(C, f.q),
          C = {
        props: d,
        duration: v ? r : l,
        easing: e,
        complete: i
      };

      if (-1 === z && (z = f.q[xi.l], f.q.push(C)), 0 === z) if (0 < l) _ = Oi.now(), _O = function O() {
        for (u in b = Oi.now(), S = b - _, m = C.stop || l <= S, g = 1 - (Si.max(0, _ + l - b) / l || 0), d) {
          w = parseFloat(h[u]), y = parseFloat(d[u]), x = (y - w) * A[s[u] || e](g, g * l, 0, 1, l) + w, W(n, u, x), E(c) && c(x, {
            elem: n,
            prop: u,
            start: w,
            now: x,
            end: y,
            pos: g,
            options: {
              easing: e,
              speacialEasing: s,
              duration: l,
              complete: i,
              step: c
            },
            startTime: _
          });
        }

        E(a) && a({}, g, Si.max(0, l - S)), m ? (N(f), E(i) && i()) : C.frame = Oi.rAF()(_O);
      }, C.frame = Oi.rAF()(_O);else {
        for (u in d) {
          W(n, u, d[u]);
        }

        N(f);
      }
    }
  }

  function _(n) {
    return !!(n[xi.oW] || n[xi.oH] || n.getClientRects()[xi.l]);
  }

  function M(n) {
    if (0 === arguments[xi.l]) return this;
    var t,
        r,
        e = new M(),
        i = n,
        o = 0;
    if (d(n) == gi) for (i = [], t = "<" === n.charAt(0) ? ((r = hi.createElement("div")).innerHTML = n, r.children) : hi.querySelectorAll(n); o < t[xi.l]; o++) {
      i.push(t[o]);
    }

    if (i) {
      for (d(i) == gi || m(i) && i !== vi && i !== i.self || (i = [i]), o = 0; o < i[xi.l]; o++) {
        e[o] = i[o];
      }

      e[xi.l] = i[xi.l];
    }

    return e;
  }

  var O,
      S,
      ki,
      z,
      C,
      D,
      F,
      P,
      j,
      B,
      Q,
      U,
      V,
      $,
      Ii,
      Ti = (O = [], S = "__overlayScrollbars__", function (n, t) {
    var r = arguments[xi.l];
    if (r < 1) return O;
    if (t) n[S] = t, O.push(n);else {
      var e = Oi.inA(n, O);

      if (-1 < e) {
        if (!(1 < r)) return O[e][S];
        delete n[S], O.splice(e, 1);
      }
    }
  }),
      q = ($ = [], D = Oi.type, U = {
    className: ["os-theme-dark", [n, gi]],
    resize: ["none", "n:none b:both h:horizontal v:vertical"],
    sizeAutoCapable: P = [!0, wi],
    clipAlways: P,
    normalizeRTL: P,
    paddingAbsolute: j = [!(F = [wi, yi, gi, mi, pi, bi, n]), wi],
    autoUpdate: [null, [n, wi]],
    autoUpdateInterval: [33, yi],
    updateOnLoad: [["img"], [gi, mi, n]],
    nativeScrollbarsOverlaid: {
      showNativeScrollbars: j,
      initialize: P
    },
    overflowBehavior: {
      x: ["scroll", Q = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"],
      y: ["scroll", Q]
    },
    scrollbars: {
      visibility: ["auto", "v:visible h:hidden a:auto"],
      autoHide: ["never", "n:never s:scroll l:leave m:move"],
      autoHideDelay: [800, yi],
      dragScrolling: P,
      clickScrolling: j,
      touchSupport: P,
      snapHandle: j
    },
    textarea: {
      dynWidth: j,
      dynHeight: j,
      inheritedAttrs: [["style", "class"], [gi, mi, n]]
    },
    callbacks: {
      onInitialized: B = [null, [n, bi]],
      onInitializationWithdrawn: B,
      onDestroyed: B,
      onScrollStart: B,
      onScroll: B,
      onScrollStop: B,
      onOverflowChanged: B,
      onOverflowAmountChanged: B,
      onDirectionChanged: B,
      onContentSizeChanged: B,
      onHostSizeChanged: B,
      onUpdated: B
    }
  }, Ii = {
    g: (V = function V(i) {
      var o = function o(n) {
        var t, r, e;

        for (t in n) {
          n[xi.hOP](t) && (r = n[t], (e = D(r)) == mi ? n[t] = r[i ? 1 : 0] : e == pi && (n[t] = o(r)));
        }

        return n;
      };

      return o(Ci.extend(!0, {}, U));
    })(),
    _: V(!0),
    O: function O(n, t, I, r) {
      var e = {},
          i = {},
          o = Ci.extend(!0, {}, n),
          T = Ci.inArray,
          A = Ci.isEmptyObject,
          H = function H(n, t, r, e, i, o) {
        for (var u in t) {
          if (t[xi.hOP](u) && n[xi.hOP](u)) {
            var f,
                a,
                c,
                s,
                l,
                v,
                h,
                d,
                p = !1,
                b = !1,
                m = t[u],
                g = D(m),
                w = g == pi,
                y = Oi.isA(m) ? m : [m],
                x = r[u],
                _ = n[u],
                O = D(_),
                S = o ? o + "." : "",
                z = 'The option "' + S + u + "\" wasn't set, because",
                C = [],
                k = [];
            if (x = x === di ? {} : x, w && O == pi) e[u] = {}, i[u] = {}, H(_, m, x, e[u], i[u], S + u), Ci.each([n, e, i], function (n, t) {
              A(t[u]) && delete t[u];
            });else if (!w) {
              for (v = 0; v < y[xi.l]; v++) {
                if (l = y[v], c = (g = D(l)) == gi && -1 === T(l, F)) for (C.push(gi), f = l.split(" "), k = k.concat(f), h = 0; h < f[xi.l]; h++) {
                  for (s = (a = f[h].split(":"))[0], d = 0; d < a[xi.l]; d++) {
                    if (_ === a[d]) {
                      p = !0;
                      break;
                    }
                  }

                  if (p) break;
                } else if (C.push(l), O === l) {
                  p = !0;
                  break;
                }
              }

              p ? ((b = _ !== x) && (e[u] = _), (c ? T(x, a) < 0 : b) && (i[u] = c ? s : _)) : I && console.warn(z + " it doesn't accept the type [ " + O.toUpperCase() + ' ] with the value of "' + _ + '".\r\nAccepted types are: [ ' + C.join(", ").toUpperCase() + " ]." + (0 < k[length] ? "\r\nValid strings are: [ " + k.join(", ").split(":").join(", ") + " ]." : "")), delete n[u];
            }
          }
        }
      };

      return H(o, t, r || {}, e, i), !A(o) && I && console.warn("The following options are discarded due to invalidity:\r\n" + vi.JSON.stringify(o, null, 2)), {
        S: e,
        z: i
      };
    }
  }, (ki = vi.OverlayScrollbars = function (n, r, e) {
    if (0 === arguments[xi.l]) return this;
    var i,
        t,
        o = [],
        u = Ci.isPlainObject(r);
    return n ? (n = n[xi.l] != di ? n : [n[0] || n], X(), 0 < n[xi.l] && (u ? Ci.each(n, function (n, t) {
      (i = t) !== di && o.push(K(i, r, e, z, C));
    }) : Ci.each(n, function (n, t) {
      i = Ti(t), ("!" === r && ki.valid(i) || Oi.type(r) == bi && r(t, i) || r === di) && o.push(i);
    }), t = 1 === o[xi.l] ? o[0] : o), t) : u || !r ? t : o;
  }).globals = function () {
    X();
    var n = Ci.extend(!0, {}, z);
    return delete n.msie, n;
  }, ki.defaultOptions = function (n) {
    X();
    var t = z.defaultOptions;
    if (n === di) return Ci.extend(!0, {}, t);
    z.defaultOptions = Ci.extend(!0, {}, t, Ii.O(n, Ii._, !0, t).S);
  }, ki.valid = function (n) {
    return n instanceof ki && !n.getState().destroyed;
  }, ki.extension = function (n, t, r) {
    var e = Oi.type(n) == gi,
        i = arguments[xi.l],
        o = 0;
    if (i < 1 || !e) return Ci.extend(!0, {
      length: $[xi.l]
    }, $);
    if (e) if (Oi.type(t) == bi) $.push({
      name: n,
      extensionFactory: t,
      defaultOptions: r
    });else for (; o < $[xi.l]; o++) {
      if ($[o].name === n) {
        if (!(1 < i)) return Ci.extend(!0, {}, $[o]);
        $.splice(o, 1);
      }
    }
  }, ki);

  function X() {
    z = z || new Y(Ii.g), C = C || new G(z);
  }

  function Y(n) {
    var _ = this,
        i = "overflow",
        O = Ci("body"),
        S = Ci('<div id="os-dummy-scrollbar-size"><div></div></div>'),
        o = S[0],
        e = Ci(S.children("div").eq(0));

    O.append(S), S.hide().show();
    var t,
        r,
        u,
        f,
        a,
        c,
        s,
        l,
        v,
        h = z(o),
        d = {
      x: 0 === h.x,
      y: 0 === h.y
    },
        p = (r = vi.navigator.userAgent, f = "substring", a = r[u = "indexOf"]("MSIE "), c = r[u]("Trident/"), s = r[u]("Edge/"), l = r[u]("rv:"), v = parseInt, 0 < a ? t = v(r[f](a + 5, r[u](".", a)), 10) : 0 < c ? t = v(r[f](l + 3, r[u](".", l)), 10) : 0 < s && (t = v(r[f](s + 5, r[u](".", s)), 10)), t);

    function z(n) {
      return {
        x: n[xi.oH] - n[xi.cH],
        y: n[xi.oW] - n[xi.cW]
      };
    }

    Ci.extend(_, {
      defaultOptions: n,
      msie: p,
      autoUpdateLoop: !1,
      autoUpdateRecommended: !Oi.mO(),
      nativeScrollbarSize: h,
      nativeScrollbarIsOverlaid: d,
      nativeScrollbarStyling: function () {
        var n = !1;
        S.addClass("os-viewport-native-scrollbars-invisible");

        try {
          n = "none" === S.css("scrollbar-width") && (9 < p || !p) || "none" === vi.getComputedStyle(o, "::-webkit-scrollbar").getPropertyValue("display");
        } catch (t) {}

        return n;
      }(),
      overlayScrollbarDummySize: {
        x: 30,
        y: 30
      },
      cssCalc: _i.d("width", "calc", "(1px)") || null,
      restrictedMeasuring: function () {
        S.css(i, "hidden");
        var n = o[xi.sW],
            t = o[xi.sH];
        S.css(i, "visible");
        var r = o[xi.sW],
            e = o[xi.sH];
        return n - r != 0 || t - e != 0;
      }(),
      rtlScrollBehavior: function () {
        S.css({
          "overflow-y": "hidden",
          "overflow-x": "scroll",
          direction: "rtl"
        }).scrollLeft(0);
        var n = S.offset(),
            t = e.offset();
        S.scrollLeft(-999);
        var r = e.offset();
        return {
          i: n.left === t.left,
          n: t.left !== r.left
        };
      }(),
      supportTransform: !!_i.v("transform"),
      supportTransition: !!_i.v("transition"),
      supportPassiveEvents: function () {
        var n = !1;

        try {
          vi.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              n = !0;
            }
          }));
        } catch (t) {}

        return n;
      }(),
      supportResizeObserver: !!Oi.rO(),
      supportMutationObserver: !!Oi.mO()
    }), S.removeAttr(xi.s).remove(), function () {
      if (!d.x || !d.y) {
        var m = Si.abs,
            g = Oi.wW(),
            w = Oi.wH(),
            y = x();
        Ci(vi).on("resize", function () {
          if (0 < Ti().length) {
            var n = Oi.wW(),
                t = Oi.wH(),
                r = n - g,
                e = t - w;
            if (0 == r && 0 == e) return;
            var i,
                o = Si.round(n / (g / 100)),
                u = Si.round(t / (w / 100)),
                f = m(r),
                a = m(e),
                c = m(o),
                s = m(u),
                l = x(),
                v = 2 < f && 2 < a,
                h = !function b(n, t) {
              var r = m(n),
                  e = m(t);
              return r !== e && r + 1 !== e && r - 1 !== e;
            }(c, s),
                d = v && h && l !== y && 0 < y,
                p = _.nativeScrollbarSize;
            d && (O.append(S), i = _.nativeScrollbarSize = z(S[0]), S.remove(), p.x === i.x && p.y === i.y || Ci.each(Ti(), function () {
              Ti(this) && Ti(this).update("zoom");
            })), g = n, w = t, y = l;
          }
        });
      }

      function x() {
        var n = vi.screen.deviceXDPI || 0,
            t = vi.screen.logicalXDPI || 1;
        return vi.devicePixelRatio || n / t;
      }
    }();
  }

  function G(r) {
    var c,
        e = Ci.inArray,
        s = Oi.now,
        l = "autoUpdate",
        v = xi.l,
        h = [],
        d = [],
        p = !1,
        b = 33,
        m = s(),
        g = function g() {
      if (0 < h[v] && p) {
        c = Oi.rAF()(function () {
          g();
        });
        var n,
            t,
            r,
            e,
            i,
            o,
            u = s(),
            f = u - m;

        if (b < f) {
          m = u - f % b, n = 33;

          for (var a = 0; a < h[v]; a++) {
            (t = h[a]) !== di && (e = (r = t.options())[l], i = Si.max(1, r.autoUpdateInterval), o = s(), (!0 === e || null === e) && o - d[a] > i && (t.update("auto"), d[a] = new Date(o += i)), n = Si.max(1, Si.min(n, i)));
          }

          b = n;
        }
      } else b = 33;
    };

    this.add = function (n) {
      -1 === e(n, h) && (h.push(n), d.push(s()), 0 < h[v] && !p && (p = !0, r.autoUpdateLoop = p, g()));
    }, this.remove = function (n) {
      var t = e(n, h);
      -1 < t && (d.splice(t, 1), h.splice(t, 1), 0 === h[v] && p && (p = !1, r.autoUpdateLoop = p, c !== di && (Oi.cAF()(c), c = -1)));
    };
  }

  function K(r, n, t, xt, _t) {
    var cn = Oi.type,
        sn = Ci.inArray,
        h = Ci.each,
        Ot = new ki(),
        e = Ci[xi.p];

    if (ht(r)) {
      if (Ti(r)) {
        var i = Ti(r);
        return i.options(n), i;
      }

      var St,
          zt,
          Ct,
          kt,
          D,
          It,
          Tt,
          At,
          F,
          ln,
          w,
          T,
          d,
          Ht,
          Et,
          Lt,
          Rt,
          y,
          p,
          Nt,
          Wt,
          Mt,
          Dt,
          Ft,
          Pt,
          jt,
          Bt,
          Qt,
          Ut,
          o,
          u,
          Vt,
          $t,
          qt,
          f,
          P,
          c,
          j,
          Xt,
          Yt,
          Gt,
          Kt,
          Jt,
          Zt,
          nr,
          tr,
          rr,
          er,
          ir,
          a,
          s,
          l,
          v,
          b,
          m,
          x,
          A,
          or,
          ur,
          fr,
          H,
          ar,
          cr,
          sr,
          lr,
          vr,
          hr,
          dr,
          pr,
          br,
          mr,
          gr,
          wr,
          yr,
          xr,
          _r,
          E,
          Or,
          Sr,
          zr,
          Cr,
          kr,
          Ir,
          Tr,
          Ar,
          g,
          _,
          Hr,
          Er,
          Lr,
          Rr,
          Nr,
          Wr,
          Mr,
          Dr,
          Fr,
          Pr,
          jr,
          Br,
          Qr,
          Ur,
          O,
          S,
          z,
          C,
          Vr,
          $r,
          k,
          I,
          qr,
          Xr,
          Yr,
          Gr,
          Kr,
          B,
          Q,
          Jr,
          Zr,
          ne,
          te,
          re = {},
          vn = {},
          hn = {},
          ee = {},
          ie = {},
          L = "-hidden",
          oe = "margin-",
          ue = "padding-",
          fe = "border-",
          ae = "top",
          ce = "right",
          se = "bottom",
          le = "left",
          ve = "min-",
          he = "max-",
          de = "width",
          pe = "height",
          be = "float",
          me = "",
          ge = "auto",
          dn = "sync",
          we = "scroll",
          ye = "100%",
          pn = "x",
          bn = "y",
          R = ".",
          xe = " ",
          N = "scrollbar",
          W = "-horizontal",
          M = "-vertical",
          _e = we + "Left",
          Oe = we + "Top",
          U = "mousedown touchstart",
          V = "mouseup touchend touchcancel",
          $ = "mousemove touchmove",
          q = "mouseenter",
          X = "mouseleave",
          Y = "keydown",
          G = "keyup",
          K = "selectstart",
          J = "transitionend webkitTransitionEnd oTransitionEnd",
          Z = "__overlayScrollbarsRO__",
          nn = "os-",
          tn = "os-html",
          rn = "os-host",
          en = rn + "-foreign",
          on = rn + "-textarea",
          un = rn + "-" + N + W + L,
          fn = rn + "-" + N + M + L,
          an = rn + "-transition",
          Se = rn + "-rtl",
          ze = rn + "-resize-disabled",
          Ce = rn + "-scrolling",
          ke = rn + "-overflow",
          Ie = (ke = rn + "-overflow") + "-x",
          Te = ke + "-y",
          mn = "os-textarea",
          gn = mn + "-cover",
          wn = "os-padding",
          yn = "os-viewport",
          Ae = yn + "-native-scrollbars-invisible",
          xn = yn + "-native-scrollbars-overlaid",
          _n = "os-content",
          He = "os-content-arrange",
          Ee = "os-content-glue",
          Le = "os-size-auto-observer",
          On = "os-resize-observer",
          Sn = "os-resize-observer-item",
          zn = Sn + "-final",
          Cn = "os-text-inherit",
          kn = nn + N,
          In = kn + "-track",
          Tn = In + "-off",
          An = kn + "-handle",
          Hn = An + "-off",
          En = kn + "-unusable",
          Ln = kn + "-" + ge + L,
          Rn = kn + "-corner",
          Re = Rn + "-resize",
          Ne = Re + "-both",
          We = Re + W,
          Me = Re + M,
          Nn = kn + W,
          Wn = kn + M,
          Mn = "os-dragging",
          De = "os-theme-none",
          Dn = [Ae, xn, Tn, Hn, En, Ln, Re, Ne, We, Me, Mn].join(xe),
          Fn = [],
          Pn = [xi.ti],
          jn = {},
          Fe = {},
          Pe = 42,
          Bn = "load",
          Qn = [],
          Un = {},
          Vn = ["wrap", "cols", "rows"],
          $n = [xi.i, xi.c, xi.s, "open"].concat(Pn),
          qn = [];

      return Ot.sleep = function () {
        Ut = !0;
      }, Ot.update = function (n) {
        var t, r, e, i, o;
        if (!Et) return cn(n) == gi ? n === ge ? (t = function u() {
          if (!Ut && !Vr) {
            var r,
                e,
                i,
                o = [],
                n = [{
              C: Yt,
              k: $n.concat(":visible")
            }, {
              C: Lt ? Xt : di,
              k: Vn
            }];
            return h(n, function (n, t) {
              (r = t.C) && h(t.k, function (n, t) {
                e = ":" === t.charAt(0) ? r.is(t) : r.attr(t), i = Un[t], fi(e, i) && o.push(t), Un[t] = e;
              });
            }), it(o), 0 < o[xi.l];
          }
        }(), r = function a() {
          if (Ut) return !1;
          var n,
              t,
              r,
              e,
              i = oi(),
              o = Lt && br && !Fr ? Xt.val().length : 0,
              u = !Vr && br && !Lt,
              f = {};
          return u && (n = nr.css(be), f[be] = Qt ? ce : le, f[de] = ge, nr.css(f)), e = {
            w: i[xi.sW] + o,
            h: i[xi.sH] + o
          }, u && (f[be] = n, f[de] = ye, nr.css(f)), t = Ve(), r = fi(e, g), g = e, r || t;
        }(), (e = t || r) && qe({
          I: r,
          T: Ht ? di : Vt
        })) : n === dn ? Vr ? (i = z(O.takeRecords()), o = C(S.takeRecords())) : i = Ot.update(ge) : "zoom" === n && qe({
          A: !0,
          I: !0
        }) : (n = Ut || n, Ut = !1, Ot.update(dn) && !n || qe({
          H: n
        })), Xe(), e || i || o;
      }, Ot.options = function (n, t) {
        var r,
            e = {};

        if (Ci.isEmptyObject(n) || !Ci.isPlainObject(n)) {
          if (cn(n) != gi) return u;
          if (!(1 < arguments.length)) return bt(u, n);
          !function a(n, t, r) {
            for (var e = t.split(R), i = e.length, o = 0, u = {}, f = u; o < i; o++) {
              u = u[e[o]] = o + 1 < i ? {} : r;
            }

            Ci.extend(n, f, !0);
          }(e, n, t), r = ot(e);
        } else r = ot(n);

        Ci.isEmptyObject(r) || qe({
          T: r
        });
      }, Ot.destroy = function () {
        if (!Et) {
          for (var n in _t.remove(Ot), Qe(), je(Kt), je(Gt), jn) {
            Ot.removeExt(n);
          }

          for (; 0 < qn[xi.l];) {
            qn.pop()();
          }

          Ue(!0), rr && gt(rr), tr && gt(tr), Wt && gt(Gt), at(!0), st(!0), ut(!0);

          for (var t = 0; t < Qn[xi.l]; t++) {
            Ci(Qn[t]).off(Bn, rt);
          }

          Qn = di, Ut = Et = !0, Ti(r, 0), ti("onDestroyed");
        }
      }, Ot.scroll = function (n, t, r, e) {
        if (0 === arguments.length || n === di) {
          var i = Wr && Qt && Ct.i,
              o = Wr && Qt && Ct.n,
              u = vn.L,
              f = vn.R,
              a = vn.N;
          return f = i ? 1 - f : f, u = i ? a - u : u, a *= o ? -1 : 1, {
            position: {
              x: u *= o ? -1 : 1,
              y: hn.L
            },
            ratio: {
              x: f,
              y: hn.R
            },
            max: {
              x: a,
              y: hn.N
            },
            handleOffset: {
              x: vn.W,
              y: hn.W
            },
            handleLength: {
              x: vn.M,
              y: hn.M
            },
            handleLengthRatio: {
              x: vn.D,
              y: hn.D
            },
            trackLength: {
              x: vn.F,
              y: hn.F
            },
            snappedHandleOffset: {
              x: vn.P,
              y: hn.P
            },
            isRTL: Qt,
            isRTLNormalized: Wr
          };
        }

        Ot.update(dn);

        var c,
            s,
            l,
            v,
            h,
            g,
            w,
            d,
            p,
            y = Wr,
            b = [pn, le, "l"],
            m = [bn, ae, "t"],
            x = ["+=", "-=", "*=", "/="],
            _ = cn(t) == pi,
            O = _ ? t.complete : e,
            S = {},
            z = {},
            C = "begin",
            k = "nearest",
            I = "never",
            T = "ifneeded",
            A = xi.l,
            H = [pn, bn, "xy", "yx"],
            E = [C, "end", "center", k],
            L = ["always", I, T],
            R = n[xi.hOP]("el"),
            N = R ? n.el : n,
            W = !!(N instanceof Ci || zi) && N instanceof zi,
            M = !W && ht(N),
            D = function D() {
          s && Je(!0), l && Je(!1);
        },
            F = cn(O) != bi ? di : function () {
          D(), O();
        };

        function P(n, t) {
          for (c = 0; c < t[A]; c++) {
            if (n === t[c]) return 1;
          }
        }

        function j(n, t) {
          var r = n ? b : m;
          if (t = cn(t) == gi || cn(t) == yi ? [t, t] : t, Oi.isA(t)) return n ? t[0] : t[1];
          if (cn(t) == pi) for (c = 0; c < r[A]; c++) {
            if (r[c] in t) return t[r[c]];
          }
        }

        function B(n, t) {
          var r,
              e,
              i,
              o,
              u = cn(t) == gi,
              f = n ? vn : hn,
              a = f.L,
              c = f.N,
              s = Qt && n,
              l = s && Ct.n && !y,
              v = "replace",
              h = eval;

          if ((e = u ? (2 < t[A] && (o = t.substr(0, 2), -1 < sn(o, x) && (r = o)), t = (t = r ? t.substr(2) : t)[v](/min/g, 0)[v](/</g, 0)[v](/max/g, (l ? "-" : me) + ye)[v](/>/g, (l ? "-" : me) + ye)[v](/px/g, me)[v](/%/g, " * " + c * (s && Ct.n ? -1 : 1) / 100)[v](/vw/g, " * " + ee.w)[v](/vh/g, " * " + ee.h), ii(isNaN(t) ? ii(h(t), !0).toFixed() : t)) : t) !== di && !isNaN(e) && cn(e) == yi) {
            var d = y && s,
                p = a * (d && Ct.n ? -1 : 1),
                b = d && Ct.i,
                m = d && Ct.n;

            switch (p = b ? c - p : p, r) {
              case "+=":
                i = p + e;
                break;

              case "-=":
                i = p - e;
                break;

              case "*=":
                i = p * e;
                break;

              case "/=":
                i = p / e;
                break;

              default:
                i = e;
            }

            i = b ? c - i : i, i *= m ? -1 : 1, i = s && Ct.n ? Si.min(0, Si.max(c, i)) : Si.max(0, Si.min(c, i));
          }

          return i === a ? di : i;
        }

        function Q(n, t, r, e) {
          var i,
              o,
              u = [r, r],
              f = cn(n);
          if (f == t) n = [n, n];else if (f == mi) {
            if (2 < (i = n[A]) || i < 1) n = u;else for (1 === i && (n[1] = r), c = 0; c < i; c++) {
              if (o = n[c], cn(o) != t || !P(o, e)) {
                n = u;
                break;
              }
            }
          } else n = f == pi ? [n[pn] || r, n[bn] || r] : u;
          return {
            x: n[0],
            y: n[1]
          };
        }

        function U(n) {
          var t,
              r,
              e = [],
              i = [ae, ce, se, le];

          for (c = 0; c < n[A] && c !== i[A]; c++) {
            t = n[c], (r = cn(t)) == wi ? e.push(t ? ii(p.css(oe + i[c])) : 0) : e.push(r == yi ? t : 0);
          }

          return e;
        }

        if (W || M) {
          var V,
              $ = R ? n.margin : 0,
              q = R ? n.axis : 0,
              X = R ? n.scroll : 0,
              Y = R ? n.block : 0,
              G = [0, 0, 0, 0],
              K = cn($);

          if (0 < (p = W ? N : Ci(N))[A]) {
            $ = K == yi || K == wi ? U([$, $, $, $]) : K == mi ? 2 === (V = $[A]) ? U([$[0], $[1], $[0], $[1]]) : 4 <= V ? U($) : G : K == pi ? U([$[ae], $[ce], $[se], $[le]]) : G, h = P(q, H) ? q : "xy", g = Q(X, gi, "always", L), w = Q(Y, gi, C, E), d = $;
            var J = vn.L,
                Z = hn.L,
                nn = Jt.offset(),
                tn = p.offset(),
                rn = {
              x: g.x == I || h == bn,
              y: g.y == I || h == pn
            };
            tn[ae] -= d[0], tn[le] -= d[3];
            var en = {
              x: Si.round(tn[le] - nn[le] + J),
              y: Si.round(tn[ae] - nn[ae] + Z)
            };

            if (Qt && (Ct.n || Ct.i || (en.x = Si.round(nn[le] - tn[le] + J)), Ct.n && y && (en.x *= -1), Ct.i && y && (en.x = Si.round(nn[le] - tn[le] + (vn.N - J)))), w.x != C || w.y != C || g.x == T || g.y == T || Qt) {
              var on = p[0],
                  un = ln ? on[xi.bCR]() : {
                width: on[xi.oW],
                height: on[xi.oH]
              },
                  fn = {
                w: un[de] + d[3] + d[1],
                h: un[pe] + d[0] + d[2]
              },
                  an = function an(n) {
                var t = ni(n),
                    r = t.j,
                    e = t.B,
                    i = t.Q,
                    o = w[i] == (n && Qt ? C : "end"),
                    u = "center" == w[i],
                    f = w[i] == k,
                    a = g[i] == I,
                    c = g[i] == T,
                    s = ee[r],
                    l = nn[e],
                    v = fn[r],
                    h = tn[e],
                    d = u ? 2 : 1,
                    p = h + v / 2,
                    b = l + s / 2,
                    m = v <= s && l <= h && h + v <= l + s;
                a ? rn[i] = !0 : rn[i] || ((f || c) && (rn[i] = c && m, o = v < s ? b < p : p < b), en[i] -= o || u ? (s / d - v / d) * (n && Qt && y ? -1 : 1) : 0);
              };

              an(!0), an(!1);
            }

            rn.y && delete en.y, rn.x && delete en.x, n = en;
          }
        }

        S[_e] = B(!0, j(!0, n)), S[Oe] = B(!1, j(!1, n)), s = S[_e] !== di, l = S[Oe] !== di, (s || l) && (0 < t || _) ? _ ? (t.complete = F, Zt.animate(S, t)) : (v = {
          duration: t,
          complete: F
        }, Oi.isA(r) || Ci.isPlainObject(r) ? (z[_e] = r[0] || r.x, z[Oe] = r[1] || r.y, v.specialEasing = z) : v.easing = r, Zt.animate(S, v)) : (s && Zt[_e](S[_e]), l && Zt[Oe](S[Oe]), D());
      }, Ot.scrollStop = function (n, t, r) {
        return Zt.stop(n, t, r), Ot;
      }, Ot.getElements = function (n) {
        var t = {
          target: or,
          host: ur,
          padding: ar,
          viewport: cr,
          content: sr,
          scrollbarHorizontal: {
            scrollbar: a[0],
            track: s[0],
            handle: l[0]
          },
          scrollbarVertical: {
            scrollbar: v[0],
            track: b[0],
            handle: m[0]
          },
          scrollbarCorner: ir[0]
        };
        return cn(n) == gi ? bt(t, n) : t;
      }, Ot.getState = function (n) {
        function t(n) {
          if (!Ci.isPlainObject(n)) return n;

          var r = ai({}, n),
              t = function t(n, _t2) {
            r[xi.hOP](n) && (r[_t2] = r[n], delete r[n]);
          };

          return t("w", de), t("h", pe), delete r.c, r;
        }

        var r = {
          destroyed: !!t(Et),
          sleeping: !!t(Ut),
          autoUpdate: t(!Vr),
          widthAuto: t(br),
          heightAuto: t(mr),
          padding: t(wr),
          overflowAmount: t(kr),
          hideOverflow: t(pr),
          hasOverflow: t(dr),
          contentScrollSize: t(vr),
          viewportSize: t(ee),
          hostSize: t(lr),
          documentMixed: t(y)
        };
        return cn(n) == gi ? bt(r, n) : r;
      }, Ot.ext = function (n) {
        var t,
            r = "added removed on contract".split(" "),
            e = 0;

        if (cn(n) == gi) {
          if (jn[xi.hOP](n)) for (t = ai({}, jn[n]); e < r.length; e++) {
            delete t[r[e]];
          }
        } else for (e in t = {}, jn) {
          t[e] = ai({}, Ot.ext(e));
        }

        return t;
      }, Ot.addExt = function (n, t) {
        var r,
            e,
            i,
            o,
            u = ki.extension(n),
            f = !0;

        if (u) {
          if (jn[xi.hOP](n)) return Ot.ext(n);
          if ((r = u.extensionFactory.call(Ot, ai({}, u.defaultOptions), Ci, Oi)) && (i = r.contract, cn(i) == bi && (o = i(vi), f = cn(o) == wi ? o : f), f)) return e = (jn[n] = r).added, cn(e) == bi && e(t), Ot.ext(n);
        } else console.warn('A extension with the name "' + n + "\" isn't registered.");
      }, Ot.removeExt = function (n) {
        var t,
            r = jn[n];
        return !!r && (delete jn[n], t = r.removed, cn(t) == bi && t(), !0);
      }, ki.valid(function yt(n, t, r) {
        var e, _i2;

        return o = xt.defaultOptions, It = xt.nativeScrollbarStyling, At = ai({}, xt.nativeScrollbarSize), St = ai({}, xt.nativeScrollbarIsOverlaid), zt = ai({}, xt.overlayScrollbarDummySize), Ct = ai({}, xt.rtlScrollBehavior), ot(ai({}, o, t)), Tt = xt.cssCalc, D = xt.msie, kt = xt.autoUpdateRecommended, F = xt.supportTransition, ln = xt.supportTransform, w = xt.supportPassiveEvents, T = xt.supportResizeObserver, d = xt.supportMutationObserver, xt.restrictedMeasuring, P = Ci(n.ownerDocument), A = P[0], f = Ci(A.defaultView || A.parentWindow), x = f[0], c = wt(P, "html"), j = wt(c, "body"), Xt = Ci(n), or = Xt[0], Lt = Xt.is("textarea"), Rt = Xt.is("body"), y = A !== hi, p = Lt ? Xt.hasClass(mn) && Xt.parent().hasClass(_n) : Xt.hasClass(rn) && Xt.children(R + wn)[xi.l], St.x && St.y && !Vt.nativeScrollbarsOverlaid.initialize ? (ti("onInitializationWithdrawn"), p && (ut(!0), at(!0), st(!0)), Ut = Et = !0) : (Rt && ((e = {}).l = Si.max(Xt[_e](), c[_e](), f[_e]()), e.t = Si.max(Xt[Oe](), c[Oe](), f[Oe]()), _i2 = function i() {
          Zt.removeAttr(xi.ti), Xn(Zt, U, _i2, !0, !0);
        }), ut(), at(), st(), ft(), ct(!0), ct(!1), function s() {
          var r,
              t = x.top !== x,
              e = {},
              i = {},
              o = {};

          function u(n) {
            if (a(n)) {
              var t = c(n),
                  r = {};
              (ne || Zr) && (r[de] = i.w + (t.x - e.x) * o.x), (te || Zr) && (r[pe] = i.h + (t.y - e.y) * o.y), Yt.css(r), Oi.stpP(n);
            } else f(n);
          }

          function f(n) {
            var t = n !== di;
            Xn(P, [K, $, V], [tt, u, f], !0), si(j, Mn), ir.releaseCapture && ir.releaseCapture(), t && (r && Be(), Ot.update(ge)), r = !1;
          }

          function a(n) {
            var t = (n.originalEvent || n).touches !== di;
            return !Ut && !Et && (1 === Oi.mBtn(n) || t);
          }

          function c(n) {
            return D && t ? {
              x: n.screenX,
              y: n.screenY
            } : Oi.page(n);
          }

          Yn(ir, U, function (n) {
            a(n) && !Jr && (Vr && (r = !0, Qe()), e = c(n), i.w = ur[xi.oW] - (Nt ? 0 : Mt), i.h = ur[xi.oH] - (Nt ? 0 : Dt), o = vt(), Xn(P, [K, $, V], [tt, u, f]), ci(j, Mn), ir.setCapture && ir.setCapture(), Oi.prvD(n), Oi.stpP(n));
          });
        }(), Gn(), je(Kt, Kn), Rt && (Zt[_e](e.l)[Oe](e.t), hi.activeElement == n && cr.focus && (Zt.attr(xi.ti, "-1"), cr.focus(), Xn(Zt, U, _i2, !1, !0))), Ot.update(ge), Ht = !0, ti("onInitialized"), h(Fn, function (n, t) {
          ti(t.n, t.a);
        }), Fn = [], cn(r) == gi && (r = [r]), Oi.isA(r) ? h(r, function (n, t) {
          Ot.addExt(t);
        }) : Ci.isPlainObject(r) && h(r, function (n, t) {
          Ot.addExt(n, t);
        }), setTimeout(function () {
          F && !Et && ci(Yt, an);
        }, 333)), Ot;
      }(r, n, t)) && Ti(r, Ot), Ot;
    }

    function Xn(n, t, r, e, i) {
      var o = Oi.isA(t) && Oi.isA(r),
          u = e ? "removeEventListener" : "addEventListener",
          f = e ? "off" : "on",
          a = !o && t.split(xe),
          c = 0,
          s = Ci.isPlainObject(i),
          l = w && (s ? i.U : i) || !1,
          v = s && (i.V || !1),
          h = w ? {
        passive: l,
        capture: v
      } : v;
      if (o) for (; c < t[xi.l]; c++) {
        Xn(n, t[c], r[c], e, i);
      } else for (; c < a[xi.l]; c++) {
        w ? n[0][u](a[c], r, h) : n[f](a[c], r);
      }
    }

    function Yn(n, t, r, e) {
      Xn(n, t, r, !1, e), qn.push(Oi.bind(Xn, 0, n, t, r, !0, e));
    }

    function je(n, t) {
      if (n) {
        var r = Oi.rO(),
            e = "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",
            i = "childNodes",
            o = 3333333,
            u = function u() {
          n[Oe](o)[_e](Qt ? Ct.n ? -o : Ct.i ? 0 : o : o), t();
        };

        if (t) {
          if (T) ((k = n.addClass("observed").append(ui(On)).contents()[0])[Z] = new r(u)).observe(k);else if (9 < D || !kt) {
            n.prepend(ui(On, ui({
              c: Sn,
              dir: "ltr"
            }, ui(Sn, ui(zn)) + ui(Sn, ui({
              c: zn,
              style: "width: 200%; height: 200%"
            })))));

            var f,
                a,
                c,
                s,
                l = n[0][i][0][i][0],
                v = Ci(l[i][1]),
                h = Ci(l[i][0]),
                d = Ci(h[0][i][0]),
                p = l[xi.oW],
                b = l[xi.oH],
                m = xt.nativeScrollbarSize,
                g = function g() {
              h[_e](o)[Oe](o), v[_e](o)[Oe](o);
            },
                w = function w() {
              a = 0, f && (p = c, b = s, u());
            },
                y = function y(n) {
              return c = l[xi.oW], s = l[xi.oH], f = c != p || s != b, n && f && !a ? (Oi.cAF()(a), a = Oi.rAF()(w)) : n || w(), g(), n && (Oi.prvD(n), Oi.stpP(n)), !1;
            },
                x = {},
                _ = {};

            ri(_, me, [-2 * (m.y + 1), -2 * m.x, -2 * m.y, -2 * (m.x + 1)]), Ci(l).css(_), h.on(we, y), v.on(we, y), n.on(e, function () {
              y(!1);
            }), x[de] = o, x[pe] = o, d.css(x), g();
          } else {
            var O = A.attachEvent,
                S = D !== di;
            if (O) n.prepend(ui(On)), wt(n, R + On)[0].attachEvent("onresize", u);else {
              var z = A.createElement(pi);
              z.setAttribute(xi.ti, "-1"), z.setAttribute(xi.c, On), z.onload = function () {
                var n = this.contentDocument.defaultView;
                n.addEventListener("resize", u), n.document.documentElement.style.display = "none";
              }, z.type = "text/html", S && n.prepend(z), z.data = "about:blank", S || n.prepend(z), n.on(e, u);
            }
          }

          if (n[0] === H) {
            var C = function C() {
              var n = Yt.css("direction"),
                  t = {},
                  r = 0,
                  e = !1;
              return n !== E && (r = "ltr" === n ? (t[le] = 0, t[ce] = ge, o) : (t[le] = ge, t[ce] = 0, Ct.n ? -o : Ct.i ? 0 : o), Kt.children().eq(0).css(t), Kt[_e](r)[Oe](o), E = n, e = !0), e;
            };

            C(), Yn(n, we, function (n) {
              return C() && qe(), Oi.prvD(n), Oi.stpP(n), !1;
            });
          }
        } else if (T) {
          var k,
              I = (k = n.contents()[0])[Z];
          I && (I.disconnect(), delete k[Z]);
        } else gt(n.children(R + On).eq(0));
      }
    }

    function Gn() {
      if (d) {
        var o,
            u,
            f,
            a,
            c,
            s,
            r,
            e,
            i,
            l,
            n = Oi.mO(),
            v = Oi.now();
        C = function C(n) {
          var t = !1;
          return Ht && !Ut && (h(n, function () {
            return !(t = function o(n) {
              var t = n.attributeName,
                  r = n.target,
                  e = n.type,
                  i = "closest";
              if (r === sr) return null === t;

              if ("attributes" === e && (t === xi.c || t === xi.s) && !Lt) {
                if (t === xi.c && Ci(r).hasClass(rn)) return et(n.oldValue, r.className);
                if (_typeof(r[i]) != bi) return !0;
                if (null !== r[i](R + On) || null !== r[i](R + kn) || null !== r[i](R + Rn)) return !1;
              }

              return !0;
            }(this));
          }), t && (e = Oi.now(), i = mr || br, l = function l() {
            Et || (v = e, Lt && $e(), i ? qe() : Ot.update(ge));
          }, clearTimeout(r), 11 < e - v || !i ? l() : r = setTimeout(l, 11))), t;
        }, O = new n(z = function z(n) {
          var t,
              r = !1,
              e = !1,
              i = [];
          return Ht && !Ut && (h(n, function () {
            o = (t = this).target, u = t.attributeName, f = u === xi.c, a = t.oldValue, c = o.className, p && f && !e && -1 < a.indexOf(en) && c.indexOf(en) < 0 && (s = lt(!0), ur.className = c.split(xe).concat(a.split(xe).filter(function (n) {
              return n.match(s);
            })).join(xe), r = e = !0), r = r || (f ? et(a, c) : u !== xi.s || a !== o[xi.s].cssText), i.push(u);
          }), it(i), r && Ot.update(e || ge)), r;
        }), S = new n(C);
      }
    }

    function Be() {
      d && !Vr && (O.observe(ur, {
        attributes: !0,
        attributeOldValue: !0,
        attributeFilter: $n
      }), S.observe(Lt ? or : sr, {
        attributes: !0,
        attributeOldValue: !0,
        subtree: !Lt,
        childList: !Lt,
        characterData: !Lt,
        attributeFilter: Lt ? Vn : $n
      }), Vr = !0);
    }

    function Qe() {
      d && Vr && (O.disconnect(), S.disconnect(), Vr = !1);
    }

    function Kn() {
      if (!Ut) {
        var n,
            t = {
          w: H[xi.sW],
          h: H[xi.sH]
        };
        n = fi(t, _), _ = t, n && qe({
          A: !0
        });
      }
    }

    function Jn() {
      Kr && Ge(!0);
    }

    function Zn() {
      Kr && !j.hasClass(Mn) && Ge(!1);
    }

    function nt() {
      Gr && (Ge(!0), clearTimeout(I), I = setTimeout(function () {
        Gr && !Et && Ge(!1);
      }, 100));
    }

    function tt(n) {
      return Oi.prvD(n), !1;
    }

    function rt(n) {
      var r = Ci(n.target);
      mt(function (n, t) {
        r.is(t) && qe({
          I: !0
        });
      });
    }

    function Ue(n) {
      n || Ue(!0), Xn(Yt, $.split(xe)[0], nt, !Gr || n, !0), Xn(Yt, [q, X], [Jn, Zn], !Kr || n, !0), Ht || n || Yt.one("mouseover", Jn);
    }

    function Ve() {
      var n = {};
      return Rt && tr && (n.w = ii(tr.css(ve + de)), n.h = ii(tr.css(ve + pe)), n.c = fi(n, Ur), n.f = !0), !!(Ur = n).c;
    }

    function et(n, t) {
      var r,
          e,
          i = _typeof(t) == gi ? t.split(xe) : [],
          o = function f(n, t) {
        var r,
            e,
            i = [],
            o = [];

        for (r = 0; r < n.length; r++) {
          i[n[r]] = !0;
        }

        for (r = 0; r < t.length; r++) {
          i[t[r]] ? delete i[t[r]] : i[t[r]] = !0;
        }

        for (e in i) {
          o.push(e);
        }

        return o;
      }(_typeof(n) == gi ? n.split(xe) : [], i),
          u = sn(De, o);

      if (-1 < u && o.splice(u, 1), 0 < o[xi.l]) for (e = lt(!0, !0), r = 0; r < o.length; r++) {
        if (!o[r].match(e)) return !0;
      }
      return !1;
    }

    function it(n) {
      h(n = n || Pn, function (n, t) {
        if (-1 < Oi.inA(t, Pn)) {
          var r = Xt.attr(t);
          cn(r) == gi ? Zt.attr(t, r) : Zt.removeAttr(t);
        }
      });
    }

    function $e() {
      if (!Ut) {
        var n,
            t,
            r,
            e,
            i = !Fr,
            o = ee.w,
            u = ee.h,
            f = {},
            a = br || i;
        return f[ve + de] = me, f[ve + pe] = me, f[de] = ge, Xt.css(f), n = or[xi.oW], t = a ? Si.max(n, or[xi.sW] - 1) : 1, f[de] = br ? ge : ye, f[ve + de] = ye, f[pe] = ge, Xt.css(f), r = or[xi.oH], e = Si.max(r, or[xi.sH] - 1), f[de] = t, f[pe] = e, er.css(f), f[ve + de] = o, f[ve + pe] = u, Xt.css(f), {
          $: n,
          X: r,
          Y: t,
          G: e
        };
      }
    }

    function qe(n) {
      clearTimeout(qt), n = n || {}, Fe.A |= n.A, Fe.I |= n.I, Fe.H |= n.H;
      var t,
          r = Oi.now(),
          e = !!Fe.A,
          i = !!Fe.I,
          o = !!Fe.H,
          u = n.T,
          f = 0 < Pe && Ht && !Et && !o && !u && r - $t < Pe && !mr && !br;

      if (f && (qt = setTimeout(qe, Pe)), !(Et || f || Ut && !u || Ht && !o && (t = Yt.is(":hidden")) || "inline" === Yt.css("display"))) {
        $t = r, Fe = {}, !It || St.x && St.y ? At = ai({}, xt.nativeScrollbarSize) : (At.x = 0, At.y = 0), ie = {
          x: 3 * (At.x + (St.x ? 0 : 3)),
          y: 3 * (At.y + (St.y ? 0 : 3))
        }, u = u || {};

        var a = function a() {
          return fi.apply(this, [].slice.call(arguments).concat([o]));
        },
            c = {
          x: Zt[_e](),
          y: Zt[Oe]()
        },
            s = Vt.scrollbars,
            l = Vt.textarea,
            v = s.visibility,
            h = a(v, Hr),
            d = s.autoHide,
            p = a(d, Er),
            b = s.clickScrolling,
            m = a(b, Lr),
            g = s.dragScrolling,
            w = a(g, Rr),
            y = Vt.className,
            x = a(y, Mr),
            _ = Vt.resize,
            O = a(_, Nr) && !Rt,
            S = Vt.paddingAbsolute,
            z = a(S, Or),
            C = Vt.clipAlways,
            k = a(C, Sr),
            I = Vt.sizeAutoCapable && !Rt,
            T = a(I, Ar),
            A = Vt.nativeScrollbarsOverlaid.showNativeScrollbars,
            H = a(A, Ir),
            E = Vt.autoUpdate,
            L = a(E, Tr),
            R = Vt.overflowBehavior,
            N = a(R, Cr, o),
            W = l.dynWidth,
            M = a(Qr, W),
            D = l.dynHeight,
            F = a(Br, D);

        if (Xr = "n" === d, Yr = "s" === d, Gr = "m" === d, Kr = "l" === d, qr = s.autoHideDelay, Dr = Mr, Jr = "n" === _, Zr = "b" === _, ne = "h" === _, te = "v" === _, Wr = Vt.normalizeRTL, A = A && St.x && St.y, Hr = v, Er = d, Lr = b, Rr = g, Mr = y, Nr = _, Or = S, Sr = C, Ar = I, Ir = A, Tr = E, Cr = ai({}, R), Qr = W, Br = D, dr = dr || {
          x: !1,
          y: !1
        }, x && (si(Yt, Dr + xe + De), ci(Yt, y !== di && null !== y && 0 < y.length ? y : De)), L && (!0 === E || null === E && kt ? (Qe(), _t.add(Ot)) : (_t.remove(Ot), Be())), T) if (I) {
          if (rr ? rr.show() : (rr = Ci(ui(Ee)), Jt.before(rr)), Wt) Gt.show();else {
            Gt = Ci(ui(Le)), fr = Gt[0], rr.before(Gt);
            var P = {
              w: -1,
              h: -1
            };
            je(Gt, function () {
              var n = {
                w: fr[xi.oW],
                h: fr[xi.oH]
              };
              fi(n, P) && (Ht && mr && 0 < n.h || br && 0 < n.w || Ht && !mr && 0 === n.h || !br && 0 === n.w) && qe(), P = n;
            }), Wt = !0, null !== Tt && Gt.css(pe, Tt + "(100% + 1px)");
          }
        } else Wt && Gt.hide(), rr && rr.hide();
        o && (Kt.find("*").trigger(we), Wt && Gt.find("*").trigger(we)), t = t === di ? Yt.is(":hidden") : t;
        var j,
            B = !!Lt && "off" !== Xt.attr("wrap"),
            Q = a(B, Fr),
            U = Yt.css("direction"),
            V = a(U, _r),
            $ = Yt.css("box-sizing"),
            q = a($, gr),
            X = ei(ue);

        try {
          j = Wt ? fr[xi.bCR]() : null;
        } catch (wt) {
          return;
        }

        Nt = "border-box" === $;
        var Y = (Qt = "rtl" === U) ? le : ce,
            G = Qt ? ce : le,
            K = !1,
            J = !(!Wt || "none" === Yt.css(be)) && 0 === Si.round(j.right - j.left) && (!!S || 0 < ur[xi.cW] - Mt);

        if (I && !J) {
          var Z = ur[xi.oW],
              nn = rr.css(de);
          rr.css(de, ge);
          var tn = ur[xi.oW];
          rr.css(de, nn), (K = Z !== tn) || (rr.css(de, Z + 1), tn = ur[xi.oW], rr.css(de, nn), K = Z !== tn);
        }

        var rn = (J || K) && I && !t,
            en = a(rn, br),
            on = !rn && br,
            un = !(!Wt || !I || t) && 0 === Si.round(j.bottom - j.top),
            fn = a(un, mr),
            an = !un && mr,
            cn = ei(fe, "-" + de, !(rn && Nt || !Nt), !(un && Nt || !Nt)),
            sn = ei(oe),
            ln = {},
            vn = {},
            hn = function hn() {
          return {
            w: ur[xi.cW],
            h: ur[xi.cH]
          };
        },
            dn = function dn() {
          return {
            w: ar[xi.oW] + Si.max(0, sr[xi.cW] - sr[xi.sW]),
            h: ar[xi.oH] + Si.max(0, sr[xi.cH] - sr[xi.sH])
          };
        },
            pn = Mt = X.l + X.r,
            bn = Dt = X.t + X.b;

        if (pn *= S ? 1 : 0, bn *= S ? 1 : 0, X.c = a(X, wr), Ft = cn.l + cn.r, Pt = cn.t + cn.b, cn.c = a(cn, yr), jt = sn.l + sn.r, Bt = sn.t + sn.b, sn.c = a(sn, xr), Fr = B, _r = U, gr = $, br = rn, mr = un, wr = X, yr = cn, xr = sn, V && Wt && Gt.css(be, G), X.c || V || z || en || fn || q || T) {
          var mn = {},
              gn = {},
              wn = [X.t, X.r, X.b, X.l];
          ri(vn, oe, [-X.t, -X.r, -X.b, -X.l]), S ? (ri(mn, me, wn), ri(Lt ? gn : ln, ue)) : (ri(mn, me), ri(Lt ? gn : ln, ue, wn)), Jt.css(mn), Xt.css(gn);
        }

        ee = dn();

        var yn = !!Lt && $e(),
            xn = Lt && a(yn, jr),
            _n = Lt && yn ? {
          w: W ? yn.Y : yn.$,
          h: D ? yn.G : yn.X
        } : {};

        if (jr = yn, un && (fn || z || q || X.c || cn.c) ? ln[pe] = ge : (fn || z) && (ln[pe] = ye), rn && (en || z || q || X.c || cn.c || V) ? (ln[de] = ge, vn[he + de] = ye) : (en || z) && (ln[de] = ye, ln[be] = me, vn[he + de] = me), rn ? (vn[de] = ge, ln[de] = _i.d(de, "max-content intrinsic") || ge, ln[be] = G) : vn[de] = me, vn[pe] = un ? _n.h || sr[xi.cH] : me, I && rr.css(vn), nr.css(ln), ln = {}, vn = {}, e || i || xn || V || q || z || en || rn || fn || un || H || N || k || O || h || p || w || m || M || F || Q) {
          var On = "overflow",
              Sn = On + "-x",
              zn = On + "-y";

          if (!It) {
            var Cn = {},
                kn = dr.y && pr.ys && !A ? St.y ? Zt.css(Y) : -At.y : 0,
                In = dr.x && pr.xs && !A ? St.x ? Zt.css(se) : -At.x : 0;
            ri(Cn, me), Zt.css(Cn);
          }

          var Tn = oi(),
              An = {
            w: _n.w || Tn[xi.cW],
            h: _n.h || Tn[xi.cH]
          },
              Hn = Tn[xi.sW],
              En = Tn[xi.sH];
          It || (Cn[se] = an ? me : In, Cn[Y] = on ? me : kn, Zt.css(Cn)), ee = dn();
          var Ln = hn(),
              Rn = {
            w: Ln.w - jt - Ft - (Nt ? 0 : Mt),
            h: Ln.h - Bt - Pt - (Nt ? 0 : Dt)
          },
              Nn = {
            w: Si.max((rn ? An.w : Hn) + pn, Rn.w),
            h: Si.max((un ? An.h : En) + bn, Rn.h)
          };

          if (Nn.c = a(Nn, zr), zr = Nn, I) {
            (Nn.c || un || rn) && (vn[de] = Nn.w, vn[pe] = Nn.h, Lt || (An = {
              w: Tn[xi.cW],
              h: Tn[xi.cH]
            }));

            var Wn = {},
                Mn = function Mn(n) {
              var t = ni(n),
                  r = t.j,
                  e = t.K,
                  i = n ? rn : un,
                  o = n ? Ft : Pt,
                  u = n ? Mt : Dt,
                  f = n ? jt : Bt,
                  a = ee[r] - o - f - (Nt ? 0 : u);
              i && (i || !cn.c) || (vn[e] = Rn[r] - 1), !(i && An[r] < a) || n && Lt && B || (Lt && (Wn[e] = ii(er.css(e)) - 1), --vn[e]), 0 < An[r] && (vn[e] = Si.max(1, vn[e]));
            };

            Mn(!0), Mn(!1), Lt && er.css(Wn), rr.css(vn);
          }

          rn && (ln[de] = ye), !rn || Nt || Vr || (ln[be] = "none"), nr.css(ln), ln = {};
          var Dn = {
            w: Tn[xi.sW],
            h: Tn[xi.sH]
          };
          Dn.c = i = a(Dn, vr), vr = Dn, ee = dn(), e = a(Ln = hn(), lr), lr = Ln;

          var Fn = Lt && (0 === ee.w || 0 === ee.h),
              Pn = kr,
              jn = {},
              Bn = {},
              Qn = {},
              Un = {},
              Vn = {},
              $n = {},
              qn = {},
              Xn = ar[xi.bCR](),
              Yn = function Yn(n) {
            var t = ni(n),
                r = ni(!n).Q,
                e = t.Q,
                i = t.j,
                o = t.K,
                u = we + t.J + "Max",
                f = Xn[o] ? Si.abs(Xn[o] - ee[i]) : 0,
                a = Pn && 0 < Pn[e] && 0 === cr[u];
            jn[e] = "v-s" === R[e], Bn[e] = "v-h" === R[e], Qn[e] = "s" === R[e], Un[e] = Si.max(0, Si.round(100 * (Dn[i] - ee[i])) / 100), Un[e] *= Fn || a && 0 < f && f < 1 ? 0 : 1, Vn[e] = 0 < Un[e], $n[e] = jn[e] || Bn[e] ? Vn[r] && !jn[r] && !Bn[r] : Vn[e], $n[e + "s"] = !!$n[e] && (Qn[e] || jn[e]), qn[e] = Vn[e] && $n[e + "s"];
          };

          if (Yn(!0), Yn(!1), Un.c = a(Un, kr), kr = Un, Vn.c = a(Vn, dr), dr = Vn, $n.c = a($n, pr), pr = $n, St.x || St.y) {
            var Gn,
                Kn = {},
                Jn = {},
                Zn = o;
            (Vn.x || Vn.y) && (Jn.w = St.y && Vn.y ? Dn.w + zt.y : me, Jn.h = St.x && Vn.x ? Dn.h + zt.x : me, Zn = a(Jn, hr), hr = Jn), (Vn.c || $n.c || Dn.c || V || en || fn || rn || un || H) && (ln[oe + G] = ln[fe + G] = me, Gn = function Gn(n) {
              var t = ni(n),
                  r = ni(!n),
                  e = t.Q,
                  i = n ? se : Y,
                  o = n ? un : rn;
              St[e] && Vn[e] && $n[e + "s"] ? (ln[oe + i] = !o || A ? me : zt[e], ln[fe + i] = n && o || A ? me : zt[e] + "px solid transparent") : (Jn[r.j] = ln[oe + i] = ln[fe + i] = me, Zn = !0);
            }, It ? li(Zt, Ae, !A) : (Gn(!0), Gn(!1))), A && (Jn.w = Jn.h = me, Zn = !0), Zn && !It && (Kn[de] = $n.y ? Jn.w : me, Kn[pe] = $n.x ? Jn.h : me, tr || (tr = Ci(ui(He)), Zt.prepend(tr)), tr.css(Kn)), nr.css(ln);
          }

          var nt,
              tt = {};
          mn = {};

          if ((e || Vn.c || $n.c || Dn.c || N || q || H || V || k || fn) && (tt[G] = me, (nt = function nt(n) {
            var t = ni(n),
                r = ni(!n),
                e = t.Q,
                i = t.Z,
                o = n ? se : Y,
                u = function u() {
              tt[o] = me, re[r.j] = 0;
            };

            Vn[e] && $n[e + "s"] ? (tt[On + i] = we, A || It ? u() : (tt[o] = -(St[e] ? zt[e] : At[e]), re[r.j] = St[e] ? zt[r.Q] : 0)) : (tt[On + i] = me, u());
          })(!0), nt(!1), !It && (ee.h < ie.x || ee.w < ie.y) && (Vn.x && $n.x && !St.x || Vn.y && $n.y && !St.y) ? (tt[ue + ae] = ie.x, tt[oe + ae] = -ie.x, tt[ue + G] = ie.y, tt[oe + G] = -ie.y) : tt[ue + ae] = tt[oe + ae] = tt[ue + G] = tt[oe + G] = me, tt[ue + Y] = tt[oe + Y] = me, Vn.x && $n.x || Vn.y && $n.y || Fn ? Lt && Fn && (mn[Sn] = mn[zn] = "hidden") : (!C || Bn.x || jn.x || Bn.y || jn.y) && (Lt && (mn[Sn] = mn[zn] = me), tt[Sn] = tt[zn] = "visible"), Jt.css(mn), Zt.css(tt), tt = {}, (Vn.c || q || en || fn) && (!St.x || !St.y))) {
            var rt = sr[xi.s];
            rt.webkitTransform = "scale(1)", rt.display = "run-in", sr[xi.oH], rt.display = me, rt.webkitTransform = me;
          }

          if (ln = {}, V || en || fn) if (Qt && rn) {
            var et = nr.css(be),
                it = Si.round(nr.css(be, me).css(le, me).position().left);
            nr.css(be, et), it !== Si.round(nr.position().left) && (ln[le] = it);
          } else ln[le] = me;

          if (nr.css(ln), Lt && i) {
            var ot = function yt() {
              var n = or.selectionStart;
              if (n === di) return;
              var t,
                  r,
                  e = Xt.val(),
                  i = e[xi.l],
                  o = e.split("\n"),
                  u = o[xi.l],
                  f = e.substr(0, n).split("\n"),
                  a = 0,
                  c = 0,
                  s = f[xi.l],
                  l = f[f[xi.l] - 1][xi.l];

              for (r = 0; r < o[xi.l]; r++) {
                t = o[r][xi.l], c < t && (a = r + 1, c = t);
              }

              return {
                nn: s,
                tn: l,
                rn: u,
                en: c,
                "in": a,
                un: n,
                an: i
              };
            }();

            if (ot) {
              var ut = Pr === di || ot.rn !== Pr.rn,
                  ft = ot.nn,
                  at = ot.tn,
                  ct = ot["in"],
                  st = ot.rn,
                  lt = ot.en,
                  vt = ot.un,
                  ht = ot.an <= vt && $r,
                  dt = {
                x: B || at !== lt || ft !== ct ? -1 : kr.x,
                y: (B ? ht || ut && Pn && c.y === Pn.y : (ht || ut) && ft === st) ? kr.y : -1
              };
              c.x = -1 < dt.x ? Qt && Wr && Ct.i ? 0 : dt.x : c.x, c.y = -1 < dt.y ? dt.y : c.y;
            }

            Pr = ot;
          }

          Qt && Ct.i && St.y && Vn.x && Wr && (c.x += re.w || 0), rn && Yt[_e](0), un && Yt[Oe](0), Zt[_e](c.x)[Oe](c.y);

          var pt = "v" === v,
              bt = "h" === v,
              mt = "a" === v,
              gt = function gt(n, t) {
            t = t === di ? n : t, Ye(!0, n, qn.x), Ye(!1, t, qn.y);
          };

          li(Yt, ke, $n.x || $n.y), li(Yt, Ie, $n.x), li(Yt, Te, $n.y), V && !Rt && li(Yt, Se, Qt), Rt && ci(Yt, ze), O && (li(Yt, ze, Jr), li(ir, Re, !Jr), li(ir, Ne, Zr), li(ir, We, ne), li(ir, Me, te)), (h || N || $n.c || Vn.c || H) && (A ? H && (si(Yt, Ce), A && gt(!1)) : mt ? gt(qn.x, qn.y) : pt ? gt(!0) : bt && gt(!1)), (p || H) && (Ue(!Kr && !Gr), Ge(Xr, !Xr)), (e || Un.c || fn || en || O || q || z || H || V) && (Ke(!0), Je(!0), Ke(!1), Je(!1)), m && Ze(!0, b), w && Ze(!1, g), ti("onDirectionChanged", {
            isRTL: Qt,
            dir: U
          }, V), ti("onHostSizeChanged", {
            width: lr.w,
            height: lr.h
          }, e), ti("onContentSizeChanged", {
            width: vr.w,
            height: vr.h
          }, i), ti("onOverflowChanged", {
            x: Vn.x,
            y: Vn.y,
            xScrollable: $n.xs,
            yScrollable: $n.ys,
            clipped: $n.x || $n.y
          }, Vn.c || $n.c), ti("onOverflowAmountChanged", {
            x: Un.x,
            y: Un.y
          }, Un.c);
        }

        Rt && Ur && (dr.c || Ur.c) && (Ur.f || Ve(), St.y && dr.x && nr.css(ve + de, Ur.w + zt.y), St.x && dr.y && nr.css(ve + pe, Ur.h + zt.x), Ur.c = !1), Ht && u.updateOnLoad && Xe(), ti("onUpdated", {
          forced: o
        });
      }
    }

    function Xe() {
      Lt || mt(function (n, t) {
        nr.find(t).each(function (n, t) {
          Oi.inA(t, Qn) < 0 && (Qn.push(t), Ci(t).off(Bn, rt).on(Bn, rt));
        });
      });
    }

    function ot(n) {
      var t = Ii.O(n, Ii._, !0, u);
      return u = ai({}, u, t.S), Vt = ai({}, Vt, t.z), t.z;
    }

    function ut(e) {
      var n = "parent",
          t = mn + xe + Cn,
          r = Lt ? xe + Cn : me,
          i = Vt.textarea.inheritedAttrs,
          o = {},
          u = function u() {
        var r = e ? Xt : Yt;
        h(o, function (n, t) {
          cn(t) == gi && (n == xi.c ? r.addClass(t) : r.attr(n, t));
        });
      },
          f = [rn, en, on, ze, Se, un, fn, an, Ce, ke, Ie, Te, De, mn, Cn, Mr].join(xe),
          a = {};

      Yt = Yt || (Lt ? p ? Xt[n]()[n]()[n]()[n]() : Ci(ui(on)) : Xt), nr = nr || pt(_n + r), Zt = Zt || pt(yn + r), Jt = Jt || pt(wn + r), Kt = Kt || pt("os-resize-observer-host"), er = er || (Lt ? pt(gn) : di), p && ci(Yt, en), e && si(Yt, f), i = cn(i) == gi ? i.split(xe) : i, Oi.isA(i) && Lt && h(i, function (n, t) {
        cn(t) == gi && (o[t] = e ? Yt.attr(t) : Xt.attr(t));
      }), e ? (p && Ht ? (Kt.children().remove(), h([Jt, Zt, nr, er], function (n, t) {
        t && si(t.removeAttr(xi.s), Dn);
      }), ci(Yt, Lt ? on : rn)) : (gt(Kt), nr.contents().unwrap().unwrap().unwrap(), Lt && (Xt.unwrap(), gt(Yt), gt(er), u())), Lt && Xt.removeAttr(xi.s), Rt && si(c, tn)) : (Lt && (Vt.sizeAutoCapable || (a[de] = Xt.css(de), a[pe] = Xt.css(pe)), p || Xt.addClass(Cn).wrap(Yt), Yt = Xt[n]().css(a)), p || (ci(Xt, Lt ? t : rn), Yt.wrapInner(nr).wrapInner(Zt).wrapInner(Jt).prepend(Kt), nr = wt(Yt, R + _n), Zt = wt(Yt, R + yn), Jt = wt(Yt, R + wn), Lt && (nr.prepend(er), u())), It && ci(Zt, Ae), St.x && St.y && ci(Zt, xn), Rt && ci(c, tn), H = Kt[0], ur = Yt[0], ar = Jt[0], cr = Zt[0], sr = nr[0], it());
    }

    function ft() {
      var r,
          t,
          e = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144],
          i = [],
          n = "focus";

      function o(n) {
        $e(), Ot.update(ge), n && kt && clearInterval(r);
      }

      Lt ? (9 < D || !kt ? Yn(Xt, "input", o) : Yn(Xt, [Y, G], [function u(n) {
        var t = n.keyCode;
        sn(t, e) < 0 && (i[xi.l] || (o(), r = setInterval(o, 1e3 / 60)), sn(t, i) < 0 && i.push(t));
      }, function f(n) {
        var t = n.keyCode,
            r = sn(t, i);
        sn(t, e) < 0 && (-1 < r && i.splice(r, 1), i[xi.l] || o(!0));
      }]), Yn(Xt, [we, "drop", n, n + "out"], [function a(n) {
        return Xt[_e](Ct.i && Wr ? 9999999 : 0), Xt[Oe](0), Oi.prvD(n), Oi.stpP(n), !1;
      }, function c(n) {
        setTimeout(function () {
          Et || o();
        }, 50);
      }, function s() {
        $r = !0, ci(Yt, n);
      }, function l() {
        $r = !1, i = [], si(Yt, n), o(!0);
      }])) : Yn(nr, J, function v(n) {
        !0 !== Tr && function l(n) {
          if (!Ht) return 1;

          var t = "flex-grow",
              r = "flex-shrink",
              e = "flex-basis",
              i = [de, ve + de, he + de, oe + le, oe + ce, le, ce, "font-weight", "word-spacing", t, r, e],
              o = [ue + le, ue + ce, fe + le + de, fe + ce + de],
              u = [pe, ve + pe, he + pe, oe + ae, oe + se, ae, se, "line-height", t, r, e],
              f = [ue + ae, ue + se, fe + ae + de, fe + se + de],
              a = "s" === Cr.x || "v-s" === Cr.x,
              c = !1,
              s = function s(n, t) {
            for (var r = 0; r < n[xi.l]; r++) {
              if (n[r] === t) return !0;
            }

            return !1;
          };

          return ("s" === Cr.y || "v-s" === Cr.y) && ((c = s(u, n)) || Nt || (c = s(f, n))), a && !c && ((c = s(i, n)) || Nt || (c = s(o, n))), c;
        }((n = n.originalEvent || n).propertyName) && Ot.update(ge);
      }), Yn(Zt, we, function h(n) {
        Ut || (t !== di ? clearTimeout(t) : ((Yr || Gr) && Ge(!0), dt() || ci(Yt, Ce), ti("onScrollStart", n)), Q || (Je(!0), Je(!1)), ti("onScroll", n), t = setTimeout(function () {
          Et || (clearTimeout(t), t = di, (Yr || Gr) && Ge(!1), dt() || si(Yt, Ce), ti("onScrollStop", n));
        }, 175));
      }, !0);
    }

    function at(i) {
      var n,
          t,
          o = function o(n) {
        var t = pt(kn + xe + (n ? Nn : Wn), !0),
            r = pt(In, t),
            e = pt(An, t);
        return p || i || (t.append(r), r.append(e)), {
          cn: t,
          sn: r,
          ln: e
        };
      };

      function r(n) {
        var t = ni(n),
            r = t.cn,
            e = t.sn,
            i = t.ln;
        p && Ht ? h([r, e, i], function (n, t) {
          si(t.removeAttr(xi.s), Dn);
        }) : gt(r || o(n).cn);
      }

      i ? (r(!0), r()) : (n = o(!0), t = o(), a = n.cn, s = n.sn, l = n.ln, v = t.cn, b = t.sn, m = t.ln, p || (Jt.after(v), Jt.after(a)));
    }

    function ct(S) {
      var z,
          i,
          C,
          k,
          e = ni(S),
          I = e.vn,
          t = x.top !== x,
          T = e.Q,
          r = e.Z,
          A = we + e.J,
          o = "active",
          u = "snapHandle",
          f = "click",
          H = 1,
          a = [16, 17];

      function c(n) {
        return D && t ? n["screen" + r] : Oi.page(n)[T];
      }

      function s(n) {
        return Vt.scrollbars[n];
      }

      function l() {
        H = .5;
      }

      function v() {
        H = 1;
      }

      function h(n) {
        Oi.stpP(n);
      }

      function E(n) {
        -1 < sn(n.keyCode, a) && l();
      }

      function L(n) {
        -1 < sn(n.keyCode, a) && v();
      }

      function R(n) {
        var t = (n.originalEvent || n).touches !== di;
        return !(Ut || Et || dt() || !Rr || t && !s("touchSupport")) && (1 === Oi.mBtn(n) || t);
      }

      function d(n) {
        if (R(n)) {
          var t = I.F,
              r = I.M,
              e = I.N * ((c(n) - C) * k / (t - r));
          e = isFinite(e) ? e : 0, Qt && S && !Ct.i && (e *= -1), Zt[A](Si.round(i + e)), Q && Je(S, i + e), w || Oi.prvD(n);
        } else N(n);
      }

      function N(n) {
        if (n = n || n.originalEvent, Xn(P, [$, V, Y, G, K], [d, N, E, L, tt], !0), Oi.rAF()(function () {
          Xn(P, f, h, !0, {
            V: !0
          });
        }), Q && Je(S, !0), Q = !1, si(j, Mn), si(e.ln, o), si(e.sn, o), si(e.cn, o), k = 1, v(), z !== (C = i = di) && (Ot.scrollStop(), clearTimeout(z), z = di), n) {
          var t = ur[xi.bCR]();
          n.clientX >= t.left && n.clientX <= t.right && n.clientY >= t.top && n.clientY <= t.bottom || Zn(), (Yr || Gr) && Ge(!1);
        }
      }

      function W(n) {
        i = Zt[A](), i = isNaN(i) ? 0 : i, (Qt && S && !Ct.n || !Qt) && (i = i < 0 ? 0 : i), k = vt()[T], C = c(n), Q = !s(u), ci(j, Mn), ci(e.ln, o), ci(e.cn, o), Xn(P, [$, V, K], [d, N, tt]), Oi.rAF()(function () {
          Xn(P, f, h, !1, {
            V: !0
          });
        }), !D && y || Oi.prvD(n), Oi.stpP(n);
      }

      Yn(e.ln, U, function p(n) {
        R(n) && W(n);
      }), Yn(e.sn, [U, q, X], [function M(n) {
        if (R(n)) {
          var h,
              t = e.vn.M / Math.round(Si.min(1, ee[e.j] / vr[e.j]) * e.vn.F),
              d = Si.round(ee[e.j] * t),
              p = 270 * t,
              b = 400 * t,
              m = e.sn.offset()[e.B],
              r = n.ctrlKey,
              g = n.shiftKey,
              w = g && r,
              y = !0,
              x = function x(n) {
            Q && Je(S, n);
          },
              _ = function _() {
            x(), W(n);
          },
              O = function O() {
            if (!Et) {
              var n = (C - m) * k,
                  t = I.W,
                  r = I.F,
                  e = I.M,
                  i = I.N,
                  o = I.L,
                  u = p * H,
                  f = y ? Si.max(b, u) : u,
                  a = i * ((n - e / 2) / (r - e)),
                  c = Qt && S && (!Ct.i && !Ct.n || Wr),
                  s = c ? t < n : n < t,
                  l = {},
                  v = {
                easing: "linear",
                step: function step(n) {
                  Q && (Zt[A](n), Je(S, n));
                }
              };
              a = isFinite(a) ? a : 0, a = Qt && S && !Ct.i ? i - a : a, g ? (Zt[A](a), w ? (a = Zt[A](), Zt[A](o), a = c && Ct.i ? i - a : a, a = c && Ct.n ? -a : a, l[T] = a, Ot.scroll(l, ai(v, {
                duration: 130,
                complete: _
              }))) : _()) : (h = y ? s : h, (c ? h ? n <= t + e : t <= n : h ? t <= n : n <= t + e) ? (clearTimeout(z), Ot.scrollStop(), z = di, x(!0)) : (z = setTimeout(O, f), l[T] = (h ? "-=" : "+=") + d, Ot.scroll(l, ai(v, {
                duration: u
              }))), y = !1);
            }
          };

          r && l(), k = vt()[T], C = Oi.page(n)[T], Q = !s(u), ci(j, Mn), ci(e.sn, o), ci(e.cn, o), Xn(P, [V, Y, G, K], [N, E, L, tt]), O(), Oi.prvD(n), Oi.stpP(n);
        }
      }, function b(n) {
        B = !0, (Yr || Gr) && Ge(!0);
      }, function m(n) {
        B = !1, (Yr || Gr) && Ge(!1);
      }]), Yn(e.cn, U, function g(n) {
        Oi.stpP(n);
      }), F && Yn(e.cn, J, function (n) {
        n.target === e.cn[0] && (Ke(S), Je(S));
      });
    }

    function Ye(n, t, r) {
      var e = n ? a : v;
      li(Yt, n ? un : fn, !t), li(e, En, !r);
    }

    function Ge(n, t) {
      if (clearTimeout(k), n) si(a, Ln), si(v, Ln);else {
        var r,
            e = function e() {
          B || Et || (!(r = l.hasClass("active") || m.hasClass("active")) && (Yr || Gr || Kr) && ci(a, Ln), !r && (Yr || Gr || Kr) && ci(v, Ln));
        };

        0 < qr && !0 !== t ? k = setTimeout(e, qr) : e();
      }
    }

    function Ke(n) {
      var t = {},
          r = ni(n),
          e = r.vn,
          i = Si.min(1, ee[r.j] / vr[r.j]);
      t[r.K] = Si.floor(100 * i * 1e6) / 1e6 + "%", dt() || r.ln.css(t), e.M = r.ln[0]["offset" + r.hn], e.D = i;
    }

    function Je(n, t) {
      var r,
          e,
          i = cn(t) == wi,
          o = Qt && n,
          u = ni(n),
          f = u.vn,
          a = "translate(",
          c = _i.v("transform"),
          s = _i.v("transition"),
          l = n ? Zt[_e]() : Zt[Oe](),
          v = t === di || i ? l : t,
          h = f.M,
          d = u.sn[0]["offset" + u.hn],
          p = d - h,
          b = {},
          m = (cr[we + u.hn] - cr["client" + u.hn]) * (Ct.n && o ? -1 : 1),
          g = function g(n) {
        return isNaN(n / m) ? 0 : Si.max(0, Si.min(1, n / m));
      },
          w = function w(n) {
        var t = p * n;
        return t = isNaN(t) ? 0 : t, t = o && !Ct.i ? d - h - t : t, t = Si.max(0, t);
      },
          y = g(l),
          x = w(g(v)),
          _ = w(y);

      f.N = m, f.L = l, f.R = y, ln ? (r = o ? -(d - h - x) : x, e = n ? a + r + "px, 0)" : a + "0, " + r + "px)", b[c] = e, F && (b[s] = i && 1 < Si.abs(x - f.W) ? function O(n) {
        var t = _i.v("transition"),
            r = n.css(t);

        if (r) return r;

        for (var e, i, o, u = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*", f = new RegExp(u), a = new RegExp("^(" + u + ")+$"), c = "property duration timing-function delay".split(" "), s = [], l = 0, v = function v(n) {
          if (e = [], !n.match(a)) return n;

          for (; n.match(f);) {
            e.push(RegExp.$1), n = n.replace(f, me);
          }

          return e;
        }; l < c[xi.l]; l++) {
          for (i = v(n.css(t + "-" + c[l])), o = 0; o < i[xi.l]; o++) {
            s[o] = (s[o] ? s[o] + xe : me) + i[o];
          }
        }

        return s.join(", ");
      }(u.ln) + ", " + (c + xe + 250) + "ms" : me)) : b[u.B] = x, dt() || (u.ln.css(b), ln && F && i && u.ln.one(J, function () {
        Et || u.ln.css(s, me);
      })), f.W = x, f.P = _, f.F = d;
    }

    function Ze(n, t) {
      var r = t ? "removeClass" : "addClass",
          e = n ? b : m,
          i = n ? Tn : Hn;
      (n ? s : l)[r](i), e[r](i);
    }

    function ni(n) {
      return {
        K: n ? de : pe,
        hn: n ? "Width" : "Height",
        B: n ? le : ae,
        J: n ? "Left" : "Top",
        Q: n ? pn : bn,
        Z: n ? "X" : "Y",
        j: n ? "w" : "h",
        dn: n ? "l" : "t",
        sn: n ? s : b,
        ln: n ? l : m,
        cn: n ? a : v,
        vn: n ? vn : hn
      };
    }

    function st(n) {
      ir = ir || pt(Rn, !0), n ? p && Ht ? si(ir.removeAttr(xi.s), Dn) : gt(ir) : p || Yt.append(ir);
    }

    function ti(n, t, r) {
      if (!1 !== r) if (Ht) {
        var e,
            i = Vt.callbacks[n],
            o = n;
        "on" === o.substr(0, 2) && (o = o.substr(2, 1).toLowerCase() + o.substr(3)), cn(i) == bi && i.call(Ot, t), h(jn, function () {
          cn((e = this).on) == bi && e.on(o, t);
        });
      } else Et || Fn.push({
        n: n,
        a: t
      });
    }

    function ri(n, t, r) {
      r = r || [me, me, me, me], n[(t = t || me) + ae] = r[0], n[t + ce] = r[1], n[t + se] = r[2], n[t + le] = r[3];
    }

    function ei(n, t, r, e) {
      return t = t || me, n = n || me, {
        t: e ? 0 : ii(Yt.css(n + ae + t)),
        r: r ? 0 : ii(Yt.css(n + ce + t)),
        b: e ? 0 : ii(Yt.css(n + se + t)),
        l: r ? 0 : ii(Yt.css(n + le + t))
      };
    }

    function lt(n, t) {
      var r,
          e,
          i,
          o = function o(n, t) {
        if (i = "", t && _typeof(n) == gi) for (e = n.split(xe), r = 0; r < e[xi.l]; r++) {
          i += "|" + e[r] + "$";
        }
        return i;
      };

      return new RegExp("(^" + rn + "([-_].+|)$)" + o(Mr, n) + o(Dr, t), "g");
    }

    function vt() {
      var n = ar[xi.bCR]();
      return {
        x: ln && 1 / (Si.round(n.width) / ar[xi.oW]) || 1,
        y: ln && 1 / (Si.round(n.height) / ar[xi.oH]) || 1
      };
    }

    function ht(n) {
      var t = "ownerDocument",
          r = "HTMLElement",
          e = n && n[t] && n[t].parentWindow || vi;
      return _typeof(e[r]) == pi ? n instanceof e[r] : n && _typeof(n) == pi && null !== n && 1 === n.nodeType && _typeof(n.nodeName) == gi;
    }

    function ii(n, t) {
      var r = t ? parseFloat(n) : parseInt(n, 10);
      return isNaN(r) ? 0 : r;
    }

    function dt() {
      return Ir && St.x && St.y;
    }

    function oi() {
      return Lt ? er[0] : sr;
    }

    function ui(r, n) {
      return "<div " + (r ? cn(r) == gi ? 'class="' + r + '"' : function () {
        var n,
            t = me;
        if (Ci.isPlainObject(r)) for (n in r) {
          t += ("c" === n ? "class" : n) + '="' + r[n] + '" ';
        }
        return t;
      }() : me) + ">" + (n || me) + "</div>";
    }

    function pt(n, t) {
      var r = cn(t) == wi,
          e = !r && t || Yt;
      return p && !e[xi.l] ? null : p ? e[r ? "children" : "find"](R + n.replace(/\s/g, R)).eq(0) : Ci(ui(n));
    }

    function bt(n, t) {
      for (var r, e = t.split(R), i = 0; i < e.length; i++) {
        if (!n[xi.hOP](e[i])) return;
        r = n[e[i]], i < e.length && cn(r) == pi && (n = r);
      }

      return r;
    }

    function mt(n) {
      var t = Vt.updateOnLoad;
      t = cn(t) == gi ? t.split(xe) : t, Oi.isA(t) && !Et && h(t, n);
    }

    function fi(n, t, r) {
      if (r) return r;
      if (cn(n) != pi || cn(t) != pi) return n !== t;

      for (var e in n) {
        if ("c" !== e) {
          if (!n[xi.hOP](e) || !t[xi.hOP](e)) return !0;
          if (fi(n[e], t[e])) return !0;
        }
      }

      return !1;
    }

    function ai() {
      return Ci.extend.apply(this, [!0].concat([].slice.call(arguments)));
    }

    function ci(n, t) {
      return e.addClass.call(n, t);
    }

    function si(n, t) {
      return e.removeClass.call(n, t);
    }

    function li(n, t, r) {
      return (r ? ci : si)(n, t);
    }

    function gt(n) {
      return e.remove.call(n);
    }

    function wt(n, t) {
      return e.find.call(n, t).eq(0);
    }
  }

  return zi && zi.fn && (zi.fn.overlayScrollbars = function (n, t) {
    return zi.isPlainObject(n) ? (zi.each(this, function () {
      q(this, n, t);
    }), this) : q(this, n);
  }), q;
});
/**
 * Swiper 6.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 5, 2021
 */

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];

        for (var i in a) {
          Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  function a(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function i(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (s) {
      void 0 === e[s] ? e[s] = t[s] : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }

  var n = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function l() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }

  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function c(e, t, a) {
    return (c = p() ? Reflect.construct : function (e, t, a) {
      var i = [null];
      i.push.apply(i, t);
      var s = new (Function.bind.apply(e, i))();
      return a && d(s, a.prototype), s;
    }).apply(null, arguments);
  }

  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (u = function u(e) {
      if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
      var a;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }

      function i() {
        return c(e, arguments, o(this).constructor);
      }

      return i.prototype = Object.create(e.prototype, {
        constructor: {
          value: i,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(i, e);
    })(e);
  }

  var h = function (e) {
    var t, a;

    function i(t) {
      var a, i, s;
      return a = e.call.apply(e, [this].concat(t)) || this, i = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(a), s = i.__proto__, Object.defineProperty(i, "__proto__", {
        get: function get() {
          return s;
        },
        set: function set(e) {
          s.__proto__ = e;
        }
      }), a;
    }

    return a = e, (t = i).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, i;
  }(u(Array));

  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
    }), t;
  }

  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function m(e, t) {
    var a = l(),
        i = r(),
        s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);

    if ("string" == typeof e) {
      var n = e.trim();

      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = i.createElement(o);
        d.innerHTML = n;

        for (var p = 0; p < d.childNodes.length; p += 1) {
          s.push(d.childNodes[p]);
        }
      } else s = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1) {
          a.push(i[s]);
        }

        return a;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }

    return new h(function (e) {
      for (var t = [], a = 0; a < e.length; a += 1) {
        -1 === t.indexOf(e[a]) && t.push(e[a]);
      }

      return t;
    }(s));
  }

  m.fn = h.prototype;
  var g,
      b,
      w,
      y = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, i);
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, i);
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return f(this, function (e) {
        return i.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        i.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var a = 0; a < this.length; a += 1) {
        if (2 === arguments.length) this[a].setAttribute(e, t);else for (var i in e) {
          this[a][i] = e[i], this[a].setAttribute(i, e[i]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), m(t).is(s)) r.apply(t, a);else for (var i = m(t).parents(), n = 0; n < i.length; n += 1) {
            m(i[n]).is(s) && r.apply(i[n], a);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

      for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (s) for (d = 0; d < p.length; d += 1) {
          var h = p[d];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
            listener: r,
            proxyListener: l
          }), u.addEventListener(h, l, n);
        } else for (d = 0; d < p.length; d += 1) {
          var v = p[d];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
            listener: r,
            proxyListener: o
          }), u.addEventListener(v, o, n);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

      for (var l = i.split(" "), o = 0; o < l.length; o += 1) {
        for (var d = l[o], p = 0; p < this.length; p += 1) {
          var c = this[p],
              u = void 0;
          if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; h >= 0; h -= 1) {
            var v = u[h];
            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = l(), t = arguments.length, a = new Array(t), i = 0; i < t; i++) {
        a[i] = arguments[i];
      }

      for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1) {
        for (var o = s[n], d = 0; d < this.length; d += 1) {
          var p = this[d];

          if (e.CustomEvent) {
            var c = new e.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
            p.dom7EventData = a.filter(function (e, t) {
              return t > 0;
            }), p.dispatchEvent(c), p.dom7EventData = [], delete p.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function a(i) {
        i.target === this && (e.call(this, i), t.off("transitionend", a));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var e = l(),
            t = r(),
            a = this[0],
            i = a.getBoundingClientRect(),
            s = t.body,
            n = a.clientTop || s.clientTop || 0,
            o = a.clientLeft || s.clientLeft || 0,
            d = a === e ? e.scrollY : a.scrollTop,
            p = a === e ? e.scrollX : a.scrollLeft;
        return {
          top: i.top + d - n,
          left: i.left + p - o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var a,
          i = l();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var s in e) {
              this[a].style[s] = e[s];
            }
          }

          return this;
        }

        if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, a) {
        e.apply(t, [t, a]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          a,
          i = l(),
          s = r(),
          n = this[0];
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (t = m(e), a = 0; a < t.length; a += 1) {
          if (t[a] === n) return !0;
        }

        return !1;
      }

      if (e === s) return n === s;
      if (e === i) return n === i;

      if (e.nodeType || e instanceof h) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
          if (t[a] === n) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return m([]);

      if (e < 0) {
        var a = t + e;
        return m(a < 0 ? [] : [this[a]]);
      }

      return m([this[e]]);
    },
    append: function append() {
      for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
        e = a < 0 || arguments.length <= a ? void 0 : arguments[a];

        for (var i = 0; i < this.length; i += 1) {
          if ("string" == typeof e) {
            var s = t.createElement("div");

            for (s.innerHTML = e; s.firstChild;) {
              this[i].appendChild(s.firstChild);
            }
          } else if (e instanceof h) for (var n = 0; n < e.length; n += 1) {
            this[i].appendChild(e[n]);
          } else this[i].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t,
          a,
          i = r();

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var s = i.createElement("div");

          for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) {
            this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
          }
        } else if (e instanceof h) for (a = 0; a < e.length; a += 1) {
          this[t].insertBefore(e[a], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          a = this[0];
      if (!a) return m([]);

      for (; a.nextElementSibling;) {
        var i = a.nextElementSibling;
        e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
      }

      return m(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
      }

      return m([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          a = this[0];
      if (!a) return m([]);

      for (; a.previousElementSibling;) {
        var i = a.previousElementSibling;
        e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
      }

      return m(t);
    },
    parent: function parent(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        null !== this[a].parentNode && (e ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      }

      return m(t);
    },
    parents: function parents(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].parentNode; i;) {
          e ? m(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
        }
      }

      return m(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) {
          t.push(i[s]);
        }
      }

      return m(t);
    },
    children: function children(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].children, s = 0; s < i.length; s += 1) {
          e && !m(i[s]).is(e) || t.push(i[s]);
        }
      }

      return m(t);
    },
    filter: function filter(e) {
      return m(f(this, e));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    }
  };

  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function x() {
    return Date.now();
  }

  function T(e, t) {
    void 0 === t && (t = "x");
    var a,
        i,
        s,
        r = l(),
        n = r.getComputedStyle(e, null);
    return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }

  function C(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
  }

  function S() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
      var a = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != a) for (var i = Object.keys(Object(a)), s = 0, r = i.length; s < r; s += 1) {
        var n = i[s],
            l = Object.getOwnPropertyDescriptor(a, n);
        void 0 !== l && l.enumerable && (C(e[n]) && C(a[n]) ? S(e[n], a[n]) : !C(e[n]) && C(a[n]) ? (e[n] = {}, S(e[n], a[n])) : e[n] = a[n]);
      }
    }

    return e;
  }

  function M(e, t) {
    Object.keys(t).forEach(function (a) {
      C(t[a]) && Object.keys(t[a]).forEach(function (i) {
        "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
      }), e[a] = t[a];
    });
  }

  function z() {
    return g || (g = function () {
      var e = l(),
          t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var a = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, a);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }

  function P(e) {
    return void 0 === e && (e = {}), b || (b = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          a = z(),
          i = l(),
          s = i.navigator.platform,
          r = t || i.navigator.userAgent,
          n = {
        ios: !1,
        android: !1
      },
          o = i.screen.width,
          d = i.screen.height,
          p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          c = r.match(/(iPad).*OS\s([\d_]+)/),
          u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === s,
          f = "MacIntel" === s;
      return !c && f && a.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((c = r.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), f = !1), p && !v && (n.os = "android", n.android = !0), (c || h || u) && (n.os = "ios", n.ios = !0), n;
    }(e)), b;
  }

  function k() {
    return w || (w = function () {
      var e,
          t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), w;
  }

  Object.keys(y).forEach(function (e) {
    m.fn[e] = y[e];
  });
  var L = {
    name: "resize",
    create: function create() {
      var e = this;
      S(e, {
        resize: {
          observer: null,
          createObserver: function createObserver() {
            e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
              var a = e.width,
                  i = e.height,
                  s = a,
                  r = i;
              t.forEach(function (t) {
                var a = t.contentBoxSize,
                    i = t.contentRect,
                    n = t.target;
                n && n !== e.el || (s = i ? i.width : (a[0] || a).inlineSize, r = i ? i.height : (a[0] || a).blockSize);
              }), s === a && r === i || e.resize.resizeHandler();
            }), e.resize.observer.observe(e.el));
          },
          removeObserver: function removeObserver() {
            e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null);
          },
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(e) {
        var t = l();
        e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
      },
      destroy: function destroy(e) {
        var t = l();
        e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  },
      $ = {
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var a = l(),
          i = this,
          s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            i.emit("observerUpdate", e[0]);
          };

          a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
        } else i.emit("observerUpdate", e[0]);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.observer.observers.push(s);
    },
    init: function init() {
      var e = this;

      if (e.support.observer && e.params.observer) {
        if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
          e.observer.attach(t[a]);
        }
        e.observer.attach(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), e.observer.attach(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      I = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      M(this, {
        observer: t({}, $, {
          observers: []
        })
      });
    },
    on: {
      init: function init(e) {
        e.observer.init();
      },
      destroy: function destroy(e) {
        e.observer.destroy();
      }
    }
  };

  function O(e) {
    var t = this,
        a = r(),
        i = l(),
        s = t.touchEventsData,
        n = t.params,
        o = t.touches;

    if (!t.animating || !n.preventInteractionOnTransition) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);
      if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length) if (s.isTouchEvent = "touchstart" === d.type, s.isTouchEvent || !("which" in d) || 3 !== d.which) if (!(!s.isTouchEvent && "button" in d && d.button > 0)) if (!s.isTouched || !s.isMoved) if (!!n.noSwipingClass && "" !== n.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (p = m(e.path[0])), n.noSwiping && p.closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) t.allowClick = !0;else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
        o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
        var c = o.currentX,
            u = o.currentY,
            h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
            v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;

        if (h && (c <= v || c >= i.innerWidth - v)) {
          if ("prevent" !== h) return;
          e.preventDefault();
        }

        if (S(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), o.startX = c, o.startY = u, s.touchStartTime = x(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
          var f = !0;
          p.is(s.formElements) && (f = !1), a.activeElement && m(a.activeElement).is(s.formElements) && a.activeElement !== p[0] && a.activeElement.blur();
          var g = f && t.allowTouchMove && n.touchStartPreventDefault;
          !n.touchStartForcePreventDefault && !g || p[0].isContentEditable || d.preventDefault();
        }

        t.emit("touchStart", d);
      }
    }
  }

  function A(e) {
    var t = r(),
        a = this,
        i = a.touchEventsData,
        s = a.params,
        n = a.touches,
        l = a.rtlTranslate,
        o = e;

    if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "touchmove" === o.type) {
        var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
            p = "touchmove" === o.type ? d.pageX : o.pageX,
            c = "touchmove" === o.type ? d.pageY : o.pageY;
        if (o.preventedByNestedSwiper) return n.startX = p, void (n.startY = c);
        if (!a.allowTouchMove) return a.allowClick = !1, void (i.isTouched && (S(n, {
          startX: p,
          startY: c,
          currentX: p,
          currentY: c
        }), i.touchStartTime = x()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (a.isVertical()) {
          if (c < n.startY && a.translate <= a.maxTranslate() || c > n.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (p < n.startX && a.translate <= a.maxTranslate() || p > n.startX && a.translate >= a.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(i.formElements)) return i.isMoved = !0, void (a.allowClick = !1);

        if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
          n.currentX = p, n.currentY = c;
          var u = n.currentX - n.startX,
              h = n.currentY - n.startY;

          if (!(a.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(h, 2)) < a.params.threshold)) {
            var v;
            if (void 0 === i.isScrolling) a.isHorizontal() && n.currentY === n.startY || a.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : u * u + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
            if (i.isScrolling && a.emit("touchMoveOpposite", o), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              a.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
              var f = a.isHorizontal() ? u : h;
              n.diff = f, f *= s.touchRatio, l && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
              var g = !0,
                  b = s.resistanceRatio;

              if (s.touchReleaseOnEdges && (b = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, b))) : f < 0 && i.currentTranslate < a.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, b))), g && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
              }

              s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: n[a.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: n[a.isHorizontal() ? "currentX" : "currentY"],
                time: x()
              })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
  }

  function D(e) {
    var t = this,
        a = t.touchEventsData,
        i = t.params,
        s = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        l = t.slidesGrid,
        o = t.snapGrid,
        d = e;
    if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
    i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var p,
        c = x(),
        u = c - a.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && c - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = x(), E(function () {
      t.destroyed || (t.allowClick = !0);
    }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
    if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode) if (i.freeMode) {
      if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (p > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

      if (i.freeModeMomentum) {
        if (a.velocities.length > 1) {
          var h = a.velocities.pop(),
              v = a.velocities.pop(),
              f = h.position - v.position,
              m = h.time - v.time;
          t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - h.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
        var g = 1e3 * i.freeModeMomentumRatio,
            b = t.velocity * g,
            w = t.translate + b;
        r && (w = -w);
        var y,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
        if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), y = t.minTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);else if (i.freeModeSticky) {
          for (var M, z = 0; z < o.length; z += 1) {
            if (o[z] > -w) {
              M = z;
              break;
            }
          }

          w = -(w = Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
        }

        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), i.freeModeSticky) {
            var P = Math.abs((r ? -w : w) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
            g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
          }
        } else if (i.freeModeSticky) return void t.slideToClosest();

        i.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function () {
            t.setTranslate(y), n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)), t.updateActiveIndex(), t.updateSlidesClasses();
      } else {
        if (i.freeModeSticky) return void t.slideToClosest();
        i.freeMode && t.emit("_freeModeNoMomentumRelease");
      }

      (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var L = 0, $ = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== l[I + O] ? p >= l[I] && p < l[I + O] && (L = I, $ = l[I + O] - l[I]) : p >= l[I] && (L = I, $ = l[l.length - 1] - l[l.length - 2]);
      }

      var A = (p - l[L]) / $,
          D = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

      if (u > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(L + D) : t.slideTo(L) : ("next" === t.swipeDirection && t.slideTo(L + D), "prev" === t.swipeDirection && t.slideTo(L));
      }
    }
  }

  function N() {
    var e = this,
        t = e.params,
        a = e.el;

    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
          s = e.allowSlidePrev,
          r = e.snapGrid;
      e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }

  function G(e) {
    var t = this;
    t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  function B() {
    var e = this,
        t = e.wrapperEl,
        a = e.rtlTranslate;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var i = e.maxTranslate() - e.minTranslate();
    (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }

  var H = !1;

  function X() {}

  var Y = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !1,
    nested: !1,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
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
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
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
    touchMoveStopPropagation: !1,
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
    loopPreventsSlide: !0,
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
    runCallbacksOnInit: !0,
    _emitClasses: !1
  },
      R = {
    modular: {
      useParams: function useParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a];
          i.params && S(e, i.params);
        });
      },
      useModules: function useModules(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a],
              s = e[a] || {};
          i.on && t.on && Object.keys(i.on).forEach(function (e) {
            t.on(e, i.on[e]);
          }), i.create && i.create.bind(t)(s);
        });
      }
    },
    eventsEmitter: {
      on: function on(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
        }), i;
      },
      once: function once(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;

        function s() {
          i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;

          for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
            r[n] = arguments[n];
          }

          t.apply(i, r);
        }

        return s.__emitterProxy = t, i.on(e, s, a);
      },
      onAny: function onAny(e, t) {
        var a = this;
        if ("function" != typeof e) return a;
        var i = t ? "unshift" : "push";
        return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a;
      },
      offAny: function offAny(e) {
        var t = this;
        if (!t.eventsAnyListeners) return t;
        var a = t.eventsAnyListeners.indexOf(e);
        return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
      },
      off: function off(e, t) {
        var a = this;
        return a.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach(function (i, s) {
            (i === t || i.__emitterProxy && i.__emitterProxy === t) && a.eventsListeners[e].splice(s, 1);
          });
        }), a) : a;
      },
      emit: function emit() {
        var e,
            t,
            a,
            i = this;
        if (!i.eventsListeners) return i;

        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
          r[n] = arguments[n];
        }

        "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), a = i) : (e = r[0].events, t = r[0].data, a = r[0].context || i), t.unshift(a);
        var l = Array.isArray(e) ? e : e.split(" ");
        return l.forEach(function (e) {
          i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(function (i) {
            i.apply(a, [e].concat(t));
          }), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach(function (e) {
            e.apply(a, t);
          });
        }), i;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e,
            t,
            a = this,
            i = a.$el;
        e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(a, {
          width: e,
          height: t,
          size: a.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = this,
            t = function t(_t3) {
          return e.isHorizontal() ? _t3 : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          }[_t3];
        },
            a = function a(e, _a) {
          return parseFloat(e.getPropertyValue(t(_a)) || 0);
        },
            i = l(),
            s = e.params,
            r = e.$wrapperEl,
            n = e.size,
            o = e.rtlTranslate,
            d = e.wrongRTL,
            p = e.virtual && s.virtual.enabled,
            c = p ? e.virtual.slides.length : e.slides.length,
            u = r.children("." + e.params.slideClass),
            h = p ? e.virtual.slides.length : u.length,
            v = [],
            f = [],
            m = [],
            g = s.slidesOffsetBefore;

        "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
        var b = s.slidesOffsetAfter;
        "function" == typeof b && (b = s.slidesOffsetAfter.call(e));
        var w = e.snapGrid.length,
            y = e.slidesGrid.length,
            E = s.spaceBetween,
            x = -g,
            T = 0,
            C = 0;

        if (void 0 !== n) {
          var M, z;
          "string" == typeof E && E.indexOf("%") >= 0 && (E = parseFloat(E.replace("%", "")) / 100 * n), e.virtualSize = -E, o ? u.css({
            marginLeft: "",
            marginTop: ""
          }) : u.css({
            marginRight: "",
            marginBottom: ""
          }), s.slidesPerColumn > 1 && (M = Math.floor(h / s.slidesPerColumn) === h / e.params.slidesPerColumn ? h : Math.ceil(h / s.slidesPerColumn) * s.slidesPerColumn, "auto" !== s.slidesPerView && "row" === s.slidesPerColumnFill && (M = Math.max(M, s.slidesPerView * s.slidesPerColumn)));

          for (var P, k, L, $ = s.slidesPerColumn, I = M / $, O = Math.floor(h / s.slidesPerColumn), A = 0; A < h; A += 1) {
            z = 0;
            var D = u.eq(A);

            if (s.slidesPerColumn > 1) {
              var N = void 0,
                  G = void 0,
                  B = void 0;

              if ("row" === s.slidesPerColumnFill && s.slidesPerGroup > 1) {
                var H = Math.floor(A / (s.slidesPerGroup * s.slidesPerColumn)),
                    X = A - s.slidesPerColumn * s.slidesPerGroup * H,
                    Y = 0 === H ? s.slidesPerGroup : Math.min(Math.ceil((h - H * $ * s.slidesPerGroup) / $), s.slidesPerGroup);
                N = (G = X - (B = Math.floor(X / Y)) * Y + H * s.slidesPerGroup) + B * M / $, D.css({
                  "-webkit-box-ordinal-group": N,
                  "-moz-box-ordinal-group": N,
                  "-ms-flex-order": N,
                  "-webkit-order": N,
                  order: N
                });
              } else "column" === s.slidesPerColumnFill ? (B = A - (G = Math.floor(A / $)) * $, (G > O || G === O && B === $ - 1) && (B += 1) >= $ && (B = 0, G += 1)) : G = A - (B = Math.floor(A / I)) * I;

              D.css(t("margin-top"), 0 !== B && s.spaceBetween && s.spaceBetween + "px");
            }

            if ("none" !== D.css("display")) {
              if ("auto" === s.slidesPerView) {
                var R = i.getComputedStyle(D[0], null),
                    V = D[0].style.transform,
                    W = D[0].style.webkitTransform;
                if (V && (D[0].style.transform = "none"), W && (D[0].style.webkitTransform = "none"), s.roundLengths) z = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);else {
                  var F = a(R, "width"),
                      q = a(R, "padding-left"),
                      j = a(R, "padding-right"),
                      _ = a(R, "margin-left"),
                      U = a(R, "margin-right"),
                      K = R.getPropertyValue(R, "box-sizing");

                  if (K && "border-box" === K) z = F + _ + U;else {
                    var Z = D[0],
                        J = Z.clientWidth;
                    z = F + q + j + _ + U + (Z.offsetWidth - J);
                  }
                }
                V && (D[0].style.transform = V), W && (D[0].style.webkitTransform = W), s.roundLengths && (z = Math.floor(z));
              } else z = (n - (s.slidesPerView - 1) * E) / s.slidesPerView, s.roundLengths && (z = Math.floor(z)), u[A] && (u[A].style[t("width")] = z + "px");

              u[A] && (u[A].swiperSlideSize = z), m.push(z), s.centeredSlides ? (x = x + z / 2 + T / 2 + E, 0 === T && 0 !== A && (x = x - n / 2 - E), 0 === A && (x = x - n / 2 - E), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), C % s.slidesPerGroup == 0 && v.push(x), f.push(x)) : (s.roundLengths && (x = Math.floor(x)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && v.push(x), f.push(x), x = x + z + E), e.virtualSize += z + E, T = z, C += 1;
            }
          }

          if (e.virtualSize = Math.max(e.virtualSize, n) + b, o && d && ("slide" === s.effect || "coverflow" === s.effect) && r.css({
            width: e.virtualSize + s.spaceBetween + "px"
          }), s.setWrapperSize) r.css(((k = {})[t("width")] = e.virtualSize + s.spaceBetween + "px", k));
          if (s.slidesPerColumn > 1) if (e.virtualSize = (z + s.spaceBetween) * M, e.virtualSize = Math.ceil(e.virtualSize / s.slidesPerColumn) - s.spaceBetween, r.css(((L = {})[t("width")] = e.virtualSize + s.spaceBetween + "px", L)), s.centeredSlides) {
            P = [];

            for (var Q = 0; Q < v.length; Q += 1) {
              var ee = v[Q];
              s.roundLengths && (ee = Math.floor(ee)), v[Q] < e.virtualSize + v[0] && P.push(ee);
            }

            v = P;
          }

          if (!s.centeredSlides) {
            P = [];

            for (var te = 0; te < v.length; te += 1) {
              var ae = v[te];
              s.roundLengths && (ae = Math.floor(ae)), v[te] <= e.virtualSize - n && P.push(ae);
            }

            v = P, Math.floor(e.virtualSize - n) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - n);
          }

          if (0 === v.length && (v = [0]), 0 !== s.spaceBetween) {
            var ie,
                se = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            u.filter(function (e, t) {
              return !s.cssMode || t !== u.length - 1;
            }).css(((ie = {})[se] = E + "px", ie));
          }

          if (s.centeredSlides && s.centeredSlidesBounds) {
            var re = 0;
            m.forEach(function (e) {
              re += e + (s.spaceBetween ? s.spaceBetween : 0);
            });
            var ne = (re -= s.spaceBetween) - n;
            v = v.map(function (e) {
              return e < 0 ? -g : e > ne ? ne + b : e;
            });
          }

          if (s.centerInsufficientSlides) {
            var le = 0;

            if (m.forEach(function (e) {
              le += e + (s.spaceBetween ? s.spaceBetween : 0);
            }), (le -= s.spaceBetween) < n) {
              var oe = (n - le) / 2;
              v.forEach(function (e, t) {
                v[t] = e - oe;
              }), f.forEach(function (e, t) {
                f[t] = e + oe;
              });
            }
          }

          S(e, {
            slides: u,
            snapGrid: v,
            slidesGrid: f,
            slidesSizesGrid: m
          }), h !== c && e.emit("slidesLengthChange"), v.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), (s.watchSlidesProgress || s.watchSlidesVisibility) && e.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            a = this,
            i = [],
            s = 0;
        if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
          if (a.params.centeredSlides) a.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
            var r = a.activeIndex + t;
            if (r > a.slides.length) break;
            i.push(a.slides.eq(r)[0]);
          }
        } else i.push(a.slides.eq(a.activeIndex)[0]);

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var n = i[t].offsetHeight;
            s = n > s ? n : s;
          }
        }

        s && a.$wrapperEl.css("height", s + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          var r = -e;
          s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

          for (var n = 0; n < i.length; n += 1) {
            var l = i[n],
                o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);

            if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
              var d = -(r - l.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
              (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
            }

            l.progress = s ? -o : o;
          }

          t.visibleSlides = m(t.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        var t = this;

        if (void 0 === e) {
          var a = t.rtlTranslate ? -1 : 1;
          e = t && t.translate && t.translate * a || 0;
        }

        var i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = n,
            d = l;
        0 === s ? (r = 0, n = !0, l = !0) : (n = (r = (e - t.minTranslate()) / s) <= 0, l = r >= 1), S(t, {
          progress: r,
          isBeginning: n,
          isEnd: l
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !n || d && !l) && t.emit("fromEdge"), t.emit("progress", r);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            l = t.virtual && i.virtual.enabled;
        a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = l ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
        var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
        var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            l = a.activeIndex,
            o = a.realIndex,
            d = a.snapIndex,
            p = e;

        if (void 0 === p) {
          for (var c = 0; c < s.length; c += 1) {
            void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
          }

          n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
        }

        if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
          var u = Math.min(n.slidesPerGroupSkip, p);
          t = u + Math.floor((p - u) / n.slidesPerGroup);
        }

        if (t >= r.length && (t = r.length - 1), p !== l) {
          var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
          S(a, {
            snapIndex: t,
            realIndex: h,
            previousIndex: l,
            activeIndex: p
          }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange");
        } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t,
            a = this,
            i = a.params,
            s = m(e.target).closest("." + i.slideClass)[0],
            r = !1;
        if (s) for (var n = 0; n < a.slides.length; n += 1) {
          if (a.slides[n] === s) {
            r = !0, t = n;
            break;
          }
        }
        if (!s || !r) return a.clickedSlide = void 0, void (a.clickedIndex = void 0);
        a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(m(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this,
            a = t.params,
            i = t.rtlTranslate,
            s = t.translate,
            r = t.$wrapperEl;
        if (a.virtualTranslate) return i ? -s : s;
        if (a.cssMode) return s;
        var n = T(r[0], e);
        return i && (n = -n), n || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.wrapperEl,
            l = a.progress,
            o = 0,
            d = 0;
        a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
        var p = a.maxTranslate() - a.minTranslate();
        (0 === p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, a, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
        var r = this,
            n = r.params,
            l = r.wrapperEl;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        var o,
            d = r.minTranslate(),
            p = r.maxTranslate();

        if (o = i && e > d ? d : i && e < p ? p : e, r.updateProgress(o), n.cssMode) {
          var c,
              u = r.isHorizontal();
          if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((c = {})[u ? "left" : "top"] = -o, c.behavior = "smooth", c));else l[u ? "scrollLeft" : "scrollTop"] = -o;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        var a = this;
        a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;

        if (!s.cssMode) {
          s.autoHeight && a.updateAutoHeight();
          var n = t;

          if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
            if ("reset" === n) return void a.emit("slideResetTransitionStart");
            a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var a = this,
            i = a.activeIndex,
            s = a.previousIndex,
            r = a.params;

        if (a.animating = !1, !r.cssMode) {
          a.setTransition(0);
          var n = t;

          if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
            if ("reset" === n) return void a.emit("slideResetTransitionEnd");
            a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function slideTo(e, t, a, i) {
        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");

        if ("string" == typeof e) {
          var s = parseInt(e, 10);
          if (!isFinite(s)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
          e = s;
        }

        var r = this,
            n = e;
        n < 0 && (n = 0);
        var l = r.params,
            o = r.snapGrid,
            d = r.slidesGrid,
            p = r.previousIndex,
            c = r.activeIndex,
            u = r.rtlTranslate,
            h = r.wrapperEl;
        if (r.animating && l.preventInteractionOnTransition) return !1;
        var v = Math.min(r.params.slidesPerGroupSkip, n),
            f = v + Math.floor((n - v) / r.params.slidesPerGroup);
        f >= o.length && (f = o.length - 1), (c || l.initialSlide || 0) === (p || 0) && a && r.emit("beforeSlideChangeStart");
        var m,
            g = -o[f];
        if (r.updateProgress(g), l.normalizeSlideIndex) for (var b = 0; b < d.length; b += 1) {
          var w = -Math.floor(100 * g),
              y = Math.floor(100 * d[b]),
              E = Math.floor(100 * d[b + 1]);
          void 0 !== d[b + 1] ? w >= y && w < E - (E - y) / 2 ? n = b : w >= y && w < E && (n = b + 1) : w >= y && (n = b);
        }

        if (r.initialized && n !== c) {
          if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
          if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (c || 0) !== n) return !1;
        }

        if (m = n > c ? "next" : n < c ? "prev" : "reset", u && -g === r.translate || !u && g === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(a, m), r.transitionEnd(a, m)), !1;

        if (l.cssMode) {
          var x,
              T = r.isHorizontal(),
              C = -g;
          if (u && (C = h.scrollWidth - h.offsetWidth - C), 0 === t) h[T ? "scrollLeft" : "scrollTop"] = C;else if (h.scrollTo) h.scrollTo(((x = {})[T ? "left" : "top"] = C, x.behavior = "smooth", x));else h[T ? "scrollLeft" : "scrollTop"] = C;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(a, m), r.transitionEnd(a, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(a, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(a, m));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop(e, t, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
        var s = this,
            r = e;
        return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
      },
      slideNext: function slideNext(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.params,
            r = i.animating,
            n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        return i.slideTo(i.activeIndex + n, e, t, a);
      },
      slidePrev: function slidePrev(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;

        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var p = d(o ? i.translate : -i.translate),
            c = n.map(function (e) {
          return d(e);
        });
        n[c.indexOf(p)];
        var u,
            h = n[c.indexOf(p) - 1];
        return void 0 === h && s.cssMode && n.forEach(function (e) {
          !h && p >= e && (h = e);
        }), void 0 !== h && (u = l.indexOf(h)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, a);
      },
      slideReset: function slideReset(e, t, a) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
      },
      slideToClosest: function slideToClosest(e, t, a, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
        var s = this,
            r = s.activeIndex,
            n = Math.min(s.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / s.params.slidesPerGroup),
            o = s.rtlTranslate ? s.translate : -s.translate;

        if (o >= s.snapGrid[l]) {
          var d = s.snapGrid[l];
          o - d > (s.snapGrid[l + 1] - d) * i && (r += s.params.slidesPerGroup);
        } else {
          var p = s.snapGrid[l - 1];
          o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
        }

        return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
            r = t.clickedIndex;

        if (a.loop) {
          if (t.animating) return;
          e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
        } else t.slideTo(r);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.$wrapperEl;
        i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
        var s = i.children("." + a.slideClass);

        if (a.loopFillGroupWithBlank) {
          var n = a.slidesPerGroup - s.length % a.slidesPerGroup;

          if (n !== a.slidesPerGroup) {
            for (var l = 0; l < n; l += 1) {
              var o = m(t.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
              i.append(o);
            }

            s = i.children("." + a.slideClass);
          }
        }

        "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), e.loopedSlides += a.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
        var d = [],
            p = [];
        s.each(function (t, a) {
          var i = m(t);
          a < e.loopedSlides && p.push(t), a < s.length && a >= s.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a);
        });

        for (var c = 0; c < p.length; c += 1) {
          i.append(m(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        }

        for (var u = d.length - 1; u >= 0; u -= 1) {
          i.prepend(m(d[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        var e = this;
        e.emit("beforeLoopFix");
        var t,
            a = e.activeIndex,
            i = e.slides,
            s = e.loopedSlides,
            r = e.allowSlidePrev,
            n = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        var d = -l[a] - e.getTranslate();
        if (a < s) t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);else if (a >= i.length - s) {
          t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
        t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;

        if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
          var a = t.el;
          a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function appendSlide(e) {
        var t = this,
            a = t.$wrapperEl,
            i = t.params;
        if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && a.append(e[s]);
        } else a.append(e);
        i.loop && t.loopCreate(), i.observer && t.support.observer || t.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            e[n] && i.prepend(e[n]);
          }

          r = s + e.length;
        } else i.prepend(e);

        a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
        s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);else if (e >= n) a.appendSlide(t);else {
          for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
            var p = a.slides.eq(d);
            p.remove(), o.unshift(p);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var c = 0; c < t.length; c += 1) {
              t[c] && i.append(t[c]);
            }

            l = r > e ? r + t.length : r;
          } else i.append(t);

          for (var u = 0; u < o.length; u += 1) {
            i.append(o[u]);
          }

          s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
        a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
        var r,
            n = s;

        if ("object" == _typeof(e) && "length" in e) {
          for (var l = 0; l < e.length; l += 1) {
            r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
          }

          n = Math.max(n, 0);
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);

        a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support;
        e.onTouchStart = O.bind(e), e.onTouchMove = A.bind(e), e.onTouchEnd = D.bind(e), a.cssMode && (e.onScroll = B.bind(e)), e.onClick = G.bind(e);
        var d = !!a.nested;
        if (!o.touch && o.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1);else {
          if (o.touch) {
            var p = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(i.start, e.onTouchStart, p), s.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
              passive: !1,
              capture: d
            } : d), s.addEventListener(i.end, e.onTouchEnd, p), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p), H || (t.addEventListener("touchstart", X), H = !0);
          }

          (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1));
        }
        (a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && n.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : e.on("observerUpdate", N, !0);
      },
      detachEvents: function detachEvents() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support,
            d = !!a.nested;
        if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, d), t.removeEventListener(i.end, e.onTouchEnd, !1);else {
          if (o.touch) {
            var p = !("onTouchStart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(i.start, e.onTouchStart, p), s.removeEventListener(i.move, e.onTouchMove, d), s.removeEventListener(i.end, e.onTouchEnd, p), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
          }

          (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1));
        }
        (a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = e.params,
            n = e.$el,
            l = r.breakpoints;

        if (l && (!l || 0 !== Object.keys(l).length)) {
          var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);

          if (o && e.currentBreakpoint !== o) {
            var d = o in l ? l[o] : void 0;
            d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = d[e];
              void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var p = d || e.originalParams,
                c = r.slidesPerColumn > 1,
                u = p.slidesPerColumn > 1;
            c && !u ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !c && u && (n.addClass(r.containerModifierClass + "multirow"), "column" === p.slidesPerColumnFill && n.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses());
            var h = p.direction && p.direction !== r.direction,
                v = r.loop && (p.slidesPerView !== r.slidesPerView || h);
            h && a && e.changeDirection(), S(e.params, p), S(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", p), v && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", p);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e, t, a) {
        if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
          var i = !1,
              s = l(),
              r = "window" === t ? s.innerWidth : a.clientWidth,
              n = "window" === t ? s.innerHeight : a.clientHeight,
              o = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var t = parseFloat(e.substr(1));
              return {
                value: n * t,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          o.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var d = 0; d < o.length; d += 1) {
            var p = o[d],
                c = p.point;
            p.value <= r && (i = c);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.params,
            a = e.isLocked,
            i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
        t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e,
            t,
            a,
            i = this,
            s = i.classNames,
            r = i.params,
            n = i.rtl,
            l = i.$el,
            o = i.device,
            d = i.support,
            p = (e = ["initialized", r.direction, {
          "pointer-events": d.pointerEvents && !d.touch
        }, {
          "free-mode": r.freeMode
        }, {
          autoheight: r.autoHeight
        }, {
          rtl: n
        }, {
          multirow: r.slidesPerColumn > 1
        }, {
          "multirow-column": r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill
        }, {
          android: o.android
        }, {
          ios: o.ios
        }, {
          "css-mode": r.cssMode
        }], t = r.containerModifierClass, a = [], e.forEach(function (e) {
          "object" == _typeof(e) ? Object.entries(e).forEach(function (e) {
            var i = e[0];
            e[1] && a.push(t + i);
          }) : "string" == typeof e && a.push(t + e);
        }), a);
        s.push.apply(s, p), l.addClass([].concat(s).join(" ")), i.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this,
            t = e.$el,
            a = e.classNames;
        t.removeClass(a.join(" ")), e.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, a, i, s, r) {
        var n,
            o = l();

        function d() {
          r && r();
        }

        m(e).parent("picture")[0] || e.complete && s ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : d();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var a = 0; a < e.imagesToLoad.length; a += 1) {
          var i = e.imagesToLoad[a];
          e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      V = {},
      W = function () {
    function t() {
      for (var e, a, i = arguments.length, s = new Array(i), r = 0; r < i; r++) {
        s[r] = arguments[r];
      }

      if (1 === s.length && s[0].constructor && s[0].constructor === Object ? a = s[0] : (e = s[0], a = s[1]), a || (a = {}), a = S({}, a), e && !a.el && (a.el = e), a.el && m(a.el).length > 1) {
        var n = [];
        return m(a.el).each(function (e) {
          var i = S({}, a, {
            el: e
          });
          n.push(new t(i));
        }), n;
      }

      var l = this;
      l.support = z(), l.device = P({
        userAgent: a.userAgent
      }), l.browser = k(), l.eventsListeners = {}, l.eventsAnyListeners = [], void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
        var t = l.modules[e];

        if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];
          if ("object" != _typeof(s) || null === s) return;
          if (!(i in a) || !("enabled" in s)) return;
          !0 === a[i] && (a[i] = {
            enabled: !0
          }), "object" != _typeof(a[i]) || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
            enabled: !1
          });
        }
      });
      var o,
          d,
          p = S({}, Y);
      return l.useParams(p), l.params = S({}, p, V, a), l.originalParams = S({}, l.params), l.passedParams = S({}, a), l.params && l.params.on && Object.keys(l.params.on).forEach(function (e) {
        l.on(e, l.params.on[e]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = m, S(l, {
        el: e,
        classNames: [],
        slides: m(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === l.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === l.params.direction;
        },
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
        touchEvents: (o = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], l.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
          start: o[0],
          move: o[1],
          end: o[2],
          cancel: o[3]
        }, l.touchEventsDesktop = {
          start: d[0],
          move: d[1],
          end: d[2]
        }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          formElements: "input, select, option, textarea, button, video, label",
          lastClickTime: x(),
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
      }), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l;
    }

    var a,
        i,
        s,
        r = t.prototype;
    return r.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, r.getSlideClasses = function (e) {
      var t = this;
      return e.className.split(" ").filter(function (e) {
        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
      }).join(" ");
    }, r.emitSlidesClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = [];
        e.slides.each(function (a) {
          var i = e.getSlideClasses(a);
          t.push({
            slideEl: a,
            classNames: i
          }), e.emit("_slideClass", a, i);
        }), e.emit("_slideClasses", t);
      }
    }, r.slidesPerViewDynamic = function () {
      var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;

      if (t.centeredSlides) {
        for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
          a[d] && !l && (n += 1, (o += a[d].swiperSlideSize) > s && (l = !0));
        }

        for (var p = r - 1; p >= 0; p -= 1) {
          a[p] && !l && (n += 1, (o += a[p].swiperSlideSize) > s && (l = !0));
        }
      } else for (var c = r + 1; c < a.length; c += 1) {
        i[c] - i[r] < s && (n += 1);
      }

      return n;
    }, r.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            a = e.params;
        a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function i() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, r.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var a = this,
          i = a.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), a.emit("changeDirection"), t && a.update()), a;
    }, r.mount = function (e) {
      var t = this;
      if (t.mounted) return !0;
      var a,
          i = m(e || t.params.el);
      return !!(e = i[0]) && (e.swiper = t, e && e.shadowRoot && e.shadowRoot.querySelector ? (a = m(e.shadowRoot.querySelector("." + t.params.wrapperClass))).children = function (e) {
        return i.children(e);
      } : a = i.children("." + t.params.wrapperClass), S(t, {
        $el: i,
        el: e,
        $wrapperEl: a,
        wrapperEl: a[0],
        mounted: !0,
        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
        wrongRTL: "-webkit-box" === a.css("display")
      }), !0);
    }, r.init = function (e) {
      var t = this;
      return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
    }, r.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var a,
          i = this,
          s = i.params,
          r = i.$el,
          n = i.$wrapperEl,
          l = i.slides;
      return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, a = i, Object.keys(a).forEach(function (e) {
        try {
          a[e] = null;
        } catch (e) {}

        try {
          delete a[e];
        } catch (e) {}
      })), i.destroyed = !0), null;
    }, t.extendDefaults = function (e) {
      S(V, e);
    }, t.installModule = function (e) {
      t.prototype.modules || (t.prototype.modules = {});
      var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
      t.prototype.modules[a] = e;
    }, t.use = function (e) {
      return Array.isArray(e) ? (e.forEach(function (e) {
        return t.installModule(e);
      }), t) : (t.installModule(e), t);
    }, a = t, s = [{
      key: "extendedDefaults",
      get: function get() {
        return V;
      }
    }, {
      key: "defaults",
      get: function get() {
        return Y;
      }
    }], (i = null) && e(a.prototype, i), s && e(a, s), t;
  }();

  Object.keys(R).forEach(function (e) {
    Object.keys(R[e]).forEach(function (t) {
      W.prototype[t] = R[e][t];
    });
  }), W.use([L, I]);
  var F = {
    update: function update(e) {
      var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          c = d.to,
          u = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
      t.updateActiveIndex();
      var m,
          g,
          b,
          w = t.activeIndex || 0;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
      var y = Math.max((w || 0) - b, 0),
          E = Math.min((w || 0) + g, u.length - 1),
          x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function T() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (S(t.virtual, {
        from: y,
        to: E,
        offset: x,
        slidesGrid: t.slidesGrid
      }), p === y && c === E && !e) return t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: y,
        to: E,
        slides: function () {
          for (var e = [], t = y; t <= E; t += 1) {
            e.push(u[t]);
          }

          return e;
        }()
      }), void (t.params.virtual.renderExternalUpdate && T());
      var C = [],
          M = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = p; z <= c; z += 1) {
        (z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
      }

      for (var P = 0; P < u.length; P += 1) {
        P >= y && P <= E && (void 0 === c || e ? M.push(P) : (P > c && M.push(P), P < p && C.push(P)));
      }

      M.forEach(function (e) {
        t.$wrapperEl.append(v(u[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(v(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
    },
    renderSlide: function renderSlide(e, t) {
      var a = this,
          i = a.params.virtual;
      if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
      var s = i.renderSlide ? m(i.renderSlide.call(a, e, t)) : m('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
    },
    appendSlide: function appendSlide(e) {
      var t = this;
      if ("object" == _typeof(e) && "length" in e) for (var a = 0; a < e.length; a += 1) {
        e[a] && t.virtual.slides.push(e[a]);
      } else t.virtual.slides.push(e);
      t.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var r = 0; r < e.length; r += 1) {
          e[r] && t.virtual.slides.unshift(e[r]);
        }

        i = a + e.length, s = e.length;
      } else t.virtual.slides.unshift(e);

      if (t.params.virtual.cache) {
        var n = t.virtual.cache,
            l = {};
        Object.keys(n).forEach(function (e) {
          var t = n[e],
              a = t.attr("data-swiper-slide-index");
          a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), l[parseInt(e, 10) + s] = t;
        }), t.virtual.cache = l;
      }

      t.virtual.update(!0), t.slideTo(i, 0);
    },
    removeSlide: function removeSlide(e) {
      var t = this;

      if (null != e) {
        var a = t.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
          t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
        } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
        t.virtual.update(!0), t.slideTo(a, 0);
      }
    },
    removeAllSlides: function removeAllSlides() {
      var e = this;
      e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
    }
  },
      q = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      M(this, {
        virtual: t({}, F, {
          slides: this.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");
          var t = {
            watchSlidesProgress: !0
          };
          S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate: function setTranslate(e) {
        e.params.virtual.enabled && e.virtual.update();
      }
    }
  },
      j = {
    handle: function handle(e) {
      var t = this,
          a = l(),
          i = r(),
          s = t.rtlTranslate,
          n = e;
      n.originalEvent && (n = n.originalEvent);
      var o = n.keyCode || n.charCode,
          d = t.params.keyboard.pageUpDown,
          p = d && 33 === o,
          c = d && 34 === o,
          u = 37 === o,
          h = 39 === o,
          v = 38 === o,
          f = 40 === o;
      if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && f || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && u || t.isVertical() && v || p)) return !1;

      if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (p || c || u || h || v || f)) {
          var m = !1;
          if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
          var g = a.innerWidth,
              b = a.innerHeight,
              w = t.$el.offset();
          s && (w.left -= t.$el[0].scrollLeft);

          for (var y = [[w.left, w.top], [w.left + t.width, w.top], [w.left, w.top + t.height], [w.left + t.width, w.top + t.height]], E = 0; E < y.length; E += 1) {
            var x = y[E];

            if (x[0] >= 0 && x[0] <= g && x[1] >= 0 && x[1] <= b) {
              if (0 === x[0] && 0 === x[1]) continue;
              m = !0;
            }
          }

          if (!m) return;
        }

        t.isHorizontal() ? ((p || c || u || h) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((c || h) && !s || (p || u) && s) && t.slideNext(), ((p || u) && !s || (c || h) && s) && t.slidePrev()) : ((p || c || v || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (c || f) && t.slideNext(), (p || v) && t.slidePrev()), t.emit("keyPress", o);
      }
    },
    enable: function enable() {
      var e = this,
          t = r();
      e.keyboard.enabled || (m(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
    },
    disable: function disable() {
      var e = this,
          t = r();
      e.keyboard.enabled && (m(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
    }
  },
      _ = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    },
    create: function create() {
      M(this, {
        keyboard: t({
          enabled: !1
        }, j)
      });
    },
    on: {
      init: function init(e) {
        e.params.keyboard.enabled && e.keyboard.enable();
      },
      destroy: function destroy(e) {
        e.keyboard.enabled && e.keyboard.disable();
      }
    }
  };
  var U = {
    lastScrollTime: x(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event: function event() {
      return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = r(),
            t = "onwheel",
            a = t in e;

        if (!a) {
          var i = e.createElement("div");
          i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel;
        }

        return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
      }() ? "wheel" : "mousewheel";
    },
    normalize: function normalize(e) {
      var t = 0,
          a = 0,
          i = 0,
          s = 0;
      return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
        spinX: t,
        spinY: a,
        pixelX: i,
        pixelY: s
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle: function handle(e) {
      var t = e,
          a = this,
          i = a.params.mousewheel;
      a.params.cssMode && t.preventDefault();
      var s = a.$el;
      if ("container" !== a.params.mousewheel.eventsTarget && (s = m(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var r = 0,
          n = a.rtlTranslate ? -1 : 1,
          l = U.normalize(t);
      if (i.forceToAxis) {
        if (a.isHorizontal()) {
          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
          r = -l.pixelX * n;
        } else {
          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
          r = -l.pixelY;
        }
      } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
      if (0 === r) return !0;
      i.invert && (r = -r);
      var o = a.getTranslate() + r * i.sensitivity;

      if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), (!!a.params.loop || !(o === a.minTranslate() || o === a.maxTranslate())) && a.params.nested && t.stopPropagation(), a.params.freeMode) {
        var d = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r)
        },
            p = a.mousewheel.lastEventBeforeSnap,
            c = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;

        if (!c) {
          a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
          var u = a.getTranslate() + r * i.sensitivity,
              h = a.isBeginning,
              v = a.isEnd;

          if (u >= a.minTranslate() && (u = a.minTranslate()), u <= a.maxTranslate() && (u = a.maxTranslate()), a.setTransition(0), a.setTranslate(u), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
            clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
            var f = a.mousewheel.recentWheelEvents;
            f.length >= 15 && f.shift();
            var g = f.length ? f[f.length - 1] : void 0,
                b = f[0];
            if (f.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) f.splice(0);else if (f.length >= 15 && d.time - b.time < 500 && b.delta - d.delta >= 1 && d.delta <= 6) {
              var w = r > 0 ? .8 : .2;
              a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = E(function () {
                a.slideToClosest(a.params.speed, !0, void 0, w);
              }, 0);
            }
            a.mousewheel.timeout || (a.mousewheel.timeout = E(function () {
              a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (c || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), u === a.minTranslate() || u === a.maxTranslate()) return !0;
        }
      } else {
        var y = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r),
          raw: e
        },
            T = a.mousewheel.recentWheelEvents;
        T.length >= 2 && T.shift();
        var C = T.length ? T[T.length - 1] : void 0;
        if (T.push(y), C ? (y.direction !== C.direction || y.delta > C.delta || y.time > C.time + 150) && a.mousewheel.animateSlider(y) : a.mousewheel.animateSlider(y), a.mousewheel.releaseScroll(y)) return !0;
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    animateSlider: function animateSlider(e) {
      var t = this,
          a = l();
      return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = new a.Date().getTime(), !1));
    },
    releaseScroll: function releaseScroll(e) {
      var t = this,
          a = t.params.mousewheel;

      if (e.direction < 0) {
        if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
      } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;

      return !1;
    },
    enable: function enable() {
      var e = this,
          t = U.event();
      if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
      if (!t) return !1;
      if (e.mousewheel.enabled) return !1;
      var a = e.$el;
      return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = this,
          t = U.event();
      if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
      if (!t) return !1;
      if (!e.mousewheel.enabled) return !1;
      var a = e.$el;
      return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
    }
  },
      K = {
    update: function update() {
      var e = this,
          t = e.params.navigation;

      if (!e.params.loop) {
        var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
        s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      var t = this;
      e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var t = this;
      e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
    },
    init: function init() {
      var e,
          t,
          a = this,
          i = a.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), S(a.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
      a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
    }
  },
      Z = {
    update: function update() {
      var e = this,
          t = e.rtl,
          a = e.params.pagination;

      if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var i,
            s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            r = e.pagination.$el,
            n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== e.params.paginationType && (i = n + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
          var l,
              o,
              d,
              p = e.pagination.bullets;
          if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = i - e.pagination.dynamicBulletIndex, d = ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) + l) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) p.each(function (e) {
            var t = m(e),
                s = t.index();
            s === i && t.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"), s === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
          });else {
            var c = p.eq(i),
                u = c.index();

            if (c.addClass(a.bulletActiveClass), a.dynamicBullets) {
              for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1) {
                p.eq(f).addClass(a.bulletActiveClass + "-main");
              }

              if (e.params.loop) {
                if (u >= p.length - a.dynamicMainBullets) {
                  for (var g = a.dynamicMainBullets; g >= 0; g -= 1) {
                    p.eq(p.length - g).addClass(a.bulletActiveClass + "-main");
                  }

                  p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev");
                } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
              } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
            }
          }

          if (a.dynamicBullets) {
            var b = Math.min(p.length, a.dynamicMainBullets + 4),
                w = (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                y = t ? "right" : "left";
            p.css(e.isHorizontal() ? y : "top", w + "px");
          }
        }

        if ("fraction" === a.type && (r.find("." + a.currentClass).text(a.formatFractionCurrent(i + 1)), r.find("." + a.totalClass).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
          var E;
          E = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
          var x = (i + 1) / n,
              T = 1,
              C = 1;
          "horizontal" === E ? T = x : C = x, r.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")").transition(e.params.speed);
        }

        "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](a.lockClass);
      }
    },
    render: function render() {
      var e = this,
          t = e.params.pagination;

      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";

        if ("bullets" === t.type) {
          var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
          e.params.freeMode && !e.params.loop && r > a && (r = a);

          for (var n = 0; n < r; n += 1) {
            t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
          }

          i.html(s), e.pagination.bullets = i.find("." + t.bulletClass.replace(/ /g, "."));
        }

        "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var a = m(t.el);
        0 !== a.length && (e.params.uniqueNavElements && "string" == typeof t.el && a.length > 1 && (a = e.$el.find(t.el)), "bullets" === t.type && t.clickable && a.addClass(t.clickableClass), a.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass), t.clickable && a.on("click", "." + t.bulletClass.replace(/ /g, "."), function (t) {
          t.preventDefault();
          var a = m(this).index() * e.params.slidesPerGroup;
          e.params.loop && (a += e.loopedSlides), e.slideTo(a);
        }), S(e.pagination, {
          $el: a,
          el: a[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this,
          t = e.params.pagination;

      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.pagination.$el;
        a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass.replace(/ /g, "."));
      }
    }
  },
      J = {
    setTranslate: function setTranslate() {
      var e = this;

      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
        a ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > r && (d = r + p) : p < 0 ? (d = s + p, p = 0) : p + s > r && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
          l[0].style.opacity = 0, l.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      var t = this;
      t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      var e = this;

      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
        a[0].style.width = "", a[0].style.height = "";
        var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (r / e.size);
        s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), S(t, {
          trackSize: r,
          divider: n,
          moveDivider: l,
          dragSize: s
        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
      }
    },
    getPointerPosition: function getPointerPosition(e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          l = i.trackSize,
          o = i.dragStartPos;
      t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (l - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
      a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
      t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
      t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = E(function () {
        r.css("opacity", 0), r.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            p = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o && (l.touch ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d), o.addEventListener(i.move, e.scrollbar.onDragMove, d), o.addEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, d), t.addEventListener(s.move, e.scrollbar.onDragMove, d), t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
      }
    },
    disableDraggable: function disableDraggable() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            p = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o && (l.touch ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d), o.removeEventListener(i.move, e.scrollbar.onDragMove, d), o.removeEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d), t.removeEventListener(s.move, e.scrollbar.onDragMove, d), t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
      }
    },
    init: function init() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = m(i.el);
        e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
        var r = s.find("." + e.params.scrollbar.dragClass);
        0 === r.length && (r = m('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), S(t, {
          $el: s,
          el: s[0],
          $dragEl: r,
          dragEl: r[0]
        }), i.draggable && t.enableDraggable();
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      Q = {
    setTransform: function setTransform(e, t) {
      var a = this.rtl,
          i = m(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y"),
          o = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");

      if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
        var p = d - (d - 1) * (1 - Math.abs(t));
        i[0].style.opacity = p;
      }

      if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");else {
        var c = o - (o - 1) * (1 - Math.abs(t));
        i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + c + ")");
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        e.parallax.setTransform(t, i);
      }), a.each(function (t, a) {
        var r = t.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, r);
        });
      });
    },
    setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        var a = m(t),
            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (i = 0), a.transition(i);
      });
    }
  },
      ee = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;

      if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureTouched = !0, r.scaleStart = ee.getDistanceBetweenTouches(e);
      }

      r.$slideEl && r.$slideEl.length || (r.$slideEl = m(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;

      if (!a.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureMoved = !0, r.scaleMove = ee.getDistanceBetweenTouches(e);
      }

      r.$imageEl && 0 !== r.$imageEl.length ? (a.gestures ? s.scale = e.scale * s.currentScale : s.scale = r.scaleMove / r.scaleStart * s.currentScale, s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this,
          a = t.device,
          i = t.support,
          s = t.params.zoom,
          r = t.zoom,
          n = r.gesture;

      if (!i.gestures) {
        if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
        r.fakeGestureTouched = !1, r.fakeGestureMoved = !1;
      }

      n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.device,
          a = this.zoom,
          i = a.gesture,
          s = a.image;
      i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var n = s.width * a.scale,
            l = s.height * a.scale;

        if (!(n < i.slideWidth && l < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
        a.isTouched = !1, a.isMoved = !1;
        var s = 300,
            r = 300,
            n = i.x * s,
            l = a.currentX + n,
            o = i.y * r,
            d = a.currentY + o;
        0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
        var p = Math.max(s, r);
        a.currentX = l, a.currentY = d;
        var c = a.width * e.scale,
            u = a.height * e.scale;
        a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this,
          t = e.zoom,
          a = t.gesture;
      a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t["in"](e);
    },
    "in": function _in(e) {
      var t,
          a,
          i,
          s,
          r,
          n,
          o,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g,
          b = this,
          w = l(),
          y = b.zoom,
          E = b.params.zoom,
          x = y.gesture,
          T = y.image;
      (x.$slideEl || (b.params.virtual && b.params.virtual.enabled && b.virtual ? x.$slideEl = b.$wrapperEl.children("." + b.params.slideActiveClass) : x.$slideEl = b.slides.eq(b.activeIndex), x.$imageEl = x.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), x.$imageWrapEl = x.$imageEl.parent("." + E.containerClass)), x.$imageEl && 0 !== x.$imageEl.length) && (x.$slideEl.addClass("" + E.zoomedSlideClass), void 0 === T.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = T.touchesStart.x, a = T.touchesStart.y), y.scale = x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio, y.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio, e ? (m = x.$slideEl[0].offsetWidth, g = x.$slideEl[0].offsetHeight, i = x.$slideEl.offset().left + w.scrollX + m / 2 - t, s = x.$slideEl.offset().top + w.scrollY + g / 2 - a, o = x.$imageEl[0].offsetWidth, d = x.$imageEl[0].offsetHeight, p = o * y.scale, c = d * y.scale, v = -(u = Math.min(m / 2 - p / 2, 0)), f = -(h = Math.min(g / 2 - c / 2, 0)), (r = i * y.scale) < u && (r = u), r > v && (r = v), (n = s * y.scale) < h && (n = h), n > f && (n = f)) : (r = 0, n = 0), x.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"));
    },
    out: function out() {
      var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
      i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
    },
    toggleGestures: function toggleGestures(e) {
      var t = this,
          a = t.zoom,
          i = a.slideSelector,
          s = a.passiveListener;
      t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
    },
    enableGestures: function enableGestures() {
      this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
    },
    disableGestures: function disableGestures() {
      this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
    },
    enable: function enable() {
      var e = this,
          t = e.support,
          a = e.zoom;

      if (!a.enabled) {
        a.enabled = !0;
        var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !t.passiveListener || {
          passive: !1,
          capture: !0
        },
            r = "." + e.params.slideClass;
        e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s);
      }
    },
    disable: function disable() {
      var e = this,
          t = e.zoom;

      if (t.enabled) {
        var a = e.support;
        e.zoom.enabled = !1;
        var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !a.passiveListener || {
          passive: !1,
          capture: !0
        },
            r = "." + e.params.slideClass;
        a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s);
      }
    }
  },
      te = {
    loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);
      var a = this,
          i = a.params.lazy;

      if (void 0 !== e && 0 !== a.slides.length) {
        var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
            r = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
        !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r.push(s[0]), 0 !== r.length && r.each(function (e) {
          var r = m(e);
          r.addClass(i.loadingClass);
          var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              p = r.parent("picture");
          a.loadImage(r[0], l || n, o, d, !1, function () {
            if (null != a && a && (!a || a.params) && !a.destroyed) {
              if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), p.length && p.children("source").each(function (e) {
                var t = m(e);
                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
              }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), a.params.loop && t) {
                var e = s.attr("data-swiper-slide-index");

                if (s.hasClass(a.params.slideDuplicateClass)) {
                  var c = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
                  a.lazy.loadInSlide(c.index(), !1);
                } else {
                  var u = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  a.lazy.loadInSlide(u.index(), !1);
                }
              }

              a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight();
            }
          }), a.emit("lazyImageLoad", s[0], r[0]);
        });
      }
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          n = a.lazy,
          l = a.slidesPerView;

      function o(e) {
        if (r) {
          if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (i[e]) return !0;

        return !1;
      }

      function d(e) {
        return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (t) {
        var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
        e.lazy.loadInSlide(a);
      });else if (l > 1) for (var p = s; p < s + l; p += 1) {
        o(p) && e.lazy.loadInSlide(p);
      } else e.lazy.loadInSlide(s);
      if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        for (var c = n.loadPrevNextAmount, u = l, h = Math.min(s + u + Math.max(c, u), i.length), v = Math.max(s - Math.max(u, c), 0), f = s + l; f < h; f += 1) {
          o(f) && e.lazy.loadInSlide(f);
        }

        for (var g = v; g < s; g += 1) {
          o(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var b = t.children("." + a.slideNextClass);
        b.length > 0 && e.lazy.loadInSlide(d(b));
        var w = t.children("." + a.slidePrevClass);
        w.length > 0 && e.lazy.loadInSlide(d(w));
      }
    },
    checkInViewOnLoad: function checkInViewOnLoad() {
      var e = l(),
          t = this;

      if (t && !t.destroyed) {
        var a = t.params.lazy.scrollingElement ? m(t.params.lazy.scrollingElement) : m(e),
            i = a[0] === e,
            s = i ? e.innerWidth : a[0].offsetWidth,
            r = i ? e.innerHeight : a[0].offsetHeight,
            n = t.$el.offset(),
            o = !1;
        t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);

        for (var d = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]], p = 0; p < d.length; p += 1) {
          var c = d[p];

          if (c[0] >= 0 && c[0] <= s && c[1] >= 0 && c[1] <= r) {
            if (0 === c[0] && 0 === c[1]) continue;
            o = !0;
          }
        }

        o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad));
      }
    }
  },
      ae = {
    LinearSpline: function LinearSpline(e, t) {
      var a,
          i,
          s,
          r,
          n,
          l = function l(e, t) {
        for (i = -1, a = e.length; a - i > 1;) {
          e[s = a + i >> 1] <= t ? i = s : a = s;
        }

        return a;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      var t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new ae.LinearSpline(t.slidesGrid, e.slidesGrid) : new ae.LinearSpline(t.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var a,
          i,
          s = this,
          r = s.controller.control,
          n = s.constructor;

      function l(e) {
        var t = s.rtlTranslate ? -s.translate : s.translate;
        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof n && l(r[o]);
      } else r instanceof n && t !== r && l(r);
    },
    setTransition: function setTransition(e, t) {
      var a,
          i = this,
          s = i.constructor,
          r = i.controller.control;

      function n(t) {
        t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(r)) for (a = 0; a < r.length; a += 1) {
        r[a] !== t && r[a] instanceof s && n(r[a]);
      } else r instanceof s && t !== r && n(r);
    }
  },
      ie = {
    getRandomNumber: function getRandomNumber(e) {
      void 0 === e && (e = 16);
      return "x".repeat(e).replace(/x/g, function () {
        return Math.round(16 * Math.random()).toString(16);
      });
    },
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    makeElNotFocusable: function makeElNotFocusable(e) {
      return e.attr("tabIndex", "-1"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElRoleDescription: function addElRoleDescription(e, t) {
      return e.attr("aria-role-description", t), e;
    },
    addElControls: function addElControls(e, t) {
      return e.attr("aria-controls", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    addElId: function addElId(e, t) {
      return e.attr("id", t), e;
    },
    addElLive: function addElLive(e, t) {
      return e.attr("aria-live", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
      if (13 === e.keyCode || 32 === e.keyCode) {
        var t = this,
            a = t.params.a11y,
            i = m(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass.replace(/ /g, ".")) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      var e = this;

      if (!e.params.loop && e.navigation) {
        var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
        i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && a.length > 0 && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
      }
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (a) {
        var i = m(a);
        e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
      });
    },
    init: function init() {
      var e = this,
          t = e.params.a11y;
      e.$el.append(e.a11y.liveRegion);
      var a = e.$el;
      t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
      var i,
          s,
          r,
          n = e.$wrapperEl,
          l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
      e.a11y.addElId(n, l), i = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(n, i), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), "group"), e.slides.each(function (t) {
        var a = m(t);
        e.a11y.addElLabel(a, a.index() + 1 + " / " + e.slides.length);
      }), e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), s && s.length && (e.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (e.a11y.addElRole(s, "button"), s.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(s, t.nextSlideMessage), e.a11y.addElControls(s, l)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, l)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass.replace(/ /g, "."), e.a11y.onEnterOrSpaceKey);
    },
    destroy: function destroy() {
      var e,
          t,
          a = this;
      a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterOrSpaceKey), t && t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass.replace(/ /g, "."), a.a11y.onEnterOrSpaceKey);
    }
  },
      se = {
    init: function init() {
      var e = this,
          t = l();

      if (e.params.history) {
        if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
        var a = e.history;
        a.initialized = !0, a.paths = se.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      var e = this;
      e.history.paths = se.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
    },
    getPathValues: function getPathValues(e) {
      var t = l(),
          a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = a.length;
      return {
        key: a[i - 2],
        value: a[i - 1]
      };
    },
    setHistory: function setHistory(e, t) {
      var a = this,
          i = l();

      if (a.history.initialized && a.params.history.enabled) {
        var s;
        s = a.params.url ? new URL(a.params.url) : i.location;
        var r = a.slides.eq(t),
            n = se.slugify(r.attr("data-history"));
        s.pathname.includes(e) || (n = e + "/" + n);
        var o = i.history.state;
        o && o.value === n || (a.params.history.replaceState ? i.history.replaceState({
          value: n
        }, null, n) : i.history.pushState({
          value: n
        }, null, n));
      }
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, a) {
      var i = this;
      if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
        var n = i.slides.eq(s);

        if (se.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
          var l = n.index();
          i.slideTo(l, e, a);
        }
      } else i.slideTo(0, e, a);
    }
  },
      re = {
    onHashCange: function onHashCange() {
      var e = this,
          t = r();
      e.emit("hashChange");
      var a = t.location.hash.replace("#", "");

      if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
        if (void 0 === i) return;
        e.slideTo(i);
      }
    },
    setHash: function setHash() {
      var e = this,
          t = l(),
          a = r();
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet");else {
        var i = e.slides.eq(e.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        a.location.hash = s || "", e.emit("hashSet");
      }
    },
    init: function init() {
      var e = this,
          t = r(),
          a = l();

      if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
        e.hashNavigation.initialized = !0;
        var i = t.location.hash.replace("#", "");
        if (i) for (var s = 0, n = e.slides.length; s < n; s += 1) {
          var o = e.slides.eq(s);

          if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
            var d = o.index();
            e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
          }
        }
        e.params.hashNavigation.watchState && m(a).on("hashchange", e.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      ne = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
        var t;
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
      }, a);
    },
    start: function start() {
      var e = this;
      return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
    },
    stop: function stop() {
      var e = this;
      return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      var t = this;
      t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
    },
    onVisibilityChange: function onVisibilityChange() {
      var e = this,
          t = r();
      "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
    },
    onTransitionEnd: function onTransitionEnd(e) {
      var t = this;
      t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
    }
  },
      le = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
        var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
        e.params.virtualTranslate || (s -= e.translate);
        var r = 0;
        e.isHorizontal() || (r = s, s = 0);
        var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: n
        }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.slides,
          i = t.$wrapperEl;

      if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
        var s = !1;
        a.transitionEnd(function () {
          if (!s && t && !t.destroyed) {
            s = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
              i.trigger(e[a]);
            }
          }
        });
      }
    }
  },
      oe = {
    setTranslate: function setTranslate() {
      var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          c = t.isHorizontal(),
          u = t.virtual && t.params.virtual.enabled,
          h = 0;
      p.shadow && (c ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: r + "px"
      })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), a.append(e)));

      for (var v = 0; v < s.length; v += 1) {
        var f = s.eq(v),
            g = v;
        u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
        var b = 90 * g,
            w = Math.floor(b / 360);
        l && (b = -b, w = Math.floor(-b / 360));
        var y = Math.max(Math.min(f[0].progress, 1), -1),
            E = 0,
            x = 0,
            T = 0;
        g % 4 == 0 ? (E = 4 * -w * o, T = 0) : (g - 1) % 4 == 0 ? (E = 0, T = 4 * -w * o) : (g - 2) % 4 == 0 ? (E = o + 4 * w * o, T = o) : (g - 3) % 4 == 0 && (E = -o, T = 3 * o + 4 * o * w), l && (E = -E), c || (x = E, E = 0);
        var C = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + E + "px, " + x + "px, " + T + "px)";

        if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(C), p.slideShadows) {
          var S = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              M = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(M)), S.length && (S[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
        "transform-origin": "50% 50% -" + o / 2 + "px"
      }), p.shadow) if (c) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");else {
        var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
            k = p.shadowScale,
            L = p.shadowScale / P,
            $ = p.shadowOffset;
        e.transform("scale3d(" + k + ", 1, " + L + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / L + "px) rotateX(-90deg)");
      }
      var I = d.isSafari || d.isWebView ? -o / 2 : 0;
      i.transform("translate3d(0px,0," + I + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.$el;
      t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
    }
  },
      de = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
        var s = t.eq(i),
            r = s[0].progress;
        e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
        var n = -180 * r,
            l = 0,
            o = -s[0].swiperSlideOffset,
            d = 0;

        if (e.isHorizontal() ? a && (n = -n) : (d = o, o = 0, l = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
          var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === p.length && (p = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0));
        }

        s.transform("translate3d(" + o + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + n + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;

      if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        a.eq(i).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
              s.trigger(e[a]);
            }
          }
        });
      }
    }
  },
      pe = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : a / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth, c = 0, u = i.length; c < u; c += 1) {
        var h = i.eq(c),
            v = s[c],
            f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
            g = n ? d * f : 0,
            b = n ? 0 : d * f,
            w = -p * Math.abs(f),
            y = r.stretch;
        "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * v);
        var E = n ? 0 : y * f,
            x = n ? y * f : 0,
            T = 1 - (1 - r.scale) * Math.abs(f);
        Math.abs(x) < .001 && (x = 0), Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0), Math.abs(T) < .001 && (T = 0);
        var C = "translate3d(" + x + "px," + E + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg) scale(" + T + ")";

        if (h.transform(C), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
          var S = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
              M = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(M)), S.length && (S[0].style.opacity = f > 0 ? f : 0), M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
        }
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      ce = {
    init: function init() {
      var e = this,
          t = e.params.thumbs;
      if (e.thumbs.initialized) return !1;
      e.thumbs.initialized = !0;
      var a = e.constructor;
      return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, S(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), S(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : C(t.swiper) && (e.thumbs.swiper = new a(S({}, t.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
    },
    onThumbClick: function onThumbClick() {
      var e = this,
          t = e.thumbs.swiper;

      if (t) {
        var a = t.clickedIndex,
            i = t.clickedSlide;

        if (!(i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
          var s;

          if (s = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
            var r = e.activeIndex;
            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
          }

          e.slideTo(s);
        }
      }
    },
    update: function update(e) {
      var t = this,
          a = t.thumbs.swiper;

      if (a) {
        var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop;

        if (t.realIndex !== a.realIndex || r) {
          var n,
              l,
              o = a.activeIndex;

          if (a.params.loop) {
            a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
            var d = a.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                p = a.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
            n = void 0 === d ? p : void 0 === p ? d : p - o == o - d ? o : p - o < o - d ? p : d, l = t.activeIndex > t.previousIndex ? "next" : "prev";
          } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";

          r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > o ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > o && (n = n - i + 1), a.slideTo(n, e ? 0 : void 0));
        }

        var c = 1,
            u = t.params.thumbs.slideThumbActiveClass;
        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (c = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (c = 1), c = Math.floor(c), a.slides.removeClass(u), a.params.loop || a.params.virtual && a.params.virtual.enabled) for (var h = 0; h < c; h += 1) {
          a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(u);
        } else for (var v = 0; v < c; v += 1) {
          a.slides.eq(t.realIndex + v).addClass(u);
        }
      }
    }
  },
      ue = [q, _, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    },
    create: function create() {
      M(this, {
        mousewheel: {
          enabled: !1,
          lastScrollTime: x(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          enable: U.enable,
          disable: U.disable,
          handle: U.handle,
          handleMouseEnter: U.handleMouseEnter,
          handleMouseLeave: U.handleMouseLeave,
          animateSlider: U.animateSlider,
          releaseScroll: U.releaseScroll
        }
      });
    },
    on: {
      init: function init(e) {
        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
      },
      destroy: function destroy(e) {
        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
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
    create: function create() {
      M(this, {
        navigation: t({}, K)
      });
    },
    on: {
      init: function init(e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function toEdge(e) {
        e.navigation.update();
      },
      fromEdge: function fromEdge(e) {
        e.navigation.update();
      },
      destroy: function destroy(e) {
        e.navigation.destroy();
      },
      click: function click(e, t) {
        var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl,
            r = t.target;

        if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
          if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
          var n;
          i ? n = i.hasClass(e.params.navigation.hiddenClass) : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass);
        }
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
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
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
    create: function create() {
      M(this, {
        pagination: t({
          dynamicBulletIndex: 0
        }, Z)
      });
    },
    on: {
      init: function init(e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function activeIndexChange(e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange(e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange(e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange(e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy(e) {
        e.pagination.destroy();
      },
      click: function click(e, t) {
        var a = t.target;

        if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(a).hasClass(e.params.pagination.bulletClass)) {
          if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
          !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
        }
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
    create: function create() {
      M(this, {
        scrollbar: t({
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }, J)
      });
    },
    on: {
      init: function init(e) {
        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
      },
      update: function update(e) {
        e.scrollbar.updateSize();
      },
      resize: function resize(e) {
        e.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(e) {
        e.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(e) {
        e.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.scrollbar.setTransition(t);
      },
      destroy: function destroy(e) {
        e.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      M(this, {
        parallax: t({}, Q)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      init: function init(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTranslate: function setTranslate(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.params.parallax.enabled && e.parallax.setTransition(t);
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
    create: function create() {
      var e = this;
      M(e, {
        zoom: t({
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
        }, ee)
      });
      var a = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function get() {
          return a;
        },
        set: function set(t) {
          if (a !== t) {
            var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
            e.emit("zoomChange", t, i, s);
          }

          a = t;
        }
      });
    },
    on: {
      init: function init(e) {
        e.params.zoom.enabled && e.zoom.enable();
      },
      destroy: function destroy(e) {
        e.zoom.disable();
      },
      touchStart: function touchStart(e, t) {
        e.zoom.enabled && e.zoom.onTouchStart(t);
      },
      touchEnd: function touchEnd(e, t) {
        e.zoom.enabled && e.zoom.onTouchEnd(t);
      },
      doubleTap: function doubleTap(e, t) {
        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
      },
      transitionEnd: function transitionEnd(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
      },
      slideChange: function slideChange(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      M(this, {
        lazy: t({
          initialImageLoaded: !1
        }, te)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
      },
      init: function init(e) {
        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
      },
      scroll: function scroll(e) {
        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
      },
      "scrollbarDragMove resize _freeModeNoMomentumRelease": function scrollbarDragMoveResize_freeModeNoMomentumRelease(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      transitionStart: function transitionStart(e) {
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function transitionEnd(e) {
        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
      },
      slideChange: function slideChange(e) {
        e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
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
    create: function create() {
      M(this, {
        controller: t({
          control: this.params.controller.control
        }, ae)
      });
    },
    on: {
      update: function update(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      resize: function resize(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      observerUpdate: function observerUpdate(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      setTranslate: function setTranslate(e, t, a) {
        e.controller.control && e.controller.setTranslate(t, a);
      },
      setTransition: function setTransition(e, t, a) {
        e.controller.control && e.controller.setTransition(t, a);
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
        paginationBulletMessage: "Go to slide {{index}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null
      }
    },
    create: function create() {
      M(this, {
        a11y: t({}, ie, {
          liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        })
      });
    },
    on: {
      afterInit: function afterInit(e) {
        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
      },
      toEdge: function toEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(e) {
        e.params.a11y.enabled && e.a11y.updatePagination();
      },
      destroy: function destroy(e) {
        e.params.a11y.enabled && e.a11y.destroy();
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
    create: function create() {
      M(this, {
        history: t({}, se)
      });
    },
    on: {
      init: function init(e) {
        e.params.history.enabled && e.history.init();
      },
      destroy: function destroy(e) {
        e.params.history.enabled && e.history.destroy();
      },
      transitionEnd: function transitionEnd(e) {
        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
      },
      slideChange: function slideChange(e) {
        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
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
    create: function create() {
      M(this, {
        hashNavigation: t({
          initialized: !1
        }, re)
      });
    },
    on: {
      init: function init(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.init();
      },
      destroy: function destroy(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
      },
      transitionEnd: function transitionEnd(e) {
        e.hashNavigation.initialized && e.hashNavigation.setHash();
      },
      slideChange: function slideChange(e) {
        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
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
    create: function create() {
      M(this, {
        autoplay: t({}, ne, {
          running: !1,
          paused: !1
        })
      });
    },
    on: {
      init: function init(e) {
        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
      },
      beforeTransitionStart: function beforeTransitionStart(e, t, a) {
        e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove(e) {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
      },
      touchEnd: function touchEnd(e) {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
      },
      destroy: function destroy(e) {
        e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      M(this, {
        fadeEffect: t({}, le)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
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
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "fade" === e.params.effect && e.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
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
    create: function create() {
      M(this, {
        cubeEffect: t({}, oe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
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
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "cube" === e.params.effect && e.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "cube" === e.params.effect && e.cubeEffect.setTransition(t);
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
    create: function create() {
      M(this, {
        flipEffect: t({}, de)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
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
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "flip" === e.params.effect && e.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "flip" === e.params.effect && e.flipEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      M(this, {
        coverflowEffect: t({}, pe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate(e) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function create() {
      M(this, {
        thumbs: t({
          swiper: null,
          initialized: !1
        }, ce)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        var t = e.params.thumbs;
        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
      },
      slideChange: function slideChange(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      update: function update(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      resize: function resize(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      observerUpdate: function observerUpdate(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      setTransition: function setTransition(e, t) {
        var a = e.thumbs.swiper;
        a && a.setTransition(t);
      },
      beforeDestroy: function beforeDestroy(e) {
        var t = e.thumbs.swiper;
        t && e.thumbs.swiperCreated && t && t.destroy();
      }
    }
  }];
  return W.use(ue), W;
});
'use strict';

window.onload = function () {
  // const 1200 = 1200;
  var headerBurger = document.getElementById('header_nav_trigger'),
      classHeaderTop = document.querySelector('.header__top'),
      buttonActiveChild = document.getElementById('menu__active_child'),
      buttonActiveChildLink = document.querySelector('#menu__active_child a');
  var catalog_header = document.querySelector('.catalog__header');
  var sect_header = document.querySelector('.sect_nav');
  var page_research = document.querySelector('.page_research');
  var page_blog = document.querySelector('.page_blog');

  var headerBurgetActive = function headerBurgetActive() {
    headerBurger.addEventListener('click', function () {
      // document.querySelector('body').classList.toggle('overflow-none');
      if (catalog_header) catalog_header.setAttribute('style', 'z-index: 1;');
      if (sect_header) sect_header.setAttribute('style', 'z-index: 1;');
      classHeaderTop.classList.toggle('header_menu_active');

      if (classHeaderTop.classList.contains('header_menu_active_child')) {
        classHeaderTop.classList.remove('header_menu_active_child');
        classHeaderTop.classList.add('header_menu_active');
      }
    });
    buttonActiveChild.addEventListener('click', function () {
      classHeaderTop.classList.add('header_menu_active_child');
    });
  };

  var headerMenuActiveMenu = function headerMenuActiveMenu() {
    var classHeaderMenuChild = document.querySelector('.header_menu__child');
    buttonActiveChildLink.addEventListener('click', function (event) {
      event.preventDefault();
      classHeaderMenuChild.classList.toggle('active_desktop');
    });
  };

  var headerMenuActiveNotTarget = function headerMenuActiveNotTarget() {
    var classHeaderMenuChild = document.querySelector('.header_menu__child');
    window.addEventListener('click', function (event) {
      var tg = event.target,
          isButtonLink = tg.parentNode.getAttribute("id") == "menu__active_child",
          isMenuWrap = tg == classHeaderMenuChild || classHeaderMenuChild.contains(tg);

      if (!isButtonLink && !isMenuWrap) {
        classHeaderMenuChild.classList.remove('active_desktop');
      }
    });
  };

  headerMenuActiveMenu();
  headerMenuActiveNotTarget();
  headerBurgetActive();
  var widthStatus = false;
  window.addEventListener('resize', function () {
    var classHeaderMenuChild = document.querySelector('.header_menu__child');
    window.outerWidth >= 1200 ? widthStatus = false : widthStatus = true;

    if (!widthStatus) {
      classHeaderTop.classList.remove('header_menu_active_child');
      classHeaderTop.classList.remove('header_menu_active');
    } else {
      classHeaderTop.classList.remove('header_menu_active_child');
      classHeaderMenuChild.classList.remove('active_desktop');
    }
  }); // header menu fixed

  var headerScrollPos = function headerScrollPos() {
    var header = document.querySelector('.header'),
        header_product = document.querySelector('.product_header_fixed'),
        headerHeight = header.clientHeight; // headerMenuActive = document.querySelector('.header_menu_active');

    if (window.pageYOffset >= headerHeight) {
      if (header_product) {
        if (header_product.className != 'active') {
          header_product.classList.add('active');
        }
      }

      if (header.className != 'header_fixed' && !header.classList.contains('header_static')) {
        header.classList.add('header_fixed');
      }
    } else {
      header.classList.remove('header_fixed');

      if (header_product) {
        header_product.classList.remove('active');
      }
    }
  };

  var filterScrollPos = function filterScrollPos() {
    var header = document.querySelector('.header'),
        headerHeight = header.clientHeight,
        filterHeight = catalog_header ? catalog_header.clientHeight : 0,
        sect_nav = sect_header ? sect_header.clientHeight : 0,
        sumHeight = headerHeight + filterHeight,
        sumHeightSectNav = headerHeight + sect_nav,
        header_wrap = document.querySelector('.header'),
        catalog_wrap = document.querySelector('.catalog'); // scrollStatus = false,
    // styles = 'top:0px; z-index:'+15;

    if (catalog_header) {
      if (window.pageYOffset >= sumHeight) {
        if (catalog_header.className != 'scroll-active') {
          catalog_wrap.classList.add('scroll-buffer');
          catalog_header.classList.add('scroll-active'); // catalog_header.setAttribute('style', 'top:'+classHeaderTop.clientHeight+'px; z-index:'+14);

          if (window.outerWidth < 768) {
            catalog_header.setAttribute('style', 'top:0; z-index:' + 14);
          } else {
            catalog_header.setAttribute('style', 'top:0; z-index:' + 14);
          }

          if (!header.classList.contains('header_static')) header_wrap.setAttribute('style', 'opacity: 0'); // catalog_header.setAttribute('style', 'top:0; z-index:'+14);
        }
      } else {
        catalog_wrap.classList.remove('scroll-buffer');
        catalog_header.classList.remove('scroll-active');
        if (!header.classList.contains('header_static')) header_wrap.removeAttribute('style');
        catalog_header.removeAttribute('style');
      }
    }

    if (sect_header) {
      if (window.pageYOffset >= sumHeightSectNav) {
        if (sect_header.className != 'scroll-active') {
          sect_header.classList.add('scroll-active'); // window.addEventListener('resize', function(){
          // 	classHeaderTop.setAttribute('style', 'opacity: 0');
          // 	sect_header.setAttribute('style', 'top:0; z-index:'+14);
          // });

          header_wrap.setAttribute('style', 'opacity: 0');
          sect_header.setAttribute('style', 'top:0; z-index:' + 14); // if(scrollStatus == true) sect_header.setAttribute('style', styles);

          if (page_blog) page_blog.classList.add('position_scroll');
          if (page_research) page_research.classList.add('position_scroll');
        }
      } else {
        sect_header.classList.remove('scroll-active');
        header_wrap.removeAttribute('style');
        sect_header.removeAttribute('style');
        if (page_blog) page_blog.classList.remove('position_scroll');
        if (page_research) page_research.classList.remove('position_scroll');
      }
    }

    if (document.querySelector('.header_menu_active')) {
      var index = 'z-index: 1;';
      if (catalog_header) catalog_header.setAttribute('style', index);
      if (sect_header) sect_header.setAttribute('style', index);
    }
  };

  window.addEventListener('scroll', function () {
    headerScrollPos();
  });
  window.addEventListener('resize', function () {
    headerScrollPos();
  });
  headerScrollPos();

  if (catalog_header) {
    window.addEventListener('scroll', function () {
      filterScrollPos();
    });
    filterScrollPos();
  }

  if (sect_header) {
    window.addEventListener('scroll', function () {
      filterScrollPos();
    });
    filterScrollPos();
  } // Slider


  var slider_dom = document.querySelector('#slider');

  if (slider_dom) {
    var SliderMain = null,
        mediaQuerySize = 1200;

    var sliderMainInit = function sliderMainInit() {
      if (!SliderMain) {
        SliderMain = new Swiper('#slider', {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          autoplay: {
            delay: 5000
          },
          pagination: {
            el: '.swiper-page',
            clickable: true
          },
          breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 127
            }
          }
        });
      }
    };

    var sliderMainDestroy = function sliderMainDestroy() {
      if (SliderMain) {
        SliderMain.destroy();
        SliderMain = null;
      }
    };

    window.addEventListener('load', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= mediaQuerySize) {
        sliderMainInit();
      } else {
        sliderMainDestroy();
      }
    });
    window.addEventListener('resize', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= mediaQuerySize) {
        // console.log(2);
        sliderMainInit();
      } else {
        sliderMainDestroy();
      }
    });
  } // reviews


  var reviews = new Swiper('#reviews', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 8000
    },
    navigation: {
      prevEl: '#reviews .swiper-nav-prev',
      nextEl: '#reviews .swiper-nav-next'
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 33
      }
    }
  });
  var wrapper = reviews.wrapperEl;

  if (wrapper) {
    [].forEach.call(reviews.slides, function (slide) {
      slide.style.height = "";
    });
    setTimeout(function () {
      [].forEach.call(reviews.slides, function (slide) {
        slide.style.height = wrapper.clientHeight + "px";
      });
    }, 300);
    document.addEventListener('resize', function () {
      [].forEach.call(reviews.slides, function (slide) {
        slide.style.height = "";
      });
      setTimeout(function () {
        [].forEach.call(reviews.slides, function (slide) {
          slide.style.height = wrapper.clientHeight + "px";
        });
      }, 300);
    });
  } // facts


  var facts = new Swiper('#facts', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: '#facts .swiper-nav-prev',
      nextEl: '#facts .swiper-nav-next'
    }
  }); // form events

  var form_subs = document.getElementById('form_subscribe');
  var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (form_subs) {
    form_subs.addEventListener('submit', function (event) {
      event.preventDefault();
      var fieldEmail = document.querySelectorAll('.field_email');
      fieldEmail.forEach(function (e) {
        if (emailReg.test(e.value) == false) {
          if (!e.parentNode.querySelector('.field_error')) {
            e.insertAdjacentHTML('afterEnd', '<span class="field_error">Ошибка! Неверный формат</span>');
            setTimeout(function () {
              e.parentNode.querySelector('.field_error').remove();
            }, 2000);
          }

          return false;
        } else {
          event.target.classList.add('form_send_success');
        }
      });
    });
  }

  var form_success_button = document.querySelector('.form_success button');
  form_success_button.addEventListener('click', function () {
    var form_reset = form_subs.querySelector('.field');
    form_reset.value = "";
    form_subs.classList.remove('form_send_success');
  });
  var feedback_form = document.getElementById('feedback_form');

  var validateField = function validateField(field) {
    var errorElement = '<span class="field_error_icon"></span>',
        successElement = '<span class="field_success_icon"></span>'; // event.insertAdjacentHTML('afterEnd', '<span class="field_error_icon"></span>');

    field.addEventListener('keyup', function (e) {
      var field_box = e.target.parentNode;

      if (e.target.getAttribute('data-field') != 'email') {
        if (e.target.value.length != 0) {
          if (field_box.querySelector('.field_error_icon')) {
            field_box.querySelector('.field_error_icon').remove();
          }

          if (!field_box.querySelector('.field_success_icon')) {
            e.target.classList.remove('error');
            e.target.insertAdjacentHTML('afterEnd', successElement);
          }
        } else {
          if (field_box.querySelector('.field_success_icon')) {
            field_box.querySelector('.field_success_icon').remove();
          }

          if (!field_box.querySelector('.field_error_icon')) {
            e.target.classList.add('error');
            e.target.insertAdjacentHTML('afterEnd', errorElement);
          }
        }
      } else {
        if (emailReg.test(e.target.value) == false) {
          if (field_box.querySelector('.field_success_icon')) {
            field_box.querySelector('.field_success_icon').remove();
          }

          if (!field_box.querySelector('.field_error_icon')) {
            e.target.classList.add('error');
            e.target.insertAdjacentHTML('afterEnd', errorElement);
          }
        } else {
          if (field_box.querySelector('.field_error_icon')) {
            field_box.querySelector('.field_error_icon').remove();
          }

          if (!field_box.querySelector('.field_success_icon')) {
            e.target.classList.remove('error');
            e.target.insertAdjacentHTML('afterEnd', successElement);
          }
        }
      }
    });
  };

  var validateFieldLength = function validateFieldLength(field) {
    var errorElement = '<span class="field_error_icon"></span>',
        fieldLength = field.value.length,
        field_box = field.parentNode;

    if (fieldLength == 0) {
      if (!field_box.querySelector('.field_error_icon')) {
        field.classList.add('error');
        field.insertAdjacentHTML('afterEnd', errorElement);
      }
    }
  };

  if (feedback_form) {
    var field_name = feedback_form.querySelector('#field_name'),
        field_email = feedback_form.querySelector('#field_email'),
        field_message = feedback_form.querySelector('#field_message');
    validateField(field_name);
    validateField(field_email);
    validateField(field_message);
    feedback_form.addEventListener('submit', function (event) {
      event.preventDefault();
      validateFieldLength(field_name);
      validateFieldLength(field_email);
      validateFieldLength(field_message);

      if (event.target.querySelector('.error')) {
        return false;
      } else {
        document.querySelector('#popup_feedback_success').classList.add('popup_active');
      }
    });
  }

  var form_subscribe_footer = document.querySelector('#form_subscribe_footer');
  form_subscribe_footer.addEventListener('submit', function (event) {
    event.preventDefault();
    var field = event.target.querySelector('#sub_email');

    if (emailReg.test(field.value) == false) {
      if (!field.parentNode.querySelector('.field_error')) {
        field.insertAdjacentHTML('afterEnd', '<span class="field_error">Ошибка! Неверный формат</span>');
        setTimeout(function () {
          field.parentNode.querySelector('.field_error').remove();
        }, 2000);
      }

      return false;
    } else {
      event.target.classList.add('form_send');
    }
  });
  var form_subscribe_success_button = form_subscribe_footer.querySelector('.form_success button');
  form_subscribe_success_button.addEventListener('click', function () {
    var form_reset = form_subscribe_footer.querySelector('#sub_email');
    form_reset.value = "";
    form_subscribe_footer.classList.remove('form_send');
  }); // popup events

  var popup = document.querySelectorAll('.popup_overlay');

  if (popup) {
    popup.forEach(function (e) {
      var popup_close = e.querySelector('.popup_overlay__close');
      popup_close.addEventListener('click', function () {
        e.classList.remove('popup_active');

        if (feedback_form) {
          var field = feedback_form.querySelectorAll('.field');
          var field_success = feedback_form.querySelectorAll('.field_success_icon');
          field.forEach(function (e) {
            return e.value = "";
          });
          field_success.forEach(function (e) {
            return e.remove();
          });
        }
      });
    });
  } // cookie events


  var cookie_wrap = document.querySelector('.cookie_info'),
      button_cookie_info = document.querySelector('#button_cookie_info'),
      button_cookie_ok = document.querySelector('#button_cookie_ok');
  button_cookie_info.addEventListener('click', function () {
    return cookie_wrap.classList.add('cookie_info__show');
  });
  button_cookie_ok.addEventListener('click', function () {
    return cookie_wrap.remove();
  }); // slider product

  var swiper_product = new Swiper('#swiper_product', {
    slidesPerView: 2,
    spaceBetween: 64,
    loop: true,
    navigation: {
      prevEl: '#swiper_product .swiper-nav-prev',
      nextEl: '#swiper_product .swiper-nav-next'
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 96
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 48
      }
    }
  }); // slider goods about

  var goods_slider = new Swiper('#goods_slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    // preloadImages: false,
    on: {
      init: function init(e) {
        if (e.slides.length == 1) {
          setTimeout(function () {
            document.querySelector('#goods_slider').parentNode.classList.add('slide_one');
          }, 300); // e.destroy();
        }
      }
    },
    navigation: {
      prevEl: '#goods_slider .swiper-nav-prev',
      nextEl: '#goods_slider .swiper-nav-next'
    }
  }); // slider researches about

  var researches_slider = new Swiper('#slider_researches', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: '#slider_researches .swiper-nav-prev',
      nextEl: '#slider_researches .swiper-nav-next'
    }
  }); // slider goods_reviews

  var goods_reviews = new Swiper('#goods_reviews', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      prevEl: '#goods_reviews .swiper-nav-prev',
      nextEl: '#goods_reviews .swiper-nav-next'
    },
    breakpoints: {
      1200: {
        slidesPerView: 2
      }
    }
  });
  var goods_reviews_wrapper = goods_reviews.wrapperEl;
  [].forEach.call(goods_reviews.slides, function (slide) {
    slide.style.height = "";
  });
  setTimeout(function () {
    [].forEach.call(goods_reviews.slides, function (slide) {
      slide.style.height = goods_reviews_wrapper.clientHeight + "px";
    });
  }, 300);
  var other_product = document.querySelector('#other_product');

  if (other_product) {
    var SliderOtherProduct = null,
        _mediaQuerySize = 767;

    var sliderOtherProductInit = function sliderOtherProductInit() {
      if (!SliderOtherProduct) {
        SliderOtherProduct = new Swiper('#other_product', {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            prevEl: '#other_product .swiper-nav-prev',
            nextEl: '#other_product .swiper-nav-next'
          } // breakpoints: {
          // 	1200: {
          // 		slidesPerView: 3,
          // 		spaceBetween: 127,
          // 	}
          // }

        });
      }
    };

    var sliderOtherProductDestroy = function sliderOtherProductDestroy() {
      if (SliderOtherProduct) {
        SliderOtherProduct.destroy();
        SliderOtherProduct = null;
      }
    };

    window.addEventListener('load', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= _mediaQuerySize) {
        sliderOtherProductInit();
      } else {
        sliderOtherProductDestroy();
      }
    });
    window.addEventListener('resize', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= _mediaQuerySize) {
        // console.log(2);
        sliderOtherProductInit();
      } else {
        sliderOtherProductDestroy();
      }
    });
  } // catalog events


  var button_catalog_close_nav = document.querySelectorAll('.catalog_close'),
      catalog_nav = document.querySelectorAll('.catalog__left'),
      catalog_nav_mod_1 = document.querySelector('#catalog_mod_1'),
      catalog_nav_mod_2 = document.querySelector('#catalog_mod_2'),
      button_on_catalog_mod_1 = document.querySelector('#button_on_catalog_mod_1'),
      button_on_catalog_mod_2 = document.querySelector('#button_on_catalog_mod_2');

  var catalog_menu_active = function catalog_menu_active() {
    if (button_on_catalog_mod_1 && button_on_catalog_mod_2) {
      button_on_catalog_mod_1.addEventListener('click', function () {
        return catalog_nav_mod_1.classList.add('active');
      });
      button_on_catalog_mod_2.addEventListener('click', function () {
        return catalog_nav_mod_2.classList.add('active');
      });
    }

    if (button_catalog_close_nav) {
      button_catalog_close_nav.forEach(function (e) {
        e.addEventListener('click', function () {
          catalog_nav.forEach(function (e) {
            return e.classList.remove('active');
          });
        });
      });
    }
  };

  if (window.outerWidth < 1200) {
    catalog_menu_active();
  }

  window.addEventListener('resize', function () {
    if (window.outerWidth < 1200) {
      catalog_menu_active();
    }
  }); // accordion

  var stickyEl = null;
  var position_sticky_block = document.querySelectorAll('.position-sticky');

  if (position_sticky_block.length) {
    position_sticky_block.forEach(function (e) {
      stickyEl = new Sticksy('.position-sticky', {
        topSpacing: 60,
        listen: true
      });

      stickyEl.onStateChanged = function (state) {
        if (state === 'fixed') stickyEl.nodeRef.classList.add('widget--sticky');else stickyEl.nodeRef.classList.remove('widget--sticky');
      }; // var sticky = new Sticky(e);


      console.log(e);
    });
  } // var sticky = new Sticky('.position-sticky');
  // Stickyfill.forceSticky(position_sticky_block);


  var accordion_item = document.querySelectorAll('.accordion__item');

  if (accordion_item) {
    accordion_item.forEach(function (e) {
      var button = e.querySelector('.title');
      button.addEventListener('click', function (event) {
        e.classList.toggle('active'); // console.log(position_sticky_block.length);

        if (position_sticky_block.length) {
          stickyEl.hardRefresh();
        }
      });
    });
  } // slider_article


  var slider_article = document.querySelector('#slider_article');

  if (slider_article) {
    var _SliderOtherProduct = null,
        _mediaQuerySize2 = 1200;

    var sliderArticleInit = function sliderArticleInit() {
      if (!_SliderOtherProduct) {
        _SliderOtherProduct = new Swiper('#slider_article', {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            prevEl: '#slider_article .swiper-nav-prev',
            nextEl: '#slider_article .swiper-nav-next'
          }
        });
      }
    };

    var sliderArticleDestroy = function sliderArticleDestroy() {
      if (_SliderOtherProduct) {
        _SliderOtherProduct.destroy();

        _SliderOtherProduct = null;
      }
    };

    window.addEventListener('load', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= _mediaQuerySize2) {
        sliderArticleInit();
      } else {
        sliderArticleDestroy();
      }
    });
    window.addEventListener('resize', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= _mediaQuerySize2) {
        // console.log(2);
        sliderArticleInit();
      } else {
        sliderArticleDestroy();
      }
    });
  } // parallax


  var images = document.querySelectorAll('.parallax_overlay img');
  new simpleParallax(images, {
    scale: 2.5,
    orientation: 'down',
    // overflow: true,
    delay: .6 // transition: 'cubic-bezier(0,0,0,1)'

  }); // popup

  var popup_partner = document.querySelector('#popup_partners'),
      button_popup_partner = document.querySelectorAll('.popup_bay_partner');
  button_popup_partner.forEach(function (e) {
    e.addEventListener('click', function (event) {
      event.preventDefault();
      popup_partner.classList.add('popup_active');
    });
  });
  var button_popup_review = document.querySelector('#button_add_reviews');
  var popup_review_form = document.querySelector('.popup_review');

  if (button_popup_review) {
    button_popup_review.addEventListener('click', function () {
      popup_review_form.classList.add('popup_active');
    });
  }

  if (popup_review_form) {
    var _field_name = popup_review_form.querySelector('#field_r_name'),
        _field_email = popup_review_form.querySelector('#field_r_email'),
        _field_message = popup_review_form.querySelector('#field_r_message');

    validateField(_field_name);
    validateField(_field_email);
    validateField(_field_message);
    popup_review_form.addEventListener('submit', function (event) {
      event.preventDefault();
      validateFieldLength(_field_name);
      validateFieldLength(_field_email);
      validateFieldLength(_field_message);

      if (event.target.querySelector('.error')) {
        return false;
      } else {
        popup_review_form.classList.remove('popup_active');
        document.querySelector('#popup_review_success').classList.add('popup_active');
      }
    });
  } // articles slider


  var aside_article_items = document.querySelector('#aside_article_items');

  if (aside_article_items) {
    var SliderAsideArticles = null,
        _mediaQuerySize3 = 1200;

    var sliderAsideArticlesInit = function sliderAsideArticlesInit() {
      if (!SliderAsideArticles) {
        SliderAsideArticles = new Swiper('#aside_article_items', {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            prevEl: '#aside_article_items .swiper-nav-prev',
            nextEl: '#aside_article_items .swiper-nav-next'
          } // breakpoints: {
          // 	1200: {
          // 		slidesPerView: 3,
          // 		spaceBetween: 127,
          // 	}
          // }

        });
      }
    };

    var sliderAsideArticlesDestroy = function sliderAsideArticlesDestroy() {
      if (SliderAsideArticles) {
        SliderAsideArticles.destroy();
        SliderAsideArticles = null;
      }
    };

    window.addEventListener('load', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= _mediaQuerySize3) {
        sliderAsideArticlesInit();
      } else {
        sliderAsideArticlesDestroy();
      }
    });
    window.addEventListener('resize', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= _mediaQuerySize3) {
        // console.log(2);
        sliderAsideArticlesInit();
      } else {
        sliderAsideArticlesDestroy();
      }
    });
  } // articles slider


  var aside_product_items = document.querySelector('#aside_product_items');

  if (aside_product_items) {
    var SliderAsideProduct = null,
        _mediaQuerySize4 = 768;

    var sliderAsideProductInit = function sliderAsideProductInit() {
      if (!SliderAsideProduct) {
        SliderAsideProduct = new Swiper('#aside_product_items', {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            prevEl: '#aside_product_items .swiper-nav-prev',
            nextEl: '#aside_product_items .swiper-nav-next'
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 112
            }
          }
        });
      }
    };

    var sliderAsideProductDestroy = function sliderAsideProductDestroy() {
      if (SliderAsideProduct) {
        SliderAsideProduct.destroy();
        SliderAsideProduct = null;
      }
    };

    window.addEventListener('load', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= _mediaQuerySize4) {
        sliderAsideProductInit();
      } else {
        sliderAsideProductDestroy();
      }
    });
    window.addEventListener('resize', function () {
      var windowWidthSlide = window.outerWidth;

      if (windowWidthSlide <= _mediaQuerySize4) {
        // console.log(2);
        sliderAsideProductInit();
      } else {
        sliderAsideProductDestroy();
      }
    });
  } // research aside


  var button_aside_menu_active = document.querySelector('.button_active_aside'),
      aside_menu = document.querySelector('#aside_menu');

  if (button_aside_menu_active) {
    button_aside_menu_active.addEventListener('click', function () {
      aside_menu.classList.add('active');
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.outerWidth >= 1200) {
      OverlayScrollbars(document.querySelector('#aside_menu'), {});
    }

    window.addEventListener('resize', function () {
      if (window.outerWidth >= 1200) {
        OverlayScrollbars(document.querySelector('#aside_menu'), {});
      }
    });
  }); // media keyboard

  function Touchyhandler(e) {
    e.preventDefault(); // console.log(1);
  }

  if (window.outerWidth < 900) {
    var field = document.querySelectorAll('.field');
    field.forEach(function (e) {
      e.addEventListener('focus', function () {
        document.querySelector('html').classList.add('overflow-none');
        document.querySelector('body').addEventListener('touchmove', Touchyhandler, {
          passive: false
        });
      });
      e.addEventListener('blur', function () {
        document.querySelector('html').classList.remove('overflow-none');
        document.querySelector('body').removeEventListener('touchmove', Touchyhandler);
      });
    });
  }

  var sect_nav_item = document.querySelectorAll('.sect_nav ul li a');

  if (sect_nav_item) {
    sect_nav_item.forEach(function (item) {
      item.addEventListener('click', function () {
        var parent = item.parentNode;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = parent.parentNode.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var sibling = _step.value;
            sibling.classList.remove('active');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        item.parentNode.classList.add('active');
      });
    });
  }

  document.querySelectorAll('a[href^="#"').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var href = this.getAttribute('href').substring(1);

      if (href) {
        var scrollTarget = document.getElementById(href);
        var topOffsetSectNav = document.querySelector('.sect_nav');
        var topOffsetHeader = document.querySelector('.header__top');
        var topOffset = 0;

        if (topOffsetSectNav) {
          topOffset = topOffsetSectNav.offsetHeight;
        }

        var elementPosition = scrollTarget.getBoundingClientRect().top;
        var offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};